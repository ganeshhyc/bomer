// Generated by purs version 0.11.7
"use strict";
var DOM = require("../DOM");
var Data_Function = require("../Data.Function");
var Data_Lens = require("../Data.Lens");
var Data_Maybe = require("../Data.Maybe");
var Data_String = require("../Data.String");
var FRP = require("../FRP");
var FRP_Behavior = require("../FRP.Behavior");
var FRP_Event = require("../FRP.Event");
var Prelude = require("../Prelude");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var PrestoDOM_Elements = require("../PrestoDOM.Elements");
var PrestoDOM_Events = require("../PrestoDOM.Events");
var PrestoDOM_Properties = require("../PrestoDOM.Properties");
var PrestoDOM_Types = require("../PrestoDOM.Types");
var PrestoDOM_Types_DomAttributes = require("../PrestoDOM.Types.DomAttributes");
var PrestoDOM_Util = require("../PrestoDOM.Util");
var view = function (props) {
    return PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(40)), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.orientation("vertical"), PrestoDOM_Properties.margin("20,20,20,20"), PrestoDOM_Properties.gravity("center") ])([ PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.text(props.message), PrestoDOM_Properties.visibility(props.visibility), PrestoDOM_Properties.margin("20,20,20,20"), PrestoDOM_Properties.textSize("20") ])([  ]) ]);
};
module.exports = {
    view: view
};
