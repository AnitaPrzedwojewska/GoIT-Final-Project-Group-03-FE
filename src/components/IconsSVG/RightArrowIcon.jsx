import PropTypes from "prop-types";

const RightArrowIcon = ({ strokeColor = "#FAFAFA", ...props }) => {
  return (
    <svg width="1em" height="1em" fill="none" viewBox="0 0 20 21" {...props}>
      <path
        d="M2.75 9.5H12.75"
        stroke={strokeColor}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 4.25L14.25 9.5L9 14.75"
        stroke={strokeColor}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

RightArrowIcon.propTypes = {
  strokeColor: PropTypes.string,
};
export default RightArrowIcon;
