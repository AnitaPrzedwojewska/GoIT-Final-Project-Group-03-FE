import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import BackgroundDecoration from "../BackgroundDecoration/BackgroundDecoration";
import BackgroundLeaves from "../BackgroundLeaves/BackgroundLeaves";

const BackgroundLayout = ({ children }) => {
  const location = useLocation();
  const isMainPage = location.pathname === "/main";
  const isRecipePage = location.pathname.startsWith("/recipes/");

  return (
    <>
      {!(isMainPage || isRecipePage) && (
        <BackgroundDecoration></BackgroundDecoration>
      )}
      {children}
      <BackgroundLeaves></BackgroundLeaves>
    </>
  );
};

export default BackgroundLayout;

BackgroundLayout.propTypes = {
  children: PropTypes.node,
};
