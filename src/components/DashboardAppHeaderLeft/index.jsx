import s from "./DashboardAppHeaderLeft.module.scss";

import { MdOutlineAcUnit } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";

const DashboardAppHeaderLeft = () => {
  return (
    <>
      <div className={s.header__account}>
        <MdAccountBalanceWallet className={s.header__account_image} />

        <div className={s.header__account_info}>
          <span className={s.header__account_words}>На счёте</span>
          <span className={s.header__account_number}>0</span>
        </div>
      </div>

      <div className={s.header__account}>
        <MdOutlineAcUnit className={s.header__account_image} />

        <div className={s.header__account_info}>
          <span className={s.header__account_words}>Заморожено</span>
          <span className={s.header__account_number}>0</span>
        </div>
      </div>
    </>
  );
};

export default DashboardAppHeaderLeft;
