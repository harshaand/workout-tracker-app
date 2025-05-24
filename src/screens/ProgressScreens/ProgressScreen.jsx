import React from 'react';
import { AnatomyFront, AnatomyBack, Calendar, TrophyLarge, Bicep, Streak, WeightLarge } from '../../assets/icons/icons.js'
import ButtonBig from '../../components/Buttons/ButtonBig.jsx'
import Navbar from '../../components/Navbar.jsx'
import CardStrScOverview from '../../components/Cards/ProgressScreen/CardStrScOverview.jsx'
import CardsStrScStats from '../../components/Cards/ProgressScreen/CardsStrScStats.jsx'

import { RoutingContext } from '../../App.jsx'


export default function ProgressScreen() {
    const { handleScreenChange } = React.useContext(RoutingContext)
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

                            <CardStrScOverview onClick={() => handleScreenChange('StrScFullBodyScreen')}>
                                <AnatomyFront height={170} width={59} />
                                <AnatomyBack height={170} width={60} />
                            </CardStrScOverview>
                            <CardsStrScStats streak='1 week' PBs={14} workouts={5} volume={70} reps={70} />

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