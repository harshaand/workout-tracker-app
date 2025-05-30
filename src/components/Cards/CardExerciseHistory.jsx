import React from 'react'
import ButtonSmall from '../Buttons/ButtonSmall.jsx'
import '../../css/cards.scss';
import '../../css/screens.scss';
import BadgePR from '../../assets/icons/BadgePR.jsx';

import { TrophyMedium } from '../../assets/icons/icons.js';


function CardExerciseHistory({ history, customClasses }) {
    console.log('card history', history['date'])
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    function formatTime(totalSeconds) {
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
        <div className={`card-exercise-history ${customClasses ? customClasses : 'card-workout-history--default'}`}>
            <div className='heading'><h3>{`${daysOfWeek[history.date.getDay()]}, ${history.date.getDate()} ${months[history.date.getMonth()]}`}</h3></div>
            <div className='container-data-rows'>
                {
                    history.sets.map((set, index) => {
                        const PrMetrics = Object.entries(set.PRs)
                            .filter(([key, value]) => value === true)
                            .map(([key]) => key);
                        return <div className='data-row'>
                            <div className='container-set'>
                                <p className='time'>{index + 1}</p>
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
    )
}

export default CardExerciseHistory
