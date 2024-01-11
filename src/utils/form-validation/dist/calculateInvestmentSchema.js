"use strict";
exports.__esModule = true;
exports.calculateInvestmentSchema = void 0;
var helpers_1 = require("./helpers");
exports.calculateInvestmentSchema = {
    title: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Title must not be empty"
        }
    },
    amount: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Amount must not be empty"
        }
    },
    type: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Type must not be empty"
        }
    },
    duration: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Duration must not be empty"
        }
    }
};
