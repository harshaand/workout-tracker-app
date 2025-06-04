import React from 'react'
import ButtonSmall from '../Buttons/ButtonSmall.jsx'
import { Tick, Lock, BlankWide } from '../../assets/icons/icons.js';
import { motion, AnimatePresence } from "framer-motion"


function RowExerciseTracker({ type = 'exerciseRow', set, toggleSetCompleted, exerciseName, deleteSet, handleOptionClick, saveTemplateValues,
    showFinishModal, showSaveWorkoutModal, showSaveTemplateModal, screenVariant = 'newSession' }) {

    const [showModal, setShowModal] = React.useState(false);
    const weightRef = React.useRef(null);
    const repsRef = React.useRef(null);
    const isFirstRender = React.useRef(true);

    const delete_animation = { height: 0, opacity: 0 }
    const delete_transition = {
        opacity: {
            transition: {
                duration: 0
            }
        }
    }
    function deleteRow(info) {
        const dragDistance = info.point.x
        if (dragDistance < -70) {
            deleteSet(exerciseName, set.id)
        }
    }

    React.useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        saveTemplateValues(exerciseName, set.id, weightRef.current.value, repsRef.current.value)
    }, [showFinishModal, showSaveWorkoutModal, showSaveTemplateModal])


    function toggleShowModal() {
        setShowModal(prevShowModal => !prevShowModal)
    }

    const [valuesFilled, setValuesFilled] = React.useState(false)
    function fillValues() {
        setValuesFilled(true)
        weightRef.current.value = set.weight
        repsRef.current.value = set.reps
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
    else if (type === 'exerciseRow' && (screenVariant === 'newSession' || screenVariant === 'newEmptySession')) {
        return (

            <AnimatePresence>
                <motion.li key={set.id} exit={delete_animation} transition={delete_transition}>
                    <motion.div className="exercise-row-container" drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={(_, info) => deleteRow(info)}>
                        <div className={`exercise-row ${set.completed ? 'exercise-row--completed' : 'exercise-row--uncompleted'}`}>

                            <div className='testing'><ButtonSmall type='setNumber' customClasses={set.completed ? 'completed' : ''} onClick={() => toggleShowModal()}>{set.value}</ButtonSmall>
                                {showModal && (
                                    <div className="set-options">
                                        <button className="set-options__btn" onClick={() => {
                                            handleOptionClick('W', exerciseName, set.id)
                                            toggleShowModal()
                                        }}>W</button>
                                        <button className="set-options__btn" onClick={() => {
                                            handleOptionClick('D', exerciseName, set.id)
                                            toggleShowModal()
                                        }}> D</button>
                                        <button className="set-options__btn" onClick={() => {
                                            handleOptionClick('F', exerciseName, set.id)
                                            toggleShowModal()
                                        }}>F</button>
                                    </div>)}
                            </div>
                            <button className={`btn--prev-volume ${valuesFilled ? 'btn--prev-volume--active' : 'btn--prev-volume--inactive'}`} onClick={set.weight === 0 && set.reps === 0 ? () => { } : fillValues}>{set.weight === 0 && set.reps === 0 ? <BlankWide /> : `${set.weight} kg x ${set.reps}`}</button>
                            <div className='testing'><input ref={weightRef} disabled={set.completed} className={set.completed ? 'completed' : 'input-uncompleted'} placeholder={set.weight === 0 && set.reps === 0 ? '' : set.weight} type="number" onKeyDown={(e) => { if (['e', 'E', '+', '-'].includes(e.key)) { e.preventDefault(); } }} /></div>
                            <div className='testing'><input ref={repsRef} disabled={set.completed} className={set.completed ? 'completed' : 'input-uncompleted'} placeholder={set.weight === 0 && set.reps === 0 ? '' : set.reps} type="number" onKeyDown={(e) => { if (['e', 'E', '+', '-'].includes(e.key)) { e.preventDefault(); } }} /></div>
                            <div className='testing'><ButtonSmall type='checkbox' customClasses={set.completed ? 'btn--green' : ''} onClick={() => toggleSetCompleted(exerciseName, set.num)}></ButtonSmall></div>
                        </div >
                    </motion.div>
                    <div className="exercise-row-delete-btn btn--red">Delete</div>
                </motion.li>
            </AnimatePresence>

        )
    }
    else if (type === 'exerciseRow' && screenVariant === 'editSession') {
        return (
            <AnimatePresence>
                <motion.li key={set.id} exit={delete_animation} transition={delete_transition}>
                    <motion.div className="exercise-row-container" drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={(_, info) => deleteRow(info)}>
                        <div className={`exercise-row ${set.completed ? 'exercise-row--completed' : 'exercise-row--uncompleted'}`}>
                            <div className='testing'><ButtonSmall type='setNumber' customClasses={set.completed ? 'completed' : ''} onClick={() => toggleShowModal()}>{set.value}</ButtonSmall>
                                {showModal && (
                                    <div className="set-options">
                                        <button className="set-options__btn" onClick={() => {
                                            handleOptionClick('W', exerciseName, set.id)
                                            toggleShowModal()
                                        }}>W</button>
                                        <button className="set-options__btn" onClick={() => {
                                            handleOptionClick('D', exerciseName, set.id)
                                            toggleShowModal()
                                        }}> D</button>
                                        <button className="set-options__btn" onClick={() => {
                                            handleOptionClick('F', exerciseName, set.id)
                                            toggleShowModal()
                                        }}>F</button>
                                    </div>)}
                            </div>
                            <button className='btn--prev-volume btn--prev-volume--active' /*onClick={fillValues}*/ >{set.weight === 0 && set.reps === 0 ? <BlankWide /> : `${set.weight} kg x ${set.reps}`}</button>
                            <div className='testing'><input ref={weightRef} disabled={set.completed} className={set.completed ? 'completed' : 'input-uncompleted'} defaultValue={set.weight === 0 && set.reps === 0 ? '' : set.weight} type="number" onKeyDown={(e) => { if (['e', 'E', '+', '-'].includes(e.key)) { e.preventDefault(); } }} /></div>
                            <div className='testing'><input ref={repsRef} disabled={set.completed} className={set.completed ? 'completed' : 'input-uncompleted'} defaultValue={set.weight === 0 && set.reps === 0 ? '' : set.reps} type="number" onKeyDown={(e) => { if (['e', 'E', '+', '-'].includes(e.key)) { e.preventDefault(); } }} /></div>
                            <div className='testing'><ButtonSmall type='checkbox' customClasses={set.completed ? 'btn--green' : ''} onClick={() => toggleSetCompleted(exerciseName, set.num)}></ButtonSmall></div>
                        </div >
                    </motion.div>
                    <div className="exercise-row-delete-btn btn--red">Delete</div>
                </motion.li>
            </AnimatePresence>
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
            <AnimatePresence>
                <motion.li key={set.id} exit={delete_animation} transition={delete_transition}>
                    <motion.div className="exercise-row-container" drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={(_, info) => deleteRow(info)}>
                        <div className={`exercise-row ${set.completed ? 'exercise-row--completed' : 'exercise-row--uncompleted'}`}>
                            <div className='testing'><ButtonSmall type='setNumber' customClasses={set.completed ? 'completed' : ''} onClick={() => toggleShowModal()}>{set.value}</ButtonSmall>
                                {showModal && (
                                    <div className="set-options">
                                        <button className="set-options__btn" onClick={() => {
                                            handleOptionClick('W', exerciseName, set.id)
                                            toggleShowModal()
                                        }}>W</button>
                                        <button className="set-options__btn" onClick={() => {
                                            handleOptionClick('D', exerciseName, set.id)
                                            toggleShowModal()
                                        }}> D</button>
                                        <button className="set-options__btn" onClick={() => {
                                            handleOptionClick('F', exerciseName, set.id)
                                            toggleShowModal()
                                        }}>F</button>
                                    </div>)}
                            </div>
                            <button className='btn--prev-volume btn--prev-volume--active' /*onClick={fillValues}*/ >{set.weight === 0 && set.reps === 0 ? <BlankWide /> : `${set.weight} kg x ${set.reps}`}</button>
                            <div className='testing'><input ref={weightRef} disabled={set.completed} className={set.completed ? 'completed' : 'input-uncompleted'} defaultValue={set.weight === 0 && set.reps === 0 ? '' : set.weight} type="number" onKeyDown={(e) => { if (['e', 'E', '+', '-'].includes(e.key)) { e.preventDefault(); } }} /></div>
                            <div className='testing'><input ref={repsRef} disabled={set.completed} className={set.completed ? 'completed' : 'input-uncompleted'} defaultValue={set.weight === 0 && set.reps === 0 ? '' : set.reps} type="number" onKeyDown={(e) => { if (['e', 'E', '+', '-'].includes(e.key)) { e.preventDefault(); } }} /></div>
                            <div className='testing'><ButtonSmall type='checkboxLocked' customClasses={set.completed ? 'btn--green' : ''} ></ButtonSmall></div>
                        </div >
                    </motion.div>
                    <div className="exercise-row-delete-btn btn--red">Delete</div>
                </motion.li>
            </AnimatePresence>
        )
    }
}

export default RowExerciseTracker
