import React, { useContext } from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { DarkModeContext } from '../context/DarkModeContext';

export default function DarkModeButton() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    let button;
    if (!darkMode) {
        button = <MdDarkMode />
    } else {
        button = <MdLightMode color='#FFF' />
    }

    return (
        <button className={'darkmode-button'+(darkMode ? '' : ' active')} onClick={() => toggleDarkMode()}>
            {button}
        </button>
    );
};
