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
                <div className='level Beginner'>Beginner</div>
                <div className='level Novice'>Novice</div>
                <div className='level Intermediate'>Intermediate</div>
                <div className='level Advanced'>Advanced</div>
                <div className='level Elite'>Elite</div>
            </div>
        </div>
    )
}

export default CardStrScFullBody
