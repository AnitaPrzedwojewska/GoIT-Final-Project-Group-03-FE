// import css from "./Paginator.module.css";
import PropTypes from "prop-types";

const Paginator = ({ children }) => {
  return (
    <>
      <div>Paginator</div>
      <div>{children}</div>
    </>
  );
};

Paginator.propTypes = {
  children: PropTypes.node,
};

export default Paginator;
