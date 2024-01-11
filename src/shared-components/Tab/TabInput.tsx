import React from "react";
import styled, { ThemedStyledProps } from "styled-components";

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  appearance: none;
  outline: none;
  border: none;
  opacity: 0;
  z-index: 3999;
`;

interface TabInputProps extends ThemedStyledProps<any, any> {}
const TabInput = (props: TabInputProps) => {
  return <Input type="radio" {...props} />;
};

export default TabInput;
