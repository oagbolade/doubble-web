import styled from "styled-components";
import { RightArrowIcon, BackArrowIcon } from "../../icons";

const days = [
  {
    name: "monday",
    label: "M",
  },
  {
    name: "tuesday",
    label: "T",
  },
  {
    name: "wednessday",
    label: "W",
  },
  {
    name: "thursday",
    label: "T",
  },
  {
    name: "friday",
    label: "F",
  },
  {
    name: "saturday",
    label: "S",
  },
  {
    name: "sunday",
    label: "S",
  },
];

const CalendarDaysWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

const CalendarDay = styled.div`
  color: #fff;
  width: 25px;
  text-align: center;
  padding-bottom: 1em;
`;

const CalendarDays = () => {
  return (
    <CalendarDaysWrapper>
      {days.map((day) => {
        return (
          <CalendarDay key={`${day.name}-${day.label}`}>
            {day.label}
          </CalendarDay>
        );
      })}
    </CalendarDaysWrapper>
  );
};

export default CalendarDays;
