import { message } from 'antd';
import { AppDispatchProps } from "./../../types/index";
import { Dispatch } from "redux";
import * as investmentTypes from "./investmentTypes";
import { httpRequest } from "../../https/http";
import {
  checkIsActive,
  checkIsFuture,
  cleanNumber,
  getNextEarning,
} from "../../utils/utilities";
import { IInvestment } from "../../page-components/Overview/GetStartedModal";
import { INewUserInfo } from "../../types/Investment";
import { getFixedId, getTargetId } from "../../utils";
import { checkType } from "../settings/settingsAction";

export const checkInvestmentStatus = (startDate, maturityDate) => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(maturityDate);
  const active = end >= start;
  if (now > end) return "completed";
  if (active) {
    return "active";
  } else {
    return "pending";
  }
};

const searchStatus = () => {};

export const investmentType = async (url, userId) => {
  try {
    const result: any = await httpRequest({
      url,
      method: "POST",
      body: {
        platform: 1,
        imei: "string",
        deviceType: "string",
        deviceManufacturer: "string",
        deviceModel: "string",
        deviceIP: "string",
        deviceName: "string",
        userId,
      },
    });
    return { result, error: "", status: result.status };
  } catch (error) {
    return { result: error, status: false };
  }
};

export const activeFixedInvestment = (userId) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: investmentTypes.FETCHING_INVESTMENT });
    const url = "FixedInvestment/ListofActiveFixed";
    const info: any = await investmentType(url, userId);
 
    if (info?.status) {
      const newData = info?.result?.data
        ?.filter((_d) => checkIsActive(_d.maturityDate) === true)
        .map((r) => {
          const isActive = checkIsActive(r.maturityDate);
          if (isActive) {
            return {
              title: r.purpose,
              type: "Doubble Fixed",
              investmentAmount: cleanNumber(r.payInAmount),
              maturityDate: r.maturityDate,
              effectiveDate: r.effectiveDate,
              investmentID: r.investmentID,
              totalContribution: cleanNumber(r.futureValue),
              currency: r.currency,
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
              beneficiaryName: r.beneficiaryName,
              beneficiaryAccount: r.beneficiaryAccount,
            };
          }
        });
      dispatch({
        type: investmentTypes.FETCH_INVESTMENT_COMPLETED,
        payload: newData || [],
      });
    } else {
      dispatch({
        type: investmentTypes.FETCH_INVESTMENT_FAILED,
        payload:
          info?.result?.data?.message || "No Active Fixed Investment Found!",
      });
    }
  } catch (err) {
    dispatch({
      type: investmentTypes.FETCH_INVESTMENT_FAILED,
      payload: err || "No Active Fixed Investment Found!",
    });
  }
};



////////// GET Active REWARD //////////////
export const activeRewardInvestment = (userId) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: investmentTypes.FETCHING_INVESTMENT });
    const url = "Reward/ListofActiveRewards";
    const info: any = await investmentType(url, userId);
    if (info?.status) {
      const newData = info?.result?.data
        // ?.filter((_d) => checkIsActive(_d.maturityDate) === true)
        .map((r) => {
          // const isActive = checkIsActive(r.maturityDate);
          // if (isActive) {
            return {
              title: r.purpose,
              type: "Doubble Reward",
            investmentAmount:r.payInAmount,
              maturityDate: r.maturityDate,
              effectiveDate: r.effectiveDate,
              // investmentID: r.investmentID,
              //totalContribution: cleanNumber(r.futureValue),
              currency:"NGN",
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
               intrest: r.interestEarned,
              timeline: { start: 3, end: 10 },
              status: "active",
              beneficiaryName: r.beneficiaryName,
              beneficiaryAccount: r.beneficiaryAccount,
            };
        //  }
        });
        
      dispatch({
        type: investmentTypes.FETCH_INVESTMENT_COMPLETED,
        payload: newData || [],
      });
    } else {
      dispatch({
        type: investmentTypes.FETCH_INVESTMENT_FAILED,
        payload:
          info?.result?.data?.message || "No Active Reward Found!",
      });
    }
  } catch (err) {
    dispatch({
      type: investmentTypes.FETCH_INVESTMENT_FAILED,
      payload: err || "No Active Reward Found!",
    });
  }
};


