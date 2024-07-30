// import css from "./Main.module.css";
import PropTypes from "prop-types";

const Main = ({ children }) => {
  return (
    <>
      <div>Main</div>
      <div>{children}</div>
    </>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
