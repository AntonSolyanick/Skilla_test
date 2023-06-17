import { NavLink } from "react-router-dom";
import classes from "./SideBarNavList.module.css";
import { dataSideBarNavLinks } from "./dataSideBarNavLinks";

const SideBarNavList = () => {
  return (
    <ul className={classes.sideBarList}>
      {dataSideBarNavLinks.map((link) => (
        <li
          className={`${classes.sideBarListItem} ${
            link.text === "Звонки" ? classes.activeLink : ""
          }`}
          key={link.text}
        >
          <NavLink className={classes.sideBarLink}>
            {link.icon}

            <p
              className={`${classes.sideBarLinkText} ${
                link.text === "Звонки" ? classes.activeText : ""
              }`}
            >
              {link.text}
            </p>
            <div className={link.text === "Звонки" ? classes.circle : ""}></div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SideBarNavList;
