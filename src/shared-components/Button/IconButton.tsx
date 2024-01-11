import styled from "styled-components";
import { cssPropsFactory } from "../../utils";

const IconButton = styled.button.attrs(cssPropsFactory)`
  flex: 0 0 auto;
  cursor: pointer;
  margin: 0;
  outline: 0;
  padding: 12px;
  border: 0;
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  overflow: visible;
  text-align: center;
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.boxShadow ? `box-shadow: ${props.boxShadow};` : "")}

  ${(props) => {
    return `${props.mediaQueries ? props.mediaQueries : ""}`;
  }}
`;

IconButton.defaultProps = {
  background: "transparent",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
};

export default IconButton;
