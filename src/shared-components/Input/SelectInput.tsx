import styled, { ThemedStyledProps } from "styled-components";

// interface RangeInputProps extends ThemedStyledProps<any, any> {}
const Select = styled.select`
  width: 100%;
  margin-top: 15px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px;

  ::placeholder {
    font-size: 18px;
    color: #c4c4c4;
  }

  :focus {
    outline: 1px solid #263d61;
    border: 1px solid #ffffff;
    box-shadow: 0px 4px 10px rgba(38, 61, 97, 0.2);
    border-radius: 5px;
  }
  background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+) no-repeat;
  background-position: right 1.5em top;
  -moz-appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`;

export default Select;
