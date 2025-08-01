import React from 'react'
import { Calendar, TrophyLarge, Bicep, Streak, WeightLarge } from '../../../assets/icons/icons'

function CardsStrScStats({ streak = '1 week', PBs = 1, workouts = 1, volume = 1, reps = 1 }) {
    return (

        <div className='cards-strength-score-stats'>
            <div className='columns'>

                <div className='card-stat card-stat--streak'>
                    <h4 className='card-text card-text--title'>Gym Streak</h4>
                    <div className='icon-and-stat'>
                        <Streak />
                        <h5 className='card-text card-text--value'>{streak}</h5>
                    </div>
                </div>
                <div className='card-stat card-stat--default'>
                    <h4 className='card-text card-text--title'>Total PB's</h4>
                    <div className='icon-and-stat'>
                        <TrophyLarge />
                        <h5 className='card-text card-text--value'>{PBs}</h5>
                    </div>
                </div>

            </div>

            <div className='columns'>

                <div className='columns'>
                    <div className='card-stat card-stat--default'>
                        <h4 className='card-text card-text--title'>Total Workouts</h4>
                        <div className='icon-and-stat'>
                            <Calendar />
                            <h5 className='card-text card-text--value'>{workouts}</h5>
                        </div>
                    </div>
                    <div className='card-stat card-stat--default'>
                        <h4 className='card-text card-text--title'>Total Volume</h4>
                        <div className='icon-and-stat'>
                            <WeightLarge />
                            <h5 className='card-text card-text--value'>{volume}</h5>
                        </div>
                    </div>
                </div>

                <div className='card-stat card-stat--default'>
                    <h4 className='card-text card-text--title'>Total Reps</h4>
                    <div className='icon-and-stat'>
                        <Bicep />
                        <h5 className='card-text card-text--value'>{reps}</h5>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default CardsStrScStats
