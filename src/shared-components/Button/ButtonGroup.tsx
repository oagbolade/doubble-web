import React from "react";
import styled from "styled-components";

const ButtonGroupStyle = styled.div`
  display: flex;
  border-radius: 21px;
  width: 100%;
`;

interface ButtonGroupProps {
  children?: React.ReactNode;
  borderColor?: string;
  fontColor?: string;
}
const ButtonGroup = (props: ButtonGroupProps) => {
  const { children, borderColor, fontColor } = props;
  return (
    <ButtonGroupStyle>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            borderColor,
            fontColor,
          });
        }
        return null;
      })}
    </ButtonGroupStyle>
  );
};

export default ButtonGroup;
