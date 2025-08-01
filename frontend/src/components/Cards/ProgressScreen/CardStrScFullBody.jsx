import React from 'react'
import ButtonBig from '../../Buttons/ButtonBig'
import { AnatomyFront, AnatomyBack } from '../../../assets/icons/icons'

const defaultChildren =
    <>
        <AnatomyFront height={170} width={59} />
        <AnatomyBack height={170} width={60} />
    </>
function CardStrScFullBody({ children = defaultChildren, onClick }) {
    return (
        <div className='card-strength-score-full-body'>
            <div className='container-anatomy-svgs'>
                {children}
            </div>
            <div className='container-levels'>
                <div className='level beginner'>Beginner</div>
                <div className='level novice'>Novice</div>
                <div className='level intermediate'>Intermediate</div>
                <div className='level advanced'>Advanced</div>
                <div className='level elite'>Elite</div>
            </div>
        </div>
    )
}

export default CardStrScFullBody
