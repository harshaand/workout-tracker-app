import React from 'react'
import ButtonBig from '../../../Buttons/ButtonBig'
import ButtonSmall from '../../../Buttons/ButtonSmall'
import { useData } from '../../../../DataContext'
import {
    BentOverRow, Deadlift, LatPulldown, RowCable, RowDumbbell, BicepCurlBarbell, BicepCurlDumbbell, HammerCurlDumbbell,
    CalfRaiseBarbell, CalfRaiseDumbbell, CalfRaiseMachine, SeatedCalfRaise, BenchPressDumbbell, BenchPress,
    InclineBenchPressDumbbell, InclineBenchPress, CrunchCable, SeatedCrunchMachine, SideBendDumbbell, WoodChopperCable,
    BulgarianSplitSquatBarbell, BulgarianSplitSquatDumbbell, GluteBridgeBarbell, HipThrust, LegCurl, LegExtension,
    RomanianDeadlift, SledLegPress, Squat, ShoulderPress, LateralRaiseDumbbell, SeatedShoulderPressDumbbell, SkullCrusher, TricepPushdownCable
} from '../../../../assets/exercise-images/index.js';

function TemplateOverview({ template, selectedModal, setSelectedModal, handleScreenChangeNewSession,
    handleScreenChangeEditTemplate }) {
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
    const useLocalStorage = useData()
    const [data, saveData] = useLocalStorage('userData')
    let lastDoneMessage = false
    const diff = Math.abs(new Date() - new Date(template?.lastDone));
    if (template?.lastDone === undefined || diff === undefined) {
        lastDoneMessage = false
    }
    else {
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            lastDoneMessage = `${days} day${days !== 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            lastDoneMessage = `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            lastDoneMessage = `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        } else {
            lastDoneMessage = `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
        }
    }
    if (template && selectedModal === template.id) {
        return (
            <>
                <button className='modal-overlay' onClick={() => setSelectedModal(null)}></button>
                <div className='modal-session-overview'>

                    <div className='container-header'>
                        <div className='header'>
                            <ButtonSmall type='closeModal' onClick={() => setSelectedModal(null)} />
                            <p>{template.name}</p>
                            <a onClick={handleScreenChangeEditTemplate}>Edit</a>
                        </div>
                        <div className='last-performed'>
                            Last Performed: {lastDoneMessage}
                        </div>
                    </div>


                    <div className='container-exercises'>
                        {template.exercises.map((exercise, index) => {
                            const imageSource = exerciseImages[exercise.name]
                            const targetMuscleGroupsString = Object.entries(data.strengthScores)
                                .filter(([muscleGroup, exercises]) => exercises.hasOwnProperty(exercise.name))
                                .map(([muscleGroup]) => muscleGroup).join(', ');
                            return <>
                                <div key={index} className='exercise-row'>
                                    <div className='image' >
                                        {imageSource ?
                                            <img src={imageSource} alt={exercise.name} />
                                            : <h3 className='exercise-initial'>{exercise.name.charAt(0).toUpperCase()}</h3>}
                                    </div>
                                    <div className='container-exercise-text'>
                                        <p className='text--main'>
                                            {`${exercise.sets.length} x ${exercise.name}`}
                                        </p>
                                        <p className='text-supporting'>{targetMuscleGroupsString}</p>
                                    </div>
                                </div>
                            </>
                        })}
                    </div>


                    <div className='container-start-workout-btn'>
                        <ButtonBig color='blue' size='default' onClick={handleScreenChangeNewSession}>Start Workout</ButtonBig>
                    </div>


                </div>
            </>
        )
    }
}

export default TemplateOverview
