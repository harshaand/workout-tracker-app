import React from 'react'
import { NavAdd, NavClock, NavProgress, NavUser } from '../assets/icons/icons.js';
import { RoutingContext } from '../App.jsx'

function Navbar({ }) {
    const { currentScreen, handleScreenChange } = React.useContext(RoutingContext)

    return (
        <div className="navbar">
            <button className={`navbar__btn ${currentScreen === 'HistoryScreen' ? 'navbar__btn--active' : 'navbar__btn--inactive'}`} onClick={() => handleScreenChange('HistoryScreen')}><NavClock />History</button>
            <button className={`navbar__btn ${currentScreen === 'TemplatesScreen' ? 'navbar__btn--active' : 'navbar__btn--inactive'}`} onClick={() => handleScreenChange('TemplatesScreen')}><NavAdd />Workout</button>
            <button className={`navbar__btn ${currentScreen === 'ProgressScreen'
                || currentScreen === 'StrScFullBodyScreen'
                || currentScreen === 'StrScMuscleScreen'
                || currentScreen === 'StrScExerciseScreen'
                ? 'navbar__btn--active' : 'navbar__btn--inactive'}`} onClick={() => handleScreenChange('ProgressScreen')}><NavProgress />Progress</button>
            <button className={`navbar__btn ${currentScreen === 'ProfileScreen' ? 'navbar__btn--active' : 'navbar__btn--inactive'}`} onClick={() => handleScreenChange('ProfileScreen')}><NavUser />Profile</button>
        </div>
    )
}

export default Navbar
