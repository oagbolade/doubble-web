"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.defaultInvestState = void 0;
var react_1 = require("react");
var antd_1 = require("antd");
require("antd/dist/antd.css");
var styled_components_1 = require("styled-components");
var image_1 = require("next/image");
var utils_1 = require("../../utils");
var shared_components_1 = require("../../shared-components");
var InputButtonGroup_1 = require("./InputButtonGroup");
var http_1 = require("../../https/http");
var utilities_1 = require("../../utils/utilities");
var hooks_1 = require("../../redux/hooks");
var investmentAction_1 = require("../../redux/investment/investmentAction");
var fa_1 = require("react-icons/fa");
var Select = styled_components_1["default"].select(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid #e5e5e5;\n  height: 50px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 5px;\n"], ["\n  border: 1px solid #e5e5e5;\n  height: 50px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 5px;\n"])));
exports.defaultInvestState = {
    title: "",
    amount: "",
    type: "",
    month: "",
    currency: "",
    frequency: "",
    fundingAccount: "",
    fundingBank: "",
    beneficiaryAcct: "",
    beneficiaryBank: ""
};
var CreateInvestmentModal = function (props) {
    var dispatch = hooks_1.useAppDispatch();
    var _a = react_1.useState(false), isModalVisible = _a[0], setIsModalVisible = _a[1];
    var _b = react_1.useState(false), isRequesting = _b[0], setIsRequesting = _b[1];
    var _c = react_1.useState(0), productID = _c[0], setProductID = _c[1];
    var _d = react_1.useState([]), data = _d[0], setData = _d[1];
    var _e = react_1.useState({
        target: [],
        fixed: []
    }), targetAndFixId = _e[0], setTargetAndFixId = _e[1];
    var _f = react_1.useState({
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
        targetValue: ""
    }), investment = _f[0], setInvestment = _f[1];
    react_1.useEffect(function () {
        if (props.isEditInvestment) {
            var eInvestment = props.investment;
            setInvestment(__assign(__assign({}, investment), { title: eInvestment.title, amount: eInvestment.amount, type: eInvestment.type, month: eInvestment.month, currency: eInvestment.currency, frequency: eInvestment.frequency, startDate: eInvestment.startDate, endDate: eInvestment.endDate, fundingAccount: eInvestment.beneficiaryAccount, beneficiaryAccount: eInvestment.beneficiaryAccount, rollover: "", transactionPIN: "", daoCode: eInvestment.daoCode, targetValue: "" }));
            loadTargetAndFixedId();
            getTargetData(eInvestment);
            getFixedData(eInvestment);
        }
    }, [props.isEditInvestment]);
    var user = hooks_1.useAppSelector(function (state) { return state.auth; }).user;
    var _g = hooks_1.useAppSelector(function (state) { return state.investment; }), loading = _g.loading, newError = _g.error, _h = _g.createInvestment, success = _h.success, message = _h.message;
    var _j = react_1.useState([]), allTargetInvestment = _j[0], setAllTargetInvestment = _j[1];
    var _k = react_1.useState({
        currency: "",
        fixedAmount: "",
        interest: "",
        term: 0,
        totalIncome: ""
    }), allFixedInvestment = _k[0], setAllFixedInvestment = _k[1];
    var _l = react_1.useState(0), totalAmount = _l[0], setTotalAmount = _l[1];
    var getTargetInvestment = function (data, currency, frequency) {
        if (data && currency) {
            var amt = data.filter(function (d) { return d.currency === currency && d.frequency === frequency; });
            if (amt[0].totalInterest) {
                setTotalAmount(amt[0].totalInterest);
                setInvestment(__assign(__assign({}, investment), { targetValue: amt[0].totalInterest.replace(",", "") }));
            }
        }
    };
    react_1.useEffect(function () {
        if (allTargetInvestment.length) {
            getTargetInvestment(allTargetInvestment, investment.currency, investment.frequency);
            setIsRequesting(false);
        }
    }, [
        allTargetInvestment,
        investment.currency,
        investment.frequency,
        investment.amount,
    ]);
    var getProductId = function (type) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, http_1.httpRequest({
                        url: "Explorer/ProductList ",
                        method: "POST"
                    })];
                case 1:
                    res = _a.sent();
                    if (res.status) {
                        res.data.forEach(function (pType) {
                            if (pType.productName.toLowerCase() === type.toLowerCase()) {
                                setProductID(Number(pType.id));
                            }
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var getTargetData = function (_a) {
        var amount = _a.amount, type = _a.type, month = _a.month, currency = _a.currency;
        return __awaiter(void 0, void 0, void 0, function () {
            var res, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, http_1.httpRequest({
                                url: "TargetInvestment/TargetMultipleCalculation",
                                method: "POST",
                                body: {
                                    month: Number(month),
                                    targetAmount: Number(amount)
                                }
                            })];
                    case 1:
                        res = _b.sent();
                        (res === null || res === void 0 ? void 0 : res.data) && Object.keys(res === null || res === void 0 ? void 0 : res.data).length > 0 && setIsRequesting(false);
                        setAllTargetInvestment(res === null || res === void 0 ? void 0 : res.data);
                        getProductId(props.investment.type);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.log("getTargetDataError", err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var getFixedData = function (_a) {
        var amount = _a.amount, month = _a.month, currency = _a.currency;
        return __awaiter(void 0, void 0, void 0, function () {
            var res;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, http_1.httpRequest({
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
                                fixedAmount: Number(amount),
                                currency: currency,
                                term: Number(month)
                            }
                        })];
                    case 1:
                        res = _c.sent();
                        (res === null || res === void 0 ? void 0 : res.data) && ((_b = res === null || res === void 0 ? void 0 : res.message) === null || _b === void 0 ? void 0 : _b.length) > 0 && setIsRequesting(false);
                        setAllFixedInvestment(__assign(__assign({}, allFixedInvestment), res === null || res === void 0 ? void 0 : res.data));
                        getProductId(props.investment.type);
                        return [2 /*return*/];
                }
            });
        });
    };
    var loadTargetAndFixedId = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, http_1.httpRequest({
                        url: "FixedInvestment/FetchFixedType",
                        method: "POST"
                    })];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, http_1.httpRequest({
                            url: "TargetInvestment/FetchTargetType",
                            method: "POST"
                        })];
                case 2:
                    res = _a.sent();
                    if ((result === null || result === void 0 ? void 0 : result.status) && (res === null || res === void 0 ? void 0 : res.status))
                        setTargetAndFixId({ target: res.data, fixed: result.data });
                    return [2 /*return*/];
            }
        });
    }); };
    var showModal = function () {
        if (!props.checkValid.isValid)
            return props.errMsg(props.checkValid.type);
        if (!props.investment.amount || props.investment.amount < 1)
            return props.errMsg("amount");
        if (props.investment.type === "fixed") {
            if (Number(props.investment.amount) < 49999) {
                props.fixedAmount("Fixed amount must be #50,000 and above");
                return false;
            }
        }
        setIsRequesting(true);
        props.closeTargetModal();
        setIsModalVisible(true);
        setInvestment(__assign(__assign({}, investment), props.investment));
        loadTargetAndFixedId();
        if (props.investment.type === "target") {
            getTargetData(props.investment);
            getFixedData(__assign(__assign({}, props.investment), { month: 30 }));
        }
        else {
            getFixedData(props.investment);
            getTargetData(__assign(__assign({}, props.investment), { month: 6 }));
        }
    };
    var handleOk = function () {
        setIsModalVisible(false);
    };
    var handleCancel = function () {
        setIsModalVisible(false);
        setInvestment({
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
            daoCode: ""
        });
        dispatch({ type: "CREATE_INVESTMENT_CLEAR" });
    };
    //create investment Validator///////////////////////////////////////
    /////////////////////////////////////////////////////
    var investmentValidator = function (newInvestment) {
        var _a = utils_1.checkValidator(newInvestment), isValid = _a.isValid, error = _a.error;
        if (!isValid)
            return { check: false, error: error };
        return { check: true, error: error };
    };
    var handleSubmit = function () {
        var isValid = investmentValidator(investment);
        if (!isValid.check) {
            dispatch({
                type: "FETCH_INVESTMENT_DETAIL_FAILED",
                payload: isValid.error
            });
            return false;
        }
        else {
            dispatch({ type: "CLEAR_INVESTMENT_ERROR" });
        }
        var newInfo = {
            userId: user.userId,
            bvn: user.bvn,
            emailAddress: user.emailAddress,
            firstName: user.firstName,
            lastName: user.lastName
        };
        if (props.isEditInvestment === true) {
            if (investment.type === "fixed") {
                dispatch(investmentAction_1.editFixedInvestment(investment, productID, newInfo, targetAndFixId.fixed));
            }
            else {
                investment.targetValue = allFixedInvestment.totalIncome;
                dispatch(investmentAction_1.editTargetInvestment(investment, productID, newInfo, targetAndFixId.target));
            }
        }
        else {
            if (investment.type === "fixed") {
                dispatch(investmentAction_1.createFixedInvestment(investment, productID, newInfo, targetAndFixId.fixed));
            }
            else {
                investment.targetValue = allFixedInvestment.totalIncome;
                dispatch(investmentAction_1.createTargetInvestment(investment, productID, newInfo, targetAndFixId.target));
            }
        }
    };
    react_1.useEffect(function () {
        var getAccount = function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, success, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, utilities_1.getUserAccounts(user === null || user === void 0 ? void 0 : user.bvn)];
                    case 1:
                        _a = _b.sent(), success = _a.success, data = _a.data;
                        if (success)
                            setData(data);
                        return [2 /*return*/];
                }
            });
        }); };
        getAccount();
    }, []);
    var getEndDate = function (d) {
        var newDate = new Date(d);
        var n;
        switch (Number(investment.month)) {
            case 6:
                newDate.setMonth(newDate.getMonth() + 6);
                n = newDate.toLocaleDateString().split("/").reverse();
                return n[0] + "-" + ((n[2] < 10 ? "0" : "") + n[2]) + "-" + ((n[1] < 10 ? "0" : "") + n[1]);
            case 12:
                newDate.setMonth(newDate.getMonth() + 12);
                n = newDate.toLocaleDateString().split("/").reverse();
                return n[0] + "-" + ((n[2] < 10 ? "0" : "") + n[2]) + "-" + ((n[1] < 10 ? "0" : "") + n[1]);
            case 24:
                newDate.setMonth(newDate.getMonth() + 24);
                n = newDate.toLocaleDateString().split("/").reverse();
                return n[0] + "-" + ((n[2] < 10 ? "0" : "") + n[2]) + "-" + ((n[1] < 10 ? "0" : "") + n[1]);
            case 36:
                newDate.setMonth(newDate.getMonth() + 36);
                n = newDate.toLocaleDateString().split("/").reverse();
                return n[0] + "-" + ((n[2] < 10 ? "0" : "") + n[2]) + "-" + ((n[1] < 10 ? "0" : "") + n[1]);
            case 48:
                newDate.setMonth(newDate.getMonth() + 48);
                n = newDate.toLocaleDateString().split("/").reverse();
                return n[0] + "-" + ((n[2] < 10 ? "0" : "") + n[2]) + "-" + ((n[1] < 10 ? "0" : "") + n[1]);
            case 60:
                newDate.setMonth(newDate.getMonth() + 60);
                n = newDate.toLocaleDateString().split("/").reverse();
                return n[0] + "-" + ((n[2] < 10 ? "0" : "") + n[2]) + "-" + ((n[1] < 10 ? "0" : "") + n[1]);
            case 30:
                newDate.setMonth(newDate.getMonth() + 1);
                n = newDate.toLocaleDateString().split("/").reverse();
                return n[0] + "-" + ((n[2] < 10 ? "0" : "") + n[2]) + "-" + ((n[1] < 10 ? "0" : "") + n[1]);
            case 90:
                newDate.setMonth(newDate.getMonth() + 3);
                n = newDate.toLocaleDateString().split("/").reverse();
                return n[0] + "-" + ((n[2] < 10 ? "0" : "") + n[2]) + "-" + ((n[1] < 10 ? "0" : "") + n[1]);
            case 180:
                newDate.setMonth(newDate.getMonth() + 6);
                n = newDate.toLocaleDateString().split("/").reverse();
                return n[0] + "-" + ((n[2] < 10 ? "0" : "") + n[2]) + "-" + ((n[1] < 10 ? "0" : "") + n[1]);
            case 360:
                newDate.setMonth(newDate.getMonth() + 12);
                n = newDate.toLocaleDateString().split("/").reverse();
                return n[0] + "-" + ((n[2] < 10 ? "0" : "") + n[2]) + "-" + ((n[1] < 10 ? "0" : "") + n[1]);
            default:
                newDate.setMonth(newDate.getMonth() + 12);
                n = newDate.toLocaleDateString().split("/").reverse();
                return n[0] + "-" + ((n[2] < 10 ? "0" : "") + n[2]) + "-" + ((n[1] < 10 ? "0" : "") + n[1]);
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("button", { onClick: showModal, style: {
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
                margin: "10px"
            } }, props.isEditInvestment === true ? (react_1["default"].createElement("span", { className: "px-3" }, !isRequesting ? (react_1["default"].createElement(fa_1.FaPencilAlt, { fontSize: "20px", className: "text-primary-blue" })) : (react_1["default"].createElement(image_1["default"], { src: "/load.gif", alt: "Fixed investment", width: 30, height: 30 })))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(shared_components_1.Typography, { fontColor: "#00CCFF" }, "Calculate Investment"),
            isRequesting && (react_1["default"].createElement(shared_components_1.FlexWrapper, { marginLeft: "8px" },
                react_1["default"].createElement(image_1["default"], { src: "/load.gif", alt: "Fixed investment", width: 25, height: 25 })))))),
        react_1["default"].createElement(antd_1.Modal, { maskStyle: { backgroundColor: "rgba(0, 0, 0, 0.8)" }, title: null, closable: false, footer: null, visible: isModalVisible, onOk: handleOk, onCancel: handleCancel },
            react_1["default"].createElement(shared_components_1.Card, { boxShadow: "", width: "100%", height: "1200px", flexDirection: "column", display: "flex", borderRadius: "0" },
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%" },
                    react_1["default"].createElement(shared_components_1.FormInputV2, { placeholder: "Investment title", value: investment.title, maxLength: 50, name: "title", onChange: function (_a) {
                            var _b;
                            var target = _a.target;
                            return setInvestment(__assign(__assign({}, investment), (_b = {}, _b[target.name] = target.value, _b)));
                        } })),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginTop: "10px", marginBottom: "10px" },
                    react_1["default"].createElement(InputButtonGroup_1["default"], { currency: function (c) { return setInvestment(__assign(__assign({}, investment), { currency: c })); }, currencySign: investment.currency, placeholder: "Investment amount", value: investment.amount, name: "amount", onChange: function (_a) {
                            var _b;
                            var target = _a.target;
                            setInvestment(__assign(__assign({}, investment), (_b = {}, _b[target.name] = target.value, _b)));
                            investment.type === "target"
                                ? getTargetData(__assign(__assign({}, props.investment), { month: investment.month, amount: target.value }))
                                : getFixedData(__assign(__assign({}, props.investment), { month: investment.month, amount: target.value }));
                        } })),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "20px" },
                    react_1["default"].createElement(Select, { value: investment.type, name: "type", onChange: function (_a) {
                            var _b;
                            var target = _a.target;
                            return setInvestment(__assign(__assign({}, investment), (_b = {}, _b[target.name] = target.value, _b)));
                        } },
                        react_1["default"].createElement("option", { value: "target" }, "Target Investment"),
                        react_1["default"].createElement("option", { value: "fixed" }, "Fixed Investment"))),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "50px" },
                    react_1["default"].createElement(Select, { value: investment.month, name: "month", onChange: function (e) {
                            setIsRequesting(true);
                            if (investment.type === "target") {
                                setInvestment(__assign(__assign({}, investment), { month: e.target.value }));
                                getTargetData(__assign(__assign({}, props.investment), { month: e.target.value }));
                            }
                            else {
                                getFixedData(__assign(__assign({}, props.investment), { month: e.target.value }));
                            }
                        } }, investment.type === "target" ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement("option", { value: "6" }, "6 Months"),
                        react_1["default"].createElement("option", { value: "12" }, "1 Year"),
                        react_1["default"].createElement("option", { value: "24" }, "2 Years"),
                        react_1["default"].createElement("option", { value: "36" }, "3 Years"),
                        react_1["default"].createElement("option", { value: "48" }, "4 Years"),
                        react_1["default"].createElement("option", { value: "60" }, "5 Years"))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement("option", { value: "30" }, "1 Month"),
                        react_1["default"].createElement("option", { value: "60" }, "2 Months"),
                        react_1["default"].createElement("option", { value: "90" }, "3 Months"),
                        react_1["default"].createElement("option", { value: "180" }, "6 Months"),
                        react_1["default"].createElement("option", { value: "360" }, "1 Year"))))),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "20px", flexDirection: "row", justifyContent: "center", alignItems: "center" }, isRequesting && (react_1["default"].createElement("span", null,
                    react_1["default"].createElement(image_1["default"], { src: "/loader.gif", alt: "Fixed investment", width: 40, height: 40 })))),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "20px" },
                    react_1["default"].createElement(shared_components_1.Typography, { textAlign: "center", fontColor: "#263D61", fontSize: "14px", width: "100%" }, investment.type === "fixed"
                        ? "Total Earnings"
                        : "Total Investment")),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "20px" },
                    react_1["default"].createElement(shared_components_1.Typography, { textAlign: "center", fontColor: "#263D61", fontSize: "25px", width: "100%", fontWeight: "500" },
                        investment.currency === "NGN" ? "₦" : "$",
                        investment.type === "target"
                            ? totalAmount
                            : utilities_1.formatCurrency(Number(allFixedInvestment.totalIncome)))),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "20px" },
                    react_1["default"].createElement(Select, { disabled: investment.type !== "target", value: investment.frequency, name: "frequency", onChange: function (e) {
                            setIsRequesting(true);
                            setInvestment(__assign(__assign({}, investment), { frequency: e.target.value }));
                        } },
                        react_1["default"].createElement("option", { value: "investment duration" }, "Investment Frequency"),
                        react_1["default"].createElement("option", { value: "Daily" }, "Daily"),
                        react_1["default"].createElement("option", { value: "Weekly" }, "Weekly"),
                        react_1["default"].createElement("option", { value: "Monthly" }, "Monthly"),
                        react_1["default"].createElement("option", { value: "Quarterly" }, "Quarterly"),
                        react_1["default"].createElement("option", { value: "Biannually" }, "Biannually"),
                        react_1["default"].createElement("option", { value: "Yearly" }, "Yearly"))),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "20px", flexDirection: "row" },
                    react_1["default"].createElement(shared_components_1.FlexWrapper, null,
                        react_1["default"].createElement(shared_components_1.FormInputV2, { title: "Start Date", value: investment.startDate, name: "startDate", onChange: function (_a) {
                                var _b;
                                var target = _a.target;
                                return setInvestment(__assign(__assign({}, investment), (_b = {}, _b[target.name] = target.value, _b.endDate = getEndDate(target.value), _b)));
                            }, type: "date" })),
                    react_1["default"].createElement(shared_components_1.FlexWrapper, { alignItems: "center", paddingLeft: "20px", paddingRight: "20px" },
                        react_1["default"].createElement(shared_components_1.Typography, null, "-")),
                    react_1["default"].createElement(shared_components_1.FlexWrapper, null,
                        react_1["default"].createElement(shared_components_1.FormInputV2, { title: "End Date", value: investment.endDate, name: "endDate", disabled: true, 
                            // onChange={({ target }) =>
                            //   setInvestment({ ...investment, [target.name]: target.value })
                            // }
                            type: "date" }))),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "20px" },
                    react_1["default"].createElement(Select, { value: investment.fundingAccount, name: "fundingAccount", onChange: function (e) {
                            var _a;
                            return setInvestment(__assign(__assign({}, investment), (_a = {}, _a[e.target.name] = e.target.value, _a)));
                        } },
                        react_1["default"].createElement("option", { value: "" }, data.length > 0
                            ? "Funding Account"
                            : "Fetching Funding Account..."),
                        data.length &&
                            data.map(function (info, i) { return (react_1["default"].createElement("option", { key: i, value: info.account.split(" ")[0] },
                                info.account,
                                " - \u20A6",
                                utilities_1.formatCurrency(Number(info.balance)))); }))),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "20px" },
                    react_1["default"].createElement(Select, { value: investment.beneficiaryAccount, name: "beneficiaryAccount", onChange: function (e) {
                            var _a;
                            return setInvestment(__assign(__assign({}, investment), (_a = {}, _a[e.target.name] = e.target.value, _a)));
                        } },
                        react_1["default"].createElement("option", { value: "" }, data.length > 0
                            ? "Beneficiary Account"
                            : "Fetching Beneficiary Account..."),
                        data.length &&
                            data.map(function (info, i) { return (react_1["default"].createElement("option", { key: i, value: info.account.split(" ")[0] },
                                info.account,
                                " - \u20A6",
                                utilities_1.formatCurrency(Number(info.balance)))); }))),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "20px" },
                    react_1["default"].createElement(Select, { value: investment.rollover, name: "rollover", onChange: function (e) {
                            var _a;
                            return setInvestment(__assign(__assign({}, investment), (_a = {}, _a[e.target.name] = e.target.value, _a)));
                        } },
                        react_1["default"].createElement("option", { value: "" }, "Select Rollover"),
                        react_1["default"].createElement("option", { value: "0" }, "No"),
                        react_1["default"].createElement("option", { value: "1" }, "Principal only"),
                        react_1["default"].createElement("option", { value: "2" }, "Principal and Interest"))),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%" },
                    react_1["default"].createElement(shared_components_1.FormInputV2, { placeholder: "Enter Transaction pin", value: investment.transactionPIN, name: "transactionPIN", type: "password", maxLength: 4, onChange: function (_a) {
                            var _b;
                            var target = _a.target;
                            return setInvestment(__assign(__assign({}, investment), (_b = {}, _b[target.name] = target.value, _b)));
                        } })),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%" },
                    react_1["default"].createElement(shared_components_1.FormInputV2, { placeholder: "Enter DAO Referal Code", value: investment.daoCode, name: "daoCode", onChange: function (_a) {
                            var _b;
                            var target = _a.target;
                            return setInvestment(__assign(__assign({}, investment), (_b = {}, _b[target.name] = target.value, _b)));
                        } })),
                newError.length > 0 && (react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginTop: "10px" },
                    react_1["default"].createElement(shared_components_1.Typography, { textAlign: "center", fontColor: "#990000", fontSize: "16px", width: "100%", fontWeight: "500" }, newError))),
                (message === null || message === void 0 ? void 0 : message.length) > 0 && (react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginTop: "10px" },
                    react_1["default"].createElement(shared_components_1.Typography, { textAlign: "center", fontColor: success ? "#00CCFF" : "#990000", fontSize: "16px", width: "100%", fontWeight: "500" }, message))),
                success ? (react_1["default"].createElement("button", { style: {
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
                        margin: "10px"
                    }, onClick: handleCancel },
                    react_1["default"].createElement(shared_components_1.Typography, { fontColor: "#00CCFF" }, "Close Modal"))) : (react_1["default"].createElement("button", { style: {
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
                        margin: "20px 10px 10px 10px"
                    }, onClick: handleSubmit },
                    react_1["default"].createElement(shared_components_1.Typography, { fontColor: "#00CCFF" },
                        props.isEditInvestment ? "Update" : "Invest",
                        " Now"),
                    loading && (react_1["default"].createElement(shared_components_1.FlexWrapper, { marginLeft: "8px" },
                        react_1["default"].createElement(image_1["default"], { src: "/load.gif", alt: "Fixed investment", width: 25, height: 25 })))))))));
};
exports["default"] = CreateInvestmentModal;
var templateObject_1;
