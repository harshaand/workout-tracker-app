import React from 'react'
import { AnatomyFront, AnatomyBack } from '../../../assets/icons/icons'

const defaultChild = <AnatomyFront height={300} width={105.84} />
const exampleThresholds = { beginner: 0.75, novice: 1.25, intermediate: 1.5, advanced: 2.25, elite: 2.75 }

function CardsStrScExercise({ children = defaultChild, strengthScore = 71, OneRepMax = 266.6, thresholds = exampleThresholds, userWeight = 88 }) {
    const bracket = Object.entries(thresholds).findLast(([thresholdName, thresholdValue]) => (strengthScore / 100) * thresholds.elite > thresholdValue)?.[0] || 'beginner';

    return (
        <div className='cards-strength-exercise'>
            <div className='card-strength-exercise'>
                <h4 className='text-heading'>Strength Score</h4>
                <h4 className='text-threshold'>{`${strengthScore} (${bracket.charAt(0).toUpperCase() + bracket.slice(1)})`}</h4>
                {children}
            </div>
            <div className='column'>
                <div className='card-highest-e1rm'>
                    <h4 className='text-heading'>Highest E-1RM</h4>
                    <h4 className='text-threshold'>{OneRepMax} kg</h4>
                </div>

                <div className='card-thresholds'>
                    <h5 className='text-heading'>Required E-1RM</h5>

                    <div className={`row-threshold ${bracket === 'beginner' ? 'row-threshold--active' : 'row-threshold--inactive'}`}>
                        <h5 className='text-content'>Beginner</h5>
                        <h5 className='text-content'>{userWeight * thresholds.beginner} kg</h5>
                    </div>
                    <div className={`row-threshold ${bracket === 'novice' ? 'row-threshold--active' : 'row-threshold--inactive'}`}>
                        <h5 className='text-content'>Novice</h5>
                        <h5 className='text-content'>{userWeight * thresholds.novice} kg</h5>
                    </div>
                    <div className={`row-threshold ${bracket === 'intermediate' ? 'row-threshold--active' : 'row-threshold--inactive'}`}>
                        <h5 className='text-content'>Intermediate</h5>
                        <h5 className='text-content'>{userWeight * thresholds.intermediate} kg</h5>
                    </div>
                    <div className={`row-threshold ${bracket === 'advanced' ? 'row-threshold--active' : 'row-threshold--inactive'}`}>
                        <h5 className='text-content'>Advanced</h5>
                        <h5 className='text-content'>{userWeight * thresholds.advanced} kg</h5>
                    </div>
                    <div className={`row-threshold ${bracket === 'elite' ? 'row-threshold--active' : 'row-threshold--inactive'}`}>
                        <h5 className='text-content'>Elite</h5>
                        <h5 className='text-content'>{userWeight * thresholds.elite} kg</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsStrScExercise
