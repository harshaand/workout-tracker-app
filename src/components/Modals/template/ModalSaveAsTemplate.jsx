import React from 'react'
import ButtonBig from '../../Buttons/ButtonBig'
function ModalSaveAsTemplate({ setModalRenameTemplate, id, renameTemplate }) {
    function handleSubmit(formData) {
        console.log(formData.get('exerciseRename'))
        renameTemplate(id, formData.get('exerciseRename'))
        setModalRenameTemplate(undefined)
    }

    return (
        <>
            <button className='modal-overlay' onClick={() => setModalRenameTemplate(undefined)}></button>

            <form action={handleSubmit}>
                <div className='modal modal-spacing--default'>
                    <h3>Save as Template</h3>
                    <div className='content-spacing--default'>
                        <p>Choose a name for the template</p>
                        <input type="text" name="exerciseRename" id="" />
                    </div>
                    <div className='modal__buttons--horizontal'>
                        <ButtonBig color='gray' onClick={() => setModalRenameTemplate(undefined)}>Cancel</ButtonBig>
                        <ButtonBig color='blue'>Save</ButtonBig>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ModalSaveAsTemplate
