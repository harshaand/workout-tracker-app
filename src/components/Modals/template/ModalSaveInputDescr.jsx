import React from 'react'
import '../../css/modals.css';
import ButtonBig from '../../Buttons/ButtonBig.jsx'

function ModalSaveInputDescr() {
    return (

        <div className='modal modal-spacing-default'>
            <h3>Save as Template?</h3>
            <div className='content-spacing-default'>
                <p>Choose a name for the template</p>
                <input type="text" name="" id="" />
            </div>
            <div className='modal-buttons-horizontal'>
                <ButtonBig color='gray'>Cancel</ButtonBig>
                <ButtonBig color='blue'>Save</ButtonBig>
            </div>
        </div>
    )
}

export default ModalSaveInputDescr
