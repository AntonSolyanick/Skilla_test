import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";
import logo from "../../icons/logo.svg";
import SideBarNavList from "./SideBarNavList";
import ButtonSidebar from "./ButtonSidebar";

import { ReactComponent as IconPlusSign } from "../../icons/iconsUI/plusSign.svg";
import { ReactComponent as IconExclamationSign } from "../../icons/iconsUI/exclamaitionSign.svg";

const SideBar = () => {
  return (
    <nav className={classes.sideBar}>
      <NavLink>
        <img
          src={logo}
          className={classes.sideBarLogo}
          width="109"
          height="28"
          alt="логотип компании"
        />
      </NavLink>
      <SideBarNavList></SideBarNavList>
      <ButtonSidebar>
        <span className={classes.buttonText}>Добавить заказ</span>{" "}
        <IconPlusSign />
      </ButtonSidebar>
      <ButtonSidebar>
        <span className={classes.buttonText}>Оплата</span>{" "}
        <IconExclamationSign />
      </ButtonSidebar>
    </nav>
  );
};

export default SideBar;
