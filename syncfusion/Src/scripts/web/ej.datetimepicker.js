/*!
*  filename: ej.datetimepicker.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to select the date and time values.
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
	* @classdesc Date and Time selection with the input field.
	* @class ejDateTimePicker
	* @param {object} options - settings for Date Picker.
	* @requires jQuery
    * @requires jquery.easing.1.3.js
    * @requires jquery.globalize.js
    * @requires globalize.cultures.min.js
	* @requires ej.core.js
	* @requires ej.datetimepicker.js
	* @requires ej.datepicker.js
	* @requires ej.timepicker.js
	* @requires ej.scroller.js
	* @example 
	* &lt;input type="text" id="datetime" /&gt;
	* &lt;script&gt;
	* // Create DateTimePicker
    * $("#datetime").ejDateTimePicker();
	* &lt;/script&gt;
	*/

    ej.widget("ejDateTimePicker", "ej.DateTimePicker", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["input"],
        _setFirst: false,
        _rootCSS: "e-datetimepicker",
        type: "editor",

        // default model
        defaults: {
            // Common properties
            /**		
			* Set the root class for DateTimePicker theme. This cssClass API helps to use custom skinning option for DateTimePicker control. 
			* @default ""
			* @type {string}
			* @example
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;			
			* //To set cssClass API during initialization  
			* 	$("#datetime").ejDateTimePicker({  cssClass: "gradient-lime" });
			* &lt;/script&gt;
			 * @memberof ejDateTimePicker
			* @instance
			*/
            cssClass: "",

            /**		
			* Defines the localization culture for DateTimePicker.
			* @default "en-US"
			* @type {string}
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set locale API during initialization  
			* 	$("#datetime").ejDateTimePicker({  locale: "en-US" });
			* &lt;/script&gt;
			 * @memberof ejDateTimePicker
			* @instance
			*/
            locale: "en-US",

            /**		
			* Indicates that the DateTimePicker value can only be read and can’t change.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set readOnly API during initialization  
			* 	$("#datetime").ejDateTimePicker({  readOnly: true });
			* &lt;/script&gt;
			 * @memberof ejDateTimePicker
			* @instance
			*/
            readOnly: false,

            /**		
			* Changes the sharped edges into rounded corner for the DateTimePicker textbox and popup.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set showRoundedCorner API during initialization  
			* 	$("#datetime").ejDateTimePicker({  showRoundedCorner: true });
			* &lt;/script&gt; 
			 * @memberof ejDateTimePicker
			* @instance
			*/
            showRoundedCorner: false,

            /**		
			* Sets the DateTimePicker direction as right to left alignment.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set enableRTL API during initialization  
			* 	$("#datetime").ejDateTimePicker({  enableRTL: true });
			* &lt;/script&gt; 
			 * @memberof ejDateTimePicker
			* @instance
			*/
            enableRTL: false,

            /**		
			* When this property is set to false, it disables the DateTimePicker control.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set enabled API during initialization  
			* 	$("#datetime").ejDateTimePicker({  enabled: true });
			* &lt;/script&gt;
			 * @memberof ejDateTimePicker
			* @instance
			*/
            enabled: true,

            /**		
			* Sets the DateTime value to the control.
			* @default ""
			* @type {String | DateObject}
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set value API during initialization  
			* 	$("#datetime").ejDateTimePicker({  value:"6/2/2014 6:00 AM" });
			* &lt;/script&gt; 
			 * @memberof ejDateTimePicker
			* @instance
			*/
            value: "",

            /**		
			* Sets the minimum value to the DateTimePicker. Behind the minimum value an error class is added to the wrapper element.
			* @default new Date("1/1/1900 12:00:00 AM")
			* @type {String | DateObject}
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set minDateTime API during initialization  
			* 	$("#datetime").ejDateTimePicker({  minDateTime: new Date("5/5/2010 12:00:00 AM") });
			* &lt;/script&gt;
			* @memberof ejDateTimePicker
			* @instance
			*/
            minDateTime: new Date("1/1/1900 12:00:00 AM"),

            /**		
			* Sets the maximum value to the DateTimePicker. Beyond the maximum value an error class is added to the wrapper element.
			* @default new Date("12/31/2099 11:59:59 PM")
			* @type {String | DateObject}
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set maxDateTime API during initialization  
			* 	$("#datetime").ejDateTimePicker({  maxDateTime: new Date("12/10/2050 8:00:00 PM") });
			* &lt;/script&gt;
			 * @memberof ejDateTimePicker
			* @instance
			*/
            maxDateTime: new Date("12/31/2099 11:59:59 PM"),

            /**		
			* Defines the height of the DateTimePicker textbox.
			* @default 30
			* @type {String | Number}
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set height API during initialization  
			* 	$("#datetime").ejDateTimePicker({  height: 40 });
			* &lt;/script&gt; 
			 * @memberof ejDateTimePicker
			* @instance
			*/
            height: "",

            /**		
			* Defines the width of the DateTimePicker textbox.
			* @default 143
			* @type {String | Number}
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set width API during initialization  
			* 	$("#datetime").ejDateTimePicker({  width: 210 });
			* &lt;/script&gt; 
			 * @memberof ejDateTimePicker
			* @instance
			*/
            width: "",

            /**		
			* Defines the datetime format displayed in the DateTimePicker. The value should be a combination of date format and time format. 
			* @default "M/d/yyyy h:mm tt"
			* @type { String }
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set dateTimeFormat API during initialization  
			* 	$("#datetime").ejDateTimePicker({  dateTimeFormat: "d/M/yyyy tt h:mm" });
			* &lt;/script&gt; 
			 * @memberof ejDateTimePicker
			* @instance
			*/
            dateTimeFormat: "",

            /**		
			* Shows or hides the arrow button from the DateTimePicker textbox. 
              When the button disabled, the DateTimePicker popup opens while focus in the textbox and hides while focusout from the textbox.
			* @default true
			* @type { Boolean }
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set showPopupButton API during initialization  
			* 	$("#datetime").ejDateTimePicker({  showPopupButton: false });
			* &lt;/script&gt;
			 * @memberof ejDateTimePicker
			* @instance
			*/
            showPopupButton: true,
			
			/**		
			* When enableStrictMode true it allows the value outside of the range also, otherwise it internally changed to the correct value.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
	        * &lt;script&gt;
			* //To set enableStrictMode API during initialization  
			* 	$("#datetime").ejDateTimePicker({  enableStrictMode: true });
		    * &lt;/script&gt; 
			 * @memberof ejDateTimePicker
			* @instance
			*/
            enableStrictMode: false,

            /**		
			* Displays the custom text for the buttons inside the DateTimePicker popup.
              when the culture value changed, we can change the buttons text based on the culture. 
			* @default { today: "Today", now: "Now", done: "Done", timeTitle: "Time" }
			* @type { JSONObject }
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set buttonText API during initialization  
			* 	$("#datetime").ejDateTimePicker({  buttonText: { done: "做过" } });
			* &lt;/script&gt;
			 * @memberof ejDateTimePicker
			* @instance
			*/
            buttonText: /** @lends ejDateTimePicker# */ {
                /**		
                 * Sets the text for the Today button inside the datetime popup.
				 * @alias ejDateTimePicker#buttonText->today
				 * @type String
				 * @example 
				 * &lt;input type="text" id="datetime" /&gt;
				 * &lt;script&gt;
				 * //To set buttonText API during initialization  
			     * 	$("#datetime").ejDateTimePicker({ buttonText: { today: "Today" }});
			     * &lt;/script&gt;
			     * @memberof ejDateTimePicker#buttonText
			     * @instance
                 */
                today: "Today",

                /**		
                 * Sets the text for the Now button inside the datetime popup.
				 * @alias ejDateTimePicker#buttonText->now
				 * @type String
				 * @example 
				 * &lt;input type="text" id="datetime" /&gt;
				 * &lt;script&gt;
				 * //To set buttonText API during initialization  
			     * 	$("#datetime").ejDateTimePicker({ buttonText: { now: "Now" }});
			     * &lt;/script&gt;
			     * @memberof ejDateTimePicker#buttonText
			     * @instance
                 
                 */
                now: "Now",

                /**		
                 * Sets the text for the Done button inside the datetime popup.
				 * @alias ejDateTimePicker#buttonText->done
				 * @type String
				 * @example 
				 * &lt;input type="text" id="datetime" /&gt;
				 * &lt;script&gt;
				 * //To set buttonText API during initialization  
			     * 	$("#datetime").ejDateTimePicker({ buttonText: { done: "Done" }});
			     * &lt;/script&gt;
			     * @memberof ejDateTimePicker#buttonText
			     * @instance
                 */
                done: "Done",

                /**		
                 * Sets the header text for the Time dropdown.
				 * @alias ejDateTimePicker#buttonText->timeTitle
				 * @type String
				 * @example 
				 * &lt;input type="text" id="datetime" /&gt;
				 * &lt;script&gt;
				 * //To set buttonText API during initialization  
			     * 	$("#datetime").ejDateTimePicker({ buttonText: { timeTitle: "Time" }});
			     * &lt;/script&gt;
			     * @memberof ejDateTimePicker#buttonText
			     * @instance
                 */
                timeTitle: "Time"
            },

            /**		
			* Enables or disables the state maintenance of DateTimePicker. 
			* @default false
			* @type { Boolean }
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set enablePersistence API during initialization  
			* 	$("#datetime").ejDateTimePicker({  enablePersistence: true });
			* &lt;/script&gt;
			 * @memberof ejDateTimePicker
			* @instance
			*/
            enablePersistence: false,

            /**		
			* Sets the time interval between the two adjacent time values in the time popup. 
			* @default 30
			* @type { Number }
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set interval API during initialization  
			* 	$("#datetime").ejDateTimePicker({  interval: 60 });
			* &lt;/script&gt;
			 * @memberof ejDateTimePicker
			* @instance
			*/
            interval: 30,

            /**		
			* Defines the time format displayed in the time dropdown inside the DateTimePicker popup. 
			* @default "h:mm tt"
			* @type { String }
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set timeDisplayFormat API during initialization  
			* 	$("#datetime").ejDateTimePicker({  timeDisplayFormat: "HH:mm" });
			* &lt;/script&gt; 
			 * @memberof ejDateTimePicker
			* @instance
			*/
            timeDisplayFormat: "",

            /**		
			* Defines the width of the time dropdown inside the DateTimePicker popup.
			* @default 100
			* @type { String | Number }
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set timePopupWidth API during initialization  
			* 	$("#datetime").ejDateTimePicker({  timePopupWidth: 150 });
			* &lt;/script&gt; 
			 * @memberof ejDateTimePicker
			* @instance
			*/
            timePopupWidth: 100,

            /**		
			* Specifies the header format of the datepicker inside the DateTimePicker popup. See {@link DatePicker.Level}
			* @default ej.DatePicker.Header.ShowHeaderMin
			* @type { String | Enum }
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set dayHeaderFormat API during initialization  
			* 	$("#datetime").ejDateTimePicker({  dayHeaderFormat: "showheadershort" });
			* &lt;/script&gt;
			 * @memberof ejDateTimePicker
			* @instance
			*/
            dayHeaderFormat: "showheadershort",

            /**		
			* Specifies the start level view in datepicker inside the DateTimePicker popup. See {@link DatePicker.Level}
			* @default ej.DatePicker.Level.Month or "month"
			* @type { String | Enum }
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set startLevel API during initialization  
			* 	$("#datetime").ejDateTimePicker({  startLevel:ej.DatePicker.Level.Year });
		    * &lt;/script&gt; 
			 * @memberof ejDateTimePicker
			* @instance
			*/
            startLevel: "month",

            /**		
			* Specifies the drill down level in datepicker inside the DateTimePicker popup.		See {@link ej.DatePicker.Level} 
			* @default ""
			* @type { enum }
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set depthLevel API during initialization  
			* 	$("#datetime").ejDateTimePicker({  depthLevel: "decade" });
			* &lt;/script&gt;
			 * @memberof ejDateTimePicker
			* @instance
			*/
            depthLevel: "",

            /**		
			* Specifies the start day of the week in datepicker inside the DateTimePicker popup. 
			* @default 1
			* @type { Number }
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set startDay API during initialization  
			* 	$("#datetime").ejDateTimePicker({  startDay: 2 });
			* &lt;/script&gt;
			 * @memberof ejDateTimePicker
			* @instance
			*/
            startDay: 0,

            /**		
			* Specifies the number of months to navigate at one click of next and previous button in datepicker inside the DateTimePicker popup. 
			* @default 1
			* @type { Number }
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set stepMonths API during initialization  
			* 	$("#datetime").ejDateTimePicker({  stepMonths: 2 });
			* &lt;/script&gt;
			 * @memberof ejDateTimePicker
			* @instance
			*/
            stepMonths: 1,

            /**		
			* It allows showing days in other months of DatePicker calendar inside the DateTimePicker popup.
			* @default true
			* @type { Boolean }
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set showOtherMonths API during initialization  
			* 	$("#datetime").ejDateTimePicker({  showOtherMonths: false });
			* &lt;/script&gt; 
			 * @memberof ejDateTimePicker
			* @instance
			*/
            showOtherMonths: true,
			enableAnimation: true,
            /**		
			* Specifies the header format to be displayed in the DatePicker calendar inside the DateTimePicker popup. 
			* @default "MMMM yyyy"
			* @type { String }
			* @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
			* //To set headerFormat API during initialization  
			* 	$("#datetime").ejDateTimePicker({  headerFormat: "MM - yyyy" });
			* &lt;/script&gt;
			 * @memberof ejDateTimePicker
			* @instance
			*/
            headerFormat: 'MMMM yyyy',

            /**     
            * Fires when DateTimePicker popup opens.
            * @event
            * @name ejDateTimePicker#open 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the timepicker model
            * @param {string}  argument.type returns the name of the event
			* @param {string}  argument.value returns the modified datetime value
			* @param {string}  argument.prevDateTime returns the previously selected date time value
            * @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
            * //open event for datetimepicker
            * $("#datetime").ejDateTimePicker({
            *    open: function (args) {}
            * });      
			* &lt;/script&gt;
            * @memberof ejDateTimePicker
            * @instance
            */
            open: null,

            /**     
            * Fires when DateTimePicker popup closes.
            * @event
            * @name ejDateTimePicker#close 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the timepicker model
            * @param {string}  argument.type returns the name of the event
			* @param {string}  argument.value returns the modified datetime value
			* @param {string}  argument.prevDateTime returns the previously selected date time value
            * @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
            * //close event for datetimepicker
            * $("#datetime").ejDateTimePicker({
            *    close: function (args) {}
            * }); 
			* &lt;/script&gt;			
            * @memberof ejDateTimePicker
            * @instance
            */
            close: null,
            /**     
            * Fires when the datetime value changed in the DateTimePicker textbox.
            * @event
            * @name ejDateTimePicker#change 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the timepicker model
            * @param {string}  argument.type returns the name of the event
            * @param {boolean}  argument.isValidState returns the current value is valid or not
            * @param {string}  argument.value returns the modified datetime value			
			* @param {string}  argument.prevDateTime returns the previously selected date time value
            * @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
            * //change event for datetimepicker
            * $("#datetime").ejDateTimePicker({
            *    change: function (args) {}
            * }); 
			* &lt;/script&gt;			
            * @memberof ejDateTimePicker
            * @instance
            */
            change: null,
			/**     
          * Fires after DateTimePicker control is created.
          * @event
          * @name ejDateTimePicker#create 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the DateTimePicker model
          * @param {string}  argument.type returns the name of the event
          * @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
            * //create event for datetimepicker
            * $("#datetime").ejDateTimePicker({
            *    create: function (args) {}
            * }); 
			* &lt;/script&gt;				
          * @memberof ejDateTimePicker
          * @instance
          */
            create: null,
			/**     
          * Fires when the DateTimePicker is destroyed successfully
          * @event
          * @name ejDateTimePicker#destroy 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the DateTimePicker model
          * @param {string}  argument.type returns the name of the event
          * @example 
			* &lt;input type="text" id="datetime" /&gt;
			* &lt;script&gt;
            * //destroy event for datetimepicker
            * $("#datetime").ejDateTimePicker({
            *    destroy: function (args) {}
            * }); 
			* &lt;/script&gt;				
          * @memberof ejDateTimePicker
          * @instance
          */
            destroy: null,
            /**     
           * Fires when the focus-in happens in the DateTimePicker textbox.
           * @event
           * @name ejDateTimePicker#focusIn
           * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
           * @param {object}  argument.model returns the timepicker model
           * @param {string}  argument.type returns the name of the event           
           * @param {string}  argument.value returns the datetime value, which is in text box
           * @example 
           * &lt;input type="text" id="datetime" /&gt;
           * &lt;script&gt;
           * //focusIn event for datetimepicker
           * $("#datetime").ejDateTimePicker({
           *    focusIn: function (args) {}
           * }); 
           * &lt;/script&gt;			
           * @memberof ejDateTimePicker
           * @instance
           */
            focusIn: null,
            /**     
         * Fires when the focus-out happens in the DateTimePicker textbox.
         * @event
         * @name ejDateTimePicker#focusOut
         * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
         * @param {object}  argument.model returns the timepicker model
         * @param {string}  argument.type returns the name of the event           
         * @param {string}  argument.value returns the datetime value, which is in text box
         * @example 
         * &lt;input type="text" id="datetime" /&gt;
         * &lt;script&gt;
         * //focusOut event for datetimepicker
         * $("#datetime").ejDateTimePicker({
         *    focusOut: function (args) {}
         * }); 
         * &lt;/script&gt;			
         * @memberof ejDateTimePicker
         * @instance
         */
            focusOut: null

        },

        /**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            cssClass: "string",
            locale: "string",
            readOnly: "boolean",
            showRoundedCorner: "boolean",
            enableRTL: "boolean",
            enabled: "boolean",
			enableAnimation: "boolean",
            dateTimeFormat: "string",
            showPopupButton: "boolean",
            buttonText: "data",
            enablePersistence: "boolean",
			enableStrictMode: "boolean",
            interval: "number",
            timeDisplayFormat: "string",

            dayHeaderFormat: "string",
            startLevel: "string",
            depthLevel: "string",
            startDay: "number",
            stepMonths: "number",
            showOtherMonths: "boolean",
            headerFormat: "string"
        },

        _setModel: function (options) {
            if (!this.model.enabled && ej.isNullOrUndefined(options["enabled"])) return false;
            var option, validate = false;
            for (option in options) {
                switch (option) {
                    case "cssClass": this._changeSkin(options[option]); break;
                    case "locale": this._localize(options[option]); break;
                    case "readOnly": this._readOnly(options[option]); break;
                    case "showRoundedCorner": this._setRoundedCorner(options[option]); break;
                    case "enableRTL": this._setRtl(options[option]); break;
                    case "enabled": this._enabled(options[option]); break;

                    case "value":
                        options[option] = this._setValue(options[option]);
                        validate = true; break;
					case "enableAnimation":{
							this.model.enableAnimation=options[key];
							break;
					}
					case "enableStrictMode":
                        this.model.enableStrictMode = jsondata[key];
                        validate = true;
                        break;
                    case "minDateTime":
                    case "maxDateTime":
                        var temp = this._stringToObject(options[option]);
                        if (this._isValidDate(temp)) {
                            this.datePicker.option(option + "Date", temp);
                            options[option] = temp;
                        }
                        else options[option] = this.model[option];
                        validate = true; break;
                    case "height": this.wrapper.height(options[option]); break;
                    case "width": this.wrapper.width(options[option]); break;                    
                    case "dateTimeFormat":
                        this.model.dateTimeFormat = options[option];
                        if (this.isValidState) this._setValue(this.model.value);
                        break;
                    case "showPopupButton": this._showButton(options[option]); break;
                    case "buttonText": this._buttonText(options[option]); break;

                    case "interval": this.timePicker.option("interval", options[option]); break;
                    case "timeDisplayFormat": this.timePicker.option("timeFormat", options[option]); break;
                    case "timePopupWidth": this.timePicker.option("popupWidth", options[option]); break;

                    case "dayHeaderFormat": this.datePicker.option("dayHeaderFormat", options[option]); break;
                    case "startLevel": this.datePicker.option("startLevel", options[option]); break;
                    case "depthLevel": this.datePicker.option("depthLevel", options[option]); break;
                    case "startDay": this.datePicker.option("startDay", options[option]); break;
                    case "stepMonths": this.datePicker.option("stepMonths", options[option]); break;
                    case "showOtherMonths": this.datePicker.option("showOtherMonths", options[option]); break;
                    case "headerFormat": this.datePicker.option("headerFormat", options[option]); break;
                }
            }
            if (validate) this._validateMinMax();
            this._valueChange();
            this._checkErrorClass();
        },
        observables: ["value"],
        // all events bound using this._on will be unbind automatically
        _destroy: function () {
            this.element.insertAfter(this.wrapper);
            this.element.removeClass("e-input").val("");
            this.wrapper.remove();
            this.popup.remove();
        },

        // constructor function
        _init: function () {
            if (!this.element.is("input") || (this.element.attr('type') && this.element.attr('type') != "text")) return false;
            this._initialize();
            this._render();
            this._wireEvents();
        },

        _initialize: function () {
            this.popup = null;
            this.isPopupOpen = false;
            this.isValidState = true;
            if (!this.model.dateTimeFormat || !this.model.timeDisplayFormat) this._getDateTimeFormat();
            if (typeof this.model.value == "string" && typeof this.model.value != "") {
                var val = this._stringToObject(this.model.value);
                if (val) this.model.value = val;
            }
            var min = this.model.minDateTime = this._stringToObject(this.model.minDateTime);
            if (!min || !this._isValidDate(min)) this.model.minDateTime = this.defaults.minDateTime;
            var max = this.model.maxDateTime = this._stringToObject(this.model.maxDateTime);
            if (!max || !this._isValidDate(max)) this.model.maxDateTime = this.defaults.maxDateTime;
        },

        _render: function () {
            this._renderWrapper();
            this._renderIcon();
            this._setDimentions();
            this._renderDropdown();
            this._checkProperties();
        },

        _renderWrapper: function () {
            this.element.addClass("e-input").attr({ 'aria-atomic': 'true', 'aria-live': 'assertive', "tabindex": "0", "value": this.model.value });
            this.wrapper = ej.buildTag("span.e-datetime-wrap e-widget " + this.model.cssClass + "#" + this.element[0].id + "_wrapper").insertAfter(this.element);
            this.container = ej.buildTag("span.e-in-wrap e-box").append(this.element);
            this.wrapper.append(this.container);
        },
        _renderIcon: function () {
            if (!this.model.showPopupButton) return false;
            this.datetimeIcon = ej.buildTag("span.e-select");
            var icon = ej.buildTag("span.e-icon e-datetime", "", {}, {"aria-label":"select"});
            this.datetimeIcon.append(icon);
            this.container.append(this.datetimeIcon).addClass("e-padding");
            this._on(this.datetimeIcon, "click", this._iconClick);
            this._on(this.datetimeIcon, "mousedown", function (e) { e.preventDefault(); });
        },
        _setDimentions: function () {
            if (this.model.height) this.wrapper.height(this.model.height);
            if (this.model.width) this.wrapper.width(this.model.width);
        },

        _renderDropdown: function () {
			var oldWrapper = $("#" + this.element.context.id + "_popup").get(0);
            if (oldWrapper)
                $(oldWrapper).remove();
            this.popup = ej.buildTag("div.e-datetime-popup e-popup e-widget e-box " + this.model.cssClass + "#" + this.element[0].id + "_popup").css("visibility", "hidden");
            $('body').append(this.popup);
            this._renderControls();
            var _timeTitle, _dateContainer, _timeContainer, popupContainer, _today, _now, _done, buttonContainer;

            _timeTitle = ej.buildTag("div.e-header", this.model.buttonText.timeTitle);
            _dateContainer = ej.buildTag("div.e-datecontainer").append(this.datePicker.popup);
            _timeContainer = ej.buildTag("div.e-timecontainer").append(_timeTitle, this.timePicker.popup);
            popupContainer = ej.buildTag("div.e-popup-container").append(_dateContainer, _timeContainer);

            _today = ej.buildTag("div.e-dt-button e-dt-today", this.model.buttonText.today);
            _now = ej.buildTag("div.e-dt-button e-dt-now", this.model.buttonText.now);
            _done = ej.buildTag("div.e-dt-button e-dt-done", this.model.buttonText.done);
            buttonContainer = ej.buildTag("div.e-button-container").append(_today, _now, _done);

            this.popup.append(popupContainer, buttonContainer);
            this._updateTimeHeight();

            this._bindOperations();
            this._updateValues();
            this.popup.css({ "visibility": "visible", "display": "none" });

            this._on(_today, "click", this._todayClick);
            this._on(_now, "click", this._nowClick);
            this._on(_done, "click", this._doneClick);
        },
        _renderControls: function () {
            this._renderDateControl();
            this._renderTimeControl();

            var tempContainer = ej.buildTag("span").append(this.datePicker.wrapper, this.timePicker.wrapper);
            tempContainer.find("span").css("display", "none");
            this.popup.append(tempContainer);
        },
        _renderDateControl: function () {
            var dateInput = ej.buildTag("input#" + this.element[0].id + "_date", "", {}, { "type": "text" });
            this.popup.append(dateInput);

            dateInput.ejDatePicker({
                // static values //
                height: "0px", width: "0px",
                displayInline: true,
                showDateIcon: false,
                showFooter: false,
                enableStrictMode: true,

                // default values //
                minDate: this._stringToObject(this.model.minDateTime),
                maxDate: this._stringToObject(this.model.maxDateTime),
                //value: this.model.value,
                dayHeaderFormat: this.model.dayHeaderFormat,
                startLevel: this.model.startLevel,
                depthLevel: this.model.depthLevel,
                startDay: this.model.startDay,
                stepMonths: this.model.stepMonths,
                showOtherMonths: this.model.showOtherMonths,
                headerFormat: this.model.headerFormat,
                buttonText: this.model.buttonText.today,

                // common values //
                enabled: this.model.enabled,
                enableRTL: this.model.enableRTL,
                showRoundedCorner: this.model.showRoundedCorner,
                readOnly: this.model.readOnly,
                cssClass: this.model.cssClass,
                locale: this.model.locale
            });
            this.datePicker = dateInput.data("ejDatePicker");
            this.datePicker._getInternalEvents = true;
            this.datePicker.popup.css({ "position": "static", "display": "block" });
        },
        _renderTimeControl: function () {
            var timeInput = ej.buildTag("input#" + this.element[0].id + "_time", "", {}, { "type": "text" });
            this.popup.append(timeInput);

            timeInput.ejTimePicker({
                // static values //
                height: "0px", width: "0px",

                // default values //
                interval: this.model.interval,
                //value: this.model.value,
                timeFormat: this.model.timeDisplayFormat,
                popupWidth: this.model.timePopupWidth,

                // common values //
                enabled: this.model.enabled,
                enableRTL: this.model.enableRTL,
                showRoundedCorner: this.model.showRoundedCorner,
                readOnly: this.model.readOnly,
                cssClass: this.model.cssClass,
                locale: this.model.locale
            });
            this.timePicker = timeInput.data("ejTimePicker");
            this.timePicker._getInternalEvents = true;
            this.timePicker.showDropdown = true;
            this.timePicker.popup.css({ "position": "static", "display": "block" });
        },
        _updateTimeHeight: function () {
            var height = this.datePicker.popup.outerHeight() - this.popup.find(".e-header").outerHeight() - 2;
            this.timePicker.option("popupHeight", height);
        },

        _bindOperations: function () {
            var proxy = this;
            this.datePicker.option("layoutChange", function () { proxy._updateTimeHeight(); });
            this.datePicker.option("outOfRange", function () { proxy.isValidState = false; });
            this.timePicker.option("outOfRange", function () { proxy.isValidState = false; });
            this.datePicker.option("change", function (a) { proxy._refreshTimes(a); });
            this.datePicker.option("select", function (e) { proxy._updateInput(e); });
            this.timePicker.option("select", function () { proxy._updateInput(); });
        },
        _updateInput: function ( e) {
            var date = this._getDate() || new Date(), time = this._getTime() || new Date();
            this.model.value = new Date(date.getFullYear(), date.getMonth(), date.getDate(),
                time.getHours(), time.getMinutes(), time.getSeconds());
            this._preVal = this._objectToString(this.model.value);
            this._updateDateTime();
            this._raiseChangeEvent();
            if(e)
            e.cancel = true;
        },
        _updateDateTime: function () {
            this.isValidState = true;
            var datetime = this._objectToString(this.model.value);
            this.element.val(datetime);
        },
        _refreshTimes: function (args) {
            var value = this._getDateObj(args.value, this.datePicker.model.dateFormat);
            if (!value) return false;
            this.isValidState = true;

            if (this._compare(value, this._setEmptyTime(this.model.minDateTime))) {
                var mintime = this._getFormat(this.model.minDateTime, "HH:mm:ss");
                var preTime = this._getTime();
                this.timePicker.option("minTime", mintime);
                if (!this._compare(preTime, this._getTime())) {
                    this.timePicker.model.value = this._getFormat(preTime, this.timePicker.model.timeFormat);
                    this.isValidState = false;
                }
            }
            else this.timePicker.option("minTime", "12:00:00 AM");

            if (this._compare(value, this._setEmptyTime(this.model.maxDateTime))) {
                var maxtime = this._getFormat(this.model.maxDateTime, "HH:mm:ss");
                var preTime = this._getTime();
                this.timePicker.option("maxTime", maxtime);
                if (!this._compare(preTime, this._getTime())) {
                    this.timePicker.model.value = this._getFormat(preTime, this.timePicker.model.timeFormat);
                    this.isValidState = false;
                }
            }
            else this.timePicker.option("maxTime", "11:59:59 PM");
        },

        _updateValues: function () {
            this._setValue(this.model.value);

            this.datePicker.option("value", this.model.value);
            this.timePicker.option("value", this.model.value);
            this._validateMinMax();
            this._preVal = this.element.val();
            this._checkErrorClass();
        },
        _setValue: function (value) {
            if (value == null || (typeof JSON === "object" && JSON.stringify(value) === "{}")) {
                this.element.val("");
                this.model.value = null;
                this.isValidState = true;
            }
            else if (typeof value === "string") {
                this.element.val(value);
                this._updateModel();
				this._validateMinMax();
				this._checkStrictMode();
            }
            else if (value instanceof Date && this._isValidDate(value)) {
                this.model.value = value;
                this._updateDateTime();
				this._validateMinMax();
				this._checkStrictMode();
            }

            this._checkErrorClass();
            return this.model.value;
        },
        _validateValue: function (value) {
            var dateObj = this._stringToObject(value);
            if (!dateObj) {
                this.model.value = value;
                this.isValidState = false;
            }
            else {
                this.isValidState = true;
                this.model.value = dateObj;
            }
        },
        _validateMinMax: function () {
            var value, min, max;
            value = (this.model.value) ? this._stringToObject(this.model.value) : null;
            min = (this.model.minDateTime) ? this._stringToObject(this.model.minDateTime) : this.defaults.minDateTime;
            max = (this.model.maxDateTime) ? this._stringToObject(this.model.maxDateTime) : this.defaults.maxDateTime;
            if (!value || !min || !max) return false;

            if (min > max) this.model.minDateTime = this.model.maxDateTime;
            if (value < min || value > max) this.isValidState = false;
            else this.isValidState = true;
        },

        _checkProperties: function () {
            this.model.readOnly && this._readOnly(true);
            this.model.showRoundedCorner && this._setRoundedCorner(true);
            this.model.enableRTL && this._setRtl(true);
            this.model.enabled && this._enabled(true);
            if (!this.element.attr("name")) this.element.attr({ "name": this.element[0].id });
			this._checkStrictMode();
            this._checkErrorClass();
        },
        
		_checkStrictMode: function () {
			if(!this.model.enableStrictMode){
				if(!this.isValidState){
					if(this.model.value < this.model.minDateTime){
						this.element.val(this._objectToString(this.model.minDateTime));
						this.model.value = this.model.minDateTime;
						this.isValidState = true;
					}
					else if(this.model.value > this.model.maxDateTime){
						this.element.val(this._objectToString(this.model.maxDateTime));
						this.model.value = this.model.maxDateTime;
						this.isValidState = true;
					}
					else {
						this.model.value = "";
						this.element.val("");
						this.isValidState = true;
					}
				}
			}
		},
		
        _targetFocus: function (e) {
            e.preventDefault();
            this.isFocused = true;
            this.wrapper.addClass("e-focus");
            this.wrapper.removeClass("e-error");
			this._prevDateTimeVal = this.element.val();
            if (!this.model.showPopupButton && !this.model.readOnly) this._showResult();
            this._trigger("focusIn", { value: this.model.value });
        },
        _targetBlur: function () {
            this.isFocused = false;
            this.wrapper.removeClass("e-focus");
            if (!this.model.showPopupButton) this._hideResult();
			if(!this.model.enableStrictMode){
				if(!this.isValidState){
					this.element.val(this._prevDateTimeVal);
					this._preVal = this._prevDateTimeVal;
					this.model.value = this._stringToObject(this._prevDateTimeVal);
					this.isValidState = true;
				}
				else
					this._prevDateTimeVal = this.element.val();
			}
			this._checkErrorClass();
            this._trigger("focusOut", { value: this.model.value });
        },

        _keyDownOnInput: function (e) {
            switch (e.keyCode) {
                case 40:        // Down Key
                    if (e.altKey) this._showhidePopup();
                    break;
                case 37:        // Left Key
                case 39:         // Right Key
                    if (e.altKey && this.isPopupOpen) {
                        e.preventDefault();
                        this._addPrevNextFocus(e.keyCode == 37);
                    }
                    break;
                case 27:        // Esc Key
                    e.preventDefault();
                case 9:         // Tab Key
                    this._hideResult();
                    break;
            }
        },
        _addFocus: function (target) {
            if (!target.hasClass("e-focus")) {
                this._removeFocus();
                target.addClass("e-focus");
                if (target.hasClass("e-datecontainer"))
                    $(document).bind("keydown", $.proxy(this.datePicker._keyboardNavigation, this.datePicker));
                else if (target.hasClass("e-timecontainer"))
                    $(document).bind("keydown", $.proxy(this.timePicker._keyDownOnInput, this.timePicker));
                else if (target.hasClass("e-dt-button"))
                    $(document).bind("keydown", $.proxy(this._buttonClick, this));
            }
        },
        _removeFocus: function () {
            var target = this._getFocusedElement();
            if (target.length > 0) {
                target.removeClass("e-focus");
                if (target.hasClass("e-datecontainer"))
                    $(document).unbind("keydown", $.proxy(this.datePicker._keyboardNavigation, this.datePicker));
                else if (target.hasClass("e-timecontainer"))
                    $(document).unbind("keydown", $.proxy(this.timePicker._keyDownOnInput, this.timePicker));
                else if (target.hasClass("e-dt-button"))
                    $(document).unbind("keydown", $.proxy(this._buttonClick, this));
            }
        },
        _addPrevNextFocus: function (flag) {
            // flag true means previous focus, false means next focus
            var target = this._getFocusedElement(), next;
            if (target.length > 0) {
                if (target.hasClass("e-datecontainer"))
                    next = flag ? this.popup.find(".e-dt-done") : this.popup.find(".e-timecontainer");
                else if (target.hasClass("e-timecontainer"))
                    next = flag ? this.popup.find(".e-datecontainer") : this.popup.find(".e-dt-today");
                else if (target.hasClass("e-dt-today"))
                    next = flag ? this.popup.find(".e-timecontainer") : this.popup.find(".e-dt-now");
                else if (target.hasClass("e-dt-now"))
                    next = flag ? this.popup.find(".e-dt-today") : this.popup.find(".e-dt-done");
                else if (target.hasClass("e-dt-done"))
                    next = flag ? this.popup.find(".e-dt-now") : this.popup.find(".e-datecontainer");
            }
            else next = flag ? this.popup.find(".e-dt-done") : this.popup.find(".e-datecontainer");
            this._addFocus(next);
        },
        _getFocusedElement: function () {
            return this.popup.children("div").children("div.e-focus");
        },

        _valueChange: function () {
            if (this._preVal != this.element.val()) {
                this._preVal = this.element.val();
                this._updateModel();
                this._validateMinMax();
                this._raiseChangeEvent();
            }
        },
        _updateModel: function () {
            var value = this.element.val();
            if (value == "") {
                this.model.value = null;
                this.isValidState = true;
            }
            else {
                var dateObj = this._stringToObject(value);
                if (dateObj) {
                    this.model.value = dateObj;
                    this.isValidState = true;
                    this._refreshPopup();
                }
                else {
                    this.model.value = value;
                    this.isValidState = false;
                }
            }
        },
        _refreshPopup: function () {
            if (this.isValidState && this.isPopupOpen) {
                var date = this._setEmptyTime(this.model.value), time = this._setEmptyDate(this.model.value);
                var getDate = this._getDate(), getTime = this._getTime();
                if (!getDate || !this._compare(getDate, date)) this.datePicker.option("value", date);
                if (!getTime || !this._compare(getTime, time)) this.timePicker.option("value", time);
            }
        },

        _buttonClick: function (e) {
            if (e.keyCode == 13) {
                var target = this._getFocusedElement();
                if (target.hasClass("e-dt-today"))
                    this._todayClick();
                else if (target.hasClass("e-dt-now"))
                    this._nowClick();
                else if (target.hasClass("e-dt-done"))
                    this._doneClick();
            }
        },
        _todayClick: function () {
            if (!this.model.enabled || this.model.readOnly) return false;
            if (!this.datePicker.popup.find(".today").hasClass("e-active") ||
                !this.datePicker.popup.children("table").hasClass("e-dp-viewdays")||
                this.element.val() == "" || !this.isValidState)
            {
                this.datePicker._setCurrDate();
                this._updateInput();
            }
        },
        _nowClick: function () {
            if (!this.model.enabled || this.model.readOnly) return false;
            this.timePicker.setCurrentTime();
            this._updateInput();
        },
        _doneClick: function () {
            this._hideResult();
        },

        _iconClick: function (e) {
            e.preventDefault();
            if (!this.isFocused) this.element.focus();
            this._showhidePopup();
        },
        _showhidePopup: function () {
            if (this.model.readOnly) return false;
            if (!this.isPopupOpen)
                this._showResult();
            else
                this._hideResult();
        },
        _showResult: function () {
            if (this.isPopupOpen || !this.model.enabled) return false;
            if (this._raiseEvent("open")) return false;
            this.isPopupOpen = true;
            this._setListPosition();
            var proxy = this;
            this.popup.slideDown(this.model.enableAnimation?200:0, "easeOutQuad", function () {
                proxy._on($(document), "mousedown", proxy._OnDocumentClick);
            });
            this._updateModel();
            this._updateTimeHeight();
            this._validateMinMax();
            this._on($(window), "resize", this._OnWindowResize);
        },
        _hideResult: function () {
            if (!this.isPopupOpen) return false;
            if (this._raiseEvent("close")) return false;
            this.isPopupOpen = false;
            this._removeFocus();
            this.popup.slideUp(this.model.enableAnimation?100:0, "easeOutQuad");
            this._off($(document), "mousedown", this._OnDocumentClick);
            this._off($(window), "resize", this._OnWindowResize);
        },
        _setListPosition: function () {
            var pos = this.wrapper.offset(),
            left = pos.left,
            top = pos.top + this.wrapper.outerHeight() + 3 + "px",
            maxZ = this._getZindexPartial();
            if (this.model.enableRTL) left -= this.popup.outerWidth() - this.wrapper.outerWidth();

            this.popup.css({ "left": left + "px", "top": top, "z-index": maxZ });
        },
       
        _OnDocumentClick: function (e) {
            if (!$(e.target).is(this.popup) && !$(e.target).parents(".e-datetime-popup").is(this.popup) &&
                !$(e.target).is(this.wrapper) && !$(e.target).parents(".e-datetime-wrap").is(this.wrapper)) {
                this._hideResult();
            }
            else if ($(e.target).is(this.popup) || $(e.target).parents(".e-datetime-popup").is(this.popup)) {
                e.preventDefault();
                if ($(e.target).parents(".e-datecontainer").length > 0) this._addFocus($(e.target).parents(".e-datecontainer"));
                else if ($(e.target).parents(".e-timecontainer").length > 0) this._addFocus($(e.target).parents(".e-timecontainer"));
                else if ($(e.target).hasClass("e-dt-button")) this._addFocus($(e.target));
                else this._removeFocus();
            }
        },
        _OnWindowResize: function (e) {
            this._setListPosition();
        },

        _raiseChangeEvent: function () {
            if (this.element != null && this.model.change)
                this._trigger("change", {
                    prevDateTime: this._preVal,
                    value: this.element.val(),
                    isValidState: this.isValidState
                });
        },
        _raiseEvent: function (name) {
            if (this.element != null && this.model[name]) return this._trigger(name, { prevDateTime: this._preVal, value:this.element.val() });
            return false;
        },
        _getDateTimeFormat: function () {
            var pattern = Globalize.culture(this.model.locale).calendar.patterns;

            if (!this.model.dateTimeFormat) this.model.dateTimeFormat = pattern.d + " " + pattern.t;
            if (!this.model.timeDisplayFormat) this.model.timeDisplayFormat = pattern.t;
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
        _checkErrorClass: function () {
            if (this.isValidState) this.wrapper.removeClass("e-error");
            else this.wrapper.addClass("e-error");
        },
        _getDate: function () {
            return this.datePicker.model.value;
        },
        _getTime: function () {
            return this._getDateObj(this.timePicker.model.value, this.timePicker.model.timeFormat);
        },
        _setEmptyTime: function (date) {
            var newDate = new Date(date);
            newDate.setMilliseconds(0);
            newDate.setSeconds(0);
            newDate.setMinutes(0);
            newDate.setHours(0);
            return newDate;
        },
        _setEmptyDate: function (date) {
            var newDate = new Date(date);
            newDate.setDate(1);
            newDate.setMonth(0);
            newDate.setFullYear(2000);
            return newDate;
        },
        _objectToString: function (obj) {
            return this._getFormat(obj, this.model.dateTimeFormat);
        },
        _stringToObject: function (value) {
            return this._getDateObj(value, this.model.dateTimeFormat);
        },
        _getFormat: function (value, format) {
            if (value instanceof Date)
                return Globalize.format(value, format, this.model.locale);
            else return value;
        },
        _getDateObj: function (value, format) {
            if (typeof value === "string")
            {
                var temp = Globalize.parseDate(value, format);
                if(temp != null)
                	return temp;
                else
                {
                	var validDateObj = new Date(value);
                	if(this._isValidDate(validDateObj))
	                	return validDateObj; 
	                else return null;
                }
            }
            else return value;
        },
        _compare: function (obj1, obj2) {
            return obj1 && obj2 && obj1.getTime() == obj2.getTime();
        },
        _isValidDate: function (dateObj) {
            return dateObj && typeof dateObj.getTime === "function" && isFinite(dateObj.getTime());
        },

        //-------------------- Private Methods for setModel -------------------------//
        _change: function (property, value) {
            this.datePicker.option(property, value);
            this.timePicker.option(property, value);
        },
        _changeSkin: function (skin) {
            this.wrapper.removeClass(this.model.cssClass).addClass(skin);
            this.popup.removeClass(this.model.cssClass).addClass(skin);

            this._change("cssClass", skin);
        },
        _localize: function (culture) {
            this.model.locale = culture;
            this.model.dateTimeFormat = this.model.timeDisplayFormat = "";
            this._getDateTimeFormat();
            if (this.isValidState || (this.model.value instanceof Date && this._isValidDate(this.model.value)))
                this.element.val(this._objectToString(this.model.value));
            this._preVal = this.element.val();
            this._change("locale", culture);
        },
        _readOnly: function (boolean) {
            if (boolean) this.element.attr("readonly", "readonly");
            else this.element.removeAttr("readonly");

            this._change("readOnly", boolean);
        },
        _setRoundedCorner: function (boolean) {
            if (boolean) {
                this.container.addClass("e-corner-all");
                this.popup.addClass("e-corner-all");
                this.popup.find(".e-dt-button").addClass("e-corner-all");
            }
            else {
                this.container.removeClass("e-corner-all");
                this.popup.removeClass("e-corner-all");
                this.popup.find(".e-dt-button").removeClass("e-corner-all");
            }
            this.datePicker.option("showRoundedCorner", boolean);
        },
        _setRtl: function (boolean) {
            if (boolean) {
                this.wrapper.addClass("e-rtl");
                this.popup.addClass("e-rtl");
            }
            else {
                this.wrapper.removeClass("e-rtl");
                this.popup.removeClass("e-rtl");
            }

            this._change("enableRTL", boolean);
        },
        _enabled: function (boolean) {
            if (boolean) this.enable();
            else {
                this.model.enabled = true; // for initial rendering
                this.disable();
            }
        },
        _showButton: function (show) {
            this.model.showPopupButton = show;
            if (show) {
                this.container.addClass("e-padding");
                this._renderIcon();
            }
            else {
                this.container.removeClass("e-padding");
                this.datetimeIcon.remove();
                this.datetimeIcon = null;
            }
        },
        _buttonText: function (data) {
            $.extend(this.model.buttonText, data);
            this.popup.find(".e-dt-today").html(this.model.buttonText.today);
            this.popup.find(".e-dt-now").html(this.model.buttonText.now);
            this.popup.find(".e-dt-done").html(this.model.buttonText.done);
            this.popup.find(".e-timecontainer").find(".e-header").html(this.model.buttonText.timeTitle);
        },

        //-------------------- Public Methods -------------------------//

        /**
        * Enables the DateTimePicker control.
		* @return jQuery
		* @example 
		* &lt;input type="text" id="datetime" /&gt;
		* &lt;script&gt;
		* $("#datetime").ejDateTimePicker();
		* // Create DateTimePicker instance
		* var datetimeObj = $("#datetime").data("ejDateTimePicker");
		* datetimeObj.enable(); // enables the datetimepicker
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="datetime" /&gt;
	    * &lt;script&gt;
		* $("#datetime").ejDateTimePicker();
	    * // enables the datetimepicker
        * $("#datetime").ejDateTimePicker("enable");
	    * &lt;/script&gt;
		*@memberof ejDateTimePicker
		* @instance
        */
        enable: function () {
            if (!this.model.enabled) {
                this.element[0].disabled = false;
                this.model.enabled = true;
                this.element.removeClass("e-disable").attr("aria-disabled", false);
                if (this.datetimeIcon) this.datetimeIcon.removeClass("e-disable").attr("aria-disabled", false);
                this.popup.children("div").removeClass("e-disable").attr("aria-disabled", false);
                this._change("enabled", true);
            }
        },

        /**
        * Disables the DateTimePicker control.
		* @return jQuery
		* @example 
		* &lt;input type="text" id="datetime" /&gt;
		* &lt;script&gt;
		* $("#datetime").ejDateTimePicker();
		* // Create DateTimePicker instance
		* var datetimeObj = $("#datetime").data("ejDateTimePicker");
		* datetimeObj.disable(); // disables the datetimepicker
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="datetime" /&gt;
	    * &lt;script&gt;
		* $("#datetime").ejDateTimePicker();
	    * // disables the datetimepicker
        * $("#datetime").ejDateTimePicker("disable");
	    * &lt;/script&gt;
		*@memberof ejDateTimePicker
		* @instance
        */
        disable: function () {
            if (this.model.enabled) {
                this.element[0].disabled = true;
                this.model.enabled = false;
                this.element.addClass("e-disable").attr("aria-disabled", true);
                if (this.datetimeIcon) this.datetimeIcon.addClass("e-disable").attr("aria-disabled", true);
                this.popup.children("div").addClass("e-disable").attr("aria-disabled", true);
                this._hideResult();

                this._change("enabled", false);
                this.datePicker.popup.removeClass("e-disable").attr("aria-disabled", false);
                this.timePicker.popup.removeClass("e-disable").attr("aria-disabled", false);
            }
        },

        /**
        * Returns the current datetime value in the DateTimePicker.
		* @return datetime value
		* @example 
		* &lt;input type="text" id="datetime" /&gt;
		* &lt;script&gt;
		* $("#datetime").ejDateTimePicker();
		* // Create DateTimePicker instance
		* var datetimeObj = $("#datetime").data("ejDateTimePicker");
		* datetimeObj.getValue(); // returns the datetime value
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="datetime" /&gt;
	    * &lt;script&gt;
		* $("#datetime").ejDateTimePicker();
	    * // returns the datetime value
        * $("#datetime").ejDateTimePicker("getValue");
	    * &lt;/script&gt;
		*@memberof ejDateTimePicker
		* @instance
        */
        getValue: function () {
            return this._objectToString(this.model.value);
        },

        /**
        * Updates the current system date value and time value to the DateTimePicker.
		* @return jQuery
		* @example 
		* &lt;input type="text" id="datetime" /&gt;
		* &lt;script&gt;
		* $("#datetime").ejDateTimePicker();
		* // Create DateTimePicker instance
		* var datetimeObj = $("#datetime").data("ejDateTimePicker");
		* datetimeObj.setCurrentDateTime(); // updates the current datetime value
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="datetime" /&gt;
	    * &lt;script&gt;
		* $("#datetime").ejDateTimePicker();
	    * // updates the current datetime value
        * $("#datetime").ejDateTimePicker("setCurrentDateTime");
	    * &lt;/script&gt;
		*@memberof ejDateTimePicker
		* @instance
        */
        setCurrentDateTime: function () {
            if (this.model.enabled && !this.model.readOnly)
                this._setValue(new Date());
        },

        /**
        * Shows or opens the DateTimePicker popup.
		* @return jQuery
		* @example 
		* &lt;input type="text" id="datetime" /&gt;
		* &lt;script&gt;
		* $("#datetime").ejDateTimePicker();
		* // Create DateTimePicker instance
		* var datetimeObj = $("#datetime").data("ejDateTimePicker");
		* datetimeObj.show(); // opens the datetime popup
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="datetime" /&gt;
	    * &lt;script&gt;
		* $("#datetime").ejDateTimePicker();
	    * // opens the datetime popup
        * $("#datetime").ejDateTimePicker("show");
	    * &lt;/script&gt;
		*@memberof ejDateTimePicker
		* @instance
        */
        show: function () {
            this._showResult();
        },

        /**
        * Hides or closes the DateTimePicker popup.
		* @return jQuery
		* @example 
		* &lt;input type="text" id="datetime" /&gt;
		* &lt;script&gt;
		* $("#datetime").ejDateTimePicker();
		* // Create DateTimePicker instance
		* var datetimeObj = $("#datetime").data("ejDateTimePicker");
		* datetimeObj.hide(); // hides the datetime popup
		* &lt;/script&gt;
		* @example 
	    * &lt;input type="text" id="datetime" /&gt;
	    * &lt;script&gt;
		* $("#datetime").ejDateTimePicker();
	    * // hides the datetime popup
        * $("#datetime").ejDateTimePicker("hide");
	    * &lt;/script&gt;
		*@memberof ejDateTimePicker
		* @instance
        */
        hide: function () {
            this._hideResult();
        },

        //-------------------- Event Wire-up -------------------------//
        _wireEvents: function () {
            this._on(this.element, "focus", this._targetFocus);
            this._on(this.element, "blur", this._targetBlur);
            this._on(this.element, "keydown", this._keyDownOnInput);
            this._on(this.element, "keyup", this._valueChange);
        }
    });
})(jQuery, Syncfusion);;