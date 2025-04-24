import '../css/template-screen.css';
import '../css/icons.css'

import {
    NavClock, NavAdd, NavProgress, NavUser, AddMedium, AddSmall, Folder, Weight,
    Cross, Tick, Trash, Calendar, Collapse, Duplicate, Clock, Progress,
    Target, Question, Pencil, TrophyLarge, TrophyMedium, TrophySmall, Lock, Timer,
    ArrowDown, ArrowLeft, ArrowRight, Search, Bicep,
    Streak, Ellipsis, BlankNarrow, BlankWide
} from '../assets/icons/icons.js';


function TemplatesScreen() {
    return (
        <div className="container-app">
            <div className="div-header">
                <h1>Start Workout</h1>
            </div>

            <div className="library-container-quick-start">
                <h4>Quick Start</h4>
                <button className="btn-big btn-blue-chunky"> Start an Empty Workout </button>
            </div>
            <div className="library-main-section">
                <div className="library-main-section-header">
                    <div className="testing--div">
                        <AddMedium />
                        <Folder />
                        <Weight />
                        <Trash />
                        <Collapse />
                        <Duplicate />
                        <Clock />
                        <Target />
                        <Question />
                        <Pencil />
                        <TrophyMedium />
                        <Lock />
                        <Timer />
                        <Search />
                        <Ellipsis />
                        <BlankNarrow />
                        <BlankWide />



                    </div>
                    <div className="testing-icon-div">
                        <AddSmall />
                        <Cross />
                        <Tick />
                        <ArrowDown />
                        <ArrowLeft />
                        <ArrowRight />
                        <TrophySmall />
                    </div>


                    <div className="testing-icon-div">
                        <Calendar />
                        <Progress />
                        <TrophyLarge />
                        <Streak />
                        <Bicep />
                    </div>

                    <div className="testing-icon-div">
                        <NavClock />
                        <NavAdd />
                        <NavProgress />
                        <NavUser />
                    </div>

                </div>
                <div className="library-main-section-content">

                </div>
            </div>

        </div>
    )
}

export default TemplatesScreen