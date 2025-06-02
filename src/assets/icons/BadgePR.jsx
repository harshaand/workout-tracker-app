import React from 'react'
import { TrophySmall } from './icons.js';
import '../../css/cards.scss'
function BadgePR({ metric }) {
    return (
        <div className='badge-PR'>
            <TrophySmall />
            <span className='text'>{metric.toUpperCase()}</span>
        </div>
    )
}

export default BadgePR
