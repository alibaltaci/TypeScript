import { configureStore } from "@reduxjs/toolkit";
import { PersonSlice } from "./features/personSlice";

export const store = configureStore({
    reducer:{
        person: PersonSlice.reducer
    }
})