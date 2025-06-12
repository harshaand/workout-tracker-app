// components/Button.jsx
import React from 'react';
import {
    AddMedium, Collapse, Cross, Duplicate, Expand, Pencil, Trash, Tick
} from '../../assets/icons/icons.js';

function ButtonModal({ children, type = 'edit', icon, onClick }) {
    const ICONS_MAP = {
        add: AddMedium,
        archive: Trash,
        collapse: Collapse,
        expand: Expand,
        duplicate: Duplicate,
        delete: Cross,
        edit: Pencil,
        check: Tick
    }

    const CLASSES_MAP = {
        options: 'modal-options__btn',
        optionsDelete: 'modal-options__btn--delete',
        select: 'modal-select__btn active',
    }


    const IconComponent = ICONS_MAP[icon];

    return (
        <button className={`${CLASSES_MAP[type]}`} onClick={onClick}>
            {IconComponent && <IconComponent />}{children}
        </button>
    );
};

export default ButtonModal;