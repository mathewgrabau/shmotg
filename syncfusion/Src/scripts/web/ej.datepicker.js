/*!
*  filename: ej.datepicker.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin provides support to display calendar within your web page and allows to pick the date.
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
	* @classdesc Date selection with the input field.
	* @class ejDatePicker
	* @param {object} options - settings for Date Picker.
	* @requires jQuery
    * @requires jquery.easing.1.3.js
    * @requires jquery.globalize.js
    * @requires globalize.cultures.min.js
	* @requires ej.core.js
	* @requires ej.datepicker.js
	* @example 
	* &lt;input type="text" id="datepicker" /&gt;
	* &lt;script&gt;
	* // Create DatePicker
    * $("#datepicker").ejDatePicker();
	* &lt;/script&gt;
	*/

    ej.widget("ejDatePicker", "ej.DatePicker", /** @lends ejDatePicker# */ {
        // widget element will be automatically set in this
        element: null,
        _rootCss: "e-datepicker",
        // user defined model will be automatically set in this
        model: null,
        validTags: ["input", "div", "span"],
        _setFirst: false,
		_cancelValue: false,
        type: "editor",

        // default model
        defaults:/** @lends ejDatePicker# */{
            /**		
			* Specifies the header format of days in short, longer or min types. See {@link Header}
			* @default ej.DatePicker.Header.ShowHeaderMin
			* @type {String | Enum}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set dayHeaderFormat API value during initialization  
			* 	$("#datepicker").ejDatePicker({  dayHeaderFormat: ej.DatePicker.Header.ShowHeaderShort });
			* &lt;/script&gt;
			* @memberof ejDatePicker
			* @instance
			*/
            dayHeaderFormat: "showheadermin",

            /**		
			* Shows the date icon button at right side of textbox and shows DatePicker popup on clicking it.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set showPopupButton API during initialization  
			* 	$("#datepicker").ejDatePicker({  showPopupButton: false });
			* &lt;/script&gt;
			* @memberof ejDatePicker
			* @instance
			*/
            showPopupButton: true,
			enableAnimation: true,
            /**		
			* It allows to show footer in DatePicker calendar to select today date.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set showFooter API during initialization  
			* 	$("#datepicker").ejDatePicker({  showFooter: false });
			* &lt;/script&gt;
			 * @memberof ejDatePicker
			* @instance
			*/
            showFooter: true,

            /**		
			* Allows to embed the DatePicker in the page. Also associate DatePicker with div element instead of input.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set displayInline API during initialization  
			* 	$("#datepicker").ejDatePicker({  displayInline: true });
			* &lt;/script&gt;
			 * @memberof ejDatePicker
			* @instance
			*/
            displayInline: false,

            /**		
			* Specifies the date format to be displayed in the input textbox of Datepicker. The selected Datepicker value will be displayed in specified date format.
			* @default "MM/dd/yyyy"
			* @type {String}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set dateFormat API during initialization  
			* 	$("#datepicker").ejDatePicker({  dateFormat: "dd/MM/yyyy" });
			* &lt;/script&gt;
			 * @memberof ejDatePicker
			* @instance
			*/
            dateFormat: '',

            /**		
			* Specifies the water mark text to be display in input text.
			* @default "Select date"
			* @type {String}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set watermarkText during initialization  
			* 	$("#datepicker").ejDatePicker({  watermarkText: "Enter date" });
			* &lt;/script&gt;
			 * @memberof ejDatePicker
			* @instance
			*/
            watermarkText: "Select date",

            /**		
			* Allow to display default date value in input textbox.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set displayDefaultDate API during initialization  
			* 	$("#datepicker").ejDatePicker({  displayDefaultDate: true });
			* &lt;/script&gt;
			* @memberof ejDatePicker
			* @instance
			*/
            displayDefaultDate: true,

            /**		
			* Specifies the selected date value.
			* @default null
			* @type {String | DateObject}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set the datepicker value during initialization  
			* 	$("#datepicker").ejDatePicker({  value: new Date("5/5/2014") });
			* &lt;/script&gt;
			 * @memberof ejDatePicker
			* @instance
			*/
            value: null,

           /**		
           * Specifies the minimum date range to be displayed in DatePicker calendar.
           * @default new Date(1900, 00, 01)
           * @type {String | DateObject}
           * @example 
		   * &lt;input type="text" id="datepicker" /&gt;
	       * &lt;script&gt;
           * //To set minDate value during initialization  
           * 	$("#datepicker").ejDatePicker({  minDate: new Date("5/1/2013") });
           * &lt;/script&gt;
            * @memberof ejDatePicker
           * @instance
           */
            minDate: new Date(1900, 00, 01),

            /**		
           * Specifies the maximum date range to be displayed in DatePicker calendar.
           * @default new Date(2099, 11, 31)
           * @type {String | DateObject}
           * @example 
		   * &lt;input type="text" id="datepicker" /&gt;
	       * &lt;script&gt;
           * //To set maxDate value during initialization  
           * 	$("#datepicker").ejDatePicker({  maxDate : new Date("5/30/2015") });
           * &lt;/script&gt;
            * @memberof ejDatePicker
           * @instance
           */
            maxDate: new Date(2099, 11, 31),

            /**		
			* Specifies the start level view in DatePicker calendar. See {@link Level}
			* @default ej.DatePicker.Level.Month
			* @type {String | Enum}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set startLevel API during initialization  
			* 	$("#datepicker").ejDatePicker({  startLevel: ej.DatePicker.Level.Year });
			* &lt;/script&gt;
			* @memberof ejDatePicker
			* @instance
			*/
            startLevel: "month",

            /**		
			* Specifies the start level view in DatePicker calendar. See {@link Level}
			* @default ""
			* @type {String | Enum}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set depthLevel API during initialization  
			* 	$("#datepicker").ejDatePicker({  depthLevel: ej.DatePicker.Level.Year });
			* &lt;/script&gt;
			 * @memberof ejDatePicker
			* @instance
			*/
            depthLevel: "",

            /**		
			* Set the root class for DatePicker theme. This cssClass API helps to use custom skinning option for DatePicker control. 
			* @default ""
			* @type {String}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set cssClass API during initialization  
			* 	$("#datepicker").ejDatePicker({  cssClass: "gradient-lime" });
			* &lt;/script&gt;
			 * @memberof ejDatePicker
			* @instance
			*/
            cssClass: "",

            /**		
			* Specifies the start day of the week in DatePicker calendar.
			* @default 1
			* @type {Number}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set startDay API during initialization  
			* 	$("#datepicker").ejDatePicker({  startDay: 2 });
			* &lt;/script&gt;
			 * @memberof ejDatePicker
			* @instance
			*/
            startDay: 0,

            /**		
			* Specifies the number of months to navigate at one click in next and previous button.
			* @default 1
			* @type {Number}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set stepMonths API during initialization  
			* 	$("#datepicker").ejDatePicker({  stepMonths: 2 });
			* &lt;/script&gt;
			 * @memberof ejDatePicker
			* @instance
			*/
            stepMonths: 1,

            /**		
			* Culture the language of DatePicker calendar.
			* @default "en-US"
			* @type {String}
			* @example 
		    * &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set locale API during initialization  
			* 	$("#datepicker").ejDatePicker({  locale: "en-US" });
			* &lt;/script&gt;
			 * @memberof ejDatePicker
			* @instance
			*/
            locale: "en-US",

            /**		
			* It allows to show days in other months of DatePicker calendar.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set showOtherMonths API during initialization  
			* 	$("#datepicker").ejDatePicker({  showOtherMonths: false });
			* &lt;/script&gt; 
			 * @memberof ejDatePicker
			* @instance
			*/
            showOtherMonths: true,

            /**		
			* When enableStrictMode true it allows the value outside of the range also, otherwise it internally changed to the correct value.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set enableStrictMode API during initialization  
			* 	$("#datepicker").ejDatePicker({  enableStrictMode: true });
		    * &lt;/script&gt; 
			 * @memberof ejDatePicker
			* @instance
			*/
            enableStrictMode: false,

            /**		
			* Enables or disables the state maintenance of DatePicker.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set enablePersistence API during initialization  
			* 	$("#datepicker").ejDatePicker({  enablePersistence: true });
			* &lt;/script&gt; 
			 * @memberof ejDatePicker
			* @instance
			*/
            enablePersistence: false,

            /**		
			* Enables or disables the datepicker control.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set enabled API during initialization  
			* 	$("#datepicker").ejDatePicker({  enabled: false });
			* &lt;/script&gt;
			 * @memberof ejDatePicker
			* @instance
			*/
            enabled: true,

            /**		
			* Specifies the width of the datepicker input text.
			* @default "160px"
			* @type {String}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set width API during initialization  
			* 	$("#datepicker").ejDatePicker({  width: 200 });
			* &lt;/script&gt; 
			 * @memberof ejDatePicker
			* @instance
			*/
            width: "",

            /**		
			* Specifies the height of the datepicker input text.
			* @default "28px"
			* @type {String}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set height API during initialization  
			* 	$("#datepicker").ejDatePicker({  height: 35 });
			* &lt;/script&gt; 
			 * @memberof ejDatePicker
			* @instance
			*/
            height: "",

            /**		
			* Display Right to Left direction of DatePicker calendar and input box.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set enableRTL API during initialization  
			* 	$("#datepicker").ejDatePicker({  enableRTL : true });
			* &lt;/script&gt;
			 * @memberof ejDatePicker
			* @instance
			*/
            enableRTL: false,

            /**		
			* DatePicker input will be displayed in rounded corner style, when this property is set to true.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set showRoundedCorner API during initialization  
			* 	$("#datepicker").ejDatePicker({  showRoundedCorner : true });
			* &lt;/script&gt;
			 * @memberof ejDatePicker
			* @instance
			*/
            showRoundedCorner: false,

            /**		
			* Specifies the header format to be displayed in the pop up of Datepicker.
			* @default "MMMM yyyy"
			* @type {String}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set headerFormat API during initialization  
			* 	$("#datepicker").ejDatePicker({  headerFormat : "MMMM yy" });
			* &lt;/script&gt; 
			 * @memberof ejDatePicker
			* @instance
			*/
            headerFormat: 'MMMM yyyy',

            /**		
			* Set the text name for the today button in the datepicker popup. 
			* @default "Today"
			* @type {String}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set buttonText API during initialization  
			* 	$("#datepicker").ejDatePicker({  buttonText : "Now" });
			* &lt;/script&gt;
			* @memberof ejDatePicker
			* @instance
			*/
            buttonText: 'Today',

            /**		
			* Indicates that the datepicker value can only be read. 
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
			* //To set readOnly API during initialization  
			* 	$("#datepicker").ejDatePicker({  readOnly : true });
			* &lt;/script&gt; 
			* @memberof ejDatePicker
			* @instance
			*/
            readOnly: false,
            /**		
           * Specify the special dates in datepicker
           * @default null
           * @type {object}
           * @example 
           * &lt;input type="text" id="datepicker" /&gt;
           * &lt;script&gt;
           * //To set specialDates API value during initialization             
		   * // declaration
           *$("#datepicker").ejDatePicker({specialDates:window.spldays});
           * &lt;/script&gt;
           * @memberof ejDatePicker
           * @instance
           */
            specialDates: null,
            /**		
        * Specify the fields mapping in datepicker
        * @default null
        * @type {object}
        * @example 
        * &lt;input type="text" id="datepicker" /&gt;
        * &lt;script&gt;
        * //To set fields API value during initialization         
        * // declaration
        * $("#datepicker").ejDatePicker({	
        * specialDates: window.spldays, fields: {date:"date",tooltip:"tooltip",icon:"icon"}});
        * &lt;/script&gt;
        * @memberof ejDatePicker
        * @instance
        */
            fields: {
                date: "date",
                tooltip: "tooltip",
                icon: "icon",
            },
            /**		
             * DatePicker Tooltip will be displayed, when this property is set to true.
             * @default true
             * @type {Boolean}
             * @example 
             * &lt;input type="text" id="datepicker" /&gt;
             * &lt;script&gt;
             * //To set tooltip API during initialization  
             * 	$("#datepicker").ejDatePicker({  showTooltip : false });
             * &lt;/script&gt;
              * @memberof ejDatePicker
             * @instance
             */
            showTooltip: true,
           /**		
           * HighlightSection used to highlight current month, week, workdays. See {@link HighlightSection}
           * @default "none"
           * @type {String | Enum}
           * @example 
           * &lt;input type="text" id="datepicker" /&gt;
           * &lt;script&gt;
           * //To set highlightSection API during initialization  
           * 	$("#datepicker").ejDatePicker({  highlightSection: "week" });
           * &lt;/script&gt;
           * @memberof ejDatePicker
           * @instance
           */
            highlightSection: "none",
            /**		
            * Week end will be displayed in bold, when this property is set to true.
            * @default false
            * @type {Boolean}
            * @example 
            * &lt;input type="text" id="datepicker" /&gt;
            * &lt;script&gt;
            * //To set highlightWeekend API during initialization  
            * 	$("#datepicker").ejDatePicker({  highlightWeekend : true });
            * &lt;/script&gt;
             * @memberof ejDatePicker
            * @instance
            */
            highlightWeekend: false,

            /**     
            * Fires when DatePicker popup opened.
            * @event
            * @name ejDatePicker#open 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the datepicker model
            * @param {string}  argument.type returns the name of the eventclose"
            * @param {string}  argument.value returns the current date value
            * @param {string}  argument.prevDate returns the previously selected value
            * @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
            * //open event for datepicker
            * $("#datepicker").ejDatePicker({
            *    open: function (args) {}
            * });  
		    * &lt;/script&gt;				
            * @memberof ejDatePicker
            * @instance
            */
            open: null,

            /**     
            * Fires when DatePicker popup closed.
            * @event
            * @name ejDatePicker#close 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the datepicker model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.value returns the current date value
            * @param {string}  argument.prevDate returns the previously selected value
            * @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
            * //close event for datepicker
            * $("#datepicker").ejDatePicker({
            *    close: function (args) {}
            * });   
		    * &lt;/script&gt;				
            * @memberof ejDatePicker
            * @instance
            */
            close: null,

            /**     
            * Fires when a date is selected from the datepicker popup.
            * @event
            * @name ejDatePicker#select 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the datepicker model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.value returns the current date value
            * @param {string}  argument.prevDate returns the previously selected value
            * @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
            * //select event for datepicker
            * $("#datepicker").ejDatePicker({
            *    select: function (args) {}
            * }); 
		    * &lt;/script&gt;				
            * @memberof ejDatePicker
            * @instance
            */
            select: null,

            /**     
            * Fires when the datepicker input value is changed.
            * @event
            * @name ejDatePicker#change 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the datepicker model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.value returns the datepicker input value
            * @param {string}  argument.prevDate returns the previously selected value
            * @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
            * //change event for datepicker
            * $("#datepicker").ejDatePicker({
            *    change: function (args) {}
            * });  
		    * &lt;/script&gt;				
            * @memberof ejDatePicker
            * @instance
            */
            change: null,

            /**     
            * Fires when datePicker input gets focus.
            * @event
            * @name ejDatePicker#focusIn 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the datepicker model
            * @param {string}  argument.type returns the name of the event
            * @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
            * //focusIn event for datepicker
            * $("#datepicker").ejDatePicker({
            *    focusIn: function (args) {}
            * }); 
		    * &lt;/script&gt;				
            * @memberof ejDatePicker
            * @instance
            */
            focusIn: null,

            /**     
            * Fires when datePicker input losses the focus.
            * @event
            * @name ejDatePicker#focusOut 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the datepicker model
            * @param {string}  argument.type returns the name of the event
            * @example 
			* &lt;input type="text" id="datepicker" /&gt;
	        * &lt;script&gt;
            * //focusOut event for datepicker
            * $("#datepicker").ejDatePicker({
            *    focusOut: function (args) {}
            * });
		    * &lt;/script&gt;				
            * @memberof ejDatePicker
            * @instance
            */

            focusOut: null,           

			/**     
          * Fires when create DatePicker successfully.
          * @event
          * @name ejDatePicker#create 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the DatePicker model
          * @param {string}  argument.type returns the name of the event
          * @example 
			* &lt;input type="text" id="datepicker" /&gt;
			* &lt;script&gt;
			* //create event for datepicker
            * $("#datepicker").ejDatePicker({
            *    create: function (args) {}
            * });
		  * &lt;/script&gt;				
          * @memberof ejDatePicker
          * @instance
          */
            create: null,
			/**     
          * Fires when the DatePicker is destroyed successfully.
          * @event
          * @name ejDatePicker#destroy 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the DatePicker model
          * @param {string}  argument.type returns the name of the event
          * @example 
			* &lt;input type="text" id="datepicker" /&gt;
			* &lt;script&gt;
			* //destroy event for datepicker
            * $("#datepicker").ejDatePicker({
            *    destroy: function (args) {}
            * }); 
		  * &lt;/script&gt;			
          * @memberof ejDatePicker
          * @instance
          */
            destroy: null


        },

        /**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            startDay: "number",
            stepMonths: "number",
            showOtherMonths: "boolean",
            enableStrictMode: "boolean",
            showRoundedCorner: "boolean",
            enableRTL: "boolean",
            displayDefaultDate: "boolean",
            displayInline: "boolean",
            showPopupButton: "boolean",
            locale: "string",
            readOnly: "boolean",
            cssClass: "string",
            dateFormat: "string",
            watermarkText: "string",
            headerFormat: "string",
            buttonText: "string",
            specialDates: "data",
            showTooltip: "boolean",
            highlightSection: "enum",
            highlightWeekend: "boolean",
			enableAnimation: "boolean",          

        },

        _setModel: function (jsondata) {
            if (!(this.model.enabled) && ej.isNullOrUndefined(jsondata["enabled"])) return false;
            var callRefresh = false, start = false, validate = false;
            for (var key in jsondata) {
                switch (key) {
                    case "dayHeaderFormat":
                        this.model.dayHeaderFormat = jsondata[key];
                        callRefresh = true;
                        break;
                    case "showPopupButton":
                        this._renderDateIcon(jsondata[key], true);
                        break;
                    case "displayInline":
                        this._setDisplayInline(jsondata[key]);
                        break;
                    case "value":
                        this._setDateValue(jsondata[key]);
                        jsondata[key] = this.model.value;
                        validate = true;
                        callRefresh = true;
                        break;
                    case "specialDates":
                        this.model.specialDates = jsondata[key];
                        this._createSpecialDateObject();
                        callRefresh = true;
                        break;
                    case "fields":
                        this.model.fields = jsondata[key];
                        this._mapField = this._getMapper();
                        callRefresh = true;
                        break;
                    case "showTooltip":
                        this.model.showTooltip = jsondata[key];
                        callRefresh = true;
                        break;
                    case "highlightWeekend":
                        this.model.highlightWeekend = jsondata[key];
                        callRefresh = true;
                        break;
                    case "highlightSection":
                        this.model.highlightSection = jsondata[key];                        
                        callRefresh = true;
                        break;
                    case "dateFormat":
                        this.model.dateFormat = jsondata[key];
                        this._setDateValue(this.model.value);
                        break;
                    case "minDate":
                        this._setMinDate(jsondata[key]);
                        jsondata[key] = this.model.minDate;
                        validate = true;
                        callRefresh = true;
                        break;
                    case "maxDate":
                        this._setMaxDate(jsondata[key]);
                        jsondata[key] = this.model.maxDate;
                        validate = true;
                        callRefresh = true;
                        break;
                    case "locale":
                        this.model.locale = jsondata[key];
                        this.model.dateFormat = '';
                        this._setCulture(jsondata[key]);
                        this._setDateValue(this.model.value);
                        callRefresh = true;
                        break;
                    case "showOtherMonths":
                        this.model.showOtherMonths = jsondata[key];
                        this._otherMonthsVisibility();
                        break;
                    case "enableStrictMode":
                        this.model.enableStrictMode = jsondata[key];
                        validate = true;
                        callRefresh = true;
                        break;
                    case "readOnly":
                        this.model.readOnly = jsondata[key];
                        this._disbleMaualInput();
                        break;
                    case "width":
                        this._setWidth(jsondata[key]);
                        break;
                    case "height":
                        this._setHeight(jsondata[key]);
                        break;
                    case "cssClass":
                        this._setSkin(jsondata[key]);
                        break;
                    case "enableRTL":
                        this._setRTL(jsondata[key]);
                        break;
                    case "showRoundedCorner":
                        this._setRoundedCorner(jsondata[key]);
                        break;
                    case "enabled":
                        if (!jsondata[key]) this.disable();
                        else this.enable();
                        break;
                    case "buttonText":
                        this._setFooterText(jsondata[key]);
                        break;
                    case "showFooter":
                        this._enableFooter(jsondata[key]);
                        break;
                    case "watermarkText":
                        this.model.watermarkText = jsondata[key]; this._setWaterMark();
                        break;
                    case "startDay":
                        if (parseInt(jsondata[key]) < 0 || parseInt(jsondata[key]) > 6) jsondata[key] = 0;
                        this.model.startDay = jsondata[key];
                        callRefresh = true;
                        break;
                    case "startLevel":
                        this.model.startLevel = jsondata[key]; start = true;
                        callRefresh = true;
                        break;
                    case "headerFormat":
                        this.model.headerFormat = jsondata[key];
                        callRefresh = true;
                        break;
                    case "depthLevel":
                        this.model.depthLevel = jsondata[key]; start = true;
                        callRefresh = true;
                        break;
					case "enableAnimation":
							this.model.enableAnimation=options[key];
                        break;
                
                }
            }
            if (validate) {
                this._validateMinMaxDate();
                jsondata["value"] = this.model.value;
                jsondata["maxDate"] = this.model.maxDate;
                jsondata["minDate"] = this.model.minDate;
            }
            this._setWaterMark();

            if (callRefresh && this.isValidState )
                this._refreshDatepicker();            
            if (start) this._startLevel(this.model.startLevel);
            this._triggerChangeEvent();
            this._checkErrorClass();
        },
        observables: ["value"],
        // all events bound using this._on will be unbind automatically
        _destroy: function () {
            this.sfCalendar.remove();
            if (this.wrapper) {
                this.element.insertAfter(this.wrapper);
                this.wrapper.remove();
            }
            this.element.removeClass('e-datepicker e-input');
        },
        // constructor function
        _init: function () {
            this._setValues();
            this._createDatePicker();
        },
        //------------------------------Private Methods---------------------------------------------
        _setValues: function () {
            this.Date = new Date();
            this._id = this.element[0].id;
            this.isValidState = true;
            this._setCulture(this.model.locale);
            this._setMinDate(this.model.minDate);
            this._setMaxDate(this.model.maxDate);
            this._calendarDate = this._zeroTime(new Date());
            if (this.model.startDay < 0 || this.model.startDay > 6) this.model.startDay = 0;
            this.Date.firstDayOfWeek = this.model.startDay;
            this.Date.fullYearStart = '20';
            this._showHeader = true,
            this._validateMinMaxDate();
            this._dateValue = new Date(this._calendarDate.toString());
            this._isIE7 = this._checkIE7();
            // this variable is set to true in DateTimePicker control
            this._getInternalEvents = false;
            this._flag = true;
            this._ejHLWeekEnd = false;
            this._isOpen = false;
            this._prevDate = null;
            this._isFocused = false;
        },

        _createDatePicker: function () {
            this._createWrapper();
            this._wireEvents();
            if (this.model.displayInline)
                this.show();
            if (this.model.enableRTL) this._setRTL(true);
            if (this.model.showRoundedCorner) this._setRoundedCorner(true);
        },
        _checkNameAttr: function () {
            if (this.element.attr("name"))
                this._hiddenInput.attr("name", this.element.attr("name"));
            else {
                this._hiddenInput.attr("name", this.element[0].id);
				this.element.attr("name", this.element[0].id);
			}
        },
        _createWrapper: function () {
            this._mapField = this._getMapper();
            if (this.model.specialDates) {
                this._createSpecialDateObject();
            }
            if (this._isInputBox()) {
                this.element.addClass("e-input").attr({ 'aria-atomic': 'true', 'aria-live': 'assertive', 'tabindex': '0' }); //
                this.wrapper = ej.buildTag("span.e-datewidget e-widget " + this.model.cssClass);
                this.innerWrapper = ej.buildTag("span.e-in-wrap e-box");
                this.wrapper.append(this.innerWrapper).insertBefore(this.element);
                this.innerWrapper.append(this.element);
                this.innerWrapper.addClass('e-padding');
                this.dateIcon = ej.buildTag("span.e-select#" + this._id + "-img", "", null)
                    .append(ej.buildTag("span.e-icon e-date", "", {}, { 'aria-label': 'Select' })).insertAfter(this.element);
            }
            this._hiddenInput = ej.buildTag("input#" + this._id + "_hidden", "", {}, { type: "hidden" }).insertBefore(this.element);
            this._checkNameAttr();
            this._setHeight(this.model.height);
            if (this.model.width != "") this._setWidth(this.model.width);
			var oldWrapper = $("#e-" + this.element.context.id).get(0);
            if (oldWrapper)
                $(oldWrapper).remove();
            this.sfCalendar = ej.buildTag('div.e-datepicker e-popup e-widget ' + this.model.cssClass + ' e-calendar ' + (this.model.specialDates ? (this.model.specialDates[0][this._mapField._icon] ? 'e-icons ' : '') : ''), "", {}, { id: 'e-' + this._id }).attr({ 'aria-hidden': 'true' })
                .insertBefore(this.element);
            this.popup = this.sfCalendar;
            this._resizeCalender();
            if (this.model.displayDefaultDate) this._setDateValue(this.model.value);
            this._preValue = this._textboxVal();
            this._setWaterMark();
            this._createCalender();
            this._setDisplayInline(this.model.displayInline);
            if (this.model.readOnly) this._disbleMaualInput();
            if (!this.model.enabled) this.disable();
            this._layoutChanged();
            this._checkErrorClass();
        },
        _isInputBox: function () {
            return (this.element.is("input") && (this.element.is("input[type=text]") || !this.element.attr('type')));
        },

        _renderDateIcon: function (bool, reRender) {
            if (reRender && this.model.showPopupButton == bool) return;
            if (!bool && this.dateIcon) {
                this.dateIcon.css('display', 'none');
                this.innerWrapper.removeClass('e-padding');
                this._bindInputEvent();
            }
            else {
                if (this.innerWrapper) {
                    this.innerWrapper.addClass('e-padding');
                    this.dateIcon.css('display', 'block');
                }
                if (!this.model.displayInline)
                    this._bindDateButton();
            }
            this.model.showPopupButton = bool;
        },

        _resizeCalender: function () {
            if (this.model.dayHeaderFormat == "showheadershort")
                this.sfCalendar.removeClass("e-headerlong");
            else if (this.model.dayHeaderFormat == "showheaderlong") {
                this.sfCalendar.addClass("e-headerlong");
            }
        },

        _setWidth: function (value) {
            if (this.wrapper) this.wrapper.width(value);
            else this.element.width(value);
        },
        _setHeight: function (value) {
            if (value) {
                if (this.wrapper) this.wrapper.height(value);
                else this.element.height(value);
            }
            if (this._isIE7) this.element.height(this.innerWrapper.height());
        },
        _setRTL: function (isRTL) {
            if (isRTL) {
                if (this.model.showPopupButton && this.wrapper)
                    this.wrapper.addClass("e-rtl");
                else this.element.addClass("e-rtl");
                this.sfCalendar.addClass("e-rtl");
            }
            else {
                if (this.model.showPopupButton && this.wrapper)
                    this.wrapper.removeClass("e-rtl");
                else this.element.removeClass("e-rtl");
                this.sfCalendar.removeClass("e-rtl");
            }
        },
        _setRoundedCorner: function (bool) {
            if (bool) {
                if (this.innerWrapper) this.innerWrapper.addClass("e-corner-all");
                this.sfCalendar.addClass("e-corner-all");
            }
            else {
                if (this.innerWrapper) this.innerWrapper.removeClass("e-corner-all");
                this.sfCalendar.removeClass("e-corner-all");
            }
        },

        _refreshDatepicker: function () {
            this._setDateValue(this._textboxVal());
            $(".e-text", this.sfCalendar).text(this._asString(this._calendarDate, this.model.headerFormat));
            this._resizeCalender();
            this._dateValue = new Date(this._calendarDate.toString());
            this._hoverDate = this._calendarDate.getDate() - 1;
            this._renderCalendar(this, this._dateValue);
            this._setFooterText(this.model.buttonText);
            this._enableFooter(this.model.showFooter);
            this._layoutChanged();
        },
        _setFooterText: function (footerText) {
            $('.e-footer-text', this.sfCalendar).html(footerText);
        },
        _setSkin: function (skin) {
            if (this.wrapper) {
                this.wrapper.removeClass(this.model.cssClass);
                this.wrapper.addClass(skin);
            }
            else {
                this.element.removeClass(this.model.cssClass);
                this.element.addClass(skin);
            }
            this.sfCalendar.removeClass(this.model.cssClass);
            this.sfCalendar.addClass(skin);
        },
        _setDisplayInline: function (isDisplayInline) {
            this.model.displayInline = isDisplayInline;
            if (isDisplayInline && this._isInputBox()) {
                this.sfCalendar.insertAfter(this.wrapper);
                this._setDatePickerPosition();
            }
            else if (isDisplayInline) {
                this.element.append(this.sfCalendar);
            }
            else {
                this.sfCalendar.css('display', 'none');
                $('body').append(this.sfCalendar);
                this._isOpen = false;
            }
            if (isDisplayInline) {
                this.show();
                this._off($(this.dateIcon, this.wrapper), "click", $.proxy(this._showDatePopUp, this));
                this.element.unbind("click", $.proxy(this._showDatePopUp, this));
            }
            else this._renderDateIcon(this.model.showPopupButton, false);
        },
        /*Disabling Manual input */
        _disbleMaualInput: function () {
            if (this.model.readOnly) {
                $(this.element).attr("readonly", "readonly");
                if (!this.model.displayInline) this.hide();
            }
            else {
                $(this.element).removeAttr("readonly");
            }
        },
        _checkDateObject: function (date) {
            if (!date || (typeof JSON === "object" && JSON.stringify(date) === "{}")) return date = "";
            else if (!(date instanceof Date)) {
                var val = this._parseDate(date);
                date = (val != null) ? val : ((this._prevDate == null) ? ((this._textboxVal() != date && this._textboxVal() == "") ? new Date(date) :null) : null);
            }
            if (!isNaN(Date.parse(date))) return this._dateValue = this._calendarDate = this._zeroTime(date);
            return null;
        },
        _checkInstanceType: function (date) {
            date = this._stringToObject(date);
            if (!date) return null;
            else if (!(date instanceof Date)) {
                date = this._parseDate(date);
            }
            if (!isNaN(Date.parse(date))) return this._zeroTime(date);
            return null;
        },
        _stringToObject: function (value) {
            if (typeof value === "string") {
                var val = Globalize.parseDate(value, this.model.dateFormat);
                value = (val != null) ? val : new Date(value);
            }
            return value;
        },
        _validateMinMaxDate: function () {
            var dateChange = false, valueExceed = false;
            if (this.model.maxDate < this.model.minDate) this.model.minDate = this.model.maxDate;
            if (!this.model.enableStrictMode) {
                if (this.model.value) {
                    if (this.model.value < this.model.minDate) {
                        this._calendarDate = this.model.value = this.model.minDate;
                        dateChange = true;
                    }
                    else if (this.model.value > this.model.maxDate) {
                        this._calendarDate = this.model.value = this.model.maxDate;
                        dateChange = true;
                    }
                }
                else {
                    this.element.val("");
                    if (this._calendarDate < this.model.minDate) this._calendarDate = this.model.minDate;
                    else if (this._calendarDate > this.model.maxDate) this._calendarDate = this.model.maxDate;
                }
                this.isValidState = true;
            }
            else {
                if (this.model.value) {
                    if (this.model.value < this.model.minDate) {
                        this._calendarDate = this.model.minDate;
                        this.isValidState = false;
                        valueExceed = true;
                    }
                    else if (this.model.value > this.model.maxDate) {
                        this._calendarDate = this.model.maxDate;
                        this.isValidState = false;
                        valueExceed = true;
                    }
                    else this.isValidState = true;
                }
                else {
                    if (this._calendarDate < this.model.minDate) this._calendarDate = this.model.minDate;
                    else if (this._calendarDate > this.model.maxDate) this._calendarDate = this.model.maxDate;
                }
            }
            if (dateChange) this.element.val(this._formatter(this.model.value, this.model.dateFormat));
            if (valueExceed && this._getInternalEvents) this._trigger("outOfRange");
        },
        _setCulture: function (culture) {
            this.culture = Globalize.culture(culture);
            if (this.culture) {
                this.Date.dayNames = this.culture.calendar.days.names;
                this.Date.dayNamesMin = this.culture.calendar.days.namesShort;
                this.Date.abbrDayNames = this.culture.calendar.days.namesAbbr;
                this.Date.monthNames = this.culture.calendar.months.names;
                this.Date.abbrMonthNames = this.culture.calendar.months.namesAbbr;
                this.Date.format = this.culture.calendar.patterns.d;
                if (this.model.dateFormat == '') this.model.dateFormat = this.culture.calendar.patterns.d;
            } else {
                this.Date.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                this.Date.dayNamesMin = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
                this.Date.abbrDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                this.Date.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                this.Date.abbrMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                this.Date.format = 'MM/dd/yyyy';
                if (this.model.dateFormat == '') this.model.dateFormat = 'MM/dd/yyyy';
            }
            this._separator = this._getSeparator();
        },
        /* Set Water Mark Text */
        _setWaterMark: function () {
            if (this.element != null && this.element.hasClass("e-input") && this._textboxVal() == "" && this.model.watermarkText) {
                this.isValidState = true;
                this._checkErrorClass();
                this.element.addClass("e-watermark").val(this.model.watermarkText);
                this.model.value = null;
                return true;
            }
        },
        _setDatePickerPosition: function () {
            var pos = this.wrapper.offset();
            var left = pos.left;
            var totalHeight = this.wrapper.outerHeight();
            var maxZ = this._getZindexPartial();
            if (this.model.enableRTL) left += this.wrapper.width() - this.sfCalendar.width();

            this.sfCalendar.css({
                "left": left + "px",
                'position': 'absolute',
                "top": (pos.top + totalHeight + 3) + "px",
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
            if (!maxZ || maxZ < 10000) maxZ = 10000;
            else maxZ += 1;
            return maxZ;
        },

        _setMinDate: function (d) {
            this.model.minDate = this._checkInstanceType(d);
            if (!this.model.minDate) {
                this.model.minDate = (new Date('11/31/1899'));
            }
        },

        _setMaxDate: function (d) {
            this.model.maxDate = this._checkInstanceType(d);
            if (!this.model.maxDate) {
                this.model.maxDate = (new Date('12/31/2099')); // using the JS Date.parse function which expects mm/dd/yyyy
            }
        },
        _setDateValue: function (date) {
            this._removeWatermark();
            var newDate = this._checkDateObject(date);
            if (newDate != null) {
                this.isValidState = true;
                if (newDate == "") {
                    this.element.val("");
                    this.model.value = "";
                } else {
                    this.model.value = newDate;
                    this._validateMinMaxDate();
                    this._preTxtValue = this.element.val(this._formatter(this.model.value, this.model.dateFormat));
                }
            }
            else {
                (typeof date === "string" && this.model.enableStrictMode) ? this.element.val(date) : this.element.val("");
                this.model.value = "";
                this.isValidState = (this._textboxVal() == "") ? true : false;
            }
            this._hiddenInput.val(this._textboxVal());
        },
        _updateInputVal: function () {
            var val = this._validateValue();
            if (val != null) {
                if (this.sfCalendar.find('.e-datepicker-days').is(':visible')) {
                    this._refreshDatepicker();
                }
                else if (this.model.displayDefaultDate) {
                    this._setDateValue(val);
                }
            }
        },
        _validateInputVal: function () {
            var val = this._validateValue();
            if (val != null) {
                if (val <= this.model.maxDate && val >= this.model.minDate)
                    this.isValidState = true;
                else {
                    this.model.value = "";
                    this.isValidState = false;
                }
            }
        },

        _validateValue: function () {
            return this._parseDate(this._textboxVal());
        },
        _getSeparator: function () {
            if (this.culture) {
                formats = this.culture.calendar.patterns.d;
            }
            else formats = this.model.dateFormat;
            var regex = new RegExp("^[a-zA-Z0-9]+$");
            for (var i = 0; i < formats.length; i++) {
                if (!regex.test(formats[i])) return formats[i];
            }
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
        _isValidDate: function (dateObj) {
            return dateObj && typeof dateObj.getTime === "function" && isFinite(dateObj.getTime());
        },
        /*----------------------------------------------region date methods------------------------------------------------------*/

        //Date formatter - Convert date object to specific date format
        _formatter: function (date, format) {
            return Globalize.format(date, format, this.model.locale);
        },
        _parseDate: function (date) {
            return Globalize.parseDate(date, this.model.dateFormat);
        },
        // Checks if the year is a leap year.
        isLeapYear: function (year) {
            return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
        },
        //Sets the time component of this Date to zero for cleaner, easier comparison of dates where time is not relevant.
        _zeroTime: function (date) {
			var newDate = typeof date === "string" ? this._parseDate(date) : new Date(date);
            newDate.setMilliseconds(0);
            newDate.setSeconds(0);
            newDate.setMinutes(0);
            newDate.setHours(0);
            return newDate;
        },
        _zeroPad: function (number) {
            // Pad a number with a zero, to make it 2 digits
            return ((number < 10) ? "0" : "") + String(number);
        },
        //Convert date object to specific format
        _formatDate: function (date) {
            return this._formatter(date, this.Date.format);
        },
        //Gets the number of days in the month.
        _getDaysInMonth: function (date) {
            return [31, (this.isLeapYear(date) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][date.getMonth()];
        },
        //Add a number of days to the date object.
        _addDays: function (d, number) {
            d.setDate(d.getDate() + number);
            return d;
        },
        //Add a number of years to the date object.
        _addYears: function (d, number) {
            d.setFullYear(d.getFullYear() + number);
            return d;
        },
        //Add a number of months to the date object.
        _addMonths: function (d, number) {
            var tempDatedateMonth = d.getDate();
            d.setMonth(d.getMonth() + number);
            if (tempDatedateMonth > d.getDate())
                this._addDays(d, -d.getDate());
            return d;
        },
        //Checks if the day is a weekend day (Sat or Sun).
        _isWeekend: function (date) {
            return date.getDay() == 0 || date.getDay() == 6;
        },

        _isSpecialDates: function (dates) {
            if (this.model.specialDates) {
                for (var i = 0; i < this.model.specialDates.length; i++) {
                    if (this.model.specialDates[i]) {
                        if (dates.getDate() == this.model.specialDates[i][this._mapField._date].getDate() && dates.getMonth() == this.model.specialDates[i][this._mapField._date].getMonth() && dates.getFullYear() == this.model.specialDates[i][this._mapField._date].getFullYear()) {
                            this._getIndex = i;
                            return true;
                        }
                    }
                }
            }
            return false;
        },
        _getMapper: function () {
            var mapper = this.model.fields, mapFld = { _date: null, _tooltip: null, _icon: null };
            mapFld._date = (mapper && mapper.date) ? mapper["date"] : "date";
            mapFld._tooltip = (mapper && mapper.tooltip) ? mapper["tooltip"] : "tooltip";
            mapFld._icon = (mapper && mapper.icon) ? mapper["icon"] : "icon";
            return mapFld;
        },
        _createSpecialDateObject: function () {
            
            for (var i = 0; i < this.model.specialDates.length; i++) {
                if (!(this.model.specialDates[i][this._mapField._date] instanceof Date))
                    this.model.specialDates[i][this._mapField._date] = this._parseDate(this.model.specialDates[i][this._mapField._date]);
            }
            
        },

        // Returns a string representation of the date object according to Date.Format.
        _asString: function (date, format) {
            var r = format || this.Date.format;
            return r
                .split('yyyy').join(date.getFullYear())
                .split('yy').join((date.getFullYear() + '').substring(2))
                .split('MMMM').join(this._getMonthName(false, date))
                .split('MMM').join(this._getMonthName(true, date))
                .split('MM').join(this._zeroPad(date.getMonth() + 1))
                .split('dd').join(this._zeroPad(date.getDate()))
                .split('hh').join(this._zeroPad(date.getHours()))
                .split('min').join(this._zeroPad(date.getMinutes()))
                .split('ss').join(this._zeroPad(date.getSeconds()));
        },
        //Gets the name of the month.
        _getMonthName: function (abbreviated, date) {
            return abbreviated ? this.Date.abbrMonthNames[date.getMonth()] : this.Date.monthNames[date.getMonth()];
        },
        _currentDay: function () {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            return new Date(mm + '/' + dd + '/' + yyyy);
        },
        /*---------------------------------------------region Basic Functionality---------------------------------------*/

        _displayNewMonth: function (m, y) {
            this._setDisplayedMonth(this.displayedMonth + m, this.displayedYear + y, true);
            return false;
        },

        _setDisplayedMonth: function (m, y, rerender) {
            if (this.model.minDate == undefined || this.model.maxDate == undefined) {
                return;
            }
            var s = new Date(this.model.minDate.getTime());
            s.setDate(1);
            var e = new Date(this.model.maxDate.getTime());
            e.setDate(1);

            var t;
            if ((!m && !y) || (isNaN(m) && isNaN(y))) {
                // no month or year passed - default to current month
                t = this._zeroTime(new Date());
                t.setDate(1);
            } else if (isNaN(m)) {
                // just year passed in - presume we want the displayedMonth
                t = new Date(y, this.displayedMonth, 1);
            } else if (isNaN(y)) {
                // just month passed in - presume we want the displayedYear
                t = new Date(this.displayedYear, m, 1);
            } else {
                // year and month passed in - that's the date we want!
                t = new Date(y, m, 1);
            }
            // check if the desired date is within the range of our defined minDate and maxDate
            if (t.getTime() < s.getTime()) {
                t = s;
            } else if (t.getTime() > e.getTime()) {
                t = e;
            }
            var oldMonth = this.displayedMonth;
            var oldYear = this.displayedYear;
            this.displayedMonth = t.getMonth();
            this.displayedYear = t.getFullYear();
            var tempDate = t;
            if (rerender && (this.displayedMonth != oldMonth || this.displayedYear != oldYear)) {
                this._renderCalendar(this, tempDate);
                this._dateValue = tempDate;
                this._trigger("monthChanged", [this.displayedMonth, this.displayedYear]);
            }
        },
        _clearSelected: function () {
            this.numSelected = 0;
            if (this.model.highlightSection == "week") {
                $('td.e-active', this.sfCalendar).removeClass('e-active').attr('aria-selected', false).parent().removeClass('e-selected-week');
            }
            else if (this.model.highlightSection == "month") {
                $('td.e-active', this.sfCalendar).removeClass('e-active').attr('aria-selected', false).parent().parent().removeClass('e-selected-month');
            }
            else if (this.model.highlightSection == "workdays") {
                $('td.e-active', this.sfCalendar).removeClass('e-active').attr('aria-selected', false).parent().removeClass('e-work-week');
            }
            else
                $('td.e-active', this.sfCalendar).removeClass('e-active').attr('aria-selected', false);

        },
        _addSelected: function () {
            if (this.model.highlightSection == "week") {
                $('td.e-active', this.sfCalendar).parent().addClass('e-selected-week');
            }
            else if (this.model.highlightSection == "month") {
                $('td.e-active, this.sfCalendar').parent().parent().addClass('e-selected-month');
            }
            else if (this.model.highlightSection == "workdays") {
                $('td.e-active', this.sfCalendar).parent().addClass('e-work-week');
            }
        },

        _hideOtherMonths: function (sfCalendar) {
            $('td.other-month', sfCalendar).css("visibility", "hidden");
        },
        _showOtherMonths: function (sfCalendar) {
            $('td.other-month', sfCalendar).css({ 'visibility': 'visible' });
        },
		_otherMonthsVisibility: function () {
            if (this.model.showOtherMonths)
				this._showOtherMonths(this.sfCalendar);
            else
                this._hideOtherMonths(this.sfCalendar);
        },


        /*---------------------Region Rendering simple calender----------------------------------------------------------*/

        _createCalender: function () {
            ej.buildTag("div.e-header")
                    .append(ej.buildTag("span.e-prev").append(ej.buildTag('a.e-icon e-left-arrow').attr({ 'role': 'button' })))
                    .append(ej.buildTag("span.e-text").text(this._asString(this._calendarDate, this.model.headerFormat)).attr({ 'aria-atomic': 'true', 'aria-live': 'assertive', 'role': 'heading' }))
                    .append(ej.buildTag("span.e-next").append(ej.buildTag('a.e-icon e-right-arrow').attr({ 'role': 'button' })))
                    .appendTo(this.sfCalendar);
            this._enableHeader(this._showHeader);
            var table = ej.buildTag("table.e-dp-viewdays", "", {}, { 'cellspacing': 2 }).data("e-table", "data").attr({ 'role': 'grid', 'aria-activedescendant': '' });
            this.sfCalendar.append(table);

            this._renderCalendar(this);
            this._startLevel(this.model.startLevel);
            ej.buildTag("div.e-footer")
                .append(ej.buildTag("span.e-footer-icon"))
                .append(ej.buildTag("span.e-footer-text"))
                .appendTo(this.sfCalendar);
            $('.e-footer-text', this.sfCalendar).html(this.model.buttonText);
            this._enableFooter(this.model.showFooter);
        },
        _enableHeader: function (show) {
            if (show) $(".e-header", this.sfCalendar).show();
            else $(".e-header", this.sfCalendar).hide();
        },
        _enableFooter: function (show) {
            if (show) $('.e-footer', this.sfCalendar).show();
            else $('.e-footer', this.sfCalendar).hide();
        },

        //Date picker navigation arrows enable/disable operations
        _checkArrows: function (min, max) {
            this._preArrowCondition(min, this.model.minDate.getFullYear());
            this._nextArrowCondition(max, this.model.maxDate.getFullYear());
        },
        _checkDateArrows: function () {
            this._preArrowCondition(this._tempMinDate, this.model.minDate);
            this._nextArrowCondition(this._tempMaxDate, this.model.maxDate);
        },
        _preArrowCondition: function (val1, val2) {
            if (val1 <= val2) this.sfCalendar.find(".e-left-arrow").addClass("e-disable").attr({ "aria-disabled": true });
            else this.sfCalendar.find(".e-left-arrow").removeClass("e-disable").attr({ "aria-disabled": false });
        },
        _nextArrowCondition: function (val1, val2) {
            if (val1 >= val2) this.sfCalendar.find(".e-right-arrow").addClass("e-disable").attr({ "aria-disabled": true });
            else this.sfCalendar.find(".e-right-arrow").removeClass("e-disable").attr({ "aria-disabled": false });
        },

        _previousNextHandler: function (event) {
            if (this.model.readOnly || !this.model.enabled) return false;
            event.preventDefault();
            var element = ($(event.target).is('a')) ? $(event.target.parentNode) : $(event.target);
            var progress = element.hasClass('e-prev') ? true : false;
            this._processNextPrevDate(progress);
        },
        _processNextPrevDate: function (progress) {
            if (progress && this.sfCalendar.find(".e-left-arrow").hasClass("e-disable")) return false;
            else if (!progress && this.sfCalendar.find(".e-right-arrow").hasClass("e-disable")) return false;

            var currentTable = $("table", this.sfCalendar), temp;
            var tClassName = currentTable.get(0).className;
            switch (tClassName) {
                case 'e-dp-viewdays':
                    var step = this.model.stepMonths;
                    if (progress) {
                        if (this._dateValue <= this.model.minDate) {
                            this._flag = false;
                            return false;
                        }
                    } else {
                        if (this._dateValue >= this.model.maxDate) {
                            this._flag = false;
                            return false;
                        }
                    }
                    this._flag = true;
                    this._addMonths(this._dateValue, (progress ? -step : step));
                    if (this._clickedDate)
                        this._calendarDate = this._clickedDate;
                    this._renderCalendar(this, this._dateValue);
                    $('.e-text', this.sfCalendar).text(this._asString(this._dateValue, this.model.headerFormat));
                    this._addFocus('day', this._hoverDate);
                    break;
                case 'e-dp-viewmonths':
                    if (progress) {
                        if (this._dateValue.getFullYear() <= this.model.minDate.getFullYear()) {
                            this._flag = false;
                            return false;
                        }
                    } else {
                        if (this._dateValue.getFullYear() >= this.model.maxDate.getFullYear()) {
                            this._flag = false;
                            return false;
                        }
                    }
                    this._flag = true;
                    this._addYears(this._dateValue, (progress ? -1 : 1));
                    this._renderCalendar(this, this._dateValue);
                    temp = this._dateValue.getFullYear();
                    $('.e-text', this.sfCalendar).text(temp);
                    $('tbody,tr.e-week-header', currentTable).not('.e-datepicker-months').hide();
                    $($(currentTable).find('.e-datepicker-months')).show();
                    this._addFocus('month', this._hoverMonth);
                    this._checkArrows(temp, temp);
                    break;
                case 'e-dp-viewyears':
                    if (progress) {
                        if (parseInt($('td.e-year-first:first').text()) <= this.model.minDate.getFullYear()) {
                            this._flag = false;
                            return false;
                        }
                    } else {
                        if (parseInt($('td.e-year-last:first').prev().text()) >= this.model.maxDate.getFullYear()) {
                            this._flag = false;
                            return false;
                        }
                    }
                    this._flag = true;
                    this._dateValue.setFullYear(this._dateValue.getFullYear() + (progress ? -10 : 10));
                    this._renderCalendar(this, this._dateValue);
                    var setYear = parseInt(this._dateValue.getFullYear()) - ((parseInt(this._dateValue.getFullYear()) % 10) + 1);
                    $('.e-text').text((setYear + 1) + ' - ' + (setYear + 10));
                    $('tbody,tr.e-week-header', currentTable).not('.e-datepicker-years').hide();
                    $($(currentTable).find('.e-datepicker-years')).show();
                    this._addFocus('year', this._hoverYear);
                    this._checkArrows(setYear + 1, setYear + 10);
                    break;
                case 'e-dp-viewallyears':
                    var headYears;
                    if (progress) {
                        headYears = parseFloat($('td.e-allyear-first', currentTable.get(0)).text().split('-')[1]);
                        if (headYears <= this.model.minDate.getFullYear()) {
                            this._flag = false;
                            return false;
                        } else {
                            this._flag = true;
                        }

                    } else {
                        headYears = parseFloat($('td.e-allyear-last', currentTable.get(0)).prev().text().split('-')[1]);
                        if (headYears >= this.model.maxDate.getFullYear()) {
                            this._flag = false;
                            return false;
                        } else
                            this._flag = true;
                    }
                    this._dateValue.setFullYear(headYears + (progress ? -10 : 10));
                    this._renderCalendar(this, this._dateValue);
                    var setYear = parseInt(this._dateValue.getFullYear()) - ((parseInt(this._dateValue.getFullYear()) % 100) + 1);
                    temp = parseFloat($('td.e-allyear-last', currentTable.get(0)).prev().text().split('-')[1]);
                    $('.e-text', this.sfCalendar).text((setYear + 1) + ' - ' + temp);
                    $('tbody,tr.e-week-header', currentTable).not('.e-datepicker-allyears').hide();
                    $($(currentTable).find('.e-datepicker-allyears')).show();
                    this._addFocus('allyear', this._hoverAllYear);
                    this._checkArrows(setYear + 1, temp);
                    break;
            }
            this._layoutChanged();
        },
        _addFocus: function (selection, index) {
            var cls = 'e-current-' + selection;
            if (selection == 'day') cls = 'current-month';
            var items = this.sfCalendar.find('tbody tr td.' + cls);
            var cell = items[index];
            if (!cell) cell = items.last();
            this.sfCalendar.find('table td').removeClass("e-state-hover");
            $(cell).addClass("e-state-hover");
            return $(cell);
        },
        _setFocusByName: function (name, value) {
            var allValues = this.sfCalendar.find('tbody tr td.e-current-' + name), index, cell;
            $(allValues).each(function (i, ele) {
                if (parseInt(ele.innerHTML) == parseInt(value)) {
                    index = i;
                    return;
                }
            });
            cell = allValues[index];
            if (!cell) cell = allValues.last();
            this.sfCalendar.find('table td').removeClass("e-state-hover");
            $(cell).addClass("e-state-hover");
            return index;
        },
        _getHeaderTxt: function () {
            return this.sfCalendar.find(".e-text").text();
        },
        _forwardNavHandler: function (event) {
            if (this.model.readOnly || !this.model.enabled) return false;
            if (event) event.preventDefault();

            var currentTable = $("table", this.sfCalendar);
            var tclassName = $("table", this.sfCalendar).get(0).className, proxy = this, headerTxt;
            switch (tclassName) {
                case 'e-dp-viewdays':
                    this._hoverMonth = this._getDateObj(currentTable.find(".e-state-hover")).getMonth() ||
                                this._getDateObj(currentTable.find(".e-active")).getMonth() || 0;
                    this._startLevel("year");
                    this._addFocus('month', this._hoverMonth);
                    break;
                case 'e-dp-viewmonths':
                    headerTxt = this._getHeaderTxt();
                    this._startLevel("decade");
                    this._hoverYear = this._setFocusByName('year', headerTxt);
                    break;
                case 'e-dp-viewyears':
                    headerTxt = this._getHeaderTxt();
                    this._startLevel("century");
                    this._hoverAllYear = this._setFocusByName('allyear', headerTxt);
                    break;
            }
            this._layoutChanged();
        },
        _backwardNavHandler: function (event) {

            if (this.model.readOnly || !this.model.enabled) return false;
            var element;
            if (event.type) {
                event.preventDefault();
                element = $(event.currentTarget);
            }
            else element = event;
            var cTable = $("table", this.sfCalendar), temp;
            var tclassName = $("table", this.sfCalendar).get(0).className, proxy = this;
            switch (tclassName) {
                case 'e-dp-viewmonths':
                    cTable.removeClass("e-dp-viewmonths").addClass("e-dp-viewdays");
                    this._dateValue = new Date(this._dateValue.getFullYear(), parseInt($(element).attr('index')), 1);
                    this._renderCalendar(this, this._dateValue);
                    $('tbody', cTable).not('.e-datepicker-days,.e-week-header').hide();
                    $($(cTable).find('.e-datepicker-days,.e-week-header')).fadeIn("fast", function () {
                        proxy._addFocus('day', proxy._hoverDate || 0);
                    });
                    $('.e-text', this.sfCalendar).text(this._asString(this._dateValue, this.model.headerFormat));
                    break;
                case 'e-dp-viewyears':
                    cTable.removeClass("e-dp-viewyears").addClass("e-dp-viewmonths");
                    this._dateValue.setFullYear(parseInt(element.text()));
                    this._renderCalendar(this, this._dateValue);
                    $('tbody,tr.e-week-header', cTable).not('.e-datepicker-months').hide();
                    $($(cTable).find('.e-datepicker-months')).fadeIn("fast", function () {
                        proxy._addFocus('month', proxy._hoverMonth || 0);
                    });
                    temp = element.text();
                    $('.e-text', this.sfCalendar).text(temp);
                    this._checkArrows(temp, temp);
                    break;
                case 'e-dp-viewallyears':
                    var headYears = element.text().split('-');
                    cTable.removeClass("e-dp-viewallyears").addClass("e-dp-viewyears");
                    if (headYears[0] < this.model.minDate.getFullYear()) headYears[0] = this.model.minDate.getFullYear().toString();
                    else if (headYears[0] > this.model.maxDate.getFullYear()) headYears[0] = this.model.maxDate.getFullYear().toString();
                    this._renderCalendar(this, (new Date(headYears[0], 0, 1)));
                    $('tbody,tr.e-week-header', cTable).not('.e-datepicker-years').hide();
                    $($(cTable).find('.e-datepicker-years')).fadeIn("fast", function () {
                        proxy._addFocus('year', proxy._hoverYear || 0);
                    });
                    $('.e-text', this.sfCalendar).text(headYears[0] + '-' + headYears[1]);
                    this._checkArrows(headYears[0], headYears[1]);
                    break;
                default:
                    this._clearSelected();
                    this.sfCalendar.find('table td').removeClass("e-state-hover");
                    element.not('td.other-month').addClass('e-active e-state-hover').attr('aria-selected', true);
                    this._addSelected();
                    //this.sfCalendar.find('table').attr({ 'aria-activedescendant': element[0].id, 'aria-describedby': element[0].id });                  
                    this._hoverDate = this._getDateObj(element).getDate() - 1;
                    this._dateValue = new Date(element.attr('date'));
                    this._clickedDate = new Date(element.attr('date'));
                    break;
            }
            this._layoutChanged();
        },

        _startLevel: function (start) {
            var cTable = $("table", this.sfCalendar);
            var headerText = $(".e-text", this.sfCalendar), s, e;
            switch (start) {
                case "decade":
                    cTable.removeClass("e-dp-viewmonths e-dp-viewdays").addClass("e-dp-viewyears");
                    $('tbody,tr.e-week-header', cTable).not('.e-datepicker-years').hide();
                    $($(cTable).find('.e-datepicker-years')).show();
                    var setYear = parseInt(this._dateValue.getFullYear()) - ((parseInt(this._dateValue.getFullYear()) % 10) + 1);
                    s = setYear + 1;
                    e = setYear + 10;
                    headerText.text(s + ' - ' + e);
                    this._checkArrows(s, e);
                    break;
                case "century":
                    this._renderCalendar(this, this._dateValue);
                    cTable.removeClass("e-dp-viewyears e-dp-viewdays e-dp-viewmonths").addClass("e-dp-viewallyears");
                    $('tbody,tr.e-week-header', cTable).not('.e-datepicker-allyears').hide();
                    $($(cTable).find('.e-datepicker-allyears')).show();
                    s = parseFloat($('td.e-allyear-first', cTable.get(0)).text().split('-')[1]) + 1;
                    e = parseFloat($('td.e-allyear-last', cTable.get(0)).prev().text().split('-')[1]);
                    var headYears = s + '-' + e;
                    headerText.text(headYears);
                    this._checkArrows(s, e);
                    break;
                case "year":
                    cTable.removeClass("e-dp-viewdays").addClass("e-dp-viewmonths");
                    $('tbody,tr.e-week-header', cTable).hide();
                    $($(cTable).find('.e-datepicker-months')).show();
                    s = this._dateValue.getFullYear();
                    headerText.text(s);
                    this._checkArrows(s, s);
                    break;
            }
        },
        _depthLevel: function (depth) {
            var calendarTable = this.sfCalendar;
            switch (depth) {
                case "year":
                    $(calendarTable.find('.e-current-year,.e-current-allyear')).bind("click", $.proxy(this._backwardNavHandler, this));
                    this._on($('.e-current-month', this.sfCalendar), "click", $.proxy(this._onDepthSelectHandler, this));
                    break;
                case "decade":
                    $(calendarTable.find('.e-current-allyear')).bind("click", $.proxy(this._backwardNavHandler, this));
                    $('.e-current-year', this.sfCalendar).bind("click", $.proxy(this._onDepthSelectHandler, this));
                    break;
                case "century":
                    $(calendarTable.find('.e-current-allyear')).bind("click", $.proxy(this._onDepthSelectHandler, this));
                    break;
            }
        },
        _onDepthSelectHandler: function (e) {
            if (this.model.readOnly || !this.model.enabled) return false;
            if ($(e.target).hasClass("e-current-month"))
                this._dateValue = new Date(this._dateValue.setMonth(parseInt(e.target.attributes["index"].value)));
            else if ($(e.target).hasClass("e-current-year"))
                this._dateValue = new Date(this._dateValue.setFullYear(parseInt(e.target.innerHTML)));
            else if ($(e.target).hasClass("e-current-allyear"))
                this._dateValue = new Date(this._dateValue.setFullYear(parseInt(e.target.innerHTML)));
            this._onSetCancelDateHandler(e);
        },
        //Generates datepicker months view
        _datepickerMonths: function (tbody, calendarTable, currentDate) {
            var dc = function (a) {
                return document.createElement(a);
            };
            var month = 0;
            for (var i = 0; i < 3; i++) {
                var row = $(dc('tr'));
                for (var j = 0; j < 4; j++) {
                    var td = $(dc('td'))
                        .addClass('e-current-month e-state-default')
                        .attr('index', month)
                        .html(this.Date.abbrMonthNames[month++]);
                    if (currentDate.getFullYear() < this.model.minDate.getFullYear() || currentDate.getFullYear() > this.model.maxDate.getFullYear()) {
                        td.addClass('e-hidedate e-disable');
                        td.removeClass('e-current-month');
                    }
                    else if ((currentDate.getFullYear() <= this.model.minDate.getFullYear() && month < this.model.minDate.getMonth() + 1) ||
                        (currentDate.getFullYear() >= this.model.maxDate.getFullYear() && month > this.model.maxDate.getMonth() + 1)) {
                        td.addClass('e-hidedate e-disable');
                        td.removeClass('e-current-month');
                    }
                    row.append(td);
                }
                tbody.append(row);
            }
            calendarTable.append(tbody);
            var s = currentDate.getFullYear();
            this._checkArrows(s, s);
        },
        //Generates datepicker years view
        _datepickerYears: function (tbody, calendarTable, currentYear) {
            var dc = function (a) {
                return document.createElement(a);
            };
            var Year = parseInt(currentYear) - ((parseInt(currentYear) % 10) + 1);
            var years = [];
            for (var j = 0; j < 12; j++) {
                years.push(Year + j);
            }
            var year = 0;
            for (var i = 0; i < 3; i++) {
                var row = $(dc('tr'));
                for (var j = 0; j < 4; j++) {
                    var td = $(dc('td'));
                    if (year == 0) {
                        if (parseInt(years[year]) <= this.model.minDate.getFullYear())
                            td.css("visibility", "hidden");
                        else
                            td.css("visibility", "visible");
                        td.addClass('e-year-first e-current-year ');
                    } else if (year == 11) {
                        if (parseInt(years[year]) >= this.model.maxDate.getFullYear()) {
                            td.css("visibility", "hidden");
                        }
                        else {
                            td.css("visibility", "visible");
                        }
                        td.addClass('e-year-last e-current-year ');
                    } else
                        td.addClass('e-current-year e-state-default');
                    if (years[year] < this.model.minDate.getFullYear() || years[year] > this.model.maxDate.getFullYear()) {
                        td.addClass('e-hidedate e-disable');
                        td.removeClass('e-current-year');
                    }
                    td.html(years[year++]);
                    row.append(td);
                }
                tbody.append(row);
            }
            calendarTable.append(tbody);
            this._checkArrows(years[0], years[years.length]);
        },
        //Generates datepicker all-years view
        _datepickerAllYears: function (tbody, calendarTable, currentYear) {
            var Year = parseInt(currentYear) - ((parseInt(currentYear) % 100) + 10);
            var headYear = Year;
            var years = [];

            for (var j = 0; j < 12; j++) {
                years.push(parseInt(Year) + "-\n" + parseInt(Year + 9));
                Year = Year + 10;
            }
            var year = 0;
            for (var i = 0; i < 3; i++) {
                var row = $(document.createElement('tr'));
                for (var j = 0; j < 4; j++) {
                    var td = $(document.createElement('td'));
                    if (year == 0) {
                        if (parseInt(years[year].split('-\n')[1]) <= this.model.minDate.getFullYear())
                            td.css("visibility", "hidden");
                        else
                            td.css("visibility", "visible");
                        td.addClass('e-allyear-first e-current-allyear ');
                    } else if (year == 11) {
                        if (parseInt(years[year].split('-\n')[0] - 1) >= this.model.maxDate.getFullYear()) {
                            td.css("visibility", "hidden");
                        } else {
                            td.css("visibility", "visible");
                        }
                        td.addClass('e-allyear-last e-current-allyear ');
                    } else
                        td.addClass('e-current-allyear e-state-default');
                    if (parseInt(years[year].split('-\n')[1]) < this.model.minDate.getFullYear() || parseInt(years[year].split('-\n')[0]) > this.model.maxDate.getFullYear()) {
                        td.addClass('e-hidedate e-disable');
                        td.removeClass('e-current-allyear');
                    }
                    td.html(years[year++]);
                    row.append(td);
                }
                tbody.append(row);
            }
            calendarTable.append(tbody);
        },
        _renderHeader: function (dpObject) {
            var thead = $(document.createElement('thead'));
            if (dpObject.model.dayHeaderFormat != "showheadernone") {
                var headRow = ej.buildTag("tr.e-week-header").attr('role', 'columnheader');
                for (var i = this.Date.firstDayOfWeek; i < this.Date.firstDayOfWeek + 7; i++) {
                    var weekday = i % 7;
                    var day = this.Date.dayNames[weekday];
                    var headerday;
                    if (dpObject.model.dayHeaderFormat == "showheadershort")
                        headerday = day.substr(0, 3);
                    else if (dpObject.model.dayHeaderFormat == "showheaderlong") headerday = day;
                    else headerday = day.substr(0, 2);
                    var th = ej.buildTag("th", "", {}, { 'scope': 'col', 'abbr': day, 'date': day, 'title': this._formatter(day, "dddd"), 'class': (weekday == 0 || weekday == 6 ? 'e-week-end' : 'e-week-day') })
                            .html(headerday);
                    headRow.append(th);
                }
            };
            return thead.append(headRow);
        },
        // Render a calendar table into any matched elements.
        _renderCalendar: function (dpObject, date) {
            var proxy = this, today;
            dpObject = $.extend({}, ej.DatePicker.prototype.defaults, dpObject);
            this.Date.firstDayOfWeek = this.model.startDay;
            if (date) today = date;
            else if (this._calendarDate) today = this._calendarDate;
            else today = proxy._zeroTime(new Date());
            var calendarTable = $('table', this.sfCalendar);
            calendarTable.empty();
            // header render section
            calendarTable.append(this._renderHeader(dpObject));
            //all years render section
            var tbody = ej.buildTag('tbody.e-datepicker-allyears', "", { 'display': 'none' }, {});
            this._datepickerAllYears(tbody, calendarTable, today.getFullYear());
            //all years render section
            tbody = ej.buildTag("tbody.e-datepicker-years", "", { 'display': 'none' }, {});
            this._datepickerYears(tbody, calendarTable, today.getFullYear());
            var month = dpObject.model.month == undefined ? today.getMonth() : dpObject.model.month;
            var year = dpObject.model.year || today.getFullYear();
            var currentDate = (new Date(year, month, 1, 0, 0, 0));
            var firstDayOffset = this.Date.firstDayOfWeek - currentDate.getDay() + 1;
            if (firstDayOffset > 1) firstDayOffset -= 7;
            var weeksToDraw = Math.ceil(((-1 * firstDayOffset + 1) + this._getDaysInMonth(currentDate)) / 7);
            this._addDays(currentDate, (firstDayOffset - 1));
            var newdate = proxy._zeroTime(new Date());
            var selected = this._calendarDate;
            tbody = ej.buildTag('tbody.e-datepicker-months', "", { 'display': 'none' }, {});
            // month rennder section
            this._datepickerMonths(tbody, calendarTable, today);
            //days render section
            tbody = ej.buildTag('tbody.e-datepicker-days', "", { 'display': 'none' }, {});
            var w = 0, _first = true, _last = true;
            while (w++ < weeksToDraw) {
                var r = jQuery(document.createElement('tr'));
                for (var i = 0; i < 7; i++) {
                    var thisMonth = currentDate.getMonth() == month;
                    var checkSpecialDate = this._isSpecialDates(currentDate);
                    var index = this._getIndex;
                    var d = $(document.createElement('td')).
                        html(checkSpecialDate ? '<span></span><span>' + currentDate.getDate() + '</span>' : currentDate.getDate() + '')
                        .attr({
                            //'id':this._formatter(currentDate, "ddd MMM dd yyyy").replace(/ /g,''),
                            'date': currentDate.toDateString(),
                            'title': (this.model.showTooltip ? (checkSpecialDate && this.model.specialDates[index][this._mapField._tooltip] ? this.model.specialDates[index][this._mapField._tooltip] : this._formatter(currentDate, "ddd MMM dd yyyy")) : ''),
                            'aria-selected': false,
                            'role': 'gridcell'

                        })
                        .addClass((thisMonth ? 'current-month e-state-default ' : 'other-month e-state-default ') +
                            (this._isWeekend(currentDate) ? (this._ejHLWeekEnd ? 'e-dp-weekend e-week-end ' : (this.model.highlightWeekend ? 'e-week-end ' : '')) : 'e-week-day ') +
                            (checkSpecialDate ? (this.model.specialDates[index][this._mapField._icon] ? 'flag ' + this.model.specialDates[index][this._mapField._icon] + ' ' : 'e-special-day ') : '') +
                            (thisMonth && currentDate.getTime() == newdate.getTime() ? 'today ' : ''));
                    d.find('span:first-of-type ').addClass('e-image ');

                    if (selected.getTime() == currentDate.getTime() && thisMonth) {
                        d.addClass('e-active').attr({ 'aria-selected': true });
                        if (this.model.highlightSection == "week") {
                            r.addClass('e-selected-week');
                        }
                        if (this.model.highlightSection == "month") {
                            tbody.addClass('e-selected-month');
                        }
                        if (this.model.highlightSection == "workdays") {
                            r.addClass('e-work-week');
                        }
                        //this.sfCalendar.find('table').attr({ 'aria-activedescendant': d[0].id, 'aria-describedby': d[0].id });
                        if (!this._hoverDate) {
                            d.addClass('e-state-hover');
                            this._hoverDate = currentDate.getDate() - 1;
                        }
                    }
                    var cond = true;
                    if (currentDate < this.model.minDate || currentDate > this.model.maxDate) {
                        d.addClass('e-hidedate e-disable');
                        d.removeClass('current-month other-month');
                        cond = _last = false;
                    }
                    if (thisMonth) {
                        if (cond && _first) {
                            this._tempMinDate = currentDate;
                            _first = false; _last = true;
                        }
                        if (_last) this._tempMaxDate = currentDate;
                    }
                    r.append(d);
                    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, 0, 0, 0);
                }
                tbody.append(r);
            }
            calendarTable.append(tbody);
            $(tbody).fadeIn("fast");
            if (this.model.startLevel === this.model.depthLevel)
                this._depthLevel(this.model.depthLevel);
            else if (this.model.depthLevel != "month" && this.model.depthLevel != "") {
                if (this.model.startLevel == "century")
                    this._depthLevel(this.model.depthLevel);
                else if (this.model.startLevel == "decade" && this.model.depthLevel != "century")
                    this._depthLevel(this.model.depthLevel);
                else if (this.model.startLevel == "year" && this.model.depthLevel != "decade" && this.model.depthLevel != "century")
                    this._depthLevel(this.model.depthLevel);
                else {
                    this._on(calendarTable.find('.current-month,.other-month,.e-current-month,.e-current-year,.e-current-allyear'), "click", $.proxy(this._backwardNavHandler, this));
                    this._on(calendarTable.find('.current-month , .other-month'), "click", $.proxy(this._onSetCancelDateHandler, this));
                }
            }
            else {
                this._on(calendarTable.find('.current-month,.other-month,.e-current-month,.e-current-year,.e-current-allyear'), "click", $.proxy(this._backwardNavHandler, this));
                this._on(calendarTable.find('.current-month , .other-month'), "click", $.proxy(this._onSetCancelDateHandler, this));
            }

            this._otherMonthsVisibility();
            this._checkDateArrows();
        },

        /*---------------------Keyboard Support----------------------------------------------------------*/

        _keyboardNavigation: function (e) {
            if ((this._isOpen) && (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 13 || e.keyCode == 36 || e.keyCode == 35)) {
                e.preventDefault && e.preventDefault();
                var t = { row: null, col: null };

                t.col = this.sfCalendar.find('tbody tr td.e-state-hover').index();
                t.row = this.sfCalendar.find('tbody tr td.e-state-hover').parent().index();

                t.col = (t.col != -1) ? t.col + 1 : this.sfCalendar.find('tbody tr td.e-active').index() + 1;
                t.row = (t.row != -1) ? t.row + 1 : this.sfCalendar.find('tbody tr td.e-active').parent().index() + 1;

                var tableClass = this.sfCalendar.find('table')[0].className, next, rowLength = 3, colLength = 4;
                switch (tableClass) {
                    case "e-dp-viewallyears":
                        next = this._changeRowCol(t, e.keyCode, rowLength, colLength, "yearall", e.ctrlKey);
                        if (!e.ctrlKey) this._hoverAllYear = this.sfCalendar.find('tbody.e-datepicker-allyears tr td').index(next);
                        break;
                    case "e-dp-viewyears":
                        next = this._changeRowCol(t, e.keyCode, rowLength, colLength, "year", e.ctrlKey);
                        if (!e.ctrlKey) this._hoverYear = this.sfCalendar.find('tbody.e-datepicker-years tr td').index(next);
                        break;
                    case "e-dp-viewmonths":
                        next = this._changeRowCol(t, e.keyCode, rowLength, colLength, "month", e.ctrlKey);
                        if (!e.ctrlKey) this._hoverMonth = this.sfCalendar.find('tbody.e-datepicker-months tr td').index(next);
                        break;
                    case "e-dp-viewdays":
                        rowLength = this.sfCalendar.find('tbody.e-datepicker-days tr').length, colLength = 7;
                        next = this._changeRowCol(t, e.keyCode, rowLength, colLength, "day", e.ctrlKey);
                        if (!e.ctrlKey) this._hoverDate = this._getDateObj(next).getDate() - 1;
                        break;
                }
                if (!e.ctrlKey) {
                    this.sfCalendar.find('table td').removeClass("e-state-hover");
                    next.addClass("e-state-hover");
                }
            }
            else if (!this.model.displayInline && (e.keyCode == 27 || e.keyCode == 9)) { this.hide(); e.stopPropagation(); }
            else if (e.altKey && e.keyCode == 40) { this.show(); return false; }
        },
        _changeRowCol: function (t, key, rows, cols, target, ctrlKey) {
            var eleClass, cls = { parent: null, child: null };
            switch (target) {
                case "day": eleClass = "tbody.e-datepicker-days tr td.current-month";
                    cls.parent = ".e-datepicker-days", cls.child = ".current-month";
                    break;
                case "month": eleClass = "tbody.e-datepicker-months tr td.e-current-month";
                    cls.parent = ".e-datepicker-months", cls.child = ".e-current-month";
                    break;
                case "year": eleClass = "tbody.e-datepicker-years tr td.e-current-year";
                    cls.parent = ".e-datepicker-years", cls.child = ".e-current-year";
                    break;
                case "yearall": eleClass = "tbody.e-datepicker-allyears tr td.e-current-allyear";
                    cls.parent = ".e-datepicker-allyears", cls.child = ".e-current-allyear";
                    break;
            }
            if (t.row <= 0 && t.col <= 0)
                return this.sfCalendar.find(eleClass + ':first');
            var cell, proxy = this;
            switch (key) {
                case 36:         // Home Key
                    return this.sfCalendar.find(eleClass + ':first');
                    break;
                case 35:         // End Key
                    return this.sfCalendar.find(eleClass + ':last');
                    break;
                case 38:         // Up Key
                    if (ctrlKey) {
                        this._forwardNavHandler();
                    }
                    else if (t.row > 1) {
                        t.row -= 1;
                    }
                    else {
                        this._processNextPrevDate(true);
                        cell = this.sfCalendar.find(eleClass + ':nth-child(' + t.col + '):last');
                        return cell;
                    }
                    cell = this._getCell(t, cls);
                    if (cell.length <= 0) {
                        this._processNextPrevDate(true);
                        cell = this.sfCalendar.find(eleClass + ':nth-child(' + t.col + '):last');
                    }
                    return cell;
                    break;
                case 37:        // Left Key
                    if (ctrlKey) {
                        this._processNextPrevDate(true);
                        return this.sfCalendar.find('tbody tr td.e-state-hover');
                    }
                    else if (t.col > 1)
                        t.col -= 1;
                    else if (t.row > 1) {
                        t = { row: t.row - 1, col: cols }
                    }
                    else {
                        this._processNextPrevDate(true);
                        cell = this.sfCalendar.find(eleClass + ':last');
                        return cell;
                    }
                    cell = this._getCell(t, cls);
                    if (cell.length <= 0) {
                        this._processNextPrevDate(true);
                        cell = this.sfCalendar.find(eleClass + ':last');
                    }
                    return cell;
                    break;
                case 39:         // Right Key
                    if (ctrlKey) {
                        this._processNextPrevDate(false);
                        return this.sfCalendar.find('tbody tr td.e-state-hover');
                    }
                    else if (t.col < cols)
                        t.col += 1;
                    else if (t.row < rows) {
                        t = { row: t.row + 1, col: 1 }
                    }
                    else {
                        this._processNextPrevDate(false);
                        cell = this.sfCalendar.find(eleClass + ':first');
                        return cell;
                    }
                    cell = this._getCell(t, cls);
                    if (cell.length <= 0) {
                        this._processNextPrevDate(false);
                        cell = this.sfCalendar.find(eleClass + ':first');
                    }
                    return cell;
                    break;
                case 40:        // Down Key
                    if (!ctrlKey) {
                        if (t.row < rows) {
                            t.row += 1;
                        }
                        else {
                            this._processNextPrevDate(false);
                            cell = this.sfCalendar.find(eleClass + ':nth-child(' + t.col + '):first');
                            return cell;
                        }
                        cell = this._getCell(t, cls);
                        if (cell.length <= 0) {
                            this._processNextPrevDate(false);
                            cell = this.sfCalendar.find(eleClass + ':nth-child(' + t.col + '):first');
                        }
                        return cell;
                        break;
                    }
                case 13:    // Enter Key
                    var tclassName = $("table", this.sfCalendar).get(0).className;
                    this._backwardNavHandler(this._getCell(t, cls));
                    if (tclassName == "e-dp-viewdays")
                        this._onSetCancelDateHandler({ type: null });
                    break;
            }
            return this._getCell(t, cls);
        },
        _getCell: function (t, cls) {
            return this.sfCalendar.find('tbody' + cls.parent + ' tr:nth-child(' + t.row + ') td' + cls.child + ':nth-child(' + t.col + ')');
        },
        _getDateObj: function (element) {
            return new Date(element.attr("date"));
        },
        _touchCalendar: function (e) {
            var tableClass = this.sfCalendar.find('table')[0].className;
            switch (e.type) {
                case "pinchin":
                    if (tableClass != "e-dp-viewdays")
                        this._keyboardNavigation({ keyCode: 13 });
                    break;
                case "pinchout":
                    if (tableClass != "e-dp-viewallyears")
                        this._forwardNavHandler();
                    break;
                case "swipeleft":
                    this._processNextPrevDate(false);
                    break;
                case "swiperight":
                    this._processNextPrevDate(true);
                    break;
            }
        },

        /*---------------------client side methods----------------------------------------------------------*/

        /**
        * Opens the datepicker popup  
		* @return jQuery
		* @example 
		* &lt;input type="text" id="datepicker" /&gt;
		* &lt;script&gt;
		* $("#datepicker").ejDatePicker();
		* // Create DatePicker instance
		* var dateObj = $("#datepicker").data("ejDatePicker");
		* dateObj.show(); // shows the datepicker popup
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="datepicker" /&gt;
	    * &lt;script&gt;
		* $("#datepicker").ejDatePicker();
	    * // shows the datepicker popup
        * $("#datepicker").ejDatePicker("show");
	    * &lt;/script&gt;
		*@memberof ejDatePicker
		* @instance
        */
        show: function () {
            if (this._isOpen) return false;
            var proxy = this;
            if (!this.model.enabled) return;
            if (!this.model.displayInline) this._setDatePickerPosition();
            this.sfCalendar.attr({ 'aria-hidden': 'false' })
            this.sfCalendar.slideDown(this.model.enableAnimation?200:0, "easeOutQuad", function () {
                proxy._isOpen = true;
                if (!proxy.model.displayInline)
                    $(document).bind("mousedown", $.proxy(proxy._onDocumentClick, proxy));
            });
            if (this._textboxVal() !== "") this._updateInputVal();

            this._trigger("open", { prevDate: this._prevDate, value: this._formatter(this.model.value, this.model.dateFormat) });

        },

        /**
        * Hides the datepicker popup, if in opended state.
		* @return jQuery
		* @example 
		* &lt;input type="text" id="datepicker" /&gt;
		* &lt;script&gt;
		* $("#datepicker").ejDatePicker();
		* // Create DatePicker instance
		* var dateObj = $("#datepicker").data("ejDatePicker");
		* dateObj.hide(); // hides the datepicker popup
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="datepicker" /&gt;
	    * &lt;script&gt;
		* $("#datepicker").ejDatePicker();
	    * // hides the datepicker popup
        * $("#datepicker").ejDatePicker("hide");
	    * &lt;/script&gt;
		*@memberof ejDatePicker
		* @instance
        */
        hide: function () {
            if (!this._isOpen) return false;
            var proxy = this;
            this.sfCalendar.attr({ 'aria-hidden': 'true' })
            this.sfCalendar.slideUp(this.model.enableAnimation?100:0, "easeOutQuad", function () {
                proxy._isOpen = false;
                $(document).unbind("mousedown", $.proxy(proxy._onDocumentClick, proxy));
                proxy._setWaterMark();
            });
            if (this._textboxVal() != "" && !this.element.hasClass("e-watermark")) this._validateInputVal();

            this._trigger("close", { prevDate: this._prevDate, value: this._formatter(this.model.value, this.model.dateFormat) });
        },

        /**
        * Enables the datepicker control
		* @return jQuery
		* @example 
		* &lt;input type="text" id="datepicker" /&gt;
		* &lt;script&gt;
		* $("#datepicker").ejDatePicker();
		* // Create DatePicker instance
		* var dateObj = $("#datepicker").data("ejDatePicker");
		* dateObj.enable(); // enables the datepicker
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="datepicker" /&gt;
	    * &lt;script&gt;
		* $("#datepicker").ejDatePicker();
	    * // enables the datepicker
        * $("#datepicker").ejDatePicker("enable");
	    * &lt;/script&gt;
		*@memberof ejDatePicker
		* @instance
        */
        enable: function () {
            this.model.enabled = true;
            this.element.removeClass('e-disable').attr({ "aria-disabled": false });
            if (this.dateIcon) this.dateIcon.removeClass('e-disable').attr({ "aria-disabled": false });
            this.element.removeAttr("disabled");
            this.sfCalendar.removeClass('e-disable').attr({ "aria-disabled": false });
        },

        /**
        * Disables the datepicker control
		* @return jQuery
		* @example 
		* &lt;input type="text" id="datepicker" /&gt;
		* &lt;script&gt;
		* $("#datepicker").ejDatePicker();
		* // Create DatePicker instance
		* var dateObj = $("#datepicker").data("ejDatePicker");
		* dateObj.disable(); // disables the datepicker
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="datepicker" /&gt;
	    * &lt;script&gt;
		* $("#datepicker").ejDatePicker();
	    * // disables the datepicker
        * $("#datepicker").ejDatePicker("disable");
	    * &lt;/script&gt;
		*@memberof ejDatePicker
		* @instance
        */
        disable: function () {
            this.model.enabled = false;
            this.element.addClass('e-disable').attr({ "aria-disabled": true });
            if (this.dateIcon) this.dateIcon.addClass('e-disable').attr({ "aria-disabled": true });
            this.element.attr("disabled", "disabled");
            this.sfCalendar.addClass('e-disable').attr({ "aria-disabled": true });
            if (this._isOpen) {
                if (this.element.is(':input')) this.element.blur();
                if (!this.model.displayInline) this.hide();
            }
        },

        /**
        * Returns the current date value in the datepicker control
		* @return Date value
		* @example 
		* &lt;input type="text" id="datepicker" /&gt;
		* &lt;script&gt;
		* $("#datepicker").ejDatePicker();
		* // Create DatePicker instance
		* var dateObj = $("#datepicker").data("ejDatePicker");
		* dateObj.getValue(); // returns the date value
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="datepicker" /&gt;
	    * &lt;script&gt;
	    * // returns the date value
		* $("#datepicker").ejDatePicker();
        * $("#datepicker").ejDatePicker("getValue");
	    * &lt;/script&gt;
		*@memberof ejDatePicker
		* @instance
        */
        getValue: function () { return this._formatter(this.model.value, this.model.dateFormat); },

        /*----------------------------------------region - Event Binding and Handlers---------------------------------------- */

        _wireEvents: function () {
            this._on($('.e-text', this.sfCalendar), "click", $.proxy(this._forwardNavHandler, this));
            this._on($('.e-next', this.sfCalendar), "click", $.proxy(this._previousNextHandler, this));
            this._on($('.e-prev', this.sfCalendar), "click", $.proxy(this._previousNextHandler, this));

            if (this.element.is(":input")) {
                this._on(this.element, "blur", this._onFocusOut);
                this._on(this.element, "focus", this._onFocusIn);
                this._on(this.element, "keyup", this._keyUp);
            }

            if (this.model.showFooter) {
                this._on($('.e-footer', this.sfCalendar), "click", this._setCurrDate);
            }

            this._on(this.sfCalendar, "pinchin pinchout swipeleft swiperight", $.proxy(this._touchCalendar, this));

        },
        _bindDateButton: function () {
            this._on($(this.dateIcon, this.wrapper), "mousedown", $.proxy(this._showDatePopUp, this));
            this.element.unbind("mousedown", $.proxy(this._showDatePopUp, this));
        },
        _bindInputEvent: function () {
            this._off($(this.dateIcon, this.wrapper), "mousedown", $.proxy(this._showDatePopUp, this));
            if (this.element.is(":input") && !this.model.displayInline) {
                this.element.bind("mousedown", $.proxy(this._showDatePopUp, this));
            }
        },

        _onFocusOut: function (e) {
            var calenderDate = this._formatter(this._calendarDate, this.model.dateFormat);
            var currDate = this._formatter(this._currentDay(), this.model.dateFormat);
            this._isFocused = false;
            var val = this._validateValue();
            if (val != null && !this.model.enableStrictMode) {
                this._validateMinMaxDate();
                var _currentVal = this._textboxVal();
                if (this._preValue != _currentVal) {
                    this._triggerChangeEvent(e);
                }
            }
            else if (val == null && !this.model.enableStrictMode) {
                if (this._preTxtValue == null || this.element.val() == "")
                    this.element.addClass("e-watermark").val(this.model.watermarkText);
                else
                    this.element.val(calenderDate);
                this._triggerChangeEvent(e);
            }
            else
                this.isValidState = false;
            this.wrapper.removeClass("e-focus");
            if ((!this._isOpen || this.model.displayInline) && !this._setWaterMark() && this._preValue != this._textboxVal()) this._updateInputVal();
            if (this._textboxVal() != "" && (!this._isOpen || this.model.displayInline)) this._validateInputVal();
            this.element.unbind("keydown", $.proxy(this._keyboardNavigation, this));

            this._trigger("focusOut");
            this._checkErrorClass();
        },
        _onFocusIn: function (e) {
            e.preventDefault();
            this._isFocused = true;
            this.wrapper.removeClass('e-error').attr('aria-invalid', "false");
            this.isValidState = true;
            this.wrapper.addClass("e-focus");
            if (this.model.readOnly)
                return;
            this._removeWatermark();
            this.element.bind("keydown", $.proxy(this._keyboardNavigation, this));

            this._trigger("focusIn");
        },
        _removeWatermark: function () {
            if (this.element.val() == this.model.watermarkText) {
                this.element.val("");
                this.element.removeClass('e-watermark');
            }
        },
        _keyUp: function (e) {
            var _currentVal = this._textboxVal();
            this._prevDate = this._formatter(this.model.value, this.model.dateFormat);
            if (this._preValue != _currentVal)
                this._triggerChangeEvent();
        },
        _textboxVal: function (e) {
            return this.element.hasClass("e-watermark") ? "" : this.element.val();
        },
        _showhidePopup: function () {
            if (!this.model.enabled) return false;
            if (this._isOpen) {
                if (!this._isFocused && this.element.is(':input')) this.element.focus();
                if (!this._cancelValue) this.hide();
            }
            else {                              // Open
                if (!this._isFocused && this.element.is(':input')) this.element.focus();
                this.show();
            }
        },

        _triggerChangeEvent: function (e) {
            var _currentVal = this._textboxVal();
            this.model.value = this._parseDate(_currentVal);
            var data = { prevDate: this._prevDate, value: _currentVal };
            if (this._preValue != _currentVal) {
                this._preValue = _currentVal;
                this._trigger("change", data);
            }
            this._hiddenInput.val(this._textboxVal());
        },

        _triggerSelectEvent: function (e) {
            var val = this._textboxVal();
            if (this._parseDate(val)) {
                var data = { prevDate: this._prevDate, value: val, isSpecialDay: this._isSpecialDates(this.model.value) };
                if (this._prevDate != val) {
                    if (this._parseDate(data.value) && (this.model.value >= this.model.minDate && this.model.value <= this.model.maxDate)) {
                        this._cancelValue = this._trigger("select", data);
                    }
                }
            }
        },

        _onDocumentClick: function (e) {
            if (!$(e.target).is(this.popup) && !$(e.target).parents(".e-popup").is(this.popup) &&
                !$(e.target).is(this.wrapper) && !$(e.target).parents(".e-datewidget").is(this.wrapper)) {
                this._showhidePopup();
            }
            else if ($(e.target).is(this.popup) || $(e.target).parents(".e-popup").is(this.popup)) {
                e.preventDefault();
            }
        },
        _showDatePopUp: function (e) {
            if (this.model.readOnly) return;
            e.preventDefault();
            if (!this.model.enabled && this.model.displayInline) return false;
            this._showhidePopup();
        },
        _layoutChanged: function (e) {
            // this event internally used to observe the layout change in "DateTimePicker" control
            if (this._getInternalEvents) this._trigger("layoutChange");
        },
        _setCurrDate: function (e) {
            if (this.model.readOnly || !this.model.enabled) return false;
            if (e) e.preventDefault();
            var proxy = this;
            this._prevDate = this._formatter(this.model.value, this.model.dateFormat);
            this._dateValue = this._zeroTime(new Date());
            this.model.value = this._calendarDate = this._dateValue;
            this._setDateValue(this.model.value);
            this._triggerSelectEvent(e);
            this._triggerChangeEvent(e);
            this._refreshDatepicker();
            this._changeDayClass();
            this._startLevel(this.model.startLevel);
            this._onSetCancelDateHandler(e);
            this._layoutChanged();
        },
        _changeDayClass: function () {
            var className = this.popup.children("table")[0].className;
            if (className != "e-dp-viewdays") {
                this.popup.children("table").removeClass(className).addClass("e-dp-viewdays");
            }
        },
        //handler for setting dates to input field
        _onSetCancelDateHandler: function (e) {
            if (this.model.readOnly || !this.model.enabled) return false;
            if (e && e.type) e.preventDefault();
            this.model.value = this._parseDate(this._textboxVal());
            //sets prev date before value gets change to current selected date
            this._prevDate = this._formatter(this.model.value, this.model.dateFormat);
            this._setDateValue(this._dateValue);
            this._triggerSelectEvent(e);
            this._triggerChangeEvent(e);
            if (this.element.is(':input') && !this.model.displayInline) {
                this._showhidePopup();
            }
            if (e && $(e.target).hasClass("other-month"))
                this._refreshDatepicker();
        },
        _closeCalendar: function (ele) {
            if (!ele || ele == this.element) {
                this.sfCalendar.empty().remove();
            }
        },
        //Error class for input value validation
        _checkErrorClass: function () {
            if (this.wrapper) {
                if (this.isValidState) this.wrapper.removeClass("e-error").attr('aria-invalid', "false");
                else this.wrapper.addClass("e-error").attr('aria-invalid', "true");
            }
        }
    });

    /**
	 * Enum for DatePicker dayHeaderFormat	 
	 * @enum {String}
	 * @global 
	 */
    ej.DatePicker.Header = {
        /**  Shows the day header format in short like Sun, Mon, Tue … */
        ShowHeaderNone: "showheadernone",
        /**  Shows the day header format in min like Su, Mo, Tu … */
        ShowHeaderShort: "showheadershort",
        /**  Shows the day header format in long like Sunday, Monday, Tuesday … */
        ShowHeaderMin: "showheadermin",
        /**  Removes the day header */
        ShowHeaderLong: "showheaderlong"
    };
    /**
    * Enum for DatePicker highlightSection	 
    * @enum {String}
    * @global 
    */
    ej.DatePicker.HighlightSection = {
        /**  Highlight the Current Month. */
        Month: "month",
        /**  Highlight the Current Week. */
        Week: "week",
        /**  Highlight the Current WorkDays. */
        WorkDays: "workdays",
        /** Don't Highlight Anything. */
        None: "none"
    };

    /**
	 * Enum for DatePicker startLevel and depthLevel	 
	 * @enum {String}
	 * @global 
	 */
    ej.DatePicker.Level = {
        /**  Starts from month level view. */
        Month: "month",
        /**  Starts from year level view. */
        Year: "year",
        /**  Starts from year decade level view. */
        Decade: "decade",
        /**  Starts from century level view.  */
        Century: "century"
    };
   

})(jQuery, Syncfusion);

;