import styled, { ThemedStyledProps } from "styled-components";

interface RightDashboardContentContainerProps
  extends ThemedStyledProps<any, any> {
  isOpen?: boolean;
  width?: number;
}
const RightDashboardContentContainer = styled.div.attrs(
  (props: RightDashboardContentContainerProps) => ({
    isOpen: props.isOpen,
    width: props.width,
  })
)`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 300px;
  border-left: 1px solid #e5e5e5;
  @media screen and (max-width: 1600px) {
    width: 0px;
    padding: 0px;
    display: none;
    transition: 0.15s ease-out;
  }
`;

export default RightDashboardContentContainer;
