import React from 'react'
import '../../../../../css/modals.scss';
import ButtonBig from '../../../../Buttons/ButtonBig.jsx'

function CancelWorkout({ showModal, setShowModal, handleScreenChange }) {
    if (!showModal) return null
    else {
        return (
            <>
                <button className='modal-overlay' onClick={() => setShowModal(false)}></button>

                <div className='modal modal-spacing--default'>
                    <h3>Cancel Workout?</h3>
                    <div className='content-spacing--default'>
                        <p>Are you sure you want to cancel this workout? All progress will be lost.</p>
                        <div className='modal__buttons--vertical'>
                            <ButtonBig color='red' onClick={() => {
                                setShowModal(false)
                                handleScreenChange()
                            }}>Cancel Workout</ButtonBig>
                            <ButtonBig color='gray' onClick={() => { setShowModal(false) }}>Resume</ButtonBig>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default CancelWorkout
