/*!
*  filename: ej.progressbar.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Progressbar elements
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
   * @class ejProgressBar
   * @requires jQuery
    * @requires jquery.easing.1.3.js
    * @requires ej.core.js
	* @requires ej.progressbar.js
	* @classdesc Custom Design for Progressbar control.
   * @example
   *&lt;div id="progress"&gt;&lt;/div&gt;
   *&lt;script&gt;
   *$("#progress").ejProgressBar({value: 50});
   *&lt;/script&gt;

   */
    // ejProgressbar is the plugin name 
    // "ej.Progressbar" is "namespace.className" will hold functions and properties

    ej.widget("ejProgressBar", "ej.ProgressBar", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _setFirst: false,
        _rootCSS: "e-progressbar",

        // default model
        defaults: {
            /// <summary>This Contains default property of Sycnfusion Tab control </summary>
            /**		
			* Sets the custom text for the ProgressBar. The text placed in the middle of the ProgressBar and it can be customizable using the class 'e-progress-text'. 
			* @default null
			* @type {String}
			* @example 
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt; 
			* //To set the text API value during initialization  
			* $("#progress").ejProgressBar({ text: 'loading...',value: 50 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            text: "",
            /**
			* Sets the root class for ProgressBar theme. This cssClass API helps to use custom skinning option for ProgressBar control. By defining the root class using this API, we need to include this root class in CSS.
			* @default null
			* @type {String}
			* @example 
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the cssClass value specified
			* $("#progress").ejProgressBar({ cssClass: 'gradient-lime ',value: 50  });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            cssClass: "",
            /**
			* Sets the minimum value of the ProgressBar.
			* @default 0
			* @type {Number}
			* @example
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the min value specified
			* $("#progress").ejProgressBar({ minValue: 50,value: 50});
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            minValue: 0,
            /**
			* Sets the maximum value of the ProgressBar.
			* @default 100
			* @type {Number}
			* @example 
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the max value specified
			* $("#progress").ejProgressBar({ maxValue: 200 ,value: 200 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            maxValue: 100,
            /**
			* Sets the ProgressBar value. The value should be in between min and max values.
			* @default 0
			* @type {Number}
			* @example
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the progress value specified
			* $("#progress").ejProgressBar({ value: 70 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            value: 0,
            /**
			* Sets the ProgressBar value in percentage. The value should be in between 0 to 100.
			* @default 0
			* @type {Number}
			* @example
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the progress value specified in percent
			* $("#progress").ejProgressBar({ percentage : 35 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            percentage: 0,
            /**
			* Defines the height of the ProgressBar.
			* @default null
			* @type {Number/String}
			* @example 
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the height value specified
			* $("#progress").ejProgressBar({ height: 20,value: 50 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            height: null,
            /**
			* Defines the width of the ProgressBar.
			* @default null
			* @type {Number/String}
			* @example 
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the width value specified
			* $("#progress").ejProgressBar({ width: 200,value: 50});
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            width: null,
            /**
			* When this property sets to false, it disables the ProgressBar control
			* @default true
			* @type {boolean}
			* @example
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the enabled value specified
			* $("#progress").ejProgressBar({ enabled: true,value: 50 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            enabled: true,
            /**
			* Sets the ProgressBar direction as right to left alignment.
			* @default false
			* @type {boolean}
			* @example
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the Progress bar with the rtl value specified
			* $("#progress").ejProgressBar({ enableRTL: true,value: 50 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            enableRTL: false,
            /**
			* Save current model value to browser cookies for state maintains. While refresh the progressBar control page retains the model value apply from browser cookies
			* @default false
			* @type {boolean}
			* @example 
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the Progress bar with the persist value specified
			* $("#progress").ejProgressBar({ enablePersistence: true,value: 50 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            enablePersistence: false,
            /**
			 * Event triggers when the process starts (from 0%)
			 * @event
			 * @name ejProgressBar#start
			 * @param {Object} argument Event parameters from progressbar   
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the ProgressBar model
			 * @param {object}  argument.percentage returns the current progress percentage
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument returns the current progress value
			 * @example
			 * &lt;div id="progress"&gt;&lt;/div&gt;
			 * &lt;script&gt;
			 * //initial start event
			 *$("#progress").ejProgressBar({
			 * value: 50,
			 *	start: function(args) {}
			 *});
             * &lt;/script&gt;
			 * @memberof ejProgressBar
			 * @instance
			 */
            start: null,
            /**     
			 * Event triggers when the process completes (at 100%)
			 * @event
			 * @name ejProgressBar#complete
			 * @param {Object} argument Event parameters from progressbar   
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the ProgressBar model
			 * @param {object}  argument.percentage returns the current progress percentage
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument returns the current progress value
			 * @example
			 * &lt;div id="progress"&gt;&lt;/div&gt;
			 * &lt;script&gt;
			 * //initial complete event
			 *$("#progress").ejProgressBar({
			 *	value: 50,
			 *	complete: function(args) {}
			 *});
             * &lt;/script&gt;
			 * @memberof ejProgressBar
			 * @instance
			 */
            complete: null,
            /**
			 * Event triggers when the progress value changed
			 * @event
			 * @name ejProgressBar#change
			 * @param {Object} argument Event parameters from progressbar   
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the ProgressBar model
			 * @param {object}  argument.percentage returns the current progress percentage
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument returns the current progress value
			 * @example
			 * &lt;div id="progress"&gt;&lt;/div&gt;
			 * &lt;script&gt;
			 * //initial complete event
			 *$("#progress").ejProgressBar({
			 *	value: 50,
			 *	change: function(args) {}
			 *});
             * &lt;/script&gt;
			 * @memberof ejProgressBar
			 * @instance
			 */
            change: null,
            /**     
            * Event triggers when the progressbar are created
            * @event
            * @name ejProgressBar#create 	
            * @param {Object} argument Event parameters from progressbar     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the progressbar model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;div id="progress"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * //create event for progressbar
             *$("#progress").ejProgressBar({
			 *	value: 50,
			 *	create: function(args) {}
			 *});
             * &lt;/script&gt;
			 * @memberof ejProgressBar
			 * @instance
			 */
            create: null,
            /**     
           * Event triggers when the progressbar are destroyed
           * @event
           * @name ejProgressBar#destroy 	
           * @param {Object} argument Event parameters from progressbar     
           * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
           * @param {object}  argument.model returns the progressbar model
           * @param {string}  argument.type returns the name of the event
           * @example 
           * &lt;div id="progress"&gt;&lt;/div&gt; <br> 
           * &lt;script&gt;
           * //destroy event for progressbar
           *$("#progress").ejProgressBar({
			 *	value: 50,
			 *	destroy: function(args) {}
			 *});
             * &lt;/script&gt;
			 * @memberof ejProgressBar
			 * @instance
			 */
            destroy: null

        },
        /**
         * Specify the data types for default properties 
		 * @private
         */

        dataTypes: {
            cssClass: "string",
            minValue: "number",
            maxValue: "number",
            enabled: "boolean",
            enableRTL: "boolean"
        },
        /**
        * Sets the Progress bar value. The value should be range between min and max values.
        * @private
        */

        _setValue: function (value) {
            /// <summary>Sets the Progress bar value. The value should be range between min and max values.</summary>
            if (value == null) value = this.model.minValue;
            else if (typeof value === "string") value = parseFloat(value);

            if (this._isNumber(value)) this.model.value = value;
            else if (!this._isNumber(this.model.value)) this.model.value = this.model.minValue;

            this.model.value = this._validateRange(this.model.value, this.model.minValue, this.model.maxValue);
            this._setProgressValue();
        },
        /**
         * Sets the Progress bar value in percentage. The value should be range between 0 to 100.
		 * @private
         */
        _setPercent: function (percent) {
            /// <summary>Sets the Progress bar value in percentage. The value should be range between 0 to 100.</summary>
            this.initial = this.model.percentage;
            if (percent == null) percent = 0;
            else if (typeof percent === "string") percent = parseFloat(percent);

            if (this._isNumber(percent)) this.model.percentage = percent;
            else if (!this._isNumber(this.model.percentage)) this.model.percentage = 0;

            this.model.percentage = this._validateRange(this.model.percentage, 0, 100);
            this.model.value = this._percentToValue(this.model.percentage);
            this._increaseProgressWidth();
        },
        /**
         * Configure to check whether the minvalue and max value are valid
		 * @private
         */
        _validateMinMax: function () {
            if (isNaN(this.model.minValue)) this.model.minValue = 0;
            if (isNaN(this.model.maxValue)) this.model.maxValue = 100;
        },
        /**
         * Sets the Progress bar text
		 * @private
         */
        _setText: function (text) {
            /// <summary>Sets the Progress bar value in percentage. The value should be range between 0 to 100.</summary>
            if (text) {
                if (this.text) this.text.html(text);
                else {
                    this.text = ej.buildTag("div.e-progress-txt", text);
                    this.element.append(this.text);
                    this._setTop();
                }
            }
            else if (this.text) {
                this.text.remove();
                this.text = null;
            }
        },
        /**
         * To configure the custom theme for progressbar using cssClass property		
		 * @private
         */
        _changeSkin: function (skin) {
            if (this.model.cssClass != skin) {
                this.element.removeClass(this.model.cssClass).addClass(skin);
            }
        },
        /**
		* Enables the progressbar control
		* @alias enable
		* @return jQuery
		*@example
		*&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        		* // Create Progressbar instance
		* var proObj = $("#progress").data("ejProgressBar");
		* proObj.enable(); // enables the Progressbar control
		* &lt;/script&gt;
        @example
        		*&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        // To enables the Progressbar control
		*$("#progress").ejProgressBar("enable");
		*&lt;/script&gt;
		* @memberof ejProgressBar
		* @instance
         */

        enable: function () {
            /// <summary>Enables the Progress bar control.</summary>
            if (!this.model.enabled) {
                this.element.removeClass("e-disable");
                this.model.enabled = true;
            }
        },
        /**
		* Disables the progressbar control
		* @alias disable
		* @return jQuery
		*@example
		*&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        * // Create Progressbar instance
		* var proObj = $("#progress").data("ejProgressBar");
		* proObj.disable(); //disables the Progressbar control
		* &lt;/script&gt;
        @example
        		*&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        //To disables the Progressbar control
		*$("#progress").ejProgressBar("disable");
		*&lt;/script&gt;
		* @memberof ejProgressBar
		* @instance
         */
        disable: function () {
            /// <summary>Disables the Progress bar control.</summary>
            if (this.model.enabled) {
                this.element.addClass("e-disable");
                this.model.enabled = false;
            }
        },
        /**
		* Returns the current progress value
		* @alias getValue
		* @return jQuery
		*@example
		*&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        * // Create Progressbar instance
		* var proObj = $("#progress").data("ejProgressBar");
		* proObj.getValue(); // get the value of Progressbar control
		* &lt;/script&gt;
        @example
        *&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        // To get the value of Progressbar control 
		*$("#progress").ejProgressBar("getValue");
		*&lt;/script&gt;
		* @memberof ejProgressBar
		* @instance
         */
        getValue: function () {
            /// <summary>Returns the Progress bar value.</summary>
            return this.model.value;
        },
        /**
		* Returns the current progress value in percent.
		* @alias getPercent
		* @return jQuery
		*@example
		*&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        * // Create Progressbar instance
		* var proObj = $("#progress").data("ejProgressBar");
		* proObj.getPercentage(); // get the percent of Progressbar control
		* &lt;/script&gt;
        @example
        *&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        // To get the percent of Progressbar control
		*$("#progress").ejProgressBar("getPercentage");
		*&lt;/script&gt;
		* @memberof ejProgressBar
		* @instance
         */
        getPercentage: function () {
            /// <summary>Returns the Progress bar value in percentage.</summary>
            return this.model.percentage;
        },
        /**
         * Create the Progressbar widget
		 * @private
         */
        // constructor function
        _init: function () {
            this._initialize();
            this._render();
        },
        /**
         * To configure the properties at runtime using SetModel		
		 * @private
         */
        _setModel: function (options) {
            /// <summary>Sets the model values to the Progress bar object</summary>
            if (!this.model.enabled && ej.isNullOrUndefined(options["enabled"])) return false;
            var option;
            for (option in options) {
                switch (option) {
                    case "value":
                        this._setValue(options[option]);
                        options[option] = this.model.value; break;
                    case "percentage":
                        this._setPercent(options[option]);
                        options[option] = this.model.percentage; break;
                    case "minValue":
                        if (!isNaN(options[option])) this._minValidation(options[option]);
                        options[option] = this.model.minValue;
                    case "maxValue":
                        if (!isNaN(options[option])) this._maxValidation(options[option]);
                        options[option] = this.model.maxValue;
                    case "text": this._setText(options[option]); break;
                    case "height": this._setHeight(options[option]); if (this.text) this._setTop(); break;
                    case "width": this._setWidth(options[option]); break;
                    case "enabled": this._disabled(!options[option]); break;
                    case "cssClass": this._changeSkin(options[option]); break;
                    case "enableRTL": this._rtl(options[option]); break;
                }
            }
        },
        /**
		* Destroy the progressbar widget
		* @alias destroy
		* @return jQuery
		*@example
		*&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        * // Create Progressbar instance
		* var proObj = $("#progress").data("ejProgressBar");
		* proObj.destroy(); //destroy the Progressbar control
		* &lt;/script&gt;
        @example
        *&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        // To destroy the Progressbar control
		*$("#progress").ejProgressBar("destroy");
		*&lt;/script&gt;
		* @memberof ejProgressBar
		* @instance
         */
        _destroy: function () {
            /// <summary>This function is  used to destroy the Progress bar Object</summary>
            this.element.empty();
            this.element.removeClass("e-widget " + this.model.cssClass);
        },
        /**
         * Initialization Section For Progress bar control		
		 * @private
         */

        _initialize: function () {
            this.text = null;
            this.header = null;
            this._preVal = null;
        },
        /**
         * Render Section For Progress bar control		
		 * @private
         */
        // renders the Progress bar control
        _render: function () {
            this.element.addClass("e-widget " + this.model.cssClass).attr("role", "ProgressBar");
            this._setDimention();

            this.header = ej.buildTag("div.e-progress");
            this.element.append(this.header);
            this._setText(this.model.text);

            this._setInitialValue();
            this._checkProperties();
        },
        /**
         * Configure dimensions For Progress bar control		
		 * @private
         */
        _setDimention: function () {
            this._setHeight(this.model.height);
            this._setWidth(this.model.width);
        },
        /**
         * Configure to set height For Progress bar control		
		 * @private
         */
        _setHeight: function (height) {
            if (height) this.element.height(height);
        },
        /**
         * Configure to set width For Progress bar control		
		 * @private
         */
        _setWidth: function (width) {
            if (width) this.element.width(width);
        },
        /**
         * Configure to set the value or percentage For Progress bar control initially		
		 * @private
         */
        // initially sets the value or percentage to Progress bar
        _setInitialValue: function () {
            this._validateMinMax();
            if (this.model.percentage) this._setPercent(this.model.percentage);
            else this._setValue(this.model.value);
        },
        /**
         * Configure to disable the progressbar control		
		 * @private
         */
        _disabled: function (boolean) {
            if (boolean) this.disable();
            else this.enable();
        },
        /**
         * Configure to check the properties the progressbar control		
		 * @private
         */
        _checkProperties: function () {
            if (this.model.enableRTL) this._rtl(this.model.enableRTL);
            this._minValidation(this.model.minValue);
            this._maxValidation(this.model.maxValue);
            if (!this.model.enabled) this._disabled(true);
        },
        /**
         * Configure enableRTL for the progressbar control		
		 * @private
         */
        _rtl: function (boolean) {
            if (boolean) this.element.addClass("e-rtl");
            else this.element.removeClass("e-rtl");
        },
        /**
         * Configure to valiate minvalue value of the progressbar control		
		 * @private
         */
        _minValidation: function (minvalue) {
            if (this.model.maxValue && this.model.maxValue < minvalue) this.model.maxValue = minvalue;
            if (this.model.value < minvalue)
                this.model.value = minvalue;
            this.model.minValue = minvalue;
            this._setProgressValue();
        },
        /**
         * Configure to valiate max value of the progressbar control		
		 * @private
         */
        _maxValidation: function (maxValue) {
            if (this.model.minValue && this.model.minValue > maxValue) this.model.minValue = maxValue;
            if (this.model.value > maxValue)
                this.model.value = maxValue;
            this.model.maxValue = maxValue;
            this._setProgressValue();
        },
        /**
         * Configure position of the progressbar control inner text		
		 * @private
         */

        // for the center alignment of the inner text
        _setTop: function () {
            var top = (this.element.height() - this.text.height()) / 2;
            this.text.css("top", Math.floor(top));
        },
        /**
         * Configure to change value of the progressbar control		
		 * @private
         */
        // for change the progress bar value
        _increaseProgressWidth: function () {
            this.header.css("width", this.model.percentage + "%");

            if (this.initial == 0 && this.model.percentage != this.initial)
                this._raiseEvent("start");

            if (this._preVal != this.model.value) {
                this._preVal = this.model.value;
                $(this.header).attr("aria-label", this.model.percentage);
                this._raiseEvent("change");

                if (this.model.percentage == 100)
                    this._raiseEvent("complete");
            }
        },
        /**
         * Configure to raise events of the progressbar control		
		 * @private
         */
        _raiseEvent: function (event) {
            this._trigger(event, { value: this.model.value, percentage: this.model.percentage });
        },
        /**
         * Configure to set value of the progressbar control		
		 * @private
         */
        _setProgressValue: function () {
            this.initial = this.model.percentage;
            this.model.percentage = this._valueToPercent(this.model.value);
            this._increaseProgressWidth();
        },
        /**
         * Configure to validate type of value in the progressbar control		
		 * @private
         */

        _isNumber: function (number) {
            return typeof number === "number" && !isNaN(number);
        },
        /**
         * Configure to validate value of the progressbar control between minvalue and maxValue		
		 * @private
         */
        // check whether the value in the minvalue, maxValue range
        _validateRange: function (value, minvalue, maxValue) {
            if (value < minvalue) return minvalue;
            else if (value > maxValue) return maxValue;
            return value;
        },
        /**
         * Configure to convert the value to percentage in the progressbar control		
		 * @private
         */
        // converts the value into percentage
        _valueToPercent: function (value) {
            if (this.model.maxValue <= this.model.minValue) return 100;
            value = this._validateRange(value, this.model.minValue, this.model.maxValue);
            value = (100 * (value - this.model.minValue)) / (this.model.maxValue - this.model.minValue);
            return value;
        },
        /**
         * Configure to convert the percentage to value in the progressbar control		
		 * @private
         */
        // converts the percentage into value
        _percentToValue: function (percent) {
            if (this.model.maxValue <= this.model.minValue) { return this.model.minValue; }

            if (percent >= 0 && percent <= 100) {
                var diff = this.model.maxValue - this.model.minValue;
                var val = diff * percent / 100;
                percent = val + this.model.minValue;
            }
            else if (percent < 0) percent = this.model.minValue;
            else if (percent > 100) percent = this.model.maxValue;
            return percent;
        }
    });

})(jQuery, Syncfusion);;