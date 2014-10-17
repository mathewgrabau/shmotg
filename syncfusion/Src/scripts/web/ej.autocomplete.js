/*!
*  filename: ej.autocomplete.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/// <reference path="../../samples/web/autocomplete/angularsupport.html" />
/**
* @fileOverview Plugin to style the Html input elements
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
	* @classdesc Custom Design for Html Textbox control.
	* @class ejAutocomplete
	* @requires jQuery
    * @requires jquery.easing.1.3.js
	* @requires ej.core.js
    * @requires ej.data.js
	* @requires ej.autocomplete.js
	* @requires ej.scroller.js
	* @example 
	* &lt;input type="text" id="autocomplete" /&gt; <br> 
	* &lt;script&gt;
	* // Create AutoComplete
    * $('#autocomplete').ejAutocomplete({ dataSource: window.carList,value:"Austin-Healey" }); 	
	* &lt;/script&gt;
	*/

    // ejAutocomplete is the plugin name 
    // "ej.Autocomplete" is "namespace.className" will hold functions and properties

    ej.widget("ejAutocomplete", "ej.Autocomplete", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["input"],
        _setFirst: false,
        //Root Css Class
        _rootCSS: "e-autocomplete",
        type: "editor",

        // default model
        defaults: {
            /**		
			* Specifies the Data Source of the AutoComplete.	
			* @default null
			* @type {data}
			* @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
			* //To set dataSource API value during initialization  
			* 	$("#autocomplete").ejAutocomplete({ dataSource: window.carList,value:"Austin-Healey"});				
			* &lt;/script&gt;
			* @memberof ejAutocomplete
			* @instance
			*/
            dataSource: null,
            /**		
             * Specifies the query to retrieve the data from online server.	
             * @default null
             * @type {object}
             * @example
			 * &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;			 
             * //To set query API value during initialization  
             * var dataManger = ej.DataManager({       url: "http://mvc.syncfusion.com/Services/Northwnd.svc/"});
             * var queryString = ej.Query().from("Suppliers").select("ContactName");
             * 	$("#autocomplete").ejAutocomplete({ dataSource: dataManger, query: queryString, fields: { text: "ContactName" }});
            * &lt;/script&gt;
             * @memberof ejAutocomplete
             * @instance
             */
            query: null,
            /**		
             * Specifies mapping fields for the data items of the Autocomplete textbox.	
             * @default null
             * @type {object}
             * @example 
			 * &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;	
             * //To set fields API value during initialization         
             * 	$("#autocomplete").ejAutocomplete({ dataSource:window.countriesField,fields: { text: "name", key: "key" }});
             * &lt;/script&gt;
             * @memberof ejAutocomplete
             * @instance
             */
            fields: /** @lends ejAutocomplete# */{ 
			     /**		
                 * Defines the tag value or display text..
				 * @alias ejAutocomplete#fields->text
				 * @type String
                 */
				text: null, 
				  /**		
                 * Defines the key for the items to differentiate two items with same.
				 * @alias ejAutocomplete#fields->key
				 * @type String
                 */
				key: null,
                 /**		
                 * Used to categorize the items. It is used when the grouping is enabled..
				 * @alias ejAutocomplete#fields->category
				 * @type String
                 */				
				category: null, 
				 /**		
                 * Defines the html attributes such as id, class, styles for the item..
				 * @alias ejAutocomplete#fields->htmlAttributes
				 * @type Object
                 */
				htmlAttributes: null 
				},
            /**		
			* Specifies the template for Autocomplete.
			* @default null
			* @type {string}
			* @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
			* // To set template API value during initialization. 	
			* $("#autocomplete").ejAutocomplete({ dataSource: window.countries,template:"&lt;div class='flag ${sprite}'&gt; &lt;/div&gt;"+"&lt;div class='txt'&gt; ${text} &lt;/div&gt;"});
			* &lt;/script&gt;
			* @memberof ejAutocomplete
			* @instance
			*/
            template: null,
            /**		
			* Groups the search result based on the category value.
			* @default false
			* @type {boolean}
			* @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
			* // Initialize the Autocomplete with the grouping value specified.
			* $("#autocomplete").ejAutocomplete({ dataSource: window.vehicle,	allowGrouping: true});
			* &lt;/script&gt;
			* @memberof ejAutocomplete
			* @instance
			*/
            allowGrouping: false,
            /**		
            * Prevents the duplicate names presents in the search result.
            * @default false
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
            * // Initialize the Autocomplete with the enableDistinct value specified.
            * $("#autocomplete").ejAutocomplete({dataSource: window.carList,enableDistinct: true });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            enableDistinct: false,
            /**		
            * Sorts the lists value in ascending order if set to true.
            * @default true
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
            * // Initialize the Autocomplete with the allowSorting value specified.
            * $("#autocomplete").ejAutocomplete({dataSource: window.carList,allowSorting: false });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            allowSorting: true,
            /**		
            * Sort order specifies whether the suggestion list values has to display in ascending or descending order. 	See {@link SortOrder}
            * @default ej.SortOrder.Ascending
            * @type {enum}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * //Initialize the Autocomplete with the sortOrder value specified
            * 	$("#autocomplete").ejAutocomplete({dataSource: window.carList,sortOrder:"descending" });					
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            sortOrder: "ascending",
            /**		
            * Allows to select multiple values from the suggestion list. Multiple values can be selected through either of the following options,Delimiter-Multiple values separated using comma.Visual mode- Each values are displayed in separate box with close button. 	See {@link MultiSelectMode}
            * @default ej.MultiSelectMode.None
            * @type {enum}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * //Initialize the Autocomplete with the multiSelectMode value specified
            * 	$("#autocomplete").ejAutocomplete({dataSource: window.carList,multiSelectMode: ej.MultiSelectMode.Delimiter  });					 
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            multiSelectMode: "none",
            /**		
            * Sets the separator to allow multiple word searches. While typing the texts in the text box, if we enter the delimiter value, the texts after the delimiter are considered as a separate word or query. The delimiter string should have a single character and must be a symbol. Mostly the delimiter symbol is used as (comma ,) or (semi-colon ;) or any other special character.
            * @default ';'
            * @type {string}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * //Initialize the Autocomplete with the delimiterChar value specified
            * 	$("#autocomplete").ejAutocomplete({dataSource: window.carList,multiSelectMode: ej.MultiSelectMode.Delimiter,delimiterChar: ';' });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            delimiterChar: ',',
            /**		
            * Specifies new values can be added to the autocomplete input other than the values in the suggestion list.
            * @default false
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * //Initialize the Autocomplete with the allowAddNew value specified.
            * $("#autocomplete").ejAutocomplete({dataSource: window.carList,allowAddNew: true });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            allowAddNew: false,
            /**		
            * Allows new text to be added to in the dropdown list when there are no suggestions. This property can only be used in the Visual mode only.
            * @default "Add New"
            * @type {string}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * //Initialize the Autocomplete with the addNewText value specified
            * 	$("#autocomplete").ejAutocomplete({dataSource: window.carList,allowAddNew: true,addNewText: "Add New Car" });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            addNewText: "Add New",
            /**		
            * Autocomplete textbox to be displayed with rounded corner style.
            * @default true
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * // Initialize the Autocomplete with the showRoundedCorner value specified.
            * $("#autocomplete").ejAutocomplete({dataSource: window.carList,showRoundedCorner: true });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            showRoundedCorner: false,
           /**		
           * Indicates that the autocomplete textbox values can only be read.
           * @default true
           * @type {boolean}
           * @example 
		   * &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
           * // Initialize the Autocomplete with the readOnly value specified.
           * $("#autocomplete").ejAutocomplete({dataSource: window.carList,readOnly: true });
           * &lt;/script&gt;
           * @memberof ejAutocomplete
           * @instance
           */
            readOnly: false,
            /**		
            * Sets the root class for Autocomplete theme. This cssClass API helps to use custom skinning option for Autocomplete control. By defining the root class using this API, we need to include this root class in CSS.
            * @default "gradient-lime"
            * @type {string}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * //Initialize the Autocomplete with the cssClass value specified
            * 	$("#autocomplete").ejAutocomplete({ dataSource: window.carList,cssClass: 'gradient-lime'});
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            cssClass: "",
            /**		
            * Sets the watermarkText text. When the textbox is empty the watermarkText text is visible like a shaded text. 
            * @default "Enter text"
            * @type {string}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * //Initialize the Autocomplete with the watermarkText value specified
            * 	$("#autocomplete").ejAutocomplete({ dataSource: window.carList,watermarkText: 'Enter the car name' });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            watermarkText: null,
            /**		
            * Defines the default value to be display in the autocomplete textbox.
            * @default Null
            * @type {string}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * //Initialize the Autocomplete value property with the  value specified
            * 	$("#autocomplete").ejAutocomplete({ dataSource: window.carList,value:"Elantra" });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            value: "",
            /**		
            * Sets the search filter type. There are several filter types are available such as ‘startswith’, ‘contains’, ‘endswith’, ‘lessthan’, ‘lessthanorequal’, ‘greaterthan’, ‘greaterthanorequal’, ‘equal’, ‘notequal’. 	See {@link filterType}
            * @default ej.filterType.StartsWith
            * @type {enum}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * //Initialize the Autocomplete with the filterType value specified
            * 	$("#autocomplete").ejAutocomplete({dataSource: window.carList,filterType: 'contains'  });					 
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            filterType: "startswith",
            /**		
            * Sets the case sensitivity of the search operation..
            * @default false
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * // Initialize the Autocomplete with the caseSensitiveSearch value specified.
            * $("#autocomplete").ejAutocomplete({ dataSource: window.carList,caseSensitiveSearch: true });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            caseSensitiveSearch: false,
            /**		
            * Enables the loading icon to intimate the searching operation. The loading icon is visible when there is a time delay to perform the search.
            * @default true
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * // Initialize the Autocomplete with the showLoadingIcon value specified.
            * $("#autocomplete").ejAutocomplete({ dataSource: window.carList,showLoadingIcon: false });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            showLoadingIcon: true,
            itemsCount: 0,
            minCharacter: 1,
            /**		
          * The delaySuggestionTimeout used to set the milliseconds time between a keypress and when the widget displays the suggestion popup.
          * @default 200
          * @type {number}
          * @example 
          * &lt;input type="text" id="autocomplete" /&gt; <br> 
            * &lt;script&gt;
          * // Initialize the Autocomplete with delaySuggestionTimeout in milliseconds value specified.
          * $("#autocomplete").ejAutocomplete({ dataSource: window.carList,delaySuggestionTimeout : 500 });
          * &lt;/script&gt;
          * @memberof ejAutocomplete
          * @instance
          */
            delaySuggestionTimeout:200,
            /**		
           * Enables the showPopup button. When the Showpopup button clicks, it displays the full list from the dataSource.
           * @default false
           * @type {boolean}
           * @example 
		   * &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
           * // Initialize the Autocomplete with the showPopupButton  value specified.
           * $("#autocomplete").ejAutocomplete({ dataSource: window.carList,showPopupButton : true });
           * &lt;/script&gt;
           * @memberof ejAutocomplete
           * @instance
           */
            showPopupButton: false,
            /**		
            * Enables the highlight search option. When the highlightSearch option set to true, the corresponding string entered in the textbox is highlighted in the suggestion list.
            * @default false
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * // Initialize the Autocomplete with the highlightSearch  value specified.
            * $("#autocomplete").ejAutocomplete({dataSource: window.carList, highlightSearch : true });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            highlightSearch: false,
            /**		
            * Automatically fills the first item from the suggestion list in an AutoComplete text box. The autoFill property is only applicable for “startswith” filterType type.
            * @default false
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
            * // Initialize the Autocomplete with the enableAutoFill  value specified.
            * $("#autocomplete").ejAutocomplete({ dataSource: window.carList,enableAutoFill : true });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            enableAutoFill: false,
            /**		
            * Sets the Autocomplete textbox direction as right to left alignment.
            * @default false
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * // Initialize the Autocomplete with the enableRTL    value specified.
            * $("#autocomplete").ejAutocomplete({ dataSource: window.carList,enableRTL   : true });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            enableRTL  : false,
            /**		
            * When this property sets to false, it disables the Autocomplete control.
            * @default true
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * // Initialize the Autocomplete with the enabled  value specified.
            * $("#autocomplete").ejAutocomplete({ dataSource: window.carList,enabled : false });
           * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            enabled: true,
            /**		
            * Defines the height of the Autocomplete textbox.
            * @default Null
            * @type {string | number}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * //Initialize the Autocomplete height property with the  value specified
            * 	$("#autocomplete").ejAutocomplete({dataSource: window.carList, height: 30 });
           * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            height: "",
            /**		
            * Defines the width of the Autocomplete textbox.
            * @default Null
            * @type {string | number}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * //Initialize the Autocomplete width property with the width value specified
            * 	$("#autocomplete").ejAutocomplete({ dataSource: window.carList,width: 200 });
           * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            width: "",
            /**		
            * Sets the emptyResultText message text. When there is no suggestions are available at the time this 	message will be shown.
            * @default "No suggestions"
            * @type {string | number}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * //Initialize the Autocomplete emptyResultText property with the  value specified
            * 	$("#autocomplete").ejAutocomplete({ dataSource: window.carList,emptyResultText: 'No Results Found' });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            emptyResultText: "No suggestions",
            /**		
            * Sets whether the noResults message will be shown or not.
            * @default true
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			 * &lt;script&gt;
            * // Initialize the Autocomplete with the showEmptyResultText value specified.
            * $("#autocomplete").ejAutocomplete({ dataSource: window.carList, showEmptyResultText : false });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            showEmptyResultText : true,
            /**		
            * Save current model value to browser cookies for state maintains. While refresh the Autocomplete control page retains the model value apply from browser cookies.  
            * @default false
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
            * // Initialize the Autocomplete with the enablePersistence   value specified.
            * $("#autocomplete").ejAutocomplete({ dataSource: window.carList,enablePersistence  : true });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            enablePersistence : false,
            /**		
            * Defines the popupHeight of the suggestion box.
            * @default "152px"
            * @type {string | number}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
            * //Initialize the Autocomplete popupHeight property with the  value specified
            * 	$("#autocomplete").ejAutocomplete({ dataSource: window.carList,popupHeight: '152px' });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            popupHeight: "152px",
            /**		
            * Defines the popupWidth of the suggestion box.
            * @default "auto"
            * @type {string | number}
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
            * //Initialize the Autocomplete popupWidth property with the  value specified
            * 	$("#autocomplete").ejAutocomplete({ dataSource: window.carList,popupWidth: '152px' });
            * &lt;/script&gt;
            * @memberof ejAutocomplete
            * @instance
            */
            popupWidth: "auto",
            /**     
			* Fires when focusIn successfully.
			* @event
			* @name ejAutocomplete#focusIn 	
			* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			* @param {object}  argument.model returns the autocomplete model
			* @param {string}  argument.type returns the name of the event
			* @param {string}  argument.value returns the value 
			* @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
			* $("#autocomplete").ejAutocomplete({ dataSource: window.carList});
			* //focusIn event for Autocomplete
            * $("#autocomplete").ejAutocomplete({ 
            *   	focusIn: function(args) {}
            * });      
			* &lt;/script&gt;			
			* @memberof ejAutocomplete
			* @instance
			*/
            focusIn: null,
            /**     
            * Fires when focusOut successfully.
            * @event
            * @name ejAutocomplete#focusOut 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the autocomplete model
            * @param {string}  argument.type returns the name of the event
			* @param {string}  argument.value returns the value 
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
			* $("#autocomplete").ejAutocomplete({ dataSource: window.carList});
            * //focusOut event for Autocomplete
            * $("#autocomplete").ejAutocomplete({ 
            *   	focusOut: function(args) {}
            * });  
            * &lt;/script&gt;						
            * @memberof ejAutocomplete
            * @instance
            */
            focusOut: null,
            /**     
            * Fires when change successfully.
            * @event
            * @name ejAutocomplete#change 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the autocomplete model
            * @param {string}  argument.type returns the name of the event
			* @param {string}  argument.value returns the selected value
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
			* $("#autocomplete").ejAutocomplete({ dataSource: window.carList});
            * //change event for Autocomplete
            * $("#autocomplete").ejAutocomplete({ 
            *   	change: function(args) {}
            * });  
            * &lt;/script&gt;			
            * @memberof ejAutocomplete
            * @instance
            */
            change: null,
            /**     
            * Fires when select successfully.
            * @event
            * @name ejAutocomplete#select 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the autocomplete model
            * @param {string}  argument.type returns the name of the event
			* @param {string}  argument.text returns the name of the event
			* @param {string}  argument.value returns the selected value
			* @param {string}  argument.type returns the selected text
			* @param {object}  argument.key returns the selected value key
            * @example 
			* &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
			* $("#autocomplete").ejAutocomplete({ dataSource: window.carList});
            * //select event for Autocomplete
            * $("#autocomplete").ejAutocomplete({ 
            *   	select: function(args) {}
            * }); 
            * &lt;/script&gt;			
            * @memberof ejAutocomplete
            * @instance
            */
            select: null,
			  /**     
          * Fires after Autocomplete control is created.
          * @event
          * @name ejAutocomplete#create 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the Autocomplete model
          * @param {string}  argument.type returns the name of the event		  
          * @example 
		  * &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
			* $("#autocomplete").ejAutocomplete({ dataSource: window.carList});
            * //create event for Autocomplete
            * $("#autocomplete").ejAutocomplete({ 
            *   	create: function(args) {}
            * }); 
            * &lt;/script&gt;			 
          * @memberof ejAutocomplete
          * @instance
          */
            create: null,
		  /**     
          * Fires when the Autocomplete is destroyed successfully
          * @event
          * @name ejAutocomplete#destroy 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the Autocomplete model
          * @param {string}  argument.type returns the name of the event
          * @example 
		  * &lt;input type="text" id="autocomplete" /&gt; <br> 
			* &lt;script&gt;
			* $("#autocomplete").ejAutocomplete({ dataSource: window.carList});
            * //destroy event for Autocomplete
            * $("#autocomplete").ejAutocomplete({ 
            *   	destroy: function(args) {}
            * }); 
            * &lt;/script&gt;			 
          * @memberof ejAutocomplete
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
            filterType: "enum",
            caseSensitiveSearch: "boolean",
            showLoadingIcon: "boolean",
            template: "string",
            allowGrouping: "boolean",
            enableDistinct: "boolean",
            allowSorting: "boolean",
            sortOrder: "enum",
            allowAddNew: "boolean",
            addNewText: "string",
            showRoundedCorner: "boolean",
            readOnly: "boolean",
            itemsCount: "number",
            minCharacter: "number",
            showPopupButton: "boolean",
            highlightSearch: "boolean",
            enableAutoFill: "boolean",
            enableRTL  : "boolean",
            multiSelectMode: "enum",
            delimiterChar: "string",
            emptyResultText: "string",
            showEmptyResultText : "boolean",
            enabled: "boolean",
            enablePersistence : "boolean",
            dataSource: "data",
            query: "data",
            fields: "data"
        },
        observables: ["value"],
        /**
       * To enable the autocomplete  
       * @return jQuery
       * @example 
       * &lt;input type="text" id="autocomplete" /&gt; <br> 
       * &lt;script&gt;
	   * $('#autocomplete').ejAutocomplete({dataSource: window.carList,value:"Aston Martin"}); 	
       * // Create autocomplete
       * var autocompleteObj  = $("#autocomplete").data("ejAutocomplete");
       * autocompleteObj.enable(); // enable the autocomplete
       * &lt;/script&gt;
       * @example 
       * &lt;input type="text" id="autocomplete" /&gt; <br> 
	   * &lt;script&gt;
	   * $('#autocomplete').ejAutocomplete({dataSource: window.carList,value:"Aston Martin"}); 	
	   * // Create autocomplete
       * $('#autocomplete').ejAutocomplete("enable"); 	
	   * &lt;/script&gt;
       *@memberof ejAutocomplete
       * @instance
       */
        enable: function () {
            if (!this.model.enabled) {
                this.model.enabled = true;
                this.target.disabled = false;
                this.element.removeClass("e-disable").attr({ "aria-disabled": false });
                if (this.model.showPopupButton) this.dropdownbutton.removeClass("e-disable").attr({ "aria-disabled": false });
                if (this.model.multiSelectMode == "visualmode") this._ulBox.removeClass("e-disable").attr({ "aria-disabled": false });
            }
        },
        /**
      * To disable the autocomplete  
      * @return jQuery
      * @example 
      * &lt;input type="text" id="autocomplete" /&gt; <br> 
      * &lt;script&gt;
	  * $('#autocomplete').ejAutocomplete({dataSource: window.carList,value:"Aston Martin"}); 
      * // Create autocomplete
      * var autocompleteObj  = $("#autocomplete").data("ejAutocomplete");
      * autocompleteObj.disable(); // disable the autocomplete
      * &lt;/script&gt;
      * @example 
      * &lt;input type="text" id="autocomplete" /&gt; <br> 
      * &lt;script&gt;
	  * $('#autocomplete').ejAutocomplete({dataSource: window.carList,value:"Aston Martin"}); 
      * // Create autocomplete
      * $('#autocomplete').ejAutocomplete("disable"); 	
      * &lt;/script&gt;
      *@memberof ejAutocomplete
      * @instance
      */
        disable: function () {
            if (this.model.enabled) {
                this._hideResult();
                this.element.attr("aria-expanded", false);
                this.model.enabled = false;
                this.target.disabled = true;
                this.element.addClass("e-disable").attr({ "aria-disabled": true });
                if (this.model.showPopupButton) this.dropdownbutton.addClass("e-disable").attr({ "aria-disabled": true });
                if (this.model.multiSelectMode == "visualmode") this._ulBox.addClass("e-disable").attr({ "aria-disabled": true });
            }
        },
        /**
      * Clears the text in the Autocomplete textbox.
      * @return jQuery
      * @example 
      * &lt;input type="text" id="autocomplete" /&gt; <br> 
      * &lt;script&gt;
	  * $('#autocomplete').ejAutocomplete({dataSource: window.carList,value:"Aston Martin"}); 
      * // Create autocomplete
      * var autocompleteObj  = $("#autocomplete").data("ejAutocomplete");
      * autocompleteObj.clearText(); // clear the autocomplete text
      * &lt;/script&gt;
      * @example 
      * &lt;input type="text" id="autocomplete" /&gt; <br> 
      * &lt;script&gt;
	  * $('#autocomplete').ejAutocomplete({dataSource: window.carList,value:"Aston Martin"}); 
      * // Create autocomplete
      * $('#autocomplete').ejAutocomplete("clearText"); 	
      * &lt;/script&gt;
      *@memberof ejAutocomplete
      * @instance
      */
        clearText: function () {
            if (this.model.enabled) {
                if (this.model.multiSelectMode == "visualmode")
                    this._deleteBox(this._ulBox.children("li"));
                this.element.val("");
                this._valueChange();
                if (this._isFocused) this.element.blur();
                else this._targetBlur();
            }
        },
        /**
      * Returns the current value selected in the Autocomplete textbox.
      * @return jQuery
      * @example 
      * &lt;input type="text" id="autocomplete" /&gt; <br> 
      * &lt;script&gt;
	  * $('#autocomplete').ejAutocomplete({dataSource: window.carList,value:"Aston Martin"}); 
      * // Create autocomplete
      * var autocompleteObj  = $("#autocomplete").data("ejAutocomplete");
      * autocompleteObj.getValue(); // getValue of the autocomplete text
      * &lt;/script&gt;
      * @example 
      * &lt;input type="text" id="autocomplete" /&gt; <br> 
      * &lt;script&gt;
	  * $('#autocomplete').ejAutocomplete({dataSource: window.carList,value:"Aston Martin"}); 
      * // Create autocomplete
      * $('#autocomplete').ejAutocomplete("getValue"); 	
      * &lt;/script&gt;
      *@memberof ejAutocomplete
      * @instance
      */
        getValue: function () {
            if (this.model.multiSelectMode == "visualmode")
                return this._hiddenInput.val();
            if (this.element.hasClass("e-watermark"))
                return "";
            return this.target.value;
        },
        /**
     * Returns the values selected in the Autocomplete textbox.
     * @return jQuery
     * @example 
     * &lt;input type="text" id="autocomplete" /&gt; <br> 
     * &lt;script&gt;
	 * $('#autocomplete').ejAutocomplete({dataSource: window.carList,value:"Aston Martin"}); 
     * // Create autocomplete
     * var autocompleteObj  = $("#autocomplete").data("ejAutocomplete");
     * autocompleteObj.getSelectedItems(); // getSelectedItems the autocomplete text
     * &lt;/script&gt;
     * @example 
     * &lt;input type="text" id="autocomplete" /&gt; <br> 
     * &lt;script&gt;
	 * $('#autocomplete').ejAutocomplete({dataSource: window.carList,value:"Aston Martin"}); 
     * // Create autocomplete
     * $('#autocomplete').ejAutocomplete("getSelectedItems"); 	
     * &lt;/script&gt;
     *@memberof ejAutocomplete
     * @instance
     */
        getSelectedItems: function () {
            return this._selectedItems;
        },
        _setValue: function (value) {
            if (this.element.hasClass("e-watermark"))
                this.element.removeClass("e-watermark")
            if (typeof value === "object" || (typeof value === "number" && isNaN(value))) value = "";
            value = $.trim(value);
            this.element.val("");
            if (value) {
                if (this.model.multiSelectMode == "visualmode") {
                    this._selectedItems = [];
                    this._deleteBox(this._ulBox.children("li"));
                    this._hiddenInput.val(value);
                    var values = value.split(this.model.delimiterChar);

                    if (ej.DataManager && this.model.dataSource instanceof ej.DataManager) {
                        this._createBoxForObjectType(values);
                    }
                    else {
                        this.suggestionListItems = this.model.dataSource;
                        if (typeof this.suggestionListItems[0] != "object") {
                            for (var i = 0; i < values.length; i++) {
                                if (values[i]) {
                                    this._ulBox.append(this._createBox(values[i]));
                                    this._selectedItems.push(values[i]);
                                }
                            }
                        }
                        else this._createBoxForObjectType(values);
                    }
                }
                else {
                    this.element.val(value);
                    this._hiddenInput.val(value);
                    this._updateSelectedItemArray();
                }
            }
            else
                this._hiddenInput.val("");
            this.model.value = this.model.multiSelectMode == "visualmode" ? this._hiddenInput.val() : this.element.val();
            this._preVal = this.element.val();
            !this._isWatermark && this._setWatermarkTxt();
            return value;
        },
        _createBoxForObjectType: function (values) {
            var dataQuery, promise, mapper, strData, proxy = this;
            mapper = this.model.fields, mapFld = { _key: null, _text: null, _attr: null };
            mapFld._text = (mapper && mapper.text) ? mapper["text"] : "text";
            for (var data = 0; data < values.length; data++) {
                var _val = $.trim(values[data]);
                if (ej.DataManager && this.model.dataSource instanceof ej.DataManager) {
                    dataQuery = this._getQuery().where(mapFld._text, "equal", _val, false);
                    promise = (this.model.dataSource).executeQuery(dataQuery);
                    promise.done(function (e) {
                        var res = e.result;
                        strData = res instanceof Array && res.length ? res[0] : _val;
                        proxy._selectedItems.push(strData);
                    }).fail(function (e) {
                        proxy._selectedItems.push(_val);
                    });
                }
                else {
                    dataQuery = ej.Query().where(mapFld._text, "equal", _val, false);
                    promise = ej.DataManager(this.suggestionListItems).executeLocal(dataQuery);
                    strData = promise instanceof Array && promise.length ? promise[0] : _val;
                    this._selectedItems.push(strData);
                }
                this._ulBox.append(this._createBox(_val));
            }
        },

        /**
  * Set the values to the Autocomplete textbox by input key value.
  * @return jQuery
  * @example 
  * &lt;input type="text" id="autocomplete" /&gt; <br> 
  * &lt;script&gt;
   * $('#autocomplete').ejAutocomplete({dataSource: window.vehicle});   
  * // Create autocomplete
  * var autocompleteObj  = $("#autocomplete").data("ejAutocomplete");
  * autocompleteObj.selectValueByKey("F"); // set key value corresponding text to the autocomplete textbox
  * &lt;/script&gt;
  * @example 
  * &lt;input type="text" id="autocomplete" /&gt; <br> 
  * &lt;script&gt;
  * // Create autocomplete
  * $('#autocomplete').ejAutocomplete({dataSource: window.vehicle});
  * $('#autocomplete').ejAutocomplete("selectValueByKey","F");  
  * &lt;/script&gt;
  *@memberof ejAutocomplete
  * @instance
  */
        selectValueByKey: function (key) {
            this._setOperation(key, "key");
        },
        /**
    * Set the values to the Autocomplete textbox by input text value.
    * @return jQuery
    * @example 
    * &lt;input type="text" id="autocomplete" /&gt; <br> 
    * &lt;script&gt;
	 * $('#autocomplete').ejAutocomplete({dataSource: window.vehicle}); 	
    * // Create autocomplete
    * var autocompleteObj  = $("#autocomplete").data("ejAutocomplete");
    * autocompleteObj.selectValueByText("BMW 7"); // set text value to the autocomplete textbox
    * &lt;/script&gt;
    * @example 
    * &lt;input type="text" id="autocomplete" /&gt; <br> 
    * &lt;script&gt;
    * // Create autocomplete
    * $('#autocomplete').ejAutocomplete({dataSource: window.vehicle}); 
    * $('#autocomplete').ejAutocomplete("selectValueByText","BMW 7"); 	
    * &lt;/script&gt;
    *@memberof ejAutocomplete
    * @instance
    */
        selectValueByText: function (text) {
            this._setOperation(text, "text");
        },

        //Based on source value and mapper value to generate query to find the required result set
        _setOperation: function (source, value) {
            if (!this.model.enabled) return false;
            var bindTo = "", promise, dataQuery, proxy = this, list = this.model.dataSource;
            if (ej.isNullOrUndefined(list)) return false;
            if (typeof list[0] == "object" || list instanceof ej.DataManager) {
                var mapper = this.model.fields;
                bindTo = (mapper && mapper[value]) ? mapper[value] : value;
            } else if (value == "key")
                return false;
            if (ej.DataManager && list instanceof ej.DataManager) {
                dataQuery = this._getQuery().where(bindTo, "equal", source, !this.model.caseSensitiveSearch);
                promise = (list).executeQuery(dataQuery);
                promise.done(function (e) {
                    proxy._setText(e.result[0]);
                });
            }
            else {
                if ((!list || !list.length || list.length < 1)) return false;
                dataQuery = ej.Query().where(bindTo, "equal", source, !this.model.caseSensitiveSearch);
                promise = ej.DataManager(list).executeLocal(dataQuery);
                this._setText(promise[0]);
            }
        },
        //Obtained data set check with its type to set the value to textbox 
        _setText: function (data) {
            if (!data) return false;
            var currentValue, mapper = this.model.fields;
            if ((typeof this.model.dataSource[0] == "object") || (typeof data == "object"))
                currentValue = (mapper && mapper["text"]) ? data[mapper["text"]] : data["text"];
            else currentValue = data;
            if (currentValue) {
                if (this.model.multiSelectMode == "visualmode" && this._removeDuplicates(data)) return false;
                this._valueToTextBox(currentValue, data, true);
                this.model.value = this.model.multiSelectMode == "visualmode" ? this._hiddenInput.val() : this.element.val();
            }
        },
        /*To set value to textbox in visualmode or delimiter mode 
        currentValue- specify the value to be displayed
        date- specify the current value object
        flag-set true ,when value set by using public methods,false when select value from popuplist
        */
        _valueToTextBox: function (currentValue, data, flag) {
            var delimiterIndex;
            if (this.model.multiSelectMode == "visualmode") {
                if (this._addNewTemplate) currentValue = currentValue.substr(0, currentValue.length - this._addNewTemplate.length);
                delimiterIndex = this._hiddenInput.val() ? this.model.delimiterChar : "";
                this._hiddenInput.val(this._hiddenInput.val() + delimiterIndex + currentValue);
                this.element.val("");
                this._ulBox.append(this._createBox(currentValue));
            }
            else if (this.model.multiSelectMode == "delimiter") {
                delimiterIndex = (this.target.value).lastIndexOf(this.model.delimiterChar)
                if (flag)
                    this.element.val(this.element.val() == "" ? (currentValue) : (this.element.val() + this.model.delimiterChar + currentValue));
                else
                    this.element.val(this._queryString.substr(0, delimiterIndex + 1) + currentValue + this.model.delimiterChar + " ");
            }
            else this.element.val(currentValue);
            this._selectedItems.push(data);
            this._moveCaretToEnd(this.element[0]);
        },
        // while we set the value using public methods,it prevents the duplicate entry in visual mode
        _removeDuplicates: function (currentValue) {
            if (this._selectedItems.length == 0) return false;
            if (this._selectedItems.indexOf(currentValue) != -1) return true;
        },
        /**
    * search values in the Autocomplete textbox.
    * @return jQuery
    * @example 
    * &lt;input type="text" id="autocomplete" /&gt; <br> 
    * &lt;script&gt;
	* $('#autocomplete').ejAutocomplete({dataSource: window.carList,value:"Aston Martin"});
    * // Create autocomplete
    * var autocompleteObj  = $("#autocomplete").data("ejAutocomplete");
    * autocompleteObj.search(); // search the autocomplete text
    * &lt;/script&gt;
    * @example 
    * &lt;input type="text" id="autocomplete" /&gt; <br> 
    * &lt;script&gt;
	* $('#autocomplete').ejAutocomplete({dataSource: window.carList,value:"Aston Martin"});
    * // Create autocomplete
    * $('#autocomplete').ejAutocomplete("search"); 	
    * &lt;/script&gt;
    *@memberof ejAutocomplete
    * @instance
    */
        search: function () {
            if (this.model.enabled && this._checkDelimiter()) {
                this._hideResult();
                this.element.attr("aria-expanded", false);
                this._autoFill = false;
                this._queryString = $.trim(this._queryString);
                if (this._queryString.length > 0) this._OnTextEnter();
            }
        },

        hide: function () {
            this._hideResult();
            this.element.attr("aria-expanded", false);
        },

        _changeWatermark: function (text) {
            if (this._isWatermark) this.element.attr("placeholder", text);
            else if (this.element.hasClass("e-watermark")) this.element.val(text);
        },
        _changeSkin: function (skin) {
            this.wrapper.removeClass(this.model.cssClass).addClass(skin);
            this.suggestionList.removeClass(this.model.cssClass).addClass(skin);
        },
        _setDropdown: function (boolean) {
            this.model.showPopupButton = boolean;
            if (boolean) this._renderDropdown();
            else this._destroyDropdown();
        },
        _changeHeight: function (height) {
            this.wrapper.height(height);
        },
        _changeWidth: function (width) {
            this.wrapper.width(width);
            this._setListWidth();
        },

        // constructor function
        _init: function () {
            if (!this.element.is("input") || (this.element.attr('type') && this.element.attr('type') != "text")) return false;
            this._initialize();
            this._render();
            this._wireEvents();
        },
        /**
        * To configure the properties at runtime using SetModel		
        * @private
        */
        _setModel: function (options) {
            if (!this.model.enabled && ej.isNullOrUndefined(options["enabled"])) return false;
            var option;
            for (option in options) {
                switch (option) {
                    case "dataSource": this.model.dataSource = null; break;
                    case "watermarkText": this._changeWatermark(options[option]); break;
                    case "delaySuggestionTimeout": this.model.delaySuggestionTimeout= parseInt(options[option]); break;
                    case "value":
                        options[option] = this._setValue(options[option]);
                        this._valueChange();
                        break;
                    case "showPopupButton": this._setDropdown(options[option]); break;
                    case "enableRTL": this._RightToLeft(options[option]); break;
                    case "showRoundedCorner": this._setRoundedCorner(options[option]); break;
                    case "readOnly": this.model.readOnly = options[option]; this._checkReadOnly(); break;
                    case "delimiterChar": options[option] = this._validateDelimiter(options[option]); break;
                    case "multiSelectMode":
                        this.model.multiSelectMode = options[option];
                        if (options[option] == "visualmode") this._renderBoxModel();
                        else if (this.element.hasClass("e-visual-mode")) this._destroyBoxModel();
                        this._setValue(this.model.value);
                        break;
                    case "enabled": this._disabled(!options[option]); break;
                    case "height": this._changeHeight(options[option]); break;
                    case "width": this._changeWidth(options[option]); break;
                    case "cssClass": this._changeSkin(options[option]); break;
                    case "itemsCount ": if (options[option] <= 0 || isNaN(options[option])) options[option] = 0; break;
                    case "popupHeight": this.suggestionList.css({ "max-height": options[option] }); break;
                    case "popupWidth": this.model.popupWidth = options[option]; this._setListWidth(); break;
                }
            }
        },
        /**
 * destroy in the Autocomplete textbox.
 * @alias destroy
 * @return jQuery
 * @example 
 * &lt;input type="text" id="autocomplete" /&gt; <br> 
 * &lt;script&gt;
 * $('#autocomplete').ejAutocomplete({dataSource: window.carList,value:"Aston Martin"});
 * // Create autocomplete
 * var autocompleteObj  = $("#autocomplete").data("ejAutocomplete");
 * autocompleteObj.destroy(); // destroy the autocomplete 
 * &lt;/script&gt;
 * @example 
 * &lt;input type="text" id="autocomplete" /&gt; <br> 
 * &lt;script&gt;
 * $('#autocomplete').ejAutocomplete({dataSource: window.carList,value:"Aston Martin"});
 * // Create autocomplete
 * $('#autocomplete').ejAutocomplete("destroy"); 	
 * &lt;/script&gt;
 *@memberof ejAutocomplete
 * @instance
 */
        _destroy: function () {
            this.element.insertAfter(this.wrapper);
            this.wrapper.remove();
            this.element.removeClass("e-input e-watermark").val("");
            if (this._isWatermark) this.element.removeAttr("placeholder");
            this.suggestionList.remove();
        },

        _initialize: function () {
            this.element.attr("role", "combobox").attr("aria-label", "Autocomplete textbox").attr("aria-expanded", false).attr("tabindex", 0).attr("aria-autocomplete", "list").attr("value", this.model.value);
            this.target = this.element[0];
            this.dropdownbutton = null;
            this.showSuggestionBox = false;
            this.noresult = true;
            this._queryString = null;
            this.suggLen = 0;
            this._selectedItems = [];

            this._activeItem = 0;
            this.ctrlKeyPressed = false;
            this._isFocused = false;
            this._isOpened = false;
            this._isWatermark = this._checkWatermarkSupport();
        },

        _render: function () {
            this._renderWrapper();
            this._setDimentions();
            this._renderDropdown();
            this._checkProperties();
            this._setWatermark();
            this._renderSuggestionList();
            this._RightToLeft(this.model.enableRTL);
            this._setRoundedCorner(this.model.showRoundedCorner);
        },

        _renderWrapper: function () {
            this.element.addClass("e-input").attr("autocomplete", "off");
            this.wrapper = ej.buildTag("span.e-atc e-widget " + this.model.cssClass + "#" + this.target.id + "_wrapper").insertAfter(this.element);
            this.container = ej.buildTag("span.e-in-wrap e-box").append(this.element);
            this.wrapper.append(this.container);
            this._hiddenInput = ej.buildTag("input#" + this.target.id + "_hidden", "", {}, { type: "hidden" }).insertBefore(this.element);
        },

        _renderDropdown: function () {
            if (this.model.showPopupButton) {
                var span = ej.buildTag("span.e-icon e-search");
                this.dropdownbutton = ej.buildTag("span.e-select#" + this.target.id + "_dropdown").append(span);
                this.container.append(this.dropdownbutton).addClass("e-padding");
                this.dropdownbutton.bind("mousedown", $.proxy(this._OnDropdownClick, this));
            }
        },

        _setDimentions: function () {
            if (this.model.height)
                this.wrapper.height(this.model.height);
            if (this.model.width)
                this.wrapper.width(this.model.width);
        },

        _renderBoxModel: function () {
            this._ulBox = ej.buildTag("ul.e-ul e-boxes");
            this.element.val("").removeAttr("name").width(1).addClass("e-visual-mode");
            this.container.prepend(this._hiddenInput, this._ulBox);
            this.wrapper.height("auto");

            this._on(this.container, "mousedown", function (e) {
                if (!this.model.enabled) return false;
                var $target = $(e.target);
                if (!$target.is(this.element)) {
                    e.preventDefault();
                    if (!this._isFocused) this.element.focus();
                    if ($target.hasClass("e-options")) {
                        if (!e.ctrlKey && $target.siblings().hasClass("e-active")) this._removeActive();
                        if ($target.hasClass("e-active")) $target.removeClass("e-active");
                        else $target.addClass("e-active");
                    }
                    else this._moveCaretToEnd(this.element[0]);
                }
                if (!e.ctrlKey && ($target.hasClass("e-boxes") || $target.hasClass("e-input"))) this._removeActive();
            });
        },
        _destroyBoxModel: function () {
            this.container.prepend(this.element);
            this.element.attr({ name: this._hiddenInput.attr("name") }).removeAttr("style").removeClass("e-visual-mode");
            this.wrapper.height(this.model.height);
            this._hiddenInput.remove();
            this._ulBox.remove();
            this._off(this.container, "mousedown");
        },
        _deleteLastBox: function () {
            var items = this._ulBox.children();
            var item = items.last(), flag = item.hasClass("e-active");
            this._removeActive();
            flag ? this._deleteBox(item) : item.addClass("e-active");
        },
        _deleteBox: function (items) {
            for (var i = 0; i < items.length; i++) {
                var boxes = this._ulBox.children();
                var index = boxes.index(items[i]);
                this._selectedItems.splice(index, 1);

                var deli = this.model.delimiterChar;
                var values = this._hiddenInput.val().split(deli);
                values.splice(index, 1);
                this._hiddenInput.val(values.join(deli));
                $(items[i]).remove();
            }
            if (this.showSuggestionBox) this._refreshPopup();
            this._valueChange();
        },
        _removeActive: function () {
            this._ulBox.children("li.e-active").removeClass("e-active");
        },
        _adjustWidth: function () {
            var tempSpan = ej.buildTag("span", this.element.val()), wid, minWidth;
            this.container.append(tempSpan);
            minWidth = 30;  //  some additional width for textbox in visualmode
            wid = tempSpan.width() + minWidth;
            if (this.element.width() != wid)
                this.element.width(wid);
            tempSpan.remove();
        },

        _checkProperties: function () {
            this._checkReadOnly();
            this.model.delimiterChar = this._validateDelimiter(this.model.delimiterChar);
            if (!this.model.enabled) {
                this.model.enabled = true;
                this._disabled(true);
            }
            if (this.model.multiSelectMode == "visualmode") this._renderBoxModel();
            this._checkNameAttr();
            this.model.value = this._setValue(this.model.value);
        },

        _checkNameAttr: function () {
            if (this.element.attr("name"))
                this._hiddenInput.attr("name", this.element.attr("name"));
            else {
                this._hiddenInput.attr("name", this.element[0].id);
				this.element.attr("name", this.element[0].id);
			}
        },

        _disabled: function (boolean) {
            if (boolean) this.disable();
            else this.enable();
        },

        _destroyDropdown: function () {
            this.dropdownbutton.unbind("mousedown", $.proxy(this._OnDropdownClick, this));
            this.dropdownbutton.remove();
            this.dropdownbutton = null;
            this.container.removeClass("e-padding");
        },

        _validateDelimiter: function (deli) {
            if (deli.length == 1) {
                var RegEx = /^[a-zA-Z0-9]+$/;
                if (!RegEx.test(deli)) return deli;
            }
            return ",";
        },

        _checkWatermarkSupport: function () {
            return 'placeholder' in document.createElement('input');
        },
        _setWatermark: function () {
            if (this._isWatermark) this.element.attr("placeholder", this.model.watermarkText);
        },
        _setWatermarkTxt: function () {
            if (this.model.watermarkText != null && $.trim(this.element.val()) == "") {
                this.element.addClass("e-watermark");
                this.element.val(this.model.watermarkText);
            }
        },

        _renderSuggestionList: function () {
			var oldWrapper = $("#" + this.element.context.id + "_suggestion").get(0);
            if (oldWrapper)
                $(oldWrapper).remove();
            this.suggestionList = ej.buildTag("div.e-atc-popup e-popup e-widget e-box " + this.model.cssClass + "#" + this.target.id + "_suggestion", "", { "display": "none" }).attr("role", "listbox");
            this.element.attr("aria-owns", this.target.id + "_suggestion");
            this.popup = this.suggestionList;
            var scrollerDiv = ej.buildTag("div");
            this.ul = ej.buildTag("ul.e-ul").attr("role", "listbox");
            scrollerDiv.append(this.ul);
            this.suggestionList.append(scrollerDiv);
            $('body').append(this.suggestionList);
            this._setListWidth();
            this._setListHeight();
            this.suggestionList.ejScroller({ height: this.suggestionList.height(), width: 0, scrollerSize: 20 });
            this.scrollerObj = this.suggestionList.ejScroller("instance");
        },

        _checkEmptyList: function () {
            if (this.model.multiSelectMode == "visualmode") this._removeRepeated();
            if (this.suggestionListItems.length == 0) {
                this.suggestionListItems.push(this.model.emptyResultText);
                this.noresult = true;
            }
            else this.noresult = false;
        },
        _showSuggestionList: function () {
            this._checkEmptyList();
            this._addNewTemplate = null;
            if (this.noresult && this.model.multiSelectMode == "visualmode" && this.model.allowAddNew && this.element.val() != "") {
                this.noresult = false;
                this.suggestionListItems.pop();
                this._addNewTemplate = "   (" + this.model.addNewText + ")";
                this.suggestionListItems.push(this.element.val() + this._addNewTemplate);
                this._checkEmptyList();
            }

            if (!this.noresult || this.model.showEmptyResultText )
                this._generateSuggestionList();
        },
        /**
* generate suggestion list using the given object
* @private
*/
        _generateSuggestionList: function () {
            var list = this.suggestionListItems, i, suggList = [];
            this.ul.empty();

            if (typeof list[0] != "object") {
			
                if (this.model.enableDistinct) list = ej.dataUtil.distinct(list, "", true);
                for (i = 0; i < list.length; i++) {
                    var _txt = (this.model.highlightSearch && !this.noresult) ? this._highlightSuggestion(list[i]) : list[i];
                    this.ul.append(ej.buildTag("li", _txt).attr("role","option"));
                }
                this._currList = list;
                this._mapper = { txt: null, key: null };
            }
            else {
                var mapper = this.model.fields, mapFld = { _key: null, _text: null, _attr: null };
                mapFld._key = (mapper && mapper.key) ? mapper["key"] : "key";
                mapFld._text = (mapper && mapper.text) ? mapper["text"] : "text";
                mapFld._attr = (mapper && mapper.htmlAttributes) ? mapper["htmlAttributes"] : "htmlAttributes";
                this._mapper = { txt: mapFld._text, key: mapFld._key }, this._currList = [];
                if (this.model.enableDistinct) list = ej.dataUtil.distinct(list, mapFld._text, true);

                if (this.model.allowGrouping) {
                    var mapCateg = (mapper && mapper.category) ? mapper["category"] : "category", groupedList, _query;
                    _query = ej.Query().group(mapCateg);
                    this._addSortingQuery(_query, "key");
                    groupedList = ej.DataManager(list).executeLocal(_query);
                    this._swapUnCategorized(groupedList);
                    for (i = 0; i < groupedList.length; i++) {
                        if (groupedList[i].key)
                            this.ul.append(ej.buildTag("li.e-category", groupedList[i].key).attr("role", "option"));
                        this._generateLi(groupedList[i].items, mapFld);
                    }
                }
                else this._generateLi(list, mapFld);
            }
            if (this._getLiTags().length > 0) this._showResult();
        },
        /**
* swaping uncategorized values in the sorting order
* @private
*/
        _swapUnCategorized: function (list) {
            $(list).each(function (i, obj) {
                if (!obj.key) {
                    for (var j = i; j > 0; j--) {
                        list[j] = list[j - 1];
                    }
                    list[j] = obj;
                    return false;
                }
            });
        },
        /**
* generate li tagd with the given data source
* @private
*/
        _generateLi: function (list, mapFld) {
            for (var j = 0; j < list.length; j++) {
                var _text = this._getField(list[j], mapFld._text);
                if (!ej.isNullOrUndefined(_text)) {
                    if (this.model.highlightSearch) _text = this._highlightSuggestion(_text);
                    if (this.model.template) _text = this._getTemplatedString(list[j], mapFld._text, _text);

                    var li = $(document.createElement("li")).append(_text);
                    this._setAttributes(this._getField(list[j], mapFld._attr), li);
                    this.ul.append(li);
                    this._currList = $.merge(this._currList, [list[j]]);
                }
            }
        },
        /**
* generate li tagd for the box model
* @private
*/
        _getLiTags: function () {
            return this.ul.children("li:not('.e-category')");
        },
        /**
* refresh popup using templated string
* @private
*/
        _getTemplatedString: function (list, searchLabl, searchTxt) {
            var str = this.model.template, start = str.indexOf("${"), end = str.indexOf("}");
            while (start != -1 && end != -1) {
                var content = str.substring(start, end + 1);
                var field = content.replace("${", "").replace("}", "");
                var replace = this._getField(list, field);
                // if highlightSearch is enabled, it replaces the highlighted search text
                if (searchLabl == field) replace = searchTxt;
                if (!replace) replace = "";
                str = str.replace(content, replace);
                start = str.indexOf("${"), end = str.indexOf("}");
            }
            return str;
        },
        /**
* get the field name for the given object
* @private
*/
        _getField: function (obj, fieldName) {
            return ej.pvt.getObject(fieldName, obj);
        },
        /**
* Set the key attribute for the input element
* @private
*/
        _setAttributes: function (data, element) {
            if (data) {
                for (var key in data)
                    element.attr(key, data[key]);
            }
        },
        /**
* Set width for the popuplist
* @private
*/
        _setListWidth: function () {
            var width = this.model.popupWidth;
            if (width && width != "auto") this.suggestionList.css({ "width": width });
            else this.suggestionList.css({ "width": this.wrapper.width() });
        },
        /**
* Set height for the popuplist
* @private
*/
        _setListHeight: function () {
            this.suggestionList.css({ "max-height": this.model.popupHeight });
        },
        /**
* Refresh the popup with the given width
* @private
*/
        _refreshPopup: function () {
            if (this.model.popupWidth == "auto" && this.wrapper.outerWidth() != this.suggestionList.outerWidth()) {
                this.suggestionList.css({ "width": this.wrapper.width() });
                this._refreshScroller();
            }
            this._setListPosition();
        },
        /**
* showing the popup with the result
* @private
*/
        _showResult: function () {
            this._refreshPopup();
            this._refreshScroller();
            if (this._isOpened) 
                $(document).bind("mousedown", $.proxy(this._OnDocumentClick, this));
            else {
                this.suggestionList.css("display", "none");
                var tis = this;
                clearTimeout(this._typing);
                this._typing = setTimeout(function () {
                    tis.suggestionList.slideDown(200, "easeOutQuad", function () {
                        $(document).bind("mousedown", $.proxy(tis._OnDocumentClick, tis));
                    });
                },this.model.delaySuggestionTimeout);
            }

            this._isOpened = true;
            this.showSuggestionBox = true;
            var _suggestionListItems = this._getLiTags();
            this._listSize = _suggestionListItems.size();

            _suggestionListItems.bind("mouseenter", $.proxy(this._OnMouseEnter, this));
            _suggestionListItems.bind("mouseleave", $.proxy(this._OnMouseLeave, this));
            _suggestionListItems.bind("click", $.proxy(this._OnMouseClick, this));
            $(window).bind("resize", $.proxy(this._OnWindowResize, this));
        },
        /**
* Refresh the scroller popup functions
* @private
*/
        _hideResult: function () {
            if (this.showSuggestionBox) {
                this.showSuggestionBox = false;
                this._activeItem = 0;
                if (this._isOpened) this.suggestionList.css("display", "none");
                else this.suggestionList.slideUp(100, "easeOutQuad");
                $(document).unbind("mousedown", $.proxy(this._OnDocumentClick, this));
                $(window).unbind("resize", $.proxy(this._OnWindowResize, this));
            }
        },
        /**
* Refresh the scroller popup functions
* @private
*/
        _refreshScroller: function () {
            this.suggestionList.css("height", "auto");
            this.suggestionList.find(".e-content, .e-vscroll").removeAttr("style");
            this.suggestionList.find(".e-vscroll div").removeAttr("style");
            this.suggestionList.css("display", "block");

            this.scrollerObj.model.height = this.suggestionList.height();
            this.scrollerObj.refresh();
            this.scrollerObj.option("scrollTop", 0);
            this.suggestionList.css("height", "auto");
        },
        /**
* set list position while opening the popup
* @private
*/
        _setListPosition: function () {
            var elementObj = this.wrapper;
            var pos = elementObj.offset(),
            left = pos.left,
            totalHeight = elementObj.outerHeight(),
            border = (totalHeight - elementObj.height()) / 2,
            maxZ = this._getZindexPartial();
            if (this.model.enableRTL  ) left -= this.suggestionList.outerWidth() - elementObj.outerWidth();

            this.suggestionList.css({
                "left": left + "px",
                "top": pos.top + totalHeight - border + 3 + "px",
                "z-index": maxZ
            });
        },
        /**
* Z-index calculation for body element
* @private
*/
        _getZindexPartial: function () {
            var parents = this.element.parents(), bodyEle;
            bodyEle = $('body').children(), index = bodyEle.index(this.popup);
            bodyEle.splice(index, 1);
            $(bodyEle).each(function (i, ele) { parents.push(ele); });

            var maxZ = Math.max.apply(maxZ, $.map(parents, function (e, n) {
                if ($(e).css('position') != 'static') return parseInt($(e).css('z-index')) || 1;
            }));
            if (!maxZ || maxZ < 10000) maxZ = 10000;
            else maxZ += 1;
            return maxZ;
        },
        /**
* define target focus for the value.
* @private
*/
        _targetFocus: function () {
            var minWidth = 30;  //  minimum width for textbox in visualmode
            if (this.model.multiSelectMode == "visualmode") this.element.width(minWidth);
            if (this.element.hasClass("e-watermark")) {
                this.element.removeClass("e-watermark");
                this.element.val("");
            }
            this.wrapper.addClass("e-focus");
            this._isFocused = true;
            /* Raise focusIn Event*/
           
            this._trigger("focusIn", { value:this.model.value });
        },
        /**
* define visual mode and other modes with value
* @private
*/
        _targetBlur: function () {
            this._isFocused = false;
            this.wrapper.removeClass("e-focus");
            !this._isWatermark && this._setWatermarkTxt();
            this._removeSelection();

            if (this.model.multiSelectMode == "visualmode") {
                this._removeActive();
                this.element.val("").width(1);
                this._preVal = "";
            }
            else {
                if (this.model.multiSelectMode == "delimiter") {
                    var val, deli, last;
                    val = $.trim(this.element.val());
                    deli = this.model.delimiterChar;
                    last = val.substr(val.length - deli.length, val.length);
                    if (last == deli) {
                        this.element.val(val.substr(0, val.length - deli.length));
                        this._valueChange();
                    }
                }
                this._updateSelectedItemArray();
            }

            /* Raise focusOut Event*/
            this.model.multiSelectMode != "visualmode" && this._hiddenInput.val(this.element.val());
            this._trigger("focusOut", { value: this.model.value });
        },
        /**
* remove selection from the autocomplete textbox.
* @private
*/
        _removeSelection: function () {
            if (this.model.enableAutoFill) {
                this.element.attr("aria-autocomplete", "both");
                var selection = this._getCaretSelection();
                if (selection.end - selection.start != 0 && selection.end - selection.start != this.element.val().length) 
                    this.target.value = this.target.value.substr(0, selection.start);
            }
        },
        /**
* remove list hover after hover item is changed.
* @private
*/
        _removeListHover: function () {
            this._getLiTags().removeClass("e-hover");
        },
        /**
* add hover class for the hovered  list item.
* @private
*/
        _addListHover: function () {
            var activeItem = $(this._getLiTags()[this._activeItem - 1]);
            activeItem.addClass("e-hover");
            this.scrollerObj.setModel({ "scrollTop": this._calcScrollTop() });
            activeItem.focus();
        },
        /**
* Caluculate scroll top for  the scroller.
* @private
*/
        _calcScrollTop: function () {
            var ulH = this.ul.outerHeight(), li = this.ul.find("li"), liH = 0, index, top, i;
            index = this.ul.find("li.e-hover").index();
            for (i = 0; i < index; i++) { liH += li.eq(i).outerHeight(); }
            top = liH - ((this.suggestionList.outerHeight() - li.eq(index).outerHeight()) / 2);
            return top;
        },
        /**
* Retrives the text from the active item.
* @private
*/
        _getActiveText: function () {
            if (this._mapper.txt) return this._getField(this._currList[this._activeItem - 1], this._mapper.txt);
            else return this._currList[this._activeItem - 1];
        },
        /**
* Retrives the unique key of the curent selected item.
* @private
*/
        _getUniqueKey: function () {
            var key = null;
            if (this._mapper.key) key = this._getField(this._currList[this._activeItem - 1], this._mapper.key);
            ej.isNullOrUndefined(key) && (key = null);
            return key;
        },
        /**
* set the textbox value for selecting the function
* @private
*/
        _setTextBoxValue: function () {
            if (this._activeItem && !this.noresult) {
                var currentValue, selection, val, text;
                currentValue = this._getActiveText();
                selection = this._getCaretSelection();
                this.suggLen = selection.start;
                val = this.target.value.substr(0, this.suggLen);

                if (val && val.toLowerCase() == currentValue.substr(0, this.suggLen).toLowerCase()) {
                    if (this.model.multiSelectMode == "delimiter") {
                        var _deliIndex = (this.target.value).lastIndexOf(this.model.delimiterChar);
                        var query = $.trim(val.substr(_deliIndex + 1, this.suggLen));
                        text = val + currentValue.substr(query.length, currentValue.length);
                    }
                    else {
                        text = val + currentValue.substr(val.length, currentValue.length);
                    }
                    this.element.val(text);
                    this._autofilSelection();
                    if (this.model.multiSelectMode == "visualmode")
                        this._adjustWidth();
                }
                else this._removeSelection();
            }
        },
        /**
* entering textbox value with the value selected.
* @private
*/
        _enterTextBoxValue: function () {
            if (this._activeItem && !this.noresult && !this.model.readOnly) {
                var currentValue = this._getActiveText(), currItem = this._currList[this._activeItem - 1];
                this._valueToTextBox(currentValue, currItem, false);
                var _value = this.model.multiSelectMode == "visualmode" ? this._hiddenInput.val() : this.element.val();
               
                    this._trigger("select", { value: _value, text: currentValue, key: this._getUniqueKey() });
                this._valueChange();
            }
        },
        /**
* creating box functionality for the box model.
* @private
*/
        _createBox: function (value) {
            var span = ej.buildTag("span.e-icon e-close");
            var li = ej.buildTag("li.e-options", value).append(span);

            this._on(span, "click", function (e) {
                if (!this.model.enabled) return false;
                this._deleteBox($(e.target).parent());
            });
            return li;
        },
        /**
* add loading class while data in search.
* @private
*/
        _addLoadingClass: function () {
            if (this.model.showLoadingIcon)
                this.element.addClass("e-load");
        },
        /**
* Remove loading class after data is loaded.
* @private
*/
        _removeLoadingClass: function () {
            this.element.removeClass("e-load");
        },
        /**
* define functionalities for the highlighted search.
* @private
*/

        _highlightSuggestion: function (suggestion) {
            if ($.trim(this._queryString) != "") {
                var caseSensitive, tempQueryString, RegEx, mch, split, query;
                caseSensitive = this.model.caseSensitiveSearch ? "g" : "gi";
                query = $.trim(this._queryString);
                tempQueryString = this.model.filterType == "startswith" ? "^" + query : query;
                RegEx = new RegExp(tempQueryString, caseSensitive);

                if (RegEx.test(suggestion)) {
                    mch = suggestion.match(RegEx);
                    split = suggestion.split(RegEx);
                    suggestion = "";
                    $(split).each(function (i, val) {
                        if (mch[i])
                            suggestion += val + "<span class='e-hilight-txt'>" + mch[i] + "</span>";
                        else
                            suggestion += val;
                    });
                }
            }
            return suggestion;
        },
        /**
* Applying rtl option for the autocomplete widget.
* @private
*/
        _RightToLeft: function (value) {
            if (value) {
                this.wrapper.addClass("e-rtl");
                this.suggestionList.addClass("e-rtl");
            }
            else {
                this.wrapper.removeClass("e-rtl");
                this.suggestionList.removeClass("e-rtl");
            }
        },
        /**
* Set rounded corner for the autocomplete widget.
* @private
*/
        _setRoundedCorner: function (value) {
            if (value) {
                this.container.addClass("e-corner-all");
                this.suggestionList.addClass("e-corner-all");
            }
            else {
                this.container.removeClass("e-corner-all");
                this.suggestionList.removeClass("e-corner-all");
            }
        },
        /**
*Checking readonly functionality of autocomplete widget.
* @private
*/
        _checkReadOnly: function () {
            if (this.model.readOnly) {
                this.element.attr({ "readonly": "readonly", "aria-readonly": true });
                this._off(this.element, "keydown", this._OnKeyDown);
                this._off(this.element, "keyup", this._OnKeyUp);
            }
            else {
                this.element.removeAttr("readonly").removeAttr("aria-readonly");
                this._on(this.element, "keydown", this._OnKeyDown);
                this._on(this.element, "keyup", this._OnKeyUp);
            }
        },
        /**
* Defining key down functionality for autocomplete widget.
* @private
*/
        _OnKeyDown: function (e) {
            if (this.model.filterType != "startswith")
                this.model.enableAutoFill = false;

            switch (e.keyCode) {
                case 37:    // Left arrow
                case 35:    // End Key
                case 36:    // Home Key
                    this._removeSelection();
                case 39:    //Right arrow
                    break;
                case 38:    //Up arrow
                    e.preventDefault();
                    if (this.showSuggestionBox && this.suggestionList) {
                        this._removeListHover();
                        if (this._activeItem > 1)
                            this._activeItem -= 1;
                        else
                            this._activeItem = this._listSize;
                        this._addListHover();
                        if (this.model.enableAutoFill) {
                            this.element.attr("aria-autocomplete", "both");
                            this._queryString = this.target.value;
                            this._setTextBoxValue();
                        }
                    }
                    break;
                case 40:    //Down arrow
                    e.preventDefault();
                    if (this.showSuggestionBox && this.suggestionList) {
                        this._removeListHover();
                        if (this._activeItem < this._listSize)
                            this._activeItem += 1;
                        else
                            this._activeItem = 1;
                        this._addListHover();
                        if (this.model.enableAutoFill) {
                            this.element.attr("aria-autocomplete", "both");
                            this._queryString = this.target.value;
                            this._setTextBoxValue();
                        }
                    }
                    break;
                case 8:    // Backspace key
                    if ($.trim(this.element.val()) == "") this._isOpened = false;
                    if (this.model.multiSelectMode == "visualmode" && this.element.val() == "") {
                        this._deleteLastBox();
                    }
                    break;
                case 17:    // Ctrl key
                    this.ctrlKeyPressed = true;
                    break;
                case 9:    // Tab key
                    if (this.showSuggestionBox) {
                        e.preventDefault();
                        this._queryString = this.element.val();
                        this._enterTextBoxValue();
                        this._hideResult();
                        this.element.attr("aria-expanded", false);
                    }
                    break;
                case 27:    // Esc key
                    this._isOpened = false;
                    this._hideResult();
                    this.element.attr("aria-expanded", false);
                    break;
            }
            if (this.model.multiSelectMode == "visualmode") {
                if (e.keyCode != 17 && e.keyCode != 8 && e.keyCode != 46) this._removeActive();
                this._adjustWidth();
            }
        },
        /**
 * Defining key up  for autocomplete widget.
 * @private
 */
        _OnKeyUp: function (e) {
            this._keyDownComplete();
            if (this.ctrlKeyPressed) {
                if (e.keyCode == 17)
                    this.ctrlKeyPressed = false;
                return false;
            }

            if ($.trim(this.element.val()) == "" && e.keyCode == 38 && e.keyCode == 40) {
                this._hideResult();
                this.element.attr("aria-expanded", false);
                return false;
            }
            if (!this._checkDelimiter()) return false;
            this._queryString = $.trim(this._queryString);

            switch (e.keyCode) {
                //Restricts the keyup event for other functional keys          

                case 38: // Up Key
                case 40: // Down Key
                case 37: // Left Key
                case 39: // Right Key
                case 20: // CapsLk
                case 16: // Shift Key
                case 17: // Ctrl Key
                case 18: // Alt Key
                case 35: // End Key
                case 36: // Home Key
                case 144: // Num Lock
                case 9:    // Tab key
                case 27: break;  // Esc Key

                case 13:    // Enter Key
                    e.preventDefault();
                    this._queryString = this.element.val();
                    this._enterTextBoxValue();
                    if (this.model.enableAutoFill) {
                        this.element.attr("aria-autocomplete", "both");
                        this.suggLen = this.element.val().length;
                        this._autofilSelection();
                    }
                    this._isOpened = false;
                    this._hideResult();
                    this.element.attr("aria-expanded", false);
                    break;

                case 46:    // Delete Key
                    if (this.model.multiSelectMode == "visualmode" && this.element.val() == "") {
                        this._deleteBox(this._ulBox.children("li.e-active"));
                        break;
                    }
                case 8:     // Backspace Key
                    if (this._queryString.length >= this.model.minCharacter) {
                        this._autoFill = false;
                        this._OnTextEnter();
                    }
                    else {
                        this.noresult = true;
                        this._hideResult();
                        this.element.attr("aria-expanded", false);
                        if ($.trim(this.element.val()) == "") this._isOpened = false;
                    }
                    break;

                default:
                    if (this._queryString.length >= this.model.minCharacter) {
                        this._autoFill = true;
                        this._OnTextEnter();
                    }
                    else this.noresult = true;
                    break;
            }
        },
        /**
* Getting filtered list from the data source.
* @private
*/
        _getFilteredList: function (list) {
            if (!list || !list.length || list.length < 1) this.suggestionListItems = [];
            else {
                var tempQuery = ej.Query();
                this._addQuery(tempQuery, typeof list[0] == "object");
                this.suggestionListItems = ej.DataManager(list).executeLocal(tempQuery);
            }
            this._doneRemaining();
        },
        /**
* Performing searching operation using query.
* @private
*/
        _performSearch: function () {
            var source = this.model.dataSource;
            if (ej.DataManager && source instanceof ej.DataManager) {
                if (!source.dataSource.offline) {
                    window.clearTimeout(this.timer);
                    var proxy = this;
                    // a time delay to avoid the continuous request
                    this.timer = window.setTimeout(function () {
                        proxy._fetchRemoteDat(source);
                    }, 700);
                }
                else this._getFilteredList(source.dataSource.json);
            }
            else this._getFilteredList(source);
        },
        /**
* Fetching data from the remote location using query.
* @private
*/
        _fetchRemoteDat: function (source) {
            var proxy = this, queryPromise, tempQuery = this._getQuery();
            this._addQuery(tempQuery, true);
            queryPromise = source.executeQuery(tempQuery);
            queryPromise.fail(function (e) {
                proxy.suggestionListItems = null;
                proxy._removeLoadingClass();
            }).done(function (e) {
                proxy.suggestionListItems = e.result;
                proxy._doneRemaining();
            });
        },
        /**
 * Add sorting operation for the query.
 * @private
 */
        _addSortingQuery: function (query, key) {
            if (this.model.allowSorting) {
                var order = (this.model.sortOrder == "descending") ? true : false;
                query.sortBy(key, order);
            }
        },
        /**
 * Add value to the query for by retriving value from maaper value field
 * @private
 */
        _addQuery: function (_query, checkMapper) {
            var bindTo = "";
            if (checkMapper) {
                var mapper = this.model.fields;
                bindTo = (mapper && mapper.text) ? mapper["text"] : "text";
            }
            if (this._queryString) _query.where(bindTo, this.model.filterType, this._queryString, !this.model.caseSensitiveSearch);
            this._addSortingQuery(_query, bindTo);
            if (this.model.itemsCount > 0) _query.take(this.model.itemsCount);
        },
        /**
 * creates a query for the given value to process the data spurce
 * @private
 */
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
            else queryManager = this.model.query.clone();
            return queryManager;
        },
        /**
 * While typing the text in text box the functionalities has to be done are mentioned here
 * @private
 */
        _OnTextEnter: function () {
            this._addLoadingClass();
            this._hideResult();
            this.element.attr("aria-expanded", false);
            this._performSearch();
        },
        /**
     * Fill the text box with the complete word in the auto fill option
     * @private
     */
        _doneRemaining: function () {
            this._showSuggestionList();
            this.element.attr("aria-expanded", true).attr("aria-haspopup", true);
            if (this.model.enableAutoFill && this._autoFill && !this.noresult) {
                this.element.attr("aria-autocomplete", "both");
                this._activeItem = 1;
                this._queryString = this.target.value;
                this._setTextBoxValue();
            }
            this._removeLoadingClass();
        },
        /**
      * Remove repeated values in the suggestion list
      * @private
      */
        _removeRepeated: function () {
            var results = this.suggestionListItems;
            if (!results || results.length == 0 || this._selectedItems.length == 0)
                return false;
            for (var i = 0; i < this._selectedItems.length; i++) {
                var index = results.indexOf(this._selectedItems[i]);
                if (index != -1) this.suggestionListItems.splice(index, 1);
            }
        },
        /**
      * Check deleimiter while typing in textbox widget
      * @private
      */
        _checkDelimiter: function () {
            this._queryString = !this.element.hasClass("e-watermark") ? this.element.val() : "";
            var _deliIndex = (this.model.multiSelectMode != "delimiter") ? -1 : this._queryString.lastIndexOf(this.model.delimiterChar);

            /*Check Delimiter Conditions and current text*/
            if (_deliIndex == -1) {
                return true;
            }
            else if (_deliIndex + 1 == this._queryString.length) {
                this._hideResult();
                this.element.attr("aria-expanded", false);
                return false;
            }
            else {
                this._queryString = this._queryString.substr(_deliIndex + 1, this._queryString.length);
                return true;
            }
        },
        /**
      * autofill selection in autocomplete is processed with below functionalities
      * @private
      */
        _autofilSelection: function () {
            var element = this.element[0], totLen = this.element.val().length;

            if (element.setSelectionRange)
                element.setSelectionRange(this.suggLen, totLen);
            else if (element.createTextRange) {
                // For lower version browsers (IE8, IE7 ...)
                element = element.createTextRange();
                element.collapse(true);
                element.moveEnd('character', totLen);
                element.moveStart('character', this.suggLen);
                element.select();
            }
        },
        /**
      * dropdown button click is processed with the following action
      * @private
      */
        _OnDropdownClick: function (e) {
            if (this.model.enabled && !this.model.readOnly) {
                e.preventDefault();
                this._addLoadingClass();
                if (this.showSuggestionBox) {
                    this._isOpened = false;
                    this._hideResult();
                    this.element.attr("aria-expanded", false);
                    this._removeLoadingClass();
                }
                else this._showFullList();
            }
        },
        /**
      * Shows the autocomplete popup with full list
      * @private
      */
        _showFullList: function () {
            if (!this._isFocused)
                this.element.focus();
            this._queryString = null;
            this._autoFill = false;
            this._performSearch();
        },
        /**
      * Mouse enter in popup is detected and processed here
      * @private
      */
        _OnMouseEnter: function (e) {
            var targetEle = e.target;
            if (e.target.tagName != "LI") targetEle = $(e.target).parents("li");
            this._getLiTags().removeClass("e-hover");
            $(targetEle).addClass("e-hover");

            this._queryString = this.element.val();
            this._activeItem = this._getLiTags().index($(targetEle)) + 1;
        },
        /**
      * Mouse leave in popup is detected and processed here
      * @private
      */
        _OnMouseLeave: function (e) {
            this._getLiTags().removeClass("e-hover");
            if (this.model.highlightSearch)
                this._getLiTags().find(".e-hilight-txt").removeClass("e-hover");
        },
        /**
      * Mouse click of popup is detected and processed here	
      * @private
      */
        _OnMouseClick: function (e) {
            if (!this.noresult) {
                this._enterTextBoxValue();
                this._isOpened = false;
                this._hideResult();
                this.element.attr("aria-expanded", false);
            }
        },
        /**
      * document click detection and binding and prodcessing
      * @private
      */
        _OnDocumentClick: function (e) {
            if (!$(e.target).is(this.suggestionList) && !$(e.target).parents(".e-atc-popup").is(this.suggestionList) &&
                !$(e.target).is(this.element) && !$(e.target).parents(".e-atc").is(this.wrapper)) {
                this._isOpened = false;
                this._hideResult();
                this.element.attr("aria-expanded", false);
            }
            else if ($(e.target).is(this.suggestionList) || $(e.target).parents(".e-atc-popup").is(this.suggestionList))
                e.preventDefault();
        },
        /**
      * window resize events for popup control		
      * @private
      */
        _OnWindowResize: function (e) {
            this._refreshPopup();
        },
        /**
      * value change fuction in checkbox events	
      * @private
      */
        _valueChange: function () {
            var currValue = this.model.multiSelectMode == "visualmode" ? this._hiddenInput.val() : this.element.val();
            if (this.model.value != currValue) {
                this.model.value = currValue;
                this.model.multiSelectMode != "visualmode" && this._hiddenInput.val(this.element.val());
                    this._trigger("change", { value: currValue });
            }
        },
        /**
      * Update selected array of selection from datasource 
      * @private
      */
        _updateSelectedItemArray: function (e) {
            var value = this.getValue();
            this._selectedItems = [];
            if (this.model.multiSelectMode == "delimiter") {
                var values = value.split(this.model.delimiterChar);
                for (var i = 0; i < values.length; i++)
                    if (values[i]) this._selectedItems.push(values[i]);
            }
            else if (this.model.multiSelectMode == "none" && value)
                this._selectedItems.push(value);
        },
        /**
       * KeyDown complete of selection event		
       * @private
       */
        _keyDownComplete: function () {
            var currValue = this.element.val();
            if (this._preVal != currValue) {
                this._preVal = currValue;
                if (this.model.multiSelectMode == "visualmode") this._adjustWidth();
                this._valueChange();
            }
        },
        /**
       * character Move to End of Autocomple control		
       * @private
       */
        _moveCaretToEnd: function (el) {
            if (typeof el.selectionStart == "number") {
                el.selectionStart = el.selectionEnd = el.value.length;
            } else if (typeof el.createTextRange != "undefined") {
                var range = el.createTextRange();
                range.collapse(false);
                range.select();
            }
        },
        /**
       * character selection of Autocomple control		
       * @private
       */
        _getCaretSelection: function () {
            var input = this.element[0], start = 0, end = 0;

            if (!isNaN(input.selectionStart)) {
                start = input.selectionStart;
                end = input.selectionEnd;
                return { start: Math.abs(start), end: Math.abs(end) };
            }
            // For lower version browsers (IE8, IE7 ...)
            var bookmark = document.selection.createRange().getBookmark();
            var selection = input.createTextRange();
            selection.moveToBookmark(bookmark);

            var before = input.createTextRange();
            before.collapse(true);
            before.setEndPoint("EndToStart", selection);
            var beforeLength = before.text.length, selLength = selection.text.length;
            return { start: beforeLength, end: beforeLength + selLength };
        },

        //-------------------- Event Wire-up -------------------------//
        /**
         * Wiring the events to Autocomple control		
		 * @private
         */
        _wireEvents: function () {
            this._on(this.element, "focus", this._targetFocus);
            this._on(this.element, "blur", this._targetBlur);
        }
    });
    /**
	 * Enum for Autocomplete Filter mode.	 
	 * @enum {string}
	 * @global 
	 */
    ej.filterType = {
        /**  Supports to search text with startswith  */
        StartsWith: "startswith",
        /**  Supports to search text with contains */
        Contains: "contains",
        /**  Supports to search text with endswith */
        EndsWith: "endswith",
        /**  Supports only for number lessthan only */
        LessThan: "lessthan",
        /**  Supports only for number greaterthan only */
        GreaterThan: "greaterthan",
        /**  Supports only for number lessthanorequal only */
        LessThanOrEqual: "lessthanorequal",
        /**  Supports only for number greaterthanorequal only */
        GreaterThanOrEqual: "greaterthanorequal",
        /**  Supports only for number equal only */
        Equal: "equal",
        /** Supports only for number notequal only */
        NotEqual: "notequal"
    };
    /**
	 * Enum for Autocomplete sortOrder mode.	 
	 * @enum {string}
	 * @global 
	 */
    ej.SortOrder = {
        /** Supports to sorts with ascending only */
        Ascending: "ascending",
        /** Supports to sorts with descending only */
        Descending: "descending"
    };
    /**
	 * Enum for Autocomplete selection mode.	 
	 * @enum {string}
	 * @global 
	 */
    ej.MultiSelectMode = {
        /** Supports to selection mode with none only */
        None: "none",
        /** Supports to selection mode with delimitter only */
        Delimiter: "delimiter",
        /** Supports to selection mode with visualmode only */
        VisualMode: "visualmode"
    }
})(jQuery, Syncfusion);;