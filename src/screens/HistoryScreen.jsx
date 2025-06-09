import React from 'react'
import Navbar from '../components/Navbar.jsx'
import '../css/screens.scss'
import CardWorkoutHistory from '../components/Cards/CardWorkoutHistory.jsx'
import ModalHistoryWorkout from '../components/Modals/session/content-modals/HistoryWorkout.jsx'
import { useData } from '../DataContext.jsx'
import { RoutingContext } from '../App.jsx'



function HistoryScreen() {
    const useLocalStorage = useData()
    const [data, saveData] = useLocalStorage('userData')
    const { handleScreenChange } = React.useContext(RoutingContext)

    const months = [
        'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
        'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];
    const [selectedHistoryWorkoutModal, setSelectedHistoryWorkoutModal] = React.useState(null)


    function renderHistoryCards() {
        const groupedWorkouts = {};

        data.history.forEach(history => {
            // KEY = 'YYYY-MM' format
            const year = new Date(history.date).getFullYear();
            const month = new Date(history.date).getMonth();
            const key = `${year}-${month.toString().padStart(2, '0')}`;

            if (!groupedWorkouts[key]) {
                groupedWorkouts[key] = {
                    year,
                    month,
                    workouts: []
                };
            }

            groupedWorkouts[key].workouts.push(history);
        });

        // Convert object to array for sorting
        const sortedGroups = Object.values(groupedWorkouts).sort((a, b) => {
            // Sort by year (descending)
            if (b.year !== a.year) {
                return b.year - a.year;
            }
            // If same year, sort by month (descending)
            return b.month - a.month;
        });


        return sortedGroups.map(group => {
            //?????
            const sortedWorkouts = group.workouts.sort((a, b) => new Date(b.date) - new Date(a.date));

            return <>
                <div className='history__main__container-month'>
                    <p className='heading'>{`${months[group.month]} ${group.year}`}</p>
                    {sortedWorkouts.map(history => {
                        return <>
                            <CardWorkoutHistory history={history} onClick={() => {
                                setSelectedHistoryWorkoutModal(history.workoutId)

                            }} />
                            <ModalHistoryWorkout history={history} selectedModal={selectedHistoryWorkoutModal}
                                setSelectedModal={setSelectedHistoryWorkoutModal}
                                handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', history, 'editSession')} />
                        </>
                    })}
                </div>
            </>

        });

    };

    return (
        <div className='history__container'>
            <Navbar />
            <div className='history__main'>
                <h1>History Screen</h1>
                {renderHistoryCards()}
            </div>
        </div>
    )
}

export default HistoryScreen
