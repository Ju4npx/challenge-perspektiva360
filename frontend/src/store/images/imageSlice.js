import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
  name: "image",
  initialState: {
    image: null,
  },
  reducers: {
    setImage: (state, { payload }) => {
      state.image = payload;
    },
    clearImage: (state, action) => {
      state.image = null;
    },
  },
});

export const { setImage, clearImage } = imageSlice.actions;
export default imageSlice.reducer;
