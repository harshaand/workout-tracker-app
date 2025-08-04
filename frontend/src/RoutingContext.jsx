import React from 'react'
import HistoryScreen from './screens/HistoryScreen.jsx'
import TemplatesScreen from './screens/TemplatesScreen.jsx'
import ProgressScreen from './screens/ProgressScreens/ProgressScreen.jsx'
import SettingsScreen from './screens/SettingsScreen.jsx'
import SessionScreen from './screens/SessionScreen.jsx'
import FinishedWorkoutScreen from './screens/FinishedWorkoutScreen.jsx'
import StrScFullBodyScreen from './screens/ProgressScreens/StrScFullBodyScreen.jsx'
import StrScMuscleScreen from './screens/ProgressScreens/StrScMuscleScreen.jsx'
import StrScExerciseScreen from './screens/ProgressScreens/StrScExerciseScreen.jsx'
import HistoryExerciseScreen from './screens/ProgressScreens/HistoryExerciseScreen.jsx'

export const RoutingContext = React.createContext({
    currentScreen: 'NOT INITIALISED YET',
    handleScreenChange: () => { throw new Error('routing not initialised yet') },
    handleStrScScreenChange: () => { throw new Error('routing not initialised yet') }
})

export function RoutingProvider({ children }) {
    const [currentScreen, setCurrentScreen] = React.useState('TemplatesScreen')

    // FWS = finished workout screen
    const FWS_data = React.useRef({
        oldExercises: undefined,
        newExercises: undefined,
        templateId: undefined,
        template: undefined,
        workoutId: undefined,
        currentDate: undefined,
        screenVariant: undefined,
        folderId: undefined,
        duration: undefined,
        templateName: undefined,
        notes: undefined
    })

    const StrScScreen_data = React.useRef({
        musclesThresholdBrackets: undefined,
        muscleGroup: undefined,
        exercise: undefined,
    })

    const SessionScreenData = React.useRef({
        template: undefined,
        screenVariant: undefined,
        folderId: undefined,
    })

    function handleScreenChange(newScreen, template, screenVariant, folderId, oldExercises, newExercises, templateId, workoutId, currentDate, duration, templateName, notes) {
        if (newScreen === 'FinishedWorkoutScreen') {
            FWS_data.current.oldExercises = oldExercises
            FWS_data.current.newExercises = newExercises
            FWS_data.current.templateId = templateId
            FWS_data.current.template = template
            FWS_data.current.workoutId = workoutId
            FWS_data.current.currentDate = currentDate
            FWS_data.current.screenVariant = screenVariant
            FWS_data.current.folderId = folderId
            FWS_data.current.duration = duration
            FWS_data.current.templateName = templateName
            FWS_data.current.notes = notes
        }
        if (newScreen === 'SessionScreen') {
            SessionScreenData.current.template = template
            SessionScreenData.current.screenVariant = screenVariant
            SessionScreenData.current.folderId = folderId
        }
        setCurrentScreen(newScreen)
    }

    function handleStrScScreenChange(newScreen, musclesThresholdBrackets, muscleGroup, exercise) {
        StrScScreen_data.current.musclesThresholdBrackets = musclesThresholdBrackets
        StrScScreen_data.current.muscleGroup = muscleGroup
        StrScScreen_data.current.exercise = exercise
        setCurrentScreen(newScreen)
    }

    function renderCurrentScreen() {
        switch (currentScreen) {
            case 'HistoryScreen':
                return <HistoryScreen />
            case 'TemplatesScreen':
                return <TemplatesScreen />
            case 'ProgressScreen':
                return <ProgressScreen />
            case 'SettingsScreen':
                return <SettingsScreen />
            case 'SessionScreen':
                return <SessionScreen
                    template={SessionScreenData.current.template}
                    screenVariant={SessionScreenData.current.screenVariant}
                    folderId={SessionScreenData.current.folderId}
                />
            case 'StrScFullBodyScreen':
                return <StrScFullBodyScreen
                    musclesThresholdBrackets={StrScScreen_data.current.musclesThresholdBrackets}
                />
            case 'StrScMuscleScreen':
                return <StrScMuscleScreen
                    musclesThresholdBrackets={StrScScreen_data.current.musclesThresholdBrackets}
                    muscleGroup={StrScScreen_data.current.muscleGroup}
                />
            case 'StrScExerciseScreen':
                return <StrScExerciseScreen
                    musclesThresholdBrackets={StrScScreen_data.current.musclesThresholdBrackets}
                    muscleGroup={StrScScreen_data.current.muscleGroup}
                    exercise={StrScScreen_data.current.exercise}
                />
            case 'HistoryExerciseScreen':
                return <HistoryExerciseScreen
                    exercise={StrScScreen_data.current.exercise}
                />
            case 'FinishedWorkoutScreen':
                return <FinishedWorkoutScreen
                    oldExercises={FWS_data.current.oldExercises}
                    newExercises={FWS_data.current.newExercises}
                    templateId={FWS_data.current.templateId}
                    template={FWS_data.current.template}
                    workoutId={FWS_data.current.workoutId}
                    currentDate={FWS_data.current.currentDate}
                    screenVariant={FWS_data.current.screenVariant}
                    folderId={FWS_data.current.folderId}
                    duration={FWS_data.current.duration}
                    templateName={FWS_data.current.templateName}
                    notes={FWS_data.current.notes}
                />
            default:
                throw new Error('Unknown screen ' + currentScreen)
        }
    }


    return (
        <RoutingContext.Provider value={{ currentScreen, handleScreenChange, handleStrScScreenChange }}>
            {renderCurrentScreen()}
            {children}
        </RoutingContext.Provider>
    )
}