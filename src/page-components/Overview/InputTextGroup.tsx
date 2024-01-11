import React from "react";
import {
  FlexWrapper,
  FormInput,
  Button,
  Typography,
} from "../../shared-components";

import { NairaIcon, DollarIcon } from "../../icons";
import { FaBold } from "react-icons/fa";

interface FormInputProps {
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: any;
  type?: string;
  error?: string;
}

const InputTextGroup = (props: FormInputProps) => {
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
        placeholder={props.placeholder}
        variant="outline"
        borderRadius="5px 0px 0px 5px"
        bgColor="transparent"
        border="1px solid #E5E5E5"
        borderRight="none"
        // onChange={handleAmountChange}
        onChange={props.onChange}
        error={props.error}
        flex="1 0"
        // value={amount}
        value={props.value}
        name={props.name}
        type={props.type}
        height="50px"
      />

      <Button
        width="150px"
        height="50px"
        borderLeft="none"
        borderRight="none"
        bgColor="transparent"
        borderColor="#E5E5E5"
        onClick={() => {
          setCurrency("naira");
        }}
      >
        <Typography
          marginRight="20px"
          cursor="pointer"
          fontColor="#00CCFF"
          fontSize="9px"
        >
          View saved accounts
        </Typography>
      </Button>
    </FlexWrapper>
  );
};

export default InputTextGroup;
