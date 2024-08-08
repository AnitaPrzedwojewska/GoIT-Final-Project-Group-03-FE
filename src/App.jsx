import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import setAxiosDefault from "./config.js/axios";

import routes from "./constants/routes.js";

import CategoryRecipes from "./components/CategoryRecipes/CategoryRecipes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import AddRecipesPage from "./pages/AddRecipesPage/AddRecipesPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
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
              <Route path=":categoryName" element={<CategoryRecipes />} />
            </Route>
            <Route path={routes.RECIPES} element={<RecipePage />} />
            <Route path={routes.ADD} element={<AddRecipesPage />} />
            <Route path={routes.MY} element={<MyRecipesPage />} />
            <Route path={routes.FAVORITE} element={<FavoritePage />} />
            <Route path={routes.SHOPPING_LIST} element={<ShoppingListPage />} />
            <Route path={routes.SEARCH} element={<SearchPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="/main" />} />

          <Route
            path="main"
            element={
              <PrivateRoute component={<MainPage />} redirectTo={"/welcome"} />
            }
          />
          <Route
            path="categories/:categoryName"
            element={
              <PrivateRoute
                component={<CategoriesPage />}
                redirectTo={"/welcome"}
              />
            }
          />
          <Route
            path="recipes"
            element={
              <PrivateRoute
                component={<RecipePage />}
                redirectTo={"/welcome"}
              />
            }
          />
          <Route
            path="add"
            element={
              <PrivateRoute
                component={<AddRecipesPage />}
                redirectTo={"/welcome"}
              />
            }
          />
          <Route
            path="my"
            element={
              <PrivateRoute
                component={<MyRecipesPage />}
                redirectTo={"/welcome"}
              />
            }
          />
          <Route
            path="favorite"
            element={
              <PrivateRoute
                component={<FavoritePage />}
                redirectTo={"/welcome"}
              />
            }
          />
          <Route
            path="shopping-list"
            element={
              <PrivateRoute
                component={<ShoppingListPage />}
                redirectTo={"/welcome"}
              />
            }
          />
          <Route
            path="search"
            element={
              <PrivateRoute
                component={<SearchPage />}
                redirectTo={"/welcome"}
              />
            }
          />
        </Route>
        <Route
          path="/welcome"
          element={
            <RestrictedRoute component={<WelcomePage />} redirectTo={"/"} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<RegisterPage />} redirectTo={"/"} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute component={<SigninPage />} redirectTo={"/"} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
