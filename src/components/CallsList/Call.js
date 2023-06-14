import { useEffect } from "react";
import { ReactComponent as IconIncomingCall } from "../../icons/iconsUI/incomingCall.svg";
import { ReactComponent as IconOutcomingCall } from "../../icons/iconsUI/outcomingCall.svg";
import { ReactComponent as IconWeb } from "../../icons/iconsUI/web.svg";
import { ReactComponent as IconPhone } from "../../icons/iconsUI/phone.svg";

import CallRecognize from "./CallRecognize";
import Button from "../UI/Button";
import classes from "./Call.module.css";

const Call = (props) => {
  // useEffect(() => {
  //   fetch(
  //     `https://api.skilla.ru/mango/getRecord?record=MToxMDA2NzYxNToxNDMwMDM3NzExNzow`,
  //     {
  //       method: "POST",
  //       headers: {
  //         Authorization: "Bearer testtoken",
  //       },
  //     }
  //   )
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error.message));
  // }, []);

  const formatedPhoneNumber = `+${props.number[0]} (${props.number.slice(
    1,
    4
  )}) ${props.number.slice(4, 7)}-${props.number.slice(
    7,
    9
  )}-${props.number.slice(9)}  `;

  return (
    <li className={classes.container}>
      {/* {console.log(props.call)} */}
      <input className={classes.checkbox} type="checkbox"></input>
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
      <CallRecognize />
      <audio controls>Audio</audio>
    </li>
  );
};

export default Call;
