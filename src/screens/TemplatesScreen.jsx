import '../css/buttons.scss';
import '../css/modals.scss';
import React from 'react'
import ButtonSmall from '../components/Buttons/ButtonSmall.jsx'
import ButtonBig from '../components/Buttons/ButtonBig.jsx'
import CardWorkoutTemplate from '../components/Cards/CardWorkoutTemplate.jsx'

import ModalTemplateOverview from '../components/Modals/session/content-modals/TemplateOverview.jsx';
import ModalOptionsFolder from '../components/Modals/template/ModalOptionsFolder.jsx'
import ModalSelectFolder from '../components/Modals/template/ModalSelectFolder.jsx';
import ModalRenameTemplate from '../components/Modals/template/ModalRenameTemplate.jsx';
import ModalInputFolderName from '../components/Modals/template/ModalInputFolderName.jsx';
import ModalDeleteTemplate from '../components/Modals/template/ModalDeleteTemplate.jsx'
import ModalDeleteFolder from '../components/Modals/template/ModalDeleteFolder.jsx';

import CardWorkoutHistory from '../components/Cards/CardWorkoutHistory.jsx'
import CardExerciseTracker from '../components/Cards/CardExerciseTracker.jsx'
import FolderList from '../OTHER/FoldersFunctionality.jsx'
import Navbar from '../components/Navbar.jsx'

import { useData } from '../DataContext.jsx'
import SessionScreen from './SessionScreen.jsx'

import { v4 as uuidv4 } from 'uuid';

import { RoutingContext } from '../App.jsx'


