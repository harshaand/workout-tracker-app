// components/Button.jsx
import React from 'react';
import { AddMedium } from '../../assets/icons/icons.js';

function ButtonBig({ children, size = 'default', color = 'blue', icon, onClick }) {
    const ICONS_MAP = {
        add: AddMedium
    }

    const SIZE_MAP = {
        default: 'btn--big',
        hug: 'btn--big-hug',
        skinny: 'btn--big-skinny',
        chunky: 'btn--big-chunky'
    }

    const COLOR_MAP = {
        blue: 'btn--blue',
        blueSoft: 'btn--blue-soft',
        red: 'btn--red',
        redSoft: 'btn--red-soft',
        gray: 'btn--gray',
        transparent: 'btn--transparent',
        green: 'btn--green'
    }

    const IconComponent = ICONS_MAP[icon];

    return (
        <button className={`${SIZE_MAP[size]} ${COLOR_MAP[color]}`} onClick={onClick}>
            {IconComponent && <IconComponent />}{children}
        </button>
    );
};

export default ButtonBig;