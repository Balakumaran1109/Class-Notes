import {configureStore} from "@reduxjs/toolkit";
import  quantitySlice  from "./src/QuantitySlice";

const qtyStore = configureStore({
    reducer:{
        quantity : quantitySlice
    }
})

export default qtyStore;