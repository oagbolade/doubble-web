"use strict";
exports.__esModule = true;
exports.forgotStateValidatorSchema = void 0;
var helpers_1 = require("./helpers");
exports.forgotStateValidatorSchema = {
    emailAddress: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Must not be empty"
        },
        isEmail: {
            func: helpers_1.isEmail,
            error: "Invalid email format"
        }
    }
};
