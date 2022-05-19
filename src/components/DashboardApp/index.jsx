import s from "./DashboardApp.module.scss";

// для карточки
//import { MdNotifications } from "react-icons/md";
//import { MdOutlineTaskAlt } from "react-icons/md";
// для хэдера
import { MdOutlineAcUnit } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdLogout } from "react-icons/md";

const DashboardApp = () => {
  return (
    <div className={s.dashboard}>
      <div className={s.header}>
        <div className={s.header__account}>
          <div className={s.image}>
            <MdOutlineAcUnit />
            <span>0</span>
          </div>
          <div className={s.image}>
            <MdAccountBalanceWallet />
            <span>0</span>
          </div>
        </div>
        <div className={s.header__logistics}></div>
      </div>
    </div>
  );
};

export default DashboardApp;
