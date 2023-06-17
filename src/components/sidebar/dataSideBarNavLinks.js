import classes from "./dataSideBarNavLinks.module.css";

import { ReactComponent as IconResults } from "../../icons/results.svg";
import { ReactComponent as IconOrders } from "../../icons/orders.svg";
import { ReactComponent as IconMessages } from "../../icons/messages.svg";
import { ReactComponent as IconCalls } from "../../icons/calls.svg";
import { ReactComponent as IconCounterparties } from "../../icons/counterparties.svg";
import { ReactComponent as IconDocuments } from "../../icons/documents.svg";
import { ReactComponent as IconPerformers } from "../../icons/performers.svg";
import { ReactComponent as IconReports } from "../../icons/reports.svg";
import { ReactComponent as IconKnowladgeBase } from "../../icons/knowledgeBase.svg";
import { ReactComponent as IconSettings } from "../../icons/settings.svg";

export const dataSideBarNavLinks = [
  { icon: <IconResults className={classes.icon} />, text: "Итоги" },
  { icon: <IconOrders className={classes.icon} />, text: "Заказы" },
  { icon: <IconMessages className={classes.icon} />, text: "Сообщения" },
  {
    icon: <IconCalls className={classes.icon} />,
    text: "Звонки",
  },
  {
    icon: <IconCounterparties className={classes.icon} />,
    text: "Контрагенты",
  },
  { icon: <IconDocuments className={classes.icon} />, text: "Документы" },
  { icon: <IconPerformers className={classes.icon} />, text: "Исполнители" },
  { icon: <IconReports className={classes.icon} />, text: "Отчеты" },
  { icon: <IconKnowladgeBase className={classes.icon} />, text: "Базы знаний" },
  { icon: <IconSettings className={classes.icon} />, text: "Настройки" },
];