////////GET FUTURE REWARD //////////
export const futureRewardInvestment = (userId) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: investmentTypes.FETCHING_INVESTMENT });
    const url = "Reward/ListofFutureRewards";
    const info: any = await investmentType(url, userId);
    if (info?.status) {
      const newData = info?.result?.data
        //?.filter((_d) => checkIsFuture(_d.effectiveDate) === true)
        .map((r) => ({
          title: r.purpose,
          type: "Doubble Reward",
          maturityDate: r.maturityDate,
          effectiveDate: r.effectiveDate,
          investmentID: r.investment_ID,
          //totalContribution: r.targetValue + r.payInAmount,
          // frequency: r.frequency,
          // currency: r.currency,
          currency:"NGN",
          nextEarning:
            getNextEarning(r.maturityDate) > 0
              ? getNextEarning(r.maturityDate)
              : 0,
          investmentAmount: Math.floor(r.payInAmount),
          // intrest: Math.floor(r.interest),
          intrest:"0",
          timeline: {
            start: 0,
            end: r.term,
          },
          status: "pending",
           daoCode: r.daoCode,
           dateOfEntry: r.dateOfEntry,
          payInAccount: r.payInAccount,
          beneficiaryName: r.beneficiaryName,
          beneficiaryAccount: r.beneficiaryAccount,
        }));
       
      dispatch({
        type: investmentTypes.FETCH_INVESTMENT_COMPLETED,
        payload: newData || [],
      });
    } else {
      dispatch({
        type: investmentTypes.FETCH_INVESTMENT_FAILED,
        payload:
          info?.result.data.message || "No Future Reward Investment Found!",
      });
    }
  } catch ({ message }) {
    dispatch({
      type: investmentTypes.FETCH_INVESTMENT_FAILED,
      payload: message || "No Future Reward Investment Found!",
    });
  }
};






export const activeTargetInvestment = (userId) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: investmentTypes.FETCHING_INVESTMENT });
    const url = "TargetInvestment/ListofActiveTarget";
    const info: any = await investmentType(url, userId);
    if (info?.status) {
      const newData = info?.result?.data
        ?.filter((_d) => checkIsActive(_d.maturityDate) === true)
        .map((r) => ({
          title: r.purpose,
          type: "Doubble Target",
          investmentAmount: cleanNumber(r.investmentValue),
          maturityDate: r.maturityDate,
          nextEarning:
            getNextEarning(r.maturityDate) > 0
              ? getNextEarning(r.maturityDate)
              : 0,
          currency: r.currency,
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
          beneficiaryName: r.beneficiaryName,
          beneficiaryAccount: r.beneficiaryAccount,
        }));
      dispatch({
        type: investmentTypes.FETCH_INVESTMENT_COMPLETED,
        payload: newData || [],
      });
    } else {
      dispatch({
        type: investmentTypes.FETCH_INVESTMENT_FAILED,
        payload:
          info?.result.data.message || "No Active Target Investment Found!",
      });
    }
  } catch ({ message }) {
    dispatch({
      type: investmentTypes.FETCH_INVESTMENT_FAILED,
      payload: message || "No Active Target Investment Found!",
    });
  }
};

