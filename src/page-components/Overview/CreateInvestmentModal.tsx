import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { Modal } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import Image from "next/image";
import overviewStyles from "../../../styles/overview.module.css";

import { checkValidator } from "../../utils";

import {
  FlexWrapper,
  Typography,
  Card,
  FormInputV2,
} from "../../shared-components";
import InputButtonGroup from "./InputButtonGroup";
import { httpRequest, HTTPResponse } from "../../https/http";
import { IInvestment } from "./GetStartedModal";
import {
  currentDate,
  daysAfter,
  formatCurrency,
  getUserAccounts,
} from "../../utils/utilities";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { IAccount } from "../Investment/ChangeBeneficiaryModal";
import { IFixed, ITarget } from "../../types/Investment";
import {
  createFixedInvestment,
  createTargetInvestment,
  editFixedInvestment,
  editTargetInvestment,
} from "../../redux/investment/investmentAction";
import { FaPencilAlt } from "react-icons/fa";

const Select = styled.select`
  border: 1px solid #e5e5e5;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
`;

export const defaultInvestState = {
  title: "",
  amount: "",
  type: "",
  month: "",
  currency: "",
  frequency: "",
  fundingAccount: "",
  fundingBank: "",
  beneficiaryAcct: "",
  beneficiaryBank: "",
};

interface ICreateInvst extends IInvestment {
  closeTargetModal?: () => void;
  checkValid?: { isValid: boolean; type: string };
  investment?: IInvestment | any;
  isEditInvestment?: boolean;
  errMsg?: (msg: string) => void;
  fixedAmount?: (mgs: string) => void;
  onClick?: any;
}

