import { Reducer } from "redux";
import * as investmentTypes from "./investmentTypes";
import { InvestmentState } from "../../types/Investment";

const initialState: InvestmentState = {
  loading: false,
  error: "",
  tableData: [],
  selectedinvestType: "activeFixed",
  isFromSettingsPage: false,
  createInvestment: { success: false, message: "" },
  showOverview: { show: false, fromOverview: false, details: {} },
};

const reducer: Reducer<InvestmentState> = (state = initialState, action) => {
  switch (action.type) {
    case investmentTypes.FETCHING_INVESTMENT:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case investmentTypes.FETCH_INVESTMENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case investmentTypes.CLEAR_INVESTMENT_ERROR:
      return {
        ...state,
        error: "",
        loading: false,
      };
    case investmentTypes.FETCH_INVESTMENT_COMPLETED:
      return {
        ...state,
        error: "",
        loading: false,
        tableData: action.payload,
      };

    /////////////////////////////
    //SEARCH INVESTMENT
    //HERE//////////////////////
    case investmentTypes.FETCHING_SEARCH_INVESTMENT:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case investmentTypes.FETCHED_SEARCH_INVESTMENT:
      return {
        ...state,
        error: "",
        loading: false,
        tableData: action.payload,
      };
    case investmentTypes.RESET_SEARCH_INVESTMENT:
      return {
        ...state,
        error: "",
        loading: false,
      };

    /////////////////////////////
    //INFO FOR INVESTMENT DETAILS
    //HERE//////////////////////
    case investmentTypes.FETCHING_INVESTMENT_DETAIL:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case investmentTypes.GET_SELECTED_TYPE:
      return {
        ...state,
        error: "",
        loading: false,
        selectedinvestType: action.payload,
        isFromSettingsPage: true,
      };
    case investmentTypes.RESET_SELECTED_TYPE:
      return {
        ...state,
        error: "",
        isFromSettingsPage: false,
        selectedinvestType: action.payload,
      };
    case investmentTypes.FETCH_INVESTMENT_DETAIL_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case investmentTypes.CLEAR_INVESTMENT_ERROR:
      return {
        ...state,
        error: "",
        loading: false,
      };
    case investmentTypes.FETCHED_ACTIVE_FIXED_INVESTMENT_DETAIL:
      return {
        ...state,
        error: "",
        loading: false,
        tableData: {
          ...state.tableData,
          title: "",
          type: "string",
          investmentAmount: "",
          intrest: "",
          timeline: { start: 0, end: 0 },
          status: "",
        },
      };
    case investmentTypes.CREATE_INVESTMENT:
      return {
        ...state,
        error: "",
        loading: false,
        createInvestment: {
          success: action.payload.success,
          message: action.payload.message,
        },
      };
    case investmentTypes.CREATE_INVESTMENT_CLEAR:
      return {
        ...state,
        error: "",
        loading: false,
        createInvestment: { success: "", message: "" },
      };

    case investmentTypes.SHOW_INVESTMENT_OVERVIEW:
      return {
        ...state,
        error: "",
        showOverview: action.payload,
      };

    case investmentTypes.CLEAR_INVESTMENT_OVERVIEW:
      return {
        ...state,
        error: "",
        showOverview: { ...state.showOverview, ...action.payload },
      };

    default:
      return state;
  }
};

export default reducer;
