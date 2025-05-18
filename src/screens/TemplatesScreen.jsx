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
        <Navbar />
        <div className="container-app">
            <div className="div-header">
                <h1>Start Workout</h1>
            </div>

            <div className="library-container-quick-start">
                <h4>Quick Start</h4>
                <ButtonBig color='blue' size='chunky'>Start an Empty Workout</ButtonBig>
                <CardWorkoutTemplate />



                {/*newSession*/}
                {data.templates.map((template, index) => (
                    <ButtonBig color='green' size='hug'
                        onClick={() => {
                            setSelectedTemplate({ ...data.templates[index], workoutId: uuidv4() });
                            screenVariant.current = 'newSession';
                        }}>
                        {`New Session ${template.name}`}
                    </ButtonBig>

                ))}

                {/*editSession*/}
                {data.history.map((history, index) => (
                    <ButtonBig color='blue' size='hug'
                        onClick={() => {
                            setSelectedTemplate(data.history[index]);
                            screenVariant.current = 'editSession';
                        }}>
                        {`Edit Session ${history.name}`}
                    </ButtonBig>

                ))}

                {/*editTemplate*/}
                {data.templates.map((template, index) => (
                    <ButtonBig color='blueSoft' size='hug'
                        onClick={() => {
                            setSelectedTemplate({ ...data.templates[index], workoutId: uuidv4() });
                            screenVariant.current = 'editTemplate';
                        }}>
                        {`Edit Template ${template.name}`}
                    </ButtonBig>

                ))}


                {/*new Empty Session*/}
                <ButtonBig color='blue' size='hug'
                    onClick={() => {
                        setSelectedTemplate({ ...newEmptySession, name: 'New Workout', workoutId: uuidv4() });
                        screenVariant.current = 'newEmptySession';
                    }}>
                    New Empty Workout
                </ButtonBig>


                {/*newEmptyTemplate*/}
                <ButtonBig color='blueSoft' size='hug'
                    onClick={() => {
                        setSelectedTemplate({ ...newEmptySession, name: 'New Template' });
                        screenVariant.current = 'newEmptyTemplate';
                    }}>
                    New Empty Template
                </ButtonBig>






                {selectedTemplate && <SessionScreen template={selectedTemplate} screenVariant={screenVariant.current} />}

                <FolderList />

            </div>
            <div className="library-main-section">
                <div className="library-main-section-header">

                    <button>1</button>
                    <ButtonSmall type='options1' />

                </div>
                <div className="library-main-section-content">

                </div>
            </div>

        </div>
    </>
    )
}

export default TemplatesScreen