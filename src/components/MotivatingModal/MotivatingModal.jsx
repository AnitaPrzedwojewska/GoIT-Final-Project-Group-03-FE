// import css from "./MotivatingModal.module.css";
import PropTypes from "prop-types";

const MotivatingModal = ({ children }) => {
  return (
    <>
      <div>MotivatingModal</div>
      <div>{children}</div>
    </>
  );
};

MotivatingModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MotivatingModal;
