import React from 'react'
import '../../../../../css/modals.scss';
import ButtonBig from '../../../../Buttons/ButtonBig.jsx'

function DeleteWorkout({ showModal, setShowModal, handleScreenChange, deleteWorkoutHistory }) {
    if (!showModal) return null
    else {
        return (
            <>
                <button className='modal-overlay' onClick={() => setShowModal(false)}></button>

                <div className='modal modal-spacing--default'>
                    <h3>Delete Workout?</h3>
                    <div className='content-spacing--default'>
                        <p>Are you sure you want to delete this
                            workout? You cannot undo this action.</p>
                        <div className='modal__buttons--horizontal'>
                            <ButtonBig color='gray' onClick={() => { setShowModal(false) }}>Cancel</ButtonBig>
                            <ButtonBig color='red' onClick={async () => {
                                await deleteWorkoutHistory()
                                setShowModal(false)
                                handleScreenChange()
                            }}>Delete</ButtonBig>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DeleteWorkout

