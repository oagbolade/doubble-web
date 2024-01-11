"use strict";
exports.__esModule = true;
exports.billPaymentSchema = void 0;
var helpers_1 = require("./helpers");
exports.billPaymentSchema = {
    phoneNo: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Phone number must not be empty"
        }
    },
    amount: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Amount must not be empty"
        }
    }
};
