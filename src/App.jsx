import { Navigate, Route, Routes } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
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
