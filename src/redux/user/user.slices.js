import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./user.initialState";

import { get, update } from "./user.operations";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clear(state) {
      state.name = initialState.name;
      state.email = initialState.email;
      // state.avatar = initialState.avatar;
      // state.subscribe = initialState.subscribe;
      // state.favorites = initialState.favorites;
    },
    // addFavorite(state, action) {
    //   state.favorites = state.favorites.push(action);
    // },
    // deleteFavorite(state, action) {
    //   state.favorites = state.favorites.filter((fav) => fav._id !== action);
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(get.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        // state.avatar = action.payload.avatarURL;
        // state.subscribe = action.payload.subscribe;
        // state.favorites = action.payload.favorites;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        // state.avatar = action.payload.avatar;
        // state.subscribe = action.payload.subscribe;
        // state.favorites = action.payload.favorites;
      });
  },
});

export const { clear } = userSlice.actions;
export const userReducer = userSlice.reducer;
