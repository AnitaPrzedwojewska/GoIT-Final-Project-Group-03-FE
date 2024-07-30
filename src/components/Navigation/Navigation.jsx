// import css from "./Navigation.module.css";
import PropTypes from "prop-types";

const Navigation = ({ children }) => {
  return (
    <>
      <div>Navigation</div>
      <div>{children}</div>
    </>
  );
};

Navigation.propTypes = {
  children: PropTypes.node,
};

export default Navigation;
