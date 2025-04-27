import '../../css/modals.css';
import ButtonModal from '../Buttons/ButtonModal.jsx'
import React from 'react'

function ModalOptionsEditTemplateScreen() {
    return (
        <div className='modal-options modal-options-wide-width'>
            <ButtonModal type='options' icon='edit'>Edit Template Name</ButtonModal>
            <ButtonModal type='options' icon='edit'>Set Template Folder</ButtonModal>
        </div>
    )
}

export default ModalOptionsEditTemplateScreen
