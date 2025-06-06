import React from 'react'
import ButtonBig from '../../../../Buttons/ButtonBig'

function SaveEditedWorkout({ showModal, setShowModal, handleScreenChange, saveToHistory }) {

    if (!showModal) return null
    else {
        return (
            <>
                <button className='modal-overlay' onClick={() => setShowModal(false)}></button>
                <div className='modal modal-spacing--no-body-text'>
                    <h3>Save Workout?</h3>
                    <div className='content-spacing--no-body-text'>
                        <div className='modal__buttons--horizontal'>
                            <ButtonBig color='gray' onClick={() => setShowModal(false)}>Cancel</ButtonBig>
                            <ButtonBig color='blue' onClick={() => {
                                saveToHistory()
                                setShowModal(false)
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
