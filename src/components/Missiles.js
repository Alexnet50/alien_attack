import React from 'react';
import { useSelector } from 'react-redux';

function Missiles() {
    const missiles = useSelector((state) => state.missiles);    
    const coeff = useSelector((state) => state.adaptive.value);
    
    if (missiles && missiles.length > 0) {
        return (
            <>
                {missiles.map((missile) => {            
                    return (
                        <div key={missile.key} style={{ width: 10 * coeff, height: 20 * coeff, borderRadius: 5, background: 'red',
                            position: 'absolute', top: missile.increase, left: missile.range
                        }}></div>
                    );
                })}
            </>
        )
        
    }
    
    
}

export default Missiles;