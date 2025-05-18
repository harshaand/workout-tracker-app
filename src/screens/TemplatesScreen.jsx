import '../css/buttons.scss';
import '../css/modals.scss';
import React from 'react'
import ButtonSmall from '../components/Buttons/ButtonSmall.jsx'
import ButtonBig from '../components/Buttons/ButtonBig.jsx'
import CardWorkoutTemplate from '../components/Cards/CardWorkoutTemplate.jsx'
import CardWorkoutHistory from '../components/Cards/CardWorkoutHistory.jsx'
import CardExerciseTracker from '../components/Cards/CardExerciseTracker.jsx'
import FolderList from '../OTHER/FoldersFunctionality.jsx'
import Navbar from '../components/Navbar.jsx'

import { useData } from '../DataContext.jsx'
import SessionScreen from './SessionScreen.jsx'

import { v4 as uuidv4 } from 'uuid';



function TemplatesScreen() {
    const data = useData()
    const [selectedTemplate, setSelectedTemplate] = React.useState(null);
    //TESTING WITH HISTORY ATM
    /* SCREEN VARIANTS
    1. newSession ------new key
    2. editSession -----old key
    3. editTemplate   
    4. newEmptyTemplate
    5. newEmptySession -new key
    */
    const screenVariant = React.useRef(null);

    const newEmptySession = {
        id: uuidv4(),
        name: 'New Workout',
        duration: undefined,
        notes: undefined,
        lastDone: {},

        exercises: [
            {
                name: 'Testing Exercise',
                sets:
                    [
                        {
                            id: '0plkjn',
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 0,
                            completed: false,
                            PRs: { '1RM': false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: '876tg',
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 0,
                            completed: false,
                            PRs: { '1RM': false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]

            }
        ]
    }

    return (<>
        <div className='templates__container'>
            <Navbar />
            <div className='templates__main'>
                <h1>Start Workout</h1>

                <div className='container-quick-start'>
                    <h3>Quick Start</h3>
                    <ButtonBig color='blue' size='chunky'>Start an Empty Workout</ButtonBig>
                </div>

                <div className='container-folders'>
                    <div className='container-folders__header'>
                        <h2>Templates</h2>
                        <div className='container-folders__header__buttons'>
                            <ButtonSmall type='addTemplate' >Template</ButtonSmall>
                            <ButtonSmall type='folder' />
                        </div>

                    </div>
                    <div className='container-folders__folders'>
                        <div className='container-folders__folders__group'>
                            <div className='container-templates'>
                                <div className='container-templates__header'>
                                    <h3>Full Body</h3>
                                    <ButtonSmall type='options1' />
                                </div>
                                <div className='container-templates__templates'>
                                    <CardWorkoutTemplate />
                                    <CardWorkoutTemplate />
                                    <CardWorkoutTemplate />
                                </div>
                            </div>

                            <div className='container-templates'>
                                <div className='container-templates__header'>
                                    <h3>My Templates 1</h3>
                                    <ButtonSmall type='options1' />
                                </div>
                                <div className='container-templates__templates'>
                                    <CardWorkoutTemplate />
                                    <CardWorkoutTemplate />
                                    <CardWorkoutTemplate />
                                </div>
                            </div>
                        </div>

                        <div className='container-folders__folders__group'>
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
                        </div>

                    </div>

                </div>

            </div>
        </div>


    </>
    )
}

export default TemplatesScreen