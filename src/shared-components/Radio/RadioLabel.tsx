import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { RightArrowIcon } from "../../icons";
import { FaChevronRight } from "react-icons/fa"
import FlexWrapper from "../FlexWrapper/FlexWrapper";

export const RadioLabelStyle = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: flex-start;
  -webkit-tap-highlight-color: transparent;
`;

export const LabelTextStyle = styled.span`
  margin-left: 10px;
  font-size: 12px;
  font-weight: 400;
  color: #263e61;
`;

export interface RadioLabelProps {
  checked?: boolean;
  control: React.ReactElement;
  disabled?: boolean;
  label?: React.ReactNode;
  name?: string;
  onChange?: (event: ChangeEvent) => void;
  value?: string;
}
const RadioLabel = (props: RadioLabelProps) => {
  const { label, control, disabled, value } = props;

  const controlProps = {
    disabled,
    value,
  } as {
    [x: string]: any;
  };

  ["checked", "name", "onChange", "value", "inputRef"].forEach((key) => {
    if (control.props[key] !== undefined) {
      controlProps[key] = control.props[key];
    }
  });
  return (
    <RadioLabelStyle>
      {React.cloneElement(control, controlProps)}
      <LabelTextStyle>{label}</LabelTextStyle>
      {/* <RightArrowIcon
        style={{
          marginLeft: "25px",
        }}
      /> */}
      <FlexWrapper position="absolute" right="0">
        <FaChevronRight fontSize="12px" color="#E5E5E5" />
      </FlexWrapper>
    </RadioLabelStyle>
  );
};

export default RadioLabel;
