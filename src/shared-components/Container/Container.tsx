import styled, { ThemedStyledProps } from "styled-components";

interface ContainerProps {
  bgColor?: string;
  overFlowY?: string;
  overFlowX?: string;
  height?: string;
}
const Container = styled.div.attrs((props: ContainerProps) => ({
  bgColor: props.bgColor,
  overFlowY: props.overFlowY,
  overFlowX: props.overFlowX,
  height: props.height
}))`
  display: flex;
  flex: 1 1;
  flex-direction: column;
  min-width: 0;
  min-height: 100vh;
  background: ${(props) => props.bgColor};
  overflow-y: ${(props) => props.overFlowY};
  ${(props) => (props.height ? `height: ${props.height};` : "")}
`;

Container.defaultProps = {
  bgColor: "#d5e0fb",
  overFlowY: "hidden",
};
export default Container;
