import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./charactersSlice";
import episodesSlice from "./episodesSlice";

const store = configureStore({
  reducer: { episode: episodesSlice, characterSlice },
});

export default store;
