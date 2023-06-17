import { useState } from "react";

import classes from "./CallsFilter.module.css";
import { ReactComponent as IconArrowDropDown } from "../../icons/iconsUI/arrowDropdown.svg";
import { ReactComponent as IconArrowUp } from "../../icons/iconsUI/closeDropdown.svg";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const CallsFilter = (props) => {
  const [isVisibleOption, setIsVisibleOption] = useState(false);
  const [currentValue, setCurrentValue] = useState(props.currentValue);

  const onChangeFilterhandler = (value) => {
    setCurrentValue(value);
    setIsVisibleOption((prevState) => !prevState);
  };

  return (
    <>
      {isVisibleOption && <Modal onClick={() => setIsVisibleOption(false)} />}
      <div className={classes.select}>
        <div
          className={`${classes.currentValue} ${
            isVisibleOption && classes.currentValueFocus
          }`}
          onClick={() => setIsVisibleOption((prevState) => !prevState)}
        >
          {currentValue}
          <Button>
            {!isVisibleOption && (
              <IconArrowDropDown className={classes.dropdownButton} />
            )}
            {isVisibleOption && (
              <IconArrowUp className={classes.dropdownButton} />
            )}
          </Button>
        </div>
        <ul
          className={`${classes.filterOtions} ${
            isVisibleOption && classes.showFilterOption
          }`}
        >
          {props.values.map((value) => (
            <li
              key={value}
              className={classes.filterValue}
              onClick={() => {
                onChangeFilterhandler(value);
                props.setCallsDataHandler([]);
                if (value === "Входящие")
                  props.setCurrentFilterValueHandler("1");
                if (value === "Исходящие")
                  props.setCurrentFilterValueHandler("0");
                if (value === "Все типы")
                  props.setCurrentFilterValueHandler("");
              }}
            >
              <Button>{value}</Button>
              {currentValue === value && (
                <div className={`${classes.circle} `}></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CallsFilter;
