import React from 'react';
import { useSelector } from 'react-redux';

function Cannon() {
    const cannon = useSelector((state) => state.cannon);
    const coeff = useSelector((state) => state.adaptive.value);

    return (
        <div style={{ width: 32, height: 50, borderRadius: 3, backgroundImage: `url(../../images/cannon.png)`,
        backgroundSize: 'contain', backgroundRepeat: 'no-repeat', position: 'absolute', bottom: 0, left: cannon.position
        }}></div>
    );
}

export default Cannon;