import React from 'react'
import ButtonSmall from '../Buttons/ButtonSmall.jsx'
import '../../css/cards.scss';
import '../../css/screens.scss';


import {
    Clock, Weight, TrophyMedium
} from '../../assets/icons/icons.js';



function CardWorkoutHistory({ history, customClasses, onClick }) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
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

    };
    return (
        <div className={`card-workout-history ${customClasses ? customClasses : 'card-workout-history--default'}`} onClick={onClick}>
            <ButtonSmall type='options1' customClasses='options-button'></ButtonSmall>
            <div className='heading'><h3>{history.name}</h3></div>


            <div className='container-stats'>
                <p> {`${daysOfWeek[history.date.getDay()]}, ${history.date.getDate()} ${months[history.date.getMonth()]}`}</p>
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


            <div className='container-data-rows'>


                <div className='data-row'>
                    <div className='heading'><h4>Exercise</h4></div>
                    <div className='heading'><h4>Best Set</h4></div>
                </div>
                {
                    history.exercises.map(exercise => {
                        let bestSet = exercise.sets.find(set => set.bestSet === true)
                        if (bestSet === undefined) { bestSet = exercise.sets[0] }
                        return <div className='data-row'>
                            <p>{`${exercise.sets.length} x ${exercise.name}`}</p>
                            <p>{`${bestSet.weight} kg x ${bestSet.reps}`}</p>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default CardWorkoutHistory
