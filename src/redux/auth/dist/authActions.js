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
exports.__esModule = true;
exports.logout = exports.userInfo = exports.newDevice = exports.login = exports.register = void 0;
var http_1 = require("../../https/http");
var AuthTypes = require("./authTypes");
exports.register = function (data) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var result, _a, message;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                dispatch({ type: AuthTypes.REGISTERING });
                return [4 /*yield*/, http_1.httpRequest({
                        url: "Account/Register",
                        method: "POST",
                        body: data
                    })];
            case 1:
                result = _b.sent();
                if (result.status === false) {
                    dispatch({
                        type: "OTP_COMPLETE",
                        payload: {
                            emailAddress: data.emailAddress,
                            mobileNumber: data.mobilePhoneNumber,
                            userId: "",
                            type: "email"
                        }
                    });
                    dispatch({ type: AuthTypes.REGISTER_SUCCESS, payload: result.message });
                    setTimeout(function () { return dispatch({ type: AuthTypes.REGISTER_RESET }); }, 6000);
                }
                else {
                    dispatch({ type: AuthTypes.REGISTER_FAILED, payload: result.message });
                    setTimeout(function () { return dispatch({ type: AuthTypes.CLEAR_LOGIN_ERROR }); }, 5000);
                }
                return [3 /*break*/, 3];
            case 2:
                _a = _b.sent();
                message = _a.message;
                dispatch({
                    type: AuthTypes.REGISTER_FAILED,
                    payload: message || "oops !!! something went wrong, please try again."
                });
                console.log("ERRROR", message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.login = function (data, router) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var result, _a, message;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 2, 3, 4]);
                dispatch({ type: AuthTypes.LOGGING_IN });
                return [4 /*yield*/, http_1.httpRequest({
                        url: "Account/Login",
                        method: "POST",
                        body: data
                    })];
            case 1:
                result = _d.sent();
                console.log('loginResult', result);
                if (result.status === true) {
                    dispatch({ type: AuthTypes.LOGIN_SUCCESS, payload: result.data });
                    if (((_b = result === null || result === void 0 ? void 0 : result.data) === null || _b === void 0 ? void 0 : _b.isUserMigrated) === true) {
                        router.push('/existing-user');
                    }
                }
                else {
                    if (result.message === "Unidentified device") {
                        dispatch({ type: AuthTypes.LOGIN_SUCCESS, payload: result.data });
                        if (((_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.isUserMigrated) === true) {
                            return [2 /*return*/, router.push('/existing-user')];
                        }
                    }
                    else {
                        dispatch({ type: AuthTypes.LOGIN_FAILED, payload: result.message });
                    }
                }
                return [3 /*break*/, 4];
            case 2:
                _a = _d.sent();
                message = _a.message;
                dispatch({
                    type: AuthTypes.LOGIN_FAILED,
                    payload: "oops !!! something went wrong, please try again."
                });
                return [3 /*break*/, 4];
            case 3:
                dispatch({ type: AuthTypes.LOGIN_COMPLETED });
                return [7 /*endfinally*/];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
exports.newDevice = function (data) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var result, _a, message;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, 3, 4]);
                dispatch({ type: AuthTypes.LOGGING_IN });
                return [4 /*yield*/, http_1.httpRequest({
                        url: "Account/Login",
                        method: "POST",
                        body: data
                    })];
            case 1:
                result = _b.sent();
                if (result.status) {
                    dispatch({ type: AuthTypes.LOGIN_SUCCESS, payload: result.data });
                }
                else {
                    if (result.message === "Unidentified device") {
                        dispatch({ type: AuthTypes.LOGIN_SUCCESS, payload: result.data });
                    }
                    else {
                        dispatch({ type: AuthTypes.LOGIN_FAILED, payload: result.message });
                    }
                }
                return [3 /*break*/, 4];
            case 2:
                _a = _b.sent();
                message = _a.message;
                dispatch({
                    type: AuthTypes.LOGIN_FAILED,
                    payload: "oops, something went wrong, please try again!!."
                });
                return [3 /*break*/, 4];
            case 3:
                dispatch({ type: AuthTypes.LOGIN_COMPLETED });
                return [7 /*endfinally*/];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
exports.userInfo = function (obj) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("userInof", __assign(__assign({}, getState().auth.user), obj));
        dispatch({
            type: AuthTypes.LOGIN_SUCCESS,
            payload: __assign(__assign({}, getState().auth.user), obj)
        });
        return [2 /*return*/];
    });
}); }; };
exports.logout = function () { return function (dispatch) {
    dispatch({ type: AuthTypes.LOGOUT });
}; };
