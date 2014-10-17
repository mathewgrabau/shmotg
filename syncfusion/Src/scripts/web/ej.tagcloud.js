/*!
*  filename: ej.tagcloud.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/*!
*  filename: ej.tagcloud.js
*  version : 12.1
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the tagCloud control.
* @copyright Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
* @version 12.1 
* @author <a href="mailto:licensing@syncfusion.com">Syncfusion Inc</a>
*/
(function ($, ej, undefined) {
    // ejTagcloud is the plugin name 
    // "ej.Tagcloud" is "namespace.className" will hold functions and properties
    /**
    * @namespace ej
	* @class ejTagCloud
	* @requires jQuery
	* @requires ej.core.js
    * @requires ej.data.js
    * @requires ej.tagcloud.js
	* @classdesc The TagCloud allows the user to display a list of links or tags with a structured cloud format where the importance of the tags can differentiate with varied font sizes, colors, and styles.
	* @example 
	* &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
    * &lt;script&gt; 
	*$(function () {
	*	// document ready
	*	// initialize the array of data for tagcloud input	
	* // simple tagcloud creation
	*	$("#tagcloud").ejTagCloud({ 
	*             dataSource:  window.websiteCollection,
	*             titleText: "Tech Sites"
	*       });
	*});
    * &lt;/script&gt;
    */
    ej.widget("ejTagCloud", "ej.TagCloud", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _rootCSS: "e-tagcloud",
        _setFirst: false,

        // default model
        defaults: {
            /**		
			* Specify the CSS class to button to achieve custom theme.
			* @default ""
			* @type {string}
			* @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
			* // Set the CSS class during initialization. 			
			* 	$("#tagcloud").ejTagCloud({dataSource: window.websiteCollection,cssClass  : "gradient-lime",titleText: "Tech Sites" });			 			
            * &lt;/script&gt;
			 * @memberof ejTagCloud
			* @instance
			*/
            cssClass : "",
            /**		
			* The dataSource contains the list of data to display in a cloud format. Each data contains a link url, frequency to categorize the font size and a display text.
			* @default null
			* @type {object}
			* @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
			* //Initialize the TagCloud with the dataSource value specified		           
            * $("#tagcloud").ejTagCloud({ dataSource: window.websiteCollection,titleText: "Tech Sites" });	
            * &lt;/script&gt;
			 * @memberof ejTagCloud
			* @instance
			*/
            dataSource: null,
            /**		
			* Define the query to retrieve the data from online server. The query is used only when the online dataSource is used.
			* @default null
			* @type {object}
			* @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
			* //Initialize the TagCloud with the query value specified		
            * var dataManger = ej.DataManager({
		    *       url:"http://mvc.syncfusion.com/Services/Northwnd.svc/"
			*});
			* var query = ej.Query().from("Orders").take(10);    
        * $("#tagcloud").ejTagCloud({
        *        titleText: "Employee List",
        *       dataSource: dataManger,
        *      query: query,
        *     fields: { text: "CustomerID" , frequency: "EmployeeID" }
        * });
    * &lt;/script&gt;
			 * @memberof ejTagCloud
			* @instance
			*/
            query: null,
            /**		
			* Defines the mapping fields for the data items of the TagCloud.
			* @default null 
			* @type {Object}
			* @param {Object} options Defines the mapping fields for the data items of the TagCloud.
			* @param {String} options.text - This component's name, sets {@link Component#text}
            * @param {String} options.url - Whether this component is vislble, sets {@link Component#url}
			* @example 
      * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
			  * $(function () {
     * // Initialize the TagCloud with the fields value specified    
            
     * $("#tagcloud").ejTagCloud({
       * dataSource:window.websiteCollection,
       titleText: "Tech Sites",
      * fields: { text: "text" , url:"url",frequency: "frequency"}  
     * });
      * });

     * &lt;/script&gt;
			* @memberof ejTagCloud
			* @instance
			*/
            fields: /** @lends ejTagCloud# */ { 
				/**		
                 * Defines the tag value or display text.
				 * @alias ejTagCloud#fields->text
				 * @type String
                 */
			text: "text", 
				/**		
                 * Defines the url link to navigate while click the tag.
				 * @alias ejTagCloud#fields->url
				 * @type String
                 */
			url: "url", 
				/**		
                 * Defines the frequency number to categorize the font size.
				 * @alias ejTagCloud#fields->frequency
				 * @type Number
                 */
			frequency: "frequency" 
			},
            /**		
           * Shows or hides the TagCloud title. When this set to false, it hides the TagCloud header.
           * @default true
           * @type {boolean}
           * @example 
           * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
           * &lt;script&gt;
           * // Set the showTitle during initialization. 			
           * 	$("#tagcloud").ejTagCloud({     dataSource: window.websiteCollection, showTitle : false  });			 
          
          * &lt;/script&gt;
            * @memberof ejTagCloud
           * @instance
           */
            showTitle: true,
            /**		
			* Sets the title text for the TagCloud. To show the title text, the showTitle property should be enabled.
			* @default "Title"
			* @type {string}
			* @example 
      * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
    * &lt;script&gt;
			* // Set the titleText during initialization. 			
			* 	$("#tagcloud").ejTagCloud({  dataSource:  window.websiteCollection,titleText : "Cloud Data"  });			 
		 
        * &lt;/script&gt;
			 * @memberof ejTagCloud
			* @instance
			*/
            titleText: "Title",
            /**		
			* Sets the title image for the TagCloud. To show the title image, the showTitle property should be enabled.
			* @default null
			* @type {string}
			* @example 
      * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
			* // Set the titleImage during initialization. 			
			* 	$("#tagcloud").ejTagCloud({  dataSource: window.websiteCollection,titleImage: '../images/bird.png' ,titleText: "Tech Sites"  });			 
			 
      * &lt;/script&gt;
			 * @memberof ejTagCloud
			* @instance
			*/
            titleImage: null,
            /**		
			* Defines the format for the TagCloud to display the tag items.See {@link Format} 
			* @default ej.Format.Cloud
			* @type {String | Enum}
			* @example 
      * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
			* // Set the format during initialization. 			
			* 	$("#tagcloud").ejTagCloud({ dataSource:  window.websiteCollection,format: ej.Format.Cloud,titleText: "Tech Sites" });			
			
    * &lt;/script&gt;
			 * @memberof ejTagCloud
			* @instance
			*/
            format: "cloud",
            /**		
           * Sets the TagCloud and tag items direction as right to left alignment.
           * @default false
           * @type {boolean}
           * @example 
           * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
          * &lt;script&gt;
           * // Set the enableRTL during initialization. 			
           * 	$("#tagcloud").ejTagCloud({ dataSource:  window.websiteCollection,enableRTL : false,titleText: "Tech Sites"  });			 
          
          * &lt;/script&gt;
            * @memberof ejTagCloud
           * @instance
           */
            enableRTL: false,
            /**		
           * Sets the minimum font size value for the tag items. The font size for the tag items will be generated in between the minimum and maximum font size values.
           * @default "10px"
           * @type {String | Number}
           * @example 
           * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
          * &lt;script&gt;
           * // Set the minFontSize during initialization. 			
           * 	$("#tagcloud").ejTagCloud({dataSource:  window.websiteCollection, minFontSize : "10px" ,titleText: "Tech Sites" });			 
          
            * &lt;/script&gt;
            * @memberof ejTagCloud
           * @instance
           */
            minFontSize: "10px",
            /**		
           * Sets the maximum font size value for the tag items. The font size for the tag items will be generated in between the minimum and maximum font size values.
           * @default "40px"
           * @type {String | Number}
           * @example 
           * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
           * // Set the maxFontSize during initialization. 			
           * 	$("#tagcloud").ejTagCloud({ dataSource:  window.websiteCollection,maxFontSize : "10px" ,titleText: "Tech Sites" });			 
           
            * &lt;/script&gt;
            * @memberof ejTagCloud
           * @instance
           */
            maxFontSize: "40px",

            //Events
            /**     
            * Event triggers when the cursor hovers on a tag item
            * @event
            * @name ejTagCloud#mouseover 	
            * @param {Object} argument Event parameters from button     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the tagcloud model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.text return current tag name
            * @param {string}  argument.url return current url link
            * @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
          * &lt;script&gt;
            * //mouse over event for tagCloud
            * $("#tagcloud").ejTagCloud({
                 *  dataSource: window.websiteCollection,
                 *titleText: "Tech Sites",
            *    mouseover: function (args) {}
            * });   

           * &lt;/script&gt;   
            * @memberof ejTagCloud
            * @instance
            */
            mouseover: null,
            /**     
            * Event triggers when the cursor leaves out from a tag item
            * @event
            * @name ejTagCloud#mouseout 	
            * @param {Object} argument Event parameters from button     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the tagcloud model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.text return current tag name
            * @param {string}  argument.url return current url link
            * @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
          * &lt;script&gt;
            * //mouseout event for tagCloud
            * $("#tagcloud").ejTagCloud({
                *  dataSource: window.websiteCollection,
                *  titleText: "Tech Sites",
            *    mouseout: function (args) {}
            * });           
            * &lt;/script&gt;     
            * @memberof ejTagCloud
            * @instance
            */
            mouseout: null,
            /**     
            * Event triggers when the TagCloud items are clicked
            * @event
            * @name ejTagCloud#click 	
            * @param {Object} argument Event parameters from button     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the tagcloud model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.text return current tag name
            * @param {string}  argument.url return current url link
            * @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * //click event for tagCloud
            * $("#tagcloud").ejTagCloud({
                *  dataSource: window.websiteCollection,
                *  titleText: "Tech Sites",
            *    click: function (args) {}
            * });        
            * &lt;/script&gt;    
            * @memberof ejTagCloud
            * @instance
            */
            click: null,
            /**     
            * Event triggers when the TagCloud are created
            * @event
            * @name ejTagCloud#create 	
            * @param {Object} argument Event parameters from button     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the tagcloud model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * //create event for tagCloud
            * $("#tagcloud").ejTagCloud({
                *  dataSource: window.websiteCollection,
                *  titleText: "Tech Sites",
            *    create: function (args) {}
            * });        
            * &lt;/script&gt;    
            * @memberof ejTagCloud
            * @instance
            */
            create: null,
            /**     
            * Event triggers when the TagCloud are destroyed
            * @event
            * @name ejTagCloud#destroy 	
            * @param {Object} argument Event parameters from button     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the tagcloud model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * //destroy event for tagCloud
            * $("#tagcloud").ejTagCloud({
                *  dataSource: window.websiteCollection,
                *  titleText: "Tech Sites",
            *    destroy: function (args) {}
            * });        
            * &lt;/script&gt;    
            * @memberof ejTagCloud
            * @instance
            */
            destroy: null
        },
        /**
      * Specify the data types for default properties 
      * @private
      */
        dataTypes: {
            cssClass : "string",
            showTitle: "boolean",
            titleText: "string",
            titleImage: "string",
            format: "enum",
            enableRTL: "boolean",
            dataSource: "data",
            query: "data",
            fields: "data"
        },

        // constructor function
        /**
       * Create the TagCloud widget
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
                    case "fields":
                    case "query":
                    case "dataSource":
                    case "minFontSize":
                    case "maxFontSize":
                        this._refreshTagItems(option, options[option]); break;
                    case "showTitle": this._showTitle(options[option]); break;
                    case "titleText": this._title(options[option]); break;
                    case "titleImage": this._titleImage(options[option]); break;
                    case "cssClass ": this._changeSkin(options[option]); break;
                    case "format": this._format(options[option]); break;
                    case "enableRTL": this._rtl(options[option]); break;
                }
            }
        },

        _refreshTagItems: function (key, value) {
            this.model[key] = value;
            this.ul.empty();
            this._checkDataBinding();
        },
        /**
         * Section For enable or disable the title
		 * @private
         */
        _showTitle: function (boolean) {
            if (boolean) this._generateTitle();
            else {
                this.titleText.remove();
                this.titleText = null;
            }
        },
        /**
        * To configure TagCloud Title		
        * @private
        */
        _title: function (text) {
            if (this.titleText) {
                if (text) {
                    if (this.text) this.text.html(text);
                    else this._generateTextTag(text);
                }
                else if (this.text) {
                    this.text.remove();
                    this.text = null;
                }
            }
        },
        /**
         * Section For Sets the title image for the TagCloud
		 * @private
         */
        _titleImage: function (imagePath) {
            if (this.titleText) {
                if (imagePath) {
                    if (this.image) this.image.attr("src", imagePath);
                    else this._generateImageTag(imagePath);
                }
                else if (this.image) {
                    this.image.remove();
                    this.image = null;
                }
            }
        },
        /**
        * To configure the custom theme for TagCloud using cssClass  property		
        * @private
        */
        _changeSkin: function (skin) {
            if (this.model.cssClass  != skin) {
                this.element.removeClass(this.model.cssClass ).addClass(skin);
            }
        },
        /**
        * Inserts a new item into the TagCloud
		* @alias insert
		* @return jQuery
		* @example 
	
    * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
   *   var tagObj="";
  * var tag = { text: "google", url: "http://www.google.com", frequency: 12 };
      * $(function () {
  * // document ready
  * // initialize the array of data for tagcloud input
  * $("#tagcloud").ejTagCloud({ 
  *             dataSource: window.websiteCollection,
  *             titleText: "Tech Sites"
  * });
 * //initialize the tagCloud object
 * tagObj = $("#tagcloud").data("ejTagCloud");
* //To Inserts a new item into the TagCloud
 * tagObj.insert(tag);
  *       });     
  * &lt;/script&gt;
       
		* @example 
		
     * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
    * &lt;script&gt;
    * var tag = { text: "google", url: "http://www.google.com", frequency: 12 };
    *$(function () {
  * // document ready
  * // initialize the array of data for tagcloud input  
  * $("#tagcloud").ejTagCloud({ 
  *             dataSource: window.websiteCollection,titleText: "Tech Sites"
  * });  
         * $("#tagcloud").ejTagCloud("insert", tag);        
   * });
        * &lt;/script&gt;
		* @memberof ejTagCloud
		* @instance
        */
        insert: function (tag) {
            if ($.trim(tag.text)) {
                this.ul.append(this._generateLi(tag, this._getMapper()));
            }
        },
        /**
        * Inserts a new item into the TagCloud at a particular position. 
		* @alias insertAt
		* @return jQuery
		* @example 
  * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
      * var tag = { text: "google", url: "http://www.google.com", frequency: 12 };
      * var tagObj="";
      *$(function () {
  * // document ready 
  * $("#tagcloud").ejTagCloud({
  * dataSource:window.websiteCollection,
  * titleText: "Tech Sites"
    * });
   *  tagObj = $("#tagcloud").data("ejTagCloud");
   tagObj.insertAt(tag,2);

    * });
      * &lt;/script&gt;
		* @example 
    * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
* var tag = { text: "google", url: "http://www.google.com", frequency: 12 };
      *$(function () {
  * // document ready 
      * $("#tagcloud").ejTagCloud({
      * dataSource:window.websiteCollection,
      * titleText: "Tech Sites"
      * }); 
        * $("#tagcloud").ejTagCloud("insertAt", tag, 2);
        * });
        
      * &lt;/script&gt;
		* @memberof ejTagCloud
		* @instance
        */
        insertAt: function (tag, position) {
            if ($.trim(tag.text)) {
                $(this.ul.children()[position - 1]).before(this._generateLi(tag, this._getMapper()));
            }
        },
        /**
        * Removes the item from the TagCloud based on the name. It removes all the tags which have the corresponding name 
		* @alias remove
		* @return jQuery
		 * @param {string} name  name of the tag.
		* @example 
    
    * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
   *   var tagObj="";
  * var tag = { text: "google", url: "http://www.google.com", frequency: 12 };
      * $(function () {
  * // document ready
  * // initialize the array of data for tagcloud input
  
  
  * $("#tagcloud").ejTagCloud({ 
  *             dataSource: window.websiteCollection,
  *             titleText: "Tech Sites"
  * });
 * //initialize the tagCloud object
 * tagObj = $("#tagcloud").data("ejTagCloud");
* //To Inserts a new item into the TagCloud
 * tagObj.remove(tag);
  *       });     
  * &lt;/script&gt;
		* @example 
     * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
    * &lt;script&gt;
    * var tag = { text: "google", url: "http://www.google.com", frequency: 12 };
    *$(function () {
  * // document ready
  * // initialize the array of data for tagcloud input

  
  * $("#tagcloud").ejTagCloud({ 
  *             dataSource: window.websiteCollection,
  *             titleText: "Tech Sites"
  * });
  
         * $("#tagcloud").ejTagCloud("remove", tag);
        
   * });
        * &lt;/script&gt;

		* @memberof ejTagCloud
		* @instance
        */
        remove: function (txt) {
            var li = this.ul.children(), liTag, i;
            for (i = 0; i < li.length; i++) {
                liTag = $(li[i]);
                if (liTag.children()[0].innerHTML == txt)
                    liTag.remove();
            }
        },
        /**
        * Removes the item from the TagCloud based on the position. It removes the tags from the the corresponding position only. 
		* @alias removeAt
		* @return jQuery
		* @param {number} position  position of tag item.
		* @example 
        * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
      * var tagObj = "";
      * var tag = { text: "google", url: "http://www.google.com", frequency: 12 };
      *$(function () {       
  * // document ready   
           * $("#tagcloud").ejTagCloud({
        * dataSource:window.websiteCollection,
        * titleText: "Tech Sites"
          * });
   
    * //initialize the tagCloud object
    * var tagObj = $("#tagcloud").data("ejTagCloud");
    * // Removes the item from the TagCloud based on the position.
  
* tagObj.removeAt(2);
    * });
  
    * &lt;/script&gt;
		* @example 
     &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
      *$(function () {
      * // document ready
      
        * $("#tagcloud").ejTagCloud({
        * dataSource:window.websiteCollection,
        * titleText: "Tech Sites"
        * });
         * $("#tagcloud").ejTagCloud("removeAt", 4);
        * });
      * &lt;/script&gt;
		* @memberof ejTagCloud
		* @instance
        */
        removeAt: function (position) {
            var li = this.ul.children();
            $(li[position - 1]).remove();
        },
        /**
        * To configure the TagCloud format		
        * @private
        */
        _format: function (format) {
            if (format == "cloud") {
                this.ul.removeClass("e-list");
                this.ul.addClass("e-cloud");
            }
            else if (format == "list") {
                this.ul.removeClass("e-cloud");
                this.ul.addClass("e-list");
            }
        },
        /**
        * destroy the tagCloud widget
		* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
		* @private
        */
        _destroy: function () {
            this.element.removeClass("e-widget " + this.model.cssClass );
            this.element.empty();
        },
        /**
        * To initialize the TagCloud		
        * @private
        */
        _initialize: function () {
            this.minFreq = 0;
            this.maxFreq = 30;
            this.ul = null;
            this.titleText = null;
            this.image = null;
            this.text = null;
        },
        /**
        * Render Section For Tagcloud		
        * @private
        */
        _render: function () {
            this.element.addClass("e-widget " + this.model.cssClass );
            if (this.model.showTitle) this._generateTitle();
            this._renderWrapper();
            this._checkDataBinding();
            this._checkProperties();
        },
        /**
        * To configure the tagCloud title Text
        * @private
        */
        _generateTitle: function () {
            this.titleText = ej.buildTag("div.e-header e-title");
            if (this.model.titleImage)
                this._generateImageTag(this.model.titleImage);
            if (this.model.titleText)
                this._generateTextTag(this.model.titleText);
            if (this.ul) this.titleText.insertBefore(this.ul);
            else this.element.append(this.titleText);
        },
        /**
         * To configure the tagCloud title image
		 * @private
         */
        _generateImageTag: function (titleImage) {	
			if(!this.image)
				this.image = $('<img class="e-title-img" src="' + titleImage + '" />');
			if(this.text && !this.model.titleImage) this.image.insertBefore(this.text);			
			else this.titleText.append(this.image);
        },		
        /**
        * Section for generate Title Text 
        * @private
        */
        _generateTextTag: function (titleText) { 
			if(!this.text) this.text = ej.buildTag("span", titleText);					
			this.titleText.append(this.text);
        },		
        /**
         * Render Section For TagCloud		
		 * @private
         */
        _renderWrapper: function () {
            var format;
            format = (this.model.format == "list") ? "list" : "cloud";
            this.ul = ej.buildTag("ul.e-ul e-box e-" + format);
            this.element.append(this.ul);
        },
        /**
        * Section for rendering tagCloud items
        * @private
        */
        _renderItems: function (list) {
            this._generateTagItems(list);
            this.ul.removeClass("e-load");
        },

        _checkProperties: function () {
            if (this.model.enableRTL) this._rtl(this.model.enableRTL);
        },
        /**
        * To enable or disable the Right to Left behaviour 		
        * @private
        */
        _rtl: function (boolean) {
            if (boolean) this.element.addClass("e-rtl");
            else this.element.removeClass("e-rtl");
        },
        /**
        * Section for check whether collection of items is local or remote data	
        * @private
        */
        _checkDataBinding: function () {
            var source = this.model.dataSource;
            if (source != null) {
                this.ul.addClass("e-load");
                if (ej.DataManager && source instanceof ej.DataManager)
                    this._initDataSource(source);
                else
                    this._renderItems(source);
            }
        },
        /**
       * Section for render items with Remote Data	
       * @private
       */
        _initDataSource: function (source) {
            var proxy = this;
            var queryPromise = source.executeQuery(this._getQuery());
            queryPromise.done(function (e) {
                proxy._renderItems(e.result);
            }).fail(function (e) {
                proxy.ul.removeClass("e-load");
            });
        },
        /**
        * Section for set attributes to tagCloud items
        * @private
        */
        _setAttributes: function (data, element) {
            if (data) {
                for (var key in data)
                    element.attr(key, data[key]);
            }
        },

        _getQuery: function () {
            if (ej.isNullOrUndefined(this.model.query)) {
                var column = [], queryManager = ej.Query(), mapper = this.model.fields;
                for (var col in mapper) {
                    if (col !== "tableName")
                        column.push(mapper[col]);
                }
                if (column.length > 0)
                    queryManager.select(column);
                if (!this.model.dataSource.dataSource.url.match(mapper.tableName + "$"))
                    !ej.isNullOrUndefined(mapper.tableName) && queryManager.from(mapper.tableName);
            }
            else queryManager = this.model.query;
            return queryManager;
        },

        _generateTagItems: function (list) {
            var i, mapField = this._getMapper();
            this.minFreq = Math.min.apply(Math, list.map(function (o) { return o[mapField._freq]; }))
            this.maxFreq = Math.max.apply(Math, list.map(function (o) { return o[mapField._freq]; }))

            for (i = 0; i < list.length; i++) {
                this.ul.append(this._generateLi(list[i], mapField));
            }
        },
        /**
        * Section for mapping fields
        * @private
        */
        _getMapper: function () {
            var mapper = this.model.fields, mapFld = { _text: null, _freq: null, _url: null };
            mapFld._text = (mapper && mapper.text) ? mapper["text"] : "text";
            mapFld._freq = (mapper && mapper.frequency) ? mapper["frequency"] : "frequency";
            mapFld._url = (mapper && mapper.url) ? mapper["url"] : "url";
            mapFld._attr = (mapper && mapper.htmlAttr) ? mapper["htmlAttr"] : "htmlAttr";
            return mapFld;
        },
        /**
        * Section for render tagCloud items
        * @private
        */
        _generateLi: function (list, map) {
            var li = ej.buildTag("li.e-tagitems"), aTag;
            aTag = ej.buildTag("a.e-txt", list[map._text] || list[map._url],
                    { "font-size": this._calculateFontSize(list[map._freq]) },
                    { "href": list[map._url] || "#", "target": "blank", role: "link"  });
            li.append(aTag);
            this._setAttributes((list[map._attr]), li);
            this._on(aTag, "mouseenter", this._mouseEnter);
            this._on(aTag, "mouseleave", this._mouseLeave);
            this._on(aTag, "click", this._mouseClick);
            return li;
        },

        /**
        * Section For track mouseEnter event
        * @private
        */
        _mouseEnter: function (e) {
            $(e.target).addClass("hover");
            this._raiseEvent(e, "mouseover");
        },
        /**
        * Section For track mouseLeave event
        * @private
        */
        _mouseLeave: function (e) {
            $(e.target).removeClass("hover");
            this._raiseEvent(e, "mouseout");
        },
        /**
        * Section For handle the click event
        * @private
        */
        _mouseClick: function (e) {
            $(e.target).removeClass("hover");
            this._raiseEvent(e, "click");
        },

        _raiseEvent: function (e, _type) {
                this._trigger(_type, { value: $(e.target).html(), url: $(e.target).attr('href'), eventType: _type });
        },
        /**
        * Section for calculate Font Size
        * @private
        */
        _calculateFontSize: function (frequency) {
            if (frequency) {
                var C = 2, k, fontRange, fontSize,
                minSize = parseInt(this.model.minFontSize, 10), maxSize = parseInt(this.model.maxFontSize, 10);
                k = (frequency - this.minFreq) / (this.maxFreq - this.minFreq);
                fontRange = maxSize - minSize;
                fontSize = minSize + (C * Math.floor(k * (fontRange / C)));
                return fontSize;
            }
            else return this.model.minFontSize;
        }
    });
    /**
	 * Enum for various format	 
	 * @enum {string}
	 * @global 
	 */
    ej.Format = {
        /**  Render the tagCloud items in cloud format */
        Cloud: "cloud",
        /**  Render the tagCloud items in list format */
        List: "list"
    };
})(jQuery, Syncfusion);;