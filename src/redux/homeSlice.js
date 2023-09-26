import { createSlice } from "@reduxjs/toolkit";
import { data } from "../Data/FindDogsData";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        allDogs: data,
        filteredDogs: []
    },
    reducers: {
        setSearchQuery: (state, action) => {
            const query = action.payload;
            state.filteredDogs = state.allDogs.filter((dog) => 
                dog.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            )
        }
    }
});

export const selectFilteredDogs = (state) => state.homeSlice.filteredDogs;

export const { setSearchQuery } = homeSlice.actions;

export default homeSlice.reducer