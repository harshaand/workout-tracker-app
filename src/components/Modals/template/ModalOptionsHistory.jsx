import '../../../css/modals.scss';
import ButtonModal from '../../Buttons/ButtonModal.jsx'
import React from 'react'

function ModalOptionsHistory() {
    return (
        <div className='modal-options modal-options--default-width'>
            <ButtonModal type='options' icon='edit'>Edit Workout</ButtonModal>
            <ButtonModal type='options' icon='add'>Save as Template</ButtonModal>
            <ButtonModal type='optionsDelete' icon='delete'>Delete</ButtonModal>
        </div>
    )
}

export default ModalOptionsHistory
