import React from 'react'
import '../../../css/modals.scss';
import ButtonBig from '../../Buttons/ButtonBig.jsx'

function ModalDelete() {
    return (
        <div className='modal modal-spacing--default'>
            <h3>Delete "Template Example Copy"?</h3>
            <div className='content-spacing--default'>
                <p>Are you sure you want to delete this
                    template? This cannot be undone.</p>
                <div className='modal__buttons--vertical'>
                    <ButtonBig color='red'>Delete</ButtonBig>
                    <ButtonBig color='gray'>Cancel</ButtonBig>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete
