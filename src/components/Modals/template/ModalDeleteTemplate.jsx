import React from 'react'
import ButtonBig from '../../Buttons/ButtonBig'

function ModalDeleteTemplate({ name, id, setModalDeleteTemplate }) {
    return (
        <>
            <button className='modal-overlay' onClick={() => setModalDeleteTemplate(undefined)}></button>

            <div className='modal modal-spacing--default'>
                <h3>{`Delete "${name}"?`}</h3>
                <div className='content-spacing--default'>
                    <p>Are you sure you want to delete this
                        template? This cannot be undone.</p>
                    <div className='modal__buttons--vertical'>
                        <ButtonBig color='red' onClick={() => {
                            setModalDeleteTemplate(undefined)
                        }}>Delete</ButtonBig>
                        <ButtonBig color='gray' onClick={() => { setModalDeleteTemplate(undefined) }}>Cancel</ButtonBig>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalDeleteTemplate
