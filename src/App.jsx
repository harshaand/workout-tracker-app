import React from 'react'
import TemplatesScreen from './screens/TemplatesScreen.jsx'
import { DataProvider } from './DataContext.jsx'


function App() {
  return (
    <DataProvider>
      <TemplatesScreen />
    </DataProvider>
  )
}

export default App
