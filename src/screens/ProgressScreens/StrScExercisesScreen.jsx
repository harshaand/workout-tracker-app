import React from 'react'
import { AnatomyFront, AnatomyBack, ArrowRight } from '../../assets/icons/icons'
import ButtonSmall from '../../components/Buttons/ButtonSmall'
import ButtonBig from '../../components/Buttons/ButtonBig'
import RowStrengthScore from '../../components/Cards/ProgressScreen/RowStrSc.jsx'
import Navbar from '../../components/Navbar.jsx'
import { RoutingContext } from '../../App.jsx'

function StrScExercisesScreen() {
    const { handleScreenChange } = React.useContext(RoutingContext)

    return (
        <div className='strength-score-sub-screen__container'>
            <Navbar />
            <div className='header'>
                <ButtonSmall type='backScreen' onClick={() => handleScreenChange('StrScMuscleScreen')} />
                <h2>Eligible Exercises</h2>
            </div>

            <div className='main main--exercise-screen'>
                <div className='container-rows-strength-scores'>
                    <RowStrengthScore muscleGroup='Bench Press' score={20} type='exercise-2' />
                    <RowStrengthScore muscleGroup='Chest Flies' score={20} type='exercise-2' />
                    <RowStrengthScore muscleGroup='Inclined Bench Press' score={20} type='exercise-2' />
                    <RowStrengthScore muscleGroup='Push up' score={20} type='exercise-2' />
                    <RowStrengthScore muscleGroup='Cable Crossover' score={20} type='exercise-2' />
                    <RowStrengthScore muscleGroup='Dumbell Press' score={20} type='exercise-2' />
                </div>
            </div>

        </div>
    )
}

export default StrScExercisesScreen
