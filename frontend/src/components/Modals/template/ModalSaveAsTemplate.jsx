import React from 'react'
import ButtonBig from '../../Buttons/ButtonBig'
function ModalSaveAsTemplate({ setModalSaveAsTemplate, history, saveAsTemplate }) {
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
                setModalSaveAsTemplate(undefined);
            }
            if (e.key === 'Enter') {
                e.preventDefault();
                const userInput = inputFieldRef.current.value;
                if (userInput !== "") {
                    const form = document.getElementById('formSaveAsTemplate');
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
        e.preventDefault()
        const formData = new FormData(e.target)
        const newTemplateName = formData.get('historyName')
        saveAsTemplate(history, newTemplateName)
        setModalSaveAsTemplate(undefined)
    }

    return (
        <>
            <button className='modal-overlay' onClick={() => setModalSaveAsTemplate(undefined)}></button>
            <form id='formSaveAsTemplate' onSubmit={handleSubmit}>
                <div className='modal modal-spacing--default'>
                    <h3>Save as Template</h3>
                    <div className='content-spacing--default'>
                        <p>Choose a name for the template. Template will be saved under "My Templates".</p>
                        <input ref={inputFieldRef} type="text" name="historyName" id="" defaultValue={history.name}
                            onInput={handleInput} />
                    </div>
                    <div className='modal__buttons--horizontal'>
                        <ButtonBig color='gray' onClick={() => setModalSaveAsTemplate(undefined)}>Cancel</ButtonBig>
                        <ButtonBig color='blue' buttonType='submit' disabled={saveBtnDisabled}>Save</ButtonBig>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ModalSaveAsTemplate
