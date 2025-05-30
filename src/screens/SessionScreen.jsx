import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../css/buttons.scss';
import '../css/modals.scss';
import '../css/screens.scss'

import ButtonSmall from '../components/Buttons/ButtonSmall.jsx'
import ButtonBig from '../components/Buttons/ButtonBig.jsx'
import FolderList from '../OTHER/FoldersFunctionality.jsx'

import CardExerciseTracker from '../components/Cards/CardExerciseTracker.jsx'
import ModalAddExercises from '../components/Modals/session/AddExercises.jsx'
import ModalCreateExercise from '../components/Modals/session/CreateExercise.jsx'

import ModalFinishWorkout from '../components/Modals/session/FinishWorkout.jsx'
import ModalSaveAsNewTemplate from '../components/Modals/session/SaveAsNewTemplate.jsx'
import ModalSaveWorkout from '../components/Modals/session/SaveEditedWorkout.jsx'
import ModalSaveTemplate from '../components/Modals/session/SaveEditedTemplate.jsx'
import FinishedWorkoutScreen from './FinishedWorkoutScreen.jsx'

import { useData, useDataUpdate } from '../DataContext.jsx'

import { RoutingContext } from '../App.jsx'

function SessionScreen({ template, screenVariant = 'newSession' }) {
    const data = useData()
    const setData = useDataUpdate()
    /* SCREEN VARIANTS
    1. newSession ------new key
    2. editSession -----old key
    3. editTemplate   
    4. newEmptyTemplate
    5. newEmptySession -new key
    */
    const [sessionDuration, setSessionDuration] = React.useState(0);
    const intervalRef = React.useRef(null);

    const { handleScreenChange } = React.useContext(RoutingContext)
    const [exercises, setExercises] = React.useState(template.exercises)
    const [showAddExercisesModal, setShowAddExercisesModal] = React.useState(false)
    const [showCreateExerciseModal, setShowCreateExerciseModal] = React.useState(false)

    //Finish modals
    const [showFinishModal, setShowFinishModal] = React.useState(false)
    const [showSaveWorkoutModal, setShowSaveWorkoutModal] = React.useState(false)
    const [showSaveTemplateModal, setShowSaveTemplateModal] = React.useState(false)

    const workoutId = template.workoutId
    const currentDate = new Date();

    const currentWeightInExHistory = React.useRef(null)
    const userCurrentWeight = React.useRef(null)

    const notes = React.useRef(null)

    React.useEffect(() => {
        if (screenVariant === 'newSession' || screenVariant === 'newEmptySession') {
            intervalRef.current = setInterval(() => {
                setSessionDuration(prev => prev + 1);
            }, 1000);
        }

        currentWeightInExHistory.current = exercises.map(exercise => {
            const exWithUserWeight = data.exercises.find(ex => ex.name === exercise.name)?.history.find(history => history.workoutId === template.workoutId);
            return exWithUserWeight?.currentWeight;
        }).find(weight => weight !== undefined);

        userCurrentWeight.current = currentWeightInExHistory.current === undefined ? data.user.weight : currentWeightInExHistory.current

        return () => clearInterval(intervalRef.current);

    }, [])

    function formatTime(totalSeconds) {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        const paddedHrs = String(hrs).padStart(1, '0');
        let paddedMins = String(mins).padStart(1, '0');
        const paddedSecs = String(secs).padStart(2, '0');

        if (hrs > 0) {
            paddedMins = String(mins).padStart(2, '0');
            return `${paddedHrs}:${paddedMins}:${paddedSecs}`; // hh:mm:ss
        } else {
            return `${paddedMins}:${paddedSecs}`; // mm:ss
        }
    };

    function toggleSetCompleted(exerciseName, setNum) {
        setExercises(prevExercises => (
            prevExercises.map(exercise => exercise.name === exerciseName ?
                {
                    ...exercise,
                    sets: exercise.sets.map(set => set.num === setNum ? { ...set, completed: !set.completed } : set)
                } :
                exercise)
        ))
    }

    function addSet(exerciseName) {
        setExercises(prevExercises => {
            return prevExercises.map(exercise => {
                if (exercise.name === exerciseName) {
                    const nextSetNum = exercise.sets.length + 1;

                    const newSet = {
                        id: uuidv4(),
                        value: nextSetNum,
                        num: nextSetNum,
                        weight: 0,
                        reps: 0,
                        completed: false
                    };

                    return {
                        ...exercise,
                        sets: [...exercise.sets, newSet]
                    };
                }
                else { return exercise; }
            });
        });
    };

    function deleteSet(exerciseName, setID) {
        setExercises(prevExercises => {
            return prevExercises.map(exercise => {
                if (exercise.name === exerciseName) {
                    const updatedSets = exercise.sets.filter(set => set.id !== setID);
                    const reorderedSets = updatedSets.map((set, index) => ({
                        ...set,
                        num: index + 1
                    }));

                    return {
                        ...exercise,
                        sets: reorderedSets
                    };
                }
                else { return exercise; }
            });
        });
    };

    function createExercise(exerciseName) {
        setData(prevData => {
            return {
                ...prevData,
                exercises: [
                    ...prevData.exercises,
                    {
                        name: exerciseName,
                        prMetric: 'volume',
                        PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
                        thumbnail: '',
                        instructions: { media: '', text: '' },
                        history: []
                    }
                ]
            }
        })
        setShowAddExercisesModal(false)
    }

    function addExercises(exercises) {
        exercises.forEach(selectedExercise => {
            const weight = data.exercises.find(exercise => exercise.name === selectedExercise).history?.at(-1)?.sets?.at(0)?.weight
            const reps = data.exercises.find(exercise => exercise.name === selectedExercise).history?.at(-1)?.sets?.at(0)?.reps
            setExercises(prevExercises => (
                [
                    ...prevExercises,
                    {
                        id: uuidv4(),
                        name: selectedExercise,
                        sets:
                            [
                                {
                                    id: uuidv4(),
                                    value: 1,
                                    num: 1,
                                    weight: weight === undefined ? 0 : weight,
                                    reps: reps === undefined ? 0 : reps,
                                    completed: false,
                                    PRs: { '1RM': false, weight: false, reps: false, volume: false, strengthScore: false },
                                    bestSet: false
                                }
                            ]
                    }
                ]
            ))
        })
        setShowAddExercisesModal(false)
    }

    function handleOptionClick(option, exerciseName, setId) {
        setExercises(prevExercises => {
            return prevExercises.map(exercise => {
                if (exercise.name === exerciseName) {
                    const setIndex = exercise.sets.findIndex(set => set.id === setId);
                    if (setIndex === -1) return exercise;
                    const newSets = [...exercise.sets];

                    //if ANYTHING + [W] -> W
                    if (option === 'W' && newSets[setIndex].value !== 'W') {
                        newSets[setIndex] = {
                            ...newSets[setIndex],
                            value: 'W',
                            num: 0,
                        };
                        //decrement all following sets
                        for (let i = setIndex + 1; i < newSets.length; i++) {
                            if (typeof newSets[i].num === 'number' && !isNaN(newSets[i].num)) {
                                const val = Number(newSets[i].value);
                                const newVal = Number.isInteger(val) && !isNaN(val) ? newSets[i].value - 1 : newSets[i].value;
                                newSets[i] = {
                                    ...newSets[i],
                                    value: newVal,
                                    num: newSets[i].num - 1
                                };
                            }
                        }
                    }

                    // if 
                    // W + [W] -> NUMBER
                    else if (option === 'W' && newSets[setIndex].value === 'W') {
                        for (let i = setIndex + 1; i < newSets.length; i++) {
                            //new set number = get next set's number (before incrementing following sets)
                            if (newSets[i].num !== 0 && newSets[setIndex].value === 'W' &&
                                newSets[i] && newSets[i].num !== undefined) {
                                newSets[setIndex] = {
                                    ...newSets[setIndex],
                                    value: newSets[i].num,
                                    num: newSets[i].num,
                                };
                            }
                            //increment all following sets
                            const val = Number(newSets[i].value);
                            const newVal = Number.isInteger(val) && !isNaN(val) ? newSets[i].value + 1 : newSets[i].value;
                            newSets[i] = {
                                ...newSets[i],
                                value: newVal,
                                num: newSets[i].num + 1
                            };
                        }
                    }

                    // if 
                    // W + [D/F]-> D/F
                    else if (option !== 'W' && newSets[setIndex].value === 'W') {
                        for (let i = setIndex + 1; i < newSets.length; i++) {
                            //increment all following sets
                            const val = Number(newSets[i].value);
                            const newVal = Number.isInteger(val) && !isNaN(val) ? newSets[i].value + 1 : newSets[i].value;
                            newSets[i] = {
                                ...newSets[i],
                                value: newVal,
                                num: newSets[i].num + 1
                            };
                            //new set number = get next set's number then decrement (after incrementing following sets)
                            if (newSets[i].num !== 0 && newSets[setIndex].value === 'W' &&
                                newSets[i] && newSets[i].num !== undefined) {
                                newSets[setIndex] = {
                                    ...newSets[setIndex],
                                    value: option,
                                    num: newSets[i].num - 1,
                                };
                            }
                        }
                    }

                    // if (corresponding)
                    // D/F + [D/F]-> NUMBER
                    else if (option === newSets[setIndex].value) {
                        newSets[setIndex] = {
                            ...newSets[setIndex],
                            value: newSets[setIndex].num,
                        };
                    }

                    // if (corresponding)
                    // NUMBER + [D/F]-> D/F
                    else {
                        newSets[setIndex] = {
                            ...newSets[setIndex],
                            value: option,
                        };
                    }

                    return {
                        ...exercise,
                        sets: newSets
                    };
                }
                return exercise;
            });
        });

    };

    function saveTemplateValues(exerciseName, setId, weight, reps) {
        setExercises(prevExercises => (
            prevExercises.map(exercise => {
                weight = Number(weight)
                reps = Number(reps)
                return exercise.name === exerciseName ?
                    {
                        ...exercise,
                        sets: exercise.sets.map(set => set.id === setId ? { ...set, weight: weight, reps: reps } : set)
                    } :
                    exercise
            })
        ))
    }

    function saveToHistory() {
        //--------------------------APPENDING WORKOUT TO HISTORY--------------------------
        const filteredExercises = exercises.filter(exercise => exercise.sets.some(set => set.completed === true))
            .map(exercise => {
                return {
                    ...exercise,
                    sets: exercise.sets.filter(set => set.completed === true)
                };
            });
        let exercisesNewPRs = {};
        let totalPRs = 0;
        let totalVolume = 0;
        let totalReps = 0;
        console.log('filteredExercises:', filteredExercises)
        const workoutHistoryExercises = [
            ...filteredExercises.map(exercise => {
                const exerciseName = exercise.name;
                const exerciseData = data.exercises.find(ex => ex.name === exerciseName);
                if (exerciseData) {
                    exercisesNewPRs = {
                        ...exercisesNewPRs,
                        [exerciseName]: { ...exerciseData.PRs }
                    }
                    const prKeys = Object.keys(exerciseData.PRs);

                    prKeys.forEach(prKey => {

                        const getPRValue = set => {
                            const reps = Number(set.reps)
                            const weight = Number(set.weight)
                            const oneRepMax = reps < 37 ? weight * (36 / (37 - reps)) : 0
                            const eliteRatio = exerciseData.thresholds === undefined ? undefined : exerciseData.thresholds[data.user.sex].elite
                            const strengthScore = eliteRatio === undefined || oneRepMax === 0 ? 0 : Math.min(100, (oneRepMax / (userCurrentWeight.current * eliteRatio) * 100))
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
                                exercisesNewPRs = {
                                    ...exercisesNewPRs,
                                    [exerciseName]: { ...exercisesNewPRs[exerciseName], [prKey]: value }
                                }
                                totalPRs++
                            } else {
                                set.PRs[prKey] = false;
                            }

                        });
                    });

                    return exercise;
                }
            })
        ]

        setData(prevData => {
            return {
                ...prevData,
                history: [
                    ...prevData.history.map(history => {
                        if (history.workoutId === workoutId) {
                            return {
                                ...history,
                                notes: notes.current.value,

                                exercises: workoutHistoryExercises,
                                PRs: totalPRs,
                                volume: totalVolume,
                                reps: totalReps,
                            }
                        }
                        else return history
                    })
                ],
            }
        })



        //--------------------------UPDATING EXERCISE OBJECT--------------------------
        let updatedExerciseObjects = {}
        console.log('workoutHistoryExercises1', workoutHistoryExercises)
        workoutHistoryExercises.forEach(exercise => {
            const exerciseName = exercise.name;
            const exerciseData = data.exercises.find(ex => ex.name === exerciseName);
            const history = exerciseData.history.find(history => history.workoutId === workoutId);

            exerciseData && history ?
                updatedExerciseObjects = {
                    ...updatedExerciseObjects,
                    [exerciseName]: {
                        ...history,
                        newPRs: exercisesNewPRs[exerciseName],
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
                        currentWeight: userCurrentWeight.current,
                        currentPRs: exerciseData.PRs,
                        newPRs: exercisesNewPRs[exerciseName],
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

            console.log('workoutHistoryExercises2', workoutHistoryExercises)

            setData(prevData => {
                return {
                    ...prevData,

                    exercises: data.exercises.map((exercise) => {
                        if (exercise.name in updatedExerciseObjects) {

                            return {
                                ...exercise,
                                PRs: exercisesNewPRs[exercise.name],
                                history: exercise.history.find(history => history.workoutId === template.workoutId) ?
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
    }
    function handleUpdateTemplate() {
        const finalExercises = exercises.map(exercise => {
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
            const templateExists = prevData.templates.find(templ => templ === template.id) ? true : false
            return {
                ...prevData,
                templates: templateExists ? prevData.templates.map((templ) => {
                    if (templ.id === template.id) return {
                        ...templ,
                        notes: notes.current.value,
                        exercises: finalExercises
                    }
                    else return templ
                })
                    : [
                        ...prevData.templates,
                        {
                            ...template,
                            notes: notes.current.value,
                            exercises: finalExercises
                        }
                    ]
            }
        })
    }
    const renderActionButton = () => {
        switch (screenVariant) {
            case "newSession":
                return <ButtonBig size='hug' color='green' onClick={() => setShowFinishModal(true)}>Finish</ButtonBig>;
            case "editSession":
                return <ButtonBig size='hug' color='blue' onClick={() => setShowSaveWorkoutModal(true)}>Save</ButtonBig>;
            case "newEmptySession":
                return <ButtonBig size='hug' color='green' onClick={() => { setShowFinishModal(true) }}>Save</ButtonBig>;
            case "editTemplate":
                return <ButtonBig size='hug' color='blue' onClick={() => setShowSaveTemplateModal(true)}>Save</ButtonBig>;
            case "newEmptyTemplate":
                return <ButtonBig size='hug' color='blue' onClick={() => setShowSaveTemplateModal(true)}>Save</ButtonBig>;
            default:
                return <ButtonBig size='hug' color='green' onClick={() => setShowFinishModal(true)}>Finish</ButtonBig>;
        }
    }
    return (
        <div className="session__container">

            <div className='session__main'>

                <div className="session__main__header">
                    <ButtonSmall type='closeScreen' onClick={() => handleScreenChange('TemplatesScreen')} />
                    {renderActionButton()}
                </div>


                <div className='session__main__body'>
                    <div className='header'>
                        <div className='header__title-duration'>
                            <div className='header__title-duration__title'>
                                <h2>{template.name}</h2>
                                <ButtonSmall type='options' />
                            </div>

                            {(screenVariant === 'newSession' || screenVariant === 'newEmptySession') && <p>{formatTime(sessionDuration)}</p>}
                            {(screenVariant === 'editSession') && <p>{formatTime(3780)}</p>}
                        </div>

                        <textarea ref={notes} defaultValue={template.notes} placeholder='Notes' rows={1} onInput={(e) => {
                            e.target.style.height = "auto";
                            e.target.style.height = `${e.target.scrollHeight}px`;
                        }} />
                    </div>


                    <div className='container-cards-and-buttons'>
                        <div className='container-cards'>
                            {exercises.map(exercise => (
                                <CardExerciseTracker exercise={exercise} toggleSetCompleted={toggleSetCompleted} addSet={addSet}
                                    deleteSet={deleteSet} handleOptionClick={handleOptionClick} saveTemplateValues={saveTemplateValues}
                                    showFinishModal={showFinishModal} showSaveWorkoutModal={showSaveWorkoutModal} showSaveTemplateModal={showSaveTemplateModal}
                                    screenVariant={screenVariant} />
                            ))}
                        </div>
                        <div className='container-buttons'>
                            <ButtonBig color='blueSoft' onClick={() => setShowAddExercisesModal(true)}>Add Exercise</ButtonBig>
                            <ButtonBig color='redSoft' onClick={() => setShowAddExercisesModal(true)}>Cancel Workout</ButtonBig>
                        </div>

                    </div>


                </div>







                <div>
                    {/*Add exercise + creat exercise modals*/}
                    {showAddExercisesModal && <ModalAddExercises addExercises={addExercises} setShowAddExercisesModal={setShowAddExercisesModal} setShowCreateExerciseModal={setShowCreateExerciseModal} />}
                    {showCreateExerciseModal && <ModalCreateExercise createExercise={createExercise} setShowCreateExerciseModal={setShowCreateExerciseModal} setShowAddExercisesModal={setShowAddExercisesModal} />}

                    {/*newSession*/}
                    <ModalFinishWorkout screenVariant={screenVariant} showFinishModal={showFinishModal} setShowFinishModal={setShowFinishModal} clearInterval={() => clearInterval(intervalRef.current)}
                        handleScreenChange={() => handleScreenChange('FinishedWorkoutScreen', template, screenVariant, template.exercises, exercises, template.id, workoutId, currentDate, sessionDuration, notes.current.value)} />


                    {/*editSession*/}
                    <ModalSaveWorkout showSaveWorkoutModal={showSaveWorkoutModal} setShowSaveWorkoutModal={setShowSaveWorkoutModal} saveToHistory={saveToHistory}
                        handleScreenChange={() => handleScreenChange('TemplatesScreen')} />


                    {/*editTemplate + newEmptyTemplate*/}
                    <ModalSaveTemplate showSaveTemplateModal={showSaveTemplateModal} setShowSaveTemplateModal={setShowSaveTemplateModal} handleUpdateTemplate={handleUpdateTemplate}
                        handleScreenChange={() => handleScreenChange('TemplatesScreen')} />

                </div>
            </div>

        </div>
    )
}

export default SessionScreen