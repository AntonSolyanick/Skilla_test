import { ReactComponent as IconPlusSign } from "../../icons/iconsUI/plusSign.svg";
import classes from "./AccountBalance.module.css";
import Button from "./Button";

const AccountBalance = () => {
  return (
    <div className={classes.container}>
      <p className={classes.balanceText}>
        Баланс: <span> 272 ₽ </span>
      </p>

      <Button>
        <IconPlusSign className={classes.plusSign} />
      </Button>
    </div>
  );
};

export default AccountBalance;
