import React from 'react'
import { AnatomyFront, AnatomyBack, ArrowRight } from '../../assets/icons/icons.js'
import ButtonSmall from '../../components/Buttons/ButtonSmall.jsx'
import ButtonBig from '../../components/Buttons/ButtonBig.jsx'
import RowStrengthScore from '../../components/Cards/ProgressScreen/RowStrSc.jsx'
import CardStrScFullBody from '../../components/Cards/ProgressScreen/CardStrScFullBody.jsx'
import Navbar from '../../components/Navbar.jsx'
import { RoutingContext } from '../../App.jsx'
import { useData } from '../../DataContext.jsx'


function StrScFullBodyScreen({ musclesThresholdBrackets }) {
    const { handleScreenChange, handleStrScScreenChange } = React.useContext(RoutingContext)
    const useLocalStorage = useData()
    const [data, saveData] = useLocalStorage('userData')

    return (
        <div className='strength-score-sub-screen__container'>
            <Navbar />
            <div className='header'>
                <ButtonSmall type='backScreen' onClick={() => handleScreenChange('ProgressScreen')} />
                <h2>Strength Scores</h2>
            </div>

            <div className='main  main--muscle-group-screen'>
                <CardStrScFullBody >
                    <AnatomyFront height={170} width={59} musclesThresholdBrackets={musclesThresholdBrackets} />
                    <AnatomyBack height={170} width={60} musclesThresholdBrackets={musclesThresholdBrackets} />
                </CardStrScFullBody>

                <div className='container-rows-strength-scores'>
                    {Object.entries(data.strengthScores).map(([muscleGroup, exercises]) => {
                        const highestScore = Math.max(...Object.values(exercises).filter(value => value !== "not eligible"));
                        return <RowStrengthScore muscleGroup={muscleGroup} score={highestScore} type='muscle-group' onClick={() => handleStrScScreenChange('StrScMuscleScreen', musclesThresholdBrackets, muscleGroup, undefined)} />
                    }
                    )}
                </div>
            </div>

        </div>
    )
}

export default StrScFullBodyScreen
