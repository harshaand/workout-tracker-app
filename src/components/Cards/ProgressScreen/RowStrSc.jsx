import React from 'react'
import { ArrowRight } from '../../../assets/icons/icons'

function RowStrSc({ muscleGroup = 'Back', score = '1', type = 'muscle-group' }) {
    return (
        <div className='row-strength-score'>
            <div className={`content content--${type}`}>
                <h4 className='text text--muscle-group'>{muscleGroup}</h4>
                <div className='score-and-icon'>
                    <h4 className='text text--strength-score'>{score}</h4>
                    <ArrowRight />
                </div>
            </div>
            <div className='underline'></div>
        </div>
    )
}

export default RowStrSc
