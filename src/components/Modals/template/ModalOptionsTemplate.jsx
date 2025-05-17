import '../../../css/modals.scss';
import ButtonModal from '../../Buttons/ButtonModal.jsx'
import React from 'react'

function ModalOptionsTemplate() {
    return (
        <div className='modal-options modal-options--default-width'>
            <ButtonModal type='options' icon='edit'>Edit Template</ButtonModal>
            <ButtonModal type='options' icon='edit'>Rename</ButtonModal>
            <ButtonModal type='options' icon='duplicate'>Duplicate</ButtonModal>
            <ButtonModal type='options' icon='archive'>Archive</ButtonModal>
            <ButtonModal type='optionsDelete' icon='delete'>Delete</ButtonModal>
        </div>
    )
}

export default ModalOptionsTemplate
