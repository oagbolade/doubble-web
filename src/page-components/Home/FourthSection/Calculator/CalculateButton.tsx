import Link from "next/link";
import styled from "styled-components";
import { Typography, FlexWrapper, Card } from "../../../../shared-components";

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

interface CalculateButtonProps {
  url?: string;
  currency?: string;
  amount?: string;
}
const CalculateButton = (props: CalculateButtonProps) => {
  return (
    <FlexWrapper position="absolute" top="92%">
      <Link
        href={{
          pathname: props.url,
          query: {
            currency: props.currency,
            amount: props.amount,
          },
        }}
      >
        <A>
          <Card
            height="70px"
            width="380px"
            bgColor="#263D61"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25), inset 3px 3px 5px rgba(0, 204, 255, 0.1)"
            borderRadius="10px"
            mediaQueries={`
          @media screen and (max-width: 600px) {
            width: 300px;
          }
          @media screen and (max-width: 400px) {
            width: 275px;
          }
        `}
          >
            <Typography
              fontSize="28px"
              fontWeight="400"
              fontColor="#00CCFF"
              letterSpacing="4px"
            >
              Calculate
            </Typography>
          </Card>
        </A>
      </Link>
    </FlexWrapper>
  );
};

export default CalculateButton;
