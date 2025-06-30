import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { useAuth0 } from '@auth0/auth0-react'
import LoadingLottie from '../components/LoadingLottie.jsx';

function SettingsScreen() {
    const { logout } = useAuth0()

    return (
        <div>
            <h1>Settings Screen</h1>
            <Navbar />
            <button onClick={() => { logout() }}>Logout</button>
        </div>
    )
}

export default SettingsScreen
