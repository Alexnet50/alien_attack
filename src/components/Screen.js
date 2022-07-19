import React from 'react';
import { useSelector } from 'react-redux';
import Aliens from './Aliens';
import Bang from './Bang';
import Cannon from './Cannon';
import Missiles from './Missiles';

function Screen() {
    const coeff = useSelector((state) => state.adaptive.value);
    
    return (
        <div style={{ margin: '10px auto', width: 900, height: 500 * coeff, border: '3px solid black',
        borderRadius: 10, backgroundImage: `url(../../images/background.jpg)`, backgroundSize: 'cover', 
        backgroundPosition: 'center center', position: 'relative'
        }}>
            <Aliens />
            <Missiles />
            <Bang />
            <Cannon />
        </div>
    );
}

export default Screen;