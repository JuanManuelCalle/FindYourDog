import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import { ecApi } from "../services/FindDogAPi";
import authSlice from "./authSlice";

/**
 * Configuración y creación de la tienda Redux.
 */
export const dogs = configureStore({
    reducer: {
        homeSlice,             // Slice de Redux para la página de inicio
        [ecApi.reducerPath]: ecApi.reducer,  // Reducer generado por RTK Query
        authSlice,             // Slice de Redux para la autenticación
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecApi.middleware),  // Middleware de RTK Query
});
