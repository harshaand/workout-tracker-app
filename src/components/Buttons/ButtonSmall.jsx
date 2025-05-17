// components/Button.jsx
import React from 'react';
import {
    AddMedium, ArrowLeft, ArrowRight, BlankNarrow, Cross, Ellipsis,
    Folder, Question, Target, Tick, Timer
} from '../../assets/icons/icons.js';


function ButtonSmall({ type, onClick, customClasses = '', children }) {
    const ICONS_MAP = {
        options1: Ellipsis,
        option2: Ellipsis,
        target: Target,
        help: Question,
        folder: Folder,
        checkbox: Tick,
        checkboxLocked: BlankNarrow,
        closeModal: Cross,
        closeScreen: Cross,
        viewAll: ArrowRight,
        addTemplate: AddMedium,
        timer: Timer,
        backScreen: ArrowLeft,
        addExercise: AddMedium
    }

    const CLASSES_MAP = {
        options1: 'btn__icon--small btn--blue-soft',
        option2: 'btn__icon--small btn--gray',
        target: 'btn__icon--small btn--blue-soft',
        help: 'btn__icon--small btn--blue-soft',
        folder: 'btn__icon--small btn--blue-soft',
        checkbox: 'btn__icon--small btn--unchecked',
        checkboxLocked: 'btn__icon--small btn--checkbox-locked',
        closeModal: 'btn__icon--small btn--gray',
        closeScreen: 'btn__icon--big btn--gray',
        viewAll: 'btn--view-all btn--blue-soft',
        addTemplate: 'btn--add-template btn--blue-soft',
        timer: 'btn__icon--big btn--gray',
        backScreen: 'btn__icon--big btn--gray',
        addExercise: 'btn__icon--big btn--blue-soft',
        setNumber: 'btn__icon--small btn--set-number'
    }

    const IconComponent = ICONS_MAP[type];

    return (
        <button className={`${CLASSES_MAP[type]} ${customClasses}`} onClick={onClick}>
            {IconComponent && <IconComponent />}{children}
        </button>
    );
};

export default ButtonSmall;