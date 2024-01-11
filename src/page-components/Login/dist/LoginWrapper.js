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
var icons_1 = require("../../icons");
var utils_1 = require("../../utils");
var hooks_1 = require("../../redux/hooks");
var authActions_1 = require("../../redux/auth/authActions");
var Input_1 = require("./Input");
var authTypes_1 = require("../../redux/auth/authTypes");
var defaultLoginState = {
    username: "",
    password: ""
};
var LoginWrapper = function () {
    var _a = react_1.useState(""), apiError = _a[0], setApiError = _a[1];
    var _b = utils_1.useFormValidation(defaultLoginState, utils_1.loginStateValidatorSchema), handleChange = _b.handleChange, formValues = _b.formValues, errors = _b.errors;
    var _c = hooks_1.useAppSelector(function (state) { return state.auth; }), loading = _c.loading, loginerror = _c.loginerror, auth = _c.auth, user = _c.user;
    var dispatch = hooks_1.useAppDispatch();
    var router = router_1.useRouter();
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var hasError, data;
            return __generator(this, function (_a) {
                e.preventDefault();
                hasError = utils_1.setEmptyField(formValues);
                if (hasError) {
                    setApiError(hasError + " cannot be empty");
                    return [2 /*return*/];
                }
                data = {
                    username: formValues.username,
                    password: formValues.password
                };
                dispatch(authActions_1.login(data, router));
                return [2 /*return*/];
            });
        });
    }
    react_1.useEffect(function () {
        return function () {
            dispatch({ type: authTypes_1.CLEAR_LOGIN_ERROR });
        };
    }, []);
    if (auth && !user.isUserMigrated) {
        router.push("/overview");
    }
    return (React.createElement(shared_components_1.Container, { bgColor: "#ffffff", height: "100%" },
        React.createElement(shared_components_1.FlexWrapper, { height: "100%" },
            React.createElement(shared_components_1.FlexWrapper, { type: "item", lg: "6", md: "6", background: "#00CCFF", mediaQueries: "\n              @media screen and (max-width: 991px) {\n                display: none;\n              }\n          ", justifyContent: "flex-end", position: "relative" },
                React.createElement(shared_components_1.FlexWrapper, { position: "relative", width: "60%" },
                    React.createElement(shared_components_1.FlexWrapper, { position: "absolute", left: "-60%", top: "20%", width: "100%", zIndex: "999" },
                        React.createElement(image_1["default"], { src: "/login/main-image.png", alt: "Doubble Logo", width: 594, height: 800 })),
                    React.createElement(shared_components_1.FlexWrapper, { width: "80%", flexDirection: "column", top: "35%", left: "0%", position: "absolute", alignItems: "flex-start", justifyContent: "center" },
                        React.createElement(shared_components_1.Typography, { fontWeight: "700", fontSize: "32px" }, "Savings that grows"),
                        React.createElement(shared_components_1.Typography, { fontSize: "32px" }, "with you"),
                        React.createElement(shared_components_1.FlexWrapper, { marginTop: "50px" },
                            React.createElement(image_1["default"], { src: "/login/doubble-logo.png", alt: "Doubble Logo", width: 127, height: 30 }))),
                    React.createElement(image_1["default"], { src: "/login/background-mat.png", alt: "Doubble Logo", width: 490, height: 1150 }))),
            React.createElement(shared_components_1.FlexWrapper, { type: "item", lg: "6", md: "6", xs: "12", sm: "12", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "30px", mediaQueries: "\n              @media screen and (max-width: 991px) {\n                width: 100%;\n                padding: 15px\n              }\n          " },
                React.createElement(shared_components_1.FlexWrapper, { padding: "50px", mediaQueries: "\n              @media screen and (max-width: 991px) {\n                width: 100%;\n                padding: 5px\n              }\n          " },
                    React.createElement(shared_components_1.FlexWrapper, { position: "absolute", top: "20px", left: "20px", mediaQueries: "\n                  @media screen and (min-width: 1200px) {\n                    display: none;\n                  }\n              " },
                        React.createElement(image_1["default"], { src: "/login/doubble-logo-dark.png", alt: "Doubble Logo", width: 63, height: 15 })),
                    React.createElement(shared_components_1.FlexWrapper, { display: "flex", flexDirection: "column" },
                        React.createElement(shared_components_1.Typography, { fontSize: "42px", fontWeight: "700", mediaQueries: "\n                  @media screen and (max-width: 1200px) {\n                    font-size: 28px;\n                  }\n              " }, "Welcome Back"),
                        (loginerror || apiError) && (React.createElement(shared_components_1.Typography, { fontColor: "#EB5757", fontSize: "12px", fontWeight: "400", marginTop: "10px" }, loginerror || apiError))),
                    React.createElement("form", { method: "POST", action: "/api/auth/login", onSubmit: handleSubmit },
                        React.createElement(shared_components_1.FlexWrapper, null,
                            React.createElement(shared_components_1.FormInputV2, { name: "username", type: "text", placeholder: "Username/Email Address", onChange: handleChange, error: errors.username }),
                            React.createElement(shared_components_1.FormInputV2, { name: "password", type: "password", placeholder: "Password", onChange: handleChange, error: errors.password }),
                            React.createElement(shared_components_1.FlexWrapper, { width: "100%", marginTop: "50px", justifyContent: "space-between" },
                                React.createElement(shared_components_1.FlexWrapper, { type: "item", lg: "5", md: "5", xs: "6", sm: "6", justifyContent: "flex-start", alignItems: "center" },
                                    React.createElement(Input_1.Check, { type: "checkbox" }),
                                    React.createElement(shared_components_1.Typography, { fontWeight: "700", marginLeft: "20px", mediaQueries: "\n                      @media screen and (max-width: 600px) {\n                        font-size: 10px;\n                      }\n                  " }, "Remember me")),
                                React.createElement(shared_components_1.FlexWrapper, { type: "item", lg: "6", md: "6", xs: "6", sm: "6", justifyContent: "flex-end", alignItems: "center" },
                                    React.createElement(link_1["default"], { href: "/forgot-password" },
                                        React.createElement("a", { style: {
                                                textDecoration: "none"
                                            } },
                                            React.createElement(shared_components_1.Typography, { fontWeight: "700", mediaQueries: "\n                          @media screen and (max-width: 600px) {\n                            font-size: 10px;\n                          }\n                        " }, "Forgot Password?"))))),
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
                                    marginTop: "50px",
                                    cursor: "pointer"
                                }, type: "submit" },
                                React.createElement(shared_components_1.Typography, { fontSize: "24px" }, "Login"),
                                loading && (React.createElement(shared_components_1.FlexWrapper, { marginLeft: "5px" },
                                    React.createElement(icons_1.SterlingLoadingIcon, null)))),
                            React.createElement(shared_components_1.FlexWrapper, { width: "100%", justifyContent: "flex-end", marginTop: "20px" },
                                React.createElement(link_1["default"], { href: "/register" },
                                    React.createElement("a", { style: {
                                            textDecoration: "none"
                                        } },
                                        React.createElement(shared_components_1.Typography, { mediaQueries: "\n                      @media screen and (max-width: 600px) {\n                        font-size: 14px;\n                      }\n                    " }, "I don\u2019t have an account")))))))))));
};
exports["default"] = LoginWrapper;
