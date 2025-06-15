import React from 'react'
import '../../../css/modals.scss';
import ButtonSmall from '../../Buttons/ButtonSmall';

function ModalInputFolderName({ type = 'add', setModalInputFolderName, id, addFolder, renameFolder }) {
    let modalTitle
    if (type === 'add') modalTitle = 'Add New Folder'
    if (type === 'rename') modalTitle = 'Rename Folder'

    function handleSubmit(formData) {
        console.log(formData.get('folderName'), id)
        if (type === 'add') {
            addFolder(id, formData.get('folderName'))
            setModalInputFolderName(undefined)
        }
        else if (type === 'rename') {
            renameFolder(id, formData.get('folderName'))
            setModalInputFolderName(undefined)
        }
    }
    return (
        <>
            <button className='modal-overlay' onClick={() => setModalInputFolderName(undefined)}></button>

            <form action={handleSubmit}>
                <div className='modal-input-folder-name'>
                    <div className='header'>
                        <ButtonSmall type='closeModal' onClick={() => setModalInputFolderName(undefined)} />
                        <h3>{modalTitle}</h3>
                        <button type='submit' className='btn--transparent'>Save</button>
                    </div>
                    <label> Folder Name
                        <input type="text" name="folderName" id="" />
                    </label>
                </div>
            </form>
        </>
    )
}

export default ModalInputFolderName
