import React from 'react';
import { useSelector } from 'react-redux';
import Zoom from 'react-reveal/Zoom';

function Bang() {
    const bangs = useSelector((state) => state.bang);    
    
    if (bangs && bangs.length > 0) {
        return (
            <>                
                {bangs.map(bang => {                                    
                    return ( 
                        <Zoom duration={300}>                  
                            <div className='bang' key={bang.key} style={{ width: 50, height: 50, borderRadius: 25,
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

