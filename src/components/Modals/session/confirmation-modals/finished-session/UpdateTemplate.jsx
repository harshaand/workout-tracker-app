import React from 'react'
import '../../../../../css/modals.scss';
import ButtonBig from '../../../../Buttons/ButtonBig.jsx'

function UpdateTemplate({ showModal, setShowModal, oldExercises, newExercises, saveToHistory, handleUpdateValues, handleUpdateTemplate }) {

    let updatedValues = false;
    let updatedValuesMessage = '';
    let removedValues = false;
    let updateTemplateMessage = '';
    let updateTemplateButton = null;


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
            updateTemplateButton = <ButtonBig onClick={async () => {
                await handleUpdateTemplate()
                await saveToHistory()
                setShowModal(false)
            }} color="redSoft">
                <div>
                    <div className='main-text'>Update Template and Values</div>
                    <div className='supporting-text'>{updateTemplateMessage}</div>
                </div>
            </ButtonBig>;
        } else {
            updateTemplateButton = <ButtonBig onClick={async () => {
                await handleUpdateTemplate()
                await saveToHistory()
                setShowModal(false)
            }} color="blueSoft">
                <div>
                    <div className='main-text'>Update Template and Values</div>
                    <div className='supporting-text'>{updateTemplateMessage}</div>
                </div>
            </ButtonBig>;
        }
    }

    if (!showModal) return null
    else {
        return (
            <>
                <button className='modal-overlay' onClick={() => setShowModal(false)}></button>
                <div className='modal modal-spacing--default'>
                    <h3>Update Template?</h3>
                    <div className='content-spacing--default'>
                        <p>You've made changes from your original template. Would you like to update it?</p>
                        <div className='modal__buttons--vertical'>

                            {updatedValues &&
                                <ButtonBig onClick={async () => {
                                    await handleUpdateValues()
                                    await saveToHistory()
                                    setShowModal(false)
                                }}>
                                    <div>
                                        <div className='main-text'>Update Values Only</div>
                                        <div className='supporting-text'>{updatedValuesMessage}</div>
                                    </div>
                                </ButtonBig>}

                            {updateTemplateButton}

                            <ButtonBig color="gray" onClick={async () => {
                                await saveToHistory()
                                setShowModal(false)
                            }}>Keep Orignal</ButtonBig>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default UpdateTemplate



