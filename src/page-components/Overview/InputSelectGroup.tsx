import React, { useState } from "react";
import {
  FlexWrapper,
  FormInput,
  Button,
  Typography,
} from "../../shared-components";
import styled from "styled-components";

import { NairaIcon, DollarIcon } from "../../icons";
import { FaBold } from "react-icons/fa";
import { IAccount } from "../Investment/ChangeBeneficiaryModal";
import { httpRequest } from "../../https/http";
import { useAppSelector } from "../../redux/hooks";
import { IInvestment } from "./GetStartedModal";

const Select = styled.select`
  border: 1px solid #e5e5e5;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
`;

interface FormInputProps {
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: any;
  type?: string;
  error?: string;
}

const InputSelectGroup = (props: FormInputProps) => {
  const [currency, setCurrency] = React.useState("naira");
  const [amount, setAmount] = React.useState("");
  const [isRequesting, setIsRequesting] = useState(false);
  const [data, setData] = useState<IAccount[]>([]);

  const { user } = useAppSelector((state) => state.auth);

  const getUserAccounts = async () => {
    try {
      setIsRequesting(true);
      const result: any = await httpRequest({
        url: "Bank/GetAccountsByBVN",
        method: "POST",
        body: {
          platform: 1,
          imei: "string",
          deviceType: "1",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: "string",
          bvn: user?.bvn,
        },
      });

      if (result?.status) {
        setIsRequesting(false);
        setData(result?.data?.ngnAccounts);
      } else {
        setIsRequesting(false);
      }
    } catch ({ message }) {
      console.log("err_dataa", message);

      setIsRequesting(false);
    }
  };

  const [investment, setInvestment] = useState<IInvestment>({
    title: "",
    amount: "",
    type: "",
    month: "",
    currency: "",
    frequency: "",
    startDate: "",
    endDate: "",
    transactionPIN: "",
    daoCode: "",
    fundingAccount: "",
  });

  return (
    <FlexWrapper width="100%">
      <Select
        disabled={investment.type !== "target"}
        value={investment.frequency}
        name="frequency"
        onChange={(e) => {
          setIsRequesting(true);
          setInvestment({ ...investment, frequency: e.target.value });
        }}
      >
        <option value="investment duration">Investment Frequency</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Quarterly">Quarterly</option>
        <option value="Biannually">Biannually</option>
        <option value="Yearly">Yearly</option>
      </Select>

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

export default InputSelectGroup;
