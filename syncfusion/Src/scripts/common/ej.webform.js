/*!
*  filename: ej.webform.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/


(function () {
    ej.Accordion.prototype._includeOnViewstate = ["cssClass", "enabled", "enableRTL", "selectedItems", "selectedItemIndex"];
    ej.Autocomplete.prototype._includeOnViewstate = ["cssClass", "enabled", "enableRTL", "readOnly", "value"];
    ej.Button.prototype._includeOnViewstate = ["enabled", "cssClass", "enableRTL"];
    ej.CheckBox.prototype._includeOnViewstate = ["checked", "enabled", "cssClass", "enableRTL"];
    ej.CurrencyTextbox.prototype._includeOnViewstate = ["cssClass", "locale", "enabled", "enableRTL", "readOnly", "value"];
    ej.DatePicker.prototype._includeOnViewstate = ["value","minDate", "maxDate", "locale", "enabled", "readOnly", "cssClass", "enableRTL"];
    ej.DateTimePicker.prototype._includeOnViewstate = ["value", "minDateTime", "maxDateTime", "locale", "enabled", "readOnly", "cssClass", "enableRTL"];
    ej.DropDownList.prototype._includeOnViewstate = ["value", "text", "enabled", "readOnly", "cssClass", "enableRTL", "selectedItems", "selectedItemIndex"];
    ej.MaskEdit.prototype._includeOnViewstate = ["value", "maskFormat", "inputMode", "enabled", "readOnly", "cssClass", ];
	ej.datavisualization.Map.prototype._includeOnViewstate=["enablePan","enableAnimation","enableResize"];
	ej.datavisualization.TreeMap.prototype._includeOnViewstate=["highlightOnSelection","enableResize"];
    ej.Menu.prototype._includeOnViewstate = ["animationType", "enabled", "cssClass", "enableRTL", "orientation"];
    ej.NumericTextbox.prototype._includeOnViewstate = ["cssClass", "locale", "enabled", "enableRTL", "readOnly", "value"];
    ej.PercentageTextbox.prototype._includeOnViewstate = ["cssClass", "locale", "enabled", "enableRTL", "readOnly", "value"];
    ej.ProgressBar.prototype._includeOnViewstate = ["value", "text", "percentage", "minValue", "maxValue", "enabled", "cssClass", "enableRTL"];
    ej.RadioButton.prototype._includeOnViewstate = ["checked", "enabled", "cssClass", "enableRTL"];
    ej.Rating.prototype._includeOnViewstate = ["value", "minValue", "maxValue", "readOnly", "cssClass"];
    ej.RTE.prototype._includeOnViewstate = ["cssClass", "locale", "enabled", "enableRTL", "value"];
    ej.Slider.prototype._includeOnViewstate = ["value", "values", "minValue", "maxValue", "incrementStep", "readOnly", "enabled", "enableRTL", "sliderType", "cssClass"];
    ej.SplitButton.prototype._includeOnViewstate = ["text", "cssClass", "enableRTL", "enabled"];
    ej.Tab.prototype._includeOnViewstate = ["selectedItemIndex", "enabled", "cssClass", "enableRTL"];
    ej.TagCloud.prototype._includeOnViewstate = ["enableRTL", "cssClass", "titleText", "titleImage", "format"];
    ej.TimePicker.prototype._includeOnViewstate = ["value", "minTime", "maxTime", "locale", "enabled", "readOnly", "cssClass", "enableRTL"];
    ej.ToggleButton.prototype._includeOnViewstate = ["enabled", "cssClass", "enableRTL", "toggleState", "activePrefixIcon",
                                            "activeSuffixIcon", "activeText", "defaultText", "defaultPrefixIcon", "defaultSuffixIcon"];
    ej.Toolbar.prototype._includeOnViewstate = ["enabled", "cssClass", "enableRTL", "orientation", "hide"];
    ej.TreeView.prototype._includeOnViewstate = ["cssClass", "enabled", "enableRTL", "expandedNodes", "checkedNodes"];
    ej.Uploadbox.prototype._includeOnViewstate = ["enabled", "multipleFilesSelection", "enableRTL", "cssClass", "showFileDetails"];
    ej.olap.OlapGrid.prototype._includeOnViewstate = ["currentReport"];
    ej.olap.OlapChart.prototype._includeOnViewstate = ["currentReport"];
    ej.Grid.prototype._includeOnViewstate = [ "allowFiltering", "allowGrouping", "allowKeyboardNavigation", "allowMultiSorting", "allowPaging", "allowReordering",
                                              "allowResizing", "allowScrolling", "allowSearching", "allowSelection", "allowSorting", "showSummary",
                                              "cssClass", "detailsTemplate", "enableAltRow", "enableHeaderHover", "enablePersistence", "enableRTL", "enableRowHover", "locale",
                                              "query", "rowTemplate", "selectedRowIndex", "selectionType", "editSettings", "filterSettings", "groupSettings", "pageSettings",
                                              "scrollSettings", "sortSettings", "toolbarSettings"];
	ej.datavisualization.Chart.prototype._includeOnViewstate = ["series"];
    ej.datavisualization.CircularGauge.prototype._includeOnViewstate =["scales"];
    ej.datavisualization.LinearGauge.prototype._includeOnViewstate = ["scales"];
	ej.datavisualization.Diagram.prototype._includeOnViewstate = ["nodes", "connectors", "width", "height", "labels"];
    ej.Schedule.prototype._includeOnViewstate=["currentDate","currentView","endHour","startHour"]
})();;

(function () {

    var args, clientArgs;
    setTimeout(function () { ej.isOnWebForms = true; }, 1000);
    ej.raiseWebFormsServerEvents = function (eventName, eventProp, clientProp) {
        if (eventProp.model.serverEvents.indexOf(eventName) != -1) {
            args = eventProp, clientArgs = ignoreDOMElement(clientProp);
            setTimeout(function () {
                try {
                    var modelStr = JSON.stringify({ type: args.originalEventType, args: clientArgs });
                    __doPostBack(args.model.uniqueId, modelStr);
                }
                catch (e) { }
            }, 0);
        }
    }
    function ignoreDOMElement(args) {
        if (!args) return null;
        for (var name in args) {
            var ele = args[name];
            if ($.isPlainObject(ele)) ignoreDOMElement(ele);
            else if (isDOMObj(ele) || (ele && typeof ele.preventDefault == "function"))
                delete args[name];
        }
        return args;
    }
    function isDOMObj(o) {
        return o instanceof $ || (o && o.nodeType && o.nodeType == 1);
    }

})();

function EJ_ClientSideOnPostBack() {
    clearPostBackData();
    var $form = typeof theForm == "undefined" ? $("body form") : $(theForm);
    if (!$form.length) return;
    $form.append(getPostBackData());
    addPostBackHandler();
}

function getPostBackData() {
    var controls = $("body .e-js");
    var div = $(document.createElement("div"));
    div.attr("id", "ej-hidden-model-container");
    for (var i = 0; i < controls.length; i++) {
        var widgets = $(controls[i]).data("ejWidgets");
        if (!widgets) continue;
        for (var j = 0; j < widgets.length; j++) {
            var that = $(controls[i]).data(widgets[j]);
            if (!that || !that.model.clientId) continue;
            var hidden = $(document.createElement("input")).attr({
                "type": "hidden",
                "id": that.model.clientId + "_hidden_model",
                "name": that.model.clientId + "_hidden_model"
            }).val(JSON.stringify(includeRequiredProp(that)));
            div.append(hidden);
        }
    }
    return div;
}

function includeRequiredProp(that) {
    var propArray = that._includeOnViewstate || [], model = {};
    for (var n = 0; n < propArray.length; n++)
        model[propArray[n]] = ej.util.getObject(propArray[n], that.model);
    return model;
}

function clearPostBackData() {
    removePostBackHandler();
    $("#ej-hidden-model-container").remove();
}

function addPostBackHandler() {
    if (typeof Sys != "undefined")
        Sys.WebForms.PageRequestManager.getInstance().add_endRequest(clearPostBackData);
}
function removePostBackHandler() {
    if (typeof Sys != "undefined")
        Sys.WebForms.PageRequestManager.getInstance().remove_endRequest(clearPostBackData);
};