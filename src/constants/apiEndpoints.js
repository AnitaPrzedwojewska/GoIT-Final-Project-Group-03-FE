const endpoints = {
  USER_REGISTER: "/users/register",
  USER_LOGIN: "/users/login",
  USER_LOGOUT: "/users/logout",
  USER_CURRENT: "/users/current",
  USER_UPDATE: "/users/update",

  RECIPE_CATEGORIES: "/recipes/category-list",
  RECIPES_MAIN_PAGE: "/recipes/main-page",
  RECIPES_BY_CATEGORY: "/recipes/category/:category",
  RECIPE_BY_ID: "/recipes/:id",
  RECIPE_BY_NAME: "",

  MY_RECIPES_GET: "/ownRecipes/",
  MY_RECIPES_ADD: "/ownRecipes/add",
  MY_RECIPES_DELETE: "/ownRecipes/:id",

  INGREDIENTS_LIST: "/ingredients/list",
  RECIPES_BY_INGREDIENTS_ID: "/ingredients/:ingredient",
};

export default endpoints;