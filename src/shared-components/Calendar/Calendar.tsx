import React from "react";

import CalendarContainer from "./CalendarContainer";
import CalendarDates from "./CalendarDates";
import CalendarDays from "./CalendarDays";
import CalendarHeader from "./CalendarHeader";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

interface CalendarProps {
  setSelectedDate?: (date: string) => void;
}
const Calendar = (props: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = React.useState(
    new Date().getFullYear()
  );

  const dayOfTheMonth = new Date().getDate();
  const date = new Date(currentYear, currentMonth + 1, 0);
  const totalDaysInCurrentMonth = date.getDate();
  const startDayOfTheWeekForCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth()
  ).getDay();

  return (
    <CalendarContainer>
      <CalendarHeader
        currentMonth={currentMonth}
        currentYear={currentYear}
        setCurrentMonth={(month) => {
          setCurrentMonth(month);
        }}
        setCurrentYear={(year) => {
          setCurrentYear(year);
        }}
      />
      <CalendarDays />
      <CalendarDates
        currentMonth={currentMonth}
        currentYear={currentYear}
        dayOfTheMonth={dayOfTheMonth}
        date={date}
        totalDaysInCurrentMonth={totalDaysInCurrentMonth}
        startDayOfTheWeekForCurrentMonth={startDayOfTheWeekForCurrentMonth}
        setSelectedDate={(date: string) => {
          props.setSelectedDate(date);
        }}
      />
    </CalendarContainer>
  );
};

export default Calendar;
