import styled, { ThemedStyledProps } from "styled-components";

interface SidebarContainerProps extends ThemedStyledProps<any, any> {
  isOpen?: boolean;
}
const SideBarContainer = styled.div.attrs((props: SidebarContainerProps) => ({
  isOpen: props.isOpen,
}))`
  top: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 240px;
  background: #FFFFFF;
  position: relative;
  align-items: center;
  padding: 20px;
  padding-top: 75px;
  box-sizing: border-box;
  border-right: 1px solid #E5E5E5;

  @media screen and (max-width: 1200px) {
    margin-left: ${(props) => (props.isOpen ? "0px" : "-300px")};
    padding: ${(props) => (props.isOpen ? "60px" : "0px")};
    transition: 0.15s ease-out;
    position: absolute;
    z-index: 99999;
  }
`;

SideBarContainer.defaultProps = {
  isOpen: false,
};

export default SideBarContainer;
