import React from 'react'
import ButtonBig from '../../Buttons/ButtonBig'

function SaveEditedWorkout({ showSaveWorkoutModal, setShowSaveWorkoutModal, handleScreenChange, saveToHistory }) {

    if (!showSaveWorkoutModal) return null
    else {
        return (
            <>
                <button className='modal-overlay' onClick={() => setShowSaveWorkoutModal(false)}></button>
                <div className='modal modal-spacing--no-body-text'>
                    <h3>Save Workout?</h3>
                    <div className='content-spacing--no-body-text'>
                        <div className='modal__buttons--horizontal'>
                            <ButtonBig color='gray' onClick={() => setShowSaveWorkoutModal(false)}>Cancel</ButtonBig>
                            <ButtonBig color='blue' onClick={() => {
                                saveToHistory()
                                setShowSaveWorkoutModal(false)
                                handleScreenChange()
                            }}>Save</ButtonBig>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SaveEditedWorkout
