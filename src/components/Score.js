import React from 'react';
import { useSelector } from 'react-redux';

function Score() {
    const scoreNow = useSelector((state) => state.score.value);
    const coeff = useSelector((state) => state.adaptive.value);

    return (
        <>
            <div className='title' style={{ marginTop: 10, textAlign: 'center', fontSize: 36, fontWeight: 'bold' }}>ALIEN ATTACK</div>
            <div style={{ margin: '0 auto', width: 900 / coeff, display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginLeft: '20px', fontSize: 24 }}>Lifes left: {scoreNow.lifes} </div>
                <div style={{ marginRight: '20px', fontSize: 24 }}>Score: {scoreNow.score}</div>    
            </div>
        </>        
    );
}

export default Score;