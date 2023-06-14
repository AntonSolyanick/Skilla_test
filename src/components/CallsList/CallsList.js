import { useEffect, useState } from "react";

import classes from "./CallsList.module.css";
import Call from "./Call";
import CallsFiltersList from "./CallsFiltersList";
import RowHeadings from "./RowHeadings";

const CallsList = (props) => {
  return (
    <>
      <CallsFiltersList></CallsFiltersList>

      <ul className={classes.callsList}>
        <RowHeadings></RowHeadings>
        {props.callsData.map((call) => (
          <Call
            call={call}
            key={call.id}
            isIncoming={call.in_out}
            time={call.date.slice(10, 16)}
            photo={call.person_avatar}
            isFromSite={call.from_site}
            number={call.partner_data.phone}
            source={call.source}
          ></Call>
        ))}
      </ul>
    </>
  );
};

export default CallsList;
