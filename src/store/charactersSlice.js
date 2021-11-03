import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCharacters = createAsyncThunk(
  "character/getCharacters",
  async function (page) {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character?page=" + page
    );
    console.log(response.data);
    return response.data;
  }
);
const characterSlice = createSlice({
  name: "character",
  initialState: {
    character: [],
    status: "",
    page: 1,
    original: [],
  },
  reducers: {
    next: (state) => {
      state.page += 1;
    },
    prev: (state) => {
      state.page -= 1;
    },
    filter: (state) => {
      state.character.results = state.character.results.filter(
        (elem) => elem.status === "Alive"
      );
    },
    filterDead: (state) => {
      state.character.results = state.character.results.filter(
        (elem) => elem.status === "Dead"
      );
    },
    filterUnknown: (state) => {
        state.character.results = state.character.results.filter(
          (elem) => elem.status === "unknown"
        );
      },
    reset: (state) => {
      state.character.results = state.original;
    },
  },
  extraReducers: {
    [getCharacters.pending]: (state) => {
      state.status = "pending";
    },
    [getCharacters.fulfilled]: (state, action) => {
      state.character = action.payload;
      state.original = action.payload.results;
      state.status = "fulfilled";
    },
  },
});

const characterActions = characterSlice.actions;
export default characterSlice.reducer;
export { characterActions };
