import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { position: 493 }

export const cannonSlice = createSlice ({
    name: 'cannon',
    initialState: initialStateValue,
    reducers: {        
        moveLeft: (state, action) => {
            state.position > 20 && (state.position -= action.payload);           
        },
        moveRight: (state, action) => {
            state.position < 850 / action.payload.coeff && (state.position += action.payload.move);            
        },
        // fire: (state, action) => {
        //     state.value.fire = true;            
        // }

    }
})

export const { moveLeft, moveRight } = cannonSlice.actions;
export default cannonSlice.reducer;
