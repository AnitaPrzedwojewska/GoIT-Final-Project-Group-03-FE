import css from "./Footer.module.css";

import FollowUs from "../FollowUs/FollowUs";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

const Footer = () => {
  return (
    <div>
      <div className={css.footer}>
        <div className={css.container}>
          <div className={css.footerBox}>
            <div className={css.sYummyNavSub}>
              <div className={css.sYummyNav}>
                <div className={css.soYummyBlock}>
                  <div className={css.soYummyTitle}>
                    <Logo />
                    So Yummy
                  </div>
                  <ul className={css.soYummyList}>
                    <li>Database of recipes that can be replenished </li>
                    <li>
                      Flexible search for desired and unwanted ingredients
                    </li>
                    <li>Ability to add your own recipes with photos</li>
                    <li>Convenient and easy to use</li>
                  </ul>
                </div>
                <Nav />
              </div>
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
    </div>
  );
};

export default Footer;
