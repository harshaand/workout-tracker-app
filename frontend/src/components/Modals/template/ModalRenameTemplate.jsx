import React from 'react'
import ButtonBig from '../../Buttons/ButtonBig'
function ModalRenameTemplate({ setModalRenameTemplate, templateId, templateName, renameTemplate }) {
    const inputFieldRef = React.useRef(null);
    const [saveBtnDisabled, setSaveBtnDisabled] = React.useState(false)

    function handleInput(e) {
        const raw = e.target.value;
        const cleaned = raw.replace(/[^\p{L}\p{N}\p{Extended_Pictographic}\s]/gu, "");
        setSaveBtnDisabled(cleaned === '')
        if (raw !== cleaned) {
            e.target.value = cleaned;
        }

    }
    React.useEffect(() => {
        inputFieldRef.current.focus();

        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                setModalRenameTemplate(undefined);
            }
            if (e.key === 'Enter') {
                e.preventDefault();
                const userInput = inputFieldRef.current.value;
                if (userInput !== "") {
                    const form = document.getElementById('formRenameTemplate');
                    if (form) form.requestSubmit()
                }
                else inputFieldRef.current.blur();
            }
        }

        const inputElement = inputFieldRef.current;
        if (inputElement) {
            inputElement.addEventListener('keydown', handleKeyDown);
            return () => {
                inputElement.removeEventListener('keydown', handleKeyDown);
            };
        }

    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newTemplateName = formData.get('exerciseRename');
        renameTemplate(templateId, newTemplateName)
        setModalRenameTemplate(undefined)
    }

    return (
        <>
            <button className='modal-overlay' onClick={() => setModalRenameTemplate(undefined)}></button>

            <form id='formRenameTemplate' onSubmit={handleSubmit}>
                <div className='modal modal-spacing--no-body-text'>
                    <h3>Choose a Template Name</h3>
                    <div className='content-spacing--no-body-text'>
                        <input ref={inputFieldRef} type="text" name="exerciseRename" id="" defaultValue={templateName}
                            onInput={handleInput} />
                        <div className='modal__buttons--horizontal'>
                            <ButtonBig color='gray' onClick={() => setModalRenameTemplate(undefined)}>Cancel</ButtonBig>
                            <ButtonBig color='blue' buttonType='submit' disabled={saveBtnDisabled}>Save</ButtonBig>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ModalRenameTemplate
