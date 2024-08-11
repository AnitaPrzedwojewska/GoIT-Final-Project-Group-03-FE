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
    setRecipe(state, action) {
      state.recipe = action.payload;
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
    clearRecipe(state) {
      state.recipes = initialState.recipe;
    },
    // clearRecipes(state) {
    //   state.recipes = initialState.recipes;
    // },
  },
});

export const {
  setCategory,
  setCategories,
  setRecipe,
  // setRecipes,
  clearCategory,
  clearCategories,
  clearRecipe,
  // clearRecipes,
} = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
