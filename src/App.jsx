// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
// import SharedLayout from "./pages/SharedLayout";
import RegisterPage from "./pages/RegisterPage";
import SigninPage from "./pages/SigninPage";
import CategoriesPage from "./pages/CategoriesPage";
import AddRecipesPage from "./pages/AddRecipesPage";
import MyRecipesPage from "./pages/MyRecipesPage";
import FavoritePage from "./pages/FavoritePage";
import ShoppingListPage from "./pages/ShoppingListPage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";

import './App.css'

function App() {
  return (
    <>
      <Routes>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/signin' element={<SigninPage />} />
      <Route path='/categories/:categoryName' element={<CategoriesPage />} />
      <Route path='/add' element={<AddRecipesPage />} />
      <Route path='/my' element={<MyRecipesPage />} />
      <Route path='/favorite' element={<FavoritePage />} />
      <Route path='/shopping-list' element={<ShoppingListPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/' element={<WelcomePage />} />
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App
