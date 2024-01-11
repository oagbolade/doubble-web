"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var shared_components_1 = require("../../shared-components");
var utilities_1 = require("../../utils/utilities");
var InvestmentModalHorizontalProgressBar_1 = require("./Utils/InvestmentModalHorizontalProgressBar");
var InvestmentsCircularWaveProgressBar_1 = require("./Utils/InvestmentsCircularWaveProgressBar");
var investment_module_css_1 = require("../../../styles/investment.module.css");
var hooks_1 = require("../../redux/hooks");
require("antd/dist/antd.css");
var EndInvestmentModal_1 = require("./EndInvestmentModal");
var ChangeBeneficiaryModal_1 = require("./ChangeBeneficiaryModal");
var router_1 = require("next/router");
var CreateInvestmentModal_1 = require("../Overview/CreateInvestmentModal");
var SimilarInvestmentDetails = function (_a) {
    var _b, _c, _d;
    var details = _a.details;
    return (react_1["default"].createElement(shared_components_1.FlexWrapper, { flexDirection: "column", width: "100%", marginTop: "20px" },
        react_1["default"].createElement(shared_components_1.FlexWrapper, { background: "#263D61", width: "100%", alignItems: "center", justifyContent: "space-between", padding: "10px", borderRadius: "6px 6px 0 0" },
            react_1["default"].createElement(shared_components_1.Typography, { fontColor: "#FFFFFF", fontSize: "12px", marginBottom: "10px", fontWeight: "bold" }, ((_c = (_b = details === null || details === void 0 ? void 0 : details.title) === null || _b === void 0 ? void 0 : _b.charAt(0)) === null || _c === void 0 ? void 0 : _c.toUpperCase()) + ((_d = details === null || details === void 0 ? void 0 : details.title) === null || _d === void 0 ? void 0 : _d.slice(1))),
            react_1["default"].createElement(shared_components_1.FlexWrapper, { width: "30%" },
                react_1["default"].createElement(InvestmentModalHorizontalProgressBar_1["default"], { color: "#ABEEFF", fontColor: "#FFFFFF", period: details.timeline.start + " of " + details.timeline.end + " months", filledWidth: (details.timeline.start / details.timeline.end) * 100, emptyWidth: ((details.timeline.start - details.timeline.end) /
                        details.timeline.end) *
                        100 }))),
        react_1["default"].createElement(shared_components_1.FlexWrapper, { background: "#F9F9F9", height: "50px", alignItems: "Center", padding: "10px" },
            react_1["default"].createElement(shared_components_1.Typography, { color: "#F9F9F9", fontSize: "12px" },
                "Earnings: \u20A6",
                utilities_1.formatCurrency(Number(details.investmentAmount))))));
};
var CarSavingsDetails = function (_a) {
    var type = _a.type, moreInfo = _a.moreInfo;
    return (react_1["default"].createElement(shared_components_1.FlexWrapper, { flexDirection: "column", marginBottom: "20px" },
        react_1["default"].createElement(shared_components_1.Typography, { fontSize: "12px", marginBottom: "5px" }, type),
        react_1["default"].createElement(shared_components_1.Typography, { fontWeight: "600", fontSize: "14px" }, moreInfo)));
};
var InvestmentDetails = function (_a) {
    var _b;
    var handleClick = _a.handleClick, setModalOpen = _a.setModalOpen, details = _a.details, closeDetails = _a.closeDetails;
    var router = router_1.useRouter();
    var dispatch = hooks_1.useAppDispatch();
    var user = hooks_1.useAppSelector(function (_a) {
        var auth = _a.auth;
        return auth;
    }).user;
    var fromOverview = hooks_1.useAppSelector(function (state) { return state.investment; }).showOverview.fromOverview;
    var handleCloseDetails = function () { return closeDetails(); };
    var handleOverview = function () {
        router.push('/overview');
        dispatch({ type: 'CLEAR_INVESTMENT_OVERVIEW', payload: { show: false, fromOverview: false } });
    };
    var _c = react_1.useState(false), isModalVisible = _c[0], setIsModalVisible = _c[1];
    var handleCancel = function () {
        setIsModalVisible(false);
    };
    return (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement("div", { className: "row my-4" },
            react_1["default"].createElement("div", { className: "col-lg-9" },
                react_1["default"].createElement("div", { className: "d-flex justify-content-between" },
                    react_1["default"].createElement(shared_components_1.FlexWrapper, null,
                        react_1["default"].createElement(fa_1.FaChevronLeft, { color: "#263D61", fontSize: "24px", onClick: fromOverview ? handleOverview : handleClick, className: "cursor-pointer" }),
                        react_1["default"].createElement(shared_components_1.FlexWrapper, { flexDirection: "column", marginLeft: "20px" },
                            react_1["default"].createElement(shared_components_1.Typography, { fontSize: "1.5em", fontWeight: "700", marginBottom: "10px" }, (_b = details === null || details === void 0 ? void 0 : details.title) === null || _b === void 0 ? void 0 : _b.toUpperCase()),
                            react_1["default"].createElement(InvestmentModalHorizontalProgressBar_1["default"], { color: "#ABEEFF", period: details.timeline.start + " of " + details.timeline.end + " months", filledWidth: (details.timeline.start / details.timeline.end) * 100, emptyWidth: ((details.timeline.start - details.timeline.end) /
                                    details.timeline.end) *
                                    100 }))),
                    react_1["default"].createElement("div", { className: "d-none d-lg-block" }, details.status === "pending" && react_1["default"].createElement(CreateInvestmentModal_1["default"], { investment: {
                            title: details.title,
                            amount: details.investmentAmount,
                            type: details.type === 'Future Fixed' ? 'fixed' : 'target',
                            month: details.type === 'Future Fixed' ? '360' : '12',
                            currency: "NGN",
                            frequency: details.frequency,
                            startDate: details.effectiveDate.substr(0, 10),
                            endDate: details.maturityDate.substr(0, 10),
                            fundingAccount: details.payInAccount,
                            beneficiaryAccount: details.payInAccount,
                            rollover: "",
                            transactionPIN: "",
                            daoCode: details.daoCode,
                            targetValue: "",
                            investmentID: details.investmentID
                        }, isEditInvestment: true, checkValid: { isValid: true, type: "" }, closeTargetModal: handleCancel, errMsg: function () { } })),
                    react_1["default"].createElement("div", { className: "d-block d-lg-none" },
                        react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                            react_1["default"].createElement("small", { className: "mr-1 p-1" }, "Status: "),
                            react_1["default"].createElement("div", { style: {
                                    backgroundColor: utilities_1.determineBackgroundColor(details.status),
                                    borderRadius: "30px",
                                    width: "max-content"
                                }, className: "py-1 px-3 d-flex justify-content-center" },
                                react_1["default"].createElement("span", { style: {
                                        color: utilities_1.determineTextColor(details.status),
                                        fontSize: "10px"
                                    } }, details.status))))),
                react_1["default"].createElement("div", { className: "card p-lg-5 p-2 my-5" },
                    react_1["default"].createElement("div", { className: "row flex-wrap" },
                        react_1["default"].createElement("div", { className: "col-12 d-none d-lg-block mb-3" },
                            react_1["default"].createElement("div", { className: "d-flex justify-content-end" },
                                react_1["default"].createElement("small", { className: "mr-1 p-1" }, "Status: "),
                                react_1["default"].createElement("div", { style: {
                                        backgroundColor: utilities_1.determineBackgroundColor(details.status),
                                        borderRadius: "30px",
                                        width: "max-content"
                                    }, className: "py-1 px-3 d-flex justify-content-center" },
                                    react_1["default"].createElement("span", { style: {
                                            color: utilities_1.determineTextColor(details.status),
                                            fontSize: "10px"
                                        } }, details.status)))),
                        react_1["default"].createElement("div", { className: "col-lg-4 col-md-6 col-12" },
                            react_1["default"].createElement("div", { style: { position: "relative", minHeight: "250px" } },
                                react_1["default"].createElement(InvestmentsCircularWaveProgressBar_1.InvestmentCircularWaveProgressBarV2, { color: "#ABEEFF", title: "Next Earning", numOfDays: details.status === 'completed' ? '0' : details.status === 'pending' ? '-1' : details.nextEarning, width: "200px", height: "200px", waveLargeText: "3em", waveSmallText: "1em", incrementValue: details.status === 'completed' ? 100 : details.status === 'pending' ? 1 : (details.nextEarning / 30) * 100, mobileWaveLargeText: "2em", mobileWaveSmallText: "1em", top: "20%", left: "15%" })),
                            react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                                react_1["default"].createElement("div", { className: "mt-3" },
                                    react_1["default"].createElement("div", { className: "mt-3 mb-1 text-center text-secondary-blue fw-bold", style: { fontSize: "1.2em" } }, "Next Earning"),
                                    react_1["default"].createElement("div", { className: "my-1 mb-3 text-center text-secondary-blue fw-700", style: { fontSize: "1.2em" } },
                                        "\u20A6",
                                        utilities_1.formatCurrency(Number(details.intrest)))))),
                        react_1["default"].createElement("div", { className: "col-lg-4  col-md-6 col-12 d-flex justify-content-center" },
                            react_1["default"].createElement("div", { className: "my-3" },
                                react_1["default"].createElement(CarSavingsDetails, { type: "Deposited", moreInfo: "\u20A6" + utilities_1.formatCurrency(Number(details.investmentAmount)) }),
                                react_1["default"].createElement(CarSavingsDetails, { type: "Total Contribution", moreInfo: "\u20A6" + utilities_1.formatCurrency(Number(details.totalContribution)) }),
                                react_1["default"].createElement(CarSavingsDetails, { type: "Total Interest", moreInfo: "\u20A6" + utilities_1.formatCurrency(Number(details.totalContribution)) }),
                                react_1["default"].createElement(CarSavingsDetails, { type: "Duration Covered", moreInfo: details.timeline.start + " of " + details.timeline.end + " month" }),
                                react_1["default"].createElement(CarSavingsDetails, { type: "Investment Frequency", moreInfo: details.frequency }),
                                react_1["default"].createElement(CarSavingsDetails, { type: "Date", moreInfo: details.effectiveDate
                                        .slice(0, 10)
                                        .split("-")
                                        .reverse()
                                        .join("/") + " - " + details.maturityDate
                                        .slice(0, 10)
                                        .split("-")
                                        .reverse()
                                        .join("/") }))),
                        react_1["default"].createElement("div", { className: "col-lg-4 col-md-6 mx-md-auto col-12" },
                            react_1["default"].createElement("div", { className: "bg-gray-three", style: {
                                    height: "100%",
                                    display: "grid",
                                    placeItems: "center",
                                    borderRadius: "10px"
                                } },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("div", { className: "my-5" },
                                        react_1["default"].createElement("p", { className: "text-secondary-blue fw-700 p-0 m-0" },
                                            user.firstName,
                                            " ",
                                            user.lastName),
                                        react_1["default"].createElement("small", { className: "text-secondary-blue" }, "Guranty Trust Bank")),
                                    react_1["default"].createElement("div", { className: "mb-2" },
                                        react_1["default"].createElement("p", { className: "text-secondary-blue fw-700 p-0 m-0" }, "0072211749")),
                                    details.status === "pending" ? (react_1["default"].createElement("div", { className: "mb-2" },
                                        react_1["default"].createElement(ChangeBeneficiaryModal_1["default"], null))) : ("")),
                                react_1["default"].createElement("div", { className: "d-flex justify-content-center my-3" },
                                    react_1["default"].createElement("div", { className: "demo" },
                                        react_1["default"].createElement(EndInvestmentModal_1["default"], { title: "End Investment", className: investment_module_css_1["default"].endinvestmentbutton, details: details, user: user, closeDetails: handleCloseDetails })))))))),
            react_1["default"].createElement("div", { className: "col-lg-3 d-none d-lg-block" },
                react_1["default"].createElement("div", { className: "card py-3 px-2" },
                    react_1["default"].createElement(SimilarInvestmentDetails, { details: details }),
                    react_1["default"].createElement(SimilarInvestmentDetails, { details: details }),
                    react_1["default"].createElement(SimilarInvestmentDetails, { details: details }))),
            react_1["default"].createElement("div", { className: "p-relative" },
                react_1["default"].createElement("button", { className: "d-block d-lg-none bg-primary-blue float-action-button", style: { bottom: "20%" }, onClick: function () { return setModalOpen(true); } },
                    react_1["default"].createElement(fa_1.FaPencilAlt, { className: "text-secondary-blu", style: { fontSize: "20px" } }))))));
};
exports["default"] = InvestmentDetails;