const CreateInvestmentModal = (props: ICreateInvst) => {
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [productID, setProductID] = useState<number>(0);
  const [data, setData] = useState<IAccount[]>([]);

  const router = useRouter();

  const [targetAndFixId, setTargetAndFixId] = useState({
    target: [],
    fixed: [],
  });

  const [investment, setInvestment] = useState<IInvestment>({
    title: "",
    amount: "",
    type: "",
    month: "",
    currency: "",
    frequency: "",
    startDate: "",
    endDate: "",
    fundingAccount: "",
    beneficiaryAccount: "",
    rollover: "",
    transactionPIN: "",
    daoCode: "",
    targetValue: "",
  });

  useEffect(() => {
    if (props.isEditInvestment) {
      const { investment: eInvestment } = props;
      setInvestment({
        ...investment,
        title: eInvestment.title,
        amount: eInvestment.amount,
        type: eInvestment.type,
        month: eInvestment.month,
        currency: eInvestment.currency,
        frequency: eInvestment.frequency,
        startDate: eInvestment.startDate,
        endDate: eInvestment.endDate,
        fundingAccount: eInvestment.beneficiaryAccount,
        beneficiaryAccount: eInvestment.beneficiaryAccount,
        rollover: "",
        transactionPIN: "",
        daoCode: eInvestment.daoCode,
        targetValue: "",
      });
      loadTargetAndFixedId();
      getTargetData(eInvestment);
      getFixedData(eInvestment);
    }
  }, [props.isEditInvestment]);

  const { user } = useAppSelector((state) => state.auth);
  const {
    loading,
    error: newError,
    createInvestment: { success, message },
  } = useAppSelector((state) => state.investment);

  const [allTargetInvestment, setAllTargetInvestment] = useState<ITarget>([]);
  const [allFixedInvestment, setAllFixedInvestment] = useState<IFixed>({
    currency: "",
    fixedAmount: "",
    interest: "",
    term: 0,
    totalIncome: "",
  });

  const [totalAmount, setTotalAmount] = useState<string | number>(0);

  const getTargetInvestment = (data, currency, frequency) => {
    if (data && currency) {
      const amt = data.filter(
        (d) => d.currency === currency && d.frequency === frequency
      );
      if (amt[0].totalInterest) {
        setTotalAmount(amt[0].totalInterest);
        setInvestment({
          ...investment,
          targetValue: amt[0].totalInterest.replace(",", ""),
        });
      }
    }
  };

  useEffect(() => {
    if (allTargetInvestment.length) {
      getTargetInvestment(
        allTargetInvestment,
        investment.currency,
        investment.frequency
      );
      setIsRequesting(false);
    }
  }, [
    allTargetInvestment,
    investment.currency,
    investment.frequency,
    investment.amount,
  ]);

  const getProductId = async (type) => {
    const res: HTTPResponse<ITarget> = await httpRequest({
      url: "Explorer/ProductList ",
      method: "POST",
    });

    if (res.status) {
      res.data.forEach((pType: any) => {
        if (pType.productName.toLowerCase() === type.toLowerCase()) {
          setProductID(Number(pType.id));
        }
      });
    }
  };

  const getTargetData = async ({ amount, type, month, currency }) => {
    try {
      const res: HTTPResponse<ITarget> = await httpRequest({
        url: "TargetInvestment/TargetMultipleCalculation",
        method: "POST",
        body: {
          month: Number(month),
          targetAmount: Number(amount.toString().replace(/\$\s?|(,*)/g, "")),
        },
      });

      res?.data && Object.keys(res?.data).length > 0 && setIsRequesting(false);
      setAllTargetInvestment(res?.data);
      getProductId(props.investment.type);
    } catch (err) {
      console.log("getTargetDataError", err);
    }
  };

  const getFixedData = async ({ amount, month, currency }) => {
    const res: HTTPResponse<ITarget> = await httpRequest({
      url: "FixedInvestment/FixedCalculation",
      method: "POST",
      body: {
        platform: 1,
        imei: "string",
        deviceType: "1",
        deviceManufacturer: "string",
        deviceModel: "string",
        deviceIP: "string",
        deviceName: "string",
        fixedAmount: Number(amount.toString().replace(/\$\s?|(,*)/g, "")),
        currency,
        term: Number(month),
      },
    });
    res?.data && res?.message?.length > 0 && setIsRequesting(false);
    setAllFixedInvestment({ ...allFixedInvestment, ...res?.data });
    getProductId(props.investment.type);
  };

  const loadTargetAndFixedId = async () => {
    const result: any = await httpRequest({
      url: "FixedInvestment/FetchFixedType",
      method: "POST",
    });

    const res: any = await httpRequest({
      url: "TargetInvestment/FetchTargetType",
      method: "POST",
    });
    if (result?.status && res?.status)
      setTargetAndFixId({ target: res.data, fixed: result.data });
  };

  const showModal = () => {
    if (!props.checkValid.isValid) return props.errMsg(props.checkValid.type);
    if (!props.investment.amount || props.investment.amount < 1)
      return props.errMsg("amount");
    if (
      props.investment.type === "fixed" &&
      props.investment.currency === "NGN"
    ) {
      if (Number(props.investment.amount) <= 49999) {
        props.fixedAmount(`Fixed amount must be #50,000 and above`);
        return false;
      }
    }
    if (
      props.investment.type === "fixed" &&
      props.investment.currency === "USD"
    ) {
      if (Number(props.investment.amount) <= 499) {
        props.fixedAmount(`Fixed amount must be $500 and above`);
        return false;
      }
    }
    setIsRequesting(true);
    props.closeTargetModal();
    setIsModalVisible(true);
    setInvestment({ ...investment, ...props.investment });
    loadTargetAndFixedId();
    if (props.investment.type === "target") {
      getTargetData(props.investment);
      getFixedData({ ...props.investment, month: 30 });
    } else {
      getFixedData(props.investment);
      getTargetData({ ...props.investment, month: 6 });
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setInvestment({
      title: "",
      amount: "",
      type: "",
      month: "",
      currency: "",
      frequency: "Monthly",
      startDate: "",
      endDate: "",
      fundingAccount: "",
      beneficiaryAccount: "",
      rollover: "",
      transactionPIN: "",
      daoCode: "",
    });
    dispatch({ type: "CREATE_INVESTMENT_CLEAR" });
  };

  //create investment Validator///////////////////////////////////////
  /////////////////////////////////////////////////////
  const investmentValidator = (newInvestment: IInvestment) => {
    const { isValid, error } = checkValidator(newInvestment);
    if (!isValid) return { check: false, error };
    return { check: true, error };
  };

  const handleSubmit = () => {
    const isValid = investmentValidator(investment);
    if (!isValid.check) {
      dispatch({
        type: "FETCH_INVESTMENT_DETAIL_FAILED",
        payload: isValid.error,
      });
      return false;
    } else {
      dispatch({ type: "CLEAR_INVESTMENT_ERROR" });
    }
    const newInfo = {
      userId: user.userId,
      bvn: user.bvn,
      emailAddress: user.emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    if (props.isEditInvestment === true) {
      if (investment.type === "fixed") {
        dispatch(
          editFixedInvestment(
            investment,
            productID,
            newInfo,
            targetAndFixId.fixed
          )
        );
      } else {
        investment.targetValue = allFixedInvestment.totalIncome;
        dispatch(
          editTargetInvestment(
            investment,
            productID,
            newInfo,
            targetAndFixId.target
          )
        );
      }
    } else {
      if (investment.type === "fixed") {
        dispatch(
          createFixedInvestment(
            investment,
            productID,
            newInfo,
            targetAndFixId.fixed
          )
        );
      } else {
        investment.targetValue = allFixedInvestment.totalIncome;
        dispatch(
          createTargetInvestment(
            investment,
            productID,
            newInfo,
            targetAndFixId.target
          )
        );
      }
    }
  };

  useEffect(() => {
    const getAccount = async () => {
      const { success, data } = await getUserAccounts(user?.bvn);
      if (success) setData(data);
    };
    getAccount();
  }, []);

  useEffect(() => {
    if (investment.startDate) {
      calculateEndDate();
    }
  }, [investment.startDate, investment.type, investment.month]);

  useEffect(() => {
    if (investment.type === "target") {
      setInvestment({ ...investment, month: "6" });
    } else {
      setInvestment({ ...investment, month: "30" });
    }
  }, [investment.type]);

  const calculateEndDate = () => {
    const days =
      investment.type === "target"
        ? Number(investment.month) * 30
        : Number(investment.month);
    const enddate = daysAfter(days, investment.startDate);
    setInvestment((prev) => ({ ...prev, endDate: enddate }));
  };

  return (
    <>
      <button
        onClick={showModal}
        style={{
          width: "70%",
          height: "50px",
          background: "#263E61",
          color: "#00CCFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          margin: "10px",
        }}
      >
        {props.isEditInvestment === true ? (
          <span className="px-3">
            {!isRequesting ? (
              <FaPencilAlt fontSize="20px" className="text-primary-blue" />
            ) : (
              <Image
                src="/load.gif"
                alt="Fixed investment"
                width={30}
                height={30}
              />
            )}
          </span>
        ) : (
          <>
            <Typography fontColor="#00CCFF">Calculate Investment</Typography>
            {isRequesting && (
              <FlexWrapper marginLeft="8px">
                <Image
                  src="/load.gif"
                  alt="Fixed investment"
                  width={25}
                  height={25}
                />
              </FlexWrapper>
            )}
          </>
        )}
      </button>
      <Modal
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
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
          height="auto"
          flexDirection="column"
          display="flex"
          borderRadius="0"
        >
          <FlexWrapper width="90%">
            <FormInputV2
              placeholder="Investment title"
              value={investment.title}
              maxLength={40}
              name="title"
              onChange={({ target }) =>
                setInvestment({ ...investment, [target.name]: target.value })
              }
              style={{textTransform: "capitalize"}}
            />
          </FlexWrapper>
          <FlexWrapper width="90%" marginTop="10px" marginBottom="10px">
            <InputButtonGroup
              currency={(c) => setInvestment({ ...investment, currency: c })}
              currencySign={investment.currency}
              placeholder="Investment amount"
              value={investment.amount}
              isMoney={true}
              name="amount"
              maxLength={8}
              onChange={({ target }) => {
                if (isNaN(Number(target.value.replaceAll(/(-|,)/g, ""))))
                  return;
                if (target.value.length > 8) return;
                const value =
                  target.value && target.value !== "0"
                    ? formatCurrency(
                        Number(target.value.replaceAll(/(-|,)/g, "")),
                        0
                      )
                    : "";
                setInvestment({
                  ...investment,
                  [target.name]: value,
                });
                investment.type === "target"
                  ? getTargetData({
                      ...props.investment,
                      month: investment.month,
                      amount: target.value.replaceAll("-", ""),
                    })
                  : getFixedData({
                      ...props.investment,
                      month: investment.month,
                      amount: target.value.replaceAll("-", ""),
                    });
              }}
            />
          </FlexWrapper>
          <FlexWrapper width="90%" marginBottom="20px">
            <Select
              value={investment.type}
              name="type"
              onChange={({ target }) =>
                setInvestment({
                  ...investment,
                  [target.name]: target.value,
                })
              }
            >
              <option value="target">Target Investment</option>
              <option value="fixed">Fixed Investment</option>
            </Select>
          </FlexWrapper>
          <FlexWrapper width="90%" marginBottom="50px">
            <Select
              value={investment.month}
              name="month"
              onChange={(e) => {
                setIsRequesting(true);
                setInvestment({ ...investment, month: e.target.value });
                if (investment.type === "target") {
                  getTargetData({ ...props.investment, month: e.target.value });
                } else {
                  getFixedData({ ...props.investment, month: e.target.value });
                }
              }}
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

          <FlexWrapper
            width="90%"
            marginBottom="20px"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            {isRequesting && (
              <span>
                <Image
                  src="/loader.gif"
                  alt="Fixed investment"
                  width={40}
                  height={40}
                />
              </span>
            )}
          </FlexWrapper>

          <FlexWrapper width="90%" marginBottom="20px">
            <Typography
              textAlign="center"
              fontColor="#263D61"
              fontSize="14px"
              width="100%"
            >
              {investment.type === "fixed"
                ? "Total Earnings"
                : "Total Investment"}
            </Typography>
          </FlexWrapper>
          <FlexWrapper width="90%" marginBottom="20px">
            <Typography
              textAlign="center"
              fontColor="#263D61"
              fontSize="25px"
              width="100%"
              fontWeight="500"
            >
              {investment.currency === "NGN" ? "₦" : "$"}

              {investment.type === "target"
                ? totalAmount
                : formatCurrency(Number(allFixedInvestment.totalIncome))}
            </Typography>
          </FlexWrapper>

          {investment.type === "target" && (
            <FlexWrapper width="90%" marginBottom="20px">
              <small className="mb-2">Investment Frequency</small>
              <Select
                value={investment.frequency}
                name="frequency"
                onChange={(e) => {
                  setIsRequesting(true);
                  setInvestment({ ...investment, frequency: e.target.value });
                }}
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly" selected>
                  Monthly
                </option>
                <option value="Quarterly">Quarterly</option>
                <option value="Biannually">Biannually</option>
                {investment.type !== "target" && investment.month === "6" ? (
                  ""
                ) : (
                  <option value="Yearly">Yearly</option>
                )}
              </Select>
            </FlexWrapper>
          )}

          <FlexWrapper width="90%" marginBottom="20px" flexDirection="row">
            <FlexWrapper>
              <FormInputV2
                title="Start Date"
                value={investment.startDate}
                min={currentDate()}
                name="startDate"
                onChange={({ target }) =>
                  setInvestment({
                    ...investment,
                    [target.name]: target.value,
                  })
                }
                type="date"
              />
            </FlexWrapper>
            <FlexWrapper
              alignItems="center"
              paddingLeft="20px"
              paddingRight="20px"
            >
              <Typography>-</Typography>
            </FlexWrapper>
            <FlexWrapper>
              <FormInputV2
                title="End Date"
                value={investment.endDate}
                name="endDate"
                disabled={true}
                type="date"
              />
            </FlexWrapper>
          </FlexWrapper>
          {!user?.userId && (
            <button
              className={overviewStyles.createinvestmentbutton}
              style={{ lineHeight: "21px" }}
              onClick={() => router.push("/login")}
              disabled={loading}
            >
              Login to Proceed
            </button>
          )}
          {user?.userId && (
            <Fragment>
              <FlexWrapper width="90%" marginBottom="20px">
                <Select
                  value={investment.fundingAccount}
                  name="fundingAccount"
                  onChange={(e) =>
                    setInvestment({
                      ...investment,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option value="">
                    {data.length > 0
                      ? "Funding Account"
                      : "Fetching Funding Account..."}
                  </option>
                  {data.length &&
                    data.map((info: IAccount, i: number) => (
                      <option key={i} value={info.account.split(" ")[0]}>
                        {info.account} - ₦{formatCurrency(Number(info.balance))}
                      </option>
                    ))}
                </Select>
              </FlexWrapper>
              <FlexWrapper width="90%" marginBottom="20px">
                <Select
                  value={investment.beneficiaryAccount}
                  name="beneficiaryAccount"
                  onChange={(e) =>
                    setInvestment({
                      ...investment,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option value="">
                    {data.length > 0
                      ? "Beneficiary Account"
                      : "Fetching Beneficiary Account..."}
                  </option>
                  {data.length &&
                    data.map((info: IAccount, i: number) => (
                      <option key={i} value={info.account.split(" ")[0]}>
                        {info.account} - ₦{formatCurrency(Number(info.balance))}
                      </option>
                    ))}
                </Select>
              </FlexWrapper>
              <FlexWrapper width="90%" marginBottom="20px">
                <Select
                  value={investment.rollover}
                  name="rollover"
                  onChange={(e) =>
                    setInvestment({
                      ...investment,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option value="">Select Rollover</option>
                  <option value="0">No</option>
                  <option value="1">Principal only</option>
                  <option value="2">Principal and Interest</option>
                </Select>
              </FlexWrapper>
              <FlexWrapper width="90%">
                <FormInputV2
                  placeholder="Enter Transaction pin"
                  value={investment.transactionPIN}
                  name="transactionPIN"
                  type="password"
                  maxLength={4}
                  onChange={({ target }) => {
                    if (isNaN(Number(target.value))) return;
                    setInvestment({
                      ...investment,
                      [target.name]: target.value,
                    });
                  }}
                />
              </FlexWrapper>
              <FlexWrapper width="90%">
                <FormInputV2
                  placeholder="Enter DAO Referal Code"
                  value={investment.daoCode}
                  name="daoCode"
                  onChange={({ target }) =>
                    setInvestment({
                      ...investment,
                      [target.name]: target.value,
                    })
                  }
                />
              </FlexWrapper>

              {newError.length > 0 && (
                <FlexWrapper width="90%" marginTop="10px">
                  <Typography
                    textAlign="center"
                    fontColor="#990000"
                    fontSize="16px"
                    width="100%"
                    fontWeight="500"
                  >
                    {newError}
                  </Typography>
                </FlexWrapper>
              )}
              {message?.length > 0 && (
                <FlexWrapper width="90%" marginTop="10px">
                  <Typography
                    textAlign="center"
                    fontColor={success ? "#00CCFF" : "#990000"}
                    fontSize="16px"
                    width="100%"
                    fontWeight="500"
                  >
                    {message}
                  </Typography>
                </FlexWrapper>
              )}
              {success ? (
                <button
                  style={{
                    width: "70%",
                    height: "50px",
                    background: "#263E61",
                    color: "#00CCFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    margin: "10px",
                  }}
                  onClick={handleCancel}
                >
                  <Typography fontColor="#00CCFF">Close</Typography>
                </button>
              ) : (
                <button
                  style={{
                    width: "70%",
                    height: "50px",
                    background: "#263E61",
                    color: "#00CCFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    border: "none",
                    cursor: user?.userId ? "pointer" : "not-allowed",
                    margin: "20px 10px 10px 10px",
                  }}
                  disabled={!user?.userId}
                  onClick={user?.userId ? handleSubmit : () => {}}
                >
                  <Typography fontColor="#00CCFF">
                    {props.isEditInvestment ? "Update" : "Invest"} Now
                  </Typography>
                  {loading && (
                    <FlexWrapper marginLeft="8px">
                      <Image
                        src="/load.gif"
                        alt="Fixed investment"
                        width={25}
                        height={25}
                      />
                    </FlexWrapper>
                  )}
                </button>
              )}
            </Fragment>
          )}
        </Card>
      </Modal>
    </>
  );
};

export default CreateInvestmentModal;
