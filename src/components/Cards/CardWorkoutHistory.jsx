import React from 'react'
import ButtonSmall from '../Buttons/ButtonSmall.jsx'
import '../../css/cards.css';

import {
    Clock, Weight, TrophyMedium
} from '../../assets/icons/icons.js';



function CardWorkoutHistory() {
    return (
        <div className='card-workout-history'>
            <ButtonSmall type='options1' customClasses='options-button'></ButtonSmall>
            <div className='heading'><h3>My Back</h3></div>


            <div className='container-stats'>
                <p> Friday, 7 Mar</p>
                <div className='stats'>
                    <div className='stat duration'>
                        <Clock />
                        <p>20s</p>
                    </div>
                    <div className='stat volume'>
                        <Weight />
                        <p>2400 kg</p>
                    </div>
                    <div className='stat PRs'>
                        <TrophyMedium />
                        <p>12 PRs</p>
                    </div>
                </div>
            </div>


            <div className='container-data-rows'>


                <div className='data-row'>
                    <div className='heading'><h4>Exercise</h4></div>
                    <div className='heading'><h4>Best Set</h4></div>
                </div>

                <div className='data-row'>
                    <p>2 x Ab Wheel</p>
                    <p>+10 kg x 20</p>
                </div>

                <div className='data-row'>
                    <p>1 x Back Extension</p>
                    <p>+20 kg x 20</p>
                </div>

                <div className='data-row'>
                    <p>1 x Bent Over One...</p>
                    <p>20 kg x 20</p>
                </div>

                <div className='data-row'>
                    <p>1 x Cable Crunch</p>
                    <p>20 kg x 20</p>
                </div>

                <div className='data-row'>
                    <p>1 x Clean (Barbell)</p>
                    <p>20 kg x 20</p>
                </div>
            </div>
        </div>
    )
}

export default CardWorkoutHistory
