"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var shared_components_1 = require("../../shared-components");
var InvestmentTable_1 = require("./InvestmentTable");
var InvestmentDetails_1 = require("./InvestmentDetails");
var DashboardLayout_1 = require("../../shared-components/DashboardLayout/DashboardLayout");
var hooks_1 = require("../../redux/hooks");
var investmentAction_1 = require("../../redux/investment/investmentAction");
var ActivityLoader_1 = require("../../shared-components/Loader/ActivityLoader");
var GetStartedModal_1 = require("../Overview/GetStartedModal");
var utilities_1 = require("../../utils/utilities");
var image_1 = require("next/image");
var setting_module_css_1 = require("../../../styles/setting.module.css");
var InvestmentModalBeneficiary = function (props) {
    return (react_1["default"].createElement(shared_components_1.FlexWrapper, { flexDirection: "column", padding: "10px" },
        react_1["default"].createElement(shared_components_1.Card, { padding: "15px", width: "100%", height: "100%", borderRadius: "10px", bgColor: "#F9F9F9", boxShadow: "", flexDirection: "column", justifyContent: "space-evenly", alignItems: "flex-start" },
            react_1["default"].createElement(shared_components_1.FlexWrapper, { flexDirection: "column", alignItems: "flex-start" },
                react_1["default"].createElement(shared_components_1.Typography, { fontSize: "18px", fontWeight: "400", fontColor: "#263D61" }, props.name),
                react_1["default"].createElement(shared_components_1.Typography, { fontSize: "12px", fontWeight: "400", fontColor: "#263D61" }, props.bank)),
            react_1["default"].createElement(shared_components_1.FlexWrapper, { flexDirection: "column", alignItems: "flex-start" },
                react_1["default"].createElement(shared_components_1.Typography, { fontSize: "18px", fontWeight: "700", fontColor: "#263D61" }, props.accountNumber),
                react_1["default"].createElement(shared_components_1.Typography, { fontSize: "12px", fontWeight: "700", fontColor: "#00CCFF" }, "Change Beneficiary")))));
};
var Investment = function () {
    var _a = react_1.useState(false), investmentDetaiIsOpen = _a[0], setInvestmentDetailOpen = _a[1];
    var _b = react_1.useState(false), modalIsOpen = _b[0], setModalOpen = _b[1];
    var _c = react_1.useState(false), editInvestmentModalIsOpen = _c[0], setEditInvestmentModalOpen = _c[1];
    var user = hooks_1.useAppSelector(function (state) { return state.auth; }).user;
    var _d = react_1.useState({}), investmentDetail = _d[0], setInvestmentDetail = _d[1];
    var _e = react_1.useState("asc"), statsFilter = _e[0], setStatsFilter = _e[1];
    var showDetail = function (data) {
        setInvestmentDetailOpen(true);
        setInvestmentDetail(data);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    var _f = react_1.useState(false), isModalVisible = _f[0], setIsModalVisible = _f[1];
    var handleCancel = function () {
        setIsModalVisible(false);
    };
    var _g = hooks_1.useAppSelector(function (state) { return state.investment; }), tableData = _g.tableData, loading = _g.loading, showOverview = _g.showOverview, selectedinvestType = _g.selectedinvestType, isFromSettingsPage = _g.isFromSettingsPage;
    var _h = hooks_1.useAppSelector(function (state) { return state.settings; }), allActiveInvestment = _h.allActiveInvestment, allCompletedInvestment = _h.allCompletedInvestment, allFutureInvestment = _h.allFutureInvestment;
    var _j = react_1.useState(selectedinvestType || "activeFixed"), investmentType = _j[0], setInvestmentType = _j[1];
    var dispatch = hooks_1.useAppDispatch();
    // useEffect(() => console.log('tableData',tableData), [tableData])
    react_1.useEffect(function () {
        var _a;
        if ((user === null || user === void 0 ? void 0 : user.userId) && ((_a = user === null || user === void 0 ? void 0 : user.userId) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            if (investmentType === "activeFixed") {
                dispatch(investmentAction_1.activeFixedInvestment(user === null || user === void 0 ? void 0 : user.userId));
                dispatch({ type: "RESET_SELECTED_TYPE", payload: "activeFixed" });
            }
            else if (investmentType === "futureTarget") {
                dispatch(investmentAction_1.futureTargetInvestment(user === null || user === void 0 ? void 0 : user.userId));
                dispatch({ type: "RESET_SELECTED_TYPE", payload: "futureTarget" });
            }
            else if (investmentType === "futureFixed") {
                dispatch(investmentAction_1.futureFixedInvestment(user === null || user === void 0 ? void 0 : user.userId));
                dispatch({ type: "RESET_SELECTED_TYPE", payload: "futureFixed" });
            }
            else if (investmentType === "allCompleted") {
                dispatch(investmentAction_1.allCompletedInvestments(user === null || user === void 0 ? void 0 : user.userId));
                dispatch({ type: "RESET_SELECTED_TYPE", payload: "allCompleted" });
            }
            else if (investmentType === "activeTargeet") {
                dispatch(investmentAction_1.activeTargetInvestment(user === null || user === void 0 ? void 0 : user.userId));
                dispatch({ type: "RESET_SELECTED_TYPE", payload: "activeTargeet" });
            }
            else if (investmentType === "active" && isFromSettingsPage) {
                dispatch(investmentAction_1.fetchAllInvestments(allActiveInvestment.data));
                dispatch({ type: "RESET_SELECTED_TYPE", payload: "active" });
            }
            else if (investmentType === "future" && isFromSettingsPage) {
                dispatch(investmentAction_1.fetchAllInvestments(allFutureInvestment.data));
                dispatch({ type: "RESET_SELECTED_TYPE", payload: "future" });
            }
            else if (investmentType === "completed" && isFromSettingsPage) {
                dispatch(investmentAction_1.fetchAllInvestments(allCompletedInvestment.data));
                dispatch({ type: "RESET_SELECTED_TYPE", payload: "completed" });
            }
            else {
                dispatch(investmentAction_1.activeFixedInvestment(user === null || user === void 0 ? void 0 : user.userId));
                isFromSettingsPage &&
                    dispatch({ type: "RESET_SELECTED_TYPE", payload: "activeFixed" });
                setInvestmentType('activeFixed');
            }
        }
    }, [dispatch, investmentType, investmentDetaiIsOpen, user]);
    var filter = [
        { label: "A-Z", value: "asc" },
        { label: "Z-A", value: "desc" },
    ];
    react_1.useEffect(function () {
        if (showOverview.show) {
            var details = showOverview.details;
            var newDetails = {
                title: details.purpose,
                type: details.category,
                investmentAmount: utilities_1.cleanNumber(details.investmentValue),
                maturityDate: details.maturityDate,
                nextEarning: utilities_1.getNextEarning(details.maturityDate) > 0
                    ? utilities_1.getNextEarning(details.maturityDate)
                    : 0,
                effectiveDate: details.effectiveDate,
                investmentID: details.investment_ID,
                totalContribution: utilities_1.cleanNumber(details.contributions),
                frequency: details.frequency,
                intrest: Math.floor(details.interest),
                timeline: {
                    start: 1,
                    end: details.term
                },
                status: investmentAction_1.checkInvestmentStatus(details.effectiveDate, details.maturityDate)
            };
            setInvestmentDetailOpen(true);
            setInvestmentDetail(newDetails);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            dispatch({
                type: "CLEAR_INVESTMENT_OVERVIEW",
                payload: { show: false, fromOverview: true }
            });
        }
    }, [showOverview]);
    return (react_1["default"].createElement(DashboardLayout_1["default"], null, investmentDetaiIsOpen ? (react_1["default"].createElement(InvestmentDetails_1["default"], { closeDetails: function () { return setInvestmentDetailOpen(false); }, details: investmentDetail, setModalOpen: function () {
            setEditInvestmentModalOpen(true);
        }, handleClick: function () {
            setInvestmentDetailOpen(false);
        } })) : (react_1["default"].createElement(react_1.Fragment, null,
        react_1["default"].createElement(shared_components_1.Typography, { fontWeight: "600", className: "my-4 d-none d-md-block" }, "Investments"),
        react_1["default"].createElement("div", { className: "d-flex justify-content-between flex-wrap", style: { margin: "50px 0 30px 0" } },
            react_1["default"].createElement("div", { className: "my-1" },
                react_1["default"].createElement("select", { value: selectedinvestType, onChange: function (_a) {
                        var target = _a.target;
                        return setInvestmentType(target.value);
                    }, className: "doubble-select px-2" },
                    react_1["default"].createElement("option", { value: "activeFixed" }, "Active Fixed Investment"),
                    react_1["default"].createElement("option", { value: "activeTargeet" }, "Active Target Investment"),
                    react_1["default"].createElement("option", { value: "futureFixed" }, "Future Fixed Investment"),
                    react_1["default"].createElement("option", { value: "futureTarget" }, "Future Traget Investment"),
                    react_1["default"].createElement("option", { value: "allCompleted" }, "Completed Investment"),
                    selectedinvestType === "active" ||
                        selectedinvestType === "future" ||
                        selectedinvestType === "completed" ? (react_1["default"].createElement("option", { value: selectedinvestType },
                        selectedinvestType.charAt(0).toUpperCase() + selectedinvestType.substring(1),
                        " Investments")) : (""))),
            react_1["default"].createElement("div", { className: "d-flex my-1" },
                react_1["default"].createElement("select", { onChange: function (_a) {
                        var target = _a.target;
                        return setStatsFilter(target.value);
                    }, className: "doubble-select px-2", value: statsFilter }, filter.map(function (option, i) { return (react_1["default"].createElement("option", { key: i, value: option.value }, option.label)); })),
                react_1["default"].createElement("div", { className: "ml-2 d-none d-md-block" },
                    react_1["default"].createElement(GetStartedModal_1["default"], { type: "fixed", closeTargetModal: handleCancel },
                        react_1["default"].createElement(shared_components_1.IconButton, { borderRadius: "5px", background: "#263D61", onClick: function () { return setModalOpen(true); } },
                            react_1["default"].createElement(fa_1.FaPlus, { fontSize: "24px", color: "#00CCFF" })))))),
        react_1["default"].createElement("div", { className: "p-relative" },
            react_1["default"].createElement(InvestmentTable_1["default"], { tabledata: tableData, handleClick: showDetail, filter: statsFilter }),
            loading && tableData.length === 0 && (react_1["default"].createElement("div", { style: { height: "100px" } })),
            loading && react_1["default"].createElement(ActivityLoader_1["default"], null),
            !loading && tableData.length === 0 ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("div", { className: setting_module_css_1["default"].tumbleweed },
                    " ",
                    react_1["default"].createElement(image_1["default"], { src: "/tumbleWeed.gif", alt: "TumbleWeed", width: 250, height: 250 })),
                react_1["default"].createElement("h2", { className: "text-center pb-3 pt-0 text-secondary w3-animate-top" }, "No Investment"))) : (""),
            react_1["default"].createElement("button", { className: "d-block d-md-none bg-primary-blue float-action-button", style: { bottom: "7%" }, onClick: function () { return setModalOpen(true); } },
                react_1["default"].createElement(fa_1.FaPlus, { className: "text-secondary-blue", style: { fontSize: "20px" } })))))));
};
exports["default"] = Investment;
