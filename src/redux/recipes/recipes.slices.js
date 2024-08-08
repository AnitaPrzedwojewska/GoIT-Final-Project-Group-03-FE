import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./recipes.initialState";

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload.category;
    },
    // setRecipes(state, action) {
    //   state.recipes = action.payload.recipes;
    // },
    // setCategories(state, action) {
    //   state.categories = action.payload.categories;
    // },
    clearCategory(state) {
      state.categories = initialState.category;
    },
    // clearRecipes(state) {
    //   state.recipes = initialState.recipes;
    // },
    // clearCategories(state) {
    //   state.categories = initialState.categories;
    // },
  },
});

export const {
  setCategory,
  // setRecipes,
  // setCategories,
  clearCategory,
  // clearRecipes,
  // clearCategories,
} = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
