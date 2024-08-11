import { createSelector } from "@reduxjs/toolkit";

export const getCategory = (state) => state.recipes.category;

export const getCategories = (state) => state.recipes.categories;

export const getRecipe = (state) => state.recipes.recipe;

const getId = (state) => state.recipes.recipe._id;
const getTitle = (state) => state.recipes.recipe.title;
const getDescr = (state) => state.recipes.recipe.description;
const getTime = (state) => state.recipes.recipe.time;
export const getForRecipePageHero = createSelector(
  getId, getTitle, getDescr, getTime,
  (getId, getTitle, getDescr, getTime) => {
    return {
      _id: getId,
      title: getTitle,
      description: getDescr,
      time: getTime
    };
  },
);

export const getRecipeIngredients = (state) => {
  return state.recipes.recipe ? state.recipes.recipe.ingredients : [];
};

const getInstructions = (state) => state.recipes.recipe.instructions;
const getImage = (state) => state.recipes.recipe.thumb;
export const getForPreparation = createSelector(
  getInstructions, getImage,
  (getInstructions, getImage) => {
    return {
      instructions: getInstructions,
      image: getImage
    }
  }
);

// export const getRecipes = (state) => state.recipes.recipes;
