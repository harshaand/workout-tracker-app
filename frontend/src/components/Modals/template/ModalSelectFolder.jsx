import React from 'react'
import '../../../css/modals.scss';
import ButtonSmall from '../../Buttons/ButtonSmall.jsx'
import { Tick } from '../../../assets/icons/icons.js';
import { useData } from '../../../DataContext.jsx'

function ModalSelectFolder({ setShowModal, handleScreenChange, newEmptySession }) {
    const useLocalStorage = useData()
    const [data, saveData] = useLocalStorage('userData')

    function handleSubmit(formData) {
        handleScreenChange('SessionScreen', { ...newEmptySession, name: 'New Template' }, 'newEmptyTemplate', formData.get('selectedFolder'))
    }
    return (
        <>
            <button className='modal-overlay' onClick={() => setShowModal(false)}></button>

            <form action={handleSubmit}>
                <div className='modal-select'>
                    <div className='modal__header'>
                        <ButtonSmall type='closeModal' onClick={() => setShowModal(false)} />
                        <h3>Select Folder</h3>
                        <button type='submit' className='btn--transparent'>Next</button>
                    </div>
                    <div className='modal-select__container-buttons'>
                        <label key='modal-select-myTemplates' className='modal-select__btn active'>None (No Folder)<Tick /><input type="radio" name='selectedFolder' value='myTemplates' /></label>
                        {data.templateFolders.userCreatedFolders.map(folder => {
                            return <label key={`modal-select-${folder.id}`} className='modal-select__btn active'>{folder.name}<Tick /><input type="radio" name='selectedFolder' value={folder.id} /></label>
                        })}
                    </div>
                </div>
            </form>
        </>
    )
}

export default ModalSelectFolder
