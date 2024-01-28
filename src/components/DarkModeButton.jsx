import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function DarkModeButton(isDark) {
    let button;
    if (isDark) {
        button = <MdLightMode color='#FFF' />
    } else {
        button = <MdDarkMode />
    }

    return (
        <button className={'darkmode-button'+(isDark ? '' : ' active')}>
            {button}
        </button>
    );
};
