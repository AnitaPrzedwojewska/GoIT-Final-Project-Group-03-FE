import css from "./MainTitle.module.css";
import PropTypes from "prop-types";

const MainTitle = ({ children }) => {
  return (
    <div className={css.box}>
      <h1>{children}</h1>
    </div>
  );
};

MainTitle.propTypes = {
  children: PropTypes.node,
};

export default MainTitle;
