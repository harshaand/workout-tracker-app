import React from 'react'
import { useData, useDataUpdate } from '../../../DataContext'
import ButtonSmall from '../../Buttons/ButtonSmall'

function AddExercises({ addExercises, setShowAddExercisesModal, setShowCreateExerciseModal }) {
    const data = useData()

    const checkboxes = data.exercises.map(exercise =>
        <label>
            <input type="checkbox" name="exercise" value={exercise.name} />
            {exercise.name}
        </label>)
    return (

        <>
            <div className='modal-overlay'></div>
            <div className='div-finish-workout'>
                <form action={(formData) => { addExercises(formData.getAll("exercise")) }}>
                    <ButtonSmall type='closeModal' onClick={() => { setShowAddExercisesModal(false) }} />
                    <button className='btn--transparent' onClick={() => {
                        setShowAddExercisesModal(false)
                        setShowCreateExerciseModal(true)
                    }}>New</button>
                    <div>{checkboxes}</div>
                    <button type='submit' className='btn--transparent'> Add </button>
                </form>
            </div>
        </>
    )
}

export default AddExercises
