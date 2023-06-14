import { useState } from "react";

import classes from "./CallsFilter.module.css";
import { ReactComponent as IconArrowDropDown } from "../../icons/iconsUI/arrowDropdown.svg";
import Button from "../UI/Button";

const CallsFilter = (props) => {
  const [currentValue, setCurrentValue] = useState(props.currentValue);
  const [isVisibleOption, setIsVisibleOption] = useState("false");

  const onChangeFilterhandler = (value) => {
    setCurrentValue(value);
    setIsVisibleOption((prevState) => !prevState);
  };

  return (
    <div className={classes.select}>
      <div className={classes.currentValue}>
        {currentValue}
        <Button>
          <IconArrowDropDown
            className={classes.dropdownButton}
            onClick={() => setIsVisibleOption((prevState) => !prevState)}
          />
        </Button>
      </div>
      <ul
        className={`${classes.filterOtions} ${
          !isVisibleOption && classes.showFilterOption
        }`}
      >
        {props.values.map((value) => (
          <li
            key={value}
            className={classes.filterValue}
            onClick={() => onChangeFilterhandler(value)}
          >
            <Button>{value}</Button>
            {currentValue === value && (
              <div className={`${classes.circle} `}></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CallsFilter;
