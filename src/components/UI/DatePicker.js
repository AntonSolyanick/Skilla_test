import { useRef } from "react";
import { ReactComponent as IconArrowLeft } from "../../icons/iconsUI/arrowLeft.svg";
import { ReactComponent as IconArrowRight } from "../../icons/iconsUI/arrowRight.svg";
import { ReactComponent as IconCalendar } from "../../icons/iconsUI/calendar.svg";
import { dateIntervalOptions } from "./dataIntervalOptions";
import classes from "./DatePicker.module.css";
import Button from "./Button";
import Modal from "./Modal";

let daysCount = 2;

const DatePicker = ({
  isDatePickerVisible,
  datePickerVisibleHandler,
  dateInterval,
  onChangeDateInterval,
}) => {
  const enteredDateEnd = useRef();
  const enteredDateStart = useRef();

  const onChangeDaysCount = (term) => {
    let daysString = "дня";
    if (daysCount + term >= 0 && daysCount + term < 6) {
      daysCount += term;
      daysCount + 1 < 2 && (daysString = "день");
      daysCount + 1 > 4 && (daysString = "дней");
      onChangeDateInterval({
        dateEnd: new Date().toISOString().split("T")[0],
        dateStart: new Date(
          new Date().setDate(new Date().getDate() - daysCount)
        )
          .toISOString()
          .split("T")[0],
        dateView: `${daysCount + 1} ${daysString}`,
      });
    }
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    onChangeDateInterval({
      dateEnd: enteredDateEnd.current.value,
      dateStart: enteredDateStart.current.value,
      dateView: "период",
    });
    datePickerVisibleHandler();
    console.log(enteredDateEnd.current.value);
    daysCount = 2;
  };

  return (
    <>
      {isDatePickerVisible && <Modal onClick={datePickerVisibleHandler} />}
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Button onClick={() => onChangeDaysCount(-1)}>
            <IconArrowLeft className={classes.arrow} />
          </Button>
          <Button onClick={datePickerVisibleHandler}>
            <div className={classes.calendarContainer}>
              <IconCalendar className={classes.calendarButton} />
              <p className={classes.calendarText}> {dateInterval.dateView} </p>
            </div>
          </Button>
          <Button onClick={() => onChangeDaysCount(+1)}>
            <IconArrowRight className={classes.arrow} />
          </Button>
        </div>

        <ul
          className={`${classes.dateOptions} ${
            isDatePickerVisible && classes.showDateOption
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
                daysCount = 2;
                datePickerVisibleHandler();
              }}
            >
              {intervalOption.dateView}
            </li>
          ))}

          <li className={classes.liFormContainer}>
            <p className={classes.formText}>Указать даты</p>
            <form
              className={classes.formContainer}
              onSubmit={onFormSubmitHandler}
            >
              <input
                className={classes.dateInput}
                type="text"
                placeholder="__.__.__"
                ref={enteredDateStart}
              ></input>
              <span>-</span>
              <input
                className={classes.dateInput}
                type="text"
                placeholder="__.__.__"
                ref={enteredDateEnd}
              ></input>
              <Button>
                <IconCalendar
                  className={classes.calendarIconSubmitt}
                ></IconCalendar>
              </Button>
            </form>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DatePicker;
