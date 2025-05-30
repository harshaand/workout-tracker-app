import React from 'react'
import { TrophySmall } from './icons.js';
function BadgePR({ metric }) {
    return (
        <div className='badge-PR'>
            <TrophySmall />
            <p className='text'>{metric.toUpperCase()}</p>
        </div>
    )
}

export default BadgePR
