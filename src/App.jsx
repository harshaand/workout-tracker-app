import React from 'react'
import HistoryScreen from './screens/HistoryScreen.jsx'
import TemplatesScreen from './screens/TemplatesScreen.jsx'
import ProgressScreen from './screens/ProgressScreens/ProgressScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import TestingScreen from './screens/TestingScreen.jsx'

import SessionScreen from './screens/SessionScreen.jsx'
import FinishedWorkoutScreen from './screens/FinishedWorkoutScreen.jsx'

import StrScFullBodyScreen from './screens/ProgressScreens/StrScFullBodyScreen.jsx'
import StrScMuscleScreen from './screens/ProgressScreens/StrScMuscleScreen.jsx'
import StrScExercisesScreen from './screens/ProgressScreens/StrScExercisesScreen.jsx'
import StrScExerciseScreen from './screens/ProgressScreens/StrScExerciseScreen.jsx'
import { DataProvider } from './DataContext.jsx'

export const RoutingContext = React.createContext({
  currentScreen: 'NOT INITIALISED YET',
  handleScreenChange: () => { throw new Error('routing not initialised yet') }
})

function App() {
  const [currentScreen, setCurrentScreen] = React.useState('TestingScreen')
  let ScreenComponent;
  //FWS = finished workout screen
  let FWS_data = React.useRef({
    oldExercises: undefined,
    newExercises: undefined,
    templateId: undefined,
    template: undefined,
    workoutId: undefined,
    currentDate: undefined,
    screenVariant: undefined,
    duration: undefined,
    notes: undefined
  });

  let SessionScreenData = React.useRef({
    template: undefined,
    screenVariant: undefined,
  });


  switch (currentScreen) {
    case 'TestingScreen':
      ScreenComponent = <TestingScreen />;
      break;
    case 'HistoryScreen':
      ScreenComponent = <HistoryScreen />;
      break;
    case 'TemplatesScreen':
      ScreenComponent = <TemplatesScreen />;
      break;
    case 'ProgressScreen':
      ScreenComponent = <ProgressScreen />;
      break;
    case 'ProfileScreen':
      ScreenComponent = <ProfileScreen />;
      break;
    case 'SessionScreen':
      ScreenComponent = <SessionScreen
        template={SessionScreenData.current.template}
        screenVariant={SessionScreenData.current.screenVariant}
      />;
      break;
    case 'StrScFullBodyScreen':
      ScreenComponent = <StrScFullBodyScreen />;
      break;
    case 'StrScMuscleScreen':
      ScreenComponent = <StrScMuscleScreen />;
      break;
    case 'StrScExercisesScreen':
      ScreenComponent = <StrScExercisesScreen />;
      break;
    case 'StrScExerciseScreen':
      ScreenComponent = <StrScExerciseScreen />;
      break;
    case 'FinishedWorkoutScreen':
      ScreenComponent = <FinishedWorkoutScreen
        oldExercises={FWS_data.current.oldExercises}
        newExercises={FWS_data.current.newExercises}
        templateId={FWS_data.current.templateId}
        template={FWS_data.current.template}
        workoutId={FWS_data.current.workoutId}
        currentDate={FWS_data.current.currentDate}
        screenVariant={FWS_data.current.screenVariant}
        duration={FWS_data.current.duration}
        notes={FWS_data.current.notes}
      />
      break;
    default:
      throw new Error('Unknown screen ' + currentScreen)
  }
  //(newScreen, oldExercises, newExercises, templateId, template, workoutId, currentDate, screenVariant, duration, notes)
  //(newScreen, template, screenVariant, oldExercises, newExercises, templateId, workoutId, currentDate, duration, notes)

  function handleScreenChange(newScreen, template, screenVariant, oldExercises, newExercises, templateId, workoutId, currentDate, duration, notes) {
    if (newScreen === 'FinishedWorkoutScreen') {
      FWS_data.current.oldExercises = oldExercises;
      FWS_data.current.newExercises = newExercises;
      FWS_data.current.templateId = templateId;
      FWS_data.current.template = template;
      FWS_data.current.workoutId = workoutId;
      FWS_data.current.currentDate = currentDate;
      FWS_data.current.screenVariant = screenVariant;
      FWS_data.current.duration = duration;
      FWS_data.current.notes = notes;
    }
    if (newScreen === 'SessionScreen') {
      SessionScreenData.current.template = template;
      SessionScreenData.current.screenVariant = screenVariant;
    }
    setCurrentScreen(newScreen)

  }

  return (
    <DataProvider>
      <RoutingContext.Provider value={{ currentScreen, handleScreenChange: handleScreenChange }}>
        {ScreenComponent}
      </RoutingContext.Provider>
    </DataProvider>
  )
}

export default App
