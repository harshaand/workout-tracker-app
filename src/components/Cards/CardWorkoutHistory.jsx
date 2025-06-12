import React from 'react'
import ButtonSmall from '../Buttons/ButtonSmall.jsx'
import '../../css/cards.scss';
import '../../css/screens.scss';
import { Clock, Weight, TrophyMedium } from '../../assets/icons/icons.js';
import ModalOptionsHistory from '../Modals/template/ModalOptionsHistory.jsx';


function CardWorkoutHistory({ history, type = 'default', onClick, showOptionsModal, setShowOptionsModal }) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    function formatDuration(totalSeconds) {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        if (hrs > 0) {
            return `${hrs}h ${mins}m`
        }
        else if (totalSeconds > 60 && hrs === 0) {
            return `${mins}m`
        }
        else {
            return `${secs}s`
        }

    };
    return (
        <div className={`card-workout-history ${type === 'default' ? 'card-workout-history--default' : 'card-workout-history-finished-workout-screen'}`} onClick={onClick}>
            <div className='header'>
                <div className='container-heading'>
                    <h3>{history.name}</h3>
                </div>
                {type === 'default' &&
                    <div className='wrapper-options'>
                        <ButtonSmall type='options1' onClick={(e) => {
                            e.stopPropagation()
                            setShowOptionsModal(history.workoutId)
                        }}></ButtonSmall>
                        {showOptionsModal === history.workoutId &&
                            <ModalOptionsHistory setShowModal={setShowOptionsModal} />}
                    </div>}
            </div>


            <div className='container-stats'>
                <p> {`${daysOfWeek[new Date(history.date).getDay()]}, ${new Date(history.date).getDate()} ${months[new Date(history.date).getMonth()]}`}</p>
                <div className='stats'>
                    <div className='stat duration'>
                        <Clock />
                        <p>{formatDuration(history.duration)}</p>
                    </div>
                    <div className='stat volume'>
                        <Weight />
                        <p>{`${history.volume} kg`}</p>
                    </div>
                    <div className='stat PRs'>
                        <TrophyMedium />
                        <p>{`${history.PRs} PRs`}</p>
                    </div>
                </div>
            </div>


            <div className='container-data-rows'>


                <div className='data-row'>
                    <div className='heading'><h4>Exercise</h4></div>
                    <div className='heading'><h4>Best Set</h4></div>
                </div>
                {
                    history.exercises.map(exercise => {
                        let bestSet = exercise.sets.find(set => set.bestSet === true)
                        if (bestSet === undefined) { bestSet = exercise.sets[0] }
                        return <div className='data-row'>
                            <p>{`${exercise.sets.length} x ${exercise.name}`}</p>
                            <p>{`${bestSet.weight} kg x ${bestSet.reps}`}</p>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default CardWorkoutHistory
