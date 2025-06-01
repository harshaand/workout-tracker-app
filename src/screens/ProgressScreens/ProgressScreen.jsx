import React from 'react';
import { AnatomyFront, AnatomyBack, Calendar, TrophyLarge, Bicep, Streak, WeightLarge, Search, ArrowDown, Tick } from '../../assets/icons/icons.js'
import ButtonBig from '../../components/Buttons/ButtonBig.jsx'
import ButtonSmall from '../../components/Buttons/ButtonSmall.jsx';
import Navbar from '../../components/Navbar.jsx'
import CardStrScOverview from '../../components/Cards/ProgressScreen/CardStrScOverview.jsx'
import CardsStrScStats from '../../components/Cards/ProgressScreen/CardsStrScStats.jsx'
import { RoutingContext } from '../../App.jsx'
import { useData } from '../../DataContext.jsx'


export default function ProgressScreen() {
    const { handleScreenChange, handleStrScScreenChange } = React.useContext(RoutingContext)
    const data = useData()
    const [activeTab, setActiveTab] = React.useState(0);
    const containerRef = React.useRef(null);
    const scrollProgress = React.useRef(0);

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

    Object.entries(data.strengthScores).forEach(([muscleGroup, exercises]) => {
        let exercisesBrackets = []
        Object.entries(exercises).forEach(([exercise, strengthScore]) => {
            const exerciseData = data.exercises.find(exerciseObject => exerciseObject.name === exercise)
            const eliteRatio = exerciseData.thresholds[data.user.sex].elite
            const exerciseThreshold = Object.entries(exerciseData.thresholds[data.user.sex])
                .find(([thresholdName, thresholdValue]) => (strengthScore / 100) * eliteRatio <= thresholdValue)?.[0] || 'beginner';

            exercisesBrackets = [...exercisesBrackets, exerciseThreshold]
        })
        musclesThresholdBrackets.current = { ...musclesThresholdBrackets.current, [muscleGroup]: findHighestBracket(exercisesBrackets) }
    })

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
    return (
        <>
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
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div className="wrapper-screen">
                        <div className='container-progress-screen'>
                            <CardStrScOverview onClick={() => handleStrScScreenChange('StrScFullBodyScreen', musclesThresholdBrackets.current, undefined, undefined)}>
                                <AnatomyFront height={170} width={59} musclesThresholdBrackets={musclesThresholdBrackets.current} />
                                <AnatomyBack height={170} width={60} opacity={20} musclesThresholdBrackets={musclesThresholdBrackets.current} />
                            </CardStrScOverview>
                            <CardsStrScStats streak='1 week' PBs={totalPRs} workouts={totalWorkouts} volume={totalVolume} reps={totalReps} />
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
                            </div>

                            <div className='container-exercises'>
                                {searchTerm.length > 0 ? (
                                    <div className={'container-rows-exercises container-rows-exercises--search'}>
                                        {filteredExercises.map((exercise, index) => (
                                            <div className='row-exercise animate-fadeIn' onClick={(e) => handleStrScScreenChange('HistoryExerciseScreen', undefined, undefined, exercise)}>
                                                <div className='image'></div>
                                                <h5>{highlightSearchTerm(exercise)}</h5>
                                            </div>
                                        ))}
                                    </div>
                                ) :
                                    (Object.entries(data.strengthScores).map(([muscleGroup, exercises]) => (
                                        <div className='row-muscle-group' onClick={(e) => toggleSection(muscleGroup, e)}>
                                            <div className='text-and-btn'>
                                                <h4>{muscleGroup}</h4>
                                                <div id={`${muscleGroup}-dropdown-arrow`} key={`${muscleGroup}-dropdown-arrow`} className="dropdown-arrow" ><ArrowDown /></div>
                                            </div>

                                            <div id={muscleGroup} key={muscleGroup} className={"container-rows-exercises container-rows-exercises--default"}>
                                                {Object.entries(exercises).map(([exercise, strengthScore]) => (
                                                    <div className='row-exercise' onClick={(e) => handleStrScScreenChange('HistoryExerciseScreen', undefined, undefined, exercise)}>
                                                        <div className='image'></div>
                                                        <h5>{exercise}</h5>
                                                    </div>
                                                ))}
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