import { NavLink } from "react-router-dom";
import classes from "./SideBarNavList.module.css";
import { ReactComponent as IconPhpne } from "../../icons/results.svg";
import { ReactComponent as IconOrders } from "../../icons/orders.svg";
import { ReactComponent as IconMessages } from "../../icons/messages.svg";
import { ReactComponent as IconCalls } from "../../icons/calls.svg";
import { ReactComponent as IconCounterparties } from "../../icons/counterparties.svg";
import { ReactComponent as IconDocuments } from "../../icons/documents.svg";
import { ReactComponent as IconPerformers } from "../../icons/performers.svg";
import { ReactComponent as IconReports } from "../../icons/reports.svg";
import { ReactComponent as IconKnowladgeBase } from "../../icons/knowledgeBase.svg";
import { ReactComponent as IconSettings } from "../../icons/settings.svg";

const SideBarNavList = () => {
  return (
    <ul className={classes.sideBarList}>
      <li className={classes.sideBarListItem}>
        <NavLink className={classes.sideBarLink}>
          <IconPhpne className={classes.icon} />
          <p className={classes.sideBarLinkText}>Итоги</p>
          <div className={`${classes.circle} ${classes.hide}`}></div>
        </NavLink>
      </li>

      <li className={classes.sideBarListItem}>
        <NavLink className={classes.sideBarLink}>
          <IconOrders className={classes.icon} />
          <p className={classes.sideBarLinkText}>Заказы</p>
          <div className={`${classes.circle} ${classes.hide}`}></div>
        </NavLink>
      </li>

      <li className={classes.sideBarListItem}>
        <NavLink className={classes.sideBarLink}>
          <IconMessages className={classes.icon} />
          <p className={classes.sideBarLinkText}>Сообщения</p>
          <div className={`${classes.circle} ${classes.hide}`}></div>
        </NavLink>
      </li>

      <li className={`${classes.sideBarListItem} ${classes.activeLink}`}>
        <NavLink className={classes.sideBarLink}>
          <IconCalls className={classes.icon} />
          <p className={`${classes.sideBarLinkText} ${classes.activeText}`}>
            Звонки
          </p>
          <div className={`${classes.circle} `}></div>
        </NavLink>
      </li>

      <li className={classes.sideBarListItem}>
        <NavLink className={classes.sideBarLink}>
          <IconCounterparties className={classes.icon} />
          <p className={classes.sideBarLinkText}>Контрагенты</p>
          <div className={`${classes.circle} ${classes.hide}`}></div>
        </NavLink>
      </li>

      <li className={classes.sideBarListItem}>
        <NavLink className={classes.sideBarLink}>
          <IconDocuments className={classes.icon} />
          <p className={classes.sideBarLinkText}>Документы</p>
          <div className={`${classes.circle} ${classes.hide}`}></div>
        </NavLink>
      </li>

      <li className={classes.sideBarListItem}>
        <NavLink className={classes.sideBarLink}>
          <IconPerformers className={classes.icon} />
          <p className={classes.sideBarLinkText}>Исполнители</p>
          <div className={`${classes.circle} ${classes.hide}`}></div>
        </NavLink>
      </li>

      <li className={classes.sideBarListItem}>
        <NavLink className={classes.sideBarLink}>
          <IconReports className={classes.icon} />
          <p className={classes.sideBarLinkText}>Отчеты</p>
          <div className={`${classes.circle} ${classes.hide}`}></div>
        </NavLink>
      </li>

      <li className={classes.sideBarListItem}>
        <NavLink className={classes.sideBarLink}>
          <IconKnowladgeBase className={classes.icon} />
          <p className={classes.sideBarLinkText}>База знаний</p>
          <div className={`${classes.circle} ${classes.hide}`}></div>
        </NavLink>
      </li>

      <li className={classes.sideBarListItem}>
        <NavLink className={classes.sideBarLink}>
          <IconSettings className={classes.icon} />
          <p className={classes.sideBarLinkText}>Настройки</p>
          <div className={`${classes.circle} ${classes.hide}`}></div>
        </NavLink>
      </li>
    </ul>
  );
};

export default SideBarNavList;
