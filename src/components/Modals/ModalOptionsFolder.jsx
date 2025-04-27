import '../../css/modals.css';
import ButtonModal from '../Buttons/ButtonModal.jsx'
import React from 'react'

function ModalOptionsFolder() {
    return (
        <div className='modal-options modal-options-default-width'>
            <ButtonModal type='options' icon='collapse'>Collapse Folder</ButtonModal>
            <ButtonModal type='options' icon='add'>Add Template</ButtonModal>
            <ButtonModal type='options' icon='edit'>Rename Template</ButtonModal>
            <ButtonModal type='optionsDelete' icon='delete'>Delete</ButtonModal>
        </div>
    )
}

export default ModalOptionsFolder
