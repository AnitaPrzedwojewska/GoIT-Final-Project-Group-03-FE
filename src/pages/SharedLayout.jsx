import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from '../components/Loader/Loader';

const SharedLayout = () => {
  return (
    <div>
      <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayout;
