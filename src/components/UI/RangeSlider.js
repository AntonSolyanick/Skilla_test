import classes from "./RangeSlider.module.css";

const RangeSlider = () => {
  return (
    <div className={classes.container}>
      <div className={classes.progressBarCover}></div>
      <div className={classes.thumb}></div>
      <input className={classes.inputRange} type="range" step="0.01"></input>
    </div>
  );
};

export default RangeSlider;
