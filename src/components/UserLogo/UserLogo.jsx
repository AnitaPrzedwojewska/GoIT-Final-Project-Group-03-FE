import useAuth from "../../hooks/useAuth";

import css from "./UserLogo.module.css";
import NameIcon from "../IconsSVG/NameIcon";

const UserLogo = () => {
  const { user } = useAuth();

  return (
    <>
      <div
        className={css.userImage}
        style={{
          backgroundImage: user.image ? `url(${user.image})` : "none",
        }}>
        {!user.image && (
          <NameIcon width={"20px"} height={"20px"} className={css.svgIcon} />
        )}
      </div>
      <div className={css.userName}>{user.name}</div>{" "}
    </>
  );
};

export default UserLogo;
