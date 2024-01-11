"use strict";
exports.__esModule = true;
var utilities_1 = require("../../utils/utilities");
var image_1 = require("next/image");
var hooks_1 = require("../../redux/hooks");
var router_1 = require("next/router");
var react_1 = require("react");
var SettingsCard = function (_a) {
    var cardBackground = _a.cardBackground, icon = _a.icon, badgeBackground = _a.badgeBackground, status = _a.status, badgeItems = _a.badgeItems, quantity = _a.quantity, loading = _a.loading;
    var dispatch = hooks_1.useAppDispatch();
    var router = router_1.useRouter();
    var _b = react_1.useState(false), requesting = _b[0], setRequesting = _b[1];
    var handleStatus = function (status) {
        setRequesting(true);
        dispatch({ type: "GET_SELECTED_TYPE", payload: status });
        router.push('/investment');
    };
    return (React.createElement("div", { style: { minWidth: "280px" }, className: "mr-3" },
        React.createElement("div", { className: "card w-100", style: { height: "160px", backgroundColor: cardBackground } },
            React.createElement("div", { className: "row p-3" },
                React.createElement("div", { className: "col-10" },
                    React.createElement("div", { className: "d-flex align-items-center" },
                        React.createElement("div", { className: "mr-2" }, icon),
                        React.createElement("div", { className: "fw-bold text-capitalize", style: {
                                color: utilities_1.determineTextColor(status),
                                fontSize: "1.23em"
                            } }, status)),
                    React.createElement("div", { className: "col-12 d-flex my-3" }, badgeItems.map(function (item, i) {
                        return (React.createElement("div", { key: i, style: {
                                backgroundColor: badgeBackground,
                                borderRadius: "20px",
                                width: "max-content"
                            }, className: "py-1 px-3 d-flex justify-content-center align-items-center mr-1" },
                            React.createElement("span", { style: {
                                    color: utilities_1.determineTextColor(status),
                                    fontSize: "8px"
                                } }, item)));
                    }))),
                React.createElement("div", { className: "col-2" }, loading ? (React.createElement("span", null,
                    React.createElement(image_1["default"], { src: "/loader.gif", alt: "Fixed investment", width: 50, height: 50 }))) : (React.createElement("span", { className: "fw-bold text-secondary-blue pr-1 text-center", style: { fontSize: "1.5em" } }, quantity))),
                React.createElement("div", { className: "col-12 d-flex justify-content-center" },
                    React.createElement("button", { disabled: loading || quantity === 0, style: {
                            padding: "3px 6px",
                            height: "30px",
                            borderRadius: "5px",
                            border: "none",
                            marginTop: "20px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center'
                        }, onClick: function () { return handleStatus(status); }, className: "bg-primary-blue text-secondary-blue fw-500 cursor-pointer" },
                        React.createElement("div", null, "Click to view"),
                        requesting && React.createElement("div", { className: "ml-2 mt-2" },
                            React.createElement(image_1["default"], { src: "/loader.gif", alt: "Fixed investment", width: 20, height: 20 }))))))));
};
exports["default"] = SettingsCard;
