import React from "react";
import { Container, FlexWrapper } from "../../shared-components";

// TODO: add menu icon buttons that will displayed when not full desktop mode
// TODO: implement slider for both left and right side. This slides will be activated by clicking the buttons
interface DashbardContainerProps {
  children?: React.ReactNode;
}
const DashboardContainer = (props: DashbardContainerProps) => (
  <Container bgColor="#ffffff">
    <FlexWrapper minHeight="100vh" minWidth="100vw" overFlow="hidden">
      {props.children}
    </FlexWrapper>
  </Container>
);

export default DashboardContainer;
