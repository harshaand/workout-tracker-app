import React from 'react'
import '../css/buttons.css';
import '../css/modals.css';

import ButtonSmall from '../components/Buttons/ButtonSmall.jsx'
import ButtonBig from '../components/Buttons/ButtonBig.jsx'
import FolderList from '../OTHER/FoldersFunctionality.jsx'

import CardExerciseTracker from '../components/Cards/CardExerciseTracker.jsx'
import ModalFinishWorkout from '../components/Modals/session/FinishWorkout.jsx'
import FinishedWorkoutScreen from './FinishedWorkoutScreen.jsx'

import { RoutingContext } from '../App.jsx'

function SessionScreen({ template }) {

    const { handleScreenChange } = React.useContext(RoutingContext)
    const [exercises, setExercises] = React.useState(template.exercises)
    const [showFinishModal, setShowFinishModal] = React.useState(false)

    function toggleSetCompleted(exerciseId, setNum) {
        setExercises(prevExercises => (
            prevExercises.map(exercise => exercise.id === exerciseId ?
                {
                    ...exercise,
                    sets: exercise.sets.map(set => set.num === setNum ? { ...set, completed: !set.completed } : set)
                } :
                exercise)
        ))
    }

    function addSet(exerciseId) {
        setExercises(prevExercises => {
            return prevExercises.map(exercise => {
                if (exercise.id === exerciseId) {
                    const nextSetNum = exercise.sets.length + 1;

                    const newSet = {
                        /* generate unique id */
                        id: 'revevev',
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

    function deleteSet(exerciseId, setID) {
        setExercises(prevExercises => {
            return prevExercises.map(exercise => {
                if (exercise.id === exerciseId) {
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

    function handleOptionClick(option, exerciseId, setId) {
        setExercises(prevExercises => {
            return prevExercises.map(exercise => {
                if (exercise.id === exerciseId) {
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

    function saveTemplateValues(exerciseId, setId, weight, reps) {
        setExercises(prevExercises => (
            prevExercises.map(exercise => exercise.id === exerciseId ?
                {
                    ...exercise,
                    sets: exercise.sets.map(set => set.id === setId ? { ...set, weight: weight, reps: reps } : set)
                } :
                exercise)
        ))
    }


    return (
        <div className="container-app">
            <div className="div-header">
                <h1>Session Screen</h1>
            </div>

            <div className="library-container-quick-start">
                <CardExerciseTracker key={exercises[0].id} exercise={exercises[0]} toggleSetCompleted={toggleSetCompleted} addSet={addSet}
                    deleteSet={deleteSet} handleOptionClick={handleOptionClick} saveTemplateValues={saveTemplateValues}
                    showFinishModal={showFinishModal} />
                <CardExerciseTracker key={exercises[1].id} exercise={exercises[1]} toggleSetCompleted={toggleSetCompleted} addSet={addSet}
                    deleteSet={deleteSet} handleOptionClick={handleOptionClick} saveTemplateValues={saveTemplateValues}
                    showFinishModal={showFinishModal} />
                <ButtonBig size='hug' color='green' onClick={() => setShowFinishModal(true)}>Finish</ButtonBig>
                <ModalFinishWorkout showFinishModal={showFinishModal} setShowFinishModal={setShowFinishModal}
                    handleScreenChange={() => handleScreenChange('finished-workout', template.exercises, exercises, template.id, template)} />
            </div>


        </div>
    )
}

export default SessionScreen