import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CalendarHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2em;
  color: #fff;
  font-size: 16px;
`;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface CalendarHeaderProps {
  currentMonth?: number;
  currentYear?: number;
  setCurrentMonth?: (month: number) => void;
  setCurrentYear?: (year: number) => void;
}
const CalendarHeader = (props: CalendarHeaderProps) => {
  const { setCurrentMonth, setCurrentYear, currentMonth, currentYear } = props;
  return (
    <CalendarHeaderWrapper>
      <FaArrowLeft
        onClick={() => {
          if (currentMonth === 0) {
            setCurrentYear(currentYear - 1);
            setCurrentMonth(11);
          } else {
            setCurrentMonth(currentMonth - 1);
          }
        }}
      />
      {months[props.currentMonth]} - {props.currentYear}
      <FaArrowRight
        onClick={() => {
          if (currentMonth === 11) {
            setCurrentYear(currentYear + 1);
            setCurrentMonth(0);
          } else {
            setCurrentMonth(currentMonth + 1);
          }
        }}
      />
    </CalendarHeaderWrapper>
  );
};

CalendarHeader.defaultProps = {
  currentMonth: 4,
  currentYear: 2021,
};

export default CalendarHeader;
