import { createSlice } from "@reduxjs/toolkit";

const favoritsInitialState = {
    favorits: []
};

const favoritSlice = createSlice({
    name: "favorits",
    initialState: favoritsInitialState,
    reducers: {
        addFavorit: (state, action) => {
            state.favorits.push(action.payload)
        },
        removeFavorit: (state, action) => {
            state.favorits.splice(action.payload,1)
        }
    }
});

export const { addFavorit, removeFavorit } = favoritSlice.actions;
export const favoritsReducer = favoritSlice.reducer;
