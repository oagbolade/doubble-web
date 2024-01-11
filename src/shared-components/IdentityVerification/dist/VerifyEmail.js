"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
require("antd/dist/antd.css");
var styled_components_1 = require("styled-components");
var image_1 = require("next/image");
var router_1 = require("next/router");
var hooks_1 = require("../../redux/hooks");
var __1 = require("..");
var otpAction_1 = require("../../redux/otp/otpAction");
/* import GetStartedModal from "./GetStartedModal"; */
var Select = styled_components_1["default"].select(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid #e5e5e5;\n  height: 50px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 5px;\n"], ["\n  border: 1px solid #e5e5e5;\n  height: 50px;\n  width: 100%;\n  border-radius: 5px;\n  padding: 5px;\n"])));
var VerifyEmail = function (props) {
    var router = router_1.useRouter();
    var dispatch = hooks_1.useAppDispatch();
    var _a = react_1.useState(false), isModalVisible = _a[0], setIsModalVisible = _a[1];
    var showModal = function () {
        dispatch({ type: "OTP_RESET" });
        setIsModalVisible(true);
    };
    var handleOk = function () {
        setIsModalVisible(false);
    };
    var handleCancel = function () {
        setIsModalVisible(false);
    };
    var _b = hooks_1.useAppSelector(function (_a) {
        var otp = _a.otp;
        return otp;
    }), loading = _b.loading, data = _b.data, error = _b.error, success = _b.success;
    var sendOtpHandler = function () {
        dispatch(otpAction_1.sendOTP(props.userInfo));
    };
    react_1.useEffect(function () {
        if (!loading && data.type.length)
            setTimeout(function () { return router.push("/otp"); }, 2000);
    }, [data]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(__1.FlexWrapper, { cursor: "pointer", onClick: showModal }, props.children),
        react_1["default"].createElement(antd_1.Modal, { maskStyle: { backgroundColor: "rgba(0, 0, 0, 0.8)" }, title: null, closable: false, footer: null, visible: isModalVisible, onOk: handleOk, onCancel: handleCancel },
            react_1["default"].createElement(__1.Card, { boxShadow: "", width: "100%", height: "450px", flexDirection: "column", display: "flex", borderRadius: "0" },
                react_1["default"].createElement(__1.FlexWrapper
                /* marginBottom="200px" */
                , { 
                    /* marginBottom="200px" */
                    marginTop: "5%", width: "90%", flexDirection: "row", justifyContent: "center" },
                    react_1["default"].createElement(image_1["default"], { src: "/icons/overview/emailIcon.png", alt: "email", width: "100", height: "100" })),
                react_1["default"].createElement(__1.FlexWrapper
                /* marginBottom="200px" */
                , { 
                    /* marginBottom="200px" */
                    marginTop: "5%", width: "90%", flexDirection: "row", justifyContent: "center" },
                    react_1["default"].createElement(__1.Typography, { fontSize: "18px", marginBotton: "5%" }, "Verify your email address"),
                    react_1["default"].createElement(__1.Typography, { marginTop: "7%", fontSize: "28px" }, props.userInfo.emailAddress)),
                error.length > 0 && (react_1["default"].createElement(__1.FlexWrapper
                /* marginBottom="200px" */
                , { 
                    /* marginBottom="200px" */
                    marginTop: "3%", width: "90%", flexDirection: "row", justifyContent: "center" },
                    react_1["default"].createElement(__1.Typography, { marginTop: "5px", fontColor: "red", fontSize: "13px" }, error))),
                success.length > 0 && (react_1["default"].createElement(__1.FlexWrapper
                /* marginBottom="200px" */
                , { 
                    /* marginBottom="200px" */
                    marginTop: "3%", width: "90%", flexDirection: "row", justifyContent: "center" },
                    react_1["default"].createElement(__1.Typography, { marginTop: "5px", fontColor: "green", fontSize: "14px" }, success))),
                react_1["default"].createElement("button", { onClick: sendOtpHandler, style: {
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
                        margin: "5% 10% 10% 10%"
                    } },
                    loading && (react_1["default"].createElement(__1.FlexWrapper, { marginRight: "8px" },
                        react_1["default"].createElement(image_1["default"], { src: "/load.gif", alt: "Fixed investment", width: 25, height: 25 }))),
                    react_1["default"].createElement(__1.Typography, { fontColor: "#00CCFF" }, "Send OTP"))))));
};
exports["default"] = VerifyEmail;
var templateObject_1;
