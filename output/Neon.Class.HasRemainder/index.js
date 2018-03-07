// Generated by purs version 0.11.7
"use strict";
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Prelude = require("../Prelude");
var Unsafe_Coerce = require("../Unsafe.Coerce");
var HasRemainder = function (remainder) {
    this.remainder = remainder;
};
var remainder = function (dict) {
    return dict.remainder;
};
var numberHasRemainder = new HasRemainder(function (y) {
    return function (x) {
        return x % y;
    };
});
var intHasRemainder = new HasRemainder(function (y) {
    return function (x) {
        return x % y;
    };
});
module.exports = {
    remainder: remainder,
    HasRemainder: HasRemainder,
    intHasRemainder: intHasRemainder,
    numberHasRemainder: numberHasRemainder
};
