import Image from "next/image";

import { Typography, FlexWrapper, Card } from "../../../shared-components";

const FlexiblePaymentCard = () => {
  return (
    <FlexWrapper
      width="85%"
      position="relative"
      margin="20px"
      mediaQueries={`
        @media screen and (max-width: 600px) {
          margin: 12px;
        }
      `}
    >
      <FlexWrapper
        position="absolute"
        top="-16px"
        left="-32px"
        mediaQueries={`
          @media screen and (max-width: 600px) {
            display: none;
          }
        `}
      >
        <Image
          src="/home/fourth-section/sheild.png"
          alt="Sheild"
          width={72}
          height={84}
        />
      </FlexWrapper>
      <Card
        width="100%"
        boxShadow="10px 10px 50px rgb(0 0 0 / 30%)"
        mediaQueries={`
          @media screen and (max-width: 600px) {
              padding-left: 20px;
              padding-right: 20px;
            }
        `}
      >
        <Typography
          fontSize="18px"
          fontWeight="400"
          fontColor="#263D61"
          mediaQueries={`
            @media screen and (min-width: 800px) {
              margin: 30px;
            }
            @media screen and (min-width: 1400px) {
              margin: 0;
            }
          `}
        >
          Flexible yet stable investment options all at your finger tips
        </Typography>
      </Card>
    </FlexWrapper>
  );
};

export default FlexiblePaymentCard;
