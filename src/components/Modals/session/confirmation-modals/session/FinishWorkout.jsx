import React from 'react'
import ButtonBig from '../../../../Buttons/ButtonBig'
function FinishWorkout({ showFinishModal, setShowFinishModal, handleScreenChange, clearInterval }) {

    if (!showFinishModal) return null
    else {
        return (
            <>
                <button className='modal-overlay' onClick={() => setShowFinishModal(false)}></button>
                <div className='modal modal-spacing--no-body-text'>
                    <div className='modal-spacing--emoji-text'>
                        <div className='emoji'>🎉</div>
                        <h3>Finish Workout?</h3>
                    </div>
                    <div className='content-spacing--no-body-text'>
                        <div className='modal__buttons--horizontal'>
                            <ButtonBig color='gray' onClick={() => setShowFinishModal(false)}>Cancel</ButtonBig>
                            <ButtonBig color='green' onClick={() => {
                                setShowFinishModal(false)
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
