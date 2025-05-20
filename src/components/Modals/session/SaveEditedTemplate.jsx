import React from 'react'
import ButtonBig from '../../Buttons/ButtonBig'

function SaveEditedTemplate({ showSaveTemplateModal, setShowSaveTemplateModal, handleScreenChange, handleUpdateTemplate }) {
    if (!showSaveTemplateModal) return null
    else {
        return (
            <>
                <div className='modal-overlay'></div>
                <div className='modal modal-spacing--no-body-text'>
                    <h3>Save Template?</h3>
                    <div className='content-spacing--no-body-text'>
                        <div className='modal__buttons--horizontal'>
                            <ButtonBig color='gray' onClick={() => setShowSaveTemplateModal(false)}>Cancel</ButtonBig>
                            <ButtonBig color='blue' onClick={() => {
                                handleUpdateTemplate()
                                setShowSaveTemplateModal(false)
                                handleScreenChange()
                            }}>Save</ButtonBig>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SaveEditedTemplate
