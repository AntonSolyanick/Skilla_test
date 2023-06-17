import classes from "./CallsList.module.css";
import Call from "./Call";
import CallsFiltersList from "./CallsFiltersList";
import RowHeadings from "./RowHeadings";

const CallsList = (props) => {
  return (
    <>
      <CallsFiltersList
        setCurrentFilterValueHandler={props.setCurrentFilterValueHandler}
        setCallsDataHandler={props.setCallsDataHandler}
      ></CallsFiltersList>

      <ul className={classes.callsList}>
        <RowHeadings></RowHeadings>

        {props.callsData &&
          props.callsData.map((call) => (
            <Call
              key={call.id}
              isIncoming={call.in_out}
              time={call.date.slice(10, 16)}
              photo={call.person_avatar}
              isFromSite={call.from_site}
              number={call.partner_data.phone}
              source={call.source}
              record={call.record}
              duration={call.time}
            ></Call>
          ))}
      </ul>
      {!props.callsData && (
        <p className={classes.errorMessage}>
          Диапазон дат введен не корректно, введите диапазон дат в формате:
          гггг-мм-дд
        </p>
      )}
    </>
  );
};

export default CallsList;
