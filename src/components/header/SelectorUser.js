import classes from "./SelectorUser.module.css";
import { ReactComponent as IconArrowDropDown } from "../../icons/iconsUI/arrowDropdown.svg";
import userPhoto from "../../img/usersPhoto/упоровКирилл.jpg";
const selectorUser = () => {
  return (
    <div className={classes.selectorUser}>
      <div className={classes.selectorUserHeader}>
        <img
          src={userPhoto}
          width="40"
          height="40"
          alt="фото пользователя"
        ></img>
        <button className={classes.dropDownButton}>
          <IconArrowDropDown />
        </button>
      </div>
    </div>
  );
};

export default selectorUser;
