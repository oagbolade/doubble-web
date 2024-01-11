import React from "react";
import styled, { ThemedStyledProps } from "styled-components";

interface InputProps extends ThemedStyledProps<any, any> {
  hasValue?: boolean;
}

interface OTPInputProps extends ThemedStyledProps<any, any> {
  isActive?: boolean;
  hasValue?: boolean;
}
const Input = styled.input.attrs((props: InputProps) => ({
  hasValue: props.hasValue,
  type: "text",
  maxLength: 1,
  min: "0",
  max: "9",
  pattern: "[0-9]{1}",
  size: 1,
}))`
  width: 50px;
  height: 50px;
  border: 1px solid ${(props) => (props.hasValue ? "#00CCFF" : "#EAEAEA")};
  box-sizing: border-box;
  border-radius: 10px;
  line-height: 50px;
  text-align: center;
  margin: 5px;
  &:focus {
    border: 1px solid #eaeaea;
    border-radius: 10px;
    outline: 1px solid #eaeaea;
  }
  @media screen and (max-width: 991px) {
    width: 40px;
  }
  @media screen and (max-width: 400px) {
    width: 35px;
  }
`;

const OTPInput = (props: OTPInputProps) => {
  const otpInputRef = React.useRef(null);
  if (props.isActive) {
    otpInputRef.current.focus();
  }

  if (otpInputRef.current && !props.isActive) {
    otpInputRef.current.blur();
  }

  return <Input {...props} ref={otpInputRef} />;
};
export default OTPInput;
