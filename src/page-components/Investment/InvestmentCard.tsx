import React from "react";
import {
  FlexWrapper,
  Typography,
  HorizontalProgressBar,
} from "../../shared-components";

interface InvestmentCardProps {
  title?: string;
  totalEarnings?: string;
  monthlyEarnings?: string;
  color?: string;
  filledWidth?: number;
  emptyWidth?: number;
  handleClick?: () => void;
}
const InvestmentCard = (props: InvestmentCardProps) => {
  return (
    <FlexWrapper
      width="100%"
      height="100px"
      justifyContent="space-between"
      border="1px solid #E5E5E5"
      borderRadius="10px"
      padding="20px"
      onClick={props.handleClick}
      cursor="pointer"
      mediaQueries={`
        @media screen and (max-width: 600px) {
          padding: 10px;
        }
      `}
    >
      <FlexWrapper
        flexDirection="column"
        type="item"
        xs="5"
        lg="5"
        md="5"
        sm="5"
        justifyContent="space-between"
      >
        <Typography
          fontSize="18px"
          fontColor="#263E61"
          fontWeight="700"
          mediaQueries={`
            @media screen and (max-width: 600px) {
              font-size: 14px;
            }
          `}
        >
          {props.title}
        </Typography>
        <HorizontalProgressBar
          bgColor={props.color}
          filledWidth={props.filledWidth}
          emptyWidth={props.emptyWidth}
          mediaQueries={`
            @media screen and (max-width: 600px) {
              height: 5px;
              margin-bottom: 20px;
            }
          `}
        />
      </FlexWrapper>
      <FlexWrapper
        width="1px"
        background="#E5E5E5"
        height="100%"
        alignSelf="center"
      />
      <FlexWrapper
        type="item"
        xs="6"
        lg="6"
        md="6"
        sm="6"
        justifyContent="space-around"
      >
        <FlexWrapper
          flexDirection="column"
          justifyContent="space-around"
          marginBottom="10px"
        >
          <Typography
            fontSize="10px"
            fontWeight="400"
            fontColor="#263E61"
            mediaQueries={`
            @media screen and (max-width: 600px) {
                margin-bottom: 5px;
              }
            `}
          >
            Total Earnings
          </Typography>
          <Typography
            fontSize="16px"
            fontWeight="700"
            fontColor="#263E61"
            mediaQueries={`
              @media screen and (max-width: 600px) {
                font-size: 14px;
                margin-bottom: 5px;
              }
            `}
          >
            {props.totalEarnings}
          </Typography>
        </FlexWrapper>
        <FlexWrapper
          flexDirection="column"
          justifyContent="space-around"
          marginBottom="10px"
        >
          <Typography
            fontSize="10px"
            fontWeight="400"
            fontColor="#263E61"
            mediaQueries={`
            @media screen and (max-width: 600px) {
                margin-bottom: 5px;
              }
            `}
          >
            Earnings this month
          </Typography>
          <Typography
            fontSize="16px"
            fontWeight="700"
            fontColor="#263E61"
            mediaQueries={`
              @media screen and (max-width: 600px) {
                font-size: 14px;
                margin-bottom: 5px;
              }
            `}
          >
            {props.monthlyEarnings}
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

InvestmentCard.defaultProps = {
  title: "My HOUSE SAVINGS",
  totalEarnings: "100,207,000,000.00",
  monthlyEarnings: "500,750,000,000.00",
  color: "#62DFFF",
  filledWidth: 100,
  emptyWidth: 0,
};

export default InvestmentCard;
