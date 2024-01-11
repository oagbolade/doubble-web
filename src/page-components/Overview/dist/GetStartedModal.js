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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.defaultCalculateState = void 0;
var react_1 = require("react");
var antd_1 = require("antd");
require("antd/dist/antd.css");
var styled_components_1 = require("styled-components");
var utils_1 = require("../../utils");
var shared_components_1 = require("../../shared-components");
var InputButtonGroup_1 = require("./InputButtonGroup");
var CreateInvestmentModal_1 = require("./CreateInvestmentModal");
var overview_module_css_1 = require("../../../styles/overview.module.css");
var Select = styled_components_1["default"].select(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid #e5e5e5;\n  height: 50px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 5px;\n"], ["\n  border: 1px solid #e5e5e5;\n  height: 50px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 5px;\n"])));
exports.defaultCalculateState = {
    title: "",
    amount: "",
    type: "",
    month: "",
    currency: "",
    frequency: ""
};
var GetStartedModal = function (props) {
    var _a = utils_1.useFormValidation(exports.defaultCalculateState, utils_1.calculateInvestmentSchema), handleChange = _a.handleChange, formValues = _a.formValues, errors = _a.errors;
    var _b = react_1.useState(false), isModalVisible = _b[0], setIsModalVisible = _b[1];
    var _c = react_1.useState(""), msg = _c[0], setMsg = _c[1];
    var _d = react_1.useState({
        title: "",
        amount: "",
        type: (props === null || props === void 0 ? void 0 : props.type) ? "fixed" : "target",
        month: "30",
        currency: "NGN",
        frequency: "Yearly"
    }), investment = _d[0], setInvestment = _d[1];
    var type = errors.type, month = errors.month, currency = errors.currency, frequency = errors.frequency, err = __rest(errors, ["type", "month", "currency", "frequency"]);
    var showModal = function () {
        props.closeTargetModal();
        setIsModalVisible(true);
    };
    var handleOk = function () {
        setIsModalVisible(false);
    };
    var handleCancel = function () {
        setIsModalVisible(false);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        props.children ? react_1["default"].createElement("span", { onClick: showModal }, props.children) : react_1["default"].createElement("button", { className: overview_module_css_1["default"].createinvestmentbutton, style: { lineHeight: '21px' }, onClick: showModal }, props.title),
        react_1["default"].createElement(antd_1.Modal, { maskStyle: { backgroundColor: "rgba(0, 0, 0, 0.8)" }, title: null, closable: false, footer: null, visible: isModalVisible, onOk: handleOk, onCancel: handleCancel },
            react_1["default"].createElement(shared_components_1.Card, { boxShadow: "", width: "100%", height: "420px", flexDirection: "column", display: "flex", borderRadius: "0" },
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%" },
                    react_1["default"].createElement(shared_components_1.FormInputV2, { value: formValues.title, name: "title", maxLength: 50, onChange: handleChange, placeholder: "Enter Investment Title", error: errors.title })),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginTop: "10px", marginBottom: "10px" },
                    react_1["default"].createElement(InputButtonGroup_1["default"], { currency: function (c) { return setInvestment(__assign(__assign({}, investment), { currency: c })); }, currencySign: investment.currency, value: formValues.amount, type: "number", name: "amount", onChange: handleChange, placeholder: "Enter Investment Amount", error: errors.amount })),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "20px" },
                    react_1["default"].createElement(Select, { value: investment.type, name: "type", onChange: function (e) {
                            var _a;
                            setInvestment(__assign(__assign({}, investment), (_a = {}, _a[e.target.name] = e.target.value, _a)));
                            msg && setMsg("");
                        } },
                        react_1["default"].createElement("option", { value: "target" }, "Target Investment"),
                        react_1["default"].createElement("option", { value: "fixed" }, "Fixed Investment"))),
                react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "20px" },
                    react_1["default"].createElement(Select, { value: investment.month, name: "month", onChange: function (e) {
                            var _a;
                            return setInvestment(__assign(__assign({}, investment), (_a = {}, _a[e.target.name] = e.target.value, _a)));
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
                msg && (react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "10px" },
                    react_1["default"].createElement(shared_components_1.Typography, { textAlign: "center", fontColor: "#990000", fontSize: "16px", width: "100%", fontWeight: "500" }, msg))),
                react_1["default"].createElement(CreateInvestmentModal_1["default"], { investment: __assign(__assign({}, investment), { title: formValues.title, amount: formValues.amount }), errMsg: function (err) {
                        setMsg(err === "title"
                            ? "Investment title is required"
                            : err === "amount" && "Investment amount is required");
                        setTimeout(function () { return setMsg(""); }, 4000);
                    }, isEditInvestment: false, checkValid: utils_1.checkValid(formValues, err), closeTargetModal: handleCancel, fixedAmount: function (info) { return setMsg(info); } })))));
};
GetStartedModal.defaultProps = {
    title: "Let’s Get Started"
};
exports["default"] = GetStartedModal;
var templateObject_1;
// import styled from "styled-components";
// import {
//   FlexWrapper,
//   Typography,
//   Card,
//   Modal,
//   FormInputV2,
// } from "../../shared-components";
// import InputButtonGroup from "./InputButtonGroup";
// const Select = styled.select`
//   border: 1px solid #e5e5e5;
//   height: 50px;
//   width: 100%;
//   border-radius: 5px;
//   padding: 5px;
// `;
// const GetStartedModal = ({ onClose }) => {
//   return (
//     <Modal onClose={onClose}>
//       <Card
//         boxShadow=""
//         width="820px"
//         height="420px"
//         flexDirection="column"
//         display="flex"
//         borderRadius="0"
//       >
//         <FlexWrapper width="90%">
//           <FormInputV2 placeholder="Enter Investment Title" />
//         </FlexWrapper>
//         <FlexWrapper width="90%" marginTop="10px" marginBottom="10px">
//           <InputButtonGroup placeholder="Enter Investment Amount" />
//         </FlexWrapper>
//         <FlexWrapper width="90%" marginBottom="20px">
//           <Select>
//             <option value="investment type">Investment type</option>
//           </Select>
//         </FlexWrapper>
//         <FlexWrapper width="90%" marginBottom="20px">
//           <Select>
//             <option value="investment duration">Investment duration</option>
//           </Select>
//         </FlexWrapper>
//         <button
//           style={{
//             width: "70%",
//             height: "50px",
//             background: "#263E61",
//             color: "#00CCFF",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             borderRadius: "5px",
//             border: "none",
//             cursor: "pointer",
//             margin: "10px",
//           }}
//         >
//           <Typography fontColor="#00CCFF">Calculate Investment</Typography>
//         </button>
//       </Card>
//     </Modal>
//   );
// };
// export default GetStartedModal;
