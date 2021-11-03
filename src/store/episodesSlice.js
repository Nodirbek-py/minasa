import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getEpisodes = createAsyncThunk(
  "episodes/getEpisodes",
  async () => {
    const response = await axios.get("https://rickandmortyapi.com/api/episode");
    return response.data;
  }
);

const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    episodes: [],
    status: "",
  },
  reducers: {},
  extraReducers: {
    [getEpisodes.pending]: (state) => {
      state.status = "pending";
    },
    [getEpisodes.fulfilled]: (state, action) => {
      state.episodes = action.payload;
      state.status = "success";
    },
  },
});

export default episodesSlice.reducer;
export const episodesActions = episodesSlice.actions;
