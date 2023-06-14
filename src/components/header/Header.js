import CallAnalytics from "./CallAnalytics";
import SelectorCompany from "./SelectorCompany";
import SelectorUser from "./SelectorUser";
import classes from "./Header.module.css";
import { ReactComponent as IconSearch } from "../../icons/iconsUI/search.svg";

const Header = () => {
  return (
    <header className={classes.headerContainer}>
      <p className={classes.headerDate}>среда 13 окт</p>
      <CallAnalytics />
      <button className={classes.headerSearchButton}>
        <IconSearch />
      </button>
      <SelectorCompany />
      <SelectorUser />
    </header>
  );
};

export default Header;
