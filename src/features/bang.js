import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

export const bangSlice = createSlice ({
    name: 'bang',
    initialState: initialStateValue,
    reducers: {        
        newBang: (state, action) => {            
            state.push({key: action.payload.key, range: action.payload.range, decrease: action.payload.decrease });                       
        },
        clearBang: (state, action) => {                          
            state.forEach((bang, index) => bang.key === action.payload && state.splice(index, 1));                   
        }        
    }
})

export const { newBang, clearBang } = bangSlice.actions;
export default bangSlice.reducer;
