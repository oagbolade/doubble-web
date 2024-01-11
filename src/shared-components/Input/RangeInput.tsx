import styled, { ThemedStyledProps } from "styled-components";

interface RangeInputProps extends ThemedStyledProps<any, any> {}
const Input = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #d7dcdf;
  outline: none;
  padding: 0;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #00ccff;
    cursor: pointer;
    -webkit-transition: background 0.15s ease-in-out;
    transition: background 0.15s ease-in-out;
  }

  &::-moz-range-thumb {
    width: 30px;
    height: 30px;
    border: 0;
    border-radius: 50%;
    background: #00ccff;
    cursor: pointer;
    -moz-transition: background 0.15s ease-in-out;
    transition: background 0.15s ease-in-out;
  }
`;

const RangeInput = () => {
  return <Input type="range" min="0" max="500" step="50" />;
};

export default RangeInput;
