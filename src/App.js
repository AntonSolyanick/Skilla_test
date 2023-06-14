import { useState, useEffect } from "react";

import SideBar from "./components/sidebar/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css";

// .toISOString().split("T")[0]

const currentDate = new Date();
const dateEnd = new Date();
const dateStart = new Date(currentDate.setDate(currentDate.getDate() - 3));

console.log(dateEnd, dateStart);

function App() {
  const [dateInterval, setDateInterval] = useState({
    dateStart: dateStart.toISOString().split("T")[0],
    dateEnd: dateEnd.toISOString().split("T")[0],
    dateView: "3 дня",
  });

  const [callsData, setCallsData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.skilla.ru/mango/getList?date_start=${dateInterval.dateStart}&date_end=${dateInterval.dateEnd}&limit=500`,
      {
        method: "POST",
        headers: { Authorization: "Bearer testtoken" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCallsData(data.results);
      })
      .catch((error) => console.log(error.message));
  }, [dateInterval]);

  const changeDateIntervalHandler = (intervalInfo) => {
    setDateInterval({
      dateStart: intervalInfo.dateStart,
      dateEnd: intervalInfo.dateEnd,
      dateView: intervalInfo.dateView,
    });
    console.log(dateInterval);
  };

  return (
    <div className="App">
      <SideBar />
      <MainContent
        dateInterval={dateInterval}
        onChangeDateInterval={changeDateIntervalHandler}
        callsData={callsData}
      />
    </div>
  );
}

export default App;
