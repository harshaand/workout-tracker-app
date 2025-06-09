import React from 'react'
import ButtonSmall from '../Buttons/ButtonSmall.jsx'
import '../../css/cards.scss';
import '../../css/screens.scss';
import BadgePR from '../../assets/icons/BadgePR.jsx';

import { TrophyMedium } from '../../assets/icons/icons.js';


function CardExerciseHistory({ history, customClasses, onClick }) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    return (
        <div className={`card-exercise-history ${customClasses ? customClasses : 'card-workout-history--default'}`} onClick={onClick}>
            <div className='heading'><h3>{`${daysOfWeek[new Date(history.date).getDay()]}, ${new Date(history.date).getDate()} ${months[new Date(history.date).getMonth()]}`}</h3></div>
            <div className='container-data-rows'>
                {
                    history.sets.map((set, index) => {
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
    )
}

export default CardExerciseHistory
