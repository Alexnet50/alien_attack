import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = 1;


export const adaptiveSlice = createSlice ({
    name: 'adaptive',
    initialState: {value: initialStateValue},
    reducers: {        
        setCoeff: (state, action) => {
            state.value = action.payload;            
        }        
    }
})

export const { setCoeff } = adaptiveSlice.actions;
export default adaptiveSlice.reducer;
