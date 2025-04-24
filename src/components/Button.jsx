// components/Button.jsx
import React from 'react';
import './Button.css'; // Import button-specific styles

import '../css/icons.css'
import {
    NavClock, NavAdd, NavProgress, NavUser, AddMedium, AddSmall, Folder, Weight,
    Cross, Tick, Trash, Calendar, Collapse, Duplicate, Clock, Progress,
    Target, Question, Pencil, TrophyLarge, TrophyMedium, TrophySmall, Lock, Timer,
    ArrowDown, ArrowLeft, ArrowRight, Search, Bicep,
    Streak, Ellipsis, BlankNarrow, BlankWide
} from '../assets/icons/icons.js';

function Button({ children, variant = 'primary', size = 'medium', onClick, disabled = false, type = 'button', className = '', ...props }) {
    // Define variant classes that use CSS variables
    const variantClasses = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        danger: 'btn-danger',
        success: 'btn-success',
    };

    // Define size classes
    const sizeClasses = {
        small: 'btn-small',
        medium: 'btn-medium',
        large: 'btn-large',
    };

    // Combine all classes
    const buttonClasses = `
    btn
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabled ? 'btn-disabled' : ''}
    ${className}
  `;

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;