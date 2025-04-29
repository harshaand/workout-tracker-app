import React from 'react'
import '../css/buttons.css';
import '../css/modals.css';

import ButtonSmall from '../components/Buttons/ButtonSmall.jsx'
import ButtonBig from '../components/Buttons/ButtonBig.jsx'
import CardWorkoutTemplate from '../components/Cards/CardWorkoutTemplate.jsx'
import CardWorkoutHistory from '../components/Cards/CardWorkoutHistory.jsx'
import CardExerciseTracker from '../components/Cards/CardExerciseTracker.jsx'


function SessionScreen() {
    const initialExercises = [
        {
            id: 1,
            name: 'cable curcles',
            prevWeight: 10,
            prevReps: 20,
            sets:
                [
                    {
                        setNum: 1,
                        weight: 111,
                        reps: 111,
                        completed: true
                    },
                    {
                        setNum: 2,
                        weight: 222,
                        reps: 222,
                        completed: false
                    }
                ]
        },
        {
            id: 2,
            name: 'curls cable',
            prevWeight: 10,
            prevReps: 20,
            sets:
                [
                    {
                        setNum: 1,
                        weight: 999,
                        reps: 999,
                        completed: true
                    },
                    {
                        setNum: 2,
                        weight: 888,
                        reps: 888,
                        completed: false
                    }
                ]
        }

    ]

    const [exercises, setExercises] = React.useState(initialExercises)

    function renderCardExerciseTracker() {
        return exercises.map(exercise => (<CardExerciseTracker exercise={exercise} />))
    }

    function toggleSetCompleted(exerciseId, setNum) {
        setExercises(prevExercises => (
            prevExercises.map(exercise => exercise.id === exerciseId ?
                {
                    ...exercise,
                    sets: exercise.sets.map(set => set.setNum === setNum ? { ...set, completed: !set.completed } : set)
                } :
                exercise)
        ))
    }


    return (
        <div className="container-app">
            <div className="div-header">
                <h1>Start Workout</h1>
            </div>

            <div className="library-container-quick-start">
                <h4>Quick Start</h4>
                <ButtonBig color='blue' size='chunky'>Start an Empty Workout</ButtonBig>
                <CardWorkoutTemplate />
                <CardWorkoutHistory />
                <CardExerciseTracker exercise={exercises[0]} toggleSetCompleted={toggleSetCompleted} />
                <CardExerciseTracker exercise={exercises[1]} toggleSetCompleted={toggleSetCompleted} />

            </div>
            <div className="library-main-section">
                <div className="library-main-section-header">


                    <ButtonSmall type='options1' />

                </div>
                <div className="library-main-section-content">

                </div>
            </div>

        </div>
    )
}

export default SessionScreen