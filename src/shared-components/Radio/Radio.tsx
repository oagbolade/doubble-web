import React, { ChangeEvent } from "react";
import styled from "styled-components";

import OuterCircleIcon from "./OuterCircleIcon";
import InnerCircleIcon from "./InnerCircleIcon";
import RadioGroupContext from "./RadioGroupContext";

export const RadioWrapperStyle = styled.span`
  display: flex;
  height: 50px;
  width: 50px;
  cursor: pointer;
  position: relative;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
`;

export const InputRadioStyle = styled.input.attrs((props) => ({
  type: "radio",
}))`
  top: 0;
  left: 0;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  z-index: 1;
  position: absolute;
  background: transparent;
`;

export interface RadioProps {
  autoFocus?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  onBlur?: string;
  onChange?: string;
  value?: string;
}
const Radio = (props: RadioProps) => {
  const { disabled } = props;
  const radioGroup = React.useContext(RadioGroupContext) as {
    name: string;
    value: string;
    onChange: (event: ChangeEvent) => void;
  };
  return (
    <RadioWrapperStyle>
      <InputRadioStyle
        onChange={radioGroup.onChange}
        disabled={disabled}
        name={radioGroup.name}
        value={props.value}
        checked={props.value === radioGroup.value}
      />
      <OuterCircleIcon />
      {props.value === radioGroup.value ? <InnerCircleIcon /> : null}
    </RadioWrapperStyle>
  );
};

Radio.defaultProps = {
  checked: false,
};

export default Radio;
