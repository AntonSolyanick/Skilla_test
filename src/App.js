import { useState, useEffect } from "react";

import SideBar from "./components/sidebar/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css";

const dateEnd = new Date();

function App() {
  const [dateInterval, setDateInterval] = useState({
    dateStart: new Date(new Date().setDate(dateEnd.getDate() - 2))
      .toISOString()
      .split("T")[0],
    dateEnd: new Date().toISOString().split("T")[0],
    dateView: "3 дня",
  });
  const [currentFilterValue, setCurrentFilterValue] = useState("");
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [callsData, setCallsData] = useState("");

  const searchQuery = currentFilterValue ? `&in_out=${currentFilterValue}` : "";

  const url = `https://api.skilla.ru/mango/getList?date_start=${dateInterval.dateStart}&date_end=${dateInterval.dateEnd}${searchQuery}&limit=100`;

  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: { Authorization: "Bearer testtoken" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.results) setCallsData([]);
        else setCallsData(data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [dateInterval, url]);

  const datePickerVisibleHandler = () => {
    setIsDatePickerVisible((prevState) => !prevState);
  };

  const setCurrentFilterValueHandler = (filterValue) => {
    setCurrentFilterValue(filterValue);
  };

  const changeDateIntervalHandler = (intervalInfo) => {
    setDateInterval({
      dateStart: intervalInfo.dateStart,
      dateEnd: intervalInfo.dateEnd,
      dateView: intervalInfo.dateView,
    });
  };

  const setCallsDataHandler = (value) => {
    setCallsData(value);
  };

  return (
    <div className="App">
      <SideBar />
      <MainContent
        setCallsDataHandler={setCallsDataHandler}
        currentFilterValue={currentFilterValue}
        setCurrentFilterValueHandler={setCurrentFilterValueHandler}
        isDatePickerVisible={isDatePickerVisible}
        datePickerVisibleHandler={datePickerVisibleHandler}
        dateInterval={dateInterval}
        onChangeDateInterval={changeDateIntervalHandler}
        callsData={callsData}
      />
    </div>
  );
}

export default App;
