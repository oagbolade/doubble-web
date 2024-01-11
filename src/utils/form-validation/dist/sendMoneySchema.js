"use strict";
exports.__esModule = true;
exports.sendMoneySchema = void 0;
var helpers_1 = require("./helpers");
exports.sendMoneySchema = {
    fundingAcct1: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Funding account must not be empty"
        }
    },
    fundingAcct2: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Funding account must not be empty"
        }
    }
};
