import '../css/buttons.scss';
import '../css/modals.scss';
import React from 'react'
import ButtonSmall from '../components/Buttons/ButtonSmall.jsx'
import ButtonBig from '../components/Buttons/ButtonBig.jsx'
import CardWorkoutTemplate from '../components/Cards/CardWorkoutTemplate.jsx'
import CardWorkoutHistory from '../components/Cards/CardWorkoutHistory.jsx'
import CardExerciseTracker from '../components/Cards/CardExerciseTracker.jsx'
import FolderList from '../OTHER/FoldersFunctionality.jsx'
import Navbar from '../components/Navbar.jsx'

import ModalOptionsTemplate from '../components/Modals/template/ModalOptionsTemplate.jsx'
import ModalOptionsHistory from '../components/Modals/template/ModalOptionsHistory.jsx'
import ModalOptionsFolder from '../components/Modals/template/ModalOptionsFolder.jsx'
import ModalOptionsEditTemplateScreen from '../components/Modals/template/ModalOptionsEditTemplateScreen.jsx'

import ModalDelete from '../components/Modals/boilerplate/ModalDelete.jsx'
import ModalDiscard from '../components/Modals/boilerplate/ModalDiscard.jsx'
import ModalSaveInputDescr from '../components/Modals/boilerplate/ModalSaveInputDescr.jsx'
import ModalSaveInputNoDescr from '../components/Modals/boilerplate/ModalSaveInputNoDescr.jsx'
import ModalSave from '../components/Modals/boilerplate/ModalSave.jsx'
import ModalAdd from '../components/Modals/boilerplate/ModalAdd.jsx'
import ModalSelect from '../components/Modals/template/ModalSelectFolder.jsx'
import ModalInputFolderName from '../components/Modals/template/ModalInputFolderName.jsx';
import ModalRenameTemplate from '../components/Modals/template/ModalRenameTemplate.jsx';
import ModalDeleteTemplate from '../components/Modals/template/ModalDeleteTemplate.jsx'

import ModalCancelWorkout from '../components/Modals/session/confirmation-modals/session/CancelWorkout.jsx'
import ModalDeleteWorkout from '../components/Modals/session/confirmation-modals/edit-session/DeleteWorkout.jsx'
import ModalDiscardTemplate from '../components/Modals/session/confirmation-modals/template/DiscardTemplate.jsx'
import ModalDeleteTemplate2 from '../components/Modals/session/confirmation-modals/template/DeleteTemplate.jsx'
import ModalRevertChanges from '../components/Modals/session/confirmation-modals/RevertChanges.jsx'


import { useData } from '../DataContext.jsx'
import SessionScreen from './SessionScreen.jsx'

import { v4 as uuidv4 } from 'uuid';

import { RoutingContext } from '../App.jsx'


