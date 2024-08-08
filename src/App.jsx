import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import setAxiosDefault from "./config.js/axios";

import routes from './constants/routes.js';

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import AddRecipesPage from "./pages/AddRecipesPage/AddRecipesPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CategoryRecipes from './components/CategoryRecipes/CategoryRecipes';
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import MainPage from "./pages/MainPage/MainPage";
import MyRecipesPage from "./pages/MyRecipesPage/MyRecipesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RecipePage from "./pages/RecipePage/RecipePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import ShoppingListPage from "./pages/ShoppingListPage/ShoppingListPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

const App = () => {

  useEffect(() => {
    setAxiosDefault();
  }, []);

  return (
    <>
      <Routes>

        <Route element={<PrivateRoute redirectTo={`/${routes.WELCOME}`} />}>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to={`/${routes.MAIN}`} />} />
            <Route path={routes.MAIN} element={<MainPage />} />
            <Route path={routes.CATEGORIES} element={<CategoriesPage />}>
              <Route path=':categoryName' element={<CategoryRecipes />} />
            </Route>
            <Route path={routes.RECIPES} element={<RecipePage />} />
            <Route path={routes.ADD} element={<AddRecipesPage />} />
            <Route path={routes.MY} element={<MyRecipesPage />} />
            <Route path={routes.FAVORITE} element={<FavoritePage />} />
            <Route path={routes.SHOPPING_LIST} element={<ShoppingListPage />} />
            <Route path={routes.SEARCH} element={<SearchPage />} />
          </Route>
        </Route>

        <Route element={<RestrictedRoute redirectTo={"/"} />}>
          <Route path={`/${routes.WELCOME}`} element={<WelcomePage />} />
          <Route path={`/${routes.REGISTER}`} element={<RegisterPage />} />
          <Route path={`/${routes.SIGN_IN}`} element={<SigninPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
