import React from 'react'

function SaveEditedWorkout({ showSaveModal, setShowSaveModal, handleScreenChange, saveToHistory }) {

    if (!showSaveModal) return null
    else {
        return (
            <>
                <div className='modal-overlay'></div>
                <div className='div-finish-workout'>
                    <h3>Save Workout?</h3>
                    <div className='buttons-finish-workout'>
                        <button onClick={() => setShowSaveModal(false)}>cancel</button>
                        <button onClick={() => {
                            saveToHistory()
                            setShowSaveModal(false)
                            handleScreenChange()
                        }}>save</button>
                    </div>
                </div>
            </>
        )
    }
}

export default SaveEditedWorkout
