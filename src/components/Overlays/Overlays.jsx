import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux';

import { getModalUser, getModalUserInfo, getModalUserLogout } from '../../redux/app/app.selectors';

import ModalUser from '../ModalUser/ModalUser';
import ModalUserInfo from '../ModalUserInfo/ModalUserInfo';
import ModalUserLogout from "../ModalUserLogout/ModalUserLogout";

const Overlays = () => {

  const mountElement = document.getElementById("overlays");

  const modalUser = useSelector(getModalUser);
  const modalUserInfo = useSelector(getModalUserInfo);
  const modalUserLogout = useSelector(getModalUserLogout);
  return createPortal(
    <>
      {modalUser && <ModalUser />}
      {modalUserInfo && <ModalUserInfo />}
      {modalUserLogout && <ModalUserLogout />}
    </>,
    mountElement
  );
}

export default Overlays