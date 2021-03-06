// Generated by purs version 0.11.7
"use strict";
var $foreign = require("./foreign");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var DOM_WebStorage_Event_Types = require("../DOM.WebStorage.Event.Types");
var DOM_WebStorage_Types = require("../DOM.WebStorage.Types");
var Data_Maybe = require("../Data.Maybe");
var Data_Nullable = require("../Data.Nullable");
var Prelude = require("../Prelude");
var storageArea = function ($0) {
    return Data_Nullable.toMaybe($foreign._storageArea($0));
};
var oldValue = function ($1) {
    return Data_Nullable.toMaybe($foreign._oldValue($1));
};
var newValue = function ($2) {
    return Data_Nullable.toMaybe($foreign._newValue($2));
};
var key = function ($3) {
    return Data_Nullable.toMaybe($foreign._key($3));
};
module.exports = {
    key: key,
    oldValue: oldValue,
    newValue: newValue,
    storageArea: storageArea,
    url: $foreign.url
};
