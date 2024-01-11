import React from "react";
import { FlexWrapper } from "../../../shared-components";

interface NewInvestmentFormDescriptionProps {
  bgColor?: string;
  modalTitle: React.ReactElement;
  horizontalProgressBar: React.ReactElement;
  circularWaveProgressBar: React.ReactElement;
  amountDetails: React.ReactElement;
}
const InvestmentModalLeftSide = (props: NewInvestmentFormDescriptionProps) => {
  return (
    <FlexWrapper
      type="item"
      xs="12"
      sm="12"
      lg="6"
      md="12"
      background={props.bgColor}
      height="100%"
      borderRadius="30px 0px 0px 30px"
      flexDirection="column"
      boxSizing="border-box"
      position="relative"
      mediaQueries={`
        @media screen and (max-width: 1200px) {
          height: 50%;
          border-radius: 30px 30px 0 0;
        }
      `}
    >
      <FlexWrapper flexDirection="column" alignItems="center" padding="20px">
        {props.modalTitle}
        {props.horizontalProgressBar}
      </FlexWrapper>
      {props.circularWaveProgressBar}
      {props.amountDetails}
    </FlexWrapper>
  );
};

InvestmentModalLeftSide.defaultProps = {
  bgColor: "#ABEEFF",
};

export default InvestmentModalLeftSide;