function TestingScreen() {
    const useLocalStorage = useData()
    const [data, saveData] = useLocalStorage('userData')

    //#region
    const { handleScreenChange } = React.useContext(RoutingContext)

    const [selectedTemplate, setSelectedTemplate] = React.useState(null);
    /* SCREEN VARIANTS
    1. newSession ------new key
    2. editSession -----old key
    3. editTemplate   
    4. newEmptyTemplate
    5. newEmptySession -new key
    */
    const screenVariant = React.useRef(null);

    const newEmptySession = {
        id: uuidv4(),
        name: 'New Workout',
        duration: undefined,
        notes: undefined,
        lastDone: {},

        exercises: [
            {
                name: 'Testing Exercise',
                sets:
                    [
                        {
                            id: '0plkjn',
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 0,
                            completed: false,
                            PRs: { '1RM': false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: '876tg',
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 0,
                            completed: false,
                            PRs: { '1RM': false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]

            }
        ]
    }
    const temporary = <div className="container-app">
        <div className="div-header">
            <h1>Start Workout</h1>
        </div>

        <div className="library-container-quick-start">
            <h4>Quick Start</h4>
            <ButtonBig color='blue' size='chunky'>Start an Empty Workout</ButtonBig>
            <CardWorkoutTemplate />

            <div>

                {/*newSession*/}
                {data.templates.map((template, index) => (
                    <ButtonBig color='green' size='hug'
                        onClick={() => {
                            // setSelectedTemplate({ ...data.templates[index], workoutId: uuidv4() });
                            // screenVariant.current = 'newSession';
                            handleScreenChange('SessionScreen', { ...data.templates[index], workoutId: uuidv4() }, 'newSession');

                        }}>
                        {`New Session ${template.name}`}
                    </ButtonBig>

                ))}

                {/*editSession*/}
                {data.history.map((history, index) => (
                    <ButtonBig color='blue' size='hug'
                        onClick={() => {
                            // setSelectedTemplate(data.history[index]);
                            // screenVariant.current = 'editSession';
                            handleScreenChange('SessionScreen', { ...data.history[index] }, 'editSession');
                        }}>
                        {`Edit Session ${history.name}`}
                    </ButtonBig>

                ))}

                {/*editTemplate*/}
                {data.templates.map((template, index) => (
                    <ButtonBig color='blueSoft' size='hug'
                        onClick={() => {
                            // setSelectedTemplate({ ...data.templates[index], workoutId: uuidv4() });
                            // screenVariant.current = 'editTemplate';
                            handleScreenChange('SessionScreen', { ...data.templates[index], workoutId: uuidv4() }, 'editTemplate');

                        }}>
                        {`Edit Template ${template.name}`}
                    </ButtonBig>

                ))}


                {/*newEmptySession*/}
                <ButtonBig color='blue' size='hug'
                    onClick={() => {
                        // setSelectedTemplate({ ...newEmptySession, name: 'New Workout', workoutId: uuidv4() });
                        // screenVariant.current = 'newEmptySession';
                        handleScreenChange('SessionScreen', { ...newEmptySession, name: 'New Workout', workoutId: uuidv4() }, 'newEmptySession');

                    }}>
                    New Empty Workout
                </ButtonBig>


                {/*newEmptyTemplate*/}
                <ButtonBig color='blueSoft' size='hug'
                    onClick={() => {
                        // setSelectedTemplate({ ...newEmptySession, name: 'New Template' });
                        // screenVariant.current = 'newEmptyTemplate';
                        handleScreenChange('SessionScreen', { ...newEmptySession, name: 'New Template' }, 'newEmptyTemplate');
                    }}>
                    New Empty Template
                </ButtonBig>






                {selectedTemplate && <SessionScreen template={selectedTemplate} screenVariant={screenVariant.current} />}

                <FolderList />
            </div>
        </div>
        <div className="library-main-section">
            <div className="library-main-section-header">

                <button>1</button>
                <ButtonSmall type='options1' />

            </div>
            <div className="library-main-section-content">

            </div>
        </div>

    </div>

    const allModals =
        <div>
            <h1>hello</h1>
            {/* Options modals on templates screen */}
            <ModalOptionsTemplate />
            <ModalOptionsHistory />
            <ModalOptionsFolder />
            <ModalOptionsEditTemplateScreen />
            {/* Add new folder (has an inputfield) */}
            <ModalAdd />
            {/* Select folder */}
            <ModalSelect />

            {/* FIXED POSITION MODALS */}
            <ModalDelete />
            <ModalDiscard />
            <ModalSave />

            {/* Save new template? Choose name for template + inputfield */}
            <ModalSaveInputDescr />
            {/* Choose template name + inputfield */}
            <ModalSaveInputNoDescr />
        </div>
    const optionsModals =
        <div>
            {/* Options modals on templates screen */}
            <ModalOptionsTemplate />
            <ModalOptionsHistory />
            <ModalOptionsFolder />
            <ModalOptionsEditTemplateScreen />
        </div>
    //#endregion


    function saveToHistory() {
        //--------------------------APPENDING WORKOUT TO HISTORY--------------------------
        const filteredExercises = exercises.filter(exercise => exercise.sets.some(set => set.completed === true))
            .map(exercise => {
                return {
                    ...exercise,
                    sets: exercise.sets.filter(set => set.completed === true)
                };
            });
        let exercisesNewPRs = {};
        let totalPRs = 0;
        let totalVolume = 0;
        let totalReps = 0;
        console.log('filteredExercises:', filteredExercises)
        const workoutHistoryExercises = [
            ...filteredExercises.map(exercise => {
                const exerciseName = exercise.name;
                const exerciseData = data.exercises.find(ex => ex.name === exerciseName);
                if (exerciseData) {
                    exercisesNewPRs = {
                        ...exercisesNewPRs,
                        [exerciseName]: { ...exerciseData.PRs }
                    }
                    const prKeys = Object.keys(exerciseData.PRs);

                    prKeys.forEach(prKey => {

                        function getPRValue(set) {
                            const reps = Number(Number(set.reps).toFixed(1))
                            const weight = Number(Number(set.weight).toFixed(1))
                            const oneRepMax = reps < 37 ? weight * (36 / (37 - reps)) : 0
                            const eliteRatio = exerciseData.thresholds === undefined ? undefined : exerciseData.thresholds[data.user.sex].elite
                            const strengthScore = eliteRatio === undefined || oneRepMax === 0 ? 0 : Math.min(100, (oneRepMax / (userCurrentWeight.current * eliteRatio) * 100))
                            switch (prKey) {
                                case 'volume': return Number((reps * weight).toFixed(1));
                                case '1RM': return Number(oneRepMax.toFixed(1));
                                case 'strengthScore': return Number(strengthScore.toFixed(1));
                                default: return Number(set[prKey]);
                            }
                        };

                        let highestValue = Math.max(...exercise.sets.map(set => getPRValue(set)));
                        let assigned = false;

                        exercise.sets.forEach(set => {
                            if (!set.PRs) {
                                set.PRs = {};
                                Object.keys(exerciseData.PRs).forEach(prKey => {
                                    set.PRs[prKey] = false;
                                });
                            }

                            const value = getPRValue(set);
                            //total volume + reps for workout
                            if (prKey === 'volume') {
                                totalVolume += value;
                            }
                            if (prKey === 'reps') {
                                totalReps += value;
                            }
                            //identifying best set in exercise
                            if (value === highestValue && !assigned && prKey === exerciseData.prMetric) {
                                set.bestSet = true;
                            }
                            //main logic: identifying which set broke the PR
                            if (value === highestValue && !assigned && value > exerciseData.PRs[prKey]) {
                                set.PRs[prKey] = true;
                                assigned = true;
                                exercisesNewPRs = {
                                    ...exercisesNewPRs,
                                    [exerciseName]: { ...exercisesNewPRs[exerciseName], [prKey]: value }
                                }
                                totalPRs++
                            } else {
                                set.PRs[prKey] = false;
                            }

                        });
                    });

                    return exercise;
                }
            })
        ]
        console.log('TEMPLATE NAME', templateName.current.value)
        saveData(prevData => {
            return {
                ...prevData,
                history: [
                    ...prevData.history.map(history => {
                        if (history.workoutId === workoutId) {
                            return {
                                ...history,
                                name: templateName.current.value,
                                notes: notes.current.value,

                                exercises: workoutHistoryExercises,
                                PRs: totalPRs,
                                volume: totalVolume,
                                reps: totalReps,
                            }
                        }
                        else return history
                    })
                ],
            }
        })



        //--------------------------UPDATING EXERCISE OBJECT--------------------------
        let updatedExerciseObjects = {}
        console.log('workoutHistoryExercises1', workoutHistoryExercises)
        workoutHistoryExercises.forEach(exercise => {
            const exerciseName = exercise.name;
            const exerciseData = data.exercises.find(ex => ex.name === exerciseName);
            const history = exerciseData.history.find(history => history.workoutId === workoutId);

            exerciseData && history ?
                updatedExerciseObjects = {
                    ...updatedExerciseObjects,
                    [exerciseName]: {
                        ...history,
                        newPRs: exercisesNewPRs[exerciseName],
                        sets: [
                            ...history.sets,
                            ...exercise.sets.map(set => (
                                {
                                    weight: set.weight,
                                    reps: set.reps,
                                    PRs: set.PRs
                                }
                            ))
                        ]
                    }
                }
                :
                updatedExerciseObjects = {
                    ...updatedExerciseObjects,
                    [exerciseName]: {
                        currentWeight: userCurrentWeight.current,
                        currentPRs: exerciseData.PRs,
                        newPRs: exercisesNewPRs[exerciseName],
                        date: currentDate,
                        workoutId: workoutId,
                        sets: [
                            ...exercise.sets.map(set => (
                                {
                                    weight: set.weight,
                                    reps: set.reps,
                                    PRs: set.PRs
                                }
                            ))
                        ]
                    }
                }

            console.log('workoutHistoryExercises2', workoutHistoryExercises)

            saveData(prevData => {
                return {
                    ...prevData,

                    exercises: data.exercises.map((exercise) => {
                        if (exercise.name in updatedExerciseObjects) {

                            return {
                                ...exercise,
                                PRs: exercisesNewPRs[exercise.name],
                                history: exercise.history.find(history => history.workoutId === template.workoutId) ?
                                    [...exercise.history.map(history => {
                                        if (history.workoutId === workoutId) {
                                            return updatedExerciseObjects[exercise.name]
                                        }
                                        else return history
                                    })]
                                    :

                                    [...exercise.history, updatedExerciseObjects[exercise.name]]
                            }
                        }
                        else return exercise
                    }
                    )
                }
            })
        })
    }

    function updatePRs(history) {
        let updatedHistory = history




        return updatedHistory
    }
    const editedHistory = data.history[1]
    function saveEditedWorkout(editedHistory) {
        const allHistories = [...data.history]
        const workoutId = editedHistory.workoutId
        const splitIndex = allHistories.findIndex(history => history.workoutId === workoutId);

        // Split the array
        const unaffectedHistories = allHistories.slice(0, splitIndex);
        const editedHistories = allHistories.slice(splitIndex);
        return unaffectedHistories
    }

    console.log(saveEditedWorkout(editedHistory))

    return (<>
        <Navbar />
        <div className="container-app">
            <h2>hello</h2>
            {/* <ModalInputFolderName /> */}
            {/* <ModalDeleteTemplate /> */}
            {/* <ModalRenameTemplate /> */}
            {/* {temporary} */}
            {/* {optionsModals} */}
            {/* {allModals} */}
            {/* <ModalDelete /> */}
            {/* <ModalDiscard /> */}

            {/* <ModalCancelWorkout /> */}
            {/* <ModalDeleteWorkout /> */}
            {/* <ModalDiscardTemplate /> */}
            {/* <ModalDeleteTemplate2 /> */}
            {/* <ModalRevertChanges /> */}
        </div>
    </>
    )


}

export default TestingScreen