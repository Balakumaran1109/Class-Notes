import { createSlice } from "@reduxjs/toolkit";

export const quantitySlice = createSlice({
  name: "quantity",
  initialState: {
    details: []
  },
  reducers: {

    initialDetails: (state, action) => {
      state.details.push(action.payload);
    },
    
    handleIncrement : (state, action) => {
      console.log(state.details.map(val => val))
       ;        
    }
}
});

export const { handleIncrement, handleDecrement, initialDetails } =
  quantitySlice.actions;
export default quantitySlice.reducer;
