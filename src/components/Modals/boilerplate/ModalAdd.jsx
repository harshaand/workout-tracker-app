import React from 'react'
import '../../../css/modals.scss';
import ButtonSmall from '../../Buttons/ButtonSmall.jsx'

function ModalAdd() {
    return (
        <div className='modal-add'>
            <div className='modal__header'>
                <ButtonSmall type='closeModal' />
                <h3>Add New Folder</h3>
                <button className='btn--transparent'>Save</button>
            </div>
            <div className='input-container'>
                <label htmlFor="folderName"><h3>Folder Name</h3></label>
                <input id="folderName" name="username" type="text" />
            </div>
        </div>
    )
}

export default ModalAdd
