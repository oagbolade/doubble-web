"use strict";
exports.__esModule = true;
exports.otpStateValidatorSchema = void 0;
var helpers_1 = require("./helpers");
exports.otpStateValidatorSchema = {
    otp: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Must not be empty"
        }
    }
};
