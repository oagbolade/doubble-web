"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var shared_components_1 = require("../../shared-components");
var icons_1 = require("../../icons");
var InvestmentModalHorizontalProgressBar_1 = require("./Utils/InvestmentModalHorizontalProgressBar");
var utilities_1 = require("../../utils/utilities");
var table_module_css_1 = require("../../../styles/table.module.css");
var SelectSmall = styled_components_1["default"].select(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid #e5e5e5;\n  height: 30px;\n  width: 68px;\n  border-radius: 5px;\n  padding: 5px;\n"], ["\n  border: 1px solid #e5e5e5;\n  height: 30px;\n  width: 68px;\n  border-radius: 5px;\n  padding: 5px;\n"])));
var InvestmentTable = function (_a) {
    var handleClick = _a.handleClick, tabledata = _a.tabledata, filter = _a.filter;
    var _b = react_1.useState(1), page = _b[0], setPage = _b[1];
    var _c = react_1.useState(10), limit = _c[0], setLimit = _c[1];
    var _d = react_1.useState([]), pageData = _d[0], setPageData = _d[1];
    var _e = react_1.useState(0), totalpages = _e[0], setTotalPages = _e[1];
    react_1.useEffect(function () {
        var offset = (page - 1) * limit;
        var endposition = page * limit;
        if (filter === "asc") {
            setPageData(tabledata
                .slice(offset, endposition)
                .sort(function (a, b) { return (a === null || a === void 0 ? void 0 : a.title.charCodeAt(0)) - (b === null || b === void 0 ? void 0 : b.title.charCodeAt(0)); }));
        }
        else {
            setPageData(tabledata
                .slice(offset, endposition)
                .sort(function (a, b) { return (b === null || b === void 0 ? void 0 : b.title.charCodeAt(0)) - (a === null || a === void 0 ? void 0 : a.title.charCodeAt(0)); }));
        }
        setTotalPages(Math.ceil(tabledata.length / limit));
    }, [tabledata, page, limit, filter]);
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement("div", { className: table_module_css_1["default"].tablecontainer },
            react_1["default"].createElement("table", { className: table_module_css_1["default"].separatetable },
                react_1["default"].createElement("thead", { className: table_module_css_1["default"].tablehead },
                    react_1["default"].createElement("tr", { className: table_module_css_1["default"].tableheadrow + " bg-secondary-blue text-white" },
                        react_1["default"].createElement("th", { className: table_module_css_1["default"].tablehead }, "Title"),
                        react_1["default"].createElement("th", { className: table_module_css_1["default"].tablehead }, "Type"),
                        react_1["default"].createElement("th", { className: table_module_css_1["default"].tablehead }, "Investment\u00A0Amount"),
                        react_1["default"].createElement("th", { className: table_module_css_1["default"].tablehead }, "Interest"),
                        react_1["default"].createElement("th", { className: table_module_css_1["default"].tablehead }, "Timeline"),
                        react_1["default"].createElement("th", { className: table_module_css_1["default"].tablehead, style: { textAlign: "center" } }, "Status"))),
                react_1["default"].createElement("tbody", { className: table_module_css_1["default"].tablebody }, pageData === null || pageData === void 0 ? void 0 : pageData.map(function (data, i) {
                    return (react_1["default"].createElement("tr", { onClick: function () { return handleClick(data); }, key: i, className: table_module_css_1["default"].tablerow + " bg-white text-secondary-blue text-left" },
                        react_1["default"].createElement("td", { className: "d-block d-md-none" },
                            react_1["default"].createElement("div", { className: table_module_css_1["default"].mobiletableitem + " bg-secondary-blue text-white d-flex justify-content-between" },
                                react_1["default"].createElement("div", { style: { width: "50%" } }, data.title),
                                react_1["default"].createElement(InvestmentModalHorizontalProgressBar_1["default"], { color: "#ABEEFF", period: data.timeline.start + " of " + data.timeline.end + " months", filledWidth: (data.timeline.start / data.timeline.end) * 100, emptyWidth: 10 - (data.timeline.start / data.timeline.end) * 100, fontColor: "#fff", width: "40%", justifyContent: "center" }))),
                        react_1["default"].createElement("td", { "data-label": "Title: ", className: table_module_css_1["default"].tableitem + " d-none d-md-block fw-bold" }, data.title),
                        react_1["default"].createElement("td", { "data-label": "Type: ", className: table_module_css_1["default"].tableitem }, data.type),
                        react_1["default"].createElement("td", { "data-label": "Amount: ", className: table_module_css_1["default"].tableitem }, utilities_1.formatCurrency(Number(data.investmentAmount))),
                        react_1["default"].createElement("td", { "data-label": "Interest: ", className: table_module_css_1["default"].tableitem }, utilities_1.formatCurrency(Number(data.intrest))),
                        react_1["default"].createElement("td", { "data-label": "Timeline: ", className: table_module_css_1["default"].tableitem + " d-none d-md-block" },
                            react_1["default"].createElement(InvestmentModalHorizontalProgressBar_1["default"], { color: "#ABEEFF", period: data.timeline.start + " of " + data.timeline.end + " months", filledWidth: (data.timeline.start / data.timeline.end) * 100, emptyWidth: data.timeline.end -
                                    (data.timeline.start / data.timeline.end) * 100 })),
                        react_1["default"].createElement("td", { className: "" + table_module_css_1["default"].tableitem },
                            react_1["default"].createElement("div", { className: "d-lg-flex justify-content-center" },
                                react_1["default"].createElement("div", { style: {
                                        backgroundColor: utilities_1.determineBackgroundColor(data.status),
                                        borderRadius: "30px",
                                        width: "max-content"
                                    }, className: "py-1 px-3 d-flex justify-content-center" },
                                    react_1["default"].createElement("span", { style: {
                                            color: utilities_1.determineTextColor(data.status),
                                            fontSize: "10px"
                                        } }, data.status))))));
                })))),
        react_1["default"].createElement("div", { className: "d-flex justify-content-between" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(SelectSmall, { value: limit, onChange: function (e) { return setLimit(Number(e.currentTarget.value)); } },
                    react_1["default"].createElement("option", { value: "5" }, "5"),
                    react_1["default"].createElement("option", { value: "10" }, "10"),
                    react_1["default"].createElement("option", { value: "20" }, "20"),
                    react_1["default"].createElement("option", { value: "30" }, "30"))),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(shared_components_1.FlexWrapper, { alignItems: "center" },
                    react_1["default"].createElement(shared_components_1.FlexWrapper, { marginRight: "10px" },
                        react_1["default"].createElement(shared_components_1.Typography, { fontSize: "10px" },
                            page,
                            " of ",
                            totalpages)),
                    react_1["default"].createElement(shared_components_1.FlexWrapper, null,
                        react_1["default"].createElement(icons_1.ChevronLeft, { opacity: page > 1 ? "1" : "0.5", onClick: function () { return (page > 1 ? setPage(page - 1) : null); }, style: {
                                marginRight: "10px",
                                cursor: "" + (page > 1 ? "pointer" : "not-allowed")
                            } }),
                        react_1["default"].createElement(icons_1.ChevronRight, { opacity: page === totalpages ? "0.5" : "1", onClick: function () {
                                return page + 1 <= totalpages ? setPage(page + 1) : null;
                            }, style: {
                                cursor: "" + (page < totalpages ? "pointer" : "not-allowed")
                            } })))))));
};
exports["default"] = InvestmentTable;
var templateObject_1;
