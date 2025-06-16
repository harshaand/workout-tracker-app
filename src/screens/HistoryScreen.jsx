import React from 'react'
import Navbar from '../components/Navbar.jsx'
import '../css/screens.scss'
import CardWorkoutHistory from '../components/Cards/CardWorkoutHistory.jsx'
import ModalHistoryWorkout from '../components/Modals/session/content-modals/HistoryWorkout.jsx'
import ModalOptionsHistory from '../components/Modals/template/ModalOptionsHistory.jsx'
import ModalDeleteHistory from '../components/Modals/template/ModalDeleteHistory.jsx'
import ModalSaveAsTemplate from '../components/Modals/template/ModalSaveAsTemplate.jsx'
import { useData } from '../DataContext.jsx'
import { RoutingContext } from '../App.jsx'
import { v4 as uuidv4 } from 'uuid';
import ButtonBig from '../components/Buttons/ButtonBig.jsx'



function HistoryScreen() {
    const useLocalStorage = useData()
    const [data, saveData] = useLocalStorage('userData')
    const { handleScreenChange } = React.useContext(RoutingContext)

    const months = [
        'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
        'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];
    const [selectedHistoryWorkoutModal, setSelectedHistoryWorkoutModal] = React.useState(null)
    const [showOptionsHistoryModal, setShowOptionsHistoryModal] = React.useState(undefined)
    const [modalDeleteHistory, setModalDeleteHistory] = React.useState(undefined)
    const [modalSaveAsTemplate, setModalSaveAsTemplate] = React.useState(undefined)


    function deleteWorkoutHistory(workoutId) {
        saveData(prev => {
            const workoutHistory = prev.history.find(history => history.workoutId === workoutId)
            console.log('workoutHistory', workoutHistory)
            const exerciseNames = workoutHistory.exercises.map(exercise => exercise.name);
            const uniqueExerciseNames = [...new Set(exerciseNames)];
            const updatedExercises = prev.exercises.map(exercise => {
                return uniqueExerciseNames.includes(exercise.name) ? {
                    ...exercise,
                    history: exercise.history.filter(history => history.workoutId !== workoutId)
                } :
                    exercise
            })

            return {
                ...prev,
                history: prev.history.filter(history => history.workoutId !== workoutId),
                exercises: updatedExercises
            }
        })
    }

    function saveAsTemplate(history, newTemplateName) {
        saveData(prev => {
            const idHistory = uuidv4()
            const updatedExercises = history.exercises.map(exercise => {
                return {
                    ...exercise,
                    sets: exercise.sets.map(set => {
                        return {
                            ...set,
                            completed: false,
                            bestSet: false,
                            PRs: Object.fromEntries(Object.keys(set.PRs).map(metric => [metric, false]))
                        }
                    })
                }
            })

            return {
                ...prev,
                templates: [...prev.templates, { ...history, id: idHistory, name: newTemplateName, exercises: updatedExercises }],
                templateFolders: { ...prev.templateFolders, myTemplates: [...prev.templateFolders.myTemplates, idHistory] }
            }
        })
    }

    function renderHistoryCards() {
        const groupedWorkouts = {};

        data.history.forEach(history => {
            // KEY = 'YYYY-MM' format
            const year = new Date(history.date).getFullYear();
            const month = new Date(history.date).getMonth();
            const key = `${year}-${month.toString().padStart(2, '0')}`;

            if (!groupedWorkouts[key]) {
                groupedWorkouts[key] = {
                    year,
                    month,
                    workouts: []
                };
            }

            groupedWorkouts[key].workouts.push(history);
        });

        // Convert object to array for sorting
        const sortedGroups = Object.values(groupedWorkouts).sort((a, b) => {
            // Sort by year (descending)
            if (b.year !== a.year) {
                return b.year - a.year;
            }
            // If same year, sort by month (descending)
            return b.month - a.month;
        });

        if (data.history.length > 0) {
            return sortedGroups.map(group => {
                //?????
                const sortedWorkouts = group.workouts.sort((a, b) => new Date(b.date) - new Date(a.date));

                return <>
                    <div className='history__main__container-month'>
                        <p className='heading'>{`${months[group.month]} ${group.year}`}</p>
                        {sortedWorkouts.map(history => (
                            <>
                                <CardWorkoutHistory history={history} onClick={() => { setSelectedHistoryWorkoutModal(history.workoutId) }}
                                    showOptionsModal={showOptionsHistoryModal}
                                    setShowOptionsModal={setShowOptionsHistoryModal}
                                    handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', history, 'editSession')}
                                    setModalDeleteHistory={() => setModalDeleteHistory({ name: history.name, workoutId: history.workoutId })}
                                    setModalSaveAsTemplate={() => setModalSaveAsTemplate(history)} />
                                <ModalHistoryWorkout history={history} selectedModal={selectedHistoryWorkoutModal}
                                    setSelectedModal={setSelectedHistoryWorkoutModal}
                                    handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', history, 'editSession')} />
                            </>
                        ))}
                    </div>
                </>

            });
        }
        else {
            return <div className='container-no-records-found'>
                <div className='no-records-found'>
                    <div className='container-text'>
                        <div className='emoji'>🐥</div>
                        <div className='text'>
                            <h3>No Workouts Performed</h3>
                            <p>Completed workouts will appear here.</p>
                        </div>
                    </div>
                    <ButtonBig color='blueSoft' onClick={() => handleScreenChange('TemplatesScreen')}>Start Workout</ButtonBig>
                </div>
            </div>
        }

    };
    return (
        <>
            {modalSaveAsTemplate !== undefined && <ModalSaveAsTemplate history={modalSaveAsTemplate}
                setModalSaveAsTemplate={setModalSaveAsTemplate} saveAsTemplate={saveAsTemplate} />}
            {modalDeleteHistory !== undefined && <ModalDeleteHistory
                name={modalDeleteHistory.name} workoutId={modalDeleteHistory.workoutId}
                setModalDeleteHistory={setModalDeleteHistory} deleteWorkoutHistory={deleteWorkoutHistory} />}

            <div className='history__container'>
                <Navbar />
                <div className='history__main'>
                    <h1>History Screen</h1>
                    {renderHistoryCards()}
                </div>
            </div>
        </>
    )
}

export default HistoryScreen
