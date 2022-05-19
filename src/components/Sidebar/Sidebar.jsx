import SidebarLinks from "../SidebarLinks/SidebarLinks";
import s from "./Sidebar.module.scss";

import logo from "../../assets/img/Wrike.svg";

// для карточки
//import { MdNotifications } from "react-icons/md";
//import { MdOutlineTaskAlt } from "react-icons/md";
// для хэдера
//import { MdOutlineAcUnit } from "react-icons/md";
//import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.header}>
        <a href="#" className={s.logo}>
          <img src={logo} alt="logo" />
        </a>
        <span>Партнёрская программа</span>
      </div>

      <div className={s.brand}>
        <SidebarLinks />
      </div>
    </div>
  );
};

export default Sidebar;
