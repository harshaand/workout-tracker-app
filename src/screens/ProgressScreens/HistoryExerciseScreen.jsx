import React from 'react'
import { useData } from '../../DataContext.jsx'
import Navbar from '../../components/Navbar.jsx'
import CardExerciseHistory from '../../components/Cards/CardExerciseHistory.jsx'
import ButtonSmall from '../../components/Buttons/ButtonSmall.jsx'
import { RoutingContext } from '../../App.jsx'
import ModalHistoryWorkout from '../../components/Modals/session/content-modals/HistoryWorkout.jsx'

function HistoryExerciseScreen({ exercise = 'Back Squat' }) {
    const { handleScreenChange } = React.useContext(RoutingContext)
    const data = useData()
    const [selectedHistoryWorkoutModal, setSelectedHistoryWorkoutModal] = React.useState(null)

    const months = [
        'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
        'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];

    function renderHistoryCards() {
        const groupedWorkouts = {};
        const exerciseData = data.exercises.find(exerciseObject => exerciseObject.name === exercise);

        exerciseData.history.forEach(history => {
            // KEY = 'YYYY-MM' format
            const year = history.date.getFullYear();
            const month = history.date.getMonth();
            const day = history.date.getDate(); // Extract day of month
            const key = `${year}-${month.toString().padStart(2, '0')}`;

            if (!groupedWorkouts[key]) {
                groupedWorkouts[key] = {
                    year,
                    month,
                    workouts: []
                };
            }

            // Add day to each workout entry for sorting
            groupedWorkouts[key].workouts.push({
                ...history,
                dayOfMonth: day
            });
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

        // Sort workouts within each group by day of month (descending)
        sortedGroups.forEach(group => {
            group.workouts.sort((a, b) => b.dayOfMonth - a.dayOfMonth);
        });


        return sortedGroups.map(group => {
            //?????
            const sortedWorkouts = group.workouts.sort((a, b) => b - a);

            return <div className='exercise-history__main__container-month'>
                <p className='heading'>{`${months[group.month]} ${group.year}`}</p>
                {sortedWorkouts.map(history => {
                    return <>
                        <CardExerciseHistory history={history} onClick={() => {
                            setSelectedHistoryWorkoutModal(history.workoutId)
                        }} />
                        <ModalHistoryWorkout history={data.history.find(his => his.workoutId === history.workoutId)} selectedModal={selectedHistoryWorkoutModal}
                            exercise={exercise}
                            setSelectedModal={setSelectedHistoryWorkoutModal}
                            handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', data.history.find(his => his.workoutId === history.workoutId), 'editSession')} />
                    </>
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
