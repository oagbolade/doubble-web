import React from "react";
import { FlexWrapper } from "../../../../shared-components";
import InvestmentVariantCard from "./InvestmentVariantCard";

// {
//   topNameText: "Doubble",
//   bottomNameText: "Rewards",
//   imageUrl: "/home/fourth-section/doubble-coins.png"
// }
const variants = [
  {
    topNameText: "Doubble",
    bottomNameText: "Targets",
    link: "/overview/calculate-doubble-targets",
    imageUrl: "/home/fourth-section/shaded-dartboard.png",
    activeImageUrl: "/home/fourth-section/dart-color.png",
    activeBgColor: "#FFECCF",
  },
  {
    topNameText: "Doubble",
    bottomNameText: "Fixed",
    link: "/overview/calculate-fixed-investments",
    imageUrl: "/home/fourth-section/shaded-cactus.png",
    activeImageUrl: "/home/fourth-section/cactus-color.png",
    activeBgColor: "#D6CFFF",
  },
];
interface InvestmentVariantCardsProps {
  setCurrentLink?: (link: string) => void;
}
const InvestmentVariantCards = (props: InvestmentVariantCardsProps) => {
  const [currentVariant, setCurrentVariant] = React.useState("Targets");
  return (
    <FlexWrapper
      flexDirection="row"
      justifyContent="space-around"
      zIndex="1999"
      width="100%"
    >
      {variants.map((variant) => (
        <InvestmentVariantCard
          key={`${variant.imageUrl}`}
          topNameText={variant.topNameText}
          bottomNameText={variant.bottomNameText}
          imageUrl={variant.imageUrl}
          currentVariant={currentVariant}
          activeBgColor={variant.activeBgColor}
          activeImageUrl={variant.activeImageUrl}
          handleClick={() => {
            setCurrentVariant(variant.bottomNameText);
            props.setCurrentLink(variant.link);
          }}
        />
      ))}
    </FlexWrapper>
  );
};

export default InvestmentVariantCards;
