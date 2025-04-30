import React from 'react'
import ButtonSmall from '../Buttons/ButtonSmall.jsx'
import { Tick, Lock } from '../../assets/icons/icons.js';


function RowExerciseTracker({ type, set, toggleSetCompleted, exerciseId, deleteSet }) {

    if (type === 'heading') {
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
    else {
        return (
            <div className={`exercise-row ${set.completed ? 'exercise-row-completed' : ''}`}>
                <div className='testing'><ButtonSmall type='setNumber' customClasses={set.completed ? 'completed' : ''}>{set.num}</ButtonSmall>
                </div>
                <button className='btn-prev-volume btn-prev-volume-inactive' onClick={() => deleteSet(exerciseId, set.id)}>+10kg x 20</button>
                <div className='testing'><input className={set.completed ? 'completed' : 'input-uncompleted'} placeholder={set.weight} id="abc" name="abc" type="text" /></div>
                <div className='testing'><input className={set.completed ? 'completed' : 'input-uncompleted'} placeholder={set.reps} id="abc" name="abc" type="text" /></div>
                <div className='testing'><ButtonSmall type='checkbox' customClasses={set.completed ? 'btn-green' : ''} onClick={() => toggleSetCompleted(exerciseId, set.num)}></ButtonSmall></div>
            </div>
        )
    }
}

export default RowExerciseTracker
