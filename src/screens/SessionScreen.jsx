import React from 'react'
import '../css/buttons.css';
import '../css/modals.css';

import ButtonSmall from '../components/Buttons/ButtonSmall.jsx'
import ButtonBig from '../components/Buttons/ButtonBig.jsx'
import CardWorkoutTemplate from '../components/Cards/CardWorkoutTemplate.jsx'
import CardWorkoutHistory from '../components/Cards/CardWorkoutHistory.jsx'
import CardExerciseTracker from '../components/Cards/CardExerciseTracker.jsx'
import FolderList from '../OTHER/FoldersFunctionality.jsx'


function SessionScreen({ template }) {

    const [exercises, setExercises] = React.useState(template.exercises)

    function renderCardExerciseTracker() {
        return exercises.map(exercise => (<CardExerciseTracker exercise={exercise} />))
    }

    function toggleSetCompleted(exerciseId, setNum) {
        setExercises(prevExercises => (
            prevExercises.map(exercise => exercise.id === exerciseId ?
                {
                    ...exercise,
                    sets: exercise.sets.map(set => set.num === setNum ? { ...set, completed: !set.completed } : set)
                } :
                exercise)
        ))
    }



    function addSet(exerciseId) {
        setExercises(prevExercises => {
            return prevExercises.map(exercise => {
                if (exercise.id === exerciseId) {
                    const nextSetNum = exercise.sets.length + 1;

                    const newSet = {
                        /* generate unique id */
                        id: 'revevev',
                        num: nextSetNum,
                        weight: exercise.prevWeight,
                        reps: exercise.prevReps,
                        completed: false
                    };

                    return {
                        ...exercise,
                        sets: [...exercise.sets, newSet]
                    };
                }
                else { return exercise; }
            });
        });
    };

    function deleteSet(exerciseId, setID) {
        setExercises(prevExercises => {
            return prevExercises.map(exercise => {
                if (exercise.id === exerciseId) {
                    const updatedSets = exercise.sets.filter(set => set.id !== setID);
                    const reorderedSets = updatedSets.map((set, index) => ({
                        ...set,
                        num: index + 1
                    }));

                    return {
                        ...exercise,
                        sets: reorderedSets
                    };
                }
                else { return exercise; }
            });
        });
    };


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
                <CardExerciseTracker exercise={exercises[0]} toggleSetCompleted={toggleSetCompleted} addSet={addSet} deleteSet={deleteSet} />
                <CardExerciseTracker exercise={exercises[1]} toggleSetCompleted={toggleSetCompleted} addSet={addSet} deleteSet={deleteSet} />
                <FolderList />

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