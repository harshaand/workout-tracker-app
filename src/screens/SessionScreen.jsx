import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import isEqual from 'lodash/isEqual';
import { compareAsc } from 'date-fns';
import '../css/buttons.scss';
import '../css/modals.scss';
import '../css/screens.scss'

import ButtonSmall from '../components/Buttons/ButtonSmall.jsx'
import ButtonBig from '../components/Buttons/ButtonBig.jsx'
import FolderList from '../OTHER/FoldersFunctionality.jsx'

import CardExerciseTracker from '../components/Cards/CardExerciseTracker.jsx'
import ModalAddExercises from '../components/Modals/session/content-modals/AddExercises.jsx'
import ModalCreateExercise from '../components/Modals/session/content-modals/CreateExercise.jsx'

import ModalFinishWorkout from '../components/Modals/session/confirmation-modals/session/FinishWorkout.jsx'
import ModalSaveWorkout from '../components/Modals/session/confirmation-modals/edit-session/SaveEditedWorkout.jsx'
import ModalSaveTemplate from '../components/Modals/session/confirmation-modals/template/SaveEditedTemplate.jsx'
import ModalSaveAsNewTemplate from '../components/Modals/session/confirmation-modals/finished-session/SaveAsNewTemplate.jsx'
import FinishedWorkoutScreen from './FinishedWorkoutScreen.jsx'

import ModalCancelWorkout from '../components/Modals/session/confirmation-modals/session/CancelWorkout.jsx'
import ModalRevertChanges from '../components/Modals/session/confirmation-modals/RevertChanges.jsx'
import ModalDiscardTemplate from '../components/Modals/session/confirmation-modals/template/DiscardTemplate.jsx'
import ModalDeleteTemplate from '../components/Modals/session/confirmation-modals/template/DeleteTemplate.jsx'
import ModalDeleteWorkout from '../components/Modals/session/confirmation-modals/edit-session/DeleteWorkout.jsx'

import { useData } from '../DataContext.jsx'

import { RoutingContext } from '../App.jsx'

