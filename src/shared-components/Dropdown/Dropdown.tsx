import React from "react";
import styled, { ThemedStyledProps } from "styled-components";

import { useClickOutside } from "../../utils";

interface DropdownWrapperProps extends ThemedStyledProps<any, any> {
  mediaQueries?: string;
  minWidth?: string;
  width?: string;
  top?: string;
  right?: string;
}
const DropdownWrapper = styled.div.attrs((props: DropdownWrapperProps) => ({
  mediaQueries: props.mediaQueries,
  minWidth: props.minWidth,
  width: props.width,
  top: props.top,
  right: props.right,
}))`
  animation: fadeIn 200ms ease-out;
  display: block;
  position: absolute;
  background: #fff;
  ${(props) => {
    return `
      ${props.mediaQueries ? props.mediaQueries : ""}
      ${props.minWidth ? `min-width: ${props.minWidth};` : ""}
      ${props.width ? `width: ${props.width};` : ""}
      ${props.top ? `top: ${props.top};` : ""}
      ${props.right ? `right: ${props.right};` : ""}
    `;
  }}
  border: 0px solid rgba(0, 0, 0, 0.25);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
  border-radius: 4px;
  z-index: 9999;
`;

DropdownWrapper.defaultProps = {
  minWidth: "200px",
  top: "100%",
  right: "0",
};

interface DropdownProps {
  children?: React.ReactNode;
  closeDropdown?: () => void;
  mediaQueries?: string;
  minWidth?: string;
  width?: string;
  top?: string;
  right?: string;
}
const Dropdown = (props: DropdownProps) => {
  const { closeDropdown, children, ...others } = props;
  const dropdownRef = React.useRef(null);
  useClickOutside(dropdownRef, closeDropdown);
  return (
    <DropdownWrapper {...others} ref={dropdownRef}>
      {children}
    </DropdownWrapper>
  );
};
export default Dropdown;
