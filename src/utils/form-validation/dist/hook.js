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
exports.checkUserValidity = exports.setTargetId = exports.getFixedId = exports.getTargetId = exports.setFixedId = exports.checkValidator = exports.checkValid = exports.useFormValidation = void 0;
var react_1 = require("react");
var http_1 = require("../../https/http");
function useFormValidation(stateSchema, stateValidatorSchema) {
    var _a = react_1["default"].useState(stateSchema), formValues = _a[0], setValues = _a[1];
    var _b = react_1["default"].useState(stateSchema), errors = _b[0], setErrors = _b[1];
    var validateFormFields = react_1["default"].useCallback(function (name, value) {
        var validator = stateValidatorSchema;
        var field = validator[name];
        var error = "";
        if (field.isEmpty) {
            error = !field.isEmpty.func(value) ? field.isEmpty.error : "";
        }
        if (field.isString) {
            error = !field.isString.func(value) ? field.isString.error : "";
        }
        if (field.isEmail) {
            error = !field.isEmail.func(value) ? field.isEmail.error : "";
        }
        if (field.isValidPassword) {
            error = !field.isValidPassword.func(value)
                ? field.isValidPassword.error
                : "";
        }
        if (field.isEqual) {
            error = !field.isEqual.func(formValues.password, formValues.confirmPassword)
                ? field.isEqual.error
                : "";
        }
        return error;
    }, [stateValidatorSchema, formValues]);
    var handleChange = react_1["default"].useCallback(function (event) {
        var target = event.target;
        var value = target.value;
        var name = target.name;
        var error = validateFormFields(name, value);
        setValues(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[name] = value, _a)));
        });
        setErrors(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[name] = error, _a)));
        });
    }, [validateFormFields]);
    return {
        handleChange: handleChange,
        formValues: formValues,
        errors: errors
    };
}
exports.useFormValidation = useFormValidation;
exports.checkValid = function (formValues, errors) {
    var isValid = true;
    var type = "";
    for (var key in errors) {
        if (errors[key].trim() !== "" ||
            (errors[key].trim() === "" && formValues[key] === ""))
            isValid = false;
        type = key;
        break;
    }
    return { isValid: isValid, type: type };
};
exports.checkValidator = function (input) {
    var isValid = true;
    var error = "";
    for (var _i = 0, _a = Object.entries(input); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (key === "daoCode" || key === "targetValue") {
        }
        else {
            if (String(value).trim() === "") {
                isValid = false;
                error = key + " is required!";
                break;
            }
        }
    }
    return { isValid: isValid, error: error };
};
exports.setFixedId = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, http_1.httpRequest({
                    url: "FixedInvestment/FetchFixedType",
                    method: "POST"
                })];
            case 1:
                res = _a.sent();
                if (res.status)
                    return [2 /*return*/, res.data];
                return [2 /*return*/];
        }
    });
}); };
exports.getTargetId = function (targetIdDetails, currency, duration) {
    if (targetIdDetails.length === 0)
        return 'empty';
    for (var _i = 0, targetIdDetails_1 = targetIdDetails; _i < targetIdDetails_1.length; _i++) {
        var targetDetails = targetIdDetails_1[_i];
        if (currency === targetDetails.currency &&
            Number(duration) >= targetDetails.min &&
            Number(duration) <= targetDetails.max) {
            return targetDetails.id;
        }
        else if (currency === targetDetails.currency &&
            Number(duration) >= targetDetails.min &&
            Number(duration) <= targetDetails.max) {
            return targetDetails.id;
        }
    }
};
exports.getFixedId = function (fixedIdDetails, currency, amount, duration) {
    if (fixedIdDetails.length === 0)
        return 'empty';
    for (var _i = 0, fixedIdDetails_1 = fixedIdDetails; _i < fixedIdDetails_1.length; _i++) {
        var fixedDetails = fixedIdDetails_1[_i];
        if (currency === fixedDetails.currency &&
            Number(duration) >= fixedDetails.minTerm &&
            Number(duration) <= fixedDetails.maxTerm &&
            Number(amount) >= fixedDetails.minAmount &&
            Number(amount) <= fixedDetails.maxAmount) {
            return fixedDetails.id;
        }
        else if (currency === fixedDetails.currency &&
            Number(duration) >= fixedDetails.minTerm &&
            Number(duration) <= fixedDetails.maxTerm &&
            Number(amount) >= fixedDetails.minAmount &&
            Number(amount) <= fixedDetails.maxAmount) {
            return fixedDetails.id;
        }
    }
};
exports.setTargetId = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, http_1.httpRequest({
                    url: "TargetInvestment/FetchTargetType",
                    method: "POST"
                })];
            case 1:
                res = _a.sent();
                if (res.status)
                    return [2 /*return*/, res.data];
                return [2 /*return*/];
        }
    });
}); };
exports.checkUserValidity = function (updatedData) {
    var _a, _b, _c, _d, _e, _f, _g;
    var isValid = false;
    if (((_a = updatedData.firstName) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
        ((_b = updatedData.lastName) === null || _b === void 0 ? void 0 : _b.length) > 0 &&
        ((_c = updatedData.dob) === null || _c === void 0 ? void 0 : _c.length) > 0 &&
        ((_d = updatedData.gender) === null || _d === void 0 ? void 0 : _d.length) > 0 &&
        ((_e = updatedData.mobileNumber) === null || _e === void 0 ? void 0 : _e.length) > 0 &&
        ((_f = updatedData.username) === null || _f === void 0 ? void 0 : _f.length) > 0 &&
        ((_g = updatedData.emailAddress) === null || _g === void 0 ? void 0 : _g.length) > 0) {
        isValid = true;
    }
    else {
        isValid = false;
    }
    return { isValid: isValid };
};
