// node modules
import { Suspense, useEffect } from 'react';

// npm packages
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// functions
import { setCategories } from "../../redux/recipes/recipes.slices.js";
import getRecipeCategories from "../../api/recipes/getRecipeCategories.js";

// components
import MainTitle from '../../components/MainTitle/MainTitle.jsx';
import CategoriesNav from '../../components/CategoriesNav/CategoriesNav.jsx';

const CategoriesPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getRecipeCategories();
        dispatch(setCategories(response));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <MainTitle>Categories</MainTitle>
      <CategoriesNav />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CategoriesPage;
