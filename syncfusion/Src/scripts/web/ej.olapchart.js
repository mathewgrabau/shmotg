/*!
*  filename: ej.olapchart.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html OLAP Chart elements
* @copyright Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
* @version 12.1 
* @author <a href="mailto:licensing@syncfusion.com">Syncfusion Inc</a>
*/

(function ($, ej, undefined) {
    /**
    * @namespace ej
    * @class ejOlapChart
    * @requires jquery-1.10.2.min.js
    * @requires jquery.easing.1.3.min.js
    * @requires jquery.globalize.min.js
    * @requires ej.core.js
    * @requires ej.data.js
    * @requires ej.touch.js
    * @requires ej.dialog.js
    * @requires ej.draggable.js
    * @requires ej.waitingpopup.js
    * @requires ej.chart.js
    * @requires ej.olapchart.js
    * @classdesc Custom Design for Html OLAP Chart control.
    * @example 
    * &lt;div id="OlapChart"&gt;&lt;/div&gt; <br> 
    * &lt;script&gt;
    * // Create OLAP Chart
    * $("#OlapChart").ejOlapChart(...); 	
    * &lt;/script&gt;
    */
    ej.widget("ejOlapChart", "ej.olap.OlapChart", {

        //Root Css Class
        _rootCSS: "e-olapchart",

        //Widget element will be automatically set in this
        element: null,

        //User-defined model will be automatically set in this
        model: null,

        validTags: ["div", "span"],

        //Default model values
        defaults: $.extend(ej.datavisualization.Chart.prototype.defaults, {
            //Properties
            /**		
            * Connects the service using the specified URL for any server updates.
            * @default ""
            * @type {string}
            * @example 
            * //To set url API value during initialization  
            * 	$("#OlapChart").ejOlapChart({  url: "/OlapChartService.svc"});					* 
            * @example 
            * //Get or set the url API, after initialization:<br>
            *	//Gets the url value  
            *	$("#OlapChart").ejOlapChart("option", "url");<br>			
            *	//Sets the url value 
            *	$("#OlapChart").ejOlapChart("option", "url",  "/OlapChartService.svc" ); 
            * @memberof ejOlapChart
            * @instance
            */
            url: "",
            /**		
            * Specify the CSS class to OLAP Chart to achieve custom theme.
            * @default ""
            * @type {string}
            * @example 
            * // Set the CSS class during initialization. 			
            * 	$("#OlapChart").ejOlapChart({  cssClass : "gradient-lime" });			* 
            * @example 
            * //Get or set the CSS class after initialization:<br>
            *	// Gets the CSS class value.		
            *	$("#OlapChart").ejOlapChart("option", "cssClass");			
            *	// Sets the CSS class to OLAP Chart
            *	$("#OlapChart").ejOlapChart("option", "cssClass",  "gradient-lime" );
            * @memberof ejOlapChart
            * @instance
            */
            cssClass: "",

            /**		
            * Contains the serialized OlapReport at the instant.
            * @default ""
            * @type {String}	
            * @memberof ejOlapChart
            * @instance
            */
            currentReport: "",

            /**		
            * Custom object to pass additional information between client-end and service-end.
            * @default null
            * @type {object}
            * @example 
            * //To set customObject API value during initialization  
            * 	$("#OlapChart").ejOlapChart({  customObject: {"key":"Hello World"}});					* 
            * @example 
            * //Get or set the customObject API, after initialization:<br>
            *	//Gets the customObject value  
            *	$("#OlapChart").ejOlapChart("option", "customObject");<br>			
            *	//Sets the customObject value 
            *	$("#OlapChart").ejOlapChart("option", "customObject",  {"key":"Hi Syncfusion!"} ); 
            * @memberof ejOlapChart
            * @instance
            */
            customObject: {},
            /**		
            * Allows the user to set custom name for the methods at service-end invoked on AJAX post.
            * @default null
            * @type {object}
            * @example 
            * //To set serviceMethodSettings API value, to invoke the appropriate service method on UI operation.
            * 	$("#OlapChart").ejOlapChart({  serviceMethodSettings: {initialize: "MyMethod", drillDown: "DrillChart"});
            * @example 
            * //Gets or sets the serviceMethodSettings API, to invoke the appropriate service method on UI operation:<br>
            * //Gets the serviceMethodSettings value  
            * $("#OlapChart").ejOlapChart("option", "serviceMethodSettings");<br>			
            * //Sets the serviceMethodSettings value 
            * $("#OlapChart").ejOlapChart("option", "serviceMethodSettings",  {initialize: "MyMethod", drillDown: "DrillChart"} ); 
            * @memberof ejOlapChart
            * @instance
            */
            serviceMethodSettings: {
                /**		
                * Allows the user to set the custom name for the service method that’s responsible for initializing OLAP Chart.
                * @default "InitializeOlapChart"
                * @type {string}
                * @example 
                * //To set initialize API value, to invoke the corresponding service method for OLAP Chart initialization. 
                * $("#OlapChart").ejOlapChart({  serviceMethodSettings: {initialize: "IninlizeOlapChartMyMethod"}); 
                * @example 
                * //Gets or sets the initialize API, to invoke the corresponding service method for OLAP Chart initialization:<br>
                * //Gets the initialize value  
                * $("#OlapChart").ejOlapChart("option", "serviceMethodSettings");<br>			
                * //Sets the initialize value 
                * $("#OlapChart").ejOlapChart("option", "serviceMethodSettings.initialize", "IninlizeOlapChartMyMethod"} ); 
                * @alias ejOlapChart#serviceMethodSettings->initialize
                * @instance
                */
                initialize: "InitializeOlapChart",

                /**		
                * Allows the user to set the custom name for the service method that’s responsible for drilling up/down operation in OLAP Chart. 
                * @default "DrillOlapChart"
                * @type {string}
                * @example 
                * //To set drillDown API value, to invoke the corresponding service method for performing server-side operation while drilling up/down in OLAP Chart. 
                * $("#OlapChart").ejOlapChart({  serviceMethodSettings: {drillDown: "DrillOlapChartMyMethod"});					
                * @example 
                * //Get or set the drillDown API, to invoke the corresponding service method for performing server-side operation while drilling up/down in OLAP Chart:<br>
                * //Gets the drillDown value  
                * $("#OlapChart").ejOlapChart("option", "serviceMethodSettings");<br>			
                * //Sets the drillDown value 
                * $("#OlapChart").ejOlapChart("option", "serviceMethodSettings.drillDown", "DrillOlapChartMyMethod"} ); 
                * @alias ejOlapChart#serviceMethodSettings->drillDown
                * @instance
                */
                drillDown: "DrillOlapChart"
            },

            /**		
            * Sets the progress indicator type which arises on any UI operation.	See {@link progressMode}
            * @default ej.olap.OlapChart.ProgressMode.Infinite
            * @type {enum}
            * @example 
            * //To set progressMode API value during initialization  
            * 	$("#OlapChart").ejOlapChart({  progressMode: ej.olap.OlapChart.ProgressMode.Normal});					* 
            * @example 
            * //Get or set the progressMode API, after initialization:<br>
            *	//Gets the progressMode value  
            *	$("#OlapChart").ejOlapChart("option", "progressMode");<br>			
            *	//Sets the progressMode value 
            *	$("#OlapChart").ejOlapChart("option", "progressMode",  ej.olap.OlapChart.ProgressMode.Progress ); 
            * @memberof ejOlapChart
            * @instance
            */
            progressMode: "infinite",
            /**		
            * Sets the localized language for the control.
            * @default "en-US"
            * @type {string}
            * @example 
            * //To set localization API value during initialization  
            * 	$("#OlapChart").ejOlapChart({  locale: "fr-FR"});					* 
            * @example 
            * //Get or set the localization API, after initialization:<br>
            *	//Gets the localization value  
            *	$("#OlapChart").ejOlapChart("option", "locale");<br>			
            *	//Sets the localization value 
            *	$("#OlapChart").ejOlapChart("option", "locale",  "fr-FR" ); 
            * @memberof ejOlapChart
            * @instance
            */
            locale: "en-US",
            //Events
            /**     
            * Fires when drilldown happens in OLAP Chart control.
            * @event
            * @name ejOlapChart#drillSuccess 	
            * @param {Object} argument Event parameters from OLAP Chart     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Chart model.
            * @param {string}  argument.type returns the name of the event.
            * @example 
            * //drillSuccess event for OLAP Chart
            * $("#OlapChart").ejOlapChart({
            *    drillSuccess: function (args) {}
            * });      
            * @memberof ejOlapChart
            * @instance
            */
            drillSuccess: null,
            /**     
            * Fires before any Ajax request passed from OLAP Chart to service methods.
            * @event
            * @name ejOlapChart#beforeServiceInvoke 	
            * @param {Object} argument Event parameters from OLAP Chart    
            * @param {string}  argument.action return the current action of OLAP Chart control.		 
            * @param {object}  argument.customObject return the custom object bounds with OLAP Chart control.
            * @param {string}  argument.element return the outer HTML of OLAP Chart control.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Chart model.
            * @param {string}  argument.type returns the name of the event.			 
            * @example 
            * //beforeServiceInvoke event for OLAP Chart
            * $("#OlapChart").ejOlapChart({
            *    beforeServiceInvoke: function (args) {}
            * });      
            * @memberof ejOlapChart
            * @instance
            */
            beforeServiceInvoke: null,
            /**     
            * Fires when it reaches client script after any Ajax request.
            * @event
            * @name ejOlapChart#afterServiceInvoke 	
            * @param {Object} argument Event parameters from OLAP Chart  
            * @param {string}  argument.action return the current action of OLAP Chart control.		 
            * @param {object}  argument.customObject return the custom object bounds with OLAP Chart control.
            * @param {string}  argument.element return the outer HTML of OLAP Chart control.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Chart model.
            * @param {string}  argument.type returns the name of the event.			 
            * @example 
            * //afterServiceInvoke event for OLAP Chart
            * $("#OlapChart").ejOlapChart({
            *    afterServiceInvoke: function (args) {}
            * });      
            * @memberof ejOlapChart
            * @instance
            */
            afterServiceInvoke: null,
            /**     
            * Fires when OLAP Chart completely finishes its rendering.
            * @event
            * @name ejOlapChart#renderComplete 	
            * @param {Object} argument Event parameters from OLAP Chart  
            * @param {string}  argument.action return the current action of OLAP Chart control.		 
            * @param {object}  argument.customObject return the custom object bounds with OLAP Chart control.
            * @param {string}  argument.element return the outer HTML of OLAP Chart control.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Chart model.
            * @param {string}  argument.type returns the name of the event.			 
            * @example 
            * //renderComplete event for OLAP Chart
            * $("#OlapChart").ejOlapChart({
            *    renderComplete: function (args) {}
            * });      
            * @memberof ejOlapChart
            * @instance
            */
            renderComplete: null,
            /**     
            * Fires while any discrepancies occurs during the rendering time.
            * @event
            * @name ejOlapChart#renderFailure 	
            * @param {Object} argument Event parameters from OLAP Chart  
            * @param {string}  argument.action return the current action of OLAP Chart control.		 
            * @param {object}  argument.customObject return the custom object bounds with OLAP Chart control.
            * @param {object}  argument.message return the error stacke tace of the original exception.
            * @param {string}  argument.element return the outer HTML of OLAP Chart control.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Chart model.
            * @param {string}  argument.type returns the name of the event.			 
            * @example 
            * //renderFailure event for OLAP Chart
            * $("#OlapChart").ejOlapChart({
            *    renderFailure: function (args) {}
            * });      
            * @memberof ejOlapChart
            * @instance
            */
            renderFailure: null,
            /**     
            * Fires when OLAP Chart successfully finished its rendering.
            * @event
            * @name ejOlapChart#renderSuccess 	
            * @param {Object} argument Event parameters from OLAP Chart  
            * @param {string}  argument.action return the current action of OLAP Chart control.		 
            * @param {object}  argument.customObject return the custom object bounds with OLAP Chart control.
            * @param {string}  argument.element return the outer HTML of OLAP Chart control.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Chart model.
            * @param {string}  argument.type returns the name of the event.			 
            * @example 
            * //renderSuccess event for OLAP Chart
            * $("#OlapChart").ejOlapChart({
            *    renderSuccess: function (args) {}
            * });      
            * @memberof ejOlapChart
            * @instance
            */
            renderSuccess: null
        }),

        /**
        * Specify the data types for default properties 
        * @private
        */
        dataTypes: {
            marker: "data",
            crossHair: "data",
            size: "data",
            serviceMethodSettings: "data",
            zooming: "data",
            customObject: "data"
        },

        observables: ["title.text", "commonSeriesOptions.type", "locale"],
        titleText: ej.util.valueFunction("title.text"),
        seriesType: ej.util.valueFunction("commonSeriesOptions.type"),
        locale: ej.util.valueFunction("locale"),

        /**
        * Gets the serialized current OLAP Report of the control.
        *
        * @private 
        */
        //get the current OLAP Report
        getOlapReport: function () {
            return this._olapReport;
        },

        /**
        * Sets the serialized current OLAP Report of the control.
        *
        * @private 
        */
        //set the current OLAP Report
        setOlapReport: function (value) {
            this._olapReport = value;
        },

        /**
        * Gets the JSON formatted records for the control.
        *
        * @private 
        */
        //get the JSON formatted records
        getJsonRecords: function () {
            return this._JSONRecords;
        },

        /**
        * Sets the JSON formatted records for the control.
        *
        * @private 
        */
        //set the JSON formatted records
        setJsonRecords: function (value) {
            this._JSONRecords = $.parseJSON(value);
        },

        // constructor function
        /**
        * Initializes the variables and loads the widget. 
        *
        * @private
        */
        _init: function () {
            this._initPrivateProperties();
            this._load();
        },

        /**
        * Destroy the OLAP Chart widget
        * all events bound using this._on will be unbind automatically and bring the control to pre-init state.
        * @alias destroy
        * @return jQuery
        * @example 
        * &lt;div id="OlapChart"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Chart
        * var chartObj = $("#OlapChart").data("ejOlapChart");
        * chartObj.destroy(); // destroy the OLAP Chart
        * &lt;/script&gt;
        * @example 
        * &lt;div id="OlapChart"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // enable the OLAP Chart
        * $("#OlapChart").ejOlapChart("destroy");	
        * &lt;/script&gt;
        * @memberof ejOlapChart
        * @instance
        */
        _destroy: function () {
            this.element.empty().removeClass("e-olapchart" + this.model.cssClass);
        },

        /**
        * To configure the private properties of OLAP Chart		
        * @private
        */
        _initPrivateProperties: function () {
            this._id = this.element.attr("id");
            ochartProxy = this;
            this._olapReport = "";
            this._JSONRecords = null;
            this._currentAction = "initialize";
            this._selectedItem = "";
            this._selectedIndex = -1;
            this._selectedTagInfo = null;
            this._tagCollection = new Array();
            this._labelCurrentTags = new Array();
            this._startDrilldown = false;
            this._drillAction = "";
            this._initZooming = false;
            this._dimensionIndex = -1;
            this._isDrilled = false;
            this._selectedMenuItem = "";
            ochartWaitingPopup = null;
            ochartProgressBar = null;
            oChartTimer = null;
        },

        /**
        * This function is the point were loading/rendering of the OLAP Chart widget is initiated.
        *
        * @private  
        */
        _load: function () {
            this.element.addClass(this.model.cssClass);
            if (this.model.progressMode != "infinite") {
                $("#" + ochartProxy._id + "progressContainer").remove();
                this._createProgressBar();
                this._progressStatus(5, 69, 140);
            }
            else if (typeof oclientWaitingPopup != 'undefined' && oclientWaitingPopup != null)
                if ($("#" + oclientProxy._id + "_maxView")[0]) {
                    $("#" + oclientProxy._id + "_maxView").ejWaitingPopup({ showOnInit: true });
                }
                else
                    oclientWaitingPopup.show();
            else {
                this.element.ejWaitingPopup({ showOnInit: true });
                ochartWaitingPopup = this.element.data("ejWaitingPopup");
            }
            if (this.model.zooming != "")
                this._initZooming = true;
            if (this.model.beforeServiceInvoke != null)
                this._trigger("beforeServiceInvoke", { action: this._currentAction, element: this.element, customObject: this.model.customObject });
            if (ochartProxy.model.progressMode == "progress")
                $("#" + ochartProxy._id + "progressText")[0].innerHTML = ochartProxy._getLocalizedLabels("PreparingAndExecutingMDXquery") + "...";
            if (this.model.currentReport != "")
                this.model.customObject = { currentReport: this.model.currentReport };
            var serializedCustomObject = JSON.stringify(this.model.customObject);
            if (this.model.customObject != "" && this.model.customObject != null && this.model.customObject != undefined)
                this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.initialize, JSON.stringify({ "action": "initialize", "customObject": serializedCustomObject }), this.renderControlSuccess);
            else
                this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.initialize, JSON.stringify({ "action": "initialize" }), this.renderControlSuccess);
        },
        _setFirst: true,

        /**
        * To configure the properties at runtime using SetModel		
        * @private
        */
        _setModel: function (options) {
            var chartObj = this.element.find("#" + this._id + "Container").data("ejChart");
            for (var key in options) {
                switch (key) {
                    case "olapReport": this.setOlapReport(options[key]); break;
                    case "jsonData": this.setJsonRecords(options[key]); break;
                    case "refreshOlapChart": this.element.renderChartFromJSON(options[key]); break;
                    case "customObject": this.model.customObject = options[key]; break;
                    case "height": this.model.size.height = options[key]; break;
                    case "width": this.model.size.width = options[key]; break;
                    case "commonSeriesOptions":
                        {
                            if (chartObj) {
                                chartObj.model.commonSeriesOptions = options[key];
                                chartObj.model.type = chartObj.model.commonSeriesOptions.type = this.seriesType();
                                for (var i = 0; i < chartObj.model.series.length; i++)
                                    chartObj.model.series[i].type = chartObj.model.type;
                            } break;
                        }
                    case "title":
                        {
                            if (chartObj)
                                chartObj.model.title.text = this.titleText();
                            break;
                        }
                    case "animation": this.model.animation = options[key]; break;
                    case "crossHair": this.model.crossHair = options[key]; break;
                    case "marker": this.model.marker = options[key]; break;
                    case "zooming": this.model.zooming = options[key]; break;
                    case "legend": this.model.legend = options[key]; break;
                    case "primaryXAxis": this.model.primaryXAxis = options[key]; break;
                    case "primaryYAxis": this.model.primaryYAxis = options[key]; break;
                    case "locale": this.locale(); break;
                    default:
                        { $.extend(true, this.model, {}, options[key]); }
                }
            }
            if (chartObj)
                this.renderControlSuccess({ "JsonRecords": JSON.stringify(this.getJsonRecords()), "OlapReport": this.getOlapReport() });
        },

        /**
        * This function is invoked to wire the events for UI interaction.
        *
        * @private  
        */
        _wireEvents: function () {
            window.clearInterval(oChartTimer);
            this._on(this.element, "click", ".menuList", function (evt) {
                ochartWaitingPopup = this.element.data("ejWaitingPopup");
                if (evt.target.innerHTML == ochartProxy._getLocalizedLabels("Exit")) {
                    this.element.find("#" + ochartProxy._id + "ExpandMenu, .expandMenu, .e-dialog").remove();
                }
                else if (evt.target.innerHTML.indexOf(ochartProxy._getLocalizedLabels("Expand")) > -1) {
                    if (typeof oclientWaitingPopup != 'undefined' && oclientWaitingPopup != null) {
                        if ($("#" + oclientProxy._id + "_maxView")[0])
                            $("#" + oclientProxy._id + "_maxView").ejWaitingPopup({ showOnInit: true });
                        else
                            oclientWaitingPopup.show();
                    }
                    else {
                        if (this.model.progressMode != "infinite")
                            ochartProxy._progressStatus(0, 70, 120);
                        else
                            ochartWaitingPopup.show();
                    }
                    if (!this._isDrilled) {
                        this._isDrilled = true;
                        jQuery.each(evt.target.parentElement.children, function (index, value) {
                            if (value.innerHTML == evt.target.innerHTML)
                                ochartProxy._dimensionIndex = index;
                        });
                    }
                    this._drillAction = "drilldown";
                    this._selectedItem = $.trim(evt.target.innerHTML.split("-")[1]);
                    jQuery.each(this._labelCurrentTags, function (index, value) {
                        if (value.name == ochartProxy._selectedItem) {
                            ochartProxy._tagCollection.push(value);
                            ochartProxy._selectedTagInfo = value.tag;
                            ochartProxy._selectedMenuItem = value.name;
                            return false;
                        }
                    });
                    this._startDrilldown = true;
                    if (this.model.beforeServiceInvoke != null)
                        this._trigger("beforeServiceInvoke", { action: this._drillAction, element: this.element, customObject: this.model.customObject });
                    if (ochartProxy.model.progressMode == "progress")
                        $("#" + ochartProxy._id + "progressText")[0].innerHTML = ochartProxy._getLocalizedLabels("PreparingAndExecutingMDXquery") + "...";
                    var serializedCustomObject = JSON.stringify(this.model.customObject);
                    if (this.model.customObject != "" && this.model.customObject != null && this.model.customObject != undefined) {
                        if (typeof (oclientProxy) != "undefined")
                            this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.drillDown, JSON.stringify({ "action": "drilldown", "drilledSeries": this._selectedTagInfo, "olapReport": this.getOlapReport(), "clientReports": oclientProxy.reports, "customObject": serializedCustomObject }), this.renderControlSuccess);
                        else
                            this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.drillDown, JSON.stringify({ "action": "drilldown", "drilledSeries": this._selectedTagInfo, "olapReport": this.getOlapReport(), "customObject": serializedCustomObject }), this.renderControlSuccess);
                    }
                    else {
                        if (!typeof (oclientProxy) != "undefined")
                            this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.drillDown, JSON.stringify({ "action": "drilldown", "drilledSeries": this._selectedTagInfo, "olapReport": this.getOlapReport() }), this.renderControlSuccess);
                        else
                            this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.drillDown, JSON.stringify({ "action": "drilldown", "drilledSeries": this._selectedTagInfo, "olapReport": this.getOlapReport(), "clientReports": oclientProxy.reports }), this.renderControlSuccess);
                    }

                }
                else {
                    if (typeof oclientWaitingPopup != 'undefined' && oclientWaitingPopup != null) {
                        if ($("#" + oclientProxy._id + "_maxView")[0])
                            $("#" + oclientProxy._id + "_maxView").ejWaitingPopup({ showOnInit: true });
                        else
                            oclientWaitingPopup.show();
                    }
                    else {
                        if (this.model.progressMode != "infinite")
                            ochartProxy._progressStatus(0, 70, 120);
                        else
                            ochartWaitingPopup.show();
                    }
                    this._drillAction = "drillup";
                    this._selectedItem = $.trim(evt.target.innerHTML.split("-")[1]);
                    jQuery.each(this._tagCollection, function (index, value) {
                        if (value.name == ochartProxy._selectedItem) {
                            ochartProxy._selectedIndex = index + ochartProxy._dimensionIndex;
                            ochartProxy._selectedTagInfo = value.tag;
                            ochartProxy._tagCollection.splice(index, ochartProxy._tagCollection.length);
                            return false;
                        }
                    });
                    if (this._tagCollection.length == 0)
                        this._isDrilled = false;
                    this._startDrilldown = true;
                    if (this.model.beforeServiceInvoke != null)
                        this._trigger("beforeServiceInvoke", { action: this._drillAction, element: this.element, customObject: this.model.customObject });
                    if (ochartProxy.model.progressMode == "progress")
                        $("#" + ochartProxy._id + "progressText")[0].innerHTML = ochartProxy._getLocalizedLabels("PreparingAndExecutingMDXquery") + "...";
                    var serializedCustomObject = JSON.stringify(this.model.customObject);
                    if (this.model.customObject != "" && this.model.customObject != null && this.model.customObject != undefined) {
                        if (typeof (oclientProxy) != "undefined")
                            this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.drillDown, JSON.stringify({ "action": "drillup", "drilledSeries": this._selectedTagInfo, "olapReport": this.getOlapReport(), "clientReports": reports, "customObject": serializedCustomObject }), this.renderControlSuccess);
                        else
                            this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.drillDown, JSON.stringify({ "action": "drillup", "drilledSeries": this._selectedTagInfo, "olapReport": this.getOlapReport(), "customObject": serializedCustomObject }), this.renderControlSuccess);
                    }
                    else {
                        if (!typeof (oclientProxy) != "undefined")
                            this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.drillDown, JSON.stringify({ "action": "drillup", "drilledSeries": this._selectedTagInfo, "olapReport": this.getOlapReport() }), this.renderControlSuccess);
                        else
                            this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.drillDown, JSON.stringify({ "action": "drillup", "drilledSeries": this._selectedTagInfo, "olapReport": this.getOlapReport(), "clientReports": reports }), this.renderControlSuccess);
                    }
                }
            });
        },

        /**
        * This function is invoked to unwire the events registered for UI interaction.
        *
        * @private  
        */
        _unWireEvents: function () {
            $(document.body).unbind("click");
            this._off(this.element, "click", ".menuList");
        },

        /**
        * This function receives the controls update from service-end which would be utilized for rendering the widget.
        * @return jQuery
        * @example 
        * &lt;div id="OlapChart"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Chart
        * $('#OlapChart').ejOlapChart({
        *       url: "OlapChartService.svc",
        *		animation: true, type: ej.olap.OlapChart.ChartTypes.Column, 
        *                        commonSeriesOptions: { type: ej.olap.OlapChart.ChartTypes.Column, tooltip: { visible: true} },
        *                        size: { height: 460, width: 950 }, primaryXAxis: { title: { text: "Fiscal Year" }, labelRotation: 0 },
        *                        primaryYAxis: { title: { text: "Customer Count"} }, legend: { visible: true, rowCount: 2 },
        *                        load: "loadTheme"
        *   });
        * var chartObj = $("#OlapChart").data("ejOlapChart");
        * chartObj.renderControlSuccess({"OlapReport": this.getOlapReport(), "JsonRecords": this.getJSONRecords()});
        * // creating OLAP Chart after Ajax request
        * &lt;/script&gt;
        * @memberof ejOlapChart
        * @instance
        */
        renderControlSuccess: function (msg) {
            if (ochartProxy.model.progressMode == "progress")
                $("#" + ochartProxy._id + "progressText")[0].innerHTML = ochartProxy._getLocalizedLabels("MDXqueryExecutedSuccessfully") + "...";
            else if (typeof oclientWaitingPopup != 'undefined' && oclientWaitingPopup != null)
                if ($("#" + oclientProxy._id + "_maxView")[0])
                    $("#" + oclientProxy._id + "_maxView").ejWaitingPopup({ showOnInit: true });
                else
                    oclientWaitingPopup.show();
            try {
                if (ochartProxy.model.progressMode != "infinite") {
                    window.clearInterval(oChartTimer);
                    if (ochartProxy.model.progressMode == "progress")
                        $("#" + ochartProxy._id + "progressText")[0].innerHTML = ochartProxy._getLocalizedLabels("RenderingStarted") + "...";
                    ochartProxy._progressStatus(75, 98, 50);
                    window.setTimeout(function () { progressStatus() }, 400);
                }
                else window.setTimeout(function () { progressStatus() }, 1);

                function progressStatus() {
                    if (msg[0] != undefined) {
                        ochartProxy.setJsonRecords(msg[0].Value); ochartProxy.setOlapReport(msg[1].Value);
                        if (typeof (oclientProxy) != "undefined") {
                            oclientProxy.currentReport = msg[1].Value;
                            if (msg[2] != null && msg[2] != undefined && msg[2].Key == "ClientReports")
                                oclientProxy.reports = msg[2].Value;
                        }
                        if (msg[2] != null && msg[2] != undefined && !msg[2].Key == "ClientReports")
                            ochartProxy.model.customObject = msg[2].Value;
                    }
                    else if (msg.d != undefined) {
                        ochartProxy.setJsonRecords(msg.d[0].Value); ochartProxy.setOlapReport(msg.d[1].Value);
                        if (typeof (oclientProxy) != "undefined") {
                            oclientProxy.currentReport = msg.d[1].Value;
                            if (msg.d[2] != null && msg.d[2] != undefined && msg.d[2].Key == "ClientReports")
                                oclientProxy.reports = msg.d[2].Value;
                        }
                        if (msg.d[2] != null && msg.d[2] != undefined && !msg.d[2].Key == "ClientReports")
                            ochartProxy.model.customObject = msg.d[2].Value;
                    }
                    else {
                        ochartProxy.setJsonRecords(msg.JsonRecords); ochartProxy.setOlapReport(msg.OlapReport);
                        if (msg.customObject != null && msg.customObject != null)
                            ochartProxy.model.customObject = msg.customObject;
                        if (typeof (oclientProxy) != "undefined") {
                            if (typeof (oclientProxy.currentReport) != "undefined")
                                oclientProxy.currentReport = msg.OlapReport;
                            if (typeof (oclientProxy.reports) != "undefined")
                                oclientProxy.reports = msg.reports;
                        }
                    }
                    if (ochartProxy.model.afterServiceInvoke != null) {
                        var eventArgs;
                        if (ochartProxy._drillAction != "")
                            eventArgs = { action: ochartProxy._drillAction, element: ochartProxy.element, customObject: ochartProxy.model.customObject };
                        else
                            eventArgs = { action: ochartProxy._currentAction, element: ochartProxy.element, customObject: ochartProxy.model.customObject };
                        ochartProxy._trigger("afterServiceInvoke", eventArgs);
                    }
                    var htmlTag = ej.buildTag("div#" + ochartProxy._id + "Container")[0].outerHTML;
                    ochartProxy.element.html(htmlTag);
                    ochartProxy.renderChartFromJSON(ochartProxy.getJsonRecords());
                    if (ochartProxy.model.progressMode != "infinite") {
                        ochartProxy._progressStatus(100, 101, 50);
                        if (ochartProxy.model.progressMode == "progress")
                            $("#" + ochartProxy._id + "progressText")[0].innerHTML = ochartProxy._getLocalizedLabels("RenderingSucceeded") + "...";
                    }
                    ochartProxy._unWireEvents();
                    ochartProxy._wireEvents();
                    if (ochartProxy._drillAction != "") {
                        ochartProxy.model.currentReport = ochartProxy.getOlapReport();
                        ochartProxy._trigger("drillSuccess", ochartProxy.element);
                    }
                    if (ochartProxy.model.progressMode != "infinite" && (ochartProxy._JSONRecords == null || ochartProxy._JSONRecords.chartLables.length == 0 || ochartProxy._JSONRecords.points_Y.length == 0)) {
                        $("#" + ochartProxy._id + "progressContainer").hide();
                    }
                    else if (typeof oclientWaitingPopup != 'undefined' && oclientWaitingPopup != null) {
                        if ($("#" + oclientProxy._id + "_maxView")[0]) {
                            $("#" + oclientProxy._id + "_maxView").ejWaitingPopup({ showOnInit: false });
                            oclientWaitingPopup.hide();
                        }
                        else if (typeof oclientProxy.ogridObj != "undefined") {
                            if (oclientProxy && (oclientProxy.ogridObj._drillAction && !oclientProxy.ogridObj._startDrilldown) || oclientProxy.ochartObj._drillAction && !oclientProxy.ochartObj._startDrilldown)
                                oclientWaitingPopup.hide();
                            else if (oclientProxy && oclientProxy.ogridObj._drillAction == "" && oclientProxy.ochartObj._drillAction == "" && !oclientProxy.ogridObj._startDrilldown && !oclientProxy.ochartObj._startDrilldown)
                                oclientWaitingPopup.hide();
                            else if (oclientProxy.ochartObj._startDrilldown && !oclientProxy.ogridObj._startDrilldown && !$("#" + oclientProxy._id + "_maxView")[0])
                                oclientWaitingPopup.hide();
                            else if (!oclientProxy.ochartObj._startDrilldown && !oclientProxy.ogridObj._startDrilldown && oclientProxy.ochartObj._drillAction == "" && oclientProxy.ogridObj._drillAction == "")
                                oclientWaitingPopup.hide();
                        }
                        if (oclientProxy.model.displaySettings.mode == "chartonly")
                            oclientWaitingPopup.hide();
                    }
                    else
                        ochartWaitingPopup.hide();
                    if (typeof oclientProxy != 'undefined')
                        oclientProxy.ochartObj._startDrilldown = false;
                }
            }
            catch (err) {
                if (ochartProxy.model.progressMode != "infinite") {
                    if (ochartProxy.model.progressMode == "progress")
                        $("#" + ochartProxy._id + "progressText")[0].innerHTML = ochartProxy._getLocalizedLabels("RenderingFailed") + "!!!";
                    window.clearInterval(oChartTimer);
                    ochartProgressBar.setModel({ value: 70, text: " Failed" });
                }
            }
            var eventArgs = { "action": this._currentAction, "customObject": this.model.customObject, "element": this.element };
            this._trigger("renderSuccess", eventArgs);
        },

        /**
        * This function receives the JSON formatted datasource to render the OLAP Chart control.
        * @return jQuery
        * @example 
        * &lt;div id="OlapChart"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Chart
        * $('#OlapChart').ejOlapChart({
        *       url: "OlapChartService.svc",
        *		animation: true, type: ej.olap.OlapChart.ChartTypes.Column, 
        *                        commonSeriesOptions: { type: ej.olap.OlapChart.ChartTypes.Column, tooltip: { visible: true} },
        *                        size: { height: 460, width: 950 }, primaryXAxis: { title: { text: "Fiscal Year" }, labelRotation: 0 },
        *                        primaryYAxis: { title: { text: "Customer Count"} }, legend: { visible: true, rowCount: 2 },
        *                        load: "loadTheme"
        *   });
        * var chartObj = $("#OlapChart").data("ejOlapChart");
        * chartObj.renderControlFromJSON(this.getJSONRecords());
        * // render the OLAP Chart from JSON formatted data.
        * &lt;/script&gt;
        * @memberof ejOlapChart
        * @instance
        */
        renderChartFromJSON: function (jsonData) {
            window.clearInterval(oChartTimer);
            if (jsonData != null && jsonData.chartLables.length > 0 && jsonData.points_Y.length > 0) {
                var chartSeries = new Array(); var seriesPoints = new Array(); var XValues = jsonData.chartLables; var tempArray = new Array();
                var YValues = new Array(); var pointsCount = 0; var count = 0; var seriesName = new Array(); var points;

                jQuery.each(jsonData.chartLables, function (index, value) {
                    var YPoints = new Array();
                    for (var i = 0; i < jsonData.points_Y[index].length; i++) {
                        points = { "xValues": jsonData.chartLables[index], "yValues": (jsonData.points_Y[index])[i] };
                        YPoints.push(points);
                    }
                    seriesPoints.push(YPoints);
                });

                jQuery.each(jsonData.seriesNames, function (index, value) {
                    tempArray.push(new Array());
                });
                jQuery.each(jsonData.chartLables, function (index, value) {
                    for (var i = 0; i < seriesPoints[index].length; i++) {
                        tempArray[i].push((seriesPoints[index])[i]);
                    }
                });
                jQuery.each(jsonData.seriesNames, function (index, value) {
                    chartSeries[pointsCount] = { dataSource: tempArray[index], xName: "xValues", yName: ["yValues"], name: jsonData.seriesNames[pointsCount] };
                    pointsCount++;
                });
                if (jsonData.chartLables.length > 10 && this.model.zooming == "")
                    this.model.zooming = { enable: true, type: 'x,y', enableMouseWheel: true };
                else if (jsonData.chartLables.length < 10 && this._initZooming == "")
                    this.model.zooming = this._initZooming;
                if (jQuery.inArray(this.seriesType(), ["line", "spline", "area", "splinearea", "stepline", "steparea", "stackingarea"]) > -1 && !this.model.commonSeriesOptions.marker.visible)
                    this.model.commonSeriesOptions.marker = {
                        shape: ej.olap.OlapChart.SymbolShapes.Circle,
                        size: { height: 12, width: 12 },
                        visible: true,
                        connectorLine: { height: 30, type: "line" },
                        border: { width: 3, color: 'white' }
                    };
                else if ((this.seriesType() == "pie" || this.seriesType() == "pyramid")) {
                    this.model.commonSeriesOptions.marker = {
                        dataLabel: {
                            visible: true,
                            font: { color: 'white', size: '15px', fontWeight: 'lighter' }
                        }
                    };
                }
                else if (jQuery.inArray(this.seriesType(), ["column", "stackingcolumn", "bar", "stackingcolumn"]) > -1 && this.model.commonSeriesOptions.marker) {
                    if (this.model.commonSeriesOptions.marker.dataLabel)
                        this.model.commonSeriesOptions.marker.dataLabel.visible = false;
                    this.model.commonSeriesOptions.marker.visible = false;
                }
                if (this.model.crosshair.visible) {
                    this.model.commonSeriesOptions.tooltip.format = "#point.x# : #point.y#";
                }
                else
                    this.model.commonSeriesOptions.tooltip.format = (this._getLocalizedLabels("Measure")) + " : " + jsonData.measureNames + " <br/>" + (this._getLocalizedLabels("Row")) + " : #series.name# <br/>" + (this._getLocalizedLabels("Column")) + " : #point.x# <br/>" + (this._getLocalizedLabels("Value")) + " : #point.y#";
                if (this.model.progressMode != "infinite") {
                    ochartProxy._progressStatus(99, 100 + ":100%", 70);
                    window.setTimeout(function () { progressStatus() }, 300);
                }
                else
                    window.setTimeout(function () { progressStatus() }, 1);
                function progressStatus() {
                    $("#" + ochartProxy._id + "Container").ejChart(
                            {
                                border: ochartProxy.model.border,
                                chartArea: ochartProxy.model.chartArea,
                                primaryXAxis: ochartProxy.model.primaryXAxis,
                                primaryYAxis: ochartProxy.model.primaryYAxis,
                                secondaryX: ochartProxy.model.secondaryX,
                                secondaryY: ochartProxy.model.secondaryY,
                                striplineDefault: ochartProxy.model.striplineDefault,
                                title: { text: ochartProxy.titleText(),
                                    textAlignment: ochartProxy.model.title.textAlignment,
                                    font: {
                                        color: ochartProxy.model.title.color,
                                        fontFamily: ochartProxy.model.title.fontFamily,
                                        fontWeight: ochartProxy.model.title.fontWeight,
                                        opacity: ochartProxy.model.title.opacity,
                                        size: ochartProxy.model.title.size,
                                        fontStyle: ochartProxy.model.title.fontStyle
                                    }
                                },
                                lineCap: ochartProxy.model.lineCap,
                                lineJoin: ochartProxy.model.lineJoin,
                                legendAlignment: ochartProxy.model.legendAlignment,
                                legendPosition: ochartProxy.model.legendPosition,
                                legend: ochartProxy.model.legend,
                                animation: ochartProxy.model.animation,
                                crosshair: ochartProxy.model.crosshair,
                                commonSeriesOptions: {
                                    doughnutCoefficient: ochartProxy.model.commonSeriesOptions.doughnutCoefficient,
                                    explodeOffset: ochartProxy.model.commonSeriesOptions.explodeOffset,
                                    pyramidMode: ochartProxy.model.commonSeriesOptions.pyramidMode,
                                    gapRatio: ochartProxy.model.commonSeriesOptions.gapRatio,
                                    pieCoefficient: ochartProxy.model.commonSeriesOptions.pieCoefficient,
                                    doughnutSize: ochartProxy.model.commonSeriesOptions.doughnutSize,
                                    startAngle: ochartProxy.model.commonSeriesOptions.startAngle,
                                    xAxisName: ochartProxy.model.commonSeriesOptions.xAxisName,
                                    yAxisName: ochartProxy.model.commonSeriesOptions.yAxisName,
                                    explodeAll: ochartProxy.model.commonSeriesOptions.explodeAll,
                                    explodeIndex: ochartProxy.model.commonSeriesOptions.explodeIndex,
                                    tooltipOptions: ochartProxy.model.commonSeriesOptions.tooltipOptions,
                                    marker: ochartProxy.model.commonSeriesOptions.marker || ochartProxy.model.marker,
                                    font: ochartProxy.model.commonSeriesOptions.font,
                                    type: ochartProxy.seriesType(),
                                    enableAnimation:ochartProxy.model.commonSeriesOptions.enableAnimation,
                                    style: ochartProxy.model.commonSeriesOptions.style,
                                    explode: ochartProxy.model.commonSeriesOptions.explode,
                                    labelPosition: ochartProxy.model.commonSeriesOptions.labelPosition,
                                    tooltip: ochartProxy.model.commonSeriesOptions.tooltip
                                },
                                seriesStyle: ochartProxy.model.seriesStyle,
                                pointStyle: ochartProxy.model.pointStyle,
                                textStyle: ochartProxy.model.textStyle,
                                initSeriesRender: ochartProxy.model.initSeriesRender,
                                theme: ochartProxy.model.theme,
                                canResize: ochartProxy.model.canResize,
                                zooming: ochartProxy.model.zooming,
                                margin: ochartProxy.model.margin,
                                elementSpacing: ochartProxy.model.elementSpacing,
                                seriesColors: ochartProxy.model.seriesColors,
                                seriesBorderColors: ochartProxy.model.seriesBorderColors,
                                pointColors: ochartProxy.model.pointColors,
                                pointBorderColors: ochartProxy.model.pointBorderColors,
                                series: chartSeries,
                                size: ochartProxy.model.size,
                                //Events
                                load: ochartProxy.model.load,
                                axesRangeCalculate: ochartProxy.model.axesRangeCalculate,
                                axesTitleRendering: ochartProxy.model.axesTitleRendering,
                                chartAreaBoundsCalculate: ochartProxy.model.chartAreaBoundsCalculate,
                                legendItemRendering: ochartProxy.model.legendItemRendering,
                                lengendBoundsCalculate: ochartProxy.model.lengendBoundsCalculate,
                                preRender: ochartProxy.model.preRender,
                                seriesRendering: ochartProxy.model.seriesRendering,
                                symbolRendering: ochartProxy.model.symbolRendering,
                                titleRendering: ochartProxy.model.titleRendering,
                                axesLabelsInitialize: ochartProxy.model.axesLabelsInitialize,
                                pointRegionMouseMove: ochartProxy.model.pointRegionMouseMove,
                                legendItemClick: ochartProxy.model.legendItemClick,
                                legendItemMouseMove: ochartProxy.model.legendItemMouseMove,
                                displayTextRendering: ochartProxy.model.displayTextRendering,
                                toolTipInitialize: ochartProxy.model.toolTipInitialize,
                                trackAxisToolTip: ochartProxy.model.trackAxisToolTip,
                                trackToolTip: ochartProxy.model.trackToolTip,
                                animationComplete: ochartProxy.model.animationComplete,
                                destroy: ochartProxy.model.destroy,
                                create: ochartProxy.model.create,
                                axesLabelRendering: ej.proxy(ochartProxy._onLabelRenders, ochartProxy),
                                pointRegionClick: ej.proxy(ochartProxy._onSeriesClick, ochartProxy)
                            });
                    $("#" + ochartProxy._id + "progressContainer").hide();
                }
                ochartProxy._labelCurrentTags.splice(0, ochartProxy._labelCurrentTags.length);
                jQuery.each(jsonData.labelTags, function (index, value) {
                    var currentTag = new Object();
                    var splitData = value.split("::");
                    currentTag = { "name": splitData[2], "state": splitData[splitData.length - 1], "tag": value };
                    ochartProxy._labelCurrentTags.push(currentTag);
                });
            }
            if (ochartWaitingPopup != null && ochartProxy.model.progressMode == "infinite")
                ochartWaitingPopup.hide();
            else
                $("#" + ochartProxy._id + "progressContainer").hide();
        },

        /**
        * This function would fetch the label text which could be seen beneath each series.
        *
        * @private  
        */
        _onLabelRenders: function (args) {
            ochartProxy._trigger("axesLabelRendering", args);
            if ((args.data.axis.orientation.toLowerCase() == "horizontal" && args.data.label.Text != undefined) || ((ochartProxy.seriesType() == "bar" || ochartProxy.seriesType() == "stackingbar") && args.data.axis.orientation.toLowerCase() == "vertical" && args.data.label.Text != undefined)) {
                var splitName = args.data.label.Text.toString().split("~~");
                if (ochartProxy._tagCollection.length == 0)
                    args.data.label.Text = splitName[splitName.length - 1];
                else if (ochartProxy._drillAction == "drilldown" && splitName.indexOf(ochartProxy._selectedItem) + 1 < splitName.length)
                    args.data.label.Text = splitName[splitName.indexOf(ochartProxy._selectedItem) + 1];
                else if (ochartProxy._drillAction == "drilldown" && splitName.indexOf(ochartProxy._selectedItem) + 1 >= splitName.length)
                    args.data.label.Text = splitName[splitName.indexOf(ochartProxy._selectedItem)];
                else if (splitName.length == 1)
                    args.data.label.Text = splitName[0];
                else if (ochartProxy._drillAction == "drillup")
                    args.data.label.Text = splitName[ochartProxy._selectedIndex];
                else
                    args.data.label.Text = splitName[splitName.length - 1];
            }
        },

        /**
        * To get the localized labels.
        * @private
        */
        //get localized text
        _getLocalizedLabels: function (property) {

            return ej.olap.OlapChart.locale[this.locale()][property] === undefined ? ej.olap.OlapChart.locale["en-US"][property] : ej.olap.OlapChart.locale[this.locale()][property];
        },

        /**
        * This function is used to create progress bar containing status text and percentage.
        *
        * @private  
        */
        _createProgressBar: function () {
            var progressContainer = ej.buildTag("div#" + this._id + "progressContainer.progressContainer", "", { top: typeof (oclientProxy) != "undefined" ? ((oclientProxy.model.displaySettings.controlPlacement == "tab" || oclientProxy.model.displaySettings.mode != "chartAndGrid") ? oclientProxy.progressPos.top + 300 : (oclientProxy.model.displaySettings.defaultView == "chart" ? oclientProxy.progressPos.top + 200 : oclientProxy.progressPos.top + 500)) : ($("#" + this._id).position().top + ($("#" + this._id).height() / 2) - 35), left: typeof (oclientProxy) != "undefined" ? oclientProxy.progressPos.left + 550 : ($("#" + this._id).position().left + ($("#" + this._id).width() / 3) - 50), zIndex: 999 })[0].outerHTML;
            var progressBar = ej.buildTag("div#" + this._id + "progressBar.progressBar", "")[0].outerHTML;
            var blockControl = ej.buildTag("div#" + this._id + "blockDiv.blockDiv", "", { width: typeof (oclientProxy) != "undefined" ? ($("#" + oclientProxy._id).width()) : $("#" + this._id).width(), display: "block", opacity: "0.3", backgroundColor: "#E9E9E9", height: typeof (oclientProxy) != "undefined" ? ($("#" + oclientProxy._id).height()) : $("#" + this._id).height(), position: 'fixed', top: typeof (oclientProxy) != "undefined" ? oclientProxy.progressPos.top : ($("#" + this._id).position().top), left: typeof (oclientProxy) != "undefined" ? oclientProxy.progressPos.left : ($("#" + this._id).position().left) })[0].outerHTML;
            $("#" + ochartProxy._id).after(progressContainer);
            if (ochartProxy.model.progressMode == "normal") {
                $("#" + this._id + "progressContainer").css({ height: 0, width: 0 });
                $("#" + this._id + "progressContainer").removeClass(".progressContainer");
                $("#" + ochartProxy._id + "progressContainer").append(progressBar).append(blockControl);
            }
            else {
                var progressText = ej.buildTag("span#" + this._id + "progressText.progressText", "OlapChart initial loading...")[0].outerHTML;
                $("#" + ochartProxy._id + "progressContainer").append(progressBar).append(progressText).append(blockControl);
            }
            $("#" + ochartProxy._id + "progressBar").ejProgressBar({ value: 0, text: 0 + " %", complete: "progressbarCompleted" });
            ochartProgressBar = $("#" + ochartProxy._id + "progressBar").data("ejProgressBar");
        },

        /**
        * This function is used to update the progress status.
        *
        * @private  
        */
        _progressStatus: function (current_Status, completion_Status, progress_Speed) {
            window.clearInterval(oChartTimer);
            if (jQuery.type(completion_Status) === "string") {
                var progressText = completion_Status.split(':');
                if (progressText != undefined) completion_Status = parseInt(progressText[0]);
            }
            ochartProgressBar.setModel({ value: current_Status, text: current_Status + " %" });
            $("#" + ochartProxy._id + "progressContainer").show();
            oChartTimer = window.setInterval(function () {
                ochartProgressBar.setModel({ value: current_Status, text: current_Status + " %" });
                current_Status++;
                if (current_Status >= completion_Status) {
                    window.clearInterval(oChartTimer);
                    if (progressText != undefined)
                        ochartProgressBar.setModel({ value: 100, text: progressText[1] });
                };
            }, progress_Speed);
        },

        /**
        * This function would be raised while clicking the series.
        *
        * @private  
        */
        _onSeriesClick: function (sender) {
            ochartProxy = this; var tempLabel; var selectedLabel; var pointIndex;
            var selectedTags = new Array(); var menuList = new Array();
            var chartOffset = this.element.position();
            if (sender.data.region != null && sender.data.region != undefined) {
                selectedLabel = sender.model.primaryXAxis.labels[sender.data.region.Region.PointIndex];
                pointIndex = sender.data.region.Region.PointIndex;
            }
            else if (sender.data.point.x != null && sender.data.point.x != undefined && sender.data.point.x != "") {
                selectedLabel = sender.data.series.xAxis.labels[sender.data.point.X];
                pointIndex = sender.data.point.X;
            }

            if ($($("#" + ochartProxy._id + "Container_vml_XAxisLabels_0")[0]).children()[pointIndex] != undefined)
                tempLabel = $($("#" + ochartProxy._id + "Container_vml_XAxisLabels_0")[0]).children()[pointIndex].innerHTML;
            else if ($("#" + ochartProxy._id + "Container_svg_XAxisLabels_0").children()[pointIndex])
                tempLabel = $("#" + ochartProxy._id + "Container_svg_XAxisLabels_0").children()[pointIndex].textContent;
            else if (this.seriesType() == "bar" || this.seriesType() == "stackingbar") {
                if ($($("#" + ochartProxy._id + "Container_vml_YAxisLabels_0")[0]).children()[pointIndex] != undefined)
                    tempLabel = $($("#" + ochartProxy._id + "Container_vml_YAxisLabels_0")[0]).children()[pointIndex].innerHTML;
                else if ($("#" + ochartProxy._id + "Container_svg_YAxisLabels_0").children()[pointIndex])
                    tempLabel = $("#" + ochartProxy._id + "Container_svg_YAxisLabels_0").children()[pointIndex].textContent;
                else {
                    var temp = sender.model.primaryXAxis.labels[pointIndex].split("~~");
                    tempLabel = temp[temp.indexOf(ochartProxy._selectedMenuItem) + 1];
                }
            }
            else {
                var temp = sender.model.primaryXAxis.labels[pointIndex].split("~~");
                tempLabel = temp[temp.indexOf(ochartProxy._selectedMenuItem) + 1];
            }

            if (tempLabel) {
                $("#" + ochartProxy._id).find("#" + ochartProxy._id + "ExpandMenu, .expandMenu, .e-dialog").remove();
                var splitLabel = selectedLabel.split("~~");

                jQuery.each(splitLabel, function (index, value) {
                    jQuery.each(ochartProxy._labelCurrentTags, function (key, val) {
                        if ($.trim(value) == val.name) {
                            selectedTags.push(val);
                            return false;
                        }
                    });
                });

                jQuery.each(selectedTags, function (index, value) {
                    if (value.state > 1 && ochartProxy._tagCollection.length == 0)
                        menuList.push($(ej.buildTag("li.menuList", (ochartProxy._getLocalizedLabels("Expand")) + " - " + value.name)[0]).attr("role", "presentation")[0].outerHTML);
                    else if (value.state > 1 && ochartProxy._tagCollection.length > 0 && value.name == tempLabel) {
                        menuList.push($(ej.buildTag("li.menuList", (ochartProxy._getLocalizedLabels("Expand")) + " - " + value.name)[0]).attr("role", "presentation")[0].outerHTML);
                    }
                });
                if (ochartProxy._tagCollection.length > 0) {
                    jQuery.each(ochartProxy._tagCollection, function (index, value) {
                        for (var i = 0; i < menuList.length; i++) {
                            if ($.trim(menuList[i].split('-')[1].replace("</li>", "")).replace("</LI>", "") == value.name)
                                menuList.splice(i, 1);
                        }
                        menuList.push($(ej.buildTag("li.menuList", (ochartProxy._getLocalizedLabels("Collapse")) + " - " + value.name)[0]).attr("role", "presentation")[0].outerHTML);
                    });
                }
                else if (!ochartProxy._JSONRecords.addInfo.namedsetEnabled) {
                    jQuery.each(selectedTags, function (index, value) {
                        if (value.state == 1) {
                            menuList.push($(ej.buildTag("li.menuList", ochartProxy._getLocalizedLabels("Collapse") + " - " + value.name)[0]).attr("role", "presentation")[0].outerHTML);
                            ochartProxy._tagCollection.push(value);
                        }
                    });
                }
                menuList.push($(ej.buildTag("li.menuList", ochartProxy._getLocalizedLabels("Exit"))[0]).attr("role", "presentation")[0].outerHTML);
                var expandMenu = $(ej.buildTag("div#" + ochartProxy._id + "ExpandMenu.expandMenu", menuList)[0]).attr("role", "presentation")[0].outerHTML;
                $(expandMenu).ejDialog({ width: "auto", content: "#" + ochartProxy._id, enableResize: false });
                $("#" + ochartProxy._id + "ExpandMenu_wrapper").appendTo(this.element).css({ "left": sender.data.location.x + 8 + chartOffset.left, "top": sender.data.location.y + 8 + chartOffset.top });
                this.element.find(".e-titlebar, .e-header").remove();
            }
            ochartProxy._trigger("pointRegionClick", sender);
        },

        /**
        * Perform an asynchronous HTTP (Ajax) request.
        * @return jQuery
        * @example 
        * &lt;div id="OlapChart"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Chart
        * $('#OlapChart').ejOlapChart({
        *       url: "OlapChartService.svc",
        *		animation: true, type: ej.olap.OlapChart.ChartTypes.Column, 
        *                        commonSeriesOptions: { type: ej.olap.OlapChart.ChartTypes.Column, tooltip: { visible: true} },
        *                        size: { height: 460, width: 950 }, primaryXAxis: { title: { text: "Fiscal Year" }, labelRotation: 0 },
        *                        primaryYAxis: { title: { text: "Customer Count"} }, legend: { visible: true, rowCount: 2 },
        *                        load: "loadTheme"
        *   });
        * var chartObj = $("#OlapChart").data("ejOlapChart");
        * chartObj.doAjaxPost("POST", "/OlapChartService.svc/Initialize", {"key", "Hello World"}, "renderControlSuccess", null);
        * // initiate an Ajax request
        * &lt;/script&gt;
        * @memberof ejOlapChart
        * @instance
        */
        doAjaxPost: function (type, url, data, onSuccess) {
            $.ajax({
                type: type,
                url: url,
                data: data,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: $.proxy(onSuccess, this),
                complete: ej.proxy(function () {
                    var eventArgs = { "action": this._currentAction, "customObject": this.model.customObject, "element": this.element };
                    this._trigger("renderComplete", eventArgs);
                }, this),
                error: ej.proxy(function (msg, textStatus, errorThrown) {
                    if (this.model.progressMode != "infinite") {
                        if (this.model.progressMode == "progress")
                            $("#" + this._id + "progressText")[0].innerHTML = this._getLocalizedLabels("MDXqueryExecutionFailed") + "!!!";
                        window.clearInterval(oChartTimer);
                        ochartProgressBar.setModel({ value: 10, text: " Failed" });
                    }
                    else
                        ochartWaitingPopup.hide();
                    var eventArgs = { "action": this._currentAction, "customObject": this.model.customObject, "element": this.element, "Message": msg };
                    this._trigger("renderFailure", eventArgs);
                }, this)
            });
        }
    });

    //OLAP Chart Localization
    ej.olap.OlapChart.locale = {};
    //Default english localized values
    ej.olap.OlapChart.locale["en-US"] = {
        Measure: "Measure",
        Row: "Row",
        Column: "Column",
        Value: "Value",
        Expand: "Expand",
        Collapse: "Collapse",
        Exit: "Exit",
        MDXqueryExecutionFailed: "MDX query execution failed",
        PreparingAndExecutingMDXquery: "Preparing and executing MDX query",
        MDXqueryExecutedSuccessfully: "MDX query executed successfully",
        RenderingSucceeded: "Rendering Succeeded",
        RenderingStarted: "Rendering Started",
        RenderingFailed: "Rendering failed"
    };

    /**
    * Enum for Chart Types. Allows the user to select a appropriate chart type. 
    * @enum {String}
    * @global
    */
    ej.olap.OlapChart.ChartTypes = {
        Line: 'line', Spline: 'spline', Column: 'column', Area: 'area', SplineArea: 'splinearea', StepLine: 'stepline', StepArea: 'steparea', Pie: 'pie', Bar: 'bar', StackingArea: 'stackingarea', StackingColumn: 'stackingcolumn', StackingBar: 'stackingbar', Pyramid: 'pyramid'
    };

    /**
    * Enum for Progress Mode. Allows the user to select a appropriate progress indicator. 
    * @enum {String}
    * @global
    */
    ej.olap.OlapChart.ProgressMode = {
        Infinite: "infinite",
        Normal: "normal",
        Progress: "progress"
    };

    /**
    * Enum for Shapes. Allows the user to select a appropriate chart symbol shape. 
    * @enum {String}
    * @global
    */
    ej.olap.OlapChart.SymbolShapes = {
        None: "none",
        LeftArrow: "leftarrow",
        RightArrow: "rightarrow",
        Circle: "circle",
        Cross: "cross",
        HorizLine: "horizline",
        VertLine: "vertline",
        Diamond: "diamond",
        Rectangle: "rectangle",
        Triangle: "triangle",
        InvertedTriangle: "invertedtriangle",
        Hexagon: "hexagon",
        Pentagon: "pentagon",
        Star: "star",
        Ellipse: "ellipse",
        Wedge: "wedge",
        Trapezoid: "trapezoid",
        UpArrow: "uparrow",
        DownArrow: "downarrow",
        Image: "image"
    };

})(jQuery, Syncfusion);;