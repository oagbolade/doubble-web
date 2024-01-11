import React from "react";
import styled, { ThemedStyledProps } from "styled-components";

interface ButtonStyleProps extends ThemedStyledProps<any, any> {
  borderColor?: string;
  borderRadius?: string;
  borderLeft?: string;
  borderRight?: string;
  bgColor?: string;
  fontColor?: string;
  width?: string;
  height?: string;
  isGroup?: boolean;
  mediaQueries?: string;
}
const ButtonStyle = styled.button.attrs((props: ButtonStyleProps) => ({
  borderColor: props.borderColor,
  borderRadius: props.borderRadius,
  borderLeft: props.borderLeft,
  borderRight: props.borderRight,
  bgColor: props.bgColor,
  fontColor: props.fontColor,
  width: props.width,
  height: props.height,
  isGroup: props.isGroup,
  mediaQueries: props.mediaQueries,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: 1.75;
  text-decoration: none;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  display: flex;
  outline: none;
  position: relative;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.borderColor ? `border: 1px solid ${props.borderColor};` : ""}
  ${(props) => (props.fontColor ? `color: ${props.fontColor};` : "")}
  ${(props) => (props.borderLeft ? `border-left: ${props.borderLeft};` : "")}
  ${(props) => (props.borderRight ? `border-right: ${props.borderRight};` : "")}
  ${(props) => (props.bgColor ? `background: ${props.bgColor};` : "")}

  ${(props) => {
    return `${props.mediaQueries ? props.mediaQueries : ""}`;
  }}

  ${(props) => {
    if (props.isGroup) {
      return `
        :not(:last-child) {
          border-radius: 10px 0 0 10px;
        }
        :not(:first-child) {
          border-radius: 0 10px 10px 0;
        }
      `;
    }
    if (!props.isGroup && props.borderRadius) {
      return `
        border-radius: ${props.borderRadius};
      `;
    }
  }}
`;

ButtonStyle.defaultProps = {
  width: "100%",
  height: "50px",
  isGroup: false,
};

const ButtonLabel = styled.label`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`;

const StartIconWrapper = styled.span`
  display: inherit;
  margin-left: -8px;
  margin-right: 8px;
`;

const EndIconWrapper = styled.span`
  display: inherit;
  margin-left: 8px;
  margin-right: -8px;
`;

interface ButtonProps extends ThemedStyledProps<any, any> {
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  children?: React.ReactNode;
  borderColor?: string;
  bgColor?: string;
  borderLeft?: string;
  borderRight?: string;
  borderRadius?: string;
  fontColor?: string;
  width?: string;
  height?: string;
  isGroup?: boolean;
  mediaQueries?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  const startIcon = props.startIcon && (
    <StartIconWrapper>{props.startIcon}</StartIconWrapper>
  );

  const endIcon = props.endIcon && (
    <EndIconWrapper>{props.endIcon}</EndIconWrapper>
  );
  return (
    <ButtonStyle
      ref={props.ref}
      borderColor={props.borderColor}
      borderRadius={props.borderRadius}
      borderLeft={props.borderLeft}
      borderRight={props.borderRight}
      bgColor={props.bgColor}
      fontColor={props.fontColor}
      width={props.width}
      height={props.height}
      isGroup={props.isGroup}
      mediaQueries={props.mediaQueries}
      {...props}
    >
      <ButtonLabel>
        {startIcon}
        {props.children}
        {endIcon}
      </ButtonLabel>
    </ButtonStyle>
  );
};

export default Button;
