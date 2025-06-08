import React from 'react'

const DataContext = React.createContext()
const DataUpdateContext = React.createContext()
const dataObject = {
    user: {
        sex: 'male',
        weight: 88,
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
            instructions: { media: '', text: '' },
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
            name: 'Bench Press',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.5, novice: 0.75, intermediate: 1.25, advanced: 1.75, elite: 2 },
                female: { beginner: 0.25, novice: 0.5, intermediate: 0.75, advanced: 1.0, elite: 1.5 }
            },
            history: []
        },
        {
            name: 'Incline Bench Press',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.5, novice: 0.75, intermediate: 1.0, advanced: 1.5, elite: 1.75 },
                female: { beginner: 0.2, novice: 0.4, intermediate: 0.65, advanced: 1.0, elite: 1.4 }
            },
            history: []
        },
        {
            name: 'Bench Press (Dumbbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.2, novice: 0.35, intermediate: 0.5, advanced: 0.75, elite: 1.0 },
                female: { beginner: 0.1, novice: 0.2, intermediate: 0.3, advanced: 0.5, elite: 0.7 }
            },
            history: []
        },
        {
            name: 'Incline Bench Press (Dumbbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.25, novice: 0.35, intermediate: 0.5, advanced: 0.65, elite: 0.85 },
                female: { beginner: 0.1, novice: 0.2, intermediate: 0.3, advanced: 0.45, elite: 0.6 }
            },
            history: []
        },
        {
            name: 'Seated Shoulder Press (Dumbbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.15, novice: 0.25, intermediate: 0.4, advanced: 0.55, elite: 0.75 },
                female: { beginner: 0.1, novice: 0.15, intermediate: 0.25, advanced: 0.35, elite: 0.5 }
            },
            history: []
        },
        {
            name: 'Lateral Raise (Dumbbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.05, novice: 0.1, intermediate: 0.2, advanced: 0.3, elite: 0.45 },
                female: { beginner: 0.05, novice: 0.1, intermediate: 0.15, advanced: 0.2, elite: 0.3 }
            },
            history: []
        },
        {
            name: 'Tricep Pushdown (Cable)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.25, novice: 0.5, intermediate: 0.75, advanced: 1.0, elite: 1.5 },
                female: { beginner: 0.15, novice: 0.25, intermediate: 0.5, advanced: 0.75, elite: 1.05 }
            },
            history: []
        },
        {
            name: 'Skull Crusher',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.2, novice: 0.35, intermediate: 0.55, advanced: 0.8, elite: 1.1 },
                female: { beginner: 0.1, novice: 0.2, intermediate: 0.35, advanced: 0.55, elite: 0.75 }
            },
            history: []
        },
        {
            name: 'Deadlift',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 1.0, novice: 1.5, intermediate: 2.0, advanced: 2.5, elite: 3.0 },
                female: { beginner: 0.5, novice: 1.0, intermediate: 1.25, advanced: 1.75, elite: 2.5 }
            },
            history: []
        },
        {
            name: 'Lat Pulldown',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.5, novice: 0.75, intermediate: 1.0, advanced: 1.5, elite: 1.75 },
                female: { beginner: 0.3, novice: 0.45, intermediate: 0.7, advanced: 0.95, elite: 1.3 }
            },
            history: []
        },
        {
            name: 'Row (Cable)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.5, novice: 0.75, intermediate: 1.0, advanced: 1.5, elite: 2 },
                female: { beginner: 0.3, novice: 0.5, intermediate: 0.75, advanced: 1.0, elite: 1.35 }
            },
            history: []
        },
        {
            name: 'Bent Over Row',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.5, novice: 0.75, intermediate: 1.0, advanced: 1.5, elite: 1.75 },
                female: { beginner: 0.25, novice: 0.4, intermediate: 0.65, advanced: 0.9, elite: 1.2 }
            },
            history: []
        },
        {
            name: 'Row (Dumbbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.2, novice: 0.35, intermediate: 0.55, advanced: 0.8, elite: 1.05 },
                female: { beginner: 0.1, novice: 0.2, intermediate: 0.35, advanced: 0.5, elite: 0.65 }
            },
            history: []
        },
        {
            name: 'Bicep Curl (Barbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.2, novice: 0.4, intermediate: 0.6, advanced: 0.85, elite: 1.15 },
                female: { beginner: 0.1, novice: 0.2, intermediate: 0.4, advanced: 0.6, elite: 0.85 }
            },
            history: []
        },
        {
            name: 'Bicep Curl (Dumbbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.1, novice: 0.15, intermediate: 0.3, advanced: 0.5, elite: 0.65 },
                female: { beginner: 0.05, novice: 0.1, intermediate: 0.2, advanced: 0.35, elite: 0.45 }
            },
            history: []
        },
        {
            name: 'Hammer Curl (Dumbbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.1, novice: 0.2, intermediate: 0.3, advanced: 0.45, elite: 0.6 },
                female: { beginner: 0.05, novice: 0.15, intermediate: 0.2, advanced: 0.3, elite: 0.4 }
            },
            history: []
        },
        {
            name: 'Squat',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.75, novice: 1.25, intermediate: 1.5, advanced: 2.25, elite: 2.75 },
                female: { beginner: 0.5, novice: 0.75, intermediate: 1.25, advanced: 1.5, elite: 2.0 }
            },
            history: []
        },
        {
            name: 'Sled Leg Press',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 1.0, novice: 1.75, intermediate: 2.75, advanced: 4.0, elite: 5.25 },
                female: { beginner: 0.5, novice: 1.25, intermediate: 2.0, advanced: 3.25, elite: 4.5 }
            },
            history: []
        },
        {
            name: 'Bulgarian Split Squat',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.15, novice: 0.25, intermediate: 0.4, advanced: 0.6, elite: 0.8 },
                female: { beginner: 0.1, novice: 0.2, intermediate: 0.3, advanced: 0.45, elite: 0.6 }
            },
            history: []
        },
        {
            name: 'Leg Extension',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.5, novice: 0.75, intermediate: 1.25, advanced: 1.75, elite: 2.5 },
                female: { beginner: 0.25, novice: 0.5, intermediate: 1.0, advanced: 1.25, elite: 2.0 }
            },
            history: []
        },
        {
            name: 'Leg Curl',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.5, novice: 0.75, intermediate: 1.0, advanced: 1.5, elite: 2.0 },
                female: { beginner: 0.25, novice: 0.45, intermediate: 0.75, advanced: 1.05, elite: 1.45 }
            },
            history: []
        },
        {
            name: 'Leg Curl',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.5, novice: 0.75, intermediate: 1.0, advanced: 1.5, elite: 2.0 },
                female: { beginner: 0.25, novice: 0.45, intermediate: 0.75, advanced: 1.05, elite: 1.45 }
            },
            history: []
        },
        {
            name: 'Romanian Deadlift',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.75, novice: 1.0, intermediate: 1.5, advanced: 2.0, elite: 2.75 },
                female: { beginner: 0.5, novice: 0.75, intermediate: 1.0, advanced: 1.5, elite: 1.75 }
            },
            history: []
        },
        {
            name: 'Hip Thrust',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.5, novice: 1.0, intermediate: 1.75, advanced: 2.5, elite: 3.5 },
                female: { beginner: 0.5, novice: 1.0, intermediate: 1.5, advanced: 2.25, elite: 3.0 }
            },
            history: []
        },
        {
            name: 'Glute Bridge (Barbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.5, novice: 1.0, intermediate: 1.5, advanced: 2.5, elite: 3.5 },
                female: { beginner: 0.5, novice: 1.0, intermediate: 1.5, advanced: 2.25, elite: 3.0 }
            },
            history: []
        },
        {
            name: 'Seated Crunch (Machine)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.25, novice: 0.75, intermediate: 1.0, advanced: 1.75, elite: 2.25 },
                female: { beginner: 0.2, novice: 0.35, intermediate: 0.60, advanced: 0.85, elite: 1.15 }
            },
            history: []
        },
        {
            name: 'Crunch (Cable)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.25, novice: 0.5, intermediate: 1.0, advanced: 1.5, elite: 2.25 },
                female: { beginner: 0.2, novice: 0.4, intermediate: 0.60, advanced: 0.8, elite: 1.0 }
            },
            history: []
        },
        {
            name: 'Woodchopper (Cable)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.1, novice: 0.25, intermediate: 0.5, advanced: 0.85, elite: 1.25 },
                female: { beginner: 0.05, novice: 0.1, intermediate: 0.2, advanced: 0.35, elite: 0.55 }
            },
            history: []
        },
        {
            name: 'Side Bend (Dumbbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.05, novice: 0.2, intermediate: 0.45, advanced: 0.85, elite: 1.35 },
                female: { beginner: 0.05, novice: 0.15, intermediate: 0.3, advanced: 0.45, elite: 0.7 }
            },
            history: []
        },
        {
            name: 'Calf Raise (Barbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.5, novice: 1.0, intermediate: 1.5, advanced: 2.25, elite: 3.25 },
                female: { beginner: 0.25, novice: 0.75, intermediate: 1.25, advanced: 2.0, elite: 2.75 }
            },
            history: []
        },
        {
            name: 'Calf Raise (Machine)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.5, novice: 1.0, intermediate: 1.75, advanced: 2.75, elite: 4.0 },
                female: { beginner: 0.25, novice: 0.75, intermediate: 1.25, advanced: 2.25, elite: 3.25 }
            },
            history: []
        },
        {
            name: 'Seated Calf Raise',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.25, novice: 0.75, intermediate: 1.25, advanced: 2.0, elite: 3.0 },
                female: { beginner: 0.25, novice: 0.5, intermediate: 1.0, advanced: 1.75, elite: 2.5 }
            },
            history: []
        },
        {
            name: 'Calf Raise (Dumbbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.1, novice: 0.25, intermediate: 0.5, advanced: 0.85, elite: 1.25 },
                female: { beginner: 0.1, novice: 0.2, intermediate: 0.35, advanced: 0.5, elite: 0.7 }
            },
            history: []
        },




    ],
    strengthScores: {
        'Shoulders': { 'Seated Shoulder Press (Dumbbell)': 0, 'Lateral Raise (Dumbbell)': 0 },
        'Chest': { 'Bench Press': 0, 'Incline Bench Press': 0, 'Bench Press (Dumbbell)': 0, 'Incline Bench Press (Dumbbell)': 0 },
        'Back': { 'Deadlift': 0, 'Lat Pulldown': 0, 'Row (Cable)': 0, 'Bent Over Row': 0, 'Row (Dumbbell)': 0 },
        'Biceps': { 'Bicep Curl (Barbell)': 0, 'Bicep Curl (Dumbbell)': 0, 'Hammer Curl (Dumbbell)': 0 },
        'Triceps': { 'Tricep Pushdown (Cable)': 0, 'Skull Crusher': 0 },
        'Abs': { 'Seated Crunch (Machine)': 0, 'Crunch (Cable)': 0, 'Woodchopper (Cable)': 0, 'Side Bend (Dumbbell)': 0 },
        'Glutes': { 'Back Squat': 0, 'Deadlift': 0, 'Squat': 0, 'Sled Leg Press': 0, 'Bulgarian Split Squat': 0, 'Romanian Deadlift': 0, 'Hip Thrust': 0, 'Glute Bridge (Barbell)': 0 },
        'Hamstrings': { 'Back Squat': 0, 'Deadlift': 0, 'Squat': 0, 'Sled Leg Press': 0, 'Bulgarian Split Squat': 0, 'Romanian Deadlift': 0, 'Leg Curl': 0 },
        'Quads': { 'Back Squat': 0, 'Deadlift': 0, 'Squat': 0, 'Sled Leg Press': 0, 'Bulgarian Split Squat': 0, 'Leg Extension': 0 },
        'Calves': { 'Calf Raise (Barbell)': 0, 'Calf Raise (Machine)': 0, 'Seated Calf Raise': 0, 'Calf Raise (Dumbbell)': 0 }
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
