import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import css from "./SharedLayout.module.css";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <div className={css.mainSection}>
        <div className={css.container}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SharedLayout;
