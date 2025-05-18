import React from 'react'
import { NavAdd, NavClock, NavProgress, NavUser } from '../assets/icons/icons.js';
import { RoutingContext } from '../App.jsx'

function Navbar({ }) {
    const { currentScreen, handleScreenChange } = React.useContext(RoutingContext)

    return (
        <div className="navbar">
            <button className={`navbar__btn ${currentScreen === 'HistoryScreen' ? 'navbar__btn--active' : 'navbar__btn--inactive'}`} onClick={() => handleScreenChange('HistoryScreen')}><NavAdd />History</button>
            <button className={`navbar__btn ${currentScreen === 'TemplatesScreen' ? 'navbar__btn--active' : 'navbar__btn--inactive'}`} onClick={() => handleScreenChange('TemplatesScreen')}><NavClock className='navbar__btn__icon--clock' />Workout</button>
            <button className={`navbar__btn ${currentScreen === 'ProgressScreen' ? 'navbar__btn--active' : 'navbar__btn--inactive'}`} onClick={() => handleScreenChange('ProgressScreen')}><NavProgress />Progress</button>
            <button className={`navbar__btn ${currentScreen === 'ProfileScreen' ? 'navbar__btn--active' : 'navbar__btn--inactive'}`} onClick={() => handleScreenChange('ProfileScreen')}><NavUser />Profile</button>
        </div>
    )
}

export default Navbar
