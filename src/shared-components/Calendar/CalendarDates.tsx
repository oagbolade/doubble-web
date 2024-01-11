import React from "react";
import styled, { ThemedStyledProps } from "styled-components";

const CalendarDatesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  width: 252px;
`;
// #00CCFF

interface CalendarDateItemProps extends ThemedStyledProps<any, any> {
  isSelected?: boolean;
  isValidDate?: boolean;
}
const CalendarDateItem = styled.div.attrs((props: CalendarDateItemProps) => ({
  isSelected: props.isSelected,
  isValidDate: props.isValidDate,
}))`
  color: #fff;
  width: 20px;
  text-align: center;
  height: 15px;
  padding: 11px;
  ${(props) =>
    props.isValidDate
      ? `
        cursor: pointer;
        :hover {
          background: #00CCFF;
        }
        ${props.isSelected ? "background: #00CCFF;" : ""}
      `
      : ""}
  border-radius: 100%;
  font-size: 13px;
`;

const CalendarDateItemRow = styled.div`
  width: 100%;
  display: flex;
`;
interface CalendarDateProps {
  isValidDate?: (day: string) => boolean;
  startDayOfTheWeekForCurrentMonth?: number;
  totalDaysInCurrentMonth?: number;
  currentYear?: number;
  currentMonth?: number;
  dayOfTheMonth?: number;
  setSelectedDate?: (date: string) => void;
  date?: Date;
}
const CalendarDates = (props: CalendarDateProps) => {
  const [selectedDay, selectDay] = React.useState(null);
  const totalDaysInCurrentMonth = props.date.getDate();
  const startDayOfTheWeekForCurrentMonth = new Date(
    props.date.getFullYear(),
    props.date.getMonth()
  ).getDay();

  const calendarDetails = () => {
    const calendar = [];
    let daysOftheMonth = 1;
    for (let week = 0; week <= 5; week += 1) {
      calendar.push([]);
      for (let day = 0; day <= 6; day += 1) {
        if (week === 0 && day < startDayOfTheWeekForCurrentMonth) {
          calendar[week].push("");
        } else if (week === 0 && day === startDayOfTheWeekForCurrentMonth) {
          calendar[week].push(String(daysOftheMonth));
          daysOftheMonth += 1;
        } else {
          if (daysOftheMonth > totalDaysInCurrentMonth) {
            calendar[week].push("");
          } else {
            calendar[week].push(String(daysOftheMonth));
          }
          daysOftheMonth += 1;
        }
      }
    }

    return calendar;
  };

  const isValidDate = (day, { currentMonth, currentYear, dayOfTheMonth }) => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    if (!day) return false;
    if (currentYear < year) return false;
    if (currentYear > year) return true;
    if (currentMonth < month) return false;
    if (currentMonth > month) return true;
    if (currentMonth === month && Number(day) < dayOfTheMonth) return false;
    return true;
  };

  return (
    <CalendarDatesWrapper>
      {calendarDetails().map((week, index) => {
        return (
          <CalendarDateItemRow key={`week-${week}-${index}`}>
            {week.map((day, index) => {
              return (
                <CalendarDateItem
                  key={`date-item-${day}-${index}`}
                  isValidDate={isValidDate(day, {
                    currentMonth: props.currentMonth,
                    currentYear: props.currentYear,
                    dayOfTheMonth: props.dayOfTheMonth,
                  })}
                  onClick={() => {
                    selectDay(day);
                    props.setSelectedDate(
                      `${day}-${props.currentMonth}-${props.currentYear}`
                    );
                  }}
                  isSelected={
                    new Date().getMonth() === props.currentMonth &&
                    selectedDay === day
                  }
                >
                  {day}
                </CalendarDateItem>
              );
            })}
          </CalendarDateItemRow>
        );
      })}
    </CalendarDatesWrapper>
  );
};

export default CalendarDates;
