import React from 'react'
import ButtonSmall from '../../Buttons/ButtonSmall'
import { Tick } from '../../../assets/icons/icons'
import { useData, useDataUpdate } from '../../../DataContext'


function CreateExercise({ createExercise, setShowCreateExerciseModal, setShowAddExercisesModal }) {
    const data = useData()
    const [currentSection, setCurrentSection] = React.useState('exerciseInfo')
    const [targetMuscleGroups, setTargetMuscleGroups] = React.useState([])
    const [currentTargetMuscleGroups, setCurrentTargetMuscleGroups] = React.useState([])

    function handleSubmit(formData) {
        createExercise(formData.get('exerciseName'), targetMuscleGroups, formData.get('prMetric'))
        setShowCreateExerciseModal(false)
        setShowAddExercisesModal(true)
    }

    function toggleTargetMuscleGroup(muscleGroup) {
        setCurrentTargetMuscleGroups(prev =>
            prev.includes(muscleGroup)
                ? prev.filter(group => group !== muscleGroup)
                : [...prev, muscleGroup]
        );
    };

    function removeTargetMuscleGroup(muscleGroup) {
        setTargetMuscleGroups(prev => prev.includes(muscleGroup) ? prev.filter(group => group !== muscleGroup) : prev);
        setCurrentTargetMuscleGroups(prev => prev.includes(muscleGroup) ? prev.filter(group => group !== muscleGroup) : prev);
    }

    function syncTargetMuscleGroups() {
        setTargetMuscleGroups(currentTargetMuscleGroups)
    }

    return (
        <>
            <button className='modal-overlay' onClick={() => {
                setShowAddExercisesModal(true)
                setShowCreateExerciseModal(false)
            }}></button>


            <form action={handleSubmit}>
                <div className='modal-create-exercise'>


                    <div className='container-header'>
                        <div className='header'>
                            {(currentSection === 'exerciseInfo') &&
                                <ButtonSmall type='closeModal' onClick={() => {
                                    setShowAddExercisesModal(true)
                                    setShowCreateExerciseModal(false)
                                }} />}
                            {(currentSection === 'targetMuscleGroups') &&
                                <ButtonSmall type='backModal' onClick={() => {
                                    setCurrentSection('exerciseInfo')
                                    setCurrentTargetMuscleGroups(targetMuscleGroups)
                                }} />}
                            <p>Create New Exercise</p>
                            {(currentSection === 'exerciseInfo') &&
                                <button type='submit' className='btn-CTA'>Save</button>
                            }
                            {(currentSection === 'targetMuscleGroups') &&
                                <button className='btn-CTA' onClick={(e) => {
                                    setCurrentSection('exerciseInfo')
                                    syncTargetMuscleGroups()
                                }}>Add</button>
                            }
                        </div>
                    </div>


                    <div className={`wrapper-main ${currentSection === 'exerciseInfo' ? 'wrapper-main--show' : ''}`}>
                        <div>
                            <div className='container-exercise-info'>
                                <div className='search-bar'>
                                    <input name='exerciseName' placeholder='Bench Press' type="text" id="" />
                                </div>

                                <div className='container-content'>
                                    <div className='header'>
                                        <p className='text'>Select your desired PR metric</p>
                                    </div>

                                    <div className='container-tags' >
                                        <label key='volume' className='tag'>Volume<input type="radio" name="prMetric" value='volume' defaultChecked /></label>
                                        <label key='1RM' className='tag'>    1RM  <input type="radio" name="prMetric" value='1RM' />   </label>
                                        <label key='weight' className='tag'>Weight<input type="radio" name="prMetric" value='weight' /></label>
                                        <label key='reps' className='tag'>   Reps <input type="radio" name="prMetric" value='reps' />  </label>
                                    </div>
                                </div>


                                <div className='container-content'>
                                    <div className='header'>
                                        <p className='text'>Select at least one target muscle</p>
                                        <ButtonSmall type='add' onClick={(e) => {
                                            e.preventDefault();
                                            setCurrentSection('targetMuscleGroups')
                                        }} />
                                    </div>

                                    <div className='container-tags' >
                                        {targetMuscleGroups.map(muscleGroup => <span className='tag tag-target-muscle'
                                            onClick={() => removeTargetMuscleGroup(muscleGroup)}>
                                            {muscleGroup}
                                        </span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={`wrapper-main ${currentSection === 'targetMuscleGroups' ? 'wrapper-main--show' : ''}`}>
                        <div>
                            <div className='container-muscle-groups'>
                                {Object.keys(data.strengthScores).map(muscleGroup => (
                                    <label key={muscleGroup} className='row-muscle-group'>
                                        <h4 >{muscleGroup}</h4>
                                        <input type="checkbox" name={'muscleGroup'} value={muscleGroup}
                                            style={{ display: 'none' }} checked={currentTargetMuscleGroups.includes(muscleGroup)}
                                            onChange={() => toggleTargetMuscleGroup(muscleGroup)} />
                                        <Tick />
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </form >

        </>
    )
}

export default CreateExercise
