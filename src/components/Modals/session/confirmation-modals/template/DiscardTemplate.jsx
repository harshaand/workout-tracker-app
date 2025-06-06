import React from 'react'
import '../../../../../css/modals.scss';
import ButtonBig from '../../../../Buttons/ButtonBig.jsx'

function DiscardTemplate({ showModal, setShowModal, handleScreenChange }) {
    if (!showModal) return null
    else {
        return (
            <>
                <button className='modal-overlay' onClick={() => setShowModal(false)}></button>

                <div className='modal modal-spacing--default'>
                    <h3>Discard Template?</h3>
                    <div className='content-spacing--default'>
                        <p>Are you sure you want to discard this
                            template? All progress will be lost</p>
                        <div className='modal__buttons--horizontal'>
                            <ButtonBig color='gray' onClick={() => { setShowModal(false) }}>Do Nothing</ButtonBig>
                            <ButtonBig color='red' onClick={() => {
                                setShowModal(false)
                                handleScreenChange()
                            }}>Discard</ButtonBig>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DiscardTemplate


