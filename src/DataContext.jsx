import React from 'react'

const DataContext = React.createContext()
const DataUpdateContext = React.createContext()
const dataObject = {
    user: {
        sex: 'male',
        weight: 300,
    },
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
            notes: 'lmfaooooo',
            lastDone: new Date(2025, 2, 17, 14, 30, 30),


            exercises: [
                {
                    id: 100,
                    name: 'Back Squat',
                    sets:
                        [
                            {
                                id: '0plkjn',
                                value: 1,
                                num: 1,
                                weight: 10,
                                reps: 20,
                                completed: false,
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
                    id: 101,
                    name: 'Hip Thrust',
                    sets:
                        [
                            {
                                id: 'gbcbbcfv',
                                value: 1,
                                num: 1,
                                weight: 10,
                                reps: 20,
                                completed: false,
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
            id: '100',
            name: 'Supreme Back workout history',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 1,
            date: new Date(2025, 2, 17, 14, 30, 30),
            volume: 100,
            reps: 10,
            PRs: 1,


            exercises: [
                {
                    id: 1,
                    name: 'Back Squat',
                    sets:
                        [
                            {
                                id: '100',
                                value: 1,
                                num: 1,
                                weight: 96,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            },
                            {
                                id: '101',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: true
                            },
                            {
                                id: '102',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: true
                            },
                            {
                                id: '103',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: true
                            }, {
                                id: '104',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: true
                            },
                            {
                                id: '104',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: true
                            },
                            {
                                id: '104',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: true
                            },
                            {
                                id: '104',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: true
                            },
                            {
                                id: '104',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: true
                            },
                            {
                                id: '104',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: true
                            },
                            {
                                id: '104',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: true
                            }, {
                                id: '104',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: true
                            }
                        ]

                },
                {
                    id: 2,
                    name: 'Hip Thrust',
                    sets:
                        [
                            {
                                id: 'gbcbbcfv',
                                value: 1,
                                num: 1,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: true
                            },
                            {
                                id: 'iuukjy',
                                value: 2,
                                num: 2,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: 'erwvvweevw',
                                value: 3,
                                num: 3,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            }
                            ,
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            }
                        ]
                }
            ]
        },
        {
            id: '101',
            name: 'Supreme Chest workout history',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 2,
            date: new Date('2023-01-15'),
            volume: 100,
            reps: 10,
            PRs: 1,


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
                                weight: 96,
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
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: true
                            }
                        ]

                },
                {
                    id: 2,
                    name: 'Hip Thrust',
                    sets:
                        [
                            {
                                id: 'gbcbbcfv',
                                value: 1,
                                num: 1,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: true
                            },
                            {
                                id: 'iuukjy',
                                value: 2,
                                num: 2,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            },
                            {
                                id: 'erwvvweevw',
                                value: 3,
                                num: 3,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            }
                            ,
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            }
                        ]
                }
            ]
        },
        {
            id: '102',
            name: 'Supreme Legs workout history',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 3,
            date: new Date('2022-12-25'),
            volume: 100,
            reps: 10,
            PRs: 1,


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
                                weight: 96,
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
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: true
                            }
                        ]

                },
                {
                    id: 2,
                    name: 'Hip Thrust',
                    sets:
                        [
                            {
                                id: 'gbcbbcfv',
                                value: 1,
                                num: 1,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: true
                            },
                            {
                                id: 'iuukjy',
                                value: 2,
                                num: 2,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            },
                            {
                                id: 'erwvvweevw',
                                value: 3,
                                num: 3,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            }
                            ,
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            }
                        ]
                }
            ]
        },
        {
            id: '103',
            name: 'Supreme Glutes workout history',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 4,
            date: new Date('2024-01-03'),
            volume: 100,
            reps: 10,
            PRs: 1,


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
                                weight: 96,
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
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: true
                            }
                        ]

                },
                {
                    id: 2,
                    name: 'Hip Thrust',
                    sets:
                        [
                            {
                                id: 'gbcbbcfv',
                                value: 1,
                                num: 1,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: true
                            },
                            {
                                id: 'iuukjy',
                                value: 2,
                                num: 2,
                                weight: 666,
                                reps: 666,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            },
                            {
                                id: 'erwvvweevw',
                                value: 3,
                                num: 3,
                                weight: 10,
                                reps: 20,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            }
                            ,
                            {
                                id: '765654',
                                value: 4,
                                num: 4,
                                weight: 666,
                                reps: 666,
                                completed: true,
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
            PRs: { '1RM': 120, weight: 0, reps: 0, volume: 0, strengthScore: 1 },
            thumbnail: '',
            instructions: { media: '', text: 'Sit a 90* angle...' },
            thresholds: {
                male: { beginner: 0.75, novice: 1.25, intermediate: 1.5, advanced: 2.25, elite: 2.75 },
                female: { beginner: 0.5, novice: 0.75, intermediate: 1.25, advanced: 1.5, elite: 2 }
            },
            history: [
                {
                    currentWeight: 88,
                    currentPRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
                    newPRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
                    date: new Date(2025, 0, 1),
                    workoutId: 1,
                    sets: [
                        { weight: 5, reps: 1, PRs: { '1RM': true, weight: true, reps: false, vol: false } },
                        { weight: 3, reps: 3, PRs: { '1RM': false, weight: false, reps: false, vol: true } },
                        { weight: 1, reps: 4, PRs: { '1RM': false, weight: false, reps: false, vol: false } }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
                    newPRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
                    date: new Date(2025, 2, 1),
                    workoutId: 2,
                    sets: [
                        { weight: 5, reps: 1, PRs: { '1RM': true, weight: true, reps: false, vol: false } },
                        { weight: 3, reps: 3, PRs: { '1RM': false, weight: false, reps: false, vol: true } },
                        { weight: 1, reps: 4, PRs: { '1RM': false, weight: false, reps: false, vol: false } }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
                    newPRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
                    date: new Date(2025, 5, 1),
                    workoutId: 3,
                    sets: [
                        { weight: 5, reps: 1, PRs: { '1RM': true, weight: true, reps: false, vol: false } },
                        { weight: 3, reps: 3, PRs: { '1RM': false, weight: false, reps: false, vol: true } },
                        { weight: 1, reps: 4, PRs: { '1RM': false, weight: false, reps: false, vol: false } }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
                    newPRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
                    date: new Date(2025, 0, 5),
                    workoutId: 4,
                    sets: [
                        { weight: 5, reps: 1, PRs: { '1RM': true, weight: true, reps: false, vol: false } },
                        { weight: 3, reps: 3, PRs: { '1RM': false, weight: false, reps: false, vol: true } },
                        { weight: 1, reps: 4, PRs: { '1RM': false, weight: false, reps: false, vol: false } }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
                    newPRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
                    date: new Date(2025, 9, 10),
                    workoutId: 90210,
                    sets: [
                        { weight: 5, reps: 1, PRs: { '1RM': true, weight: true, reps: false, vol: false } },
                        { weight: 3, reps: 3, PRs: { '1RM': false, weight: false, reps: false, vol: true } },
                        { weight: 1, reps: 4, PRs: { '1RM': false, weight: false, reps: false, vol: false } }
                    ]
                }
            ]
        },
        {
            name: 'Hip Thrust',
            prMetric: 'reps',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 1 },
            thumbnail: '',
            instructions: { media: '', text: 'Sit a 90* angle...' },
            thresholds: {
                male: { beginner: 0.5, novice: 1.0, intermediate: 1.75, advanced: 2.5, elite: 3.5 },
                female: { beginner: 0.5, novice: 1.0, intermediate: 1.5, advanced: 2.25, elite: 3.0 }
            },
            history: []
        },
        {
            name: 'Testing Exercise',
            prMetric: 'reps',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            history: []
        },
        {
            name: 'q',
            prMetric: 'reps',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thresholds: {
                male: { beginner: 0.75, novice: 1.25, intermediate: 1.5, advanced: 2.25, elite: 2.75 },
                female: { beginner: 0.5, novice: 0.75, intermediate: 1.25, advanced: 1.5, elite: 2 }
            },
            thumbnail: '',
            instructions: { media: '', text: '' },
            history: []
        },
        {
            name: 'qq',
            prMetric: 'reps',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thresholds: {
                male: { beginner: 0.75, novice: 1.25, intermediate: 1.5, advanced: 2.25, elite: 2.75 },
                female: { beginner: 0.5, novice: 0.75, intermediate: 1.25, advanced: 1.5, elite: 2 }
            },
            thumbnail: '',
            instructions: { media: '', text: '' },
            history: []
        },
        {
            name: 'qqq',
            prMetric: 'reps',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thresholds: {
                male: { beginner: 0.75, novice: 1.25, intermediate: 1.5, advanced: 2.25, elite: 2.75 },
                female: { beginner: 0.5, novice: 0.75, intermediate: 1.25, advanced: 1.5, elite: 2 }
            },
            thumbnail: '',
            instructions: { media: '', text: '' },
            history: []
        },
        {
            name: 'qqqq',
            prMetric: 'reps',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thresholds: {
                male: { beginner: 0.75, novice: 1.25, intermediate: 1.5, advanced: 2.25, elite: 2.75 },
                female: { beginner: 0.5, novice: 0.75, intermediate: 1.25, advanced: 1.5, elite: 2 }
            },
            thumbnail: '',
            instructions: { media: '', text: '' },
            history: []
        },
        {
            name: 'qqqqq',
            prMetric: 'reps',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thresholds: {
                male: { beginner: 0.75, novice: 1.25, intermediate: 1.5, advanced: 2.25, elite: 2.75 },
                female: { beginner: 0.5, novice: 0.75, intermediate: 1.25, advanced: 1.5, elite: 2 }
            },
            thumbnail: '',
            instructions: { media: '', text: '' },
            history: []
        },
        {
            name: 'qqqqqq',
            prMetric: 'reps',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thresholds: {
                male: { beginner: 0.75, novice: 1.25, intermediate: 1.5, advanced: 2.25, elite: 2.75 },
                female: { beginner: 0.5, novice: 0.75, intermediate: 1.25, advanced: 1.5, elite: 2 }
            },
            thumbnail: '',
            instructions: { media: '', text: '' },
            history: []
        }



    ],
    strengthScores: {
        'Shoulders': { 'Back Squat': 1, 'Hip Thrust': 8 },
        'Chest': { 'Back Squat': 1, 'Hip Thrust': 12 },
        'Back': { 'Back Squat': 1, 'Hip Thrust': 30 },
        'Biceps': { 'Back Squat': 1, 'Hip Thrust': 30 },
        'Triceps': { 'Back Squat': 1, 'Hip Thrust': 27 },
        'Lower Back': { 'Back Squat': 1, 'q': 8 },
        'Abs': { 'q': 1, 'qq': 15 },
        'Glutes': { 'qq': 1, 'qqq': 60 },
        'Quads': { 'qqq': 1, 'qqqq': 40 },
        'Hamstrings': { 'qqqq': 1, 'qqqqq': 50 },
        'Calves': { 'qqqqq': 1, 'qqqqq': 20 }
    }

}

function useData() {
    return React.useContext(DataContext)
}

function useDataUpdate() {
    return React.useContext(DataUpdateContext)
}

function DataProvider({ children }) {
    const [data, setData] = React.useState(dataObject)

    function saveData(func) {
        // Add main function for updating data in localstorage/database here.
        /* Update setData here aswell
         to app's state updates e.g. data on history screen updating after finishing workout
         make this the main saveData then add this function to   <DataUpdateContext value={saveData}>
         instread of <DataUpdateContext value={setData}> */
        // save to local storage
    }

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
