import React from 'react';
import { useSelector } from 'react-redux';
import Zoom from 'react-reveal/Zoom';

function Bang() {
    const bangs = useSelector((state) => state.bang);
    const coeff = useSelector((state) => state.adaptive.value);
    
    if (bangs && bangs.length > 0) {
        return (
            <>                
                {bangs.map(bang => {                                    
                    return ( 
                        <Zoom duration={300}>                  
                            <div className='bang' key={bang.key} style={{ width: 50 * coeff, height: 50 * coeff, borderRadius: 25 * coeff,
                                position: 'absolute', top: bang.decrease, left: bang.range}}>
                            </div> 
                        </Zoom>
                    )                   
                })} 
                               
            </>
        )
        
    }
    
}

export default Bang;

