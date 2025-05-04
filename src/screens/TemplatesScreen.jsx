import '../css/buttons.css';
import '../css/modals.css';
import React from 'react'
import ButtonSmall from '../components/Buttons/ButtonSmall.jsx'
import ButtonBig from '../components/Buttons/ButtonBig.jsx'
import CardWorkoutTemplate from '../components/Cards/CardWorkoutTemplate.jsx'
import CardWorkoutHistory from '../components/Cards/CardWorkoutHistory.jsx'
import CardExerciseTracker from '../components/Cards/CardExerciseTracker.jsx'
import FolderList from '../OTHER/FoldersFunctionality.jsx'

import { useData } from '../DataContext.jsx'
import SessionScreen from './SessionScreen.jsx'


function TemplatesScreen() {
    const data = useData()
    const [selectedTemplate, setSelectedTemplate] = React.useState(null);

    function renderTemplateButtons() {
        console.log(data.templates)
        const buttons = data.templates.map((template, index) => {
            return <button
                onClick={() => setSelectedTemplate(data.templates[index])}>
                {template.name}
            </button>
        }
        )
        return buttons
    }

    return (
        <div className="container-app">
            <div className="div-header">
                <h1>Start Workout</h1>
            </div>

            <div className="library-container-quick-start">
                <h4>Quick Start</h4>
                <ButtonBig color='blue' size='chunky'>Start an Empty Workout</ButtonBig>
                <CardWorkoutTemplate />
                <CardWorkoutHistory />
                {renderTemplateButtons()}
                {selectedTemplate && <SessionScreen template={selectedTemplate} />}
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
    )
}

export default TemplatesScreen