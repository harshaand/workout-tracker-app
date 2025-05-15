import React from 'react'

function SaveAsNewTemplate({ showSaveAsNewTemplate, setShowSaveAsNewTemplate, handleScreenChange, emptySets }) {
    const message = 'All invalid or empty sets will be removed. All valid sets will be marked as completed'
    if (!showSaveAsNewTemplate) return null
    else {
        return (
            <>
                <div className='modal-overlay'></div>
                <div className='div-finish-workout'>
                    <h3>Finish Workout?</h3>
                    {emptySets && message}
                    <div className='buttons-finish-workout'>
                        <button onClick={() => setShowSaveAsNewTemplate(false)}>cancel</button>
                        <button onClick={() => {
                            setShowSaveAsNewTemplate(false)
                            handleScreenChange()
                        }}>finish</button>
                    </div>
                </div>
            </>
        )
    }
}

export default SaveAsNewTemplate
