const endpoints = {
  // user
  USER_REGISTER: "/users/register",
  USER_LOGIN: "/users/login",
  USER_CURRENT: "/users/current",
  USER_UPDATE: "/users/update",
  USER_LOGOUT: "/users/logout",
  OTHER_SUBSCRIBE: "/subscribe",

  // ingredients
  INGREDIENTS_LIST: "/ingredients/list",
  RECIPES_BY_INGREDIENTS_ID: "/ingredients", // /:ingredient

  // search
  OTHER_SEARCH: "/search",

  // favorite
  OTHER_FAVORITE: "/favorite",

  // shopping list
  SHOPPING_LIST: "/shopping-list",

  // my recipes
  MY_RECIPES_ADD: "/ownRecipes/add",
  MY_RECIPES_DELETE: "/ownRecipes", // /:id
  MY_RECIPES_GET: "/ownRecipes/",

  // recipes
  RECIPE_CATEGORIES: "/recipes/category-list",
  RECIPES_MAIN_PAGE: "/recipes/main-page",
  RECIPES_BY_CATEGORY: "/recipes/category", // /:category
  RECIPE_BY_ID: "/recipes", // /:id
  RECIPES_POPULAR: "popular-recipe",
  RECIPES_FAVORITE: "/favorite",
};

export default endpoints;
