import {configureStore} from '@reduxjs/toolkit'
import QuantitySlice from './QtySlice'

const store = configureStore({
    reducer:{
        Quantity: QuantitySlice
    }
})

export default store