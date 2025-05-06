import React from 'react'
import ButtonBig from '../components/Buttons/ButtonBig';
import { useData, useDataUpdate } from '../DataContext.jsx'

function FinishedWorkoutScreen({ oldExercises, newExercises, templateId }) {
    const data = useData()
    const setData = useDataUpdate()
    const [showModal, setShowModal] = React.useState(false)

    console.log('NEW EXERCISES!!!!!!!!:', newExercises)
    let updatedValues = false;
    let updatedValuesMessage = '';
    let removedValues = false;
    let updateTemplateMessage = '';
    let modalComponent;
    let updateTemplateButton = null;

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])


    const exercisesSame = JSON.stringify(newExercises) === JSON.stringify(oldExercises);
    if (!exercisesSame) {

        console.log("------------ TESTING ------------");
        // Array to collect all change messages
        const changes = [];

        // NUMBER OF EXERCISES REMOVED BY USER
        const newExercisesIds = new Set(newExercises.map(ex => ex.id));
        const missingExercises = oldExercises.filter(ex => !newExercisesIds.has(ex.id)).length;
        if (missingExercises > 0) {
            removedValues = true;
            const message = `Remove ${missingExercises} exercise${missingExercises > 1 ? 's' : ''}`;
            changes.push({ priority: 1, type: 'remove_exercises', message });
        }

        // NUMBER OF EXERCISES ADDED BY USER
        const addedSets = newExercises.length + missingExercises - oldExercises.length
        if (newExercises.length > oldExercises.length - missingExercises) {
            const message = `Add ${addedSets} exercise${addedSets > 1 ? 's' : ''}`;
            changes.push({ priority: 2, type: 'add_exercises', message });
        }

        // CHECK IF EXERCISE ORDER IS DIFFERENT
        let orderDifferent = false;
        const minLength = Math.min(oldExercises.length, newExercises.length - addedSets);

        for (let i = 0; i < minLength; i++) {
            if (oldExercises[i].id !== newExercises[i].id) {
                orderDifferent = true;
                break;
            }
        }

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

        for (const newExercise of newExercises) {
            const oldExercise = oldExercisesMap.get(newExercise.id);

            // skip if exercise doesn't exist in the old template
            if (!oldExercise) continue;

            // difference in number of sets
            if (oldExercise.sets.length < newExercise.sets.length) {
                totalMoreSets += (newExercise.sets.length - oldExercise.sets.length);
            } else if (oldExercise.sets.length > newExercise.sets.length) {
                totalLessSets += (oldExercise.sets.length - newExercise.sets.length);
            }

            // number of sets with different values for weight/reps
            const minSetsLength = Math.min(oldExercise.sets.length, newExercise.sets.length);
            for (let i = 0; i < minSetsLength; i++) {
                const oldSet = oldExercise.sets[i];
                const newSet = newExercise.sets[i];

                if (oldSet.weight !== newSet.weight || oldSet.reps !== newSet.reps) {
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

    function handleUpdateValues() {
        const updatedExercises = oldExercises.map(oldExercise => {
            const newExercise = newExercises.find(exercise => exercise.id === oldExercise.id);
            if (newExercise) {
                return {
                    ...oldExercise,
                    sets: oldExercise.sets.map((set, index) => {
                        if (newExercise.sets[index]) return {
                            id: newExercise.sets[index].id,
                            value: newExercise.sets[index].value,
                            num: newExercise.sets[index].num,
                            weight: newExercise.sets[index].weight,
                            reps: newExercise.sets[index].reps,
                            completed: newExercise.sets[index].completed
                        }
                        else return set
                    }
                    )
                }
            }
            else return oldExercise
        })
        setData(prevData => {
            return {
                ...prevData,
                templates: data.templates.map((template, index) => {
                    if (template.id === templateId) return {
                        ...template,
                        exercises: updatedExercises
                    }
                    else return template
                }
                )
            }
        })
        setShowModal(false)
    }

    function handleUpdateTemplate() {
        setData(prevData => {
            return {
                ...prevData,
                templates: data.templates.map((template, index) => {
                    if (template.id === templateId) return {
                        ...template,
                        exercises: newExercises
                    }
                    else return template
                }
                )
            }
        })
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
