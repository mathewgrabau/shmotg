/*!
*  filename: ej.button.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/*!
*  filename: ej.button.js
*  version : 12.1
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
	* @classdesc Custom Design for Html Button control.
	* @class ejButton
	* @param {object} options - settings for button
	* @requires jQuery
	* @requires ej.core.js
    * @requires ej.button.js
	* @example 
	* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
	* &lt;script&gt;
	* // Create Button
    * $('#button1').ejButton(); 	
	* &lt;/script&gt;
	*/

    ej.widget("ejButton", "ej.Button", {
        // widget element will be automatically set in this
        element: null,
        // user defined model will be automatically set in this
        model: null,
        validTags: ["button", "input"],
        _setFirst: false,
        //Root Css Class
        _rootCSS: "e-button",
		
        defaults: {  
			/**		
			* Specifies the size of the Button.	See {@link ButtonSize}
			* @default ej.ButtonSize.Normal
			* @type {enum}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* //To set size API value during initialization  
			* 	$("#button1").ejButton({  size: ej.ButtonSize.Mini});	
			* &lt;/script&gt;
			* @memberof ejButton
			* @instance
			*/		
            size: "normal",
            /**		
			* Specifies the Type of the Button.	See {@link ButtonType}
			* @default ej.ButtonType.Submit
			* @type {enum | string}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* //To set type API value during initialization  
			* 	$("#button1").ejButton({type: ej.ButtonType.Submit});	
			* &lt;/script&gt;
			* @memberof ejButton
			* @instance
			*/
			type:"submit",
			/**		
			* Specifies the height of the Button.
			* @default 28
			* @type {number}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* //To set height API value during initialization  
			* 	$("#button1").ejButton({ height:"30px" });	
            * &lt;/script&gt;			
			* @memberof ejButton
			* @instance
			*/
            height: "",
			/**		
			* Specifies the width of the Button.
			* @default 100
			* @type {number}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* //To set width API value during initialization  
			* 	$("#button1").ejButton({width: "150px"});	
			* &lt;/script&gt;
			* @memberof ejButton
			* @instance
			*/
            width: "",
			/**		
			* Specifies the button control state.
			* @default true
			* @type {boolean}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* // Enable Button on initialization. 
			* 	$("#button1").ejButton({ enabled:true });	
		    * &lt;/script&gt;
			* @memberof ejButton
			* @instance
			*/
            enabled: true,
			/**		
			* Specifies the text content for Button.
			* @default null
			* @type {string}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* // Set the button text on initialization. 			
			* 	$("#button1").ejButton({  text: "Hello Word" });
            * &lt;/script&gt;			
			* @memberof ejButton
			* @instance
			*/
            text: null,
			/**		
			* Specifies the contentType of the Button. See {@link ContentType}
			* @default ej.ContentType.TextOnly
			* @type {enum}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* // Set the button contentType on initialization. 			
			* 	$("#button1").ejButton({  contentType : ej.ContentType.ImageOnly,prefixIcon: "e-uiLight e-icon e-handup" });			
			* &lt;/script&gt;
            * @memberof ejButton
			* @instance
			*/
            contentType: "textonly",
			/**		
			*  Specifies the image position of the Button. This image position is applicable only with the textandimage contentType property. The images can be positioned in both imageLeft and imageRight options. See {@link ImagePosition}
			* @default ej.ImagePosition.ImageLeft
			* @type {enum}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* // Set the image position for button during initialization. 			
			* 	$("#button1").ejButton(
            * {
            *    contentType: ej.ContentType.TextAndImage,
            *    imagePosition: ej.ImagePosition.ImageRight,
			*	prefixIcon: "e-uiLight e-icon e-handup" //Specifies the primary icon for Button
            * });	
            * &lt;/script&gt;			
			 * @memberof ejButton
			* @instance
			*/
            imagePosition: "imageleft",
			/**		
			* Specify the rounded corner to button
			* @default false
			* @type {boolean}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* // Set the showRoundedCorner during initialization. 			
			* 	$("#button1").ejButton({  showRoundedCorner : true });			
            * &lt;/script&gt;			
			 * @memberof ejButton
			* @instance
			*/
            showRoundedCorner: false,
			/**		
			* Specify the cssClass to button to achieve custom theme.
			* @default emptyString
			* @type {string}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* // Set the cssClass during initialization. 			
			* 	$("#button1").ejButton({  cssClass : "gradient-lime" });			
			* &lt;/script&gt;
			* @memberof ejButton
			* @instance
			*/
            cssClass: "",
			/**		
			* Specifies the primary icon for Button. This is applicable for the content type’s imageOnly, textandimage, imagetextimage and imageboth.
			* @default null
			* @type {string}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* // Set the primary icon during initialization. 			
			* 	$("#button1").ejButton(
            *  {
            *     contentType: "imageonly",
            *     prefixIcon: "e-uiLight e-icon e-handup"
            *  });		
			* &lt;/script&gt;
			* @memberof ejButton
			* @instance
			*/
            prefixIcon: null,
			/**		
			* Specifies the secondary icon for Button. This is applicable for the content type’s imagetextimage and imageboth.
			* @default null
			* @type {string}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* // Set the secondary icon during initialization. 			
			* 	$("#button1").ejButton(
            *  {
            *       contentType: "imageonly",
			*		prefixIcon: "e-uiLight e-icon e-handup",
            *	    suffixIcon: "e-uiLight e-icon e-padlockclosed"
            *  });		
			* &lt;/script&gt;
			* @memberof ejButton
			* @instance
			*/
            suffixIcon: null,
			/**		
			* Specify the Right to Left direction to button
			* @default false
			* @type {boolean}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* // Set the enableRTL during initialization. 			
			* 	$("#button1").ejButton({ contentType: ej.ContentType.TextAndImage,
            *    imagePosition: ej.ImagePosition.ImageLeft,
            *    prefixIcon: "e-uiLight e-login", enableRTL : true });	
            * &lt;/script&gt;					
			* @memberof ejButton
			* @instance
			*/
            enableRTL: false,
			/**		
			* Convert the button as repeat button. It raises the 'Click' event repeattedly from the it is pressed until it is released.
			* @default false
			* @type {boolean}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* // Create repeat button during initialization. 			
			* 	$("#button1").ejButton({  repeatButton : true });
            * &lt;/script&gt;			
			* @memberof ejButton
			* @instance
			*/
            repeatButton: false,
			/**		
			* Specified the timeInterval between two 'click' events while button in repeat button mode.
			* @default "150"
			* @type {string}
			* @example 
			* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			* &lt;script&gt;
			* // Set interval during initialization. 			
			* 	$("#button1").ejButton({  
			*			repeatButton : true,
			* 			timeInterval : "100" });
			* &lt;/script&gt;
			 * @memberof ejButton
			* @instance
			*/
            timeInterval:"150",
			 /**     
			 * Fires after Button control is created.If the user want to perform any operation after the button control creation then the user can make use of this create event. 
			 * @event
			 * @name ejButton#create		
			 * @param {Object} argument Event parameters from button     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the button model
			 * @param {string}  argument.type returns the name of the event			
			 * @example 
			 * &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			 * &lt;script&gt;
			 * //create event for button
             * $("#button1").ejButton({
             *    create: function (args) {
			 * // Write a code block to perform operation after creating the button.
			 * }
             * });
			 * &lt;/script&gt;
			 * @memberof ejButton
			 * @instance
			 */		
            create: null,
			 /**     
			 * Fires when Button control is clicked successfully.Consider the scenario to perform any validation,modification of content or any other operations click on button,we can make use of this click event to achieve the scenario.  
			 * @event
			 * @name ejButton#click 	
			 * @param {Object} argument Event parameters from button     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the button model
			 * @param {string}  argument.type returns the name of the event
			 * @param {boolean}  argument.status return the button state
			 * @example 
			 * &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			 * &lt;script&gt;
			 * //click event for button
             * $("#button1").ejButton({
             *    click: function (args) {
			 * // Write a code block to perform operation while click on button.
			 * }
             * });
             * &lt;/script&gt;			 
			 * @memberof ejButton
			 * @instance
			 */
            click: null,
			 /**    
			 * Fires when the button is destroyed successfully.If the user want to perform any operation after the destroy button control then the user can make use of this destroy event.  
			 * @event
			 * @name ejButton#destroy 	
			 * @param {Object} argument Event parameters from button     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the button model
			 * @param {string}  argument.type returns the name of the event			 
			 * @example 
			 * &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
			 * &lt;script&gt;
			 * //destroy event for button
             * $("#button1").ejButton({
             *    destroy: function (args) {
			 * // Write a code block to perform operation after destroy the button.
			 * }
             * });
			 * &lt;/script&gt;
			 * @memberof ejButton
			 * @instance
			 */
            destroy: null
        },

          /**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            size: "enum",            
            enabled: "boolean",
			type:"enum",
            showRoundedCorner: "boolean",
            text: "string",
            contentType: "enum",
            imagePosition: "enum",
            prefixIcon: "string",
            suffixIcon: "string",
            cssClass: "string",
            repeatButton: "boolean",
            enableRTL: "boolean",
            timeInterval:"string"
        },
        /**
        * To disable the button  
		* @return jQuery
		* @example 
		* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
		* &lt;script&gt;
		* // Create Button
		* $("#button1").ejButton();
		* var btnObj = $("#button1").data("ejButton");
		* btnObj.disable(); // disable the button
		* &lt;/script&gt;
		* @example 
		* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
		* &lt;script&gt;
		* // disable the button
		* $("#button1").ejButton();
		* $("#button1").ejButton("disable");	
		* &lt;/script&gt;
		*@memberof ejButton
		* @instance
        */
        disable: function () {
            /// <summary>This function is  used to Disable the Button Object</summary>
            this.element.addClass("e-disable").attr("aria-disabled",true);
            this.model.enabled = false;
        },
		/**
        * To enable the button 		
		* @return jQuery
		* @example 
		* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
		* &lt;script&gt;
		* // Create Button
		* $("#button1").ejButton();
		* var btnObj = $("#button1").data("ejButton");
		* btnObj.enable(); // enable the button
		* &lt;/script&gt;
		* @example 
		* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
		* &lt;script&gt;
		* // enable the button
		* $("#button1").ejButton();
		* $("#button1").ejButton("enable");	
		* &lt;/script&gt;
		* @memberof ejButton
		* @instance
         */
        enable: function () {
            /// <summary>This function is  used to Enable the Button Object</summary>
            this.element.removeClass("e-disable").attr("aria-disabled",false);
            this.model.enabled = true;			
        },
        /**
         * Create the butto widget
		 * @private
         */		 
        _init: function () {
            this._initialize();
            this._render();
            this._controlStatus(this.model.enabled);
            this._wireEvents(this.model.repeatButton);
        },

		 /**
        * destroy the button widget
		* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
		* @alias destroy
		* @return jQuery
		* @example 
		* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
		* &lt;script&gt;
		* // Create Button
		* $("#button1").ejButton();
		* var btnObj = $("#button1").data("ejButton");
		* btnObj.destroy(); // destroy the button
		* &lt;/script&gt;
		* @example 
		* &lt;button id="button1"&gt;Button&lt;/button&gt; <br> 
		* &lt;script&gt;
		* // enable the button
		* $("#button1").ejButton();
		* $("#button1").ejButton("destroy");	
		* &lt;/script&gt;
		* @memberof ejButton
		* @instance
         */	       
        _destroy: function () {
            /// <summary>This function is  used to destroy the Button Object</summary>
            this.element.removeClass(this.model.cssClass + " e-btn e-select e-disable e-corner-all e-widget");
        },
		
		 /**
         * To configure the properties at runtime using SetModel		
		 * @private
         */	 
        _setModel: function (options) {
            if (!(this.model.enabled) && ej.isNullOrUndefined(options["enabled"])) return false;
            var option;
            for (option in options) {
                switch (option) {
                    case "size":
                        this._setSize(options[option]);
                        break;
                    case "height":
                        this._setHeight(options[option]);
                        break;
                    case "width":
                        this._setWidth(options[option]);
                        break;
                    case "contentType":
                        this._setContentType(options[option]);
                        break;
                    case "imagePosition":
                        this._setImagePosition(options[option]);
                        break;
                    case "text":
                        this._setText(options[option]);
                        break;
                    case "prefixIcon":
                        this._setMajorIcon(options[option]);
                        break;
                    case "suffixIcon":
                        this._setMinorIcon(options[option]);
                        break;
                    case "enabled":
                        this._controlStatus(options[option]);
                        break;
                    case "showRoundedCorner":
                        this._roundedCorner(options[option]);
                        break;
                    case "cssClass":
                        this._setSkin(options[option]);
                        break;
                    case "enableRTL":
                        this._setRTL(options[option]);
                        break;
                    case "timeInterval":
                        this.model.timeInterval = options[option];
                        break;
                }
            }
        },
		
		 /**
         * To configure size of the button		
		 * @private
         */	 
        _setSize: function (val) {
            this.element.removeClass('e-btn-mini e-btn-medium e-btn-small e-btn-large e-btn-normal');
            this.element.addClass("e-btn-" + val);
        },
		_setType: function (val) {
            this.element.attr({"type":val});
		},
		 /**
         * To configure the height		
		 * @private
         */	 
        _setHeight: function (val) {
            /// <summary>This will set Text property of button </summary>
            this.element.css('height', val);
        },
		 /**
         * To configure width.		
		 * @private
         */	 
        _setWidth: function (val) {
            /// <summary>This will set Text property of button </summary>
            this.element.css('width', val);
        },
		 /**
         * To configure the button text		
		 * @private
         */	 
        _setText: function (val) {
            /// <summary>This will set Text property of button </summary>
            if(this.buttonType == "inputButton"){
                this.element.val(val);
            } else {
                if (this.model.contentType == ej.ContentType.TextOnly) {
                    this.element.text(val);
                } else {
                    this.textspan.text(val);
                }
            }
            this.model.text = val;
        },
		 /**
         * To configure button's prefix image		
		 * @private
         */	 
        _setMajorIcon: function (val) {
            /// <summary>This will set Major Icon property of button </summary>
            this.majorimgtag.removeClass(this.model.prefixIcon);
            this.majorimgtag.addClass(val);
            this.model.prefixIcon = val;
        },
		 /**
         * To configure button's suffix image		
		 * @private
         */	 
        _setMinorIcon: function (val) {
            /// <summary>This will set Minor Icon property of button </summary>
            this.minorimgtag.removeClass(this.model.suffixIcon);
            this.minorimgtag.addClass(val);
            this.model.suffixIcon = val;
        },
		 /**
         * To configure button contents type		
		 * @private
         */	 
        _setContentType: function (val) {
            if (val != this.model.contentType) {
                this.element.empty();
                this.model.contentType = val;
                this._renderButtonNormal();
            }
        },
		 /**
         * To configure images position inside the button		
		 * @private
         */	 
        _setImagePosition: function (val) {
            if ((this.model.contentType == ej.ContentType.TextAndImage) && (val != this.model.imagePosition)) {
                this.element.empty();
                this.model.imagePosition = val;
                this._renderButtonNormal();
            }
        },
		 /**
         * To enable or disable the Right to Left behaviour 		
		 * @private
         */	 
        _setRTL: function (val) {
            if (val) {
                this.element.addClass("e-rtl");
            } else {
                this.element.removeClass("e-rtl");
            }
        },
		 /**
         * To enable or disable the button state		
		 * @private
         */	 
        _controlStatus: function (value) {
            //disable status
            if (!value) {
                this.disable();
            } else {
                this.enable();
            }
        },
		 /**
         * To configure the custom theme for button using cssClass property		
		 * @private
         */	 
        _setSkin: function (skin) {
            if (this.model.cssClass != skin) {
                this.element.removeClass(this.model.cssClass);
                this.element.addClass(skin);
            }
        },
		 /**
         * To initialize the button		
		 * @private
         */	 
        _initialize: function () {
            /// <summary>This function is  used to Initialize the Button Object</summary>
			if (this.element.is("input")) 
			{
			this.buttonType="inputButton";
			}
			else if ((this.element.is("a")) || (this.element.is("button"))) {
                this.buttonType = "tagButton";
            }
			else {
                this.element.removeClass("e-button");
            }
			if(this.element.attr("type"))
			{		
			this.model.type=this.element.attr("type");
			}
			else
			this._setType(this.model.type);
			
			 
			this._timeout = null;
        },

		 /**
         * Render Section For DifferentTypes		
		 * @private
         */	         
        _render: function () {
            /// <summary>This function is  used to Render the Button Object</summary>
            this._setSize(this.model.size);
            this._setHeight(this.model.height);
            this._setWidth(this.model.width);
            this._setRTL(this.model.enableRTL);
            this.element.addClass(this.model.cssClass + " e-btn e-select e-widget").attr("role", "button");
            if (this.buttonType == "inputButton") {
                this.element.addClass("e-txt");
                if ((this.model.text != null) && (this.model.text != "")) {
                    this.element.val(this.model.text);
                } else {
                    this.model.text = this.element.val();
                }
            } else { this._renderButtonNormal(); }
            this._roundedCorner(this.model.showRoundedCorner);
            if (this.model.text)
                this.element.attr("aria-describedby", this.model.text);
        },
		 /**
         * Render Section For Normal button		
		 * @private
         */	
        _renderButtonNormal: function () {
            if ((this.model.text == null) || (this.model.text == "")) {
                this.model.text = this.element.text();
            }
            this.element.empty();
            /*Image and Text*/
            this.textspan = ej.buildTag('span.e-btntxt', this.model.text);
            if (this.model.contentType.indexOf("image") > -1) {
                this.majorimgtag = ej.buildTag('span.e-icon ' + this.model.prefixIcon);
                this.minorimgtag = ej.buildTag('span.e-icon ' + this.model.suffixIcon);
                this.imgtxtwrap = ej.buildTag('div');
            }
            /*Rendering Option*/
            if (this.model.contentType == ej.ContentType.TextAndImage) {
				switch (this.model.imagePosition) {
                    case ej.ImagePosition.ImageRight:
                    	this.imgtxtwrap.append(this.textspan, this.majorimgtag);
						break;
					case ej.ImagePosition.ImageLeft:
                    	this.imgtxtwrap.append(this.majorimgtag, this.textspan);
						break;
					case ej.ImagePosition.ImageBottom:	
						this.majorimgtag.attr("style","display:inherit");
                    	this.imgtxtwrap.append(this.textspan, this.majorimgtag);
						break;
                	case ej.ImagePosition.ImageTop:
						this.majorimgtag.attr("style","display:inherit");
                    	this.imgtxtwrap.append(this.majorimgtag, this.textspan);
						break;
                }
				this.element.append(this.imgtxtwrap);
            } else if (this.model.contentType == ej.ContentType.ImageTextImage) {
                this.imgtxtwrap.append(this.majorimgtag, this.textspan, this.minorimgtag);
                this.element.append(this.imgtxtwrap);
            } else if (this.model.contentType == ej.ContentType.ImageBoth) {
                this.imgtxtwrap.append(this.majorimgtag, this.minorimgtag);
                this.element.append(this.imgtxtwrap);
            } else if (this.model.contentType == ej.ContentType.ImageOnly) {
                this.imgtxtwrap.append(this.majorimgtag);
                this.element.append(this.imgtxtwrap);
            } else {
                this.element.addClass("e-txt");
                this.element.text(this.model.text);
            }
        },
		 /**
         * To enable or disable the rounded corner behaviour 		
		 * @private
         */	
        _roundedCorner: function (value) {
            value == true ? this.element.addClass('e-corner-all') : this.element.removeClass('e-corner-all');
        },
         /**
         * Wiring the events to button control		
		 * @private
         */			 
        _wireEvents: function (val) {
            /// <summary>This function is  used to Apply Events in the Button Object</summary>
            if (val) {
                this._on(this.element, "mousedown", this._btnRepatMouseClickEvent);
                this._on($(document), 'mouseup', this._mouseUpClick);
                this._on(this.element, "keyup", this._btnRepatKeyUpEvent);
                this._on($(document), "keypress", this._btnRepatKeyDownEvent);
                
            }
                this._on(this.element, "click", this._btnMouseClickEvent);
        },
		 /**
         * Section For handle the click event
		 * @private
         */	
        _btnMouseClickEvent: function (e) {
            var self = this;
            if (!self.element.hasClass("e-disable")) {
                var args = { status: self.model.enabled };
                self._trigger("click", args);
            }
        },
		/**
         * Section For handle repeat button click action.
		 * @private
         */	
        _btnRepatMouseClickEvent: function (e) {
            var self = this;
            if (!self.element.hasClass("e-disable")) {
                var args = { status: self.model.enabled };
                if((e.button == 0) ||(e.which == 1)){

                    self._timeout = setInterval(function () { self._trigger("click", { target: e.currentTarget, status: self.model.enabled } ); }, this.model.timeInterval);
                }
            }
        },
		/**
         * Section to track the mouse up event		
		 * @private
         */	
        _mouseUpClick: function (event) {
            clearTimeout(this._timeout);
        },
		/**
         * Section to watch the repeat key down action.		
		 * @private
         */
        _btnRepatKeyDownEvent: function (e) {
            var self = this;
            if (!self.element.hasClass("e-disable")) {
                var args = { status: self.model.enabled };
                if ((e.keyCode ==32 ) || (e.keyCode ==13 )) {
                    self._trigger("click", args);
                }
            }
        },
		/**
         * Section to watch the repeat key up action.		
		 * @private
         */
        _btnRepatKeyUpEvent: function (e) {
           if ((e.keyCode == 32) || (e.keyCode == 13)) {
                clearTimeout(this._timeout);
            }
        },
    });
	
	/**
	 * Enum for button content mode.	 
	 * @enum {string}
	 * @global 
	 */
    ej.ContentType = { 
			/**  Supports only for text content only */
			TextOnly: "textonly", 
			/** Supports only for image content only */
			ImageOnly: "imageonly", 
			/** Supports image for both ends of the button */
			ImageBoth: "imageboth", 
			/** Supports image with the text content */
			TextAndImage: "textandimage", 
			/** Supports image with both ends of the text */
			ImageTextImage: "imagetextimage" 
			};
	
	/**
	 * Enum for Button positioning	 
	 * @enum {string}
	 * @global 
	 */
    ej.ImagePosition = { 
			/**  support for aligning text in left and image in right. */
			ImageRight: "imageright", 
			/**  support for aligning text in right and image in left. */
			ImageLeft: "imageleft",
			/**  support for aligning text in bottom and image in top. */
			ImageTop: "imagetop", 
			/**  support for aligning text in top and image in bottom. */
			ImageBottom: "imagebottom"
			};
	/**
	 * Enum for various button sizes	 
	 * @enum {string}
	 * @global 
	 */
    ej.ButtonSize = { 
			/**  Creates button with inbuilt default size height, width specified */
			Normal : "normal",
			/**  Creates button with inbuilt mini size height, width specified */
			Mini: "mini", 
			/**  Creates button with inbuilt small size height, width specified */
			Small: "small",
			/**  Creates button with inbuilt medium size height, width specified */
			Medium:"medium", 
			/**  Creates button with inbuilt large size height, width specified */
			Large: "large"
    };
    /**
	 * Enum for various button types	 
	 * @enum {string}
	 * @global 
	 */
	ej.ButtonType = { 
				/**  Creates button with inbuilt button type specified */
			Button : "button",
			/**  Creates button with inbuilt reset type specified */
			Reset: "reset", 
			/**  Creates button with inbuilt submit type specified */
			Submit: "submit"};
})(jQuery, Syncfusion);
;