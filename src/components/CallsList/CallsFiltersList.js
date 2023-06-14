import classes from "./CallsFiltersList.module.css";
import Button from "../UI/Button";
import CallsFilter from "./CallsFilter";
import { ReactComponent as IconSearch } from "../../icons/iconsUI/search.svg";

const filters = [
  { currentValue: "Все типы", values: ["Все типы", "Входящие", "Исходящие"] },
  {
    currentValue: "Все сотрудники",
    values: [],
  },
  {
    currentValue: "Все звонки",
    values: [
      "Все звонки",
      "Все клиенты",
      "Новые клиенты",
      "Все исполнители",
      "Через приложение",
      "Прочие звонки",
    ],
  },
  {
    currentValue: "Все источники",
    values: [],
  },
  {
    currentValue: "Все оценки",
    values: [],
  },
  {
    currentValue: "Все ошибки",
    values: [],
  },
];

const CallsFiltersList = ({
  currentFilterValue,
  setCurrentFilterValueHandler,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <Button>
          <IconSearch />
        </Button>
        <input
          className={classes.inputCallsSearch}
          type="text"
          placeholder="Поиск по звонкам"
        ></input>
      </div>
      <ul className={classes.filtersContainer}>
        {filters.map((filter) => (
          <CallsFilter
            key={filter.currentValue}
            currentFilterValue={currentFilterValue}
            setCurrentFilterValueHandler={setCurrentFilterValueHandler}
            values={filter.values}
            currentValue={filter.currentValue}
          />
        ))}
      </ul>
    </div>
  );
};

export default CallsFiltersList;