function TemplatesScreen() {
    const { currentScreen, handleScreenChange } = React.useContext(RoutingContext)
    const useLocalStorage = useData()
    const [data, saveData] = useLocalStorage('userData')
    console.log('DATA IN DB:', data)
    /* SCREEN VARIANTS
    1. newSession ------new key
    2. editSession -----old key
    3. editTemplate   
    4. newEmptyTemplate
    5. newEmptySession -new key
    */
    const screenVariant = React.useRef(null);
    const [showModalSelectFolder, setShowModalSelectFolder] = React.useState(false)
    const [modalRenameTemplate, setModalRenameTemplate] = React.useState(undefined)
    const [modalInputFolderName, setModalInputFolderName] = React.useState(undefined)
    const [modalDeleteTemplate, setModalDeleteTemplate] = React.useState(undefined)
    const [modalDeleteFolder, setModalDeleteFolder] = React.useState(undefined)
    const [showModalTemplateOverview, setShowModalTemplateOverview] = React.useState(null)
    const [showModalOptionsFolder, setShowModalOptionsFolder] = React.useState(null)
    const [showModalOptionsTemplate, setShowModalOptionsTemplate] = React.useState(undefined)

    const openFolders = React.useRef(Object.fromEntries(
        [...data.templateFolders.userCreatedFolders.map(folder => [folder.id, true]),
        ['myTemplates', true],
        ['exampleTemplates', true],
        ['archivedTemplates', true]]
    ))

    const newEmptySession = {
        id: uuidv4(),
        name: 'New Workout',
        duration: undefined,
        notes: undefined,
        lastDone: undefined,

        exercises: []
    }

    function toggleCollapseFolder(folderId) {
        openFolders.current = {
            ...openFolders.current,
            [folderId]: !openFolders.current[folderId]
        };

        const wrapperTemplates = document.getElementById(`wrapper-templates-${folderId}`)
        const templates = document.getElementById(`templates-${folderId}`)
        const transitionTime = 0.5

        if (openFolders.current[folderId] === false) {
            wrapperTemplates.style.gridTemplateRows = '0fr';
            wrapperTemplates.style.transition = `grid-template-rows ${transitionTime}s`
            templates.style.overflow = 'hidden';
        }
        else {
            wrapperTemplates.style.gridTemplateRows = '1fr';
            setTimeout(() => { templates.style.overflow = 'visible' }, transitionTime * 1000);
        }
    }

    function addFolder(id, name) {
        saveData(prev => (
            {
                ...prev,
                templateFolders: {
                    ...prev.templateFolders,
                    userCreatedFolders: [
                        { id: id, name: name, templates: [] },
                        ...prev.templateFolders.userCreatedFolders
                    ]
                }
            }
        ))
    }

    function renameFolder(id, newName) {
        saveData(prev => {
            let updatedFolders = prev.templateFolders
            const existingFolder = prev.templateFolders.userCreatedFolders.find(folder => folder.id === id);
            if (existingFolder) {
                const updatedUserCreatedFolders = prev.templateFolders.userCreatedFolders.map(folder => {
                    return folder.id === id ?
                        { ...folder, name: newName }
                        : folder
                })
                updatedFolders = { ...prev.templateFolders, userCreatedFolders: updatedUserCreatedFolders }
            }
            // else {
            //     updatedFolders = {
            //         ...prev.templateFolders,
            //         userCreatedFolders: [
            //             ...prev.templateFolders.userCreatedFolders,
            //             { id: id, name: id, templates: [template.id] }
            //         ]
            //     }
            // }
            return {
                ...prev,
                templateFolders: updatedFolders
            }
        })
    }

    function deleteFolder(id) {
        saveData(prev => {
            let updatedFolders = prev.templateFolders
            const existingFolder = prev.templateFolders.userCreatedFolders.find(folder => folder.id === id);
            if (existingFolder) {
                //delete folder
                updatedFolders.userCreatedFolders = updatedFolders.userCreatedFolders.filter(folder => folder.id !== id)
                //copy templates in folder to myTemplates
                updatedFolders.myTemplates = [...updatedFolders.myTemplates, ...existingFolder.templates]
            }
            return {
                ...prev,
                templateFolders: updatedFolders
            }
        })
    }

    function renameTemplate(id, newName) {
        saveData(prev => {
            let updatedTemplates = prev.templates
            updatedTemplates = updatedTemplates.map(template =>
                template.id === id ? { ...template, name: newName } : template
            );

            return {
                ...prev,
                templates: updatedTemplates
            }
        })
    }

    function duplicateTemplate(folderId, templateId) {
        saveData(prev => {
            const idDuplicateTemplate = uuidv4()
            const orignalTemplate = prev.templates.find(template => template.id === templateId)
            const duplicateTemplate = { ...orignalTemplate, name: orignalTemplate.name + ' Copy', id: idDuplicateTemplate }

            if (folderId === 'exampleTemplates' || folderId === 'myTemplates') {
                const updatedMyTemplates = [...prev.templateFolders.myTemplates, idDuplicateTemplate]
                return {
                    ...prev,
                    templates: [...prev.templates, duplicateTemplate],
                    templateFolders: {
                        ...prev.templateFolders,
                        myTemplates: updatedMyTemplates
                    }
                }
            }
            else if (folderId === 'archivedTemplates') {
                const updatedArchivedTemplates = [...prev.templateFolders.archivedTemplates, { folderId: folderId, templateId: idDuplicateTemplate }]
                return {
                    ...prev,
                    templates: [...prev.templates, duplicateTemplate],
                    templateFolders: {
                        ...prev.templateFolders,
                        archivedTemplates: updatedArchivedTemplates
                    }
                }
            }
            else {
                const updatedUserCreatedFolders = prev.templateFolders.userCreatedFolders.map(folder => {
                    return folder.id === folderId ? { ...folder, templates: [...folder.templates, idDuplicateTemplate] }
                        : folder
                })
                return {
                    ...prev,
                    templates: [...prev.templates, duplicateTemplate],
                    templateFolders: {
                        ...prev.templateFolders,
                        userCreatedFolders: updatedUserCreatedFolders
                    }
                }
            }
        })
    }

    function archiveTemplate(folderId, templateId) {
        saveData(prev => {
            //archiving myTemplates templates
            if (folderId === 'myTemplates') {
                const updatedMyTemplates = prev.templateFolders.myTemplates.filter(templId => templId !== templateId)
                const updatedArchivedTemplates = [...prev.templateFolders.archivedTemplates, { folderId: 'myTemplates', templateId: templateId }]
                return {
                    ...prev,
                    templateFolders: {
                        ...prev.templateFolders,
                        myTemplates: updatedMyTemplates,
                        archivedTemplates: updatedArchivedTemplates
                    }
                }
            }
            //unarchiving templates
            else if (folderId === 'archivedTemplates') {
                const archivedTemplate = prev.templateFolders.archivedTemplates.find(archivedTemplate => archivedTemplate.templateId === templateId)
                const updatedArchivedTemplates = prev.templateFolders.archivedTemplates.filter(archivedTemplate =>
                    archivedTemplate.templateId !== templateId)
                //if template was orignally archived from myTemplates
                if (archivedTemplate.folderId === 'myTemplates') {
                    const updatedMyTemplates = [...prev.templateFolders.myTemplates, templateId]
                    return {
                        ...prev,
                        templateFolders: {
                            ...prev.templateFolders,
                            myTemplates: updatedMyTemplates,
                            archivedTemplates: updatedArchivedTemplates
                        }
                    }
                }
                //if template was orignally archived from userCreatedFolders or unknown folder
                else {
                    let folderExists = prev.templateFolders.userCreatedFolders.find(
                        folder => folder?.id === archivedTemplate?.folderId
                    ) || null;

                    if (folderExists) {
                        const updatedUserCreatedFolders = prev.templateFolders.userCreatedFolders.map(folder => {
                            return folder.id === archivedTemplate.folderId ? { ...folder, templates: [...folder.templates, templateId] }
                                : folder
                        })
                        return {
                            ...prev,
                            templateFolders: {
                                ...prev.templateFolders,
                                userCreatedFolders: updatedUserCreatedFolders,
                                archivedTemplates: updatedArchivedTemplates
                            }
                        }
                    }
                    else {
                        const updatedMyTemplates = [...prev.templateFolders.myTemplates, templateId]
                        return {
                            ...prev,
                            templateFolders: {
                                ...prev.templateFolders,
                                myTemplates: updatedMyTemplates,
                                archivedTemplates: updatedArchivedTemplates
                            }
                        }

                    }

                }
            }
            //archiving userCreatedFolders templates to orignal folders. If folder not found, will go to myTemplates
            else {
                const updatedUserCreatedFolders = prev.templateFolders.userCreatedFolders.map(folder => {
                    return folder.id === folderId ? { ...folder, templates: folder.templates.filter(templId => templId !== templateId) }
                        : folder
                })
                const updatedArchivedTemplates = [...prev.templateFolders.archivedTemplates, { folderId: folderId, templateId: templateId }]
                return {
                    ...prev,
                    templateFolders: {
                        ...prev.templateFolders,
                        userCreatedFolders: updatedUserCreatedFolders,
                        archivedTemplates: updatedArchivedTemplates
                    }
                }
            }
        })
    }

    function deleteTemplate(folderId, templateId) {
        saveData(prev => {
            let updatedTemplateFolders = prev.templateFolders
            if (folderId === 'myTemplates') {
                updatedTemplateFolders = { ...prev.templateFolders, myTemplates: prev.templateFolders.myTemplates.filter(templId => templId !== templateId) }
            }
            else if (folderId === 'archivedTemplates') {
                updatedTemplateFolders = { ...prev.templateFolders, archivedTemplates: prev.templateFolders.archivedTemplates.filter(templ => templ.templateId !== templateId) }
            }
            else {
                updatedTemplateFolders = {
                    ...prev.templateFolders,
                    userCreatedFolders: prev.templateFolders.userCreatedFolders.map(folder => {
                        return folder.templates.includes(templateId) ?
                            {
                                ...folder,
                                templates: folder.templates.filter(templId => templId !== templateId)
                            }
                            : folder
                    })
                }
            }
            return {
                ...prev,
                templates: prev.templates.filter(template => template.id !== templateId),
                templateFolders: updatedTemplateFolders
            }
        })
    }

    return (<>
        {showModalSelectFolder === true && <ModalSelectFolder setShowModal={setShowModalSelectFolder} handleScreenChange={handleScreenChange} newEmptySession={newEmptySession} />}
        {modalRenameTemplate !== undefined && <ModalRenameTemplate setModalRenameTemplate={setModalRenameTemplate} id={modalRenameTemplate} renameTemplate={renameTemplate} />}
        {modalInputFolderName !== undefined && <ModalInputFolderName setModalInputFolderName={setModalInputFolderName}
            type={modalInputFolderName.type} id={modalInputFolderName.id} addFolder={addFolder} renameFolder={renameFolder} />}
        {modalDeleteTemplate !== undefined && <ModalDeleteTemplate name={modalDeleteTemplate.name} templateId={modalDeleteTemplate.templateId} folderId={modalDeleteTemplate.folderId}
            setModalDeleteTemplate={setModalDeleteTemplate} deleteTemplate={deleteTemplate} />}
        {modalDeleteFolder !== undefined && <ModalDeleteFolder name={modalDeleteFolder.name} id={modalDeleteFolder.id} setModalDeleteFolder={setModalDeleteFolder} deleteFolder={deleteFolder} />}

        <div className='templates__container'>
            <Navbar />
            <div className='templates__main'>
                <h1>Start Workout</h1>

                <div className='container-quick-start'>
                    <h3>Quick Start</h3>
                    <ButtonBig color='blue' size='chunky' onClick={() => handleScreenChange('SessionScreen', { ...newEmptySession, name: 'New Workout', workoutId: uuidv4() }, 'newEmptySession')}>
                        Start an Empty Workout</ButtonBig>
                </div>

                <div className='container-folders'>
                    <div className='container-folders__header'>
                        <h2>Templates</h2>
                        <div className='container-folders__header__buttons'>
                            <ButtonSmall type='addTemplate' onClick={() =>
                                setShowModalSelectFolder(true)}>
                                Template
                            </ButtonSmall>
                            <ButtonSmall type='folder' onClick={() => setModalInputFolderName({ id: uuidv4(), type: 'add' })} />
                        </div>

                    </div>
                    <div className='container-folders__folders'>
                        {/*------------------------------------------------------USER CREATED FOLDERS------------------------------------------------------*/}
                        <div className='container-folders__folders__group'>
                            {data.templateFolders.userCreatedFolders.map((folder) => (
                                <div className='container-templates'>
                                    <div className='container-templates__header'>
                                        <div className='container-heading'>
                                            <h3>{folder.name}</h3>
                                        </div>
                                        <div className='wrapper-options'>
                                            <ButtonSmall type='options1' onClick={(e) => {
                                                e.stopPropagation()
                                                setShowModalOptionsFolder(folder.id)
                                            }}></ButtonSmall>
                                            {showModalOptionsFolder === folder.id &&
                                                <ModalOptionsFolder setShowModal={setShowModalOptionsFolder}
                                                    toggleCollapseFolder={() => toggleCollapseFolder(folder.id)}
                                                    folderOpenState={openFolders.current[folder.id]}
                                                    type='userCreatedFolder'
                                                    setModalDeleteFolder={() => setModalDeleteFolder({ name: folder.name, id: folder.id })}
                                                    setModalInputFolderName={setModalInputFolderName}
                                                    name={folder.name}
                                                    id={folder.id}
                                                    handleScreenChange={() => handleScreenChange('SessionScreen', { ...newEmptySession, name: 'New Template' }, 'newEmptyTemplate', folder.id)}
                                                />
                                            }
                                        </div>
                                    </div>
                                    <div id={`wrapper-templates-${folder.id}`} className='wrapper-templates'>
                                        <div id={`templates-${folder.id}`} className='templates'>

                                            {folder.templates.length > 0 ?
                                                (folder.templates.map((templateId) => {
                                                    const template = data.templates.find(templ => templ.id === templateId)
                                                    return <React.Fragment key={templateId}>
                                                        <CardWorkoutTemplate template={template}
                                                            onClick={() => {
                                                                setShowModalTemplateOverview(template.id);
                                                            }}
                                                            showOptionsModal={showModalOptionsTemplate}
                                                            setShowOptionsModal={setShowModalOptionsTemplate}
                                                            setModalRenameTemplate={setModalRenameTemplate}
                                                            modalType='userCreatedTemplate'
                                                            setModalDeleteTemplate={() => setModalDeleteTemplate({ name: template.name, templateId: template.id, folderId: folder.id })}
                                                            handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', template, 'editTemplate')}
                                                            duplicateTemplate={duplicateTemplate}
                                                            folderId={folder.id}
                                                            archiveTemplate={archiveTemplate}
                                                        />
                                                        <ModalTemplateOverview template={template} selectedModal={showModalTemplateOverview}
                                                            setSelectedModal={setShowModalTemplateOverview}
                                                            handleScreenChangeNewSession={() => handleScreenChange('SessionScreen', { ...template, workoutId: uuidv4() }, 'newSession')}
                                                            handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', template, 'editTemplate')} />
                                                    </React.Fragment>
                                                }))
                                                : (<CardWorkoutTemplate onClick={() => handleScreenChange('SessionScreen', { ...newEmptySession, name: 'New Template' }, 'newEmptyTemplate', folder.id)} />)

                                            }
                                        </div>
                                    </div>

                                </div>
                            ))}

                            {/*------------------------------------------------------MY TEMPLATES------------------------------------------------------*/}
                            <div className='container-folders__folders__group'></div>
                            <div className='container-templates'>
                                <div className='container-templates__header'>
                                    <div className='container-heading'>
                                        <h3>My Templates</h3>
                                    </div>
                                    <div className='wrapper-options'>
                                        <ButtonSmall type='options1' onClick={(e) => {
                                            e.stopPropagation()
                                            setShowModalOptionsFolder('myTemplates')
                                        }}></ButtonSmall>
                                        {showModalOptionsFolder === 'myTemplates' &&
                                            <ModalOptionsFolder setShowModal={setShowModalOptionsFolder}
                                                toggleCollapseFolder={() => toggleCollapseFolder('myTemplates')}
                                                folderOpenState={openFolders.current['myTemplates']}
                                                type='myTemplates'
                                                handleScreenChange={() => handleScreenChange('SessionScreen', { ...newEmptySession, name: 'New Template' }, 'newEmptyTemplate', 'myTemplates')}
                                            />
                                        }
                                    </div>
                                </div>
                                <div id='wrapper-templates-myTemplates' className='wrapper-templates'>
                                    <div id='templates-myTemplates' className='templates'>

                                        {data.templateFolders.myTemplates.length > 0 ?
                                            data.templateFolders.myTemplates.map((templateId) => {
                                                const template = data.templates.find(templ => templ.id === templateId)
                                                return <>
                                                    <CardWorkoutTemplate template={template}
                                                        onClick={() => {
                                                            setShowModalTemplateOverview(template.id);
                                                        }}
                                                        showOptionsModal={showModalOptionsTemplate}
                                                        setShowOptionsModal={setShowModalOptionsTemplate}
                                                        setModalRenameTemplate={setModalRenameTemplate}
                                                        modalType='myTemplate'
                                                        setModalDeleteTemplate={() => setModalDeleteTemplate({ name: template.name, templateId: template.id, folderId: 'myTemplates' })}
                                                        handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', template, 'editTemplate')}
                                                        duplicateTemplate={duplicateTemplate}
                                                        folderId={'myTemplates'}
                                                        archiveTemplate={archiveTemplate}
                                                    />
                                                    <ModalTemplateOverview template={template} selectedModal={showModalTemplateOverview}
                                                        setSelectedModal={setShowModalTemplateOverview}
                                                        handleScreenChangeNewSession={() => handleScreenChange('SessionScreen', { ...template, workoutId: uuidv4() }, 'newSession')}
                                                        handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', template, 'editTemplate')} />
                                                </>
                                            })
                                            :
                                            (<CardWorkoutTemplate onClick={() => handleScreenChange('SessionScreen', { ...newEmptySession, name: 'New Template' }, 'newEmptyTemplate', 'myTemplates')} />)
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className='container-folders__folders__group'>
                            {/*------------------------------------------------------EXAMPLE TEMPLATES------------------------------------------------------*/}
                            <div className='container-templates'>
                                <div className='container-templates__header'>
                                    <div className='container-heading'>
                                        <h3>Example Templates</h3>
                                    </div>
                                    <div className='wrapper-options'>
                                        <ButtonSmall type='options1' onClick={(e) => {
                                            e.stopPropagation()
                                            setShowModalOptionsFolder('exampleTemplates')
                                        }}></ButtonSmall>
                                        {showModalOptionsFolder === 'exampleTemplates' &&
                                            <ModalOptionsFolder setShowModal={setShowModalOptionsFolder}
                                                toggleCollapseFolder={() => toggleCollapseFolder('exampleTemplates')}
                                                folderOpenState={openFolders.current['exampleTemplates']}
                                                type='exampleTemplates'

                                            />
                                        }
                                    </div>
                                </div>
                                <div id='wrapper-templates-exampleTemplates' className='wrapper-templates'>
                                    <div id='templates-exampleTemplates' className='templates'>

                                        {data.templateFolders.exampleTemplates.map((templateId) => {
                                            const template = data.templates.find(templ => templ.id === templateId)
                                            return <>
                                                <CardWorkoutTemplate template={template}
                                                    onClick={() => {
                                                        setShowModalTemplateOverview(template.id);
                                                    }}
                                                    showOptionsModal={showModalOptionsTemplate}
                                                    setShowOptionsModal={setShowModalOptionsTemplate}
                                                    modalType='exampleTemplate'
                                                    duplicateTemplate={duplicateTemplate}
                                                    folderId={'exampleTemplates'}
                                                />
                                                <ModalTemplateOverview template={template} selectedModal={showModalTemplateOverview}
                                                    setSelectedModal={setShowModalTemplateOverview}
                                                    handleScreenChangeNewSession={() => handleScreenChange('SessionScreen', { ...template, workoutId: uuidv4() }, 'newSession')}
                                                    handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', template, 'editTemplate')} />
                                            </>
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/*------------------------------------------------------ARCHIVED TEMPLATES------------------------------------------------------*/}
                            {data.templateFolders.archivedTemplates.length > 0 &&
                                <div className='container-templates'>
                                    <div className='container-templates__header'>
                                        <div className='container-heading'>
                                            <h3>Archived Templates</h3>
                                        </div>
                                        <div className='wrapper-options'>
                                            <ButtonSmall type='options1' onClick={(e) => {
                                                e.stopPropagation()
                                                setShowModalOptionsFolder('archivedTemplates')
                                            }}></ButtonSmall>
                                            {showModalOptionsFolder === 'archivedTemplates' &&
                                                <ModalOptionsFolder setShowModal={setShowModalOptionsFolder}
                                                    toggleCollapseFolder={() => toggleCollapseFolder('archivedTemplates')}
                                                    folderOpenState={openFolders.current['archivedTemplates']}
                                                    type='archivedTemplates'
                                                />
                                            }
                                        </div>
                                    </div>
                                    <div id='wrapper-templates-archivedTemplates' className='wrapper-templates'>
                                        <div id='templates-archivedTemplates' className='templates'>
                                            {data.templateFolders.archivedTemplates.map(archivedTemplate => {
                                                const template = data.templates.find(templ => templ.id === archivedTemplate.templateId)
                                                return <>
                                                    <CardWorkoutTemplate template={template}
                                                        onClick={() => {
                                                            setShowModalTemplateOverview(template.id);
                                                        }}
                                                        showOptionsModal={showModalOptionsTemplate}
                                                        setShowOptionsModal={setShowModalOptionsTemplate}
                                                        setModalRenameTemplate={setModalRenameTemplate}
                                                        modalType='archivedTemplate'
                                                        setModalDeleteTemplate={() => setModalDeleteTemplate({ name: template.name, templateId: template.id, folderId: 'archivedTemplates' })}
                                                        handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', template, 'editTemplate')}
                                                        duplicateTemplate={duplicateTemplate}
                                                        folderId={'archivedTemplates'}
                                                        archiveTemplate={archiveTemplate}
                                                    />
                                                    <ModalTemplateOverview template={template} selectedModal={showModalTemplateOverview}
                                                        setSelectedModal={setShowModalTemplateOverview}
                                                        handleScreenChangeNewSession={() => handleScreenChange('SessionScreen', { ...template, workoutId: uuidv4() }, 'newSession')}
                                                        handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', template, 'editTemplate')} />
                                                </>
                                            })}

                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>

                </div>

            </div>
        </div>


    </>
    )
}

export default TemplatesScreen