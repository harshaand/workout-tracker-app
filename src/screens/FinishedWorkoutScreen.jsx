import React from 'react'
import '../css/modals.scss'
import ButtonBig from '../components/Buttons/ButtonBig';
import ButtonSmall from '../components/Buttons/ButtonSmall.jsx';
import { useData } from '../DataContext.jsx'
import { RoutingContext } from '../App.jsx'
import { ThreeStarsRow } from '../assets/icons/icons.js';
import CardWorkoutHistory from '../components/Cards/CardWorkoutHistory.jsx';
import ModalUpdateTemplate from '../components/Modals/session/confirmation-modals/finished-session/UpdateTemplate.jsx'
import ModalSaveAsNewTemplate from '../components/Modals/session/confirmation-modals/finished-session/SaveAsNewTemplate.jsx'
function FinishedWorkoutScreen({ oldExercises, newExercises, templateId, template, workoutId, currentDate, screenVariant, folderId, duration, templateName, notes }) {
    console.log('TEMPLATE NAME', templateName)
    const useLocalStorage = useData()
    const [data, saveData] = useLocalStorage('userData')
    const [showModal, setShowModal] = React.useState(false)
    const userCurrentWeight = data.user.weight
    const { handleScreenChange } = React.useContext(RoutingContext)

    const exercisesNewPRs = React.useRef({});
    const exercisesNewStrengthScores = React.useRef({});
    let totalPRs = 0;
    let totalVolume = 0;
    let totalReps = 0;
    const totalNumberOfWorkouts = React.useRef(data.history.length)
    //Lazy init to make sure workoutHistory is only init once & generateHistory() is only run once
    const workoutHistory = React.useRef(null);
    if (workoutHistory.current === null) {
        workoutHistory.current = generateHistory();
    }

    const exercisesSame = JSON.stringify(newExercises) === JSON.stringify(oldExercises);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    function generateHistory() {
        //--------------------------APPENDING WORKOUT TO HISTORY--------------------------
        const filteredExercises = newExercises.filter(exercise => exercise.sets.some(set => set.completed === true))
            .map(exercise => {
                return {
                    ...exercise,
                    sets: exercise.sets.filter(set => set.completed === true)
                };
            });

        console.log('filteredExercises!!!', filteredExercises)
        const workoutHistoryExercises = [
            ...filteredExercises.map(exercise => {
                const exerciseName = exercise.name;
                const exerciseData = data.exercises.find(ex => ex.name === exerciseName)

                if (exerciseData) {
                    exercisesNewPRs.current = {
                        ...exercisesNewPRs.current,
                        [exerciseName]: { ...exerciseData.PRs }
                    }
                    const prKeys = Object.keys(exerciseData.PRs);

                    prKeys.forEach(prKey => {

                        function getPRValue(set) {
                            const reps = Number(Number(set.reps).toFixed(1))
                            const weight = Number(Number(set.weight).toFixed(1))
                            const oneRepMax = reps < 37 ? weight * (36 / (37 - reps)) : 0
                            const eliteRatio = exerciseData.thresholds === undefined ? undefined : exerciseData.thresholds[data.user.sex].elite
                            const strengthScore = eliteRatio === undefined || oneRepMax === 0 ? 0 : Math.min(100, (oneRepMax / (userCurrentWeight * eliteRatio) * 100))
                            switch (prKey) {
                                case 'volume': return Number((reps * weight).toFixed(1));
                                case '1RM': return Number(oneRepMax.toFixed(1));
                                case 'strengthScore': return Number(strengthScore.toFixed(1));
                                default: return Number(set[prKey]);
                            }
                        };

                        let highestValue = Math.max(...exercise.sets.map(set => getPRValue(set)));
                        let assigned = false;

                        exercise.sets.forEach(set => {
                            if (!set.PRs) {
                                set.PRs = {};
                                Object.keys(exerciseData.PRs).forEach(prKey => {
                                    set.PRs[prKey] = false;
                                });
                            }

                            const value = getPRValue(set);
                            //total volume + reps for workout
                            if (prKey === 'volume') {
                                totalVolume += value;
                            }
                            if (prKey === 'reps') {
                                totalReps += value;
                            }
                            /* storing strength scores that have surpassed previous ones so that can update strength scores of corresponding exercise
                            in data.strengthScores object */
                            if (prKey === 'strengthScore' && value === highestValue && !assigned && value > exerciseData.PRs['strengthScore']) {
                                exercisesNewStrengthScores.current = {
                                    ...exercisesNewStrengthScores.current,
                                    [exerciseName]: Number(value.toFixed(1))
                                }
                            }
                            //identifying best set in exercise
                            if (value === highestValue && !assigned && prKey === exerciseData.prMetric) {
                                set.bestSet = true;
                            }
                            //main logic: identifying which set broke the PR
                            if (value === highestValue && !assigned && value > exerciseData.PRs[prKey]) {
                                set.PRs[prKey] = true;
                                assigned = true;
                                exercisesNewPRs.current = {
                                    ...exercisesNewPRs.current,
                                    [exerciseName]: { ...exercisesNewPRs.current[exerciseName], [prKey]: value }
                                }
                                totalPRs++
                            } else {
                                set.PRs[prKey] = false;
                            }

                        });
                    });
                    return exercise;
                }
                else {
                    //create new exercise object 
                }
            })
        ]
        console.log('workoutHistoryExercises 1!!!', workoutHistoryExercises)

        return {
            id: template.id,
            name: templateName,
            duration: duration,
            notes: notes,
            workoutId: workoutId,

            date: currentDate,
            exercises: workoutHistoryExercises,
            PRs: totalPRs,
            volume: totalVolume,
            reps: totalReps,
        }
    }

    function saveToHistory() {
        saveData(prevData => {
            const strengthScores = Object.fromEntries(
                Object.entries(prevData.strengthScores).map(([muscleGroup, exercises]) => {
                    const updatedExercises = { ...exercises };

                    for (const [exercise, newScore] of Object.entries(exercisesNewStrengthScores.current)) {
                        if (exercise in updatedExercises) {
                            updatedExercises[exercise] = newScore;
                        }
                    }

                    return [muscleGroup, updatedExercises];
                })
            );
            return {
                ...prevData,
                history: [
                    ...prevData.history,
                    workoutHistory.current
                ],
                strengthScores: strengthScores
            }
        })



        //--------------------------UPDATING EXERCISE OBJECT--------------------------
        let updatedExerciseObjects = {}
        console.log('workoutHistoryExercises 2!!!', workoutHistory.current.exercises)
        workoutHistory.current.exercises.forEach(exercise => {
            const exerciseName = exercise.name;
            const exerciseData = data.exercises.find(ex => ex.name === exerciseName);
            const history = exerciseData.history.find(history => history.workoutId === workoutId);

            if (exerciseData && history) {
                updatedExerciseObjects = {
                    ...updatedExerciseObjects,
                    [exerciseName]: {
                        ...history,
                        newPRs: exercisesNewPRs.current[exerciseName],
                        sets: [
                            ...history.sets,
                            ...exercise.sets.map(set => (
                                {
                                    weight: set.weight,
                                    reps: set.reps,
                                    PRs: set.PRs
                                }
                            ))
                        ]
                    }
                }
            }
            else {
                updatedExerciseObjects = {
                    ...updatedExerciseObjects,
                    [exerciseName]: {
                        currentWeight: userCurrentWeight,
                        currentPRs: exerciseData.PRs,
                        newPRs: exercisesNewPRs.current[exerciseName],
                        date: currentDate,
                        workoutId: workoutId,
                        sets: [
                            ...exercise.sets.map(set => (
                                {
                                    weight: set.weight,
                                    reps: set.reps,
                                    PRs: set.PRs
                                }
                            ))
                        ]
                    }
                }
            }
            saveData(prevData => {
                return {
                    ...prevData,

                    exercises: prevData.exercises.map((exercise, index) => {
                        if (exercise.name in updatedExerciseObjects) {

                            return {
                                ...exercise,
                                PRs: exercisesNewPRs.current[exercise.name],
                                history: exercise.history.find(history => history.workoutId === workoutId) ?
                                    [...exercise.history.map(history => {
                                        if (history.workoutId === workoutId) {
                                            return updatedExerciseObjects[exercise.name]
                                        }
                                        else return history
                                    })]
                                    :

                                    [...exercise.history, updatedExerciseObjects[exercise.name]]
                            }
                        }
                        else return exercise
                    }
                    )
                }
            })


        })

        console.log('updatedExerciseObjects', updatedExerciseObjects)

    }

    function handleUpdateValues() {
        const updatedExercises = oldExercises.map(oldExercise => {
            const persistedExercise = newExercises.find(exercise => exercise.name === oldExercise.name);
            if (persistedExercise) {
                return {
                    ...oldExercise,
                    sets: oldExercise.sets.map((set, index) => {
                        if (persistedExercise.sets[index]) {
                            if (persistedExercise.sets[index].completed === true) {
                                return {
                                    id: persistedExercise.sets[index].id,
                                    value: persistedExercise.sets[index].value,
                                    num: persistedExercise.sets[index].num,
                                    weight: persistedExercise.sets[index].weight,
                                    reps: persistedExercise.sets[index].reps,
                                    completed: persistedExercise.sets[index].completed,
                                }
                            }
                            else {
                                return {
                                    ...set,
                                    id: persistedExercise.sets[index].id,
                                    value: persistedExercise.sets[index].value,
                                    num: persistedExercise.sets[index].num,
                                }
                            }
                        }
                        else return set
                    }
                    )
                }
            }
            else return oldExercise
        })
        const finalExercises = updatedExercises.map(exercise => {
            return {
                ...exercise,
                sets: exercise.sets.map(set => {
                    return {
                        ...set,
                        completed: false
                    }
                })
            }
        })
        saveData(prevData => {
            return {
                ...prevData,
                templates: data.templates.map((template, index) => {
                    if (template.id === templateId) return {
                        ...template,
                        lastDone: currentDate,
                        exercises: finalExercises
                    }
                    else return template
                }
                )
            }
        })
    }

    function handleUpdateTemplate() {
        const filteredExercises = newExercises.filter(exercise => exercise.sets.some(set => set.completed === true))
            .map(exercise => {
                return {
                    ...exercise,
                    sets: exercise.sets.filter(set => set.completed === true)
                };
            });
        const finalExercises = filteredExercises.map(exercise => {
            return {
                ...exercise,
                sets: exercise.sets.map(set => {
                    return {
                        ...set,
                        completed: false
                    }
                })
            }
        })
        saveData(prevData => {
            const templateExists = prevData.templates.find(template => template.id === templateId) ? true : false
            const updatedTemplates = templateExists ?
                prevData.templates.map((template) => {
                    if (template.id === templateId) return {
                        ...template,
                        name: templateName,
                        notes: notes,
                        lastDone: currentDate,
                        exercises: finalExercises
                    }
                    else return template
                })
                : [
                    ...prevData.templates,
                    {
                        ...template,
                        name: templateName,
                        notes: notes,
                        lastDone: currentDate,
                        exercises: finalExercises
                    }
                ]
            const updatedFolders = templateExists ? prevData.templateFolders :
                {
                    ...prevData.templateFolders,
                    myTemplates: [...prevData.templateFolders.myTemplates, template.id]
                }

            return {
                ...prevData,
                templates: updatedTemplates,
                templateFolders: updatedFolders
            }
        })
    }
    return (
        <div className='session-finished__container'>
            <div className='session-finished__main'>

                <div className='nav-btns'>
                    <ButtonSmall type='closeModal' onClick={() => handleScreenChange('TemplatesScreen')} />
                    <div></div>
                </div>
                <div className='header'>
                    <ThreeStarsRow />
                    <div className='container-message'>
                        <h2>Great Job!</h2>
                        <p>That's your {totalNumberOfWorkouts.current + 1}th workout!</p>
                    </div>
                </div>

                <div className='container-template-card'>
                    <CardWorkoutHistory history={workoutHistory.current} type='finishedScreen' />
                </div>
            </div>

            {screenVariant === 'newEmptySession' &&
                <ModalSaveAsNewTemplate showModal={showModal} setShowModal={setShowModal}
                    handleUpdateTemplate={handleUpdateTemplate} saveToHistory={saveToHistory} />}

            {screenVariant === 'newSession' && !exercisesSame &&
                <ModalUpdateTemplate showModal={showModal} setShowModal={setShowModal} oldExercises={oldExercises} newExercises={newExercises}
                    saveToHistory={saveToHistory} handleUpdateValues={handleUpdateValues} handleUpdateTemplate={handleUpdateTemplate} folderId={folderId} />}
        </div>
    )
}

export default FinishedWorkoutScreen