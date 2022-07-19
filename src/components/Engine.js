import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { aliensMovement, newAlien, destroyAliens, clearAliens } from '../features/aliens';
import { missilesMovement, destroyMissiles, clearMissiles } from '../features/missiles';
import { lifesLeft, scoreIncrease, scoreClear } from '../features/score';
import { setCoeff } from '../features/adaptive';
import { newBang, clearBang } from '../features/bang';
import Final from './Final';

let pending = true;
let movementTimer; 
let aliensTimer; 

export function Engine() {   
    const aliens = useSelector((state) => state.aliens);
    const missiles = useSelector((state) => state.missiles);
    const scoreNow = useSelector((state) => state.score.value);
    const coeff = useSelector((state) => state.adaptive.value);
    const dispatch = useDispatch();
    const aliensMove = () => dispatch(aliensMovement(coeff));   
    const missilesMove = () => dispatch(missilesMovement(coeff));
    const aliensDestroy = (array) => dispatch(destroyAliens(array));
    const missilesDestroy = (array) => dispatch(destroyMissiles(array));
    const destroyAliensArray = [];
    const destroyMissilesArray = [];  
    let lifes = 5; 

    // Window adaptation    
    window.screen.height > 1200 ? dispatch(setCoeff(2)) : dispatch(setCoeff(1));    
    
    // Aliens appear
    const aliensStart = () => {
        let appearRange = 8000;              
        dispatch(clearAliens());
        dispatch(clearMissiles());
        dispatch(scoreClear());

        const alienAppear = () => {                           
            dispatch(newAlien());               
            appearRange > 1000 ? appearRange -= 500 : appearRange = 1000;          
            
            aliensTimer = setTimeout(alienAppear, appearRange);  
        };
         
        alienAppear();
        componentsMovement()
    };   
    
    
    // Main loop
    const componentsMovement = () => {   
        pending = false;         
        aliensMove(); 
        missilesMove();   

        movementTimer = setTimeout(componentsMovement, 100);          
    };

    // Bangs
    const makeBang = (key, range, decrease) => {
        dispatch(newBang({key: key, range: range, decrease: decrease}));         
        setTimeout(() => {
            dispatch(clearBang(key)); 
        }, 300)
    }

    
    // Collision checks
    if (missiles.length > 0) {
        missiles.forEach((missile) => {

            // Impact check
            if (aliens.length > 0) {
                aliens.forEach((alien) => {
                if (missile.range > alien.range - 10 * coeff
                    && missile.range < alien.range + 50 * coeff
                    && missile.increase < alien.decrease + 50 * coeff
                    && missile.increase > alien.decrease - 20 * coeff                                              
                ) {
                    destroyAliensArray.push(alien.key);
                    destroyMissilesArray.push(missile.key);
                    makeBang(alien.key, alien.range, alien.decrease);                                      
                    dispatch(scoreIncrease(10));
                }
            })};

            //Missile hits the ceil
            if (missile.increase < 10) destroyMissilesArray.push(missile.key);            
        })         
    }; 
    
    // Lifes
    aliens.length > 0 && aliens.forEach((alien) => {        
        if (alien.decrease >= 448 * coeff) {   
            lifes--;                              
        }        
    });
    dispatch(lifesLeft(lifes));

    // Game stop
    if (lifes === 0 || scoreNow.score === 800) {
        clearTimeout(movementTimer);        
        clearTimeout(aliensTimer);                
        pending = true;             
    };


    // Clean aliens array
    destroyAliensArray.length > 0 && aliensDestroy(destroyAliensArray);   

    // Clean missiles array
    destroyMissilesArray.length > 0 && missilesDestroy(destroyMissilesArray);      

    return (
        <div style={{ margin: '0 auto', position: 'relative', width: '900px' }}>                                      
            {pending && 
                <h1 className='start' style={{ position: 'absolute', top: -500 * coeff, left: 450 - 50 * coeff, fontSize: 48 * coeff, color: 'red', zIndex: 10 }} 
                onClick={() => aliensStart()}>Start</h1>              
            }

            {scoreNow.score === 800 && <Final final='win' />}
            {lifes === 0 && <Final final='loose' />}                 
        </div>
    )
    
         
}

export default Engine;