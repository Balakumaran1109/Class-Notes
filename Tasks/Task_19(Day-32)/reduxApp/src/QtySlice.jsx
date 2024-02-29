import {createSlice} from '@reduxjs/toolkit'

export const QuantitySlice = createSlice({
    name: "Quantity",
    initialState: 0,
    reducers:{
        increment: (state, actions) => {
            state + 1
        },  
        decrement: (state) => state - 1,
    },
})

export const{increment, decrement} = QuantitySlice.actions
export default QuantitySlice.reducer