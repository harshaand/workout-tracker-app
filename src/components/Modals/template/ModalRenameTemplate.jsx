import React from 'react'
import ButtonBig from '../../Buttons/ButtonBig'
function ModalRenameTemplate({ setModalRenameTemplate, templateId, templateName, renameTemplate }) {
    function handleSubmit(formData) {
        console.log(formData.get('exerciseRename'))
        renameTemplate(templateId, formData.get('exerciseRename'))
        setModalRenameTemplate(undefined)
    }

    return (
        <>
            <button className='modal-overlay' onClick={() => setModalRenameTemplate(undefined)}></button>

            <form action={handleSubmit}>
                <div className='modal modal-spacing--no-body-text'>
                    <h3>Choose a Template Name</h3>
                    <div className='content-spacing--no-body-text'>
                        <input type="text" name="exerciseRename" id="" defaultValue={templateName} />
                        <div className='modal__buttons--horizontal'>
                            <ButtonBig color='gray' onClick={() => setModalRenameTemplate(undefined)}>Cancel</ButtonBig>
                            <ButtonBig color='blue' buttonType='submit'>Save</ButtonBig>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ModalRenameTemplate
