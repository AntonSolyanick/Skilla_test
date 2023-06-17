export const dateIntervalOptions = [
  {
    dateEnd: new Date().toISOString().split("T")[0],
    dateStart: new Date(new Date().setDate(new Date().getDate() - 2))
      .toISOString()
      .split("T")[0],
    dateView: "3 дня",
  },
  {
    dateEnd: new Date().toISOString().split("T")[0],
    dateStart: new Date(new Date().setDate(new Date().getDate() - 6))
      .toISOString()
      .split("T")[0],
    dateView: "неделя",
  },
  {
    dateEnd: new Date().toISOString().split("T")[0],
    dateStart: new Date(new Date().setDate(new Date().getDate() - 30))
      .toISOString()
      .split("T")[0],
    dateView: "месяц",
  },
  {
    dateEnd: new Date().toISOString().split("T")[0],
    dateStart: new Date(new Date().setDate(new Date().getDate() - 364))
      .toISOString()
      .split("T")[0],
    dateView: "год",
  },
];
