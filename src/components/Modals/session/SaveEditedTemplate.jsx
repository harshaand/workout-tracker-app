import React from 'react'

function SaveEditedTemplate({ showSaveTemplateModal, setShowSaveTemplateModal, handleScreenChange, handleUpdateTemplate }) {

    if (!showSaveTemplateModal) return null
    else {
        return (
            <>
                <div className='modal-overlay'></div>
                <div className='div-finish-workout'>
                    <h3>Save Template?</h3>
                    <div className='buttons-finish-workout'>
                        <button onClick={() => setShowSaveTemplateModal(false)}>cancel</button>
                        <button onClick={() => {
                            handleUpdateTemplate()
                            setShowSaveTemplateModal(false)
                            handleScreenChange()
                        }}>save</button>
                    </div>
                </div>
            </>
        )
    }
}

export default SaveEditedTemplate
