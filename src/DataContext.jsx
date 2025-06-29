import React from 'react'

const DataContext = React.createContext()

const dataObjectTesting = {
    user: {
        sex: 'male',
        weight: 88,
        weeklyWorkoutsGoal: 2,
    },
    templateFolders: {
        userCreatedFolders: [
            {
                id: '1',
                name: 'user created folder 1',
                templates: ["333"]
            },
            {
                id: '2',
                name: 'user created folder 2',
                templates: ["222"]
            },
            {
                id: '3',
                name: 'user created folder 3',
                templates: ["111"]
            }
        ],
        myTemplates: ["444", "555"],
        exampleTemplates: [
            "3cfbb1e2-eb1b-4f2e-af55-5c8e454f5ee9",
            "3f8a0e47-d623-463b-acf0-fbac8a1a74d6",
            "aef85cf2-52cb-46b5-aecc-99ce45997c22"
        ],
        archivedTemplates: [{ folderId: "randomfolderidtesting", templateId: "666" }],
    },
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
        },
        {
            id: "3cfbb1e2-eb1b-4f2e-af55-5c8e454f5ee9",
            name: "GenMax Push",
            notes: "",
            exercises: [
                {
                    id: "e7665f67-0679-4fd9-9b58-d191499bf574",
                    name: "Bench Press",
                    sets: [
                        {
                            id: "0956919e-df4e-4ec1-a6fb-afc2ce82dd12",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "b534e9c0-ac08-4f57-8b11-6d7284737de8",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false

                        },
                        {
                            id: "4ee71679-11dd-47c1-a5ed-f96ab4c2dd20",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "d20a8cc2-8c75-4b41-9d4a-d383ebc3c709",
                            value: 4,
                            num: 4,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "21d8a79c-7b4d-463d-86aa-0c4506eb80bb",
                    name: "Seated Shoulder Press (Dumbbell)",
                    sets: [
                        {
                            id: "2e5d2cc6-cfe9-45dd-b656-00eae2bec3fc",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "494a0daf-ab39-4c4c-937e-930a7d4123f8",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "4ff484f4-86f1-4553-8d1c-31402ea66154",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "755652a9-48aa-4843-8f0d-4c752e3459d6",
                    name: "Incline Bench Press (Dumbbell)",
                    sets: [
                        {
                            id: "202d8a99-3521-4999-844f-a5c035356c88",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "5fff4b0c-ab24-4e85-a39b-2ee19974e3ac",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "184dc02b-7e55-4a77-8674-e1e08f77a24d",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "8930454c-9fe0-4c85-964c-6482d3169291",
                    name: "Lateral Raise (Dumbbell)",
                    sets: [
                        {
                            id: "9244e888-7c04-47e1-a5d2-48c2a77280a1",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "0f847dde-c95d-4acb-9442-e9af0f3f9bcf",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "fc6fa601-50c9-4f73-8578-ccf7625dcdfe",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "4d52ca69-493d-4659-89b9-a52aeb261001",
                    name: "Tricep Pushdown (Cable)",
                    sets: [
                        {
                            id: "1ff3c233-f7aa-4243-868f-0f29446bd995",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "9f229ed8-929b-4001-bd55-b164ed348b7c",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "438c41f0-ce7b-4d28-a282-569fb8833b3e",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                }
            ]
        },
        {
            id: "3f8a0e47-d623-463b-acf0-fbac8a1a74d6",
            name: "GenMax Pull",
            notes: "",
            exercises: [
                {
                    id: "9da6bb42-fa6d-4a2f-a52e-efacc4b7ca8f",
                    name: "Lat Pulldown",
                    sets: [
                        {
                            id: "cbe7f076-d6e8-44d6-8a85-1a23fc945192",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "201fe36c-2d8c-4784-ad23-7018d7fb2448",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "a3087b2f-35fa-44ed-b3f2-fe31be57f562",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "g94mg84j-76br-44ed-b3f2-fe31be57f562",
                            value: 4,
                            num: 4,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "6d080078-396f-4fda-87e5-4454d632bbcd",
                    name: "Bent Over Row (Barbell)",
                    sets: [
                        {
                            id: "15ecbed6-b489-47bc-95ea-fca5e738f308",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "a6a87822-33ac-4195-8479-680e2f14b944",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "a1f60502-102c-43bf-b540-ee2d193d2e01",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "9f315983-44b4-4a04-9725-23b9055cb2e0",
                    name: "Row (Cable)",
                    sets: [
                        {
                            id: "f337cd36-dd5d-4289-a0a3-d8045c0bb5cc",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "dde314b2-90a2-4c31-849c-5115544bdabe",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "e861ca7c-d0f7-4085-8b2c-b2c2a4fde783",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "2c7dd1fe-96be-4d11-ae75-bd767c1c92f7",
                    name: "Bicep Curl (Barbell)",
                    sets: [
                        {
                            id: "9235c5d3-5661-4af4-816f-90e6b3b98e8f",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "0b386d85-19aa-4fbc-8279-4967f171f760",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "fcd0ea35-d580-498f-a672-2510e8e48ec6",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                }
            ]
        },
        {
            id: "aef85cf2-52cb-46b5-aecc-99ce45997c22",
            name: "GenMax Legs",
            notes: "",
            exercises: [
                {
                    id: "4825e27a-a088-49fb-bcaa-7337a5537c56",
                    name: "Squat",
                    sets: [
                        {
                            id: "22e043fd-fc22-4a45-8518-b91ad5eef34a",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "e194af4a-ae6a-4b46-9e30-dc7aafb10e49",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "543911d6-d5db-4d68-b7a2-057dd58edd51",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "244f13d9-9f71-40a1-bfea-8948da6f8921",
                            value: 4,
                            num: 4,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "34711db3-62f4-4414-9b45-39d5517a0d88",
                    name: "Romanian Deadlift",
                    sets: [
                        {
                            id: "50698281-0138-4fde-b598-44df8941f387",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "af56f947-1ad2-4515-bec3-54690ae768e2",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "18d94b76-cb35-45cc-82f9-f546a7a4e7b8",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "60d410e7-db01-4b46-b74f-a5a47158edcc",
                    name: "Sled Leg Press",
                    sets: [
                        {
                            id: "6ce58045-a32f-4946-a3f6-b5b87679fb6f",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "93562fef-448e-4187-8013-f384c5ac6e88",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "ebd2380f-5361-4ea5-88a0-7fa3ccaaa6de",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "73a1d57a-c198-4579-bc07-5dcb88747a64",
                    name: "Leg Curl",
                    sets: [
                        {
                            id: "f76a37a4-1efd-41ff-98b6-feee04563309",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "96870989-a71c-483d-9be8-8e5a201a4b95",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "526df5d8-0279-4242-b830-5dd7160fc3fe",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "aca0a112-b092-4257-ba9e-9d37a699a3c2",
                    name: "Calf Raise (Machine)",
                    sets: [
                        {
                            id: "c6cbcda5-fb51-482b-ada8-8e88ab9fa3b6",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 18,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "c8699cdc-0cf3-4874-b9ed-36464eaacf08",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 18,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "6ae9a873-4982-493b-a036-a0c1f62f96d4",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                }
            ]
        },
        {
            id: "111",
            name: "user Legs",
            notes: "",
            exercises: [
                {
                    id: "4825e27a-a088-49fb-bcaa-7337a5537c56",
                    name: "Squat",
                    sets: [
                        {
                            id: "22e043fd-fc22-4a45-8518-b91ad5eef34a",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "e194af4a-ae6a-4b46-9e30-dc7aafb10e49",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "543911d6-d5db-4d68-b7a2-057dd58edd51",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "244f13d9-9f71-40a1-bfea-8948da6f8921",
                            value: 4,
                            num: 4,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "34711db3-62f4-4414-9b45-39d5517a0d88",
                    name: "Romanian Deadlift",
                    sets: [
                        {
                            id: "50698281-0138-4fde-b598-44df8941f387",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "af56f947-1ad2-4515-bec3-54690ae768e2",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "18d94b76-cb35-45cc-82f9-f546a7a4e7b8",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "60d410e7-db01-4b46-b74f-a5a47158edcc",
                    name: "Sled Leg Press",
                    sets: [
                        {
                            id: "6ce58045-a32f-4946-a3f6-b5b87679fb6f",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "93562fef-448e-4187-8013-f384c5ac6e88",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "ebd2380f-5361-4ea5-88a0-7fa3ccaaa6de",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "73a1d57a-c198-4579-bc07-5dcb88747a64",
                    name: "Leg Curl",
                    sets: [
                        {
                            id: "f76a37a4-1efd-41ff-98b6-feee04563309",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "96870989-a71c-483d-9be8-8e5a201a4b95",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "526df5d8-0279-4242-b830-5dd7160fc3fe",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "aca0a112-b092-4257-ba9e-9d37a699a3c2",
                    name: "Calf Raise (Machine)",
                    sets: [
                        {
                            id: "c6cbcda5-fb51-482b-ada8-8e88ab9fa3b6",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 18,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "c8699cdc-0cf3-4874-b9ed-36464eaacf08",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 18,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "6ae9a873-4982-493b-a036-a0c1f62f96d4",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                }
            ]
        },
        {
            id: "222",
            name: "user Pull",
            notes: "",
            exercises: [
                {
                    id: "9da6bb42-fa6d-4a2f-a52e-efacc4b7ca8f",
                    name: "Lat Pulldown",
                    sets: [
                        {
                            id: "cbe7f076-d6e8-44d6-8a85-1a23fc945192",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "201fe36c-2d8c-4784-ad23-7018d7fb2448",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "a3087b2f-35fa-44ed-b3f2-fe31be57f562",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "g94mg84j-76br-44ed-b3f2-fe31be57f562",
                            value: 4,
                            num: 4,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "6d080078-396f-4fda-87e5-4454d632bbcd",
                    name: "Bent Over Row (Barbell)",
                    sets: [
                        {
                            id: "15ecbed6-b489-47bc-95ea-fca5e738f308",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "a6a87822-33ac-4195-8479-680e2f14b944",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "a1f60502-102c-43bf-b540-ee2d193d2e01",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "9f315983-44b4-4a04-9725-23b9055cb2e0",
                    name: "Row (Cable)",
                    sets: [
                        {
                            id: "f337cd36-dd5d-4289-a0a3-d8045c0bb5cc",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "dde314b2-90a2-4c31-849c-5115544bdabe",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "e861ca7c-d0f7-4085-8b2c-b2c2a4fde783",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "2c7dd1fe-96be-4d11-ae75-bd767c1c92f7",
                    name: "Bicep Curl (Barbell)",
                    sets: [
                        {
                            id: "9235c5d3-5661-4af4-816f-90e6b3b98e8f",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "0b386d85-19aa-4fbc-8279-4967f171f760",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "fcd0ea35-d580-498f-a672-2510e8e48ec6",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                }
            ]
        },
        {
            id: "333",
            name: "user Push",
            notes: "",
            exercises: [
                {
                    id: "e7665f67-0679-4fd9-9b58-d191499bf574",
                    name: "Bench Press",
                    sets: [
                        {
                            id: "0956919e-df4e-4ec1-a6fb-afc2ce82dd12",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "b534e9c0-ac08-4f57-8b11-6d7284737de8",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false

                        },
                        {
                            id: "4ee71679-11dd-47c1-a5ed-f96ab4c2dd20",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "d20a8cc2-8c75-4b41-9d4a-d383ebc3c709",
                            value: 4,
                            num: 4,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "21d8a79c-7b4d-463d-86aa-0c4506eb80bb",
                    name: "Seated Shoulder Press (Dumbbell)",
                    sets: [
                        {
                            id: "2e5d2cc6-cfe9-45dd-b656-00eae2bec3fc",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "494a0daf-ab39-4c4c-937e-930a7d4123f8",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "4ff484f4-86f1-4553-8d1c-31402ea66154",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "755652a9-48aa-4843-8f0d-4c752e3459d6",
                    name: "Incline Bench Press (Dumbbell)",
                    sets: [
                        {
                            id: "202d8a99-3521-4999-844f-a5c035356c88",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "5fff4b0c-ab24-4e85-a39b-2ee19974e3ac",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "184dc02b-7e55-4a77-8674-e1e08f77a24d",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "8930454c-9fe0-4c85-964c-6482d3169291",
                    name: "Lateral Raise (Dumbbell)",
                    sets: [
                        {
                            id: "9244e888-7c04-47e1-a5d2-48c2a77280a1",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "0f847dde-c95d-4acb-9442-e9af0f3f9bcf",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "fc6fa601-50c9-4f73-8578-ccf7625dcdfe",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "4d52ca69-493d-4659-89b9-a52aeb261001",
                    name: "Tricep Pushdown (Cable)",
                    sets: [
                        {
                            id: "1ff3c233-f7aa-4243-868f-0f29446bd995",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "9f229ed8-929b-4001-bd55-b164ed348b7c",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "438c41f0-ce7b-4d28-a282-569fb8833b3e",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                }
            ]
        },
        {
            id: '444',
            name: 'jeff nippard',
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
        },
        {
            id: '555',
            name: 'athleanx',
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
        },
        {
            id: '666',
            name: 'dog water workout',
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
        },

    ],
    history: [
        {
            id: '100',
            name: 'Supreme Back workout history 1',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 1,
            date: new Date(2025, 5, 18),
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
            name: 'Supreme Chest workout history 2',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 2,
            date: new Date(2025, 5, 17),
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
            name: 'Supreme Legs workout history 3',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 3,
            date: new Date(2025, 5, 11),
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
            name: 'Supreme Glutes workout history 4',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 4,
            date: new Date(2025, 5, 10),
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
            name: 'Supreme Glutes workout history 5',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 5,
            date: new Date(2025, 5, 4),
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
            name: 'Supreme Glutes workout history 6',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 6,
            date: new Date(2025, 5, 3),
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
            name: 'Supreme Glutes workout history 7',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 7,
            date: new Date(2025, 4, 27),
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
            name: 'Supreme Glutes workout history 8',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 8,
            date: new Date(2025, 4, 21),
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
            name: 'Supreme Glutes workout history 9',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 9,
            date: new Date(2025, 4, 20),
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
            name: 'Supreme Glutes workout history 10',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 10,
            date: new Date(2025, 4, 14),
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
            name: 'Supreme Glutes workout history 11',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 11,
            date: new Date(2025, 1, 30),
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
            name: 'Supreme Glutes workout history 12',
            duration: 3780,
            notes: 'Wore lifting shoes',

            workoutId: 12,
            date: new Date(2024, 11, 31),
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
            name: 'Shoulder Press',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.35, novice: 0.55, intermediate: 0.8, advanced: 1.1, elite: 1.4 },
                female: { beginner: 0.2, novice: 0.35, intermediate: 0.5, advanced: 0.75, elite: 1 }
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
            name: 'Bent Over Row (Barbell)',
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
            name: '1 Arm Row (Dumbbell)',
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
            name: 'Bulgarian Split Squat (Dumbbell)',
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
            name: 'Bulgarian Split Squat (Barbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.25, novice: 0.5, intermediate: 0.75, advanced: 1.25, elite: 1.75 },
                female: { beginner: 0.15, novice: 0.3, intermediate: 0.55, advanced: 0.85, elite: 1.25 }
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
        'Shoulders': { 'Shoulder Press': 0, 'Seated Shoulder Press (Dumbbell)': 0, 'Lateral Raise (Dumbbell)': 0 },
        'Chest': { 'Bench Press': 0, 'Incline Bench Press': 0, 'Bench Press (Dumbbell)': 0, 'Incline Bench Press (Dumbbell)': 0 },
        'Back': { 'Deadlift': 0, 'Lat Pulldown': 0, 'Row (Cable)': 0, 'Bent Over Row (Barbell)': 0, '1 Arm Row (Dumbbell)': 0 },
        'Biceps': { 'Bicep Curl (Barbell)': 0, 'Bicep Curl (Dumbbell)': 0, 'Hammer Curl (Dumbbell)': 0 },
        'Triceps': { 'Tricep Pushdown (Cable)': 0, 'Skull Crusher': 0 },
        'Abs': { 'Seated Crunch (Machine)': 0, 'Crunch (Cable)': 0, 'Woodchopper (Cable)': 0, 'Side Bend (Dumbbell)': 0 },
        'Glutes': { 'Deadlift': 0, 'Squat': 0, 'Sled Leg Press': 0, 'Bulgarian Split Squat (Dumbbell)': 0, 'Bulgarian Split Squat (Barbell)': 0, 'Romanian Deadlift': 0, 'Hip Thrust': 0, 'Glute Bridge (Barbell)': 0 },
        'Hamstrings': { 'Deadlift': 0, 'Squat': 0, 'Sled Leg Press': 0, 'Bulgarian Split Squat (Dumbbell)': 0, 'Bulgarian Split Squat (Barbell)': 0, 'Romanian Deadlift': 0, 'Leg Curl': 0 },
        'Quads': { 'Deadlift': 0, 'Squat': 0, 'Sled Leg Press': 0, 'Bulgarian Split Squat (Dumbbell)': 0, 'Leg Extension': 0 },
        'Calves': { 'Calf Raise (Barbell)': 0, 'Calf Raise (Machine)': 0, 'Seated Calf Raise': 0, 'Calf Raise (Dumbbell)': 0 }
    }

}

const dataObject = {
    user: {
        sex: 'male',
        weight: 88,
        weeklyWorkoutsGoal: 2,
    },
    templateFolders: {
        userCreatedFolders: [],
        myTemplates: [],
        exampleTemplates: [
            "3cfbb1e2-eb1b-4f2e-af55-5c8e454f5ee9",
            "3f8a0e47-d623-463b-acf0-fbac8a1a74d6",
            "aef85cf2-52cb-46b5-aecc-99ce45997c22"
        ],
        archivedTemplates: [],
    },
    templates: [
        {
            id: "3cfbb1e2-eb1b-4f2e-af55-5c8e454f5ee9",
            name: "GenMax Push",
            notes: "",
            exercises: [
                {
                    id: "e7665f67-0679-4fd9-9b58-d191499bf574",
                    name: "Bench Press",
                    sets: [
                        {
                            id: "0956919e-df4e-4ec1-a6fb-afc2ce82dd12",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "b534e9c0-ac08-4f57-8b11-6d7284737de8",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false

                        },
                        {
                            id: "4ee71679-11dd-47c1-a5ed-f96ab4c2dd20",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "d20a8cc2-8c75-4b41-9d4a-d383ebc3c709",
                            value: 4,
                            num: 4,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "21d8a79c-7b4d-463d-86aa-0c4506eb80bb",
                    name: "Seated Shoulder Press (Dumbbell)",
                    sets: [
                        {
                            id: "2e5d2cc6-cfe9-45dd-b656-00eae2bec3fc",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "494a0daf-ab39-4c4c-937e-930a7d4123f8",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "4ff484f4-86f1-4553-8d1c-31402ea66154",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "755652a9-48aa-4843-8f0d-4c752e3459d6",
                    name: "Incline Bench Press (Dumbbell)",
                    sets: [
                        {
                            id: "202d8a99-3521-4999-844f-a5c035356c88",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "5fff4b0c-ab24-4e85-a39b-2ee19974e3ac",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "184dc02b-7e55-4a77-8674-e1e08f77a24d",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "8930454c-9fe0-4c85-964c-6482d3169291",
                    name: "Lateral Raise (Dumbbell)",
                    sets: [
                        {
                            id: "9244e888-7c04-47e1-a5d2-48c2a77280a1",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "0f847dde-c95d-4acb-9442-e9af0f3f9bcf",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "fc6fa601-50c9-4f73-8578-ccf7625dcdfe",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "4d52ca69-493d-4659-89b9-a52aeb261001",
                    name: "Tricep Pushdown (Cable)",
                    sets: [
                        {
                            id: "1ff3c233-f7aa-4243-868f-0f29446bd995",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "9f229ed8-929b-4001-bd55-b164ed348b7c",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "438c41f0-ce7b-4d28-a282-569fb8833b3e",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                }
            ]
        },
        {
            id: "3f8a0e47-d623-463b-acf0-fbac8a1a74d6",
            name: "GenMax Pull",
            notes: "",
            exercises: [
                {
                    id: "9da6bb42-fa6d-4a2f-a52e-efacc4b7ca8f",
                    name: "Lat Pulldown",
                    sets: [
                        {
                            id: "cbe7f076-d6e8-44d6-8a85-1a23fc945192",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "201fe36c-2d8c-4784-ad23-7018d7fb2448",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "a3087b2f-35fa-44ed-b3f2-fe31be57f562",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "g94mg84j-76br-44ed-b3f2-fe31be57f562",
                            value: 4,
                            num: 4,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "6d080078-396f-4fda-87e5-4454d632bbcd",
                    name: "Bent Over Row (Barbell)",
                    sets: [
                        {
                            id: "15ecbed6-b489-47bc-95ea-fca5e738f308",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "a6a87822-33ac-4195-8479-680e2f14b944",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "a1f60502-102c-43bf-b540-ee2d193d2e01",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "9f315983-44b4-4a04-9725-23b9055cb2e0",
                    name: "Row (Cable)",
                    sets: [
                        {
                            id: "f337cd36-dd5d-4289-a0a3-d8045c0bb5cc",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "dde314b2-90a2-4c31-849c-5115544bdabe",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "e861ca7c-d0f7-4085-8b2c-b2c2a4fde783",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "2c7dd1fe-96be-4d11-ae75-bd767c1c92f7",
                    name: "Bicep Curl (Barbell)",
                    sets: [
                        {
                            id: "9235c5d3-5661-4af4-816f-90e6b3b98e8f",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "0b386d85-19aa-4fbc-8279-4967f171f760",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "fcd0ea35-d580-498f-a672-2510e8e48ec6",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                }
            ]
        },
        {
            id: "aef85cf2-52cb-46b5-aecc-99ce45997c22",
            name: "GenMax Legs",
            notes: "",
            exercises: [
                {
                    id: "4825e27a-a088-49fb-bcaa-7337a5537c56",
                    name: "Squat",
                    sets: [
                        {
                            id: "22e043fd-fc22-4a45-8518-b91ad5eef34a",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "e194af4a-ae6a-4b46-9e30-dc7aafb10e49",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "543911d6-d5db-4d68-b7a2-057dd58edd51",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "244f13d9-9f71-40a1-bfea-8948da6f8921",
                            value: 4,
                            num: 4,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "34711db3-62f4-4414-9b45-39d5517a0d88",
                    name: "Romanian Deadlift",
                    sets: [
                        {
                            id: "50698281-0138-4fde-b598-44df8941f387",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "af56f947-1ad2-4515-bec3-54690ae768e2",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "18d94b76-cb35-45cc-82f9-f546a7a4e7b8",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "60d410e7-db01-4b46-b74f-a5a47158edcc",
                    name: "Sled Leg Press",
                    sets: [
                        {
                            id: "6ce58045-a32f-4946-a3f6-b5b87679fb6f",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "93562fef-448e-4187-8013-f384c5ac6e88",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "ebd2380f-5361-4ea5-88a0-7fa3ccaaa6de",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "73a1d57a-c198-4579-bc07-5dcb88747a64",
                    name: "Leg Curl",
                    sets: [
                        {
                            id: "f76a37a4-1efd-41ff-98b6-feee04563309",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "96870989-a71c-483d-9be8-8e5a201a4b95",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "526df5d8-0279-4242-b830-5dd7160fc3fe",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "aca0a112-b092-4257-ba9e-9d37a699a3c2",
                    name: "Calf Raise (Machine)",
                    sets: [
                        {
                            id: "c6cbcda5-fb51-482b-ada8-8e88ab9fa3b6",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 18,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "c8699cdc-0cf3-4874-b9ed-36464eaacf08",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 18,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "6ae9a873-4982-493b-a036-a0c1f62f96d4",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                }
            ]
        }
    ],
    history: [],
    exercises: [
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
            name: 'Shoulder Press',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.35, novice: 0.55, intermediate: 0.8, advanced: 1.1, elite: 1.4 },
                female: { beginner: 0.2, novice: 0.35, intermediate: 0.5, advanced: 0.75, elite: 1 }
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
            name: 'Bent Over Row (Barbell)',
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
            name: '1 Arm Row (Dumbbell)',
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
            name: 'Bulgarian Split Squat (Dumbbell)',
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
            name: 'Bulgarian Split Squat (Barbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.25, novice: 0.5, intermediate: 0.75, advanced: 1.25, elite: 1.75 },
                female: { beginner: 0.15, novice: 0.3, intermediate: 0.55, advanced: 0.85, elite: 1.25 }
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
        'Shoulders': { 'Shoulder Press': 0, 'Seated Shoulder Press (Dumbbell)': 0, 'Lateral Raise (Dumbbell)': 0 },
        'Chest': { 'Bench Press': 0, 'Incline Bench Press': 0, 'Bench Press (Dumbbell)': 0, 'Incline Bench Press (Dumbbell)': 0 },
        'Back': { 'Deadlift': 0, 'Lat Pulldown': 0, 'Row (Cable)': 0, 'Bent Over Row (Barbell)': 0, '1 Arm Row (Dumbbell)': 0 },
        'Biceps': { 'Bicep Curl (Barbell)': 0, 'Bicep Curl (Dumbbell)': 0, 'Hammer Curl (Dumbbell)': 0 },
        'Triceps': { 'Tricep Pushdown (Cable)': 0, 'Skull Crusher': 0 },
        'Abs': { 'Seated Crunch (Machine)': 0, 'Crunch (Cable)': 0, 'Woodchopper (Cable)': 0, 'Side Bend (Dumbbell)': 0 },
        'Glutes': { 'Deadlift': 0, 'Squat': 0, 'Sled Leg Press': 0, 'Bulgarian Split Squat (Dumbbell)': 0, 'Bulgarian Split Squat (Barbell)': 0, 'Romanian Deadlift': 0, 'Hip Thrust': 0, 'Glute Bridge (Barbell)': 0 },
        'Hamstrings': { 'Deadlift': 0, 'Squat': 0, 'Sled Leg Press': 0, 'Bulgarian Split Squat (Dumbbell)': 0, 'Bulgarian Split Squat (Barbell)': 0, 'Romanian Deadlift': 0, 'Leg Curl': 0 },
        'Quads': { 'Deadlift': 0, 'Squat': 0, 'Sled Leg Press': 0, 'Bulgarian Split Squat (Dumbbell)': 0, 'Leg Extension': 0 },
        'Calves': { 'Calf Raise (Barbell)': 0, 'Calf Raise (Machine)': 0, 'Seated Calf Raise': 0, 'Calf Raise (Dumbbell)': 0 }
    }

}

const dataObjectTesting2 = {
    user: {
        sex: 'male',
        weight: 88,
        weeklyWorkoutsGoal: 2,
    },
    templateFolders: {
        userCreatedFolders: [],
        myTemplates: ["86ff69f8-fb18-4345-b6d5-d7cebb9cc496"],
        exampleTemplates: [
            "3cfbb1e2-eb1b-4f2e-af55-5c8e454f5ee9",
            "3f8a0e47-d623-463b-acf0-fbac8a1a74d6",
            "aef85cf2-52cb-46b5-aecc-99ce45997c22"
        ],
        archivedTemplates: [],
    },
    templates: [
        {
            id: "3cfbb1e2-eb1b-4f2e-af55-5c8e454f5ee9",
            name: "GenMax Push",
            notes: "",
            exercises: [
                {
                    id: "e7665f67-0679-4fd9-9b58-d191499bf574",
                    name: "Bench Press",
                    sets: [
                        {
                            id: "0956919e-df4e-4ec1-a6fb-afc2ce82dd12",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "b534e9c0-ac08-4f57-8b11-6d7284737de8",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false

                        },
                        {
                            id: "4ee71679-11dd-47c1-a5ed-f96ab4c2dd20",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "d20a8cc2-8c75-4b41-9d4a-d383ebc3c709",
                            value: 4,
                            num: 4,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "21d8a79c-7b4d-463d-86aa-0c4506eb80bb",
                    name: "Seated Shoulder Press (Dumbbell)",
                    sets: [
                        {
                            id: "2e5d2cc6-cfe9-45dd-b656-00eae2bec3fc",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "494a0daf-ab39-4c4c-937e-930a7d4123f8",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "4ff484f4-86f1-4553-8d1c-31402ea66154",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "755652a9-48aa-4843-8f0d-4c752e3459d6",
                    name: "Incline Bench Press (Dumbbell)",
                    sets: [
                        {
                            id: "202d8a99-3521-4999-844f-a5c035356c88",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "5fff4b0c-ab24-4e85-a39b-2ee19974e3ac",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "184dc02b-7e55-4a77-8674-e1e08f77a24d",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "8930454c-9fe0-4c85-964c-6482d3169291",
                    name: "Lateral Raise (Dumbbell)",
                    sets: [
                        {
                            id: "9244e888-7c04-47e1-a5d2-48c2a77280a1",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "0f847dde-c95d-4acb-9442-e9af0f3f9bcf",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "fc6fa601-50c9-4f73-8578-ccf7625dcdfe",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "4d52ca69-493d-4659-89b9-a52aeb261001",
                    name: "Tricep Pushdown (Cable)",
                    sets: [
                        {
                            id: "1ff3c233-f7aa-4243-868f-0f29446bd995",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "9f229ed8-929b-4001-bd55-b164ed348b7c",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "438c41f0-ce7b-4d28-a282-569fb8833b3e",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                }
            ]
        },
        {
            id: "3f8a0e47-d623-463b-acf0-fbac8a1a74d6",
            name: "GenMax Pull",
            notes: "",
            exercises: [
                {
                    id: "9da6bb42-fa6d-4a2f-a52e-efacc4b7ca8f",
                    name: "Lat Pulldown",
                    sets: [
                        {
                            id: "cbe7f076-d6e8-44d6-8a85-1a23fc945192",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "201fe36c-2d8c-4784-ad23-7018d7fb2448",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "a3087b2f-35fa-44ed-b3f2-fe31be57f562",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "g94mg84j-76br-44ed-b3f2-fe31be57f562",
                            value: 4,
                            num: 4,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "6d080078-396f-4fda-87e5-4454d632bbcd",
                    name: "Bent Over Row (Barbell)",
                    sets: [
                        {
                            id: "15ecbed6-b489-47bc-95ea-fca5e738f308",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "a6a87822-33ac-4195-8479-680e2f14b944",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "a1f60502-102c-43bf-b540-ee2d193d2e01",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "9f315983-44b4-4a04-9725-23b9055cb2e0",
                    name: "Row (Cable)",
                    sets: [
                        {
                            id: "f337cd36-dd5d-4289-a0a3-d8045c0bb5cc",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "dde314b2-90a2-4c31-849c-5115544bdabe",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "e861ca7c-d0f7-4085-8b2c-b2c2a4fde783",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "2c7dd1fe-96be-4d11-ae75-bd767c1c92f7",
                    name: "Bicep Curl (Barbell)",
                    sets: [
                        {
                            id: "9235c5d3-5661-4af4-816f-90e6b3b98e8f",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "0b386d85-19aa-4fbc-8279-4967f171f760",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "fcd0ea35-d580-498f-a672-2510e8e48ec6",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                }
            ]
        },
        {
            id: "aef85cf2-52cb-46b5-aecc-99ce45997c22",
            name: "GenMax Legs",
            notes: "",
            exercises: [
                {
                    id: "4825e27a-a088-49fb-bcaa-7337a5537c56",
                    name: "Squat",
                    sets: [
                        {
                            id: "22e043fd-fc22-4a45-8518-b91ad5eef34a",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "e194af4a-ae6a-4b46-9e30-dc7aafb10e49",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "543911d6-d5db-4d68-b7a2-057dd58edd51",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "244f13d9-9f71-40a1-bfea-8948da6f8921",
                            value: 4,
                            num: 4,
                            weight: 0,
                            reps: 8,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "34711db3-62f4-4414-9b45-39d5517a0d88",
                    name: "Romanian Deadlift",
                    sets: [
                        {
                            id: "50698281-0138-4fde-b598-44df8941f387",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "af56f947-1ad2-4515-bec3-54690ae768e2",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "18d94b76-cb35-45cc-82f9-f546a7a4e7b8",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 10,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "60d410e7-db01-4b46-b74f-a5a47158edcc",
                    name: "Sled Leg Press",
                    sets: [
                        {
                            id: "6ce58045-a32f-4946-a3f6-b5b87679fb6f",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "93562fef-448e-4187-8013-f384c5ac6e88",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "ebd2380f-5361-4ea5-88a0-7fa3ccaaa6de",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 12,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "73a1d57a-c198-4579-bc07-5dcb88747a64",
                    name: "Leg Curl",
                    sets: [
                        {
                            id: "f76a37a4-1efd-41ff-98b6-feee04563309",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "96870989-a71c-483d-9be8-8e5a201a4b95",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "526df5d8-0279-4242-b830-5dd7160fc3fe",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                },
                {
                    id: "aca0a112-b092-4257-ba9e-9d37a699a3c2",
                    name: "Calf Raise (Machine)",
                    sets: [
                        {
                            id: "c6cbcda5-fb51-482b-ada8-8e88ab9fa3b6",
                            value: 1,
                            num: 1,
                            weight: 0,
                            reps: 18,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "c8699cdc-0cf3-4874-b9ed-36464eaacf08",
                            value: 2,
                            num: 2,
                            weight: 0,
                            reps: 18,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        },
                        {
                            id: "6ae9a873-4982-493b-a036-a0c1f62f96d4",
                            value: 3,
                            num: 3,
                            weight: 0,
                            reps: 15,
                            completed: false,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: false
                        }
                    ]
                }
            ]
        },
        {
            id: "86ff69f8-fb18-4345-b6d5-d7cebb9cc496",
            name: "Supreme Workout",
            notes: "",
            exercises: [
                {
                    id: "f16f0568-f086-4e8e-9e5b-11eabd7b9e41",
                    name: "Squat",
                    sets: [
                        {
                            id: "ba0b0a88-d2b1-4c19-a0bd-7782144b5a42",
                            value: 1, num: 1, weight: 10, reps: 10, completed: false
                        },
                        {
                            id: "3a7aedee-ade0-4364-a0c4-92225cdc965b",
                            value: 2, num: 2, weight: 10, reps: 10, completed: false
                        },
                        {
                            id: "fb94adc3-a302-48fb-9a93-15b4ea8561b7",
                            value: 3, num: 3, weight: 10, reps: 10, completed: false
                        }
                    ]
                },
                {
                    id: "5b76f0d5-84d1-4110-90a9-50ed606602a6",
                    name: "Hip Thrust",
                    sets: [
                        {
                            id: "4565235a-9a7d-4ff4-80b4-d1e9c8639fe4",
                            value: 1, num: 1, weight: 10, reps: 10, completed: false
                        },
                        {
                            id: "1f82adae-f79a-4a24-a916-9d16d1a45bc4",
                            value: 2, num: 2, weight: 10, reps: 10, completed: false
                        },
                        {
                            id: "7f1e74cb-4c8e-48b5-98e2-9a0c2840e71d",
                            value: 3, num: 3, weight: 10, reps: 10, completed: false
                        }
                    ]
                }
            ],
            lastDone: "2025-06-19T02:16:01.774Z"
        }
    ],
    history: [
        {
            id: "86ff69f8-fb18-4345-b6d5-d7cebb9cc496",
            name: "Supreme Workout",
            duration: 20,
            notes: "",
            workoutId: "80e0170f-dbc4-402c-8a20-2fed213ec529",
            date: new Date(2024, 11, 31),
            exercises: [
                {
                    id: "f16f0568-f086-4e8e-9e5b-11eabd7b9e41",
                    name: "Squat",
                    sets: [
                        {
                            id: "ba0b0a88-d2b1-4c19-a0bd-7782144b5a42",
                            value: 1, num: 1, weight: 1, reps: 1,
                            completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "3a7aedee-ade0-4364-a0c4-92225cdc965b",
                            value: 2, num: 2, weight: 1, reps: 1,
                            completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "fb94adc3-a302-48fb-9a93-15b4ea8561b7",
                            value: 3, num: 3, weight: 1, reps: 1,
                            completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    id: "5b76f0d5-84d1-4110-90a9-50ed606602a6",
                    name: "Hip Thrust",
                    sets: [
                        {
                            id: "4565235a-9a7d-4ff4-80b4-d1e9c8639fe4",
                            value: 1, num: 1, weight: 1, reps: 1, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "1f82adae-f79a-4a24-a916-9d16d1a45bc4",
                            value: 2, num: 2, weight: 1, reps: 1,
                            completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "7f1e74cb-4c8e-48b5-98e2-9a0c2840e71d",
                            value: 3, num: 3, weight: 1, reps: 1,
                            completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                }
            ],
            PRs: 10,
            volume: 6,
            reps: 6
        },
        {
            id: "86ff69f8-fb18-4345-b6d5-d7cebb9cc496",
            name: "Supreme Workout",
            duration: 13,
            notes: "",
            workoutId: "529aad23-318f-4dd4-a528-b9bbd5a5788d",
            date: new Date(2025, 1, 30),
            exercises: [
                {
                    id: "f16f0568-f086-4e8e-9e5b-11eabd7b9e41",
                    name: "Squat",
                    sets: [
                        {
                            id: "ba0b0a88-d2b1-4c19-a0bd-7782144b5a42",
                            value: 1, num: 1, weight: 2, reps: 2, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "3a7aedee-ade0-4364-a0c4-92225cdc965b",
                            value: 2, num: 2, weight: 2, reps: 2, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "fb94adc3-a302-48fb-9a93-15b4ea8561b7",
                            value: 3, num: 3, weight: 2, reps: 2, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    id: "5b76f0d5-84d1-4110-90a9-50ed606602a6",
                    name: "Hip Thrust",
                    sets: [
                        {
                            id: "4565235a-9a7d-4ff4-80b4-d1e9c8639fe4",
                            value: 1, num: 1, weight: 2, reps: 2, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "1f82adae-f79a-4a24-a916-9d16d1a45bc4",
                            value: 2, num: 2, weight: 2, reps: 2, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "7f1e74cb-4c8e-48b5-98e2-9a0c2840e71d",
                            value: 3, num: 3, weight: 2, reps: 2, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                }
            ],
            PRs: 10,
            volume: 24,
            reps: 12
        },
        {
            id: "86ff69f8-fb18-4345-b6d5-d7cebb9cc496",
            name: "Supreme Workout",
            duration: 13,
            notes: "",
            workoutId: "d1b4cbfe-ba8f-4fbd-aa0d-501138e398fb",
            date: new Date(2025, 4, 14),
            exercises: [
                {
                    id: "f16f0568-f086-4e8e-9e5b-11eabd7b9e41",
                    name: "Squat",
                    sets: [
                        {
                            id: "ba0b0a88-d2b1-4c19-a0bd-7782144b5a42",
                            value: 1, num: 1, weight: 3, reps: 3, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "3a7aedee-ade0-4364-a0c4-92225cdc965b",
                            value: 2, num: 2, weight: 3, reps: 3, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "fb94adc3-a302-48fb-9a93-15b4ea8561b7",
                            value: 3, num: 3, weight: 3, reps: 3, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    id: "5b76f0d5-84d1-4110-90a9-50ed606602a6",
                    name: "Hip Thrust",
                    sets: [
                        {
                            id: "4565235a-9a7d-4ff4-80b4-d1e9c8639fe4",
                            value: 1, num: 1, weight: 3, reps: 3, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "1f82adae-f79a-4a24-a916-9d16d1a45bc4",
                            value: 2, num: 2, weight: 3, reps: 3, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "7f1e74cb-4c8e-48b5-98e2-9a0c2840e71d",
                            value: 3, num: 3, weight: 3, reps: 3, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                }
            ],
            PRs: 10,
            volume: 54,
            reps: 18
        },
        {
            id: "86ff69f8-fb18-4345-b6d5-d7cebb9cc496",
            name: "Supreme Workout",
            duration: 12,
            notes: "",
            workoutId: "666d95c0-65a1-42c8-8284-1fd3e5a1f9bf",
            date: new Date(2025, 4, 20),
            exercises: [
                {
                    id: "f16f0568-f086-4e8e-9e5b-11eabd7b9e41",
                    name: "Squat",
                    sets: [
                        {
                            id: "ba0b0a88-d2b1-4c19-a0bd-7782144b5a42",
                            value: 1, num: 1, weight: 4, reps: 4, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "3a7aedee-ade0-4364-a0c4-92225cdc965b",
                            value: 2, num: 2, weight: 4, reps: 4, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "fb94adc3-a302-48fb-9a93-15b4ea8561b7",
                            value: 3, num: 3, weight: 4, reps: 4, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    id: "5b76f0d5-84d1-4110-90a9-50ed606602a6",
                    name: "Hip Thrust",
                    sets: [
                        {
                            id: "4565235a-9a7d-4ff4-80b4-d1e9c8639fe4",
                            value: 1, num: 1, weight: 4, reps: 4, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "1f82adae-f79a-4a24-a916-9d16d1a45bc4",
                            value: 2, num: 2, weight: 4, reps: 4, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "7f1e74cb-4c8e-48b5-98e2-9a0c2840e71d",
                            value: 3, num: 3, weight: 4, reps: 4, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                }
            ],
            PRs: 10,
            volume: 96,
            reps: 24
        },
        {
            id: "86ff69f8-fb18-4345-b6d5-d7cebb9cc496",
            name: "Supreme Workout",
            duration: 10,
            notes: "",
            workoutId: "35568fd2-34e3-4f30-af22-e4b6ef91a060",
            date: new Date(2025, 4, 21),
            exercises: [
                {
                    id: "f16f0568-f086-4e8e-9e5b-11eabd7b9e41",
                    name: "Squat",
                    sets: [
                        {
                            id: "ba0b0a88-d2b1-4c19-a0bd-7782144b5a42",
                            value: 1, num: 1, weight: 5, reps: 5, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "3a7aedee-ade0-4364-a0c4-92225cdc965b",
                            value: 2, num: 2, weight: 5, reps: 5, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "fb94adc3-a302-48fb-9a93-15b4ea8561b7",
                            value: 3, num: 3, weight: 5, reps: 5, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    id: "5b76f0d5-84d1-4110-90a9-50ed606602a6",
                    name: "Hip Thrust",
                    sets: [
                        {
                            id: "4565235a-9a7d-4ff4-80b4-d1e9c8639fe4",
                            value: 1, num: 1, weight: 5, reps: 5, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "1f82adae-f79a-4a24-a916-9d16d1a45bc4",
                            value: 2, num: 2, weight: 5, reps: 5, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "7f1e74cb-4c8e-48b5-98e2-9a0c2840e71d",
                            value: 3, num: 3, weight: 5, reps: 5, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                }
            ],
            PRs: 10,
            volume: 150,
            reps: 30
        },
        {
            id: "86ff69f8-fb18-4345-b6d5-d7cebb9cc496",
            name: "Supreme Workout",
            duration: 19,
            notes: "",
            workoutId: "3871f22f-05d5-4f36-974b-da7d8ddf6925",
            date: new Date(2025, 4, 27),
            exercises: [
                {
                    id: "f16f0568-f086-4e8e-9e5b-11eabd7b9e41",
                    name: "Squat",
                    sets: [
                        {
                            id: "ba0b0a88-d2b1-4c19-a0bd-7782144b5a42",
                            value: 1, num: 1, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "3a7aedee-ade0-4364-a0c4-92225cdc965b",
                            value: 2, num: 2, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "fb94adc3-a302-48fb-9a93-15b4ea8561b7",
                            value: 3, num: 3, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    id: "5b76f0d5-84d1-4110-90a9-50ed606602a6",
                    name: "Hip Thrust",
                    sets: [
                        {
                            id: "4565235a-9a7d-4ff4-80b4-d1e9c8639fe4",
                            value: 1, num: 1, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }, bestSet: true
                        },
                        {
                            id: "1f82adae-f79a-4a24-a916-9d16d1a45bc4",
                            value: 2, num: 2, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "7f1e74cb-4c8e-48b5-98e2-9a0c2840e71d",
                            value: 3, num: 3, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                }
            ],
            PRs: 10,
            volume: 216,
            reps: 36
        },
        {
            id: "86ff69f8-fb18-4345-b6d5-d7cebb9cc496",
            name: "Supreme Workout",
            duration: 14,
            notes: "",
            workoutId: "cedff48f-28f7-44d6-89df-3363c95f63d0",
            date: new Date(2025, 5, 3),
            exercises: [
                {
                    id: "f16f0568-f086-4e8e-9e5b-11eabd7b9e41",
                    name: "Squat",
                    sets: [
                        {
                            id: "ba0b0a88-d2b1-4c19-a0bd-7782144b5a42",
                            value: 1, num: 1, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        },
                        {
                            id: "3a7aedee-ade0-4364-a0c4-92225cdc965b",
                            value: 2, num: 2, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        },
                        {
                            id: "fb94adc3-a302-48fb-9a93-15b4ea8561b7",
                            value: 3, num: 3, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        }
                    ]
                },
                {
                    id: "5b76f0d5-84d1-4110-90a9-50ed606602a6",
                    name: "Hip Thrust",
                    sets: [
                        {
                            id: "4565235a-9a7d-4ff4-80b4-d1e9c8639fe4",
                            value: 1, num: 1, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        },
                        {
                            id: "1f82adae-f79a-4a24-a916-9d16d1a45bc4",
                            value: 2, num: 2, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        },
                        {
                            id: "7f1e74cb-4c8e-48b5-98e2-9a0c2840e71d",
                            value: 3, num: 3, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        }
                    ]
                }
            ],
            PRs: 0,
            volume: 216,
            reps: 36
        },
        {
            id: "86ff69f8-fb18-4345-b6d5-d7cebb9cc496",
            name: "Supreme Workout",
            duration: 9,
            notes: "",
            workoutId: "e48b911a-1b9e-4d6d-b901-16deebaf63cc",
            date: new Date(2025, 5, 4),
            exercises: [
                {
                    id: "f16f0568-f086-4e8e-9e5b-11eabd7b9e41",
                    name: "Squat",
                    sets: [
                        {
                            id: "ba0b0a88-d2b1-4c19-a0bd-7782144b5a42",
                            value: 1, num: 1, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        },
                        {
                            id: "3a7aedee-ade0-4364-a0c4-92225cdc965b",
                            value: 2, num: 2, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        },
                        {
                            id: "fb94adc3-a302-48fb-9a93-15b4ea8561b7",
                            value: 3, num: 3, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        }
                    ]
                },
                {
                    id: "5b76f0d5-84d1-4110-90a9-50ed606602a6",
                    name: "Hip Thrust",
                    sets: [
                        {
                            id: "4565235a-9a7d-4ff4-80b4-d1e9c8639fe4",
                            value: 1, num: 1, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        },
                        {
                            id: "1f82adae-f79a-4a24-a916-9d16d1a45bc4",
                            value: 2, num: 2, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        },
                        {
                            id: "7f1e74cb-4c8e-48b5-98e2-9a0c2840e71d",
                            value: 3, num: 3, weight: 6, reps: 6, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        }
                    ]
                }
            ],
            PRs: 0,
            volume: 216,
            reps: 36
        },
        {
            id: "86ff69f8-fb18-4345-b6d5-d7cebb9cc496",
            name: "Supreme Workout",
            duration: 11,
            notes: "",
            workoutId: "d1e1accd-0e23-425e-b19b-32128cdd2506",
            date: new Date(2025, 5, 10),
            exercises: [
                {
                    id: "f16f0568-f086-4e8e-9e5b-11eabd7b9e41",
                    name: "Squat",
                    sets: [
                        {
                            id: "ba0b0a88-d2b1-4c19-a0bd-7782144b5a42",
                            value: 1, num: 1, weight: 7, reps: 7, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "3a7aedee-ade0-4364-a0c4-92225cdc965b",
                            value: 2, num: 2, weight: 7, reps: 7, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "fb94adc3-a302-48fb-9a93-15b4ea8561b7",
                            value: 3, num: 3, weight: 7, reps: 7, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    id: "5b76f0d5-84d1-4110-90a9-50ed606602a6",
                    name: "Hip Thrust",
                    sets: [
                        {
                            id: "4565235a-9a7d-4ff4-80b4-d1e9c8639fe4",
                            value: 1, num: 1, weight: 7, reps: 7, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "1f82adae-f79a-4a24-a916-9d16d1a45bc4",
                            value: 2, num: 2, weight: 7, reps: 7, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "7f1e74cb-4c8e-48b5-98e2-9a0c2840e71d",
                            value: 3, num: 3, weight: 7, reps: 7, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                }
            ],
            PRs: 10,
            volume: 294,
            reps: 42
        },
        {
            id: "86ff69f8-fb18-4345-b6d5-d7cebb9cc496",
            name: "Supreme Workout",
            duration: 12,
            notes: "",
            workoutId: "31c936d3-0a00-45ec-9ac0-5687b399aa27",
            date: new Date(2025, 5, 11),
            exercises: [
                {
                    id: "f16f0568-f086-4e8e-9e5b-11eabd7b9e41",
                    name: "Squat",
                    sets: [
                        {
                            id: "ba0b0a88-d2b1-4c19-a0bd-7782144b5a42",
                            value: 1, num: 1, weight: 8, reps: 8, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "3a7aedee-ade0-4364-a0c4-92225cdc965b",
                            value: 2, num: 2, weight: 8, reps: 8, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "fb94adc3-a302-48fb-9a93-15b4ea8561b7",
                            value: 3, num: 3, weight: 8, reps: 8, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    id: "5b76f0d5-84d1-4110-90a9-50ed606602a6",
                    name: "Hip Thrust",
                    sets: [
                        {
                            id: "4565235a-9a7d-4ff4-80b4-d1e9c8639fe4",
                            value: 1, num: 1, weight: 8, reps: 8, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "1f82adae-f79a-4a24-a916-9d16d1a45bc4",
                            value: 2, num: 2, weight: 8, reps: 8, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "7f1e74cb-4c8e-48b5-98e2-9a0c2840e71d",
                            value: 3, num: 3, weight: 8, reps: 8, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                }
            ],
            PRs: 10,
            volume: 384,
            reps: 48
        },
        {
            id: "86ff69f8-fb18-4345-b6d5-d7cebb9cc496",
            name: "Supreme Workout",
            duration: 7,
            notes: "",
            workoutId: "43766f2a-c606-4a65-b552-98ac721df690",
            date: new Date(2025, 5, 17),
            exercises: [
                {
                    id: "f16f0568-f086-4e8e-9e5b-11eabd7b9e41",
                    name: "Squat",
                    sets: [
                        {
                            id: "ba0b0a88-d2b1-4c19-a0bd-7782144b5a42",
                            value: 1, num: 1, weight: 8, reps: 8, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        },
                        {
                            id: "3a7aedee-ade0-4364-a0c4-92225cdc965b",
                            value: 2, num: 2, weight: 8, reps: 8, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        },
                        {
                            id: "fb94adc3-a302-48fb-9a93-15b4ea8561b7",
                            value: 3, num: 3, weight: 8, reps: 8, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        }
                    ]
                },
                {
                    id: "5b76f0d5-84d1-4110-90a9-50ed606602a6",
                    name: "Hip Thrust",
                    sets: [
                        {
                            id: "4565235a-9a7d-4ff4-80b4-d1e9c8639fe4",
                            value: 1, num: 1, weight: 8, reps: 8, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        },
                        {
                            id: "1f82adae-f79a-4a24-a916-9d16d1a45bc4",
                            value: 2, num: 2, weight: 8, reps: 8, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        },
                        {
                            id: "7f1e74cb-4c8e-48b5-98e2-9a0c2840e71d",
                            value: 3, num: 3, weight: 8, reps: 8, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false },
                            bestSet: true
                        }
                    ]
                }
            ],
            PRs: 0,
            volume: 384,
            reps: 48
        },
        {
            id: "86ff69f8-fb18-4345-b6d5-d7cebb9cc496",
            name: "Supreme Workout",
            duration: 14,
            notes: "",
            workoutId: "cb42b0cc-d402-48af-be48-35d3499f6a2d",
            date: new Date(2025, 5, 18),
            exercises: [
                {
                    id: "f16f0568-f086-4e8e-9e5b-11eabd7b9e41",
                    name: "Squat",
                    sets: [
                        {
                            id: "ba0b0a88-d2b1-4c19-a0bd-7782144b5a42",
                            value: 1, num: 1, weight: 9, reps: 9, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "3a7aedee-ade0-4364-a0c4-92225cdc965b",
                            value: 2, num: 2, weight: 9, reps: 9, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "fb94adc3-a302-48fb-9a93-15b4ea8561b7",
                            value: 3, num: 3, weight: 9, reps: 9, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    id: "5b76f0d5-84d1-4110-90a9-50ed606602a6",
                    name: "Hip Thrust",
                    sets: [
                        {
                            id: "4565235a-9a7d-4ff4-80b4-d1e9c8639fe4",
                            value: 1, num: 1, weight: 9, reps: 9, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "1f82adae-f79a-4a24-a916-9d16d1a45bc4",
                            value: 2, num: 2, weight: 9, reps: 9, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "7f1e74cb-4c8e-48b5-98e2-9a0c2840e71d",
                            value: 3, num: 3, weight: 9, reps: 9, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                }
            ],
            PRs: 10,
            volume: 486,
            reps: 54
        },
        {
            id: "86ff69f8-fb18-4345-b6d5-d7cebb9cc496",
            name: "Supreme Workout",
            duration: 22,
            notes: "",
            workoutId: "6d92d64b-b632-44b6-848f-bcab7b5974bf",
            date: "2025-06-19T02:16:01.774Z",
            exercises: [
                {
                    id: "f16f0568-f086-4e8e-9e5b-11eabd7b9e41",
                    name: "Squat",
                    sets: [
                        {
                            id: "ba0b0a88-d2b1-4c19-a0bd-7782144b5a42",
                            value: 1, num: 1, weight: 10, reps: 10, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "3a7aedee-ade0-4364-a0c4-92225cdc965b",
                            value: 2, num: 2, weight: 10, reps: 10, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "fb94adc3-a302-48fb-9a93-15b4ea8561b7",
                            value: 3, num: 3, weight: 10, reps: 10, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    id: "5b76f0d5-84d1-4110-90a9-50ed606602a6",
                    name: "Hip Thrust",
                    sets: [
                        {
                            id: "4565235a-9a7d-4ff4-80b4-d1e9c8639fe4",
                            value: 1, num: 1, weight: 10, reps: 10, completed: true,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true },
                            bestSet: true
                        },
                        {
                            id: "1f82adae-f79a-4a24-a916-9d16d1a45bc4",
                            value: 2, num: 2, weight: 10, reps: 10, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            id: "7f1e74cb-4c8e-48b5-98e2-9a0c2840e71d",
                            value: 3, num: 3, weight: 10, reps: 10, completed: true,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                }
            ],
            PRs: 10,
            volume: 600,
            reps: 60
        }
    ],
    exercises: [
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
            name: 'Shoulder Press',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.35, novice: 0.55, intermediate: 0.8, advanced: 1.1, elite: 1.4 },
                female: { beginner: 0.2, novice: 0.35, intermediate: 0.5, advanced: 0.75, elite: 1 }
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
            name: 'Bent Over Row (Barbell)',
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
            name: '1 Arm Row (Dumbbell)',
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
            name: "Squat",
            prMetric: "volume",
            PRs: { "1RM": 13.3, weight: 10, reps: 10, volume: 100, strengthScore: 5.5 },
            thumbnail: "",
            instructions: {
                media: "", text: ""
            },
            thresholds: {
                male: { beginner: 0.75, novice: 1.25, intermediate: 1.5, advanced: 2.25, elite: 2.75 },
                female: { beginner: 0.5, novice: 0.75, intermediate: 1.25, advanced: 1.5, elite: 2 }
            },
            history: [
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
                    newPRs: { "1RM": 1, weight: 1, reps: 1, volume: 1, strengthScore: 0.4 },
                    date: new Date(2024, 11, 31),
                    workoutId: "80e0170f-dbc4-402c-8a20-2fed213ec529",
                    sets: [
                        {
                            weight: 1,
                            reps: 1,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 1,
                            reps: 1,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 1,
                            reps: 1,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 1, weight: 1, reps: 1, volume: 1, strengthScore: 0.4 },
                    newPRs: { "1RM": 2.1, weight: 2, reps: 2, volume: 4, strengthScore: 0.9 },
                    date: new Date(2025, 1, 30),
                    workoutId: "529aad23-318f-4dd4-a528-b9bbd5a5788d",
                    sets: [
                        {
                            weight: 2,
                            reps: 2,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 2,
                            reps: 2,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 2,
                            reps: 2,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 2.1, weight: 2, reps: 2, volume: 4, strengthScore: 0.9 },
                    newPRs: { "1RM": 3.2, weight: 3, reps: 3, volume: 9, strengthScore: 1.3 },
                    date: new Date(2025, 4, 14),
                    workoutId: "d1b4cbfe-ba8f-4fbd-aa0d-501138e398fb",
                    sets: [
                        {
                            weight: 3,
                            reps: 3,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 3,
                            reps: 3,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 3,
                            reps: 3,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 3.2, weight: 3, reps: 3, volume: 9, strengthScore: 1.3 },
                    newPRs: { "1RM": 4.4, weight: 4, reps: 4, volume: 16, strengthScore: 1.8 },
                    date: new Date(2025, 4, 20),
                    workoutId: "666d95c0-65a1-42c8-8284-1fd3e5a1f9bf",
                    sets: [
                        {
                            weight: 4,
                            reps: 4,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 4,
                            reps: 4,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 4,
                            reps: 4,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 4.4, weight: 4, reps: 4, volume: 16, strengthScore: 1.8 },
                    newPRs: { "1RM": 5.6, weight: 5, reps: 5, volume: 25, strengthScore: 2.3 },
                    date: new Date(2025, 4, 21),
                    workoutId: "35568fd2-34e3-4f30-af22-e4b6ef91a060",
                    sets: [
                        {
                            weight: 5,
                            reps: 5,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 5,
                            reps: 5,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 5,
                            reps: 5,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 5.6, weight: 5, reps: 5, volume: 25, strengthScore: 2.3 },
                    newPRs: { "1RM": 7, weight: 6, reps: 6, volume: 36, strengthScore: 2.9 },
                    date: new Date(2025, 4, 27),
                    workoutId: "3871f22f-05d5-4f36-974b-da7d8ddf6925",
                    sets: [
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 7, weight: 6, reps: 6, volume: 36, strengthScore: 2.9 },
                    newPRs: { "1RM": 7, weight: 6, reps: 6, volume: 36, strengthScore: 2.9 },
                    date: new Date(2025, 5, 3),
                    workoutId: "cedff48f-28f7-44d6-89df-3363c95f63d0",
                    sets: [
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 7, weight: 6, reps: 6, volume: 36, strengthScore: 2.9 },
                    newPRs: { "1RM": 7, weight: 6, reps: 6, volume: 36, strengthScore: 2.9 },
                    date: new Date(2025, 5, 4),
                    workoutId: "e48b911a-1b9e-4d6d-b901-16deebaf63cc",
                    sets: [
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 7, weight: 6, reps: 6, volume: 36, strengthScore: 2.9 },
                    newPRs: { "1RM": 8.4, weight: 7, reps: 7, volume: 49, strengthScore: 3.5 },
                    date: new Date(2025, 5, 10),
                    workoutId: "d1e1accd-0e23-425e-b19b-32128cdd2506",
                    sets: [
                        {
                            weight: 7,
                            reps: 7,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 7,
                            reps: 7,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 7,
                            reps: 7,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 8.4, weight: 7, reps: 7, volume: 49, strengthScore: 3.5 },
                    newPRs: { "1RM": 9.9, weight: 8, reps: 8, volume: 64, strengthScore: 4.1 },
                    date: new Date(2025, 5, 11),
                    workoutId: "31c936d3-0a00-45ec-9ac0-5687b399aa27",
                    sets: [
                        {
                            weight: 8,
                            reps: 8,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 8,
                            reps: 8,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 8,
                            reps: 8,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 9.9, weight: 8, reps: 8, volume: 64, strengthScore: 4.1 },
                    newPRs: { "1RM": 9.9, weight: 8, reps: 8, volume: 64, strengthScore: 4.1 },
                    date: new Date(2025, 5, 17),
                    workoutId: "43766f2a-c606-4a65-b552-98ac721df690",
                    sets: [
                        {
                            weight: 8,
                            reps: 8,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 8,
                            reps: 8,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 8,
                            reps: 8,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 9.9, weight: 8, reps: 8, volume: 64, strengthScore: 4.1 },
                    newPRs: { "1RM": 11.6, weight: 9, reps: 9, volume: 81, strengthScore: 4.8 },
                    date: new Date(2025, 5, 18),
                    workoutId: "cb42b0cc-d402-48af-be48-35d3499f6a2d",
                    sets: [
                        {
                            weight: 9,
                            reps: 9,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 9,
                            reps: 9,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 9,
                            reps: 9,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 11.6, weight: 9, reps: 9, volume: 81, strengthScore: 4.8 },
                    newPRs: { "1RM": 13.3, weight: 10, reps: 10, volume: 100, strengthScore: 5.5 },
                    date: "2025-06-19T02:16:01.774Z",
                    workoutId: "6d92d64b-b632-44b6-848f-bcab7b5974bf",
                    sets: [
                        {
                            weight: 10,
                            reps: 10,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 10,
                            reps: 10,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 10,
                            reps: 10,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                }
            ]
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
            name: 'Bulgarian Split Squat (Dumbbell)',
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
            name: 'Bulgarian Split Squat (Barbell)',
            prMetric: 'volume',
            PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
            thumbnail: '',
            instructions: { media: '', text: '' },
            thresholds: {
                male: { beginner: 0.25, novice: 0.5, intermediate: 0.75, advanced: 1.25, elite: 1.75 },
                female: { beginner: 0.15, novice: 0.3, intermediate: 0.55, advanced: 0.85, elite: 1.25 }
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
            name: "Hip Thrust",
            prMetric: "volume",
            PRs: { "1RM": 13.3, weight: 10, reps: 10, volume: 100, strengthScore: 4.3 },
            thumbnail: "",
            instructions: { media: "", text: "" },
            thresholds: {
                male: { beginner: 0.5, novice: 1, intermediate: 1.75, advanced: 2.5, elite: 3.5 },
                female: { beginner: 0.5, novice: 1, intermediate: 1.5, advanced: 2.25, elite: 3 }
            },
            history: [
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 0, weight: 0, reps: 0, volume: 0, strengthScore: 0 },
                    newPRs: { "1RM": 1, weight: 1, reps: 1, volume: 1, strengthScore: 0.3 },
                    date: new Date(2024, 11, 31),
                    workoutId: "80e0170f-dbc4-402c-8a20-2fed213ec529",
                    sets: [
                        {
                            weight: 1,
                            reps: 1,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 1,
                            reps: 1,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 1,
                            reps: 1,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 1, weight: 1, reps: 1, volume: 1, strengthScore: 0.3 },
                    newPRs: { "1RM": 2.1, weight: 2, reps: 2, volume: 4, strengthScore: 0.7 },
                    date: new Date(2025, 1, 30),
                    workoutId: "529aad23-318f-4dd4-a528-b9bbd5a5788d",
                    sets: [
                        {
                            weight: 2,
                            reps: 2,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 2,
                            reps: 2,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 2,
                            reps: 2,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 2.1, weight: 2, reps: 2, volume: 4, strengthScore: 0.7 },
                    newPRs: { "1RM": 3.2, weight: 3, reps: 3, volume: 9, strengthScore: 1 },
                    date: new Date(2025, 4, 14),
                    workoutId: "d1b4cbfe-ba8f-4fbd-aa0d-501138e398fb",
                    sets: [
                        {
                            weight: 3,
                            reps: 3,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 3,
                            reps: 3,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 3,
                            reps: 3,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 3.2, weight: 3, reps: 3, volume: 9, strengthScore: 1 },
                    newPRs: { "1RM": 4.4, weight: 4, reps: 4, volume: 16, strengthScore: 1.4 },
                    date: new Date(2025, 4, 20),
                    workoutId: "666d95c0-65a1-42c8-8284-1fd3e5a1f9bf",
                    sets: [
                        {
                            weight: 4,
                            reps: 4,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 4,
                            reps: 4,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 4,
                            reps: 4,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 4.4, weight: 4, reps: 4, volume: 16, strengthScore: 1.4 },
                    newPRs: { "1RM": 5.6, weight: 5, reps: 5, volume: 25, strengthScore: 1.8 },
                    date: new Date(2025, 4, 21),
                    workoutId: "35568fd2-34e3-4f30-af22-e4b6ef91a060",
                    sets: [
                        {
                            weight: 5,
                            reps: 5,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 5,
                            reps: 5,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 5,
                            reps: 5,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 5.6, weight: 5, reps: 5, volume: 25, strengthScore: 1.8 },
                    newPRs: { "1RM": 7, weight: 6, reps: 6, volume: 36, strengthScore: 2.3 },
                    date: new Date(2025, 4, 27),
                    workoutId: "3871f22f-05d5-4f36-974b-da7d8ddf6925",
                    sets: [
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 7, weight: 6, reps: 6, volume: 36, strengthScore: 2.3 },
                    newPRs: { "1RM": 7, weight: 6, reps: 6, volume: 36, strengthScore: 2.3 },
                    date: new Date(2025, 5, 3),
                    workoutId: "cedff48f-28f7-44d6-89df-3363c95f63d0",
                    sets: [
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 7, weight: 6, reps: 6, volume: 36, strengthScore: 2.3 },
                    newPRs: { "1RM": 7, weight: 6, reps: 6, volume: 36, strengthScore: 2.3 },
                    date: new Date(2025, 5, 4),
                    workoutId: "e48b911a-1b9e-4d6d-b901-16deebaf63cc",
                    sets: [
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 6,
                            reps: 6,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 7, weight: 6, reps: 6, volume: 36, strengthScore: 2.3 },
                    newPRs: { "1RM": 8.4, weight: 7, reps: 7, volume: 49, strengthScore: 2.7 },
                    date: new Date(2025, 5, 10),
                    workoutId: "d1e1accd-0e23-425e-b19b-32128cdd2506",
                    sets: [
                        {
                            weight: 7,
                            reps: 7,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 7,
                            reps: 7,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 7,
                            reps: 7,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 8.4, weight: 7, reps: 7, volume: 49, strengthScore: 2.7 },
                    newPRs: { "1RM": 9.9, weight: 8, reps: 8, volume: 64, strengthScore: 3.2 },
                    date: new Date(2025, 5, 11),
                    workoutId: "31c936d3-0a00-45ec-9ac0-5687b399aa27",
                    sets: [
                        {
                            weight: 8,
                            reps: 8,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 8,
                            reps: 8,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 8,
                            reps: 8,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 9.9, weight: 8, reps: 8, volume: 64, strengthScore: 3.2 },
                    newPRs: { "1RM": 9.9, weight: 8, reps: 8, volume: 64, strengthScore: 3.2 },
                    date: new Date(2025, 5, 17),
                    workoutId: "43766f2a-c606-4a65-b552-98ac721df690",
                    sets: [
                        {
                            weight: 8,
                            reps: 8,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 8,
                            reps: 8,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 8,
                            reps: 8,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 9.9, weight: 8, reps: 8, volume: 64, strengthScore: 3.2 },
                    newPRs: { "1RM": 11.6, weight: 9, reps: 9, volume: 81, strengthScore: 3.8 },
                    date: new Date(2025, 5, 18),
                    workoutId: "cb42b0cc-d402-48af-be48-35d3499f6a2d",
                    sets: [
                        {
                            weight: 9,
                            reps: 9,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 9,
                            reps: 9,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 9,
                            reps: 9,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                },
                {
                    currentWeight: 88,
                    currentPRs: { "1RM": 11.6, weight: 9, reps: 9, volume: 81, strengthScore: 3.8 },
                    newPRs: { "1RM": 13.3, weight: 10, reps: 10, volume: 100, strengthScore: 4.3 },
                    date: "2025-06-19T02:16:01.774Z",
                    workoutId: "6d92d64b-b632-44b6-848f-bcab7b5974bf",
                    sets: [
                        {
                            weight: 10,
                            reps: 10,
                            PRs: { "1RM": true, weight: true, reps: true, volume: true, strengthScore: true }
                        },
                        {
                            weight: 10,
                            reps: 10,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        },
                        {
                            weight: 10,
                            reps: 10,
                            PRs: { "1RM": false, weight: false, reps: false, volume: false, strengthScore: false }
                        }
                    ]
                }
            ]
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
        'Shoulders': { 'Shoulder Press': 0, 'Seated Shoulder Press (Dumbbell)': 0, 'Lateral Raise (Dumbbell)': 0 },
        'Chest': { 'Bench Press': 0, 'Incline Bench Press': 0, 'Bench Press (Dumbbell)': 0, 'Incline Bench Press (Dumbbell)': 0 },
        'Back': { 'Deadlift': 0, 'Lat Pulldown': 0, 'Row (Cable)': 0, 'Bent Over Row (Barbell)': 0, '1 Arm Row (Dumbbell)': 0 },
        'Biceps': { 'Bicep Curl (Barbell)': 0, 'Bicep Curl (Dumbbell)': 0, 'Hammer Curl (Dumbbell)': 0 },
        'Triceps': { 'Tricep Pushdown (Cable)': 0, 'Skull Crusher': 0 },
        'Abs': { 'Seated Crunch (Machine)': 0, 'Crunch (Cable)': 0, 'Woodchopper (Cable)': 0, 'Side Bend (Dumbbell)': 0 },
        "Glutes": { "Deadlift": 0, "Squat": 5.5, "Sled Leg Press": 0, "Bulgarian Split Squat (Dumbbell)": 0, "Bulgarian Split Squat (Barbell)": 0, "Romanian Deadlift": 0, "Hip Thrust": 4.3, "Glute Bridge (Barbell)": 0 },
        "Hamstrings": { "Deadlift": 0, "Squat": 5.5, "Sled Leg Press": 0, "Bulgarian Split Squat (Dumbbell)": 0, "Bulgarian Split Squat (Barbell)": 0, "Romanian Deadlift": 0, "Leg Curl": 0 },
        "Quads": { "Deadlift": 0, "Squat": 5.5, "Sled Leg Press": 0, "Bulgarian Split Squat (Dumbbell)": 0, "Leg Extension": 0 },
        'Calves': { 'Calf Raise (Barbell)': 0, 'Calf Raise (Machine)': 0, 'Seated Calf Raise': 0, 'Calf Raise (Dumbbell)': 0 }
    }

}

function useData() {
    return React.useContext(DataContext)
}

function DataProvider({ children }) {
    function useLocalStorage(key) {
        // get data from localStorage or use empty dataObject
        const [data, setData] = React.useState(() => {
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : dataObjectTesting2;
            } catch (error) {
                console.error(`Error reading localStorage key "${key}":`, error);
                return dataObjectTesting2;
            }
        });
        // console.log('DATA IN DB:', data)

        //combiing setData with localStorage.setItem
        function saveData(value) {
            try {
                setData((prevValue) => {
                    const valueToStore = value instanceof Function ? value(prevValue) : value;
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                    return valueToStore;
                });
            } catch (error) {
                console.error(`Error setting localStorage key "${key}":`, error);
            }
        };

        // sync data state across tabs when localStorage changes
        React.useEffect(() => {
            function handleStorageChange(e) {
                // if same key
                if (e.key === key && e.newValue !== null) {
                    try {
                        const newValue = JSON.parse(e.newValue);
                        setData(newValue);
                    } catch (error) {
                        console.error(`Error parsing localStorage value for key "${key}":`, error);
                    }
                }
            };

            window.addEventListener('storage', handleStorageChange);

            return () => {
                window.removeEventListener('storage', handleStorageChange);
            };
        }, [key]);

        return [data, saveData];
    }

    return (
        <DataContext.Provider value={useLocalStorage}>
            {children}
        </DataContext.Provider>
    )
}

export { DataProvider, useData }
