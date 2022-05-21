import DashboardAppHeaderLeft from "../DashboardAppHeaderLeft";
import DashboardAppHeaderRight from "../DashboardAppHeaderRight";
import s from "./DashboardAppHeader.module.scss";

const DashboardAppHeader = () => {
  return (
    <>
      <header className={s.header}>
        <DashboardAppHeaderLeft />
        <DashboardAppHeaderRight />
      </header>

      <div className={s.container}></div>
    </>
  );
};

export default DashboardAppHeader;
