// import css from "./Main.module.css";
import PropTypes from "prop-types";

import СhooseYourBreakfast from '../СhooseYourBreakfast/СhooseYourBreakfast'
import Search from '../Search/Search'
import PreviewCategories from '../PreviewCategories/PreviewCategories'

const Main = ({ children }) => {
  return (
    <>
      <div>Main</div>
      <СhooseYourBreakfast></СhooseYourBreakfast>
      <Search></Search>
      <PreviewCategories></PreviewCategories>
      <div>{children}</div>
    </>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
