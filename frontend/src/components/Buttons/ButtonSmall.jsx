// components/Button.jsx
import React from 'react';
import {
    AddSmall, AddMedium, ArrowLeft, ArrowRight, BlankNarrow, Cross, Ellipsis,
    Folder, Question, Target, Tick, Timer
} from '../../assets/icons/icons.js';


function ButtonSmall({ type, onClick, customClasses = '', disabled = false, children }) {
    const ICONS_MAP = {
        options1: Ellipsis,
        options2: Ellipsis,
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
        backModal: ArrowLeft,
        addExercise: AddSmall,
        add: AddMedium
    }

    const CLASSES_MAP = {
        options1: 'btn__icon--small btn--blue-soft',
        options2: 'btn__icon--small btn--gray',
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
        backModal: 'btn__icon--small btn--gray',
        addExercise: 'btn__icon--big btn--blue-soft',
        setNumber: 'btn__icon--small btn--set-number',
        add: 'btn__icon--small btn--gray'
    }

    const IconComponent = ICONS_MAP[type];

    return (
        <button className={`${CLASSES_MAP[type]} ${customClasses}`} onClick={onClick} disabled={disabled}>
            {IconComponent && <IconComponent />}{children}
        </button>
    );
};

export default ButtonSmall;