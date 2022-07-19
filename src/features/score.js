import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { lifes: 5, score: 0 }

export const scoreSlice = createSlice ({
    name: 'score',
    initialState: { value: initialStateValue },
    reducers: {        
        lifesLeft: (state, action) => {
            state.value.lifes = action.payload;            
        },
        scoreIncrease: (state, action) => {
            state.value.score += action.payload;            
        },
        scoreClear: (state) => {
            state.value.score = 0;
        }
    }
})

export const { lifesLeft, scoreIncrease, scoreClear } = scoreSlice.actions;
export default scoreSlice.reducer;