export const futureFixedInvestment = (userId) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: investmentTypes.FETCHING_INVESTMENT });
    const url = "FixedInvestment/ListofFutureFixed";
    const info: any = await investmentType(url, userId);
    if (info?.status) {
      const newData = info?.result?.data
        ?.filter((_d) => checkIsFuture(_d.effectiveDate) === true)
        .map((r) => ({
          title: r.purpose,
          type: "Doubble Fixed",
          investmentAmount: cleanNumber(r.payInAmount),
          nextEarning:
            getNextEarning(r.maturityDate) > 0
              ? getNextEarning(r.maturityDate)
              : 0,
          currency: r.currency,
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
          intrest: cleanNumber(r.futureValue) - cleanNumber(r.payInAmount),
          timeline: {
            start: 0,
            end: r.term / 30 > 0 ? Math.floor(r.term / 30) : 1,
          },
          status: "pending",
          daoCode: r.daoCode,
          dateOfEntry: r.dateOfEntry,
          payInAccount: r.payInAccount,
          beneficiaryName: r.beneficiaryName,
          beneficiaryAccount: r.beneficiaryAccount,
        }));

      dispatch({
        type: investmentTypes.FETCH_INVESTMENT_COMPLETED,
        payload: newData || [],
      });
    } else {
      dispatch({
        type: investmentTypes.FETCH_INVESTMENT_FAILED,
        payload:
          info?.result.data.message || "No Future Fixed Investment Found!",
      });
    }
  } catch ({ message }) {
    dispatch({
      type: investmentTypes.FETCH_INVESTMENT_FAILED,
      payload: message || "No Future Fixed Investment Found!",
    });
  }
};

export const futureTargetInvestment = (userId) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: investmentTypes.FETCHING_INVESTMENT });
    const url = "TargetInvestment/ListofFutureTarget";
    const info: any = await investmentType(url, userId);
    if (info?.status) {
      const newData = info?.result?.data
        ?.filter((_d) => checkIsFuture(_d.effectiveDate) === true)
        .map((r) => ({
          title: r.purpose,
          type: "Doubble Target",
          maturityDate: r.maturityDate,
          effectiveDate: r.effectiveDate,
          investmentID: r.investment_ID,
          totalContribution: r.targetValue + r.payInAmount,
          frequency: r.frequency,
          currency: r.currency,
          nextEarning:
            getNextEarning(r.maturityDate) > 0
              ? getNextEarning(r.maturityDate)
              : 0,
          investmentAmount: Math.floor(r.payInAmount),
          intrest: Math.floor(r.interest),
          timeline: {
            start: 0,
            end: r.term,
          },
          status: "pending",
          daoCode: r.daoCode,
          dateOfEntry: r.dateOfEntry,
          payInAccount: r.payInAccount,
          beneficiaryName: r.beneficiaryName,
          beneficiaryAccount: r.beneficiaryAccount,
        }));
      dispatch({
        type: investmentTypes.FETCH_INVESTMENT_COMPLETED,
        payload: newData || [],
      });
    } else {
      dispatch({
        type: investmentTypes.FETCH_INVESTMENT_FAILED,
        payload:
          info?.result.data.message || "No Future Target Investment Found!",
      });
    }
  } catch ({ message }) {
    dispatch({
      type: investmentTypes.FETCH_INVESTMENT_FAILED,
      payload: message || "No Future Target Investment Found!",
    });
  }
};

////////GET ALL COMPLETED INVESTMENTS//////////
////////////////////////////////////////

export const allCompletedInvestments = (userId) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  try {
    dispatch({ type: investmentTypes.FETCHING_INVESTMENT });
    const targetURL = "TargetInvestment/ListofCompletedTarget";
    const fixedURL = "FixedInvestment/ListofCompletedFixed";
    const target: any = await investmentType(targetURL, userId);
    const fixed: any = await investmentType(fixedURL, userId);
    if (target?.status && fixed?.status) {
      const fixedArrar = fixed?.result?.data?.map((r) => ({
        title: r.purpose,
        type: "Doubble Fixed",
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
        type: "Doubble Target",
        maturityDate: r.maturityDate,
        effectiveDate: r.effectiveDate,
        investmentID: r.investmentID,
        totalContribution: r.targetValue + r.payInAmount,
        frequency: r.frequency,
        currency: r.currency,
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
        beneficiaryName: r.beneficiaryName,
        beneficiaryAccount: r.beneficiaryAccount,
      }));

      const allInvestment = [...fixedArrar, ...targetArrar];
      dispatch({
        type: investmentTypes.FETCH_INVESTMENT_COMPLETED,
        payload: allInvestment,
      });
    } else {
      console.log("completedError", "Something went wrong...");
    }
  } catch ({ message }) {
    console.log("completedError:", message);
  }
};

