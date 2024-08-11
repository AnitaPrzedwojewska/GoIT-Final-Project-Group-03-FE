// npm packages
import { NavLink } from "react-router-dom";

// constants
import routes from "../../constants/routes";

// components
import RightArrowIcon from "../../components/IconsSVG/RightArrowIcon";

// styles
import css from "./СhooseYourBreakfast.module.css";

const СhooseYourBreakfast = () => {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <span className={css.greenText}>Delicious and healthy</span> way to
        enjoy a variety of fresh ingredients in one satisfying meal
      </div>
      <NavLink className={css.link} to={`/${routes.CATEGORIES}/Breakfast`}>
        See recipes
        <RightArrowIcon
          strokeColor="black"
          width="18px"
          height="14px"
        ></RightArrowIcon>
      </NavLink>
    </div>
  );
};

export default СhooseYourBreakfast;
