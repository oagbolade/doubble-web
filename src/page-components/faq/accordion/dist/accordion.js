"use strict";
exports.__esModule = true;
exports.AccordionComponent = void 0;
var react_1 = require("react");
var accordionState_1 = require("./accordionState");
var accordionStyles_1 = require("./accordionStyles");
exports.AccordionComponent = function (_a) {
    var data = _a.data;
    return (react_1["default"].createElement("div", { className: "container mx-auto p-0 mb-5", style: { maxWidth: "800px" } },
        react_1["default"].createElement(accordionStyles_1.Accordion, null, data === null || data === void 0 ? void 0 : data.map(function (_a, i) {
            var title = _a.title, content = _a.content;
            return (react_1["default"].createElement(accordionState_1.AccordionState, { title: title, content: content, key: i }));
        }))));
};