function SessionScreen({ template, screenVariant = 'newSession', folderId = undefined }) {
    /* SCREEN VARIANTS
        1. newSession ------new key
        2. editSession -----old key
        3. editTemplate   
        4. newEmptyTemplate
        5. newEmptySession -new key*/

    const useLocalStorage = useData()
    const [data, saveData] = useLocalStorage('userData')
    const [sessionDuration, setSessionDuration] = React.useState(0);
    const intervalRef = React.useRef(null);
    const { handleScreenChange } = React.useContext(RoutingContext)
    const [exercises, setExercises] = React.useState(template.exercises)
    const [showAddExercisesModal, setShowAddExercisesModal] = React.useState(false)
    const [showCreateExerciseModal, setShowCreateExerciseModal] = React.useState(false)

    //Finish modals
    const [showFinishModal, setShowFinishModal] = React.useState(false)
    const [showCloseModal, setShowCloseModal] = React.useState(false)
    const [showDeleteModal, setShowDeleteModal] = React.useState(false)

    const workoutId = template.workoutId
    const currentDate = new Date();

    const currentWeightInExHistory = React.useRef(null)
    const userCurrentWeight = React.useRef(null)

    const templateName = React.useRef(null)
    const notes = React.useRef(null)

    React.useEffect(() => {
        if (screenVariant === 'newSession' || screenVariant === 'newEmptySession') {
            intervalRef.current = setInterval(() => {
                setSessionDuration(prev => prev + 1);
            }, 1000);
        }

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                templateName.current.blur();
                notes.current.blur();
            }
        };
        const templateNameTextArea = templateName.current;
        const templateNotesTextArea = notes.current;
        if (notes.current) autoResizeTextArea(notes.current);
        if (templateNameTextArea) templateNameTextArea.addEventListener('keydown', handleKeyDown)
        if (templateNotesTextArea) templateNotesTextArea.addEventListener('keydown', handleKeyDown)



        currentWeightInExHistory.current = exercises.map(exercise => {
            const exWithUserWeight = data.exercises.find(ex => ex.name === exercise.name)?.history.find(history => history.workoutId === template.workoutId);
            return exWithUserWeight?.currentWeight;
        }).find(weight => weight !== undefined);

        userCurrentWeight.current = currentWeightInExHistory.current === undefined ? data.user.weight : currentWeightInExHistory.current




        return () => {
            clearInterval(intervalRef.current)
            if (templateNameTextArea) templateNameTextArea.removeEventListener('keydown', handleKeyDown)
            if (templateNotesTextArea) templateNotesTextArea.removeEventListener('keydown', handleKeyDown)
        };

    }, [])

    function formatTime(totalSeconds) {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        const paddedHrs = String(hrs).padStart(1, '0');
        let paddedMins = String(mins).padStart(1, '0');
        const paddedSecs = String(secs).padStart(2, '0');

        if (hrs > 0) {
            paddedMins = String(mins).padStart(2, '0');
            return `${paddedHrs}:${paddedMins}:${paddedSecs}`; // hh:mm:ss
        } else {
            return `${paddedMins}:${paddedSecs}`; // mm:ss
        }
    };

    function toggleSetCompleted(exerciseName, setNum) {
        setExercises(prevExercises => (
            prevExercises.map(exercise => exercise.name === exerciseName ?
                {
                    ...exercise,
                    sets: exercise.sets.map(set => set.num === setNum ? { ...set, completed: !set.completed } : set)
                } :
                exercise)
        ))
    }

    function addSet(exerciseName) {
        setExercises(prevExercises => {
            return prevExercises.map(exercise => {
                if (exercise.name === exerciseName) {
                    let newSet = {
                        id: uuidv4(),
                        weight: 0,
                        reps: 0,
                        completed: false
                    };

                    const prevSetNum = exercise.sets[exercise.sets.length - 1].num
                    //prevSetNum === 0 means it's a warmup set (set.num === 0 means it doesn't count as a set)
                    if (prevSetNum === 0) {
                        for (let i = exercise.sets.length - 2; i >= 0; i--) {
                            const setNum = exercise.sets[i].num
                            if (setNum > 0) {
                                newSet = {
                                    ...newSet,
                                    value: setNum + 1,
                                    num: exercise.sets[i].num + 1,
                                };
                                break
                            }
                            else {
                                newSet = {
                                    ...newSet,
                                    value: 1,
                                    num: 1,
                                };
                            }
                        }
                    }
                    // if there are no sets before
                    else if (prevSetNum === undefined) {
                        newSet = {
                            ...newSet,
                            value: 1,
                            num: 1,
                        };
                    }
                    // if previous set is a normal set (not a warmup set)
                    else {
                        newSet = {
                            ...newSet,
                            value: prevSetNum + 1,
                            num: prevSetNum + 1,
                        };
                    }

                    return {
                        ...exercise,
                        sets: [...exercise.sets, newSet]
                    };
                }
                else return exercise
            });
        });
    };

    function deleteSet(exerciseName, setID) {
        setExercises(prevExercises => {
            return prevExercises.map(exercise => {
                if (exercise.name === exerciseName) {
                    const deletedSet = exercise.sets.find(set => set.id === setID)
                    const deletedSetIndex = exercise.sets.findIndex(set => set.id === setID)
                    const updatedSets = exercise.sets.filter(set => set.id !== setID);
                    const reorderedSets = updatedSets.map((set, index) => (
                        index < deletedSetIndex ? set :
                            {
                                ...set,
                                num: set.num - 1,
                                value: (!isNaN(Number(set.value)) && set.value !== '') || (set.value === "W") ?
                                    set.value - 1 :
                                    set.value
                            }));

                    return {
                        ...exercise,
                        sets: deletedSet.value === "W" ? updatedSets : reorderedSets
                    };
                }
                else { return exercise; }
            });
        });
    };

    function createExercise(exerciseName, targetMuscleGroups, prMetric) {
        saveData(prevData => {
            //Adding new (created) exercise to strength scores object under correct muscle groups in main data object
            const updatedStrengthScores = { ...prevData.strengthScores };
            targetMuscleGroups.forEach(muscleGroup => {
                if (updatedStrengthScores[muscleGroup]) {
                    updatedStrengthScores[muscleGroup] = {
                        ...updatedStrengthScores[muscleGroup],
                        [exerciseName]: 'not eligible'
                    };
                }
            });
            //Adding new (created) exercise to the exercises object in main data object
            return {
                ...prevData,
                exercises: [
                    ...prevData.exercises,
                    {
                        name: exerciseName,
                        prMetric: prMetric,
                        PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0 },
                        thumbnail: '',
                        instructions: { media: '', text: '' },
                        history: []
                    }
                ],
                strengthScores: updatedStrengthScores
            }
        })
        setShowAddExercisesModal(false)
    }

    function addExercises(exercises) {
        exercises = [...new Set(exercises)]
        exercises.forEach(selectedExercise => {
            //Adding exercise to workout's history. User can decide to add it to template later on the finishing screen
            /* getting reps and weight of the added exercise from most recent set from exercise's history IF it does exist. 
            If not, weight & reps = 0 */
            const weight = data.exercises.find(exercise => exercise.name === selectedExercise).history?.at(-1)?.sets?.at(0)?.weight
            const reps = data.exercises.find(exercise => exercise.name === selectedExercise).history?.at(-1)?.sets?.at(0)?.reps
            const exercisePRs = data.exercises.find(exercise => exercise.name === selectedExercise)?.PRs
            const setPRs = Object.fromEntries(Object.keys(exercisePRs).map(key => [key, false]));
            setExercises(prevExercises => (
                [
                    ...prevExercises,
                    {
                        id: uuidv4(),
                        name: selectedExercise,
                        sets:
                            [
                                {
                                    id: uuidv4(),
                                    value: 1,
                                    num: 1,
                                    weight: weight === undefined ? 0 : weight,
                                    reps: reps === undefined ? 0 : reps,
                                    completed: false,
                                    PRs: setPRs,
                                    bestSet: false
                                }
                            ]
                    }
                ]
            ))
        })
        setShowAddExercisesModal(false)
    }

    function handleOptionClick(option, exerciseName, setId) {
        setExercises(prevExercises => {
            return prevExercises.map(exercise => {
                if (exercise.name === exerciseName) {
                    const setIndex = exercise.sets.findIndex(set => set.id === setId);
                    if (setIndex === -1) return exercise;
                    const newSets = [...exercise.sets];
                    //if ANYTHING + [W] -> W
                    if (option === 'W' && newSets[setIndex].value !== 'W') {
                        newSets[setIndex] = {
                            ...newSets[setIndex],
                            value: 'W',
                            num: 0,
                        };
                        //decrement all .num & .value (if its a number) of following sets because W doesn't count as a set (.num = 0)
                        for (let i = setIndex + 1; i < newSets.length; i++) {
                            const val = newSets[i].value;
                            const newVal = !isNaN(val) ? newSets[i].value - 1 : newSets[i].value;
                            const newNum = newSets[i].num > 0 ? newSets[i].num - 1 : newSets[i].num
                            newSets[i] = {
                                ...newSets[i],
                                value: newVal,
                                num: newNum
                            };

                        }
                    }

                    // if 
                    // W + [W] -> NUMBER
                    else if (option === 'W' && newSets[setIndex].value === 'W') {
                        let newNum = undefined

                        //find next .num
                        for (let i = setIndex + 1; i < newSets.length; i++) {
                            if (newSets[i].num > 0) {
                                newNum = newSets[i].num
                                break
                            }
                        }
                        // if can't find valid number infront, look behind
                        if (newNum === undefined) {
                            for (let i = setIndex - 1; i >= 0; i--) {
                                if (newSets[i].num > 0) {
                                    newNum = newSets[i].num + 1
                                    break
                                }
                            }
                        }
                        // if can't find a valid number anywhere, newNum = 1
                        if (newNum === undefined) {
                            newNum = 1
                        }
                        const newSet = {
                            ...newSets[setIndex],
                            value: newNum,
                            num: newNum,
                        };
                        newSets[setIndex] = newSet

                        //increment all following sets
                        for (let i = setIndex + 1; i < newSets.length; i++) {
                            const val = newSets[i].value;
                            newSets[i] = {
                                ...newSets[i],
                                value: !isNaN(val) ? newSets[i].value + 1 : newSets[i].value,
                                num: newSets[i].num > 0 ? newSets[i].num + 1 : newSets[i].num
                            };
                        }
                    }

                    // if 
                    // W + [D/F]-> D/F
                    else if (option !== 'W' && newSets[setIndex].value === 'W') {
                        let newNum = undefined

                        //find next .num
                        for (let i = setIndex + 1; i <= newSets.length - 1; i++) {
                            if (newSets[i].num > 0) {
                                newNum = newSets[i].num
                                break
                            }
                        }
                        // if can't find valid number infront of it, look behind
                        if (newNum === undefined) {
                            for (let i = setIndex - 1; i >= 0; i--) {
                                if (newSets[i].num > 0) {
                                    newNum = newSets[i].num + 1
                                    break
                                }
                            }
                        }
                        // if can't find a valid number anywhere, newNum = 1
                        if (newNum === undefined) newNum = 1
                        const newSet = {
                            ...newSets[setIndex],
                            value: option,
                            num: newNum,
                        };
                        newSets[setIndex] = newSet

                        //increment all following sets
                        for (let i = setIndex + 1; i < newSets.length; i++) {
                            const val = newSets[i].value;
                            newSets[i] = {
                                ...newSets[i],
                                value: !isNaN(val) ? val + 1 : newSets[i].value,
                                num: newSets[i].num > 0 ? newSets[i].num + 1 : newSets[i].num
                            };
                            //new set number = get next set's number then decrement (after incrementing following sets)
                            if (newSets[i].num !== 0 && newSets[setIndex].value === 'W') {
                                newSets[setIndex] = {
                                    ...newSets[setIndex],
                                    value: option,
                                    num: newSets[i].num - 1,
                                };
                            }
                        }
                    }

                    // if (corresponding)
                    // D/F + [D/F]-> NUMBER
                    else if (option === newSets[setIndex].value) {
                        newSets[setIndex] = {
                            ...newSets[setIndex],
                            value: newSets[setIndex].num,
                        };
                    }

                    // if (corresponding)
                    // NUMBER + [D/F]-> D/F
                    else {
                        newSets[setIndex] = {
                            ...newSets[setIndex],
                            value: option,
                        };
                    }

                    return {
                        ...exercise,
                        sets: newSets
                    };
                }
                return exercise;
            });
        });

    };

    function saveTemplateValues(exerciseName, setId, weight, reps) {
        setExercises(prevExercises => (
            prevExercises.map(exercise => {
                weight = Number(Number(weight).toFixed(1))
                reps = Number(Number(reps).toFixed(1))
                return exercise.name === exerciseName ?
                    {
                        ...exercise,
                        sets: exercise.sets.map(set => set.id === setId ? { ...set, weight: weight, reps: reps } : set)
                    } :
                    exercise
            })
        ))
    }

    function handleUpdateTemplate() {
        const finalExercises = exercises.map(exercise => {
            return {
                ...exercise,
                sets: exercise.sets.map(set => {
                    return {
                        ...set,
                        completed: false
                    }
                })
            }
        })
        saveData(prevData => {
            const templateExists = prevData.templates.find(templ => templ.id === template.id) ? true : false
            const updatedTemplates = templateExists ? prevData.templates.map((templ) => {
                if (templ.id === template.id) return {
                    ...templ,
                    name: templateName.current.value.replace(/\s+/g, '') === '' ? 'New Template' : templateName.current.value,
                    notes: notes.current.value,
                    exercises: finalExercises
                }
                else return templ
            })
                : [
                    ...prevData.templates,
                    {
                        ...template,
                        name: templateName.current.value.replace(/\s+/g, '') === '' ? 'New Template' : templateName.current.value,
                        notes: notes.current.value,
                        exercises: finalExercises
                    }
                ]

            let updatedFolders = prevData.templateFolders
            if (screenVariant === 'newEmptySession' || screenVariant === 'newEmptyTemplate') {
                if (folderId === undefined) updatedFolders = prevData.templateFolders
                else {
                    if (folderId === 'myTemplates') {
                        updatedFolders = {
                            ...prevData.templateFolders,
                            myTemplates: [...prevData.templateFolders.myTemplates, template.id]
                        }
                    }
                    else {
                        const existingFolder = prevData.templateFolders.userCreatedFolders.find(folder => folder.id === folderId);

                        if (existingFolder) {
                            const updatedUserCreatedFolders = prevData.templateFolders.userCreatedFolders.map(folder => {
                                return folder.id === folderId ?
                                    { ...folder, templates: [...folder.templates, template.id] }
                                    : folder
                            })
                            updatedFolders = { ...prevData.templateFolders, userCreatedFolders: updatedUserCreatedFolders }
                        }
                        //DONT THINK THIS IS NEEDED
                        /* else {
                            updatedFolders = {
                                ...prevData.templateFolders,
                                userCreatedFolders: [
                                    ...prevData.templateFolders.userCreatedFolders,
                                    { id: folderId, name: folderId, templates: [template.id] }
                                ]
                            }
                        }*/
                    }
                }
            }

            return {
                ...prevData,
                templates: updatedTemplates,
                templateFolders: updatedFolders
            }
        })
    }

    function autoResizeTextArea(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    function handleTemplNameTextAreaInput(e) {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
        const raw = e.target.value;
        const cleaned = raw.replace(/[^\p{L}\p{N}\p{Extended_Pictographic}\s]/gu, "");
        if (raw !== cleaned) {
            e.target.value = cleaned;
        }
    }

    function handleNotesTextAreaInput(e) {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
        const raw = e.target.value;
        const cleaned = raw.replace(/["']/g, "");
        if (raw !== cleaned) {
            e.target.value = cleaned;
        }
    }

    function deleteTemplate() {
        saveData(prev => {
            const updatedTemplates = (folderId === 'exampleTemplates') ? prev.templates :
                prev.templates.filter(templ => templ.id !== template.id)

            let updatedTemplateFolders = prev.templateFolders
            if (folderId === 'myTemplates') {
                updatedTemplateFolders = { ...prev.templateFolders, myTemplates: prev.templateFolders.myTemplates.filter(templId => templId !== template.id) }
            }
            else if (folderId === 'archivedTemplates') {
                updatedTemplateFolders = { ...prev.templateFolders, archivedTemplates: prev.templateFolders.archivedTemplates.filter(templ => templ.templateId !== template.id) }
            }
            else if (folderId === 'exampleTemplates') {
                updatedTemplateFolders = prev.templateFolders
                throw new Error("Cannot delete example templates");
            }
            else if (folderId === undefined || null) {
                updatedTemplateFolders = prev.templateFolders
                throw new Error("Folder not provided");
            }
            else {
                updatedTemplateFolders = {
                    ...prev.templateFolders,
                    userCreatedFolders: prev.templateFolders.userCreatedFolders.map(folder => {
                        return folder.templates.includes(template.id) ?
                            {
                                ...folder,
                                templates: folder.templates.filter(templId => templId !== template.id)
                            }
                            : folder
                    })
                }
            }
            return {
                ...prev,
                templates: updatedTemplates,
                templateFolders: updatedTemplateFolders
            }
        })
    }

    function renderFinishButton() {
        switch (screenVariant) {
            case "newSession":
            case "newEmptySession":
                return <ButtonBig size='hug' color='green' onClick={() => setShowFinishModal(true)}>Finish</ButtonBig>;

            case "editSession":
            case "editTemplate":
            case "newEmptyTemplate":
                return <ButtonBig size='hug' color='blue' onClick={() => setShowFinishModal(true)}>Save</ButtonBig>;

            default:
                return <ButtonBig size='hug' color='green' onClick={() => setShowFinishModal(true)}>Finish</ButtonBig>;
        }
    }

    function renderAbortButton() {
        switch (screenVariant) {
            case "newSession":
            case "newEmptySession":
                return <ButtonBig color='redSoft' onClick={() => setShowCloseModal(true)}>Cancel Workout</ButtonBig>;

            case "editSession":
                return <ButtonBig color='redSoft' onClick={() => { setShowDeleteModal(true) }}>Delete Workout</ButtonBig>;

            case "editTemplate":
                return <ButtonBig color='redSoft' onClick={() => { setShowDeleteModal(true) }}>Delete Template</ButtonBig>;

            case "newEmptyTemplate":
                return '';

            default:
                return <ButtonBig size='hug' color='green' onClick={() => setShowFinishModal(true)}>Finish</ButtonBig>;
        }
    }

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

    function saveEditedWorkout() {
        const filteredExercises = exercises.filter(exercise => exercise.sets.some(set => set.completed === true))
            .map(exercise => ({ ...exercise, sets: exercise.sets.filter(set => set.completed === true) }));

        const exerciseNames = [...new Set([...template.exercises.map(ex => ex.name), ...filteredExercises.map(ex => ex.name)])];

        //Will output names of edited exercises :{ "Squat", "Hip Thrust" ...}
        const editedExercises = exerciseNames.map(exerciseName => (
            isEqual(template.exercises.find(ex => ex.name === exerciseName), filteredExercises.find(ex => ex.name === exerciseName))
                === false ? exerciseName : undefined))
            .filter(exName => exName !== undefined)

        if (editedExercises.length > 0) {
            //Will output exercises with corresponding new global PRs and entire (updated) histories:
            /* {
                 "Squat":      {PRs: undefined, history: undefined},
                 "Hip Thrust": {PRs: undefined, history: undefined}
                } */
            let updatedExercises = Object.assign({}, ...editedExercises.map(exerciseName => ({ [exerciseName]: { PRs: undefined, history: undefined } })))

            let updatedWorkoutHistories = []

            editedExercises.forEach(exerciseName => {
                const exerciseData = data.exercises.find(ex => ex.name === exerciseName)
                const exerciseThresholds = exerciseData.thresholds
                const exercisePrMetric = exerciseData.prMetric
                const orignalExHistories = exerciseData.history.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));
                const splitIndex = orignalExHistories.findIndex(history => history.workoutId === template.workoutId);
                const unaffectedExHistories = orignalExHistories.slice(0, splitIndex);
                const affectedExHistories = orignalExHistories.slice(splitIndex);
                const updatedAffectedExHistories = []
                const affectedHistoriesWorkoutIds = affectedExHistories.map(history => history.workoutId)
                let currentPRs = affectedExHistories.find(history => history.workoutId === template.workoutId).currentPRs

                affectedHistoriesWorkoutIds.forEach(workoutId => {
                    const newCurrentPRs = currentPRs
                    const affectedHistory = affectedExHistories.find(history => history.workoutId === workoutId)
                    const userCurrentWeight = affectedHistory.currentWeight
                    let isInUpdatedWorkoutHistories = false
                    let orignalWorkoutHistory = updatedWorkoutHistories.find(history => history.workoutId === workoutId)
                    let editedWorkoutHistory



                    if (orignalWorkoutHistory === undefined) {
                        isInUpdatedWorkoutHistories = false
                        orignalWorkoutHistory = data.history.find(history => history.workoutId === workoutId)
                        editedWorkoutHistory = workoutId === template.workoutId ?
                            {
                                ...orignalWorkoutHistory,
                                name: templateName.current.value.replace(/\s+/g, '') === '' ? 'Workout' : templateName.current.value,
                                notes: notes.current.value,
                                exercises: exercises
                            } :
                            orignalWorkoutHistory
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
            })

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
        else {
            saveData(prev => ({
                ...prev,
                history: prev.history.map(history => {
                    if (history.workoutId === template.workoutId) {
                        return {
                            ...template,
                            name: templateName.current.value.replace(/\s+/g, '') === '' ? 'Workout' : templateName.current.value,
                            notes: notes.current.value
                        }
                    }
                    else return history
                }),
            }))
        }
    }

    function deleteWorkoutHistory() {
        const deletedExerciseNames = [...new Set(template.exercises.map(ex => ex.name))];

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

            let splitIndex = orignalExHistories.findIndex(history => history.workoutId === template.workoutId);
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
        }).filter(history => history.workoutId !== template.workoutId)

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






    return (
        <div className="session__container">

            <div className='session__main'>

                <div className="session__main__header">
                    <ButtonSmall type='closeScreen' onClick={() => setShowCloseModal(true)} />
                    {renderFinishButton()}
                </div>


                <div className='session__main__body'>
                    <div className='header'>
                        <div className='header__title-duration'>
                            <div className='header__title-duration__title'>
                                <textarea ref={templateName} defaultValue={template.name} className='template-name' type="text" rows={1} onInput={handleTemplNameTextAreaInput}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            e.target.blur();
                                        }
                                    }}
                                />
                                <ButtonSmall type='options' />
                            </div>

                            {(screenVariant === 'newSession' || screenVariant === 'newEmptySession') && <p>{formatTime(sessionDuration)}</p>}
                            {(screenVariant === 'editSession') && <p>{formatTime(template.duration)}</p>}
                        </div>

                        <textarea ref={notes} defaultValue={template.notes} placeholder='Notes' className='notes' type="text" onInput={handleNotesTextAreaInput} />
                    </div>


                    <div className='container-cards-and-buttons'>
                        <div className='container-cards'>
                            {exercises.map(exercise => (
                                <CardExerciseTracker exercise={exercise} toggleSetCompleted={toggleSetCompleted} addSet={addSet}
                                    deleteSet={deleteSet} handleOptionClick={handleOptionClick} screenVariant={screenVariant}
                                    saveTemplateValues={saveTemplateValues} showFinishModal={showFinishModal} />
                            ))}
                        </div>
                        <div className='container-buttons'>
                            <ButtonBig color='blueSoft' onClick={() => setShowAddExercisesModal(true)}>Add Exercise</ButtonBig>
                            {renderAbortButton()}
                        </div>

                    </div>


                </div>


                <div>
                    {/*Add exercise + create exercise modals*/}
                    {showAddExercisesModal && <ModalAddExercises addExercises={addExercises} setShowAddExercisesModal={setShowAddExercisesModal} setShowCreateExerciseModal={setShowCreateExerciseModal} />}
                    {showCreateExerciseModal && <ModalCreateExercise createExercise={createExercise} setShowCreateExerciseModal={setShowCreateExerciseModal} setShowAddExercisesModal={setShowAddExercisesModal} />}

                    {/*newSession + newEmptySession*/}
                    {
                        (screenVariant === 'newSession' || screenVariant === 'newEmptySession') &&
                        <>
                            <ModalFinishWorkout screenVariant={screenVariant} showModal={showFinishModal} setShowModal={setShowFinishModal} clearInterval={() => clearInterval(intervalRef.current)}
                                handleScreenChange={() => handleScreenChange('FinishedWorkoutScreen', template, screenVariant, folderId, template.exercises, exercises, template.id, workoutId, currentDate,
                                    sessionDuration, templateName.current.value, notes.current.value)} />
                            <ModalCancelWorkout showModal={showCloseModal} setShowModal={setShowCloseModal}
                                handleScreenChange={() => handleScreenChange('TemplatesScreen')} />
                        </>
                    }


                    {/*editSession*/}
                    {
                        screenVariant === 'editSession' &&
                        <>
                            <ModalSaveWorkout showModal={showFinishModal} setShowModal={setShowFinishModal} saveToHistory={saveEditedWorkout}
                                handleScreenChange={() => handleScreenChange('TemplatesScreen')} />
                            <ModalRevertChanges showModal={showCloseModal} setShowModal={setShowCloseModal}
                                handleScreenChange={() => handleScreenChange('TemplatesScreen')} />
                            <ModalDeleteWorkout showModal={showDeleteModal} setShowModal={setShowDeleteModal} deleteWorkoutHistory={deleteWorkoutHistory}
                                handleScreenChange={() => handleScreenChange('TemplatesScreen')} />
                        </>
                    }


                    {/*editTemplate */}
                    {
                        screenVariant === 'editTemplate' &&
                        <>
                            <ModalSaveTemplate showModal={showFinishModal} setShowModal={setShowFinishModal} handleUpdateTemplate={handleUpdateTemplate}
                                handleScreenChange={() => handleScreenChange('TemplatesScreen')} />
                            <ModalRevertChanges showModal={showCloseModal} setShowModal={setShowCloseModal}
                                handleScreenChange={() => handleScreenChange('TemplatesScreen')} />
                            <ModalDeleteTemplate showModal={showDeleteModal} setShowModal={setShowDeleteModal} deleteTemplate={deleteTemplate}
                                handleScreenChange={() => handleScreenChange('TemplatesScreen')} />
                        </>
                    }


                    {/*newEmptyTemplate*/}
                    {
                        screenVariant === 'newEmptyTemplate' &&
                        <>
                            <ModalSaveTemplate showModal={showFinishModal} setShowModal={setShowFinishModal} handleUpdateTemplate={handleUpdateTemplate}
                                handleScreenChange={() => handleScreenChange('TemplatesScreen')} />
                            <ModalDiscardTemplate showModal={showCloseModal} setShowModal={setShowCloseModal}
                                handleScreenChange={() => handleScreenChange('TemplatesScreen')} />
                        </>
                    }

                </div >
            </div >

        </div >
    )
}

export default SessionScreen