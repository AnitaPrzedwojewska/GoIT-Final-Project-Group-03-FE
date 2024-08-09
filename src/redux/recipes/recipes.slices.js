import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./recipes.initialState";

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    // setRecipes(state, action) {
    //   state.recipes = action.payload.recipes;
    // },
    clearCategory(state) {
      state.category = initialState.category;
    },
    clearCategories(state) {
      state.categories = initialState.categories;
    },
    // clearRecipes(state) {
    //   state.recipes = initialState.recipes;
    // },
  },
});

export const {
  setCategory,
  setCategories,
  // setRecipes,
  clearCategory,
  clearCategories,
  // clearRecipes,
} = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
