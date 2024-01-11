import React, { useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import {
  useFormValidation,
  calculateInvestmentSchema,
  checkValid,
} from "../../utils";

import {
  FlexWrapper,
  Typography,
  Card,
  FormInputV2,
} from "../../shared-components";
import InputButtonGroup from "./InputButtonGroup";
import CreateInvestmentModalBtn from "./CreateInvestmentModal";
import overviewStyles from "../../../styles/overview.module.css";

const Select = styled.select`
  border: 1px solid #e5e5e5;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
`;

export const defaultCalculateState = {
  title: "",
  amount: "",
  type: "",
  month: "",
  currency: "",
  frequency: "",
};

// (e) =>
// setInvestment({
//   ...investment,
//   [e.target.name]: e.target.value,
// })

export interface IInvestment {
  title?: string;
  amount?: string;
  type?: string;
  month?: string;
  currency?: string;
  frequency?: string;
  startDate?: string;
  endDate?: string;
  fundingAccount?: string;
  beneficiaryAccount?: string;
  transactionPIN?: string;
  rollover?: string;
  daoCode?: string;
  targetValue?: string;
  investmentID?: string;
}

export interface ITargetId {
  currency: string;
  id: number;
  interestRate: number;
  max: number;
  min: number;
  targetName: string;
  type: string;
}

export interface IFixedId {
  currency: string;
  id: number;
  interestRate: number;
  maxAmount: number;
  maxTerm: number;
  minAmount: number;
  minTerm: number;
  name: string;
  type: string;
}

const GetStartedModal = (props) => {
  const { handleChange, formValues, errors } = useFormValidation(
    defaultCalculateState,
    calculateInvestmentSchema
  );

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");

  const [investment, setInvestment] = useState<IInvestment>({
    title: "",
    amount: "",
    type: props?.type ? "fixed" : "target",
    month: "30",
    currency: "NGN",
    frequency: "Monthly",
  });

  const { type, month, currency, frequency, ...err } = errors;

  const showModal = () => {
    props.closeTargetModal();
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {props.children ? (
        <span onClick={showModal}>{props.children}</span>
      ) : (
        <button
          className={overviewStyles.createinvestmentbutton}
          style={{ lineHeight: "21px" }}
          onClick={showModal}
          >
          {props.title}
        </button>
      )}
      <Modal
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: 999 }}
        title={null}
        closable={false}
        footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Card
          boxShadow=""
          width="100%"
          height="420px"
          flexDirection="column"
          display="flex"
          borderRadius="0"
          zIndex="999"
        >
          <FlexWrapper width="90%">
            <FormInputV2
              value={formValues.title}
              name="title"
              maxLength={40}
              onChange={handleChange}
              placeholder="Enter Investment Title"
              error={errors.title}
            />
          </FlexWrapper>
          <FlexWrapper width="90%" marginTop="10px" marginBottom="10px">
            <InputButtonGroup
              currency={(c) => setInvestment({ ...investment, currency: c })}
              currencySign={investment.currency}
              value={formValues.amount}
              isMoney={true}
              type="text"
              name="amount"
              maxLength={8}
              onChange={(e) => {
                if (isNaN(Number(e.target.value.replaceAll(/(-|,)/g, "")))) return;
                if (e.target.value.length > 8) return;
                handleChange(e);
              }}
              placeholder="Enter Investment Amount"
              error={errors.amount}
            />
          </FlexWrapper>
          <FlexWrapper width="90%" marginBottom="20px">
            <Select
              value={investment.type}
              name="type"
              onChange={(e) => {
                setInvestment({
                  ...investment,
                  [e.target.name]: e.target.value,
                });
                msg && setMsg("");
              }}
            >
              <option value="target">Target Investment</option>
              <option value="fixed">Fixed Investment</option>
            </Select>
          </FlexWrapper>
          <FlexWrapper width="90%" marginBottom="20px">
            <Select
              value={investment.month}
              name="month"
              onChange={(e) =>
                setInvestment({
                  ...investment,
                  [e.target.name]: e.target.value,
                })
              }
            >
              {investment.type === "target" ? (
                <>
                  <option value="6">6 Months</option>
                  <option value="12">1 Year</option>
                  <option value="24">2 Years</option>
                  <option value="36">3 Years</option>
                  <option value="48">4 Years</option>
                  <option value="60">5 Years</option>
                </>
              ) : (
                <>
                  <option value="30">1 Month</option>
                  <option value="60">2 Months</option>
                  <option value="90">3 Months</option>
                  <option value="180">6 Months</option>
                  <option value="360">1 Year</option>
                </>
              )}
            </Select>
          </FlexWrapper>
          {msg && (
            <FlexWrapper width="90%" marginBottom="10px">
              <Typography
                textAlign="center"
                fontColor="#990000"
                fontSize="16px"
                width="100%"
                fontWeight="500"
              >
                {msg}
              </Typography>
            </FlexWrapper>
          )}
          <CreateInvestmentModalBtn
            investment={{
              ...investment,
              title: formValues.title,
              amount: formValues.amount.replace(/\$\s?|(,*)/g, '')
            }}
            errMsg={(err) => {
              setMsg(
                err === "title"
                  ? "Investment title is required"
                  : err === "amount" && "Investment amount is required"
              );
              setTimeout(() => setMsg(""), 4000);
            }}
            isEditInvestment={false}
            checkValid={checkValid(formValues, err)}
            closeTargetModal={handleCancel}
            fixedAmount={(info) => setMsg(info)}
          />
        </Card>
      </Modal>
    </>
  );
};

GetStartedModal.defaultProps = {
  title: "Let’s Get Started",
};

export default GetStartedModal;
