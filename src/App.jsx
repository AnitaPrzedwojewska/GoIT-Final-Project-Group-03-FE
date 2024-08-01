// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage/WelcomePage";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage/MainPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import RecipePage from "./pages/RecipePage/RecipePage";
import AddRecipesPage from "./pages/AddRecipesPage/AddRecipesPage";
import MyRecipesPage from "./pages/MyRecipesPage/MyRecipesPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import ShoppingListPage from "./pages/ShoppingListPage/ShoppingListPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="categories/:categoryName" element={<CategoriesPage />} />
          <Route path="recipe/:recipeId" element={<RecipePage />} />
          <Route path="add" element={<AddRecipesPage />} />
          <Route path="my" element={<MyRecipesPage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="shopping-list" element={<ShoppingListPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
