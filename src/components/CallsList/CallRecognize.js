import Button from "../UI/Button";
import classes from "./CallRecognize.module.css";

const CallRecognize = () => {
  return (
    <button className={classes.recognizeButton}>
      <p>Распознать</p>
    </button>
  );
};

export default CallRecognize;
