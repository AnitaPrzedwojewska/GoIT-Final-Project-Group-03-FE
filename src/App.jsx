import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import setAxiosDefault from "./config.js/axios";

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
      <div id="overlays"></div>
      <Routes>
        {/* <Route path='/' element={<SharedLayout />}>
          <Route index element={<Navigate to='/welcome' />} />

          <Route path='main' element={<MainPage />} />
          <Route path='categories/:categoryName' element={<CategoriesPage />} />
          <Route path='recipes' element={<RecipePage />} />
          <Route path='add' element={<AddRecipesPage />} />
          <Route path='my' element={<MyRecipesPage />} />
          <Route path='favorite' element={<FavoritePage />} />
          <Route path='shopping-list' element={<ShoppingListPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='/welcome' element={<WelcomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/signin' element={<SigninPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} /> */}
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Navigate to='/main' />} />

          <Route
            path='main'
            element={
              <PrivateRoute component={<MainPage />} redirectTo={"/welcome"} />
            }
          />
          <Route
            path='categories/:categoryName'
            element={
              <PrivateRoute
                component={<CategoriesPage />}
                redirectTo={"/welcome"}
              />
            }
          />
          <Route
            path='recipes'
            element={
              <PrivateRoute
                component={<RecipePage />}
                redirectTo={"/welcome"}
              />
            }
          />
          <Route
            path='add'
            element={
              <PrivateRoute
                component={<AddRecipesPage />}
                redirectTo={"/welcome"}
              />
            }
          />
          <Route
            path='my'
            element={
              <PrivateRoute
                component={<MyRecipesPage />}
                redirectTo={"/welcome"}
              />
            }
          />
          <Route
            path='favorite'
            element={
              <PrivateRoute
                component={<FavoritePage />}
                redirectTo={"/welcome"}
              />
            }
          />
          <Route
            path='shopping-list'
            element={
              <PrivateRoute
                component={<ShoppingListPage />}
                redirectTo={"/welcome"}
              />
            }
          />
          <Route
            path='search'
            element={
              <PrivateRoute
                component={<SearchPage />}
                redirectTo={"/welcome"}
              />
            }
          />
        </Route>
        <Route
          path='/welcome'
          element={
            <RestrictedRoute component={<WelcomePage />} redirectTo={"/"} />
          }
        />
        <Route
          path='/register'
          element={
            <RestrictedRoute component={<RegisterPage />} redirectTo={"/"} />
          }
        />
        <Route
          path='/signin'
          element={
            <RestrictedRoute component={<SigninPage />} redirectTo={"/"} />
          }
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
