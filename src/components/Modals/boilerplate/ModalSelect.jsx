import React from 'react'
import '../../../css/modals.scss';
import ButtonSmall from '../../Buttons/ButtonSmall.jsx'
import ButtonModal from '../../Buttons/ButtonModal.jsx'

function ModalSelect() {
    return (
        <div className='modal-select'>
            <div className='modal__header'>
                <ButtonSmall type='closeModal' />
                <h3>Select Folder</h3>
                <button className='btn--transparent'>Next</button>
            </div>
            <div className='modal-select__container-buttons'>
                <ButtonModal type='select' icon='check'>None</ButtonModal>
                <ButtonModal type='select' icon='check'>Folder 5</ButtonModal>
                <ButtonModal type='select' icon='check'>Folder 4</ButtonModal>
                <ButtonModal type='select' icon='check'>Folder 3</ButtonModal>
                <ButtonModal type='select' icon='check'>Full Body</ButtonModal>
            </div>
        </div>
    )
}

export default ModalSelect
