import React from "react";
import { FlexWrapper, FormInput, Button } from "../../shared-components";

import { NairaIcon, DollarIcon } from "../../icons";

const InputButtonGroup = () => {
  const [currency, setCurrency] = React.useState("naira");
  const [amount, setAmount] = React.useState("");

  const handleAmountChange = (e) => {
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
  };
  return (
    <FlexWrapper width="100%">
      <FormInput
        placeholder="100,000,000.00"
        variant="outline"
        borderRadius="5px 0px 0px 5px"
        bgColor="transparent"
        border="1px solid #E5E5E5"
        flex="1 0"
        onChange={handleAmountChange}
        value={amount}
        height="50px"
      />
      <Button
        width="51px"
        height="50px"
        borderLeft="none"
        borderRight="none"
        bgColor="transparent"
        borderColor="#E5E5E5"
        onClick={() => {
          setCurrency("naira");
        }}
      >
        <NairaIcon
          width="20"
          height="30"
          viewBox="0 0 20 30"
          style={{
            opacity: currency === "naira" ? "1" : "0.3",
          }}
        />
      </Button>
      <Button
        width="51px"
        height="50px"
        borderRadius="0px 5px 5px 0px"
        borderLeft="none"
        bgColor="transparent"
        borderColor="#E5E5E5"
        onClick={() => {
          setCurrency("dollar");
        }}
      >
        <DollarIcon
          width="20"
          height="30"
          viewBox="0 0 20 30"
          style={{
            opacity: currency === "dollar" ? "1" : "0.3",
          }}
        />
      </Button>
    </FlexWrapper>
  );
};

export default InputButtonGroup;
