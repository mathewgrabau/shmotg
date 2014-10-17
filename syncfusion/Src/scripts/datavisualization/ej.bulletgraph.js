/*!
*  filename: ej.bulletgraph.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html Button elements
* @copyright Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.s
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
* @version 12.1 
* @author <a href="mailto:licensing@syncfusion.com">Syncfusion Inc</a>
*/

(function ($, ej, undefined) {
    /**
       * @class ejBulletGraph
       * @requires jQuery.js
       * @requires ej.core.js
       * @requires ej.data.js
       * @requires ej.bulletgraph.js
       * @classdesc Custom Design for Bullet graph.
       * @example 
       * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; <br> 
       * &lt;script&gt;
       * // Create BulletGraph
       * $('#bulletGraph1').ejBulletGraph(); 	
       * &lt;/script&gt;
       */
    ej.widget("ejBulletGraph", "ej.datavisualization.BulletGraph", /** @lends ejBulletGraph# */ {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div"],
        // default model
        defaults:/** @lends ejBulletGraph# */ {
            /**		
			* Feature measure bar in bullet graph render till the specified value.
			* @default 0
            * @alias ejBulletGraph#value
			* @type {number}
			* @example 
			* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * value : 1                    
      * });
      * &lt;/script&gt;  
			*/
            value: 0,
            /**		
			* Comparative measure bar in bullet graph render till the specified value.
			* @default 0
            * @alias ejBulletGraph#comparativeMeasureValue
			* @type {number}	
			* @example 
			* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * comparativeMeasureValue : 1                    
      * });
      * &lt;/script&gt;  
			*/
            comparativeMeasureValue: 0,
            /**		
			* Specifies the width of the bullet graph.
			* @default 595
            * @alias ejBulletGraph#width
			* @type {number}
			* @example 
			* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * width : 600                    
      * });
      * &lt;/script&gt;  
			*/
            width: 595,
            /**		
			* Specifies the height of the bullet graph.
			* @default 90
            * @alias ejBulletGraph#height
			* @type {number}
			* @example 
			* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * height : 600                    
      * });
      * &lt;/script&gt;  
			*/
            height: 90,
            /**		
			* By specifying this property the user can change the theme of the bullet graph.
			* @default "flatlight"
            * @alias ejBulletGraph#theme
			* @type {string}	
			* @example 
            * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * theme : "flatdark"                  
      * });
      * &lt;/script&gt;  
			*/
            theme: "flatlight",
            /**		
			* Bullet graph will render in the specified orientation.
			* @default "horizontal"
            * @alias ejBulletGraph#orientation
			* @type {enum}
			* @example 
			* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * orientation : "vertical"                   
      * });
      * &lt;/script&gt; 
			*/
            orientation: "horizontal",
            /**		
			* Specifies the direction of flow in bullet graph. Neither it may be backward nor forward. See {@link FlowDirection}
			* @default "forward"
            * @alias ejBulletGraph#flowDirection
			* @type {enum} 
			* @example 
			* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * flowDirection : "backward"                   
      * });
      * &lt;/script&gt; 
			*/
            flowDirection: "forward",
            /**		
			* Size of the qualitative range depends up on the specified value.
			* @default 32
            * @alias ejBulletGraph#qualitativeRangeSize
			* @type {number}
			* @example 
			* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * qualitativeRangeSize : 35                  
      * });
      * &lt;/script&gt; 
			*/
            qualitativeRangeSize: 32,
            /**		
			* Length of the quantitative range depends up on the specified value.
			* @default 475
            * @alias ejBulletGraph#quantitativeScaleLength
			* @type {number} 
			* @example 
			* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleLength :500                 
      * });
      * &lt;/script&gt; 
			*/
            quantitativeScaleLength: 475,
            /**		
           * Contains all the properties to customize tooltip.
           * @type {object}
           */
            tooltipSettings: /** @lends ejBulletGraph# */{
                /**		
			* Toggles the visibility of tooltip
			* @default true
            * @alias ejBulletGraph#tooltipSettings->visible
			* @type {boolean}
			* @example 
			* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * tooltipSettings :{visible: false}
      * });
      * &lt;/script&gt; 
			*/
                visible: true,
                /**		
           * Specifies the ID of a div, which is to be displayed as tooltip.
           * @default null
           * @alias ejBulletGraph#tooltipSettings->template
           * @type {string}
           * @example 
           * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
     * &lt;script&gt;
     * $("#bulletGraph1").ejBulletGraph({
     * tooltipSettings: { template : "tooltip"},
     * });
     * &lt;/script&gt; 
           */
                template: null
            },
            /**		
			* Contains all the properties to customize quantitative scale.
			* @type {object}
			*/
            quantitativeScaleSettings:  /** @lends ejBulletGraph# */{
                /**		
				* Contains property to customize the position of the quantitative scale
                * @alias ejBulletGraph#quantitativeScaleSettings->location
				* @type {object}				
				*/
                location: {
                    /**		
                    * This property specifies the x position for rendering quantitative scale.
                    * @default 10
                    * @alias ejBulletGraph#quantitativeScaleSettings->location->x
                    * @type {number}
                    * @example 
                    * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { location : { x : 15 } } 
      * });
      * &lt;/script&gt; 
                    */
                    x: 10,
                    /**		
                       * This property specifies the y position for rendering quantitative scale.
                       * @default 10
                       * @alias ejBulletGraph#quantitativeScaleSettings->location->y
                       * @type {number}
                       * @example 
                       * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { location : { y : 15 } }
      * });
      * &lt;/script&gt; 
                       */
                    y: 10
                },
                /**		
				* Specifies the minimum value of the Graph.
				* @default 0
                * @alias ejBulletGraph#quantitativeScaleSettings->minimum
				* @type {number}
				* @example 
				 * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { minimum : 1 }
      * });
      * &lt;/script&gt; 
				*/
                minimum: 0,
                /**		
				* Specifies the maximum value of the Graph.
				* @default 10
                * @alias ejBulletGraph#quantitativeScaleSettings->maximum
				* @type {number}
				* @example 
				 * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { maximum : 8 }                  
      * });
      * &lt;/script&gt; 
				*/
                maximum: 10,
                /**		
				* Specifies the interval for the Graph.
				* @default 1
                * @alias ejBulletGraph#quantitativeScaleSettings->interval
				* @type {number}
				* @example 
				 * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { interval : 2 }
      * });
      * &lt;/script&gt; 
				*/
                interval: 1,
                /**		
				* The specified number of minor ticks will be rendered per interval.
				* @default 4
                * @alias ejBulletGraph#quantitativeScaleSettings->minorTicksPerInterval
				* @type {number}
				* @example 
				 * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { minorTicksPerInterval : 5 }
      * });
      * &lt;/script&gt; 
				*/
                minorTicksPerInterval: 4,
                /**		
					* Contains property to customize the major tick lines.
                    * @alias ejBulletGraph#quantitativeScaleSettings->majorTickSettings
					* @type {object}
			*/
                majorTickSettings: {
                    /**		
                    * Specifies the size of the major ticks.
                    * @default 13
                    * @alias ejBulletGraph#quantitativeScaleSettings->majorTickSettings->size
                    * @type {number}
                    * @example 
                     * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { majorTickSettings : { size : 15 } }
      * });
      * &lt;/script&gt; 
                      */
                    size: 13,
                    /**		
                    * Specifies the stroke color of the major tick lines.
                    * @default null
                    * @alias ejBulletGraph#quantitativeScaleSettings->majorTickSettings->stroke
                    * @type {string}
                    * @example 
                      * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { majorTickSettings : { stroke : "red" } }                  
      * });
      * &lt;/script&gt; 
                      */
                    stroke: null,
                    /**		
                    * Specifies the width of the major tick lines.
                    * @default 2
                    * @alias ejBulletGraph#quantitativeScaleSettings->majorTickSettings->width
                    * @type {number}
                    * @example 
                      * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { majorTickSettings : { width : 1 } }                  
      * });
      * &lt;/script&gt; 
                      */
                    width: 2
                },
                /**		
					* Contains property to customize the minor ticks.
                    * @alias ejBulletGraph#quantitativeScaleSettings->minorTickSettings
					* @type {object}
					*/
                minorTickSettings: {
                    /**		
               * Specifies the size of minor ticks.
               * @default 7
               * @alias ejBulletGraph#quantitativeScaleSettings->minorTickSettings->size
               * @type {number}
               * @example 
                 * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { minorTickSettings : { size : 10} }                  
      * });
      * &lt;/script&gt; 
      */
					size: 7,
               /**     		
               * Specifies the stroke color of minor ticks in bullet graph.
               * @default null
               * @alias ejBulletGraph#quantitativeScaleSettings->minorTickSettings->stroke
               * @type {string}
               * @example 
                 * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { minorTickSettings : { stroke : "green" } }
      * });
      * &lt;/script&gt; 
                 */
                    stroke: null,
                    /**		
                    * Specifies the width of the minor ticks in bullet graph.
                    * @default 2
                    * @alias ejBulletGraph#quantitativeScaleSettings->minorTickSettings->width
                    * @type {number}
                    * @example 
                      * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { minorTickSettings : { width : 1 } }
      * });
      * &lt;/script&gt; 
                      */
                    width: 2
                },
                /**		
               * Specifies the position of the ticks to render either above or below the graph. See {@link LabelPosition} 
               * @default ej.datavisualization.BulletGraph.TickPosition.Below
               * @alias ejBulletGraph#quantitativeScaleSettings->tickPosition
               * @type {enum}
               * @example 
              * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { tickPosition : "above" }
      * });
      * &lt;/script&gt; 
               */
                tickPosition: "below",
                /**		
                * Contains property to customize the labels.
                * @alias ejBulletGraph#quantitativeScaleSettings->labelSettings
                * @type {object}
                */
                labelSettings: {
                    /**		
					* Specifies the prefix to be added with labels in bullet graph.
					* @default Empty string
                    * @alias ejBulletGraph#quantitativeScaleSettings->labelSettings->labelPrefix
					* @type {string}
					* @example 
					* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { labelSettings : { labelPrefix : "$" } }                  
      * });
      * &lt;/script&gt; 
					*/
                    labelPrefix: "",
                    /**		
					* Specifies the suffix to be added after labels in bullet graph.
					* @default Empty string
                    * @alias ejBulletGraph#quantitativeScaleSettings->labelSettings->labelSuffix
					* @type {string}
					* @example 
					* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { labelSettings : { labelSuffix : "K" } }                  
      * });
      * &lt;/script&gt; 
					*/
                    labelSuffix: "",
                    /**		
					* Specifies the stroke color of the labels in bullet graph.
					* @default null
                    * @alias ejBulletGraph#quantitativeScaleSettings->labelSettings->stroke
					* @type {string}
					* @example 
					* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { labelSettings : { stroke : "green" } }                  
      * });
      * &lt;/script&gt; 
					*/
                    stroke: null,
                    /**		
					* Specifies the Size of the labels.
					* @default 12
                    * @alias ejBulletGraph#quantitativeScaleSettings->labelSettings->size
					* @type {number}
					* @example 
					* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { labelSettings : { size : 10 } }                  
      * });
      * &lt;/script&gt; 
					*/
                    size: 12,
                    /**		
					* Specifies the horizontal/vertical padding of labels.
					* @default 20
                    * @alias ejBulletGraph#quantitativeScaleSettings->labelSettings->offset
					* @type {number}
					* @example 
					* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { labelSettings : { offset : 25 } }                  
      * });
      * &lt;/script&gt; 
					*/
                    offset: 20,
                    /**		
					* Contains property to customize the font of the labels in bullet graph.
                    * @alias ejBulletGraph#quantitativeScaleSettings->labelSettings->font
					* @type {object}				
					*/
                    font: {
                        /**		
                        * Specifies the fontFamily of labels in bullet graph. Labels render with this fontFamily.
                        * @default "Segoe UI"
                        * @alias ejBulletGraph#quantitativeScaleSettings->labelSettings->font->fontFamily
                        * @type {string}
                        * @example 
                        * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { labelSettings : { font :{ fontFamily : "Algerian" } } }                  
      * });
      * &lt;/script&gt; 
                        */
                        fontFamily: 'Segoe UI',
                        /**		
                        * Specifies the fontStyle of labels in bullet graph. Labels render with this fontStyle. See {@link FontStyle}
                        * @default "Normal"
                        * @alias ejBulletGraph#quantitativeScaleSettings->labelSettings->font->fontStyle
                        * @type {enum}
                        * @example 
                         * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { labelSettings : { font :{ fontStyle : "italic" } } }
      * });
      * &lt;/script&gt; 
                        */
                        fontStyle: 'Normal ',
                        /**		
                        * Specifies the fontWeight of labels in bullet graph. Labels render with this fontWeight. See {@link FontWeight}
                        * @default "regular"
                        * @alias ejBulletGraph#quantitativeScaleSettings->labelSettings->font->fontWeight
                        * @type {enum}
                        * @example 
                         * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { labelSettings : { font :{ fontWeight : "lighter" } } }
      * });
      * &lt;/script&gt; 
                        */
                        fontWeight: 'regular',
                        /**		
                        * Specifies the opacity of labels in bullet graph. Labels render with this opacity
                        * @default 1
                        * @alias ejBulletGraph#quantitativeScaleSettings->labelSettings->font->opacity
                        * @type {number}
                        * @example 
                         * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { labelSettings : { font :{ opacity : 0.5 } } }
      * });
      * &lt;/script&gt; 
                        */
                        opacity: 1
                    },
                    /**		
					* Specifies the position of the labels to render either above or below the graph. See {@link Position}
					* @default "below"
                    * @alias ejBulletGraph#quantitativeScaleSettings->labelSettings->position
					* @type {enum}
					* @example 
					 * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { labelSettings : { position : "above" } }                  
      * });
      * &lt;/script&gt; 
					*/
                    position: "below"
                },
                /**		
					* Contains property to customize the featured measure.
                    * @alias ejBulletGraph#quantitativeScaleSettings->featuredMeasureSettings
					* @type {object}
					*/
                featuredMeasureSettings: {
                    /**		
                    * Specifies the Stroke of the featured measure in bullet graph.
                    * @default null
                    * @alias ejBulletGraph#quantitativeScaleSettings->featuredMeasureSettings->stroke
                    * @type {number}
                    * @example 
                    * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { featuredMeasureSettings :{stroke : 2} }
      * });
      * &lt;/script&gt; 
                    */

                    stroke: null,
                    /**		
                    * Specifies the width of the featured measure in bullet graph.
                    * @default 2
                    * @alias ejBulletGraph#quantitativeScaleSettings->featuredMeasureSettings->width
                    * @type {number}
                    * @example 
                    * &lt;div id="ejBulletGraph"&gt;&lt;/div&gt; 
                      * &lt;script&gt;
                      *	$("#bulletGraph1").ejBulletGraph({
                      *    quantitativeScaleSettings: { featuredMeasureSettings: { width: 3 }},
                      *    });
                      * &lt;/script&gt;  
                      */
                    width: 6
                },
                /**		
					* Contains property to customize the comparative measure.
                    * @alias ejBulletGraph#quantitativeScaleSettings->comparativeMeasureSettings
					* @type {object}
					*/
                comparativeMeasureSettings: {
                    /**		
                    * Specifies the stroke of the comparative measure.
                    * @default null
                    * @alias ejBulletGraph#quantitativeScaleSettings->comparativeMeasureSettings->stroke
                    * @type {number}
                    * @example 
                     * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { comparativeMeasureSettings :{ stroke :2} }                  
      * });
      * &lt;/script&gt; 
      */
                    stroke: null,
                    /**		
                    * Specifies the width of the comparative measure.
                    * @default 5
                    * @alias ejBulletGraph#quantitativeScaleSettings->comparativeMeasureSettings->width
                    * @type {number}
                    * @example 
                     * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      *  quantitativeScaleSettings : { comparativeMeasureSettings :{ width :6} }                     
      * });
      * &lt;/script&gt; 
                      */
                    width: 5
                },
                /**		
				* Contains property to customize the featured measure.
                * @alias ejBulletGraph#quantitativeScaleSettings->featureMeasures
				* @type {array}
				*/
                featureMeasures: [{
                    /**		
                    * Feature measure render till the specified value.
                    * @default null
                    * @alias ejBulletGraph#quantitativeScaleSettings->featureMeasures->value
                    * @type {number}
                    * @example 
                   * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { featureMeasures :{ value :2} }                  
      * });
      * &lt;/script&gt;
                    */
                    value: null,
                    /**		
                    * Comparative measure render till the specified value.
                    * @default null
                     * @alias ejBulletGraph#quantitativeScaleSettings->featureMeasures->comparativeMeasureValue
                    * @type {number}
                    * @example 
                    * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { featureMeasures :{ comparativeMeasureValue :2} }                  
      * });
      * &lt;/script&gt;
                    */
                    comparativeMeasureValue: null,
                    /**		
                    * Specifies the category of feature measure.
                    * @default null
                    * @alias ejBulletGraph#quantitativeScaleSettings->featureMeasures->category
                    * @type {string}
                    * @example 
                   * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * quantitativeScaleSettings : { featureMeasures :{ category :null} }                  
      * });
      * &lt;/script&gt;
                    */
                    category: null
                }]
            },
            /**		
            * Contains property to customize the fields.
            * @alias ejBulletGraph#quantitativeScaleSettings->fields
            * @type {object}
            */
            fields: {
                /**		
				* Specifies the dataSource for the bullet graph.
				* @default null
                * @alias ejBulletGraph#quantitativeScaleSettings->fields->dataSource
				* @type {object}
				* @example 
				* // To initialize with local Json data to the dataSource
                *$("#SampleBullet").ejBulletGraph({
                *fields: {
                *dataSource: localData,
                *category: “Category”,
                *featureMeasures: “FeatureValue”,
                *comparativeMeasure: “ComparativeValue”
                *}
                *});
                * // where local Json data assigned to the dataSource is as the below one
                *var localData = [{
                *                    FeatureValue: 8, ComparativeValue: 7.5,
                *                    Category: 1
                *                },
                *                {
                *                    FeatureValue: 9, ComparativeValue: 5,
                *                    Category: 2
                *                }];
                * // To initialize with remote data to the dataSource using DataManager
                *$("#SampleBullet").ejBulletGraph({
                *      fields: {
                *           dataSource: dataManager,
                *           query: queryString,
                *           category: "ProductID",
                *           featureMeasures: "UnitPrice",
                *           comparativeMeasure: "Quantity"
                *      }
                *});
                * // Data Manager creation
                *            var dataManager = ej.DataManager({
                *                url: "http://mvc.syncfusion.com/Services/Northwnd.svc/"
                *            });
                *
                * 
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * fields : {datasource :{ej.DataManger :{url : "http://mvc.syncfusion.com/Services/Northwnd.svc/" }} }                 
      * });
      * &lt;/script&gt; 	
				*/
                dataSource: null,
                /**		
				* Specifies the query for fetching the values form data source to render the bullet graph.
				* @default null
                * @alias ejBulletGraph#quantitativeScaleSettings->fields->query
				* @type {string}
				*/
                query: null,
                /**		
				* Specifies the name of the table.
				* @default null
                * @alias ejBulletGraph#quantitativeScaleSettings->fields->tableName
				* @type {string}
				* @example 
                * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * fields :{tableName : "Product"}                 
      * });
      * &lt;/script&gt;
				*/
                tableName: null,
                /**		
				* Specifies the category of the bullet graph.
				* @default null
                * @alias ejBulletGraph#quantitativeScaleSettings->fields->category
				* @type {string}
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * fields :{category : "ProductId"}                  
      * });
      * &lt;/script&gt;
				*/
                category: null,
                /**		
				* Feature measure render based on the values in the specified field.
				* @default null
                * @alias ejBulletGraph#quantitativeScaleSettings->fields->featureMeasures
				* @type {string}
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * fields :{featureMeasures : "UnitPrice"}                  
      * });
      * &lt;/script&gt;
				*/
                featureMeasures: null,
                /**		
				* Comparative measure render based on the values in the specified field.
				* @default null
                * @alias ejBulletGraph#quantitativeScaleSettings->fields->comparativeMeasure
				* @type {string}
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * fields :{comparativeMeasure : "comparativeMeasureValue"}                  
      * });
      * &lt;/script&gt;
				*/
                comparativeMeasure: null
            },
            /**		
			* Toggles the animation of bullet graph.
			* @default true
			* @type {boolean}
			* @example 
			* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * enableAnimation : false                 
      * });
      * &lt;/script&gt;
			*/
            enableAnimation: true,
            /**		
			*  Sets a value whether to make the bullet graph responsive on resize.
			* @default true
            * @alias ejBulletGraph#enableResizing
			* @type {boolean}
			* @example 
			* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * enableResizing : false                  
      * });
      * &lt;/script&gt;
			*/
            enableResizing: true,
            /**		
			* Toggles the visibility of the range stroke color of the ticks.
			* @default false
            * @alias ejBulletGraph#applyRangeStrokeToTicks
			* @type {boolean}
			* @example 
			* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * applyRangeStrokeToTicks : true               
      * });
      * &lt;/script&gt;
			*/
            applyRangeStrokeToTicks: false,
            /**		
			* Toggles the visibility of the range stroke color of the labels.
			* @default false
            * @alias ejBulletGraph#applyRangeStrokeToLabels
			* @type {boolean}
			* @example 
			* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * applyRangeStrokeToLabels : true                
      * });
      * &lt;/script&gt;
			*/
            applyRangeStrokeToLabels: false,
            /**		
            * Contains property to customize the qualitative ranges.
            * @alias ejBulletGraph#qualitativeRanges
            * @type {array}
            */
            qualitativeRanges: [{
                /**		
				* Specifies the ending range to which the qualitative ranges will render.
				* @default 3
                * @alias ejBulletGraph#qualitativeRanges->rangeEnd
				* @type {number}
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * qualitativeRanges :[{rangeEnd : 4.5}]                  
      * });
      * &lt;/script&gt;
				*/
                rangeEnd: 4.3,
                /**		
				* Specifies the stroke for the qualitative ranges.
				* @default null
                * @alias ejBulletGraph#qualitativeRanges->rangeStroke
				* @type {string}
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * qualitativeRanges :[{rangeStroke : 5}]                 
      * });
      * &lt;/script&gt;
				*/
                rangeStroke: null,
                /**		
				* Specifies the opacity for the qualitative ranges.
				* @default 1
                * @alias ejBulletGraph#qualitativeRanges->rangeOpacity
				* @type {number}
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * qualitativeRanges :[{rangeOpacity : 0.5}]                 
      * });
      * &lt;/script&gt;
				*/
                rangeOpacity: 1
            }, {
                /**		
				* Specifies the ending range to which the qualitative ranges will render.
				* @default 7.3
                * @alias ejBulletGraph#qualitativeRanges->rangeEnd
				* @type {number}
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * qualitativeRanges :[{rangeEnd : 7}]                 
      * });
      * &lt;/script&gt;
				*/
                rangeEnd: 7.3,
                /**		
				* Specifies the stroke for the qualitative ranges.
				* @default null
                * @alias ejBulletGraph#qualitativeRanges->rangeStroke
				* @type {string}
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * qualitativeRanges :[{rangeStroke : 5}]                 
      * });
      * &lt;/script&gt;
				*/
                rangeStroke: null,
                /**		
				* Specifies the opacity for the qualitative ranges.
				* @default 1
                * @alias ejBulletGraph#qualitativeRanges->rangeOpacity
				* @type {number}
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * qualitativeRanges :[{rangeOpacity : 0.5}]                 
      * });
      * &lt;/script&gt;
				*/
                rangeOpacity: 1
            }, {
                /**		
				*  Specifies the ending range to which the qualitative ranges will render.
				* @default 10
                * @alias ejBulletGraph#qualitativeRanges->rangeEnd
				* @type {number}
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * qualitativeRanges :[{rangeEnd : 5}]                 
      * });
      * &lt;/script&gt;
				*/
                rangeEnd: 10,
                /**		
				* Specifies the stroke for the qualitative ranges.
				* @default null
                * @alias ejBulletGraph#qualitativeRanges->rangeStroke
				* @type {string}
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * qualitativeRanges :[{rangeStroke : 5}]                 
      * });
      * &lt;/script&gt;
				*/
                rangeStroke: null,
                /**		
				* Specifies the opacity for the qualitative ranges.
				* @default 1
                * @alias ejBulletGraph#qualitativeRanges->rangeOpacity
				* @type {number}
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * qualitativeRanges :[{rangeOpacity : 0.5}]                 
      * });
      * &lt;/script&gt;
				*/
                rangeOpacity: 1
            }],
            /**		
            * Contains property to customize the caption in bullet graph.
            * @alias ejBulletGraph#captionSettings
            * @type {object}
            */
            captionSettings: {
                /**		
				* Specifies the angel in which the caption is rendered.
				* @default 0
                * @alias ejBulletGraph#captionSettings->textAngle
				* @type {number}
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{textAngle : 5}                 
      * });
      * &lt;/script&gt;
      */
                textAngle: 0,
                /**		
				* Contains property to customize the location.
                * @alias ejBulletGraph#captionSettings->location
				* @type {object}
				*/
                location: {
                    /**		
                    * Specifies the position in horizontal direction
                    * @default 17
                    * @alias ejBulletGraph#captionSettings->location->x
                    * @type {number}
                    * @example 
                    * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{location :{x :15}}            
      * });
      * &lt;/script&gt;
                    */
                    x: 17,
                    /**		
                    * Specifies the position in horizontal direction
                    * @default 30
                    * @alias ejBulletGraph#captionSettings->location->y
                    * @type {number}
                    * @example 
                   * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{location :{y :15}}
      * });
      * &lt;/script&gt;
                    */
                    y: 30
                },
                /**		
				* Specifies the text to be displayed on bullet graph.
				* @default ""
                * @alias ejBulletGraph#captionSettings->text
				* @type {string}
				* @example 
				* &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{text : "Production"}
      * });
      * &lt;/script&gt;
				*/
                text: "",
                /**		
				* Contains property to customize the font of caption.
                * @alias ejBulletGraph#captionSettings->font
				* @type {object}
                */
                font: {
                    /**		
                    * Specifies the color of the text in caption.
                    * @default null
                    * @alias ejBulletGraph#captionSettings->font->color
                    * @type {string}
                    * @example 
                   * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{font :{color : "green"}}                  
      * });
      * &lt;/script&gt;
                    */
                    color: null,
                    /**		
                    * Specifies the fontFamily of caption. Caption text render with this fontFamily
                    * @default "Segoe UI"
                    * @alias ejBulletGraph#captionSettings->font->fontFamily
                    * @type {string}
                    * @example 
                    * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{font :{fontFamily : "algerian"}}
      * });
      * &lt;/script&gt;
                    */
                    fontFamily: 'Segoe UI',
                    /**		
                    * Specifies the fontStyle of caption. Caption text render with this fontStyle. See {@link FontStyle}
                    * @default "Normal"
                    * @alias ejBulletGraph#captionSettings->font->fontStyle
                    * @type {enum}
                    * @example 
                    * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{font :{fontStyle : "italic"}}                    
      * });
      * &lt;/script&gt;
                    */
                    fontStyle: 'Normal',
                    /**		
                    * Specifies the size of caption. Caption text render with this size
                    * @default "12px"
                    * @alias ejBulletGraph#captionSettings->font->size
                    * @type {string}
                    * @example 
                    * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{font :{size : "14px"}}                    
      * });
      * &lt;/script&gt;
                    */
                    size: '12px',
                    /**		
                    * Specifies the fontWeight of caption. Caption text render with this fontWeight. See {@link FontWeight}
                    * @default "regular"
                    * @alias ejBulletGraph#captionSettings->font->fontWeight
                    * @type {enum}
                    * @example 
                    * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{font :{fontWeight : "lighter"}}                    
      * });
      * &lt;/script&gt;
                    */
                    fontWeight: 'regular',
                    /**		
                    * Specifies the opacity of caption. Caption text render with this opacity.
                    * @default 1
                    * @alias ejBulletGraph#captionSettings->font->opacity
                    * @type {number}
                    * @example 
                    * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{font :{opacity : 0.5}}                    
      * });
      * &lt;/script&gt;
                    */
                    opacity: 1
                },
                /**		
				* Contains property to customize the subtitle.
                * @alias ejBulletGraph#captionSettings->subTitle
				* @type {object}
	            */
                subTitle: {
                    /**		
                    * Subtitle render in the specified angle.
                    * @default 0
                    * @alias ejBulletGraph#captionSettings->subTitle->textAngle
                    * @type {number}
                    * @example 
                    * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{ subTitle :{textAngle :10} }                    
      * });
      * &lt;/script&gt;
                    */
                    textAngle: 0,
                    /**		
                    * Specifies the text to be displayed as subtitle.
                    * @default ""
                    * @alias ejBulletGraph#captionSettings->subTitle->text
                    * @type {string}
                    * @example 
                   * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{ subTitle :{text : "Power Production"} }
      * });
      * &lt;/script&gt;e
                    */
                    text: "",
                    /**		
					* Contains property to customize the location of subtitle.
                    * @alias ejBulletGraph#captionSettings->subTitle->location
					* @type {object}
					*/
                    location: {
                        /**		
                        * Specifies the horizontal position of the subtitle.
                        * @default 10
                        * @alias ejBulletGraph#captionSettings->subTitle->location->x
                        * @type {number}
                        * @example 
                        * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{subTitle :{location : { x :12 }}}                    
      * });
      * &lt;/script&gt;
                        */
                        x: 10,
                        /**		
                        * Specifies the vertical position of the subtitle.
                        * @default 45
                        * @alias ejBulletGraph#captionSettings->subTitle->location->y
                        * @type {number}
                        * @example 
                        * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{subTitle :{location : { y :50 }}}                    
      * });
      * &lt;/script&gt;
      */
                        y: 45
                    },
                    /**		
					* Contains property to customize the font of subtitle.
                    * @alias ejBulletGraph#captionSettings->subTitle->font
					* @type {object}
                    */
                    font: {
                        /**		
                        * Specifies the color of the subtitle's text.
                        * @default null
                        * @alias ejBulletGraph#captionSettings->subTitle->font->color
                        * @type {string}
                        * @example 
                       * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{subTitle :{font : { color :"green" }}}                    
      * });
      * &lt;/script&gt;
      */
                        color: null,
                        /**		
                        * Specifies the fontFamily of subtitle. Subtitle text render with this fontFamily.
                        * @default "Segoe UI"
                        * @alias ejBulletGraph#captionSettings->subTitle->font->fontFamily
                        * @type {string}
                        * @example 
                         * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{subTitle :{font : { fontFamily :"Algerian" }}}                    
      * });
      * &lt;/script&gt;
      */
                        
                        fontFamily: 'Segoe UI',
                        /**		
                        * Specifies the fontStyle of subtitle. Subtitle text render with this fontStyle. See {@link FontStyle}
                        * @default "Normal"
                        * @alias ejBulletGraph#captionSettings->subTitle->font->fontStyle
                        * @type {enum}
                        * @example 
                         * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{subTitle :{font : { fontStyle :"italic" }}}                    
      * });
      * &lt;/script&gt;
      */
                        
                        fontStyle: 'Normal ',
                        /**		
                        * Specifies the size of subtitle. Subtitle text render with this size.
                        * @default "12px"
                        * @alias ejBulletGraph#captionSettings->subTitle->font->size
                        * @type {string}
                        * @example 
                        * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{subTitle :{font : { size :"14px" }}}                    
      * });
      * &lt;/script&gt;
      */
                        
                        size: '12px',
                        /**		
                        * Specifies the fontWeight of subtitle. Subtitle text render with this fontWeight. See {@link FontWeight}
                        * @default "regular"
                        * @alias ejBulletGraph#captionSettings->subTitle->font->fontWeight
                        * @type {enum}
                        * @example 
                         * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{subTitle :{font : { fontWeight :"lighter" }}}                    
      * });
      * &lt;/script&gt;
      */
                        fontWeight: 'regular',
                        /**		
                        * Specifies the opacity of subtitle. Subtitle text render with this opacity.
                        * @default 1
                        * @alias ejBulletGraph#captionSettings->subTitle->font->opacity
                        * @type {number}
                        * @example 
                         * &lt;div id="bulletGraph1"&gt;&lt;/div&gt; 
      * &lt;script&gt;
      * $("#bulletGraph1").ejBulletGraph({
      * captionSettings :{subTitle :{font : { opacity :0.5 }}}                    
      * });
      * &lt;/script&gt;
      
                        */
                        opacity: 1
                    }
                }
            },

            //Events
            /**     
			 * Fires on rendering of ticks.
			 * @event
			 * @name ejBulletGraph#drawTicks		
			 * @param{Object} args.Object returns the object of the bullet graph.
			 * @param{scaleElement}	args.scaleElement returns the options of the scale element.
			 * @param{tickElement} args.tickElement returns the current tick element.
			 * @param{tickType}	args.tickType returns the current tick element’s type.
			 * @example 
			 * //drawTicks event for bulletgraph
             * $("#bulletGraph1").ejBulletGraph({
             *    drawTicks: function (args) {}
             * });
			 */
            drawTicks: null,
            /**     
			 * Fires on rendering the labels.
			 * @event
			 * @name ejBulletGraph#drawLabels		
			 * @param {Object} args.Object returns the object of the bullet graph.
			 * @param {scaleElement} args.scaleElement returns the options of the scale element.
			 * @param {labelElement} args.tickElement returns the current label element.
			 * @param {labelType} args.labelType returns the label type.
			 * @example 
			 * //drawLabels event for bulletgraph
             * $("#bulletGraph1").ejBulletGraph({
             *    drawLabels: function (args) {}
             * });
			 */
            drawLabels: null,
            /**     
			 * Fires on rendering the caption of bullet graph.
			 * @event
			 * @name ejBulletGraph#drawCaption		
			 * @param {Object} args.Object returns the object of the bullet graph.
			 * @param {scaleElement} args.scaleElement returns the options of the scale element.
			 * @param {captionElement} args.captionElement returns the current captionSettings element.
			 * @param {captionType} args.captionType returns the type of the captionSettings.
			 * @example 
			 * //drawCaption event for bulletgraph
             * $("#bulletGraph1").ejBulletGraph({
             *    drawCaption: function (args) {}
             * });
			 */
            drawCaption: null,
            /**     
			 * Fires on rendering the qualitative ranges.
			 * @event
			 * @name ejBulletGraph#drawQualitativeRanges		
			 * @param {Object} args.Object returns the object of the bullet graph.
			 * @param {scaleElement} args.scaleElement returns the options of the scale element.
			 * @param {captionElement} args.captionElement returns the current captionSettings element.
			 * @param {captionType} args.captionType returns the type of the captionSettings.
			 * @example 
			 * //drawQualitativeRanges event for bulletgraph
             * $("#bulletGraph1").ejBulletGraph({
             *    drawQualitativeRanges: function (args) {}
             * });
			 */
            drawQualitativeRanges: null,
            /**     
			 * Fires on rednering the feature measure bar.
			 * @event
			 * @name ejBulletGraph#drawFeatureMeasureBar		
			 * @param {Object} args.Object returns the object of the bullet graph.
			 * @param {scaleElement} args.scaleElement returns the options of the scale element.
			 * @param {currentElement} args.currentElement returns the options of feature measure element.
			 * @param {Value} args.Value returns the value of the feature measure bar.
			 * @example 
			 * //drawFeatureMeasureBar event for bulletgraph
             * $("#bulletGraph1").ejBulletGraph({
             *    drawFeatureMeasureBar: function (args) {}
             * });
			 */
            drawFeatureMeasureBar: null,
            /**     
			 * Fires on rendering the category.
			 * @event
			 * @name ejBulletGraph#drawCategory		
			 * @param {Object} args.Object returns the object of the bullet graph.
			 * @param {scaleElement} args.scaleElement returns the options of the scale element.
			 * @param {categoryElement} args.categoryElement returns the options of category element.
			 * @param {Value}  args.Value returns the text value of the category that is drawn.
			 * @example 
			 * //drawCategory event for bulletgraph
             * $("#bulletGraph1").ejBulletGraph({
             *    drawCategory: function (args) {}
             * });
			 */
            drawCategory: null,
            /**     
			 * Fires on rendering the comparative measure symbol.
			 * @event
			 * @name ejBulletGraph#drawComparativeMeasureSymbol		
			 * @param {Object}  args.Object returns the object of the bullet graph.
			 * @param {scaleElement} args.scaleElement returns the options of the scale element.
			 * @param {targetElement} args.targetElement returns the options of comparative measure element.
			 * @param {Value} args.Value returns the value of the comparative measure symbol.
			 * @example 
			 * //drawComparativeMeasureSymbol event for bulletgraph
             * $("#bulletGraph1").ejBulletGraph({
             *    drawComparativeMeasureSymbol: function (args) {}
             * });
			 */
            drawComparativeMeasureSymbol: null
        },

        observables: ["value", "comparativeMeasureValue"],
        value: ej.util.valueFunction("value"),
        comparativeMeasureValue: ej.util.valueFunction("comparativeMeasureValue"),
        /**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            quantitativeScaleSettings: {
                labelSettings: "data",
                featureMeasures: "array"
            },
            fields: { dataSource: "data", query: "data" },
            qualitativeRanges: "array",
            captionSettings: "data"
        },

        // constructor function
        /**
         * Create the bullet graph widget
		 * @private
         */
        _init: function () {
            this._renderBulletGraph();
        },
        /**
         * check whether SVG element
		 * @private
         */
        _isSVG: function () {
            if (window.SVGSVGElement)
                return true;
            else
                return false;
        },
        /**
         * rendering the bullet graph
		 * @private
         */
        _renderBulletGraph: function () {
            if (this._isSVG()) {
                this.svgRenderer = new ej.EjSvgRender(this.element);
                this.svgObject = this.svgRenderer.svgObj;
                this._trigger("load");
                for (var i = 0; this.model.quantitativeScaleSettings.featureMeasures[i] != null; i++) {
                    if (this.model.quantitativeScaleSettings.featureMeasures[i].value == null)
                        this.model.quantitativeScaleSettings.featureMeasures[i].value = this.value();
                    if (this.model.quantitativeScaleSettings.featureMeasures[i].comparativeMeasureValue == null)
                        this.model.quantitativeScaleSettings.featureMeasures[i].comparativeMeasureValue = this.comparativeMeasureValue();
                }
                this._setTheme(ej.datavisualization.BulletGraph.Themes, this.model.theme);
                this._renderBulletElements();
                this.bindEvents();
                if (this.model.enableAnimation)
                    this._animateMeasures();
            }
        },
        /**
         * checking the animate state
		 * @private
         */
        _animateMeasures: function () {
            this._doAnimation();
            this._doLineAnimation();
        },
        /**
         * rendering the bullet Element
		 * @private
         */
        _renderBulletElements: function () {
            this.svgObject.setAttribute('width', this.model.width);
            this.svgObject.setAttribute('height', this.model.height);
            this.svgObject.setAttribute('viewBox', "0 0 " + this.model.width + " " + this.model.height);
            this.svgObject.setAttribute('preserveAspectRatio', "xMinYMin");
            this.svgWidth = this.model.width;
            this.svgHeight = this.model.height;
            var captionGroup = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_captionGroup' });
            var scaleGroup = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_scaleGroup' });
            var bulletGroup = this.svgRenderer.createGroup({ 'id': this.svgObject.id + '_outerWrap' });

            this._initializeValues();
            var intervalValue = ((this.model.quantitativeScaleLength) / ((this._scale.maximum - this._scale.minimum) / this._scale.interval));

            //render captionSettings
            this._drawCaption(captionGroup);

            //render scale
            this._scaleGroup = scaleGroup;
            this._drawScale(captionGroup, scaleGroup);

            //draw ranges
            this._drawQualitativeRanges(scaleGroup);

            //render ticks
            this._drawMajorTicks(intervalValue, scaleGroup);
            this._drawMinorTicks(intervalValue, scaleGroup);

            //render labels
            this._drawLabels(intervalValue, scaleGroup);

            // data binding
            this._bindData();

            $(captionGroup).appendTo(bulletGroup);
            $(scaleGroup).appendTo(bulletGroup);

            this._changeOrientation(bulletGroup);

            $(bulletGroup).appendTo(this.svgObject);
            $(this.svgObject).appendTo(this.element);
        },
        /**
         * Initializing the control values
		 * @private
         */
        _initializeValues: function () {
            this._scale = this.model.quantitativeScaleSettings;
            this._labelPosition = this._scale.labelSettings.position;
            this._tickPosition = this._scale.tickPosition;
            this._flowDirection = this.model.flowDirection;
            this._orientation = this.model.orientation;
        },
        /**
         * checking the orientation
		 * @private
         */
        _changeOrientation: function (bulletGroup) {
            if (this._orientation == ej.datavisualization.BulletGraph.Orientation.Vertical) {
                bulletGroup.setAttribute("transform", "translate(" + (this.model.height - this.model.width) + ", " + (-(this.model.width + (2 * this._scale.labelSettings.offset) + this._scale.labelSettings.size)) + ") scale(1) rotate(-90 " + this.model.width + " " + this.model.height + ")");
            }
        },
        /**
         * To configure the properties at runtime using SetModel		
		 * @private
         */
        _setModel: function (options) {
            var isFlag = true;
            for (var key in options) {
                this.model.enableAnimation = false;
                switch (key) {
                    case "height":
                        this.model.height = options[key];
                        break;
                    case "width":
                        this.model.width = options[key];
                        break;
                    case "theme":
                        this.model.theme = options[key];
                        this._setTheme(ej.datavisualization.BulletGraph.Themes, this.model.theme);
                        break;
                    case "orientation":
                        this.model.orientation = options[key];
                        break;
                    case "flowDirection":
                        this.model.flowDirection = options[key];
                        break;
                    case "qualitativeRangeSize":
                        this.model.qualitativeRangeSize = options[key];
                        break;
                    case "quantitativeScaleLength":
                        this.model.quantitativeScaleLength = options[key];
                        break;
                    case "quantitativeScaleSettings":
                        $.extend(true, this.model.quantitativeScaleSettings, {}, options[key]);
                        break;
                    case "applyRangeStrokeToTicks":
                        this.model.applyRangeStrokeToTicks = options[key];
                        break;
                    case "applyRangeStrokeToLabels":
                        this.model.applyRangeStrokeToLabels = options[key];
                        break;
                    case "qualitativeRanges":
                        $.extend(true, this.model.qualitativeRanges, {}, options[key]);
                        break;
                    case "captionSettings":
                        $.extend(true, this.model.captionSettings, {}, options[key]);
                        break;
                    case "dataSource":
                        $.extend(true, this.model.fields, {}, options[key]);
                        break;
                    case "value":
                        for (var i = 0; this.model.quantitativeScaleSettings.featureMeasures[i] != null; i++) {
                            this.model.quantitativeScaleSettings.featureMeasures[i].value = parseFloat(this.value());
                        }
                        break;
                    case "comparativeMeasureValue":
                        for (var i = 0; this.model.quantitativeScaleSettings.featureMeasures[i] != null; i++) {
                            this.model.quantitativeScaleSettings.featureMeasures[i].comparativeMeasureValue = parseFloat(this.comparativeMeasureValue());
                        }
                        break;
                    case "enableAnimation":
                        this.model.enableAnimation = options[key];
                        if (this.model.enableAnimation) {
                            $(this.svgObject).empty();
                            this._renderBulletElements();
                            this._animateMeasures();
                        }
                        isFlag = false;
                        break;
                }
            }
            if (isFlag) {
                $(this.svgObject).empty();
                this._renderBulletElements();
            }
        },
        /**
         * To bind the datasource value		
		 * @private
         */
        _bindData: function () {

            if (!ej.isNullOrUndefined(this.model.fields) && this.model.fields["dataSource"] != null) {
                if (this.model.fields["dataSource"] instanceof ej.DataManager) {
                    this._initDataSource();
                }
                else {
                    this._dataCount = this.model.fields["dataSource"].length;
                    this._drawMeasures();
                }
            }
            else {      //this.model.quantitativeScaleSettings.featureMeasures != null
                this._dataCount = this._scale.featureMeasures.length;
                this._drawMeasures();
            }
        },
        /**
         * To draw measures value		
		 * @private
         */
        _drawMeasures: function () {
            this._drawFeatureMeasureBar();
            this._drawComparativeMeasureSymbol();
        },
        /**
         * To draw measures value		
		 * @private
         */
        _initDataSource: function () {
            var query = this._columnToSelect(this.model.fields);
            var proxy = this;
            var queryPromise = this.model.fields["dataSource"].executeQuery(query);
            queryPromise.done(function (e) {
                proxy.model.fields["dataSource"] = e.result;
                proxy._dataCount = e.result.length;
                proxy._drawFeatureMeasureBar();
                proxy._drawComparativeMeasureSymbol();
            });
        },
        /**
         * To select column name from the datasource		
		 * @private
         */
        _columnToSelect: function (mapper) {
            var column = [], queryManager = ej.Query();
            if (ej.isNullOrUndefined(mapper.query)) {
                for (var col in mapper) {
                    if (col !== "tableName" && col !== "query" && col !== "dataSource")
                        column.push(mapper[col]);
                }
                if (column.length > 0)
                    queryManager.select(column);
                if (!this.model.fields["dataSource"].dataSource.url.match(mapper.tableName + "$"))
                    !ej.isNullOrUndefined(mapper.tableName) && queryManager.from(mapper.tableName);
            }
            else
                queryManager = mapper.query;
            return queryManager;
        },
        /**
         * To draw the captionSettings for the graph	
		 * @private
         */
        _drawCaption: function (captionGroup) {
            if (this.model.drawCaption)
                this._onDrawCaption(this._textOptions(this.model.captionSettings), "MainTitle", this.model.captionSettings.text);
            this.svgRenderer.drawText(this._textOptions(this.model.captionSettings), this.model.captionSettings.text, captionGroup);
            if (this.model.captionSettings.subTitle.text != "") {
                if (this.model.drawCaption)
                    this._onDrawCaption(this._textOptions(this.model.captionSettings.subTitle), "SubTitle", this.model.captionSettings.subTitle.text);
                this.svgRenderer.drawText(this._textOptions(this.model.captionSettings.subTitle), this.model.captionSettings.subTitle.text, captionGroup);
            }
        },
        /**
         * To give the font option to the text	
		 * @private
         */
        _textOptions: function (text) {
            var y = (text.text === this.model.captionSettings.text) ? text.location.y : text.location.y - 15;
            var textOptions = {
                'x': text.location.x,
                'y': text.location.y,
                'fill': text.font.color,
                'font-size': text.font.size,
                'font-family': text.font.fontFamily,
                'font-style': text.font.fontStyle,
                'font-weight': text.font.fontWeight,
                'text-anchor': 'start',
                'opacity': text.font.opacity,
                'dominant-baseline': 'middle',
                'transform': 'rotate(' + text.textAngle + ',' + text.location.x + ',' + y + ')'
            };
            return textOptions;
        },
        /**
         * To draw the scales
		 * @private
         */
        _drawScale: function (captionGroup, scaleGroup) {
            var pointY, pointX;
            if (this._tickPosition == ej.datavisualization.BulletGraph.TickPosition.Below || this._tickPosition == ej.datavisualization.BulletGraph.TickPosition.Cross)
                pointY = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y : this._scale.location.y + this._scale.labelSettings.offset + this._scale.labelSettings.size;
            else
                pointY = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + this._scale.majorTickSettings.size : this._scale.location.y + this._scale.labelSettings.offset + this._scale.labelSettings.size + this._scale.majorTickSettings.size;

            if (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward)
                pointX = this._scale.location.x;
            else
                pointX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.location.x - this._scale.labelSettings.offset : this._scale.location.x;

            var scaleOptions = {
                'id': this.svgObject.id + '_SvgScale',
                'x': pointX,
                'y': pointY,
                'width': this.model.quantitativeScaleLength,
                'height': this.model.qualitativeRangeSize,
                'fill': "transparent",
                'stroke-width': 0
            };
            this.svgRenderer.drawRect(scaleOptions, scaleGroup);
        },
        /**
         * To draw the major ticks
		 * @private
         */
        _drawMajorTicks: function (intervalValue, scaleGroup) {
            var majorPointX, y1, tickIndex = 0;
            if (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward)
                majorPointX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.location.x + (this._scale.majorTickSettings.width / 2) : this._scale.location.x + this.model.quantitativeScaleLength - this._scale.labelSettings.offset + (this._scale.majorTickSettings.width / 2);
            else
                majorPointX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.location.x + this.model.quantitativeScaleLength - this._scale.labelSettings.offset - (this._scale.majorTickSettings.width / 2) : this._scale.location.x + (this._scale.majorTickSettings.width / 2);

            if (this._tickPosition == ej.datavisualization.BulletGraph.TickPosition.Below)
                y1 = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + this.model.qualitativeRangeSize : this._scale.location.y + this.model.qualitativeRangeSize + this._scale.labelSettings.offset + this._scale.labelSettings.size;
            else if (this._tickPosition == ej.datavisualization.BulletGraph.TickPosition.Above)
                y1 = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y : this._scale.location.y + this._scale.labelSettings.offset + this._scale.labelSettings.size;
            else
                y1 = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + ((this.model.qualitativeRangeSize) / 2) - (this._scale.majorTickSettings.size / 2) : this._scale.location.y + ((this.model.qualitativeRangeSize) / 2) - (this._scale.majorTickSettings.size / 2) + this._scale.labelSettings.offset + this._scale.labelSettings.size;

            for (var i = this._scale.minimum; i <= this._scale.maximum; i += this._scale.interval) {
                tickIndex++;
                if (i >= this._scale.maximum)
                    majorPointX -= this._scale.majorTickSettings.width;
                if (this._orientation == ej.datavisualization.BulletGraph.Orientation.Vertical && this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward)
                    majorPointX = (i >= this._scale.maximum) ? majorPointX + (this._scale.majorTickSettings.width) : (i == this._scale.minimum) ? majorPointX - (this._scale.majorTickSettings.width) : majorPointX;

                if (this.model.applyRangeStrokeToTicks)
                    strokeColor = this._bindingRangeStrokes(majorPointX - (this._scale.majorTickSettings.width / 2));
                var options = {
                    'x1': majorPointX,
                    'y1': y1,
                    'x2': majorPointX,
                    'y2': y1 + this._scale.majorTickSettings.size,
                    'stroke-width': this._scale.majorTickSettings.width,
                    'stroke': (this.model.applyRangeStrokeToTicks) ? strokeColor : this._scale.majorTickSettings.stroke
                };
                if (this._orientation == ej.datavisualization.BulletGraph.Orientation.Vertical && this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward && i == this._scale.minimum)
                    majorPointX = majorPointX + this._scale.majorTickSettings.width;
                if (this.model.drawTicks)
                    this._onDrawTicks(options, "MajorTick", tickIndex);
                var majorTicks = this.svgRenderer.createLine(options);
                majorPointX = ((this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Backward && this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) || (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward && this._orientation == ej.datavisualization.BulletGraph.Orientation.Vertical)) ? majorPointX - intervalValue : majorPointX + intervalValue;
                scaleGroup.appendChild(majorTicks);
            }
        },
        /**
         * To bind the stroke in forward direction
		 * @private
         */
        _forwardStrokeBinding: function (majorPointX) {
            if (majorPointX >= this._scale.location.x && majorPointX <= (this._rangeCollection[0] + this._scale.location.x)) {
                return this.model.qualitativeRanges[0].rangeStroke;
            }
            for (var k = 0; k <= this._rangeCollection.length - 1; k++) {
                if (majorPointX >= (this._rangeCollection[k] + this._scale.location.x) && majorPointX <= (this._rangeCollection[k + 1] + this._scale.location.x))
                    return this.model.qualitativeRanges[k + 1].rangeStroke;
            }
        },
        /**
         * To bind the stroke in backward direction
		 * @private
         */
        _backwardStrokeBinding: function (majorPointX) {
            if (majorPointX >= this._rangeCollection[this._rangeCollection.length - 1]) {
                return this.model.qualitativeRanges[0].rangeStroke;
            }
            for (k = 0; k <= this._rangeCollection.length - 1; k++) {
                if (majorPointX >= this._rangeCollection[k] && majorPointX < this._rangeCollection[k + 1]) {
                    var index = $.inArray(this._rangeCollection[k], this._rangeCollection)
                    return this.model.qualitativeRanges[(this._rangeCollection.length - 1) - index].rangeStroke;
                }
            }
        },
        /**
         * To bind the range stroke
		 * @private
         */
        _bindingRangeStrokes: function (majorPointX) {
            if (this._rangeCollection.length == 1) {
                if (majorPointX >= this._scale.location.x && majorPointX <= (this._rangeCollection[0] + this._scale.location.x))
                    return this.model.qualitativeRanges[0].rangeStroke;
            }
            else {
                if ((this.model.orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal && this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward) || (this.model.orientation == ej.datavisualization.BulletGraph.Orientation.Vertical && this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Backward)) {
                    return this._forwardStrokeBinding(majorPointX);
                }
                else {
                    return this._backwardStrokeBinding(majorPointX);
                }
            }
        },
        /**
         * To draw minor ticks
		 * @private
         */
        _drawMinorTicks: function (intervalValue, scaleGroup) {
            var majorPointX, minorPointX, y1, y2, x, tickIndex = 0;

            if (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward)
                majorPointX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.location.x : this._scale.location.x - this._scale.labelSettings.offset - (2 * this._scale.minorTickSettings.width);
            else
                majorPointX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.location.x + this.model.quantitativeScaleLength - this._scale.labelSettings.offset - (this._scale.minorTickSettings.width / 2) : this._scale.location.x;

            if (this._tickPosition == ej.datavisualization.BulletGraph.TickPosition.Below) {
                y1 = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + this.model.qualitativeRangeSize : this._scale.location.y + this.model.qualitativeRangeSize + this._scale.labelSettings.offset + this._scale.labelSettings.size;
                y2 = y1 + this._scale.minorTickSettings.size;
            }
            else if (this._tickPosition == ej.datavisualization.BulletGraph.TickPosition.Above) {
                y1 = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + this._scale.minorTickSettings.size : this._scale.location.y + this._scale.labelSettings.offset + this._scale.labelSettings.size + this._scale.minorTickSettings.size;
                y2 = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + this._scale.majorTickSettings.size : this._scale.location.y + this._scale.labelSettings.offset + this._scale.labelSettings.size + this._scale.majorTickSettings.size;
            }
            else {
                y1 = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + ((this.model.qualitativeRangeSize) / 2) - (this._scale.minorTickSettings.size / 2) : this._scale.location.y + ((this.model.qualitativeRangeSize) / 2) - (this._scale.minorTickSettings.size / 2) + this._scale.labelSettings.offset + this._scale.labelSettings.size;
                y2 = y1 + this._scale.minorTickSettings.size;
            }
            var maxLimit = (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Backward && this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.maximum + 1 : this._scale.maximum;
            for (var i = this._scale.minimum; i <= maxLimit; i += this._scale.interval) {
                minorPointX = intervalValue / this._scale.minorTicksPerInterval;

                for (var j = 1; j <= this._scale.minorTicksPerInterval; j++) {
                    tickIndex++;
                    x = majorPointX + minorPointX - (minorPointX / (this._scale.minorTicksPerInterval + 1));

                    if (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Backward && this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) {
                        if (tickIndex >= ((this._scale.maximum - this._scale.minimum) * this._scale.minorTicksPerInterval))
                            x += (this._scale.minorTickSettings.width / 2);
                    }

                    if (this.model.applyRangeStrokeToTicks)
                        strokeColor = this._bindingRangeStrokes(x);
                    var options = {
                        'x1': x,
                        'y1': y1,
                        'x2': x,
                        'y2': y2,
                        'stroke-width': this._scale.minorTickSettings.width,
                        'stroke': (this.model.applyRangeStrokeToTicks) ? strokeColor : this._scale.minorTickSettings.stroke
                    };
                    if (this.model.drawTicks)
                        this._onDrawTicks(options, "MinorTick", tickIndex);
                    var chkMax = ((this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Backward && this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) || (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward && this._orientation == ej.datavisualization.BulletGraph.Orientation.Vertical)) ? (this.model.quantitativeScaleLength + this._scale.location.x - this._scale.labelSettings.offset + 1) : (this.model.quantitativeScaleLength + this._scale.location.x + 1);
                    if (x <= chkMax) {
                        var minorTicks = this.svgRenderer.createLine(options);
                        scaleGroup.appendChild(minorTicks);
                    }
                    minorPointX = (intervalValue / this._scale.minorTicksPerInterval) * (j + 1);
                }
                majorPointX = (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Backward && this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? majorPointX - intervalValue : majorPointX + intervalValue;
            }
        },
        /**
         * To Draw labels
		 * @private
         */
        _drawLabels: function (intervalValue, scaleGroup) {
            var labelX, pointY;
            if (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward)
                labelX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.location.x : this._scale.location.x + this.model.quantitativeScaleLength - this._scale.labelSettings.offset - (this._scale.majorTickSettings.width / 2);
            else
                labelX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.location.x + this.model.quantitativeScaleLength - this._scale.labelSettings.offset - this._scale.majorTickSettings.width : this._scale.location.x - (this._scale.majorTickSettings.width / 2);

            if (this._tickPosition == ej.datavisualization.BulletGraph.TickPosition.Below || this._tickPosition == ej.datavisualization.BulletGraph.TickPosition.Cross)
                pointY = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + this.model.qualitativeRangeSize + this._scale.majorTickSettings.size + this._scale.labelSettings.offset : this._scale.location.y + this._scale.labelSettings.size;
            else
                pointY = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + this.model.qualitativeRangeSize + this._scale.labelSettings.offset + this._scale.majorTickSettings.size : this._scale.location.y + this._scale.labelSettings.size;

            for (var i = this._scale.minimum; i <= this._scale.maximum; i += this._scale.interval) {
                if (this._orientation == ej.datavisualization.BulletGraph.Orientation.Vertical)
                    transformText = 'rotate(' + 90 + ',' + (labelX - 4) + ',' + pointY + ')';
                else
                    transformText = 'rotate(' + 0 + ',' + labelX + ',' + pointY + ')';
                labelX = (i == this._scale.maximum) ? labelX - (this._scale.majorTickSettings.width) : labelX;
                if (this._orientation == ej.datavisualization.BulletGraph.Orientation.Vertical)
                    labelX = (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward) ? (i == this._scale.maximum || i == this._scale.minimum) ? labelX + (this._scale.majorTickSettings.width) : labelX : (i == this._scale.minimum) ? labelX + (this._scale.majorTickSettings.width / 2) : labelX;

                if (this.model.applyRangeStrokeToLabels)
                    strokeColor = this._bindingRangeStrokes(labelX);

                var labelOptions = {
                    'x': labelX,
                    'y': pointY,
                    'text-anchor': 'middle',
                    'fill': (this.model.applyRangeStrokeToLabels) ? strokeColor : this._scale.labelSettings.stroke,
                    'font-size': this._scale.labelSettings.size + "px",
                    'font-family': this._scale.labelSettings.font.fontFamily,
                    'font-style': this._scale.labelSettings.font.fontStyle,
                    'font-weight': this._scale.labelSettings.font.fontWeight,
                    'opacity': this._scale.labelSettings.font.opacity,
                    'transform': transformText
                };
                if (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward)
                    labelX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? labelX + intervalValue : labelX - intervalValue;
                else
                    labelX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? labelX - intervalValue : labelX + intervalValue;

                if (this.model.drawLabels)
                    this._onDrawLabels(labelOptions, "AxisLabel", i);
                var settings=this.model.quantitativeScaleSettings.labelSettings;
                this.svgRenderer.drawText(labelOptions, settings.labelPrefix + i + settings.labelSuffix, scaleGroup);
            }
        },
        /**
         * To qualititative ranges
		 * @private
         */
        _drawQualitativeRanges: function (scaleGroup) {
            var pointX, pointY, width;
            this._rangeCollection = [];
            if (this._tickPosition == ej.datavisualization.BulletGraph.TickPosition.Below || this._tickPosition == ej.datavisualization.BulletGraph.TickPosition.Cross)
                pointY = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y : this._scale.location.y + this._scale.labelSettings.offset + this._scale.labelSettings.size;
            else
                pointY = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + this._scale.majorTickSettings.size : this._scale.location.y + this._scale.labelSettings.offset + this._scale.labelSettings.size + this._scale.majorTickSettings.size;

            for (var i = this.model.qualitativeRanges.length - 1; i >= 0; i--) {
                if (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward) {
                    pointX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.location.x : this._scale.location.x - this._scale.labelSettings.offset + (this.model.quantitativeScaleLength - this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - this.model.qualitativeRanges[i].rangeEnd))));
                    width = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - this.model.qualitativeRanges[i].rangeEnd))) : this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - this.model.qualitativeRanges[i].rangeEnd)));
                }
                else {
                    pointX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.location.x - this._scale.labelSettings.offset + (this.model.quantitativeScaleLength - this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - this.model.qualitativeRanges[i].rangeEnd)))) : this._scale.location.x;
                    width = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - this.model.qualitativeRanges[i].rangeEnd))) : this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - this.model.qualitativeRanges[i].rangeEnd)));
                }
                var rangeOptions = {
                    'x': pointX,
                    'y': pointY,
                    'height': this.model.qualitativeRangeSize,
                    'width': width,
                    'fill': this.model.qualitativeRanges[i].rangeStroke,
                    'opacity': this.model.qualitativeRanges[i].rangeOpacity
                };
                ((this.model.orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal && this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward) || (this.model.orientation == ej.datavisualization.BulletGraph.Orientation.Vertical && this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Backward)) ? this._rangeCollection.push(width) : this._rangeCollection.push(pointX);
                if (this.model.drawQualitativeRanges)
                    this._onDrawQualitativeRanges(rangeOptions, this.model.qualitativeRanges[i].rangeEnd, i);
                this.svgRenderer.drawRect(rangeOptions, scaleGroup);
            }
            this._rangeCollection.sort(this._sortRangeCollection);
        },
        /**
         * To return the range value
		 * @private
         */
        _sortRangeCollection: function (a, b) {
            return (a - b);
        },
        /**
         * To draw Feature Measure Bar
		 * @private
         */
        _drawFeatureMeasureBar: function () {
            var j = 1, count, value, categoryValue;
            var pointY, lPointY, pointX, width, lPointX;
            if (this._dataCount > 0) {
                for (var i = this._dataCount - 1; i >= 0; i--) {
                    value = (!ej.isNullOrUndefined(this.model.fields) && this.model.fields["dataSource"] != null) ? this.model.fields["dataSource"][i][this.model.fields.featureMeasures] : this._scale.featureMeasures[i].value;
                    categoryValue = (!ej.isNullOrUndefined(this.model.fields) && this.model.fields["dataSource"] != null) ? this.model.fields["dataSource"][i][this.model.fields.category] : this._scale.featureMeasures[i].category;

                    if (this._tickPosition == ej.datavisualization.BulletGraph.TickPosition.Below || this._tickPosition == ej.datavisualization.BulletGraph.TickPosition.Cross) {
                        pointY = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) - (this._scale.featuredMeasureSettings.width / 2) : this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) - (this._scale.featuredMeasureSettings.width / 2) + this._scale.labelSettings.offset + this._scale.labelSettings.size;
                        lPointY = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) + (this._scale.featuredMeasureSettings.width / 2) - 1 : this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) + (this._scale.featuredMeasureSettings.width / 2) - 1 + this._scale.labelSettings.offset + this._scale.labelSettings.size;
                    }
                    else {
                        pointY = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) - (this._scale.featuredMeasureSettings.width / 2) + this._scale.majorTickSettings.size : this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) - (this._scale.featuredMeasureSettings.width / 2) + this._scale.majorTickSettings.size + this._scale.labelSettings.offset + this._scale.labelSettings.size;
                        lPointY = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) + (this._scale.featuredMeasureSettings.width / 2) - 1 + this._scale.majorTickSettings.size : this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) + (this._scale.featuredMeasureSettings.width / 2) - 1 + this._scale.majorTickSettings.size + this._scale.labelSettings.offset + this._scale.labelSettings.size;
                    }

                    if (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward) {
                        var stringLength = (!ej.isNullOrUndefined(categoryValue)) ? categoryValue.toString().length : 0;
                        pointX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.location.x : this._scale.location.x - this._scale.labelSettings.offset + (this.model.quantitativeScaleLength - this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - value))));
                        width = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - value))) : this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - value)));
                        lPointX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? pointX - this._scale.labelSettings.offset - stringLength : this._scale.location.x + this.model.quantitativeScaleLength;
                    }
                    else {
                        pointX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.location.x - this._scale.labelSettings.offset + (this.model.quantitativeScaleLength - this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - value)))) : this._scale.location.x;
                        width = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - value))) : this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - value)));
                        lPointX = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.location.x + this.model.quantitativeScaleLength + this._scale.labelSettings.offset : this._scale.location.x - this._scale.labelSettings.offset;
                    }
                    var featureBarOptions = {
                        'class': this.svgObject.id + "_FeatureMeasure",
                        'id': this.svgObject.id + "_FeatureMeasure_" + i,
                        'x': pointX,
                        'y': pointY,
                        'height': this._scale.featuredMeasureSettings.width,
                        'width': width,
                        'fill': this._scale.featuredMeasureSettings.stroke,
                        'onmouseover': "evt.target.setAttribute('opacity', '0.7')",
                        'onmouseout': "evt.target.setAttribute('opacity', '1')"
                    };
                    if (this.model.drawFeatureMeasureBar)
                        this._onDrawFeatureMeasureBar(featureBarOptions, value);
                    this.svgRenderer.drawRect(featureBarOptions, this._scaleGroup);

                    if (this._orientation == ej.datavisualization.BulletGraph.Orientation.Vertical)
                        transformText = 'rotate(' + 90 + ',' + lPointX + ',' + (lPointY - 4) + ')';
                    else
                        transformText = 'rotate(' + 0 + ',' + lPointX + ',' + lPointY + ')';

                    var categoryOptions = {
                        'x': lPointX,
                        'y': lPointY + (this._scale.featuredMeasureSettings.width / 2),
                        'text-anchor': 'middle',
                        'fill': this._scale.labelSettings.stroke,
                        'font-size': this._scale.labelSettings.size + "px",
                        'font-family': this._scale.labelSettings.font.fontFamily,
                        'font-style': this._scale.labelSettings.font.fontStyle,
                        'font-weight': this._scale.labelSettings.font.fontWeight,
                        'opacity': this._scale.labelSettings.font.opacity,
                        'transform': transformText
                    };
                    if (this.model.drawCategory)
                        this._onDrawCategoryText(categoryOptions, categoryValue);
                    if (!ej.isNullOrUndefined(categoryValue))
                        this.svgRenderer.drawText(categoryOptions, categoryValue, this._scaleGroup);
                    j += 2;
                    this.value(value);
                }

            }
        },
        /**
         * To draw Comparitive Measure symbol
		 * @private
         */
        _drawComparativeMeasureSymbol: function () {
            var j = 1, value;
            var y1, y2, x1;
            if (this._dataCount > 0) {
                for (var i = this._dataCount - 1; i >= 0; i--) {
                    value = (!ej.isNullOrUndefined(this.model.fields) && this.model.fields["dataSource"] != null) ? this.model.fields["dataSource"][i][this.model.fields.comparativeMeasure] : this._scale.featureMeasures[i].comparativeMeasureValue;

                    if (this._tickPosition == ej.datavisualization.BulletGraph.TickPosition.Below || this._tickPosition == ej.datavisualization.BulletGraph.TickPosition.Cross) {
                        y1 = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) - (this._scale.featuredMeasureSettings.width / 2) - this._scale.featuredMeasureSettings.width : this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) - (this._scale.featuredMeasureSettings.width / 2) - this._scale.featuredMeasureSettings.width + this._scale.labelSettings.offset + this._scale.labelSettings.size;
                        y2 = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) - (this._scale.featuredMeasureSettings.width / 2) + (2 * this._scale.featuredMeasureSettings.width) : this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) - (this._scale.featuredMeasureSettings.width / 2) + (2 * this._scale.featuredMeasureSettings.width) + this._scale.labelSettings.offset + this._scale.labelSettings.size;
                    }
                    else {
                        y1 = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) - (this._scale.featuredMeasureSettings.width / 2) - this._scale.featuredMeasureSettings.width + this._scale.majorTickSettings.size : this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) - (this._scale.featuredMeasureSettings.width / 2) - this._scale.featuredMeasureSettings.width + this._scale.majorTickSettings.size + this._scale.labelSettings.offset + this._scale.labelSettings.size;
                        y2 = (this._labelPosition == ej.datavisualization.BulletGraph.LabelPosition.Below) ? this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) - (this._scale.featuredMeasureSettings.width / 2) + (2 * this._scale.featuredMeasureSettings.width) + this._scale.majorTickSettings.size : this._scale.location.y + (((this.model.qualitativeRangeSize / this._dataCount) * j) / 2) - (this._scale.featuredMeasureSettings.width / 2) + (2 * this._scale.featuredMeasureSettings.width) + this._scale.majorTickSettings.size + this._scale.labelSettings.offset + this._scale.labelSettings.size;
                    }

                    if (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward)
                        x1 = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.location.x + (this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - value)))) : this._scale.location.x - this._scale.labelSettings.offset + (this.model.quantitativeScaleLength - (this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - value)))));
                    else
                        x1 = (this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) ? this._scale.location.x - this._scale.labelSettings.offset + (this.model.quantitativeScaleLength - (this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - value))))) : this._scale.location.x + (this.model.quantitativeScaleLength / ((this._scale.maximum - this._scale.minimum) / ((this._scale.maximum - this._scale.minimum) - (this._scale.maximum - value))));

                    var compareMeasureOptions = {
                        'class': this.svgObject.id + "_ComparativeMeasure",
                        'id': this.svgObject.id + "_ComparativeMeasure_" + i,
                        'x1': (value == this._scale.maximum) ? x1 - (this._scale.comparativeMeasureSettings.width / 2) : (value == this._scale.minimum) ? x1 + (this._scale.comparativeMeasureSettings.width / 2) : x1,
                        'y1': y1,
                        'x2': (value == this._scale.maximum) ? x1 - (this._scale.comparativeMeasureSettings.width / 2) : (value == this._scale.minimum) ? x1 + (this._scale.comparativeMeasureSettings.width / 2) : x1,
                        'y2': y2,
                        'stroke-width': this._scale.comparativeMeasureSettings.width,
                        'stroke': this._scale.comparativeMeasureSettings.stroke
                    };
                    if (this.model.drawComparativeMeasureSymbol)
                        this._onDrawComparativeMeasure(compareMeasureOptions, value);
                    this.svgRenderer.drawLine(compareMeasureOptions, this._scaleGroup);
                    j += 2;
                    this.comparativeMeasureValue(value);
                }
            }
        },
        /**
         * To set the theme for the bullet graph
		 * @private
         */
        _setTheme: function (jsonObj, themeName) {
            var result = [];
            this._scale = this.model.quantitativeScaleSettings;
            for (var name in jsonObj) {
                result.push(name);
            }
            for (var i = 0; i < result.length; i++) {
                this._scale.majorTickSettings.stroke = ((!this._scale.majorTickSettings.stroke || this._scale.majorTickSettings.stroke == jsonObj[result[i]].quantitativeScaleSettings.majorTickSettings.stroke) ? jsonObj[themeName].quantitativeScaleSettings.majorTickSettings.stroke : this._scale.majorTickSettings.stroke);
                this._scale.minorTickSettings.stroke = ((!this._scale.minorTickSettings.stroke || this._scale.minorTickSettings.stroke == jsonObj[result[i]].quantitativeScaleSettings.minorTickSettings.stroke) ? jsonObj[themeName].quantitativeScaleSettings.minorTickSettings.stroke : this._scale.minorTickSettings.stroke);
                this._scale.labelSettings.stroke = ((!this._scale.labelSettings.stroke || this._scale.labelSettings.stroke == jsonObj[result[i]].quantitativeScaleSettings.labelSettings.stroke) ? jsonObj[themeName].quantitativeScaleSettings.labelSettings.stroke : this._scale.labelSettings.stroke);
                this._scale.featuredMeasureSettings.stroke = ((!this._scale.featuredMeasureSettings.stroke || this._scale.featuredMeasureSettings.stroke == jsonObj[result[i]].quantitativeScaleSettings.featuredMeasureSettings.stroke) ? jsonObj[themeName].quantitativeScaleSettings.featuredMeasureSettings.stroke : this._scale.featuredMeasureSettings.stroke);
                this._scale.comparativeMeasureSettings.stroke = ((!this._scale.comparativeMeasureSettings.stroke || this._scale.comparativeMeasureSettings.stroke == jsonObj[result[i]].quantitativeScaleSettings.comparativeMeasureSettings.stroke) ? jsonObj[themeName].quantitativeScaleSettings.comparativeMeasureSettings.stroke : this._scale.comparativeMeasureSettings.stroke);
                this.model.captionSettings.font.color = ((!this.model.captionSettings.font.color || this.model.captionSettings.font.color == jsonObj[result[i]].captionSettings.font.color) ? jsonObj[themeName].captionSettings.font.color : this.model.captionSettings.font.color);
                this.model.captionSettings.subTitle.font.color = ((!this.model.captionSettings.subTitle.font.color || this.model.captionSettings.subTitle.font.color == jsonObj[result[i]].captionSettings.subTitle.font.color) ? jsonObj[themeName].captionSettings.subTitle.font.color : this.model.captionSettings.subTitle.font.color);
                for (var j = 0; j < this.model.qualitativeRanges.length; j++)
                    this.model.qualitativeRanges[j].rangeStroke = ((!this.model.qualitativeRanges[j].rangeStroke) ? (ej.isNullOrUndefined(jsonObj[themeName].qualitativeRanges[j]) ? jsonObj[themeName].qualitativeRanges[0].rangeStroke : jsonObj[themeName].qualitativeRanges[j].rangeStroke) : this.model.qualitativeRanges[j].rangeStroke);
            }
            //            this.model = $.extend(true, this.model, jsonObj[themeName], this.model);
        },

        // ********************************* ClientSide Events ************************************
        /**
         * Section For handle the DrawTicks event
		 * @private
         */
        _onDrawTicks: function (tickOptions, tickType, tickIndex) {
            var data = { object: this, scaleElement: this.model.quantitativeScaleSettings, tickIndex: tickIndex, tickElement: tickOptions, tickType: tickType };
            this._trigger("drawTicks", data);
        },
        /**
         * Section For handle the DrawLabels event
		 * @private
         */
        _onDrawLabels: function (labelOptions, labelType, labelValue) {
            var data = { object: this, scaleElement: this.model.quantitativeScaleSettings, labelValue: labelValue, labelElement: labelOptions, labelType: labelType };
            this._trigger("drawLabels", data);

        },
        /**
         * Section For handle the DrawCaption event
		 * @private
         */
        _onDrawCaption: function (captionOptions, titleType, captionValue) {
            var data = { object: this, scaleElement: this.model.quantitativeScaleSettings, captionText: captionValue, captionElement: captionOptions, captionType: titleType };
            this._trigger("drawCaption", data);
        },
        /**
         * Section For handle the DrawQualitativeRanges event
		 * @private
         */
        _onDrawQualitativeRanges: function (rangeOptions, rangeEnd, rangeIndex) {
            var data = { object: this, scaleElement: this.model.quantitativeScaleSettings, rangeIndex: rangeIndex, rangeElement: rangeOptions, rangeEndValue: rangeEnd };
            this._trigger("drawQualitativeRanges", data);
        },
        /**
         * Section For handle the DrawFeatureMeasureBar event
		 * @private
         */
        _onDrawFeatureMeasureBar: function (featureOptions, value) {
            var data = { object: this, scaleElement: this.model.quantitativeScaleSettings, currentElement: featureOptions, value: value };
            this._trigger("drawFeatureMeasureBar", data);
        },
        /**
         * Section For handle the DrawCategoryText event
		 * @private
         */
        _onDrawCategoryText: function (categoryOptions, textValue) {
            var data = { object: this, scaleElement: this.model.quantitativeScaleSettings, categoryElement: categoryOptions, value: textValue };
            this._trigger("drawCategory", data);
        },
        /**
         * Section For handle the DrawComparativeMeasure event
		 * @private
         */
        _onDrawComparativeMeasure: function (compareMeasureOptions, value) {
            var data = { object: this, scaleElement: this.model.quantitativeScaleSettings, targetElement: compareMeasureOptions, value: value };
            this._trigger("drawComparativeMeasureSymbol", data);

        },
        /**
         * To animate the graph
		 * @private
         */
        _doAnimation: function () {
            var elements = $("." + this.svgObject.id + "_FeatureMeasure");
            for (var i = elements.length - 1; i >= 0; i--) {
                var element = elements[i];
                this._animateFeatureBar(element);
            }
        },
        /**
         * To animate the Line in the graph
		 * @private
         */
        _doLineAnimation: function () {
            var compareElements = $("." + this.svgObject.id + "_ComparativeMeasure");
            var secondsPerPoint = 2000 / compareElements.length;
            for (var i = compareElements.length - 1; i >= 0; i--) {
                var element = compareElements[i];
                $(element).attr("transform", "scale(0)");
                this._doLineSymbol(element, secondsPerPoint, i);
            }
        },
        /**
         * To animate the FeatureBar in the graph
		 * @private
         */
        _animateFeatureBar: function (element) {
            var box = element.getBBox();
            var left, top;
            if (((this._orientation == ej.datavisualization.BulletGraph.Orientation.Horizontal) && (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Backward)) || ((this._orientation == ej.datavisualization.BulletGraph.Orientation.Vertical) && (this._flowDirection == ej.datavisualization.BulletGraph.FlowDirection.Forward))) {
                left = box.x + box.width;
                top = box.y + box.height;
            }
            else {
                left = box.x;
                top = box.y;
            }
            $(element).animate(
            {
                scale: 1
            },
            {
                duration: 1000,

                step: function (now) {
                    scaleVal = now;
                    $(element).attr("transform", "translate(" + left + " " + top + ") scale(" + now + ",1) translate(" + (-left) + " " + (-top) + ")");
                }
            });
        },
        /**
         * To manupulate the line symbol
		 * @private
         */
        _doLineSymbol: function (element, sec, val) {
            var beginTime = parseInt(val * sec);
            var box = element.getBBox();
            var centerX = box.x + (box.width / 2);
            var centerY = box.y + (box.height / 2);
            $(element).delay(beginTime).animate(
                {
                    scale: 1
                },
                {
                    duration: 200,
                    step: function (now) {
                        $(element).attr("transform", "translate(" + centerX + " " + centerY + ") scale(" + now + ") translate(" + (-centerX) + " " + (-centerY) + ")");
                    }
                });
        },
        /**
         * Section For Binding event
		 * @private
         */
        bindEvents: function () {
            if (this.model.tooltipSettings.visible)
                this._on($(this.svgObject), "mousemove", this._bulletMouseMove);
            if (this.model.enableResizing) {
                if (!this.isDevice())
                    this._on($(window), "resize", this._bulletResize);
                else
                    this._on($(window), "orientationchange", this._bulletResize);
            }
        },
        /**
         * To check whether it is a device or not
		 * @private
         */
        isDevice: function () {
            // return (/mobile|tablet|android|kindle/i.test(navigator.userAgent.toLowerCase()));
            // comment above line temporary. Due to the below code event wont bind for tablet device
            return (/mobile|tablet|android|kindle/i.test(navigator.userAgent.toLowerCase()));
        },
        /**
         * To resize the bullet
		 * @private
         */
        _bulletResize: function () {
            var bullet = this;
            var $svgObj = $(bullet.svgObject);
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                if (!bullet.isDevice()) {
                    if (bullet.svgWidth > $(this).width()) {
                        $svgObj.width($(this).width());
                    } else {
                        $svgObj.width(bullet.svgWidth);
                    }
                    if (bullet.svgHeight > $(this).height()) {
                        $svgObj.height($(this).height());
                    } else {
                        $svgObj.height(bullet.svgHeight);
                    }

                }
                else {
                    $svgObj.width($(bullet.element).width());
                    $svgObj.height($(bullet.element).height());
                }
                bullet.redraw();
            }, 500);
        },
        /**
         * Section For handle the Mouse move event
		 * @private
         */
        _bulletMouseMove: function (evt) {
            var currentVal, targetVal, categoryVal, measureId, targetId, targetClass, tooltipdiv = $('.tooltipDiv');
            targetId = $(evt.target).attr("id");
            targetClass = $(evt.target).attr("class");
            if (targetClass != "undefined" && (targetClass == this.svgObject.id + '_FeatureMeasure' || targetClass == this.svgObject.id + '_ComparativeMeasure')) {
                measureId = targetId.substring(targetId.lastIndexOf("_") + 1);
                currentVal = (!ej.isNullOrUndefined(this.model.fields) && this.model.fields["dataSource"] != null) ? this.model.fields["dataSource"][measureId][this.model.fields.featureMeasures] : this._scale.featureMeasures[measureId].value;
                targetVal = (!ej.isNullOrUndefined(this.model.fields) && this.model.fields["dataSource"] != null) ? this.model.fields["dataSource"][measureId][this.model.fields.comparativeMeasure] : this._scale.featureMeasures[measureId].comparativeMeasureValue;
                categoryVal = (!ej.isNullOrUndefined(this.model.fields) && this.model.fields["dataSource"] != null) ? (ej.isNullOrUndefined(this.model.fields["dataSource"][measureId][this.model.fields.category])) ? null : this.model.fields["dataSource"][measureId][this.model.fields.category] : (ej.isNullOrUndefined(this._scale.featureMeasures[measureId].category)) ? null : this._scale.featureMeasures[measureId].category;
                var data = { currentValue: currentVal, targetValue: targetVal, category: categoryVal };
                if ($('.tooltipDiv').length == 0) {
                    tooltipdiv = $("<div class='tooltipDiv' style='position: absolute; z-index: 105; display: block;'></div>");
                    $(document.body).append(tooltipdiv);
                    $('.tooltipDiv').addClass(this.svgObject.id);
                }
                if (this.model.tooltipSettings.template != "" && this.model.tooltipSettings.template != null) {
                    var cloneNode = $("#" + this.model.tooltipSettings.template).clone();
                    $(cloneNode).css("display", "block").appendTo(tooltipdiv);
                    $(tooltipdiv).html($(cloneNode).render(data));
                } else {
                    var category = (!ej.isNullOrUndefined(data.category)) ? ("<br/> Category : " + data.category) : "";
                    $(tooltipdiv).html("Current : " + data.currentValue + "<br/> Target : " + data.targetValue + category);
                }
                $(tooltipdiv).css("font-size", "12px");
                var xPos = evt.clientX + $(document).scrollLeft() + 10;
                var yPos = evt.clientY + $(document).scrollTop() + 10;
                xPos = ((xPos + $(tooltipdiv).width()) < $(window).width()) ? (xPos) : (xPos - $(tooltipdiv).width());
                yPos = ((yPos + $(tooltipdiv).height()) < $(window).height()) ? (yPos) : (yPos - $(tooltipdiv).height());

                if (xPos === undefined || xPos === null)
                    xPos = evt.clientX + $(document).scrollLeft() + 10;
                if (yPos === undefined || yPos === null)
                    yPos = evt.clientY + $(document).scrollTop() + 10;
                $(tooltipdiv).css("left", xPos);
                $(tooltipdiv).css("top", yPos);
                $(tooltipdiv).css({
                    '-webkit-border-radius': "5px 5px 5px 5px",
                    '-moz-border-radius': "5px 5px 5px 5px",
                    '-o-border-radius': "5px 5px 5px 5px",
                    'border-radius': "5px 5px 5px 5px",
                    'background-color': "White",
                    'border': "1px Solid Black",
                    'padding-bottom': "5px",
                    'padding-left': "5px",
                    'padding-right': "5px",
                    'padding-top': "5px"
                });
            }
            else if (targetClass != this.svgObject.id + '_FeatureMeasure' && targetClass != this.svgObject.id + '_ComparativeMeasure') {
                $(".tooltipDiv").remove();
            }
        },

        //-----Public methods----------//
        /**
        * To redraw the bulet graph  
		* @return jQuery
		* @example 
		* &lt;div id="bulletgraph1"&gt;Bullet Graph&lt;/div&gt; <br> 
		* &lt;script&gt;
		* // Create Bullet graph
		* var gphObj = $("#bulletGraph1").data("ejBulletGraph");
		* gphObj.redraw(); // redraw the graph
		* &lt;/script&gt;
		* @example 
		* &lt;div id="bulletGraph1"&gt;BulletGraph&lt;/div&gt; <br> 
		* &lt;script&gt;
		* // redraw the Bullet graph
		* $("#butbulletGraph1ton1").ejButton("redraw");	
		* &lt;/script&gt;
        */
        redraw: function () {
            $(this.svgObject).empty();
            this._renderBulletElements();
        },
        /**
        * To destroy the bullet graph  
		* @return jQuery
		* @example 
		* &lt;div id="bulletgraph1"&gt;Bullet Graph&lt;/div&gt; <br> 
		* &lt;script&gt;
		* // Destroy Bullet graph
		* var gphObj = $("#bulletGraph1").data("ejBulletGraph");
		* gphObj.destroy(); // destroy the graph
		* &lt;/script&gt;
		* @example 
		* &lt;div id="bulletGraph1"&gt;BulletGraph&lt;/div&gt; <br> 
		* &lt;script&gt;
		* // destroy the Bullet graph
		* $("#bulletGraph1").ejButton("destroy");	
		* &lt;/script&gt;
        */
        destroy: function () {
            $(this.element).removeClass("e-bulletgraph e-js").find("#" + this.svgObject.id).remove();
        },
        /**
        * To set the value for feature measure bar.
		* @return jQuery
		* @param {number} argument.Index value for the graph 
		* @param {number}  argument.Measure value for the graph
		* @example 
		* &lt;div id="bulletGraph1"&gt;Bulletgraph&lt;/div&gt; <br> 
		* &lt;script&gt;
		* // To set the value for feature measure bar.
		* var btnObj = $("#bulletGraph1").data("ejBulletGraph");
		* btnObj.setFeatureMeasureBarValue(1,8); // set the value
		* &lt;/script&gt;
		* @example 
		* &lt;div id="bulletGraph1"&gt;BulletGraph&lt;/div&gt; <br> 
		* &lt;script&gt;
		* // To set the value for feature measure bar.
		* $("#bulletGraph1").ejBulletGraph("setFeatureMeasureBarValue(1,8)");	
		* &lt;/script&gt;
        */
        setFeatureMeasureBarValue: function (index, measureValue) {
            this._scale = this.model.quantitativeScaleSettings;
            var length = (!ej.isNullOrUndefined(this.model.fields) && this.model.fields["dataSource"] != null) ? this.model.fields["dataSource"].length : this._scale.featureMeasures.length; //(this._scale.featureMeasures != null) ? this._scale.featureMeasures.length : this.model.fields["dataSource"].length;
            if (index < length && measureValue != null) {
                if (!ej.isNullOrUndefined(this.model.fields) && this.model.fields["dataSource"] != null)
                    this.model.fields["dataSource"][index][this.model.fields.featureMeasures] = measureValue;
                else
                    this._scale.featureMeasures[index].value = measureValue;
                this.redraw();
                if (this.model.enableAnimation)
                    this._doAnimation();
            }
        },
        /**
        * To set the value for comparative measure in bullet graph.
		* @return jQuery
		* @param {number} argument.Index value for the graph 
		* @param {number}  argument.Measure value for the graph
		* @example 
		* &lt;div id="bulletGraph1"&gt;BulletGraph&lt;/div&gt; <br> 
		* &lt;script&gt;
		* // set the value for comparative measure
		* var btnObj = $("#bulletGraph1").data("ejBulletGraph");
		* btnObj.setComparativeMeasureSymbol(1,7); // set the value
		* &lt;/script&gt;
		* @example 
		* &lt;div id="bulletGraph1"&gt;BulletGraph&lt;/div&gt; <br> 
		* &lt;script&gt;
		* // set the value for comparative measure
		* $("#bulletGraph1").ejBulletGraph("setComparativeMeasureSymbol(1,7)");	
		* &lt;/script&gt;
        */
        setComparativeMeasureSymbol: function (index, measureValue) {
            this._scale = this.model.quantitativeScaleSettings;
            var length = (!ej.isNullOrUndefined(this.model.fields) && this.model.fields["dataSource"] != null) ? this.model.fields["dataSource"].length : this._scale.featureMeasures.length; //(this._scale.featureMeasures != null) ? this._scale.featureMeasures.length : this.model.fields["dataSource"].length;
            if (index < length && measureValue != null) {
                if (!ej.isNullOrUndefined(this.model.fields) && this.model.fields["dataSource"] != null)
                    this.model.fields["dataSource"][index][this.model.fields.comparativeMeasure] = measureValue;
                else
                    this._scale.featureMeasures[index].comparativeMeasureValue = measureValue;
                this.redraw();
                if (this.model.enableAnimation)
                    this._doLineAnimation();
            }
        }

    });
    /**
	 * Enum for Bullet Graph Orientation	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.BulletGraph.Orientation = {
        /**  support for orientation in horizontal direction. */
        Horizontal: "horizontal",
        /**  support for orientation in vertical direction. */
        Vertical: "vertical"
    };
    /**
	 * Enum for Bullet Graph Tick Position 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.BulletGraph.TickPosition = {
        /**  To set the Tick position below. */
        Below: "below",
        /**  To set the Tick position above. */
        Above: "above",
        /**  To set the Tick position cross. */
        Cross: "cross"
    };
    /**
	 * Enum for Bullet Graph Label Position 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.BulletGraph.LabelPosition = {
        /**  To set the label position below. */
        Below: "below",
        /**  To set the label position above. */
        Above: "above"
    };
    /**
	 * Enum for Bullet Graph Flow Direction 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.BulletGraph.FlowDirection = {
        /**  To set the flow direction forward. */
        Forward: "forward",
        /**  To set the flow direction backward. */
        Backward: "backward"
    };
    /**
	 * Enum for Font Style  
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.BulletGraph.FontStyle = {
        /**  To set the fontStyle Normal. */
        Normal: "Normal",
        /**  To set the fontStyle Italic. */
        Italic: "Italic",
        /**  To set the fontStyle Oblique. */
        Oblique: "Oblique"
    };
    /**
	 * Enum for Font Weight 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.BulletGraph.FontWeight = {
        /**  To set the fontWeight Normal. */
        Normal: "Normal",
        /**  To set the fontWeight Bold. */
        Bold: "Bold",
        /**  To set the fontWeight Bolder. */
        Bolder: "Bolder",
        /**  To set the fontWeight Lighter. */
        Lighter: "Lighter"
    };
    /**
	 * Enum for Bullet Graph Theme3
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.BulletGraph.Themes = {
        /**  To set the theme flatlight. */
        flatlight: {
            quantitativeScaleSettings: {
                majorTickSettings: { stroke: "#191919" },
                minorTickSettings: { stroke: "#191919" },
                labelSettings: {
                    stroke: "#191919"
                },
                featuredMeasureSettings: { stroke: "#191919" },
                comparativeMeasureSettings: { stroke: "#191919" }
            },
            qualitativeRanges: [{
                rangeStroke: "#ebebeb"
            }, {
                rangeStroke: "#d8d8d8"
            }, {
                rangeStroke: "#7f7f7f"
            }],
            captionSettings: {
                font: { color: "#191919" },
                subTitle: {
                    font: { color: "#191919" }
                }
            }
        },
        /**  To set the theme flatdark. */
        flatdark: {
            /**  To set the theme quantitativeScaleSettings. */
            quantitativeScaleSettings: {
                majorTickSettings: { stroke: "#ffffff" },
                minorTickSettings: { stroke: "#ffffff" },
                labelSettings: {
                    stroke: "#ffffff"
                },
                featuredMeasureSettings: { stroke: "#ffffff" },
                comparativeMeasureSettings: { stroke: "#ffffff" }
            },
            qualitativeRanges: [{
                rangeStroke: "#b3b3b3"
            }, {
                rangeStroke: "#999999"
            }, {
                rangeStroke: "#4d4d4d"
            }],
            captionSettings: {
                font: { color: "#ffffff" },
                subTitle: {
                    font: { color: "#ffffff" }
                }
            }
        }
    };

})(jQuery, Syncfusion);
;