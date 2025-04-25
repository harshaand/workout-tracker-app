import '../css/template-screen.css';
import '../css/buttons.css'; // Import button-specific styles

import {
    AddMedium, AddSmall, ArrowDown, ArrowLeft, ArrowRight, Bicep, BlankNarrow, BlankWide,
    Calendar, Clock, Collapse, Cross, Duplicate, Ellipsis, Folder, Lock,
    NavAdd, NavProgress, NavUser, Pencil, Progress, Question, Search, Streak,
    Target, Tick, Timer, Trash, TrophyLarge, TrophyMedium, TrophySmall, Weight, NavClock
} from '../assets/icons/icons.js';

import ButtonSmall from '../components/ButtonSmall.jsx'
import ButtonBig from '../components/ButtonBig.jsx'
import ButtonModal from '../components/ButtonModal.jsx'



function TemplatesScreen() {
    return (
        <div className="container-app">
            <div className="div-header">
                <h1>Start Workout</h1>
            </div>

            <div className="library-container-quick-start">
                <h4>Quick Start</h4>
                <button className="btn-big btn-blue-chunky"> Start an Empty Workout </button>
                <ButtonBig color='blue' size='chunky'>Start an Empty Workout</ButtonBig>

                <div className='modal-options modal-options-default-width'>
                    <ButtonModal type='options' icon='add'>Add Template</ButtonModal>
                    <ButtonModal type='options' icon='archive'>Rename Folder</ButtonModal>
                    <ButtonModal type='options' icon='collapse'>Collapse Folder</ButtonModal>
                    <ButtonModal type='options' icon='duplicate'>Duplicate</ButtonModal>
                    <ButtonModal type='options' icon='edit'>Edit Template</ButtonModal>
                    <ButtonModal type='optionsDelete' icon='delete'>Delete</ButtonModal>
                </div>

                <div className='modal-select'>
                    <div className='modal-select-header'>
                        <ButtonSmall type='closeModal' />
                        <h3>Select Folder</h3>
                        <ButtonBig color='transparent' size='hug'>Next</ButtonBig>
                    </div>
                    <div className='modal-select-buttons-container'>
                        <ButtonModal type='select' icon='check'>None</ButtonModal>
                        <ButtonModal type='select' icon='check'>Folder 5</ButtonModal>
                        <ButtonModal type='select' icon='check'>Folder 4</ButtonModal>
                        <ButtonModal type='select' icon='check'>Folder 3</ButtonModal>
                        <ButtonModal type='select' icon='check'>Full Body</ButtonModal>
                    </div>

                </div>


            </div>
            <div className="library-main-section">
                <div className="library-main-section-header">



                    <button className='btn-icon-small btn-blue-soft'><Folder /></button>
                    <button className='button-view-all btn-blue-soft'>View All<ArrowRight /></button>
                    <ButtonSmall type='options1' />






                </div>
                <div className="library-main-section-content">

                </div>
            </div>

        </div>
    )
}

export default TemplatesScreen