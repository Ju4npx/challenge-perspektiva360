import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import imageSlice from "./images/imageSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    images: imageSlice,
  },
});
