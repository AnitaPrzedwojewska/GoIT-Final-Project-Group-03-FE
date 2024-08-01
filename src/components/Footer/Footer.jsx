import css from "./Footer.module.css";

import Nav from '../Nav/Nav';
import FollowUs from '../FollowUs/FollowUs'
import SubscribeForm from '../SubscribeForm/SubscribeForm'

const Footer = () => {
  return (
    <>
      <div>Footer</div>
      <Nav></Nav>
      <div className={css.followUs}>
        <FollowUs />
      </div>
      <SubscribeForm></SubscribeForm>
    </>
  );
};

export default Footer;
