"use strict";
exports.__esModule = true;
exports.setEmptyField = exports.isEmpty = exports.isEmail = void 0;
exports.isEmail = function (value) {
    return /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{1,64}@([a-zA-Z0-9-]+.[a-zA-Z0-9-]{2,}){1,255}){1,320}$/.test(value);
};
exports.isEmpty = function (value) { return Boolean(value.length); };
exports.setEmptyField = function (formValues) {
    return Object.keys(formValues).find(function (value) {
        if (typeof formValues[value] === "string" && !formValues[value].length) {
            return true;
        }
        if (typeof formValues[value] === "number") {
            return true;
        }
        return false;
    });
};
