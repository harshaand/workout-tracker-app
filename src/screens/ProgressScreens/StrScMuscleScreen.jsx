import React from 'react'
import { AnatomyFront, AnatomyBack, ArrowRight } from '../../assets/icons/icons'
import ButtonSmall from '../../components/Buttons/ButtonSmall'
import ButtonBig from '../../components/Buttons/ButtonBig'
import RowStrengthScore from '../../components/Cards/ProgressScreen/RowStrSc.jsx'
import CardStrScMuscle from '../../components/Cards/ProgressScreen/CardStrScMuscle.jsx'
import Navbar from '../../components/Navbar.jsx'
import { RoutingContext } from '../../App.jsx'

function StrScMuscleScreen() {
    const { handleScreenChange } = React.useContext(RoutingContext)

    return (
        <div className='strength-score-sub-screen__container'>
            <Navbar />
            <div className='header'>
                <ButtonSmall type='backScreen' onClick={() => handleScreenChange('StrScFullBodyScreen')} />
                <h2>Glute Strength Score</h2>
            </div>

            <div className='main main--exercise-screen'>
                <CardStrScMuscle >
                    <AnatomyBack height={215} width={75.85} />
                </CardStrScMuscle>

                <div className='container-rows-strength-scores'>
                    <div className='container-rows-strength-scores__header'>
                        <h3>Eligible Exercises</h3>
                        <ButtonSmall type='viewAll' onClick={() => handleScreenChange('StrScExercisesScreen')} >
                            View All</ButtonSmall>
                    </div>
                    <RowStrengthScore muscleGroup='Shoulders' score={20} type='exercise-1' />
                    <RowStrengthScore muscleGroup='Chest' score={20} type='exercise-1' />
                    <RowStrengthScore muscleGroup='Arms' score={20} type='exercise-1' />
                    <RowStrengthScore muscleGroup='Back' score={20} type='exercise-1' />
                    <RowStrengthScore muscleGroup='Legs' score={20} type='exercise-1' />
                    <RowStrengthScore muscleGroup='Glutes' score={20} type='exercise-1' />
                </div>
            </div>

        </div>
    )
}

export default StrScMuscleScreen
