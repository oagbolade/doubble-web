"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.getAllCompletedInvestment = exports.getAllFutureInvestment = exports.getAllActiveInvestment = exports.getSecrityQuestions = exports.changeTransactionPIN = exports.changePassword = void 0;
var settingsTypes = require("./settingsTypes");
var http_1 = require("../../https/http");
var investmentAction_1 = require("../investment/investmentAction");
var utilities_1 = require("../../utils/utilities");
exports.changePassword = function (obj) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var result, _a, message;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                dispatch({ type: settingsTypes.FETCHING_CHANGE_PWD });
                return [4 /*yield*/, http_1.httpRequest({
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
                            password: obj["new"],
                            confirmPassword: obj.confirm,
                            isMobile: true
                        }
                    })];
            case 1:
                result = _b.sent();
                if ((result === null || result === void 0 ? void 0 : result.status) === true) {
                    dispatch({
                        type: settingsTypes.CHANGE_PWD_COMPLETE,
                        payload: result === null || result === void 0 ? void 0 : result.message
                    });
                }
                else {
                    dispatch({
                        type: settingsTypes.CHANGE_PWD_ERROR,
                        payload: (result === null || result === void 0 ? void 0 : result.message) || "Something went wrong!"
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                _a = _b.sent();
                message = _a.message;
                dispatch({
                    type: settingsTypes.CHANGE_PWD_ERROR,
                    payload: message || "Something went wrong!"
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
//reset transaction PIN////
/////////////////////////////
exports.changeTransactionPIN = function (obj) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var result, _a, message;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                dispatch({ type: settingsTypes.FETCHING_TRANSACTION_PIN });
                return [4 /*yield*/, http_1.httpRequest({
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
                            newPIN: obj["new"],
                            confirmPIN: obj.confirm
                        }
                    })];
            case 1:
                result = _b.sent();
                if ((result === null || result === void 0 ? void 0 : result.status) === true) {
                    dispatch({
                        type: settingsTypes.TRANSACTION_PIN_COMPLETE,
                        payload: result === null || result === void 0 ? void 0 : result.message
                    });
                }
                else {
                    dispatch({
                        type: settingsTypes.TRANSACTION_PIN_ERROR,
                        payload: (result === null || result === void 0 ? void 0 : result.message) || "Something went wrong!"
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                _a = _b.sent();
                message = _a.message;
                dispatch({
                    type: settingsTypes.TRANSACTION_PIN_ERROR,
                    payload: message || "Something went wrong!"
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
////////GET SECIRTY QUESTION//////////
///////////////////////////////
exports.getSecrityQuestions = function () { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var result, _a, message;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                dispatch({ type: settingsTypes.FETCHING_SECURITY_QUES });
                return [4 /*yield*/, http_1.httpRequest({
                        url: "Account/SecurityQuestions",
                        method: "POST"
                    })];
            case 1:
                result = _b.sent();
                if ((result === null || result === void 0 ? void 0 : result.status) === true) {
                    dispatch({
                        type: settingsTypes.SECURITY_QUES_COMPLETE,
                        payload: result === null || result === void 0 ? void 0 : result.data
                    });
                }
                else {
                    dispatch({
                        type: settingsTypes.SECURITY_QUES_ERROR,
                        payload: (result === null || result === void 0 ? void 0 : result.message) || "Something went wrong!"
                    });
                }
                return [3 /*break*/, 3];
            case 2:
                _a = _b.sent();
                message = _a.message;
                dispatch({
                    type: settingsTypes.SECURITY_QUES_ERROR,
                    payload: message || "Something went wrong!"
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
////////GET ALL ACTIVE INVESTMENT//////////
////////////////////////////////////////
exports.getAllActiveInvestment = function (userId) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var activeFixedURL, activeTargetURL, fixed, target, fixedArrar, targetArrar, activeInestments, allCount, _a, message;
    var _b, _c, _e, _f, _g, _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _j.trys.push([0, 3, , 4]);
                dispatch({ type: settingsTypes.FETCHING_ALL_ACTIVE_INVEST });
                activeFixedURL = "FixedInvestment/ListofActiveFixed";
                activeTargetURL = "TargetInvestment/ListofActiveTarget";
                return [4 /*yield*/, investmentAction_1.investmentType(activeFixedURL, userId)];
            case 1:
                fixed = _j.sent();
                return [4 /*yield*/, investmentAction_1.investmentType(activeTargetURL, userId)];
            case 2:
                target = _j.sent();
                if ((fixed === null || fixed === void 0 ? void 0 : fixed.status) && target.status) {
                    fixedArrar = ((_c = (_b = fixed === null || fixed === void 0 ? void 0 : fixed.result) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.length) > 0 ? (_e = fixed === null || fixed === void 0 ? void 0 : fixed.result) === null || _e === void 0 ? void 0 : _e.data.filter(function (_d) { return utilities_1.checkIsActive(_d.maturityDate) === true; }).map(function (r) {
                        var isActive = utilities_1.checkIsActive(r.maturityDate);
                        if (isActive) {
                            return ({
                                title: r.purpose,
                                type: "Active Fixed",
                                investmentAmount: utilities_1.cleanNumber(r.payInAmount),
                                maturityDate: r.maturityDate,
                                effectiveDate: r.effectiveDate,
                                investmentID: r.investmentID,
                                totalContribution: utilities_1.cleanNumber(r.futureValue),
                                nextEarning: utilities_1.getNextEarning(r.maturityDate) > 0 ? utilities_1.getNextEarning(r.maturityDate) : 0,
                                frequency: r.term === 30 ? "Monthly" : r.term > 60 ? "Biannually" : "Quarterly",
                                intrest: r.interestEarned.split(" ")[1],
                                timeline: { start: 3, end: 10 },
                                status: 'active'
                            });
                        }
                    }) : [];
                    targetArrar = ((_g = (_f = target === null || target === void 0 ? void 0 : target.result) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.length) > 0 ? (_h = target === null || target === void 0 ? void 0 : target.result) === null || _h === void 0 ? void 0 : _h.data.filter(function (_d) { return utilities_1.checkIsActive(_d.maturityDate) === true; }).map(function (r) { return ({
                        title: r.purpose,
                        type: "Active Target",
                        investmentAmount: utilities_1.cleanNumber(r.investmentValue),
                        maturityDate: r.maturityDate,
                        nextEarning: utilities_1.getNextEarning(r.maturityDate) > 0
                            ? utilities_1.getNextEarning(r.maturityDate)
                            : 0,
                        effectiveDate: r.effectiveDate,
                        investmentID: r.investment_ID,
                        totalContribution: utilities_1.cleanNumber(r.contributions),
                        frequency: r.frequency,
                        intrest: Math.floor(r.interest),
                        timeline: {
                            start: 1,
                            end: r.term
                        },
                        status: 'active'
                    }); }) : [];
                    activeInestments = __spreadArrays(fixedArrar, targetArrar);
                    allCount = activeInestments.length;
                    dispatch({ type: settingsTypes.FETCHED_ALL_ACTIVE_INVEST, payload: { count: allCount, data: activeInestments } });
                }
                else {
                    console.log('settingsActionError', "No Active Investment Found");
                }
                return [3 /*break*/, 4];
            case 3:
                _a = _j.sent();
                message = _a.message;
                console.log('settingsActionError', message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
////////GET ALL FUTURE INVESTMENT//////////
////////////////////////////////////////
exports.getAllFutureInvestment = function (userId) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var futureFixedURL, futureTargetURL, fixed, target, fixedArrar, targetArrar, futureInestment, allCount, _a, message;
    var _b, _c, _e, _f, _g, _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _j.trys.push([0, 3, , 4]);
                dispatch({ type: settingsTypes.FETCHING_ALL_FUTURE_INVEST });
                futureFixedURL = "FixedInvestment/ListofFutureFixed";
                futureTargetURL = "TargetInvestment/ListofFutureTarget";
                return [4 /*yield*/, investmentAction_1.investmentType(futureFixedURL, userId)];
            case 1:
                fixed = _j.sent();
                return [4 /*yield*/, investmentAction_1.investmentType(futureTargetURL, userId)];
            case 2:
                target = _j.sent();
                if ((fixed === null || fixed === void 0 ? void 0 : fixed.status) && target.status) {
                    fixedArrar = ((_c = (_b = fixed === null || fixed === void 0 ? void 0 : fixed.result) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.length) > 0 ? (_e = fixed === null || fixed === void 0 ? void 0 : fixed.result) === null || _e === void 0 ? void 0 : _e.data.filter(function (_d) { return utilities_1.checkIsFuture(_d.effectiveDate) === true; }).map(function (r) { return ({
                        title: r.purpose,
                        type: "Future Fixed",
                        investmentAmount: utilities_1.cleanNumber(r.payInAmount),
                        nextEarning: utilities_1.getNextEarning(r.maturityDate) > 0
                            ? utilities_1.getNextEarning(r.maturityDate)
                            : 0,
                        maturityDate: r.maturityDate,
                        effectiveDate: r.effectiveDate,
                        investmentID: r.investment_ID,
                        totalContribution: utilities_1.cleanNumber(r.futureValue),
                        frequency: r.term === 30 ? "Monthly" : r.term > 60 ? "Biannually" : "Quarterly",
                        intrest: utilities_1.cleanNumber(r.futureValue) - utilities_1.cleanNumber(r.payInAmount),
                        timeline: {
                            start: 0,
                            end: r.term / 30 > 0 ? Math.floor(r.term / 30) : 1
                        },
                        status: 'pending'
                    }); }) : [];
                    targetArrar = ((_g = (_f = target === null || target === void 0 ? void 0 : target.result) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.length) > 0 ? (_h = target === null || target === void 0 ? void 0 : target.result) === null || _h === void 0 ? void 0 : _h.data.filter(function (_d) { return utilities_1.checkIsFuture(_d.effectiveDate) === true; }).map(function (r) { return ({
                        title: r.purpose,
                        type: "Future Target",
                        maturityDate: r.maturityDate,
                        effectiveDate: r.effectiveDate,
                        investmentID: r.investment_ID,
                        totalContribution: r.targetValue + r.payInAmount,
                        frequency: r.frequency,
                        nextEarning: utilities_1.getNextEarning(r.maturityDate) > 0 ? utilities_1.getNextEarning(r.maturityDate) : 0,
                        investmentAmount: Math.floor(r.targetValue),
                        intrest: Math.floor(r.interest),
                        timeline: {
                            start: 0,
                            end: r.term
                        },
                        status: 'pending'
                    }); }) : [];
                    futureInestment = __spreadArrays(fixedArrar, targetArrar);
                    allCount = futureInestment.length;
                    dispatch({ type: settingsTypes.FETCHED_ALL_FUTURE_INVEST, payload: { count: allCount, data: futureInestment } });
                }
                else {
                    console.log('settingsActionError', "No Active Investment Found");
                }
                return [3 /*break*/, 4];
            case 3:
                _a = _j.sent();
                message = _a.message;
                console.log('settingsActionError', message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
////////GET ALL COMPLETED INVESTMENT//////////
////////////////////////////////////////
exports.getAllCompletedInvestment = function (userId) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var targetURL, fixedURL, target, fixed, fixedArrar, targetArrar, completedInestment, allCount, _a, message;
    var _b, _c, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _g.trys.push([0, 3, , 4]);
                dispatch({ type: settingsTypes.FETCHING_ALL_COMPLETED_INVEST });
                targetURL = "TargetInvestment/ListofCompletedTarget";
                fixedURL = "FixedInvestment/ListofCompletedFixed";
                return [4 /*yield*/, investmentAction_1.investmentType(targetURL, userId)];
            case 1:
                target = _g.sent();
                return [4 /*yield*/, investmentAction_1.investmentType(fixedURL, userId)];
            case 2:
                fixed = _g.sent();
                if ((target === null || target === void 0 ? void 0 : target.status) && (fixed === null || fixed === void 0 ? void 0 : fixed.status)) {
                    fixedArrar = (_c = (_b = fixed === null || fixed === void 0 ? void 0 : fixed.result) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.map(function (r) { return ({
                        title: r.purpose,
                        type: "Completed Fixed",
                        investmentAmount: utilities_1.cleanNumber(r.payInAmount),
                        nextEarning: utilities_1.getNextEarning(r.maturityDate) > 0
                            ? utilities_1.getNextEarning(r.maturityDate)
                            : 0,
                        maturityDate: r.maturityDate,
                        effectiveDate: r.effectiveDate,
                        investmentID: r.investmentID,
                        totalContribution: utilities_1.cleanNumber(r.futureValue),
                        frequency: r.term === 30 ? "Monthly" : r.term > 60 ? "Biannually" : "Quarterly",
                        intrest: utilities_1.cleanNumber(r.futureValue) - utilities_1.cleanNumber(r.payInAmount),
                        timeline: {
                            start: 1,
                            end: r.term / 30 > 0 ? Math.floor(r.term / 30) : 1
                        },
                        status: 'completed'
                    }); });
                    targetArrar = (_f = (_e = target === null || target === void 0 ? void 0 : target.result) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.map(function (r) { return ({
                        title: r.purpose,
                        type: "Completed Target",
                        maturityDate: r.maturityDate,
                        effectiveDate: r.effectiveDate,
                        investmentID: r.investmentID,
                        totalContribution: r.targetValue + r.payInAmount,
                        frequency: r.frequency,
                        nextEarning: utilities_1.getNextEarning(r.maturityDate) > 0 ? utilities_1.getNextEarning(r.maturityDate) : 0,
                        investmentAmount: Math.floor(r.targetValue),
                        intrest: Math.floor(r.interest),
                        timeline: {
                            start: 1,
                            end: r.term
                        },
                        status: 'completed'
                    }); });
                    completedInestment = __spreadArrays(fixedArrar, targetArrar);
                    allCount = completedInestment.length;
                    dispatch({ type: settingsTypes.FETCHED_ALL_COMPLETED_INVEST, payload: { count: allCount, data: completedInestment } });
                }
                else {
                    console.log('completedError', "Something went wrong...");
                }
                return [3 /*break*/, 4];
            case 3:
                _a = _g.sent();
                message = _a.message;
                console.log('completedError:', message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
