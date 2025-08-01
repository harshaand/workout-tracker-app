import React from 'react'
import ButtonBig from '../../../../Buttons/ButtonBig'
function FinishWorkout({ showModal, setShowModal, handleScreenChange, clearInterval }) {

    if (!showModal) return null
    else {
        return (
            <>
                <button className='modal-overlay' onClick={() => setShowModal(false)}></button>
                <div className='modal modal-spacing--no-body-text'>
                    <div className='modal-spacing--emoji-text'>
                        <div className='emoji'>🎉</div>
                        <h3>Finish Workout?</h3>
                    </div>
                    <div className='content-spacing--no-body-text'>
                        <div className='modal__buttons--horizontal'>
                            <ButtonBig color='gray' onClick={() => setShowModal(false)}>Cancel</ButtonBig>
                            <ButtonBig color='green' onClick={() => {
                                setShowModal(false)
                                clearInterval()
                                handleScreenChange()
                            }}>Finish</ButtonBig>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default FinishWorkout
