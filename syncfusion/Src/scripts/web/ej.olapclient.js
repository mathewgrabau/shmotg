/*!
*  filename: ej.olapclient.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to experience Html OLAP Client component elements
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
	* @class ejOlapClient
	* @requires jquery-1.10.2.min.js
	* @requires jquery.easing.1.3.min.js
    * @requires jquery.globalize.min.js
    * @requires ej.core.js
    * @requires ej.data.js
    * @requires ej.touch.js
    * @requires ej.button.js
    * @requires ej.togglebutton.js
    * @requires ej.checkbox.js
    * @requires ej.radiobutton.js
    * @requires ej.dropdownlist.js
    * @requires ej.dialog.js
    * @requires ej.draggable.js
    * @requires ej.toolbar.js
    * @requires ej.scroller.js
    * @requires ej.maskedit.js
    * @requires ej.waitingpopup.js
    * @requires ej.treeview.js
    * @requires ej.tab.js
    * @requires ej.chart.js
    * @requires ej.olapchart.js
    * @requires ej.olapgrid.js
    * @requires ej.olapclient.js
	* @classdesc Custom Design for Html OLAP Client control.
	* @example 
    * &lt;div id="OlapClient"&gt;&lt;/div&gt; <br> 
	* &lt;script&gt;
	* // Create OLAP Client
    * $("#OlapClient").ejOlapClient(...); 	
	* &lt;/script&gt;
	*/
    ej.widget("ejOlapClient", "ej.olap.OlapClient", {

        //Root Css Class
        _rootCSS: "e-olapclient",

		//Widget element will be automatically set in this
        element: null,

        //User-defined model will be automatically set in this
        model: null,

        validTags: ["div", "span"],

        //Default model values
        defaults: {
            /**		
			* Connects the service using the specified URL for any server updates.
			* @default null
			* @type {string}
			* @example 
			* //To set url value during initialization
            * $("#OlapClient").ejOlapClient({ url: "/wcf/OlapClientService.svc" });
			* @example 
			* //Get or set the url, after initialization:<br>
			*	//Gets the url value  
			*	$("#OlapClient").ejOlapClient("option","url");<br>			
			*	//Sets the url value 
			*	$("#OlapClient").ejOlapClient("option","url", "/wcf/OlapClientService.svc" ); 
			 * @memberof ejOlapClient
			* @instance
			*/
            url: "",

            /**		
			* Sets the CSS name for custom operation.
			* @default null
			* @type {string}
			* @example 
			* //To set cssClass API value during initialization
            * $("#OlapClient").ejOlapClient({ cssClass: "Olive" });
			* @example 
			* //Get or set the cssClass API, after initialization:<br>
			*	//Gets the cssClass value  
			*	$("#OlapClient").ejOlapClient("option","cssClass");<br>			
			*	//Sets the cssClass value 
			*	$("#OlapClient").ejOlapClient("option","cssClass", "Olive" ); 
			* @memberof ejOlapClient
			* @instance
			*/
            cssClass: "",

            /**		
			* Sets the title for OLAP Client.
			* @default null
			* @type {string}
			* @example 
			* //To set title API value during initialization
            * $("#OlapClient").ejOlapClient({ title: "Olap Browser" });
			* @example 
			* //Get or set the title API, after initialization:<br>
			*	//Gets the title value  
			*	$("#OlapClient").ejOlapClient("option","title");<br>			
			*	//Sets the title value 
			*	$("#OlapClient").ejOlapClient("option","title", "Olap Browser" ); 
			* @memberof ejOlapClient
			* @instance
			*/
            title: "",

            /**		
			* Sets the layout for OLAP Grid component inside OLAP Client.
			* @default ej.olap.OlapGrid.Layout.Normal
			* @type {enum}
			* @example 
			* //To set gridLayout API value during initialization
            * $("#OlapClient").ejOlapClient({ gridLayout: ej.olap.OlapGrid.Layout.NoSummaries });
			* @example 
			* //Get or set the gridLayout API, after initialization:<br>
			*	//Gets the gridLayout value  
			*	$("#OlapClient").ejOlapClient("option","gridLayout");<br>			
			*	//Sets the gridLayout value 
			*	$("#OlapClient").ejOlapClient("option","gridLayout", ej.olap.OlapGrid.Layout.NormalTopSummary); 
			* @memberof ejOlapClient
			* @instance
			*/
            gridLayout: "Normal",

            /**		
			* Sets the type for OLAP Chart component inside OLAP Client.
			* @default ej.olap.OlapChart.ChartTypes.Column
			* @type {enum}
			* @example 
			* //To set chartType API value during initialization
            * $("#OlapClient").ejOlapClient({ chartType: ej.olap.OlapChart.ChartTypes.Spline });
			* @example 
			* //Get or set the chartType API, after initialization:<br>
			*	//Gets the chartType value  
			*	$("#OlapClient").ejOlapClient("option","chartType");<br>			
			*	//Sets the chartType value 
			*	$("#OlapClient").ejOlapClient("option","chartType", ej.olap.OlapChart.ChartTypes.Area); 
			* @memberof ejOlapClient
			* @instance
			*/
            chartType: "column",
			
			/**		
			* Allows the user to customize the control layout and appearance.
            * @default null
            * @type {object}
            * @example 
            * //To set displaySettings API value, in-order to customize the control layout and appearance.
            *  $("#OlapClient").ejOlapClient({  displaySettings: {mode: "chartandgrid"}});
            * @example 
            * //Gets or sets the displaySettings API, to customize the control layout and appearance:<br>
            * //Gets the displaySettings value  
            * $("#OlapClient").ejOlapClient("option", "displaySettings");<br>   
            * //Sets the displaySettings value 
            * $("#OlapClient").ejOlapClient("option", "displaySettings", {mode: "chartandgrid"} ); 
            * @memberof ejOlapClient
            * @instance
			*/
            displaySettings: {
                /**		
			    * Sets the display mode (Only Chart/Only Grid/Both Chart And Grid) of OLAP Client.
			    * @default ej.olap.OlapClient.DisplayMode.ChartAndGrid
			    * @type {enum}
			    * @example 
			    * //To set mode API value during initialization
                * $("#OlapClient").ejOlapClient({ displaySettings: { mode: ej.olap.OlapClient.DisplayMode.ChartOnly }});
			    * @example 
			    * //Get or set the mode API, after initialization:<br>
			    *	//Gets the mode value  
			    *	$("#OlapClient").ejOlapClient("option","displaySettings.mode");<br>			
			    *	//Sets the mode value 
			    *	$("#OlapClient").ejOlapClient("option","displaySettings.mode", ej.olap.OlapClient.DisplayMode.ChartOnly ); 
			    * @alias ejOlapClient#displaySettings->mode
			    * @instance
			    */
                mode: "chartandgrid",

                /**		
			    * Lets the user to set Chart or Grid tab as default.
			    * @default ej.olap.OlapClient.DefaultView.Grid
			    * @type {enum}
			    * @example 
			    * //To set defaultView API value during initialization
                * $("#OlapClient").ejOlapClient({ displaySettings: {defaultView: ej.olap.OlapClient.DefaultView.Grid} });
			    * @example 
			    * //Get or set the defaultView API, after initialization:<br>
			    *	//Gets the defaultView value  
			    *	$("#OlapClient").ejOlapClient("option","displaySettings.defaultView");<br>			
			    *	//Sets the defaultView value 
			    *	$("#OlapClient").ejOlapClient("option","displaySettings.defaultView", ej.olap.OlapClient.DefaultView.Chart ); 
			    * @alias ejOlapClient#displaySettings->defaultView
			    * @instance
			    */
                defaultView: "grid",

                /**		
			    * Lets the user to customize the display of OLAP Chart and OLAP Grid controls inside the OLAP Client component.
			    * @default ej.olap.OlapClient.ControlPlacement.Tab
			    * @type {enum}
			    * @example 
			    * //To set controlPlacement API value during initialization
                * $("#OlapClient").ejOlapClient({ displaySettings: {controlPlacement: ej.olap.OlapClient.ControlPlacement.Tab} });
			    * @example 
			    * //Get or set the controlPlacement API, after initialization:<br>
			    *	//Gets the controlPlacement value  
			    *	$("#OlapClient").ejOlapClient("option","displaySettings.controlPlacement");<br>			
			    *	//Sets the controlPlacement value 
			    *	$("#OlapClient").ejOlapClient("option","displaySettings.controlPlacement", ej.olap.OlapClient.ControlPlacement.Tile ); 
			    * @alias ejOlapClient#displaySettings->controlPlacement
			    * @instance
			    */
                controlPlacement: "tab",

                /**		
			    * Sets the Toggle Panel visibility mode.
			    * @default false
			    * @type {boolean}
			    * @example 
			    * //To set enableTogglePanel API value during initialization
                * $("#OlapClient").ejOlapClient({ displaySettings.enableTogglePanel: true });
			    * @example 
			    * //Get or set the enableTogglePanel API, after initialization:<br>
			    *	//Gets the enableTogglePanel value  
			    *	$("#OlapClient").ejOlapClient("option","displaySettings.enableTogglePanel");<br>			
			    *	//Sets the enableTogglePanel value 
			    *	$("#OlapClient").ejOlapClient("option","displaySettings.enableTogglePanel", true ); 
			    * @alias ejOlapClient#displaySettings->enableTogglePanel
			    * @instance
			    */
                enableTogglePanel: false,

                /**		
			    * Enables/ disables the full screen view of the OLAP components(OLAP Chart, OLAP Grid) in OLAP Client.
			    * @default false
			    * @type {boolean}
			    * @example 
			    * //To set enableFullScreen API value during initialization
                * $("#OlapClient").ejOlapClient({ displaySettings.enableFullScreen: true });
			    * @example 
			    * //Get or set the enableFullScreen API, after initialization:<br>
			    *	//Gets the enableFullScreen value  
			    *	$("#OlapClient").ejOlapClient("option","displaySettings.enableFullScreen");<br>			
			    *	//Sets the enableFullScreen value 
			    *	$("#OlapClient").ejOlapClient("option","displaySettings.enableFullScreen", true ); 
			    * @alias ejOlapClient#displaySettings->enableFullScreen
			    * @instance
			    */
                enableFullScreen: false
            },         

            /**		
			* Allows the user to set custom name for the methods at service-end invoked on AJAX post.
            * @default null
            * @type {object}
            * @example 
            * //To set serviceMethodSettings API value, to invoke the appropriate service method on UI operation.
            *  $("#OlapClient").ejOlapClient({  serviceMethodSettings: {initialize: "MyMethod"}});
            * @example 
            * //Gets or sets the serviceMethodSettings API, to invoke the appropriate service method on UI operation:<br>
            * //Gets the serviceMethodSettings value  
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings");<br>   
            * //Sets the serviceMethodSettings value 
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings",  {initialize: "MyMethod"} ); 
            * @memberof ejOlapClient
            * @instance
			*/
            serviceMethodSettings: {
			/**		
			* Allows the user to set the custom name for the service method that’s responsible for initializing OLAP Client.
            * @default "InitializeOlapClient"
            * @type {string}
            * @example 
            * //To set initialize API value, to invoke the corresponding service method for OLAP Client initialization.
            *  $("#OlapClient").ejOlapClient({  serviceMethodSettings: {initialize: "InitializeOlapClientMyMethod"});
            * @example 
            * //Gets or sets the initialize API, to invoke the corresponding service method for OLAP Client initialization:<br>
            * //Gets the initialize value  
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings");<br>   
            * //Sets the initialize value 
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings.initialize", "InitializeOlapClientMyMethod" ); 
            * @alias ejOlapClient#serviceMethodSettings->initialize
            * @instance
			*/
				initialize: "InitializeOlapClient",	
			
			/**		
			* Allows the user to set the custom name for the service method that’s responsible for updating report while removing SplitButton from AxisElementBuilder.
            * @default "RemoveSplitButton"
            * @type {string}
            * @example 
            * //To set removeSplitButton API value, to invoke the corresponding service method for performing server-side operation while removing SplitButton from the AxisElementBuilder.
            *  $("#OlapClient").ejOlapClient({  serviceMethodSettings: {removeSplitButton: "RemoveSplitButtonMyMethod"}});
            * @example 
            * //Gets or sets the removeSplitButton API, to invoke the corresponding service method for performing server-side operation while removing SplitButton from the AxisElementBuilder:<br>
            * //Gets the removeSplitButton value  
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings");<br>   
            * //Sets the removeSplitButton value 
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings.removeSplitButton", "RemoveSplitButtonMyMethod" ); 
            * @alias ejOlapClient#serviceMethodSettings->removeSplitButton
            * @instance
			*/
				removeSplitButton: "RemoveSplitButton",
           
  		    /**		
			* Allows the user to set the custom name for the service method that’s responsible for updating reports while filtering members.			
            * @default "FilterElement"
            * @type {string}
            * @example 
            * //To set filterElement API value, to invoke the corresponding service method for performing server-side operation while filtering members.
            *  $("#OlapClient").ejOlapClient({  serviceMethodSettings: {filterElement: "filterElementMyMethod"}});
            * @example 
            * //Get or set the filterElement API, to invoke the corresponding service method for performing server-side operation while filtering members:<br>
            * //Gets the filterElement value  
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings");<br>   
            * //Sets the filterElement value 
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings.filterElement", "FilterElementMyMethod" ); 
            * @alias ejOlapClient#serviceMethodSettings->filterElement
            * @instance
			*/				
				filterElement: "FilterElement", 											
			
		    /**  
            * Allows the user to set the custom name for the service method that’s responsible for updating report while dropping a Node/SplitButton inside AxisElementBuilder.
            * @default "NodeDropped"
            * @type {string}
            * @example 
            * //To set nodeDropped API value, to invoke the corresponding service method for performing server-side operation while dropping a Node/SplitButton inside AxisElementBuilder.
            *  $("#OlapClient").ejOlapClient({  serviceMethodSettings: {nodeDropped: "NodeDroppedMyMethod"}});
            * @example 
            * //Gets or sets the nodeDropped API, to invoke the corresponding service method for performing server-side operation while dropping a Node/SplitButton inside AxisElementBuilder:<br>
            * //Gets the nodeDropped value  
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings");<br>   
            * //Sets the nodeDropped value 
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings.nodeDropped","NodeDroppedMyMethod"); 
            * @alias ejOlapClient#serviceMethodSettings->nodeDropped
            * @instance
    		 */
				nodeDropped: "NodeDropped",

			/**		
			* Allows the user to set the custom name for the service method that’s responsible to get members for the tree-view inside member-editor dialog.
            * @default "FetchMemberTreeNodes"
            * @type {string}
            * @example 
            * //To set fetchMemberTreeNodes API value, to invoke the corresponding service method to get members for the tree-view inside member-editor dialog.
            *  $("#OlapClient").ejOlapClient({  serviceMethodSettings: {fetchMemberTreeNodes: "FetchMemberTreeNodesMyMethod"}});
            * @example 
            * //Gets or sets the fetchMemberTreeNodes API, to invoke the corresponding service method to get members for the tree-view inside member-editor dialog:<br>
            * //Gets the fetchMemberTreeNodes value  
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings");<br>   
            * //Sets the fetchMemberTreeNodes value 
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings.fetchMemberTreeNodes", "FetchMemberTreeNodesMyMethod" ); 
            * @alias ejOlapClient#serviceMethodSettings->fetchMemberTreeNodes
            * @instance
			 */
				fetchMemberTreeNodes: "FetchMemberTreeNodes",
				
			/**  
 		    * Allows the user to set the custom name for the service method that’s responsible for updating entire report and control while changing the Cube.
            * @default "CubeChanged"
            * @type {string}
            * @example 
            * //To set cubeChanged API value, to invoke the corresponding service method for updating entire report and control while changing the Cube.
            *  $("#OlapClient").ejOlapClient({  serviceMethodSettings: {cubeChanged: "CubeChangedMyMethod"}});
            * @example 
            * //Gets or sets the cubeChanged API, to invoke the corresponding service method for updating entire report and control while changing the Cube:<br>
            * //Gets the cubeChanged value  
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings");<br>   
            * //Sets the cubeChanged value 
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings.cubeChanged","CubeChangedMyMethod" ); 
            * @alias ejOlapClient#serviceMethodSettings->cubeChanged
            * @instance
			*/			
				cubeChanged: "CubeChanged",

            /**  
 		    * Allows the user to set the custom name for the service method that’s responsible for updating cube browser tree while changing the measure group.
            * @default "MeasureGroupChanged"
            * @type {string}
            * @example 
            * //To set measureGroupChanged API value, to invoke the corresponding service method for updating the cube browser tree while changing the measure group.
            *  $("#OlapClient").ejOlapClient({  serviceMethodSettings: {measureGroupChanged: "MeasureGroupChangedMyMethod"}});
            * @example 
            * //Gets or sets the measureGroupChanged API, to invoke the corresponding service method for updating the cube browser tree while changing the Measure group:<br>
            * //Gets the measureGroupChanged value  
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings");<br>   
            * //Sets the measureGroupChanged value 
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings.measureGroupChanged","MeasureGroupChangedMyMethod" ); 
            * @alias ejOlapClient#serviceMethodSettings->measureGroupChanged
            * @instance
			*/
                measureGroupChanged: "MeasureGroupChanged",

			/**  
		   * Allows the user to set the custom name for the service method that’s responsible for any toolbar operation.
           * @default "ToolbarOperations"
           * @type {string}
           * @example 
           * //To set the toolbarServices API value, to invoke the corresponding service method responsible for any toolbar operation.
           *  $("#OlapClient").ejOlapClient({  serviceMethodSettings: {toolbarServices: "ToolbarOperationsMyMethod"}});
           * @example 
           * //Gets or sets the toolbarServices API value, to invoke the corresponding service method responsible for any toolbar operation:<br>
           * //Gets the toolbarServices value  
           * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings");<br>   
           * //Sets the toolbarServices value 
           * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings.toolbarServices", "ToolbarOperationsMyMethod"} ); 
           * @alias ejOlapClient#serviceMethodSettings->toolbarServices
           * @instance
		   */	
				toolbarServices: "ToolbarOperations",			
				
			/**  
            * Allows the user to set the custom name for the service method that’s responsible to get the child members on node expand.
            * @default "MemberExpanded"
            * @type {string}
            * @example 
            * //To set memberExpand API value, to invoke the corresponding service method which would get the child members on node expand.
            *  $("#OlapClient").ejOlapClient({  serviceMethodSettings: {memberExpand: "MemberExpandedMyMethod"}});
            * @example 
            * //Gets or sets the memberExpand API, to invoke the corresponding service method which would get the child members on node expand:<br>
            * //Gets the memberExpand value  
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings");<br>   
            * //Sets the memberExpand value 
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings.memberExpand", "MemberExpandedMyMethod" ); 
            * @alias ejOlapClient#serviceMethodSettings->memberExpand
            * @instance
   		    */
                memberExpand: "MemberExpanded", 
				
			/**  
			 * Allows the user to set the custom name for the service method that’s responsible for saving the report collection to database.
            * @default "SaveReportToDB"
            * @type {string}
            * @example 
            * //To set saveReport API value, to invoke the corresponding service method which would save the report collection to database.
            *  $("#OlapClient").ejOlapClient({  serviceMethodSettings: {saveReport: "SaveReportToDBMyMethod"}});
            * @example 
            * //Gets or sets the saveReport API, to invoke the corresponding service method which would save the report collection to database:<br>
            * //Gets the saveReport value  
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings");<br>   
            * //Sets the saveReport value 
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings.saveReport", "SaveReportToDBMyMethod" ); 
            * @alias ejOlapClient#serviceMethodSettings->saveReport
            * @instance
  			 */
				saveReport: "SaveReportToDB",
			
			/**		
			* Allows the user to set the custom name for the service method that’s responsible for fetching the report names from the database.
            * @default "FetchReportListFromDB"
            * @type {string}
            * @example 			
            * //To set fetchReportList API value, to invoke the corresponding service method that’s responsible for fetching the report names from the database.
            *  $("#OlapClient").ejOlapClient({  serviceMethodSettings: {fetchReportList: "FetchReportListFromDBMyMethod"}});
            * @example 
            * //Gets or sets the fetchReportList API, to invoke the corresponding service method that’s responsible for fetching the report names from the database:<br>
            * //Gets the fetchReportList value  
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings");<br>   
            * //Sets the fetchReportList value 
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings.fetchReportList", "FetchReportListFromDBMyMethod" ); 
            * @alias ejOlapClient#serviceMethodSettings->fetchReportList
            * @instance
			*/
				fetchReportList: "FetchReportListFromDB",
				
			/**		
			*Allows the user to set the custom name for the service method that’s responsible for loading the report collection from database.
            * @default "LoadReportFromDB"
            * @type {string}
            * @example 
            * //To set loadReport API value, to invoke the corresponding service method that’s responsible for loading the report collection from database.
            *  $("#OlapClient").ejOlapClient({  serviceMethodSettings: {loadReport: "LoadReportFromDBMyMethod"}});
            * @example 
            * //Get or set the loadReport API, to invoke the corresponding service method that’s responsible for loading the report from the database:<br>
            * //Gets the loadReport value  
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings");<br>   
            * //Sets the loadReport value 
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings.loadReport", "LoadReportFromDBMyMethod"} ); 
            * @alias ejOlapClient#serviceMethodSettings->loadReport
            * @instance
			*/
				loadReport: "LoadReportFromDB",

            /**		
			*Allows the user to set the custom name for the service method that’s responsible for updating report collection.
            * @default "UpdateReport"
            * @type {string}
            * @example 
            * //To set updateReport API value, to invoke the corresponding service method that’s responsible for updating the report collection and current report.
            *  $("#OlapClient").ejOlapClient({  serviceMethodSettings: {updateReport: "UpdateReportFromMyMethod"}});
            * @example 
            * //Get or set the updateReport API, to invoke the corresponding service method that’s responsible for updating the current report and report collection:<br>
            * //Gets the updateReport value  
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings");<br>   
            * //Sets the updateReport value 
            * $("#OlapClient").ejOlapClient("option", "serviceMethodSettings.updateReport", "UpdateReportFromMyMethod"} ); 
            * @alias ejOlapClient#serviceMethodSettings->updateReport
            * @instance
			*/
				updateReport: "UpdateReport"
            },

            /**		
			* Custom object to pass additional information between client-end and service-end.
			* @default {}
			* @type {Object}
			* @example 
			* //To set customObject API value during initialization
            * $("#OlapClient").ejOlapClient({ customObject: {"MyObject": "Hi Syncfusion!!"} });
			* @example 
			* //Get or set the customObject API, after initialization:<br>
			*	//Gets the customObject value  
			*	$("#OlapClient").ejOlapClient("option","customObject");<br>			
			*	//Sets the customObject value 
			*	$("#OlapClient").ejOlapClient("option","customObject", {"MyObject": "Hello World!!"} ); 
			* @memberof ejOlapClient
			* @instance
			*/
            customObject: {},

            /**		
			* Enables/ disables the visibility of measure group selector drop down in Cube browser in OLAP Client.
			* @default false
			* @type {boolean}
			* @example 
			* //To set enableMeasureGroups API value during initialization
            * $("#OlapClient").ejOlapClient({ enableMeasureGroups : true });
			* @example 
			* //Get or set the enableMeasureGroups API, after initialization:<br>
			*	//Gets the enableMeasureGroups value  
			*	$("#OlapClient").ejOlapClient("option","enableMeasureGroups");<br>			
			*	//Sets the enableMeasureGroups value 
			*	$("#OlapClient").ejOlapClient("option","enableMeasureGroups", true ); 
			* @alias ejOlapClient#enableMeasureGroups
			* @instance
			*/
            enableMeasureGroups: false,

            /**		
			* Sets the progress indicator type which arises on any UI operation.
			* @default ej.olap.OlapChart.progressMode.Infinite
			* @type {enum}
			* @example 
			* //To set progressMode API value during initialization
            * $("#OlapClient").ejOlapClient({ progressMode: ej.olap.OlapChart.progressMode.Normal });
			* @example 
			* //Get or set the progressMode API, after initialization:<br>
			*	//Gets the progressMode value  
			*	$("#OlapClient").ejOlapClient("option","progressMode");<br>			
			*	//Sets the progressMode value 
			*	$("#OlapClient").ejOlapClient("option","progressMode", ej.olap.OlapChart.progressMode.Progress ); 
			* @memberof ejOlapClient
			* @instance
			*/
            progressMode: "infinite",

            /**		
			* Sets the localized language for the control.
			* @default "en-US"
			* @type {string}
			* @example 
			* //To set locale API value during initialization
            * $("#OlapClient").ejOlapClient({ locale: "en-US" });
			* @example 
			* //Get or set the locale API, after initialization:<br>
			*	//Gets the locale value  
			*	$("#OlapClient").ejOlapClient("option","locale");<br>			
			*	//Sets the locale value 
			*	$("#OlapClient").ejOlapClient("option","locale", "fr-FR" ); 
			* @memberof ejOlapClient
			* @instance
			*/
            locale: "en-US",

            //events

            /**     
			 * Fires when the control is rendered success
			 * @event
			 * @name ejOlapClient#renderSuccess	
			 * @param {Object} argument Event parameters from OLAP Client component.
             * @param {Object}  argument.customObject returns the custom object bounded with the control.
             * @param {string}  argument.element returns the outer HTML of OLAP Client control.
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the OLAP Client model.
			 * @param {string}  argument.type returns the name of the event.
			 * @example 
			 * //success event for rendering the control
             * $("#OlapClient").ejOlapClient({
             *    renderSuccess: function (args) {}
             * });      
			 * @memberof ejOlapClient
			 * @instance
			 */
            renderSuccess: null,

            /**     
			 * Fires when error occured in rendering the control
			 * @event
			 * @name ejOlapClient#renderFailure 	
			 * @param {Object} argument Event parameters from OLAP Client component
             * @param {Object}  argument.customObject returns the custom object bounded with the control.
             * @param {string}  argument.element returns the outer HTML of OLAP Client control.
			 * @param {Object}  argument.message returns the error message with error code.
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the OLAP Client model.
			 * @param {string}  argument.type returns the name of the event.
			 * @example 
			 * //event triggered when error occurs in rendering the control
             * $("#OlapClient").ejOlapClient({
             *    renderFailure: function (args) {}
             * });      
			 * @memberof ejOlapClient
			 * @instance
			 */
            renderFailure: null,

            /**     
			 * Fires on completion of rendering control
			 * @event
			 * @name ejOlapClient#renderComplete 	
			 * @param {Object} argument Event parameters from OLAP Client component
			 * @param {Object}  argument.customObject returns the custom object bounded with the control.
             * @param {string}  argument.element returns the outer HTML of OLAP Client control.
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the OLAP Client model.
			 * @param {string}  argument.type returns the name of the event.
			 * @example 
			 * //event triggered after completing rendering the control
             * $("#OlapClient").ejOlapClient({
             *    renderComplete: function (args) {}
             * });      
			 * @memberof ejOlapClient
			 * @instance
			 */
            renderComplete: null,

            /**     
			 * Fires on loading the control
			 * @event
			 * @name ejOlapClient#load 	
			 * @param {Object} argument Event parameters from OLAP Client component.
			 * @param {string}  argument.element returns the outer HTML of OLAP Client component.
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the OLAP Client model.
			 * @param {string}  argument.type returns the name of the event.
			 * @example 
			 * //event triggered on loading the control
             * $("#OlapClient").ejOlapClient({
             *    load: function (args) {}
             * });      
			 * @memberof ejOlapClient
			 * @instance
			 */
            load: null,

            /**     
			 * Fires before rendering the chart
			 * @event
			 * @name ejOlapClient#chartLoad 	
			 * @param {Object} argument Event parameters from OLAP Chart component.
			 * @param {string}  argument.action return the current action of OLAP Chart control.		 
			 * @param {object}  argument.customObject return the custom object bounds with OLAP Chart control.
			 * @param {string}  argument.element return the outer HTML of OLAP Chart control.
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the OLAP Chart model.
			 * @param {string}  argument.type returns the name of the event.	
			 * @example 
			 * //event triggered when OLAP Chart begins rendering.
             * $("#OlapClient").ejOlapClient({
             *    chartLoad: function (args) {}
             * });      
			 * @memberof ejOlapClient
			 * @instance
			 */
            chartLoad: "",

            /**    
            * Fires when the summary cell is clicked.
            * @event
            * @name ejOlapClient#beforeServiceInvoke 
			* @param {Object} argument Event parameters from OLAP Client component.
			* @param {string}  argument.action return the current action of OLAP Client control.		 
			* @param {object}  argument.customObject return the custom object bounds with OLAP Client control.
			* @param {string}  argument.element return the outer HTML of OLAP Client control.
			* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			* @param {object}  argument.model returns the OLAP Client model.
			* @param {string}  argument.type returns the name of the event.
            * @example 
            * //beforeServiceInvoke event
            * $("#OlapClient").ejOlapClient({
			* 		beforeServiceInvoke: function (args) {}
			* });
            * @memberof ejOlapClient
            * @instance
            */
            beforeServiceInvoke: null,

            /**    
            * Fires after the service is invoked.
            * @event
            * @name ejOlapClient#afterServiceInvoke 
			* @param {Object} argument Event parameters from OLAP Client component.
			* @param {string}  argument.action return the current action of OLAP Client control.		 
			* @param {object}  argument.customObject return the custom object bounds with OLAP Client control.
			* @param {string}  argument.element return the outer HTML of OLAP Client control.
			* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			* @param {object}  argument.model returns the OLAP Client model.
			* @param {string}  argument.type returns the name of the event.
            * @example 
            * //afterServiceInvoke event
            * $("#OlapClient").ejOlapClient({
			*		afterServiceInvoke: function (args) {}
			* });
            * @memberof ejOlapClient
            * @instance
            */
            afterServiceInvoke: null
        },

        /**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            displaySettings: "data",
            serviceMethodSettings: "data",
            customObject:  "data"
        },
		
		observables: ["title", "gridLayout", "displaySettings.mode", "displaySettings.defaultView", "displaySettings.controlPlacement", "displaySettings.enableTogglePanel", "locale"],
		title: ej.util.valueFunction("title"),
		gridLayout: ej.util.valueFunction("gridLayout"),
		displayMode: ej.util.valueFunction("displaySettings.mode"),
		defaultView: ej.util.valueFunction("displaySettings.defaultView"),
		controlPlacement: ej.util.valueFunction("displaySettings.controlPlacement"),
		enableTogglePanel: ej.util.valueFunction("displaySettings.enableTogglePanel"),
        locale: ej.util.valueFunction("locale"),
		
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
         * Initializes the local variables. 
         *
         * @private
         */
        _initPrivateProperties: function () {
            this._id = this.element.attr("id");
            oclientProxy = this;
            currentReport = "";
            currentCubeName = "";
            reports = "";
            reportsCount = 0;
            ogridObj = null;
            ochartObj = null;
            chartObj = null;
            this._keypress = false;
            memberTreeObj = null;
            this._chartHeight = 0;
            this._chartWidth = 0;
            this._gridHeight = 0;
            this._gridWidth = 0;
            this._initStyles = new Array();
            this._toggleStyles = new Array();
            this._initToggle = true;
            this._dimensionName = "";
            this._dllSortMeasure = null;
            this._axis = "";
            this._isSorted = false;
            this._isFiltered = false;
            this._sortOrFilterTab = '';
            this._currentAxis = "";
            this.pNode = "";
            this.progressPos = null;
            draggedSplitBtn = null;
            isDragging = false;
            oclientWaitingPopup = null;
            currentTab = this.defaultView();          
        },

        /**
         * Destroys the widget while it's no longer required. 
         *
         * @private
         */
        _destroy: function () {
            this.element.empty().removeClass("e-olapclient" + this.model.cssClass);
        },

        /**
         * This function is the point where loading/rendering of the OLAP Client widget is initiated.
         *
         * @private  
         */
        _load: function () {
            this.element.addClass(this.model.cssClass);
            if (this.model.progressMode != "infinite") {
                $("#" + oclientProxy._id + "progressContainer").remove();
                this._createProgressBar();
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("RenderingLayoutStarted");
                this._progressStatus(5, 70, 140);
            }
            else {
                $("#" + this._id).ejWaitingPopup({ showOnInit: true });
                oclientWaitingPopup = $("#" + this._id).data("ejWaitingPopup");
            }

            if (this.model.beforeServiceInvoke != null)
                this._trigger("beforeServiceInvoke", { action: "initializeClient", element: this.element, customObject: this.model.customObject });
            var serializedCustomObject = JSON.stringify(this.model.customObject);
            this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.initialize, JSON.stringify({
                "action": "initializeClient", "customObject": serializedCustomObject, "clientParams": this.model.enableMeasureGroups
            }), this._renderControlSuccess);
        },

        _setFirst: true,

        /**
         * This function is invoked on any change in the widgets property in-order to assign the altered value.
         *
         * @private 
         */
        _setModel: function (options) {
            for (var key in options) {
                switch (key) {
                    case "title": this.element.find(".titleText").text(this.title()); break;
                    case "currentCubeName": this.currentCubeName = options[key]; break;
                    case "gridLayout": this._renderOlapGrid(); break;
                    case "olapReport": this.currentReport = options[key]; break;
                    case "clientReports": this.reports = options[key]; break;
                    case "customObject": this.model.customObject = options[key]; break;
                    case "locale": { this.locale(); if(this.ogridObj || this.ochartObj) this._load(); break;}
                    case "displaySettings":{ if(this.ogridObj || this.ochartObj) this._load(); break;}
                }
            }
        },

        /**
         * This function is used to get the list of measure elements added in the current report.
         *
         * @private  
         */
        _getMeasuresList: function () {
            var measureName = "";
            this.element.find(".memberEditorDiv").find("div").each(function () { measureName += $(this)[0].id + ","; });
            return measureName;
        },

        /**
         * This function is used to get the unchecked nodes from the tree view inside member editor.
         *
         * @private  
         */
        _getUnSelectedNodes: function () {
            var treeElement = this.element.find(".editorTreeView")[0];
            var unselectedNodes = "";
            var data = $(treeElement).find(":input.nodecheckbox:not(:checked)");
            for (var i = 0; i < data.length; i++) {
                if ($(data[i].parentElement).attr('aria-checked') != 'mixed') {
                    var parentNode = $(data[i]).parents('li:eq(0)');
                    unselectedNodes += "::" + parentNode[0].id + "||" + $(parentNode).attr('tag');
                }
            }
            return unselectedNodes;
        },

        /**
         * This function is used to get the checked nodes from the tree view inside member editor.
         *
         * @private  
         */
        _getSelectedNodes: function (isSlicer) {
            if (isSlicer) {
                var treeElement = this.element.find(".editorTreeView")[0].childNodes[0];
                var selectedNodes = new Array();
                var data = $(treeElement).children();
                for (var i = 0; i < data.length; i++) {
                    var parentNode = data[i];
                    var nodeInfo = { caption: $(parentNode.firstChild).find("a").text(), parentId: parentNode.parentElement.parentElement.className.indexOf("editorTreeView") > -1 ? "None" : $(parentNode).parents()[1].id, id: parentNode.id, checked: ($(parentNode).find(':input.nodecheckbox')[0].checked || $(parentNode).find('span:nth-child(1)').attr('class').indexOf("e-chk-indeter") > -1), expanded: $(parentNode.firstChild).find(".e-minus").length > 0 ? true : false, childNodes: new Array(), tag: $(parentNode).attr('tag') };
                    if ($(parentNode).find("ul:first").children().length > 0) {
                        var liElements = $(parentNode).find("ul:first").children();
                        for (var j = 0; j < liElements.length; j++) {
                            nodeInfo.childNodes.push(this._getNodeInfo(liElements[j]));
                        }
                    }
                    selectedNodes.push(nodeInfo);
                }
                return JSON.stringify(selectedNodes);
            }
            else {
                var treeElement = $(".editorTreeView");
                var selectedNodes = "";
                var data = $(treeElement).find(':input.nodecheckbox');
                for (var i = 0; i < data.length; i++) {
                    if (data[i].checked || $(data[i].parentElement).attr('aria-checked') == 'mixed') {
                        var parentNode = $(data[i]).parents('li:eq(0)');
                        selectedNodes += "::" + parentNode[0].id + "||" + $(parentNode).attr('tag');
                    }
                }
                return selectedNodes;
            }
        },

        _getNodeInfo: function (node) {
            var childNode = { caption: $(node.firstChild).find("a").text(), parentId: node.parentElement.parentElement.className.indexOf("editorTreeView") > -1 ? "None" : $(node).parents()[1].id, id: node.id, checked: ($(node).find(':input.nodecheckbox')[0].checked || $(node).find('span:nth-child(1)').attr('class').indexOf("e-chk-indeter") > -1), expanded: $(node.firstChild).find(".e-minus").length > 0 ? true : false, childNodes: new Array(), tag: $(node).attr('tag') };
            if ($(node).find("ul:first").children().length > 0) {
                var liElements = $(node).find("ul:first").children();
                for (var i = 0; i < liElements.length; i++) {
                    childNode.childNodes.push(this._getNodeInfo(liElements[i]));
                }
            }
            return childNode;
        },

        /**
         * This function is used to remove a Split Button.
         *
         * @private  
         */
        _removeSplitBtn: function () {
            var dragBtn = $(document).find(".dragClone"); var btnTag;
            var clientBtns = this.element.find(".splitBtn");
            jQuery.each(clientBtns, function (index, value) {
                if ($($(value).children()[0]).text() == $(dragBtn).text()) {
                    btnTag = $(value).attr("tag");
                    $(value).remove();
                }
            });
            $(".dragClone").remove();
            if (this.model.progressMode != "infinite") {
                oclientProxy._progressStatus(0, 80, 50);
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("PreparingAndExecutingMDXquery");
            }
            else
                oclientWaitingPopup.show();
            if (oclientProxy.model.beforeServiceInvoke != null)
                this._trigger("beforeServiceInvoke", { action: "removeSplitButton", element: this.element, customObject: oclientProxy.model.customObject });
            var serializedCustomObject = JSON.stringify(oclientProxy.model.customObject);
            oclientProxy.doAjaxPost("POST", oclientProxy.model.url + "/" + oclientProxy.model.serviceMethodSettings.removeSplitButton, JSON.stringify({ "action": "removeSplitButton", "clientParams": btnTag, "olapReport": oclientProxy.currentReport, "clientReports": oclientProxy.reports, "customObject": serializedCustomObject }), oclientProxy._removeSplitButtonSuccess)
        },

        /**
         * This function is invoked to wire the events for UI interaction.
         *
         * @private  
         */
        _wireEvents: function () {
            oclientProxy._wireDialogEvent();
            oclientProxy._wireEditorRemoveEvent();
            oclientProxy._wireMeasureRemoveEvent();
            this._on($(document), 'keydown', this._KeyPress);
            this.element.find(".categoricalAxis, .rowAxis, .slicerAxis").find("button").ejDraggable({
                handle: 'button',
                clone: true,
                cursorAt: { top: -10, left: -10 },
                dragStart: function (event, ui) {
                    event.event.preventDefault();
                    $(this.element.find(".e-txt")).unbind('touchstart');
                    $(this.element.find(".e-txt")).unbind(ej.eventType.click);
                    isDragging = true;
                    this.element.find(".e-dialog").hide();
                    draggedSplitBtn = event.event.target;
                },
                dragStop: function (event, ui) {
                    this.element.find(".targetAxis").removeClass("targetAxis");
                    isDragging = false;
                    var cssName = null; var droppedPosition;
                    if (event.event.type == "touchend")
                        droppedPosition = oclientProxy.setSplitBtnTargetPos(event);
                    else
                        droppedPosition = oclientProxy.setSplitBtnTargetPos(event.event);
                    if (oclientProxy._dropAxisClassName != undefined && oclientProxy._dropAxisClassName != "") {
                        if (oclientProxy._dropAxisClassName == "outOfAxis")
                            oclientProxy._removeSplitBtn();
                        else
                            cssName = oclientProxy._dropAxisClassName;
                        oclientProxy._dropAxisClassName = "";
                    }
                    else if (event.target != undefined) {
                        if ($(event.target).hasClass("e-btn") || $(event.target).hasClass("removeSplitBtn"))
                            cssName = $(event.target).parents("div:eq(1)").attr("class");
                        else if (jQuery.type(event.target.className) != "string")
                            oclientProxy._removeSplitBtn();
                        else {
                            if (event.target.className.indexOf("splitBtn") > -1)
                                cssName = $(event.target).parents("div:eq(0)").attr("class");
                            else
                                cssName = event.target.className;
                        }
                    }
                    else {
                        if ($(event.event.originalEvent.srcElement).hasClass("e-btn") || $(event.event.originalEvent.srcElement).hasClass("removeSplitBtn"))
                            cssName = $(event.event.originalEvent.srcElement).parents("div:eq(1)").attr("class");
                        else if (event.event.originalEvent.srcElement.className.indexOf("splitBtn") > -1)
                            cssName = $(event.event.originalEvent.srcElement).parents("div:eq(0)").attr("class");
                        else
                            cssName = event.event.originalEvent.srcElement.className;
                    }
                    if (cssName != undefined && cssName != null) {
                        var axisName = (cssName.indexOf("categoricalAxis") > cssName.indexOf("rowAxis")) ? ((cssName.indexOf("categoricalAxis") > cssName.indexOf("slicerAxis")) ? "Categorical" : "Slicer") : ((cssName.indexOf("rowAxis") > cssName.indexOf("slicerAxis")) ? "Series" : (cssName.indexOf("slicerAxis") >= 0) ? "Slicer" : null);
                        if (axisName != null)
                            oclientProxy._splitButtonDropped(axisName, droppedPosition);
                        else
                            oclientProxy._removeSplitBtn();
                    }
                },
                helper: function (event, ui) {
                    if (event.sender.target.className.indexOf("e-btn") > -1)
                        return $(event.sender.target).clone().addClass("dragClone").appendTo(oclientProxy.element);
                    else
                        return false;
                }
            });

            this.element.find(".categoricalAxis, .rowAxis, .slicerAxis").mouseover(function () {
                if (isDragging)
                    $(this).addClass("targetAxis");
            });
            this.element.find(".categoricalAxis, .rowAxis, .slicerAxis").mouseleave(function () {
                $(this).removeClass("targetAxis");
            });

            this.element.find(".e-btn").mouseover(function (evt) {
                $(evt.target.parentNode).find("span").css("display", "inline");
            });

            this.element.find(".splitBtn").mouseover(function (evt) {
                if (isDragging)
                    $(this).addClass("dropIndicator");
            });
            this.element.find(".splitBtn").mouseleave(function (evt) {
                $(this).find("span").css("display", "none");
                $(this).removeClass("dropIndicator");
            });
            this.element.find(".sortDisable, .sortEnable, .filterDisable, .filterEnable ").bind(ej.eventType.click, function (evt) {
                if (evt.target.className == "sortDisable") {
                    $('.measuresList_wrapper,.radioBtnAsc, .radioBtnDesc, .preserveHrchy').attr("disabled", "disabled");
                    oclientProxy._dllSortMeasure.disable();
                }
                else if (evt.target.className == "sortEnable") {
                    $('.measuresList_wrapper,.radioBtnAsc, .radioBtnDesc, .preserveHrchy').removeAttr("disabled");
                    oclientProxy._dllSortMeasure.enable();
                }
                else if (evt.target.className == "filterDisable") {
                    $('.filterFrom, .filterTo').attr("disabled", "disabled");
                    oclientProxy._dllFilterCondition.disable();
                    oclientProxy._dllfMeasuresList.disable();
                }
                else if (evt.target.className == "filterEnable") {
                    $('.filterFrom').removeAttr("disabled");
                    oclientProxy._dllFilterCondition.enable();
                    oclientProxy._dllfMeasuresList.enable();
                }
            });
            this.element.find(".filterFrom , .filterTo").keypress(function (event) {
                if (event.which == 8 || event.which == 0) {
                    return true;
                }

                if (event.which < 46 || event.which > 58) {
                    return false;
                }
                if ((event.which == 46 && $(this).val().indexOf('.') != -1) || event.which == 47) {
                    return false;
                }
            });
            this.element.find(".toggleExpandButton").click(function (evt) {
                if (oclientProxy._initToggle) {
                    oclientProxy._initToggle = false; var items = {};
                    var tempWidth = oclientProxy.element.find(".cubeTable").width() + oclientProxy.element.find(".controlPanel").width() - 17
                    items["controlPanelWidth"] = tempWidth;
                    items["chartOuterWidth"] = items["chartModelWidth"] = items["gridOuterWidth"] = tempWidth - 17;
                    oclientProxy._toggleStyles.push(items);
                }
                oclientProxy._performToggleAction(oclientProxy._toggleStyles);
                oclientProxy.element.find(".csHeader, .cubeTable").hide();
                oclientProxy.element.find(".toggleCollapseButton").show();
                oclientProxy.element.find(".toggleText").show();

            });
            this.element.find(".toggleCollapseButton").click(function (evt) {
                oclientProxy._performToggleAction(oclientProxy._initStyles);
                oclientProxy.element.find(".csHeader, .cubeTable").show();
                oclientProxy.element.find(".toggleCollapseButton").hide();
                oclientProxy.element.find(".toggleText").hide();
            });
            this.element.find(".maximizedView").click(function (evt) {
                oclientProxy._maxViewBtnClick();
            });
            $(document).on('click', '.winCloseBtn', function () {
                oclientProxy._maxViewClsBtnClick();
            });
        },

        /**
         * This function is used to perform UI interactions on pressing the keyboard keys.
         *
         * @private
         */
        _KeyPress: function (e) {
            if (e.keyCode == 9) {
                if ($(".e-dialog").length > 0) {
                    $(".clientDialog").focus();
                    $(".reportName").addClass("e-focus");
                }
            }
            if ($(".e-dialog").length > 0 && e.keyCode == 13) {
                this.element.find(".dialogOKBtn").trigger("click");
                oclientProxy._off(this.element, "click", ".dialogOKBtn");
            }
            else if ($(".e-dialog").length > 0 && e.keyCode == 27) {
                this.element.find(".dialogCancelBtn").trigger("click");
                oclientProxy._off(this.element, "click", ".dialogCancelBtn");
            }
            else if ($(".e-dialog").length == 0 && e.keyCode == 27 && $(".fullScreenView").length != 0) {
                this._maxViewClsBtnClick();
            }
            else if (e.keyCode == 9 && $(".borderFilterSortDlg").length > 0) {

            }
            else if (e.keyCode == 13) {
                if (document.activeElement.className.indexOf("newReportImg") > -1) {
                    this.element.find(".newReportImg").trigger("click").off("click");
                }
                else if (document.activeElement.className.indexOf("addReportImg") > -1) {
                    this.element.find(".addReportImg ").trigger("click").off("click");
                }
                else if (document.activeElement.className.indexOf("removeReportImg") > -1) {
                    this.element.find(".removeReportImg ").trigger("click").off("click");
                }
                else if (document.activeElement.className.indexOf("renameReportImg") > -1) {
                    this.element.find(".renameReportImg").trigger("click").off("click");
                }
                else if (document.activeElement.className.indexOf("saveReportImg") > -1) {
                    this.element.find(".saveReportImg").trigger("click").off("click");
                }
                else if (document.activeElement.className.indexOf("loadReportImg") > -1) {
                    this.element.find(".loadReportImg").trigger("click").off("click");
                }
                else if (document.activeElement.className.indexOf("excelExportImg") > -1) {
                    this.element.find(".excelExportImg").trigger("click").off("click");
                }
                else if (document.activeElement.className.indexOf("maximizedView") > -1) {
                    this.element.find(".maximizedView").trigger("click").off("click");
                }
                else if (document.activeElement.className.indexOf("colSortFilterImg") > -1) {
                    this.element.find(".colSortFilterImg ").trigger("click").off("click");
                }
                else if (document.activeElement.className.indexOf("rowSortFilterImg") > -1) {
                    this.element.find(".rowSortFilterImg ").trigger("click").off("click");
                }
            }
        },

        /**
         * This function is invoked to wire the events for removing a measure.
         *
         * @private  
         */
        _wireMeasureRemoveEvent: function () {
            this.element.find(".removeMeasure").click(function (evt) {
                $($(evt.target).parent()).remove();
            });
        },

        /**
         * This function is invoked to wire the events for removing a Split Button.
         *
         * @private  
         */
        _wireEditorRemoveEvent: function () {
            this.element.find(".removeSplitBtn").click(function (evt) {
                if (oclientProxy.model.progressMode != "infinite")
                    oclientProxy._progressStatus(0, 80, 50);
                else
                    oclientWaitingPopup.show();
                $($(evt.target).parent()).remove();
                oclientProxy._off(this.element, "click", ".removeSplitBtn");
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("PreparingAndExecutingMDXquery");
                if (oclientProxy.model.beforeServiceInvoke != null)
                    oclientProxy._trigger("beforeServiceInvoke", { action: "removeSplitButton", element: this.element, customObject: oclientProxy.model.customObject });
                var serializedCustomObject = JSON.stringify(oclientProxy.model.customObject);
                oclientProxy.doAjaxPost("POST", oclientProxy.model.url + "/" + oclientProxy.model.serviceMethodSettings.removeSplitButton, JSON.stringify({ "action": "removeSplitButton", "clientParams": $(evt.target).parent().attr("tag"), "olapReport": oclientProxy.currentReport, "clientReports": oclientProxy.reports, "customObject": serializedCustomObject }), oclientProxy._removeSplitButtonSuccess);
            });
        },

        /**
         * This function is invoked to wire the toolbar dialog events.
         *
         * @private
         */
        _wireDialogEvent: function () {
            oclientProxy.element.find(".newReportImg, .addReportImg, .removeReportImg, .renameReportImg, .saveReportImg, .loadReportImg, .e-txt,.colSortFilterImg, .rowSortFilterImg").bind(ej.eventType.click, function (evt) {
                if (evt.currentTarget.parentElement.className.indexOf("splitBtn") > -1) {
                    if ($($(evt.currentTarget).parents(".splitBtn")[0]).attr('tag').indexOf("NAMEDSET") > -1) return false;
                    oclientProxy._currentAxis = $($(evt.currentTarget).parents(".splitBtn")[0]).attr('tag').split(':')[0];
                }
                if (!isDragging) {
                    evt.preventDefault();
                    if (evt.target.innerHTML != oclientProxy._getLocalizedLabels("Cancel") && evt.target.innerHTML != oclientProxy._getLocalizedLabels("OK")) {
                        oclientProxy._off(oclientProxy.element, "click", ".newReportImg, .addReportImg, .removeReportImg, .renameReportImg, .saveReportImg, .loadReportImg, .e-txt,.colSortFilterImg, .rowSortFilterImg, .chartTypesImg");
                        if (evt.target.className.indexOf("loadReportImg") >= 0) {
                            if (oclientProxy.model.progressMode != "infinite") {
                                if (oclientProxy.model.progressMode == "progress")
                                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("OpeningDialog") + "...";
                                oclientProxy._progressStatus(0, 80, 50);
                            }
                            else
                                oclientWaitingPopup.show();
                            if (oclientProxy.model.beforeServiceInvoke != null)
                                oclientProxy._trigger("beforeServiceInvoke", { action: "FetchingReportList", element: oclientProxy.element, customObject: oclientProxy.model.customObject });
                            var serializedCustomObject = JSON.stringify(oclientProxy.model.customObject);
                            oclientProxy.doAjaxPost("POST", oclientProxy.model.url + "/" + oclientProxy.model.serviceMethodSettings.fetchReportList, JSON.stringify({ "customObject": serializedCustomObject }), oclientProxy._fetchReportListSuccess);
                        }
                        else if (evt.target.className.indexOf("colSortFilterImg") >= 0 || evt.target.className.indexOf("rowSortFilterImg") >= 0) {
                            if (evt.target.className.indexOf("SortImg") >= 0)
                                oclientProxy._sortOrFilterTab = "sort";
                            else
                                oclientProxy._sortOrFilterTab = "filter";
                            if (oclientProxy.model.progressMode != "infinite") {
                                if (oclientProxy.model.progressMode == "progress")
                                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("OpeningDialog")+"...";
                                oclientProxy._progressStatus(0, 80, 50);
                            }
                            else
                                oclientWaitingPopup.show();
                            oclientProxy._isSorted = false;
                            oclientProxy._isFiltered = false;
                            oclientProxy.doAjaxPost("POST", oclientProxy.model.url + "/" + oclientProxy.model.serviceMethodSettings.toolbarServices, JSON.stringify({ "action": "FetchSortState", "toolbarOperation": null, "clientInfo": (oclientProxy._axis = (evt.target.className.indexOf("colSortFilterImg") >= 0) ? "Column" : "Row"), "olapReport": oclientProxy.currentReport, "clientReports": "" }), oclientProxy._fetchSortState);
                        }
                        else
                            oclientProxy._createDialogRequest(evt);
                        oclientProxy._dimensionName = $(evt.currentTarget).parent().attr("tag");
                    }
                }
            });

            this.element.find(".excelExportImg").click(function (evt) {
                if (oclientProxy.ogridObj)
                    oclientProxy.ogridObj.exportToExcel();
            });

            this.element.find(".chartTypesImg").click(function (evt) {
                var chartTypesDlg = ej.buildTag("div.chartTypesDialog#chartTypesDialog", ej.buildTag("table", ej.buildTag("tbody", ej.buildTag("tr",
                    ej.buildTag("td", ej.buildTag("div.line chartTypesIcon").attr({ "title": "Line", tabindex: 0 })[0].outerHTML)[0].outerHTML +
                    ej.buildTag("td", ej.buildTag("div.spline chartTypesIcon").attr({ "title": "Spline", tabindex: 0 })[0].outerHTML)[0].outerHTML +
                    ej.buildTag("td", ej.buildTag("div.column chartTypesIcon").attr({ "title": "Column", tabindex: 0 })[0].outerHTML)[0].outerHTML +
                    ej.buildTag("td", ej.buildTag("div.area chartTypesIcon").attr({ "title": "Area", tabindex: 0 })[0].outerHTML)[0].outerHTML +
                    ej.buildTag("td", ej.buildTag("div.splinearea chartTypesIcon").attr({ "title": "Spline Area", tabindex: 0 })[0].outerHTML)[0].outerHTML)[0].outerHTML +
                    ej.buildTag("tr", ej.buildTag("td", ej.buildTag("div.stepline chartTypesIcon").attr({ "title": "Step Line", tabindex: 0 })[0].outerHTML)[0].outerHTML +
                    ej.buildTag("td", ej.buildTag("div.steparea chartTypesIcon").attr({ "title": "Step Area", tabindex: 0 })[0].outerHTML)[0].outerHTML +
                    ej.buildTag("td", ej.buildTag("div.pie chartTypesIcon").attr({ "title": "Pie", tabindex: 0 })[0].outerHTML)[0].outerHTML +
                    ej.buildTag("td", ej.buildTag("div.bar chartTypesIcon").attr({ "title": "Bar", tabindex: 0 })[0].outerHTML)[0].outerHTML +
                    ej.buildTag("td", ej.buildTag("div.stackingarea chartTypesIcon").attr({ "title": "Stacking Area", tabindex: 0 })[0].outerHTML)[0].outerHTML)[0].outerHTML +
                    ej.buildTag("tr", ej.buildTag("td", ej.buildTag("div.stackingcolumn chartTypesIcon").attr({ "title": "Stacking Column", tabindex: 0 })[0].outerHTML)[0].outerHTML +
                    ej.buildTag("td", ej.buildTag("div.stackingbar chartTypesIcon").attr({ "title": "Stacking Bar", tabindex: 0 })[0].outerHTML)[0].outerHTML +
                    ej.buildTag("td", ej.buildTag("div.pyramid chartTypesIcon").attr({ "title": "Pyramid", tabindex: 0 })[0].outerHTML)[0].outerHTML)[0].outerHTML)[0].outerHTML)[0].outerHTML);
                $(chartTypesDlg).appendTo(oclientProxy.element);
                $(chartTypesDlg).css("left", evt.originalEvent.clientX + 10 + "px").css("top", evt.originalEvent.clientY + 10 + "px");
                $(".chartTypesIcon").click(function (e) {
                    $(chartTypesDlg).remove();
                    var selectedtype = e.target.className.split(" ")[0];
                    oclientProxy.model.chartType = selectedtype;
                    oclientProxy.ochartObj.model.type = selectedtype;
                    oclientProxy.ochartObj.model.commonSeriesOptions.type = selectedtype;
                    oclientProxy.ochartObj.renderControlSuccess({ "JsonRecords": JSON.stringify(oclientProxy.ochartObj.getJsonRecords()), "OlapReport": oclientProxy.ochartObj.getOlapReport() });
                    var serializedCustomObject = JSON.stringify(oclientProxy.model.customObject);
                    oclientProxy.doAjaxPost("POST", oclientProxy.model.url + "/" + oclientProxy.model.serviceMethodSettings.updateReport, JSON.stringify({
                        "action": "chartTypeChanged", "clientParams": selectedtype, "olapReport": oclientProxy.currentReport, "clientReports": oclientProxy.reports, "customObject": serializedCustomObject
                    }), oclientProxy._chartTypeChangedSuccess);
                });
            });

            $(document).click(function (e) {
                if (e.target.className.indexOf('chartTypesImg') == -1)
                    $(".chartTypesDialog").remove();
            })

            this.element.find(".dialogCancelBtn").bind(ej.eventType.click, function (e) {
                e.preventDefault();
                oclientProxy.element.find(".e-dialog").hide();
                oclientProxy.element.find(".e-dialog, .clientDialog").remove();
            });

            this.element.find(".dialogOKBtn").bind(ej.eventType.click, function (e) {
            e.preventDefault();
            var loadDlgTitle = oclientProxy.element.find(".e-titlebar")[0].textContent == undefined ? oclientProxy.element.find(".e-titlebar")[0].innerText : oclientProxy.element.find(".e-titlebar")[0].textContent;
            if (loadDlgTitle == oclientProxy._getLocalizedLabels("LoadReport")) {
                    var selectedReport = oclientProxy.element.find(".reportNameList")[0].value;
                    if (selectedReport != "") {
                        if (oclientProxy.model.progressMode != "infinite") {
                            if (oclientProxy.model.progressMode == "progress")
                                $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("PreparingAndExecutingMDXquery");
                            oclientProxy._progressStatus(0, 80, 50);
                        }
                        else
                            oclientWaitingPopup.show();
                        if (oclientProxy.model.beforeServiceInvoke != null)
                            oclientProxy._trigger("beforeServiceInvoke", { action: "loadReport", element: this.element, customObject: oclientProxy.model.customObject });
                        var serializedCustomObject = JSON.stringify(oclientProxy.model.customObject);
                        oclientProxy.doAjaxPost("POST", oclientProxy.model.url + "/" + oclientProxy.model.serviceMethodSettings.loadReport, JSON.stringify({
                            "reportName": selectedReport, "olapReport": currentReport, "clientReports": oclientProxy.reports, "customObject": serializedCustomObject
                        }), oclientProxy._toolbarOperationSuccess);
                    }
                    else {
                        alert("Please select a valid report");
                        return false;
                    }
                }

                else if (oclientProxy.element.find(".sortingDlg").length > 0) {
                    if (oclientProxy.element.find(".sortEnable")[0].checked == true && oclientProxy.element.find(".measuresList")[0].value == "") {
                        alert("Please select a valid measure.");
                        return false;
                    }
                    else if (oclientProxy.element.find(".filterEnable")[0].checked == true) {
                        if (oclientProxy._axis == "Row" && $(".rowAxis ")[0].childElementCount == 0) {
                            alert("Element not found in row axis. Please add an element in row axis for filtering."); return false;
                        }
                        if (oclientProxy._axis == "Column" && $(".categoricalAxis")[0].childElementCount == 0) {
                            alert("Element not found in column axis. Please add an element in column axis for filtering."); return false;
                        }
                        if (oclientProxy.element.find(".fMeasuresList")[0].value == "") {
                            alert("Please select a valid measure."); return false;
                        }
                        else if (oclientProxy.element.find(".filterCondition")[0].value == "") {
                            alert("Please set a valid condition."); return false;
                        }
                        else if (oclientProxy.element.find(".filterFrom")[0].value == "") {
                            alert("Please set a start value."); return false;
                        }
                        else if ((oclientProxy.element.find(".filterCondition")[0].value == "Between" || oclientProxy.element.find(".filterCondition")[0].value == "NotBetween") && oclientProxy.element.find(".filterTo")[0].value == "") {
                            alert("Please set a end value."); return false;
                        }

                    }
                    var sortingDetails = null, filteringDetails = null;
                    if ((oclientProxy._isSorted == false || oclientProxy._isSorted == true) && oclientProxy.element.find(".sortEnable")[0].checked == true)
                        sortingDetails = $("li[tag*='" + oclientProxy.element.find(".measuresList")[0].value + "']").attr("tag") + "::" + ((oclientProxy.element.find(".radioBtnAsc")[0].checked == true) ? "ASC" : "DESC") + "::" + oclientProxy._axis + "::" + ((oclientProxy.element.find(".preserveHrchy")[0].checked == true) ? "PHT" : "PHF");
                    else if (oclientProxy._isSorted == true && oclientProxy.element.find(".sortDisable")[0].checked == true)
                        sortingDetails = "Disable Sorting" + "::" + " " + "::" + oclientProxy._axis + "::" + " ";
                    else
                        sortingDetails = " " + "::" + " " + "::" + oclientProxy._axis + "::" + " ";
                    if ((oclientProxy._isFiltered == false || oclientProxy._isFiltered == true) && oclientProxy.element.find(".filterEnable")[0].checked == true)
                        filteringDetails = $("li[tag*='" + oclientProxy.element.find(".fMeasuresList")[0].value + "']").attr("tag") + "::" + oclientProxy.element.find(".filterCondition")[0].value + "::" + oclientProxy.element.find(".filterFrom")[0].value + "::" + oclientProxy.element.find(".filterTo")[0].value;
                    else if (oclientProxy._isFiltered == true && oclientProxy.element.find(".filterDisable")[0].checked == true)
                        filteringDetails = "Disable Filtering";
                    else
                        filteringDetails = "";
                    oclientProxy._SortFilterDetails = sortingDetails + "||" + filteringDetails;

                    if (oclientProxy.model.progressMode != "infinite") {
                        if (oclientProxy.model.progressMode == "progress")
                            $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("PreparingAndExecutingMDXquery");
                        oclientProxy._progressStatus(0, 80, 50);
                    }
                    else
                        oclientWaitingPopup.show();
                    if (oclientProxy.element.find(".sortEnable")[0].checked == true || oclientProxy.element.find(".filterEnable")[0].checked == true) {
                        oclientProxy.doAjaxPost("POST", oclientProxy.model.url + "/" + oclientProxy.model.serviceMethodSettings.toolbarServices, JSON.stringify({ "action": "toolbarOperation", "toolbarOperation": "SortOrFilter", "clientInfo": oclientProxy._SortFilterDetails, "olapReport": oclientProxy.currentReport, "clientReports": oclientProxy.reports }), oclientProxy._toolbarOperationSuccess);
                    }
                    else if (oclientProxy.element.find(".sortDisable")[0].checked == true || oclientProxy.element.find(".filterDisable")[0].checked == true) {
                        if (oclientProxy._isSorted == true || oclientProxy._isFiltered == true) {
                            oclientProxy.doAjaxPost("POST", oclientProxy.model.url + "/" + oclientProxy.model.serviceMethodSettings.toolbarServices, JSON.stringify({ "action": "toolbarOperation", "toolbarOperation": "SortOrFilter", "clientInfo": oclientProxy._SortFilterDetails, "olapReport": oclientProxy.currentReport, "clientReports": oclientProxy.reports }), oclientProxy._toolbarOperationSuccess);
                            oclientProxy._isSorted = false;
                        }
                        else {
                            alert("Invalid operation !");
                            if (oclientProxy.model.progressMode == "progress")
                                oclientProxy._progressHide();
                            else
                                oclientWaitingPopup.hide();
                            return false;
                        }
                    }

                }
                else {
                    if (oclientProxy._getSelectedNodes() == 0 && args_innerHTML != oclientProxy._getLocalizedLabels("Measures") && args_innerHTML != "ToolbarButtons")
                        return false;
                    var unselectedNodes = null;
                    if (args_innerHTML != "ToolbarButtons") {
                        if (oclientProxy.model.progressMode != "infinite")
                            oclientProxy._progressStatus(0, 80, 50);
                        else
                            oclientWaitingPopup.show();
                        if (args_innerHTML == oclientProxy._getLocalizedLabels("Measures"))
                            unselectedNodes = "Measures:" + oclientProxy._getMeasuresList();
                        else if (args_innerHTML != "ToolbarButtons" && args_innerHTML != undefined)
                            unselectedNodes = oclientProxy._getUnSelectedNodes() + "CHECKED" + oclientProxy._getSelectedNodes(oclientProxy._currentAxis == "Slicers" ? true : false);
                        if (args_innerHTML == oclientProxy._getLocalizedLabels("Measures") && unselectedNodes != null && unselectedNodes.split(":")[1] == "") {
                            $(oclientProxy.element).find(".splitBtn").each(function (index, value) {
                                if (value.firstChild.innerHTML == oclientProxy._getLocalizedLabels("Measures"))
                                    $(value).remove();
                            });
                        }
                        $(oclientProxy).find(".e-dialog").hide();
                        if (oclientProxy.model.progressMode == "progress")
                            $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("PreparingAndExecutingMDXquery");
                        if (oclientProxy.model.beforeServiceInvoke != null)
                            oclientProxy._trigger("beforeServiceInvoke", { "action": "filtering", element: this.element, customObject: oclientProxy.model.customObject });
                        var serializedCustomObject = JSON.stringify(oclientProxy.model.customObject);
                        oclientProxy.doAjaxPost("POST", oclientProxy.model.url + "/" + oclientProxy.model.serviceMethodSettings.filterElement, JSON.stringify({ "action": "filtering", "clientParams": unselectedNodes, "olapReport": oclientProxy.currentReport, "clientReports": oclientProxy.reports, "customObject": serializedCustomObject }), oclientProxy._filterElementSuccess);
                    }
                    else {
                        if (oclientProxy.element.find(".e-titlebar").first().text() == oclientProxy._getLocalizedLabels("RemoveReport") && reportsCount < 2)
                            oclientProxy.element.find(".e-dialog").hide();
                        else if (oclientProxy.element.find(".reportName").val() == "") {
                            return false;
                        }
                        else {
                            var reportName = oclientProxy.element.find(".reportName").val() || reportDropTarget.selectedTextValue;                         
                            var operation = oclientProxy.element.find(".e-titlebar").first().attr("tag");
                            var olapReport = (operation == "New Report" ? "" : oclientProxy.currentReport);
                            var clientReports = (operation == "New Report" ? "" : oclientProxy.reports);
                            oclientProxy.element.find(".e-dialog").hide();
                            if (oclientProxy.model.progressMode == "progress")
                                $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("OpeningDialog") + "...";
                            if (operation == "Save Report") {
                                if (oclientProxy.model.beforeServiceInvoke != null)
                                    oclientProxy._trigger("beforeServiceInvoke", { action: "saveReport", element: this.element, customObject: oclientProxy.model.customObject });
                                var serializedCustomObject = JSON.stringify(oclientProxy.model.customObject);
                                oclientProxy.doAjaxPost("POST", oclientProxy.model.url + "/" + oclientProxy.model.serviceMethodSettings.saveReport, JSON.stringify({
                                    "reportName": reportName, "olapReport": olapReport, "clientReports": clientReports, "customObject": serializedCustomObject
                                }), oclientProxy._toolbarOperationSuccess);

                            } else
                                if (oclientProxy.model.beforeServiceInvoke != null)
                                    oclientProxy._trigger("beforeServiceInvoke", { action: "toolbarOperation", element: this.element, customObject: oclientProxy.model.customObject });
                            var serializedCustomObject = JSON.stringify(oclientProxy.model.customObject);
                            oclientProxy.doAjaxPost("POST", oclientProxy.model.url + "/" + oclientProxy.model.serviceMethodSettings.toolbarServices, JSON.stringify({
                                "action": "toolbarOperation", "toolbarOperation": operation, "clientInfo": reportName, "olapReport": olapReport, "clientReports": clientReports, "customObject": serializedCustomObject
                            }), oclientProxy._toolbarOperationSuccess);
                        }
                    }
                }
                oclientProxy.element.find(".e-dialog, .clientDialog").remove();
            });
            this.element.find(".measureEditor").mouseover(function (evt) {
                $(evt.target).find("span").css("display", "inline");
            });
            this.element.find(".measureEditor").mouseleave(function (evt) {
                $(this).find("span").css("display", "none");
            });
            this.element.find(".unCheckAll,.checkAll").click(function (evt) {
                if (evt.target.className.indexOf("checkAll")>-1)
                    oclientProxy.element.find(".editorTreeView").ejTreeView("checkAll");
                else
                    oclientProxy.element.find(".editorTreeView").ejTreeView("unCheckAll");
            });
        },

        /**
         * This function is used to extract the appropriate localized text.
         *
         * @private  
         */
        _getLocalizedLabels: function (property) {
            return ej.olap.OlapClient.locale[this.locale()][property] === undefined ? ej.olap.OlapClient.locale["en-US"][property] : ej.olap.OlapClient.locale[this.locale()][property];
        },

        /**
         * This function is invoked to unwire the events registered for UI interaction.
         *
         * @private  
         */
        _unWireEvents: function () {
            $(this.element.find(".dialogCancelBtn, .dialogOKBtn, .newReportImg, .addReportImg, .removeReportImg, .renameReportImg, .e-txt, .removeSplitBtn, .unCheckAll, .checkAll, .removeMeasure, .toggleCollapseButton, .toggleExpandButton, .saveReportImg, .loadReportImg,.maximizedView,.colSortFilterImg, .rowSortFilterImg, .chartTypesImg")).unbind(ej.eventType.click);
            $(this.element.find(".dialogCancelBtn, .dialogOKBtn, .newReportImg, .addReportImg, .removeReportImg, .renameReportImg, .e-txt, .removeSplitBtn, .unCheckAll, .checkAll, .removeMeasure, .toggleCollapseButton, .toggleExpandButton, .saveReportImg, .loadReportImg,.maximizedView,.colSortFilterImg, .rowSortFilterImg, .chartTypesImg")).unbind('click');
            $(document).find(".winCloseBtn").unbind(ej.eventType.click);
            $(document).find(".winCloseBtn").unbind('click');
            this._off($(document), 'keydown', this._KeyPress);
        },

        /**
         * This function is used to create progress bar containing status text and percentage.
         *
         * @private  
         */
        _createProgressBar: function () {
            var progressContainer = ej.buildTag("div#" + oclientProxy._id + "progressContainer.clientProgressContainer", "", { top: ($("#" + this._id).position().top + ($("#" + this._id).height() / 2) - 30), left: ($("#" + this._id).position().left + ($("#" + this._id).width() / 3) - 50) })[0].outerHTML;
            var blockControl = ej.buildTag("div#" + oclientProxy._id + "blockDiv.blockDiv", "", { width: $("#" + this._id).width(), display: "block", opacity: "0.3", backgroundColor: "#E9E9E9", height: $("#" + this._id).height(), position: 'fixed', top: ($("#" + this._id).position().top), left: ($("#" + this._id).position().left) })[0].outerHTML;
            $("#" + oclientProxy._id).after(progressContainer);
            var progressBar = ej.buildTag("div#" + oclientProxy._id + "progressBar.clientProgressBar", "", {})[0].outerHTML;
            if (oclientProxy.model.progressMode == "normal") {
                $("#" + oclientProxy._id + "progressContainer").css({ width: 0, height: 0 });
                $("#" + oclientProxy._id + "progressContainer").append(progressBar).append(blockControl);
            }
            else {
                var progressText = ej.buildTag("span#" + oclientProxy._id + "progressText.clientProgressText", "Initializing...", {})[0].outerHTML;
                $("#" + oclientProxy._id + "progressContainer").append(progressBar).append(progressText).append(blockControl);
            }
            $("#" + oclientProxy._id + "progressBar").ejProgressBar({ value: 10, text: 10 + " %", complete: "progressbarCompleted" });
            oclientProgressBar = $("#" + oclientProxy._id + "progressBar").data("ejProgressBar");
        },

        /**
         * This function is used to update the progress status.
         *
         * @private  
         */
        _progressStatus: function (current_Status, completion_Status, progress_Speed) {
            if (jQuery.type(completion_Status) === "string") {
                var progressText = completion_Status.split(':');
                if (progressText != undefined) completion_Status = parseInt(progressText[0]);
            }
            oclientProgressBar.setModel({ value: current_Status, text: current_Status + " %" });
            $("#" + oclientProxy._id + "progressContainer").show();
            oClientTimer = window.setInterval(function () {
                oclientProgressBar.setModel({ value: current_Status, text: current_Status + " %" });
                current_Status++;
                if (current_Status >= completion_Status) {
                    window.clearInterval(oClientTimer);
                    if (progressText != undefined) {
                        oclientProgressBar.setModel({ value: 100, text: progressText[1] });
                    }

                };
            }, progress_Speed);

        },

        /**
         * This function is used to hide the progress bar.
         *
         * @private  
         */
        _progressHide: function () {
            if (oclientProxy.model.progressMode != "infinite") {
                window.clearInterval(oClientTimer);
                $("#" + oclientProxy._id + "progressContainer").hide();
            }
            else
                oclientWaitingPopup.hide();
        },

        /**
         * This function is used to perform appropriate action (visibility) while toggling panel.
         *
         * @private  
         */
        _performToggleAction: function (styles) {
            this.element.find(".controlPanel").width(styles[0].controlPanelWidth);
            if ((this.controlPlacement() != "horizontal") || (this.controlPlacement() == "horizontal" && this.displayMode() == "chartOnly") ||
                this.controlPlacement() == "horizontal" && this.displayMode() == "gridOnly") {
                this.element.find(".e-olapchart").width(styles[0].chartOuterWidth);
                this.element.find(".e-olapgrid").width(styles[0].gridOuterWidth);
                if (this.ochartObj != null || this.ochartObj != undefined) {
                    this.element.find("#" + this.ochartObj._id).ejOlapChart("option", "width", styles[0].chartOuterWidth+"px");
                    this.chartObj = this.element.find("#" + this.ochartObj._id + "Container").data("ejChart");
                    if (this.chartObj) {
                        this.element.find("#" + this.chartObj._id).ejChart("option", { "model": { size: { width: styles[0].chartOuterWidth+"px" } } });
                        this.element.find("#" + this.chartObj._id + "_svg").width(styles[0].chartOuterWidth);
                        this.chartObj.redraw();
                    }
                }
            }
        },

        /**
         * This function is used to update data in OLAP controls while dragging and dropping the Split Button.
         *
         * @private  
         */
        _splitButtonDropped: function (axis, droppedPosition) {
            if (draggedSplitBtn != null) {
                var params = this.element.find(".cubeName").html() + "--" + $(draggedSplitBtn).parent("div:eq(0)").attr("Tag") + "--" + axis + "--" + droppedPosition;
                draggedSplitBtn = null;
                if (oclientProxy.model.progressMode != "infinite") {
                    if (oclientProxy.model.progressMode == "progress")
                        $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("PreparingAndExecutingMDXquery");
                    this._progressStatus(0, 80, 100);
                }
                else
                    oclientWaitingPopup.show();
                if (oclientProxy.model.beforeServiceInvoke != null)
                    this._trigger("beforeServiceInvoke", { action: "nodeDropped", element: this.element, customObject: this.model.customObject });
                var serializedCustomObject = JSON.stringify(oclientProxy.model.customObject);
                oclientProxy.doAjaxPost("POST", oclientProxy.model.url + "/" + oclientProxy.model.serviceMethodSettings.nodeDropped, JSON.stringify({ "action": "nodeDropped", "dropType": "SplitButton", "nodeInfo": params, "olapReport": oclientProxy.currentReport, "clientReports": oclientProxy.reports, "customObject": serializedCustomObject }), oclientProxy._nodeDroppedSuccess);
            }
        },

        /**
         * This function receives the controls' update from service-end which would be utilized after the filtering action.
         *
         * @private  
         */
        _filterElementSuccess: function (report) {
            if (oclientProxy.model.progressMode != "infinite") {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("MDXqueryExecutedSuccessfully")+"...";
                window.clearInterval(oClientTimer);
            }
            if (report[0] != undefined) {
                oclientProxy.currentReport = report[0].Value; oclientProxy.reports = report[1].Value;
                if (report[2] != null && report[2] != undefined)
                    oclientProxy.model.customObject = report[2].Value;
            }
            else if (report.d != undefined) {
                oclientProxy.currentReport = report.d[0].Value; oclientProxy.reports = report.d[1].Value;
                if (report.d[2] != null && report.d[2] != undefined)
                    oclientProxy.model.customObject = report.d[2].Value;
            }
            else {
                oclientProxy.currentReport = report.UpdatedReport; oclientProxy.reports = report.ClientReports;
                if (report.customObject != null && report.customObject != undefined)
                    oclientProxy.model.customObject = report.customObject;
            }
            if (this.model.afterServiceInvoke != null)
                this._trigger("afterServiceInvoke", { action: "filtering", element: this.element, customObject: this.model.customObject });
            if (this.model.progressMode != "infinite") {
                this._progressStatus(90, 101 + ":100%", 50);
                window.setTimeout(function () { progressStatus() }, 300);
            }
            else
                window.setTimeout(function () { progressStatus() }, 1);
            function progressStatus() {
                if (oclientProxy.model.progressMode != "infinite") {
                    window.clearInterval(oClientTimer);
                    if (oclientProxy.model.progressMode == "progress")
                        $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("RenderingSucceeded");
                    oclientProxy._progressHide();
                }
                oclientProxy._renderControls();
                oclientProxy._unWireEvents();
                oclientProxy._wireEvents();
            }
            oclientProxy._successAction = "Filter";
            oclientProxy._trigger("renderSuccess", oclientProxy);
        },

        /**
         * This function is used to switch the control(s) to maximized view.
         *
         * @private  
         */
        _maxViewBtnClick: function () {
            var winWidth = $(window).width() - 150;
            var winHeight = $(window).height() - 100;
            var docDivTag = ej.buildTag("div.fullScreenView", "", { width: $(document).width(), height: $(document).height() });
            var winDivTag = ej.buildTag("div#" + oclientProxy._id + "_maxView.maximumView", "", { width: winWidth, height: winHeight });
            var maxViewCls = ej.buildTag("div#Winclose.winCloseBtn e-icon", "");
            if (oclientProxy.displayMode() == "chartonly" && ($("#" + oclientProxy.ochartObj._id + "Container_svg")[0])) {
                oclientProxy._fullScreenView(100, 160);
                winDivTag.append(oclientProxy.element.find("#OlapChart"));
            }
            if (oclientProxy.displayMode() == "gridOnly")
                winDivTag.append(oclientProxy.element.find("#OlapGrid").css({ "max-height": winHeight, "width": winWidth }));
            if (oclientProxy.controlPlacement() == ej.olap.OlapClient.ControlPlacement.Tab && oclientProxy.displayMode() == "chartandgrid") {
                if (currentTab == "grid")
                    winDivTag.append(oclientProxy.element.find("#OlapGrid").css({ "max-height": winHeight, "width": winWidth }));
                else if (currentTab == "chart" && ($("#" + oclientProxy.ochartObj._id + "Container_svg")[0])) {
                    oclientProxy._fullScreenView(100, 160);
                    winDivTag.append(oclientProxy.element.find("#OlapChart"));
                }
            }
            else if (oclientProxy.controlPlacement() == ej.olap.OlapClient.ControlPlacement.Tile && oclientProxy.displayMode() == "chartandgrid") {
                var hght = ($(window).height() / 2) - 50;
                oclientProxy.element.find("#OlapGrid").css({ "max-height": hght, "margin-left": "0px" });
                oclientProxy._fullScreenView(50, 160);
                if(($("#" + oclientProxy.ochartObj._id + "Container_svg")[0]))
                    if (oclientProxy.defaultView() == "chart")
                    winDivTag.append(oclientProxy.element.find("#OlapChart")).append(oclientProxy.element.find("#OlapGrid").width(($(window).width() - 160)));
                else
                    winDivTag.append(oclientProxy.element.find("#OlapGrid").width($(window).width() - 160)).append(oclientProxy.element.find("#OlapChart"));
                winDivTag.append(oclientProxy.element.find("#OlapGrid").width($(window).width() - 160));
            }
            winDivTag.append(maxViewCls);
            docDivTag.append(winDivTag);
            $("body").append(docDivTag);
        },

        /**
         * This function is used to restore the control(s) from maximized view.
         *
         * @private  
         */
        _maxViewClsBtnClick: function () {
            var fullScreen = $(".fullScreenView");
            fullScreen.find("#OlapGrid").css("margin-left", "7px");
            fullScreen.find("#OlapChart").appendTo(oclientProxy.element.find("#chartPanel"));
            if (oclientProxy.displayMode() == "chartonly" && ($("#" + oclientProxy.ochartObj._id + "Container_svg")[0]))
                oclientProxy._fullScreenViewCls(560, 790);
            if (oclientProxy.displayMode() == "gridOnly")
                fullScreen.find("#OlapGrid").css({ "width": "inherit", "max-height": '' });
            if (oclientProxy.controlPlacement() == ej.olap.OlapClient.ControlPlacement.Tab && oclientProxy.displayMode() == "chartandgrid") {
                if (currentTab == "chart" && $("#" + oclientProxy.ochartObj._id + "Container_svg")[0])
                    oclientProxy._fullScreenViewCls(547, 557);
                else
                    fullScreen.find("#OlapGrid").css({ "max-height": "530px", "width": "555px" });
            }
            if (oclientProxy.controlPlacement() == ej.olap.OlapClient.ControlPlacement.Tile && oclientProxy.displayMode() == "chartandgrid")
                if ($("#" + oclientProxy.ochartObj._id + "Container_svg")[0]) {
                    oclientProxy._fullScreenViewCls(275, 555);
                    fullScreen.find("#OlapGrid").css({ "max-height": "300px", "width": "555px" });
                }else
                    fullScreen.find("#OlapGrid").css({ "max-height": "275px", "width": "555px" });
            if (oclientProxy.enableTogglePanel() && (oclientProxy.element.find(".cubeTable").is(':visible')) == false)
                fullScreen.find("#OlapGrid").css("width", "950px");
            fullScreen.find("#OlapGrid").appendTo(oclientProxy.element.find("#gridPanel"));
            $(".maximumView").remove();
            $(".fullScreenView").remove();
        },

        /**
         * This function changes the default view to full screen view. It displays only the active control in full screen mode.
         *
         * @private  
         */
        _fullScreenView: function (height, width) {
            if (oclientProxy.ochartObj != null && oclientProxy.ochartObj != undefined && ($("#" + oclientProxy.ochartObj._id + "Container_svg")[0])) {
                oclientProxy.chartObj = oclientProxy.element.find("#" + oclientProxy.ochartObj._id + "Container").data("ejChart");
                var chartWidth = oclientProxy.chartObj.model.size.width = oclientProxy.ochartObj.model.size.width = $(window).width() - width+"px";
                if (oclientProxy.controlPlacement() == ej.olap.OlapClient.ControlPlacement.Tile && oclientProxy.displayMode() == "chartandgrid")
                    var chartHeight = oclientProxy.ochartObj.model.size.height = oclientProxy.chartObj.model.size.height = ($(window).height() / 2) - height+"px";
                else
                    var chartHeight = oclientProxy.ochartObj.model.size.height = oclientProxy.chartObj.model.size.height = $(window).height() - height+"px";
                oclientProxy.element.find("#OlapChart").css({ "min-height": chartHeight, "width": chartWidth });
                oclientProxy.chartObj.redraw();
            }
        },

        /**
         * This function resets the control to default view from maximized view.
         *
         * @private  
         */
        _fullScreenViewCls: function (height, width) {
            if (oclientProxy.ochartObj != null && oclientProxy.ochartObj != undefined) {
                oclientProxy.chartObj = oclientProxy.element.find("#" + oclientProxy.ochartObj._id + "Container").data("ejChart");
                var chartHeight = oclientProxy.chartObj.model.size.height = oclientProxy.ochartObj.model.size.height =height+"px";
                if (oclientProxy.enableTogglePanel() && (oclientProxy.element.find(".cubeTable").is(':visible')) == false)
                    var chartWidth = oclientProxy.chartObj.model.size.width = oclientProxy.ochartObj.model.size.width = "950px";                 
                else
                    var chartWidth = oclientProxy.chartObj.model.size.width = oclientProxy.ochartObj.model.size.width = width+"px";
                oclientProxy.element.find("#OlapChart").css({ "min-height": chartHeight, "width": chartWidth });
                oclientProxy.chartObj.redraw();
            }
        },

        /**
         * This function receives the control's update from service-end which would be utilized after dropping a treenode to Axis Element Builder.
         *
         * @private  
         */
        _nodeDroppedSuccess: function (data) {
            if (oclientProxy.model.progressMode != "infinite") {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("MDXqueryExecutedSuccessfully")+"...";
                window.clearInterval(oClientTimer);
                oclientProgressBar.setModel({ value: 85, text: 85 + " %" });
            }

            var columnElements, rowElements, slicerElements;
            if (data[0] != undefined) {
                columnElements = data[0].Value; rowElements = data[1].Value; slicerElements = data[2].Value;
                oclientProxy.currentReport = data[3].Value; oclientProxy.reports = data[4].Value;
                if (data[5] != null && data[5] != undefined)
                    oclientProxy.model.customObject = data[5].Value;
            }
            else if (data.d != undefined) {
                columnElements = data.d[0].Value; rowElements = data.d[1].Value; slicerElements = data.d[2].Value;
                oclientProxy.currentReport = data.d[3].Value; oclientProxy.reports = data.d[4].Value;
                if (data.d[5] != null && data.d[5] != undefined)
                    oclientProxy.model.customObject = data.d[5].Value;
            }
            else {
                columnElements = data.Columns; rowElements = data.Rows; slicerElements = data.Slicers;
                oclientProxy.currentReport = data.UpdatedReport; oclientProxy.reports = data.ClientReports;
                if (data.customObject != null && data.customObject != undefined)
                    oclientProxy.model.customObject = data.customObject;
            }
            if (this.model.afterServiceInvoke != null)
                this._trigger("afterServiceInvoke", { action: "nodeDropped", element: this.element, customObject: this.model.customObject });
            if (oclientProxy.model.progressMode != "infinite")
                oclientProgressBar.setModel({ value: 90, text: 90 + " %" });
            this.element.find(".splitBtn, .e-btn").remove();
            $(oclientProxy._createSplitButtons(columnElements, "Columns")).appendTo(".categoricalAxis");
            $(oclientProxy._createSplitButtons(rowElements, "Rows")).appendTo(".rowAxis");
            $(oclientProxy._createSplitButtons(slicerElements, "Slicers")).appendTo(".slicerAxis");
            this.element.find(".categoricalAxis, .rowAxis, .slicerAxis").find("button").ejButton({ height: "20px" });
            if (oclientProxy.model.progressMode != "infinite") {
                this._progressStatus(95, 101 + "::100%", 50);
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("RenderingSucceeded");
                window.setTimeout(function () { progressStatus() }, 300);
            }
            else
                window.setTimeout(function () { progressStatus() }, 1);
            function progressStatus() {
                oclientProxy._renderControls();
                oclientProxy._unWireEvents();
                oclientProxy._wireEvents();
                if (oclientProxy.model.progressMode != "infinite") {
                    window.clearInterval(oClientTimer);
                    oclientProxy._progressHide();
                }
            }
            oclientProxy._successAction = "NodeDrop";
            oclientProxy._trigger("renderSuccess", oclientProxy);
        },

        /**
         * This function receives the control's update from service-end after getting the members to populate the tree inside member editor.
         *
         * @private  
         */
        _editorTreeInfoSuccess: function (editorTree) {
            if (editorTree[0] != undefined) {
                if (editorTree[2] != null && editorTree[2] != undefined)
                    oclientProxy.model.customObject = editorTree[2].Value;
            }
            else if (editorTree.d != undefined) {
                if (editorTree.d[2] != null && editorTree.d[2] != undefined)
                    oclientProxy.model.customObject = editorTree.d[2].Value;
            }
            else {
                if (editorTree.customObject != null && editorTree.customObject != undefined)
                    oclientProxy.model.customObject = editorTree.customObject;
            }
            if (this.model.afterServiceInvoke != null)
                this._trigger("afterServiceInvoke", { action: "fetchMemberTreeNodes", element: this.element, customObject: this.model.customObject });
            if (oclientProxy.model.progressMode != "infinite") {
                window.clearInterval(oClientTimer);
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("OpeningDialogSucceeded") + "...";
                this._progressStatus(95, 101 + "::100%", 50);
                window.setTimeout(function () { progressStatus() }, 300);
            }
            else
                window.setTimeout(function () { progressStatus() }, 1);
            function progressStatus() {
                oclientProxy._createDialog(args_className, args_innerHTML, editorTree);
                if (oclientProxy.model.progressMode != "infinite") {
                    window.clearInterval(oClientTimer);
                    oclientProxy._progressHide();
                }
                else
                    oclientWaitingPopup.hide();
            }
            oclientProxy._successAction = "EditorTreeInfo";
            oclientProxy._trigger("renderSuccess", oclientProxy);
        },

        /**
         * 	This function receives the control's update from service-end which would be utilized for rendering the widget.
         *
         * @private  
         */
        _renderControlSuccess: function (msg) {
            eventArgs = { element: this.element, customObject: this.model.customObject };
            oclientProxy._trigger("load", eventArgs);
            if (oclientProxy.model.progressMode != "infinite") {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML =  oclientProxy._getLocalizedLabels("RenderingLayoutCompleted")+"...";
                window.clearInterval(oClientTimer);
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("RenderingStarted")+"...";
                oclientProgressBar.setModel({ value: 80, text: "80%" });
            }
            var cubes, columnElements, rowElements, slicerElements, cubeTreeInfo, measureGroupInfo;
            if (msg[0] != undefined) {
                cubes = msg[0].Value; columnElements = msg[1].Value; rowElements = msg[2].Value;
                slicerElements = msg[3].Value; cubeTreeInfo = msg[4].Value; oclientProxy.currentReport = msg[5].Value;
                oclientProxy.reports = msg[6].Value; reportsCount = msg[7].Value; reportList = $.parseJSON(msg[8].Value);
                if (oclientProxy.model.enableMeasureGroups) measureGroupInfo = $.parseJSON(msg[9].Value);
                if (msg[10] != null && msg[10] != undefined)
                    oclientProxy.model.customObject = msg[10].Value;
            }
            else if (msg.d != undefined) {
                cubes = msg.d[0].Value; columnElements = msg.d[1].Value; rowElements = msg.d[2].Value;
                slicerElements = msg.d[3].Value; cubeTreeInfo = msg.d[4].Value; oclientProxy.currentReport = msg.d[5].Value;
                oclientProxy.reports = msg.d[6].Value; reportsCount = msg.d[7].Value; reportList = $.parseJSON(msg.d[8].Value);
                if (oclientProxy.model.enableMeasureGroups) measureGroupInfo = $.parseJSON(msg.d[9].Value);
                if (msg.d[10] != null && msg.d[10] != undefined)
                    oclientProxy.model.customObject = msg.d[10].Value;
            }
            else {
                cubes = msg.Cubes; columnElements = msg.Columns; rowElements = msg.Rows;
                slicerElements = msg.Slicers; cubeTreeInfo = msg.CubeTreeInfo; oclientProxy.currentReport = msg.CurrentReport;
                oclientProxy.reports = msg.ClientReports; reportList = $.parseJSON(msg.ReportList); reportsCount = msg.ClientReportsCount;
                if (oclientProxy.model.enableMeasureGroups) measureGroupInfo = $.parseJSON(msg.MeasureGroups);
                if (msg.customObject != null && msg.customObject != undefined)
                    oclientProxy.model.customObject = msg.customObject;
            }
            if (this.model.afterServiceInvoke != null)
                this._trigger("afterServiceInvoke", { action: "initialize", element: this.element, customObject: this.model.customObject });
            
            if (oclientProxy.model.progressMode != "infinite") {
                this._progressStatus(89, 101 + ":100%", 10);
                window.setTimeout(function () { progressStatus() }, 300);
            }
            else
                window.setTimeout(function () { progressStatus() }, 1);
            function progressStatus() {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("RenderingLayoutStarted") + "...";
                var treeViewData = $.parseJSON(cubeTreeInfo);
                oclientProxy.currentCubeName = $.parseJSON(cubes)[0].name;
                var reportBar = ej.buildTag("div#reportToolbar.reportToolbar", oclientProxy._reportToolbar(), { width: "410px", height: "29px" })[0].outerHTML;
                var browserPanel = oclientProxy._createCubeSelector() + "<table class=cubeTable><tr><td valign=\"bottom\">" + oclientProxy._createCubeBrowser(cubeTreeInfo) + "</td><td valign=\"bottom\" style='padding-left:5px;'>" + oclientProxy._createAxisElementBuilder(columnElements, rowElements, slicerElements) + "</td></tr></table>";
                var htmlTag = ej.buildTag("span.outerPanel", "", { width: "1000px", height: "600px" }).append("<div class=\"titleText\"><span style='padding-left:10px'>" + oclientProxy.title() + "</span></div>" + reportBar + "<table class=\"outerTable\"><tr><td>" + browserPanel + "</td><td class=\"controlPanelTD\">" + oclientProxy._controlPanel() + "</td></tr></table>");
                oclientProxy.element.html(htmlTag).width($(".outerPanel").width());
                oclientProxy.element.find(".reportToolbar").ejToolbar();
                if ((oclientProxy.controlPlacement() == ej.olap.OlapClient.ControlPlacement.Tab && oclientProxy.defaultView() == ej.olap.OlapClient.DefaultView.Grid) || (oclientProxy.displayMode() == ej.olap.OlapClient.DisplayMode.GridOnly))
                    oclientProxy.element.find(".chartTypesImg").addClass("chartTypesOnGridView");
                var reportDropDown = "<div class ='reportList' ><input type='text' id='reportList' class='reportlist' /></div>";
                if (oclientProxy.model.enableMeasureGroups) {
                    var measureGroupDropdown = "<div class ='measureGroupselector' style='margin:5px 5px 0px 5px'><input type='text' id='measureGroupSelector' class='measureGroupSelector' /></div>";
                    $(measureGroupDropdown).prependTo(".cubeBrowser");
                    oclientProxy.element.find(".measureGroupSelector").ejDropDownList({
                        dataSource: measureGroupInfo,
                        fields: { text: "name", value: "name" },
                        height: "25px",
                        width: "100%"
                    });
                    oclientProxy.element.find(".measureGroupSelector").attr("tabindex", 0);
                }
                $(reportDropDown).appendTo(".reportToolbar");
                oclientProxy.element.find(".reportlist").ejDropDownList({
                    dataSource: reportList,
                    fields: { text: "name", value: "name" },
                    height: "20px"
                });
                oclientProxy.element.find(".reportlist").attr("tabindex", 0);
                var tempddlwidth = oclientProxy.element.find(".csHeader").width() - oclientProxy.element.find(".cubeText").width()- oclientProxy.element.find(".toggleExpandButton").width()-20;
                var cubeddlWidth = oclientProxy.enableTogglePanel() ? tempddlwidth - 25 : tempddlwidth;
                oclientProxy.element.find(".cubeSelector").ejDropDownList({
                    dataSource: $.parseJSON(cubes),
                    fields: { text: "name", value: "name" },
                    width: ""+cubeddlWidth+"px"
                });
                ddlTarget = oclientProxy.element.find('.cubeSelector').data("ejDropDownList"); 
                reportDropTarget = oclientProxy.element.find('#reportList').data("ejDropDownList");
                if (oclientProxy.model.enableMeasureGroups)
                    measureDropTarget = oclientProxy.element.find('#measureGroupSelector').data("ejDropDownList");
                ddlTarget.setSelectedText(ddlTarget.model.dataSource[0].name); 
                reportDropTarget.setSelectedText(reportDropTarget.model.dataSource[0].name);
                if (oclientProxy.model.enableMeasureGroups)
                    measureDropTarget.setSelectedText(measureDropTarget.model.dataSource[0].name);
                oclientProxy.element.find(".cubeSelector").ejDropDownList("option", "change", ej.proxy(oclientProxy.cubeChanged, oclientProxy));
                oclientProxy.element.find(".cubeSelector").attr("tabindex", 0);
                oclientProxy.element.find(".reportlist").ejDropDownList("option", "change", ej.proxy(oclientProxy.reportChanged, oclientProxy));
                if (oclientProxy.model.enableMeasureGroups)
                    oclientProxy.element.find(".measureGroupSelector").ejDropDownList("option", "change", ej.proxy(oclientProxy.measureGroupChanged, oclientProxy));
                oclientProxy.element.find(".cubeTreeView").ejTreeView({
                    fields: { id: "id", parentId: "pid", text: "name", spriteCssClass: "spriteCssClass", dataSource: treeViewData },
                    allowDragAndDrop: true,
                    allowDropChild: false,
                    allowDropSibling: false,
                    dragAndDropAcrossControl: true,
                    nodeDragStart: function () {
                        isDragging = true;
                    },
                    nodeDropped: ej.proxy(oclientProxy.nodeDropped, oclientProxy),
                    height: "466px"
                });
                oclientProxy.element.find(".cubeTreeView").attr("tabindex", 0);
                var treeViewElements = oclientProxy.element.find(".cubeTreeView").find("li");
                for (var i = 0; i < treeViewElements.length; i++) {
                    treeViewElements[i].setAttribute("tag", treeViewData[i].tag);
                }
                var cubeName = ej.buildTag("div.cubeName", $.parseJSON(cubes)[0].name)[0].outerHTML;
                $(cubeName).prependTo(".cubeBrowser");                
                oclientProxy.element.find(".categoricalAxis, .rowAxis, .slicerAxis").ejDroppable({ drop: ej.proxy(oclientProxy.onDropped, oclientProxy) });
                oclientProxy.element.find(".categoricalAxis, .rowAxis, .slicerAxis").find("button").ejButton({ height: "20px" });
                if (oclientProxy.enableTogglePanel()) {
                    $(ej.buildTag("div.toggleExpandButton e-icon")[0].outerHTML).appendTo(oclientProxy.element.find(".csHeader"));
                    $(oclientProxy.element.find(".outerTable").find("td")[0]).append(ej.buildTag("div.toggleCollapseButton e-icon")[0].outerHTML);
                    $((ej.buildTag("div.toggleText")[0].outerHTML)).insertAfter(oclientProxy.element.find(".toggleCollapseButton"));
                    oclientProxy.element.find(".toggleCollapseButton").hide();
                    oclientProxy.element.find(".toggleText").hide();
                }
                oclientProxy.element.find("#clientTab").ejTab({ itemActive: ej.proxy(oclientProxy.onTabClick, oclientProxy) });
                if (oclientProxy.defaultView() == ej.olap.OlapClient.DefaultView.Chart) {
                    oclientProxy.element.find("#OlapChart").ejOlapChart({ url: oclientProxy.model.url, customObject: oclientProxy.currentReport, locale: oclientProxy.locale(), showTooltip: true, size: { height: oclientProxy._chartHeight, width: oclientProxy._chartWidth }, commonSeriesOptions: { type: oclientProxy.model.chartType, tooltip: { visible: true } }, beforeServiceInvoke: oclientProxy.model.chartLoad, drillSuccess: ej.proxy(oclientProxy.chartDrillSuccess, oclientProxy) });
                    if (oclientProxy.gridLayout() != ej.olap.OlapGrid.Layout.Normal)
                        oclientProxy.element.find("#OlapGrid").ejOlapGrid({ url: oclientProxy.model.url, olapReport: oclientProxy.currentReport, layout: oclientProxy.gridLayout(), drillSuccess: ej.proxy(oclientProxy.gridDrillSuccess, oclientProxy) });
                    else
                        oclientProxy.element.find("#OlapGrid").ejOlapGrid({ url: oclientProxy.model.url, olapReport: oclientProxy.currentReport, drillSuccess: ej.proxy(oclientProxy.gridDrillSuccess, oclientProxy) });
                }
                else {
                    if (oclientProxy.gridLayout() != ej.olap.OlapGrid.Layout.Normal)
                        oclientProxy.element.find("#OlapGrid").ejOlapGrid({ url: oclientProxy.model.url, olapReport: oclientProxy.currentReport, layout: oclientProxy.gridLayout(), drillSuccess: ej.proxy(oclientProxy.gridDrillSuccess, oclientProxy) });
                    else
                        oclientProxy.element.find("#OlapGrid").ejOlapGrid({ url: oclientProxy.model.url, olapReport: oclientProxy.currentReport, drillSuccess: ej.proxy(oclientProxy.gridDrillSuccess, oclientProxy) });
                    oclientProxy.element.find("#OlapChart").ejOlapChart({ url: oclientProxy.model.url, customObject: oclientProxy.currentReport, locale: oclientProxy.locale(), showTooltip: true, size: { height: oclientProxy._chartHeight, width: oclientProxy._chartWidth }, commonSeriesOptions: { type: oclientProxy.model.chartType, tooltip: { visible: true } }, drillSuccess: ej.proxy(oclientProxy.chartDrillSuccess, oclientProxy), beforeServiceInvoke: oclientProxy.model.chartLoad });
                }
                if (oclientProxy.displayMode() != "chartonly")
                    oclientProxy.ogridObj = oclientProxy.element.find('#OlapGrid').data("ejOlapGrid");
                if (oclientProxy.displayMode() != "gridOnly")
                    oclientProxy.ochartObj = oclientProxy.element.find('#OlapChart').data("ejOlapChart");
                var items = {};
                if (oclientProxy.ochartObj != null) {
                    oclientProxy.element.find('#OlapChart').width(oclientProxy.ochartObj.model.size.width);
                    items["chartModelWidth"] = oclientProxy.ochartObj.model.size.width;
                }
                items["controlPanelWidth"] = oclientProxy.element.find(".controlPanel").width();
                items["chartOuterWidth"] = oclientProxy._chartWidth;
                items["gridOuterWidth"] = oclientProxy._gridWidth;
                oclientProxy._initStyles.push(items);
                oclientProxy._wireEvents();
                if (oclientProxy.model.progressMode != "infinite") {
                    oclientProxy._progressStatus(100, 101, 10);
                    oclientProxy._progressHide();
                    $("#" + oclientProxy._id + "progressContainer").css({ top: ($("#" + oclientProxy._id).height() / 2) - 30, left: (($("#" + oclientProxy._id).width() / 2)), position: 'absolute' });
                    $("#" + oclientProxy._id + "blockDiv").css({ height: $("#" + oclientProxy._id).height(), width: $("#" + oclientProxy._id).width() });
                }
            }
            if (oclientProxy.model.progressMode == "progress")
                $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("RenderingSucceeded") + "...";
            oclientProxy._successAction = "ClientRender";
            oclientProxy._trigger("renderSuccess", oclientProxy);
            oclientProxy.progressPos = $("#" + oclientProxy._id).position();
        },

        _measureGroupChangedSuccess: function (cubeTree) {
            var cubeTreeInfo;
            if (cubeTree[0] != undefined) {
                cubeTreeInfo = cubeTree[0].Value;
            }
            if (cubeTree.d != undefined) {
                cubeTreeInfo = cubeTree.d[0].Value;
            }
            else
                cubeTreeInfo = cubeTree.CubeTreeInfo;
            this.element.find(".e-treeview, .cubeTreeView").remove();
            var cubeTree = ej.buildTag("div#cubeTreeView.cubeTreeView")[0].outerHTML;
            this.element.find(".cubeBrowser").append(cubeTree);
            var treeViewData = $.parseJSON(cubeTreeInfo);
            this.element.find(".cubeTreeView").ejTreeView({
                fields: { id: "id", parentId: "pid", text: "name", spriteCssClass: "spriteCssClass", dataSource: treeViewData },
                allowDragAndDrop: true,
                allowDropChild: false,
                allowDropSibling: false,
                dragAndDropAcrossControl: true,
                nodeDropped: ej.proxy(this.nodeDropped, this),
                height: "466px"
            });
            var treeViewElements = oclientProxy.element.find(".cubeTreeView").find("li");
            for (var i = 0; i < treeViewElements.length; i++) {
                treeViewElements[i].setAttribute("tag", treeViewData[i].tag);
            }
            if (oclientProxy.model.progressMode != "infinite") {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("RenderingSucceeded") + "...";
                this._progressStatus(90, 101 + ":100%", 20);
                window.setTimeout(function () { progressStatus() }, 300);
            }
            else
                window.setTimeout(function () { progressStatus() }, 1);
            function progressStatus() {
                oclientProxy._unWireEvents();
                oclientProxy._wireEvents();
                if (oclientProxy.model.progressMode != "infinite")
                    oclientProxy._progressHide();
                else
                    oclientWaitingPopup.hide();
            }
            oclientProxy._successAction = "MeasureGroupChange";
        },

        /**
         * 	This function receives the control's update from service-end after changing the cube.
         *
         * @private  
         */
        _cubeChangedSuccess: function (report) {
            if (oclientProxy.model.progressMode != "infinite") {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("RenderingLayoutCompleted")+"...";
                window.clearInterval(oClientTimer);
                oclientProgressBar.setModel({ value: 83, text: 83 + " %" });
            }
            var cubeTreeInfo, measureGroupInfo, chartSettings;
            if (oclientProxy.model.progressMode == "progress")
                $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("RenderingStarted")+"...";
            if (report[0] != undefined) {
                oclientProxy.currentReport = report[0].Value; cubeTreeInfo = report[1].Value; oclientProxy.reports = report[2].Value;
                reportsCount = report[3].Value; reportList = $.parseJSON(report[4].Value);
                if (oclientProxy.model.enableMeasureGroups) measureGroupInfo = $.parseJSON(report[5].Value);
                chartSettings = $.parseJSON(report[6].Value);
                if (report[7] != null && report[7] != undefined)
                    oclientProxy.model.customObject = report[7].Value;
            }
            else if (report.d != undefined) {
                oclientProxy.currentReport = report.d[0].Value; cubeTreeInfo = report.d[1].Value; oclientProxy.reports = report.d[2].Value;
                reportsCount = report.d[3].Value; reportList = $.parseJSON(report.d[4].Value);
                if (oclientProxy.model.enableMeasureGroups) measureGroupInfo = $.parseJSON(report.d[5].Value);
                chartSettings = $.parseJSON(report.d[6].Value); 
                if (report.d[7] != null && report.d[7] != undefined)
                    oclientProxy.model.customObject = report.d[7].Value;
            }
            else {
                oclientProxy.currentReport = report.NewReport; cubeTreeInfo = report.CubeTreeInfo; oclientProxy.reports = report.ClientReports;
                reportsCount = report.ReportsCount; reportList = $.parseJSON(report.ReportList);
                if (oclientProxy.model.enableMeasureGroups) measureGroupInfo = $.parseJSON(report.MeasureGroups);
                chartSettings = $.parseJSON(report.ControlSettings);
                if (report.customObject != null && report.customObject != undefined)
                    oclientProxy.model.customObject = report.customObject;
            }
            oclientProxy.model.chartType = chartSettings.ChartType.toLowerCase();
            if (this.model.afterServiceInvoke != null)
                this._trigger("afterServiceInvoke", { action: "cubeChanged", element: this.element, customObject: this.model.customObject });
            this.element.find(".splitBtn, .e-olapgrid, .e-olapchart, .e-treeview, .cubeTreeView, .cubeName, .measureGroupselector").remove();
            var cubeTree = ej.buildTag("div#cubeTreeView.cubeTreeView")[0].outerHTML;
            var cubeName = ej.buildTag("div.cubeName", this.currentCubeName)[0].outerHTML;
            if (this.model.enableMeasureGroups) {
                var measureGroupDropdown = "<div class ='measureGroupselector' style='margin:5px 5px 0px 5px'><input type='text' id='measureGroupSelector' class='measureGroupSelector' /></div>";
                $(measureGroupDropdown).prependTo(".cubeBrowser");
                this.element.find(".measureGroupSelector").ejDropDownList({
                    dataSource: measureGroupInfo,
                    fields: { text: "name", value: "name" },
                    height: "25px",
                    width: "100%"
                });
                this.element.find(".measureGroupSelector").attr("tabindex", 0);
                measureDropTarget = oclientProxy.element.find('#measureGroupSelector').data("ejDropDownList");
                measureDropTarget.setSelectedText(measureDropTarget.model.dataSource[0].name);
                this.element.find(".measureGroupSelector").ejDropDownList("option", "change", ej.proxy(oclientProxy.measureGroupChanged, oclientProxy));
            }            
            var treeViewData = $.parseJSON(cubeTreeInfo);
            $(cubeTree).appendTo(".cubeBrowser");
            this.element.find(".cubeTreeView").ejTreeView({
                fields: { id: "id", parentId: "pid", text: "name", spriteCssClass: "spriteCssClass", dataSource: treeViewData },
                allowDragAndDrop: true,
                allowDropChild: false,
                allowDropSibling: false,
                dragAndDropAcrossControl: true,
                nodeDropped: ej.proxy(this.nodeDropped, this),
                height: "466px"
            });
            var treeViewElements = oclientProxy.element.find(".cubeTreeView").find("li");
            for (var i = 0; i < treeViewElements.length; i++) {
                treeViewElements[i].setAttribute("tag", treeViewData[i].tag);
            }
            this.element.find(".reportlist").ejDropDownList("option", "change", "");
            this.element.find(".reportlist").ejDropDownList("option", "dataSource", reportList);
            reportDropTarget.setSelectedText(reportDropTarget.model.dataSource[reportList.length - 1].name);
            if (oclientProxy.model.progressMode != "infinite") {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("RenderingSucceeded") + "...";
                this._progressStatus(90, 101 + ":100%", 20);
                window.setTimeout(function () { progressStatus() }, 300);
            }
            else
                window.setTimeout(function () { progressStatus() }, 1);
            function progressStatus() {
                $(cubeName).prependTo(".cubeBrowser");
                oclientProxy._unWireEvents();
                oclientProxy._wireEvents();
                if (oclientProxy.model.progressMode != "infinite")
                    oclientProxy._progressHide();
                else
                    oclientWaitingPopup.hide();
            }
            oclientProxy._successAction = "CubeChange";
            oclientProxy._trigger("renderSuccess", oclientProxy);
        },

        /**
         * 	This function receives the control's update from service-end after removing Split Button.
         *
         * @private  
         */
        _removeSplitButtonSuccess: function (report) {
            if (oclientProxy.model.progressMode != "infinite") {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("MDXqueryExecutedSuccessfully")+"...";
                window.clearInterval(oClientTimer);
                oclientProgressBar.setModel({ value: 89, text: 89 + " %" });
            }
            if (report[0] != undefined) {
                oclientProxy.currentReport = report[0].Value; oclientProxy.reports = report[1].Value;
                if (report[2] != null && report[2] != undefined)
                    oclientProxy.model.customObject = report[2].Value;
            }
            else if (report.d != undefined) {
                oclientProxy.currentReport = report.d[0].Value; oclientProxy.reports = report.d[1].Value;
                if (report.d[2] != null && report.d[2] != undefined)
                    oclientProxy.model.customObject = report.d[2].Value;
            }
            else {
                oclientProxy.currentReport = report.UpdatedReport; oclientProxy.reports = report.ClientReports;
                if (report.customObject != null && report.customObject != undefined)
                    oclientProxy.model.customObject = report.customObject;
            }
            if (this.model.afterServiceInvoke != null)
                this._trigger("afterServiceInvoke", { action: "removeSplitButton", element: this.element, customObject: this.model.customObject });
            if (oclientProxy.model.progressMode != "infinite") {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("RenderingSucceeded");
                this._progressStatus(95, 101 + ":100%", 50);
                window.setTimeout(function () { progressStatus() }, 300);
            }
            else
                window.setTimeout(function () { progressStatus() }, 1);
            function progressStatus() {
                oclientProxy._renderControls();
                oclientProxy._unWireEvents();
                oclientProxy._wireEvents();
                if (oclientProxy.model.progressMode != "infinite")
                    oclientProxy._progressHide();
            }
            oclientProxy._successAction = "ButtonRemove";
            oclientProxy._trigger("renderSuccess", oclientProxy);
        },

        _chartTypeChangedSuccess: function (report) {
            if (report[0] != undefined) {
                this.currentReport = report[0].Value;
                this.reports = report[1].Value;
            }
            else if (report.d != undefined) {
                this.currentReport = report.d[0].Value;
                this.reports = report.d[1].Value;
            }
            else {
                this.currentReport = report.CurrentReport;
                this.reports = report.ClientReports;
            }
        },

        /**
         * 	This function receives the control's update from service-end which would be utilized after performing any toolbar operation.
         *
         * @private  
         */
        _toolbarOperationSuccess: function (report) {
            if (oclientProxy.model.progressMode != "infinite") {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("OpeningDialogSucceeded") + "...";
                window.clearInterval(oClientTimer);
            }
            if (oclientProxy.model.progressMode == "progress")
                $("#" + oclientProxy._id + "progressText")[0].innerHTML = "Rendering started";
            if (report != null)
                if((report.d != undefined && report.d || report[0] != undefined && report[0])||report.CurrentReport) {
                var columnElements, rowElements, slicerElements, action, renamedReport, chartSettings;
                if (report.length > 1 && report[0] != undefined) {
                    oclientProxy.currentReport = report[0].Value; oclientProxy.reports = report[1].Value; reportsCount = report[2].Value; columnElements = report[3].Value;
                    rowElements = report[4].Value; slicerElements = report[5].Value; action = report[6].Value; reportList = $.parseJSON(report[7].Value);
                    renamedReport = report[8].Value; chartSettings = $.parseJSON(report[9].Value); 
                    if (report[10] != null && report[10] != undefined)
                        oclientProxy.model.customObject = report[10].Value;
                }
                else if (report.d != undefined) {
                    oclientProxy.currentReport = report.d[0].Value; oclientProxy.reports = report.d[1].Value; reportsCount = report.d[2].Value; columnElements = report.d[3].Value;
                    rowElements = report.d[4].Value; slicerElements = report.d[5].Value; action = report.d[6].Value; reportList = $.parseJSON(report.d[7].Value);
                    renamedReport = report.d[8].Value; chartSettings = $.parseJSON(report.d[9].Value); 
                    if (report.d[10] != null && report.d[10] != undefined)
                        oclientProxy.model.customObject = report.d[10].Value;
                }
                else {
                    oclientProxy.currentReport = report.CurrentReport; reports = report.Reports; reportsCount = report.ReportsCount; columnElements = report.Columns;
                    rowElements = report.Rows; slicerElements = report.Slicers; action = report.CurrentAction; reportList = $.parseJSON(report.ReportList);
                    renamedReport = report.RenamedReport; chartSettings = $.parseJSON(report.ControlSettings);
                    if (report.customObject != null && report.customObject != undefined)
                        oclientProxy.model.customObject = report.customObject;
                }
                oclientProxy.model.chartType = chartSettings.ChartType.toLowerCase();
                if (this.model.afterServiceInvoke != null)
                    this._trigger("afterServiceInvoke", { action: "toolbarOperation", element: this.element, customObject: this.model.customObject });
                if (action != "Report Change") {
                    this.element.find(".reportlist").ejDropDownList("option", "change", "");
                    this.element.find(".reportlist").ejDropDownList("option", "dataSource", reportList);
                    if (action == "Load Report")
                        reportDropTarget.setSelectedText(reportDropTarget.model.dataSource[0].name);
                    else if (action != "Rename Report")
                        reportDropTarget.setSelectedText(reportDropTarget.model.dataSource[reportList.length - 1].name);
                    else
                        reportDropTarget.setSelectedText(renamedReport);
                    this.element.find(".reportlist").ejDropDownList("option", "change", ej.proxy(this.reportChanged, this));
                }
                if (action != "Rename Report")
                    this.element.find(".splitBtn, .e-olapgrid, .e-olapchart").remove();
                if (action == "Remove Report" || action == "Report Change" || action == "Load Report" || action == "SortOrFilter" || action == "Save Report") {
                    $(oclientProxy._createSplitButtons(columnElements, "Columns")).appendTo(".categoricalAxis");
                    $(oclientProxy._createSplitButtons(rowElements, "Rows")).appendTo(".rowAxis");
                    $(oclientProxy._createSplitButtons(slicerElements, "Slicers")).appendTo(".slicerAxis");
                    this.element.find(".categoricalAxis, .rowAxis, .slicerAxis").find("button").ejButton({ height: "20px" });
                    if (oclientProxy.model.progressMode == "progress")
                        $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("RenderingSucceeded");
                    oclientProxy._renderControls();
                    if (oclientProxy.model.progressMode != "infinite")
                        oclientProxy._progressHide();
                }
            }
            oclientProxy._unWireEvents();
            oclientProxy._wireEvents();
            if (oclientProxy.model.progressMode != "infinite")
                oclientProxy._progressHide();
            oclientProxy._successAction = "ToolbarOperation";
            oclientProxy._trigger("renderSuccess", oclientProxy);
        },

        /**
         * 	This function receives the control's update from service-end after fetching the child nodes.
         *
         * @private  
         */
        _fetchChildNodeSuccess: function (data) {
            var newDataSource; var parentNode;
            if (data.length > 1 && data[0] != undefined)
                newDataSource = JSON.parse(data[0].Value);
            else if (data.d != undefined)
                newDataSource = JSON.parse(data.d[0].Value);
            else
                newDataSource = JSON.parse(data.ChildNodes);
            if (data[0] != undefined) {
                if (data[2] != null && data[2] != undefined)
                    oclientProxy.model.customObject = data[2].Value;
            }
            else if (data.d != undefined) {
                if (data.d[2] != null && data.d[2] != undefined)
                    oclientProxy.model.customObject = data.d[2].Value;
            }
            else {
                if (data.customObject != null && data.customObject != undefined)
                    oclientProxy.model.customObject = data.customObject;
            }
            if (this.model.afterServiceInvoke != null)
                this._trigger("afterServiceInvoke", { action: "memberExpanded", element: this.element, customObject: this.model.customObject });
            var mapper = { id: "id", parentId: "pid", hasChild: "hasChildren", text: "name", isChecked: "checkedStatus" };
            if ($(this.pNode).parents("li").length > 1)
                parentNode = $(this.pNode).parents("li").first();
            else
                parentNode = $(this.pNode).parents("li");
            $($(parentNode).find('input.nodecheckbox')[0]).ejCheckBox({ checked: false })
            this.memberTreeObj._createSubNodesWhenLoadOnDemand(newDataSource, this.pNode, mapper);
            $.each($(parentNode).children().find("li"), function (index, value) {
                value.setAttribute("tag", newDataSource[index].tag);
            });
            this.memberTreeObj._expandCollapseAction(this.pNode);
            oclientProxy._successAction = "FetchChildNode";
            oclientProxy._trigger("renderSuccess", oclientProxy);
        },

        /**
         * 	This function is used to build the toolbar icons.
         *
         * @private
         */
        _reportToolbar: function () {
            return ej.buildTag("ul", ej.buildTag("li.newReportImg e-icon", "", {}).attr({ "title": this._getLocalizedLabels("NewReport"), tabindex: 0 })[0].outerHTML +
            ej.buildTag("li.addReportImg e-icon", "", {}).attr({ "title": this._getLocalizedLabels("AddReport"), tabindex: 0 })[0].outerHTML +
            ej.buildTag("li.removeReportImg e-icon", "", {}).attr({ "title": this._getLocalizedLabels("RemoveReport"), tabindex: 0 })[0].outerHTML +
            ej.buildTag("li.renameReportImg e-icon", "", {}).attr({ "title": this._getLocalizedLabels("RenameReport"), tabindex: 0 })[0].outerHTML +
            ej.buildTag("li.saveReportImg e-icon", "", {}).attr({ "title": this._getLocalizedLabels("SaveReport"), tabindex: 0 })[0].outerHTML +
            ej.buildTag("li.loadReportImg e-icon", "", {}).attr({ "title": this._getLocalizedLabels("LoadReport"), tabindex: 0 })[0].outerHTML +
            ej.buildTag("li.excelExportImg e-icon", "", {}).attr({ "title": this._getLocalizedLabels("ExportToExcel"), tabindex: 0 })[0].outerHTML +
            (oclientProxy.model.displaySettings.enableFullScreen ? (ej.buildTag("li.maximizedView e-icon", "", {}).attr({ "title": this._getLocalizedLabels("FullScreen"), tabindex: 0 })[0].outerHTML) : "") +
			ej.buildTag("li.colSortFilterImg e-icon", "", {}).attr({ "title": this._getLocalizedLabels("SortOrFilterColumn"), tabindex: 0 })[0].outerHTML +
            ej.buildTag("li.rowSortFilterImg e-icon", "", {}).attr({ "title": this._getLocalizedLabels("SortOrFilterRow"), tabindex: 0 })[0].outerHTML +
            ej.buildTag("li.chartTypesImg e-icon", "", {}).attr({ "title": this._getLocalizedLabels("ChartTypes"), tabindex: 0 })[0].outerHTML);
        },

        /**
         * 	This function is used to create Cube Selector.
         *
         * @private  
         */
        _createCubeSelector: function () {
            return ej.buildTag("div.csHeader", ej.buildTag("span.cubeText", this._getLocalizedLabels("CubeSelector"), { "padding-left": "6px", "float": "left" })[0].outerHTML + ej.buildTag("div", "<input type='text' id='cubeSelector' class ='cubeSelector' />", { display: "inline", "float": "left", "padding-left": "5px", "position": "relative", "top": "-3px" })[0].outerHTML, { width: "415px", height: "20px" })[0].outerHTML;
        },

        /**
         * 	This function is used to create Cube Dimension Browser.
         *
         * @private  
         */
        _createCubeBrowser: function (cubeTreeInfo) {
            return ej.buildTag("div.cdbHeader", ej.buildTag("span", this._getLocalizedLabels("CubeDimensionBrowser"), { "padding-left": "5px" })[0].outerHTML, { width: "200px", height: "30px" })[0].outerHTML + ej.buildTag("div.cubeBrowser", ej.buildTag("div.cubeTreeView.visibleHide")[0].outerHTML, { width: "200px", height: "523px" })[0].outerHTML;
        },

        /**
         * 	This function is used to create Axis Element Builder.
         *
         * @private  
         */
        _createAxisElementBuilder: function (columnDimensions, rowDimensions, slicerDimensions) {
            var AEBPanel = ej.buildTag("div.categoricalAxis", this._createSplitButtons(columnDimensions, "Columns"), { width: "200px", height: "150px" })[0].outerHTML + ej.buildTag("div.axisHeader", ej.buildTag("span", this._getLocalizedLabels("Column"), { "padding-left": "5px" })[0].outerHTML, { height: "30px" })[0].outerHTML +
            ej.buildTag("div.rowAxis", this._createSplitButtons(rowDimensions, "Rows"), { width: "200px", height: "150px" })[0].outerHTML + ej.buildTag("div.axisHeader", ej.buildTag("span", this._getLocalizedLabels("Row"), { "padding-left": "5px" })[0].outerHTML, { height: "30px" })[0].outerHTML +
            ej.buildTag("div.slicerAxis", this._createSplitButtons(slicerDimensions, "Slicers"), { width: "200px", height: "150px" })[0].outerHTML + ej.buildTag("div.axisHeader", ej.buildTag("span", this._getLocalizedLabels("Slicer"), { "padding-left": "5px" })[0].outerHTML, { height: "30px" })[0].outerHTML;
            return AEBPanel;
        },

        /**
         * 	This function is used to create the Split Button(s).
         *
         * @private  
         */
        _createSplitButtons: function (dimensionElements, axis) {
            var splitButtons = '';
            var captionName = '';
            if (dimensionElements.indexOf("~") > -1)
                for (var i = 0; i < dimensionElements.split('~')[0].split('#').length - 1; i++) {
                    captionName = dimensionElements.split('~')[0].split('#')[i + 1].split('.')[0];
                    if (captionName == "Measures") {
                        captionName = oclientProxy._getLocalizedLabels("Measures");
                    }
                    else if (!(dimensionElements.startsWith("#Measure")))
                        captionName = dimensionElements.split('~')[i + 2];
                    else if ((dimensionElements.indexOf("#Measure")) > -1)
                        captionName = dimensionElements.split('~')[i + 1];
                    if (captionName == undefined)
                        captionName = dimensionElements.split('~')[i + 1];
                       splitButtons += ej.buildTag("div.splitBtn", ej.buildTag("button", captionName).attr({ "title": dimensionElements.split('~')[0].split('#')[i + 1].replace('.', ' - ') })[0].outerHTML + ej.buildTag("span.removeSplitBtn e-icon")[0].outerHTML, "", { "tag": axis + ':' + dimensionElements.split('~')[0].split('#')[i + 1] })[0].outerHTML;
                }
            else
                for (var i = 0; i < dimensionElements.split('#').length - 1; i++) {
                    var caption = dimensionElements.split('#')[i + 1].split('.')[0] == "Measures" ? oclientProxy._getLocalizedLabels("Measures") : dimensionElements.split('#')[i + 1].split('.')[0];
                    if (caption.split("::")[1] == "NAMEDSET") {
                        caption = caption.split("::")[0];
                    }
                    splitButtons += ej.buildTag("div.splitBtn", ej.buildTag("button", caption).attr({ "title": dimensionElements.split('#')[i + 1].replace('.', ' - ') })[0].outerHTML + ej.buildTag("span.removeSplitBtn e-icon")[0].outerHTML, "", { "tag": axis + ':' + dimensionElements.split('#')[i + 1] })[0].outerHTML;
                }
            return splitButtons;
        },

        /**
         * This function renders and returns the outer panel of OLAP Client control.
         *
         * @private
         */
        _controlPanel: function () {
            var controlTable; var gridDiv
            if (this.controlPlacement() == ej.olap.OlapClient.ControlPlacement.Tab && (this.displayMode() == ej.olap.OlapClient.DisplayMode.ChartAndGrid || this.displayMode() == "")) {
                this._chartHeight = "547px";
                this._chartWidth = "557px";
                this._gridHeight = "530px";
                this._gridWidth = 555;
                this._panelOverflow = "auto";
            }
            else if (this.controlPlacement() == ej.olap.OlapClient.ControlPlacement.Tile && (this.displayMode() == ej.olap.OlapClient.DisplayMode.ChartAndGrid || this.displayMode() == "")) {
                this._chartHeight = "275px";
                this._chartWidth = "555px";
                this._gridHeight = "530px";
                this._gridWidth = 555;
                this._panelOverflow = "hidden";
            }
            else {
                this._chartHeight = "560px";
                this._chartWidth = "790px";
                this._gridHeight = "550px";
                this._gridWidth = 555;
                this._panelOverflow = "auto";
            }
            if (this.displayMode() != ej.olap.OlapClient.DisplayMode.ChartOnly) {
                if (this.controlPlacement() == ej.olap.OlapClient.ControlPlacement.Tile && this.displayMode() == ej.olap.OlapClient.DisplayMode.ChartAndGrid)
                    gridDiv = ej.buildTag("div#gridPanel.gridPanel", ej.buildTag("div#OlapGrid", "", { "margin": "5px 7px 7px", "max-height": "300px", "width": "563px", "overflow": "auto" })[0].outerHTML, { width: "auto", height: "auto" })[0].outerHTML;
                else
                    gridDiv = ej.buildTag("div#gridPanel.gridPanel", ej.buildTag("div#OlapGrid", "", { "margin": "5px 7px 7px", "min-height": "300px", "overflow": "auto", "max-height": this._gridHeight })[0].outerHTML, { width: "auto", height: "auto" })[0].outerHTML;
            }
            if (this.displayMode() != ej.olap.OlapClient.DisplayMode.GridOnly)
                var chartDiv = ej.buildTag("div#chartPanel.chartPanel", ej.buildTag("div#OlapChart", "", { "min-height": "275px" })[0].outerHTML, { width: "auto", height: "auto" })[0].outerHTML;
            if (this.controlPlacement() == ej.olap.OlapClient.ControlPlacement.Tab && this.displayMode() == ej.olap.OlapClient.DisplayMode.ChartAndGrid) {
                var tabUl; var tabDiv;
                var gridAnchor = "<a style='font: bold 12px Segoe UI' href='#gridPanel' tabindex='0'>" + this._getLocalizedLabels("Grid") + "</a>";
                var chartAnchor = "<a style='font: bold 12px Segoe UI' href='#chartPanel' tabindex='0'>" + this._getLocalizedLabels("Chart") + "</a>";
                if (this.defaultView() == ej.olap.OlapClient.DefaultView.Chart) {
                    tabUl = ej.buildTag("ul.clientTab", ej.buildTag("li", chartAnchor)[0].outerHTML + ej.buildTag("li", gridAnchor)[0].outerHTML)[0].outerHTML;
                    tabDiv = ej.buildTag("div#clientTab", tabUl + chartDiv + gridDiv)[0].outerHTML;
                }
                else {
                    tabUl = ej.buildTag("ul.clientTab", ej.buildTag("li", gridAnchor)[0].outerHTML + ej.buildTag("li", chartAnchor)[0].outerHTML)[0].outerHTML;
                    tabDiv = ej.buildTag("div#clientTab", tabUl + gridDiv + chartDiv)[0].outerHTML;
                }
                controlTable = tabDiv;
            }
            else {
                controlTable = this._createControlContainer(this.controlPlacement(), chartDiv, gridDiv);
            }

            return ej.buildTag("div.controlPanel", controlTable, { width: "572px", height: "600px", "overflow": this._panelOverflow })[0].outerHTML
        },

        /**
         * This function creates the HTML tag containing the control and returns it.
         *
         * @private  
         */
        _createControlContainer: function (controlPlacement, chartDiv, gridDiv) {
            var controlTable;
            if (this.displayMode() == ej.olap.OlapClient.DisplayMode.ChartOnly)
                controlTable = "<table><tr><td>" + chartDiv + "</td></tr></table>";
            else if (this.displayMode() == ej.olap.OlapClient.DisplayMode.GridOnly)
                controlTable = "<table><tr><td>" + gridDiv + "</td></tr></table>";
            else {
                if (this.controlPlacement() == ej.olap.OlapClient.ControlPlacement.Tile) {
                    if (this.defaultView() == ej.olap.OlapClient.DefaultView.Chart)
                        controlTable = "<table><tr><td>" + chartDiv + "</td></tr><tr><td>" + gridDiv + "</td></tr></table>";
                    else
                        controlTable = "<table><tr><td>" + gridDiv + "</td></tr><tr><td>" + chartDiv + "</td></tr></table>";
                }
                else {
                    if (this.defaultView() == ej.olap.OlapClient.DefaultView.Chart)
                        controlTable = "<table><tr><td valign='top'>" + chartDiv + "</td><td valign='top'>" + gridDiv + "</td></tr></table>";
                    else
                        controlTable = "<table><tr><td valign='top'>" + gridDiv + "</td><td valign='top'>" + chartDiv + "</td></tr></table>";
                }
            }
            return controlTable;
        },

        /**
         * 	This function is used to render the OLAP Grid component inside of OLAP Client component.
         *
         * @private  
         */
        _renderOlapGrid: function (tagInfo) {
            this.element.find(".e-dialog").hide();
            if (this.displayMode() != ej.olap.OlapClient.DisplayMode.ChartOnly) {
                var gridDiv;
                if (this.ochartObj != undefined && this.ochartObj._startDrilldown) {
                    this.ogridObj.doAjaxPost("POST", this.model.url + "/" + this.ogridObj.model.serviceMethodSettings.drillDown, JSON.stringify({ "action": "drillDownGrid", "cellPosition": "", "currentReport": this.ogridObj.getOlapReport(),"clientReports": this.reports, "headerInfo": tagInfo }), this.ogridObj._drillDownSuccess);
                }
                else {
                    this.element.find(".e-olapgrid, #OlapGrid").remove();
                    if (this.controlPlacement() == ej.olap.OlapClient.ControlPlacement.Tile && this.displayMode() == ej.olap.OlapClient.DisplayMode.ChartAndGrid)
                        gridDiv = ej.buildTag("div#OlapGrid", "", { "margin": "5px 7px 7px", "max-height": "300px", "width": "563px", "overflow": "auto" })[0].outerHTML;
                    else
                        gridDiv = ej.buildTag("div#OlapGrid", "", { "margin": "5px 7px 7px", "min-height": "300px", "overflow": "auto", "max-height": this._gridHeight })[0].outerHTML;
                    $(gridDiv).appendTo(this.element.find(".gridPanel"));
                    if (this.gridLayout() != ej.olap.OlapGrid.Layout.Normal)
                        this.element.find("#OlapGrid").ejOlapGrid({ url: this.model.url, olapReport: this.currentReport, layout: this.gridLayout(), drillSuccess: ej.proxy(this.gridDrillSuccess, this) });
                    else
                        this.element.find("#OlapGrid").ejOlapGrid({ url: this.model.url, olapReport: this.currentReport, drillSuccess: ej.proxy(this.gridDrillSuccess, this) });
                    this.ogridObj = this.element.find('#OlapGrid').data("ejOlapGrid");
                }
            }
        },

        /**
         * 	This function is used to render the OLAP Chart component inside of OLAP Client component.
         *
         * @private  
         */
        _renderOlapChart: function (drillTag, drillAction) {
            this.element.find(".e-dialog").hide();
            if (this.displayMode() != ej.olap.OlapClient.DisplayMode.GridOnly) {
                if (this.ogridObj != undefined && this.ogridObj._startDrilldown) {
                    this.ochartObj.doAjaxPost("POST", this.model.url + "/" + this.ochartObj.model.serviceMethodSettings.drillDown, JSON.stringify({ "action": drillAction, "drilledSeries": drillTag, "olapReport": this.ochartObj.getOlapReport(),"clientReports": this.reports  }), this.ochartObj.renderControlSuccess);
                }
                else {
                    this.element.find(".e-olapchart").remove();
                    var chartDiv = ej.buildTag("div#OlapChart", "", { "min-height": "275px" })[0].outerHTML;
                    $(chartDiv).appendTo(this.element.find(".chartPanel"));
                    this.element.find("#OlapChart").ejOlapChart({ url: this.model.url, customObject: this.currentReport, locale: oclientProxy.locale(), showTooltip: true, size: { height: oclientProxy._chartHeight, width: oclientProxy._chartWidth }, commonSeriesOptions: { type: oclientProxy.model.chartType, tooltip: { visible: true } }, beforeServiceInvoke: oclientProxy.model.chartLoad, drillSuccess: ej.proxy(oclientProxy.chartDrillSuccess, oclientProxy) });
                    this.ochartObj = this.element.find('#OlapChart').data("ejOlapChart");
                    this.element.find('#OlapChart').width(this.ochartObj.model.size.width);
                }
            }
        },

        /**
         * 	This function is used to render the OLAP Chart and OLAP Grid widgets.
         *
         * @private  
         */
        _renderControls: function () {
            if (this.defaultView() == ej.olap.OlapClient.DefaultView.Chart) {
                oclientProxy._renderOlapChart();
                oclientProxy._renderOlapGrid();
            }
            else {
                oclientProxy._renderOlapGrid();
                oclientProxy._renderOlapChart();
            }
        },

        /**
         * 	This function is used to initiate the dialog creation.
         *
         * @private  
         */
        _createDialogRequest: function (evt) {
            if (oclientProxy.model.progressMode != "infinite")
                this._progressStatus(0, 80, 50);
            args_className = evt.target.className;
            args_innerHTML = (evt.target.innerHTML == "" ? "ToolbarButtons" : evt.target.innerHTML);
            hierarchyCaption = (evt.currentTarget.attributes == "" ? "" : evt.currentTarget.attributes.getNamedItem("title").value);
            this.element.find(".e-dialog, .clientDialog").remove();
            if (args_innerHTML != "ToolbarButtons" && args_innerHTML != undefined) {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("OpeningDialog") + "...";
                else if (oclientProxy.model.progressMode == "infinite")
                    oclientWaitingPopup.show();
                if (this.model.beforeServiceInvoke != null)
                    this._trigger("beforeServiceInvoke", { action: "fetchMemberTreeNodes", element: this.element, customObject: this.model.customObject });
                var serializedCustomObject = JSON.stringify(this.model.customObject);
                this.doAjaxPost("POST", oclientProxy.model.url + "/" + oclientProxy.model.serviceMethodSettings.fetchMemberTreeNodes, JSON.stringify({ "action": "fetchMemberTreeNodes", "dimensionName": $(evt.target).parent().attr("Tag"), "olapReport": oclientProxy.currentReport, "customObject": serializedCustomObject }), oclientProxy._editorTreeInfoSuccess);
            }
            else {
                if (oclientProxy.model.progressMode != "infinite")
                    oclientProxy._progressHide();
                else
                    oclientProxy._createDialog(args_className, args_innerHTML, "");
            }
        },

        /**
         * 	This function receives the list of report names from the database.
         *
         * @private  
         */
        _fetchReportListSuccess: function (reportNameList) {
            if (reportNameList[0] != undefined) {
                if (reportNameList[2] != null && reportNameList[2] != undefined)
                    oclientProxy.model.customObject = reportNameList[2].Value;
            }
            else if (reportNameList.d != undefined) {
                if (reportNameList.d[2] != null && reportNameList.d[2] != undefined)
                    oclientProxy.model.customObject = reportNameList.d[2].Value;
            }
            else {
                if (reportNameList.customObject != null && reportNameList.customObject != undefined)
                    oclientProxy.model.customObject = reportNameList.customObject;
            }
            if (this.model.afterServiceInvoke != null)
                this._trigger("afterServiceInvoke", { action: "fetchReportList", element: this.element, customObject: this.model.customObject });
            if (oclientProxy.model.progressMode != "infinite") {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("OpeningDialogSucceeded") + "...";
                window.clearInterval(oClientTimer);
                this._progressStatus(90, 101 + ":100%", 50);
                window.setTimeout(function () { progressStatus() }, 300);
            }
            else {
                oclientWaitingPopup.hide();
                window.setTimeout(function () { progressStatus() }, 1);
            }
            if (this.model.afterServiceInvoke != null)
                this._trigger("afterServiceInvoke", { action: "fetchReportList", element: this.element, customObject: this.model.customObject });
            function progressStatus() {
                oclientProxy.element.find(".e-dialog, .clientDialog").remove();
                if (reportNameList.d != undefined)
                    reportNameList = (reportNameList.d[0].Value || reportNameList[0].Value);
                else
                    reportNameList = reportNameList.ReportNameList;
                oclientProxy._createDialog("LoadReport", reportNameList, "");
            }
        },

        /**
         * 	This function is used to maintain the sorting state inside the sort dialog.
         *
         * @private 
         */
        _fetchSortState: function (value) {
            if (oclientProxy.model.progressMode != "infinite") {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("OpeningDialogSucceeded");
                window.clearInterval(oClientTimer);
                this._progressStatus(90, 101 + ":100%", 50);
                window.setTimeout(function () { progressStatus() }, 300);
            }
            else {
                oclientWaitingPopup.hide();
                window.setTimeout(function () { progressStatus() }, 1);
            }
            function progressStatus() {
                if (value[0] != undefined) {
                    oclientProxy._createDialog("SortFilterDlg", value[0].Value, "");
                }
                else if (value.d != undefined) {
                    oclientProxy._createDialog("SortFilterDlg", value.d[0].Value, "");
                }
                else {
                    oclientProxy._createDialog("SortFilterDlg",value.FetchSortState, "");
                }

            }
        },

        /**
         * 	This function is used to create the toolbar, member editor and measure editor dialogs
         *
         * @private
         */
        _createDialog: function (args_className, args_innerHTML, editorTree) {
            var sortDlgField = "";
            var sortState = "", filterState = "";
            if (this.model.progressMode != "infinite")
                window.clearInterval(oClientTimer);
            var editorTreeInfo;
            if (editorTree[0] != undefined)
                editorTreeInfo = editorTree[0].Value;
            else if (editorTree.d != undefined)
                editorTreeInfo = editorTree.d[0].Value;
            else
                editorTreeInfo = editorTree.EditorTreeInfo;
            var ejDialog = ej.buildTag("div#clientDialog.clientDialog", { "opacity": "1" })[0].outerHTML;
            var dialogContent; var dialogTitle; var currentTag;

            if (args_className.split(" ")[0] == "newReportImg") {
                dialogTitle = this._getLocalizedLabels("NewReport");
                currentTag = "New Report";
                var newReportLabel = "<p class='dialogPara'>" + this._getLocalizedLabels("ReportName") + "</p>";
                var newReport = "<input type=text id=reportName class='reportName'/></br>";
                dialogContent = newReportLabel + newReport;
            }
            else if (args_className.split(" ")[0] == "addReportImg") {
                dialogTitle = this._getLocalizedLabels("AddReport");
                currentTag = "Add Report";
                var addReportLabel = "<p class='dialogPara'>" + this._getLocalizedLabels("ReportName") + "</p>";
                var addReport = "<input type=text id=reportName class='reportName'/></br>";
                dialogContent = addReportLabel + addReport;
            }
            else if (args_className.split(" ")[0] == "removeReportImg") {
                dialogTitle = this._getLocalizedLabels("RemoveReport");
                currentTag = "Remove Report";
                if (reportsCount > 1)
                    dialogContent = "<p>" + this._getLocalizedLabels("AreYouSureToDeleteTheReport") + "?</p>";
                else
                    dialogContent = "<p>" + this._getLocalizedLabels("CannotRemoveSingleReport") + "!</p>";
            }
            else if (args_className.split(" ")[0] == "SortFilterDlg") {

                sortDlgField = args_innerHTML.split("||");
                if (sortDlgField[1] != "")
                    sortState = sortDlgField[1].split("<<");
                if (sortDlgField[2] != "")
                    filterState = sortDlgField[2].split("<<");
                oclientProxy.element.find(".e-dialog, .clientDialog").remove();
                dialogTitle = this._getLocalizedLabels("SortingAndFiltering");

                var sortingLbl = ej.buildTag("label#sortingLbl.sortingLbl", this._getLocalizedLabels("Sorting"))[0].outerHTML;
                var measureListLbl = ej.buildTag("label#measureListLbl.measureListLbl", this._getLocalizedLabels("Measure"))[0].outerHTML;
                var orderLbl = ej.buildTag("label#orderLbl.orderLbl", this._getLocalizedLabels("Order"))[0].outerHTML;
                var measureListDropDown = ej.buildTag("input#measuresList.measuresList","",{},{type:'text', accesskey:'M'})[0].outerHTML;

                var sortDisableRadio = ej.buildTag("input#sortDisable.sortDisable", "", {}, { name: "sort", type: "radio", checked: 'checked', role: 'radio', tabindex: 0, accesskey: 'i' })[0].outerHTML + ej.buildTag("label.sortDisableLbl",  this._getLocalizedLabels("Disable"))[0].outerHTML;
                var sortEnableRadio = ej.buildTag("input#sortEnable.sortEnable", "", {}, { name: 'sort', type: 'radio', role: 'radio', tabindex: 1, accesskey: 'n' })[0].outerHTML + ej.buildTag("label.sortEnableLbl",  this._getLocalizedLabels("Enable"))[0].outerHTML + "<br/>";
                var newascRadio = ej.buildTag("input#radioBtnAsc.radioBtnAsc", "", {}, { name: 'order', type: 'radio', checked: 'checked', role: 'radio', tabindex: 0, accesskey: 'A' })[0].outerHTML + ej.buildTag("label.radioBtnAscLbl",  this._getLocalizedLabels("Ascending"))[0].outerHTML + "<br/>";
                var newdescRadio = ej.buildTag("input#radioBtnDesc.radioBtnDesc", "", {}, { name: 'order', type: 'radio', role: 'radio', tabindex: 2, accesskey: 'e' })[0].outerHTML + ej.buildTag("label.radioBtnDescLbl",  this._getLocalizedLabels("Descending"))[0].outerHTML;
                var preservHierarchy = ej.buildTag("input#preserveHrchy.preserveHrchy", "", {}, { type: 'checkbox', checked: 'checked', tabindex: 0, role: 'radio', accesskey: 'r' })[0].outerHTML + ej.buildTag("label.preserveHrchyLbl", this._getLocalizedLabels("PreserveHierarchy"))[0].outerHTML;

                var filter = ej.buildTag("label#filterLbl.filterLbl", this._getLocalizedLabels("Filtering"))[0].outerHTML;
                var filterDisableRadio = ej.buildTag("input#filterDisable.filterDisable", "", {}, { name: 'filter', type: 'radio', checked: 'checked', role: 'radio', tabindex: 0, accesskey: 'i' })[0].outerHTML + ej.buildTag("label.filterDisableLbl",  this._getLocalizedLabels("Disable"))[0].outerHTML;
                var filterEnableRadio = ej.buildTag("input#filterEnable.filterEnable", "", {}, { name: 'filter', type: 'radio', role: 'radio', tabindex: 0, accesskey: 'n' })[0].outerHTML + ej.buildTag("label.filterDisableLbl",  this._getLocalizedLabels("Enable"))[0].outerHTML + "<br/>";
                var conditionLbl =ej.buildTag("label#conditionLbl.conditionLbl", this._getLocalizedLabels("Condition"))[0].outerHTML;
                var conditionDropDown = ej.buildTag("input#filterCondition.filterCondition", "", {}, { type: 'text', tabindex: 0, accesskey: 'o' })[0].outerHTML;

                var filterFrom = ej.buildTag("div#filterfrom.filterFrmDiv", ej.buildTag("input#filterFrom.filterFrom", "", {}, { name: 'inputVal', type: 'text', tabindex: 0 })[0].outerHTML)[0].outerHTML;
                var filterbtw = ej.buildTag("div#filterbtw.filterBtw", "<p>"+ this._getLocalizedLabels("and") +"</p>")[0].outerHTML;
                var filterTo = ej.buildTag("div#filterto.filterToDiv", ej.buildTag("input#filterTo.filterTo", "", {}, { name: 'inputVal', type: 'text', tabindex: 0, accesskey: 'd' })[0].outerHTML)[0].outerHTML;
                var fMeasureListLbl =ej.buildTag("label#filterMeasureListLbl.filterMeasureListLbl",this._getLocalizedLabels("Measure"))[0].outerHTML;
                var fMeasureList = ej.buildTag("input#fMeasuresList.fMeasuresList", "", {}, { type: 'text', tabindex: 0, accesskey:'M' })[0].outerHTML;
                var fValueLbl = ej.buildTag("label#filterValueLbl.filterValueLbl", this._getLocalizedLabels("Value"), {},{ tabindex : 0, accesskey:'a'})[0].outerHTML;

                var sortDiv = ej.buildTag("div#sortingDlg.sortingDlg", "<table class='sortReportTbl'><tr><td>" + sortingLbl + "</td><td>" + sortEnableRadio + sortDisableRadio + "</td></tr><tr><td>" + measureListLbl + "</td><td>" + measureListDropDown + "</td></tr> <tr><td>" + orderLbl + "</td><td>" + newascRadio + newdescRadio + "</td></tr><tr><td></td><td>" + preservHierarchy + "</td></tr></table>")[0].outerHTML;
                var filterDiv = ej.buildTag("div#filteringDlg.filteringDlg", "<table class='sortReportTbl'><tr><td>" + filter + "</td><td>" + filterEnableRadio + filterDisableRadio + "</td></tr><tr><td>" + fMeasureListLbl + "</td><td>" + fMeasureList + "</td></tr><tr><td>" + conditionLbl + "</td><td>" + conditionDropDown + "</td></tr><tr><td>" + fValueLbl + "</td><td>" + filterFrom + filterbtw + filterTo + "</td></tr></table>")[0].outerHTML;

                var sortTab = "<li><a style='font: bold 12px Segoe UI' href='#sortingDlg'>"+this._getLocalizedLabels("Sorting")+"</a></li>";
                var filterTab = "<li><a style='font: bold 12px Segoe UI' href='#filteringDlg'>" + this._getLocalizedLabels("Filtering") + "</a></li>";
                var sortfilterTab = ej.buildTag("div#sortfilterTab.sortfilterTab", "<ul class ='sortfiltTab'>" + (sortTab + filterTab + "</ul>" +"<div class='borderFilterSortDlg'>"+ sortDiv + filterDiv+"</div>"))[0].outerHTML;

                dialogContent = sortfilterTab;
            }
            else if (args_className.split(" ")[0] == "renameReportImg") {
                dialogTitle = this._getLocalizedLabels("RenameReport");
                currentTag = "Rename Report";
                var renameReportLabel = "<p class='dialogPara'>" + oclientProxy._getLocalizedLabels("ReportName") + "</p>";
                renameReport = "<input type=text id=reportName class='reportName'/></br>";
                dialogContent = renameReportLabel + renameReport;
            }
            else if (args_className.split(" ")[0] == "saveReportImg") {
                dialogTitle = this._getLocalizedLabels("SaveReport");
                currentTag = "Save Report";
                var reportNameLabel = "<p class='dialogPara'>" + oclientProxy._getLocalizedLabels("ReportName") + "</p>";
                reportName = "<input type=text id=reportName class='reportName'/></br>";
                dialogContent = reportNameLabel + reportName;
            }
            else if (args_className.split(" ")[0] == "LoadReport") {
                dialogTitle = this._getLocalizedLabels("LoadReport");
                currentTag = "Load Report";
                var reportNameLabel = "<table class='loadReportTbl'><tr><td class='loadReportTd'>" + oclientProxy._getLocalizedLabels("ReportName") + "</td>";
                var reportNamesDropdown = "<td><input type='text' id='reportNameList' class='reportNameList'/></td></tr></table>";
                dialogContent = reportNameLabel + reportNamesDropdown;
            }
            else if (args_className.split(" ")[0] == "chartTypesImg") {
                dialogTitle = this._getLocalizedLabels("ChartTypes");
                currentTag = "Chart Types";
                var reportNameLabel = "<p class='dialogPara'>" + oclientProxy._getLocalizedLabels("ChartTypes") + "</p>";
                reportName = "<input type=text id=reportName class='reportName'/></br>";
                dialogContent = reportNameLabel + reportName;
            }
            else if (args_className.indexOf("e-txt") > -1) {
              
                if (args_innerHTML == oclientProxy._getLocalizedLabels("Measures")) {
                    dialogTitle = this._getLocalizedLabels("MeasureEditor");
                    dialogContent = "<p class='editorPara'>" + this._getLocalizedLabels("Measures") + "</p>"
                }
                else {
                    dialogTitle = this._getLocalizedLabels("MemberEditor");
                    dialogContent = "<p class='editorPara'>" + hierarchyCaption + "</p>"
                }
                var memberEditor; var checkOption = "";
                $(innerDiv).appendTo(EditorDiv);
                if (args_innerHTML != oclientProxy._getLocalizedLabels("Measures")) {
                    var checkAll = ej.buildTag("div.checkAll e-icon")[0].outerHTML;
                    var unCheckAll = ej.buildTag("div.unCheckAll e-icon")[0].outerHTML;
                    checkOption = ej.buildTag("div", checkAll + unCheckAll, { "height": "19px" })[0].outerHTML;
                }
                if (args_innerHTML == oclientProxy._getLocalizedLabels("Measures")) {
                    memberEditor = oclientProxy._createMeasureEditor(editorTree);
                }
                else
                    memberEditor = ej.buildTag("div#editorTreeView.editorTreeView")[0].outerHTML;
                var memberEditorDiv = ej.buildTag("div.memberEditorDiv", memberEditor)[0].outerHTML;
                var innerDiv = ej.buildTag("div", checkOption + memberEditorDiv)[0].outerHTML;
                var EditorDiv = ej.buildTag("div#EditorDiv.editorDiv", innerDiv)[0].outerHTML;

                dialogContent += EditorDiv + "</br>";
            }
            var dialogFooter;
            var OKBtn = "<button id=OKBtn class='dialogOKBtn'>" + this._getLocalizedLabels("OK") + "</button>";
            var CancelBtn = "<button id=CancelBtn class='dialogCancelBtn'>" + this._getLocalizedLabels("Cancel") + "</button>";
            dialogFooter = ej.buildTag("div", OKBtn + CancelBtn, { "float": "right", "margin": "-5px 0 6px" })[0].outerHTML;
            $(ejDialog).appendTo("#" + oclientProxy._id);
            $(dialogContent + dialogFooter).appendTo(this.element.find(".clientDialog"));
            this.element.find(".clientDialog").ejDialog({ width: args_className.split(" ")[0] == "SortFilterDlg" ? 320 : 265, content: "#" + oclientProxy._id, enableResize: false });
            this.element.find(".e-titlebar").prepend(ej.buildTag("div", dialogTitle, { "display": "inline" })[0].outerHTML)[0].setAttribute("tag", currentTag)
            this.element.find(".reportName").ejMaskEdit({ width: "155px" });
            this.element.find(".e-mask").addClass("dialogInput");
            this.element.find(".dialogOKBtn, .dialogCancelBtn").ejButton();
            $(".sortfilterTab").ejTab();
            $(".reportNameList").ejDropDownList({
                dataSource: args_innerHTML.split("__"),
                width: "150px",
                height: "20px",
            });
            $(".filterFrom,.filterTo").ejMaskEdit({
                name: "mask",
                inputMode: ej.InputMode.Text,
                width: "80px",
                height: "20px",
            });
            $(".measuresList").ejDropDownList({
                dataSource: args_innerHTML.split("||")[0].split("__"),
                width: "200px",
                height: "20px",
            });
            $(".fMeasuresList").ejDropDownList({
                dataSource: args_innerHTML.split("||")[0].split("__"),
                width: "200px",
                height: "20px",
            });
            $(".filterCondition").ejDropDownList({
                change: "_onActiveConditionChange",
                dataSource: ['EqualTo', 'NotEquals', 'GreaterThan', 'GreaterThanOrEqualTo', 'LessThan', 'LessThanOrEqualTo', 'Between', 'NotBetween'],
                width: "200px",
                height: "20px",
            });
            oclientProxy.element.find(".filterCondition").ejDropDownList("option", "change", ej.proxy(oclientProxy._onActiveConditionChange, oclientProxy));
            oclientProxy._dllSortMeasure = $(".measuresList").data("ejDropDownList");
            oclientProxy._dllFilterCondition = $(".filterCondition").data("ejDropDownList");
            oclientProxy._dllfMeasuresList = $(".fMeasuresList").data("ejDropDownList");
            if (sortState != "") {
                this.element.find(".radioBtnAsc")[0].checked = sortState[0] == "ASC" ? true : false;
                this.element.find(".radioBtnDesc")[0].checked = sortState[0] == "DESC" ? true : false;
                this.element.find(".sortDisable")[0].checked = !(this.element.find(".sortEnable")[0].checked = true);
                this.element.find(".preserveHrchy")[0].checked = sortState[1] == "PH" ? true : false;
                oclientProxy._isSorted = true;
                oclientProxy._dllSortMeasure.setModel({ value: (sortState[2]) });
            }
            if (filterState != "") {
                this.element.find(".filterEnable")[0].checked = true;
                oclientProxy._dllfMeasuresList.setModel({ value: (filterState[0]) });
                oclientProxy._dllFilterCondition.setModel({ value: (filterState[1]) });
                oclientProxy.element.find(".filterFrom").val(filterState[2]);
                if (filterState[3] != undefined && filterState[3] != "" && (filterState[1] == "Between" || filterState[1] == "NotBetween"))
                    oclientProxy.element.find(".filterTo").val(filterState[3]);
                else
                    $(".filterTo").attr("disabled", "disabled");
                oclientProxy._isFiltered = true;
            }
            if (this.element.find(".sortDisable")[0] != undefined && this.element.find(".sortDisable")[0].checked == true) {
                $('.measuresList_wrapper,.radioBtnAsc, .radioBtnDesc, .preserveHrchy').attr("disabled", "disabled");
                oclientProxy._dllSortMeasure.disable();
            }
            if (this.element.find(".filterDisable")[0] != undefined && this.element.find(".filterDisable")[0].checked == true) {
                $('.filterFrom, .filterTo').attr("disabled", "disabled");
                oclientProxy._dllFilterCondition.disable();
                oclientProxy._dllfMeasuresList.disable();
            }
            this.element.find(".e-widget-content").height("auto");
            if (editorTree != "" && editorTree != undefined && args_innerHTML != oclientProxy._getLocalizedLabels("Measures")) {
                var treeViewData = $.parseJSON(editorTreeInfo);
                this.element.find(".editorTreeView").ejTreeView({
                    showCheckbox: true,
                    loadOnDemand: true,
                    height: $(".memberEditorDiv").height(),
                    fields: { id: "id", hasChild: "hasChildren", text: "name", isChecked: "checkedStatus", dataSource: treeViewData },
                    nodeClick: ej.proxy(this._onNodeExpand, this),
                });
                var treeViewElements = this.element.find(".editorTreeView").find("li");
                for (var i = 0; i < treeViewElements.length; i++) {
                    treeViewElements[i].setAttribute("tag", treeViewData[i].tag);
                }
            }
            else {
                if (this.model.progressMode != "infinite")
                    this._progressHide();
            }
            this.memberTreeObj = this.element.find('.editorTreeView').data("ejTreeView");
            oclientProxy._unWireEvents();
            oclientProxy._wireEvents();
        },

        /**
         * 	This function is used to create the measure editor dialog.
         *
         * @private  
         * @param {String} editorTree - Contains the information of the measures included in current report.
         * @return {String} String containing the html content of the measure editor.
         */
        _createMeasureEditor: function (editorTree) {
            var editorTreeInfo;
            if (editorTree[0] != undefined)
                editorTreeInfo = $.parseJSON(editorTree[0].Value);
            else if (editorTree.d != undefined)
                editorTreeInfo = $.parseJSON(editorTree.d[0].Value);
            else
                editorTreeInfo = $.parseJSON(editorTree.EditorTreeInfo);
            var measureEditor = "";
            for (var i = 0; i < editorTreeInfo.length; i++) {
                measureEditor += "<div id=\"" + editorTreeInfo[i].uniqueName + "\"class=measureEditor>" + editorTreeInfo[i].name + "<span class='removeMeasure e-icon'></span></div>";
            }
            return measureEditor;
        },

        /**
         * This function is raised to fetch the child nodes on node expansion.
         *
         * @private  
         */
        _onNodeExpand: function (args) {
            var selectedItem = (args.event.originalEvent != undefined && args.event.originalEvent.target != undefined) ? args.event.originalEvent.target : args.event.target; var tagInfo;
            var childCount = $(selectedItem).parents("li").first().children().find("li").length;
            if (selectedItem.className.indexOf("e-plus") > -1 && childCount == 0) {
                var checkedState = $(selectedItem).parent().find("input[type=checkbox]").prop("checked");
                var tagInfo = $(selectedItem).parents("li").first().attr("tag");
                this.pNode = selectedItem;
                if (this.model.beforeServiceInvoke != null)
                    this._trigger("beforeServiceInvoke", { action: "memberExpanded", element: this.element, customObject: this.model.customObject });
                var serializedCustomObject = JSON.stringify(this.model.customObject);
                this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.memberExpand, JSON.stringify({
                    "action": "memberExpanded", "checkedStatus": checkedState, "parentNode": $(selectedItem).parents("li")[0].id, "tag": tagInfo, "dimensionName": this._dimensionName, "cubeName": this.currentCubeName, "olapReport": this.currentReport, "clientReports": this.reports, "customObject": serializedCustomObject
                }), this._fetchChildNodeSuccess);
            }
        },

        /**
         * 	The function is used to perform action while changing the condition in filter dialog.
         *
         * @private  
         */
        _onActiveConditionChange: function (args) {
            if (args.selectedText == "Between" || args.selectedText == "NotBetween")
                $(".filterTo").removeAttr("disabled");
            else {
                $(".filterTo").attr("disabled", "disabled");
                oclientProxy.element.find(".filterTo").val("");
            }
        },

		/**
        * This function is used to drill down the OLAP Grid widget once OLAP Chart drill down.
		* @return jQuery
        * @example 
        * &lt;div id="OlapClient"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Client
        * $('#OlapClient').ejOlapClient({
        *       url: "OlapClientService.svc"
        *   });
        * var clientObj = $("#OlapClient").data("ejOlapClient");
        * clientObj.gridDrillSuccess(ej.proxy(function(){}, this));
        * // raised after OLAP Chart drill down
        * &lt;/script&gt;
        * @memberof ejOlapClient
        * @instance
        */
        chartDrillSuccess: function (sender) {
            if (oclientProxy.currentReport != undefined)
                currentReport = oclientProxy.currentReport;
            if (oclientProxy.reports != undefined)
                reports = oclientProxy.reports;
            if (this.ochartObj._startDrilldown && this.ogridObj != null && this.ogridObj != undefined)
                this._renderOlapGrid(this.ochartObj._selectedTagInfo);
            else if (oclientProxy.ogridObj != undefined && oclientProxy.ogridObj.element.find("table") == "block")
                oclientWaitingPopup.hide();
        },

		/**
        * This function is used to drill down the OLAP Chart widget once OLAP Grid component drill down.
		* @return jQuery
        * @example 
        * &lt;div id="OlapClient"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Client
        * $('#OlapClient').ejOlapClient({
        *       url: "OlapClientService.svc"
        *   });
        * var clientObj = $("#OlapClient").data("ejOlapClient");
        * clientObj.gridDrillSuccess(ej.proxy(function(){}, this));
        * // raised after OLAP Grid drill down
        * &lt;/script&gt;
        * @memberof ejOlapClient
        * @instance
        */
        gridDrillSuccess: function (sender) {
            if (oclientProxy.currentReport != undefined)
                currentReport = oclientProxy.currentReport;
            if (oclientProxy.reports != undefined)
                reports = oclientProxy.reports;
            if (this.ogridObj._startDrilldown && this.ochartObj != null && this.ochartObj != undefined) {
                var masktag; var levelCaption; var levelTag;
                levelCaption = this.ogridObj._drillCaption;
                jQuery.each(this.ochartObj._labelCurrentTags, function (index, value) {
                    if (value.name == levelCaption) {
                        levelTag = value.tag;
                        masktag = value;
                    }
                });
                oclientProxy.ochartObj._drillAction = this.ogridObj._drillAction;
                oclientProxy.ochartObj._selectedItem = levelCaption;
                if (this.ogridObj._drillAction == "drilldown")
                    oclientProxy.ochartObj._tagCollection.push(masktag)
                else if(!ej.isNullOrUndefined(masktag)){
                    jQuery.each(this.element.find(".rowAxis").find("button"), function (index, value) {
                        if (value.innerHTML == masktag.tag.split("[")[1].split("]")[0])
                            oclientProxy.ochartObj._dimensionIndex = index;
                    });
                    jQuery.each(oclientProxy.ochartObj._tagCollection, function (index, value) {
                        if (value.name == levelCaption) {
                            oclientProxy.ochartObj._selectedIndex = index + oclientProxy.ochartObj._dimensionIndex;
                            oclientProxy.ochartObj._tagCollection.splice(index, oclientProxy.ochartObj._tagCollection.length);
                            return false;
                        }
                    });
                }
                if (levelTag != null && levelTag != undefined)
                    oclientProxy._renderOlapChart(levelTag, this.ogridObj._drillAction);
                else
                    oclientWaitingPopup.hide();
            }
            else if($("#"+oclientWaitingPopup._id+"_WaitingPopup")[0].style.display == "block")
                oclientWaitingPopup.hide();
        },

		/**
        * This function is used to perform required action after dropping a tree node in Axis Element builder.
		* @return jQuery
        * @example 
        * &lt;div id="OlapClient"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Client
        * $('#OlapClient').ejOlapClient({
        *       url: "OlapClientService.svc"
        *   });
        * var clientObj = $("#OlapClient").data("ejOlapClient");
        * clientObj.nodeDropped(ej.proxy(function(){}, this));
        * // raised while dropping tree nodes
        * &lt;/script&gt;
        * @memberof ejOlapClient
        * @instance
        */
        nodeDropped: function (sender) {
            if (sender.target.prevObject != undefined)
                sender.target.prevObject.removeClass("targetAxis");
            else
                $(sender.target).removeClass("targetAxis");
            isDragging = false;
            var droppedPosition = this.setSplitBtnTargetPos(sender.event);
            sender.target.prevObject != undefined ? sender.target.prevObject.parents().find(".e-dialog").hide() : $(sender.target).parents().find(".e-dialog").hide();
            var cssName = null;
            if ($(sender.target).hasClass("splitBtn"))
                cssName = $(sender.target).parents("div:eq(0)").attr("class");
            else if (sender.event.type == "touchend")
                cssName = sender.target.context.className;
            else if (sender.event.target != undefined) {
                if (sender.event.target.className == undefined || sender.event.target.className == null)
                    return false;
                if (sender.event.target.className.indexOf("splitBtn") > -1)
                    cssName = sender.target.className;
                else
                    cssName = sender.event.target.className;
            }
            else {
                if (sender.event.originalEvent.srcElement.className.indexOf("splitBtn") > -1)
                    cssName = sender.target.className;
                else
                    cssName = sender.event.originalEvent.srcElement.className;
            }

            var axisName = (cssName.indexOf("categoricalAxis") > cssName.indexOf("rowAxis")) ? ((cssName.indexOf("categoricalAxis") > cssName.indexOf("slicerAxis")) ? "Categorical" : "Slicer") : ((cssName.indexOf("rowAxis") > cssName.indexOf("slicerAxis")) ? "Series" : (cssName.indexOf("slicerAxis") >= 0) ? "Slicer" : null);
            var tagVal = $(sender.dropedElement.parents("li:eq(0)")[0]).attr("tag");
            if (axisName != null && tagVal != "Measures" && tagVal.lastIndexOf(".DF") != tagVal.length - ".DF".length) {
                if (oclientProxy.model.progressMode != "infinite") {
                    if (oclientProxy.model.progressMode == "progress")
                        $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("PreparingAndExecutingMDXquery");
                    this._progressStatus(10, 80, 120);
                }
                else
                    oclientWaitingPopup.show();
                if (this.model.beforeServiceInvoke != null)
                    this._trigger("beforeServiceInvoke", { action: "nodeDropped", element: this.element, customObject: this.model.customObject });
                var serializedCustomObject = JSON.stringify(this.model.customObject);
                var params = oclientProxy.currentCubeName + "--" + $(sender.dropedElement.parents("li:eq(0)")[0]).attr("tag") + "--" + axisName + "--" + droppedPosition;
                oclientProxy.doAjaxPost("POST", oclientProxy.model.url + "/" + oclientProxy.model.serviceMethodSettings.nodeDropped, JSON.stringify({ "action": "nodeDropped", "dropType": "TreeNode", "nodeInfo": params, "olapReport": oclientProxy.currentReport, "clientReports": oclientProxy.reports, "customObject": serializedCustomObject }), oclientProxy._nodeDroppedSuccess);
            }
        },

		/**
        * This function is used to set the position to currently dropped split button in respective axes.
		* @return jQuery
        * @example 
        * &lt;div id="OlapClient"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Client
        * $('#OlapClient').ejOlapClient({
        *       url: "OlapClientService.svc"
        *   });
        * var clientObj = $("#OlapClient").data("ejOlapClient");
        * clientObj.setSplitBtnTargetPos(eve);
        * // used to set the position to the dropped split button
        * &lt;/script&gt;
        * @memberof ejOlapClient
        * @instance
        */
        setSplitBtnTargetPos: function (event) {
            var targetPosition = ""; var AEBdiv; var targetSplitBtn; var className;
            if (event.event != undefined && event.event.type == "touchend") {
                targetSplitBtn = event.event.originalEvent.target != null ? $(event.event.originalEvent.target).parents(".splitBtn") : $(event.event.originalEvent.srcElement).parents(".splitBtn");
                className = event.event.originalEvent.target != null ? event.event.originalEvent.target.className : event.event.originalEvent.srcElement.className;
            }
            else {
                targetSplitBtn = event.originalEvent.target != null ? $(event.originalEvent.target).parents(".splitBtn") : $(event.originalEvent.srcElement).parents(".splitBtn");
                className = event.originalEvent.target != null ? event.originalEvent.target.className : event.originalEvent.srcElement.className;
            }
            if (targetSplitBtn[0] || (className != undefined && className != null && jQuery.type(className) == "string" && className.indexOf("splitBtn") > -1)) {
                targetSplitBtn = targetSplitBtn[0] ? targetSplitBtn[0] : event.originalEvent.target != null ? event.originalEvent.target : event.originalEvent.srcElement;
                if (event.event != undefined && event.event.type == "touchend")
                    AEBdiv = event.target;
                else if (this._dropAxisClassName != null && this._dropAxisClassName != undefined && this._dropAxisClassName != "")
                    AEBdiv = this.element.find("." + this._dropAxisClassName)[0];
                else
                    AEBdiv = targetSplitBtn.parentNode;
                for (var i = 0; i < AEBdiv.children.length; i++) {
                    if (AEBdiv.childNodes[i] == targetSplitBtn)
                        targetPosition = i;
                }
            }
            return targetPosition;
        },

		/**
        * This function is raised while changing the cube.
		* @return jQuery
        * @example 
        * &lt;div id="OlapClient"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Client
        * $('#OlapClient').ejOlapClient({
        *       url: "OlapClientService.svc"
        *   });
        * var clientObj = $("#OlapClient").data("ejOlapClient");
        * clientObj.cubeChanged(ej.proxy(function(){}, this));
        * // raised while changing cubes
        * &lt;/script&gt;
        * @memberof ejOlapClient
        * @instance
        */
        cubeChanged: function (sender) {
            this.currentCubeName = sender.text;
            if (oclientProxy.model.progressMode != "infinite") {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("RenderingLayoutStarted");
                this._progressStatus(0, 80, 120);
            }
            else
                oclientWaitingPopup.show();
            if (this.model.beforeServiceInvoke != null)
                this._trigger("beforeServiceInvoke", { action: "cubeChanged", element: this.element, customObject: this.model.customObject });
            var serializedCustomObject = JSON.stringify(this.model.customObject);
            this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.cubeChanged, JSON.stringify({ "action": "cubeChanged", "cubeName": this.currentCubeName, "customObject": serializedCustomObject, "clientParams": this.model.enableMeasureGroups }), this._cubeChangedSuccess);
        },

        measureGroupChanged: function (sender) {
            if (oclientProxy.model.progressMode != "infinite") {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("RenderingLayoutStarted");
                this._progressStatus(0, 80, 120);
            }
            else
                oclientWaitingPopup.show();
            if (this.model.beforeServiceInvoke != null)
                this._trigger("beforeServiceInvoke", { action: "cubeChanged", element: this.element, customObject: this.model.customObject });
            var serializedCustomObject = JSON.stringify(this.model.customObject);
            this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.measureGroupChanged, JSON.stringify({ "action": "measureGroupChanged", "measureGroupName": sender.text, "customObject": serializedCustomObject }), this._measureGroupChangedSuccess);
        },

		/**
        * This function is raised while changing the report.
		* @return jQuery
        * @example 
        * &lt;div id="OlapClient"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Client
        * $('#OlapClient').ejOlapClient({
        *       url: "OlapClientService.svc"
        *   });
        * var clientObj = $("#OlapClient").data("ejOlapClient");
        * clientObj.reportChanged(ej.proxy(function(){}, this));
        * // raised while changing reports
        * &lt;/script&gt;
        * @memberof ejOlapClient
        * @instance
        */
        reportChanged: function (sender) {
            if (oclientProxy.model.progressMode != "infinite") {
                if (oclientProxy.model.progressMode == "progress")
                    $("#" + oclientProxy._id + "progressText")[0].innerHTML = oclientProxy._getLocalizedLabels("PreparingAndExecutingMDXquery");
                this._progressStatus(5, 80, 100);
            }
            else
                oclientWaitingPopup.show();
            if (oclientProxy.model.beforeServiceInvoke != null)
                this._trigger("beforeServiceInvoke", { action: "toolbarOperation", element: this.element, customObject: this.model.customObject });
            var serializedCustomObject = JSON.stringify(oclientProxy.model.customObject);
            this.doAjaxPost("POST", this.model.url + "/" + this.model.serviceMethodSettings.toolbarServices, JSON.stringify({ "action": "toolbarOperation", "toolbarOperation": "Report Change", "clientInfo": sender.text, "olapReport": null, "clientReports": this.reports, "customObject": serializedCustomObject }), this._toolbarOperationSuccess);
        },

		/**
        * This function is raised after dropping the element in Axis Element Builder.
		* @return jQuery
        * @example 
        * &lt;div id="OlapClient"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Client
        * $('#OlapClient').ejOlapClient({
        *       url: "OlapClientService.svc"
        *   });
        * var clientObj = $("#OlapClient").data("ejOlapClient");
        * clientObj.onDropped(ej.proxy(function(){}, this));
        * // raised while dropping tree nodes
        * &lt;/script&gt;
        * @memberof ejOlapClient
        * @instance
        */
        onDropped: function (sender) {
            if (sender.target.className.indexOf("e-button") > -1) {
                var columnPosInfo = this.getAxisPosition(this.element.find(".categoricalAxis"));
                var rowPosInfo = this.getAxisPosition(this.element.find(".rowAxis"));
                var slicerPosInfo = this.getAxisPosition(this.element.find(".slicerAxis"));
                this._dropAxisClassName;
                if (sender.pageX != undefined && sender.pageY != undefined) {
                    if (sender.pageX > columnPosInfo.left && sender.pageX < columnPosInfo.right && sender.pageY > columnPosInfo.top && sender.pageY < columnPosInfo.bottom)
                        this._dropAxisClassName = "categoricalAxis";
                    else if (sender.pageX > rowPosInfo.left && sender.pageX < rowPosInfo.right && sender.pageY > rowPosInfo.top && sender.pageY < rowPosInfo.bottom)
                        this._dropAxisClassName = "rowAxis";
                    else if (sender.pageX > slicerPosInfo.left && sender.pageX < slicerPosInfo.right && sender.pageY > slicerPosInfo.top && sender.pageY < slicerPosInfo.bottom)
                        this._dropAxisClassName = "slicerAxis";
                    else
                        this._dropAxisClassName = "outOfAxis";
                }
            }
        },

       /**
        * 	This function is used to get the position of the axis element builders.
		* @return jQuery
        * @example 
        * &lt;div id="OlapClient"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Client
        * $('#OlapClient').ejOlapClient({
        *       url: "OlapClientService.svc"
        *   });
        * var clientObj = $("#OlapClient").data("ejOlapClient");
        * clientObj.getAxisPosition(eve);
        * // used to get the position of the axis element builders
        * &lt;/script&gt;
        * @memberof ejOlapClient
        * @instance
        */
        getAxisPosition: function (targetElement) {
            var tempPos = targetElement.position();
            var item = {};
            item["top"] = tempPos.top;
            item["right"] = tempPos.left + $(targetElement).width();
            item["bottom"] = tempPos.top + $(targetElement).height();
            item["left"] = tempPos.left;
            return item;
        },

       /**
        * This function is raised while tab changes.
		* @return jQuery
        * @example 
        * &lt;div id="OlapClient"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Client
        * $('#OlapClient').ejOlapClient({
        *       url: "OlapClientService.svc"
        *   });
        * var clientObj = $("#OlapClient").data("ejOlapClient");
        * clientObj.onTabClick(ej.proxy(function(){}, this));
        * // raised while changing tabs
        * &lt;/script&gt;
        * @memberof ejOlapClient
        * @instance
        */
        onTabClick: function (args) {
            if (oclientProxy.ochartObj != null && oclientProxy.ochartObj != undefined)
                oclientProxy.chartObj = oclientProxy.element.find("#" + oclientProxy.ochartObj._id + "Container").data("ejChart");
            currentTab = "chart";
            if ($(args.activeHeader).find("a").text() == "Grid") {
                currentTab = "grid";
                oclientProxy.element.find(".chartTypesImg").addClass("chartTypesOnGridView");
                oclientProxy.element.find(".gridPanel").css("display", "inline");
            }
            else if (oclientProxy.chartObj != null && oclientProxy.chartObj != undefined) {
                currentTab = "chart";
                oclientProxy.element.find(".chartTypesImg").removeClass("chartTypesOnGridView");
                if (oclientProxy.model.progressMode == "infinite")
                    oclientWaitingPopup.show();
                oclientProxy.chartObj.redraw();
                if (oclientProxy.model.progressMode == "infinite")
                    oclientWaitingPopup.hide();
            }
        },

        /**
        * Perform an asynchronous HTTP (Ajax) request.
        * @return jQuery
        * @example 
        * &lt;div id="OlapClient"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Create OLAP Client
        * $('#OlapClient').ejOlapClient({
        *       url: "OlapClientService.svc"
        *   });
        * var clientObj = $("#OlapClient").data("ejOlapClient");
        * clientObj.doAjaxPost("POST", "/OlapClientService.svc/Initialize", {"key", "Hello World"}, "renderControlSuccess", null);
        * // initiate an Ajax request
        * &lt;/script&gt;
        * @memberof ejOlapClient
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
                complete: ej.proxy(function () {
                    var eventArgs = { "customObject": this.model.customObject, "element": this.element};
                    this._trigger("renderComplete", eventArgs);
                },this),
                error: ej.proxy(function (msg, textStatus, errorThrown) {
                    if (this.model.progressMode != "infinite") {
                        window.clearInterval(oClientTimer);
                        if (this.model.progressMode == "progress")
                            $("#" + this._id + "progressText")[0].innerHTML =this._getLocalizedLabels("MDXqueryExecutionFailed")+"!!!";
                        $("#" + this._id).show();
                        oclientProgressBar.setModel({ value: 0, text: "Failed!!!" });
                    }
                    else {
                        oclientWaitingPopup = $("#" + this._id).data("ejWaitingPopup");
                        oclientWaitingPopup.hide();
                    }
                    var eventArgs = { "customObject": this.model.customObject, "element": this.element, "Message": msg };
                    this._trigger("renderFailure",eventArgs);
                },this)
            });
        }
    });

    //OLAP Client Localization
    ej.olap.OlapClient.locale = {};
	//Default english localized values
    ej.olap.OlapClient.locale["en-US"] = {
        Column: "Column",
        Row: "Row",
        Slicer: "Slicer",
        CubeSelector: "Cube Selector",
        ReportName: "Report Name",
        NewReport: "New Report",
        CubeDimensionBrowser: "Cube Dimension Browser",
        AddReport: "Add Report",
        RemoveReport: "Remove Report",
        CannotRemoveSingleReport:"Can not remove Single Report",
        AreYouSureToDeleteTheReport: "Are you sure to delete the Report",
        RenameReport: "Rename Report",
        SaveReport: "Save Report",
        ChartTypes: "Chart Types",
        LoadReport: "Load Report",
        ExportToExcel: "Export To Excel",
        FullScreen: "Full Screen",
        Grid: "Grid",
        Chart: "Chart",
        OK: "OK",
        Cancel: "Cancel",
        MeasureEditor: "Measure Editor",
        MemberEditor: "Member Editor",
        Measures: "Measures",
        OpeningDialog: "Opening dialog",
        OpeningDialogSucceeded: "Opening dialog succeeded",
        PreparingAndExecutingMDXquery: "Preparing and executing MDX query",
        MDXqueryExecutionFailed: "MDX query execution failed",
        MDXqueryExecutedSuccessfully:"MDX query executed successfully",
        RenderingLayoutStarted: "Rendering Layout Started",
        RenderingLayoutCompleted: "Rendering Layout Completed",
        RenderingStarted:"Rendering Started",
        RenderingSucceeded: "Rendering Succeeded",
        SortOrFilterColumn: "Sort/Filter (Column)",
        SortOrFilterRow: "Sort/Filter (Row)",
        SortingAndFiltering: "Sorting And Filtering",
        Sorting: "Sorting",
        Measure: "<u>M</u>easure",
        Order: "Order",
        Filtering: "Filtering",
        Condition: "C<u>o</u>ndition",
        Value: "Val<u>u</u>e",
        PreserveHierarchy: "P<u>r</u>eserve  Hierarchy",
        Ascending: "<u>A</u>scending",
        Descending: "D<u>e</u>scending",
        Enable: "E<u>n</u>able",
        Disable: "D<u>i</u>sable",
        and: "<u>a</u>nd"
    }

    /**
     * Enum for control placement. Allows the user to select a appropriate view for positioning the controls. 
     * @enum {String}
	 * @global
     */
    ej.olap.OlapClient.ControlPlacement = {
        Tab: "tab",
        Tile: "tile"
    };

    /**
     * Enum for display mode. Allows the user to select a appropriate display mode. 
     * @enum {String}
	 * @global
     */
    ej.olap.OlapClient.DisplayMode = {
        ChartOnly: "chartonly",
        GridOnly: "gridonly",
        ChartAndGrid: "chartandgrid"
    };

    /**
     * Enum for default view. Allows the user to set the default view of the control. 
     * @enum {String}
	 * @global
     */
    ej.olap.OlapClient.DefaultView = {
        Chart: "chart",
        Grid: "grid"
    };

    /**
     * Enum for progress mode. Allows the user to select an appropriate progress indicator. 
     * @enum {String}
	 * @global
     */
    ej.olap.OlapClient.ProgressMode = {
        Infinite: "infinite",
        Normal: "normal",
        Progress: "progress"
    };

})(jQuery, Syncfusion);;