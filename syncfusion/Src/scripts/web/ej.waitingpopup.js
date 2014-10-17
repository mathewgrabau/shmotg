/*!
*  filename: ej.waitingpopup.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Waiting pop elements
* @copyright Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
* @version 12.1 
* @author <a href="mailto:licensing@syncfusion.com">Syncfusion Inc</a>
*/(function ($, ej, undefined) {
 /**
    * @namespace ej
	* @class ejWaitingPopup
	* @requires jQuery
    * @requires jquery.easing.1.3.js
	* @requires ej.core.js
	* @requires ej.waitingpopup.js
	* @classdesc Custom Design for Html Button control.
	* @example 
	*  &lt;div id="target"&gt;&lt;/div&gt;
	* &lt;script&gt;
	* // Simple waiting popup creation.
    * $("#target").ejWaitingPopup({ showOnInit: true });
	* &lt;/script&gt;
    	        * &lt;style&gt;
              #target {
            height: 200px;
            width: 600px;
            margin: 0 auto;
        }

       #target_WaitingPopup .e-image {
            display: block;
            height: 70px;
        }
	        * &lt;/style&gt;
	*/
    // ejWaitingPopup is the plugin name 
    // "ej.WaitingPopup" is "namespace.className" will hold functions and properties

    ej.widget("ejWaitingPopup", "ej.WaitingPopup", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _setFirst: false,
        _rootCSS: "e-waitingpopup",

        // default model
        defaults: {
			/**
			* Enables the visibility of the WaitingPopup control
			* @default false
			* @type {Boolean}
			* @example 
	        *  &lt;div id="target"&gt;&lt;/div&gt;
	        * &lt;script&gt;
			* //To set showOnInit API value during initialization  
			* 	$("#target").ejWaitingPopup({ showOnInit: true});
	        * &lt;/script&gt;
            	        * &lt;style&gt;
              #target {
            height: 200px;
            width: 600px;
            margin: 0 auto;
        }

       #target_WaitingPopup .e-image {
            display: block;
            height: 70px;
        }
	        * &lt;/style&gt;
			 * @memberof ejWaitingPopup
			* @instance
			*/
            showOnInit: false,
			/**
			* Enables or disables the default loading icon.
			* @default true
			* @type {Boolean}
			* @example 
	        *  &lt;div id="target"&gt;&lt;/div&gt;
	        * &lt;script&gt;
			* //To set showImage API value during initialization  
			* 	$("#target").ejWaitingPopup({ showOnInit: true, showImage: false});
	        * &lt;/script&gt;
            	        * &lt;style&gt;
              #target {
            height: 200px;
            width: 600px;
            margin: 0 auto;
        }

       #target_WaitingPopup .e-image {
            display: block;
            height: 70px;
        }
	        * &lt;/style&gt;
			 * @memberof ejWaitingPopup
			* @instance
			*/
            showImage: true,
			/**
			* Sets the root class for the WaitingPopup control theme
			* @default null
			* @type {String}
			* @example 
	        *  &lt;div id="target"&gt;&lt;/div&gt;
	        * &lt;script&gt;
			* //To Initialize the WaitingPopup with the cssClass  value specified. 
			* 	$("#target").ejWaitingPopup({showOnInit: true, cssClass : 'gradient-lime '});
	        * &lt;/script&gt;
            	        * &lt;style&gt;
              #target {
            height: 200px;
            width: 600px;
            margin: 0 auto;
        }

       #target_WaitingPopup .e-image {
            display: block;
            height: 70px;
        }
	        * &lt;/style&gt;
			 * @memberof ejWaitingPopup
			* @instance
			*/
            cssClass : "",
			/**
			* Sets the custom text in the pop-up panel to notify the waiting process
			* @default null
			* @type {String}
			* @example 
	        *  &lt;div id="target"&gt;&lt;/div&gt;
	        * &lt;script&gt;
			* //To Initialize the WaitingPopup with the text value specified
			* 	$("#target").ejWaitingPopup({showOnInit: true, text: 'waiting…' });
	        * &lt;/script&gt;
	        * &lt;style&gt;
              #target {
            height: 200px;
            width: 600px;
            margin: 0 auto;
        }

       #target_WaitingPopup .e-image {
            display: block;
            height: 70px;
        }
	        * &lt;/style&gt;
			 * @memberof ejWaitingPopup
			* @instance
			*/	
            text: null,
			/**
			* Loads HTML content inside the popup panel instead of the default icon
			* @default null
			* @type {object}
			* @example 
			*&lt;div id="content"&gt;
			*   &lt;div class="block"&gt;
            *   &lt;div class="logo"&gt;
            *&lt;/div&gt;
			*    &lt;div class="text"&gt;
			*     &lt;p&gt; Content is loading ... &lt;/p&gt;
			*      &lt;/div&gt;
            &lt;/div&gt;
            *&lt;div class="loader"&gt;
            *&lt;/div&gt;
			*&lt;/div&gt;
	        * &lt;script&gt;
			* //To Initialize the WaitingPopup control with the template value specified.
			* 	$("#target").ejWaitingPopup({ showOnInit: true,template: $('#content') });
	        * &lt;/script&gt;
	        * &lt;style&gt;
         
          .block {
            height: 76px;
        }

        .logo {
            background-image: url("themes/images/waitingpopup/js_logo.png");
            float: left;
            height: 100%;
            width: 77px;
            margin-right: 15px;
        }

        .txt {
            float: left;
            font-size: 17px;
            height: 100%;
            text-align: left;
        }

            .txt p {
                margin: 0;
            }

        .loader {
            background: url("themes/images/waitingpopup/load_light.gif") no-repeat scroll -5px 18px transparent;
            height: 40px;
            width: 100%;
        }

        .darktheme .loader {
            background-image: url("themes/images/waitingpopup/load_dark.gif");
        }

        #content {
            cursor: default;
            height: 112px;
            width: 275px;
        }

            
	        * &lt;/style&gt;
			 * @memberof ejWaitingPopup
			* @instance
			*/	
            template: null,
             /**    
			 * Fires after Create waitingpopup successfully
			 * @event
			 * @name ejWaitingPopup#create		
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the waitingpopup model
			 * @param {string}  argument.type returns the name of the event			 
			 * @example 
	        *  &lt;div id="target"&gt;&lt;/div&gt;
	        * &lt;script&gt;
			* //To Initialize the WaitingPopup with the text value specified with create event
			* 	$("#target").ejWaitingPopup({showOnInit: true, text: 'waiting…',create: function (args) {} });
	        * &lt;/script&gt;
	        * &lt;style&gt;
              #target {
            height: 200px;
            width: 600px;
            margin: 0 auto;
        }

       #target_WaitingPopup .e-image {
            display: block;
            height: 70px;
        }
	        * &lt;/style&gt;
			 * @memberof ejWaitingPopup
			* @instance
			*/
            create: null,
            /**    
           * Fires after Destroy waitingpopup successfully
           * @event
           * @name ejWaitingPopup#destroy		
           * @param {boolean}  argument.cancel returns the cancel option value
           * @param {object}  argument.model returns the waitingpopup model
           * @param {string}  argument.type returns the name of the event			 
           * @example 
          *  &lt;div id="target"&gt;&lt;/div&gt;
          * &lt;script&gt;
          * //To Initialize the WaitingPopup with the text value specified with destroy event
          * 	$("#target").ejWaitingPopup({showOnInit: true, text: 'waiting…',destroy: function (args) {} });
          * &lt;/script&gt;
          * &lt;style&gt;
            #target {
          height: 200px;
          width: 600px;
          margin: 0 auto;
      }

     #target_WaitingPopup .e-image {
          display: block;
          height: 70px;
      }
          * &lt;/style&gt;
           * @memberof ejWaitingPopup
          * @instance
          */
            destroy: null
        },
		/**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            showOnInit: "boolean",
            showImage: "boolean",
            cssClass : "string"
        },
		 /**
        * To show the waiting popup
		* @return jQuery
		* @example 
		*  &lt;div id="target"&gt;&lt;/div&gt;
		* &lt;script&gt;
        * $("#target").ejWaitingPopup({showOnInit: true});
		* // Initialize the WaitingPopup object.
		*   var popupObj = $("#target").data("ejWaitingPopup");
		* // Calls the show method of WaitingPopup to display.
	    * popupObj.show();
	    * &lt;/script&gt;
        	        * &lt;style&gt;
              #target {
            height: 200px;
            width: 600px;
            margin: 0 auto;
        }

       #target_WaitingPopup .e-image {
            display: block;
            height: 70px;
        }
	        * &lt;/style&gt;
		* @example 
		*  &lt;div id="target"&gt;&lt;/div&gt;
		* &lt;script&gt;
        * $("#target").ejWaitingPopup({showOnInit: true});
		* // Display WaitingPopup using the show method.
		* $("#target").ejWaitingPopup("show");
		* &lt;/script&gt;
        	        * &lt;style&gt;
              #target {
            height: 200px;
            width: 600px;
            margin: 0 auto;
        }

       #target_WaitingPopup .e-image {
            display: block;
            height: 70px;
        }
	        * &lt;/style&gt;
		*@memberof ejWaitingPopup
		* @instance
        */
        show: function () {
            this._refreshPanel();
            this.maindiv.css("display", "block");
            this.model.showOnInit = true;
        },
		 /**
        * To hide the waiting popup
		* @return jQuery
		* @example 
		*  &lt;div id="target"&gt;&lt;/div&gt;
		* &lt;script&gt;
        * $("#target").ejWaitingPopup({showOnInit: true});
		* // Initialize the WaitingPopup object.
		*   var popupObj = $("#target").data("ejWaitingPopup");
		* // Calls the hide method of WaitingPopup not to display.
	    * popupObj.hide();
	    * &lt;/script&gt;
        	        * &lt;style&gt;
              #target {
            height: 200px;
            width: 600px;
            margin: 0 auto;
        }

       #target_WaitingPopup .e-image {
            display: block;
            height: 70px;
        }
	        * &lt;/style&gt;
		* @example 
		*  &lt;div id="target"&gt;&lt;/div&gt;
		* &lt;script&gt;
        * $("#target").ejWaitingPopup({showOnInit: true});
		* // hide WaitingPopup using the hide method.
		* $("#target").ejWaitingPopup('hide');
		* &lt;/script&gt;
        	        * &lt;style&gt;
              #target {
            height: 200px;
            width: 600px;
            margin: 0 auto;
        }

       #target_WaitingPopup .e-image {
            display: block;
            height: 70px;
        }
	        * &lt;/style&gt;
		*@memberof ejWaitingPopup
		* @instance
        */
        hide: function () {
            this.maindiv.css("display", "none");
            this.model.showOnInit = false;
        },
		/**
        * Refreshes the WaitingPopup control by resetting the pop-up panel position and content position
		* @return jQuery
		* @example 
		*  &lt;div id="target"&gt;&lt;/div&gt;
		* &lt;script&gt;
        * $("#target").ejWaitingPopup({showOnInit: true});
		* // Initialize the WaitingPopup object.
		*   var popupObj = $("#target").data("ejWaitingPopup");
	    * popupObj.refresh();
	    * &lt;/script&gt;
        	        * &lt;style&gt;
              #target {
            height: 200px;
            width: 600px;
            margin: 0 auto;
        }

       #target_WaitingPopup .e-image {
            display: block;
            height: 70px;
        }
	        * &lt;/style&gt;
		* @example 
		*  &lt;div id="target"&gt;&lt;/div&gt;
		* &lt;script&gt;
        * $("#target").ejWaitingPopup({showOnInit: true});
		* // Refresh the WaitingPopup using refresh method.
		* $("#target").ejWaitingPopup('refresh');
		* &lt;/script&gt;
        	        * &lt;style&gt;
              #target {
            height: 200px;
            width: 600px;
            margin: 0 auto;
        }

       #target_WaitingPopup .e-image {
            display: block;
            height: 70px;
        }
	        * &lt;/style&gt;
		*@memberof ejWaitingPopup
		* @instance
        */
        refresh: function () {
            this._refreshPanel();
        },
		 /**
         * To configure text for the waiting popup.		
		 * @private
         */	 
        _setText: function (text) {
            if (text) {
                if (this.popupText) this.popupText.html(text);
                else {
                    this._generateTextTag(text);
                    this._setContentPosition();
                }
            }
            else if (this.popupText) {
                this.popupText.remove();
                this.popupText = null;
            }
        },
		 /**
         * To configure showImage for the waiting popup.		
		 * @private
         */	
        _showImage: function (boolean) {
            if (boolean) {
                this.popupImage = ej.buildTag("span.e-image");
                if (this.popupText) this.popupImage.insertBefore(this.popupText);
                else this.maindiv.append(this.popupImage);
            }
            else if (this.popupImage) {
                this.popupImage.remove();
                this.popupImage = null;
            }
        },
		/**
         * To configure setTemplate for the waiting popup.		
		 * @private
         */	
        _setTemplate: function () {
            var template = this.model.template;
            if (typeof template === "string") template = $(template);
            if (typeof template === "object" && typeof template.css === "function") 
                this.templateObj = template;
            else 
                this.templateObj = ej.buildTag("div", "", { "text-align": "center" }).append(template);

            this.templateObj.css({ "visibility": "visible", "display": "block" });
            this.maindiv.append(this.templateObj);
        },
		/**
         * To configure setTheme for the waiting popup.		
		 * @private
         */	
        _setTheme: function (skin) {
            this.maindiv.removeClass(this.model.cssClass ).addClass(skin);
        },

        // constructor function
		/**
         * Create the WaitingPopup widget
		 * @private
         */	
        _init: function () {
            this._initialize();
            this._render();
        },
		 /**
         * To configure the properties at runtime using SetModel		
		 * @private
         */	 
        _setModel: function (options) {
            var option;
            for (option in options) {
                switch (option) {
                    case "text": this._setText(options[option]); break;
                    case "cssClass ": this._setTheme(options[option]); break;
                    case "showOnInit": this._setVisibility(options[option]); break;
                    case "showImage": this._showImage(options[option]); this._setContentPosition(); break;
                    case "template":
                        this.maindiv.empty();
                        if (options[option]) {
                            this.model.template = options[option];
                            this._setTemplate();
                        }
                        else {
                            this.model.template = options[option] = null;
                            this._showImage(this.model.showImage);
                            if (this.model.text) this._generateTextTag(this.model.text);
                        }
                        this._setContentPosition();
                        break;
                }
            }
        },

        _destroy: function () {
            this.maindiv.remove();
        },
		 /**
         * To initialize the waiting popup		
		 * @private
         */	 
        _initialize: function () {
            this.maindiv = null;
            this.popupText = null;
            this.popupImage = null;
            this.templateObj = null;
        },

		 /**
         * Render Section For waiting popup		
		 * @private
         */	
        _render: function () {
			var oldWrapper = $("#" + this.element.context.id + "_WaitingPopup").get(0);
            if (oldWrapper)
                $(oldWrapper).remove();
            this.maindiv = ej.buildTag("div.e-waitpopup-pane e-widget " + this.model.cssClass  + "#" + this.element[0].id + "_WaitingPopup");
            if (this.model.template) {
                this._setTemplate();
            }
            else {
                this._showImage(this.model.showImage);
                if (this.model.text) {
                    this._generateTextTag(this.model.text);
                }
            }
            $('body').append(this.maindiv);
            this._setVisibility(this.model.showOnInit);
        },
		/**
         * To configure refreshPanel for the waiting popup	
		 * @private
         */	
        _refreshPanel: function () {
            this.maindiv.width(this.element.outerWidth());
            this.maindiv.height(this.element.outerHeight());
            this._setPanelPosition();
            this._setContentPosition();
        },
		/**
         * To configure setPanelPosition for the waiting popup	
		 * @private
         */	
        _setPanelPosition: function() {
            var location = this.element.offset();
            this.maindiv.css({
                "left": Math.ceil(location.left) + "px",
                "top": Math.ceil(location.top) + "px",
                "z-index": this._maxZindex() + 1
            });
        },
		/**
         * To configure setContentPosition for the waiting popup	
		 * @private
         */	
        _setContentPosition: function () {
            if (this.model.template == null) {
                var textHeight = 0, imgHeight = 0, targetHeight, top = null;
                targetHeight = this.element.outerHeight();
                if (this.popupText) textHeight = this.popupText.outerHeight();
                if (this.popupImage) imgHeight = this.popupImage.outerHeight();

                if (this.popupImage) {
                    top = Math.ceil((targetHeight - (imgHeight + textHeight)) / 2);
                    this.popupImage.css("top", top + "px");
                }
                if (this.popupText) {
                    if (!top) top = Math.ceil((targetHeight - textHeight) / 2);
                    this.popupText.css("top", top + "px");
                }
            }
            else {
                this.templateObj.css({
                    "position": "relative",
                    "left": Math.ceil((this.element.outerWidth() - this.templateObj.outerWidth()) / 2),
                    "top": Math.ceil((this.element.outerHeight() - this.templateObj.outerHeight()) / 2)
                });
            }
        },
		/**
         * To configure generateTextTag for the waiting popup	
		 * @private
         */	
        _generateTextTag: function (text) {
            this.popupText = ej.buildTag("div.e-text", text);
            this.maindiv.append(this.popupText);
        },
		/**
         * To configure setVisibility for the waiting popup	
		 * @private
         */
        _setVisibility: function (showOnInit) {
            if (showOnInit) this.show();
            else this.hide();
        },
		/**
         * To configure maxZindex for the waiting popup	
		 * @private
         */
        _maxZindex: function () {
            var elements = document.getElementsByTagName("div"), maxIndex = 0, i, zindex;
            for (i = 0; i < elements.length - 1; i++) {
                zindex = parseInt(elements[i].style.zIndex, 10);  // 10 - radix value
                if (zindex > maxIndex) {
                    maxIndex = zindex;
                }
            }
            return maxIndex;
        }
    });
})(jQuery, Syncfusion);;