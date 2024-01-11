"use strict";
exports.__esModule = true;
exports.loginStateValidatorSchema = void 0;
var helpers_1 = require("./helpers");
exports.loginStateValidatorSchema = {
    // email: {
    //   isEmpty: {
    //     func: isEmpty,
    //     error: "Must not be empty",
    //   },
    //   isEmail: {
    //     func: isEmail,
    //     error: "Invalid email format",
    //   },
    // },
    username: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Username must not be empty"
        }
    },
    password: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Password must not be empty"
        }
    }
};
