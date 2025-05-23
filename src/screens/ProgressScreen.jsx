import { useState, useRef, useEffect } from 'react';
import './ProgressScreen.scss'
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
                    <div className="w-full flex-shrink-0 snap-start bg-gray-50 p-8">
                        <h2 className="text-2xl font-bold mb-4">Container 1</h2>
                        <p>This is the content of the first container. You can scroll or swipe to navigate between containers.</p>
                    </div>

                    <div className="w-full flex-shrink-0 snap-start bg-blue-50 p-8">
                        <h2 className="text-2xl font-bold mb-4">Container 2</h2>
                        <p>This is the content of the second container. The tab indicator updates automatically as you scroll.</p>
                    </div>
                </div>

                <style jsx>{`div::-webkit-scrollbar {display: none;}`}</style>
            </div>

        </>
    );
}