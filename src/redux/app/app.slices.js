import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./app.initialState";

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setDarkMode(state, action) {
      state.darkMode = action.payload;
    },
    setSlideMenu(state, action) {
      state.slideMenu = action.payload;
    },
    setModalUser(state, action) {
      state.modalUser = action.payload;
    },
    setModalUserInfo(state, action) {
      state.modalUserInfo = action.payload;
    },
    setModalUserLogout(state, action) {
      state.modalUserLogout = action.payload;
    },
    setModalUserAvatar(state, action) {
      state.modalUserAvatar = action.payload;
    },
    setIsError(state, action) {
      state.isError = action.payload;
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
