import React from 'react'
import DataContext from '../../DataContext.jsx'
import Navbar from '../../components/Navbar.jsx'
import CardExerciseHistory from '../../components/Cards/CardExerciseHistory.jsx'
import ButtonSmall from '../../components/Buttons/ButtonSmall.jsx'
import { RoutingContext } from '../../RoutingContext.jsx'
import { format, compareDesc } from 'date-fns';
import ModalHistoryWorkout from '../../components/Modals/session/content-modals/HistoryWorkout.jsx'
import {
    BentOverRow, Deadlift, LatPulldown, RowCable, RowDumbbell, BicepCurlBarbell, BicepCurlDumbbell, HammerCurlDumbbell,
    CalfRaiseBarbell, CalfRaiseDumbbell, CalfRaiseMachine, SeatedCalfRaise, BenchPressDumbbell, BenchPress,
    InclineBenchPressDumbbell, InclineBenchPress, CrunchCable, SeatedCrunchMachine, SideBendDumbbell, WoodChopperCable,
    BulgarianSplitSquatBarbell, BulgarianSplitSquatDumbbell, GluteBridgeBarbell, HipThrust, LegCurl, LegExtension,
    RomanianDeadlift, SledLegPress, Squat, ShoulderPress, LateralRaiseDumbbell, SeatedShoulderPressDumbbell, SkullCrusher, TricepPushdownCable
} from '../../assets/exercise-images/index.js';

function HistoryExerciseScreen({ exercise = 'Back Squat' }) {
    const { handleScreenChange } = React.useContext(RoutingContext)

    const { data, saveData } = React.useContext(DataContext)
    const [selectedHistoryWorkoutModal, setSelectedHistoryWorkoutModal] = React.useState(null)

    const months = [
        'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
        'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];

    function renderHistoryCards() {
        const exerciseData = data.exercises.find(exerciseObject => exerciseObject.name === exercise);

        if (exerciseData.history.length > 0) {
            const groupedWorkouts = {};

            exerciseData.history.forEach(history => {
                const date = new Date(history.date)
                const key = format(date, 'yyyy-MM')
                const year = date.getFullYear()
                const month = date.getMonth()

                if (!groupedWorkouts[key]) {
                    groupedWorkouts[key] = {
                        year,
                        month,
                        workouts: []
                    };
                }

                groupedWorkouts[key].workouts.push(history);
            });

            const sortedGroups = Object.values(groupedWorkouts).sort((a, b) => {
                const dateA = new Date(a.year, a.month)
                const dateB = new Date(b.year, b.month)
                return compareDesc(dateA, dateB)
            });

            sortedGroups.forEach(group => {
                group.workouts.sort((a, b) => compareDesc(a.date, b.date));
            });


            return sortedGroups.map(group => {
                return <div className='exercise-history__main__container-month'>
                    <p className='heading'>{`${months[group.month]} ${group.year}`}</p>
                    {group.workouts.map(history => {
                        return <>
                            <CardExerciseHistory history={history} onClick={() => {
                                setSelectedHistoryWorkoutModal(history.workoutId)
                            }} />
                            <ModalHistoryWorkout history={data.history.find(his => his.workoutId === history.workoutId)} selectedModal={selectedHistoryWorkoutModal}
                                exercise={exercise}
                                setSelectedModal={setSelectedHistoryWorkoutModal}
                                handleScreenChangeEditTemplate={() => handleScreenChange('SessionScreen', data.history.find(his => his.workoutId === history.workoutId), 'editSession')} />
                        </>
                    })}
                </div>

            });
        }
        else {
            return <div className='container-no-records-found'>
                <div className='no-records-found'>
                    <div className='container-text'>
                        <div className='emoji'>💪</div>
                        <div className='text'>
                            <h3>No exercises logged (yet)</h3>
                            <p>Your exercise history will show up here.</p>
                        </div>
                    </div>
                </div>
            </div>
        }

    };

    const exerciseImages = {
        'Bent Over Row (Barbell)': BentOverRow,
        'Deadlift': Deadlift,
        'Lat Pulldown': LatPulldown,
        'Row (Cable)': RowCable,
        '1 Arm Row (Dumbbell)': RowDumbbell,

        'Bicep Curl (Barbell)': BicepCurlBarbell,
        'Bicep Curl (Dumbbell)': BicepCurlDumbbell,
        'Hammer Curl (Dumbbell)': HammerCurlDumbbell,

        'Calf Raise (Barbell)': CalfRaiseBarbell,
        'Calf Raise (Dumbbell)': CalfRaiseDumbbell,
        'Calf Raise (Machine)': CalfRaiseMachine,
        'Seated Calf Raise': SeatedCalfRaise,

        'Bench Press (Dumbbell)': BenchPressDumbbell,
        'Bench Press': BenchPress,
        'Incline Bench Press (Dumbbell)': InclineBenchPressDumbbell,
        'Incline Bench Press': InclineBenchPress,

        'Crunch (Cable)': CrunchCable,
        'Seated Crunch (Machine)': SeatedCrunchMachine,
        'Side Bend (Dumbbell)': SideBendDumbbell,
        'Woodchopper (Cable)': WoodChopperCable,

        'Bulgarian Split Squat (Barbell)': BulgarianSplitSquatBarbell,
        'Bulgarian Split Squat (Dumbbell)': BulgarianSplitSquatDumbbell,
        'Glute Bridge (Barbell)': GluteBridgeBarbell,
        'Hip Thrust': HipThrust,
        'Leg Curl': LegCurl,
        'Leg Extension': LegExtension,
        'Romanian Deadlift': RomanianDeadlift,
        'Sled Leg Press': SledLegPress,
        'Squat': Squat,

        'Shoulder Press': ShoulderPress,
        'Lateral Raise (Dumbbell)': LateralRaiseDumbbell,
        'Seated Shoulder Press (Dumbbell)': SeatedShoulderPressDumbbell,

        'Skull Crusher': SkullCrusher,
        'Tricep Pushdown (Cable)': TricepPushdownCable
    }
    const imageSource = exerciseImages[exercise]

    return (
        <div className='exercise-history__container'>
            <Navbar />

            <div className='exercise-history__main'>
                <div className='header'>
                    <ButtonSmall type='backScreen' onClick={() => handleScreenChange('ProgressScreen')} />
                    <div className='heading-and-image'>
                        {imageSource &&
                            <div className='image' >
                                <img src={imageSource} alt={exercise} />
                            </div>}
                        <h1>{exercise}</h1>
                    </div>

                </div>
                {renderHistoryCards()}
            </div>
        </div>


    )
}

export default HistoryExerciseScreen
