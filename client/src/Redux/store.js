import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice"; // Import reducer

export const store = configureStore({
  reducer: {
    jobs: jobReducer, // Register reducer
  },
});

export default store;
