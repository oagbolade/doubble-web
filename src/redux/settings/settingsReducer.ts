import { Reducer } from "redux";
import * as settingsTypes from "./settingsTypes";

export interface changePwdState {
  loading?: boolean;
  error?: string;
  success?: string;
  loadingPIN?: boolean;
  errorPIN?: string;
  successPIN?: string;
  loadingQues?: boolean;
  errorQues?: string;
  successQues?: { id: number; question: string }[];
  data?: {};
  loadingActiveInvestment?: boolean;
  loadingFutrueInvestment?: boolean;
  loadingCompletedInvestment?: boolean;
  allActiveInvestment: { count: number; data: [] };
  allFutureInvestment: { count: number; data: [] };
  allCompletedInvestment: { count: number; data: [] };
  loadAllInvestmentCount?: boolean;
  allInvestmentCount: { active: number; future: number; completed: number };
}

const initialState: changePwdState = {
  loading: false,
  error: "",
  success: "",
  loadingPIN: false,
  errorPIN: "",
  successPIN: "",
  loadingQues: false,
  errorQues: "",
  successQues: [],
  data: {},
  loadingActiveInvestment: false,
  loadingFutrueInvestment: false,
  loadingCompletedInvestment: false,
  allActiveInvestment: { count: 0, data: [] },
  allFutureInvestment: { count: 0, data: [] },
  allCompletedInvestment: { count: 0, data: [] },
  loadAllInvestmentCount: false,
  allInvestmentCount: { active: 0, future: 0, completed: 0 },
};

const reducer: Reducer<changePwdState> = (state = initialState, action) => {
  switch (action.type) {
    case settingsTypes.FETCHING_CHANGE_PWD:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case settingsTypes.CHANGE_PWD_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case settingsTypes.CHANGE_PWD_COMPLETE:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };

    //////////////////////////////////////
    ///TRANSACTION_PIN////////////////////
    case settingsTypes.FETCHING_TRANSACTION_PIN:
      return {
        ...state,
        errorPIN: "",
        loadingPIN: true,
      };
    case settingsTypes.TRANSACTION_PIN_ERROR:
      return {
        ...state,
        errorPIN: action.payload,
        loadingPIN: false,
      };
    case settingsTypes.TRANSACTION_PIN_COMPLETE:
      return {
        ...state,
        loadingPIN: false,
        successPIN: action.payload,
      };

    //////////////////////////////////////
    ///TRANSACTION_PIN////////////////////
    case settingsTypes.FETCHING_SECURITY_QUES:
      return {
        ...state,
        errorQues: "",
        loadingQues: true,
      };
    case settingsTypes.SECURITY_QUES_ERROR:
      return {
        ...state,
        errorQues: action.payload,
        loadingQues: false,
      };
    case settingsTypes.SECURITY_QUES_COMPLETE:
      return {
        ...state,
        loadingQues: false,
        successQues: action.payload,
      };

    //////////////////////////////////////
    ///ALL INVESTMENT IN SETTINGS////////////////////
    case settingsTypes.FETCHING_ALL_ACTIVE_INVEST:
      return {
        ...state,
        loadingActiveInvestment: true,
      };
    case settingsTypes.FETCHING_ALL_COMPLETED_INVEST:
      return {
        ...state,
        loadingCompletedInvestment: true,
      };
    case settingsTypes.FETCHING_ALL_FUTURE_INVEST:
      return {
        ...state,
        loadingFutrueInvestment: true,
      };
    case settingsTypes.FETCHED_ALL_ACTIVE_INVEST:
      return {
        ...state,
        loadingActiveInvestment: false,
        allActiveInvestment: action.payload,
      };
    case settingsTypes.FETCHED_ALL_FUTURE_INVEST:
      return {
        ...state,
        loadingFutrueInvestment: false,
        allFutureInvestment: action.payload,
      };
    case settingsTypes.FETCHED_ALL_COMPLETED_INVEST:
      return {
        ...state,
        loadingCompletedInvestment: false,
        allCompletedInvestment: action.payload,
      };

    //////////////////////////////////////
    ///FETCH ALL INVESTMENT COUNT////////////////////
    case settingsTypes.FETCHING_ALL_INVEST_COUNT:
      return {
        ...state,
        loadAllInvestmentCount: true,
      };
    case settingsTypes.FETCHED_ALL_INVEST_COUNT:
      return {
        ...state,
        loadAllInvestmentCount: false,
        allInvestmentCount: action.payload,
      };
    case settingsTypes.FETCHED_ALL_INVEST_ERROR:
      return {
        ...state,
        loadAllInvestmentCount: false,
        allInvestmentCount: { active: 0, future: 0, completed: 0 },
      };

    default:
      return state;
  }
};

export default reducer;
