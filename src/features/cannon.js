import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { position: 493 }

export const cannonSlice = createSlice ({
    name: 'cannon',
    initialState: initialStateValue,
    reducers: {        
        moveLeft: (state, action) => {
            state.position -= action.payload;            
        },
        moveRight: (state, action) => {
            state.position += action.payload;            
        },
        // fire: (state, action) => {
        //     state.value.fire = true;            
        // }

    }
})

export const { moveLeft, moveRight } = cannonSlice.actions;
export default cannonSlice.reducer;
