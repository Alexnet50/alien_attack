import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];
const alienSpeed = 3;

let key = 0;


export const aliensSlice = createSlice ({
    name: 'aliens',
    initialState: initialStateValue,
    reducers: {
        aliensMovement: (state, action) => {
            for (let i = 0; i < state.length; i++) {
                state[i].decrease <= 448 * action.payload && (state[i].decrease += alienSpeed * action.payload);
            };                        
        },
        newAlien: (state) => {            
            state.push({key: key, range: Math.floor(Math.random() * 800), decrease: 0, outlook: Math.floor(Math.random() * 3)});            
            key++;            
        },
        destroyAliens: (state, action) => {
            action.payload.forEach((key) => {                
                state.forEach((alien, index) => alien.key === key && state.splice(index, 1))
            });           
        },
        clearAliens: (state) => {
            state = state.splice(0, state.length);
        }
    }
})

export const { aliensMovement, newAlien, destroyAliens, clearAliens } = aliensSlice.actions;
export default aliensSlice.reducer;
