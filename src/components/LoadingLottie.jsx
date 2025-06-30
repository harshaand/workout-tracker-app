import React from 'react'
import Lottie from 'lottie-react';
import loadingLottie from '../assets/loadingLottie.json';

function LoadingLottie() {
    return (
        <div className='container-loading-lottie'>
            <div className='loading-lottie'>
                <Lottie animationData={loadingLottie} loop={true} autoplay={true} />
            </div>
        </div>
    )
}

export default LoadingLottie
