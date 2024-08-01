import {NavLink} from 'react-router-dom'
// import css from "./СhooseYourBreakfast.module.css";
import PropTypes from "prop-types";

const СhooseYourBreakfast = ({ children }) => {
  return (
    <>
      <div>СhooseYourBreakfast</div>
      <div>{children}</div>
      <NavLink to='/categories/:categoryName'>See recipes</NavLink>
    </>
  );
};

СhooseYourBreakfast.propTypes = {
  children: PropTypes.node,
};

export default СhooseYourBreakfast;
