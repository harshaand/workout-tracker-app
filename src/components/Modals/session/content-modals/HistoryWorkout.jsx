import React from 'react'
import ButtonSmall from '../../../Buttons/ButtonSmall'
import '../../../../css/modals.scss'
import {
    Clock, Weight, TrophyMedium
} from '../../../../assets/icons/icons'
import BadgePR from '../../../../assets/icons/BadgePR';


function HistoryWorkout({ history, selectedModal, setSelectedModal, handleScreenChangeEditTemplate, exercise = "" }) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    function formatDate(date) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${hours}:${minutes}, ${dayName}, ${day} ${month} ${year}`;
    }

    function formatDuration(totalSeconds) {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        if (hrs > 0) {
            return `${hrs}h ${mins}m`
        }
        else if (totalSeconds > 60 && hrs === 0) {
            return `${mins}m`
        }
        else {
            return `${secs}s`
        }

    }

    if (history && selectedModal === history.workoutId) {
        return (
            <>
                <button className='modal-overlay' onClick={() => setSelectedModal(null)}></button>
                <div className='modal-history-workout'>

                    <div className='modal-history-workout__container-header'>
                        <div className='modal-history-workout__container-header__header'>
                            <ButtonSmall type='closeModal' onClick={() => setSelectedModal(null)} />
                            <p>{history.name}</p>
                            <a onClick={handleScreenChangeEditTemplate}>Edit</a>
                        </div>

                        <div className='container-stats'>
                            <p> {formatDate(history.date)}</p>
                            <div className='stats'>
                                <div className='stat duration'>
                                    <Clock />
                                    <p>{formatDuration(history.duration)}</p>
                                </div>
                                <div className='stat volume'>
                                    <Weight />
                                    <p>{`${history.volume} kg`}</p>
                                </div>
                                <div className='stat PRs'>
                                    <TrophyMedium />
                                    <p>{`${history.PRs} PRs`}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='container-exercises'>

                        {history.exercises.map((historyExercise, index) => (
                            <div className={`row-exercise-history ${historyExercise.name === exercise ? 'highlighted-row-exercise-history' : ''}`}>
                                <div className='heading'><h3>{historyExercise.name}</h3></div>
                                <div className='container-data-rows'>
                                    {
                                        historyExercise.sets.map((set, index) => {
                                            const PrMetrics = Object.entries(set.PRs)
                                                .filter(([key, value]) => value === true)
                                                .map(([key]) => key);
                                            return <div className='data-row'>
                                                <div className='container-set'>
                                                    <p className='set-number'>{index + 1}</p>
                                                    <div className='set'>
                                                        <p >{`${set.weight} kg x ${set.reps}`}</p>
                                                        <div className='badges'>
                                                            {PrMetrics.map(metric => <BadgePR metric={metric} />)}
                                                        </div>
                                                    </div>
                                                    <div className='icon-PR'>
                                                        {PrMetrics.length > 0 && <TrophyMedium />}
                                                    </div>

                                                </div>
                                            </div>
                                        })
                                    }

                                </div>
                            </div>
                        ))}

                    </div>



                </div>
            </>
        )
    }
}

export default HistoryWorkout
