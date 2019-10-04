import React from 'react';
import {useAlphabetical} from './Alphabetical';

const ToggleButton = () => {
    const [alphaMode, setAlphaMode] = useAlphabetical(true || false);
    const toggleMode = e => {
        e.preventDefault();
        setAlphaMode(!alphaMode);
    }
    return(
        <div className='toggle-button'>
            <p>Alphabetical</p>
            <div 
            onClick={toggleMode}
            className={alphaMode ? 'toggle toggled' : 'toggle'}
            />
        </div>
    )
};

export default ToggleButton;