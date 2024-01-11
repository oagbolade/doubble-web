import { ITransactionPIN } from "./../../types/settings";
import { AppDispatchProps } from "../../types/index";
import { Dispatch } from "redux";
import * as settingsTypes from "./settingsTypes";
import { httpRequest } from "../../https/http";
import { IForgotPwd } from "../../types/settings";
import { investmentType } from "../investment/investmentAction";
import {
  checkIsActive,
  checkIsFuture,
  cleanNumber,
  getNextEarning,
} from "../../utils/utilities";

export const checkType = (type) => {
  switch (type) {
    case "Active Fixed":
      return "Doubble Fixed";
    case "Active Fixed":
      return "Doubble Fixed";
    case "Active Fixed":
      return "Doubble Fixed";
    case "Active Fixed":
      return "Doubble Fixed";
    default:
      return type;
  }
};

export const changePassword = (obj: IForgotPwd) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: settingsTypes.FETCHING_CHANGE_PWD });
    const result: any = await httpRequest({
      url: "Account/ChangePassword",
      method: "POST",
      body: {
        platform: 1,
        imei: "string",
        deviceType: "1",
        deviceManufacturer: "string",
        deviceModel: "string",
        deviceIP: "string",
        deviceName: "string",
        userId: obj.userId,
        username: obj.username,
        emaillAddress: obj.emaillAddress,
        firstName: obj.firstName,
        oldPassword: obj.old,
        password: obj.new,
        confirmPassword: obj.confirm,
        isMobile: true,
      },
    });

    if (result?.status === true) {
      dispatch({
        type: settingsTypes.CHANGE_PWD_COMPLETE,
        payload: result?.message,
      });
    } else {
      dispatch({
        type: settingsTypes.CHANGE_PWD_ERROR,
        payload: result?.message || "Something went wrong!",
      });
    }
  } catch ({ message }) {
    dispatch({
      type: settingsTypes.CHANGE_PWD_ERROR,
      payload: message || "Something went wrong!",
    });
  }
};

//reset transaction PIN////
/////////////////////////////
export const changeTransactionPIN = (obj: ITransactionPIN) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: settingsTypes.FETCHING_TRANSACTION_PIN });
    const result: any = await httpRequest({
      url: "Account/ResetPIN",
      method: "POST",
      body: {
        platform: 1,
        imei: "string",
        deviceType: "1",
        deviceManufacturer: "string",
        deviceModel: "string",
        deviceIP: "string",
        deviceName: "string",
        userId: obj.userId,
        questionId: Number(obj.ques),
        answer: obj.ans,
        newPIN: obj.new,
        confirmPIN: obj.confirm,
      },
    });

    if (result?.status === true) {
      dispatch({
        type: settingsTypes.TRANSACTION_PIN_COMPLETE,
        payload: result?.message,
      });
    } else {
      dispatch({
        type: settingsTypes.TRANSACTION_PIN_ERROR,
        payload: result?.message || "Something went wrong!",
      });
    }
  } catch ({ message }) {
    dispatch({
      type: settingsTypes.TRANSACTION_PIN_ERROR,
      payload: message || "Something went wrong!",
    });
  }
};

////////GET SECIRTY QUESTION//////////
///////////////////////////////

export const getSecrityQuestions = () => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: settingsTypes.FETCHING_SECURITY_QUES });
    const result: any = await httpRequest({
      url: "Account/SecurityQuestions",
      method: "POST",
    });

    if (result?.status === true) {
      dispatch({
        type: settingsTypes.SECURITY_QUES_COMPLETE,
        payload: result?.data,
      });
    } else {
      dispatch({
        type: settingsTypes.SECURITY_QUES_ERROR,
        payload: result?.message || "Something went wrong!",
      });
    }
  } catch ({ message }) {
    dispatch({
      type: settingsTypes.SECURITY_QUES_ERROR,
      payload: message || "Something went wrong!",
    });
  }
};

////////GET SECIRTY QUESTION BY USERID//////////
///////////////////////////////

export const getSecrityQuestionsByUserID = (userId) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: settingsTypes.FETCHING_SECURITY_QUES });
    const result: any = await httpRequest({
      url: "Account/SecurityQuestionsByUserId",
      method: "POST",
      body: {
        platform: 1,
        imei: "string",
        deviceType: "1",
        deviceManufacturer: "string",
        deviceModel: "string",
        deviceIP: "string",
        deviceName: "string",
        userId,
      },
    });

    if (result?.status === true) {
      dispatch({
        type: settingsTypes.SECURITY_QUES_COMPLETE,
        payload: result?.data,
      });
    } else {
      dispatch({
        type: settingsTypes.SECURITY_QUES_ERROR,
        payload: result?.message || "Something went wrong!",
      });
    }
  } catch ({ message }) {
    dispatch({
      type: settingsTypes.SECURITY_QUES_ERROR,
      payload: message || "Something went wrong!",
    });
  }
};

