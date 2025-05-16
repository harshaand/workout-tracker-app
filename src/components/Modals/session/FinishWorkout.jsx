import React from 'react'

function FinishWorkout({ showFinishModal, setShowFinishModal, handleScreenChange, clearInterval }) {

    if (!showFinishModal) return null
    else {
        return (
            <>
                <div className='modal-overlay'></div>
                <div className='div-finish-workout'>
                    <h3>Finish Workout?</h3>
                    <div className='buttons-finish-workout'>
                        <button onClick={() => setShowFinishModal(false)}>cancel</button>
                        <button onClick={() => {
                            setShowFinishModal(false)
                            clearInterval()
                            handleScreenChange()
                        }}>finish</button>
                    </div>
                </div>
            </>
        )
    }
}

export default FinishWorkout
