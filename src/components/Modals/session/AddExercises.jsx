import React from 'react'
import { useData, useDataUpdate } from '../../../DataContext'
import ButtonSmall from '../../Buttons/ButtonSmall'
import { Search, ArrowDown, Tick } from '../../../assets/icons/icons'

function AddExercises({ addExercises, setShowAddExercisesModal, setShowCreateExerciseModal }) {
    const data = useData()

    const [openSections, setOpenSections] = React.useState({});

    const toggleSection = (sectionName, event) => {
        event.preventDefault(); // Prevent form submission
        setOpenSections(prev => ({
            ...prev,
            [sectionName]: !prev[sectionName]
        }));
    };

    const [checkedExercises, setCheckedExercises] = React.useState({});

    const toggleHelpBtn = (exerciseName, event) => {
        setCheckedExercises(prev => ({
            ...prev,
            [exerciseName]: !prev[exerciseName]
        }));
    };


    const checkboxes = data.exercises.map(exercise =>
        <label>
            <input type="checkbox" name="exercise" value={exercise.name} />
            {exercise.name}
        </label>)
    return (

        <>
            <div className='modal-overlay'></div>
            {/* <div className='div-finish-workout'>
                <form action={(formData) => { addExercises(formData.getAll("exercise")) }}>
                    <ButtonSmall type='closeModal' onClick={() => { setShowAddExercisesModal(false) }} />
                    <button className='btn--transparent' onClick={() => {
                        setShowAddExercisesModal(false)
                        setShowCreateExerciseModal(true)
                    }}>New</button>
                    <div>{checkboxes}</div>
                    <button type='submit' className='btn--transparent'> Add </button>
                </form>
            </div> */}


            <form action={(formData) => { addExercises(formData.getAll("exercise")) }}>

                <div className='modal-add-exercise'>

                    <div className='container-header'>
                        <div className='container-buttons'>
                            <div className='left-buttons'>
                                <ButtonSmall type='closeModal' onClick={() => { setShowAddExercisesModal(false) }} />
                                <button className='btn-new' onClick={() => {
                                    setShowAddExercisesModal(false)
                                    setShowCreateExerciseModal(true)
                                }}>New</button>
                            </div>
                            <button type='submit' className='btn-add'>Add</button>
                        </div>
                        <div className='search-bar'>
                            <Search />
                            <input type="text" name="" id="" placeholder='Bench Press' />
                        </div>
                    </div>




                    <div className='container-exercises'>

                        <div className='row-muscle-group' onClick={(e) => toggleSection('shoulders', e)}>
                            <div className='text-and-btn'>
                                <h4>Shoulders</h4>
                                <div className={`dropdown-arrow ${openSections.shoulders ? 'rotated' : ''}`} ><ArrowDown /></div>
                            </div>

                            <div className={`container-rows-exercises ${openSections.shoulders ? 'show-container-rows-exercises' : ''}`}
                                onClick={(e) => { e.stopPropagation() }}>
                                <label className='row-exercise' >
                                    <div className='image'></div>
                                    <input type="checkbox" name="exercise" value='Side Raises' style={{ display: 'none' }} onChange={(e) => toggleHelpBtn('Side Raises', e)} />
                                    <h5>Side Raises</h5>
                                    {checkedExercises['Side Raises'] ?
                                        (<div className='checked-icon btn__icon--small btn--blue-soft'><Tick /></div>)
                                        : (<ButtonSmall type='help' />)
                                    }
                                </label>
                                <label className='row-exercise' >
                                    <div className='image'></div>
                                    <input type="checkbox" name="exercise" value='Shoulder Raises' style={{ display: 'none' }} onChange={(e) => toggleHelpBtn('Shoulder Raises', e)} />
                                    <h5>Shoulder Raises</h5>
                                    {checkedExercises['Shoulder Raises'] ?
                                        (<div className='checked-icon btn__icon--small btn--blue-soft'><Tick /></div>)
                                        : (<ButtonSmall type='help' />)
                                    }
                                </label>
                            </div>

                        </div>

                        <div className='row-muscle-group' onClick={(e) => toggleSection('back', e)}>
                            <div className='text-and-btn'>
                                <h4>Back</h4>
                                <div className={`dropdown-arrow ${openSections.back ? 'rotated' : ''}`} ><ArrowDown /></div>
                            </div>

                            <div className={`container-rows-exercises ${openSections.back ? 'show-container-rows-exercises' : ''}`}
                                onClick={(e) => { e.stopPropagation() }}>
                                <label className='row-exercise' >
                                    <div className='image'></div>
                                    <input type="checkbox" name="exercise" value='Lat Pulldown' style={{ display: 'none' }} onChange={(e) => toggleHelpBtn('Lat Pulldown', e)} />
                                    <h5>Lat Pulldown</h5>
                                    {checkedExercises['Lat Pulldown'] ?
                                        (<div className='checked-icon btn__icon--small btn--blue-soft'><Tick /></div>)
                                        : (<ButtonSmall type='help' />)
                                    }
                                </label>
                                <label className='row-exercise' >
                                    <div className='image'></div>
                                    <input type="checkbox" name="exercise" value='Cable Row' style={{ display: 'none' }} onChange={(e) => toggleHelpBtn('Cable Row', e)} />
                                    <h5>Cable Row</h5>
                                    {checkedExercises['Cable Row'] ?
                                        (<div className='checked-icon btn__icon--small btn--blue-soft'><Tick /></div>)
                                        : (<ButtonSmall type='help' />)
                                    }
                                </label>
                            </div>

                        </div>

                    </div>

                </div>
            </form >
        </>
    )
}

export default AddExercises
