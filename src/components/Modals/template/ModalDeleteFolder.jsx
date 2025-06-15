import React from 'react'
import ButtonBig from '../../Buttons/ButtonBig'

function ModalDeleteFolder({ name, id, setModalDeleteFolder, deleteFolder }) {
    return (
        <>
            <button className='modal-overlay' onClick={() => setModalDeleteFolder(undefined)}></button>

            <div className='modal modal-spacing--default'>
                <h3>{`Delete "${name}"?`}</h3>
                <div className='content-spacing--default'>
                    <p>All templates in this folder will be moved to "My Templates".</p>
                    <div className='modal__buttons--vertical'>
                        <ButtonBig color='red' onClick={() => {
                            setModalDeleteFolder(undefined)
                            deleteFolder(id)
                        }}>Delete</ButtonBig>
                        <ButtonBig color='gray' onClick={() => { setModalDeleteFolder(undefined) }}>Cancel</ButtonBig>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalDeleteFolder
