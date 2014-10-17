/*!
*  filename: ej.radiobutton.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/*!
*  filename: ej.radiobutton.js
*  version : 12.1
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html Radiobutton elements
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
	* @class ejRadioButton
	* @requires jQuery
   * @requires ej.core.js
   * @requires ej.radiobutton.js
	* @classdesc Custom Design for Html RadioButton Control. 
	* @example
	*&lt;input type="radio" id="radiobtn"/&gt;
	*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
    *&lt;br/&gt; &lt;input type="radio" name="radiobutn" id="radiobtn1"/&gt;
	*&lt;label for="radiobtn1"&gt; Fresher &lt;/label&gt;
	*&lt;script&gt;
	*$("#radiobtn").ejRadioButton({checked:true});
    *$("#radiobtn1").ejRadioButton();
	*&lt;/script&gt;
	*/
    ej.widget("ejRadioButton", "ej.RadioButton", {
        _rootCSS: "e-radiobtn",
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["input"],
        _setFirst: false,

        // default model
        defaults: {
            /**		
			* Specifies the id attribute for the Radio Button while initialization.
			* @default null
			* @type {String}
			* @example 
			*&lt;input type="radio" name="radiobtn" id="radiobtn"/&gt;
			*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
             *&lt;br/&gt; &lt;input type="radio" name="radiobtn" id="radiobtn1"/&gt;
	         *&lt;label for="radiobtn1"&gt;Fresher &lt;/label&gt;
			*&lt;script&gt;
			* //To set id API value during initialization  
			* 	$("#radiobtn").ejRadioButton({  id: "sync" });
            * 	$("#radiobtn1").ejRadioButton({  id: "sync1" });
			 * &lt;/script&gt;
			 * @memberof ejRadioButton
			* @instance
			*/
            id: null,
            /**		
			* Specifies the name attribute for the Radio Button while initialization.
			* @default null
			* @type {String}
			 * @memberof ejRadioButton
			* @instance
			*/
            name: null,
            /**		
			* Specifies the value atribute of the Radio Button.
			* @default null
			* @type {String}
			* @example 
			*&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
			*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
             *&lt;br/&gt; &lt;input type="radio" name="radiobutn" id="radiobtn1"/&gt;
	         *&lt;label for="radiobtn1"&gt;Fresher &lt;/label&gt;
	        *&lt;script&gt;
			* //To set value API value during initialization  
			* 	$("#radiobtn").ejRadioButton({ value: "Experienced"});
            * 	$("#radiobtn1").ejRadioButton({ value: "Fresher"});
			* &lt;/script&gt;		
			* @memberof ejRadioButton
			* @instance
			*/
            value: null,
            /**		
			* Specifies the check atribute of the Radio Button.
			* @default false
			* @type {Boolean}
			* @example 
			*&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
			*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
             *&lt;br/&gt; &lt;input type="radio" name="radiobutn" id="radiobtn1"/&gt;
	         *&lt;label for="radiobtn1"&gt;Fresher &lt;/label&gt;
	*&lt;script&gt;
			* //To set check API value during initialization  
			* 	$("#radiobtn").ejRadioButton({ checked:  true });	
            * 	$("#radiobtn1").ejRadioButton({ checked:  true });
			  * &lt;/script&gt;
			 * @memberof ejRadioButton
			* @instance
			*/
            checked: null,
            /**		
			* Specify the CSS class to RadioButton to achieve custom theme.
			* @default ""
			* @type {string}
			* @example 
			*&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
			*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
             *&lt;br/&gt; &lt;input type="radio" name="radiobutn" id="radiobtn1"/&gt;
	         *&lt;label for="radiobtn1"&gt;Fresher &lt;/label&gt;
	*&lt;script&gt;
			* // Set the root class for RadioButton control theme. This cssClass API helps to use custom skinning option for RadioButton control. By defining the root class using this API, we need to include this root class in CSS. 			
			* 	$("#radiobtn").ejRadioButton({cssClass: "gradient-lime"});
            * 	$("#radiobtn1").ejRadioButton({cssClass: "gradient-lime"});
			* &lt;/script&gt;
			* @memberof ejRadioButton
			* @instance
			*/
            cssClass: "",
            /**		
			* Specifies the text content for RadioButton.
			* @default ""
			* @type {string}
			* @memberof ejRadioButton
			* @instance
			*/
            text: "",
            /**		
			* Specify the Right to Left direction to RadioButton
			* @default false
			* @type {boolean}
			* @example 
			*&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
			*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
             *&lt;br/&gt; &lt;input type="radio" name="radiobutn" id="radiobtn1"/&gt;
	         *&lt;label for="radiobtn1"&gt;Fresher &lt;/label&gt;
	*&lt;script&gt;
			* // Set the enableRTL during initialization. 			
			* 	$("#radiobtn").ejRadioButton({  enableRTL:true });	
            * 	$("#radiobtn1").ejRadioButton({  enableRTL:true });	
			* &lt;/script&gt;
			* @memberof ejRadioButton
			* @instance
			*/
            enableRTL: false,
            /**		
			* Specifies the enablePersistence property for RadioButton while initialization. The enablePersistence API save current model value to browser cookies for state maintains. While refreshing the radiobutton control page the model value apply from browser cookies. 
			* @default false
			* @type {boolean}
			* @example 
			*&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
			*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
             *&lt;br/&gt; &lt;input type="radio" name="radiobutn" id="radiobtn1"/&gt;
	         *&lt;label for="radiobtn1"&gt;Fresher &lt;/label&gt;
	*&lt;script&gt;
			* // To set enablePersistence API value 
			* $("#radiobtn").ejRadioButton({ enablePersistence: false });	
            * $("#radiobtn1").ejRadioButton({ enablePersistence: false });
			* &lt;/script&gt;
			 * @memberof ejRadioButton
			* @instance
			*/
            enablePersistence: false,
            /**		
			* Specify the idprefix value to be added before the current id of the RadioButton.
			* @default "ej"
			* @type {String}
			* @example 
			*&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
			*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
             *&lt;br/&gt; &lt;input type="radio" name="radiobutn" id="radiobtn1"/&gt;
	         *&lt;label for="radiobtn1"&gt;Fresher &lt;/label&gt;
	*&lt;script&gt;
			* // To set  idPrefix  API value
			* $("#radiobtn").ejRadioButton ({  idPrefix : "ej" }); 
            * $("#radiobtn1").ejRadioButton ({  idPrefix : "ej" }); 
			* &lt;/script&gt;
			* @memberof ejRadioButton
			* @instance
			*/
            idPrefix: "ej",
            /**		
			* Specifies the size of the RadioButton.	See {@link RadioButtonSize}
			* @default "small"
			* @type {enum}
			* @example 
			*&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
			*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
             *&lt;br/&gt; &lt;input type="radio" name="radiobutn" id="radiobtn1"/&gt;
	         *&lt;label for="radiobtn1"&gt;Fresher &lt;/label&gt;
	        *&lt;script&gt;
			* //To set size API value during initialization  
			* 	$("#radiobtn").ejRadioButton({  size: "medium"});	
            * 	$("#radiobtn1").ejRadioButton({  size: "medium"});
			 * &lt;/script&gt;
			* @memberof ejRadioButton
			* @instance
			*/
            size: "small",
            /**		
			* Specifies the RadioButton control state.
			* @default true
			* @type {boolean}
			* @example 
			*&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
			*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
             *&lt;br/&gt; &lt;input type="radio" name="radiobutn" id="radiobtn1"/&gt;
	         *&lt;label for="radiobtn1"&gt;Fresher &lt;/label&gt;
	        *&lt;script&gt;
			* // Enable RadioButton on initialization. 
			* 	//To set width API value 
			* 	 $("#radiobtn").ejRadioButton ({ enabled: true });	
            * 	 $("#radiobtn1").ejRadioButton ({ enabled: true });	
			* &lt;/script&gt;
			 * @memberof ejRadioButton
			* @instance
			*/
            enabled: true,
            /**    
			 * Fires before the RadioButton is going to changed its state successfully
			 * @event
			 * @name ejRadioButton#beforeChange 	
			 * @param {Object} argument Event parameters from RadioButton     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
             * @param {boolean} argument.model returns the RadioButton model
             * @param {boolean} argument.type returns the name of the event
             * @param {boolean} argument.data.element returns the current element
             * @param {boolean} argument.data.isChecked  returns the status of the element
			 * @example 
			 *&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
			*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;   
	         *&lt;script&gt;
			 * //beforeChange event for RadioButton
             * $("#radiobtn").ejRadioButton({
             *   beforeChange:function (args){ }
             *});  
             * &lt;/script&gt;         
			 * @memberof ejRadioButton
			 * @instance
			 */
            beforeChange: null,
            /**    
			 * Fires when the RadioButton state  is changed successfully
			 * @event
			 * @name ejRadioButton#change 	
			 * @param {Object} argument Event parameters from RadioButton     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
             * @param {boolean} argument.model returns the RadioButton model
             * @param {boolean} argument.type returns the name of the event
             * @param {boolean} argument.data.element returns the current element
             * @param {boolean} argument.data.isChecked  returns the status of the element
			 * @example 
			 *&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
			*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
	        *&lt;script&gt;
			 * //change event for RadioButton
             * $("#radiobtn").ejRadioButton({
             *   change: function (args){}
             *}); 
             * &lt;/script&gt;          
			 * @memberof ejRadioButton
			 * @instance
			 */
            change: null,
            /**    
            * Fires when the RadioButton created successfully
            * @event
            * @name ejRadioButton#create 	
            * @param {Object} argument Event parameters from RadioButton     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {boolean} argument.model returns the RadioButton model
            * @param {boolean} argument.type returns the name of the event
            * @example 
            * &lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
            * &lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
            * &lt;script&gt;
            * // //create event for RadioButton
            * $("#radiobtn").ejRadioButton({
            *   create:function(args){}
            *}); 
            * &lt;/script&gt;          
            * @memberof ejRadioButton
            * @instance
            */
            create: null,
            /**    
            * Fires when the RadioButton destroyed successfully
            * @event
            * @name ejRadioButton#destroy 	
            * @param {Object} argument Event parameters from RadioButton     
            * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
            * @param {boolean} argument.model returns the RadioButton model
            * @param {boolean} argument.type returns the name of the event           
            * @example 
            *&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
           *&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
           *&lt;script&gt;
            * // //destroy event for RadioButton
            * $("#radiobtn").ejRadioButton({
            *   destroy:function(args){}
            *}); 
            * &lt;/script&gt;          
            * @memberof ejRadioButton
            * @instance
            */
            destroy: null
        },
        /**
         * Specify the data types for default properties 
		 * @private
         */

        dataTypes: {
            id: "string",
            name: "string",
            checked: "boolean",
            enablePersistence: "boolean",
            size: "enum",
            enabled: "boolean",
            idPrefix: "string"
        },
        /**
		 * Create the RadioButton widget
		 * @private
		 */
        // constructor function
        _init: function () {
            this._setValue();
            this._renderControl();
            this._setEnabled(this.model.enabled);
            this._wireEvents();
            if (this.isChecked)
                this._checkedHandler();
        },
        /**
         * To configure the properties at runtime using SetModel		
		 * @private
         */

        _setModel: function (options) {
            if (!(this.model.enabled) && ej.isNullOrUndefined(options["enabled"])) return false;
            for (var prop in options) {
                switch (prop) {
                    case "cssClass": this._changeSkin(options[prop]); break;
                    case "enableRTL":
                        if (options[prop])
                            this.textWrapDiv.addClass("e-rtl");
                        else
                            this.textWrapDiv.removeClass("e-rtl");
                        break;
                    case "text": this._setText(options[prop]); break;
                    case "size": this._setSize(options[prop]); break;
                    case "checked": this.model.checked = options[prop]; this._checkedChange(this.model.checked); break;
                    case "enabled": this._setEnabled(options[prop]); break;
                }
            }
        },
        /**
        * destroy the RadioButton widget
		* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
		* @alias destroy
		* @return jQuery
		* @example 
		*&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
	    *&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
	   *&lt;script&gt; 
		* // Create RadioButton
		* $("#radiobtn").ejRadioButton();
		* var chkObj = $("#radiobtn").data("ejRadioButton");
		* chkObj.destroy();
		* &lt;/script&gt;
		* @example 
		*&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
		*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
	    *&lt;script&gt;
		* // enable the RadioButton
		* $("#radiobtn").ejRadioButton();
		* $("#radiobtn").ejRadioButton("destroy");	
		* &lt;/script&gt;
		* @memberof ejRadioButton
		* @instance
         */

        // all events bound using this._on will be unbind automatically _checkedChange
        _destroy: function () {
            this.radbtn.removeClass("e-radiobtn e-input");
            this.radbtn.insertBefore(this.element);
            this.element.remove();
            this.element = this.radbtn;
        },
        /**
         * To configure the custom theme for RadioButton using cssClass property		
		 * @private
         */
        //Skin Change at run time
        _changeSkin: function (skin) {
            if (this.model.cssClass != skin) {
                this.element.removeClass(this.model.cssClass).addClass(skin);
                this.textWrapDiv.removeClass(this.model.cssClass).addClass(skin);
            }
        },
        /**
         * To configure the Value		
		 * @private
         */
        _setValue: function () {
		
		     if(!ej.isNullOrUndefined(this.element.attr("id")))
		         this.model.id=this.element.attr("id");
		     if(!ej.isNullOrUndefined(this.element.attr("name")))
		         this.model.name=this.element.attr("name");
		     if(!ej.isNullOrUndefined(this.element.attr("value")))
		         this.model.value=this.element.attr("value");
		     this.element.attr({ "id": this.model.id,"name": this.model.name,"value": this.model.value});
             this.isChecked = this.element.attr('checked') == 'checked' ? true : false;
             this.isChecked = this.model.checked == null ? this.isChecked : this.model.checked;
        },
        /**
         * To configure the Size of the RadioButton		
		 * @private
         */
        _setSize: function (val) {
            if (val == ej.RadioButtonSize.Medium)
                this.span.removeClass('e-radsmaller').addClass('e-radmedium');
            else
                this.span.removeClass('e-radmedium').addClass('e-radsmaller');
        },
        /**
         * To configure the Enable status of the RadioButton		
		 * @private
         */
        _setEnabled: function (val) {
            if (val) {
                this.enable();
            } else {
                this.disable();
            }
        },
        /**
         * Render Section For RadioButton control		
		 * @private
         */
        _renderControl: function () {
            this.div = $('<div class="e-radiobtn-wrap e-widget" ></div>');
            this.div.attr({'id':this.model.idPrefix + this.model.id,"role":"radio","tabindex":-1,"aria-checked":false});
            this.span = $('<span></span>');
            this.span.addClass("e-spanicon");
            this._setSize(this.model.size);
            this.spanImg = $('<span class="e-rad-icon e-rad-select"></span>', "", {}, {"role":"presentation"});
            this.element.addClass("e-input");
            this.element.attr("id", this.model.id);
            this.div.addClass(this.model.cssClass);
            this.span.append(this.spanImg);
            this.div.insertBefore(this.element);
            this.div.append(this.element);
            this.div.append(this.span);
            this._setTextWrapper(this.model.text);
            this.radbtn = this.element;
            this.element = this.div;
            if (this.isChecked) {
                this.element.find(".e-input").attr('checked', true);
            }
        },
        /**
         * To configure RadioButton textwrapper		
		 * @private
         */
        _setTextWrapper: function (val) {
            if (val != "") {
                this.textWrapDiv = ej.buildTag("div.e-radiobtn-wrap " + this.model.cssClass + "#" + this.model.idPrefix + this.model.id + "_wrapper")
                this.div.wrap(this.textWrapDiv);
                this.txtSpan = ej.buildTag("div.e-text", this.model.text);
                this.textWrapDiv.append(this.txtSpan);
                if (this.model.enableRTL)
                    this.textWrapDiv.addClass("e-rtl");
            }
        },
        /**
         * To configure RadioButton text value		
		 * @private
         */
        _setText: function (val) {
            if ((this.model.text == "") && (val != "")) {
                this._setTextWrapper(val);
            } else {
                this.txtSpan.html(val);
            }
        },
        /**
        * Wiring the events to RadioButton control		
        * @private
        */
        _wireEvents: function () {
            this._on(this.element, "click", this._checkedHandler);
            this._on(this.element, "focus", this._focusIn);
            this._on(this.element, "focusout", this._focusOut);
        },
        _focusIn: function (evt) {
            $(this.element).addClass("e-focus");
        },
        _focusOut: function (evt) {
            $(this.element).removeClass("e-focus");
        },
        _checkedHandler: function (evt) {
            if (!this.element.hasClass('e-disable')) {
                this.isChecked = this.element.find('input.e-radiobtn:radio').attr('checked') == 'checked' ? true : false;
                this._changeEvent();
            }
        },
        /**
         * Section For handle the change in check for radiobutton
		 * @private
         */
        _checkedChange: function (val) {
            this.isChecked = val;
            if ((this.isChecked) && (this.model.enabled))
                this._changeEvent();
        },
        /**
         * Section For handle the change event for radiobutton
		 * @private
         */
        _changeEvent: function () {
            var data = { isChecked: this.isChecked };
            if (true == this._trigger("beforeChange", data)) {
                return false;
            }
            if (!$(this.element).find(".e-rad-icon").hasClass("e-rad-active")) {
                var curname = this.element.find(".e-input").attr('name'),
                input = $('input.e-radiobtn[name=' + curname + ']:radio'),
                proxy = this,
                currElement = this.element.find('.e-input'),
                currObj = $(currElement).data("ejRadioButton");
                if (data.isChecked) {
                    this.spanImg.addClass("e-rad-active").removeClass('e-rad-select');
                    this.div.attr({ "tabindex": 0, "aria-checked": true });
                }
                $.each(input, function (i, obj) {
                    $(obj).parent().parent().find(".e-rad-icon").removeClass("e-rad-active").addClass("e-rad-select");
                    $(obj).parent().parent().find('.e-radiobtn-wrap').attr({ "tabindex": -1, "aria-checked": false });
                    var prevObj = $(obj).data("ejRadioButton");
                    if (prevObj != null) {
                        prevObj.model.checked = false;
                    }
                });
                if (currObj != null)
                    currObj.model.checked = true;
                this.element.find(".e-rad-icon").addClass("e-rad-active").removeClass("e-rad-select");
                this.div.attr({ "tabindex": 0, "aria-checked": true });
                this.element.find(".e-input").click();
                this.isChecked = true;
            }
            var data = { isChecked: this.isChecked };
            this._trigger("change", data)
        },
        /**
        * To disable the RadioButton
		* @return jQuery
		* @example 
		*&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
			*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;           
	*&lt;script&gt; 
		* // Create RadioButton
		* $("#radiobtn").ejRadioButton();
		* var chkObj = $("#radiobtn").data("ejRadioButton");
		* chkObj.disable();
		* &lt;/script&gt;
		* @example 
		*&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
		*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
	    *&lt;script&gt; 
		* // disable the RadioButton
		* $("#radiobtn").ejRadioButton();
		* $("#radiobtn").ejRadioButton("disable");	
		* &lt;/script&gt;
		* @memberof ejRadioButton
		* @instance
        */
        disable: function () {
            if (!this.element.hasClass("e-disable"))
                this.element.addClass("e-disable");
            this.div.attr("aria-disabled", true);
            this.model.enabled = false;
        },
        /**
        * To enable the RadioButton
		* @return jQuery
		* @example 
		*&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
		*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
	    *&lt;script&gt; 
		* // Create RadioButton
		* $("#radiobtn").ejRadioButton();
		* var chkObj = $("#radiobtn").data("ejRadioButton");
		* chkObj.enable();
		* &lt;/script&gt;
		* @example 
		*&lt;input type="radio" name="radiobutn" id="radiobtn"/&gt;
		*&lt;label for="radiobtn"&gt;Experienced&lt;/label&gt;
	    *&lt;script&gt; 
		* // enable the RadioButton
		* $("#radiobtn").ejRadioButton();
		* $("#radiobtn").ejRadioButton("enable");	
		* &lt;/script&gt;
		* @memberof ejRadioButton
		* @instance
        */
        enable: function () {
            if (this.element.hasClass("e-disable"))
                this.element.removeClass("e-disable");
            this.div.attr("aria-disabled", false);
            this.model.enabled = true;
        }
    });
    /**
	 * Enum for various radio button sizes	 
	 * @enum {string}
	 * @global 
	 */
    ej.RadioButtonSize = {
        /**  Creates radio button with inbuilt small size height, width specified */
        Small: "small",
        /**  Creates radio button with inbuilt medium size height, width specified */
        Medium: "medium"
    };
})(jQuery, Syncfusion);;