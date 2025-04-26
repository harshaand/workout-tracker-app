import React from 'react'
import '../../css/modals.css';
import ButtonBig from '../ButtonBig.jsx'

function ModalSave() {
    return (
        <div className='modal modal-spacing-no-body-text'>
            <h3>Save Template?</h3>
            <div className='content-spacing-no-body-text'>
                <div className='modal-buttons-horizontal'>
                    <ButtonBig color='gray'>Cancel</ButtonBig>
                    <ButtonBig color='blue'>Save</ButtonBig>
                </div>
            </div>
        </div>
    )
}

export default ModalSave
