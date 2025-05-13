import React from 'react'
import TemplatesScreen from './screens/TemplatesScreen.jsx'
import FinishedWorkoutScreen from './screens/FinishedWorkoutScreen.jsx'
import { DataProvider } from './DataContext.jsx'

export const RoutingContext = React.createContext({
  currentScreen: 'NOT INITIALISED YET',
  handleScreenChange: () => { throw new Error('routing not initialised yet') }
})

function App() {
  const [currentScreen, setCurrentScreen] = React.useState('templates')
  let ScreenComponent;
  //FWS = finished workout screen
  let FWS_data = React.useRef({
    oldExercises: undefined,
    newExercises: undefined,
    templateId: undefined,
    template: undefined,
    workoutId: undefined,
    currentDate: undefined
  });


  switch (currentScreen) {
    case 'templates':
      ScreenComponent = <TemplatesScreen />;
      break;
    case 'finished-workout':
      ScreenComponent = <FinishedWorkoutScreen
        oldExercises={FWS_data.current.oldExercises}
        newExercises={FWS_data.current.newExercises}
        templateId={FWS_data.current.templateId}
        template={FWS_data.current.template}
        workoutId={FWS_data.current.workoutId}
        currentDate={FWS_data.current.currentDate}
      />
      break;
    default:
      throw new Error('Unknown screen ' + currentScreen)
  }

  function handleScreenChange(newScreen, oldExercises, newExercises, templateId, template, workoutId, currentDate) {
    if (oldExercises && newExercises && templateId) {
      FWS_data.current.oldExercises = oldExercises;
      FWS_data.current.newExercises = newExercises;
      FWS_data.current.templateId = templateId;
      FWS_data.current.template = template;
      FWS_data.current.workoutId = workoutId;
      FWS_data.current.currentDate = currentDate;
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
