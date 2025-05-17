import React from 'react'

function CreateExercise({ createExercise, setShowCreateExerciseModal, setShowAddExercisesModal }) {
    function handleSubmit(formData) {
        createExercise(formData.get('exerciseName'))
        setShowCreateExerciseModal(false)
        setShowAddExercisesModal(true)
    }
    return (
        <>
            <div className='modal-overlay'></div>
            <div className='div-finish-workout'>
                <form action={handleSubmit}>
                    <button onClick={() => {
                        setShowAddExercisesModal(true)
                        setShowCreateExerciseModal(false)
                    }}>Close</button>
                    <input name='exerciseName' placeholder='Bench Press'></input>
                    <button type='submit'>Submit</button>
                </form >
            </div >
        </>
    )
}

export default CreateExercise
