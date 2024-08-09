import { NavLink } from "react-router-dom";
import css from "./СhooseYourBreakfast.module.css";
import RightArrowIcon from "../../components/IconsSVG/RightArrowIcon";

const СhooseYourBreakfast = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <span className={css.greenText}>Delicious and healthy</span> way to
          enjoy a variety of fresh ingredients in one satisfying meal
        </div>
        <NavLink className={css.link} to="/categories/Breakfast">
          See recipes
          <RightArrowIcon
            strokeColor="black"
            width="18px"
            height="14px"
          ></RightArrowIcon>
        </NavLink>
      </div>
    </>
  );
};

export default СhooseYourBreakfast;
