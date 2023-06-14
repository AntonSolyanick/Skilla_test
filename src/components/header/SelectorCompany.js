import classes from "./SelectorCompany.module.css";
import { ReactComponent as IconArrowDropDown } from "../../icons/iconsUI/arrowDropdown.svg";

const SelectorCompany = () => {
  return (
    <div className={classes.selectorCompany}>
      <div className={classes.selectorCompanyHeader}>
        <span>ИП Сидорова Александра Михайловна</span>
        <button className={classes.dropDownButton}>
          <IconArrowDropDown />
        </button>
      </div>
    </div>
  );
};

export default SelectorCompany;
