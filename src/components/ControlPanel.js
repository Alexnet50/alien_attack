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
    useMousetrap('right', () => dispatch(moveRight({move: cannonSpeed, coeff: coeff})));
    useMousetrap('space', () => dispatch(newMissile({position: cannon.position + 10})));

    return (
        <div style={{ margin: '10px auto', width: 300}}>
            <button onClick={() => dispatch(moveLeft(cannonSpeed))} 
                style={{ width: 100, height: 50, fontSize: 24, fontWeight: 'bold', fontFamily: 'Exo' }}>Left</button>
            <button style={{width: 100, height: 50, fontSize: 24, fontWeight: 'bold', fontFamily: 'Exo', background: 'red'}} 
                onClick={() => dispatch(newMissile({position: cannon.position + 10}))}>FIRE</button>
            <button onClick={() => dispatch(moveRight({move: cannonSpeed, coeff: coeff}))}
                style={{ width: 100, height: 50, fontSize: 24, fontWeight: 'bold', fontFamily: 'Exo' }}>Right</button>        
        </div>
    )    

}

export default ControlPanel;