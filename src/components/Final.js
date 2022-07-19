import React from 'react';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';

function Final(props) {
    const coeff = useSelector((state) => state.adaptive.value);

    return (        
        <>
            {props.final === 'win' && 
                <Fade top>
                    <div style={{ width: 800, height: 450 * coeff, borderRadius: 10, backgroundImage: `url(../../images/win.png)`,
                    backgroundSize: 'cover', backgroundPosition: 'top center', position: 'absolute', top: -490 * coeff, left: 50 }}></div>
                </Fade>}
            
            {props.final === 'loose' && 
                <Fade top>
                    <div style={{ width: 800, height: 450 * coeff, borderRadius: 10, backgroundImage: `url(../../images/loose.png)`,
                    backgroundSize: 'cover', backgroundPosition: 'center center', position: 'absolute', top: -490 * coeff, left: 50 }}></div>
                </Fade>}
        </>        
    );
}

export default Final;