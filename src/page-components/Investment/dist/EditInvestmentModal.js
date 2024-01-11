"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var react_1 = require("react");
var antd_1 = require("antd");
var shared_components_1 = require("../../shared-components");
var antd_2 = require("antd");
var http_1 = require("../../https/http");
var fa_1 = require("react-icons/fa");
var styled_components_1 = require("styled-components");
var Select = styled_components_1["default"].select(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid #e5e5e5;\n  height: 50px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 5px;\n"], ["\n  border: 1px solid #e5e5e5;\n  height: 50px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 5px;\n"])));
var EditInvestmentModal = function (_a) {
    var details = _a.details, user = _a.user;
    console.log("details", details);
    var _b = react_1.useState(false), isModalVisible = _b[0], setIsModalVisible = _b[1];
    var _c = react_1.useState(""), pin = _c[0], setPin = _c[1];
    var _d = react_1.useState(false), loading = _d[0], setLoading = _d[1];
    var showModal = function () {
        setIsModalVisible(true);
    };
    var handleOk = function () {
        setIsModalVisible(false);
    };
    var handleCancel = function () {
        setIsModalVisible(false);
    };
    var checkInvestmentType = function (type) {
        switch (type) {
            case "Active Fixed":
                return "FixedInvestment/TerminateFixed";
            case "Future Fixed":
                return "FixedInvestment/TerminateFutureFixed";
            case "Active Target":
                return "TargetInvestment/TerminateTarget";
            case "Future Target":
                return "TargetInvestment/TerminateFutureTarget";
            default:
                return null;
        }
    };
    var confirmHandler = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, _a, message_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!details.type)
                        return [2 /*return*/, antd_2.message.error("Something went wrong, please refresh this page!")];
                    if (!pin)
                        return [2 /*return*/, antd_2.message.error("Transaction PIN is required!")];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    setLoading(true);
                    return [4 /*yield*/, http_1.httpRequest({
                            url: checkInvestmentType(details.type),
                            method: "POST",
                            body: {
                                platform: 1,
                                imei: "string",
                                deviceType: "1",
                                deviceManufacturer: "string",
                                deviceModel: "string",
                                deviceIP: "string",
                                deviceName: "string",
                                emailAddress: user.emailAddress,
                                firstName: user.firstName,
                                investmentID: details.investmentID,
                                userId: user.userId,
                                transactionPIN: pin
                            }
                        })];
                case 2:
                    result = _b.sent();
                    if (result.status) {
                        setLoading(false);
                        setIsModalVisible(false);
                        antd_2.message.success(result.message);
                    }
                    else {
                        setLoading(false);
                        setIsModalVisible(false);
                        antd_2.message.error(result.message);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    _a = _b.sent();
                    message_1 = _a.message;
                    setLoading(false);
                    setIsModalVisible(false);
                    message_1.error(message_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(shared_components_1.IconButton, { onClick: showModal, borderRadius: "5px", background: "#263D61" },
            react_1["default"].createElement(fa_1.FaPencilAlt, { fontSize: "20px", className: "text-primary-blue" })),
        react_1["default"].createElement(antd_1.Modal, { title: null, visible: isModalVisible, onCancel: handleCancel, footer: null },
            react_1["default"].createElement(shared_components_1.Card, { boxShadow: "", width: "!00%", height: "500px", flexDirection: "column", display: "flex", borderRadius: "0" },
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", flexDirection: "column" },
                    react_1["default"].createElement(shared_components_1.FlexWrapper, { marginBottom: "10px" },
                        react_1["default"].createElement(shared_components_1.Typography, { fontColor: "#C4C4C4", fontSize: "12px", fontWeight: "700" }, "Investment Title")),
                    react_1["default"].createElement(shared_components_1.FormInputV2, { type: "text", name: "bvn", placeholder: "BVN" })),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", flexDirection: "column", marginBottom: "10px" },
                    react_1["default"].createElement(shared_components_1.FlexWrapper, { marginBottom: "10px" },
                        react_1["default"].createElement(shared_components_1.Typography, { fontColor: "#C4C4C4", fontSize: "12px", fontWeight: "700" }, "Change Beneficiary")),
                    react_1["default"].createElement(shared_components_1.FlexWrapper, { position: "relative" },
                        react_1["default"].createElement(shared_components_1.FormInputV2, null),
                        react_1["default"].createElement(shared_components_1.Typography, { position: "absolute", fontSize: "10px", fontColor: "#00CCFF", top: "50%", right: "5%" }, "View saved accounts"))),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "20px" },
                    react_1["default"].createElement(Select, null,
                        react_1["default"].createElement("option", { value: "GTBank" }, "GTBank"))),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "80%", marginBottom: "20px" },
                    react_1["default"].createElement(shared_components_1.Typography, { fontColor: "#C4C4C4", fontSize: "12px", fontWeight: "700" }, "Desmond Edward Francis")),
                react_1["default"].createElement("button", { style: {
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
                    } },
                    react_1["default"].createElement(shared_components_1.Typography, { fontColor: "#00CCFF" }, "Save"))))));
};
exports["default"] = EditInvestmentModal;
var templateObject_1;
