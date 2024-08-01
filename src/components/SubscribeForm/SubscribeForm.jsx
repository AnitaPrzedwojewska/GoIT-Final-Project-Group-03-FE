// import css from "./SubscribeForm.module.css";
import PropTypes from "prop-types";

const SubscribeForm = ({ children }) => {
  return (
    <>
      <div>SubscribeForm</div>
      <div>{children}</div>
    </>
  );
};

SubscribeForm.propTypes = {
  children: PropTypes.node,
};

export default SubscribeForm;
