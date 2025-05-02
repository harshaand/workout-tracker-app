import React from 'react'
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

function App() {
  React.useEffect(() => {

    function compareExercises(oldExercises, newExercises) {
      // NUMBER OF EXERCISES REMOVED BY USER
      const newExercisesIds = new Set(newExercises.map(ex => ex.id));
      const missingExercises = oldExercises.filter(ex => !newExercisesIds.has(ex.id)).length;
      if (missingExercises > 0) {
        console.log(`Remove ${missingExercises} exercise`);
      }

      // NUMBER OF EXERCISES ADDED BY USER
      const addedSets = newExercises.length + missingExercises - oldExercises.length
      if (newExercises.length > oldExercises.length - missingExercises) {
        console.log(`Add ${addedSets} exercises`);
      }

      // CHECK IF EXERCISE ORDER IS DIFFERENT
      let orderDifferent = false;
      const minLength = Math.min(oldExercises.length, newExercises.length - addedSets);

      for (let i = 0; i < minLength; i++) {
        if (oldExercises[i].id !== newExercises[i].id) {
          orderDifferent = true;
          break;
        }
      }

      if (orderDifferent) {
        console.log('Reorder exercises');
      }


      // CALCULATING DIFFERENCES IN SETS
      const oldExercisesMap = new Map();
      oldExercises.forEach(exercise => {
        oldExercisesMap.set(exercise.id, exercise);
      });

      let totalDifferentSets = 0;
      let totalMoreSets = 0;
      let totalLessSets = 0;

      for (const newExercise of newExercises) {
        const oldExercise = oldExercisesMap.get(newExercise.id);

        // skip if exercise doesn't exist in the old template
        if (!oldExercise) continue;

        // difference in number of sets
        if (oldExercise.sets.length < newExercise.sets.length) {
          totalMoreSets += (newExercise.sets.length - oldExercise.sets.length);
        } else if (oldExercise.sets.length > newExercise.sets.length) {
          totalLessSets += (oldExercise.sets.length - newExercise.sets.length);
        }

        // number of sets with different values for weight/reps
        const minSetsLength = Math.min(oldExercise.sets.length, newExercise.sets.length);
        for (let i = 0; i < minSetsLength; i++) {
          const oldSet = oldExercise.sets[i];
          const newSet = newExercise.sets[i];

          if (oldSet.weight !== newSet.weight || oldSet.reps !== newSet.reps) {
            totalDifferentSets++;
          }
        }
      }

      if (totalDifferentSets > 0) {
        console.log(`Update values for ${totalDifferentSets} sets`);
      }

      if (totalMoreSets > 0) {
        console.log(`Add ${totalMoreSets} sets`);
      }

      if (totalLessSets > 0) {
        console.log(`Remove ${totalLessSets} sets`);
      }
    }

    // temporary templates:
    const oldExercises = [
      {
        id: 1,
        name: 'morty curcles',
        prevWeight: 10,
        prevReps: 20,
        sets: [
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
        sets: [
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
          },
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
    ];

    const newExercises = [
      {
        id: 5,
        name: 'jerry skullcrushes',
        prevWeight: 10,
        prevReps: 20,
        sets: [
          {
            id: '0plkjn',
            value: 1,
            num: 1,
            weight: 15,
            reps: 20,
            completed: true
          },
          {
            id: '876tg',
            value: 2,
            num: 2,
            weight: 15,
            reps: 20,
            completed: false
          },
          {
            id: 'newoldSet',
            value: 3,
            num: 3,
            weight: 12,
            reps: 15,
            completed: false
          },

        ]
      },
      {
        id: 1,
        name: 'morty curcles',
        prevWeight: 10,
        prevReps: 20,
        sets: [
          {
            id: '0plkjn',
            value: 1,
            num: 1,
            weight: 15,
            reps: 20,
            completed: true
          },
          {
            id: '876tg',
            value: 2,
            num: 2,
            weight: 15,
            reps: 20,
            completed: false
          },
          {
            id: 'newoldSet',
            value: 3,
            num: 3,
            weight: 12,
            reps: 15,
            completed: false
          },

        ]
      },
      {
        id: 4,
        name: 'rick pulldown',
        prevWeight: 10,
        prevReps: 20,
        sets: [
          {
            id: '0plkjn',
            value: 1,
            num: 1,
            weight: 15,
            reps: 20,
            completed: true
          },
          {
            id: '876tg',
            value: 2,
            num: 2,
            weight: 15,
            reps: 20,
            completed: false
          },
          {
            id: 'newoldSet',
            value: 3,
            num: 3,
            weight: 12,
            reps: 15,
            completed: false
          },

        ]
      },
    ];





    // Run the comparison
    console.log("------------ TESTING ------------");
    compareExercises(oldExercises, newExercises);

  }, []);
  return (
    <SessionScreen template={data.templates[0]} data={data} />
  )
}

export default App
