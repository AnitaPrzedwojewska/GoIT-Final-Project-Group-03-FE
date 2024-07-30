// import css from "./Footer.module.css";
import PropTypes from "prop-types";

const Footer = ({ children }) => {
  return (
    <>
      <div>Footer</div>
      <div>{children}</div>
    </>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
