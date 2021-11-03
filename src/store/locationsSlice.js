import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLocations = createAsyncThunk("location/getLocations", async function () {
    const response = await axios.get("https://rickandmortyapi.com/api/location")
    return response.data;
})

const locationsSlice = createSlice({
    name: 'location',
    initialState: {
        locations: []
    },
    reducers: {},
    extraReducers: {
        [getLocations.fulfilled]: (state, action) => {
            state.locations = action.payload;
        }
    }
})

export const locationActions = locationsSlice.actions;
export default locationsSlice.reducer;