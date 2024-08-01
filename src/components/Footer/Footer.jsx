// import css from "./Footer.module.css";
import PropTypes from "prop-types";

import Nav from '../Nav/Nav';
import FollowUs from '../FollowUs/FollowUs'
import SubscribeForm from '../SubscribeForm/SubscribeForm'

const Footer = ({ children }) => {
  return (
    <>
      <div>Footer</div>
      <Nav></Nav>
      <FollowUs></FollowUs>
      <SubscribeForm></SubscribeForm>
      <div>{children}</div>
    </>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
