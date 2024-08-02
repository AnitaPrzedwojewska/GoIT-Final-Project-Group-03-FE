import css from "./Footer.module.css";

import Nav from '../Nav/Nav';
import FollowUs from '../FollowUs/FollowUs'
import SubscribeForm from '../SubscribeForm/SubscribeForm'

const Footer = () => {
  return (
    <>
      <div className={css.footer}>
        <div className={css.container}>
          <div className={css.footerBox}>
            <div>
              <Nav />
              <SubscribeForm />
            </div>
            <div className={css.followUs}>
              <FollowUs />
            </div>
          </div>
        </div>
      </div>
      <div className={css.copyright}>
        <div className={css.container}>
          <div className={css.copyrightBox}>
            <div>© 2023 All Rights Reserved.</div>
            <div>Terms of Service</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
