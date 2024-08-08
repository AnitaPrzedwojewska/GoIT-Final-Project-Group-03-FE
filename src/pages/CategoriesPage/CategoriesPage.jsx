import MainTitle from '../../components/MainTitle/MainTitle.jsx';
import CategoriesNav from '../../components/CategoriesNav/CategoriesNav.jsx';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const CategoriesPage = () => {
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
