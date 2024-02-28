import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const handleFetchFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    },
    extraReducers:
        (builder) => {
            builder.addCase(fetchCatalog.pending, handlePending
            ).addCase(fetchCatalog.fulfilled, handleFetchFulfilled
            ).addCase(fetchCatalog.rejected, handleRejected
            )          
        }
});
// Експортуємо редюсер
export const catalogReducer = catalogSlice.reducer;
