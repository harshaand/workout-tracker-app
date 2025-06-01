import React from 'react'
import { useData, useDataUpdate } from '../../../DataContext'
import ButtonSmall from '../../Buttons/ButtonSmall'
import { Search, ArrowDown, Tick } from '../../../assets/icons/icons'

function AddExercises({ addExercises, setShowAddExercisesModal, setShowCreateExerciseModal }) {
    const data = useData()

    const containerExercises = React.useRef(null);
    const [containerExercisesHeight, setContainerExercisesHeight] = React.useState(0);

    React.useEffect(() => {
        if (containerExercises.current) {
            const height = containerExercises.current.offsetHeight;
            setContainerExercisesHeight(height);
        }
    }, []);

    const openSections = React.useRef(Object.fromEntries(
        Object.keys(data.strengthScores).map(key => [key, false])
    ))

    const toggleSection = (sectionName, event) => {
        event.preventDefault(); // Prevent form submission
        openSections.current = {
            ...openSections.current,
            [sectionName]: !openSections.current[sectionName]
        };
        const el = document.getElementById(sectionName)
        const elDropdownArrow = document.getElementById(`${sectionName}-dropdown-arrow`)
        if (openSections.current[sectionName] === true) {
            el.style.height = el.scrollHeight + 'px';
            elDropdownArrow.classList.add('rotated')

        } else {
            el.style.height = '0px';
            elDropdownArrow.classList.remove('rotated')
        }
    }

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

    const [searchTerm, setSearchTerm] = React.useState('');

    // Get all exercise names
    const getAllExercises = () => {
        const exercises = [];
        for (const muscleGroup in data.strengthScores) {
            for (const exercise in data.strengthScores[muscleGroup]) {
                exercises.push(exercise);
            }
        }
        return exercises;
    };

    // Filter exercises based on search term
    const filteredExercises = [...new Set(getAllExercises())]
        .filter(exercise => exercise.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(exercise => ({
            name: exercise,
            percentage: searchTerm.length > 0 ? (searchTerm.length / exercise.length) * 100 : 0
        }))
        .sort((a, b) => b.percentage - a.percentage)
        .map(item => item.name);

    // Function to highlight search term in exercise name
    function highlightSearchTerm(exerciseName) {
        if (!searchTerm) return exerciseName;

        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const parts = exerciseName.split(regex);

        return parts.map((part, index) =>
            regex.test(part) ?
                <span key={index} className="highlighted">{part}</span> :
                part
        );
    };
    return (

        <>
            <div className='modal-overlay'></div>

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
                            <input type="text" name="" id="" placeholder='Bench Press' value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} />
                        </div>
                    </div>


                    <div className='container-exercises' ref={containerExercises} style={{ containerExercisesHeight: `${containerExercisesHeight}px` }}>
                        {searchTerm.length > 0 ? (
                            <div className={'container-rows-exercises container-rows-exercises--search'} style={{ height: `${containerExercisesHeight}px` }}>
                                {filteredExercises.map((exercise, index) => (
                                    <label className={`row-exercise animate-fadeIn ${checkedExercises[exercise] ? 'row-exercise--checked' : ''}`}>
                                        <div className='image'></div>
                                        <input type="checkbox" name="exercise" value={exercise} checked={!!checkedExercises[exercise]}
                                            style={{ display: 'none' }} onChange={(e) => toggleHelpBtn(exercise, e)} />
                                        <h5>{highlightSearchTerm(exercise)}</h5>
                                        {checkedExercises[exercise] ?
                                            (<div className='checked-icon btn__icon--small btn--blue-soft'><Tick /></div>)
                                            : (<ButtonSmall type='help' />)
                                        }
                                    </label>
                                ))}
                            </div>
                        ) :
                            (Object.entries(data.strengthScores).map(([muscleGroup, exercises]) => (
                                <div className='row-muscle-group' onClick={(e) => toggleSection(muscleGroup, e)} >
                                    <div className='text-and-btn'>
                                        <h4>{muscleGroup}</h4>
                                        <div id={`${muscleGroup}-dropdown-arrow`} key={`${muscleGroup}-dropdown-arrow`} className="dropdown-arrow" ><ArrowDown /></div>
                                    </div>

                                    <div id={muscleGroup} key={muscleGroup} className="container-rows-exercises container-rows-exercises--default"
                                        onClick={(e) => { e.stopPropagation() }}>
                                        {Object.entries(exercises).map(([exercise, strengthScore]) => (
                                            <label className={`row-exercise animate-fadeIn ${checkedExercises[exercise] ? 'row-exercise--checked' : ''}`}>
                                                <div className='image'></div>
                                                <input type="checkbox" name="exercise" value={exercise} checked={!!checkedExercises[exercise]}
                                                    style={{ display: 'none' }} onChange={(e) => toggleHelpBtn(exercise, e)} />
                                                <h5>{exercise}</h5>
                                                {checkedExercises[exercise] ?
                                                    (<div className='checked-icon btn__icon--small btn--blue-soft'><Tick /></div>)
                                                    : (<ButtonSmall type='help' />)
                                                }
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))
                            )}
                    </div>

                </div>
            </form >
        </>
    )
}

export default AddExercises
