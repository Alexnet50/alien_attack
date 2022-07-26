import React from 'react';
import { useSelector } from 'react-redux';
// import { useSelector } from '../';

function Aliens(props) {
    const aliens = useSelector((state) => state.aliens);    
    
    if (aliens && aliens.length > 0) {
        return (
            <>                
                {aliens.map(alien => {                    
                    return (                   
                    <div key={alien.key} style={{ width: 50, height: 50, borderRadius: 10, backgroundImage: `url(../../images/ufo_${alien.outlook}.png)`,
                        backgroundSize: 'contain', position: 'absolute', top: alien.decrease, left: alien.range
                    }}></div> 
                    )                   
                })}                
            </>
        )
        
    }
    
}

export default Aliens;

