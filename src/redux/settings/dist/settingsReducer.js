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
var settingsTypes = require("./settingsTypes");
var initialState = {
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
    allCompletedInvestment: { count: 0, data: [] }
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case settingsTypes.FETCHING_CHANGE_PWD:
            return __assign(__assign({}, state), { error: "", loading: true });
        case settingsTypes.CHANGE_PWD_ERROR:
            return __assign(__assign({}, state), { error: action.payload, loading: false });
        case settingsTypes.CHANGE_PWD_COMPLETE:
            return __assign(__assign({}, state), { loading: false, success: action.payload });
        //////////////////////////////////////
        ///TRANSACTION_PIN////////////////////
        case settingsTypes.FETCHING_TRANSACTION_PIN:
            return __assign(__assign({}, state), { errorPIN: "", loadingPIN: true });
        case settingsTypes.TRANSACTION_PIN_ERROR:
            return __assign(__assign({}, state), { errorPIN: action.payload, loadingPIN: false });
        case settingsTypes.TRANSACTION_PIN_COMPLETE:
            return __assign(__assign({}, state), { loadingPIN: false, successPIN: action.payload });
        //////////////////////////////////////
        ///TRANSACTION_PIN////////////////////
        case settingsTypes.FETCHING_SECURITY_QUES:
            return __assign(__assign({}, state), { errorQues: "", loadingQues: true });
        case settingsTypes.SECURITY_QUES_ERROR:
            return __assign(__assign({}, state), { errorQues: action.payload, loadingQues: false });
        case settingsTypes.SECURITY_QUES_COMPLETE:
            return __assign(__assign({}, state), { loadingQues: false, successQues: action.payload });
        //////////////////////////////////////
        ///ALL INVESTMENT IN SETTINGS////////////////////
        case settingsTypes.FETCHING_ALL_ACTIVE_INVEST:
            return __assign(__assign({}, state), { loadingActiveInvestment: true });
        case settingsTypes.FETCHING_ALL_COMPLETED_INVEST:
            return __assign(__assign({}, state), { loadingCompletedInvestment: true });
        case settingsTypes.FETCHING_ALL_FUTURE_INVEST:
            return __assign(__assign({}, state), { loadingFutrueInvestment: true });
        case settingsTypes.FETCHED_ALL_ACTIVE_INVEST:
            return __assign(__assign({}, state), { loadingActiveInvestment: false, allActiveInvestment: action.payload });
        case settingsTypes.FETCHED_ALL_FUTURE_INVEST:
            return __assign(__assign({}, state), { loadingFutrueInvestment: false, allFutureInvestment: action.payload });
        case settingsTypes.FETCHED_ALL_COMPLETED_INVEST:
            return __assign(__assign({}, state), { loadingCompletedInvestment: false, allCompletedInvestment: action.payload });
        default:
            return state;
    }
};
exports["default"] = reducer;
