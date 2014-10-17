/*!
*  filename: ej.rangenavigator.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html RangeNavigator elements
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
         * @classdesc The rangenavigator can be easily configured to the DOM element, such as div. you can create a rangenavigator with a highly customizable look and feel.
         * @class ejRangeNavigator
         * @param {object} options - settings for rangenavigator
         * @requires jQuery
         * @requires jquery.globalize.min.js
         * @requires ej.core.js
         * @requires ej.data.js
         * @requires ej.chart.js
         * @requires ej.rangenavigator.js
         * @class ejRangeNavigator
         * @param {object} options - settings for rangenavigator    
         * @example 
         * &lt;div id="container"&gt;&lt;/div&gt; <br> 
         * &lt;script&gt;
         * // Create RangeNavigator
         * $('#container').RangeNavigator(); 	
         * &lt;/script&gt;
         */


    ej.widget("ejRangeNavigator", "ej.datavisualization.RangeNavigator", /** @lends ejRangeNavigator# */ {

        ejChart: "",
		
        validTags: ["div"],
        // default model
        defaults: /** @lends ejRangeNavigator# */ {
            /**		
               * By specifying this property the user can change the theme of the range navigator.
                 @default null
               * @type {string}
               * @example 
               * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
               * &lt;script&gt;
               *	$("#container").ejRangeNavigator({
               *    theme: "flatdark";
               *    });
               * &lt;/script&gt;  
               */
            theme: "",
            /**		
               * Padding specifies the gap between the container and the range navigator.
                 @default "0"
               * @type {string}					
               * @example 
              * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
               * &lt;script&gt;
               *	$("#container").ejRangeNavigator({
               *    padding: "15";
               *    });
               * &lt;/script&gt;  
               */
            padding: "0",
            /**		
               * Sets a value whether to make the range navigator responsive on resize.
                 @default false
               * @type {boolean}					
               * @example 
              * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
               * &lt;script&gt;
               *	$("#container").ejRangeNavigator({
               *    enableAutoResizing: true;
               *    });
               * &lt;/script&gt;  
               */
            enableAutoResizing: false,
            /**		
               * Toggles the placement of slider exactly on the place it left or on the nearest interval.
                 @default false
               * @type {boolean}				
               * @example 
               * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
               * &lt;script&gt;
               *	$("#container").ejRangeNavigator({
               *    allowSnapping: true;
               *    });
               * &lt;/script&gt;  
               */
            allowSnapping: false,
            
            /**		
           * Contains property to customize the hight and width of range navigator.
           * @type {object}
           */
            sizeSettings: /** @lends ejRangeNavigator# */ {
                /**		
               * Specifies width of the range navigator.
               * @alias ejRangeNavigator#sizeSettings->width
                 @default null
               * @type {string}					
               * @example 
               * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
               * &lt;script&gt;
               *	$("#container").ejRangeNavigator({
               *    sizeSettings: { width : "900" },
               *    });
               * &lt;/script&gt;  
               */
                width: "",
                /**		
               * Specifies height of the range navigator.
               * @alias ejRangeNavigator#sizeSettings->height
                 @default null
               * @type {string}
               * @example 				
              * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
               * &lt;script&gt;
               *	$("#container").ejRangeNavigator({
               *    sizeSettings: { height : "130" },
               *    });
               * &lt;/script&gt;  
               */
                height: ""
            },
            _size: {
                
            },
            /**		
               * This property is to specify the localization of range navigator.
                 @default "en-US"
               * @type {string}				
               * @example 
               * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
               * &lt;script&gt;
               *	$("#container").ejRangeNavigator({
               *    locale: "en-US",
               *    });
               * &lt;/script&gt;  
               */
            locale: "en-US",
            /**		
              * You can plot data of type date time or numeric. This property determines the type of data that this axis will handle. See {@link ValueType} 
                @default "datetime"
              * @type {enum}		
              * @example 
              * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
               * &lt;script&gt;
               *	$("#container").ejRangeNavigator({
               *    valueType: "numeric",
               *    });
               * &lt;/script&gt;  
               */
            valueType: "datetime",
            /**		
           * Options for configuring minor grid lines, major grid lines, axis line of axis.
           * @type {object}
           */
            valueAxisSettings:/** @lends ejRangeNavigator# */  {
                /**		
              * If the range is not given explicitly, range will be calculated automatically. You can customize the automatic range calculation using rangePadding.
              * @alias ejRangeNavigator#valueAxisSettings->rangePadding
                @default "none"
              * @type {string}				
              * @example 
              * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    valueAxisSettings:{rangePadding: "normal"},
              *    });
              * &lt;/script&gt;  
              */
                rangePadding: 'none',
                /**		
                * Options for customizing the axis line.
                * @type {object}
                * @alias ejRangeNavigator#valueAxisSettings->axisLine
                */
                axisLine:
                    {
                        /**		
                        * Toggles the visibility of axis line.
                        * @alias ejRangeNavigator#valueAxisSettings->axisLine->visible
                        *  @default "none"
                        * @type {string}					
                        * @example 
                        * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
                        * &lt;script&gt;
                        *	$("#container").ejRangeNavigator({
                        *    valueAxisSettings:{axisLine: {visible: true}}
                        *    });
                        * &lt;/script&gt;  
                        */
                        visible: false
                    },
                /**		
           * Options for customizing the font of the axis.
           * @type {object}
           * @alias ejRangeNavigator#valueAxisSettings->font
           */
                font: {
                    /**		
             * Text in axis render with the specified size.
             * @alias ejRangeNavigator#valueAxisSettings->font->size
               @default "0px"
             * @type {string}					
             * @example 
             * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             *	$("#container").ejRangeNavigator({
             *    valueAxisSettings:{font: {size: '12px'}}
             *    });
             * &lt;/script&gt;  
             */
                    size: '0px',
                },
                /**		
          * Options for customizing the major tick lines in axis.
          * @type {object}
          * @alias ejRangeNavigator#valueAxisSettings->majorTickLines
          */
                majorTickLines:
                {
                    /**		
                    * Specifies width of the major tick lines.
                    * @alias ejRangeNavigator#valueAxisSettings->majorTickLines->width
                      @default 0
                    * @type {number}				
                    * @example 
                    * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
                    * &lt;script&gt;
                    *	$("#container").ejRangeNavigator({
                    *    valueAxisSettings:{majorTickLines: {width: 3}}
                    *    });
                    * &lt;/script&gt;  
                    */
                    width: 0,
                    /**		
                    * Specifies the size of the majorTickLines in RangeNavigator
                    * @alias ejRangeNavigator#valueAxisSettings->majorTickLines->size
                    *  @default 0
                    * @type {number}					
                    * @example 
                    * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
                    * &lt;script&gt;
                    *	$("#container").ejRangeNavigator({
                    *    valueAxisSettings:{majorTickLines: {size: 3}}
                    *    });
                    * &lt;/script&gt;  
                    */
                    size: 0,
                    /**		
            * Toggles the visibility of major tick lines.
            * @alias ejRangeNavigator#valueAxisSettings->majorTickLines->visible
            *  @default true
            * @type {boolean}				
            * @example 
            * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
            * &lt;script&gt;
            *	$("#container").ejRangeNavigator({
            *    valueAxisSettings:{majorTickLines: {visible: false}}
            *    });
            * &lt;/script&gt;  
            */
                    visible: true
                },
                /**		
                * Options for customizing the major grid lines.
                * @type {object}
                * @alias ejRangeNavigator#valueAxisSettings->majorGridLines
                */
                majorGridLines:  {
                    /**		
                    * Toggles the visibility of major grid lines.
                    * @alias ejRangeNavigator#valueAxisSettings->majorGridLines->visible
                      @default false
                    * @type {boolean}				
                    * @example 
                    * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
                    * &lt;script&gt;
                    *	$("#container").ejRangeNavigator({
                    *    valueAxisSettings:{majorGridLines: {visible: true}}
                    *    });
                    * &lt;/script&gt;  
                    */
                    visible: false
                },
                /**		
             * Toggles the visibility of axis in range navigator.
             * @alias ejRangeNavigator#valueAxisSettings->visible
             *  @default false
             * @type {boolean}				
             * @example 
             * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             *	$("#container").ejRangeNavigator({
             *    valueAxisSettings:{visble: true}
             *    });
             * &lt;/script&gt;  
             */
                visible: false
            },
            /**		
              * If the range is not given explicitly, range will be calculated automatically. You can customize the automatic range calculation using rangePadding. See {@link RangePadding}
               * @default "none"
              * @type {enum}			
              * @example 
              * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *   rangePadding: "normal",
              *    });
              * &lt;/script&gt;  
              */
            rangePadding: "none",
            /**		
         * Toggles the direction of rendering the range navigator control.
         *  @default false
         * @type {boolean}
         * @example 
              * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *   enableRTL: true,
              *    });
              * &lt;/script&gt;  
              */
            enableRTL: false,
            /**		
           * Specifies the data source for range navigator.
           * @type {object}
		   * @example
           *	$("#container").ejRangeNavigator({
           *    dataSource:"data1", 
           *     xName: "X", 
           *     yName: "Y"
           *    });
           */
            dataSource: "",
            /**		
       * Specifies the xName for dataSource.  This is used to take the x values from dataSource
       * @type {object}
       * @example
       * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
       * &lt;script&gt;
       *	$("#container").ejRangeNavigator({
       *    dataSource:"data1", 
       *    xName: "X"
       *    });
       * &lt;/script&gt; 
       */
                xName: "x",
            /**		
  * Specifies the yName for dataSource.  This is used to take the y values from dataSource
  * @type {object}
  * @example
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
  * &lt;script&gt;
  *	$("#container").ejRangeNavigator({
  *    dataSource:"data1", 
  *    yName: "Y"
  *    });
  * &lt;/script&gt; 
  */
                yName: "y",
            /**
           * Options for customizing the tooltip in range navigator.
           * @type {object}
           * @example
            *	$("#container").ejRangeNavigator({
            *    tooltipSettings: { visible: true, labelFormat: "MMM/dd/yyyy", tooltipDisplayMode: "always", tooltipDisplayMode: "always" },
            *    });
           */
            tooltipSettings: /** @lends ejRangeNavigator# */ {
                /**		
      * Toggles the visibility of tooltip.
      * @alias ejRangeNavigator#tooltipSettings->visible
      * @default true
      * @type {boolean}			
      * @example 
             * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             *	$("#container").ejRangeNavigator({
             *    tooltipSettings:{visible: true}
             *    });
             * &lt;/script&gt;  
             */
                visible: true,
                /**		
   * Specifies the format of text to be displayed in tooltip.
   * @alias ejRangeNavigator#tooltipSettings->labelFormat
   * @default "MM/dd/yyyy"
   * @type {string}				
   * @example 
             * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             *	$("#container").ejRangeNavigator({
             *    tooltipSettings: { labelFormat: "MM/dd/yyyy"}
             *    });
             * &lt;/script&gt;  
             */
                labelFormat: "MM/dd/yyyy",
                /**		
  * Specifies the mode of displaying the tooltip. Neither to display the tooltip always nor on demand.
  * @alias ejRangeNavigator#tooltipSettings->tooltipDisplayMode
  * @default null
  * @type {string}				
  * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    tooltipSettings:{tooltipDisplayMode: "always"},
              *    });
              * &lt;/script&gt;  
              */
                tooltipDisplayMode: "always",
                /**		
  * Specifies the background color of tooltip.
  * @default "#303030"
  * @type {string}					
  * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    tooltipSettings:{backgroundColor: "#303030"},
              *    });
              * &lt;/script&gt;  
              * @alias ejRangeNavigator#tooltipSettings->backgroundColor
              */
                backgroundColor: "#303030",
                    /**		
           * Options for customizing the font in tooltip.
           * @type {object}
           * @alias ejRangeNavigator#tooltipSettings->font
           */
                    font:
                    {
                        /**		
 * Specifies the color of text in tooltip. Tooltip text render in the specified color.
 * @default "#FFFFFF"
 * @type {string}				
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    tooltipSettings:{font:{color : "FFFFFF"}},
              *    });
              * &lt;/script&gt;
  * @alias ejRangeNavigator#tooltipSettings->font->color
 */
                        color: '#FFFFFF',
                        /**		
* Specifies the font family of text in tooltip. Tooltip text render in the specified font family.
* @default "Segoe UI"
* @type {string}			
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
                tooltipSettings:{font:{family:"Arial"}}
                }); 
              * &lt;/script&gt;
* @alias ejRangeNavigator#tooltipSettings->font->family
*/
                        family: 'Segoe UI',
                        /**		
* Specifies the font style of text in tooltip. Tooltip text render in the specified font style.
* @default ej.datavisualization.RangeNavigator.fontStyle.Normal
* @type {string}			
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    tooltipSettings:{font:{fontStyle:"Normal"}}
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#tooltipSettings->font->fontStyle
*/
                        fontStyle: 'Normal',
                        /**		
* Specifies the size of text in tooltip. Tooltip text render in the specified size.
* @default "10px"
* @type {string}				
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    tooltipSettings:{font:{size:"12px"}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#tooltipSettings->font->size
*/
                        size: '10px',
                        /**		
* Specifies the opacity of text in tooltip. Tooltip text render in the specified opacity.
* @default 1
* @type {number}				
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *   tooltipSettings:{ font:{opacity:0.5}}
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#tooltipSettings->font->opacity
*/opacity: 1,
                        /**		
* Specifies the weight of text in tooltip. Tooltip text render in the specified weight.  
 @default ej.datavisualization.RangeNavigator.weight.Regular
* @type {string}				
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    tooltipSettings:{ font:{weight:"regular"}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#tooltipSettings->font->weight
*/
                        weight: 'regular'
                    }
            },
                /**		
* This property determines the starting position of the zoomed axis. Value must be specified between 0 and 1.
@default "0"
* @type {string}			
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    zoomPosition:"0",
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#zoomSettings->zoomPosition
*/
                zoomPosition: "0",
                /**		
* This property determines the factor by which the axis is scaled. Value must be specified between 0 and 1.
@default "1"
* @type {string}				
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
                         zoomFactor:"1"
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#zoomSettings->zoomFactor
*/
                zoomFactor: "1",
            /**		
          * Options for customizing the start and end range values.
          * @type {object}
          */
            selectedRangeSettings: /** @lends ejRangeNavigator# */ {
                /**		
* Specifies the starting range of range navigator.
@default null
* @type {string}				
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *   selectedRangeSettings:{start:"01/05/1992"},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#selectedRangeSettings->start
*/
                start: "",
                /**		
*  Specifies the ending range of range navigator.
@default null
* @type {string}			
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    selectedRangeSettings:{end:"01/05/1993"},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#selectedRangeSettings->end
*/
                end: ""
            },
            /**		
               * selectedData is for getting the data when the "rangeChanged" event trigger from clientside.
               */
            selectedData: "",
            /**		
          * Options for customizing the starting and ending ranges.
          * @type {object}
          */
            rangeSettings: /** @lends ejRangeNavigator# */ {
                /**		
*  Specifies the starting range of range navigator.
@default null
* @type {string}			
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    rangeSettings:{start:"01/05/1993"},
              *    });
* @alias ejRangeNavigator#rangeSettings->start
*/
                start: "",
                /**		
*  Specifies the ending range of range navigator.
@default null
* @type {string}				
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    rangeSettings:{end:"01/05/1993"}
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#rangeSettings->end
*/
                end: ""
            },
            /**		
         * Toggles the redrawing of chart on moving the sliders. 
           @default true
         * @type {boolean}			
         * @example 
         * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    enableDeferredUpdate:false,
              *    });
              * &lt;/script&gt;  
         */
            enableDeferredUpdate: true,

            series: "",

            seriesSettings: "",
            /**		
         * Options for customizing the labels colors, font, style, size, horizontalAlignment and opacity.
         * @type {object}
         */
            labelSettings:/** @lends ejRangeNavigator# */  {
                /**		
         * Options for customizing the style of labels in range navigator.
         * @type {object}
         * @alias ejRangeNavigator#labelSettings->style
         */
                style: {
                    /**		
        * Options for customizing the font of labels in range navigator.
        * @type {object}
        * @alias ejRangeNavigator#labelSettings->style->font
        */
                    font: {
                        /**		
* Specifies the label color. This color is applied to the labels in range navigator.
  @default "#FFFFFF"
* @type {string}				
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{style:{ font:{color:"#ff0000"}}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->style->font->color
*/
                        color: '#333333',
                        /**		
* Specifies the label font family. Labels render with the specified font family.
  @default "Segoe UI"
* @type {string}				
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{style:{ font:{family:"Arial"}}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->style->font->family
*/
                        family: 'Segoe UI',
                        /**		
  * Specifies the label font style. Labels render with the specified font style..See {@link FontStyle}
    @default "Normal"
  * @type {enum}				
  * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{style:{ font:{style:"Noraml"}}},
              *    });
              * &lt;/script&gt;
  * @alias ejRangeNavigator#labelSettings->style->font->style
  */
                        style: 'Normal',
                        /**		
*  Specifies the label font size. Labels render with the specified font size.
  @default "1px"
* @type {string}			
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{style:{ font:{size:"12px"}}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->style->font->size
*/
                        size: '10px',
                        /**		
                        * Specifies the label font opacity. Labels render with the specified font opacity.
                          @default 1
                        * @type {number}					
                        * @example 
                        * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
                        * &lt;script&gt;
                        *	$("#container").ejRangeNavigator({
                        *    labelSettings:{style:{ font:{opacity:0.5}}}
                        *    });
                        * &lt;/script&gt;
                        * @alias ejRangeNavigator#labelSettings->style->font->opacity
                        */
                        opacity: 1,
                        /**		
* Specifies the label font weight. Labels render with the specified font weight. See {@link FontWeight}
  @default "regular"
* @type {enum}				
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{style:{ font:{weight:"Regular"}}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->style->font->weight
*/
                        weight: 'regular'
                    },
                    /**		
* Specifies the horizontalAlignment of the label in RangeNavigator. See {@link HorizontalAlignment} 
@default "center"
* @type {enum}					
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *   labelSettings:{style:{ horizontalAlignment:"center"}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->style->horizontalAlignment
*/
                    horizontalAlignment: "center"
                },

                /**		
       * Options for customizing the higher level labels in range navigator.
       * @type {object}
        * @alias ejRangeNavigator#labelSettings->higherLevel
       */
                higherLevel: {
                    /**		
* Specifies the intervalType for higher level labels. See {@link IntervalType}
@default "years"
* @type {enum}				
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{higherLevel:{ intervalType:"days"}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->higherLevel->intervalType
*/
                    intervalType: 'years',
                    /**		
      * Options for customizing the style of higher level labels.
      * @type {object}
                    * @alias ejRangeNavigator#labelSettings->higherLevel->style
                    */
                    style: {
                        /**		
    * Options for customizing the font properties.
    * @type {object}
                  * @alias ejRangeNavigator#labelSettings->higherLevel->style->font
                  */
                        font: {
                            /**		
*  Specifies the label font color. Labels render with the specified font color.
@default "black"
* @type {string}				
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{higherLevel:{ style:{font:{color: "red"}}}},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->higherLevel->style->font->color
*/
                            color: "black",
                            /**		
*  Specifies the label font family. Labels render with the specified font family.
@default "Segoe UI"
* @type {string}				
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{higherLevel:{ style:{font:{fontFamily: "Algerian"}}}},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->higherLevel->style->font->fontFamily
*/
                            fontFamily: "Segoe UI",
                            /**		
* Specifies the label font style. Labels render with the specified font style.
@default "Normal"
* @type {string}				
* @example 
 * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             *	$("#container").ejRangeNavigator({
             *    labelSettings:{higherLevel:{ style:{font:{fontStyle: "Italic"}}}},
             *    });
             * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->higherLevel->style->font->fontStyle
*/
                            fontStyle: "Normal",
                            /**		
* Specifies the label font size. Labels render with the specified font size.
@default "12px"
* @type {string}				
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
            * &lt;script&gt;
            *	$("#container").ejRangeNavigator({
            *    labelSettings:{higherLevel:{ style:{font:{size: "14px"}}}},
            *    });
            * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->higherLevel->style->font->size
*/
                            size: "12px",
                            /**		
* Specifies the label opacity. Labels render with the specified opacity.
@default "12px"
* @type {string}				
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
            * &lt;script&gt;
            *	$("#container").ejRangeNavigator({
            *    labelSettings:{higherLevel:{ style:{font:{opacity: "14px"}}}},
            *    });
            * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->higherLevel->style->font->opacity
*/
                            opacity: 1,
                            /**		
* Specifies the label font weight. Labels render with the specified font weight.
@default "regular"
* @type {string}				
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
           * &lt;script&gt;
           *	$("#container").ejRangeNavigator({
           *    labelSettings:{higherLevel:{ style:{font:{fontWeight: "regular"}}}},
           *    });
           * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->higherLevel->style->font->fontWeight
*/
                            fontWeight: "regular"
                        },
                        /**		
* Specifies the horizontal text alignment of the text in label.
@default "center"
* @type {string}				
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
           * &lt;script&gt;
           *	$("#container").ejRangeNavigator({
           *    labelSettings:{higherLevel:{ style:{horizontalTextAlignment: "near"}}},
           *    });
           * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->higherLevel->style->horizontalTextAlignment
*/
                        horizontalTextAlignment: "center"
                    },
                    /**		
       * Options for customizing the grid line colors, width, dashArray, border.
       * @type {object}
       * @alias ejRangeNavigator#labelSettings->higherLevel->gridLineStyle
       */
                    gridLineStyle: {
                        /**		
* Specifies the color of grid lines in higher level.
@default "#B5B5B5"
* @type {string}					
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{higherLevel:{ gridLineStyle :{color:"#ff0000"}}},
              *    });
* @alias ejRangeNavigator#labelSettings->higherLevel->gridLineStyle->color
*/
                        color: "#B5B5B5",
                        /**		
* Specifies the width of grid lines in higher level.
@default "#B5B5B5"
* @type {string}				
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{higherLevel:{ gridLineStyle :{width:1}}},
              *    });
              * &lt;/script&gt; 
* @alias ejRangeNavigator#labelSettings->higherLevel->gridLineStyle->width
*/
                        width: 1,
                        /**		
* Specifies the dashArray of grid lines in higher level.
@default "20 5 0"
* @type {string}					
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{higherLevel:{ gridLineStyle :{dashArray:"20 10 5"}}},
              *    });
              * &lt;/script&gt; 
* @alias ejRangeNavigator#labelSettings->higherLevel->gridLineStyle->dashArray
*/
                        dashArray: "20 5 0"
                    },

                    /**		
       * Options for customizing the border of grid lines in higher level.
       * @type {object}
        * @alias ejRangeNavigator#labelSettings->higherLevel->border
       */
                    border:
                    {
                        /**		
* Specifies the border color of grid lines.
@default "transparent"
* @type {string}					
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *   labelSettings:{higherLevel:{ border :{color:"#ff0000"}}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->higherLevel->border->color
*/
                        color: "transparent",
                        /**		
* Specifies the border width of grid lines.
@default "0.5"
* @type {string}					
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{higherLevel:{ border :{width:1}}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->higherLevel->border->width
*/
                        width: 0.5
                    },
                    /**		
* Specifies the fill color of higher level labels.
@default "transparent"
* @type {string}				
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{higherLevel:{ fill:"days"}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->higherLevel->fill
*/
                    fill: "transparent",
                    /**		
* Specifies the position of the labels in higher level.See {@link Position}
@default "top"
* @type {enum}					
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{higherLevel:{ position:"bottom"}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->higherLevel->position
*/
                    position: "top",
                    /**		
* Toggles the visibility of higher level labels.
@default true
* @type {boolean}					
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{higherLevel:{ visible:false}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->higherLevel->visible
*/
                    visible: true,
                    /**		
* Specifies the position of the labels to render either inside or outside of plot area. See {@link LabelPlacement}
@default "outside"
* @type {enum}				
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{higherLevel:{ labelPlacement:"inside"}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->higherLevel->labelPlacement
*/
                    labelPlacement: "outside"
                },
                /**		
      * Options for customizing the labels in lower level.
      * @type {object}
       * @alias ejRangeNavigator#labelSettings->lowerLevel
      */
                lowerLevel: {
                    /**		
* Specifies the intervalType of the labels in lower level.See {@link IntervalType}
@default "years"
* @type {enum}				
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{lowerLevel:{ intervalType:"days"}},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->lowerLevel->intervalTypes
*/
                    intervalType: 'quarters',
                     /**		
      * Options for customizing the style of labels.
      * @type {object}
                    * @alias ejRangeNavigator#labelSettings->lowerLevel->style
                    */
                    style: {
                        /**		
    * Options for customizing the font of labels.
    * @type {object}
                  * @alias ejRangeNavigator#labelSettings->lowerLevel->style->font
                  */
                        font: {
                            /**		
* Specifies the color of labels. Label text render in this specified color.
@default "black"
* @type {string}				
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{lowerLevel:{ style:{font:{color: "red"}}}},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->lowerLevel->style->font->color
*/
                            color: "black",
                            /**		
* Specifies the font family of labels. Label text render in this specified font family.
@default "Segoe UI"
* @type {string}				
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{lowerLevel:{ style:{font:{fontFamily: "Algerian"}}}},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->lowerLevel->style->font->fontFamily
*/
                            fontFamily: "Segoe UI",
                            /**		
* Specifies the font style of labels. Label text render in this specified font style.
@default "Normal"
* @type {string}				
* @example 
 * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             *	$("#container").ejRangeNavigator({
             *    labelSettings:{lowerLevel:{ style:{font:{fontStyle: "Italic"}}}},
             *    });
             * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->lowerLevel->style->font->fontStyle
*/
                            fontStyle: "Normal",
                            /**		
* Specifies the size of labels. Label text render in this specified size.
@default "12px"
* @type {string}				
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
            * &lt;script&gt;
            *	$("#container").ejRangeNavigator({
            *    labelSettings:{lowerLevel:{ style:{font:{size: "14px"}}}},
            *    });
            * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->lowerLevel->style->font->size
*/
                            size: "12px",
                            /**		
* Specifies the opacity of labels. Label text render in this specified opacity.
@default "12px"
* @type {string}				
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
            * &lt;script&gt;
            *	$("#container").ejRangeNavigator({
            *    labelSettings:{lowerLevel:{ style:{font:{opacity: "14px"}}}},
            *    });
            * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->lowerLevel->style->font->opacity
*/
                            opacity: 1,
                            /**		
* Specifies the font weight of labels. Label text render in this specified font weight.
@default "regular"
* @type {string}				
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
           * &lt;script&gt;
           *	$("#container").ejRangeNavigator({
           *    labelSettings:{lowerLevel:{ style:{font:{fontWeight: "regular"}}}},
           *    });
           * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->lowerLevel->style->font->fontWeight
*/
                            fontWeight: "regular"
                        },
                        /**		
* Specifies the horizontal text alignment of the text in label.
@default "center"
* @type {string}				
* @example 
* &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
           * &lt;script&gt;
           *	$("#container").ejRangeNavigator({
           *    labelSettings:{lowerLevel:{ style:{horizontalTextAlignment: "near"}}},
           *    });
           * &lt;/script&gt;  
* @alias ejRangeNavigator#labelSettings->lowerLevel->style->horizontalTextAlignment
*/
                        horizontalTextAlignment : "center"
                    },
                    /**		
      * Options for customizing the grid lines in lower level.
      * @type {object}
       * @alias ejRangeNavigator#labelSettings->lowerLevel->gridLineStyle
      */
                    gridLineStyle:
                    {  /**		
* Specifies the color of grid lines in lower level.
@default "#B5B5B5"
* @type {string}					
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{lowerLevel:{ gridLineStyle :{color:"#ff0000"}}},
              *    });
              * &lt;/script&gt; 
* @alias ejRangeNavigator#labelSettings->lowerLevel->gridLineStyle->color
*/
                        color: "#B5B5B5",
                        /**		
* Specifies the width of grid lines in lower level.
@default "#B5B5B5"
* @type {string}					
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{lowerLevel:{ gridLineStyle :{width:1}}},
              *    });
              * &lt;/script&gt; 
* @alias ejRangeNavigator#labelSettings->lowerLevel->gridLineStyle->width
*/
                        width: 1,
                        /**		
* Specifies the dashArray of gridLines in lowerLevel.
@default "20 5 0"
* @type {string}					
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    lowerLevel:{ gridLineStyle :{dashArray:"20 10 5"}}},
              *    });
              * &lt;/script&gt; 
* @alias ejRangeNavigator#labelSettings->lowerLevel->gridLineStyle->dashArray
*/
                        dashArray: ""
                    },
                    /**		
      * Options for customizing the border of grid lines in lower level.
      * @type {object}
     * @alias ejRangeNavigator#labelSettings->lowerLevel->border
      */
                    border:
                    {
                        /**		
* Specifies the border color of grid lines.
@default "transparent"
* @type {string}					
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{lowerLevel:{ border :{color:"#ff0000"}}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->lowerLevel->border->color
*/
                        color: "transparent",
                        /**		
* Specifies the border width of grid lines.
@default "0.5"
* @type {string}					
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{lowerLevel:{ border :{width:1}}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->lowerLevel->border->width
*/
                        width: 0.5
                    },
                    /**		
* Specifies the fill color of labels in lower level.
@default "transparent"
* @type {string}				
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *   labelSettings:{lowerLevel:{ fill:"days"}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->lowerLevel->fill
*/
                    fill: "transparent",
                    /**		
* Specifies the position of the labels in lower level.See {@link Position}
@default "bottom"
* @type {enum}					
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{lowerLevel:{ position:"bottom"}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->lowerLevel->position
*/
                    position: "bottom",
                    /**		
* Toggles the visibility of labels in lower level.
@default true
* @type {boolean}					
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{lowerLevel:{ visible:false}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->lowerLevel->visible
*/

                    visible: true,
                    /**		
* Specifies the position of the labels to render either inside or outside of plot area. See {@link LabelPlacement}
@default "outside"
* @type {enum}				
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    labelSettings:{lowerLevel:{ labelPlacement:"inside"}},
              *    });
              * &lt;/script&gt;
* @alias ejRangeNavigator#labelSettings->lowerLevel->labelPlacement
*/
                    labelPlacement: "outside"
                }
            },
            /**		
     * Options for customizing the range navigator.
     * @type {object}
     */
            navigatorStyleSettings:/** @lends ejRangeNavigator# */  {
                /**		
* Specifies the color of the selected region in range navigator.
@default "#EFEFEF"
* @type {string}					
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    navigatorStyleSettings:{ selectedRegionColor:"#ff0000"}},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#navigatorStyleSettings->selectedRegionColor
*/
                selectedRegionColor: "#EFEFEF",
                /**		
* Specifies the color of the unselected region in range navigator.
@default "#5EABDE"
* @type {string}				
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    navigatorStyleSettings:{ unselectedRegionColor:"#ff0000"},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#navigatorStyleSettings->unselectedRegionColor
*/
                unselectedRegionColor: "#5EABDE",
                /**		
* Specifies the color of the thumb in range navigator.
@default "#2382C3"
* @type {string}			
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    navigatorStyleSettings:{ thumbColor:"#ff0000"},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#navigatorStyleSettings->thumbColor
*/
                thumbColor: "#2382C3",
                /**		
 * Specifies the radius of the thumb in range navigator.
 @default 10
 * @type {number}				
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    navigatorStyleSettings:{ thumbRadius:15},
              *    });
              * &lt;/script&gt;  
 * @alias ejRangeNavigator#navigatorStyleSettings->thumbRadius
 */
                thumbRadius: 10,
                /**		
 * Specifies the stroke color of the thumb in range navigator.
 @default "#303030"
 * @type {string}				
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    navigatorStyleSettings:{ thumbStroke:"#ff0000"},
              *    });
              * &lt;/script&gt;  
 * @alias ejRangeNavigator#navigatorStyleSettings->thumbStroke
 */
                thumbStroke: "#303030",
                /**		
 * Specifies the background color of RangeNavigator.
 @default "#dddddd"
 * @type {string}				
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    navigatorStyleSettings:{ background:"#ff0000"},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#navigatorStyleSettings->background
 */
                background: "#dddddd",
                /**		
    * Options for customizing the border color and width of range navigator.
    * @type {object}
    * @alias ejRangeNavigator#navigatorStyleSettings->border
    */
                border:
                {
                    /**		
* Specifies the border color of range navigator.
@default "transparent"
* @type {string}					
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    navigatorStyleSettings:{ border:{color:"#ff0000"}},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#navigatorStyleSettings->border->color
*/
                    color: "transparent",
                    /**		
* Specifies the border width of range navigator.
@default 0.5
* @type {number}

  * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    navigatorStyleSettings:{ border:{width:1}},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#navigatorStyleSettings->border->width
*/
                    width: 0.5,
                    /**		
* Specifies the dash array of range navigator.
@default null
* @type {string}
  * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    navigatorStyleSettings:{ border:{dashArray:"2,3"}},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#navigatorStyleSettings->border->dashArray
*/
                    dashArray: ""
                },
                /**		
 * Specifies the opacity of RangeNavigator.
 @default 1
 * @type {number}
  * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    navigatorStyleSettings:{ opacity:0.5},
              *    });
              * &lt;/script&gt;  
 * @alias ejRangeNavigator#navigatorStyleSettings->opacity
 */
                opacity: 1,
                /**		
    * Options for customizing the major grid lines.
    * @type {object}
     * @alias ejRangeNavigator#navigatorStyleSettings->majorGridLineStyle
    */
                majorGridLineStyle:
                {
                    /**		
 * Specifies the color of major grid lines in RangeNavigator.
 @default "#B5B5B5"
 * @type {string}				
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    navigatorStyleSettings:{ majorGridLineStyle:{color:"#ff0000"}},
              *    });
              * &lt;/script&gt; 
   * @alias ejRangeNavigator#navigatorStyleSettings->majorGridLineStyle->color
 */
                    color: "#B5B5B5",
                    /**		
* Toggles the visibility of major grid lines.
@default true
* @type {boolean}				
* @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    navigatorStyleSettings:{ majorGridLineStyle:{visible:false}},
              *    });
              * &lt;/script&gt; 
  * @alias ejRangeNavigator#navigatorStyleSettings->majorGridLineStyle->visible
*/
                    visible: true
                },
                /**		
    * Options for customizing the minor grid lines.
    * @type {object}
       * @alias ejRangeNavigator#navigatorStyleSettings->minorGridLineStyle
    */
                minorGridLineStyle:
                {
                    /**		
 * Specifies the color of minor grid lines in RangeNavigator.
 @default "#B5B5B5"
 * @type {string}				
 * @example 
 * //Gets or sets color of majorGridLines in RangeNavigator, after initialization:<br>
 *	//Gets the color of majorGridLines in RangeNavigator
 *	$("#container").ejRangeNavigator("option", "navigatorStyleSettings.majorGridLineStyle.color");<br>			
 *	//Sets the color of majorGridLines in RangeNavigator
 * @alias ejRangeNavigator#navigatorStyleSettings->minorGridLineStyle->color
 */
                    color: "#B5B5B5",
                    /**		
* Toggles the visibility of minor grid lines.
@default true
* @type {boolean}					
 * @example 
  * &lt;div id="RangeNavigator"&gt;&lt;/div&gt; 
              * &lt;script&gt;
              *	$("#container").ejRangeNavigator({
              *    navigatorStyleSettings:{ majorGridLineStyle:{visible:false}},
              *    });
              * &lt;/script&gt;  
* @alias ejRangeNavigator#navigatorStyleSettings->minorGridLineStyle->visible
*/
                    visible: true
                },
            },

            /**     
                         * Fires after range navigator is loaded.
                         * @event
                         * @name ejRangeNavigator#loaded	
                         * @param {Object} argument.Data parameters from RangeNavigator     
                         * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
                         * @param {object}  argument.model returns the RangeNavigator model
                         * @param {string}  argument.type returns the name of the event
                         * @example 
                         * //loaded event for chart
                         * $("#container").ejRangeNavigator({
                         *    loaded: function (args) {}
                         * });
                         */
            loaded: "",
            /**     
                        * Fires on load of range navigator.
                        * @event
                        * @name ejRangeNavigator#load	
                        * @param {Object} argument.Data parameters from RangeNavigator     
                        * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
                        * @param {object}  argument.model returns the RangeNavigator model
                        * @param {string}  argument.type returns the name of the event
                        * @example 
                        * //load event for chart
                        * $("#container").ejRangeNavigator({
                        *    load: function (args) {}
                        * });
                        */
            load: "",
            /**     
                       * Fires on changing the range of range navigator.
                       * @event
                       * @name ejRangeNavigator#rangeChanged	
                       * @param {Object} argument.Data parameters from RangeNavigator     
                       * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
                       * @param {object}  argument.model returns the RangeNavigator model
                       * @param {string}  argument.type returns the name of the event
                       * @example 
                       * //rangeChanged event for chart
                       * $("#container").ejRangeNavigator({
                       *    rangeChanged: function (args) {}
                       * });
                       */
            rangeChanged: ""

        },
        /**
          * Rangenavigator contains the default values. dataTypes property is used to set the default value to rangenavigator
          * @private
          */
        dataTypes: {
          //  theme:"string",
           // padding:"string",
            enableAutoResizing:"boolean",
            allowSnapping:"boolean",
          //  size:{
          //      width:"string",
          //      height:"string"
          //  },
            dataSource:{data:"data",
			query:"data"
			},
            tooltipSettings: {
                visible:"boolean",
                labelFormat:"string",
                tooltipDisplayMode:"string",
            },
            
            zoomPosition: "string",
            zoomFactor: "string",
           
            selectedData: "string",
            enableDeferredUpdate: "boolean",
            series: "array",
            //seriesSettings: "string",
            labelSettings: {
                higherLevel: {
                    intervalType: 'string',
                    position: "string",
                    visible: "boolean",
                    labelPlacement: "string"
                },
                lowerLevel: {
                    intervalType: 'string',
                    position: "string",
                    visible: "boolean",
                    labelPlacement:"string"
                }
            },
            navigatorStyleSettings: {
                thumbRadius:"number",
            },
            //	loaded: "string",
            //rangeChanged: "string" 
		 
        },
        observables: ["dataSource"],

        _themes: {
            flatlight: {
                tooltipSettings: {
                    backgroundColor: "#303030",
                    font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1 ,weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {                        
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0},
                        fill: "transparent",
                        gridLineStyle: { color: "#B5B5B5", width:1, dashArray:"15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width:0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: "#e5e5e5",
                    unselectedRegionColor: "#5EABDE",
                    thumbColor: "#2382C3",
                    thumbRadius: 10,
                    thumbStroke: "#303030",
                    background: "#EFEFEF",
                    border: { color: "#606262", width: 0 },
                    opacity:1,
                    majorGridLineStyle: { color: "#8c8c8c", visible: true },
                    minorGridLineStyle: { color: "#8c8c8c", visible: true },
                },
            },

            azurelight: {
                tooltipSettings: {
                    backgroundColor: "#303030",
                    font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#B5B5B5", width: 1,dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: "#e5e5e5",
                    unselectedRegionColor: "#5EABDE",
                    thumbColor: "#2382C3",
                    thumbRadius: 10,
                    thumbStroke: "#303030",
                    background: "#EFEFEF",
                    border: { color: "#606262", width: 0 },
                    opacity: 1,
                    majorGridLineStyle: { color: "#8c8c8c", visible: true },
                    minorGridLineStyle: { color: "#8c8c8c", visible: true },
                },
            },

            limelight: {
                tooltipSettings: {
                    backgroundColor: "#303030",
                    font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#B5B5B5", width: 1, dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: "#e5e5e5",
                    unselectedRegionColor: "#A9CA44 ",
                    thumbColor: "#AECF49",
                    thumbRadius: 10,
                    thumbStroke: "#303030",
                    background: "#EFEFEF",
                    border: { color: "#606262", width: 0 },
                    opacity: 1,
                    majorGridLineStyle: { color: "#8c8c8c", visible: true },
                    minorGridLineStyle: { color: "#8c8c8c", visible: true },
                },
            },

            saffronlight: {
                tooltipSettings: {
                    backgroundColor: "#303030",
                    font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#B5B5B5", width: 1, dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: "#e5e5e5",
                    unselectedRegionColor: "#FAA113",
                    thumbColor: "#F9920B",
                    thumbRadius: 10,
                    thumbStroke: "#303030",
                    background: "#EFEFEF",
                    border: { color: "#606262", width: 0 },
                    opacity: 1,
                    majorGridLineStyle: { color: "#8c8c8c", visible: true },
                    minorGridLineStyle: { color: "#8c8c8c", visible: true },
                },
            },

            gradientlight: {
                tooltipSettings: {
                    backgroundColor: "#303030",
                    font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#B5B5B5", width: 1, dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: [{ color: "#bbbbbb", colorStop: "0%" }, { color: "#efefef", colorStop: "15%" }, { color: "#bbbbbb", colorStop: "85%" }, { color: "#efefef", colorStop: "100%" }],
                    unselectedRegionColor: [{ color: "#67C1DC", colorStop: "50%" }, { color: "#3D93AA", colorStop: "100%" }],
                    thumbColor: [{ color: "#67C1DC", colorStop: "50%" }, { color: "#3D93AA", colorStop: "100%" }],
                    thumbRadius: 10,
                    thumbStroke: "#303030",
                    background: "#EFEFEF",
                    border: { color: "#606262", width: 0 },
                    opacity: 1,
                    majorGridLineStyle: { color: "#8c8c8c", visible: true },
                    minorGridLineStyle: { color: "#8c8c8c", visible: true },
                },
            },

            gradientazure: {
                tooltipSettings: {
                    backgroundColor: "#303030",
                    font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#B5B5B5", width: 1, dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: [{ color: "#bbbbbb", colorStop: "0%" }, { color: "#efefef", colorStop: "15%" }, { color: "#bbbbbb", colorStop: "85%" }, { color: "#efefef", colorStop: "100%" }],
                    unselectedRegionColor: [{ color: "#67C1DC", colorStop: "50%" }, { color: "#3D93AA", colorStop: "100%" }],
                    thumbColor: [{ color: "#67C1DC", colorStop: "50%" }, { color: "#3D93AA", colorStop: "100%" }],
                    thumbRadius: 10,
                    thumbStroke: "#303030",
                    background: "#EFEFEF",
                    border: { color: "#606262", width: 0 },
                    opacity: 1,
                    majorGridLineStyle: { color: "#8c8c8c", visible: true },
                    minorGridLineStyle: { color: "#8c8c8c", visible: true },
                },
            },

            gradientlime: {
                tooltipSettings: {
                    backgroundColor: "#303030",
                    font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#1E1E1E', family: 'Segoe UI',style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#B5B5B5", width: 1, dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: [{ color: "#bbbbbb", colorStop: "0%" }, { color: "#efefef", colorStop: "15%" }, { color: "#bbbbbb", colorStop: "85%" }, { color: "#efefef", colorStop: "100%" }],
                    unselectedRegionColor: [{ color: "#A5C14A", colorStop: "50%" }, { color: "#738B1F", colorStop: "100%" }],
                    thumbColor: [{ color: "#A5C14A", colorStop: "50%" }, { color: "#738B1F", colorStop: "100%" }],
                    thumbRadius: 10,
                    thumbStroke: "#303030",
                    background: "#EFEFEF",
                    border: { color: "#606262", width: 0 },
                    opacity: 1,
                    majorGridLineStyle: { color: "#8c8c8c", visible: true },
                    minorGridLineStyle: { color: "#8c8c8c", visible: true },
                },
            },

            gradientsaffron: {
                tooltipSettings: {
                    backgroundColor: "#303030",
                    font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#B5B5B5", width: 1, dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: [{ color: "#bbbbbb", colorStop: "0%" }, { color: "#efefef", colorStop: "15%" }, { color: "#bbbbbb", colorStop: "85%" }, { color: "#efefef", colorStop: "100%" }],
                    unselectedRegionColor: [{ color: "#FEB75B", colorStop: "50%" }, { color: "#ED7E16", colorStop: "100%" }],
                    thumbColor: [{ color: "#FEB75B", colorStop: "50%" }, { color: "#ED7E16", colorStop: "100%" }],
                    thumbRadius: 10,
                    thumbStroke: "#303030",
                    background: "#EFEFEF",
                    border: { color: "#606262", width: 0 },
                    opacity: 1,
                    majorGridLineStyle: { color: "#8c8c8c", visible: true },
                    minorGridLineStyle: { color: "#8c8c8c", visible: true },
                },
            },

            flatdark: {
                tooltipSettings: {
                    backgroundColor: "#FFFFFF",
                    font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {                        
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#FFFFFF", width: 1, dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: "#353635",
                    unselectedRegionColor: "#5EABDE",
                    thumbColor: "#2382C3",
                    thumbRadius: 10,
                    thumbStroke: "#FFFFFF",
                    background: "#FFFFFF",
                    opacity: 0.08,
                    border: { color: "#FFFFFF", width:0 },
                    majorGridLineStyle: { color: "#FFFFFF", visible: true },
                    minorGridLineStyle: { color: "#FFFFFF", visible: true },
                },
            },

            azuredark: {
                tooltipSettings: {
                    backgroundColor: "#FFFFFF",
                    font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#FFFFFF", width: 1, dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: "#353635",
                    unselectedRegionColor: "#5EABDE",
                    thumbColor: "#2382C3",
                    thumbRadius: 10,
                    thumbStroke: "#FFFFFF",
                    background: "#FFFFFF",
                    opacity: 0.08,
                    border: { color: "#FFFFFF", width: 0 },
                    majorGridLineStyle: { color: "#FFFFFF", visible: true },
                    minorGridLineStyle: { color: "#FFFFFF", visible: true },
                },
            },

            limedark: {
                tooltipSettings: {
                    backgroundColor: "#FFFFFF",
                    font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#FFFFFF", width: 1, dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: "#353635",
                    unselectedRegionColor: "#A9CA44",
                    thumbColor: "#AECF49",
                    thumbRadius: 10,
                    thumbStroke: "#FFFFFF",
                    background: "#FFFFFF",
                    opacity: 0.08,
                    border: { color: "#FFFFFF", width: 0 },
                    majorGridLineStyle: { color: "#FFFFFF", visible: true },
                    minorGridLineStyle: { color: "#FFFFFF", visible: true },
                },
            },
            
            saffrondark: {
                tooltipSettings: {
                    backgroundColor: "#FFFFFF",
                    font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#FFFFFF', family: 'Segoe UI',style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#FFFFFF", width: 1, dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: "#353635",
                    unselectedRegionColor: "#FAA113",
                    thumbColor: "#F9920B",
                    thumbRadius: 10,
                    thumbStroke: "#FFFFFF",
                    background: "#FFFFFF",
                    opacity: 0.08,
                    border: { color: "#FFFFFF", width: 0 },
                    majorGridLineStyle: { color: "#FFFFFF", visible: true },
                    minorGridLineStyle: { color: "#FFFFFF", visible: true },
                },
            },

            gradientdark: {
                tooltipSettings: {
                    backgroundColor: "#FFFFFF",
                    font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI',style: 'Regular', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#FFFFFF", width: 1, dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: [{ color: "#0a0a0a", colorStop: "0%" }, { color: "#282828", colorStop: "15%" }, { color: "#282828", colorStop: "85%" }, { color: "#0a0a0a", colorStop: "100%" }],
                    unselectedRegionColor: [{ color: "#67C1DC", colorStop: "50%" }, { color: "#3D93AA", colorStop: "100%" }],
                    thumbColor: [{ color: "#67C1DC", colorStop: "50%" }, { color: "#3D93AA", colorStop: "100%" }],
                    thumbRadius: 10,
                    thumbStroke: "#FFFFFF",
                    background: "#FFFFFF",
                    opacity: 0.08,
                    border: { color: "#FFFFFF", width: 0 },
                    majorGridLineStyle: { color: "#FFFFFF", visible: true },
                    minorGridLineStyle: { color: "#FFFFFF", visible: true },
                },
            },

            gradientazuredark: {
                tooltipSettings: {
                    backgroundColor: "#FFFFFF",
                    font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#FFFFFF", width: 1, dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: [{ color: "#0a0a0a", colorStop: "0%" }, { color: "#282828", colorStop: "15%" }, { color: "#282828", colorStop: "85%" }, { color: "#0a0a0a", colorStop: "100%" }],
                    unselectedRegionColor: [{ color: "#67C1DC", colorStop: "50%" }, { color: "#3D93AA", colorStop: "100%" }],
                    thumbColor: [{ color: "#67C1DC", colorStop: "50%" }, { color: "#3D93AA", colorStop: "100%" }],
                    thumbRadius: 10,
                    thumbStroke: "#FFFFFF",
                    background: "#FFFFFF",
                    opacity: 0.08,
                    border: { color: "#FFFFFF", width: 0 },
                    majorGridLineStyle: { color: "#FFFFFF", visible: true },
                    minorGridLineStyle: { color: "#FFFFFF", visible: true },
                },
            },

            gradientlimedark: {
                tooltipSettings: {
                    backgroundColor: "#FFFFFF",
                    font: { color: '#1E1E1E', family: 'Segoe UI', style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', fontStyle: 'Regular', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#FFFFFF", width: 1, dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1,weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: [{ color: "#0a0a0a", colorStop: "0%" }, { color: "#282828", colorStop: "15%" }, { color: "#282828", colorStop: "85%" }, { color: "#0a0a0a", colorStop: "100%" }],
                    unselectedRegionColor: [{ color: "#A5C14A", colorStop: "50%" }, { color: "#738B1F", colorStop: "100%" }],
                    thumbColor: [{ color: "#A5C14A", colorStop: "50%" }, { color: "#738B1F", colorStop: "100%" }],
                    thumbRadius: 10,
                    thumbStroke: "#FFFFFF",
                    background: "#FFFFFF",
                    opacity: 0.08,
                    border: { color: "#FFFFFF", width: 0 },
                    majorGridLineStyle: { color: "#FFFFFF", visible: true },
                    minorGridLineStyle: { color: "#FFFFFF", visible: true },
                },
            },

            gradientsaffrondark: {
                tooltipSettings: {
                    backgroundColor: "#FFFFFF",
                    font: { color: '#1E1E1E', family: 'Segoe UI',style: 'Normal', size: '10px', opacity: 1, weight: 'regular' },
                },
                labelSettings: {
                    style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                    higherLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' }, horizontalAlignment: "left" },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "#FFFFFF", width: 1, dashArray: "15 5 0" },
                    },
                    lowerLevel: {
                        style: { font: { color: '#FFFFFF', family: 'Segoe UI', style: 'Regular', size: '13px', opacity: 1, weight: 'regular' } },
                        border: { color: "transparent", width: 0 },
                        fill: "transparent",
                        gridLineStyle: { color: "transparent", width: 0 },
                    },
                },
                navigatorStyleSettings: {
                    selectedRegionColor: [{ color: "#0a0a0a", colorStop: "0%" }, { color: "#282828", colorStop: "15%" }, { color: "#282828", colorStop: "85%" }, { color: "#0a0a0a", colorStop: "100%" }],
                    unselectedRegionColor: [{ color: "#FEB75B", colorStop: "50%" }, { color: "#ED7E16", colorStop: "100%" }],
                    thumbColor: [{ color: "#FEB75B", colorStop: "50%" }, { color: "#ED7E16", colorStop: "100%" }],
                    thumbRadius: 10,
                    thumbStroke: "#FFFFFF",
                    background: "#FFFFFF",
                    opacity: 0.08,
                    border: { color: "#FFFFFF", width: 0 },
                    majorGridLineStyle: { color: "#FFFFFF", visible: true },
                    minorGridLineStyle: { color: "#FFFFFF", visible: true },
                },
            },

        },
        /**
                * To configure the properties at runtime using SetModel		
                * @private
                */
        _setModel: function (options) {
            for (var prop in options) {
              //  this.disableAnimation();
                switch (prop) {                   
                    case "theme":
                        this.model._themeChanged = true;
                        this.model.theme = options[prop];
                        this._setTheme(this._themes, this.model.theme);
                    default:
                        $.extend(true, this.model, {}, options[prop]);
                }
            }
          //  $(this.svgDocument).empty();		  
            this.bindTo();
			this.renderNavigator(this);
			this._bindevents();
        },
        /**
        * destroy the RangeNavigator widget
		* @return jQuery
		* @example 
		* &lt;div id="container"&gt;&lt;/div&gt; <br> 
		* &lt;script&gt;
		* // Destroy RangeNavigator
		* var obj = $("#container").data("ejRangeNavigator");
		* obj.destroy(); // destroy the RangeNavigator
		* &lt;/script&gt;
		* @example 
		* &lt;div id="container"&gt;&lt;/div&gt; <br> 
		* &lt;script&gt;
		* $("#container").ejRangeNavigator("destroy");	
		* &lt;/script&gt;
         */
        _destroy: function () {
            this.element.empty().removeClass(this.model.cssClass);
        },


        _createSvg: function (element) {

            this.svgSupport = (window.SVGSVGElement) ? true : false;
            var bwr = jQuery.uaMatch(navigator.userAgent);
            this.brow = bwr.browser.toLowerCase();
            if (this.svgSupport) {
                //rendering object created
                this.renderer = new ej.EjSvgRender(this.element);
                //Creating svg document
                this.svgns = this.renderer.svgLink;
                this.svgDocument = this.renderer.svgObj;
            }
            else {
                //rendering object created
                this.renderer = new ej.EjVmlRender(this.element);
                //Creating VML document
                this.svgDocument = this.renderer.svgObj;
            }

        },

        _setTheme: function (jsonObj, themeName) {
            var name = themeName.toLowerCase();
            this.model = ej.copyObject({}, this.model, jsonObj[name]);
        },

        _setPositions: function () {

            var higherposition = this.model.labelSettings.higherLevel.position;
            var lowerposition = this.model.labelSettings.lowerLevel.position;
            var highervisible = this.model.labelSettings.higherLevel.visible;
            var lowervisible = this.model.labelSettings.lowerLevel.visible;
            var higherlabelplace = this.model.labelSettings.higherLevel.labelPlacement;
            var lowerlabelplace = this.model.labelSettings.lowerLevel.labelPlacement;
            //to initialize the positions of the sliders, labelbars and chart
            if (higherposition === "top" && lowerposition === "bottom") {
                this.centerPosition = this.minHighHeight + 1;
                this.centerHeight = this.newHeight - this.minHighHeight - this.minLowHeight;
                this.bottomPosition = this.minHighHeight + this.centerHeight + 1;                    
            }
            else if ((higherposition === "bottom" && lowerposition === "bottom")) {
                this.centerPosition = 0;
                this.centerHeight = this.newHeight - this.minHighHeight - this.minLowHeight;
                this.bottomPosition = this.minLowHeight + this.centerHeight + 1;

            }
            else if (higherposition === "bottom" && lowerposition === "top") {
                this.centerPosition = this.minLowHeight + 1;
                topPosition = 0;
                this.centerHeight = this.newHeight - this.minHighHeight - this.minLowHeight;
                this.bottomPosition = this.minLowHeight + this.centerHeight + 1;
            }
            else if (higherposition === "top" && lowerposition === "top") {
                this.centerPosition = this.minLowHeight + this.minHighHeight + 1;
                this.centerHeight = this.newHeight - this.minHighHeight - this.minLowHeight;
                this.bottomPosition = this.newHeight;
            }

            if (highervisible === false && lowervisible === false) {
                this.centerPosition = 0;
                this.centerHeight = this.newHeight;
                this.bottomPostion = this.newHeight;
            }
            else if (highervisible === false) {
                this.centerPosition = 0;
                this.centerHeight = this.newHeight - this.minLowHeight;
                this.bottomPosition = this.newHeight;
            }
            else if (lowervisible === false) {
                this.centerPosition = this.minHighHeight + 1;
                this.centerHeight = this.newHeight - this.minHighHeight;
                this.bottomPosition = this.minHighHeight + this.centerHeight + 1;
            }

            if (higherlabelplace === "outside" && lowerlabelplace === "outside") {
                this.sliderPosition = this.centerPosition;
                this.sliderHeight = this.centerHeight;
            }
            else if (higherlabelplace === "outside") {
                this.sliderPosition = this.centerPosition;
                this.sliderHeight = this.newHeight;
            }
            else if (lowerlabelplace === "outside") {
                this.sliderPosition = 0;
                this.sliderHeight = this.centerHeight + this.minHighHeight;
            }
            else {
                this.sliderPosition = 0;
                this.sliderHeight = this.newHeight;
            }
            
        },

        renderNavigator: function () {
		    this.culture = Globalize.culture(this.model.locale);
            this._initializeVariables.call(this, this.model, this.model.series, this.model.seriesSettings);

            this._rootId = $(this.element).attr("id");
            this.leftPadding =parseFloat($("#"+this._rootId).css('padding-left'));

            //initializing minimum height and width for the control
            var fontsize = parseFloat(this.model.labelSettings.higherLevel.style.font.size);
            var type = this.model.valueType;
            if (type == "datetime") {
                this.minHighHeight = fontsize < 20 ?
                    20 :
                    fontsize + 2;
                fontsize = parseFloat(this.model.labelSettings.lowerLevel.style.font.size);
            }
            else
                this.minHighHeight = 0;
            this.minLowHeight = fontsize < 20 ?
                20 :
                fontsize + 2;
            if (type == "datetime") {
                var ht = ($(this.element).height() && this.newHeight==undefined) ? $(this.element).height() :this.newHeight==undefined?120:this.newHeight;
                this.minCenterHeight = parseFloat(ht) - parseFloat(this.minLowHeight) - parseFloat(this.minHighHeight);
            } else {
                var ht = ($(this.element).height()) && this.newHeight==undefined ? $(this.element).height() -this.minLowHeight : this.newHeight==undefined?100:this.newHeight;
                this.minCenterHeight = ht;
            }
            this.minHeight = this.minHighHeight + this.minCenterHeight + this.minLowHeight;
            this.padding = parseFloat(this.model.padding);
            
            
            //calculating the height and width of the control
            this.newWidth = this.model.sizeSettings.width ? this.model.sizeSettings.width : $(this.element).width();
            this.newHeight = this.model.sizeSettings.height ? this.model.sizeSettings.height : ($(this.element).height() && this.newHeight==undefined) > this.minHeight ? $(this.element).height() : this.minHeight;
            
            
            //initializing the higherlevel and lowerlevel collections
            this._higherTextNode = [];
            this._higherTotalValues = [];
            this._higherLineLeft = [];
            this._higherTextLeft = [];
            this._lowerTextNode = [];
            this._lowerTotalValues = [];
            this._lowerLineLeft = [];
            this._lowerTextLeft = [];

            //calculating positions
            this.centerPosition=0;
            this.bottomPosition = 0;
            this.centerHeight = 0;
            this.sliderPosition = 0;
            this.sliderHeight = 0;
            
            //set positions
            this._setPositions();

            //set initial width and height for the svg document
            $(this.svgDocument).empty();
            this.svgDocument.setAttribute("position", "relative");
            this.svgDocument.setAttribute("overflow", "visible");
            if (this.svgSupport) {
                this.svgDocument.setAttribute("height", this.newHeight);
                this.svgDocument.setAttribute("width", this.newWidth);
            }
            else {
                $(this.svgDocument).width(this.newWidth);
                $(this.svgDocument).height(this.newHeight);
            }
            this.model._size.width = this.newWidth;
            this.model._size.height = this.newHeight;
            var commonLoadedEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonLoadedEventArgs.data = { model: this.model };
            this._trigger("loaded", commonLoadedEventArgs);
            if (this.model.theme != "")
                this._setTheme(this._themes, this.model.theme);
            //create gradient
            var uncolor = this.model.navigatorStyleSettings.unselectedRegionColor;
            this.unselectgrad = this.renderer.createGradientElement('unselected', uncolor, 150, 0, 150, 100, this.svgDocument);
            var navibackcolor = this.model.navigatorStyleSettings.background;
            this.naviback = this.renderer.createGradientElement('naviback', navibackcolor, 150, 0, 150, 100, this.svgDocument);
            var selcolor = this.model.navigatorStyleSettings.selectedRegionColor;
            this.selectedgrad = this.renderer.createGradientElement('selected', selcolor, 150, 0, 150, 100, this.svgDocument);
            var tbColor = this.model.navigatorStyleSettings.thumbColor;
            this.tbClr = this.renderer.createGradientElement('thumbClr', tbColor, 150, 0, 150, 100, this.svgDocument);
            
            var areaHeight;
            if (type == "numeric")
                areaHeight = this.newHeight - this.model.navigatorStyleSettings.border.width - this.minLowHeight;
            else
                areaHeight = this.newHeight - this.model.navigatorStyleSettings.border.width -this.minLowHeight -this.minHighHeight;
            //Creating border for navigator
            var naviBorderOptions = {
                'id':this._rootId+'_Border',
                'x':this.padding,
                'y': this.sliderPosition,
                'width': this.newWidth-this.padding*2,
                'height': this.sliderHeight,
                'fill': this.naviback,
                'stroke-width':this.model.navigatorStyleSettings.border.width,
                'stroke': this.model.navigatorStyleSettings.border.color,
                'opacity': this.model.navigatorStyleSettings.opacity,
                'stroke-dasharray': this.model.navigatorStyleSettings.border.dashArray,
                
            }

            this.renderer.drawRect(naviBorderOptions, this.svgDocument);

            //creating g tags to group higherlevel and lowerlevel elements(txt,line).
            this.higherLevel = this.renderer.createGroup({ 'id': this._rootId+'higherLevel' });
            this.lowerLevel = this.renderer.createGroup({ 'id': this._rootId + 'lowerLevel' });
            this.centerLevel = this.renderer.createGroup({ 'id': this._rootId + 'centerLelvel' });
            this.higherLevel.height = this.minHighHeight;
            this.lowerLevel.height = this.minLowHeight;

            //creating g tags to group tooltipSettings
            if (this.model.tooltipSettings.visible && this.svgSupport) {
                this.leftTooltip = this.renderer.createGroup({ 'id': this._rootId + 'leftTooltip' });
                this.rightTooltip = this.renderer.createGroup({ 'id': this._rootId + 'rightTooltip' });

                var leftToolOptions = {
                    'fill': this.model.tooltipSettings.backgroundColor,
                    'd': 'M 0 0 L 0 21 L 64 21 L 64 6 L 70 0 Z'
                };
                this.renderer.drawPath(leftToolOptions, this.leftTooltip);
                var tooltipoptions = this.model.tooltipSettings.font;
                

                var textOptions = {
                    'id': this._rootId + '_LeftToolText',
                    'x': 5,
                    'fill': tooltipoptions.color,
                    'font-size': tooltipoptions.size,
                    'font-family': tooltipoptions.family,
                    'font-style': tooltipoptions.style,
                    'font-weight': tooltipoptions.weight,
                    'text-anchor': 'start',
                    'opacity': tooltipoptions.opacity,
                    'dominant-baseline': 'middle',
                    
                    
                };
                this.renderer.drawText(textOptions, Globalize.format(new Date(1 / 1 / 2000), "MMMM, yyyy"), this.leftTooltip);
                this.leftTxt = this.leftTooltip.childNodes[1];
                var rightToolOptions = {
                    'fill': this.model.tooltipSettings.backgroundColor,
                    'd': 'M 0 0 L 70 0 L 70 21 L 6 21 L 6 6 Z',
                    'horizontal-alignment': 'stretch'
                };
                this.renderer.drawPath(rightToolOptions, this.rightTooltip);
                this.renderer.drawText(textOptions, Globalize.format(new Date(1 / 1 / 2000), "MMMM, yyyy"), this.rightTooltip);
                this.rightTxt = this.rightTooltip.childNodes[1];
                
            }
            //creating g tag for holding chart
            this.chartGView = this.renderer.createGroup({ 'id': this._rootId + 'charView' });
            
            this.renderer.append(this.chartGView, this.svgDocument);
            if(this.model.valueType=="datetime")
            this.renderer.append(this.higherLevel, this.svgDocument);
            this.renderer.append(this.lowerLevel, this.svgDocument);
            this.renderer.append(this.centerLevel, this.svgDocument);
            
            //creating g tag for sliders
            this.leftUnSelected=this.renderer.createGroup({'id':'unselectleft'});
            this.gLeftSlider = this.renderer.createGroup({ 'id': 'leftslider' });
            this.gRightSlider = this.renderer.createGroup({ 'id': 'rightslider' });
            this.gCenterSlider = this.renderer.createGroup({ 'id': 'centerslider' });
            this.rightUnSelected = this.renderer.createGroup({ 'id': 'unselectright' });

            var unLeftSliderOptions = {
                'width': parseFloat(this.newWidth - 4 - this.padding*2),
                'height': this.sliderHeight,
                'fill':this.unselectgrad,
                'opacity': '0.3',
                'transform': 'translate('+this.padding+',' + this.sliderPosition + ')'
            };
            this.renderer.drawRect(unLeftSliderOptions, this.leftUnSelected);
            this.leftUnArea = this.leftUnSelected.firstChild;
            this.renderer.append(this.leftUnSelected, this.svgDocument);

            var centerSliderOptions = {
                'width': parseFloat(this.newWidth - 4 - this.padding*2),
                'height': this.sliderHeight,
                'fill': this.selectedgrad,
                'opacity': '0',
                'transform': 'translate('+this.padding+','+this.sliderPosition+')'
            };

            this.renderer.drawRect(centerSliderOptions, this.gCenterSlider);
            this.centerSlider = this.gCenterSlider.firstChild;
            $(this.centerSlider).css('cursor', 'pointer');

            this.renderer.append(this.gCenterSlider, this.svgDocument);
            var leftSliderOptions = {
                'width': '2',
                'height': this.sliderHeight,
                'fill': this.model.navigatorStyleSettings.thumbStroke,
                'opacity': '1',
                'y':this.sliderPosition
               
                
            };
            var lcircleOptions = {
                'cx': this.padding,
                'cy': this.sliderPosition + (this.sliderHeight / 2),
                'r': this.model.navigatorStyleSettings.thumbRadius,
                'stroke-width': 2,
                'stroke': this.model.navigatorStyleSettings.thumbStroke,
                'fill': this.tbClr
            };

                
            this.renderer.drawRect(leftSliderOptions, this.gLeftSlider);
            this.renderer.drawCircle(lcircleOptions, this.gLeftSlider);
            this.leftCircle = this.gLeftSlider.lastChild;
            $(this.leftCircle).css('cursor', 'pointer');
            this.leftSlider = this.gLeftSlider.firstChild;
            $(this.leftSlider).css('cursor', 'w-resize');

            this.renderer.append(this.gLeftSlider, this.svgDocument);

            var unRightSliderOptions = {
                'width': parseFloat(this.newWidth - 4 - this.padding*2),
                'height': this.sliderHeight,
                'fill': this.unselectgrad,
                'opacity': '0.3',
                'transform': 'translate('+this.padding+',' + this.sliderPosition + ')'
            };
            this.renderer.drawRect(unRightSliderOptions, this.rightUnSelected);
            this.rightUnArea = this.rightUnSelected.firstChild;
            this.renderer.append(this.rightUnSelected, this.svgDocument);
            var rightSliderOptions = {
                'width': '2',
                'height': this.sliderHeight,
                'fill': this.model.navigatorStyleSettings.thumbStroke,
                'opacity': '1',
                'transform': 'translate(' + parseFloat(this.newWidth - 4-this.padding) + ', ' + this.sliderPosition + ' )'
            };
            var rcircleOptions = {
                'cx': this.newWidth - 4 - this.padding,
                'cy': this.sliderPosition + (this.sliderHeight / 2),
                'r': this.model.navigatorStyleSettings.thumbRadius,
                'stroke-width': 2,
                'stroke': this.model.navigatorStyleSettings.thumbStroke,
                'fill': this.tbClr
            };
            this.renderer.drawRect(rightSliderOptions, this.gRightSlider);
            this.renderer.drawCircle(rcircleOptions, this.gRightSlider);
            this.rightCircle = this.gRightSlider.lastChild;
            $(this.rightCircle).css('cursor', 'pointer');
            this.rightSlider = this.gRightSlider.firstChild;
            $(this.rightSlider).css('cursor', 'w-resize');

            this.renderer.append(this.gRightSlider, this.svgDocument);

            
            this.renderer.append(this.leftTooltip, this.svgDocument);
            this.renderer.append(this.rightTooltip, this.svgDocument);

            this.element.append(this.svgDocument);
            if (this.svgSupport) {
                this.trueCoords = this.svgDocument.createSVGPoint();

                this.grabPoint = this.svgDocument.createSVGPoint();
            }

            this.backDrop = this.element;
            this.dragTarget = null;            
            
            this._renderChart.call(this, this.model);
            
            if ((this.startDateTime != undefined && this.endDateTime != undefined) || (this.startValue != undefined && this.endValue != undefined)) {
                this.calculateInterval.call(this, this.model.labelSettings.higherLevel, this.model.labelSettings.lowerLevel);

                this.setSliders();
            } else {
                if (!this.svgSupport)
                    this.renderer._setAttr($(this.leftSlider), { 'transform': 'translate(' + this.padding + ',' + this.sliderPosition + ')' });
                else
                    this.renderer._setAttr($(this.leftSlider), { 'transform': 'translate(' + this.padding + ',' + 0 + ')' });

                this.leftTooltip.setAttribute('opacity', 0);
                this.rightTooltip.setAttribute('opacity', 0);
            }

            //this._trigger("loaded", this.model);
        },

        eachInterval:"",

        //Rendering chart
        _renderChart: function (model) {
            if (model.dataSource != "" && model.series == "" && model.seriesSettings == "") {
                $(this.chartGView).ejChart(
                {
				    locale : this.model.locale,
                    border: { width: 0, color: "transparent" },
                    margin: { left: 0, right: 0, top: 0, bottom: 0 },
                    elementSpacing: 0,
                    chartArea:
                    {
                        background: "transparent",
                        border: { width: 0 }
                    },
                    primaryXAxis: {
                        axisLine: { visible: false },
                        font: { size: '0px', },
                        majorTickLines:
                        {
                            lineWidth: 0,
                            size: 0,
                            visible: true
                        },
                        majorGridLines: { visible: false },
                        rangePadding: this.model.rangePadding,
                        visible: false,
                        isInversed: this.model.enableRTL

                    },
                    primaryYAxis: this.model.valueAxisSettings,
                 series: [{
                     dataSource: model.dataSource, xName: model.xName, yName: model.yName,
                     type: 'line',
                     width:1.5,
                     enableAnimation:false

                 },
                 ],
                 size: { height: parseFloat(this.sliderHeight).toString(), width: parseFloat(this.newWidth - (2 * this.padding)).toString(), padding: -10 },
                 legend: {
                     visible: false,
                     itemSize: { height: 0, width: 0, borderColor: 'transparent', borderWidth: 0 },
                 }
             });
            }
            else if (model.dataSource != "" && model.series != "" && model.series[0].dataSource == undefined || model.seriesSettings != "" && model.seriesSettings.dataSource == undefined && model.dataSource!="") {
                model.seriesSettings.dataSource = model.dataSource;
				model.seriesSettings.xName=model.xName;
				model.seriesSettings.yName=model.yName;
                $(this.chartGView).ejChart(
            {
			    locale : this.model.locale,
                border: { width: 0, color: "transparent" },
                margin: { left: 0, right: 0, top: 0, bottom: 0 },
                elementSpacing: 0,
                chartArea:
                {
                    background: "transparent",
                    border: { width: 0 }
                },
                primaryXAxis: {

                    axisLine: { visible: false },
                    font: { size: '0px', },
                    majorTickLines:
                    {
                        lineWidth: 0, size: 0, visible: true
                    },
                    majorGridLines: { visible: false },
                    rangePadding: this.model.rangePadding,
                    visible: false,
                    isInversed: this.model.enableRTL

                },
                primaryYAxis: this.model.valueAxisSettings,
                series: model.series,
                commonSeriesOptions: model.seriesSettings,
                size: { height: parseFloat(this.sliderHeight).toString(), width: parseFloat(this.newWidth - (2 * this.padding)).toString(), padding: -10 },
                legend: {
                    visible: false,
                    itemSize: { height: 0, width: 0, borderColor: 'transparent', borderWidth: 0 },
                }
            });
            }
            else if (model.series != "" && model.series[0].dataSource != undefined || model.seriesSettings != "" && model.seriesSettings.dataSource != undefined) {
                if (model.seriesSettings == "") {
                    model.seriesSettings = {
                        type: 'line'
                    };
                }
                $(this.chartGView).ejChart(
            {
			    locale : this.model.locale,
                border: { width: 0, color: "transparent" },
                margin: { left: 0, right: 0, top: 0, bottom: 0 },
                elementSpacing: 0,
                chartArea:
                {
                    background: "transparent",
                    border: { width: 0 }
                },
                primaryXAxis: {

                    axisLine: { visible: false },
                    font: { size: '0px', },
                    majorTickLines:
                    {
                        lineWidth: 0, size: 0, visible: true
                    },
                    majorGridLines: { visible: false },
                    rangePadding: this.model.rangePadding,
                    visible: false,
                    isInversed: this.model.enableRTL

                },
                primaryYAxis: this.model.valueAxisSettings,
                series: model.series,
                commonSeriesOptions: model.seriesSettings,
                size: { height: parseFloat(this.sliderHeight).toString(), width: parseFloat(this.newWidth - (2 * this.padding)).toString(), padding: -10 },
                legend: {
                    visible: false,
                    itemSize: { height: 0, width: 0, borderColor: 'transparent', borderWidth: 0 },
                }
            });
            }

            this.ejChart = $(this.chartGView).data("ejChart");
            this.renderer._setAttr($(this.chartGView), { 'transform': 'translate(' + this.padding + ',' + this.sliderPosition + ')','height': this.sliderHeight });
           
        },

        _init: function () {
            this._createSvg(this);
			var commonLoadedEventArgs = $.extend({}, ej.EjSvgRender.commonChartEventArgs);
            commonLoadedEventArgs.data = { model: this.model };
            this._trigger("load", commonLoadedEventArgs);
            this.renderNavigator(this);
            if (this.model.enableAutoResizing) {
                this._on($(window), "resize", this.renderNavigator);
            }
            this._bindevents();
        },

        isDevice: function () {
            // return (/mobile|tablet|android|kindle/i.test(navigator.userAgent.toLowerCase()));
            // comment above line temporary. Due to the below code event wont bind for tablet device
            return (/mobile|android|kindle/i.test(navigator.userAgent.toLowerCase()));
        },

        _bindevents: function () {
            var matched = jQuery.uaMatch(navigator.userAgent);
            var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
            if (window.navigator.msPointerEnabled && !isIE11) {
                this._on($(this.svgDocument), "MSPointerDown", this._grab);
                this._on($(this.svgDocument), "MSPointerMove", this._drag);
                this._on($(this.svgDocument), "MSPointerUp", this._drop);
                this._on($(window), "MSPointerUp", this.mouseup);
                $(this.svgDocument).css('-ms-touch-action', 'none');
            }
            else if (this.isDevice()) {
                this._on($(this.svgDocument), "touchstart", this._grab);
                this._on($(this.svgDocument), "touchmove", this._drag);
                this._on($(this.svgDocument), "touchend", this._drop);
            }
            else if (matched.browser.toLowerCase() == "chrome") {
                this._on($(this.svgDocument), "touchstart", this._grab);
                this._on($(this.svgDocument), "touchmove", this._drag);
                this._on($(this.svgDocument), "touchend", this._drop);
                this._on($(this.svgDocument), "mousedown", this._grab);
                this._on($(this.svgDocument), "mousemove", this._drag);
                this._on($(this.svgDocument), "mouseup", this._drop);
            }
            else {
                this._on($(this.svgDocument), "mousedown", this._grab);
                this._on($(this.svgDocument), "mousemove", this._drag);
                this._on($(this.svgDocument), "mouseup", this._drop);
            }
            if (isIE11)
                $(this.svgDocument).css('touch-action', 'none');

            this._on($(window), "mouseup", this.mouseup);
        },

        _initializeVariables: function (model, series, sSettings) {
            //intializing ismouseup flag
            this.ismouseup = false;
            var labelStyle = this.model.labelSettings.style;
            var lowLabelStyle = this.model.labelSettings.lowerLevel.style;
            var highLabelStyle = this.model.labelSettings.higherLevel.style;
            //checking labelstyle
            if (highLabelStyle == "")
                this.model.labelSettings.higherLevel.style = labelStyle;
            if (lowLabelStyle == "") {
                this.model.labelSettings.lowerLevel.style = labelStyle;
            }
            else if (lowLabelStyle != undefined && lowLabelStyle.horizontalAlignment == undefined) {
                this.model.labelSettings.lowerLevel.style.horizontalAlignment = "center";
            }
            if (this.model.valueType == "numeric" && this.model.tooltipSettings.labelFormat=="MM/dd/yyyy") {
                this.model.tooltipSettings.labelFormat = "d";
            }
            //checking for datasource and finding start and end values
            if (model.dataSource != "" && model.xName != "" && model.yName != "") {
                this._processJsonData(model.dataSource, this.model);
            }
            else if (series!="" && series != undefined && series[0].dataSource != undefined && series[0].xName != undefined && series[0].yName != undefined) {
                this._processJsonData(series[0].dataSource, series[0]);
            }
            else if (sSettings.dataSource != undefined && sSettings.xName != undefined && sSettings.yName != undefined) {
                this._processJsonData(sSettings.dataSource, sSettings);
            }
            else if (this.model.rangeSettings.start != "" && this.model.rangeSettings.end != "") {
                if (this.model.valueType == "datetime") {
                    this.startDateTime = new Date(this.model.rangeSettings.start);
                    this.endDateTime = new Date(this.model.rangeSettings.end);
                }
                else {
                    this.startValue = this.model.rangeSettings.start;
                    this.endValue = this.model.rangeSettings.end;
                }
            }
            // initializing start year and end year
            if (this.startDateTime != undefined && this.endDateTime != undefined) {
                if (this.model.valueType == "datetime" && this.model.rangePadding == "round") {
                    var start = new Date(this.startValue);
                    var end = new Date(this.endValue);
                    this.startDateTime = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0);
                    this.endDateTime = new Date(end.getFullYear(), end.getMonth(), end.getDate(), 23, 59, 59);
                }
                this.startYear = this.startDateTime.getFullYear();
                this.startMonth = this.startDateTime.getMonth(); 
                this.endYear = this.endDateTime.getFullYear();
                this.endMonth = this.endDateTime.getMonth();                
            }
        },

        setSliders: function () {
            var wholeSize = this.newWidth - this.padding * 2;
            var type = this.model.valueType;
            var selectedRangeStart = this.model.selectedRangeSettings.start;
            var selectedRangeEnd = this.model.selectedRangeSettings.end;
           // var leftSliderPosition, rightSliderPosition;
            if (type == "datetime")
                this.eachInterval = wholeSize / parseFloat(this.endDateTime.getTime() - this.startDateTime.getTime());
            else
                this.eachInterval = wholeSize / parseFloat(this.endValue - this.startValue);
            if (selectedRangeStart === "" && selectedRangeEnd === "") {
                if (type == "datetime") {
                    selectedRangeStart = this.startDateTime;
                    selectedRangeEnd = this.endDateTime;
                }
                else {
                    selectedRangeStart = this.startValue;
                    selectedRangeEnd = this.endValue;
                }

            }

            if (type == "datetime") {
                this.leftSliderPosition = (new Date(selectedRangeStart).getTime() - this.startDateTime.getTime()) * this.eachInterval + this.padding;
                this.rightSliderPosition = (new Date(selectedRangeEnd).getTime() - this.startDateTime.getTime()) * this.eachInterval + this.padding;
            }
            else {
                this.leftSliderPosition = (selectedRangeStart - this.startValue) * this.eachInterval + this.padding;
                this.rightSliderPosition = (selectedRangeEnd - this.startValue) * this.eachInterval + this.padding;
            }
            if (this.model.tooltipSettings.tooltipDisplayMode == "always")
                this.setopacity = 1;
            else
                this.setopacity = 0;
            this.setSliderPositions(this.leftSliderPosition, null, null);
            this.setSliderPositions(null, null, this.rightSliderPosition);
            this.setopacity = 1;
            if (this.model.enableDeferredUpdate) {
                this._calculateSelectedData();
                if (this.startDateTime !== new Date(selectedRangeStart) && this.endDateTime !== new Date(selectedRangeEnd)) {
                    this._trigger("rangeChanged", this.model);
                }
            }

        },

        centerSliderWidth: "",
        zoomp: 0,
        zoomf:1,

        setSliderPositions: function (leftValue, centerValue, rightValue) {
            var doubledate;
            var type = this.model.valueType;
            var cPosition;
            var labelPlacement = this.model.labelSettings.higherLevel.labelPlacement;
            cPosition = labelPlacement == "inside" ? 0 : this.centerPosition;
            var rtlValue;
            if (leftValue != null && leftValue >= this.padding) {
                this.leftSliderPosition = leftValue;
                rtlValue = this.model.enableRTL ? (this.newWidth - leftValue) : leftValue;
                if(type=="datetime")
                    doubledate = (rtlValue / this.eachInterval) + this.startDateTime.getTime() - (this.padding / this.eachInterval);
                else
                    doubledate = (rtlValue / this.eachInterval) + this.startValue - (this.padding / this.eachInterval);
                if (this.model.tooltipSettings.visible && this.svgSupport) {
                    this.leftTooltip.setAttribute('opacity', this.setopacity);
                    if(type=="datetime")
                        this.leftTxt.textContent = Globalize.format(new Date(doubledate), this.model.tooltipSettings.labelFormat);
                    else
                        this.leftTxt.textContent = Globalize.format(doubledate, this.model.tooltipSettings.labelFormat);
                    var txtwidth = this.leftTooltip.lastChild.getBBox().width + 15;
                    var txtheight = this.leftTooltip.lastChild.getBBox().height;
                    var txty = this.brow!="msie" ? (txtheight + 6) / 2 : (txtheight / 2) + 6;
                    this.leftTxt.setAttribute('y', txty);
                    this.leftd = "M 0 0 L 0 " + (txtheight + 6) + " L " + (txtwidth - 6) + " " + (txtheight + 6) + " L " + (txtwidth - 6) + " 6 L " + txtwidth + " 0 Z";
                    this.rightd = "M 0 0 L " + txtwidth + " 0 L " + txtwidth + " " + (txtheight + 6) + " L 6 " + (txtheight + 6) + " L 6 6 Z";

                    if (leftValue - txtwidth >= 0) {
                        this.leftTooltip.firstChild.setAttribute('d', this.leftd);
                        this.renderer._setAttr($(this.leftTooltip), { 'transform': 'translate(' + (leftValue - txtwidth) + ',' + cPosition + ')' });
                        this.leftTxt.setAttribute('x', 5);
                    }
                    else if (leftValue + txtwidth < this.rightTooltip.getCTM().e) {
                        this.renderer._setAttr($(this.leftTooltip), { 'transform': 'translate(' + (leftValue) + ',' + cPosition + ')' });
                        this.leftTooltip.firstChild.setAttribute('d', this.rightd);
                        this.leftTxt.setAttribute('x', 10);
                    }
                    else if (this.rightTooltip.getCTM().f < 30) {
                        this.renderer._setAttr($(this.leftTooltip), {'transform': 'translate(' + (leftValue) + ',' + (cPosition + 30) + ')'});
                        this.leftTooltip.firstChild.setAttribute('d', this.rightd);
                    }
                    else {
                        this.renderer._setAttr($(this.leftTooltip), {'transform': 'translate(' + (leftValue) + ',' + (cPosition) + ')'});
                        this.leftTooltip.firstChild.setAttribute('d', this.rightd);
                    }
                    if (leftValue > this.newWidth - this.rightTooltip.lastChild.getBBox().width - 15 && this.rightTooltip.getCTM().f < 30) {
                        this.renderer._setAttr($(this.leftTooltip), {'transform': 'translate(' + (leftValue - txtwidth) + ',' + (cPosition + 30) + ')'});
                    }
                    if (this.rightTooltip.getCTM().f >= 30 && leftValue < this.rightTooltip.getCTM().e) {
                        this.renderer._setAttr($(this.rightTooltip), { 'transform': 'translate(' + this.rightTooltip.getCTM().e + ',' + (cPosition) + ')'});
                    }
                }
                if (this.ismouseup == false) {
                    // this.renderer._setAttr($(this.leftUnArea), { 'width': leftValue - this.padding});
                    this.renderer._setAttr($(this.leftUnArea), { 'width': leftValue - this.padding, 'transform': 'translate(' + this.padding + ',' + this.sliderPosition + ')' });
                    if (!this.svgSupport)
                        this.renderer._setAttr($(this.leftSlider), { 'transform': 'translate(' + leftValue + ',' + this.sliderPosition + ')' });
                    else
                        this.renderer._setAttr($(this.leftSlider), { 'transform': 'translate(' + leftValue + ',' + 0 + ')' });
                    if (this.leftCircle != undefined) {
                        if(this.svgSupport)
                            this.renderer._setAttr($(this.leftCircle), { 'cx': leftValue });
                        else
                            this.renderer._setAttr($(this.leftCircle), { 'transform': 'translate(' + parseFloat(leftValue-10) + ',' + parseFloat(this.sliderPosition + (this.sliderHeight / 2)) + ')' }); //this.sliderPosition + (this.sliderHeight / 2)
                    }
                    this.renderer._setAttr($(this.centerSlider), {'transform': 'translate(' + parseFloat(leftValue) + ',' + this.sliderPosition + ')'});                   
                    var width = parseFloat(this.rightSlider.getBoundingClientRect().left) - parseFloat(this.leftSlider.getBoundingClientRect().left);
                    this.renderer._setAttr($(this.centerSlider), { 'width': width});
                }
                else {
                    this.ismouseup = false;
                    this.renderer._setAttr($(this.leftUnArea), { 'width': leftValue - this.padding, 'transform': 'translate(' + this.padding + ',' + this.sliderPosition + ')' });
                    if (!this.svgSupport)
                        this.renderer._setAttr($(this.leftSlider), { 'transform': 'translate(' + leftValue + ',' + this.sliderPosition + ')' });
                    else
                        this.renderer._setAttr($(this.leftSlider), { 'transform': 'translate(' + leftValue + ',' + 0 + ')' });
                    if (this.leftCircle != undefined) {
                        if (this.svgSupport)
                            this.renderer._setAttr($(this.leftCircle), { 'cx': leftValue });
                        else
                            this.renderer._setAttr($(this.leftCircle), { 'transform': 'translate(' + parseFloat(leftValue - 10) + ',' + parseFloat(this.sliderPosition + (this.sliderHeight / 2)) + ')' }); //this.sliderPosition + (this.sliderHeight / 2)
                    }
                    this.renderer._setAttr($(this.centerSlider), {'transform': 'translate(' + parseFloat(leftValue) + ',' + this.sliderPosition + ')'});
                    var width = parseFloat(this.rightSlider.getBoundingClientRect().left) - parseFloat(this.leftSlider.getBoundingClientRect().left);
                    this.renderer._setAttr($(this.centerSlider), { 'width': width});
                }
                this.model.zoomPosition = (leftValue-this.padding) / (this.newWidth-this.padding*2);
                this.model.zoomFactor = (this.rightSlider.getBoundingClientRect().left + parseFloat( this.renderer._getAttrVal($(this.rightSlider),'width')) - this.leftSlider.getBoundingClientRect().left) / (this.newWidth - this.padding * 2);                
                var rightposX = this.rightSlider.getBoundingClientRect().left;
                if (type == "datetime") {
                    this.model.selectedRangeSettings.start = new Date(doubledate);
                    this.model.selectedRangeSettings.end = new Date((rightposX / this.eachInterval) + this.startDateTime.getTime() - (this.padding / this.eachInterval));
                }
                else {
                    this.model.selectedRangeSettings.start = doubledate;
                    this.model.selectedRangeSettings.end = (rightposX / this.eachInterval) + this.startValue - (this.padding / this.eachInterval);
                }
            }
            else if (rightValue != null && rightValue <= this.newWidth - this.padding + 1) {
                this.rightSliderPosition = rightValue;
                var startDateTime = new Date(this.model.rangeSettings.start);
                rtlValue = this.model.enableRTL ? (this.newWidth - rightValue) : rightValue;
               if(type=="datetime")
                   doubledate = (rtlValue / this.eachInterval) + this.startDateTime.getTime() - (this.padding / this.eachInterval);
                else
                   doubledate = (rtlValue / this.eachInterval) + this.startValue - (this.padding / this.eachInterval);
                this.model.selectedRangeSettings.end = new Date(doubledate);

                if (this.model.tooltipSettings.visible && this.svgSupport) {
                    this.rightTooltip.setAttribute('opacity', this.setopacity);
                    if(type=="datetime")
                        this.rightTxt.textContent = Globalize.format(new Date(doubledate), this.model.tooltipSettings.labelFormat);
                    else
                        this.rightTxt.textContent = Globalize.format(doubledate, this.model.tooltipSettings.labelFormat);
                    var txtwidth = this.rightTooltip.lastChild.getBBox().width + 15;
                    var txtheight = this.rightTooltip.lastChild.getBBox().height;
                    var txty = this.brow != "msie" ? (txtheight + 6) / 2 : (txtheight / 2) + 6;
                    this.rightTxt.setAttribute('y', txty);
                    this.rightTxt.setAttribute('x', 10);
                    this.leftd = "M 0 0 L 0 " + (txtheight + 6) + " L " + (txtwidth - 6) + " " + (txtheight + 6) + " L " + (txtwidth - 6) + " 6 L " + txtwidth + " 0 Z";
                    this.rightd = "M 0 0 L " + txtwidth + " 0 L " + txtwidth + " " + (txtheight + 6) + " L 6 " + (txtheight + 6) + " L 6 6 Z";
                    if (rightValue + txtwidth <= this.newWidth) {
                        this.rightTooltip.firstChild.setAttribute('d', this.rightd);
                        this.renderer._setAttr($(this.rightTooltip), {'transform': 'translate(' + (rightValue) + ',' + cPosition + ')'});
                    }
                    else if (rightValue + txtwidth >= this.newWidth && rightValue - txtwidth > this.centerSlider.getCTM().e) {
                        this.renderer._setAttr($(this.rightTooltip), {'transform': 'translate(' + (rightValue - txtwidth) + ',' + cPosition + ')'});
                        this.rightTooltip.firstChild.setAttribute('d', this.leftd);
                        this.rightTxt.setAttribute('x', 5);
                    }
                    else if (this.leftTooltip.getCTM().f < 30) {
                        this.renderer._setAttr($(this.rightTooltip), { 'transform': 'translate(' + (rightValue - txtwidth) + ',' + (cPosition + 30) + ')'});
                        this.rightTooltip.firstChild.setAttribute('d', this.leftd);
                    }
                    else {
                        this.renderer._setAttr($(this.rightTooltip), { 'transform': 'translate(' + (rightValue - txtwidth) + ',' + cPosition + ')'});
                        this.rightTooltip.firstChild.setAttribute('d', this.leftd);
                    }
                    if (rightValue < this.leftTooltip.getCTM().e + txtwidth && this.leftTooltip.getCTM().f < 30) {
                        this.renderer._setAttr($(this.rightTooltip), { 'transform': 'translate(' + (rightValue) + ',' + (cPosition + 30) + ')'});
                    }
                    if (this.leftTooltip.getCTM().f >= 30 && rightValue > this.leftTooltip.getCTM().e + txtwidth && this.rightTooltip.getCTM().e > this.leftTooltip.getCTM().e + txtwidth) {
                        this.renderer._setAttr($(this.leftTooltip), { 'transform': 'translate(' + this.leftTooltip.getCTM().e + ',' + (cPosition) + ')' });
                        this.rightTxt.setAttribute('x', 5);
                    }
                }
                    
                this.renderer._setAttr($(this.rightUnArea), {'width': this.newWidth - rightValue-this.padding-2, 'transform': 'translate(' + parseFloat(rightValue + 2) + ',' + this.sliderPosition + ')' });
                this.renderer._setAttr($(this.rightSlider), { 'transform': 'translate(' + rightValue + ',' + this.sliderPosition + ')'});
                if (this.rightCircle != undefined) {
                    if (this.svgSupport)
                        this.renderer._setAttr($(this.rightCircle), { 'cx': rightValue });
                    else
                        this.renderer._setAttr($(this.rightCircle), { 'transform': 'translate(' + parseFloat(rightValue-10) + ',' + parseFloat(this.sliderPosition + (this.sliderHeight / 2)) + ')' }); //this.sliderPosition + (this.sliderHeight / 2)
                }
                this.centerSliderWidth = parseFloat(this.rightSlider.getBoundingClientRect().left) - parseFloat(this.leftSlider.getBoundingClientRect().left);
                this.renderer._setAttr($(this.centerSlider), { 'width': this.centerSliderWidth});

              //  this.model.zoomFactor = (rightValue - this.leftSlider.getBoundingClientRect().left) / (this.newWidth - this.padding * 2);
                this.model.zoomFactor = (this.rightSlider.getBoundingClientRect().left + parseFloat(this.renderer._getAttrVal($(this.rightSlider), 'width')) - this.leftSlider.getBoundingClientRect().left) / (this.newWidth - this.padding * 2);
            }
            else if (centerValue != null) {
                var rectwidth = this.renderer._getAttrVal($(this.leftSlider),'width');
                var leftPosX = centerValue;
               
                var rightPosX = centerValue + parseFloat(this.renderer._getAttrVal($(this.centerSlider),'width'));
                var startDateTime = new Date(this.model.rangeSettings.start);
                rtlValue = this.model.enableRTL ? (this.newWidth - leftPosX) : leftPosX;
                if(type=="datetime")
                    doubledate = (rtlValue / this.eachInterval) + this.startDateTime.getTime() - (this.padding / this.eachInterval);
                else
                    doubledate = (rtlValue / this.eachInterval) + this.startValue - (this.padding / this.eachInterval);
                this.model.selectedRangeSettings.start = new Date(doubledate);
                if (leftPosX >= this.padding && rightPosX <= this.newWidth - this.padding) {
                    if(this.svgSupport)
                        this.renderer._setAttr($(this.leftSlider), { 'transform': 'translate(' + leftPosX + ',' + 0 + ')' });
                    else
                        this.renderer._setAttr($(this.leftSlider), { 'transform': 'translate(' + leftPosX + ',' + parseFloat(this.sliderPosition) + ')' });
                    this.leftSliderPosition = leftPosX;
                    if (this.leftCircle != undefined) {
                        if (this.svgSupport)
                            this.renderer._setAttr($(this.leftCircle), { 'cx': leftPosX });
                        else
                            this.renderer._setAttr($(this.leftCircle), { 'transform': 'translate(' + parseFloat(leftPosX - 10) + ',' + parseFloat(this.sliderPosition + (this.sliderHeight / 2)) + ')' });                        
                    }
                    if (this.model.tooltipSettings.visible && this.svgSupport) {
                        this.leftTooltip.setAttribute('opacity', this.setopacity);
                        if(type=="datetime")
                            this.leftTxt.textContent = Globalize.format(new Date(doubledate), this.model.tooltipSettings.labelFormat);
                        else
                            this.leftTxt.textContent = Globalize.format(doubledate, this.model.tooltipSettings.labelFormat);
                        var txtwidth = this.leftTooltip.lastChild.getBBox().width + 15;
                        var txtheight = this.leftTooltip.lastChild.getBBox().height;
                        var txty = this.brow != "msie" ? (txtheight + 6) / 2 : (txtheight / 2) + 6;
                        this.leftTxt.setAttribute('y', txty);
                        this.rightTxt.setAttribute('y', txty);
                        this.leftd = "M 0 0 L 0 " + (txtheight + 6) + " L " + (txtwidth - 6) + " " + (txtheight + 6) + " L " + (txtwidth - 6) + " 6 L " + txtwidth + " 0 Z";
                        this.rightd = "M 0 0 L " + txtwidth + " 0 L " + txtwidth + " " + (txtheight + 6) + " L 6 " + (txtheight + 6) + " L 6 6 Z";
                        if (leftPosX - txtwidth >= 0) {
                            this.leftTooltip.firstChild.setAttribute('d', this.leftd);
                            this.renderer._setAttr($(this.leftTooltip), { 'transform': 'translate(' + (leftPosX - txtwidth) + ',' + cPosition + ')' });
                            this.leftTxt.setAttribute('x', 5);
                        }
                        else {
                            this.renderer._setAttr($(this.leftTooltip), { 'transform': 'translate(' + (leftPosX) + ',' + cPosition + ')'});
                            this.leftTooltip.firstChild.setAttribute('d', this.rightd);
                            this.leftTxt.setAttribute('x', 10);
                            if (this.leftSliderPosition + txtwidth > this.rightSlider.getCTM().e) {
                                this.renderer._setAttr($(this.leftTooltip), { 'transform': 'translate(' + (leftPosX) + ',' + (cPosition + 30) + ')'});
                            }

                        }
                    }
                    rtlValue = this.model.enableRTL ? (this.newWidth - rightPosX) : rightPosX;
                    var doubledate = (rtlValue / this.eachInterval) + this.startDateTime.getTime() - (this.padding / this.eachInterval);
                    this.model.selectedRangeSettings.end = new Date(doubledate);
                    this.renderer._setAttr($(this.rightSlider), { 'transform': 'translate(' + rightPosX + ',' + this.sliderPosition + ')'});
                    this.rightSliderPosition = rightPosX;
                    if (this.rightCircle != undefined) {
                        if (this.svgSupport)
                            this.renderer._setAttr($(this.rightCircle), { 'cx': rightPosX });
                        else
                            this.renderer._setAttr($(this.rightCircle), { 'transform': 'translate(' + parseFloat(rightPosX - 10) + ',' + parseFloat(this.sliderPosition + (this.sliderHeight / 2)) + ')' });                        
                    }
                    if (this.model.tooltipSettings.visible && this.svgSupport) {
                        this.rightTooltip.setAttribute('opacity', this.setopacity);
                        if(type=="datetime")
                            this.rightTxt.textContent = Globalize.format(new Date(doubledate), this.model.tooltipSettings.labelFormat);
                        else
                            this.rightTxt.textContent = Globalize.format(doubledate, this.model.tooltipSettings.labelFormat);
                        var txtwidth = this.rightTooltip.lastChild.getBBox().width + 15;
                        var txtheight = this.rightTooltip.lastChild.getBBox().height;
                        this.leftd = "M 0 0 L 0 " + (txtheight + 6) + " L " + (txtwidth - 6) + " " + (txtheight + 6) + " L " + (txtwidth - 6) + " 6 L " + txtwidth + " 0 Z";
                        this.rightd = "M 0 0 L " + txtwidth + " 0 L " + txtwidth + " " + (txtheight + 6) + " L 6 " + (txtheight + 6) + " L 6 6 Z";
                        if (rightPosX + txtwidth <= this.newWidth) {
                            this.rightTooltip.firstChild.setAttribute('d', this.rightd);
                            this.renderer._setAttr($(this.rightTooltip), { 'transform': 'translate(' + (rightPosX) + ',' + cPosition + ')' });
                            this.rightTxt.setAttribute('x', 10);
                        }
                        else {
                            this.renderer._setAttr($(this.rightTooltip), { 'transform': 'translate(' + (rightPosX - txtwidth) + ',' + cPosition + ')'});
                            this.rightTooltip.firstChild.setAttribute('d', this.leftd);
                            this.rightTxt.setAttribute('x', 5);
                            if (this.rightTooltip.getBoundingClientRect().left < this.leftSlider.getBoundingClientRect().left) {
                                this.renderer._setAttr($(this.rightTooltip), { 'transform': 'translate(' + (rightPosX - txtwidth) + ',' + (cPosition + 30) + ')' });
                            }
                        }
                    }
                    this.renderer._setAttr($(this.leftUnArea), { 'width': leftPosX - this.padding,'transform': 'translate(' + this.padding + ',' + this.sliderPosition + ')'});
                    this.renderer._setAttr($(this.rightUnArea), { 'transform': 'translate(' + parseFloat(rightPosX + 2) + ',' + this.sliderPosition + ')','width': this.newWidth - rightPosX-this.padding-2});

                    this.model.zoomPosition = (this.leftSlider.getBoundingClientRect().left - this.padding) / (this.newWidth - this.padding * 2);

                    this.renderer._setAttr($(this.centerSlider), { 'transform': 'translate(' + centerValue + ',' + this.sliderPosition + ')' });
                    this.model.zoomFactor = (this.rightSlider.getBoundingClientRect().left + parseFloat(this.renderer._getAttrVal($(this.rightSlider), 'width')) - this.leftSlider.getBoundingClientRect().left) / (this.newWidth - this.padding * 2);
                }
               
            }

            if (!this.model.enableDeferredUpdate && this.leftSlider.getBoundingClientRect().left<this.rightSlider.getBoundingClientRect().left) {
                this._calculateSelectedData();
                if (this.zoomp != this.model.zoomPosition || this.zoomf != this.model.zoomFactor) {
                    this._trigger("rangeChanged", this.model);
                    this.zoomp = this.model.zoomPosition;
                    this.zoomf = this.model.zoomFactor;
                }
            }
            
        },

        _calculateSelectedData: function () {
            var j = [];
            var count = 0;
            if(this.model.dataSource!="")
                for (var i = 0; i < this.model.dataSource.length; i++) {
                    if (Date.parse(this.model.selectedRangeSettings.start) <= Date.parse(this.model.dataSource[i][this.model.xName]) && Date.parse(this.model.selectedRangeSettings.end) >= Date.parse(this.model.dataSource[i][this.model.xName])) {
                        j[count] = this.model.dataSource[i];
                        count++;
                    }
                }
            else if (this.model.series!="" && this.model.series[0].dataSource!="" && this.model.series[0].dataSource != "") {
                for (var i = 0; i < this.model.series[0].dataSource.length; i++) {
                    if (Date.parse(this.model.selectedRangeSettings.start) <= Date.parse(this.model.series[0].dataSource[i][this.model.series[0].xName]) && Date.parse(this.model.selectedRangeSettings.end) >= Date.parse(this.model.series[0].dataSource[i][this.model.series[0].xName])) {
                        j[count] = this.model.series[0].dataSource[i];
                        count++;
                    }
                }
            }
            this.model.selectedData = j;
        },

        calculateInterval: function (higherLevel, lowerLevel) {
            if (higherLevel.visible === true && this.model.valueType=="datetime") {
                if (higherLevel.intervalType === "years")
                    this.setYearInterval(this, "higher");
                else if (higherLevel.intervalType === "quarters")
                    this.setQuarterInterval(this, "higher", 0);
                else if (higherLevel.intervalType === "months")
                    this.setMonthInterval(this, "higher", 0);
                else if (higherLevel.intervalType == "weeks")
                    this.setWeekInterval(this, "higher", 0);
                else if (higherLevel.intervalType === "days")
                    this.setDayInterval(this, "higher",0);
                else if (higherLevel.intervalType === "hours")
                    this.setHourInterval(this, "higher",0);
            }
            if (lowerLevel.visible === true && this.model.valueType=="datetime") {

                if (lowerLevel.intervalType === "years")
                    this.setYearInterval(this, "lower");
                else if (lowerLevel.intervalType === "quarters")
                    this.setQuarterInterval(this, "lower", 0);
                else if (lowerLevel.intervalType === "months")
                    this.setMonthInterval(this, "lower", 0);
                else if(lowerLevel.intervalType=="weeks")
                    this.setWeekInterval(this, "lower", 0);
                else if (lowerLevel.intervalType === "days")
                    this.setDayInterval(this, "lower",0);
                else if (lowerLevel.intervalType === "hours")
                    this.setHourInterval(this, "lower",0);
            }

            if (lowerLevel.visible === true && this.model.valueType == "numeric") {
                this.setInterval(this);                
            }


        },

        setInterval: function (naviobj) {
            var currentValue, lastValue;
            var delta = this.endValue - this.startValue;
            var rangePadding = naviobj.model.rangePadding;
            var start = this.startValue;
            var numericInterval = this.calculateNumericInterval(naviobj, delta);
            if (rangePadding == "additional") {
                this.endValue = this.endValue + numericInterval;
                this.startValue = this.startValue - numericInterval;
                delta = this.endValue - this.startValue;
              //  numericInterval = this.calculateNumericInterval(naviobj, delta);
            } else if (rangePadding == "normal") {
                var minimum = 0, remaining;
                if (start < 0) {
                    start = 0;
                    minimum = this.startValue + (this.startValue / 20);

                    remaining = numericInterval + (minimum % numericInterval);

                    if ((0.365 * numericInterval) >= remaining) {
                        minimum -= numericInterval;
                    }

                    if (minimum % numericInterval < 0) {
                        minimum = (minimum - numericInterval) - (minimum % numericInterval);
                    }
                } else {
                    minimum = start < ((5.0 / 6.0) * this.endValue)
                        ? 0
                        : (start - (this.endValue - start) / 2);
                    if (minimum % numericInterval > 0) {
                        minimum -= (minimum % numericInterval);
                    }
                }
                var maximum = (this.endValue + (this.endValue - start) / 20);

                remaining = numericInterval - (maximum % numericInterval);

                if ((0.365 * numericInterval) >= remaining) {
                    maximum += numericInterval;
                }

                if (maximum % numericInterval > 0) {
                    maximum = (maximum + numericInterval) - (maximum % numericInterval);
                }
                numericInterval = this.calculateNumericInterval(naviobj, maximum - minimum);
                this.startValue = minimum;
                this.endValue = maximum;

            } else if (rangePadding == "round") {
                this.startValue = Math.floor((this.startValue / numericInterval) * numericInterval);
                this.endValue = Math.ceil((this.endValue / numericInterval) * numericInterval);
            }

            currentValue = naviobj.startValue;
            count = 0;
            while (currentValue <= naviobj.endValue) {
                this._insertNumericText(naviobj,currentValue);
                count++;
                currentValue = currentValue + numericInterval;
            }
            this.insertLabels(naviobj, "lower");

        },

        calculateNumericInterval: function (naviobj,delta) {
            var desiredIntervalsCount = this.GetDesiredIntervalsCount(naviobj.newWidth);
            var niceInterval = delta / desiredIntervalsCount;
            var minInterval = Math.pow(10, Math.floor(ej.EjSvgRender.utils._logBase(niceInterval, 10)));
            var intervalDivs = [10, 5, 2, 1];

            for (var i = 0; i < intervalDivs.length; i++) {
                var currentInterval = minInterval * intervalDivs[i];
                if (desiredIntervalsCount < (delta / currentInterval)) {
                    return niceInterval;
                }

                niceInterval = currentInterval;
            }

            return niceInterval;
        },

        GetDesiredIntervalsCount: function (size) {
           // if (ej.util.isNullOrUndefined(axis.desiredIntervals)) {
                var desiredIntervalsCount = 0.8* 2;
                desiredIntervalsCount = Math.max((size * (desiredIntervalsCount / 100)), 1);
                return desiredIntervalsCount;
            //} else {
            //    return axis.desiredIntervals;
          //  }
        },

        setHourInterval: function (naviobj, position,level) {

            naviobj._higherTextNode = [];
            naviobj._higherTotalValues = [];
            naviobj._lowerTextNode = [];
            naviobj._lowerTotalValues = [];
            if (position === "higher")
                $("#higherLevel").children().empty();
            else
                $("#lowerLevel").children().empty();

            Date.prototype.addHours = function (hours) {
                var dat = new Date(this.valueOf())
                if (dat.getMilliseconds() !== 0) {
                    dat.setMilliseconds(dat.getMilliseconds() + (1000 - dat.getMilliseconds()));
                }
                if (dat.getSeconds() !== 0) {
                    dat.setSeconds(dat.getSeconds() + (60 - dat.getSeconds()));
                }
                if (dat.getMinutes() !== 0) {                    
                    dat.setMinutes(dat.getMinutes() + (60 - dat.getMinutes()));
                }
                else
                    dat.setHours(dat.getHours() + hours);
                return dat;
            }

            var hourArray = [];
            var currentDate = naviobj.startDateTime;
            var count = 0;
            var txtBlockWidth = 0;
            var bwidth = 0;
            switch (level) {
                case 0:
                    while (currentDate <= naviobj.endDateTime) {
                        bwidth = this._insertText(naviobj, position, "hhtt", currentDate, count, bwidth, false);
                        txtBlockWidth += bwidth;
                        count++;
                        currentDate = currentDate.addHours(1);
                    }
                    if (txtBlockWidth >= naviobj.newWidth)
                        naviobj.setHourInterval(naviobj, position, 1);
                    else
                        this.insertLabels(naviobj, position);
                    break;
                case 1:
                    while (currentDate <= naviobj.endDateTime) {
                        bwidth = this._insertText(naviobj, position, "hht", currentDate, count, bwidth, false);
                        txtBlockWidth += bwidth;
                        count++;                        
                        currentDate = currentDate.addHours(1);
                    }
                    this.insertLabels(naviobj, position);
                    break;
            }
        },

        // Empty the labelbars
        _emptyLabelBars: function (naviobj, position) {
            naviobj._higherTextNode = [];
            naviobj._higherTotalValues = [];
            naviobj._lowerTextNode = [];
            naviobj._lowerTotalValues = [];
            if (position === "higher")
                $("#higherLevel").children().empty();
            else
                $("#lowerLevel").children().empty();
        },

        //to insert week text as there is no globalized format for week
        _insertWeekText: function (naviobj, position, textValue, currentDate, count, bwidth) {
            var hiLabelFont = naviobj.model.labelSettings.higherLevel.style.font;
            var loLabelFont = naviobj.model.labelSettings.lowerLevel.style.font;
            if (position === "higher") {
                if (count == 0)
                    naviobj._higherTotalValues[count] = 0;
                else
                    naviobj._higherTotalValues[count] = currentDate.getTime() - naviobj.startDateTime.getTime();
                var textOptions = {
                    'id': this._rootId + '_higLabelBarText' + '_' + count,
                    'x': 0,
                    'y': 0,
                    'text-anchor': 'start',
                    'dominant-baseline': 'middle',
                    "font-size": hiLabelFont.size,
                    "font-family": hiLabelFont.family,
                    "font-style": hiLabelFont.style,
                    "font-weight": hiLabelFont.weight,
                    "fill": hiLabelFont.color
                };
                naviobj.renderer.drawText(textOptions, textValue, naviobj.higherLevel);
                naviobj._higherTextNode[count] = naviobj.higherLevel.childNodes[count];
                var labelfont = { size: naviobj.model.labelSettings.higherLevel.style.font.size, fontStyle: naviobj.model.labelSettings.higherLevel.style.font.style, fontFamily: naviobj.model.labelSettings.higherLevel.style.font.family };
                if (this.svgSupport)
                    var textOffset = ej.EjSvgRender.utils._measureText(naviobj.higherLevel.childNodes[count].textContent, null, labelfont);
                else
                    var textOffset = ej.EjSvgRender.utils._measureText(naviobj.higherLevel.childNodes[count].innerHTML, null, labelfont);
                bwidth = Math.max(bwidth, textOffset.width);
            }
            else {
                if (count == 0)
                    naviobj._lowerTotalValues[count] = 0;
                else
                    naviobj._lowerTotalValues[count] = currentDate.getTime() - naviobj.startDateTime.getTime();
                var textOptions = {
                    'id': this._rootId + '_LabelBarText' + '_' + count,
                    'x': 0,
                    'y': 0,
                    'text-anchor': 'start',
                    'dominant-baseline': 'middle',
                    "font-size": loLabelFont.size,
                    "font-family": loLabelFont.family,
                    "font-style": loLabelFont.style,
                    "font-weight": loLabelFont.weight,
                    "fill": loLabelFont.color
                };

                naviobj.renderer.drawText(textOptions, textValue, naviobj.lowerLevel);
                naviobj._lowerTextNode[count] = naviobj.lowerLevel.childNodes[count];
                var labelfont = { size: naviobj.model.labelSettings.lowerLevel.style.font.size, fontStyle: naviobj.model.labelSettings.lowerLevel.style.font.style, fontFamily: naviobj.model.labelSettings.lowerLevel.style.font.family };
                if (this.svgSupport)
                    var textOffset = ej.EjSvgRender.utils._measureText(naviobj.lowerLevel.childNodes[count].textContent, null, labelfont);
                else
                    var textOffset = ej.EjSvgRender.utils._measureText(naviobj.lowerLevel.childNodes[count].innerHTML, null, labelfont);
                bwidth = Math.max(bwidth, textOffset.width);
            }

            return bwidth;
        },

        //To calculate Week Interval
        setWeekInterval: function (naviobj, position, level) {

            this._emptyLabelBars(naviobj, position);
            //get week number of a year
            Date.prototype.getWeek = function () {
                var date = new Date(this.getTime());
                date.setHours(0, 0, 0, 0);
                // Thursday in current week decides the year.
                date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
                // January 4 is always in week 1.
                var week1 = new Date(date.getFullYear(), 0, 4);
                // Adjust to Thursday in week 1 and count number of weeks from date to week1.
                return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                                      - 3 + (week1.getDay() + 6) % 7) / 7);
            }

            Date.prototype.dayOfWeek = function () {
                var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                return days[this.getDay()];
            }

            Date.prototype.addDays = function (noOfDays) {
                var dat = new Date(this.valueOf());
                dat = new Date(dat.getFullYear(), dat.getMonth(), dat.getDate() + noOfDays);
                return dat;
            }

            Date.prototype.subDays = function (noOfDays) {
                var dat = new Date(this.valueOf());
                dat = new Date(dat.getFullYear(), dat.getMonth(), dat.getDate() - noOfDays);
                return dat;
            }

            var currentDate = naviobj.startDateTime;
            var count = 0;
            var txtBlockWidth = 0;
            var bwidth = 0;
			var culture = this.model.locale;
			var locale = ej.datavisualization.RangeNavigator.locale[culture] ? ej.datavisualization.RangeNavigator.locale[culture] : ej.datavisualization.RangeNavigator.locale["en-US"];

			
			    while (currentDate.dayOfWeek() != "Monday") {
			        currentDate = currentDate.subDays(1);
			    }
            switch (level) {
                case 0:
                    while (currentDate <= naviobj.endDateTime) {
                        bwidth = this._insertWeekText(naviobj, position, locale.intervals['week'].longWeeks + " " + currentDate.getWeek() + Globalize.format(currentDate, " MMMM, yyyy"), currentDate, count, bwidth);
                        txtBlockWidth += bwidth;
                        count++;
                        currentDate = currentDate.addDays(7);
                    }
                    if (txtBlockWidth >= naviobj.newWidth)
                        naviobj.setWeekInterval(naviobj, position, 1);
                    else
                        this.insertLabels(naviobj, position);
                    break;
                case 1:
                    while (currentDate <= naviobj.endDateTime) {
                        bwidth = this._insertWeekText(naviobj, position, locale.intervals['week'].longWeeks + " " + currentDate.getWeek() + Globalize.format(currentDate, " MMM, yy"), currentDate, count, bwidth);
                        txtBlockWidth += bwidth;
                        count++;
                        currentDate = currentDate.addDays(7);
                    }
                    if (txtBlockWidth >= naviobj.newWidth)
                        naviobj.setWeekInterval(naviobj, position, 2);
                    else
                        this.insertLabels(naviobj, position);
                    break;
                case 2:
                    while (currentDate <= naviobj.endDateTime) {
                        bwidth = this._insertWeekText(naviobj, position, locale.intervals['week'].longWeeks + " " + currentDate.getWeek(), currentDate, count, bwidth);
                        txtBlockWidth += bwidth;
                        count++;
                        currentDate = currentDate.addDays(7);
                    }
                    if (txtBlockWidth >= naviobj.newWidth)
                        naviobj.setWeekInterval(naviobj, position, 3);
                    else
                        this.insertLabels(naviobj, position);
                    break;
                case 3:
                    while (currentDate <= naviobj.endDateTime) {
                        bwidth = this._insertWeekText(naviobj, position, locale.intervals['week'].shortWeeks + " " + currentDate.getWeek(), currentDate, count, bwidth);
                        txtBlockWidth += bwidth;
                        count++;
                        currentDate = currentDate.addDays(7);
                    }
                        this.insertLabels(naviobj, position);
                    break;
            }
        },
       
        setDayInterval: function (naviobj, position,level) {
            naviobj._higherTextNode = [];
            naviobj._higherTotalValues = [];
            naviobj._lowerTextNode = [];
            naviobj._lowerTotalValues = []; 
            if (position === "higher")
                $("#higherLevel").children().empty();
            else
                $("#lowerLevel").children().empty();

            Date.prototype.addDays = function () {
                var dat = new Date(this.valueOf());
                dat = new Date(dat.getFullYear(), dat.getMonth(), dat.getDate() + 1);
                return dat;
            }

            var hourArray = [];
            var currentDate = naviobj.startDateTime;
            var count = 0;
            var txtBlockWidth = 0;
            var bwidth = 0;
            var bBox;
            switch (level) {
                case 0:
                    while (currentDate <= naviobj.endDateTime) {
                        bwidth= this._insertText(naviobj, position, "dddd, MMMM d, yyyy", currentDate, count, bwidth, false);
                        txtBlockWidth += bwidth;
                        count++;                       
                        currentDate = currentDate.addDays();
                    }
                    if (txtBlockWidth >= naviobj.newWidth)
                        naviobj.setDayInterval(naviobj, position, 1);
                    else
                        this.insertLabels(naviobj, position);
                    break;
                case 1:
                    while (currentDate <= naviobj.endDateTime) {
                        bwidth = this._insertText(naviobj, position, "ddd, MMM d, yy", currentDate, count, bwidth, false);
                        txtBlockWidth += bwidth;
                        count++;
                        currentDate = currentDate.addDays();                        
                    }
                    if (txtBlockWidth >= naviobj.newWidth)
                        naviobj.setDayInterval(naviobj, position, 2);
                    else
                        this.insertLabels(naviobj, position);
                    break;
                case 2:
                    while (currentDate <= naviobj.endDateTime) {
                        bwidth = this._insertText(naviobj, position, "dddd, d", currentDate, count, bwidth, false);
                        txtBlockWidth += bwidth;
                        count++;
                        currentDate = currentDate.addDays();                        
                    }
                    if (txtBlockWidth >= naviobj.newWidth)
                        naviobj.setDayInterval(naviobj, position, 3);
                    else
                        this.insertLabels(naviobj, position);
                    break;
                case 3:
                    while (currentDate <= naviobj.endDateTime) {
                        bwidth = this._insertText(naviobj, position, "dd", currentDate, count, bwidth, false);
                        txtBlockWidth += bwidth;
                        count++;
                        currentDate = currentDate.addDays();                       
                    }
                    this.insertLabels(naviobj, position);
                    break;
                default:
                    break;

            }

        },

        setMonthInterval: function (naviobj, position, level) {
            naviobj._higherTextNode = [];
            naviobj._higherTotalValues = [];
            naviobj._lowerTextNode = [];
            naviobj._lowerTotalValues = [];
            if (position === "higher")
                $("#higherLevel").children().empty();
            else
                $("#lowerLevel").children().empty();           

            var currentDate = naviobj.startDateTime;            

            var count = 0;
            var date = new Date(naviobj.startDateTime);
            var txtBlockWidth = 0;
            var bwidth = 0;
            var bBox;

            switch (level) {
                case 0:
                    while (currentDate <= naviobj.endDateTime) {
                        bwidth = this._insertText(naviobj, position, "MMMM, yyyy", currentDate, count, bwidth,false);
                        txtBlockWidth += bwidth;
                        count++;
                        currentDate = currentDate.addMonths();
                    }
                    if (txtBlockWidth >= naviobj.newWidth)
                        naviobj.setMonthInterval(naviobj, position, 1);
                    else
                        this.insertLabels(naviobj, position);
                    break;
                case 1:
                    while (currentDate <= naviobj.endDateTime) {
                        bwidth = this._insertText(naviobj, position, "MMMM", currentDate, count, bwidth,false);
                        txtBlockWidth += bwidth;
                        count++;
                        currentDate = currentDate.addMonths();
                    }
                    if (txtBlockWidth >= naviobj.newWidth)
                        naviobj.setMonthInterval(naviobj, position, 2);
                    else
                        this.insertLabels(naviobj, position);
                    break;
                case 2:
                    while (currentDate <= naviobj.endDateTime) {
                        bwidth = this._insertText(naviobj, position, "MMM", currentDate, count, bwidth,false);
                        txtBlockWidth += bwidth;                        
                        count++;
                        currentDate = currentDate.addMonths();
                    }
                    if (txtBlockWidth >= naviobj.newWidth)
                        naviobj.setMonthInterval(naviobj, position, 3);
                    else
                        this.insertLabels(naviobj, position);
                    break;
                case 3:
                    while (currentDate <= naviobj.endDateTime) {
                        bwidth = this._insertText(naviobj, position, "MMM", currentDate, count, bwidth, true);
                        txtBlockWidth += bwidth;
                        count++;
                        currentDate = currentDate.addMonths();
                    }
                    this.insertLabels(naviobj, position);
                    break;
                default:
                    break;

            }

        },

        _quarter: function (naviobj, position, quarterValue, yearString, date, txtBlockWidth, count) {
            
            for (var i = naviobj.startYear; i <= naviobj.endYear; i++) {
                var stringDate = yearString != null ? Globalize.format(date, yearString) : "";
                if (i === naviobj.startYear) {
                    for (var j = naviobj.startMonth; j <= 11; j++) {
                        if (position == "higher") {
                            var textOptions = {
                                'id': this._rootId + '_higLabelBarText' + '_' + count,
                                'x': 0,
                                'y': 0,
                                'text-anchor': 'start',
                                'dominant-baseline': 'middle',
                                "font-size": naviobj.model.labelSettings.higherLevel.style.font.size,
                                "font-family": naviobj.model.labelSettings.higherLevel.style.font.family,
                                "font-style": naviobj.model.labelSettings.higherLevel.style.font.style,
                                "font-weight": naviobj.model.labelSettings.higherLevel.style.font.weight,
                                "fill":naviobj.model.labelSettings.higherLevel.style.font.color
                            };
                        }
                        else {
                            var textOptions = {
                                'id': this._rootId + '_LabelBarText' + '_' + count,
                                'x': 0,
                                'y': 0,
                                'text-anchor': 'start',
                                'dominant-baseline': 'middle',
                                "font-size": naviobj.model.labelSettings.lowerLevel.style.font.size,
                                "font-family": naviobj.model.labelSettings.lowerLevel.style.font.family,
                                "font-style": naviobj.model.labelSettings.lowerLevel.style.font.style,
                                "font-weight": naviobj.model.labelSettings.lowerLevel.style.font.weight,
                                "fill":naviobj.model.labelSettings.lowerLevel.style.font.color
                            };
                        }
                        if (j >= 0 && j <= 2) {
                            if(position=="higher")
                                naviobj.renderer.drawText(textOptions, quarterValue + " 1 " + stringDate, naviobj.higherLevel);
                            else
                                naviobj.renderer.drawText(textOptions, quarterValue + " 1 " + stringDate, naviobj.lowerLevel);
                            date = new Date(date.setMonth(3));
                            k = 2;
                        }
                        else if (j >= 3 && j <= 5) {
                            if (position == "higher")
                                naviobj.renderer.drawText(textOptions, quarterValue + " 2 " + stringDate, naviobj.higherLevel);
                            else
                                naviobj.renderer.drawText(textOptions, quarterValue + " 2 " + stringDate, naviobj.lowerLevel);
                            date = new Date(date.setMonth(6));
                            k = 5;

                        }
                        else if (j >= 6 && j <= 8) {
                            if (position == "higher")
                                naviobj.renderer.drawText(textOptions, quarterValue + " 3 " + stringDate, naviobj.higherLevel);
                            else
                                naviobj.renderer.drawText(textOptions, quarterValue + " 3 " + stringDate, naviobj.lowerLevel);
                            date = new Date(date.setMonth(9));
                            k = 8;

                        }
                        else if (j >= 9 && j <= 11) {
                            if (position == "higher")
                                naviobj.renderer.drawText(textOptions, quarterValue + " 4 " + stringDate, naviobj.higherLevel);
                            else
                                naviobj.renderer.drawText(textOptions, quarterValue + " 4 " + stringDate, naviobj.lowerLevel);
                            date = new Date(date.setMonth(12));
                            k = 11;

                        }


                        if (position === "lower") {
                            if (j === naviobj.startMonth)
                                naviobj._lowerTotalValues[count] = naviobj.startDateTime.getTime() - naviobj.startDateTime.getTime();
                            else
                                naviobj._lowerTotalValues[count] = new Date(naviobj.startYear + "/" + parseInt(j + 1) + "/1").getTime() - naviobj.startDateTime.getTime();
                            j = k;
                            naviobj._lowerTextNode[count] = naviobj.lowerLevel.childNodes[count];
                            var labelfont = { size: naviobj.model.labelSettings.lowerLevel.style.font.size, fontStyle: naviobj.model.labelSettings.lowerLevel.style.font.style, fontFamily: naviobj.model.labelSettings.lowerLevel.style.font.family };
                            var textOffset = ej.EjSvgRender.utils._measureText(naviobj.lowerLevel.childNodes[count].textContent, null, labelfont);
                            txtBlockWidth += textOffset.width;
                        }
                        else {
                            if (j === naviobj.startMonth)
                                naviobj._higherTotalValues[count] = naviobj.startDateTime.getTime() - naviobj.startDateTime.getTime();
                            else
                                naviobj._higherTotalValues[count] = new Date(naviobj.startYear + "/" + parseInt(j + 1) + "/1").getTime() - naviobj.startDateTime.getTime();
                            j = k;
                            naviobj._higherTextNode[count] = naviobj.higherLevel.childNodes[count];
                            var labelfont = { size: naviobj.model.labelSettings.higherLevel.style.font.size, fontStyle: naviobj.model.labelSettings.higherLevel.style.font.style, fontFamily: naviobj.model.labelSettings.higherLevel.style.font.family };
                            var textOffset = ej.EjSvgRender.utils._measureText(naviobj.higherLevel.childNodes[count].textContent, null, labelfont);
                            txtBlockWidth += textOffset.width;
                        }
                        count++;
                    }
                }
                else if (i === naviobj.endYear) {
                    for (var j = 0; j <= naviobj.endMonth; j++) {
                        if (position == "higher") {
                            var textOptions = {
                                'id': this._rootId + '_higLabelBarText' + '_' + count,
                                'x': 0,
                                'y': 0,
                                'text-anchor': 'start',
                                'dominant-baseline': 'middle',
                                "font-size": naviobj.model.labelSettings.higherLevel.style.font.size,
                                "font-family": naviobj.model.labelSettings.higherLevel.style.font.family,
                                "font-style": naviobj.model.labelSettings.higherLevel.style.font.style,
                                "font-weight": naviobj.model.labelSettings.higherLevel.style.font.weight
                            };
                        }
                        else {
                            var textOptions = {
                                'id': this._rootId + '_LabelBarText' + '_' + count,
                                'x': 0,
                                'y': 0,
                                'text-anchor': 'start',
                                'dominant-baseline': 'middle',
                                "font-size": naviobj.model.labelSettings.lowerLevel.style.font.size,
                                "font-family": naviobj.model.labelSettings.lowerLevel.style.font.family,
                                "font-style": naviobj.model.labelSettings.lowerLevel.style.font.style,
                                "font-weight": naviobj.model.labelSettings.lowerLevel.style.font.weight
                            };
                        }
                        if (j >= 0 && j <= 2) {
                            if (position == "higher")
                                naviobj.renderer.drawText(textOptions, quarterValue + " 1 " + stringDate, naviobj.higherLevel);
                            else
                                naviobj.renderer.drawText(textOptions, quarterValue + " 1 " + stringDate, naviobj.lowerLevel);
                            date = new Date(date.setMonth(3));
                            k = 2;
                        }
                        else if (j >= 3 && j <= 5) {
                            if (position == "higher")
                                naviobj.renderer.drawText(textOptions, quarterValue + " 2 " + stringDate, naviobj.higherLevel);
                            else
                                naviobj.renderer.drawText(textOptions, quarterValue + " 2 " + stringDate, naviobj.lowerLevel);
                            date = new Date(date.setMonth(6));
                            k = 5;

                        }
                        else if (j >= 6 && j <= 8) {
                            if (position == "higher")
                                naviobj.renderer.drawText(textOptions, quarterValue + " 3 " + stringDate, naviobj.higherLevel);
                            else
                                naviobj.renderer.drawText(textOptions, quarterValue + " 3 " + stringDate, naviobj.lowerLevel);
                            date = new Date(date.setMonth(9));
                            k = 8;

                        }
                        else if (j >= 9 && j <= 11) {
                            if (position == "higher")
                                naviobj.renderer.drawText(textOptions, quarterValue + " 4 " + stringDate, naviobj.higherLevel);
                            else
                                naviobj.renderer.drawText(textOptions, quarterValue + " 4 " + stringDate, naviobj.lowerLevel);
                            date = new Date(date.setMonth(12));
                            k = 11;

                        }


                        if (position === "lower") {
                            naviobj._lowerTotalValues[count] = new Date(naviobj.endYear + "/" + parseInt(j + 1) + "/1").getTime() - naviobj.startDateTime.getTime();                            
                            j = k;
                            naviobj._lowerTextNode[count] = naviobj.lowerLevel.childNodes[count];
                            var labelfont = { size: naviobj.model.labelSettings.lowerLevel.style.font.size, fontStyle: naviobj.model.labelSettings.lowerLevel.style.font.style, fontFamily: naviobj.model.labelSettings.lowerLevel.style.font.family };
                            var textOffset = ej.EjSvgRender.utils._measureText(naviobj.lowerLevel.childNodes[count].textContent, null, labelfont);
                            txtBlockWidth += textOffset.width;
                        }
                        else {
                            naviobj._higherTotalValues[count] = new Date(naviobj.endYear + "/" + parseInt(j + 1) + "/1").getTime() - naviobj.startDateTime.getTime();
                            j = k;
                            naviobj._higherTextNode[count] = naviobj.higherLevel.childNodes[count];
                            var labelfont = { size: naviobj.model.labelSettings.higherLevel.style.font.size, fontStyle: naviobj.model.labelSettings.higherLevel.style.font.style, fontFamily: naviobj.model.labelSettings.higherLevel.style.font.family };
                            var textOffset = ej.EjSvgRender.utils._measureText(naviobj.higherLevel.childNodes[count].textContent, null, labelfont);
                            txtBlockWidth += textOffset.width;
                        }
                        count++;
                    }
                }
                else {
                    for (var j = 0; j <= 11; j++) {
                        if (position == "higher") {
                            var textOptions = {
                                'id': this._rootId + '_higLabelBarText' + '_' + count,
                                'x': 0,
                                'y': 0,
                                'text-anchor': 'start',
                                'dominant-baseline': 'middle',
                                "font-size": naviobj.model.labelSettings.higherLevel.style.font.size,
                                "font-family": naviobj.model.labelSettings.higherLevel.style.font.family,
                                "font-style": naviobj.model.labelSettings.higherLevel.style.font.style,
                                "font-weight": naviobj.model.labelSettings.higherLevel.style.font.weight
                            };
                        }
                        else {
                            var textOptions = {
                                'id': this._rootId + '_LabelBarText' + '_' + count,
                                'x': 0,
                                'y': 0,
                                'text-anchor': 'start',
                                'dominant-baseline': 'middle',
                                "font-size": naviobj.model.labelSettings.lowerLevel.style.font.size,
                                "font-family": naviobj.model.labelSettings.lowerLevel.style.font.family,
                                "font-style": naviobj.model.labelSettings.lowerLevel.style.font.style,
                                "font-weight": naviobj.model.labelSettings.lowerLevel.style.font.weight
                            };
                        }
                        if (j >= 0 && j <= 2) {
                            if (position == "higher")
                                naviobj.renderer.drawText(textOptions, quarterValue + " 1 " + stringDate, naviobj.higherLevel);
                            else
                                naviobj.renderer.drawText(textOptions, quarterValue + " 1 " + stringDate, naviobj.lowerLevel);
                            date = new Date(date.setMonth(3));
                            k = 2;
                        }
                        else if (j >= 3 && j <= 5) {
                            if (position == "higher")
                                naviobj.renderer.drawText(textOptions, quarterValue + " 2 " + stringDate, naviobj.higherLevel);
                            else
                                naviobj.renderer.drawText(textOptions, quarterValue + " 2 " + stringDate, naviobj.lowerLevel);
                            date = new Date(date.setMonth(6));
                            k = 5;

                        }
                        else if (j >= 6 && j <= 8) {
                            if (position == "higher")
                                naviobj.renderer.drawText(textOptions, quarterValue + " 3 " + stringDate, naviobj.higherLevel);
                            else
                                naviobj.renderer.drawText(textOptions, quarterValue + " 3 " + stringDate, naviobj.lowerLevel);
                            date = new Date(date.setMonth(9));
                            k = 8;

                        }
                        else if (j >= 9 && j <= 11) {
                            if (position == "higher")
                                naviobj.renderer.drawText(textOptions, quarterValue + " 4 " + stringDate, naviobj.higherLevel);
                            else
                                naviobj.renderer.drawText(textOptions, quarterValue + " 4 " + stringDate, naviobj.lowerLevel);
                            date = new Date(date.setMonth(12));
                            k = 11;

                        }


                        if (position === "lower") {
                            naviobj._lowerTotalValues[count] = new Date(i + "/" + parseInt(j + 1) + "/1").getTime() - naviobj.startDateTime.getTime();
                            j = k;
                            naviobj._lowerTextNode[count] = naviobj.lowerLevel.childNodes[count];
                            var labelfont = { size: naviobj.model.labelSettings.lowerLevel.style.font.size, fontStyle: naviobj.model.labelSettings.lowerLevel.style.font.style, fontFamily: naviobj.model.labelSettings.lowerLevel.style.font.family };
                            var textOffset = ej.EjSvgRender.utils._measureText(naviobj.lowerLevel.childNodes[count].textContent, null, labelfont);
                            txtBlockWidth += textOffset.width;
                        }
                        else {
                            naviobj._higherTotalValues[count] = new Date(i + "/" + parseInt(j + 1) + "/1").getTime() - naviobj.startDateTime.getTime();
                            j = k;
                            naviobj._higherTextNode[count] = naviobj.higherLevel.childNodes[count];
                            var labelfont = { size: naviobj.model.labelSettings.higherLevel.style.font.size, fontStyle: naviobj.model.labelSettings.higherLevel.style.font.style, fontFamily: naviobj.model.labelSettings.higherLevel.style.font.family };
                            var textOffset = ej.EjSvgRender.utils._measureText(naviobj.higherLevel.childNodes[count].textContent, null, labelfont);
                            txtBlockWidth += textOffset.width;
                        }
                        count++;
                    }
                }

            }
            return txtBlockWidth;
        },

        setQuarterInterval: function (naviobj, position, level) {
            naviobj._higherTextNode = [];
            naviobj._higherTotalValues = [];
            naviobj._lowerTextNode = [];
            naviobj._lowerTotalValues = [];
            if (position === "higher")
                $("#higherLevel").children().empty();
            else
                $("#lowerLevel").children().empty();
            var date = new Date(naviobj.startDateTime);
            var count = 0;
            var k = 0;
            var txtBlockWidth = 0;
			var culture = this.model.locale;
			var locale = ej.datavisualization.RangeNavigator.locale[culture] ? ej.datavisualization.RangeNavigator.locale[culture]:
                                                                               ej.datavisualization.RangeNavigator.locale["en-US"];
            switch (level) {
                case 0:
                    txtBlockWidth=this._quarter(naviobj, position, locale.intervals['quarter'].longQuarters, "yyyy", date, txtBlockWidth, count);                    
                    if (txtBlockWidth >= naviobj.newWidth)
                        naviobj.setQuarterInterval(naviobj, position, 1);
                    else
                        this.insertLabels(naviobj, position);
                    break;
                case 1:
                    txtBlockWidth = this._quarter(naviobj, position, locale.intervals['quarter'].longQuarters, "yy", date, txtBlockWidth, count);
                    if (txtBlockWidth >= naviobj.newWidth)
                        naviobj.setQuarterInterval(naviobj, position, 2);
                    else
                        this.insertLabels(naviobj, position);
                    break;
                case 2:
                    txtBlockWidth = this._quarter(naviobj, position, locale.intervals['quarter'].shortQuarters, "yyyy", date, txtBlockWidth, count);
                    if (txtBlockWidth >= naviobj.newWidth)
                        naviobj.setQuarterInterval(naviobj, position, 3);
                    else
                        this.insertLabels(naviobj, position);
                    break;
                case 3:
                    txtBlockWidth = this._quarter(naviobj, position, locale.intervals['quarter'].shortQuarters, null, date, txtBlockWidth, count);
                    this.insertLabels(naviobj, position);
                    break;
                default:
                    break;
            }
        },

        _insertText: function (naviobj, position, txtValue, currentDate, count, bwidth, setsubstring) {

            Date.prototype.addYears = function (years) {
                var dat = new Date(this.valueOf())
                if (dat.getMilliseconds() !== 0 || dat.getSeconds() !== 0
                 || dat.getMinutes() !== 0 || dat.getHours() !== 0 || dat.getDate() !== 0
                 || dat.getMonth() !== 0) {
                    dat = new Date(dat.getFullYear() + 1, 0, 1);
                }
                else
                    dat.setYear(dat.getFullYear() + years);
                return dat;
            }

            Date.prototype.addMonths = function () {
                var dat = new Date(this.valueOf())
                dat = new Date(dat.getFullYear(), dat.getMonth() + 1, 1);
                return dat;
            }

            if (position === "higher") {
                naviobj._higherTotalValues[count] = currentDate.getTime() - naviobj.startDateTime.getTime();
                var textOptions = {
                    'id': this._rootId + '_higLabelBarText' + '_' + count,
                    'x': 0,
                    'y': 0,
                    'text-anchor': 'start',
                    'dominant-baseline': 'middle',
                    "font-size": naviobj.model.labelSettings.higherLevel.style.font.size,
                    "font-family": naviobj.model.labelSettings.higherLevel.style.font.family,
                    "font-style": naviobj.model.labelSettings.higherLevel.style.font.style,
                    "font-weight": naviobj.model.labelSettings.higherLevel.style.font.weight,
                    "fill":naviobj.model.labelSettings.higherLevel.style.font.color
                };
                if(setsubstring==false)
                    naviobj.renderer.drawText(textOptions, Globalize.format(currentDate, txtValue), naviobj.higherLevel);
                else
                    naviobj.renderer.drawText(textOptions, Globalize.format(currentDate, txtValue).toString().substring(0, 1), naviobj.higherLevel);
                naviobj._higherTextNode[count] = naviobj.higherLevel.childNodes[count];
                var labelfont = { size: naviobj.model.labelSettings.higherLevel.style.font.size, fontStyle: naviobj.model.labelSettings.higherLevel.style.font.style, fontFamily: naviobj.model.labelSettings.higherLevel.style.font.family };
                if(this.svgSupport)
                    var textOffset = ej.EjSvgRender.utils._measureText(naviobj.higherLevel.childNodes[count].textContent, null, labelfont);
                else
                    var textOffset = ej.EjSvgRender.utils._measureText(naviobj.higherLevel.childNodes[count].innerHTML, null, labelfont);
                bwidth = Math.max(bwidth, textOffset.width);
            }
            else {
                naviobj._lowerTotalValues[count] = currentDate.getTime() - naviobj.startDateTime.getTime();
                var textOptions = {
                    'id': this._rootId + '_LabelBarText' + '_' + count,
                    'x': 0,
                    'y': 0,
                    'text-anchor': 'start',
                    'dominant-baseline': 'middle',
                    "font-size": naviobj.model.labelSettings.lowerLevel.style.font.size,
                    "font-family": naviobj.model.labelSettings.lowerLevel.style.font.family,
                    "font-style": naviobj.model.labelSettings.lowerLevel.style.font.style,
                    "font-weight": naviobj.model.labelSettings.lowerLevel.style.font.weight,
                    "fill":naviobj.model.labelSettings.lowerLevel.style.font.color
                };
                if(setsubstring==false)
                    naviobj.renderer.drawText(textOptions, Globalize.format(currentDate, txtValue), naviobj.lowerLevel);
                else
                    naviobj.renderer.drawText(textOptions, Globalize.format(currentDate, txtValue).substring(0, 1), naviobj.lowerLevel);
                naviobj._lowerTextNode[count] = naviobj.lowerLevel.childNodes[count];
                var labelfont = { size: naviobj.model.labelSettings.lowerLevel.style.font.size, fontStyle: naviobj.model.labelSettings.lowerLevel.style.font.style, fontFamily: naviobj.model.labelSettings.lowerLevel.style.font.family };
                if(this.svgSupport)
                    var textOffset = ej.EjSvgRender.utils._measureText(naviobj.lowerLevel.childNodes[count].textContent, null, labelfont);
                else
                    var textOffset = ej.EjSvgRender.utils._measureText(naviobj.lowerLevel.childNodes[count].innerHTML, null, labelfont);
                bwidth = Math.max(bwidth, textOffset.width);
            }
            return bwidth;
        },

        _insertNumericText: function (naviobj,currentValue) {
            naviobj._lowerTotalValues[count] = currentValue - naviobj.startValue;
            var font = naviobj.model.labelSettings.style.font;
            var textOptions = {
                'id': this._rootId + '_LabelBarText' + '_' + count,
                'x': 0,
                'y': 0,
                'text-anchor': 'start',
                'dominant-baseline': 'middle',
                "font-size": font.size,
                "font-family": font.family,
                "font-style": font.style,
                "font-weight": font.weight,
                "fill": font.color
            };
                naviobj.renderer.drawText(textOptions, currentValue, naviobj.lowerLevel);
            naviobj._lowerTextNode[count] = naviobj.lowerLevel.childNodes[count];
            var labelfont = { size: naviobj.model.labelSettings.lowerLevel.style.font.size, fontStyle: naviobj.model.labelSettings.lowerLevel.style.font.style, fontFamily: naviobj.model.labelSettings.lowerLevel.style.font.family };
            var textOffset;
            if(this.svgSupport) {
                textOffset = ej.EjSvgRender.utils._measureText(naviobj.lowerLevel.childNodes[count].textContent, null, labelfont);
            } else {
                textOffset = ej.EjSvgRender.utils._measureText(naviobj.lowerLevel.childNodes[count].innerHTML, null, labelfont);
            } 
        },

        setYearInterval: function (naviobj, position) {
            var currentDate = naviobj.startDateTime;
            count=0;
            while (currentDate <= naviobj.endDateTime) {
                this._insertText(naviobj, position, "yyyy", currentDate,count,0,false);                   
                count++;
                currentDate = currentDate.addYears(1);
            }            
            this.insertLabels(naviobj, position);
        },

        _applyPadding:function(){
            var i;
            for (i = 0; i < this._higherTotalValues.length; i++) {
                this._higherTotalValues[i] += this.padding;
            }
            for (i = 0; i < this._lowerTotalValues.length; i++) {
                this._lowerTotalValues[i] += this.padding;
            }
        },

        insertLabels: function (naviobj, level) {
            // this._applyPadding();
            var matched = jQuery.uaMatch(navigator.userAgent);
            var lowgridColor = this.model.labelSettings.lowerLevel.gridLineStyle.color;
            this.lgClr = this.renderer.createGradientElement('lgColor', lowgridColor, 150, 0, 150, 100, this.svgDocument);
            var type = this.model.valueType;
            var wholeSize = parseFloat(this.renderer._getAttrVal($(naviobj.svgDocument), 'width'));
            if (type == "datetime")
                this.eachInterval = (wholeSize - this.padding * 2) / parseFloat(this.endDateTime.getTime() - this.startDateTime.getTime());
            else
                this.eachInterval = (wholeSize - this.padding * 2) / parseFloat(this.endValue - this.startValue);
            var count = 0;
            var labelcount = 0;
            var txtwidth = 0;
            var rectoptions;
            var lineleft;
            var newleft;
            var textOffset;
            var labelfont;
            var i;
            if (level === "higher" && naviobj.model.labelSettings.higherLevel.visible===true) {

                if (naviobj.model.labelSettings.higherLevel.position == "top" && naviobj.model.labelSettings.lowerLevel.position == "top") {
                    rectoptions = {
                        x: this.padding,
                        y: 1,
                        width: naviobj.newWidth-naviobj.padding*2,
                        height: naviobj.minHighHeight,
                        'stroke': naviobj.model.labelSettings.higherLevel.border.color,
                        'stroke-width': naviobj.model.labelSettings.higherLevel.border.width,
                        fill: 'transparent'

                    };
                    naviobj.renderer.drawRect(rectoptions, naviobj.higherLevel);
                }
                else if (naviobj.model.labelSettings.higherLevel.position == "top") {
                    rectoptions = {
                        x: this.padding,
                        y: 1,
                        width: naviobj.newWidth - naviobj.padding * 2,
                        height: naviobj.minHighHeight,
                        'stroke': naviobj.model.labelSettings.higherLevel.border.color,
                        'stroke-width': naviobj.model.labelSettings.higherLevel.border.width,
                        fill: 'transparent'

                    };
                    naviobj.renderer.drawRect(rectoptions, naviobj.higherLevel);
                }
                else {
                    rectoptions = {
                        x: this.padding,
                        y: naviobj.bottomPosition,
                        width: naviobj.newWidth - naviobj.padding * 2,
                        height: naviobj.minHighHeight,
                        'stroke': naviobj.model.labelSettings.higherLevel.border.color,
                        'stroke-width': naviobj.model.labelSettings.higherLevel.border.width,
                        fill: 'transparent'

                    };
                    naviobj.renderer.drawRect(rectoptions, naviobj.higherLevel);
                }

                naviobj._higherLineLeft = [];

                if (!naviobj.model.enableRTL) {
                    lineleft = (naviobj._higherTotalValues[count] * this.eachInterval) + this.padding;
                } else {
                    lineleft = naviobj.newWidth - ((naviobj._higherTotalValues[naviobj._higherTextNode.length - 1] * this.eachInterval) + this.padding);
                }
                var isrtl;
                if (naviobj.model.enableRTL) {
                    i = naviobj._higherTextNode.length - 1;
                    isrtl = true;
                }
                else {
                    i = 0;
                    isrtl = false;
                }
                var setLeft = 0;

                for (; isrtl ? i >= 0 : i < naviobj._higherTextNode.length; isrtl?i--:i++) {
                    naviobj._higherLineLeft[i] = lineleft;
                    //  var txt =  naviobj._higherTextNode[i].getBBox();
                    labelfont = { size: naviobj.model.labelSettings.higherLevel.style.font.size, fontStyle: naviobj.model.labelSettings.higherLevel.style.font.style, fontFamily: naviobj.model.labelSettings.higherLevel.style.font.family };
                    textOffset = ej.EjSvgRender.utils._measureText(naviobj.higherLevel.childNodes[count].textContent, null, labelfont);
                    txtwidth = textOffset.width;
                    newleft = naviobj._higherTotalValues[i + 1] === undefined
                        ? isrtl ? 0 : naviobj.newWidth :
                        isrtl?naviobj.newWidth-((naviobj._higherTotalValues[i + 1] * this.eachInterval + this.padding)):
                        (naviobj._higherTotalValues[i + 1] * this.eachInterval + this.padding);
                    if (naviobj.model.labelSettings.higherLevel.style.horizontalAlignment === "center") {
                        setleft = (newleft - lineleft) / 2 + lineleft - txtwidth / 2;
                    }
                    else if (naviobj.model.labelSettings.higherLevel.style.horizontalAlignment === "left") {
                        setleft = lineleft + 10;
                    }
                    else
                        setleft = newleft - txtwidth - 2;
                    naviobj.renderer._setAttr($(naviobj._higherTextNode[i]), { 'x': setleft });
                    naviobj.renderer._setAttr($(naviobj._higherTextNode[i]), { 'fill': naviobj.model.labelSettings.higherLevel.style.font.color });
                    naviobj._higherTextLeft[i] = setleft;
                    
                    if (naviobj.model.labelSettings.higherLevel.position == "top" && naviobj.model.labelSettings.lowerLevel.position == "top") {
                        naviobj._higherTextNode[i].setAttribute("y", naviobj.minHighHeight - 5);
                        rectoptions = {
                            x1: lineleft,
                            y1: '0',
                            x2: lineleft,
                            y2: naviobj.centerPosition,
                            'stroke': naviobj.model.labelSettings.higherLevel.gridLineStyle.color,
                            'stroke-width': naviobj.model.labelSettings.higherLevel.gridLineStyle.width,
                            'stroke-dasharray': naviobj.model.labelSettings.higherLevel.gridLineStyle.dashArray,

                        };
                        if (i != 0)
                        naviobj.renderer.drawLine(rectoptions, naviobj.higherLevel);
                    }
                    else if (naviobj.model.labelSettings.higherLevel.position == "top") {
                        if (this.svgSupport) {
                            if(matched.browser.toLowerCase() == "msie")
                                naviobj._higherTextNode[i].setAttribute("y", naviobj.centerPosition - 5);
                            else
                                naviobj._higherTextNode[i].setAttribute("y", naviobj.centerPosition - 9);
                        }
                        else
                            naviobj.renderer._setAttr($(naviobj._higherTextNode[i]), { 'y': (naviobj.centerPosition / 2) - 5 });
                        rectoptions = {
                            x1: lineleft,
                            y1: '0',
                            x2: lineleft,
                            y2: naviobj.centerPosition,
                            'stroke': naviobj.model.labelSettings.higherLevel.gridLineStyle.color,
                            'stroke-width': naviobj.model.labelSettings.higherLevel.gridLineStyle.width,
                            'stroke-dasharray':naviobj.model.labelSettings.higherLevel.gridLineStyle.dashArray,

                        };
                        if (i != 0)
                        naviobj.renderer.drawLine(rectoptions, naviobj.higherLevel);
                    }
                    else {
                        naviobj._higherTextNode[i].setAttribute("y", naviobj.newHeight - 5);
                        rectoptions = {
                            x1: lineleft,
                            y1: this.bottomPosition,
                            x2: lineleft,
                            y2: naviobj.newHeight,
                            'stroke': naviobj.model.labelSettings.higherLevel.gridLineStyle.color,
                            'stroke-width': naviobj.model.labelSettings.higherLevel.gridLineStyle.width,
                            'stroke-dasharray': naviobj.model.labelSettings.higherLevel.gridLineStyle.dashArray,

                        };
                        if (i != 0)
                        naviobj.renderer.drawLine(rectoptions, naviobj.higherLevel);
                    }
                    if (!this.model.enableRTL) {
                        lineleft = naviobj._higherTotalValues[i + 1] * this.eachInterval + this.padding;
                    } else {
                        lineleft= naviobj.newWidth - (naviobj._higherTotalValues[i -1] * this.eachInterval + this.padding);
                    }
                    if ((setleft < this.padding || setleft+txtwidth > naviobj.newWidth-this.padding) && type=="datetime") {
                        naviobj.higherLevel.removeChild(naviobj._higherTextNode[i]);
                        continue;
                    }
                    count++;
                }

                

            }
            else if (naviobj.model.labelSettings.lowerLevel.visible === true) {

                naviobj._lowerLineLeft = [];
                if (!naviobj.model.enableRTL) {
                    lineleft = (naviobj._lowerTotalValues[count] * this.eachInterval) + this.padding;
                } else {
                    lineleft = naviobj.newWidth - ((naviobj._lowerTotalValues[naviobj._lowerTextNode.length - 1] * this.eachInterval) + this.padding);
                }
                var hy = naviobj.model.labelSettings.higherLevel.visible ? naviobj.bottomPosition : naviobj.centerHeight;

                if (naviobj.model.labelSettings.lowerLevel.position === "bottom" && naviobj.model.labelSettings.higherLevel.position === "top") {
                    rectoptions = {
                        x: this.padding,
                        y: hy,
                        width: this.newWidth - naviobj.padding * 2,
                        height: naviobj.minLowHeight - 1,
                        'stroke': naviobj.model.labelSettings.lowerLevel.border.color,
                        'stroke-width': naviobj.model.labelSettings.lowerLevel.border.width,
                        fill: 'transparent'
                    };
                    if (type != "numeric")
                        naviobj.renderer.drawRect(rectoptions, naviobj.lowerLevel);
                }
                else if (naviobj.model.labelSettings.lowerLevel.position === "bottom" && naviobj.model.labelSettings.higherLevel.position === "bottom") {
                    rectoptions = {
                        x: this.padding,
                        y: naviobj.centerHeight,
                        width: this.newWidth - naviobj.padding * 2,
                        height: naviobj.minLowHeight - 1,
                        'stroke': naviobj.model.labelSettings.lowerLevel.border.color,
                        'stroke-width': naviobj.model.labelSettings.lowerLevel.border.width,
                        fill: 'transparent'
                    };
                    naviobj.renderer.drawRect(rectoptions, naviobj.lowerLevel);
                }
                else if (naviobj.model.labelSettings.lowerLevel.position === "top" && naviobj.model.labelSettings.higherLevel.position === "bottom") {
                    rectoptions = {
                        x: this.padding,
                        y: 0,
                        width: this.newWidth - naviobj.padding * 2,
                        height: naviobj.minLowHeight - 1,
                        'stroke': naviobj.model.labelSettings.lowerLevel.border.color,
                        'stroke-width': naviobj.model.labelSettings.lowerLevel.border.width,
                        fill: 'transparent'
                    };
                    naviobj.renderer.drawRect(rectoptions, naviobj.lowerLevel);
                }
                else if (naviobj.model.labelSettings.higherLevel.position === "top" && naviobj.model.labelSettings.lowerLevel.position === "top") {
                    rectoptions = {
                        x: this.padding,
                        y: naviobj.minHighHeight - 1,
                        width: this.newWidth - naviobj.padding * 2,
                        height: naviobj.minLowHeight,
                        'stroke': naviobj.model.labelSettings.lowerLevel.border.color,
                        'stroke-width': naviobj.model.labelSettings.lowerLevel.border.width,
                        fill: 'transparent'
                    };
                    naviobj.renderer.drawRect(rectoptions, naviobj.lowerLevel);
                }

                if (naviobj.model.enableRTL) {
                    i = naviobj._lowerTextNode.length - 1;
                    isrtl = true;
                }
                else {
                    i = 0;
                    isrtl = false;
                }


                for (; isrtl ? i >= 0 : i < naviobj._lowerTextNode.length; isrtl?i--:i++) {
                    naviobj._lowerLineLeft[i] = lineleft;
                    labelfont = { size: naviobj.model.labelSettings.lowerLevel.style.font.size, fontStyle: naviobj.model.labelSettings.lowerLevel.style.font.style, fontFamily: naviobj.model.labelSettings.lowerLevel.style.font.family };
                    textOffset = ej.EjSvgRender.utils._measureText(naviobj.lowerLevel.childNodes[count].textContent, null, labelfont); // var txt = naviobj._lowerTextNode[i].getBBox();
                    txtwidth = textOffset.width;// txt.width;
                    var setleft = 0;
                    newleft = naviobj._lowerTotalValues[i + 1] === undefined
                        ? isrtl ? 0 : naviobj.newWidth :
                        isrtl ? naviobj.newWidth - ((naviobj._lowerTotalValues[i + 1] * this.eachInterval + this.padding)) :
                        (naviobj._lowerTotalValues[i + 1] * this.eachInterval + this.padding);
                    if (naviobj.model.labelSettings.lowerLevel.style.horizontalAlignment === "center") {
                        setleft = (newleft - lineleft) / 2 + lineleft - txtwidth / 2;
                    }
                    else if (naviobj.model.labelSettings.lowerLevel.style.horizontalAlignment === "left") {
                        setleft = lineleft + 2;
                    }
                    else
                        setleft = newleft - txtwidth - 2;
                    if (type == "numeric")
                        setleft = lineleft - txtwidth / 2;
                    naviobj.renderer._setAttr($(naviobj._lowerTextNode[i]), { 'x': setleft });
                    naviobj.renderer._setAttr($(naviobj._lowerTextNode[i]), { 'fill': naviobj.model.labelSettings.lowerLevel.style.font.color });

                    naviobj._lowerTextLeft[i] = setleft;

                    if (naviobj.model.labelSettings.lowerLevel.position === "bottom" && naviobj.model.labelSettings.higherLevel.position === "top") {
                        if (!this.svgSupport)
                            naviobj.renderer._setAttr($(naviobj._lowerTextNode[i]), { 'y': naviobj.newHeight - textOffset.height });
                        else {
                            if (matched.browser.toLowerCase() == "msie")
                                naviobj._lowerTextNode[i].setAttribute("y", naviobj.newHeight - 5);
                            else
                                naviobj._lowerTextNode[i].setAttribute("y", naviobj.newHeight - 9);

                        }
                        var ht = naviobj.model.labelSettings.higherLevel.visible ? parseFloat(naviobj.minHighHeight + naviobj.centerHeight) : naviobj.minHighHeight;
                        rectoptions = {
                            x1: lineleft,
                            y1: ht,
                            x2: lineleft,
                            y2: naviobj.newHeight,
                            'stroke': this.lgClr,
                            'stroke-width': naviobj.model.labelSettings.lowerLevel.gridLineStyle.width,
                            'stroke-dasharray': naviobj.model.labelSettings.lowerLevel.gridLineStyle.dashArray,
                        };
                        if (i != 0 && type != "numeric")
                            naviobj.renderer.drawLine(rectoptions, naviobj.lowerLevel);
                    }
                    else if (naviobj.model.labelSettings.lowerLevel.position === "bottom" && naviobj.model.labelSettings.higherLevel.position === "bottom") {
                        naviobj._lowerTextNode[i].setAttribute("y", naviobj.bottomPosition - 5);
                        rectoptions = {
                            x1: lineleft,
                            y1: naviobj.centerHeight,
                            x2: lineleft,
                            y2: naviobj.bottomPosition,
                            'stroke': naviobj.model.labelSettings.lowerLevel.gridLineStyle.color,
                            'stroke-width': naviobj.model.labelSettings.lowerLevel.gridLineStyle.width,
                            'stroke-dasharray':naviobj.model.labelSettings.lowerLevel.gridLineStyle.dashArray,
                        };
                        if (i != 0)
                            naviobj.renderer.drawLine(rectoptions, naviobj.lowerLevel);
                    }
                    else if (naviobj.model.labelSettings.lowerLevel.position === "top" && naviobj.model.labelSettings.higherLevel.position === "bottom") {
                        naviobj._lowerTextNode[i].setAttribute("y", naviobj.centerPosition - 5);
                        rectoptions = {
                            x1: lineleft,
                            y1: 0,
                            x2: lineleft,
                            y2: naviobj.centerPosition,
                            'stroke': naviobj.model.labelSettings.lowerLevel.gridLineStyle.color,
                            'stroke-width': naviobj.model.labelSettings.lowerLevel.gridLineStyle.width,
                            'stroke-dasharray': naviobj.model.labelSettings.lowerLevel.gridLineStyle.dashArray,
                        };
                        if (i != 0)
                            naviobj.renderer.drawLine(rectoptions, naviobj.lowerLevel);
                    }
                    else if (naviobj.model.labelSettings.higherLevel.position === "top" && naviobj.model.labelSettings.lowerLevel.position === "top") {
                        naviobj._lowerTextNode[i].setAttribute("y", naviobj.centerPosition - 5);
                        rectoptions = {
                            x1: lineleft,
                            y1: naviobj.minHighHeight,
                            x2: lineleft,
                            y2: naviobj.centerPosition,
                            'stroke': naviobj.model.labelSettings.lowerLevel.gridLineStyle.color,
                            'stroke-width': naviobj.model.labelSettings.lowerLevel.gridLineStyle.width,
                            'stroke-dasharray': naviobj.model.labelSettings.lowerLevel.gridLineStyle.dashArray,
                        };
                        if (i != 0)
                            naviobj.renderer.drawLine(rectoptions, naviobj.lowerLevel);
                    }
                    if (!this.model.enableRTL)
                        lineleft = naviobj._lowerTotalValues[i + 1] * this.eachInterval + this.padding;
                    else
                        lineleft = naviobj.newWidth - (naviobj._lowerTotalValues[i - 1] * this.eachInterval + this.padding);
                    if ((setleft < this.padding || setleft + txtwidth > naviobj.newWidth - this.padding) && type=="datetime") {
                        naviobj.lowerLevel.removeChild(naviobj._lowerTextNode[i]);
                        continue;
                    }
                    count++;
                }



            }
            naviobj._setGridlines(naviobj);
            //this.higherLevel.setAttributeNS(null, 'transform', 'translate(' + 20 + ',' + 0 + ')');
            //this.lowerLevel.setAttributeNS(null, 'transform', 'translate(' + 20 + ',' + 0 + ')');

        },

        _setGridlines: function (naviobj) {

            if (naviobj.model.navigatorStyleSettings.minorGridLineStyle.visible === true) {

                for (var i = 1; i < naviobj._lowerTextNode.length; i++) {
                    if (naviobj.model.labelSettings.higherLevel.position == "top" && naviobj.model.labelSettings.lowerLevel.position == "top") {
                        var rectoptions = {
                            x1: naviobj._lowerLineLeft[i],
                            y1: naviobj.centerHeight + naviobj.minLowHeight+naviobj.minHighHeight,
                            x2: naviobj._lowerLineLeft[i],
                            y2: naviobj.centerPosition,
                            'stroke': naviobj.model.navigatorStyleSettings.minorGridLineStyle.color,
                            'stroke-width': '1'
                        };
                        naviobj.renderer.drawLine(rectoptions, naviobj.centerLevel);
                    }
                    else {
                        var rectoptions = {
                            x1: naviobj._lowerLineLeft[i],
                            y1: naviobj.centerPosition,
                            x2: naviobj._lowerLineLeft[i],
                            y2: naviobj.centerPosition+naviobj.centerHeight,
                            'stroke': naviobj.model.navigatorStyleSettings.minorGridLineStyle.color,
                            'stroke-width': '1'
                        };
                        naviobj.renderer.drawLine(rectoptions, naviobj.centerLevel);
                    }
                    
                }
            }
            else {
                for (var i = 0; i < naviobj._higherTextNode.length; i++) {
                    // var lineLeft = naviobj._lowerLineLeft[i];
                    var rectoptions = {
                        x1: naviobj._higherLineLeft[i],
                        y1: naviobj.centerHeight + naviobj.minLowHeight,
                        x2: naviobj._higherLineLeft[i],
                        y2: naviobj.centerPosition,
                        'stroke': naviobj.model.navigatorStyleSettings.majorGridLineStyle.color,
                        'stroke-width': '1'
                    };
                    naviobj.renderer.drawLine(rectoptions, naviobj.centerLevel);
                }
            }

        },

        bindTo: function () {
            if (!ej.util.isNullOrUndefined(this.model.dataSource)) {
                if (this.model.dataSource != null && this.model.dataSource.length > 0) {

                    this._processJsonData(this.model.dataSource, this.model);
                }
            }

        },

        _processJsonData: function (jsonObj, newmodel) {

            var xdata = [];
            var yValues = [];
            var index = 0;

            for (var j = 0; j < jsonObj.length; j++) {
                if (typeof jsonObj[j][newmodel.xName] == "string" && jsonObj[j][newmodel.xName].indexOf("/Date(") != -1)
                    jsonObj[j][newmodel.xName] = new Date(parseInt(jsonObj[j][newmodel.xName].substr(6)));
                if (jQuery.type(jsonObj[j][newmodel.xName]) != "string" && jQuery.type(jsonObj[j][newmodel.xName]) != "date")
                    xdata.push(parseFloat(!ej.util.isNullOrUndefined(jsonObj[j][newmodel.xName]) ? jsonObj[j][newmodel.xName] : j));
                else {
                    xdata.push(!ej.util.isNullOrUndefined(jsonObj[j][newmodel.xName]) ? jsonObj[j][newmodel.xName] : j);
                }
            }

            if (!ej.util.isNullOrUndefined(newmodel.yName)) {
                for (var k = 0; k < newmodel.yName.length; k++) {
                    var yNVal = [];
                    for (var yI = 0; yI < jsonObj.length; yI++) {
                        yNVal.push(jsonObj[yI][newmodel.yName[k]] === null || jsonObj[yI][newmodel.yName[k]] === undefined ? jsonObj[yI][newmodel.yName[k]] : parseFloat(jsonObj[yI][newmodel.yName[k]]));
                    }
                    yValues[k] = yNVal;
                    index = k + 1;
                }
            }

            this.endDateTime = new Date(Math.max.apply(null, xdata));
            this.startDateTime = new Date(Math.min.apply(null, xdata));
            this.endValue = Math.max.apply(null, xdata);
            this.startValue = Math.min.apply(null, xdata);
        },

        calTouchPosition: function (e) {
            var matched = jQuery.uaMatch(navigator.userAgent);
            var mouseX, mouseY;
            
            if (matched.browser.toLowerCase() == "mozilla" || matched.browser.toLowerCase() == "webkit") {
                var touch = e.originalEvent.touches[0];
                mouseX = (touch.pageX) - $(this.svgDocument).parent().offset().left;
                mouseY = (touch.pageY) - $(this.svgDocument).parent().offset().top;
                this.leftPadding = $(this.svgDocument).offset().left;
                this.grabPadding = 0;
            } else if (matched.browser.toLowerCase() == "msie") {

                mouseX = (e.originalEvent.pageX) - $(this.svgDocument).offset().left;
                mouseY = (e.originalEvent.pageY) - $(this.svgDocument).offset().top;
                this.leftPadding = $(this.svgDocument).offset().left;
            }
            else {
                var touch = e.originalEvent.touches[0];
                mouseX = (touch.pageX) - $(this.svgDocument).offset().left;
                mouseY = (touch.pageY) - $(this.svgDocument).offset().top;
                this.leftPadding = $(this.svgDocument).offset().left;
            }

            return { X: mouseX, Y: mouseY };

        },

        calMousePosition: function (e) {
            var matched = jQuery.uaMatch(navigator.userAgent);
            var mouseX, mouseY;
            if (matched.browser.toLowerCase() == "mozilla" || matched.browser.toLowerCase() == "webkit") {
                mouseX = (e.pageX) - $(this.svgDocument).parent().offset().left;
                mouseY = (e.pageY) - $(this.svgDocument).parent().offset().top;
                this.leftPadding = 0;//$(this.svgDocument).offset().left;
                this.grabPadding = 0;
            } else {
                mouseX = (e.pageX) - $(this.svgDocument).offset().left;
                mouseY = (e.pageY) - $(this.svgDocument).offset().top;
                this.leftPadding = $(this.svgDocument).offset().left;
            }

            return { X: mouseX, Y: mouseY };

        },

        calTouchPosition: function (e) {
            var matched = jQuery.uaMatch(navigator.userAgent);
            var mouseX, mouseY;

            if (matched.browser.toLowerCase() == "mozilla" || matched.browser.toLowerCase() == "webkit") {
                var touch = e.originalEvent.touches[0];
                mouseX = (touch.pageX) - $(this.svgDocument).parent().offset().left;
                mouseY = (touch.pageY) - $(this.svgDocument).parent().offset().top;
                this.leftPadding = $(this.svgDocument).offset().left;
                this.grabPadding = 0;
            } else if (matched.browser.toLowerCase() == "msie") {

                mouseX = (e.originalEvent.pageX) - $(this.svgDocument).offset().left;
                mouseY = (e.originalEvent.pageY) - $(this.svgDocument).offset().top;
                this.leftPadding = $(this.svgDocument).offset().left;
            }
            else {
                var touch = e.originalEvent.touches[0];
                mouseX = (touch.pageX) - $(this.svgDocument).offset().left;
                mouseY = (touch.pageY) - $(this.svgDocument).offset().top;
                this.leftPadding = $(this.svgDocument).offset().left;
            }

            return { X: mouseX, Y: mouseY };

        },

        //calMousePosition: function (e) {
        //    var matched = jQuery.uaMatch(navigator.userAgent);
        //    var mouseX, mouseY;
        //    if (matched.browser.toLowerCase() == "mozilla" || matched.browser.toLowerCase() == "webkit") {
        //        mouseX = (e.pageX) - $(this.svgDocument).parent().offset().left;
        //        mouseY = (e.pageY) - $(this.svgDocument).parent().offset().top;
        //        this.leftPadding = $(this.svgDocument).offset().left;
        //        this.grabPadding = 0;
        //    } else {
        //        mouseX = (e.pageX) - $(this.svgDocument).offset().left;
        //        mouseY = (e.pageY) - $(this.svgDocument).offset().top;
        //        this.leftPadding = $(this.svgDocument).offset().left;
        //    }

        //    return { X: mouseX, Y: mouseY };

        //},

        _grab: function (evt) {
            evt.preventDefault();
            var matched = jQuery.uaMatch(navigator.userAgent);
            var naviobj = this;// evt.data.Param1;
            var mousedownCords;
            if ((this.svgSupport && evt.originalEvent.toString() !== "[object TouchEvent]") && matched.browser.toLowerCase() != "msie") {
                mousedownCords = naviobj.calMousePosition(evt);
            } else if (!this.svgSupport) {
                mousedownCords = naviobj.calMousePosition(evt);
            } else {
                mousedownCords = naviobj.calTouchPosition(evt);
            } // naviobj.calMousePosition(evt);
            naviobj.mouseDownX = mousedownCords.X;
            naviobj.mouseDownY = mousedownCords.Y;
            // find out which element we moused down on
            
            var targetElement;
            if (naviobj.edge == true) {
                targetElement = naviobj.target;
            }
            else {
                targetElement = evt.target;
            }
            
            //$(targetElement).css('cursor', 'w-resize');
            // you cannot drag the background itself, so ignore any attempts to mouse down on it
            if (targetElement.parentNode.id === "leftslider" || targetElement.parentNode.id === "rightslider" || targetElement.parentNode.id === "centerslider" || targetElement.parentNode.id === this._rootId + "higherLevel" || targetElement.parentNode.id === this._rootId + "lowerLevel") {
                //set the item moused down on as the element to be dragged
                naviobj.dragTarget = targetElement;
                naviobj.grabbed = true;
                naviobj.edge = false;
                if (this.svgSupport) {
                        var transMatrix = naviobj.dragTarget.getCTM();
                    if (matched.browser.toLowerCase() == "mozilla" || matched.browser.toLowerCase() == "webkit") {
                        naviobj.grabPoint.x = naviobj.mouseDownX + this.grabPadding - Number(transMatrix.e);
                    }
                    else
                        naviobj.grabPoint.x = naviobj.mouseDownX + this.leftPadding - Number(transMatrix.e);
                    naviobj.grabPoint.y = naviobj.trueCoords.y - Number(transMatrix.f);
                }
                var txtPosition;
                var i;
                var flag = false;
                var isrtl = naviobj.model.enableRTL;
                if (isrtl) {
                    naviobj._higherLineLeft.sort(function (a, b) { return a - b });
                    naviobj._lowerLineLeft.sort(function (a, b) { return a - b });
                }
                if (naviobj.dragTarget.parentNode.id === this._rootId + "higherLevel" && naviobj.model.valueType == "datetime") {
                    naviobj.grabbed = false;
                    txtPosition = naviobj.mouseDownX;
                    for (i=0;i< naviobj._higherLineLeft.length;i++) {
                        if (i + 1 < naviobj._higherLineLeft.length && txtPosition > naviobj._higherLineLeft[i] && txtPosition < naviobj._higherLineLeft[i + 1]) {
                            naviobj.setSliderPositions(naviobj._higherLineLeft[i], null, null);
                            naviobj.setSliderPositions(null, null, naviobj._higherLineLeft[i + 1]);
                            flag = true;
                        }
                        else if (i + 1 === naviobj._higherLineLeft.length && txtPosition > naviobj._higherLineLeft[i]) {
                            naviobj.setSliderPositions(naviobj._higherLineLeft[i], null, null);
                            naviobj.setSliderPositions(null, null, naviobj.newWidth - naviobj.padding);
                            flag = true;
                        }
                    }
                    if (isrtl && !flag) {
                        naviobj.setSliderPositions(0 + naviobj.padding, null, null);
                        naviobj.setSliderPositions(null, null, naviobj._higherLineLeft[0]);
                        flag = false;
                    }
                }
                else if (naviobj.dragTarget.parentNode.id === this._rootId + "lowerLevel" && naviobj.model.valueType == "datetime") {
                    naviobj.grabbed = false;
                    txtPosition = naviobj.mouseDownX;
                    for (i = 0; i < naviobj._lowerLineLeft.length; i++) {
                        if (i + 1 < naviobj._lowerLineLeft.length && txtPosition > naviobj._lowerLineLeft[i] && txtPosition < naviobj._lowerLineLeft[i + 1]) {
                            naviobj.setSliderPositions(naviobj._lowerLineLeft[i], null, null);
                            naviobj.setSliderPositions(null, null, naviobj._lowerLineLeft[i + 1]);
                            flag = true;
                        }
                        else if (i + 1 === naviobj._lowerLineLeft.length && txtPosition > naviobj._lowerLineLeft[i]) {
                            naviobj.setSliderPositions(naviobj._lowerLineLeft[i], null, null);
                            naviobj.setSliderPositions(null, null, naviobj.newWidth - naviobj.padding);
                            flag = true;
                        }
                    }
                    if (isrtl && !flag) {
                        naviobj.setSliderPositions(0 + naviobj.padding, null, null);
                        naviobj.setSliderPositions(null, null, naviobj._lowerLineLeft[0]);
                        flag = false;
                    }
                }

            }
        },

        _drag: function (evt) {

            evt.preventDefault();
            var matched = jQuery.uaMatch(navigator.userAgent);

            var naviobj = this;//evt.data.Param1;
            if ((this.svgSupport && evt.originalEvent.toString() !== "[object TouchEvent]") && matched.browser.toLowerCase() != "msie") {
                var mousedownCords = naviobj.calMousePosition(evt);
            }
            else if (!this.svgSupport)
                var mousedownCords = naviobj.calMousePosition(evt);
            else
                var mousedownCords = naviobj.calTouchPosition(evt);//naviobj.calMousePosition(evt);
            naviobj.mouseDownX = mousedownCords.X;
            naviobj.mouseDownY = mousedownCords.Y;
            if(this.svgSupport)
            naviobj.GetTrueCoords(evt);
            // if we don't currently have an element in tow, don't do anything
            if (naviobj.dragTarget) {
                // account for the offset between the element's origin and the
                //    exact place we grabbed it... this way, the drag will look more natural
                if (!naviobj.edge && naviobj.dragTarget === naviobj.leftSlider || naviobj.dragTarget === naviobj.rightSlider || naviobj.dragTarget === naviobj.centerSlider) {
                    if (this.svgSupport) {
					if(matched.browser.toLowerCase() == "webkit"||matched.browser.toLowerCase() == "mozilla")
					{
                        var newX = naviobj.mouseDownX - naviobj.grabPoint.x;
                        var newY = naviobj.mouseDownY - naviobj.grabPoint.y;
						}
						else
						{
						var newX = naviobj.trueCoords.x - naviobj.grabPoint.x;
                        var newY = naviobj.trueCoords.y - naviobj.grabPoint.y;
						}
                    }
                    else {
                        var newX = naviobj.mouseDownX;
                        var newY = naviobj.mouseDownY;
                    }
                }
                else {
                    var newX = naviobj.mouseDownX;// naviobj.trueCoords.x - naviobj.leftPadding;
                    //  var newX = naviobj.mouseDownX;// naviobj.trueCoords.x - naviobj.leftPadding;
                    var newY = naviobj.mouseDownY;// naviobj.trueCoords.y;
                }
                naviobj.diff = naviobj.leftSlider.getBoundingClientRect().left - naviobj.rightSlider.getBoundingClientRect().left;
                naviobj.leftdiff = naviobj.rightSlider.getBoundingClientRect().left - this.padding;
                naviobj.rightdiff = naviobj.leftSlider.getBoundingClientRect().left - this.padding;
                if (naviobj.dragTarget.parentNode.id === "leftslider") {
                    naviobj.grabbed = false;
                    if (naviobj.diff >= -1 && naviobj.diff <= 1 && naviobj.switched == false && naviobj.rightdiff<naviobj.newWidth-(2*this.padding)) {
                        naviobj.target = naviobj.rightSlider;
                        naviobj.switched = true;
                        naviobj.edge = true;
                        naviobj._grab(evt);
                        naviobj._drag(evt);
                    }
                    else {
                        if (newX <= this.rightSliderPosition) {
                            naviobj.setSliderPositions(newX, null, null);
                            this.leftSliderPosition = newX;
                            this.leftset = false;
                        }
                        else {
                            naviobj.setSliderPositions(this.rightSliderPosition, null, null);
                            this.leftset = true;
                            this.leftSliderPosition = this.rightSliderPosition;
                        }
                        if (naviobj.diff >= 1 || naviobj.diff <= -1)
                            naviobj.switched = false;
                    }
                    naviobj.left = newX;
                }
                else if (naviobj.dragTarget.parentNode.id === "rightslider") {
                    naviobj.grabbed = false;
                    // if (((this.svgSupport) && naviobj.leftSlider.getCTM().e == naviobj.rightSlider.getCTM().e && newX < naviobj.newWidth-15 && naviobj.rightSlider.getCTM().e == (naviobj.newWidth - naviobj.padding)) || (naviobj.leftSlider.getBoundingClientRect().left == naviobj.rightSlider.getBoundingClientRect().left && newX < naviobj.newWidth - 15 && naviobj.rightSlider.getBoundingClientRect().left == (naviobj.newWidth - naviobj.padding))) {                                                                
                    if (naviobj.diff >= 0 && naviobj.diff <= 1 && naviobj.switched == false && naviobj.leftdiff >0) {
                        naviobj.target = naviobj.leftSlider;
                        naviobj.switched = true;
                        naviobj.edge = true;
                        naviobj._grab(evt);
                        naviobj._drag(evt);
                    }
                    else {
                        //if (newX >= naviobj.leftSlider.getCTM().e)
                        if (newX >= this.leftSliderPosition) { // naviobj.leftSlider.getBoundingClientRect().left - this.leftPadding)
                            naviobj.setSliderPositions(null, null, newX);
                            this.rightSliderPosition = newX;
                        } else {
                            naviobj.setSliderPositions(null, null, this.leftSliderPosition);
                            this.rightSliderPosition = this.leftSliderPosition;
                        }
                        //naviobj.setSliderPositions(null, null, naviobj.leftSlider.getCTM().e);
                        if (naviobj.diff >= 1 || naviobj.diff <= -1)
                            naviobj.switched = false;
                    }
                    naviobj.right = newX;
                }
                else if (naviobj.dragTarget.parentNode.id === "centerslider") {
                    naviobj.grabbed = false;
                    naviobj.setSliderPositions(null, parseFloat(newX), null);
                    if (newX > newX + this.renderer._getAttrVal($(naviobj.dragTarget), 'width'))
                        naviobj.setSliderPositions(null, newX, null);
                    naviobj.center = newX;
                } 
            }
        },


        _drop: function (evt) {
            // if we aren't currently dragging an element, don't do anything
            if (this.dragTarget) {
                // since the element currently being dragged has its pointer-events turned off,
                //    we are afforded the opportunity to find out the element it's being dropped on
                var targetElement = evt.target;

                var naviobj = this;
                // set the global variable to null, so nothing will be dragged until we
                //    grab the next element
                if (naviobj.model.allowSnapping && parseInt(naviobj.leftSlider.getBoundingClientRect().left+2) < parseInt( naviobj.rightSlider.getBoundingClientRect().left)) {
                    naviobj.ismouseup = true;
                    if (naviobj.dragTarget.parentNode.id === "leftslider")
                        var txtPosition = naviobj.left;
                    else if (naviobj.dragTarget.parentNode.id === "rightslider")
                        var txtPosition = naviobj.right;
                    else if (naviobj.dragTarget.parentNode.id === "centerslider")
                        var txtPosition = naviobj.center;
                    var pos = 0;

                    for (var i = 0; i < naviobj._lowerLineLeft.length; i++) {
                        if (i + 1 < naviobj._lowerLineLeft.length && txtPosition > naviobj._lowerLineLeft[i] && txtPosition < naviobj._lowerLineLeft[i + 1]) {
                            naviobj.snapValue = naviobj._lowerLineLeft[i];
                            pos = (naviobj._lowerLineLeft[i + 1] - naviobj.snapValue);
                            if (txtPosition >= (naviobj.snapValue + (pos / 2))) {
                                naviobj.snapValue = naviobj._lowerLineLeft[i + 1];
                                if (naviobj.dragTarget.parentNode.id === "leftslider")
                                    naviobj.setSliderPositions(naviobj._lowerLineLeft[i + 1], null, null);
                                else if (naviobj.dragTarget.parentNode.id === "rightslider")
                                    naviobj.setSliderPositions(null, null, naviobj._lowerLineLeft[i + 1]);
                                else if (naviobj.dragTarget.parentNode.id === "centerslider") {
                                    naviobj.setSliderPositions(null, null, naviobj._lowerLineLeft[i+1] + parseFloat(naviobj.centerSlider.getAttribute("width")));
                                    naviobj.setSliderPositions(naviobj._lowerLineLeft[i + 1], null, null);
                                }

                            }
                            else {
                                naviobj.snapValue = naviobj._lowerLineLeft[i];
                                if (naviobj.dragTarget.parentNode.id === "leftslider")
                                    naviobj.setSliderPositions(naviobj._lowerLineLeft[i], null, null);
                                else if (naviobj.dragTarget.parentNode.id === "rightslider")
                                    naviobj.setSliderPositions(null, null, naviobj._lowerLineLeft[i]);
                                else if (naviobj.dragTarget.parentNode.id === "centerslider") {
                                    naviobj.setSliderPositions(null, null, naviobj._lowerLineLeft[i] + parseFloat(naviobj.centerSlider.getAttribute("width")));
                                    naviobj.setSliderPositions(naviobj._lowerLineLeft[i], null, null);
                                }

                            }
                        }
                        else if (i + 1 === naviobj._lowerLineLeft.length && txtPosition > naviobj._lowerLineLeft[i]) {
                            naviobj.setSliderPositions(null, null,naviobj.newWidth-naviobj.padding);
                        }
                    }
                }
                this.dragTarget = null;
               
                if (this.leftTooltip != undefined && this.model.tooltipSettings.tooltipDisplayMode=="always") {
                    this.leftTooltip.setAttribute('opacity', 1);
                    this.rightTooltip.setAttribute('opacity', 1);
                }
                else if (this.leftTooltip != undefined && this.model.tooltipSettings.tooltipDisplayMode == "ondemand") {
                    this.leftTooltip.setAttribute('opacity', 0);
                    this.rightTooltip.setAttribute('opacity', 0);
                }
                if (this.model.enableDeferredUpdate) {
                    this._calculateSelectedData();
                    if (!naviobj.grabbed) {
                        if (this.zoomp != this.model.zoomPosition || this.zoomf != this.model.zoomFactor) {
                            this._callRangeChange(this);
                            this.zoomp = this.model.zoomPosition;
                            this.zoomf = this.model.zoomFactor;
                        }
                        
                    }
                }
            }
        },

        _callRangeChange: function (args) {
            args._trigger("rangeChanged", args.model);
        },

        mouseup: function (evt) {
            if (this.dragTarget != null) {
                this._drop(evt);
                if (this.dragTarget != null) {
                    this.dragTarget.setAttributeNS(null, 'pointer-events', 'all');
                    this.dragTarget = null;
                }
                if (this.model.enableDeferredUpdate) {
                    this._calculateSelectedData();
                    this._trigger("rangeChanged", this.model);
                  
                }
            }
        },

        GetTrueCoords: function (evt) {
            // find the current zoom level and pan setting, and adjust the reported
            //    mouse position accordingly
            var newScale = this.svgDocument.currentScale;
            var translation = this.svgDocument.currentTranslate;
            var matched = jQuery.uaMatch(navigator.userAgent);
            if (evt.originalEvent.toString() !== "[object TouchEvent]" && matched.browser.toLowerCase() != "msie") {
                this.trueCoords.x = (evt.clientX - translation.x) / newScale;
                this.trueCoords.y = (evt.clientY - translation.y) / newScale;
            }
            else if (matched.browser.toLowerCase() == "msie") {
                this.trueCoords.x = (evt.originalEvent.clientX - translation.x) / newScale;
                this.trueCoords.y = (evt.originalEvent.clientY - translation.y) / newScale;
            }
            else {
                this.trueCoords.x = (evt.originalEvent.touches[0].clientX - translation.x) / newScale;
                this.trueCoords.y = (evt.originalEvent.touches[0].clientY - translation.y) / newScale;
            }
        }
    });

	 ej.datavisualization.RangeNavigator.locale = {};
     ej.datavisualization.RangeNavigator.locale["en-US"] = {

        intervals: {
            quarter: {longQuarters: "Quarter", shortQuarters: "Q"},
            week: {longWeeks: "Week", shortWeeks: "W"}
        }
    };
})(jQuery, Syncfusion);

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
};;