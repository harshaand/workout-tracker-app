import '../css/buttons.scss';
import '../css/modals.scss';
import React from 'react'
import ButtonSmall from '../components/Buttons/ButtonSmall.jsx'
import ButtonBig from '../components/Buttons/ButtonBig.jsx'
import CardWorkoutTemplate from '../components/Cards/CardWorkoutTemplate.jsx'

import ModalTemplateOverview from '../components/Modals/session/content-modals/TemplateOverview.jsx';
import ModalOptionsFolder from '../components/Modals/template/ModalOptionsFolder.jsx'

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
    const [showTemplateOverviewModal, setShowTemplateOverviewModal] = React.useState(null)
    const [showOptionsFolderModal, setShowOptionsFolderModal] = React.useState(null)
    const [showOptionsTemplateModal, setShowOptionsTemplateModal] = React.useState(undefined)

    const newEmptySession = {
        id: uuidv4(),
        name: 'New Workout',
        duration: undefined,
        notes: undefined,
        lastDone: undefined,

        exercises: []
    }

    return (<>
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
                                handleScreenChange('SessionScreen', { ...newEmptySession, name: 'New Template' }, 'newEmptyTemplate')}>
                                Template
                            </ButtonSmall>
                            <ButtonSmall type='folder' />
                        </div>

                    </div>
                    <div className='container-folders__folders'>
                        <div className='container-folders__folders__group'>
                            <div className='container-templates'>
                                <div className='container-templates__header'>
                                    <div className='container-heading'>
                                        <h3>My Templates</h3>
                                    </div>
                                    <div className='wrapper-options'>
                                        <ButtonSmall type='options1' onClick={(e) => {
                                            e.stopPropagation()
                                            setShowOptionsFolderModal(1)
                                        }}></ButtonSmall>
                                        {showOptionsFolderModal === 1 &&
                                            <ModalOptionsFolder setShowModal={setShowOptionsFolderModal} />
                                        }
                                    </div>
                                </div>
                                <div className='container-templates__templates'>

                                    {data.templates.map((template) => (
                                        <>
                                            <CardWorkoutTemplate template={template}
                                                onClick={() => {
                                                    setShowTemplateOverviewModal(template.id);
                                                }}
                                                showOptionsModal={showOptionsTemplateModal}
                                                setShowOptionsModal={setShowOptionsTemplateModal}
                                            >
                                            </CardWorkoutTemplate>
                                            <ModalTemplateOverview template={template} selectedModal={showTemplateOverviewModal}
                                                setSelectedModal={setShowTemplateOverviewModal}
                                                handleScreenChangeNewSession={() => handleScreenChange('SessionScreen', { ...template, workoutId: uuidv4() }, 'newSession')}
                                                handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', template, 'editTemplate')} />
                                        </>
                                    ))}
                                </div>
                            </div>

                            {/* <div className='container-templates'>
                                <div className='container-templates__header'>
                                    <h3>Example Templates</h3>
                                    <ButtonSmall type='options1' />
                                </div>
                                <div className='container-templates__templates'>
                                    <CardWorkoutTemplate />
                                    <CardWorkoutTemplate />
                                    <CardWorkoutTemplate />
                                </div>
                            </div> */}
                        </div>

                        {/* <div className='container-folders__folders__group'>
                            <div className='container-templates'>
                                <div className='container-templates__header'>
                                    <h3>Example Templates</h3>
                                    <ButtonSmall type='options1' />
                                </div>
                                <div className='container-templates__templates'>
                                    <CardWorkoutTemplate />
                                    <CardWorkoutTemplate />
                                    <CardWorkoutTemplate />
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>

            </div>
        </div>


    </>
    )
}

export default TemplatesScreen