////////////////////////////////////////////
///////////////GET DIFFERENT INVESTMENTS FROM SETTINGS///////
//////////////////////////////////////////
export const fetchAllInvestments = (investment) => async (
  dispatch: Dispatch<AppDispatchProps>
) => {
  dispatch({
    type: investmentTypes.FETCH_INVESTMENT_COMPLETED,
    payload: investment,
  });
};

////////////////////////////////////////////
///////////////CREATE FIXED INVESTMENT///////
//////////////////////////////////////////
export const createFixedInvestment = (
  investment: IInvestment,
  productID,
  newInfo: INewUserInfo,
  fixedIdDetails
) => async (dispatch: Dispatch<AppDispatchProps>) => {
  const fixedId = getFixedId(
    fixedIdDetails,
    investment.currency,
    investment.amount,
    investment.month
  );

  if (fixedId === "empty") {
    dispatch({
      type: investmentTypes.CREATE_INVESTMENT,
      payload: {
        success: false,
        message:
          "something went wrong",
      },
    });
    return false;
  }

  try {
    dispatch({ type: investmentTypes.FETCHING_INVESTMENT });
    const beneficiary = { self: 0, others: 1 };
    const result: any = await httpRequest({
      url: "FixedInvestment/CreateFixed",
      method: "POST",
      body: {
        userId: newInfo.userId,
        productId: productID,
        fixedId: Number(fixedId),
        payInAmount: Number(investment.amount),
        bvn: newInfo.bvn,
        emailAddress: newInfo.emailAddress,
        payInAccount: investment.fundingAccount,
        firstName: newInfo.firstName,
        currency: investment.currency,
        effectiveDate: investment.startDate,
        term: Number(investment.month),
        daoCode: investment.daoCode,
        rollover: Number(investment.rollover),
        purpose: investment.title,
        platform: 1,
        beneficiaryType: beneficiary.self,
        imei: "string",
        deviceType: "1",
        deviceManufacturer: "HMD Global",
        deviceModel: "Nokia 4.2",
        deviceIP: "",
        deviceName: "string",
        transactionPIN: investment.transactionPIN,
      },
    });

    dispatch({
      type: investmentTypes.CREATE_INVESTMENT,
      payload: { success: result.status, message: result.message },
    });
  } catch ({ message }) {
    dispatch({
      type: investmentTypes.CREATE_INVESTMENT,
      payload: { success: false, message: message },
    });
  }
};

////////////////////////////////////////////
///////////////CREATE TARGET INVESTMENT///////
//////////////////////////////////////////
export const createTargetInvestment = (
  investment: IInvestment,
  productID,
  newInfo: INewUserInfo,
  targetIdDetails
) => async (dispatch: Dispatch<AppDispatchProps>) => {
  const targetId = getTargetId(
    targetIdDetails,
    investment.currency,
    investment.month
  );
  if (targetId === "empty") {
    dispatch({
      type: investmentTypes.CREATE_INVESTMENT,
      payload: {
        success: false,
        message:
          "something went wrong",
      },
    });
    return false;
  }
  try {
    const beneficiary = { self: 0, others: 1 };
    dispatch({ type: investmentTypes.FETCHING_INVESTMENT });
    const result: any = await httpRequest({
      url: "TargetInvestment/CreateTarget",
      method: "POST",
      body: {
        platform: 1,
        imei: "f73cdbb84f771952",
        deviceType: "1",
        deviceManufacturer: "HMD Global",
        deviceModel: "Nokia 4.2",
        deviceIP: "",
        deviceName: "",
        userId: newInfo.userId,
        productId: productID,
        targetId: Number(targetId),
        bvn: newInfo.bvn,
        currency: investment.currency,
        firstName: newInfo.firstName,
        lastName: newInfo.lastName,
        emailAddress: newInfo.emailAddress,
        payInAmount: Number(investment.amount),
        targetValue: Number(investment.targetValue),
        payInAccount: investment.fundingAccount,
        beneficiaryAccount: investment.beneficiaryAccount,
        effectiveDate: investment.startDate,
        transactionPIN: investment.transactionPIN,
        daoCode: investment.daoCode,
        frequency:
          investment.frequency === "Yearly"
            ? 12
            : investment.frequency === "Biannually"
            ? 6
            : investment.frequency === "Quarterly"
            ? 4
            : 1,
        month: Number(investment.month), //17
        purpose: investment.title,
        beneficiaryType: beneficiary.self,
      },
    });
    if (result?.status === true) {
      dispatch({
        type: investmentTypes.CREATE_INVESTMENT,
        payload: { success: true, message: result.message },
      });
    } else {
      dispatch({
        type: investmentTypes.CREATE_INVESTMENT,
        payload: {
          success: false,
          message:
            result?.message || "something went wrong",
        },
      });
    }
  } catch ({ message }) {
    dispatch({
      type: investmentTypes.CREATE_INVESTMENT,
      payload: { success: false, message: message },
    });
  }
};

