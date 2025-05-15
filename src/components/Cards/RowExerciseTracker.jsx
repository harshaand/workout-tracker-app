import React from 'react'
import ButtonSmall from '../Buttons/ButtonSmall.jsx'
import { Tick, Lock } from '../../assets/icons/icons.js';


function RowExerciseTracker({ type = 'exerciseRow', set, toggleSetCompleted, exerciseName, deleteSet, handleOptionClick, saveTemplateValues,
    showFinishModal, showSaveWorkoutModal, showSaveTemplateModal, showSaveAsNewTemplate, screenVariant = 'newSession' }) {

    const [showModal, setShowModal] = React.useState(false);
    const weightRef = React.useRef(null);
    const repsRef = React.useRef(null);
    const isFirstRender = React.useRef(true);

    React.useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        saveTemplateValues(exerciseName, set.id, weightRef.current.value, repsRef.current.value)
    }, [showFinishModal, showSaveWorkoutModal, showSaveTemplateModal, showSaveAsNewTemplate])


    function toggleShowModal() {
        setShowModal(prevShowModal => !prevShowModal)
    }

    if (type === 'heading' && (screenVariant === 'newSession' || screenVariant === 'editSession' || screenVariant === 'newEmptySession')) {
        return (
            <div className='heading-row'>
                <div className='heading'><h4>Set</h4></div>
                <div className='heading'><h4>Previous</h4></div>
                <div className='heading'><h4>+kg</h4></div>
                <div className='heading'><h4>Reps</h4></div>
                <div className='heading'><Tick /></div>
            </div>
        )
    }
    else if (type === 'exerciseRow' && (screenVariant === 'newSession' || screenVariant === 'editSession' || screenVariant === 'newEmptySession')) {
        return (
            <div className={`exercise-row ${set.completed ? 'exercise-row-completed' : ''}`}>

                <div className='testing'><ButtonSmall type='setNumber' customClasses={set.completed ? 'completed' : ''} onClick={() => toggleShowModal()}>{set.value}</ButtonSmall>
                    {showModal && (
                        <div className="set-options">
                            <button className="set-options-btns" onClick={() => {
                                handleOptionClick('W', exerciseName, set.id)
                                toggleShowModal()
                            }}>W</button>
                            <button className="set-options-btns" onClick={() => {
                                handleOptionClick('D', exerciseName, set.id)
                                toggleShowModal()
                            }}> D</button>
                            <button className="set-options-btns" onClick={() => {
                                handleOptionClick('F', exerciseName, set.id)
                                toggleShowModal()
                            }}>F</button>
                        </div>)}
                </div>
                <button className='btn-prev-volume btn-prev-volume-inactive' onClick={() => deleteSet(exerciseName, set.id)}>+10kg x 20</button>
                <div className='testing'><input ref={weightRef} className={set.completed ? 'completed' : 'input-uncompleted'} placeholder={set.weight} id="abc" name="abc" type="text" /></div>
                <div className='testing'><input ref={repsRef} className={set.completed ? 'completed' : 'input-uncompleted'} placeholder={set.reps} id="abc" name="abc" type="text" /></div>
                <div className='testing'><ButtonSmall type='checkbox' customClasses={set.completed ? 'btn-green' : ''} onClick={() => toggleSetCompleted(exerciseName, set.num)}></ButtonSmall></div>
            </div >
        )
    }
    else if (type === 'heading' && (screenVariant === 'editTemplate' || screenVariant === 'newEmptyTemplate')) {
        return (
            <div className='heading-row'>
                <div className='heading'><h4>Set</h4></div>
                <div className='heading'><h4>Previous</h4></div>
                <div className='heading'><h4>+kg</h4></div>
                <div className='heading'><h4>Reps</h4></div>
                <div className='heading'><Lock /></div>
            </div>
        )
    }
    else if (type === 'exerciseRow' && (screenVariant === 'editTemplate' || screenVariant === 'newEmptyTemplate')) {
        return (
            <div className={`exercise-row ${set.completed ? 'exercise-row-completed' : ''}`}>

                <div className='testing'><ButtonSmall type='setNumber' customClasses={set.completed ? 'completed' : ''} onClick={() => toggleShowModal()}>{set.value}</ButtonSmall>
                    {showModal && (
                        <div className="set-options">
                            <button className="set-options-btns" onClick={() => {
                                handleOptionClick('W', exerciseName, set.id)
                                toggleShowModal()
                            }}>W</button>
                            <button className="set-options-btns" onClick={() => {
                                handleOptionClick('D', exerciseName, set.id)
                                toggleShowModal()
                            }}> D</button>
                            <button className="set-options-btns" onClick={() => {
                                handleOptionClick('F', exerciseName, set.id)
                                toggleShowModal()
                            }}>F</button>
                        </div>)}
                </div>
                <button className='btn-prev-volume btn-prev-volume-inactive' onClick={() => deleteSet(exerciseName, set.id)}>+10kg x 20</button>
                <div className='testing'><input ref={weightRef} className={set.completed ? 'completed' : 'input-uncompleted'} placeholder={set.weight} id="abc" name="abc" type="text" /></div>
                <div className='testing'><input ref={repsRef} className={set.completed ? 'completed' : 'input-uncompleted'} placeholder={set.reps} id="abc" name="abc" type="text" /></div>
                <div className='testing'><ButtonSmall type='checkboxLocked' customClasses={set.completed ? 'btn-green' : ''} ></ButtonSmall></div>
            </div >
        )
    }
}

export default RowExerciseTracker
