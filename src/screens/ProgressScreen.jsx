import { useState, useRef, useEffect } from 'react';
import { AnatomyFront, AnatomyBack, Calendar, TrophyLarge, Bicep, Streak, WeightLarge } from '../assets/icons/icons'
import ButtonBig from '../components/Buttons/ButtonBig'
import Navbar from '../components/Navbar'
export default function ProgressScreen() {

    const [activeTab, setActiveTab] = useState(0);
    const containerRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveTab(index);
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: index * containerRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        if (containerRef.current) {
            const scrollLeft = containerRef.current.scrollLeft;
            const containerWidth = containerRef.current.offsetWidth;
            const scrollProgress = scrollLeft / containerWidth;
            setActiveTab(scrollProgress);
        }
    };

    return (
        <>
            <Navbar />
            <div className="progress__container">
                <div className="progress__header">
                    <button className={`${Math.round(activeTab) === 0 ? 'button-active' : 'button-inactive'}`}
                        onClick={() => handleTabClick(0)}>Progress</button>
                    <button className={`${Math.round(activeTab) === 1 ? 'button-active' : 'button-inactive'}`}
                        onClick={() => handleTabClick(1)}>Exercises</button>
                    <div className="button-underline"
                        style={{
                            left: `calc(${activeTab * 50}% + 16px)`,
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

                            <div className='card-strength-score-overview'>
                                <h4>Strength Score</h4>
                                <div className='container-anatomy-svgs'>
                                    <AnatomyFront height={170} width={59} />
                                    <AnatomyBack height={170} width={60} />
                                </div>
                                <ButtonBig size='hug'>View Scores</ButtonBig>
                            </div>
                            <div className='container-cards-stats'>
                                <div className='columns'>
                                    <div className='card-stat card-stat--streak'>
                                        <h4 className='card-text card-text--title'>Gym Streak</h4>
                                        <div className='icon-and-stat'>
                                            <Streak />
                                            <h5 className='card-text card-text--value'>1 week</h5>
                                        </div>

                                    </div>

                                    <div className='card-stat card-stat--default'>
                                        <h4 className='card-text card-text--title'>Total Volume</h4>
                                        <div className='icon-and-stat'>
                                            <WeightLarge />
                                            <h5 className='card-text card-text--value'>70</h5>
                                        </div>

                                    </div>

                                </div>
                                <div className='columns'>
                                    <div className='card-stat card-stat--default'>
                                        <h4 className='card-text card-text--title'>Total PB's</h4>
                                        <div className='icon-and-stat'>
                                            <TrophyLarge />
                                            <h5 className='card-text card-text--value'>14</h5>
                                        </div>

                                    </div>

                                    <div className='card-stat card-stat--default'>
                                        <h4 className='card-text card-text--title'>Total Workouts</h4>
                                        <div className='icon-and-stat'>
                                            <Calendar />
                                            <h5 className='card-text card-text--value'>5</h5>
                                        </div>

                                    </div>
                                    <div className='card-stat card-stat--default'>
                                        <h4 className='card-text card-text--title'>Total Reps</h4>
                                        <div className='icon-and-stat'>
                                            <Bicep />
                                            <h5 className='card-text card-text--value'>70</h5>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="wrapper-screen">
                        <h1 >Container 2</h1>
                    </div>
                </div>

                <style jsx>{`div::-webkit-scrollbar {display: none;}`}</style>
            </div>

        </>
    );
}