import { useState } from 'react'
import TemplatesScreen from './screens/TemplatesScreen.jsx'
import SessionScreen from './screens/SessionScreen.jsx'

const data = {
  templateFolders: [
    {
      name: 'Back workouts',
      templates: ['Pull (lat heavy)', 'Pull (trap heavy)']
    },
    {
      name: 'Push workouts',
      templates: ['upper chest and delts', 'balanced push']
    }
  ],
  templates: [
    {
      name: 'Supreme Back workout',
      exercises: [
        {
          id: 1,
          name: 'morty curcles',
          prevWeight: 10,
          prevReps: 20,
          sets:
            [
              {
                id: '0plkjn',
                num: 1,
                weight: 10,
                reps: 20,
                completed: true
              },
              {
                id: '876tg',
                num: 2,
                weight: 10,
                reps: 20,
                completed: false
              }
            ]

        },
        {
          id: 2,
          name: 'curls cable',
          prevWeight: 10,
          prevReps: 20,
          sets:
            [
              {
                id: 'gbcbbcfv',
                num: 1,
                weight: 10,
                reps: 20,
                completed: true
              },
              {
                id: 'iuukjy',
                num: 2,
                weight: 10,
                reps: 20,
                completed: false
              }
            ]
        }
      ]




    }
  ],
  history: [
    {
      title: 'My back',
      date: Date,
      duration: 20,
      volume: 2400,
      PRs: 12,
      workout: [
        {
          workoutId: 123,
          exerciseName: 'Lat Pulldown',
          bestSetVolume: 1000,
          bestSet: '10 kg x 20',
          prev: 'WHAT DO I ADD HEREEEEEEEEEEEEEEEEEEEEEEEE',
          sets:
            [
              {
                set: 1,
                prevWeight: 10,
                prevReps: 20,
                weight: 10,
                reps: 20,
                completed: false
              }
            ]
        },

      ]
    }




  ]


}

function App() {

  return (
    <SessionScreen template={data.templates[0]} />
  )
}

export default App
