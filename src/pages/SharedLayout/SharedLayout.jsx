import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import css from "./SharedLayout.module.css";

import Overlays from "../../components/Overlays/Overlays";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import BackgroundLayout from "../../components/BackgroundLayout/BackgroundLayout";

const SharedLayout = () => {
  return (
    <div className={css.page}>
      <Header />
      <BackgroundLayout>
        <div className={css.mainSection}>
          <div className={css.container}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
        <Footer />
      </BackgroundLayout>
      <Overlays />
    </div>
  );
};

export default SharedLayout;
