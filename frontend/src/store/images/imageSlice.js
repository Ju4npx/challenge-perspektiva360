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
  },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;
