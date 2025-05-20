import React from 'react'
import ButtonBig from '../../Buttons/ButtonBig'
//If user creates new session, will ask them if they want to save as template
function SaveAsNewTemplate({ setShowModal, handleScreenChange, emptySets }) {
    const message = 'All invalid or empty sets will be removed. All valid sets will be marked as completed'

    return (
        <>
            <div className='modal-overlay'></div>
            <div className='modal modal-spacing--default'>
                <h3>Save as new Template?</h3>
                <div className='content-spacing--default'>
                    <p>{emptySets ? message : 'Save this workout as a template so you can perform it again in the future?'}
                    </p>
                    <div className='modal__buttons--vertical'>
                        <ButtonBig color='blue' onClick={() => {
                            setShowModal(false)
                            handleScreenChange()
                        }}>Save as Template</ButtonBig>
                        <ButtonBig color='gray' onClick={() => setShowModal(false)}>No thanks!</ButtonBig>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SaveAsNewTemplate
