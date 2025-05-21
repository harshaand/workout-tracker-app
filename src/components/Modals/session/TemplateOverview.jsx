import React from 'react'
import ButtonBig from '../../Buttons/ButtonBig'
import ButtonSmall from '../../Buttons/ButtonSmall'

function TemplateOverview({ template, selectedModal, setSelectedModal, handleScreenChangeNewSession,
    handleScreenChangeEditTemplate }) {
    let lastDoneMessage = false
    const diff = Math.abs(new Date() - template?.lastDone);
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
                        {template.exercises.map((exercise, index) => (
                            <div key={index} className='exercise-row'>
                                <div className='image'></div>
                                <div className='container-exercise-text'>
                                    <p className='text--main'>
                                        {`${exercise.sets.length} x ${exercise.name}`}
                                    </p>
                                    <p className='text-supporting'>Core</p>
                                </div>
                                <ButtonSmall type='help' />
                            </div>
                        ))}
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
