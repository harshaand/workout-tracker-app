import React from 'react'
import '../../../css/modals.scss';
import ButtonSmall from '../../Buttons/ButtonSmall';

function ModalInputFolderName({ type = 'add', setModalInputFolderName, id, addFolder, renameFolder }) {
    const inputFieldRef = React.useRef(null);
    const [saveBtnDisabled, setSaveBtnDisabled] = React.useState(true)

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
                setModalInputFolderName(undefined);
            }
            if (e.key === 'Enter') {
                e.preventDefault();
                const userInput = inputFieldRef.current.value;
                if (userInput !== "") {
                    const form = document.getElementById('formInputFolderName');
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

    let modalTitle
    if (type === 'add') modalTitle = 'Add New Folder'
    if (type === 'rename') modalTitle = 'Rename Folder'

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newFolderName = formData.get('folderName')
        if (type === 'add') {
            addFolder(id, newFolderName)
            setModalInputFolderName(undefined)
        }
        else if (type === 'rename') {
            renameFolder(id, newFolderName)
            setModalInputFolderName(undefined)
        }
    }

    return (
        <>
            <button className='modal-overlay' onClick={() => setModalInputFolderName(undefined)}></button>

            <form id='formInputFolderName' onSubmit={handleSubmit}>
                <div className='modal-input-folder-name'>
                    <div className='header'>
                        <ButtonSmall type='closeModal' onClick={() => setModalInputFolderName(undefined)} />
                        <h3>{modalTitle}</h3>
                        <button type='submit' className='btn--transparent' disabled={saveBtnDisabled}>Save</button>
                    </div>
                    <label> Folder Name
                        <input ref={inputFieldRef} type="text" name="folderName" id="" onInput={handleInput} />
                    </label>
                </div>
            </form>
        </>
    )
}

export default ModalInputFolderName
