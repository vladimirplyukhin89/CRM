import s from "./SidebarLinks.module.scss";

import { MdAccountBalanceWallet } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { MdAssessment } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { MdOutlineCampaign } from "react-icons/md";
import { MdOutlineFeed } from "react-icons/md";

const SidebarLinks = () => {
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
      subtitle1: "Общая статистика",
      subtitle2: "Статистика заказов",
      id: 3,
    },
    {
      title: "Промоматериалы",
      icon: MdStars,
      count: 7,
      id: 4,
    },
    {
      title: "Новости и блог",
      icon: MdOutlineFeed,
      count: 11,
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
    <ul className={s.links}>
      {links.map((link, id) => {
        return (
          <li key={id}>
            <a href="#">
              {<link.icon className={s.icon} />}

              <div className={s.subtitles}>
                <span className={s.title}>{link.title}</span>

                {link.subtitle1 && (
                  <span className={s.subtitle1}>{link.subtitle1}</span>
                )}

                {link.subtitle2 && (
                  <span className={s.subtitle2}>{link.subtitle2}</span>
                )}
              </div>

              {link.count && (
                <span className={s.links_container}>{link.count}</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarLinks;
