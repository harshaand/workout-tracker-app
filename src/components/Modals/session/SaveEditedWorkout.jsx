import React from 'react'

function SaveEditedWorkout({ showSaveWorkoutModal, setShowSaveWorkoutModal, handleScreenChange, saveToHistory }) {

    if (!showSaveWorkoutModal) return null
    else {
        return (
            <>
                <div className='modal-overlay'></div>
                <div className='div-finish-workout'>
                    <h3>Save Workout?</h3>
                    <div className='buttons-finish-workout'>
                        <button onClick={() => setShowSaveWorkoutModal(false)}>cancel</button>
                        <button onClick={() => {
                            saveToHistory()
                            setShowSaveWorkoutModal(false)
                            handleScreenChange()
                        }}>save</button>
                    </div>
                </div>
            </>
        )
    }
}

export default SaveEditedWorkout
