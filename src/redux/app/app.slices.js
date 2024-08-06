import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./app.initialState";

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setDarkMode(state, action) {
      state.adding = action.payload;
    },
    setSlideMenu(state, action) {
      state.searching = action.payload;
    },
    setModalUser(state, action) {
      state.editing = action.payload;
    },
    setModalUserInfo(state, action) {
      state.editing = action.payload;
    },
    setModalUserLogout(state, action) {
      state.editing = action.payload;
    },
    setModalUserAvatar(state, action) {
      state.editing = action.payload;
    },
    setIsError(state, action) {
      state.editing = action.payload;
    },
  },
});

export const {
  setDarkMode,
  setSlideMenu,
  setModalUser,
  setModalUserInfo,
  setModalUserLogout,
  setModalUserAvatar,
  setIsError,
} = appSlice.actions;
export const appReducer = appSlice.reducer;
