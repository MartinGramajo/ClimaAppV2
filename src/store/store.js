import { configureStore } from "@reduxjs/toolkit";
import climaSlice from "../slices/climaSlice";

export const store = configureStore({
  reducer: {
    clima: climaSlice,
  }
})