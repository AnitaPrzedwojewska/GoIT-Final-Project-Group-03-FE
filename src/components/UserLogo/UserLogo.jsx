import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import useAuth from "../../hooks/useAuth";
import { setModalUser } from "../../redux/app/app.slices";

import css from "./UserLogo.module.css";

import NameIcon from "../IconsSVG/NameIcon";

const UserLogo = () => {
  const user = useAuth();
  const dispatch = useDispatch();

  const openModalUser = () => {
    dispatch(setModalUser(true));
  };

  return (
    <>
      <NavLink
        onClick={openModalUser}
        className={css.userImage}
        style={{
          backgroundImage: user.avatar ? `url(${user.avatar})` : "none",
        }}>
        {!user.avatar && (
          <NameIcon width={"20px"} height={"20px"} className={css.svgIcon} />
        )}
      </NavLink>
      <div className={css.userName}>{user.name}</div>
    </>
  );
};

export default UserLogo;
