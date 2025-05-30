import React from 'react'
import { useData } from '../../DataContext.jsx'
import Navbar from '../../components/Navbar.jsx'
import CardExerciseHistory from '../../components/Cards/CardExerciseHistory.jsx'
import ButtonSmall from '../../components/Buttons/ButtonSmall.jsx'
import { RoutingContext } from '../../App.jsx'

function HistoryExerciseScreen({ exercise = 'Back Squat' }) {
    const { handleScreenChange } = React.useContext(RoutingContext)
    const data = useData()
    const months = [
        'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
        'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];

    function renderHistoryCards() {
        const groupedWorkouts = {};

        const exerciseData = data.exercises.find(exerciseObject => exerciseObject.name === exercise)
        exerciseData.history.forEach(history => {
            // KEY = 'YYYY-MM' format
            const year = history.date.getFullYear();
            const month = history.date.getMonth();
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
            const sortedWorkouts = group.workouts.sort((a, b) => b - a);

            return <div className='exercise-history__main__container-month'>
                <p className='heading'>{`${months[group.month]} ${group.year}`}</p>
                {sortedWorkouts.map(history => {
                    return <CardExerciseHistory history={history} />
                })}
            </div>

        });

    };
    return (
        <div className='exercise-history__container'>
            <Navbar />

            <div className='exercise-history__main'>
                <div className='header'>
                    <ButtonSmall type='backScreen' onClick={() => handleScreenChange('ProgressScreen')} />
                    <div className='heading-and-image'>
                        <div className='image'></div>
                        <h1>{exercise}</h1>
                    </div>

                </div>
                {renderHistoryCards()}
            </div>
        </div>


    )
}

export default HistoryExerciseScreen
