// Generated by purs version 0.11.7
"use strict";
var Data_Function = require("../Data.Function");
var Data_Lens_Lens = require("../Data.Lens.Lens");
var Data_Unit = require("../Data.Unit");
var Prelude = require("../Prelude");
var united = function (dictStrong) {
    return Data_Lens_Lens.lens(Data_Function["const"](Data_Unit.unit))(Data_Function["const"])(dictStrong);
};
module.exports = {
    united: united
};