import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name:'counter',
    initialState: {
        count: 0
    } ,
    reducers:{
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        reset: () => 0,
    },
});

export const{increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer