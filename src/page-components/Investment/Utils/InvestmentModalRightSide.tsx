import React from "react";
import { FlexWrapper, Typography, Card } from "../../../shared-components";

interface InvestmentModalRightSideProps {
  totalContribution: React.ReactElement;
  totalInterest: React.ReactElement;
  duration: React.ReactElement;
  beneficiary: React.ReactElement;
  chart: React.ReactElement;
  chartDetails: React.ReactElement;
}
const InvestmentModalRightSide = (props: InvestmentModalRightSideProps) => {
  return (
    <FlexWrapper
      type="item"
      xs="12"
      sm="12"
      lg="6"
      md="12"
      height="100%"
      boxSizing="border-box"
      padding="50px"
      flexDirection="column"
      justifyContent="flex-end"
      position="relative"
      mediaQueries={`
        @media screen and (max-width: 1200px) {
          height: 50%;
        }
        @media screen and (max-width: 600px) {
          padding: 10px;
        }
      `}
    >
      {props.chartDetails}
      <FlexWrapper width="100%">{props.chart}</FlexWrapper>
      <FlexWrapper
        flexDirection="column"
        padding="20px"
        justifyContent="flex-start"
      >
        {props.totalContribution}
        {props.totalInterest}
        {props.duration}
      </FlexWrapper>
      {props.beneficiary}
      <FlexWrapper width="100%" justifyContent="center" alignItems="center">
        <button
          style={{
            width: "240px",
            height: "50px",
            background: "#263E61",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Typography fontSize="24px" fontWeight="700" fontColor="#00CCFF">
            End Investment
          </Typography>
        </button>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default InvestmentModalRightSide;
