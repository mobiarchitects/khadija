import { configureStore } from "@reduxjs/toolkit"
import congesSlice from "./congesSlice"



export  const store = configureStore({
    reducer:{
        conges : congesSlice ,
    },
})
