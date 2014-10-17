/*!
*  filename: ej.maskedit.js
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
	* @classdesc Custom Design for Html ejMaskEdit Textbox control.
	* @class ejMaskEdit
	* @requires jQuery
	* @requires ej.core.js
	* @requires jquery.globalize.js
    * @requires globalize.cultures.min.js
	* @requires ej.maskedit.js
	* @example 	
	* &lt;input id="mask" type="text" /&gt; <br> 
	* &lt;script&gt; <br>
	* // Create Slider <br>
    * $('#mask').ejMaskEdit(); <br>	
	* &lt;/script&gt; <br>
	*/    
    ej.widget("ejMaskEdit", "ej.MaskEdit", {
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
			* Specifies the maskFormat string for the maskedit textbox control.	
			* @default null
			* @type {string}
			* @example 
			* &lt;input id="mask" type="text" /&gt; <br> 
	        * &lt;script&gt; 
			* //To set maskFormat API value during initialization  
			* 	$("#mask").ejMaskEdit({ maskFormat: "99-9999"});					 
			* &lt;/script&gt; 
			* @memberof ejMaskEdit
			* @instance
			*/		
            maskFormat: "",
			/**		
			* Specifies the value string for the maskedit textbox control.	
			* @default null
			* @type {string}
			* @example
			* &lt;input id="mask" type="text" /&gt; <br> 
			* &lt;script&gt;			
			* //To set value API  during initialization  
			* 	$("#mask").ejMaskEdit({ maskFormat: "99-9999",value: "459978"});					 
			* &lt;/script&gt; 
			* @memberof ejMaskEdit
			* @instance
			*/		
            value: "",
			/**		
			* Specifies the watermark text string for the maskedit textbox control.	
			* @default null
			* @type {string}
			* @example 
			* &lt;input id="mask" type="text" /&gt; <br> 
			* &lt;script&gt; 
			* //To set watermarkText API value during initialization  
			* 	$("#mask").ejMaskEdit({ watermarkText: "Enter value"});					
		    * &lt;/script&gt;
			* @memberof ejMaskEdit
			* @instance
			*/		
            watermarkText: "",
			/**		
			* Specifies the height for the maskedit textbox control.	
			* @default 28pixel
			* @type {string}
			* @example 
			* &lt;input id="mask" type="text" /&gt; <br> 
			* &lt;script&gt; 
			* //To set height API value during initialization  
			* 	$("#mask").ejMaskEdit({ maskFormat: "99-9999",height: "28px"});					 
			* &lt;/script&gt;
			* @memberof ejMaskEdit
			* @instance
			*/		
            height: "",
			/**		
			* Specifies the width for the maskedit textbox control.	
			* @default 143pixel
			* @type {string}
			* @example 
			* &lt;input id="mask" type="text" /&gt; <br> 
			* &lt;script&gt;
			* //To set width API value during initialization  
			* 	$("#mask").ejMaskEdit({ maskFormat: "99-9999",width: 143});					 
			* &lt;/script&gt;
			* @memberof ejMaskEdit
			* @instance
			*/	
            width: "",
			/**		
			* Specifies the showError until correct value entered in the maskedit textbox control.	
			* @default false
			* @type {boolean}
			* @example 
			* &lt;input id="mask" type="text" /&gt; <br> 
			* &lt;script&gt;
			* //To set showError API value during initialization  
			* 	$("#mask").ejMaskEdit({maskFormat: "99-9999", showError: true});					 
		    * &lt;/script&gt; 
			* @memberof ejMaskEdit
			* @instance
			*/	
            showError: false,
			/**		
			* Specify the cssClass to maskedit textbox control to achieve custom theme.
			* @default null
			* @type {string}
			* @example 
			* &lt;input id="mask" type="text" /&gt; <br> 
			* &lt;script&gt;
			* //To set cssClass API value during initialization  
			* 	$("#mask").ejMaskEdit({maskFormat: "99-9999",cssClass: "gradient-lime"});					 
			* &lt;/script&gt;
			* @memberof ejMaskEdit
			* @instance
			*/	
            cssClass: "",
			/**		
			* Specify the custom character allowed to entered in maskedit textbox control.
			* @default null
			* @type {string}
			* @example 
			* &lt;input id="mask" type="text" /&gt; <br> 
			* &lt;script&gt; 
			* //To set customCharacter API value during initialization  
			* 	$("#mask").ejMaskEdit({ maskFormat: "99-9999",customCharacter: "gradient-lime"});					
			* &lt;/script&gt; 
			* @memberof ejMaskEdit
			* @instance
			*/	
            customCharacter: null,
			/**		
			* Specify the inputMode for maskedit textbox control. See {@link InputMode}
			* @default ej.InputMode.Text 
			* @type {enum}
			* @example 
			* &lt;input id="mask" type="text" /&gt; <br> 
			* &lt;script&gt;
			* //To set inputMode API value during initialization  
			* 	$("#mask").ejMaskEdit({maskFormat: "99-9999",inputMode: ej.InputMode.Password });					 
			* &lt;/script&gt; 
			* @memberof ejMaskEdit
			* @instance
			*/	
            inputMode: "text",
			/**		
			* Specify the readOnly for maskedit textbox control.
			* @default false 
			* @type {boolean}
			* @example 
			* &lt;input id="mask" type="text" /&gt; <br> 
			* &lt;script&gt; 
			* //To set readOnly API value during initialization  
			* 	$("#mask").ejMaskEdit({ maskFormat: "99-9999",value:"456789",readOnly: true });					 
			* &lt;/script&gt;
			* @memberof ejMaskEdit
			* @instance
			*/
            readOnly: false,
			/**		
			* Specify the text alignment for maskedit textbox control.
			* @default "left" 
			* @type {enum}
			* @example 
			* &lt;input id="mask" type="text" /&gt; <br> 
			* &lt;script&gt;
			* //To set textAlign API value during initialization  
			* 	$("#mask").ejMaskEdit({maskFormat: "99-9999",textAlign: "left" });					 
			* &lt;/script&gt;
			* @memberof ejMaskEdit
			* @instance
			*/	
            textAlign: ej.TextAlign.Left,			
			/**		
			* Specify the hidePromptOnLeave for maskedit textbox control to hide the mask on focus out.
			* @default false 
			* @type {boolean}
			* @example 
			* &lt;input id="mask" type="text" /&gt; <br> 
			* &lt;script&gt;
			* //To set hidePromptOnLeave API value during initialization  
			* 	$("#mask").ejMaskEdit({ maskFormat: "99-9999",hidePromptOnLeave: true });					 
			* &lt;/script&gt;
			* @memberof ejMaskEdit
			* @instance
			*/	
            hidePromptOnLeave: false,
			/**		
			* Specify the rounded corner for maskedit textbox control.
			* @default false 
			* @type {boolean}
			* @example 
			* &lt;input id="mask" type="text" /&gt; <br> 
			* &lt;script&gt;
			* //To set showRoundedCorner API value during initialization  
			* 	$("#mask").ejMaskEdit({ maskFormat: "99-9999",showRoundedCorner:true});					 
			* &lt;/script&gt;
			* @memberof ejMaskEdit
			* @instance
			*/	            
            showRoundedCorner: false,
			/**		
			* Specify the enablePersistence to mask edit textbox control to save current model value to browser cookies for state maintains.
			* @default false 
			* @type {boolean}
			* @example 
			* &lt;input id="mask" type="text" /&gt; <br> 
			* &lt;script&gt;
			* //To set enablePersistence API value during initialization  
			* 	$("#mask").ejMaskEdit({ enablePersistence: "left" });					 
			* &lt;/script&gt;
			* @memberof ejMaskEdit
			* @instance
			*/	  
            enablePersistence: false,
			/**		
			* Specify the state of the maskedit textbox control.
			* @default true 
			* @type {boolean}
			* @example 
			* &lt;input id="mask" type="text" /&gt; <br> 
			* &lt;script&gt;
			* //To set enabled API value during initialization  
			* 	$("#mask").ejMaskEdit({ maskFormat: "99-9999",enabled: true });					 
			* &lt;/script&gt;
			* @memberof ejMaskEdit
			* @instance
			*/	  
            enabled: true,
			/**     
			 * Fires when keydown in mask edit textbox control.
			 * @event
			 * @name ejMaskEdit#keydown 	
			 * @param {Object} argument Event parameters from maskedit textbox control     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.			 
			 * @param {object}  argument.model returns the maskedit model	
			 * @param {string}  argument.type returns the name of the event				 
			 * @param {number}  argument.value returns the maskedit value
			 * @param {string}  argument.unmaskedValue  returns unstripped value in maskedit textbox control.
			 * @example 
			 * &lt;input id="mask" type="text" /&gt; <br> 
			 * &lt;script&gt;
			 * //keydown event for mask edit textbox control
             * $("#mask").ejMaskEdit({
			 *    maskFormat: "99-9999",
             *    keydown: function (args) {}
             * }); 
			 * &lt;/script&gt;			 
			 * @memberof ejMaskEdit
			 * @instance
			 */
			keydown: null,
			/**     
			 * Fires when keyup in mask edit textbox control.
			 * @event
			 * @name ejMaskEdit#keyup 	
			 * @param {Object} argument Event parameters from maskedit textbox control     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.			 
			 * @param {object}  argument.model returns the maskedit model	
			 * @param {string}  argument.type returns the name of the event				 
			 * @param {number}  argument.value returns the maskedit value
			 * @param {string}  argument.unmaskedValue  returns unstripped value in maskedit textbox control.
			 * @example
			 * &lt;input id="mask" type="text" /&gt; <br> 
			 * &lt;script&gt;		 
			 * //keyup event for mask edit textbox control
             * $("#mask").ejMaskEdit({
			 *    maskFormat: "99-99-9999",
             *    keyup: function (args) {}
             * });      
			 * &lt;/script&gt;
			 * @memberof ejMaskEdit
			 * @instance
			 */
            keyup: null,
			/**     
			 * Fires when keypress in mask edit textbox control.
			 * @event
			 * @name ejMaskEdit#keyPress 	
			 * @param {Object} argument Event parameters from maskedit textbox control     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.			 
			 * @param {object}  argument.model returns the maskedit model	
			 * @param {string}  argument.type returns the name of the event				 
			 * @param {number}  argument.value returns the maskedit value
			 * @param {string}  argument.unmaskedValue  returns unstripped value in maskedit textbox control.
			 * @example 
			 * &lt;input id="mask" type="text" /&gt; <br> 
			 * &lt;script&gt;
			 * //keyPress event for mask edit textbox control
             * $("#mask").ejMaskEdit({
			 *    maskFormat: "99-99-9999",
             *    keyPress: function (args) {}
             * });      
			 * &lt;/script&gt;
			 * @memberof ejMaskEdit
			 * @instance
			 */
            keyPress: null,
			/**     
			 * Fires when value changed in mask edit textbox control.
			 * @event
			 * @name ejMaskEdit#change 	
			 * @param {Object} argument Event parameters from maskedit textbox control     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.			 
			 * @param {object}  argument.model returns the maskedit model	
			 * @param {string}  argument.type returns the name of the event				 
			 * @param {number}  argument.value returns the maskedit value
			 * @param {string}  argument.unmaskedValue  returns unstripped value in maskedit textbox control.
			 * @example 
			 * &lt;input id="mask" type="text" /&gt; <br> 
			 * &lt;script&gt;
			 * //change event for mask edit textbox control
             * $("#mask").ejMaskEdit({
			 *    maskFormat: "99999 - 9999",
             *    change: function (args) {}
             * });    
			 * &lt;/script&gt;			 
			 * @memberof ejMaskEdit
			 * @instance
			 */
            change: null,
			/**     
			 * Fires when mouse over in mask edit textbox control.
			 * @event
			 * @name ejMaskEdit#mouseover 	
			 * @param {Object} argument Event parameters from maskedit textbox control     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.			 
			 * @param {object}  argument.model returns the maskedit model	
			 * @param {string}  argument.type returns the name of the event				 
			 * @param {number}  argument.value returns the maskedit value
			 * @param {string}  argument.unmaskedValue  returns unstripped value in maskedit textbox control.
			 * @example 
			 * &lt;input id="mask" type="text" /&gt; <br> 
			 * &lt;script&gt; 
			 * //mouseover event for toggle button
             * $("#mask").ejMaskEdit({
			 *    maskFormat: "$99999",
             *    mouseover: function (args) {}
             * });   
			 * &lt;/script&gt;			 
			 * @memberof ejMaskEdit
			 * @instance
			 */
            mouseover: null,
			/**     
			 * Fires when mouse out in mask edit textbox control.
			 * @event
			 * @name ejMaskEdit#mouseout 	
			 * @param {Object} argument Event parameters from maskedit textbox control     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.			 
			 * @param {object}  argument.model returns the maskedit model	
			 * @param {string}  argument.type returns the name of the event				 
			 * @param {number}  argument.value returns the maskedit value
			 * @param {string}  argument.unmaskedValue  returns unstripped value in maskedit textbox control.
			 * @example 
			 * &lt;input id="mask" type="text" /&gt; <br> 
			 * &lt;script&gt; 
			 * //mouseout event for toggle button
             * $("#mask").ejMaskEdit({
			 *    maskFormat: "***-**-****",
             *    mouseout: function (args) {}
             * });    
			 * &lt;/script&gt;			 
			 * @memberof ejMaskEdit
			 * @instance
			 */
            mouseout: null,
			/**     
			 * Fires when focused in mask edit textbox control.
			 * @event
			 * @name ejMaskEdit#focusIn 	
			 * @param {Object} argument Event parameters from maskedit textbox control     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.			 
			 * @param {object}  argument.model returns the maskedit model	
			 * @param {string}  argument.type returns the name of the event				 
			 * @param {number}  argument.value returns the maskedit value
			 * @param {string}  argument.unmaskedValue  returns unstripped value in maskedit textbox control.
			 * @example 
			 * &lt;input id="mask" type="text" /&gt; <br> 
			 * &lt;script&gt;
			 * //focusIn event for mask edit textbox control
             * $("#mask").ejMaskEdit({
			 *    maskFormat: "aa-99-99-a",
             *    focusIn: function (args) {}
             * });
			 * &lt;/script&gt;			 
			 * @memberof ejMaskEdit
			 * @instance
			 */
            focusIn: null,
			/**     
			 * Fires when focused out in mask edit textbox control.
			 * @event
			 * @name ejMaskEdit#focusOut 	
			 * @param {Object} argument Event parameters from maskedit textbox control     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.			 
			 * @param {object}  argument.model returns the maskedit model	
			 * @param {string}  argument.type returns the name of the event				 
			 * @param {number}  argument.value returns the maskedit value
			 * @param {string}  argument.unmaskedValue  returns unstripped value in maskedit textbox control.
			 * @example 
			 * &lt;input id="mask" type="text" /&gt; <br> 
			 * &lt;script&gt;
			 * //focusOut event for mask edit textbox control
             * $("#mask").ejMaskEdit({
			 *    maskFormat: "(999)999-9999",
             *    focusOut: function (args) {}
             * }); 
			 * &lt;/script&gt;			 
			 * @memberof ejMaskEdit
			 * @instance
			 */
            focusOut: null,
			  /**     
          * Fires after MaskEdit control is created.
          * @event
          * @name ejMaskEdit#create 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the MaskEdit model
          * @param {string}  argument.type returns the name of the event
          * @example 
		  * &lt;input id="mask" type="text" /&gt; <br> 
		  * &lt;script&gt;
			 * //create event for mask edit textbox control
             * $("#mask").ejMaskEdit({
			 *    maskFormat: "(999)999-9999",
             *    create: function (args) {}
             * }); 
		  * &lt;/script&gt;		 
          * @memberof ejMaskEdit
          * @instance
          */
            create: null,
			 /**     
          * Fires when the MaskEdit is destroyed successfully.
          * @event
          * @name ejMaskEdit#destroy 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the MaskEdit model
          * @param {string}  argument.type returns the name of the event
          * @example 
		  * &lt;input id="mask" type="text" /&gt; <br> 
		  * &lt;script&gt;
			 * //destroy event for mask edit textbox control
             * $("#mask").ejMaskEdit({
			 *    maskFormat: "(999)999-9999",
             *    destroy: function (args) {}
             * }); 
		  * &lt;/script&gt;		 
          * @memberof ejMaskEdit
          * @instance
          */
            destroy: null
            
        },
		/**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            maskFormat: "string",
            showError: "boolean",
            enabled: "boolean",
            customCharacter: "string",
            cssClass: "string",
            watermarkText: "string",
            showRoundedCorner: "boolean",
            inputMode: "enum",
            textAlign: "enum",
            hidePromptOnLeave: "boolean",
            readOnly: "boolean"
        },
		/**
         * To configure the properties at runtime using SetModel		
		 * @private
         */
        _setModel: function (jsondata) {
            if (!(this.model.enabled) && ej.isNullOrUndefined(jsondata["enabled"])) return false;
            for (var key in jsondata) {
                switch (key) {
                    case "value": this._setValue(jsondata[key]); jsondata[key] = this.get_StrippedValue(); break;
                    case "width": this._setWidth(jsondata[key]); break;
                    case "height": this._setHeight(jsondata[key]); break;
                    case "watermarkText": this.model.watermarkText = jsondata[key]; this._setWaterMark(); break;
                    case "showRoundedCorner": this._roundedCorner(jsondata[key]); break;
                    case "textAlign": this._setTextAlign(jsondata[key]); break;
                    case "inputMode": this._setInputMode(jsondata[key]); break;
                    case "maskFormat": this._setMask(jsondata[key]); break;
                    case "cssClass": this._setSkin(jsondata[key]); break;
                    case "readOnly": this._setReadOnly(jsondata[key]); break;
                    case "enabled": this.model.enabled = jsondata[key]; this._controlStatus(jsondata[key]); break;
                }
            }
        },
        observables: ["value"],
        // all events bound using this._on will be unbind automatically
		/**
         * To configure destroy of the maskedit textbox control.		
		 * @private
         */	
        _destroy: function () {
            if (this.model.name) this.element.removeAttr("name");
            this.element.insertAfter(this.wrapper);
            this.wrapper.remove();
            if (this.model.textAlign) this.element.css("text-align", "");
            this.element.val("").removeClass(' e-mask e-input e-corner-all e-disable e-watermark').empty();
        },
		/**
         * To initialize the maskedit textbox control.		
		 * @private
         */
        // constructor function
        _init: function () {
            if (this.element.is("input") && (this.element.is("input[type=text]") || !this.element.attr('type'))) {
                this._setValues();
                this._renderControl();
                this._initObjects();
                this._wireEvents();
            } else {
                this._destroy();
                return false;
            }
        },
		/**
         * To enable or disable the state of the maskedit control.		
		 * @private
         */	
        _controlStatus: function (value) {
            //disable status
            value != true ? this.disable() : this.enable();
        },
		/**
         * To configure value for maskedit textbox control.		
		 * @private
         */	
        _setValues: function () {
            this._tempMask = null;
            this._unStrippedMask = null;
            //Predefined character definitions
            this._charMap = {
                '9': "[0-9]",
                'a': "[A-Za-z]",
                '*': "[A-Za-z0-9]",
                'A': "[A-Za-z]",
                'N': "[0-9]",
                '<': "",
                '>': "",
                'C': "",
                '?': "(.)",
                '$': "[A-Za-z ]"
            };
        },
		/**
         * Render Section For maskedit textbox control		
		 * @private
         */	
        _renderControl: function () {
            this.model.name = this.element.attr("name") != null ? this.element.attr("name") : (this.model.name != null ? this.model.name : this.element[0].id);
			if(this.element.attr("name") == null)
                this.element.attr({'name': this.model.name});
            this.wrapper = ej.buildTag("span.e-mask e-widget " + this.model.cssClass);
            this.innerWrapper = ej.buildTag("span.e-in-wrap e-box");
            this.element.attr({ 'aria-invalid': false, 'value': this.model.value }).addClass('e-input');
            this.wrapper.append(this.innerWrapper).insertBefore(this.element);
            this.innerWrapper.append(this.element);
            this._hiddenInput = ej.buildTag("input#" + this._id + "_hidden", "", {}, { type: "hidden" }).insertBefore(this.element);
            this._hiddenInput.attr("name", this.model.name);
            this._setInputMode(this.model.inputMode);
            this._setWidth(this.model.width);
            this._setHeight(this.model.height);
            this._roundedCorner(this.model.showRoundedCorner);
            this._setTextAlign(this.model.textAlign);
            this._setReadOnly(this.model.readOnly);
            this._controlStatus(this.model.enabled);
            this.previousValue = this.model.value;
        },
		/**
         * To initialize the maskedit textbox control properties.		
		 * @private
         */
        _initObjects: function () {
            this._textbox = this.element[0];
            this._keypressFlag = 0;
            this._selectedTextKeyDown = 0;
            // KeyDown trace [ 0 - None, 1 - BackSpace, 2 - Delete]
            this._keydownFlag = 0;
            // Length of the Mask
            this._maskLength = this.model.maskFormat.length;
            //Replacing all [9?$CANa*] to '_'
            this._maskModel = this.model.maskFormat.replace(/[9?$CANa*]/g, '_');
            this._validatedValue = this._maskModel;
            if (this.model.inputMode != "password") {
                this.model.value === "" ? this._setValue(this.element[0].value) : this._setValue(this.model.value);
                // Setting WaterMark Text        
                this._setWaterMark();
            }

            //Check If showError Flag is true add the css class
            if (this.model.showError) {
                this.element.addClass("e-error").attr('aria-invalid',"true");
            }
        },

        //----------------private function--------------------------------------//
		/**
		 * To configure width of the maskedit textbox control.
		 * @private
         */	
        _setWidth: function (value) {
            this.wrapper.width(value);
        },
		/**
		 * To configure height of the maskedit textbox control.
		 * @private
         */
        _setHeight: function (value) {
            this.wrapper.height(value);
        },
		/**
         * To enable or disable the rounded corner behaviour. 		
		 * @private
         */	
        _roundedCorner: function (value) {
            if (value) {
                this.wrapper.removeClass('e-corner-all').addClass('e-corner-all');
            }
            else if (this.wrapper.hasClass('e-corner-all')) {
                this.wrapper.removeClass('e-corner-all');
            }
        },
		/**
		 * To configure text alignment of the maskedit textbox control.
		 * @private
         */
        _setTextAlign: function (align) {
            if (align == "right") {                
                this.wrapper.addClass('e-rtl');
            }
            else {
                this.wrapper.removeClass('e-rtl');
            }
        },
		/**
		 * To configure input mode for maskedit textbox control.
		 * @private
         */
        _setInputMode: function (type) {
            this.element.attr('type', type);
        },
		/**
         * To enable or disable the readonly behaviour. 		
		 * @private
         */	
        _setReadOnly: function (bool) {
            if (bool) this.element.attr("readonly", true);
            else this.element.removeAttr("readonly");
        },
		/**
         * To configure the custom theme for maskedit textbox control using cssClass property		
		 * @private
         */
        _setSkin: function (skin) {
            this.wrapper.removeClass(this.model.cssClass);
            this.wrapper.addClass(skin);
        },
		/**
         * To configure the watermark text to the maskedit textbox control.
		 * @private
         */
        /* Setting the WaterMark text*/
        _setWaterMark: function () {
            this._maskModel = this.model.maskFormat.replace(/[9?$CANa*]/g, '_');
            if (this.model.watermarkText && (this.model.value == '' || this.model.value == this._maskModel)) {
                this._textbox.value = this.model.watermarkText;
                this.element.addClass("e-watermark");
            } else if (this.model.value == '' && this._maskModel != '') {
                this._textbox.value = this._maskModel;
            }
        },
		/**
         * To remove the watermark text from the maskedit textbox control.
		 * @private
         */
        /* Clearing the WaterMark Text*/
        _removeWaterMark: function () {
            if (this.element.hasClass("e-watermark")) {
                this._textbox.value = this._maskModel;
                this.element.removeClass("e-watermark");
            }
        },
		/**
         * To configure alert when user press wrong key in maskedit textbox control.
		 * @private
         */
        /* Show alert when user press Wrong key*/
        _showAlert: function () {
            var ptr = this;
            this.element.addClass("e-error").attr('aria-invalid',"true").animate({ Opacity: 1 }, 700, null, function () {
                $(ptr._textbox).removeClass("e-error").attr('aria-invalid',"false");
            });
        },
		/**
         * To check whether user entered value in maskedit textbox control.
		 * @private
         */
        /* Validating User's TextBox Value*/
        _validateValue: function () {
            var tempValue = this.model.value;
            var tempModel = this._maskModel;
            var valueIndex = -1;
            // Check if Mask is Empty display the text
            if (this._maskLength == 0) {
                if (this.element.hasClass("e-watermark")) {
                    this.element.removeClass("e-watermark");
                }
                this._textbox.value = tempValue;
                return true;
            }
            else {
                var replacestring = this.model.value.toString();
                tempValue = this.model.value = replacestring.replace(/[-]/g, "");
            }

            for (var maskIndex = 0; maskIndex < this._maskLength; maskIndex++) {
                if (this._charMap[this.model.maskFormat.charAt(maskIndex)]) {
                    valueIndex++;
                    var charCode = tempValue.charCodeAt(valueIndex);
                    if (this._validateChars(charCode, maskIndex)) {
                        var strBefore = tempModel.substring(0, maskIndex);
                        var strAfter = tempModel.substring(maskIndex);
                        tempModel = strBefore + tempValue.charAt(valueIndex) + strAfter.substr(1, strAfter.length);
                    }
                }
            }
            if (this.element.hasClass("e-watermark")) {
                if (this.model.value) {
                    this.element.removeClass("e-watermark");
                    this._textbox.value = tempModel;
                }
                else
                    this._setWaterMark();
            }
            else {
                if (this.model.value) {
                    this._textbox.value = tempModel;
                }
                else
                    this._textbox.value = this.model.maskFormat.replace(/[9?$CANa*]/g, '_');
            }

        },
		/**
         * To clear selected text in maskedit textbox control.
		 * @private
         */
        /* If it is Selected Text opreation, This Function clears the Selected Text to MaskModel*/
        _selectionText: function (begin, end) {

            var replaceValue = this._maskModel.substring(begin, end);
            this._textbox.value = this._textbox.value.substring(0, begin) + replaceValue + this._textbox.value.substring(end);
            if (this._keydownFlag == 1) {
                this._setCaretPosition(begin);
                return begin;
            }
            else if (this._keydownFlag == 2) {
                this._setCaretPosition(end);
                return end;
            }
            return begin;
        },
		/**
         * To obtained CaretpPosition of the cursor in maskedit textbox control.
		 * @private
         */
        /* Get the CaretPsoition of the cursor, if it selected 1/more text call _selectionText*/
        _caretPosition: function (textbox) {
            //caretPos starts with 0
            var caretPos = 0;

            // Microsoft supports only IE for using document.selection
            if (document.selection) {
                //textbox.focus();
                // Create a Range of selected position
                var selectedRange = document.selection.createRange();
                var selectionLength = selectedRange.text.length;

                // Move selection start to 0 position
                selectedRange.moveStart('character', -textbox.value.length);

                // Get caret position by selection length, becoz now range is from Zero to current focus
                caretPos = selectedRange.text.length - selectionLength;

                if (selectionLength != 0) {
                    caretPos = this._selectionText(caretPos, selectedRange.text.length);
                    this._selectedTextKeyDown = 1;
                }
            }

            // For Firefox
            else if (textbox.selectionStart || textbox.selectionStart == '0') {
                caretPos = textbox.selectionStart;
                if (textbox.selectionStart != textbox.selectionEnd) {
                    if (this._keydownFlag)
                        caretPos = this._selectionText(textbox.selectionStart, textbox.selectionEnd);
                    this._selectedTextKeyDown = 1;
                }
            }

            // Return caret Position
            return (caretPos);
        },
		/**
         * To set the cursor in required position in maskedit textbox control.
		 * @private
         */
        /* Set the curosr at required position in textbox*/
        _setCaretPosition: function (caretPos) {

            //element will have MaskEdit Textbox
            var element = this._textbox;

            //For IE
            if (window.navigator.appName == "Microsoft Internet Explorer") {
                if (element.createTextRange) {
                    var range = element.createTextRange();
                    range.move('character', caretPos);
                    range.select();
                }
            }
            else
            /* For FireFox and Chrome */
                if (element.selectionStart || element.selectionStart == '0') {
                    element.focus();
                    element.setSelectionRange(caretPos, caretPos);
                }
                else
                    element.focus();

        },
		/**
         * To check whether user pressed character with mask format in maskedit textbox control.
		 * @private
         */
        /* Validate the User Pressed Char with the Mask Format*/
        _validateChars: function (keyChar, caretPos) {
            var charmap = this._charMap, match = false;
            var maskChar = this.model.maskFormat.substr(caretPos, 1);
            var customChar = this.model.customCharacter;
            var actualkey = String.fromCharCode(keyChar);
            $.each(charmap, function (key, value) {
                if (maskChar == key) {
                    if (customChar != null) {
                        if (key == "C")
                            value = "[" + customChar + "]";
                        else if (key == "A" || key == "N")
                            value = value.replace(("]"), "") + customChar + "]";
                    }
                    if (actualkey.match(new RegExp(value))) match = true;
                    else match = false;
                }
            });
            return match;
        },
		/**
         * To configure the next valid position on right in maskedit textbox control.
		 * @private
         */
        /* Seek to the next valid position on right*/
        _seekNext: function () {
            var currentPos = this._caretPosition(this._textbox);
            var tempPos = currentPos;
            var seekFlag = true;
            //seeking the focus to next valid position on right of MaskEdit TextBox
            while (seekFlag) {
                if (currentPos >= 0 && currentPos < this._maskLength) {
                    if (this.model.maskFormat.charAt(currentPos) != "C") {
                        if (!this._charMap[this.model.maskFormat.charAt(currentPos)]) {
                            this._setCaretPosition(currentPos);
                            currentPos++;
                        }
                    }
                    if (currentPos != tempPos) {
                        tempPos = currentPos;
                        continue;
                    }
                }
                seekFlag = false;
            }
            return currentPos;
        },
		/**
         * To configure the next valid position on left in maskedit textbox control.
		 * @private
         */
        /* Seek to the next valid position on left*/
        _seekBefore: function (caretPos) {
            var currentPos = this._caretPosition(this._textbox);
            var tempPos = --currentPos;
            var seekFlag = true;

            // Stop Seek when backspace of select more than a char
            if (this._selectedTextKeyDown == 1)
                seekFlag = false;

            //seeking the focus to next valid position on left of MaskEdit TextBox
            while (seekFlag) {
                if (currentPos >= 0 && currentPos < this._maskLength) {
                    if (!this._charMap[this.model.maskFormat.charAt(currentPos)]) {
                        this._setCaretPosition(--currentPos);
                    }
                    if (currentPos != tempPos) {
                        tempPos = currentPos;
                        continue;
                    }
                }
                seekFlag = false;
            }
            return currentPos;
        },
		/**
         * To write the user pressed character in maskedit textbox control.
		 * @private
         */
        /* Write the User Pressed Character*/
        _writeBuffer: function (key, cursorPos) {
            if (cursorPos <= this._maskLength) {
                var input = this._textbox.value;
                if (this._tempMask != null)
                    var tempkey = this._updateCasing(key, cursorPos);
                key = (tempkey == undefined) ? key : tempkey;
                var strBeforeCursor = input.substring(0, cursorPos);
                var strAfterCursor = input.substring(cursorPos);
                this._textbox.value = strBeforeCursor + key + strAfterCursor.substr(1, strAfterCursor.length);
                this._setCaretPosition(cursorPos + 1);
                //Raising ClientSide Event
                this._raiseEvents("change");
            }
        },
		/**
         * To configure the user entered character in lower or upper case character in maskedit textbox control.
		 * @private
         */
        _updateCasing: function (key, pos) {
            for (var i = 0; i < pos + 1; i++) {
                if (this._tempMask.substr(i, 1) == '<' || this._tempMask.substr(i, 1) == '>')
                    pos++;
            }
            // find case-modificator
            for (var j = pos; j > -1; j--) {
                if (this._tempMask.substr(j, 1) == '<') {
                    return key.toLowerCase();
                }
                else if (this._tempMask.substr(j, 1) == '>') {
                    return key.toUpperCase();
                }
            }
        },
		/**
         * To obtained the pure value of the textvalue, removes all the symbols in maskedit textbox control.
		 * @private
         */
        /* Return the pure value of the textvalue, removes all the symbols*/
        get_StrippedValue: function () {
            var i, value, mask = this.model.maskFormat, stripVal = "";
            value = (this.element.hasClass("e-watermark")) ? this._maskModel : this._textbox.value;
            if (mask.length == 0) return value;

            for (i in mask) {
                var char = mask[i], exp = null;

                if ("9?$a*".indexOf(char) != -1)
                    exp = this._charMap[char];
                else if (char == "A" || char == "N")
                    exp = this._charMap[char].replace(("]"), "") + this.model.customCharacter + "]";
                else if (char == "C")
                    exp = "[" + this.model.customCharacter + "]";

                if (exp && value[i] && value[i].match(new RegExp(exp)))
                    stripVal += value[i];
            }
            return stripVal;
        },
		/**
         * To obtained the textbox value as such that, Just replace all '_' to ' '(space) in maskedit textbox control.
		 * @private
         */
        /* Return the textbox value as such that, Just replace all '_' to ' '(space)*/
        get_UnstrippedValue: function () {
            var value = (this.element.hasClass("e-watermark")) ? this._maskModel : this._textbox.value, unstripVal = "";
            if (this.model.maskFormat.length == 0) return value;

            if (value != undefined)
                unstripVal = value.replace(/[_]/g, " ");
            return unstripVal;
        },
		/**
         * To configure the model value in maskedit textbox control.
		 * @private
         */
        _setValue: function (value) {
            if (ej.isNullOrUndefined(value)) value = "";
            this.model.value = value;
            if (!ej.isNullOrUndefined(this.model.maskFormat) && this.model.maskFormat != "")
                this._validateValue();
            else
                this._textbox.value = value;
            this.model.value = this.get_StrippedValue();
            this._hiddenInput.val(this.model.value);
        },
		/**
         * To set the maskFormat value with it;s validation in maskedit textbox control.
		 * @private
         */
        _setMask: function (maskValue) {
            this._maskLength = maskValue.length;
            this.model.maskFormat = maskValue;
            this._maskModel = maskValue.replace(/[9?$CANa*]/g, '_');
            this._validateValue();
        },

        //----------------public function--------------------------------------//			 
		/**
        * To enable the maskedit textbox control.		
		* @return jQuery
		* @example 
		* &lt;input id="mask" type="text" /&gt; <br> 		
		* &lt;script&gt;
		* $("#mask").ejMaskEdit({maskFormat: "99-99-9999",value:"12345678"});
		* // Create MaskEdit control
		* var maskObj = $("#mask").data("ejMaskEdit");		
		* maskObj.enable(); // enable the maskedit control		
		* &lt;/script&gt;
		 @example 
		* &lt;input id="mask" type="text" /&gt; <br> 			
		* &lt;script&gt;
		* $("#mask").ejMaskEdit({maskFormat: "99-99-9999",value:"12345678"});
		* // enable the maskedit control
		* $("#mask").ejMaskEdit("enable");		
		* &lt;/script&gt;
		* @memberof ejMaskEdit
		* @instance
         */	    
        enable: function () {
            this.element.disabled = false;
            this.element.removeAttr("disabled").removeClass('e-disable').attr({ "aria-disabled": false });
            this.model.enabled = true;
        },
		/**
        * To disable the maskedit textbox control.		
		* @return jQuery
		* @example 
		* &lt;input id="mask" type="text" /&gt; <br> 		
		* &lt;script&gt;
		* $("#mask").ejMaskEdit({maskFormat: "99-99-9999",value:"45340078"});
		* // Create MaskEdit control
		* var maskObj = $("#mask").data("ejMaskEdit");		
		* maskObj.disable(); // disable the maskedit control		
		* &lt;/script&gt;
		 @example 
		* &lt;input id="mask" type="text" /&gt; <br> 			
		* &lt;script&gt;
		* $("#mask").ejMaskEdit({maskFormat: "99-99-9999",value:"45340078"});
		* // disable the maskedit control
		* $("#mask").ejMaskEdit("disable");		
		* &lt;/script&gt;
		* @memberof ejMaskEdit
		* @instance
         */	  
        disable: function () {
            this.element.disabled = true;
            this.element.attr("disabled", "disabled").addClass('e-disable').attr({ "aria-disabled": true });
            this.model.enabled = false;
        },
		/**
        * To clear the text in maskedit textbox control.		
		* @return jQuery
		* @example 
		* &lt;input id="mask" type="text" /&gt; <br> 		
		* &lt;script&gt;
		* $("#mask").ejMaskEdit({maskFormat: "99-9999",value:"345678"});
		* // Create MaskEdit control
		* var maskObj = $("#mask").data("ejMaskEdit");		
		* maskObj.clear(); // clear the maskedit control		
		* &lt;/script&gt;
		 @example 
		* &lt;input id="mask" type="text" /&gt; <br> 			
		* &lt;script&gt;
		* $("#mask").ejMaskEdit({maskFormat: "99-9999",value:"345678"});
		* // clear the maskedit control
		* $("#mask").ejMaskEdit("clear");		
		* &lt;/script&gt;
		* @memberof ejMaskEdit
		* @instance
         */	 
        clear: function () {
            if (this.model.enabled)
                this._textbox.value = this.model.maskFormat.replace(/[9?$aCAN*]/g, '_');
        },

        /*-------------------------- Register all the events at initialize and handlers-----------------------*/
		/**
         * Wiring the events to MaskEdit textbox control		
		 * @private
         */
        _wireEvents: function () {
            this._on(this.element, 'focus', this._OnFocusHandler);
            this._on(this.element, 'blur', this._OnBlurHandler);
            this._on(this.element, 'keydown', this._OnKeyDownHandler);
            this._on(this.element, 'keypress', this._OnKeyPressHandler);
            this._on(this.element, 'keyup', this._OnKeyUpHandler);
            this._on(this.element, 'mouseover', this._OnMouseOverHandler);
            this._on(this.element, 'mouseout', this._OnMouseOutHandler);
            this._on(this.element, 'paste', this._OnPasteHandler);
            this._on(this.element, 'cut', this._OnCutHandler);
        },
		 /**
         * Section For handle the selected text cut from maskedit textbox control.
		 * @private
         */	
        /* Cut Handler */
        _OnCutHandler: function (e) {
            var selectedValue = this._maskModel.substring(this._textbox.selectionStart, this._textbox.selectionEnd);
            var beforeSelection = this._textbox.value.substring(0, this._textbox.selectionStart);
            var afterSelection = this._textbox.value.substring(this._textbox.selectionEnd);
            var cursorPosition = this._textbox.selectionStart;
            var context = this;
            setTimeout(function () {
                context._textbox.value = beforeSelection + selectedValue + afterSelection;
                context._setCaretPosition(cursorPosition);
                context._raiseEvents("change");
            }, 0);
        },
		/**
         * Section For handle the paste text to maskedit textbox control.
		 * @private
         */
        /* Paste Handler */
        _OnPasteHandler: function (e) {
            var context = this;
            setTimeout(function () {
                var text = $(context._textbox).val();
                context._setValue(text);
                context._raiseEvents("change");
            }, 0);
            return true;
        },
		/**
         * Section For handle maskedit textbox control in focused in.
		 * @private
         */
        /* On Focus Handler */
        _OnFocusHandler: function (e) {
            this.element.addClass("e-focus");
            this._removeWaterMark();
            if (this.model.readOnly)
                return;
            if (this._textbox.value.indexOf("<") >= 0 || this._textbox.value.indexOf(">") >= 0) {
                this._textbox.value = this._textbox.value.replace(/[<>]/g, '');
                this._maskModel = this._textbox.value;
                this._tempMask = this.model.maskFormat;
                this.model.maskFormat = this.model.maskFormat.replace(/[<>]/g, '');
            }

            if (this._textbox.value != this._maskModel && this._unStrippedMask != null && this.model.hidePromptOnLeave)
                this._textbox.value = this._unStrippedMask;
            $.fn.selectRange = function (start, end) {
                return this.each(function () {
                    if (this.setSelectionRange) {
                        this.focus();
                        this.setSelectionRange(start, end);
                    } else if (this.createTextRange) {
                        var range = this.createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', end);
                        range.moveStart('character', start);
                        range.select();
                    }
                });
            };
            if (this.model.maskFormat) {
                this.element.selectRange(0, 0);
            }
            //Raising ClientSide Event
            this._raiseEvents("focusIn");
        },
		/**
         * Section For handle the maskedit textbox control is focused out.
		 * @private
         */
        _OnBlurHandler: function (e) {
            this.element.removeClass("e-focus");
            this.model.value = this.get_StrippedValue();
            if (this._textbox.value != undefined && this.model.hidePromptOnLeave) {
                this._unStrippedMask = this._textbox.value;
                this._textbox.value = this.get_UnstrippedValue();
            }
            if (this.model.inputMode != "password")
                this._setWaterMark();

            //Raising ClientSide Event
            this._raiseEvents("focusOut");
        },
		/**
         * Section For handle the keypress down event in maskedit textbox control.
		 * @private
         */
        /* On Key Down Handler */
        _OnKeyDownHandler: function (e) {
            if (this.model.readOnly) return;
            this._keypressFlag = 0;
            this._raiseEvents("onKeyDown");
            // Remove the Error Flag
            this.element.removeClass("error");

            if (this._maskLength == 0)
                return true;

            var unicode = e.keyCode ? e.keyCode : e.charCode;
            var actualkey = String.fromCharCode(unicode);

            if (unicode >= 35 && unicode <= 41) {
                if (window.navigator.appCodeName == "Mozilla" || window.navigator.appCodeName == "opera") {
                    this._keypressFlag = 1;
                }
            }
            if (e.shiftKey && (e.keyCode == 35 || e.keyCode == 36 || e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 46 || e.keyCode == 127) || (e.ctrlKey && (e.keyCode == 86 || e.keyCode == 65 || e.keyCode == 67 || e.keyCode == 88))) {
                this._keypressFlag = 1;
                return;
            }
            else if (unicode == 8) { // For Backspace Key Event

                if (this.model.inputMode != "password") {
                    this._keydownFlag = 1;
                    // Seek to next valid position
                    var currentPos = this._seekBefore();
                    this._raiseEvents("change");
                    if (!this._selectedTextKeyDown) {
                        if (currentPos >= 0 && currentPos < this._maskLength)
                            this._writeBuffer("_", currentPos);
                        this._setCaretPosition(currentPos);
                    }
                    this._keydownFlag = 0;
                    this._selectedTextKeyDown = 0;
                    e.preventDefault();
                    return false;
                }
                this._keypressFlag = 1;
                return true;
            }
            else if (e.keyCode == 46 || e.keyCode == 127) { //  For Delete Key Events
                if (this.model.inputMode != "password") {
                    this._keydownFlag = 2;
                    // Seek to next valid position
                    currentPos = this._seekNext();
                    this._raiseEvents("change");
                    if (!this._selectedTextKeyDown) {
                        if (currentPos >= 0 && currentPos < this._maskLength)
                            this._writeBuffer("_", currentPos);
                    }
                    this._keydownFlag = 0;
                    this._selectedTextKeyDown = 0;
                    e.preventDefault();
                    return false;
                }
                this._keypressFlag = 1;
                return true;
            }
        },
		/**
         * Section For handle the keypress up event in maskedit textbox control.
		 * @private
         */
        /* On Key Up Handler */
        _OnKeyPressHandler: function (e) {
            if (this.model.readOnly) return;
            this._raiseEvents("keyPress");
            if (this._maskLength == 0)
                return true;

            var unicode = e.keyCode ? e.keyCode : e.charCode;
            var actualkey = String.fromCharCode(unicode);
            var currentPos = this._seekNext();
            var val = ej.browserInfo().name;
            if (this._validateChars(unicode, currentPos)) {
                if (((val == "mozilla") || (val == "opera")) && (e.keyCode == 35 || e.keyCode == 36 || e.keyCode == 37 || e.keyCode == 39)) {
                }
                else if (((val == "mozilla") || (val == "opera")) && (e.ctrlKey && (unicode == 97 || unicode == 99 || unicode == 118 || unicode == 120))) {
                }
                else
                    this._writeBuffer(actualkey, currentPos);
            }
            else
                if (((val == "mozilla") || (val == "opera")) && (e.keyCode == 35 || e.keyCode == 36 || e.keyCode == 37 || e.keyCode == 39)) {
                }
                else if (((val == "mozilla") || (val == "opera")) && (e.ctrlKey && (unicode == 97 || unicode == 99 || unicode == 118 || unicode == 120))) {
                }
                else
                    this._showAlert();

            // To stop default press actions
            if (!this._keypressFlag && unicode != 9) {//Shift + Tab Navigation
                this._keypressFlag = 0;
                e.preventDefault();
                return false;
            }
            this._keypressFlag = 0;

        },
		/**
         * Section For raise the key up event in maskedit textbox control.
		 * @private
         */
        _OnKeyUpHandler: function (e) {
            if (this._maskLength == 0) this._raiseEvents("change");
            this._raiseEvents("keyUp");
        },
		/**
         * Section For raise the mouse over event in maskedit textbox control.
		 * @private
         */
        /* On Mouse Over Handler */
        _OnMouseOverHandler: function (e) {
            // Raising ClideSide Event
            this._raiseEvents("mouseOver");
        },
		/**
         * Section For raise the mouse out event in maskedit textbox control.
		 * @private
         */
        /* On Mouse Out Handler */
        _OnMouseOutHandler: function (e) {
            // Raising ClideSide Event
            this._raiseEvents("mouseOut");
        },
		/**
         * Section For raise the corresponding event in maskedit textbox control.
		 * @private
         */
        //To raise Corresponding Client Side Events
        _raiseEvents: function (eventName) {
            var eventArgs, strippedVal = this.get_StrippedValue(), unstrippedVal=this.get_UnstrippedValue();
            this.model.value = unstrippedVal;
            if (eventName == "change") {
                if (this.previousValue != this.model.value) {
                    this.previousValue = this.model.value;
                }
                else
                    return false;
                this._hiddenInput.val(strippedVal);
            }

            if (this.model[eventName]) {
                eventArgs = { value: unstrippedVal, unmaskedValue: strippedVal };
                this._trigger(eventName, eventArgs);
            }
        },
		/**
         * Section For set the value can be set after changes happened in maskedit textbox control.
		 * @private
         */
        _OnValueChange: function () {
            if (this._textbox.value == "" && this._maskModel != "")
                this._textbox.value = this._maskModel;
            this._setValue(this._textbox.value);
        }

    });
	/**
	 * Enum for slider type.	 
	 * @enum {string}
	 * @global 
	 */
    ej.InputMode = { 	
			 /**  support for user enter character in password format. */
			Password: "password", 
			/**  support for user enter character in normal format. */
			Text: "text"			
			};  
})(jQuery, Syncfusion);;