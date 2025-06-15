import React from 'react'
import ButtonBig from '../../Buttons/ButtonBig'
function ModalSaveAsTemplate({ setModalSaveAsTemplate, history, saveAsTemplate }) {
    function handleSubmit(formData) {
        saveAsTemplate(history, formData.get('historyName'))
        setModalSaveAsTemplate(undefined)
    }

    return (
        <>
            <button className='modal-overlay' onClick={() => setModalSaveAsTemplate(undefined)}></button>

            <form action={handleSubmit}>
                <div className='modal modal-spacing--default'>
                    <h3>Save as Template</h3>
                    <div className='content-spacing--default'>
                        <p>Choose a name for the template. Template will be saved under "My Templates".</p>
                        <input type="text" name="historyName" id="" defaultValue={history.name} />
                    </div>
                    <div className='modal__buttons--horizontal'>
                        <ButtonBig color='gray' onClick={() => setModalSaveAsTemplate(undefined)}>Cancel</ButtonBig>
                        <ButtonBig color='blue' buttonType='submit'>Save</ButtonBig>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ModalSaveAsTemplate
