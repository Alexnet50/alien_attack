import React from 'react';
import { useSelector } from 'react-redux';

function Missiles() {
    const missiles = useSelector((state) => state.missiles);   
    
    if (missiles && missiles.length > 0) {
        return (
            <>
                {missiles.map((missile) => {            
                    return (
                        <div key={missile.key} style={{ width: 10, height: 20, borderRadius: 5, background: 'red',
                            position: 'absolute', top: missile.increase, left: missile.range
                        }}></div>
                    );
                })}
            </>
        )
        
    }
    
    
}

export default Missiles;