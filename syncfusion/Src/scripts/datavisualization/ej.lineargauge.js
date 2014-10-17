/*!
*  filename: ej.lineargauge.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html Button elements
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
    * @classdesc The Linera gauge  can be easily configured to the DOM element, such as div. you can create a linear gauge with a highly customizable look and feel.
	* @class ejLinearGauge
    * @param {object} options - For seting the Linear gauge  
	* @requires jQuery
	* @requires ej.common.all
    * @requires excanvas.js
	* @example 
	* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	* &lt;script&gt;
    * $('#LinearGauge1').ejLinearGauge(); 	
	* &lt;/script&gt;
    * @remarks
    * excanvas.js need to add for IE8 
	*/
    // ejLinearGauge is the plugin name 
    // "ej.datavisualization.LinearGauge" is "namespace.className" will hold functions and properties

    ej.widget({ "ejLinearGauge": "ej.datavisualization.LinearGauge" /** @lends ejLinearGauge# */}, {
        // widget element will be automatically set in this
        element: null,
        _rootCSS: "e-lineargauge",
        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],

        // default model
        defaults:/** @lends ejLinearGauge# */{
			/**		
			* Specifies the value of the Gauge.
			* @default 0
            * @alias ejLinearGauge#value
			* @type {number}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* $("#LinearGauge1").ejLinearGauge({  size: 5.5});	
	        * &lt;/script&gt;				 
			* @memberof ejLinearGauge
			* @instance
			*/	
            value: 0,
			/**		
			* Specifies the minimum value of Linear gauge.
			* @default 0
            * @alias ejLinearGauge#minimum
			* @type {number}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt; 
			* 	$("#LinearGauge1").ejLinearGauge({ minimum: 10 });  
	        * &lt;/script&gt;	  
			* @memberof ejLinearGauge
			* @instance
			*/
            minimum: 0,
			/**		
			* Specifies the maximum value of Linear gauge.
			* @default 100
            * @alias ejLinearGauge#maximum
			* @type {number}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* 	$("#LinearGauge1").ejLinearGauge({ maximum: 110 }); 
	        * &lt;/script&gt;	   
			* @memberof ejLinearGauge
			* @instance
			*/
            maximum: 100,
			/**		
			* Specifies the width of Linear gauge.
			* @default 150
            * @alias ejLinearGauge#width
			* @type {number}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* 	$("#LinearGauge1").ejLinearGauge({ width: 360 });  
	        * &lt;/script&gt;	 
			* @memberof ejLinearGauge
			* @instance
			*/
            width: 150,
			/**		
			* Specifies the height of Linear gauge.
			* @default 400
            * @alias ejLinearGauge#height
			* @type {number}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt; 
			* 	$("#LinearGauge1").ejLinearGauge({ height: 360 }); 
	        * &lt;/script&gt;	  
			* @memberof ejLinearGauge
			* @instance
			*/
            height: 400,
			/**		
			* Specifies the theme for Linear gauge. See {@link LinearGauge.Themes}
			* @default ej.datavisualization.LinearGauge.flatlight
            * @alias ejLinearGauge#theme
			* @type {enum}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* 	$("#LinearGauge1").ejLinearGauge({ theme: ej.datavisualization.LinearGauge.flatdark });
	        * &lt;/script&gt;	  
			* @memberof ejLinearGauge
			* @instance
			*/
            theme: "flatlight",
			/**		
			* Specifies the orientation for Linear gauge.
			* @default "Vertical"
            * @alias ejLinearGauge#orientation
			* @type {string}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* 	$("#LinearGauge1").ejLinearGauge({ orientation: "Vertical" });   
	        * &lt;/script&gt;	
			* @memberof ejLinearGauge
			* @instance
			*/
            orientation: "Vertical",
			/**		
			* Specifies the pointerGradient1 for Linear gauge.
			* @default null
            * @alias ejLinearGauge#pointerGradient1
			* @type {Object}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt; 
			* 	$("#LinearGauge1").ejLinearGauge({ pointerGradient1: { colorInfo:[{ colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] } });  
	        * &lt;/script&gt;	 
			* @memberof ejLinearGauge
			* @instance
			*/
            pointerGradient1: null,
			/**		
			* Specifies the pointerGradient2 for Linear gauge.
			* @default null
            * @alias ejLinearGauge#pointerGradient2
			* @type {object}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* 	$("#LinearGauge1").ejLinearGauge({ pointerGradient2: { colorInfo:[{ colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] } });  
	        * &lt;/script&gt;	 
			* @memberof ejLinearGauge
			* @instance
			*/
            pointerGradient2: null,
			/**		
			* Specifies the backgroundColor for Linear gauge.
			* @default null
            * @alias ejLinearGauge#backgroundColor
			* @type {string}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* 	$("#LinearGauge1").ejLinearGauge({ backgroundColor: "Red" });   
	        * &lt;/script&gt;	
			* @instance
			*/
            backgroundColor: null,
			/**		
			* Specifies the borderColor for Linear gauge.
			* @default null
            * @alias ejLinearGauge#borderColor
			* @type {string}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* 	$("#LinearGauge1").ejLinearGauge({ borderColor: "Red" });   
	        * &lt;/script&gt;	
			* @memberof ejLinearGauge
			* @instance
			*/
            borderColor: null,
			/**		
			* Specifies the labelColor for Linear gauge.
			* @default null
            * @alias ejLinearGauge#labelColor
			* @type {string}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* 	$("#LinearGauge1").ejLinearGauge({ labelColor: "Red" });   
	        * &lt;/script&gt;	
			* @memberof ejLinearGauge
			* @instance
			*/
            labelColor: null,
			/**		
			* Specifies the tick Color for Linear gauge.
			* @default null
            * @alias ejLinearGauge#tickColor
			* @type {string}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* 	$("#LinearGauge1").ejLinearGauge({ tickColor: "Red" });   
	        * &lt;/script&gt;	
			* @memberof ejLinearGauge
			* @instance
			*/
            tickColor: null,
			/**		
			* Specifies the read only state.
			* @default true
            * @alias ejLinearGauge#readOnly
			* @type {boolean}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* 	$("#LinearGauge1").ejLinearGauge({ readOnly: false });   
	        * &lt;/script&gt;	
			* @memberof ejLinearGauge
			* @instance
			*/
            readOnly: true,
			/**		
			* Specifies the can resize state.
			* @default false
            * @alias ejLinearGauge#enableResize
			* @type {boolean}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* 	$("#LinearGauge1").ejLinearGauge({ enableResize: true });   
	        * &lt;/script&gt;	
			* @memberof ejLinearGauge
			* @instance
			*/
            enableResize: false,
            /**		
		    * Specify frame of linear gauge
		    * @default Object
            * @alias ejLinearGauge#frame
            * @type {object}
            * @example  
            * &lt;div id="LinearGauge1"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;			
    	    * $("#LinearGauge1").ejLinearGauge({ frame: { backgroundImageUrl:null, outerWidth:12, innerWidth:8 } });
            * &lt;/script&gt;
		    * @memberof ejLinearGauge
		    * @instance
		    */
			frame: {
			    /**		
			    * Specifies the frame backgroundimageurl of linear gauge
			    * @default null
                * @alias ejLinearGauge#frame->backgroundImageUrl
			    * @type {string}
			    * @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;  
			    * 	$("#LinearGauge1").ejLinearGauge({ frame:{backgroundImageUrl: "bg.png"} });  
	            * &lt;/script&gt;	
			    * @memberof ejLinearGauge
			    * @instance
			    */
			    backgroundImageUrl: null,
			    /**		
			    * Specifies the frame OuterWidth
			    * @default 12
                * @alias ejLinearGauge#frame->outerWidth
			    * @type {number}
			    * @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
			    * 	$("#LinearGauge1").ejLinearGauge({ frame:{outerWidth: 13 }});   
	            * &lt;/script&gt;	
			    * @instance
			    */
			    outerWidth: 12,
			    /**		
			    * Specifies the frame InnerWidth
			    * @default 8
                * @alias ejLinearGauge#frame->innerWidth
			    * @type {number}
			    * @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
			    * 	$("#LinearGauge1").ejLinearGauge({ frame:{innerWidth: 9}});   
	            * &lt;/script&gt;	
			    * @memberof ejLinearGauge
			    * @instance
			    */
                innerWidth:8
			},
			/**		
			* Specifies the scales
			* @default Object
            * @alias ejLinearGauge#scales
			* @type {Object}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* 	$("#LinearGauge1").ejLinearGauge({ scales: [{}]});   
	        * &lt;/script&gt;	
			* @memberof ejLinearGauge
			* @instance
			*/
            scales: null,
			/**		
			* Specifies the animate state
			* @default true
            * @alias ejLinearGauge#enableAnimation
			* @type {boolean}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* 	$("#LinearGauge1").ejLinearGauge({ enableAnimation: true, value:50});  
	        * &lt;/script&gt;	
			* @memberof ejLinearGauge
			* @instance
			*/
            enableAnimation: true,
			/**		
			* Specifies the animationSpeed
			* @default 500
            * @alias ejLinearGauge#animationSpeed
			* @type {number}
			* @example 
	        * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	        * &lt;script&gt;
			* 	$("#LinearGauge1").ejLinearGauge({ animationSpeed: 1000, value:50});
	        * &lt;/script&gt;	   
			* @memberof ejLinearGauge
			* @instance
			*/
            animationSpeed: 500,
			/**     
			 * Triggers while the ticks are being drawn on the gauge.
			 * @event
			 * @name ejLinearGauge#drawTicks		
             * @param {Object} args.object  returns the object of the gauge.
			 * @param {boolean } args.cancel returns the cancel option value
			 * @param {object} args.context returns the context element
			 * @param {oject} args.position returns the startX and startY of the ticks
 			 * @param {oject} args.Model returns the gauge model
 			 * @param {object} args.scaleElement returns the options of the scale element.
 			 * @param {number} args.scaleIndex returns the scaleIndex to which the tick belongs.
   			 * @param {string} args.style returns the ticks style
             * @param {oject} args.tick returns the ticks style
			 * @param {number} args.tick.angle returns the angle of the tick.
			 * @param {object} args.tick.element returns the current tick element.
			 * @param {number} args.tick.index returns the index of the tick.
			 * @param {number} args.tick.value returns the tick value of the tick.
			 * @param {type} args.type returns the name of the event
			 * @example 
	         * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	         * &lt;script&gt;
             * $("#LinearGauge1").ejLinearGauge({
             *    drawTicks: function (args) {}
             * });
	         * &lt;/script&gt;	
			 * @memberof ejLinearGauge
			 * @instance
			 */
            drawTicks: null,
			/**     
			 * Triggers while the label are being drawn on the gauge.
			 * @event
			 * @name ejLinearGauge#drawLabels		
             * @param {Object} args.object  returns the object of the gauge.
			 * @param {boolean } args.cancel returns the cancel option value
			 * @param {object} args.context returns the context element
			 * @param {object} args.position returns the startX and startY of the label
 			 * @param {object} args.Model returns the gauge model
 			 * @param {object} args.scaleElement returns the options of the scale element.
 			 * @param {number} args.scaleIndex returns the scaleIndex to which the label belongs.
   			 * @param {string} args.style returns the label style
             * @param {object} args.label returns the label style
			 * @param {number} args.label.angle returns the angle of the label.
			 * @param {oject} args.label.element returns the current label element.
			 * @param {number} args.label.index returns the index of the label.
			 * @param {number} args.label.value returns the label value of the label.
			 * @param {type} args.type returns the name of the event
			 * @example 
	         * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	         * &lt;script&gt;
             * $("#LinearGauge1").ejLinearGauge({
             *    drawLabels: function (args) {}
             * });
	         * &lt;/script&gt;	
			 * @memberof ejLinearGauge
			 * @instance
			 */
            drawLabels: null,
			/**     
			 * Triggers while the bar pointer are being drawn on the gauge.
			 * @event
			 * @name ejLinearGauge#drawBarPointers		
             * @param {Object} args.object returns the object of the gauge.
			 * @param {boolean}  args.cancel returns the cancel option value
			 * @param {object} args.context returns the context element
			 * @param {object} args.position returns the startX and startY of the pointer
 			 * @param {object} args.Model returns the gauge model
 			 * @param {object} args.scaleElement returns the options of the scale element.
 			 * @param {number} args.scaleIndex returns the scaleIndex to which the pointer belongs.
   			 * @param {string} args.style returns the pointer style
			 * @param {object} args.barElement returns the current Bar pointer element.
			 * @param {number} args.barPointerIndex returns the index of the bar pointer.
			 * @param {number} args.PointerValue returns the value of the bar pointer.
			 * @param {type} args.type returns the name of the event
			 * @example 
	         * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	         * &lt;script&gt;
             * $("#LinearGauge1").ejLinearGauge({
             *    drawBarPointers: function (args) {}
             * });
	         * &lt;/script&gt;	
			 * @memberof ejLinearGauge
			 * @instance
			 */
            drawBarPointers: null,
			/**     
			 * Triggers while the marker are being drawn on the gauge.
			 * @event
			 * @name ejLinearGauge#drawMarkerPointers		
             * @param {Object} args.object returns the object of the gauge.
			 * @param {boolean}  args.cancel returns the cancel option value
			 * @param {object} args.context returns the context element
			 * @param {object} args.position returns the startX and startY of the pointer
 			 * @param {object} args.Model returns the gauge model
 			 * @param {object} args.scaleElement returns the options of the scale element.
 			 * @param {number} args.scaleIndex returns the scaleIndex to which the pointer belongs.
   			 * @param {string} args.style returns the ticks style
			 * @param {object} args.markerElement returns the current marker pointer element.
			 * @param {number} args.markerPointerIndex returns the index of the marker pointer.
			 * @param {number} args.pointerValue returns the value of the marker pointer.
			 * @param {number} args.pointerAngle returns the angle of the marker pointer.
			 * @param {type} args.type returns the name of the event
			 * @example 
	         * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	         * &lt;script&gt;
             * $("#LinearGauge1").ejLinearGauge({
             *    drawMarkerPointers: function (args) {}
             * });
	         * &lt;/script&gt;	
			 * @memberof ejLinearGauge
			 * @instance
			 */
            drawMarkerPointers: null,
			/**     
			 * Triggers while the range are being drawn on the gauge.
			 * @event
			 * @name ejLinearGauge#drawRange		
             * @param {Object} args.object  returns the object of the gauge.
			 * @param {bolean } args.cancel returns the cancel option value
			 * @param {object} args.context returns the context element
			 * @param {object} args.position returns the startX and startY of the range
 			 * @param {object} args.Model returns the gauge model
 			 * @param {object} args.scaleElement returns the options of the scale element.
 			 * @param {number} args.scaleIndex returns the scaleIndex to which the pointer belongs.
   			 * @param {string} args.style returns the range style
			 * @param {object} args.rangeElement returns the current range element.
			 * @param {number} args.rangeIndex returns the index of the range.
			 * @param {type} args.type returns the name of the event
			 * @example 
	         * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	         * &lt;script&gt;
             * $("#LinearGauge1").ejLinearGauge({
             *    drawRange: function (args) {}
             * });
	         * &lt;/script&gt;	
			 * @memberof ejLinearGauge
			 * @instance
			 */
            drawRange: null,
			/**     
			 * Triggers while the customLabel are being drawn on the gauge.
			 * @event
			 * @name ejLinearGauge#drawCustomLabel		
             * @param {Object} args.object returns the object of the gauge.
			 * @param {boolean } args.cancel returns the cancel option value
			 * @param {object} args.context returns the context element
			 * @param {object} args.position returns the startX and startY of the customLabel
 			 * @param {object} args.Model returns the gauge model
 			 * @param {object} args.scaleElement returns the options of the scale element.
 			 * @param {number} args.scaleIndex returns the scaleIndex to which the pointer belongs.
   			 * @param {object} args.style returns the customLabel style
			 * @param {object} args.customLabelElement returns the current customLabel element.
			 * @param {number} args.customLabelIndex returns the index of the customLabel.
			 * @param {type} args.type returns the name of the event
			 * @example 
	         * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	         * &lt;script&gt;
             * $("#LinearGauge1").ejLinearGauge({
             *    drawCustomLabel: function (args) {}
             * });
	         * &lt;/script&gt;	
			 * @memberof ejLinearGauge
			 * @instance
			 */
            drawCustomLabel: null,
			/**     
			 * Triggers while the Indicator are being drawn on the gauge.
			 * @event
			 * @name ejLinearGauge#drawIndicators		
             * @param {Object} args.object returns the object of the gauge.
			 * @param {boolean } args.cancel returns the cancel option value
			 * @param {object} args.context returns the context element
			 * @param {object} args.position returns the startX and startY of the Indicator
 			 * @param {object} args.Model returns the gauge model
 			 * @param {object} args.scaleElement returns the options of the scale element.
 			 * @param {numer} args.scaleIndex returns the scaleIndex to which the pointer belongs.
   			 * @param {string} args.style returns the Indicator style
			 * @param {object} args.IndicatorElement  returns the current Indicator element.
			 * @param {number} args.IndicatorIndex returns the index of the Indicator.
			 * @param {type} args.type returns the name of the event
			 * @example 
	         * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	         * &lt;script&gt;
             * $("#LinearGauge1").ejLinearGauge({
             *    drawIndicators: function (args) {}
             * });
	         * &lt;/script&gt;	
			 * @memberof ejLinearGauge
			 * @instance
			 */
            drawIndicators: null,
			/**     
			 * Triggers while the gauge start to Load.
			 * @event
			 * @name ejLinearGauge#load		
             * @param {Object} args.object returns the object of the gauge.
			 * @param {boolean } args.cancel returns the cancel option value
 			 * @param {object} args.Model returns the gauge model
 			 * @param {object} args.scaleElement returns the entire scale element.
			 * @param {object} args.context returns the context element
			 * @param {type} args.type returns the name of the event
			 * @example 
	         * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	         * &lt;script&gt;
             * $("#LinearGauge1").ejLinearGauge({
             *    load: function (args) {}
             * });
	         * &lt;/script&gt;	
			 * @memberof ejLinearGauge
			 * @instance
			 */
            load: null,
			/**     
			 * Triggers when the gauge is initialized.
			 * @event
			 * @name ejLinearGauge#init		
             * @param {Object} args.object returns the object of the gauge.
			 * @param {boolean } args.cancel returns the cancel option value
 			 * @param {object} args.Model returns the gauge model
 			 * @param {object} args.scaleElement returns the entire scale element.
			 * @param {object} args.context returns the context element
			 * @param {type} args.type eturns the name of the event
			 * @example 
	         * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	         * &lt;script&gt;
             * $("#LinearGauge1").ejLinearGauge({
             *    init: function (args) {}
             * });
	         * &lt;/script&gt;	
			 * @memberof ejLinearGauge
			 * @instance
			 */
            init: null,
			/**     
			 * Triggers while the rendering of the gauge completed.
			 * @event
			 * @name ejLinearGauge#renderComplete		
             * @param {Object} args.object returns the object of the gauge.
			 * @param {boolean } args.cancel returns the cancel option value
 			 * @param {Object} args.Model returns the gauge model
 			 * @param {Object} args.scaleElement returns the entire scale element.
			 * @param {Object} args.context returns the context element
			 * @param {type} args.type returns the name of the event
			 * @example 
	         * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	         * &lt;script&gt;
             * $("#LinearGauge1").ejLinearGauge({
             *    renderComplete: function (args) {}
             * });
	         * &lt;/script&gt;	
			 * @memberof ejLinearGauge
			 * @instance
			 */
            renderComplete: null,
            /**     
			 * Triggers when the left mouse button is clicked.
			 * @event
			 * @name ejLinearGauge#mouseClick		
             * @param {Object} args.object returns the object of the gauge.
             * @param {boolean} args.cancel returns the cancel option value
             * @param {Object} args.model returns the gauge model
             * @param {Object} args.type returns the name of the event
             * @param {Object} args.scaleElement returns the scale element.
             * @param {number} args.scaleIndex returns the scaleIndex to which the pointer belongs.
             * @param {Object} args.context returns the context element* @param {Object} args.markerpointer returns the context element
             * @param {number} args.markerpointer.index returns the pointer Index
             * @param {Object} args.markerpointer.element returns the pointer element.
             * @param {number} args.markerpointer.value returns the value of the pointer.
             * @param {string} args.style returns the pointer style
             * @param {Object} args.position returns the startX and startY of the pointer.
			 * @example 
             * &lt;div id="LinearGauge1"&gt;
             * &lt;/div&gt; <br> 
             * &lt;script&gt;
             * $("#LinearGauge1").ejLinearGauge({
             *    mouseClick: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejLinearGauge
			 * @instance
			 */
            mouseClick: null,
            /**     
			 * Triggers when clicking and dragging the mouse pointer over the gauge pointer.
			 * @event
			 * @name ejLinearGauge#mouseClickMove		
             * @param {Object} args.object returns the object of the gauge.
             * @param {boolean} args.cancel returns the cancel option value
             * @param {Object} args.model returns the gauge model
             * @param {Object} args.type returns the name of the event
             * @param {Object} args.scaleElement returns the scale element.
             * @param {number} args.scaleIndex returns the scaleIndex to which the pointer belongs.
             * @param {Object} args.context returns the context element
             * @param {Object} args.markerpointer returns the context element
             * @param {number} args.markerpointer.index returns the pointer Index
             * @param {Object} args.markerpointer.element returns the pointer element.
             * @param {number} args.markerpointer.value returns the value of the pointer.
             * @param {string} args.style returns the pointer style
             * @param {Object} args.position returns the startX and startY of the pointer.
			 * @example 
             * &lt;div id="LinearGauge1"&gt;
             * &lt;/div&gt; <br> 
             * &lt;script&gt;
             * $("#LinearGauge1").ejLinearGauge({
             *    mouseClickMove: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejLinearGauge
			 * @instance
			 */
            mouseClickMove: null,
            /**     
			 * Triggers when the mouse click is released.
			 * @event
			 * @name ejLinearGauge#mouseClickUp		
             * @param {Object} args.object returns the object of the gauge.
             * @param {boolean} args.cancel returns the cancel option value
             * @param {Object} args.model returns the gauge model
             * @param {Object} args.type returns the name of the event
             * @param {Object} args.scaleElement returns the scale element.
             * @param {number} args.scaleIndex returns the scaleIndex to which the pointer belongs.
             * @param {Object} args.context returns the context element* @param {Object} args.markerpointer returns the context element
             * @param {number} args.markerpointer.index returns the pointer Index
             * @param {Object} args.markerpointer.element returns the pointer element.
             * @param {number} args.markerpointer.value returns the value of the pointer.
             * @param {string} args.style returns the pointer style
             * @param {Object} args.position returns the startX and startY of the pointer.
			 * @example 
             * &lt;div id="LinearGauge1"&gt;
             * &lt;/div&gt; <br> 
             * &lt;script&gt;
             * $("#LinearGauge1").ejLinearGauge({
             *    mouseClickUp: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejLinearGauge
			 * @instance
			 */
            mouseClickUp: null,
        },
				/**		
				* Specifies the scales.
				* @default object
                * @alias ejLinearGauge#scales
				* @type {object}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{minimum:5}]});
	            * &lt;/script&gt;				
				* @memberof ejLinearGauge
				* @instance
				*/	
        _defaultScaleValues: function () {
            return {
				/**		
				* Specifies the minimum of the Scale.
				* @default null
                * @alias ejLinearGauge#scales->minimum
				* @type {number}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{minimum:10}]});	
	            * &lt;/script&gt;						
				* @memberof ejLinearGauge
				* @instance
				*/	
                minimum: null,
				/**		
				* Specifies the maximum of the Scale.
				* @default null
                * @alias ejLinearGauge#scales->maximum
				* @type {number}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{maximum:110}]});	
	            * &lt;/script&gt;					
				* @memberof ejLinearGauge
				* @instance
				*/	
                maximum: null,
				/**		
				* Specifies the majorIntervalValue of the Scale.
				* @default 10
                * @alias ejLinearGauge#scales->majorIntervalValue
				* @type {number}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt; 
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{majorIntervalValue:10}]});
	            * &lt;/script&gt;						
				* @memberof ejLinearGauge
				* @instance
				*/	
                majorIntervalValue: 10,
				/**		
				* Specifies the minorIntervalValue of the Scale.
				* @default 2
                * @alias ejLinearGauge#scales->minorIntervalValue
				* @type {number}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{minorIntervalValue:1}]});	
	            * &lt;/script&gt;						
				* @memberof ejLinearGauge
				* @instance
				*/	
                minorIntervalValue: 2,
				/**		
				* Specifies the scale Direction of the Scale. See {@link Directions}
				* @default ej.datavisualization.LinearGauge.Directions.CounterClockwise
                * @alias ejLinearGauge#scales->direction
				* @type {enum}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{direction:ej.datavisualization.LinearGauge.Directions.Clockwise}]});	
	            * &lt;/script&gt;					
				* @memberof ejLinearGauge
				* @instance
				*/	
                direction: "counterclockwise",
				/**		
				* Specifies the backgroundColor of the Scale.
				* @default null
                * @alias ejLinearGauge#scales->backgroundColor
				* @type {string}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{backgroundColor:"red"}]});	
	            * &lt;/script&gt;				
				* @memberof ejLinearGauge
				* @instance
				*/	
                backgroundColor: null,
				/**		
				* Specifies the border of the Scale.
				* @default Object
                * @alias ejLinearGauge#scales->border
				* @type {object}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{border:{color:"red", width:1.5}}]});	
	            * &lt;/script&gt;					
				* @memberof ejLinearGauge
				* @instance
				*/	
                border: {
                    /**		
				    * Specifies the border color of the Scale.
				    * @default null
                    * @alias ejLinearGauge#scales->border->color
				    * @type {string}
				    * @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
				    * 	$("#LinearGauge1").ejLinearGauge({  scales:[{border:{color:"red"}}]});	
	                * &lt;/script&gt;					
				    * @memberof ejLinearGauge
				    * @instance
				    */
                    color: null,
                    /**
				    * Specifies the border width of the Scale.
				    * @default 1.5
                    * @alias ejLinearGauge#scales->border->width
				    * @type {number}
				    * @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
				    * 	$("#LinearGauge1").ejLinearGauge({  scales:[{border:{width:2.5}}]});	
	                * &lt;/script&gt;					
				    * @memberof ejLinearGauge
				    * @instance
				    */
                    width:1.5
                },
				/**		
				* Specifies the opacity of the Scale.
				* @default NaN
                * @alias ejLinearGauge#scales->opacity
				* @type {number}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{opacity:0.2}]});	
	            * &lt;/script&gt;						
				* @memberof ejLinearGauge
				* @instance
				*/	
                opacity: NaN,
				/**		
				* Specifies the scaleBar width.
				* @default 30
                * @alias ejLinearGauge#scales->width
				* @type {number}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{width:25}]});		
	            * &lt;/script&gt;					
				* @memberof ejLinearGauge
				* @instance
				*/	
                width: 30,
				/**		
				* Specifies the shadowOffset.
				* @default 0
                * @alias ejLinearGauge#scales->shadowOffset
				* @type {number}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{shadowOffset:1}]});		
	            * &lt;/script&gt;				
				* @memberof ejLinearGauge
				* @instance
				*/	
                shadowOffset: 0,
				/**		
				* Specifies the scaleBar Length.
				* @default 290
                * @alias ejLinearGauge#scales->length
				* @type {number}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{length:300}]});
	            * &lt;/script&gt;						
				* @memberof ejLinearGauge
				* @instance
				*/	
                length: 290,
				/**		
				* Specifies the scaleBar type .See {@link ScaleType}
				* @default ej.datavisualization.LinearGauge.ScaleType.Rectangle
                * @alias ejLinearGauge#scales->type
				* @type {enum}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{type:ej.datavisualization.LinearGauge.ScaleType.Rectangle}]});	
	            * &lt;/script&gt;				
				* @memberof ejLinearGauge
				* @instance
				*/	
                type: "rectangle",
				/**		
				* Specifies the position
				* @default Object
                * @alias ejLinearGauge#scales->position
				* @type {object}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{position:{x:30, y:30}}]});		
	            * &lt;/script&gt;					
				* @instance
				*/	
                position: { 
				/**		
				* Specifies the Horizontal position
				* @default 50
                * @alias ejLinearGauge#scales->position->x
				* @type {number}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{position:{x:30}}]});		
	            * &lt;/script&gt;				
				* @memberof ejLinearGauge
				* @instance
				*/	
				x: 50, 
				/**		
				* Specifies the vertical position
				* @default 50
                * @alias ejLinearGauge#scales->position->y
				* @type {number}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{position:{y:30}}]});		
	            * &lt;/script&gt;					
				* @memberof ejLinearGauge
				* @instance
				*/	
				y: 50 },
				/**		
				* Specifies the showRanges state.
				* @default false
                * @alias ejLinearGauge#scales->showRanges
				* @type {boolean}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showRanges:false}]});	
	            * &lt;/script&gt;					
				* @memberof ejLinearGauge
				* @instance
				*/	
                showRanges: false,
				/**		
				* Specifies the showIndicators state.
				* @default false
                * @alias ejLinearGauge#scales->showIndicators
				* @type {boolean}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showIndicators:true}]});	
	            * &lt;/script&gt;						
				* @memberof ejLinearGauge
				* @instance
				*/	
                showIndicators: false,
				/**		
				* Specifies the showCustomLabels state.
				* @default false
                * @alias ejLinearGauge#scales->showCustomLabels
				* @type {boolean}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt; 
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true}]});	
	            * &lt;/script&gt;					
				* @memberof ejLinearGauge
				* @instance
				*/	
                showCustomLabels: false,
				/**		
				* Specifies the showLabels state.
				* @default true
                * @alias ejLinearGauge#scales->showLabels
				* @type {boolean}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showLabels:false}]});		
	            * &lt;/script&gt;				
				* @memberof ejLinearGauge
				* @instance
				*/	
                showLabels: true,
				/**		
				* Specifies the showTicks state.
				* @default true
                * @alias ejLinearGauge#scales->showTicks
				* @type {boolean}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showTicks:false}]});			
	            * &lt;/script&gt;				
				* @memberof ejLinearGauge
				* @instance
				*/	
                showTicks: true,
				/**		
				* Specifies the showBarPointers state.
				* @default true
                * @alias ejLinearGauge#scales->showBarPointers
				* @type {boolean}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt; 
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showBarPointers:false}]});		
	            * &lt;/script&gt;				
				* @memberof ejLinearGauge
				* @instance
				*/	
                showBarPointers: true,
				/**		
				* Specifies the showMarkerPointers state.
				* @default true
                * @alias ejLinearGauge#scales->showMarkerPointers
				* @type {boolean}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt; 
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showMarkerPointers:false}]});	
	            * &lt;/script&gt;				
				* @memberof ejLinearGauge
				* @instance
				*/	
                showMarkerPointers: true,
				/**		
				* Specifies the ticks in the scale.
				* @default Array
                * @alias ejLinearGauge#scales->ticks
				* @type {Array}
				* @example 
	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	            * &lt;script&gt;
				* 	$("#LinearGauge1").ejLinearGauge({  scales:[{ticks:[{angle:30}]}]});		
	            * &lt;/script&gt;					
				* @memberof ejLinearGauge
				* @instance
				*/	
                ticks: [{
                    /**		
					* Specifies the DistanceFromScale in the tick.
					* @default Object
                    * @alias ejLinearGauge#scales->ticks->distanceFromScale
					* @type {object}
					* @example 
    	            * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{ticks:[{distanceFromScale:{x:10, y:10}}]}]});	
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
					*/                    
                    distanceFromScale: {
                        /**		
					    * Specifies the xDistanceFromScale in the tick.
					    * @default 0
                        * @alias ejLinearGauge#scales->ticks->distanceFromScale->x
					    * @type {number}
					    * @example 
    	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                    * &lt;script&gt;
					    * 	$("#LinearGauge1").ejLinearGauge({  scales:[{ticks:[{distanceFromScale:{x:10}}]}]});	
	                    * &lt;/script&gt;				
					    * @memberof ejLinearGauge
					    * @instance
					    */
                        x: 0,
                        /**		
					    * Specifies the yDistanceFromScale in the tick.
					    * @default 0
                        * @alias ejLinearGauge#scales->ticks->distanceFromScale->y
					    * @type {number}
					    * @example 
	                    * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                    * &lt;script&gt;  
					    * 	$("#LinearGauge1").ejLinearGauge({  scales:[{ticks:[{distanceFromScale:{y:10}}]}]});		
	                    * &lt;/script&gt;			
					    * @memberof ejLinearGauge
					    * @instance
					    */
                        y:0
                    },
					/**		
					* Specifies the angle in the tick.
					* @default 0
                    * @alias ejLinearGauge#scales->ticks->angle
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{ticks:[{angle:20}]}]});				
	                * &lt;/script&gt;			 
					* @memberof ejLinearGauge
					* @instance
					*/	
                    angle: 0,
					/**		
					* Specifies the tick Color in the tick.
					* @default null
                    * @alias ejLinearGauge#scales->ticks->color
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{ticks:[{color:"Blue"}]}]});	
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
					*/	
                    color: null,
					/**		
					* Specifies the tick Style in the tick. See {@link TickType}
					* @default ej.datavisualization.LinearGauge.TickType.MajorInterval
                    * @alias ejLinearGauge#scales->ticks->type
					* @type {enum}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{ticks:[{type:ej.datavisualization.LinearGauge.TickType.MajorInterval}]}]});		
	                * &lt;/script&gt;		
					* @memberof ejLinearGauge
					* @instance
					*/	
                    type: "majorinterval",
					/**		
					* Specifies the tick Placement in the tick. See {@link TickPlacement}
					* @default ej.datavisualization.LinearGauge.TickPlacement.Near
                    * @alias ejLinearGauge#scales->ticks->placement
					* @type {enum}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{ticks:[{placement:ej.datavisualization.LinearGauge.TickPlacement.Far}]}]});		
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
					*/	
                    placement: "near",
					/**		
					* Specifies the opacity in the tick.
					* @default 0
                    * @alias ejLinearGauge#scales->ticks->opacity
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{ticks:[{opacity:0.5}]}]});					 	
	                * &lt;/script&gt;	
					* @memberof ejLinearGauge
					* @instance
					*/	
                    opacity: 0,
					/**		
					* Specifies the tick Height in the tick.
					* @default 10
                    * @alias ejLinearGauge#scales->ticks->height
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{ticks:[{height:8}]}]});		
	                * &lt;/script&gt;	
					* @memberof ejLinearGauge
					* @instance
					*/	
                    height: 10,
					/**		
					* Specifies the tick Width in the tick.
					* @default 3
                    * @alias ejLinearGauge#scales->ticks->width
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{ticks:[{width:4}]}]});			
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
					*/	
                    width: 3
                },
                {              
                    distanceFromScale: {
                        x: 0,
                        y:0
                    },
                    angle: 0,
                    color: null,
                    type: "minorinterval",
                    placement: "near",
                    opacity: 0,
                    height: 5,
                    width: 2
                }],
                /**		
					* Specifies the ranges in the tick.
					* @default Array
                    * @alias ejLinearGauge#scales->ranges
					* @type {Array}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{ranges:[{endWidth:4}]}]});		
	                * &lt;/script&gt;					
					* @memberof ejLinearGauge
					* @instance
					*/
                ranges: [{
                    /**		
					* Specifies the endWidth in the ranges.
					* @default 10
                    * @alias ejLinearGauge#scales->ranges->endWidth
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });	
	                * &lt;/script&gt;					 
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in range, showRanges must be true.
					*/
                    endWidth: 10,
                    /**		
					* Specifies the range Position in the ranges. See {@link RangePlacement}
					* @default ej.datavisualization.LinearGauge.RangePlacement.Center
                    * @alias ejLinearGauge#scales->ranges->placement
					* @type {enum}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649",placement: "center" }] }] });
	                * &lt;/script&gt;	
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in range, showRanges must be true.
					*/
                    placement: "center",
					/**		
					* Specifies the startWidth in the ranges.
					* @default 10
                    * @alias ejLinearGauge#scales->ranges->startWidth
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 20, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });		
	                * &lt;/script&gt;					 
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in range, showRanges must be true.
					*/
                    startWidth: 10,
					/**		
					* Specifies the distanceFromScale in the ranges.
					* @default 0
                    * @alias ejLinearGauge#scales->ranges->distanceFromScale
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649",distanceFromScale: 10 }] }] });	
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in range, showRanges must be true.
					*/
                    distanceFromScale: 0,
					/**		
					* Specifies the endValue in the ranges.
					* @default 60
                    * @alias ejLinearGauge#scales->ranges->endValue
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });					
	                * &lt;/script&gt;		
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in range, showRanges must be true.
					*/
                    endValue: 60,
					/**		
					* Specifies the startValue in the ranges.
					* @default 20
                    * @alias ejLinearGauge#scales->ranges->startValue
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 10, backgroundColor: "#E94649" }] }] });			
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in range, showRanges must be true.
					*/
                    startValue: 20,
					/**		
					* Specifies the range Gradient in the ranges.
					* @default null
                    * @alias ejLinearGauge#scales->ranges->gradients
					* @type {object}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649",gradients:{ colorInfo:[{colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] } }] }] });	
	                * &lt;/script&gt;					
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in range, showRanges must be true.
					*/
                    gradients: null,
					/**		
					* Specifies the backgroundColor in the ranges.
					* @default null
                    * @alias ejLinearGauge#scales->ranges->backgroundColor
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "Green" }] }] });			
	                * &lt;/script&gt;					
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in range, showRanges must be true.
					*/
                    backgroundColor: null,
					/**		
					* Specifies the border in the ranges.
					* @default Object
                    * @alias ejLinearGauge#scales->ranges->border
					* @type {Object}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649", border:{color: "Green", width:1.5} }] }] });		
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in range, showRanges must be true.
					*/
                    border: {
                        /**		
					    * Specifies the border color in the ranges.
					    * @default null
                        * @alias ejLinearGauge#scales->ranges->border->color
					    * @type {string}
					    * @example 
	                    * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                    * &lt;script&gt;
					    * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649", border:{color: "Green"} }] }] });		
	                    * &lt;/script&gt;				
					    * @memberof ejLinearGauge
    					* @instance
                        * @remarks
                        * for reflecting the customization in range, showRanges must be true.
					    */
                        color: null,
                        /**		
					    * Specifies the border width in the ranges.
					    * @default 1.5
                        * @alias ejLinearGauge#scales->ranges->border->width
					    * @type {number}
					    * @example 
	                    * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                    * &lt;script&gt;
					    * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649", border:{width:1.5} }] }] });		
	                    * &lt;/script&gt;				
					    * @memberof ejLinearGauge
					    * @instance
                        * @remarks
                        * for reflecting the customization in range, showRanges must be true.
					    */
                        width:1.5
                    },
					/**		
					* Specifies the opacity in the ranges.
					* @default null
                    * @alias ejLinearGauge#scales->ranges->opacity
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 10, endValue: 60, startValue: 0, backgroundColor: "#E94649",opacity: 0.3 }] }] });				
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in range, showRanges must be true.
					*/
                    opacity: null
                }],
					/**		
					* Specifies the labels.
					* @default Array
                    * @alias ejLinearGauge#scales->labels
					* @type {Array}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{distanceFromScale:{y:1}}]}]});			
	                * &lt;/script&gt;	
					* @memberof ejLinearGauge
					* @instance
					*/
                labels: [{
                    /**		
					* Specifies the DistanceFromScale of labels.
					* @default object
                    * @alias ejLinearGauge#scales->labels->distanceFromScale
					* @type {object}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{distanceFromScale:{x:10, y:10}}]}]});		
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
					*/
                    distanceFromScale: {
                        /**		
					    * Specifies the xDistanceFromScale of labels.
					    * @default -10
                        * @alias ejLinearGauge#scales->labels->distanceFromScale->x
					    * @type {number}
					    * @example 
	                    * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                    * &lt;script&gt;
					    * 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{distanceFromScale:{x:10}}]}]});		
	                    * &lt;/script&gt;				
					    * @memberof ejLinearGauge
					    * @instance
					    */  
                        x: -10,
                        /**		
					    * Specifies the yDistanceFromScale of labels.
					    * @default 0
                        * @alias ejLinearGauge#scales->labels->distanceFromScale->y
					    * @type {number}
					    * @example 
	                    * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                    * &lt;script&gt;  
					    * 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{distanceFromScale:{y:20}}]}]});		
	                    * &lt;/script&gt;	
					    * @memberof ejLinearGauge
					    * @instance
					    */  
                        y:0
                    },
                    /**		
					* Specifies the angle of labels.
					* @default 0
                    * @alias ejLinearGauge#scales->labels->angle
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{angle:30}]}]});				
	                * &lt;/script&gt;	
					* @memberof ejLinearGauge
					* @instance
					*/
                    angle: 0,
					/**		
					* Specifies the font of labels.
					* @default Object
                    * @alias ejLinearGauge#scales->labels->font
					* @type {object}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{font:{size: "11px"}}]}]});		
	                * &lt;/script&gt;		
					* @memberof ejLinearGauge
					* @instance
					*/
                    font: { 
					/**		
					* Specifies the size of font.
					* @default "11px"
                    * @alias ejLinearGauge#scales->labels->font->size
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{font:{size: "18px"}}]}]});		
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
					*/
					size: "11px", 
					/**		
					* Specifies the fontFamily of font.
					* @default "Arial"
                    * @alias ejLinearGauge#scales->labels->font->fontFamily
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{font:{fontFamily: "Segoe UI"}}]}]});		
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
					*/
					fontFamily: "Arial", 
					/**		
					* Specifies the fontStyle of font.See {@link FontStyle}
					* @default ej.datavisualization.LinearGauge.FontStyle.Bold
                    * @alias ejLinearGauge#scales->labels->font->fontStyle
					* @type {enum}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{font:{fontStyle: ej.datavisualization.LinearGauge.FontStyle.Normal}}]}]});		
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
					*/
					fontStyle: "bold" },
					/**		
					* Specifies the textColor of font.
					* @default null
                    * @alias ejLinearGauge#scales->labels->textColor
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* $("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{textColor: "green"}]}]}); 	
	                * &lt;/script&gt;	
					* @memberof ejLinearGauge
					* @instance
					*/
                    textColor: null,
					/**		
					* Specifies the opacity of label.
					* @default 0
                    * @alias ejLinearGauge#scales->labels->opacity
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{opacity: 0.5}]}]});		
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
					*/
                    opacity: 0,
					/**		
					* Specifies the label Style of label. See {@link LabelType}
					* @default ej.datavisualization.LinearGauge.LabelType.Major
                    * @alias ejLinearGauge#scales->labels->type
					* @type {enum}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{type: ej.datavisualization.LinearGauge.LabelType.Major}]}]});	
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
					*/
                    type: "major",
					/**		
					* Specifies the label Placement of label. See {@link LabelPlacement}
					* @default ej.datavisualization.LinearGauge.LabelPlacement.Near
                    * @alias ejLinearGauge#scales->labels->placement
					* @type {enum}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{placement: ej.datavisualization.LinearGauge.LabelPlacement.Far}]}]});	
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
					*/
                    placement: "near",
					/**		
					* need to includeFirstValue.
					* @default true
                    * @alias ejLinearGauge#scales->labels->includeFirstValue
					* @type {boolean}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;  
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{includeFirstValue: false}]}]});		
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
					*/
                    includeFirstValue: true,
					/**		
					* Specifies the unitText of label.  
					* @default ""
                    * @alias ejLinearGauge#scales->labels->unitText
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{unitText: "F"}]}]});	
	                * &lt;/script&gt;					
					* @instance
					*/
					unitText: "",
					/**		
					* Specifies the unitText Position of label.See {@link UnitTextPlacement}
					* @default ej.datavisualization.LinearGauge.UnitTextPlacement.Back
                    * @alias ejLinearGauge#scales->labels->unitTextPlacement
					* @type {enum}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{labels:[{unitText: "F",unitTextPlacement: "front"}]}]});				
	                * &lt;/script&gt;		
					* @memberof ejLinearGauge
					* @instance
					*/
					unitTextPlacement: "back"//["front","back"]
                }],
				    /**		
					* Specifies the markerPointers
					* @default Array
                    * @alias ejLinearGauge#scales->markerPointers
					* @type {Array}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{markerPointers:[{type: "triangle"}]}]});	
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
					*/
                markerPointers: [{
					/**		
					* Specifies the marker Style of marker pointerSee {@link MarkerType}
					* @default ej.datavisualization.LinearGauge.MarkerType.Triangle
                    * @alias ejLinearGauge#scales->markerPointers->type
					* @type {enum}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{markerPointers:[{type: ej.datavisualization.LinearGauge.MarkerType.Rectangle}]}]});		
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
					*/
                    type: "triangle",
					/**		
					* Specifies the pointer Length of marker pointer
					* @default 30
                    * @alias ejLinearGauge#scales->markerPointers->length
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{markerPointers:[{length: 25}]}]});		
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
					*/
                    length: 30,
					/**		
					* Specifies the pointer Placement of marker pointer  See {@link PointerPlacement}
					* @default ej.datavisualization.LinearGauge.PointerPlacement.Far
                    * @alias ejLinearGauge#scales->markerPointers->placement
					* @type {enum}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{markerPointers:[{placement: ej.datavisualization.LinearGauge.PointerPlacement.Near}]}]});		
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
					*/
                    placement: "far",
					/**		
					* Specifies the pointer Gradient of marker pointer
					* @default Object
                    * @alias ejLinearGauge#scales->markerPointers->gradients
					* @type {object}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{markerPointers:[{gradients: { colorInfo:[{ colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] }}]}]});		
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
					*/
                    gradients: null,
					/**		
					* Specifies the distanceFromScale of marker pointer
					* @default 0
                    * @alias ejLinearGauge#scales->markerPointers->distanceFromScale
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{markerPointers:[{distanceFromScale: 2}]}]});		
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
					*/
                    distanceFromScale: 0,
					/**		
					* Specifies the pointer Width of marker pointer
					* @default 30
                    * @alias ejLinearGauge#scales->markerPointers->width
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{markerPointers:[{width: 25}]}]});		
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
					*/
                    width: 30,
					/**		
					* Specifies the value of marker pointer
					* @default null
                    * @alias ejLinearGauge#scales->markerPointers->value
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{markerPointers:[{value: 25}]}]});		
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
					*/
                    value: null,
					/**		
					* Specifies the backgroundColor of marker pointer
					* @default null
                    * @alias ejLinearGauge#scales->markerPointers->backgroundColor
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{markerPointers:[{backgroundColor: "blue"}]}]});		
	                * &lt;/script&gt;	
					* @memberof ejLinearGauge
					* @instance
					*/
                    backgroundColor: null,
					/**		
					* Specifies the border of marker pointer
					* @default Object
                    * @alias ejLinearGauge#scales->markerPointers->border
					* @type {object}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{markerPointers:[{border:{color: "blue", width: 1.5}}]}]});		
	                * &lt;/script&gt;		
					* @memberof ejLinearGauge
					* @instance
					*/
                    border: {
                        /**		
					    * Specifies the border color of marker pointer
					    * @default null
                        * @alias ejLinearGauge#scales->markerPointers->border->color
					    * @type {string}
					    * @example 
    	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                    * &lt;script&gt;
					    * 	$("#LinearGauge1").ejLinearGauge({  scales:[{markerPointers:[{border:{color: "blue", width: 1.5}}]}]});		
    	                * &lt;/script&gt;		
					    * @memberof ejLinearGauge
					    * @instance
					    */
                        color: null,
                        /**		
					    * Specifies the border of marker pointer
					    * @default number
                        * @alias ejLinearGauge#scales->markerPointers->border->width
    					* @type {number}
					    * @example 
	                    * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                    * &lt;script&gt;
    					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{markerPointers:[{border:{color: "blue", width: 1.5}}]}]});		
	                    * &lt;/script&gt;		
					    * @memberof ejLinearGauge
					    * @instance
					    */
                        width:1.5
                    },
					/**		
					* Specifies the opacity of marker pointer
					* @default 1
                    * @alias ejLinearGauge#scales->markerPointers->opacity
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{markerPointers:[{opacity: 0.5}]}]});		
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
					*/
                    opacity: 1
                }],
					/**		
					* Specifies the scaleBar Gradient of bar pointer
					* @default Array
                    * @alias ejLinearGauge#scales->barPointers
					* @type {Array}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{barPointers:[{}]}]});				
	                * &lt;/script&gt;			 
					* @memberof ejLinearGauge
					* @instance
					*/
                barPointers: [{
				    /**		
					* Specifies the scaleBar Gradient of bar pointer
					* @default null
                    * @alias ejLinearGauge#scales->barPointers->gradients
					* @type {object}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{barPointers:[{value:50, gradients: { colorInfo:[{ colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] }}]}]});		
	                * &lt;/script&gt;	
					* @memberof ejLinearGauge
					* @instance
					*/
                    gradients: null,
					/**		
					* Specifies the distanceFromScale of bar pointer
					* @default 0
                    * @alias ejLinearGauge#scales->barPointers->distanceFromScale
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{barPointers:[{value:50, distanceFromScale: 20}]}]});		
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
					*/
                    distanceFromScale: 0,
					/**		
					* Specifies the pointer Width of bar pointer
					* @default width=30
                    * @alias ejLinearGauge#scales->barPointers->width
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{barPointers:[{value:50, width: 25}]}]});		
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
					*/
                    width: 30,
					/**		
					* Specifies the value of bar pointer
					* @default null
                    * @alias ejLinearGauge#scales->barPointers->value
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{barPointers:[{value: 100}]}]});		
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
					*/
                    value: null,
					/**		
					* Specifies the backgroundColor of bar pointer
					* @default null
                    * @alias ejLinearGauge#scales->barPointers->backgroundColor
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{barPointers:[{value:50, backgroundColor: "red"}]}]});		
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
					*/
                    backgroundColor: null,
                    /**		
					* Specifies the border of bar pointer
					* @default Object
                    * @alias ejLinearGauge#scales->barPointers->border
					* @type {object}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{barPointers:[{value:50, border:{color: "red", width:1.5}}]}]});	
	                * &lt;/script&gt;					
					* @memberof ejLinearGauge
					* @instance
					*/
                    border: {
                        /**		
					    * Specifies the border Color of bar pointer
					    * @default null
                        * @alias ejLinearGauge#scales->barPointers->border->color
					    * @type {string}
					    * @example 
	                    * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                    * &lt;script&gt;
					    * 	$("#LinearGauge1").ejLinearGauge({  scales:[{barPointers:[{value:50, border:{color: "red"}}]}]});	
	                    * &lt;/script&gt;					
					    * @memberof ejLinearGauge
					    * @instance
					    */
                        color: null,
                        /**		
					    * Specifies the border Width of bar pointer
					    * @default 1.5
                        * @alias ejLinearGauge#scales->barPointers->border->width
					    * @type {number}
					    * @example 
	                    * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                    * &lt;script&gt;
					    * 	$("#LinearGauge1").ejLinearGauge({  scales:[{barPointers:[{value:50, border:{width: 2}}]}]});		
	                    * &lt;/script&gt;					
					    * @memberof ejLinearGauge
					    * @instance
					    */
                        width:1.5
                    },
					/**		
					* Specifies the opacity of bar pointer
					* @default 1
                    * @alias ejLinearGauge#scales->barPointers->opacity
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{barPointers:[{value:50, opacity: 0.5}]}]}); 	
	                * &lt;/script&gt;	
					* @memberof ejLinearGauge
					* @instance
					*/
                    opacity: 1
                }],
					/**		
					* Specifies the indicator
					* @default Array
                    * @alias ejLinearGauge#scales->indicators
					* @type {Array}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({scales: [{showBarPointers: false, showIndicators: true, length: 310, indicators: [{
                    *    font: {size: "11px",fontFamily: "Arial",fontStyle: "bold"},height: 30,
                    *    type: "rectangle",width: 30,position: {x: 60,y: 70},textLocation: {x: 0,y: 0},
                    *    stateRanges: [{endValue: 60,startValue: 50,backgroundColor: "Red",borderColor: "Green",textColor: null}],
                    *    value: 0, backgroundColor: "Red", border:{color: "Red", width: 1.5}, opacity: NaN}]}]});		
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
                    * @remarks
                    * for reflecting the customization in Indicators, showIndicators must be true.
					* @instance
					*/	
                indicators: [{
					/**		
					* Specifies the font of bar indicators
					* @default Object
                    * @alias ejLinearGauge#scales->indicators->font
					* @type {object}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
                    *$("#LinearGauge1").ejLinearGauge({
                    *   value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *   font: { size: "11px", fontFamily: "Arial", fontStyle: "bold" }, height: 30,
                    *   type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 50, y: 100 },
                    *   stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]});
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					* @instance
					*/
                    font: { 
					/**		
					* Specifies the size of font in bar indicators
					* @default "11px"
                    * @alias ejLinearGauge#scales->indicators->font->size
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
                    *$("#LinearGauge1").ejLinearGauge({
                    *   value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *   font: { size: "20px", fontFamily: "Arial", fontStyle: "bold" }, height: 30,
                    *   type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 50, y: 100 },
                    *   stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]});	
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/
					size: "11px", 
					/**		
					* Specifies the fontFamily of font in bar indicators
					* @default "Arial"
                    * @alias ejLinearGauge#scales->indicators->font->fontFamily
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 	
                    *$("#LinearGauge1").ejLinearGauge({
                    *   value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *   font: { size: "11px", fontFamily: "Segoe UI", fontStyle: "bold" }, height: 30,
                    *   type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 50, y: 100 },
                    *   stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]});			
	                * &lt;/script&gt;	
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/
					fontFamily: "Arial",
					/**		
					* Specifies the fontStyle of font in bar indicators.  See {@link FontStyle}
					* @default ej.datavisualization.LinearGauge.FontStyle.Bold
                    * @alias ejLinearGauge#scales->indicators->font->fontStyle
					* @type {enum}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
                    *$("#LinearGauge1").ejLinearGauge({
                    *   value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *   font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30,
                    *   type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 50, y: 100 },
                    *   stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]});	
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/					
					fontStyle: "bold" },
					/**		
					* Specifies the indicator Height of bar indicators
					* @default 30
                    * @alias ejLinearGauge#scales->indicators->height
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
                    * $("#LinearGauge1").ejLinearGauge({
                    *    value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *    type: "rectangle",height: 50,
                    *    position: { x: 0,y: 0},
                    *    stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red",}],
                    *    border:{width: 1.5}}]}]});	
	                * &lt;/script&gt;					 
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/					
                    height: 30,
					/**		
					* Specifies the indicator Style of font in bar indicators
					* @default ej.datavisualization.LinearGauge.IndicatorType.Rectangle
                    * @alias ejLinearGauge#scales->indicators->type
					* @type {enum}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* $("#LinearGauge1").ejLinearGauge({
                    *    value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *    height: 30,type: "rectangle",width: 30,
                    *    position: { x: 0,y: 0},
                    *    stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red",}],
                    *    border:{width: 1.5}}]}]});
	                * &lt;/script&gt;	
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/	
                    type: "rectangle",
					/**		
					* Specifies the indicator Width in bar indicators
					* @default 30
                    * @alias ejLinearGauge#scales->indicators->width
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* $("#LinearGauge1").ejLinearGauge({
                    *    value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *    type: "rectangle",width: 50,
                    *    position: { x: 0,y: 0},
                    *    stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red",}],
                    *    border:{width: 1.5}}]}]});
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/	
                    width: 30,
						/**		
					* Specifies the position in bar indicators
					* @default Object
                    * @alias ejLinearGauge#scales->indicators->position
					* @type {object}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* $("#LinearGauge1").ejLinearGauge({
                    *    value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *    height: 30,type: "rectangle",width: 30,
                    *    position: { x: 0,y: 0},
                    *    stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red",}],
                    *    border:{width: 1.5}}]}]});		
	                * &lt;/script&gt;		
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/	
                    position: { 
					/**		
					* Specifies the x position in bar indicators
					* @default 0
                    * @alias ejLinearGauge#scales->indicators->position->x
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* $("#LinearGauge1").ejLinearGauge({
                    *    value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *    height: 30,type: "rectangle",width: 30,
                    *    position: { x: 20,y: 0},
                    *    stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red",}],
                    *    border:{width: 1.5}}]}]});		
	                * &lt;/script&gt;		
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/	
					x: 0, 
					/**		
					* Specifies the y position in bar indicators
					* @default 0
                    * @alias ejLinearGauge#scales->indicators->position->y
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* $("#LinearGauge1").ejLinearGauge({
                    *    value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *    height: 30,type: "rectangle",width: 30,
                    *    position: { x: 0,y: 100},
                    *    stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red",}],
                    *    border:{width: 1.5}}]}]});
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/	
					y: 0 },
					/**		
					* Specifies the textLocation in bar indicators
					* @default Object
                    * @alias ejLinearGauge#scales->indicators->textLocation
					* @type {object}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
                    * $("#LinearGauge1").ejLinearGauge({
                    *   value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *   font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30,
                    *   type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 50, y: 100 },
                    *   stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]});	
	                * &lt;/script&gt;		
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/	
                    textLocation: { 
					/**		
					* Specifies the textLocation position in bar indicators
					* @default 0
                    * @alias ejLinearGauge#scales->indicators->textLocation->x
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* $("#LinearGauge1").ejLinearGauge({
                    *   value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *   font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30,
                    *   type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 50, y: 0 },
                    *   stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]});
	                * &lt;/script&gt;		
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/	
					x: 0, 
					/**		
					* Specifies the Y position in bar indicators
					* @default 0
                    * @alias ejLinearGauge#scales->indicators->textLocation->y
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* $("#LinearGauge1").ejLinearGauge({
                    *   value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *   font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30,
                    *   type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 0, y: 100 },
                    *   stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]});
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/	
					y: 0 },
					/**		
					* Specifies the opacity in bar indicators
					* @default Array
                    * @alias ejLinearGauge#scales->indicators->stateRanges
					* @type {Array}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* $("#LinearGauge1").ejLinearGauge({
                    *   value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *   font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30,
                    *   type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 0, y: 100 },
                    *   stateRanges: [{ endValue: 60, startValue: 50, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]});	
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/
                    stateRanges: [{
					/**		
					* Specifies the endValue in bar indicators
					* @default 60
                    * @alias ejLinearGauge#scales->indicators->stateRanges->endValue
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* $("#LinearGauge1").ejLinearGauge({
                    *   value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *   font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30,
                    *   type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 0, y: 100 },
                    *   stateRanges: [{ endValue: 90, startValue: 40, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]});
	                * &lt;/script&gt;		
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/
                    endValue: 60,
					/**		
					* Specifies the startValue in bar indicators
					* @default 50
                    * @alias ejLinearGauge#scales->indicators->stateRanges->startValue
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
                    * $("#LinearGauge1").ejLinearGauge({
                    *   value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *   font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30,
                    *   type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 0, y: 100 },
                    *   stateRanges: [{ endValue: 90, startValue: 40, textColor: "Green", text: "Linear" }],opacity: 0.5}]}]});
	                * &lt;/script&gt;					
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/
                    startValue: 50,
					/**		
					* Specifies the backgroundColor in bar indicators
					* @default null
                    * @alias ejLinearGauge#scales->indicators->stateRanges->backgroundColor
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* $("#LinearGauge1").ejLinearGauge({
                    *    value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *    height: 30,type: "rectangle",width: 30,
                    *    position: { x: 0,y: 0},
                    *    stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Red",borderColor: "Green"}],
                    *    border:{width: 1.5}}]}]});
	                * &lt;/script&gt;	
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/
                    backgroundColor: null,
					/**		
					* Specifies the borderColor in bar indicators
					* @default null
                    * @alias ejLinearGauge#scales->indicators->stateRanges->borderColor
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
                    * $("#LinearGauge1").ejLinearGauge({
                    *    value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *    height: 30,type: "rectangle",width: 30,
                    *    position: { x: 0,y: 0},
                    *    stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red"}],
                    *    border:{width: 1.5}}]}]});
	                * &lt;/script&gt;	
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/
                    borderColor: null,
					/**		
					* Specifies the text in bar indicators
					* @default ""
                    * @alias ejLinearGauge#scales->indicators->stateRanges->text
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* 	$("#LinearGauge1").ejLinearGauge({
                    *   value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *   font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30,
                    *   type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 20, y: 100 },
                    *   stateRanges: [{ endValue: 90, startValue: 40, textColor: "Green", text: "Linear Gauge" }],opacity: 0.5}]}]});	
	                * &lt;/script&gt;					
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/
                    text: "",
					/**		
					* Specifies the textColor in bar indicators
					* @default null
                    * @alias ejLinearGauge#scales->indicators->stateRanges->textColor
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;  
					* $("#LinearGauge1").ejLinearGauge({
                    *   value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *   font: { size: "11px", fontFamily: "Arial", fontStyle: "Normal" }, height: 30,
                    *   type: "text", width: 30, position: { x: 60, y: 100 }, textLocation: { x: 0, y: 100 },
                    *   stateRanges: [{ endValue: 90, startValue: 40, textColor: "Red", text: "Linear" }],opacity: 0.5}]}]});	
	                * &lt;/script&gt;					
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/
                        textColor: null
                    }],
					/**		
					* Specifies the value in bar indicators
					* @default 0
                    * @alias ejLinearGauge#scales->indicators->value
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* $("#LinearGauge1").ejLinearGauge({
                    *    value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *    height: 30,type: "rectangle",width: 30,
                    *    position: { x: 0,y: 0},
                    *    stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red"}],
                    *    value:50}]}]});		
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/
                    value: 0,
					/**		
					* Specifies the backgroundColor in bar indicators
					* @default null
                    * @alias ejLinearGauge#scales->indicators->backgroundColor
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
                    * $("#LinearGauge1").ejLinearGauge({
                    *    value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *    height: 30,type: "rectangle",width: 30,
                    *    position: { x: 0,y: 0},
                    *    stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red"}],
                    *    backgroundColor:"green"}]}]});	
	                * &lt;/script&gt;		
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/
                    backgroundColor: null,
                    /**		
					* Specifies the border in bar indicators
					* @default Object
                    * @alias ejLinearGauge#scales->indicators->border
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
                    * $("#LinearGauge1").ejLinearGauge({
                    *    value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                    *    height: 30,type: "rectangle",width: 30,
                    *    position: { x: 0,y: 0},
                    *    stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red"}],
                    *    border:{color:"red", width: 5}}]}]});		
	                * &lt;/script&gt;			
		    		* @memberof ejLinearGauge
			    	* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/                    
                    border: {
                        /**		
					    * Specifies the border Color in bar indicators
					    * @default null
                        * @alias ejLinearGauge#scales->indicators->border->color
					    * @type {string}
					    * @example 
    	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                    * &lt;script&gt;
                        * $("#LinearGauge1").ejLinearGauge({
                        *    value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                        *    height: 30,type: "rectangle",width: 30,
                        *    position: { x: 0,y: 0},
                        *    stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red"}],
                        *    border:{color: "Red"}}]}]});	
	                    * &lt;/script&gt;		
					    * @memberof ejLinearGauge
					    * @instance
                        * @remarks
                        * for reflecting the customization in Indicator, showIndicators must be true.
					    */
                        color: null,
                        /**		
					    * Specifies the border Width in bar indicators
					    * @default 1.5
                        * @alias ejLinearGauge#scales->indicators->border->width
					    * @type {number}
					    * @example 
	                    * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                    * &lt;script&gt; 
                        * $("#LinearGauge1").ejLinearGauge({
                        *    value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
                        *    height: 30,type: "rectangle",width: 30,
                        *    position: { x: 0,y: 0},
                        *    stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red"}],
                        *    border:{width: 5}}]}]});		
	                    * &lt;/script&gt;			
		    			* @memberof ejLinearGauge
			    		* @instance
                        * @remarks
                        * for reflecting the customization in Indicator, showIndicators must be true.
					    */
                        width:1.5
                    },
					/**		
					* Specifies the opacity in bar indicators
					* @default NaN
                    * @alias ejLinearGauge#scales->indicators->opacity
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
                    * $("#LinearGauge1").ejLinearGauge({ readonly:false, scales: [{showBarPointers: false, showIndicators: true, indicators: [{height: 30,
                    * type: "rectangle",position: {x: 80,y: 110},
                    * stateRanges: [{endValue: 80,startValue: 50,backgroundColor: "Red",borderColor: "Green",textColor: null}],
                    * value: 0, backgroundColor: "Red", border:{color: "Green"}, opacity:0.5}]}]});
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in Indicator, showIndicators must be true.
					*/
                    opacity: NaN
                }],
					/**		
					* Specifies the  customLabel
					* @default Array
                    * @alias ejLinearGauge#scales->customLabels
					* @type {Array}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});
	                * &lt;/script&gt;					
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in customLabel, showCustomLabels must be true.
					*/
                customLabels: [{
					/**		
					* Specifies the font in  customLabels
					* @default Object
                    * @alias ejLinearGauge#scales->customLabels->font
					* @type {object}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in customLabels, showCustomLabels must be true.
					*/
                    font: { 
					/**		
					* Specifies the font size in  customLabels
					* @default "11px"
                    * @alias ejLinearGauge#scales->customLabels->font->size
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in customLabels, showCustomLabels must be true.
					*/
					size: "11px", 
					/**		
					* Specifies the fontFamily in  customLabels
					* @default "Arial"
                    * @alias ejLinearGauge#scales->customLabels->font->fontFamily
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt; 
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in customLabels, showCustomLabels must be true.
					*/
					fontFamily: "Arial", 
					/**		
					* Specifies the fontStyle in  customLabels. See {@link FontStyle}
					* @default ej.datavisualization.LinearGauge.FontStyle.Bold
                    * @alias ejLinearGauge#scales->customLabels->font->fontStyle
					* @type {enum}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});
	                * &lt;/script&gt;	
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in customLabels, showCustomLabels must be true.
					*/
					fontStyle: "bold" },
					/**		
					* Specifies the label Color in  customLabels
					* @default null
                    * @alias ejLinearGauge#scales->customLabels->color
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"yellow", font: { size: "20px",fontFamily: "Arial", fontStyle: "Bold" }}]}]});
	                * &lt;/script&gt;				
					* @instance
                    * @remarks
                    * for reflecting the customization in customLabels, showCustomLabels must be true.
					*/
                    color: null,
					/**		
					* Specifies the opacity in  customLabels
					* @default 0
                    * @alias ejLinearGauge#scales->customLabels->opacity
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606",opacity:0.5, font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});
	                * &lt;/script&gt;					
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in customLabels, showCustomLabels must be true.
					*/
                    opacity: 0,
					/**		
					* Specifies the label Value in  customLabels
					* @default ""
                    * @alias ejLinearGauge#scales->customLabels->value
					* @type {string}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ value:"LinearGauge", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});
	                * &lt;/script&gt;			
					* @instance
                    * @remarks
                    * for reflecting the customization in customLabels, showCustomLabels must be true.
					*/
                    value: "",
					/**		
					* Specifies the textAngle in  customLabels
					* @default 0
                    * @alias ejLinearGauge#scales->customLabels->textAngle
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ textAngle: 20,value:"LinearGauge", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});		
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in customLabels, showCustomLabels must be true.
					*/
                    textAngle: 0,
					/**		
					* Specifies the position in  customLabels
					* @default Object
                    * @alias ejLinearGauge#scales->customLabels->position
					* @type {object}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ value:"LinearGauge", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});		
	                * &lt;/script&gt;		
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in customLabels, showCustomLabels must be true.
					*/
                    position: { 
					/**		
					* Specifies the position x in  customLabels
					* @default 0
                    * @alias ejLinearGauge#scales->customLabels->position->x
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ textAngle: 20,value:"LinearGauge", position:{x:10,y:50}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});		
	                * &lt;/script&gt;			
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in customLabels, showCustomLabels must be true.
					*/
					x: 0, 
					/**		
					* Specifies the y in  customLabels
					* @default 0
                    * @alias ejLinearGauge#scales->customLabels->position->y
					* @type {number}
					* @example 
	                * &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
	                * &lt;script&gt;
					* 	$("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ textAngle: 20,value:"LinearGauge", position:{x:49,y:10}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});		
	                * &lt;/script&gt;				
					* @memberof ejLinearGauge
					* @instance
                    * @remarks
                    * for reflecting the customization in customLabels, showCustomLabels must be true.
					*/
					y: 0 }
                }]
            };
        },

        dataTypes: {
            scales: "data"
        },
        observables: ["value", "minimum", "maximum"],
        value: ej.util.valueFunction("value"),
        minimum: ej.util.valueFunction("minimum"),
        maximum: ej.util.valueFunction("maximum"),

        // constructor function
		/**
         * To initiate the gauge		
		 * @private
         */	 
        _init: function () {
            this._initialize();
            this._trigger("load");
            this._setTheme();
            this._render();
            if (!this.model.readOnly)
                this.wireEvents();
			this._onWindowResize();
        },
		/**
         * Invoke when window size changes 
		 * @private
         */	
		_onWindowResize:function()
        {
            if (this.model.enableResize) {
                proxy = this;
                if (!this.isDevice())
                    this._on($(window), "resize", proxy.resizeCanvas);
                else
                    this._on($(window), "orientationchange", proxy.resizeCanvas);
            }
        },
		/**
         * To check whether it is a device or not
		 * @private
         */	
        isDevice: function () {
            return (/mobile|tablet|android|kindle/i.test(navigator.userAgent.toLowerCase()));
        },
		/**
         * To configure the properties at runtime using SetModel		
		 * @private
         */	 
        _setModel: function (options) {
            var option;
            for (option in options) {
                switch (option) {
                    case "theme": this.model.theme = options[option]; this._init(); break;
                    case "height": this.model.height = options[option]; break;
                    case "width": this.model.width = options[option]; break;
                    case "orientation": this.model.orientation = options[option]; break;
                    case "pointerGradient1": this.model.pointerGradient1 = options[option]; break;
                    case "pointerGradient2": this.model.pointerGradient2 = options[option]; break;
                    case "labelColor": this.model.labelColor = options[option]; break;
                    case "tick": $.extend(this.model.tick,options[option]); break;
                    case "backgroundColor": this.model.backgroundColor = options[option]; break;
                    case "borderColor": this.model.borderColor = options[option]; break;
                    case "frame": $.extend(this.model.frame, options[option]);
                    case "readOnly": this.model.readOnly = options[option]; break;
                    case "value":
                        (this.value() == "") && this.value(0);
                        for (var i = 0; this.model.scales[i] != null; i++) {
                            for (j = 0; this.model.scales[i].markerPointers[j] != null; j++) {
                                this.model.scales[i].markerPointers[j].value = parseFloat(this.value());
                            }
                        }
                        for (var i = 0; this.model.scales[i] != null; i++) {
                            for (j = 0; this.model.scales[i].barPointers[j] != null; j++) {
                                this.model.scales[i].barPointers[j].value = parseFloat(this.value());
                            }
                        }
                        break;
                    case "minimum":
                        (this.minimum() == "") && this.minimum(0);
                        for (var i = 0; this.model.scales[i] != null; i++) {
                            this.model.scales[i].minimum = parseInt(this.minimum());
                        }
                        break;
                    case "maximum":
                        (this.maximum() == "") && this.maximum(0);
                        for (var i = 0; this.model.scales[i] != null; i++) {
                            this.model.scales[i].maximum = parseInt(this.maximum());
                        }
                        break;
                    case "scales":
                        this.model.scales = options[option];
                        this._itemInitialize();
                        break;
                }
            }
            this._render();
        },
		/**
        * destroy the linear gauge
		* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
		* @alias destroy
		* @return jQuery
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br> 
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var linearGaugeobj = $("#LinearGauge1").data("ejLinearGauge");
		* linearGaugeobj.destroy();
		* &lt;/script&gt;
		* @memberof ejLinearGauge
		* @instance
         */	       	 
        _destroy: function () {
            this.activeElement = null;
            this.canvasEl = null;
            this.contextEl = null;
            this.unWireEvents();
            this.element.empty().removeClass("e-widget");
        },
		/**
         * To initialize the gauge object
		 * @private
         */	
        _initialize: function () {
            this.GaugeEl = this.element;
            this.scaleStartX = [];
            this.scaleStartY = [];
            this.isScaleModified = false;
            this.target = this.element[0];
            this._itemInitialize();
            this.Model = this.model;
        },
		/**
         * To render the gauge object
		 * @private
         */
        _render: function () {
            this.initialize();
        },
		/**
         * To Initialize the items
		 * @private
         */
        _itemInitialize: function () {
            var proxy = this;
            if (this.model.scales != null) {
                $.each(this.model.scales, function (index, element) {
                    element = proxy._checkArrayObject(element, index);
                    var obj = proxy._defaultScaleValues();
                    $.extend(obj, element);
                    $.extend(element, obj);
                });
            }
            else {
                this.model.scales = [this._defaultScaleValues()];
            }
        },
		/**
         * To check the each array element to load
		 * @private
         */	
        _checkArrayObject: function (element, initialName) {
            var proxy = this;
            $.each(element, function (name, innerElement) {
                if (innerElement instanceof Array) {
                    innerElement = proxy._checkArrayObject(innerElement, name);
                }
                else if (innerElement != null && typeof innerElement == "object") {
                    var allObjects = proxy._defaultScaleValues();
                    innerElement = proxy._LoadIndividualDefaultValues(innerElement, allObjects, (typeof name === "number") ? initialName : name);
                }
            });
            return element;
        },
		/**
         * To Load individual default values
		 * @private
         */	
        _LoadIndividualDefaultValues: function (obj, allObjects, name) {
            var defaultObj = null;
            var proxy = this;
            $.each(allObjects, function (n, element) {
                if (name == n) {
                    defaultObj = element;
                    return;
                }
            });
            if (defaultObj instanceof Array) defaultObj = defaultObj[0];

            $.each(obj, function (objName, Ele) {
                if (Ele instanceof Array) {
                    Ele = proxy._checkArrayObject(Ele, name);
                }
                else if (Ele != null && typeof Ele == "object") {
                    Ele = proxy._LoadIndividualDefaultValues(Ele, defaultObj, (typeof objName === "number") ? name : objName);
                }
            });

            $.extend(defaultObj, obj);
            $.extend(obj, defaultObj);
            return obj;
        },
		/**
         * To Initialize the gauge
		 * @private
         */
        initialize: function () {
            this._initObject(this);

            if (this.Model.frame.backgroundImageUrl)
                this._drawCustomImage(this, this.Model.frame.backgroundImageUrl);
            else {
                if (this.Model.scales != null)
                    this._drawScales();
            }
        },
		/**
         * To Initialize the object
		 * @private
         */
        _initObject: function (element) {
            this.element.addClass("e-widget");
            element.GaugeEl = element.element;
            for (var i = 0; this.model.scales[i] != null; i++) {
                if (this.model.scales[i].minimum == null)
                    this.model.scales[i].minimum = this.minimum();
                if (this.model.scales[i].maximum == null)
                    this.model.scales[i].maximum = this.maximum();
                for (var j = 0; this.model.scales[i].markerPointers[j] != null; j++) {
                    if (this.model.scales[i].markerPointers[j].value == null)
                        this.model.scales[i].markerPointers[j].value = this.value();
                }
                for (var j = 0; this.model.scales[i].barPointers[j] != null; j++) {
                    if (this.model.scales[i].barPointers[j].value == null)
                        this.model.scales[i].barPointers[j].value = this.value();
                }
            }
            if (element.canvasEl)
                element.canvasEl.remove();
            else
                element.canvasEl = $("<canvas></canvas>");
            element.GaugeEl.append(element.canvasEl);
			element.canvasEl.attr("role", "presentation");
            initialDivWidth = element.GaugeEl.width();
            initialDivHeight = element.GaugeEl.height();
            element.canvasEl[0].setAttribute("width", element.model.width);
            element.canvasEl[0].setAttribute("height", element.model.height);
            element.centerX = element.canvasEl[0].width / 2;
            element.centerY = element.canvasEl[0].height / 2;
            var elem = element.canvasEl[0];
            if (typeof window.G_vmlCanvasManager != "undefined") {
                elem = window.G_vmlCanvasManager.initElement(elem);
            }
            if (!elem || !elem.getContext) {
                return;
            }
            element.contextEl = element.canvasEl[0].getContext("2d");
        },
		/**
         * To draw circular frame
		 * @private
         */
        _drawFrameCircle: function (location, style, element) {
            this._contextOpenPath(style, element);
            element.contextEl.arc(location.startX, location.startY, style.circleRadius, 0, 2 * Math.PI, true);
            this._contextClosePath(style, element);
            if (style.indicatorText)
                element._drawText(location, style);
        },
		/**
         * To draw Rectangular frame
		 * @private
         */
        _drawFrameRectangle: function (location, style, element) {
            this._contextOpenPath(style, element);
            element.contextEl.moveTo(location.startX + style.radius, location.startY);
            element.contextEl.lineTo(location.startX + style.width - style.radius, location.startY);
            element.contextEl.lineTo(location.startX + style.width, location.startY + style.height - style.radius);
            element.contextEl.lineTo(location.startX + style.radius, location.startY + style.height);
            this._contextClosePath(style, element);
            if (style.indicatorText)
                element._drawText(location, style);
        },
		/**
         * To draw Thermometer frame
		 * @private
         */
        _drawFrameThermometer: function (location, style, element) {
            var radius = element.Model.orientation == "Vertical" ? Math.sqrt(style.width * style.width + style.width * style.width) / 2 : Math.sqrt(style.height * style.height + style.height * style.height) / 2; //radius of the bottom circle
            this._contextOpenPath(style, element);
            if (element.Model.orientation == "Vertical") {
                if (element.scaleEl[element.scaleIndex].direction == "counterclockwise") {
                    element.contextEl.arc(location.startX + Math.cos(Math.PI * (45 / 180)) * radius,
                                       location.startY + style.height - Math.sin(Math.PI * (45 / 180)) * radius,
                                       radius, Math.PI * (-45 / 180), Math.PI * (225 / 180), false);
                    element.contextEl.lineTo(location.startX, location.startY + style.width / 2);
                    if (style.topRounded)
                        element.contextEl.arc(location.startX + style.width / 2, location.startY + style.width / 2, style.width / 2, -Math.PI, 0, false);
                    else
                        element.contextEl.lineTo(location.startX + style.width, location.startY + style.width / 2);
                }
                else {
                    element.contextEl.arc(location.startX + Math.cos(Math.PI * (45 / 180)) * radius,
                                       location.startY + Math.sin(Math.PI * (45 / 180)) * radius,
                                       radius, Math.PI * (45 / 180), Math.PI * (-225 / 180), true);
                    element.contextEl.lineTo(location.startX, location.startY + style.height - style.width / 2);
                    if (style.topRounded)
                        element.contextEl.arc(location.startX + style.width / 2, location.startY + style.height - style.width / 2, style.width / 2, -Math.PI, 0, true);
                    else
                        element.contextEl.lineTo(location.startX + style.width, location.startY + style.height - style.width / 2);
                }
            }
            else {
                if (element.scaleEl[element.scaleIndex].direction == "counterclockwise") {
                    element.contextEl.arc(location.startX + style.width - radius / 4 - Math.cos(Math.PI * (45 / 180)) * radius,
                               location.startY + Math.sin(Math.PI * (45 / 180)) * radius,
                               radius, Math.PI * (135 / 180), Math.PI * (225 / 180), true);
                    element.contextEl.lineTo(location.startX + style.height / 2, location.startY);
                    if (style.topRounded)
                        element.contextEl.arc(location.startX + style.height / 2, location.startY + style.height / 2, style.height / 2, Math.PI * (270 / 180), Math.PI * (90 / 180), true);
                    else
                        element.contextEl.lineTo(location.startX + style.height / 2, location.startY + style.height);

                }
                else {
                    element.contextEl.arc(location.startX + radius / 4 + Math.cos(Math.PI * (45 / 180)) * radius,
                               location.startY + Math.sin(Math.PI * (45 / 180)) * radius,
                               radius, Math.PI * (45 / 180), Math.PI * (315 / 180), false);
                    element.contextEl.lineTo(location.startX + style.width - style.height / 2, location.startY);
                    if (style.topRounded)
                        element.contextEl.arc(location.startX + style.width - style.height / 2, location.startY + style.height / 2, style.height / 2, Math.PI * (270 / 180), Math.PI * (90 / 180), false);
                    else
                        element.contextEl.lineTo(location.startX + style.width - style.height / 2, location.startY + style.height);
                }
            }
            this._contextClosePath(style, element);
        },
		/**
         * To draw RoundedRectangle frame
		 * @private
         */
        _drawFrameRoundedRectangle: function (location, style, element) {
            this._contextOpenPath(style, element);
            element.contextEl.moveTo(location.startX + style.radius, location.startY);
            element.contextEl.lineTo(location.startX + style.width - style.radius, location.startY);
            element.contextEl.quadraticCurveTo(location.startX + style.width, location.startY, location.startX + style.width, location.startY + style.radius);
            element.contextEl.lineTo(location.startX + style.width, location.startY + style.height - style.radius);
            element.contextEl.quadraticCurveTo(location.startX + style.width, location.startY + style.height, location.startX + style.width - style.radius, location.startY + style.height);
            element.contextEl.lineTo(location.startX + style.radius, location.startY + style.height);
            element.contextEl.quadraticCurveTo(location.startX, location.startY + style.height, location.startX, location.startY + style.height - style.radius);
            element.contextEl.lineTo(location.startX, location.startY + style.radius);
            element.contextEl.quadraticCurveTo(location.startX, location.startY, location.startX + style.radius, location.startY);
            this._contextClosePath(style, element);
            if (style.indicatorText)
                this._drawText(location, style);
        },
		/**
         * To styling context open path
		 * @private
         */
        _contextOpenPath: function (style, element) {
            element.contextEl.save();
            element.contextEl.beginPath();
            if (style.strokeStyle)
                element.contextEl.strokeStyle = style.strokeStyle;
            if (style.opacity != undefined)
                element.contextEl.globalAlpha = style.opacity;
            if (style.lineWidth)
                element.contextEl.lineWidth = style.lineWidth;
            if (style.fillStyle)
                element.contextEl.fillStyle = style.fillStyle;
        },
		/**
         * To styling context Close path
		 * @private
         */
        _contextClosePath: function (style, element) {
            element.contextEl.closePath();
            if (style.isFill)
                element.contextEl.fill();
            if (style.isStroke)
                element.contextEl.stroke();
            element.contextEl.restore();
        },
		/**
         * To Draw scales
		 * @private
         */
        _drawScales: function () {
            var self = this;
            this.scaleEl = this.Model.scales;
            this.contextEl.save();
            this.contextEl.translate(this.Model.frame.outerWidth + this.Model.frame.innerWidth, this.Model.frame.outerWidth + this.Model.frame.innerWidth);
            $.each(this.Model.scales, function (index, element) {
                self.scaleIndex = index;
                self._setScaleCordinates(element, element.type);
            });
            this._setTicks();
            this._setLabels();
            this._setRange();
            this._setCustomLabel();
            this._setBarPointers();
            this._setMarkerPointers();
            this._setIndicators();
            $.each(this.Model.scales, function (ind, elemt) {
                if (elemt.showBarPointers) {
                    if (elemt.barPointers.length > 1)
                        self.model.enableAnimation = false;
                }
                if (elemt.showMarkerPointers) {
                    if (elemt.markerPointers.length > 1)
                        self.model.enableAnimation = false;
                }
            });
            if (!this.contextEl.putImageData)
                this.model.enableAnimation = false;
            if (this.model.animationSpeed != null && this.model.animationSpeed > 0) {
                var delay = this.model.animationSpeed / 25;
                if (delay >= 0) {
                    if (this.model.enableAnimation) {
                        this._onAnimate(delay);
                    }
                }
            }
        },
		/**
         * To set ticks coordinates
		 * @private
         */
        _setTicks: function () {
            var self = this;
            $.each(this.Model.scales, function (index, element) {
                if (element.showTicks) {
                    self.scaleIndex = index;
                    if (element.ticks != null) {
                        self.tickEl = element.ticks;
                        $.each(element.ticks, function (index, element) {
                            self.tickIndex = index;
                            self._setTicksCordinates(element, index);
                        });
                    }
                }
            });
        },
		/**
         * To set Label coordinates
		 * @private
         */
        _setLabels: function () {
            var self = this;
            $.each(this.Model.scales, function (index, element) {
                if (element.showLabels) {
                    self.scaleIndex = index;
                    if (element.labels != null) {
                        self.labelEl = element.labels;
                        $.each(element.labels, function (index, element) {
                            self.labelIndex = index;
                            self._setLabelCordinates(element, index);
                        });
                    }
                }
            });
        },
		/**
         * To set Indicator coordinates
		 * @private
         */
        _setIndicators: function () {
            var self = this;
            $.each(this.Model.scales, function (index, element) {
                self.scaleIndex = index;
                if (element.indicators != null && element.showIndicators) {
                    self.indicatorEl = element.indicators;
                    $.each(element.indicators, function (index, element) {
                        self.indicatorIndex = index;
                        self._drawIndicator(index, element);
                    });
                }
            });
        },
		/**
         * To set Bar Pointer coordinates
		 * @private
         */
        _setBarPointers: function () {
            var self = this;
            $.each(this.Model.scales, function (index, element) {
                if (element.showBarPointers) {
                    self.scaleIndex = index;
                    if (element.barPointers != null) {
                        self.barPointerEl = element.barPointers;
                        $.each(element.barPointers, function (index, element) {
                            self.barPointerIndex = index;
                            self._drawScaleBarPointer(element, index);
                        });
                    }
                }
            });
        },
		/**
         * To set Marker Pointer coordinates
		 * @private
         */
        _setMarkerPointers: function () {
            var self = this;
            $.each(this.Model.scales, function (index, element) {
                if (element.showMarkerPointers) {
                    self.scaleIndex = index;
                    if (element.markerPointers != null) {
                        self.markerPointerEl = element.markerPointers;
                        $.each(element.markerPointers, function (index, element) {
                            self.markerPointerIndex = index;
                            self._drawMarkerPointer(element, index);
							self.canvasEl.attr("aria-label", self.model.scales[self.scaleIndex].markerPointers[self.markerPointerIndex].value);
                        });
                    }
                }
            });
        },
		/**
         * To set delay value
		 * @private
         */
        _onAnimate: function (delay) {
            var self = this, timer, timer1;
            var currentValue = self.model.scales[0].minimum;
            var barPointerValue = self.model.scales[0].barPointers[0].value;
            var markerPointerValue = self.model.scales[0].markerPointers[0].value;
            timer = setInterval(function pointerchan() {
                if (barPointerValue > currentValue) {
                    currentValue = currentValue + 1;
                    self.setBarPointerValue(0, 0, currentValue);
                }
                else if (currentValue == barPointerValue) {
                    window.clearInterval(timer);
                }
            }, delay);
            timer1 = setInterval(function pointerchan() {
                if (markerPointerValue > currentValue) {
                    currentValue = currentValue + 1;
                    self.setPointerValue(0, 0, currentValue);
                }
                else if (currentValue == markerPointerValue) {
                    window.clearInterval(timer1);
                }
            }, delay);
        },
		/**
         * To set range coordinates
		 * @private
         */
        _setRange: function () {
            var self = this;
            $.each(this.Model.scales, function (index, element) {
                self.scaleIndex = index;
                if (element.ranges != null && element.showRanges) {
                    self.rangeEl = element.ranges;
                    $.each(element.ranges, function (index, element) {
                        self.rangeIndex = index;
                        self._drawRange(element);
                    });
                }
            });
        },
		/**
         * To set CustomLabel coordinates
		 * @private
         */
        _setCustomLabel: function () {
            var self = this;
            $.each(this.Model.scales, function (index, element) {
                self.scaleIndex = index;
                if (element.customLabels != null && element.showCustomLabels) {
                    self.customLabelEl = element.customLabels;
                    $.each(element.customLabels, function (index, element) {
                        self.customLabelIndex = index;
                        self._setCustomLabelCordinates(index, element);
                    });
                }
            });
        },
		/**
         * To set ScaleCordinates
		 * @private
         */
        _setScaleCordinates: function (element, scaleStyle) {
            var bottomRadius, location, style, radius;
            this.opacity = 1;
            this.bottomRadius = Math.sqrt(element.width * element.width + element.width * element.width) / 2;

            this.bounds = {
                height: this.canvasEl[0].height - 2 * (this.Model.frame.outerWidth + this.Model.frame.innerWidth),
                width: this.canvasEl[0].width - 2 * (this.Model.frame.outerWidth + this.Model.frame.innerWidth)
            };
            if (this.Model.orientation == "Vertical") {
                this.scaleStartX[this.scaleIndex] = (this.bounds.width - element.width) * ((element.position.x) / 100);
                this.scaleStartY[this.scaleIndex] = (this.bounds.height - element.length) * ((element.position.y) / 100);
            }
            else {
                this.scaleStartX[this.scaleIndex] = (this.bounds.width - element.length) * ((element.position.x) / 100);
                this.scaleStartY[this.scaleIndex] = (this.bounds.height - element.width) * ((element.position.y) / 100);
            }
            radius = scaleStyle == "roundedrectangle" ? 5 : 0;
            location = { "startX": this.scaleStartX[this.scaleIndex], "startY": this.scaleStartY[this.scaleIndex] };
            style = {
                "width": this.Model.orientation == "Vertical" ? element.width : element.length, "isStroke": true,
                "topRounded": true,
                "fillStyle": element.backgroundColor ? ((element.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.backgroundColor)) : ((this.Model.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, this.Model.backgroundColor)),
                "lineWidth": element.border.width,
                "radius": radius,
                "height": this.Model.orientation == "Vertical" ? element.length : element.width,
                "isStroke": true,
                "isFill": true,
                "strokeStyle": element.border.color ? ((element.border.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.border.color)) : ((this.Model.borderColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, this.Model.borderColor))
            };
            this.minimum(element.minimum);
            this.maximum(element.maximum);
            if (element.shadowOffset) {
                this.contextEl.shadowBlur = element.shadowOffset;
                this.contextEl.shadowColor = (style.fillStyle == "transparent") ? "rgba(0,0,0,0)" : style.fillStyle;
            }
            this._drawFrame(scaleStyle, location, style);
            if (this.scaleEl[this.scaleIndex].type == "thermometer" && !this.isScaleModified) {
                this._modifyWidth();
                this.isScaleModified = true;
            }
            if (this.contextEl.getImageData)
                this.scaleImage = this.contextEl.getImageData(0, 0, this.Model.width, this.Model.height);
        },
		/**
         * To set Ticks Cordinates
		 * @private
         */
        _setTicksCordinates: function (element, index) {
            var location, style, staticPosition, height, tempVal, lineChangePosition, interval;
            if (this.scaleEl[this.scaleIndex].majorIntervalValue > this.scaleEl[this.scaleIndex].minorIntervalValue) {
                interval = element.type == "majorinterval" ? this.scaleEl[this.scaleIndex].majorIntervalValue : this.scaleEl[this.scaleIndex].minorIntervalValue;
                if (element.placement == "near") {
                    staticPosition = this.Model.orientation == "Vertical" ? this.scaleStartX[this.scaleIndex] : this.scaleStartY[this.scaleIndex];
                }
                else if (element.placement == "far") {
                    staticPosition = this.Model.orientation == "Vertical" ? this.scaleStartX[this.scaleIndex] + this.scaleEl[this.scaleIndex].width : this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width;
                }
                else if (element.placement == "center") {
                    staticPosition = this.Model.orientation == "Vertical" ? this.scaleStartX[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 : this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2;
                }
                height = element.placement == "near" ? -element.height : element.height;
                for (var value = this.scaleEl[this.scaleIndex].maximum; value >= this.scaleEl[this.scaleIndex].minimum; value -= interval) {
                    if (interval == this.scaleEl[this.scaleIndex].minorIntervalValue && value % this.scaleEl[this.scaleIndex].majorIntervalValue != 0 || interval == this.scaleEl[this.scaleIndex].majorIntervalValue) {
                        lineChangePosition = this._getClockwiseLinePosition(value);
                        this.location = {
                            "lineChangePosition": lineChangePosition + (this.Model.orientation == "Horizontal" ? element.distanceFromScale.x : (element.distanceFromScale.y)),
                            "lineStaticPosition": staticPosition + (this.Model.orientation == "Horizontal" ? element.distanceFromScale.y : (element.distanceFromScale.x))
                        };
                        this.style = {
                            "lineHeight": height,
                            "angle": this.Model.orientation == "Vertical" ? element.angle : element.angle + 270,
                            "tickShape": element.TickShape,
                            "strokeStyle": element.color ? ((element.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.color)) : ((this.Model.tickColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, this.Model.tickColor)),
                            "lineWidth": element.width
                        }
                        if (this.Model.drawTicks)
                            this._onDrawTicks(this.Model.orientation == "Vertical" ? element.angle : element.angle + 270, value);
                        this._drawTickMark(this.location, this.style);
                    }
                }

                if (this.contextEl.getImageData)
                    this.tickImage = this.contextEl.getImageData(0, 0, this.Model.width, this.Model.height);
            }
        },
		/**
         * To draw Ticks Mark
		 * @private
         */
        _drawTickMark: function (location, style) {
            var length = this.Model.orientation == "Vertical" ? style.lineHeight - location.lineStaticPosition : location.lineStaticPosition;
            this.contextEl.beginPath();
            this.contextEl.save();
            this.contextEl.lineWidth = style.lineWidth;
            this.contextEl.strokeStyle = style.strokeStyle;
            if (this.Model.orientation == "Vertical")
                this.contextEl.translate(location.lineStaticPosition, location.lineChangePosition);
            else
                this.contextEl.translate(location.lineChangePosition, location.lineStaticPosition);
            this.contextEl.moveTo(0, 0);
            if (this.scaleEl[this.scaleIndex].direction == "clockwise")
                this.contextEl.rotate((Math.PI * (style.angle / 180)));
            else
                this.contextEl.rotate(-(Math.PI * (style.angle / 180)));
            this.contextEl.lineTo(style.lineHeight, 0);
            this.contextEl.stroke();
            this.contextEl.restore();
            this.contextEl.closePath();
        },
		/**
         * To manupulate decimal values
		 * @private
         */
        _addDecimal: function (_value, _interval) {
            var value = _value.toString();
            var interval = _interval.toString();
            var vDecimal;
            var iDecimal;
            if (value.indexOf('.') > -1)
                vDecimal = value.length - value.indexOf('.') - 1;
            else
                vDecimal = 0;
            if (interval.indexOf('.') > -1)
                iDecimal = interval.length - interval.indexOf('.') - 1;
            else
                iDecimal = 0;
            var Decimal = vDecimal > iDecimal ? vDecimal : iDecimal
            var correctValue = (_value * Math.pow(10, Decimal) + _interval * Math.pow(10, Decimal)) / Math.pow(10, Decimal);
            return correctValue;
        },
		/**
         * To set label coordinates
		 * @private
         */
        _setLabelCordinates: function (element, index) {

            var location, style, xDistanceFromScale, minimumMeet, yDistanceFromScale, staticPosition, tempVal, height, lineChangePosition, textValue, labelLocation, labelStyle, interval;
            if (this.scaleEl[this.scaleIndex].majorIntervalValue > this.scaleEl[this.scaleIndex].minorIntervalValue) {

                if (this.Model.orientation == "Vertical") {
                    xDistanceFromScale = element.distanceFromScale.x;
                    yDistanceFromScale = element.distanceFromScale.y;
                }
                else {
                    xDistanceFromScale = element.distanceFromScale.y;
                    yDistanceFromScale = element.distanceFromScale.x;
                }
                interval = element.type == "major" ? this.scaleEl[this.scaleIndex].majorIntervalValue : this.scaleEl[this.scaleIndex].minorIntervalValue;
                if (element.placement == "near") {
                    staticPosition = this.Model.orientation == "Vertical" ? this.scaleStartX[this.scaleIndex] - this.scaleEl[this.scaleIndex].border.width / 2 : this.scaleStartY[this.scaleIndex] - this.scaleEl[this.scaleIndex].border.width - 5;
                    this.contextEl.textAlign = this.Model.orientation == "Vertical" ? "right" : "center";
                }
                else if (element.placement == "far") {
                    staticPosition = this.Model.orientation == "Vertical" ? this.scaleStartX[this.scaleIndex] + this.scaleEl[this.scaleIndex].width + this.scaleEl[this.scaleIndex].border.width / 2 : this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width + this.scaleEl[this.scaleIndex].border.width + 5;
                    this.contextEl.textAlign = this.Model.orientation == "Vertical" ? "left" : "center"
                }
                else {
                    this.contextEl.textAlign = "center";
                    staticPosition = this.Model.orientation == "Vertical" ? this.scaleStartX[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 + this.scaleEl[this.scaleIndex].border.width / 2 : this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 + this.scaleEl[this.scaleIndex].border.width / 2;
                }
                for (var value = this.scaleEl[this.scaleIndex].minimum; value <= this.scaleEl[this.scaleIndex].maximum; value = this._addDecimal(value, interval)) {
                    if (interval == this.scaleEl[this.scaleIndex].minorIntervalValue && value % this.scaleEl[this.scaleIndex].majorIntervalValue != 0 || interval == this.scaleEl[this.scaleIndex].majorIntervalValue) {
                        lineChangePosition = this.scaleEl[this.scaleIndex].direction == "counterclockwise" ? this._getCounterClockwiseLinePosition(value) : this._getClockwiseLinePosition(value);
                        this.labelValue = value;
                        this.location = {
                            "lineChangePosition": lineChangePosition + (yDistanceFromScale),
                            "lineStaticPosition": staticPosition + (xDistanceFromScale)
                        };
                        this.style = {
                            "angle": this.Model.orientation == "Vertical" ? element.angle : element.angle + 270,
                            "fillStyle": element.textColor ? ((element.textColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.textColor)) : ((this.Model.labelColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, this.Model.labelColor)), "opacity": isNaN(element.opacity) ? 1 : element.opacity,
                            "font": this._getFontString(this, element.font),
                            "textValue": this.labelValue
                        };

                        if (this.Model.drawLabels)
                            this._onDrawLabels(this.Model.orientation == "Vertical" ? element.angle : element.angle + 270);
                        this._drawLabel(this.location, this.style,false);
                    }
                }
            }

            if (this.contextEl.getImageData)
                this.labelImage = this.contextEl.getImageData(0, 0, this.Model.width, this.Model.height);

        },
		/**
         * To draw Label
		 * @private
         */
        _drawLabel: function (location, style, isCustomLabel) {
            this.contextEl.beginPath();
            this.contextEl.save();
            this.contextEl.textBaseline = "middle";
            this.contextEl.fillStyle = style.fillStyle;
            this.contextEl.font = style.font;
            if (style.opacity)
                this.contextEl.globalAlpha = style.opacity;
            if (this.Model.orientation == "Vertical")
                this.contextEl.translate(location.lineStaticPosition, location.lineChangePosition);
            else
                this.contextEl.translate(location.lineChangePosition, location.lineStaticPosition);
            this.contextEl.moveTo(0, 0);
            if (this.scaleEl[this.scaleIndex].direction == "clockwise")
                this.contextEl.rotate((Math.PI * (style.angle / 180)));
            else
                this.contextEl.rotate(-(Math.PI * (style.angle / 180)));
			if(!ej.isNullOrUndefined(isCustomLabel) && !isCustomLabel){
			    var textPostion = this.model.scales[this.scaleIndex].labels[this.labelIndex].unitTextPlacement;
            if (!ej.isNullOrUndefined(textPostion) && textPostion.toString() == "back")
                style.textValue = style.textValue + this.model.scales[this.scaleIndex].labels[this.labelIndex].unitText;
            else if (!ej.isNullOrUndefined(textPostion) && textPostion.toString() == "front")
                style.textValue = this.model.scales[this.scaleIndex].labels[this.labelIndex].unitText + style.textValue;
            }
            this.contextEl.fillText(style.textValue, 0, 0);
            this.contextEl.fill();
            this.contextEl.restore();

        },
		/**
         * To draw Scale bar pointer
		 * @private
         */
        _drawScaleBarPointer: function (element, index) {
            element.value = element.value > this.scaleEl[this.scaleIndex].maximum ? this.scaleEl[this.scaleIndex].maximum : element.value;
            element.value = element.value < this.scaleEl[this.scaleIndex].minimum ? this.scaleEl[this.scaleIndex].minimum : element.value;
            var grd, location, style, radius, height, width, startY, backgroundColor, startX, gradients;
            gradients = [{ "ColorStop": 0, "Color": (this.Model.pointerGradient1 == "transparent") ? "rgba(0,0,0,0)" : this.Model.pointerGradient1 }, { "ColorStop": 1, "Color": (this.Model.pointerGradient2 == "transparent") ? "rgba(0,0,0,0)" : this.Model.pointerGradient2}];
            radius = this.scaleEl[this.scaleIndex].type == "roundedrectangle" ? 5 : 0;
            if (this.scaleEl[this.scaleIndex].direction == "clockwise") {
                lineYPosition = this._getClockwiseLinePosition(element.value);
                if (this.scaleEl[this.scaleIndex].type == "thermometer" && this.isScaleModified) {
                    this._restoreWidth();
                    this.isModify = true;
                }
                if (this.Model.orientation == "Vertical") {
                    startX = this.scaleStartX[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 - element.width / 2 + element.distanceFromScale;
                    grd = this.contextEl.createLinearGradient(startX, this.scaleStartY[this.scaleIndex], startX + element.width, this.scaleStartY[this.scaleIndex]);
                }
                else {
                    startX = this.scaleStartX[this.scaleIndex];
                    grd = this.contextEl.createLinearGradient(startX, this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 - element.width / 2, startX, this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 + element.width / 2);
                }
            }
            else {
                lineYPosition = this._getCounterClockwiseLinePosition(element.value);
                if (this.scaleEl[this.scaleIndex].type == "thermometer" && this.isScaleModified) {
                    this._restoreWidth();
                    this.isModify = true;
                }
                if (this.Model.orientation == "Vertical") {
                    startX = this.scaleStartX[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 - element.width / 2 + element.distanceFromScale;
                    grd = this.contextEl.createLinearGradient(startX, this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].length - lineYPosition, startX + element.width, this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].length - lineYPosition);
                }
                else {
                    startX = this.scaleEl[this.scaleIndex].type == "thermometer" ? lineYPosition - this.scaleEl[this.scaleIndex].width / 2 - this.scaleEl[this.scaleIndex].border.width / 2 : lineYPosition - this.scaleEl[this.scaleIndex].border.width / 2;
                    grd = this.contextEl.createLinearGradient(startX, this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 - element.width / 2, startX, this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 + element.width / 2);
                }
            }
            if (element.backgroundColor)
                backgroundColor = ((element.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.backgroundColor));
            else if (element.gradients)
                this._setGradientColor(this, grd, element.gradients.ColorInfo);
            else if (this.Model.ScaleInterior)
                this._setGradientColor(this, grd, this.Model.ScaleInterior.ColorInfo);
            else
                this._setGradientColor(this, grd, gradients);
            if (this.Model.orientation == "Vertical") {
                startY = this.scaleEl[this.scaleIndex].direction == "clockwise" ? this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].border.width / 2 : lineYPosition;
                if (this.scaleEl[this.scaleIndex].direction == "counterclockwise" && this.scaleEl[this.scaleIndex].type == "thermometer")
                    startY = startY - this.scaleEl[this.scaleIndex].width / 2;
                height = this.scaleEl[this.scaleIndex].direction == "clockwise" ? lineYPosition - this.scaleStartY[this.scaleIndex] : this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].length - lineYPosition - this.scaleEl[this.scaleIndex].border.width / 2;
                width = element.width;
            }
            else {
                startY = this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 - element.width / 2 + this.scaleEl[this.scaleIndex].border.width / 2 + element.distanceFromScale;
                height = element.width;
                width = this.scaleEl[this.scaleIndex].direction == "clockwise" ? lineYPosition - this.scaleStartX : this.scaleStartX[this.scaleIndex] + this.scaleEl[this.scaleIndex].length - lineYPosition;
            }
            this.location = { "startX": startX + this.scaleEl[this.scaleIndex].border.width / 2, "startY": startY };
            this.style = {
                "width": (this.scaleEl[this.scaleIndex].type == "thermometer" && this.Model.orientation == "Horizontal") ? width + height / 2 - this.scaleEl[this.scaleIndex].border.width / 2 : width,
                "lineWidth": element.border.width,
                "radius": radius,
                "topRounded": element.value == this.scaleEl[this.scaleIndex].maximum ? true : false,
                "isStroke": false,
                "isFill": true,
                "height": (this.scaleEl[this.scaleIndex].type == "thermometer" && this.Model.orientation == "Vertical") ? height + width / 2 : height,
                "strokeStyle": element.border.color == null ? ((this.Model.borderColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, this.Model.borderColor)) : ((element.border.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.border.color)),
                "fillStyle": element.backgroundColor ? ((element.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.backgroundColor)) : ((grd == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, grd)),
                "opacity": isNaN(element.opacity) ? 0.4 : element.opacity
            };
            this.value(element.value);
            if (this.Model.drawBarPointers)
                this._onDrawBarPointers(element.value);
            this._drawFrame(this.scaleEl[this.scaleIndex].type, this.location, this.style);
            if (this.contextEl.getImageData)
                this.barPointerImage = this.contextEl.getImageData(0, 0, this.Model.width, this.Model.height);
        },
		/**
         * To draw Marker Pointer
		 * @private
         */
        _drawMarkerPointer: function (element, index) {
            element.value = element.value > this.scaleEl[this.scaleIndex].maximum ? this.scaleEl[this.scaleIndex].maximum : element.value;
            element.value = element.value < this.scaleEl[this.scaleIndex].minimum ? this.scaleEl[this.scaleIndex].minimum : element.value;
            var location, style, startX, startY, radius, linePosition, angle, grd, backgroundColor;
            var gradients = [{ "ColorStop": 0, "Color": (this.Model.pointerGradient1 == "transparent") ? "rgba(0,0,0,0)" : this.Model.pointerGradient1 }, { "ColorStop": 1, "Color": (this.Model.pointerGradient2 == "transparent") ? "rgba(0,0,0,0)" : this.Model.pointerGradient2}];
            this.markerPlacement = element.placement;
            radius = Math.sqrt(element.width * element.width + element.length * element.length) / 2;
            if (this.scaleEl[this.scaleIndex].type == "thermometer" && this.isModify)
                this._modifyWidth();
            if (this.Model.orientation == "Vertical") {
                if (this.markerPlacement == "far") {
                    startX = this.scaleStartX[this.scaleIndex] + this.scaleEl[this.scaleIndex].width + this.scaleEl[this.scaleIndex].border.width / 2 + element.distanceFromScale;
                    angle = 0;
                }
                if (this.markerPlacement == "near") {
                    if (element.type == "star")
                        startX = this.scaleStartX[this.scaleIndex] + element.distanceFromScale - element.width;
                    else
                        startX = this.scaleStartX[this.scaleIndex] + element.distanceFromScale;
                    angle = 180;
                }
                if (this.markerPlacement == "center") {
                    if (element.type == "circle")
                        startX = this.scaleStartX[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 - element.width / 2 + element.distanceFromScale + (element.border.width);
                    else
                        startX = this.scaleStartX[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 - element.width / 2 + element.distanceFromScale;
                    angle = 0;
                }
            }
            else {
                if (this.markerPlacement == "far") {
                    startX = this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width + this.scaleEl[this.scaleIndex].border.width / 2 + element.distanceFromScale;
                    angle = 90;
                }
                if (this.markerPlacement == "near") {
                    if (element.type == "star")
                        startX = this.scaleStartY[this.scaleIndex] - this.scaleEl[this.scaleIndex].border.width / 2 + element.distanceFromScale - element.length;
                    else
                        startX = this.scaleStartY[this.scaleIndex] - this.scaleEl[this.scaleIndex].border.width / 2 + element.distanceFromScale;
                    angle = 270;
                }
                if (this.markerPlacement == "center") {
                    if (element.type == "circle")
                        startX = this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 - element.length / 2 + element.distanceFromScale + (element.border.width);
                    else
                        startX = this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 - element.length / 2 + element.distanceFromScale;
                    angle = 90;
                }
            }
            linePosition = this.scaleEl[this.scaleIndex].direction == "clockwise" ? this._getClockwiseLinePosition(element.value) : this._getCounterClockwiseLinePosition(element.value);
            if (element.type == "star") {
                if (this.Model.orientation == "Vertical") {
                    grd = this.contextEl.createLinearGradient(startX, this.scaleStartY[this.scaleIndex], startX + element.width, this.scaleStartY[this.scaleIndex]);
                    startY = linePosition - element.length / 3;
                }
                else {
                    grd = this.contextEl.createLinearGradient(linePosition, startX, linePosition, startX + element.length);
                    startY = linePosition - element.width / 2;
                }
            }
            else {
                grd = this.contextEl.createLinearGradient(0, 0, element.width, 0);
                startY = linePosition;
            }
            if (element.type == "roundedrectangle") {
                if (this.Model.orientation == "Vertical" && this.markerPlacement == "near")
                    startY += element.length;
                else if (this.Model.orientation == "Horizontal") {
                    if (this.markerPlacement == "near")
                        startY -= (element.width);
                    startX += element.width / 2;
                }
            }
            if (element.backgroundColor)
                backgroundColor = ((element.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.backgroundColor));
            else if (element.gradients)
                this._setGradientColor(this, grd, element.gradients.ColorInfo);
            else if (this.Model.PointerInterior)
                this._setGradientColor(this, grd, this.Model.PointerInterior.ColorInfo);
            else
                this._setGradientColor(this, grd, gradients);

            this.location = { "startX": this.Model.orientation == "Vertical" ? startX : startY, "startY": this.Model.orientation == "Vertical" ? startY : startX };
            this.style = {
                "width": element.width,
                "radius": element.type == "rectangle" ? 0 : radius,
                "height": element.length,
                "lineWidth": element.border.width,
                "isFill": true,
                "isStroke": true,
                "angle": angle,
                "strokeStyle": ((element.border.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.border.color)),
                "markerPlacement": this.markerPlacement,
                "opacity": isNaN(element.opacity) ? 0.4 : element.opacity,
                "fillStyle": element.backgroundColor ? ((element.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.backgroundColor)) : ((grd == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, grd))
            };
            this.value(element.value);
            if (this.Model.drawMarkerPointers)
                this._onDrawMarkerPointers(angle, element.value);
            if (element.type == "roundedrectangle")
                this.style.radius = 5;
            this._drawMarkerType(element.type, this.location, this.style);
            if (this.scaleEl[this.scaleIndex].type == "thermometer" && this.isModify) {
                this._restoreWidth();
                this.isScaleModified = false;
            }
            if (this.contextEl.getImageData)
                this.markerPointerImage = this.contextEl.getImageData(0, 0, this.Model.width, this.Model.height);
        },

        _drawMarkerType: function (type, location, style) {
            switch (type) {
                case "rectangle":
                    this._drawRectangle(location, style, this);
                    break;
                case "triangle":
                    this._drawTriangle(location, style, this);
                    break;
                case "ellipse":
                    this._drawEllipse(location, style, this);
                    break;
                case "diamond":
                    this._drawDiamond(location, style, this);
                    break;
                case "pentagon":
                    this._drawPentagon(location, style, this);
                    break;
                case "circle":
                    this._drawCircle(location, style, this);
                    break;
                case "slider":
                    this._drawSlider(location, style, this);
                    break;
                case "star":
                    this._drawStar(location, style, this);
                    break;
                case "pointer":
                    this._drawPointer(location, style, this);
                    break;
                case "wedge":
                    this._drawWedge(location, style, this);
                    break;
                case "trapezoid":
                    this._drawTrapezoid(location, style, this);
                    break;
                case "roundedrectangle":
                    this._drawRoundedRectangle(location, style, this);
                    break;
            }
        },

		/**
         * To draw Range
		 * @private
         */
        _drawRange: function (element) {
            this.rangePosition = element.placement;
            var startLinePosition, endLinePosition, location, style, startX, startY, grd, backgroundColor;
            var gradients = [{ "ColorStop": 0, "Color": (this.Model.pointerGradient1 == "transparent") ? "rgba(0,0,0,0)" : this.Model.pointerGradient1 }, { "ColorStop": 1, "Color": (this.Model.pointerGradient2 == "transparent") ? "rgba(0,0,0,0)" : this.Model.pointerGradient2}];
            startLinePosition = (this.scaleEl[this.scaleIndex].direction == "clockwise") ? this._getClockwiseLinePosition(element.startValue) : this._getCounterClockwiseLinePosition(element.startValue);
            endLinePosition = (this.scaleEl[this.scaleIndex].direction == "clockwise") ? this._getClockwiseLinePosition(element.endValue) : this._getCounterClockwiseLinePosition(element.endValue);
            if (this.Model.orientation == "Vertical") {
                if (element.placement == "far")
                    startX = this.scaleStartX[this.scaleIndex] + element.distanceFromScale + this.scaleEl[this.scaleIndex].width + this.scaleEl[this.scaleIndex].border.width;
                if (element.placement == "near")
                    startX = this.scaleStartX[this.scaleIndex] + element.distanceFromScale;
                if (element.placement == "center")
                    startX = (element.startWidth > element.endWidth) ? this.scaleStartX[this.scaleIndex] + element.distanceFromScale + this.scaleEl[this.scaleIndex].width / 2 - element.startWidth / 2 : this.scaleStartX[this.scaleIndex] + element.distanceFromScale + this.scaleEl[this.scaleIndex].width / 2 - element.endWidth / 2;
                grd = this.contextEl.createLinearGradient(endLinePosition, endLinePosition, endLinePosition, startLinePosition);
                this.location = { "startX": startX, "startY": startLinePosition, "endY": endLinePosition };
            }
            else {
                if (element.placement == "far")
                    startY = this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width + element.distanceFromScale + this.scaleEl[this.scaleIndex].border.width;
                if (element.placement == "near")
                    startY = this.scaleStartY[this.scaleIndex] + element.distanceFromScale;
                if (element.placement == "center")
                    startY = (element.startWidth > element.endWidth) ? this.scaleStartY[this.scaleIndex] + element.distanceFromScale + this.scaleEl[this.scaleIndex].width / 2 - element.startWidth / 2 : this.scaleStartY[this.scaleIndex] + element.distanceFromScale + this.scaleEl[this.scaleIndex].width / 2 - element.endWidth / 2;
                grd = this.contextEl.createLinearGradient(endLinePosition, startY, startLinePosition, startY);
                this.location = { "startX": startLinePosition, "startY": startY, "endX": endLinePosition };
            }

            if (element.backgroundColor)
                backgroundColor = ((element.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.backgroundColor));
            else if (element.gradients)
                this._setGradientColor(this, grd, element.gradients.ColorInfo);
            else if (this.Model.RangeInterior)
                this._setGradientColor(this, grd, this.Model.RangeInterior.ColorInfo);
            else
                this._setGradientColor(this, grd, gradients);

            this.style = {
                "startWidth": element.startWidth, "lineWidth": element.border.width,
                "isStroke": true, "isFill": true, "opacity": isNaN(element.opacity) ? 0.4 : element.opacity,
                "endWidth": element.endWidth,
                "fillStyle": element.backgroundColor ? ((backgroundColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, backgroundColor)) : ((grd == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, grd)),
                "strokeStyle": element.border.color ? ((element.border.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.border.color)) : ((this.Model.borderColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, this.Model.borderColor))
            };
            if (this.Model.drawRange)
                this._onDrawRange();
            this._drawRangeBar(this.location, this.style);
            if (this.contextEl.getImageData)
                this.rangeImage = this.contextEl.getImageData(0, 0, this.Model.width, this.Model.height);
        },
		/**
         * To draw Range bar
		 * @private
         */
        _drawRangeBar: function (location, style) {
            this._contextOpenPath(style, this);
            if (this.Model.orientation == "Vertical") {
                this.contextEl.moveTo(location.startX, location.startY);
                this.contextEl.lineTo(location.startX, location.endY);
                if (this.rangePosition == "near") {
                    this.contextEl.lineTo(location.startX - style.endWidth, location.endY);
                    this.contextEl.lineTo(location.startX - style.startWidth, location.startY);
                }
                else {
                    this.contextEl.lineTo(location.startX + style.endWidth, location.endY);
                    this.contextEl.lineTo(location.startX + style.startWidth, location.startY);
                }
            }
            else {
                this.contextEl.moveTo(location.startX, location.startY);
                this.contextEl.lineTo(location.endX, location.startY);
                if (this.rangePosition == "near") {
                    this.contextEl.lineTo(location.endX, location.startY - style.endWidth);
                    this.contextEl.lineTo(location.startX, location.startY - style.startWidth);
                }
                else {
                    this.contextEl.lineTo(location.endX, location.startY + style.endWidth);
                    this.contextEl.lineTo(location.startX, location.startY + style.startWidth);
                }
            }
            this._contextClosePath(style, this);
        },
		/**
         * To set Custom Label Cordinates
		 * @private
         */
        _setCustomLabelCordinates: function (index, element) {
            var location, style, startX, startY;
            this.contextEl.textAlign = "center";
            if (this.Model.orientation == "Vertical") {
                startX = (this.bounds.width) * ((element.position.x) / 100);
                startY = (this.bounds.height) * ((element.position.y) / 100);
            }
            else {
                startX = (this.bounds.width) * ((element.position.x) / 100);
                startY = (this.bounds.height) * ((element.position.y) / 100);
            }
            this.location = { "lineStaticPosition": this.Model.orientation == "Vertical" ? startX : startY, "lineChangePosition": this.Model.orientation == "Vertical" ? startY : startX }
            this.style = { "angle": element.textAngle, "textValue": element.value, "fillStyle": element.color ? ((element.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.color)) : ((this.Model.labelColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, this.Model.labelColor)), "font": element.font };
            if (this.Model.drawCustomLabel)
                this._onDrawCustomLabel();
            this._drawLabel(this.location, this.style,true);

            if (this.contextEl.getImageData)
                this.customLabelImage = this.contextEl.getImageData(0, 0, this.Model.width, this.Model.height);
        },
		/**
         * To draw Indicator
		 * @private
         */
        _drawIndicator: function (index, element) {
            var self = this, xlocation, ylocation, txtLocation, txtLocationX, txtLocationY, isInStateRange = false;
            xlocation = (this.bounds.width - 2 * element.width) * ((element.position.x) / 100);
            ylocation = (this.bounds.height - 2 * element.height) * ((element.position.y) / 100);
            txtLocation = { "x": (this.bounds.width) * ((element.textLocation.x) / 100), "y": (this.bounds.height) * ((element.textLocation.y) / 100) };
            self.location = { "startX": element.type == "circle" ? xlocation + element.width : xlocation, "textLocation": txtLocation, "startY": element.type == "circle" ? ylocation + element.height : ylocation, "startAngle": 0, "endAngle": 2 * Math.PI };
            self.style = {
                "radius": element.type == "roundedrectangle" ? 2 : 0,
                "strokeStyle": element.border.color ? ((element.border.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.border.color)) : this._getColor(element, "#FFFFFF"),
                "angle": 0,
                "circleRadius": (element.height + element.width) / 2,
                "height": element.height,
                "width": element.width,
                "lineWidth": element.border.width,
                "fillStyle": element.backgroundColor ? ((element.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.backgroundColor)) : this._getColor(element, "#FFFFFF"),
                "isStroke": true,
                "isFill": true,
                "indicatorText": null,
                "textColor": null,
                "font": null,
                "counterClockwise": false
            };
            if (this.Model.drawIndicators)
                this._onDrawIndicators(self.style, self.location);
            if (element.stateRanges != null) {
                $.each(element.stateRanges, function (index, srEl) {//srEl = StateRange Element
                    if (self.markerPointerEl[self.markerPointerIndex].value >= srEl.startValue && self.markerPointerEl[self.markerPointerIndex].value <= srEl.endValue) {
                        isInStateRange = true;
                        if (!ej.isNullOrUndefined(srEl.text) && srEl.text.length > 0) {
                            self.style.indicatorText = srEl.text;
                            self.style.textColor = ((srEl.textColor == "transparent") ? "rgba(0,0,0,0)" : self._getColor(element, srEl.textColor));
                            self.style.font = self._getFontString(self, element.font);
                        }
                        if (element.type != "text") {
                            self.style.strokeStyle = ((srEl.borderColor == "transparent") ? "rgba(0,0,0,0)" : self._getColor(element, srEl.borderColor));
                            self.style.fillStyle = ((srEl.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : self._getColor(element, srEl.backgroundColor));
                            self._drawFrame(element.type, self.location, self.style, self);
                        }
                        else if (element.type == "text")
                            self._drawText(self.location, self.style);
                    }
                });
                }
            if (!isInStateRange && element.type != "text")
                this._drawFrame(element.type, self.location, self.style, self);
            if (this.contextEl.getImageData)
                this.indicatorImage = this.contextEl.getImageData(0, 0, this.Model.width, this.Model.height);
        },

        _drawFrame: function (type, location, style) {
            switch (type) {
                case "circle":
                    this._drawFrameCircle(location, style, this);
                    break;
                case "rectangle":
                    this._drawFrameRectangle(location, style, this);
                    break;
                case "roundedrectangle":
                    this._drawFrameRoundedRectangle(location, style, this);
                    break;
                case "thermometer":
                    this._drawFrameThermometer(location,style,this) ;
                    break;
            }
        },
		/**
         * To draw the text in the gauge
		 * @private
         */
        _drawText: function (location, style) {
            this.contextEl.beginPath();
            this.contextEl.textAlign = "center";
            this.contextEl.fillStyle = ((style.textColor == "transparent") ? "rgba(0,0,0,0)" : style.textColor);
            this.contextEl.font = style.font;
            this.contextEl.fillText(style.indicatorText, location.textLocation.x, location.textLocation.y);
            this.contextEl.closePath();
        },
		/**
         * To draw the triangle
		 * @private
         */
        _drawTriangle: function (location, style, element) {
            style = this._setPointerDimension(style, element);
            this._contextOpenPath(style, element);
            element.contextEl.translate(location.startX, location.startY);
            this._setContextRotation(style, element);
            element.contextEl.moveTo(0, 0);
            element.contextEl.lineTo(style.width, -style.height / 2);
            element.contextEl.lineTo(style.width, style.height / 2);
            this._contextClosePath(style, element);
        },
		/**
         * To draw the Pointer
		 * @private
         */
        _drawPointer: function (location, style, element) {
            style = this._setPointerDimension(style, element);
            this._contextOpenPath(style, element);
            element.contextEl.translate(location.startX, location.startY);
            this._setContextRotation(style, element);
            element.contextEl.moveTo(style.width, style.height / 4);
            element.contextEl.lineTo(style.width, -style.height / 4);
            element.contextEl.lineTo(style.width / 2, -style.height / 4);
            element.contextEl.lineTo(style.width / 2, -style.height / 2);
            element.contextEl.lineTo(0, 0);
            element.contextEl.lineTo(style.width / 2, style.height / 2);
            element.contextEl.lineTo(style.width / 2, style.height / 4);
            this._contextClosePath(style, element);
        },
		/**
         * To draw the Wedge
		 * @private
         */
        _drawWedge: function (location, style, element) {
            style = this._setPointerDimension(style, element);
            this._contextOpenPath(style, element);
            element.contextEl.translate(location.startX, location.startY);
            this._setContextRotation(style, element);
            element.contextEl.moveTo(0, 0);
            element.contextEl.lineTo(style.width, -style.height / 2);
            element.contextEl.lineTo(3 * style.width / 4, 0);
            element.contextEl.lineTo(style.width, style.height / 2);
            this._contextClosePath(style, element);
        },
		/**
         * To draw the Slider
		 * @private
         */
        _drawSlider: function (location, style, element) {
            style = this._setPointerDimension(style, element);
            this._contextOpenPath(style, element);
            element.contextEl.translate(location.startX, location.startY);
            this._setContextRotation(style, element);
            element.contextEl.moveTo(0, 0);
            element.contextEl.lineTo(style.width / 4, -style.height / 2);
            element.contextEl.lineTo(style.width, -style.height / 2);
            element.contextEl.lineTo(style.width, style.height / 2);
            element.contextEl.lineTo(style.width / 4, style.height / 2);
            this._contextClosePath(style, element);
        },
		/**
         * To draw the Star
		 * @private
         */
        _drawStar: function (location, style, element) {
            this._contextOpenPath(style, element);
            if (element.Model.orientation == "Horizontal" && element.markerPlacement == "near") {
                element.contextEl.moveTo(location.startX + style.width - (style.width / 6), location.startY); // 1
                element.contextEl.lineTo(location.startX, location.startY + style.height - style.height / 3);
                element.contextEl.lineTo(location.startX + style.width, location.startY + style.height - style.height / 3);
                element.contextEl.lineTo(location.startX + style.width / 6, location.startY);
                element.contextEl.lineTo(location.startX + style.width / 2, location.startY + style.height);
            }
            else {
                element.contextEl.moveTo(location.startX + (style.width / 6), location.startY + style.height); // 1
                element.contextEl.lineTo(location.startX + style.width, location.startY + (style.height / 3)); // 2
                element.contextEl.lineTo(location.startX, location.startY + (style.height / 3)); // 3
                element.contextEl.lineTo(location.startX + style.width - (style.width / 6), location.startY + style.height); // 4
                element.contextEl.lineTo(location.startX + style.width / 2, location.startY); // 5
            }
            this._contextClosePath(style, element);
        },
		/**
         * To draw the Pentagon
		 * @private
         */
        _drawPentagon: function (location, style, element) {
            style = this._setPointerDimension(style, element);
            this._contextOpenPath(style, element);
            element.contextEl.translate(location.startX, location.startY);
            this._setContextRotation(style, element);
            element.contextEl.moveTo(0, 0);
            element.contextEl.lineTo(style.width / 3, -style.height / 2);
            element.contextEl.lineTo(style.width, -style.height / 4);
            element.contextEl.lineTo(style.width, style.height / 4);
            element.contextEl.lineTo(style.width / 3, style.height / 2);
            this._contextClosePath(style, element);
        },
		/**
         * To draw the Diamond
		 * @private
         */
        _drawDiamond: function (location, style, element) {
            style = this._setPointerDimension(style, element);
            this._contextOpenPath(style, element);
            element.contextEl.translate(location.startX, location.startY);
            this._setContextRotation(style, element);
            element.contextEl.moveTo(0, 0);
            element.contextEl.lineTo(style.width / 2, -style.height / 2);
            element.contextEl.lineTo(style.width, 0);
            element.contextEl.lineTo(style.width / 2, style.height / 2);
            element.contextEl.lineTo(0, 0);
            this._contextClosePath(style, element);
        },
		/**
         * To draw the Circle
		 * @private
         */
        _drawCircle: function (location, style, element) {
            var radius = Math.sqrt(style.height * style.height + style.width * style.width) / 2;
            style = this._setPointerDimension(style, element);
            this._contextOpenPath(style, element);
            element.contextEl.translate(location.startX, location.startY);
            this._setContextRotation(style, element);
            element.contextEl.arc(radius / 2, 0, radius / 2, 0, Math.PI * 2, true);
            this._contextClosePath(style, element);
        },
		/**
         * To draw the Trapezoid
		 * @private
         */
        _drawTrapezoid: function (location, style, element) {
            style = this._setPointerDimension(style, element);
            this._contextOpenPath(style, element);
            element.contextEl.translate(location.startX, location.startY);
            this._setContextRotation(style, element);
            element.contextEl.moveTo(0, 0);
            element.contextEl.lineTo(0, -style.height / 4);
            element.contextEl.lineTo(style.width, -style.height / 2);
            element.contextEl.lineTo(style.width, style.height / 2);
            element.contextEl.lineTo(0, style.height / 4);
            this._contextClosePath(style, element);
        },
		/**
         * To draw the Rectangle
		 * @private
         */
        _drawRectangle: function (location, style, element) {
            style = this._setPointerDimension(style, element);
            this._contextOpenPath(style, element);
            element.contextEl.translate(location.startX, location.startY);
            this._setContextRotation(style, element);
            element.contextEl.moveTo(0, 0);
            element.contextEl.lineTo(0, -style.height / 2);
            element.contextEl.lineTo(style.width, -style.height / 2);
            element.contextEl.lineTo(style.width, style.height / 2);
            element.contextEl.lineTo(0, style.height / 2);
            this._contextClosePath(style, element);
        },
		/**
         * To draw the Rounded Rectangle
		 * @private
         */
        _drawRoundedRectangle: function (location, style, element) {
            style = this._setPointerDimension(style, element);
            this._contextOpenPath(style, element);
            element.contextEl.translate(location.startX, location.startY - style.height / 2);
            this._setContextRotation(style, element);
            element.contextEl.moveTo(style.radius, 0);
            element.contextEl.lineTo(style.width - style.radius, 0);
            element.contextEl.quadraticCurveTo(style.width, 0, style.width, style.radius);
            element.contextEl.lineTo(style.width, style.height - style.radius);
            element.contextEl.quadraticCurveTo(style.width, style.height, style.width - style.radius, style.height);
            element.contextEl.lineTo(style.radius, style.height);
            element.contextEl.quadraticCurveTo(0, style.height, 0, style.height - style.radius);
            element.contextEl.lineTo(0, style.radius);
            element.contextEl.quadraticCurveTo(0, 0, style.radius, 0);
            this._contextClosePath(style, element);
        },
		/**
         * To draw the Custom image 
		 * @private
         */
        _drawCustomImage: function (element, imageUrl) {
            var image = new Image();
            var self = this;
            $(image).load(function () {
                element.contextEl.drawImage(this, 0, 0, element.Model.width, element.Model.height);
                if (element.Model.scales != null)
                    element._drawScales();
                if (element.Model.Items != null)
                    element._renderItems();
            }).attr('src', imageUrl);
        },
		/**
         * To draw the Ellipse
		 * @private
         */
        _drawEllipse: function (location, style, element) {
            var radius = Math.sqrt(style.height * style.height + style.width * style.width) / 2;
            style = this._setPointerDimension(style, element);
            this._contextOpenPath(style, element);
            element.contextEl.translate(location.startX, location.startY);
            this._setContextRotation(style, element);
            element.contextEl.scale(2, 1);
            element.contextEl.arc(radius / 2, 0, radius / 2, 0, Math.PI * 2, true);
            this._contextClosePath(style, element);
        },
        //Client-Side Methods
		/**
         * To get Indicator Image
		 * @private
         */	
        _getIndicatorImage: function () {
            if (this.pointerImage)
                return this.pointerImage;
            else
                this._getMarkerPointerImage();
        },
		/**
         * To get Bar Pointer Image
		 * @private
         */	
        _getBarPointerImage: function () {
            if (this.customLabelImage)
                return this.customLabelImage;
            else
                return this._getCustomLabelImage();
        },
		/**
         * To get Marker Pointer Image
		 * @private
         */	
        _getMarkerPointerImage: function () {
            if (this.barPointerImage)
                return this.barPointerImage;
            else
                return this._getCustomLabelImage();
        },
		/**
         * To get Custom Label Image
		 * @private
         */	
        _getCustomLabelImage: function () {
            if (this.rangeImage)
                return this.rangeImage;
            else
                return this._getRangeImage();
        },
		/**
         * To get Range Image
		 * @private
         */	
        _getRangeImage: function () {
            if (this.labelImage)
                return this.labelImage;
            else
                return this._getLabelImage();
        },
		/**
         * To get Label Image
		 * @private
         */	
        _getLabelImage: function () {

            if (this.tickImage)
                return this.tickImage;
            else
                return this._getTickImage();
        },
		/**
         * To get Tick Image
		 * @private
         */	
        _getTickImage: function () {
            if (this.scaleImage)
                return this.scaleImage;
            else
                return this.outerImage;
        },
		/**
        * To get the Indicator Value in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.indicatorIndex indicatorIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getIndicatorValue(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getIndicatorValue: function (scaleIndex, indicatorIndex) {
            if (scaleIndex < this.Model.scales.length && indicatorIndex < this.Model.scales[scaleIndex].indicators.length)
                return this.scaleEl[scaleIndex].indicators[indicatorIndex].value;
        },
		/**
        * To set IndicatorValue 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.indicatorIndex indicatorIndex value for the Gauge
		* @param {number} arguemnt.value for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({
        * value: 50, scales: [{showBarPointers: true, showIndicators: true, length: 310, indicators: [{
        * height: 30,type: "Rectangle",width: 30,
        * position: { x: 0,y: 0},
        * stateRanges: [{endValue: 60,startValue: 40,backgroundColor: "Green",borderColor: "Red"}],
        * value:50}]}]});
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setIndicatorValue(0,0,30);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setIndicatorValue: function (scaleIndex, indicatorIndex, value) {
            if (scaleIndex < this.Model.scales.length && indicatorIndex < this.Model.scales[scaleIndex].indicators.length && value != null) {
                this.scaleEl[scaleIndex].indicators[indicatorIndex].value = value;
                this.initialize();
            }
        },
		/**
        * To set PointerValue 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @param {number} arguemnt.value Pointer value for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setPointerValue(0,0,30);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setPointerValue: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].markerPointers.length && value != null) {
                this.scaleEl[scaleIndex].markerPointers[pointerIndex].value = value;
                if (this.contextEl.putImageData) {
                    if (this.scaleEl[this.scaleIndex].type == "thermometer")
                        this.initialize();
                    else {
                        this.contextEl.putImageData(this._getMarkerPointerImage(), 0, 0);
                        this._setMarkerPointers();
                        this._setIndicators();
                    }
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get PointerValue in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getPointerValue(0,0);
		* &lt;/script&gt;
        * @memberof ejLinearGauge
		* @instance
        */
        getPointerValue: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].markerPointers.length) {
                return this.scaleEl[scaleIndex].markerPointers[pointerIndex].value;
            }
        },
		/**
        * To set PointerWidth 
		* @return jQuery
		* @param {number} argument.scaleIndex  scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @param {number} arguemnt.width Pointer width for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setPointerWidth(0,0,30);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setPointerWidth: function (scaleIndex, pointerIndex, width) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].markerPointers.length && width != null) {
                this.scaleEl[scaleIndex].markerPointers[pointerIndex].width = width;
                if (this.contextEl.putImageData) {
                    if (this.scaleEl[this.scaleIndex].type == "thermometer")
                        this.initialize();
                    else {
                        this.contextEl.putImageData(this._getMarkerPointerImage(), 0, 0);
                        this._setMarkerPointers();
                    }
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get PointerWidth in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getPointerWidth(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getPointerWidth: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].markerPointers.length) {
                return this.scaleEl[scaleIndex].markerPointers[pointerIndex].width;
            }
        },
		/**
        * To set PointerHeight 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @param {number} arguemnt.height for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setPointerHeight(0,0,30);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setPointerHeight: function (scaleIndex, pointerIndex, height) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].markerPointers.length && height != null) {
                this.scaleEl[scaleIndex].markerPointers[pointerIndex].length = height;
                if (this.contextEl.putImageData) {
                    if (this.scaleEl[this.scaleIndex].type == "thermometer")
                        this.initialize();
                    else {
                        this.contextEl.putImageData(this._getMarkerPointerImage(), 0, 0);
                        this._setMarkerPointers();
                    }
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get PointerHeight in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getPointerHeight(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getPointerHeight: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].markerPointers.length)
                return this.scaleEl[scaleIndex].markerPointers[pointerIndex].length;
        },
		/**
         * To get color
		 * @private
         */
        _getColor: function (element, option) {
            if (typeof (option) === "string") {
                return option;
            }
            else {
                return ("rgba(" + option.r + ", " + option.g + "," + option.b + ", " + option.a / 255 + ")");
            }
        },
		/**
        * To set setPointerDistanceFromScale 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @param {number} arguemnt.value for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setPointerDistanceFromScale(0,0,30);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setPointerDistanceFromScale: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].markerPointers.length && value != null) {
                this.scaleEl[scaleIndex].markerPointers[pointerIndex].distanceFromScale = value;
                if (this.contextEl.putImageData) {
                    if (this.scaleEl[this.scaleIndex].type == "thermometer")
                        this.initialize();
                    else {
                        this.contextEl.putImageData(this._getMarkerPointerImage(), 0, 0);
                        this._setMarkerPointers();
                    }
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get Pointer Distance From Scale in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getPointerDistanceFromScale(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getPointerDistanceFromScale: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].markerPointers.length)
                return this.scaleEl[scaleIndex].markerPointers[pointerIndex].distanceFromScale;
        },
		/**
        * To set setPointerPlacement 
		* @return jQuery
		* @param {number} argument.scaleIndex  scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @param {number} arguemnt.value  pointer placement for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setPointerPlacement(0,0,"far");
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setPointerPlacement: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].markerPointers.length && value != null) {
                this.scaleEl[scaleIndex].markerPointers[pointerIndex].placement = value;
                if (this.contextEl.putImageData) {
                    if (this.scaleEl[this.scaleIndex].type == "thermometer")
                        this.initialize();
                    else {
                        this.contextEl.putImageData(this._getMarkerPointerImage(), 0, 0);
                        this._setMarkerPointers();
                    }
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get Pointer Placement in String
		* @return string
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getPointerPlacement(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getPointerPlacement: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].markerPointers.length)
                return this.scaleEl[scaleIndex].MarkerPointer[pointerIndex].placement;
        },
		/**
        * To set setMarkerStyle 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndexvalue for the Gauge
		* @param {string} arguemnt.value marker Style for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setMarkerStyle(0,0,"triangle");
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setMarkerStyle: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].markerPointers.length && value != null) {
                this.scaleEl[scaleIndex].markerPointers[pointerIndex].type = value;
                if (this.contextEl.putImageData) {
                    if (this.scaleEl[this.scaleIndex].type == "thermometer")
                        this.initialize();
                    else {
                        this.contextEl.putImageData(this._getMarkerPointerImage(), 0, 0);
                        this._setMarkerPointers();
                    }
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get MarkerStyle in number
		* @return number
		* @param {number} argument.scaleIndex vscaleIndex alue for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getMarkerStyle(0,0);
		* &lt;/script&gt;
		* @memberof ejLinearGauge
		* @instance
        */
        getMarkerStyle: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].markerPointers.length)
                return this.scaleEl[scaleIndex].markerPointers[pointerIndex].markerStyle;
        },
		/**
        * To set setBarPointerValue 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @param {number} arguemnt.value Bar Pointer Value for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setBarPointerValue(0,0,30);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setBarPointerValue: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].barPointers.length && value != null) {
                this.scaleEl[scaleIndex].barPointers[pointerIndex].value = value;
                if (this.contextEl.putImageData) {
                    if (this.scaleEl[this.scaleIndex].type == "thermometer")
                        this.initialize();
                    else
                        this._reDrawBarPointer();
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get Bar Pointer Value in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({value:50});
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getBarPointerValue(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getBarPointerValue: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].barPointers.length)
                return this.scaleEl[scaleIndex].barPointers[pointerIndex].value;
        },
		/**
        * To set setBarWidth 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndexvalue for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @param {number} arguemnt.value Bar Width for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setBarWidth(0,0,30);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setBarWidth: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].barPointers.length && value != null) {
                this.scaleEl[scaleIndex].barPointers[pointerIndex].width = value;
                if (this.contextEl.putImageData) {
                    if (this.scaleEl[this.scaleIndex].type == "thermometer")
                        this.initialize();
                    else
                        this._reDrawBarPointer();
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get Bar Width in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({value:50});
		* // get Bar Width in number
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getBarWidth(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getBarWidth: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].barPointers.length)
                return this.scaleEl[scaleIndex].BarPointer[pointerIndex].width;
        },
		/**
        * To set setBarDistanceFromScale 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex,value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @param {number} arguemnt.value Bar DistanceFromScale value for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setBarDistanceFromScale(0,0,30);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setBarDistanceFromScale: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].barPointers.length && value != null) {
                this.scaleEl[scaleIndex].barPointers[pointerIndex].distanceFromScale = value;
                if (this.contextEl.putImageData) {
                    if (this.scaleEl[this.scaleIndex].type == "thermometer")
                        this.initialize();
                    else
                        this._reDrawBarPointer();
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get Bar Distance From Scale in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.pointerIndex pointerIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({value:50});
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getBarDistanceFromScale(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getBarDistanceFromScale: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].barPointers.length)
                return this.scaleEl[scaleIndex].BarPointer[pointerIndex].distanceFromScale;
        },
		/**
        * To set setCustomLabelValue 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.customLabelIndex customLabelIndex value for the Gauge
		* @param {number} arguemnt.value CustomLabel value for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setCustomLabelValue(0,0,"text");
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setCustomLabelValue: function (scaleIndex, customLabelIndex, value) {
            if (scaleIndex < this.Model.scales.length && customLabelIndex < this.Model.scales[scaleIndex].customLabels.length && value != null) {
                this.scaleEl[scaleIndex].customLabels[customLabelIndex].value = value;
                if (this.contextEl.putImageData)
                    this._reDrawCustomLabel();
                else
                    this.initialize();
            }
        },
		/**
        * To get CustomLabel Value in string
		* @return string
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.customLabelIndex customLabelIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getCustomLabelValue(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getCustomLabelValue: function (scaleIndex, customLabelIndex) {
            if (scaleIndex < this.Model.scales.length && customLabelIndex < this.Model.scales[scaleIndex].customLabels.length)
                return this.scaleEl[scaleIndex].customLabels[customLabelIndex].value;
        },
		/**
        * To set setCustomLabelAngle 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge 
		* @param {number}  argument.customLabelIndex customLabelIndex value for the Gauge
		* @param {number} arguemnt.value Custom Label Angle for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setCustomLabelAngle(0,0,30);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setCustomLabelAngle: function (scaleIndex, customLabelIndex, value) {
            if (scaleIndex < this.Model.scales.length && customLabelIndex < this.Model.scales[scaleIndex].customLabels.length && value != null) {
                this.scaleEl[scaleIndex].customLabels[customLabelIndex].textAngle = value;
                if (this.contextEl.putImageData)
                    this._reDrawCustomLabel();
                else
                    this.initialize();
            }
        },
		/**
        * To get CustomLabel Angle in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.customLabelIndex customLabelIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({  scales:[{showCustomLabels:true,customLabels: [{ value:"MyLabel", position:{x:49,y:100}, color:"#fc0606", font: { size: "20px",fontFamily: "Arial", fontStyle: "bold" }}]}]});
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getCustomLabelAngle(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getCustomLabelAngle: function (scaleIndex, customLabelIndex) {
            if (scaleIndex < this.Model.scales.length && customLabelIndex < this.Model.scales[scaleIndex].customLabels.length)
                return this.scaleEl[scaleIndex].customLabels[customLabelIndex].textAngle;
        },
		/**
        * To set setRangeStartValue 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.rangeIndex rangeIndex value for the Gauge
		* @param {number} arguemnt.value range start value for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setRangeStartValue(0,0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setRangeStartValue: function (scaleIndex, rangeIndex, value) {
            if (scaleIndex < this.Model.scales.length && rangeIndex < this.Model.scales[scaleIndex].ranges.length && value != null) {
                this.scaleEl[scaleIndex].ranges[rangeIndex].startValue = value;
                if (this.contextEl.putImageData)
                    this._reDrawRange();
                else
                    this.initialize();
            }
        },
		/**
        * To get Range Start Value in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.rangeIndex rangeIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getRangeStartValue(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getRangeStartValue: function (scaleIndex, rangeIndex) {
            if (scaleIndex < this.Model.scales.length && rangeIndex < this.Model.scales[scaleIndex].ranges.length)
                return this.scaleEl[scaleIndex].ranges[rangeIndex].startValue;
        },
		/**
        * To set setRangeEndValue 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.rangeIndex rangeIndex value for the Gauge
		* @param {number} arguemnt.value Range end value for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setRangeEndValue(0,0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setRangeEndValue: function (scaleIndex, rangeIndex, value) {
            if (scaleIndex < this.Model.scales.length && rangeIndex < this.Model.scales[scaleIndex].ranges.length && value != null) {
                this.scaleEl[scaleIndex].ranges[rangeIndex].endValue = value;
                if (this.contextEl.putImageData)
                    this._reDrawRange();
                else
                    this.initialize();
            }
        },
		/**
        * To get Range End Value in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.rangeIndex rangeIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getRangeEndValue(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getRangeEndValue: function (scaleIndex, rangeIndex) {
            if (scaleIndex < this.Model.scales.length && rangeIndex < this.Model.scales[scaleIndex].ranges.length)
                return this.scaleEl[scaleIndex].ranges[rangeIndex].endValue;
        },
		/**
        * To set setRangeStartWidth 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.rangeIndex rangeIndex value for the Gauge
		* @param {number} arguemnt.value Range Start Width for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setRangeStartWidth(0,0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setRangeStartWidth: function (scaleIndex, rangeIndex, value) {
            if (scaleIndex < this.Model.scales.length && rangeIndex < this.Model.scales[scaleIndex].ranges.length && value != null) {
                this.scaleEl[scaleIndex].ranges[rangeIndex].startWidth = value;
                if (this.contextEl.putImageData)
                    this._reDrawRange();
                else
                    this.initialize();
            }
        },
		/**
        * To get Range Start Width in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.rangeIndex rangeIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getRangeStartWidth(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getRangeStartWidth: function (scaleIndex, rangeIndex) {
            if (scaleIndex < this.Model.scales.length && rangeIndex < this.Model.scales[scaleIndex].ranges.length)
                return this.scaleEl[scaleIndex].ranges[rangeIndex].startWidth;
        },
		/**
        * To set setRangeEndWidth 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.rangeIndex rangeIndex value for the Gauge
		* @param {number} arguemnt.value Range End Width for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setRangeEndWidth(0,0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setRangeEndWidth: function (scaleIndex, rangeIndex, value) {
            if (scaleIndex < this.Model.scales.length && rangeIndex < this.Model.scales[scaleIndex].ranges.length && value != null) {
                this.scaleEl[scaleIndex].ranges[rangeIndex].endWidth = value;
                if (this.contextEl.putImageData)
                    this._reDrawRange();
                else
                    this.initialize();
            }
        },
		/**
        * To get Range End Width in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.rangeIndex rangeIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getRangeEndWidth(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getRangeEndWidth: function (scaleIndex, rangeIndex) {
            if (scaleIndex < this.Model.scales.length && rangeIndex < this.Model.scales[scaleIndex].ranges.length)
                return this.scaleEl[scaleIndex].ranges[rangeIndex].endWidth;
        },
		/**
        * To set setRangeDistanceFromScale 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.rangeIndex rangeIndex value for the Gauge
		* @param {number} arguemnt.value Range Distance FromScale for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setRangeDistanceFromScale(0,0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setRangeDistanceFromScale: function (scaleIndex, rangeIndex, value) {
            if (scaleIndex < this.Model.scales.length && rangeIndex < this.Model.scales[scaleIndex].ranges.length && value != null) {
                this.scaleEl[scaleIndex].ranges[rangeIndex].distanceFromScale = value;
                if (this.contextEl.putImageData)
                    this._reDrawRange();
                else
                    this.initialize();
            }
        },
		/**
        * To get Range Distance From Scale in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.rangeIndex rangeIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getRangeDistanceFromScale(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getRangeDistanceFromScale: function (scaleIndex, rangeIndex) {
            if (scaleIndex < this.Model.scales.length && rangeIndex < this.Model.scales[scaleIndex].ranges.length)
                return this.scaleEl[scaleIndex].ranges[rangeIndex].distanceFromScale;
        },
		/**
        * To set setRangePosition 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.rangeIndex rangeIndex value for the Gauge
		* @param {number} arguemnt.value Range Position for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setRangePosition(0,0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setRangePosition: function (scaleIndex, rangeIndex, value) {
            if (scaleIndex < this.Model.scales.length && rangeIndex < this.Model.scales[scaleIndex].ranges.length && value != null) {
                this.scaleEl[scaleIndex].ranges[rangeIndex].placement = value;
                if (this.contextEl.putImageData)
                    this._reDrawRange();
                else
                    this.initialize();
            }
        },
		/**
        * To get Range Position in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.rangeIndex rangeIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getRangePosition(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getRangePosition: function (scaleIndex, rangeIndex) {
            if (scaleIndex < this.Model.scales.length && rangeIndex < this.Model.scales[scaleIndex].ranges.length)
                return this.scaleEl[scaleIndex].ranges[rangeIndex].placement;
        },
		/**
        * To set setRangeBorderWidth 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.rangeIndex rangeIndex value for the Gauge
		* @param {number} arguemnt.value Range Border Width for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setRangeBorderWidth(0,0,2);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setRangeBorderWidth: function (scaleIndex, rangeIndex, value) {
            if (scaleIndex < this.Model.scales.length && rangeIndex < this.Model.scales[scaleIndex].ranges.length && value != null) {
                this.scaleEl[scaleIndex].ranges[rangeIndex].border.width = value;
                if (this.contextEl.putImageData)
                    this._reDrawRange();
                else
                    this.initialize();
            }
        },
		/**
        * To get Range Border Width in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.rangeIndex rangeIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge({ scales: [{ showBarPointers: false, width: 3, length: 310, showRanges: true,ranges: [{ startWidth: 10, endWidth: 20, endValue: 60, startValue: 0, backgroundColor: "#E94649" }] }] });
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getRangeBorderWidth(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getRangeBorderWidth: function (scaleIndex, rangeIndex) {
            if (scaleIndex < this.Model.scales.length && rangeIndex < this.Model.scales[scaleIndex].ranges.length)
                return this.scaleEl[scaleIndex].ranges[rangeIndex].border.width;
        },
		/**
        * To set setLabelAngle 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.labelIndex value for the Gauge
		* @param {number} arguemnt.angle Label Angle for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setLabelAngle(0,0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setLabelAngle: function (scaleIndex, labelIndex, angle) {
            if (scaleIndex < this.Model.scales.length && labelIndex < this.Model.scales[scaleIndex].labels.length && angle != null) {
                this.scaleEl[scaleIndex].labels[labelIndex].angle = angle;
                if (this.contextEl.putImageData) this._reDrawLabel();
                else
                    this.initialize();
            }
        },
		/**
        * To get Label Angle in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.labelIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getLabelAngle(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getLabelAngle: function (scaleIndex, labelIndex) {
            if (scaleIndex < this.Model.scales.length && labelIndex < this.Model.scales[scaleIndex].labels.length)
                return this.scaleEl[scaleIndex].labels[labelIndex].angle;
        },
		/**
        * To set setLabelStyle 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.labelIndex value for the Gauge
		* @param {string} arguemnt.value Label Style for  Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setLabelStyle(0,0,"major");
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setLabelStyle: function (scaleIndex, labelIndex, value) {
            if (scaleIndex < this.Model.scales.length && labelIndex < this.Model.scales[scaleIndex].barPointers.length && value != null) {
                this.scaleEl[scaleIndex].labels[labelIndex].type = $.inArray(value, this.Model.tickStyle);
                if (this.contextEl.putImageData) this._reDrawLabel();
                else
                    this.initialize();
            }
        },
		/**
        * To get LabelStyle in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.labelIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getLabelStyle(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getLabelStyle: function (scaleIndex, labelIndex) {
            if (scaleIndex < this.Model.scales.length && pointerIndex < this.Model.scales[scaleIndex].labels.length)
                return this.scaleEl[scaleIndex].barPointers[labelIndex].type;
        },
		/**
        * To set setLabelPlacement 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.labelIndex value for the Gauge
		* @param {number} arguemnt.value Label Placement for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setLabelPlacement(0,0,"far");
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setLabelPlacement: function (scaleIndex, labelIndex, value) {
            if (scaleIndex < this.Model.scales.length && labelIndex < this.Model.scales[scaleIndex].labels.length && value != null) {
                this.scaleEl[scaleIndex].labels[labelIndex].placement = $.inArray(value, this.Model.labelPlacement);
                if (this.contextEl.putImageData) this._reDrawLabel();
                else
                    this.initialize();
            }
        },
		/**
        * To get LabelPlacement in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.labelIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getLabelPlacement(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getLabelPlacement: function (scaleIndex, labelIndex) {
            if (scaleIndex < this.Model.scales.length && labelIndex < this.Model.scales[scaleIndex].labels.length)
                return this.scaleEl[scaleIndex].barPointers[labelIndex].placement;
        },
		/**
        * To set setLabelXDistanceFromScale 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.labelIndex value for the Gauge
		* @param {number} arguemnt.value Label XDistance From Scale for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setLabelXDistanceFromScale(0,0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setLabelXDistanceFromScale: function (scaleIndex, labelIndex, value) {
            if (scaleIndex < this.Model.scales.length && labelIndex < this.Model.scales[scaleIndex].labels.length && value != null) {
                this.scaleEl[scaleIndex].labels[labelIndex].distanceFromScale.x = value;
                if (this.contextEl.putImageData) this._reDrawLabel();
                else
                    this.initialize();
            }
        },
		/**
        * To get Label XDistance From Scale in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.labelIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getLabelXDistanceFromScale(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getLabelXDistanceFromScale: function (scaleIndex, labelIndex) {
            if (scaleIndex < this.Model.scales.length && labelIndex < this.Model.scales[scaleIndex].labels.length)
                return this.scaleEl[scaleIndex].labels[labelIndex].distanceFromScale.x;
        },
		/**
        * To set setLabelYDistanceFromScale 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.labelIndex value for the Gauge
		* @param {number} arguemnt.value Label YDistance From Scale for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setLabelYDistanceFromScale(0,0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setLabelYDistanceFromScale: function (scaleIndex, labelIndex, value) {
            if (scaleIndex < this.Model.scales.length && labelIndex < this.Model.scales[scaleIndex].labels.length && value != null) {
                this.scaleEl[scaleIndex].labels[labelIndex].distanceFromScale.y = value;
                if (this.contextEl.putImageData)
                    this._reDrawLabel();
                else
                    this.initialize();
            }
        },
		/**
        * To get PointerValue in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.labelIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getLabelYDistanceFromScale(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getLabelYDistanceFromScale: function (scaleIndex, labelIndex) {
            if (scaleIndex < this.Model.scales.length && labelIndex < this.Model.scales[scaleIndex].labels.length)
                return this.scaleEl[scaleIndex].labels[labelIndex].distanceFromScale.y;
        },
		/**
        * To set setTickAngle 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.TickIndex value for the Gauge
		* @param {number} arguemnt.angle Tick Angle for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setTickAngle(0,0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setTickAngle: function (scaleIndex, TickIndex, angle) {
            if (scaleIndex < this.Model.scales.length && TickIndex < this.Model.scales[scaleIndex].ticks.length && angle != null) {
                this.scaleEl[scaleIndex].ticks[TickIndex].angle = angle;
                if (this.contextEl.putImageData) {
                    this._reDrawTickMark();
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get Tick Angle in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.TickIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getTickAngle(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getTickAngle: function (scaleIndex, TickIndex) {
            if (scaleIndex < this.Model.scales.length && TickIndex < this.Model.scales[scaleIndex].ticks.length)
                return this.scaleEl[scaleIndex].ticks[TickIndex].angle;
        },
		/**
        * To set setTickWidth 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.TickIndex value for the Gauge
		* @param {number} arguemnt.value Tick Width for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setTickWidth(0,0,5);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setTickWidth: function (scaleIndex, TickIndex, value) {
            if (scaleIndex < this.Model.scales.length && TickIndex < this.Model.scales[scaleIndex].ticks.length && value != null) {
                this.scaleEl[scaleIndex].ticks[TickIndex].width = value;
                if (this.contextEl.putImageData) {
                    this._reDrawTickMark();
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get Tick Width in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.TickIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getTickWidth(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getTickWidth: function (scaleIndex, TickIndex) {
            if (scaleIndex < this.Model.scales.length && TickIndex < this.Model.scales[scaleIndex].ticks.length)
                return this.scaleEl[scaleIndex].labels[TickIndex].width;
        },
		/**
        * To set setTickHeight 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.TickIndex value for the Gauge
		* @param {number} arguemnt.value Tick Height for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setTickHeight(0,0,10);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setTickHeight: function (scaleIndex, TickIndex, value) {
            if (scaleIndex < this.Model.scales.length && TickIndex < this.Model.scales[scaleIndex].ticks.length && value != null) {
                this.scaleEl[scaleIndex].ticks[TickIndex].height = value;
                if (this.contextEl.putImageData) {
                    this._reDrawTickMark();
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get Tick Height in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.TickIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getTickHeight(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getTickHeight: function (scaleIndex, TickIndex) {
            if (scaleIndex < this.Model.scales.length && TickIndex < this.Model.scales[scaleIndex].ticks.length)
                return this.scaleEl[scaleIndex].labels[TickIndex].height;
        },
		/**
        * To set setTickStyle 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.TickIndex value for the Gauge
		* @param {string} arguemnt.value Tick Stylefor Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setTickStyle(0,0,"major");
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setTickStyle: function (scaleIndex, TickIndex, value) {
            if (scaleIndex < this.Model.scales.length && TickIndex < this.Model.scales[scaleIndex].ticks.length && value != null) {
                this.scaleEl[scaleIndex].ticks[TickIndex].type = $.inArray(value, this.Model.tickStyle);
                if (this.contextEl.putImageData) {
                    this._reDrawTickMark();
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get Tick Style in string
		* @return string
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.TickIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getTickStyle(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getTickStyle: function (scaleIndex, TickIndex) {
            if (scaleIndex < this.Model.scales.length && TickIndex < this.Model.scales[scaleIndex].ticks.length)
                return this.scaleEl[scaleIndex].barPointers[TickIndex].type;
        },
		/**
        * To set setTickPlacement 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.TickIndex value for the Gauge
		* @param {number} arguemnt.value Tick Placement for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setTickPlacement(0,0,"far");
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setTickPlacement: function (scaleIndex, TickIndex, value) {
            if (scaleIndex < this.Model.scales.length && TickIndex < this.Model.scales[scaleIndex].ticks.length && value != null) {
                this.scaleEl[scaleIndex].ticks[TickIndex].placement = $.inArray(value, this.Model.tickPlacement);
                if (this.contextEl.putImageData) {
                    this._reDrawTickMark();
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get getTickPlacement in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.TickIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getTickPlacement(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getTickPlacement: function (scaleIndex, TickIndex) {
            if (scaleIndex < this.Model.scales.length && TickIndex < this.Model.scales[scaleIndex].ticks.length)
                return this.scaleEl[scaleIndex].barPointers[TickIndex].placement;
        },
		/**
        * To set setTickXDistanceFromScale 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.TickIndex value for the Gauge
		* @param {number} arguemnt.value Tick XDistance From Scale for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setTickXDistanceFromScale(0,0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setTickXDistanceFromScale: function (scaleIndex, TickIndex, value) {
            if (scaleIndex < this.Model.scales.length && TickIndex < this.Model.scales[scaleIndex].ticks.length && value != null) {
                this.scaleEl[scaleIndex].ticks[TickIndex].distanceFromScale.x = value;
                if (this.contextEl.putImageData) {
                    this._reDrawTickMark();
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get get Tick XDistance From Scale in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.TickIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getTickXDistanceFromScale(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getTickXDistanceFromScale: function (scaleIndex, TickIndex) {
            if (scaleIndex < this.Model.scales.length && TickIndex < this.Model.scales[scaleIndex].ticks.length)
                return this.scaleEl[scaleIndex].ticks[TickIndex].distanceFromScale.x;
        },
		/**
        * To set setTickYDistanceFromScale 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.TickIndex value for the Gauge
		* @param {number} arguemnt.value Tick YDistance From Scalefor Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setTickYDistanceFromScale(0,0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setTickYDistanceFromScale: function (scaleIndex, TickIndex, value) {
            if (scaleIndex < this.Model.scales.length && TickIndex < this.Model.scales[scaleIndex].ticks.length && value != null) {
                this.scaleEl[scaleIndex].ticks[TickIndex].distanceFromScale.y = value;
                if (this.contextEl.putImageData) {
                    this._reDrawTickMark();
                }
                else
                    this.initialize();
            }
        },
		/**
        * To get Tick YDistance From Scale in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.TickIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getTickYDistanceFromScale(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getTickYDistanceFromScale: function (scaleIndex, TickIndex) {
            if (scaleIndex < this.Model.scales.length && TickIndex < this.Model.scales[scaleIndex].ticks.length)
                return this.scaleEl[scaleIndex].ticks[TickIndex].distanceFromScale.y;
        },
		/**
        * To set setScaleLocation 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {object} arguemnt.value Scale position for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setScaleLocation(0,{x:20,y:20});
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setScaleLocation: function (scaleIndex, value) {
            if (scaleIndex < this.Model.scales.length && value != null) {
                this.scaleEl[scaleIndex].position.x = value.x;
                this.scaleEl[scaleIndex].position.y = value.y;
                this.initialize();
            }
        },
		/**
        * To get Scale Location in object
		* @return object
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getScaleLocation(0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getScaleLocation: function (scaleIndex) {
            if (scaleIndex < this.Model.scales.length)
                return { "x": this.scaleEl[scaleIndex].position.x, "y": this.scaleEl[scaleIndex].position.y }
        },
		/**
        * To set setMaximumValue 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number} arguemnt.value MaximumValue for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setMaximumValue(0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setMaximumValue: function (scaleIndex, value) {
            if (scaleIndex < this.Model.scales.length && value != null) {
                this.scaleEl[scaleIndex].maximum = value;
                this.initialize();
            }
        },
		/**
        * To get Maximum Value in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getMaximumValue(0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getMaximumValue: function (scaleIndex) {
            if (scaleIndex < this.Model.scales.length)
                return this.scaleEl[this.scaleIndex].maximum;
        },
		/**
        * To set setMinimumValue 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number} arguemnt.value MinimumValue for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setMinimumValue(0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setMinimumValue: function (scaleIndex, value) {
            if (scaleIndex < this.Model.scales.length && value != null) {
                this.scaleEl[scaleIndex].minimum = value;
                this.initialize();
            }
        },
		/**
        * To get PointerValue in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.pointerIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getMinimumValue(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getMinimumValue: function (scaleIndex) {
            if (scaleIndex < this.Model.scales.length)
                return this.scaleEl[this.scaleIndex].minimum;
        },
		/**
        * To set setScaleBarSize 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number} arguemnt.value ScaleBarSize for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setScaleBarSize(0,20);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setScaleBarSize: function (scaleIndex, value) {
            if (scaleIndex < this.Model.scales.length && value != null) {
                this.scaleEl[scaleIndex].width = value;
                this.initialize();
            }
        },
		/**
        * To get Scale Bar Size in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number}  argument.pointerIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getScaleBarSize(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getScaleBarSize: function (scaleIndex) {
            if (scaleIndex < this.Model.scales.length)
                return this.scaleEl[scaleIndex].width;
        },
		/**
        * To set setScaleBarLength 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number} arguemnt.value Scale Bar Length for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setScaleBarLength(0,150);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setScaleBarLength: function (scaleIndex, value) {
            if (scaleIndex < this.Model.scales.length && value != null) {
                this.scaleEl[scaleIndex].length = value;
                this.initialize();
            }
        },
		/**
        * To set setScaleStyle 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number} arguemnt.value for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setScaleStyle(0,"thermometer");
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setScaleStyle: function (scaleIndex, value) {
            if (scaleIndex < this.Model.scales.length && value != null) {
                this.scaleEl[scaleIndex].type = value;
                this.initialize();
            }
        },
		/**
        * To get Scale Style in string
		* @return string
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getScaleStyle(0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getScaleStyle: function (scaleIndex) {
            if (scaleIndex < this.Model.scales.length)
                return this.scaleEl[scaleIndex].type;
        },
		/**
        * To get ScaleBarLength in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getScaleBarLength(0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getScaleBarLength: function (scaleIndex) {
            if (scaleIndex < this.Model.scales.length)
                return this.scaleEl[scaleIndex].length;
        },
		/**
        * To set setScaleBorderWidth 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number} arguemnt.value Scale Border Width for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setScaleBorderWidth(0,10);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setScaleBorderWidth: function (scaleIndex, value) {
            if (scaleIndex < this.Model.scales.length && value != null) {
                this.scaleEl[scaleIndex].border.width = value;
                this.initialize();
            }
        },
		/**
        * To set setScaleDirection 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number} arguemnt.value Scale Direction for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setScaleDirection(0,"counterclockwise");
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setScaleDirection: function (scaleIndex, value) {
            if (scaleIndex < this.Model.scales.length && value != null) {
                this.scaleEl[scaleIndex].direction = value;
                this.initialize();
            }
        },
		/**
        * To get Scale Direction in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getScaleDirection(0,0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getScaleDirection: function (scaleIndex) {
            if (scaleIndex < this.Model.scales.length)
                return this.scaleEl[scaleIndex].direction;
        },
		/**
        * To get Scale Border Width in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getScaleBorderWidth(0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getScaleBorderWidth: function (scaleIndex) {
            if (scaleIndex < this.Model.scales.length)
                return this.scaleEl[scaleIndex].border.width;
        },
		/**
        * To set setMajorIntervalValue 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number} arguemnt.value Major Interval Value for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setMajorIntervalValue(0,5);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setMajorIntervalValue: function (scaleIndex, value) {
            if (scaleIndex < this.Model.scales.length && value != null) {
                this.scaleEl[scaleIndex].majorIntervalValue = value;
                this.initialize();
            }
        },
		/**
        * To get Major Interval Value in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getMajorIntervalValue(0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getMajorIntervalValue: function (scaleIndex) {
            if (scaleIndex < this.Model.scales.length)
                return this.scaleEl[scaleIndex].majorIntervalValue;
        },
		/**
        * To set setMinorIntervalValue 
		* @return jQuery
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @param {number} arguemnt.value Minor Interval Value for Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.setMinorIntervalValue(0,2);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        setMinorIntervalValue: function (scaleIndex, value) {
            if (scaleIndex < this.Model.scales.length && value != null) {
                this.scaleEl[scaleIndex].minorIntervalValue = value;
                this.initialize();
            }
        },
		/**
        * To get Minor Interval Value in number
		* @return number
		* @param {number} argument.scaleIndex scaleIndex value for the Gauge
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.getMinorIntervalValue(0);
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
        getMinorIntervalValue: function (scaleIndex) {
            if (scaleIndex < this.Model.scales.length)
                return this.scaleEl[scaleIndex].minorIntervalValue;
        },
		/**
         * To redraw the bar pointer
		 * @private
         */
        _reDrawBarPointer: function () {
            if (this.Model.frame.backgroundImageUrl)
                this.initialize();
            else {
                if (this.contextEl.putImageData != "undefined") {
                    this.contextEl.putImageData(this._getBarPointerImage(), 0, 0);
                    this._setBarPointers();
                    this._setMarkerPointers();
                }

            }
        },
		/**
         * To redraw the Marker pointer
		 * @private
         */
        _reDrawMarkerPointer: function () {
            if (this.Model.frame.backgroundImageUrl)
                this.initialize();
            else {
                if (this.contextEl.putImageData != "undefined") {
                    this.contextEl.putImageData(this._getMarkerPointerImage(), 0, 0);
                    this._setMarkerPointers();
                }

            }
        },
		/**
         * To redraw the custom label
		 * @private
         */
        _reDrawCustomLabel: function () {
            if (this.Model.frame.backgroundImageUrl)
                this.initialize();
            else {
                this.contextEl.putImageData(this._getCustomLabelImage(), 0, 0);
                this._setCustomLabel();
                this._setIndicators();
                this._setBarPointers();
                this._setMarkerPointers();

            }
        },
		/**
         * To redraw the Range
		 * @private
         */
        _reDrawRange: function () {
            if (this.Model.frame.backgroundImageUrl)
                this.initialize();
            else {
                this.contextEl.putImageData(this._getRangeImage(), 0, 0);
                this._setRange();
                this._setCustomLabel();
                this._setIndicators();
                this._setBarPointers();
                this._setMarkerPointers();

            }
        },
		/**
         * To redraw the Label
		 * @private
         */
        _reDrawLabel: function () {
            if (this.Model.frame.backgroundImageUrl)
                this.initialize();
            else {
                this.contextEl.putImageData(this._getLabelImage(), 0, 0);
                this._setLabels();
                this._setRange();
                this._setCustomLabel();
                this._setIndicators();
                this._setBarPointers();
                this._setMarkerPointers();

            }
        },
		/**
         * To redraw the TickMark
		 * @private
         */
        _reDrawTickMark: function () {
            if (this.Model.frame.backgroundImageUrl)
                this.initialize();
            else {
                this.contextEl.putImageData(this._getTickImage(), 0, 0);
                this._setTicks();
                this._setLabels();
                this._setRange();
                this._setCustomLabel();
                this._setIndicators();
                this._setBarPointers();
                this._setMarkerPointers();

            }
        },
		/**
         * To refresh the gauge
		 * @private
         */
        refresh: function () {
            this._init();
        },
		/**
        * To export Image
		* @return jQuery
		* @param {number} argument.fileName for the Image
		* @param {number}  argument.fileType for the Image
		* @example 
		* &lt;div id="LinearGauge1"&gt;&lt;/div&gt; <br>  
		* &lt;script&gt;
        * $("#LinearGauge1").ejLinearGauge();
		* var LinearGaugeObj = $("#LinearGauge1").data("ejLinearGauge");
		* LinearGaugeObj.exportImage("myImage","jpeg");
		* &lt;/script&gt;
		*@memberof ejLinearGauge
		* @instance
        */
		exportImage: function(fileName, fileType) {
			/// <summary>This function save the rendered canvas image</summary>
            /// <param name="fileName" type="String">fileName to which the image has been saved</param>
            /// <param name="fileType" type="String">fileType to which the image has been saved</param>
            var lnk = document.createElement('a'),e;
            lnk.download = fileName+"."+fileType;
            lnk.href = this.canvasEl[0].toDataURL("image/" + fileType).replace("image/" + fileType, "image/octet-stream");
            if (document.createEvent) {
              e = document.createEvent("MouseEvents");
              e.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false,false, 0, null);
            lnk.dispatchEvent(e);
            } 
			else if (lnk.fireEvent) {
            lnk.fireEvent("onclick");
            }
        },
		/**
         * To resize canvas while resizing the window
		 * @private
         */
		resizeCanvas:function () {
            if (proxy.element.width() != initialDivWidth || proxy.element.height() != initialDivHeight) {
                var canvasWidth = proxy.element.width() / initialDivWidth;
                var canvasHeight = proxy.element.height() / initialDivHeight;
                proxy.model.width *=canvasWidth;
                proxy.model.height *= canvasHeight;
				for(var i=0;proxy.model.scales[i]!=null;i++){
                if (proxy.element.data("ejLinearGauge").model.orientation.toString() == "Vertical")
                    proxy.element.data("ejLinearGauge").model.scales[i].length *= canvasHeight;
                else
                    proxy.element.data("ejLinearGauge").model.scales[i].length *= canvasWidth;
				for(var j=0;proxy.model.scales[i].markerPointers[j]!=null;j++){
                proxy.model.scales[i].markerPointers[j].length *= canvasWidth;
                proxy.model.scales[i].markerPointers[j].width *= canvasWidth;
				}
				}
                proxy.refresh();
                initialDivWidth = proxy.element.width();
                initialDivHeight = proxy.element.height();
            }
        },
        //Client-Side Events
		/**
         * Section For handle the DrawTicks event
		 * @private
         */
		_onDrawTicks: function (tickAngle, tickValue) {
		    var tick = { index: this.tickIndex, element: this.tickEl[this.tickIndex], angle: parseInt(tickAngle), value: tickValue }
            var data = { Object: this, Model: this.Model, scaleElement: this.Model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, context: this.contextEl, style: this.style, position: this.location };
            this._trigger("drawTicks", data);
        },
		/**
         * Section For handle the DrawLabels event
		 * @private
         */
		_onDrawLabels: function (labelAngle) {
		    var label = { index: this.labelIndex, element: this.labelEl[this.labelIndex], angle: parseInt(labelAngle), value: this.labelValue }
		    var data = { object: this, Model: this.Model, scaleElement: this.Model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, context: this.contextEl, style: this.style, position: this.location, label: label };
		    this._trigger("drawLabels", data);
		},
		/**
         * Section For handle the DrawBarPointers event
		 * @private
         */
        _onDrawBarPointers: function (pointerValue) {
            var data = { object: this, Model: this.Model, scaleElement: this.Model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, barPointerIndex: this.barPointerIndex, barElement: this.barPointerEl[this.barPointerIndex], context: this.contextEl, style: this.style, position: this.location, pointerValue: pointerValue };
            this._trigger("drawBarPointers", data);
        },
		/**
         * Section For handle the DrawMarkerPointers event
		 * @private
         */
        _onDrawMarkerPointers: function (pointerAngle, pointerValue) {
            var data = { object: this, Model: this.Model, scaleElement: this.Model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, markerPointerIndex: this.markerPointerIndex, markerElement: this.markerPointerEl[this.markerPointerIndex], context: this.contextEl, style: this.style, position: this.location, pointerValue: pointerValue, pointerAngle: parseInt(pointerAngle) };
            this._trigger("drawMarkerPointers", data);
        },
		/**
         * Section For handle the DrawRange event
		 * @private
         */
        _onDrawRange: function () {
            var data = { object: this, Model: this.Model, scaleElement: this.Model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, rangeIndex: this.rangeIndex, rangeElement: this.rangeEl[this.rangeIndex], context: this.contextEl, style: this.style, position: this.location };
            this._trigger("drawRange", data);
        },
		/**
         * Section For handle the DrawCustomLabel event
		 * @private
         */
        _onDrawCustomLabel: function () {
            var data = { object: this, Model: this.Model, scaleElement: this.Model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, customLabelIndex: this.customLabelIndex, customLabelElement: this.customLabelEl[this.customLabelIndex], context: this.contextEl, style: this.style, position: this.location };
            this._trigger("drawCustomLabel", data);
        },
		/**
         * Section For handle the DrawIndicators event
		 * @private
         */
        _onDrawIndicators: function (location, style) {
            var data = { object: this, Model: this.Model, scaleElement: this.Model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, indicatorIndex: this.indicatorIndex, indicatorEl: this.indicatorEl[this.indicatorIndex], context: this.contextEl, style: this.style, position: this.location };
            this._trigger("drawIndicators", data);
        },
		/**
         * Invoke while onload
		 * @private
         */
        onLoad: function () {
            var data = { object: this, Model: this.Model, scaleElement: this.Model.scales, context: this.contextEl };
            this._trigger("load", data);
        },
		/**
         * Invoke while initialize
		 * @private
         */
        _onInit: function () {
            var data = { object: this, Model: this.Model, scaleElement: this.Model.scales, context: this.contextEl };
            this._trigger("init", data);
        },
		/**
         * Invoke while render complete
		 * @private
         */
        _onRenderComplete: function () {
            var data = { object: this, Model: this.Model, scaleElement: this.Model.scales, context: this.contextEl };
            this._trigger("renderComplete", data);
        },
        /**
         * Section For handle the MouseClick event
		 * @private
         */
        _onMouseClick: function (pointerValue) {
            var markerpointer = { index: this.markerPointerIndex, element: this.markerPointerEl[this.markerPointerIndex], value: pointerValue }
            var data = { object: this, scaleElement: this.model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, context: this.contextEl, style: this.style, position: this.location };
            this._trigger("mouseClick", data);
        },
        /**
         * Section For handle the MouseClickMove event
		 * @private
         */
        _onMouseClickMove: function (pointerValue) {
            var markerpointer = { index: this.markerPointerIndex, element: this.markerPointerEl[this.markerPointerIndex], value: pointerValue }
            var data = { object: this, scaleElement: this.model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, context: this.contextEl, style: this.style, position: this.location };
            this._trigger("mouseClickMove", data);
        },
        /**
         * Section For handle the MouseClickUp event
		 * @private
         */
        _onMouseClickUp: function (pointerValue) {
            var markerpointer = { index: this.markerPointerIndex, element: this.markerPointerEl[this.markerPointerIndex], value: pointerValue }
            var data = { object: this, scaleElement: this.model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, context: this.contextEl, style: this.style, position: this.location };
            this._trigger("mouseClickUp", data);
        },
        //_trigger: function (type, event, data) {
        //    var fn = this.Model[type];
        //    event = $.Event(event);
        //    event.type = type;
        //    $(this.GaugeEl).trigger(event, data);
        //    return !($.isFunction(fn) &&
        //        fn(this, data) === false ||
        //        event.isDefaultPrevented());
        //},

        //trigger: function (element, eventName, e) {
        //    e = $.extend(e || {}, new $.Event(eventName));
        //    e.stopPropagation();
        //    $(element).trigger(e);
        //    return e.isDefaultPrevented();
        //},
		/**
         * To restore width
		 * @private
         */
        _restoreWidth: function () {
            this.scaleEl[this.scaleIndex].length = this.scaleEl[this.scaleIndex].length + this.bottomRadius + this.scaleEl[this.scaleIndex].width;
            if (this.Model.orientation == "Vertical") {
                if (this.scaleEl[this.scaleIndex].direction == "clockwise")
                    this.scaleStartY[this.scaleIndex] = this.scaleStartY[this.scaleIndex] - this.bottomRadius - this.scaleEl[this.scaleIndex].width / 2;
                else
                    this.scaleStartY[this.scaleIndex] = this.scaleStartY[this.scaleIndex] - this.scaleEl[this.scaleIndex].width / 2;
            }
            else {
                if (this.scaleEl[this.scaleIndex].direction == "clockwise")
                    this.scaleStartX[this.scaleIndex] = this.scaleStartX[this.scaleIndex] - this.bottomRadius - this.scaleEl[this.scaleIndex].width / 2;
                else
                    this.scaleStartX[this.scaleIndex] = this.scaleStartX[this.scaleIndex] - this.scaleEl[this.scaleIndex].width / 2;
            }
        },
		/**
         * To modify width
		 * @private
         */
        _modifyWidth: function () {
            this.scaleEl[this.scaleIndex].length = this.scaleEl[this.scaleIndex].length - this.bottomRadius - this.scaleEl[this.scaleIndex].width;
            if (this.Model.orientation == "Vertical") {
                if (this.scaleEl[this.scaleIndex].direction == "clockwise")
                    this.scaleStartY[this.scaleIndex] = this.scaleStartY[this.scaleIndex] + this.bottomRadius + this.scaleEl[this.scaleIndex].width / 2;
                else
                    this.scaleStartY[this.scaleIndex] = this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2;
            }
            else {
                if (this.scaleEl[this.scaleIndex].direction == "clockwise")
                    this.scaleStartX[this.scaleIndex] = this.scaleStartX[this.scaleIndex] + this.bottomRadius + this.scaleEl[this.scaleIndex].width / 2;
                else
                    this.scaleStartX[this.scaleIndex] = this.scaleStartX[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2;
            }
        },
        // return y positions for vertical gauge
		/**
         * To get Clockwise LinePosition
		 * @private
         */
        _getClockwiseLinePosition: function (value) {
            var tempVal, linePosition;
            tempVal = (value - this.scaleEl[this.scaleIndex].minimum) / (this.scaleEl[this.scaleIndex].maximum - this.scaleEl[this.scaleIndex].minimum) * 100;
            linePosition = this.Model.orientation == "Vertical" ? this.scaleStartY[this.scaleIndex] + parseInt((tempVal * this.scaleEl[this.scaleIndex].length) / 100) : this.scaleStartX[this.scaleIndex] + parseInt((tempVal * this.scaleEl[this.scaleIndex].length) / 100);
            return linePosition;
        },
		/**
         * To get Counter Clockwise LinePosition
		 * @private
         */
        _getCounterClockwiseLinePosition: function (value) {
            var tempVal, linePosition;
            tempVal = this.scaleEl[this.scaleIndex].maximum - value + this.scaleEl[this.scaleIndex].minimum;
            tempVal = (tempVal - this.scaleEl[this.scaleIndex].minimum) / (this.scaleEl[this.scaleIndex].maximum - this.scaleEl[this.scaleIndex].minimum) * 100;
            linePosition = this.Model.orientation == "Vertical" ? this.scaleStartY[this.scaleIndex] + parseInt((tempVal * this.scaleEl[this.scaleIndex].length) / 100) : this.scaleStartX[this.scaleIndex] + parseInt((tempVal * this.scaleEl[this.scaleIndex].length) / 100);
            return linePosition;
        },
		/**
         * To get value
		 * @private
         */
        _getValue: function (position) {
            if (this.Model.orientation == "Vertical")
                tempVal = ((position.y - this.scaleStartY[this.scaleIndex]) / this.scaleEl[this.scaleIndex].length) * 100;
            else
                tempVal = (((position.x - this.scaleStartX[this.scaleIndex])) / this.scaleEl[this.scaleIndex].length) * 100;
            value = ((tempVal * (this.scaleEl[this.scaleIndex].maximum - this.scaleEl[this.scaleIndex].minimum)) + this.scaleEl[this.scaleIndex].minimum) / 100;
            if (this.scaleEl[this.scaleIndex].direction == "counterclockwise")
                value = this.scaleEl[this.scaleIndex].maximum + this.scaleEl[this.scaleIndex].minimum - value;
            return value;
        },
		/**
         * To get Pointer X Position
		 * @private
         */
        _getPointerXPosition: function (element) {
            if (this.Model.orientation == "Vertical") {
                if (this.markerPlacement == "far") {
                    startX = this.scaleStartX[this.scaleIndex] + this.scaleEl[this.scaleIndex].width + this.scaleEl[this.scaleIndex].border.width / 2 + element.distanceFromScale;
                    angle = 0;
                }
                if (this.markerPlacement == "near") {
                    startX = this.scaleStartX[this.scaleIndex] + element.distanceFromScale;
                    angle = 180;
                }
                if (this.markerPlacement == "center") {
                    if (element.type == "circle")
                        startX = this.scaleStartX[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 - radius + element.distanceFromScale;
                    else
                        startX = this.scaleStartX[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 - element.width / 2 + element.distanceFromScale;
                    angle = 0;
                }
            }
            else {
                if (this.markerPlacement == "far") {
                    startX = this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width + this.scaleEl[this.scaleIndex].border.width / 2 + element.distanceFromScale;
                    angle = 90;
                }
                if (this.markerPlacement == "near") {
                    startX = this.scaleStartY[this.scaleIndex] - this.scaleEl[this.scaleIndex].border.width / 2 + element.distanceFromScale;
                    angle = 270;
                }
                if (this.markerPlacement == "center") {
                    if (element.type == "circle")
                        startX = this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 - radius + element.distanceFromScale;
                    else
                        startX = this.scaleStartY[this.scaleIndex] + this.scaleEl[this.scaleIndex].width / 2 - element.length / 2 + element.distanceFromScale;
                    angle = 90;
                }
            }
            return { "startx": startX, "angle": angle };
        },
		/**
         * To get hexa decimal value from RGB combination
		 * @private
         */
        _hexFromRGB: function (r, g, b) {
            var hex = [r.toString(16), g.toString(16), b.toString(16)];
            $.each(hex, function (nr, val) { if (val.length === 1) { hex[nr] = "0" + val; } });
            return hex.join("").toUpperCase();
        },
		/**
         * To set GradientColor
		 * @private
         */
        _setGradientColor: function (element, gradients, options) {
            var self = element;
            if (options.Name || typeof (options) === "string") {
                gradients.addColorStop(0, options);
                gradients.addColorStop(1, options);
            }
            else
                $.each(options, function (index, colorElement) {
                    gradients.addColorStop(colorElement.ColorStop != NaN ? colorElement.ColorStop : 0, typeof (colorElement.Color) === "string" ? colorElement.Color : colorElement.Color);
                });
        },
		/**
         * To get Font String
		 * @private
         */
        _getFontString: function (element, font) {
            return font.fontStyle + " " + ((font.size == null) ? "11px" : font.size) + " " + font.fontFamily;
        },
		/**
         * To get  Pointer Dimension
		 * @private
         */
        _setPointerDimension: function (style, element) {
            if (element.Model.orientation) {
                if (element.Model.orientation == "Horizontal") {
                    var tempWidth = style.width;
                    var tempHeight = style.height;
                    style.height = tempWidth;
                    style.width = tempHeight;
                }
            }
            return style;
        },
		/**
         * To set  cntext Rotation
		 * @private
         */
        _setContextRotation: function (style, element) {
            element.contextEl.rotate(Math.PI * (style.angle / 180));
        },
		/**
         * To wire  the events
		 * @private
         */
        wireEvents: function () {
            this.startEv = 'mousedown';
            this.moveEv = 'mousemove';
            this.endEv = 'mouseup';
            //this.onMouseMoveHandler = $.proxy(this._onMouseMove, this);
            //this.onMouseUpHandler = $.proxy(this._onMouseUp, this);
            this.onMouseDownHandler = $.proxy(this._onMouseDown, this);
            this.element.bind(this.startEv, this.onMouseDownHandler);
        },
		/**
         * To Unwire  the events
		 * @private
         */
        unWireEvents: function () {
            this.element.unbind(this.startEv, this.onMouseDownHandler);
        },
		/**
         * To block Default Actions
		 * @private
         */
        _blockDefaultActions: function (e) {
            e.cancelBubble = true;
            e.returnValue = false;
            if (e.preventDefault) e.preventDefault();
            if (e.stopPropagation) e.stopPropagation();
        },
		/**
         * Section For handle the Mouse Down event
		 * @private
         */	
        _onMouseDown: function (e) {
            var startPoint, endPoint, value, position, greaterValue, lesserValue, startX, isOffset;
            this._blockDefaultActions(e);
            startPoint = { "x": this.centerX, "y": this.centerY };
            endPoint = { "x": e.pageX - $(this.canvasEl).offset().left - (this.Model.frame.outerWidth + this.Model.frame.innerWidth), "y": e.pageY - $(this.canvasEl).offset().top - (this.Model.frame.outerWidth + this.Model.frame.innerWidth) };
            offsetPoint = { "x": e.pageX - $(this.canvasEl).offset().left, "y": e.pageY - $(this.canvasEl).offset().top };
            value = this._getValue(endPoint);
            var self = this;
            $.each(this.Model.scales, function (index, element) {
                self.scaleIndex = index;
                if (element.markerPointers != null) {
                    self.markerPointerEl = element.markerPointers;
                    $.each(element.markerPointers, function (index, element) {
                        if (self.scaleEl[self.scaleIndex].direction == "clockwise")
                            position = self._getClockwiseLinePosition(element.value);
                        else
                            position = self._getCounterClockwiseLinePosition(element.value);
                        greaterValue = position + element.width;
                        lesserValue = position - element.width;
                        startX = self._getPointerXPosition(element).startx;
                        var isOffset = self._isBetween(((self.Model.orientation == "Horizontal" ? endPoint.y : endPoint.x) - element.width), ((self.Model.orientation == "Horizontal" ? endPoint.y : endPoint.x) + element.width), startX);
                        if ((self.Model.orientation == "Horizontal" ? self._isBetween(lesserValue, greaterValue, endPoint.x) : self._isBetween(lesserValue, greaterValue, endPoint.y)) && isOffset)
                            self.activeElement = element;
                        if (self.Model.scales[self.scaleIndex].barPointers[index] != null)
                            self.activeBarElement = self.Model.scales[self.scaleIndex].barPointers[index];
                        if (self.model.mouseClick)
                            self._onMouseClick(element.value);
                        self.onMouseMoveHandler = $.proxy(self._onMouseMove, self);
                        self.onMouseUpHandler = $.proxy(self._onMouseUp, self);
                        $(document).bind(self.moveEv, self.onMouseMoveHandler);
                        $(document).bind(self.endEv, self.onMouseUpHandler);
                    });
                }
            });
        },
		/**
         * To check whether the given value is in between first and Last arguemnet
		 * @private
         */	
        _isBetween: function (first, last, number) {
            return (first < last ? number >= first && number <= last : number >= last && number <= first);
        },
		/**
         * Section For handle the Mouse up event
		 * @private
         */	
        _onMouseUp: function () {
            this.mouseMove = false;
            $(document).unbind(self.moveEv, self.onMouseMoveHandler);
            $(document).unbind(self.endEv, self.onMouseUpHandler);
            if (this.model.mouseClickUp)
                this._onMouseClickUp(this.activeElement.value);
        },
		/**
         * Section For handle the Mouse move event
		 * @private
         */	
        _onMouseMove: function (e) {
            this._blockDefaultActions(e);
            startPoint = { "x": this.centerX, "y": this.centerY };
            endPoint = { "x": e.pageX - $(this.canvasEl).offset().left - (this.Model.frame.outerWidth + this.Model.frame.innerWidth), "y": e.pageY - $(this.canvasEl).offset().top - (this.Model.frame.outerWidth + this.Model.frame.innerWidth) };
            this.activeElement.value = this._getValue(endPoint);
            if (this.model.mouseClickMove)
                this._onMouseClickMove(this.activeElement.value);
            if (this.activeBarElement)
                this.activeBarElement.value = this._getValue(endPoint);
            if (this.contextEl.putImageData)
                this._reDrawBarPointer();
            else
                this._init();
        },

        //************************* Skin Functions **********************************//
		/**
         * To set theme
		 * @private
         */	
        _setTheme: function () {
            selectedTheme = ej.datavisualization.LinearGauge.Themes[this.model.theme];
            this._setThemeColors(selectedTheme);
        },
		/**
         * To set theme color
		 * @private
         */	
        _setThemeColors: function (selectedTheme) {
            var result = [], jsonObj = ej.datavisualization.LinearGauge.Themes;
            for (var name in jsonObj) {
                result.push(name);
            }
            for (var th = 0; th < result.length; th++) {
                this.model.backgroundColor = ((!this.model.backgroundColor || this.model.backgroundColor == jsonObj[result[th]].scales.backgroundColor) ? selectedTheme.scales.backgroundColor : this.model.backgroundColor);
                this.model.borderColor = ((!this.model.borderColor || this.model.borderColor == jsonObj[result[th]].scales.border.color) ? selectedTheme.scales.border.color : this.model.borderColor);
                this.model.labelColor = ((!this.model.labelColor || this.model.labelColor == jsonObj[result[th]].scales.labels.labelColor) ? selectedTheme.scales.labels.labelColor : this.model.labelColor);
                this.model.tickColor = ((!this.model.tickColor || this.model.tickColor == jsonObj[result[th]].scales.ticks.color) ? selectedTheme.scales.ticks.color : this.model.tickColor);

                for (var i = 0; i < this.model.scales.length; i++) {
                    for (var m = 0; m < this.model.scales[i].markerPointers.length; m++) {
                        this.model.scales[i].markerPointers[m].backgroundColor = (!this.model.scales[i].markerPointers[m].backgroundColor || this.model.scales[i].markerPointers[m].backgroundColor == jsonObj[result[th]].scales.markerPointers.backgroundColor) ? selectedTheme.scales.markerPointers.backgroundColor : this.model.scales[i].markerPointers[m].backgroundColor;
                        this.model.scales[i].markerPointers[m].border.color = (!this.model.scales[i].markerPointers[m].border.color || this.model.scales[i].markerPointers[m].border.color == jsonObj[result[th]].scales.markerPointers.border.color) ? selectedTheme.scales.markerPointers.border.color : this.model.scales[i].markerPointers[m].border.color;
                    }
                    for (var b = 0; b < this.model.scales[i].barPointers.length; b++) {
                        this.model.scales[i].barPointers[b].backgroundColor = (!this.model.scales[i].barPointers[b].backgroundColor || this.model.scales[i].barPointers[b].backgroundColor == jsonObj[result[th]].scales.barPointers.backgroundColor) ? selectedTheme.scales.barPointers.backgroundColor : this.model.scales[i].barPointers[b].backgroundColor;
                        this.model.scales[i].barPointers[b].border.color = (!this.model.scales[i].barPointers[b].border.color || this.model.scales[i].barPointers[b].border.color == jsonObj[result[th]].scales.barPointers.border.color) ? selectedTheme.scales.barPointers.border.color : this.model.scales[i].barPointers[b].border.color;
                    }
                }
            }
        }
    });
    /**
	 * Enum for gauge TickType	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.LinearGauge.TickType = {
        /**  To set the TickType majorinterval. */
        MajorInterval: "majorinterval",
        /**  To set the TickType minorinterval. */
        MinorInterval: "minorinterval"
    };
    /**
	 * Enum for gauge LabelType	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.LinearGauge.LabelType = {
        /**  To set the LabelType major. */
        Major: "major",
        /**  To set the LabelType minor. */
        Minor: "minor"
    };
    /**
	 * Enum for gauge FontStyle	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.LinearGauge.FontStyle = {
        /**  To set the FontStyle bold. */
        Bold: "bold",
        /**  To set the FontStyle italic. */
        Italic: "italic",
        /**  To set the FontStyle regular. */
        Regular: "regular",
        /**  To set the FontStyle strikeout. */
        Strikeout: "strikeout",
        /**  To set the FontStyle underline. */
        Underline: "underline"
    };


    /**
	 * Enum for gauge PointerPlacement	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.LinearGauge.PointerPlacement = {
        /**  To set the PointerPlacement near. */
        Near: "near",
        /**  To set the PointerPlacement far. */
        Far: "far",
        /**  To set the PointerPlacement center. */
        Center: "center"
    };
    /**
	 * Enum for gauge TickPlacement	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.LinearGauge.TickPlacement = {
        /**  To set the TickPlacement near. */
        Near: "near",
        /**  To set the TickPlacement far. */
        Far: "far",
        /**  To set the TickPlacement center. */
        Center: "center"
    };
    /**
	 * Enum for gauge LabelPlacement	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.LinearGauge.LabelPlacement = {
        /**  To set the LabelPlacement near. */
        Near: "near",
        /**  To set the LabelPlacement far. */
        Far: "far",
        /**  To set the LabelPlacement center. */
        Center: "center"
    };
    /**
	 * Enum for gauge RangePlacement	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.LinearGauge.RangePlacement = {
        /**  To set the RangePlacement near. */
        Near: "near",
        /**  To set the RangePlacement far. */
        Far: "far",
        /**  To set the RangePlacement center. */
        Center: "center"
    };
    /**
	 * Enum for gauge UnitTextPlacement	 
	 * @enum {string}
	 * @global 
	 */

    ej.datavisualization.LinearGauge.UnitTextPlacement = {
        /**  To set the UnitTextPlacement front. */
        Front: "front",
        /**  To set the UnitTextPlacement back. */
        Back: "back"
    };
    /**
	 * Enum for gauge Directions	 
	 * @enum {string}
	 * @global 
	 */

    ej.datavisualization.LinearGauge.Directions = {
        /**  To set the Directions clockwise. */
        Clockwise: "clockwise",
        /**  To set the Directions counterclockwise. */
        CounterClockwise: "counterclockwise"
    };
    /**
	 * Enum for gauge ScaleType	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.LinearGauge.ScaleType = {
        /**  To set the ScaleType rectangle. */
        Rectangle: "rectangle",
        /**  To set the ScaleType roundedrectangle. */
        RoundedRectangle: "roundedrectangle",
        /**  To set the ScaleType thermometer. */
        Thermometer: "thermometer"
    };
    /**
	 * Enum for gauge IndicatorType	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.LinearGauge.IndicatorType = {
        /**  To set the IndicatorType rectangle. */
        Rectangle: "rectangle",
        /**  To set the IndicatorType circle. */
        Circle: "circle",
        /**  To set the IndicatorType roundedrectangle. */
        RoundedRectangle: "roundedrectangle",
        /**  To set the IndicatorType text. */
        Text: "text"
    };
    /**
	 * Enum for gauge MarkerType	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.LinearGauge.MarkerType = {
        /**  To set the MarkerType rectangle. */
        Rectangle: "rectangle",
        /**  To set the MarkerType triangle. */
        Triangle: "triangle",
        /**  To set the MarkerType ellipse. */
        Ellipse: "ellipse",
        /**  To set the MarkerType diamond. */
        Diamond: "diamond",
        /**  To set the MarkerType pentagon. */
        Pentagon: "pentagon",
        /**  To set the MarkerType circle. */
        Circle: "circle",
        /**  To set the MarkerType star. */
        Star: "star",
        /**  To set the MarkerType slider. */
        Slider: "slider",
        /**  To set the MarkerType pointer. */
        Pointer: "pointer",
        /**  To set the MarkerType wedge. */
        Wedge: "wedge",
        /**  To set the MarkerType trapezoid. */
        Trapezoid: "trapezoid",
        /**  To set the MarkerType roundedrectangle. */
        RoundedRectangle: "roundedrectangle"
    };
	/**
	 * Enum for gauge Themes	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.LinearGauge.Themes = {
	/**  To set the themes flatlight. */
        flatlight: {
            scales: {
                backgroundColor: "#FFFFFF",
                border: { color: "#1d1e1e" },
                barPointers: {
                    backgroundColor: "#8abc3b",
                    border: { color: "#8abc3b" }
                },
                markerPointers: {
                    backgroundColor: "#212121",
                    border: { color: "#212121" }
                },
                ticks: {
                    color: "#1d1e1e"
                },
                labels: {
                    labelColor: "#222222"
                }
            }
        },
		/**  To set the themes flatdark. */
        flatdark: {
            scales: {
                backgroundColor: "#808080",
                border: { color: "#808080" },
                barPointers: {
                    backgroundColor: "#8abc3b",
                    border: { color: "#8abc3b" }
                },
                markerPointers: {
                    backgroundColor: "#CCCCCC",
                    border: { color: "#CCCCCC" }
                },
                ticks: {
                    color: "#808080"
                },
                labels: {
                    labelColor: "#CCCCCC"
                }
            }
        }
    };

})(jQuery, Syncfusion);
;;