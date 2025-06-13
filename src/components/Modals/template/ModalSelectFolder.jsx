import React from 'react'
import '../../../css/modals.scss';
import ButtonSmall from '../../Buttons/ButtonSmall.jsx'
import { Tick } from '../../../assets/icons/icons.js';

function ModalSelectFolder({ setShowModal, handleScreenChange, newEmptySession }) {
    function handleSubmit(formData) {
        console.log(formData.get('selectedFolder'))
        handleScreenChange('SessionScreen', { ...newEmptySession, name: 'New Template' }, 'newEmptyTemplate')
    }
    return (
        <>
            <button className='modal-overlay' onClick={() => setShowModal(false)}></button>

            <form action={handleSubmit}>
                <div className='modal-select'>
                    <div className='modal__header'>
                        <ButtonSmall type='closeModal' />
                        <h3>Select Folder</h3>
                        <button type='submit' className='btn--transparent'>Next</button>
                    </div>
                    <div className='modal-select__container-buttons'>
                        <label key='1' className='modal-select__btn active'>None<Tick /><input type="radio" name='selectedFolder' value='None' /></label>
                        <label key='2' className='modal-select__btn active'>Folder 4<Tick /><input type="radio" name='selectedFolder' value='Folder 4' /></label>
                        <label key='3' className='modal-select__btn active'>Folder 3<Tick /><input type="radio" name='selectedFolder' value='Folder 3' /></label>
                        <label key='4' className='modal-select__btn active'>Folder 2<Tick /><input type="radio" name='selectedFolder' value='Folder 2' /></label>
                        <label key='5' className='modal-select__btn active'>Folder 1<Tick /><input type="radio" name='selectedFolder' value='Folder 1' /></label>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ModalSelectFolder
