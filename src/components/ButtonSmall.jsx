// components/Button.jsx
import React from 'react';
import {
    AddMedium, AddSmall, ArrowDown, ArrowLeft, ArrowRight, Bicep, BlankNarrow, BlankWide,
    Calendar, Clock, Collapse, Cross, Duplicate, Ellipsis, Folder, Lock,
    NavAdd, NavProgress, NavUser, Pencil, Progress, Question, Search, Streak,
    Target, Tick, Timer, Trash, TrophyLarge, TrophyMedium, TrophySmall, Weight, NavClock
} from '../assets/icons/icons.js';


function ButtonSmall({ type, onClick }) {
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
        options1: 'btn-icon-small btn-blue-soft',
        option2: 'btn-icon-small btn-gray',
        target: 'btn-icon-small btn-blue-soft',
        help: 'btn-icon-small btn-blue-soft',
        folder: 'btn-icon-small btn-blue-soft',
        checkbox: 'btn-icon-small btn-unchecked',
        checkboxLocked: 'btn-icon-small btn-checkbox-locked',
        closeModal: 'btn-icon-small btn-gray',
        closeScreen: 'btn-icon-big btn-gray',
        viewAll: 'btn-view-all btn-blue-soft',
        addTemplate: 'btn-add-template btn-blue-soft',
        timer: 'btn-icon-big btn-gray',
        backScreen: 'btn-icon-big btn-gray',
        addExercise: 'btn-icon-big btn-blue-soft'
    }

    const IconComponent = ICONS_MAP[type];

    return (
        <button className={CLASSES_MAP[type]} onClick={onClick}>
            {IconComponent && <IconComponent />}
        </button>
    );
};

export default ButtonSmall;