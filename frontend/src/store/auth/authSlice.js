import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    checking: true,
    user: {},
  },
  reducers: {
    login: (state, { payload }) => {
      state.checking = false;
      state.user = payload;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