////////GET ALL ACTIVE INVESTMENT//////////
////////////////////////////////////////

export const getAllActiveInvestment = (userId) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: settingsTypes.FETCHING_ALL_ACTIVE_INVEST });
    const activeFixedURL = "FixedInvestment/ListofActiveFixed";
    const activeTargetURL = "TargetInvestment/ListofActiveTarget";
    const fixed: any = await investmentType(activeFixedURL, userId);
    const target: any = await investmentType(activeTargetURL, userId);
    if (fixed?.status && target.status) {
      const fixedArrar =
        fixed?.result?.data?.length > 0
          ? fixed?.result?.data
              .filter((_d) => checkIsActive(_d.maturityDate) === true)
              .map((r) => {
                const isActive = checkIsActive(r.maturityDate);
                if (isActive) {
                  return {
                    title: r.purpose,
                    type: "Active Fixed",
                    investmentAmount: cleanNumber(r.payInAmount),
                    maturityDate: r.maturityDate,
                    effectiveDate: r.effectiveDate,
                    investmentID: r.investmentID,
                    totalContribution: cleanNumber(r.futureValue),
                    nextEarning:
                      getNextEarning(r.maturityDate) > 0
                        ? getNextEarning(r.maturityDate)
                        : 0,
                    frequency:
                      r.term === 30
                        ? "Monthly"
                        : r.term > 60
                        ? "Biannually"
                        : "Quarterly",
                    intrest: r.interestEarned.split(" ")[1],
                    timeline: { start: 3, end: 10 },
                    status: "active",
                    currency: r.currency,
                    beneficiaryName: r.beneficiaryName,
                    beneficiaryAccount: r.beneficiaryAccount,
                  };
                }
              })
          : [];
      const targetArrar =
        target?.result?.data?.length > 0
          ? target?.result?.data
              .filter((_d) => checkIsActive(_d.maturityDate) === true)
              .map((r) => ({
                title: r.purpose,
                type: "Active Target",
                investmentAmount: cleanNumber(r.investmentValue),
                maturityDate: r.maturityDate,
                nextEarning:
                  getNextEarning(r.maturityDate) > 0
                    ? getNextEarning(r.maturityDate)
                    : 0,
                effectiveDate: r.effectiveDate,
                investmentID: r.investment_ID,
                totalContribution: cleanNumber(r.contributions),
                frequency: r.frequency,
                intrest: Math.floor(r.interest),
                timeline: {
                  start: 1,
                  end: r.term,
                },
                status: "active",
                currency: r.currency,
                beneficiaryName: r.beneficiaryName,
                beneficiaryAccount: r.beneficiaryAccount,
              }))
          : [];
      const activeInestments = [...fixedArrar, ...targetArrar];
      const allCount = activeInestments.length;
      dispatch({
        type: settingsTypes.FETCHED_ALL_ACTIVE_INVEST,
        payload: { count: allCount, data: activeInestments },
      });
    } else {
      console.log("settingsActionError", "No Active Investment Found");
    }
  } catch ({ message }) {
    console.log("settingsActionError", message);
  }
};

////////GET ALL FUTURE INVESTMENT//////////
////////////////////////////////////////

export const getAllFutureInvestment = (userId) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: settingsTypes.FETCHING_ALL_FUTURE_INVEST });
    const futureFixedURL = "FixedInvestment/ListofFutureFixed";
    const futureTargetURL = "TargetInvestment/ListofFutureTarget";
    const fixed: any = await investmentType(futureFixedURL, userId);
    const target: any = await investmentType(futureTargetURL, userId);
    if (fixed?.status) {
      const fixedArrar =
        fixed?.result?.data?.length > 0
          ? fixed?.result?.data
              .filter((_d) => checkIsFuture(_d.effectiveDate) === true)
              .map((r) => ({
                title: r.purpose,
                type: "Future Fixed",
                investmentAmount: cleanNumber(r.payInAmount),
                nextEarning:
                  getNextEarning(r.maturityDate) > 0
                    ? getNextEarning(r.maturityDate)
                    : 0,
                maturityDate: r.maturityDate,
                effectiveDate: r.effectiveDate,
                investmentID: r.investment_ID,
                totalContribution: cleanNumber(r.futureValue),
                frequency:
                  r.term === 30
                    ? "Monthly"
                    : r.term > 60
                    ? "Biannually"
                    : "Quarterly",
                intrest:
                  cleanNumber(r.futureValue) - cleanNumber(r.payInAmount),
                timeline: {
                  start: 0,
                  end: r.term / 30 > 0 ? Math.floor(r.term / 30) : 1,
                },
                status: "pending",
                currency: r.currency,
                beneficiaryName: r.beneficiaryName,
                beneficiaryAccount: r.beneficiaryAccount,
              }))
          : [];
      const targetArrar =
        target?.result?.data?.length > 0
          ? target?.result?.data
              .filter((_d) => checkIsFuture(_d.effectiveDate) === true)
              .map((r) => ({
                title: r.purpose,
                type: "Future Target",
                maturityDate: r.maturityDate,
                effectiveDate: r.effectiveDate,
                investmentID: r.investment_ID,
                totalContribution: r.targetValue + r.payInAmount,
                frequency: r.frequency,
                nextEarning:
                  getNextEarning(r.maturityDate) > 0
                    ? getNextEarning(r.maturityDate)
                    : 0,
                investmentAmount: Math.floor(r.targetValue),
                intrest: Math.floor(r.interest),
                timeline: {
                  start: 0,
                  end: r.term,
                },
                status: "pending",
                currency: r.currency,
                beneficiaryName: r.beneficiaryName,
                beneficiaryAccount: r.beneficiaryAccount,
              }))
          : [];

      const futureInestment = [...fixedArrar, ...targetArrar];
      const allCount = futureInestment.length;
      dispatch({
        type: settingsTypes.FETCHED_ALL_FUTURE_INVEST,
        payload: { count: allCount, data: futureInestment },
      });
    } else {
      console.log("settingsActionError", "No Active Investment Found");
    }
  } catch ({ message }) {
    console.log("settingsActionError", message);
  }
};

