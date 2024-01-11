"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var investmentTypes = require("./investmentTypes");
var initialState = {
    loading: false,
    error: "",
    tableData: [],
    selectedinvestType: "activeFixed",
    isFromSettingsPage: false,
    createInvestment: { success: false, message: "" },
    showOverview: { show: false, fromOverview: false, details: {} }
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case investmentTypes.FETCHING_INVESTMENT:
            return __assign(__assign({}, state), { error: "", loading: true });
        case investmentTypes.FETCH_INVESTMENT_FAILED:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        case investmentTypes.CLEAR_INVESTMENT_ERROR:
            return __assign(__assign({}, state), { error: "", loading: false });
        case investmentTypes.FETCH_INVESTMENT_COMPLETED:
            return __assign(__assign({}, state), { error: "", loading: false, tableData: action.payload });
        /////////////////////////////
        //INFO FOR INVESTMENT DETAILS
        //HERE//////////////////////
        case investmentTypes.FETCHING_INVESTMENT_DETAIL:
            return __assign(__assign({}, state), { error: "", loading: true });
        case investmentTypes.GET_SELECTED_TYPE:
            return __assign(__assign({}, state), { error: "", loading: false, selectedinvestType: action.payload, isFromSettingsPage: true });
        case investmentTypes.RESET_SELECTED_TYPE:
            return __assign(__assign({}, state), { error: "", isFromSettingsPage: false, selectedinvestType: action.payload });
        case investmentTypes.FETCH_INVESTMENT_DETAIL_FAILED:
            return __assign(__assign({}, state), { error: action.payload, loading: false });
        case investmentTypes.CLEAR_INVESTMENT_ERROR:
            return __assign(__assign({}, state), { error: "", loading: false });
        case investmentTypes.FETCHED_ACTIVE_FIXED_INVESTMENT_DETAIL:
            return __assign(__assign({}, state), { error: "", loading: false, tableData: __assign(__assign({}, state.tableData), { title: "", type: "string", investmentAmount: "", intrest: "", timeline: { start: 0, end: 0 }, status: "" }) });
        case investmentTypes.CREATE_INVESTMENT:
            return __assign(__assign({}, state), { error: "", loading: false, createInvestment: { success: action.payload.success, message: action.payload.message } });
        case investmentTypes.CREATE_INVESTMENT_CLEAR:
            return __assign(__assign({}, state), { error: "", loading: false, createInvestment: { success: "", message: "" } });
        case investmentTypes.SHOW_INVESTMENT_OVERVIEW:
            return __assign(__assign({}, state), { error: "", showOverview: action.payload });
        case investmentTypes.CLEAR_INVESTMENT_OVERVIEW:
            return __assign(__assign({}, state), { error: "", showOverview: __assign(__assign({}, state.showOverview), action.payload) });
        default:
            return state;
    }
};
exports["default"] = reducer;
