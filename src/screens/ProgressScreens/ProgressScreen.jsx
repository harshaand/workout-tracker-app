import React from 'react';
import { AnatomyFront, AnatomyBack, Calendar, TrophyLarge, Bicep, Streak, WeightLarge } from '../../assets/icons/icons.js'
import ButtonBig from '../../components/Buttons/ButtonBig.jsx'
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
                        <h1 >Container 2</h1>
                    </div>
                </div>

                {/* <style jsx>{`div::-webkit-scrollbar {display: none;}`}</style> */}
            </div >

        </>
    );
}