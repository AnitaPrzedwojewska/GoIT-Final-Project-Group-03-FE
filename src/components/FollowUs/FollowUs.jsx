import css from "./FollowUs.module.css";

import FacebookIcon from "../IconsSVG/FacebookIcon";
import InstagramIcon from "../IconsSVG/InstagramIcon";
import TwitterIcon from "../IconsSVG/TwitterIcon";
import YouTubeIcon from "../IconsSVG/YouTubeIcon";

const FollowUs = (props) => {
  return (
    <ul className={css.iconList} {...props}>
      <li>
        <a
          className={css.link}
          href='https://pl-pl.facebook.com/firstmediasoyummy'>
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a
          className={css.link}
          href='https://www.youtube.com/channel/UCH8NnRkxQg1zX7mHFRPq73g'>
          <YouTubeIcon />
        </a>
      </li>
      <li>
        <a className={css.link} href='https://x.com/OfficialSoYummy'>
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a className={css.link} href='https://www.instagram.com/soyummy/'>
          <InstagramIcon />
        </a>
      </li>
    </ul>
  );
};

export default FollowUs;
