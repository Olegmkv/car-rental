import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65d7541f27d9a3bc1d7ac1d1.mockapi.io/api/v1";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchAll",
    async (searchParams, thunkAPI) => {
        try {
            const response = await axios.get(`/adverts?${searchParams}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

