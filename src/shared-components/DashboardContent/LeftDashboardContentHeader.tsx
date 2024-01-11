import React from "react";
import { FlexWrapper } from "../../shared-components";

interface LeftDashboardContentHeaderProps {
  children?: React.ReactNode;
}
const LeftDashboardContentHeader = (props: LeftDashboardContentHeaderProps) => (
  <FlexWrapper
    justifyContent="space-between"
    alignItems="center"
    width="100%"
    height="100px"
    mediaQueries={`
      @media screen and (max-width: 600px) {
        justify-content: center;
      }
    `}
  >
    {props.children}
  </FlexWrapper>
);

export default LeftDashboardContentHeader;