////////GET ALL COMPLETED INVESTMENT//////////
////////////////////////////////////////

export const getAllCompletedInvestment = (userId) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: settingsTypes.FETCHING_ALL_COMPLETED_INVEST });
    const targetURL = "TargetInvestment/ListofCompletedTarget";
    const fixedURL = "FixedInvestment/ListofCompletedFixed";
    const target: any = await investmentType(targetURL, userId);
    const fixed: any = await investmentType(fixedURL, userId);
    if (target?.status && fixed?.status) {
      const fixedArrar = fixed?.result?.data?.map((r) => ({
        title: r.purpose,
        type: "Completed Fixed",
        investmentAmount: cleanNumber(r.payInAmount),
        nextEarning:
          getNextEarning(r.maturityDate) > 0
            ? getNextEarning(r.maturityDate)
            : 0,
        maturityDate: r.maturityDate,
        effectiveDate: r.effectiveDate,
        investmentID: r.investmentID,
        totalContribution: cleanNumber(r.futureValue),
        frequency:
          r.term === 30 ? "Monthly" : r.term > 60 ? "Biannually" : "Quarterly",
        intrest: cleanNumber(r.futureValue) - cleanNumber(r.payInAmount),
        timeline: {
          start: 1,
          end: r.term / 30 > 0 ? Math.floor(r.term / 30) : 1,
        },
        status: "completed",
        currency: r.currency,
        beneficiaryName: r.beneficiaryName,
        beneficiaryAccount: r.beneficiaryAccount,
      }));

      const targetArrar = target?.result?.data?.map((r) => ({
        title: r.purpose,
        type: "Completed Target",
        maturityDate: r.maturityDate,
        effectiveDate: r.effectiveDate,
        investmentID: r.investmentID,
        totalContribution: r.targetValue + r.payInAmount,
        frequency: r.frequency,
        nextEarning:
          getNextEarning(r.maturityDate) > 0
            ? getNextEarning(r.maturityDate)
            : 0,
        investmentAmount: Math.floor(r.targetValue),
        intrest: Math.floor(r.interest),
        timeline: {
          start: 1,
          end: r.term,
        },
        status: "completed",
        currency: r.currency,
        beneficiaryName: r.beneficiaryName,
        beneficiaryAccount: r.beneficiaryAccount,
      }));

      const completedInestment = [...fixedArrar, ...targetArrar];
      const allCount = completedInestment.length;
      dispatch({
        type: settingsTypes.FETCHED_ALL_COMPLETED_INVEST,
        payload: { count: allCount, data: completedInestment },
      });
    } else {
      console.log("completedError", "Something went wrong...");
    }
  } catch ({ message }) {
    console.log("completedError:", message);
  }
};

//GET ALL SETTINGS INVESTMENT COUNT////
/////////////////////////////
export const getSettingsInvestmentCount = (userId) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: settingsTypes.FETCHING_ALL_INVEST_COUNT });
    const result: any = await httpRequest({
      url: "TargetInvestment/InvestmentCount",
      method: "POST",
      body: {
        platform: 1,
        imei: "string",
        deviceType: "1",
        deviceManufacturer: "string",
        deviceModel: "string",
        deviceIP: "string",
        deviceName: "string",
        userId,
      },
    });
    if (result?.status === true) {
      dispatch({
        type: settingsTypes.FETCHED_ALL_INVEST_COUNT,
        payload: {
          active: result.data.activeInvestmentCount,
          future: result.data.futureInvestmentCount,
          completed: result.data.completedInvestmentCount,
        },
      });
    } else {
      dispatch({
        type: settingsTypes.FETCHED_ALL_INVEST_ERROR,
        payload: result?.message,
      });
    }
  } catch ({ message }) {
    dispatch({
      type: settingsTypes.FETCHED_ALL_INVEST_ERROR,
      payload: message,
    });
  }
};
