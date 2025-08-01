import '../../../css/modals.scss';
import ButtonModal from '../../Buttons/ButtonModal.jsx'
import React from 'react'

function ModalOptionsFolder({ setShowModal, toggleCollapseFolder, folderOpenState,
    type = 'userCreatedFolder', setModalDeleteFolder, setModalInputFolderName, name, id,
    handleScreenChange, renameFolder
}) {
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
    if (type === 'userCreatedFolder') {
        return (
            <>
                <button className='modal-overlay' onClick={(e) => {
                    e.stopPropagation()
                    setShowModal(undefined)
                }}></button>

                <div ref={modalRef} className={`modal-options modal-options--default-width`} style={{ ...modalStyle }} >
                    <ButtonModal type='options' icon={folderOpenState ? 'collapse' : 'expand'} onClick={() => {
                        toggleCollapseFolder()
                        setShowModal(undefined)
                    }
                    }>{folderOpenState ? 'Collapse Folder' : 'Expand Folder'}</ButtonModal>
                    <ButtonModal type='options' icon='add' onClick={() => {
                        handleScreenChange()
                        setShowModal(undefined)
                    }
                    }>Add Template</ButtonModal>
                    <ButtonModal type='options' icon='edit' onClick={() => {
                        setModalInputFolderName({ id: id, type: 'rename' })
                        setShowModal(undefined)
                    }}>Rename Folder</ButtonModal>
                    <ButtonModal type='optionsDelete' icon='delete' onClick={() => {
                        setModalDeleteFolder()
                        setShowModal(undefined)
                    }}>Delete</ButtonModal>
                </div>
            </>
        )
    }
    else if (type === 'myTemplates') {
        return (
            <>
                <button className='modal-overlay' onClick={(e) => {
                    e.stopPropagation()
                    setShowModal(undefined)
                }}></button>

                <div ref={modalRef} className={`modal-options modal-options--default-width`} style={{ ...modalStyle }} >
                    <ButtonModal type='options' icon={folderOpenState ? 'collapse' : 'expand'} onClick={() => {
                        toggleCollapseFolder()
                        setShowModal(undefined)
                    }
                    }>{folderOpenState ? 'Collapse Folder' : 'Expand Folder'}</ButtonModal>
                    <ButtonModal type='options' icon='add' onClick={() => {
                        handleScreenChange()
                        setShowModal(undefined)
                    }}>Add Template</ButtonModal>
                </div>
            </>
        )
    }
    else if (type === 'exampleTemplates' || type === 'archivedTemplates') {
        return (
            <>
                <button className='modal-overlay' onClick={(e) => {
                    e.stopPropagation()
                    setShowModal(undefined)
                }}></button>

                <div ref={modalRef} className={`modal-options modal-options--default-width`} style={{ ...modalStyle }} >
                    <ButtonModal type='options' icon={folderOpenState ? 'collapse' : 'expand'} onClick={() => {
                        toggleCollapseFolder()
                        setShowModal(undefined)
                    }
                    }>{folderOpenState ? 'Collapse Folder' : 'Expand Folder'}</ButtonModal>
                </div>
            </>
        )
    }
}

export default ModalOptionsFolder
