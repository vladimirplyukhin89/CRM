import s from "./DashboardAppHeaderRight.module.scss";
import avatar from "../../assets/img/avatar.jpg";

import { MdLogout } from "react-icons/md";

const DashboardAppHeaderRight = () => {
  return (
    <div className={s.header__logistics}>
      <div className={s.header__logistics_text}>
        <p>Рады видеть вас, Студсервис</p>
        <p>Последний визит 19 мая в 17:30</p>
      </div>

      <div className={s.header__logistics_avatar}>
        <img src={avatar} alt="avatar" />
      </div>

      <div className={s.header__logistics_logout}>
        <MdLogout className={s.header__logistics_logout_img} />
      </div>
    </div>
  );
};

export default DashboardAppHeaderRight;
