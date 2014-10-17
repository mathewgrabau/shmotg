/*!
*  filename: ej.map.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html Map elements
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
    * @class ejMap
    * @requires jQuery
    * @requires ej.datavisualization.Map
    * @requires jsrender
    * @requires properties
    * @classdesc The map can be easily configured to the DOM element, such as div and can be created with a highly customized look and feel.
    * @example 
    * &lt;div id="container"&gt; <br> 
    * &lt;script&gt;
    * // Create Map
    * $('#container').ejMap(); 	
    * &lt;/script&gt; <br>  
    * &lt;/div&gt;
    */
    
    ej.widget({ "ejMap": "ej.datavisualization.Map" }, {

        validTags: ["div"],
        _initPrivateProperties: function () {
            this._rootgroup = null;
            this._bubblegroup = null;           
            this._scale = 1;
            this._prevDistance = 0;
            this._tileTranslatePoint = { x: 0, y: 0 };
            this._translatePoint = { x: 0, y: 0 };
            this._prevPoint = null;
            this._Tiles = [];
            this._prevScale = 0;
            this._tileDiv = null;
            this._containerWidth = 500;
            this._containerHeight = 400;
            this._baseTranslatePoint = { x: 0, y: 0 };
            this._isDragging = false;           
            this._prevLevel = 1;
            this._browser = null;
            this._baseScale = 0;
            this._mapBounds = null;
            this._svgns = "http://www.w3.org/2000/svg";
            this._ispanning = false;
            this._dragStartX = 0;
            this._isNavigationPressed = false;
			this._iskeyboardKeysPressed = false;
            this._isPolygonSelected = false;
            this._dragStartY = 0;
            this._width = 500;
            this._height = 500;
            this._svgDocument = null;
            this._tooltipElement = null;
            this._templateDiv = null;
            this._mapContainer = null;
            this._isSVG = true;
            this._VMLPathFractionCount = 0;
            this._sliderControl = null; 
            this._isTileMap=false;
            this._isRendered = false;
            this._urlTemplate = null;
            this._polylineCount = 0;
            this._pointscount = 0;
            this._isPinching = false;
            this._groupSize = null;			
			this._groupBorder = { x: 0, y: 0 };
        },


        defaults: {
            /**		
			* Specifies the background color for map
            * @default "white"
			* @type {string}
			* @example 
            * //To set background API value during initialization 
            *   $("#container").ejMap({background:'white'});
            * @example 
			* //Get or set the background API, after initialization:<br>
			*	//Gets the background value 
            *   var property = $("#container").data("ejMap").model.background;<br>
            *	//Sets the background value 
			*	$("#container").data("ejMap").model.background="transparent";
			* @memberof ejMap
			* @instance
            */
            background: "white",


            zoomSettings:{
                /**		
                * Specifies the minimum zoomSettings level of the map
                * @default 1
                * @type {number}
                * @example 
                * //To set minValue API value during initialization 
                *   $("#container").ejMap({zoomSettings:{minValue:1}});
                * @example 
                * //Get or set the minValue API, after initialization:<br>
                *	//Gets the minValue value 
                * 	var property = $("#container").data("ejMap").model.zoomSettings.minValue;<br>
                *	//Sets the minValue value 
                *	$("#container").data("ejMap").model.zoomSettings.minValue= 1;
                * @memberof ejMap
                * @instance
                */
                minValue: 1,

                /**		
                * Specifies the maximum zoom level of the map
                * @default 100
                * @type {number}
                * @example 
                * //To set maxValue API value during initialization 
                *   $("#container").ejMap({zoomSettings:{maxValue:100}});
                * @example 
                * //Get or set the maxValue API, after initialization:<br>
                *	//Gets the maxValue value 
                * 	var property = $("#container").data("ejMap").model.zoomSettings.maxValue;<br>
                *	//Sets the maxValue value 
                *	$("#container").data("ejMap").model.zoomSettings.maxValue= 100;
                * @memberof ejMap
                * @instance
                */
                maxValue: 100,

                /**		
                * Specifies the zoom factor for map zoom value.
                * @default 1
                * @type {number}
                * @example 
                * //To set zoomFactor API value during initialization 
                *   $("#container").ejMap({zoomSettings:{factor:1}});
                * @example 
                * //Get or set the zoomFactor API, after initialization:<br>
                *	//Gets the zoomFactor value 
                * 	var property = $("#container").data("ejMap").model.zoomSettings.factor;<br>
                *	//Sets the zoomFactor value 
                *	$("#container").data("ejMap").model.zoomSettings.factor= 1;
                * @memberof ejMap
                * @instance
                */
                factor: 1,

                /**		
                * Specifies the zoom level value for which map to be zoomed
                * @default 1
                * @type {number}
                * @example 
                * //To set zoomLevel API value during initialization 
                *   $("#container").ejMap({zoomSettings:{level:1}});
                * @example 
                * //Get or set the zoomLevel API, after initialization:<br>
                *	//Gets the zoomLevel value 
                * 	var property = $("#container").data("ejMap").model.zoomSettings.level;<br>
                *	//Sets the zoomLevel value 
                *	$("#container").data("ejMap").model.zoomSettings.level= 1;
                * @memberof ejMap
                * @instance
                */
                level: 1,

                /**		
            * Enables or Disables the zoom on selecting the map shape
            * @default false
            * @type {boolean}
            * @example 
            * //To set enableZoomOnSelection API value during initialization 
            * 	$("#container").ejMap({zoomSettings:{enableZoomOnSelection:true}});	
            * @example 
            * //Get or set the enableZoomOnSelection API, after initialization:<br>
            *	//Gets the enableZoomOnSelection value 
            *	var property = $("#container").data("ejMap").model.zoomSettings.enableZoomOnSelection;<br>		
            *	//Sets the enableZoomOnSelection value 
            *	$("#container").data("ejMap").model.zoomSettings.enableZoomOnSelection=true }); 
             * @memberof ejMap
            * @instance
            */
             enableZoomOnSelection: false,

                /**		
            * Enables or Disables the zooming of map
            * @default true
            * @type {boolean}
            * @example 
            * //To set enableZoom API value during initialization 
            * 	$("#container").ejMap({enableZoom:true});	
            * @example 
            * //Get or set the enableZoom API, after initialization:<br>
            *	//Gets the enableZoom value 
            *	var property = $("#container").data("ejMap").model.zoomSettings.enableZoom;<br>		
            *	//Sets the enableZoom value 
            *	$("#container").data("ejMap").model.zoomSettings.enableZoom=true }); 
            * @memberof ejMap
            * @instance
            */
                enableZoom: true,

            },

            /**		
            * Specify the center position where map should be displayed
            * @default [0,0]
            * @type {object} 
            * @example  
            * // Set the centerPosition during initialization. 			
            * 	 $("#container").ejMap({centerPosition: [38.5000, -98]});
            * @example 
            * //Get or set the centerPosition after initialization:<br>
            *   //Gets the centerPosition from map.
            *   var property =$("#container").data("ejMap").model.centerPosition;
            *   //Sets the centerPosition to map.
            *   $("#container").data("ejMap").model.centerPosition = [38.5000, -98];
            * @memberof ejMap
            * @instance
            */
            centerPosition: [0, 0],

            /**		
			 * Determines whether map need to resize when container is resized 
			 * @default true
			 * @type {boolean}
			 * @example 
			 * //To set enableResize API value during initialization 
			 * 	$("#container").ejMap({enableResize:true});	
			 * @example 
			 * //Get or set the enableResize API, after initialization:<br>
			 *	//Gets the enableResize value 
			 *	var property = $("#container").data("ejMap").model.enableResize;<br>		
			 *	//Sets the enableResize value 
			 *	$("#container").data("ejMap").model.enableResize= true }); 
			  * @memberof ejMap
			 * @instance
			 */
            enableResize: true,

            /**		
			 * Enables or Disables the map animation
			 * @default false
			 * @type {boolean}
			 * @example 
			 * //To set enableAnimation API value during initialization 
			 * 	$("#container").ejMap({enableAnimation:true});	
			 * @example 
			 * //Get or set the enableAnimation API, after initialization:<br>
			 *	//Gets the enableAnimation value 
			 *	var property = $("#container").data("ejMap").model.enableAnimation;<br>		
			 *	//Sets the enableAnimation value 
			 *	$("#container").data("ejMap").model.enableAnimation=true }); 
			  * @memberof ejMap
			 * @instance
			 */
            enableAnimation: false,           

            /**		
			* Enables or Disables the navigation control for map to perform zooming and panning on map shapes.
            * @default null 
			* @type {object}
			* @example 
            * //To set navigationControl during initialization 
            *   $("#container").ejMap(navigationControl:{enableNavigation:true,orientation:'vertical',absolutePosition:{x:5,y:20}});
            * @example 
			* //Get or set the navigationControl, after initialization:<br>
			*	//Gets the navigationControl  
            * 	var property = $("#container").data("ejMap").model.navigationControl;<br>
            *	//Sets the navigationControl  
			*	$("#container").data("ejMap").model.navigationControl={enableNavigation:true,orientation:'vertical',absolutePosition:{x:5,y:20}}); 
			* @memberof ejMap
			* @instance
            */
            navigationControl: null,

            /**		
			 * Enables or Disables the animation for layer change in map
			 * @default false
			 * @type {boolean}
			 * @example 
			 * //To set enableLayerChangeAnimation API value during initialization 
			 * 	$("#container").ejMap({enableLayerChangeAnimation:true});	
			 * @example 
			 * //Get or set the enableLayerChangeAnimation API, after initialization:<br>
			 *	//Gets the enableLayerChangeAnimation value 
			 *	var property = $("#container").data("ejMap").model.enableLayerChangeAnimation;<br>		
			 *	//Sets the enableLayerChangeAnimation value 
			 *	$("#container").data("ejMap").model.enableLayerChangeAnimation=false }); 
			 * @memberof ejMap
			 * @instance
			 */
            enableLayerChangeAnimation: false,

             /**		
			 * Enables or Disables the map panning
			 * @default true
			 * @type {boolean}
			 * @example 
			 * //To set enablePan API value during initialization 
			 * 	$("#container").ejMap({enablePan:true});	
			 * @example 
			 * //Get or set the enablePan API, after initialization:<br>
			 *	//Gets the enablePan value 
			 *	var property = $("#container").data("ejMap").model.enablePan;<br>		
			 *	//Sets the enablePan value 
			 *	$("#container").data("ejMap").model.enablePan=true }); 
			 * @memberof ejMap
			 * @instance
			 */
            enablePan: true,

           
            /**		
			* Specifies the base map-index of the map to determine the shapelayer to be displayed
            * @default 0 
			* @type {number}
			* @example 
            * //To set baseMapIndex API value during initialization 
            *   $("#container").ejMap({baseMapIndex:0});
            * @example 
			* //Get or set the baseMapIndex API, after initialization:<br>
			*	//Gets the baseMapIndex value 
            * 	var property = $("#container").data("ejMap").model.baseMapIndex;<br>
            *	//Sets the baseMapIndex value 
			*	$("#container").data("ejMap").model.baseMapIndex= 0;
			* @memberof ejMap
			* @instance
            */
            baseMapIndex: 0,

            /**     
            * Triggered on selecting the map shapes.
            * @event
            * @name ejMap#shapeSelected	            
            * @param {object} originalEvent.data Returns selected shape object.
            * @example 
            * //shapeSelected event for map
            * $("#container").ejMap({
            *    shapeSelected: function (event) {}
            * });
            * @memberof ejMap
            * @instance
            */
            shapeSelected: "",

            /**     
            * Triggered on selecting the map markers.
            * @event
            * @name ejMap#markerSelected              
            * @param {object} originalEvent.data Returns marker object.
            * @example 
            * //markerSelected event for map
            * $("#container").ejMap({
            *    markerSelected: function (event) {}
            * });
            * @memberof ejMap
            * @instance
            */
            markerSelected: "",

            /**     
            * Triggered when map is zoomed-in.
            * @event
            * @name ejMap#zoomedIn	
            * @param {Object} originalEvent Event parameters from map               
            * @param {object} zoomLevel Returns zoom level value for which the map is zoomed.
            * @example 
            * //zoomedIn event for map
            * $("#container").ejMap({
            *    zoomedIn: function (event) {}
            * });
            * @memberof ejMap
            * @instance
            */
            zoomedIn: "",

            /**     
            * Triggers once map render completed.
            * @event
            * @name ejMap#onRenderComplete	
            * @param {Object} originalEvent Event parameters from map  
            * @example 
            * //onRenderComplete event for map
            * $("#container").ejMap({
            *    onRenderComplete: function () {}
            * });
            * @memberof ejMap
            * @instance
            */
            onRenderComplete: "",

            /**     
            * Triggers when map panning ends.
            * @event
            * @name ejMap#panned		
            * @param {Object} originalEvent Event parameters from map  
            * @example 
            * //panned event for map
            * $("#container").ejMap({
            *    panned: function (event) {}
            * });
            * @memberof ejMap
            * @instance
            */

            panned: "",
            /**     
            * Triggers when map is zoomed out.
            * @event
            * @name ejMap#zoomedOut	
            * @param {Object} originalEvent Event parameters from map               
            * @param {object} zoomLevel Returns zoom level value for which the map is zoomed.		
            * @example 
            * //zoomedOut event for map
            * $("#container").ejMap({
            *    zoomedOut: function () {}
            * });
            * @memberof ejMap
            * @instance
            */
            zoomedOut: "",

            /**     
            * Triggers while hovering the map shape.
            * @event
            * @name ejMap#mouseover 	              
            * @param {object} originalEvent.data Returns hovered map shape object.            
            * @example 
            * //mouseover  event for map
            * $("#container").ejMap({
            *    mouseover : function (event) {}
            * });
            * @memberof ejMap
            * @instance
            */
            mouseover : "",

            /**     
            * Triggers while leaving the hovered map shape
            * @event
            * @name ejMap#mouseleave 		            
            * @param {object} originalEvent.data Returns hovered map shape object. 
            * @example 
            * //mouseleave  event for map
            * $("#container").ejMap({
            *    mouseleave : function (event) {}
            * });
            * @memberof ejMap
            * @instance
            */
            mouseleave : "",

           
            // Layers Collection
            /**		
            * Hold the shapelayers to be displayed in map
            * @default []
            * @type {shapeLayer}              
            * @example  
            * // Set the layers during initialization. 			
            * 	$("#container").ejMap({layers: [{ layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: Africa }]})
            * @example 
            * //Get or set the layer after initialization:<br>
            *   //Gets the layer from map.
            *   var layer =$("#container").data("ejMap").model.layers[layerIndex];
            *   //Sets the layer to map.
            *   $("#container").data("ejMap").model.layers[layerIndex]  = { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: Africa };
            * @memberof ejMap
            * @instance
            */
            layers: []
        },

        observables: ["dataSource", "baseMapIndex"],
        enableZoom: ej.util.valueFunction("zoomSettings.enableZoom"),
        enableZoomOnSelection: ej.util.valueFunction("zoomSettings.enableZoomOnSelection"),
        zoomLevel: ej.util.valueFunction("zoomSettings.level"),
        minZoom: ej.util.valueFunction("zoomSettings.minValue"),
        zoomFactor: ej.util.valueFunction("zoomSettings.factor"),
        maxZoom: ej.util.valueFunction("zoomSettings.maxValue"),
        baseMapIndex: ej.util.valueFunction("baseMapIndex"),

        /**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            layers: "array"
        },

        /**
        * Destroy the map widget
        * @private
        */

        _destroy: function () {
            /// <summary>This function is  used to destroy the Map Object</summary>
            this._unWireEvents();
            if (_isSVG) {
                $(this.element).removeClass("e-map e-js").find("#svgDocument").remove();
            }
            else {
                $(this.element).removeClass("e-map e-js").find("#rootGroup").remove();
            }
        },

        /**
          * To configure the properties at runtime using SetModel		
          * @private
          */
        _setModel: function (options) {
            for (var prop in options) {
                switch (prop) {
                    case "zoomSettings.level":
                        if (this.enableZoom()) { 
                            
                            this.zoom(options[prop]);

                        }
                        break;
                    case "baseMapIndex":
                        this.baseMapIndex(options[prop]);
                        var map = this;
                        if (this.model.enableAnimation) {
                            this.model.enableLayerChangeAnimation = true;
                            $(this._mapContainer).animate({ opacity: 0 }, 500, function () {
                                map.refresh();
                            });

                        } else {
                            this.refresh();
                        }

                        break;
                    case "minZoom":
                        this.minZoom(options[prop]);
                        if (this.zoomLevel() < this.minZoom()) {                           
                            this.zoom(this.minZoom());
                        }
                        break;
                    case "maxZoom":
                        this.maxZoom(options[prop]);
                        if (this.zoomLevel() > this.maxZoom()) {                            
                            this.zoom(this.maxZoom());
                        }
                        break;
                    case "background":
                        this.model.background = options[prop];
                        $(this._mapContainer).css('background-image', this.model.background);
                }
            }
        },


        /**
        * Create the map widget
        * @private
        */
        _init: function () {
            var proxy = this;
            this._initPrivateProperties();
            $.each(this.model.layers, function (index) {
                proxy._layerInitialize(index);
            });
            this._mapContainer = this.element;
            $(this._mapContainer).css({ "overflow": "hidden" });
            var style = $('<style>.labelLegend {padding:3px;font-weight: normal;color:black;width:auto;height:20px;text-align:center;font-size: 14px;font-family:Segoe UI;}.labelLegend:hover{cursor:pointer;}</style>');
            $('html > head').append(style);
            this.refresh();
            this._trigger("onRenderComplete");
            this._isRendered = true;
            if (_isSVG) {
                $(this._svgDocument).pinchZoom(this._rootgroup, this);
            }
        },

        /**
      * Create layers for the map widget
      * @private
      */
        _layerInitialize: function (layerindex) {
            var proxy = this;
            if (this.model.layers[layerindex] != null) {
                $.each(this.model.layers, function (index, element) {
                    element = proxy._checkArrayObject(element, index);
                    var obj = new shapeLayer();
                    $.extend(obj, element);
                    $.extend(element, obj);
                    $.each(element.subLayers, function (subindex, subelement) {
                        subelement = proxy._checkArrayObject(subelement, subindex);
                        var subobj = new shapeLayer();
                        $.extend(subobj, subelement);
                        $.extend(subelement, subobj);
                    });
                });
            }
            else {

                this.layers[0] = new shapeLayer();

            }
        },

        /**
      * Merges the model values with default value
      * @private
      */
        _checkArrayObject: function (element, initialName) {
            var proxy = this;
            $.each(element, function (name, innerElement) {
                if (innerElement instanceof Array) {
                    proxy._checkArrayObject(innerElement, name);
                }
                else if (innerElement != null && typeof innerElement == "object") {
                    var allObjects = new shapeLayer();
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
        * Refresh the map with animation
        * @private
        */
        _refreshWithAnimation: function () {
            this.model.layers[this.baseMapIndex()]._setMapItemsPositionWithAnimation(this);
            for (var key = 0; key < this.model.layers[this.baseMapIndex()].subLayers.length; key++) {
                this.model.layers[this.baseMapIndex()].subLayers[key]._setMapItemsPositionWithAnimation(this);
            }
        },

        /**
        * Reduces the shape stoke while zooming
        * @private
        */
        _resizeShape: function () {
            this.model.layers[this.baseMapIndex()]._resizeShapes(this);
            for (var key = 0; key < this.model.layers[this.baseMapIndex()].subLayers.length; key++) {
                this.model.layers[this.baseMapIndex()].subLayers[key]._resizeShapes(this);
            }

        },

        /**
       * Refresh the shape   layers
       * @private
       */
        _refrshLayers: function () {
            this.model.layers[this.baseMapIndex()]._setMapItemsPosition(this);
            for (var key = 0; key < this.model.layers[this.baseMapIndex()].subLayers.length; key++) {
                this.model.layers[this.baseMapIndex()].subLayers[key]._setMapItemsPosition(this);
            }

        },

        /**
      * Pans the tile map
      * @private
      */
        _panTileMap: function (factorX, factorY, centerPosition) {
            
            var totalSize = Math.pow(2, this.zoomLevel()) * 256;
            this._tileTranslatePoint.x = (factorX / 2) - (totalSize / 2);
            this._tileTranslatePoint.y = (factorY / 2) - (totalSize / 2);
            var position = this._convertTileLatLongtoPoint(centerPosition[0],centerPosition[1]);
            this._tileTranslatePoint.x -= position.x - (factorX / 2);
            this._tileTranslatePoint.y -= position.y - (factorY / 2);

        },

        /**
     * Generates tile view map
     * @private
     */
        _generateTiles: function (zoomLevel) {
            var userLang = navigator.language || navigator.userLanguage;
            this.Tiles = [];
            var xcount, ycount;
            xcount = ycount = Math.pow(2, zoomLevel);
            var baseLayer = this.model.layers[this.baseMapIndex()];
            var endY = Math.min(ycount, ((-this._tileTranslatePoint.y + this._height) / 256) + 1);
            var endX = Math.min(xcount, ((-this._tileTranslatePoint.x + this._width) / 256) + 1);
            var startX = (-(this._tileTranslatePoint.x + 256) / 256);
            var startY = (-(this._tileTranslatePoint.y + 256) / 256);
            for (var i = Math.round(startX) ; i < Math.round(endX) ; i++) {
                for (var j = Math.round(startY) ; j < Math.round(endY) ; j++) {
                    var x = 256 * i + this._tileTranslatePoint.x;
                    var y = 256 * j + this._tileTranslatePoint.y;
                    if (x > -256 && x <= this._width && y > -256 && y < this._height) {
                        if (i >= 0 && j >= 0) {
                            var tile = new Tile(i, j);
                            tile.left = x;
                            tile.top = y;
                            if (baseLayer.layerType == ej.datavisualization.Map.LayerType.Bing) {
                                tile.src = this._getBingMap(tile, baseLayer.key, baseLayer.bingMapType, userLang);
                            } else {
                                tile.src = this._urlTemplate.replace("level", this.zoomLevel()).replace('tileX', tile.X).replace('tileY', tile.Y);
                            }
                            this.Tiles.push(tile);
                        }
                    }
                }
            }
            var proxTiles = $.extend(true, [], this.Tiles);
            for (var layerIndex = 0; layerIndex < this.model.layers[this.baseMapIndex()].subLayers.length;layerIndex++) {
                var layer = this.model.layers[this.baseMapIndex()].subLayers[layerIndex];
                if (layer.layerType == ej.datavisualization.Map.LayerType.OSM || layer.layerType == ej.datavisualization.Map.LayerType.Bing) {
                    for (var tileIndex = 0; tileIndex < proxTiles.length; tileIndex++) {
                        var baseTile = proxTiles[tileIndex];
                        var subtile = $.extend(true, {}, baseTile);
                        if (layer.layerType == ej.datavisualization.Map.LayerType.Bing) {
                            subtile.src = this._getBingMap(subtile, layer.key, layer.bingMapType, userLang);
                        } else {
                            subtile.src = layer.urlTemplate.replace("level", this.zoomLevel()).replace('tileX', baseTile.X).replace('tileY', baseTile.Y);
                        }
                        this.Tiles.push(subtile);
                    }

                }
            }
            this._arrangeTiles();
        },

        /**
        * Generates bing map
        * @private
        */
        _getBingMap:function(tile,key,type,lang) {
            var quadKey = "";
            for (var i = this.zoomLevel(); i > 0; i--)
            {
                var digit = 0;
                var mask = 1 << (i - 1);
                if ((tile.X & mask) != 0)
                {
                    digit++;
                }
                if ((tile.Y & mask) != 0)
                {
                    digit+=2;
                }
                quadKey = quadKey+""+digit;
            }
            var layerType;
            if (type == ej.datavisualization.Map.BingMapType.Aerial) {
                layerType = "A,G";
            }
            else if (type == ej.datavisualization.Map.BingMapType.AerialWithLabel) {
                layerType = "A,G,L";
            } else {
                layerType = "G,VE,BX,L,LA";
            }
            var imageUrl = "http://ak.dynamic.t2.tiles.virtualearth.net/comp/ch/" + quadKey + "?mkt=" + lang + "&ur=IN&it=" + layerType + "&shading=hill&og=45&n=z&Key=" + key;
            return imageUrl;
        },
        
       

        /**
        * Arrange map tiles
        * @private
        */
        _arrangeTiles: function (){        
            var pathTemplate = "<div><div style='position:absolute;left:{{:left}}px;top:{{:top}}px;height:{{:height}}px;width:{{:width}}px;'><img src={{:src}}></img></div></div>";
            var tmpl2 = $.templates(pathTemplate);
            var htmlString = tmpl2.render(this.Tiles);
            var first = this._mapContainer[0].children[0];            
            this._tileDiv.html(htmlString);            
        },

        /**
        * Generate shape path from data provided
        * @private
        */
        _generatePath: function () {
           
            var baseLayer = this.model.layers[this.baseMapIndex()];
            var pathCollection = '';
            this._polylineCount = 0;
            this._pointscount = 0;
            _isSVG = (window.SVGSVGElement) ? true : false;
            if (baseLayer.layerType == ej.datavisualization.Map.LayerType.Geometry) {
                if (baseLayer != undefined && baseLayer.shapeData != null) {
                    baseLayer._isBaseLayer = true;
                    this._isTileMap = false;
					this._scale = this.zoomLevel();
                    pathCollection = this._readShapeData(baseLayer);
                }
            }
            else {                
                this._isTileMap = true;
                this._scale =  Math.pow(2, this.zoomLevel() - 1);
            }
            for (var key = 0; key < baseLayer.subLayers.length; key++) {
                if (baseLayer.subLayers[key].layerType == ej.datavisualization.Map.LayerType.Geometry && baseLayer.subLayers[key].shapeData != null) {
                    baseLayer.subLayers[key]._isBaseLayer = false;
                    pathCollection += this._readShapeData(baseLayer.subLayers[key]);
                }
            }
            if (_isSVG) {
                var htmlstring = '<div style="position:relative;" id="tileDiv"/><svg xmlns="http://www.w3.org/2000/svg" style= "overflow:hidden;z-index:0;float:left;left:0,top:0"' +
                             'id="svgDocument"> <g id="rootGroup">' + pathCollection + '</g></svg>';
                this._mapContainer.html(htmlstring);               
                this._svgDocument = this.element.find("#svgDocument")[0];
                this._tileDiv = this.element.find("#tileDiv");
                $(this._svgDocument).css({ height: this._height, width: this._width });
            }
            else {
                document.createStyleSheet().addRule(".vml", "behavior:url(#default#VML);display:inline-block");
                document.namespaces.add('v', 'urn:schemas-microsoft-com:vml', "#default#VML");
                var vmlGroup = '<div id="tileDiv"/><v:group   id = "rootGroup" style="position:absolute; width:' + this._width + 'px;height:' + this._height + 'px;" coordorigin = "0 0" coordsize="' + this._width + ' ' + this._height + '">' + pathCollection + '</v:group>';
                this._mapContainer.html(vmlGroup);                
                this._tileDiv = this.element.find("#tileDiv");
                this._bubblegroup = this._createGroup(false,"bubbleGroup");               
                this._bubblegroup.style.position = "absolute";
                this.element.append(this._bubblegroup);
            }
            if (baseLayer.layerType == ej.datavisualization.Map.LayerType.OSM || baseLayer.layerType == ej.datavisualization.Map.LayerType.Bing) {
                this._urlTemplate = baseLayer.urlTemplate;
                this._panTileMap(this._width, this._height, this.model.centerPosition);
                this._generateTiles(this.zoomLevel());
				if(_isSVG)
				{
				  $(this._svgDocument).css("position","relative");
				}
            }
            if(_isSVG)
			{			
                $(this._mapContainer).css("position", "absolute"); 
			}			
            this._rootgroup = this.element.find("#rootGroup")[0];
        },

        /**
       * Calculate the BBox from JSON input
       * @private
       */
        _calculateBBox: function (polygonDatas, polylineDatas,pointData)
        {
            var minLatitude = maxLatitude = minLongitude = maxLongitude = 0;
            var isEntered = false;
            if (polygonDatas != null && polygonDatas.length > 0) {
                for (var i = 0; i < polygonDatas.length; i++) {
                    var currentData = polygonDatas[i];
                    if (currentData.geometry != null) {
                        coords = currentData.geometry.coordinates;
                    } else {
                        coords = currentData.coordinates;
                    }
                    var currentDataLength = coords.length;
                    for (var j = 0; j < currentDataLength; j++) {
                        var subData = '';
                        if (currentDataLength > 1) {
                            subData = coords[j][0];
                            if (subData.length <= 2) {
                                subData = coords[j];
                            }
                        } else {
                            subData = coords[j];
                        }
                        if (subData.length > 2) {
                            for (var k = 0; k < subData.length; k++) {
                                if (!isEntered) {
                                    minLatitude = maxLatitude = subData[k][1];
                                    minLongitude = maxLongitude = subData[k][0];
                                    isEntered = true;

                                } else {
                                    minLatitude = Math.min(minLatitude, subData[k][1]);
                                    maxLatitude = Math.max(maxLatitude, subData[k][1]);
                                    minLongitude = Math.min(minLongitude, subData[k][0]);
                                    maxLongitude = Math.max(maxLongitude, subData[k][0]);
                                }
                            }
                        } else {
                            if (!isEntered) {
                                minLatitude = maxLatitude = subData[1];
                                minLongitude = maxLongitude = subData[0];
                                isEntered = true;
                            } else {
                                minLatitude = Math.min(minLatitude, subData[1]);
                                maxLatitude = Math.max(maxLatitude, subData[1]);
                                minLongitude = Math.min(minLongitude, subData[0]);
                                maxLongitude = Math.max(maxLongitude, subData[0]);
                            }
                        }
                    }
                }
            }
            if (pointData!=null && pointData.length > 0) {
                for (var i = 0; i < pointData.length; i++) {
                    var currentData = pointData[i];
                    subData = currentData.geometry.coordinates;
                    if (!isEntered) {
                        minLatitude = maxLatitude = subData[1]; // (φ)
                        minLongitude = maxLongitude = subData[0];
                        isEntered = true;
                    } else {
                        minLatitude = Math.min(minLatitude, subData[1]);
                        maxLatitude = Math.max(maxLatitude, subData[1]);
                        minLongitude = Math.min(minLongitude, subData[0]);
                        maxLongitude = Math.max(maxLongitude, subData[0]);
                    }
                }
            }
            if (polylineDatas!=null && polylineDatas.length > 0) {
                for (var i = 0; i < polylineDatas.length; i++) {
                    var coordinates = polylineDatas[i].geometry.coordinates;
                    for (var k = 0; k < coordinates.length; k++) {
                        if (!isEntered) {
                            minLatitude = maxLatitude = coordinates[k][1]; // (φ)
                            minLongitude = maxLongitude = coordinates[k][0];
                            isEntered = true;
                        } else {
                            minLatitude = Math.min(minLatitude, coordinates[k][1]);
                            maxLatitude = Math.max(maxLatitude, coordinates[k][1]);
                            minLongitude = Math.min(minLongitude, coordinates[k][0]);
                            maxLongitude = Math.max(maxLongitude, coordinates[k][0]);
                        }
                    }
                }
            }
            return [[minLongitude, minLatitude], [maxLongitude, maxLatitude]];        
        },
        
        _readShapeData: function (layer) {
            var map = this;
            if (layer.shapeData != null) {
                if (typeof layer.shapeData == 'string') {
                    var dataManger =new ej.DataManager(layer.shapeData);
                    var query = ej.Query().from(layer);
                    dataManger.executeQuery(query).done(function (e) {
                        debugger 
                        if (e.result != null) {
                            return map._getPathCollection(e.result, layer);
                        }
                    });

                } else {
                 return this._getPathCollection(layer.shapeData, layer);
                }
                
            }
        },

        /**
        * Generates path collection from JSON input
        * @private
        */
        _getPathCollection:function(data,layer)
        {
            var shapePath = "";
            var type = "";
            var dataManager="";
            if (data.features != null) {
                dataManager = new ej.DataManager(data.features);
                type = "geometry.type";
                if (layer._isBaseLayer) {
                    this._mapBounds = data.bbox;
                }
            }
            else if (data.geometries != null) {
                dataManager = new ej.DataManager(data.geometries);
                type = "type";
                if (layer._isBaseLayer) {
                    if (data.bbox != null)
                        this._mapBounds = [[data.bbox[0], data.bbox[1]], [data.bbox[2], data.bbox[3]]];
                    }                
            }
			if(data.geometries!=null || data.features != null){
            var queryPolyLine = ej.Query().from(layer).where(type, ej.FilterOperators.equal, 'LineString');
            var queryPolygon = ej.Query().from(layer).where(type, ej.FilterOperators.equal, 'Polygon');
            var queryMulitiPolygon = ej.Query().from(layer).where(type, ej.FilterOperators.equal, 'MultiPolygon');
            var polylineDatas = dataManager.executeLocal(queryPolyLine);           
            var polygonDatas = dataManager.executeLocal(queryPolygon);
            var queryPoint = ej.Query().from(layer).where(type, ej.FilterOperators.equal, 'Point');
            var pointData = dataManager.executeLocal(queryPoint);
            var multiPolygonDatas = dataManager.executeLocal(queryMulitiPolygon);
            this._polylineCount = this._polylineCount + polylineDatas.length;
            this._pointscount = this._pointscount + pointData.length;
            $.merge(polygonDatas, multiPolygonDatas);
            if (this._mapBounds == null && layer._isBaseLayer) {
                this._mapBounds = this._calculateBBox(polygonDatas, polylineDatas, pointData);
            }
			layer._newBounds = [];                 
            var pointHtml = "";
            if (pointData.length > 0) {
                for (var i = 0; i < pointData.length; i++) {
                    var currentData = pointData[i];                   
                    var check = '';
                    subData = currentData.geometry.coordinates;
                    var data = [];
                    var data_clean = [];                   
                    data.push({
                        lat: parseFloat(subData[1]),
                        lng: parseFloat(subData[0])                        
                    });                    
                    var l = 0;

                    var point = data[0];
                    latitude = point.lat; // (φ)
                    longitude = point.lng;   // (λ)                   
                    var p = this._convertTileLatLongtoPointForShapes(latitude, longitude, this._mapBounds);
                    if (_isSVG) {
                        data_clean.push({ x: p.x, y: p.y, lat: point.lat, lng: point.lng });
                    }
                    else {
                        data_clean.push({ x: p.x - ((10 / this._scale)/2), y: p.y-((10 / this._scale) / 2), lat: point.lat, lng: point.lng });
                    }

                    if (_isSVG) {
                        pointHtml += '<circle cx="' + data_clean[0].x + '" cy="' + data_clean[0].y + '" r="' + 5 / this._scale + '" stroke="' + layer.shapeSettings.stroke + '" stroke-width="' + layer.shapeSettings.strokeThickness + '0" fill="' + layer.shapeSettings.fill + '" />';
                    }
                    else {
                        var pointHtmlString = '<v:oval display="block" fill="' + layer.shapeSettings.fill + '" style="position:absolute;top: ' + data_clean[0].y + 'px;left:' + data_clean[0].x + 'px;width:' + 10 / this._scale + 'px;height:' + 10 / this._scale + 'px;stroke-width:' + layer.shapeSettings.strokeThickness + 'px;"></v:oval>';
                        pointHtml += pointHtmlString;
                    }
                }

            }            
            if (polygonDatas.length > 0)
            {
                var minX, maxX, minY, maxY,flag=true;
                for (var i = 0; i < polygonDatas.length; i++) {
                    var currentData = polygonDatas[i];
                    var midCoordinate = 0;
                    var midCoordinateLength;
                    var coords;
                    if (currentData.geometry != null) {
                        coords = currentData.geometry.coordinates;
                    }
                    else {
                        coords = currentData.coordinates;
                    }                    
                    midCoordinateLength = coords[0][0].length;
                    var currentDataLength = coords.length;
                    if (currentDataLength > 1) {
                        var lst = coords;
                        for (var index = 0; index < lst.length; index++) {
                            if (midCoordinateLength < lst[index][0].length) {
                                midCoordinateLength = lst[index][0].length;
                                midCoordinate = index;
                            }
                        }
                    }
                    var path_code = '';
                    for (var j = 0; j < currentDataLength; j++) {
                        var subData = '';                       
                        if (currentDataLength > 1) {
                            subData = coords[j][0];
                            if (subData.length <=2) {
                                subData = coords[j];
                            }
                        }
                        else {
                            subData = coords[j];
                        }
                        var data = [];
                        var data_clean = [];
                        if (subData.length > 2) {
                            for (var k = 0; k < subData.length; k++) {
                                data.push({
                                    lat: parseFloat(subData[k][1]),
                                    lng: parseFloat(subData[k][0])
                                });
                            }
                        }
                        else {
                            data.push({
                                lat: parseFloat(subData[1]),
                                lng: parseFloat(subData[0])
                            });
                        }                       
                        for (var l = 0; l < data.length - 1|| (data.length==1 && l==0); l++) {
                            var point = data[l];
                            latitude = point.lat; // (φ)
                            longitude = point.lng;   // (λ                           
                            var boundingBox = this._mapBounds;
                            if (this._isTileMap||(longitude >= boundingBox[0][0] && longitude <= boundingBox[1][0] && latitude >= boundingBox[0][1] && latitude <= boundingBox[1][1])) {
                               
                                var p = this._convertTileLatLongtoPointForShapes(latitude, longitude, boundingBox);
                                if (flag) {
                                    minX = maxX = p.x;
                                    minY = maxY = p.y;
                                    flag = false;
                                }
                                else {
                                    minX = Math.min(minX, p.x);
                                    maxX = Math.max(maxX, p.x);
                                    minY = Math.min(minY, p.y);
                                    maxY = Math.max(maxY, p.y);
                                }                                
                                if (_isSVG) {
                                    data_clean.push({ x: p.x, y: p.y, lat: point.lat, lng: point.lng });
                                }
                                else {
                                    data_clean.push({ x: p.x, y: p.y, lat: point.lat, lng: point.lng });
                                }
                            }
                            
                        }
                        if (j == midCoordinate) {
                            layer._newBounds.push(this._findMidPointofPoylgon(data_clean));
                        }
                        
                        if (data_clean.length > 0) {
                            if (_isSVG) {
                                path_code += "M" + (data_clean[0].x) + "," + (data_clean[0].y);
                                for (m = 1; m < data_clean.length; m++) {
                                    path_code += "," + (data_clean[m].x) + "," + (data_clean[m].y);
                                }
                                path_code += "Z";
                            }
                            else {
                                path_code += "m" + parseInt(data_clean[0].x) + "," + parseInt(data_clean[0].y);
                                path_code += " l" + parseInt(data_clean[0].x) + "," + parseInt(data_clean[0].y);
                                for (m = 1; m < data_clean.length; m++) {
                                    path_code += "," + parseInt(data_clean[m].x) + "," + parseInt(data_clean[m].y);
                                }
                                path_code += " e";
                            }
                        }

                    }
                    if (path_code != "") {
                        if (_isSVG) {
                            shapePath += '<path class="mapShape" stroke=' + layer.shapeSettings.stroke +
                                        ' stroke-width=' + (layer.shapeSettings.strokeThickness / this._scale) +
                                         ' fill= ' + layer.shapeSettings.fill + ' d="' + path_code + '"  stroke-linejoin= round stroke-linecap= square></path>';
                        }
                        else {
                            shapePath += '<v:shape  style="width:' + this._width + 'px;height:' + this._height + 'px;"  coordsize="'
                                + this._width + ' ' + this._height + '" coordorigin="0 0" strokecolor=' + layer.shapeSettings.stroke +
                                           ' stroke-width=' + (layer.shapeSettings.strokeThickness / this._scale) + 'px"' +
                                            ' fillcolor= ' + layer.shapeSettings.fill + ' path="' + path_code + '"></v:shape>';
                        }
                    }
                    else {
                        polygonDatas.splice(i, 1);
                        i--;
                    }
                    
                }
                
                this._groupSize = { minX: minX, maxX: maxX, minY: minY, maxY: maxY };
                
            }
            
            if (polylineDatas.length > 0) {

                for (var i = 0; i < polylineDatas.length; i++) {
                    var coordinates = polylineDatas[i].geometry.coordinates;
                    var linedata = '';
                    for (var k = 0; k < coordinates.length; k++) {
                        var points = this._convertTileLatLongtoPointForShapes(coordinates[k][1], coordinates[k][0], this._mapBounds);
                        linedata += points.x + "," + points.y;
                        if (k != coordinates.length - 1)
                            linedata += ",";
                    }

                    if (_isSVG) {
                        shapePath += '<polyline stroke=' + layer.shapeSettings.stroke +
                                    ' stroke-width=' + (layer.shapeSettings.strokeThickness / this._scale) + ' fill="transparent" stroke-width="1" points="' + linedata + '" ></polyline>';

                    }
                    else {
                        shapePath += '<v:polyline coordsize="'+ this._width + ',' + this._height + '" coordorigin="0 0" strokecolor=' + layer.shapeSettings.stroke +
                                                               ' strokeweight=' + (layer.shapeSettings.strokeThickness / this._scale) + 'px"' +
                                                                ' fillcolor=' + layer.shapeSettings.fill + '  points="' + linedata + '"/>';


                    }
                }

            }           
            var lines = [].concat(polygonDatas, polylineDatas);
            layer._polygonData = $.merge(lines, pointData);
            return shapePath + pointHtml;
			}
			else{
			  layer._polygonData=[];
			    return null;
		   }
        },
        

        /**
         * Creates VML group
         * @private
         */
        _createGroup: function (isRoot,name) {
            
            var vmlGroup;
            vmlGroup = document.createElement('<v:group class='+name+'>');
            vmlGroup.style.width = this._width + 'px';
            vmlGroup.style.height = this._height + 'px';            
            vmlGroup.coordorigin = "0 0";
            vmlGroup.coordsize = this._width + ' ' + this._height;
            if (isRoot) {
                this._rootgroup = vmlGroup;
                vmlGroup.style.left = '20px';
                vmlGroup.style.top = '20px';
            }
            return vmlGroup;
        },

        /**
        * Generates palette colors for shape
        * @private
        */
        _generatePaletteColorsForShape: function (shape, shapelayer, palette, palettesettings) {

            if (palettesettings != null) {
                shapelayer.shapeSettings.highlightColor = palettesettings.highlightColor;
                shapelayer.shapeSettings.highlightStroke = palettesettings.highlightStroke;
                shapelayer.shapeSettings.highlightBorderWidth = palettesettings.highlightBorderWidth;
                shapelayer.shapeSettings.selectionColor = palettesettings.SelectionColor;
                shapelayer.shapeSettings.selectionStroke = palettesettings.SelectionStroke;
                shapelayer.shapeSettings.selectionStrokeWidth = palettesettings.SelectionStrokeWidth;
            }

            if (_isSVG) {
                shape.setAttribute("fill", palette[shapelayer._prevPaletteIndex]);
            }
            else {
                shape.fillcolor = palette[shapelayer._prevPaletteIndex];
            }
            shapelayer._prevPaletteIndex = shapelayer._prevPaletteIndex + 1;
            if (shapelayer._prevPaletteIndex > palette.length - 1)
                shapelayer._prevPaletteIndex = 0;
        },

        /**
        * Renders map layers
        * @private
        */
        _renderLayers: function (layer, pathCount) {
            layer._initializeLocalValues();          
            var proxyrootGroup = this._rootgroup;
            var proxySVG = this._svgDocument;
            var proxyControl = this;
            var shapelayer = layer;
            if (shapelayer.legendSettings != null && shapelayer.shapeSettings.colorMappings != null)
                 shapelayer._generateLegends(this);
            if (shapelayer.shapeSettings.colorMappings != null && shapelayer.shapeSettings.colorMappings.rangeColorMapping != null) {

                shapelayer.shapeSettings.colorMappings.rangeColorMapping.sort(this._orderByNameAscending);
            }
            if (shapelayer.bubbleSettings.colorMappings != null && shapelayer.bubbleSettings.colorMappings.rangeColorMapping != null) {
                shapelayer.bubbleSettings.colorMappings.rangeColorMapping.sort(this._orderByNameAscending);
            }
            var minValue = 0;
            var maxValue = 0;
            var sum = 0;
            if (shapelayer.dataSource != null && shapelayer.bubbleSettings != null) {
                if (shapelayer.bubbleSettings.colorValuePath  == null) {
                    shapelayer.bubbleSettings.colorValuePath  = shapelayer.bubbleSettings.valuePath;
                }
                for (var i = 0; i < shapelayer.dataSource.length; i++) {
                    var bubbledata = parseFloat(this._reflection(shapelayer.dataSource[i], shapelayer.bubbleSettings.valuePath));
                    if (i != 0) {
                        if (bubbledata > maxValue) {
                            maxValue = bubbledata;
                        } else if (bubbledata < minValue) {
                            minValue = bubbledata;
                        }
                    } else {
                        minValue = maxValue = bubbledata;
                    }
                }
            }

            this._generateTooltipForLayers(shapelayer);
            if (shapelayer.shapeData != null) {
                var shapesource = [];
                for (var key in shapelayer.dataSource) {
                    var shapeitem = shapelayer.dataSource[key];
                    var shapeItemValue = proxyControl._reflection(shapeitem, shapelayer.shapeDataPath);
                    shapesource.push(shapeItemValue);
                }
                for (var dataIndex = 0; dataIndex < shapelayer._polygonData.length; dataIndex++) {
                    var ValueObject = shapelayer._polygonData[dataIndex].properties;
                    var DBFValue = proxyControl._reflection(ValueObject, shapelayer.shapePropertyPath);
                    var shape = this._rootgroup.childNodes[dataIndex + pathCount];
                    var obj = {};
                    var bounds = shapelayer._newBounds[dataIndex];

                    if (shapelayer.shapeSettings.autoFill) {
                        switch (shapelayer.shapeSettings.colorPalette) {
                            case ej.datavisualization.Map.ColorPalette.Palette1:
                                this._generatePaletteColorsForShape(shape, shapelayer, shapelayer.colorPalettes.Palette1, shapelayer._colorPaletteSettings.Palette1);
                                break;
                            case ej.datavisualization.Map.ColorPalette.Palette2:
                                this._generatePaletteColorsForShape(shape, shapelayer, shapelayer.colorPalettes.Palette2, shapelayer._colorPaletteSettings.Palette2);
                                break;
                            case ej.datavisualization.Map.ColorPalette.Palette3:
                                this._generatePaletteColorsForShape(shape, shapelayer, shapelayer.colorPalettes.Palette3, shapelayer._colorPaletteSettings.Palette3);
                                break;
                            case ej.datavisualization.Map.ColorPalette.CustomPalette:
                                this._generatePaletteColorsForShape(shape, shapelayer, shapelayer.shapeSettings.customPalette, null);
                                break;
                        }
                    }

                    if (shapesource.indexOf(DBFValue) != -1) {
                        var item = shapelayer.dataSource[shapesource.indexOf(DBFValue)];
                        var ItemValue = DBFValue;
                        if (item != null) {
                            if (shape != null) {                              
                               
                                var id = ItemValue;
                            }
                                layer._bounds.push(bounds);
                                if (shapelayer.showMapItems) {
                                    var itemTemplateDiv = $("<div class='mapItems' style='display:block;position:absolute;pointer-events: none;'></div>");
                                    itemTemplateDiv[0].className = ItemValue;
                                    proxyControl._templateDiv.append(itemTemplateDiv);
                                    $(itemTemplateDiv).css({ "left": bounds.x, "top": bounds.y });
                                    var htmlString;
                                    if (shapelayer.mapItemsTemplate == null) {
                                        htmlString= $(' <div><label>{{:' + shapelayer.shapeSettings.valuePath + '}}</label></div>').render(item);;
                                    }
                                    else {
                                        htmlString = $("#" + shapelayer.mapItemsTemplate).render(item);
                                    }
                                    $(itemTemplateDiv).html(htmlString);
                                    layer._mapItems.push(itemTemplateDiv);
                                }                                   
                                                             
                                if (shapelayer.shapeSettings.colorMappings != null) {
                                    if (shapelayer.shapeSettings.colorValuePath  == null) {
                                        shapelayer.shapeSettings.colorValuePath  = shapelayer.shapeSettings.valuePath;
                                    }
                                    var shapeValue = proxyControl._reflection(item, shapelayer.shapeSettings.colorValuePath );
                                    if (shapeValue != null && !shapelayer.shapeSettings.autoFill) {
                                        if (((shapelayer.legendSettings != null && shapelayer.legendSettings.mode == ej.datavisualization.Map.LegendMode.Interactive) || shapelayer.shapeSettings.enableGradient) && shapelayer.shapeSettings.colorMappings.rangeColorMapping != null) {
                                            obj["legendrect"] = shapelayer._updateLegendRange(shapeValue, shapelayer, shape);
                                            var shapeColor = shapelayer.shapeSettings.fill;
                                            if (obj["legendrect"] != undefined) {
                                                shapeColor = obj["legendrect"].color;
                                            }
                                            if (_isSVG) {
                                                shape.setAttribute("fill", shapeColor);
                                            }
                                            else {
                                                shape.fillcolor = shapeColor;
                                            }
                                        } else {
                                            shapelayer._fillColors(shapeValue, shapelayer.shapeSettings.colorMappings, shape);
                                        }
                                    }
                                }
                                else if (!shapelayer.shapeSettings.autoFill) {
                                    if (_isSVG) {
                                        shape.setAttribute("fill", shapelayer.shapeSettings.fill);
                                    }
                                    else {
                                        shape.fillcolor = shapelayer.shapeSettings.fill;
                                        shape.strokecolor = shapelayer.shapeSettings.stroke;
                                    }
                                }
                            
                                if (shapelayer.bubbleSettings != null && shapelayer.bubbleSettings.valuePath != null) {
                                    if (_isSVG) {
                                        var circle = document.createElementNS(proxyControl._svgns, "circle");
                                    }
                                    else {
                                        var bubbleID = "bubble_" + id;
                                        var bubbleHtmlString = '<v:oval class="mapBubble" id=' + bubbleID + ' display="block" style="position:absolute;top: ' + 0 + 'px;left:' + 0 + 'px;width:100px;height:100px;stroke-width:' + 0 + 'px;"><v:fill opacity="0.9"/></v:oval>';
                                        this._bubblegroup.innerHTML = this._bubblegroup.innerHTML + bubbleHtmlString;
                                        var circle =document.getElementById("bubble_"+id);
                                    }

                                    var bubbleValue = proxyControl._reflection(item, shapelayer.bubbleSettings.valuePath);
                                    var bubblecolorValue = proxyControl._reflection(item, shapelayer.bubbleSettings.colorValuePath );
                                    if (shapelayer.bubbleSettings.colorMappings != null) {
                                        shapelayer._fillColors(bubblecolorValue, shapelayer.bubbleSettings.colorMappings, circle);
                                    }
                                    else {
                                        if (_isSVG) {
                                            circle.setAttribute("fill", shapelayer.bubbleSettings.color);
                                        }
                                        else {
                                            circle.strokecolor = shapelayer.bubbleSettings.color;
                                            circle.fillcolor = shapelayer.bubbleSettings.color;
                                        }
                                    }
                                    var radius = proxyControl._getRatioOfBubble(shapelayer.bubbleSettings.minValue, shapelayer.bubbleSettings.maxValue, bubbleValue, minValue, maxValue);
                                    if (_isSVG) {
                                        $(circle).attr({
                                            "cx": bounds.x, "cy": bounds.y,
                                            "fill-opacity": "0.9", "r": radius,"class":"mapBubble",
                                        });
                                        if (proxyControl.model.enableAnimation) {
                                            $(circle).css("display", "none");
                                        }
                                    }
                                    else {
                                        $(circle).css({
                                            "height":+2 * radius+"px",
                                            "width": +2 * radius + "px"
                                        });
                                    }
                                    if (shapelayer.bubbleSettings.showTooltip == true) {
                                        var tooltipTemplateDiv = $("<div class='bubbleToolTip'  style='position:absolute;display:none;z-index:9999'/>");
                                        var template_ID = null;
                                        if (shapelayer.bubbleSettings.tooltipTemplate != null) {
                                            template_ID = shapelayer.bubbleSettings.tooltipTemplate;
                                        } else {
                                            $(tooltipTemplateDiv).append('<div class="bubbleToolTip"  style="margin-left:10px;margin-top:-25px;"><div class="defaultToolTip"><p style="margin-top:-4px"><label  style="color:rgb(27, 20, 20);font-size:14px;font-weight:normal;font-family:Segoe UI">' + bubbleValue + '</label></p></div></div>');
                                        }
                                        $(circle).mouseenter({ htmlobj: tooltipTemplateDiv, templateID: template_ID, itemsrc: item }, proxyControl._bubbleEnterFunction);
                                        $(circle).mousemove({ htmlobj: tooltipTemplateDiv }, proxyControl._bubbleOverFunction);
                                        $(circle).mouseleave({ htmlobj: tooltipTemplateDiv }, proxyControl._bubbleleaveFunction);
                                    } else {
                                        $(circle).css("pointer-events", "none");
                                    }
                                    if (_isSVG) {
                                        proxySVG.appendChild(circle);
                                        layer._bubbles.push(circle);
                                    }
                                    else {
                                        layer._bubbles.push(circle);
                                    }
                                }
                                obj["data"] = item;
                        }
                    }
                    if (layer.labelSettings != null && layer.labelSettings.showLabels && layer.labelSettings.labelPath != null) {
                        var labelValue = proxyControl._reflection(ValueObject, layer.labelSettings.labelPath);
                        if (labelValue != null) {
                            if (bounds == null) {
                               //bounds = (shape);
                            }
                            var labelElement = $("<div class='labelStyle' style='font-family:Segoe UI;font-size:14px;white-space: nowrap;position:absolute;pointer-events:stroke;'></div>");
                            labelElement[0].innerHTML = labelValue;
                            this._templateDiv.append(labelElement);
                            $(labelElement).css({ "left": bounds.x, "top": bounds.y });
                            proxyControl._on($(labelElement), ej.eventType.mouseDown, { Param1: null, Param2: layer, Param3: shape }, proxyControl._polyClickFunction);
                            proxyControl._on($(labelElement), ej.eventType.mouseLeave, { Param1: layer,map:this }, proxyControl._polyLeaveFunction);
                            layer._labelCollection.push(labelElement);
                            layer._labelBounds.push(bounds);
                            layer._labelData.push(labelValue);

                        }
                    }
                    obj["shape"] = shape;
                    obj["shapeData"] = layer._polygonData[dataIndex];
                    if (shape != null) {
                        var shapefill = null; 
                        if (_isSVG) {
                            shapefill = shape.getAttribute("fill");
                            if (shapefill == "undefined")
                                shapefill = layer.shapeSettings.fill;
                            shape.setAttribute("nodeValue", shapefill);
                        }
                        else {
                            shapefill = shape.fillcolor.value;
                            if (shapefill == "undefined")
                                shapefill = layer.shapeSettings.fill;
                            shape.style.behavior = shapefill;
                        }
                    }
					if (proxyControl.enableZoomOnSelection()) {
                        $(shape).hover(function() {
                            $(this).css('cursor', 'pointer');
                        }, function() {
                            $(this).css('cursor', 'auto');
                        });
					}
					layer._mapShapes.push(obj);
					$(shape).mouseenter({ Param1: shapelayer, Param2: obj, map: proxyControl }, proxyControl._polyEnterFunction);
                    this._on($(shape), ej.eventType.mouseDown, { Param1: obj, Param2: shapelayer,Param3:shape }, proxyControl._polyClickFunction);
                    this._on($(shape), ej.eventType.mouseMove, { Param1: shapelayer, Param2: obj }, proxyControl._polyMoveFunction);
                    this._on($(shape), ej.eventType.mouseLeave, { Param1: shapelayer,Param2: obj,map:this }, proxyControl._polyLeaveFunction);
                    this._on($(shape), ej.eventType.mouseUp, { Param1: obj, Param2: shapelayer, Param3: shape }, proxyControl._polyUpFunction);
                    
                }
            }
        },


        /**
        * Calls the Zooms in and out method of the map
        * @private
        */
        _zooming: function (delta, e) {
            var position = this._getCurrentPoint(e);
            if (delta >= 120) {
                this._zoomingIn(position.x, position.y, e);
            }
            else {
                this._zoomingOut(position.x, position.y, e);
            }
        },

        /**
        * Calculate the zoom in functionality of map
        * @private
        */
        _zoomingIn: function (x, y, event) {
            var map = this;
            if (map.enableZoom() && map.zoomLevel() >= map.minZoom() && map.zoomLevel() <= map.maxZoom()) {
                var scal = map._scale;
                var position = { x: x, y: y };
                map._prevScale = scal;
                if (!this._isTileMap) {
                    map._prevPoint = { x: map._translatePoint.x, y: map._translatePoint.y };
                    map._translatePoint.x -= (map._width / map._scale - map._width / (map._scale + map.zoomFactor())) / (map._width / x);
                    map._translatePoint.y -= (map._height / map._scale - map._height / (map._scale + map.zoomFactor())) / (map._height / y);
                    map._scale = scal + map.zoomFactor();
                    map.zoomLevel(map.zoomLevel() + 1);
                }
                else {
                    this._tileZoom(map.zoomLevel() - 1, map.zoomLevel(), position);
                    var prevLevel = map.zoomLevel();
                    map.zoomLevel(map.zoomLevel() + 1);
                    this._generateTiles(this.zoomLevel());
                    map._translatePoint.x = (map._tileTranslatePoint.x - (0.5 * Math.pow(2, prevLevel))) / (Math.pow(2, prevLevel));
                    map._translatePoint.y = (map._tileTranslatePoint.y - (0.5 * Math.pow(2, prevLevel))) / (Math.pow(2, prevLevel));
                    map._scale = (Math.pow(2, prevLevel));
                }
                map._trigger("zoomedIn", { originalEvent: event, zoomLevel: map.zoomLevel() });
               map._applyTransform(map._scale, map._translatePoint);
               map._refrshLayers();
               map._resizeShape();                
                map._updateSliderValue();
            }
        },

        /**
        * Calculate the zoom out functionality of map
        * @private
        */
        _zoomingOut: function (x, y, event) {
            var map = this;
            if (this.enableZoom()) {               
                if (this.zoomLevel() > this.minZoom()) {
                    var scal = map._scale;
                    var position = { x: x, y: y };
                    map._prevScale = scal;
                    if (!this._isTileMap) {                       
                        map._prevPoint = { x: map._translatePoint.x, y: map._translatePoint.y };
                        map._translatePoint.x -= (map._width / map._scale - map._width / (map._scale - map.zoomFactor())) / (map._width / x);
                        map._translatePoint.y -= (map._height / map._scale - map._height / (map._scale - map.zoomFactor())) / (map._height / y);
                        map._scale = map._scale - map.zoomFactor();
                        map.zoomLevel(map.zoomLevel() - 1);
                    }
                    else {
                        this._tileZoom(map.zoomLevel() + 1, map.zoomLevel(), position);
                        var prevLevel = map.zoomLevel();
                        map.zoomLevel(map.zoomLevel() - 1);
                        this._generateTiles(this.zoomLevel());
                        map._translatePoint.x = (map._tileTranslatePoint.x - (0.5 * Math.pow(2, this.zoomLevel()-1))) / (Math.pow(2, this.zoomLevel()-1));
                        map._translatePoint.y = (map._tileTranslatePoint.y - (0.5 * Math.pow(2, this.zoomLevel()-1))) / (Math.pow(2, this.zoomLevel()-1));
                        map._scale = (Math.pow(2, this.zoomLevel()-1));
                    }                   
                    map._applyTransform(map._scale, map._translatePoint);
                    map._refrshLayers();
                    map._resizeShape();

                    map._updateSliderValue();
                }
                else {                   
                    this.zoom(this.minZoom(),false);
                }
                map._trigger("zoomedOut", { originalEvent: event, zoomLevel: map.zoomLevel() });
            }
        },

        /**
        * Calculates the bubble size ratio
        * @private
        */
        _getRatioOfBubble: function (min, max, value, minValue, maxValue) {
            var percent = (100 / (maxValue - minValue)) * (value - minValue);
            var bubbleRadius = (((parseFloat(max) - parseFloat(min)) / 100) * percent) + parseFloat(min);
            return bubbleRadius;
        },

        /**
        * Gets property from object
        * @private
        */
        _reflection: function (Source, path) {
            var ShapeValues = Source;
            if (path != null && Source != null) {
                var parts = path.split(".");
                var i = 0;
                for (; i < parts.length; i++) {

                    if (Source != undefined) {
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
                }
                return ShapeValues;
            }
            else {
                return null;
            }

        },
		
		/**
        * Clear Selected Map Shapes
        * @public
        */
		
		clearShapeSelection:function(){		
		 var index = this.baseMapIndex();
            this.model.layers[index]._clearShapeWidth(this._scale);
            for (var key = 0; key < this.model.layers[index].subLayers.length; key++) {
                (this.model.layers[index].subLayers[key])._clearShapeWidth(this._scale);
            }
		},

        /**
        * Generates markers
        * @public
        */
        refreshMarkers: function () {
            var index = this.baseMapIndex();
            this.model.layers[index]._generateMarkerForLayers(this);
            for (var key = 0; key < this.model.layers[index].subLayers.length; key++) {
                (this.model.layers[index].subLayers[key])._generateMarkerForLayers(this);
            }
        },

        /**
        * Generates tooltip for layers
        * @private
        */
        _generateTooltipForLayers: function (layer) {
            if (layer.showTooltip) {
                var tooltipTemplateDiv = $('.tooltipTemplateDiv');
                tooltipTemplateDiv = $("<div class='shapeToolTip' style='z-index:1000;display:none;position:absolute;pointer-events:none;'></div>");
                $(document.body).append(tooltipTemplateDiv);
                layer._tooltipElement = tooltipTemplateDiv;
                if (layer.tooltipTemplate == null) {
                    var path = layer.shapeSettings.valuePath;
                    if (path != null) {
                        layer.tooltipTemplate = 'defaultTooltip';                      
                        this._mapContainer.append($('<div  id="defaultTooltip" style="display:none;"><div style="margin-left:10px;margin-top:-25px;"><div class="defaultToolTip"><p style="margin-top:-4px"><label  style="color:rgb(27, 20, 20);font-size:14px;font-weight:normal;font-family:Segoe UI">{{:' + path + '}}</label></p></div></div></div>'));
                    }
                }
            }            
        },

        /**
        * Sorts in ascending order
        * @private
        */
        _orderByNameAscending: function (a, b) {
            if (a.Range == b.Range) {
                return 0;
            } else if (a.Range > b.Range) {
                return 1;
            }
            return -1;
        },

        /**
        * Resizes the container
        * @private
        */
        _resizingContainer: function () {            
            this._scale = this._isTileMap ? Math.pow(2, this.zoomLevel()-1) : this.zoomLevel();            
            if (this._isTileMap) {
                this._translatePoint.x = this._tileTranslatePoint.x / this._scale;
                this._translatePoint.y = this._tileTranslatePoint.y / this._scale;
            }
            else {                     
                this._translatePoint.x = this._tileTranslatePoint.x / this._scale;
                this._translatePoint.y = this._tileTranslatePoint.y / this._scale;
            }           
            this._applyTransform(this._scale, this._translatePoint);
            this._baseScale = this._scale;
            this._baseTranslatePoint = { x: (this._translatePoint.x * 2), y: (this._translatePoint.y * 2) };
           
        },

        /**
       * Calculates margin with conditions
       * @private
       */
        _calculateMarginConditions: function () {
            var trans = this._calculateMinMax();
            if (this._translatePoint.y> trans.maxY) {
                this._translatePoint.y = trans.maxY;
            }
            else if (this._translatePoint.y < trans.minY) {
                this._translatePoint.y = trans.minY;
            }
            if (this._translatePoint.x > trans.maxX) {
                this._translatePoint.x = trans.maxX;
            }
            else if (this._translatePoint.x < trans.minX) {
                this._translatePoint.x = trans.minX;
            }
        },

        /**
       * Calculates minimum and maximum of map boundaries
       * @private
       */
        _calculateMinMax: function () {           
            var bounds= this._groupBorder;            
            var maximumTransX, maximumTransY, minimumTransX, minimumTransY;
            if (this._containerHeight * this._scale <= this._height) {
                maximumTransY = (this._height - this._containerHeight * this._scale) / (2 * this._scale) - bounds.y;
                minimumTransY = (this._height - this._containerHeight * this._scale) / (2 * this._scale)-bounds.y;
            } else {
                maximumTransY = 0;
                minimumTransY = ((this._height - this._containerHeight * this._scale) / this._scale)-bounds.y;;
            }
            if (this._containerWidth * this._scale <= this._width) {
                maximumTransX = (this._width - this._containerWidth * this._scale) / (2 * this._scale)- bounds.x;
                minimumTransX = (this._width - this._containerWidth * this._scale) / (2 * this._scale) - bounds.x;
            } else {
                maximumTransX = 0;
                minimumTransX = ((this._width - this._containerWidth * this._scale) / this._scale) - bounds.x;
            }
            return { minX: minimumTransX, maxX: maximumTransX, minY: minimumTransY, maxY: maximumTransY };
        },

      
        /**
          * Calculates mid point of polygon
          * @private
          */
        _findMidPointofPoylgon: function (points) {
            var min = 0;           
            var max = points.length;
            var initialPoint = points[0];
            var minX=initialPoint.x,maxX = initialPoint.x;
            var minY = initialPoint.y, maxY = initialPoint.y;
            var startX,startY,startX1,startY1,sum=0,xSum=0,ySum=0;
           
            for (var i = min; i <= max - 1; i++) {
                var prevPoint = points[i];
                startX = prevPoint.x;
                startY = prevPoint.y;
                if (i == max - 1) {
                    startX1 = initialPoint.x;
                    startY1 = initialPoint.y;
                }
                else {
                    var nextPoint = points[i + 1];
                    startX1 = nextPoint.x;
                    startY1 = nextPoint.y;
                }
                sum = sum + Math.abs(((startX * startY1)) - (startX1 * startY));
                xSum = xSum + Math.abs(((startX + startX1) * (((startX * startY1) - (startX1 * startY)))));
                ySum = ySum + Math.abs(((startY + startY1) * (((startX * startY1) - (startX1 * startY)))));

            }
            sum = 0.5 * sum;
            xSum = (1 / (4 * sum)) * xSum;
            ySum = (1 / (4 * sum)) * ySum;
            return { x: xSum, y: ySum };
           

            //for (var i = min; i < max; i++) {
            //    minX = Math.min(minX, points[i].x);
            //    maxX = Math.max(maxX, points[i].x);
            //    minY = Math.min(minY, points[i].y);
            //    maxY= Math.max(maxY, points[i].y);
            //}          
            //return {x:minX+((maxX-minX)/2),y:(minY+(maxY-minY)/2)};            
        },


        /**
          * Converts tiles' latitude and longitude point for shapes
          * @private
          */
        _convertTileLatLongtoPointForShapes: function (lat, lng, bounds,vmlBound) {
            var Size;
            if (bounds == null) { bounds=[[-180,-85],[180,85]] }
            if (this._isTileMap) {
                Size = Math.pow(2, 1) * 256;
            }
            else {
                var factor;
                if (this._height < this._width) {
                    var percent = ((bounds[1][1] - bounds[0][1])/170) * 100;
                    factor = this._height/((percent * this._height) / 100);
                }
                else {
                    var percent = ((bounds[1][0] - bounds[0][0]) / 360) * 100;
                    factor = this._width/((percent * this._width) / 100);
                }

                Size = Math.min(this._height, this._width)*factor;      
            }
           
            var x = (lng + 180) / 360;
            var sinLatitude = Math.sin(lat * Math.PI / 180);
            if (sinLatitude == -1)
                sinLatitude = -0.5;
            var y = 0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI);
            var pixelX = (x * Size + 0.5);
            var pixelY = (y * Size + 0.5);
            if (vmlBound!=null) {
                pixelX -= vmlBound.x;
                pixelY -= vmlBound.y;
            }
            return { x: pixelX, y: pixelY };
           
            
        },
        
        /**
          * Converts tiles' latitude and longitude point
          * @private
          */
        _convertTileLatLongtoPoint: function (lat, lng) {
            var Size = Math.pow(2, this.zoomLevel()) * 256;          
            var x = (lng + 180) / 360; 
            var sinLatitude = Math.sin(lat * Math.PI / 180);
            var y = 0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI);
            var pixelX = (x * Size + 0.5) + this._tileTranslatePoint.x;
            var pixelY = (y * Size + 0.5) + this._tileTranslatePoint.y;            
            return { x: pixelX, y: pixelY };
        },
       
        /**
         * Converts tiles' latitude and longitude point for Marker
         * @private
         */
        _convertLatLongtoPointforMarker: function (lat, lng) {
            var point = this._convertTileLatLongtoPointForShapes(lat, lng, this._mapBounds);
            return { x: (point.x + this._translatePoint.x) * this._scale, y: (point.y + this._translatePoint.y) * this._scale };

        },
     
        /**
        * Animate the map
        * @private
        */
        _animate: function (animateduration) {
            this._calculateMarginConditions();
            $(this._rootgroup).stop(true, false);
            if (this._sliderControl != null) {
                $(this._sliderControl).stop(true, false);
            }
            var map = this;
            var currentTranformation = { x: this._translatePoint.x, y: this._translatePoint .y};
            var startPoint = [this._prevPoint.x, this._prevPoint.y];
            var endPoint = [this._translatePoint.x, this._translatePoint.y];

            function slope(horizontal, vertical) {
                
                if (horizontal[0] == vertical[0]) {
                    return null;
                }
                return (vertical[1] - horizontal[1]) / (vertical[0] - horizontal[0]);
            }

            function intercept(point, slopeValue) {
                if (slopeValue === null) {
                    return point[0];
                }
                return point[1] - slopeValue * point[0];
            }

            var slopeFactor = slope(startPoint, endPoint);
            var slopeIntersection = intercept(startPoint, slopeFactor);
            var horizontalDifference= endPoint[0] - startPoint[0];
            var verticalDifference=endPoint[1] - startPoint[1];
            var scaleDifference= this._scale-this._prevScale;
            var currentScale = this._scale;
            this._updateSliderValue();
            $(this._rootgroup).animate(
                {
                    count: 10
                },
                {
                    duration: animateduration,
                    step: function(now, fx) {
                        var scaleX = map._prevScale + ((now * (scaleDifference / fx.end)));
                        var transX = startPoint[0] + (now * (horizontalDifference / fx.end)) / (scaleX / currentScale);
                        var transY;
                        if (slopeFactor == null) {
                            transY = startPoint[1] + (now * (verticalDifference / fx.end));
                        } else {
                            transY = ((slopeFactor * transX) + slopeIntersection);
                        }
                        if (_isSVG) {
                            map._rootgroup.setAttribute('transform', 'scale(' + scaleX + ') translate(' + transX + ', ' + transY + ')');
                        }
                        else {
                            map._rootgroup.coordorigin = -transX + ',' + -transY;
                            map._rootgroup.coordsize = (map._width / scaleX) + ',' + (map._height / scaleX);
                        }
                        map._translatePoint.x = transX;
                        map._translatePoint.y = transY;
                        map._scale = scaleX;
                        map._refrshLayers();
                        map._resizeShape();
                    },
                    complete: function() {
                        map._translatePoint.x = currentTranformation.x;
                        map._translatePoint.y = currentTranformation.y;
                        map._scale = currentScale;
                        this.count = 0;
                    }
                }
            );

        },

        /**
        * Applies transforms to rootgroup
        * @private
        */
        _applyTransform: function (scale, translatePoint) {
            this._scale = scale;
            this._translatePoint = translatePoint;
           if(!this._isTileMap)
            this._calculateMarginConditions();            
            if (_isSVG) {
                this._rootgroup.setAttribute('transform', 'scale(' + this._scale + ') translate(' + this._translatePoint.x + ', ' + this._translatePoint.y + ')');
            }
            else {
                this._rootgroup.coordorigin = (-this._translatePoint.x) + ','  + (-this._translatePoint.y);
                this._rootgroup.coordsize = (this._width / scale)  + ',' + (this._height / scale);
            }

        },

        /**
         * Section For handling the mouse move event
		 * @private
         */
        _mouseMove: function (event) {
            if (event.type == "touchmove" && event.originalEvent.touches.length > 1) {
                this._isPinching = true;
            }
            else {
                var map = this;
                if (map.ispanning && map.model.enablePan) {
                    event.preventDefault();
                    var position;
                    if (event.type == "mousemove")
                        position = { x: event.pageX, y: event.pageY };
                    else if (event.type == "touchmove")
                        position = { x: event.originalEvent.changedTouches[0].pageX, y: event.originalEvent.changedTouches[0].pageY };
                    else if (event.type == "MSPointerMove")
                        position = { x: event.originalEvent.pageX, y: event.originalEvent.pageY };
                    if (this._isTileMap) {
                        var curtileX = this._tileTranslatePoint.x - (this._dragStartX - position.x);
                        var curtileY = this._tileTranslatePoint.y - (this._dragStartY - position.y);
                        this._tileTranslatePoint.x = curtileX;
                        this._tileTranslatePoint.y = curtileY;                        
                        this._generateTiles(this.zoomLevel());
                    }                    
                    var curX = map._translatePoint.x - (map._dragStartX - position.x) / map._scale;
                    var curY = map._translatePoint.y - (map._dragStartY - position.y) / map._scale;
                    if (curX != map._translatePoint.x || curY != map._translatePoint.y) {
                        map._isDragging = true;
                    }
                    this._translatePoint.x = curX;
                    this._translatePoint.y = curY;
                    map._applyTransform(map._scale, map._translatePoint);
                    map._dragStartX = position.x;
                    map._dragStartY = position.y;
                    map._refrshLayers();
                }
            }
        },

        /**
         * Section For handling the mouse leave event
		 * @private
         */
        _svgMouseLeave: function (event) {
            var map = this;
            map.ispanning = false;
        },

        /**
        * Section For handling the mouse wheel event
        * @private
        */
        _mouseWheel: function (event) {
		    if(this.model.enableAnimation){
				$(this._rootgroup).stop(true, false);
			}
            var e = event.originalEvent;
            var original = event;
            if (!_isSVG) {
                e = event;
            }
            e.preventDefault ? e.preventDefault() : original.preventDefault();
	    	if(_isSVG)
	    	{
	    		this._zooming(event.originalEvent.wheelDelta, event.originalEvent);
	    	}
	    	else
	    	{
            	this._zooming(event.originalEvent.wheelDelta, e);
	    	}
        },

        /**
        * Section For handling the mouse button up event
        * @private
        */
        _mouseButtonUp: function (event) {

            var map = this;
            if (map.ispanning) {
                map._trigger("panned", { originalEvent: event });
            }
            map.ispanning = false;
        },

        /**
        * Section For handling the mouse up event
        * @private
        */
        _mouseUp: function (event) {
            this.ispanning = false;
            this._isDragging = false;
        },

        /**
        * Section For handling the mouse button down event
        * @private
        */
        _mouseButtonDown: function (event) {
            this._isPinching = false;
           if (event.target.className != "e-vhandle") {         
            this._isNavigationPressed = false;
            if(this.model.enableAnimation){
                $(this._rootgroup).stop(true, false);
                if (this._sliderControl != null) {
                    $(this._sliderControl).stop(true, false);
                }
			}
            if (event.type == "touchstart" && event.originalEvent.touches.length > 1)
            { }
            else {
                event.preventDefault();
                var position;
                if (event.type == "mousedown")
                    position = { x: event.pageX, y: event.pageY };
                else if (event.type == "touchstart")
                    position = { x: event.originalEvent.changedTouches[0].pageX, y: event.originalEvent.changedTouches[0].pageY };
                else if (event.type == "MSPointerDown")
                    position = { x: event.originalEvent.pageX, y: event.originalEvent.pageY };
                var map = this;
                map.ispanning = true;
                map._dragStartX = position.x;
                map._dragStartY = position.y;
            }
		}
        },

        /**
       * Section to get current point position
       * @private
       */
        _getCurrentPoint: function (event) {
            var map = this._mapContainer;
            var xPos = event.pageX - map[0].offsetLeft;
            var yPos = event.pageY - map[0].offsetTop;
            return { x: xPos, y: yPos };
        },

        /**
        * Section For handling the double click event
        * @private
        */
        _doubleClick: function (event) {            
            var map = this;
            if (!this._isNavigationPressed && event.target.className.toString().indexOf("e-icon1")==-1) {
                var position = this._getCurrentPoint(event);               
                if (map.enableZoom() && map.zoomLevel()+1 >= map.minZoom() && map.zoomLevel()+1 <= map.maxZoom()) {
                    var scal = map._scale;
                    map._prevScale = scal;
                    if (!this._isTileMap) {
                        map._prevPoint = { x: map._translatePoint.x, y: map._translatePoint.y };
                        map._translatePoint.x -= (map._width / map._scale - map._width / (map._scale + map.zoomFactor())) / (map._width / position.x);
                        map._translatePoint.y -= (map._height / map._scale - map._height / (map._scale + map.zoomFactor())) / (map._height / position.y);
                        map._scale = scal + map.zoomFactor();                       
                        map.zoomLevel(map.zoomLevel() + 1);
                    }
                    else {
                        this._tileZoom(map.zoomLevel() - 1, map.zoomLevel(), position);
                        var prevLevel = map.zoomLevel();
                        map.zoomLevel(map.zoomLevel() + 1);
                        this._generateTiles(this.zoomLevel());                       
                        map._translatePoint.x = (map._tileTranslatePoint.x - (0.5 * Math.pow(2, prevLevel))) / (Math.pow(2, prevLevel));
                        map._translatePoint.y = (map._tileTranslatePoint.y - (0.5 * Math.pow(2, prevLevel))) / (Math.pow(2, prevLevel));
                        map._scale = (Math.pow(2, prevLevel));                        
                    }
                    if (map.model.enableAnimation && !this._isTileMap) {
                        map._animate(600);
                    }
                    else {
                        map._applyTransform(map._scale, map._translatePoint);
                        map._refrshLayers();
                        map._resizeShape();
                    }                 
                    map._updateSliderValue();
                }
            }
        },

        /**
        * Section to zoom the tile
        * @private
        */
        _tileZoom: function (prevlevel,level, position) {
            
            var map = this;
            if (level > 0 && level < 20) {
                this._tileDiv.html("");
                var prevSize = Math.pow(2, prevlevel) * 256;
                if (position == undefined) {
                    position = { x: this._width / 2, y: this._height / 2 };
                }
                var totalSize = Math.pow(2, level) * 256;
                var percentX = ((position.x - this._tileTranslatePoint.x) / prevSize) * 100;
                var percentY = ((position.y - this._tileTranslatePoint.y) / prevSize) * 100;
                var pointX = (percentX * totalSize) / 100;
                var pointY = (percentY * totalSize) / 100;
                this._tileTranslatePoint.x = position.x - pointX;
                this._tileTranslatePoint.y = position.y - pointY;
                
            }
        },          
        
        /**
        * Section For handling the mouse enter event for bubble
        * @private
        */
        _bubbleEnterFunction: function (event) {
            if (event.data.templateID != null) {
                var tooltiphtmlString = $("#" + event.data.templateID).render(event.data.itemsrc);
                $(event.data.htmlobj).html(tooltiphtmlString);
            }
            $(document.body).append(event.data.htmlobj);
            return $(event.data.htmlobj).css("display", "block").css({ "left": (event.pageX + 8) + "px", "top": (event.pageY + 6) + "px" });
        },

        /**
        * Section For handling the mouse leave event for bubble
        * @private
        */
        _bubbleleaveFunction: function (event) {
            $(event.data.htmlobj).remove();
            return $(event.data.htmlobj).css("display", "none");
        },

        /**
        * Section For handling the mouse over event for bubble
        * @private
        */
        _bubbleOverFunction: function (event) {
            return $(event.data.htmlobj).css("display", "block").css({ "left": (event.pageX + 8) + "px", "top": (event.pageY + 6) + "px" });
        },

        /**
       * Section For handling the mouse over event for shape path
       * @private
       */
        _polyEnterFunction: function (event) {
            var layer = event.data.Param1;
            var shape = event.data.Param2["shape"];
            var map = event.data.map;
            if (map != null && layer.enableMouseHover && map._browser!='msie') {
                map._rootgroup.insertBefore(shape, map._rootgroup.childNodes[map._rootgroup.childNodes.length- (map._polylineCount+map._pointscount) - 1]);
            }
            var legend = jQuery.grep(layer._smartLabels, function (obj) { return obj.shape == shape });
            if (layer.enableMouseHover) {
                layer._clearShapeWidth(map._scale);
                if (layer._prevHoverdLegend != null && !layer._contains(layer._prevSelectedLegends, layer._prevHoverdLegend)) {
                    layer._prevHoverdLegend.css("background-color", _isSVG ? layer._prevHoveredShape.getAttribute("fill") : layer._prevHoveredShape.fillcolor.value);
                }
                if (_isSVG) {
                    shape.setAttribute("stroke-width", (layer.shapeSettings.highlightBorderWidth/map._scale));
                    shape.setAttribute('stroke', layer.shapeSettings.highlightStroke);
                } else {
                    shape.strokeweight = layer.shapeSettings.highlightBorderWidth;
                    shape.strokecolor = layer.shapeSettings.highlightStroke/map._scale;
                }

                if (layer.shapeSettings.highlightColor != null) {
                    if (layer.shapeSettings.highlightColor != "transparent" && !layer._contains(layer._prevSelectedShapes,shape)) {
                        if (_isSVG) {
                            shape.setAttribute('fill', layer.shapeSettings.highlightColor);
                        } else {
                            shape.fillcolor = layer.shapeSettings.highlightColor;
                        }
                    }
                    if (legend.length > 0 && !layer._contains(layer._prevSelectedLegends,legend[0].legend)) {
                        
                        legend[0].legend.css("background-color", layer.shapeSettings.highlightColor);
                        layer._prevHoverdLegend = legend[0].legend;
                    }

                    layer._prevHoveredShape = shape;
                }

                if (layer.legendSettings!= null && layer.legendSettings.mode == ej.datavisualization.Map.LegendMode.Interactive && layer.shapeSettings.colorMappings!=null && layer.shapeSettings.colorMappings.rangeColorMapping != null
                     && !layer.shapeSettings.autoFill && (layer.legendSettings.showLegend == undefined || layer.legendSettings.showLegend)) {
                    for (var i = 0; i < layer._mapShapes.length; i++) {
                        var mapshape = layer._mapShapes[i].shape;
                        if (mapshape == shape) {
                            var mappings = null;
                            if (layer.shapeSettings.colorMappings.rangeColorMapping != undefined) {
                                mappings = layer.shapeSettings.colorMappings.rangeColorMapping;
                            }
                            var _legendwidth = layer.legendSettings.width;
                            if (layer.legendSettings.width == undefined)
                                _legendwidth = 150;

                            var rectwidth = (_legendwidth / mappings.length) / 10;
                            var rectPosition = layer._mapShapes[i].legendrect.marginLeft;
                            $(layer._interactiveArrow).css({ "margin-left": rectPosition + Math.ceil(rectwidth) - layer._interactiveArrow.width()/2, "display": "block" });
                            break;
                        }
                    }
                }
                map._trigger("mouseover ", { originalEvent: event.data.Param2 });
            }
                var tooltipObject = event.data.Param2;
                if (tooltipObject.hasOwnProperty("data") && layer.showTooltip) {
                    var element = layer._tooltipElement;
                    var template = layer.tooltipTemplate;
                    if (element != null && template != null) {
                        $(element).css({ "left": event.pageX, "top": event.pageY, "display": "block" });
                        var htmlString = $("#" + template).render(tooltipObject["data"]);
                        $(element).html(htmlString);

                    }
                }
                
        },
        
        /**
       * updates shape rect
       * @private
       */
        _updateShapeRect:function(layer) {

            for (var index = 0; index < layer._mapShapes.length; index++) {
                var obj = layer._mapShapes[index];
                if (obj.left == null) {
                    obj["left"] = layer._mapShapes[index].shape.getBoundingClientRect().left;
                    obj["right"] = layer._mapShapes[index].shape.getBoundingClientRect().right;
                    obj["top"] = layer._mapShapes[index].shape.getBoundingClientRect().top;
                    obj["bottom"] = layer._mapShapes[index].shape.getBoundingClientRect().bottom;
                    layer._mapShapes[index] = obj;
                }
            }
        },
        

        /**
       * Section For handling the mouse up event for shape path
       * @private
       */
        _polyUpFunction: function (event) {
            var layer = event.data.Param2;
            var shape = event.data.Param3;
            if (this.enableZoomOnSelection() && !this._isDragging && !this._isTileMap && !this._isPinching) {
                    if (_isSVG) {
                        var bounds = shape.getBBox();
                        this._zoomOnSelection(bounds);
                    } else {                        
                            this._updateShapeRect(layer);

                        for (var index = 0; index < layer._mapShapes.length; index++) {
                            if (shape == layer._mapShapes[index].shape) {
                                var left = layer._mapShapes[index].left;
                                var top = layer._mapShapes[index].top;
                                var right = layer._mapShapes[index].right;
                                var bottom = layer._mapShapes[index].bottom;
                                var bound = { x: left, y: top, width: right - left, height: bottom - top };
                                this._zoomOnSelection(bound);
                                break;
                            }
                        }
                    }
                    this.ispanning = false;
                }
            
            this._updateSelection(layer,shape,event.data.Param1);
        },

        /**
       * Section For handling the mouse click event for Marker
       * @private
       */
        _markerPressed: function (event) {
            this._trigger("markerSelected", { originalEvent: event.data });
        },

        /**
       * Section For handling the mouse click event for shape path
       * @private
       */
        _polyClickFunction: function (event) {
            var ctrlkey = event.ctrlKey;
            var layer = event.data.Param2;
            var map = this;
            var shape = event.data.Param3;
            var legend = jQuery.grep(layer._smartLabels, function (obj) { return obj.shape == shape });
            if (layer.enableSelection && map._browser!='msie') {
                map._rootgroup.insertBefore(shape, map._rootgroup.childNodes[map._rootgroup.childNodes.length - (map._polylineCount+map._pointscount) - 1]);
            }
            map._isPolygonSelected = true;
            if (layer._prevSelectedLegends.length != 0 && layer._prevSelectedShapes.length != 0) {
                for (var k = 0; k < legend.length; k++) {
                    layer._prevSelectedLegends[k].css("background-color", layer._prevSelectedShapes[k].getAttribute("nodeValue"));
                }
            }

            if (!ctrlkey) {
                if (layer._prevSelectedLegends.length > 0) {
                    layer._prevSelectedLegends.pop();
                }
            }

            if (legend.length > 0) {
                for (var j = 0; j < legend.length; j++) {
				      if(layer.shapeSettings.selectionColor!="none"){
                         legend[j].legend.css("background-color", layer.shapeSettings.selectionColor);
					   }
                    layer._prevSelectedLegends.push(legend[j].legend);
                }
            }

            if (layer._prevSelectedShapes.length != 0 && (!ctrlkey && (layer.enableSelection || layer.selectionMode == ej.datavisualization.Map.SelectionMode.Multiple))){
                for (var i = 0; i < layer._prevSelectedShapes.length; i++) {
                    if (_isSVG) {
                        layer._prevSelectedShapes[i].setAttribute("fill", layer._prevSelectedShapes[i].getAttribute("nodeValue"));
                        layer._prevSelectedShapes[i].setAttribute("stroke", layer.shapeSettings.stroke);
                        layer._prevSelectedShapes[i].setAttribute("stroke-width", layer.shapeSettings.strokeThickness / this._scale);
                    } else {
                        layer._prevSelectedShapes[i].fillcolor = layer._prevSelectedShapes[i].style.behavior;
                        layer._prevSelectedShapes[i].strokecolor = layer.shapeSettings.stroke;
                        layer._prevSelectedShapes[i].strokeweight = layer.shapeSettings.strokeThickness / this._scale;
                    }

                }
            }

            var canSelect = false;

            if (!ctrlkey && layer.selectionMode == ej.datavisualization.Map.SelectionMode.Multiple) {
                if (layer._prevSelectedShapes.length > 0) {
                    layer._prevSelectedShapes.pop();
                    canSelect = true;
                }
            }

            if (layer.enableSelection || (ctrlkey && layer.selectionMode == ej.datavisualization.Map.SelectionMode.Multiple) || canSelect)  {
                if (_isSVG) {
				    if(layer.shapeSettings.selectionColor!='none'){
                    shape.setAttribute("fill", layer.shapeSettings.selectionColor);
					}
                    shape.setAttribute("stroke", layer.shapeSettings.selectionStroke);
                    shape.setAttribute("stroke-width", (layer.shapeSettings.selectionStrokeWidth/map._scale));
                } else {
				   if(layer.shapeSettings.selectionColor!='none'){
                    shape.fillcolor = layer.shapeSettings.selectionColor;
					}
                    shape.strokecolor = layer.shapeSettings.selectionStroke;
                    shape.strokeweight = layer.shapeSettings.selectionStrokeWidth/map._scale;
                }
                this._updateSelection(layer, shape, event.data.Param1);
                map._trigger("shapeSelected", { originalEvent: layer._prevSelectedShapeDatas });
            }           
           
        },

        /**
        * Updates previous selected shape
        * @private
        */
        _updateSelection: function (layer, shape, data) {
            if (layer.enableSelection) {
                if (layer.selectionMode != ej.datavisualization.Map.SelectionMode.Multiple) {
                    layer._prevSelectedShapes.pop();
                    layer._prevSelectedShapeDatas.pop();
                }
                layer._prevSelectedShapes.push(shape);
                layer._prevSelectedShapeDatas.push(data);
            }
        },

        /**
      * Zooms map on shape selection
      * @private
      */
	   _zoomOnSelection: function (bounds) {            
	       var layerScale;
	       if (!_isSVG) {
	           bounds.x = (bounds.x - (this._baseTranslatePoint.x/2)) - (bounds.width/2);
	           bounds.y = (bounds.y - (this._baseTranslatePoint.y/2)) - (bounds.height / 2);
	       }
	       var boundwidth = bounds.width;
	       var boundHeight =bounds.height;
	       if ((this._width - 100) / (this._height - 100) > boundwidth / boundHeight) {
	           layerScale = (this._height - 100) / boundHeight;
	       } else {
	           layerScale = (this._width - 100) / boundwidth;
	       }
	       this._prevScale = this._scale;
	       this._scale = layerScale;
	       this._prevPoint = { x: this._translatePoint.x, y: this._translatePoint.y };
	       this.zoomLevel(this._scale - this._baseScale + 1);
	       var level = this.zoomLevel();
	       if (!(level > this.minZoom() && level < this.maxZoom())) {
	           this.zoomLevel(level > (((this.maxZoom() - this.minZoom()) / 2) + this.minZoom()) ? this.maxZoom() : this.minZoom());
	           this._scale = this.zoomLevel() + this._baseScale - 1;
	       }
	       var leftMargin = (this._width / 2) - ((boundwidth * this._scale) / 2);
	       var leftPos = leftMargin / this._scale;
	       var topMargin = (this._height / 2) - ((boundHeight * this._scale) / 2);
	       var topPos = topMargin / this._scale;
	       this._translatePoint.x = -bounds.x + leftPos;
	       this._translatePoint.y = -bounds.y + topPos;
	       if (this.model.enableAnimation && !this._isTileMap) {
	           this._animate(1200);
	       }
	       else {
	           this._applyTransform(this._scale, this._translatePoint);
	           this._updateSliderValue();
	       }

	       //this._refrshLayers();
            
        },

        /**
      * Section For handling the mouse move event for shape path
      * @private
      */
        _polyMoveFunction: function (event) {
            var element = event.data.Param1._tooltipElement;
            var tooltipObject = event.data.Param2;
            if (element != null && event.data.Param1.showTooltip && tooltipObject.hasOwnProperty("data")) {
                $(element).css({ "display": "block", "left": event.pageX + 10, "top": event.pageY + 10});
            }
        },

        /**
      * Section For handling the mouse leave event for shape path
      * @private
      */
        _polyLeaveFunction: function (event) {
            var layer = event.data.Param1;
            var map = event.data.map;
            var element = layer._tooltipElement;            
            if (element != null) {
                $(element).css("display", "none");
            }
            if (layer.legendSettings!=null && layer.legendSettings.mode == ej.datavisualization.Map.LegendMode.Interactive && layer._interactiveArrow != null)
                $(layer._interactiveArrow).css("display", "none");
            layer._clearShapeWidth(map._scale);
            map._trigger("mouseleave ", { originalEvent: event.data.Param2 });
        },

        /**
         * Triggering the needed events for map control		
		 * @private
         */
        _wireEvents: function () {
            var matched = jQuery.uaMatch(navigator.userAgent);
            var browser = matched.browser.toLowerCase();
            this._on($(this._mapContainer), ej.eventType.mouseDown, this._mouseButtonDown);
			$(document).keydown({ className: "home", map: this }, this._keyboardKeysPressed);
            this._on($(this._mapContainer), ej.eventType.mouseMove, this._mouseMove);
            this._on($(document), ej.eventType.mouseUp, this._mouseUp);
            var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
            if (isIE11)
                browser = "msie";
            if (window.navigator.msPointerEnabled) {
                this._on($(this._mapContainer), "MSPointerUp", this._mouseButtonUp);
                $(this._mapContainer).css('-ms-touch-action', 'none');
            }
            else {
                this._on($(this._mapContainer), "mouseup", this._mouseButtonUp);
            }
            var map = this;
            this._browser = browser;
            if (browser != "mozilla") {
                this._on($(this._mapContainer), "mousewheel", this._mouseWheel);
            }
            else {
                var elem = this._svgDocument;
                if (elem.addEventListener) {
                    // Mouse Scrolling event for firefox
                    elem.addEventListener("DOMMouseScroll", MouseWheel, false);
                }

            }
            function MouseWheel(event) {
			if(map.model.enableAnimation){
				$(map._rootgroup).stop(true, false);
			}
			  event.preventDefault(event);
                map._zooming(-40 * event.detail, event);
            }
            this._on($(this._mapContainer), "dblclick", this._doubleClick);
            if (this.model.enableResize) {
                if (!this._isDevice())
                    this._on($(window), "resize", this._mapResize);
                else
                    this._on($(window), "orientationchange", this._mapResize);
            }
        },

        /**
       * Section For handling the map resize event
       * @private
       */
        _mapResize: function (event) {
            event.preventDefault();
            event.stopPropagation();
            var map = this;
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                map.refresh();
            }, 500);
        },

        /**
        * checks the device type
        * @private
        */
        _isDevice: function () {
            return (/mobile|tablet|android|kindle/i.test(navigator.userAgent.toLowerCase()));
        },

        /**
         * Unwiring the needed events for map control		
		 * @private
         */
        _unWireEvents: function () {
            var matched = jQuery.uaMatch(navigator.userAgent);
            var browser = matched.browser.toLowerCase();
            this._on($(document), ej.eventType.mouseUp, this._mouseUp);
            var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
            if (isIE11)
                browser = "msie";
            if (window.navigator.msPointerEnabled) {
                this._off($(this._mapContainer), "MSPointerDown", this._mouseButtonDown);
                this._off($(this._mapContainer), "MSPointerMove", this._mouseMove);
                this._off($(this._mapContainer), "MSPointerUp", this._mouseButtonUp);
                $(this._mapContainer).css('-ms-touch-action', 'none');
            }
            else if (browser == "webkit" || browser == "chrome" || browser == "mozilla") {
                this._off($(this._mapContainer), "mousedown", this._mouseButtonDown);
                this._off($(this._mapContainer), "mousemove", this._mouseMove);
                this._off($(this._mapContainer), "mouseup", this._mouseButtonUp);

            }
            else {
                this._off($(this._mapContainer), "mousedown", this._mouseButtonDown);
                this._off($(this._mapContainer), "mousemove", this._mouseMove);
                this._off($(this._mapContainer), "mouseup", this._mouseButtonUp);

            }
            this._off($(this._mapContainer), "dblclick", this._doubleClick);

        },

        /**     
        * Method for navigating to specific shape based on latitude, longitude and zoomlevel.
        * @return jQuery
        * @param {number} latitude Pass the latitude value for map
	    * @param {number} longitude Pass the longitude value for map
	    * @param {number} level Pass the zoom level for map
        * @example 
        * //navigateTo method for map
        * $("#container").ejMap({
        *    navigateTo: function (lat, long, level) {}
        * });
        * @memberof ejMap
        * @instance
        */
        navigateTo: function (latitude, longitude, level) {
		
		    level=parseFloat(level);
            if (level == undefined) level = this.zoomLevel();
            if (level > this.minZoom() && level < this.maxZoom()) {
                this.zoomLevel(level);
            }
            else {
                this.zoomLevel(level > (((this.maxZoom() - this.minZoom()) / 2) + this.minZoom()) ? this.maxZoom() : this.minZoom());

            }           
            var translatePoint = this._convertTileLatLongtoPointForShapes(latitude, longitude, this._mapBounds);
            this._prevPoint = { x: this._translatePoint.x, y: this._translatePoint.y };
            this._prevScale = this._scale;
            this._scale = this._baseScale + ((level - 1) * this.zoomFactor());           
            var leftPosition = ((this._containerWidth + this._baseTranslatePoint.x) / 2) / this._scale;
            var topPosition = ((this._containerHeight + this._baseTranslatePoint.y) / 2) / this._scale;
            this._translatePoint.x = -translatePoint.x+ leftPosition;
            this._translatePoint.y = -translatePoint.y+ topPosition;
            if (this.model.enableAnimation && !this._isTileMap ){
                this._animate(1200);
            }
            else {
                this._applyTransform(this._scale, this._translatePoint);
            }
            this._updateSliderValue();
            this._refrshLayers();
        },

        /**
        * Performs shape selection on map
        * @private
        */
        selectShape: function (obj, layer,isZoom) {
            if (obj != null) {
                if (layer == null) {
                    layer = this.model.layers[this.baseMapIndex()];
                }
                for (var i = 0; i < layer._mapShapes.length; i++) {
                    var data = layer._mapShapes[i].data;
                    var shape = layer._mapShapes[i].shape;
                    if (data != null && obj == this._reflection(data, layer.shapeSettings.valuePath)) {

                        if (layer._prevSelectedShapes.length != 0 && layer.selectionMode != ej.datavisualization.Map.SelectionMode.Multiple) {
                            for (var i = 0; i < layer._prevSelectedShapes.length; i++) {
                                if (_isSVG) {
                                    layer._prevSelectedShapes[i].setAttribute("fill", layer._prevSelectedShapes[i].getAttribute("nodeValue"));
                                    layer._prevSelectedShapes[i].setAttribute("stroke", layer.shapeSettings.stroke);
                                    layer._prevSelectedShapes[i].setAttribute("stroke-width", layer.shapeSettings.strokeThickness / this._scale);
                                } else {
                                    layer._prevSelectedShapes[i].fillcolor = layer._prevSelectedShapes[i].style.behavior;
                                    layer._prevSelectedShapes[i].strokecolor = layer.shapeSettings.stroke;
                                    layer._prevSelectedShapes[i].strokeweight = layer.shapeSettings.strokeThickness / this._scale;
                                }
                            }
                        }
                        if (layer.enableSelection) {
                            if (_isSVG) {
							    if(layer.shapeSettings.selectionColor!="none"){
                                    shape.setAttribute("fill", layer.shapeSettings.selectionColor);
							    }
                                shape.setAttribute("stroke", layer.shapeSettings.selectionStroke);
                                shape.setAttribute("stroke-width", (layer.shapeSettings.selectionStrokeWidth / this._scale));
                            } else {
							     if(layer.shapeSettings.selectionColor!="none"){
                                      shape.fillcolor = layer.shapeSettings.selectionColor;
								}
                                shape.strokecolor = layer.shapeSettings.selectionStroke;
                                shape.strokeweight = layer.shapeSettings.selectionStrokeWidth / this._scale;
                            }
                            this._updateSelection(layer, shape, obj);
                            this._trigger("shapeSelected", { originalEvent: layer._prevSelectedShapeDatas });
                        }
                        if (isZoom && this.enableZoomOnSelection()) {
                            this._zoomOnSelection(shape.getBBox());
                        }
                        i = layer._mapShapes.length;
                    }
                }
            }

        },

        /**
        * Gets intersected elements
        * @private
        */
        _getIntersectedElements: function (evt, shapes) {
            evt.width += 5;
            evt.height += 5;
            if (_isSVG && this._browser!='mozilla' && this._browser!='webkit') {
                var rpos = this._svgDocument.createSVGRect();
                rpos.x = evt.left;
                rpos.y = evt.top;
                rpos.width = evt.width;
                rpos.height = evt.height;
                return this._svgDocument.getIntersectionList(rpos, null);
            }
            else {
                var elements = []; 
				var parentSize=$(this._mapContainer).offset();
                var  parentLeft=parentSize.left;
                var parentTop= parentSize.top;			
                for (var i = 0; i < shapes.length; i++) {
                    var shape = shapes[i].shape;
                    var bounds = shape.getBoundingClientRect();					
					var leftPos= $(shape).offset().left- parentLeft;
					var topPos= $(shape).offset().top- parentTop;					
                    if (this._isIntersect(evt, { left: leftPos, top: topPos, height: (bounds.bottom  - bounds.top ), width: (bounds.right -bounds.left) })) {
                        elements.push(shape);
                        return elements;
                    }
                }
                return elements;
            }
                
                
        },

        /**
        * Checks intersected elements
        * @private
        */
        _isIntersect: function (rect1, rect2) {           
            
                if (rect1.left >= (rect2.left + rect2.width)
|| rect1.left + rect1.width <= rect2.left
|| rect1.top>= rect2.top + rect2.height
|| rect1.top + rect1.height <= rect2.top) {
                    return false;
                }
                return true;
            
        },

        /**     
        * Method to perform map panning
        * @return jQuery	
        * @param {string} direction Pass the direction in which map should be panned
        * @example 
        * //pan method for map
        * $("#container").ejMap({
        *    pan: function (direction) {}
        * });
        * @memberof ejMap
        * @instance
        */
        pan: function (direction) {
            var map = this;
            var Xdiff = 0;
            var Ydiff = 0;
            if (this.zoomLevel() != 1) {
                switch (direction) {

                    case 'right':
                        {
                            Xdiff = this._width / 7;
                            Ydiff = 0;
                            break;
                        }
                    case 'top':
                        {
                            Xdiff = 0;
                            Ydiff = -(this._height / 7);
                            break;
                        }n
                    case 'left':
                        {
                            Xdiff = -(this._width / 7);
                            Ydiff = 0;
                            break;
                        }
                    case 'bottom':
                        {
                            Xdiff = 0;
                            Ydiff = this._height / 7;
                            break;
                        }
                }
                if (map.model.enablePan) {
                    if (this._isTileMap) {
                        var curtileX = this._tileTranslatePoint.x - Xdiff / map._scale;
                        var curtileY = this._tileTranslatePoint.y - Ydiff / map._scale;
                        this._tileTranslatePoint.x = curtileX;
                        this._tileTranslatePoint.y = curtileY;
                        this._generateTiles(this.zoomLevel());
                    }                    
                    var curX = map._translatePoint.x - Xdiff / map._scale;
                    map._prevScale = map._scale;
                    var curY = map._translatePoint.y - Ydiff / map._scale;
                    map._prevPoint = { x: this._translatePoint.x, y: this._translatePoint.y };
                    this._translatePoint.x = curX;
                    this._translatePoint.y = curY;
                    if (map.model.enableAnimation && !this._isTileMap) {                       
                        map._animate(600);
                    }
                    else {
                        map._applyTransform(map._scale, map._translatePoint);
                    }
                    map._refrshLayers();
                }
            }
			
        },      

        /**     
        * Method to perform map zooming. 
        * @return jQuery
        * @param {number} level Pass the zoom level for map to be zoomed
        * @param {boolean} isAnimate Pass the boolean value to enable or disable animation while zooming
        * @example 
        * //zoom method for map
        * $("#container").ejMap({
        *    zoom: function (level,isAnimate) {}
        * })
        * @memberof ejMap
        * @instance
        */
        zoom: function (level,isAnimate) {
           var map = this;
            if (level <= this.maxZoom() && level >= this.minZoom()) {
                if (this._isTileMap) {
                    this._tileZoom(map.zoomLevel(), level, {x:this._width/2,y:this._height/2});
                    var prevLevel = map.zoomLevel();
                    map.zoomLevel(level);
                    this._generateTiles(this.zoomLevel());
                    map._translatePoint.x = (map._tileTranslatePoint.x - (0.5 * Math.pow(2, prevLevel))) / (Math.pow(2, prevLevel));
                    map._translatePoint.y = (map._tileTranslatePoint.y - (0.5 * Math.pow(2, prevLevel))) / (Math.pow(2, prevLevel));
                    map._scale = (Math.pow(2, prevLevel));					
                }
                else {                    
                    var fac = (map._baseScale + ((level - 1) * map.zoomFactor()));
                    map._prevPoint = { x: map._translatePoint.x, y: map._translatePoint.y };
                    map._prevScale = map._scale;
                    map._translatePoint.x -= (map._width / map._scale - map._width / fac) / 2;
                    map._translatePoint.y -= (map._height / map._scale - map._height / fac) / 2;
                    map._scale = fac;
                    map.zoomLevel(level);
                    if (map.model.enableAnimation && isAnimate) {
                        map._animate(600);
                    }                  
                }
				if(!map.model.enableAnimation || !isAnimate)
				{
				     map._applyTransform(map._scale, map._translatePoint);
                     map._refrshLayers();
                     map._resizeShape();       
				}
				 map._updateSliderValue();                  
                
            }
            else if (level <= this.minZoom()) {
                this.zoomLevel(this.minZoom());
                this.zoom(this.zoomLevel());
            }
            else if (level >= this.maxZoom()) {
                this.zoomLevel(this.maxZoom());
                this.zoom(this.zoomLevel());
            }
        },

        /**     
       * Method to reload the map.
       * @return jQuery
       * @example 
       * //refresh method for map
       * $("#container").ejMap({
       *    refresh: function () {}
       * });
       * @memberof ejMap
       * @instance
       */
        refresh: function () {

            this._unWireEvents();
            $(this._svgDocument).empty();
            if (this._svgDocument != null) {
                this._svgDocument = null;
            }
            $(this._mapContainer).empty();
            this._scale = 1;
            this._translatePoint = { x: 0, y: 0 };            
            this._height = this._mapContainer.height();
            this._width = this._mapContainer.width();
           if (this._height == 0) {
                this._height = this._mapContainer[0].parentElement.clientHeight;
            }
            if (this._width == 0) {
                this._width = this._mapContainer[0].parentElement.clientWidth;
            }
            if (this.baseMapIndex() >= this.model.layers.length) {
                this.baseMapIndex(0);
            }
            this._generatePath();           
            if (this._groupSize != null) {
                this._containerHeight = this._groupSize.maxY - this._groupSize.minY;
                this._containerWidth = this._groupSize.maxX - this._groupSize.minX;
                this._groupBorder = { x: this._groupSize.minX, y: this._groupSize.minY };
            }
            this._resizingContainer();
            this._renderMapElements();
            if (this.model.enableLayerChangeAnimation) {
                $(this._mapContainer).animate({ opacity: 1 }, 500);
            }
            
        },
       

        /**
        * Updates slider value
        * @private
        */
        _updateSliderValue: function (isAnimate) {
            var slider = this._sliderControl;
            if (isAnimate == undefined) isAnimate = this.model.enableAnimation;
            if (slider != null) {
                var obj = slider.data("ejSlider");               
                obj.option("value", this.zoomLevel());
            }
        },

        /**
        * Creates div element
        * @private
        */
        _createDivElement: function (parent, child,base,classname) {
            var parentElement = parent;
            var childElement = child;           
            childElement.appendTo(parentElement);           
            parentElement.appendTo(base);            
            this._on(childElement,ej.eventType.mouseDown,{ className: classname, map: this }, this._navigationControlPressed);
            
        },

        /**
      * Section For handling mouse click event for navigation control
      * @private
      */
        _navigationControlPressed: function (event) {
            
            event.stopPropagation();
            this._isNavigationPressed = true;
            var map = event.data.map;
            var isAnimate = map.model.enableAnimation;            
            if (event.data.className == "zoomIn") {               
                map.zoom(map.zoomLevel() + 1, true);
                if (!isAnimate) {
                    map._updateSliderValue();
                }
            }
            else if (event.data.className == "zoomOut") {               
                map.zoom(map.zoomLevel() - 1, true);
                if (!isAnimate) {
                    map._updateSliderValue();
                }
            }
            else if (event.data.className == "panLeft") {
                map.pan("left");                
            }
            else if (event.data.className == "panRight") {
                map.pan("right");
            }
            else if (event.data.className == "panTop") {
                map.pan("top");
            }
            else if (event.data.className == "panBottom") {
                map.pan("bottom");
            }
            else if (event.data.className == "home") {                
                map.zoom(1,true);
                if (!isAnimate) {
                    map._updateSliderValue();
                }
            }            
           
        },
			
		 _keyboardKeysPressed: function (event) {
            this._iskeyboardKeysPressed = true;
            var map = event.data.map;
            var isAnimate = map.model.enableAnimation;            
            if (event.ctrlKey && event.keyCode==38) {    			
                map.zoom(map.zoomLevel() + 1, true);
            }
            else if (event.ctrlKey && event.keyCode==40) {    
                map.zoom(map.zoomLevel() - 1, true);
            }
            else if (event.keyCode==37) {
                map.pan("left");                
            }
            else if (event.keyCode==39) {
                map.pan("right");
            }
            else if (event.keyCode==38) {
                map.pan("top");
            }
            else if (event.keyCode==40) {
                map.pan("bottom");
            }
		},
		
		
		
        /**     
          * Method to reload the navigation control with updated values.
          * @return jQuery	
          * @param {object} navigation Pass the navigation control instance
          * @example 
          * //Refresh navigation control method for map
          * $("#container").ejMap({
          *    refreshNavigationControl: function (navigation) {}
          * });
          * @memberof ejMap
          * @instance
          */
        refreshNavigationControl: function (navigation) {
            
            var prevNav = this._mapContainer.find("#ejNavigation");
            if (prevNav.length > 0) {
                this._mapContainer[0].removeChild(prevNav[0]);
            }
            if (this.model.navigationControl != null && this.model.navigationControl.enableNavigation) {
                if (navigation == undefined) {
                    navigation = this.model.navigationControl;
                }
                var navigationOrientation = ej.Orientation.Vertical;
                var controlSize;
                var navigationHeight = 150;
                var navigationWidth = 12;
                controlSize = { width: 90, height: 350 };
                var navigationControl = $("<div id='ejNavigation' class='e-map-navigation e-orientation-vert'/>");
                var sliderDiv = $("<div style='height:150px;width:10px;margin-top:-197px;margin-left: 34px;' />");
                if (navigation.orientation == 'horizontal') {
                    navigationOrientation = ej.Orientation.Horizontal;
                    navigationHeight = 12;
                    navigationWidth = 150;
                    controlSize = { width: 350, height: 90 };
                    navigationControl = $("<div id='ejNavigation' class='e-map-navigation e-orientation-horz' />");
                    sliderDiv = $("<div style='height:10px;width:150px;margin-top:-18px;margin-left: 137px;' />");
                }
                var baseDiv = $("<div class='e-panContainer'/>");
                var isHor = navigationOrientation == 'horizontal' ? 'Horz' : 'Vert';
                var zoominOutDiv = $("<div/>");
                var slidercontrol = $("<div  />");
                baseDiv.appendTo(navigationControl);
                zoominOutDiv.appendTo(navigationControl);
                sliderDiv.appendTo(slidercontrol);
                slidercontrol.appendTo(navigationControl);
                this._sliderControl = sliderDiv;
                var navPos = { x: 0, y: 0 };
                if (navigation.dockPosition == null || navigation.dockPosition == ej.datavisualization.Map.DockPosition.None) {
                    navPos.x = (this._width * navigation.absolutePosition.x) / 100;
                    navPos.y = (this._height * navigation.absolutePosition.y) / 100;
                } else {
                    navPos = this._getDockPosition(navigation.dockPosition, controlSize);
                }
                navigationControl.css({ "margin-left": navPos.x + "px", "margin-top": navPos.y + "px" });
                var map = this;
                $(sliderDiv).ejSlider({
                    orientation: navigationOrientation,
                    sliderType: ej.SliderType.MinRange,
                    value: 1,
                    animationSpeed: 1200,
                    minValue: this.minZoom(),
                    showTooltip: true,
                    enableAnimation: false,
                    maxValue: this.maxZoom(),
                    incrementStep: this.zoomFactor(),
                    slide: onslide,
                    change: onchange,
                    height: navigationHeight,
                    width: navigationWidth
                });
                navigationControl.appendTo(this._mapContainer);
                this._createDivElement($("<div class='e-icon1 e-incrementButton  icon_margin1' />"), $("<div class='e-icon1 nav-inc-" + isHor + "  e-innerIncrement'/>"), zoominOutDiv, "zoomIn");
                this._createDivElement($("<div class='e-icon1 e-incrementButton icon_margin2'/>"), $("<div class='e-icon1 nav-dec-" + isHor + " e-innerDecrement'/>"), zoominOutDiv, "zoomOut");
                this._createDivElement($("<div class='e-icon1 e-radialTop'/>"), $("<div class='e-icon1 e-arrowUp'/>"), baseDiv, "panTop");
                this._createDivElement($("<div class='e-icon1 e-radialLeft'/>"), $("<div class='e-icon1 e-arrowLeft'/>"), baseDiv, "panLeft");
                this._createDivElement($("<div class='e-icon1 e-radialRight'/>"), $("<div class='e-icon1 e-arrowRight'/>"), baseDiv, "panRight");
                this._createDivElement($("<div class='e-icon1 e-radialBottom'/>"), $("<div class='e-icon1 e-arrowDown'/>"), baseDiv, "panBottom");
                var homeDiv = $("<div class='e-icon1 e-home-bg'><div class='e-icon1 e-map-home'></div>");
                homeDiv.appendTo(baseDiv);
                homeDiv.mousedown({ className: "home", map: this }, this._navigationControlPressed);               
            }
			 function onchange(args) {
                    if (map != null && map._isRendered && map.zoomLevel() != args.value) {
                        map.zoom(args.value, false);
                    }

                }

                function onslide(args) {
                    if (map != null && map._isRendered && map.zoomLevel() != args.value) {
                        map.zoom(args.value, false);
                    }
                }
        },

        /**
       * Gets dock position for legend and navigation control
       * @private
       */
        _getDockPosition: function (position,size) {
            var dockPosition = { x: 0, y: 0 };
            switch (position) {
                case ej.datavisualization.Map.DockPosition.TopLeft:                   
                    break;
                case ej.datavisualization.Map.DockPosition.TopCenter:
                    dockPosition.x = (this._width / 2) - (size.width / 2);
                    break;
                case ej.datavisualization.Map.DockPosition.TopRight:
                    dockPosition.x = this._width - size.width;
                    break;
                case ej.datavisualization.Map.DockPosition.CenterLeft:
                    dockPosition.y = (this._height / 2) - (size.height / 2);
                    break;
                case ej.datavisualization.Map.DockPosition.Center:
                    dockPosition.x = (this._width / 2) - (size.width / 2);
                    dockPosition.y = (this._height / 2) - (size.height / 2);
                    break;
                case ej.datavisualization.Map.DockPosition.CenterRight:
                    dockPosition.x = this._width - size.width;
                    dockPosition.y = (this._height / 2) - (size.height / 2);
                    break;
                case ej.datavisualization.Map.DockPosition.BottomLeft:
                    dockPosition.y = this._height - size.height;
                    break;
                case ej.datavisualization.Map.DockPosition.BottomCenter:
                    dockPosition.x = (this._width / 2) - (size.width / 2);
                    dockPosition.y = this._height - size.height;
                    break;
                case ej.datavisualization.Map.DockPosition.BottomRight:
                    dockPosition.x = this._width - size.width;
                    dockPosition.y = this._height - size.height;
                    break;

            }
            return dockPosition;
        },
        
        /**
       * Renders map elements
       * @private
       */
        _renderMapElements: function () {           
            this._templateDiv = $("<div class='TemplateDiv'/>");
            this._templateDiv.appendTo(this._mapContainer);
            this._templateDiv.css({
                'pointer-events': 'none', 'overflow': 'hidden', "position":"absolute",
                'z-index': '1', 'height': this._height, 'width': this._width
            });			
            this._wireEvents();
            this.refreshLayers();       
            this.refreshNavigationControl(this.model.navigationControl);
        },
		
		_renderMapLayers:function(){
		
		 $(this._templateDiv).empty();
            var prevPathCount = 0;
            var baseLayer = this.model.layers[this.baseMapIndex()];
            if (baseLayer.layerType == ej.datavisualization.Map.LayerType.Geometry) {
                this._renderLayers(baseLayer, prevPathCount);
                if (baseLayer.shapeData != null)
                    prevPathCount = baseLayer._polygonData.length;
            }
            else {
                baseLayer._initializeLocalValues();
                var contribution = $("<div class='map-contribution'>");
                contribution[0].innerHTML = baseLayer.contribution;
                this._mapContainer.append(contribution);
            }
            for (var key = 0; key < this.model.layers[this.baseMapIndex()].subLayers.length; key++) {
                var sublayer = this.model.layers[this.baseMapIndex()].subLayers[key];
                sublayer._isBaseLayer = false;
                if (sublayer.layerType == ej.datavisualization.Map.LayerType.Geometry && sublayer.shapeData!=null) {
                    this._renderLayers(sublayer, prevPathCount);
                    prevPathCount += sublayer._polygonData.length;
                }
                else {
                    sublayer._initializeLocalValues();
                }
            }
            this.refreshMarkers();
            if (_isSVG && this.model.enableAnimation && !this._isTileMap) {
                this._refreshWithAnimation();
            }
            else {
                this._refrshLayers();
            }

		},


        /**     
          * Method to reload the shapeLayers with updated values
          * @return jQuery	
          * @example 
          * //refresh layers method for map
          * $("#container").ejMap({
          *    refreshLayers: function () {}
          * });
          * @memberof ejMap
          * @instance
          */
        refreshLayers: function () {          
		   var baseLayer = this.model.layers[this.baseMapIndex()];
		   this._processOData(baseLayer,this);          
		   
        },
		
		_processOData:function(layer,map){		    
		    if(layer.dataSource!=null){
                      if (layer.dataSource instanceof ej.DataManager) {
				          var queryPromise = layer.dataSource.executeQuery(layer.query);
			             queryPromise.done(function (e) {
			             if(e.result!=null)
				         {
                            layer.dataSource=e.result;
						    map._renderMapLayers();
				         }
			           });        
				  }
				 else
				 {
				    map._renderMapLayers();
				 }
            }
			else
			{
			  map._renderMapLayers();
			}
		}
		
		

    });

 

    var Tile = function (x, y) {
        this.X = x;
        this.Y = y;
        this.left = 0;
        this.top = 0;       
        this.height = 256;
        this.width = 256;
        this.src = null;
    };
   
    /** 
    * Layer for holding the map shapes
    * @memberof ejMap
    * @member
    * @instance
    */
    var shapeLayer = function () {
        
        
            /** 
            * Enables or disables the shape selection
             * @default true
             * @type {boolean} 
             * @example  
             * // Set the enableSelection during initialization. 			
             * 	$("#container").ejMap({layers: [{ enableSelection:true }]})
             * @example 
             * //Get or set the enableSelection after initialization:<br>
             *   //Gets the enableSelection from map.
             *   var property =$("#container").data("ejMap").model.layers[layerIndex].enableSelection;
             *   //Sets the enableSelection to map.
             *   $("#container").data("ejMap").model.layers[layerIndex].enableSelection  = true;
             * @alias ejMap#shapeLayer->enableSelection
             * @instance
             */
        this.enableSelection = true;

        /** 
            * Specifies the selection mode of the map. Accepted selection mode values are Default and Multiple.
            * @default "default"
			* @type {string}
             * @example  
             * // Set the selection mode during initialization. 			
             * 	$("#container").ejMap({layers: [{ selectionMode:'default' }]})
             * @example 
             * //Get or set the selection mode after initialization:<br>
             *   //Gets the selection mode from map.
             *   var property =$("#container").data("ejMap").model.layers[layerIndex].selectionMode;
             *   //Sets the selection mode to map.
             *   $("#container").data("ejMap").model.layers[layerIndex].selectionMode  = 'default';
             * @alias ejMap#shapeLayer->selectionMode
             * @instance
             */
        this.selectionMode = "default";

        this.key = null;

        this.bingMapType = "aerial";

        /**
        * Enables or disables the shape mouse hover
            * @default false
            * @type {boolean} 
            * @example  
            * // Set the enableMouseHover during initialization. 			
            * 	$("#container").ejMap({layers: [{ enableMouseHover:false }]})
            * @example 
            * //Get or set the enableMouseHover after initialization:<br>
            *   //Gets the enableMouseHover from map.
            *   var property =$("#container").data("ejMap").model.layers[layerIndex].enableMouseHover;
            *   //Sets the enableMouseHover to map.
            *   $("#container").data("ejMap").model.layers[layerIndex].enableMouseHover  = false;
            * @alias ejMap#shapeLayer->enableMouseHover
            * @instance
            */
        this.enableMouseHover = false;

        /** 
        * Specifies the shape data for the shape  layer
        * @type {object}
        * @example
        * // Set the shapeData of layer during initialization. 			
        * 	$("#container").ejMap({layers: [{ layerType: "geometry", shapeData: mapShapeData }]})
        * @example 
        * //Get or set the data after initialization:<br>
        *   //Gets the data from map layer.
        *   var data =$("#container").data("ejMap").model.layers[layerIndex].shapeData;
        *   //Sets the data to map layer.
        *   $("#container").data("ejMap").model.layers[layerIndex].shapeData  = mapShapeData;
        * @alias ejMap#shapeLayer->shapeData
        * @instance
        */
        this.shapeData = null;

        /**		
            * Specify markers for shape  layer.
            * @default []
            * @type {marker} 
            * @example  
            * // Set the markers during initialization. 			
            * 	$("#container").ejMap({layers: [{markers:[{label : "chennai",latitude : 13.08 ,longitude : 80.27}]}]})
            * @example 
            * //Get or set the markers after initialization:<br>
            *   //Gets the markers from map.
            *   var marker =$("#container").data("ejMap").model.layers[layerIndex].markers[markerIndex];
            *   //Sets the marker to map.
            *   $("#container").data("ejMap").model.layers[layerIndex].markers[markerIndex]  = {label : "chennai",latitude : 13.08 ,longitude : 80.27};
            * @alias ejMap#shapeLayer->markers
            * @instance
            */
        this.markers = [];

        /** 
        * Specifies the datasource for the shape  layer
        * @type {object}
        * @example
        * // Set the dataSource of layer during initialization. 			
        * 	$("#container").ejMap({layers: [{ layerType: "geometry", dataSource: source,  shapeData: mapShapeData }]})
        * @example 
        * //Get or set the dataSource after initialization:<br>
        *   //Gets the dataSource from map layer.
        *   var dataSource =$("#container").data("ejMap").model.layers[layerIndex].dataSource;
        *   //Sets the dataSource to map layer.
        *   $("#container").data("ejMap").model.layers[layerIndex].dataSource  = source;
        * @alias ejMap#shapeLayer->dataSource
        * @instance
        */
        this.dataSource = null;

        /** 
        * Specifies the url template for the OSM type map.
            * @default 'http://a.tile.openstreetmap.org/level/tileX/tileY.png'
            * @type {string} 
            * @example  
            * // Set the urlTemplate during initialization. 			
            * 	$("#container").ejMap({layers: [{ urlTemplate:'http://a.tile.openstreetmap.org/level/tileX/tileY.png' }]})
            * @example 
            * //Get or set the urlTemplate after initialization:<br>
            *   //Gets the urlTemplate from map.
            *   var property =$("#container").data("ejMap").model.layers[layerIndex].urlTemplate;
            *   //Sets the urlTemplate to map.
            *   $("#container").data("ejMap").model.layers[layerIndex].urlTemplate  = 'http://a.tile.openstreetmap.org/level/tileX/tileY.png';
            * @alias ejMap#shapeLayer->urlTemplate
            * @instance
            */
        this.urlTemplate = 'http://a.tile.openstreetmap.org/level/tileX/tileY.png';

        /** 
        * Shows or hides the tooltip for shapes
            * @default false
            * @type {boolean} 
            * @example  
            * // Set the showTooltip during initialization. 			
            * 	$("#container").ejMap({layers: [{ showTooltip:false }]})
            * @example 
            * //Get or set the showTooltip after initialization:<br>
            *   //Gets the showTooltip from map.
            *   var property =$("#container").data("ejMap").model.layers[layerIndex].showTooltip;
            *   //Sets the showTooltip to map.
            *   $("#container").data("ejMap").model.layers[layerIndex].showTooltip  = false;
            * @alias ejMap#shapeLayer->showTooltip
            * @instance
            */
        this.showTooltip = false;

        /** 
        * Specifies the tooltip template for shapes.
        * @type {string}
        * @example
        * // Set the tooltipTemplate of layer during initialization. 			
        * 	$("#container").ejMap({layers: [{ layerType: "geometry", tooltipTemplate: "Template",  shapeData: mapShapeData }]})
        * @example 
        * //Get or set the tooltipTemplate after initialization:<br>
        *   //Gets the tooltipTemplate from map.
        *   var tooltipTemplate =$("#container").data("ejMap").model.layers[layerIndex].tooltipTemplate;
        *   //Sets the tooltipTemplate to map.
        *   $("#container").data("ejMap").model.layers[layerIndex].tooltipTemplate  ="Template";
        * @alias ejMap#shapeLayer->tooltipTemplate
        * @instance
        */
        this.tooltipTemplate = null;

        /**
        * Specifies the map items template for shapes.
        * @type {string}
        * @example
        * // Set the mapItemsTemplate of layer during initialization. 			
        * 	$("#container").ejMap({layers: [{ layerType: "geometry", mapItemsTemplate: "Template",  shapeData: mapShapeData }]})
        * @example 
        * //Get or set the mapItemsTemplate after initialization:<br>
        *   //Gets the mapItemsTemplate from map.
        *   var mapItemsTemplate =$("#container").data("ejMap").model.layers[layerIndex].mapItemsTemplate;
        *   //Sets the mapItemsTemplate to map.
        *   $("#container").data("ejMap").model.layers[layerIndex].mapItemsTemplate  = "Template";
        * @alias ejMap#shapeLayer->mapItemsTemplate
        * @instance
        */
        this.mapItemsTemplate = null;

        /** 
        * Enables or disables the animation
            * @default false
            * @type {boolean} 
            * @example  
            * // Set the enableAnimation during initialization. 			
            * 	$("#container").ejMap({layers: [{ enableAnimation:false }]})
            * @example 
            * //Get or set the enableAnimation after initialization:<br>
            *   //Gets the enableAnimation from map.
            *   var property =$("#container").data("ejMap").model.layers[layerIndex].enableAnimation;
            *   //Sets the enableAnimation to map.
            *   $("#container").data("ejMap").model.layers[layerIndex].enableAnimation  = false;
            * @alias ejMap#shapeLayer->enableAnimation
            * @instance
            */
        this.enableAnimation = false;

        /** 
        * Specifies the legend setting of map layer
        * @default null
        * @type {object}
        * @example
        * // Set the legendSettings of layer during initialization. 			
        * 	$("#container").ejMap({layers: [{ layerType: "geometry", legendSettings: {showLegend:true, position: "bottomleft", PositionX: 3, PositionY:80, height:18, width:190, type:"Layers", mode:"interactive", title: "Number of Students", leftLabel:"0 M ", rightLabel:"1.4 M "},  shapeData: mapShapeData }]})
        * @example 
        * //Get or set the legendSettings after initialization:<br>
        *   //Gets the legendSettings from map.
        *   var legendSettings =$("#container").data("ejMap").model.layers[layerIndex].legendSettings;
        *   //Sets the legendSettings to map.
        *   $("#container").data("ejMap").model.layers[layerIndex].legendSettings  = {showLegend:true, position: "bottomleft", PositionX: 3, PositionY:80, height:18, width:190, type:"Layers", mode:"interactive", title: "Number of Students", leftLabel:"0 M ", rightLabel:"1.4 M "};
        * @alias ejMap#shapeLayer->legendSettings
        * @instance
        */
        this.legendSettings = null;

        /** 
        * Specifies the label setting of map layer
        * @default null
        * @type {object}
        * @example
        * // Set the labelSettings of layer during initialization. 			
        * 	$("#container").ejMap({layers: [{ layerType: "geometry", labelSettings: { showLabels: true, labelPath: 'iso_3166_2',enableSmartLabel: true },  shapeData: mapShapeData }]})
        * @example 
        * //Get or set the labelSettings after initialization:<br>
        *   //Gets the labelSettings from map.
        *   var labelSettings =$("#container").data("ejMap").model.layers[layerIndex].labelSettings;
        *   //Sets the labelSettings to map.
        *   $("#container").data("ejMap").model.layers[layerIndex].labelSettings  =  { showLabels: true, labelPath: 'iso_3166_2',enableSmartLabel: true };
        * @alias ejMap#shapeLayer->labelSettings
        * @instance
        */
        this.labelSettings = null,

        /** 
        * Specifies the map marker template for map layer.
        * @default null
        * @type {string}
        * @example
        * // Set the markerTemplate of layer during initialization. 			
        * 	$("#container").ejMap({layers: [{ layerType: "geometry", markerTemplate: "Template",  shapeData: mapShapeData }]})
        * @example 
        * //Get or set the markerTemplate after initialization:<br>
        *   //Gets the markerTemplate from map.
        *   var markerTemplate =$("#container").data("ejMap").model.layers[layerIndex].markerTemplate;
        *   //Sets the markerTemplate to map.
        *   $("#container").data("ejMap").model.layers[layerIndex].markerTemplate  = "Template";
        * @alias ejMap#shapeLayer->markerTemplate
        * @instance
        */
        this.markerTemplate = null;       

        /** 
        * Shows or hides the map items.
            * @default false
            * @type {boolean} 
            * @example  
            * // Set the showMapItems during initialization. 			
            * 	$("#container").ejMap({layers: [{ showMapItems:false }]})
            * @example 
            * //Get or set the showMapItems after initialization:<br>
            *   //Gets the showMapItems from map.
            *   var property =$("#container").data("ejMap").model.layers[layerIndex].showMapItems;
            *   //Sets the showMapItems to map.
            *   $("#container").data("ejMap").model.layers[layerIndex].showMapItems  = false;
            * @alias ejMap#shapeLayer->showMapItems
            * @instance
            */
		this.showMapItems = false;

        /** 
        * Specifies the map type.
            * @default 'geometry'
            * @type {string} 
            * @example  
            * // Set the layerType during initialization. 			
            * 	$("#container").ejMap({layers: [{ layerType:'geometry' }]})
            * @example 
            * //Get or set the layerType after initialization:<br>
            *   //Gets the layerType from map.
            *   var property =$("#container").data("ejMap").model.layers[layerIndex].layerType;
            *   //Sets the layerType to map.
            *   $("#container").data("ejMap").model.layers[layerIndex].layerType  = 'geometry';
            * @alias ejMap#shapeLayer->layerType
            * @instance
            */
        this.layerType = 'geometry';
        /**
         * Specifies inbuilt color palette		
		 * @private
         */
        this._colorPaletteSettings = {
            'Palette1':
            {
                'highlightColor': '#F7CD1C',
                'highlightStroke': 'white',
                'highlightBorderWidth': '1',
                'SelectionColor': '#F96C0D',
                'SelectionStroke': 'white',
                'SelectionStrokeWidth': '2.5'
            },
            'Palette2':
            {
                'highlightColor': '#68A3EA',
                'highlightStroke': 'White',
                'highlightBorderWidth': '1',
                'SelectionColor': '#116EF4',
                'SelectionStroke': 'White',
                'SelectionStrokeWidth': '2.5'
            },
            'Palette3':
            {
                'highlightColor': '#CCCCCC',
                'highlightStroke': 'white',
                'highlightBorderWidth': '1',
                'SelectionColor': '#4D4D4D',
                'SelectionStroke': 'white',
                'SelectionStrokeWidth': '2.5'
            }
        };
        this.colorPalettes = {
            'Palette1': ['#4A3825', '#736F3D','#F2DABD','#BF9D7E','#7F6039','#7F715F','#70845D','#CC995C','#736F3D','#89541B'],
            'Palette2': ['#E51400', '#730202','#EF6535','#C63477','#BF004D','#F0A30B','#CE1B1B','#97993D','#D6BF38','#835A2C'],
            'Palette3': ['#A4C400', '#008B00','#1BA0E2','#0050EF','#AA00FF','#D90073','#E51400','#F96800','#E3C800','#A20026']
        };
        /**
         * Specifies previous palette index		
		 * @private
         */
        this._prevPaletteIndex = 0;
        /**
         * Specifies new map bounds	
		 * @private
         */
        this._newBounds = [];
        /** 
        * Specifies the sub shape  layers
            * @default []
            * @type {shapeLayer} 
            * @example  
            * // Set the subLayers during initialization. 			
            * 	$("#container").ejMap({layers: [{ layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" },subLayers: [{shapeDataPath: "pathName", shapePropertyPath: "tableFieldName", mapItemsTemplate: 'Template', showMapItems: true, enableMouseHover: true, dataSource: mapDataSource, shapeSettings: { fill: "#9FD0D3", strokeThickness: "0.2", stroke: "white", highlightColor: "#63B7B7", },  shapeData: mapShapeData }, shapeData: mapShapeData }]})
            * @example 
            * //Get or set the layer after initialization:<br>
            *   //Gets the layer from map.
            *   var layer =$("#container").data("ejMap").model.layers[layerIndex];
            *   //Sets the layer to map.
            *   $("#container").data("ejMap").model.layers[layerIndex]  = { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" },subLayers: [{shapeDataPath: "pathName", shapePropertyPath: "tableFieldName", mapItemsTemplate: 'Template', showMapItems: true, enableMouseHover: true, dataSource: mapDataSource, shapeSettings: { fill: "#9FD0D3", strokeThickness: "0.2", stroke: "white", highlightColor: "#63B7B7", },  shapeData: mapSubShapeData }, shapeData: mapShapeData };
            * @alias ejMap#shapeLayer->subLayers
            * @instance
            */
        this.subLayers = [];
        
       
        /** 
        * Specifies the shape settings of map layer
        * @type {object}
        * @example
        * // Set the shapeSettings of layer during initialization. 			
        * 	$("#container").ejMap({layers: [{ layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: Africa }]})
        * @example 
        * //Get or set the shapeSettings after initialization:<br>
        *   //Gets the shapeSettings from map.
        *   var shapeSettings =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings;
        *   //Sets the shapeSettings to map.
        *   $("#container").data("ejMap").model.layers[layerIndex]  = { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: Africa };
        * @alias ejMap#shapeLayer->shapeSettings
        * @instance
        */
        this.shapeSettings = {
            /**		
			* Specifies the mouse hover color of the shape layer in map
            * @default "gray"
			* @type {string}
			* @example 
            * //To set highlightColor API value during initialization 
			*   $("#container").ejMap({layers:{shapeSettings: {highlightColor:'gray'}}});
            * @example 
			* //Get or set the highlightColor API, after initialization:<br>
			*	//Gets the highlightColor value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.highlightColor;<br> 	
            *	//Sets the highlightColor value 
			*	 $("#container").data("ejMap").model.layers[0].shapeSettings.highlightColor='gray'; 
            * @alias ejMap#shapeLayer->shapeSettings->highlightColor
			* @instance
            */
            highlightColor: "gray",

            /**		
			* Specifies the mouse over width of the shape  layer in map
            * @default 1
			* @type {number}
			* @example 
            * //To set highlightBorderWidth API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {highlightBorderWidth:1}}});
            * @example 
			* //Get or set the highlightBorderWidth API, after initialization:<br>
			*	//Gets the highlightBorderWidth value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.highlightBorderWidth;<br> 	
            *	//Sets the highlightBorderWidth value 
			*	 $("#container").data("ejMap").model.layers[0].shapeSettings.highlightBorderWidth=1; 
			* @alias ejMap#shapeLayer->shapeSettings->highlightBorderWidth
			* @instance
            */
            highlightBorderWidth: 1,

            /**		
			* Specifies the shape selection color of the shape layer in map
            * @default "gray"
			* @type {string}
			* @example 
            * //To set selectionColor API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {selectionColor:'gray'}}});
            * @example 
			* //Get or set the selectionColor API, after initialization:<br>
			*	//Gets the selectionColor value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.selectionColor;<br> 	
            *	//Sets the selectionColor value 
			*	 $("#container").data("ejMap").model.layers[0].shapeSettings.selectionColor='gray'; 
			* @alias ejMap#shapeLayer->shapeSettings->selectionColor
			* @instance
            */
            selectionColor: "gray",

            /**		
			* Specifies the shape fill color of the shape layer in map
            * @default "#E5E5E5"
			* @type {string}
			* @example 
            * //To set fill API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {fill:'#E5E5E5'}}});
            * @example 
			* //Get or set the fill API, after initialization:<br>
			*	//Gets the fill value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.fill;<br> 	
            *	//Sets the fill value 
			*	 $("#container").data("ejMap").model.layers[0].shapeSettings.fill='#E5E5E5'; 
			* @alias ejMap#shapeLayer->shapeSettings->fill
			* @instance
            */
            fill: "#E5E5E5",

            /**		
			* Specifies the shape stroke thickness value of the shape layer in map
            * @default "0.2"
			* @type {string}
			* @example 
            * //To set strokeThickness API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {strokeThickness:'0.2'}}});
            * @example 
			* //Get or set the strokeThickness API, after initialization:<br>
			*	//Gets the strokeThickness value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.strokeThickness;<br> 	
            *	//Sets the strokeThickness value 
			*	 $("#container").data("ejMap").model.layers[0].shapeSettings.strokeThickness='0.2'; 
			* @alias ejMap#shapeLayer->shapeSettings->strokeThickness
			* @instance
            */
            strokeThickness: "0.2",

            /**		
			* Specifies the shape stroke color of the shape layer in map
            * @default "#C1C1C1"
			* @type {string}
			* @example 
            * //To set stroke API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {stroke:'#C1C1C1'}}});
            * @example 
			* //Get or set the stroke API, after initialization:<br>
			*	//Gets the stroke value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.stroke;<br> 	
            *	//Sets the stroke value 
			*	 $("#container").data("ejMap").model.layers[0].shapeSettings.stroke='#C1C1C1'; 
			* @alias ejMap#shapeLayer->shapeSettings->stroke
			* @instance
            */
            stroke: "#C1C1C1",

            /**		
			* Specifies the shape color palette value of the shape  layer in map. Accepted colorPalette values are palette1, palette2, palette3 and custompalette.
            * @default "palette1"
			* @type {string}
			* @example 
            * //To set colorPalette API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {colorPalette:'palette1'}}});
            * @example 
			* //Get or set the colorPalette API, after initialization:<br>
			*	//Gets the colorPalette value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.colorPalette;<br> 	
            *	//Sets the colorPalette value 
			*	 $("#container").data("ejMap").model.layers[0].shapeSettings.colorPalette='palette1'; 
			* @alias ejMap#shapeLayer->shapeSettings->colorPalette
			* @instance
            */
            colorPalette: 'palette1',

            /**		
			* Specifies the mouse over stroke color of the shape  layer in map
            * @default "#C1C1C1"
			* @type {string}
			* @example 
            * //To set highlightStroke API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {highlightStroke:'#C1C1C1'}}});
            * @example 
			* //Get or set the highlightStroke API, after initialization:<br>
			*	//Gets the highlightStroke value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.highlightStroke;<br> 	
            *	//Sets the highlightStroke value 
			*	 $("#container").data("ejMap").model.layers[0].shapeSettings.highlightStroke='#C1C1C1'; 
			* @alias ejMap#shapeLayer->shapeSettings->highlightStroke
			* @instance
            */
            highlightStroke: "#C1C1C1",

            /**		
			* Specifies the shape selection stroke color of the shape  layer in map
            * @default "#C1C1C1"
			* @type {string}
			* @example 
            * //To set selectionStroke API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {selectionStroke:'#C1C1C1'}}});
            * @example 
			* //Get or set the selectionStroke API, after initialization:<br>
			*	//Gets the selectionStroke value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.selectionStroke;<br> 	
            *	//Sets the selectionStroke value 
			*	 $("#container").data("ejMap").model.layers[0].shapeSettings.selectionStroke='#C1C1C1'; 
			* @alias ejMap#shapeLayer->shapeSettings->selectionStroke
			* @instance
            */
            selectionStroke: "#C1C1C1",

            /**		
			* Specifies the shape selection stroke width of the shape  layer in map
            * @default 1
			* @type {number}
			* @example 
            * //To set selectionStrokeWidth API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {selectionStrokeWidth:1}}});
            * @example 
			* //Get or set the selectionStrokeWidth API, after initialization:<br>
			*	//Gets the selectionStrokeWidth value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.selectionStrokeWidth;<br> 	
            *	//Sets the selectionStrokeWidth value 
			*	 $("#container").data("ejMap").model.layers[0].shapeSettings.selectionStrokeWidth=1; 
			* @alias ejMap#shapeLayer->shapeSettings->selectionStrokeWidth
			* @instance
            */
            selectionStrokeWidth: 1,

            /**		
			* Specifies the shape color valuePath of the shape  layer in map
            * @default null
			* @type {string}
			* @example 
            * //To set colorValuePath  API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {colorValuePath :'sales'}}});
            * @example 
			* //Get or set the colorValuePath  API, after initialization:<br>
			*	//Gets the colorValuePath  value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.colorValuePath ;<br> 	
            *	//Sets the colorValuePath  value 
			*	 $("#container").data("ejMap").model.layers[0].shapeSettings.colorValuePath ='sales'; 
			* @alias ejMap#shapeLayer->shapeSettings->colorValuePath 
			* @instance
            */
            colorValuePath : null,


            /**		
			* Specifies the shape valuePath of the shape  layer in map
            * @default null
			* @type {string}
			* @example 
            * //To set valuePath API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {valuePath:'name'}}});
            * @example 
			* //Get or set the valuePath API, after initialization:<br>
			*	//Gets the valuePath value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.valuePath;<br> 	
            *	//Sets the valuePath value 
			*	 $("#container").data("ejMap").model.layers[0].shapeSettings.valuePath='name'; 
			* @alias ejMap#shapeLayer->shapeSettings->valuePath
			* @instance
            */
            valuePath: null,

            /**		
			* Enables or Disables the gradient colors for map shapes.
            * @default false
			* @type {boolean}
			* @example 
            * //To set enableGradient API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {enableGradient:false}}});
            * @example 
			* //Get or set the enableGradient API, after initialization:<br>
			*	//Gets the enableGradient value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.enableGradient;<br> 	
            *	//Sets the enableGradient value 
			*	 $("#container").data("ejMap").model.layers[0].shapeSettings.enableGradient=false; 
			* @alias ejMap#shapeLayer->shapeSettings->enableGradient
			* @instance
            */
            enableGradient: false,
        
            /**		
			* Specifies the colorMappings of the shape  layer in map
            * @default null
			* @type {object}
			* @example 
            * //To set colorMappings API value during initialization 
			*   $("#container").ejMap({layers:{ shapeSettings: {colorMappings:{rangeColorMapping:{from: 0,to: 100000,gradientColors: ["#9CBF4E", "#B8CE7B"]}}}}});
            * @example 
			* //Get or set the colorMappings API, after initialization:<br>
			*	//Gets the colorMappings value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.colorMappings;<br> 	
            *	//Sets the colorMappings value 
			*	$("#container").data("ejMap").model.layers[0].shapeSettings.colorMappings={rangeColorMapping:{from: 0,to: 100000,gradientColors: ["#9CBF4E", "#B8CE7B"]}}; 
			* @alias ejMap#shapeLayer->shapeSettings->colorMappings
			* @instance
            */
            colorMappings: null,

            /**		
			* Enables or Disables the auto fill colors for shape  layer in map. When this property value set to true, shapes will be filled with palette colors.
            * @default false
			* @type {boolean}
			* @example 
            * //To set autoFill API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {autoFill:false}}});
            * @example 
			* //Get or set the autoFill API, after initialization:<br>
			*	//Gets the autoFill value 
            *   var shapeProperty =$("#container").data("ejMap").model.layers[layerIndex].shapeSettings.autoFill;<br> 	
            *	//Sets the autoFill value 
			*	 $("#container").data("ejMap").model.layers[0].shapeSettings.autoFill=false; 
			* @alias ejMap#shapeLayer->shapeSettings->autoFill
			* @instance
            */
            autoFill: false
        };

        /** 
        * Specifies the bubble settings for map
        * @type {object}
        * @example 
        * // Set the bubbleSettings of layer during initialization. 			
        * 	$("#container").ejMap({layers: [{ layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" },bubbleSettings:{ valuePath: "valuePath", minValue: 20, maxValue: 30, color: "#379F64",}, shapeData: mapShapeData }]})
        * @example 
        * //Get or set the bubbleSettings after initialization:<br>
        *   //Gets the bubbleSettings from map.
        *   var bubbleSettings =$("#container").data("ejMap").model.layers[layerIndex].bubbleSettings;
        *   //Sets the bubbleSettings to map.
        *   $("#container").data("ejMap").model.layers[layerIndex].bubbleSettings  = { valuePath: "valuePath", minValue: 20, maxValue: 30, color: "#379F64"};
        * @instance
        * @alias ejMap#shapeLayer->bubbleSettings
        */
        this.bubbleSettings = {

            /**		
			* Specifies the minimum size value of bubbles for shape  layer in map
            * @default "10"
			* @type {string}
			* @example 
            * //To set minValue API value during initialization 
			*   $("#container").ejMap({layers: {bubbleSettings: {minValue:'10'}}});
            * @example 
			* //Get or set the minValue API, after initialization:<br>
			*	//Gets the minValue value 
            *   var bubbleProperty =$("#container").data("ejMap").model.layers[layerIndex].bubbleSettings.minValue;<br> 	
            *	//Sets the minValue value 
			*	$("#container").data("ejMap").model.layers[0].bubbleSettings.minValue='10'; 
			* @alias ejMap#shapeLayer->bubbleSettings->minValue
			* @instance
            */
            minValue: "10",

            /**		
			* Specifies the maximum size value of bubbles for shape  layer in map
            * @default "20"
			* @type {string}
			* @example 
            * //To set maxValue API value during initialization 
			*   $("#container").ejMap({layers: {bubbleSettings: {maxValue:'20'}}});
            * @example 
			* //Get or set the maxValue API, after initialization:<br>
			*	//Gets the maxValue value 
            *   var bubbleProperty =$("#container").data("ejMap").model.layers[layerIndex].bubbleSettings.maxValue;<br> 	
            *	//Sets the maxValue value 
			*	$("#container").data("ejMap").model.layers[0].bubbleSettings.maxValue='20'; 
			* @alias ejMap#shapeLayer->bubbleSettings->maxValue
			* @instance
            */
            maxValue: "20",

            /**		
			* Specifies the mouse hover color of the shape  layer in map
            * @default "gray"
			* @type {string}
			* @example 
            * //To set color API value during initialization 
			*   $("#container").ejMap({layers:{bubbleSettings: {color:'gray'}}});
            * @example 
			* //Get or set the color API, after initialization:<br>
			*	//Gets the color value 
            *   var bubbleProperty =$("#container").data("ejMap").model.layers[layerIndex].bubbleSettings.color;<br> 	
            *	//Sets the color value 
			*	$("#container").data("ejMap").model.layers[0].bubbleSettings.color='gray'; 
			* @alias ejMap#shapeLayer->bubbleSettings->color
			* @instance
            */
            color: "gray",

            /**		
			* Specifies the bubble color valuePath of the shape  layer in map
            * @default null
			* @type {string}
			* @example 
            * //To set colorValuePath  API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {colorValuePath :'sales'}}});
            * @example 
			* //Get or set the colorValuePath  API, after initialization:<br>
			*	//Gets the colorValuePath  value 
            *   var bubbleProperty =$("#container").data("ejMap").model.layers[layerIndex].bubbleSettings.colorValuePath ;<br> 	
            *	//Sets the colorValuePath  value 
			*	$("#container").data("ejMap").model.layers[0].bubbleSettings.colorValuePath ='sales'; 
			* @alias ejMap#shapeLayer->bubbleSettings->colorValuePath 
			* @instance
            */
            colorValuePath : null,

            /**		
			* Specifies the bubble valuePath of the shape  layer in map
            * @default null
			* @type {string}
			* @example 
            * //To set valuePath API value during initialization 
			*   $("#container").ejMap({layers: {shapeSettings: {valuePath:'name'}}});
            * @example 
			* //Get or set the valuePath API, after initialization:<br>
			*	//Gets the valuePath value 
            *   var bubbleProperty =$("#container").data("ejMap").model.layers[layerIndex].bubbleSettings.valuePath;<br> 	
            *	//Sets the valuePath value 
			*	$("#container").data("ejMap").model.layers[0].bubbleSettings.valuePath='name'; 
			* @alias ejMap#shapeLayer->bubbleSettings->valuePath
			* @instance
            */
            valuePath: null,

            /**		
			* Specifies the colorMappings of the shape  layer in map
            * @default null
			* @type {object}
			* @example 
            * //To set colorMappings API value during initialization 
			*   $("#container").ejMap({layers:{ bubbleSettings: {colorMappings:{rangeColorMapping:{from: 0,to: 100000,gradientColors: ["#9CBF4E", "#B8CE7B"]}}}}});
            * @example 
			* //Get or set the colorMappings API, after initialization:<br>
			*	//Gets the colorMappings value 
            *   var bubbleProperty =$("#container").data("ejMap").model.layers[layerIndex].bubbleSettings.colorMappings;<br> 	
            *	//Sets the colorMappings value 
			*	$("#container").data("ejMap").model.layers[0].bubbleSettings.colorMappings={rangeColorMapping:{from: 0,to: 100000,gradientColors: ["#9CBF4E", "#B8CE7B"]}}; 
			* @alias ejMap#shapeLayer->bubbleSettings->colorMappings
			* @instance
            */
            colorMappings: null,

            /**		
			* Specifies the tooltip visibility  status of the shape  layer in map
            * @default false
			* @type {boolean}
			* @example 
            * //To set showTooltip API value during initialization 
			*   $("#container").ejMap({layers: {bubbleSettings: {showTooltip:false}}});
            * @example 
			* //Get or set the showTooltip API, after initialization:<br>
			*	//Gets the showTooltip value 
            *   var bubbleProperty =$("#container").data("ejMap").model.layers[layerIndex].bubbleSettings.showTooltip;<br> 	
            *	//Sets the showTooltip value 
			*	$("#container").data("ejMap").model.layers[0].bubbleSettings.showTooltip=false; 
			* @alias ejMap#shapeLayer->bubbleSettings->showTooltip
			* @instance
            */
            showTooltip: false,

            /**		
			* Specifies the bubble tooltip template of the shape  layer in map
            * @default null
			* @type {string}
			* @example 
            * //To set tooltipTemplate API value during initialization 
			*   $("#container").ejMap({layers: {bubbleSettings: {tooltipTemplate:'template'}}});
            * @example 
			* //Get or set the tooltipTemplate API, after initialization:<br>
			*	//Gets the tooltipTemplate value 
            *   var bubbleProperty =$("#container").data("ejMap").model.layers[layerIndex].bubbleSettings.tooltipTemplate;<br> 	
            *	//Sets the tooltipTemplate value 
			*	$("#container").data("ejMap").model.layers[0].bubbleSettings.tooltipTemplate='template'; 
			* @alias ejMap#shapeLayer->bubbleSettings->tooltipTemplate
			* @instance
            */
            tooltipTemplate: null
        };
    };

    shapeLayer.prototype =
    {
        /**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            dataSource: "data",
            markers: "array",
            subLayers: "array",
            shapeSettings: {
                colorMappings: "array"
            },
            bubbleSettings: {
                colorMappings: "array"
            }

        },

        /**
       * Initializes local values of the shape  layer
       * @private
       */
        _initializeLocalValues:function()
        {
            this._svgns = "http://www.w3.org/2000/svg";
            this._bounds = [];
            this._prevSelectedShapes = [];
            this._prevSelectedShapeDatas = [];
            this._prevSelectedLegends = [];
            this._isBaseLayer = true;
            this._prevHoverdLegend = null;
            this._prevHoveredShape = null;
            this._labelCollection = [];
            this._scrollBar = null;
            this._mapShapes = [];
            this._bubbles = [];
            this._labelBounds = [];            
            this._bubbleCount = 0;
            this._mapItems = [];           
            this._mapMarkers = [];
            this._smartLabels = [];
            this._labelData = [];
            this._interactiveArrow = null;
            this._legendRects = [];

        },
        
        /**
       * Generates marker for layers
       * @private
       */
        _generateMarkerForLayers: function (map) {
            this._mapMarkers = [];
            var rootTop = map._rootgroup.getBoundingClientRect().top;
            var rootLeft = map._rootgroup.getBoundingClientRect().left;
            for (var key = 0; key < this.markers.length; key++) {
                var markerObeject = this.markers[key];               
                if (this.markerTemplate != null) {
                    var markerTemplateDiv = $('.markerTemplateDiv');
                    markerTemplateDiv = $("<div class='mapMarker' style='display:block;position:absolute;pointer-events: stroke;'></div>");                   
                    map._templateDiv.append(markerTemplateDiv);
                    var htmlString = $("#" + this.markerTemplate).render(markerObeject);
                    $(markerTemplateDiv).html(htmlString);
                    map._on($(markerTemplateDiv), ej.eventType.mouseDown, { marker: $(markerTemplateDiv), data: markerObeject }, map._markerPressed);
                    this._mapMarkers.push(markerTemplateDiv);
                }
                else {                    
                    var markerItem = $(' <div class="mapMarker" style="display:block;position:absolute;pointer-events: stroke;"><label>' + markerObeject.label + '</label></div>');// document.createElementNS(this._svgns, "text");
                    if (_isSVG) {
                        map._templateDiv.append(markerItem);
                    }
                    else {
                        markerItem.appendTo(map._templateDiv);
                    }
                    map._on($(markerItem), ej.eventType.mouseDown, { marker: $(markerItem), data: markerObeject }, map._markerPressed);
                    this._mapMarkers.push(markerItem);

                }
            }            
        },

        _contains : function(array,actualobj) {
            var length = array.length;
            if (length > 0) {
                while (length--) {
                    if (array[length] === actualobj) {
                        return true;
                    }
                }
            }
            return false;
        },

        /**
       * Clears shape width
       * @private
       */
        _clearShapeWidth: function (scale) {
            if (scale == null) scale = 1;
            for (var index = 0; index < this._mapShapes.length; index++) {
                var mapshape = this._mapShapes[index];
                if (!this._contains(this._prevSelectedShapes,mapshape.shape)) {
                    if (_isSVG) {
                        mapshape.shape.setAttribute("fill", mapshape.shape.getAttribute("nodeValue"));
                        mapshape.shape.setAttribute("stroke-width", (this.shapeSettings.strokeThickness / scale));
                        mapshape.shape.setAttribute("stroke", this.shapeSettings.stroke);
                    }
                    else {
                        mapshape.shape.fillcolor = mapshape.shape.style.behavior;
                        mapshape.shape.strokeweight = this.shapeSettings.strokeThickness;
                        mapshape.shape.strokecolor = this.shapeSettings.stroke;
                    }
                }
            }
            


        },
        
        /**
       * Converts RGB to Hex decimal values
        * @private
       */
        _rgbToHex: function(R, G, B) {
             return "#" + this._toHex(R) + this._toHex(G) + this._toHex(B);
        },
        
        /**
       * Converts to Hex decimal values
        * @private
       */
        _toHex: function (n) {
            var charstr = "0123456789ABCDEF";
            n = parseInt(n, 10);
            if (isNaN(n)) return "00";
            n = Math.max(0, Math.min(n, 255));
            return charstr.charAt((n - n % 16) / 16)
                + charstr.charAt(n % 16);
        },
        
        /**
       * Converts Hex decimal values to Red value
        * @private
       */
        _hexToR: function(h) {
             return parseInt((this._cropHex(h)).substring(0, 2), 16);
        },
        
        /**
       * Converts Hex decimal values to Green value
        * @private
       */
        _hexToG: function(h) {
             return parseInt((this._cropHex(h)).substring(2, 4), 16);
        },
        
        /**
      * Converts Hex decimal values to Blue value
       * @private
      */
        _hexToB: function(h) {
             return parseInt((this._cropHex(h)).substring(4, 6), 16);
        },

        /**
      * crops Hex value
       * @private
      */
        _cropHex: function(h) {
             return (h.charAt(0) == "#") ? h.substring(1, 7) : h;
        },
        
        /**
        * Gets range color values
        * @private
        */
        _getRangeColorValues: function(range, start, end) {
            var rangeColorValues = [];
            rangeColorValues.push(start);
            if (start > end) {
                var rangeValue = (start - end) / (range-1);
                for (var i = range; i > 2; i--) {
                    start = start - rangeValue;
                    rangeColorValues.push(start);
                }
            }
            else {
                var rangeValue = (end - start) / (range-1);
                for (var i = 2; i < range; i++) {
                    start = start + rangeValue;
                    rangeColorValues.push(start + rangeValue);
                }
            }
            rangeColorValues.push(end);
            return rangeColorValues;
        },
        
        /**
        * Generate gradient collection
        * @private
        */
        _generateGradientCollection: function(gradientColors) {
            var gradientCollection = [];
            var startRangeColor = gradientColors[0];
            var endRangeColor = gradientColors[gradientColors.length - 1];
            var startR = this._hexToR(startRangeColor);
            var startG = this._hexToG(startRangeColor);
            var startB = this._hexToB(startRangeColor);
            var endR = this._hexToR(endRangeColor);
            var endG = this._hexToG(endRangeColor);
            var endB = this._hexToB(endRangeColor);
            var range = 10;
            var rRange = this._getRangeColorValues(range, startR, endR);
            var gRange = this._getRangeColorValues(range, startG, endG);
            var bRange = this._getRangeColorValues(range, startB, endB);
            for (var i = 0; i < range; i++) {
                gradientCollection.push(this._rgbToHex(rRange[i], gRange[i], bRange[i]));
            }
            return gradientCollection;
        },
        
        /**
        * Creates labels
        * @private
        */
        _createLabel:function(content, xpos, ypos) {
            var label = $("<div></div>"); // document.createElementNS(this._svgns, "text");
            label[0].innerHTML = content;
            label.css({
                "font-family": "Segoe UI",
                "pointer-events": "none",
                "text-align": "center",
                "margin-left": xpos + "px",
                "margin-top": ypos + "px",
                "position": "absolute"
            });
            return label;
        },
        
        /**
        * Creates interactive arrow for interactive legend
        * @private
        */
        _createInteractiveArrow: function (xpos, ypos) {
            
            var interactiveElement = $("<div class='e-icon1 e-interactiveArrow'></div>");
            //temporary code
            interactiveElement[0].innerHTML = "&#9650";
            
            interactiveElement.css({
                "margin-left": xpos + "px",
                "margin-top": ypos + "px",
                "position": "absolute",
                //temporary code
                "color": "#444444"
            });
            return interactiveElement;
        },

        /**
        * Generates legend for maps
        * @private
        */
        _generateLegends: function (map) {
            if ((this.legendSettings.showLegend == undefined || this.legendSettings.showLegend) && !this.shapeSettings.autoFill) {
                var xpos = 10;
                var ypos = 10;
                var _legendheight = this.legendSettings.height;
                var _legendwidth = this.legendSettings.width;
                var legenddiv = $("<div/>");
                if (_isSVG) {
                    legenddiv.appendTo(map._templateDiv);
                }
                else {
                    map._templateDiv.append(legenddiv);
                }
                var totalwidth = 0;
                var totalheight = 0;
                var isRange = true;
                var mappings = null;
                if (this.shapeSettings.colorMappings.rangeColorMapping != undefined) {
                    mappings = this.shapeSettings.colorMappings.rangeColorMapping;
                } else if (this.shapeSettings.colorMappings.equalColorMapping != undefined) {
                    mappings = this.shapeSettings.colorMappings.equalColorMapping;
                    isRange = false;
                }

                if ((this.legendSettings.type == undefined || this.legendSettings.type == 'Layers') && this.shapeSettings.colorMappings != null
                   && (this.legendSettings.mode == undefined || this.legendSettings.mode == ej.datavisualization.Map.LegendMode.Default || (this.legendSettings.mode == ej.datavisualization.Map.LegendMode.Interactive
                   && this.shapeSettings.colorMappings.equalColorMapping != null))) {
                    
                    if (this.legendSettings.height == undefined)
                        _legendheight = 20;
                    if (this.legendSettings.width == undefined)
                        _legendwidth = 20;

                    for (var key = 0; key < mappings.length; key++) {
                        var colorMapping = mappings[key];
                        if (!colorMapping.hideLegend) {
                            var rect = $("<div class='e-mapLegend'/>");
                            rect.css({
                                "height": _legendheight + "px",
                                "width": _legendwidth + "px",
                                "background-color": colorMapping.color,
                                "margin-left": xpos + "px",
                                "margin-top": ypos + "px",
                                "position": "absolute"
                            });

                            var textcon = this._createLabel(colorMapping.legendLabel, xpos + _legendwidth + 5, ypos);
                            
                            if (colorMapping.legendLabel != null) {
                                textcon[0].innerText= colorMapping.legendLabel;

                            } else {
                                colorMapping.legendLabel = textcon[0].innerText = isRange ? colorMapping.from : colorMapping.value;
                            }
                            if (_isSVG) {
                                rect.appendTo(legenddiv);
                                textcon.appendTo(legenddiv);
                             }
                             else {
                                 legenddiv.append(rect);
                                 legenddiv.append(textcon);
                            }

                            if (totalwidth < (colorMapping.legendLabel.length * 10) + rect.width())
                                totalwidth = (colorMapping.legendLabel.length * 10) + rect.width();
                            var textHeight = textcon.height();
                            var rectHeight = rect.height();
                            if (textHeight > rectHeight) {
                                ypos += (textHeight + 5);
                            } else {
                                ypos += (rectHeight + 5);
                            }
                        }
                    }
                    totalheight = ypos;
                } else if ((this.legendSettings.type==undefined || this.legendSettings.type == 'Layers') && this.legendSettings.mode == ej.datavisualization.Map.LegendMode.Interactive && this.shapeSettings.colorMappings != null) {
                    var textcon = '';
                    
                    if (this.legendSettings.height == undefined)
                        _legendheight = 18;
                    if (this.legendSettings.width == undefined)
                        _legendwidth = 150;

                    if (this.legendSettings.leftLabel == null)
                        this.legendSettings.leftLabel = '';
                    if (this.legendSettings.title != null) {
                        
                        var newxpos = xpos + this.legendSettings.leftLabel.length * 10;
                        var textcon = this._createLabel(this.legendSettings.title, newxpos, ypos);
                        
                        if (_isSVG)
                            textcon.appendTo(legenddiv);
                        else
                            legenddiv.append(textcon);
                        ypos += 25;
                    }

                    if (this.legendSettings.leftLabel != null) {
                        var textcon = this._createLabel(this.legendSettings.leftLabel, xpos, ypos - 3);

                        if (_isSVG)
                            textcon.appendTo(legenddiv);
                        else
                            legenddiv.append(textcon);
                        xpos = xpos + this.legendSettings.leftLabel.length * 10;

                        var interactiveElement = this._createInteractiveArrow(xpos, ypos + _legendheight);
                        interactiveElement.appendTo(legenddiv);
                        this._interactiveArrow = interactiveElement;
                    }

                    var _legendgroup = null;
                    if (!_isSVG && this.shapeSettings.enableGradient) {
                        _legendgroup = map._createGroup(false, "legendGroup");
                        _legendgroup.style.left = 0 + 'px';
                        _legendgroup.style.top = 0 + 'px';
                        _legendgroup.style.position = "relative";
                        legenddiv.append(_legendgroup);
                    }

                    for (var key = 0; key < mappings.length; key++) {
                        var colorMapping = mappings[key];
                        if (!colorMapping.hideLegend) {
                            var gradientCollection = [];
                            if (this.shapeSettings.enableGradient) {
                                gradientCollection = this._generateGradientCollection(colorMapping.gradientColors);
                            }
                            
                            var obj = {};
                            if (this.shapeSettings.enableGradient) {
                                if (_isSVG) {
                                    var canvas = $("<canvas/>");
                                    var ctx = canvas[0].getContext("2d");
                                    var grd = ctx.createLinearGradient(0, 0, 300, 0);

                                    var temp = 0;
                                    for (var i = 0; i < 10; i++) {
                                        temp = temp + (1 / 10);
                                        if (i == 0) {
                                            grd.addColorStop(0, colorMapping.gradientColors[0]);
                                            grd.addColorStop(temp, gradientCollection[i]);
                                        } else if (i == gradientCollection.length - 1) {
                                            grd.addColorStop(temp - (1 / 10), gradientCollection[i]);
                                            grd.addColorStop(temp, colorMapping.gradientColors[1]);
                                        } else {
                                            grd.addColorStop(temp - (1 / 10), gradientCollection[i]);
                                            grd.addColorStop(temp, gradientCollection[i + 1]);
                                        }
                                    }
                                    ctx.fillStyle = grd;
                                    ctx.fillRect(0, 0, 300, 300);
                                    canvas.css({
                                        "height": _legendheight + "px",
                                        "width": (_legendwidth / mappings.length) + "px",
                                        "margin-left": xpos + "px",
                                        "margin-top": ypos + "px",
                                        "opacity":"0.9",
                                        "filter":"alpha(opacity=90)", /* For IE8 and earlier */
                                        "position": "absolute"
                                    });
                                    canvas.appendTo(legenddiv);
                                } else {
                                    var legendID = "legend" + key;
                                    var legendHtmlString = '<v:rect id=' + legendID + ' display="block" style="position:absolute;top: ' + (ypos - 2) + 'px;left:' + xpos + 'px;width:' + (_legendwidth / mappings.length) + 'px;height:' + _legendheight + 'px;"><v:fill opacity="0.9px" type="gradient" method="linear sigma" angle="270"/><v:stroke opacity="0px"/></v:rect>';
                                    _legendgroup.innerHTML = _legendgroup.innerHTML + legendHtmlString;
                                    var legendelement = document.getElementById(legendID);
                                    legendelement.fillcolor = colorMapping.gradientColors[0];
                                    legendelement.fill.color2 = colorMapping.gradientColors[1];
                                }
                            }
                            else {
                                var rect = $("<div/>");
                                rect.css({
                                    "height": _legendheight + "px",
                                    "width": (_legendwidth / mappings.length) + "px",
                                    "background-color": colorMapping.color,
                                    "margin-left": xpos + "px",
                                    "margin-top": ypos + "px",
                                    "opacity":"0.9",
                                    "filter": "alpha(opacity=90)",/* For IE8 and earlier */
                                    "position": "absolute"
                                });

                                if (_isSVG)
                                    rect.appendTo(legenddiv);
                                else
                                    legenddiv.append(rect);
                            }

                            for (var i = 0; i < 10; i++) {
                                obj = {};
                                obj["marginLeft"] = xpos;
                                this._legendRects.push(obj);
                                xpos = xpos + (_legendwidth / mappings.length) / 10;
                            }
                        }
                    }

                    if (this.legendSettings.rightLabel != null) {
                        var textcon = this._createLabel(this.legendSettings.rightLabel, xpos + 10, ypos - 3);
                        if (_isSVG)
                            textcon.appendTo(legenddiv);
                        else
                            legenddiv.append(textcon);
                        xpos = xpos + this.legendSettings.rightLabel.length * 10;
                    }

                    totalwidth = xpos+10;
                    totalheight = ypos + _legendheight+this._interactiveArrow.height()+10;
                }
                
                if (this.legendSettings.position == 'none') {
                    var posx = (map._width * this.legendSettings.PositionX) / 100;
                    var posy = (map._height * this.legendSettings.PositionY) / 100;
                    legenddiv.css({ "margin-left": posx + "px", "margin-top": posy + "px" });
                } else {
                    var position = (this.legendSettings.position == undefined) ? "topleft" : this.legendSettings.position;
                    var controlSize = { width: totalwidth, height: totalheight };
                    var navPos = map._getDockPosition(position, controlSize);
                    legenddiv.css({ "margin-left": navPos.x + "px", "margin-top": navPos.y + "px" });
                }
            }
        },

        /**
        * Animates the bubble while rendering
        * @private
        */
        _animateBubble: function (element, delayInterval) {
            var radius = element.getAttribute("r");
            var scaleVal;
            var $ele = $(element);
            var layer = this;
            $ele.delay(delayInterval).each(function () { }).animate(
                {
                    r: radius
                },
                {
                    duration: 700,

                    step: function (now) {
                        scaleVal = now;
                        if (_isSVG) {
                            $ele.attr("style", "display:block;pointer-events:stroke;");
                            $ele[0].setAttribute("r", scaleVal);
                        }
                        else {
                        }
                    },
                    complete: function () {
                        layer._bubbleCount++;
                        if (layer._bubbleCount == layer._bubbles.length) {
                            layer._setMapElements();
                        }
                    }
                }

            );
        },

        /**
       * Sets map elements
       * @private
       */
        _setMapElements: function () {
            for (var key = 0; key < this._mapItems.length; key++) {
                var item = this._mapItems[key];                
                $(item).css({ "display": "block" });
            }
        },

        /**
      * Sets map items position with animation
      * @private
      */
        _setMapItemsPositionWithAnimation: function (map) {

            for (var key = 0; key < this._bubbles.length; key++) {
                var bubble = this._bubbles[key];
                var position = this._bounds[key];               
                var xpos = ((position.x + map._translatePoint.x) * map._scale);
                var ypos = ((position.y + map._translatePoint.y) * map._scale);
                var ubound = 20;
                var lbound = 0;
                var randomValue = Math.floor(Math.random() * (ubound - lbound) + lbound);
                var delayInterval = parseInt(randomValue * 50);
                if (_isSVG) {
                    $(bubble).attr({ "cx": xpos, "cy": ypos });
                }
                this._animateBubble(bubble, delayInterval);

            }
            for (var key = 0; key < this._mapMarkers.length; key++) {
                var item = this._mapMarkers[key];
                var marker;
                if (this.markers.length > 0) {
                    marker = this.markers[key];
                }                
                var position;
                if (map._isTileMap) {
                    position = map._convertTileLatLongtoPoint(marker.latitude, marker.longitude);
                }
                else {
                    position = map._convertLatLongtoPointforMarker(marker.latitude, marker.longitude);
                }

                if (_isSVG) {
                    var xpos = position.x;
                }
                else {
                    var xpos = ((position.x + map._transformX) * map._scale);
                }
                var ypos = position.y;
                $(item).css({ "display":"block","left": xpos, "top": ypos - 100 });
                $(item).delay(500).each(function () { }).animate({ "top": ypos }, 500);
               
            }
            for (var key = 0; key < this._mapItems.length; key++) {
                var item = this._mapItems[key];
                var position = this._bounds[key];
                var box = item[0].getBoundingClientRect();               
                var xpos = ((position.x + map._translatePoint.x) * map._scale) - (box.width / 2);
                var ypos = ((position.y + map._translatePoint.y) * map._scale) - (box.height / 4);
                $(item).css({ "left": xpos, "top": ypos, "display": "none" });
               
            }
            for (var key = 0; key < this._labelCollection.length; key++) {
                var item = this._labelCollection[key];
                var position = this._labelBounds[key];
                $(item).css("display", "block");
                var box = item[0].getBoundingClientRect();
                var boxwidth =_isSVG?box.width: box.right - box.left;
                var boxheight=_isSVG?box.height: box.bottom - box.top;
                var xpos = ((position.x + map._translatePoint.x) * map._scale) - (boxwidth / 2);
                var ypos = ((position.y + map._translatePoint.y) * map._scale) - (boxheight / 2);
                if (item[0].className = "labelLegend") {                    
                    item[0].className = "labelStyle";                    
                }
                item[0].innerHTML = this._labelData[key];
                $(item).css({ "left": xpos, "top": ypos });

            }
            if (this.labelSettings!=null && this.labelSettings.showLabels) {
                this._validateSmartLabel(map);
            }
        },

        /**
     * Resizes Shapes of the shape  layer
     * @private
     */
        _resizeShapes: function (map) {
            var thickness = this.shapeSettings.strokeThickness / map._scale;
            for (var i = 0; i < this._mapShapes.length; i++) {
                var element = this._mapShapes[i].shape;
                if (_isSVG) {
                    if (element.localName == 'circle') {
                        element.setAttribute("r", 5 / map._scale);
                    } else {
                        if (this._contains(this._prevSelectedShapes,element)) {
                            element.setAttribute("stroke-width", this.shapeSettings.selectionStrokeWidth / map._scale);
                        } else {
                            element.setAttribute("stroke-width", thickness);
                        }
                    }
                } else {
                    if (element.nodeName == 'oval') {

                    } else {
                        if (this._contains(this._prevSelectedShapes,element)) {
                            element.strokeweight = this.shapeSettings.selectionStrokeWidth / map._scale;
                        } else {
                            element.strokeweight = thickness;
                        }
                    }
                }
            }
        },
        /**
         * Sets map items position
         * @private
         */
        _setMapItemsPosition: function(map) {

            for (var key = 0; key < this._mapItems.length; key++) {
                var item = this._mapItems[key];
                var position = this._bounds[key];
                var box = item[0].getBoundingClientRect();
                var boxwidth = _isSVG ? box.width : box.right - box.left;
                var boxheight = _isSVG ? box.height : box.bottom - box.top;
                var xpos = ((position.x + map._translatePoint.x) * map._scale) - (boxwidth / 2);
                var ypos = ((position.y + map._translatePoint.y) * map._scale) - (boxheight / 4);
                $(item).css({ "left": xpos, "top": ypos });               
            }
            for (var key = 0; key < this._bubbles.length; key++) {
                var bubble = this._bubbles[key];
                var position = this._bounds[key];
                if (_isSVG) {
                    var xpos = ((position.x + map._translatePoint.x) * map._scale);
                    var ypos = ((position.y + map._translatePoint.y) * map._scale);
                    $(bubble).attr({ "cx": xpos, "cy": ypos });
                }
                else {
                    bubble = document.getElementById(bubble.id);
                    var xpos = ((position.x + map._translatePoint.x) * map._scale);
                    var ypos = ((position.y + map._translatePoint.y) * map._scale);
                    var bubbleTop = ypos-(bubble.getBoundingClientRect().bottom - bubble.getBoundingClientRect().top)/2;
                    var bubbleLeft = xpos-(bubble.getBoundingClientRect().right - bubble.getBoundingClientRect().left)/2;
                    
                    $(bubble).css({
                        "left": bubbleLeft,
                        "top": bubbleTop
                    });
                }
            }

            for (var key = 0; key < this._mapMarkers.length; key++) {
                var item = this._mapMarkers[key];

                var marker;
                if (this.markers.length > 0) {
                    marker = this.markers[key];
                }               
                var position;
                if (map._isTileMap) {
                    position = map._convertTileLatLongtoPoint(marker.latitude, marker.longitude);
                }
                else {
                    position = map._convertLatLongtoPointforMarker(marker.latitude, marker.longitude);
                }            
                var xpos = position.x;               
                var ypos = position.y;            
                $(item).css({ "left": xpos, "top": ypos });                
            }
            for (var key = 0; key < this._labelCollection.length; key++) {
                var item = this._labelCollection[key];
                var position = this._labelBounds[key];
                $(item).css("display", "block");
                var box = item[0].getBoundingClientRect();
                var boxwidth = _isSVG ? box.width : box.right - box.left;
                var boxheight = _isSVG ? box.height : box.bottom - box.top;
                var xpos = ((position.x + map._translatePoint.x) * map._scale) - (boxwidth / 2);
                var ypos = ((position.y + map._translatePoint.y) * map._scale) - (boxheight / 2);
                if (item[0].className = "labelLegend") {                    
                    item[0].className = "labelStyle";
                    $(item[0]).css("background-color", "transparent");
                }
                item[0].innerHTML = this._labelData[key];
                $(item).css({ "left": xpos, "top": ypos});
               
            }
            if (this.labelSettings != null && this.labelSettings.showLabels) {
                this._validateSmartLabel(map);
            }
        },

        /**
         * Validates smart labels
         * @private
         */
        _validateSmartLabel: function (map) {
            this._smartLabels = [];
            var filledRects = [];
            if (this._labelCollection.length > 0) {
                for (var index = 0; index < this._mapShapes.length; index++) {
                    var shapemidPoint = this._labelBounds[index];
                    var midPoint = { x: (shapemidPoint.x + map._translatePoint.x) * map._scale, y: (shapemidPoint.y + map._translatePoint.y) * map._scale };
                    var labelElement = this._labelCollection[index];
                    if (midPoint.x > 0 && midPoint.x < map._width && midPoint.y > 0 && midPoint.y < map._height) {
                        var shape = this._mapShapes[index].shape;
                        var bounds = shape.getBoundingClientRect();                        
                        var flag = false;
                        var labelSize = labelElement[0].getBoundingClientRect();
                        var labelHeight = labelSize.height+2;
                        var labelWidth = labelSize.width+2;
                        if (!_isSVG) {
                            bounds = { width: (bounds.right*map._scale) - (bounds.left*map._scale), height: (bounds.bottom *map._scale)- (bounds.top*map._scale) };
                            labelHeight = labelSize.bottom - labelSize.top;
                            labelWidth = labelSize.right - labelSize.left;
                        }
                        var leftPosition = 0;
                        var topPosition = 0;
                        var factor = 20;
                        var xArray = [];
                        var yArray = [];
                        if (labelHeight > bounds.height || labelWidth > bounds.width) {
                            
                            if (this.labelSettings.enableSmartLabel) {
                                if (this.labelSettings.smartLabelSize == ej.datavisualization.Map.LabelSize.Fixed) {
                                    labelHeight = 25;
                                    labelWidth = 15 * this.labelSettings.labelLength;
                                }
                                else {                                    
                                    labelWidth *= 1.3;
                                    labelHeight = 25;
                                }
                                while (!flag) {
                                    if (factor > 400) {
                                        flag = true;
                                    }
                                    xArray = pushToArray(factor);
                                    yArray = xArray;
                                    for (var xIndex = 0; xIndex < xArray.length; xIndex++) {
                                        for (var yIndex = 0; yIndex < xArray.length; yIndex++) {
                                            leftPosition = yArray[yIndex];
                                            topPosition = xArray[xIndex];                                           
                                            if (midPoint.x + leftPosition + labelWidth > map._width && midPoint.x < map._width) {
                                                leftPosition -=(midPoint.x + leftPosition + labelWidth)- map._width;
                                            }
                                            if (midPoint.x + leftPosition <0) {
                                                leftPosition =0;
                                            }
                                            if (midPoint.y + topPosition  <0) {
                                                topPosition=0;
                                            }
                                            if (midPoint.y + topPosition + labelHeight > map._height && midPoint.y < map._height) {
                                                topPosition -= (midPoint.y + topPosition + labelHeight) - map._height;
                                            }
                                            var rect = { left: midPoint.x + leftPosition, top: midPoint.y + topPosition, height: labelHeight, width: labelWidth };
                                            if (isEmpty(rect)) {
                                                var ele = map._getIntersectedElements(rect, this._mapShapes);
                                                if (ele != null && ele.length == 0) {
                                                    flag = true;                                                   
                                                    xIndex = xArray.length;
                                                    yIndex = xArray.length;
                                                    labelElement[0].className = 'labelLegend';													
                                                    if (this.labelSettings.smartLabelSize == ej.datavisualization.Map.LabelSize.Fixed) {
                                                        labelElement[0].innerHTML = labelElement[0].innerHTML.substring(0, this.labelSettings.labelLength);
                                                    }
                                                    labelElement.mouseenter({ Param1: this, Param2: this._mapShapes[index],map:map }, map._polyEnterFunction);
                                                    labelElement.mousemove({ Param1: this, Param2: this._mapShapes[index] }, map._polyMoveFunction);
                                                    $(labelElement).css({ left: midPoint.x + leftPosition, top: midPoint.y + topPosition, "background-color": _isSVG ? shape.getAttribute("fill") : shape.fillcolor.value});
                                                    filledRects.push(rect);
                                                    var labelObj = {};
                                                    labelObj["shape"] = shape;
                                                    labelObj["legend"] = labelElement;
                                                    this._smartLabels.push(labelObj);
                                                }
                                            }
                                        }
                                    }
                                    factor += 10;
                                }
                            } else {
                                labelElement.css("display", "none");
                            }
                        }
                    } 
                }
            }

            function pushToArray(value) {
                var array = [];
                array.push(0);
                for (var j = 10; j <= value; j += 20) {
                    array.push(-j);
                    array.push(j);
                }

                return array;
            }

            function isEmpty(rect) {
                for (var i = 0; i < filledRects.length; i++) {
                    if (isIntersect(rect, filledRects[i]))
                        return false;
                }
                return true;
            }
           
            function isIntersect(rect1, rect2) {
                
                if (rect1.left-2 >= (rect2.left+rect2.width)
|| rect1.left-2+rect1.width <= rect2.left-2
|| rect1.top-2 >= rect2.top+rect2.height
|| rect1.top+rect1.height <= rect2.top-2) {
                    return false;
                }
                return true;
            }


        },
       
        /**
         * Fills colors for the shapes based on color mapping
         * @private
         */
        _fillColors: function (value, colorMapping, shape) {

            if (colorMapping.rangeColorMapping != null) {
               
                this._fillRangeColors(value, colorMapping.rangeColorMapping, shape);
            }
            else if (colorMapping.equalColorMapping != null) {
                this._fillEqualColors(value, colorMapping, shape);
            }
        },

        /**
         * Fills colors for the shapes based on equal color mapping
         * @private
         */
        _fillEqualColors: function (value, colorMapping, shape) {
            $.each(colorMapping.equalColorMapping, function (index, gValue) {
                if (gValue.value == value) {
                    if (_isSVG) {
                        shape.setAttribute("fill", gValue.color);
                    }
                    else {
                        shape.fillcolor = gValue.color;
                    }
                }
            });
        },
        /**
         * Updates legend range
         * @private
         */
        _updateLegendRange: function (value, shapelayer, shape) {
            var colormapping = shapelayer.shapeSettings.colorMappings.rangeColorMapping;
            for (var index = 0; index < colormapping.length; index++) {
                var gradientCollection = null;
                var mapping = colormapping[index];
                if (shapelayer.shapeSettings.enableGradient) {
                    gradientCollection = this._generateGradientCollection(mapping.gradientColors);
                }
                if (value >= mapping.from && value <= mapping.to) {
                    var minValue = index;
                    if (index != 0)
                        minValue = index * 10;
                    var minRange = mapping.from;
                    var maxRange = mapping.from + ((mapping.to - mapping.from) / 10);
                    for (var i = minValue; i < minValue + 10; i++) {
                        if (value >= minRange && value <= maxRange) {
                            var obj = {};
                            if (shapelayer._legendRects[i] != undefined)
                                obj = shapelayer._legendRects[i];
                            if (shapelayer.shapeSettings.enableGradient) {
                                if (index != 0) {
                                    obj["color"] = gradientCollection[i - index * 10];
                                } else {
                                    obj["color"] = gradientCollection[i];
                                }
                            } else
                                obj["color"] = mapping.color;
                            return obj;
                        }
                        minRange = maxRange;
                        maxRange = maxRange + ((mapping.to - mapping.from) / 10);
                    }
                }
            }
        },

        /**
        * Fills colors for the shapes based on range color mapping
        * @private
        */
        _fillRangeColors: function (value, colormapping, shape) {
            
            for (var index = 0; index < colormapping.length; index++) {
                var mapping = colormapping[index];
                if (value >= mapping.from && value <= mapping.to) {
                    var shapeOpacity = this._getColorRatio(0.7, 1, value, mapping.from, mapping.to);
                    if (_isSVG) {
                        shape.setAttribute("fill", mapping.color);
                    }
                    else {
                        shape.fillcolor = mapping.color;
                    }
                    $(shape).css({ "opacity": shapeOpacity });
                }
            }
        },

        /**
        * Gets color ratio for gradient color mapping
        * @private
        */
        _getColorRatio: function (min, max, value, minValue, maxValue) {
            var percent = (100 / (maxValue - minValue)) * (value - minValue);
            var colorCode = (((parseFloat(max) - parseFloat(min)) / 100) * percent) + parseFloat(min);
            return colorCode;
        }

    };

    $.fn.pinchZoom = function (rootgroup, map) {

        var stateOrigin,
                    stateTf,
                    root = this[0],
                    startTouches = [],

           getTouchEventPoint = function (evt) {

               var p = root.createSVGPoint(),
                   targetTouches = evt.targetTouches,
                   offsetX,
                   offsetY;

               if (targetTouches.length) {
                   var touch = targetTouches[0];
                   offsetX = touch.pageX;
                   offsetY = touch.pageY;
               }

               p.x = offsetX;
               p.y = offsetY;

               return p;
           };

        handleTouchStart = function (evt) {
            var g = rootgroup;
            stateTf = g.getCTM().inverse();
            stateOrigin = getTouchEventPoint(evt).matrixTransform(stateTf);
            var touches = evt.touches;
            if (touches.length >= 2) {
                for (var i = 0; i < touches.length; i++) {
                    var touch = touches[i]
                      , found = false;
                    for (var j = 0; j < startTouches.length; j++) {
                        var startTouch = startTouches[j];
                        if (touch.identifier === startTouch.identifier) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        var touchCopy = $.extend({}, touch);
                        startTouches.push(touchCopy);
                    }
                }
            }

            evt.preventDefault();
        };
        getDistance = function (touch1, touch2) {
            var x = touch2.pageX - touch1.pageX,
                y = touch2.pageY - touch1.pageY;
            return Math.sqrt((x * x) + (y * y));
        };

        setCTM = function (element, matrix) {
		    var isZoomIn=null;
            var s = "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";
            if (matrix.a > map._baseScale && map.enableZoom() && map.model.enablePan) {
			if(matrix.a > map._scale)
			{
			     isZoomIn=true;
			}
			else if(matrix.a < map._scale)
			{
			isZoomIn=false;
			}
			    map._scale = matrix.a;
			    map._translatePoint.x = matrix.e / matrix.a;
			    map._translatePoint.y = matrix.f / matrix.a;
			    map._applyTransform(map._scale, map._translatePoint);
  			    map.zoomLevel(map._scale - map._baseScale + 1);
	    		if (isZoomIn != null && isZoomIn) {
				    map._trigger("zoomedIn", { originalEvent: null, zoomLevel: map.zoomLevel() });
				    map._updateSliderValue(false);
					map._resizeShape();
				}
				else if(isZoomIn!=null)
				{
				    map._trigger("zoomedOut", { originalEvent: null, zoomLevel: map.zoomLevel() });
				    map._updateSliderValue(false);
					map._resizeShape();
				}
	    		map._isDragging = true;
                map._refrshLayers();
            }

        };

        handleTouchEnd = function (evt) {
            var changedTouches = evt.changedTouches;
            for (var i = 0; i < changedTouches.length; i++) {
                var changedTouch = changedTouches[i];
                for (var j = 0; j < startTouches.length; j++) {
                    var startTouch = startTouches[j];
                    if (startTouch.identifier === changedTouch.identifier) {
                        var idx = startTouches.indexOf(startTouch);
                        startTouches.splice(idx, 1);
                    }
                }
            }
            evt.preventDefault();
        };

        updateTouch = function (dstTouch, srcTouch) {
            dstTouch.pageX = srcTouch.pageX;
            dstTouch.pageY = srcTouch.pageY;
        };

        handleTouchMove = function (evt) {
            evt.preventDefault();

            var g = rootgroup,
                touches = evt.touches,
                z,
                p,
                k;

            if (touches.length >= 2) {
                var touch0 = touches[0]
                  , touch1 = touches[1]
                  , startTouch0 = startTouches[0]
                  , startTouch1 = startTouches[1];
                z = getDistance(touch0, touch1) / getDistance(startTouch0, startTouch1);
                p = root.createSVGPoint();
                p.x = (touch0.pageX + touch1.pageX) / 2;
                p.y = (touch0.pageY + touch1.pageY) / 2;
                p = p.matrixTransform(g.getCTM().inverse());
                k = root.createSVGMatrix().translate(p.x, p.y).scale(z).translate(-p.x, -p.y);
                setCTM(g, g.getCTM().multiply(k));
                if (typeof stateTf === "undefined") {
                    stateTf = g.getCTM().inverse();
                }
                stateTf = stateTf.multiply(k.inverse());
                updateTouch(startTouch0, touch0);
                updateTouch(startTouch1, touch1);
            } else if (!startTouches.length) {
                p = getTouchEventPoint(evt).matrixTransform(stateTf);
                setCTM(g, stateTf.inverse().translate(p.x - stateOrigin.x, p.y - stateOrigin.y));
            }
        };
        this[0].addEventListener('touchstart', handleTouchStart, false);
        this[0].addEventListener('touchend', handleTouchEnd, false);
        this[0].addEventListener('touchmove', handleTouchMove, false);


    };

    jQuery.uaMatch = function (ua) {
        ua = ua.toLowerCase();

        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(webkit)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
            [];

        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    };

     /**
     * Enum for Map LayerType	 
     * @enum {string}
     * @global 
     */
    ej.datavisualization.Map.LayerType = {
        /**  support for layer type geometry. */
        Geometry: "geometry",
        /**  support for layer type osm. */
        OSM: "osm",
        /**  support for layer type bing. */
        Bing: "bing"
    };

    /**
    * Enum for Map legend icons	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.Map.LegendIcons = {
        /**  support for legend icon rectangle. */
        Rectangle: "rectangle",
        /**  support for legend icon circle. */
        Circle: "circle"
    };

    /**
    * Enum for Map Label size	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.Map.LabelSize = {
        /**  support for label size fixed. */
        Fixed: "fixed",
        /**  support for label size default. */
        Default: "default"
    };

    /**
    * Enum for Map Legend mode	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.Map.LegendMode = {
        /**  support for legend mode default. */
        Default: "default",
        /**  support for legend mode interactive. */
        Interactive: "interactive"
    };

    /**
    * Enum for Map Bing map types	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.Map.BingMapType = {
        /**  support for bing map type aerial. */
        Aerial: "aerial",
        /**  support for bing map type aerialwithlabel. */
        AerialWithLabel: "aerialwithlabel",
        /**  support for bing map type road. */
        Road: "road",
    };

    /**
    * Enum for Map selection mode	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.Map.SelectionMode = {
        /**  support for selection mode default. */
        Default: "default",
        /**  support for selection mode multiple. */
        Multiple: "multiple"
    };

    /**
    * Enum for Map color palette
    * @enum {string}
    * @global 
    */
    ej.datavisualization.Map.ColorPalette = {
        /**  support for color palette palette1. */
        Palette1: "palette1",
        /**  support for color palette palette2. */
        Palette2: "palette2",
        /**  support for color palette palette3. */
        Palette3: "palette3",
        /**  support for color palette custompalette. */
        CustomPalette: "custompalette"
    };

    /**
    * Enum for Map Navigation Control and Legend dock position	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.Map.DockPosition = {
        /**  support for dock position none. */
        None: "none",
        /**  support for dock position topleft. */
        TopLeft: "topleft",
        /**  support for dock position topcenter. */
        TopCenter: "topcenter",
        /**  support for dock position topright. */
        TopRight: "topright",
        /**  support for dock position centerleft. */
        CenterLeft: "centerleft",
        /**  support for dock position center. */
        Center: "center",
        /**  support for dock position centerright. */
        CenterRight: "centerright",
        /**  support for dock position bottomleft. */
        BottomLeft: "bottomleft",
        /**  support for dock position bottomcenter. */
        BottomCenter: "bottomcenter",
        /**  support for dock position bottomright. */
        BottomRight: "bottomright"
    };
    
})(jQuery, Syncfusion);
;