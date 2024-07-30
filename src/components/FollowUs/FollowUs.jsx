// import css from "./FollowUs.module.css";
import PropTypes from "prop-types";

const FollowUs = ({ children }) => {
  return (
    <>
      <div>FollowUs</div>
      <div>{children}</div>
    </>
  );
};

FollowUs.propTypes = {
  children: PropTypes.node,
};

export default FollowUs;
