import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";

export const dogs = configureStore({
    reducer: {
        homeSlice,
    }
})