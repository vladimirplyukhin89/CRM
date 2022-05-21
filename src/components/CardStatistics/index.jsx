import s from "./CardStatistics.module.scss";

const CardStatistics = () => {
  return (
    <div className={s.cards__statistics}>
      <div className={s.cards__statistics_info}>
        <p>Сегодня</p>
        <span>0</span>
      </div>

      <div className={s.cards__statistics_info}>
        <p>Вчера</p>
        <span>0</span>
      </div>

      <div className={s.cards__statistics_info}>
        <p>За месяц</p>
        <span>0</span>
      </div>
    </div>
  );
};

export default CardStatistics;
