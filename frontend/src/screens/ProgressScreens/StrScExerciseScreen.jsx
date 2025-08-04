import React from 'react'
import { AnatomyFront, AnatomyBack } from '../../assets/icons/icons.js'
import ButtonSmall from '../../components/Buttons/ButtonSmall.jsx'
import CardsStrScExercise from '../../components/Cards/ProgressScreen/CardsStrScExercise.jsx'
import Navbar from '../../components/Navbar.jsx'
import { RoutingContext } from '../../RoutingContext.jsx'
import DataContext from '../../DataContext.jsx'

function StrScExerciseScreen({ musclesThresholdBrackets, muscleGroup, exercise }) {
    const { handleScreenChange } = React.useContext(RoutingContext)

    const { data, saveData } = React.useContext(DataContext)

    const exerciseData = data.exercises.find(exerciseObject => exerciseObject.name === exercise)
    const strengthScore = data.strengthScores[muscleGroup][exercise]
    const OneRepMax = exerciseData?.PRs['1RM']
    const thresholds = exerciseData?.thresholds[data.user.sex]
    return (
        <div className='strength-score-sub-screen__container'>
            <Navbar />
            <div className='header'>
                <ButtonSmall type='backScreen' onClick={() => handleScreenChange('StrScMuscleScreen')} />
                <h2>{exercise} Strength Score</h2>
            </div>

            <div className='main main--exercise-screen'>
                <CardsStrScExercise strengthScore={strengthScore} OneRepMax={OneRepMax} thresholds={thresholds}>
                    {muscleGroup === "Shoulders" ||
                        muscleGroup === "Chest" ||
                        muscleGroup === "Biceps" ||
                        muscleGroup === "Abs" ||
                        muscleGroup === "Quads" ?
                        <AnatomyFront height={300} width={105.84} musclesThresholdBrackets={musclesThresholdBrackets} />
                        : <AnatomyBack height={300} width={105.84} musclesThresholdBrackets={musclesThresholdBrackets} />}
                </CardsStrScExercise>
            </div>

        </div >
    )
}

export default StrScExerciseScreen