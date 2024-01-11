import React from "react";

import { Card, FlexWrapper, Typography } from "../../../../shared-components";

const curriencies = [
  {
    name: "naira",
    symbol: "NGN",
  },
  {
    name: "dollar",
    symbol: "USD",
  },
];

interface CurrencyTabsProps {
  setCurrency?: (currency: string) => void;
}
const CurrencyTabs = (props: CurrencyTabsProps) => {
  const [selectedCurrency, setCurrency] = React.useState("naira");
  return (
    <FlexWrapper position="absolute" zIndex="1999" top="-6%" key="fff344">
      <Card
        height="70px"
        width="380px"
        bgColor="#F8F9FA"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25), inset 3px 3px 5px rgba(0, 204, 255, 0.1)"
        borderRadius="10px"
        justifyContent="space-around"
        mediaQueries={`
          @media screen and (max-width: 600px) {
            width: 300px;
          }
          @media screen and (max-width: 400px) {
            width: 275px;
          }
        `}
      >
        {curriencies.map((currency) => {
          return (
            <Card
              key={`${currency.name}-${currency.symbol}`}
              cursor="pointer"
              height="50px"
              width="160px"
              bgColor={
                currency.name === selectedCurrency ? "#00CCFF" : "#FFFFFF"
              }
              borderRadius="10px"
              mediaQueries={`
                @media screen and (max-width: 600px) {
                  width: 120px;
                }
              `}
              onClick={() => {
                setCurrency(currency.name);
                props.setCurrency(currency.name);
              }}
            >
              <Typography
                fontSize="28px"
                fontWeight="700"
                fontColor="#263D61"
                mediaQueries={`
                  @media screen and (max-width: 600px) {
                      font-size: 24px
                    }
                `}
              >
                {currency.symbol}
              </Typography>
            </Card>
          );
        })}
      </Card>
    </FlexWrapper>
  );
};

export default CurrencyTabs;
