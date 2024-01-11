"use strict";
exports.__esModule = true;
exports.registerStateValidatorSchema = void 0;
var helpers_1 = require("./helpers");
exports.registerStateValidatorSchema = {
    emailAddress: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Must not be empty"
        },
        isEmail: {
            func: helpers_1.isEmail,
            error: "Invalid email format"
        }
    },
    bvn: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "BVN must not be empty"
        }
    },
    lastName: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Last name must not be empty"
        }
    },
    firstName: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "First Name must not be empty"
        }
    },
    dateOfBirth: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Date of birth must not be empty"
        }
    },
    mobilePhoneNumber: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Mobile Phone number must not be empty"
        }
    },
    gender: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Gender must not be empty"
        }
    },
    password: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "password must not be empty"
        }
    },
    username: {
        isEmpty: {
            func: helpers_1.isEmpty,
            error: "Username must not be empty"
        }
    }
};
