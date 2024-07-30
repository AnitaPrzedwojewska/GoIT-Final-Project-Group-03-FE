// import css from "./MyRecipesItem.module.css";
import PropTypes from "prop-types";

const MyRecipesItem = ({ children }) => {
  return (
    <>
      <div>MyRecipesItem</div>
      <div>{children}</div>
    </>
  );
};

MyRecipesItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyRecipesItem;
