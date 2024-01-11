import React from "react";
import { FlexWrapper } from "../../shared-components";

interface DashboardContentContainerProps {
  children?: React.ReactNode;
}
const DashboardContentContainer = (props: DashboardContentContainerProps) => (
  <FlexWrapper
    height="100vh"
    flex="1 1"
    background="#F9F9F9"
    overFlowY="scroll"
    marginTop="100px"
    flexDirection="column"
  >
    {props.children}
  </FlexWrapper>
);

export default DashboardContentContainer;
