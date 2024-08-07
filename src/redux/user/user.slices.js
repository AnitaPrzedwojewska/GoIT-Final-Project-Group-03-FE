import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./user.initialState";

import { get, update } from "./user.operations";

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(get.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.user = action.payload.user;
      });
  },
});

export const userReducer = userSlice.reducer;
