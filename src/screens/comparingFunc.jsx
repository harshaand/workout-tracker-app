/**
 * Compare two exercise arrays and log the differences
 * @param {Array} exercises1 - First exercise array
 * @param {Array} exercises2 - Second exercise array
 */
function compareExercises(exercises1, exercises2) {
    // Ensure inputs are valid arrays
    if (!Array.isArray(exercises1) || !Array.isArray(exercises2)) {
        console.log("Input error: Both arguments must be arrays");
        return;
    }

    // Create a map of exercises by ID for easier comparison
    const ex1Map = new Map();
    const ex2Map = new Map();

    exercises1.forEach(ex => ex1Map.set(ex.id, ex));
    exercises2.forEach(ex => ex2Map.set(ex.id, ex));

    // Track overall statistics
    let totalSetDifferences = 0;
    let totalMoreSets = 0;
    let totalLessSets = 0;

    // Check all exercise IDs in first array
    for (const [exId, ex1] of ex1Map.entries()) {
        // Check if this exercise exists in the second array
        if (ex2Map.has(exId)) {
            const ex2 = ex2Map.get(exId);

            // Compare number of sets
            const setDiff = ex2.sets.length - ex1.sets.length;

            if (setDiff > 0) {
                console.log(`Exercise '${ex1.name}' has ${setDiff} more sets in the second array`);
                totalMoreSets += setDiff;
            } else if (setDiff < 0) {
                console.log(`Exercise '${ex1.name}' has ${Math.abs(setDiff)} less sets in the second array`);
                totalLessSets += Math.abs(setDiff);
            }

            // Compare weights and reps in each set
            const minSets = Math.min(ex1.sets.length, ex2.sets.length);
            let diffCount = 0;

            for (let i = 0; i < minSets; i++) {
                const set1 = ex1.sets[i];
                const set2 = ex2.sets[i];

                if (set1.weight !== set2.weight || set1.reps !== set2.reps) {
                    diffCount++;
                }
            }

            if (diffCount > 0) {
                console.log(`Exercise '${ex1.name}' has ${diffCount} sets with different values for reps and weight`);
                totalSetDifferences += diffCount;
            }
        } else {
            console.log(`Exercise '${ex1.name}' is missing in the second array`);
        }
    }

    // Check for exercises in the second array that are not in the first
    for (const [exId, ex2] of ex2Map.entries()) {
        if (!ex1Map.has(exId)) {
            console.log(`Exercise '${ex2.name}' is new in the second array`);
            totalMoreSets += ex2.sets.length;
        }
    }

    // Summary logs
    if (totalSetDifferences > 0) {
        console.log(`Total: ${totalSetDifferences} sets have different values for reps and weight`);
    }

    if (totalMoreSets > 0) {
        console.log(`Total: There are ${totalMoreSets} more sets in the second array`);
    }

    if (totalLessSets > 0) {
        console.log(`Total: There are ${totalLessSets} less sets in the second array`);
    }
}

// Example usage:
const exercises1 = [
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
            }
        ]
    }
];

const exercises2 = [
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
                weight: 15, // Changed weight
                reps: 20,
                completed: true
            },
            {
                id: '876tg',
                value: 2,
                num: 2,
                weight: 10,
                reps: 25, // Changed reps
                completed: false
            },
            {
                id: 'newset123',
                value: 3,
                num: 3,
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
            }
        ]
    }
];

// Run the comparison
console.log("Comparing exercise arrays:");
compareExercises(exercises1, exercises2);