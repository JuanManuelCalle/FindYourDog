import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice de Redux para la autenticación.
 */
const authSlice = createSlice({
    name: "authSlice", // Nombre del slice
    initialState: {
        user: null,    // Datos del usuario
        idToken: null  // Token de identificación
    },
    reducers: {
        /**
         * Reducer para establecer los datos del usuario.
         * 
         * @param {Object} state - Estado actual del slice.
         * @param {Object} action - Acción con los datos del usuario.
         */
        setUser: (state, action) => {
            state.user = action.payload;
        },

        /**
         * Reducer para establecer el token de identificación.
         * 
         * @param {Object} state - Estado actual del slice.
         * @param {string} action - Token de identificación.
         */
        setIdToken: (state, action) => {
            state.idToken = action.payload;
        },

        /**
         * Reducer para borrar los datos del usuario y el token de identificación.
         * 
         * @param {Object} state - Estado actual del slice.
         */
        clearUser: (state) => {
            state.user = null;
            state.idToken = null;
        },
    },
});

// Exporta las acciones generadas por el slice.
export const { setUser, setIdToken, clearUser } = authSlice.actions;

// Exporta el reducer del slice.
export default authSlice.reducer;
