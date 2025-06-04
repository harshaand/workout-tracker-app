import React from 'react'
import '../css/modals.scss'
import ButtonBig from '../components/Buttons/ButtonBig';
import ButtonSmall from '../components/Buttons/ButtonSmall.jsx';
import { useData, useDataUpdate } from '../DataContext.jsx'
import { RoutingContext } from '../App.jsx'
import { ThreeStarsRow } from '../assets/icons/icons.js';
import CardWorkoutHistory from '../components/Cards/CardWorkoutHistory.jsx';


function FinishedWorkoutScreen({ oldExercises, newExercises, templateId, template, workoutId, currentDate, screenVariant, duration, templateName, notes }) {
    console.log('TEMPLATE NAME', templateName)
    const data = useData()
    const setData = useDataUpdate()
    const [showModal, setShowModal] = React.useState(false)
    const userCurrentWeight = data.user.weight
    const { handleScreenChange } = React.useContext(RoutingContext)

    console.log('NEW EXERCISES!!!!!!!!:', newExercises)//BUG, showing something unexpected after saveToHistory
    let updatedValues = false;
    let updatedValuesMessage = '';
    let removedValues = false;
    let updateTemplateMessage = '';
    let modalComponent;
    let updateTemplateButton = null;

    const exercisesNewPRs = React.useRef({});
    let totalPRs = 0;
    let totalVolume = 0;
    let totalReps = 0;
    const totalNumberOfWorkouts = React.useRef(data.history.length)
    //Lazy init to make sure workoutHistory is only init once & generateHistory() is only run once
    const workoutHistory = React.useRef(null);
    if (workoutHistory.current === null) {
        workoutHistory.current = generateHistory();
    }

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    const exercisesSame = JSON.stringify(newExercises) === JSON.stringify(oldExercises);
    console.log('screenVariant!!!!!', screenVariant)
    if (screenVariant === 'newEmptySession') {
        modalComponent = (
            <>
                <button className='modal-overlay' onClick={() => setShowModal(false)}></button>
                <div className='modal modal-spacing--default'>
                    <h3>Save as new Template?</h3>
                    <div className='content-spacing--default'>
                        <p>Save this workout as a template so you can perform it again in the future?</p>
                        <div className='modal__buttons--vertical'>
                            <ButtonBig color='blue' onClick={() => {
                                handleUpdateTemplate()
                                saveToHistory()
                                setShowModal(false)
                                // handleScreenChange('TemplatesScreen')
                            }}>Save as Template</ButtonBig>
                            <ButtonBig color='gray' onClick={() => setShowModal(false)}>No thanks!</ButtonBig>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    else if (!exercisesSame && screenVariant === 'newSession') {

        // Array to collect all change messages
        const changes = [];

        // NUMBER OF EXERCISES REMOVED BY USER
        const newExercisesNames = new Set(newExercises.map(exercise => exercise.name));
        const userRemovedExercises = oldExercises.filter(ex => !newExercisesNames.has(ex.name));
        const uncompletedExercises = newExercises.filter(exercise => !exercise.sets.some(set => set.completed === true));
        const toBeRemovedExercisesCount = userRemovedExercises.length + uncompletedExercises.length
        if (toBeRemovedExercisesCount > 0) {
            removedValues = true;
            const message = `Remove ${toBeRemovedExercisesCount} exercise${toBeRemovedExercisesCount > 1 ? 's' : ''}`;
            changes.push({ priority: 1, type: 'remove_exercises', message });
        }

        // NUMBER OF EXERCISES ADDED BY USER
        const oldExercisesNames = new Set(oldExercises.map(exercise => exercise.name));
        const userAddedExercises = newExercises.filter(ex => !oldExercisesNames.has(ex.name));
        const toBeAddedExercisesCount = userAddedExercises.filter(exercise => exercise.sets.some(set => set.completed === true)).length;
        if (toBeAddedExercisesCount > 0) {
            const message = `Add ${toBeAddedExercisesCount} exercise${toBeAddedExercisesCount > 1 ? 's' : ''}`;
            changes.push({ priority: 2, type: 'add_exercises', message });
        }

        // CHECK IF EXERCISE ORDER IS DIFFERENT
        let orderDifferent = false;
        //REPLACEMENT CODE:
        //-when user drags&drops to change order, have a useRef called orderDifferent and switch it to true.
        //otherwise will need to write me a long algorithm for minimum utility
        //orignal code is there on the commit on May 6, 2025 for this file.

        if (orderDifferent) {
            const message = 'Reorder exercises';
            changes.push({ priority: 3, type: 'reorder', message });
        }

        // CALCULATING DIFFERENCES IN SETS
        const oldExercisesMap = new Map();
        oldExercises.forEach(exercise => {
            oldExercisesMap.set(exercise.name, exercise);
        });

        let totalDifferentSets = 0;
        let totalMoreSets = 0;
        let totalLessSets = 0;

        for (const persistedExercise of newExercises) {
            const oldExercise = oldExercisesMap.get(persistedExercise.name);

            // skip if exercise doesn't exist in the old template
            if (!oldExercise) continue;
            const completedSetsCount = persistedExercise.sets.filter(set => set.completed === true).length;

            // difference in number of sets
            if (completedSetsCount > oldExercise.sets.length) {
                totalMoreSets += (completedSetsCount - oldExercise.sets.length);
            }
            /*if exercises doesn't have any completed sets, don't need to calculate number of
             sets to be removed because the whole exercise will be removed */
            if (persistedExercise.sets.some(set => set.completed === true)
                && oldExercise.sets.length > completedSetsCount) {
                totalLessSets += (oldExercise.sets.length - completedSetsCount);
            }

            // number of sets with different values for weight/reps
            const minSetsLength = Math.min(oldExercise.sets.length, persistedExercise.sets.length);
            for (let i = 0; i < minSetsLength; i++) {
                const oldSet = oldExercise.sets[i];
                const newSet = persistedExercise.sets[i];

                if (newSet.completed === true && (oldSet.weight !== newSet.weight || oldSet.reps !== newSet.reps)) {
                    totalDifferentSets++;
                }
            }
        }

        if (totalDifferentSets > 0) {
            updatedValues = true;
            updatedValuesMessage = `Update values for ${totalDifferentSets} sets`
        }

        if (totalMoreSets > 0) {
            const message = `Add ${totalMoreSets} set${totalMoreSets > 1 ? 's' : ''}`;
            changes.push({ priority: 2, type: 'add_sets', message });
        }

        if (totalLessSets > 0) {
            removedValues = true;
            const message = `Remove ${totalLessSets} set${totalLessSets > 1 ? 's' : ''}`;
            changes.push({ priority: 1, type: 'remove_sets', message });
        }


        // SORT BY PRIORITY ORDER
        changes.sort((a, b) => {
            if (a.priority !== b.priority) {
                return a.priority - b.priority;
            }

            const typeOrder = {
                'remove_exercises': 1,
                'remove_sets': 2,
                'add_exercises': 3,
                'add_sets': 4,
                'reorder': 5,
                'update_sets': 6
            };

            return typeOrder[a.type] - typeOrder[b.type];
        });

        // combine messages into 1 string
        if (changes.length > 0) {
            updateTemplateMessage = changes.map(change => change.message).join('. ');
        }


        if (updateTemplateMessage.length > 0) {
            if (removedValues) {
                updateTemplateButton = <ButtonBig onClick={() => {
                    handleUpdateTemplate()
                    saveToHistory()
                    setShowModal(false)
                    // handleScreenChange('TemplatesScreen')
                }} color="redSoft">
                    <div>
                        <div className='main-text'>Update Template and Values</div>
                        <div className='supporting-text'>{updateTemplateMessage}</div>
                    </div>
                </ButtonBig>;
            } else {
                updateTemplateButton = <ButtonBig onClick={() => {
                    handleUpdateTemplate()
                    saveToHistory()
                    setShowModal(false)
                    // handleScreenChange('TemplatesScreen')
                }} color="blueSoft">
                    <div>
                        <div className='main-text'>Update Template and Values</div>
                        <div className='supporting-text'>{updateTemplateMessage}</div>
                    </div>
                </ButtonBig>;
            }
        }

        modalComponent = (
            <>
                <button className='modal-overlay' onClick={() => setShowModal(false)}></button>
                <div className='modal modal-spacing--default'>
                    <h3>Update Template?</h3>
                    <div className='content-spacing--default'>
                        <p>You've made changes from your original template. Would you like to update it?</p>
                        <div className='modal__buttons--vertical'>

                            {updatedValues &&
                                <ButtonBig onClick={() => {
                                    handleUpdateValues()
                                    saveToHistory()
                                    setShowModal(false)
                                    // handleScreenChange('TemplatesScreen')
                                }}>
                                    <div>
                                        <div className='main-text'>Update Values Only</div>
                                        <div className='supporting-text'>{updatedValuesMessage}</div>
                                    </div>
                                </ButtonBig>}

                            {updateTemplateButton}

                            <ButtonBig color="gray" onClick={() => {
                                saveToHistory()
                                setShowModal(false)
                                // handleScreenChange('TemplatesScreen')
                            }}>Keep Orignal</ButtonBig>

                        </div>
                    </div>
                </div>
            </>
        );
    }

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

                        const getPRValue = set => {
                            const reps = Number(set.reps)
                            const weight = Number(set.weight)
                            const oneRepMax = reps < 37 ? weight * (36 / (37 - reps)) : 0
                            const eliteRatio = exerciseData.thresholds === undefined ? undefined : exerciseData.thresholds[data.user.sex].elite
                            const strengthScore = eliteRatio === undefined || oneRepMax === 0 ? 0 : Math.min(100, (oneRepMax / (userCurrentWeight * eliteRatio) * 100))
                            switch (prKey) {
                                case 'volume': return reps * weight;
                                case '1RM': return oneRepMax;
                                case 'strengthScore': return strengthScore;
                                default: return Number(set[prKey]);
                            }
                        };

                        let highestValue = Math.max(...exercise.sets.map(getPRValue));
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

        setData(prevData => {
            return {
                ...prevData,

                history: [
                    ...prevData.history,
                    workoutHistory.current
                ],
            }

        })



        //--------------------------UPDATING EXERCISE OBJECT--------------------------
        let updatedExerciseObjects = {}
        console.log('workoutHistoryExercises 2!!!', workoutHistory.current.exercises)
        workoutHistory.current.exercises.forEach(exercise => {
            const exerciseName = exercise.name;
            const exerciseData = data.exercises.find(ex => ex.name === exerciseName);
            const history = exerciseData.history.find(history => history.workoutId === workoutId);

            exerciseData && history ?
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
                :
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


            setData(prevData => {
                return {
                    ...prevData,

                    exercises: data.exercises.map((exercise, index) => {
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
        setData(prevData => {
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
        setData(prevData => {
            const templateExists = prevData.templates.find(template => template.id === templateId) ? true : false
            return {
                ...prevData,
                templates: templateExists ?
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
                    <CardWorkoutHistory history={workoutHistory.current} customClasses='card-workout-history-finished-workout-screen' />
                </div>
            </div>

            {showModal && modalComponent}
        </div>
    )
}

export default FinishedWorkoutScreen