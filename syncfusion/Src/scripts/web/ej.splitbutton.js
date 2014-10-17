/*!
*  filename: ej.splitbutton.js
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
       * @class ejSplitButton
       * @requires jQuery
       * @requires jquery.easing
       * @requires ej.core.js
       * @requires ej.data.js
       * @requires ej.splitbutton.js
       * @requires ej.menu.js
       * @requires ej.checkbox.js
   
       * @classdesc The Split button allows you to perform an action using clicking the button and choosing extra options from the dropdown button. The Split button also can display both text and images. 
       * @example 
       *&lt;button id="sbutton"&gt;File&lt;/button&gt;
       *&lt;ul id="target"&gt;
       *    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
       *    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
       *    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
       *&lt;/ul&gt;
       * &lt;script&gt;
       * // simple control creation
       *  $("#sbutton").ejSplitButton({targetID:"target",width:100});
       * &lt;/script&gt;
       */

    // Example plugin creation code
    // ejSample is the plugin name 
    // "ej.Sample" is "namespace.className" will hold functions and properties

    ej.widget("ejSplitButton", "ej.SplitButton", {
        // widget element will be automatically set in this
        element: null,
        // user defined model will be automatically set in this
        model: null,
        validTags: ["button"],
        _setFirst: false,
        //Root Css Class
        _rootCSS: "e-splitbutton",

        // default model
        defaults: {
            /// <summary>This Contains default property of Split button </summary>
            /**		
			* Specifies the size of the Button.	See {@link ButtonSize}
			* @default ej.ButtonSize.Normal
			* @type {String | Enum}
			* @example 
			*&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;
			* //To set size API value during initialization  
			* 	$("#sbutton").ejSplitButton({ targetID:"target",width:100, size: ej.ButtonSize.Mini});			
			  * &lt;/script&gt;
			 * @memberof ejSplitButton
			* @instance
			*/
            size: "normal",
            /**		
			* Specifies the width of the Split Button.
			* @default “28” pixel
			* @type {String | Number}
			* @example 
			*&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;
			* //To set width API value during initialization  
			* $("#sbutton").ejSplitButton({  targetID: "target",width:100 });			
			  * &lt;/script&gt;
			 * @memberof ejSplitButton
			* @instance
			*/
            width: "",
            /**		
			* Specifies the height of the Split Button.
			* @default “28” pixel
			* @type {String | Number}
			* @example
			*&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt; 
			* //To set height API value during initialization  
			* $("#sbutton").ejSplitButton({  targetID: "target",width:100,height: 28 });			 
			  * &lt;/script&gt;
			 * @memberof ejSplitButton
			* @instance
			*/
            height: "",
            /**		
			*Specifies the disabling of Split Button if enabled is set to false.
			* @default true
			* @type {Boolean}
			* @example 
			*&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;
			* //To set enabled API value during initialization  
			* $("#sbutton").ejSplitButton({  targetID: "target",width:100,enabled:  true });		
			  * &lt;/script&gt;
			
			 * @memberof ejSplitButton
			* @instance
			*/
            enabled: true,
            /**		
			*Specifies the text content for Split Button while initialization.
			* @default ""
			* @type {String}
			* @example 
			*&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;
			* //To set text API value during initialization  
			* $("#sbutton").ejSplitButton({  targetID: "target",width:100, text: "New" });		 
			  * &lt;/script&gt;
			 * @memberof ejSplitButton
			* @instance
			*/
            text: null,
            /**		
			*Specifies the contentType of the Split Button.See {@link ContentType}
			* @default ej.ContentType.TextOnly
			* @type {String | Enum}
			* @example
			*&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt; 
			* //To set contentType API value during initialization  
			* $("#sbutton").ejSplitButton({ targetID: "target",width:100, contentType:  ej.ContentType.TextOnly}); 
			  * &lt;/script&gt;
			 * @memberof ejSplitButton
			* @instance
			*/
            contentType: "textonly",
            /**		
			*Specifies the imagePosition of the Split Button.See {@link imagePositions}
			* @default ej.ImagePosition.ImageRight
			* @type {String | Enum}
			* @example 
			*&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;
			* //To set imagePositions API value during initialization  
			* $("#sbutton").ejSplitButton({targetID: "target",width:100, contentType: ej.ContentType.TextAndImage,
            *   imagePosition: ej.ImagePosition.ImageRight,prefixIcon:"e-uiLight e-icon e-handup"});
			  * &lt;/script&gt;
			* @memberof ejSplitButton
			* @instance
			*/
            imagePosition: "imageleft",
            /**		
			*Specifies the list content for Split Button while initialization
			* @default ""
			* @type {String}
			* @example 
			*&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;

			* //To set targetID API value during initialization  
			* $("#sbutton").ejSplitButton({targetID:"target",width:100 });
			  * &lt;/script&gt;
			* @memberof ejSplitButton
			* @instance
			*/
            targetID: null,
            /**		
			*Specifies the showRoundedCorner property for Split Button while initialization.
			* @default ""
			* @type {String}
			* @example 
			*&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;
			* //To set showRoundedCorner API value during initialization  
			* $("#sbutton").ejSplitButton({ targetID:"target",width:100,showRoundedCorner: true});
			  * &lt;/script&gt;
			* @memberof ejSplitButton
			* @instance
			*/
            showRoundedCorner: false,
            /**		
			*Specifies the image content for Split Button while initialization.
			* @default ""
			* @type {String}
			* @example 
			*&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;
			* //To set prefixIcon API value during initialization  
			* $("#sbutton").ejSplitButton({targetID: "target",width:100,contentType: "imageonly",prefixIcon:"e-uiLight e-icon e-handup" });
			 
			  * &lt;/script&gt;
 			* @memberof ejSplitButton
			* @instance
			*/
            prefixIcon: null,
            /**		
			*Specifies the image content for Split Button while initialization.
			* @default ""
			* @type {String}
			* @example 
			*&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;
			* //To set suffixIcon API value during initialization  
			* $("#sbutton").ejSplitButton({targetID:"target",width:100,contentType:"imageboth",prefixIcon:"e-uiLight e-icon-handup",suffixIcon:"e-uiLight e-icon-padlockclosed"});
			* &lt;/script&gt;
			* @memberof ejSplitButton
			* @instance
			*/
            suffixIcon: null,
            /**		
			*Set the root class for Split Button control theme
			* @default ""
			* @type {String}
			* @example 
			*&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;
			* //To set cssClass API value during initialization  
			* $("#sbutton").ejSplitButton({targetID: "target",width:100,cssClass: "gradient-lime"});
			  * &lt;/script&gt;
 			* @memberof ejSplitButton
			* @instance
			*/
            cssClass: "",
            /**		
			*Specifies the enableRTL property for Split Button while initialization.
			* @default false
			* @type {Boolean}
			* @example 
			*&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;
			* //To set enableRTL API value during initialization  
			* $("#sbutton").ejSplitButton({targetID: "target",width:100,enableRTL : true});
			  * &lt;/script&gt;
 			* @memberof ejSplitButton
			* @instance
			*/
            enableRTL: false,
            /**     
			 * Fires after Split Button control is created.
			 * @event
			 * @name ejSplitButton#create		
			 * @param {Object} argument Event parameters from button     
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the splite button model
			 * @param {string}  argument.type returns the name of the event
			 * @example 
			 *&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;
			 * //create event for split button
             * $("#sbutton"). ejSplitButton ({
             	targetID: "target",width:100,
             *      create: function (args) {}
             * });
               * &lt;/script&gt;
			 * @memberof ejSplitButton
			 * @instance
			 */
            create: null,
            /**     
			 * Fires when Button control is clicked successfully
			 * @event
			 * @name ejSplitButton#click		
			 * @param {Object} argument Event parameters from split button     
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the split button model
			 * @param {string}  argument.type returns the name of the event
			 * @param {object} argument.target  returns the target of the current object.
			 * @param {boolean}  argument.status return the button state
			 * @example 
			 *&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;
			 * //click event for split button
             * $("#sbutton"). ejSplitButton ({
             	targetID: "target",width:100,
             *      click: function (args) {}
             * });
               * &lt;/script&gt;
			 * @memberof ejSplitButton
			 * @instance
			 */
            click: null,
            /**     
			 * Fires when a menu item is Hovered in successfully
			 * @event
			 * @name ejSplitButton#itemMouseOver		
			 * @param {Object} argument Event parameters from split button     
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the split button model
			 * @param {string}  argument.type returns the name of the event
			 * @param {object} argument.event.element  returns the clicked menu item element
			 * @param {object} argument.event returns the event
			 * @param {String}  argument.event.ID  return the menu item id
			 * @param {String}  argument.event.Text  return the clicked menu item text
			 * @example 
			 *&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;
			 * //itemMouseOver event for split button
             * $("#sbutton"). ejSplitButton ({
             	targetID: "target",width:100,
             *      itemMouseOver: function (args) {}
             * });
               * &lt;/script&gt;
			 * @memberof ejSplitButton
			 * @instance
			 */
            itemMouseOver: null,
            /**     
			 * Fires when a menu item is Hovered out successfully
			 * @event
			 * @name ejSplitButton#itemMouseOut		
			 * @param {Object} argument Event parameters from split button     
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the split button model
			 * @param {string}  argument.type returns the name of the event
			 * @param {object} argument.event.element  returns the clicked menu item element
			 * @param {object} argument.event returns the event
			 * @param {String}  argument.event.ID  return the menu item id
			 * @param {String}  argument.event.Text  return the clicked menu item text
			 * @example 
			 *&lt;button id="sbutton"&gt;File&lt;/button&gt;
	*&lt;ul id="target"&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
	*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
	*&lt;/ul&gt;
	* &lt;script&gt;
			 * //itemMouseOut event for split button
             * $("#sbutton"). ejSplitButton ({
             	targetID: "target",width:100,
             *      itemMouseOut: function (args) {}
             * });
               * &lt;/script&gt;
			 * @memberof ejSplitButton
			 * @instance
			 */
            itemMouseOut: null,
            /**     
            * Fires when a menu item is clicked successfully
            * @event
            * @name ejSplitButton#itemSelected		
            * @param {Object} argument Event parameters from split button     
            * @param {boolean}  argument.cancel returns the cancel option value
            * @param {object}  argument.model returns the split button model
            * @param {string}  argument.type returns the name of the event
            * @param {object} argument.event.element  returns the clicked menu item element
            * @param {object} argument.selectedItem - returns the selected item
            * @param {String}  argument.event.menuId  return the menu id
            * @param {String}  argument.event.menuText  return the clicked menu item text
            * @example 
            *&lt;button id="sbutton"&gt;File&lt;/button&gt;
   *&lt;ul id="target"&gt;
   *    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
   *    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
   *    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
   *&lt;/ul&gt;
   * &lt;script&gt;
            * //itemSelected event for split button
            * $("#sbutton"). ejSplitButton ({
               targetID: "target",width:100,
            *      itemSelected: function (args) {}
            * });
              * &lt;/script&gt;
            * @memberof ejSplitButton
            * @instance
            */
            itemSelected: null,
            /**     
            * Fires when the Split Button is destroyed successfully
            * @event
            * @name ejSplitButton#destroy		
            * @param {Object} argument Event parameters from  split button     
            * @param {boolean}  argument.cancel returns the cancel option value
            * @param {object}  argument.model returns the split button model
            * @param {string}  argument.type returns the name of the event
            * @example 
            *&lt;button id="sbutton"&gt;File&lt;/button&gt;
   *&lt;ul id="target"&gt;
   *    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
   *    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
   *    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
   *&lt;/ul&gt;
   * &lt;script&gt;
            * //destroy event for split button
            * $("#sbutton"). ejSplitButton ({
               targetID: "target",width:100,
            *      destroy: function (args) {}
            * });
            * &lt;/script&gt;
            * @memberof ejSplitButton
            * @instance
            */
            destroy: null
        },
        //Data Types
        dataTypes: {
            size: "string",
            enabled: "boolean",
            showRoundedCorner: "boolean",
            text: "string",
            contentType: "enum",
            imagePosition: "enum",
            targetID: "string",
            prefixIcon: "string",
            suffixIcon: "string",
            cssClass: "string",
            enableRTL: "boolean"
        },
        // sample public function
        /**
        * To disable the split button  
		* @return jQuery
        * @example 
		 *&lt;button id="sbutton"&gt;File&lt;/button&gt;
		*&lt;ul id="target"&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
		*&lt;/ul&gt;
		* &lt;script&gt;
		* //To Disable the Split Button control.		
		* $("#sbutton").ejSplitButton({targetID: "target",width:100});
		* var SptObj=$("#sbutton").data("ejSplitButton");
        * SptObj.disable();
		* &lt;/script&gt;
		* @example 
		 *&lt;button id="sbutton"&gt;File&lt;/button&gt;
		*&lt;ul id="target"&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
		*&lt;/ul&gt;
		* &lt;script&gt;
		* //To Disable the Split Button control.		
		* $("#sbutton").ejSplitButton({targetID: "target",width:100});
		* $("#sbutton").ejSplitButton("disable");
		* &lt;/script&gt;
		*@memberof ejSplitButton
		* @instance
        */
        disable: function () {
            /// <summary>This function is  used to Disable the Split button Object</summary>
            this.element.addClass("e-disable");
            this.dropbutton.addClass("e-disable").attr("aria-disabled", true);
            this.model.enabled = false;
        },
        /**
        * To Enable the split button  
		* @return jQuery
        * @example 
		 *&lt;button id="sbutton"&gt;File&lt;/button&gt;
		*&lt;ul id="target"&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
		*&lt;/ul&gt;
		* &lt;script&gt;
		* //To Enable the Split Button control.		
		* $("#sbutton").ejSplitButton({targetID: "target",width:100});
		* var SptObj=$("#sbutton").data("ejSplitButton");
        * SptObj.enable();
		* &lt;/script&gt;
		* @example 
		 *&lt;button id="sbutton"&gt;File&lt;/button&gt;
		*&lt;ul id="target"&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
		*&lt;/ul&gt;
		* &lt;script&gt;
		* //To Enable the Split Button control.		
		* $("#sbutton").ejSplitButton({targetID: "target",width:100});
		* $("#sbutton").ejSplitButton("enable");
		* &lt;/script&gt;
		*@memberof ejSplitButton
		* @instance
        */
        enable: function () {
            /// <summary>This function is  used to Enable the Split button Object</summary>
            this.element.removeClass("e-disable");
            this.dropbutton.removeClass("e-disable").attr("aria-disabled", false);
            this.model.enabled = true;
        },
        // constructor function
        /**
         * Create the split button widget
		 * @private
         */
        _init: function () {
            this._initialize();
            this._controlStatus(this.model.enabled);
            this._wireEvents();
        },
        // all events bound using this._on will be unbind automatically
        /**
        * destroy the split button widget
		* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
		* @alias destroy
		* @return jQuery
        * @example 
		 *&lt;button id="sbutton"&gt;File&lt;/button&gt;
		*&lt;ul id="target"&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
		*&lt;/ul&gt;
		* &lt;script&gt;
		* //To Destroy the Split Button control.		
		* $("#sbutton").ejSplitButton({targetID: "target",width:100});
		* var SptObj=$("#sbutton").data("ejSplitButton");
        * SptObj.destroy();
		* &lt;/script&gt;
		* @example 
		 *&lt;button id="sbutton"&gt;File&lt;/button&gt;
		*&lt;ul id="target"&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Open..&lt;/a&gt;&lt;/li&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Save&lt;/a&gt;&lt;/li&gt;
		*    &lt;li&gt;&lt;a href="#"&gt;Delete&lt;/a&gt;&lt;/li&gt;
		*&lt;/ul&gt;
		* &lt;script&gt;
		* // to destroy the button		
		* $("#sbutton").ejSplitButton({targetID: "target",width:100});	
		* $("#sbutton").ejSplitButton("destroy");
		* &lt;/script&gt;
		* @memberof ejSplitButton
		* @instance
         */
        _destroy: function () {
            /// <summary>This function is  used to destroy the Split button Object</summary>
            this.element.removeClass(this.model.cssClass + " e-select e-corner-left e-btn e-disable e-split-btn");
            /*Remove dropbtn*/
            this.dropbutton.remove();
            $("#" + this.model.targetID).ejMenu('destroy');
            //this has to be worked out in Menu
            $("#" + this.model.targetID).insertAfter(this.element);
            $("#" + this.model.targetID).show();
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
                    case "width":
                        this._splitbtnWidth(options[option]);
                        break;
                    case "height":
                        this._splitbtnHeight(options[option]);
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
                    case "targetID":
                        this._setTargetId(options[option]);
                        break;
                    case "showRoundedCorner":
                        this._roundedCorner(options[option]);
                        break;
                    case "cssClass":
                        this._setSkin(options[option]);
                        break;
                    case "enableRTL":
                        this._setRTL(options[option]);
                        $("#" + this.model.targetID).ejMenu({ enableRTL: options[option] });
                        break;
                    case "itemMouseOver":
                        $("#" + this.model.targetID).ejMenu({ mouseOver: options[option] });
                        break;
                    case "itemMouseOut":
                        $("#" + this.model.targetID).ejMenu({ mouseOut: options[option] });
                        break;
                    case "itemSelected":
                        $("#" + this.model.targetID).ejMenu({ click: options[option] });
                        break;
                }
            }
        },
        /**
         * To configure the button text		
		 * @private
         */
        _setText: function (val) {
            /// <summary>This will set Text property of split button </summary>
            if (this.model.contentType == ej.ContentType.TextOnly) {
                this.element.html(val);
            } else {
                this.textspan.html(val);
            }
        },
        /**
         * To configure button's prefix image		
		 * @private
         */
        _setMajorIcon: function (val) {
            /// <summary>This will set Major Icon property of split button </summary>
            this.majorimgtag.removeClass(this.model.prefixIcon);
            this.majorimgtag.addClass(val);
        },
        /**
         * To configure button's suffix image		
		 * @private
         */
        _setMinorIcon: function (val) {
            /// <summary>This will set Minor Icon property of split button </summary>
            this.minorimgtag.removeClass(this.model.suffixIcon);
            this.minorimgtag.addClass(val);
        },
        _setTargetId: function (val) {
            this.model.targetID = val;
            this._renderContxtMenu();
        },
        /**
         * To configure button contents type		
		 * @private
         */
        _setContentType: function (val) {
            if (val != this.model.contentType) {
                this.element.empty();
                this.model.contentType = val;
                this._renderButtonContent();
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
                this._renderButtonContent();
            }
        },
        /**
         * To enable or disable the Right to Left behaviour 		
		 * @private
         */
        _setRTL: function (val) {
            if (val) {
                this.splitwrap.addClass("e-rtl e-btnrtl");
                this.dropbutton.css("border-right", "medium none");
                this.dropbutton.css("border-left-style", "");
            } else {
                this.splitwrap.removeClass("e-rtl e-btnrtl");
                this.dropbutton.css("border-left", "medium none");
                this.dropbutton.css("border-right-style", "");
            }
            this.model.enableRTL = val;
            this._roundedCorner(this.model.showRoundedCorner);
        },
        /**
         * To enable or disable the rounded corner behaviour 		
		 * @private
         */
        _roundedCorner: function (value) {
            if (value) {
                if (this.model.enableRTL) {
                    this.element.addClass("e-corner-right");
                    this.dropbutton.addClass("e-corner-left");

                    this.element.removeClass('e-corner-left');
                    this.dropbutton.removeClass('e-corner-right');
                }
                else {
                    this.element.addClass("e-corner-left");
                    this.dropbutton.addClass("e-corner-right");
                    this.element.removeClass("e-corner-right");
                    this.dropbutton.removeClass("e-corner-left");
                }
            }
            else {
                if (this.model.enableRTL) {
                    this.element.removeClass("e-corner-right");
                    this.dropbutton.removeClass("e-corner-left");
                }
                else {
                    this.element.removeClass('e-corner-left');
                    this.dropbutton.removeClass('e-corner-right');
                }
            }
        },
        /**
         * To configure enable/disable the splitbutton	
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
            this.element.removeClass(this.model.cssClass);
            this.dropbutton.removeClass(this.model.cssClass);
            this.element.addClass(skin);
            this.dropbutton.addClass(skin);
            $('#' + this.model.targetID).ejMenu('option', 'skin', skin);
        },
        /**
         * To initialize the button		
		 * @private
         */
        _initialize: function () {
            /// <summary>This function is  used to Initialize the Split button Object</summary>
            if (this.element.is("button")) {
                this._render();
            } else {
                this.element.removeClass("e-splitbutton");//need to change in src level
            }
            this._timeout = null;
        },
        /*Render Section For DifferentTypes*/
        /**
         * Render Section For DifferentTypes		
		 * @private
         */
        _render: function () {
            /// <summary>This function is  used to Render the Split button Object</summary>
            this.element.addClass(this.model.cssClass + " e-btn e-select e-split-btn").attr("role", "button");
            if ((this.model.text == null) || (this.model.text == "")) {
                this.model.text = this.element.text();
            }
            else
                this.element.attr("aria-describedby", this.model.text);
            this.element.empty();
            /*Creating Wrapper*/
            this.splitwrap = ej.buildTag('span.e-split e-widget');
            this.splitwrap.insertBefore(this.element);
            this.innerWrap = ej.buildTag('span.e-in-wrap e-box e-padding');
            this.splitwrap.append(this.innerWrap);
            this.wrapper = this.splitwrap;
            /*DropDown Button*/
            this.dropbutton = ej.buildTag('button.e-split-btn e-btn e-select ' + this.model.cssClass + ' e-drp-btn#' + this.element[0].id + 'drpbtn', "", {}, { type: "button" });
            this.dropdownimg = ej.buildTag('span.e-icon e-down-arrow');
            this.btnimgwrap = ej.buildTag('div.e-split-btn-div');
            this.btnimgwrap.append(this.dropdownimg);
            this.dropbutton.append(this.btnimgwrap);
            this.dropbutton.insertAfter(this.element);
            if (this.model.contentType == ej.ContentType.TextOnly) {
                this.dropbutton.addClass("e-btn-txt");
            } else {
                this.dropbutton.addClass("e-rht-btn");
            }

            /*width and height setting*/
            this._setSize(this.model.size);
            this.element.addClass("e-left-btn");
            this._renderButtonContent();
            this.innerWrap.append(this.element, this.dropbutton);
            /*Rendering Context menu*/
            this._renderContxtMenu();
            this._roundedCorner(this.model.showRoundedCorner);
            this._setRTL(this.model.enableRTL);
        },
        /**
         * Render section for button content
		 * @private
         */
        _renderButtonContent: function () {
            /*Image and Text*/
            this.textspan = ej.buildTag('span.e-btntxt', this.model.text);
            this.majorimgtag = ej.buildTag('span.e-icon ' + this.model.prefixIcon);
            this.minorimgtag = ej.buildTag('span.e-icon ' + this.model.suffixIcon);
            this.imgtxtwrap = ej.buildTag('div');
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
        /*Height of the splitButton*/
        /**
         * To configure size of the button		
		 * @private
         */
        _setSize: function (val) {
            var ht = this.model.height, wd = this.model.width;
            switch (val) {
                case "mini":
                    if (ht == "") ht = "28px";
                    if (wd == "") wd = "63px";
                    this._splitbtnHeight(ht);
                    this._splitbtnWidth(wd);
                    this.element.css('font-size', '12px');
                    break;
                case "small":
                    if (ht == "") ht = "32px";
                    if (wd == "") wd = "89px";
                    this._splitbtnHeight(ht);
                    this._splitbtnWidth(wd);
                    this.element.css('font-size', '13px');
                    break;
                case "medium":
                    if (ht == "") ht = "36px";
                    if (wd == "") wd = "113px";
                    this._splitbtnHeight(ht);
                    this._splitbtnWidth(wd);
                    this.element.css('font-size', '14px');
                    break;
                case "large":
                    if (ht == "") ht = "40px";
                    if (wd == "") wd = "130px";
                    this.element.css('font-size', '15px');
                    this._splitbtnHeight(ht);
                    this._splitbtnWidth(wd);
                    break;
                default:
                    this._splitbtnHeight(ht);
                    this._splitbtnWidth(wd);
                    break;
            }
        },
        /**
         * To configure height for the split button		
		 * @private
         */
        _splitbtnHeight: function (val) {
            if ((val == "") || (val == null)) val = '30px';
            this.splitwrap.css("height", val);
        },
        /*Width of the splitButton*/
        /**
         * To configure width for the split button		
		 * @private
         */
        _splitbtnWidth: function (val) {
            this.splitwrap.css("width", val);
        },
        /*Context menu Rendering*/
        /**
         * Render section for Context menu Rendering	
		 * @private
         */
        _renderContxtMenu: function () {
            $("#" + this.model.targetID).ejMenu({
                menuType: ej.MenuType.ContextMenu,
                openOnClick: false,
                contextMenuTarget: "",
                fields: this.model.fields,
                showArrow: true,
                cssClass: this.model.cssClass,
                enableRTL: this.model.enableRTL,
                mouseover: $.proxy(this._itemMouseOver, this),
                mouseout: $.proxy(this._itemMouseOut, this),
                click: $.proxy(this._itemClick, this)
            });
        },
        /**
         * Section For handle the item click event for the split button
		 * @private
         */
        _itemClick: function (args) {
            args = { status: this.model.enabled,ID: args.ID, text: args.text};
            this._trigger("itemSelected", args);
        },
        /**
         * Section For handle the item MouseOver event for the split button
		 * @private
         */
        _itemMouseOver: function (args) {
            this._trigger("itemMouseOver", args);
        },
        /**
         * Section For handle the item MouseOut event for the split button
		 * @private
         */
        _itemMouseOut: function (args) {
            this._trigger("itemMouseOut", args);
        },
        /*-----------------------Event Handlers -----------------------------------------*/
        /**
         * Wiring the events to button control		
		 * @private
         */
        _wireEvents: function () {
            /// <summary>This function is  used to Apply Events in the Split button Object</summary>
            /*element*/
            this._on(this.element, "click", this._btnMouseClick);
            this._on(this.element, "mousedown", this._btnMouseDown);

            /*DrpBTN*/
            this._on(this.dropbutton, "click", this._btnMouseClick);
            /*DocClk*/
            this._on($(document), "mousedown", this._docrhtclk);
        },
        /*EVENT functionalities*/
        /**
         * Section For handle the click event
		 * @private
         */
        _btnMouseClick: function (e) {
            var args, btnpos, btnposx, btnposy, targetElement, poscur = 1;
            if (!$(e.currentTarget).hasClass("e-disable")) {
                if (e.currentTarget.id != this.element[0].id + "drpbtn") {
                    args = { status: this.model.enabled };
                    this._trigger("click", args);
                } else {
                    /*Context Menu Functionality*///need to write enableRTL
                    targetElement = this.dropbutton;
                    btnpos = this.dropbutton.offset();
                    btnposx = btnpos.left - poscur;
                    btnposy = (btnpos.top + this.dropbutton.outerHeight()) - poscur;
                    if (this.contstatus) {
                        this._hidecontext(e);
                    } else {
                        if (this.model.enableRTL) {
                            $("#" + this.model.targetID).ejMenu('show', btnposx - ($("#" + this.model.targetID).width() - this.dropbutton.width()), btnposy, targetElement, e);
                            this.contstatus = true;
                        } else {
                            $("#" + this.model.targetID).ejMenu('show', btnposx, btnposy, targetElement, e);
                            this.contstatus = true;
                        }
                        this.element.bind("click", $.proxy(this._hidecontext, this));
                    }

                }
                if (this.contstatus)
                    this._on($(document), "mousedown", this._documentClick);
            }
        },
        /**
         * Section For handle mouse down action.
		 * @private
         */
        _btnMouseDown: function (e) {
            if (!$(e.currentTarget).hasClass("e-disable")) {
                this._docrhtclk(e);
            }
        },
        /**
         * Section For handle hidecontext action.
		 * @private
         */
        _hidecontext: function (e) {
            if (!$(e.target).is(this.element) && !$(e.target).is(this.textspan) &&
					  !$(e.target).is(this.imgtxtwrap) && !$(e.target).is(this.splitwrap) && !$(e.target).parents().is($("#" + this.model.targetID))) {
                $("#" + this.model.targetID).ejMenu('hide', e);
                this.contstatus = false;
                this.element.unbind("click", $.proxy(this._hidecontext, this));
                this._off($(document), "mousedown", this._documentClick);
            }
        },
        /**
         * Section For handle on document click action.
		 * @private
         */
        _documentClick: function (e) {
            if (!$(e.target).is(this.element) && !$(e.target).is(this.textspan) &&
            !$(e.target).is(this.imgtxtwrap) && !$(e.target).is(this.splitwrap) && !$(e.target).parents().is($("#" + this.model.targetID))) {
                $("#" + this.model.targetID).ejMenu('hide', e);
                this.contstatus = false;
                this._off($(document), "mousedown", this._documentClick);
            }
        },
        /**
         * Section For handle document right click action.
		 * @private
         */
        _docrhtclk: function (e) {
            var isRightClick, targetElement;
            isRightClick = false;
            if (e.button) {
                isRightClick = (e.button == 2);
            } else if (e.which) {
                isRightClick = (e.which == 3); //for Opera
            }
            targetElement = e.target;
            if (isRightClick) {
                e.preventDefault();
            }
        },
        /**/
    });
    /**
	 * Enum for button content mode.	 
	 * @enum {string}
	 * @global 
	 */
    ej.ContentType = { TextOnly: "textonly", ImageOnly: "imageonly", ImageBoth: "imageboth", TextAndImage: "textandimage", ImageTextImage: "imagetextimage" };
    /**
	 * Enum for Button positioning	 
	 * @enum {string}
	 * @global 
	 */
    ej.ImagePosition = { ImageRight: "imageright", ImageLeft: "imageleft", ImageTop: "imagetop", ImageBottom: "imagebottom" };
    /**
	 * Enum for various button sizes	 
	 * @enum {string}
	 * @global 
	 */
    ej.ButtonSize = { Mini: "mini", Small: "small", Medium: "medium", Large: "large" };
})(jQuery, Syncfusion);;