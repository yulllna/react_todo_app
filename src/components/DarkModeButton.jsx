import React from 'react';

export default function DarkModeButton(isDark) {
    return (
        <button className={'darkmode-button'+(isDark ? ' active' : '')}></button>
    );
};
