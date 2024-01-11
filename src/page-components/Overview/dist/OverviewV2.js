"use strict";
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
var link_1 = require("next/link");
var shared_components_1 = require("../../shared-components");
var icons_1 = require("../../icons");
var UserTasksV2_1 = require("./Tasks/UserTasksV2");
var OverviewRecentNotification_1 = require("./OverviewRecentNotification");
var InvestmentsCircularWaveProgressBar_1 = require("../Investment/Utils/InvestmentsCircularWaveProgressBar");
var http_1 = require("../../https/http");
var DashboardLayout_1 = require("../../shared-components/DashboardLayout/DashboardLayout");
var overview_module_css_1 = require("../../../styles/overview.module.css");
var Targetitems_1 = require("./Targetitems");
var hooks_1 = require("../../redux/hooks"); /*
import progress from "../../shared-components/HorizontalProgressBar/HorizontalProgressBar" */
var GetStartedModal_1 = require("./GetStartedModal");
var react_loading_skeleton_1 = require("react-loading-skeleton");
var image_1 = require("next/image");
var investmentAction_1 = require("../../redux/investment/investmentAction");
var utilities_1 = require("../../utils/utilities");
var router_1 = require("next/router");
var Overview = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var dispatch = hooks_1.useAppDispatch();
    var router = router_1.useRouter();
    var _j = react_1.useState([]), targetActive = _j[0], setTargetActive = _j[1];
    var _k = react_1.useState(true), noTargetActive = _k[0], setNoTargetActive = _k[1];
    var _l = react_1.useState(false), loading = _l[0], setLoading = _l[1];
    var user = hooks_1.useAppSelector(function (state) { return state.auth; }).user;
    var getTargetActive = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setLoading(true);
                    return [4 /*yield*/, http_1.httpRequest({
                            method: "POST",
                            url: "TargetInvestment/ListofActiveTarget",
                            body: {
                                platform: 0,
                                imei: "string",
                                deviceType: "string",
                                deviceManufacturer: "string",
                                deviceModel: "string",
                                deviceIP: "string",
                                deviceName: "string",
                                userId: user === null || user === void 0 ? void 0 : user.userId
                            }
                        })];
                case 1:
                    result = _a.sent();
                    if (result === null || result === void 0 ? void 0 : result.data) {
                        setLoading(false);
                        setTargetActive((result === null || result === void 0 ? void 0 : result.data) || []);
                        setNoTargetActive(false);
                    }
                    else {
                        setLoading(false);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    setLoading(false);
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        getTargetActive();
    }, []);
    var _m = react_1.useState(false), isModalVisible = _m[0], setIsModalVisible = _m[1];
    var handleCancel = function () {
        setIsModalVisible(false);
    };
    var singleStatus = loading
        ? 0
        : investmentAction_1.checkInvestmentStatus((_a = targetActive[0]) === null || _a === void 0 ? void 0 : _a.effectiveDate, (_b = targetActive[0]) === null || _b === void 0 ? void 0 : _b.maturityDate);
    var singleNextEarning = loading
        ? 0
        : utilities_1.getNextEarning((_c = targetActive[0]) === null || _c === void 0 ? void 0 : _c.maturityDate) > 0
            ? utilities_1.getNextEarning((_d = targetActive[0]) === null || _d === void 0 ? void 0 : _d.maturityDate)
            : 0;
    return (React.createElement(DashboardLayout_1["default"], null,
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-12 my-3" },
                React.createElement(shared_components_1.Typography, { fontWeight: "700", fontSize: "18px", className: "d-none d-md-block p-3" }, "Overview")),
            React.createElement("div", { className: "col-lg-9 row mx-auto" },
                React.createElement("div", { className: "col-xlg-3 col-lg-5 col-12 d-none d-lg-block" },
                    React.createElement("div", { className: overview_module_css_1["default"].bigcard + " card p-3" },
                        React.createElement("div", { className: "text-center py-3" },
                            React.createElement(shared_components_1.Typography, { fontWeight: "700", fontSize: "18px" }, targetActive.length > 0
                                ? (_e = targetActive[0]) === null || _e === void 0 ? void 0 : _e.purpose : !loading
                                ? "No Investment Found"
                                : "Fetching Title...")),
                        React.createElement("div", { style: { position: "relative", minHeight: "180px" } },
                            React.createElement(InvestmentsCircularWaveProgressBar_1.InvestmentCircularWaveProgressBarV2, { color: "#ABEEFF", title: "Next Earning", numOfDays: singleStatus === "completed"
                                    ? "0"
                                    : singleStatus === "pending"
                                        ? "-1"
                                        : String(singleNextEarning), width: "108px", height: "108px", mobileHeight: "108px", mobileWidth: "108px", waveLargeText: "27px", waveSmallText: "10px", mobileWaveLargeText: "27px", mobileWaveSmallText: "10px", incrementValue: singleStatus === "completed"
                                    ? 100
                                    : singleStatus === "pending"
                                        ? 1
                                        : (singleNextEarning / 30) * 100, top: "20%", left: "15%" })),
                        React.createElement("div", { className: "d-flex justify-content-between" },
                            React.createElement("div", null,
                                React.createElement(shared_components_1.FlexWrapper, { flexDirection: "column" },
                                    React.createElement(shared_components_1.Typography, { fontWeight: "700", fontSize: "8px", className: "my-1" }, "Savings Frequency"),
                                    React.createElement(shared_components_1.Typography, { fontWeight: "700", fontSize: "12px", className: "my-1" }, targetActive.length > 0
                                        ? (_f = targetActive[0]) === null || _f === void 0 ? void 0 : _f.frequency : !loading
                                        ? "Not Found"
                                        : "Loading..."))),
                            React.createElement("div", null,
                                React.createElement(shared_components_1.FlexWrapper, { flexDirection: "column" },
                                    React.createElement(shared_components_1.Typography, { fontWeight: "700", fontSize: "8px", className: "my-1" }, "Total Savings"),
                                    React.createElement(shared_components_1.Typography, { fontWeight: "700", fontSize: "12px", className: "my-1" }, targetActive.length > 0
                                        ? (_g = targetActive[0]) === null || _g === void 0 ? void 0 : _g.contributions : "0.00")))),
                        React.createElement("div", { className: "d-flex justify-content-between align-items-baseline mt-4 mb-1" },
                            React.createElement("button", { className: "px-2", disabled: !targetActive.length, onClick: function () {
                                    dispatch({
                                        type: "SHOW_INVESTMENT_OVERVIEW",
                                        payload: { show: true, details: targetActive[0] }
                                    });
                                    router.push("/investment");
                                }, style: {
                                    width: "100px",
                                    height: "30px",
                                    background: "#00CCFF",
                                    color: "#263E61",
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: "5px",
                                    border: "none",
                                    cursor: !targetActive.length ? "not-allowed" : "pointer"
                                } },
                                React.createElement(shared_components_1.Typography, { fontSize: "12px" }, "Click to view...")),
                            React.createElement("div", { className: "d-flex" },
                                React.createElement(shared_components_1.FlexWrapper, { fontWeight: "700", fontSize: "12px", marginRight: "10px", className: "mr-2" }, targetActive.length > 0 ? ((_h = targetActive[0]) === null || _h === void 0 ? void 0 : _h.category) : !loading ? '' : (React.createElement("span", { className: "ml-3", style: {
                                        display: "inline-block",
                                        marginTop: "-10px",
                                        marginBottom: "-10px"
                                    } },
                                    React.createElement(image_1["default"], { src: "/loader.gif", alt: "investment loader", width: 25, height: 25, className: "mt-1" })))),
                                targetActive.length > 0 && !loading ? React.createElement(icons_1.OverviewDartIconSmall, null) : '')))),
                React.createElement("div", { className: "col-xlg-9 col-lg-7 col-12 row mx-auto p-0" },
                    React.createElement("div", { className: "col-12 row mx-auto p-0", style: { maxHeight: "400px" } },
                        React.createElement("div", { className: overview_module_css_1["default"].cardscontainer + " col-lg-12 d-flex" }, loading && !targetActive.length
                            ? [1, 2, 3].map(function (no) { return (React.createElement("div", { className: "mr-3", key: no },
                                React.createElement("div", { className: "card p-3", style: {
                                        maxWidth: "160px",
                                        minWidth: "150px",
                                        height: "200px"
                                    } },
                                    React.createElement("div", { className: "d-flex justify-content-between py-1" },
                                        React.createElement(shared_components_1.Typography, { fontWeight: "700", fontSize: "10px" }, "Loading items..."),
                                        React.createElement(icons_1.CactusIcon, { height: "50" })),
                                    React.createElement("div", { style: {
                                            position: "relative",
                                            minHeight: "72px",
                                            marginBottom: "10px"
                                        } },
                                        React.createElement(InvestmentsCircularWaveProgressBar_1.InvestmentCircularWaveProgressBarV2, { color: "#ABEEFF", title: "Next Earning", numOfDays: "0", width: "72px", height: "72px", waveLargeText: "18px", waveSmallText: "5px", mobileHeight: "108px", mobileWidth: "108px", mobileWaveLargeText: "27px", mobileWaveSmallText: "10px", incrementValue: 90, top: "20%", left: "15%" })),
                                    React.createElement(react_loading_skeleton_1.SkeletonTheme, { color: "#EEE", highlightColor: "#00CCFF" },
                                        React.createElement(react_loading_skeleton_1["default"], { height: 25, width: 130 }))))); })
                            : !loading && !targetActive.length
                                ? [1, 2, 3].map(function (no) { return (React.createElement("div", { className: "mr-3", key: no },
                                    React.createElement("div", { className: "card p-3", style: {
                                            maxWidth: "160px",
                                            minWidth: "150px",
                                            height: "200px"
                                        } },
                                        React.createElement("div", { className: "d-flex justify-content-between py-1" },
                                            React.createElement(shared_components_1.Typography, { fontWeight: "700", fontSize: "10px", marginBottom: "35px" }, "No Investment Found")),
                                        React.createElement("div", { style: {
                                                position: "relative",
                                                minHeight: "72px",
                                                marginBottom: "10px"
                                            } },
                                            React.createElement(InvestmentsCircularWaveProgressBar_1.InvestmentCircularWaveProgressBarV2, { color: "#ABEEFF", title: "Next Earning", numOfDays: "0", width: "72px", height: "72px", waveLargeText: "18px", waveSmallText: "5px", mobileHeight: "108px", mobileWidth: "108px", mobileWaveLargeText: "27px", mobileWaveSmallText: "10px", incrementValue: 0, top: "20%", left: "15%" })),
                                        React.createElement("button", { style: {
                                                width: "90%",
                                                height: "20px",
                                                background: "#00CCFF",
                                                color: "#263E61",
                                                display: "flex",
                                                justifyContent: "space-evenly",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                border: "none",
                                                cursor: "read-only",
                                                marginBottom: "8px"
                                            }, className: "mt-4 mb-1" },
                                            React.createElement(shared_components_1.Typography, { fontSize: "12px" }, "Click to view"))))); })
                                : targetActive
                                    .filter(function (item, index) { return index < 5; })
                                    .map(function (target, i) {
                                    var status = investmentAction_1.checkInvestmentStatus(target === null || target === void 0 ? void 0 : target.effectiveDate, target === null || target === void 0 ? void 0 : target.maturityDate);
                                    var nextEarning = utilities_1.getNextEarning(target.maturityDate) > 0
                                        ? utilities_1.getNextEarning(target.maturityDate)
                                        : 0;
                                    return (React.createElement("div", { className: "mr-3", key: i },
                                        React.createElement("div", { className: "card p-3", style: {
                                                maxWidth: "160px",
                                                minWidth: "150px",
                                                height: "200px"
                                            } },
                                            React.createElement("div", { className: "d-flex justify-content-between py-1" },
                                                React.createElement(shared_components_1.Typography, { fontWeight: "700", fontSize: "10px" }, target.purpose),
                                                React.createElement(icons_1.CactusIcon, { height: "50" })),
                                            React.createElement("div", { style: {
                                                    position: "relative",
                                                    minHeight: "72px"
                                                } },
                                                React.createElement(InvestmentsCircularWaveProgressBar_1.InvestmentCircularWaveProgressBarV2, { color: "#ABEEFF", title: "Next Earning", numOfDays: status === "completed"
                                                        ? "0"
                                                        : status === "pending"
                                                            ? "-1"
                                                            : String(nextEarning), width: "72px", height: "72px", waveLargeText: "18px", waveSmallText: "5px", mobileHeight: "108px", mobileWidth: "108px", mobileWaveLargeText: "27px", mobileWaveSmallText: "10px", incrementValue: status === "completed"
                                                        ? 100
                                                        : status === "pending"
                                                            ? 1
                                                            : (nextEarning / 30) * 100, top: "20%", left: "15%" })),
                                            React.createElement("div", { className: "d-flex justify-content-center" },
                                                React.createElement("button", { style: {
                                                        width: "90%",
                                                        height: "20px",
                                                        background: "#00CCFF",
                                                        color: "#263E61",
                                                        display: "flex",
                                                        justifyContent: "space-evenly",
                                                        alignItems: "center",
                                                        borderRadius: "5px",
                                                        border: "none",
                                                        // marginTop: "50px",
                                                        cursor: "pointer",
                                                        marginBottom: "8px"
                                                    }, className: "mt-4 mb-1", onClick: function () {
                                                        dispatch({
                                                            type: "SHOW_INVESTMENT_OVERVIEW",
                                                            payload: { show: true, details: target }
                                                        });
                                                        router.push("/investment");
                                                    } },
                                                    React.createElement(shared_components_1.Typography, { fontSize: "12px" }, "Click to view"))))));
                                })),
                        React.createElement("div", { className: overview_module_css_1["default"].investmentbuttonscontainer + " col-lg-12 d-flex mt-3" },
                            React.createElement(link_1["default"], { href: "/investment" },
                                React.createElement("button", { className: overview_module_css_1["default"].viewinvestmentbutton, style: { lineHeight: '21px' } },
                                    "View My Investments",
                                    " ")),
                            React.createElement(GetStartedModal_1["default"], { type: "fixed", title: "Create Investment", closeTargetModal: handleCancel })))),
                React.createElement("div", { className: "col-12" },
                    React.createElement("div", { className: "card p-lg-4 p-md-3 p-2 my-3" },
                        React.createElement(shared_components_1.Typography, { fontWeight: "700", textAlign: "center" }, "Investments & Payments"),
                        React.createElement("div", { className: "mt-4" },
                            React.createElement(Targetitems_1["default"], null))))),
            React.createElement("div", { className: "col-lg-3 d-lg-block d-none" },
                React.createElement("div", { className: "card p-3 mb-2" },
                    React.createElement(UserTasksV2_1["default"], null)),
                React.createElement("div", { className: "card p-3" },
                    React.createElement(OverviewRecentNotification_1["default"], null))))));
};
exports["default"] = Overview;
