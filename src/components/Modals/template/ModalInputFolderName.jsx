import React from 'react'
import '../../../css/modals.scss';
import ButtonSmall from '../../Buttons/ButtonSmall';

function ModalInputFolderName({ type = 'add' }) {
    let modalTitle
    if (type === 'add') modalTitle = 'Add New Folder'
    if (type === 'rename') modalTitle = 'Rename Folder'

    return (
        <div className='modal-input-folder-name'>
            <div className='header'>
                <ButtonSmall type='closeModal' />
                <h3>{modalTitle}</h3>
                <button type='submit' className='btn--transparent'>Save</button>
            </div>
            <label> Folder Name
                <input type="text" />
            </label>
        </div>
    )
}

export default ModalInputFolderName
