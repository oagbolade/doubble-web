"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var shared_components_1 = require("../../shared-components");
var InputButtonGroup_1 = require("./InputButtonGroup");
var Select = styled_components_1["default"].select(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid #e5e5e5;\n  height: 50px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 5px;\n"], ["\n  border: 1px solid #e5e5e5;\n  height: 50px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 5px;\n"])));
var CalculateInvestmentFormModal = function (_a) {
    var onClose = _a.onClose;
    return (React.createElement(shared_components_1.Modal, { onClose: onClose },
        React.createElement(shared_components_1.Card, { boxShadow: "", width: "820px", height: "420px", flexDirection: "column", display: "flex", borderRadius: "0" },
            React.createElement(shared_components_1.FlexWrapper, { width: "90%" },
                React.createElement(shared_components_1.FormInputV2, null)),
            React.createElement(shared_components_1.FlexWrapper, { width: "90%", marginTop: "10px", marginBottom: "10px" },
                React.createElement(InputButtonGroup_1["default"], null)),
            React.createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "20px" },
                React.createElement(Select, null,
                    React.createElement("option", { value: "investment type" }, "investment typee"))),
            React.createElement(shared_components_1.FlexWrapper, { width: "90%", marginBottom: "20px" },
                React.createElement(Select, null,
                    React.createElement("option", { value: "investment duration" }, "investment duration"))),
            React.createElement("button", { style: {
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
                React.createElement(shared_components_1.Typography, { fontColor: "#00CCFF" }, "Calculate Investment")))));
};
exports["default"] = CalculateInvestmentFormModal;
var templateObject_1;