////////////////////////////////////////////
///////////////EDIT FIXED INVESTMENT///////
//////////////////////////////////////////
export const editFixedInvestment = (
  investment: IInvestment,
  productID,
  newInfo: INewUserInfo,
  fixedIdDetails
) => async (dispatch: Dispatch<AppDispatchProps>) => {
  const fixedId = getFixedId(
    fixedIdDetails,
    investment.currency,
    investment.amount,
    investment.month
  );

  if (fixedId === "empty") {
    dispatch({
      type: investmentTypes.CREATE_INVESTMENT,
      payload: {
        success: false,
        message:
          "something went wrong",
      },
    });
    return false;
  }
  try {
    dispatch({ type: investmentTypes.FETCHING_INVESTMENT });
    const beneficiary = { self: 0, others: 1 };
    const result: any = await httpRequest({
      url: "FixedInvestment/UpdateFutureFixed",
      method: "POST",
      body: {
        imei: "string",
        deviceType: "1",
        deviceManufacturer: "string",
        deviceModel: "string",
        deviceIP: "string",
        deviceName: "string",
        investmentId: "string",
        userId: newInfo.userId,
        productId: productID,
        fixedId: Number(fixedId),
        payInAmount: Number(investment.amount),
        bvn: newInfo.bvn,
        emailAddress: newInfo.emailAddress,
        payInAccount: investment.fundingAccount,
        firstName: newInfo.firstName,
        currency: investment.currency,
        effectiveDate: investment.startDate,
        otp: "string",
        investment_ID: investment.investmentID,
        term: Number(investment.month),
        daoCode: investment.daoCode,
        rollover: Number(investment.rollover),
        purpose: investment.title,
        transactionPIN: investment.transactionPIN,
        platform: 1,
        beneficiaryType: beneficiary.self,
      },
    });

    dispatch({
      type: investmentTypes.CREATE_INVESTMENT,
      payload: { success: result.status, message: result.message },
    });
  } catch ({ message }) {
    dispatch({
      type: investmentTypes.CREATE_INVESTMENT,
      payload: { success: false, message: message },
    });
  }
};

