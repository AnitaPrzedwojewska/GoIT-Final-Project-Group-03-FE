// import css from "./Loader.module.css";
import PropTypes from "prop-types";

const Loader = ({ children }) => {
  return (
    <>
      <div>Loader</div>
      <div>{children}</div>
    </>
  );
};

Loader.propTypes = {
  children: PropTypes.node,
};

export default Loader;
