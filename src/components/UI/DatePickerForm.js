import classes from "./DatePickerForm.module.css";
import { ReactComponent as IconCalendar } from "../../icons/iconsUI/calendar.svg";
import Button from "./Button";

const DatePickerForm = ({
  onFormSubmitHandler,
  enteredDateStart,
  enteredDateEnd,
}) => {
  return (
    <form className={classes.formContainer} onSubmit={onFormSubmitHandler}>
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
        <IconCalendar className={classes.calendarIconSubmitt}></IconCalendar>
      </Button>
    </form>
  );
};

export default DatePickerForm;
