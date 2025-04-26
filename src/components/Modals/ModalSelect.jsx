import React from 'react'
import '../../css/modals.css';
import ButtonSmall from '../ButtonSmall.jsx'
import ButtonModal from '../ButtonModal.jsx'

function ModalSelect() {
    return (
        <div className='modal-select'>
            <div className='modal-header'>
                <ButtonSmall type='closeModal' />
                <h3>Select Folder</h3>
                <button className='btn-transparent'>Next</button>
            </div>
            <div className='modal-select-buttons-container'>
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
