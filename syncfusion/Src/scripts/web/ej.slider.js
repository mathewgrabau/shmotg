/*!
*  filename: ej.slider.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html Button elements
* @copyright Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
* @version 12.1 
* @author <a href="mailto:licensing@syncfusion.com">Syncfusion Inc</a>
*/
(function ($, ej, undefined) {
    // ejSlider is the plugin name 
    // "ej.Slider" is "namespace.className" will hold functions and properties

    /**
    * @namespace ej
	* @class ejSlider
	* @requires jQuery
    * @requires jquery.easing.1.3.js
    * @requires ej.core.js
    * @requires ej.slider.js
	* @classdesc Custom Design for Html Slider control.
	* @example 
	* &lt;div id="slider"&gt; &lt;/div&gt; <br> 
	* &lt;script&gt; <br>
	* // Create Slider <br>
    * $('#slider').ejSlider(); <br>
	* &lt;/script&gt; <br>
	*/

    ej.widget("ejSlider", "ej.Slider", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _rootCSS: "e-slider",
        _setFirst: false,

        // default model
        defaults: {
            /**
                     * Specifies the orientation of the slider.See {@link orientation}
                     * @default ej.orientation.Horizontal
                     * @type {enum}
                     * @example
                     * &lt;div id="slider"&gt; &lt;/div&gt; <br>
                     * &lt;script&gt;
                     * //To set orientation API value during initialization
                     * $("#slider").ejSlider({ orientation: ej.Orientation.Vertical});
                     * &lt;/script&gt;
                     * @memberof ejSlider
                     * @instance
                     */
            orientation: "horizontal",
            /**		
			* Specifies the animation behaviour of the slider.	
			* @default true
			* @type {boolean}
			* @example 
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set enableAnimation API value during initialization  
			* 	$("#slider").ejSlider({ enableAnimation: true});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            enableAnimation: true,
            /**
			* Specifies the animationSpeed of the slider.
			* @default 500
			* @type {number}
			* @example 
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set animationSpeed API value during initialization  
			* $("#slider").ejSlider({ animationSpeed: 500});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            animationSpeed: 500,
            /**
			* Specifies the showTooltip to shows the current Slider value, while moving the Slider handle of the slider.	
			* @default true
			* @type {boolean}
			* @example 
            *&lt;/br&gt;
			*&lt;/br&gt;
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set showTooltip API value during initialization  
			* 	$("#slider").ejSlider({ showTooltip: true});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            showTooltip: true,
            /**		
			* Specify the CSS class to slider to achieve custom theme.
			* @default ""
			* @type {string}
			* @example 
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set cssClass API value during initialization  
			* 	$("#slider").ejSlider({ cssClass: "gradient-lime"});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            cssClass: "",
            /**		
			* Specifies the rounded corner behaviour for slider.
			* @default false
			* @type {boolean}
			* @example
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set showRoundedCorner API value during initialization  
			* 	$("#slider").ejSlider({ showRoundedCorner: true});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            showRoundedCorner: false,
            /**
			* Specifies the readOnly of the slider.
			* @default false
			* @type {boolean}
			* @example
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set readOnly API value during initialization  
			* 	$("#slider").ejSlider({ readOnly: true});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            readOnly: false,
            /**
			* Specifies the Right to Left Direction of the slider.
			* @default false
			* @type {boolean}
			* @example 
          *&lt;/br&gt;
			*&lt;/br&gt;
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set enableRTL API value during initialization  
			* 	$("#slider").ejSlider({ enableRTL: false});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            enableRTL: false,
            /**
			* Specifies the starting value of the slider.
			* @default 0
			* @type {number}
			* @example 
            *&lt;/br&gt;
			*&lt;/br&gt;
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set minValue API value during initialization  
			* 	$("#slider").ejSlider({ minValue: 0});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            minValue: 0,
            /**
			* Specifies the ending value of the slider.	
			* @default 100
			* @type {number}
			* @example
           *&lt;/br&gt;
			*&lt;/br&gt;
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set maxValue API value during initialization  
			* 	$("#slider").ejSlider({ maxValue: 60});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            maxValue: 100,
            /**
			* Specifies the sliderType of the slider.
			* @default ej.SliderType.Default
			* @type {enum}
			* @example 
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set sliderType API value during initialization
			* $("#slider").ejSlider({ sliderType: ej.SliderType.Default});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            sliderType: "default",
            /**
			* Specifies the value of the slider.
			* @default 0
			* @type {number}
			* @example
           *&lt;/br&gt;
			*&lt;/br&gt;
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set value API  during initialization
			* 	$("#slider").ejSlider({ value: 60});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            value: null,
            /**
			* Specifies the values of the range slider.
			* @default [minValue,maxValue]
			* @type {array}
			* @example
            *&lt;/br&gt;
			*&lt;/br&gt;
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set values API during initialization
			* 	$("#slider").ejSlider({ values: [30,60]});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            values: null,
            /**
			* Specifies the incremental step value of the slider.
			* @default 1
			* @type {number}
			* @example
          *&lt;/br&gt;
			*&lt;/br&gt;
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set incrementStep API value during initialization  
			* 	$("#slider").ejSlider({ incrementStep: 2});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            incrementStep: 1,
            /**
			* Specifies the height of the slider.
			* @default 14
			* @type {String}
			* @example
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set height API value during initialization  
			* 	$("#slider").ejSlider({ height: 14});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            height: null,
            /**
			* Specifies the width of the slider.
			* @default 100%
			* @type {String}
			* @example 
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set width API value during initialization
			* 	$("#slider").ejSlider({ width: "300px"});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            width: null,
            /**		
			* Specifies the state of the slider.
			* @default true
			* @type {boolean}
			* @example
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set enabled API value during initialization  
			* 	$("#slider").ejSlider({ enabled: false});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            enabled: true,
            /**
			* Specifies the major (large) and minor (small) ticks of the slider.	
			* @default false
			* @type {boolean}
			* @example
          *&lt;/br&gt;
			*&lt;/br&gt;
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set enabled API value during initialization
			* 	$("#slider").ejSlider({ showScale: false});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            showScale: false,
            /**		
			* Specifies the distance between two major (large) ticks from the scale of the slider.	
			* @default 10
			* @type {number}
			* @example
            *&lt;/br&gt;
			*&lt;/br&gt;
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set largeStep API value during initialization  
			* 	$("#slider").ejSlider({ largeStep: 2});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            largeStep: 10,
            /**
			* Specifies the distance between two minor (small) ticks from the scale of the slider.	
			* @default 10
			* @type {number}
			* @example
            *&lt;/br&gt;
			*&lt;/br&gt;
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set smallStep API value during initialization  
			* 	$("#slider").ejSlider({ smallStep: 2});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            smallStep: 1,
            /**
			* Specifies the showSmallTicks of the slider.
			* @default true
			* @type {boolean}
			* @example
            *&lt;/br&gt;
			*&lt;/br&gt;
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set showSmallTicks API value during initialization  
			* 	$("#slider").ejSlider({ showSmallTicks: false});
            * &lt;/script&gt; 
			* @memberof ejSlider
			* @instance
			*/
            showSmallTicks: true,
            /**
			* Specify the enablePersistence to slider to save current model value to browser cookies for state maintains	
			* @default false
			* @type {boolean}
			* @example
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			* //To set enablePersistence API value during initialization  
			* 	$("#slider").ejSlider({ enablePersistence: false});
            * &lt;/script&gt;
			* @memberof ejSlider
			* @instance
			*/
            enablePersistence: false,

            // Events
            /**     
			 * Fires when Slider control is started successfully.
			 * @event
			 * @name ejSlider#start 	
			 * @param {Object} argument Event parameters from slider control     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.
			 * @param {number}  argument.sliderIndex returns current handle number or index	
			 * @param {string}  argument.id returns slider id	
			 * @param {object}  argument.model returns the slider model	
			 * @param {string}  argument.type returns the name of the event				 
			 * @param {number}  argument.value returns the slider value			 			
			 * @example 
             * &lt;div id="slider"&gt; &lt;/div&gt; <br>
             * &lt;script&gt;
			 * //start event for slider control
             * $("#slider").ejSlider({
             *    start: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejSlider
			 * @instance
			 */
            start: null,
            /**     
			 * Fires when Slider control is stopped successfully.
			 * @event
			 * @name ejSlider#stop 	
			 * @param {Object} argument Event parameters from slider control     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.
			 * @param {number}  argument.sliderIndex returns current handle number or index	
			 * @param {string}  argument.id returns slider id	
			 * @param {object}  argument.model returns the slider model	
			 * @param {string}  argument.type returns the name of the event				 
			 * @param {number}  argument.value returns the slider value			 			
			 * @example 
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
			 * //stop event for slider control
             * $("#slider").ejSlider({
             *    stop: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejSlider
			 * @instance
			 */
            stop: null,
            /**     
			 * Fires when Slider control is sliding successfully.
			 * @event
			 * @name ejSlider#slide 	
			 * @param {Object} argument Event parameters from slider control     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.
			 * @param {number}  argument.sliderIndex returns current handle number or index	
			 * @param {string}  argument.id returns slider id	
			 * @param {object}  argument.model returns the slider model	
			 * @param {string}  argument.type returns the name of the event				 
			 * @param {number}  argument.value returns the slider value			 			
			 * @example 
             * &lt;div id="slider"&gt; &lt;/div&gt; <br>
             * &lt;script&gt;
			 * //slide event for slider control
             * $("#slider").ejSlider({
             *    slide: function (args) {}
             * });
            * &lt;/script&gt;
            * @memberof ejSlider
			 * @instance
			 */
            slide: null,
            /**     
			 * Fires when Slider control value is changed successfully.
			 * @event
			 * @name ejSlider#change 	
			 * @param {Object} argument Event parameters from slider control     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.
			 * @param {number}  argument.sliderIndex returns current handle number or index	
			 * @param {string}  argument.id returns slider id	
			 * @param {object}  argument.model returns the slider model	
			 * @param {string}  argument.type returns the name of the event				 
			 * @param {number}  argument.value returns the slider value			 			
			 * @example 
             * &lt;div id="slider"&gt; &lt;/div&gt; <br>
             * &lt;script&gt;
			 * //change event for slider control
             * $("#slider").ejSlider({
             *    change: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejSlider
			 * @instance
			 */
            change: null,
            /**     
            * Fires when Slider control has been created successfully.
            * @event
            * @name ejSlider#create	
            * @param {Object} argument Event parameters from slider control     
            * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.         
            * @param {object}  argument.model returns the slider model	
            * @param {string}  argument.type returns the name of the event                 
            * @example 
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
            * //create event for slider control
            * $("#slider").ejSlider({
            *    create: function (args) {}
            * });
           * &lt;/script&gt;
            * @memberof ejSlider
            * @instance
            */
            create: null,
            /**     
            * Fires when Slider control has been destroyed successfully.
            * @event
            * @name ejSlider#destroy	
            * @param {Object} argument Event parameters from slider control     
            * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.         
            * @param {object}  argument.model returns the slider model	
            * @param {string}  argument.type returns the name of the event                 
            * @example 
            * &lt;div id="slider"&gt; &lt;/div&gt; <br>
            * &lt;script&gt;
            * //destroy event for slider control
            * $("#slider").ejSlider({
            *    destroy: function (args) {}
            * });
           * &lt;/script&gt;
            * @memberof ejSlider
            * @instance
            */
            destroy: null
        },
        /**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            orientation: "enum",
            enableAnimation: "boolean",
            animationSpeed: "number",
            cssClass: "string",
            showRoundedCorner: "boolean",
            readOnly: "boolean",
            enableRTL: "boolean",
            minValue: "number",
            maxValue: "number",
            sliderType: "enum",
            incrementStep: "number",
            enabled: "boolean",
            showScale: "boolean",
            largeStep: "number",
            smallStep: "number",
            showSmallTicks: "boolean",
            enablePersistence: "boolean"
        },

        observables: ["value", "values"],
        value: ej.util.valueFunction("value"),
        values: ej.util.valueFunction("values"),
        /**
        * To enable the slider  
		* @return jQuery
		* @example 
		* &lt;div id="slider"&gt; &lt;/div&gt; <br> 
		* &lt;script&gt;
		* $("#slider").ejSlider();
		* // Create slider control
		* var sliderObj = $("#slider").data("ejSlider");
		* sliderObj.enable(); // enable the slider control
		* &lt;/script&gt;
		* @example 
		* &lt;div id="slider"&gt; &lt;/div&gt; <br> 
		* &lt;script&gt;
		* $("#slider").ejSlider();
		* // enable the slider control
		* $("#slider").ejSlider("enable");
		* &lt;/script&gt;
		*@memberof ejSlider
		* @instance
        */
        enable: function () {
            if (!this.model.enabled) {
                this.model.enabled = true;
                if (this.wrapper) this.wrapper.removeClass("e-disable");
                else this.element.removeClass("e-disable");
                this._wireEvents();
            }
        },
        /**
        * To disable the slider  
		* @return jQuery
		* @example 
		* &lt;div id="slider"&gt; &lt;/div&gt; <br> 
		* &lt;script&gt;
		* $("#slider").ejSlider();
		* // Create slider control
		* var sliderObj = $("#slider").data("ejSlider");
		* sliderObj.disable(); // disable the slider control
		* &lt;/script&gt;
		* @example 
		* &lt;div id="slider"&gt; &lt;/div&gt; <br> 
		* &lt;script&gt;
		* $("#slider").ejSlider();
		* // disable the slider control
		* $("#slider").ejSlider("disable");
		* &lt;/script&gt;
		*@memberof ejSlider
		* @instance
        */
        disable: function () {
            if (this.model.enabled) {
                this.model.enabled = false;
                if (this.wrapper) this.wrapper.addClass("e-disable");
                else this.element.addClass("e-disable");
                this._unWireEvents();
            }
        },
        /**
         * To check whether the value and its type.		
		 * @private
         */
        _validateValue: function (value) {
            if (value == null) value = this.model.minValue;
            else if (typeof value === "string") value = parseFloat(value);

            if (this._isNumber(value))
                this.value(value);
            else if (!this._isNumber(this.value()))
                this.value(this.model.minValue);

            if (this.model.sliderType != "range") this._setValue();
        },
        /**
         * To check whether and configure the range slider value.		
		 * @private
         */
        _validateRangeValue: function (value) {
            if (value == null) value = new Array(this.model.minValue, this.model.maxValue);
            else if (typeof value === "string") {
                var vals = value.split(",");
                if (vals.length > 1) value = new Array(parseFloat(vals[0]), parseFloat(vals[1]));
            }

            if (typeof value === "object" && this._isNumber(value[0]) && this._isNumber(value[1]))
                this.values(new Array(value[0], value[1]));
            else if (!(typeof this.values() === "object" && this._isNumber(this.values()[0]) && this._isNumber(this.values()[1])))
                this.values(new Array(this.model.minValue, this.model.maxValue));

            if (this.model.sliderType == "range") this._setRangeValue();
        },
        /**
         * To check whether slider starting and ending value .		
		 * @private
         */
        _validateStartEnd: function () {
            if (isNaN(this.model.minValue)) this.model.minValue = 0;
            if (isNaN(this.model.maxValue)) this.model.maxValue = 100;
        },
        /**
         * To check whether slider value type.		
		 * @private
         */
        _isNumber: function (number) {
            return typeof number === "number" && !isNaN(number);
        },
        /**
         * To enable or disable the rounded corner behaviour 		
		 * @private
         */
        _outerCorner: function (boolean) {
            if (boolean) this._roundedCorner();
            else this._sharpedCorner();
        },
        /**
         * To configure the custom theme for slider using cssClass property		
		 * @private
         */
        _changeSkin: function (skin) {
            this.element.removeClass(this.model.cssClass).addClass(skin);
            if (this.model.showScale)
                this.ul.removeClass(this.model.cssClass).addClass(skin);
        },
        /**
        * To get value from slider handle
		* @return jQuery
		* @example 
		* &lt;div id="slider"&gt; &lt;/div&gt; <br>
		* &lt;script&gt;
		* $("#slider").ejSlider();
		* // Create Editors
		* var sliderObj = $("#slider").data("ejSlider");
		* sliderObj.getValue(); // getValue the slider handle
		* &lt;/script&gt;
		 @example 
		* &lt;div id="slider"&gt; &lt;/div&gt; <br> 
		* &lt;script&gt;
		* $("#slider").ejSlider();
		* // get value from slider handle
		* $("#slider").ejSlider("getValue");
		* &lt;/script&gt;
		* @memberof ejSlider
		* @instance
         */
        getValue: function () {
            /// <summary>Returns the Slider value.</summary>
            return this._getHandleValue();
        },
        /**
         * To initialize the slider		
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
            if (!this.model.enabled && ej.isNullOrUndefined(options["enabled"])) return false;

            if (!ej.isNullOrUndefined(options["minValue"]) || !ej.isNullOrUndefined(options["maxValue"])) {
                if (this._isNumber(options["minValue"])) this.model.minValue = options["minValue"];
                else options["minValue"] = this.model.minValue;

                if (this._isNumber(options["maxValue"])) this.model.maxValue = options["maxValue"];
                else options["maxValue"] = this.model.maxValue;

                if (this.model.sliderType == "range" && options["values"] == undefined) this._setRangeValue();
                else if (this.model.sliderType != "range" && options["value"] == undefined) this._setValue();
            }

            var option;
            for (option in options) {
                switch (option) {
                    case "value":
                        this._validateValue(ej.util.getVal(options[option]));
                        break;
                    case "values":
                        this._validateRangeValue(ej.util.getVal(options[option]));
                        break;
                    case "height": this.model.height = options[option]; this._setDimension();
                        if (this.model.showScale) this._scaleAlignment();
                        break;
                    case "width": this.model.width = options[option]; this._setDimension();
                        if (this.model.showScale) this._scaleAlignment();
                        break;
                    case "enabled": this._disabled(!options[option]); break;
                    case "showRoundedCorner": this._outerCorner(options[option]); break;
                    case "enableRTL": this.model.enableRTL = options[option]; this._checkRTL();
                        options[option] = this.model.enableRTL;
                        break;
                    case "cssClass": this._changeSkin(options[option]); break;
                    case "showScale": this._renderScale(options[option]); break;
                    case "orientation":
                        var t = this.model.height;
                        this.model.height = this.model.width;
                        this.model.width = t;
                    case "sliderType":
                        this._sliderOptions(option, options[option]); break;
                    case "smallStep":
                    case "largeStep":
                    case "showSmallTicks":
                    case "minValue":
                    case "maxValue":
                        this._scaleOptions(option, options[option]); break;
                }
            }
        },
        /**
         * To configure destroy of the slider control.		
		 * @private
         */
        _destroy: function () {
            if (this.model.showScale) this._destroyScale();
            this.element.insertAfter(this.wrapper);
            this.wrapper.remove();
            this.element.removeClass("e-widget e-box " + this.model.cssClass).empty();
        },
        /**
         * To initialize the slider control position		
		 * @private
         */
        _initialize: function () {
            this.target = this.element[0];
            this.horDir = "left";
            this.verDir = "bottom";
            this._isFocused = false;
        },
        /**
         * Render Section For DifferentTypes		
		 * @private
         */
        _render: function () {
            this.wrapper = ej.buildTag("div.e-slider-wrap " + this.model.cssClass + "#" + this.target.id + "_wrapper", { tabindex: "0", role: "slider" })
                .insertAfter(this.element);
            this.wrapper.append(this.element);

            this.element.addClass("e-widget e-box " + this.model.cssClass);
            if (this.model.sliderType != "default") {
                this.header = ej.buildTag("div.e-range");
                this.element.append(this.header);
                if (this.model.sliderType == "range") {
                    this.secondHandle = this._createHandle();
                }
            }
            this.firstHandle = this._createHandle();
            this._setOrientation();
            this._setDimension();
            this._insertHiddenField();
            this._checkProperties();
            this._setSliderValue();
        },
        /**
         * Render Section For scale		
		 * @private
         */
        _renderScale: function (showScale) {
            if (showScale) {
                var width = "width", orien = "h";
                if (this.model.orientation == "vertical") {
                    width = "height";
                    orien = "v";
                }

                var _smallStep = this.model.smallStep;
                if (!this.model.showSmallTicks) {
                    if (this.model.largeStep > 0)
                        _smallStep = this.model.largeStep;
                    else
                        _smallStep = this.model.maxValue - this.model.minValue;
                }
                else if (_smallStep <= 0)
                    _smallStep = this.model.incrementStep;
                var count = Math.abs(this.model.maxValue - this.model.minValue) / _smallStep;

                this.ul = ej.buildTag("ul.e-scale e-" + orien + "-scale " + this.model.cssClass);
                this.wrapper.append(this.ul);

                var li, start = this.model.minValue, left = 0, tickWidth = 100 / count;
                if (orien == "v") start = this.model.maxValue;
                for (var i = 0; i <= count; i++) {
                    li = ej.buildTag("li.e-tick", "", {}, { "title": start });
                    li.css(width, tickWidth + "%");

                    if (start % this.model.largeStep == 0) {
                        var span = ej.buildTag("span.e-tick-value", "" + start);
                        li.addClass("e-large").append(span);
                    }
                    this.ul.append(li);

                    if (orien == "h") start += _smallStep;
                    else start -= _smallStep;
                    left += _smallStep;
                }

                this.ul.children().first().addClass("e-first-tick").css(width, (tickWidth / 2) + "%");
                this.ul.children().last().addClass("e-last-tick").css(width, (tickWidth / 2) + "%");

                this._scaleAlignment();
            }
            else this._destroyScale();
        },
        _destroyScale: function () {
            this.ul.remove();
            this.ul = null;
        },
        /**
         * To configure tick value position		
		 * @private
         */
        _tickValuePosition: function () {
            var width = (this.model.orientation == "vertical") ? "height" : "width";
            var left = (this.model.orientation == "vertical") ? "top" : "left";

            var firstTick = this.ul.find(".e-tick.e-first-tick");
            var first = firstTick.find(".e-tick-value");
            var other = this.ul.find(".e-tick.e-large:not(.e-first-tick)").find(".e-tick-value");

            tickWidth = firstTick[width]() * 2;
            first.css(left, -first[width]() / 2);
            other.css(left, (tickWidth - other[width]()) / 2);
        },
        /**
         * To configure scale alignment in slider		
		 * @private
         */
        _scaleAlignment: function () {
            this._tickValuePosition();

            var smallTick = 12, largeTick = 20, half = largeTick / 2;
            var height = "height", top = "top", orien = "h";
            if (this.model.orientation == "vertical") {
                height = "width";
                top = "right";
                orien = "v";
            }
            // scale
            this.ul.css(top, -(this.wrapper[height]() + half));
            if (orien == "v") this.ul.css("top", -this.wrapper.height()).css(top, half);
            this.ul[height](this.wrapper[height]() + largeTick);
            // small-ticks
            var topSize = -(largeTick - smallTick) / 2;
            if (this.model.largeStep == null && orien != "v") topSize = -topSize;
            this.ul.find(".e-tick:not(.e-large)").css(height, this.wrapper[height]() + smallTick).css(top, topSize);
            // tick-values   // 4 - distance between tick value and tick
            if (orien == "v") this.ul.children(".e-large").find(".e-tick-value").css("right", this.wrapper.width() + largeTick + 4);
        },
        /**
         * To create handle for slider		
		 * @private
         */
        _createHandle: function () {
            handle = ej.buildTag("a.e-handle e-select", "", {}, { "aria-label": "drag", "tabindex": 0, role: "slider", "aria-valuemin": this.model.minValue, "aria-valuemax": this.model.maxValue });
            this.element.append(handle);
            return handle;
        },
        /**
         * To configure dimension for slider		
		 * @private
         */
        _setDimension: function () {
            if (this.model.height) this.wrapper.height(this.model.height);
            if (this.model.width) this.wrapper.width(this.model.width);
            this._setHandleSize();
            this._handleAlignment(this.model.enableRTL);
        },
        /**
         * To configure scale alignment in slider		
		 * @private
         */
        _insertHiddenField: function () {
            this._hidden = ej.buildTag("input", "", {},
                { "type": "hidden", "name": this.element[0].id }).val(this._getHandleValue());
            this.element.append(this._hidden);
        },
        /**
         * To configure properties of the slider		
		 * @private
         */
        _checkProperties: function () {
            if (!this.model.enabled) {
                if (this.wrapper) this.wrapper.addClass("e-disable");
                else this.element.addClass("e-disable");
            }
            else this._wireEvents();

            if (this.model.showScale) this._renderScale(true);
            if (this.model.enableRTL) this._checkRTL();
            if (this.model.showRoundedCorner) this._roundedCorner();
        },
        /**
         * To configure the rounded corner behaviour 		
		 * @private
         */
        _roundedCorner: function () {
            this.element.addClass("e-corner-all");
            this.element.children(".e-handle").addClass("e-corner-all");
        },
        /**
         * To configure the shaped corner behaviour 		
		 * @private
         */
        _sharpedCorner: function () {
            this.element.removeClass("e-corner-all");
            this.element.children(".e-handle").removeClass("e-corner-all");
        },
        /**
         * To configure the handle alignment in slider control 		
		 * @private
         */
        _handleAlignment: function (rtl) {
            var mar = -(this.firstHandle.outerWidth() / 2) + "px", margin;
            if (this.model.orientation != "vertical") {
                if (!rtl) margin = "0 0 0 " + mar;
                else margin = "0 " + mar + " 0 0";
            }
            else {
                if (!rtl) margin = "0 0 " + mar + " 0";
                else margin = mar + " 0 0 0";
            }
            this.element.children('.e-handle').css("margin", margin);
        },
        /**
         * To check whether Right to Left Direction in slider control 		
		 * @private
         */
        _checkRTL: function () {
            if (this.model.showScale && this.model.orientation == "vertical" && this.model.enableRTL) this.model.enableRTL = false;
            var rtl = this.model.enableRTL, preDir = (this.model.orientation != "vertical") ? this.horDir : this.verDir;
            if (rtl) {
                this.wrapper.addClass("e-rtl");
                this.horDir = "right";
                this.verDir = "top";
            }
            else {
                this.wrapper.removeClass("e-rtl");
                this.horDir = "left";
                this.verDir = "bottom";
            }
            var currDir = (this.model.orientation != "vertical") ? this.horDir : this.verDir;

            if (preDir != currDir) {
                this.firstHandle.css(currDir, this.firstHandle.css(preDir)).css(preDir, "auto");;
                if (this.model.sliderType != "default") {
                    this.header.css(currDir, this.header.css(preDir)).css(preDir, "auto");
                    if (this.model.sliderType == "range")
                        this.secondHandle.css(currDir, this.secondHandle.css(preDir)).css(preDir, "auto");
                }
            }
            this._handleAlignment(rtl);
        },
        /**
         * To configure the direction orientation in slider control 		
		 * @private
         */
        _setOrientation: function () {
            if (this.model.orientation != "vertical") {
                this.wrapper.addClass("e-horizontal");
            }
            else {
                this.wrapper.addClass("e-vertical");
                this.firstHandle.css(this.verDir, "0");
            }
        },
        /**
         * To configure the handle size in slider control 		
		 * @private
         */
        _setHandleSize: function () {
            var size;
            if (this.model.orientation != "vertical")
                size = this.element.height() + 4;
            else
                size = this.element.width() + 4;
            this.element.find(".e-handle").height(size).width(size);
        },
        /**
         * To enable or disable the slider control state.
		 * @private
         */
        _disabled: function (boolean) {
            if (boolean) this.disable();
            else this.enable();
        },
        /**
         * To configure slider control with its options 		
		 * @private
         */
        _sliderOptions: function (prop, value) {
            this._unWireEvents();
            this._destroy();
            this.model[prop] = value;
            this._init();
        },
        /**
         * To configure the scale used in slider control 		
		 * @private
         */
        _scaleOptions: function (prop, value) {
            if (this.model.showScale) {
                this._destroyScale();
                this.model[prop] = value;
                this._renderScale(true);
            }
        },
        /**
         * To configure the showTooltip in slider control 		
		 * @private
         */
        _showTooltip: function () {
            if (this.model.showTooltip) {
                $('body .e-tooltip').remove();
                this.tooltip = ej.buildTag("div.e-tooltip " + this.model.cssClass + " e-corner-all", { role: "tooltip" });
                $("body").append(this.tooltip);
                this._setTooltipPosition();
            }
        },
        /**
         * To configure the hideTooltip slider control 		
		 * @private
         */
        _hideTooltip: function () {
            if (this.model.showTooltip)
                this.tooltip.fadeOut(800);
        },
        /**
         * To enable or disable the slider control tooltip.
		 * @private
         */
        _showhideTooltip: function (showTooltip) {
            if (this.model.showTooltip && showTooltip) {
                this._showTooltip();
                this._hideTooltip();
            }
        },
        /**
         * To configure the Tooltip position for handle slider control 		
		 * @private
         */
        _setTooltipPosition: function () {
            if (this.model.showTooltip) {
                this._updateTooltipValue();
                var top, left, remainLeft, remainTop, handle, gap = 5; // gap -> distance between tooltip and slider
                handle = this._getHandle();

                if (this.model.orientation == "vertical") {
                    remainTop = (this.tooltip.outerHeight() - handle.outerHeight()) / 2;
                    remainLeft = handle.outerWidth() + gap;
                    top = handle.offset().top - remainTop;
                    left = handle.offset().left + remainLeft;
                }
                else {
                    remainLeft = (this.tooltip.outerWidth() - handle.outerWidth()) / 2;
                    remainTop = this.tooltip.outerHeight() + gap;
                    top = handle.offset().top - remainTop;
                    left = handle.offset().left - remainLeft;
                }
                var zindex = this._maxZindex();
                this.tooltip.css({ "top": top, "left": left, "zIndex": zindex + 1 });
            }
        },
		/**
        * To calculate the max Zindex in the document.		
        * @private
        */
        _maxZindex: function () {
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
        /**
         * To obtain the Tooltip value from handle in slider control 		
		 * @private
         */
        _updateTooltipValue: function () {
            var one = 0, two = 1;
            if (this.model.enableRTL) { one = 1, two = 0; }
            var val = this._getHandleValue();
            if (this.model.sliderType != "range")
                this.tooltip[0].innerHTML = val;
            else
                this.tooltip[0].innerHTML = val[one] + " - " + val[two];
        },
		/**
         * To configure the slider control header width based on it's type.		
		 * @private
         */
        _increaseHeaderWidth: function (animation) {
            if (this.model.sliderType != "default") {
                var size = "width", direction = this.horDir, properties = {};
                if (this.model.orientation == "vertical") { size = "height", direction = this.verDir; }

                if (this.model.sliderType == "range") {
                    properties[size] = this.handlePos - this.handlePos2 + "%";
                    properties[direction] = this.handlePos2 + "%";
                }
                else {
                    properties[size] = this.handlePos + "%";
                    properties[direction] = 0;
                }
                if (!animation) this.header.css(properties);
                else this.header.animate(properties, this.model.animationSpeed);
            }
        },
        /**
         * To configure the value based on it's slider type
		 * @private
         */
        _setSliderValue: function () {
            this._validateStartEnd();

            if (this.model.sliderType == "range")
                this._validateRangeValue(this.values());
            else
                this._validateValue(this.value());
        },

        /**
        * Section For handle the mouse hover event on slider handle.
        * @private
        */
        _hoverOnHandle: function (evt) {
            $(evt.target).addClass("e-hover");
        },
        /**
        * Section For handle the mouse leave event on slider handle.
        * @private
        */
        _leaveFromHandle: function (evt) {
            $(evt.target).removeClass("e-hover");
        },
        /**
        * Section For handle the click event on slider handle.
        * @private
        */
        _firstHandleClick: function (evt) {
            evt.preventDefault();
            this.firstHandle.focus();
            if (this._raiseEvent("start")) return false;

            this.mouseDownPos = this.handlePos;
            if (!this.model.readOnly)
                $(document).bind(ej.eventType.mouseMove, $.proxy(this._firstHandleMove, this));
            $(document).bind(ej.eventType.mouseUp, $.proxy(this._firstHandleUp, this));
            $(document).bind("mouseleave", $.proxy(this._firstHandleUp, this));
            this._showTooltip();
        },
        /**
        * Section For handle the drag event over slider handle.
        * @private
        */
        _firstHandleMove: function (evt) {
            evt.preventDefault();
            evt = evt.type == "touchmove" ? evt.originalEvent.changedTouches[0] : evt;
            var position = { x: evt.pageX, y: evt.pageY };
            this.handlePos = this._xyToPosition(position);

            if (this.model.sliderType == "range" && this.handlePos < this.handlePos2) {
                this.handlePos = this.handlePos2;
            }
            if (this.handlePos != this.preHandlePos) {
                this.preHandlePos = this.handlePos;
                this.handleVal = this._positionToValue(this.handlePos);
                this._increaseHeaderWidth(false);
                this._setHandlePosition(false, false, false);
                this._setTooltipPosition();

                this._updateModelValue();
                this._raiseEvent("slide");
            }
        },
        /**
        * Section For handle the mouse up event over slider handle.
        * @private
        */
        _firstHandleUp: function (evt) {
            evt.preventDefault();
            $(document).unbind(ej.eventType.mouseMove, $.proxy(this._firstHandleMove, this));
            $(document).unbind(ej.eventType.mouseUp, $.proxy(this._firstHandleUp, this));
            $(document).unbind("mouseleave", $.proxy(this._firstHandleUp, this));
            this._hideTooltip();

            if (this.mouseDownPos != this.handlePos) this._raiseChangeEvent();
            this._raiseEvent("stop");
        },
        /**
        * Section For handle the click event on range slider second handle.
        * @private
        */
        _secondHandleClick: function (evt) {
            evt.preventDefault();
            this.secondHandle.focus();
            if (this._raiseEvent("start")) return false;

            this.mouseDownPos2 = this.handlePos2;
            if (!this.model.readOnly)
                $(document).bind(ej.eventType.mouseMove, $.proxy(this._secondHandleMove, this));
            $(document).bind(ej.eventType.mouseUp, $.proxy(this._secondHandleUp, this));
            $(document).bind("mouseleave", $.proxy(this._secondHandleUp, this));
            this._showTooltip();
        },
        /**
        * Section For handle the drag event over range slider second handle.
        * @private
        */
        _secondHandleMove: function (evt) {
            evt.preventDefault();
            evt = evt.type == "touchmove" ? evt.originalEvent.changedTouches[0] : evt;
            var position2 = { x: evt.pageX, y: evt.pageY };
            this.handlePos2 = this._xyToPosition(position2);

            if (this.handlePos2 > this.handlePos) {
                this.handlePos2 = this.handlePos;
            }
            if (this.handlePos2 != this.preHandlePos2) {
                this.preHandlePos2 = this.handlePos2;
                this.handleVal2 = this._positionToValue(this.handlePos2);
                this._increaseHeaderWidth(false);
                this._setHandlePosition(false, false, false);
                this._setTooltipPosition();

                this._updateModelValue();
                this._raiseEvent("slide");
            }
        },
        /**
        * Section For handle the mouse up event on range slider second handle.
        * @private
        */
        _secondHandleUp: function (evt) {
            evt.preventDefault();
            $(document).unbind(ej.eventType.mouseMove, $.proxy(this._secondHandleMove, this));
            $(document).unbind(ej.eventType.mouseUp, $.proxy(this._secondHandleUp, this));
            $(document).unbind("mouseleave", $.proxy(this._secondHandleUp, this));
            this._hideTooltip();

            if (this.mouseDownPos2 != this.handlePos2) this._raiseChangeEvent();
            this._raiseEvent("stop");
        },
        /**
        * Section For handle the focus in event on slider handle.
        * @private
        */
        _focusInHandle: function (evt) {
            if (!this._isFocused) {
                this._isFocused = true;
                $(evt.target).addClass("e-focus");
                if (!this.model.readOnly)
                    $(document).bind("keydown", $.proxy(this._moveHandle, this));
                this.activeHandle = $(evt.target).is(this.firstHandle) ? 1 : 2;
                this._setZindex();
            }
        },
        /**
        * Section For handle the focus out event on slider handle.
        * @private
        */
        _focusOutHandle: function (evt) {
            this._isFocused = false;
            $(evt.target).removeClass("e-focus");
            $(document).unbind("keydown", $.proxy(this._moveHandle, this));
        },
        /**
        * Section For handle the slider handle move.
        * @private
        */
        _moveHandle: function (e) {
            var oper, val, handleNo;
            handleNo = this._getHandleIndex(this.activeHandle) - 1;

            switch (e.keyCode) {
                case 37:        // Left Key
                case 40:        // Down Key
                    e.preventDefault();
                    oper = "sub";
                    break;
                case 38:        // Up Key
                case 39:         // Right Key
                    e.preventDefault();
                    oper = "add";
                    break;
                case 36:         // Home Key
                    e.preventDefault();
                    if (this._raiseEvent("start")) return false;
                    if (this.model.sliderType != "range" && this.value() != this.model.minValue) {
                        this._changeHandleValue(this.model.minValue, this.model.enableAnimation);
                    }
                    else if (this.model.sliderType == "range") {
                        val = (this.activeHandle == 2) ? this.model.minValue : this.handleVal2;
                        if (this.values()[handleNo] != val)
                            this._changeHandleValue(val, this.model.enableAnimation);
                    }
                    break;
                case 35:         // End Key
                    e.preventDefault();
                    if (this._raiseEvent("start")) return false;
                    if (this.model.sliderType != "range" && this.value() != this.model.maxValue) {
                        this._changeHandleValue(this.model.maxValue, this.model.enableAnimation);
                    }
                    else if (this.model.sliderType == "range") {
                        val = (this.activeHandle == 1) ? this.model.maxValue : this.handleVal;
                        if (this.values()[handleNo] != val)
                            this._changeHandleValue(val, this.model.enableAnimation);
                    }
                    break;
                case 27:         // Esc Key
                    e.preventDefault();
                    this._getHandle().focusout();
                    break;
            }

            if (oper == "add" || oper == "sub") {
                if (this._raiseEvent("start")) return false;
                var hVal = (this.activeHandle == 1) ? this.handleVal : this.handleVal2;
                var value = (oper == "add") ? this._add(hVal, this.model.incrementStep, true) : this._add(hVal, this.model.incrementStep, false);
                this._changeHandleValue(value, false);
            }
        },
        /**
        * Section For handle the slider handle value change.
        * @private
        */
        _changeHandleValue: function (value, animate) {
            var position = null;
            if (this.activeHandle == 1) {
                this.handleVal = this._checkHandleValue(value);
                this.handlePos = this._checkHandlePosition(this.handleVal);

                if (this.model.sliderType == "range" && this.handlePos < this.handlePos2) {
                    this.handlePos = this.handlePos2;
                    this.handleVal = this.handleVal2;
                }
                if (this.handlePos != this.preHandlePos)
                    position = this.preHandlePos = this.handlePos;
            }
            else {
                this.handleVal2 = this._checkHandleValue(value);
                this.handlePos2 = this._checkHandlePosition(this.handleVal2);

                if (this.model.sliderType == "range" && this.handlePos < this.handlePos2) {
                    this.handlePos2 = this.handlePos;
                    this.handleVal2 = this.handleVal;
                }
                if (this.handlePos2 != this.preHandlePos2)
                    position = this.preHandlePos2 = this.handlePos2;
            }

            if (position != null) {
                this._increaseHeaderWidth(animate);
                this._setHandlePosition(animate, true, true);
            }
        },
        /**
        * Section For handle the slider bar click event.
        * @private
        */
        _sliderBarClick: function (evt) {
            if (this.model.readOnly) return false;
            if (evt.target == this.target || (this.model.sliderType != "default" && evt.target == this.header[0])) {
                evt.preventDefault();
                if (this._raiseEvent("start")) return false;
                var pos = { x: evt.pageX, y: evt.pageY },
                handlepos = this._xyToPosition(pos),
                handleVal = this._positionToValue(handlepos);

                if (this.model.sliderType == "range" && (this.handlePos - handlepos) > (handlepos - this.handlePos2)) {
                    this.handlePos2 = this.preHandlePos2 = handlepos;
                    this.handleVal2 = handleVal;
                    this.activeHandle = 2;
                }
                else {
                    this.handlePos = this.preHandlePos = handlepos;
                    this.handleVal = handleVal;
                    this.activeHandle = 1;
                }

                this._getHandle().focus();
                if (this.model.sliderType != "default") this._increaseHeaderWidth(this.model.enableAnimation);
                this._setHandlePosition(this.model.enableAnimation, true, true);
            }
        },
        /**
        * To configure the slider handle position.
        * @private
        */
        _setHandlePosition: function (animation, showTooltip, changeEvt) {
            var Handle = this._getHandle(), proxy = this, properties = {}, pos, val, direction;
            pos = (this.activeHandle == 1) ? this.handlePos : this.handlePos2;
            val = (this.activeHandle == 1) ? this.handleVal : this.handleVal2;
            Handle.attr("aria-label", val);
            direction = (this.model.orientation == "vertical") ? this.verDir : this.horDir;
            properties[direction] = pos + "%";

            if (!animation) {
                Handle.css(properties);
                this._showhideTooltip(showTooltip);
                if (changeEvt) this._raiseChangeEvent();
            }
            else Handle.animate(properties, this.model.animationSpeed, function () {
                proxy._showhideTooltip(showTooltip);
                if (changeEvt) proxy._raiseChangeEvent();
            });
        },
        /**
        * Section For handle the X,Y co-ordinate position for slider.
        * @private
        */
        _xyToPosition: function (position) {
            if (this.model.minValue == this.model.maxValue)
                return 100;
            if (this.model.orientation != "vertical") {
                var left = position.x - this.element.offset().left,
                num = this.element.width() / 100,
                val = (left / num);
            }
            else {
                var top = position.y - this.element.offset().top,
                num = this.element.height() / 100,
                val = 100 - (top / num);
            }
            val = this._stepValueCalculation(val);
            if (val < 0) val = 0;
            else if (val > 100) val = 100;
            if (this.model.enableRTL) return 100 - val;
            return val;
        },
        /**
        * Section For handle the slider handle value updation.
        * @private
        */
        _updateValue: function () {
            this.handleVal = this._checkHandleValue(this.value());
            this.handlePos = this._checkHandlePosition(this.handleVal);
            this.preHandlePos = this.handlePos;
            this.activeHandle = 1;
        },
        /**
        * Section For handle the slider handle operations.
        * @private
        */
        _setValue: function () {
            this._updateValue();

            this._increaseHeaderWidth(this.model.enableAnimation);
            this._setHandlePosition(this.model.enableAnimation, false, false);
        },
        /**
        * Section For handle slider range values.
        * @private
        */
        _updateRangeValue: function () {
            var values = this.values();
            this.handleVal = this._checkHandleValue(values[1]);
            this.handleVal2 = this._checkHandleValue(values[0]);
            this.handlePos = this._checkHandlePosition(this.handleVal);
            this.handlePos2 = this._checkHandlePosition(this.handleVal2);

            if (this.handlePos < this.handlePos2) {
                this.handlePos = this.handlePos2;
                this.handleVal = this.handleVal2;
            }
            this.preHandlePos = this.handlePos;
            this.preHandlePos2 = this.handlePos2;
        },
        /**
        * To configure slider range values.
        * @private
        */
        _setRangeValue: function () {
            this._updateRangeValue();
            this._increaseHeaderWidth(this.model.enableAnimation);
            this.activeHandle = 1;
            this._setHandlePosition(this.model.enableAnimation, false, false);
            this.activeHandle = 2;
            this._setHandlePosition(this.model.enableAnimation, false, false);
        },
        /**
         * To Check whether slider handle position.
		 * @private
         */
        _checkHandlePosition: function (value) {
            if (this.model.minValue == this.model.maxValue)
                return 100;
            var handle = this._tempStartEnd();
            if (value >= handle.start && value <= handle.end)
                value = (100 * (value - this.model.minValue)) / (this.model.maxValue - this.model.minValue);
            else if (value < handle.start) value = 0;
            else value = 100;
            return value;
        },
        /**
         * To Check whether slider handle values.
		 * @private
         */
        _checkHandleValue: function (value) {
            if (this.model.minValue == this.model.maxValue)
                return this.model.minValue;
            var handle = this._tempStartEnd();
            if (value < handle.start) value = handle.start;
            else if (value > handle.end) value = handle.end;
            return value;
        },
        /**
         * To configure slider starting and ending values.
		 * @private
         */
        _tempStartEnd: function () {
            if (this.model.minValue > this.model.maxValue)
                return {
                    start: this.model.maxValue,
                    end: this.model.minValue
                };
            else
                return {
                    start: this.model.minValue,
                    end: this.model.maxValue
                };
        },
        /**
         * To configure slider values based on slider handle present position.
		 * @private
         */
        _positionToValue: function (pos) {
            var diff = this.model.maxValue - this.model.minValue,
            val = this._round(diff * pos / 100),
            total = this._add(val, this.model.minValue, true);
            return total;
        },
        /**
         * To obtained active slider handle value.
		 * @private
         */
        _getHandle: function () {
            return (this.activeHandle == 1) ? this.firstHandle : this.secondHandle;
        },
        /**
         * To obtained slider handle index value.
		 * @private
         */
        _getHandleIndex: function (no) {
            if (this.model.sliderType == "range" && no == 1)
                return 2;
            return 1;
        },
        /**
         * To obtained slider handle values based on it's type.
		 * @private
         */
        _getHandleValue: function () {
            if (this.model.sliderType == "range") return [this.handleVal2, this.handleVal];
            else return this.handleVal;
        },
        /**
         * To configure the slider value based on it's type.
		 * @private
         */
        _updateModelValue: function () {
            var value = this._getHandleValue();
            if (this.model.sliderType == "range") this.values(value);
            else this.value(value);
            this._hidden.val(value);
        },
        /**
         * To configure slider value.
		 * @private
         */
        _add: function (a, b, addition, precision) {
            var x = Math.pow(10, precision || 3), val;
            if (addition) val = (Math.round(a * x) + Math.round(b * x)) / x;
            else val = (Math.round(a * x) - Math.round(b * x)) / x;
            return val;
        },
        /**
         * To configure slider value as rounded.
		 * @private
         */
        _round: function (a) {
            var _f = this.model.incrementStep.toString().split(".");
            return _f[1] ? parseFloat(a.toFixed(_f[1].length)) : Math.round(a);
        },
        /**
         * To configure slider change event.
		 * @private
         */
        _raiseChangeEvent: function () {
            this._updateModelValue();
            this._raiseEvent("change");
        },
        /**
         * Render section for raising event in slider .
		 * @private
         */
        _raiseEvent: function (name) {
           
                return this._trigger(name, {
                    id: this.target.id,
                    value: this._getHandleValue(),
                    sliderIndex: this._getHandleIndex(this.activeHandle)
                });
            
            
        },
        /**
         * To configure slider handle z-index value.
		 * @private
         */
        _setZindex: function () {
            if (this.model.sliderType == "range") {
                if (this.activeHandle == 1) {
                    this.firstHandle.css("z-index", 2);
                    this.secondHandle.css("z-index", 1);
                }
                else {
                    this.firstHandle.css("z-index", 1);
                    this.secondHandle.css("z-index", 2);
                }
            }
        },
        /**
         * To obtained slider handle value based on incrementStep value.
		 * @private
         */
        _stepValueCalculation: function (value) {
            if (this.model.incrementStep == 0) this.model.incrementStep = 1;
            var percentStep = this.model.incrementStep / ((this.model.maxValue - this.model.minValue) / 100);
            var remain = value % Math.abs(percentStep);
            if (remain != 0) {
                if ((percentStep / 2) > remain) value -= remain;
                else value += Math.abs(percentStep) - remain;
            }
            return value;
        },

        //-------------------- Event Wire-up -------------------------//
        /**
         * Wiring the events to slider control		
		 * @private
         */
        _wireEvents: function () {
            this._on(this.element, "mousedown", this._sliderBarClick);
            this._on(this.firstHandle, ej.eventType.mouseDown, this._firstHandleClick);
            this._on(this.firstHandle, "mouseenter", this._hoverOnHandle);
            this._on(this.firstHandle, "mouseleave", this._leaveFromHandle);
            this._on(this.firstHandle, "focus", this._focusInHandle);
            this._on(this.firstHandle, "focusout", this._focusOutHandle);

            if (this.model.sliderType == "range") {
                this._on(this.secondHandle, ej.eventType.mouseDown, this._secondHandleClick);
                this._on(this.secondHandle, "mouseenter", this._hoverOnHandle);
                this._on(this.secondHandle, "mouseleave", this._leaveFromHandle);
                this._on(this.secondHandle, "focus", this._focusInHandle);
                this._on(this.secondHandle, "focusout", this._focusOutHandle);
            }
        },
        //-------------------- Event Wire-up -------------------------//
        /**
         * unWiring the events from slider control.		
		 * @private
         */
        _unWireEvents: function () {
            this._off(this.element, "mousedown");
            this._off(this.firstHandle, ej.eventType.mouseDown);
            this._off(this.firstHandle, "mouseenter");
            this._off(this.firstHandle, "mouseleave");
            this._off(this.firstHandle, "focus");
            this._off(this.firstHandle, "focusout");

            if (this.model.sliderType == "range") {
                this._off(this.secondHandle, ej.eventType.mouseDown);
                this._off(this.secondHandle, "mouseenter");
                this._off(this.secondHandle, "mouseleave");
                this._off(this.secondHandle, "focus");
                this._off(this.secondHandle, "focusout");
            }
        }
    });
    /**
	 * Enum for slider type.	 
	 * @enum {string}
	 * @global 
	 */
    ej.SliderType = {
        /**  support for slider control to select a single value. */
        Default: "default",
        /**  support for slider control to select a single value considered from start value to current handle. */
        MinRange: "minrange",
        /**  support for slider control to select a range of value between the two handles. */
        Range: "range"
    };
})(jQuery, Syncfusion);;