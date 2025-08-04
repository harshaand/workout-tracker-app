import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../assets/loadingLottie.json';

function LoadingLottie() {
    return (
        <div style={{ width: 300, height: 300 }}>
            <Lottie animationData={animationData} loop={true} />
        </div>
    );
}

export default LoadingLottie
