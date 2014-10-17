/*!
*  filename: ej.dropdownlist.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

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
   * @classdesc The DropDownList control provides a list options to make user to choose an item from the list. It is capable of including other html elements such as images, textboxes, check box, radio buttons and so on.
   * @class ejDropDownList
   * @requires jQuery
   * @requires jquery.easing.1.3.js
   * @requires ej.core.js
   * @requires ej.data.js
   * @requires ej.dropdownlist.js
   * @requires ej.checkbox.js
   * @requires ej.scroller.js
   * @example 
   * &lt;input type="text" id="drpdwn" /&gt; <br> 
   *  &lt;div id="carsList"&gt;
   *    &lt;ul&gt;
   *       &lt;li&gt;Audi A4&lt;/li&gt;
   *       &lt;li&gt;Audi A5&lt;/li&gt;
   *       &lt;li&gt;Audi A6&lt;/li&gt;
   *       &lt;li&gt;Audi A7&lt;/li&gt;
   *       &lt;li&gt;Audi A8&lt;/li&gt;
   *    &lt;/ul&gt;
   *  &lt;/div&gt;
   * &lt;script&gt;
   * // Create DropDownList
   * $('#drpdwn').ejDropDownList({targetID: "carsList"}); 	
   * &lt;/script&gt; 
   *@example
    * // Another way to render DropDownList control.
	*   &lt;select name="selectIndex" id="drpdwn"&gt;
	*        &lt;option value="Art"&gt;Art&lt;/option&gt;
	*        &lt;option value="Architecture"&gt;Architecture&lt;/option&gt;
	*        &lt;option value="Biographies"&gt;Biographies&lt;/option&gt;
	*        &lt;option value="Business"&gt;Business&lt;/option&gt;
	*        &lt;option value="ComputerIT"&gt;ComputerIT&lt;/option&gt;
	*        &lt;option value="Comics"&gt;Comics&lt;/option&gt;
	*        &lt;option value="Cookery"&gt;Cookery&lt;/option&gt;
	*        &lt;option value="Environment"&gt;Environment&lt;/option&gt;
	*        &lt;option value="Fiction"&gt;Fiction&lt;/option&gt;
	*        &lt;option value="Health"&gt;Health&lt;/option&gt;
	*        &lt;option value="Humanities"&gt;Humanities&lt;/option&gt;
	*        &lt;option value="Language"&gt;Language&lt;/option&gt;
	*    &lt;/select&gt;
	* &lt;script&gt;
    * // Create DropDownList
    * $('#drpdwn').ejDropDownList(); 	
    * &lt;/script&gt; 
    */
    // ejDropdownlist is the plugin name 
    // "ej.Dropdownlist" is "namespace.className" will hold functions and properties

    ej.widget("ejDropDownList", "ej.DropDownList", {
        // widget element will be automatically set in this
        element: null,
        // user defined model will be automatically set in this
        model: null,
        validTags: ["select", "input"],
        _setFirst: false,
        //Root Css Class
        _rootCSS: "e-dropdownlist",

        // default model
        defaults: {
            /**		
            * Sets the root class for DropDownList theme. This cssClass API helps to use custom skinning option for DropDownList control. By defining the root class using this API, we need to include this root class in CSS.
            * @default "gradient-lime"
            * @type {string}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/>
			* &lt;script&gt;
            * //Initialize the DropDownList with the cssClass value specified
            * 	$("#drpdwn").ejDropDownList({ targetID: "carsList",cssClass: 'gradient-lime'});
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            cssClass: "",
            /**
            * Defines the default value to be display in the DropDownList textbox.
            * @default Null
            * @type {string}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;
            * //Initialize the DropDownList value property with the  value specified
            * 	$("#drpdwn").ejDropDownList({ targetID: "carsList",value:"Audi A7" });
             * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            value: "",
           
            text: "",
           
            itemValue: "",
            /**		
            * Specifies the itemsCount   for DropDownList.
            * @default 0
            * @type {number}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // To set itemsCount   API value during initialization  . 	
            * 	$("#drpdwn").ejDropDownList({  targetID: "carsList",itemsCount  : 2 });
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            itemsCount: 0,
            /**		
            * Specifies the data source of the DropDownList. The data source contains the list of data for generating the DropDownList items.	
            * @default null
            * @type {data}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			* &lt;script&gt;		
            * //To set dataSource API value during initialization  
            * 	$("#drpdwn").ejDropDownList({ dataSource: window.countries });			 
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            dataSource: null,
            /**		
            * Specifies the query to retrieve the data from online server.	
            * @default null
            * @type {object}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			* &lt;script&gt;		
            * //To set query API value during initialization  
            * var dataManger = ej.DataManager({       url: "http://mvc.syncfusion.com/Services/Northwnd.svc/"});
            * var queryString = ej.Query().from("Suppliers").select("ContactName");
            * 	$("#drpdwn").ejDropDownList({ dataSource: dataManger, query: queryString, fields: { text: "ContactName" }});
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            query: null,
            /**		
            * Specifies mapping fields for the data items of the DropDownList textbox.	
            * @default null
            * @type {object}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			* &lt;script&gt;		
            * //To set fields API value during initialization  
            * 	$("#drpdwn").ejDropDownList({ dataSource: window.countriesField,   fields: { text: "name", value: "key" }});
             * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            fields:/** @lends ejDropDownList# */ { 
				/**		
                 * Defines id for the tag.
				 * @alias ejDropDownList#fields->id
				 * @type String
                 */
			id: null, 
				/**		
                 * Defines the text content for the tag.
				 * @alias ejDropDownList#fields->text
				 * @type String
                 */
			text: null, 
				/**		
                 * Defines the tag value or display text..
				 * @alias ejDropDownList#fields->value
				 * @type String
                 */
			value: null, 
				/**		
                 * Defines the imageURL for the image location. 
				 * @alias ejDropDownList#fields->imageUrl
				 * @type String
                 */
			imageUrl: null,
                 /**		
                 * Defines the image attributes such as height, width, styles and so on.
				 * @alias ejDropDownList#fields->imageAttributes
				 * @type String
                 */			
			imageAttributes: null, 
				/**		
                 * Defines the sprite css for the image tag.
				 * @alias ejDropDownList#fields->spriteCssClass
				 * @type String
                 */
			spriteCssClass: null, 
				/**		
                 * Defines the html attributes such as id, class, styles for the item.
				 * @alias ejDropDownList#fields->htmlAttributes
				 * @type Object
                 */
			htmlAttributes: null, 
				/**		
                 * Defines the tag value to be selected initially
				 * @alias ejDropDownList#fields->selected
				 * @type Boolean
                 */
			selected: null, 
				/**		
                 * Defines the table name for tag value or display text while render with remote data.
				 * @alias ejDropDownList#fields->tableName
				 * @type String
                 */
			tableName: null
			},
            /**		
            * Sets the watermark text. When the textbox is empty the watermark text is visible like a shaded text. 
            * @default "Enter text"
            * @type {string}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * //Initialize the DropDownList with the watermarkText value specified
            * 	$("#drpdwn").ejDropDownList({ targetID: "carsList",watermarkText: 'Enter text' });
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            watermarkText: null,
            /**		
            * Defines the height of the DropDownList textbox.
            * @default Null
            * @type {string | number}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * //Initialize the DropDownList height property with the  value specified
            * 	$("#drpdwn").ejDropDownList({ targetID: "carsList",height: 30 });
          * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            height: "",
            /**		
            * Defines the width of the DropDownList textbox.
            * @default Null
            * @type {string | number}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * //Initialize the DropDownList width property with the width value specified
            * 	$("#drpdwn").ejDropDownList({ targetID: "carsList",width: 250 });
           * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            width: "",
            /**		
            * Defines the popupHeight of the suggestion box.
            * @default "152px"
            * @type {string | number}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * //Initialize the DropDownList popupHeight property with the  value specified
            * 	$("#drpdwn").ejDropDownList({ targetID: "carsList",popupHeight: '152px' });
             * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            popupHeight: "152px",
            /**		
            * Defines the popupWidth of the suggestion box.
            * @default "auto"
            * @type {string | number}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * //Initialize the DropDownList popupWidth property with the  value specified
            * 	$("#drpdwn").ejDropDownList({ targetID: "carsList",popupWidth: '152px' });
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            popupWidth: "auto",
            /**		
            * Specifies the targetID for DropDownList.
            * @default null
            * @type {string}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // To set targetID API value during initialization  . 	
            * 	$("#drpdwn").ejDropDownList({ targetID: "carsList" });
           * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            targetID: null,
            /**		
            * Specifies the template for DropDownList.
            * @default null
            * @type {string}
            * @example <br/> 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			* &lt;script&gt;		
            * // To set template API value during initialization  . 	
            * $("#drpdwn").ejDropDownList({ dataSource: window.drpdwnempList, template: '&lt;img class="eimg" src="styles/images/Employee/${eimg}.png" alt="employee" height="50px" width="50px"/&gt;' +
            *   '&lt;div class="ename"&gt; ${text} &lt;/div&gt;&lt;div class="desig"&gt; ${desig} &lt;/div&gt;&lt;div class="cont"&gt; ${country} &lt;/div&gt;',width: "200px"});
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            template: null,
            /**		
            * Specifies the selectedItemIndex   for DropDownList.
            * @default null
            * @type {number}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // To set selectedItemIndex   API value during initialization  . 	
            * 	$("#drpdwn").ejDropDownList({  targetID: "carsList",selectedItemIndex  : 2 });
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            selectedItemIndex: null,
            /**		
            * Specifies the selectedItems  for DropDownList.
			* @remarks
            * If We would use the selectedItems option,we will follow this:
            *  1.To enable the checkbox option as true{showCheckbox:true} See {@link ejDropDownList#showCheckbox}
            * @default []
            * @type {integerarray}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // To set selectedItems   API value during initialization  . 	
            * 	$("#drpdwn").ejDropDownList({  targetID: "carsList",showCheckbox: true, selectedItems  : [1,2] });
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            selectedItems: [],
            /**		
            * cascadeTois used in cascading Dropdown list scenario, to map the child Dropdown list widget in the parent Dropdown list widget. By selecting an option in the parent dropdown, the child DropDownList has to load the corresponding value regarding the parent Dropdown. 
            * @default null
            * @type {string}
            * @example 
			* &lt;div style="float: left;"&gt;
			*       &lt;span class="txt"&gt;Select Group&lt;/span&gt;
			*       &lt;input id="groupsList" type="text" /&gt;
			* &lt;/div&gt;
			*
			* &lt;div style="float: right;"&gt;
			*        &lt;span class="txt"&gt;Select Country&lt;/span&gt;
			*        &lt;input id="countryList" type="text"/&gt;
			* &lt;/div&gt;
			* &lt;script&gt;
			*  var groups = [
			*          { parentId: 'a', text: "Group A" },
			*          { parentId: 'b', text: "Group B" },
			*          { parentId: 'c', text: "Group C" },
			*          { parentId: 'd', text: "Group D" },
			*          { parentId: 'e', text: "Group E" }]
			*            //first level child
			*            var countries = [{ value: 11, parentId: 'a', text: "Algeria", sprite: "flag-dz" },
			*           { value: 12, parentId: 'a', text: "Armenia", sprite: "flag-am" },
			*           { value: 13, parentId: 'a', text: "Bangladesh", sprite: "flag-bd" },
			*           { value: 14, parentId: 'a', text: "Cuba", sprite: "flag-cu" },
			*           { value: 15, parentId: 'b', text: "Denmark", sprite: "flag-dk" },
			*           { value: 16, parentId: 'b', text: "Egypt", sprite: "flag-eg" },
			*           { value: 17, parentId: 'c', text: "Finland", sprite: "flag-fi" },
			*           { value: 18, parentId: 'c', text: "India", sprite: "flag-in" },
			*           { value: 19, parentId: 'c', text: "Malaysia", sprite: "flag-my" },
			*           { value: 20, parentId: 'd', text: "New Zealand", sprite: "flag-nz" },
			*           { value: 21, parentId: 'd', text: "Norway", sprite: "flag-no" },
			*           { value: 22, parentId: 'd', text: "Poland", sprite: "flag-pl" },
			*           { value: 23, parentId: 'e', text: "Romania", sprite: "flag-ro" },
			*           { value: 24, parentId: 'e', text: "Singapore", sprite: "flag-sg" },
			*           { value: 25, parentId: 'e', text: "Thailand", sprite: "flag-th" },
			*           { value: 26, parentId: 'e', text: "Ukraine", sprite: "flag-ua" }]
			* // To set cascadeTo API value during initialization  . 
			*            $('#groupsList').ejDropDownList({
			*                dataSource: groups,
			*                fields: { value: "parentId" },
			*                cascadeTo: 'countryList'
			*            });
			*            $('#countryList').ejDropDownList({
			*                dataSource: countries,
			*                enabled:false
			*            });
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            cascadeTo: null,
            /**		
            * DropDownList textbox to be displayed with rounded corner style.
            * @default true
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // Initialize the DropDownList with the showRoundedCorner value specified.
            * $("#drpdwn").ejDropDownList({targetID: "carsList",showRoundedCorner: true });
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            showRoundedCorner: false,
            /**		
            * DropDownList textbox to be displayed with Popup shown.
            * @default true
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;			
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // Initialize the DropDownList with the showPopupOnLoad value specified.
            * $("#drpdwn").ejDropDownList({targetID: "carsList",showPopupOnLoad: true });
           * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            showPopupOnLoad: false,
            /**		
            * Sets the DropDownList textbox direction as right to left alignment.
            * @default false
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // Initialize the DropDownList with the enableRTL  value specified.
            * $("#drpdwn").ejDropDownList({ targetID: "carsList",enableRTL : true });
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            enableRTL: false,
            /**		
            * When this property sets to false, it disables the DropDownList control.
            * @default true
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // Initialize the DropDownList with the enabled  value specified.
            * $("#drpdwn").ejDropDownList({ targetID: "carsList",enabled : false });
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            enabled: true,
            /**		
            * Sets the case sensitivity of the search operation..
            * @default false
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // Initialize the DropDownList with the caseSensitiveSearch value specified.
            * $("#drpdwn").ejDropDownList({ targetID: "carsList",caseSensitiveSearch: true });
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            caseSensitiveSearch: false,
            /**		
            * Specifies the multi selection option in DropDownList with the help of checkbox control. For this we have to enable it by showCheckbox option true.
            * @default false
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // Initialize the DropDownList with the showCheckbox value specified.
            * $("#drpdwn").ejDropDownList({ targetID: "carsList",showCheckbox: true });
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            showCheckbox: false,
            /**		
            * Specifies to select all the items of DropDownList can be done with the help of this checkAll property, it supports only when the showCheckbox property true.
			* @remarks
			* If We would use the checkAll option,we will follow this:
            *  1.To enable the checkbox option as true{showCheckbox:true}See {@link ejDropDownList#showCheckbox}
            * @default false
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // Initialize the DropDownList with the checkAll value specified.
            * $("#drpdwn").ejDropDownList({ targetID: "carsList",showCheckbox: true, checkAll: true });
           * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            checkAll: false,
            /**		
            * Specifies to unselect all the items of DropDownList can be done with the help of this checkAll property, it supports only when the showCheckbox property true.
			* @remarks
			* If We would use the uncheckAll option,we will follow this:
            *  1.To enable the checkbox option as true{showCheckbox:true}See {@link ejDropDownList#showCheckbox}
            * @default false
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // Initialize the DropDownList with the uncheckAll value specified.
            * $("#drpdwn").ejDropDownList({ targetID: "carsList",showCheckbox: true, uncheckAll: true });
           * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            uncheckAll: false,
            /**		
            * Save current model value to browser cookies for state maintains. While refresh the DropDownList control page retains the model value apply from browser cookies.  
            * @default false
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // Initialize the DropDownList with the enablePersistence  value specified.
            * $("#drpdwn").ejDropDownList({ targetID: "carsList",enablePersistence : false });
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            enablePersistence: false,
            /**		
            * Specifies to perform incremental search for selection of items from DropDownList can be done with the help of this property, this will helpful in selecting the item using the typed character.
            * @default true
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // Initialize the enableIncrementalSearch with the value specified.
            * $("#drpdwn").ejDropDownList({targetID: "carsList",enableIncrementalSearch: true });
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            enableIncrementalSearch: false,
            /**		
            * Indicates that the DropDownList textbox values can only be read.
            * @default true
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
            * // Initialize the DropDownList with the readOnly value specified.
            * $("#drpdwn").ejDropDownList({targetID: "carsList",readOnly: true });
           * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            readOnly: false,
            /**		
            * Indicates that the multiSelectMode values can only be read.
			* @remarks
			* If We would use the uncheckAll option,we will follow this:
            *  1.To enable the checkbox option as true{showCheckbox:true}See {@link ejDropDownList#showCheckbox}
            * @default true
            * @type {boolean}
            * @example 
			* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/>
			* &lt;script&gt;
            * // Initialize the allowMultiSelection with the value specified.
            * $("#drpdwn").ejDropDownList({targetID: "carsList",showCheckbox: true,allowMultiSelection: true });
            * &lt;/script&gt;
            * @memberof ejDropDownList
            * @instance
            */
            allowMultiSelection: false,

            /**     
           * Fires when create successfully.
           * @event
           * @name ejDropDownList#create 	
           * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
           * @param {object}  argument.model returns the DropDownList model
           * @param {string}  argument.type returns the name of the event
           * @example 
		   * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
           * //change event for DropDownList
           * $("#drpdwn").ejDropDownList({ 
		   *    targetID: "carsList",
           *   	create: function(args) {}
           * });
          * &lt;/script&gt;		   
           * @memberof ejDropDownList
           * @instance
           */
            create: null,
            /**     
          * Fires when popupHide successfully.
          * @event
          * @name ejDropDownList#popupHide 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the DropDownList model
          * @param {string}  argument.type returns the name of the event
          * @param {string}  argument.text returns the selected text
          * @param {string}  argument.value returns the selected value
          * @example 
		  * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
          * //popupHide event for DropDownList
          * $("#drpdwn").ejDropDownList({ 
		  *		targetID: "carsList",
          *   	popupHide: function(args) {}
          * });
          * &lt;/script&gt;		  
          * @memberof ejDropDownList
          * @instance
          */
            popupHide: null,
            /**     
         * Fires when popupShown successfully.
         * @event
         * @name ejDropDownList#popupShown 	
         * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
         * @param {object}  argument.model returns the DropDownList model
         * @param {string}  argument.type returns the name of the event
         * @param {string}  argument.text returns the selected text
          * @param {string}  argument.value returns the selected value
         * @example 
		 * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
         * //popupShown event for DropDownList
         * $("#drpdwn").ejDropDownList({ 
		 *		targetID: "carsList",
         *   	popupShown: function(args) {}
         * });
          * &lt;/script&gt;		 
         * @memberof ejDropDownList
         * @instance
         */
            popupShown: null,
            /**     
         * Fires when beforePopupShown successfully.
         * @event
         * @name ejDropDownList#beforePopupShown 	
         * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
         * @param {object}  argument.model returns the DropDownList model
         * @param {string}  argument.type returns the name of the event
         * @param {string}  argument.text returns the selected text
          * @param {string}  argument.value returns the selected value
         * @example 
		 * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
         * //beforePopupShown event for DropDownList
         * $("#drpdwn").ejDropDownList({ 
		 *		targetID: "carsList",
         *   	beforePopupShown: function(args) {}
         * });
          * &lt;/script&gt;		 
         * @memberof ejDropDownList
         * @instance
         */
            beforePopupShown: null,
            /**     
           * Fires when change successfully.
           * @event
           * @name ejDropDownList#change 	
           * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
           * @param {object}  argument.model returns the DropDownList model
           * @param {string}  argument.type returns the name of the event
           * @example 
		   * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
           * //change event for DropDownList
           * $("#drpdwn").ejDropDownList({ 
		   *		targetID: "carsList",
           *   	change: function(args) {}
           * }); 
          * &lt;/script&gt;		   
           * @memberof ejDropDownList
           * @instance
           */
            change: null,
            /**     
          * Fires when select successfully.
          * @event
          * @name ejDropDownList#select 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the DropDownList model
          * @param {string}  argument.type returns the name of the event
          * @example 
		  * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
          * //select event for DropDownList
          * $("#drpdwn").ejDropDownList({ 
		  *		targetID: "carsList",
          *   	select: function(args) {}
          * });      
		  * &lt;/script&gt;
          * @memberof ejDropDownList
          * @instance
          */
            select: null,
            /**     
          * Fires when checkChange successfully.
          * @event
          * @name ejDropDownList#checkChange 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the DropDownList model
          * @param {string}  argument.type returns the name of the event
          * @example 
		  * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
          * //checkChange event for DropDownList
          * $("#drpdwn").ejDropDownList({ 
		  *		targetID: "carsList",
          *   	checkChange: function(args) {}
          * }); 
          * &lt;/script&gt;		  
          * @memberof ejDropDownList
          * @instance
          */
            checkChange: null,
            /**     
          * Fires when destroy successfully.
          * @event
          * @name ejDropDownList#destroy 	
          * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
          * @param {object}  argument.model returns the DropDownList model
          * @param {string}  argument.type returns the name of the event
          * @example 
		  * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;		
          * //destroy event for DropDownList
          * $("#drpdwn").ejDropDownList({ 
		  *		targetID: "carsList",
          *   	destroy: function(args) {}
          * });
          * &lt;/script&gt;		  
          * @memberof ejDropDownList
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
            itemsCount: "number",
            watermarkText: "string",
            popupHeight: "string",
            popupWidth: "string",
            template: "string",
            selectedItemIndex: "number",
            cascadeTo: "string",
            showRoundedCorner: "boolean",
            showPopupOnLoad: "boolean",
            enableRTL: "boolean",
            enablePersistence: "boolean",
            enabled: "boolean",
            readOnly: "boolean",
            allowMultiSelection: "boolean",
            dataSource: "data",
            query: "data",
            fields: "data",
            selectedItems: "array",
			enableAnimation: "boolean"
        },

        observables: ["value"],
        value: ej.util.valueFunction("value"),
        /**
      * To enable the DropDownList  
      * @return jQuery
      * @example 
       * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
			* &lt;script&gt;
      * // Create DropDownList
	  * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5"});
      * var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
      * DropDownListObj.enable(); // enable the DropDownList
      * &lt;/script&gt;
      * @example 
      * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
      * // Create DropDownList
	  * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5"});
      * $('#drpdwn').ejDropDownList("enable"); 	
      * &lt;/script&gt;
      *@memberof ejDropDownList
      * @instance
      */
        //public methods
        enable: function () {
            if (this.element.hasClass("e-disable")) {
                this.target.disabled = false;
                this.model.enabled = true;
                this.element.removeClass('e-disable');
                this.dropdownbutton.removeClass('e-disable');
                this.element.bind("mousedown", $.proxy(this._OnDropdownClick, this));
                this.dropdownbutton.bind("mousedown", $.proxy(this._OnDropdownClick, this));
                if (this.model.allowMultiSelection) this._ulBox.removeClass("e-disable");
            }
        },
        /**
     * To disable the DropDownList  
     * @return jQuery
     * @example 
     * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
     * // Create DropDownList
	 * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5"});
     * var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
     * DropDownListObj.disable(); // disable the DropDownList
     * &lt;/script&gt;
     * @example 
    * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
     * // Create DropDownList
	 * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5"});
     * $('#drpdwn').ejDropDownList("disable"); 	
     * &lt;/script&gt;
     *@memberof ejDropDownList
     * @instance
     */
        disable: function () {
            if (!this.element.hasClass("e-disable")) {
                this.target.disabled = true;
                this.model.enabled = false;
                this.element.addClass('e-disable');
                this.dropdownbutton.addClass('e-disable');
                if (this.model.allowMultiSelection) this._ulBox.addClass("e-disable");
                this.element.unbind("mousedown", $.proxy(this._OnDropdownClick, this));
                this.dropdownbutton.unbind("mousedown", $.proxy(this._OnDropdownClick, this));
            }
        },
        /**
      * Returns the current value selected in the DropDownList textbox.
      * @return jQuery
      * @example 
      * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
      * // Create DropDownList
	 * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5"});
      * var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
      * DropDownListObj.getValue(); // getValue of the DropDownList text
      * &lt;/script&gt;
      * @example 
      * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
      * // Create DropDownList
	 * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5"});
      * $('#drpdwn').ejDropDownList("getValue"); 	
      * &lt;/script&gt;
      *@memberof ejDropDownList
      * @instance
      */
        getValue: function () {
            if (this.element.hasClass("e-watermark"))
                return "";
            return this.target.value;
        },
        _setValue: function (value) {
            if (!this.model.enabled) return false;
            if (this.element.hasClass("e-watermark"))
                this.element.removeClass("e-watermark")
            this.element.val(value);
              this.model.value = value;
            this._hiddenInput.val(value);
            var args = { text: this.element[0].value, selectedText: this.currentValue, itemId: this.selectedIndexValue, value: this.model.value, isChecked: this.checkedStatus };
            this._trigger("change", args);
        },
        _setText: function (text) {
            this.model.text = text;
        },
        _setItemValue: function (itemValue) {
            this.model.itemValue = itemValue;
        },
        _changeWatermark: function (text) {
            if (!this.model.enabled) return false;
            if (this.element.hasClass("e-watermark"))
                this.element.val(text);
        },
        /**
     * popup list hide in the DropDownList textbox.
     * @return jQuery
     * @example 
     * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
     * // Create DropDownList
	* $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5"});
     * var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
     * DropDownListObj.hidePopup(); // hidePopup of the DropDownList 
     * &lt;/script&gt;
     * @example 
    * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
     * // Create DropDownList
	* $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5"});
     * $('#drpdwn').ejDropDownList("hidePopup"); 	
     * &lt;/script&gt;
     *@memberof ejDropDownList
     * @instance
     */
        hidePopup: function () {
            if (!this.model.enabled) return false;
            if (this.ultag.find('li').length > 0)
                this._hideResult();
        },
        /**
   * popup list show in the DropDownList textbox.
   * @return jQuery
   * @example 
  * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
   * // Create DropDownList
   * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5"});
   * var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
   * DropDownListObj.showPopup(); // 
   * &lt;/script&gt;
   * @example 
  * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
   * // Create DropDownList
   * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5"});
   * $('#drpdwn').ejDropDownList("showPopup"); 	
   * &lt;/script&gt;
   *@memberof ejDropDownList
   * @instance
   */
        showPopup: function () {
            if (!this.model.enabled) return false;
            if (this.ultag.find('li').length > 0)
                this._showResult();
        },
        /**
     * Clears the text in the DropDownList textbox.
     * @return jQuery
     * @example 
     * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
     * // Create DropDownList
	 * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5"});
     * var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
     * DropDownListObj.clearText(); // clear the DropDownList text
     * &lt;/script&gt;
     * @example 
    * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
     * // Create DropDownList
     * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5"});
     * $('#drpdwn').ejDropDownList("clearText"); 	
     * &lt;/script&gt;
     *@memberof ejDropDownList
     * @instance
     */
        clearText: function () {
            if (this.model.enabled) {
                this.element.val("");
                this.value("");
                this.model.text = "";
                if (this.model.watermarkText != null) {
                    if ($.trim(this.element.val()) === '') {
                        this.element.val(this.model.watermarkText);
                        this.element.addClass("e-watermark");
                    }
                }
            }
        },
      
        _selectItemByIndex: function (index) {
            if (!this.model.enabled) return false;
            if (index != null) {
                this._activeItem = index;
                if (this._activeItem < 0) {
                    this._activeItem = 0;
                }
                else if (this._activeItem == this._listSize - 1) {
                    this._activeItem = this._listSize - 1;
                }
                if (this.model.template) {
                    this._templateValue();
                } else {
                    this._enterTextBoxValue();
                }
            }
        },
		
   /**
   * This method is used to unselect a list item in DropDownList using given index field.
   * @example 
   *   &lt;select name="selectIndex" id="drpdwn"&gt;
	*        &lt;option value="Art"&gt;Art&lt;/option&gt;
	*        &lt;option value="Architecture"&gt;Architecture&lt;/option&gt;
	*        &lt;option value="Biographies"&gt;Biographies&lt;/option&gt;
	*        &lt;option value="Business"&gt;Business&lt;/option&gt;
	*        &lt;option value="ComputerIT"&gt;Computer IT&lt;/option&gt;
	*        &lt;option value="Comics"&gt;Comics&lt;/option&gt;
	*        &lt;option value="Cookery"&gt;Cookery&lt;/option&gt;
	*        &lt;option value="Environment"&gt;Environment&lt;/option&gt;
	*        &lt;option value="Fiction"&gt;Fiction&lt;/option&gt;
	*        &lt;option value="Health"&gt;Health&lt;/option&gt;
	*        &lt;option value="Humanities"&gt;Humanities&lt;/option&gt;
	*        &lt;option value="Language"&gt;Language&lt;/option&gt;
	*    &lt;/select&gt;
	  * &lt;script&gt;
   * // Create DropDownList
   *$('#drpdwn').ejDropDownList();
   *var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
   *DropDownListObj.setSelectedValue("Art"); // setSelectedValue for the DropDownList text
   *DropDownListObj.unselectItemByIndex(0); // unselectItemByIndex for the DropDownList text
   * &lt;/script&gt;
   * @example 
    *&lt;select name="selectIndex" id="drpdwn"&gt;
	*        &lt;option value="Art"&gt;Art&lt;/option&gt;
	*        &lt;option value="Architecture"&gt;Architecture&lt;/option&gt;
	*        &lt;option value="Biographies"&gt;Biographies&lt;/option&gt;
	*        &lt;option value="Business"&gt;Business&lt;/option&gt;
	*        &lt;option value="ComputerIT"&gt;Computer IT&lt;/option&gt;
	*        &lt;option value="Comics"&gt;Comics&lt;/option&gt;
	*        &lt;option value="Cookery"&gt;Cookery&lt;/option&gt;
	*        &lt;option value="Environment"&gt;Environment&lt;/option&gt;
	*        &lt;option value="Fiction"&gt;Fiction&lt;/option&gt;
	*        &lt;option value="Health"&gt;Health&lt;/option&gt;
	*        &lt;option value="Humanities"&gt;Humanities&lt;/option&gt;
	*        &lt;option value="Language"&gt;Language&lt;/option&gt;
	*    &lt;/select&gt;
	  * &lt;script&gt;
      * // Create DropDownList
    * $('#drpdwn').ejDropDownList();
    * $('#drpdwn').ejDropDownList("setSelectedValue","Art");  // setSelectedValue for the DropDownList text	
    *$('#drpdwn').ejDropDownList("unselectItemByIndex",0); // unselectItemByIndex for the DropDownList text      
   * &lt;/script&gt;
   *@memberof ejDropDownList
   * @instance
   */
        unselectItemByIndex: function (index) {
            if (!this.model.enabled) return false;
            if (this.selectedIndexValue == index) {
                this._activeItem = index;
                this._removeTextBoxValue();
            }
        },
        /**
* This method is used to select a list item in DropDownList using given value field.
* @example 
*   &lt;select name="selectIndex" id="drpdwn"&gt;
	*        &lt;option value="Art"&gt;Art&lt;/option&gt;
	*        &lt;option value="Architecture"&gt;Architecture&lt;/option&gt;
	*        &lt;option value="Biographies"&gt;Biographies&lt;/option&gt;
	*        &lt;option value="Business"&gt;Business&lt;/option&gt;
	*        &lt;option value="ComputerIT"&gt;Computer IT&lt;/option&gt;
	*        &lt;option value="Comics"&gt;Comics&lt;/option&gt;
	*        &lt;option value="Cookery"&gt;Cookery&lt;/option&gt;
	*        &lt;option value="Environment"&gt;Environment&lt;/option&gt;
	*        &lt;option value="Fiction"&gt;Fiction&lt;/option&gt;
	*        &lt;option value="Health"&gt;Health&lt;/option&gt;
	*        &lt;option value="Humanities"&gt;Humanities&lt;/option&gt;
	*        &lt;option value="Language"&gt;Language&lt;/option&gt;
	*    &lt;/select&gt;
	* &lt;script&gt;
* // Create DropDownList
 * $('#drpdwn').ejDropDownList();
* var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
* DropDownListObj.setSelectedValue("ComputerIT"); // setSelectedValue for the DropDownList text
* &lt;/script&gt;
* @example 
*   &lt;select name="selectIndex" id="drpdwn"&gt;
	*        &lt;option value="Art"&gt;Art&lt;/option&gt;
	*        &lt;option value="Architecture"&gt;Architecture&lt;/option&gt;
	*        &lt;option value="Biographies"&gt;Biographies&lt;/option&gt;
	*        &lt;option value="Business"&gt;Business&lt;/option&gt;
	*        &lt;option value="ComputerIT"&gt;Computer IT&lt;/option&gt;
	*        &lt;option value="Comics"&gt;Comics&lt;/option&gt;
	*        &lt;option value="Cookery"&gt;Cookery&lt;/option&gt;
	*        &lt;option value="Environment"&gt;Environment&lt;/option&gt;
	*        &lt;option value="Fiction"&gt;Fiction&lt;/option&gt;
	*        &lt;option value="Health"&gt;Health&lt;/option&gt;
	*        &lt;option value="Humanities"&gt;Humanities&lt;/option&gt;
	*        &lt;option value="Language"&gt;Language&lt;/option&gt;
	*    &lt;/select&gt;
	* &lt;script&gt;
* // Create DropDownList
* $('#drpdwn').ejDropDownList();
* $('#drpdwn').ejDropDownList("setSelectedValue","ComputerIT"); 	
* &lt;/script&gt;
*@memberof ejDropDownList
* @instance
*/
        setSelectedValue: function (idvalue) {
            if (!this.model.enabled) return false;
            var i, hidelement;
            this.listitems = this.popupList.find("ol,ul").children("li");
            for (i = 0; i < this.listitems.length; i++) {
                if ($(this.listitems[i]).attr("value") != null) {
                    this._selectedValue = $(this.listitems[i]).attr("value");
                    if (this._selectedValue == idvalue) {
                        this._activeItem = i;
                        this._enterTextBoxValue();
                        return false;
                    }
                }
            }
        },
		
		        /**
* This method is used to unselect a list item in DropDownList using given value field.
* @example 
*   &lt;select name="selectIndex" id="drpdwn"&gt;
	*        &lt;option value="Art"&gt;Art&lt;/option&gt;
	*        &lt;option value="Architecture"&gt;Architecture&lt;/option&gt;
	*        &lt;option value="Biographies"&gt;Biographies&lt;/option&gt;
	*        &lt;option value="Business"&gt;Business&lt;/option&gt;
	*        &lt;option value="ComputerIT"&gt;Computer IT&lt;/option&gt;
	*        &lt;option value="Comics"&gt;Comics&lt;/option&gt;
	*        &lt;option value="Cookery"&gt;Cookery&lt;/option&gt;
	*        &lt;option value="Environment"&gt;Environment&lt;/option&gt;
	*        &lt;option value="Fiction"&gt;Fiction&lt;/option&gt;
	*        &lt;option value="Health"&gt;Health&lt;/option&gt;
	*        &lt;option value="Humanities"&gt;Humanities&lt;/option&gt;
	*        &lt;option value="Language"&gt;Language&lt;/option&gt;
	*    &lt;/select&gt;
	* &lt;script&gt;<br/> 
* // Create DropDownList
* $('#drpdwn').ejDropDownList();
* var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
*DropDownListObj.setSelectedValue("ComputerIT"); // setSelectedValue for the DropDownList text
* DropDownListObj.unselectItemByValue("ComputerIT"); // unselectItemByValue for the DropDownList text
* &lt;/script&gt;
* @example 
*   &lt;select name="selectIndex" id="drpdwn"&gt;
	*        &lt;option value="Art"&gt;Art&lt;/option&gt;
	*        &lt;option value="Architecture"&gt;Architecture&lt;/option&gt;
	*        &lt;option value="Biographies"&gt;Biographies&lt;/option&gt;
	*        &lt;option value="Business"&gt;Business&lt;/option&gt;
	*        &lt;option value="ComputerIT"&gt;Computer IT&lt;/option&gt;
	*        &lt;option value="Comics"&gt;Comics&lt;/option&gt;
	*        &lt;option value="Cookery"&gt;Cookery&lt;/option&gt;
	*        &lt;option value="Environment"&gt;Environment&lt;/option&gt;
	*        &lt;option value="Fiction"&gt;Fiction&lt;/option&gt;
	*        &lt;option value="Health"&gt;Health&lt;/option&gt;
	*        &lt;option value="Humanities"&gt;Humanities&lt;/option&gt;
	*        &lt;option value="Language"&gt;Language&lt;/option&gt;
	*    &lt;/select&gt;
	* &lt;script&gt;<br/> 
* // Create DropDownList
* $('#drpdwn').ejDropDownList();
* $('#drpdwn').ejDropDownList("setSelectedValue","ComputerIT");  // setSelectedValue for the DropDownList text	
* $('#drpdwn').ejDropDownList("unselectItemByValue","ComputerIT"); 	
* &lt;/script&gt;
*@memberof ejDropDownList
* @instance
*/
		
        unselectItemByValue: function (idvalue) {
            if (!this.model.enabled) return false;
            var i, hidelement;
            this.listitems = this.popupList.find("ol,ul").children("li");
            for (i = 0; i < this.listitems.length; i++) {
                if ($(this.listitems[i]).attr("value") != null) {
                    this._selectedValue = $(this.listitems[i]).attr("value");
                    if (this._selectedValue == idvalue) {
                        this._activeItem = i;
                        this._removeTextBoxValue();
                        return false;
                    }
                }
            }
        },
        /**
* This method is used to select a list item in DropDownList using given text field.
* @example 
*   &lt;select name="selectIndex" id="drpdwn"&gt;
	*        &lt;option value="Art"&gt;Art&lt;/option&gt;
	*        &lt;option value="Architecture"&gt;Architecture&lt;/option&gt;
	*        &lt;option value="Biographies"&gt;Biographies&lt;/option&gt;
	*        &lt;option value="Business"&gt;Business&lt;/option&gt;
	*        &lt;option value="ComputerIT"&gt;Computer IT&lt;/option&gt;
	*        &lt;option value="Comics"&gt;Comics&lt;/option&gt;
	*        &lt;option value="Cookery"&gt;Cookery&lt;/option&gt;
	*        &lt;option value="Environment"&gt;Environment&lt;/option&gt;
	*        &lt;option value="Fiction"&gt;Fiction&lt;/option&gt;
	*        &lt;option value="Health"&gt;Health&lt;/option&gt;
	*        &lt;option value="Humanities"&gt;Humanities&lt;/option&gt;
	*        &lt;option value="Language"&gt;Language&lt;/option&gt;
	*    &lt;/select&gt;
	* &lt;script&gt;<br/>
* // Create DropDownList
* $('#drpdwn').ejDropDownList();
* var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
* DropDownListObj.setSelectedText("Computer IT"); // setSelectedText for the DropDownList text
* &lt;/script&gt;
* @example 
*   &lt;select name="selectIndex" id="drpdwn"&gt;
	*        &lt;option value="Art"&gt;Art&lt;/option&gt;
	*        &lt;option value="Architecture"&gt;Architecture&lt;/option&gt;
	*        &lt;option value="Biographies"&gt;Biographies&lt;/option&gt;
	*        &lt;option value="Business"&gt;Business&lt;/option&gt;
	*        &lt;option value="ComputerIT"&gt;Computer IT&lt;/option&gt;
	*        &lt;option value="Comics"&gt;Comics&lt;/option&gt;
	*        &lt;option value="Cookery"&gt;Cookery&lt;/option&gt;
	*        &lt;option value="Environment"&gt;Environment&lt;/option&gt;
	*        &lt;option value="Fiction"&gt;Fiction&lt;/option&gt;
	*        &lt;option value="Health"&gt;Health&lt;/option&gt;
	*        &lt;option value="Humanities"&gt;Humanities&lt;/option&gt;
	*        &lt;option value="Language"&gt;Language&lt;/option&gt;
	*    &lt;/select&gt;
	* &lt;script&gt;<br/>
* // Create DropDownList
* $('#drpdwn').ejDropDownList();
* $('#drpdwn').ejDropDownList("setSelectedText","Computer IT"); 	
* &lt;/script&gt;
*@memberof ejDropDownList
* @instance
*/
        setSelectedText: function (idvalue) {
            if (!this.model.enabled) return false;
            var i, hidelement;
            this.listitems = this.popupList.find("ol,ul").children("li");
            for (i = 0; i < this.listitems.length; i++) {
                this.selectedTextValue = $(this.listitems[i]).text();
                if (this.selectedTextValue == idvalue) {
                    this._activeItem = i;
                    this._enterTextBoxValue();
                    return false;
                }
            }
        },

		   /**
* This method is used to unselect a list item in DropDownList using given text field.
* @example 
*   &lt;select name="selectIndex" id="drpdwn"&gt;
	*        &lt;option value="Art"&gt;Art&lt;/option&gt;
	*        &lt;option value="Architecture"&gt;Architecture&lt;/option&gt;
	*        &lt;option value="Biographies"&gt;Biographies&lt;/option&gt;
	*        &lt;option value="Business"&gt;Business&lt;/option&gt;
	*        &lt;option value="ComputerIT"&gt;Computer IT&lt;/option&gt;
	*        &lt;option value="Comics"&gt;Comics&lt;/option&gt;
	*        &lt;option value="Cookery"&gt;Cookery&lt;/option&gt;
	*        &lt;option value="Environment"&gt;Environment&lt;/option&gt;
	*        &lt;option value="Fiction"&gt;Fiction&lt;/option&gt;
	*        &lt;option value="Health"&gt;Health&lt;/option&gt;
	*        &lt;option value="Humanities"&gt;Humanities&lt;/option&gt;
	*        &lt;option value="Language"&gt;Language&lt;/option&gt;
	*    &lt;/select&gt;
	* &lt;script&gt;<br/>
* // Create DropDownList
* $('#drpdwn').ejDropDownList();
* var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
*DropDownListObj.setSelectedValue("ComputerIT"); // setSelectedValue for the DropDownList text
* DropDownListObj.unselectItemByText("Computer IT"); // unselectItemByText for the DropDownList text
* &lt;/script&gt;
* @example 
*   &lt;select name="selectIndex" id="drpdwn"&gt;
	*        &lt;option value="Art"&gt;Art&lt;/option&gt;
	*        &lt;option value="Architecture"&gt;Architecture&lt;/option&gt;
	*        &lt;option value="Biographies"&gt;Biographies&lt;/option&gt;
	*        &lt;option value="Business"&gt;Business&lt;/option&gt;
	*        &lt;option value="ComputerIT"&gt;Computer IT&lt;/option&gt;
	*        &lt;option value="Comics"&gt;Comics&lt;/option&gt;
	*        &lt;option value="Cookery"&gt;Cookery&lt;/option&gt;
	*        &lt;option value="Environment"&gt;Environment&lt;/option&gt;
	*        &lt;option value="Fiction"&gt;Fiction&lt;/option&gt;
	*        &lt;option value="Health"&gt;Health&lt;/option&gt;
	*        &lt;option value="Humanities"&gt;Humanities&lt;/option&gt;
	*        &lt;option value="Language"&gt;Language&lt;/option&gt;
	*    &lt;/select&gt;
	* &lt;script&gt;<br/>
* // Create DropDownList
* $('#drpdwn').ejDropDownList();
* $('#drpdwn').ejDropDownList("setSelectedValue","ComputerIT");  // setSelectedValue for the DropDownList text	
* $('#drpdwn').ejDropDownList("unselectItemByText","Computer IT"); 	
* &lt;/script&gt;
*@memberof ejDropDownList
* @instance
*/
        unselectItemByText: function (idvalue) {
            if (!this.model.enabled) return false;
            var i, hidelement;
            this.listitems = this.popupList.find("ol,ul").children("li");
            for (i = 0; i < this.listitems.length; i++) {
                this.unselectedTextValue = $(this.listitems[i]).text();
                if (this.unselectedTextValue == idvalue) {
                    this._activeItem = i;
                    this._removeTextBoxValue();
                    return false;
                }
            }
        },

		   /**
* This method is used to get the selected items in DropDownList.
* @return string
* @example 
* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
* // Create DropDownList
* $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A8"});
* var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
* DropDownListObj.getSelectedItem(); 
* &lt;/script&gt;
* @example 
* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
* // Create DropDownList
* $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A8"});
* $('#drpdwn').ejDropDownList("getSelectedItem"); 	
* &lt;/script&gt;
*@memberof ejDropDownList
* @instance
*/
        getSelectedItem: function () {
            return this.selectedTextValue;
        },
		
      
		 /**
* This method is used to get the selected items value in DropDownList.
* @return string
* @example 
*   &lt;select name="selectIndex" id="drpdwn"&gt;
	*        &lt;option value="Art"&gt;Art&lt;/option&gt;
	*        &lt;option value="Architecture"&gt;Architecture&lt;/option&gt;
	*        &lt;option value="Biographies"&gt;Biographies&lt;/option&gt;
	*        &lt;option value="Business"&gt;Business&lt;/option&gt;
	*        &lt;option value="ComputerIT"&gt;Computer IT&lt;/option&gt;
	*        &lt;option value="Comics"&gt;Comics&lt;/option&gt;
	*        &lt;option value="Cookery"&gt;Cookery&lt;/option&gt;
	*        &lt;option value="Environment"&gt;Environment&lt;/option&gt;
	*        &lt;option value="Fiction"&gt;Fiction&lt;/option&gt;
	*        &lt;option value="Health"&gt;Health&lt;/option&gt;
	*        &lt;option value="Humanities"&gt;Humanities&lt;/option&gt;
	*        &lt;option value="Language"&gt;Language&lt;/option&gt;
	*    &lt;/select&gt;
	  * &lt;script&gt;
* // Create DropDownList
* $('#drpdwn').ejDropDownList({value:"Computer IT"});
* var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
* DropDownListObj.getSelectedValue(); 
* &lt;/script&gt;
* @example 
*   &lt;select name="selectIndex" id="drpdwn"&gt;
	*        &lt;option value="Art"&gt;Art&lt;/option&gt;
	*        &lt;option value="Architecture"&gt;Architecture&lt;/option&gt;
	*        &lt;option value="Biographies"&gt;Biographies&lt;/option&gt;
	*        &lt;option value="Business"&gt;Business&lt;/option&gt;
	*        &lt;option value="ComputerIT"&gt;Computer IT&lt;/option&gt;
	*        &lt;option value="Comics"&gt;Comics&lt;/option&gt;
	*        &lt;option value="Cookery"&gt;Cookery&lt;/option&gt;
	*        &lt;option value="Environment"&gt;Environment&lt;/option&gt;
	*        &lt;option value="Fiction"&gt;Fiction&lt;/option&gt;
	*        &lt;option value="Health"&gt;Health&lt;/option&gt;
	*        &lt;option value="Humanities"&gt;Humanities&lt;/option&gt;
	*        &lt;option value="Language"&gt;Language&lt;/option&gt;
	*    &lt;/select&gt; 
	  * &lt;script&gt;
* // Create DropDownList
* $('#drpdwn').ejDropDownList({value:"Computer IT"});
* $('#drpdwn').ejDropDownList("getSelectedValue");
* &lt;/script&gt;
*@memberof ejDropDownList
* @instance
*/
        getSelectedValue: function () {
            if (this.element[0].value != "")
                return this._selectedValue;
            else return "";
        },
        getSelectedItemsID: function () {
            return this._selectedItemsID;
        },
        _removeText: function (currentValue) {
            var res, index, removeHidden, hiddenIndex, checkSplit, checkCurrent;
			res = this.element[0].value;
			removeHidden = this._hiddenInput[0].value;
			checkSplit=res.indexOf(currentValue+",");
			checkCurrent=res.indexOf(currentValue);
			if(checkSplit >= 0){
				res = res.replace(currentValue+",", "");
				removeHidden = removeHidden.replace(this._hiddenValue+",", "");
			}
			else if(res.length == checkCurrent+currentValue.length && checkCurrent == 0){
				res = res.replace(currentValue, "");
				removeHidden = removeHidden.replace(this._hiddenValue, "");
			}
			else{
				res = res.replace(","+currentValue, "");
				removeHidden = removeHidden.replace(","+this._hiddenValue, "");
			}
			this.element[0].value = res;
			this._hiddenInput[0].value = removeHidden;
        },
        _addText: function (currentValue) {
            if ((this.model.watermarkText) && (this.element.hasClass("e-watermark"))) {
                this.element.val(this.element[0].value.replace(this.model.watermarkText, ""));
                this._hiddenInput.val("");
            }
            this._delimiterIndex = (this.element[0].value).lastIndexOf(",");
            this._hiddenDelimiterIndex = (this._hiddenInput[0].value).lastIndexOf(",");
            if (((this._delimiterIndex == -1) || (this._delimiterIndex != this.element[0].value.length - 1)) && (this.element[0].value != "")) {
                this.element.val(this.element[0].value + ",");
                this._hiddenInput.val(this._hiddenInput[0].value + ",");
                this._delimiterIndex = (this.element[0].value).lastIndexOf(",");
                this._hiddenDelimiterIndex = (this._hiddenInput[0].value).lastIndexOf(",");
            }
            if (!this._checkContains(currentValue)) {
                this.element.val(this.element[0].value.substr(0, this._delimiterIndex + 1) + currentValue);
                this._hiddenInput.val(this._hiddenInput[0].value.substr(0, this._hiddenDelimiterIndex + 1) + this._hiddenValue);
            }
        },
        _checkContains: function (Value) {
            var chkValue = Value;
            var values = this.element[0].value.split(",");
            this.contains = false;
            for (var i = 0; i < values.length; i++) {
                if (values[i] == chkValue)
                    this.contains = true;
            }
            return this.contains;
        },
        _init: function () {
            if ((this.element.is("input") && (this.element.is("input[type=text]") || !this.element.attr('type'))) || this.element.is("select")) {
				this._id=this.element[0].id;
                this._initialize();
                this._render();
                this._enabled(this.model.enabled);
                this._wireEvents();
                this._initValue = false;
            }
        },
        _setInitialPopup: function (value) {
            value == false ? this._hideResult() : this._showResult();
        },
        _changeSkin: function (skin) {
            if (this.model.cssClass != skin) {
                this.wrapper.removeClass(this.model.cssClass).addClass(skin);
                this.popupList.removeClass(this.model.cssClass).addClass(skin);
            }
        },

        _setRTL: function (boolean) {
            if (this.model.enableRTL != boolean) {
                this.model.enableRTL = boolean;
                this._RightToLeft();
                this._dropbtnRTL();
            }
        },
        //height width
        _changeHeight: function (height) {
            this.wrapper.height(height);
            this._setListHeight();
        },
        _changeWidth: function (width) {
            this.wrapper.width(width);
            this._setListWidth();
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
                    case "dataSource": this._checkModelDataBinding(options[option]); break;
                    case "query": this._queryCheck(options[option]); break;
                    case "fields": this.model.fields = options[option]; this._checkModelDataBinding(this.model.dataSource); break;
                    case "template": this.model.template = options[option]; this._checkModelDataBinding(this.model.dataSource); break;
                    case "value": this._setValue(ej.util.getVal(options[option])); break;
                    case "text": this._setText(options[option]); break;
                    case "itemValue": this._setItemValue(options[option]); break;
                    case "enableRTL": this._setRTL(options[option]); break;
                    case "enabled": this._enabled(options[option]); break;
                    case "height": this._changeHeight(options[option]); break;
                    case "width": this._changeWidth(options[option]); break;
                    case "popupHeight": this.model.popupHeight = options[option]; this._setListHeight(options[option]); break;
                    case "popupWidth": this.model.popupWidth = options[option]; this._setListWidth(); break;
                    case "cssClass": this._changeSkin(options[option]); break;
                    case "showCheckbox": this._checkboxHideShow(options[option]); break;
                    case "checkAll": this._setCheckAll(options[option]); break;
                    case "uncheckAll": this._setUncheckAll(options[option]); break;
                    case "watermarkText": this._changeWatermark(options[option]); break;
                    case "showRoundedCorner": this._roundedCorner(options[option]); this.model.showRoundedCorner = options[option]; break;
                    case "showPopupOnLoad": this._setInitialPopup(options[option]); break;
                    case "targetID": this.model.targetID = options[option]; this._showFullList(); break;
                    case "selectedItemIndex": this._selectItemByIndex(options[option]); break;
                    case "selectedItems": this._selectCheckedItem(options[option]); this.model.selectedItems = options[option]; break;
                    case "allowMultiSelection": this.model.allowMultiSelection = options[option];
                        options[option] ? this._renderBoxModel() : this._destroyBoxModel();
                        break;
					case "enableAnimation":{
							this.model.enableAnimation=options[key];
							break;
					}
                }
            }
        },
        /**
 * destroy in the DropDownList textbox.
 * @alias destroy
 * @return jQuery
 * @example 
 * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
 * // Create DropDownList
 * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5"});
 * var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
 * DropDownListObj.destroy(); // hide the DropDownList text
 * &lt;/script&gt;
 * @example 
* &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
 * // Create DropDownList
 * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5"});
 * $('#drpdwn').ejDropDownList("destroy"); 	
 * &lt;/script&gt;
 *@memberof ejDropDownList
 * @instance
 */
        _destroy: function () {
            this._destroyDropdown();
            this.element.removeClass("e-input " + this.model.cssClass + " e-watermark");
            this.element.attr('accesskey', this.wrapper.attr('accesskey'));
            this.element[0].value = "";
            if (this.model.dataSource != null)
                this.popupPanelWrapper.remove();
            else {
                this.docbdy.append(this.ultag.html());
                this.popupPanelWrapper.remove();
            }
        },
        /* cookie */

        _finalize: function () {
            if (this.model.selectedItemIndex != null) {
                this._selectItemByIndex(this.model.selectedItemIndex);
            } else if ((this.model.showCheckbox == true) && (this.model.selectedItems.length > 0)) {
                this._selectCheckedItem(this.model.selectedItems);
            }
        },

        /**/
        _initialize: function () {
            if (this.element.is("select")) {
                this.selectelement = true;
                this._renderSelectToDropdown();
            }
            this._selectedItemsID = [];
            this.target = this.element[0];
            this.showPopupBox = false;
            this._queryString = null;
            this.suggLen = 0;
            this._itemId = null;
            this.checkedStatus = false;
            this._incqueryString = "";
            this._activeItem = null;
            this.ddWidth = 0;
            this._initValue = true;
        },
        _renderSelectToDropdown: function () {
            var i, optionLength;
            this.inputElement = ej.buildTag("input.e-dropdownlist#" + this._id + "_input", "", {}, { "type": "text" });
            this.inputElement.insertAfter(this.element);
            this.optionDiv = ej.buildTag("div#" + this._id + "_list");
            this.optionDiv.insertAfter(this.inputElement);
            this.optionUl = ej.buildTag("ul");
            this.optionDiv.append(this.optionUl);
            this.selectOptions = this.element;
            this.selectOptions.attr('id', this._id);
            this.selectOptionItems = this.element.children("option");
            optionLength = this.selectOptionItems.length;
            this.optionDummyUl = $();

            for (i = 0; i < optionLength; i++) {
                if ((this.selectOptionItems[i].text != null) && ((this.selectOptionItems[i].text != ""))) {
                    this.optionLi = ej.buildTag("li", this.selectOptionItems[i].text, {}, { value: this.selectOptionItems[i].value });
                    this.optionDummyUl.push(this.optionLi[0]);
                }
            }
            this.optionUl.append(this.optionDummyUl);

            this.element.css('display', 'none');
            this.element = this.inputElement;
        },


        _render: function () {
            this._renderDropdown();
            this._setWatermark();
            this._renderPopupPanelWrapper();
            this._initDataSource(this.model.dataSource);
            this._showFullList();
            this._finalize();
        },

        _queryCheck: function (value) {
            this.model.query = value;
            this._checkModelDataBinding(this.model.dataSource);
        },

        _checkModelDataBinding: function (source) {
            this.model.dataSource = source;
            if (source != null) {
                if (ej.DataManager && source instanceof ej.DataManager) {
                    this._initDataSource(source);
                } else {
                    this._showFullList();
                }
            }
            else {
                this.ultag.empty();
            }
        },
        _initDataSource: function (source) {
            var proxy = this;
            if (ej.DataManager && source instanceof ej.DataManager) {
                proxy.popupListItems = proxy.model.dataSource;
                proxy._addLoadingClass();
                var queryPromise = source.executeQuery(this._getQuery());
                queryPromise.done(function (e) {
                    proxy.popupListItems = e.result;
                    proxy._removeLoadingClass();
                    proxy._showFullList();

                }).fail(function (e) {
                    proxy.model.dataSource = null;
                    proxy._addLoadingClass();
                });
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

        _addLoadingClass: function () {
            this.dropdownbutton.addClass("e-load");
            this.drpbtnspan.removeClass("e-icon e-down-arrow");
            this.model.readOnly = true;
        },
        _removeLoadingClass: function () {
            this.dropdownbutton.removeClass("e-load");
            this.drpbtnspan.addClass("e-icon e-down-arrow");
            this.model.readOnly = false;
        },
        //render drop button text box
        _renderDropdown: function () {
            this.element.addClass("e-input " + this.model.cssClass);
            if (this.value())
                this.element.val(this.value());
            this.wrapper = ej.buildTag("span.e-ddl e-widget " + this.model.cssClass + "#" + this._id + "_wrapper", "", {}, { "tabindex": "0", "accesskey": this.element.attr("accesskey") });//
            this.container = ej.buildTag("span.e-in-wrap e-box " + this.model.cssClass + "#" + this._id + "_container");
            this.element.removeAttr('accesskey');
            this.element.attr({ "readonly": true, "tabindex": -1, "role": "combobox", "aria-expanded": false, "aria-autocomplete": "list", "aria-haspopup": true, "aria-owns": this._id + "_popup", "value": this.value() });
            this.drpbtnspan = ej.buildTag("span.e-icon e-down-arrow", "", {}, { "aria-label": "select" });
            this.dropdownbutton = ej.buildTag("span.e-select#" + this._id + "_dropdown", "", {}, { "role": "button" }).append(this.drpbtnspan);
            this.container.insertAfter(this.element);
            this.container.append(this.element);
            this.container.append(this.dropdownbutton);
            this.wrapper.insertBefore(this.container);
            this.wrapper.append(this.container);
            if (this.selectelement) {
                this.selectOptions.insertBefore(this.element);
            }
            this._hiddenInput = ej.buildTag("input#" + this._id + "_hidden", "", {}, { type: "hidden" }).insertBefore(this.element);
            this._hiddenInput.attr("value", this.value());
            this._checkNameAttr();
            this._setDimentions();
            this._RightToLeft();
            this.ddWidth = (this.dropdownbutton.outerWidth() > 0) ? this.dropdownbutton.outerWidth() : 24;
            this.element.bind("mousedown", $.proxy(this._OnDropdownClick, this));
            this.dropdownbutton.bind("mousedown", $.proxy(this._OnDropdownClick, this));
            this._roundedCorner(this.model.showRoundedCorner);
            this._renderBoxModel();
        },
        /*name attribute for input box*/
        _checkNameAttr: function () {
			if (this.element.attr("name"))
                this._hiddenInput.attr("name", this.element.attr("name"));
            else {
                this._hiddenInput.attr("name", this._id);
				this.element.attr("name", this._id);
			}
        },
        _renderBoxModel: function () {
            if (!this.model.allowMultiSelection) return false;
            this.element.css('display', 'none');
            this._ulBox = ej.buildTag("ul.e-ul e-boxes");
            this.container.prepend(this._ulBox);
            this._ulBox.css('min-height', '30px');
            this.wrapper.css({ 'height': 'auto' });

            this._on(this.container, "mousedown", function (e) {
                if (!this.model.enabled) return false;
                var $target = $(e.target);
                if ($target.hasClass("e-options")) {
                    if (!e.ctrlKey && $target.siblings().hasClass("e-active")) this._removeActive();
                    if ($target.hasClass("e-active")) $target.removeClass("e-active");
                    else $target.addClass("e-active");
                }
                if (!e.ctrlKey && ($target.hasClass("e-boxes"))) this._removeActive();
            });
        },
        //render popup pannel wrapper
        _renderPopupPanelWrapper: function () {
			var oldWrapper = $("#" + this.element.context.id + "_popup_wrapper").get(0);
            if (oldWrapper)
                $(oldWrapper).remove();
            this.popupPanelWrapper = ej.buildTag("div#" + this._id + "_popup_wrapper");
            $('body').append(this.popupPanelWrapper);
            //render popup list 
            this.popupList = ej.buildTag("div.e-ddl-popup e-box e-popup e-widget " + this.model.cssClass + "#" + this._id + "_popup", "", { "visibility": "hidden" }, { "tabIndex": 0 });
            this.popup = this.popupList;
            this.popupScroller = ej.buildTag("div"); this.ultag = ej.buildTag("ul.e-ul", "", {}, { "role": "listbox" });
            this.popupScroller.append(this.ultag);
            this.popupList.append(this.popupScroller);
            this.popupPanelWrapper.append(this.popupList);
        },
        //render popup list items
        _renderPopupList: function () {
            var list = this.popupListItems, i, ulempty, ulno, litag, _id, _txt, mapper = this.model.fields, predecessor;
            this.ultag.empty();
            this.dummyUl = $();
            if (this.model.enableRTL)
                this.popupList.addClass("e-rtl");
            if (this.model.dataSource == null || this.model.dataSource.length < 1) {
                predecessor = this.element.parents().last();
                if (this.model.targetID)
                    this.docbdy = predecessor.find("#" + this.model.targetID);
                else if (this.optionDiv)
                    this.docbdy = this.optionDiv;
                else return false;
                this.itemsContainer = this.docbdy.children("ol,ul");
                this.itemsContainer.children("ol,ul").remove();
                this.items = this.itemsContainer.children('li');
                this.items.children("img").addClass("e-align");
                this.items.children("div").addClass("e-align");
                this.itemsContainer.children("span").addClass("e-ghead");
                //This will append the list with the popup wrapper
                this.ultag.append(this.itemsContainer.children());
                this.itemsContainer.empty();
                this.docbdy.css({ 'display': 'none' }); this.itemsContainer.css({ 'display': 'none' });
            }
            else if (this.model.dataSource != null && typeof list[0] != "object") {
                if (list.length > 0) {
                    for (i = 0; i < list.length; i++) {
                        litag = ej.buildTag("li", list[i]);
                        this.dummyUl.push(litag[0]);
                    }
                    this.ultag.append(this.dummyUl);
                }
            }
            else {
                this.mapFld = { _id: null, _imageUrl: null, _imageAttributes: null, _spriteCSS: null, _text: null, _value: null, _htmlAttributes: null, _selected: null };
                this.mapFld._id = (mapper && mapper.id) ? mapper["id"] : "id";
                this.mapFld._imageUrl = (mapper && mapper.imageUrl) ? mapper["imageUrl"] : "imageUrl";
                this.mapFld._imageAttributes = (mapper && mapper.imageAttributes) ? mapper["imageAttributes"] : "imageAttributes";
                this.mapFld._spriteCSS = (mapper && mapper.spriteCssClass) ? mapper["spriteCssClass"] : "spriteCssClass";
                this.mapFld._text = (mapper && mapper.text) ? mapper["text"] : "text";
                this.mapFld._value = (mapper && mapper.value) ? mapper["value"] : "value";
                this.mapFld._htmlAttributes = (mapper && mapper.htmlAttributes) ? mapper["htmlAttributes"] : "htmlAttributes";
                this.mapFld._selected = (mapper && mapper.selected) ? mapper["selected"] : "selected";

                if (list.length > 0) {
                    if (this.model.template != null) {
                        for (i = 0; i < list.length; i++) {
                            litag = ej.buildTag("li", list[i]);
                            if (this.model.template) litag.append(this._getTemplatedString(list[i]));
                            this.dummyUl.push(litag[0]);
                        }
                        this.ultag.append(this.dummyUl);
                    } else {
                        for (i = 0; i < list.length; i++) {
                            var _did = this._getField(list[i], this.mapFld._id);
                            var _dimageUrl = this._getField(list[i], this.mapFld._imageUrl);
                            var _dimageAttributes = this._getField(list[i], this.mapFld._imageAttributes);
                            var _dspriteCss = this._getField(list[i], this.mapFld._spriteCSS);
                            var _dtext = this._getField(list[i], this.mapFld._text);
                            var _dvalue = this._getField(list[i], this.mapFld._value);
                            var _dhtmlAttributes = this._getField(list[i], this.mapFld._htmlAttributes);
                            var _dselected = this._getField(list[i], this.mapFld._selected);
                            if ((_dvalue) && (_dvalue != ""))
                                litag = ej.buildTag('li', "", {}, { value: _dvalue });
                            else
                                litag = ej.buildTag('li');
                            if (_did)
                                litag.attr('id', _did);
                            if ((_dimageUrl) && (_dimageUrl != "")) {
                                //Creating the image tag
                                imgtag = ej.buildTag('img.e-align', '', {}, { 'src': _dimageUrl, 'alt': _dtext });
                                if ((_dimageAttributes) && (_dimageAttributes != "")) 
                                    imgtag.attr(_dimageAttributes);
                                litag.append(imgtag);
                            }
                            if ((_dspriteCss) && (_dspriteCss != "")) {
                                //Creating the Sprite image tag
                                divtag = ej.buildTag('div.e-align ' + _dspriteCss + ' sprite-image');
                                litag.append(divtag);
                            }
                            if ((_dtext) && (_dtext != "")) {
                                //Creating text Content inside the  tag
                                litag.append(_dtext);
                            }
                            if ((_dhtmlAttributes) && (_dhtmlAttributes != ""))
                                litag.attr(_dhtmlAttributes);
                            if (_dselected) {
                                litag.addClass("chkselect");
                            }
                            //
                            this.dummyUl.push(litag[0]);
                        }
                    }
                    //ko binding
                    this.ultag.append(this.dummyUl);
                }

            }
            this.ultag.children('li').attr({ "role": "option" });
            this._setListWidth();
            this._setListHeight();
            this._setListPosition();
            this.popupList.css("height", ""); this.popupScroller.css({ "height": "", "width": "" });
            this.popupList.ejScroller({ height: this.popupList.height(), width: 0, scrollerSize: 20 });
            this.scrollerObj = this.popupList.ejScroller("instance");
            this.popupList.css({ 'display': 'none', 'visibility': 'visible' });
            this._checkboxHideShow(this.model.showCheckbox);
            this._setCheckAll(this.model.checkAll);
            this._setUncheckAll(this.model.uncheckAll);
            this.model.showPopupOnLoad && this._showResult();
        },
        //get object
        _getField: function (obj, fieldName) {
            return ej.pvt.getObject(fieldName, obj);
        },
        //template
        _getTemplatedString: function (list) {

            var str = this.model.template, start = str.indexOf("${"), end = str.indexOf("}");
            while (start != -1 && end != -1) {
                var content = str.substring(start, end + 1);
                var field = content.replace("${", "").replace("}", "");
                str = str.replace(content, this._getField(list, field));
                start = str.indexOf("${"), end = str.indexOf("}");
            }
            return str;
        },
        //water mark
        _setWatermark: function () {
            if ((this.model.watermarkText != null) && (this.element.val() == "")) {
                this.element.addClass("e-watermark");
                this.element.val(this.model.watermarkText);
            }
        },
        //checkbox properties
        _checkboxHideShow: function (value) {
            if (value) {
                this._createCheckbox();
            } else {
                this._removeCheckbox();
            }
            this.model.showCheckbox = value;
        },
        _createCheckbox: function () {
            var i, _extchk, chklist, me = this;
            this.listitems = this.popupList.find("ol,ul").children("li");
            chklist = this.listitems.find('input[type=checkbox]');
            if (chklist.length == 0) {
                for (i = 0; i < this.listitems.length; i++) {
                    $checkbox = ej.buildTag("input.listcheckbox e-align#popuplist" + i + "_" + this._id, "", {}, { type: "checkbox", name: "list" + i });
                    $(this.listitems[i]).prepend($checkbox);
                }
                this.popupList.find(".listcheckbox").ejCheckBox({ cssClass: this.model.cssClass, change: $.proxy(this._OnClickCheckList, this) });
                this.element.val("");
                this._setWatermark();
                for (i = 0; i < this.listitems.length; i++) {
                    if ($(this.listitems[i]).hasClass('chkselect')) {
                        $(this.listitems[i]).find(".listcheckbox").ejCheckBox({ "checked": true });
                        this._activeItem = i;
                        this.checkedStatus = true;
                        if (!this._initValue)
                            this._trigger('checkChange', { isChecked: this.checkedStatus, data: this.model });
                        this._enterTextBoxValue();
                        $(this.listitems[i]).removeClass('chkselect');
                    }
                }
            }
        },

        _removeCheckbox: function () {
            var i, checkbox;
            this.listitems = this.popupList.find("ol,ul").children("li");
            checkbox = this.listitems.find('.listcheckbox');
            if (checkbox.length > 0) {
                this.listitems.find('.listcheckbox').ejCheckBox('destroy');
                this.listitems.find('input[type=checkbox]').remove();
            }
        },
        _setCheckAll: function (value) {
            //Check all the nodes on CheckAll = true
            if ((this.model.showCheckbox) && (value))
                this.checkAll();
        },
        _setUncheckAll: function (value) {
            //UnCheck all the nodes on UnCheckAll = true
            if ((this.model.showCheckbox) && (value))
                this.unCheckAll();
        },
        /**
      * This method is used to set all the  items to checked.
      * @return jQuery
      * @example 
      * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
      * // Create DropDownList
	  * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5",showCheckbox:true});
      * var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
      * DropDownListObj.checkAll(); // checkAll values the DropDownList
      * &lt;/script&gt;
      * @example 
      * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
      * // Create DropDownList
	  * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5",showCheckbox:true});
      * $('#drpdwn').ejDropDownList("checkAll"); 	
      * &lt;/script&gt;
      *@memberof ejDropDownList
      * @instance
      */
        checkAll: function () {
            if (!this.model.enabled) return false;
            var _nodes = this.model.selectedItems;
            for (i = 0; i < this.listitems.length; i++) {
                if ($(this.listitems[i].firstChild).find('.listcheckbox').ejCheckBox('isChecked') == false) {
                    $(this.listitems[i].firstChild).find('.listcheckbox').ejCheckBox('option', 'checked', true);
                    if ((this.model.watermarkText) && (this.element.hasClass("e-watermark"))) {
                        this.element.val(this.element[0].value.replace(this.model.watermarkText, ""));
                        this._hiddenInput.val("");
                    }
                    this.currentValue = $.trim($(this.listitems[i]).text());
                    this._itemID = $(this.listitems[i]).attr("id");
                    if (!ej.isNullOrUndefined(this._itemID) && this._itemID != "")
                        this._selectedItemsID.push(this._itemID);
                    if ($(this.listitems[i]).attr("value")) {
                        this._hiddenValue = $(this.listitems[i]).attr("value");
                    }
                    else {
                        this._hiddenValue = this.currentValue;
                    }
                    this._delimiterIndex = (this.element[0].value).lastIndexOf(",");
                    this._hiddenDelimiterIndex = (this._hiddenInput[0].value).lastIndexOf(",");
                    if ((this._delimiterIndex >= -1) && (this.element[0].value != "") && (this._delimiterIndex != this.element[0].value.length-1)) {
                        this.element.val(this.element[0].value + ",");
                        this._hiddenInput.val(this._hiddenInput[0].value + ",");
                        this._delimiterIndex = (this.element[0].value).lastIndexOf(",");
                        this._hiddenDelimiterIndex = (this._hiddenInput[0].value).lastIndexOf(",");
						this.element.val(this.element[0].value.substr(0, this._delimiterIndex + 1) + this.currentValue);
                    	this._hiddenInput.val(this._hiddenInput[0].value.substr(0, this._hiddenDelimiterIndex + 1) + this._hiddenValue);
                    }
                    else{
                    	this.element.val(this.element[0].value.substr(0, this._delimiterIndex + 1) + this.currentValue + ",");
                    	this._hiddenInput.val(this._hiddenInput[0].value.substr(0, this._hiddenDelimiterIndex + 1) + this._hiddenValue + ",");
					}
                    //
                    var _nodes = this.model.selectedItems;
                    if ($.inArray(i, _nodes) == -1) {
                        this.model.selectedItems.push(i);
                    }
                    //
                    this.checkedStatus = true;
                    if ($(this.listitems[i]).attr("value") != null)
                        this._selectedValue = $(this.listitems[i]).attr("value");
                    else
                        this._selectedValue = "";
                    if (!this._initValue)
                        this._trigger('checkChange', { isChecked: this.checkedStatus, data: this.model });
                    args = { text: this.element[0].value, selectedText: this.currentValue, itemId: i, value: this._selectedValue, isChecked: this.checkedStatus };
                    if (!this._initValue)
                        this._trigger("change", args);
                    this._cascadeAction();
                }
            }
            this.value(this.element.val());
            this.model.text = this.currentValue;
            this.model.itemValue = this._selectedValue;
            /*Watermark*/
            if (this.model.watermarkText != null) {
                if (($.trim(this.element.val()) === '') || ($.trim(this.element.val()) === this.model.watermarkText)) {
                    this.element.val(this.model.watermarkText);
                    this.element.addClass("e-watermark");
                } else {
                    this.element.removeClass("e-watermark");
                }
            }
        },
        _selectCheckedItem: function (chkitems) {
            if (chkitems.length > 0) {
                for (i = 0; i < chkitems.length; i++) {
                    if ($(this.listitems[chkitems[i]].firstChild).find('.listcheckbox').ejCheckBox('isChecked') == false) {
                        $(this.listitems[chkitems[i]].firstChild).find('.listcheckbox').ejCheckBox('option', 'checked', true);
                        this.checkedStatus = true;
                        this.currentValue = $.trim($(this.listitems[chkitems[i]]).text());
                        if (this.model.allowMultiSelection)
                            this._ulBox.append(this._createBox(this.currentValue));
                        if ($(this.listitems[chkitems[i]]).attr("value")) {
                            this._hiddenValue = $(this.listitems[chkitems[i]]).attr("value");
                        }
                        else {
                            this._hiddenValue = this.currentValue;
                        }
                        this._addText(this.currentValue);
                        if ($(this.listitems[chkitems[i]]).attr("value") != null)
                            this._selectedValue = $(this.listitems[chkitems[i]]).attr("value");
                        else
                            this._selectedValue = "";
                        if (!this._initValue)
                            this._trigger('checkChange', { isChecked: this.checkedStatus, data: this.model });
                        args = { text: this.element[0].value, selectedText: this.currentValue, itemId: this.selectedIndexValue, value: this._selectedValue, isChecked: this.checkedStatus };
                        if (!this._initValue)
                            this._trigger("change", args);
                        this._cascadeAction();
                    }
                }
                /*Watermark*/
                if (this.model.watermarkText != null) {
                    if (($.trim(this.element.val()) === '') || ($.trim(this.element.val()) === this.model.watermarkText)) {
                        this.element.val(this.model.watermarkText);
                        this.element.addClass("e-watermark");
                    } else {
                        this.element.removeClass("e-watermark");
                    }
                }
            }
        },
        /**
      * This method is used to set all the  items to uncheck.
      * @return jQuery
      * @example 
      * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
      * // Create DropDownList
	  * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5",showCheckbox:true});
      * var DropDownListObj  = $("#drpdwn").data("ejDropDownList");
      * DropDownListObj.unCheckAll(); // UncheckAll values the DropDownList
      * &lt;/script&gt;
      * @example 
     * &lt;input type="text" id="drpdwn" /&gt; <br> 
			*  &lt;div id="carsList"&gt;
			*    &lt;ul&gt;
			*       &lt;li&gt;Audi A4&lt;/li&gt;
			*       &lt;li&gt;Audi A5&lt;/li&gt;
			*       &lt;li&gt;Audi A6&lt;/li&gt;
			*       &lt;li&gt;Audi A7&lt;/li&gt;
			*       &lt;li&gt;Audi A8&lt;/li&gt;
			*    &lt;/ul&gt;
			*  &lt;/div&gt;<br/> 
	  * &lt;script&gt;
      * // Create DropDownList
	  * $('#drpdwn').ejDropDownList({targetID: "carsList",value:"Audi A5",showCheckbox:true});
      * $('#drpdwn').ejDropDownList("unCheckAll"); 	
      * &lt;/script&gt;
      *@memberof ejDropDownList
      * @instance
      */
        unCheckAll: function () {
            if (!this.model.enabled) return false;
            for (i = 0; i < this.listitems.length; i++) {
                if ($(this.listitems[i].firstChild).find('.listcheckbox').ejCheckBox('isChecked')) {
					$(this.listitems[i]).removeClass('e-active');
                    $(this.listitems[i].firstChild).find('.listcheckbox').ejCheckBox('option', 'checked', false);
                    this.currentValue = $.trim($(this.listitems[i]).text());
                    if ($(this.listitems[i]).attr("value")) {
                        this._hiddenValue = $(this.listitems[i]).attr("value");
                    }
                    else {
                        this._hiddenValue = this.currentValue;
                    }
                    this._txtpos = (this.element[0].value).lastIndexOf(this.currentValue);
                    this._delimiterIndex = (this.element[0].value).lastIndexOf(",");
                    if ((this._txtpos == 0) && (this._delimiterIndex <= -1)) {
                        this.element.val(this.element[0].value.replace(this.currentValue, ""));
                        this._hiddenInput.val(this._hiddenInput[0].value.replace(this._hiddenValue, ""));
                    } else if (((this._txtpos == 0) && (this._delimiterIndex > -1)) || ((this._txtpos > -1) && (this._delimiterIndex > this._txtpos))) {
                        if(this.element[0].value == this.currentValue || this.element[0].value.length == this._txtpos+this.currentValue.length){
							this.element.val(this.element[0].value.replace(this.currentValue, ""));
                        	this._hiddenInput.val(this._hiddenInput[0].value.replace(this._hiddenValue, ""));
						}
						else{
                       		this.element.val(this.element[0].value.replace(this.currentValue + ",", ""));
                        	this._hiddenInput.val(this._hiddenInput[0].value.replace(this._hiddenValue + ",", ""));
						}
                    } else if ((this._txtpos > -1) && (this._delimiterIndex < this._txtpos)) {
                        this.element.val(this.element[0].value.replace("," + this.currentValue, ""));
                        this._hiddenInput.val(this._hiddenInput[0].value.replace("," + this._hiddenValue, ""));
                    } else if ((this._txtpos > -1) && (this._delimiterIndex < this._txtpos)) {
                        this.element.val(this.element[0].value.replace(this.currentValue, ""));
                        this._hiddenInput.val(this._hiddenInput[0].value.replace(this._hiddenValue, ""));
                    }
                }
                this.checkedStatus = false;
                var _nodes = this.model.selectedItems;
                if ($.inArray(i, _nodes) > -1) {
                    this.model.selectedItems.splice($.inArray(i, _nodes), 1);
                }
                if ($(this.listitems[i]).attr("value") != null)
                    this._selectedValue = $(this.listitems[i]).attr("value");
                else
                    this._selectedValue = "";
                this._itemID = $(this.listitems[i]).attr("id");
                if (!ej.isNullOrUndefined(this._itemID) && this._itemID != "")
                    this._removeSelectedItemsID();
                if (!this._initValue)
                    this._trigger('checkChange', { isChecked: this.checkedStatus, data: this.model });
                args = { text: this.element[0].value, selectedText: this.currentValue, itemId: i, value: this._selectedValue, isChecked: this.checkedStatus };
                if (!this._initValue)
                    this._trigger("change", args);
                this._cascadeAction();
            }
            this.value(this.element.val());
            this.model.text = this.currentValue;
            this.model.itemValue = this._selectedValue;
            /*watermarkText*/
            if (this.model.watermarkText != null) {
                if (($.trim(this.element.val()) === '') || ($.trim(this.element.val()) === this.model.watermarkText)) {
                    this.element.val(this.model.watermarkText);
                    this.element.addClass("e-watermark");
                } else {
                    this.element.removeClass("e-watermark");
                }
            }
        },
        _removeSelectedItemsID: function () {
            var itemToRemove;
            itemToRemove = this._selectedItemsID.indexOf(this._itemID);
            this._selectedItemsID.splice(itemToRemove, 1);
            this._itemID = "";
        },
        //List Properties
        _refreshScroller: function () {
            this.popupList.css("height", "auto");
            this.popupList.find(".e-content, .e-vhandle").removeAttr("style");
            this.popupList.find(".e-vhandle div").removeAttr("style");

            this.popupList.css({ "display": "block" });  // For get the height of the popup
            this.scrollerObj.model.height = this.popupList.height();
            this.scrollerObj.refresh();
            this.scrollerObj.option("scrollTop", 0);
            this.popupList.css({ "height": "auto" });
        },
        _setListWidth: function () {
            var width = this.model.popupWidth;
            if (width != "auto") this.popupList.css({ "width": width });
            else this.popupList.css({ "min-width": this.wrapper.width() });
        },

        _setListHeight: function () {
            if (this.model.itemsCount > 0) { this.popupList.css({ "max-height": this.model.itemsCount * 30 }); }
            else this.popupList.css({ "max-height": this.model.popupHeight });
			
        },
        _refreshPopup: function () {
            if (this.model.popupWidth == "auto") this.popupList.css({ "min-width": this.wrapper.width() });
            this._setListPosition();
            this._refreshScroller();
        },
        _setListPosition: function () {
            var elementObj = this.wrapper;
            var pos = elementObj.offset(),
            left = pos.left,
            totalHeight = elementObj.outerHeight(),
            border = (totalHeight - elementObj.height()) / 2,
            maxZ = this._getZindexPartial();
            if (this.model.enableRTL) left -= this.popupList.outerWidth() - elementObj.outerWidth();
            this.popupList.css({
                "left": left + "px",
                "top": pos.top + totalHeight - border + 3 + "px",
                "z-index": maxZ
            });
        },
        _getZindexPartial: function () {
            var parents = this.element.parents(), bodyEle;
            bodyEle = $('body').children(), index = bodyEle.index(this.popup);
            bodyEle.splice(index, 1);
            $(bodyEle).each(function (i, ele) { parents.push(ele); });

            var maxZ = Math.max.apply(maxZ, $.map(parents, function (e, n) {
                if ($(e).css('position') != 'static')
                    return parseInt($(e).css('z-index')) || 1;
            }));
            if (!maxZ || maxZ < 10000) maxZ = 10000;
            else maxZ += 1;
            return maxZ;
        },
        //Popup status
        _showResult: function () {
            var proxy = this;
            
            this._trigger("beforePopupShown", { text: this.element[0].value,value: this._selectedValue });
            this._refreshPopup();
            this.popupList.css("display", "none");
            this.popupList.slideDown(this.model.enableAnimation ?200:0, "easeOutQuad", function () {
                proxy.popupList.focus();
                $(document).bind("mousedown", $.proxy(proxy._OnDocumentClick, proxy));
            });
            this.showPopupBox = true;
            this.element.attr({ "aria-expanded": true }); var _popupListItems = this.ultag.children("li");
            this._listSize = _popupListItems.size();

            _popupListItems.bind("mouseenter", $.proxy(this._OnMouseEnter, this));
            _popupListItems.bind("mouseleave", $.proxy(this._OnMouseLeave, this));
            _popupListItems.bind("click", $.proxy(this._OnMouseClick, this));
            $(window).bind("resize", $.proxy(this._OnWindowResize, this));
            
            this._trigger("popupShown", { text:this.element[0].value, value:this._selectedValue });
        },

        _OnWindowResize: function (e) {
            this._refreshPopup();
            this.popupList.css("display", "block");
        },
        _hideResult: function () {
            if (this.showPopupBox) {
                this.showPopupBox = false;
                var proxy = this;
				this.popupList.css("display", "none");
                this.popupList.slideUp(this.model.enableAnimation?100:0, "easeOutQuad", function () {
                    proxy.wrapper.focus();
                    $(document).unbind("mousedown", $.proxy(proxy._OnDocumentClick, proxy));
                });
				if (this.element != null)
                this.element.attr({ "aria-expanded": false }); var _popupListItems = this.ultag.children("li");
                $(window).unbind("resize", $.proxy(this._OnWindowResize, this));
                _popupListItems.unbind("mouseenter", $.proxy(this._OnMouseEnter, this));
                _popupListItems.unbind("mouseleave", $.proxy(this._OnMouseLeave, this));
                _popupListItems.unbind("click", $.proxy(this._OnMouseClick, this));
                if (this.element != null)
                    this._trigger("popupHide", {  text:this.element[0].value, value:this._selectedValue });
            }
        },
        // selecting text box value
        _enterTextBoxValue: function () {
            var args;
            this.removeID = false;
            this._chooseSelectionType();
            args = { text: this.currentValue, selectedText: this.currentValue, itemId: this.selectedIndexValue, value: this._selectedValue, isChecked: this.checkedStatus };
            if (!this._initValue) this._trigger("select", args);
            if (this.element[0].value != this.currentValue) {
                if (this.model.showCheckbox) {
                    if (this.model.allowMultiSelection) {
                        if (this.activeItem.find('.listcheckbox').ejCheckBox('isChecked') == false) {
                            this.activeItem.find('.listcheckbox').ejCheckBox('option', 'checked', true)
                            this.checkedStatus = true;
                        }
                        this._ulBox.append(this._createBox(this.currentValue));
                        if (this.showPopupBox)
                            this._setListPosition();
                    }
					else{
						if (this.activeItem.find('.listcheckbox').ejCheckBox('isChecked') == false) {
                            this.activeItem.find('.listcheckbox').ejCheckBox('option', 'checked', true)
                            this.checkedStatus = true;
                        }
					}
                    this._maintainHiddenValue();
                    this._addText(this.currentValue);
                    var _nodes = this.model.selectedItems;
                    if ($.inArray(this.selectedIndexValue, _nodes) == -1) {
                        this.model.selectedItems.push(this.selectedIndexValue);
                    }
                } else {
                    this.ultag.children("li").removeClass('e-hover').removeClass('e-active');
                    this.activeItem.addClass('e-active');
                    this.element.val(this.currentValue);
                    this._maintainHiddenValue();
                    this._hiddenInput.val(this._hiddenValue);
                    this.model.selectedItemIndex = this.selectedIndexValue;
                }

                args = { text: this.element[0].value, selectedText: this.currentValue, itemId: this.selectedIndexValue, value: this._selectedValue, isChecked: this.checkedStatus };

                if (!this._initValue)
                    this._trigger("change", args);
                this._cascadeAction();
                this.value(this.element.val());
                this.model.itemValue = this._selectedValue;
                this.model.text = this.currentValue;
                /*Watermark*/
                if (this.model.watermarkText != null) {
                    if (($.trim(this.element.val()) === '') || ($.trim(this.element.val()) === this.model.watermarkText)) {
                        this.element.val(this.model.watermarkText);
                        this.element.addClass("e-watermark");
                    } else {
                        this.element.removeClass("e-watermark");
                    }
                }
            }
        },
        _chooseSelectionType: function () {
            this.activeItem = this._getActiveItem();
            this.selectedIndexValue = this._activeItem;
            if (this.model.dataSource != null && typeof this.model.dataSource[0] == "object") {
                this.currentValue = $.trim(this._getField(this.popupListItems[this._activeItem], this.mapFld._text));
                this.hidelement = this._getField(this.popupListItems[this._activeItem], this.mapFld._value);
                this._selectedValue = this.hidelement;
                this._itemID = this._getField(this.popupListItems[this._activeItem], this.mapFld._id);
            } else {
                this.currentValue = $.trim(this.activeItem.text());
                if ($(this.activeItem).attr("value") != null)
                    this._selectedValue = $(this.activeItem).attr("value");
                else
                    this._selectedValue = "";
                this._itemID = $(this.activeItem).attr("id");
            }
            if (!ej.isNullOrUndefined(this._itemID) && this._itemID != "") {
                if (!this.model.showCheckbox) {
                    this._selectedItemsID = [];
                    !this.removeID && this._selectedItemsID.push(this._itemID);
                }
                else
                    !this.removeID ? this._selectedItemsID.push(this._itemID) : this._removeSelectedItemsID();
            }
            this.selectedTextValue = this.currentValue;
        },
        _maintainHiddenValue:function(){
            if ($(this.activeItem).attr("value")) {
                this._hiddenValue = $(this.activeItem).attr("value");
            }
            else {
                this._hiddenValue = this.currentValue;
            }
        },
        _removeTextBoxValue: function () {
            this.removeID = true;
            this._chooseSelectionType();
            if (this.model.showCheckbox) {
                this._maintainHiddenValue();
                this._removeText(this.currentValue);
                var _nodes = this.model.selectedItems;
                if ($.inArray(this.selectedIndexValue, _nodes) > -1) {
                    this.model.selectedItems.splice($.inArray(this.selectedIndexValue, _nodes), 1);
                }
                if (this.model.allowMultiSelection) {
                    this._deleteBoxCheck(this.currentValue);
                    if (this.showPopupBox)
                        this._setListPosition();
                }
				else{
					if (this.activeItem.find('.listcheckbox').ejCheckBox('isChecked') == true) {
						this.activeItem.find('.listcheckbox').ejCheckBox('option', 'checked', false)
						this.checkedStatus = false;
					}
				}
            } else {
                this.ultag.children("li").removeClass('e-hover').removeClass('e-active');
                this._txtpos = (this.element[0].value).lastIndexOf(this.currentValue);
                if (this._txtpos > -1)
                    this.element.val(this.element[0].value.replace(this.currentValue, ""));
            }
            args = { text: this.currentValue, selectedText: this.currentValue, itemId: this.selectedIndexValue, value: this._selectedValue, isChecked: this.checkedStatus };
            if (!this._initValue)
                this._trigger("select", args);
            args = { text: this.element[0].value, selectedText: this.currentValue, itemId: this.selectedIndexValue, value: this._selectedValue, isChecked: this.checkedStatus };
            if (!this._initValue)
                this._trigger("change", args);
            this.value(this.element.val());
            this.model.itemValue = this._selectedValue;
            this.model.text = this.currentValue;
            /*Watermark*/
            if (this.model.watermarkText != null) {
                if (($.trim(this.element.val()) === '') || ($.trim(this.element.val()) === this.model.watermarkText)) {
                    this.element.val(this.model.watermarkText);
                    this.element.addClass("e-watermark");
                } else {
                    this.element.removeClass("e-watermark");
                }
            }
        },
        /* box */

        _createBox: function (value) {
            if (!this._checkContains(value) && this.checkedStatus) {
                var span = ej.buildTag("span.e-icon e-close");
                var li = ej.buildTag("li.e-options", value).append(span);
                this._on(span, "click", function (e) {
                    if (!this.model.enabled) return false;
                    this._deleteBox($(e.target).parent());
                });
                return li;
            }
        },
        _deleteBoxCheck: function (val) {
            var items = this._ulBox.children('li');
            for (var i = 0; i < items.length; i++) {
                if ($(items[i]).text() == val) {
                    $(items[i]).remove();
                }
            }
        },
        _deleteLastBox: function () {
            var items = this._ulBox.children("li:not(.e-search-box)");
            var item = items.last();
            if (item.hasClass("e-active")) this._deleteBox(item);
            else {
                this._removeActive();
                item.addClass("e-active");
            }
        },
        _deleteBox: function (items) {
            for (var i = 0; i < items.length; i++) {
                var cobj = $(items[i]);
                deltext = cobj.text();
                var listItems = this.ultag.children('li');
                for (var j = 0; j < listItems.length; j++) {
                    if ($(listItems[j]).text() == deltext) {
                        this._activeItem = j;
                        this._uncheckboxModel(this._activeItem);
                    }
                }
                cobj.remove();
            }
        },
        _removeActive: function () {
            this._ulBox.children("li").removeClass("e-active");
        },
        _adjustWidth: function () {
            var tempSpan = ej.buildTag("span", this.element.val());
            this.container.append(tempSpan);
            this.element.width(tempSpan.width() + 30);
            tempSpan.remove();
        },
        _uncheckboxModel: function (val) {
            var listItems = this.ultag.children('li');
            if ($(listItems[val].firstChild).find('.listcheckbox').ejCheckBox('isChecked')) {
                $(listItems[val].firstChild).find('.listcheckbox').ejCheckBox('option', 'checked', false);
                this._removeTextBoxValue();
                if (!this._initValue)
                    this._trigger('checkChange', { isChecked: this.checkedStatus, data: this.model });
            }
        },
        _destroyBoxModel: function () {
            this.container.prepend(this.element);
            this.element.css('display', 'block');
            this.wrapper.height(this.model.height);
            this._ulBox.remove();
            this._off(this.container, "mousedown");
        },
        //
        _removeListHover: function () {
            this.ultag.children("li").removeClass("e-hover");
        },

        _addListHover: function () {
            var activeItem = this._getActiveItem();
            activeItem.addClass("e-hover");
            this.scrollerObj.setModel({ "scrollTop": this._calcScrollTop() });
            activeItem.focus();
        },
        _calcScrollTop: function () {
            var ulH = this.ultag.outerHeight(), li = this.ultag.find("li"), liH = 0, index, top, i;
            index = this.ultag.find("li.e-hover").index();
            for (i = 0; i < index; i++) { liH += li.eq(i).outerHeight(); }
            top = liH - ((this.popupList.outerHeight() - li.eq(index).outerHeight()) / 2);
            return top;
        },
        _getActiveItem: function () {
            return $(this.ultag.children("li")[this._activeItem]);
        },
        _setDimentions: function () {
            if (this.model.height)
                this.wrapper.height(this.model.height);
            if (this.model.width)
                this.wrapper.width(this.model.width);
        },


        _roundedCorner: function (val) {
            if (val) {
                this.container.addClass("e-corner-all");
            }
            else {
                this.container.removeClass("e-corner-all");
            }

        },

        _enabled: function (boolean) {
            if (boolean) this.enable();
            else this.disable();
        },

        _destroyDropdown: function () {
            this.element.insertAfter(this.wrapper);
            this.element.width(this.element.width() + this.dropdownbutton.outerWidth());
            this.wrapper.remove();
            this.container.remove();
            this.element.unbind("mousedown", $.proxy(this._OnDropdownClick, this));//need to write for removing the list 
            this.dropdownbutton.unbind("mousedown", $.proxy(this._OnDropdownClick, this));//need to write for removing the list 
        },


        _RightToLeft: function () {
            if (this.model.enableRTL) {
                this.wrapper.addClass("e-rtl");
            }
            else {
                this.wrapper.removeClass("e-rtl");
            }

        },
        _dropbtnRTL: function () {
            if (this.model.enableRTL) {
                this.popupList.addClass("e-rtl");
            }
            else {
                this.popupList.removeClass("e-rtl");
            }
        },
        _OnDropdownClick: function (e) {
            e.preventDefault();
            if (this.model.readOnly) return false;
            if (this.ultag.find('li').length > 0) {
                if (this.showPopupBox) {
                    this._hideResult();
                }
                else {
                    this._showResult();
                    this.wrapper.focus();
                }
            }
        },

        _showFullList: function () {
            if (this.model.dataSource != null) {
                if (!(ej.DataManager && this.model.dataSource instanceof ej.DataManager)) {
                    this.popupListItems = this.model.dataSource;
                }
            }
            this._renderPopupList();
        },

        // cascade options
        _cascadeAction: function () {
            if (this.model.cascadeTo) {
                this._currentValue = this._getField(this.popupListItems[this._activeItem], this.mapFld._value);
                this.selectDropObj = $('#' + this.model.cascadeTo).ejDropDownList('instance');
                if (ej.isNullOrUndefined(this._dSource))
                    this._dSource = this.selectDropObj.model.dataSource;
                if (ej.DataManager && this._dSource instanceof ej.DataManager) {
                    this._performOdataInit();
                } else {
                    this._performJsonDataInit();
                }
            }
        },
        _performOdataInit: function () {
            var proxy = this, queryPromise, tempQuery;
            if (ej.isNullOrUndefined(this._dQuery)) {
                this._dQuery = this.selectDropObj.model.query.clone();
            }
            tempQuery = this._dQuery.clone();
            proxy.selectDropObj._addLoadingClass();
            queryPromise = this._dSource.executeQuery(tempQuery.where(this.mapFld._value, "equal", this._currentValue));
            queryPromise.fail(function (e) {
                proxy._changedSource = null;
                proxy.selectDropObj.setModel({ dataSource: proxy._changedSource, enabled: false });
            }).done(function (e) {
                proxy._changedSource = e.result;
                proxy.selectDropObj.setModel({ dataSource: proxy._changedSource, enabled: true });
                proxy.selectDropObj._removeLoadingClass();
            });
        },
        _performJsonDataInit: function () {
            this._changedSource = ej.DataManager(this._dSource).executeLocal(ej.Query().where(this.mapFld._value, "==", this._currentValue));
            this.selectDropObj.setModel({ dataSource: this._changedSource, enabled: true, value:"" });
        },
        //
        _OnMouseEnter: function (e) {
            var targetEle;
            this.ultag.children("li").removeClass("e-hover");
            if ($(e.target).is("li")) { $(e.target).addClass("e-hover"); }
            else if (e.target.tagName != "li") {
                targetEle = $(e.target).parents("li");
                $(targetEle).addClass("e-hover");
            }
            var activeItem = 0;
            this.ultag.children("li").each(function (index) {
                if ($(this).hasClass("e-hover")) {
                    activeItem = index;
                    return false;
                }
            });
            this._activeItem = activeItem;
        },
        _OnMouseLeave: function (e) {
            this.ultag.children("li").removeClass("e-hover");
        },
        _OnMouseClick: function (e) {
            if (!this.model.showCheckbox) {
                if (this.model.template) {
                    this._templateValue();
                } else {
                    this._enterTextBoxValue();
                }
                this._hideResult();
            } else {
                if (($(e.currentTarget).is("li")) && ($(e.target).is("li"))) {
                    if ($(e.currentTarget.firstChild).find('.listcheckbox').ejCheckBox('isChecked')) {
                        $(e.currentTarget.firstChild).find('.listcheckbox').ejCheckBox('option', 'checked', false);
                        this.checkedStatus = false;
                        this._removeTextBoxValue();
                    } else {
                        $(e.currentTarget.firstChild).find('.listcheckbox').ejCheckBox('option', 'checked', true);
                        this.checkedStatus = true;
                        this._enterTextBoxValue();
                    }
                }
                if (!this._initValue)
                    this._trigger('checkChange', { isChecked: this.checkedStatus, data: this.model });
            }
        },
        _OnClickCheckList: function (e) {
            if (e.isChecked) {
                this.checkedStatus = true;
                this._enterTextBoxValue();
            } else {
                this.checkedStatus = false;
                this._removeTextBoxValue();
            }
            if (!this._initValue)
                this._trigger('checkChange', { isChecked: this.checkedStatus, data: this.model });

        },
        _OnListSelect: function (e) {
            e.preventDefault();
            activeItem = this._getActiveItem();
            if ($(activeItem).find('.listcheckbox').ejCheckBox('isChecked')) {
                $(activeItem).find('.listcheckbox').ejCheckBox('option', 'checked', false);
                this.checkedStatus = false;
                this._removeTextBoxValue();
            } else {
                $(activeItem).find('.listcheckbox').ejCheckBox('option', 'checked', true);
                this.checkedStatus = true;
                this._enterTextBoxValue();
            }

            if (!this._initValue)
                this._trigger('checkChange', { isChecked: this.checkedStatus, data: this.model });
        },
        _OnDocumentClick: function (e) {
            if (!$(e.target).is(this.popupList) && !$(e.target).parents(".e-ddl-popup").is(this.popupList) &&
                !$(e.target).is(this.element) && !$(e.target).parents(".e-ddl").is(this.wrapper)) {
                this._hideResult();
            }
            else if ($(e.target).is(this.popupList) || $(e.target).parents(".e-ddl-popup").is(this.popupList))
                e.preventDefault();
        },

        //keyboard events
        _OnKeyDown: function (e) {
            if ((!this.model.enabled) || (this.model.readOnly)) return false;
            this._itemId = null;
            var _popupListItems = this.ultag.children("li");
            this._listSize = this.ultag.children("li").size();

            switch (e.keyCode) {
                case 38:    //Up arrow
                    if (e.altKey) {
                        if (this.ultag.find('li').length > 0)
                            this._hideResult();
                    } else {
                        if (this.showPopupBox) {
                            this._removeListHover();
                            this.ultag.children("li").removeClass('e-active');
                            if ((this._activeItem <= 0) || (this._activeItem == null) || (this._activeItem > this._listSize - 1))
                                this._activeItem = this._listSize - 1;
                            else
                                this._activeItem -= 1;
                            this._addListHover();
                            if ((!this.model.showCheckbox) && (this.model.template == null))
                                this._enterTextBoxValue();
                        } else {
                            this.ultag.children("li").removeClass('e-active');
                            if ((this._activeItem <= 0) || (this._activeItem == null) || (this._activeItem > this._listSize - 1))
                                this._activeItem = this._listSize - 1;
                            else
                                this._activeItem -= 1;
                            if ((!this.model.showCheckbox) && (this.model.template == null))
                                this._enterTextBoxValue();
                        }
                        e.preventDefault();
                        return false;
                    }
                    break;

                case 40:    //Down arrow
                    if (e.altKey) {
                        if (this.ultag.find('li').length > 0)
                            this._showResult();
                    } else {
                        if (this.showPopupBox) {
                            this._removeListHover();
                            this.ultag.children("li").removeClass('e-active');
                            if ((this._activeItem >= this._listSize - 1) || (this._activeItem == null) || (this._activeItem < 0))
                                this._activeItem = 0;
                            else
                                this._activeItem += 1;
                            this._addListHover();
                            if ((!this.model.showCheckbox) && (this.model.template == null))
                                this._enterTextBoxValue();
                        } else {
                            this.ultag.children("li").removeClass('e-active');
                            if ((this._activeItem >= this._listSize - 1) || (this._activeItem == null) || (this._activeItem < 0))
                                this._activeItem = 0;
                            else
                                this._activeItem += 1;
                            if ((!this.model.showCheckbox) && (this.model.template == null))
                                this._enterTextBoxValue();
                        }
                        e.preventDefault();
                        return false;
                    }
                    break;
                case 37:// Left Key equals up
                    if (this.showPopupBox) {
                        this._removeListHover();
                        this.ultag.children("li").removeClass('e-active');
                        if ((this._activeItem <= 0) || (this._activeItem == null) || (this._activeItem > this._listSize - 1))
                            this._activeItem = this._listSize - 1;
                        else
                            this._activeItem -= 1;
                        this._addListHover();
                        if ((!this.model.showCheckbox) && (this.model.template == null))
                            this._enterTextBoxValue();
                    } else {
                        this.ultag.children("li").removeClass('e-active');
                        if ((this._activeItem <= 0) || (this._activeItem == null) || (this._activeItem > this._listSize - 1))
                            this._activeItem = this._listSize - 1;
                        else
                            this._activeItem -= 1;
                        if ((!this.model.showCheckbox) && (this.model.template == null))
                            this._enterTextBoxValue();
                    }
                    e.preventDefault();
                    return false;
                    break;  // Left Key
                case 39:// Right Key equals down
                    if (this.showPopupBox) {
                        this._removeListHover();
                        this.ultag.children("li").removeClass('e-active');
                        if ((this._activeItem >= this._listSize - 1) || (this._activeItem == null) || (this._activeItem < 0))
                            this._activeItem = 0;
                        else
                            this._activeItem += 1;
                        this._addListHover();
                        if ((!this.model.showCheckbox) && (this.model.template == null))
                            this._enterTextBoxValue();
                    } else {
                        this.ultag.children("li").removeClass('e-active');
                        if ((this._activeItem >= this._listSize - 1) || (this._activeItem == null) || (this._activeItem < 0))
                            this._activeItem = 0;
                        else
                            this._activeItem += 1;
                        if ((!this.model.showCheckbox) && (this.model.template == null))
                            this._enterTextBoxValue();
                    }
                    e.preventDefault();
                    return false;
                    break;  // Right Key
                case 8:    // Backspace key
                    if ((this.model.allowMultiSelection == true) && (this.model.showCheckbox)) {
                        this._deleteLastBox();
                    }
                    e.preventDefault();
                    return false;
                    break;
                case 9:    // Tab key
                    this._hideResult();
                    break;
                case 33:
                    break;//up key
                case 34:
                    break;//down key
                case 35:
                    if (this.showPopupBox) {
                        this._removeListHover();
                        this.ultag.children("li").removeClass('e-active');
                        this._activeItem = this._listSize - 1;
                        this._addListHover();
                        if ((!this.model.showCheckbox) && (this.model.template == null))
                            this._enterTextBoxValue();
                    }
                    else {
                        this.ultag.children("li").removeClass('e-active');
                        this._activeItem = this._listSize - 1;
                        if ((!this.model.showCheckbox) && (this.model.template == null))
                            this._enterTextBoxValue();
                    }
                    e.preventDefault();
                    return false;
                    break;  // End Key
                case 36:
                    if (this.showPopupBox) {
                        this._removeListHover();
                        this.ultag.children("li").removeClass('e-active');
                        this._activeItem = 0;
                        this._addListHover();
                        if ((!this.model.showCheckbox) && (this.model.template == null))
                            this._enterTextBoxValue();
                    }
                    else {
                        this.ultag.children("li").removeClass('e-active');
                        this._activeItem = 0;
                        if ((!this.model.showCheckbox) && (this.model.template == null))
                            this._enterTextBoxValue();
                    }
                    e.preventDefault();
                    return false;
                    break;  // Home Key
                case 17:    // Ctrl key
                    break;
                case 18:    // Alt key
                    break;
                case 27:    // Esc key
                    this._hideResult();
					e.stopPropagation();
                    break;
                case 32:    // space Key
                    e.preventDefault();
                    return false;
                    break;
            }
        },

        _OnKeyUp: function (e) {
            if ((!this.model.enabled) || (this.model.readOnly)) return false;
            e.preventDefault();
            var target = e.target;
            if ($.trim(this.element.val()) == "" && e.keyCode == 38 && e.keyCode == 40) {
                this._hideResult();
                return false;
            }

            switch (e.keyCode) {
                //Restricts the keyup event for other functional keys
                case 38: break;  // Up Key
                case 40: break;  // Down Key
                case 37: break;  // Left Key
                case 39: break;  // Right Key

                case 20: break;  // CapsLk
                case 16: break;  // Shift Key
                case 17: break;  // Ctrl Key
                case 18: break;  // Alt Key
                case 35: break;  // End Key
                case 36: break;  // Home Key
                case 144: break;  // Num Lock
                case 27: break;  // Esc Key
                case 9: break;  // Tab Key

                case 13:    // Enter Key
                    e.preventDefault();
                    if (this.model.showCheckbox) {
                        this._OnListSelect(e);
                    } else if (this.model.template) {
                        this._templateValue();
                        this._hideResult();
                    }
                    else {
                        this._enterTextBoxValue();
                        this._hideResult();
                    }

                    return false;
                    break;
                case 32:    // space Key
                    e.preventDefault();
                    if (this.model.showCheckbox) {
                        this._OnListSelect(e);
                    } else if (this.model.template) {
                        this._templateValue();
                        this._hideResult();
                    }
                    else {
                        this._enterTextBoxValue();
                        this._hideResult();
                    }
                    return false;
                    break;
                case 8:     // Backspace Key
                    // this._OnTextEnter("backspace");
                    this._hideResult();
                    break;
                case 46:    // Delete Key
                    if ((this.model.allowMultiSelection == true) && (this.model.showCheckbox)) {
                        this._deleteBox(this._ulBox.children("li.e-active"));
                        break;
                    }

                default:
                    if  (this.model.enableIncrementalSearch) {
                        this._OnTextEnter(e.keyCode);
                    }
                    break;
            }
        },
        //
        //template type
        _templateValue: function () {
            var activeitem = $(this.ultag.children("li")[this._activeItem]);
            currentText = this._getField(this.popupListItems[this._activeItem], this.mapFld._text);
            currentValue = this._getField(this.popupListItems[this._activeItem], this.mapFld._value);
            if ($(this.ultag.children("li")[this._activeItem]).attr("value")) 
                this._hiddenValue = currentValue;
            else 
                this._hiddenValue = currentText;
            args = { text: currentText, selectedText: currentText, itemId: this._activeItem, value: currentValue };
            if (!this._initValue)
                this._trigger("select", args);
            if (this._activeItem != this._aselectedItem) {
                this.ultag.children("li").removeClass('e-hover').removeClass('e-active');
                activeitem.addClass('e-active');
                this._aselectedItem = this._activeItem;
                this.element.val(currentText);
                this._hiddenInput.val(this._hiddenValue);
                args = { text: this.element[0].value, selectedText: currentText, itemId: this._activeItem, value: currentValue };
                if (!this._initValue)
                    this._trigger("change", args);
                this.value(this.element.val());
                this.model.itemValue = currentValue;
                this.model.text = currentText;
            }
            /*Watermark*/
            if (this.model.watermarkText != null) {
                if (($.trim(this.element.val()) === '') || ($.trim(this.element.val()) === this.model.watermarkText)) {
                    this.element.val(this.model.watermarkText);
                    this.element.addClass("e-watermark");
                } else {
                    this.element.removeClass("e-watermark");
                }
            }
        },
        //
        //On Text type
        _OnTextEnter: function (from) {
            // this._hideResult();
            _proxy = this;
            this._incqueryString += String.fromCharCode(from);
            if (this._incqueryString.length > 0) {
                setTimeout(function () { _proxy._incqueryString = ""; }, 1000);
            }
            var list = this.listitems, i, strlen,
            caseSence = this.model.caseSensitiveSearch, mapper = this.model.fields,
            tempSuggestion = [],
            str, queryStr = this._incqueryString,
            querylength = this._incqueryString.length, searchflag = false;

            if (!caseSence) queryStr = queryStr.toLowerCase();

            for (i = 0; i < list.length; i++) {
                str = $.trim(list[i].innerText);
                str = caseSence ? str : str.toLowerCase();
                if (str.substr(0, querylength) == queryStr) {
                    if (this.showPopupBox) {
                        this._removeListHover();
                        this._activeItem = i;
                        if(!this.model.showCheckbox)
                        this._enterTextBoxValue();
                        this._addListHover();
                    } else {
                        this._activeItem = i;
                        if (!this.model.showCheckbox)
                        this._enterTextBoxValue();
                    }
                    searchflag = true;
                } else if ((i == list.length - 1) && (searchflag == false)) {
                    if (this.showPopupBox) {
                        this._removeListHover();
                        this._activeItem = i;
                        if (!this.model.showCheckbox)
                        this._enterTextBoxValue();
                        this._addListHover();
                    } else {
                        this._activeItem = i;
                        if (!this.model.showCheckbox)
                        this._enterTextBoxValue();
                    }
                    searchflag = true;
                }
                if (searchflag) break;
            }

        },

        //foucus in and out
        _targetFocus: function () {
            if (this.model.enabled) {
                if (this.element.hasClass("e-watermark")) {
                    this.element.removeClass("e-watermark");
                    this.element.val(null);
                }
                this.wrapper.addClass("e-focus");
                this._isFocused = true;
                /* Raise focusIn Event*/
               
                    this._trigger("focusIn");
            }
        },

        _targetBlur: function () {
            if (this.model.enabled) {
                this._isFocused = false;
                this.wrapper.removeClass("e-focus");
                if (this.model.watermarkText != null) {
                    if ($.trim(this.element.val()) === '') {
                        this.element.val(this.model.watermarkText);
                        this.element.addClass("e-watermark");
                    }
                }
                /* Raise focusOut Event*/
                
                    this._trigger("focusOut");
            }
        },

        //-------------------- Event Wire-up -------------------------//
        _wireEvents: function () {
            this._on(this.wrapper, "focus", this._targetFocus);
            this._on(this.wrapper, "blur", this._targetBlur);
            // this._on(this.element, "input", this._valueChange);
            //this._on(this.element, "keydown", this._OnKeyDown);
            //this._on(this.element, "keyup", this._OnKeyUp);


            this._on(this.wrapper, "keydown", this._OnKeyDown);
            this._on(this.popupList, "keydown", this._OnKeyDown);
            this._on(this.popupList, "keyup", this._OnKeyUp);
            this._on(this.wrapper, "keyup", this._OnKeyUp);

        }
    });
})(jQuery, Syncfusion);;