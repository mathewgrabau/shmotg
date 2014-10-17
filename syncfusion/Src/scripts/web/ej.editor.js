/*!
*  filename: ej.editor.js
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
	/**
    * @namespace ej
	* @classdesc Custom Design for Html Textbox Control.
	* @class ejTextBoxes
	* @requires jQuery
	* @requires ej.core.js
    * @requires jquery.globalize.js
    * @requires globalize.cultures.min.js
	* @requires ej.editor.js
	* @example 
	* &lt;input id="numeric" type="text" /&gt; <br> 
	* &lt;input id="currency" type="text" /&gt; <br> 
	* &lt;input id="percentage" type="text" /&gt; <br> 
	* &lt;script&gt;<br>
	* // Create Textbox Editors <br>
    * $('#numeric').ejNumericTextbox({value:10}); <br>	
	* $('#currency').ejCurrencyTextbox({value:1000}); <br>
	* $('#percentage').ejPercentageTextbox({value:100}); <br>
	* &lt;/script&gt;
	*/

    ej.widget(
    {
        "ejNumericTextbox": ["ej.NumericTextbox", "e-numerictextbox"],
        "ejPercentageTextbox": ["ej.PercentageTextbox", "e-percentagetextbox"],
        "ejCurrencyTextbox": ["ej.CurrencyTextbox", "e-currencytextbox"]
    },
    {
        // widget element will be automatically set in this
        element: null,
        // user defined model will be automatically set in this
        model: null,
        validTags: ["input"],
        _setFirst: false,
        type: "editor",

        // default model
        defaults: {
		/**		
			* Specifies the width of the editor.
			* @default 143pixel
			* @type {String}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set width API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ width: "143px", value:5 });	
			* 	$("#currency").ejCurrencyTextbox({ width: "143px", value:55 });
			* 	$("#percentage").ejPercentageTextbox({ width: "143px", value:555 });			
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
            width: "",
			
			/**		
			* Specifies the height of the editor.
			* @default 30pixel
			* @type {String}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set height API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ height: "30px", value:5  });	
			* 	$("#currency").ejCurrencyTextbox({ height: "30px", value:55  });
			* 	$("#percentage").ejPercentageTextbox({ height: "30px", value:555  });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            height: "",
			
			/**		
			* Specifies the value of the editor.
			* @default 0
			* @type {number}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set value API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ value: 10 });	
			* 	$("#currency").ejCurrencyTextbox({ value: 10 });
			* 	$("#percentage").ejPercentageTextbox({ value: 10 });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            value: null,
						
			/**		
			* Specifies the name of the editor.
			* @default Sets id as name if it is null.
			* @type {string}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set name API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ name: "numeric", value:5  });	
			* 	$("#currency").ejCurrencyTextbox({ name: "currency", value:55  });
			* 	$("#percentage").ejPercentageTextbox({ name: "percentage", value:500  });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            name: null,
			
			/**		
			* Specifies the minValue of the editor.
			* @default 0 for CurrencyTextbox
			* @default null for NumericTextbox
			* @default null for PercentageTextbox
			* @type {number}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set minValue API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ minValue: 50, value:55  });	
			* 	$("#currency").ejCurrencyTextbox({ minValue: 50, value:5  });
			* 	$("#percentage").ejPercentageTextbox({ minValue: 50, value:555  });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            minValue: -(Number.MAX_VALUE),
			
			/**		
			* Specifies the maxValue of the editor.
			* @default null for CurrencyTextbox
			* @default null for NumericTextbox
			* @default 100 for PercentageTextbox
			* @type {number}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set maxValue API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ maxValue: 100, value:500  });	
			* 	$("#currency").ejCurrencyTextbox({ maxValue: 100, value:550  });
			* 	$("#percentage").ejPercentageTextbox({ maxValue: 100, value:50  });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            maxValue: Number.MAX_VALUE,
			
			/**		
			* Specifies the incrementStep of the editor.
			* @default 1		
			* @type {number}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set incrementStep API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ incrementStep: 2, value:5  });	
			* 	$("#currency").ejCurrencyTextbox({ incrementStep: 2 , value:55 });
			* 	$("#percentage").ejPercentageTextbox({ incrementStep: 2, value:50  });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            incrementStep: 1,
			
			/**		
			* Specifies the decimalPlaces of the editor.
			* @default 0		
			* @type {number}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set decimalPlaces API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ decimalPlaces: 2, value:5  });	
			* 	$("#currency").ejCurrencyTextbox({ decimalPlaces: 2 , value:5 });
			* 	$("#percentage").ejPercentageTextbox({ decimalPlaces: 2, value:5  });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            decimalPlaces: 0,
			
			/**		
			* Specify the CSS class to editor to achieve custom theme.
			* @default ""
			* @type {string}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set cssClass API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ cssClass: "gradient-lime" , value:5 });	
			* 	$("#currency").ejCurrencyTextbox({ cssClass: "gradient-lime", value:100  });
			* 	$("#percentage").ejPercentageTextbox({ cssClass: "gradient-lime", value:505  });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
					
            cssClass: "",
			
			/**		
			* Specify the enablePersistence to editor to save current model value to browser cookies for state maintains
			* @default false
			* @type {boolean}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set enablePersistence API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ enablePersistence: true, value:5  });	
			* 	$("#currency").ejCurrencyTextbox({ enablePersistence: true, value:5  });
			* 	$("#percentage").ejPercentageTextbox({ enablePersistence: true, value:5  });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            enablePersistence: false,
			
			/**		
			* Specify the showSpinButton to editor 
			* @default true
			* @type {boolean}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set showSpinButton API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ showSpinButton: false, value:5  });	
			* 	$("#currency").ejCurrencyTextbox({ showSpinButton: false, value:55  });
			* 	$("#percentage").ejPercentageTextbox({ showSpinButton: false, value:580  });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            showSpinButton: true,
			
			/**		
			* Specify the Localization to editor 
			* @default en-US
			* @type {string}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set culture API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ locale: "en-US", value:5  });	
			* 	$("#currency").ejCurrencyTextbox({ locale: "en-US", value:5000  });
			* 	$("#percentage").ejPercentageTextbox({ locale: "en-US", value:455  });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            locale: "en-US",
			
			/**		
			* Specify the strictMode to editor 
			* @default false
			* @type {booelan}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set enableStrictMode API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ enableStrictMode: true, value:5  });	
			* 	$("#currency").ejCurrencyTextbox({ enableStrictMode: true, value:55  });
			* 	$("#percentage").ejPercentageTextbox({ enableStrictMode: true, value:555  });			
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            enableStrictMode: false,
			
			/**		
			* Specify the rounded Corner to editor 
			* @default false
			* @type {boolean}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set showRoundedCorner API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ showRoundedCorner: true, value:5  });	
			* 	$("#currency").ejCurrencyTextbox({ showRoundedCorner: true , value:5 });
			* 	$("#percentage").ejPercentageTextbox({ showRoundedCorner: true, value:5 });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            showRoundedCorner: false,
			
			/**		
			* Specify the readOnly to editor 
			* @default false
			* @type {boolean}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set readOnly API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ readOnly: true , value:5 });	
			* 	$("#currency").ejCurrencyTextbox({ readOnly: true , value:5 });
			* 	$("#percentage").ejPercentageTextbox({ readOnly: true , value:5 });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            readOnly: false,
			
			/**		
			* Specify the editor control state.
			* @default true
			* @type {boolean}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set enabled API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ enabled: true, value:1200  });	
			* 	$("#currency").ejCurrencyTextbox({ enabled: true , value:50 });
			* 	$("#percentage").ejPercentageTextbox({ enabled: true, value:100  });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            enabled: true,
			
			/**		
			* Specify the Right to Left Direction to editor.
			* @default false
			* @type {boolean}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set enableRTL API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ enableRTL: true, value:5  });	
			* 	$("#currency").ejCurrencyTextbox({ enableRTL: true , value:45 });
			* 	$("#percentage").ejPercentageTextbox({ enableRTL: true, value:567  });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            enableRTL: false,
			
			/**		
			* Specify the watermark text to editor.
			* @default ""
			* @type {string}
			* @example 
			* &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			* //To set enableRTL API value during initialization  
			* 	$("#numeric").ejNumericTextbox({ watermarkText: "Enter the value" });	
			* 	$("#currency").ejCurrencyTextbox({ watermarkText: "Enter the currency value" });
			* 	$("#percentage").ejPercentageTextbox({ watermarkText: "Enter the percentage" });			 
			* &lt;/script&gt;
			* @memberof ejTextBoxes
			* @instance
			*/
			
            watermarkText: "",
			
			 /**     
			 * Fires after editor control is value is changed.
			 * @event
			 * @name ejTextBoxes#change 
			 * @param {Object} argument Event parameters from editors.    			 
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.
			 * @param {object}  argument.model returns the corresponding editor model.
			 * @param {string}  argument.type returns the name of the event.	
			 * @param {number}  argument.value returns the corresponding editor control value.			 
			 * @example 
			 * &lt;input id="numeric" type="text" /&gt; <br> 
			 * &lt;input id="currency" type="text" /&gt; <br> 
			 * &lt;input id="percentage" type="text" /&gt; <br> 
			 * &lt;script&gt;<br>
			 * //change event for editors
             * $("#numeric").ejNumericTextbox({
			 *	  value:10,	
             *    change: function (args) {}
             * });
			 * $("#currency").ejCurrencyTextbox({
			 *	  value:100,	
             *    change: function (args) {}
             * });
			 * $("#percentage").ejPercentageTextbox({
			 *	  value:1000,	
             *    change: function (args) {}
             * });
			 * &lt;/script&gt;
			 * @memberof ejTextBoxes
			 * @instance
			 */		
			
            change: null,			
			
			 /**     
			 * Fires after editor control is focused.
			 * @event
			 * @name ejTextBoxes#focusIn 
			 * @param {Object} argument Event parameters from editors.    			 
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.
			 * @param {object}  argument.model returns the corresponding editor model.
			 * @param {string}  argument.type returns the name of the event.
             * @param {number}  argument.value returns the corresponding editor control value.
			 * @example 
			 * &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			 * //focusIn event for editors
             * $("#numeric").ejNumericTextbox({
			 *	  value:20,	
             *    focusIn: function (args) {}
             * });
			 * $("#currency").ejCurrencyTextbox({
			 *	  value:200,	
             *    focusIn: function (args) {}
             * });
			 * $("#percentage").ejPercentageTextbox({
			 *	  value:2000,	
             *    focusIn: function (args) {}
             * });
			 * &lt;/script&gt;
			 * @memberof ejTextBoxes
			 * @instance
			 */		
			
            focusIn: null,
			
			/**     
			 * Fires after editor control is loss the focus.
			 * @event
			 * @name ejTextBoxes#focusOut 
			 * @param {Object} argument Event parameters from editors.    			 
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.
			 * @param {object}  argument.model returns the corresponding editor model.
			 * @param {string}  argument.type returns the name of the event.	
             * @param {number}  argument.value returns the corresponding editor control value.
			 * @example 
			 * &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			 * //focusOut event for editors
             * $("#numeric").ejNumericTextbox({
			 *	  value:50,	
             *    focusOut: function (args) {}
             * });
			 * $("#currency").ejCurrencyTextbox({
			 *	  value:505,	
             *    focusOut: function (args) {}
             * });
			 * $("#percentage").ejPercentageTextbox({
			 *	  value:1500,	
             *    focusOut: function (args) {}
             * });
			 * &lt;/script&gt;

			 * @memberof ejTextBoxes
			 * @instance
			 */					
            focusOut: null,
			  /**     
          * Fires after editor control is created.
          * @event
          * @name ejTextBoxes#create 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the editor model
          * @param {string}  argument.type returns the name of the event
          * @example 
		  * &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			 * //create event for editors
             * $("#numeric").ejNumericTextbox({
			 *	  value:50,	
             *    create: function (args) {}
             * });
			 * $("#currency").ejCurrencyTextbox({
			 *	  value:505,	
             *    create: function (args) {}
             * });
			 * $("#percentage").ejPercentageTextbox({
			 *	  value:1500,	
             *    create: function (args) {}
             * });
			 * &lt;/script&gt;			 
          * @memberof ejTextBoxes
          * @instance
          */
            create: null,
			 /**     
          * Fires when the editor is destroyed successfully.
          * @event
          * @name ejTextBoxes#destroy 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the editor model
          * @param {string}  argument.type returns the name of the event
          * @example 
		  * &lt;input id="numeric" type="text" /&gt; <br> 
			* &lt;input id="currency" type="text" /&gt; <br> 
			* &lt;input id="percentage" type="text" /&gt; <br> 
			* &lt;script&gt;<br>
			 * //destroy event for editors
             * $("#numeric").ejNumericTextbox({
			 *	  value:50,	
             *    destroy: function (args) {}
             * });
			 * $("#currency").ejCurrencyTextbox({
			 *	  value:505,	
             *    destroy: function (args) {}
             * });
			 * $("#percentage").ejPercentageTextbox({
			 *	  value:1500,	
             *    destroy: function (args) {}
             * });
			 * &lt;/script&gt;			 
          * @memberof ejTextBoxes
          * @instance
          */
            destroy: null
        },
		/**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            minValue: "number",
            maxValue: "number",
            incrementStep: "number",
            decimalPlaces: "number",
            showSpinButton: "boolean",
            enableStrictMode: "boolean",
            showRoundedCorner: "boolean",
            enableRTL: "boolean",
            locale: "string",
            watermarkText: "string",
            cssClass: "string",
            readOnly: "boolean",
            enabled: "boolean"
        },
        observables: ["value"],
		 /**
         * To configure the properties at runtime using SetModel		
		 * @private
         */
        _setModel: function (jsondata) {
            var validate = false;
            if (!this.model.enabled && !jsondata["enabled"]) return;
            for (var key in jsondata) {
                switch (key) {
                    case "value":
                        if (ej.isNullOrUndefined(jsondata["minValue"]) && ej.isNullOrUndefined(jsondata["maxValue"])) {
                            this._setValue(jsondata[key]);
                            jsondata[key] = this.model.value;
                        }
                        else {
                            this.model.value = this._checkNumValue(jsondata[key]);
                            this._localizedFormat();
                            this._raiseChangeEvent();
                            validate = true;
                        }
                        break;
                    case "enableRTL": this._enableRTL(jsondata[key]); break;
                    case "width": this._setWidth(jsondata[key]); break;
                    case "height": this._setHeight(jsondata[key]); break;
                    case "minValue":
                        if (isNaN(jsondata[key])) return;
                        this.model.minValue = parseFloat(jsondata[key].toFixed(this.model.decimalPlaces));
                        validate = true;
                        break;
                    case "maxValue":
                        if (isNaN(jsondata[key])) return;
                        this.model.maxValue = parseFloat(jsondata[key].toFixed(this.model.decimalPlaces));
                        validate = true;
                        break;
                    case "incrementStep":
                        if (isNaN(jsondata[key])) return;
                        this.model.incrementStep = parseFloat(jsondata[key].toFixed(this.model.decimalPlaces));
                        break;
                    case "showSpinButton": this._showSpin(jsondata[key]); break;
                    case "showRoundedCorner": this._roundedCorner(jsondata[key]); break;
                    case "locale": this._setLocalize(jsondata[key]); break;
                    case "decimalPlaces": this._setDecimal(jsondata[key]); break;
                    case "cssClass": this._setSkin(jsondata[key]); break;
                    case "readOnly": this._setReadOnly(jsondata[key]); break;
                    case "enabled": if (jsondata[key]) this.enable(); else this.disable(); break;
                    case "watermarkText":
                        this.model.watermarkText = jsondata[key]; this._setWaterMark(); break;
                }
            }
            if (validate) {
                this._validateMinMaxValue(true);
                jsondata["value"] = this.model.value;
                jsondata["maxValue"] = this.model.maxValue;
                jsondata["minValue"] = this.model.minValue;
                if (this.model.minValue != -(Number.MAX_VALUE)) this._startValue = this.model.minValue;
                this.element.attr({ 'aria-valuemin': this.model.minValue, 'aria-valuemax': this.model.maxValue, 'aria-valuenow': this.model.value });
            }
            this._checkErrorClass();
        },
		 /**
        * destroy the editor widgets
		* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
		* @alias destroy
		* @return jQuery
		* @example 
		* &lt;input id="numeric" type="text" /&gt; <br> 
		* &lt;input id="currency" type="text" /&gt; <br> 
		* &lt;input id="percentage" type="text" /&gt; <br> 
		* &lt;script&gt;
		* $("#numeric").ejNumericTextbox({value:5});
		* $("#currency").ejCurrencyTextbox({value:55});
		* $("#percentage").ejPercentageTextbox({value:555});
		* // Create Editors
		* var numObj = $("#numeric").data("ejNumericTextbox");
		* var curObj = $("#currency").data("ejCurrencyTextbox");
		* var perObj = $("#percentage").data("ejPercentageTextbox");
		* numObj.destroy(); // destroy the numericTextbox
		* curObj.destroy(); // destroy the currencyTextbox
		* perObj.destroy(); // destroy the percentagTextbox
		* &lt;/script&gt;
		* @example 
		* &lt;input id="numeric" type="text" /&gt; <br> 
		* &lt;input id="currency" type="text" /&gt; <br> 
		* &lt;input id="percentage" type="text" /&gt; <br> 
		* &lt;script&gt;
		* $("#numeric").ejNumericTextbox({value:5});
		* $("#currency").ejCurrencyTextbox({value:55});
		* $("#percentage").ejPercentageTextbox({value:555});
		* // enable the editors
		* $("#numeric").ejNumericTextbox("destroy");
		* $("#currency").ejCurrencyTextbox("destroy");
		* $("#percentage").ejPercentageTextbox("destroy");		
		* &lt;/script&gt;
		* @memberof ejTextBoxes
		* @instance
         */	       
        // all events bound using this._on will be unbind automatically
        _destroy: function () {
            if (this.wrapper) {
                this.element.insertBefore(this.wrapper);
                this.wrapper.remove();
            }
            if (this.model.name) this.element.removeAttr("name");
            this.element.val("").removeClass('e-input e-watermark').empty();
        },
		
		 /**
         * Initialize the editors widget
		 * @private
         */		
        // constructor function
        _init: function () {
            if (this.element.is("input") && (this.element.is("input[type=text]") || !this.element.attr('type'))) {
                this._renderControl();
                this._setValues();
                this._wireEvents();
                this._initObjects();
            }
            else {
                this._destroy();
                return false;
            }
        },

        // -----------------------------------private function----------------------------------//
		
		/**
         * To configure the editors value		
		 * @private
         */	 		
        _setValues: function () {
            this._id = this.element[0].id;
            this._textBox = this.element[0];
            this._error = false;
            this._timeout = null;
            this.isValidState = true;
            this._allowkeyboard = true;
            this._validateOnType = false;
            this._focused = false;
            this._startValue = 0;
            if (this.sfType === "ej.CurrencyTextbox" && this.model.minValue == -(Number.MAX_VALUE))
                this.model.minValue = 0;
            this.model.minValue = parseFloat(this.model.minValue.toFixed(this.model.decimalPlaces));
            this.model.maxValue = parseFloat(this.model.maxValue.toFixed(this.model.decimalPlaces));
            if (this.model.minValue != -(Number.MAX_VALUE)) this._startValue = this.model.minValue;
            this.model.value = ej.isNullOrUndefined(this.model.value) ? this._checkNumValue(this.element[0].value) : this._checkNumValue(this.model.value);
            this._localizedFormat();
            this._validateMinMaxValue(true);
            this.model.watermarkText = this._checkWaterMark(this.model.watermarkText);
            this._percentSymbol = Globalize.culture(this.model.locale).numberFormat.percent.symbol;
            this._currencySymbol = Globalize.culture(this.model.locale).numberFormat.currency.symbol;
        },
		
		 /**
         * Render Section For DifferentTypes		
		 * @private
         */	   
        _renderControl: function () {
            var editorwidget = $(document.createElement('span')).addClass('e-widget');
            var editorwidgetInner = $(document.createElement('span')).addClass('e-in-wrap e-box');
            if (this.sfType === "ej.NumericTextbox")
                editorwidget.addClass('e-numeric');
            else if (this.sfType === "ej.PercentageTextbox")
                editorwidget.addClass('e-percent');
            else if (this.sfType === "ej.CurrencyTextbox")
                editorwidget.addClass('e-currency');
            editorwidget.append(editorwidgetInner).insertAfter(this.element);
            editorwidgetInner.append(this.element);
            this._hiddenInput = ej.buildTag("input#" + this._id + "_hidden", "", {}, { type: "hidden" }).insertBefore(this.element);
            this.model.name = this.element.attr("name") != null ? this.element.attr("name") : (this.model.name != null ? this.model.name : this.element[0].id);
            if(this.element.attr("name") == null)
                this.element.attr({'name': this.model.name});
            this.element.addClass('e-input');
            this._hiddenInput.attr({ 'name': this.model.name, 'value': this.model.value }).addClass('e-input');
            this.element.attr({ 'role': 'spinbutton', 'aria-valuemin': this.model.minValue, 'aria-valuemax': this.model.maxValue, 'aria-valuenow': this.model.value, 'tabindex': '0', 'aria-live': 'assertive', "value": this.model.value });
            var spinbutton = $('<span class="e-select"><span class="e-spin e-spin-up " role="button" "aria-label"="Increase Value" /><span class="e-spin e-spin-down" role="button" "aria-label"="Decrease Value" /></span>');
            var spinimg = ej.buildTag('span.e-icon e-arrow').attr('role','presentation');
            editorwidgetInner.append(spinbutton);
            spinbutton.find('.e-spin').append(spinimg);
            this.innerWrap = this.element.parent();
            this.wrapper = this.innerWrap.parent();
            this.spin = this.wrapper.find('.e-select');
            this.spinUp = this.wrapper.find('.e-spin-up');
            this.spinDown = this.wrapper.find('.e-spin-down');
            this._setWidth(this.model.width);
            this._setHeight(this.model.height);
            if (this.model.cssClass != "") this._setSkin(this.model.cssClass);
            this._showSpin(this.model.showSpinButton);
            if (this.model.showRoundedCorner) this._roundedCorner(this.model.showRoundedCorner);
            if (this.model.enableRTL) this._enableRTL(this.model.enableRTL);
            if (this.model.readOnly) this._setReadOnly(this.model.readOnly);
            if (!this.model.enabled) this.disable();
            this.wrapper = editorwidget;
        },
		
		/**
         * To initialize the editors		
		 * @private
         */	 
        _initObjects: function () {
            this._preVal = this._numberValue();
            if (this._textBox.value == "" && this.model.watermarkText != "")
                this._setWaterMark();
            if (this.sfType === "ej.PercentageTextbox" && this._textBox.value != "")
                this._appendPercentSymbol(this._textBox.value);
            else if (this.sfType === "ej.CurrencyTextbox" && this._textBox.value != "")
                this._appendCurrencySymbol(this._textBox.value);
            if (this.model.value == "") {
                this.isValidState = true;
                this._hiddenInput.val("");
            }
            else if ((this.model.value < this.model.minValue) || (this.model.value > this.model.maxValue))
                this.isValidState = false;
            this._checkErrorClass();
        },
		
		 /**
         * To enable or disable the show spin button in editors.
		 * @private
         */	
        _showSpin: function (value) {
            if (!value) {
                if (this.spin) {
                    this.spin.hide();
                    this.innerWrap.removeClass('e-padding');
                }
                this._unbindSpinEvents();
            }
            else {
                if (this.spin) {
                    this.spin.show();
                    this.innerWrap.addClass('e-padding');
                }
                this._bindSpinEvents();
            }
        },
		
		 /**
         * To enable or disable the rounded corner behaviour 		
		 * @private
         */	
        _roundedCorner: function (value) {
            if (value && !this.innerWrap.hasClass('e-corner-all'))
                this.innerWrap.addClass('e-corner-all');
            else if (this.innerWrap.hasClass('e-corner-all'))
                this.innerWrap.removeClass('e-corner-all');
        },
		
		 /**
         * To enable or disable the Right to Left Direction behaviour 		
		 * @private
         */	
        _enableRTL: function (enableRTL) {
            if (enableRTL) {
                if (this.spin) this.wrapper.addClass("e-rtl");
                else this.element.addClass("e-rtl");
            }
            else {
                if (this.spin) this.wrapper.removeClass("e-rtl");
                else this.element.removeClass("e-rtl");
            }
        },
		
		 /**
         * To configure editors width		
		 * @private
         */	
        _setWidth: function (value) {
            this.wrapper.width(value);
        },
		
		 /**
         * To configure editors height		
		 * @private
         */	
        _setHeight: function (value) {
            this.wrapper.height(value);
        },
		
		 /**
         * To configure the custom theme for editors using cssClass property		
		 * @private
         */	 
        _setSkin: function (skin) {
            this.wrapper.removeClass(this.model.cssClass);
            this.wrapper.addClass(skin);
        },
		
		 /**
         * To configure value to editors		
		 * @private
         */	 
        _setValue: function (value) {
            this.model.value = this._checkNumValue(value);
            this._validateMinMaxValue(false);
            if ((this.model.minValue <= this.model.value) && (this.model.value <= this.model.maxValue)) {
                this.isValidState=true;
            } else
                this.isValidState=false;
            this._checkErrorClass();
            this._localizedFormat();
            this._raiseChangeEvent();
        },
		
		 /**
         * To configure localization to editors		
		 * @private
         */	 
        _setLocalize: function (val) {
            this.model.locale = val;
            this._percentSymbol = Globalize.culture(this.model.locale).numberFormat.percent.symbol;
            this._currencySymbol = Globalize.culture(this.model.locale).numberFormat.currency.symbol;
            this._localizedFormat();
        },
		
		 /**
         * To configure decimal property to allow decimal values to editors		
		 * @private
         */	 
        _setDecimal: function (val) {
            this.model.decimalPlaces = val;
            this._localizedFormat();
        },
		
		/**
         * To check whether value within min max range.		
		 * @private
         */	
        _validateMinMaxValue: function (fromMinMax) {
            var valChange = false;
            if (this.model.minValue > this.model.maxValue) this.model.minValue = this.model.maxValue;
            if (this.model.value != "" && this.model.minValue > this.model.value) {
                if (this.model.enableStrictMode != true) {
                    this.isValidState = true;
                    this._startValue = this.model.value = this.model.minValue;
                }
                else this.isValidState = false;
                valChange = true;
            }
            else if (this.model.value != "" && this.model.maxValue < this.model.value) {
                if (this.model.enableStrictMode != true) {
                    this.isValidState = true;
                    this.model.value = this.model.maxValue;
                }
                else this.isValidState = false;
                valChange = true;
            }
            else this.isValidState = true;
            if (this.model.minValue == this.model.maxValue) this._startValue = this.model.minValue;
            if ((valChange && fromMinMax)) {
                this._hiddenInput.val(this.model.value);
                this._localizedFormat();
                this._raiseChangeEvent();
            }
        },

		/**
         * To configure localization format to editors		
		 * @private
         */	
        _localizedFormat: function () {
            this._wipeWaterMark();
            this._textBox.value = Globalize.format((this.model.value), "n" + this.model.decimalPlaces, this.model.locale);
            if (!this._focused && this._textBox.value != "") {
                if (this.sfType === "ej.PercentageTextbox") this._appendPercentSymbol(this._textBox.value);
                else if (this.sfType === "ej.CurrencyTextbox") this._appendCurrencySymbol(this._textBox.value);
            }
        },
		
		/**
         * To check whether value is proper format in editors		
		 * @private
         */	
        _checkNumValue: function (value) {
            if (typeof value == "string" && !isNaN(Globalize.parseFloat(value, this.model.locale))) {
                value = Globalize.parseFloat(value, this.model.locale);
                return parseFloat(value);
            }
            else if ((typeof value == "number") && !isNaN(value))
                return value;
            else return "";
        },
		
		/**
         * To check whether waterMark in editors		
		 * @private
         */	
        _checkWaterMark: function (val) {
            if (!val)
                return "";
            else return val;
        },
		
		 /**
         * To enable or disable the readOnly behaviour 		
		 * @private
         */	
        _setReadOnly: function (bool) {
            if (bool) this.element.attr("readonly", true);
            else this.element.removeAttr("readonly");
        },
		
		/**
         * To configure the editors waterMark text		
		 * @private
         */	
        /* Set Water Mark Text */
        _setWaterMark: function () {
            this.element.addClass("e-watermark");
            this._textBox.value = this.model.watermarkText;
        },
		
		/**
         * To remove the editors waterMark text		
		 * @private
         */	
        /* Clear Water Mark Text */
        _wipeWaterMark: function () {
            this.element.removeClass("e-watermark");
        },
		
		/**
         * To configure the editors value selection range. 		
		 * @private
         */	
        _setSelectionRange: function (selectionStart, selectionEnd) {
            var input = this._textBox;
            try {
                if (input.setSelectionRange) {
                    input.setSelectionRange(selectionStart, selectionEnd);
                    input.focus();
                }
                else if (input.createTextRange) {
                    var range = input.createTextRange();
                    _setselction(range);
                }
            }
            catch (e) {
                var control = this;
                window.setTimeout(function () {
                    document.body.focus();
                    control._textBox.select();
                    var range = document.selection.createRange();
                    _setselction(range);
                }, 1);
            }
            function _setselction(range) {
                range.collapse(true);
                range.moveEnd('character', selectionEnd);
                range.moveStart('character', selectionStart);
                range.select();
            }
        },
		
		/**
         * To obtain the editors value in selection range. 		
		 * @private
         */	
        _getSelection: function (value) {
            var oSel = null;
            if (document.selection) {
                oSel = document.selection.createRange();
                return (oSel.text == "" ? oSel.text : this._removeFormats(oSel.text));
            }
            else {
                if (value == null)
                    return this.model.value;
                else {
                    oSel = this._removeFormats(value.substring(this._textBox.selectionStart, this._textBox.selectionEnd));
                    return oSel;
                }
            }
        },
		
		/**
         * To calculate selection range position in editors value. 		
		 * @private
         */	
        _caretPosition: function () {
            var oField = this._textBox;
            // Initialize
            var iCaretPos = 0;
            // IE Support
            if (document.selection) {
                // Set focus on the element
                oField.focus();
                // To get cursor position, get empty selection range
                var oSel = document.selection.createRange();
                // Move selection start to 0 position
                oSel.moveStart('character', -oField.value.length);
                // The caret position is selection length
                iCaretPos = oSel.text.length;
            }
            // Firefox support
            else if (oField.selectionStart || oField.selectionStart == '0')
                iCaretPos = oField.selectionEnd;
            // Return results
            return (iCaretPos);
        },
		
		/**
         * To configure the percentage symbol in percentageTextbox value. 		
		 * @private
         */	
        _appendPercentSymbol: function (value) {
            if (this._percentSymbol) value = value.replace(this._percentSymbol, "");
            if (value.indexOf(Globalize.culture(this.model.locale).numberFormat.percent.symbol) < 0)
                this._textBox.value = value + Globalize.culture(this.model.locale).numberFormat.percent.symbol;
            this._percentSymbol = Globalize.culture(this.model.locale).numberFormat.percent.symbol;

        },
		
		/**
         * To configure the currency symbol in currencyTextbox value. 		
		 * @private
         */	
        _appendCurrencySymbol: function (value) {
            if (this._currencySymbol) value = value.replace(this._currencySymbol, "");
            if (value.indexOf(Globalize.culture(this.model.locale).numberFormat.currency.symbol) < 0)
                if (Number(value) < 0)
                    this._textBox.value = "(" + Globalize.culture(this.model.locale).numberFormat.currency.symbol + Math.abs(value) + ")";
                else
                    this._textBox.value = Globalize.culture(this.model.locale).numberFormat.currency.symbol + value;
            this._currencySymbol = Globalize.culture(this.model.locale).numberFormat.currency.symbol;

        },
		
		/**
         * To remove the localization format in editors. 		
		 * @private
         */	
        _removeFormats: function (val) {
            var grpSep = Globalize.culture(this.model.locale).numberFormat[","];
            if (val != null) {
                if (grpSep == ".")
                    return (val.toString().replace(/["."]/g, ""));
                else if (val.toString().match(new RegExp(grpSep, "g")))
                    return (val.toString().replace(new RegExp(grpSep, "g"), ""));
                else
                    return val;
            }
            else
                return null;
        },
		
		/**
         * To check whether error class added or not editors. 		
		 * @private
         */	
        _checkErrorClass: function (obj) {
            if (this.isValidState) this.wrapper.removeClass("e-error");
            else this.wrapper.addClass("e-error");
        },
        // -----------------------------------public function----------------------------------//
		/**
        * To enable the corresponding editors 		
		* @return jQuery
		* @example 
		* &lt;input id="numeric" type="text" /&gt; <br> 
		* &lt;input id="currency" type="text" /&gt; <br> 
		* &lt;input id="percentage" type="text" /&gt; <br> 
		* &lt;script&gt;
		* $("#numeric").ejNumericTextbox({value:10});
		* $("#currency").ejCurrencyTextbox({value:100});
		* $("#percentage").ejPercentageTextbox({value:1000});
		* // Create Editors
		* var numObj = $("#numeric").data("ejNumericTextbox");
		* var curObj = $("#currency").data("ejCurrencyTextbox");
		* var perObj = $("#percentage").data("ejPercentageTextbox");
		* numObj.enable(); // enable the numericTextbox
		* curObj.enable(); // enable the currencyTextbox
		* perObj.enable(); // enable the percentagTextbox
		* &lt;/script&gt;
		 @example 
		* &lt;input id="numeric" type="text" /&gt; <br> 
		* &lt;input id="currency" type="text" /&gt; <br> 
		* &lt;input id="percentage" type="text" /&gt; <br> 
		* &lt;script&gt;
		* $("#numeric").ejNumericTextbox({value:10});
		* $("#currency").ejCurrencyTextbox({value:100});
		* $("#percentage").ejPercentageTextbox({value:1000});
		* // enable the editors
		* $("#numeric").ejNumericTextbox("enable");
		* $("#currency").ejCurrencyTextbox("enable");
		* $("#percentage").ejPercentageTextbox("enable");		
		* &lt;/script&gt;
		* @memberof ejTextBoxes
		* @instance
         */	       		 
        enable: function () {
            this.model.enabled = true;
            this._textBox.disabled = false;
            this.element.removeAttr("disabled");
            this.element.removeClass('e-disable').attr({ "aria-disabled": false });
            this.wrapper.find(".e-select").removeClass('e-disable').attr({ "aria-disabled": false });
        },
		
		/**
        * To disable the corresponding editors 		
		* @return jQuery
		* @example 
		* &lt;input id="numeric" type="text" /&gt; <br> 
		* &lt;input id="currency" type="text" /&gt; <br> 
		* &lt;input id="percentage" type="text" /&gt; <br> 
		* &lt;script&gt;
		* $("#numeric").ejNumericTextbox({value:20});
		* $("#currency").ejCurrencyTextbox({value:400});
		* $("#percentage").ejPercentageTextbox({value:2000});
		* // Create Editors	
		* var numObj = $("#numeric").data("ejNumericTextbox");
		* var curObj = $("#currency").data("ejCurrencyTextbox");
		* var perObj = $("#percentage").data("ejPercentageTextbox");
		* numObj.disable(); // enable the numericTextbox
		* curObj.disable(); // enable the currencyTextbox
		* perObj.disable(); // enable the percentagTextbox
		* &lt;/script&gt;
		 @example 
		* &lt;input id="numeric" type="text" /&gt; <br> 
		* &lt;input id="currency" type="text" /&gt; <br> 
		* &lt;input id="percentage" type="text" /&gt; <br> 
		* &lt;script&gt;
		* $("#numeric").ejNumericTextbox({value:20});
		* $("#currency").ejCurrencyTextbox({value:400});
		* $("#percentage").ejPercentageTextbox({value:2000});
		* // enable the editors
		* $("#numeric").ejNumericTextbox("disable");
		* $("#currency").ejCurrencyTextbox("disable");
		* $("#percentage").ejPercentageTextbox("disable");		
		* &lt;/script&gt;
		* @memberof ejTextBoxes
		* @instance
         */	      
        disable: function () {
            this.model.enabled = false;
            this._textBox.disabled = true;
            this.element.attr("disabled", "disabled");
            this.element.addClass('e-disable').attr({ "aria-disabled": true });
            this.wrapper.find(".e-select").addClass('e-disable').attr({ "aria-disabled": true });
        },
		
		/**
        * To get value from corresponding editors 		
		* @return jQuery
		* @example 
		* &lt;input id="numeric" type="text" /&gt; <br> 
		* &lt;input id="currency" type="text" /&gt; <br> 
		* &lt;input id="percentage" type="text" /&gt; <br> 
		* &lt;script&gt;
		* $("#numeric").ejNumericTextbox({value:20});
		* $("#currency").ejCurrencyTextbox({value:500});
		* $("#percentage").ejPercentageTextbox({value:1000});
		* // Create Editors
		* var numObj = $("#numeric").data("ejNumericTextbox");
		* var curObj = $("#currency").data("ejCurrencyTextbox");
		* var perObj = $("#percentage").data("ejPercentageTextbox");
		* numObj.getValue(); // get value from numericTextbox
		* curObj.getValue(); // get value from currencyTextbox
		* perObj.getValue(); // get value from percentagTextbox
		* &lt;/script&gt;
		 @example 
		* &lt;input id="numeric" type="text" /&gt; <br> 
		* &lt;input id="currency" type="text" /&gt; <br> 
		* &lt;input id="percentage" type="text" /&gt; <br> 
		* &lt;script&gt;
		* $("#numeric").ejNumericTextbox({value:20});
		* $("#currency").ejCurrencyTextbox({value:500});
		* $("#percentage").ejPercentageTextbox({value:1000});
		* // get value from editors
		* $("#numeric").ejNumericTextbox("getValue");
		* $("#currency").ejCurrencyTextbox("getValue");
		* $("#percentage").ejPercentageTextbox("getValue");		
		* &lt;/script&gt;
		* @memberof ejTextBoxes
		* @instance
         */	      
        getValue: function () {
            return this.model.value == null ? "" : this.model.value;
        },
        // -----------------------------------wire and unwire events and handlers function----------------------------------//
		
		/**
         * Wiring the events to editors control		
		 * @private
         */	
        _wireEvents: function () {
            this._on(this.element, 'focus', this._focusIn);
            this._on(this.element, 'blur', this._focusOut);
            this._on(this.element, 'keydown', this._keyDown);
            this._on(this.element, "keyup", this._keyUp);
            this._on(this.element, 'mousewheel', this._mouseWheel);
            this._on(this.element, 'DOMMouseScroll', this._mouseWheel);
        },
		/**
         * Wiring the events to editors spinbutton		
		 * @private
         */	
        _bindSpinEvents: function () {
            this._on(this.spinUp, "mousedown", this._spinUpClick);
            this._on(this.spinDown, "mousedown", this._spinDownClick);
            this._on(this.spinUp, "mouseup", this._spinUpClick);
            this._on(this.spinDown, "mouseup", this._spinDownClick);
        },
		/**
         * unWiring the events from editors spinbutton		
		 * @private
         */	
        _unbindSpinEvents: function () {
            this._off(this.spinUp, "mousedown", this._spinUpClick);
            this._off(this.spinDown, "mousedown", this._spinDownClick);
            this._off(this.spinUp, "mouseup", this._spinUpClick);
            this._off(this.spinDown, "mouseup", this._spinDownClick);
        },
		 /**
         * Section For handle the spin button over mouse up click event
		 * @private
         */	
        _spinUpClick: function (event) {
            var self = this;
            event.preventDefault();
            clearTimeout(this._timeout);
            if (!this.model.enabled || this.model.readOnly) return;
            this._on(this.spinUp, 'mouseleave', this._mouseUpClick);
            this.spinUp.addClass("e-active");
            var self = this;
            if (event.type == "mouseup") {
                this._incrementValue(event);
                this.spinUp.removeClass("e-active");
                this._off($(document), 'mouseup', this._mouseUpClick);
            }
            else if (event.type == "mousedown") {
                if (!this._focused) this.element[0].focus();
                this._timeout = setInterval(function () { self._incrementValue(event); }, 150);
                this._on($(document), 'mouseup', this._mouseUpClick);
            }
        },
		 /**
         * Section For handle the spin button over mouse down click event
		 * @private
         */	
        _spinDownClick: function (event) {
            var self = this;
            event.preventDefault();
            clearTimeout(this._timeout);
            if (!this.model.enabled || this.model.readOnly) return;
            this._on(this.spinDown, 'mouseleave', this._mouseUpClick);
            this.spinDown.addClass("e-active");
            if (event.type == "mouseup") {
                this._decrementValue(event);
                this.spinDown.removeClass("e-active");
                this._off($(document), 'mouseup', this._mouseUpClick);
            }
            else if (event.type == "mousedown") {
                if (!this._focused) this.element[0].focus();
                this._timeout = setInterval(function () { self._decrementValue(event); }, 150);
                this._on($(document), 'mouseup', this._mouseUpClick);
            }
        },
		/**
         * Section For handle the mouse up click event
		 * @private
         */	
        _mouseUpClick: function (event) {
            event.stopPropagation();
            clearTimeout(this._timeout);
            this._off(this.spinUp, 'mouseleave', this._mouseUpClick);
            this._off(this.spinDown, 'mouseleave', this._mouseUpClick);
            this.spinDown.removeClass("e-active");
            this.spinUp.removeClass("e-active");
        },
		/**
         * Section For handle the mouse wheel event
		 * @private
         */	
        _mouseWheel: function (event) {
            event.preventDefault();
            if (!this._focused) this.element[0].focus();
			if (!this.model.enabled || this.model.readOnly) return;
            var delta;
            var rawEvent = event.originalEvent;
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
                this._incrementValue(event);
            else if (delta < 0)
                this._decrementValue(event);
            this._cancelEvent(event);
        },
		
		/**
         * Section For handle number value from editors
		 * @private
         */	
        _numberValue: function () {
            var value = this._textBox.value;
            if (this.sfType === "ej.PercentageTextbox") {
                value = value.split(this._percentSymbol)[0];
            }
            else if (this.sfType === "ej.CurrencyTextbox") {
                var temp = value.split(this._currencySymbol)[1];
                value = temp ? temp.replace(")", "") : value;
            }
            return value;
        },
		/**
         * Section For handle the focus in event
		 * @private
         */	
        _focusIn: function (event) {
            this._focused = true;
            this.wrapper.addClass("e-focus");
            // this.element.addClass("e-focus");
            if (this.model.readOnly)
                return;
            this.wrapper.removeClass('e-error');
            if (this._textBox.value == this.model.watermarkText) {
                this._textBox.value = "";
                if (this.element.hasClass("e-watermark")) this._wipeWaterMark();
            }
            if (!this._error) {
                if (this._textBox.value != "")
                    this._textBox.value = this._numberValue();
                this._setSelectionRange(0, this._textBox.value.length);
            }
            this._trigger("focusIn",{value: this.model.value });
        },
		/**
         * Section For handle the focus out event
		 * @private
         */	
        _focusOut: function (event) {
            this._focused = false;
            this.wrapper.removeClass("e-focus");
            if (!this._error) {
                if (this._textBox.value != "" && this._textBox.value != this.model.watermarkText) {
                    if (parseFloat(this._textBox.value) < this.model.minValue) {
                        if (this.model.enableStrictMode == false)
                            this._textBox.value = this.model.minValue.toFixed(this.model.decimalPlaces);
                        else
                            this.isValidState = false
                    }
                    else if (parseFloat(this._textBox.value) > this.model.maxValue) {
                        if (this.model.enableStrictMode == false)
                            this._textBox.value = this.model.maxValue.toFixed(this.model.decimalPlaces);
                        else
                            this.isValidState = false;
                    }
                    if (this.sfType === "ej.NumericTextbox")
                        this.model.value = Globalize.parseFloat(this._textBox.value, this.model.locale);
                    else if (this.sfType === "ej.PercentageTextbox" || this.sfType === "ej.CurrencyTextbox") {
                        var editorvalue = this._textBox.value, value = editorvalue;
                        if (editorvalue.indexOf(Globalize.culture(this.model.locale).numberFormat.percent.symbol) > -1)
                            value = editorvalue.substring(0, editorvalue.length - 1);
                        else if (editorvalue.indexOf(Globalize.culture(this.model.locale).numberFormat.currency.symbol) > -1)
                            value = editorvalue.substring(1);
                        this.model.value = Globalize.parseFloat(value, this.model.locale);
                    }
                    if (isNaN(this.model.value) && !this.model.value) {
                        this.model.value = "";
                        this.isValidState = false;
                    }
                    this._localizedFormat();
                    this._checkErrorClass();
                }
                else {
                    if (this._textBox.value == "" && this.model.watermarkText == "")
                        this._textBox.value = "";
                    else if (this._textBox.value == "" && this.model.watermarkText != "")
                        this._setWaterMark();
                    if (this._textBox.value != "") {
                        if (this._textBox.value == this.model.watermarkText)
                            this.model.value = "";
                        else
                            this._setValue(this._textBox.value);
                    }
                }
                if (this.model.value == "" || this.model.value >= this.model.minValue && this.model.value <= this.model.maxValue) this.isValidState = true;
                else if (this.model.enableStrictMode) this.isValidState = false;
                this._keyUp();
                this._trigger("focusOut", { value: this.model.value });
            }
            this._checkErrorClass();
        },
		/**
         * Section For handle the cancel event
		 * @private
         */	
        _cancelEvent: function (e) {
            e.cancelBubble = true;
            e.returnValue = false;
            e.stopPropagation();
            e.preventDefault();
            return false;
        },
		/**
         * Section For handle the increment value in editors.
		 * @private
         */	
        /* Increment the Value */
        _incrementValue: function (e) {
            this.isValidState = true;
            if (this._textBox.value != this.model.watermarkText || this._textBox.value == "") {
                if (this._textBox.value == "")
                    this._textBox.value = this._startValue;
                if (this.sfType === "ej.PercentageTextbox" || this.sfType === "ej.CurrencyTextbox") {
                    var editorvalue = this._textBox.value, value = editorvalue;
                    if (editorvalue.indexOf(Globalize.culture(this.model.locale).numberFormat.percent.symbol) > -1)
                        value = editorvalue.substring(0, editorvalue.length - 1);
                    else if (editorvalue.indexOf(Globalize.culture(this.model.locale).numberFormat.currency.symbol) > -1)
                        value = editorvalue.substring(1);
                    this.model.value = Globalize.parseFloat(value, this.model.locale);
                }
                else if (this.sfType == "ej.NumericTextbox")
                    this.model.value = Globalize.parseFloat(this._textBox.value, this.model.locale);

                if (isNaN(this.model.value) && !this.model.value) {
                    this.model.value = this._startValue;
                }
                if (this.model.enableStrictMode == true) {
                    if (this.model.value > this.model.minValue && this.model.value > this.model.maxValue) {
                        this.model.value = this.model.maxValue;
                        this._setValue(this.model.value);
                        this._wipeWaterMark();
                    }
                    else if (this.model.value < this.model.minValue && this.model.value < this.model.maxValue) {
                        this.model.value = this.model.minValue;
                        this._setValue(this.model.value);
                        this._wipeWaterMark();
                    }
                    else
                        if (this.model.value >= this.model.minValue && this.model.value < this.model.maxValue) {
                            this.model.value = this.model.value + this.model.incrementStep;
                            if (this.model.value >= this.model.minValue && this.model.value <= this.model.maxValue) {
                                this._setValue(this.model.value);
                                this._wipeWaterMark();
                            }
                        };
                }
                else
                    if (this.model.value >= this.model.minValue && this.model.value < this.model.maxValue) {
                        this.model.value = this.model.value + this.model.incrementStep;
                        if (this.model.value >= this.model.minValue && this.model.value <= this.model.maxValue) {
                            this._setValue(this.model.value);
                            this._wipeWaterMark();
                        }
                    }
            }
            this._checkErrorClass();
        },
		/**
         * Section For handle the decrement value in editors.
		 * @private
         */	
        /* Decrement the Value */
        _decrementValue: function (e) {
            this.isValidState = true;
            var itemValue = this.model.value;
            if (this._textBox.value != this.model.watermarkText || this._textBox.value == "") {
                if (this._textBox.value == "")
                    this._textBox.value = this._startValue;
                else
                    if (this._textBox.value.indexOf(" ") >= 0)
                        this._textBox.value = this._textBox.value.replace(" ", "");
                if (this.sfType === "ej.PercentageTextbox" || this.sfType === "ej.CurrencyTextbox") {
                    var editorvalue = this._textBox.value, value = editorvalue;
                    if (editorvalue.indexOf(Globalize.culture(this.model.locale).numberFormat.percent.symbol) > -1)
                        value = editorvalue.substring(0, editorvalue.length - 1);
                    else if (editorvalue.indexOf(Globalize.culture(this.model.locale).numberFormat.currency.symbol) > -1)
                        value = editorvalue.substring(1);
                    this.model.value = Globalize.parseFloat(value, this.model.locale);
                }
                else if (this.sfType == "ej.NumericTextbox")
                    this.model.value = Globalize.parseFloat(this._textBox.value, this.model.locale);

                if (isNaN(this.model.value) && !this.model.value) {
                    this.model.value = this._startValue;
                }
                if (this.model.enableStrictMode == true) {
                    if (this.model.value >= this.model.minValue && this.model.value > this.model.maxValue) {
                        this.model.value = this.model.maxValue;
                        this._setValue(this.model.value);
                        this._wipeWaterMark();
                    }
                    else if (this.model.value < this.model.minValue && this.model.value <= this.model.maxValue) {
                        this.model.value = this.model.minValue;
                        this._setValue(this.model.value);
                        this._wipeWaterMark();
                    }
                    else if (this.model.value > this.model.minValue && this.model.value <= this.model.maxValue) {
                        this.model.value = this.model.value - this.model.incrementStep;
                        if (this.model.value >= this.model.minValue && this.model.value <= this.model.maxValue) {
                            this._setValue(this.model.value);
                            this._wipeWaterMark();
                        }
                    }
                }
                else
                    if (this.model.value > this.model.minValue && this.model.value <= this.model.maxValue) {
                        this.model.value = this.model.value - this.model.incrementStep;
                        if (this.model.value >= this.model.minValue && this.model.value <= this.model.maxValue) {
                            this._setValue(this.model.value);
                            this._wipeWaterMark();
                        }
                    }
            }
            this._checkErrorClass();
        },
		/**
         * Section For handle the validate decimal value
		 * @private
         */	
        _validateDecimal: function (e) {
            if (window.navigator.appName == "Microsoft Internet Explorer") {
                if (e.originalEvent.char == Globalize.culture(this.model.locale).numberFormat["."])
                    return true;
            }
            else {
                var char = String.fromCharCode(e.keyCode);
                if (e.keyCode == 188) char = ",";
                else if (e.keyCode == 190 || e.keyCode == 110) char = ".";
                if (Globalize.culture(this.model.locale).numberFormat["."].charCodeAt(0) == char.charCodeAt(0))
                    return true;
            }
            return false;
        },
		/**
         * Section For handle the keycodes
		 * @private
         */	
        _allowKeyCodes: function (e) {
            var keys = new Array(38, 40, 35, 36, 109, 189, 46, 8, 127, 37, 39, 190, 9, 13, 16, 17, 18, 20, 110, 173, 86, 88, 67);
            for (var i = 0; i < keys.length; i++) {
                if (e.keyCode == keys[i] || (this._validateDecimal(e) && this.model.decimalPlaces != 0))
                    return true;
            }
            return false;
        },
		/**
         * Section For raise the event.
		 * @private
         */	
        _raiseChangeEvent: function () {
            var currVal = this._numberValue();
            if (!ej.isNullOrUndefined(this._preVal) && (this._preVal.toString() != currVal)) {
                this._preVal = currVal;
                this.model.value = this._checkNumValue(this._preVal);
                this._hiddenInput.val(this.model.value);
                this.element.attr('aria-valuenow', this.model.value);
                this._trigger("change", { value: this.model.value });
            }
        },
		/**
         * Section For handle the key up event
		 * @private
         */	
        _keyUp: function () {
            this._raiseChangeEvent();
        },
		/**
         * Section For handle the key down event
		 * @private
         */	
        _keyDown: function (e) {
            if (this.model.readOnly) return;
            var cursor, cancelEvent, beforeCursor, afterCursor, sel;
            if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || this._allowKeyCodes(e)) {
                if (e.shiftKey && (e.keyCode == 35 || e.keyCode == 36 || e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 46 || e.keyCode == 127) || (e.ctrlKey && (e.keyCode == 86 || e.keyCode == 118 || e.keyCode == 67 || e.keyCode == 88)))
                    return true;
                if (((e.shiftKey == true || e.ctrlKey == true) && (e.keyCode != 9 && e.keyCode != 17 && e.keyCode != 86 && e.keyCode != 67)) || (e.keyCode == 67 || e.keyCode == 86 || e.keyCode == 88)) {//Prevent Shift + Tab event
                    this._keypressFlag = false;
                    this._cancelEvent(e);
                    return false;
                }

                if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode == 110) {//Numbers from 0 to 9 in keyboard and numpad (110 for decimal)
                    this._wipeWaterMark();
                    cursor = this._caretPosition();
                    beforeCursor = this._textBox.value.toString().substring(0, cursor);
                    afterCursor = this._textBox.value.toString().substring(cursor);
                    sel = this._getSelection(this._textBox.value);
                    // For Numpad issue
                    if (e.keyCode >= 96 && e.keyCode <= 105)
                        e.keyCode -= 48;
                    if (sel.length == 0)
                    // if (beforeCursor.length != 0 && String.fromCharCode(e.keyCode) == 0)                           
                        this.model.value = Globalize.parseFloat((beforeCursor + String.fromCharCode(e.keyCode) + afterCursor), this.model.locale);
                    else
                        this.model.value = Globalize.parseFloat((beforeCursor.substring(0, beforeCursor.length - sel.length) + String.fromCharCode(e.keyCode) + afterCursor), this.model.locale);
                    if (this._validateOnType) {
                        var decSep = Globalize.culture(this.model.locale).numberFormat["."];
                        var temp = this.model.value.toString();
                        var tempIndex = temp.indexOf(decSep);
                        var value = this.model.value;
                        var replaceminVal = this.model.minValue.toFixed(this.model.decimalPlaces);
                        var replacemaxVal = this.model.maxValue.toFixed(this.model.decimalPlaces);
                        var exp = false;
                        if (replaceminVal.toString().indexOf("e") > 0 || replacemaxVal.toString().indexOf("e") > 0)
                            exp = true;
                        if (!exp) {
                            if (decSep != ".") {
                                temp = this._textBox.value.toString();
                                if (this.model.minValue.toString().match(new RegExp(".", "g")))
                                    replaceminVal = this.model.minValue.toString().replace(/["."]/g, decSep);
                                if (this.model.maxValue.toString().match(new RegExp(".", "g")))
                                    replacemaxVal = this.model.maxValue.toString().replace(/["."]/g, decSep);
                            }
                            if (replaceminVal.toString().indexOf(decSep) > 0)
                                minVal = Number(replaceminVal.toString().substring(0, replaceminVal.toString().indexOf(decSep)));
                            else
                                minVal = this.model.minValue;
                            if (replacemaxVal.toString().indexOf(decSep) > 0)
                                maxVal = Number(replacemaxVal.toString().toString().substring(0, replacemaxVal.toString().indexOf(decSep)));
                            else
                                maxVal = this.model.maxValue;
                            if (tempIndex > 0) {
                                value = Number(temp.substring(temp.indexOf(decSep) + 1, temp.toString().length));
                                if (replaceminVal.toString().indexOf(decSep) > 0)
                                    minVal = Number(replaceminVal.toString().substring(replaceminVal.toString().indexOf(decSep) + 1, replaceminVal.toString().length));
                                else
                                    minVal = 0;
                                if (replacemaxVal.toString().indexOf(decSep) > 0)
                                    maxVal = Number(replacemaxVal.toString().substring(replacemaxVal.toString().indexOf(decSep) + 1, replacemaxVal.toString().length));
                                else
                                    maxVal = 0;
                                var valb4Dec = Number(temp.substring(0, temp.indexOf(decSep)));
                                var minValb4Dec = Number(replaceminVal.toString().substring(0, replaceminVal.toString().indexOf(decSep)));
                                var maxValb4Dec = Number(replacemaxVal.toString().substring(0, replacemaxVal.toString().indexOf(decSep)));
                                if (!this._validateValue(value, minVal, maxVal, true, valb4Dec, minValb4Dec, maxValb4Dec))
                                    cancelEvent = true;
                                else
                                    cancelEvent = false;
                            }
                            else {
                                if (!this._validateValue(value, minVal, maxVal, false))
                                    cancelEvent = true;
                                else
                                    cancelEvent = false;
                            }
                        }
                        else if (this.model.decimalPlaces != 0) {
                            var afterdeci = (this._textBox.value).split(".")[1];
                            if (temp.indexOf(decSep) > 0 || (Number(temp) < Number(replaceminVal) || Number(temp) > Number(replacemaxVal))) {
                                if ((temp.substring(temp.indexOf(decSep) + 1, temp.length)).length > this.model.decimalPlaces)
                                    cancelEvent = true;
                                else if (sel.length == 0 && cursor > (this._textBox.value.indexOf(decSep)) && afterdeci && afterdeci.length >= this.model.decimalPlaces) cancelEvent = true;
                                else cancelEvent = false;
                            }
                            else if (sel.length == 0 && cursor > (this._textBox.value.indexOf(decSep)) && afterdeci && afterdeci.length >= this.model.decimalPlaces) cancelEvent = true;
                            else
                                cancelEvent = false;
                        }
                        else
                            cancelEvent = false;
                        if (cancelEvent) {
                            if (sel.length == 0)
                                this.model.value = parseFloat(beforeCursor + afterCursor);
                            else
                                this.model.value = parseFloat(beforeCursor.substring(0, beforeCursor.length - sel.length) + afterCursor);
                            this._keypressFlag = false;
                            this._cancelEvent(e);
                            return false;
                        }
                    }
                    this._raiseChangeEvent();
                }
                if (e.keyCode == 38 && this._allowkeyboard)//Up Arrow  
                {
                    this._incrementValue(e);
                    this._cancelEvent(e);
                }

                if (e.keyCode == 40 && this._allowkeyboard)//Down Arrow 
                {
                    this._decrementValue(e);
                    this._cancelEvent(e);

                }
                if (e.keyCode == 8) {//BackSpace Key
                    cursor = this._caretPosition();
                    beforeCursor = this._textBox.value.substring(0, cursor);
                    afterCursor = this._textBox.value.substring(cursor);
                    sel = this._getSelection(this._textBox.value);
                    if (sel.length == 0)
                        this.model.value = beforeCursor.substring(0, beforeCursor.length - 1) + afterCursor;
                    else
                        this.model.value = beforeCursor.substring(0, beforeCursor.length - sel.length) + afterCursor;

                    this._raiseChangeEvent();
                }

                if (e.keyCode == 46 || e.keyCode == 127) {//Delete key
                    cursor = this._caretPosition();
                    beforeCursor = this._textBox.value.substring(0, cursor);
                    afterCursor = this._textBox.value.substring(cursor);
                    sel = this._getSelection(this._textBox.value);
                    if (sel.length == 0)
                        this.model.value = beforeCursor + afterCursor.substring(1, afterCursor.length);
                    else
                        this.model.value = beforeCursor.substring(0, beforeCursor.length - sel.length) + afterCursor.substring(0, afterCursor.length);
                    this._raiseChangeEvent();
                }
                if (this._validateDecimal(e) && this.model.decimalPlaces != 0 && e.keyCode != 46)//'.' char key press
                {
                    var decChar = Globalize.culture(this.model.locale).numberFormat["."];
                    var minVal, maxVal;
                    var dotSplit = this._textBox.value.split(decChar);
                    if (dotSplit[1] == undefined) {
                        var curPosition = this._caretPosition();
                        var strBeforeCursor = dotSplit[0].substring(0, curPosition);
                        var strAfterCursor = dotSplit[0].substring(curPosition);
                        if (this.model.minValue.toString().indexOf("e") > 0 || this.model.maxValue.toString().indexOf("e") > 0)
                            exp = true;
                        if (this._validateOnType && !exp) {
                            if (this.model.minValue.toString().match(new RegExp(".", "g")))
                                minVal = this.model.minValue.toString().replace(/["."]/g, decChar);
                            if (this.model.maxValue.toString().match(new RegExp(".", "g")))
                                maxVal = this.model.maxValue.toString().replace(/["."]/g, decChar);
                            if (minVal.indexOf(decChar) > 0)
                                minVal = Number(minVal.substring(0, minVal.indexOf(decChar)));
                            else
                                minVal = Number(minVal);
                            if (maxVal.indexOf(decChar) > 0)
                                maxVal = Number(maxVal.substring(0, maxVal.indexOf(decChar)));
                            else
                                maxVal = Number(maxVal);
                            if (this._validateValue(this.model.value, minVal, maxVal, "DecimalKeyPressed"))
                                this.model.value = strBeforeCursor + decChar + strAfterCursor;
                            else {
                                this._keypressFlag = false;
                                this._cancelEvent(e);
                                return false;
                            }
                        }
                        else
                            this.model.value = strBeforeCursor + decChar + strAfterCursor;
                        this._setSelectionRange(this.model.value.length, this.model.value.length);
                        this._textBox.value = this.model.value;
                    } else {
                        this.model.value = this._textBox.value;
                    }
                    this._cancelEvent(e);
                } else if (e.keyCode == 190 || e.keyCode == 110) {
                    this._cancelEvent(e);
                }
                if (e.keyCode == 109 || e.keyCode == 189 || e.keyCode == 173)//'-' char key press.
                {
                    if ((this._caretPosition() != 0 && this._getSelection(this._removeFormats(this._textBox.value)) != this.model.value) || this.model.minValue >= 0 || (this._textBox.value.toString().match(new RegExp("-", "g")) && this._getSelection(this._textBox.value) == ""))
                        this._cancelEvent(e);

                    else if (this._getSelection() == this.model.value)
                        this.model.value = null;
                }
            }
            //For watermark issue while press ctrl+z
            else if (e.keyCode != 27 && !e.ctrlKey || (e.ctrlKey && e.keyCode == 90 && $.trim(this._textBox.value) == "")) {
                this._keypressFlag = false;
                this._cancelEvent(e);
            }
        }
    });

})(jQuery, Syncfusion);;