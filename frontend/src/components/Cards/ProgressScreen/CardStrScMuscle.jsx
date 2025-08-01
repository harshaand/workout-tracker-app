import React from 'react'
import { AnatomyFront, AnatomyBack } from '../../../assets/icons/icons'

const defaultChild = <AnatomyFront height={215} width={75.85} />
function CardStrScMuscle({ children = defaultChild, strengthScore = '71 (Advanced)' }) {
    return (
        <div className='card-strength-score-muscle'>
            <h4 className='text-heading'>Strength Score</h4>
            <h4 className='text-threshold'>{strengthScore}</h4>
            <div className='container-anatomy-svgs'>
                {children}
            </div>
        </div>
    )
}

export default CardStrScMuscle
