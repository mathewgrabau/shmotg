/*!
*  filename: ej.treemap.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html TreeMap elements
* @copyright Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
* @version 12.1 
* @author &lt;a href="mailto:licensing@syncfusion.com"&gt;Syncfusion Inc&lt;/a&gt;
*/
(function ($, ej, undefined) {
    /**
    * @namespace ej
    * @class ejTreeMap
    * @requires jQuery
    * @requires ej.datavisualization.TreeMap
    * @requires jsrender
    * @requires properties
    * @classdesc The treemap can be easily configured to the DOM element, such as div and can be created with a highly customized look and feel.
    * @example 
    * &lt;div id="container"&gt; <br> 
    * &lt;script&gt;
    * // Create TreeMap
    * $('#container').ejTreeMap(); 	
    * &lt;/script&gt; <br>  
    * &lt;/div&gt;
    */
   
    ej.widget({ "ejTreeMap": "ej.datavisualization.TreeMap" }, {

        validTags: ["div"],

        defaults: {
            /**
            * Specifies the leaf settings of the treemap
            * @default {borderThickness: 1,borderBrush: "white",showLabels: false,labelPath: null,itemTemplate: null}
			* @type {object}
			* @example 
            * //To set datasource API value during initialization 
			*   $("#container").ejTreeMap({leafItemSettings:{ labelPath: "GameName" , showLabels: true, itemTemplate: temp}});
            * @example 
            * //Get or set the datasource API, after initialization:<br>
            *	//Gets the datasource value 
            *   var property =$("#container").data("ejTreeMap").model.leafItemSettings;<br> 
            *	//Sets the datasource value 
            *	$("#container").data("ejTreeMap").model.leafItemSettings= { labelPath: "GameName" , showLabels: true, itemTemplate: temp}; 
            * @memberof ejTreeMap
            * @instance
            */
            leafItemSettings: {
                /**
                * Specifies the border thickness of the leaf item.
                * @default null
			    * @type {object}
			    * @example 
                * //To set borderThickness API value during initialization 
			    *   $("#container").ejTreeMap({leafItemSettings:{ borderThickness: 1}});
                * @example 
                * //Get or set the borderThickness API, after initialization:<br>
                *	//Gets the borderThickness value 
                *   var property =$("#container").data("ejTreeMap").model.leafItemSettings.borderThickness;<br> 
                *	//Sets the borderThickness value 
                *	$("#container").data("ejTreeMap").model.leafItemSettings = { borderThickness: 1}; 
                * @alias ejTreeMap#leafItemSettings->borderThickness
                * @instance
                */
                borderThickness: 1,

                /**
                * Specifies the border bruch color of the leaf item.
                * @default "white"
			    * @type {string}
			    * @example 
                * //To set borderBrush API value during initialization 
			    *   $("#container").ejTreeMap({leafItemSettings:{ borderBrush: "white"}});
                * @example 
                * //Get or set the borderBrush API, after initialization:<br>
                *	//Gets the borderBrush value 
                *   var property =$("#container").data("ejTreeMap").model.leafItemSettings.borderBrush;<br> 
                *	//Sets the borderBrush value 
                *	$("#container").data("ejTreeMap").model.leafItemSettings = { borderBrush: "white"}; 
                * @alias ejTreeMap#leafItemSettings->borderBrush
                * @instance
                */
                borderBrush: "white",

                /**
                * Shows or hides the label of the leaf item.
                * @default "false"
			    * @type {boolean}
			    * @example 
                * //To set showLabels API value during initialization 
			    *   $("#container").ejTreeMap({leafItemSettings:{ showLabels: "false"}});
                * @example 
                * //Get or set the showLabels API, after initialization:<br>
                *	//Gets the showLabels value 
                *   var property =$("#container").data("ejTreeMap").model.leafItemSettings.showLabels;<br> 
                *	//Sets the showLabels value 
                *	$("#container").data("ejTreeMap").model.leafItemSettings = { showLabels: "false"}; 
                * @alias ejTreeMap#leafItemSettings->showLabels
                * @instance
                */
                showLabels: false,

                /**
                * Specifies the label path of the leaf item.
                * @default null
                * @type {string}
                * @example 
                * //To set labelPath API value during initialization 
                *   $("#container").ejTreeMap({leafItemSettings:{ labelPath: "GameName"}});
                * @example 
                * //Get or set the labelPath API, after initialization:<br>
                *	//Gets the labelPath value 
                *   var property =$("#container").data("ejTreeMap").model.leafItemSettings.labelPath;<br> 
                *	//Sets the labelPath value 
                *	$("#container").data("ejTreeMap").model.leafItemSettings = { labelPath: "GameName"}; 
                * @alias ejTreeMap#leafItemSettings->labelPath
                * @instance
                */
                labelPath: null,

                /**
                * Specifies the label template of the leaf item.
                * @default null
			    * @type {string}
			    * @example 
                * //To set itemTemplate API value during initialization 
			    *   $("#container").ejTreeMap({leafItemSettings:{ itemTemplate: "temp"}});
                * @example 
                * //Get or set the itemTemplate API, after initialization:<br>
                *	//Gets the itemTemplate value 
                *   var property =$("#container").data("ejTreeMap").model.leafItemSettings.itemTemplate;<br> 
                *	//Sets the itemTemplate value 
                *	$("#container").data("ejTreeMap").model.leafItemSettings = { itemTemplate: "temp"}; 
                * @alias ejTreeMap#leafItemSettings->itemTemplate
                * @instance
                */
                itemTemplate: null
            },
            /**		
			* Specifies the datasource of the treemap
            * @default null
			* @type {object}
			* @example 
            * //To set datasource API value during initialization 
			*   $("#container").ejTreeMap({datasource:medal_data});
            * @example 
			* //Get or set the datasource API, after initialization:<br>
			*	//Gets the datasource value 
            *   var property =$("#container").data("ejTreeMap").model.datasource;<br> 
            *	//Sets the datasource value 
			*	$("#container").data("ejTreeMap").model.datasource = medal_data; 
			* @memberof ejTreeMap
			* @instance
            */
            dataSource: null,

            /**		
			* Specifies the color valuepath of the treemap
            * @default null
			* @type {string}
			* @example 
            * //To set colorValuePath API value during initialization 
			*   $("#container").ejTreeMap({colorValuePath:'GoldMedals'});
            * @example 
			* //Get or set the colorValuePath API, after initialization:<br>
			*	//Gets the colorValuePath value 
            *   var property =$("#container").data("ejTreeMap").model.colorValuePath;<br> 
            *	//Sets the colorValuePath value 
			*	$("#container").data("ejTreeMap").model.colorValuePath = 'GoldMedals'; 
			* @memberof ejTreeMap
			* @instance
            */
            colorValuePath: null,

            /**		
			* Specifies the weight valuepath of the treemap
            * @default null
			* @type {string}
			* @example 
            * //To set weightValuePath API value during initialization 
			*   $("#container").ejTreeMap({weightValuePath:'TotalMedals'});
            * @example 
			* //Get or set the weightValuePath API, after initialization:<br>
			*	//Gets the weightValuePath value 
            *   var property =$("#container").data("ejTreeMap").model.weightValuePath;<br> 
            *	//Sets the weightValuePath value 
			*	$("#container").data("ejTreeMap").model.weightValuePath = 'TotalMedals'; 
			* @memberof ejTreeMap
			* @instance
            */
            weightValuePath: null,


            treeMapItems: [],

            /**		
			* Specifies the legend visibility  status of the treemap
            * @default false
			* @type {boolean}
			* @example 
            * //To set showLegend API value during initialization 
			*   $("#container").ejTreeMap({showLegend:false});
            * @example 
			* //Get or set the showLegend API, after initialization:<br>
			*	//Gets the showLegend value 
            *   var property =$("#container").data("ejTreeMap").model.showLegend;<br> 
            *	//Sets the showLegend value 
			*	$("#container").data("ejTreeMap").model.showLegend = false; 
			* @memberof ejTreeMap
			* @instance
            */
            showLegend: false,

            /**		
			* Specifies the border brush color of the treemap
            * @default "white"
			* @type {string}
			* @example 
            * //To set borderBrush API value during initialization 
			*   $("#container").ejTreeMap( {borderBrush:'white'});
            * @example 
			* //Get or set the borderBrush API, after initialization:<br>
			*	//Gets the borderBrush value 
            *   var property =$("#container").data("ejTreeMap").model.borderBrush;<br> 
            *	//Sets the borderBrush value 
			*	$("#container").data("ejTreeMap").model.borderBrush = 'white'; 
			* @memberof ejTreeMap
			* @instance
            */
            borderBrush: "white",

            /**		
			* Specifies the border thickness of the treemap
            * @default 1
			* @type {number}
			* @example 
            * //To set borderThickness API value during initialization 
			*   $("#container").ejTreeMap({borderThickness:1});
            * @example 
			* //Get or set the borderThickness API, after initialization:<br>
			*	//Gets the borderThickness value 
            *   var property =$("#container").data("ejTreeMap").model.borderThickness;<br> 
            *	//Sets the borderThickness value 
			*	$("#container").data("ejTreeMap").model.borderThickness = 1; 
			* @memberof ejTreeMap
			* @instance
            */
            borderThickness: 1,

            /**		
			* Specifies whether treemap need to resize when container is resized
            * @default true
			* @type {boolean}
			* @example 
            * //To set enableResize API value during initialization 
			*   $("#container").ejTreeMap({enableResize:false});
            * @example 
			* //Get or set the enableResize API, after initialization:<br>
			*	//Gets the enableResize value 
            *   var property =$("#container").data("ejTreeMap").model.enableResize;<br> 
            *	//Sets the enableResize value 
			*	$("#container").data("ejTreeMap").model.enableResize = false; 
			* @memberof ejTreeMap
			* @instance
            */
            enableResize: true,

            /**		
			* Specifies the items layout mode of the treemap. Accepted itemsLayoutMode values are Squarified, SliceAndDiceHorizontal, SliceAndDiceVertical and SliceAndDiceAuto
            * @default "Squarified"
			* @type {string}
			* @example 
            * //To set itemsLayoutMode API value during initialization 
			*   $("#container").ejTreeMap({itemsLayoutMode:ej.datavisualization.TreeMap.ItemsLayoutMode.Squarified});
            * @example 
			* //Get or set the itemsLayoutMode API, after initialization:<br>
			*	//Gets the itemsLayoutMode value 
            *   var property =$("#container").data("ejTreeMap").model.itemsLayoutMode;<br> 
            *	//Sets the itemsLayoutMode value 
			*	$("#container").data("ejTreeMap").model.itemsLayoutMode = ej.datavisualization.TreeMap.ItemsLayoutMode.Squarified; 
			* @memberof ejTreeMap
			* @instance
            */
            itemsLayoutMode: "squarified",

            // Level Collection
            /**		
            * Specify levels of treemap for grouped visualization of datas
            * @default []
            * @type {treeMapLevel} 
            * @example  
            * // Set the levels during initialization. 		
            *   $("#container").ejTreeMap({	levels: [{ groupPath: "Continent", groupGap: 5, headerHeight: 30, headerTemplate: 'headertemplate' }]})
            * @example 
            * //Get or set the levels after initialization:<br>
            *   //Gets the levels from map.
            *   var levels =$("#container").data("ejTreeMap").model.levels[levelIndex];
            *   //Sets the levels to map.
            *   $("#container").data("ejTreeMap").model.levels[levelIndex]  = { groupPath: "Continent", groupGap: 5, headerHeight: 30, headerTemplate: 'headertemplate' };
            * @memberof ejTreeMap
            * @instance
            */
            levels: [],

            /**		
			* Specifies the legendSettings of the treemap
            * @default null
			* @type {object}
			* @example 
            * //To set legendSettings API value during initialization 
			*   $("#container").ejTreeMap( {legendSettings:{ template: null, iconHeight: 15, iconWidth: 25 }});
            * @example 
			* //Get or set the legendSettings API, after initialization:<br>
			*	//Gets the legendSettings value 
            *   var property =$("#container").data("ejTreeMap").model.legendSettings;<br> 
            *	//Sets the legendSettings value 
			*	$("#container").data("ejTreeMap").model.legendSettings = { template: null, iconHeight: 15, iconWidth: 25 }; 
			* @memberof ejTreeMap
			* @instance
            */
            legendSettings: { template: null, iconHeight: 15, iconWidth: 25 },

            /**		
			* Specifies the range color mapping of the treemap
            * @default []
			* @type {object}
			* @example 
            * //To set rangeColorMapping API value during initialization 
			*   $("#container").ejTreeMap( {rangeColorMapping:[{ color: "#77D8D8",legendLabel:"1% Growth", from: "0", to: "1" }]});
            * @example 
			* //Get or set the rangeColorMapping API, after initialization:<br>
			*	//Gets the rangeColorMapping value 
            *   var property =$("#container").data("ejTreeMap").model.rangeColorMapping;<br> 
            *	//Sets the rangeColorMapping value 
			*	$("#container").data("ejTreeMap").model.rangeColorMapping = [{ color: "#77D8D8",legendLabel:"1% Growth", from: "0", to: "1" }]; 
			* @memberof ejTreeMap
			* @instance
            */
            rangeColorMapping: [],
            /**		
			* Specifies the uniform color mapping of the treemap
            * @default { color: null }
			* @type {object}
			* @example 
            * //To set uniColorMapping API value during initialization 
			*   $("#container").ejTreeMap( {uniColorMapping{ color: null }});
            * @example 
			* //Get or set the uniColorMapping API, after initialization:<br>
			*	//Gets the uniColorMapping value 
            *   var property =$("#container").data("ejTreeMap").model.uniColorMapping;<br> 
            *	//Sets the uniColorMapping value 
			*	$("#container").data("ejTreeMap").model.uniColorMapping = { color: null }; 
			* @memberof ejTreeMap
			* @instance
            */
            uniColorMapping: { color: null },

            /**		
			* Specifies the desaturation color mapping of the treemap
            * @default { from: 0, to: 0, color: 'blue', rangeMinimum: 0, rangeMaximum: 0 }
			* @type {object}
			* @example 
            * //To set desaturationColorMapping API value during initialization 
			*   $("#container").ejTreeMap( {desaturationColorMapping{ from:1, to:0.5 ,color:"#41B8C4", rangeMinimum:2000,rangeMaximum:8000}});
            * @example 
			* //Get or set the desaturationColorMapping API, after initialization:<br>
			*	//Gets the desaturationColorMapping value 
            *   var property =$("#container").data("ejTreeMap").model.desaturationColorMapping;<br> 
            *	//Sets the desaturationColorMapping value 
			*	$("#container").data("ejTreeMap").model.desaturationColorMapping = { from:1, to:0.5 ,color:"#41B8C4", rangeMinimum:2000,rangeMaximum:8000}; 
			* @memberof ejTreeMap
			* @instance
            */
            desaturationColorMapping: { from:0, to:0,color:null, rangeMinimum:0,rangeMaximum:0},

            /**		
			* Specifies the palette color mapping of the treemap
            * @default null
			* @type {object}
			* @example 
            * //To set paletteColorMapping API value during initialization 
			*   $("#container").ejTreeMap( {paletteColorMapping{colors: ["red","green","blue", "yellow"]}});
            * @example 
			* //Get or set the paletteColorMapping API, after initialization:<br>
			*	//Gets the paletteColorMapping value 
            *   var property =$("#container").data("ejTreeMap").model.paletteColorMapping;<br> 
            *	//Sets the paletteColorMapping value 
			*	$("#container").data("ejTreeMap").model.paletteColorMapping = {colors: ["red","green","blue", "yellow"]}; 
			* @memberof ejTreeMap
			* @instance
            */
            paletteColorMapping: null,

            /**		
			* Specifies whether treemap item need to highlighted on selection
            * @default false
			* @type {boolean}
			* @example 
            * //To set highlightOnSelection API value during initialization 
			*   $("#container").ejTreeMap({highlightOnSelection:false});
            * @example 
			* //Get or set the highlightOnSelection API, after initialization:<br>
			*	//Gets the highlightOnSelection value 
            *   var property =$("#container").data("ejTreeMap").model.highlightOnSelection;<br> 
            *	//Sets the highlightOnSelection value 
			*	$("#container").data("ejTreeMap").model.highlightOnSelection = false; 
			* @memberof ejTreeMap
			* @instance
            */
            highlightOnSelection: false,

            /**		
			* Specifies whether treemap tooltip need to be visible
            * @default false
			* @type {boolean}
			* @example 
            * //To set showTooltip API value during initialization 
			*   $("#container").ejTreeMap({showTooltip:false});
            * @example 
			* //Get or set the showTooltip API, after initialization:<br>
			*	//Gets the showTooltip value 
            *   var property =$("#container").data("ejTreeMap").model.showTooltip;<br> 
            *	//Sets the showTooltip value 
			*	$("#container").data("ejTreeMap").model.showTooltip = false; 
			* @memberof ejTreeMap
			* @instance
            */
            showTooltip: false,

            /**		
			* Specifies the tooltip template of the treemap
            * @default null
			* @type {string}
			* @example 
            * //To set tooltipTemplate API value during initialization 
			*   $("#container").ejTreeMap({tooltipTemplate:'template'});
            * @example 
			* //Get or set the tooltipTemplate API, after initialization:<br>
			*	//Gets the tooltipTemplate value 
            *   var property =$("#container").data("ejTreeMap").model.tooltipTemplate;<br> 
            *	//Sets the tooltipTemplate value 
			*	$("#container").data("ejTreeMap").model.tooltipTemplate = 'template'; 
			* @memberof ejTreeMap
			* @instance
            */
            tooltipTemplate: null,

            /**		
			* Specifies the border thickness when treemap items is highlighted in the treemap
            * @default 5
			* @type {number}
			* @example 
            * //To set highlightBorderThickness API value during initialization 
			*   $("#container").ejTreeMap({highlightBorderThickness:5});
            * @example 
			* //Get or set the highlightBorderThickness API, after initialization:<br>
			*	//Gets the highlightBorderThickness value 
            *   var property =$("#container").data("ejTreeMap").model.highlightBorderThickness;<br> 
            *	//Sets the highlightBorderThickness value 
			*	$("#container").data("ejTreeMap").model.highlightBorderThickness = 5; 
			* @memberof ejTreeMap
			* @instance
            */
            highlightBorderThickness: 5,

            /**		
			* Specifies the highlight border brush of treemap
            * @default "gray"
			* @type {string}
			* @example 
            * //To set highlightBorderBrush API value during initialization 
			*   $("#container").ejTreeMap({highlightBorderBrush:'gray'});
            * @example 
			* //Get or set the highlightBorderBrush API, after initialization:<br>
			*	//Gets the highlightBorderBrush value 
            *   var property =$("#container").data("ejTreeMap").model.highlightBorderBrush;<br> 
            *	//Sets the highlightBorderBrush value 
			*	$("#container").data("ejTreeMap").model.highlightBorderBrush = 'gray'; 
			* @memberof ejTreeMap
			* @instance
            */
            highlightBorderBrush: "gray"
        },
        /**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            dataSource: "data",
            treeMapItems: "array",
            levels: "array",
            rangeColorMapping: "array",
            paletteColorMapping: "array"
        },
		
        observables: ["dataSource", "colorValuePath", "weightValuePath"],
        dataSource: ej.util.valueFunction("dataSource"),
        colorValuePath: ej.util.valueFunction("colorValuePath"),
        weightValuePath: ej.util.valueFunction("weightValuePath"),

        _initPrivateProperties: function () {
            this._svgDocument = null;
            this._templateDiv = null;
            this._backgroundTile = null;
            this._height = 500;
            this._initDiv = null;
            this._width = 500;
            this._svgns = "http://www.w3.org/2000/svg";
            this._prevSelectedItem = null;
            /**     
        * Triggers on treemap item selected. 
        * @event
        * @name ejTreeMap#treeMapItemSelected            
        * @param {object} originalEvent.data Returns selected treeMapItem object.
        * @example 
        * //treemap item selected event for treemap
        * $("#container").ejTreeMap({
        *    treeMapItemSelected: function () {}
        * });
        * @memberof ejTreeMap
        * @instance
        */
            this.treeMapItemSelected = null;
            this._toolTipElement = null;
            this._rootTreeMapItems = [];
            this._treeMapHeaders = [];
            this._treeMapLabels = [];
            this._labelTemplateElements = [];
            this._itemGroups = [];

        },

        /**
          * To configure the properties at runtime using SetModel		
          * @private
          */
        _setModel: function (options) {
            for (var prop in options) {
                switch (prop) {
                    case "itemsLayoutMode":
                        this.model.itemsLayoutMode = options[prop];
                        this.refresh();
                        break;
                }
            }
        },

        /**
        * Create the treemap widget
        * @private
        */
        _init: function () {

            this._initPrivateProperties();
            this._levelInitialize();
            this.refresh();           

        },

        /**
        * Destroy the map widget
        * @private
        */
        _destroy: function() {

        },
        
        /**
        * Create level for treemap
        * @private
        */
        _levelInitialize: function () {
            var proxy = this;
            if (this.model.levels != null) {
                $.each(this.model.levels, function (index, element) {                    
                    element = proxy._checkArrayObject(element, index);
                    var obj = new treeMapLevel();                    
                    $.extend(obj, element);
                    $.extend(element, obj);                    
                });
            }
            else {
                this.levels.treeMapLevel = new treeMapLevel();

            }
        },

        /**
       * Checks array object
       * @private
       */
        _checkArrayObject: function (element, initialName) {
            var proxy = this;
            $.each(element, function (name, innerElement) {
                if (innerElement instanceof Array) {
                    proxy._checkArrayObject(innerElement, name);
                }
                else if (innerElement != null && typeof innerElement == "object") {
                    var allObjects = new treeMapLevel();
                    proxy._loadIndividualDefaultValues(innerElement, allObjects, (typeof name === "number") ? initialName : name);
                }
            });
            return element;
        },

        /**
          * Loads individual default values
          * @private
          */
        _loadIndividualDefaultValues: function (obj, allObjects, name) {
            var defaultObj = null;
            var proxy = this;
            $.each(allObjects, function (n, element) {
                if (name == n) {
                    defaultObj = element;
                    return;
                }
            });
            if (defaultObj instanceof Array) defaultObj = defaultObj[0];

            $.each(obj, function (objName, ele) {
                if (ele instanceof Array) {
                    proxy._checkArrayObject(ele, name);
                }
                else if (ele != null && typeof ele == "object") {
                    proxy._loadIndividualDefaultValues(ele, ele, (typeof objName === "number") ? name : objName);
                }
            });

            $.extend(defaultObj, obj);
            $.extend(obj, defaultObj);
            return obj;
        },


        /**     
       * Method to reload treemap with updated values.
       * @return jQuery
       * @example 
       * //refresh method for treemap
       * $("#container").ejTreeMap({
       *    refresh: function () {}
       * });
       * @memberof ejTreeMap
       * @instance
       */
        refresh: function () {
            this._initPrivateProperties();
            $(this.element).empty();
            if (this._svgDocument != null) {
                $(this._svgDocument).empty();
            }
            this._height = this.element.height();
            this._width = this.element.width();
             if (this._height == 0) {
                this._height = this.element[0].parentElement.clientHeight;
            }
            if (this._width == 0) {
                this._width = this.element[0].parentElement.clientWidth;
            }
		    var matched = jQuery.uaMatch(navigator.userAgent);
            var browser = matched.browser.toLowerCase();
			var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);             
			  $(this.element).css({ 'position': 'relative' });			
           
            if (this._height != 0 && this._width != 0) {                
                this._templateDiv = $("<div class='_templateDiv'></div>");
                this._templateDiv.css({
                    'pointer-events': 'none', 'overflow': 'hidden','float':'left', 
                    'z-index': '2', 'height': this._height, 'width': this._width
                });                
                this._backgroundTile= $('<div id="backgroundTile" style="overflow:hidden;z-index:0;"></div>');
				if(this.model.dataSource!=null){
                      if (this.model.dataSource instanceof ej.DataManager) {
				          this._processOData(this);
				      }
				 else
				 {
				     this._renderTreeMap(this.dataSource());
				 }
                }
                if (this.model.enableResize) {
                    this._on($(window), "resize", this._treeMapResize);
                }
            }
        },
		
	   /**
      * Section For handling treemap redering
      * @private
      */
		_renderTreeMap:function(data)
		{
		    this._groupLevels(data);
            if (this.model.showLegend) {
                this._generateLegend();
            }
            this._generateToolTip();
            this._renderLabels();
		},
		
		 /**
         * Section For handling treemap redering
         * @private
         */
		_processOData: function (treemap) {  
			var treeMap= this;		 
			var queryPromise = treemap.model.dataSource.executeQuery(treemap.model.query);
			queryPromise.done(function (e) {
			    if(e.result!=null)
				{
                   treeMap._renderTreeMap(e.result);
				}
			});        
        },
    
        /**
      * Section For handling treemap resize
      * @private
      */
        _treeMapResize: function (event) {
            event.preventDefault();
            event.stopPropagation();
            var treemap = this;
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                treemap.refresh();
            }, 500);
        },
       
        /**
          * Groups levels of treemap
          * @private
          */
        _groupLevels: function (data) {            
            var subItems = null;            
            var rootItems = this._getTopGroupitem(this.model.leafItemSettings.labelPath, data, 0);
            subItems = rootItems;
            if (this.model.levels.length == 0) {
                var levelItem = this.model.leafItemSettings;
                this._rootTreeMapItems = rootItems;
                this._getTopLevels(rootItems[0].innerItems, levelItem);
                this._generateTreeMapItems(rootItems[0].innerItems, "gray", this.colorValuePath());           
				
                this._generateLabels(rootItems[0].innerItems, null, levelItem.itemTemplate, levelItem.showLabels);                    
            }
            if(this.model.levels.length>0){
                for (var i = 0; i <= this.model.levels.length; i++) {
                    var levelItem = this.model.levels[i];
                    if (i != 0) {
                        var cloneItems = subItems;
                        var PrevItem = this.model.levels[i - 1];
                        subItems = [];
                        if (levelItem == null) levelItem = this.model.leafItemSettings;
                        this._generateSubItems(cloneItems, levelItem, subItems, PrevItem);
                        this._rootTreeMapItems = subItems;
                        if (i == this.model.levels.length) {                            
                            this._generateTreeMapItems(subItems, "gray", PrevItem.DisplayPath);
                            
                        }                                                  
						
                        this._generateLabels(subItems, null, levelItem.itemTemplate, levelItem.showLabels);
                    }
                    else {
                        var rootItems1 = this._getGroupitem(levelItem.groupPath, rootItems[0].Data, levelItem.headerHeight);
                        this._rootTreeMapItems = rootItems1;
                        this._getTopLevels(rootItems1, levelItem);
                        subItems = rootItems1;                        
                    }
                }
                
            }
        },

        /**
          * Gets top levels of treemap
          * @private
          */
        _getTopLevels: function (rootItems, level) {
            var gap = (level.groupGap != null) ? level.groupGap : 0;
            var layout = this.model.itemsLayoutMode;
            var legendHeight = 0;
            if (this.model.showLegend && this.model.legendSettings != null) {
                legendHeight = this.model.legendSettings.iconHeight+20;
            }
            if (layout == ej.datavisualization.TreeMap.ItemsLayoutMode.SliceAndDiceHorizontal) {
                this._calculateSliceAndDiceItemSize(rootItems, 0, legendHeight, this._width, this._height, gap, 0, true, legendHeight);
            }
            else if (layout == ej.datavisualization.TreeMap.ItemsLayoutMode.SliceAndDiceVertical) {
                this._calculateSliceAndDiceItemSize(rootItems, 0, legendHeight, this._width, this._height, gap, 0, false, legendHeight);
            }
            else if (layout == ej.datavisualization.TreeMap.ItemsLayoutMode.SliceAndDiceAuto) {
                this._calculateSliceAndDiceItemSize(rootItems, 0, legendHeight, this._width, this._height, gap, 0, null, legendHeight);
            }
            else {
                this._calculateSquarifiedItemSize(rootItems, 0, legendHeight, this._width, this._height, gap, 0, legendHeight);
            }
        },

      
        /**
         * Generates sub treemap items
         * @private
         */
        _generateSubItems: function (cloneItems, levelItem, subItems, PrevItem) {
            var layout = this.model.itemsLayoutMode;
            var cloneItemsCount = cloneItems.length;
            var path = levelItem.groupPath;
            if (path == null) path = this.model.leafItemSettings.labelPath;
            if (path == null) path = this.weightValuePath();
            var gap = levelItem.groupGap != null ? levelItem.groupGap : 0;
            var headerHeight=(PrevItem.showHeader || PrevItem.showHeader==null)? PrevItem.headerHeight:0;
            var totalItemsCount = 0;
            for (var j = 0; j < cloneItemsCount; j++) {
                var treeItems = this._getGroupitem(path, cloneItems[j].Data, levelItem.headerHeight);
                if (layout == ej.datavisualization.TreeMap.ItemsLayoutMode.SliceAndDiceHorizontal) {
                    this._calculateSliceAndDiceItemSize(treeItems, cloneItems[j].LeftPosition + (PrevItem.groupPadding), cloneItems[j].TopPosition + (PrevItem.groupPadding), cloneItems[j].ItemWidth - (PrevItem.groupBorderThickness + (2 * PrevItem.groupPadding)), cloneItems[j].ItemHeight - (PrevItem.groupBorderThickness + (2 * PrevItem.groupPadding)), gap, headerHeight, true, 0);
                }
                else if (layout == ej.datavisualization.TreeMap.ItemsLayoutMode.SliceAndDiceVertical) {
                    this._calculateSliceAndDiceItemSize(treeItems, cloneItems[j].LeftPosition + (PrevItem.groupPadding), cloneItems[j].TopPosition + (PrevItem.groupPadding), cloneItems[j].ItemWidth - (PrevItem.groupBorderThickness + (2 * PrevItem.groupPadding)), cloneItems[j].ItemHeight - (PrevItem.groupBorderThickness + (2 * PrevItem.groupPadding)), gap, headerHeight, false, 0);
                }
                else if (layout == ej.datavisualization.TreeMap.ItemsLayoutMode.SliceAndDiceAuto) {
                    this._calculateSliceAndDiceItemSize(treeItems, cloneItems[j].LeftPosition + (PrevItem.groupPadding), cloneItems[j].TopPosition + (PrevItem.groupPadding), cloneItems[j].ItemWidth - (PrevItem.groupBorderThickness + (2 * PrevItem.groupPadding)), cloneItems[j].ItemHeight - (PrevItem.groupBorderThickness + (2 * PrevItem.groupPadding)), gap, headerHeight, null, 0);
                }
                else {
                    this._calculateSquarifiedItemSize(treeItems, cloneItems[j].LeftPosition + (PrevItem.groupPadding), cloneItems[j].TopPosition + (PrevItem.groupPadding), cloneItems[j].ItemWidth - (PrevItem.groupBorderThickness + (2 * PrevItem.groupPadding)), cloneItems[j].ItemHeight - (PrevItem.groupBorderThickness + (2 * PrevItem.groupPadding)), gap, headerHeight, 0);
                }                
                var headerItem = this._rootTreeMapItems[j];                
                headerItem.headerHeight = PrevItem.headerHeight;
                headerItem.showHeader = PrevItem.showHeader;
                headerItem.headerWidth = cloneItems[j].ItemWidth;
                headerItem.headerTemplate = PrevItem.headerTemplate;
                headerItem.headerLeftPosition = cloneItems[j].LeftPosition;
                headerItem.headerTopPosition = cloneItems[j].TopPosition;
                if (PrevItem.showHeader || PrevItem.showHeader==null) {
                    this._createBackGround(headerItem, PrevItem);
                    this._generateHeaders(headerItem, PrevItem);
                }              
               
                cloneItems[j].ChildtreeMapItems = treeItems;
                cloneItems[j].GroupingLevel = this.model.levels.indexOf(PrevItem) + 1;
                for (var k = 0; k < treeItems.length; k++) {
                    subItems[totalItemsCount] = treeItems[k];
                    subItems[totalItemsCount].ItemHeight -= PrevItem.groupPadding;
                    subItems[totalItemsCount].ItemWidth -= PrevItem.groupPadding;
                    subItems[totalItemsCount].LeftPosition += PrevItem.groupBorderThickness;
                    subItems[totalItemsCount].TopPosition += PrevItem.groupBorderThickness;
                    totalItemsCount++;
                }
            }
			
            this._generateLabels(cloneItems, PrevItem.labelTemplate, null, PrevItem.showLabels);                
        },
        /**
        * create background for treemap items
        * @private
        */
        _createBackGround: function (header, level) {            
            var rect = $("<div />");
            var height = (header.showHeader|| header.showHeader==null) ? header.ItemHeight - (2*level.groupBorderThickness) : 0;
            var top = (header.showHeader || header.showHeader == null) ? header.TopPosition : 0;
            rect.css({
                "height": height + "px",
                "width": header.ItemWidth - (2 * level.groupBorderThickness) + "px",
                "left": header.LeftPosition + "px",
                "top": top + "px",
                "border-style": "solid",
                "border-width": level.groupBorderThickness+"px",
                "border-color": level.groupBorderColor,
                "position": "absolute",
                "background-color": level.groupBackground
            });
            rect.appendTo(this._backgroundTile);
        },

        /**
        * Generates labels for treemap items
        * @private
        */
        _generateLabels: function (Items,labelTemplate, itemTemplate, showLabels) {            
            for (var i = 0; i < Items.length; i++) {
                var item = Items[i];
                if(itemTemplate!=null) {
                    var OriginalNode = $("#" + itemTemplate);
                    var item_templateDiv = $("<div style='overflow:hidden;display:block;position:absolute;pointer-events: none;'></div>");
                    item_templateDiv[0].data = item;
                    var tmpl2 = $.templates(OriginalNode.html());
                    var htmlString = tmpl2.render(item);
                    $(item_templateDiv).html(htmlString);
                    $(item_templateDiv).css({
                        "left": item.LeftPosition + 10 +"px",
                        "top": item.TopPosition + 5 +"px"
                    });
                    this._templateDiv.append(item_templateDiv);
                    this._labelTemplateElements.push(item_templateDiv);
                }
				
				if (showLabels && labelTemplate == null) {                    
                    var textcon = $("<label></label>");                   
                    $(textcon).css({
                        "font-family": "Segoe UI", "font-size": "14px;", "color": "white", "position": "absolute",
                        "overflow": "hidden", "width": item.ItemWidth - 10 + "px", "left": item.LeftPosition + 10 + "px",
                        "top": item.TopPosition + 5 + "px", "height": item.ItemHeight-10,"font-weight":"normal","pointer-events":"none"
                    });
                    textcon[0].innerHTML = item.label;
                    this._treeMapLabels.push(textcon);
                    this._templateDiv.append(textcon);
                }            
                if(labelTemplate != null && showLabels) {
                    var OriginalNode = $("#" + labelTemplate);
                    var item_templateDiv = $("<div style='overflow:hidden;display:block;position:absolute;pointer-events: none;'></div>");
                    item_templateDiv[0].data = item;
                    var tmpl2 = $.templates(OriginalNode.html());
                    var htmlString = tmpl2.render(item);
                    $(item_templateDiv).html(htmlString);
                    $(item_templateDiv).css({
                        "left": item.LeftPosition + (item.ItemWidth / 2),
                        "top": item.TopPosition + (item.ItemHeight / 2)
                    });
                    this._templateDiv.append(item_templateDiv);
                    this._labelTemplateElements.push(item_templateDiv);
                }
            }
        },

        /**
        * Generates tooltip for treemap
        * @private
        */
        _generateToolTip: function () {

            if (this.model.showTooltip) {
                var tooltip_templateDiv = $("<div class='tooltipelement' style='display:none;position:absolute;z-index:1000;pointer-events:none;'></div>");
                $(document.body).append(tooltip_templateDiv);
                this._toolTipElement = tooltip_templateDiv;
                if (this.model.tooltipTemplate == null) {

                    var path;
                    if (this.model.leafItemSettings.labelPath!=null)
                        path = this.model.leafItemSettings.labelPath;
                    else 
                        path = this.weightValuePath();
                    if (path != null) {
                        this.model.tooltipTemplate = 'defaultTooltip';

                        this.element.append($('<div id="defaultTooltip" style="display:none;"><div style="margin-left:10px;margin-top:-25px;"><div class="defaultToolTip"><p style="margin-top:-4px"><label  style="color:rgb(27, 20, 20);font-size:14px;font-weight:normal;font-family:Segoe UI">{{:' + path + '}}</label></p></div></div></div>'));
                    }
                }
            }

        },

        /**
        * Generates legend for treemap
        * @private
        */
        _generateLegend: function () {            
            if (this.model.rangeColorMapping != null) {
                var colormapping = this.model.rangeColorMapping;
                var xPos = 0;
                var yPos = 0;
                var legendSettings = this.model.legendSettings;
                var legendtype = legendSettings.template;
                for (var i = 0; i < colormapping.length; i++) {
                    var legendItem;

                    if (legendtype == "Ellipse") {
                        legendItem = this._getEllipseLegend(legendSettings, xPos, yPos);
                    }
                    else {
                        legendItem = this._getRectLegend(legendSettings, xPos, yPos);
                    }

                    $(legendItem).css("background-color", colormapping[i].color);
                    legendItem.appendTo(this._svgDocument);
                    xPos += legendSettings.iconWidth + 5;                   
                    var legendText = $("<div/>");
                    legendText.css({                        
                        "left": xPos + "px",
                        "top": yPos + "px",
                        "position": "absolute"
                    });                    
                    $(legendText).css({"font-size":"15px", "color":"gray"});
                    legendText[0].innerHTML= colormapping[i].legendLabel;
                    legendText.appendTo(this._svgDocument);
                    var bounds = legendText[0].getBoundingClientRect();
                    var boundwidth = window.SVGSVGElement ? bounds.width : bounds.right - bounds.left;
                    xPos += boundwidth + 18;

                }
            }
        },

        /**
        * Gets ellipse legend
        * @private
        */
        _getEllipseLegend: function (legengItem, xPos, yPos) {

            var rect = $("<div class='e-mapLegend'/>");
            rect.css({
                "height": this.model.legendSettings.iconHeight+ "px",
                "width": this.model.legendSettings.iconWidth + "px",
                "border-radius":this.model.legendSettings.iconHeight/2+"px",
                "left": xPos + "px",
                "top": yPos + "px",
                "position": "absolute"
            });
            return rect;

        },

        /**
        * Gets rect legend
        * @private
        */
        _getRectLegend: function (legengItem, xPos, yPos) {
            var rect = $("<div />");
            rect.css({
                "height": this.model.legendSettings.iconHeight+ "px",
                "width": this.model.legendSettings.iconWidth + "px",                
                "left": xPos + "px",
                "top": yPos + "px",
                "position": "absolute"
            });
            return rect;
        },

        /**
        * Gets position from parent
        * @private
        */
        _getPositionFromParent: function (element, parentelement) {
            var child = element.getBoundingClientRect();
            var parent = parentelement.getBoundingClientRect();
            var width = window.SVGSVGElement ? child.width: child.right-child.left;
            var height = window.SVGSVGElement ? child.height : child.bottom - child.top;            
            return { left: child.left - parent.left, top: child.top - parent.top, height: height, width: width };
        },

        /**
       * Renders labels
       * @private
       */
        _renderLabels: function () {

            for (var j = 0; j < this._labelTemplateElements.length; j++) {
                var label = this._labelTemplateElements[j];                
                var bounds = this._getPositionFromParent(label[0],this._templateDiv[0]);
                var item = label[0].data;
                var leftPos = $(label).css('left');
                var topPos = $(label).css('top');
                $(label).css({
                    "left": parseInt(leftPos) - (bounds.width / 2),
                    "top": parseInt(topPos) - (bounds.height / 2),
                    "pointer-events": "none"
                });
               

            }

        },

        /**
       * Generates headers
       * @private
       */
        _generateHeaders: function (headerValue,level) {           
            if (headerValue.headerTemplate == null) {
                var headerItem = $('<div style="display:block;position:absolute;pointer-events: stroke;overflow: hidden;"><label style="color:#262626;font-size:15px;font-weight:normal;font-family:Segoe UI;">' + headerValue.header + '</label></div>');
                $(headerItem).css({
                    "left": headerValue.headerLeftPosition+2,
                    "top": headerValue.headerTopPosition+2,
                    "width": headerValue.headerWidth - level.groupPadding,
                    "height": headerValue.headerHeight,
                    "margin-left": level.groupPadding                    
                });                
                this._templateDiv.append(headerItem);
            }
            else{
                var item_templateDiv = $("<div style='display:block;position:absolute;pointer-events: none;overflow: hidden;'></div>");
                this._templateDiv.append(item_templateDiv);
                $(item_templateDiv).css({
                    "left": headerValue.headerLeftPosition,
                    "width": headerValue.headerWidth, "top": headerValue.headerTopPosition,
                    "height": headerValue.headerHeight
                });
                var htmlString = $("#" + headerValue.headerTemplate).render(headerValue);
                $(item_templateDiv).html(htmlString);

            }
        },

        /**
          * Generates treemap items
          * @private
          */
        _generateTreeMapItems: function (Items, fill, path) {
            this._getTreeMapItemTemplate(Items);
            if (Items != null) {
                for (var i = 0; i < Items.length; i++) {
                    var item = Items[i];                    
                    var rect = this._svgDocument[0].childNodes[i];                    
                    var ColorValue = item._generateColorMappings(this.model);
                    if (ColorValue != null) {
                        $(rect).css("background-color", ColorValue);
                    }
                    else {
                        $(rect).css("background-color", "#BBBDC0");
                    }
                    if (item.Data != null && item.Data.length>0) {
                        item.Data = item.Data[0];
                    }
                    item.Rectangle = rect;
                    $(rect).mouseenter({ Param1: item.Data, Param2: this }, this._rectMouseEnter);
                    $(rect).mousemove({ Param1: item.Data, Param2: this}, this._rectMouseMove);
                    $(rect).mouseleave({ Param1: this }, this._rectMouseLeave);
                    $(rect).mouseup({ Param1: this }, this._rectMouseLeave);
                    $(rect).mousedown({ Param1: item.Data, Param2: this }, this._rectClickFunction);
                }
                if (this.model.rangeColorMapping.length == 0 && this.model.uniColorMapping.color == null && this.model.desaturationColorMapping.color != null) {
                    this._setDesaturationColor(Items, this.model.desaturationColorMapping);
                }
                else if (this.model.PaletteColorMapping != null) {
                    this._setPaletteColor(Items, this.model.PaletteColorMapping);
                }
            }
        },

        /**
          * Gets treemap item template
          * @private
          */
        _getTreeMapItemTemplate: function (Items) {            
            
            var rects ="";
            for (var i = 0; i < Items.length; i++) {
                var item = Items[i];
                rects += '<div style="border-style:solid;position:absolute;left:' + item.LeftPosition + 'px;top:' + item.TopPosition + 'px;height:' + item.ItemHeight + 'px;width:' + item.ItemWidth + 'px;border-width:' + this.model.leafItemSettings.borderThickness + 'px;border-color:' + this.model.leafItemSettings.borderBrush + '"></div>';
            }
            this._svgDocument = $('<div style= "overflow:hidden;position:absolute' +
                              'z-index:1;"' +
                             'id="svgDocument">' + rects + '</div>');
            this._backgroundTile.appendTo(this.element);
            this._svgDocument.appendTo(this.element);           
            this._svgDocument.css({
                "height": this._height+"px", "width": this._width+"px","overflow":"hidden",
                 "z-index":1
            });
            $(this._backgroundTile).css({
                "height": this._height + "px", "width": this._width + "px", "overflow": "hidden",
                "z-index": 0
            });
            this._templateDiv.appendTo(this.element);

        },

        /**
         * Section For handling mouse click event for treemap item
         * @private
         */
        _rectClickFunction: function (event) {
            var treeMap = event.data.Param2;
            if (treeMap.model.highlightOnSelection) {
                if (treeMap._prevSelectedItem != null && treeMap._prevSelectedItem != this) {
				    if(treeMap.model.highlightBorderBrush!="none")
					{
						$(treeMap._prevSelectedItem).css({ "border-width": treeMap.model.leafItemSettings.borderThickness, "border-color": treeMap.model.leafItemSettings.borderBrush });
						$(this).css({ "border-width": treeMap.model.highlightBorderThickness, "border-color":treeMap.model.highlightBorderBrush });                    
				    }
                }
                else if (treeMap._prevSelectedItem == this) {
                    $(this).css({ "border-width": treeMap.model.leafItemSettings.borderThickness, "border-color": treeMap.model.leafItemSettings.borderBrush });
                }
                else {
                    $(this).css({ "border-width": treeMap.model.highlightBorderThickness, "border-color": treeMap.model.highlightBorderBrush });
                }
                treeMap._prevSelectedItem = this;
            }
            treeMap._trigger("treeMapItemSelected", event.data.Param1);
        },
        /**
         * Section For handling mouse enter event for  treemap item
         * @private
         */
        _rectMouseEnter: function(event) {
            var tooltipObject = event.data.Param1;
            if (tooltipObject != null) {
                var element = event.data.Param2._toolTipElement;
                var template = event.data.Param2.model.tooltipTemplate;
                if (element != null && template != null) {
                    $(element).css({ "left": event.pageX+10, "top": event.pageY+10, "display": "block" });
                    var htmlString = $("#" + template).render(tooltipObject);
                    $(element).html(htmlString);
                    
                }
            }
        },
        /**
         * Section For handling mouse move event for  treemap item
         * @private
         */
        _rectMouseMove: function (event) {
              var element = event.data.Param2._toolTipElement;
                if (element != null) {
                    $(element).css({ "left": event.pageX+10, "top": event.pageY+10, "display": "block" });
                }
        },

        /**
        * Section For handling mouse leave event for  treemap item
        * @private
        */
        _rectMouseLeave: function (event) {            
            var element = event.data.Param1._toolTipElement;
            if (element != null) {
                $(element).css("display", "none");
            }
        },

        /**
        * Sets desaturation color for treemap items
        * @private
        */
        _setDesaturationColor: function (Items, desaturationColorMapping) {
		    Items = Items.sort(this._orderBycolorWeight);
            var from = desaturationColorMapping.from;
            var to = desaturationColorMapping.to;
            if (from < 0 || from > 1)
                from = 1;
            if (to > 1 || to < 0)
                to = 0;

            var interval = (from - to) / Items.length;
            for (var i = 0; i < Items.length; i++) {
                $(Items[i].Rectangle).css("background-color", desaturationColorMapping.color);
                if (Items[i].colorWeight >= desaturationColorMapping.rangeMinimum && Items[i].colorWeight <= desaturationColorMapping.rangeMaximum) {
                    Items[i].Rectangle.setAttribute('opacity', from);
                    from = from - interval;
                }
            }
        },

        /**
        * Sets palette color for treemap items
        * @private
        */
        _setPaletteColor: function (Items, PaletteColors) {
            Items = Items.sort(this._orderBycolorWeight);
            for (var i = 0; i < Items.length; i++) {
                if (PaletteColors.colors.length > 0) {
                    Items[i].Rectangle.setAttribute("fill", PaletteColors.Colors[i % (PaletteColors.colors.length)]);
                }
            }
        },

        /**
        * Orders items by color weight
        * @private
        */
        _orderBycolorWeight: function (a, b) {
            if (a.colorWeight == b.colorWeight) {
                return 0;
            } else if (a.colorWeight < b.colorWeight) {
                return 1;
            }
            return -1;
        },
       /**
       * Orders items by area weight
       * @private
       */
        _orderByAreaWight: function (a, b) {
            if (a.AreaByWeight == b.AreaByWeight) {
                return 0;
            } else if (a.AreaByWeight < b.AreaByWeight) {
                return 1;
            }
            return -1;
        },

        /**
       * Calculates slice and dice item size 
       * @private
       */
        _calculateSliceAndDiceItemSize: function (Items, xPos, yPos, width, height, gap, headerHeight, isHorizontal,legendHeight) {

            var Gap = gap;
            var totalWeight = this._getTotalWeight(Items);
            if (isHorizontal == undefined) {
                isHorizontal = width > height ? true : false;
            }
            var AvailableSize = { "Width": width, "Height": height-legendHeight };
            var headerSize = headerHeight < AvailableSize.Height ? headerHeight : 0;
            AvailableSize.Height = AvailableSize.Height - headerSize;
            var AvailableArea = { "X": xPos, "Y": yPos + headerSize, "Width": AvailableSize.Width, "Height": AvailableSize.Height };
            var parentArea = AvailableSize.Height * AvailableSize.Width;
            var itemsCount = Items.length;
            if (isHorizontal) {
                var parentHeight = AvailableSize.Height;
                var allottedWidth = 0;
                for (var i = 0; i < itemsCount; i++) {
                    var childarea = (parentArea / totalWeight) * Items[i].weight;
                    var childWidth = childarea / parentHeight;
                    gap = (childWidth > Gap) ? Gap : 0;

                    if (allottedWidth <= AvailableSize.Width) {
                        Items[i].ItemWidth = (i != itemsCount - 1) ? childWidth - gap : childWidth;
                        Items[i].ItemHeight = parentHeight;
                        Items[i].LeftPosition = allottedWidth + xPos;
                        Items[i].TopPosition = yPos + headerHeight;
                        allottedWidth += childWidth;
                    }
                }
            }
            else {
                var parentWidth = AvailableSize.Width;
                var allottedHeight = 0;
                for (var i = 0; i < itemsCount; i++) {
                    var childarea = (parentArea / totalWeight) * Items[i].weight;
                    var childHeight = childarea / parentWidth;
                    gap = (childHeight > Gap) ? Gap : 0;
                    if (allottedHeight <= AvailableSize.Height) {
                        Items[i].ItemWidth = parentWidth;
                        Items[i].ItemHeight = (i != itemsCount - 1) ? childHeight - gap : childHeight;
                        Items[i].LeftPosition = xPos;
                        Items[i].TopPosition = allottedHeight + yPos + headerSize;
                        allottedHeight += childHeight;
                    }
                }
            }
        },

        /**
       * Calculates squarified item size
       * @private
       */
        _calculateSquarifiedItemSize: function (Items, xPos, yPos, width, height, Gap, headerHeight, legendHeight) {
            var totalweight = this._getTotalWeight(Items);
            var AvailableSize = { "Width": width, "Height": height-legendHeight };
            var headerSize = headerHeight < AvailableSize.Height ? headerHeight : 0;
            AvailableSize.Height = AvailableSize.Height - headerSize;
            for (var i = Items.length - 1; i >= 0; i--) {
                var item = Items[i];
                item["AreaByWeight"] = (AvailableSize.Height * AvailableSize.Width) * item.weight / totalweight;
                item.headerTopPosition = yPos;
            }
            var AvailableArea = { "X": xPos, "Y": yPos + headerSize, "Width": AvailableSize.Width, "Height": AvailableSize.Height };
            var OrderedItems = Items.sort(this._orderByAreaWight);
            var curX = 0, curY = 0;
            var j = 0;
            for (var i = 0; i < Items.length; i = j) {
                var firstTreemapItem = OrderedItems[i];
                weightObject = this._getGroupTotalWeight(firstTreemapItem, OrderedItems, AvailableArea, i);
                var GroupTotalWeight = weightObject.totalWeight;
                j = weightObject.index;
                var currentRect = {};
                var isHorizontal = (AvailableArea.Width > AvailableArea.Height) ? true : false;
                for (var k = i; k < j; k++) {
                    var item = OrderedItems[k];
                    var areaSum = GroupTotalWeight;
                    if (k == i) {
                        currentRect.X = AvailableArea.X;
                        currentRect.Y = AvailableArea.Y;
                        if (isHorizontal) {
                            currentRect.Width = areaSum / AvailableArea.Height;
                            currentRect.Height = AvailableArea.Height;
                            AvailableArea.X += currentRect.Width;
                            AvailableArea.Width = Math.max(0, AvailableArea.Width - currentRect.Width);
                        }
                        else {
                            currentRect.Width = AvailableArea.Width;
                            currentRect.Height = areaSum / AvailableArea.Width;
                            AvailableArea.Y += currentRect.Height;
                            AvailableArea.Height = Math.max(0, AvailableArea.Height - currentRect.Height);
                        }
                        curX = currentRect.X;
                        curY = currentRect.Y;
                    }
                    var rect = {};
                    if (OrderedItems.indexOf(item) != OrderedItems.length - 1) {
                        rect.X = 0;
                        rect.Y = 0;
                        rect.Width = (isHorizontal) ? currentRect.Width - Gap : item.AreaByWeight / currentRect.Height;
                        rect.Height = (isHorizontal) ? item.AreaByWeight / currentRect.Width : currentRect.Height - Gap;
                        if (j - k != 1) {
                            if (isHorizontal) {
                                rect.Height -= Gap;
                            }
                            else {
                                rect.Width -= Gap;
                            }
                        }
                    }
                    else {
                        rect.Width = (isHorizontal) ? currentRect.Width : item.AreaByWeight / currentRect.Height;
                        rect.Height = (isHorizontal) ? item.AreaByWeight / currentRect.Width : currentRect.Height;
                    }
                    item.ItemWidth = rect.Width;
                    item.ItemHeight = rect.Height;
                    item.LeftPosition = curX;
                    item.TopPosition = curY;
                    if (isHorizontal) {
                        curY += (j - k != 1) ? rect.Height + Gap : rect.Height;
                    }
                    else {
                        curX += (j - k != 1) ? rect.Width + Gap : rect.Width;
                    }
                }
            }
        },

        /**
      * Gets group total weight
      * @private
      */
        _getGroupTotalWeight: function (firstTreemapItem, OrderedItems, AvailableArea, j) {
            var GroupTotalWeight = 0;
            var GroupMaxAspectRatio = 0;
            for (; j < OrderedItems.length; j++) {
                var ShorterSideLength = this._getShortersideLength(AvailableArea.Width, AvailableArea.Height);
                var lastTreemapItem = OrderedItems[j];
                GroupTotalWeight += lastTreemapItem.AreaByWeight;
                var GroupWidth = GroupTotalWeight / ShorterSideLength;
                var firstitemheight = firstTreemapItem.AreaByWeight / GroupWidth;
                var lastitemheight = lastTreemapItem.AreaByWeight / GroupWidth;
                if (j == 0)
                    GroupMaxAspectRatio = this._aspectRatio(GroupWidth, ShorterSideLength);
                var TempAspectRatio = Math.max(this._aspectRatio(firstitemheight, GroupWidth), this._aspectRatio(lastitemheight, GroupWidth));
                if (GroupTotalWeight == lastTreemapItem.AreaByWeight || TempAspectRatio < GroupMaxAspectRatio) {
                    GroupMaxAspectRatio = TempAspectRatio;
                }
                else {
                    GroupTotalWeight -= lastTreemapItem.AreaByWeight;
                    GroupWidth = GroupTotalWeight / ShorterSideLength;
                    GroupMaxAspectRatio = Math.max(this._aspectRatio(firstitemheight, GroupWidth), this._aspectRatio(lastitemheight, GroupWidth));
                    break;
                }
            }
            return { totalWeight: GroupTotalWeight, index: j };
        },

        /**
      * Calculates aspect ratio
      * @private
      */
        _aspectRatio: function (x, y) {
            return (x > y) ? (x / y) : (y / x);
        },

        /**
     * Calculates shorter side length
     * @private
     */
        _getShortersideLength: function (width, height) {
            return width > height ? height : width;
        },

        /**
     * Calculates total weight
     * @private
     */

        _getTotalWeight: function (Items) {
            var total = 0;
            for (var i = 0; i < Items.length; i++) {
                total += parseFloat(Items[i].weight);
            }
            return total;

        },

        /**
     * Gets group item
     * @private
     */
        _getGroupitem: function (path, dataSource, headerHeight) {
            var obj = [];            
            if (dataSource != null && this.weightValuePath() != null) {                
                    for (var i in dataSource) {
                        var item = dataSource[i];
                        if (item.hasOwnProperty(path)) {
                            var itemValue = this._reflection(item, path);
                            if ($.inArray(itemValue, obj) == -1) {
                                obj.push(itemValue);
                            }
                        }
                    }                
                var objCollection = [];
                for (var i = 0; i < obj.length; i++) {
                    var Coll = {};
                    var groupObj = [];
                    var groupId = obj[i];
                    var colorWeight = 0;
                    var weight = 0;
                    var count = 0;
                    for (var j = 0; j < dataSource.length;j++) {
                        var item = dataSource[j];
                        var itemValue = this._reflection(item, path);
                        if (itemValue == groupId) {
                            var weightValue = this._reflection(item, this.weightValuePath());
                            var colorWeightValue = this._reflection(item, this.colorValuePath());
                            groupObj.push(item);
                            count++;
                            if (weightValue != null) {
                                weight += parseFloat(weightValue);
                            }
                            if (colorWeightValue != null) {
                                colorWeight += parseFloat(colorWeightValue);
                            }
                        }
                    }
                    
                    Coll["header"] = groupId;
                    Coll["data"] = groupObj;
                    Coll["weight"] = weight;
                    Coll["colorWeight"] = colorWeight;
                    Coll["headerHeight"] = headerHeight;
                    if (weight > 0) {
                        var newTreemapItem = new treeMapItem(Coll);
                        objCollection.push(newTreemapItem);
                    }
                }
                return objCollection;
            }
            else { return null; }
        },

     /**
     * Gets top group item
     * @private
     */
        _getTopGroupitem: function (path, dataSource) {            
            if (path == null) path = this.model.leafItemSettings.labelPath;
            if (path == null) path = this.weightValuePath();
            var obj = [];
            var Coll = {};
            var weight = 0, colorWeight = 0;
            var groupId="";
            var innerobjCollection = [];
            var itemColl = [];
            for (var j = 0; j < dataSource.length; j++) {
                var item = dataSource[j];
                var itemValue = this._reflection(item, path);
                var innerColl={};
                var weightValue = this._reflection(item, this.weightValuePath());
                var colorWeightValue = this._reflection(item, this.colorValuePath());      
                if (weightValue != null) {
                    weight += parseFloat(weightValue);
                }
                if (colorWeightValue != null) {
                    colorWeight += parseFloat(colorWeightValue);
                }
                itemColl.push(item);
                innerColl["weight"] = weightValue;
                innerColl["data"] = item;                
                innerColl["header"] = itemValue;
                innerColl["colorWeight"] = colorWeightValue;                                       
                var newinnerTreemapItem = new treeMapItem(innerColl);
                innerobjCollection.push(newinnerTreemapItem);
            }        
            Coll["header"] = groupId;
            Coll["data"] = itemColl;
            Coll["weight"] = weight;
            Coll["innerItem"] = innerobjCollection;
            Coll["colorWeight"] = colorWeight;                                   
            var treemapColl = [];
            var treeitem = new treeMapItem(Coll);
            treemapColl.push(treeitem);
            return  treemapColl;
        },            
            
        

        /**
        * Gets property from object
        * @private
        */
        _reflection: function (Source, Path) {
            var ShapeValues = Source;
            if (Path != null && Source != null) {
                var parts = Path.split(".");
                var i = 0;
                for (; i < parts.length; i++) {
                    var hasProperty = ShapeValues.hasOwnProperty(parts[i]);
                    if (hasProperty) {
                        $.each(ShapeValues, function (prop, propval) {
                            if (prop == parts[i]) {
                                ShapeValues = propval;
                                return false;
                            }
                        });
                    }
                }
                return ShapeValues;
            }
            else {
                return null;
            }

        }

    });
    /**
    * Hold the Level settings of TreeMap
    *  @memberof ejTreeMap
    * @member
    * @instance
    */
    var treeMapLevel = function () {

        /** 
        * specifies the group background
			 * @default 'white'
             * @type {string} 
             * @example  
             * // Set the groupBackground during initialization. 			
             * 	$("#container").ejTreeMap({levels: [{ groupBackground:"white" }]})
             * @example 
             * //Get or set the groupBackground after initialization:<br>
             *   //Gets the groupBackground from map.
             *   var property =$("#container").data("ejTreeMap").model.levels[levelIndex].groupBackground;
             *   //Sets the groupBackground to map.
             *   $("#container").data("ejTreeMap").model.levels[levelIndex].groupBackground  = "white";
             * @alias ejTreeMap#treeMapLevel->groupBackground
             */
        this.groupBackground = 'white';

            /** 
            * Specifies the group border color for tree map level.
			 * @default '#58585B'
             * @type {string} 
             * @example  
             * // Set the groupBorderColor during initialization. 			
             * 	$("#container").ejTreeMap({levels: [{ groupBorderColor:"#58585B" }]})
             * @example 
             * //Get or set the groupBorderColor after initialization:<br>
             *   //Gets the groupBorderColor from map.
             *   var property =$("#container").data("ejTreeMap").model.levels[levelIndex].groupBorderColor;
             *   //Sets the groupBorderColor to map.
             *   $("#container").data("ejTreeMap").model.levels[levelIndex].groupBorderColor  = "#58585B";
             * @alias ejTreeMap#treeMapLevel->groupBorderColor
             */
        this.groupBorderColor = '#58585B';

        /** 
        * Specifies the group border thickness for tree map level.
			 * @default 1
             * @type {number} 
             * @example  
             * // Set the groupBorderThickness during initialization. 			
             * 	$("#container").ejTreeMap({levels: [{ groupBorderThickness:1 }]})
             * @example 
             * //Get or set the groupBorderThickness after initialization:<br>
             *   //Gets the groupBorderThickness from map.
             *   var property =$("#container").data("ejTreeMap").model.levels[levelIndex].groupBorderThickness;
             *   //Sets the groupBorderThickness to map.
             *   $("#container").data("ejTreeMap").model.levels[levelIndex].groupBorderThickness  = 1;
             * @alias ejTreeMap#treeMapLevel->groupBorderThickness
             */
        this.groupBorderThickness = 1;

/** 
        * Specifies the group padding for tree map level.
			 * @default 4
             * @type {number} 
             * @example  
             * // Set the groupPadding during initialization. 			
             * 	$("#container").ejTreeMap({levels: [{ groupPadding:4 }]})
             * @example 
             * //Get or set the groupPadding after initialization:<br>
             *   //Gets the groupPadding from map.
             *   var property =$("#container").data("ejTreeMap").model.levels[levelIndex].groupPadding;
             *   //Sets the groupPadding to map.
             *   $("#container").data("ejTreeMap").model.levels[levelIndex].groupPadding  = 4;
             * @alias ejTreeMap#treeMapLevel->groupPadding
             */
        this.groupPadding = 4;

        /** 
        * Specifies the group path for tree map level.
             * @type {string} 
             * @example  
             * // Set the groupPath during initialization. 			
             * 	$("#container").ejTreeMap({levels: [{ groupPath:"pathName" }]})
             * @example 
             * //Get or set the groupPath after initialization:<br>
             *   //Gets the groupPath from map.
             *   var property =$("#container").data("ejTreeMap").model.levels[levelIndex].groupPath;
             *   //Sets the groupPath to map.
             *   $("#container").data("ejTreeMap").model.levels[levelIndex].groupPath  = "pathName";
             * @alias ejTreeMap#treeMapLevel->groupPath
             */
        this.groupPath = null;

        /**
        * Specifies the group gap for tree map level.
			 * @default 1
             * @type {number} 
             * @example  
             * // Set the groupGap during initialization. 			
             * 	$("#container").ejTreeMap({levels: [{ groupGap:1 }]})
             * @example 
             * //Get or set the groupGap after initialization:<br>
             *   //Gets the groupGap from map.
             *   var property =$("#container").data("ejTreeMap").model.levels[levelIndex].groupGap;
             *   //Sets the groupGap to map.
             *   $("#container").data("ejTreeMap").model.levels[levelIndex].groupGap  = 1;
             * @alias ejTreeMap#treeMapLevel->groupGap
             */
        this.groupGap = 1;

        /**
        * Specifies the header height for tree map level.
			 * @default 0
             * @type {number} 
             * @example  
             * // Set the headerHeight during initialization. 			
             * 	$("#container").ejTreeMap({levels: [{ headerHeight:20 }]})
             * @example 
             * //Get or set the headerHeight after initialization:<br>
             *   //Gets the headerHeight from map.
             *   var property =$("#container").data("ejTreeMap").model.levels[levelIndex].headerHeight;
             *   //Sets the headerHeight to map.
             *   $("#container").data("ejTreeMap").model.levels[levelIndex].headerHeight  = 1;
             * @alias ejTreeMap#treeMapLevel->headerHeight
             */
        this.headerHeight = 20;

        /** 
        * Shows or hides the header for tree map level.
            * @default false
            * @type {bool} 
            * @example  
            * // Set the shoeHeader during initialization. 			
            * 	$("#container").ejTreeMap({levels: [{ showHeader:false }]})
            * @example 
            * //Get or set the showHeader after initialization:<br>
            *   //Gets the showHeader from treemap.
            *   var property =$("#container").data("ejTreeMap").model.levels[levelIndex].showHeader;
            *   //Sets the headerHeight to map.
            *   $("#container").data("ejTreeMap").model.levels[levelIndex].showHeader  = true;
            * @alias ejTreeMap#treeMapLevel->showHeader
            */
        this.showHeader = true;

        /**
        * Shows or hides the labels for tree map level.
             * @default false
             * @type {boolean} 
             * @example  
             * // Set the showLabels during initialization. 			
             * 	$("#container").ejTreeMap({levels: [{ showLabels:false }]})
             * @example 
             * //Get or set the showLabels after initialization:<br>
             *   //Gets the showLabels from map.
             *   var property =$("#container").data("ejTreeMap").model.levels[levelIndex].showLabels;
             *   //Sets the showLabels to map.
             *   $("#container").data("ejTreeMap").model.levels[levelIndex].showLabels  = false;
             * @alias ejTreeMap#treeMapLevel->showLabels
             */
        this.showLabels = false;

        /** 
        * Specifies the header template for tree map level.
         * @default null
             * @type {string} 
             * @example  
             * // Set the headerTemplate during initialization. 			
             * 	$("#container").ejTreeMap({levels: [{ headerTemplate:"template" }]})
             * @example 
             * //Get or set the headerTemplate after initialization:<br>
             *   //Gets the headerTemplate from map.
             *   var property =$("#container").data("ejTreeMap").model.levels[levelIndex].headerTemplate;
             *   //Sets the headerTemplate to map.
             *   $("#container").data("ejTreeMap").model.levels[levelIndex].headerTemplate  = "template";
             * @alias ejTreeMap#treeMapLevel->headerTemplate
             */
        this.headerTemplate = null;
        /**
        * Specifies the label template for tree map level.
        * @default null
             * @type {string} 
             * @example  
             * // Set the labelTemplate during initialization. 			
             * 	$("#container").ejTreeMap({levels: [{ labelTemplate:"template" }]})
             * @example 
             * //Get or set the labelTemplate after initialization:<br>
             *   //Gets the labelTemplate from map.
             *   var property =$("#container").data("ejTreeMap").model.levels[levelIndex].labelTemplate;
             *   //Sets the labelTemplate to map.
             *   $("#container").data("ejTreeMap").model.levels[levelIndex].labelTemplate  = "template";
             * @alias ejTreeMap#treeMapLevel->labelTemplate
             */
        this.labelTemplate = null;
        this.treeMapItems = [];
    };

    treeMapLevel.prototype = {

    };

    var treeMapItem = function (params) {
        this.weight = params.weight;
        this.colorWeight = params.colorWeight;
        this.Data = params.data;
        this.headerHeight = params.headerHeight;
        this.header = params.header;
        this.label = params.header;
        this.headerLeftPosition = 0;
        this.headerTopPosition = 0;
        this.innerItems = params.innerItem;
        this.headerWidth = 0;
        this.headerTemplate = null;

    };

    treeMapItem.prototype = {
        /**
        * Generates color mapping for treemap items
        * @private
        */
        _generateColorMappings: function (colorMappings) {
            if (colorMappings.rangeColorMapping.length>0) {
                return this._getRangeBrushColor(colorMappings.rangeColorMapping);
            }
            if (colorMappings.uniColorMapping.color != null) {
                return this._getUniColor(colorMappings.uniColorMapping);
            }
        },

        /**
        * Get unicolor for treemap items
        * @private
        */
        _getUniColor: function (uniColorMapping) {

            return uniColorMapping.color;
        },

        /**
        * Get range brush color for treemap items
        * @private
        */
        _getRangeBrushColor: function (rangeColorMapping) {
            for (var j = 0; j < rangeColorMapping.length; j++) {
                var rangeBrush = rangeColorMapping[j];
                if (this.colorWeight >= rangeBrush.from && this.colorWeight <= rangeBrush.to) {
                    return rangeBrush.color;
                }
            }
        }

    };
	
	/**
    * Enum for TreeMap items layout mode
    * @enum {string}
    * @global 
    */
	ej.datavisualization.TreeMap.ItemsLayoutMode = {
			Squarified: "squarified",
			SliceAndDiceHorizontal: "sliceanddicehorizontal",
			SliceAndDiceVertical: "sliceanddicevertical",
			SliceAndDiceAuto: "sliceanddiceauto"
	};  
	
})(jQuery, Syncfusion);
;