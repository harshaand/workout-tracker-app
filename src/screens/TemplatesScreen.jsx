import '../css/buttons.css';
import '../css/modals.css';

import ButtonSmall from '../components/Buttons/ButtonSmall.jsx'
import ButtonBig from '../components/Buttons/ButtonBig.jsx'
import CardWorkoutTemplate from '../components/Cards/CardWorkoutTemplate.jsx'
import CardWorkoutHistory from '../components/Cards/CardWorkoutHistory.jsx'
import CardExerciseTracker from '../components/Cards/CardExerciseTracker.jsx'




function TemplatesScreen() {
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
                <CardExerciseTracker />

            </div>
            <div className="library-main-section">
                <div className="library-main-section-header">


                    <ButtonSmall type='options1' />

                </div>
                <div className="library-main-section-content">

                </div>
            </div>

        </div>
    )
}

export default TemplatesScreen