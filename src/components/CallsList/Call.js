import { useEffect, useState } from "react";
import { ReactComponent as IconIncomingCall } from "../../icons/iconsUI/incomingCall.svg";
import { ReactComponent as IconOutcomingCall } from "../../icons/iconsUI/outcomingCall.svg";
import { ReactComponent as IconWeb } from "../../icons/iconsUI/web.svg";
import { ReactComponent as IconPhone } from "../../icons/iconsUI/phone.svg";

import AudioPlayer from "../UI/AudioPlayer";
import Button from "../UI/Button";
import classes from "./Call.module.css";

const Call = (props) => {
  const [recordId, setrecordId] = useState(props.record);

  const durationHours = Math.floor(props.duration / 60 / 60);
  const durationMinutes = Math.floor(props.duration / 60) - durationHours * 60;
  const duraionSeconds = props.duration % 60;
  const formatedDuration = [
    durationMinutes.toString().padStart(2, "0"),
    duraionSeconds.toString().padStart(2, "0"),
  ].join(":");

  const formatedPhoneNumber = `+${props.number[0]} (${props.number.slice(
    1,
    4
  )}) ${props.number.slice(4, 7)}-${props.number.slice(
    7,
    9
  )}-${props.number.slice(9)}  `;

  return (
    <li className={classes.container}>
      <p></p>
      {!!props.isIncoming && (
        <IconIncomingCall className={classes.callTypeIcon} />
      )}
      {!props.isIncoming && <IconOutcomingCall />}
      <time className={classes.callTime}>{props.time}</time>
      <img
        className={classes.callPhoto}
        src={props.photo}
        width="32"
        height="32"
        alt="фото пользователя"
      ></img>
      {props.isFromSite ? <IconWeb /> : <span></span>}
      <Button>
        <IconPhone className={classes.iconPhone} />
      </Button>
      <Button>
        <p className={classes.phoneNumber}>{formatedPhoneNumber}</p>
      </Button>
      <p>{props.source}</p>
      <p className={classes.gradeText}>Скрипт не использован</p>
      {recordId && (
        <AudioPlayer record={recordId} duration={formatedDuration} />
      )}
      {!recordId && formatedDuration != "00:00" && (
        <p className={classes.callDuration}>{formatedDuration}</p>
      )}
      <div className={classes.underline}></div>
    </li>
  );
};

export default Call;
