import React from 'react'

const DataContext = React.createContext()
const DataUpdateContext = React.createContext()
const dataObject = {
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
            id: '4213313',
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
                                value: 1,
                                num: 1,
                                weight: 10,
                                reps: 20,
                                completed: true
                            },
                            {
                                id: '876tg',
                                value: 2,
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
                                value: 1,
                                num: 1,
                                weight: 10,
                                reps: 20,
                                completed: true
                            },
                            {
                                id: 'iuukjy',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: false
                            },
                            {
                                id: 'erwvvweevw',
                                value: 3,
                                num: 3,
                                weight: 10,
                                reps: 20,
                                completed: false
                            }
                            ,
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
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

function useData() {
    return React.useContext(DataContext)
}

function useDataUpdate() {
    return React.useContext(DataUpdateContext)
}

function DataProvider({ children }) {
    const [data, setData] = React.useState(dataObject)
    return (
        <DataContext.Provider value={data}>
            <DataUpdateContext value={setData}>
                {children}
                {console.log('DATA IN DB:', data)}
            </DataUpdateContext>
        </DataContext.Provider>
    )
}

export { DataProvider, useData, useDataUpdate }
