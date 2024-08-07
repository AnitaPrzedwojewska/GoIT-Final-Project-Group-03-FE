import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux';

import { getModalStatuses } from '../../redux/app/app.selectors';

import ModalUser from '../ModalUser/ModalUser';
import ModalUserInfo from '../ModalUserInfo/ModalUserInfo';
import ModalUserLogout from "../ModalUserLogout/ModalUserLogout";

const Overlays = () => {

  const mountElement = document.getElementById("overlays");

  const modalStatuses = useSelector(getModalStatuses);
  return createPortal(
    <>
      {modalStatuses.modalUser && <ModalUser />}
      {modalStatuses.modalUserInfo && <ModalUserInfo />}
      {modalStatuses.modalUserLogout && <ModalUserLogout />}
    </>,
    mountElement
  );
}

export default Overlays