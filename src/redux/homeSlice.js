import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice de Redux para la página de inicio.
 */
const homeSlice = createSlice({
    name: "home",
    initialState: {
        filteredDogs: []  // Un array que almacenará los perros filtrados.
    },
    reducers: {
        setSearchQuery: (state, action) => {
            // Esta acción se utiliza para actualizar la propiedad 'filteredDogs' en el estado.
            // Permite filtrar perros según una consulta de búsqueda.
            // Por ejemplo, se podría establecer 'filteredDogs' en un conjunto de perros que coincidan con la consulta.
            // state.filteredDogs = ... // Actualizar según la lógica de filtrado.
        }
    }
});

/**
 * Selector para acceder a la propiedad 'filteredDogs' en el estado de la página de inicio.
 * Permite obtener la lista de perros filtrados desde el estado.
 * @param {Object} state - El estado de la aplicación.
 * @returns {Array} - Un array de perros filtrados.
 */
export const selectFilteredDogs = (state) => state.homeSlice.filteredDogs;

export const { setSearchQuery } = homeSlice.actions;

export default homeSlice.reducer;
