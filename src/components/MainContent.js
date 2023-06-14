import Header from "./header/Header";
import classes from "./MainContent.module.css";
import AccountBalance from "./UI/AccountBalance";
import DatePicker from "./UI/DatePicker";
import CallsList from "./CallsList/CallsList";

const MainContent = ({
  currentFilterValue,
  setCurrentFilterValueHandler,
  isDatePickerVisible,
  datePickerVisibleHandler,
  dateInterval,
  onChangeDateInterval,
  callsData,
}) => {
  return (
    <section className={classes.mainContent}>
      <Header />
      <div className={classes.balanceAndCalendar}>
        <AccountBalance />
        <DatePicker
          isDatePickerVisible={isDatePickerVisible}
          datePickerVisibleHandler={datePickerVisibleHandler}
          dateInterval={dateInterval}
          onChangeDateInterval={onChangeDateInterval}
        />
      </div>
      <CallsList
        callsData={callsData}
        currentFilterValue={currentFilterValue}
        setCurrentFilterValueHandler={setCurrentFilterValueHandler}
      ></CallsList>
    </section>
  );
};

export default MainContent;
