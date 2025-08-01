import React from 'react'
import '../../../../css/modals.scss';
import ButtonBig from '../../../Buttons/ButtonBig.jsx'

function RevertChanges({ showModal, setShowModal, handleScreenChange }) {
    if (!showModal) return null
    else {
        return (
            <>
                <button className='modal-overlay' onClick={() => setShowModal(false)}></button>

                <div className='modal modal-spacing--default'>
                    <h3>Revert Changes?</h3>
                    <div className='content-spacing--default'>
                        <p>Are you sure you want to revert changes?
                            All unsaved changes will be lost.</p>
                        <div className='modal__buttons--horizontal'>
                            <ButtonBig color='gray' onClick={() => { setShowModal(false) }}>Cancel</ButtonBig>
                            <ButtonBig color='red' onClick={() => {
                                setShowModal(false)
                                handleScreenChange()
                            }}>Revert</ButtonBig>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default RevertChanges

