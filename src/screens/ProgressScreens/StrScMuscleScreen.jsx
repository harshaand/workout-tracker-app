import React from 'react'
import { AnatomyFront, AnatomyBack, ArrowRight } from '../../assets/icons/icons'
import ButtonSmall from '../../components/Buttons/ButtonSmall'
import ButtonBig from '../../components/Buttons/ButtonBig'
import RowStrengthScore from '../../components/Cards/ProgressScreen/RowStrSc.jsx'
import CardStrScMuscle from '../../components/Cards/ProgressScreen/CardStrScMuscle.jsx'
import Navbar from '../../components/Navbar.jsx'
import { RoutingContext } from '../../App.jsx'
import { useData } from '../../DataContext.jsx'

function StrScMuscleScreen({ musclesThresholdBrackets, muscleGroup }) {
    const { handleScreenChange, handleStrScScreenChange } = React.useContext(RoutingContext)
    const data = useData()

    return (
        <div className='strength-score-sub-screen__container'>
            <Navbar />
            <div className='header'>
                <ButtonSmall type='backScreen' onClick={() => handleScreenChange('StrScFullBodyScreen')} />
                <h2>{muscleGroup} Strength Score</h2>
            </div>

            <div className='main main--exercise-screen'>
                <CardStrScMuscle strengthScore={`${Math.max(...Object.values(data.strengthScores[muscleGroup]).filter(value => value !== "not eligible"))} 
                (${musclesThresholdBrackets[muscleGroup].charAt(0).toUpperCase() + musclesThresholdBrackets[muscleGroup].slice(1)})`} >
                    {muscleGroup === "Shoulders" ||
                        muscleGroup === "Chest" ||
                        muscleGroup === "Biceps" ||
                        muscleGroup === "Abs" ||
                        muscleGroup === "Quads" ?
                        <AnatomyFront height={215} width={75.85} musclesThresholdBrackets={musclesThresholdBrackets} />
                        : <AnatomyBack height={215} width={75.85} musclesThresholdBrackets={musclesThresholdBrackets} />}
                </CardStrScMuscle>

                <div className='container-rows-strength-scores'>
                    <div className='container-rows-strength-scores__header'>
                        <h3>Eligible Exercises</h3>
                    </div>

                    {Object.entries(data.strengthScores[muscleGroup])
                        .filter(([exercise, strengthScore]) => strengthScore !== "not eligible")
                        .map(([exercise, strengthScore]) => {
                            return <RowStrengthScore muscleGroup={exercise} score={strengthScore} type='exercise-1' onClick={() => handleStrScScreenChange('StrScExerciseScreen', musclesThresholdBrackets, muscleGroup, exercise)} />
                        }
                        )}
                </div>
            </div>

        </div>
    )
}

export default StrScMuscleScreen
