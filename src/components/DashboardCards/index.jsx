import CardStatistics from "../CardStatistics";

import s from "./DashboardCards.module.scss";

import { MdNotifications } from "react-icons/md";
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";

const DashboardCards = () => {
  return (
    <div className={s.dashboard__cards}>
      <div className={s.dashboard__cards_wrapper1}>
        <span>Заявки</span>
        <MdNotifications className={s.dashboard__cards_img} />

        <CardStatistics />
      </div>

      <div className={s.dashboard__cards_wrapper2}>
        <span>Заказы</span>
        <MdOutlineTaskAlt className={s.dashboard__cards_img} />

        <CardStatistics />
      </div>

      <div className={s.dashboard__cards_wrapper3}>
        <span>Доходы</span>
        <MdAccountBalanceWallet className={s.dashboard__cards_img} />

        <CardStatistics />
      </div>
    </div>
  );
};

export default DashboardCards;
