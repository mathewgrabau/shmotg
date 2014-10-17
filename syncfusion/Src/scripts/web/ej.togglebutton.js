/*!
*  filename: ej.togglebutton.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/*!
*  filename: ej.togglebutton.js
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
	* @class ejToggleButton
	* @requires jQuery
	* @requires ej.togglebutton.js
    * @requires ej.checkbox.js
	* @classdesc The Toggle Button allows you to perform the toggle option by using checked and unchecked state. This Toggle Button can be helpful to user to check their states. The Toggle Button control displays both text and images.
	* @example 
	* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
	* // Create ToggleButton <br>
    * $('#toggle').ejToggleButton({defaultText:"Play",activeText:"Pause"}); 	<br>	
	* &lt;/script&gt; <br>
	*/    

    // Example plugin creation code
    // ejSample is the plugin name 
    // "ej.Sample" is "namespace.className" will hold functions and properties

    ej.widget("ejToggleButton", "ej.ToggleButton", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["input"],
        _setFirst: false,
        //Root Css Class
        _rootCSS: "e-togglebutton",

        // default model
        defaults: {
            /// <summary>This Contains default property of toggle button </summary>
			/**		
			* Specifies the size of the ToggleButton.	See {@link ButtonSize}
			* @default ej.ButtonSize.Normal
			* @type {enum}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
			* &lt;script&gt; <br>
			* //To set size API value during initialization  
			* 	$("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause",size: ej.ButtonSize.Mini});					 			 	
			* &lt;/script&gt; <br>
			* @memberof ejToggleButton
			* @instance
			*/		
            size: "normal",           
            /**		
			* Specifies the type of the ToggleButton.	See {@link ButtonType}
			* @default ej.ButtonType.Button
			* @type {enum}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
			* &lt;script&gt; <br>
			* //To set type API value during initialization  
			* 	$("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause",type:ej.ButtonType.Submit});					 			 	
			* &lt;/script&gt; <br>
			* @memberof ejToggleButton
			* @instance
			*/
            type: "button",
			/**		
			* Specifies the width of the ToggleButton.
			* @default 100pixel
			* @type {String}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			* //To set width API value during initialization  
			* 	$("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause",width: "100px" });						
				
	* &lt;/script&gt; <br>			
			* @memberof ejToggleButton
			* @instance
			*/
			width: "",
			
			/**		
			* Specifies the height of the ToggleButton.
			* @default 28pixel
			* @type {String}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			* //To set height API value during initialization  
			* 	$("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause",height: "28px" });						
		
	* &lt;/script&gt;		
			* @memberof ejToggleButton
			* @instance
			*/
            height: "",
			
            /**		
			* Specifies the state of the ToggleButton.
			* @default true
			* @type {boolean}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>

			* //To set enabled API value during initialization  
			* 	$("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause",enabled: true });						
					
			* &lt;/script&gt; <br>		
			* @memberof ejToggleButton
			* @instance
			*/
            enabled: true,
			/**		
			* Specifies the toggleState of the ToggleButton.
			* @default false
			* @type {boolean}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			* //To set toggleState API value during initialization  
			* 	$("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause",toggleState: false });	
            * &lt;/script&gt; <br>	
			* @memberof ejToggleButton
			* @instance
			*/
            toggleState: false,
			/**		
			* Specifies the defaultText of the ToggleButton.
			* @default null
			* @type {string}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			* //To set defaultText API value during initialization  
			* 	$("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause"});						
			* &lt;/script&gt; <br>		
			* @memberof ejToggleButton
			* @instance
			*/
			defaultText: null,
			
			/**		
			* Specifies the preventToggle of the ToggleButton.
			* @default false
			* @type {boolean}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			* //To set preventToggle API value during initialization  
			* 	$("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause",preventToggle: false});						
			* &lt;/script&gt; <br>		
			* @memberof ejToggleButton
			* @instance
			*/
			preventToggle: false,
			/**		
			* Specifies the activeText of the ToggleButton.
			* @default null
			* @type {string}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	        * &lt;script&gt; <br>
			* //To set activeText API value during initialization  
			* 	$("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause"});							
	        * &lt;/script&gt; <br>	
			* @memberof ejToggleButton
			* @instance
			*/
            activeText: null,
			/**		
			* Specifies the contentType of the ToggleButton. See {@link ContentType}
			* @default ej.ContentType.TextOnly
			* @type {enum}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	        * &lt;script&gt; <br>
			* // Set the button contentType on initialization. 			
			* 	$("#toggle").ejToggleButton({ defaultText:"Play",activeText:"Pause",contentType : ej.ContentType.TextOnly });			 
			* &lt;/script&gt; <br>
			* @memberof ejToggleButton
			* @instance
			*/
            contentType: "textonly",
			/**		
			*  Specifies the image position of the ToggleButton. This image position is applicable only with the textandimage contentType property. The images can be positioned in both imageLeft and imageRight options. See {@link imagePositions}
			* @default ej.ImagePosition.ImageLeft
			* @type {enum}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			* // Set the image position for toggle button during initialization. 			
			* 	$("#toggle").ejToggleButton(
            * {
            *    contentType: ej.ContentType.TextAndImage,
            *    imagePosition: ej.ImagePosition.ImageRight,
            *    defaultText:"Play",activeText:"Pause",
            *    defaultPrefixIcon: "e-mediaplay e-uiLight",
            *    activePrefixIcon: "e-mediapause e-uiLight"
            * });			
			* &lt;/script&gt; <br>
			* @memberof ejToggleButton
			* @instance
			*/
            imagePosition: "imageleft",
			/**		
			* Specify the rounded corner to Togglebutton
			* @default false
			* @type {boolean}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			* // Set the rounded corner during initialization. 			
			* 	$("#toggle").ejToggleButton({ defaultText:"Play",activeText:"Pause",showRoundedCorner : true });			 
			* &lt;/script&gt; <br>
			* @memberof ejToggleButton
			* @instance
			*/
            showRoundedCorner: false,
			/**					
			* Specify the enablePersistence to Togglebutton to save current model value to browser cookies for state maintains
			* @default false
			* @type {boolean}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			* // Set the rounded corner during initialization. 			
			* 	$("#toggle").ejToggleButton({ defaultText:"Play",activeText:"Pause",enablePersistence : true });			 
			* &lt;/script&gt; <br>
			
			* @memberof ejToggleButton
			* @instance
			*/
            enablePersistence: false,
			/**		
			* Specify the CSS class to toggle button to achieve custom theme.
			* @default ""
			* @type {string}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			* // Set the CSS class during initialization. 			
			* 	$("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause",cssClass : "gradient-lime" });			 
			* &lt;/script&gt; <br>
			* @memberof ejToggleButton
			* @instance
			*/
            cssClass: "",
			/**		
			* Specify the defaultPrefixIcon to toggle button to achieve custom theme.
			* @default ""
			* @type {string}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			* // Set the defaultPrefixIcon during initialization. 			
			* 	$("#toggle").ejToggleButton({ 
            *    defaultText:"Play",activeText:"Pause",
            *    contentType: "textandimage",
            *    defaultPrefixIcon: "e-mediaplay e-uiLight",
            *    activePrefixIcon: "e-mediapause e-uiLight",
            *  });			
			* &lt;/script&gt; <br>
			* @memberof ejToggleButton
			* @instance
			*/
            defaultPrefixIcon: null,
			/**		
			* Specify the defaultSuffixIcon to toggle button to achieve custom theme.
			* @default ""
			* @type {string}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
			* &lt;script&gt; <br>
			* // Set the defaultSuffixIcon during initialization. 			
			*  $("#toggle").ejToggleButton({ 
            *    defaultText:"Play",activeText:"Pause",
            *    contentType: "textandimage",
            *    defaultSuffixIcon: "e-mediaplay e-uiLight",
            *    activeSuffixIcon: "e-mediapause e-uiLight",
            *  });			
			* &lt;/script&gt; <br>
			* @memberof ejToggleButton
			* @instance
			*/
            defaultSuffixIcon: null,
			/**		
			* Specify the activePrefixIcon to toggle button to achieve custom theme.
			* @default ""
			* @type {string}
			* @example 
			*
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
			* &lt;script&gt; <br>
			* // Set the activePrefixIcon during initialization. 			
			* 	$("#toggle").ejToggleButton({ 
            *    defaultText:"Play",activeText:"Pause",
            *    contentType: "textandimage",
            *    defaultPrefixIcon: "e-mediaplay e-uiLight",
            *    activePrefixIcon: "e-mediapause e-uiLight",
            *  });			
			* &lt;/script&gt; 
			* @memberof ejToggleButton
			* @instance
			*/
            activePrefixIcon: null,
			/**		
			* Specify the activeSuffixIcon to toggle button to achieve custom theme.
			* @default ""
			* @type {string}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			* // Set the activeSuffixIcon during initialization. 			
			* 	$("#toggle").ejToggleButton({ 
            *    contentType: "imageboth",
            *    defaultSuffixIcon: "e-mediaplay e-uiLight",
            *    activeSuffixIcon: "e-mediapause e-uiLight",
            *  });			
			* &lt;/script&gt; <br>
			* @memberof ejToggleButton
			* @instance
			*/
            activeSuffixIcon: null,
			/**		
			* Specify the Right to Left Direction to Togglebutton
			* @default false
			* @type {boolean}
			* @example 
			* &lt;input id="toggle" type="checkbox" /&gt; <br> 	
			* &lt;script&gt; <br>
			* // Set the enableRTL during initialization. 			
			* 	$("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause",enableRTL : true });			 
			* &lt;/script&gt; <br>
			* @memberof ejToggleButton
			* @instance
			*/
            enableRTL: false,
			/**     
			 * Fires when ToggleButton control is created successfully.
			 * @event
			 * @name ejToggleButton#create 	
			 * @param {Object} argument Event parameters from toggle button     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.
			 * @param {object}  argument.model returns the toggle button model
			 * @param {string}  argument.type returns the name of the event			 
			 * @example 
			 * &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			 * //create event for toggle button
             * $("#toggle").ejToggleButton({
             *    defaultText:"Play",activeText:"Pause",
             *    create: function (args) {}
             * });   
             * &lt;/script&gt; <br>   
			 * @memberof ejToggleButton
			 * @instance
			 */
            create: null,
			/**     
			 * Fires when ToggleButton control is clicked successfully.
			 * @event
			 * @name ejToggleButton#click 	
			 * @param {Object} argument Event parameters from toggle button     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.
			 * @param {boolean}  argument.isChecked return the toggle button checked state
			 * @param {object}  argument.model returns the toggle button model
			 * @param {boolean}  argument.status return the toggle button state			 
			 * @param {string}  argument.type returns the name of the event			 			
			 * @example 
			 * &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			 * //click event for toggle button
             * $("#toggle").ejToggleButton({
             * defaultText:"Play",activeText:"Pause",
             *    click: function (args) {}
             * }); 
             * &lt;/script&gt; <br>     
			 * @memberof ejToggleButton
			 * @instance
			 */
            click: null,
			/**     
			 * Fires when ToggleButton control state is changed successfully.
			 * @event
			 * @name ejToggleButton#change 	
			 * @param {Object} argument Event parameters from toggle button     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.
			 * @param {boolean}  argument.isChecked return the toggle button checked state
			 * @param {object}  argument.model returns the toggle button model		
			 * @param {string}  argument.type returns the name of the event			 			
			 * @example 
			 * &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			 * //change event for toggle button
             * $("#toggle").ejToggleButton({
             *    defaultText:"Play",activeText:"Pause",
             *    change: function (args) {}
             * });  
             * &lt;/script&gt; <br>    
			 * @memberof ejToggleButton
			 * @instance
			 */
            change: null,
			/**     
			 * Fires when ToggleButton control is destroyed successfully.
			 * @event
			 * @name ejToggleButton#destroy 	
			 * @param {Object} argument Event parameters from toggle button     
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.
			 * @param {object}  argument.model returns the toggle button model		
			 * @param {string}  argument.type returns the name of the event			 			
			 * @example 
			 * &lt;input id="toggle" type="checkbox" /&gt; <br> 	
	* &lt;script&gt; <br>
			 * //destroy event for toggle button
             * $("#toggle").ejToggleButton({
             *    defaultText:"Play",activeText:"Pause",
             *    destroy: function (args) {}
             * });  
             * &lt;/script&gt; <br>    
			 * @memberof ejToggleButton
			 * @instance
			 */
            destroy: null
        },
		/**
         * Specify the data types for default properties 
		 * @private
         */
        //Data Types
        dataTypes: {
            size: "string",
            type: "enum",
            enabled: "boolean",
            showRoundedCorner: "boolean",
            toggleState: "boolean",
			preventToggle: "boolean",
            defaultText: "string",
            activeText: "string",
            contentType: "enum",
            imagePosition: "enum",
            defaultPrefixIcon: "string",
            defaultSuffixIcon: "string",
            activePrefixIcon: "string",
            activeSuffixIcon: "string",
            cssClass: "string",
            enableRTL: "boolean",
            enablePersistence: "boolean"
        },
		/**
        * To disable the toggle button  
		* @return jQuery
		* @example 
		* &lt;input id="toggle" type="checkbox" / &gt; <br> 
		* &lt;script&gt;
		* // Create toggle button
		* $("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause"});
		* var toggleObj = $("#toggle").data("ejToggleButton");
		* toggleObj.disable(); // disable the toggle button
		* &lt;/script&gt;
		* @example 
		* &lt;input id="toggle" type="checkbox" / &gt; <br> 
		* &lt;script&gt;
		* // disable the toggle button
		* $("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause"});
		* $("#toggle").ejToggleButton("disable");	
		* &lt;/script&gt;
		*@memberof ejToggleButton
		* @instance
        */
        // sample public function
        disable: function () {
            /// <summary>This Contains disable functionality to wire with the toggle button </summary>
            this.buttontag.addClass("e-disable").attr({ "aria-disabled": true });
            this.model.enabled = false;
        },
		/**
        * To enable the toggle button  
		* @return jQuery
		* @example 
		* &lt;input id="toggle" type="checkbox" / &gt; <br> 
		* &lt;script&gt;
		* // Create toggle button
		* $("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause"});
		* var toggleObj = $("#toggle").data("ejToggleButton");
		* toggleObj.enable(); // enable the toggle button
		* &lt;/script&gt;
		* @example 
		* &lt;input id="toggle" type="checkbox" / &gt; <br> 
		* &lt;script&gt;
		* // enable the toggle button
		* $("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause"});
		* $("#toggle").ejToggleButton("enable");	
		* &lt;/script&gt;
		*@memberof ejToggleButton
		* @instance
        */
        enable: function () {
            /// <summary>This Contains enable functionality to wire with the toggle button </summary>
            if (this.buttontag.hasClass("e-disable")) {
                this.buttontag.removeClass("e-disable").attr({ "aria-disabled": false });
                this.model.enabled = true;
            }
        },
		/**
         * Create the toggle button widget
		 * @private
         */	
        // constructor function
        _init: function () {
            /// <summary>This function contains initialization </summary>
            this._initialize();
            this._controlStatus(this.model.enabled);
            this._wireEvents();
        },
		/**
        * To destroy the toggle button  
		* @alias destroy
		* @return jQuery
		* @example 
		* &lt;input id="toggle" type="checkbox" / &gt; <br> 
		* &lt;script&gt;
		* // Create toggle button
		* $("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause"});
		* var toggleObj = $("#toggle").data("ejToggleButton");
		* toggleObj.destroy(); // destroy the toggle button
		* &lt;/script&gt;
		* @example 
		* &lt;input id="toggle" type="checkbox" / &gt; <br> 
		* &lt;script&gt;
		* // destroy the toggle button
		* $("#toggle").ejToggleButton({defaultText:"Play",activeText:"Pause"});
		* $("#toggle").ejToggleButton("destroy");	
		* &lt;/script&gt;
		*@memberof ejToggleButton
		* @instance
        */
        _destroy: function () {
            /// <summary>This Contains destroy of toggle button </summary>
            this.element.unwrap();
            this.element.removeClass('e-chkbx-hidden');
            this.labelFinder.empty();
            this.labelFinder.text(this.model.defaultText);
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
                    case "type":
                        this._settype(options[option]);
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
                    case "defaultText":
                        this._setDefaultText(options[option]);
                        break;
                    case "activeText":
                        this._setActiveText(options[option]);
                        break;
                    case "defaultPrefixIcon":
                        this._setDefaultMajorIcon(options[option]);
                        break;
                    case "defaultSuffixIcon":
                        this._setDefaultMinorIcon(options[option]);
                        break;
                    case "activePrefixIcon":
                        this._setActiveMajorIcon(options[option]);
                        break;
                    case "activeSuffixIcon":
                        this._setActiveMinorIcon(options[option]);
                        break;
                    case "enabled":
                        this._controlStatus(options[option]);
                        break;
                    case "toggleState":
                        this._tglevaluestatus(options[option]);
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
                }
            }
        },
		/**
         * To configure size of the toggle button		
		 * @private
         */	 
        _setSize: function (val) {
            this.buttontag.removeClass('e-btn-mini e-btn-medium e-btn-small e-btn-large e-btn-normal');
            this.buttontag.addClass("e-btn-" + val);
        },

        _settype: function (val) {
            this.model.type = val;            
        },

		/**
         * To configure height of the toggle button		
		 * @private
         */	
        _setHeight: function (val) {
            /// <summary>This will set Text property of toggle button </summary>
            this.buttontag.css('height', val);
        },
		/**
         * To configure width of the toggle button		
		 * @private
         */	
        _setWidth: function (val) {
            /// <summary>This will set Text property of toggle button </summary>
            this.buttontag.css('width', val);
        },
		/**
         * To configure default text to the toggle button		
		 * @private
         */	
        _setDefaultText: function (val) {
            /// <summary>This will set Text property of toggle button </summary>
            if (this.model.contentType == ej.ContentType.TextOnly) {
                this.buttontag.html(val);
            } else {
                this.defaulttxtspan.html(val);
            }
        },
		/**
         * To configure active text to the toggle button		
		 * @private
         */	
        _setActiveText: function (val) {
            /// <summary>This will set Text property of toggle button </summary>
            if (this.model.toggleState) {
                if (this.model.contentType == ej.ContentType.TextOnly) {
                    this.buttontag.html(val);
                } else {
                    this.defaulttxtspan.html(val);
                }
            }
        },
		/**
         * To configure default major icon of the toggle button		
		 * @private
         */	
        _setDefaultMajorIcon: function (val) {
            /// <summary>This will set Major Icon property of toggle button </summary>
            this.defMainIcon.removeClass(this.model.defaultPrefixIcon);
            this.defMainIcon.addClass(val);
        },
		/**
         * To configure default minor icon of the toggle button		
		 * @private
         */	
        _setDefaultMinorIcon: function (val) {
            /// <summary>This will set Minor Icon property of toggle button </summary>
            this.defMiniIcon.removeClass(this.model.defaultSuffixIcon);
            this.defMiniIcon.addClass(val);
        },
		/**
         * To configure active major icon of the toggle button		
		 * @private
         */	
        _setActiveMajorIcon: function (val) {
            /// <summary>This will set Major Icon property of toggle button </summary>
            if (this.model.toggleState) {
                this.defMainIcon.removeClass(this.model.activePrefixIcon);
                this.defMainIcon.addClass(val);
            }
        },
		/**
         * To configure active minor icon of the toggle button		
		 * @private
         */	
        _setActiveMinorIcon: function (val) {
            /// <summary>This will set Minor Icon property of toggle button </summary>
            if (this.model.toggleState) {
                this.defMiniIcon.removeClass(this.model.activeSuffixIcon);
                this.defMiniIcon.addClass(val);
            }
        },
		/**
         * To configure content type of the toggle button		
		 * @private
         */	
        _setContentType: function (val) {
            if (val != this.model.contentType) {
                this.buttontag.empty();
                this.model.contentType = val;
                this._renderButtonContent();
            }
        },
		/**
         * To configure image position of the toggle button		
		 * @private
         */	
        _setImagePosition: function (val) {
            if ((this.model.contentType == ej.ContentType.TextAndImage) && (val != this.model.imagePosition)) {
                this.buttontag.empty();
                this.model.imagePosition = val;
                this._renderButtonContent();
            }
        },
		 /**
         * To enable or disable the Right to Left behaviour 		
		 * @private
         */	 
        _setRTL: function (val) {
            if (val) {
                this.buttontag.addClass("e-rtl");
            } else {
                this.buttontag.removeClass("e-rtl");
            }
        },
		 /**
         * To enable or disable the toggle button state 		
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
         * To configure the custom theme for toggle button using cssClass property		
		 * @private
         */	 
        _setSkin: function (skin) {
            if (this.model.cssClass != skin) {
                this.buttontag.removeClass(this.model.cssClass);
                this.buttontag.addClass(skin);
            }
        },
		/**
         * To initialize the toggle button		
		 * @private
         */	 
        _initialize: function () {
            /// <summary>This Contains initialize of toggle button </summary>
            if (this.element.is('[type = "checkbox"]')) {
                this._render();
            } else {
                this.element.removeClass("e-togglebutton");//need to change in source level
            }
        },
		 /**
         * Render Section For DifferentTypes		
		 * @private
         */	
        /*Render Section For DifferentTypes*/
        _render: function () {
            /// <summary>This Contains rendering of toggle button </summary>
            var predecessor, labelSelector;
            /*Determine Button Type*/
            this.element.addClass('e-chkbx-hidden e-tbtn');

            /*Finding the label element in the dom*/
            predecessor = this.element.parents().last();
            labelSelector = "label[for='" + this.element[0].id + "']";
            this.labelFinder = predecessor.find(labelSelector);
            if (!this.labelFinder.length) {
                this.labelFinder = ej.buildTag('label', "Button", {}, { "for": this.element[0].id });
                this.labelFinder.insertAfter(this.element);
            }
            if ((this.model.defaultText == null) || (this.model.defaultText == "")) {
                this.model.defaultText = this.labelFinder.text();
            }
            this.labelFinder.empty();
            this.wrapper = $('<span id="' + this.element[0].id + '-wrapper" class="e-tbtn-wrap e-widget"></span>');
            $(this.element).wrap(this.wrapper);
            this.labelFinder.insertAfter(this.element);
            this.buttontag = ej.buildTag('button.e-togglebutton e-btn e-tbtn ' + this.model.cssClass + ' e-select', "", {}, { "role": "button", "tabindex": 0, "type":this.model.type});//need to change in source level
            this.labelFinder.append(this.buttontag);
            /*Initializing the content*/
            if (ej.util.isNullOrUndefined(this.model.activeText)) {
                this.model.activeText = this.model.defaultText;
            }
            if (ej.util.isNullOrUndefined(this.model.activePrefixIcon)) {
                this.model.activePrefixIcon = this.model.defaultPrefixIcon;
            }
            if (ej.util.isNullOrUndefined(this.model.activeSuffixIcon)) {
                this.model.activeSuffixIcon = this.model.defaultSuffixIcon;
            }
            /*Height Width*/
            this._setSize(this.model.size);
            this._setHeight(this.model.height);
            this._setWidth(this.model.width);
            this._setRTL(this.model.enableRTL);
            this._renderButtonContent();
            this._tglevaluestatus(this.model.toggleState);
            this._roundedCorner(this.model.showRoundedCorner);
        },
		/**
         * Render Section For toggle button content
		 * @private
         */	
        _renderButtonContent: function () {
            /*Image and Text*/
            this.imgtxtwrap = ej.buildTag('div');
            /*Text Content*/
            this.defaulttxtspan = ej.buildTag('span.e-btntxt' + '#' + this.element[0].id + 'textstatic', this.model.defaultText);
            /*Image Content*/
            if (this.model.contentType.indexOf("image") > -1) {
                this.defMainIcon = ej.buildTag('span.e-icon ' + this.model.defaultPrefixIcon + '#' + this.element[0].id + 'mainiconstatic');
                this.defMiniIcon = ej.buildTag('span.e-icon ' + this.model.defaultSuffixIcon + '#' + this.element[0].id + 'miniconstatic');
            }
            /*Rendering Option*/
            if (this.model.contentType == ej.ContentType.TextAndImage) {
				switch (this.model.imagePosition) {
                    case ej.ImagePosition.ImageRight:
                    	this.imgtxtwrap.append(this.defaulttxtspan, this.defMainIcon);
						break;
					case ej.ImagePosition.ImageLeft:
                    	this.imgtxtwrap.append(this.defMainIcon, this.defaulttxtspan);
						break;
					case ej.ImagePosition.ImageBottom:	
						this.defMainIcon.attr("style","display:inherit");
                    	this.imgtxtwrap.append(this.defaulttxtspan, this.defMainIcon);
						break;
                	case ej.ImagePosition.ImageTop:
						this.defMainIcon.attr("style","display:inherit");
                    	this.imgtxtwrap.append(this.defMainIcon, this.defaulttxtspan);
						break;
                }
				this.buttontag.append(this.imgtxtwrap);
            } else if (this.model.contentType == ej.ContentType.ImageTextImage) {
                this.imgtxtwrap.append(this.defMainIcon, this.defaulttxtspan, this.defMiniIcon);
                this.buttontag.append(this.imgtxtwrap);
            } else if (this.model.contentType == ej.ContentType.ImageOnly) {
                this.imgtxtwrap.append(this.defMainIcon);
                this.buttontag.append(this.imgtxtwrap);
            } else if (this.model.contentType == ej.ContentType.ImageBoth) {
                this.imgtxtwrap.append(this.defMainIcon, this.defMiniIcon);
                this.buttontag.append(this.imgtxtwrap);
            } else {
                this.buttontag.addClass("e-txt");
                this.buttontag.text(this.model.defaultText);
            }
            /**/
        },
		/**
         * To check whether Status of Toggle Button
		 * @private
         */	
        _tglevaluestatus: function (value) {
            /*Checking Status of Toggle Button*/
            if (value) {
                this._toggleButtonStatus(value);
                this.element.attr("checked", "checked");
            } else {
                this._toggleButtonStatus(value);
                this.element.removeAttr("checked");
            }
        },
		/**
         * To enable or disable the rounded corner behaviour 		
		 * @private
         */	
        _roundedCorner: function (value) {
            value == true ? this.buttontag.addClass('e-corner-all') : this.buttontag.removeClass('e-corner-all');
        },
        /*-----------------------Event Handlers -----------------------------------------*/
		 /**
         * Wiring the events to toggle button control		
		 * @private
         */	
        _wireEvents: function () {
            /// <summary>This Contains Events to wire with the toggle button </summary>

            this._on(this.buttontag, "click", this._tglebtnclicked);
        },
		 /**
         * Section For handle the click event
		 * @private
         */	
        _tglebtnclicked: function (e) {
		if (!this.model.preventToggle) {
            var position, end, version = 0;
            if (navigator.userAgent.search("MSIE") > 0) {
                position = navigator.userAgent.search("MSIE") + 5;
                end = navigator.userAgent.search("; Windows");
                version = navigator.userAgent.substring(position, end);
            }
            if (!this.buttontag.hasClass("e-disable")) {
                if (!this.model.toggleState) {
                    this.model.toggleState = true;
                    if ((window.navigator.appName == "Microsoft Internet Explorer") && (version == "8.0")) {
                        this._tglevaluestatus(this.model.toggleState);
                    } else {
                        this._toggleButtonStatus(this.model.toggleState);
                    }
                } else {
                    this.model.toggleState = false;
                    if ((window.navigator.appName == "Microsoft Internet Explorer") && (version == "8.0")) {
                        this._tglevaluestatus(this.model.toggleState);
                    } else {
                        this._toggleButtonStatus(this.model.toggleState);
                    }
                }
            }
            this._trigger("click", { "isChecked": this.model.toggleState, status: this.model.enabled });
        }
		},
		 /**
         * Section For handle the toggle button status
		 * @private
         */	
        _toggleButtonStatus: function (buttonstatus) {
            if (buttonstatus) {
                if (this.model.contentType == ej.ContentType.TextOnly) {
                    this.buttontag.html(this.model.activeText);
                } else {
                    this.defaulttxtspan.html(this.model.activeText);
                    this.defMainIcon.removeClass(this.model.defaultPrefixIcon).addClass(this.model.activePrefixIcon);
                    this.defMiniIcon.removeClass(this.model.defaultSuffixIcon).addClass(this.model.activeSuffixIcon);
                }
                this.buttontag.addClass("e-active").attr("aria-pressed", true);
            } else {
                if (this.model.contentType == ej.ContentType.TextOnly) {
                    this.buttontag.html(this.model.defaultText);
                } else {
                    this.defaulttxtspan.html(this.model.defaultText);
                    this.defMainIcon.removeClass(this.model.activePrefixIcon).addClass(this.model.defaultPrefixIcon);
                    this.defMiniIcon.removeClass(this.model.activeSuffixIcon).addClass(this.model.defaultSuffixIcon);
                }
                this.buttontag.removeClass("e-active").attr("aria-pressed", false);
            }
            this._trigger('change', { "isChecked": this.model.toggleState });
        },

    });
	/**
	 * Enum for toggle button content mode.	 
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
	 * Enum for toggle button positioning	 
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
	 * Enum for various toggle button sizes	 
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
			Large: "large" };
			
    ej.ButtonType = {
        /**  Creates button with button type as button */
        Button: "button",
        /**  Creates button with button type as reset */
        Reset: "reset",
        /**  Creates button with button type as submit */
        Submit: "submit"
      
    };
})(jQuery, Syncfusion);;;