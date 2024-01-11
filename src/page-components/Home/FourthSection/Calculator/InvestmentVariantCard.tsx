import Image from "next/image";

import { Card, Typography, FlexWrapper } from "../../../../shared-components";

interface InvestmentVariantCardProps {
  topNameText?: string;
  bottomNameText?: string;
  imageUrl?: string;
  handleClick?: () => void;
  currentVariant?: string;
  activeImageUrl?: string;
  activeBgColor?: string;
}

const variantColorMaps = {
  targets: "#FFECCF",
  fixed: "#D6CFFF",
};

const InvestmentVariantCard = (props: InvestmentVariantCardProps) => {
  // "#66768F"
  const isCurrent = props.currentVariant === props.bottomNameText;
  return (
    <Card
      cursor="pointer"
      onClick={props.handleClick}
      height="100px"
      width="125px"
      bgColor={
        isCurrent && variantColorMaps[props.currentVariant.toLowerCase()]
          ? variantColorMaps[props.currentVariant.toLowerCase()]
          : "#263D61"
      }
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25), inset 3px 3px 5px rgba(0, 204, 255, 0.1)"
      borderRadius="10px"
      flexDirection="column"
      justifyContent="space-around"
      mediaQueries={`
        @media screen and (max-width: 400px) {
          width: 95px;
          height: 95px
        }
      `}
    >
      <FlexWrapper flexDirection="column">
        <Typography
          fontWeight="400"
          fontSize="10px"
          fontColor={isCurrent ? "#263E61" : "#66768F"}
        >
          {props.topNameText}
        </Typography>
        <Typography
          fontWeight="700"
          fontSize="14px"
          fontColor={isCurrent ? "#263E61" : "#66768F"}
        >
          {props.bottomNameText}
        </Typography>
      </FlexWrapper>
      <FlexWrapper>
        <Image
          src={isCurrent ? props.activeImageUrl : props.imageUrl}
          alt="Two Coins"
          width={45}
          height={45}
        />
      </FlexWrapper>
    </Card>
  );
};

InvestmentVariantCard.defaultProps = {
  topNameText: "Doubble",
  bottomNameText: "Rewards",
  imageUrl: "/home/fourth-section/doubble-coins.png",
  currentVariant: "Rewards",
};

export default InvestmentVariantCard;
