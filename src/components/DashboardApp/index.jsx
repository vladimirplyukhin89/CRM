import DashboardAppHeader from "../DashboardAppHeader";
import DashboardCards from "../DashboardCards";
import DashboardChart from "../DashboardChart";
import s from "./DashboardApp.module.scss";

const DashboardApp = () => {
  return (
    <>
      <section className={s.dashboard}>
        <DashboardAppHeader />

        <div className={s.dashboard__title}>
          <p className={s.dashboard__title_text}>Главный экран</p>
        </div>

        <DashboardCards />

        <div className={s.dashboard__chart}>
          <DashboardChart />
        </div>
      </section>
    </>
  );
};

export default DashboardApp;
