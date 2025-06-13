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

    const newEmptySession = {
        id: uuidv4(),
        name: 'New Workout',
        duration: undefined,
        notes: undefined,
        lastDone: undefined,

        exercises: []
    }

    return (<>
        {showModalSelectFolder === true && <ModalSelectFolder setShowModal={setShowModalSelectFolder} handleScreenChange={handleScreenChange} newEmptySession={newEmptySession} />}
        {modalRenameTemplate !== undefined && <ModalRenameTemplate setModalRenameTemplate={setModalRenameTemplate} />}
        {modalDeleteTemplate !== undefined && <ModalDeleteTemplate name={modalDeleteTemplate.name} id={modalDeleteTemplate.id} setModalDeleteTemplate={setModalDeleteTemplate} />}
        {modalDeleteFolder !== undefined && <ModalDeleteFolder name={modalDeleteFolder.name} id={modalDeleteFolder.id} setModalDeleteFolder={setModalDeleteFolder} />}

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
                            <ButtonSmall type='folder' />
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
                                                            setModalDeleteTemplate={() => setModalDeleteTemplate({ name: template.name, id: template.id })}
                                                        />
                                                        <ModalTemplateOverview template={template} selectedModal={showModalTemplateOverview}
                                                            setSelectedModal={setShowModalTemplateOverview}
                                                            handleScreenChangeNewSession={() => handleScreenChange('SessionScreen', { ...template, workoutId: uuidv4() }, 'newSession')}
                                                            handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', template, 'editTemplate')} />
                                                    </React.Fragment>
                                                }))
                                                : (<CardWorkoutTemplate onClick={() => handleScreenChange('SessionScreen', { ...newEmptySession, name: 'New Template' }, 'newEmptyTemplate')} />)

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
                                                        modalType='userCreatedTemplate'
                                                        setModalDeleteTemplate={() => setModalDeleteTemplate({ name: template.name, id: template.id })}
                                                    />
                                                    <ModalTemplateOverview template={template} selectedModal={showModalTemplateOverview}
                                                        setSelectedModal={setShowModalTemplateOverview}
                                                        handleScreenChangeNewSession={() => handleScreenChange('SessionScreen', { ...template, workoutId: uuidv4() }, 'newSession')}
                                                        handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', template, 'editTemplate')} />
                                                </>
                                            })
                                            :
                                            (<CardWorkoutTemplate onClick={() => handleScreenChange('SessionScreen', { ...newEmptySession, name: 'New Template' }, 'newEmptyTemplate')} />)
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
                                data.templateFolders.archivedTemplates.map((templateId) => {
                                    const template = data.templates.find(templ => templ.id === templateId)
                                    return <>
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
                                                            setModalRenameTemplate={setModalRenameTemplate}
                                                            type='archivedTemplates'
                                                        />
                                                    }
                                                </div>
                                            </div>
                                            <div id='wrapper-templates-archivedTemplates' className='wrapper-templates'>
                                                <div id='templates-archivedTemplates' className='templates'>
                                                    <CardWorkoutTemplate template={template}
                                                        onClick={() => {
                                                            setShowModalTemplateOverview(template.id);
                                                        }}
                                                        showOptionsModal={showModalOptionsTemplate}
                                                        setShowOptionsModal={setShowModalOptionsTemplate}
                                                        setModalRenameTemplate={setModalRenameTemplate}
                                                        modalType='archivedTemplate'
                                                        setModalDeleteTemplate={() => setModalDeleteTemplate({ name: template.name, id: template.id })}
                                                    />
                                                    <ModalTemplateOverview template={template} selectedModal={showModalTemplateOverview}
                                                        setSelectedModal={setShowModalTemplateOverview}
                                                        handleScreenChangeNewSession={() => handleScreenChange('SessionScreen', { ...template, workoutId: uuidv4() }, 'newSession')}
                                                        handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', template, 'editTemplate')} />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })}
                        </div>

                    </div>

                </div>

            </div>
        </div>


    </>
    )
}

export default TemplatesScreen