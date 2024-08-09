// node modules
import { useEffect } from "react";

// npm packages
import { Navigate, Route, Routes } from "react-router-dom";

// config
import setAxiosDefault from "./config.js/axios";

// contants
import routes from './constants/routes.js';

//pages
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import MainPage from "./pages/MainPage/MainPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import RecipePage from "./pages/RecipePage/RecipePage";
import AddRecipesPage from "./pages/AddRecipesPage/AddRecipesPage";
import MyRecipesPage from "./pages/MyRecipesPage/MyRecipesPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import ShoppingListPage from "./pages/ShoppingListPage/ShoppingListPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// components
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import CategoryRecipes from './components/CategoryRecipes/CategoryRecipes';

const App = () => {

  useEffect(() => {
    setAxiosDefault();
  }, []);

  return (
    <>
      <Routes>

        <Route
          element={<RestrictedRoute redirectTo={"/"} />}>
          <Route
            path={`/${routes.WELCOME}`}
            element={<WelcomePage />} />
          <Route
            path={`/${routes.REGISTER}`}
            element={<RegisterPage />} />
          <Route
            path={`/${routes.LOGIN}`}
            element={<SigninPage />} />
        </Route>

        <Route
          element={<PrivateRoute redirectTo={`/${routes.WELCOME}`} />}>
          <Route
            path='/'
            element={<SharedLayout />}>
            <Route
              index
              element={<Navigate to={`/${routes.MAIN}`} />} />
            <Route
              path={routes.MAIN}
              element={<MainPage />} />
            <Route
              path={routes.CATEGORIES}
              element={<CategoriesPage />}>
              <Route
                path=':categoryName'
                element={<CategoryRecipes />} />
            </Route>
            <Route
              path={`${routes.RECIPES}/:recipeId`}
              element={<RecipePage />} />
            <Route
              path={routes.ADD}
              element={<AddRecipesPage />} />
            <Route
              path={routes.MY}
              element={<MyRecipesPage />} />
            <Route
              path={routes.FAVORITE}
              element={<FavoritePage />} />
            <Route
              path={routes.SHOPPING_LIST}
              element={<ShoppingListPage />} />
            <Route
              path={routes.SEARCH}
              element={<SearchPage />} />
          </Route>
        </Route>

        <Route
          path='*'
          element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
