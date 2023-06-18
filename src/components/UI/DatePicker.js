import { useRef } from "react";
import { ReactComponent as IconArrowLeft } from "../../icons/iconsUI/arrowLeft.svg";
import { ReactComponent as IconArrowRight } from "../../icons/iconsUI/arrowRight.svg";
import { ReactComponent as IconCalendar } from "../../icons/iconsUI/calendar.svg";
import { dateIntervalOptions } from "./dataIntervalOptions";
import classes from "./DatePicker.module.css";
import Button from "./Button";
import Modal from "./Modal";
import DatePickerForm from "./DatePickerForm";

let daysCount = 2;

const DatePicker = ({
  setCallsDataHandler,
  isDatePickerVisible,
  datePickerVisibleHandler,
  dateInterval,
  onChangeDateInterval,
}) => {
  const enteredDateEnd = useRef();
  const enteredDateStart = useRef();

  const onChangeDaysCount = (term) => {
    let daysString = "дня";
    if (daysCount + term >= 0) {
      daysCount += term;
      const daysArr = ["5", "6", "7", "8", "9", "0"];
      const daysArr2 = ["11", "12", "13", "14"];
      const lastNumber = String(daysCount + 1).slice(-1);

      if (lastNumber === "1") daysString = "день";
      if (
        daysArr.includes(lastNumber) ||
        daysArr2.includes(String(daysCount + 1))
      )
        daysString = "дней";

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
    setCallsDataHandler([]);
    enteredDateEnd.current.value = "";
    enteredDateStart.current.value = "";
    daysCount = 2;
  };

  return (
    <>
      {isDatePickerVisible && <Modal onClick={datePickerVisibleHandler} />}
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Button
            onClick={() => {
              onChangeDaysCount(-1);
              setCallsDataHandler("");
            }}
          >
            <IconArrowLeft className={classes.arrow} />
          </Button>
          <Button onClick={datePickerVisibleHandler}>
            <div className={classes.calendarContainer}>
              <IconCalendar className={classes.calendarButton} />
              <p className={classes.calendarText}> {dateInterval.dateView} </p>
            </div>
          </Button>
          <Button
            onClick={() => {
              onChangeDaysCount(+1);
              setCallsDataHandler("");
            }}
          >
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
                setCallsDataHandler("");
                onChangeDateInterval({
                  ...intervalOption,
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
            <DatePickerForm
              onFormSubmitHandler={onFormSubmitHandler}
              enteredDateStart={enteredDateStart}
              enteredDateEnd={enteredDateEnd}
            ></DatePickerForm>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DatePicker;
