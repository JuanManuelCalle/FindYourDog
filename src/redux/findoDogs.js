import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import { ecApi } from "../services/FindDogAPi";
import authSlice from "./authSlice";


export const dogs = configureStore({
    reducer: {
        homeSlice,
        [ecApi.reducerPath]: ecApi.reducer,
        authSlice,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(ecApi.middleware),
});