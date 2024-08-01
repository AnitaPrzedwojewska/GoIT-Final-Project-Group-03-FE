import { Outlet } from "react-router-dom";

// import css from "./SharedLayout.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const SharedLayout = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
