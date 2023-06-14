import classes from "./RowHeadings.module.css";

const RowHeadings = () => {
  return (
    <ul className={classes.container}>
      <li>
        <input className={classes.checkbox} type="checkbox"></input>
      </li>
      <li className={classes.callTypeIcon}>Тип</li>
      <li className={classes.callTime}>Время</li>

      <li>Сотрудник</li>
      <p />
      <p />
      <li>Звонок</li>
      <li>Источник</li>
      <li>Оценка</li>
      <li>Длительность</li>
    </ul>
  );
};

export default RowHeadings;
