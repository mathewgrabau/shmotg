/*!
*  filename: ej.rte.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html TextArea
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
	* @class ejRTE
    * @param {object} options - settings for RTE.
	* @requires jQuery
	* @requires jquery.easing.1.3.js
    * @requires jquery.js
    * @requires jquery.globalize.js
    * @requires jquery.globalize.culture.en-US.js
    * @requires ej.core.js
    * @requires ej.data.js
    * @requires ej.rte.js
    * @requires ej.button.js
    * @requires ej.togglebutton.js
    * @requires ej.splitbutton.js
    * @requires ej.checkbox.js
    * @requires ej.radiobutton.js
    * @requires ej.dropdownlist.js
    * @requires ej.dialog.js
    * @requires ej.toolbar.js
    * @requires ej.editor.js
    * @requires ej.menu.js
    * @requires ej.scroller.js
    * @requires ej.draggable.js
	* @classdesc Custom Design for Html TextArea control.
	* @example 
	* &lt;textarea   id="rteSample"&gt; 	
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;     
	* &lt;script&gt;
	* // Create RTE
    * $("#rteSample").ejRTE();
	* &lt;/script&gt;
	*/
    // "ej.RTE" is "namespace.className" will hold functions and properties
    var xhr = null;
    ej.widget("ejRTE", "ej.RTE", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        _rootCSS: "e-rte",
        validTags: ["textarea"],
        _setFirst: false,

        // default model
        defaults: {
            /**		
			* Enables/Disables the editing of the content.
			* @default 	True
			* @type {boolean}
			* @example 
           * &lt;textarea   id="rteSample"&gt;  
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
			* // Initialize the RTE with the allowEditing value specified.
            * $("#rteSample").ejRTE({ allowEditing: false });
            * &lt;/script&gt;
			* @memberof ejRTE
			* @instance
			*/
            allowEditing: true,
            /**		
			* RTE control comments can access through keyboard shortcut keys.
			* @default 	True
			* @type {boolean}
			* @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
			* // Initialize the RTE with the allowKeyboardNavigation value specified.
            * $("#rteSample").ejRTE({allowKeyboardNavigation: false });
			* &lt;/script&gt;
			* @memberof ejRTE
			* @instance
			*/
            allowKeyboardNavigation: true,
            /**		
            * Sets the root class for RTE theme. This cssClass API helps to use custom skinning option for RTE control. By defining the root class using this API, we need to include this root class in CSS.
            * @default "gradient-lime"
            * @type {string}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * //Initialize the RTE with the cssClass value specified
            * 	$("#rteSample").ejRTE({ cssClass: 'gradient-lime'});
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            cssClass: "",
            /**		
            * Defines the height of the RTE textbox.
            * @default Null
            * @type {string | number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * //Initialize the RTE height property with the  value specified
            * 	$("#rteSample").ejRTE({ height: 250 });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            height: "370",
            /**		
            * Defines the width of the RTE textbox.
            * @default Null
            * @type {string |number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * //Initialize the RTE width property with the  value specified
            * 	$("#rteSample").ejRTE({ width: 500 });
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            width: "786",
            /**		
			* 	Enable | Disable the RTE control accessible or interaction..
			* @default 	True
			* @type {boolean}
			* @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
			* // Initialize the RTE with the enabled value specified.
            * $("#rteSample").ejRTE({enabled: false });
			* &lt;/script&gt;
			* @memberof ejRTE
			* @instance
			*/
            enabled: true,
            /**		
			* Set the max Length  for RTE text. 
			* @default 	400
			* @type {number}
			* @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
			* // Initialize the RTE with the maxLength value specified.
            * $("#rteSample").ejRTE({ maxLength: 900});
			* &lt;/script&gt;
			* @memberof ejRTE
			* @instance
			*/
            maxLength: 7000,
            /**		
			* Set the minimum width for RTE outer wrapper element. 
			* @default 	400
			* @type {number}
			* @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
			* // Initialize the RTE with the minWidth value specified.
            * $("#rteSample").ejRTE({ minWidth: 900});
			
			* &lt;/script&gt;
			* @memberof ejRTE
			* @instance
			*/
            minWidth: 400,
            /**		
           * Set the maximum width for RTE outer wrapper element. 
           * @default 	400
           * @type {number}
           * @example 
           * &lt;textarea   id="rteSample"&gt;  
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
           * // Initialize the RTE with the maxWidth value specified.
           * $("#rteSample").ejRTE({ maxWidth: 900});
          * &lt;/script&gt;
           * @memberof ejRTE
           * @instance
           */
            maxWidth: null,
            /**		
            * Set the minimum height for RTE outer wrapper element. 
            * @default 	280
            * @type {number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the maxWidth value specified.
            * $("#rteSample").ejRTE({ minHeight: 900});
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            minHeight: 280,
            /**		
            * Set the maximum height for RTE outer wrapper element. 
            * @default 	280
            * @type  {string | number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the maxHeight value specified.
            * $("#rteSample").ejRTE({ maxHeight: 900});
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            maxHeight: null,
            /**		
             * Shows toolbar in RTE. 
             * @default 	True
             * @type {boolean}
             * @example 
             * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
             * // Initialize the RTE with the showToolbar value specified.
             * $("#rteSample").ejRTE({showToolbar: false });
             * &lt;/script&gt;
             * @memberof ejRTE
             * @instance
             */
            showToolbar: true,
            /**		
            * Shows footer in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showFooter value specified.
            * $("#rteSample").ejRTE({showFooter: true });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showFooter: false,
            /**		
            * Shows HtmlSource in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showHtmlSource value specified.
            * $("#rteSample").ejRTE({showHtmlSource: false });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showHtmlSource: true,
            /**		
            * Shows WordCount in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showWordCount value specified.
            * $("#rteSample").ejRTE({showWordCount: false });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showWordCount: true,
            /**		
            * Shows HtmlTagInfo in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showHtmlTagInfo value specified.
            * $("#rteSample").ejRTE({showHtmlTagInfo: false });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showHtmlTagInfo: true,
            /**		
            * Shows ClearAll in RTE. 
            * @DIefault 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showClearAll value specified.
            * $("#rteSample").ejRTE({showClearAll: false });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showClearAll: true,
            /**		
            * Sets the iframe attribute in RTE. 
            * @default 	null
            * @type {object}
            * @example 
    * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the iframeAttribute value specified.
            * $("#rteSample").ejRTE({iframeAttribute: "color:#000" });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            iframeAttribute: "color:#5C5C5C",
            /**		
            * Sets the iframe attribute in RTE. 
            * @default 	null
            * @type {object}
            * @example 
    * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the iframeAttribute value specified.
            * $("#rteSample").ejRTE({showClearFormat:true });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showClearFormat: true,
            /**		
            * Shows FontOption in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showFontOption value specified.
            * $("#rteSample").ejRTE({showFontOption: false });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showFontOption: true,
            /**		
            * Shows Dimensions in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showDimensions value specified.
            * $("#rteSample").ejRTE({showDimensions: false });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showDimensions: false,
            /**		
            * Sets the culture in RTE. 
            * @default 	"en-US"
            * @type {string}
            * @example 
         * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the culture value specified.
            * $("#rteSample").ejRTE({locale: "en-US" });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            locale: "en-US",
            /**		
            * Sets the name in RTE. 
            * @default 	""
            * @type {string}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the name value specified.
            * $("#rteSample").ejRTE({name: "ecommentblog" });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            name: "",
            /**		
            * Sets the tools in RTE. 
            * @default 	null
            * @type {object}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
             *   //font: ["fontName", "fontSize", "fontColor", "backgroundColor"],
              *  formatStyle: ["format"],
               * style: ["bold", "italic", "underline", "strikethrough"],
                *alignment: ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
                *lists: ["unorderedList", "orderedList"],
                *indenting: ["outdent", "indent"],
                * doAction: ["undo", "redo"],
                * links: ["createLink"],
                * images: ["image", "video"],
                * tables: ["createTable", "addRowAbove", "addRowBelow", "addColumnLeft", "addColumnRight", "deleteRow", "deleteColumn", "deleteTable"]
            
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            tools: /** @lends ejRTE# */{
                //font: ["fontName", "fontSize", "fontColor", "backgroundColor"],
                /**		
                * Include Format styles in RTE toolbar.
                * @alias ejRTE#tools->formatStyle
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
              *  formatStyle: ["format"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                formatStyle: ["format"],
                /**		
                * Include font styles in RTE toolbar.
                * @alias ejRTE#tools->style
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
               * style: ["bold", "italic", "underline", "strikethrough"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                style: ["bold", "italic", "underline", "strikethrough"],
                /**		
                * Include font alignment options in RTE toolbar.
                * @alias ejRTE#tools->alignment
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
                *alignment: ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                alignment: ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
                /**		
                * Include list type options in RTE toolbar.
                * @alias ejRTE#tools->lists
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
                *lists: ["unorderedList", "orderedList"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                lists: ["unorderedList", "orderedList"],
                /**		
                * Include text indenting options in RTE toolbar.
                * @alias ejRTE#tools->indenting
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
                *indenting: ["outdent", "indent"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                indenting: ["outdent", "indent"],
                //copyPaste: ["cut", "copy", "paste"],
                /**		
                * Include action options in RTE toolbar.
                * @alias ejRTE#tools->doAction
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
                * doAction: ["undo", "redo"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                doAction: ["undo", "redo"],
                //clear: ["clearFormat", "clearAll"],
                /**		
                * Include links options in RTE toolbar.
                * @alias ejRTE#tools->links
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
             
                * links: ["createLink"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                links: ["createLink"],
                /**		
                * Include image  and video options in RTE toolbar.
                * @alias ejRTE#tools->images
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
             
                * images: ["image", "video"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                images: ["image", "video"],
                /**		
                * Include tables options in RTE toolbar.
                * @alias ejRTE#tools->tables
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
             
                * tables: ["createTable", "addRowAbove", "addRowBelow", "addColumnLeft", "addColumnRight", "deleteRow", "deleteColumn", "deleteTable"]
            
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                tables: ["createTable", "addRowAbove", "addRowBelow", "addColumnLeft", "addColumnRight", "deleteRow", "deleteColumn", "deleteTable"]
                //editTable:[""],
                //scripts: ["superscript", "subscript"],
                //casing: ["upperCase", "lowerCase"],
                //paragraph: ["paragraph"],
                //custom: null
            },
            /**		
            * Sets the toolsList in RTE. 
            * @default 	null
            * @type {object}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the toolsList value specified.
            * $("#rteSample").ejRTE({ toolsList: ["formatStyle", "font", "style", "scripts", "alignment", "lists", "indenting", "copyPaste", "doAction", "clear", "links", "images", "tables", "casing", "customTool"]});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            toolsList: ["formatStyle", "font", "style", "scripts", "alignment", "lists", "indenting", "copyPaste", "doAction", "clear", "links", "images", "tables", "casing", "customTool"],
            /**		
            * Sets the colorCode in RTE. 
            * @default 	null
            * @type {object}
            * @example 
           * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the colorCode value specified.
            * $("#rteSample").ejRTE({ colorCode: [
			            "000000", "FFFFFF", "C4C4C4", "ADADAD", "595959", "262626", "4f81bd", "dbe5f1", "b8cce4", "95b3d7", "366092", "244061", "c0504d", "f2dcdb", "e5b9b7", "d99694", "953734",
			            "632423", "9bbb59", "ebf1dd", "d7e3bc", "c3d69b", "76923c", "4f6128", "8064a2", "e5e0ec", "ccc1d9", "b2a2c7", "5f497a", "3f3151", "f79646", "fdeada", "fbd5b5", "fac08f",
			            "e36c09", "974806"
            ]});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            colorCode: [
			            "000000", "FFFFFF", "C4C4C4", "ADADAD", "595959", "262626", "4f81bd", "dbe5f1", "b8cce4", "95b3d7", "366092", "244061", "c0504d", "f2dcdb", "e5b9b7", "d99694", "953734",
			            "632423", "9bbb59", "ebf1dd", "d7e3bc", "c3d69b", "76923c", "4f6128", "8064a2", "e5e0ec", "ccc1d9", "b2a2c7", "5f497a", "3f3151", "f79646", "fdeada", "fbd5b5", "fac08f",
			            "e36c09", "974806"
            ],
            /**		
            * Sets the format in RTE. 
            * @default 	""
            * @type {string}
            * @example 
           * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the format value specified.
            * $("#rteSample").ejRTE({format: [
                { text: "Paragraph", value: "<p>", spriteCssClass: "e-paragraph" },
                { text: "Quotation", value: "<blockquote>", spriteCssClass: "e-quotation" },
                { text: "Heading 1", value: "<h1>", spriteCssClass: "e-h1" },
                { text: "Heading 2", value: "<h2>", spriteCssClass: "e-h2" },
                { text: "Heading 3", value: "<h3>", spriteCssClass: "e-h3" },
                { text: "Heading 4", value: "<h4>", spriteCssClass: "e-h4" },
                { text: "Heading 5", value: "<h5>", spriteCssClass: "e-h5" },
                { text: "Heading 6", value: "<h6>", spriteCssClass: "e-h6" }
            * ]});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            format: [
                { text: "Paragraph", value: "<p>", spriteCssClass: "e-paragraph" },
                { text: "Quotation", value: "<blockquote>", spriteCssClass: "e-quotation" },
                { text: "Heading 1", value: "<h1>", spriteCssClass: "e-h1" },
                { text: "Heading 2", value: "<h2>", spriteCssClass: "e-h2" },
                { text: "Heading 3", value: "<h3>", spriteCssClass: "e-h3" },
                { text: "Heading 4", value: "<h4>", spriteCssClass: "e-h4" },
                { text: "Heading 5", value: "<h5>", spriteCssClass: "e-h5" },
                { text: "Heading 6", value: "<h6>", spriteCssClass: "e-h6" }
            ],
            /**		
            * Sets the fontName in RTE. 
            * @default 	null
            * @type {object}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the fontName value specified.
            * $("#rteSample").ejRTE({format: [
                { text: "Paragraph", value: "<p>", spriteCssClass: "e-paragraph" },
                { text: "Quotation", value: "<blockquote>", spriteCssClass: "e-quotation" },
                { text: "Heading 1", value: "<h1>", spriteCssClass: "e-h1" },
                { text: "Heading 2", value: "<h2>", spriteCssClass: "e-h2" },
                { text: "Heading 3", value: "<h3>", spriteCssClass: "e-h3" },
                { text: "Heading 4", value: "<h4>", spriteCssClass: "e-h4" },
                { text: "Heading 5", value: "<h5>", spriteCssClass: "e-h5" },
                { text: "Heading 6", value: "<h6>", spriteCssClass: "e-h6" }
           * ]});
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            fontName: [
                       {
                           text: "Segoe UI",
                           value: "Segoe UI"
                       },
                       {
                           text: "Arial",
                           value: "Arial,Helvetica,sans-serif"
                       },
                       {
                           text: "Courier New",
                           value: "'Courier New',Courier,monospace"
                       },
                       {
                           text: "Georgia",
                           value: "Georgia,serif"
                       },
                       {
                           text: "Impact",
                           value: "Impact,Charcoal,sans-serif"
                       },
                       {
                           text: "Lucida Console",
                           value: "'Lucida Console',Monaco,monospace"
                       },
                       {
                           text: "Tahoma",
                           value: "Tahoma,Geneva,sans-serif"
                       },
                       {
                           text: "Times New Roman",
                           value: "'Times New Roman',Times,serif"
                       },
                       {
                           text: "Trebuchet MS",
                           value: "'Trebuchet MS',Helvetica,sans-serif"
                       },
                       {
                           text: "Verdana",
                           value: "Verdana,Geneva,sans-serif"
                       }
            ],
            /**		
            * Sets the fontSize in RTE. 
            * @default 	null
            * @type {object}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the fontSize value specified.
            * $("#rteSample").ejRTE({ fontSize: [
                {
                    text: "1",
                    value: "1"
                },
                {
                    text: "2 (10pt)",
                    value: "2"
                },
                {
                    text: "3 (12pt)",
                    value: "3"
                },
                {
                    text: "4 (14pt)",
                    value: "4"
                },
                {
                    text: "5 (18pt)",
                    value: "5"
                },
                {
                    text: "6 (24pt)",
                    value: "6"
                },
                {
                    text: "7 (36pt)",
                    value: "7"
                }
            * ]});
            * &lt;/script&gt;	
            * @memberof ejRTE
            * @instance
            */
            fontSize: [
                {
                    text: "1",
                    value: "1"
                },
                {
                    text: "2 (10pt)",
                    value: "2"
                },
                {
                    text: "3 (12pt)",
                    value: "3"
                },
                {
                    text: "4 (14pt)",
                    value: "4"
                },
                {
                    text: "5 (18pt)",
                    value: "5"
                },
                {
                    text: "6 (24pt)",
                    value: "6"
                },
                {
                    text: "7 (36pt)",
                    value: "7"
                }
            ],
            /**		
            * Given number for rows render the insert table pop. 
            * @default 	""
            * @type {number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the 'tableRows' value specified.
            * $("#rteSample").ejRTE({tableRows: 70 });
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            tableRows: 7,
            /**		
            * Given number for columns render the insert table pop. 
            * @default 	""
            * @type {number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the 'tableColumns' value specified.
            * $("#rteSample").ejRTE({tableColumns: 70 });
           * &lt;/script&gt; 
            * @memberof ejRTE
            * @instance
            */
            tableColumns: 9,
            /**		
            * Given number for rows render the color palete pop up.
            * @default 	""
            * @type {number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the 'colorPaletteRows' value specified.
            * $("#rteSample").ejRTE({colorPaletteRows: 70 });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            colorPaletteRows: 6,
            /**		
            * Given number for columns render the color palete pop up. 
            * @default 	""
            * @type {number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the 'colorPaletteColumns' value specified.
            * $("#rteSample").ejRTE({colorPaletteColumns: 70 });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            colorPaletteColumns: 6,
            /**		
            * Shows CustomTable in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showCustomTable value specified.
            * $("#rteSample").ejRTE({showCustomTable: false });
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showCustomTable: true,
            /**		
            * Given string value to display in the editable area. 
            * @default 	""
            * @type {string}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the 'value' value specified.
            * $("#rteSample").ejRTE({value: "The Rich Text Editor (RTE) control is an easy to render in client side. Customer easy to edit the contents, insert table, images and get the HTML content for the displayed content." });
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            value: null,
            /**		
            * Undo operation provide the number of step limit. 
            * @default 	""
            * @type {number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the 'vaundoStackLimitlue' value specified.
            * $("#rteSample").ejRTE({undoStackLimit: 70 });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            undoStackLimit: 50,
            /**		
            * Shows enableResize in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the enableResize value specified.
            * $("#rteSample").ejRTE({enableResize: false });
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            enableResize: true,
            /**		
            *  enablePersistence the values in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the enablePersistence value specified.
            * $("#rteSample").ejRTE({enablePersistence: false });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            enablePersistence: false,
            /**		
            * shows enableRTL in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the enableRTL value specified.
            * $("#rteSample").ejRTE({enableRTL: true });
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            enableRTL: false,
            //events
            /**     
            * Fires when change successfully.
            * @event
            * @name ejRTE#change 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the RTE model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
    * $("#rteSample").ejRTE();
            * //change event for RTE
            * $("#rteSample").ejRTE({ 
            *   	change: function(args) {}
            * });      
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            change: null,
            /**     
            * Fires when execute successfully.
            * @event
            * @name ejRTE#execute 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the RTE model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
    * $("#rteSample").ejRTE();
            * //execute event for RTE
            * $("#rteSample").ejRTE({ 
            *   	execute: function(args) {}
            * });   
            * &lt;/script&gt;   
            * @memberof ejRTE
            * @instance
            */
            execute: null,
            /**     
            * Fires when keydown successfully.
            * @event
            * @name ejRTE#keydown 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the RTE model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
    * $("#rteSample").ejRTE();
            * //keydown event for RTE
            * $("#rteSample").ejRTE({ 
            *   	keydown: function(args) {}
            * });  
            * &lt;/script&gt;    
            * @memberof ejRTE
            * @instance
            */
            keydown: null,
            /**     
            * Fires when keyup successfully.
            * @event
            * @name ejRTE#keyup 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the RTE model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
    * $("#rteSample").ejRTE();
            * //keyup event for RTE
            * $("#rteSample").ejRTE({ 
            *   	keyup: function(args) {}
            * });  
            * &lt;/script&gt;    
            * @memberof ejRTE
            * @instance
            */
            keyup: null,
            create: null,
            destroy: null
        },
        /**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            iframeAttribute:"string",
            cssClass: "string",
            name:"string",
            enabled: "boolean",
            enablePersistence: "boolean",
            toolsList: "array",
            colorCode: "array",
            format: "data",
            fontName: "data",
            fontSize: "data",
            tools: {
                formatStyle: "array",
                font: "array",
                style: "array",
                scripts: "array",
                alignment: "array",
                lists: "array",
                indenting: "array",
                copyPaste: "array",
                doAction: "array",
                clear: "array",
                links: "array",
                images: "array",
                tables: "array",
                casing: "array",
                customTool: "array"
            }
        },

        observables: ["value"],
        value:ej.util.valueFunction("value"),
        /**
        * To configure the properties at runtime using SetModel		
        * @private
        */
        _setModel: function (options) {
            if (!this.model.enabled && ej.isNullOrUndefined(options["enabled"])) return false;
            var option;
            for (option in options) {
                switch (option) {
                    case "allowEditing": this._enableEdit(options[option]); break;
                    case "showToolbar": {
                        options[option] ? ej.isNullOrUndefined(this._rteToolbar) ? this._renderToolBar() : this._rteToolbar.show() : this._rteToolbar.hide();
                        this._setIframeHeight();
                        break;
                    }
                    case "showFooter": {
                        this.model.showFooter = options[option];
                        options[option] ? ej.isNullOrUndefined(this._rteFooter) ? this._renderFooter() : this._rteFooter.show() : this._rteFooter.hide();
                        this._setIframeHeight();
                        break;
                    }
                    case "enabled": this._disabled(!options[option]); break;
                    case "height": this._rteWapper.height(options[option]); this._setIframeHeight(); break;
                    case "width": this._rteWapper.width(options[option]); break;
                    case "cssClass": this._changeSkin(options[option]); break;
                    case "showHtmlSource": this._footerElement("div.e-rte-source", options[option]); break;
                    case "showHtmlTagInfo": this._footerElement("div.e-rte-htmltaginfo", options[option]); break;
                    case "showWordCount": this._footerElement("div.e-rte-wordcount", options[option]); break;
                    case "showClearAll": this._footerElement("div.clearAll", options[option]); break;
                    case "showClearFormat": this._footerElement("div.clearFormat", options[option]); break;
                    case "enableResize": this._footerElement("div.e-rte-resize", options[option]); break;
                    case "fontName": this._fontStyleDDL.ejDropDownList({ dataSource: options[option] }); break;
                    case "fontSize": this._fontSizeDDL.ejDropDownList({ dataSource: options[option] }); break;
                    case "format": this._formatDDL.ejDropDownList({ dataSource: options[option] }); break;
                    case "value": this._getDocument().body.innerHTML = ej.util.getVal(options[option]); break;
                    case "showDimensions":
                        if (options[option]) {
                            this._rteWapper.find("#" + this._rteId + "_imgdimensions").show();
                            this._rteWapper.find("#" + this._rteId + "_videodimensions").show();
                        }
                        else {
                            this._rteWapper.find("#" + this._rteId + "_imgdimensions").hide();
                            this._rteWapper.find("#" + this._rteId + "_videodimensions").hide();
                        }
                        break;
                    case "locale":
                        this.model.locale = options[option];
                        var model = this.model;
                        this.element.ejRTE("destroy").ejRTE(model);
                        break;
                    case "tableRows": {
                        this.model.tableRows = options[option];
                        var tblDiv = this._createTable.find("div.e-rte-table").html("");
                        this._drawTable(tblDiv);
                        break;
                    }
					case "iframeAttribute":{
						this._updateIframeSkin(options[option]);
						break;
					}
                    case "tableColumns": {
                        this.model.tableColumns = options[option];
                        var tblDiv = this._createTable.find("div.e-rte-table").html("");
                        this._drawTable(tblDiv);
                        break;
                    }
                    case "showCustomTable": {
                        var custLink = this._createTable.find("div.customtable-group");
                        options[option] ? ej.isNullOrUndefined(this._customTableDialog) ? this._createCustomTable() : custLink.show() : custLink.hide();
                        break;
                    }
                    case "colorPaletteRows": {
                        this.model.colorPaletteRows = options[option];
                        this._updateColorPalette();
                        break;
                    }
                    case "colorPaletteColumns": {
                        this.model.colorPaletteColumns = options[option];
                        this._updateColorPalette();
                        break;
                    }
                    case "colorCode": {
                        this.model.colorCode = options[option];
                        this._updateColorPalette();
                        break;
                    }
                    case "enableRTL": this._enableRTL(options[option]); break;
                }
            }
        },

        // constructor function
        _init: function () {
            if (!ej.isNullOrUndefined(this.element) && this.element[0].type == "textarea") {
                this._initialize();
                this._render();
                this.model.allowEditing && this._wireEvents();
                this._updateIframeSkin(this.model.iframeAttribute);
            }
        },

        _destroy: function () {
            this.element.insertBefore(this._rteWapper);
            !ej.isNullOrUndefined(this._formatDDL) && this._formatDDL.ejDropDownList("destroy");
            !ej.isNullOrUndefined(this._fontStyleDDL) && this._fontStyleDDL.ejDropDownList("destroy");
            !ej.isNullOrUndefined(this._fontSizeDDL) && this._fontSizeDDL.ejDropDownList("destroy");
            !ej.isNullOrUndefined(this._fontColorSplit) && this._fontColorSplit.ejSplitButton("destroy");
            !ej.isNullOrUndefined(this._bgColorSplit) &&  this._bgColorSplit.ejSplitButton("destroy");
            if (!ej.isNullOrUndefined(this._customTableDialog)) {
                !ej.isNullOrUndefined(this._customTableDialog.find("#" + this._rteId + "_ddlAlignment")) && this._customTableDialog.find("#" + this._rteId + "_ddlAlignment").ejDropDownList("destroy");
                !ej.isNullOrUndefined(this._customTableDialog.find("#" + this._rteId + "_txtBorder")) && this._customTableDialog.find("#" + this._rteId + "_txtBorder").ejDropDownList("destroy");
            }
            this._rteWapper.remove();
            this.element.show();
            this._createTable = null;
        },

        _initialize: function () {
            this._toolsList = this.model.toolsList;
            this._rteId = this.element[0].id;
            this._backupArray = new Array();
            this._undoRedoPosition = 0;
            this._fontColor = "";
            this._bgColor = "";
            this._imgWidth = 0;
            this._imgHeight = 0;
            this._videoWidth = 0;
            this._videoHeight = 0;
            this._keypressFlag = true;
            this._styleItems = ej.isNullOrUndefined(this.model.tools["style"]) ? [] : this.model.tools["style"];
            this._alignItems = ej.isNullOrUndefined(this.model.tools["alignment"]) ? [] : this.model.tools["alignment"];
            this._listItems = ej.isNullOrUndefined(this.model.tools["lists"]) ? [] : this.model.tools["lists"];
            this._scriptsItems = ej.isNullOrUndefined(this.model.tools["scripts"]) ? [] : this.model.tools["scripts"];
        },

        _render: function () {
            this._renderWrapper();
            this._checkNameAttr();
            if (this.model.showToolbar) {
                this._renderToolBar();
            }
            this._renderEditArea();
            this.model.showFooter && this._renderFooter();
            this._setIframeHeight();
            this._renderAlertDialog();
            this._focus();
        },
        _checkNameAttr: function () {
            if (!this.model.name)
                this.element.attr({ "name": this.element[0].id });
            else
                this.element.attr({ "name": this.model.name });
        },
        _enableEdit: function (args) {
            if (args) {
                this._wireEvents();
                this.model.showToolbar && this._toolBarItems.ejToolbar("option", "click", this._toolBarClick);
                this._rteIframe.contents().find("body").attr("contenteditable", true);
                //this._getDocument().designMode = "On"
            }
            else {
                this._unwireEvents();
                this.model.showToolbar && this._toolBarItems.ejToolbar("option", "click", null);
                this._rteIframe.contents().find("body").attr("contenteditable", false);
                //this._getDocument().designMode = "off"
            }
        },
        _changeSkin: function (value) {
            this._rteWapper.removeClass(this.model.cssClass).addClass(value);
            this._subControlsSetModel("cssClass", value);
        },
		
        _updateIframeSkin: function (value) {
            var target = this._rteIframe.contents().find("body");
		    this.model.enableRTL===true ? (target.attr("style", value),this._enableRTL(this.model.enableRTL)) : target.attr("style", value);
        },

        // RTE wrapper creating.
        _renderWrapper: function () {
            this._rteWapper = ej.buildTag("div.e-rte e-rte-wrapper " + this.model.cssClass + "#" + this._rteId + "_wrapper", "", {}, { role: "presentation" }).insertBefore(this.element);
            this._rteWapper.height(this.model.height).width(this.model.width);
            this._rteWapper.append(this.element.hide());
        },
        //Toolbar creating
        _renderToolBar: function () {
            this._rteToolbar = ej.buildTag("div.e-rte-toolbar #" + this._rteId + "_tools").insertAfter(this.element);
            this._crateToolbarTemplate();
            var model = {};
            model.click = this.model.allowEditing ? this._toolBarClick : null;
            model.cssClass = this.model.cssClass;
            model.enableRTL = this.model.enableRTL;
            this._toolBarItems.ejToolbar(model);

            //Init the toolbar items
            this._initToolBarItems();

        },

        _crateToolbarTemplate: function () {
            this._toolBarItems = ej.buildTag("div#" + this._rteId + "_toolbar").appendTo(this._rteToolbar).height(30);
            for (var items in this._toolsList) {
                items = this._toolsList[items];
                if (!ej.isNullOrUndefined(this.model.tools[items])) {
                    if (items == "customTool")
                        !ej.isNullOrUndefined(this.model.tools[items]) && this._customTools(this.model.tools[items]);
                    else
                        this.model.tools[items].length > 0 && this._createToolsItems(this.model.tools[items], items);
                }
            }
        },

        _createToolsItems: function (items, itemName) {
            if (itemName == "font" && !this.model.showFontOption)
                return false;
            var ulTag = ej.buildTag("ul#" + (this._rteId + itemName)), liTag;
            (itemName == "font") && ulTag.addClass("e-rte-fontgroup");
            (itemName == "formatStyle") && ulTag.addClass("e-rte-format");
            for (var i = 0; i < items.length; i++) {
                liTag = $("<li id='" + (this._rteId + items[i].replace(/ /g, '')) + "' title='" + this._getLocalizedLabels(items[i].replace(/ /g, '')) + "' ><div class='e-rte-toolbar-icon " + items[i] + "'></div></li>");
                liTag.appendTo(ulTag);
            }
            ulTag.appendTo(this._toolBarItems);
        },

        _customTools: function (toolbarItems) {
            for (var item in toolbarItems) {
            var ulTag = ej.buildTag("ul"), liTag;
			    liTag = $("<li id='" + toolbarItems[item].name + "' title='" + toolbarItems[item].tooltip + "' ><div class='" + (ej.isNullOrUndefined(toolbarItems[item].css) ? "" : toolbarItems[item].css) + "'>"+toolbarItems[item].name+"</div></li>");
                var fn = toolbarItems[item].action;
                if (typeof fn === "string") {
                    fn = ej.util.getObject(fn, window);
                }
                !ej.isNullOrUndefined(toolbarItems[item].action) && this._on(liTag, "click", fn);
                $(toolbarItems[item].template).appendTo(liTag.find("div"));
            liTag.appendTo(ulTag);
            ulTag.appendTo(this._toolBarItems);
            }
        },

        _initToolBarItems: function () {
            this._toolBarObj = this._toolBarItems.ejToolbar("instance");
            this._rteToolbar.find("#" + this._rteId + "format").length > 0 && this._renderFormat();
            this._rteToolbar.find("#" + this._rteId + "createLink").length > 0 && this._renderLinkDialog();
            this._rteToolbar.find("#" + this._rteId + "video").length > 0 && this._renderVideoDialog();
            this._rteToolbar.find("#" + this._rteId + "image").length > 0 && this._renderImageDialog();
            this._rteToolbar.find("#" + this._rteId + "createTable").length > 0 && this._renderTableDialog();
            this._rteToolbar.find("#" + this._rteId + "fontName").length > 0 && this._renderFontStyle();
            this._rteToolbar.find("#" + this._rteId + "fontSize").length > 0 && this._renderFontSize();
            this._rteToolbar.find("#" + this._rteId + "fontColor").length > 0 && this._renderFontColor();
            this._rteToolbar.find("#" + this._rteId + "backgroundColor").length > 0 && this._renderBGColor();
            !this.model.showClearAll && this._rteToolbar.find("#" + this._rteId + "clearAll").hide();
            !this.model.showClearAll && this._rteToolbar.find("#" + this._rteId + "clearAll").hide();
            this._toolBarObj.disableItemByID(this._rteId + "undo");
            this._toolBarObj.disableItemByID(this._rteId + "redo");
            this._toolBarObj.selectItemByID(this._rteId + "justifyLeft");
            //Hide the editable table icons
            this._toolBarItems.find("#" + this._rteId + "addColumnLeft, #" + this._rteId + "addColumnRight, #" + this._rteId + "addRowAbove, #"
             + this._rteId + "addRowBelow, #" + this._rteId + "deleteRow, #" + this._rteId + "deleteColumn, #" + this._rteId + "deleteTable").hide();
        },
        //Editable Area
        _renderEditArea: function () {
            var _rteEditer = ej.buildTag("div.editarea #" + this._rteId + "_editer").appendTo(this._rteWapper);
            this._rteIframe = ej.buildTag("iframe.content-iframe #" + this._rteId + "_Iframe").appendTo(_rteEditer);
            this._setIFrames();
        },

        //Sets the editor and source editors
        _setIFrames: function () {
            //var RTE = $find(this._rteId);
            this.value(this.value() == null ? $.trim(this.element[0].value) : this.value());
            this._iframeId = this._rteId + "_Iframe";
            var _htmlText = ("<!DOCTYPE html><html><head><meta charset='utf-8' /><style>html,body{padding:0;margin:-1px 5px 0;height:100%;min-height:100%; padding-top: 1px;font-size: 13px;font-family:Segoe UI;word-wrap: break-word;-webkit-nbsp-mode: space;-webkit-line-break: after-white-space;}"
                + "h1{font-size:2em;margin:.67em 0}h2{font-size:1.5em}h3{font-size:1.16em}h4{font-size:1em}h5{font-size:.83em}h6{font-size:.7em}"
                + "p{margin:0 0 1em;padding:0 .2em} ul,ol{padding-left:2.5em} a{color:#00a} blockquote{margin-right: 0}"
                + ".e-rte-table{border-spacing:0;margin: 0.2em 0 0.5em;border: 1px solid;}.e-rte-table caption{border: 1px solid;border-bottom:none}"
                + ".e-rte-table,.e-rte-table td{outline:0;border-collapse: collapse; min-height:1px;vertical-align: top;text-indent: 5px;} .e-rte-table p{margin:0;padding:0;}"
                + "</style></head><body autocorrect='off' contenteditable=" + (this.model.allowEditing ? 'true' : 'false') + ">" + $.trim(this.value()) + "</body></html>");
            this._rteIframe.css({ "width": "100%" });
            //this.model.allowEditing && (this._getDocument().designMode = "On");
            this._setContent(_htmlText);
            if (!ej.isNullOrUndefined(this.model.undoStackLimit) || this.model.undoStackLimit !== "" || this.model.undoStackLimit > 0)
                this._backupArray[0] = this.getHtml();
        },

        //Set the Iframe height 
        _setIframeHeight: function () {
            var _height = (!ej.isNullOrUndefined(this._rteToolbar) && this._rteToolbar.is(':visible') ? this._rteToolbar.outerHeight() : 6) + (!ej.isNullOrUndefined(this._rteFooter) && this._rteFooter.is(':visible') ? this._rteFooter.outerHeight() : 0);
            this._rteIframe.height(_height == 0 ? this.model.height : (this._rteWapper.outerHeight() - _height) - 1);
        },

        // Footer Div render 
        _renderFooter: function () {
            var options = this.model;
            this._rteFooter = ej.buildTag("div.e-rte-footer #" + this._rteId + "_footer").appendTo(this._rteWapper);
            var _leftPan = ej.buildTag("div.e-rte-footer-left");
            var _htmlSource = ej.buildTag("div.e-rte-icons e-rte-footeritems e-rte-footericon e-rte-source", "", {}, { title: this._getLocalizedLabels("viewHtml") }).appendTo(_leftPan);
            this._htmlInfo = ej.buildTag("div.e-rte-htmltaginfo e-rte-footeritems").appendTo(_leftPan);
            _leftPan.appendTo(this._rteFooter);
            var _rightPan = ej.buildTag("div.e-rte-footer-right");
            this._wordCount = ej.buildTag("div.e-rte-wordcount e-rte-footeritems").appendTo(_rightPan);
            var _clearFormat = ej.buildTag("div.e-rte-icons clearFormat e-rte-footericon e-rte-footeritems", "", {}, { title: this._getLocalizedLabels("clearFormat") }).appendTo(_rightPan);
            var _clearAll = ej.buildTag("div.e-rte-icons clearAll e-rte-footericon e-rte-footeritems", "", {}, { title: this._getLocalizedLabels("clearAll") }).appendTo(_rightPan);
            var _resize = ej.buildTag("div.e-icons e-rte-resize e-rte-footeritems").appendTo(_rightPan);
            _rightPan.appendTo(this._rteFooter);
            this._on(_htmlSource, "click", this._sourceCodeManager);
            this._on(_clearFormat, "click", this._onClearFormat);
            this._on(_clearAll, "click", this._clearAllManager);
            !this.model.showHtmlSource && _htmlSource.hide().removeClass("e-rte-footeritems");
            !this.model.showHtmlTagInfo && this._htmlInfo.hide().removeClass("e-rte-footeritems");
            !this.model.showWordCount && this._wordCount.hide().removeClass("e-rte-footeritems");
            !this.model.showClearAll && _clearAll.hide().removeClass("e-rte-footeritems");
            !this.model.showClearFormat && _clearFormat.hide().removeClass("e-rte-footeritems");
            if (options.enableResize)
                this._enableResize();
            else
                _resize.hide().removeClass("e-rte-footeritems");
            this._updateCharCount();
        },
        //Enable Footer element
        _footerElement: function (selector, visible) {
            var ele = this._rteFooter.find(selector);
            visible ? ele.show().addClass("e-rte-footeritems") : ele.hide().addClass("e-rte-footeritems");
        },
        //Update Color Palettes
        _updateColorPalette: function () {
            var _fontColor = $("ul#" + this._rteId + "_colorTable");
            var _bgColor = $("ul#" + this._rteId + "_colorBGTable");
            _fontColor.find("div.e-rte-table").remove();
            _fontColor.find("li").append(this._colorTable());
            //Bg Color table Update
            _bgColor.find("div.e-rte-table").remove();
            _bgColor.find("li").append(this._colorTable());
        },

        //Enable RTE
        _enableRTL: function (value) {
            if (value) {
                //this._rteWapper.addClass("e-rtl");
                this._rteIframe.contents().find("body").css("direction", "rtl");
            }
            else {
                this._rteIframe.contents().find("body").css("direction", "");
            }
            this._subControlsSetModel("enableRTL", value);
        },

        _subControlsSetModel: function (prop, value) {
            !ej.isNullOrUndefined(this._toolBarItems) && this._toolBarItems.ejToolbar({ prop: value });
            !ej.isNullOrUndefined(this._linkDialog) && this._linkDialog.ejDialog({ prop: value });
            !ej.isNullOrUndefined(this._imgDialog) && this._imgDialog.ejDialog({ prop: value });
            !ej.isNullOrUndefined(this._videoDialog) && this._videoDialog.ejDialog({ prop: value });
            !ej.isNullOrUndefined(this._createTable) && this._createTable.ejDialog({ prop: value });
            !ej.isNullOrUndefined(this._sourceDialog) && this._sourceDialog.ejDialog({ prop: value });
            if (!ej.isNullOrUndefined(this._customTableDialog)) {
                !ej.isNullOrUndefined(this._customTableDialog) && this._customTableDialog.ejDialog({ prop: value });
                this._customTableDialog.find(".numerictextbox").ejNumericTextbox({ prop: value });
                this._customTableDialog.find("#ddlAlignment").ejDropDownList({ prop: value });
                !ej.isNullOrUndefined(this._customTableDialog) && this._customTableDialog.find(".e-rte-btn").ejButton({ prop: value });
            }
            !ej.isNullOrUndefined(this._videoDialog) && this._videoDialog.find(".e-rte-btn").ejButton({ prop: value });
            !ej.isNullOrUndefined(this._imgDialog) && this._imgDialog.find(".e-rte-btn").ejButton({ prop: value });
            !ej.isNullOrUndefined(this._linkDialog) && this._linkDialog.find(".e-rte-btn").ejButton({ prop: value });
            !ej.isNullOrUndefined(this._fontStyleDDL) && this._fontStyleDDL.ejDropDownList({ prop: value });
            !ej.isNullOrUndefined(this._fontSizeDDL) && this._fontSizeDDL.ejDropDownList({ prop: value });
            !ej.isNullOrUndefined(this._formatDDL) && this._formatDDL.ejDropDownList({ prop: value });
            !ej.isNullOrUndefined(this._fontColorSplit) && this._fontColorSplit.ejSplitButton({ prop: value });
            !ej.isNullOrUndefined(this._bgColorSplit) && this._bgColorSplit.ejSplitButton({ prop: value });
        },
        _createHtmlSource: function () {
            if (ej.isNullOrUndefined(this._htmlSource)) {
                this._htmlSource = ej.buildTag("div.e-rte-icons e-rte-footeritems e-rte-source").appendTo(this._rteFooter);
                this._on(this._htmlSource, "click", this._sourceCodeManager);
                this._renderSourceDialog()
            }
            else
                this._htmlSource.show();
        },
        _createHtmlTagsInfo: function () {
            //var _htmlInfo = this._rteFooter.find("div.e-rte-htmltaginfo");
            if (ej.isNullOrUndefined(this._htmlInfo)) {
                this._htmlInfo = ej.buildTag("div.e-rte-htmltaginfo e-rte-footeritems").appendTo(this._rteFooter);
            }
            else
                this._htmlInfo.show();
        },
        _createWordCount: function () {
            if (ej.isNullOrUndefined(this._wordCount)) {
                this._wordCount = ej.buildTag("div.e-rte-wordcount e-rte-footeritems").appendTo(this._rteFooter);
            }
            else
                this._wordCount.show();
        },
        //Add resize icon
        _enableResize: function () {
            if (this.model.enableResize && this.model.enabled) {
                this._rteWapper.addClass("e-resizable");
                this._resizeRTE();
            }
        },
        // Resizeable 
        _resizeRTE: function () {
            var proxy = this;
            this._rteWapper.find("div.e-rte-resize").ejResizable(
                {
                    minHeight: parseInt(proxy.model.minHeight),
                    minWidth: parseInt(proxy.model.minWidth),
                    maxHeight: parseInt(proxy.model.maxHeight),
                    maxWidth: parseInt(proxy.model.maxWidth),
                    resizeStart: function (event) {
                        proxy._trigger("resizeStart", { event: event });
                    },
                    resize: function (event) {
                        var reElement = $(event.element).parents("div.e-rte-wrapper");
                        proxy._rteWapper.height($(reElement).height());
                        proxy._rteWapper.width($(reElement).width());
                        proxy._setIframeHeight();
                        proxy._trigger("resize", { event: event });
                    },
                    resizeStop: function (event) {
                        proxy._trigger("resizeStop", { event: event });
                    },
                    helper: function (event) {
                        var reElement = $(event.element).parents("div.e-rte-wrapper");
                        proxy._rteWapper.height($(reElement).height());
                        proxy._rteWapper.width($(reElement).width());
                        proxy._setIframeHeight();
                        return $(proxy._rteWapper);
                    }
                });
        },

        _getDialogModel: function () {
            return dialogModel = {
                enableResize: false,
                showOnInit: false,
                enableModal: true,
                cssClass: this.model.cssClass,
                content: "#" + this._rteId + "_wrapper",
                enableRTL: this.model.enableRTL
            };
        },

        //Render Link Dialog
        _renderLinkDialog: function () {
            var createLink = this._linkDialog = ej.buildTag("div#" + this._rteId + "_link");//.appendTo(this._rteWapper);
            var content = $("<div class='e-rte-label'><label for=" + this._rteId + "_link_url>" + this._getLocalizedLabels("linkWebUrl") + "</label></div><div class='e-rte-field'><input type='text' class='e-inputtext' id='" + this._rteId + "_link_url'/></div><div class='e-rte-label'>" +
                           "<label for="+ this._rteId + "_link_text>" + this._getLocalizedLabels("linkText") + "</label></div><div class='e-rte-field'><input type='text' class='e-inputtext' id='" + this._rteId + "_link_text'></div><div class='e-rte-label'>" +
                           "<label for=" + this._rteId + "_link_title>" + this._getLocalizedLabels("linkToolTip") + " </label></div><div class='e-rte-field'><input type='text' class='e-inputtext' id='" + this._rteId + "_link_title'></div><div class='e-rte-label'></div>" +
                           "<div class='e-rte-field'><input type='checkbox' id='" + this._rteId + "_link_target'><label for='" + this._rteId + "_link_target' style='padding: 5px;'>" + this._getLocalizedLabels("linkOpenInNewWindow") + "</label></div>" +
                           "<div class='e-rte-button e-fieldseparate'><button class='e-rte-btn' id='link_insert'>" + this._getLocalizedLabels("dialogInsert") + "</button><button class='e-rte-btn' id='link_cancel'>" + this._getLocalizedLabels("dialogCancel") + "</button></div>");
            content.appendTo(createLink);
            createLink.appendTo(this._rteWapper);
            var model = this._getDialogModel();
            model.title = this._getLocalizedLabels("createLink");
            createLink.ejDialog(model);
            this._chkTarget = createLink.find("#" + this._rteId + "_link_target");
            this._chkTarget.ejCheckBox({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            createLink.find(".e-rte-btn").ejButton({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._on(createLink.find(".e-rte-btn"), "click", this._linkBtnClick)
            this._on(this._linkDialog.find("#" + this._rteId + "_link_url"), "keypress", this._urlValidation);
        },

        //Render Link Dialog
        _renderImageDialog: function () {
            this._imgDialog = ej.buildTag("div#" + this._rteId + "_Image");
            var content = $("<div class='e-rte-label'><label for=" + this._rteId + "_img_url>" + this._getLocalizedLabels("imageWebUrl") + " </label></div><div class='e-rte-field'><input type='text' class='e-inputtext' id='" + this._rteId + "_img_url'></div><div class='e-rte-label'>" +
                 "<label for=" + this._rteId + "_img_text>" + this._getLocalizedLabels("imageAltText") + " </label></div><div class='e-rte-field'><input type='text' class='e-inputtext' id='" + this._rteId + "_img_text'></div>" +
                 "<div id='" + this._rteId + "_imgdimensions'><div class='e-rte-label'><label>" + this._getLocalizedLabels("dimensions") + " </label></div><div class='e-rte-field'><input type='text' title='" + this._getLocalizedLabels("dimensions") + "' class='e-inputtext e-dimensions' maxlength='3' id='" + this._rteId + "_imgX'><label style='padding: 5px;'>X</label><input type='text' title='" + this._getLocalizedLabels("dimensions") + "' style='margin-right: 5px;' class='e-inputtext e-dimensions' maxlength='3' id='" + this._rteId + "_imgY'></div>" +
                 "<input type='checkbox' id='" + this._rteId + "_img_consrn'><label for='" + this._rteId + "_img_consrn'  style='padding: 5px;'>" + this._getLocalizedLabels("constrainProportions") + "</label></div>" +
                 "<div class='e-rte-button e-fieldseparate'><button class='e-rte-btn' id='img_insert'>" + this._getLocalizedLabels("dialogInsert") + "</button><button class='e-rte-btn' id='img_cancel'>" + this._getLocalizedLabels("dialogCancel") + "</button></div>");
            content.appendTo(this._imgDialog);
            this._imgDialog.appendTo(this._rteWapper);
            !this.model.showDimensions && this._rteWapper.find("#" + this._rteId + "_imgdimensions").hide();
            var model = this._getDialogModel();
            model.width = "470px";
            model.title = this._getLocalizedLabels("image");
            this._imgDialog.ejDialog(model);
            this._chkImgDimensions = this._imgDialog.find("#" + this._rteId + "_img_consrn");
            this._chkImgDimensions.ejCheckBox({ check: true, enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._imgDialog.find(".e-rte-btn").ejButton({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._on(this._imgDialog.find(".e-rte-btn"), "click", this._imageBtnClick)
            this._on(this._imgDialog.find("#" + this._rteId + "_img_url"), "keypress", this._urlValidation);
            this._on(this._imgDialog.find("input.e-dimensions"), "change", this._recalcImgSize);
        },

        //Render the Table selection rows and columans popup
        _renderVideoDialog: function () {
            this._videoDialog = ej.buildTag("div#" + this._rteId + "_video");
            var content = $("<div><label>" + this._getLocalizedLabels("embedVideo") + "</label></div><textarea class='e-rte-video e-inputtext'  aria-label=" + this._getLocalizedLabels("embedVideo") + "></textarea>" +
               "<div id='" + this._rteId + "_videodimensions' style='margin-top:7px'><div class='e-rte-label'><label>" + this._getLocalizedLabels("dimensions") + " </label></div><div><input type='text' title='" + this._getLocalizedLabels("dimensions") + "' class='e-inputtext e-dimensions' maxlength='3' id='" + this._rteId + "_videoX'><label style='padding: 5px;'>X</label><input type='text' title='" + this._getLocalizedLabels("dimensions") + "' style='margin-right: 5px;' class='e-inputtext e-dimensions' maxlength='3' id='" + this._rteId + "_videoY'>" +
               "<input type='checkbox' id='" + this._rteId + "_video_consrn'><label for='" + this._rteId + "_video_consrn'  style='padding: 5px;'>" + this._getLocalizedLabels("constrainProportions") + "</label></div></div>" +
                "<div class='e-rte-button e-fieldseparate'><button id='video_insert' class='e-rte-btn'>" + this._getLocalizedLabels("dialogInsert") + "</button><button id='video_cancel' class='e-rte-btn'>" + this._getLocalizedLabels("dialogCancel") + "</button></div>");
            content.appendTo(this._videoDialog);
            this._videoDialog.appendTo(this._rteWapper);
            !this.model.showDimensions && this._rteWapper.find("#" + this._rteId + "_videodimensions").hide();
            var model = this._getDialogModel();
            model.width = "460px";
            model.title = this._getLocalizedLabels("video");
            this._videoDialog.ejDialog(model);
            this._chkvideoDimensions = this._videoDialog.find("#" + this._rteId + "_video_consrn");
            this._chkvideoDimensions.ejCheckBox({ checked: true, enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._videoDialog.find(".e-rte-btn").ejButton({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._on(this._videoDialog.find(".e-rte-btn"), "click", this._insertVideo);
            this._on(this._videoDialog.find("input.e-dimensions"), "change", this._recalcVideoSize);
        },

        //Render the Table selection rows and columans popup
        _renderTableDialog: function () {
            this._createTable = ej.buildTag("div.e-rte-table-picker#" + this._rteId + "_table");
            var tableCell, rowDiv, colDiv, tableDiv;
            this._tblheaderDiv = ej.buildTag("div.e-rte-tableheader");
            this._tblheaderDiv.html(this._getLocalizedLabels("createTable"));
            this._tblheaderDiv.appendTo(this._createTable);
            var tableDiv = ej.buildTag("div.e-rte-table");
            this._drawTable(tableDiv);
            tableDiv.appendTo(this._createTable);
            if (this.model.showCustomTable) {
                this._createCustomTable();
            }

            this._createTable.appendTo(this._rteWapper);
            var model = this._getDialogModel();
            model.modal = false;
            model.showHeader = false;
            model.width = "auto";
            this._createTable.ejDialog(model);
        },

        _createCustomTable: function () {
            var customTable = $("<div class='customtable-group'><span class='e-rte-toolbar-icon customtable-image'></span><a class='customtable-link' href='#' role='button' title='" + this._getLocalizedLabels("customTable") + "'>" + this._getLocalizedLabels("customTable") + "</a></div>");
            this._on(customTable, "click", this._openCustomTable);
            customTable.appendTo(this._createTable);
            //Create custom table Dialog.
            this._customTableDialog = ej.buildTag("div#" + this._rteId + "_customTable");
            var content = $("<div class='e-fieldgroup'><div class='e-rte-tablefields'><label for=" + this._rteId + "_txtColumns>" + this._getLocalizedLabels("tableColumns") + "</label></div><div class='e-rte-tablefields'><input type='text' class='numerictextbox' id='" + this._rteId + "_txtColumns'></div><div class='e-rte-tablefields'>" +
                 "<label for=" + this._rteId + "_txtRows>" + this._getLocalizedLabels("tableRows") + "</label></div><div class='e-rte-tablefields'><input type='text' class='numerictextbox' id='" + this._rteId + "_txtRows'></div><div class='e-rte-tablefields'>" +
                 "<label for=" + this._rteId + "_txtWidth>" + this._getLocalizedLabels("tableWidth") + "</label></div><div class='e-rte-tablefields'><input type='text' class='e-inputtext' id='" + this._rteId + "_txtWidth'></div>" +
                 "<div class='e-rte-tablefields'><label for=" + this._rteId + "_txtHeight>" + this._getLocalizedLabels("tableHeight") + "</label></div><div class='e-rte-tablefields'><input type='text' class='e-inputtext' id='" + this._rteId + "_txtHeight'></div></div>" +
                 "<div class='e-fieldseparate'><div class='e-rte-tablefields'><label for=" + this._rteId + "_txtSpacing>" + this._getLocalizedLabels("tableCellSpacing") + "</label></div><div class='e-rte-tablefields'><input type='text' class='e-inputtext' id='" + this._rteId + "_txtSpacing'></div>" +
                 "<div class='e-rte-tablefields'><label for=" + this._rteId + "_txtPadding>" + this._getLocalizedLabels("tableCellPadding") + "</label></div><div class='e-rte-tablefields'><input type='text' class='e-inputtext' id='" + this._rteId + "_txtPadding'></div>" +
                 "<div class='e-rte-tablefields'><label for=" + this._rteId + "_txtBorder>" + this._getLocalizedLabels("tableBorder") + "</label></div><div class='e-rte-tablefields'><select id='" + this._rteId + "_txtBorder'><option value='solid'>Solid</option><option value='dotted'>Dotted</option><option value='dashed'>Dashed</option><option value='double'>Double</option></select></div>" +
                 "<div class='e-rte-tablefields'><label for=" + this._rteId + "_chkCaption>" + this._getLocalizedLabels("tableCaption") + "</label></div><div class='e-rte-tablefields'><input type='checkbox' id='" + this._rteId + "_chkCaption'></div>" +
                 "<div class='e-rte-tablefields'><label for=" + this._rteId + "_ddlAlignment>" + this._getLocalizedLabels("tableAlignment") + "</label></div><div class='e-rte-tablefields'><select id='" + this._rteId + "_ddlAlignment'><option value='left'>Left</option><option value='right'>Right</option><option value='center'>Center</option></select></div></div>" +
                 "<div class='e-rte-button e-fieldseparate'><button class='e-rte-btn' id='insert'>" + this._getLocalizedLabels("dialogInsert") + "</button><button class='e-rte-btn' id='cancel'>" + this._getLocalizedLabels("dialogCancel") + "</button></div>");
            content.appendTo(this._customTableDialog);
            var model = this._getDialogModel();
            model.width = "480px";
            model.title = this._getLocalizedLabels("customTable");
            this._customTableDialog.ejDialog(model);
            this._customTableDialog.find(".e-rte-btn").ejButton({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._customTableDialog.find(".numerictextbox").ejNumericTextbox({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass, width: "100%", minValue: 1, value: 3 });
            this._customTableDialog.find("#" + this._rteId + "_txtColumns").ejNumericTextbox({ maxValue: 63 });
            this._customTableDialog.find("#" + this._rteId + "_ddlAlignment").ejDropDownList({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass, width: "100%", enabled:false });
            this._customTableDialog.find("#" + this._rteId + "_txtBorder").ejDropDownList({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass, width: "100%", enabled: true });
            this._chkTblCaption = this._customTableDialog.find("#" + this._rteId + "_chkCaption");
            this._chkTblCaption.ejCheckBox({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._on(this._customTableDialog.find(".e-rte-btn"), "click", this._insertCustomTable);
        },

        _drawTable: function (tableDiv) {
            for (var row = 0; row < this.model.tableRows ; row++) {
                rowDiv = ej.buildTag("div.e-rtetablerow");
                for (var col = 0; col < this.model.tableColumns; col++) {
                    tableCell = ej.buildTag("div.e-rte-tablecell e-default");
                    tableCell.appendTo(rowDiv);
                }
                rowDiv.appendTo(tableDiv);
            }
        },

        //Render Source code Dialog.
        _renderSourceDialog: function () {
            this._sourceDialog = ej.buildTag("div#" + this._rteId + "_Source");
            var content = $("<textarea class='e-rte-srctextarea e-inputtext'></textarea><div class='e-rte-button e-fieldseparate'><button id='src_update' class='e-rte-btn'>" + this._getLocalizedLabels("dialogUpdate") + "</button><button id='src_cancel' class='e-rte-btn'>" + this._getLocalizedLabels("dialogCancel") + "</button></div>");
            content.appendTo(this._sourceDialog);
            var model = this._getDialogModel();
            model.title = this._getLocalizedLabels("viewHtml");
            model.width = "auto";
            model.content = null,
            this._sourceDialog.ejDialog(model);
            this._sourceDialog.find(".e-rte-btn").ejButton({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._on(this._sourceDialog.find(".e-rte-btn"), "click", this._srcBtnClick)
        },

        //Render Alert Dialog
        _renderAlertDialog: function () {
            this._alertWindow = ej.buildTag("div");
            var content = $("<p class='e-alerttext'></p><div class='e-rte-button e-fieldseparate'><button class='e-rte-btn e-alert-ok'>" + this._getLocalizedLabels("dialogOk") + "</button><button class='e-rte-btn e-alert-cancel'>" + this._getLocalizedLabels("dialogCancel") + "</button></div>");
            content.appendTo(this._alertWindow);
            var model = this._getDialogModel();
            model.showHeader = false;
            model.width = "auto";
            this._alertWindow.ejDialog(model);
            this._alertWindow.find(".e-rte-btn").ejButton({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._on(this._alertWindow.find(".e-rte-btn"), "click", this._alertBtnClick)
            this._alertWindow.find(".e-alert-cancel").hide();
        },

        _alertBtnClick: function (e) {
            if ($.trim(this._alertWindow.find(".e-alerttext").html()) == this._getLocalizedLabels("deleteAlert") && $(e.target).hasClass("e-alert-ok")) {
                this._getDocument().body.innerHTML = "";
                this._toolBarObj.selectItemByID(this._rteId + "justifyLeft");
                this._setBackupData();
                this._updateCharCount();
                this._onChange();
            }
            this._alertWindow.ejDialog("close");
            this._alertWindow.find(".e-alert-cancel").hide();
        },

        _openAlert: function (alertText) {
            this._alertWindow.find(".e-alerttext").html(alertText);
            this._alertWindow.ejDialog("open");
        },

        //Render Format 
        _renderFormat: function () {
            this._formatDDL = ej.buildTag("input#" + this._rteId + "_format", "", "", { type: "text", title: this._getLocalizedLabels("format") });
            var model = {};
            model.dataSource = this.model.format;
            model.height = "25px";
            model.width = "105px";
            model.enableRTL = this.model.enableRTL;
            model.popupWidth = "175px";
            model.popupHeight = "auto";
            model.selectedItemIndex = 0;
            model.popupHide = this._formatChange;
            model.fields = { text: "text", value: "value", spriteCssClass: "spriteCssClass" };
            this._formatDDL.appendTo(this._rteToolbar.find("#" + this._rteId + "format").html(""));
            this._formatDDL.ejDropDownList(model);
            this._formatPopupStyle();
        },
        //Apply the css class for LI elemet
        _formatPopupStyle: function () {
            var _liList = $("#" + this._rteId + "_format_popup").find("li");
            for (var i = 0; i < _liList.length; i++) {
                $(_liList[i]).addClass(this.model.format[i].spriteCssClass);
            }
        },

        // Render Font style Dropdown list
        _renderFontStyle: function () {
            this._fontStyleDDL = ej.buildTag("input#" + this._rteId + "_fontName", "", "", { type: "text", title: this._getLocalizedLabels("fontName") });
            var model = {};
            model.dataSource = this.model.fontName;
            model.height = "25px";
            model.enableRTL = this.model.enableRTL;
            model.selectedItemIndex = 0;
            model.popupHide = this._fontStyleChange;
            model.fields = { text: "text", value: "value" };
            this._fontStyleDDL.appendTo(this._rteToolbar.find("#" + this._rteId + "fontName").html(""));
            this._fontStyleDDL.ejDropDownList(model);
        },

        // Render Font style Dropdown list
        _renderFontSize: function () {
            this._fontSizeDDL = ej.buildTag("input#" + this._rteId + "_fontSize", "", "", { type: "text", title: this._getLocalizedLabels("fontSize") });
            var model = {};
            model.dataSource = this.model.fontSize;
            model.height = "25px";
            model.width = "100px";
            model.enableRTL = this.model.enableRTL
            model.selectedItemIndex = 1;
            model.popupHide = this._fontSizeChange;
            model.fields = { text: "text", value: "value" };
            this._fontSizeDDL.appendTo(this._rteToolbar.find("#" + this._rteId + "fontSize").html(""));
            this._fontSizeDDL.ejDropDownList(model);
        },

        //Render Split button for font color
        _renderFontColor: function () {
            this._fontColorSplit = ej.buildTag("button#" + this._rteId + "_fontColor", "", {},{ type:"button"});
            var _liTemplte = $("<ul id='" + this._rteId + "_colorTable' class='e-rte-colorpalette'><li></li></ul>");
            _liTemplte.find("li").append(this._colorTable());
            var model = {};
            model.height = "25px";
            model.width = "50px";
            model.contentType = "textandimage";
            model.targetID = this._rteId + "_colorTable";
            model.enableRTL = this.model.enableRTL;
            model.prefixIcon = "e-fontcolor-icon";
            this._fontColorSplit.appendTo(this._rteToolbar.find("#" + this._rteId + "fontColor").html(""));
            _liTemplte.appendTo(this._rteToolbar.find("#" + this._rteId + "fontColor"));
            this._fontColorSplit.ejSplitButton(model);
            this._splitMenu = _liTemplte.ejMenu("instance");
            this._on(_liTemplte.find("div.e-rte-palettetable"), "click", this._colorPaletteClick);
            this._on(this._fontColorSplit, "click", this._fontColorClick);
            this._fontColorSplit.find("span.e-fontcolor-icon").removeClass("e-icon");
            this._fontColorSplit.find("span.e-btntxt").css("background-color", "black");
        },

        //Render Split button for font color
        _renderBGColor: function () {
            this._bgColorSplit = ej.buildTag("button#" + this._rteId + "_backgroundColor", "", {},{type:"button"});
            var _liTemplte = $("<ul id='" + this._rteId + "_colorBGTable' class='e-rte-colorpalette'><li></li></ul>");
            _liTemplte.find("li").append(this._colorTable());
            var model = {};
            model.height = "25px";
            model.width = "50px";
            model.contentType = "textandimage";
            model.targetID = this._rteId + "_colorBGTable";
            model.enableRTL = this.model.enableRTL;
            model.prefixIcon = "e-bgcolor-icon";
            this._bgColorSplit.appendTo(this._rteToolbar.find("#" + this._rteId + "backgroundColor").html(""));
            _liTemplte.appendTo(this._rteToolbar.find("#" + this._rteId + "backgroundColor"));
            this._bgColorSplit.ejSplitButton(model);
            this._bgSplitMenu = _liTemplte.ejMenu("instance");
            this._on(_liTemplte.find("div.e-rte-palettetable"), "click", this._bgColorPaletteClick);
            this._on(this._bgColorSplit, "click", this._bgColorClick);
            this._bgColorSplit.find("span.e-bgcolor-icon").removeClass("e-icon");
            this._bgColorSplit.find("span.e-btntxt").css("background-color", "white");
        },

        _colorTable: function () {
            var tableDiv = ej.buildTag("div.e-rte-table");
            var color = 0, hexCode, rowDiv;
            for (var row = 0; row < this.model.colorPaletteRows ; row++) {
                rowDiv = ej.buildTag("div.e-rtetablerow");
                for (var col = 0; col < this.model.colorPaletteColumns ; col++) {
                    if (color < this.model.colorCode.length) {
                        hexCode = "#" + this.model.colorCode[color];
                        tableCell = ej.buildTag("div.e-rte-palettetable", "", { "background-color": hexCode }, { title: hexCode, "color-code": hexCode });
                        tableCell.appendTo(rowDiv);
                        color++;
                    }
                }
                rowDiv.appendTo(tableDiv);
            }
            return tableDiv;
        },

        _recalcVideoSize: function (e) {
            var txtWidth, txtheight, newWidth, newHeight;
            txtWidth = this._videoDialog.find("#" + this._rteId + "_videoX");
            txtheight = this._videoDialog.find("#" + this._rteId + "_videoY");

            newWidth = txtWidth.val();
            newHeight = txtheight.val();

            if (this._chkvideoDimensions.ejCheckBox("isChecked") && this._videoWidth && this._videoHeight && newWidth && newHeight) {
                if (e.target.id == txtWidth[0].id) {
                    newHeight = Math.round((newWidth / this._videoWidth) * newHeight);
                    txtheight.val(newHeight);
                } else {
                    newWidth = Math.round((newHeight / this._videoHeight) * newWidth);
                    txtWidth.val(newWidth);
                }
            }
            this._videoWidth = newWidth;
            this._videoHeight = newHeight;
        },


        _recalcImgSize: function (e) {
            var txtWidth, txtheight, newWidth, newHeight;
            txtWidth = this._imgDialog.find("#" + this._rteId + "_imgX");
            txtheight = this._imgDialog.find("#" + this._rteId + "_imgY");

            newWidth = txtWidth.val();
            newHeight = txtheight.val();

            if (this._chkImgDimensions.ejCheckBox("isChecked") && this._imgWidth && this._imgHeight && newWidth && newHeight) {
                if (e.target.id == txtWidth[0].id) {
                    newHeight = Math.round((newWidth / this._imgWidth) * newHeight);
                    txtheight.val(newHeight);
                } else {
                    newWidth = Math.round((newHeight / this._imgHeight) * newWidth);
                    txtWidth.val(newWidth);
                }
            }
            this._imgWidth = newWidth;
            this._imgHeight = newHeight;
        },

        _urlValidation: function (e) {
            var _target = $(e.target);
            _target.hasClass("e-error") && _target.removeClass("e-error");
        },

        _linkBtnClick: function (sender) {
            if (sender.target.id === "link_cancel") {
                this._clearLinkFields();
                this._linkDialog.ejDialog("close");
            }
            else if (sender.target.id === "link_insert") {
                this._restoreSelection(this._selectionRange);
                if (this._txtURL.val() != "")
                    this._onInsertLink();
                else {
                    this._onUnlink();
                    this._linkDialog.ejDialog("close");
                }
                this._onChange();
                this._setBackupData();
            }
        },

        _imageBtnClick: function (sender) {
            if (sender.target.id === "img_cancel") {
                this._imgDialog.ejDialog("close");
            }
            else if (sender.target.id === "img_insert") {
                this._onInsertImage();
                this._onChange();
                this._setBackupData();
            }
        },

        //Source Dialog button click event
        _srcBtnClick: function (sender) {
            if (sender.target.id === "src_update") {
                var _editHTML = $.trim(this._sourceDialog.find("textarea.e-rte-srctextarea")[0].value);
                this._getDocument().body.innerHTML = _editHTML;
                this._onChange();
                this._updateCharCount();
            }
            this._sourceDialog.find("textarea.e-rte-srctextarea")[0].value = "";
            this._sourceDialog.ejDialog("close");
        },

        _insertCustomTable: function (sender) {
            if (sender.target.id === "insert") {
                var cols = this._customTableDialog.find("#" + this._rteId + "_txtColumns").ejNumericTextbox("getValue");
                var row = this._customTableDialog.find("#" + this._rteId + "_txtRows").ejNumericTextbox("getValue");
                var height = this._customTableDialog.find("#" + this._rteId + "_txtHeight").val();
                var width = this._customTableDialog.find("#" + this._rteId + "_txtWidth").val();
                var align = this._customTableDialog.find("#" + this._rteId + "_ddlAlignment").ejDropDownList("getSelectedValue");
                var spacing = this._customTableDialog.find("#" + this._rteId + "_txtSpacing").val();
                var padding = this._customTableDialog.find("#" + this._rteId + "_txtPadding").val();
                var border = this._customTableDialog.find("#" + this._rteId + "_txtBorder").ejDropDownList("getSelectedValue");
                var caption = this._chkTblCaption.ejCheckBox("isChecked");
                if (!ej.isNullOrUndefined(this._tableInsertAt) && !ej.isNullOrUndefined(this._tableInsertAt.startContainer))
                    this._restoreSelection(this._tableInsertAt);
                var tableEle = this._tableGenerator(row, cols, false, width, height, spacing, padding, align, border, caption);
                this.executeCommand('inserthtml', tableEle);
                var _tableEle = $(this._getDocument()).find("table.e-rte-table");
                _tableEle.attr("contentEditable", false);
                _tableEle.find("td").attr("contentEditable", true);
                var drpDwnObj = this._customTableDialog.find("#" + this._rteId + "_ddlAlignment").data("ejDropDownList");
                if(drpDwnObj.option('value') == "Center" )
                    _tableEle.attr('style',"margin: 0 auto");
                //this._getWindow().document.execCommand('inserthtml', false, tableEle);
                this._onChange();
                drpDwnObj.option({ value: "", enabled: false });
            }
            this._customTableDialog.ejDialog("close");
            this._clearTableFields();
        },

        _clearTableFields: function () {
            this._customTableDialog.find("#" + this._rteId + "_txtColumns").ejNumericTextbox("option", "value", 3);
            this._customTableDialog.find("#" + this._rteId + "_txtRows").ejNumericTextbox("option", "value", 3);
            this._customTableDialog.find("#" + this._rteId + "_txtHeight").val("");
            this._customTableDialog.find("#" + this._rteId + "_txtWidth").val("");
            this._customTableDialog.find("#" + this._rteId + "_ddlAlignment").ejDropDownList("clearText");
            this._customTableDialog.find("#" + this._rteId + "_txtSpacing").val("");
            this._customTableDialog.find("#" + this._rteId + "_txtPadding").val("");
            var border = this._customTableDialog.find("#" + this._rteId + "_txtBorder").ejDropDownList("clearText");
            var caption = this._chkTblCaption.ejCheckBox({ check: false });
        },

        _clearLinkFields: function () {
            this._txtURL = this._linkDialog.find("#" + this._rteId + "_link_url");
            this._txtURL.removeClass("e-error");
            this._txtURL.val("http://");
            this._txtLinkText = this._linkDialog.find("#" + this._rteId + "_link_text");
            this._txtLinkText.val("");
            this._txtLinkTitle = this._linkDialog.find("#" + this._rteId + "_link_title");
            this._txtLinkTitle.val("");
            this._chkTarget.ejCheckBox({ check: false });
            this._txtURL.focus();
        },
        _clearImgFields: function () {
            this._imgDialog.find("#" + this._rteId + "_img_url").val("http://").removeClass("e-error");
            this._imgDialog.find("#" + this._rteId + "_img_text").val("");
            this._chkImgDimensions.ejCheckBox({ checked: true });
        },

        _videoManager: function () {
            var selectNode = this._getSelectedNode();
            this._editVideo = null;
            if (selectNode && selectNode.tagName.toLowerCase() === "iframe") {
                this._editVideo = selectNode;
                this._videoWidth = parseInt(selectNode.width);
                this._videoHeight = parseInt(selectNode.height);
                this._videoDialog.find("textarea.e-rte-video").val(selectNode.outerHTML);
                this._videoDialog.find("#" + this._rteId + "_videoX").val(this._videoWidth);
                this._videoDialog.find("#" + this._rteId + "_videoY").val(this._videoHeight);
            }
            this._videoDialog.ejDialog("open");
            this._videoDialog.find("textarea.e-rte-video").focus();
        },

        _sourceCodeManager: function () {
            ej.isNullOrUndefined(this._sourceDialog) && this._renderSourceDialog();
            this._sourceDialog.find("textarea.e-rte-srctextarea")[0].value = this.getHtml();
            this._sourceDialog.ejDialog("open");
            this._sourceDialog.find("textarea.e-rte-srctextarea").focus();
        },

        _hyperLinkManager: function () {
            this._linkDialog.ejDialog("open");
            this._clearLinkFields();
            this._txtLinkText.val(this._getSelText());
            this._selectedHTML = this._getSelText();
            this._hyperLinkSelection = this._getDocument().selection;
            var _linkSibling = this._getSelectedNode();
            if (_linkSibling && (/^(A)$/).test(_linkSibling.nodeName)) {
                this._txtURL.val(_linkSibling.href);
                this._txtLinkTitle.val(_linkSibling.title);
            }
            if (this._hyperLinkSelection != null)
                this._hyperLinkSelRange = this._hyperLinkSelection.createRange();
        },

        // table inser 
        _tableManager: function () {
            var tableLi = this._rteToolbar.find("#" + this._rteId + "createTable");
            this._createTable.ejDialog("option", "position", {
                X: tableLi.position().left,
                Y: tableLi.position().top + tableLi.height() + 7
            });
            this._createTable.ejDialog("open");
        },

        _imageManager: function () {
            this._clearImgFields();
            var selectNode = this._getSelectedNode();
            if (selectNode && selectNode.tagName.toLowerCase() === "img") {
                this._imgWidth = parseInt(selectNode.width);
                this._imgHeight = parseInt(selectNode.height);
                this._imgDialog.find("#" + this._rteId + "_img_url").val(selectNode.src);
                this._imgDialog.find("#" + this._rteId + "_img_text").val(selectNode.alt);
                this._imgDialog.find("#" + this._rteId + "_imgX").val(this._imgWidth);
                this._imgDialog.find("#" + this._rteId + "_imgY").val(this._imgHeight);
            }
            this._imgDialog.ejDialog("open");
            this._imgDialog.find("#" + this._rteId + "_img_url").focus();
        },

        _toolBarClick: function (sender) {
            var $rteEle = $(this.itemsContainer).closest("div.e-rte").find("textarea.e-rte"), rteInstcne = $rteEle.ejRTE("instance"), rteId = $rteEle.attr('id');
            var _itemId = sender.currentTarget.id.replace(rteId, "");
            if ((sender.currentTarget.id == rteId + "copy" || sender.currentTarget.id == rteId + "cut" || sender.currentTarget.id == rteId + "paste") && !rteInstcne._isIE())
                rteInstcne._openAlert(rteInstcne._getLocalizedLabels("copyPastAlert"));
            else
                rteInstcne._selectCommand(sender.currentTarget.id);
            //For Style Tools
            if (rteInstcne._styleItems.indexOf(_itemId) >= 0 || rteInstcne._scriptsItems.indexOf(_itemId) >= 0) {
                if (!$(sender.currentTarget).hasClass("e-active"))
                    this.selectItemByID(sender.currentTarget.id);
                else
                    this.deselectItemByID(sender.currentTarget.id);
            }

                //For Align Tools
            else if (rteInstcne._alignItems.indexOf(_itemId) >= 0) {
                this.selectItemByID(sender.currentTarget.id);
                var index = rteInstcne._alignItems.indexOf(_itemId)
                for (var i = 0; i < rteInstcne._alignItems.length; i++) {
                    if (i != index)
                        this.deselectItemByID(rteId + rteInstcne._alignItems[i]);
                }
            }
                //For Bullets & Numbering tools
            else if (rteInstcne._listItems.indexOf(_itemId) >= 0) {
                if (!$(sender.currentTarget).hasClass("e-active"))
                    this.selectItemByID(sender.currentTarget.id);
                else
                    this.deselectItemByID(sender.currentTarget.id);

                var index = rteInstcne._listItems.indexOf(_itemId);
                if (index == 0)
                    this.deselectItemByID(rteId + rteInstcne._listItems[1]);
                else
                    this.deselectItemByID(rteId + rteInstcne._listItems[0]);
            }
        },

        _toggleEditTable: function () {
            var selTag = this._getSelectedNode();
            var _editTableItems = this._toolBarItems.find("#" + this._rteId + "addColumnLeft, #" + this._rteId + "addColumnRight, #" + this._rteId + "addRowAbove, #"
             + this._rteId + "addRowBelow, #" + this._rteId + "deleteRow, #" + this._rteId + "deleteColumn, #" + this._rteId + "deleteTable");
            selTag && selTag.tagName && (selTag.tagName.toLowerCase() == "td" || selTag.tagName.toLowerCase() == "table" || selTag.tagName.toLowerCase() == "tr") ?
            _editTableItems.show() : _editTableItems.hide();
            this._setIframeHeight();
        },

        //Format changes
        _formatChange: function (args) {
            var $rteEle = $(this.element).closest("div.e-rte").find("textarea.e-rte"), rteInstcne = $rteEle.ejRTE("instance"), rteId = $rteEle.attr('id');
            this.getSelectedValue() !== "" && rteInstcne._onFormatBlock(this.getSelectedValue());
            rteInstcne._focus();
            rteInstcne._onChange();
        },

        // Font style chnage event
        _fontStyleChange: function (args) {
            var $rteEle = $(this.element).closest("div.e-rte").find("textarea.e-rte"), rteInstcne = $rteEle.ejRTE("instance"), rteId = $rteEle.attr('id');
            this.getSelectedValue() !== "" && rteInstcne._onFontName(this.getSelectedValue());
            rteInstcne._onChange();
        },

        // Font style chnage event
        _fontSizeChange: function (args) {
            var $rteEle = $(this.element).closest("div.e-rte").find("textarea.e-rte"), rteInstcne = $rteEle.ejRTE("instance"), rteId = $rteEle.attr('id');
            this.getSelectedValue() !== "" && rteInstcne._onFontSize(this.getSelectedValue());
            rteInstcne._onChange();
        },

        //Color select 
        _colorPaletteClick: function (e) {
            var value;
            if ((value = e.target.getAttribute('color-code'))) {
                this._focus();
                this._onFontColor(value);
                this._splitMenu.hide(e);
                this._bgSplitMenu.hide(e);
                this._fontColor = value;
                this._fontColorSplit.find("span.e-btntxt").css("background-color", value);
            }
        },

        //Color select 
        _bgColorPaletteClick: function (e) {
            var value;
            if ((value = e.target.getAttribute('color-code'))) {
                this._focus();
                this._onBGColor(value);
                this._splitMenu.hide(e);
                this._bgSplitMenu.hide(e);
                this._bgColor = value;
                this._bgColorSplit.find("span.e-btntxt").css("background-color", value);
            }
        },

        _fontColorClick: function (e) {
            this._onFontColor(this._fontColor);
            this._splitMenu.hide(e);
        },

        _bgColorClick: function (e) {
            this._onBGColor(this._bgColor);
            this._bgSplitMenu.hide(e);
        },

        _selectCommand: function (selectedId) {
            var rteId = this._rteId;
            if (!(selectedId == rteId + "format" || selectedId == rteId + "fontName" || selectedId == rteId + "fontSize" || selectedId == rteId + "fontColor" || selectedId == rteId + "backgroundColor")) {
                this._focus();
            }
            switch (selectedId) {
                case rteId + "bold":
                    this._onBold();
                    break;
                case rteId + "italic":
                    this._onItalics();
                    break;
                case rteId + "underline":
                    this._onUnderLine();
                    break;
                case rteId + "strikethrough":
                    this._onStrikeThrough();
                    break;
                case rteId + "justifyLeft":
                    this._onJustifyLeft();
                    break;
                case rteId + "justifyRight":
                    this._onJustifyRight();
                    break;
                case rteId + "justifyCenter":
                    this._onJustifyCenter();
                    break;
                case rteId + "justifyFull":
                    this._onJustifyFull();
                    break;
                case rteId + "cut":
                    this._onCut();
                    break;
                case rteId + "copy":
                    this._onCopy();
                    break;
                case rteId + "paste":
                    this._onPaste();
                    break;
                case rteId + "clearFormat":
                    this._onClearFormat();
                    break;
                case rteId + "clearAll":
                    this._clearAllManager();
                    break;
                case rteId + "orderedList":
                    this._onOrderList();
                    break;
                case rteId + "unorderedList":
                    this._onUnorderList();
                    break;
                case rteId + "undo":
                    this._undo();
                    break;
                case rteId + "redo":
                    this._redo();
                    break;
                case rteId + "indent":
                    this._onIndent();
                    this._indentdepth++;
                    break;
                case rteId + "outdent":
                    this._onOutdent();
                    if (this._indentdepth > 0)
                        this._indentdepth--;
                    break;
                case rteId + "createLink":
                    this._hyperLinkManager();
                    break;
                case rteId + "image":
                    this._imageManager();
                    break;
                case rteId + "createTable":
                    this._tableManager();
                    break;
                case rteId + "addRowAbove":
                    this.insertRow(true);
                    break;
                case rteId + "addRowBelow":
                    this.insertRow(false);
                    break;
                case rteId + "addColumnLeft":
                    this.insertColumn(true);
                    break;
                case rteId + "addColumnRight":
                    this.insertColumn(false);
                    break;
                case rteId + "deleteRow":
                    this.removeRow();
                    break;
                case rteId + "deleteColumn":
                    this.removeColumn();
                    break;
                case rteId + "deleteTable":
                    this.removeTable();
                    break;
                case rteId + "superscript":
                    this._onSuperScript();
                    break;
                case rteId + "subscript":
                    this._onSubScript();
                    break;
                case rteId + "upperCase":
                    this._onUpperCase();
                    break;
                case rteId + "lowerCase":
                    this._onLowerCase();
                    break;
                case rteId + "video":
                    this._videoManager();
                    break;
                default:
                    this._onChange();
                    break;
            }
            if (selectedId != rteId + "createLink" && selectedId != rteId + "image" && selectedId != rteId + "video" && selectedId != rteId + "createTable") {
                this._onChange();
            }
            if ((selectedId != rteId + "undo") && (selectedId != rteId + "redo"))
                this._setBackupData();
            var selectEle = this._getSelectedNode();
            this._updateTagInfo(selectEle);
        },
        _focus: function () {
            this._getWindow().focus();
            //this._selectRange();
            this._restoreSelection(this._selectionRange);
        },
        _getWindow: function () {
            var iframe = document.getElementById(this._iframeId);
            return iframe.contentWindow;
        },
        _getDocument: function () {
            var iframe = document.getElementById(this._iframeId);
            var iframeObject = iframe.contentWindow.document;
            return iframeObject;
        },
        // Iframe command function
        _onBold: function () {
            var args;
            this.executeCommand('bold', args);
        },

        _onItalics: function () {
            var args;
            this.executeCommand('italic', args);
        },
        _onStrikeThrough: function () {
            var args;
            this.executeCommand('strikethrough', args);
        },

        _onUnderLine: function () {
            var args;
            this.executeCommand('underline', args);
        },

        _onJustifyLeft: function () {
            var args;
            this.executeCommand('JustifyLeft', args);
        },

        _onJustifyRight: function () {
            var args;
            this.executeCommand('JustifyRight', args);
        },

        _onJustifyCenter: function () {
            var args;
            this.executeCommand('JustifyCenter', args);
        },

        _onJustifyFull: function () {
            this._alignFlag = true;
            this.executeCommand('justifyfull');
        },

        _onCut: function () {
            var args;
            this.executeCommand('cut', args);
        },
        _onCopy: function () {
            var args;
            this.executeCommand('copy', args);
        },
        _onPaste: function () {
            var args;
            this.executeCommand('paste', args);

        },
        _onOrderList: function () {
            var args;
            this.executeCommand('insertorderedlist', args);
        },
        _onUnorderList: function () {
            var args;
            this.executeCommand('insertunorderedlist', args);
        },
        _onUndo: function () {
            var args;
            this.executeCommand('undo', null);
        },
        _onDelete: function () {
            var args;
            this.executeCommand('delete', null);
        },

        _onRedo: function () {
            var args;
            this.executeCommand('redo', null);
        },

        _onClearFormat: function () {
            var args;
            this.executeCommand('removeformat', args);
            //this.executeCommand('foreColor', 'black');
            this._setBackupData();
            this._onChange();
            this._updateIframeSkin(this.model.iframeAttribute);
        },

        _onFormatBlock: function (formatBlock) {
            this._focus();
            this.executeCommand('formatBlock', formatBlock);
        },

        _onFontName: function (fontsname) {
            this.executeCommand("fontName", fontsname);
        },

        _onFontSize: function (Size) {
            this.executeCommand('fontSize', Size);
        },

        _onFontColor: function (color) {
            this.executeCommand('foreColor', color);
            this._onChange();
            this._updateIframeSkin(this.model.iframeAttribute);
        },

        _onBGColor: function (color) {
            this.executeCommand('backColor', color);
            this._onChange();
        },

        _onIndent: function () {
            this._getWindow().document.body.style.wordWrap = "break-word";
            var node = this._getWindow().document.getSelection().focusNode;
            if (node && (/^(OL|UL|LI)$/).test(node.nodeName))
                this._listIndent(node);
            else if (node && (/^(#text)$/).test(node.nodeName) && (/^(OL|UL|LI)$/).test($(node).parent()[0].nodeName)) {
                this._listIndent($(node).parents("li")[0], node);
            }
            else
                this.executeCommand('indent', false);
            node && $(node).focus();
            this._updateIframeSkin(this.model.iframeAttribute);
        },

        _onOutdent: function () {
            var node = this._getWindow().document.getSelection().focusNode;
            if (node && (/^(OL|UL|LI)$/).test(node.nodeName))
                this._listOutdent(node);
            else if (node && (/^(#text)$/).test(node.nodeName) && (/^(OL|UL|LI)$/).test($(node).parent()[0].nodeName)) {
                this._listOutdent($(node).parents("li")[0], node);
            }
            else
                this.executeCommand('outdent', false);
        },

        _onSelectAll: function () {
            this.executeCommand('selectall');
        },
        _onHyperLink: function (val) {
            this.executeCommand('createlink', val);
        },

        _onInsertLink: function () {
            var oEl;
            var sHtml;
            if (!this._isUrl($.trim(this._txtURL.val()))) {
                this._txtURL.addClass("e-error");
                return false;
            }
            oEl = ej.buildTag("a", "", {}, { href: this._txtURL.val(), title: this._txtLinkTitle.val() });
            if (this._chkTarget.ejCheckBox("isChecked"))
                oEl.target = "_blank";
            else
                oEl.target = "_self";

            //}
            var oSelection;
            var oSelRange;
            this._focus();
            if (this._isIE()) {
                if (this._selectedHTML.length == 0) {
                    this._selectedHTML = this._txtLinkText.val();
                }
                oEl[0].innerHTML = this._selectedHTML;
                sHtml = oEl[0].outerHTML;
            }
            else {
                oEl.html(this._txtLinkText.val());
                sHtml = $('<div>').append($(oEl).clone()).html();
            }
            if (sHtml) {
                if (this._isIE()) {
                    this._pasteHtml(sHtml);
                }
                else {
                    this._getDocument().execCommand('inserthtml', false, sHtml);
                }
                this._focus();
            }
            this._linkDialog.ejDialog("close");
        },

        _onInsertImage: function () {
            var url = this._imgDialog.find("#" + this._rteId + "_img_url");
            var altText = this._imgDialog.find("#" + this._rteId + "_img_text");
            var imgX = this._imgDialog.find("#" + this._rteId + "_imgX").val();
            var imgY = this._imgDialog.find("#" + this._rteId + "_imgY").val();
            var proxy = this;
            this._restoreSelection(this._selectionRange);
            //Url Validation
            var _img = $("<img>", {
                src: url.val(),
                error: function () { url.addClass("e-error"); },
                load: function () {
                    var imgEle = ej.buildTag("img", "", {}, { alt: altText.val(), src: url.val() });
                    if (proxy.model.showDimensions) {
                        (imgX != "") && imgEle.width(imgX);
                        (imgY != "") && imgEle.height(imgY);
                    }
                    proxy.executeCommand('inserthtml', imgEle[0].outerHTML);
                    proxy._imgDialog.ejDialog("close");
                }
            });

        },
        //Insert vedio
        _insertVideo: function (sender) {
            var videoLink = $.trim(this._videoDialog.find("textarea.e-rte-video")[0].value);
            var videoX = this._videoDialog.find("#" + this._rteId + "_videoX").val();
            var videoY = this._videoDialog.find("#" + this._rteId + "_videoY").val();
            this._restoreSelection(this._selectionRange);
            var ele = $(videoLink);
            if (sender.target.id === "video_insert" && videoLink !== "") {
                var _index, _link = ele[0].src;
                if (!ej.isNullOrUndefined(_link) && _link.indexOf("http:") == -1) {
                    _index = videoLink.indexOf("src=") + 5;
                    videoLink = videoLink.substr(0, _index) + "http:" + videoLink.substr(_index);
                }
                var _index, ele = $(videoLink)[0];
                if (this.model.showDimensions) {
                    (videoX != "") && (ele.width = videoX);
                    (videoX != "") && (ele.height = videoY);
                }
                this._editVideo && $(this._editVideo).remove();
                this.executeCommand('inserthtml', ele.outerHTML);
                //this._getWindow().document.execCommand('inserthtml', false, ele.outerHTML);
                this._onChange();
                this._setBackupData();
                this._videoDialog.ejDialog("close");
            }
            else if (sender.target.id === "video_cancel")
                this._videoDialog.ejDialog("close");
            else
                this._openAlert(this._getLocalizedLabels("videoError"));
            this._videoDialog.find("textarea.e-rte-video")[0].value = "";
            this._videoDialog.find("#" + this._rteId + "_videoX").val("");
            this._videoDialog.find("#" + this._rteId + "_videoY").val("");
            this._chkvideoDimensions.ejCheckBox({ check: true });
        },

        //Clears all the contents
        _clearAllManager: function () {
            this._alertWindow.find(".e-alert-cancel").show();
            this._openAlert(this._getLocalizedLabels("deleteAlert"));
        },

        _onUnlink: function () {
            var args;
            this.executeCommand('unlink', args);
        },
        _onSuperScript: function () {
            var args;
            this.executeCommand('SuperScript', args);
        },
        _onSubScript: function () {
            var args;
            this.executeCommand('SubScript', args);
        },
        _onInsertTable: function (rows, cols, designTime) {
            var tableEle = this._tableGenerator(rows, cols, designTime);
            this.executeCommand('inserthtml', tableEle);
        },

        _onUpperCase: function () {
            if (this._isIE()) {
                if (this._getWindow().document.selection.type.toLowerCase() == "control") {
                    return;
                }

                var p = this._getWindow().document.selection.createRange();
                this._getDocument().selection.createRange().pasteHTML(this._seleText.toUpperCase());
            }
            else {
                var selection = this._getWindow().getSelection();
                var range = selection.getRangeAt(0);
                var node = range.commonAncestorContainer;
                var children = range.commonAncestorContainer.children;
                if (children != null) {
                    var contents = range.extractContents();
                    var result = this._changeCase(contents, "Upper");
                    var resultCopy = $(result).clone();
                    var tempDiv = document.createElement('div');
                    $(tempDiv).append($(resultCopy));
                    if (tempDiv.innerHTML != null && tempDiv.innerHTML != "")
                        this._getWindow().document.execCommand('inserthtml', false, tempDiv.innerHTML);
                }
                else {
                    var replaceString = node.nodeValue.substring(range.startOffset, range.endOffset).toUpperCase();
                    var startString = node.nodeValue.substr(0, range.startOffset);
                    var endString = node.nodeValue.substring(range.endOffset);
                    node.nodeValue = startString + replaceString + endString;
                }
            }

        },

        _changeCase: function (parentNode, toChangeCase) {
            var s = parentNode.childNodes;
            if (s.length > 0) {
                for (var t = 0; t < s.length; t++) {
                    if (s[t].nodeType == 3) {
                        s[t].nodeValue = toChangeCase == "Upper" ? s[t].nodeValue.toUpperCase() : s[t].nodeValue.toLowerCase();
                    }
                    else {
                        if (s[t].nodeType == 1 && s[t].tagName.toUpperCase() != "FONT") {
                            this._changeCase(s[t], toChangeCase);
                        }
                    }
                }
            }
            return s;
        },

		
        	_onLowerCase: function () {
            var selection = this._getWindow().getSelection();
            var range = selection.getRangeAt(0);
            var node = range.commonAncestorContainer;
            var children = range.commonAncestorContainer.children;
            if (children != null) {
                var contents = range.extractContents();
                var result = this._changeCase(contents, "Lower");
                var resultCopy = $(result).clone();
                var tempDiv = document.createElement('div');
                $(tempDiv).append($(resultCopy));
                if (tempDiv.innerHTML != null && tempDiv.innerHTML != "")
                    this._getWindow().document.execCommand('inserthtml', false, tempDiv.innerHTML);
            }
            else {
                var replaceString = node.nodeValue.substring(range.startOffset, range.endOffset).toLowerCase();
                var startString = node.nodeValue.substr(0, range.startOffset);
                var endString = node.nodeValue.substring(range.endOffset);
                node.nodeValue = startString + replaceString + endString;
            }
        },

        _listIndent: function (node, selection) {
            var sibling, newList;
            sibling = node.previousSibling;

            if (sibling && this._isListNode(sibling)) {
                sibling.appendChild(node);
                return true;
            }
            if (sibling && sibling.nodeName == 'LI' && this._isListNode(sibling.lastChild)) {
                sibling.lastChild.appendChild(node);
                this._combineLists(node.lastChild, sibling.lastChild, node);
                return true;
            }

            sibling = node.nextSibling;

            if (sibling && this._isListNode(sibling)) {
                sibling.insertBefore(node, sibling.firstChild);
                return true;
            }

            if (sibling && sibling.nodeName == 'LI' && this._isListNode(node.lastChild)) {
                return false;
            }

            sibling = node.previousSibling;
            if (sibling && sibling.nodeName == 'LI') {
                newList = ej.buildTag(node.parentNode.nodeName)[0];
                sibling.appendChild(newList);
                newList.appendChild(node);
                this._combineLists(node.lastChild, newList, node);
                return true;
            }
            return true;
        },

        _combineLists: function (from, to, li) {
            var node;

            if (this._isListNode(from)) {
                while ((node = li.lastChild.firstChild)) {
                    to.appendChild(node);
                }

                $(from).remove();
            }
        },
        _isListNode: function (node) {
            return node && (/^(OL|UL)$/).test(node.nodeName);
        },
        _isFirstChild: function (node) {
            return node.parentNode.firstChild == node;
        },

        _isLastChild: function (node) {
            return node.parentNode.lastChild == node;
        },
        _removeEmptyList: function (node) {
            if (node && $(node).children().length === 0)
                $(node).remove();
        },
        _listOutdent: function (node) {
            var ul = $(node.parentNode), ulParent = ul[0].parentNode, newBlock;
            node = $(node);
            if (this._isFirstChild(node[0]) && this._isLastChild(node[0])) {
                if (ulParent.nodeName == "LI") {
                    node.insertAfter(ulParent);
                    this._removeEmptyList(ulParent);
                    ul.remove();
                } else if (this._isListNode(ulParent)) {
                    ul.remove();
                } else {
                    this.executeCommand('outdent', false);
                    ////ulParent.insertBefore(createNewTextBlock(node[0]), ul[0]);
                    //ul.remove();
                }

                return true;
            } else if (this._isFirstChild(node[0])) {
                if (ulParent.nodeName == "LI") {
                    node.insertAfter(ulParent);
                    node[0].appendChild(ul[0]);
                    this._removeEmptyList(ulParent);
                } else if (this._isListNode(ulParent)) {
                    ulParent.insertBefore(node[0], ul[0]);
                } else {
                    this.executeCommand('outdent', false);
                    //ulParent.insertBefore(createNewTextBlock(node[0]), ul[0]);
                    //node.remove();
                }

                return true;
            } else if (this._isLastChild(node[0])) {
                if (ulParent.nodeName == "LI") {
                    node.insertAfter(ulParent);
                } else if (this._isListNode(ulParent)) {
                    node.insertAfter(ul[0]);
                } else {
                    this.executeCommand('outdent', false);
                    //node.insertAfter(createNewTextBlock(node[0]), ul[0]);
                    //node.remove();
                }

                return true;
            } else {
                this.executeCommand('outdent', false);
            }

            return false;
        },

        _updateIndent: function (node) {
            this._toolBarObj.enableItemByID(this._rteId + "indent");
            if (node && (/^(LI)$/).test(node.nodeName)) {
                if ($(node).parents(node.parentNode.nodeName).last().find("li").index(node) === 0)
                    this._toolBarObj.disableItemByID(this._rteId + "indent");
            }
        },

        //Get char Count
        _updateCharCount: function () {
            if (this.model.showFooter && this.model.showWordCount) {
                var iframeHtml = this._getText();
                this._wordCount.html(this._getLocalizedLabels("characters") + " : " + $.trim(iframeHtml).length);
            }
        },

        //Update tag info 
        _updateTagInfo: function (element) {
            var text = "", pTag, curNode = element.tagName.toLowerCase();
            if (this.model.showFooter && this.model.showHtmlTagInfo && curNode != "body") {
                var parentNodes = $(element).parents();
                for (var i = parentNodes.length - 1; i >= 0; i--) {
                    pTag = parentNodes[i].tagName.toLowerCase();
                    if (pTag != "body" && pTag != "html")
                        text += " » " + pTag;
                }
                text += " » " + curNode;
                this._htmlInfo.html(text);
            }
        },

        //Update Model value 
        _updateValue: function () {
            this.value(this._getDocument().body.innerHTML);
			this.element.val(this._getDocument().body.innerHTML);
        },

        //Clear Formats
        _setClearFormat: function () {
            var selItemslength = this._rteToolbar.find(".e-active").length;
        },


        //Updates the status of the toolbar items
        _updateToolbarStatus: function () {
            if (this.model.showToolbar) {
                //Style Tools
                for (var i = 0; i < this._styleItems.length; i++) {
                    if (this._getCommandStatus(this._styleItems[i].toLowerCase()))
                        this._toolBarObj.selectItemByID(this._rteId + this._styleItems[i]);
                    else
                        this._toolBarObj.deselectItemByID(this._rteId + this._styleItems[i]);
                }

                //Align Tools
                for (var i = 0; i < this._alignItems.length; i++) {
                    if (this._getCommandStatus(this._alignItems[i].toLowerCase()))
                        this._toolBarObj.selectItemByID(this._rteId + this._alignItems[i]);
                    else
                        this._toolBarObj.deselectItemByID(this._rteId + this._alignItems[i]);
                }

                //Formatting Tools
                for (var i = 0; i < this._scriptsItems.length; i++) {
                    if (this._getCommandStatus(this._scriptsItems[i].toLowerCase()))
                        this._toolBarObj.selectItemByID(this._rteId + this._scriptsItems[i]);
                    else
                        this._toolBarObj.deselectItemByID(this._rteId + this._scriptsItems[i]);
                }


                //List Tools
                if (this._getCommandStatus('InsertOrderedList'))
                    this._toolBarObj.selectItemByID(this._rteId + "orderedList");
                else
                    this._toolBarObj.deselectItemByID(this._rteId + "orderedList");

                if (this._getCommandStatus('InsertUnorderedList'))
                    this._toolBarObj.selectItemByID(this._rteId + "unorderedList");
                else
                    this._toolBarObj.deselectItemByID(this._rteId + "unorderedList");
            }

        },

        _updateFormat: function () {
            if (this._formatDDL && this.model.showToolbar && !ej.isNullOrUndefined(this.model.tools["formatStyle"])) {
                var formatName = $.trim(this._getCommandValue('formatblock').replace("'", "").replace("'", ""));
                if (ej.isNullOrUndefined(formatName) || formatName == "")
                    this._formatDDL.ejDropDownList({ "value": this._getLocalizedLabels("format") });
                else
                    this._formatDDL.ejDropDownList("setSelectedValue", formatName);
            }
        },
        // Update font options
        _updateFontOptionStatus: function () {
            if (this.model.showFontOption && this.model.showToolbar && !ej.isNullOrUndefined(this.model.tools["font"])) {
                var fontName = $.trim(this._getCommandValue('fontname').replace("'", "").replace("'", ""));
                ej.isNullOrUndefined(fontName) || fontName == "" && (fontName = "Segoe UI");
                this._fontStyleDDL.ejDropDownList("setSelectedValue", fontName);
                // Font Size DDL
                var fontSize = this._getCommandValue('fontsize');
                ej.isNullOrUndefined(fontSize) || fontSize == "" && (fontSize = 2);
                this._fontSizeDDL.ejDropDownList("setSelectedValue", fontSize);
            }
        },

        _getSelText: function () {
            var selectedtext = '';
            var selection;
            var textnode;
            if (!this._isIE()) {
                if (window.getSelection) {
                    selection = this._getWindow().getSelection();
                    var range = document.createRange();
                    range = selection.getRangeAt(0);
                    textnode = document.createTextNode(range.toString());
                    selectedtext = textnode.nodeValue;
                }
                else if (document.getSelection) {
                    selectedtext = this._getWindow().document.getSelection();
                }
            }
            else
                selectedtext = this._seleText;
            return selectedtext;
        },

        _isIE: function () {
            var _ie = false, browserInfo = ej.browserInfo();
            if (browserInfo.name == 'msie') {
                _ie = true;
            }
            return _ie;
        },
        //Vaidate the input URL string
        _isUrl: function (url) {
            var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            return regexp.test(url);
        },
        _pasteHtml: function (html) {
            var sel, range;
            this._focus();
            if (window.getSelection) {
                // IE9 and non-IE
                sel = this._getWindow().getSelection();
                if (sel.getRangeAt && sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    range.deleteContents();
                    // some browsers (IE9, for one)
                    var el = document.createElement("div");
                    el.innerHTML = html;
                    var frag = this._getDocument().createDocumentFragment(), node, lastNode;
                    while ((node = el.firstChild)) {
                        lastNode = frag.appendChild(node);
                    }
                    range.insertNode(frag);

                    // Preserve the selection
                    if (lastNode) {
                        range = range.cloneRange();
                        range.setStartAfter(lastNode);
                        range.collapse(true);
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }
                }
            } else if (this._getDocument().selection && this._getDocument().selection.type != "Control") {
                // IE < 9
                this._getDocument().selection.createRange().pasteHTML(html);
            }
        },
        //get locale text
        _getLocalizedLabels: function (property) {
            return ej.RTE.Locale[this.model.locale][property] === undefined ? ej.RTE.Locale["en-US"][property] : ej.RTE.Locale[this.model.locale][property];
        },

        //get Selection Node
        _getSelectedNode: function () {
            var element, rng = this._getRange();
            var startContainer = rng.startContainer, endContainer = rng.endContainer;
            var startOffset = rng.startOffset, endOffset = rng.endOffset;
            if (!rng) {
                return this._getDocument().selection;
            }

            if (rng.setStart) {
                element = rng.commonAncestorContainer;
                //Image tage and link selction
                if (!rng.collapsed) {
                    if (startContainer == endContainer) {
                        if (endOffset - startOffset < 2) {
                            if (startContainer.hasChildNodes()) {
                                element = startContainer.childNodes[startOffset];
                            }
                        }
                    }
                    if (startContainer.nodeType === 3 && endContainer.nodeType === 3) {
                        if (startContainer.length === startOffset) {
                            startContainer = this._skipEmptyNode(startContainer.nextSibling, true);
                        } else {
                            startContainer = startContainer.parentNode;
                        }

                        if (endOffset === 0) {
                            endContainer = this._skipEmptyNode(endContainer.previousSibling, false);
                        } else {
                            endContainer = endContainer.parentNode;
                        }

                        if (startContainer && startContainer === endContainer) {
                            return startContainer;
                        }
                    }
                }

                if (element && element.nodeType == 3) {
                    return element.parentNode;
                }
                return element;
            }
            element = rng.item ? rng.item(0) : rng.parentElement();
            return element;
        },

        _skipEmptyNode: function (node, forwards) {
            var orig = node;

            while (node && node.nodeType === 3 && node.length === 0) {
                node = forwards ? node.nextSibling : node.previousSibling;
            }

            return node || orig;
        },

        _getSelection: function () {

            var selCurrent;
            if (this._isIE()) {
                selCurrent = this._getDocument().selection.createRange();
                selCurrent.type = this._getDocument().selection.type;
            }
            else {
                selCurrent = window.getSelection();
                if (selCurrent.rangeCount) {
                    sText = selCurrent.getRangeAt(0);
                }
                selCurrent.type = this._getWindow().getSelection().type;
            }
            return selCurrent;
        },

        _saveSelection: function () {
            var win = this._getWindow();
            var doc = win.document;
            var sel = win.getSelection ? win.getSelection() : doc.selection;
            var range;

            if (sel) {
                if (sel.createRange) {
                    range = sel.createRange();
                } else if (sel.getRangeAt(0)) {
                    range = sel.getRangeAt(0);
                } else if (sel.anchorNode && sel.focusNode && doc.createRange) {
                    // Older WebKit browsers
                    range = doc.createRange();
                    range.setStart(sel.anchorNode, sel.anchorOffset);
                    range.setEnd(sel.focusNode, sel.focusOffset);

                    // Handle the case when the selection was selected backwards (from the end to the start in the
                    // document)
                    if (range.collapsed !== sel.isCollapsed) {
                        range.setStart(sel.focusNode, sel.focusOffset);
                        range.setEnd(sel.anchorNode, sel.anchorOffset);
                    }
                }
            }
            return range;
        },

        _restoreSelection: function (range) {
            var win = this._getWindow();
            var doc = win.document;
            var sel = win.getSelection ? win.getSelection() : doc.selection;

            if (sel && range) {
                if (range.select) {
                    range.select();
                } else if (sel.removeAllRanges && sel.addRange) {
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        },

        _getRange: function () {
            if (this._isIE())
                return ej.isNullOrUndefined(this._selectionRange) ? this._saveSelection() : this._selectionRange;
            else if(this._getWindow().getSelection().rangeCount>0)
                return this._getWindow().getSelection().getRangeAt(0);
            else
            {
                var iframe=document.getElementsByTagName("iframe")[0];
                var win = iframe.contentWindow;
                var range = win.document.createRange();
                range.setStart(win.document.body, 0);
                range.setEnd(win.document.body, 0);
                win.document.body.focus();
                return range;
            }
        },
        //Sets Back up data
        _setBackupData: function () {
            var htmlTxt = this.getHtml();
            var bkuplen = this._backupArray.length;
            if (bkuplen == this.model.undoStackLimit + 1)
                this._backupArray.splice(0, 1);
            if (htmlTxt != this._backupArray[bkuplen - 1] && this.model.undoStackLimit > 0)
                this._backupArray.push(htmlTxt);
            this._undoRedoPosition = this._backupArray.length - 1;
            if (this.model.showToolbar && this._rteToolbar.find("#" + this._rteId + "undo") && this._backupArray.length > 1)
                this._toolBarObj.enableItemByID(this._rteId + "undo");
        },
        _getSelectedHtmlString: function () {
            var selection = "";
            var range;
            var node = "";
            if (document.selection) {
                node = this._getWindow().document.selection.createRange().htmlText;
                return node;
            }
            else
                return this._seleText;

            return node.innerHTML;
        },

        _getText: function () {
            var _body = this._getDocument().body;
            if (_body != null) {
                if (!this._isIE())
                    return _body.textContent;
                else
                    return _body.innerText;
            }
        },
        _validateMaxLength: function (e) {
            if (this.model.maxLength != null) {    // MaxLength function - Restricts the user for entering text in RTE
                var len = this.model.maxLength;
                var usertext = this._getText();
                if (len <= usertext.length) {
                    if (!(e.keyCode < 47 || e.ctrlKey && e.keyCode == 65 || e.ctrlKey && e.keyCode == 67 || e.ctrlKey && e.keyCode == 86 || e.ctrlKey && e.keyCode == 88)) {
                        this._keypressFlag = false;
                        this._cancelEvent(e);
                    }
                }
            }
        },
        _cancelEvent: function (e) {
            e.returnValue = false;
            e.stopPropagation();
            e.preventDefault();
            return false;
        },

        _alignToolUpdate: function (name) {
            for (var i = 0; i < this._alignItems.length; i++) {
                if (this._alignItems[i] === name)
                    this._toolBarObj.selectItemByID(this._rteId + "underline");
                else
                    this._toolBarObj.deselectItemByID(this._rteId + "underline");
            }
        },

        //Gets the status of the formats of the current text
        _getCommandStatus: function (commandName) {
            var state = this._getDocument().queryCommandState(commandName);
            return state;
        },

        //Gets the value of the font-size and font-name of the current text
        _getCommandValue: function (commandName) {
            var value = this._getDocument().queryCommandValue(commandName);
            return value;
        },

        //Undo 
        _undo: function () {
            if (this._undoRedoPosition > 0) {
                this.setHtml(this._backupArray[this._undoRedoPosition - 1]);
                this._undoRedoPosition--;
                this._updateToolbarStatus();
                this._updateFontOptionStatus();
                this._updateFormat();
                this._updateCharCount();
                this._toolBarObj.enableItemByID(this._rteId + "redo");
            }
            if (this._undoRedoPosition == 0) {
                this._toolBarObj.disableItemByID(this._rteId + "undo");
                this._toolBarObj.enableItemByID(this._rteId + "redo");
            }
            this._focus();
        },

        //Redo 
        _redo: function () {
            if (this._undoRedoPosition != this._backupArray.length) {
                if (this._backupArray[this._undoRedoPosition + 1] != null) {
                    var redoString = this._backupArray[this._undoRedoPosition + 1];
                    this.setHtml(redoString);
                    this._undoRedoPosition++;
                }
                else {
                    var redoString = this._backupArray[this._backupArray.length - 2];
                    this.setHtml(redoString);
                    this._undoRedoPosition = this._backupArray.length - 2;
                }
                this._updateToolbarStatus();
                this._updateFontOptionStatus();
                this._updateFormat();
                this._updateCharCount();
                if (!ej.isNullOrUndefined(this._toolBarObj)) {
                    if (this._backupArray.length - 1 > 0)
                        this._toolBarObj.enableItemByID(this._rteId + "undo");
                    if (this._undoRedoPosition == this._backupArray.length - 1)
                        this._toolBarObj.disableItemByID(this._rteId + "redo");
                }
            }
            this._focus();
        },

        //set content
        _setContent: function (htmltxt) {
            var editdoc = this._getDocument();
            editdoc.open();
            editdoc.write(htmltxt);
            editdoc.close();
            editdoc.EditMode = true;
        },

        //table start to create 
        _tableCellStart: function (e) {
            this._tableInsertAt = this._saveSelection();
        },

        //Select the table Cell on mouse over
        _tableCellSelect: function (e) {
            var cellEle, target = $(e.target);
            var row = target.parent().index();
            var col = target.index();
            this._createTable.find("div.e-rte-tablecell").each(function (index) {
                cellEle = $(this);
                if (cellEle.index() <= col && cellEle.parent().index() <= row) {
                    cellEle.addClass("e-active");
                }
                else {
                    cellEle.removeClass("e-active");
                }
            });
            this._tblheaderDiv.html((col + 1) + "x" + (row + 1) + " Table");
            $(this._getDocument()).find("table.e-rte-tableremove").remove();
            if (!ej.isNullOrUndefined(this._tableInsertAt) && !ej.isNullOrUndefined(this._tableInsertAt.startContainer)) {
                this._restoreSelection(this._tableInsertAt);
                this._onInsertTable((row + 1), (col + 1), true);
            }
        },
        _tableCellLeave: function (e) {
            this._createTable.find("div.e-rte-tablecell").removeClass("e-active");
            $(this._getDocument()).find("table.e-rte-tableremove").remove();
            this._tblheaderDiv.html(this._getLocalizedLabels("createTable"));
        },
        _tableCellDown: function (e) {
            var target = $(e.target);
            var row = target.parent().index() + 1;
            var col = target.index() + 1;
            this._focus();
            $(this._getDocument()).find("table.e-rte-tableremove").remove();
            if (!ej.isNullOrUndefined(this._tableInsertAt) && !ej.isNullOrUndefined(this._tableInsertAt.startContainer)) {
                this._restoreSelection(this._tableInsertAt);
                this._onInsertTable(row, col, false);
            }
            var _tableEle = $(this._getDocument()).find("table.e-rte-table");
            _tableEle.attr("contentEditable", false);
            _tableEle.find("td").attr("contentEditable", true);
            this._createTable.ejDialog("close");
            this._setBackupData();
            this._onChange();
        },

        _tableGenerator: function (rows, cols, designTime, width, height, spacing, padding, align, border, caption) {
            var tblClass = "e-rte-table", colTemplate = "<td><br _moz_dirty=''/></td>";
            if (designTime)
                tblClass += " e-rte-tableremove";
            width = ej.isNullOrUndefined(width) || width == "" ? "width='100%'" : "width=" + width + "'";
            height = ej.isNullOrUndefined(height) || height == "" ? "" : "height='" + height + "'";
            spacing = ej.isNullOrUndefined(spacing) || spacing == "" ? "" : "cellspacing='" + spacing + "'";
            padding = ej.isNullOrUndefined(padding) || padding == "" ? "" : "cellpadding='" + padding + "'";
            switch (border) {

                case "dotted": borderstyle = "dotted";
                    break;
                case "double":
                    border = "style='border:3px double black'";
                    borderstyle = "double";
                    return "<table class='" + tblClass + "' " + width + " " + height + " " + border + " " + spacing + " " + padding + " " + align + ">" + (caption ? "<caption></caption>" : "") + Array(rows + 1).join("<tr>" + Array(cols + 1).join("<td style='border:3px " + borderstyle + " black'><br _moz_dirty=''/></td>") + "</tr>") + "</table>";
                    break;
                case "dashed": borderstyle = "dashed";
                    break;
                case "solid": borderstyle = "solid";
                    break;
                default: borderstyle = "solid";
                    break;
            }
            if (borderstyle != "double")
                border = "style='border:1px '" + borderstyle + "' black'";
            return "<table class='" + tblClass + "' " + width + " " + height + " " + border + " " + spacing + " " + padding + " " + align + ">" + (caption ? "<caption></caption>" : "") + Array(rows + 1).join("<tr>" + Array(cols + 1).join("<td style='border:1px " + borderstyle + " black'><br _moz_dirty=''/></td>") + "</tr>") + "</table>";

           
            align = ej.isNullOrUndefined(align) ? "" : " align='" + align + "'";
            return "<table class='" + tblClass + "' " + width + " " + height + " " + border + " " + spacing + " " + padding + " " + align + ">" + (caption ? "<caption></caption>" : "") + Array(rows + 1).join("<tr>" + Array(cols + 1).join(colTemplate) + "</tr>") + "</table>";
        },
        //custom table link click event 
        _openCustomTable: function (e) {
            this._customTableDialog.ejDialog("open");
        },
        _documentClick: function (e) {
            if ((!ej.isNullOrUndefined(this._createTable)) && ($(e.target).parents("#" + this._rteId + "tables").length <= 0))
                this._createTable.ejDialog("isOpened") && this._createTable.ejDialog("close");
        },
        // iframe events 
        _iframeFocus: function (e) {
            !ej.isNullOrUndefined(this._createTable) && this._createTable.ejDialog("isOpened") && this._createTable.ejDialog("close");
            !ej.isNullOrUndefined(this._fontSizeDDL) && this._fontSizeDDL.ejDropDownList("hidePopup");
            !ej.isNullOrUndefined(this._fontStyleDDL) && this._fontStyleDDL.ejDropDownList("hidePopup");
            !ej.isNullOrUndefined(this._formatDDL) && this._formatDDL.ejDropDownList("hidePopup");
            !ej.isNullOrUndefined(this._createTable) && this._createTable.ejDialog("close");
            !ej.isNullOrUndefined(this._splitMenu) && this._splitMenu.hide(e);
            !ej.isNullOrUndefined(this._bgSplitMenu) && this._bgSplitMenu.hide(e);
        },
        _iframeKeyDown: function (e) {
            var _toolEle;
            if (this.model.showToolbar && this.model.allowKeyboardNavigation) {
                if (e && e.ctrlKey == true) {
                    /// Ctrl-b is pressed
                    if (e.keyCode == 66) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "bold");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onBold();
                            if (!_toolEle.hasClass("e-active"))
                                this._toolBarObj.selectItemByID(this._rteId + "bold");
                            else
                                this._toolBarObj.deselectItemByID(this._rteId + "bold");
                        }
                        return false;
                    }
                        /// Ctrl-i is pressed
                    else if (e.keyCode == 73) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "italic");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onItalics();
                            if (!_toolEle.hasClass("e-active"))
                                this._toolBarObj.selectItemByID(this._rteId + "italic");
                            else
                                this._toolBarObj.deselectItemByID(this._rteId + "italic");
                        }
                        return false;
                    }
                        /// Ctrl-u is pressed.
                    else if (e.keyCode == 85) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "underline");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onUnderLine();
                            if (!_toolEle.hasClass("e-active"))
                                this._toolBarObj.selectItemByID(this._rteId + "underline");
                            else
                                this._toolBarObj.deselectItemByID(this._rteId + "underline");
                        }
                        return false;
                    }
                        //justify Left Crtl-l
                    else if (e.keyCode == 76 && !e.altKey) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "justifyLeft");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onJustifyLeft();
                            this._alignToolUpdate("justifyLeft");
                        }
                        return false;
                    }
                        //justify right Crtl-r
                    else if (e.keyCode == 82) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "justifyRight");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onJustifyRight();
                            this._alignToolUpdate("justifyRight");
                        }
                        return false;
                    }
                        //justify center Crtl-e
                    else if (e.keyCode == 69 && !e.altKey) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "justifyCenter");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onJustifyCenter();
                            this._alignToolUpdate("justifyCenter");
                        }
                        return false;
                    }
                        //justify center Crtl-J
                    else if (e.keyCode == 74 && !e.altKey) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "justifyFull");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onJustifyFull();
                            this._alignToolUpdate("justifyFull");
                        }
                        return false;
                    }
                        //Undo
                    else if (e.keyCode == 90 && !e.altKey) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "undo");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onUndo();
                        }
                        return false;
                    }
                        //REDO
                    else if (e.keyCode == 89) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "rddo");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onRedo();
                        }
                        return false;
                    }
                        //COPY
                    else if (e.keyCode == 67) {
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "copy");
                        if (_toolEle.hasClass("e-disable")) {
                            this._keypressFlag = false;
                            e.preventDefault();
                        }
                    }
                        //CUT
                    else if (e.keyCode == 88) {
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "cut");
                        if (_toolEle.hasClass("e-disable")) {
                            this._keypressFlag = false;
                            e.preventDefault();
                        }

                    }
                        //PASTE
                    else if (e.keyCode == 86) {
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "paste");
                        if (_toolEle.hasClass("e-disable")) {
                            this._keypressFlag = false;
                            e.preventDefault();
                        }
                    }
                        //INDENT
                    else if (e.keyCode == 77) {

                        if (e.shiftKey == true) {
                            e.preventDefault();
                            _toolEle = this._toolBarItems.find("#" + this._rteId + "outdent");
                            if (!_toolEle.hasClass("e-disable")) {
                                this._onOutdent();
                                if (this._indentdepth > 0)
                                    this._indentdepth--;
                            }
                            return false;
                        }
                        else {
                            e.preventDefault();
                            _toolEle = this._toolBarItems.find("#" + this._rteId + "indent");
                            if (!_toolEle.hasClass("e-disable")) {
                                this._onIndent();
                                this._indentdepth++;
                            }
                            return false;
                        }
                    }
                        //Hyperlink
                    else if (e.keyCode == 75) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "createLink");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._hyperLinkManager();
                        }
                        return false;

                    }
                }

                    // Delete and Delete All
                else if (e.keyCode == 127) {
                    if ((this.getHtml() == this.getSelHtmlString()) || (this._currentIFrame.get_Text() == this._currentIFrame.getSelText())) {
                        var isClearAll = this.ClearAllManager();
                        if (!isClearAll) {
                            e.preventDefault();
                            return isClearAll;
                        }
                    }
                }
            }
            if (this.model.maxLength != null) {
                this._validateMaxLength(e);
            }
            this._trigger("keydown", { keyCode: e.keyCode });
            // if (e.keyCode != 16 || e.keyCode != 17 || e.keyCode != 18)
                // this._onChange();
        },
        //Key press event
        _iframeKeypress: function (e) {
            if (!this._keypressFlag) {
                e.preventDefault();
                this._keypressFlag = true;
                return false;
            }
        },
        _iframeKeyUp: function (e) {
            this._toggleEditTable();
            this._setBackupData();
            this._updateToolbarStatus();
            this._updateFontOptionStatus();
            this._updateFormat();
            this._updateCharCount();
            var selectEle = this._getSelectedNode();
            this._updateTagInfo(selectEle);
			this._onChange();
            this._trigger("keyup", { keyCode: e.keyCode });
        },
        _iframeMouseUp: function (e) {
            this._toggleEditTable();
            this._updateToolbarStatus();
            this._updateFontOptionStatus();
            this._updateFormat();
        },
        _iframeMouseDown: function (e) {
            this._updateTagInfo(e.target);
            this._updateIndent(e.target);
        },
        _iframeFocusOut: function (e) {
            this._onChange();
            this._selectionRange = this._saveSelection();
            this._seleText = ej.isNullOrUndefined(this._getWindow().document.selection) ? this._selectionRange .toString(): this._getWindow().document.selection.createRange().text;
        },
        _widthFocusOut:function(e)
        {
            var val = this._customTableDialog.find("#" + this._rteId + "_txtWidth").val();
            if( val && !isNaN(val) || (val.slice(-2) =='px') || (val.slice(-2) =='em') || (val.slice(-2) =='pt') || (val.slice(-1)=='%') )
               this._customTableDialog.find("#" + this._rteId + "_ddlAlignment").ejDropDownList({ enabled:true });
            else
               this._customTableDialog.find("#" + this._rteId + "_ddlAlignment").ejDropDownList({ enabled:false });
        },
        //-------------------- Event Wire-up -------------------------//
        _wireEvents: function () {
            var _iframe = $(this._getDocument());
            if (!ej.isNullOrUndefined(this._createTable)) {
                this._on(this._createTable, "mouseenter", "div.e-rte-tablecell", this._tableCellStart);
                this._on(this._createTable, "mousemove", "div.e-rte-tablecell", this._tableCellSelect);
                this._on(this._createTable, "mouseleave", "div.e-rte-table", this._tableCellLeave);
                this._on(this._createTable, "mousedown", "div.e-rte-tablecell", this._tableCellDown);
                this._on($(document), "click", this._documentClick);
            }
            this._on(_iframe, "focus", this._iframeFocus);
            this._on(_iframe, "keydown", this._iframeKeyDown);
            this._on(_iframe, "keypress", this._iframeKeypress);
            this._on(_iframe, "keyup", this._iframeKeyUp);
            this._on(_iframe, "mouseup", this._iframeMouseUp);
            this._on(_iframe, "mousedown", this._iframeMouseDown);
            this._on(_iframe, "focusout", this._iframeFocusOut);
            if(!ej.isNullOrUndefined(this._customTableDialog))
            this._on(this._customTableDialog.find("#" + this._rteId + "_txtWidth"), "focusout", this._widthFocusOut);

        },

        _unwireEvents: function () {
            var _iframe = $(this._getDocument());
            if (!ej.isNullOrUndefined(this._createTable)) {
                this._off(this._createTable.find("div.e-rte-tablecell"), "mousemove");
                this._off(this._createTable.find("div.e-rte-table"), "mouseleave");
                this._off(this._createTable.find("div.e-rte-tablecell"), "mousedown");
                this._off($(document), "click");
            }
            this._off(_iframe, "focus");
            this._off(_iframe, "keydown");
            this._off(_iframe, "keyup");
            this._off(_iframe, "mouseup");
            this._off(_iframe, "mousedown");
            this._off(_iframe, "blur");
            if (!ej.isNullOrUndefined(this._customTableDialog))
            this._off(this._customTableDialog.find("#" + this._rteId + "_txtWidth"), "focusout");
        },

        /*----------------------- Event handler------------------------------------------*/
        _onChange: function () {
		_prevhtml = $.trim(this.value()).replace(/<\/(p|li|ul|ol|h[1-6]|table|tr|td|th)>/gi, "</$1>\n").replace(/<(ul|ol)([^>]*)><li/gi, "<$1$2>\n<li").replace(/<br \/>/gi, "<br />\n").replace(/\n$/, "").replace(/&nbsp;/g, ' ');
		if( _prevhtml!== this.getHtml()){
            this._updateValue();
            var args = { text: this._getText(), htmlText: this.getHtml() };
            this._trigger("change", args);
			}
        },

        /*----------------------- Public Methods-----------------------------------------*/

        //Disables toolbar item
        /**
        * disable the RTE toolbar item.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.disableToolbarItem("rteSamplecreateTable"); // disable toolbar item
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("disableToolbarItem","rteSamplecreateTable");// disable toolbar item        
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        disableToolbarItem: function (id) {
            !ej.isNullOrUndefined(id) && this._toolBarObj.disableItemByID(id);
        },
        /**
        * enable  the RTE toolbar item.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	            
        *      &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
         * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.enableToolbarItem("rteSamplecreateTable"); // enable toolbar item
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("enableToolbarItem","rteSamplecreateTable");// enable toolbar item        
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //To enable toolbar item
        enableToolbarItem: function (id) {
            !ej.isNullOrUndefined(id) && this._toolBarObj.enableItemByID(id);
        },
        /**
        * removes  the RTE toolbar item.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	          
        *        &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
      * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.removeToolbarItem("rteSamplecreateTable"); // remove toolbar item
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("removeToolbarItem","rteSamplecreateTable");// remove toolbar item        
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //Removes toolbar item
        removeToolbarItem: function (id) {
            !ej.isNullOrUndefined(id) && this._toolBarObj.removeItemByID(id);
        },
        /**
        * Displays the RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	             
        *     &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
         * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.show(); // shows rte
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("show");// shows rte       
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //Displays the control
        show: function () {
            this._rteWapper.show();
        },
        /**
        * Hides the RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	                 
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
       * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.hide(); // hides rte
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("hide");// hides rte       
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //Hides the control
        hide: function () {
            this._rteWapper.hide();
        },
        /**
        * gets the HTML string from the RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	                
        *  &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.getHtml(); // gets the html string from rte
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("getHtml");// getHtml from rte        
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        getHtml: function () {
            var _html = this._getDocument().body.innerHTML;
            _html = $.trim(_html).replace(/<\/(p|li|ul|ol|h[1-6]|table|tr|td|th)>/gi, "</$1>\n").replace(/<(ul|ol)([^>]*)><li/gi, "<$1$2>\n<li").replace(/<br \/>/gi, "<br />\n").replace(/\n$/, "").replace(/&nbsp;/g, ' ');
            return _html;
        },
        /**
        * sets the HTML string from the RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	              
        *   &lt;/textarea &gt;
        * &lt;script&gt;
         * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.setHtml("The Rich Text Editor (RTE) control is an easy to render in client side."); // sets the html string to rte
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("setHtml","The Rich Text Editor (RTE) control is an easy to render in client side.");// sets the html string to rte    
	       
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //Set the 
        setHtml: function (value) {
            this._getDocument().body.innerHTML = value;
        },
        /**
        * gets the content as string from the RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	               
        *   &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
       * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.getText(); // gets the content as string from rte
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("getText");// getText from rte        
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //Get plan text
        getText: function () {
            return this._getText();
        },
        /**
        * gets the content as string from the RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	             
        *     &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.executeCommand("bold", true); // gets the content as string from rte
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //Execute Command
        executeCommand: function (cmdName, args) {
            if (this._trigger("execute", { commandName: cmdName }))
                return false;
            var anchor = "";
            if (cmdName == "underline") {
                if (window.getSelection) {
                    anchor = $(this._getWindow().getSelection().anchorNode).parents("a");
                    if (anchor.length > 0) {
                        $(anchor).css("text-decoration", ($(anchor).css("text-decoration") == "none") ? "underline" : "none");
                        return;
                    }
                }
            }
            else if (cmdName.toLowerCase() == "inserthtml") {
                if (this._isIE()) {
                    this._pasteHtml(args);
                }
                else
                    this._getDocument().execCommand(cmdName, false, args);
                return;
            }
            //this._focus();
            this._getDocument().execCommand(cmdName, false, args);
            this._setBackupData();
        },
        /**
        * focus the RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	               
        *   &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
         * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.focus(); // gets the content as string from rte
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("focus");// enable toolbar item        
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //focus the editable area.
        focus: function () {
            this._focus();
        },
        /**
        * gets the command status of the given RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt;                   
        *  &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
         * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.getCommandStatus(arguments); // gets the content as string from rte
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //get the command status
        getCommandStatus: function (value) {
            if (ej.isNullOrUndefined(value) || value != "")
                return this._getCommandStatus(value);
        },
        /**
        * gets the command status of the given RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
    * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.getSelectedHtml(); // gets the content as string from rte
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("getSelectedHtml");// getSelectedHtml from rte        
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //currently selected text html
        getSelectedHtml: function () {
            return this._getSelectedHtmlString();
        },
        
        //Tables methods
        //insert table Rows
        insertRow: function (before, cell) {
            //$("#rte1_Iframe").contents().find("#test").parents("tr").find("td").length
            var seletedCell = ej.isNullOrUndefined(cell) ? this._getSelectedNode() : cell;
            var colTemplate = "<td contentEditable='true'><br _moz_dirty=''/></td>", curRow = $(seletedCell).closest("tr");
            var cols = curRow.find("td").length;
            var newRow = $("<tr>" + Array(cols + 1).join(colTemplate) + "</tr>");
            before ? newRow.insertBefore(curRow) : newRow.insertAfter(curRow);
            curRow.find("td:first").focus();
        },
        
        //Insert table Columns
        insertColumn: function (before, cell) {
            var seletedCell = ej.isNullOrUndefined(cell) ? this._getSelectedNode() : cell;
            var colTemplate = "<td contentEditable='true'><br _moz_dirty=''/></td>", curRow = $(seletedCell).closest("tr"), curCell;
            var allRows = curRow.closest("table").find("tr");
            var colIndex = curRow.find("td").index(seletedCell);
            for (var i = 0; i < allRows.length; i++) {
                curCell = $(allRows[i]).find("td")[colIndex];
                before ? $(colTemplate).insertBefore(curCell) : $(colTemplate).insertAfter(curCell);
            }
        },
       
        //Remove table Row
        removeRow: function (cell) {
            var seletedCell = ej.isNullOrUndefined(cell) ? this._getSelectedNode() : cell;
            curRow = $(seletedCell).closest("tr").remove();
        },
      
        //Remove table Column
        removeColumn: function (cell) {
            var seletedCell = ej.isNullOrUndefined(cell) ? this._getSelectedNode() : cell;
            var curRow = $(seletedCell).closest("tr");
            var allRows = curRow.closest("table").find("tr");
            var colIndex = curRow.find("td").index(seletedCell);
            for (var i = 0; i < allRows.length; i++) {
                $($(allRows[i]).find("td")[colIndex]).remove();
            }
        },
        
        //Remove table 
        removeTable: function (table) {
            var seletedTable = ej.isNullOrUndefined(table) ? $(this._getSelectedNode()).closest("table") : table;
            $(seletedTable).remove();
        }
    });

    ej.RTE.Locale = {};

    ej.RTE.Locale["en-US"] = {
        bold: "Bold",
        italic: "Italic",
        underline: "Underline",
        strikethrough: "Strikethrough",
        superscript: "Superscript",
        subscript: "Subscript",
        justifyCenter: "Align text center",
        justifyLeft: "Align text left",
        justifyRight: "Align text right",
        justifyFull: "Justify",
        unorderedList: "Insert unordered list",
        orderedList: "Insert ordered list",
        indent: "Indent",
        outdent: "Outdent",
        cut: "Cut",
        copy: "Copy",
        paste: "Paste",
        paragraph: "Paragraph",
        undo: "Undo",
        redo: "Redo",
        upperCase: "Upper Case",
        lowerCase: "Lower Case",
        clearAll: "Clear All",
        clearFormat: "Clear Format",
        createLink: "Insert/Edit hyperlink",
        image: "Insert image",
        video: "Insert video",
        embedVideo: "Paste your embed code below",
        viewHtml: "View HTML",
        fontName: "Select font family",
        fontSize: "Select font size",
        fontColor: "Select color",
        format: "Format",
        backgroundColor: "Background color",
        style: "Styles",
        deleteAlert: "Are you sure you want to clear all the contents?",
        copyPastAlert: "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.",
        videoError: "The text area can not be empty",
        imageWebUrl: "Web Address",
        imageAltText: "Image description",
        dimensions: "Dimensions",
        constrainProportions: "Constrain Proportions",
        linkWebUrl: "Web Address",
        linkText: "Text",
        linkToolTip: "ToolTip",
        linkOpenInNewWindow: "Open link in new window",
        tableColumns: "No.of Columns",
        tableRows: "No.of Rows",
        tableWidth: "Table width",
        tableHeight: "Table height",
        tableCellSpacing: "Cell spacing",
        tableCellPadding: "Cell padding",
        tableBorder: "Border",
        tableCaption: "Caption",
        tableAlignment: "Alignment",
        dialogUpdate: "Update",
        dialogInsert: "Insert",
        dialogCancel: "Cancel",
        dialogOk: "Ok",
        createTable: "Create table",
        addColumnLeft: "Add column on the left",
        addColumnRight: "Add column on the right",
        addRowAbove: "Add row above",
        addRowBelow: "Add row below",
        deleteRow: "Delete the row",
        deleteColumn: "Delete the column",
        deleteTable: "Delete the table",
        customTable: "Create custom table...",
        characters: "Characters"
    };

})(jQuery, Syncfusion);;