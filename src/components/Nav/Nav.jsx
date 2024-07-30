// import css from "./Nav.module.css";
import PropTypes from "prop-types";

const Nav = ({ children }) => {
  return (
    <>
      <div>Nav</div>
      <div>{children}</div>
    </>
  );
};

Nav.propTypes = {
  children: PropTypes.node,
};

export default Nav;
