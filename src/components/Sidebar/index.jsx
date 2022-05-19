import SidebarLinks from "../SidebarLinks";
import SidebarHeader from "../SidebarHeader";

import s from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <SidebarHeader />
      <div className={s.brand}>
        <SidebarLinks />
      </div>
    </div>
  );
};

export default Sidebar;
