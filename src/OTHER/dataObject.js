







const object123 = {
    title: string,
    duration: integer,
    notes: string,
    exercises:
        [
            {
                exerciseName: string,
                sets:
                    [
                        {
                            set: string,
                            weight: integer,
                            reps: integer,
                            completed: boolean
                        }
                    ]
            }
        ]
}

const object1234 = {
    title: 'My Back',
    duration: 120,
    notes: '',
    exercises:
        [
            {
                exerciseName: 'Lat Pulldown',
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
            }
        ]
}




const templates = [
    {
        content: 'one elephant',
        folderId: 1
    }, {
        content: '3 bananas',
        folderId: 3
    }, {
        content: 'Juan',
        folderId: 1
    }, {
        content: 'slat4life',
        folderId: 4
    }, {
        content: '7/11',
        folderId: 7
    }, {
        content: 'the devil is here',
        folderId: 6
    }, {
        content: 'one punch man',
        folderId: 1
    }, {
        content: 'i 8 a gateux',
        folderId: 8
    }
]



function dataObject(props) {
    return (
        <div>
            <h1>{props.content}</h1>
        </div>
    )
}








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



const dataObject = {
    user: {
        sex: 'male',
        weight: 60,
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
            id: 'template1',
            name: 'Supreme Back workout',
            duration: 0,
            notes: 'lmfaooooo',
            lastDone: new Date(2025, 5, 17, 14, 30, 30),


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
            id: 'template1',
            name: 'Supreme Back workout history',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 1,
            date: new Date(2025, 5, 1, 17, 30, 30),
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
                                weight: 80,
                                reps: 10,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: false
                            },
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
                                weight: 30,
                                reps: 15,
                                completed: true,
                                PRs: { '1RM': true, weight: true, reps: false, volume: true },
                                bestSet: true
                            },
                            {
                                id: 'iuukjy',
                                value: 2,
                                num: 2,
                                weight: 10,
                                reps: 10,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                            {
                                id: 'iuukjy',
                                value: 3,
                                num: 3,
                                weight: 10,
                                reps: 10,
                                completed: true,
                                PRs: { '1RM': false, weight: false, reps: false, volume: false },
                                bestSet: false
                            },
                        ]
                }
            ]
        }

    ],
    exercises: [
        {
            name: 'Back Squat',
            prMetric: 'reps',
            PRs: { '1RM': 120, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
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
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
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

const object2 = {
    "user": {
        "sex": "male",
        "weight": 88
    },
    "templateFolders": [
        {
            "name": "Back workouts",
            "templates": [
                "Pull (lat heavy)",
                "Pull (trap heavy)"
            ]
        },
        {
            "name": "Push workouts",
            "templates": [
                "upper chest and delts",
                "balanced push"
            ]
        }
    ],
    "templates": [
        {
            "id": "4213313",
            "name": "Supreme Back workout",
            "duration": 0,
            "notes": "lmfaooooo",
            "lastDone": "2025-03-17T14:30:30.000Z",
            "exercises": [
                {
                    "id": 100,
                    "name": "Back Squat",
                    "sets": [
                        {
                            "id": "0plkjn",
                            "value": 1,
                            "num": 1,
                            "weight": 10,
                            "reps": 20,
                            "completed": false,
                            "PRs": {
                                "1RM": false,
                                "weight": true,
                                "reps": true,
                                "volume": true,
                                "strengthScore": true
                            },
                            "bestSet": false
                        },
                        {
                            "id": "876tg",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": false,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false,
                                "strengthScore": false
                            },
                            "bestSet": false
                        }
                    ]
                },
                {
                    "id": 101,
                    "name": "Hip Thrust",
                    "sets": [
                        {
                            "id": "gbcbbcfv",
                            "value": 1,
                            "num": 1,
                            "weight": 10,
                            "reps": 20,
                            "completed": false,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false,
                                "strengthScore": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "iuukjy",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": false,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false,
                                "strengthScore": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "erwvvweevw",
                            "value": 3,
                            "num": 3,
                            "weight": 10,
                            "reps": 20,
                            "completed": false,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false,
                                "strengthScore": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 10,
                            "reps": 20,
                            "completed": false,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false,
                                "strengthScore": false
                            },
                            "bestSet": false
                        }
                    ]
                }
            ]
        }
    ],
    "history": [
        {
            "id": "100",
            "name": "Supreme Back workout history",
            "duration": 3780,
            "notes": "Wore lifting shoes",
            "workoutId": 1,
            "date": "2025-01-17T14:30:30.000Z",
            "volume": 100,
            "reps": 10,
            "PRs": 1,
            "exercises": [
                {
                    "id": 1,
                    "name": "Back Squat",
                    "sets": [
                        {
                            "id": "100",
                            "value": 1,
                            "num": 1,
                            "weight": 96,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": false
                        },
                        {
                            "id": "101",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": true
                        },
                        {
                            "id": "102",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": true
                        },
                        {
                            "id": "103",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": true
                        },
                        {
                            "id": "104",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": true
                        },
                        {
                            "id": "104",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": true
                        },
                        {
                            "id": "104",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": true
                        },
                        {
                            "id": "104",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": true
                        },
                        {
                            "id": "104",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": true
                        },
                        {
                            "id": "104",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": true
                        },
                        {
                            "id": "104",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": true
                        },
                        {
                            "id": "104",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": true
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Hip Thrust",
                    "sets": [
                        {
                            "id": "gbcbbcfv",
                            "value": 1,
                            "num": 1,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": true
                        },
                        {
                            "id": "iuukjy",
                            "value": 2,
                            "num": 2,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "erwvvweevw",
                            "value": 3,
                            "num": 3,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false
                            },
                            "bestSet": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "101",
            "name": "Supreme Chest workout history",
            "duration": 3780,
            "notes": "Wore lifting shoes",
            "workoutId": 2,
            "date": "2023-01-15T00:00:00.000Z",
            "volume": 100,
            "reps": 10,
            "PRs": 1,
            "exercises": [
                {
                    "id": 1,
                    "name": "Back Squat",
                    "sets": [
                        {
                            "id": "0plkjn",
                            "value": 1,
                            "num": 1,
                            "weight": 96,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": false
                        },
                        {
                            "id": "876tg",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": true
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Hip Thrust",
                    "sets": [
                        {
                            "id": "gbcbbcfv",
                            "value": 1,
                            "num": 1,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": true
                        },
                        {
                            "id": "iuukjy",
                            "value": 2,
                            "num": 2,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": false
                        },
                        {
                            "id": "erwvvweevw",
                            "value": 3,
                            "num": 3,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "102",
            "name": "Supreme Legs workout history",
            "duration": 3780,
            "notes": "Wore lifting shoes",
            "workoutId": 3,
            "date": "2022-12-25T00:00:00.000Z",
            "volume": 100,
            "reps": 10,
            "PRs": 1,
            "exercises": [
                {
                    "id": 1,
                    "name": "Back Squat",
                    "sets": [
                        {
                            "id": "0plkjn",
                            "value": 1,
                            "num": 1,
                            "weight": 96,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": false
                        },
                        {
                            "id": "876tg",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": true
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Hip Thrust",
                    "sets": [
                        {
                            "id": "gbcbbcfv",
                            "value": 1,
                            "num": 1,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": true
                        },
                        {
                            "id": "iuukjy",
                            "value": 2,
                            "num": 2,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": false
                        },
                        {
                            "id": "erwvvweevw",
                            "value": 3,
                            "num": 3,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "103",
            "name": "Supreme Glutes workout history",
            "duration": 3780,
            "notes": "Wore lifting shoes",
            "workoutId": 4,
            "date": "2024-01-03T00:00:00.000Z",
            "volume": 100,
            "reps": 10,
            "PRs": 1,
            "exercises": [
                {
                    "id": 1,
                    "name": "Back Squat",
                    "sets": [
                        {
                            "id": "0plkjn",
                            "value": 1,
                            "num": 1,
                            "weight": 96,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": false
                        },
                        {
                            "id": "876tg",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": true
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Hip Thrust",
                    "sets": [
                        {
                            "id": "gbcbbcfv",
                            "value": 1,
                            "num": 1,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": true
                        },
                        {
                            "id": "iuukjy",
                            "value": 2,
                            "num": 2,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": false
                        },
                        {
                            "id": "erwvvweevw",
                            "value": 3,
                            "num": 3,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": false
                        },
                        {
                            "id": "765654",
                            "value": 4,
                            "num": 4,
                            "weight": 666,
                            "reps": 666,
                            "completed": true,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "volume": true
                            },
                            "bestSet": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "4213313",
            "name": "Supreme Back workout",
            "duration": 4,
            "notes": "lmfaooooo",
            "workoutId": "af9a11fe-8f15-42cb-bf14-54df27ac431c",
            "date": "2025-06-02T18:31:24.262Z",
            "exercises": [
                {
                    "id": 100,
                    "name": "Back Squat",
                    "sets": [
                        {
                            "id": "0plkjn",
                            "value": 1,
                            "num": 1,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": true,
                                "reps": true,
                                "volume": true,
                                "strengthScore": true
                            },
                            "bestSet": true
                        },
                        {
                            "id": "876tg",
                            "value": 2,
                            "num": 2,
                            "weight": 10,
                            "reps": 20,
                            "completed": true,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false,
                                "strengthScore": false
                            },
                            "bestSet": false
                        }
                    ]
                }
            ],
            "PRs": 4,
            "volume": 400,
            "reps": 40
        }
    ],
    "exercises": [
        {
            "name": "Back Squat",
            "prMetric": "reps",
            "PRs": {
                "1RM": 120,
                "weight": 10,
                "reps": 20,
                "volume": 200,
                "strengthScore": 8.750607681088965
            },
            "thumbnail": "",
            "instructions": {
                "media": "",
                "text": "Sit a 90* angle..."
            },
            "thresholds": {
                "male": {
                    "beginner": 0.75,
                    "novice": 1.25,
                    "intermediate": 1.5,
                    "advanced": 2.25,
                    "elite": 2.75
                },
                "female": {
                    "beginner": 0.5,
                    "novice": 0.75,
                    "intermediate": 1.25,
                    "advanced": 1.5,
                    "elite": 2
                }
            },
            "history": [
                {
                    "currentWeight": 88,
                    "currentPRs": {
                        "1RM": 0,
                        "weight": 0,
                        "reps": 0,
                        "volume": 0,
                        "strengthScore": 0
                    },
                    "newPRs": {
                        "1RM": 0,
                        "weight": 0,
                        "reps": 0,
                        "volume": 0,
                        "strengthScore": 0
                    },
                    "date": "2025-01-01T00:00:00.000Z",
                    "workoutId": 1,
                    "sets": [
                        {
                            "weight": 5,
                            "reps": 1,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "vol": false
                            }
                        },
                        {
                            "weight": 3,
                            "reps": 3,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "vol": true
                            }
                        },
                        {
                            "weight": 1,
                            "reps": 4,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "vol": false
                            }
                        }
                    ]
                },
                {
                    "currentWeight": 88,
                    "currentPRs": {
                        "1RM": 0,
                        "weight": 0,
                        "reps": 0,
                        "volume": 0,
                        "strengthScore": 0
                    },
                    "newPRs": {
                        "1RM": 0,
                        "weight": 0,
                        "reps": 0,
                        "volume": 0,
                        "strengthScore": 0
                    },
                    "date": "2025-03-01T00:00:00.000Z",
                    "workoutId": 2,
                    "sets": [
                        {
                            "weight": 5,
                            "reps": 1,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "vol": false
                            }
                        },
                        {
                            "weight": 3,
                            "reps": 3,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "vol": true
                            }
                        },
                        {
                            "weight": 1,
                            "reps": 4,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "vol": false
                            }
                        }
                    ]
                },
                {
                    "currentWeight": 88,
                    "currentPRs": {
                        "1RM": 0,
                        "weight": 0,
                        "reps": 0,
                        "volume": 0,
                        "strengthScore": 0
                    },
                    "newPRs": {
                        "1RM": 0,
                        "weight": 0,
                        "reps": 0,
                        "volume": 0,
                        "strengthScore": 0
                    },
                    "date": "2025-05-31T23:00:00.000Z",
                    "workoutId": 3,
                    "sets": [
                        {
                            "weight": 5,
                            "reps": 1,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "vol": false
                            }
                        },
                        {
                            "weight": 3,
                            "reps": 3,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "vol": true
                            }
                        },
                        {
                            "weight": 1,
                            "reps": 4,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "vol": false
                            }
                        }
                    ]
                },
                {
                    "currentWeight": 88,
                    "currentPRs": {
                        "1RM": 0,
                        "weight": 0,
                        "reps": 0,
                        "volume": 0,
                        "strengthScore": 0
                    },
                    "newPRs": {
                        "1RM": 0,
                        "weight": 0,
                        "reps": 0,
                        "volume": 0,
                        "strengthScore": 0
                    },
                    "date": "2025-01-05T00:00:00.000Z",
                    "workoutId": 4,
                    "sets": [
                        {
                            "weight": 5,
                            "reps": 1,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "vol": false
                            }
                        },
                        {
                            "weight": 3,
                            "reps": 3,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "vol": true
                            }
                        },
                        {
                            "weight": 1,
                            "reps": 4,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "vol": false
                            }
                        }
                    ]
                },
                {
                    "currentWeight": 88,
                    "currentPRs": {
                        "1RM": 0,
                        "weight": 0,
                        "reps": 0,
                        "volume": 0,
                        "strengthScore": 0
                    },
                    "newPRs": {
                        "1RM": 0,
                        "weight": 0,
                        "reps": 0,
                        "volume": 0,
                        "strengthScore": 0
                    },
                    "date": "2025-10-09T23:00:00.000Z",
                    "workoutId": 90210,
                    "sets": [
                        {
                            "weight": 5,
                            "reps": 1,
                            "PRs": {
                                "1RM": true,
                                "weight": true,
                                "reps": false,
                                "vol": false
                            }
                        },
                        {
                            "weight": 3,
                            "reps": 3,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "vol": true
                            }
                        },
                        {
                            "weight": 1,
                            "reps": 4,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "vol": false
                            }
                        }
                    ]
                },
                {
                    "currentWeight": 88,
                    "currentPRs": {
                        "1RM": 120,
                        "weight": 0,
                        "reps": 0,
                        "volume": 0,
                        "strengthScore": 0
                    },
                    "newPRs": {
                        "1RM": 120,
                        "weight": 10,
                        "reps": 20,
                        "volume": 200,
                        "strengthScore": 8.750607681088965
                    },
                    "date": "2025-06-02T18:31:24.262Z",
                    "workoutId": "af9a11fe-8f15-42cb-bf14-54df27ac431c",
                    "sets": [
                        {
                            "weight": 10,
                            "reps": 20,
                            "PRs": {
                                "1RM": false,
                                "weight": true,
                                "reps": true,
                                "volume": true,
                                "strengthScore": true
                            }
                        },
                        {
                            "weight": 10,
                            "reps": 20,
                            "PRs": {
                                "1RM": false,
                                "weight": false,
                                "reps": false,
                                "volume": false,
                                "strengthScore": false
                            }
                        }
                    ]
                }
            ]
        },
        {
            "name": "Hip Thrust",
            "prMetric": "reps",
            "PRs": {
                "1RM": 0,
                "weight": 0,
                "reps": 0,
                "volume": 0,
                "strengthScore": 0
            },
            "thumbnail": "",
            "instructions": {
                "media": "",
                "text": "Sit a 90* angle..."
            },
            "thresholds": {
                "male": {
                    "beginner": 0.5,
                    "novice": 1,
                    "intermediate": 1.75,
                    "advanced": 2.5,
                    "elite": 3.5
                },
                "female": {
                    "beginner": 0.5,
                    "novice": 1,
                    "intermediate": 1.5,
                    "advanced": 2.25,
                    "elite": 3
                }
            },
            "history": []
        },
        {
            "name": "Testing Exercise",
            "prMetric": "reps",
            "PRs": {
                "1RM": 0,
                "weight": 0,
                "reps": 0,
                "volume": 0,
                "strengthScore": 0
            },
            "thumbnail": "",
            "instructions": {
                "media": "",
                "text": ""
            },
            "history": []
        },
        {
            "name": "q",
            "prMetric": "reps",
            "PRs": {
                "1RM": 0,
                "weight": 0,
                "reps": 0,
                "volume": 0,
                "strengthScore": 0
            },
            "thresholds": {
                "male": {
                    "beginner": 0.75,
                    "novice": 1.25,
                    "intermediate": 1.5,
                    "advanced": 2.25,
                    "elite": 2.75
                },
                "female": {
                    "beginner": 0.5,
                    "novice": 0.75,
                    "intermediate": 1.25,
                    "advanced": 1.5,
                    "elite": 2
                }
            },
            "thumbnail": "",
            "instructions": {
                "media": "",
                "text": ""
            },
            "history": []
        },
        {
            "name": "qq",
            "prMetric": "reps",
            "PRs": {
                "1RM": 0,
                "weight": 0,
                "reps": 0,
                "volume": 0,
                "strengthScore": 0
            },
            "thresholds": {
                "male": {
                    "beginner": 0.75,
                    "novice": 1.25,
                    "intermediate": 1.5,
                    "advanced": 2.25,
                    "elite": 2.75
                },
                "female": {
                    "beginner": 0.5,
                    "novice": 0.75,
                    "intermediate": 1.25,
                    "advanced": 1.5,
                    "elite": 2
                }
            },
            "thumbnail": "",
            "instructions": {
                "media": "",
                "text": ""
            },
            "history": []
        },
        {
            "name": "qqq",
            "prMetric": "reps",
            "PRs": {
                "1RM": 0,
                "weight": 0,
                "reps": 0,
                "volume": 0,
                "strengthScore": 0
            },
            "thresholds": {
                "male": {
                    "beginner": 0.75,
                    "novice": 1.25,
                    "intermediate": 1.5,
                    "advanced": 2.25,
                    "elite": 2.75
                },
                "female": {
                    "beginner": 0.5,
                    "novice": 0.75,
                    "intermediate": 1.25,
                    "advanced": 1.5,
                    "elite": 2
                }
            },
            "thumbnail": "",
            "instructions": {
                "media": "",
                "text": ""
            },
            "history": []
        },
        {
            "name": "qqqq",
            "prMetric": "reps",
            "PRs": {
                "1RM": 0,
                "weight": 0,
                "reps": 0,
                "volume": 0,
                "strengthScore": 0
            },
            "thresholds": {
                "male": {
                    "beginner": 0.75,
                    "novice": 1.25,
                    "intermediate": 1.5,
                    "advanced": 2.25,
                    "elite": 2.75
                },
                "female": {
                    "beginner": 0.5,
                    "novice": 0.75,
                    "intermediate": 1.25,
                    "advanced": 1.5,
                    "elite": 2
                }
            },
            "thumbnail": "",
            "instructions": {
                "media": "",
                "text": ""
            },
            "history": []
        },
        {
            "name": "qqqqq",
            "prMetric": "reps",
            "PRs": {
                "1RM": 0,
                "weight": 0,
                "reps": 0,
                "volume": 0,
                "strengthScore": 0
            },
            "thresholds": {
                "male": {
                    "beginner": 0.75,
                    "novice": 1.25,
                    "intermediate": 1.5,
                    "advanced": 2.25,
                    "elite": 2.75
                },
                "female": {
                    "beginner": 0.5,
                    "novice": 0.75,
                    "intermediate": 1.25,
                    "advanced": 1.5,
                    "elite": 2
                }
            },
            "thumbnail": "",
            "instructions": {
                "media": "",
                "text": ""
            },
            "history": []
        },
        {
            "name": "qqqqqq",
            "prMetric": "reps",
            "PRs": {
                "1RM": 0,
                "weight": 0,
                "reps": 0,
                "volume": 0,
                "strengthScore": 0
            },
            "thresholds": {
                "male": {
                    "beginner": 0.75,
                    "novice": 1.25,
                    "intermediate": 1.5,
                    "advanced": 2.25,
                    "elite": 2.75
                },
                "female": {
                    "beginner": 0.5,
                    "novice": 0.75,
                    "intermediate": 1.25,
                    "advanced": 1.5,
                    "elite": 2
                }
            },
            "thumbnail": "",
            "instructions": {
                "media": "",
                "text": ""
            },
            "history": []
        }
    ],
    "strengthScores": {
        "Shoulders": {
            "Back Squat": 1,
            "Hip Thrust": 8
        },
        "Chest": {
            "Back Squat": 1,
            "Hip Thrust": 12
        },
        "Back": {
            "Back Squat": 1,
            "Hip Thrust": 30
        },
        "Biceps": {
            "Back Squat": 1,
            "Hip Thrust": 30
        },
        "Triceps": {
            "Back Squat": 1,
            "Hip Thrust": 27
        },
        "Lower Back": {
            "Back Squat": 1,
            "q": 8
        },
        "Abs": {
            "q": 1,
            "qq": 15
        },
        "Glutes": {
            "qq": 1,
            "qqq": 60
        },
        "Quads": {
            "qqq": 1,
            "qqqq": 40
        },
        "Hamstrings": {
            "qqqq": 1,
            "qqqqq": 50
        },
        "Calves": {
            "qqqqq": 20
        }
    }
}