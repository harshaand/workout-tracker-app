import React from 'react'
import '../../css/cards.css';
import ButtonSmall from '../Buttons/ButtonSmall.jsx'
import { Clock } from '../../assets/icons/icons.js';


const placeholderTitle = 'My Back'
const placeholderDescr = 'Bench Press (Barbell), Incline Bench Press...'
const placeholderTimeS = '9 days ago'


function CardWorkoutTemplate({ title = placeholderTitle,
    description = placeholderDescr,
    timestamp = placeholderTimeS,
    titleLength = 'short', type = 'default' }) {

    const LENGTH_MAP = {
        short: 'card-workout-template-short-title',
        long: 'card-workout-template-lomg-title'
    }

    if (type === 'add') {
        return (
            <div className='card-workout-add-template'>
                <h3 >Tap to Add</h3>
                <p>or drag template</p>
                <p>here to move</p>
            </div>
        )
    }
    else {
        return (
            <div className={`card-workout-template ${LENGTH_MAP[titleLength]}`}>
                <div className='heading'><h3>{title}</h3></div>

                <ButtonSmall type='options1' customClasses='options-button'></ButtonSmall>

                <div className='content'>
                    <p>{description}</p>
                    {timestamp ?
                        <div className='container-timestamp'>
                            <Clock />
                            <p>{timestamp}</p>
                        </div>
                        : ''}
                </div>
            </div>
        )

    }
}

export default CardWorkoutTemplate
