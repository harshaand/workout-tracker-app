import React from 'react'
import ButtonSmall from '../Buttons/ButtonSmall.jsx'
import ButtonBig from '../Buttons/ButtonBig.jsx'
import RowExerciseTracker from './RowExerciseTracker.jsx'
import '../../css/cards.scss';


function CardExerciseTracker(props) {
    function renderRows() {
        return props.exercise.sets.map(set => (<RowExerciseTracker key={`card-exercise-tracker-${set.id}`} exerciseName={props.exercise.name} set={set}
            toggleSetCompleted={props.toggleSetCompleted} deleteSet={props.deleteSet} handleOptionClick={props.handleOptionClick}
            saveTemplateValues={props.saveTemplateValues} showFinishModal={props.showFinishModal} screenVariant={props.screenVariant} />))
    }

    return (
        <div className='card-exercise-tracker'>
            <div className='heading'>
                <h3>{props.exercise.name}</h3>
                <ButtonSmall type='options1' customClasses='options-button'></ButtonSmall>
            </div>

            <div className='container-exercises'>
                <RowExerciseTracker type='heading' screenVariant={props.screenVariant} />
                {renderRows()}

            </div>
            <div className='container-btn--add-set'>
                <ButtonBig size='skinny' color='gray' icon='add' onClick={() => props.addSet(props.exercise.name)}>Add Set</ButtonBig>
            </div>
        </div>
    )
}

export default CardExerciseTracker
