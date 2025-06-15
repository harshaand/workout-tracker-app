import '../../../css/modals.scss';
import ButtonModal from '../../Buttons/ButtonModal.jsx'
import React from 'react'


function ModalOptionsTemplate({ templateName, templateId, setShowModal, type = 'userCreatedTemplate', setModalRenameTemplate, setModalDeleteTemplate,
    handleScreenChangeEditTemplate, duplicateTemplate, folderId, archiveTemplate }) {

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

        let timeoutId;
        function debouncedCheck() {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkPosition, 150)
        };
        window.addEventListener('resize', debouncedCheck); // checkPosition() 0.15s after resize stops/pauses

        checkPosition();

        return () => {
            clearTimeout(timeoutId);
            resizeObserver.disconnect();
            window.removeEventListener('resize', debouncedCheck);
        };
    }, []);

    if (type === 'userCreatedTemplate' || type === 'myTemplate' || type === 'archivedTemplate') {
        console.log('folderId', folderId)
        return (
            <>
                <button className='modal-overlay' onClick={(e) => {
                    e.stopPropagation()
                    setShowModal(undefined)
                }}></button>

                <div ref={modalRef} className={`modal-options modal-options--default-width`} style={{ ...modalStyle }} >
                    <ButtonModal type='options' icon='edit' onClick={(e) => {
                        e.stopPropagation()
                        handleScreenChangeEditTemplate()
                        setShowModal(undefined)
                    }}>Edit Template</ButtonModal>
                    <ButtonModal type='options' icon='edit' onClick={(e) => {
                        e.stopPropagation()
                        setModalRenameTemplate({ templateId: templateId, templateName: templateName })
                        setShowModal(undefined)
                    }}>Rename</ButtonModal>
                    <ButtonModal type='options' icon='duplicate' onClick={(e) => {
                        e.stopPropagation()
                        duplicateTemplate(folderId, templateId)
                        setShowModal(undefined)
                    }}>Duplicate</ButtonModal>
                    <ButtonModal type='options' icon='archive' onClick={(e) => {
                        e.stopPropagation()
                        archiveTemplate(folderId, templateId)
                        setShowModal(undefined)
                    }}>{type === 'archivedTemplate' ? 'Unarchive' : 'Archive'}</ButtonModal>
                    <ButtonModal type='optionsDelete' icon='delete' onClick={(e) => {
                        e.stopPropagation()
                        setModalDeleteTemplate()
                        setShowModal(undefined)
                    }}>Delete</ButtonModal>
                </div>
            </>
        )
    }
    if (type === 'exampleTemplate') {
        return (
            <>
                <button className='modal-overlay' onClick={(e) => {
                    e.stopPropagation()
                    setShowModal(undefined)
                }}></button>

                <div ref={modalRef} className={`modal-options modal-options--default-width`} style={{ ...modalStyle }} >
                    <ButtonModal type='options' icon='duplicate' onClick={(e) => {
                        e.stopPropagation()
                        duplicateTemplate(folderId, templateId)
                        setShowModal(undefined)
                    }}>Duplicate</ButtonModal>
                </div>
            </>
        )
    }
}

export default ModalOptionsTemplate
