import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMousetrap from "react-hook-mousetrap"
import { moveLeft, moveRight } from '../features/cannon'
import { newMissile } from '../features/missiles'

const cannonSpeed = 20;
function ControlPanel() {
    const cannon = useSelector((state) => state.cannon);
    const coeff = useSelector((state) => state.adaptive.value);    
    const dispatch = useDispatch();
    useMousetrap('left', () => dispatch(moveLeft(cannonSpeed)));
    useMousetrap('right', () => dispatch(moveRight(cannonSpeed)));
    useMousetrap('space', () => dispatch(newMissile({position: cannon.position + 10 * coeff, coeff: coeff})));

    return (
        <div style={{ margin: '10px auto', width: 300 * coeff }}>
            <button onClick={() => dispatch(moveLeft(cannonSpeed))} 
                style={{ width: 100 * coeff, height: 50 * coeff, fontSize: 24 * coeff, fontWeight: 'bold', fontFamily: 'Exo' }}>Left</button>
            <button style={{width: 100 * coeff, height: 50 * coeff, fontSize: 24 * coeff, fontWeight: 'bold', fontFamily: 'Exo', background: 'red'}} onClick={() => dispatch(newMissile({position: cannon.position + 10 * coeff, coeff: coeff}))}>FIRE</button>
            <button onClick={() => dispatch(moveRight(cannonSpeed))}
                style={{ width: 100 * coeff, height: 50 * coeff, fontSize: 24 * coeff, fontWeight: 'bold', fontFamily: 'Exo' }}>Right</button>        
        </div>
    )    

}

export default ControlPanel;