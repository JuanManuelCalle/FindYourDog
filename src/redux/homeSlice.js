import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        filteredDogs: []
    }
});

export const selectFilteredDogs = (state) => state.homeSlice.filteredDogs;

export const { setSearchQuery } = homeSlice.actions;

export default homeSlice.reducer