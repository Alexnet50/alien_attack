import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];
const missileSpeed = 10;

let key = 0;

export const missilesSlice = createSlice ({
    name: 'missiles',
    initialState: initialStateValue,
    reducers: {        
        missilesMovement: (state, action) => {            
            for (let i = 0; i < state.length; i++) {
                state[i].increase >= 3 && (state[i].increase -= missileSpeed * action.payload);                
            }           
        },
        newMissile: (state, action) => {            
            state.push({key: key, range: action.payload.position, increase: 430 * action.payload.coeff});                     
            key++;                     
        },
        destroyMissiles: (state, action) => {             
            action.payload.forEach((key) => {
                state.forEach((missile, index) => missile.key === key && state.splice(index, 1))        
            })            
        },
        clearMissiles: (state) => {
            state = state.splice(0, state.length);
        }    
    }
})

export const { missilesMovement, newMissile, destroyMissiles, clearMissiles } = missilesSlice.actions;
export default missilesSlice.reducer;
