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
import { format, compareAsc, compareDesc } from 'date-fns';
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

    function updWorkoutHistoryAndGenExHistory(exerciseName, workoutHistory, currentPRs, thresholds, userWeight, prMetric) {
        const filteredExercises = workoutHistory.exercises.filter(exercise => exercise.sets.some(set => set.completed === true))
            .map(exercise => ({ ...exercise, sets: exercise.sets.filter(set => set.completed === true) }))

        filteredExercises.find(ex => ex.name === exerciseName).sets.forEach(set => set.bestSet = false);
        let exercisesNewPRs = currentPRs;
        let totalPRs = 0;
        let totalVolume = 0;
        let totalReps = 0;

        const workoutHistoryExercises = filteredExercises.map(exercise => {
            const prKeys = Object.keys(currentPRs);
            let assignedPRs = Object.fromEntries(prKeys.map(key => [key, false]));;

            const setsPRs = exercise.sets.map(set => {
                /*setsPR will look like this:
                [{bestSet: true, PRs: {weight: true, reps: false...}, 
                 {bestSet: false, PRs: {weight: false, reps: false...},...
                ]*/

                let setBestValue = false

                const setPRs = prKeys.map(prKey => {
                    /* setPR will look like this (will remove nested objects after .map func):
                    [{weight: true}, {reps: false}, {volume: true}...]*/
                    function getPRValue(set) {
                        const reps = Number(Number(set.reps).toFixed(1))
                        const weight = Number(Number(set.weight).toFixed(1))
                        const oneRepMax = reps < 37 ? weight * (36 / (37 - reps)) : 0
                        const eliteRatio = thresholds === undefined ? undefined : thresholds[data.user.sex].elite
                        const strengthScore = eliteRatio === undefined || oneRepMax === 0 ? 0 : Math.min(100, (oneRepMax / (userWeight * eliteRatio) * 100))
                        switch (prKey) {
                            case 'volume': return Number((reps * weight).toFixed(1));
                            case '1RM': return Number(oneRepMax.toFixed(1));
                            case 'strengthScore': return Number(strengthScore.toFixed(1));
                            default: return Number(set[prKey]);
                        }
                    };

                    let highestValue = Math.max(...exercise.sets.map(set => getPRValue(set)));

                    const value = getPRValue(set);
                    //total volume + reps for workout
                    if (prKey === 'volume') {
                        totalVolume += value;
                    }
                    if (prKey === 'reps') {
                        totalReps += value;
                    }

                    //identifying best set in exercise
                    if (value === highestValue && !assignedPRs[prKey] && prKey === prMetric) {
                        setBestValue = true;
                    }
                    //main logic: identifying which set broke the PR
                    if (value === highestValue && !assignedPRs[prKey] && value > currentPRs[prKey]) {
                        assignedPRs[prKey] = true;
                        exercisesNewPRs = {
                            ...exercisesNewPRs,
                            [prKey]: value
                        }
                        totalPRs++
                        return { [prKey]: true }

                    } else return { [prKey]: false }


                });

                return { PRs: Object.assign({}, ...setPRs), bestSet: setBestValue }
            });

            return exercise.name === exerciseName ?
                { ...exercise, sets: exercise.sets.map((set, index) => ({ ...set, PRs: setsPRs[index].PRs, bestSet: setsPRs[index].bestSet })) }
                : exercise

        })

        const updatedWorkoutHistory = {
            exercises: workoutHistoryExercises,
            PRs: totalPRs,
            volume: totalVolume,
            reps: totalReps
        }

        const exerciseData = data.exercises.find(ex => ex.name === exerciseName);
        const orginalExerciseHistory = exerciseData.history.find(history => history.workoutId === workoutHistory.workoutId);
        const newExerciseHistory = {
            ...orginalExerciseHistory,
            currentPRs: currentPRs,
            newPRs: exercisesNewPRs,
            sets: [
                ...updatedWorkoutHistory.exercises.find(ex => ex.name === exerciseName).sets.map(set => (
                    {
                        weight: set.weight,
                        reps: set.reps,
                        PRs: set.PRs
                    }
                ))
            ]
        }
        return [updatedWorkoutHistory, newExerciseHistory]
    }

    function deleteWorkoutHistory(deletedHistoryWorkoutId) {
        const deletedHistory = data.history.find(history => history.workoutId === deletedHistoryWorkoutId)
        const deletedExerciseNames = [...new Set(deletedHistory.exercises.map(ex => ex.name))];

        //Will output exercises with corresponding new global PRs and entire (updated) histories:
        /* {
             "Squat":      {PRs: undefined, history: undefined},
             "Hip Thrust": {PRs: undefined, history: undefined}
            } */
        let updatedExercises = Object.assign({}, ...deletedExerciseNames.map(exerciseName => ({ [exerciseName]: { PRs: undefined, history: undefined } })))

        let updatedWorkoutHistories = []

        deletedExerciseNames.forEach(exerciseName => {
            const exerciseData = data.exercises.find(ex => ex.name === exerciseName)
            const exerciseThresholds = exerciseData.thresholds
            const exercisePrMetric = exerciseData.prMetric
            const orignalExHistories = exerciseData.history.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));

            let splitIndex = orignalExHistories.findIndex(history => history.workoutId === deletedHistoryWorkoutId);
            const unaffectedExHistories = orignalExHistories.slice(0, splitIndex - 1);
            let affectedExHistories = orignalExHistories.slice(splitIndex - 1)
            affectedExHistories.splice(1, 1)

            const updatedAffectedExHistories = []
            const affectedHistoriesWorkoutIds = affectedExHistories.map(history => history.workoutId)
            let currentPRs = affectedExHistories[0].currentPRs

            affectedHistoriesWorkoutIds.forEach(workoutId => {
                const newCurrentPRs = currentPRs
                const affectedHistory = affectedExHistories.find(history => history.workoutId === workoutId)
                const userCurrentWeight = affectedHistory.currentWeight
                let isInUpdatedWorkoutHistories = false
                let orignalWorkoutHistory = updatedWorkoutHistories.find(history => history.workoutId === workoutId)
                let editedWorkoutHistory

                if (orignalWorkoutHistory === undefined) {
                    isInUpdatedWorkoutHistories = false
                    editedWorkoutHistory = data.history.find(history => history.workoutId === workoutId)
                }
                else {
                    isInUpdatedWorkoutHistories = true
                    editedWorkoutHistory = orignalWorkoutHistory
                }

                /*updatedPropertiesHistory will look like this:
                  {
                    exercises: *updated exercises,
                    PRs: 10,
                    volume: 300,
                    reps: 10
                  }
                  updatedPropertiesHistory will look like this:
                {
                    date: ...,
                    currentWeight: ...,
                    workoutId: ...,
                    currentPRs: { "1RM": 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
                    newPRs: { "1RM": 1, weight: 1, reps: 1, volume: 1, strengthScore: 0.4 },
                    sets: [
                        { weight: 1, reps: 1, PRs: { "1RM": true, reps: true...} },
                        { weight: 1, reps: 1, PRs: { "1RM": false, reps: false...} },
                        { weight: 1, reps: 1, PRs: { "1RM": false, reps: false...} },
                    ]
                },
                  */
                const [updatedPropertiesHistory, newExerciseHistory] = updWorkoutHistoryAndGenExHistory(exerciseName, editedWorkoutHistory, newCurrentPRs, exerciseThresholds, userCurrentWeight, exercisePrMetric)
                const updatedWorkoutHistory = { ...editedWorkoutHistory, ...updatedPropertiesHistory }
                currentPRs = newExerciseHistory.newPRs
                updatedAffectedExHistories.push(newExerciseHistory)

                if (isInUpdatedWorkoutHistories === false) {
                    updatedWorkoutHistories.push(updatedWorkoutHistory)
                }
                else {
                    const historyIndex = updatedWorkoutHistories.findIndex(history => history.workoutId === workoutId);
                    updatedWorkoutHistories[historyIndex] = updatedWorkoutHistory

                }
            })
            updatedExercises = { ...updatedExercises, [exerciseName]: { PRs: currentPRs, history: [...unaffectedExHistories, ...updatedAffectedExHistories] } }

        })


        const updatedExerciseNames = Object.keys(updatedExercises);
        const updatedExercisesObject = data.exercises.map(exercise => (
            updatedExerciseNames.includes(exercise.name) ?
                { ...exercise, ...updatedExercises[exercise.name] } :
                exercise
        ))
        const updatedHistoryObject = data.history.map(history => {
            const updatedWorkoutHistory = updatedWorkoutHistories.find(updatedWorkoutHistory => updatedWorkoutHistory.workoutId === history.workoutId)
            return updatedWorkoutHistory === undefined ? history : updatedWorkoutHistory
        }).filter(history => history.workoutId !== deletedHistoryWorkoutId)

        const updatedStrengthScores = structuredClone(data.strengthScores);
        Object.entries(updatedExercises).forEach(([exerciseName, updatedData]) => {
            Object.values(updatedStrengthScores).forEach(muscleGroup => {
                if (exerciseName in muscleGroup) {
                    muscleGroup[exerciseName] = updatedData.PRs.strengthScore;
                }
            });
        });

        saveData(prev => ({
            ...prev,
            history: updatedHistoryObject,
            exercises: updatedExercisesObject,
            strengthScores: updatedStrengthScores
        }))
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
        const groupedWorkouts = {}

        data.history.forEach(history => {
            const date = new Date(history.date)
            const key = format(date, 'yyyy-MM')
            const year = date.getFullYear()
            const month = date.getMonth()

            if (!groupedWorkouts[key]) {
                groupedWorkouts[key] = {
                    year,
                    month,
                    workouts: []
                };
            }
            groupedWorkouts[key].workouts.push(history);
        });

        const sortedGroups = Object.values(groupedWorkouts).sort((a, b) => {
            const dateA = new Date(a.year, a.month)
            const dateB = new Date(b.year, b.month)
            return compareDesc(dateA, dateB)
        });

        if (data.history.length > 0) {
            return sortedGroups.map(group => {

                const sortedWorkouts = group.workouts.sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return compareDesc(dateA, dateB);
                });

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
