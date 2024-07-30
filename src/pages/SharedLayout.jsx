import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "../../components/Header/Header";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
};

export default SharedLayout;
