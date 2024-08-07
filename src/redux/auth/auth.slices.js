import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./auth.initialState";
import { register, login, logout} from "./auth.operations";

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = initialState.token;
        state.isLoggedIn = initialState.isLoggedIn;
      });
  },
});

export const authReducer = authSlice.reducer;
