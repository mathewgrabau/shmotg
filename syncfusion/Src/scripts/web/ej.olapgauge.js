/*!
*  filename: ej.olapgauge.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html OLAP Gauge elements
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
    * @class ejOlapGauge
    * @requires jquery-1.10.2.min.js
    * @requires jquery.easing.1.3.min.js
    * @requires jquery.globalize.min.js
    * @requires ej.core.js
    * @requires ej.data.js
    * @requires ej.waitingpopup.js
    * @requires ej.circulargauge.js
    * @requires ej.olapgauge.js
    * @classdesc Custom Design for Html OLAP Gauge control.
    * @example 
    * &lt;div id="OlapGauge"&gt;&lt;/div&gt; <br> 
    * &lt;script&gt;
    * // Create OLAP Gauge
    * $("#OlapGauge").ejOlapGauge(...); 	
    * &lt;/script&gt;
    */
    ej.widget("ejOlapGauge", "ej.olap.OlapGauge", {

        //Root Css Class
        _rootCSS: "e-olapgauge",

        // Widget element will be automatically set in this
        element: null,

        // User-defined model will be automatically set in this
        model: null,

        validTags: ["div", "span"],

        defaults: $.extend({}, ej.datavisualization.CircularGauge.prototype.defaults, {
            /**		
            * Connects the service using the specified URL for any server updates.
            * @default ""
            * @type {string}
            * @example 
            * //To set url API value during initialization  
            * 	$("#OlapGauge").ejOlapGauge({  url: "/OlapGaugeService.svc"});					* 
            * @example 
            * //Get or set the url API, after initialization:<br>
            *	//Gets the url value  
            *	$("#OlapGauge").ejOlapGauge("option", "url");<br>			
            *	//Sets the url value 
            *	$("#OlapGauge").ejOlapGauge("option", "url",  "/OlapGaugeService" ); 
            * @memberof ejOlapGauge
            * @instance
            */
            url: "",
            /**		
            * Specify the CSS class to OLAP Gauge to achieve custom theme.
            * @default ""
            * @type {string}
            * @example 
            * // Set the CSS class during initialization. 			
            * 	$("#OlapGauge").ejOlapGauge({  cssClass : "gradient-lime" });			* 
            * @example 
            * //Get or set the CSS class after initialization:<br>
            *	// Gets the CSS class value.		
            *	$("#OlapGauge").ejOlapGauge("option", "cssClass");			
            *	// Sets the CSS class to OLAP Gauge
            *	$("#OlapGauge").ejOlapGauge("option", "cssClass",  "gradient-lime" );
            * @memberof ejOlapGauge
            * @instance
            */
            cssClass: "",
            /**		
            * Sets the number of rows in OLAP Gauges for its arrangement.
            * @default 0
            * @type {number}
            * @example 
            * //To set rowsCount API value during initialization  
            * 	$("#OlapGauge").ejOlapGauge({  rowsCount: 1});					* 
            * @example 
            * //Get or set the rowsCOunt API, after initialization:<br>
            *	//Gets the rowsCount value  
            *	$("#OlapGauge").ejOlapGauge("option", "rowsCount");<br>			
            *	//Sets the rowsCount value 
            *	$("#OlapGauge").ejOlapGauge("option", "rowsCount", 2); 
            * @memberof ejOlapGauge
            * @instance
            */
            rowsCount: 0,
            /**		
            * Sets the number of colunsCount in OLAP Gauges for its arrangement.
            * @default 0
            * @type {number}
            * @example 
            * //To set columnsCount API value during initialization  
            * 	$("#OlapGauge").ejOlapGauge({  columnsCount: 1});					* 
            * @example 
            * //Get or set the columnsCount API, after initialization:<br>
            *	//Gets the columnsCount value  
            *	$("#OlapGauge").ejOlapGauge("option", "columnsCount");<br>			
            *	//Sets the columnsCount value 
            *	$("#OlapGauge").ejOlapGauge("option", "columnsCount", 2 ); 
            * @memberof ejOlapGauge
            * @instance
            */
            columnsCount: 0,
            /**		
            * Enables/disables tooltip in OLAP Gauge.
            * @default false
            * @type {boolean}
            * @example 
            * //To set enableTooltip API value during initialization  
            * 	$("#OlapGauge").ejOlapGauge({  enableTooltip: true});					* 
            * @example 
            * //Get or set the enableTooltip API, after initialization:<br>
            *	//Gets the enableTooltip value  
            *	$("#OlapGauge").ejOlapGauge("option", "enableTooltip");<br>			
            *	//Sets the enableTooltip value 
            *	$("#OlapGauge").ejOlapGauge("option", "enableTooltip", false ); 
            * @memberof ejOlapGauge
            * @instance
            */
            enableTooltip: false,
            /**		
            * Enables/disables the header labels in OLAP Gauge.
            * @default true
            * @type {boolean}
            * @example 
            * //To set showHeaderLabel API value during initialization  
            * 	$("#OlapGauge").ejOlapGauge({  showHeaderLabel: false});					* 
            * @example 
            * //Get or set the showHeaderLabel API, after initialization:<br>
            *	//Gets the showHeaderLabel value  
            *	$("#OlapGauge").ejOlapGauge("option", "showHeaderLabel");<br>			
            *	//Sets the showHeaderLabel value 
            *	$("#OlapGauge").ejOlapGauge("option", "showHeaderLabel", true); 
            * @memberof ejOlapGauge
            * @instance
            */
            showHeaderLabel: true,
            /**		
            * Sets the scale values such as pointers, indicators, etc... for OLAP Gauge.
            * @default null
            * @type {object}
            * @example 
            * //To set scales API value during initialization  
            * 	$("#OlapGauge").ejOlapGauge({  scales: {showRanges: true, showIndicators: true}});					* 
            * @example 
            * //Get or set the scales API, after initialization:<br>
            *	//Gets the scales value  
            *	$("#OlapGauge").ejOlapGauge("option", "scales");<br>			
            *	//Sets the scales value 
            *	$("#OlapGauge").ejOlapGauge("option", "scales", {showRanges: true, showIndicators: true}); 
            * @memberof ejOlapGauge
            * @instance
            */
            scales: ej.datavisualization.CircularGauge.prototype._defaultScaleValues(),
            /**		
            * Custom object to pass additional information between client-end and service-end.
            * @default null
            * @type {object}
            * @example 
            * //To set customObject API value during initialization  
            * 	$("#OlapGauge").ejOlapGauge({  customObject: {"key":"Hello World"}});					* 
            * @example 
            * //Get or set the customObject API, after initialization:<br>
            *	//Gets the customObject value  
            *	$("#OlapGauge").ejOlapGauge("option", "customObject");<br>			
            *	//Sets the customObject value 
            *	$("#OlapGauge").ejOlapGauge("option", "customObject",  {"key":"Hi Syncfusion!"} ); 
            * @memberof ejOlapGauge
            * @instance
            */
            customObject: {},
            /**		
            * Sets the progress indicator type which arises on any UI operation.	See {@link progressMode}
            * @default ej.olap.OlapGauge.ProgressMode.Infinite
            * @type {enum}
            * @example 
            * //To set progressMode API value during initialization  
            * 	$("#OlapGauge").ejOlapGauge({  progressMode: ej.olap.OlapGauge.ProgressMode.Normal});					* 
            * @example 
            * //Get or set the progressMode API, after initialization:<br>
            *	//Gets the progressMode value  
            *	$("#OlapGauge").ejOlapGauge("option", "progressMode");<br>			
            *	//Sets the progressMode value 
            *	$("#OlapGauge").ejOlapGauge("option", "progressMode",  ej.olap.OlapGauge.ProgressMode.Progress ); 
            * @memberof ejOlapGauge
            * @instance
            */
            progressMode: "infinite",
            /**		
            * Sets the localized language for the control.
            * @default "en-US"
            * @type {string}
            * @example 
            * //To set localization API value during initialization  
            * 	$("#OlapGauge").ejOlapGauge({  locale: "fr-FR"});					* 
            * @example 
            * //Get or set the localization API, after initialization:<br>
            *	//Gets the localization value  
            *	$("#OlapGauge").ejOlapGauge("option", "locale");<br>			
            *	//Sets the localization value 
            *	$("#OlapGauge").ejOlapGauge("option", "locale",  "fr-FR" ); 
            * @memberof ejOlapGauge
            * @instance
            */
            locale: "en-US",
            /**		
            * Allows the user to set custom name for the methods at service-end invoked on AJAX post.
            * @default null
            * @type {object}
            * @example 
            * /To set serviceMethodSettings API value, to invoke the appropriate service method on UI operation.  
            * $("#OlapGauge").ejOlapGauge({  serviceMethodSettings: {initialize: "MyMethod"});
            * @example 
            * //Gets or sets the serviceMethodSettings API, to invoke the appropriate service method on UI operation:<br>
            * //Gets the serviceMethodSettings value  
            * $("#OlapGauge").ejOlapGauge("option", "serviceMethodSettings");<br>			
            * //Sets the serviceMethodSettings value 
            * $("#OlapGauge").ejOlapGauge("option", "serviceMethodSettings",  {initialize: "MyMethod"} ); 
            * @memberof ejOlapGauge
            * @instance
            */
            serviceMethodSettings: {
                /**		
                * Allows the user to set the custom name for the service method that’s responsible for initializing OLAP Guage.
                * @default "InitializeOlapGuage"
                * @type {string}
                * @example 
                * //To set initialize API value, to invoke the corresponding service method for OLAP Gauge initialization.
                *  $("#OlapGauge").ejOlapGauge({  serviceMethodSettings: {initialize: "InitializeOlapGuageMyMethod"});
                * @example 
                * //Gets or sets the initialize API, to invoke the corresponding service method for OLAP Gauge initialization:<br>
                * //Gets the initialize value  
                * $("#OlapGauge").ejOlapGauge("option", "serviceMethodSettings");<br>   
                * //Sets the initialize value 
                * $("#OlapGauge").ejOlapGauge("option", "serviceMethodSettings.initialize", "InitializeOlapGuageMyMethod" ); 
                * @alias ejOlapGauge#serviceMethodSettings->initialize
                * @instance
                */
                initialize: "InitializeOlapGauge"
            },
            /**     
            * Fires when OLAP Gauge control successfully reaches client script after any Ajax request.
            * @event
            * @name ejOlapGauge#renderSuccess 	
            * @param {Object} argument Event parameters from OLAP Gauge.   
            * @param {string}  argument.element returns the outer HTML of OLAP Gauge control.
            * @param {Object} argument.customObject returns the custom object bounded with the control.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Gauge model.
            * @param {string}  argument.type returns the name of the event.
            * @example 
            * //renderSuccess event for OLAP Gauge.
            * $("#OlapGauge").ejOlapGauge({
            *    renderSuccess: function (args) {}
            * });      
            * @memberof ejOlapGauge
            * @instance
            */
            renderSuccess: null,
            /**     
            * Fires when OLAP Gauge control completes all operations at client script after any Ajax request.
            * @event
            * @name ejOlapGauge#renderComplete	
            * @param {Object} argument Event parameters from OLAP Gauge.
            * @param {string}  argument.element returns the outer HTML of OLAP Gauge control.
            * @param {Object} argument.customObject returns the custom object bounded with the control.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Gauge model.
            * @param {string}  argument.type returns the name of the event.
            * @example 
            * //renderCompleteevent for OLAP Gauge
            * $("#OlapGauge").ejOlapGauge({
            *    renderComplete: function (args) {}
            * });      
            * @memberof ejOlapGauge
            * @instance
            */
            renderComplete: null,
            /**     
            * Fires when error occurs during Ajax request.
            * @event
            * @name ejOlapGauge#renderFailure 	
            * @param {Object} argument Event parameters from OLAP Gauge.
            * @param {string}  argument.element returns the outer HTML of OLAP Gauge control.
            * @param {Object} argument.customObject returns the custom object bounded with the control.
            * @param {Object} argument.message returns the error message with error code.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Gauge model.
            * @param {string}  argument.type returns the name of the event.
            * @param {object}  argument.responseJSON returns the JSON formatted response while error occurs.
            * @example 
            * //renderFailure event for OLAP Gauge
            * $("#OlapGauge").ejOlapGauge({
            *    renderFailure: function (args) {}
            * });      
            * @memberof ejOlapGauge
            * @instance
            */
            renderFailure: null,
            /**     
            * Fires before any Ajax request passed from OLAP Gauge to service methods.
            * @event
            * @name ejOlapGauge#beforeServiceInvoke 	
            * @param {Object} argument Event parameters from OLAP Gauge.
            * @param {string}  argument.action return the current action of OLAP Gauge control.			 
            * @param {object}  argument.customObject return the custom object bounds with OLAP Gauge control.
            * @param {string}  argument.element return the outer HTML of OLAP Gauge control.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Gauge model.
            * @param {string}  argument.type returns the name of the event.
            * @example 
            * //beforeServiceInvoke event for OLAP Gauge
            * $("#OlapGauge").ejOlapGauge({
            *    beforeServiceInvoke: function (args) {}
            * });      
            * @memberof ejOlapGauge
            * @instance
            */
            beforeServiceInvoke: null,
            /**     
            * Fires when it reaches client script after any Ajax request.
            * @event
            * @name ejOlapGauge#afterServiceInvoke 	
            * @param {Object} argument Event parameters from OLAP Gauge.
            * @param {string}  argument.action return the current action of OLAP Gauge control.			 
            * @param {object}  argument.customObject return the custom object bounds with OLAP Gauge control.
            * @param {string}  argument.element return the outer HTML of OLAP Gauge control.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Gauge model.
            * @param {string}  argument.type returns the name of the event.
            * @example 
            * //afterServiceInvoke event for OLAP Gauge
            * $("#OlapGauge").ejOlapGauge({
            *    afterServiceInvoke: function (args) {}
            * });      
            * @memberof ejOlapGauge
            * @instance
            */
            afterServiceInvoke: null,
            /**     
            * Fires when gauge started loading at client-side.
            * @event
            * @name ejOlapGauge#load 	
            * @param {Object} argument Event parameters from OLAP Gauge.  
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Gauge model.
            * @param {string}  argument.type returns the name of the event.			 
            * @example 
            * //load event for OLAP Gauge
            * $("#OlapGauge").ejOlapGauge({
            *    load: function (args) {}
            * });      
            * @memberof ejOlapGauge
            * @instance
            */
            load: null
        }),

        /**
        * Specify the data types for default properties 
        * @private
        */
        dataTypes: {
            serviceMethodSettings: "data",
            customObject: "data",
            scales: "data",
            progressMode: "enum"
        },

        observables: ["rowsCount", "columnsCount", "showHeaderLabel", "locale", "radius", "frameType"],
        rowsCount: ej.util.valueFunction("rowsCount"),
        columnsCount: ej.util.valueFunction("columnsCount"),
        showHeaderLabel: ej.util.valueFunction("showHeaderLabel"),
        locale: ej.util.valueFunction("locale"),
        radius: ej.util.valueFunction("radius"),
        frameType: ej.util.valueFunction("frameType"),

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
        getJSONRecords: function () {
            return this._JSONRecords;
        },

        /**
        * Sets the JSON formatted records for the control.
        *
        * @private 
        */
        //set the JSON formatted records
        setJSONRecords: function (value) {
            this._JSONRecords = $.parseJSON(value);
        },

        // constructor function
        /**
        * Initializes the variables and loads the widget. 
        *
        * @private
        */
        _init: function () {
            this.model = $.extend(ej.datavisualization.CircularGauge.prototype.defaults, this.model);
            this._scalesInitialize();
            this._initPrivateProperties();
            this._load();
        },

        _scalesInitialize: function () {
            if (this.model.scales != null) {
                $.each(this.model.scales, ej.proxy(function (index, element) {
                var obj = ej.datavisualization.CircularGauge.prototype._defaultScaleValues();
                    $.extend(obj, element);
                    $.extend(element, obj);
                }, this));
            }
            else {
                this.model.scales = [ej.datavisualization.CircularGauge.prototype._defaultScaleValues()];
            }
        },

        /**
        * Destroy the OLAP Gauge widget
        * all events bound using this._on will be unbind automatically and bring the control to pre-init state.
        * @alias destroy
        * @return jQuery
        * @example 
        * &lt;div id="OlapGauge1"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Gauge
        * var gaugeObj = $("#OlapGauge").data("ejOlapGauge");
        * gaugeObj.destroy(); // destroy the OLAP Gauge
        * &lt;/script&gt;
        * @example 
        * &lt;div id="OlapGauge"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // enable the OLAP Gauge
        * $("#OlapGauge").ejOlapGauge("destroy");	
        * &lt;/script&gt;
        * @memberof ejOlapGauge
        * @instance
        */
        _destroy: function () {
            this._unWireEvents();
            this.element.empty().removeClass("e-olapgauge" + this.model.cssClass);
        },

        /**
        * To configure the private properties of OLAP Gauge		
        * @private
        */
        _initPrivateProperties: function () {
            this._id = this.element.attr("id");
            this._olapReport = "";
            this._JSONRecords = null;
            this._maximum = new Array();
            this._maxValue = 0;
            this._pointerValue_0 = 0;
            this._pointerValue_1 = 0;
            this._currentLayout = "";
            this._defaultArea = 0;
            this._defaultWidth = 0;
            this._gaugeObj = {};
            this._ogaugeWaitingPopup = null;
            this._ogaugeProgressBar = null;
            this._ogaugeProgressText = null;
            this._ogaugeTimer = null;
        },

        /**
        * This function is the point were loading/rendering of the OLAP Gauge widget is initiated.
        *
        * @private  
        */
        _load: function () {
            this.element.addClass(this.model.cssClass);
            if (this.model.progressMode == "infinite") {
                $("#" + this._id).ejWaitingPopup({ showOnInit: true });
                this._ogaugeWaitingPopup = $("#" + this._id).data("ejWaitingPopup");
            }
            else {
                $("#" + this._id + "progressContainer").remove();
                this._createProgressBar();
                this._progressStatus(0, 70, 140);
            }

            if (this.model.beforeServiceInvoke != null)
                this._trigger("beforeServiceInvoke", { element: this.element, customObject: this.model.customObject });
            var serializedCustomObject = JSON.stringify(this.model.customObject);
            if (this.model.progressMode == "progress")
                $("#" + this._id + "progressText")[0].innerHTML = this._getLocalizedLabels("PreparingAndExecutingMDXquery");
            if (this.model.customObject != null && this.model.customObject != undefined && this.model.customObject != {})
                this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.initialize, JSON.stringify({ "action": "initializeGauge", "customObject": serializedCustomObject }), this._renderControlSuccess);
            else
                this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.initialize, JSON.stringify({ "action": "initializeGauge" }), this._renderControlSuccess);
        },

        _setFirst: true,

        /**
        * To configure the properties at runtime using SetModel		
        * @private
        */
        _setModel: function (options) {
            for (var key in options) {
                switch (key) {
                    case "OlapReport": this.setOlapReport(options[key]); break;
                    case "JsonData": this.setOlapReport(options[key]); break;
                    case "RefreshOlapGauge": this.element.renderControlFromJSON(options[key]); break;
                    case "customObject": this.model.customObject = options[key]; break;
                    case "locale": this.locale(); break;
                    case "rowsCount": this.rowsCount(); break;
                    case "columnsCount": this.columnsCount(); break;
                    case "showHeaderLabel": this.showHeaderLabel(); break;
                    case "locale": this.locale(); break;
                    case "radius": this.radius(); break;
                    case "frameType": this.frameType(); break;
                    case "scales": break;
                }
            }
            if (this._gaugeObj["obj0"]) {
                this._renderControlSuccess({ "PivotRecords": JSON.stringify(this.getJSONRecords()), "OlapReport": this.getOlapReport() });
            }
        },

        /**
        * This function is invoked to wire the events for UI interaction.
        *
        * @private  
        */
        _wireEvents: function () {
            if (this.model.enableTooltip) {
                this.element.find("canvas").mouseenter(ej.proxy(function (evt) {
                    this._showTooltip(evt);
                }, this)).mouseout(ej.proxy(function () {
                    $(this._tooltip).fadeOut("slow");
                }, this)).mousemove(ej.proxy(function (evt) {
                    this._showTooltip(evt);
                    this._hideTooltip();
                }, this));
            }
        },

        /**
        * To get the localized labels.
        * @private
        */
        //get Localized text
        _getLocalizedLabels: function (property) {
            return ej.olap.OlapGauge.locale[this.locale()][property] === undefined ? ej.olap.OlapGauge.locale["en-US"][property] : ej.olap.OlapGauge.locale[this.locale()][property];
        },

        /**
        * This function is invoked to unwire the events registered for UI interaction.
        *
        * @private  
        */
        _unWireEvents: function () {

        },

        /**
        * This function is used to initialize and manage the tooltip in OLAP Gauges.
        *
        * @private  
        */
        _showTooltip: function (event) {
            $(this._tooltip).remove();
            var gaugeIndexValues = event.target.parentNode.id.split("_") == "" ? event.target.parentNode.parentNode.id.split("_") : event.target.parentNode.id.split("_");
            var gaugeIndex = gaugeIndexValues[gaugeIndexValues.length - 1];
            var goal = this._JSONRecords[gaugeIndex].GoalValue || 0;
            var value = this._JSONRecords[gaugeIndex].MeasureValue || this._JSONRecords[gaugeIndex].Value;
            var member = this._JSONRecords[gaugeIndex].MemberName || this._JSONRecords[gaugeIndex].Measure;
            var tooltipText = member + "<br/>" + this._getLocalizedLabels("RevenueGoal") + ": " + goal + "<br/>" + this._getLocalizedLabels("RevenueValue") + ": " + value;
            this._tooltip = ej.buildTag("div.e-olapgauge-tooltip", tooltipText);
            $(this._tooltip).appendTo('body');
            $(this._tooltip).addClass(".e-olapgauge-active");
            this._changeTooltipPos(event);
        },

        /**
        * This function is used to update the tooltip while mouse moves between OLAP Gauges.
        *
        * @private  
        */
        _changeTooltipPos: function (event) {
            var tooltipX = event.pageX - 8;
            var tooltipY = event.pageY + 8;
            $(this._tooltip).css({ top: tooltipY, left: tooltipX });
        },

        /**
        * 	This function is used to hide the tooltip while mouse leaves the OLAP Gauge.
        *
        * @private  
        */
        _hideTooltip: function () {
            window.setTimeout(ej.proxy(function () { $(this._tooltip).fadeOut(1500, "linear"); }, this), 3000);
        },

        /**
        * This function is used to create progress bar containing status text and percentage.
        *
        * @private  
        */
        _createProgressBar: function () {
            var progressContainer = ej.buildTag("div#" + this._id + "progressContainer.progressContainer", "", { top: ($("#" + this._id).position().top + ($("#" + this._id).height() / 2) - 30), left: ($("#" + this._id).position().left + ($("#" + this._id).width() / 3) - 50) })[0].outerHTML;
            var progressBar = ej.buildTag("div#" + this._id + "progressBar.progressBar", "")[0].outerHTML;
            var blockControl = ej.buildTag("div#" + this._id + "blockDiv.blockDiv", "", { width: $("#" + this._id).width(), display: "block", opacity: "0.3", backgroundColor: "#E9E9E9", height: $("#" + this._id).height(), position: 'fixed', top: ($("#" + this._id).position().top), left: ($("#" + this._id).position().left) })[0].outerHTML;
            $("#" + this._id).after(progressContainer);
            if (this.model.progressMode == "normal") {
                $("#" + this._id + "progressContainer").css({ width: 0, height: 0 });
                $("#" + this._id + "progressContainer").append(progressBar).append(blockControl);
            }
            else {
                var progressText = ej.buildTag("span#" + this._id + "progressText.progressText", "OlapGauge initial loading...")[0].outerHTML;
                $("#" + this._id + "progressContainer").append(progressBar).append(progressText).append(blockControl);
            }
            $("#" + this._id + "progressBar").ejProgressBar({ value: 0, text: 0 + " %", complete: "progressbarCompleted" });
            this._ogaugeProgressBar = $("#" + this._id + "progressBar").data("ejProgressBar");
            this._ogaugeProgressText = $("#" + this._id + "progressText");
        },

        /**
        * This function is used to update the progress status.
        *
        * @private  
        */
        _progressStatus: function (current_Status, completion_Status, progress_Speed) {
            if (jQuery.type(completion_Status) === "string") {
                var progressText = completion_Status.split(':');
                if (progressText != undefined) completion_Status = parseInt(progressText[0]);
            }
            this._ogaugeProgressBar.setModel({ value: current_Status, text: current_Status + " %" });
            $("#" + this._id + "progressContainer").show();
            $("#" + this._id + "blockDiv").position = $("#" + this._id).position();
            this._ogaugeTimer = window.setInterval(ej.proxy(function () {
                this._ogaugeProgressBar.setModel({ value: current_Status, text: current_Status + " %" });
                current_Status++;
                if (current_Status >= completion_Status) {
                    window.clearInterval(this._ogaugeTimer);
                    if (progressText != undefined)
                        this._ogaugeProgressBar.setModel({ value: 100, text: progressText[1] });

                };
            }, this), progress_Speed);
        },

        /**
        * This function receives the control's update from service-end which would be utilized for rendering the widget.
        *
        * @private  
        */
        _renderControlSuccess: function (msg) {
            if (this.model.progressMode != "infinite") {
                if (this.model.progressMode == "progress")
                    $("#" + this._id + "progressText")[0].innerHTML = this._getLocalizedLabels("MDXqueryExecutedSuccessfully") + "...";
                window.clearInterval(this._ogaugeTimer);
            }
            try {
                if (this.model.progressMode != "infinite") {
                    if (this.model.progressMode == "progress")
                        $("#" + this._id + "progressText")[0].innerHTML = this._getLocalizedLabels("RenderingStarted") + "...";
                    this._progressStatus(70, 100, 50);
                    window.setTimeout(ej.proxy(this.progressStatus(msg), this), 300);
                }
                else
                    window.setTimeout(ej.proxy(this.progressStatus(msg), this), 1);
            }
            catch (err) {
                if (this.model.progressMode != "infinite") {
                    if (this.model.progressMode == "progress")
                        $("#" + this._id + "progressText")[0].innerHTML = this._getLocalizedLabels("RenderingFailed") + "!!!";
                    window.clearInterval(this._ogaugeTimer);
                    this._ogaugeProgressBar.setModel({ value: 70, text: " Failed" });
                }
            }
        },

        /**
        * Perform an asynchronous HTTP (Ajax) request.
        * @return jQuery
        * @example 
        * &lt;div id="OlapGauge"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Gauge
        * $('#OlapGauge').ejOlapGauge({
        *       url: "OlapGaugeService.svc",
        *		enableTooltip: true,
        *		scales: [{
        *		pointers: [{
        *                            showBackNeedle: true,
        *                            backNeedleLength: 20,
        *                            length: 120,
        *                            width: 7
        *                        },
        *                {
        *                    type: "marker",
        *                    markerType: "diamond",
        *                    distanceFromScale: 5,
        *                    placement: "center",
        *                    backgroundColor: "#29A4D9",
        *                    length: 25,
        *                    width: 15
        *                }]
        *				}]
        *   });
        * var gaugeObj = $("#OlapGauge").data("ejOlapGauge");
        * gaugeObj.doAjaxPost("POST", "/OlapGaugeService.svc/Initialize", {"key", "Hello World"}, "renderControlSuccess", null);
        * // initiate an Ajax request
        * &lt;/script&gt;
        * @memberof ejOlapGauge
        * @instance
        */
        doAjaxPost: function (type, url, data, onSuccess, onComplete) {
            $.ajax({
                type: type,
                url: url,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: data,
                success: $.proxy(onSuccess, this),
                complete: ej.proxy(function () {
                    var eventArgs = { element: this.element, customObject: this.model.customObject };
                    this._trigger("renderComplete", eventArgs);
                }, this),
                error: ej.proxy(function (msg, textStatus, errorThrown) {
                    if (this.model.progressMode != "infinite") {
                        window.clearInterval(this._ogaugeTimer);
                        if (this.model.progressMode == "progress")
                            $("#" + this._id + "progressText")[0].innerHTML = this._getLocalizedLabels("MDXqueryExecutionFailed") + "!!!";
                        $("#" + this._ogaugeProgressBar._id).show();
                        this._ogaugeProgressBar.setModel({ value: 0, text: errorThrown });
                    }
                    else
                        this._ogaugeWaitingPopup.hide();
                    var eventArgs = { element: this.element, customObject: this.model.customObject, Message: msg };
                    this._trigger("renderFailure", eventArgs);
                }, this)
            });
        },

        /**
        * This function receives JSON data and prepares for rendering the widget after service request.
        * @return jQuery
        * @example 
        * &lt;div id="OlapGauge"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Gauge
        * $('#OlapGauge').ejOlapGauge({
        *       url: "OlapGaugeService.svc",
        *		enableTooltip: true,
        *		scales: [{
        *		pointers: [{
        *                            showBackNeedle: true,
        *                            backNeedleLength: 20,
        *                            length: 120,
        *                            width: 7
        *                        },
        *                {
        *                    type: "marker",
        *                    markerType: "diamond",
        *                    distanceFromScale: 5,
        *                    placement: "center",
        *                    backgroundColor: "#29A4D9",
        *                    length: 25,
        *                    width: 15
        *                }]
        *				}]
        *   });
        * var gaugeObj = $("#OlapGauge").data("ejOlapGauge");
        * gaugeObj.progressStatus({"OlapReport": this.getOlapReport(), "JsonRecords": this.getJSONRecords()});
        * // creating OLAP Gauge after Ajax request
        * &lt;/script&gt;
        * @memberof ejOlapGauge
        * @instance
        */
        progressStatus: function (msg) {
            var htmlTag = "", stausImage = "", trendImage = "", liTag = "", gaugeId = 0;
            if (msg[0] != undefined && msg.length > 0) {
                this.setJSONRecords(msg[0].Value);
                this.setOlapReport(msg[1].Value);
                if (msg[2] != null && msg[2] != undefined)
                    this.model.customObject = msg[2].Value;
            }
            else if (msg.d != undefined && msg.d.length > 0) {
                this.setJSONRecords(msg.d[0].Value);
                this.setOlapReport(msg.d[1].Value);
                if (msg.d[2] != null && msg.d[2] != undefined)
                    this.model.customObject = msg.d[2].Value;
            }
            else if (msg.PivotRecords && msg.OlapReport) {
                this.setJSONRecords(msg.PivotRecords);
                this.setOlapReport(msg.OlapReport);
                if (msg.customObject != null && msg.customObject != undefined)
                    this.model.customObject = msg.customObject;
            }

            if (this.model.afterServiceInvoke != null)
                this._trigger("afterServiceInvoke", { element: this.element, customObject: this.model.customObject });
            var ogaugeInfo = this.getJSONRecords();

            if (ogaugeInfo != null && ogaugeInfo.length > 0) {
                if (this.rowsCount() < 1 && this.columnsCount() < 1) {
                    this._currentLayout = "WrapPanel";
                    for (var k = 0; k < ogaugeInfo.length; k++) {
                        stausImage = ej.buildTag("img#stausIndicator_" + k + ".kpiiconvalue")[0].outerHTML;
                        trendImage = ej.buildTag("img#trendIndicator_" + k + ".kpiiconvalue")[0].outerHTML;
                        liTag += ej.buildTag("li", ej.buildTag("div#" + this._id + "_" + k, stausImage + trendImage)[0].outerHTML)[0].outerHTML;
                    }
                    htmlTag = ej.buildTag("ul.wrapLayout", liTag)[0].outerHTML;
                }
                else {
                    this._currentLayout = "Table";
                    if (this.columnsCount() == undefined || this.columnsCount() < 1)
                        this.columnsCount((ogaugeInfo.length / this.rowsCount()).toFixed());
                    if (this.rowsCount() == undefined || this.rowsCount() < 1)
                        this.rowsCount((ogaugeInfo.length / this.columnsCount()).toFixed());
                    htmlTag = "<table><tbody>";
                    for (var i = 0; i < this.rowsCount(); i++) {
                        htmlTag += "<tr>";
                        for (var j = 0; j < this.columnsCount(); j++) {
                            stausImage = ej.buildTag("img#stausIndicator_" + gaugeId + ".kpiiconvalue")[0].outerHTML;
                            trendImage = ej.buildTag("img#trendIndicator_" + gaugeId + ".kpiiconvalue")[0].outerHTML;
                            htmlTag += "<td>" + ej.buildTag("div#" + this._id + "_" + gaugeId, stausImage + trendImage)[0].outerHTML + "</td>";
                            gaugeId++;
                        }
                        htmlTag += "</tr>";
                    }
                    htmlTag += "</tbody></table>";
                }
                this.element.html(htmlTag);
                this.renderControlFromJSON(ogaugeInfo);
                this._defaultWidth = this.element.find("canvas").width();
                this._defaultArea = this.element.find("table").height() * this.element.find("table").width();
            }
            if (this.model.progressMode != "infinite") {
                if (this.model.progressMode == "normal")
                    $("#" + this._id + "progressContainer").delay(1500).fadeOut("slow");
                else if (this.model.progressMode == "progress") {
                    $("#" + this._id + "progressText")[0].innerHTML = this._getLocalizedLabels("RenderingSucceeded") + "...";
                    $("#" + this._id + "progressContainer").delay(2000).fadeOut("slow");
                }
            }
            else
                this._ogaugeWaitingPopup.hide();
            var eventArgs = { element: this.element, customObject: this.model.customObject };
            this._trigger("renderSuccess", eventArgs);
        },

        /**
        * This function receives the processed KPI value and factor to calculate the upper limit.
        *
        * @private  
        */
        _getCalculatedValue: function (value) {
            var stringValue = value.toString();
            var factor = 1; var len; var dividend;
            if (stringValue.indexOf('.') > -1)
                len = stringValue.split('.')[0].length;
            else
                len = stringValue.length;
            dividend = parseInt(stringValue);
            for (var i = 0; i < len; i++) {
                if (dividend > this._maxValue) {
                    dividend = dividend / 10;
                    factor = factor * 10;
                }
            }
            return factor;
        },

        /**
        * This function receives the processed KPI value and factor to calculate the upper limit.
        *
        * @private  
        */
        _findNearestUpperLimit: function (number, factor) {
            var convertedNumber = number.toString();
            var j = parseInt(convertedNumber);
            var k = j % factor;
            return j + (factor - k);
        },

        /**
        * This function receives the KPI goal and KPI values to calculate the factor.
        *
        * @private  
        */
        _setMaxScaleValue: function (goal, value, i) {
            var factor;
            if (value > goal) {
                factor = this._getCalculatedValue(value);
                this._maximum[i] = this._findNearestUpperLimit((value / factor), 10);
            }
            else {
                factor = this._getCalculatedValue(goal);
                this._maximum[i] = this._findNearestUpperLimit((((goal / factor) * 4) / 3), 10);
            }
            return factor;
        },

        /**
        * This function removes the KPI image tags in OLAP Gauge control.
        * @return jQuery
        * @example 
        * &lt;div id="OlapGauge"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Gauge
        * $('#OlapGauge').ejOlapGauge({
        *       url: "OlapGaugeService.svc",
        *		enableTooltip: true,
        *		scales: [{
        *		pointers: [{
        *                            showBackNeedle: true,
        *                            backNeedleLength: 20,
        *                            length: 120,
        *                            width: 7
        *                        },
        *                {
        *                    type: "marker",
        *                    markerType: "diamond",
        *                    distanceFromScale: 5,
        *                    placement: "center",
        *                    backgroundColor: "#29A4D9",
        *                    length: 25,
        *                    width: 15
        *                }]
        *				}]
        *   });
        * var gaugeObj = $("#OlapGauge").data("ejOlapGauge");
        * gaugeObj.removeImg();
        * // removes HTML image tags inside of OLAP Gauge.
        * &lt;/script&gt;
        * @memberof ejOlapGauge
        * @instance
        */
        removeImg: function () {
            this.element.find("img").remove();
        },

        /**
        * This function receives the JSON formatted datasource to render the OLAP Gauge control.
        * @return jQuery
        * @example 
        * &lt;div id="OlapGauge"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Gauge
        * $('#OlapGauge').ejOlapGauge({
        *       url: "OlapGaugeService.svc",
        *		enableTooltip: true,
        *		scales: [{
        *		pointers: [{
        *                            showBackNeedle: true,
        *                            backNeedleLength: 20,
        *                            length: 120,
        *                            width: 7
        *                        },
        *                {
        *                    type: "marker",
        *                    markerType: "diamond",
        *                    distanceFromScale: 5,
        *                    placement: "center",
        *                    backgroundColor: "#29A4D9",
        *                    length: 25,
        *                    width: 15
        *                }]
        *				}]
        *   });
        * var gaugeObj = $("#OlapGauge").data("ejOlapGauge");
        * gaugeObj.renderControlFromJSON(this.getJSONRecords());
        * // render the OLAP Gauge from JSON formatted data.
        * &lt;/script&gt;
        * @memberof ejOlapGauge
        * @instance
        */
        renderControlFromJSON: function (jsonObj) {
            //Calculating pointer value, danger and safer regions
            this._maxValue = 99, maxGaugeCount = 0;
            var pointerCapRadius = (this.radius() / 22);
            if (this._currentLayout == "Table" && (this.rowsCount() * this.columnsCount()) <= jsonObj.length)
                maxGaugeCount = this.rowsCount() * this.columnsCount();
            else if (this._currentLayout == "WrapPanel" || (this.rowsCount() * this.columnsCount()) > jsonObj.length)
                maxGaugeCount = jsonObj.length;
            for (var i = 0; i < maxGaugeCount; i++) {
                var goal = 0.0, value = 0.0, startValue = 0.0, endValue = 0.0, dValue = 0.0, factor = 0, mark = 0.0,
                percentageValue = 0.0, customLabel = "", imgDiv, extendRanges = new Array(), extendPointers = new Array(),
                extendLabels = new Array(), extendCustomLabels = new Array(), extendTicks = new Array(), extendIndicators = new Array(),
                extendScales = new Array(), statusClass = "", trendClass = "";

                if (jsonObj[i].MeasureValue != null && jsonObj[i].MeasureValue != undefined) {
                    value = parseFloat(jsonObj[i].MeasureValue) || 0;
                    goal = parseFloat(jsonObj[i].GoalValue) || 0;
                    customLabel = jsonObj[i].MemberName;
                }
                else {
                    value = parseFloat(jsonObj[i].Value);
                    goal = 0.0;
                    customLabel = jsonObj[i].Measure;
                    this.model.scales[0].showIndicators = false;
                }
                factor = this._setMaxScaleValue(goal, value, i);
                dValue = value;
                mark = goal / factor;
                percentageValue = (dValue / factor);
                this._pointerValue_0 = endValue + percentageValue;
                this._pointerValue_1 = mark + endValue;
                startValue = endValue;
                endValue = endValue + percentageValue;

                //Edting Model values
                if (jsonObj[i].StatusGraphic == "Traffic Signals") {
                    if (jsonObj[i].StatusValue == -1)
                        statusClass = "kpiredroad";
                    else if (jsonObj[i].StatusValue == 0)
                        statusClass = "kpiallcolor";
                    else if (jsonObj[i].StatusValue == 1)
                        statusClass = "kpigreenroad";
                }
                else {
                    if (jsonObj[i].StatusValue == -1)
                        statusClass = "kpidiamond";
                    else if (jsonObj[i].StatusValue == 0)
                        statusClass = "kpitriangle";
                    else if (jsonObj[i].StatusValue == 1)
                        statusClass = "kpicircle";
                }
                imgDiv = this.element.find("#stausIndicator_" + [i]).addClass(statusClass);
                if (imgDiv != null && imgDiv != undefined) {
                    var statusImage = $(imgDiv).css('background-image');
                    var statusIndicator = {
                        height: 15,
                        width: 15,
                        type: "image",
                        imageUrl: statusImage.split("(")[1].split(")")[0].replace('"', "").replace('"', ""),
                        position: { x: this.radius() - 20, y: 260 }
                    };
                }

                if (jsonObj[i].TrendGraphic != null && jsonObj[i].TrendGraphic != undefined && jsonObj[i].TrendGraphic != "" && jsonObj[i].TrendGraphic.toLowerCase() == "standard arrow") {
                    if (jsonObj[i].TrendValue == -1)
                        trendClass = "kpidownarrow";
                    else if (jsonObj[i].TrendValue == 0)
                        trendClass = "kpirightarrow";
                    else if (jsonObj[i].TrendValue == 1)
                        trendClass = "kpiuparrow";
                    imgDiv = this.element.find("#trendIndicator_" + [i]).toggleClass(trendClass);
                }
                if (!ej.isNullOrUndefined(imgDiv)) {
                    var trendImage = $(imgDiv).css('background-image');
                    var trendIndicator = {
                        height: 15,
                        width: 15,
                        type: "image",
                        imageUrl: trendImage.split("(")[1].split(")")[0].replace('"', "").replace('"', ""),
                        position: { x: this.radius(), y: 260 }
                    };
                }
                if (!ej.isNullOrUndefined(this.model.scales[0])) {
                    if (this.frameType() == "fullcircle") {
                        this.model.scales[0].startAngle = 122;
                        this.model.scales[0].sweepAngle = 296;
                    }
                    else if (this.frameType() == "halfcircle") {
                        this.model.scales[0].startAngle = 180;
                        this.model.scales[0].sweepAngle = 180;
                    }
                    this.model.scales[0].indicators = this.model.scales[0].showIndicators ? [statusIndicator, trendIndicator] : this.model.scales[0].indicators;
                    if (!ej.isNullOrUndefined(this.model.scales[0].pointers[0])) {
                        var newPointerCap = ej.datavisualization.CircularGauge.prototype._defaultScaleValues().pointerCap;
                        //this.model.scales[0].pointers[0] = $.extend({}, newPointer, this.model.scales[0].pointers[0]);
                        this.model.scales[0].pointers[0].value = this._pointerValue_0;
                        this.model.scales[0].pointers[0].pointerCap = newPointerCap;
                        this.model.scales[0].pointers[0].pointerCap.radius = pointerCapRadius;
                    }
                    if (!ej.isNullOrUndefined(this.model.scales[0].pointers[1])) {
                        this.model.scales[0].pointers[1].value = this._pointerValue_1;
                        this.model.scales[0].pointers[1].type = this.model.scales[0].pointers[1].type || "marker";
                        this.model.scales[0].pointers[1].markerType = this.model.scales[0].pointers[1].markerType || "diamond";
                        this.model.scales[0].pointers[1].placement = this.model.scales[0].pointers[1].placement || "center";
                    }
                    if (!ej.isNullOrUndefined(this.model.scales[0].ranges[0])) {
                        this.model.scales[0].ranges[0].startValue = startValue;
                        this.model.scales[0].ranges[0].endValue = mark;
                    }
                    if (!ej.isNullOrUndefined(this.model.scales[0].ranges[1])) {
                        this.model.scales[0].ranges[1].startValue = mark;
                        this.model.scales[0].ranges[1].endValue = this._maximum[i];
                    }
                    if (!ej.isNullOrUndefined(this.model.scales[0].customLabels[0]))
                        this.model.scales[0].customLabels[0].value = this.showHeaderLabel() ? "X " + factor : "";
                    if (!ej.isNullOrUndefined(this.model.scales[0].customLabels[1]))
                        this.model.scales[0].customLabels[1].value = this.showHeaderLabel() ? customLabel : "";
                    if (!ej.isNullOrUndefined(this.model.scales[0].customLabels[2]))
                        this.model.scales[0].customLabels[2].value = this.showHeaderLabel() ? this._getLocalizedLabels("RevenueFor") + " " + customLabel : "";

                    for (var j = 0; j < this.model.scales[0].ranges.length; j++)
                        extendRanges.push($.extend({}, ej.datavisualization.CircularGauge.prototype._defaultScaleValues().ranges[0], this.model.scales[0].ranges[j]));
                    for (var j = 0; j < this.model.scales[0].pointers.length; j++)
                        extendPointers.push($.extend({}, ej.datavisualization.CircularGauge.prototype._defaultScaleValues().pointers[0], this.model.scales[0].pointers[j]));
                    for (var j = 0; j < this.model.scales[0].labels.length; j++)
                        extendLabels.push($.extend({}, ej.datavisualization.CircularGauge.prototype._defaultScaleValues().labels[0], this.model.scales[0].labels[j]));
                    for (var j = 0; j < this.model.scales[0].labels.length; j++)
                        extendLabels.push($.extend({}, ej.datavisualization.CircularGauge.prototype._defaultScaleValues().labels[0], this.model.scales[0].labels[j]));
                    for (var j = 0; j < this.model.scales[0].customLabels.length; j++)
                        extendCustomLabels.push($.extend({}, ej.datavisualization.CircularGauge.prototype._defaultScaleValues().customLabels[0], this.model.scales[0].customLabels[j]));
                    for (var j = 0; j < this.model.scales[0].ticks.length; j++)
                        extendTicks.push($.extend({}, ej.datavisualization.CircularGauge.prototype._defaultScaleValues().ticks[0], this.model.scales[0].ticks[j]));
                    if (this.model.scales[0].indicators) {
                        for (var j = 0; j < this.model.scales[0].indicators.length; j++)
                            extendIndicators.push($.extend({}, ej.datavisualization.CircularGauge.prototype._defaultScaleValues().indicators[0], this.model.scales[0].indicators[j]));
                    }
                    newScale = {
                        pointerCap: {
                            radius: pointerCapRadius || this.model.scales[0].pointerCap.radius,
                            borderWidth: this.model.scales[0].pointerCap.borderWidth,
                            interiorGradient: this.model.scales[0].pointerCap.interiorGradient,
                            borderColor: this.model.scales[0].pointerCap.borderColor,
                            backgroundColor: this.model.scales[0].pointerCap.backgroundColor
                        },
                        border: {
                            color: this.model.scales[0].border.color,
                            width: this.model.scales[0].border.width
                        },
                        majorIntervalValue: this.model.scales[0].majorIntervalValue,
                        minorIntervalValue: this.model.scales[0].minorIntervalValue,
                        minimum: this.model.scales[0].minimum,
                        backgroundColor: this.model.scales[0].backgroundColor,
                        direction: this.model.scales[0].direction,
                        showPointers: this.model.scales[0].showPointers,
                        showTicks: this.model.scales[0].showTicks,
                        showLabels: this.model.scales[0].showLabels,
                        showIndicators: this.model.scales[0].showIndicators,
                        showRanges: this.model.scales[0].showRanges,
                        showScaleBar: this.model.scales[0].showScaleBar,
                        startAngle: this.model.scales[0].startAngle,
                        sweepAngle: this.model.scales[0].sweepAngle,
                        radius: this.model.scales[0].radius,
                        size: this.model.scales[0].size,
                        maximum: this.model.scales[0].maximum || this._maximum[i],
                        pointers: extendPointers,
                        ticks: extendTicks,
                        labels: extendLabels,
                        ranges: extendRanges,
                        customLabels: extendCustomLabels,
                        indicators: extendIndicators
                    };
                    for (var j = 0; j < this.model.scales.length; j++) {
                        if (j == 0)
                            extendScales.push($.extend({}, ej.datavisualization.CircularGauge.prototype._defaultScaleValues(), newScale));
                        else
                            extendScales.push($.extend({}, ej.datavisualization.CircularGauge.prototype._defaultScaleValues(), this.model.scales[j]));
                    }
                }
                //Creating Gauges
                $("#" + this._id + "_" + i).ejCircularGauge({
                    backgroundColor: this.model.backgroundColor,
                    frame: {
                        frameType: this.model.frame.frameType,
                        halfCircleFrameStartAngle: this.model.halfCircleFrameStartAngle,
                        halfCircleFrameEndAngle: this.model.halfCircleFrameEndAngle
                    },
                    radius: this.radius(),
                    width: this.model.width, // Width Should be 2*radious 
                    height: this.model.height,
                    interiorGradient: this.model.interiorGradient,
                    readOnly: this.model.readOnly,
                    enableResize: this.model.enableResize,
                    enableAnimation: this.model.enableAnimation,
                    animationSpeed: this.model.animationSpeed,
                    theme: this.model.theme,
                    isRadialGradient: this.model.isRadialGradient,
                    //Events
                    load: this.model.load,
                    drawTicks: this.model.drawTicks,
                    drawLabels: this.model.drawLabels,
                    drawPointers: this.model.drawPointers,
                    drawRange: this.model.drawRange,
                    drawCustomLabel: this.model.drawCustomLabel,
                    drawIndicators: this.model.drawIndicators,
                    drawPointerCap: this.model.drawPointerCap,
                    renderComplete: this.model.renderComplete,
                    mouseClick: this.model.mouseClick,
                    mouseClickMove: this.model.mouseClickMove,
                    mouseClickUp: this.model.mouseClickUp,
                    scales: extendScales
                });
                this._gaugeObj["obj" + i] = $("#" + this._id + "_" + i).data("ejCircularGauge");
            }
            this.removeImg();
            this._wireEvents();
        },

        /**
        * This function is used to refresh the OLAP Gauge at client side.
        * @return jQuery
        * @example 
        * &lt;div id="OlapGauge"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Gauge
        * $('#OlapGauge').ejOlapGauge({
        *       url: "OlapGaugeService.svc",
        *		enableTooltip: true,
        *		scales: [{
        *		pointers: [{
        *                            showBackNeedle: true,
        *                            backNeedleLength: 20,
        *                            length: 120,
        *                            width: 7
        *                        },
        *                {
        *                    pointerType: "marker",
        *                    markerType: "diamond",
        *                    distanceFromScale: 5,
        *                    placement: "center",
        *                    backgroundColor: "#29A4D9",
        *                    length: 25,
        *                    width: 15
        *                }]
        *				}]
        *   });
        * var gaugeObj = $("#OlapGauge").data("ejOlapGauge");
        * gaugeObj.refresh();
        * // refresh the OLAP Gauge in client-side.
        * &lt;/script&gt;
        * @memberof ejOlapGauge
        * @instance
        */
        refresh: function () {
            if (this._gaugeObj == null || this._gaugeObj == undefined) {
                for (var i = 0; i < this._JSONRecords.length; i++) {
                    this._gaugeObj["obj" + i] = $("#" + this._id + "_" + i).data("ejCircularGauge");
                    this._gaugeObj["obj" + i].refresh();
                }
            }
            else {
                for (key in this._gaugeObj) {
                    this._gaugeObj[key].refresh();
                }
            }
        }
    });

    //OLAP Gauge Localization
    ej.olap.OlapGauge.locale = {};
    //Default english localized values
    ej.olap.OlapGauge.locale["en-US"] = {
        RevenueGoal: "Revenue Goals",
        RevenueValue: "Revenue Values",
        RevenueFor: "Revenue For",
        MDXqueryExecutionFailed: "MDX query execution failed",
        PreparingAndExecutingMDXquery: "Preparing and executing MDX query",
        MDXqueryExecutedSuccessfully: "MDX query executed successfully",
        RenderingStarted: "Rendering Started",
        RenderingSucceeded: "Rendering Succeeded",
        RenderingFailed: "Rendering failed"

    };

    /**
    * Enum for Progres Mode. Allows the user to select a appropriate progress indicator. 
    * @enum {String}
    * @global
    */
    ej.olap.OlapGauge.ProgressMode = {
        Infinite: "infinite",
        Normal: "normal",
        Progress: "progress"
    };

})(jQuery, Syncfusion); ;