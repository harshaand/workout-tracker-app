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
            duration: 0,
            notes: '0',


            exercises: [
                {
                    id: 1,
                    name: 'Back Squat',
                    sets:
                        [
                            {
                                id: '0plkjn',
                                value: 1,
                                num: 1,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false, strengthScore: false },
                                bestSet: false
                            },
                            {
                                id: '876tg',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: false,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false, strengthScore: false },
                                bestSet: false
                            }
                        ]

                },
                {
                    id: 2,
                    name: 'Hip Thrust',
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
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false, strengthScore: false },
                                bestSet: false
                            },
                            {
                                id: 'iuukjy',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: false,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false, strengthScore: false },
                                bestSet: false
                            },
                            {
                                id: 'erwvvweevw',
                                value: 3,
                                num: 3,
                                weight: 10,
                                reps: 20,
                                completed: false,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false, strengthScore: false },
                                bestSet: false
                            }
                            ,
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 10,
                                reps: 20,
                                completed: false,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false, strengthScore: false },
                                bestSet: false
                            }
                        ]
                }
            ]
        }
    ],
    history: [
        {
            id: '4213313',
            name: 'Supreme Back workout',
            duration: 20,
            notes: 'Wore lifting shoes',

            date: '1/1/2025',
            volume: 2400,
            PRs: 12,


            exercises: [
                {
                    id: 1,
                    name: 'morty curcles',
                    sets:
                        [
                            {
                                id: '0plkjn',
                                value: 1,
                                num: 1,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            },
                            {
                                id: '876tg',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: false,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
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
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            },
                            {
                                id: 'iuukjy',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: false,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            },
                            {
                                id: 'erwvvweevw',
                                value: 3,
                                num: 3,
                                weight: 10,
                                reps: 20,
                                completed: false,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            }
                            ,
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 10,
                                reps: 20,
                                completed: false,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            }
                        ]
                }
            ]
        }

    ],
    exercises: [
        {
            name: 'Back Squat',
            prMetric: 'reps',
            PRs: { '1RM': 123, weight: 123, reps: 123, volume: 123, strengthScore: 123 },
            thumbnail: '',
            instructions: { media: '', text: 'Sit a 90* angle...' },
            history: [
                {
                    currentWeight: 88,
                    currentPRs: { '1RM': 123, weight: 123, reps: 123, volume: 123, strengthScore: 123 },
                    newPRs: { '1RM': 123, weight: 123, reps: 123, volume: 123, strengthScore: 123 },
                    date: '1/1/2025',
                    workoutId: 90210,
                    sets: [
                        { weight: 5, reps: 1, PRs: { '1RM': true, weight: true, reps: false, vol: false } },
                        { weight: 3, reps: 3, PRs: { '1RM': false, weight: false, reps: false, vol: true } },
                        { weight: 1, reps: 4, PRs: { '1RM': false, weight: false, reps: true, vol: false } }
                    ]
                }
            ]
        },
        {
            name: 'Hip Thrust',
            prMetric: 'reps',
            PRs: { '1RM': 123, weight: 123, reps: 123, volume: 123, strengthScore: 123 },
            thumbnail: '',
            instructions: { media: '', text: 'Sit a 90* angle...' },
            history: []
        }

    ],
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
