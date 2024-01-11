"use strict";
exports.__esModule = true;
exports.createInvestmentSchema = void 0;
var helpers_1 = require("./helpers");
exports.createInvestmentSchema = {
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
    month: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Duration must not be empty"
        }
    },
    frequency: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Frequency must not be empty"
        }
    },
    fundingAccount: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Funding Account is required"
        }
    },
    fundingBank: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Funding Bank is required"
        }
    },
    beneficiaryAcct: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Beneficiary Account is required"
        }
    },
    beneficiaryBank: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Beneficiary Bank is required"
        }
    }
};
