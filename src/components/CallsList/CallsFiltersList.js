import classes from "./CallsFiltersList.module.css";
import Button from "../UI/Button";
import CallsFilter from "./CallsFilter";
import { filters } from "./DataFilters";
import { ReactComponent as IconSearch } from "../../icons/iconsUI/search.svg";

const CallsFiltersList = ({
  currentFilterValue,
  setCurrentFilterValueHandler,
  setCallsDataHandler,
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
            setCallsDataHandler={setCallsDataHandler}
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
