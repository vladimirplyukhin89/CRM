import s from "./SidebarHeader.module.scss";

import logo from "../../assets/img/Wrike.svg";

const SidebarHeader = () => {
  return (
    <div className={s.header}>
      <a href="#" className={s.logo}>
        <img src={logo} alt="logo" />
      </a>
      <span>Партнёрская программа</span>
    </div>
  );
};

export default SidebarHeader;
