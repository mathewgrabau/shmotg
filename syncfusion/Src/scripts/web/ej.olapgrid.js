/*!
*  filename: ej.olapgrid.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview OLAP Grid control to visualize the data
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
	* @class ejOlapGrid
    * @requires jquery-1.10.2.min.js
    * @requires jquery.easing.1.3.min.js
    * @requires ej.core.js
    * @requires ej.data.js
    * @requires ej.touch.js
    * @requires ej.waitingpopup.js
    * @requires ej.olapgrid.js
    * @requires ej.olappager.js
	* @classdesc Custom Design for OLAP Grid control.
	* @example 
	* &lt;div id="OlapGrid"&gt; &lt;/div&gt; <br> 
	* &lt;script&gt;
	* // Create OLAP Grid
    * $("#OlapGrid").ejOlapGrid(...); 	
	* &lt;/script&gt;
	*/
    ej.widget("ejOlapGrid", "ej.olap.OlapGrid", {

        // Root Css Class
        _rootCSS: "e-olapgrid",

        // Widget element will be automatically set in this
        element: null,

        // User-defined model will be automatically set in this
        model: null,

        validTags: ["div", "span"],

        defaults: {
            //properties
			/**		
			* Connects the service using the specified URL for any server updates.	See {@link url}
			* @default ""
			* @type {String}
			* @example 
			* //To set service url during initialization  
			* $("#OlapGrid").ejOlapGrid({url: "/wcf/OlapGridService.svc"});
			* @example 
			* //Get or set the size API, after initialization:<br>
            * //Gets the url value  
            * $("#OlapGrid").ejOlapGrid("option","url");<br>   
            * //Sets the url value 
            * $("#OlapGrid").ejOlapGrid("option","url", "/wcf/OlapGridService.svc" ); 
            * @memberof ejOlapGrid
            * @instance
            */
            url: "",

            /**		
            * Sets the CSS name for custom operation.
            * @default ""
            * @type {String}
            * @example 
            * //To set the CSS name during initialization  
            * $("#OlapGrid").ejOlapGrid({cssClass: "gradient-lime"});	
            * @example 
			* //Get or set css class for initialization:<br>
			*	// Gets the css name.		
			*	$("#OlapGrid").ejOlapGrid("option", "cssClass");			
			*	// Sets the rounded corner to button
			*	$("#OlapGrid").ejOlapGrid("option", "cssClass",  "gradient-lime" ); 		
			* @memberof ejOlapGrid
			* @instance
			*/
            cssClass: "",

            /**		
            * Contains the serialized OlapReport at the instant.
            * @default ""
            * @type {String}	
            * @memberof ejOlapGrid
            * @instance
            */
            currentReport: "",

            /**		
            * Allows the user access the different layouts for OLAP Grid.
            * @default ej.olap.OlapGrid.Layout.Normal
			* @type {enum}
            * @example 
            * //To set the layout during initialization  
            * $("#OlapGrid").ejOlapGrid({layout: ej.olap.OlapGrid.Layout.NoSummaries});
            * @example 
            * //Get or set the grid layout, after initialization:<br>
            *	//Gets the layout value
            *	$("#OlapGrid").ejOlapGrid("option", "layout");<br>			
            *	//Sets the grid layout
            *	$("#OlapGrid").ejOlapGrid("option", "layout",ej.olap.OlapGrid.Layout.Normal);			* 		
            * @memberof ejOlapGrid
            * @instance
            */
            layout: "Normal",

            /**		
            * Allows the user to load large amount of data into pages.
            * @default false
            * @type {Boolean}
            * @example 
            * //To set the virtual scrolling during initialization  
            * $("#OlapGrid").ejOlapGrid({enableVirtualScrolling: true});
            * @example 
            * //Get or set the virtual scrolling, after initialization:<br>
            *	//Gets the virtual calling state
			*	$("#OlapGrid").ejOlapGrid("option", "enableVirtualScrolling");<br>		
			*	//Sets the virtual scrolling 
			*	$("#OlapGrid").ejOlapGrid("option", "enableVirtualScrolling","true");			* 		
			* @memberof ejOlapGrid
			* @instance
			*/
            enableVirtualScrolling: false,

			/**		
			* Allows the user to access/operate each cell through a custom design on right click.
			* @default false
			* @type {Boolean}
			* @example 
			* //To set the cell context option during initialization  
			* $("#OlapGrid").ejOlapGrid({enableCellContext: true});
            * @example 
			* //Get or set the cell context, after initialization:<br>
			*	//Gets the cell context state
			*	$("#OlapGrid").ejOlapGrid("option", "enableCellContext");<br>			
			*	//Sets the cell context value
			*	$("#OlapGrid").ejOlapGrid("option", "enableCellContext","true");			* 		
			* @memberof ejOlapGrid
			* @instance
			*/
            enableCellContext: false,

            /**		
            * Allows the user to enable RTL support.
            * @default false
            * @type {Boolean}
            * @example 
            * //To set the enableRTL option during initialization  
            * $("#OlapGrid").ejOlapGrid({enableRTL: true});
            * @example 
            * //Get or set the enableRTL, after initialization:<br>
            *	//Gets the enableRTL values state
            *	$("#OlapGrid").ejOlapGrid("option", "enableRTL");<br>			
            *	//Sets the cell context value
            *	$("#OlapGrid").ejOlapGrid("option", "enableRTL","true");			* 		
            * @memberof ejOlapGrid
            * @instance
            */
            enableRTL: false,

            /**		
            * Allows the user to enable ToolTip support.
            * @default false
            * @type {Boolean}
            * @example 
            * //To set the enableToolTip option during initialization  
            * $("#OlapGrid").ejOlapGrid({enableToolTip: true});
            * @example 
            * //Get or set the enableToolTip, after initialization:<br>
            *	//Gets the enableToolTip values state
            *	$("#OlapGrid").ejOlapGrid("option", "enableToolTip");<br>			
            *	//Sets the cell context value
            *	$("#OlapGrid").ejOlapGrid("option", "enableToolTip","true");			* 		
            * @memberof ejOlapGrid
            * @instance
            */
            enableToolTip: true,
			/**	
            * Allows the user to configure hyperlink settings to OLAP Grid control.
            * @default false
            * @type {Object}
            * @example 
            * //To configure the hyperlink settings to OLAP Grid during initialization  
            * $("#OlapGrid").ejOlapGrid({hyperlinkSettings:{enableValueCellHyperlink: true, enableRowHeaderHyperlink: true}});
            * @example 
            * //Get or set the hyperlink settings, after initialization:<br>
            *	//Gets the hyperlink settings
            *	$("#OlapGrid").ejOlapGrid("option", "hyperlinkSettings");<br>			
            *	//Sets the hyperlink settings to OLAP Grid
            *	$("#OlapGrid").ejOlapGrid("option", "hyperlinkSettings", {enableValueCellHyperlink: true, enableRowHeaderHyperlink: true});			* 		
            * @memberof ejOlapGrid
            * @instance
            */
            hyperlinkSettings: {
                /**		
			* Allows the user to enable/diable hyperlink for value cells.
			* @default false
			* @type {Boolean}
			* @example 
                * //To set the Hyperlink option for value cell during initialization  
                * $("#OlapGrid").ejOlapGrid({hyperlinkSettings:{enableValueCellHyperlink: true}});
                * @example 
                * //Get or set the hyper link for cell, after initialization:<br>
                *	//Gets the hyper link state
                *	$("#OlapGrid").ejOlapGrid("option", "hyperlinkSettings");<br>			
                *	//Sets the cell hyperlink value
                *	$("#OlapGrid").ejOlapGrid("option", "hyperlinkSettings.enableValueCellHyperlink","true");			* 		
                * @alias ejOlapGrid#hyperlinkSettings->enableValueCellHyperlink
			* @instance
			*/
            enableValueCellHyperlink: false,

			/**		
			* Allows the user to enable/diable hyperlink for row header.
			* @default false
			* @type {Boolean}
			* @example 
			* //To set the Hyperlink option for row header during initialization  
                * $("#OlapGrid").ejOlapGrid({hyperlinkSettings:{enableRowHeaderHyperlink: true}});
            * @example 
			* //Get or set the hyper link for row header, after initialization:<br>
			*	//Gets the row header hyperlink state
                *	$("#OlapGrid").ejOlapGrid("option", "hyperlinkSettings");<br>		
			*	//Sets the row header hyperlink
                *	$("#OlapGrid").ejOlapGrid("option", "hyperlinkSettings.enableRowHeaderHyperlink","true");			* 		
                * @alias ejOlapGrid#hyperlinkSettings->enableRowHeaderHyperlink
			* @instance
			*/
                enableRowHeaderHyperlink: false,

                /**		
                * Allows the user to enable/diable hyperlink for column header.
                * @default false
                * @type {Boolean}
                * @example 
                * //To set the Hyperlink option for column header during initialization  
                * $("#OlapGrid").ejOlapGrid({hyperlinkSettings:{enableColumnHeaderHyperlink: true}});
                * @example 
                * //Get or set the hyper link for column header, after initialization:<br>
                *	//Gets the hyper link state
                *	$("#OlapGrid").ejOlapGrid("option", "hyperlinkSettings");<br>   				
                *	//Sets the column header hyper link state
                *	$("#OlapGrid").ejOlapGrid("option", "hyperlinkSettings.enableColumnHeaderHyperlink","true");			* 		
                * @alias ejOlapGrid#hyperlinkSettings->enableColumnHeaderHyperlink
                * @instance
                */
            enableColumnHeaderHyperlink: false,

			/**		
                * Allows the user to enable/diable hyperlink for summary cells.
                * @default false
                * @type {Boolean}
                * @example 
                * //To set the Hyperlink option for summary cell during initialization  
                * $("#OlapGrid").ejOlapGrid({hyperlinkSettings:{enableSummaryCellHyperlink: true}});
                * @example 
                * //Get or set the hyper link for summary cell, after initialization:<br>
                *	//Gets the summary cell hyperlink state
                *   $("#OlapGrid").ejOlapGrid("option", "hyperlinkSettings");<br>   		
                *	//Sets the summary cell hyperlink 
                *   $("#OlapGrid").ejOlapGrid("option", "hyperlinkSettings.enableSummaryCellHyperlink","true");			* 		
                * @alias ejOlapGrid#hyperlinkSettings->enableSummaryCellHyperlink
                * @instance
                */
                enableSummaryCellHyperlink: false
            },

            /**		
            * Sets the progress indicator type which arises on any UI operation.
            * @default ej.olap.OlapGrid.ProgressMode.Infinite
            * @type {enum}
            * @example 
            * //To set the progress mode during initialization  
            * $("#OlapGrid").ejOlapGrid({progressMode: ej.olap.OlapGrid.ProgressMode.Infinite});
            * @example 
			* //Get or set the progress mode, after initialization:<br>
			*	//Gets the hyper link state
			* $("#OlapGrid").ejOlapGrid("option", "progressMode");<br>   			
			*	//Sets the progress mode value
            * $("#OlapGrid").ejOlapGrid("option", "progressMode", ej.olap.OlapGrid.ProgressMode.Progress ); 
			* 		
            * @memberof ejOlapGrid
            * @instance
            */
            progressMode: "infinite",

            /**  
            * Allows the user to set custom name for the methods at service-end invoked on AJAX post.
            * @default {}
            * @type {Object}
            * @example 
            * //To set serviceMethodSettings API value, to invoke the appropriate service method on UI operation.
            * $("#OlapGrid").ejOlapGrid({ servieMethods.initialize: "InitializeOlapGrid" });
            * @example 
            * //Gets or sets the serviceMethodSettings API, to invoke the appropriate service method on UI operation:<br>
            * //Gets the serviceMethodSettings value   
            * $("#OlapGrid").ejOlapGrid("option", "serviceMethodSettings");<br>   						
            * //Sets the serviceMethodSettings value   			
            * $("#OlapGrid").ejOlapGrid("option", "serviceMethodSettings",  {initialize: "InitializeOlapGrid"} ); 
            * @memberof ejOlapGrid
            * @instance
            */
            serviceMethodSettings: {
                /**  
                * Allows the user to set the custom name for the service method that’s responsible for initializing OLAP Grid. 			
                * @default "InitializeOlapGrid"
                * @type {string}
                * @example 
                * //To set initialize API value, to invoke the corresponding service method for OLAP Grid initialization.
                * $("#OlapGrid").ejOlapGrid({ servieMethods",  {initialize: "InitializeOlapGrid"} ); 
                * @example 
                * //Gets or sets the initialize API, to invoke the corresponding service method for OLAP Grid initialization:<br>
                * //Gets the initialize value   
                * $("#OlapGrid").ejOlapGrid("option", "serviceMethodSettings");<br>   						
                * //Sets the initialize value   			
                * $("#OlapGrid").ejOlapGrid("option", "serviceMethodSettings.initialize", "InitializeOlapGrid" ); 
                * @alias ejOlapGrid#serviceMethodSettings->initialize
                * @instance
                */
                initialize: "InitializeOlapGrid",

                /**  
                * Allows the user to set the custom name for the service method that’s responsible for drilling up/down operation in OLAP Grid. 			
                * @default "DrillOlapGrid"
                * @type {string}
                * @example 
                * //To set drillDown API value, to invoke the corresponding service method for performing server-side operation while drilling up/down in OLAP Grid.   
                * $("#OlapGrid").ejOlapGrid({ serviceMethodSettings: { drillDown: "DrillOlapGridMyMethod" } });
                * @example 
                * //Get or set the drillDown API, to invoke the corresponding service method for performing server-side operation while drilling up/down in OLAP Grid:<br>
                * //Gets the drillDown value   
                * $("#OlapGrid").ejOlapGrid("option", "serviceMethodSettings");<br>   						
                * //Sets the drillDown value   			
                * $("#OlapGrid").ejOlapGrid("option", "serviceMethodSettings.drillDown", "DrillOlapGridMyMethod"} ); 
                * @alias ejOlapGrid#serviceMethodSettings->drillDown
                * @instance
                */
                drillDown: "DrillOlapGrid",

                /**  
                * Allows the user to set the custom name for the service method that’s responsible for performing exporting operation in OLAP Grid.		
                * @default "ExportOptions"
                * @type {string}
                * @example 
                * //To set exportOptions API value, to invoke the corresponding service method for performing server-side operation while exporting.  
                * $("#OlapGrid").ejOlapGrid({ serviceMethodSettings: { exportOptions: "ExportOptionsMyMethod" } });
                * @example 
                * //Gets or sets the exportOptions API, to invoke the corresponding service method for performing server-side operation while exporting.:<br>
                * //Gets the exportOptions value   
                * $("#OlapGrid").ejOlapGrid("option", "serviceMethodSettings");<br>   						
                * //Sets the exportOptions value   			
                * $("#OlapGrid").ejOlapGrid("option", "serviceMethodSettings.exportOptions", "ExportOptionsMyMethod"); 
                * @alias ejOlapGrid#serviceMethodSettings->exportOptions
                * @instance
                */
                exportOptions: "ExportOptions",

                /**  
                * Allows the user to set the custom name for the service method that’s responsible for performing paging operation in OLAP Grid.					
                * @default "Paging" 
                * @type {string}
                * @example 
                * //To set paging API value, to invoke the corresponding service method for performing server-side operation during paging in OLAP Grid.  
                * $("#OlapGrid").ejOlapGrid({ serviceMethodSettings: { paging: "PagingMyMethod" } });
                * @example 
                * //Gets or sets the paging API, to invoke the corresponding service method for performing server-side operation during paging in OLAP Grid:<br>
                * //Gets the paging value   
                * $("#OlapGrid").ejOlapGrid("option", "serviceMethodSettings");<br>   						
                * //Sets the paging value   			
                * $("#OlapGrid").ejOlapGrid("option", "serviceMethodSettings.paging",  "PagingMyMethod"); 
                * @alias ejOlapGrid#serviceMethodSettings->paging
                * @instance
                */
                paging: "Paging"
            },

            /**		
            * Custom object to pass additional information between client-end and service-end.
            * @default null
            * @type {Object}
            * @example 
            * // To pass additional information between client-end and service-end   
            *  $("#OlapGrid").ejOlapGrid({customObject: { Language: "en-US" }}); 
            * @example 
            * //Get or set the custom object API, after initialization:<br>
            *	//Gets the custom object value  
            *	$("#OlapGrid").ejOlapGrid("option","customObject");<br>			
            *	//Sets the custom object value 
            *	$("#OlapGrid").ejOlapGrid("option","customObject", {Language: "en-US"} );  		
            * @memberof ejOlapGrid
            * @instance
            */
            customObject: {},

            /**		
            * Sets the localized language for the control.
            * @default "en-US"
            * @type {String}
            * @example 
            * //Sets the localized language    
            *  $("#OlapGrid").ejOlapGrid({locale: "en-US"}}); 
            * @example 
            * //Get or set the size API, after initialization:<br>
            *	//Gets the localization value  
            *	$("#OlapGrid").ejOlapGrid("option","locale");<br>			
            *	//Sets the localization value 
            *	$("#OlapGrid").ejOlapGrid("option","locale", "en-US" );  		
            * @memberof ejOlapGrid
            * @instance
            */
            locale: "en-US",

            //events

            /**     
			 * Fires when the value cell is clicked once if OLAP Grid enabled with hyperlink.
			 * @event
			 * @name ejOlapGrid#valueCellHyperlinkClick 	
			 * @param {Object} argument Event parameters from OLAP Grid.
			 * @param {object}  argument.args returns the original event args.
			 * @param {string}  argument.cellPosition returns the cell position (row index and column index) in table.
			 * @param {string}  argument.cellType returns the type of the cell.
			 * @param {string}  argument.rowData returns the seriealized data of the header cells.
			 * @param {string}  argument.uniqueName returns the unique name of levels/members.   
			 * @example 
			 * //valueCellHyperlinkClick event for OLAP Grid
             * $("#OlapGrid").ejOlapGrid({
             *    valueCellHyperlinkClick: function (args) {}
             * });      
			 * @memberof ejOlapGrid
			 * @instance
            */
            valueCellHyperlinkClick: "",

            /**     
            * Fires when the row header cell is clicked once if OLAP Grid enabled with hyperlink.
            * @event
			 * @name ejOlapGrid#rowHeaderHyperlinkClick 	
			 * @param {Object} argument Event parameters from OLAP Grid.
			 * @param {object}  argument.args returns the original event args.
			 * @param {string}  argument.cellPosition returns the cell position (row index and column index) in table.
			 * @param {string}  argument.cellType returns the type of the cell.
			 * @param {string}  argument.rowData returns the seriealized data of the header cells.
			 * @param {string}  argument.uniqueName returns the unique name of levels/members.   
			 * @example 
			 * //rowHeaderHyperlinkClick event for OLAP Grid
             * $("#OlapGrid").ejOlapGrid({
             *    rowHeaderHyperlinkClick: function (args) {}
             * });      
			 * @memberof ejOlapGrid
			 * @instance
			 */
            rowHeaderHyperlinkClick: "",

			 /**     
			 * Fires when the column header cell is clicked once if OLAP Grid enabled with hyperlink.
			 * @event
			 * @name ejOlapGrid#columnHeaderHyperlinkClick 	
			 * @param {Object} argument Event parameters from OLAP Grid.
			 * @param {object}  argument.args returns the original event args.
			 * @param {string}  argument.cellPosition returns the cell position (row index and column index) in table.
			 * @param {string}  argument.cellType returns the type of the cell.
			 * @param {string}  argument.rowData returns the seriealized data of the header cells.
			 * @param {string}  argument.uniqueName returns the unique name of levels/members.     
			 * @example 
			 * //columnHeaderHyperlinkClick event for OLAP Grid
             * $("#OlapGrid").ejOlapGrid({
             *    columnHeaderHyperlinkClick: function (args) {}
             * });      
			 * @memberof ejOlapGrid
			 * @instance
			 */
            columnHeaderHyperlinkClick: "",

			 /**     
			 * Fires when the summary cell is clicked.
			 * @event
			 * @name ejOlapGrid#summaryCellHyperlinkClick 	
			 * @param {Object} argument Event parameters from OLAP Grid.
			 * @param {object}  argument.args returns the original event args.
			 * @param {string}  argument.cellPosition returns the cell position (row index and column index) in table.
			 * @param {string}  argument.cellType returns the type of the cell.
			 * @param {string}  argument.rowData returns the seriealized data of the header cells.
			 * @param {string}  argument.uniqueName returns the unique name of levels/members.
			 * @example 
			 * //summaryCellHyperlinkClick event for OLAP Grid
             * $("#OlapGrid").ejOlapGrid({
             *    summaryCellHyperlinkClick: function (args) {}
             * });      
			 * @memberof ejOlapGrid
			 * @instance
			 */
            summaryCellHyperlinkClick: "",

			 /**     
			 * Fires before service invoked.
			 * @event
            * @name ejOlapGrid#beforeServiceInvoke 	
            * @param {Object} argument Event parameters from OLAP Grid  
            * @param {string}  argument.action return the current action of OLAP Grid control.		 
            * @param {object}  argument.customObject return the custom object bounds with OLAP Grid control.
            * @param {string}  argument.element return the outer HTML of OLAP Grid control.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Grid model
            * @param {string}  argument.type returns the name of the event
			 * @example 
			 * //beforeServiceInvoke event for OLAP Grid
             * $("#OlapGrid").ejOlapGrid({
             *    beforeServiceInvoke: function (args) {}
             * });      
			 * @memberof ejOlapGrid
            * @instance
            */
            beforeServiceInvoke: null,

            /**     
            * Fires after the service is invoked.
            * @event
            * @name ejOlapGrid#afterServiceInvoke 	
            * @param {Object} argument Event parameters from OLAP Grid 
            * @param {string}  argument.action return the current action of OLAP Grid control.		 
            * @param {object}  argument.customObject return the custom object bounds with OLAP Grid control.
            * @param {string}  argument.element return the outer HTML of OLAP Grid control.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Grid model
			 * @param {string}  argument.type returns the name of the event			 
			 * @example 
			 * //afterServiceInvoke event for OLAP Grid
             * $("#OlapGrid").ejOlapGrid({
             *    afterServiceInvoke: function (args) {}
             * });      
			 * @memberof ejOlapGrid
			 * @instance
			 */
            afterServiceInvoke: null,

			 /**     
			 * Fires after drill down of OLAP Grid.
			 * @event
			 * @name ejOlapGrid#drillSuccess 	
			 * @param {Object} argument Event parameters from OLAP Grid    
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the OLAP Grid model
			 * @param {string}  argument.type returns the name of the event				 
			 * @example 
			 * //drillSuccess event for OLAP Grid
             * $("#OlapGrid").ejOlapGrid({
             *    drillSuccess: function (args) {}
             * });      
			 * @memberof ejOlapGrid
			 * @instance
			 */
            drillSuccess: null,

            /**     
            * Fires when the cell is right clicked.
            * @event
            * @name ejOlapGrid#cellContext 	
            * @param {Object} argument Event parameters from OLAP Grid.
            * @param {object}  argument.args returns the original event args.
            * @param {string}  argument.cellPosition returns the cell position (row index and column index) in table.
            * @param {string}  argument.cellType returns the type of the cell.
            * @param {string}  argument.rowData returns the seriealized data of the header cells.
            * @param {string}  argument.uniqueName returns the unique name of levels/members.
            * @example 
            * //cellContext event for OLAP Grid
            * $("#OlapGrid").ejOlapGrid({
            *    cellContext: function (args) {}
            * });      
			 * @memberof ejOlapGrid
			 * @instance
			 */
            cellContext: "",

            /**     
            * Fires when OLAP Grid Start loading.
            * @event
            * @name ejOlapGrid#load 	
            * @param {Object} argument Event parameters from OLAP Grid.
            * @param {object}  argument.args returns the original event args.
            * @param {string}  argument.action returns the current action of OLAP Grid control.
            * @param {Object}  argument.customObject returns the custom object bounded with the control.
            * @param {string}  argument.element returns the HTML of OLAP Grid control.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Grid model.
            * @param {string}  argument.type returns the name of the event.
            * @example 
            * //load event for OLAP Grid
            * $("#OlapGrid").ejOlapGrid({
            *    load: function (args) {}
            * });      
            * @memberof ejOlapGrid
            * @instance
            */
            load: null,

            /**     
            * Fires when OLAP Grid completely finished its rendering.
            * @event
            * @name ejOlapGrid#renderComplete 	
            * @param {Object} argument Event parameters from OLAP Grid.
            * @param {object}  argument.args returns the original event args.
            * @param {string}  argument.action returns the current action of OLAP Grid control.
            * @param {Object}  argument.customObject returns the custom object bounded with the control.
            * @param {string}  argument.element returns the HTML of OLAP Grid control.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Grid model.
            * @param {string}  argument.type returns the name of the event.
            * @example 
            * //renderComplete event for OLAP Grid
            * $("#OlapGrid").ejOlapGrid({
            *    renderComplete: function (args) {}
            * });      
            * @memberof ejOlapGrid
            * @instance
            */
            renderComplete: null,

            /**     
            * Fires while any discrepancies occurs during the rendering time.
            * @event
            * @name ejOlapGrid#renderFailure 	
            * @param {Object} argument Event parameters from OLAP Grid.
            * @param {object}  argument.args returns the original event args.
            * @param {string}  argument.action returns the current action of OLAP Grid control.
            * @param {Object}  argument.customObject returns the custom object bounded with the control.
            * @param {string}  argument.element returns the HTML of OLAP Grid control.
            * @param {Object}  argument.message returns the error message with error code.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Grid model.
            * @param {string}  argument.type returns the name of the event.
            * @example 
            * //renderFailure event for OLAP Grid
            * $("#OlapGrid").ejOlapGrid({
            *    renderFailure: function (args) {}
            * });      
            * @memberof ejOlapGrid
            * @instance
            */
            renderFailure: null,

            /**     
            * Fires when OLAP Grid successfully finished its rendering.
            * @event
            * @name ejOlapGrid#renderSuccess 	
            * @param {Object} argument Event parameters from OLAP Grid.
            * @param {object}  argument.args returns the original event args.
            * @param {string}  argument.action returns the current action of OLAP Grid control.
            * @param {Object}  argument.customObject returns the custom object bounded with the control.
            * @param {string}  argument.element returns the HTML of OLAP Grid control.
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the OLAP Grid model.
            * @param {string}  argument.type returns the name of the event.
            * @example 
            * //renderSuccess event for OLAP Grid
            * $("#OlapGrid").ejOlapGrid({
            *    renderSuccess: function (args) {}
            * });      
            * @memberof ejOlapGrid
            * @instance
            */
            renderSuccess: null
        },

        /**
         * Provides information about the properties of type Array and Object.
         *
         * @private
         */
        dataTypes: {
            serviceMethodSettings: "data",
            customObject: "data"
        },

        observables: ["layout", "enableCellContext", "hyperlinkSettings.enableValueCellHyperlink", "hyperlinkSettings.enableRowHeaderHyperlink", "hyperlinkSettings.enableColumnHeaderHyperlink", "hyperlinkSettings.enableSummaryCellHyperlink"],
        layout: ej.util.valueFunction("layout"),
        enableCellContext: ej.util.valueFunction("enableCellContext"),
        enableValueCellHyperlink: ej.util.valueFunction("hyperlinkSettings.enableValueCellHyperlink"),
        enableRowHeaderHyperlink: ej.util.valueFunction("hyperlinkSettings.enableRowHeaderHyperlink"),
        enableColumnHeaderHyperlink: ej.util.valueFunction("hyperlinkSettings.enableColumnHeaderHyperlink"),
        enableSummaryCellHyperlink: ej.util.valueFunction("hyperlinkSettings.enableSummaryCellHyperlink"),
        locale: ej.util.valueFunction("locale"),

        /**
        * Gets the serialized current OLAP Report of the control.
        *
         * @private 
         */
        getOlapReport: function () {
            return this._olapReport;
        },

        /**
         * Sets the serialized current OLAP Report of the control.
         *
         * @private 
         */
        setOlapReport: function (value) {
            this._olapReport = value;
        },

        /**
        * Gets the JSON formatted records for the control.
        *
        * @private 
        */
        getJSONRecords: function () {
            return this._JSONRecords;
        },

        /**
        * Sets the JSON formatted records for the control.
        *
        * @private 
        */
        setJSONRecords: function (value) {
            this._JSONRecords = $.parseJSON(value);
        },

        /**
         * Initializes the variables and loads the widget. 
         *
         * @private
         */
        _init: function () {
            this._initPrivateProperties();
            this._load();
        },

        /**
         * Destroys the widget while it's no longer required. 
         *
         * @private
         */
        _destroy: function () {
            this.element.empty().removeClass("e-olapgrid" + this.model.cssClass);
        },

        /**
         * Initializes the local variables. 
         *
         * @private
         */
        _initPrivateProperties: function () {
            this._id = this.element.attr("id");
            this._olapReport = "";
            this._JSONRecords = null;
            this._drillCaption = "";
            this._drillAction = "";
            this._startDrilldown = false;
            this._pagerObj = null;
            this._seriesPageCount = null;
            this._categPageCount = null;
            this._seriesCurrentPage = 1;
            this._categCurrentPage = 1;
            ogridWaitingPopup = null;
            _proxy = this;
            ogridProgressBar = null;
            ogridprogressText = null;
            oGridTimer = null;
            this._maxViewLoading = null;
        },

        /**
         * This function is the point were loading/rendering of the OLAP Grid widget is initiated.
         *
         * @private  
         */
        _load: function () {
            var eventArgs = { action: ej.olap.OlapGrid.GridAction.Initialize, element: this.element, customObject: this.model.customObject };
            this._trigger("load", eventArgs);
            this.element.addClass(this.model.cssClass);
            if (typeof oclientWaitingPopup != 'undefined' && oclientWaitingPopup != null)
                if ($("#" + oclientProxy._id + "_maxView")[0]) {
                    $("#" + oclientProxy._id + "_maxView").ejWaitingPopup({ showOnInit: true });
                    this._maxViewLoading = ("#" + oclientProxy._id + "_maxView").data("ejWaitingPopup");
                }
                else
                    oclientWaitingPopup.show();
            else {
                if (_proxy.model.progressMode == "infinite" && typeof oclientWaitingPopup == 'undefined') {
                    $("#" + this._id).ejWaitingPopup({ showOnInit: true });
                    ogridWaitingPopup = $("#" + this._id).data("ejWaitingPopup");
                }
                else {
                    $("#" + _proxy._id + "progressContainer").remove();
                    this._createProgressBar();
                    this._progressStatus(0, 70, 140);
                }
            }

            if (this.model.beforeServiceInvoke != null)
                this._trigger("beforeServiceInvoke", { action: ej.olap.OlapGrid.GridAction.Initialize, element: this.element, customObject: this.model.customObject });
            if (this.model.currentReport != "")
                this.model.customObject = { currentReport: this.model.currentReport };
            var serializedCustomObject = JSON.stringify(this.model.customObject);
            if (_proxy.model.progressMode == "progress")
                $("#" + _proxy._id + "progressText")[0].innerHTML = _proxy._getLocalizedLabels("PreparingAndExecutingMDXquery") + "...";
            if (this.element[0] != null && this.element.parents().find(".controlPanel").length > 0 && this.layout() != "" && this.layout() != ej.olap.OlapGrid.Layout.Normal)
                this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.initialize, JSON.stringify({ "action": "initializeGrid", "olapReport": this.model.olapReport, "layout": this.layout(), "customObject": serializedCustomObject }), this._renderControlSuccess);
            else if (this.element[0] != null && this.element.parents().find(".controlPanel").length > 0)
                this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.initialize, JSON.stringify({ "action": "initializeGrid", "olapReport": this.model.olapReport, "customObject": serializedCustomObject }), this._renderControlSuccess);
            else if (this.layout() != "" && this.layout() != ej.olap.OlapGrid.Layout.Normal)
                this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.initialize, JSON.stringify({ "action": "initializeGrid", "layout": this.layout(), "customObject": serializedCustomObject }), this._renderControlSuccess);
            else
                this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.initialize, JSON.stringify({ "action": "initializeGrid", "customObject": serializedCustomObject }), this._renderControlSuccess);
        },
        _setFirst: true,

        /**
        * To configure the properties at runtime using SetModel		
        * @private
        */
        _setModel: function (options) {
            for (var key in options) {
                switch (key) {
                    case "OlapReport": this.setOlapReport(options[key]); break;
                    case "JsonData": this.setOlapReport(options[key]); break;
                    case "RefreshOlapGrid": this.element.renderControlFromJSON(options[key]); break;
                    case "layout": this._load(); break;
                    case "customObject": this.model.customObject = options[key]; break;
                    case "enableCellContext": this._load(); break;
                    case "enableValueCellHyperlink": this._load(); break;
                    case "enableRowHeaderHyperlink": this._load(); break;
                    case "enableColumnHeaderHyperlink": this._load(); break;
                    case "enableSummaryCellHyperlink": this._load(); break;
                    case "locale": this._load(); break;
                }
            }
        },

        /**
        * This function is invoked to wire the events for UI interaction.
        *
        * @private  
        */
        _wireEvents: function () {
            if (this.enableCellContext() == true) {
                if (document.addEventListener) {
                    document.removeEventListener('contextmenu', _proxy._cellContext, false);
                    document.addEventListener('contextmenu', _proxy._cellContext, false);
                }
                else {
                    document.detachEvent('oncontextmenu', _proxy._cellContext);
                    document.attachEvent('oncontextmenu', _proxy._cellContext);
                }
            }
            this.drillDownHandler = $.proxy(this._drillDown, this);
            this.addHyperlinkHandler = $.proxy(this._addHyperlink, this);
            this.removeHyperlinkHandler = $.proxy(this._removeHyperlink, this);
            this._on(this.element, "mouseover", ".value, .rowheader, .colheader", this.addHyperlinkHandler);
            this._on(this.element, "mouseleave", ".value, .rowheader, .colheader", this.removeHyperlinkHandler);
            this._on(this.element, "click", ".value, .colheader, .rowheader", function (e) {
                if (e.target.className.indexOf("hyperlink") != -1) {
                    var cellPos = $(e.target).attr("p");
                    var rawdata = this.getJSONRecords()[parseInt((parseInt(cellPos.split(",")[0]) * this.rowCount) + parseInt(cellPos.split(",")[1]))].Info;
                    var cellInfo = {
                        cellValue: e.target.innerHTML,
                        cellPosition: cellPos,
                        cellType: e.target.className.split(' ')[0],
                        uniqueName: rawdata.split('::')[0],
                        args: e,
                        rawdata: rawdata
                    };
                    if (this.enableSummaryCellHyperlink() && e.target.className.indexOf("summary value") >= 0)
                        this._trigger("summaryCellHyperlinkClick", { element: this.element, customObject: this.model.customObject });
                    else if (this.enableValueCellHyperlink() && e.target.className.indexOf("value") >= 0)
                        this._trigger("valueCellHyperlinkClick", { args: cellPos });
                    else if (this.enableRowHeaderHyperlink() && e.target.className.indexOf("rowheader") >= 0)
                        this._trigger("rowHeaderHyperlinkClick", { element: this.element, customObject: this.model.customObject });
                    else if (this.enableColumnHeaderHyperlink() && e.target.className.indexOf("colheader") >= 0)
                        this._trigger("columnHeaderHyperlinkClick", { element: this.element, customObject: this.model.customObject });
                }
            });
            this._on(this.element, "click", ".expand, .collapse", ej.proxy(this._drillDown, this));
            this._on(this.element, "mouseover", ".colheader, .rowheader, .expand, .collapse", function (evt) {
                if (evt.target.className.indexOf("expand") > -1 && !$(evt.target).hasClass("header-hover-expand"))
                    $(evt.target).addClass("header-hover-expand");
                else if (evt.target.className.indexOf("collapse") > -1 && !$(evt.target).hasClass("header-hover-collapse"))
                    $(evt.target).addClass("header-hover-collapse");
                else if ((evt.target.className.indexOf("expand") < 0 || evt.target.className.indexOf("collapse") < 0) && $(evt.target).children("span").length > 0) {
                    var child = $(evt.target).children("span")[0];
                    if (!$(child).hasClass("header-hover-expand") && child.className.indexOf("expand") > -1)
                        $(child).addClass("header-hover-expand");
                    else if (!$(child).hasClass("header-hover-collapse") && child.className.indexOf("collapse") > -1)
                        $(child).addClass("header-hover-collapse");
                }
            });
            this._on(this.element, "mouseleave", ".colheader, .rowheader, .expand, .collapse", function (evt) {
                this.element.find(".expand, .collapse").removeClass("header-hover-expand header-hover-collapse");
            });
            if (this.model.enableToolTip) {
                this._on(this.element, "mouseover", ".value", this._applyToolTip);
                this._on(this.element, "mouseleave", ".value", function (e) {
                    this.element.find('#gridTooltip').hide("slow");
                });
            }
        },

        /**
         * This function is invoked to unwire the events registered for UI interaction.
         *
         * @private  
         */
        _unWireEvents: function () {
            this._off(this.element, "click", ".expand, .collapse");
            this._off(this.element, "click", ".value, .colheader, .rowheader");
            this._off(this.element, "mouseover", ".colheader, .rowheader, .expand, .collapse");
            this._off(this.element, "mouseleave", ".colheader, .rowheader, .expand, .collapse");
            this._off(this.element, "mouseover", ".value, .rowheader, .colheader", this.addHyperlinkHandler);
            this._off(this.element, "mouseleave", ".value, .rowheader, .colheader", this.removeHyperlinkHandler);
            this._off(this.element, "mouseover", ".value");
            this._off(this.element, "mouseleave", ".value");
        },

        _applyToolTip: function (e) {
            {
                var toolTipInfo; var rowValue; var cellPos; var columnValue = ""; valueCell = "";
                if ($(e.target).hasClass("summary")) {
                    if ($(e.target).siblings("th").hasClass("rowheader"))
                        cellPos = $(e.target).parents("tr").find(".rowheader").last().attr("p");
                    else
                        cellPos = $(e.target).parents("tr").find(".summary").attr("p");
                }
                else
                    cellPos = $(e.target).parents("tr").find(".rowheader").last().attr("p");
                if (cellPos != null) {
                    if ((cellPos[0] == 0) && ((parseInt(cellPos.split(",")[0])) != null)) {
                        if (cellPos == _proxy.getJSONRecords()[parseInt((parseInt(cellPos.split(",")[0]) * _proxy.rowCount) + parseInt(cellPos.split(",")[1]))].Index) {
                            rowValue = _proxy.getJSONRecords()[parseInt((parseInt(cellPos.split(",")[0]) * _proxy.rowCount) + parseInt(cellPos.split(",")[1]))].Value;
                        }
                    }
                    else
                        while (cellPos[0] >= 0) {
                            if (cellPos == _proxy.getJSONRecords()[parseInt((parseInt(cellPos.split(",")[0]) * _proxy.rowCount) + parseInt(cellPos.split(",")[1]))].Index) {
                                toolTipInfo = _proxy.getJSONRecords()[parseInt((parseInt(cellPos.split(",")[0]) * _proxy.rowCount) + parseInt(cellPos.split(",")[1]))].Value;
                                cellPos = parseInt(cellPos.split(",")[0]) - 1 + "," + parseInt(cellPos.split(",")[1]);
                            }
                            if (rowValue)
                                rowValue = toolTipInfo + "-" + rowValue;
                            else
                                rowValue = toolTipInfo;
                        }
                }
                var columnHeaderCount = $(e.target).closest('tbody').prev().children('tr:last').children('th').attr("p")[2];
                var currentCellPos = $(e.target).attr("p");
                if ((currentCellPos != undefined) && (currentCellPos == _proxy.getJSONRecords()[parseInt((parseInt(currentCellPos.split(",")[0]) * _proxy.rowCount) + parseInt(currentCellPos.split(",")[1]))].Index)) {
                    var colPos = parseInt(currentCellPos.split(",")[0]);
                }
                for (var i = 0; i <= columnHeaderCount; i++) {
                    var columnHeaderPos = colPos + "," + i;
                    if (colPos != null)
                        if (columnHeaderPos == _proxy.getJSONRecords()[parseInt((parseInt(columnHeaderPos.split(",")[0]) * _proxy.rowCount) + parseInt(columnHeaderPos.split(",")[1]))].Index) {
                            toolTipInfo = _proxy.getJSONRecords()[parseInt((parseInt(columnHeaderPos.split(",")[0]) * _proxy.rowCount) + parseInt(columnHeaderPos.split(",")[1]))].Value;
                            if (columnValue == "")
                                columnValue = toolTipInfo;
                            else if (toolTipInfo != "")
                                columnValue = columnValue + "-" + toolTipInfo;
                        }
                }
                this.element.find('#gridTooltip').remove();
                $(e.target).append("<div id=\"gridTooltip\" class=\"tooltip\"></div>");
                this.element.find('#gridTooltip').css("left", e.pageX, "top", e.pageY);
                this.element.find('#gridTooltip').append("<p id=\"value\" class=\"tooltipText\">Value : " + $(e.target).text() + "</p>");
                this.element.find('#gridTooltip').append("<p id=\"row\" class=\"tooltipText\">Row : " + rowValue + "</p>");
                this.element.find('#gridTooltip').append("<p id=\"column\" class=\"tooltipText\">Column : " + columnValue + "</p>");
                this.element.find('#gridTooltip').show("fast");
            }
        },
        /**
         * This function is used to create and handle virtual scrollbar.
         *
         * @private  
         */
        _applyVScrolling: function () {
            var _proxy = this;
            var oGridDiv = $(this.element).find('.virtualScrollGrid');
            if (this._seriesPageCount > 1) {
                var getMinVerticalPos = function () { return (_proxy.element.find(".vScrollPanel").position().top + 1); };
                var vScrollBar = $(this.element).find(".vScrollPanel");
                vScrollBar.height($(oGridDiv).height());
                vScrollBar.html(ej.buildTag("div.vScrollThumb")[0].outerHTML);
                var vScrollHandle = vScrollBar.find(".vScrollThumb");
                vScrollHandle.height(Math.max(Math.ceil($(oGridDiv).height() / _proxy._seriesPageCount), 15));
                var vDragRange = vScrollBar.height() - vScrollHandle.height() - 2;
                vScrollHandle.offset({ top: getMinVerticalPos() + (_proxy._seriesCurrentPage - 1) * (vDragRange / (_proxy._seriesPageCount - 1)) });

                $(vScrollHandle).bind('mousedown', function (e) {
                    $(this).addClass("dragging");
                    var initCursorPos = e.pageY - getMinVerticalPos();
                    var initThumbPos = vScrollHandle.position().top - getMinVerticalPos();
                    _proxy.element.find(".seriesPageIndicator").removeClass("inActive").css({ top: vScrollHandle.position().top, left: vScrollHandle.position().left + 20 });
                    var currentPage = _proxy._seriesCurrentPage;
                    $(document).bind('mousemove', function (e) {
                        if (window.navigator.userAgent.indexOf('MSIE ') > -1)
                            $(document).on("selectstart", function (e) { e.preventDefault(); });
                        else
                            window.getSelection().removeAllRanges();
                        var movedDistance = (e.pageY - getMinVerticalPos()) - initCursorPos;
                        if (movedDistance > 0 && initThumbPos + movedDistance <= vDragRange)
                            vScrollHandle.offset({ top: initThumbPos + movedDistance + getMinVerticalPos() });
                        else if (movedDistance < 0 && initThumbPos + movedDistance >= 0)
                            vScrollHandle.offset({ top: initThumbPos + movedDistance + getMinVerticalPos() });
                        else if (initThumbPos + movedDistance > vDragRange)
                            vScrollHandle.offset({ top: getMinVerticalPos() + vDragRange });
                        else if (initThumbPos + movedDistance < 0)
                            vScrollHandle.offset({ top: getMinVerticalPos() });
                        currentPage = Math.ceil((vScrollHandle.position().top - getMinVerticalPos()) / (vDragRange / _proxy._seriesPageCount)) == 0 ? 1 : Math.ceil((vScrollHandle.position().top - getMinVerticalPos()) / (vDragRange / _proxy._seriesPageCount));
                        _proxy.element.find(".seriesPageIndicator").css({ top: vScrollHandle.position().top });
                        _proxy.element.find(".series_CurrentPage").html(currentPage);
                    });
                    $(document).bind('mouseup', function () {
                        $(document).off("selectstart");
                        $(this).unbind('mousemove').unbind('mouseup');
                        $(vScrollHandle).removeClass("dragging");
                        if (currentPage != _proxy._seriesCurrentPage) {
                            _proxy._seriesCurrentPage = currentPage;
                            _proxy.refreshPagedOlapGrid("series", _proxy._seriesCurrentPage);
                        }
                        else
                            _proxy.element.find(".seriesPageIndicator").addClass("inActive");
                    });
                });
            }

            if (this._categPageCount > 1) {
                var getMinHorizontalPos = function () { return (_proxy.element.find(".hScrollPanel").position().left + 1); };
                var hScrollBar = $(this.element).find(".hScrollPanel");
                hScrollBar.width($(oGridDiv).width());
                hScrollBar.html(ej.buildTag("div.hScrollThumb")[0].outerHTML);
                var hScrollHandle = hScrollBar.find(".hScrollThumb");
                hScrollHandle.width(Math.max(Math.ceil($(oGridDiv).width() / _proxy._categPageCount), 15));
                var hDragRange = hScrollBar.width() - hScrollHandle.width() - 2;
                hScrollHandle.offset({ left: getMinHorizontalPos() + (_proxy._categCurrentPage - 1) * (hDragRange / (_proxy._categPageCount - 1)) });

                $(hScrollHandle).bind('mousedown', function (e) {
                    $(this).addClass("dragging");
                    var initCursorPos = e.pageX - getMinHorizontalPos();
                    var initThumbPos = hScrollHandle.position().left - getMinHorizontalPos();
                    _proxy.element.find(".categPageIndicator").removeClass("inActive").css({ left: hScrollHandle.position().left, top: hScrollHandle.position().top + 20 });
                    var currentPage = _proxy._categCurrentPage;
                    $(document).bind('mousemove', function (e) {
                        if (window.navigator.userAgent.indexOf('MSIE ') > -1)
                            $(document).on("selectstart", function (e) { e.preventDefault(); });
                        else
                            window.getSelection().removeAllRanges();
                        var movedDistance = (e.pageX - getMinHorizontalPos()) - initCursorPos;
                        if (movedDistance > 0 && initThumbPos + movedDistance <= hDragRange)
                            hScrollHandle.offset({ left: initThumbPos + movedDistance + getMinHorizontalPos() });
                        else if (movedDistance < 0 && initThumbPos + movedDistance >= 0)
                            hScrollHandle.offset({ left: initThumbPos + movedDistance + getMinHorizontalPos() });
                        else if (initThumbPos + movedDistance > hDragRange)
                            hScrollHandle.offset({ left: getMinHorizontalPos() + hDragRange });
                        else if (initThumbPos + movedDistance < 0)
                            hScrollHandle.offset({ left: getMinHorizontalPos() });
                        currentPage = Math.ceil((hScrollHandle.position().left - getMinHorizontalPos()) / (hDragRange / _proxy._categPageCount)) == 0 ? 1 : Math.ceil((hScrollHandle.position().left - getMinHorizontalPos()) / (hDragRange / _proxy._categPageCount));
                        _proxy.element.find(".categPageIndicator").css({ left: hScrollHandle.position().left });
                        _proxy.element.find(".categ_CurrentPage").html(currentPage);
                    });
                    $(document).bind('mouseup', function () {
                        $(document).off("selectstart");
                        $(this).unbind('mousemove').unbind('mouseup');
                        $(hScrollHandle).removeClass("dragging");
                        if (currentPage != _proxy._categCurrentPage) {
                            _proxy._categCurrentPage = currentPage;
                            _proxy.refreshPagedOlapGrid("categ", _proxy._categCurrentPage);
                        }
                        else
                            _proxy.element.find(".categPageIndicator").addClass("inActive");
                    });
                });
            }
        },

        /**
        * To get the localized labels.
        * @private
        */
        //get Localized text
        _getLocalizedLabels: function (property) {

            return ej.olap.OlapGrid.locale[this.locale()][property] === undefined ? ej.olap.OlapGrid.locale["en-US"][property] : ej.olap.OlapGrid.locale[this.locale()][property];
        },

        /**
         * This function would be raised while clicking expand/collapse icons to perform drill up/down operations in OLAP Grid.
         *
         * @private  
         */
        _drillDown: function (e) {
            this._off(this.element, "click", ".expand, .collapse");
            var targetClass = e.target.className;
            this._startDrilldown = true;
            targetClass = targetClass.split(" ");
            if (targetClass[0] == "expand")
                this._drillAction = "drilldown";
            else if (targetClass[0] == "collapse")
                this._drillAction = "drillup";

            if (this.model.beforeServiceInvoke != null)
                this._trigger("beforeServiceInvoke", { action: ej.olap.OlapGrid.GridAction.DrillDown, element: this.element, customObject: this.model.customObject });
            var serializedCustomObject = JSON.stringify(this.model.customObject);
            var cellPos = $(e.target).parent().attr("p");
            this._drillCaption = $.trim($(e.currentTarget).parent().text());

            if (typeof oclientWaitingPopup != 'undefined' && oclientWaitingPopup != null) {
                if ($("#" + oclientProxy._id + "_maxView")[0]) {
                    $("#" + oclientProxy._id + "_maxView").ejWaitingPopup({ showOnInit: true });
                    this._maxViewLoading = $("#" + oclientProxy._id + "_maxView").data("ejWaitingPopup");
                }
                else
                    oclientWaitingPopup.show();
            }
            else {
                if (_proxy.model.progressMode == "infinite")
                    ogridWaitingPopup.show();
                else {
                    this._progressStatus(0, 70, 140);
                    if (_proxy.model.progressMode == "progress")
                        $("#" + _proxy._id + "progressText")[0].innerHTML = _proxy._getLocalizedLabels("PreparingAndExecutingMDXquery") + "...";
                }
            }
            if (this.layout() != "" || this.layout() != "normal") {
                if (typeof (oclientProxy) != "undefined")
                    this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.drillDown, JSON.stringify({ "action": "drillDownGrid", "cellPosition": cellPos, "currentReport": this.getOlapReport(), "clientReports": oclientProxy.reports, "headerInfo": this.getJSONRecords()[parseInt((parseInt(cellPos.split(",")[0]) * this.rowCount) + parseInt(cellPos.split(",")[1]))].Info, "layout": this.layout(), "customObject": serializedCustomObject }), this._drillDownSuccess);
                else
                    this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.drillDown, JSON.stringify({ "action": "drillDownGrid", "cellPosition": cellPos, "currentReport": this.getOlapReport(), "headerInfo": this.getJSONRecords()[parseInt((parseInt(cellPos.split(",")[0]) * this.rowCount) + parseInt(cellPos.split(",")[1]))].Info, "layout": this.layout(), "customObject": serializedCustomObject }), this._drillDownSuccess);
            }
            else {
                if (typeof (oclientProxy) != "undefined")
                    this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.drillDown, JSON.stringify({ "action": "drillDownGrid", "cellPosition": cellPos, "currentReport": this.getOlapReport(), "clientReports": oclientProxy.reports, "headerInfo": this.getJSONRecords()[parseInt((parseInt(cellPos.split(",")[0]) * this.rowCount) + parseInt(cellPos.split(",")[1]))].Info, "customObject": serializedCustomObject }), this._drillDownSuccess);
                else
                    this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.drillDown, JSON.stringify({ "action": "drillDownGrid", "cellPosition": cellPos, "currentReport": this.getOlapReport(), "headerInfo": this.getJSONRecords()[parseInt((parseInt(cellPos.split(",")[0]) * this.rowCount) + parseInt(cellPos.split(",")[1]))].Info, "customObject": serializedCustomObject }), this._drillDownSuccess);
            }
        },

        /**
         * This function would apply hyperlink to the appropriate cells.
         *
         * @private  
         */
        _addHyperlink: function (e) {
            if ($(".hyperlinkValueCell")[0])
                $($(".hyperlinkValueCell")[0]).removeClass("hyperlinkValueCell");
            if ($(".hyperlinkHeaderCell")[0])
                $($(".hyperlinkHeaderCell")[0]).removeClass("hyperlinkHeaderCell");
            if (e.target.className == "value" && this.enableValueCellHyperlink())
                $(e.target).addClass("hyperlinkValueCell");
            else if (e.target.className == "summary value" && this.enableSummaryCellHyperlink())
                $(e.target).addClass("hyperlinkValueCell");
            else if (e.target.className == "rowheader" && this.enableRowHeaderHyperlink())
                $(e.target).addClass("hyperlinkHeaderCell");
            else if (e.target.className == "colheader" && this.enableColumnHeaderHyperlink())
                $(e.target).addClass("hyperlinkHeaderCell");
        },

        /**
         * This function would remove/disable hyperlink in OLAP Grid.
         *
         * @private  
         */
        _removeHyperlink: function (e) {
            $(e.target).removeClass("hyperlinkValueCell").removeClass("hyperlinkHeaderCell");
        },

        /**
         * This function would be raised while right clicking over any cell in OLAP Grid.
         *
         * @private  
         */
        _cellContext: function (e) {
            var currentCell = e.target || e.srcElement;
            if (_proxy.enableCellContext() == true && $(currentCell).parents("#" + _proxy._id)[0]) {
                var cellPos = $(currentCell).attr("p");
                if (cellPos) {
                    var cellPos = $(currentCell).attr("p");
                    var rawdata = _proxy.getJSONRecords()[parseInt((parseInt(cellPos.split(",")[0]) * _proxy.rowCount) + parseInt(cellPos.split(",")[1]))].Info;
                    var cellInfo = {
                        cellValue: currentCell.innerHTML,
                        cellPosition: cellPos,
                        cellType: currentCell.className.split(' ')[0],
                        uniqueName: rawdata.split('::')[0],
                        args: e,
                        rawdata: rawdata
                    };
                    if (cellInfo.cellType != "" && cellInfo.cellValue != "")
                        _proxy._trigger("cellContext", { args: cellInfo });
                    e.target ? e.preventDefault() : (window.event.returnValue = false);
                }
            }
        },

        /**
         * This function would be raised while exporting OLAP Grid to Excel.
         *
         * @private  
         */
        exportToExcel: function () {
            var args = {
                currentReport: _proxy.getOlapReport(),
                layout: _proxy.layout(),
                summaryCellColor: $(".summary").css("background-color")
            };
            this.doPostBack(_proxy.model.url + "/" + _proxy.model.serviceMethodSettings.exportOptions, args);
        },

        /**
         * This function is used to create progress bar containing status text and percentage.
         *
         * @private  
         */
        _createProgressBar: function () {
            var progressContainer = ej.buildTag("div#" + this._id + "progressContainer.progressContainer", "", { top: typeof (oclientProxy) != "undefined" ? ((oclientProxy.model.displaySettings.controlPlacement == "tab" || oclientProxy.model.displaySettings.mode != "chartAndGrid") ? oclientProxy.progressPos.top + 300 : (oclientProxy.model.displaySettings.defaultView == "chart" ? oclientProxy.progressPos.top + 500 : oclientProxy.progressPos.top + 200)) : ($("#" + this._id).position().top + ($("#" + this._id).height() / 2) - 30), left: typeof (oclientProxy) != "undefined" ? oclientProxy.progressPos.left + 550 : ($("#" + this._id).position().left + ($("#" + this._id).width() / 3) - 100) })[0].outerHTML;
            var progressBar = ej.buildTag("div#" + this._id + "progressBar.progressBar", "")[0].outerHTML;
            var blockControl = ej.buildTag("div#" + this._id + "blockDiv.blockDiv", "", { width: typeof (oclientProxy) != "undefined" ? ($("#" + oclientProxy._id).width()) : $("#" + this._id).width(), display: "block", opacity: "0.3", backgroundColor: "#E9E9E9", height: typeof (oclientProxy) != "undefined" ? ($("#" + oclientProxy._id).height()) : $("#" + this._id).height(), position: 'fixed', top: typeof (oclientProxy) != "undefined" ? oclientProxy.progressPos.top : ($("#" + this._id).position().top), left: typeof (oclientProxy) != "undefined" ? oclientProxy.progressPos.left : ($("#" + this._id).position().left) })[0].outerHTML;
            $("#" + _proxy._id).after(progressContainer);
            if (_proxy.model.progressMode == "normal") {
                $("#" + this._id + "progressContainer").css({ width: 0, height: 0 });
                $("#" + _proxy._id + "progressContainer").append(progressBar).append(blockControl);
            }
            else {
                var progressText = ej.buildTag("span#" + this._id + "progressText.progressText", "OlapGrid initial loading...")[0].outerHTML;
                $("#" + _proxy._id + "progressContainer").append(progressBar).append(progressText).append(blockControl);
            }
            $("#" + _proxy._id + "progressBar").ejProgressBar({ value: 0, text: 0 + " %", complete: "progressbarCompleted" });
            ogridProgressBar = $("#" + _proxy._id + "progressBar").data("ejProgressBar");
            ogridProgressText = $("#" + _proxy._id + "progressText");
        },

        /**
         * This function is used update the progress status.
         *
         * @private  
         */
        _progressStatus: function (current_Status, completion_Status, progress_Speed) {
            if (jQuery.type(completion_Status) === "string") {
                var progressText = completion_Status.split(':');
                if (progressText != undefined) completion_Status = parseInt(progressText[0]);
            }
            ogridProgressBar.setModel({ value: current_Status, text: current_Status + " %" });
            $("#" + _proxy._id + "progressContainer").show();
            $("#" + _proxy._id + "blockDiv").position = $("#" + _proxy._id).position();
            oGridTimer = window.setInterval(function () {
                ogridProgressBar.setModel({ value: current_Status, text: current_Status + " %" });
                current_Status++;
                if (current_Status >= completion_Status) {
                    window.clearInterval(oGridTimer);
                    if (progressText != undefined)
                        ogridProgressBar.setModel({ value: 100, text: progressText[1] });

                };
            }, progress_Speed);
        },

        /**
         * 	This function receives the controls update from service-end which would be utilized for rendering the widget.
         *
         * @private  
         */
        _renderControlSuccess: function (msg) {
            _proxy = this;
            if (_proxy.model.progressMode != "infinite") {
                if (_proxy.model.progressMode == "progress")
                    $("#" + _proxy._id + "progressText")[0].innerHTML = _proxy._getLocalizedLabels("MDXqueryExecutedSuccessfully") + "...";
                window.clearInterval(oGridTimer);
            }
            try {
                if (_proxy.model.progressMode != "infinite") {
                    if (_proxy.model.progressMode == "progress")
                        $("#" + _proxy._id + "progressText")[0].innerHTML = _proxy._getLocalizedLabels("RenderingStarted") + "...";
                    _proxy._progressStatus(70, 85, 50);
                    window.setTimeout(function () { progressStatus() }, 300);
                }
                else
                    window.setTimeout(function () { progressStatus() }, 1);
                function progressStatus() {
                    if (msg[0] != undefined && msg.length > 0) {
                        _proxy.setJSONRecords(msg[0].Value); _proxy.setOlapReport(msg[1].Value);
                        if (msg[2] != null && msg[2] != undefined && msg[2].Key == "PageSettings") {
                            if (_proxy.model.enableVirtualScrolling) {
                                _proxy._categPageCount = Math.ceil(JSON.parse(msg[3].Value).Column / JSON.parse(msg[2].Value).CategorialPageSize);
                                _proxy._seriesPageCount = Math.ceil(JSON.parse(msg[3].Value).Row / JSON.parse(msg[2].Value).SeriesPageSize);
                                _proxy._categCurrentPage = JSON.parse(msg[2].Value).CategorialCurrentPage;
                                _proxy._seriesCurrentPage = JSON.parse(msg[2].Value).SeriesPageSize;
                            }
                            else if ($(".e-olappager")[0] != null && $(".e-olappager")[0] != undefined)
                                _proxy._pagerObj.initPagerProperties(JSON.parse(msg[3].Value), JSON.parse(msg[2].Value));
                            if (msg[4] != null && msg[4] != undefined)
                                _proxy.model.customObject = msg[4].Value;
                        }
                        if (msg[2] != null && msg[2] != undefined && msg[2].Key != "PageSettings")
                            _proxy.model.customObject = msg[2].Value;
                    }
                    else if (msg.d != undefined && msg.d.length > 0) {
                        _proxy.setJSONRecords(msg.d[0].Value); _proxy.setOlapReport(msg.d[1].Value);
                        if (msg.d[2] != null && msg.d[2] != undefined && msg.d[2].Key == "PageSettings") {
                            if (_proxy.model.enableVirtualScrolling) {
                                _proxy._categPageCount = Math.ceil(JSON.parse(msg.d[3].Value).Column / JSON.parse(msg.d[2].Value).CategorialPageSize);
                                _proxy._seriesPageCount = Math.ceil(JSON.parse(msg.d[3].Value).Row / JSON.parse(msg.d[2].Value).SeriesPageSize);
                                _proxy._categCurrentPage = JSON.parse(msg.d[2].Value).CategorialCurrentPage;
                                _proxy._seriesCurrentPage = JSON.parse(msg.d[2].Value).SeriesCurrentPage;
                            }
                            else if ($(".e-olappager")[0] != null && $(".e-olappager")[0] != undefined)
                                _proxy._pagerObj.initPagerProperties(JSON.parse(msg.d[3].Value), JSON.parse(msg.d[2].Value));
                            if (msg.d[4] != null && msg.d[4] != undefined)
                                _proxy.model.customObject = msg.d[4].Value;
                        }
                        if (msg.d[2] != null && msg.d[2] != undefined && msg.d[2].Value == "PageSettings")
                            _proxy.model.customObject = msg.d[2].Value;
                    }
                    else if (!ej.isNullOrUndefined(msg) && ej.isNullOrUndefined(msg.d)) {
                        if (msg.PivotRecords != undefined) {
                            _proxy.setJSONRecords(msg.PivotRecords); _proxy.setOlapReport(msg.OlapReport);
                            if (msg.HeaderCounts != undefined && _proxy.model.enableVirtualScrolling) {
                                _proxy._categPageCount = Math.ceil(JSON.parse(msg.HeaderCounts).Column / JSON.parse(msg.PageSettings).CategorialPageSize);
                                _proxy._seriesPageCount = Math.ceil(JSON.parse(msg.HeaderCounts).Row / JSON.parse(msg.PageSettings).SeriesPageSize);
                                _proxy._categCurrentPage = JSON.parse(msg.PageSettings).CategorialCurrentPage;
                                _proxy._seriesCurrentPage = JSON.parse(msg.PageSettings).SeriesCurrentPage;
                            }
                            else if (msg.HeaderCounts != undefined && $(".e-olappager")[0] != null && $(".e-olappager")[0] != undefined)
                                _proxy._pagerObj.initPagerProperties(JSON.parse(msg.HeaderCounts), JSON.parse(msg.PageSettings));
                        }
                        if (msg.customObject != null && msg.customObject != undefined)
                            _proxy.model.customObject = msg.customObject;
                    }
                    if (_proxy.model.afterServiceInvoke != null)
                        _proxy._trigger("afterServiceInvoke", { action: ej.olap.OlapGrid.GridAction.DrillDown, element: _proxy.element, customObject: _proxy.model.customObject });
                    if (_proxy.getJSONRecords() != null && _proxy.getJSONRecords().length > 0)
                        _proxy.renderControlFromJSON(_proxy.getJSONRecords());
                    if (_proxy.model.enableVirtualScrolling)
                        _proxy._applyVScrolling();
                    if (_proxy.model.progressMode != "infinite") {
                        if (_proxy._JSONRecords == null)
                            $("#" + _proxy._id + "progressContainer").hide();
                        else {
                            if (_proxy.model.progressMode == "progress")
                                $("#" + _proxy._id + "progressText")[0].innerHTML = _proxy._getLocalizedLabels("RenderingSucceeded") + "...";
                        }
                    }
                    else if (typeof oclientWaitingPopup != 'undefined' && oclientWaitingPopup != null) {
                        if ($("#" + oclientProxy._id + "_maxView")[0] && this._maxViewLoading) {
                            this._maxViewLoading.hide();
                        }
                        else
                            oclientWaitingPopup.hide();
                    }
                    else
                        ogridWaitingPopup.hide();
                }
            }
            catch (err) {
                if (_proxy.model.progressMode != "infinite") {
                    if (_proxy.model.progressMode == "progress")
                        $("#" + _proxy._id + "progressText")[0].innerHTML = _proxy._getLocalizedLabels("RenderingFailed") + "!!!";
                    window.clearInterval(oChartTimer);
                    ogridProgressBar.setModel({ value: 70, text: " Failed" });
                }
            }
            var eventArgs = { action: "initialize", customObject: this.model.customObject, element: this.element };
            this._trigger("renderSuccess", eventArgs);
        },

        /**
         * 	This function receives the controls update from service-end after drilldown which would be utilized for rendering the widget.
         *
         * @private  
         */
        _drillDownSuccess: function (msg) {
            _proxy = this;
            if (_proxy.model.progressMode == "progress")
                $("#" + _proxy._id + "progressText")[0].innerHTML = _proxy._getLocalizedLabels("MDXqueryExecutedSuccessfully") + "...";
            if (msg[0] != undefined) {
                this.setJSONRecords(msg[0].Value);
                this.setOlapReport(msg[1].Value);
                if (typeof (oclientProxy) != "undefined") {
                    oclientProxy.currentReport = msg[1].Value;
                    oclientProxy.reports = msg[2].Value;
                }
                if (msg[3] != null && msg[3] != undefined && msg[3].Key == "PageSettings") {
                    if (_proxy.model.enableVirtualScrolling) {
                        _proxy._categPageCount = Math.ceil(JSON.parse(msg[4].Value).Column / JSON.parse(msg[3].Value).CategorialPageSize);
                        _proxy._seriesPageCount = Math.ceil(JSON.parse(msg[4].Value).Row / JSON.parse(msg[3].Value).SeriesPageSize);
                        _proxy._categCurrentPage = JSON.parse(msg[3].Value).CategorialCurrentPage;
                        _proxy._seriesCurrentPage = JSON.parse(msg[3].Value).SeriesPageSize;
                    }
                    else if ($(".e-olappager")[0] != null && $(".e-olappager")[0] != undefined)
                        _proxy._pagerObj.initPagerProperties(JSON.parse(msg[4].Value), JSON.parse(msg[3].Value));
                    if (msg[5] != null && msg[5] != undefined)
                        _proxy.model.customObject = msg[5].Value;
                }
                if (msg[3] != null && msg[3] != undefined && msg[3].Key != "PageSettings")
                    _proxy.model.customObject = msg[3].Value;
            }
            else if (msg.d != undefined) {
                this.setJSONRecords(msg.d[0].Value);
                this.setOlapReport(msg.d[1].Value);
                if (typeof (oclientProxy) != "undefined") {
                    oclientProxy.currentReport = msg.d[1].Value;
                    oclientProxy.reports = msg.d[2].Value;
                }
                if (msg.d[3] != null && msg.d[3] != undefined && msg.d[3].Key == "PageSettings") {
                    if (_proxy.model.enableVirtualScrolling) {
                        _proxy._categPageCount = Math.ceil(JSON.parse(msg.d[4].Value).Column / JSON.parse(msg.d[3].Value).CategorialPageSize);
                        _proxy._seriesPageCount = Math.ceil(JSON.parse(msg.d[4].Value).Row / JSON.parse(msg.d[3].Value).SeriesPageSize);
                        _proxy._categCurrentPage = JSON.parse(msg.d[3].Value).CategorialCurrentPage;
                        _proxy._seriesCurrentPage = JSON.parse(msg.d[3].Value).SeriesCurrentPage;
                    }
                    else if ($(".e-olappager")[0] != null && $(".e-olappager")[0] != undefined)
                        _proxy._pagerObj.initPagerProperties(JSON.parse(msg.d[4].Value), JSON.parse(msg.d[3].Value));
                    if (msg.d[5] != null && msg.d[5] != undefined)
                        _proxy.model.customObject = msg.d[5].Value;
                }
                if (msg.d[3] != null && msg.d[3] != undefined && msg.d[3].Key != "PageSettings")
                    _proxy.model.customObject = msg.d[3].Value;
            }
            else {
                this.setJSONRecords(msg.PivotRecords);
                this.setOlapReport(msg.OlapReport);
                if (typeof (oclientProxy) != "undefined") {
                    oclientProxy.currentReport = msg.OlapReport;
                    oclientProxy.reports = msg.reports;
                }
                if (msg.length > 3) {
                    if (_proxy.model.enableVirtualScrolling) {
                        _proxy._categPageCount = Math.ceil(JSON.parse(msg.HeaderCounts).Column / JSON.parse(msg.PageSettings).CategorialPageSize);
                        _proxy._seriesPageCount = Math.ceil(JSON.parse(msg.HeaderCounts).Row / JSON.parse(msg.PageSettings).SeriesPageSize);
                        _proxy._categCurrentPage = JSON.parse(msg.PageSettings).CategorialCurrentPage;
                        _proxy._seriesCurrentPage = JSON.parse(msg.PageSettings).SeriesCurrentPage;
                    }
                    else if ($(".e-olappager")[0] != null && $(".e-olappager")[0] != undefined)
                        _proxy._pagerObj.initPagerProperties(JSON.parse(msg.HeaderCounts), JSON.parse(msg.PageSettings));
                }
                if (msg.customObject != null && msg.customObject != undefined)
                    _proxy.model.customObject = msg.customObject;
            }
            if (this.model.afterServiceInvoke != null)
                this._trigger("afterServiceInvoke", { action: ej.olap.OlapGrid.GridAction.DrillDown, element: this.element, customObject: this.model.customObject });
            if (_proxy.model.progressMode == "progress")
                $("#" + _proxy._id + "progressText")[0].innerHTML = _proxy._getLocalizedLabels("RenderingStarted") + "...";
            this.renderControlFromJSON(this.getJSONRecords());
            this.model.currentReport = this.getOlapReport();
            this._trigger("drillSuccess", this.element);
            if (_proxy.model.enableVirtualScrolling)
                _proxy._applyVScrolling();
            if (typeof oclientWaitingPopup != 'undefined' && oclientWaitingPopup != null) {
                if ($("#" + oclientProxy._id + "_maxView")[0] && this._maxViewLoading) {
                    this._maxViewLoading.hide();
                    oclientWaitingPopup.hide();
                }
                else if (oclientProxy.model.displaySettings.mode == "gridOnly")
                    oclientWaitingPopup.hide();
            }
            else if (typeof oclientProxy != 'undefined') {
                if (oclientProxy && !oclientProxy.ogridObj._startDrilldown && !oclientProxy.ochartObj._startDrilldown || oclientProxy.model.displaySettings.mode == "gridOnly")
                    oclientWaitingPopup.hide();
            }
            else if (_proxy.model.progressMode == "infinite" && typeof oclientWaitingPopup == 'undefined') {
                ogridWaitingPopup = $("#" + this._id).data("ejWaitingPopup");
                ogridWaitingPopup.hide();
            }
            if (typeof oclientProxy != 'undefined')
                oclientProxy.ogridObj._startDrilldown = false;
            else
                ogridWaitingPopup.hide();
            var eventArgs = { action: this._drillAction, customObject: this.model.customObject, element: this.element };
            this._trigger("renderSuccess", eventArgs);
        },

        /**
        * Perform an asynchronous HTTP (Ajax) request.
        * @return jQuery
        * @example 
        * &lt;div id="OlapGrid"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Grid
        * $('#OlapGrid').ejOlapGrid({
        *       url: "OlapGridService.svc",
        *   });
        * var gridObj = $("#OlapGrid").data("ejOlapGrid");
        * gridObj.doAjaxPost("POST", "/OlapGridService.svc/Initialize", {"key", "Hello World"}, "_renderControlSuccess", null);
        * // Initiate an Ajax request.
        * &lt;/script&gt;
        * @memberof ejOlapGrid
        * @instance
        */
        doAjaxPost: function (type, url, data, onSuccess, onComplete) {
            $.ajax({
                type: type,
                url: url,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: data,
                success: $.proxy(onSuccess, this),
                complete: ej.proxy(function (onComplete) {
                    $.proxy(onComplete, this);
                    var eventArgs = { "action": this._currentAction, "customObject": this.model.customObject, element: this.element };
                    this._trigger("renderComplete", eventArgs);
                }, this),
                error: ej.proxy(function (msg, textStatus, errorThrown) {
                    if (_proxy.model.progressMode != "infinite") {
                        window.clearInterval(oGridTimer);
                        if (_proxy.model.progressMode == "progress")
                            $("#" + _proxy._id + "progressText")[0].innerHTML = _proxy._getLocalizedLabels("MDXqueryExecutionFailed") + "!!!";
                        $("#" + ogridProgressBar._id).show();
                        ogridProgressBar.setModel({ value: 0, text: errorThrown });
                    }
                    else
                        ogridWaitingPopup.hide();
                    var eventArgs = { "action": this._drillAction != "" ? this._drillAction : "initialize", "customObject": this.model.customObject, "element": this.element, "Message": msg };
                    this._trigger("renderFailure", eventArgs);
                }, this)
            });
        },

        /**
        * Perform an asynchronous HTTP (FullPost) submit.
        * @return jQuery
        * @example 
        * &lt;div id="OlapGrid"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Submitting required informatin to the service.
        * $('#OlapGrid').ejOlapGrid({
        *       url: "OlapGridService.svc",
        *   });
        * var gridObj = $("#OlapGrid").data("ejOlapGrid");
        * gridObj.doPostBack("/OlapGridService.svc/Initialize", {"key", "Hello World"});
        * // Initiate an submit.
        * &lt;/script&gt;
        * @memberof ejOlapGrid
        * @instance
        */
        doPostBack: function (url, params) {
            var form = $('<form>').attr({ 'action': url, 'method': 'POST', 'name': 'export' });
            var addParam = function (paramName, paramValue) {
                var input = $('<input type="hidden" title="params">').attr({
                    'id': paramName,
                    'name': paramName,
                    'value': paramValue
                }).appendTo(form);
            };
            for (var item in params)
                addParam(item, params[item]);
            form.appendTo(document.body).submit().remove();
        },

        /**
        * 	This function re-renders the OLAP Grid on clicking the navigating buttons on OLAP Pager.
        * @return jQuery
        * @example 
        * &lt;div id="OlapGrid"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Refreshing OLAP Grid while perform paging.
        * $('#OlapGrid').ejOlapGrid({
        *       url: "OlapGridService.svc",
        *   });
        * var gridObj = $("#OlapGrid").data("ejOlapGrid");
        * gridObj.refreshPagedOlapGrid("series", 2);
        * // Initiate an Ajax request.
        * &lt;/script&gt;
        * @memberof ejOlapGrid
        * @instance
        */
        refreshPagedOlapGrid: function (axis, pageNo) {
            if (_proxy.model.progressMode == "infinite" && typeof oclientWaitingPopup == 'undefined') {
                ogridWaitingPopup = $("#" + this._id).data("ejWaitingPopup");
                ogridWaitingPopup.show();
            }
            else {
                this._progressStatus(0, 70, 140);
                if (_proxy.model.progressMode == "progress")
                    $("#" + _proxy._id + "progressText")[0].innerHTML = "Preparing and executing MDX query...";
            }
            axis = axis.indexOf('categ') != -1 ? "categorical" : "series";
            this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.paging, JSON.stringify({ "action": "Paging", "pagingInfo": axis + ":" + pageNo, "currentReport": this.getOlapReport(), "layout": this.layout(), "customObject": null }), this._renderControlSuccess);
        },

        /**
        * 	This function receives the JSON formatted datasource to render the OLAP Grid control.
        * @return jQuery
        * @example 
        * &lt;div id="OlapGrid"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Rendering OLAP Grid from given JSON formatted data.
        * $('#OlapGrid').ejOlapGrid({
        *       url: "OlapGridService.svc",
        *   });
        * var gridObj = $("#OlapGrid").data("ejOlapGrid");
        * gridObj.renderControlFromJSON({this.getJSONRecords()});
        * // Rendering OLAP Grid.
        * &lt;/script&gt;
        * @memberof ejOlapGrid
        * @instance
        */
        renderControlFromJSON: function (jsonObj) {
            _proxy = this;
            if (_proxy.model.progressMode != "infinite")
                window.clearInterval(oGridTimer);
            var tableOlapGrid = $("<table cellspacing=\"0\" cellpadding=\"0\" role='grid'  aria-readonly='true'></table>");
            this.rowCount = 0;

            if (jsonObj != null) {
                jQuery.each(jsonObj, function (index, value) {
                    if (this.Index[0] == 0)
                        _proxy.rowCount++;
                });

                var theadOlapGrid = $("<thead></thead>");
                var tbodyOlapGrid = $("<tbody></tbody>");
                var istheadOlapGrid = true; var columnHeaderHeight = 0;
                if (jsonObj[0].CSS == "none")
                    columnHeaderHeight = jsonObj[0].RowSpan - 1;
                else {
                    jQuery.each(jsonObj, function (index, value) {
                        columnHeaderHeight++;
                        return (jsonObj[index].CSS == "colheader");
                    });
                    columnHeaderHeight = columnHeaderHeight - 2;
                }

                jQuery.each(jsonObj, function (index, value) {
                    if (index < _proxy.rowCount) {
                        if (istheadOlapGrid) {
                            istheadOlapGrid = (index >= columnHeaderHeight) ? false : true;
                            var tRow = "<tr role='row'>";
                            for (var column = index; column < jsonObj.length; column = column + _proxy.rowCount) {
                                if (jsonObj[column].Span != "Block") {
                                    tRow = tRow + "<th" + (jsonObj[column].CSS == "none" ? "" : " class=" + jsonObj[column].CSS) + " p=" + jsonObj[column].Index + " colspan=" + jsonObj[column].ColSpan + " rowspan=" + jsonObj[column].RowSpan + " role='columnheader'>" + (jsonObj[column].State == 2 ? "<span class=\"expand\ e-icon\">&nbsp;</span>" : (jsonObj[column].State == 1 ? "<span class=\"collapse\ e-icon\" title=\"Collapsed\">&nbsp;</span>" : "")) + jsonObj[column].Value + "</th>";
                                    if (jsonObj[column].RowSpan > 1 && jsonObj[column].ColSpan <= 1) {
                                        for (var i = column + 1; i < column + jsonObj[column].RowSpan; i++)
                                            jsonObj[i].Span = "Block";
                                    }
                                    else if (jsonObj[column].ColSpan > 1 && jsonObj[column].RowSpan <= 1) {
                                        for (var i = column + _proxy.rowCount; i < column + (jsonObj[column].ColSpan * _proxy.rowCount); i = i + _proxy.rowCount)
                                            jsonObj[i].Span = "Block";
                                    }
                                    else if (jsonObj[column].ColSpan > 1 && jsonObj[column].RowSpan > 1) {
                                        for (var i = column; i < column + jsonObj[column].RowSpan; i++) {
                                            for (var j = i + _proxy.rowCount; j < i + (jsonObj[column].ColSpan * _proxy.rowCount); j = j + _proxy.rowCount)
                                                jsonObj[j].Span = "Block";
                                            jsonObj[i].Span = "Block";
                                        }
                                    }
                                }
                            }
                            tRow += "</tr>";
                            $(theadOlapGrid).append(tRow);
                        }
                        else {
                            var tRow = "<tr role='row'>";
                            for (var column = index; column < jsonObj.length; column = column + _proxy.rowCount) {
                                if (jsonObj[column].Span != "Block") {
                                    if (jsonObj[column].CSS == "rowheader" || jsonObj[column].CSS == "summary" || jsonObj[column].CSS == "summary") {
                                        if (_proxy.layout().toLowerCase() == "excellikelayout") {
                                            tRow = tRow + "<th" + (jsonObj[column].CSS == "none" ? "" : " class=\"" + jsonObj[column].CSS) + "\" p=" + jsonObj[column].Index + " colspan=" + jsonObj[column].ColSpan + " rowspan=" + jsonObj[column].RowSpan + " role='rowheader'>" + (jsonObj[column].State == 2 ? "<span style=\"margin-left:" + (jsonObj[column].Level * 10) + "px\" class=\"expand\ e-icon\">&nbsp;</span>" : (jsonObj[column].State == 1 ? "<span style=\"margin-left:" + (jsonObj[column].Level * 10) + "px\" class=\"collapse\ e-icon\">&nbsp;</span>" : "<span style=\"margin-left:" + (jsonObj[column].Level * 10) + "px\">&nbsp;</span>")) + jsonObj[column].Value + "</th>";
                                        }
                                        else {
                                            tRow = tRow + "<th" + (jsonObj[column].CSS == "none" ? "" : " class=\"" + jsonObj[column].CSS) + "\" p=" + jsonObj[column].Index + " colspan=" + jsonObj[column].ColSpan + " rowspan=" + jsonObj[column].RowSpan + " role='rowheader'>" + (jsonObj[column].State == 2 ? "<span class=\"expand\ e-icon\">&nbsp;</span>" : (jsonObj[column].State == 1 ? "<span class=\"collapse\ e-icon\">&nbsp;</span>" : "")) + jsonObj[column].Value + "</th>";
                                        }
                                    }
                                    else
                                        tRow = tRow + "<td" + (jsonObj[column].CSS == "none" ? "" : " class=\"" + jsonObj[column].CSS) + "\" p=" + jsonObj[column].Index + " colspan=" + jsonObj[column].ColSpan + " rowspan=" + jsonObj[column].RowSpan + " role='gridcell'>" + (jsonObj[column].State == 2 ? "<span class=\"expand\ e-icon\">&nbsp;</span>" : (jsonObj[column].State == 1 ? "<span class=\"collapse\ e-icon\">&nbsp;</span>" : "")) + jsonObj[column].Value + "</td>";

                                    if (jsonObj[column].RowSpan > 1 && jsonObj[column].ColSpan <= 1) {
                                        for (var i = column + 1; i < column + jsonObj[column].RowSpan; i++)
                                            jsonObj[i].Span = "Block";
                                    }
                                    else if (jsonObj[column].ColSpan > 1 && jsonObj[column].RowSpan <= 1) {
                                        for (var i = column + _proxy.rowCount; i < column + (jsonObj[column].ColSpan * _proxy.rowCount); i = i + _proxy.rowCount)
                                            jsonObj[i].Span = "Block";
                                    }
                                    else if (jsonObj[column].ColSpan > 1 && jsonObj[column].RowSpan > 1) {
                                        for (var i = column; i < column + jsonObj[column].RowSpan; i++) {
                                            for (var j = i + _proxy.rowCount; j < i + (jsonObj[column].ColSpan * _proxy.rowCount); j = j + _proxy.rowCount)
                                                jsonObj[j].Span = "Block";
                                            jsonObj[i].Span = "Block";
                                        }
                                    }
                                }
                            }
                            tRow += "</tr>";
                            $(tbodyOlapGrid).append(tRow);
                        }

                    }
                });
                if (_proxy.model.progressMode != "infinite") {
                    window.clearInterval(oGridTimer);
                    this._progressStatus(85, 90, 80);
                    window.setTimeout(function () { progressStatus() }, 400);
                    function progressStatus() {
                        $(tableOlapGrid).append(theadOlapGrid);
                        $(tableOlapGrid).append(tbodyOlapGrid);
                    }
                }
                else {
                    $(tableOlapGrid).append(theadOlapGrid);
                    $(tableOlapGrid).append(tbodyOlapGrid);
                }
            }
            if (_proxy.model.progressMode != "infinite") {
                window.clearInterval(oGridTimer);
                this._progressStatus(90, 101 + ":100%", 80);
                window.setTimeout(function () { timeOut() }, 900);
                function timeOut() {
                    _proxy.element.html("");
                    if (_proxy.model.enableVirtualScrolling) {
                        _proxy._createVirtualOlapGrid(tableOlapGrid);
                    }
                    else
                        _proxy.element.append(tableOlapGrid);
                    _proxy._unWireEvents();
                    _proxy._wireEvents();
                    $("#" + _proxy._id + "progressContainer").hide();
                }
            }
            else {
                this.element.html("");
                if (_proxy.model.enableVirtualScrolling) {
                    _proxy._createVirtualOlapGrid(tableOlapGrid);
                }
                else
                    this.element.append(tableOlapGrid);
                if (_proxy.model.enableRTL) {
                    this.element.find('table').addClass("e-rtl");
                    this.element.find('table .rowheader,.colheader,.summary').css("text-align", "right");
                }
                else {
                    this.element.find('table').removeClass("e-rtl");
                    this.element.find('table .rowheader,.colheader,.summary').css("text-align", "left");
                }
                this._unWireEvents();
                this._wireEvents();
            }
        },

        /**
        * 	This function appends virtual scroll bar to the OLAP Grid.
        *
        * @private  
        */
        _createVirtualOlapGrid: function (tableOlapGrid) {
            var verticalScroll = _proxy._seriesPageCount > 1 ? ej.buildTag("div.vScrollPanel")[0].outerHTML : "";
            var horizontalScroll = _proxy._categPageCount > 1 ? ej.buildTag("div.hScrollPanel")[0].outerHTML : "";
            var oGridDiv = ej.buildTag("td.virtualScrollGrid", tableOlapGrid[0].outerHTML)[0];
            var vertiScrollTd = ej.buildTag("td.virtualScrollElement", verticalScroll);
            var horiScrollTd = ej.buildTag("td.virtualScrollElement", horizontalScroll);
            var trow = ej.buildTag("tr.virtualScrollElement", oGridDiv.outerHTML + vertiScrollTd[0].outerHTML);
            var trow2 = ej.buildTag("tr.virtualScrollElement", horiScrollTd[0].outerHTML + ej.buildTag("td.virtualScrollElement")[0].outerHTML);
            var virtualOlapGrid = ej.buildTag("tbody.oGridOuterDiv.virtualScrollElement", trow[0].outerHTML + trow2[0].outerHTML);
            this.element.html(ej.buildTag("table.virtualScrollElement", virtualOlapGrid[0].outerHTML));
            var seriesPageIndicator = ej.buildTag("div.seriesPageIndicator inActive", ej.buildTag("span.axislabel", this._getLocalizedLabels("SeriesPage"))[0].outerHTML + ej.buildTag("span.series_CurrentPage", _proxy._seriesCurrentPage)[0].outerHTML + " / " + ej.buildTag("span.series_pageCount", _proxy._seriesPageCount)[0].outerHTML)[0].outerHTML;
            if (_proxy._seriesPageCount > 1) _proxy.element.append(seriesPageIndicator);
            var categPageIndicator = ej.buildTag("div.categPageIndicator inActive", ej.buildTag("span.axislabel", this._getLocalizedLabels("CategoricalPage"))[0].outerHTML + ej.buildTag("span.categ_CurrentPage", _proxy._categCurrentPage)[0].outerHTML + " / " + ej.buildTag("span.categ_pageCount", _proxy._categPageCount)[0].outerHTML)[0].outerHTML;
            if (_proxy._categPageCount > 1) _proxy.element.append(categPageIndicator);
        }
    });

    /**
    * Enum for Layout Types. Allows the user access the different layouts for OLAP Grid. 
    *
    * @enum {String}
    * @global
    */
    ej.olap.OlapGrid.Layout = {
        Normal: "normal",
        NormalTopSummary: "normaltopsummary",
        NoSummaries: "nosummaries",
        ExcelLikeLayout: "excellikelayout"
    };

    //OLAP Grid Localization
    ej.olap.OlapGrid.locale = {};
    //Default english localized values
    ej.olap.OlapGrid.locale["en-US"] = {
        SeriesPage: "Series Page",
        CategoricalPage: "Categorical Page",
        MDXqueryExecutionFailed: "MDX query execution failed",
        PreparingAndExecutingMDXquery: "Preparing and executing MDX query",
        MDXqueryExecutedSuccessfully: "MDX query executed successfully",
        RenderingStarted: "Rendering Started",
        RenderingSucceeded: "Rendering Succeeded",
        RenderingFailed: "Rendering failed"
    };

    /**
    * Enum for Grid Action. Contains the information about current action of the OLAP Grid. 
    *
    * @enum {String}
    * @global
    */
    ej.olap.OlapGrid.GridAction = {
        Initialize: "initialize",
        DrillDown: "drillDown"
    };

    /**
    * Enum for Progress Mode. Allows the user to select a appropriate progress indicator. 
    *
    * @enum {String}
    * @global
    */
    ej.olap.OlapGrid.ProgressMode = {
        Infinite: "infinite",
        Normal: "normal",
        Progress: "progress"
    };

})(jQuery, Syncfusion); ;