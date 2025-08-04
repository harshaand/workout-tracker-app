import React from 'react'
import ButtonSmall from '../../../Buttons/ButtonSmall'
import { Tick } from '../../../../assets/icons/icons'
import DataContext from '../../../../DataContext'


function CreateExercise({ createExercise, setShowCreateExerciseModal, setShowAddExercisesModal }) {

    const { data, saveData } = React.useContext(DataContext)
    const [currentSection, setCurrentSection] = React.useState('exerciseInfo')
    const targetMuscleGroups = React.useRef([])

    const [currentTargetMuscleGroups, setCurrentTargetMuscleGroups] = React.useState([])
    const inputFieldRef = React.useRef(null)
    const [saveBtnDisabled, setSaveBtnDisabled] = React.useState({ exerciseName: undefined, status: false })
    const [errorExerciseExists, setErrorExerciseExists] = React.useState(false)

    function handleInput(e) {
        const raw = e.target.value;
        const cleaned = raw.replace(/[^\p{L}\p{N}\p{Extended_Pictographic}\s]/gu, "");
        setSaveBtnDisabled(cleaned === '' || targetMuscleGroups.current.length === 0)
        if (raw !== cleaned) {
            e.target.value = cleaned;
        }
    }

    React.useEffect(() => {
        inputFieldRef.current.focus();

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (setShowAddExercisesModal) setShowAddExercisesModal(true)
                setShowCreateExerciseModal(false)
            }
            if (e.key === 'Enter') {
                e.preventDefault();
                const userInput = inputFieldRef.current.value;
                if (userInput !== "" && targetMuscleGroups.current.length > 0) {
                    const form = document.getElementById('formCreateExercise');
                    form.requestSubmit()
                }
                else inputFieldRef.current.blur();
            }
        };
        const inputElement = inputFieldRef.current;
        if (inputElement) {
            inputElement.addEventListener('keydown', handleKeyDown);
            return () => {
                inputElement.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [])

    React.useEffect(() => {
        setSaveBtnDisabled(inputFieldRef.current.value === '' || targetMuscleGroups.current.length === 0)
    }, [targetMuscleGroups.current])


    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newExerciseName = formData.get('exerciseName')
        const exerciseExists = data.exercises.find(ex => ex.name === newExerciseName)
        if (e.target && !exerciseExists) {
            createExercise(newExerciseName, targetMuscleGroups.current, formData.get('prMetric'))
            setShowCreateExerciseModal(false)
            if (setShowAddExercisesModal) setShowAddExercisesModal(true)
        }
        else setErrorExerciseExists({ exerciseName: newExerciseName, status: true })
    }

    function toggleTargetMuscleGroup(muscleGroup) {
        setCurrentTargetMuscleGroups(prev =>
            prev.includes(muscleGroup)
                ? prev.filter(group => group !== muscleGroup)
                : [...prev, muscleGroup]
        );
    };

    function removeTargetMuscleGroup(muscleGroup) {
        const prev = [...targetMuscleGroups.current]
        targetMuscleGroups.current = prev.includes(muscleGroup) ? prev.filter(group => group !== muscleGroup) : prev
        setCurrentTargetMuscleGroups(prev => prev.includes(muscleGroup) ? prev.filter(group => group !== muscleGroup) : prev);
    }

    function syncTargetMuscleGroups() {
        targetMuscleGroups.current = currentTargetMuscleGroups
    }

    return (
        <>
            <button className='modal-overlay' onClick={() => {
                if (setShowAddExercisesModal) setShowAddExercisesModal(true)
                setShowCreateExerciseModal(false)
            }}></button>

            <form id='formCreateExercise' onSubmit={handleSubmit}>
                <div className='modal-create-exercise'>


                    <div className='container-header'>
                        <div className='header'>
                            {(currentSection === 'exerciseInfo') &&
                                <ButtonSmall type='closeModal' onClick={() => {
                                    if (setShowAddExercisesModal) setShowAddExercisesModal(true)
                                    setShowCreateExerciseModal(false)
                                }} />}
                            {(currentSection === 'targetMuscleGroups') &&
                                <ButtonSmall type='backModal' onClick={() => {
                                    setCurrentSection('exerciseInfo')
                                    setCurrentTargetMuscleGroups(targetMuscleGroups.current)
                                }} />}
                            <p>Create New Exercise</p>
                            {(currentSection === 'exerciseInfo') &&
                                <button type='submit' className='btn--transparent' disabled={saveBtnDisabled}>Save</button>
                            }
                            {(currentSection === 'targetMuscleGroups') &&
                                <button className='btn--transparent' onClick={(e) => {
                                    setCurrentSection('exerciseInfo')
                                    syncTargetMuscleGroups()
                                }}>Add</button>
                            }
                        </div>
                    </div>


                    <div className={`wrapper-main ${currentSection === 'exerciseInfo' ? 'wrapper-main--show' : ''}`}>
                        <div>
                            <div className='container-exercise-info'>
                                <div className='container-input-and-error'>
                                    <div className='search-bar'>
                                        <input ref={inputFieldRef} name='exerciseName' placeholder='Bench Press' type="text"
                                            onInput={handleInput} />
                                    </div>
                                    {errorExerciseExists.status === true && <p className='error-message'>{`${errorExerciseExists.exerciseName} already exists. Please pick another name.`}</p>}
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
                                        {targetMuscleGroups.current.map(muscleGroup => <span className='tag tag-target-muscle'
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
