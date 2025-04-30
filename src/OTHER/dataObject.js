







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