// import css from "./ThemeToggler.module.css";
import PropTypes from "prop-types";

const ThemeToggler = ({ children }) => {
  return (
    <>
      <div>ThemeToggler</div>
      <div>{children}</div>
    </>
  );
};

ThemeToggler.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeToggler;
