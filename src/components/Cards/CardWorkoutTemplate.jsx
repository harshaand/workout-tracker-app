import React from 'react'
import '../../css/cards.scss';
import ButtonSmall from '../Buttons/ButtonSmall.jsx'
import { Clock } from '../../assets/icons/icons.js';


let title
let description
let timestamp
let titleLength
let type


function CardWorkoutTemplate({ template, onClick }) {
    if (template) {
        description = template.exercises.map(exercise => exercise.name);
        description = description.join(', ')



        let lastDoneMessage = false
        const diff = Math.abs(new Date() - new Date(template?.lastDone));
        if (template?.lastDone === undefined || diff === undefined) {
            lastDoneMessage = false
        }
        else {
            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            if (days > 0) {
                lastDoneMessage = `${days} day${days !== 1 ? 's' : ''} ago`;
            } else if (hours > 0) {
                lastDoneMessage = `${hours} hour${hours !== 1 ? 's' : ''} ago`;
            } else if (minutes > 0) {
                lastDoneMessage = `${minutes} min${minutes !== 1 ? 's' : ''} ago`;
            } else {
                lastDoneMessage = `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
            }
        }


        title = template.name
        timestamp = lastDoneMessage
        titleLength = 'short'
        type = 'default'

    } else {
        title = 'My Back'
        description = 'Bench Press (Barbell), Incline Bench Press...'
        timestamp = '9 days ago'
        titleLength = 'short'
        type = 'default'
    }

    const LENGTH_MAP = {
        short: 'card-workout-template__short-title',
        long: 'card-workout-template__long-title'
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
            <div className={`card-workout-template ${LENGTH_MAP[titleLength]}`} onClick={onClick}>
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
