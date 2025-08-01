import React from 'react'
import ButtonBig from '../../Buttons/ButtonBig'
import { AnatomyFront, AnatomyBack } from '../../../assets/icons/icons'

const defaultChildren =
    <>
        <AnatomyFront height={170} width={59} />
        <AnatomyBack height={170} width={60} />
    </>
function CardStrScOverview({ children = defaultChildren, onClick }) {
    return (
        <div className='card-strength-score-overview'>
            <h4>Strength Score</h4>
            <div className='container-anatomy-svgs'>
                {children}
            </div>
            <ButtonBig size='hug' onClick={onClick}>View Scores</ButtonBig>
        </div>
    )
}

export default CardStrScOverview
