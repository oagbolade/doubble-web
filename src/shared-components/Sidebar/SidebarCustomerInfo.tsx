import React, { ReactElement, ReactNode } from "react";
import { FlexWrapper, Card, Typography } from "../../shared-components";

interface SidebarCustomerImageWrapperProps {
  children?: ReactNode;
}
export const SidebarCustomerImageWrapper = (
  props: SidebarCustomerImageWrapperProps
) => (
  <Card
    width="6rem"
    height="6rem"
    bgColor="#E0AF51"
    boxShadow="0px 10px 10px rgba(0, 0, 0, 0.25)"
    borderRadius="50%"
  >
    {props.children}
  </Card>
);

interface SidebarCustomerImagePlaceholderProps {
  children?: ReactNode;
}
export const SidebarCustomerImagePlaceholder = (
  props: SidebarCustomerImagePlaceholderProps
) => (
  <Typography fontColor="#ffffff" fontSize="34px" fontWeight="400">
    {props.children}
  </Typography>
);

interface SidebarCustomerNameWrapperProps {
  firstName?: string;
  lastName?: string;
}
export const SidebarCustomerNameWrapper = (
  props: SidebarCustomerNameWrapperProps
) => (
  <FlexWrapper
    flexDirection="column"
    width="100%"
    alignItems="center"
    padding="25px"
  >
    <Typography fontWeight="700" fontSize="26px" fontColor="#ffffff">
      {props.firstName}
    </Typography>
    <Typography fontWeight="700" fontSize="16px" fontColor="#ffffff">
      {props.lastName}
    </Typography>
  </FlexWrapper>
);

interface SidebarContainerProps {}

export const SidebarCustomerInfo = (props: SidebarContainerProps) => (
  <FlexWrapper
    top="0"
    background="transparent"
    position="relative"
    flexDirection="column"
    alignItems="center"
  >
    <SidebarCustomerImageWrapper>
      <SidebarCustomerImagePlaceholder>EH</SidebarCustomerImagePlaceholder>
    </SidebarCustomerImageWrapper>

    <SidebarCustomerNameWrapper firstName="Esther" lastName="Howard" />
  </FlexWrapper>
);
