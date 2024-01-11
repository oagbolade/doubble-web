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
var image_1 = require("next/image");
var link_1 = require("next/link");
var router_1 = require("next/router");
var shared_components_1 = require("../../shared-components");
var utils_1 = require("../../utils");
var hooks_1 = require("../../redux/hooks");
var http_1 = require("../../https/http");
var ExistingUser = function () {
    var _a = react_1.useState(""), apiError = _a[0], setApiError = _a[1];
    var _b = react_1.useState(false), isRequesting = _b[0], setIsRequesting = _b[1];
    var _c = react_1.useState(""), error = _c[0], setError = _c[1];
    var _d = react_1.useState(""), success = _d[0], setSuccess = _d[1];
    var user = hooks_1.useAppSelector(function (state) { return state.auth; }).user;
    var defaultExistingUserState = {
        username: "",
        emailAddress: "",
        mobileNumber: "",
        transactionPIN: ""
    };
    var _e = utils_1.useFormValidation(defaultExistingUserState, utils_1.existingUserStateValidatorSchema), handleChange = _e.handleChange, formValues = _e.formValues, errors = _e.errors;
    var router = router_1.useRouter();
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var hasError, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        formValues.emailAddress = user.emailAddress;
                        formValues.mobileNumber = user.mobileNumber;
                        hasError = utils_1.setEmptyField(formValues);
                        if (hasError) {
                            setApiError(hasError + " cannot be empty");
                            setTimeout(function () { return setApiError(""); }, 5000);
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        setError("");
                        setApiError("");
                        setSuccess("");
                        setIsRequesting(true);
                        return [4 /*yield*/, http_1.httpRequest({
                                url: "Account/MigrationSetup",
                                method: "POST",
                                body: {
                                    platform: 1,
                                    imei: "string",
                                    deviceType: "1",
                                    deviceManufacturer: "string",
                                    deviceModel: "string",
                                    deviceIP: "string",
                                    deviceName: "string",
                                    userId: user === null || user === void 0 ? void 0 : user.userId,
                                    emailAddress: formValues.emailAddress,
                                    mobileNumber: formValues.mobileNumber,
                                    username: formValues.username,
                                    transactionPIN: formValues.transactionPIN
                                }
                            })];
                    case 2:
                        result = _a.sent();
                        if ((result === null || result === void 0 ? void 0 : result.status) === true) {
                            setSuccess(result.message);
                            setIsRequesting(false);
                            setTimeout(function () {
                                setSuccess("Updated Successfully");
                                router.push("/overview");
                            }, 3000);
                        }
                        else {
                            setError(result.message);
                            setIsRequesting(false);
                            setTimeout(function () { return setError(""); }, 5000);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        setIsRequesting(false);
                        setError(e_1.message || "Something went wrong!");
                        setTimeout(function () { return setError(""); }, 5000);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement(shared_components_1.Container, { bgColor: "#ffffff", height: "100%" },
        React.createElement(shared_components_1.FlexWrapper, { height: "100%" },
            React.createElement(shared_components_1.FlexWrapper, { type: "item", lg: "6", md: "6", background: "#00CCFF", mediaQueries: "\n              @media screen and (max-width: 991px) {\n                display: none;\n              }\n          ", justifyContent: "flex-end", position: "relative" },
                React.createElement(shared_components_1.FlexWrapper, { position: "relative", width: "60%" },
                    React.createElement(shared_components_1.FlexWrapper, { position: "absolute", left: "-35%", top: "35%", width: "100%", zIndex: "999" },
                        React.createElement(shared_components_1.FlexWrapper, { background: "#9B51E0", padding: "20px", borderRadius: "100%" },
                            React.createElement(shared_components_1.Typography, { fontWeight: "500", fontColor: "white", fontSize: "36px", padding: "4px 0" }, "DE"))),
                    React.createElement(shared_components_1.FlexWrapper, { width: "80%", flexDirection: "column", top: "35%", left: "-10%", position: "absolute", alignItems: "flex-start", justifyContent: "center" },
                        React.createElement(shared_components_1.Typography, { fontWeight: "700", fontSize: "40px" }, "Welcome Back"),
                        React.createElement(shared_components_1.Typography, { fontSize: "26px", marginTop: "12px" }, "Desmond Edward")),
                    React.createElement(image_1["default"], { src: "/login/background-mat.png", alt: "Doubble Logo", width: 490, height: 1150 }))),
            React.createElement(shared_components_1.FlexWrapper, { type: "item", lg: "6", md: "6", xs: "12", sm: "12", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "30px", paddingBottom: "180px", mediaQueries: "\n              @media screen and (max-width: 991px) {\n                width: 100%;\n                padding: 15px\n              }\n          " },
                React.createElement(shared_components_1.FlexWrapper, { padding: "80px", mediaQueries: "\n              @media screen and (max-width: 991px) {\n                width: 100%;\n                padding: 5px\n              }\n          " },
                    React.createElement(shared_components_1.FlexWrapper, { position: "absolute", top: "20px", left: "20px", mediaQueries: "\n                  @media screen and (min-width: 1200px) {\n                    display: none;\n                  }\n              " },
                        React.createElement(image_1["default"], { src: "/login/doubble-logo-dark.png", alt: "Doubble Logo", width: 63, height: 15 })),
                    React.createElement(shared_components_1.FlexWrapper, { display: "flex", flexDirection: "column", marginBottom: "20px" },
                        React.createElement(shared_components_1.Typography, { fontSize: "42px", fontWeight: "700", mediaQueries: "\n                  @media screen and (max-width: 1200px) {\n                    font-size: 28px;\n                  }\n              " }, "Verify Your Account")),
                    React.createElement("form", { method: "POST", onSubmit: handleSubmit },
                        React.createElement(shared_components_1.FlexWrapper, null,
                            React.createElement(shared_components_1.FormInputV2, { name: "emailAddress", type: "text", placeholder: "Email Address", onChange: handleChange, value: user === null || user === void 0 ? void 0 : user.emailAddress, error: errors.emailAddress }),
                            React.createElement(shared_components_1.FormInputV2, { name: "username", type: "text", placeholder: "Username", onChange: handleChange, value: user === null || user === void 0 ? void 0 : user.username, error: errors.username }),
                            React.createElement(shared_components_1.FormInputV2, { name: "mobileNumber", type: "text", placeholder: "Mobile Number", onChange: handleChange, value: user.mobileNumber, error: errors.mobileNumber }),
                            React.createElement(shared_components_1.FormInputV2, { name: "transactionPIN", type: "text", placeholder: "Transaction PIN", onChange: handleChange, error: errors.transactionPIN }),
                            React.createElement("div", { className: "text-center col-12" }, success && (React.createElement(shared_components_1.Typography, { fontColor: "green", fontSize: "14px", fontWeight: "400", marginTop: "20px" },
                                React.createElement("span", { className: "w3-animate-top" }, success)))),
                            React.createElement("div", { className: "text-center col-12" }, error && (React.createElement(shared_components_1.Typography, { fontColor: "#EB5757", fontSize: "14px", fontWeight: "400", marginTop: "20px" },
                                React.createElement("span", { className: "w3-animate-top" }, error)))),
                            React.createElement("div", { className: "text-center col-12" }, apiError && (React.createElement(shared_components_1.Typography, { fontColor: "#EB5757", fontSize: "14px", fontWeight: "400", marginTop: "20px" },
                                React.createElement("span", { className: "w3-animate-top" }, apiError)))),
                            React.createElement("button", { style: {
                                    width: "100%",
                                    height: "70px",
                                    background: "#00CCFF",
                                    color: "#263E61",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "5px",
                                    border: "none",
                                    marginTop: "20px",
                                    cursor: "pointer"
                                }, type: "submit" },
                                React.createElement(shared_components_1.Typography, { fontSize: "24px" }, "Sign Up"),
                                isRequesting && (React.createElement(shared_components_1.FlexWrapper, { marginLeft: "5px" },
                                    React.createElement(image_1["default"], { src: "/loader.gif", alt: "loader", width: 30, height: 30 })))),
                            React.createElement(shared_components_1.FlexWrapper, { width: "100%", justifyContent: "center", marginTop: "20px" },
                                React.createElement(link_1["default"], { href: "/login" },
                                    React.createElement("a", { style: {
                                            textDecoration: "none"
                                        } },
                                        React.createElement(shared_components_1.Typography, { mediaQueries: "\n                      @media screen and (max-width: 600px) {\n                        font-size: 12px;\n                      }\n                    " }, "Login a different account")))))))))));
};
exports["default"] = ExistingUser;
