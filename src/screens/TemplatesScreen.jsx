import '../css/template-screen.css';
import '../css/buttons.css'; // Import button-specific styles
import '../css/modals.css';

import ButtonSmall from '../components/ButtonSmall.jsx'
import ButtonBig from '../components/ButtonBig.jsx'




function TemplatesScreen() {
    return (
        <div className="container-app">
            <div className="div-header">
                <h1>Start Workout</h1>
            </div>

            <div className="library-container-quick-start">
                <h4>Quick Start</h4>
                <ButtonBig color='blue' size='chunky'>Start an Empty Workout</ButtonBig>


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