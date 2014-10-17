/*!
*  filename: ej.toolbar.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/*!
*  filename: ej.toolbar.js
*  version : 12.1
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Toolbar elements
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
	* @class ejToolbar
	* @requires jQuery
	* @requires jquery-1.10.2.min.js
    * @requires ej.core.js
    * @requires ej.data.js
    * @requires ej.toolbar.js
	* @classdesc Custom Design for Toolbar control.
	* @example 
	* &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
	* // Create Toolbar
    *  $("#toolbar1").ejToolbar();	
	* &lt;/script&gt;
	*/
    // Example plugin creation code
    // ejSample is the plugin name 
    // "ej.Sample" is "namespace.className" will hold functions and properties

    ej.widget("ejToolbar", "ej.Toolbar", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _setFirst: false,
        //Root Css Class
        _rootCSS: "e-toolbar",

        // default model
        defaults: {
            /// <summary>This Contains default property of toolbar </summary>
			/**		
			* Specifies the height of the Toolbar.
			* @default 28
			* @type {number}
			* @example 
			* &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			* //To set height API value during initialization  
			* 	$("#toolbar1").ejToolbar({ height: 30 });					 
			* &lt;/script&gt;
			 * @memberof ejToolbar
			* @instance
			*/
            height: "",
			/**		
			* Specifies the width of the Toolbar.
			* @default 100
			* @type {number}
			* @example 
			* &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			* //To set width API value during initialization  
			* 	//To set width API value 
			* 	$("#toolbar1").ejToolbar({ width: 30 });	
			* &lt;/script&gt;
			* @instance
			*/
            width:"",
			/**		
			* Specifies the Toolbar control state.
			* @default true
			* @type {boolean}
			* @example 
			* &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			* // Enable Toolbar on initialization. 
			* 	//To set enabled API value 
			* 	$("#toolbar1").ejToolbar({ enabled:  true });			
			* &lt;/script&gt;
			 * @memberof ejToolbar
			* @instance
			*/
            enabled: true,
			/**		
			* Specifies the to show or hide.
			* @default false
			* @type {boolean}
			* @example 
			* &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			* // Hide Toolbar on initialization. 
			* 	//To set hide API value 
			* 	$("#toolbar1").ejToolbar({  hide: true });			
			* &lt;/script&gt;
			 * @memberof ejToolbar
			* @instance
			*/
            hide: false,
			/**		
			* Specifies the to enableSeparator.
			* @default false
			* @type {boolean}
			* @example 
			* &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			* //specifies enableSeparator Toolbar on initialization. 
			* 	//To set enableSeparator API value 
			* 	$("#toolbar1").ejToolbar({enableSeparator:true});			 
			* &lt;/script&gt;
			 * @memberof ejToolbar
			* @instance
			*/
            enableSeparator: false,
			/**		
			* Specifies the to toolbar orientation.See {@link orientation}
			* @default Horizontal
			* @type {Enum | String}
			* @example 
			* &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			* // Specifies orientation of  Toolbar on initialization. 
			* 	//To set orientation API value 
			* 	$("#toolbar1").ejToolbar({ orientation: ej.Orientation.Horizontal }); 
			* &lt;/script&gt;
			 * @memberof ejToolbar
			* @instance
			*/
            orientation: "horizontal",
			/**		
			* Specifies enableRTL property for the Toolbar during initialization.
			* @default false
			* @type {boolean}
			* @example 
			* &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			* // to set enableRTL Toolbar on initialization. 
			* 	//To set enableRTL API value 
			* 	$("#toolbar1").ejToolbar({ enableRTL: false });			 
			* &lt;/script&gt;
			* @memberof ejToolbar
			* @instance
			*/
            enableRTL: false,
			/**		
			* Specifies showRoundedCorner property for the Toolbar during initialization.
			* @default false
			* @type {boolean}
			* @example 
			* &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			* // to set showRoundedCorner for Toolbar on initialization. 
			* 	//To set showRoundedCorner API value 

			* 	$("#toolbar1").ejToolbar({ showRoundedCorner: true });			 
			* &lt;/script&gt;
			 * @memberof ejToolbar
			* @instance
			*/
            showRoundedCorner: false,
				/**		
			* Specifies dataSource value for the Toolbar during initialization.
			* @default null
			* @type {ObjectArray}
			* @example 
			* &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			* // to set dataSource value during initialization. 
			* 	//To set dataSource  API value 
			* 	items = [{ edid: "1", spriteCssClass: "editTools cursor", text: "Cursor" },
			*{ edid: "2", spriteCssClass: "editTools select", text: "Select" },
			*{ edid: "3", spriteCssClass: "editTools move", text: "Move" },
			*{ edid: "4", spriteCssClass: "editTools rectselect", text: "Rectangle Select" }];

			*$("#toolbar1").ejToolbar({ dataSource:  items}); 
			* &lt;/script&gt;
			* @memberof ejToolbar
			* @instance
			*/
            dataSource: null,
				/**		
			* Specifies Specifies the query to retrieve the data from the online server. The query is used only when the online dataSource is used.
			* @default null
			* @type {object}
			* @example 
			* &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			* // To set query API value on initialization. 
			* 	//To set query API value.
			* 	// DataManager creation.
			* var dataManger = ej.DataManager({
			* url: "http://mvc.syncfusion.com/Services/Northwnd.svc/"
			*});
			*  // Query creation.
			*var query = ej.Query()
			*		.from("Orders").take(6);
			*			$("#toolbar1").ejToolbar(
			*                {
            *              dataSource: dataManger,
            *               query: query
            *         });
			* &lt;/script&gt;
			* @memberof ejToolbar
			* @instance
			*/
            query: null,
				/**		
			* Specifies the mapping fields for the data items of the Toolbar
			* @default null
			* @type {string}
			* @example 
			* &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			* // To set fields API value during initialization. 
			* 	//To set the fields API value.
			* 	items = [{ edid: "1", spriteCssClass: "editTools cursor", text: "Cursor" },
			*  { edid: "2", spriteCssClass: "editTools select", text: "Select" },
			*  { edid: "3", spriteCssClass: "editTools move", text: "Move" },
			*  { edid: "4", spriteCssClass: "editTools rectselect", text: "Rectangle Select"
			*  }];
			*$("#toolbar1").ejToolbar(
			*		{
			*			dataSource:  items,
			*           fields:  { id: "empid",spriteCssClass: "spriteCss"}
            *         });
			* &lt;/script&gt;
			* @memberof ejToolbar
			* @instance
			*/
            fields: /** @lends ejToolbar# */ {
				/**		
                 * Defines id for the tag.
				 * @alias ejToolbar#fields->id
				 * @type String
                 */
                id:"id",
				/**		
                 * Defines the tooltip text for the tag.
				 * @alias ejToolbar#fields->tooltipText
				 * @type String
                 */
                tooltipText:"tooltipText",
				/**		
                 * Defines the imageURL for the image location. 
				 * @alias ejToolbar#fields->imageUrl
				 * @type String
                 */
                imageUrl:"imageUrl",
				/**		
                 * Defines the text content for the tag.
				 * @alias ejToolbar#fields->text
				 * @type String
                 */
                 text:"text",
				/**		
                 * Defines the image attributes such as height, width, styles and so on.
				 * @alias ejToolbar#fields->imageAttributes
				 * @type String
                 */
                imageAttributes:"imageAttributes",
				/**		
                 * Defines the sprite css for the image tag.
				 * @alias ejToolbar#fields->spriteCssClass
				 * @type String
                 */
                spriteCssClass:"spriteCSS",
				/**		
                 * Defines the html attributes such as id, class, styles for the item.
				 * @alias ejToolbar#fields->htmlAttributes
				 * @type Object
                 */
                htmlAttributes: "htmlAttributes",
				group: null
            },
			/**		
			* Sets the root class for Toolbar control theme
			* @default ""
			* @type {string}
			* @example 
			* &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			* // Sets the root class for Toolbar control theme on initialization. 
			* 	//To set the cssClass API value.
			* 	$("#toolbar1").ejToolbar({cssClass: "gradient-lime"});
			 * &lt;/script&gt;
			* @memberof ejToolbar
			* @instance
			*/
            cssClass: "",
			/**     
			 * Fires after Toolbar control is created.
			 * @event
			 * @name ejToolbar#create		
			 * @param {Object} argument Event parameters from Toolbar    
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the Toolbar model
			 * @param {string}  argument.type returns the name of the event
			 * @example 
			 * &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			 * //create event for Toolbar
             *  $("#toolbar1").ejToolbar({
			 *  create: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejToolbar
			 * @instance
			 */		
            create: null,
			/**     
			 * Fires after Toolbar control is clicked.
			 * @event
			 * @name ejToolbar#click		
			 * @param {Object} argument Event parameters from Toolbar    
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the Toolbar model
			 * @param {string}  argument.type returns the name of the event
			 * @param {object} argument.target  returns the target of the current object.
			 * @param {object} argument.currentTarget returns the target of the current object. 
			 * @param {boolean}  argument.status return the Toolbar state
			 * @example 
			 * &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			 * //create event for Toolbar
             *  $("#toolbar1").ejToolbar({
			 *  click: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejToolbar
			 * @instance
			 */	
            click: null,
					/**     
			 * Fires after Toolbar control is itemHovered.
			 * @event
			 * @name ejToolbar#itemHover		
			 * @param {Object} argument Event parameters from Toolbar    
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the Toolbar model
			 * @param {string}  argument.type returns the name of the event
			 * @param {object} argument.target  returns the target of the current object.
			 * @param {object} argument.currentTarget returns the target of the current object. 
			 * @param {boolean}  argument.status return the Toolbar state
			 * @example 
			 * &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			 * //itemHover event for Toolbar
             *  $("#toolbar1").ejToolbar({
			 *  itemHover: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejToolbar
			 * @instance
			 */
            itemHover: null,
			/**     
			 * Fires after Toolbar control is itemLeave.
			 * @event
			 * @name ejToolbar#itemLeave		
			 * @param {Object} argument Event parameters from Toolbar    
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the Toolbar model
			 * @param {string}  argument.type returns the name of the event
			 * @param {object} argument.target  returns the target of the current object.
			 * @param {object} argument.currentTarget returns the target of the current object. 
			 * @param {boolean}  argument.status return the Toolbar state
			 * @example 
			 * &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			 * //itemLeave event for Toolbar
             *  $("#toolbar1").ejToolbar({
			 *  itemLeave: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejToolbar
			 * @instance
			 */
            itemLeave: null,
				 /**    
			 * Fires when the Toolbar is destroyed successfully.
			 * @event
			 * @name ejToolbar#destroy 	
			 * @param {Object} argument Event parameters from Toolbar    
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the Toolbar model
			 * @param {string}  argument.type returns the name of the event
			 * @example 
			 * &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
			 * //destroy event for Toolbar

             * $("#toolbar1").ejToolbar({
             *    destroy: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejToolbar
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
            enabled: "boolean",
            hide: "boolean",
            enableSeparator: "boolean",
            orientation: "enum",
            enableRTL: "boolean",
            showRoundedCorner: "boolean",
            dataSource: "data",
            query: "data",
            fields: "data",
            cssClass: "string"
        },

        // sample public function
		/**
        * To hide the Toolbar 		
		* @return jQuery
		* @example 
		* &lt;div id="toolbar1"&gt;
    *&lt;ul&gt;
    *    &lt;li id="Left" title="Left"&gt;
    *        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
    *   &lt;/li&gt;
    *    &lt;li id="Center" title="Center"&gt;
    *        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Right" title="Right"&gt;
    *        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Justify" title="Justify"&gt;
    *        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
    *&lt;ul&gt;
    *    &lt;li id="Bold" title="Bold"&gt;
    *        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="Italic" title="Italic"&gt;
    *        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="StrikeThrough" title="Strike Through"&gt;
    *        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *    &lt;li id="UndeLine" title="UnderLine"&gt;
    *        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
    *    &lt;/li&gt;
    *&lt;/ul&gt;
	*&lt;/div&gt;
	* &lt;script&gt;
		* &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		* $("#toolbar1").ejToolbar("hide");// to hide the toolbar
		* &lt;/script&gt;
		* @memberof ejToolbar
		* @instance
         */
        hide: function () {
            /// <summary>This will set hide function of toolbar </summary>
            if (!this.model.enabled) return false;
            this.element.css("display", "none");
        },
		/**
        * To show the Toolbar 		
		* @return jQuery
		* @example 
		* &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		* 	$("#toolbar1").ejToolbar();
		* $("#toolbar1").ejToolbar("show");// to show the toolbar
		* &lt;/script&gt;
		* @memberof ejToolbar
		* @instance
         */
        show: function () {
            /// <summary>This will set show function of toolbar </summary>
            if (!this.model.enabled) return false;
            this.element.css("display", "inline-block");
        },
		
		/**
         * Create the Toolbar widget
		 * @private
         */		 

        // constructor function
        _init: function () {
            /// <summary>This will set initialization of toolbar </summary>
            if (this.model.dataSource != null) {
                this._generateTemplate();
            }
            this._initialize();

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
                    case "height":
                        this._setHeight(options[option]);
                        break;
                    case "width":
                        this._setWidth(options[option]);
                        break;
                    case "enabled":
                        this._controlStatus(options[option]);
                        break;
                    case "hide":
                        this._controlVisibleOptions(options[option]);
                        break;
                    case "orientation":
                        this._setOrientation(options[option]);
                        break;
                    case "enableRTL":
                        this._enableRTL(options[option]);
                        break;
                    case "showRoundedCorner":
                        this._roundedCorner(options[option]);
                        break;
                    case "cssClass":
                        this._setSkin(options[option]);
                        break;
				    case "fields":
                    case "query":
                    case "dataSource":
                       this._refreshTagItems(option, options[option]);
                        break;
                }
            }
        },
		_refreshTagItems:function(key,value){
				this.model[key] = value;
				this.element.empty();
                this._generateTemplate();
				this._initialize();
		},
		/**
         * To configure the height		
		 * @private
         */	 
        _setHeight: function (val) {
            /// <summary>This will set Text property of button </summary>
            this.element.css('height',val);
        },
		/**
         * To configure the width		
		 * @private
         */	 
        _setWidth: function (val) {
            /// <summary>This will set Text property of button </summary>
            this.element.css('width',val);
        },
		/**
         * To configure the orientation		
		 * @private
         */	
        _setOrientation: function (value) {
            /// <summary>This will set orientation of toolbar </summary>
            if (value != ej.Orientation.Vertical) {
                this.element.removeClass(this.model.cssClass);
                this.element.addClass("e-toolbarspan " + this.model.cssClass);
                this.itemsContainer.removeClass("e-ul e-vertical");
                this.itemsContainer.addClass("e-ul e-horizontal");
                //this.items.removeClass("e-vertical");
                //this.items.addClass("e-horizontal");

            } else {
                this.element.removeClass("e-toolbarspan " + this.model.cssClass);
                this.element.addClass(this.model.cssClass);
                this.itemsContainer.removeClass("e-ul e-horizontal");
                this.itemsContainer.addClass("e-ul e-vertical");
                //this.items.removeClass("e-horizontal");
                //this.items.addClass("e-vertical");
            }
            this.items.children("img").addClass("e-align e-spriteimg");
            this.items.children("span").addClass("e-align e-spriteimg");
            this.items.children("div").addClass("e-align e-spriteimg");
            this.items.addClass("e-tooltxt");
        },
		/**
         * To configure the custom theme for Toolbar using cssClass property			
		 * @private
         */	
        _setSkin: function (skin) {
            this.element.removeClass(this.model.cssClass);
            this.itemsContainer.removeClass(this.model.cssClass);
            this.items.removeClass(this.model.cssClass);
            this.element.addClass(skin);
            this.itemsContainer.addClass(skin);
            this.items.addClass(skin);
        },
		/**
        * destroy the Toolbar widget
		* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
		* @alias destroy
		* @return jQuery
		* @example 
	   * &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		* &lt;script&gt;
		* //Initialize the Toolbar object.
		*$("#toolbar1").ejToolbar();
		* var toolbarObj = $("#toolbar1").data("ejToolbar");
        *  toolbarObj.destroy();       //Calls the destroy method of the Toolbar.
		* &lt;/script&gt;
				
		* @memberof ejToolbar
		* @instance
         */	 
        _destroy: function () {
            /// <summary>This will destroy toolbar </summary>
            this.element.removeClass("e-widget e-horizontal " + this.model.cssClass);
            this.element.removeClass("e-vertical " + this.model.cssClass);
            this.itemsContainer.removeClass("e-horizontal " + this.model.cssClass);
            this.itemsContainer.removeClass("e-vertical " + this.model.cssClass);
            this.items.removeClass("e-horizontal " + this.model.cssClass);
            this.items.removeClass("e-vertical " + this.model.cssClass);
        },
		/**
         * To initialize the ToolBar		
		 * @private
         */	 
        _initialize: function () {
            /// <summary>This will initialize the toolbar </summary>
            /*Rendering the controls*/
            $(this.element).attr({ "role": "toolbar", "tabindex": "0" });
            var liList = $($(this.element).children()).find("li");
            this._focusEnable = true;
            this._renderControl();
            this._roundedCorner(this.model.showRoundedCorner);
            this._wireEvents();
            this._controlVisibleOptions(this.model.hide);
            this._enableRTL(this.model.enableRTL);
            this._controlStatus(this.model.enabled);
        },
		/**
         * To configure controlVisibleOption to show/hide the toolbar		
		 * @private
         */	
        _controlVisibleOptions: function (value) {
            /*Enable Disable Option*/
            value != false ? this.hide() : this.show();
        },
		/**
         * To configure controlStatus ie., to enable/disable the toolbar	
		 * @private
         */	
        _controlStatus: function (value) {
            //disable status
            value != true ? this.disable() : this.enable();
        },
		 /**
         * To enable or disable the rounded corner behaviour for the toolbar		
		 * @private
         */	
        _roundedCorner: function (value) {
            value != false ? this.element.addClass('e-corner-all') : this.element.removeClass('e-corner-all');
        },
		/**
         * To generate Template for the ToolBar control		
		 * @private
         */	
        _generateTemplate: function () {
            var proxy = this, queryPromise;
            this.element.css("visibility","hidden");
            if (this.model.dataSource instanceof ej.DataManager) {
                queryPromise = this.model.dataSource.executeQuery(this.model.query);
                queryPromise.done(function (e) {
                    if (proxy.model.fields.group) {
                        proxy._generateGroup(e.result);
                    }
                    else {
                        proxy.itemsSource = e.result;
                        proxy.element.append(proxy._generateTagitems());
                    }
                    proxy._initialize();
                    proxy.element.css("visibility", "visible");
                });
            } else {
                if (this.model.fields.group) {
                    proxy._generateGroup(proxy.model.dataSource);
                }
                else {
                    proxy.itemsSource = proxy.model.dataSource;
                    proxy.element.append(proxy._generateTagitems());
                }
                proxy.element.css("visibility", "visible");
            }
        },
        _generateGroup:function(value)
        {
            var proxy = this;
            var y = -1;
            var groupArray = [];
            for (var i = 0; i < value.length; i++) {
                if (this._isNewGroup(value[i].group, groupArray)) {
                    groupArray[++y] = value[i].group;
                    var index = -1;
                    proxy.itemsSource = [];
                    for (var x = i; x < value.length; x++) {
                        if (value[i].group == value[x].group) {
                            proxy.itemsSource[++index] = value[x];
                        }
                    }
                    proxy.element.append(proxy._generateTagitems());
                }
            }
            
        },
        _isNewGroup: function (value, group) {
            if (!group)
                return true;
            for (var i = 0; i < group.length; i++) {
                if (value == group[i])
                    return false;
            }
            return true;
        },
        //
		/**
         * Render Section For Toolbar	
		 * @private
         */			
        _renderControl: function () {
            /// <summary>This will render the toolbar </summary>
            this.element.addClass("e-widget");
            this._renderToolbarItems();
            this._setOrientation(this.model.orientation);
            this._renderToolbarSeparator();
            this._setHeight(this.model.height);
            this._setWidth(this.model.width);
        },
		/**
         * Render Section For ToolbarItems	
		 * @private
         */	
        _renderToolbarItems: function () {
            this.target = this.element[0];
            this.itemsContainer = this.element.children("ol,ul");
            this.itemsContainer.children("ol,ul").remove();
            this.items = this.itemsContainer.children('li');
            for (var i = 0; i < this.items.length; i++) {
                if (ej.isNullOrUndefined($(this.items[i]).attr("title")))
                    $(this.items[i]).attr("aria-label", this.items[i].id);
            }
            this._liCount = this.items.length;
        },
		/**
         * To generate Tag items for the ToolBar control		
		 * @private
         */	
        _generateTagitems: function () {
            var list, i;
            list = this.itemsSource;
            this.ultag = ej.buildTag('ul');
            for (i = 0; i < list.length; i++) {
                this.ultag.append(this._generateLi(list[i]));
            }
            return this.ultag;
        },
		/**
         * To generate Li  for the ToolBar control		
		 * @private
         */	
        _generateLi: function (toolbarItem) {
            var litag, imgtag, divtag, i;
            litag = ej.buildTag('li');
            if (toolbarItem[this.model.fields.id])
                litag.attr('id', toolbarItem[this.model.fields.id]);
            if (toolbarItem[this.model.fields.tooltipText])
                litag.attr('title', toolbarItem[this.model.fields.tooltipText]);
            if ((toolbarItem[this.model.fields.imageUrl]) && (toolbarItem[this.model.fields.imageUrl] != "")) {
                //Creating the image tag
                imgtag = ej.buildTag('img.e-align', '', {}, { 'src': toolbarItem[this.model.fields.imageUrl], 'alt': toolbarItem[this.model.fields.text] });
                if ((toolbarItem[this.model.fields.imageAttributes]) && (toolbarItem[this.model.fields.imageAttributes] != "")) {
                    for (i = 0; i < toolbarItem[this.model.fields.imageAttributes].length; i++) {
                        $.each(toolbarItem[this.model.fields.imageAttributes][i], function (index, element) {
                            imgtag.attr(index, element);
                        });
                    }
                }
                litag.append(imgtag);
            }
            if ((toolbarItem[this.model.fields.spriteCssClass]) && (toolbarItem[this.model.fields.spriteCssClass] != "")) {
                //Creating the Sprite image tag
                divtag = ej.buildTag('div.e-align ' + toolbarItem[this.model.fields.spriteCssClass] + ' e-spriteimg');
                litag.append(divtag);
            }
            if ((toolbarItem[this.model.fields.text]) && (toolbarItem[this.model.fields.text] != "")) {
                //Creating text Content inside the  tag
                litag.append(toolbarItem[this.model.fields.text]);
            }
            if ((toolbarItem[this.model.fields.htmlAttributes]) && (toolbarItem[this.model.fields.htmlAttributes] != "")) {
                for (i = 0; i < toolbarItem[this.model.fields.htmlAttributes].length; i++) {
                    $.each(toolbarItem[this.model.fields.htmlAttributes][i], function (index, element) {
                        litag.attr(index, element);
                    });
                }
            }
            return litag;
        },
	    /**
         * To renderToolbarSeparator for the ToolBar control		
		 * @private
         */	
        _renderToolbarSeparator: function () {
            /// <summary>This will render toolbar items </summary>
            /*Adding separator to each group of elements*/
            var i;
            if (this.model.enableSeparator) {
                for (i = 0; i < this.itemsContainer.length - 1; i++) {
                        $(this.itemsContainer[i]).addClass("e-separator");
                }
                if (this.model.enableRTL) {
                    if (this.itemsContainer.length == 1) {
                        for (i = 1; i < this.itemsContainer[0].children.length; i++) {
                            if (!this.model.fields.group || !this.model.dataSource || !this.model.dataSource[i].group)
                                $(this.itemsContainer[0].children[i]).addClass("e-separator");
                        }
                    }
                }
                else {
                    if (this.itemsContainer.length == 1) {
                        for (i = 0; i < this.itemsContainer[0].children.length - 1; i++) {
                            if (!this.model.fields.group || !this.model.dataSource || !this.model.dataSource[i].group)
                                $(this.itemsContainer[0].children[i]).addClass("e-separator");
                        }
                    }
                }
                
            }
        },
		/**
         * To enableRTL for the ToolBar control		
		 * @private
         */	
        _enableRTL: function (value) {
            if (value) {
                this.element.addClass('e-rtl');
                this.items.addClass('e-comnrtl');
                if (this.model.orientation == ej.Orientation.Horizontal) {
                    this.itemsContainer.addClass('e-comnrtl');
                }
            } else {
                this.element.removeClass('e-rtl');
                this.items.removeClass('e-comnrtl');
                if (this.model.orientation == ej.Orientation.Horizontal) {
                    this.itemsContainer.removeClass('e-comnrtl');
                }
            }
            this.model.enableRTL = value;
            this._renderToolbarSeparator();
        },
			/**
        * To disable an item the Toolbar 		
		* @return jQuery
		* @example 
		* &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		*$("#toolbar1").ejToolbar();
		* $("#toolbar1").ejToolbar("disableItem",$("li")[3]);// to disable the third item in the toolbar
		* &lt;/script&gt;
		* @memberof ejToolbar
		* @instance
         */
        //Disables the toolbarItem of given index
        disableItem: function (lielement) {
            /// <summary>This will disable toolbar item </summary>
            var current = $(lielement);
            if ((current == null) || (current.length <= 0)) {
                return;
            }
            if (!current.hasClass("e-disable")) {
                current.addClass("e-disable").attr("aria-disabled", true).removeAttr("aria-label");
            }
        },
        //Enables the toolbarItem of given index
				/**
        * To enable an item the Toolbar 		
		* @return jQuery
		* @example 
		* &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		*$("#toolbar1").ejToolbar();
		* $("#toolbar1").ejToolbar("enableItem",$("li")[3]);// to enable the third item in the toolbar
		* &lt;/script&gt;
		* @memberof ejToolbar
		* @instance
         */
        enableItem: function (lielement) {
            /// <summary>This will enable toolbar item </summary>
            var current = $(lielement);
            if ((current == null) || (current.length <= 0)) {
                return;
            }
            current.removeClass("e-disable").attr("aria-disabled", false);
        },
        //Disables the toolbarItem of given index
			/**
        * To Disable the Toolbar item by item id in the Toolbar 		
		* @return jQuery
		* @example 
		* &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		*$("#toolbar1").ejToolbar();
		*$("#toolbar1").ejToolbar("disableItemByID","left"); //Disable the Toolbar item by item id
		* &lt;/script&gt;
		* @memberof ejToolbar
		* @instance
         */
        disableItemByID: function (liid) {
            /// <summary>This will disable toolbar item by id </summary>
            var lielement;
            lielement = this.itemsContainer.find("li#" + liid);
            if ((lielement == null) || (lielement.length <= 0)) {
                return;
            }
            this.disableItem(lielement);
        },
			/**
        * To Disable the Toolbar item by item id in the Toolbar 		
		* @return jQuery
		* @example 
		* &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		*$("#toolbar1").ejToolbar();
		*$("#toolbar1").ejToolbar("enableItemByID","left"); //Disable the Toolbar item by item id
		* &lt;/script&gt;
		* @memberof ejToolbar
		* @instance
         */
        enableItemByID: function (liid) {
            /// <summary>This will disable toolbar item by id </summary>
            var lielement;
            lielement = this.itemsContainer.find("li#" + liid);
            if ((lielement == null) || (lielement.length <= 0)) {
                return;
            }
            this.enableItem(lielement);
        },
        //Disables all the toolbar item
		
			/**
        * To Disable all item in the Toolbar 		
		* @return jQuery
		* @example 
		* &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		*$("#toolbar1").ejToolbar();
		*$("#toolbar1").ejToolbar("disable"); //Disable all item in the Toolbar
		* &lt;/script&gt;
		* @memberof ejToolbar
		* @instance
         */
        disable: function () {
            /// <summary>This will disable all toolbar items </summary>
            this.items.addClass("e-disable");
            $(this.element).attr("aria-disabled", true).removeAttr("aria-label");
            this.model.enabled = false;
        },
        //Enables all the toolbar item
		/**
        * To enable all item in the Toolbar 		
		* @return jQuery
		* @example 
		* &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		*$("#toolbar1").ejToolbar();
		*$("#toolbar1").ejToolbar("enable"); //enable all item in the Toolbar
		* &lt;/script&gt;
		* @memberof ejToolbar
		* @instance
         */
        enable: function () {
            /// <summary>This will enable all toolbar items </summary>
            this.items.removeClass("e-disable");
            $(this.element).attr("aria-disabled", false);
            this.model.enabled = true;
        },
        //Selects the toolbarItem of given object
		/**
        * To Select the Toolbar item		
		* @return jQuery
		* @example 
		* &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		*$("#toolbar1").ejToolbar();
		*$("#toolbar1").ejToolbar("selectItem",$("li")[3]);//Select the Toolbar item.
		* &lt;/script&gt;
		* @memberof ejToolbar
		* @instance
         */
        selectItem: function (lielement) {
            /// <summary>This will select a toolbar item </summary>
            var current = $(lielement);
            if ((current == null) || (current.length <= 0)) {
                return;
            }
            if (!current.hasClass("e-disable")) {
                current.removeClass("e-active");
                current.addClass("e-active");
            }
        },
        //Deselects the toolbarItem of given object
			/**
        * To Deselect the Toolbar item		
		* @return jQuery
		* @example 
		* &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		*$("#toolbar1").ejToolbar();
        *$("#toolbar1").ejToolbar("selectItem",$("li")[3]);//Select the Toolbar item.
		*$("#toolbar1").ejToolbar("deselectItem",$("li")[3]); //Deselect the Toolbar item.
		* &lt;/script&gt;

		* @memberof ejToolbar
		* @instance
         */
        deselectItem: function (lielement) {
            /// <summary>This will deselect toolbar item </summary>
            var current = $(lielement);
            if ((current == null) || (current.length <= 0)) {
                return;
            }
            if (!current.hasClass("e-disable")) {
                current.removeClass("e-active");
            }
        },

        //Selects the toolbarItem of given ID
		/**
        * To Select the Toolbar item by id	
		* @return jQuery
		* @example 
		* &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		*$("#toolbar1").ejToolbar();
		*$("#toolbar1").ejToolbar("selectItemByID","left");//Select the Toolbar item by id.
		* &lt;/script&gt;
		* @memberof ejToolbar
		* @instance
         */
        selectItemByID: function (liid) {
            /// <summary>This will select an toolbar item by id </summary>
            var lielement;
            lielement = this.itemsContainer.find("li#" + liid);
            if ((lielement == null) || (lielement.length <= 0)) {
                return;
            }
            this.selectItem(lielement);
        },
        //Deselects the toolbarItem of given ID
		/**
        * To Deselect the Toolbar item by id		
		* @return jQuery
		* @example 
		* &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		*$("#toolbar1").ejToolbar();
        *$("#toolbar1").ejToolbar("selectItemByID","left");//Select the Toolbar item by id.
		*$("#toolbar1").ejToolbar("deselectItemByID","left"); // To Deselect the Toolbar item by id.
		* &lt;/script&gt;
		* @memberof ejToolbar
		* @instance
         */
        deselectItemByID: function (liid) {
            /// <summary>This will deselect an toolbar item by id. </summary>
            var lielement;
            lielement = this.itemsContainer.find("li#" + liid);
            if ((lielement == null) || (lielement.length <= 0)) {
                return;
            }
            this.deselectItem(lielement);
        },
        //Remove the toolbarItem of given object
		/**
        * To Remove the Toolbar item	
		* @return jQuery
		* @example 
		* &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		*$("#toolbar1").ejToolbar();
		*$("#toolbar1").ejToolbar("removeItem",$("li")[3]); // Remove the Toolbar item
		* &lt;/script&gt;
		* @memberof ejToolbar
		* @instance
         */
        removeItem: function (lielement) {
            /// <summary>This will remove the toolbar item </summary>
            if (!this.model.enabled) return false;
            var current = $(lielement);
            if ((current == null) || (current.length <= 0)) {
                return;
            }
            current.remove();
        },
				/**
        * To Remove the Toolbar item by id	
		* @return jQuery
		* @example 
		* &lt;div id="toolbar1"&gt;
		*&lt;ul&gt;
		*    &lt;li id="Left" title="Left"&gt;
		*        &lt;div class="ToolbarItems LeftAlign_tool"&gt;&lt;/div&gt;
		*   &lt;/li&gt;
		*    &lt;li id="Center" title="Center"&gt;
		*        &lt;div class="ToolbarItems CenterAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Right" title="Right"&gt;
		*        &lt;div class="ToolbarItems RightAlign_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Justify" title="Justify"&gt;
		*        &lt;div class="ToolbarItems Justify_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		* 	&lt;/ul&gt;
		*	&lt;ul&gt;
		*    &lt;li id="Bold" title="Bold"&gt;
		*        &lt;div class="ToolbarItems Bold_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="Italic" title="Italic"&gt;
		*        &lt;div class="ToolbarItems Italic_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="StrikeThrough" title="Strike Through"&gt;
		*        &lt;div class="ToolbarItems StrikeThrough_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*    &lt;li id="UndeLine" title="UnderLine"&gt;
		*        &lt;div class="ToolbarItems Underline_tool"&gt;&lt;/div&gt;
		*    &lt;/li&gt;
		*&lt;/ul&gt;
		*&lt;/div&gt;
		* &lt;script&gt;
		*$("#toolbar1").ejToolbar();
		*$("#toolbar1").ejToolbar("removeItemByID","left"); // Remove the Toolbar item by id
		* &lt;/script&gt;
		* @memberof ejToolbar
		* @instance
         */
        //Remove the toolbarItem of given ID
        removeItemByID: function (liid) {
            /// <summary>This will remove the toolbar item by ID </summary>
            var lielement;
            lielement = this.itemsContainer.find("li#" + liid);
            if ((lielement == null) || (lielement.length <= 0)) {
                return;
            }
            this.removeItem(lielement);
        },
        /*-----------------------Event Handlers -----------------------------------------*/
        /*
		 * Wiring the events to ToolBar control		
		 * @private
         */		
        _wireEvents: function () {
            /// <summary>This will wire events for toolbar item </summary>
            var args;
            this._on(this.element, "focus", this._focusElement);
            this._on(this.element, "blur", this._targetBlur);
            this._on(this.items, "mouseenter", this._onItemHover);
            this._on(this.items, "mousedown", this._onItemClick);
            this._on(this.items, "mouseup", this._onItemClick);
            this._on(this.items, "mouseleave", this._onItemLeave);
          //this._on(this.items, "keyup", this._OnKeyUp);
          //this._on(this.items, "keydown", this._OnKeyDown);
        },
		 /**
         * Section For handle the Item hover event
		 * @private
         */	
        _onItemHover: function (e) {
            var currentItem = e.currentTarget, targetItem = e.target;
            if (!$(currentItem).hasClass("e-disable")) {
                this.items.removeClass("e-hover");
                $(currentItem).addClass("e-hover");
                args = { currentTarget: currentItem, target: targetItem, status: this.model.enabled };
                this._trigger("itemHover", args);
            }
        },
		 /**
         * Section For handle the Item click event
		 * @private
         */	
        _onItemClick: function (e) {
            var currentItem = e.currentTarget, targetItem = e.target;
            if (e.type == "mousedown") { this._focusEnable = false; }
            else if (e.type == "mouseup") {
                if (!$(currentItem).hasClass("e-disable")) {
                    args = { currentTarget: currentItem, target: targetItem, status: this.model.enabled };
                    this._activeItem = $(e.currentTarget).index();
                    this._trigger("click", args);
                }
            }
        },
		 /**
         * Section For handle the Mouse Leave on item event
		 * @private
         */	
        _onItemLeave: function (e) {
            var currentItem = e.currentTarget, targetItem = e.target;
            if (!$(currentItem).hasClass("e-disable")) {
                $(currentItem).removeClass("e-hover");
                args = { currentTarget: currentItem, target: targetItem, status: this.model.enabled };
                this._trigger("itemLeave", args);
            }
        },
		 /**
         * Section to watch the  key down event
		 * @private
         */	
        _OnKeyDown: function (e) {
            this._focusEnable = true;
            this.e = e;
            var itemsLength = this.items.length - 1, activeItem;
            switch (e.keyCode) {
                case 38: //Up
                    e.preventDefault();
                    this._removeListHover();
                    if ((this._activeItem < 0) || (this._activeItem == null) || (this._activeItem > itemsLength))
                        this._activeItem = 0;
                    else if (this._activeItem == 0)
                        this._activeItem = itemsLength;
                    else
                        this._activeItem -= 1;
                    activeItem = this._getActiveItem();
                    if (!activeItem.hasClass("e-disable")) {
                        this._addListHover();
                    }
                    break;
                case 40: //Down
                    e.preventDefault();
                    this._removeListHover();
                    if ((this._activeItem > itemsLength) || (this._activeItem == null) || (this._activeItem < 0))
                        this._activeItem = itemsLength;
                    else if (this._activeItem == itemsLength)
                        this._activeItem = 0;
                    else
                        this._activeItem += 1;
                    activeItem = this._getActiveItem();
                    if (!activeItem.hasClass("e-disable")) {
                        this._addListHover();
                    }
                    break;
                case 37: //Left
                    e.preventDefault();
                    this._removeListHover();
                    if ((this._activeItem < 0) || (this._activeItem == null) || (this._activeItem > itemsLength))
                        this._activeItem = 0;
                    else if (this._activeItem == 0)
                        this._activeItem = itemsLength;
                    else
                        this._activeItem -= 1;
                    activeItem = this._getActiveItem();
                    if (!activeItem.hasClass("e-disable")) {
                        this._addListHover();
                    }
                    break;
                case 39: //Right
                    e.preventDefault();
                    this._removeListHover();
                    if ((this._activeItem > itemsLength) || (this._activeItem == null) || (this._activeItem < 0))
                        this._activeItem = itemsLength;
                    else if (this._activeItem == itemsLength)
                        this._activeItem = 0;
                    else
                        this._activeItem += 1;
                    activeItem = this._getActiveItem();
                    if (!activeItem.hasClass("e-disable")) {
                        this._addListHover();
                    }
                    break;
                case 13: //enter key
                    break;
                case 32: //space key
                    break;
                case 33: //pup
                    e.preventDefault();
                    this._removeListHover();
                    this._activeItem = 0;
                    activeItem = this._getActiveItem();
                    if (!activeItem.hasClass("e-disable")) {
                        this._addListHover();
                    }
                    break;
                case 34: //pdwn
                    e.preventDefault();
                    this._removeListHover();
                    this._activeItem = itemsLength;
                    activeItem = this._getActiveItem();
                    if (!activeItem.hasClass("e-disable")) {
                        this._addListHover();
                    }
                    break;
                case 35: //endkey
                    e.preventDefault();
                    this._removeListHover();
                    this._activeItem = itemsLength;
                    activeItem = this._getActiveItem();
                    if (!activeItem.hasClass("e-disable")) {
                        this._addListHover();
                    }
                    break;
                case 36: //Home key
                    e.preventDefault();
                    this._removeListHover();
                    this._activeItem = 0;
                    activeItem = this._getActiveItem();
                    if (!activeItem.hasClass("e-disable")) {
                        this._addListHover();
                    }
                    break;
            }
        },
		 /**
         * Section to watch the  KeyUp event
		 * @private
         */	
        _OnKeyUp: function (e) {
            this.e = e;
            var itemsLength = this.items.length, activeItem;
            switch (e.keyCode) {
                case 38: //Up
                    break;
                case 40: //Down
                    break;
                case 37: //Left
                    break;
                case 39: //Right
                    break;
                case 13: //enter key
                    activeItem = this._getActiveItem();
                    if ($(e.target).is("div")) {
                        var currentItem = this._getTargetItem(), targetItem = this._getTargetItem();
                    } else {
                        var currentItem = $(e.target).closest("li")[0], targetItem = e.target;
                    }
                    if (!$(currentItem).hasClass("e-disable")) {
                        args = { currentTarget: currentItem, target: targetItem, status: this.model.enabled, event: this.e };
                        this._trigger("click", args);
                        this._removeListHover();
                    }
                    break;
                case 32: //space key
                    activeItem = this._getActiveItem();
                    if ($(e.target).is("div")) {
                        var currentItem = this._getTargetItem(), targetItem = this._getTargetItem();
                    } else {
                        var currentItem = $(e.target).closest("li")[0], targetItem = e.target;
                    }
                    if (!activeItem.hasClass("e-disable")) {
                        args = { currentTarget: currentItem, target: targetItem, status: this.model.enabled, event: this.e };
                        this._trigger("click", args);
                        this._removeListHover();
                    }
                    break;
                case 33: //pup
                    break;
                case 34: //pdwn
                    break;
                case 35: //endkey
                    break;
                case 36: //Home key
                    break;
                case 27:         // Esc Key
                    this.element.focusout();
                    this._removeListHover();
                    break;
            }
        },
		 /**
         * Section For handle to remove class after hover event
		 * @private
         */	
        _removeListHover: function () {
            $(this.items).removeClass("e-hover");
        },
		/**
         * Section For handle to add class for hover event
		 * @private
         */	
        _addListHover: function () {
            var activeItem = this._getActiveItem();
            activeItem.addClass("e-hover");
            activeItem[0].scrollIntoView(false);
            activeItem.focus();
        },
		/**
         *  To get the ActiveItem		
		 * @private
         */	 
        _getActiveItem: function () {
            return $($(this.items)[this._activeItem]);
        },
		/**
         * To get the TargetItem		
		 * @private
         */	 
        _getTargetItem: function () {
            return $(this.items)[this._activeItem];
        },
		/**
         * Section For handle Blur event
		 * @private
         */	
        _targetBlur: function (e) {
            e.preventDefault();
            this.element.focusout();
            this._removeListHover();
            this.element.removeClass("e-focus");
            this._off(this.element, "keyup", this._OnKeyUp);
            this._off(this.element, "keydown", this._OnKeyDown);
            // this._isFocused = false;
            /* Raise focusOut Event*/
           
                this._trigger("focusOut");
        },
		/**
         * Section For handle Focus event
		 * @private
         */	
        _focusElement: function (e) {
            this.element.addClass("e-focus");
            this._on(this.element, "keyup", this._OnKeyUp);
            this._on(this.element, "keydown", this._OnKeyDown);

            if (!this._focusEnable) {
                this._focusEnable = true;
                return;
            }
            this._removeListHover();
            this._activeItem = 0;
            activeItem = this._getActiveItem();
            if (!activeItem.hasClass("e-disable")) {
                this._addListHover();
            }
        },
    });

})(jQuery, Syncfusion);


;