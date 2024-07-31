// import css from "./Header.module.css";
import PropTypes from "prop-types";
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import UserLogo from '../UserLogo/UserLogo'
import ThemeToggler from '../ThemeToggler/ThemeToggler'

const Header = ({ children }) => {
  return (
    <>
      <div>Header</div>
      <Logo></Logo>
      <Navigation></Navigation>
      <UserLogo></UserLogo>
      <ThemeToggler></ThemeToggler>
      <div>{children}</div>
    </>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
