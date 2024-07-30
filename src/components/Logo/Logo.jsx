// import css from "./Logo.module.css";
import PropTypes from "prop-types";

const Logo = ({ children }) => {
  return (
    <>
      <div>Logo</div>
      <div>{children}</div>
    </>
  );
};

Logo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Logo;
