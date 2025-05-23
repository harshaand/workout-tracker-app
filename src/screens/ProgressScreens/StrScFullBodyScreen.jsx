import React from 'react'
import { AnatomyFront, AnatomyBack, ArrowRight } from '../../assets/icons/icons'
import ButtonSmall from '../../components/Buttons/ButtonSmall'
import ButtonBig from '../../components/Buttons/ButtonBig'
import RowStrengthScore from '../../components/Cards/ProgressScreen/RowStrSc.jsx'
import CardStrScFullBody from '../../components/Cards/ProgressScreen/CardStrScFullBody.jsx'
import Navbar from '../../components/Navbar.jsx'
import { RoutingContext } from '../../App.jsx'


function StrScFullBodyScreen() {
    const { handleScreenChange } = React.useContext(RoutingContext)

    return (
        <div className='StrScFullBody__container'>
            <Navbar />
            <div className='StrScFullBody__header'>
                <ButtonSmall type='backScreen' onClick={() => handleScreenChange('ProgressScreen')} />
                <h2>Strength Scores</h2>
            </div>

            <div className='StrScFullBody__main'>
                <CardStrScFullBody >
                    <AnatomyFront height={170} width={59} />
                    <AnatomyBack height={170} width={60} />
                </CardStrScFullBody>

                <div className='container-rows-strength-scores'>
                    <RowStrengthScore muscleGroup='Shoulders' score={20} type='muscle-group' />
                    <RowStrengthScore muscleGroup='Chest' score={20} type='muscle-group' />
                    <RowStrengthScore muscleGroup='Arms' score={20} type='muscle-group' />
                    <RowStrengthScore muscleGroup='Back' score={20} type='muscle-group' />
                    <RowStrengthScore muscleGroup='Legs' score={20} type='muscle-group' />
                    <RowStrengthScore muscleGroup='Glutes' score={20} type='muscle-group' />
                </div>


            </div>


        </div>
    )
}

export default StrScFullBodyScreen
