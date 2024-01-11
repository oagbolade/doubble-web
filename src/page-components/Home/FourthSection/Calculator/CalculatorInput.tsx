import React from "react";
import styled from "styled-components";
import { FlexWrapper, Typography, Card } from "../../../../shared-components";

const CalculatorInputStyle = styled.input`
  font-size: 42px;
  font-weight: 700;
  color: #00ccff;
  width: 80%;
  background: #33486a;
  border: none;
  outline: none;
  text-align: center;
  opacity: 0.5;
`;

interface CalculatorInputProps {
  setInvestmentAmount?: (amount: string) => void;
}

const CalculatorInput = (props: CalculatorInputProps) => {
  const [hasFocus, setFocus] = React.useState(false);
  const [amount, setAmount] = React.useState(
    "1000000000".replace(/^\d+/, (n) =>
      [...n.split("")]
        .map(
          (digit, index, digits) =>
            (!index || (digits.length - index) % 3 ? "" : ",") + digit
        )
        .join("")
    )
  );
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    const modifiedString = value.replace(/,/g, "");
    const numberString = modifiedString.replace(/^\d+/, (number) =>
      [...number.split("")]
        .map(
          (digit, index, digits) =>
            (!index || (digits.length - index) % 3 ? "" : ",") + digit
        )
        .join("")
    );
    setAmount(numberString);
    props.setInvestmentAmount(modifiedString);
  };

  const handleFocus = (e) => {
    setFocus(true);
    setAmount("");
  };
  const handleBlur = (e) => {
    setFocus(false);
  };
  return (
    <FlexWrapper zIndex="1999">
      <Card
        width="380px"
        height="150px"
        bgColor="#33486A"
        borderRadius="10px"
        boxShadow={null}
        mediaQueries={`
          @media screen and (max-width: 600px) {
            width: 300px;
          }
          @media screen and (max-width: 400px) {
            width: 275px;
          }
        `}
      >
        {/* <Typography
          fontSize="42px"
          fontWeight="700"
          fontColor="#00CCFF"
        >
          1,000,000,000
        </Typography> */}
        <CalculatorInputStyle
          type="text"
          value={amount}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            opacity: hasFocus ? 1 : 0.5,
          }}
        />
      </Card>
    </FlexWrapper>
  );
};

export default CalculatorInput;
