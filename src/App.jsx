// node modules
import { useEffect } from "react";

// npm packages
import { Navigate, Route, Routes } from "react-router-dom";
// import { useDispatch } from "react-redux";

// config
import setAxiosDefault from "./config.js/axios";

// functions
// import { refresh } from './redux/auth/auth.operations.js';
// import { clear } from './redux/user/user.slices';

// contants
import routes from "./constants/routes.js";

//pages
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

// components
import CategoryRecipes from "./components/CategoryRecipes/CategoryRecipes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

const App = () => {

  // const dispatch = useDispatch();

  useEffect(() => {
    setAxiosDefault();
    // dispatch(clear());
    // dispatch(refresh());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        <Route element={<RestrictedRoute redirectTo={"/"} />}>
          <Route path={`/${routes.WELCOME}`} element={<WelcomePage />} />
          <Route path={`/${routes.REGISTER}`} element={<RegisterPage />} />
          <Route path={`/${routes.LOGIN}`} element={<SigninPage />} />
        </Route>

        <Route element={<PrivateRoute redirectTo={`/${routes.WELCOME}`} />}>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to={`/${routes.MAIN}`} />} />
            <Route path={routes.MAIN} element={<MainPage />} />
            <Route path={routes.CATEGORIES} element={<CategoriesPage />}>
              <Route path=":categoryName" element={<CategoryRecipes />} />
            </Route>
            <Route
              path={`${routes.RECIPES}/:recipeId`}
              element={<RecipePage />}
            />
            <Route path={routes.ADD} element={<AddRecipesPage />} />
            <Route path={routes.MY} element={<MyRecipesPage />} />
            <Route path={routes.FAVORITE} element={<FavoritePage />} />
            <Route path={routes.SHOPPING_LIST} element={<ShoppingListPage />} />
            <Route path={routes.SEARCH} element={<SearchPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
