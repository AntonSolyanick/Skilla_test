import classes from "./RowHeadings.module.css";

const RowHeadings = () => {
  return (
    <>
      <ul className={classes.container}>
        <li></li>
        <li className={classes.callTypeIcon}>Тип</li>
        <li className={classes.callTime}>Время</li>

        <li>Сотрудник</li>
        <p />
        <p />
        <li>Звонок</li>
        <li>Источник</li>
        <li>Оценка</li>
        <li className={classes.headingDuration}>Длительность</li>
      </ul>
      <div className={classes.underline}></div>
    </>
  );
};

export default RowHeadings;
