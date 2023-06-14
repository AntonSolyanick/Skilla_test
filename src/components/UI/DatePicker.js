import { ReactComponent as IconArrowLeft } from "../../icons/iconsUI/arrowLeft.svg";
import { ReactComponent as IconArrowRight } from "../../icons/iconsUI/arrowRight.svg";
import { ReactComponent as IconCalendar } from "../../icons/iconsUI/calendar.svg";
import classes from "./DatePicker.module.css";
import Button from "./Button";
import { useRef, useState } from "react";

const todayDate = new Date();
let daysCount = 3;

const DatePicker = ({ dateInterval, onChangeDateInterval }) => {
  const [isVisible, setIsVisible] = useState(false);
  const enteredDateEnd = useRef();
  const enteredDateStart = useRef();

  const onChangeDaysCount = (term) => {
    if (daysCount + term > 0 && daysCount + term < 7) {
      daysCount += term;
      onChangeDateInterval({ ...dateInterval });
    }
  };

  // `${enteredDateEnd.current.value}-${enteredDateStart.current.value}`

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log(enteredDateEnd, enteredDateStart);
    onChangeDateInterval({
      dateEnd: enteredDateEnd.current.value,
      dateStart: enteredDateStart.current.value,
      dateView: "За период",
    });
  };

  const dateIntervalOptions = [
    {
      dateEnd: new Date().toISOString().split("T")[0],
      dateStart: new Date(todayDate.setDate(todayDate.getDate() - 3))
        .toISOString()
        .split("T")[0],
      dateView: "3 дня",
    },
    {
      dateEnd: new Date().toISOString().split("T")[0],
      dateStart: new Date(todayDate.setDate(todayDate.getDate() - 7))
        .toISOString()
        .split("T")[0],
      dateView: "неделя",
    },
    {
      dateEnd: new Date().toISOString().split("T")[0],
      dateStart: new Date(todayDate.setDate(todayDate.getDate() - 31))
        .toISOString()
        .split("T")[0],
      dateView: "месяц",
    },
    {
      dateEnd: new Date().toISOString().split("T")[0],
      dateStart: new Date(todayDate.setDate(todayDate.getDate() - 365))
        .toISOString()
        .split("T")[0],
      dateView: "год",
    },
  ];

  const isVisibleHandler = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Button>
          <IconArrowLeft />
        </Button>
        <Button onClick={isVisibleHandler}>
          <IconCalendar className={classes.calendarButton} />
          <p className={classes.calendarText}> {dateInterval.dateView} </p>
        </Button>
        <Button>
          <IconArrowRight className={classes.arrowRight} />
        </Button>
      </div>

      <ul
        className={`${classes.dateOptions} ${
          isVisible && classes.showDateOption
        }`}
      >
        {dateIntervalOptions.map((intervalOption) => (
          <li
            className={classes.dateOptionValue}
            key={intervalOption.dateView}
            onClick={() => {
              onChangeDateInterval({
                dateStart: intervalOption.dateStart,
                dateEnd: intervalOption.dateEnd,
                dateView: intervalOption.dateView,
              });
              isVisibleHandler();
            }}
          >
            {intervalOption.dateView}
          </li>
        ))}
        <li className={classes.dateOptionValue}>
          <form onSubmit={onFormSubmitHandler}>
            <input
              className={classes.dateInput}
              type="text"
              ref={enteredDateStart}
            ></input>
            <input
              className={classes.dateInput}
              type="text"
              ref={enteredDateEnd}
            ></input>
            <button></button>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default DatePicker;
