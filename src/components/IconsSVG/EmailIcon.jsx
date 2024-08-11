import PropTypes from "prop-types";

const EmailIcon = ({ strokeColor = "#FAFAFA", ...props }) => {
  return (
    <svg fill="none" viewBox="0 0 22 18" {...props}>
      <path
        d="M3 1H19C19.5299 1.00158 20.0377 1.2128 20.4125 1.58753C20.7872 1.96227 20.9984 2.47005 21 3V15C20.9984 15.5299 20.7872 16.0377 20.4125 16.4125C20.0377 16.7872 19.5299 16.9984 19 17H3C2.47005 16.9984 1.96227 16.7872 1.58753 16.4125C1.2128 16.0377 1.00158 15.5299 1 15V3C1.00158 2.47005 1.2128 1.96227 1.58753 1.58753C1.96227 1.2128 2.47005 1.00158 3 1V1Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 3L11 10L1 3"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
EmailIcon.propTypes = {
  strokeColor: PropTypes.string,
};
export default EmailIcon;
