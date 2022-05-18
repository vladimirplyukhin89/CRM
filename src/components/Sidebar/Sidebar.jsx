import s from "./Sidebar.module.scss";

import { MdAccountBalanceWallet } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { MdAssessment } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { MdOutlineCampaign } from "react-icons/md";
import { MdOutlineFeed } from "react-icons/md";

// для карточки
//import { MdNotifications } from "react-icons/md";
//import { MdOutlineTaskAlt } from "react-icons/md";
// для хэдера
//import { MdOutlineAcUnit } from "react-icons/md";
//import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  const links = [
    {
      title: "Главный экран",
      icon: MdWeb,
      id: 1,
    },
    {
      title: "Финансы",
      icon: MdAccountBalanceWallet,
      subtitle1: "Вывести деньги",
      subtitle2: "История транзакций",
      id: 2,
    },
    {
      title: "Статистика",
      icon: MdAssessment,
      id: 3,
    },
    {
      title: "Промоматериалы",
      icon: MdStars,
      id: 4,
    },
    {
      title: "Новости и блог",
      icon: MdOutlineFeed,
      id: 5,
    },
    {
      title: "Техподдержка",
      icon: MdChat,
      id: 6,
    },
    {
      title: "Рефералы",
      icon: MdOutlineCampaign,
      id: 7,
    },
  ];

  return (
    <div className={s.sidebar}>
      <div className={s.header}>
        <a href="#" className={s.logo}>
          <h2>Logo</h2>
        </a>
        <span>Партнёрская программа</span>
      </div>

      <div className={s.brand}>
        <ul className={s.links}>
          {links.map((link, id) => {
            return (
              <li key={id}>
                <span className={s.links_effect}></span>
                <a href="#">
                  {<link.icon className={s.icon} />}
                  <span className={s.title}>{link.title}</span>
                  <span className={s.subtitle1}>{link.subtitle1 || null}</span>
                  <span className={s.subtitle2}>{link.subtitle2 || null}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
