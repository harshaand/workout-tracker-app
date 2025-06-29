import '../../../css/modals.scss';
import ButtonModal from '../../Buttons/ButtonModal.jsx'
import React from 'react'

function ModalOptionsHistory({ setShowModal, handleScreenChangeEditTemplate, setModalDeleteHistory, setModalSaveAsTemplate }) {
    const modalRef = React.useRef(null);
    const [modalStyle, setModalStyle] = React.useState({ visibility: 'hidden' });

    function checkPosition() {
        if (!modalRef.current) return;

        const rect = modalRef.current.getBoundingClientRect();
        const style = {};

        if (rect.left < rect.width) { style.left = 0; }
        else { style.right = 0; }

        if (rect.bottom > window.innerHeight) { style.bottom = 0; }
        else { style.top = 0; }

        setModalStyle(style);
    }


    React.useEffect(() => {
        const resizeObserver = new ResizeObserver(checkPosition);
        if (modalRef.current) resizeObserver.observe(modalRef.current);

        // let timeoutId;
        // function debouncedCheck() {
        //     clearTimeout(timeoutId);
        //     timeoutId = setTimeout(checkPosition, 150)
        // };
        // window.addEventListener('resize', debouncedCheck); // checkPosition() 0.15s after resize stops/pauses

        checkPosition();

        return () => {
            // clearTimeout(timeoutId);
            resizeObserver.disconnect();
            // window.removeEventListener('resize', debouncedCheck);
        };
    }, []);
    return (
        <>
            <button className='modal-overlay' onClick={(e) => {
                e.stopPropagation()
                setShowModal(undefined)
            }}></button>

            <div ref={modalRef} className='modal-options modal-options--default-width' style={{ ...modalStyle }} >
                <ButtonModal type='options' icon='edit' onClick={(e) => {
                    e.stopPropagation()
                    handleScreenChangeEditTemplate()
                    setShowModal(undefined)
                }}>Edit Workout</ButtonModal>
                <ButtonModal type='options' icon='add' onClick={(e) => {
                    e.stopPropagation()
                    setModalSaveAsTemplate()
                    setShowModal(undefined)
                }}>Save as Template</ButtonModal>
                <ButtonModal type='optionsDelete' icon='delete' onClick={(e) => {
                    e.stopPropagation()
                    setModalDeleteHistory()
                    setShowModal(undefined)
                }}>Delete</ButtonModal>
            </div>
        </>
    )
}

export default ModalOptionsHistory
