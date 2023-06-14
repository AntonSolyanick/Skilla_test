import classes from "./CallAnalytics.module.css";

const CallAnalytics = () => {
  return (
    <ul className={classes.container}>
      <li>
        <p className={classes.callAnalyticsText}>
          Новые звонки
          <span className={classes.callsQuantity}> 20 из 30 шт</span>
        </p>
        <div className={classes.analytProgressBar}>
          <span className={classes.newCallsBar}></span>
        </div>
      </li>
      <li>
        <p className={classes.callAnalyticsText}>
          Качество разговоров
          <span className={classes.percentsQualityCalls}> 40%</span>
        </p>
        <div className={`${classes.analytProgressBar} ${classes.quality}`}>
          <span className={classes.callsQualityBar}></span>
        </div>
      </li>
      <li>
        <p className={classes.callAnalyticsText}>
          Конверсия в заказ<span> 67%</span>
        </p>
        <div className={`${classes.analytProgressBar} ${classes.conversion}`}>
          <span className={classes.callsConvertionBar}></span>
        </div>
      </li>
    </ul>
  );
};

export default CallAnalytics;
