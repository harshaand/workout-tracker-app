import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../css/buttons.css';
import '../css/modals.css';

import ButtonSmall from '../components/Buttons/ButtonSmall.jsx'
import ButtonBig from '../components/Buttons/ButtonBig.jsx'
import FolderList from '../OTHER/FoldersFunctionality.jsx'

import CardExerciseTracker from '../components/Cards/CardExerciseTracker.jsx'
import ModalFinishWorkout from '../components/Modals/session/FinishWorkout.jsx'
import ModalSaveWorkout from '../components/Modals/session/SaveEditedWorkout.jsx'
import FinishedWorkoutScreen from './FinishedWorkoutScreen.jsx'

import { useData, useDataUpdate } from '../DataContext.jsx'

import { RoutingContext } from '../App.jsx'

function SessionScreen({ template }) {
    const data = useData()
    const setData = useDataUpdate()


    const { handleScreenChange } = React.useContext(RoutingContext)
    const [exercises, setExercises] = React.useState(template.exercises)
    const [showFinishModal, setShowFinishModal] = React.useState(false)
    const [showSaveModal, setShowSaveModal] = React.useState(false)

    const workoutExists = data.history.find(history => history.workoutId === template.workoutId) ? true : false;
    let workoutId = null
    const currentDate = new Date();
    if (workoutExists) {
        workoutId = template.workoutId
    }
    else {
        workoutId = uuidv4();
    }

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
                        weight: exercise.prevWeight,
                        reps: exercise.prevReps,
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
            prevExercises.map(exercise => exercise.name === exerciseName ?
                {
                    ...exercise,
                    sets: exercise.sets.map(set => set.id === setId ? { ...set, weight: weight, reps: reps } : set)
                } :
                exercise)
        ))
    }

    function saveToHistory() {
        console.log('saveToHistory')
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
                            switch (prKey) {
                                case 'volume': return Number(set.reps) * Number(set.weight);
                                case '1RM': return (Number(set.reps) * Number(set.weight)) / 2;
                                case 'strengthScore': return Number(set.reps) * Number(set.weight) * 2;
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
                            //total volume for workout
                            if (prKey === 'volume') {
                                totalVolume += value;
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
                                notes: template.notes,

                                exercises: workoutHistoryExercises,
                                PRs: totalPRs,
                                volume: totalVolume,
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
                        currentWeight: 88,
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

                    exercises: data.exercises.map((exercise, index) => {
                        if (exercise.name in updatedExerciseObjects) {

                            return {
                                ...exercise,
                                PRs: exercisesNewPRs[exercise.name],
                                history: workoutExists ?
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

    return (
        <div className="container-app">
            <div className="div-header">
                <h1>Session Screen</h1>
            </div>

            <div className="library-container-quick-start">
                {exercises.map(exercise => (
                    <CardExerciseTracker key={exercise.name} exercise={exercise} toggleSetCompleted={toggleSetCompleted} addSet={addSet}
                        deleteSet={deleteSet} handleOptionClick={handleOptionClick} saveTemplateValues={saveTemplateValues}
                        showFinishModal={showFinishModal} showSaveModal={showSaveModal} />
                ))}
                {workoutExists ? <ButtonBig size='hug' color='blue' onClick={() => setShowSaveModal(true)}>Save</ButtonBig>
                    : <ButtonBig size='hug' color='green' onClick={() => setShowFinishModal(true)}>Finish</ButtonBig>}
                <ModalFinishWorkout showFinishModal={showFinishModal} setShowFinishModal={setShowFinishModal}
                    handleScreenChange={() => handleScreenChange('finished-workout', template.exercises, exercises, template.id, template, workoutId, workoutExists, currentDate)} />
                <ModalSaveWorkout showSaveModal={showSaveModal} setShowSaveModal={setShowSaveModal} saveToHistory={saveToHistory}
                    handleScreenChange={() => handleScreenChange('templates')} />
            </div>


        </div>
    )
}

export default SessionScreen