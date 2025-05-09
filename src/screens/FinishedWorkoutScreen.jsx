import React from 'react'
import ButtonBig from '../components/Buttons/ButtonBig';
import { useData, useDataUpdate } from '../DataContext.jsx'

function FinishedWorkoutScreen({ oldExercises, newExercises, templateId, template }) {
    const data = useData()
    const setData = useDataUpdate()
    const [showModal, setShowModal] = React.useState(false)

    console.log('NEW EXERCISES!!!!!!!!:', newExercises)//BUG, showing something unexpected after saveToHistory
    let updatedValues = false;
    let updatedValuesMessage = '';
    let removedValues = false;
    let updateTemplateMessage = '';
    let modalComponent;
    let updateTemplateButton = null;

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    const exercisesSame = JSON.stringify(newExercises) === JSON.stringify(oldExercises);
    if (!exercisesSame) {

        // Array to collect all change messages
        const changes = [];

        // NUMBER OF EXERCISES REMOVED BY USER
        const newExercisesIds = new Set(newExercises.map(exercise => exercise.id));
        const userRemovedExercises = oldExercises.filter(ex => !newExercisesIds.has(ex.id));
        const uncompletedExercises = newExercises.filter(exercise => !exercise.sets.some(set => set.completed === true));
        const toBeRemovedExercisesCount = userRemovedExercises.length + uncompletedExercises.length
        if (toBeRemovedExercisesCount > 0) {
            removedValues = true;
            const message = `Remove ${toBeRemovedExercisesCount} exercise${toBeRemovedExercisesCount > 1 ? 's' : ''}`;
            changes.push({ priority: 1, type: 'remove_exercises', message });
        }

        // NUMBER OF EXERCISES ADDED BY USER
        const oldExercisesIds = new Set(oldExercises.map(exercise => exercise.id));
        const userAddedExercises = newExercises.filter(ex => !oldExercisesIds.has(ex.id));
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
            oldExercisesMap.set(exercise.id, exercise);
        });

        let totalDifferentSets = 0;
        let totalMoreSets = 0;
        let totalLessSets = 0;

        for (const persistedExercise of newExercises) {
            const oldExercise = oldExercisesMap.get(persistedExercise.id);

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
                updateTemplateButton = <ButtonBig onClick={handleUpdateTemplate} color="redSoft">{updateTemplateMessage}</ButtonBig>;
            } else {
                updateTemplateButton = <ButtonBig onClick={handleUpdateTemplate} color="blueSoft">{updateTemplateMessage}</ButtonBig>;
            }
        }

        modalComponent = (
            <>
                <div className='modal-overlay'></div>
                <div className='div-finish-workout'>
                    <h2>Update Template</h2>
                    {updatedValues ? <ButtonBig onClick={handleUpdateValues}>{updatedValuesMessage}</ButtonBig> : 'no button'}
                    {updateTemplateButton}
                    <ButtonBig color="gray" onClick={() => setShowModal(false)}>Keep Orignal Template</ButtonBig>
                </div>
            </>
        );
    }

    function saveToHistory() {
        //--------------------------APPENDING WORKOUT TO HISTORY--------------------------
        const filteredExercises = newExercises.filter(exercise => exercise.sets.some(set => set.completed === true))
            .map(exercise => {
                return {
                    ...exercise,
                    sets: exercise.sets.filter(set => set.completed === true)
                };
            });
        let exercisesNewPRs = {};
        let totalPRs = 0;
        let totalVolume = 0;
        const workoutId = 90210;
        const workoutHistoryExercises = [
            ...filteredExercises.map(exercise => {
                const exerciseName = exercise.name;
                const exerciseData = data.exercises.find(ex => ex.name === exerciseName);

                if (exerciseData) {
                    //const newPRs = exerciseData.PRs
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
                                ///newPRs[prKey] = value;
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
                    console.log('EXERCISE AT THIS POINT!!!:', exercise)

                    return exercise;
                }
            })
        ]
        const history = {
            id: template.id,
            name: template.name,
            duration: template.duration,
            notes: template.notes,
            workoutId: workoutId,

            date: '1/1/2025',
            exercises: workoutHistoryExercises,
            PRs: totalPRs,
            volume: totalVolume,
        }
        setData(prevData => {
            return {
                ...prevData,

                history: [
                    ...data.history,
                    history
                ],

            }
        })



        //--------------------------UPDATING EXERCISE OBJECT--------------------------
        let updatedExerciseObjects = {}
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
                        date: '1/1/2025',
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
                                PRs: exercisesNewPRs[exercise.name],
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
            const persistedExercise = newExercises.find(exercise => exercise.id === oldExercise.id);
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
                        exercises: finalExercises
                    }
                    else return template
                }
                )
            }
        })
        saveToHistory()
        setShowModal(false)
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
            return {
                ...prevData,
                history: [
                    ...data.history,
                    {
                        ...template,
                        date: '8/8/2025',
                        volume: 888,
                        PRs: 88,
                        exercises: filteredExercises,
                    }

                ],
                templates: data.templates.map((template, index) => {
                    if (template.id === templateId) return {
                        ...template,
                        exercises: finalExercises
                    }
                    else return template
                }
                )
            }
        })
        saveToHistory()
        setShowModal(false)
    }
    return (
        <div>
            <h1>Finished Workout Screen</h1>
            {showModal && modalComponent}
        </div>
    )
}

export default FinishedWorkoutScreen
