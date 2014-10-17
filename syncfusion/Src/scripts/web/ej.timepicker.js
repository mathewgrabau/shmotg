/*!
*  filename: ej.timepicker.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to craete a Timepicker with the Html input element
* @copyright Copyright Syncfusion Inc. 2001 - 2014. All rights reserved.
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
	* @classdesc Time selection with the input field.
	* @class ejTimePicker
	* @requires jQuery
    * @requires jquery.easing.1.3.js
    * @requires jquery.globalize.js
    * @requires globalize.cultures.min.js
	* @requires ej.core.js
	* @requires ej.timepicker.js
	* @requires ej.scroller.js
	
	* @example 
	* &lt;input type="text" id="timepicker" /&gt;<br/>
	* &lt;script&gt;
	* // Create TimePicker
    * $("#timepicker").ejTimePicker();
	* &lt;/script&gt;
	*/

    ej.widget("ejTimePicker", "ej.TimePicker", {
        // widget element will be automatically set in this
        element: null,
        // user defined model will be automatically set in this
        model: null,
        validTags: ["input"],
        _rootCSS: "e-timepicker",
        _setFirst: false,
        type: "editor",

        // default model
        defaults: {
            /**		
			* Specify the CSS class to timepicker to achieve custom theme.
			* @default ""
			* @type {String}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the CSS class during initialization. 			
			* 	$("#timepicker").ejTimePicker({  cssClass : "gradient-lime" });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            cssClass: "",

            /**		
			* Defines the time format displayed in the TimePicker.
			* @default "h:mm tt"
			* @type {String}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the timeFormat during initialization. 			
			* 	$("#timepicker").ejTimePicker({  timeFormat : "h:mm:ss tt" });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            timeFormat: "",

            /**		
			* Sets a specified time value on the TimePicker.
			* @default null
			* @type {String | DateObject}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the time value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  value : "5:10 PM" });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            value: null,
			enableAnimation: true,
            /**		
			* Defines the localization locale for TimePicker.
			* @default "en-US"
			* @type {String}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the locale value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  locale : "en-US" });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            locale: "en-US",

            /**		
			* Indicates that the timepicker value can only be read.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the readOnly value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  readOnly : false });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            readOnly: false,

            /**		
			* Shows or hides the arrow button from the TimePicker textbox.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the showPopupButton property during initialization. 			
			* 	$("#timepicker").ejTimePicker({  showPopupButton : false });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            showPopupButton: true,
			
			/**		
			* When enableStrictMode true it allows the value outside of the range also, otherwise it internally changed to the correct value.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;
	        * &lt;script&gt;
			* //To set enableStrictMode API during initialization  
			* 	$("#timepicker").ejTimePicker({  enableStrictMode: true });
		    * &lt;/script&gt; 
			 * @memberof ejTimePicker
			* @instance
			*/
            enableStrictMode: false,

            /**		
			* Sets the time interval between the two adjacent time values in the popup.
			* @default 30
			* @type {Number}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the interval value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  interval : 60 });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            interval: 30,

            /**		
			* Sets the step value for increment an hour value through arrow keys or mouse scroll.
			* @default 1
			* @type {Number}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the hourInterval value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  hourInterval : 2 });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            hourInterval: 1,

            /**		
			* Sets the step value for increment the minute value through arrow keys or mouse scroll.
			* @default 1
			* @type {Number}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the minute interval value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  minutesInterval : 5 });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            minutesInterval: 1,

            /**		
			* Sets the step value for increment the seconds value through arrow keys or mouse scroll.
			* @default 1
			* @type {Number}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the seconds interval value during initialization. 			
			* 	$("#timepicker").ejTimePicker({ timeFormat : "h:mm:ss tt",secondsInterval : 5 });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            secondsInterval: 1,

            /**		
			* Defines the height of the TimePicker textbox.
			* @default ""
			* @type {String | Number}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the height value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  height : "35" });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            height: "",

            /**		
			* Defines the width of the TimePicker textbox.
			* @default ""
			* @type {String | Number}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the width value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  width : "120" });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            width: "",

            /**		
			* Sets the minimum time value to the TimePicker.
			* @default "12:00:00 AM"
			* @type {String}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the minTime value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  minTime : "8:00 AM" });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            minTime: "12:00:00 AM",

            /**		
			* Sets the maximum time value to the TimePicker.
			* @default "11:59:59 PM"
			* @type {String}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the maxTime value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  maxTime : "5:00 PM" });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            maxTime: "11:59:59 PM",

            /**		
			* Changes the sharped edges into rounded corner for the TimePicker textbox and popup.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the showRoundedCorner value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  showRoundedCorner : true });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            showRoundedCorner: false,

            /**		
			* Sets the TimePicker direction as right to left alignment.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the enableRTL value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  enableRTL : true });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            enableRTL: false,

            /**		
			* Defines the height of the TimePicker popup.
			* @default "191px"
			* @type {String | Number}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the popupHeight value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  popupHeight : "250px" });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            popupHeight: "191px",

            /**		
			* Defines the width of the TimePicker popup.
			* @default "auto"
			* @type {String | Number}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the popupWidth value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  popupWidth : "150px" });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            popupWidth: "auto",

            /**		
			* When this property is set to false, it disables the timepicker control.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the enabled value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  enabled : false });
			* &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			* @instance
			*/
            enabled: true,

            /**		
			* Enables or disables the state maintenance of TimePicker.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
			* // Set the enablePersistence value during initialization. 			
			* 	$("#timepicker").ejTimePicker({  enablePersistence : true });
			* &lt;/script&gt; <br>
			* @memberof ejTimePicker
			* @instance
			*/
            enablePersistence: false,

            /**     
			 * Fires when the timepicker control gets focus.
			 * @event
			 * @name ejTimePicker#focusIn 	
			 * @param {Object} argument Event parameters from timepicker     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the timepicker model
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument.value returns the current time value
			 * @example 
			 * &lt;input type="text" id="timepicker" /&gt;<br/>
			 * &lt;script&gt;
			 * //focusIn event for timepicker
             * $("#timepicker").ejTimePicker({
             *    focusIn: function (args) {}
             * });      
			 * &lt;/script&gt; <br>
			 * @memberof ejTimePicker
			 * @instance
			 */
            focusIn: null,

            /**     
			 * Fires when the timepicker control get lost focus.
			 * @event
			 * @name ejTimePicker#focusOut 	
			 * @param {Object} argument Event parameters from timepicker     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the timepicker model
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument.value returns the current time value
			 * @example 
			 * &lt;input type="text" id="timepicker" /&gt;<br/>
			 * &lt;script&gt;
			 * //focusOut event for timepicker
             * $("#timepicker").ejTimePicker({
             *    focusOut: function (args) {}
             * }); 
			 * &lt;/script&gt; <br>			 
			 * @memberof ejTimePicker
			 * @instance
			 */
            focusOut: null,

            /**     
            * Fires when the time value changed in the TimePicker.
            * @event
            * @name ejTimePicker#change 	
            * @param {Object} argument Event parameters from timepicker     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the timepicker model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.value returns the modified time value
            * @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
            * //change event for timepicker
            * $("#timepicker").ejTimePicker({
            *    change: function (args) {}
            * });  
			* &lt;/script&gt; <br>			
            * @memberof ejTimePicker
            * @instance
            */
            change: null,

            /**     
            * Fires when the value is selected from the timepicker dropdownlist.
            * @event
            * @name ejTimePicker#select 	
            * @param {Object} argument Event parameters from timepicker     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the timepicker model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.value returns the selected time value
            * @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
            * //select event for timepicker
            * $("#timepicker").ejTimePicker({
            *    select: function (args) {}
            * });   
			* &lt;/script&gt; <br>			
            * @memberof ejTimePicker
            * @instance
            */
            select: null,
			/**     
          * Fires when create TimePicker successfully.
          * @event
          * @name ejTimePicker#create 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the TimePicker model
          * @param {string}  argument.type returns the name of the event
          * @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
            * //create event for timepicker
            * $("#timepicker").ejTimePicker({
            *    create: function (args) {}
            * });   
			* &lt;/script&gt; <br>					
          * @memberof ejTimePicker
          * @instance
          */
            create: null,
			/**     
          * Fires when the TimePicker is destroyed successfully.
          * @event
          * @name ejTimePicker#destroy 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the TimePicker model
          * @param {string}  argument.type returns the name of the event
          * @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
            * //destroy event for timepicker
            * $("#timepicker").ejTimePicker({
            *    destroy: function (args) {}
            * });   
			* &lt;/script&gt; <br>					
          * @memberof ejTimePicker
          * @instance
          */
            destroy: null,
            /**     
          * Fires when the TimePicker popup before opened .
          * @event
          * @name ejTimePicker#beforeOpen 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the TimePicker model
          * @param {string}  argument.type returns the name of the event
          * @param {string}  argument.model returns the previous value
          * @param {string}  argument.value returns the time value
          * @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
            * //beforeOpen event for timepicker
            * $("#timepicker").ejTimePicker({
            *    beforeOpen: function (args) {}
            * });   
			* &lt;/script&gt; <br>					
          * @memberof ejTimePicker
          * @instance
          */
            beforeOpen: null,
            /**     
          * Fires when the TimePicker popup opened.
          * @event
          * @name ejTimePicker#open 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the TimePicker model
          * @param {string}  argument.type returns the name of the event
          * @param {string}  argument.model returns the previous value
          * @param {string}  argument.value returns the time value
          * @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
            * //open event for timepicker
            * $("#timepicker").ejTimePicker({
            *    open: function (args) {}
            * });   
			* &lt;/script&gt; <br>					
          * @memberof ejTimePicker
          * @instance
          */
            open: null,
            /**     
          * Fires when the TimePicker popup closed.
          * @event
          * @name ejTimePicker#close 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the TimePicker model
          * @param {string}  argument.type returns the name of the event
          * @param {string}  argument.model returns the previous value
          * @param {string}  argument.value returns the time value
          * @example 
			* &lt;input type="text" id="timepicker" /&gt;<br/>
			* &lt;script&gt;
            * //close event for timepicker
            * $("#timepicker").ejTimePicker({
            *    close: function (args) {}
            * });   
			* &lt;/script&gt; <br>					
          * @memberof ejTimePicker
          * @instance
          */
            close:null
        },

        /**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            timeFormat: "string",
            minTime: "string",
            maxTime: "string",
            readOnly: "boolean",
            interval: "number",
            showPopupButton: "boolean",
            locale: "string",
            hourInterval: "number",
            minutesInterval: "number",
            secondsInterval: "number",
            enabled: "boolean",
            enablePersistence: "boolean",
			enableAnimation: "boolean",
			enableStrictMode: "boolean",
        },

        observables: ["value"],
        // public functions

        /**
        * To enable the timepicker  
		* @return jQuery
		* @example 
		* &lt;input type="text" id="timepicker" /&gt;<br/>
		* &lt;script&gt;
		* $("#timepicker").ejTimePicker();
		* // Create TimePicker instance
		* var timeObj = $("#timepicker").data("ejTimePicker");
		* timeObj.enable(); // enables the timepicker
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="timepicker" /&gt;<br/>
	    * &lt;script&gt;
		* $("#timepicker").ejTimePicker();
	    * // enables the timepicker
        * $("#timepicker").ejTimePicker("enable");
	    * &lt;/script&gt;
		*@memberof ejTimePicker
		* @instance
        */
        enable: function () {
            if (!this.model.enabled) {
                this.element[0].disabled = false;
                this.model.enabled = true;
                this.element.removeClass("e-disable").attr("aria-disabled", false);
                if (this.model.showPopupButton) {
                    this.timeIcon.removeClass("e-disable").attr("aria-disabled", false);
                    this.popupList.removeClass("e-disable").attr("aria-disabled", false);
                }
            }
        },

        /**
        * To disable the timepicker  
		* @return jQuery
		* @example 
		* &lt;input type="text" id="timepicker" /&gt;<br/>
		* &lt;script&gt;
		* $("#timepicker").ejTimePicker();
		* // Create TimePicker instance
		* var timeObj = $("#timepicker").data("ejTimePicker");
		* timeObj.disable(); // disable the timepicker
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="timepicker" /&gt;<br/>
	    * &lt;script&gt;
		* $("#timepicker").ejTimePicker();
	    * // disable the timepicker
        * $("#timepicker").ejTimePicker("disable");
	    * &lt;/script&gt;
		*@memberof ejTimePicker
		* @instance
        */
        disable: function () {
            if (this.model.enabled) {
                this.element[0].disabled = true;
                this.model.enabled = false;
                this.element.addClass("e-disable").attr("aria-disabled", true);
                if (this.model.showPopupButton) {
                    this.timeIcon.addClass("e-disable").attr("aria-disabled", true);
                    this.popupList.addClass("e-disable").attr("aria-disabled", true);
                }
                this._hideResult();
            }
        },

        /**
        * returns the current time value
		* @return jQuery
		* @example 
		* &lt;input type="text" id="timepicker" /&gt;<br/>
		* &lt;script&gt;
		* $("#timepicker").ejTimePicker();
		* // Create TimePicker instance
		* var timeObj = $("#timepicker").data("ejTimePicker");
		* timeObj.getValue(); // returns the timepicker value
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="timepicker" /&gt;<br/>
	    * &lt;script&gt;
		* $("#timepicker").ejTimePicker();
	    * // to get the time value
        * $("#timepicker").ejTimePicker("getValue");
	    * &lt;/script&gt;
		*@memberof ejTimePicker
		* @instance
        */
        getValue: function () {
            return this.element.val();
        },

        /**
        * updates the current system time to timepicker
		* @return jQuery
		* @example 
		* &lt;input type="text" id="timepicker" /&gt;<br/>
		* &lt;script&gt;
		* $("#timepicker").ejTimePicker();
		* // Create TimePicker instance
		* var timeObj = $("#timepicker").data("ejTimePicker");
		* timeObj.setCurrentTime(); // updates the current system
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="timepicker" /&gt;<br/>
	    * &lt;script&gt;
		* $("#timepicker").ejTimePicker();
	    * // updates the current system
        * $("#timepicker").ejTimePicker("setCurrentTime");
	    * &lt;/script&gt;
		*@memberof ejTimePicker
		* @instance
        */
        setCurrentTime: function () {
            if (this.model.enabled && !this.model.readOnly) this._setMask();
        },

        _timeFormat: function (format) {
            var validatedformat = this._validateTimeFormat(format);
            if (validatedformat) {
                this.model.timeFormat = validatedformat;
                this.model.value = this._localizeTime(this.getValue());
                this.element.val(this.model.value);
            }
            return validatedformat;
        },

        _getTimeFormat: function () {
            this.model.timeFormat = Globalize.culture(this.model.locale).calendar.patterns.t || "h:mm tt";
            this.seperator = this._getSeperator();
        },

        _changeSkin: function (skin) {
            this.wrapper.removeClass(this.model.cssClass).addClass(skin);
            if (this.popupList) this.popupList.removeClass(this.model.cssClass).addClass(skin);
        },

        _localize: function (culture) {
            var currentTime = this._createObject(this.element.val());
            this.model.locale = culture;
            this._getTimeFormat()

            this.model.value = this._localizeTime(currentTime);
            this.element.val(this.model.value);
            this._getAmPm();
        },

        // constructor function
        _init: function () {
            if (!this.element.is("input") || (this.element.attr('type') && this.element.attr('type') != "text")) return false;
            this._initialize();
            this._render();
            this._wireEvents();
        },

        _setModel: function (options) {
            if (!this.model.enabled && ej.isNullOrUndefined(options["enabled"])) return false;

            var change = false, prev = this.model.value;
            if (!ej.isNullOrUndefined(options["minTime"]) || !ej.isNullOrUndefined(options["maxTime"])) {
                if (!ej.isNullOrUndefined(options["minTime"]) && $.trim(options["minTime"]) && this._isValid(options["minTime"])) {
						this.model.minTime = options["minTime"];
						this._validateTimes();
					}
                if (!ej.isNullOrUndefined(options["maxTime"]) && $.trim(options["maxTime"]) && this._isValid(options["maxTime"])) {
						this.model.maxTime = options["maxTime"];
						this._validateTimes();
					}

                this._validateMinMax();
                if (!ej.isNullOrUndefined(options["minTime"])) options["minTime"] = this.model.minTime;
                if (!ej.isNullOrUndefined(options["maxTime"])) options["maxTime"] = this.model.maxTime;

                if (this.model.showPopupButton) this._reRenderDropdown();
                if (options["value"] == undefined) this._enableMask();
                change = true;
            }

            var option;
            for (option in options) {
                switch (option) {
                    case "timeFormat":
                        var newFormat = this._timeFormat(options[option]);
                        options[option] = this.model.timeFormat;
                        if (newFormat) {
                            this.seperator = this._getSeperator();
                            if (this.model.showPopupButton) this._reRenderDropdown();
                        }
                        break;
                    case "locale":
                        this._localize(options[option]);
                        if (this.model.showPopupButton) this._reRenderDropdown();
                        break;
                    case "interval":
                        this.model.interval = options[option];
                        if (this.model.showPopupButton) this._reRenderDropdown();
                        break;
                    case "showPopupButton": this._showButton(options[option]); break;
                    case "cssClass": this._changeSkin(options[option]); break;
                    case "showRoundedCorner": this._setRoundedCorner(options[option]); break;
                    case "enableRTL": this._setRtl(options[option]); break;
                    case "height":
                        this._setHeight(options[option]); break;
                    case "width":
                        this.wrapper.width(options[option]);
                        this._setListWidth();
                        break;
                    case "value":
						if (!this.model.enableStrictMode){
							if (this._isValid(options[option])) {
								this.model.value = options[option];
								this._enableMask();
							}
						}
						else {
							this.model.value = options[option];
							this._enableMask();
						}
                        options[option] = this.model.value;
                        change = true;
                        break;
					case "enableStrictMode":
                        this.model.enableStrictMode = jsondata[key];
                        break;
					case "enableAnimation":{
							this.model.enableAnimation=options[key];
							break;
					}
                    case "popupHeight": this.model.popupHeight = options[option]; this._setListHeight(); break;
                    case "popupWidth": this.model.popupWidth = options[option]; this._setListWidth(); break;
                    case "enabled": if (options[option]) this.enable(); else this.disable(); break;
                }
            }
            if (change) this._raiseChangeEvent(prev);
            this._checkErrorClass();
        },

        // all events bound using this._on will be unbind automatically
        _destroy: function () {
            this.element.insertAfter(this.wrapper);
            this.wrapper.remove();
            this.element.removeClass("e-input").removeAttr("ondragstart draggable").val("");
            if (this.popupList) this.popupList.remove();
        },

        _initialize: function () {
            this.target = this.element[0];
            this.timeIcon = null;
            this.popupList = null;
            this.focused = false;
            this.start = 0;
            this.end = 0;
            this.min = null;
            this.max = null;
            this.incomplete = false;
            this.downPosition = 0;
            this._getAmPm();
            this.showDropdown = false;
            this._activeItem = 0;
            this.isValidState = true;
            this._manualFocus = false;
            this._isIE7 = this._checkIE7();
            // _getInternalEvents is used when TimePicker used as a subcontrol of DateTimePicker 
            this._getInternalEvents = false;
            if (!this.model.timeFormat) this._getTimeFormat();
            else this.seperator = this._getSeperator();
        },

        _render: function () {
            this._renderWrapper();
            this._setDimentions();
            this._renderTimeIcon();
            this._validateTimes();
            this._renderDropdown();
            this._checkProperties();
            this._enableMask();
            this._checkErrorClass();
            this.element.attr({ 'aria-atomic': 'true', 'aria-live': 'assertive', "aria-readonly": this.model.readOnly, "value":this.model.value });
			if (this.model.showPopupButton || !ej.isNullOrUndefined(this.popupList))
            this.ul.find("li").attr({ 'tabindex': -1, 'aria-selected': false });
        },

        _renderWrapper: function () {
            this.element.addClass("e-input").attr("tabindex", "0");
            this.wrapper = ej.buildTag("span.e-timewidget e-widget " + this.model.cssClass + "#" + this.target.id + "_timewidget").insertAfter(this.element);
            this.container = ej.buildTag("span.e-in-wrap e-box").append(this.element);
            this.wrapper.append(this.container);
        },

        _renderTimeIcon: function () {
            if (this.model.showPopupButton) {
                this.timeIcon = ej.buildTag("span.e-select").attr({ 'role': 'button', 'aria-label': 'select' });
                var icon = ej.buildTag("span.e-icon e-time").attr('role', 'presentation');
                this.timeIcon.append(icon);
                this.container.append(this.timeIcon).addClass("e-padding");
                this._on(this.timeIcon, "mousedown", this._timeIconClick);
            }
        },

        _renderDropdown: function () {
			var oldWrapper = $("#" + this.element.context.id + "_popup").get(0);
            if (oldWrapper)
                $(oldWrapper).remove();
            if (!this.model.showPopupButton || this.popupList) return false;
            this.popupList = ej.buildTag("div.e-time-popup e-popup e-widget e-box " + this.model.cssClass + "#" + this.target.id + "_popup", "", {}, { 'tabindex': 0, 'aria-activedescendant': '' });
            this.popup = this.popupList;
            this.ul = ej.buildTag("ul.e-ul");
            var scrollDiv = ej.buildTag("div").append(this.ul);
            $('body').append(this.popupList.append(scrollDiv));
            this._renderLiTags();
            this._setListHeight();
            this._setListWidth();
            this.popupList.ejScroller({ height: this.popupList.height(), width: 0, scrollerSize: 20 });
            this.scrollerObj = this.popupList.ejScroller("instance");
            this.popupList.css("display", "none");
            this._listSize = this.ul.find("li").size();
        },
        _renderLiTags: function () {
            if (this.model.interval < 1) return false;
            var start, end, timeVal, interval = this.model.interval * 60000
            start = (this.model.minTime) ? this._createObject(this.model.minTime) : this._createObject("12:00:00 AM");
            end = (this.model.maxTime) ? this._createObject(this.model.maxTime) : this._createObject("11:59:59 PM");

            while (this._compareTime(end, start, true)) {
                timeVal = this._localizeTime(start);
                this.ul.append(ej.buildTag("li", timeVal));
                start = this._createObject(start).getTime() + interval;
            }

            var liTags = this.ul.find("li");
            this._on(liTags, "mouseenter", $.proxy(this._OnMouseEnter, this));
            this._on(liTags, "mouseleave", $.proxy(this._OnMouseLeave, this));
            this._on(liTags, "click", $.proxy(this._OnMouseClick, this));
        },
        _reRenderDropdown: function () {
            this.ul.empty();
            this._renderLiTags();
            this._refreshScroller();
            this._changeActiveEle();
        },
        _refreshScroller: function () {
            var flag = this.popupList.css("display") == "none" ? true : false;
            this.popupList.css("height", "auto");
            this.popupList.find(".e-content, .e-vscroll").removeAttr("style");
            this.popupList.find(".e-vscroll div").removeAttr("style");

            if (flag) this.popupList.css("display", "block");  // For get the height of the popup
            this.scrollerObj.model.height = this.popupList.height();
            this.scrollerObj.model.scrollTop = 0;
            this.scrollerObj.refresh();
            if (flag) this.popupList.css("display", "none");
        },

        _setListWidth: function () {
            if (this.popupList) {
                var width = this.model.popupWidth;
                if (width && width != "auto") this.popupList.css({ "width": width });
                else this.popupList.css({ "width": this.wrapper.width() });
            }
        },
        _setListHeight: function () {
            if (this.popupList) this.popupList.css({ "max-height": this.model.popupHeight || "191px" });
            if (this.scrollerObj) {
                this._refreshScroller();
                this._updateScrollTop();
            }
        },
        _updateScrollTop: function () {
            this.scrollerObj.setModel({ "scrollTop": this._calcScrollTop() });
        },
        _refreshPopup: function () {
            if (this.model.popupWidth == "auto") this.popupList.css({ "width": this.wrapper.width() });
            this._setListPosition();
            this._refreshScroller();
        },
        _setListPosition: function () {
            var pos = this.wrapper.offset(),
            left = pos.left,
            totalHeight = this.wrapper.outerHeight(),
            border = (totalHeight - this.wrapper.height()) / 2,
            maxZ = this._getZindexPartial();
            if (this.model.enableRTL) left -= this.popupList.outerWidth() - this.wrapper.outerWidth();

            this.popupList.css({
                "left": left + "px",
                "top": pos.top + totalHeight - border + 3 + "px",
                "z-index": maxZ
            });
        },
        _getZindexPartial: function () {
            var parents = this.element.parents(), bodyEle;
            bodyEle = $('body').children(), index = bodyEle.index(this.popup);
            bodyEle.splice(index, 1);
            $(bodyEle).each(function (i, ele) { parents.push(ele); });

            var maxZ = Math.max.apply(maxZ, $.map(parents, function (e, n) {
                if ($(e).css('position') != 'static') return parseInt($(e).css('z-index')) || 1;
            }));
            if (maxZ == undefined || maxZ == null || maxZ < 10000) maxZ = 10000;
            else maxZ += 1;
            return maxZ;
        },

        _enableMask: function () {
            if (this.model.value) {
                var flag = false;
                if ((this.model.minTime && this._compareTime(this.model.minTime, this.model.value)) ||
                    this.model.maxTime && this._compareTime(this.model.value, this.model.maxTime))
                    this.isValidState = false;
                else this.isValidState = true;

                this._setTime(this.model.value);
                if (this._getInternalEvents && !this.isValidState) this._trigger("outOfRange");
            }
            else this._setMask();
            this._changeActiveEle();
            this._preVal = this.element.val();
        },
        _setTime: function (time) {
            var modifiedTime = this._localizeTime(time);
            this.element.val(modifiedTime);
            this.model.value = modifiedTime;
        },
        _setMask: function () {
            this.model.value = new Date();
            this._enableMask();
        },

        _validateTimes: function () {
            var validatedformat = this._validateTimeFormat(this.model.timeFormat);
            if (validatedformat) this.model.timeFormat = validatedformat;
            else this.model.timeFormat = "h:mm tt";

            if (!this._isValid(this.model.minTime)) this.model.minTime = "12:00:00 AM";
            if (!this._isValid(this.model.maxTime)) this.model.maxTime = "11:59:59 PM";
			if (!this._isValid(this.model.value)) this.model.value = null;
			if(!this._checkMinMax(this.model.value) && !this.model.enableStrictMode)
				this.model.value = this.model.minTime;
            this._validateMinMax();
        },
        _validateMinMax: function () {
            if (this.model.minTime && this.model.maxTime && this._compareTime(this.model.minTime, this.model.maxTime)) {
                this.model.minTime = this.model.maxTime;
            }
        },
        _checkProperties: function () {
            if (!this.model.enabled) {
                this.model.enabled = true;
                this.disable();
            }
            this._addProperty();
            this._checkAttributes();
        },
        _addProperty: function () {
            this._setRtl(this.model.enableRTL);
            this._setRoundedCorner(this.model.showRoundedCorner);
        },
        _setRtl: function (boolean) {
            if (boolean) {
                this.wrapper.addClass("e-rtl");
                if (this.popupList) this.popupList.addClass("e-rtl");
            }
            else {
                this.wrapper.removeClass("e-rtl");
                if (this.popupList) this.popupList.removeClass("e-rtl");
            }
        },
        _setRoundedCorner: function (boolean) {
            if (boolean) {
                this.container.addClass("e-corner-all");
                if (this.popupList) this.popupList.addClass("e-corner-all");
            }
            else {
                this.container.removeClass("e-corner-all");
                if (this.popupList) this.popupList.removeClass("e-corner-all");
            }
        },
        _showButton: function (show) {
            this.model.showPopupButton = show;
            if (show) {
                this.container.addClass("e-padding");
                this._renderTimeIcon();
                this._renderDropdown();
                this._addProperty();
            }
            else {
                this.container.removeClass("e-padding");
                this.timeIcon.remove();
                this.popupList.remove();
                this.timeIcon = this.popupList = null;
            }
        },
        _checkAttributes: function () {
            if (!this.element.attr("name"))
                this.element.attr({ "name": this.element[0].id });
            if ('ondragstart' in document.createElement('input'))
                this.element.attr({ "ondragstart": "return false" });
            if ('draggable' in document.createElement('input'))
                this.element.attr({ "draggable": "false" });
        },

        _getAmPm: function () {
            this.ttAM = $.trim(this._localizeMeridian("00:00"));
            this.ttPM = $.trim(this._localizeMeridian("23:00"));
        },

        _setDimentions: function () {
            this._setHeight(this.model.height);
            if (this.model.width) this.wrapper.width(this.model.width);
        },
        _setHeight: function (height) {
            if (height) this.wrapper.height(height);
            if (this._isIE7) this.element.height(this.container.height());
        },

        _validateTimeFormat: function (timeFormat) {
            var parts = timeFormat.split(" "), format = "";
            if (parts.length == 1 || parts.length == 2) {
                $(parts).each(function (i, part) {
                    format += $.trim(part) + " ";
                });
                return $.trim(format);
            }
            else return null;
        },

        _getSeperator: function () {
            var p = this._getElePlace(), formats = this.model.timeFormat.split(" ")[p.time];
            var regex = new RegExp("^[a-zA-Z0-9]+$");

            for (var i = 0; i < formats.length; i++) {
                if (!regex.test(formats.charAt(i))) return formats.charAt(i);
            }
        },

        _checkInComplete: function () {
            var pos = this._getCaretSelection(), cursor = this._getStartEnd(pos);
            var replace = "00", selected = this._getSelectedValue(cursor), category = this._getCategory(cursor);
            if (pos.end - pos.start == this.element.val().length) this._checkAll();

            if (category && category != "tt") {
                this._findCategoryPosition(category);
                if (selected == "__") {
                    if (category == "h" || category == "hh") replace = "12";
                    this._changeToDefault(replace);
                }
                else if (category.length != 1 && selected.length == 1) {
                    selected = this._changeWhole(selected);
                    this.element.val(this._replaceAt(this.target.value, this.start, this.end, selected));
                }
            }
        },
        _checkAll: function () {
            var i, p = this._getElePlace(), categories = this.model.timeFormat.split(" ")[p.time].split(this.seperator);
            for (i = 0; i < categories.length; i++) {
                this._findCategoryPosition(categories[i]);
                var selected = this._getSelectedValue({ start: this.start, end: this.end });

                if (categories[i].length != 1 && selected.length == 1) {
                    selected = this._changeWhole(selected);
                    this.element.val(this._replaceAt(this.element.val(), this.start, this.end, selected));
                }
            }
        },

        _changeToDefault: function (replace) {
            this.incomplete = true;
            var preVal = this.element[0].value
            this.element[0].value = this._replaceAt(this.target.value, this.start, this.end, replace);
            var timeValue = this._checkExceedRange(this.target.value);
            if (!!timeValue) {
                this._setTime(this.model[timeValue]);
            }
            this._setSelection(this.start, this.end);
            this._raiseChangeEvent(preVal);
        },

        _setSelection: function (start, end) {
            var element = this.element[0];

            if (element.setSelectionRange)
                element.setSelectionRange(start, end);
            else if (element.createTextRange) {
                // For lower version browsers (IE8, IE7 ...)
                element = element.createTextRange();
                element.collapse(true);
                element.moveEnd('character', end);
                element.moveStart('character', start);
                element.select();
            }
        },

        _getSelectedValue: function (cursor) {
            return this.target.value.substring(cursor.start, cursor.end);
        },

        _getMinMax: function (currPart, keydown) {
            if (currPart == "hh" || currPart == "h") {
                this.min = 1; this.max = 11;
                if (keydown) this.max = 12;
            }
            else if (currPart == "HH" || currPart == "H") {
                this.min = 0; this.max = 23;
            }
            else if (currPart == "mm" || currPart == "m" || currPart == "ss" || currPart == "s") {
                this.min = 0; this.max = 59;
            }
        },

        _focusElement: function () {
            this._manualFocus = true;
            this.element.focus();
        },
        _targetFocus: function (e) {
            e.preventDefault();
            this.focused = true;
            this.element.bind('mousewheel DOMMouseScroll', $.proxy(this._mouseWheel, this));
            this.wrapper.addClass("e-focus").removeClass("e-error").attr('aria-invalid', "false");
            if (!this._manualFocus) {
                this._findCategoryPosition(this._getLeast(false));
                this._setSelection(this.start, this.end);
            }
            this._manualFocus = false;
			this._prevTimeVal = this.element.val();
            this._raiseEvent("focusIn");
        },
        _targetBlur: function () {
            this.focused = false;
            this.element.unbind('mousewheel DOMMouseScroll', $.proxy(this._mouseWheel, this));
            this.wrapper.removeClass("e-focus");
            this._checkInComplete();
            if (!this._checkMinMax(this.target.value)){
				if(!this.model.enableStrictMode){
					this.element.val(this._prevTimeVal);
					this.model.value = this._prevTimeVal;
					this.isValidState = true;
				}
				else
					this.isValidState = false;
			}
            else this.isValidState = true;
            this._checkErrorClass();
            this._raiseEvent("focusOut");
        },
        _checkErrorClass: function () {
            if (this.isValidState) this.wrapper.removeClass("e-error").attr('aria-invalid', "false");
            else this.wrapper.addClass("e-error").attr('aria-invalid', "true");
        },

        _getCaretSelection: function () {
            var input = this.element[0], start = 0, end = 0;

            if (!isNaN(input.selectionStart)) {
                start = input.selectionStart;
                end = input.selectionEnd;
                return { start: Math.abs(start), end: Math.abs(end) };
            }
            // For lower version browsers (IE8, IE7 ...)
            var bookmark = document.selection.createRange().getBookmark();
            var selection = input.createTextRange();
            selection.moveToBookmark(bookmark);

            var before = input.createTextRange();
            before.collapse(true);
            before.setEndPoint("EndToStart", selection);
            var beforeLength = before.text.length, selLength = selection.text.length;
            return { start: beforeLength, end: beforeLength + selLength };
        },

        _mouseDownOnInput: function (e) {
            if (!this.focused) this._focusElement();
            this.downPosition = this._getCaretSelection();
            this._checkInComplete();
            $(document).bind("mouseup", $.proxy(this._mouseUpOnInput, this));
        },

        _mouseUpOnInput: function (e) {
            e.preventDefault();
            $(document).unbind("mouseup", $.proxy(this._mouseUpOnInput, this));
            var pos = this._getCaretSelection();

            if (this.incomplete) {
                this.incomplete = false;
                pos = this.downPosition;
            }
            var cursor = this._getStartEnd(pos);
            this._setSelection(cursor.start, cursor.end);
        },

        _getCategoryPosition: function (category) {
            var s = 0, e = 0, parts = this.target.value.split(" "), p = this._getElePlace(), sep = this.seperator, valid = false;
            var fParts = this.model.timeFormat.split(" ")[p.time].split(sep);
            var tParts = parts[p.time].split(sep);
            if (fParts.length > tParts.length) return { start: s, end: e, isValid: valid };

            if (category == "tt") {
                if (parts[p.tt] == this.ttAM || parts[p.tt] == this.ttPM) {
                    if (p.tt == 0) s = 0;
                    else s = parts[p.time].length + 1;
                    e = s + parts[p.tt].length;
                    valid = true;
                }
            }
            else {
                if (p.time == 0) s = 0;
                else s = parts[p.tt].length + 1;

                var index = fParts.indexOf(category);
                if (index != -1) {
                    for (var i = 0; i < fParts.length; i++) {
                        e = tParts[i].length + 1;
                        if (i == index) break;
                        else s += e;
                    }
                    e += s - 1;
                    valid = true;
                }
            }
            return { start: s, end: e, isValid: valid };
        },
        _getCategory: function (cursor) {
            var parts = this.model.timeFormat.split(" "), sep = this.seperator;

            var p = this._getElePlace();

            if (cursor.isTT) return parts[p.tt];
            else return parts[p.time].split(sep)[cursor.index];
        },

        _getStartEnd: function (pos) {
            var sep = this.seperator;
            var value = this.element.val(), parts = value.split(" "), s = 0, e = 0, place = tt = null, i, j;

            for (j = 0; j < parts.length; j++) {
                if (parts[j] != this.ttAM && parts[j] != this.ttPM) {
                    var time = parts[j].split(sep), tempS = s, tempE = s + time[0].length;
                    for (i = 0; i < time.length; i++) {
                        e = time[i].length + s;
                        if (pos.start <= e) {
                            place = i;
                            tt = false;
                            j = parts.length;
                            break;
                        }
                        else s += time[i].length + 1;
                    }
                }
                else {
                    if (pos.start <= s + parts[j].length) {
                        e = parts[j].length + s;
                        place = 0;
                        tt = true;
                        j = parts.length;
                        break;
                    }
                    else s += parts[j].length + 1;
                }
            }
            if (place == null) s = tempS, e = tempE, place = 0, tt = false;

            return { start: s, end: e, index: place, isTT: tt };
        },

        _modifyValue: function (isIncrement) {
            this._checkInComplete();
            var pos = this._getCaretSelection(), cursor;
            if (pos.start == pos.end) {
                var cate = this._getLeast(true);
                var position = this._getCategoryPosition(cate);
                cursor = this._getStartEnd(position);
            }
            else cursor = this._getStartEnd(pos);
            this.start = cursor.start; this.end = cursor.end;

            this._changeValue(cursor, isIncrement);
        },

        _keyUpOnInput: function (e) {
            e.preventDefault();
            if (this._preVal != this.element.val()) {
                this._preVal = this.element.val();
                this._raiseChangeEvent();
            }
        },

        _getNextCategory: function (cate, direction) {
            var categories = [], sep = this.seperator;
            var fParts = this.model.timeFormat.split(" ");
            $(fParts).each(function (i, part) {
                if (part == "tt") categories.push(part);
                else {
                    var inner = part.split(sep);
                    categories = inner.concat(categories);
                }
            });
            var index = categories.indexOf(cate), ix;
            if (index != -1) {
                if (direction) {
                    if (index == 0) ix = categories.length - 1;
                    else ix = index - 1;
                }
                else {
                    if (index == categories.length - 1) ix = 0;
                    else ix = index + 1;
                }
                return categories[ix];
            }
            return cate;
        },
        _getElePlace: function () {
            var fParts = this.model.timeFormat.split(" "), time, tt;
            if (fParts[0] == "tt") time = 1, tt = 0;
            else time = 0, tt = 1;
            return { time: time, tt: tt };
        },
        _movePosition: function (pos, direction) {
            var cursor = this._getStartEnd(pos);
            var currCate = this._getCategory(cursor);
            if (!currCate) currCate = this._getLeast(direction);
            var next = this._getNextCategory(currCate, direction);
            var cursor = this._getCategoryPosition(next);

            if (cursor.isValid) {
                this._setSelection(cursor.start, cursor.end);
            }
        },

        _keyDownOnInput: function (e) {
            if (this.model.readOnly && !this._readOnlyKeys(e)) return false;

            var pos, cursor, category, key = e.keyCode;
            // _getInternalEvents is set to true when TimePicker used inside DateTimePicker control
            // in DateTimePicker control it allows Up, Down, Home, End, Tab keys only
            if (this._getInternalEvents && key != 38 && key != 40 && key != 36 && key != 35 && key != 9) return false;
            // Up, Down, Esc
            if (this.showDropdown && key != 38 && key != 40 && key != 27 && !this._readOnlyKeys(e)) return false;
            else if (this.showDropdown && (key == 37 || key == 39)) e.keyCode = (key == 37) ? 38 : 40;

            pos = this._getCaretSelection();
            cursor = this._getStartEnd(pos);
            category = this._getCategory(cursor);

            switch (e.keyCode) {
                case 38:        // Up Key
                    e.preventDefault();
                    if (!this.showDropdown)
                        this._modifyValue(true);
                    else {
                        if (this._activeItem > 1) this._activeItem -= 1;
                        //else this._activeItem = this._listSize;         // For cycle rotation
                        this._addListHover();
                        this._selectTimeItem(this._getActiveItem());
                    }
                    break;
                case 40:        // Down Key
                    e.preventDefault();
                    if (e.altKey && this.model.showPopupButton)
                        this._showhidePopup();
                    else if (!this.showDropdown)
                        this._modifyValue(false);
                    else {
                        if (this._activeItem < this._listSize) this._activeItem += 1;
                        //else this._activeItem = 1;        // For cycle rotation
                        this._addListHover();
                        this._selectTimeItem(this._getActiveItem());
                    }
                    break;
                case 37:        // Left Key
                    e.preventDefault();
                    this._checkInComplete();
                    if (pos.start == pos.end) this._setSelection(pos.start - 1, pos.start - 1);
                    else this._movePosition(pos, true);
                    break;
                case 39:         // Right Key
                    e.preventDefault();
                    this._checkInComplete();
                    if (pos.start == pos.end) this._setSelection(pos.start + 1, pos.start + 1);
                    else this._movePosition(pos, false);
                    break;

                case 36:         // Home Key
                    e.preventDefault();
                    if (!this.showDropdown) {
                        var homecate = this._firstlastVal(true);
                        var hPos = this._getCategoryPosition(homecate);
                        if (hPos.isValid) this._setSelection(hPos.start, hPos.end);
                    }
                    else {
                        this._activeItem = 1;
                        this._addListHover();
                        this._selectTimeItem(this._getActiveItem());
                    }
                    break;
                case 35:         // End Key
                    e.preventDefault();
                    if (!this.showDropdown) {
                        var endcate = this._firstlastVal(false);
                        var ePos = this._getCategoryPosition(endcate);
                        if (ePos.isValid) this._setSelection(ePos.start, ePos.end);
                    }
                    else {
                        this._activeItem = this._listSize;
                        this._addListHover();
                        this._selectTimeItem(this._getActiveItem());
                    }
                    break;
                case 9:     // Tab Key
                    if (this._getInternalEvents) break;
                    this._hideResult();
                    var flag = null;
                    if (e.shiftKey && pos.start > 0) flag = true;
                    else if (!e.shiftKey && pos.end < this.element.val().length) flag = false;
                    if (flag != null) {
                        e.preventDefault();
                        this._checkInComplete();
                        this._movePosition(pos, flag);
                    }
                    break;
                case 27:    // Esc Key
                case 13:    // Enter Key
                    this._hideResult();
                    break;
                case 8:          // Backspace Key
                case 46:         // Delete Key
                    e.preventDefault();
                    if (category && category != "tt") {
                        this._findCategoryPosition(category);
                        var _doBackspace = (key == 8 && pos.start != this.start), _doDelete = (key == 46 && pos.end != this.end), len;
                        len = this.end - this.start;

                        if ((pos.start != pos.end || len == 1) && (_doBackspace || _doDelete || pos.start != pos.end)) {
                            var s1 = this.start, s2 = this.end, te;
                            this.element[0].value = this._replaceAt(this.target.value, s1, s2, "__");
                            te = (s2 - s1 != 2) ? s2 + 1 : s2;
                            this._setSelection(s1, te);
                        }
                        else {
                            if (_doBackspace) {
                                this.element[0].value = this._replaceAt(this.target.value, pos.start - 1, pos.start, "");
                                this._setSelection(pos.start - 1, pos.start - 1);
                            }
                            else if (_doDelete) {
                                this.element[0].value = this._replaceAt(this.target.value, pos.end, pos.end + 1, "");
                                this._setSelection(pos.end, pos.end);
                            }
                        }
                    }
                    break;
            }

            var currSelection = this._getSelectedValue(cursor);
            var unicode = e.keyCode ? e.keyCode : e.charCode, actualkey;

            if (e.keyCode > 47 && e.keyCode < 58)
                actualkey = String.fromCharCode(unicode);
            else if (e.keyCode > 95 && e.keyCode < 106)
                actualkey = String.fromCharCode(unicode - 48);

            if (category == "tt" && ((!e.shiftKey && !e.ctrlKey && !e.altKey) && (e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 47 && e.keyCode < 58) || (e.keyCode > 95 && e.keyCode < 106))) {
                e.preventDefault();
                var ttPos = this._getCategoryPosition(category);
                this.start = ttPos.start;
                this.end = ttPos.end;
                this._changeAmPm(currSelection);
                this._raiseChangeEvent();
            }

            if ((!e.shiftKey && !e.ctrlKey && !e.altKey) && (e.keyCode > 47 && e.keyCode < 58) || (e.keyCode > 95 && e.keyCode < 106)) {
                if (category != "tt") {
                    this._getMinMax(category, true);
                    if (pos.start == pos.end) {
                        this._findCategoryPosition(category);
                        var newVal;
                        if (pos.start == this.start) newVal = actualkey + currSelection;
                        else newVal = currSelection + actualkey;
                        if (newVal.length > 2 || !(Number(newVal) >= this.min && this.max >= Number(newVal)))
                            e.preventDefault();
                    }
                    else if (!(Number(actualkey) >= this.min && this.max >= Number(actualkey)))
                        e.preventDefault();
                }
            }
            else if (!this._allowKeyCodes(e))
				!this.model.enableStrictMode ? e.preventDefault() : e.stopPropagation();
        },

        _allowKeyCodes: function (e) {
            // ctrl + A, C, Z, Y,  Tab, F5, Enter
            if ((e.ctrlKey && (e.keyCode == 65 || e.keyCode == 67 || e.keyCode == 90 || e.keyCode == 89))
                || e.keyCode == 9 || e.keyCode == 116 || e.keyCode == 13)
                return true;
            return false;
        },
        _readOnlyKeys: function (e) {
            // Left, Right, Home, End
            if (e.keyCode == 35 || e.keyCode == 36 || e.keyCode == 37 || e.keyCode == 39 || this._allowKeyCodes(e))
                return true;
            return false;
        },

        _firstlastVal: function (initial) {
            var parts = this.model.timeFormat.split(" "), sep = this.seperator;
            if (initial) {
                if (parts[0] != "tt") return parts[0].split(sep)[0];
                return "tt";
            }
            else {
                if (parts[0] != "tt") return "tt";
                else if (parts[1]) {
                    var lastItem = parts[1].split(sep);
                    return lastItem.length ? lastItem[lastItem.length - 1] : "tt";
                }
                return "tt";
            }
        },

        _mouseWheel: function (event) {
            event.preventDefault();
            if (this.model.readOnly) return false;

            var delta, rawEvent = event.originalEvent;
            if (rawEvent.wheelDelta) {
                // IE and Opera use wheelDelta, which is a multiple of 120 (possible values -120, 0, 120).
                delta = rawEvent.wheelDelta / 120;
                // In Opera, value is negated.
                //if (Sys.Browser.agent === Sys.Browser.Opera) delta = -delta;
            }
            else if (rawEvent.detail) {
                // Firefox uses detail property, which is a multiple of 3.
                delta = -rawEvent.detail / 3;
            }
            if (delta > 0)
                this._modifyValue(true);
            else if (delta < 0)
                this._modifyValue(false);
        },

        _addListHover: function () {
            this._addSelected();
            this._updateScrollTop();
        },
        _addSelected: function () {
            this.ul.find("li").removeClass("e-active");
            var activeItem = this._getActiveItem();
            activeItem.addClass("e-active");
        },
        _getActiveItem: function () {
            return $(this.ul.find("li")[this._activeItem - 1]);
        },

        _timeIconClick: function (event) {
            event.preventDefault();
            if (!this.model.enabled || this.model.readOnly || this.ul.find("li").length < 1) return false;
            this._showhidePopup();
            var len = this.element.val().length;
            this._setSelection(len, len);
        },
        _showhidePopup: function () {
            if (this._getInternalEvents) return false;
            if (!this.showDropdown)
                this._showResult();
            else
                this._hideResult();
        },
        _showResult: function () {
            this._raiseEvent("beforeOpen");
            this._refreshPopup();
            if (!this.focused) this._focusElement();
            this._changeActiveEle();
            var proxy = this, sTop = this._vissibleAndCalculateTop();
            this.popupList.slideDown(this.model.enableAnimation?200:0, "easeOutQuad", function () {
                $(document).bind("mousedown", $.proxy(proxy._OnDocumentClick, proxy));
            });
            this.scrollerObj.setModel({ "scrollTop": sTop });
            this.showDropdown = true;
            this._listSize = this.ul.find("li").size();
            $(window).bind("resize", $.proxy(this._OnWindowResize, this));
            this._raiseEvent("open");
        },
        _hideResult: function () {
            if (this.showDropdown && !this._getInternalEvents) {
                this.showDropdown = false;
                this.popupList.slideUp(this.model.enableAnimation?100:0, "easeOutQuad");
                $(document).unbind("mousedown", $.proxy(this._OnDocumentClick, this));
                $(window).unbind("resize", $.proxy(this._OnWindowResize, this));
                this._raiseEvent("close");
            }
        },

        _vissibleAndCalculateTop: function () {
            this.popupList.css({ "display": "block" });  // For get the height of the popup
            var scrollTop = this._calcScrollTop();
            this.popupList.css({ "display": "none" });
            return scrollTop;
        },
        _calcScrollTop: function () {
            var ulH = this.ul.outerHeight(), liH = this.ul.find("li").outerHeight(), index, top;
            index = this.ul.find("li.e-active").index();
            top = (liH * index) - ((this.popupList.outerHeight() - liH) / 2);
            return top;
        },
        _changeActiveEle: function () {
		    if (!this.model.showPopupButton || this.popupList) return false;
            var elements = this.ul.find("li");
            var currTime = this.element.val(), firstTime = elements.first().html(), index;
            index = (this._parse(currTime) - this._parse(firstTime)) / (this.model.interval * 60000);
            index = Math.round(index);
            this._activeItem = (index == elements.length) ? index : index + 1;
            if (this._activeItem < 0 || this._activeItem > elements.length || isNaN(this._activeItem)) this._activeItem = 1;
            this._addListHover();
        },

        _OnDocumentClick: function (e) {
            if (!$(e.target).is(this.popupList) && !$(e.target).parents(".e-time-popup").is(this.popupList) &&
                !$(e.target).is(this.wrapper) && !$(e.target).parents(".e-timewidget").is(this.wrapper)) {
                this._hideResult();
            }
            else if ($(e.target).is(this.popupList) || $(e.target).parents(".e-time-popup").is(this.popupList))
                e.preventDefault();
        },
        _OnWindowResize: function (e) {
            this._refreshPopup();
        },

        _OnMouseEnter: function (e) {
            var targetEle = e.target;
            this.ul.find("li").removeClass("e-hover");
            $(targetEle).addClass("e-hover");
        },
        _OnMouseLeave: function (e) {
            this.ul.find("li").removeClass("e-hover");
        },
        _OnMouseClick: function (e) {
            e.preventDefault();
            if (this.model.enabled && !this.model.readOnly) {
                this._activeItem = $(e.target).index() + 1;
                this.ul.find("li").attr({ 'tabindex': -1, 'aria-selected': false });
                $(e.target).attr({ 'aria-selected': true, 'tabindex': 0 });
                this._addSelected();
                this._selectTimeItem($(e.target));
            }
            this._showhidePopup();
        },
        _selectTimeItem: function (ele) {
            this.element.val(ele.text());

            var flag = this._raiseChangeEvent();
            if (flag)
                this._trigger("select", { value: this.model.value,prevTime:this._previousValue });
        },

        _findCategoryPosition: function (category) {
            if (category == "least") category = this._getLeast(true);
            var pos = this._getCategoryPosition(category);
            this.start = pos.start;
            this.end = pos.end;
        },

        _getLeast: function (lower) {
            var formats = this.model.timeFormat.split(" "), sep = this.seperator, res = null;
            $(formats).each(function (i, e) {
                if (e != "tt") {
                    var times = e.split(sep);
                    if (lower) res = times[times.length - 1];
                    else res = times[0];
                }
            });
            return res;
        },

        _changeValue: function (cursor, isIncrement) {
            var preVal = this.target.value, currValue, category = this._getCategory(cursor);
            if (!category) return false;
            this._setSelection(this.start, this.end);
            currValue = this.target.value.substring(this.start, this.end);
            if (this._checkMinMax(this.target.value)) {
                if (currValue != this.ttAM && currValue != this.ttPM) {
                    currValue = this._changeCurrentValue(currValue, category, isIncrement);
                    if (category.length != 1) currValue = this._changeWhole(currValue);
                    this._findCategoryPosition(category);
                    this.model.value = this._replaceAt(this.target.value, this.start, this.end, currValue);
                    this.element.val(this.model.value);
                    this.end = this.start + currValue.toString().length;
                    this._setSelection(this.start, this.end);
                }
                else this._changeAmPm(currValue);
            }
            else {
                var timeValue = this._checkExceedRange(this.target.value);
                this._setTime(this.model[timeValue]);
                this._findCategoryPosition(category);
                this._setSelection(this.start, this.end);
            }
            // Min Max validation
            if (!this._checkMinMax(this.target.value)) {
                this.element.val(preVal);
                this._findCategoryPosition(category);
                this._setSelection(this.start, this.end);
            }
            else this._raiseChangeEvent(preVal);
        },

        _checkMinMax: function (value) {
            var res = this._checkExceedRange(value);
            return !res;
        },
        _checkExceedRange: function (value) {
            if (this.model.minTime && !this._compareTime(value, this.model.minTime, true)) return "minTime";
            if (this.model.maxTime && !this._compareTime(this.model.maxTime, value, true)) return "maxTime";
            return null;
        },

        _changeWhole: function (currValue) {
            return currValue > 9 ? "" + currValue : "0" + currValue;
        },
        _changeAmPm: function (ampm) {
            ampm = ampm == this.ttAM ? this.ttPM : this.ttAM;
            this.element.val(this._replaceAt(this.target.value, this.start, this.end, ampm));
            this._setSelection(this.start, this.end);
        },
        _changeMinute: function (isIncrement) {
            var formats = ["mm", "m"];
            var currFormat = this._getExactFormat(formats);
            if (currFormat) {
                this._findCategoryPosition(currFormat);
                var minute = Number(this.target.value.substring(this.start, this.end));
                this._getMinMax(currFormat);
                if (isIncrement) {
                    if (minute == this.max) {
                        minute = this.min;
                        this._changeHour();
                    }
                    else minute += 1;
                }
                else {
                    if (minute == this.min) {
                        minute = this.max;
                        this._changeHour();
                    }
                    else minute -= 1;
                }
                this._findCategoryPosition(currFormat);
                if (currFormat.length != 1) minute = this._changeWhole(minute);
                this.element.val(this._replaceAt(this.target.value, this.start, this.end, minute));
            }
        },
        _changeHour: function (isIncrement) {
            var formats = ["hh", "h", "HH", "H"];
            var currFormat = this._getExactFormat(formats);
            if (currFormat) {
                this._findCategoryPosition(currFormat);
                var hour = Number(this.target.value.substring(this.start, this.end));
                this._getMinMax(currFormat);
                if (isIncrement) {
                    if (hour == this.max) {
                        hour += 1;
                        this._changeMeridian();
                    }
                    else if (hour > this.max) hour = this.min;
                    else hour += 1;
                }
                else {
                    if (hour == this.min) hour = this.max + 1;
                    else if (hour > this.max) {
                        hour = this.max;
                        this._changeMeridian();
                    }
                    else hour -= 1;
                }
                this._findCategoryPosition(currFormat);
                if (currFormat.length != 1) hour = this._changeWhole(hour);
                this.element.val(this._replaceAt(this.target.value, this.start, this.end, hour));
            }
        },
        _getExactFormat: function (cate) {
            var tFormat = this.model.timeFormat;
            for (var i = 0; i < cate.length; i++) {
                if (tFormat.indexOf(cate[i]) != -1) return cate[i];
            }
            return null;
        },
        _changeMeridian: function () {
            var start = this.model.timeFormat.indexOf("tt");
            if (start != -1) {
                this._findCategoryPosition("tt");
                var meridian = this.target.value.substring(this.start, this.end);
                meridian = (meridian == this.ttAM) ? this.ttPM : this.ttAM;
                this.element.val(this._replaceAt(this.target.value, this.start, this.end, meridian));
            }
        },
        _changeCurrentValue: function (current, category, isIncrement) {
            current = Number(current);
            var c = category, step = 1, change = true;
            this._getMinMax(c);

            if (c == "hh" || c == "h" || c == "HH" || c == "H") step = this.model.hourInterval;
            else if (c == "mm" || c == "m") step = this.model.minutesInterval;
            else if (c == "ss" || c == "s") step = this.model.secondsInterval;
            if (step <= 0) return current;

            if (isIncrement) {
                if ((c == "hh" || c == "h") && current > this.max) current = this.min - 1 + step;
                else if (current < this.max) current += step;
                else {
                    change = false;
                    if (c != "hh" && c != "h") current = this.min - 1 + step;
                    else current += step;
                    this._changeAdjacent(c, isIncrement);
                }
                if ((c == "hh" || c == "h") && current == this.max + 1)
                    change && this._changeAdjacent(c, isIncrement);
                else if (current > this.max + 1) {
                    current = current - (this.max + 1);
                    change && this._changeAdjacent(c, isIncrement);
                }
                if ((c != "hh" && c != "h") && current == this.max + 1) {
                    current = this.min;
                    change && this._changeAdjacent(c, isIncrement);
                }
            }
            else {
                if ((c != "hh" && c != "h") && current > this.min) current -= step;
                else if ((c == "hh" || c == "h") && current > this.min && current <= this.max) current -= step;
                else if ((c == "hh" || c == "h") && current == this.min) current = this.max + 2 - step;
                else {
                    change = false;
                    current = this.max + 1 - step;
                    this._changeAdjacent(c, isIncrement);
                }
                if (current < this.min) {
                    current = current + (this.max + 1);
                    change && this._changeAdjacent(c, isIncrement);
                }
            }
            return current;
        },
        _changeAdjacent: function (c, isIncrement) {
            if (c == "ss" || c == "s") this._changeMinute(isIncrement);
            else if (c == "mm" || c == "m") this._changeHour(isIncrement);
            else if (c == "hh" || c == "h" || c == "HH" || c == "H") this._changeMeridian();
        },

        _valueChange: function (e) {
            this._raiseChangeEvent();
        },

        _raiseChangeEvent: function (prev) {
            prev = (prev == undefined) ? this.model.value : prev;
            this._previousValue = prev;
            if (prev == this.target.value) return false;
            if (this._checkMinMax(this.target.value)) this.isValidState = true;
            else this.isValidState = false;
            this.model.value = this.target.value;
            this._raiseEvent("change", { prevTime: this._previousValue });
            return true;
        },
        _raiseEvent: function (name) {           
            this._trigger(name, { value: this.model.value, prevTime: this._previousValue });
        },
        _checkIE7: function () {
            if (navigator.appName == 'Microsoft Internet Explorer') {
                var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})"), version = -1;
                if (re.exec(navigator.userAgent) != null)
                    version = parseFloat(RegExp.$1);
                if (version >= 7 && version < 8) return true;
            }
            return false;
        },
        _replaceAt: function (mainString, from, to, replace) {
            return mainString.substring(0, from) + replace + mainString.substring(to);
        },
        _localizeTime: function (value) {
            return $.trim(Globalize.format(this._createObject(value), this.model.timeFormat, this.model.locale));
        },
        _localizeMeridian: function (value) {
            return $.trim(Globalize.format(this._createObject(value), "tt", this.model.locale));
        },
        _compareTime: function (time1, time2, orEqual) {
            orEqual = (!orEqual) ? false : true;
            if (orEqual) return this._parse(time1) >= this._parse(time2);
            else return this._parse(time1) > this._parse(time2);
        },
        _isValid: function (time) {
            time = this._createObject(time);
            return time && typeof time.getTime === "function" && isFinite(time.getTime());
        },
        _parse: function (time) {
            return Date.parse(this._createObject(time));
        },
        _setEmptyDate: function (date) {
            var newDate = new Date(date);
            newDate.setDate(1);
            newDate.setMonth(0);
            newDate.setFullYear(2000);
            return newDate;
        },
        _createObject: function (value) {
            if (typeof value === "string" || value == null) {
                var obj = Globalize.parseDate("1/1/2000 " + value, "d/M/yyyy " + this.model.timeFormat);
                if (!obj) obj = new Date("1/1/2000 " + value);
                return obj;
            }
            else if (typeof value === "number")
                return new Date(value);
            else if (value instanceof Date)
                return this._setEmptyDate(value);
        },

        //-------------------- Event Wire-up -------------------------//
        _wireEvents: function () {
            this._on(this.element, "focus", this._targetFocus);
            this._on(this.element, "blur", this._targetBlur);
            this._on(this.element, "mousedown", this._mouseDownOnInput);
            this._on(this.element, "keydown", this._keyDownOnInput);
            this._on(this.element, "keyup", this._keyUpOnInput);
        }
    });
})(jQuery, Syncfusion);;