import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const DataContext = React.createContext()

const emptyUserTemplate = {
    user: {},
    templateFolders: {
        userCreatedFolders: [],
        myTemplates: [],
        exampleTemplates: [],
        archivedTemplates: [],
    },
    templates: [],
    history: [],
    exercises: [],
    strengthScores: {}

}

function DataProvider({ children }) {
    const [data, setData] = React.useState(emptyUserTemplate);
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();

    const API_USER_DATA_URL = `${import.meta.env.VITE_BASE_URL}api/user/data`;

    async function fetchUserData() {
        if (!isAuthenticated) {
            return;
        }

        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(API_USER_DATA_URL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch user data: ${response.status} ${response.error}`);
            }

            const userData = await response.json();
            setData(userData);
        } catch (error) {
            throw error;
        }
    }


    async function saveData(value) {
        try {
            const valueToStore = value instanceof Function ? value(data) : value;
            const token = await getAccessTokenSilently();

            const response = await fetch(API_USER_DATA_URL, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(valueToStore),
            });

            if (!response.ok) {
                throw new Error(`Failed to save data: ${response.status} ${response.error}`);
            }

            const result = await response.json();
            setData(valueToStore);
            return result;
        } catch (error) {
            throw error;
        }
    }


    async function deleteAllUserData() {
        try {
            const token = await getAccessTokenSilently();

            const response = await fetch(API_USER_DATA_URL, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to delete data: ${response.status} ${response.error}`);
            }

            const result = await response.json();
            setData(result.data.appData);
            return result;
        } catch (error) {
            throw error;
        }
    }

    return (
        <DataContext.Provider value={{ data, setData, saveData, fetchUserData, deleteAllUserData }}>
            {children}
        </DataContext.Provider>
    )
}
export { DataProvider };
export default DataContext