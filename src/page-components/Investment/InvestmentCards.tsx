import React from "react";
import { FlexWrapper } from "../../shared-components";
import InvestmentCard from "./InvestmentCard";

const mapInvestmentVariantsToColorCode = {
  "doubble-targets": "#FFECCF",
  "doubble-rewards": "#ABEEFF",
  "fixed-investments": "#D6CFFF",
};
const investmentCards = [
  {
    type: "My House Savings",
    totalEarnings: "100,207,000,000.00",
    monthlyEarnings: "500,750,000,000.00",
    status: "active",
    variant: "doubble-rewards",
  },
  {
    type: "My School Fees Savings",
    totalEarnings: "100,207,000,000.00",
    monthlyEarnings: "500,750,000,000.00",
    status: "active",
    variant: "doubble-targets",
  },
  {
    type: "Utility Bill",
    totalEarnings: "100,207,000,000.00",
    monthlyEarnings: "500,750,000,000.00",
    status: "active",
    variant: "doubble-rewards",
  },
  {
    type: "My Stash",
    totalEarnings: "100,207,000,000.00",
    monthlyEarnings: "500,750,000,000.00",
    status: "future",
    variant: "fixed-investments",
  },
];

interface InvestmentCardsProps {
  status?: string;
  variant?: string;
  handleClick?: (variant: string) => void;
}
const InvestmentCards = (props: InvestmentCardsProps) => {
  const filterBy = [
    ...(props.status ? [props.status] : []),
    ...(props.variant ? [props.variant] : []),
  ];
  const filteredCards = !filterBy.length
    ? investmentCards
    : investmentCards.filter((card) => {
        if (filterBy.includes(card.variant) || filterBy.includes(card.status))
          return true;
        return false;
      });

  const renderedInvestmentCards = filteredCards.map((card) => {
    return (
      <FlexWrapper
        marginTop="20px"
        key={`${card.variant}-${card.monthlyEarnings}-${card.type}`}
        onClick={() => {
          props.handleClick(card.variant);
        }}
      >
        <InvestmentCard
          totalEarnings={card.totalEarnings}
          monthlyEarnings={card.monthlyEarnings}
          title={card.type}
          color={mapInvestmentVariantsToColorCode[card.variant]}
        />
      </FlexWrapper>
    );
  });

  return (
    <FlexWrapper flexDirection="column">{renderedInvestmentCards}</FlexWrapper>
  );
};

export default InvestmentCards;
