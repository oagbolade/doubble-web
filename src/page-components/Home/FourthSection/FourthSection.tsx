import React from "react";
import Image from "next/image";

import { FlexWrapper, Typography, Card } from "../../../shared-components";
import { ResponsiveWrapper } from "../../../util-components/ResponsiveWrappers";
import StableInvestmentCard from "./StableInvestmentCard";
import FlexiblePaymentCard from "./FlexiblePaymentCard";
import GiftCard from "./GiftCard";
import CurrencyTabs from "./Calculator/CurrencyTabs";
import CalculateButton from "./Calculator/CalculateButton";
import InvestmentVariantCards from "./Calculator/InvestmentVariantCards";
import CalculatorInput from "./Calculator/CalculatorInput";

const FourthSection = () => {
  const [variantLink, setVariantLink] = React.useState("");
  const [investmentAmount, setInvestmentAmount] = React.useState("");
  const [currency, setCurrency] = React.useState("");
  return (
    <FlexWrapper
      flexDirection="column"
      marginBottom="75px"
      mediaQueries={`
        @media screen and (max-width: 991px) {
          height: 180vh;
          flex-wrap: nowrap;
        }
        @media screen and (max-width: 400px) {
          height: 200vh;
          flex-wrap: nowrap;
        }
      `}
    >
      <FlexWrapper
        flexDirection="column"
        alignItems="center"
        minHeight="20vh"
        marginTop="150px"
        mediaQueries={`
        @media screen and (max-width: 600px) {
            margin-top: 100px;
          }
        `}
      >
        <Typography
          variant="h1"
          fontSize="5vw"
          fontWeight="100"
          fontColor="#263d61"
          marginBottom="0"
          marginTop="70px"
          mediaQueries={`
          @media screen and (max-width: 400px) {
              margin-top: 0;
            }
          `}
        >
          Naira Or Dollar?
        </Typography>

        <Typography
          fontSize="7vw"
          fontWeight="700"
          fontColor="#263d61"
          margin="0"
          mediaQueries={`
            @media screen and (max-width: 600px) {
              font-size: 10vw
            }
        `}
        >
          You Choose
        </Typography>
      </FlexWrapper>

      <FlexWrapper
        flexDirection="row"
        justifyContent="space-around"
        marginLeft="50px"
        marginRight="50px"
        marginTop="100px"
        marginBottom="50px"
        mediaQueries={`
          @media screen and (max-width: 600px) {
            margin: 0;
          }
        `}
      >
        <FlexWrapper
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          xs="12"
          sm="12"
          lg="6"
          md="6"
          type="item"
          mediaQueries={`
            @media screen and (max-width: 600px) {
              margin-top: 50px;
            }
          `}
        >
          <FlexiblePaymentCard />
          <GiftCard />
          <StableInvestmentCard />
        </FlexWrapper>

        <FlexWrapper
          xs="10"
          sm="10"
          lg="6"
          md="6"
          type="item"
          justifyContent="center"
          mediaQueries={`
          @media screen and (max-width: 600px) {
              margin-top: 100px;
            }
          `}
        >
          <Card
            height="500px"
            width="420px"
            bgColor="#263D61"
            boxShadow="10px 10px 30px rgba(0, 0, 0, 0.25)"
            borderRadius="20px"
            position="relative"
            flexDirection="column"
            justifyContent="space-evenly"
          >
            <FlexWrapper position="absolute">
              <Image
                src="/home/fourth-section/dash-line.png"
                alt="Calendar"
                width={420}
                height={428}
              />
            </FlexWrapper>
            <CurrencyTabs
              setCurrency={(currency: string) => {
                setCurrency(currency);
              }}
            />
            <CalculateButton
              url={variantLink}
              currency={currency}
              amount={investmentAmount}
            />
            <InvestmentVariantCards
              setCurrentLink={(link: string) => {
                setVariantLink(link);
              }}
            />

            <CalculatorInput
              setInvestmentAmount={(amount: string) => {
                setInvestmentAmount(amount);
              }}
            />
          </Card>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default FourthSection;
