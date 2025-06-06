import React from 'react'
import ButtonBig from '../../../../Buttons/ButtonBig'
//If user creates new session, will ask them if they want to save as template
function SaveAsNewTemplate({ showModal, setShowModal, handleUpdateTemplate, saveToHistory }) {
    if (!showModal) return null
    else {
        return (
            <>
                <button className='modal-overlay' onClick={() => setShowModal(false)}></button>
                <div className='modal modal-spacing--default'>
                    <h3>Save as new Template?</h3>
                    <div className='content-spacing--default'>
                        <p>Save this workout as a template so you can perform it again in the future?</p>
                        <div className='modal__buttons--vertical'>
                            <ButtonBig color='blue' onClick={() => {
                                handleUpdateTemplate()
                                saveToHistory()
                                setShowModal(false)
                            }}>Save as Template</ButtonBig>
                            <ButtonBig color='gray' onClick={() => setShowModal(false)}>No thanks!</ButtonBig>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default SaveAsNewTemplate