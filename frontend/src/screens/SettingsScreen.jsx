import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { useAuth0 } from '@auth0/auth0-react';
import DataContext from '../DataContext.jsx';
function SettingsScreen() {
    const { loginWithRedirect, logout, isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const { deleteAllUserData } = React.useContext(DataContext)
    return (
        <div>
            <h1>Settings Screen</h1>
            <button onClick={logout}>logout</button>
            <button onClick={deleteAllUserData}>wipe data</button>
            <Navbar />
        </div>
    )
}

export default SettingsScreen
