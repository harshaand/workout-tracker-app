import React from 'react'
import '../../css/modals.scss';
import ButtonBig from '../../Buttons/ButtonBig.jsx'

function ModalDiscard() {
    return (
        <div className='modal modal-spacing--default'>
            <h3>Discard Template?</h3>
            <div className='content-spacing--default'>
                <p>Are you sure you want to delete this
                    template? This cannot be undone.</p>
                <div className='modal__buttons--horizontal'>
                    <ButtonBig color='gray'>Do Nothing</ButtonBig>
                    <ButtonBig color='red'>Discard</ButtonBig>
                </div>
            </div>
        </div>
    )
}

export default ModalDiscard
