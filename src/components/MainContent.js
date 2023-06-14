import Header from "./header/Header";
import classes from "./MainContent.module.css";
import AccountBalance from "./UI/AccountBalance";
import DatePicker from "./UI/DatePicker";
import CallsList from "./CallsList/CallsList";

const MainContent = ({ dateInterval, onChangeDateInterval, callsData }) => {
  return (
    <section className={classes.mainContent}>
      <Header />
      <div className={classes.balanceAndCalendar}>
        <AccountBalance />
        <DatePicker
          dateInterval={dateInterval}
          onChangeDateInterval={onChangeDateInterval}
        />
      </div>
      <CallsList callsData={callsData}></CallsList>
    </section>
  );
};

export default MainContent;
