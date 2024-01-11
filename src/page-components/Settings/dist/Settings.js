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
var shared_components_1 = require("../../shared-components");
var DashboardLayout_1 = require("../../shared-components/DashboardLayout/DashboardLayout");
var setting_module_css_1 = require("../../../styles/setting.module.css");
var dashboard_module_css_1 = require("../../../styles/dashboard.module.css");
var ProfileForm_1 = require("./ProfileForm");
var icons_1 = require("../../icons");
var SettingsCard_1 = require("./SettingsCard");
var accordion_1 = require("../faq/accordion/accordion");
var termsandcondition_1 = require("./termsandcondition/termsandcondition");
var ContactUs_1 = require("./ContactUs");
var SecuritySettings_1 = require("./SecuritySettings");
var AccountTable_1 = require("./AccountTable");
var react_loading_skeleton_1 = require("react-loading-skeleton");
var fa_1 = require("react-icons/fa");
var MobileSettingsMenu_1 = require("./MobileSettingsMenu");
var http_1 = require("../../https/http");
var hooks_1 = require("../../redux/hooks");
var image_1 = require("next/image");
var settingsAction_1 = require("../../redux/settings/settingsAction");
var contentFaq_1 = require("./faq/utils/contentFaq");
var tabs = [
    "My Account",
    "Security Settings",
    "Contact Us",
    "FAQ",
    "Terms $ Conditions",
];
var subtabs = [
    "Change Login Password",
    "Change Transaction PIN",
    "Security Questions",
];
var accounts = [
    {
        accountNo: "000998098098",
        accountName: "Desmond Edward",
        accountType: "Savings",
        bank: "Sterling"
    },
    {
        accountNo: "000998098098",
        accountName: "Desmond Edward",
        accountType: "Current",
        bank: "Sterling"
    },
];
var Settings = function () {
    var _a, _b, _c;
    var dispatch = hooks_1.useAppDispatch();
    var _d = react_1.useState([]), getAccount = _d[0], setGetAccount = _d[1];
    var _e = react_1.useState(tabs[0]), currentTab = _e[0], setCurrentTab = _e[1];
    var _f = react_1.useState(subtabs[0]), subTab = _f[0], setSubTab = _f[1];
    var _g = react_1.useState(false), toggled = _g[0], setToggled = _g[1];
    var _h = react_1.useState(false), loading = _h[0], setLoading = _h[1];
    var user = hooks_1.useAppSelector(function (state) { return state.auth; }).user;
    var _j = hooks_1.useAppSelector(function (state) { return state.settings; }), allActiveInvestment = _j.allActiveInvestment, allFutureInvestment = _j.allFutureInvestment, allCompletedInvestment = _j.allCompletedInvestment, loadingActiveInvestment = _j.loadingActiveInvestment, loadingFutrueInvestment = _j.loadingFutrueInvestment, loadingCompletedInvestment = _j.loadingCompletedInvestment;
    var GetAccount = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setLoading(true);
                    return [4 /*yield*/, http_1.httpRequest({
                            method: "POST",
                            url: "Bank/GetAccountsByBVN",
                            body: {
                                platform: 1,
                                imei: "string",
                                deviceType: "string",
                                deviceManufacturer: "string",
                                deviceModel: "string",
                                deviceIP: "string",
                                deviceName: "string",
                                bvn: user === null || user === void 0 ? void 0 : user.bvn
                            }
                        })];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        setLoading(false);
                        setGetAccount(result.data || []);
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
        GetAccount();
    }, []);
    react_1.useEffect(function () {
        if (user.userId) {
            dispatch(settingsAction_1.getAllActiveInvestment(user.userId));
            dispatch(settingsAction_1.getAllFutureInvestment(user.userId));
            dispatch(settingsAction_1.getAllCompletedInvestment(user.userId));
        }
    }, [user]);
    return (React.createElement(DashboardLayout_1["default"], null,
        React.createElement("div", { className: setting_module_css_1["default"].large },
            React.createElement("img", { src: "/settings/settings-img.png", alt: "", className: setting_module_css_1["default"].settingsimage + " w-100 p-fixed" }),
            React.createElement("div", { className: setting_module_css_1["default"].settingscontainer + " row" },
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("div", { className: "card p-3" },
                        React.createElement("div", { className: "d-flex justify-content-center" },
                            React.createElement("span", { className: dashboard_module_css_1["default"].user + " d-flex justify-content-center  align-items-center" }, (_a = user === null || user === void 0 ? void 0 : user.firstName) === null || _a === void 0 ? void 0 :
                                _a.charAt(0),
                                " ", (_b = user === null || user === void 0 ? void 0 : user.lastName) === null || _b === void 0 ? void 0 :
                                _b.charAt(0))),
                        React.createElement(ProfileForm_1["default"], null))),
                React.createElement("div", { className: "col-md-8" },
                    React.createElement("div", { className: setting_module_css_1["default"].cardscontainer + " w-100 d-flex justify-content-between" },
                        React.createElement(SettingsCard_1["default"], { status: "active", badgeBackground: "#B3EDDE", loading: loadingActiveInvestment, cardBackground: "#ebfffa", quantity: allActiveInvestment.count, badgeItems: allActiveInvestment.count ? ["Targets", "Fixed"] : ['None'], icon: React.createElement(icons_1.ActiveIcon, null) }),
                        React.createElement(SettingsCard_1["default"], { status: "future", badgeBackground: "#FEDF9E", loading: loadingFutrueInvestment, cardBackground: "#FFECC3", quantity: allFutureInvestment.count, badgeItems: allFutureInvestment.count ? ["Targets", "Fixed"] : ['None'], icon: React.createElement(icons_1.FutureIcon, null) }),
                        React.createElement(SettingsCard_1["default"], { status: "completed", badgeBackground: "#C5CBD4", loading: loadingCompletedInvestment, cardBackground: "#E9ECEF", quantity: allCompletedInvestment.count, badgeItems: allCompletedInvestment.count ? ["Targets", "Fixed"] : ['None'], icon: React.createElement(icons_1.CompletedIcon, null) })),
                    React.createElement("div", { className: "card p-lg-4 p-md-3 p-2", style: { height: "430px" } },
                        React.createElement("div", { className: "mt-3 d-flex flex-wrap justify-content-start w-100" }, tabs.map(function (tab, i) { return (React.createElement("div", { key: i, onClick: function () { return setCurrentTab(tab); }, className: "tab py-2 " + (currentTab === tab ? "activetab" : "") }, tab)); })),
                        React.createElement("div", { className: setting_module_css_1["default"].tabcontent + " mt-2" },
                            currentTab === "FAQ" && React.createElement(accordion_1.AccordionComponent, { data: contentFaq_1.accordionData }),
                            ["Terms of Use", "Terms $ Conditions"].includes(currentTab) && React.createElement(termsandcondition_1["default"], null),
                            currentTab === "Contact Us" && React.createElement(ContactUs_1["default"], null),
                            currentTab === "Security Settings" && (React.createElement(SecuritySettings_1["default"], { subtabs: subtabs, subTab: subTab, setSubTab: setSubTab })),
                            ["My Account", "My Profile"].includes(currentTab) &&
                                ((_c = getAccount === null || getAccount === void 0 ? void 0 : getAccount.ngnAccounts) === null || _c === void 0 ? void 0 : _c.length) > 0 &&
                                !loading ? (React.createElement(AccountTable_1["default"], { tabledata: getAccount.ngnAccounts })) : loading ? (["My Account", "My Profile"].includes(currentTab) && (React.createElement(react_loading_skeleton_1.SkeletonTheme, { color: "#eee", highlightColor: "rgba(0, 204, 255,0.3)" },
                                React.createElement("p", { style: { marginTop: "10px" } },
                                    React.createElement(react_loading_skeleton_1["default"], { duration: 2, count: 1, height: 30 })),
                                React.createElement("p", { style: { marginTop: "10px" } },
                                    React.createElement(react_loading_skeleton_1["default"], { duration: 2, count: 1, height: 30 })),
                                React.createElement("p", { style: { marginTop: "10px" } },
                                    React.createElement(react_loading_skeleton_1["default"], { duration: 2, count: 1, height: 30 })),
                                React.createElement("p", { style: { marginTop: "10px" } },
                                    React.createElement(react_loading_skeleton_1["default"], { duration: 2, count: 1, height: 30 }))))) : ["My Account", "My Profile"].includes(currentTab) ? (React.createElement(React.Fragment, null,
                                React.createElement("div", { className: setting_module_css_1["default"].tumbleweed },
                                    " ",
                                    React.createElement(image_1["default"], { src: "/tumbleWeed.gif", alt: "TumbleWeed", width: 250, height: 250 })),
                                React.createElement("h2", { className: "text-center pb-5 pt-0 text-secondary w3-animate-top" }, "No bank account"))) : ("")))))),
        React.createElement("div", { className: setting_module_css_1["default"].mobile },
            React.createElement("div", { className: toggled ? "d-none" : "d-block" },
                React.createElement("div", { className: setting_module_css_1["default"].menu },
                    React.createElement("div", { className: setting_module_css_1["default"].topbar }),
                    React.createElement(MobileSettingsMenu_1["default"], { setCurrentTab: setCurrentTab, setToggled: setToggled, setSubTab: setSubTab }))),
            React.createElement("div", { className: toggled ? "d-block" : "d-none" },
                React.createElement("div", { className: setting_module_css_1["default"].backbutton, onClick: function () { return setToggled(false); } },
                    React.createElement(fa_1.FaChevronLeft, { color: "#263D61", fontSize: "1em", className: "cursor-pointer mr-1" }),
                    React.createElement(shared_components_1.Typography, { fontWeight: "600", className: "my-2 cursor-pointer" }, "Settings")),
                React.createElement("div", { className: setting_module_css_1["default"].mobilecontentcontainer },
                    currentTab === "FAQ" && React.createElement(accordion_1.AccordionComponent, { data: contentFaq_1.accordionData }),
                    ["Terms of Use", "Terms $ Conditions"].includes(currentTab) && (React.createElement(termsandcondition_1["default"], null)),
                    currentTab === "Contact Us" && React.createElement(ContactUs_1["default"], null),
                    currentTab === "Security Settings" && (React.createElement(SecuritySettings_1["default"], { subtabs: subtabs, subTab: subTab, setSubTab: setSubTab })),
                    currentTab === "My Account" && (React.createElement(AccountTable_1["default"], { tabledata: accounts })),
                    currentTab === "My Profile" && React.createElement(ProfileForm_1["default"], null))))));
};
exports["default"] = Settings;
