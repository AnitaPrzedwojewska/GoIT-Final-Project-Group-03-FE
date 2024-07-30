// import css from "./СhooseYourBreakfast.module.css";
import PropTypes from "prop-types";

const СhooseYourBreakfast = ({ children }) => {
  return (
    <>
      <div>СhooseYourBreakfast</div>
      <div>{children}</div>
    </>
  );
};

СhooseYourBreakfast.propTypes = {
  children: PropTypes.node.isRequired,
};

export default СhooseYourBreakfast;
