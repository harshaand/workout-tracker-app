import React from 'react'
import ButtonBig from '../../Buttons/ButtonBig'

function ModalDeleteHistory({ name, workoutId, setModalDeleteHistory, deleteWorkoutHistory }) {
    return (
        <>
            <button className='modal-overlay' onClick={() => setModalDeleteHistory(undefined)}></button>

            <div className='modal modal-spacing--default'>
                <h3>{`Delete "${name}"?`}</h3>
                <div className='content-spacing--default'>
                    <p>Are you sure you want to delete this
                        template? This cannot be undone.</p>
                    <div className='modal__buttons--vertical'>
                        <ButtonBig color='red' onClick={() => {
                            deleteWorkoutHistory(workoutId)
                            setModalDeleteHistory(undefined)
                        }}>Delete</ButtonBig>
                        <ButtonBig color='gray' onClick={() => { setModalDeleteHistory(undefined) }}>Cancel</ButtonBig>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalDeleteHistory
