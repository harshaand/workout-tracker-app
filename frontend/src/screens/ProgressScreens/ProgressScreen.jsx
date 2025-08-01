import React from 'react';
import { startOfWeek, format, compareDesc, differenceInWeeks } from 'date-fns';
import { AnatomyFront, AnatomyBack, Calendar, TrophyLarge, Bicep, Streak, WeightLarge, Search, ArrowDown, Tick } from '../../assets/icons/icons.js'
import ButtonBig from '../../components/Buttons/ButtonBig.jsx'
import ButtonSmall from '../../components/Buttons/ButtonSmall.jsx';
import Navbar from '../../components/Navbar.jsx'
import CardStrScOverview from '../../components/Cards/ProgressScreen/CardStrScOverview.jsx'
import CardsStrScStats from '../../components/Cards/ProgressScreen/CardsStrScStats.jsx'
import CardCalendar from '../../components/Cards/ProgressScreen/CardCalendar.jsx';
import ModalCreateExercise from '../../components/Modals/session/content-modals/CreateExercise.jsx'
import { RoutingContext } from '../../App.jsx'
import { useData } from '../../DataContext.jsx'
import {
    BentOverRow, Deadlift, LatPulldown, RowCable, RowDumbbell, BicepCurlBarbell, BicepCurlDumbbell, HammerCurlDumbbell,
    CalfRaiseBarbell, CalfRaiseDumbbell, CalfRaiseMachine, SeatedCalfRaise, BenchPressDumbbell, BenchPress,
    InclineBenchPressDumbbell, InclineBenchPress, CrunchCable, SeatedCrunchMachine, SideBendDumbbell, WoodChopperCable,
    BulgarianSplitSquatBarbell, BulgarianSplitSquatDumbbell, GluteBridgeBarbell, HipThrust, LegCurl, LegExtension,
    RomanianDeadlift, SledLegPress, Squat, ShoulderPress, LateralRaiseDumbbell, SeatedShoulderPressDumbbell, SkullCrusher, TricepPushdownCable
} from '../../assets/exercise-images/index.js';

export default function ProgressScreen() {
    const { handleScreenChange, handleStrScScreenChange } = React.useContext(RoutingContext)
    const useLocalStorage = useData()
    const [data, saveData] = useLocalStorage('userData')
    const [activeTab, setActiveTab] = React.useState(0);
    const containerRef = React.useRef(null);
    const scrollProgress = React.useRef(0);
    const [showCreateExerciseModal, setShowCreateExerciseModal] = React.useState(false)

    const handleTabClick = (index) => {
        setActiveTab(index);
        containerRef.current.scrollTo({
            left: index * containerRef.current.offsetWidth,
            behavior: 'smooth'
        })
    };

    const handleScroll = () => {
        if (containerRef.current) {
            const scrollLeft = containerRef.current.scrollLeft;
            const containerWidth = containerRef.current.offsetWidth;
            scrollProgress.current = scrollLeft / containerWidth;
            if (scrollProgress.current === 0) {
                setActiveTab(0);
            }
            if (scrollProgress.current === 1) {
                setActiveTab(1);
            }
        }
    };

    const totalWorkouts = data.history.length
    let totalVolume = 0
    data.history.forEach(history => totalVolume = totalVolume + history.volume)
    let totalPRs = 0
    data.history.forEach(history => totalPRs = totalPRs + history.PRs)
    let totalReps = 0
    data.history.forEach(history => totalReps = totalReps + history.reps)
    let streak = calculateStreaks()

    const bracketMap = {
        'beginner': 1,
        'novice': 2,
        'intermediate': 3,
        'advanced': 4,
        'elite': 5
    };

    function findHighestBracket(brackets) {
        if (brackets.length === 0) return null;

        return brackets.reduce((highest, current) => {
            return bracketMap[current] > bracketMap[highest] ? current : highest;
        });
    }

    let musclesThresholdBrackets = React.useRef({})

    //Find highest bracket for exercise -> will be the bracket for the muscle group.
    Object.entries(data.strengthScores).forEach(([muscleGroup, exercises]) => {
        let exercisesBrackets = []
        Object.entries(exercises).forEach(([exercise, strengthScore]) => {
            if (strengthScore !== "not eligible") {
                const exerciseData = data.exercises.find(exerciseObject => exerciseObject.name === exercise)
                const eliteRatio = exerciseData.thresholds[data.user.sex].elite
                const exerciseThreshold = Object.entries(exerciseData.thresholds[data.user.sex])
                    .findLast(([thresholdName, thresholdValue]) => (strengthScore / 100) * eliteRatio > thresholdValue)?.[0] || 'beginner';

                exercisesBrackets = [...exercisesBrackets, exerciseThreshold]
            }
        })
        musclesThresholdBrackets.current = { ...musclesThresholdBrackets.current, [muscleGroup]: findHighestBracket(exercisesBrackets) }
    })

    function calculateStreaks() {
        const dates = data.history.map(history => history.date)
        //#region HOW FUNCTION WORKS
        /*
            1. sortedDates: gather all the dates of user's workouts in the past in 1 big array
            2. weeksWithDates: 
            For every week the user has worked out, will have an object where:
                - key = the date of the start of the week (monday)
                - value = an array of user's workouts that fall within that week
                It will look something like this:
                {{ "2025-01-06": [date1, date2, ...]}
                   "2025-01-13": [date1]}
                   "2025-01-20": [date1, date2, ...]}
                   ...}
            3. goodWeeks: 
            filter out the weeks where the user didn't meet their goal (e.g. workout 2 times/week).
                It will look something like this:
                {{ "2025-01-06": [date1, date2, ...]}
                   "2025-01-20": [date1, date2, ...]}
                   ...}
            4. streakCount: will store the number of consecutive "good weeks" from present date
        */
        //#endregion

        if (!dates || dates.length === 0) return 0

        const sortedDates = dates.map(date => new Date(date)).sort(compareDesc);

        const weeksWithDates = {};

        sortedDates.forEach(date => {
            const mondayOfWeek = startOfWeek(date, { weekStartsOn: 1 });
            const weekKey = format(mondayOfWeek, 'yyyy-MM-dd');

            if (!weeksWithDates[weekKey]) {
                weeksWithDates[weekKey] = [];
            }
            weeksWithDates[weekKey].push(date);
        });

        const goodWeeks = [];

        for (const [weekKey, datesInWeek] of Object.entries(weeksWithDates)) {
            if (datesInWeek.length >= data.user.weeklyWorkoutsGoal) {
                goodWeeks.push({
                    weekStart: new Date(weekKey),  // convert back to Date for comparison
                    dateCount: datesInWeek.length
                });
            }
        }
        goodWeeks.sort((a, b) => compareDesc(a.weekStart, b.weekStart));

        let streakCount;

        if (goodWeeks.length === 0) return 0

        const todayDate = new Date()
        const diffCurrentAndLatestGoodWeek = differenceInWeeks(startOfWeek(todayDate, { weekStartsOn: 1 }), goodWeeks[0].weekStart)
        // diffCurrentAndLatestGoodWeek === 0 means the user hit their target this (current) week
        // diffCurrentAndLatestGoodWeek === 1 means the user hit their target last week & still has a chance this week

        if (diffCurrentAndLatestGoodWeek < 2) {
            streakCount = 1 // start at 1 then ++ every consecutive week

            for (let i = 1; i < goodWeeks.length; i++) {
                const currentWeek = goodWeeks[i - 1].weekStart;
                const previousWeek = goodWeeks[i].weekStart;
                const weeksBetween = differenceInWeeks(currentWeek, previousWeek)

                if (weeksBetween === 1) streakCount++;
                else break
            }
        }
        else streakCount = 0

        return streakCount;
    }

    const openSections = React.useRef(Object.fromEntries(
        Object.keys(data.strengthScores).map(key => [key, false])
    ))

    const toggleSection = (sectionName, event) => {
        event.preventDefault(); // Prevent form submission
        openSections.current = {
            ...openSections.current,
            [sectionName]: !openSections.current[sectionName]
        };
        const el = document.getElementById(sectionName)
        const elDropdownArrow = document.getElementById(`${sectionName}-dropdown-arrow`)
        if (openSections.current[sectionName] === true) {
            el.style.height = el.scrollHeight + 'px';
            elDropdownArrow.classList.add('rotated')

        } else {
            el.style.height = '0px';
            elDropdownArrow.classList.remove('rotated')
        }
    }

    const [searchTerm, setSearchTerm] = React.useState('');

    // Get all exercise names
    const getAllExercises = () => {
        const exercises = [];
        for (const muscleGroup in data.strengthScores) {
            for (const exercise in data.strengthScores[muscleGroup]) {
                exercises.push(exercise);
            }
        }
        return exercises;
    };

    // Filter exercises based on search term
    const filteredExercises = [...new Set(getAllExercises())]
        .filter(exercise => exercise.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(exercise => ({
            name: exercise,
            percentage: searchTerm.length > 0 ? (searchTerm.length / exercise.length) * 100 : 0
        }))
        .sort((a, b) => b.percentage - a.percentage)
        .map(item => item.name);

    // Function to highlight search term in exercise name
    function highlightSearchTerm(exerciseName) {
        if (!searchTerm) return exerciseName;

        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const parts = exerciseName.split(regex);

        return parts.map((part, index) =>
            regex.test(part) ?
                <span key={index} className="highlighted">{part}</span> :
                part
        );
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

    function createExercise(exerciseName, targetMuscleGroups, prMetric) {
        saveData(prevData => {
            //Adding new (created) exercise to strength scores object under correct muscle groups in main data object
            const updatedStrengthScores = { ...prevData.strengthScores };
            targetMuscleGroups.forEach(muscleGroup => {
                if (updatedStrengthScores[muscleGroup]) {
                    updatedStrengthScores[muscleGroup] = {
                        ...updatedStrengthScores[muscleGroup],
                        [exerciseName]: 'not eligible'
                    };
                }
            });
            //Adding new (created) exercise to the exercises object in main data object
            return {
                ...prevData,
                exercises: [
                    ...prevData.exercises,
                    {
                        name: exerciseName,
                        prMetric: prMetric,
                        PRs: { '1RM': 0, weight: 0, reps: 0, volume: 0 },
                        thumbnail: '',
                        instructions: { media: '', text: '' },
                        history: []
                    }
                ],
                strengthScores: updatedStrengthScores
            }
        })
    }

    return (
        <>
            {showCreateExerciseModal && <ModalCreateExercise createExercise={createExercise} setShowCreateExerciseModal={setShowCreateExerciseModal} />}
            <Navbar />
            <div className="progress__container">
                <div className="progress__header">
                    <button className={`${activeTab === 0 ? 'button-active' : 'button-inactive'}`}
                        onClick={() => handleTabClick(0)}>Progress</button>
                    <button className={`${activeTab === 1 ? 'button-active' : 'button-inactive'}`}
                        onClick={() => handleTabClick(1)}>Exercises</button>


                    <div className="button-underline"
                        style={{
                            transform: `translateX(calc(${activeTab * 100}% + ${activeTab * 32}px))`,
                        }} />
                </div>

                <div
                    ref={containerRef}
                    onScroll={handleScroll}
                    className="progress__main"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <div className="wrapper-screen">
                        <div className='container-progress-screen'>
                            <CardStrScOverview onClick={() => handleStrScScreenChange('StrScFullBodyScreen', musclesThresholdBrackets.current, undefined, undefined)}>
                                <AnatomyFront height={170} width={59} musclesThresholdBrackets={musclesThresholdBrackets.current} />
                                <AnatomyBack height={170} width={60} opacity={20} musclesThresholdBrackets={musclesThresholdBrackets.current} />
                            </CardStrScOverview>
                            <CardsStrScStats streak={streak > 1 ? `${streak} weeks` : streak === 1 ? '1 week' : '0 Weeks'} PBs={totalPRs} workouts={totalWorkouts} volume={totalVolume} reps={totalReps} />
                            <CardCalendar dates={data.history.map(history => history.date)} />
                        </div>
                    </div>

                    <div className="wrapper-screen">
                        <div className='exercises'>
                            <div className='container-header'>
                                <div className='search-bar'>
                                    <Search />
                                    <input type="text" name="" id="" placeholder='Bench Press' value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)} />
                                </div>
                                <button className='btn-create-exercise' onClick={() => { setShowCreateExerciseModal(true) }}>Create</button>
                            </div>

                            <div className='container-exercises'>
                                {searchTerm.length > 0 ? (
                                    <div className={'container-rows-exercises container-rows-exercises--search'}>
                                        {filteredExercises.map((exercise, index) => {
                                            const imageSource = exerciseImages[exercise]
                                            return <>
                                                <div className='row-exercise animate-fadeIn' onClick={(e) => handleStrScScreenChange('HistoryExerciseScreen', undefined, undefined, exercise)}>
                                                    <div className='image' >
                                                        {imageSource ?
                                                            <img src={imageSource} alt={exercise} />
                                                            : <h3 className='exercise-initial'>{exercise.charAt(0).toUpperCase()}</h3>}
                                                    </div>
                                                    <h5>{highlightSearchTerm(exercise)}</h5>
                                                </div>
                                            </>
                                        })}
                                    </div>
                                ) :
                                    (Object.entries(data.strengthScores).map(([muscleGroup, exercises]) => (
                                        <div className='row-muscle-group' onClick={(e) => toggleSection(muscleGroup, e)}>
                                            <div className='text-and-btn'>
                                                <h4>{muscleGroup}</h4>
                                                <div id={`${muscleGroup}-dropdown-arrow`} key={`${muscleGroup}-dropdown-arrow`} className="dropdown-arrow" ><ArrowDown /></div>
                                            </div>

                                            <div id={muscleGroup} key={muscleGroup} className={"container-rows-exercises container-rows-exercises--default"}>
                                                {Object.entries(exercises).map(([exercise, strengthScore]) => {
                                                    const imageSource = exerciseImages[exercise]
                                                    return <>
                                                        <div className='row-exercise' onClick={(e) => handleStrScScreenChange('HistoryExerciseScreen', undefined, undefined, exercise)}>
                                                            <div className='image' >
                                                                {imageSource ?
                                                                    <img src={imageSource} alt={exercise} />
                                                                    : <h3 className='exercise-initial'>{exercise.charAt(0).toUpperCase()}</h3>}
                                                            </div>
                                                            <h5>{exercise}</h5>
                                                        </div>
                                                    </>
                                                })}
                                            </div>
                                        </div>
                                    ))
                                    )}
                            </div>
                        </div>
                    </div>


                </div>

                {/* <style jsx>{`div::-webkit-scrollbar {display: none;}`}</style> */}
            </div >

        </>
    );
}