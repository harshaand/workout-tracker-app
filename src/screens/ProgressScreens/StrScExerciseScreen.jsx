import React from 'react'
import { AnatomyFront, AnatomyBack } from '../../assets/icons/icons'
import ButtonSmall from '../../components/Buttons/ButtonSmall'
import CardsStrScExercise from '../../components/Cards/ProgressScreen/CardsStrScExercise.jsx'
import Navbar from '../../components/Navbar.jsx'
import { RoutingContext } from '../../App.jsx'

function StrScExerciseScreen() {
    const { handleScreenChange } = React.useContext(RoutingContext)

    return (
        <div className='strength-score-sub-screen__container'>
            <Navbar />
            <div className='header'>
                <ButtonSmall type='backScreen' onClick={() => handleScreenChange('StrScExercisesScreen')} />
                <h2>Bench Press Strength Score</h2>
            </div>

            <div className='main main--exercise-screen'>
                <CardsStrScExercise >
                    <AnatomyBack height={300} width={105.84} />
                </CardsStrScExercise>
            </div>

        </div >
    )
}

export default StrScExerciseScreen