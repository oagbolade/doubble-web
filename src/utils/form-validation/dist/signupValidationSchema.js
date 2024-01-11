"use strict";
exports.__esModule = true;
exports.signupStateValidatorSchema = void 0;
var helpers_1 = require("./helpers");
exports.signupStateValidatorSchema = {
    username: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Username Must not be empty"
        }
    },
    password: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Password must not be empty"
        }
    },
    confirmPassword: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Confirm Password must not be empty"
        }
    }
};
