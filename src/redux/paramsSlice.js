import { createSlice } from "@reduxjs/toolkit";

const paramsInitialState = {
    page: 1,
    limit: 12,
    rentalPrice: "",
    model: ""
};

const paramsSlice = createSlice({
    name: "params",
    initialState: paramsInitialState,
    reducers: {
        nextPage: (state) => {
            state.page += 1;
        },
        prevPage: (state) => {
            if (state.page >1){
                state.page -= 1
            }
        },
        changeModel: (state, action) => {
            state.page = 1;
            state.model = action.payload
        },
        changeRentalPrice: (state, action) => {
            state.page = 1;
            state.rentalPrice = action.payload;
        }
    }
});

export const { nextPage, prevPage, changeModel, changeRentalPrice } = paramsSlice.actions;
export const paramsReducer = paramsSlice.reducer;