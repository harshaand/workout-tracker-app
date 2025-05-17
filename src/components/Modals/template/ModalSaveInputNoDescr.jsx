import React from 'react'
import '../../css/modals.scss';
import ButtonBig from '../../Buttons/ButtonBig.jsx'

function ModalSaveInputNoDescr() {
    return (
        <div className='modal modal-spacing--no-body-text'>
            <h3>Choose a template name</h3>
            <div className='content-spacing--no-body-text'>
                <input type="text" name="" id="" />
                <div className='modal__buttons--horizontal'>
                    <ButtonBig color='gray'>Cancel</ButtonBig>
                    <ButtonBig color='blue'>Save</ButtonBig>
                </div>
            </div>
        </div>
    )
}

export default ModalSaveInputNoDescr
