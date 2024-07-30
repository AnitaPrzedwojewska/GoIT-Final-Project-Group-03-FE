// import css from "./Header.module.css";
import PropTypes from "prop-types";

const Header = ({ children }) => {
  return (
    <>
      <div>Header</div>
      <div>{children}</div>
    </>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
