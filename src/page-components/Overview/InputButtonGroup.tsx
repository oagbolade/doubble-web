import React, { useEffect, SetStateAction } from "react";
import {
  FlexWrapper,
  FormInput,
  Button,
  Typography,
} from "../../shared-components";
import Image from "next/image";

import { NairaIcon, DollarIcon } from "../../icons";
import { FaBold } from "react-icons/fa";
import { Dispatch } from "react";

interface FormInputProps {
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: any;
  type?: string;
  error?: string;
  currency?: string | any;
  currencySign?: string;
  maxLength?: number;
  isMoney?: boolean;
}

const InputButtonGroup = (props: FormInputProps) => {
  const [currency, setCurrency] = React.useState(props?.currencySign || "NGN");

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
  };

  useEffect(() => {
    setCurrency(props.currencySign);
  }, []);

  return (
    <FlexWrapper width="100%">
      <FormInput
        type={props.type}
        placeholder={props.placeholder}
        variant="outline"
        borderRadius="5px 0px 0px 5px"
        bgColor="transparent"
        border="1px solid #E5E5E5"
        borderRight="none"
        flex="1 0"
        name={props.name}
        error={props.error}
        onChange={props.onChange}
        value={props.value}
        maxLength={props.maxLength}
        height="50px"
        data-ismoney={props.isMoney}
      />
      <Button
        width="51px"
        height="50px"
        borderLeft="none"
        borderRight="none"
        bgColor="transparent"
        borderColor="#E5E5E5"
        onClick={() => {
          props.currency("USD");
          setCurrency("USD");
        }}
      >
        <DollarIcon
          width="30"
          height="35"
          viewBox="0 0 20 30"
          style={{
            fontWeight: "900",
            opacity: currency === "USD" ? "1" : "0.3",
          }}
        />{" "}
      </Button>
      <Typography
        marginTop="13px"
        style={{
          opacity: "0.3",
        }}
      >
        {" "}
        |{" "}
      </Typography>
      <Button
        width="51px"
        height="50px"
        borderRadius="0px 5px 5px 0px"
        borderLeft="none"
        bgColor="transparent"
        borderColor="#E5E5E5"
        onClick={() => {
          props.currency("NGN");
          setCurrency("NGN");
        }}
        style={{ opacity: currency === "NGN" ? "1" : "0.3" }}
      >
        <Image src="/icons/naira.png" alt="Payments" width={13} height={17} />
      </Button>
    </FlexWrapper>
  );
};

export default InputButtonGroup;