////////////////////////////////////////////
///////////////EDIT TARGET INVESTMENT///////
//////////////////////////////////////////
export const editTargetInvestment = (
  investment: IInvestment,
  productID,
  newInfo: INewUserInfo,
  targetIdDetails
) => async (dispatch: Dispatch<AppDispatchProps>) => {
  const targetId = getTargetId(
    targetIdDetails,
    investment.currency,
    investment.month
  );

  if (targetId === "empty") {
    dispatch({
      type: investmentTypes.CREATE_INVESTMENT,
      payload: {
        success: false,
        message:
          "something went wrong",
      },
    });
    return false;
  }
  try {
    const beneficiary = { self: 0, others: 1 };
    dispatch({ type: investmentTypes.FETCHING_INVESTMENT });
    const result: any = await httpRequest({
      url: "TargetInvestment/UpdateFutureTarget",
      method: "POST",
      body: {
        platform: 1,
        imei: "f73cdbb84f771952",
        deviceType: "1",
        deviceManufacturer: "HMD Global",
        deviceModel: "Nokia 4.2",
        deviceIP: "",
        deviceName: "",
        investmentId: investment.investmentID,
        userId: newInfo.userId,
        productId: productID,
        targetId: Number(targetId),
        bvn: newInfo.bvn,
        currency: investment.currency,
        firstName: newInfo.firstName,
        emailAddress: newInfo.emailAddress,
        payInAmount: Number(investment.amount),
        targetValue: Number(investment.targetValue),
        payInAccount: investment.fundingAccount,
        beneficiaryAccount: investment.beneficiaryAccount,
        effectiveDate: investment.startDate,
        daoCode: investment.daoCode,
        transactionPIN: investment.transactionPIN,
        frequency:
          investment.frequency === "Yearly"
            ? 12
            : investment.frequency === "Biannually"
            ? 6
            : investment.frequency === "Quarterly"
            ? 4
            : 1,
        month: Number(investment.month), //17
        purpose: investment.title,
        beneficiaryType: beneficiary.self,
      },
    });
    if (result?.status === true) {
      dispatch({
        type: investmentTypes.CREATE_INVESTMENT,
        payload: { success: true, message: result.message },
      });
    } else {
      dispatch({
        type: investmentTypes.CREATE_INVESTMENT,
        payload: {
          success: false,
          message:
            result?.message || "something went wrong",
        },
      });
    }
  } catch ({ message }) {
    dispatch({
      type: investmentTypes.CREATE_INVESTMENT,
      payload: { success: false, message: message },
    });
  }
};

////////////////////////////////////////////
///////////////SEARCH INVESTMENT///////
//////////////////////////////////////////
export const searchInvestmentAction = (
  userId: string,
  purpose: string
) => async (dispatch: Dispatch<AppDispatchProps>) => {
  try {
    dispatch({ type: investmentTypes.FETCHING_SEARCH_INVESTMENT });
    const res: any = await httpRequest({
      url: "TargetInvestment/SearchInvestmentbyTitle",
      method: "POST",
      body: {
        platform: 1,
        imei: "string",
        deviceType: "1",
        deviceManufacturer: "string",
        deviceModel: "string",
        deviceIP: "string",
        deviceName: "string",
        userId: userId,
        purpose,
      },
    });
    if (res?.status === true) {
      console.log("search...", res.data);
      const newData = res?.data?.map((r) => ({
        title: r.purpose,
        type: `Doubble ${r.category === "Target3" ? "Target" : "Fixed"}`,
        investmentAmount: Math.floor(r.targetValue),
        maturityDate: r.maturityDate,
        nextEarning:
          getNextEarning(r.maturityDate) > 0
            ? getNextEarning(r.maturityDate)
            : 0,
        currency: r.currency,
        effectiveDate: r.effectiveDate,
        investmentID: r.investment_ID,
        totalContribution:
          r.contributions === null ? 0 : cleanNumber(r.contributions),
        frequency: r.frequency,
        intrest: Math.floor(r.interest),
        timeline: {
          start: 1,
          end: r.term,
        },
        status: checkInvestmentStatus(r.effectiveDate, r.maturityDate),
        beneficiaryName: r.beneficiaryName,
        beneficiaryAccount: r.beneficiaryAccount,
      }));

      dispatch({
        type: investmentTypes.FETCHED_SEARCH_INVESTMENT,
        payload: newData || [],
      });
    } else {
      dispatch({ type: investmentTypes.RESET_SEARCH_INVESTMENT });
    }
  } catch (err) {
    dispatch({ type: investmentTypes.RESET_SEARCH_INVESTMENT });
  }
};
