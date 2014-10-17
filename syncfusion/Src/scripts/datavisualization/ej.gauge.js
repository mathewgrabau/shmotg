/*!
*  filename: ej.gauge.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin for Circular Gauge
* @copyright Copyright Syncfusion Inc. 2001 - 2014. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
* @version 11.2 
* @author <a href="mailto:licensing@syncfusion.com">Syncfusion Inc</a>
*/

(function ($, ej, undefined) {

    /**
    * @namespace ej
    * @classdesc The Circular gauge  can be easily configured to the DOM element, such as div. you can create a circular gauge with a highly customizable look and feel.
    * @class ejCircularGauge
    * @param {object} options - For seting the Circular gauge
    * @requires jQuery
    * @requires ej.common.all
    * @requires excanvas.js
    * @example 
    * &lt;div id="CoreCircularGauge"&gt;
    * &lt;/div&gt; <br> 
    * &lt;script&gt;
    * $(function () {
        $("#CoreCircularGauge").ejCircularGauge({
        });
    });
    * &lt;/script&gt;
    * @remarks
    * excanvas.js need to add for IE8 
    */

    ej.widget({ "ejCircularGauge": "ej.datavisualization.CircularGauge" /** @lends ejCircularGauge# */ }, {
        _rootCSS: "e-circulargauge",
        validTags: ["div", "span"],
        // default model
        defaults: /** @lends ejCircularGauge# */{
            /**		
			* Specifies the value of circular gauge.
			* @default 0
            * @alias ejCircularGauge#value
			* @type {number}
			* @example 
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;
			* $("#CoreCircularGauge").ejCircularGauge({ value: 30 });
            * &lt;/script&gt;
			* @memberof ejCircularGauge
			* @instance
			*/
            value: 0,
            /**		
			* Specifies the minimum value of circular gauge.
			* @default 0
            * @alias ejCircularGauge#minimum
			* @type {number}
			* @example 
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;
			* $("#CoreCircularGauge").ejCircularGauge({ minimum: 10 });
            * &lt;/script&gt;
			* @memberof ejCircularGauge
			* @instance
			*/
            minimum: 0,
            /**		
			* Specifies the maximum value of circular gauge.
			* @default 100
            * @alias ejCircularGauge#maximum
			* @type {number}
			* @example 
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;
			* $("#CoreCircularGauge").ejCircularGauge({ maximum: 120 });
            * &lt;/script&gt;
			* @memberof ejCircularGauge
			* @instance
			*/
            maximum: 100,
            /**		
			* Specifies the radius of circular gauge.
			* @default 180
            * @alias ejCircularGauge#radius
			* @type {number}
			* @example 
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;
			* $("#CoreCircularGauge").ejCircularGauge({ radius: 100 });
            * &lt;/script&gt;
			* @memberof ejCircularGauge
			* @instance
			*/
            radius: 180,
            /**		
			* Specifies the width of circular gauge.
			* @default 360
            * @alias ejCircularGauge#width
			* @type {number}
			* @example 
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;
			* $("#CoreCircularGauge").ejCircularGauge({ width: 400 });
            * &lt;/script&gt;
			* @memberof ejCircularGauge
			* @instance
			*/
            width: 360, // Width Should be 2*radius
            /**		
			* Specifies the height of circular gauge.
            * @alias ejCircularGauge#height
			* @default 360
			* @type {number}
			* @example 
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;
			* $("#CoreCircularGauge").ejCircularGauge({ height: 400 });
            * &lt;/script&gt;
			* @memberof ejCircularGauge
			* @instance
			*/
            height: 360, //Height Should be 2*radious
            /**		
			* Specify the frame of circular gauge
			* @default Object
            * @alias ejCircularGauge#frame
            * @type {object}
			* @example 
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;		
			* $("#CoreCircularGauge").ejCircularGauge({ frame:{frameType:ej.datavisualization.CircularGauge.Frame.FullCircle, backgroundImageUrl:"", halfCircleFrameStartAngle:180, halfCircleFrameEndAngle:360} });
            * &lt;/script&gt;
			* @memberof ejCircularGauge
			* @instance
			*/
            frame: {
                /**		
			    * Specifies the frameType of circular gauge. See {@link Frame}
			    * @default ej.datavisualization.CircularGauge.Frame.FullCircle
                * @alias ejCircularGauge#frame->frameType
			    * @type {enum}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;
			    * $("#CoreCircularGauge").ejCircularGauge({  frame:{frameType : "halfcircle"} });
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                frameType: "fullcircle", // ["fullcircle", "halfcircle"],
                /**		
			    * Specify the url of the frame background image for circular gauge
			    * @default null
                * @alias ejCircularGauge#frame->backgroundImageUrl
			    * @type {string}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;			
			    * 	$("#CoreCircularGauge").ejCircularGauge({  frame:{backgroundImageUrl : "Sun.jpg" }});
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                backgroundImageUrl: null,
                /**		
			    * Specifies the start angle for the half circular frame.
			    * @default 180
                * @alias ejCircularGauge#frame->halfCircleFrameStartAngle
			    * @type {number}
			    * @example  
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;
			    * $("#CoreCircularGauge").ejCircularGauge({ frame:{frameType : "halfcircle",halfCircleFrameStartAngle: 0} });
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                halfCircleFrameStartAngle: 180,
                /**		
                * Specifies the end angle for the half circular frame.
                * @default 360
                * @alias ejCircularGauge#frame->halfCircleFrameEndAngle
                * @type {number}
                * @example  
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#CoreCircularGauge").ejCircularGauge({ frame:{frameType : "halfCircle",halfCircleFrameEndAngle: 270}});
                * &lt;/script&gt;
                * @memberof ejCircularGauge
                * @instance
                */
                halfCircleFrameEndAngle: 360
            },
            /**		
			* Specifies the backgroundcolor of circular gauge.
			* @default null
            * @alias ejCircularGauge#backgroundColor
			* @type {string}
			* @example 			
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;
			* $("#CoreCircularGauge").ejCircularGauge({  backgroundColor : "#F234F4" });
            * &lt;/script&gt;
			* @memberof ejCircularGauge
			* @instance
			*/
            backgroundColor: null,
            /**		
			* Specifies the interiorGradient of circular gauge.
			* @default null
            * @alias ejCircularGauge#interiorGradient
			* @type {object}
			* @example 			
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;
			* $("#CoreCircularGauge").ejCircularGauge({ interiorGradient: { colorInfo:[{colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] } }); 
            * &lt;/script&gt;
			* @memberof ejCircularGauge
			* @instance
			*/
            interiorGradient: null, //{colorInfo:[{colorStop : 0, color:"Green"},{colorStop : 1, color:"Yellow"}] },
            /**		
			* Specify readonly value of circular gauge
			* @default true
            * @alias ejCircularGauge#readOnly
			* @type {boolean}
			* @example 			
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;
			* $("#CoreCircularGauge").ejCircularGauge({  readOnly : false });
            * &lt;/script&gt;
			* @memberof ejCircularGauge
			* @instance
			*/
            readOnly: true,
            /**		
			* Specify animate value of circular gauge
			* @default true
            * @alias ejCircularGauge#enableAnimation
			* @type {boolean}
			* @example 
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt 			
			* $("#CoreCircularGauge").ejCircularGauge({ enableAnimation: true,scales: [{ pointers: [{ value: 50 }] }] });
            * &lt;/script&gt;
			* @memberof ejCircularGauge
			* @instance
			*/
            enableAnimation: true,
            /**		
			* Specifies animationSpeed of circular gauge
			* @default 500
            * @alias ejCircularGauge#animationSpeed
			* @type {number}
			* @example 
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;
			* 	$("#CoreCircularGauge").ejCircularGauge({ animationSpeed: 500,scales: [{ pointers: [{ value: 50 }] }] });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			* @instance
			*/
            animationSpeed: 500,
            /**		
			* Specify the theme of circular gauge.
			* @default "flatlight"
            * @alias ejCircularGauge#theme
			* @type {string}
			* @example 
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;
			* 	$("#CoreCircularGauge").ejCircularGauge({  theme : "flatlight" });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			* @instance
			*/
            theme: "flatlight",
            /**		
			* Specify isRadialGradient value of circular gauge
			* @default false
            * @alias ejCircularGauge#isRadialGradient
			* @type {boolean}
			* @example 
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;		
			* 	$("#CoreCircularGauge").ejCircularGauge({  isRadialGradient : true });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			* @instance
			*/
            isRadialGradient: false,
            /**		
			* Specify enableResize value of circular gauge
			* @default false
            * @alias ejCircularGauge#enableResize
			* @type {boolean}
			* @example 
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;			
			* 	$("#CoreCircularGauge").ejCircularGauge({  enableResize : true });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			* @instance
			*/
            enableResize: false,
            //Events

             /**     
			 * Triggers while the ticks are being drawn on the gauge.
			 * @event
			 * @name ejCircularGauge#drawTicks		
             * @param {Object} args.object returns the object of the gauge.
             * @param {boolean} args.cancel returns the cancel option value
             * @param {Object} args.context returns the context element
             * @param {Object} args.position returns the startX and startY of the ticks
             * @param {Object} args.model returns the gauge model
             * @param {Object} args.scaleElement returns the options of the scale element.
             * @param {number} args.scaleIndex returns the scaleIndex to which the tick belongs.
             * @param {string} args.style returns the ticks style
             * @param {Object} args.tick returns the tick object of the gauge.
             * @param {number} args.tick.angle returns the angle of the tick.
             * @param {Object} args.tick.element returns the current tick element.
             * @param {number} args.tick.index returns the index of the tick.
             * @param {number} args.pointerValue returns the label value of the tick.
             * @param {string} args.type returns the name of the event
			 * @example 
             * &lt;div id="CoreCircularGauge"&gt;
             * &lt;/div&gt; <br> 
             * &lt;script&gt;
             * $("#CoreCircularGauge").ejCircularGauge({
             *    drawTicks: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			 * @instance
			 */
            drawTicks: null,
            /**     
			 * Triggers while the labels are being drawn on the gauge.
			 * @event
			 * @name ejCircularGauge#drawLabels		
             * @param {Object} args.object returns the object of the gauge.
             * @param {boolean} args.cancel returns the cancel option value
             * @param {Object} args.context returns the context element
             * @param {Object} args.position returns the startX and startY of the labels
             * @param {Object} args.model returns the gauge model
             * @param {Object} args.scaleElement returns the options of the scale element.
             * @param {number} args.scaleIndex returns the scaleIndex to which the label belongs.
             * @param {string} args.style returns the label style
             * @param {Object} args.label returns the label object of the gauge.
             * @param {number} args.label.angle returns the angle of the labels.
             * @param {Object} args.label.element returns the current label element.
             * @param {number} args.label.index returns the index of the label.
             * @param {number} args.pointerValue returns the value of the label.
             * @param {string} args.type returns the name of the event
			 * @example 
             * &lt;div id="CoreCircularGauge"&gt;
             * &lt;/div&gt; <br> 
             * &lt;script&gt;
             * $("#CoreCircularGauge").ejCircularGauge({
             *    drawLabels: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			 * @instance
			 */
            drawLabels: null,
            /**     
			 * Triggers while the pointers are being drawn on the gauge.
			 * @event
			 * @name ejCircularGauge#drawPointers		
             * @param {Object} args.object returns the object of the gauge.
             * @param {boolean} args.cancel returns the cancel option value
             * @param {Object} args.context returns the context element
             * @param {Object} args.position returns the startX and startY of the pointer
             * @param {Object} args.model returns the gauge model
             * @param {Object} args.scaleElement returns the options of the scale element.
             * @param {number} args.scaleIndex returns the scaleIndex to which the pointer belongs.
             * @param {string} args.style returns the pointer style
             * @param {Object} args.pointer returns the pointer object of the gauge.
             * @param {number} args.pointer.angle returns the angle of the pointer.
             * @param {Object} args.pointer.element returns the current pointer element.
             * @param {number} args.pointer.index returns the index of the pointer.
             * @param {number} args.pointer.value returns the value of the pointer.
             * @param {string} args.type returns the name of the event
			 * @example 
             * &lt;div id="CoreCircularGauge"&gt;
             * &lt;/div&gt; <br> 
             * &lt;script&gt;
             * $("#CoreCircularGauge").ejCircularGauge({
             *    drawPointers: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			 * @instance
			 */
            drawPointers: null,
            /**     
			 * Triggers when the ranges begin to be getting drawn on the gauge.
			 * @event
			 * @name ejCircularGauge#drawRange		
             * @param {Object} args.object returns the object of the gauge.
             * @param {boolean} args.cancel returns the cancel option value
             * @param {Object} args.context returns the context element
             * @param {Object} args.position returns the startX and startY of the range
             * @param {Object} args.model returns the gauge model
             * @param {Object} args.scaleElement returns the options of the scale element.
             * @param {number} args.scaleIndex returns the scaleIndex to which the range belongs.
             * @param {string} args.style returns the range style
             * @param {Object} args.rangeElement returns the current range element.
             * @param {number} args.rangeIndex returns the index of the range.
             * @param {string} args.type returns the name of the event
			 * @example 
             * &lt;div id="CoreCircularGauge"&gt;
             * &lt;/div&gt; <br> 
             * &lt;script&gt;
             * $("#CoreCircularGauge").ejCircularGauge({
             *    drawRange: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			 * @instance
			 */
            drawRange: null,
            /**     
			 * Triggers while the custom labels are being drawn on the gauge.
			 * @event
			 * @name ejCircularGauge#drawCustomLabel		
             * @param {Object} args.object returns the object of the gauge.
             * @param {boolean} args.cancel returns the cancel option value
             * @param {Object} args.context returns the context element
             * @param {Object} args.position returns the startX and startY of the custom label
             * @param {Object} args.model returns the gauge model
             * @param {Object} args.scaleElement returns the options of the scale element.
             * @param {number} args.scaleIndex returns the scaleIndex to which the custom label belongs.
             * @param {string} args.style returns the custom label style
             * @param {Object} args.customLabelElement returns the current custom label element.
             * @param {number} args.customLabelIndex returns the index of the custom label.
             * @param {string} args.type returns the name of the event
			 * @example 
             * &lt;div id="CoreCircularGauge"&gt;
             * &lt;/div&gt; <br> 
             * &lt;script&gt;
             * $("#CoreCircularGauge").ejCircularGauge({
             *    drawCustomLabel: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			 * @instance
			 */
            drawCustomLabel: null,
            /**     
			 * Triggers while the indicators are being started to drawn on the gauge.
			 * @event
			 * @name ejCircularGauge#drawIndicators		
             * @param {Object} args.object returns the object of the gauge.
             * @param {boolean} args.cancel returns the cancel option value
             * @param {Object} args.context returns the context element
             * @param {Object} args.position returns the startX and startY of the indicator
             * @param {Object} args.model returns the gauge model
             * @param {Object} args.scaleElement returns the options of the scale element.
             * @param {number} args.scaleIndex returns the scaleIndex to which the indicator belongs.
             * @param {string} args.style returns the indicator style
             * @param {Object} args.indicatorElement returns the current indicator element.
             * @param {number} args.indicatorIndex returns the index of the indicator.
             * @param {string} args.type returns the name of the event
			 * @example 
             * &lt;div id="CoreCircularGauge"&gt;
             * &lt;/div&gt; <br> 
             * &lt;script&gt;
             * $("#CoreCircularGauge").ejCircularGauge({
             *    drawIndicators: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			 * @instance
			 */
            drawIndicators: null,
            /**     
			 * Triggers while the pointer cap is being drawn on the gauge.
			 * @event
			 * @name ejCircularGauge#drawPointerCap		
             * @param {Object} args.object returns the object of the gauge.
             * @param {boolean} args.cancel returns the cancel option value
             * @param {Object} args.context returns the context element
             * @param {Object} args.scaleElement returns the options of the scale element.
             * @param {Object} args.position returns the startX and startY of the pointer cap.
             * @param {Object} args.model returns the gauge model
             * @param {string} args.style returns the pointer cap style
             * @param {string} args.type returns the name of the event
			 * @example 
             * &lt;div id="CoreCircularGauge"&gt;
             * &lt;/div&gt; <br> 
             * &lt;script&gt;
             * $("#CoreCircularGauge").ejCircularGauge({
             *    drawPointerCap: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			 * @instance
			 */
            drawPointerCap: null,
            /**     
			 * Triggers while the gauge start to Load.
			 * @event
			 * @name ejCircularGauge#load		
             * @param {Object} args.object returns the object of the gauge.
			 * @param {cancel } args.cancel returns the cancel option value
 			 * @param {Model} args.Model returns the gauge model
 			 * @param {scaleElement} args.scaleElement returns the entire scale element.
			 * @param {context} args.context returns the context element
			 * @param {type} args.type returns the name of the event
			 * @example 
	         * &lt;div id="CircularGauge1"&gt;&lt;/div&gt; <br> 
	         * &lt;script&gt;
             * $("#CircularGauge1").ejCircularGauge({
             *    load: function (args) {}
             * });
	         * &lt;/script&gt;	
			 * @memberof ejCircularGauge
			 * @instance
			 */
            load: null,
            /**     
			 * Triggers when the rendering of the gauge is completed.
			 * @event
			 * @name ejCircularGauge#renderComplete		
             * @param {Object} args.object returns the object of the gauge.
             * @param {boolean} args.cancel returns the cancel option value
             * @param {Object} args.context returns the context element
             * @param {Object} args.scaleElement returns the entire scale element.
             * @param {Object} args.model returns the gauge model
             * @param {string} args.type returns the name of the event
			 * @example 
             * &lt;div id="CoreCircularGauge"&gt;
             * &lt;/div&gt; <br> 
             * &lt;script&gt;
             * $("#CoreCircularGauge").ejCircularGauge({
             *    renderComplete: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			 * @instance
			 */
            renderComplete: null,
            /**     
			 * Triggers when the left mouse button is clicked.
			 * @event
			 * @name ejCircularGauge#mouseClick		
             * @param {Object} args.object returns the object of the gauge.
             * @param {boolean} args.cancel returns the cancel option value
             * @param {Object} args.model returns the gauge model
             * @param {Object} args.type returns the name of the event
             * @param {Object} args.scaleElement returns the scale element.
             * @param {number} args.scaleIndex returns the scaleIndex to which the pointer belongs.
             * @param {Object} args.context returns the context element
             * @param {Object} args.pointer returns the pointer object
             * @param {number} args.pointer.index returns the pointer Index
             * @param {Object} args.pointer.element returns the pointer element.
             * @param {number} args.pointer.value returns the value of the pointer.
             * @param {number} args.pointer.angle returns the angle of the pointer.
             * @param {string} args.style returns the pointer style
             * @param {Object} args.position returns the startX and startY of the pointer.
			 * @example 
             * &lt;div id="CoreCircularGauge"&gt;
             * &lt;/div&gt; <br> 
             * &lt;script&gt;
             * $("#CoreCircularGauge").ejCircularGauge({
             *    mouseClick: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			 * @instance
			 */
            mouseClick: null,
            /**     
			 * Triggers when clicking and dragging the mouse pointer over the gauge pointer.
			 * @event
			 * @name ejCircularGauge#mouseClickMove		
             * @param {Object} args.object returns the object of the gauge.
             * @param {boolean} args.cancel returns the cancel option value
             * @param {Object} args.model returns the gauge model
             * @param {Object} args.type returns the name of the event
             * @param {Object} args.scaleElement returns the scale element.
             * @param {number} args.scaleIndex returns the scaleIndex to which the pointer belongs.
             * @param {Object} args.context returns the context element
             * @param {Object} args.pointer returns the pointer object
             * @param {number} args.pointer.index returns the pointer Index
             * @param {Object} args.pointer.element returns the pointer element.
             * @param {number} args.pointer.value returns the value of the pointer.
             * @param {number} args.pointer.angle returns the angle of the pointer.
             * @param {string} args.style returns the pointer style
             * @param {Object} args.position returns the startX and startY of the pointer.
			 * @example 
             * &lt;div id="CoreCircularGauge"&gt;
             * &lt;/div&gt; <br> 
             * &lt;script&gt;
             * $("#CoreCircularGauge").ejCircularGauge({
             *    mouseClickMove: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			 * @instance
			 */
            mouseClickMove: null,
            /**     
			 * Triggers when the mouse click is released.
			 * @event
			 * @name ejCircularGauge#mouseClickUp		
             * @param {Object} args.object returns the object of the gauge.
             * @param {boolean} args.cancel returns the cancel option value
             * @param {Object} args.model returns the gauge model
             * @param {Object} args.type returns the name of the event
             * @param {Object} args.scaleElement returns the scale element.
             * @param {number} args.scaleIndex returns the scaleIndex to which the pointer belongs.
             * @param {Object} args.context returns the context element
             * @param {Object} args.pointer returns the pointer object
             * @param {number} args.pointer.index returns the pointer Index
             * @param {Object} args.pointer.element returns the pointer element.
             * @param {number} args.pointer.value returns the value of the pointer.
             * @param {number} args.pointer.angle returns the angle of the pointer.
             * @param {string} args.style returns the pointer style
             * @param {Object} args.position returns the startX and startY of the pointer.
			 * @example 
             * &lt;div id="CoreCircularGauge"&gt;
             * &lt;/div&gt; <br> 
             * &lt;script&gt;
             * $("#CoreCircularGauge").ejCircularGauge({
             *    mouseClickUp: function (args) {}
             * });
            * &lt;/script&gt;
			 * @memberof ejCircularGauge
			 * @instance
			 */
            mouseClickUp: null,

            //Scale Collection
            /**		
			* Specify the pointers, ticks, labels, indicators, ranges  of circular gauge
			* @default null
			* @type {object}
			* @example 
            * &lt;div id="CoreCircularGauge"&gt;
            * &lt;/div&gt; <br> 
            * &lt;script&gt;			
			* $("#CoreCircularGauge").ejCircularGauge({ scales: [{showScaleBar: true, size: 6, border:{width: 1.5} }] });
            * &lt;/script&gt;
			* @memberof ejCircularGauge
			* @instance
			*/
            scales: null
        },
        // * @memberof ejCircularGauge

        _defaultScaleValues: function () {
            return {
                /**		
			    * Specify scaleBar size of circular gauge
			    * @default 6
                * @alias ejCircularGauge#scales->size
			    * @type {number}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;			
			    * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ showScaleBar: true, size: 6 }] });
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                size: 6,
                /**		
			    * Specify pointer cap of circular gauge
			    * @default Object
                * @alias ejCircularGauge#scales->pointerCap
                * @type {object}
			    * @example  
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;			
			    * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointerCap:{radius: 7, borderWidth:3, interiorGradient:null, borderColor:null } }] });
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                pointerCap: {
                    /**		
			        * Specify pointerCap Radius value of circular gauge
			        * @default 7
                    * @alias ejCircularGauge#scales->pointerCap->radius
			        * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt; 			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointerCap:{radius: 10} }] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    radius: 7,
                    /**		
			        * Specify pointerCap borderWidth value of circular gauge
			        * @default 3
                    * @alias ejCircularGauge#scales->pointerCap->borderWidth
			        * @type {number}
			        * @example  	
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;		
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointerCap:{borderWidth: 8 } }] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    borderWidth: 3,
                    /**		
			        * Specify cap interiorGradient value of circular gauge
			        * @default null
                    * @alias ejCircularGauge#scales->pointerCap->interiorGradient
			        * @type {Object}
			        * @example 		
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;	
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointerCap:{interiorGradient: {colorInfo:[{colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] }}}] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    interiorGradient: null, //{colorInfo:[{colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] }
                    /**		
			        * Specify cap borderColor of circular gauge
			        * @default null
                    * @alias ejCircularGauge#scales->pointerCap->borderColor
			        * @type {string}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointerCap: {borderColor: "Brown" }}] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    borderColor: null,
                    /**		
			        * Specify cap backgroundColor of circular gauge
			        * @default null
                    * @alias ejCircularGauge#scales->pointerCap->backgroundColor
			        * @type {string}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt; 			
		    	    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointerCap: {backgroundColor: "Green"} }] });
                    * &lt;/script&gt;
    			    * @memberof ejCircularGauge
			        * @instance
			        */
                    backgroundColor:null
                },
                /**		
			    * Specify showScaleBar of circular gauge
			    * @default false
                * @alias ejCircularGauge#scales->showScaleBar
			    * @type {boolean}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;			
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ showScaleBar: true }] });
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                showScaleBar: false,
                /**		
			    * Specify sweepAngle of circular gauge
			    * @default 310
                * @alias ejCircularGauge#scales->sweepAngle
			    * @type {number}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;			
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ sweepAngle: 200 }] });
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                sweepAngle: 310,
                /**		
			    * Specify scale radius of circular gauge
			    * @default 170
                * @alias ejCircularGauge#scales->radius
			    * @type {number}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;			
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ showScaleBar: true, radius: 100 }] });
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                radius: 170,
                /**		
			    * Specify startAngle of circular gauge
			    * @default 115
                * @alias ejCircularGauge#scales->startAngle
			    * @type {number}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;		
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ startAngle: 90 }] });
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                startAngle: 115,
                /**		
			    * Specify majorIntervalValue of circular gauge
			    * @default 10
                * @alias ejCircularGauge#scales->majorIntervalValue
			    * @type {number}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;			
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ majorIntervalValue: 5 }] });
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                majorIntervalValue: 10,
                /**		
			    * Specify minorIntervalValue of circular gauge
			    * @default 2
                * @alias ejCircularGauge#scales->minorIntervalValue
			    * @type {number}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;		
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ minorIntervalValue: 1 }] });
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                minorIntervalValue: 2,
                /**		
			    * Specify maximum scale value of circular gauge
			    * @default null
                * @alias ejCircularGauge#scales->maximum
			    * @type {number}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;		
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ maximum: 200 }] });
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                maximum: null,
                /**		
			    * Specify minimum scale value of circular gauge
			    * @default null
                * @alias ejCircularGauge#scales->minimum
			    * @type {number}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;		
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ minimum: 20 }] });
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                minimum: null,
                /**		
			    * Specify border for scales of circular gauge
			    * @default Object
                * @alias ejCircularGauge#scales->border
                * @type {object}
			    * @example  
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;			
			    * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ border:{color:null, width:1.5 }}] });
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                border: {
                    /**		
			        * Specify border color for scales of circular gauge
			        * @default null
                    * @alias ejCircularGauge#scales->border->color
			        * @type {string}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showScaleBar: true,  border:[{color: "#1BA1E2" }]}] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    color: null,
                    /**		
			        * Specify border width of circular gauge
			        * @default 1.5
                    * @alias ejCircularGauge#scales->border->width
	    		    * @type {number}
    			    * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt; 			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ showScaleBar: true, border:{width: 1.5} }] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    width:1.5
                },
                /**		
			    * Specify backgroundColor for the scale of circular gauge
			    * @default null
                * @alias ejCircularGauge#scales->backgroundColor
			    * @type {string}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;		
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ showScaleBar: true, backgroundColor: "#1BA1E2" }] });
                * &lt;/script&gt;
			     * @memberof ejCircularGauge
			    * @instance
			    */
                backgroundColor: null,
                /**		
			    * Specify scale direction of circular gauge. See {@link Directions}
			    * @default ej.datavisualization.CircularGauge.Directions.Clockwise
                * @alias ejCircularGauge#scales->direction
			    * @type {enum}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;	
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ direction: "counterclockwise" }] });
                * &lt;/script&gt;
			     * @memberof ejCircularGauge
			    * @instance
			    */
                direction: "clockwise", //["clockwise", "counterclockwise"]
                /**		
			    * Specify showPointers of circular gauge
			    * @default true
                * @alias ejCircularGauge#scales->showPointers
			    * @type {boolean}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;	
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ showPointers: true }] });
                * &lt;/script&gt;
			     * @memberof ejCircularGauge
			    * @instance
			    */
                showPointers: true,
                /**		
			    * Specify showRanges of circular gauge
			    * @default false
                * @alias ejCircularGauge#scales->showRanges
			    * @type {boolean}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;	
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ showRanges: false }] });
                * &lt;/script&gt;
			     * @memberof ejCircularGauge
			    * @instance
			    */
                showRanges: false,
                /**		
			    * Specify showTicks of circular gauge
			    * @default true
                * @alias ejCircularGauge#scales->showTicks
			    * @type {boolean}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;	
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ showTicks: true }] });
                * &lt;/script&gt;
			     * @memberof ejCircularGauge
			    * @instance
			    */
                showTicks: true,
                /**		
			    * Specify showLabels of circular gauge
			    * @default true
                * @alias ejCircularGauge#scales->showLabels
			    * @type {boolean}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;	
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ showLabels: true }] });
                * &lt;/script&gt;
			     * @memberof ejCircularGauge
			    * @instance
			    */
                showLabels: true,
                /**		
			    * Specify showIndicators of circular gauge
			    * @default false
                * @alias ejCircularGauge#scales->showIndicators
			    * @type {boolean}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;			
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ showIndicators: false }] });
                * &lt;/script&gt;
			     * @memberof ejCircularGauge
			    * @instance
			    */
                showIndicators: false,
				/**		
			    * Specify opacity value of circular gauge
			    * @default 1
                * @alias ejCircularGauge#scales->opacity
			    * @type {number}
			    * @example 	
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showScaleBar: true, opacity:0.5 }] });
                * &lt;/script&gt;
			     * @memberof ejCircularGauge
			    * @instance
			    */
                opacity:1,
				/**		
			    * Specify shadowOffset value of circular gauge
			    * @default 0
                * @alias ejCircularGauge#scales->shadowOffset
			    * @type {number}
			    * @example  
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;			
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ shadowOffset: 1}] });
                * &lt;/script&gt;
			     * @memberof ejCircularGauge
			    * @instance
			    */
				shadowOffset:0,
                // Pointers Collection
                /**		
			    * Specify pointers value of circular gauge
			    * @default Array
                * @alias ejCircularGauge#scales->pointers
			    * @type {Array}
			    * @example 	
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;	
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ distanceFromScale: 0, showBackNeedle: false }] }] });
                * &lt;/script&gt;
			        * @memberof ejCircularGauge
			    * @instance
			    */
                pointers: [{
                    /**		
			        * Specify distanceFromScale value for pointers of circular gauge
			        * @default 0
                    * @alias ejCircularGauge#scales->pointers->distanceFromScale
			        * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ distanceFromScale: 10 }] }] });
                    * &lt;/script&gt;
			        * @instance
			        */
                    distanceFromScale: 0,
                    /**		
			        * Specify showBackNeedle value of circular gauge
			        * @default false
                    * @alias ejCircularGauge#scales->pointers->showBackNeedle
			        * @type {boolean}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;				
			        * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ showBackNeedle: true, backNeedleLength: 10 }] }] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    showBackNeedle: false,
                    /**		
			        * Specify backNeedleLength of circular gauge
			        * @default 10
                    * @alias ejCircularGauge#scales->pointers->backNeedleLength
			        * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ showBackNeedle: true, backNeedleLength: 10 }] }] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    backNeedleLength: 10,
                    /**		
			        * Specify pointer length of circular gauge
			        * @default 150
                    * @alias ejCircularGauge#scales->pointers->length
			        * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;		
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ length: 50 }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    length: 150,
                    /**		
			        * Specify pointer Placement value of circular gauge. See {@link PointerPlacement}
			        * @default ej.datavisualization.CircularGauge.PointerPlacement.Near
                    * @alias ejCircularGauge#scales->pointers->placement
			        * @type {enum}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;	 			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ placement: "far" }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    placement: "near", //[near,far,center],
                    /**		
			        * Specify pointer width of circular gauge
			        * @default 7
                    * @alias ejCircularGauge#scales->pointers->width
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ width: 7 }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    width: 7,
                    /**		
			        * Specify opacity value for pointer of circular gauge
			        * @default 1
                    * @alias ejCircularGauge#scales->pointers->opacity
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ opacity: 0.3 }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    opacity: 1,
                    
                    /**		
			        * Specify value of the pointer of circular gauge
			        * @default null
                    * @alias ejCircularGauge#scales->pointers->value
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;				
			        * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ value: 50 }] }] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    value: null,
                    /**		
			        * Specify the border for pointers of circular gauge
			        * @default Object
                    * @alias ejCircularGauge#scales->pointers->border
                    * @type {object}
			        * @example  
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers:[{border:{color:null, width:1.5 }}]}] });
                    * &lt;/script&gt;
		    	    * @memberof ejCircularGauge
	    		    * @instance
    			    */
                    border: {
                        /**		
			            * Specify border color for pointer of circular gauge
			            * @default null
                        * @alias ejCircularGauge#scales->pointers->border->color
                        * @type {string}
			            * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt;	 			
			            * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ border:{color: "#1A1A1A"} }] }] });
                        * &lt;/script&gt;
			            * @memberof ejCircularGauge
			            * @instance
			            */
                        color: null,
                        /**		
			            * Specify border width for pointers of circular gauge
			            * @default 1.5
                        * @alias ejCircularGauge#scales->pointers->border->width
                        * @type {number}
			            * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt;			
			            * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ border:{width: 1.5 }}] }] });
                        * &lt;/script&gt;
			            * @memberof ejCircularGauge
    			        * @instance
			            */
                        width: 1.5
                    },
                    /**		
			        * Specify backgroundColor for the pointer of circular gauge
			        * @default null
                    * @alias ejCircularGauge#scales->pointers->backgroundColor
                    * @type {string}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;				
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ backgroundColor: "#1A1A1A" }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    backgroundColor: null,
                    /**		
			        * Specify pointer gradients of circular gauge
			        * @default null
                    * @alias ejCircularGauge#scales->pointers->gradients
                    * @type {Object}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ gradients: {colorInfo:[{colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] }}] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    gradients: null, //{colorInfo:[{colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] }
                    /**		
			        * Specify pointer type value of circular gauge. See {@link PointerType}
			        * @default ej.datavisualization.CircularGauge.PointerType.Needle
                    * @alias ejCircularGauge#scales->pointers->type
			        * @type {enum}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker" }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    type: "needle", //["needle", "marker"]
                    /**		
			        * Specify needle Style value of circular gauge. See {@link NeedleType}
			        * @default ej.datavisualization.CircularGauge.NeedleType.Triangle
                    * @alias ejCircularGauge#scales->pointers->needleType
			        * @type {enum}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;				
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ needleType: "triangle" }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    needleType: "triangle", //["triangle", "rectangle", "trapezoid", "arrow"],
                    /**		
			        * Specify marker Style value of circular gauge. See {@link MarkerType}
			        * @default ej.datavisualization.CircularGauge.MarkerType.Rectangle
                    * @alias ejCircularGauge#scales->pointers->markerType
			        * @type {enum}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ type: "marker", markerType: "rectangle" }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    markerType: "rectangle" //["rectangle", "triangle", "ellipse", "diamond", "pentagon", "circle", "slider", "pointer", "wedge", "trapezoid", "roundedrectangle"],
                }],
                /**		
			    * Specify ranges value of circular gauge
			    * @default Array
                * @alias ejCircularGauge#scales->ranges
                * @type {Array}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;				
			    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true [{ ranges: [{ distanceFromScale: 25, size: 5}] }] }]});
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                ranges: [{
                    /**		
			        * Specify distanceFromScale value for ranges of circular gauge
			        * @default 25
                    * @alias ejCircularGauge#scales->ranges->distanceFromScale
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;				
			        * $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
                    * @remarks
                    * for reflecting the customization in Ranges, showRanges must be true.
			        */
                    distanceFromScale: 25,
                    /**		
			        * Specify size of the range value of circular gauge
			        * @default 5
                    * @alias ejCircularGauge#scales->ranges->size
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt; 			
			        * 	$("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70,size:5}]}]});
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
                    * @remarks
                    * for reflecting the customization in Ranges, showRanges must be true.
			        */
                    size: 5,
                    /**		
			        * Specify placement of circular gauge. See {@link RangePlacement}
			        * @default ej.datavisualization.CircularGauge.RangePlacement.Near
                    * @alias ejCircularGauge#scales->ranges->placement
                    * @type {enum}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;	
			        * 	$("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70,placement: "center"}]}]});
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
                    * @remarks
                    * for reflecting the customization in Ranges, showRanges must be true.
			        */
                    placement: "near", //["near", "far", "center"]
                    /**		
			        * Specify startValue for ranges of circular gauge
			        * @default null
                    * @alias ejCircularGauge#scales->ranges->startValue
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
                    * @remarks
                    * for reflecting the customization in Ranges, showRanges must be true.
			        */
                    startValue: null,
                    /**		
			        * Specify endValue for ranges of circular gauge
			        * @default null
                    * @alias ejCircularGauge#scales->ranges->endValue
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;		
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true, ranges: [{ startValue: 10, endValue: 100,distanceFromScale: -25 }] }]});
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
                    * @remarks
                    * for reflecting the customization in Ranges, showRanges must be true.
			        */
                    endValue: null,
                    /**		
			        * Specify startWidth of circular gauge
			        * @default [Array.number] scale.ranges.startWidth = 10
                    * @alias ejCircularGauge#scales->ranges->startWidth
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;		
			        * $("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true , ranges: [{ startValue: 10, endValue: 100,startWidth: 10,distanceFromScale: -25 }] }]});
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
                    * @remarks
                    * for reflecting the customization in Ranges, showRanges must be true.
			        */
                    startWidth: 10,
                    /**		
			        * Specify endWidth for ranges of circular gauge
			        * @default 10
                    * @alias ejCircularGauge#scales->ranges->endWidth
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
                    * @remarks
                    * for reflecting the customization in Ranges, showRanges must be true.
			        */
                    endWidth: 10,
                    /**		
			        * Specify range gradients of circular gauge
			        * @default null
                    * @alias ejCircularGauge#scales->ranges->gradients
                    * @type {object}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true , ranges: [{startValue: 10, endValue: 100, gradients: { colorInfo:[{ colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] }}] }]});
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
                    * @remarks
                    * for reflecting the customization in Ranges, showRanges must be true.
			        */
                    gradients: null, //{colorInfo:[{colorStop : 0, color:"#FFFFFF"},{colorStop : 1, color:"#AAAAAA"}] }
                    
                    /**		
			        * Specify opacity value for ranges of circular gauge
			        * @default null
                    * @alias ejCircularGauge#scales->ranges->opacity
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true , ranges: [{ startValue: 10, endValue: 100,startWidth: 10,endWidth: 10,distanceFromScale: -25,opacity: 0.5 }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
                    * @remarks
                    * for reflecting the customization in Ranges, showRanges must be true.
			        */
                    opacity: null,
                    /**		
			        * Specify backgroundColor for the ranges of circular gauge
			        * @default "#32b3c6"
                    * @alias ejCircularGauge#scales->ranges->backgroundColor
                    * @type {string}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true , ranges: [{ startValue: 10, endValue: 100,startWidth: 10,endWidth: 10,backgroundColor: "Red" }]  }]});
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
                    * @remarks
                    * for reflecting the customization in Ranges, showRanges must be true.
			        */
                    backgroundColor: "#32b3c6",
                    /**		
			        * Specify border for ranges of circular gauge
			        * @default Object
                    * @alias ejCircularGauge#scales->ranges->border
                    * @type {object}
			        * @example  
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ ranges:[{border:{color:null, width:1.5 }}]}] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    border: {
                        /**		
			            * Specify border color for ranges of circular gauge
			            * @default "#32b3c6"
                        * @alias ejCircularGauge#scales->ranges->border->color
                        * @type {string}
			            * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt;			
			            * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true , ranges: [{ startValue: 10, endValue: 100,startWidth: 10,endWidth: 10,border:{color: "#32b3c6"} }] }] });
                        * &lt;/script&gt;
			            * @memberof ejCircularGauge
			            * @instance
                        * @remarks
                        * for reflecting the customization in Ranges, showRanges must be true.
			            */
                        color: "#32b3c6",
                        /**		
    			        * Specify border width for ranges of circular gauge
	    		        * @default 1.5
                        * @alias ejCircularGauge#scales->ranges->border->width
                        * @type {number}
			            * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt; 			
			            * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showRanges:true , ranges: [{ startValue: 10, endValue: 100,startWidth: 10,endWidth: 10,distanceFromScale: -25,border:{width: 1.5} }] }] });
                        * &lt;/script&gt;
			            * @memberof ejCircularGauge
			            * @instance
                        * @remarks
                        * for reflecting the customization in Ranges, showRanges must be true.
			            */
                        width:1.5
                    }
                }],
                /**		
			    * Specify ticks of circular gauge
			    * @default Array
                * @alias ejCircularGauge#scales->ticks
                * @type {Array}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;		
			    * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ angle: 10, distanceFromScale: 10 }] }] });
                    * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                ticks: [{
                    /**		
			        * Specify the angle for the ticks of circular gauge
			        * @default 0
                    * @alias ejCircularGauge#scales->ticks->angle
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ angle: 10 }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    angle: 0,
                    /**		
			        * Specify distanceFromScale value for ticks of circular gauge
			        * @default 0
                    * @alias ejCircularGauge#scales->ticks->distanceFromScale
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ distanceFromScale: 10 }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    distanceFromScale: 0,
                    /**		
			        * Specify tick color of circular gauge
			        * @default null
                    * @alias ejCircularGauge#scales->ticks->color
                    * @type {string}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ color: "#777777" }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    color:null,
                    /**		
			        * Specify tick Style of circular gauge. See {@link TickType}
			        * @default  ej.datavisualization.CircularGauge.TickPlacement.Major
                    * @alias ejCircularGauge#scales->ticks->type
                    * @type {enum}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ type: "major" }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    type: "major", //["major", "minor",]
                    /**		
			        * Specify tick placement of circular gauge. See {@link TickPlacement}
			        * @default ej.datavisualization.CircularGauge.TickPlacement.Near
                    * @alias ejCircularGauge#scales->ticks->placement
                    * @type {enum}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;	
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ placement: "near" }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    placement: "near", //[near,far,center],
                    /**		
			        * Specify tick height of circular gauge
			        * @default 16
                    * @alias ejCircularGauge#scales->ticks->height
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;	
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ height: 16 }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    height: 16,
                    /**		
			        * Specify tick width of circular gauge
			        * @default 3
                    * @alias ejCircularGauge#scales->ticks->width
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;		
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ ticks: [{ width: 3 }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    width: 3
                }, {
                    angle: 0,
                    distanceFromScale: 0,
                    color:null,
                    type: "minor", //["major", "minor",]
                    placement: "near", //[near,far,center]
                    height: 7,
                    width: 1
                }],
                /**		
			    * Specify the text values displayed in a meaningful manner alongside the ticks of circular gauge
			    * @default Array
                * @alias ejCircularGauge#scales->labels
                * @type {Array}
			    * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;		
			    * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ angle: 10, opacity: 0.4 }] }] });
                * &lt;/script&gt;
			    * @memberof ejCircularGauge
			    * @instance
			    */
                labels: [{
                    /**		
			        * Specify the angle for the labels of circular gauge
			        * @default 0
                    * @alias ejCircularGauge#scales->labels->angle
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ angle: 10 }] }] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    angle: 0,
                    /**		
			        * Specify labels autoAngle value of circular gauge
			        * @default false
                    * @alias ejCircularGauge#scales->labels->autoAngle
			        * @type {boolean}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;		
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels:[{autoAngle: true}] }] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    autoAngle:false,
                    /**		
			        * Specify opacity value for labels of circular gauge
			        * @default null
                    * @alias ejCircularGauge#scales->labels->opacity
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ opacity: 0.4 }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    opacity: null,
                    /**		
			        * Specify font for labels of circular gauge
			        * @default Object
                    * @alias ejCircularGauge#scales->labels->font
                    * @type {object}
			        * @example  
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ font: { size: "12px", fontFamily: "Segou", fontStyle: "Bold" } }] }] });
                    * &lt;/script&gt;
			         * @memberof ejCircularGauge
			        * @instance
			        */
                    font: {
                   /**		
                   * Specify font for labels of circular gauge
                   * @default "11px"
                   * @alias ejCircularGauge#scales->labels->font->size
                   * @type {string}
                   * @example 
                   * &lt;div id="CoreCircularGauge"&gt;
                   * &lt;/div&gt; <br> 
                   * &lt;script&gt;				
                   * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ font: { size: "12px" } }] }] });
                   * &lt;/script&gt;
                   * @memberof ejCircularGauge
                   * @instance
                   */
                        size: "11px",
                  /**		
                  * Specify font for labels of circular gauge
                  * @default "Arial"
                  * @alias ejCircularGauge#scales->labels->font->fontFamily
                  * @type {String}
                  * @example 
                  * &lt;div id="CoreCircularGauge"&gt;
                  * &lt;/div&gt; <br> 
                  * &lt;script&gt;				
                  * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ font: { fontFamily: "Arial" } }] }] });
                  * &lt;/script&gt;
                  * @memberof ejCircularGauge
                  * @instance
                  */
                        fontFamily: "Arial",
                  /**		
                  * Specify font for labels of circular gauge
                  * @default "Bold"
                  * @alias ejCircularGauge#scales->labels->font->fontStyle
                  * @type {string}
                  * @example 
                  * &lt;div id="CoreCircularGauge"&gt;
                  * &lt;/div&gt; <br> 
                  * &lt;script&gt;				
                  * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ font: { fontStyle: "Bold" } }] }] });
                  * &lt;/script&gt;
                  * @memberof ejCircularGauge
                  * @instance
                  */
                        fontStyle: "Bold"
                    },
                    /**		
			        * Specify label color of circular gauge
			        * @default null
                    * @alias ejCircularGauge#scales->labels->color
                    * @type {string}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ color: "Red" }] }] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    color: null,
                    /**		
			        * Specify distanceFromScale value for labels of circular gauge
			        * @default 0
                    * @alias ejCircularGauge#scales->labels->distanceFromScale
                    * @type {number}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;	 			
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ distanceFromScales: 10 }] }] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    distanceFromScale: 0,
                    /**		
			        * Specify includeFirstValue of circular gauge
			        * @default true
                    * @alias ejCircularGauge#scales->labels->includeFirstValue
                    * @type {boolean}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;				
			        * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ includeFirstValue: false }] }] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    includeFirstValue: true,
                    /**		
			        * Specify label placement of circular gauge. See {@link LabelPlacement}
			        * @default ej.datavisualization.CircularGauge.LabelPlacement.Near
                    * @alias ejCircularGauge#scales->labels->placement
                    * @type {enum}
			        * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;				
			        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ placement: "near" }] }] });
                    * &lt;/script&gt;
			        * @memberof ejCircularGauge
			        * @instance
			        */
                    placement: "near", //[near,far,center],
                    /**		
                    * Specify label Style of circular gauge.	See {@link LabelType}
                    * @default ej.datavisualization.CircularGauge.LabelType.Major
                    * @alias ejCircularGauge#scales->labels->type
                    * @type {enum}
                    * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
                    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ type: "major" }] }] });
                  * &lt;/script&gt;
                    * @memberof ejCircularGauge
                    * @instance
                    */
                    type: "major",//["major", "minor",]
                    /**		
                    * Specify unitText of circular gauge
                    * @default ""
                    * @alias ejCircularGauge#scales->labels->unitText
                    * @type {string}
                    * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
                    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ unitText: "kmph" }] }] });
                  * &lt;/script&gt;
                    * @memberof ejCircularGauge
                    * @instance
                    */
                    unitText: "",
                    /**		
                    * Specify unitTextPosition of circular gauge.	See {@link UnitTextPosition}
                    * @default ej.datavisualization.CircularGauge.LabelType.Back
                    * @alias ejCircularGauge#scales->labels->unitTextPosition
                    * @type {enum}
                    * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;	 			
                    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{ labels: [{ unitText: "kmph",unitTextPosition: "front" }] }] });
                  * &lt;/script&gt;
                    * @memberof ejCircularGauge
                    * @instance
                    */
                    unitTextPosition: "back",//["front","back"]

                }],
                /**		
                * Specify representating state of circular gauge
                * @default Array
                * @alias ejCircularGauge#scales->indicators
                * @type {Array}
                * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;				
                * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
                *   height: 30,width: 10,type: "circle",value: 0,position: { x: 185, y: 300 },
                *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243", borderColor: "#5DF243", text: "", textColor: "#870505" },
                *   { endValue: 200, startValue: 70, backgroundColor: "#145608", borderColor: "#145608", text: "", textColor: "#870505" }]}]}]});
                * &lt;/script&gt;
                * @memberof ejCircularGauge
                * @instance
                * @remarks
                * for reflecting the customization in Indicators, showIndicators must be true.
                */
                indicators: [{
                    /**		
                    * Specify indicator height of circular gauge
                    * @default 15
                    * @alias ejCircularGauge#scales->indicators->height
                    * @type {number}
                    * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;				
                    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
                    *   height: 30,type: "circle",value: 0,position: { x: 185, y: 300 },
                    *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" },
                    *   { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]});
                    * &lt;/script&gt;
                    * @memberof ejCircularGauge
                    * @instance
                    * @remarks
                    * for reflecting the customization in Indicators, showIndicators must be true.
                    */
                    height: 15,
                    /**		
                    * Specify indicator width of circular gauge
                    * @default 15
                    * @alias ejCircularGauge#scales->indicators->width
                    * @type {number}
                    * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;				
                    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
                    *   width: 30,type: "circle",value: 0,position: { x: 185, y: 300 },
                    *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" },
                    *   { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]});
                    * &lt;/script&gt;
                    * @memberof ejCircularGauge
                    * @instance
                    * @remarks
                    * for reflecting the customization in Indicators, showIndicators must be true.
                    */
                    width: 15,
                    /**		
                    * Specify indicator style of circular gauge.	See {@link IndicatorType}
                    * @default ej.datavisualization.CircularGauge.IndicatorType.Circle
                    * @alias ejCircularGauge#scales->indicators->type
                    * @type {enum}
                    * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;				
                    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
                    *   width: 30,type: "circle",value: 0,position: { x: 185, y: 300 },
                    *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" },
                    *   { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]});
                    * &lt;/script&gt;
                    * @memberof ejCircularGauge
                    * @instance
                    * @remarks
                    * for reflecting the customization in Indicators, showIndicators must be true.
                    */
                    type: "circle", //["rectangle", "circle","roundedrectangle", "text"]
                    /**		
                    * Specify indicator value of circular gauge
                    * @default 0
                    * @alias ejCircularGauge#scales->indicators->value
                    * @type {number}
                    * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;				
                    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
                    *   width: 30,type: "circle",value: 0,position: { x: 185, y: 300 },
                    *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" },
                    *   { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]});
                    * &lt;/script&gt;
                    * @memberof ejCircularGauge
                    * @instance
                    * @remarks
                    * for reflecting the customization in Indicators, showIndicators must be true.
                    */
                    value: 0,
                    /**		
                    * Specify imageUrl of circular gauge
                    * @default null
                    * @alias ejCircularGauge#scales->indicators->imageUrl
                    * @type {string}
                    * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
                    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
                    *   width: 30,type: "image",value: 0,imageUrl:"Sun.jpeg",position: { x: 185, y: 300 },
                    *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" },
                    *   { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]});
                    * &lt;/script&gt;
                    * @memberof ejCircularGauge
                    * @instance
                    * @remarks
                    * for reflecting the customization in Indicators, showIndicators must be true.
                    */
                    imageUrl: null,
                    /**		
                    * Specify position of circular gauge
                    * @default Object
                    * @alias ejCircularGauge#scales->indicators->position
                    * @type {object}
                    * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;				
                    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
                    *   width: 30,type: "circle",value: 0,position: { x: 185, y: 150 },
                    *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" },
                    *   { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]});
                    * &lt;/script&gt;
                    * @memberof ejCircularGauge
                    * @instance
                    * @remarks
                    * for reflecting the customization in Indicators, showIndicators must be true.
                    */
                    position: {
                        /**		
                        * Specify x-axis of position of circular gauge
                        * @default 0
                        * @alias ejCircularGauge#scales->indicators->position->x
                        * @type {number}
                        * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt;	 			
                        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
                        *   width: 30,type: "circle",value: 0,position: { x: 185,y:0 },
                        *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" },
                        *   { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]});
                        * &lt;/script&gt;
                        * @memberof ejCircularGauge
                        * @instance
                        * @remarks
                        * for reflecting the customization in Indicators, showIndicators must be true.
                        */
                        x: 0,
                        /**		
                        * Specify y-axis of position of circular gauge
                        * @default 0
                        * @alias ejCircularGauge#scales->indicators->position->y
                        * @type {number}
                        * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt;				
                        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
                        *   width: 30,type: "circle",value: 0,position: { x:0,y: 185 },
                        *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" },
                        *   { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]});
                        * &lt;/script&gt;
                        * @memberof ejCircularGauge
                        * @instance
                        * @remarks
                        * for reflecting the customization in Indicators, showIndicators must be true.
                        */
                        y: 0
                    },
                    /**		
                    * Specify the various states of circular gauge
                    * @default Array
                    * @alias ejCircularGauge#scales->indicators->stateRanges
                    * @type {Array}
                    * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;			
                    * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
                    *   width: 30,type: "circle",value: 0,position: { x: 185, y:300 },
                    *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" },
                    *   { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]});
                    * &lt;/script&gt;
                    * @memberof ejCircularGauge
                    * @instance
                        * @remarks
                        * for reflecting the customization in Indicators, showIndicators must be true.
                    */
                    stateRanges: [{
                        /**		
                        * Specify end value for each specified state of circular gauge
                        * @default 0
                        * @alias ejCircularGauge#scales->indicators->stateRanges->endValue
                        * @type {number}
                        * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt;		
                        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
                        *   width: 30,type: "circle",value: 0,position: { x: 185, y:300 },
                        *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" },
                        *   { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]});
                        * &lt;/script&gt;
                        * @memberof ejCircularGauge
                        * @instance
                        * @remarks
                        * for reflecting the customization in Indicators, showIndicators must be true.
                        */
                        endValue: 0,
                        /**		
                        * Specify start value for each specified state of circular gauge
                        * @default 0
                        * @alias ejCircularGauge#scales->indicators->stateRanges->startValue
                        * @type {number}
                        * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt;	 			
                        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
                        *   width: 30,type: "circle",value: 0,position: { x: 185, y:300 },
                        *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243" },
                        *   { endValue: 200, startValue: 70, backgroundColor: "#145608"}]}]}]});
                        * &lt;/script&gt;
                        * @memberof ejCircularGauge
                        * @instance
                        * @remarks
                        * for reflecting the customization in Indicators, showIndicators must be true.
                        */
                        startValue: 0,
                        /**		
                        * Specify backgroundColor for indicator of circular gauge
                        * @default null
                        * @alias ejCircularGauge#scales->indicators->stateRanges->backgroundColor
                        * @type {string}
                        * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt;		
                        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
                        *   width: 30,type: "circle",value: 0,position: { x: 185, y:300 },
                        *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "Red" },
                        *   { endValue: 200, startValue: 70, backgroundColor: "Yellow"}]}]}]});
                        * &lt;/script&gt;
                        * @memberof ejCircularGauge
                        * @instance
                        * @remarks
                        * for reflecting the customization in Indicators, showIndicators must be true.
                        */
                        backgroundColor: null,
                        /**		
                        * Specify borderColor for indicator of circular gauge
                        * @default null
                        * @alias ejCircularGauge#scales->indicators->stateRanges->borderColor
                        * @type {string}
                        * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt;	
                        * 	$("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
                        *   width: 30,type: "circle",value: 0,position: { x: 185, y:300 },
                        *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243",borderColor:"Red" },
                        *   { endValue: 200, startValue: 70, backgroundColor: "#145608", borderColor:"yellow"}]}]}]});
                        * &lt;/script&gt;
                        * @memberof ejCircularGauge
                        * @instance
                        * @remarks
                        * for reflecting the customization in Indicators, showIndicators must be true.
                        */
                        borderColor: null,
                        /**		
                        * Specify value of the text as the indicator when the indicator style is set with the value "text" of circular gauge
                        * @default ""
                        * @alias ejCircularGauge#scales->indicators->stateRanges->text
                        * @type {string}
                        * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt;	
                        * $("#CoreCircularGauge").ejCircularGauge({
                        * scales: [{showIndicators: true, indicators: [{
                        * width: 30, type: "text", value: 0, position: { x: 185, y: 300 },
                        * stateRanges: [{ endValue: 70, startValue: 0, text: "staterange1" },
                        * { endValue: 200, startValue: 70, text: "staterange1" }]}]}]});
                        * &lt;/script&gt;
                        * @memberof ejCircularGauge
                        * @instance
                        * @remarks
                        * for reflecting the customization in Indicators, showIndicators must be true.
                        */
                        text: "",
                        /**		
                        * Specify value of the textColor as the indicator when the indicator style is set with the value "text" of circular gauge
                        * @default null
                        * @alias ejCircularGauge#scales->indicators->stateRanges->textColor
                        * @type {string}
                        * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt;			
                        * $("#CoreCircularGauge").ejCircularGauge({
                        * scales: [{showIndicators: true, indicators: [{
                        * width: 30, type: "text", value: 0, position: { x: 185, y: 300 },
                        * stateRanges: [{ endValue: 70, startValue: 0, text: "staterange1", textColor: "Yellow" },
                        * { endValue: 200, startValue: 70, text: "staterange1", textColor: "Yellow" }]}]}]});
                        * &lt;/script&gt;
                        * @memberof ejCircularGauge
                        * @instance
                        * @remarks
                        * for reflecting the customization in Indicators, showIndicators must be true.
                        */
                        textColor: null,
                        /**		
                        * Specify value of the font as the indicator when the indicator style is set with the value "text" of circular gauge
                        * @default null
                        * @alias ejCircularGauge#scales->indicators->stateRanges->font
                        * @type {object}
                        * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt;		
                        * $("#CoreCircularGauge").ejCircularGauge({
                        * scales: [{showIndicators: true, indicators: [{
                        * width: 30, type: "text", value: 0, position: { x: 185, y: 300 },
                        * stateRanges: [{ endValue: 70, startValue: 0, text: "staterange1" },
                        * { endValue: 200, startValue: 70, text: "staterange1", font: { size: "11px", fontFamily: "Arial", fontStyle: "Bold" } }]}]}]});
                        * &lt;/script&gt;
                        * @memberof ejCircularGauge
                        * @instance
                        * @remarks
                        * for reflecting the customization in Indicators, showIndicators must be true.
                        */
                        font: null
                    }]
                }],

                //subGaugeHeight,subGaugeWidth,position:{X:5,Y:10},controlID
                /**		
                * Specify subGauge of circular gauge
                * @default Array
                * @alias ejCircularGauge#scales->subGauges
                * @type {Array}
                * @example 
                * &lt;div id="CoreCircularGauge"&gt;
                * &lt;/div&gt; <br> 
                * &lt;div id="subGauge1"&gt;
                * &lt;/div&gt; <br> 
                * &lt;script&gt;	
                *$("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]});
                *$("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 200,width: 200,position: { x: 200, y: 150 }}]}]});
                * &lt;/script&gt;
                * @memberof ejCircularGauge
                * @instance
                */
                subGauges: [{
                    /**		
                    * Specify subGauge Height of circular gauge
                    * @default 150
                    * @alias ejCircularGauge#scales->subGauges->height
                    * @type {number}
                    * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;div id="subGauge1"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;	
                    * $("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]});
                    * $("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 400,width: 200,position: { x: 200, y: 100 }}]}]});
                    * &lt;/script&gt;
                    * @memberof ejCircularGauge
                    * @instance
                    */
                    height: 150,
                    /**		
                    * Specify subGauge Width of circular gauge
                    * @default 150
                    * @alias ejCircularGauge#scales->subGauges->width
                    * @type {number}
                    * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;div id="subGauge1"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;	
                    *$("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]});
                    *$("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 200,width: 300,position: { x: 200, y: 150 }}]}]});
                    * &lt;/script&gt;
                    * @memberof ejCircularGauge
                    * @instance
                    */
                    width: 150,
                    /**		
                    * Specify position for sub-gauge of circular gauge
                    * @default Object
                    * @alias ejCircularGauge#scales->subGauges->position
                    * @type {object}
                    * @example 
                    * &lt;div id="CoreCircularGauge"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;div id="subGauge1"&gt;
                    * &lt;/div&gt; <br> 
                    * &lt;script&gt;	
                    *$("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]});
                    *$("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 200,width: 200,position: { x: 200, y: 150 }}]}]});
                    * &lt;/script&gt;
                    * @memberof ejCircularGauge
                    * @instance
                    */
                    position: {
                        /**		
                        * Specify x-axis position for sub-gauge of circular gauge
                        * @default 0
                        * @alias ejCircularGauge#scales->subGauges->position->x
                        * @type {number}
                        * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;div id="subGauge1"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt;	
                        *$("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]});
                        *$("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 200,width: 200,position: { x: 200, y: 0 }}]}]});
                        * &lt;/script&gt;
                        * @memberof ejCircularGauge
                        * @instance
                        */
                        x: 0,
                        /**		
                        * Specify y-axis position for sub-gauge of circular gauge
                        * @default 0
                        * @alias ejCircularGauge#scales->subGauges->position->y
                        * @type {number}
                        * @example 
                        * &lt;div id="CoreCircularGauge"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;div id="subGauge1"&gt;
                        * &lt;/div&gt; <br> 
                        * &lt;script&gt;	
                        *$("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]});
                        *$("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 200,width: 200,position: { x: 0, y: 150 }}]}]});
                        * &lt;/script&gt;
                        * @memberof ejCircularGauge
                        * @instance
                        */
                        y: 0
                    }
                }],
                //textAngle ,value:"CustomText", position:{X:5,Y:10}, color, font: { size: "11px", fontFamily: "Arial", fontStyle: "Bold" },
                customLabels: []
            };
        },
        dataTypes: {
            scales: "data"
        },
        observables: ["value", "minimum", "maximum"],
        value: ej.util.valueFunction("value"),
        minimum: ej.util.valueFunction("minimum"),
        maximum: ej.util.valueFunction("maximum"),

        // set model function
		/**
         * To configure the properties at runtime using SetModel		
		 * @private
         */	 
        _setModel: function (options) {
            var option;
            for (option in options) {
                switch (option) {
                    case "height": this.model.height = options[option]; break;
                    case "width": this.model.width = options[option]; break;
                    case "radius": this.model.radius = options[option]; break;
                    case "frame": $.extend(this.model.frame, options[option]);
                    case "backgroundColor": this.model.backgroundColor = options[option]; break;
                    case "interiorGradient": this.model.interiorGradient = options[option]; break;
                    case "readOnly": this.model.readOnly = options[option]; break;
                    case "theme": this.model.theme = options[option]; break;
                    case "isRadialGradient": this.model.isRadialGradient = options[option]; break;
                    case "value":
                        (this.value() == "") && this.value(0);
                        for (var i = 0; this.model.scales[i] != null; i++) {
                            for (j = 0; this.model.scales[i].pointers[j] != null; j++) {
                                this.model.scales[i].pointers[j].value = parseFloat(this.value());
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
                        (this.maximum() == "") && this.maximum(100);
                        for (var i = 0; this.model.scales[i] != null; i++) {
                            this.model.scales[i].maximum = parseInt(this.maximum());
                        }
                        break;
                    case "scales":
                        $.extend(true, this.model.scales, options[option]);
                        break;
                }
            }
            this._init();
        },

        /**
           * destroy the circular gauge widget.
           * all events bound using this._on will be unbind automatically and bring the control to pre-init state.
           * @alias destroy
           * @return jQuery
           * @example 
           * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br> 
           * &lt;script&gt;
           * $("#CoreCircularGauge").ejCircularGauge();
           * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
           * circulargaugeObj.destroy();
           * &lt;/script&gt;
           * @memberof ejCircularGauge
           * @instance
        */
        _destroy: function () {
            this._unWireEvents();
            this.element.empty().removeClass("e-widget");
        },


        // constructor function
		/**
         * Constructor to initialize the gauge	
		 * @private
         */	 
        _init: function () {
            //this._isHalfCircle = false;
            this._scalesInitialize();
            this._trigger("load");
            this._setTheme();
            this._initialize();
            if (!this.model.readOnly)
                this._wireEvents();
            this._onWindowResize();
        },
		/**
         * Invoke when window size changes 
		 * @private
         */	
        _onWindowResize: function () {
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
         * To initialize the gauge object
		 * @private
         */	
        _initialize: function () {
            this._initObject(this);
            this._drawOuterLayer();
            this._drawScales();
            if (this.model.renderComplete)
                this._onRenderComplete();
        },
		/**
         * To initialize the scales
		 * @private
         */	
        _scalesInitialize: function () {
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
                    proxy._checkArrayObject(innerElement, name);
                }
                else if (innerElement != null && typeof innerElement == "object") {
                    var allObjects = proxy._defaultScaleValues();
                    proxy._LoadIndividualDefaultValues(innerElement, allObjects, (typeof name === "number") ? initialName : name);
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

            $.each(obj, function (objName, ele) {
                if (ele instanceof Array) {
                    proxy._checkArrayObject(ele, name);
                }
                else if (ele != null && typeof ele == "object") {
                    proxy._LoadIndividualDefaultValues(ele, ele, (typeof objName === "number") ? name : objName);
                }
            });

            $.extend(defaultObj, obj);
            $.extend(obj, defaultObj);
            return obj;
        },
		/**
         * To initialize the gauge object
		 * @private
         */	
        _initObject: function (element) {
            this.element.addClass("e-widget");
            element.GaugeEl = this.element;
            for (var i = 0; this.model.scales[i] != null; i++) {
                if (this.model.scales[i].minimum == null)
                    this.model.scales[i].minimum = this.minimum();
                if (this.model.scales[i].maximum == null)
                    this.model.scales[i].maximum = this.maximum();
                for (j = 0; this.model.scales[i].pointers[j] != null; j++) {
                    if (this.model.scales[i].pointers[j].value == null)
                        this.model.scales[i].pointers[j].value = this.value();
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
            if (this._isHalfCircle && this._isHalfCircle()) {
                if ((element.model.frame.halfCircleFrameEndAngle - element.model.frame.halfCircleFrameStartAngle) >= 180) {
                    if ((element.model.frame.halfCircleFrameStartAngle == 180) && (element.model.frame.halfCircleFrameEndAngle == 360)) {
                        element.centerY = element.canvasEl[0].height;
                    }
                    else if ((element.model.frame.halfCircleFrameStartAngle == 0) && (element.model.frame.halfCircleFrameEndAngle == 180)) {
                        element.centerY = 0;
                    }
                    else if ((element.model.frame.halfCircleFrameStartAngle == 90) && (element.model.frame.halfCircleFrameEndAngle == 270)) {
                        element.centerX = element.canvasEl[0].width;
                    }
                    else if ((element.model.frame.halfCircleFrameStartAngle == 270) && (element.model.frame.halfCircleFrameEndAngle == 90)) {
                        element.centerX = 0;
                    }
                }
                else if ((element.model.frame.halfCircleFrameEndAngle - element.model.frame.halfCircleFrameStartAngle) <= 90) {
                    if ((element.model.frame.halfCircleFrameStartAngle >= 0) && (element.model.frame.halfCircleFrameStartAngle <= 180)) {
                        element.centerX = 0;
                        element.centerY = 0;
                    }
                    if ((element.model.frame.halfCircleFrameStartAngle == 90)) {
                        element.centerX = element.canvasEl[0].width;
                    }
                    if (element.model.frame.halfCircleFrameStartAngle == 0 || element.model.frame.halfCircleFrameStartAngle == 270) {
                        element.centerX = 0;
                    }
                    if ((element.model.frame.halfCircleFrameStartAngle == 180) && (element.model.frame.halfCircleFrameEndAngle == 270)) {
                        element.centerX = element.canvasEl[0].width;
                        element.centerY = element.canvasEl[0].height / 2;
                    }
                }
            }
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
         * Wiring the events to Circular gauge control		
		 * @private
         */		
        _wireEvents: function () {
            this.startEv = 'mousedown';
            this.moveEv = 'mousemove';
            this.endEv = 'mouseup';
            this.onMouseMoveHandler = $.proxy(this._onMouseMove, this);
            this.onMouseUpHandler = $.proxy(this._onMouseUp, this);
            this.onMouseDownHandler = $.proxy(this._onMouseDown, this);
            $(this.canvasEl).bind(this.startEv, this.onMouseDownHandler);
        },
		/**
         * To unWiring the events to Circular gauge control		
		 * @private
         */	
        _unWireEvents: function () {
            $(this.canvasEl).unbind(this.startEv, this.onMouseDownHandler);
        },
		/**
         * Section For handle the Mouse Down event
		 * @private
         */	
        _onMouseDown: function (e) {
            this._blockDefaultActions(e);
            var startPoint = { "x": this.centerX, "y": this.centerY };
            var endPoint = { "x": e.pageX - $(this.canvasEl).offset().left, "y": e.pageY - $(this.canvasEl).offset().top };
            var indegree = 180 * this._getCirucumferenceAngle(startPoint, endPoint) / Math.PI;
            var self = this;
            $.each(this.model.scales, function (index, element) {
                self.scaleIndex = index;
                if (element.pointers != null) {
                    self.pointerEl = element.pointers;
                    $.each(element.pointers, function (pointerIndex, pointerElement) {
                        if (self._isHalfCircle())
                            element.showBackNeedle = false;
                        angle = self._getAngle(pointerElement.value);
                        if (angle > 360)
                            angle = angle - 360;
                        var greatervalue = angle + pointerElement.width;
                        var lesservalue = angle - pointerElement.width;
                        radius = Math.sqrt((endPoint.x - startPoint.x) * (endPoint.x - startPoint.x) + (endPoint.y - startPoint.y) * (endPoint.y - startPoint.y));
                        if (self._isBetween(lesservalue, greatervalue, indegree) && radius <= pointerElement.length) {
                                self._onMouseClick(angle, element.value);
                            self.activeElement = pointerElement;
                            $(document).bind(self.moveEv, self.onMouseMoveHandler);
                            $(document).bind(self.endEv, self.onMouseUpHandler);
                        }
                    });
                }
            });
        },
		/**
         * Section For handle the Mouse Up event
		 * @private
         */	
        _onMouseUp: function (e) {
            $(document).unbind(self.moveEv, self.onMouseMoveHandler);
            $(document).unbind(self.endEv, self.onMouseUpHandler);
            this._onMouseClickUp(this._getAngle(this.activeElement.value), this.activeElement.value);
        },
		/**
         * Section For handle the Mouse Move event
		 * @private
         */	
        _onMouseMove: function (e) {
            this._blockDefaultActions(e);
            var startPoint = { "x": this.centerX, "y": this.centerY };
            var endPoint = { "x": e.pageX - $(this.canvasEl).offset().left, "y": e.pageY - $(this.canvasEl).offset().top };
            var indegree = 180 * this._getCirucumferenceAngle(startPoint, endPoint) / Math.PI;
            if (indegree < this.scaleEl[this.scaleIndex].startAngle && !this._isHalfCircle())
                indegree = indegree + 360;
            //if ((this._isHalfCircle() && this._isBetween(this.scaleEl[this.scaleIndex].startAngle, this.scaleEl[this.scaleIndex].sweepAngle, indegree)) || !this._isHalfCircle())
            //    this.activeElement.value = this._getValue(indegree);
                this._onMouseClickMove(this._getAngle(this.activeElement.value), this.activeElement.value);
            if (this._getValue(indegree) <= this.scaleEl[this.scaleIndex].maximum)
                this.activeElement.value = this._getValue(indegree);
            if (this.contextEl.putImageData)
                this._reDrawPointer();
            else
                this._init();
        },

		/**
         * To check whether gauge is half circle or not
		 * @private
         */	
        _isHalfCircle: function () {
            if (this.model.frame.frameType == "halfcircle")
                return true;
        },
		/**
         * To get the Y position of semi circular gauge
		 * @private
         */	
        _getHalfCircleYPosition: function () {
            return this._getYCordinate(this.centerY, 0, (this.model.frame.halfCircleFrameStartAngle + this.model.frame.halfCircleFrameEndAngle) / 2);
        },
		/**
         * To get the X position of semi circular gauge
		 * @private
         */	
        _getHalfCircleXPosition: function () {
            return this._getXCordinate(this.centerX, 0, (this.model.frame.halfCircleFrameStartAngle + this.model.frame.halfCircleFrameEndAngle) / 2);
        },
		/**
         * To get the X Co-ordinate of semi circular gauge
		 * @private
         */	
        _getXCordinate: function (x, radius, angle) {
            var x1 = x + radius * (Math.cos(Math.PI * (angle / 180)));
            return x1;
        },
		/**
         * To get the Y Co-ordinate of semi circular gauge
		 * @private
         */	
        _getYCordinate: function (y, radius, angle) {
            var y1 = y + radius * (Math.sin(Math.PI * (angle / 180)));
            return y1;
        },
		/**
         * To get the angle circular gauge
		 * @private
         */	
        _getAngle: function (value) {
            var tempValue, angle;
            if (value >= this.scaleEl[this.scaleIndex].minimum && value <= this.scaleEl[this.scaleIndex].maximum)
                tempValue = this.scaleEl[this.scaleIndex].direction == "clockwise" ? value - this.scaleEl[this.scaleIndex].minimum : this.scaleEl[this.scaleIndex].maximum - value;
            else {
                if (this.scaleEl[this.scaleIndex].direction == "clockwise") {
                    if (value <= this.scaleEl[this.scaleIndex].minimum)
                        tempValue = this.scaleEl[this.scaleIndex].minimum;
                    else
                        tempValue = this.scaleEl[this.scaleIndex].maximum;
                }
                else {
                    if (value <= this.scaleEl[this.scaleIndex].minimum)
                        tempValue = this.scaleEl[this.scaleIndex].maximum;
                    else
                        tempValue = this.scaleEl[this.scaleIndex].minimum;
                }
            }
            angle = (tempValue * ((this.scaleEl[this.scaleIndex].sweepAngle) / (this.scaleEl[this.scaleIndex].maximum - this.scaleEl[this.scaleIndex].minimum))) + (this.scaleEl[this.scaleIndex].startAngle);
            return angle;
        },
		/**
         * To Handle the Decimal value manupulation
		 * @private
         */	
        _subtractDecimal: function (value, interval) {
            var strValue = value.toString();
            var strInterval = interval.toString();
            var vDecimal;
            var iDecimal;
            if (strValue.indexOf('.') > -1)
                vDecimal = strValue.length - strValue.indexOf('.') - 1;
            else
                vDecimal = 0;
            if (strInterval.indexOf('.') > -1)
                iDecimal = strInterval.length - strInterval.indexOf('.') - 1;
            else
                iDecimal = 0;
            var decimal = vDecimal > iDecimal ? vDecimal : iDecimal;
            var correctValue = (value * Math.pow(10, decimal) - interval * Math.pow(10, decimal)) / Math.pow(10, decimal);
            return correctValue;
        },
		/**
         * To get the circumference angle for the circular gauge
		 * @private
         */	
        _getCirucumferenceAngle: function (startPoint, endPoint) {
            if (endPoint.x > startPoint.x) {
                if (endPoint.y > startPoint.y)
                    return this._tangent(startPoint, endPoint); //quadrant2
                else {
                    if (endPoint.y == startPoint.y)
                        return 0;
                    else
                        return 2 * Math.PI + this._tangent(startPoint, endPoint); //quadrant1
                }
            }
            else {
                if (endPoint.x == startPoint.x) {
                    if (endPoint.y == startPoint.y)
                        return 0;   //0 degree
                    else {
                        if (endPoint.y > startPoint.y)
                            return Math.PI / 2;  // 90 degree
                        else
                            return 1.5 * Math.PI; // 270 degree
                    }
                }
                else {
                    if (endPoint.y == startPoint.y)
                        return Math.PI; // 180 degree
                    else {
                        if (endPoint.y > startPoint.y)
                            return Math.PI + this._tangent(startPoint, endPoint);  // quadrant3
                        else
                            return Math.PI + this._tangent(startPoint, endPoint); //quadrant4
                    }
                }
            }
        },
		/**
         * To Return the Tangent value in radians
		 * @private
         */	
        _tangent: function (startPoint, endPoint) {
            var distance = (endPoint.y - startPoint.y) / (endPoint.x - startPoint.x);
            var inradians = Math.atan(distance);
            //indegrees=180*inradians/Math.PI
            return inradians;
        },
		/**
         * To get the Image for Indicator
		 * @private
         */	
        _getIndicatorImage: function () {
            if (this.pointerImage)
                return this.pointerImage;
            else
                this._getPointerImage();
        },
		/**
         * To get the Image for Pointer
		 * @private
         */	
        _getPointerImage: function () {
            if (this.customLabelImage)
                return this.customLabelImage;
            else
                return this._getCustomLabelImage();
        },
		/**
         * To get the Image for SubGauge
		 * @private
         */	
        _getSubGaugeImage: function () {
            if (this.rangeImage)
                return this.rangeImage;
            else
                return this._getRangeImage();
        },
		/**
         * To get the Image for CustomLabel
		 * @private
         */	
        _getCustomLabelImage: function () {
            if (this.subGaugeImage)
                return this.subGaugeImage;
            else
                return this._getSubGaugeImage();
        },
		/**
         * To get the Image for Range
		 * @private
         */	
        _getRangeImage: function () {
            if (this.labelImage)
                return this.labelImage;
            else
                return this._getLabelImage();
        },
		/**
         * To get the Image for Label
		 * @private
         */	
        _getLabelImage: function () {
            if (this.tickImage)
                return this.tickImage;
            else
                return this._getTickImage();
        },
		/**
         * To get the Image for Tick
		 * @private
         */	
        _getTickImage: function () {
            if (this.scaleImage)
                return this.scaleImage;
            else
                return this.outerImage;
        },
		/**
         * To get the value from angle given
		 * @private
         */	
        _getValue: function (angle) {
            return ((angle - this.scaleEl[this.scaleIndex].startAngle) / this.scaleEl[this.scaleIndex].sweepAngle) * (this.scaleEl[this.scaleIndex].maximum - this.scaleEl[this.scaleIndex].minimum);
        },
		/**
         * To draw scales
		 * @private
         */	
        _drawScales: function () {
            var self = this;
            this.scaleEl = this.model.scales;
            $.each(this.model.scales, function (index, element) {
                self.scaleIndex = index;
                if (element.showScaleBar)
                    self._setScaleCordinates(element);
            });
            this._setTicks();
            this._setLabels();
            this._setRanges();
            this._subGauge();
            this._setCustomLabel();
            this._setPointers();
            $.each(this.model.scales, function (index, element) {
                if (element.showPointers) {
                    if (element.pointers.length > 1)
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
            this._setIndicators();
        },
		/**
         * To set the value for ticks coordinates
		 * @private
         */	
        _setTicks: function () {
            var self = this;
            $.each(this.model.scales, function (index, element) {
                if (element.showTicks) {
                    self.scaleIndex = index;
                    if (element.ticks != null) {
                        self.tickEl = element.ticks;
                        $.each(element.ticks, function (tickIndex, tickElement) {
                            self.tickIndex = tickIndex;
                            self._setTicksCordinates(tickIndex, tickElement);
                        });
                    }
                }
            });
        },
		/**
         * To set the Label coordnates
		 * @private
         */	
        _setLabels: function () {
            var self = this;
            $.each(this.model.scales, function (index, element) {
                if (element.showLabels) {
                    self.scaleIndex = index;
                    if (element.labels != null) {
                        self.labelEl = element.labels;
                        $.each(element.labels, function (labelIndex, labelElement) {
                            self.labelIndex = labelIndex;
                            self._setLabelCoridnates(labelIndex, labelElement);
                        });
                    }
                }
            });
        },
		/**
         * To set the Indicators coordnates
		 * @private
         */	
        _setIndicators: function () {
            var self = this;
            $.each(this.model.scales, function (index, element) {
                if (element.showIndicators) {
                    self.scaleIndex = index;
                    if (element.indicators != null) {
                        self.indicatorEl = element.indicators;
                        $.each(element.indicators, function (indIndex, indElement) {
                            self.indicatorIndex = indIndex;
                            self._drawIndicator(indIndex, indElement);
                        });
                    }
                }
            });
        },
		/**
         * To set the Pointers coordnates
		 * @private
         */	
        _setPointers: function () {
            var self = this;
            $.each(this.model.scales, function (index, element) {
                if (element.showPointers) {
                    self.scaleIndex = index;
                    if (element.pointers != null) {
                        self.pointerEl = element.pointers;
                        $.each(element.pointers, function (pointerIndex, pointerElement) {
                            if (self._isHalfCircle())
                                element.showBackNeedle = false;
                            self.pointerIndex = pointerIndex;
                            self._drawPointers(pointerIndex, pointerElement);
                            //  setInterval( function(){ self._drawPointers(pointerIndex,pointerElement);}, 30 ); 
                        });
                    }
                }

            });
        },
		/**
         * To handle values while Animating
		 * @private
         */	
        _onAnimate: function (delay) {
            var self = this, timer;
            var currentValue = self.model.scales[0].minimum;
            var pointerValue = self.model.scales[0].pointers[0].value;
            timer = setInterval(function pointerchan() {
                if (pointerValue > currentValue) {
                    currentValue = currentValue + 1;
                    self.setPointerValue(0, 0, currentValue);
                }
                else if (currentValue == pointerValue) {
                    window.clearInterval(timer);
                }
            }, delay);
        },
		/**
         * To set the Ranges coordnates
		 * @private
         */	
        _setRanges: function () {
            var self = this;
            $.each(this.model.scales, function (index, element) {
                if (element.showRanges) {
                    self.scaleIndex = index;
                    if (element.ranges != null) {
                        self.rangeEl = element.ranges;
                        $.each(element.ranges, function (rangeIndex, rangeElement) {
                            self.rangeIndex = rangeIndex;
                            self._setRangeCordinates(rangeIndex, rangeElement);
                        });
                    }
                }
            });
        },
		/**
         * To set the CustomLabel coordnates
		 * @private
         */	
        _setCustomLabel: function () {
            var self = this;
            $.each(this.model.scales, function (index, element) {
                self.scaleIndex = index;
                if (element.customLabels != null) {
                    self.customLabelEl = element.customLabels;
                    $.each(element.customLabels, function (labelIndex, labelElement) {
                        self.customLabelIndex = index;
                        self._setCustomLabelCordinates(labelIndex, labelElement);
                    });
                }
            });
        },
		/**
         * To Invoke the subgauge elements
		 * @private
         */	
        _subGauge: function () {
            var self = this;
            $.each(this.model.scales, function (index, element) {
                self.scaleIndex = index;
                if (element.subGauges != null) {
                    self.subGaugeEl = element.subGauges;
                    $.each(element.subGauges, function (subGaugeIndex, subGaugeElement) {
                        self.subGaugeIndex = index;
                        self._setSubGauge(subGaugeIndex, subGaugeElement);
                    });
                }
            });
        },
		/**
         * To set the Scale coordnates
		 * @private
         */	
        _setScaleCordinates: function (element) {
            this.location = {
                "centerX": this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, "centerY": this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerY,
                "startAngle": element.startAngle, "endAngle": (element.startAngle + element.sweepAngle),
                "startRadius": this.scaleEl[this.scaleIndex].radius - this.scaleEl[this.scaleIndex].size / 2, "endRadius": this.scaleEl[this.scaleIndex].radius + this.scaleEl[this.scaleIndex].size / 2
            };
            this.style = {
                "radius": element.radius - element.size / 2,
                "strokeStyle": (element.border.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.border.color), // this._getColor(element, element.borderColor),
                "lineWidth": element.border.width,
                "size": element.size,
                "isFill": true,
                "opacity": isNaN(element.opacity) ? 1 : element.opacity,
                "isStroke": true,
                "shadowOffset": element.shadowOffset,
                "fillStyle": (element.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.backgroundColor), //this._getColor(element, element.backgroundColor),
                "counterClockwise": element.direction == "clockwise" ? false : true
            };
            this.maximum(element.maximum);
            this.minimum(element.minimum);
            this._drawScaleBar(this.location, this.style);
            if (this.contextEl.getImageData)
                this.scaleImage = this.contextEl.getImageData(0, 0, this.model.width, this.model.height);
        },
		/**
         * To draw Outer layer for the circuar gauge
		 * @private
         */	
        _drawOuterLayer: function () {
            var interiorGradient, startPoint, endPoint, hcFrameInnerAngle;
            if (this._isHalfCircle()) {
                startPoint = { "x": this.centerX, "y": this.centerY };
                endPoint = { "x": this.centerX + this.model.radius, "y": this.centerY / 2 };
                hcFrameInnerAngle = this._getCirucumferenceAngle(startPoint, endPoint);
            }
            if (!this.model.isRadialGradient) {
                interiorGradient = this.contextEl.createLinearGradient(0, 0, 0, this.canvasEl[0].height);
            }
            else {
                interiorGradient = this.contextEl.createRadialGradient(this.canvasEl[0].width / 2, this.canvasEl[0].height / 2, 0, this.canvasEl[0].width / 2, this.canvasEl[0].height / 2, this.model.radius);
            }
            if (!ej.isNullOrUndefined(this.model.interiorGradient))
                this._setGradientColor(this, interiorGradient, this.model.interiorGradient.colorInfo);

            this.frameOuterLocation = { "centerX": this.centerX, "hcCenterX": this.centerX, "hcCenterY": this.centerY, "centerY": this.centerY, "startAngle": this._isHalfCircle() ? Math.PI * ((this.model.frame.halfCircleFrameStartAngle) / 180) : 0, "endAngle": this._isHalfCircle() ? Math.PI * ((this.model.frame.halfCircleFrameEndAngle) / 180) : 2 * Math.PI };
            if (this._isHalfCircle())
                this.frameInnerLocation = { "centerX": this.centerX, "hcCenterX": this._getXCordinate(this.centerX, 0, (this.model.frame.halfCircleFrameStartAngle + this.model.frame.halfCircleFrameEndAngle) / 2), "hcCenterY": this._getYCordinate(this.centerX, 0, (this.model.frame.halfCircleFrameStartAngle + this.model.frame.halfCircleFrameEndAngle) / 2), "centerY": this.centerY, "startAngle": Math.PI * ((this.model.frame.halfCircleFrameStartAngle) / 180) + hcFrameInnerAngle, "endAngle": Math.PI * ((this.model.frame.halfCircleFrameEndAngle) / 180) - hcFrameInnerAngle };
            this.frameInnerStyle = {
                "radius": this.model.radius,
                "isStroke": false, "isFill": true,
                "fillStyle": (this.model.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(null, this.model.backgroundColor),
                "counterClockwise": false
            };
            if (this.model.frame.frameType == "fullcircle") {
                this._drawCircleFrame(this.frameOuterLocation, this.frameInnerStyle);
            }
            else if (this.model.frame.frameType == "halfcircle") {
                this._drawHalfCircle(this.frameInnerLocation, this.frameInnerStyle);
            }
            if (this.contextEl.getImageData)
                this.outerImage = this.contextEl.getImageData(0, 0, this.model.width, this.model.height);
        },
		/**
         * To set Ticks Cordinates for the circuar gauge
		 * @private
         */	
        _setTicksCordinates: function (index, element) {
            var startX, startY, lineHeight, minimumMeet, interval, radius, angle;
            if (element.type == "major") {
                interval = this.scaleEl[this.scaleIndex].majorIntervalValue;
                this.majorTickHeight = element.height;
            }
            else {
                interval = this.scaleEl[this.scaleIndex].minorIntervalValue;
            }
            if (element.placement == "far")
                radius = this.scaleEl[this.scaleIndex].radius + this.scaleEl[this.scaleIndex].size / 2 + this.scaleEl[this.scaleIndex].border.width / 2 + element.distanceFromScale;
            if (element.placement == "center")
                radius = this.scaleEl[this.scaleIndex].radius - element.height / 2 - this.scaleEl[this.scaleIndex].border.width / 2 - element.distanceFromScale;
            if (element.placement == "near")
                radius = this.scaleEl[this.scaleIndex].radius - this.scaleEl[this.scaleIndex].size / 2 - this.scaleEl[this.scaleIndex].border.width / 2 - element.distanceFromScale;
            lineHeight = element.placement == "near" ? -element.height : element.height;
            for (var value = this.scaleEl[this.scaleIndex].maximum; value >= this.scaleEl[this.scaleIndex].minimum; value -= interval) {
                if (interval == this.scaleEl[this.scaleIndex].minorIntervalValue && value % this.scaleEl[this.scaleIndex].majorIntervalValue != 0 || interval == this.scaleEl[this.scaleIndex].majorIntervalValue) {
                    if (value == this.scaleEl[this.scaleIndex].minimum)
                        minimumMeet = true;
                    angle = this._getAngle(value);
                    angle = angle > 360 ? angle - 360 : angle;
                    startX = this._getXCordinate(this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, radius, angle);
                    startY = this._getYCordinate(this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerY, radius, angle);
                    this.location = { "startX": startX, "startY": startY };
                    this.style = { "angle": element.angle + angle, "isStroke": true, "isFill": false, "lineHeight": lineHeight, "lineWidth": element.width, "strokeStyle": (element.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.color) };
                    if (this.model.drawTicks)
                        this._onDrawTicks(angle, value);
                    this._drawTickMark(this.location, this.style);
                }
            }
            if (!minimumMeet) {
                angle = this._getAngle(this.scaleEl[this.scaleIndex].minimum);
                angle = angle > 360 ? angle - 360 : angle;
                startX = this._getXCordinate(this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, radius, angle);
                startY = this._getYCordinate(this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerY, radius, angle);
                this.location = { "startX": startX, "startY": startY };
                this.style = { "angle": element.angle + angle, "isStroke": true, "isFill": false, "lineHeight": lineHeight, "lineWidth": element.width, "strokeStyle": (element.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.color) };
                //if (this.model.drawTicks)
                //    this._onDrawTicks(angle, value);
                //this._drawTickMark(this.location, this.style);
            }

            if (this.contextEl.getImageData)
                this.tickImage = this.contextEl.getImageData(0, 0, this.model.width, this.model.height);
        },
		/**
         * To set Label Cordinates for the circuar gauge
		 * @private
         */	
        _setLabelCoridnates: function (index, element) {
            var minimumMeet;
            var startX, startY, lineHeight, incrementAngle, interval, radius;
            interval = element.type == "major" ? this.scaleEl[this.scaleIndex].majorIntervalValue : this.scaleEl[this.scaleIndex].minorIntervalValue;
            incrementAngle = element.type == "major" ? (this.majorIntervalAngle = this.scaleEl[this.scaleIndex].sweepAngle / ((this.scaleEl[this.scaleIndex].maximum - this.scaleEl[this.scaleIndex].minimum) / interval)) : this.scaleEl[this.scaleIndex].sweepAngle / ((this.scaleEl[this.scaleIndex].maximum - this.scaleEl[this.scaleIndex].minimum) / interval);
            if (element.placement == "far")
                radius = this.scaleEl[this.scaleIndex].radius + this.scaleEl[this.scaleIndex].size / 2 + this.majorTickHeight + element.distanceFromScale;
            if (element.placement == "center")
                radius = this.scaleEl[this.scaleIndex].radius - 10 - element.distanceFromScale;
            if (element.placement == "near")
                radius = this.scaleEl[this.scaleIndex].radius - this.scaleEl[this.scaleIndex].size / 2 - 10 - this.majorTickHeight - element.distanceFromScale;
            for (var value = this.scaleEl[this.scaleIndex].maximum; value >= this.scaleEl[this.scaleIndex].minimum; value = this._subtractDecimal(value, interval)) {
                if (value == this.scaleEl[this.scaleIndex].minimum)
                    minimumMeet = true;
                if (interval == this.scaleEl[this.scaleIndex].minorIntervalValue && value % this.scaleEl[this.scaleIndex].majorIntervalValue != 0 || interval == this.scaleEl[this.scaleIndex].majorIntervalValue) {
                    if (value == this.scaleEl[this.scaleIndex].minimum && !element.includeFirstValue) {
                        continue;
                    }
                    angle = this._getAngle(value);
                    angle = angle > 360 ? angle - 360 : angle;
                    startX = this._getXCordinate(this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, radius, angle);
                    startY = this._getYCordinate(this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerY, radius, angle);
                    this.location = { "startX": startX, "startY": startY };
                    this.style = { "angle": this.scaleEl[this.scaleIndex].labels[this.labelIndex].autoAngle ? angle + element.angle : element.angle, "isStroke": false, "isFill": true, "textValue": value, "opacity": !(element.opacity) ? 1 : element.opacity, "font": this._getFontString(element, element.font), "fillStyle": (element.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.color) };
                    if (this.model.drawLabels)
                        this._onDrawLabels(this.scaleEl[this.scaleIndex].labels[this.labelIndex].autoAngle ? angle + element.angle : element.angle, value);
                    this._drawLabel(this.location, this.style, false);
                }
            }
            if (!minimumMeet) {
                angle = this._getAngle(this.scaleEl[this.scaleIndex].minimum);
                angle = angle > 360 ? angle - 360 : angle;
                startX = this._getXCordinate(this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, radius, angle);
                startY = this._getYCordinate(this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerY, radius, angle);
                this.location = { "startX": startX, "startY": startY };
                this.style = { "angle": this.scaleEl[this.scaleIndex].labels[this.labelIndex].autoAngle ? angle + element.angle : element.angle, "isStroke": false, "isFill": true, "textValue": this.scaleEl[this.scaleIndex].minimum, "opacity": !(element.opacity) ? 1 : element.opacity, "font": this._getFontString(element, element.font), "lineHeight": lineHeight, "lineWidth": element.width, "fillStyle": (element.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.color) };
                if (this.model.drawLabels)
                    this._onDrawLabels(angle, value);
                this._drawLabel(this.location, this.style, false);
                angle = this._getAngle(value);
                angle = angle > 360 ? angle - 360 : angle;
            }
            if (this.contextEl.getImageData)
                this.labelImage = this.contextEl.getImageData(0, 0, this.model.width, this.model.height);
        },
		/**
         * To set Range Cordinates for the circuar gauge
		 * @private
         */	
        _setRangeCordinates: function (index, element) {
            if (element.startValue >= this.scaleEl[this.scaleIndex].minimum && element.endValue <= this.scaleEl[this.scaleIndex].maximum) {
                var startX, startY, endX, endY, startAngle, radius, endAngle, startRadius, endRadius, grd, controlAngle;
                controlAngle = this._getAngle((element.startValue + element.endValue) / 2);
                startAngle = this._getAngle(element.startValue);
                endAngle = this._getAngle(element.endValue);
                radius = this.scaleEl[this.scaleIndex].radius - element.distanceFromScale - this.scaleEl[this.scaleIndex].size / 2 - element.size - this.majorTickHeight;
                startRadius = this.scaleEl[this.scaleIndex].radius - element.distanceFromScale - this.scaleEl[this.scaleIndex].size / 2 - this.majorTickHeight;
                endRadius = this.scaleEl[this.scaleIndex].radius - element.distanceFromScale - element.size - this.scaleEl[this.scaleIndex].size / 2 - this.majorTickHeight;
                startX = this._getXCordinate(this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, radius, startAngle);
                startY = this._getYCordinate(this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerY, radius, startAngle);
                endX = this._getXCordinate(this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, radius, endAngle);
                endY = this._getYCordinate(this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerY, radius, endAngle);
                startAngle = (180 * this._getCirucumferenceAngle({ "x": this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, "y": this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerY }, { "x": startX, "y": startY })) / Math.PI;
                endAngle = (180 * this._getCirucumferenceAngle({ "x": this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, "y": this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerY }, { "x": endX, "y": endY })) / Math.PI;

                if (!ej.isNullOrUndefined(element.gradients)) {
                    grd = this.contextEl.createRadialGradient(this.centerX, this.centerY, endRadius, this.centerX, this.centerY, startRadius);
                    this._setGradientColor(this, grd, element.gradients.colorInfo);
                } else
                    grd = (element.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.backgroundColor); // this._getColor(element, element.backgroundColor);
                this.location = { "startX": startX, "startY": startY, "endX": endX, "endY": endY, "startAngle": startAngle, "endAngle": endAngle };
                this.style = {
                    "startWidth": element.startWidth,
                    "isFill": true,
                    "fillStyle": grd,
                    "strokeStyle": (element.border.color == "transparent") ? "rgba(0,0,0,0)" : element.border.color, // element.borderColor,
                    "opacity": isNaN(element.opacity) ? 1 : element.opacity,
                    "counterClockwise": this.scaleEl[this.scaleIndex].direction == "clockwise" ? false : true,
                    "startRadius": startRadius, "endRadius": endRadius, "endWidth": element.endWidth, "lineWidth": element.border.width, "isStroke": true
                };
                if (this.model.drawRange)
                    this._onDrawRange(this.location, this.style);
                this._drawRange(this.location, this.style);
            }
            if (this.contextEl.getImageData)
                this.rangeImage = this.contextEl.getImageData(0, 0, this.model.width, this.model.height);
        },
		/**
         * To set the subGauges
		 * @private
         */	
        _setSubGauge: function (index, element) {
            var subGaugeDiv = $('div[id=' + element.controlID + ']');
            if (subGaugeDiv.length > 0 && subGaugeDiv.find('canvas').length) {
                var sourceCanvas = subGaugeDiv.find('canvas')[0].getContext('2d');
                this.contextEl.drawImage(sourceCanvas.canvas, element.position.x, element.position.y, element.width, element.height);
                subGaugeDiv.css('display', 'none');
                if (this.contextEl.getImageData)
                    this.subGaugeImage = this.contextEl.getImageData(0, 0, this.model.width, this.model.height);
            }
        },
		/**
         * To set Custom Label Cordinates for the circuar gauge
		 * @private
         */	
        _setCustomLabelCordinates: function (index, element) {
            element.color = element.color ? (element.color) : "#282828";
            this.location = element.position ? ({ "startX": element.position.x, "startY": element.position.y }) : { "startX": 0, "startY": 0 };
            this.style = { "angle": element.textAngle, "textValue": element.value, "fillStyle": (element.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.color), "font": this._getFontString(element, element.font) };
            if (this.model.drawCustomLabel)
                this._onDrawCustomLabel(this.location, this.style);
            this._drawLabel(this.location, this.style, true);
            if (this.contextEl.getImageData)
                this.customLabelImage = this.contextEl.getImageData(0, 0, this.model.width, this.model.height);
        },
		/**
         * To Draw Indicators
		 * @private
         */	
        _drawIndicator: function (index, element) {
            var self = this, isInStateRange = false;
            this.location = { "centerX": element.position.x - element.width / 2, "textLocation": element.position, "centerY": element.position.y - element.height / 2, "startAngle": 0, "endAngle": 2 * Math.PI };
            this.style = {
                "radius": (element.height + element.width) / 2,
                "strokeStyle": "#2BA104",
                "cornerRadius": element.type == "roundedrectangle" ? 2 : 0,
                "height": element.height,
                "width": element.width,
                "lineWidth": element.indicatorBorderWidth,
                "fillStyle": "#2BA104",
                "isStroke": true,
                "isFill": true,
                "indicatorText": element.indicatorText,
                "textColor": null,
                "font": null,
                "counterClockwise": false
            };
            if (this.model.drawIndicators)
                this._onDrawIndicators(this.style, this.location);
            if (element.type == ej.datavisualization.CircularGauge.IndicatorType.Image) {
                var image = new Image();
                image.onload = function () {
                    self.contextEl.drawImage(this, element.position.x, element.position.y);
                };
                image.src = element.imageUrl;
            }
            else if (element.stateRanges != null) {
                $.each(element.stateRanges, function (index, srEl) {//srEl = StateRange Element
                    if (self.pointerEl[self.pointerIndex].value >= srEl.startValue && self.pointerEl[self.pointerIndex].value <= srEl.endValue) {
                        isInStateRange = true;
                        if (!ej.isNullOrUndefined(srEl.text) && srEl.text.length > 0) {
                            self.style.indicatorText = srEl.text;
                            self.style.textColor = (srEl.textColor == "transparent") ? "rgba(0,0,0,0)" : srEl.textColor; // srEl.textColor;
                            self.style.font = element.font;
                        }
                        self.style.strokeStyle = (srEl.borderColor == "transparent") ? "rgba(0,0,0,0)" : srEl.borderColor;
                        self.style.fillStyle = (srEl.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : srEl.backgroundColor;
                        self._drawIndicatorFrame(element.type, self.location, self.style);
                    }
                });
            }
            if (!isInStateRange && element.type != ej.datavisualization.CircularGauge.IndicatorType.Image) {
                self._drawIndicatorFrame(element.type, self.location, self.style);
            }
            if (this.contextEl.getImageData && element.type != ej.datavisualization.CircularGauge.IndicatorType.Image)
                this.indicatorImage = this.contextEl.getImageData(0, 0, this.model.width, this.model.height);
        },

        _drawIndicatorFrame: function(type, location,style) {
            switch (type) {
                case "circle":
                    this._drawCircleFrame(location, style);
                    break;
                case "roundedrectangle":
                case "rectangle":
                    this._drawRectangleFrame(location, style);
                    break;
                case "text":
                    this._drawText(location, style);
                    break
            }
        },
		/**
         * To Draw Scale Bar
		 * @private
         */	
        _drawScaleBar: function (location, style) {
            this.contextEl.shadowColor = (style.strokeStyle == "transparent") ? "rgba(0,0,0,0)" : style.strokeStyle;
            if (style.shadowOffset)
                this.contextEl.shadowBlur = style.shadowOffset;
            this._contextOpenPath(style, this);
            if ((location.endAngle - location.startAngle) == 0)
                this.contextEl.arc(location.centerX, location.centerY, location.startRadius, Math.PI * (0 / 180), Math.PI * (0 / 180), false);
            else if ((location.endAngle - location.startAngle) % 360 == 0) {
                this.contextEl.arc(location.centerX, location.centerY, location.startRadius, Math.PI * (0 / 180), Math.PI * (360 / 180), false);
                this.contextEl.arc(location.centerX, location.centerY, location.endRadius, Math.PI * (360 / 180), Math.PI * (0 / 180), true);
            }
            else {
                this.contextEl.arc(location.centerX, location.centerY, location.startRadius, Math.PI * (location.startAngle / 180), Math.PI * (location.endAngle / 180), false);
                this.contextEl.arc(location.centerX, location.centerY, location.endRadius, Math.PI * (location.endAngle / 180), Math.PI * (location.startAngle / 180), true);
            }
            this._contextClosePath(style, this);
        },
		/**
         * To Draw TickMark
		 * @private
         */	
        _drawTickMark: function (location, style) {
            this._contextOpenPath(style, this);
            this.contextEl.translate(location.startX, location.startY);
            this.contextEl.moveTo(0, 0);
            this.contextEl.rotate((Math.PI * (style.angle / 180)));
            this.contextEl.lineTo(style.lineHeight, 0);
            this._contextClosePath(style, this);
        },
		/**
         * To Draw Label
		 * @private
         */	
        _drawLabel: function (location, style, isCustomLabel) {
            this._contextOpenPath(style, this);
            this.contextEl.textAlign = "center";
            this.contextEl.textBaseline = "middle";
            this.contextEl.font = style.font;
            this.contextEl.translate(location.startX, location.startY);
            this.contextEl.moveTo(0, 0);
            this.scaleEl[this.scaleIndex].labels[this.labelIndex].autoAngle ? this.contextEl.rotate((Math.PI * ((style.angle - 270) / 180))) : this.contextEl.rotate((Math.PI * (style.angle / 180)));
            if (!ej.isNullOrUndefined(isCustomLabel) && !isCustomLabel) {
                var textPostion = this.model.scales[this.scaleIndex].labels[this.labelIndex].unitTextPosition;
                if (!ej.isNullOrUndefined(textPostion) && textPostion.toString() == "back")
                    style.textValue = style.textValue + this.model.scales[this.scaleIndex].labels[this.labelIndex].unitText;
                else if (!ej.isNullOrUndefined(textPostion) && textPostion.toString() == "front")
                    style.textValue = this.model.scales[this.scaleIndex].labels[this.labelIndex].unitText + style.textValue;
            }
            this.contextEl.fillText(style.textValue, 0, 0);
            this._contextClosePath(style, this);
        },
		/**
         * To Draw Circle Frame
		 * @private
         */	
        _drawCircleFrame: function (location, style) {
            this._contextOpenPath(style, this);
            this.contextEl.arc(location.centerX, location.centerY, style.radius, location.startAngle, location.endAngle, style.counterClockwise);
            this._contextClosePath(style, this);
            if (style.indicatorText)
                this._drawText(location, style);
        },
		/**
         * To Draw Half Circle
		 * @private
         */	
        _drawHalfCircle: function (location, style) {
            this._contextOpenPath(style, this);
            this.contextEl.lineJoin = "round";
            this.contextEl.arc(location.centerX, location.centerY, style.radius, location.startAngle, location.endAngle, false);
            this.contextEl.lineTo(location.hcCenterX, location.hcCenterY);
            this._contextClosePath(style, this);
        },
		/**
         * To Draw Rectangular Frame
		 * @private
         */	
        _drawRectangleFrame: function (location, style) {
            this._contextOpenPath(style, this);
            this.contextEl.translate(location.centerX, location.centerY - style.height / 2);
            this.contextEl.moveTo(style.cornerRadius, 0);
            this.contextEl.lineTo(style.width - style.cornerRadius, 0);
            this.contextEl.quadraticCurveTo(style.width, 0, style.width, style.cornerRadius);
            this.contextEl.lineTo(style.width, style.height - style.cornerRadius);
            this.contextEl.quadraticCurveTo(style.width, style.height, style.width - style.cornerRadius, style.height);
            this.contextEl.lineTo(style.cornerRadius, style.height);
            this.contextEl.quadraticCurveTo(0, style.height, 0, style.height - style.cornerRadius);
            this.contextEl.lineTo(0, style.cornerRadius);
            this.contextEl.quadraticCurveTo(0, 0, style.cornerRadius, 0);
            this._contextClosePath(style, this);
            if (style.indicatorText)
                this._drawText(location, style);
        },
		/**
         * To Draw Text for Indicators
		 * @private
         */	
        _drawText: function (location, style) {
            this.contextEl.beginPath();
            this.contextEl.textAlign = "center";
            this.contextEl.fillStyle = (style.textColor == "transparent") ? "rgba(0,0,0,0)" : style.textColor;
            this.contextEl.font = style.font;
            this.contextEl.fillText(style.indicatorText, location.textLocation.x, location.textLocation.y);
            this.contextEl.closePath();
        },
		/**
         * To Draw Range
		 * @private
         */	
        _drawRange: function (location, style) {
            this._contextOpenPath(style, this);
            this.contextEl.arc(this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerY, style.startRadius, Math.PI * (location.startAngle / 180), Math.PI * (location.endAngle / 180), style.counterClockwise);
            this.contextEl.arc(this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerY, style.endRadius, Math.PI * (location.endAngle / 180), Math.PI * (location.startAngle / 180), !style.counterClockwise);
            this._contextClosePath(style, this);
        },
		/**
         * To Draw Text for Pointers
		 * @private
         */	
        _drawPointers: function (index, element) {
            var startX, startY, angle, height, grd;
            angle = this._getAngle(element.value);
            angle = angle > 360 ? angle - 360 : angle;
            if (element.type == "needle") {
                if (element.placement == "far")
                    height = element.length + this.scaleEl[this.scaleIndex].size / 2;
                if (element.placement == "center")
                    height = element.length;
                if (element.placement == "near")
                    height = element.length - this.scaleEl[this.scaleIndex].size / 2;
            }
            else {
                height = element.length;
                if (element.placement == "far") {
                    startX = this._getXCordinate(this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, this.scaleEl[this.scaleIndex].radius + this.scaleEl[this.scaleIndex].size / 2 + element.distanceFromScale, angle);
                    startY = this._getYCordinate(this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerX, this.scaleEl[this.scaleIndex].radius + this.scaleEl[this.scaleIndex].size / 2 + element.distanceFromScale, angle);
                }
                if (element.placement == "center") {
                    startX = this._getXCordinate(this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, this.scaleEl[this.scaleIndex].radius - this.scaleEl[this.scaleIndex].size / 2 - element.distanceFromScale, angle);
                    startY = this._getYCordinate(this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerX, this.scaleEl[this.scaleIndex].radius - this.scaleEl[this.scaleIndex].size / 2 - element.distanceFromScale, angle);
                }
                if (element.placement == "near") {
                    startX = this._getXCordinate(this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, this.scaleEl[this.scaleIndex].radius - this.scaleEl[this.scaleIndex].size / 2 - element.distanceFromScale - this.majorTickHeight - 15, angle);
                    startY = this._getYCordinate(this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerX, this.scaleEl[this.scaleIndex].radius - this.scaleEl[this.scaleIndex].size / 2 - element.distanceFromScale - this.majorTickHeight - 15, angle);
                }
            }
            if (height > this.model.radius)
                height = this.model.radius;

            this.location = { "startX": element.type == "needle" ? this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX : startX, "startY": element.type == "needle" ? this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerY : startY };
            if (!ej.isNullOrUndefined(element.gradients)) {
                grd = this.contextEl.createLinearGradient(0, 0, 0, element.width);
                this._setGradientColor(this, grd, element.gradients.colorInfo);
            } else
                grd = (element.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.backgroundColor);
            this.style = {
                "width": element.width,
                "isFill": true,
                "isStroke": true,
                "radius": 0,
                "showBackNeedle": element.showBackNeedle,
                "backNeedleLength": element.backNeedleLength,
                "angle": element.type == "needle" ? angle : element.placement == "far" ? angle : angle + 180,
                "height": height, "lineWidth": element.border.width, "opacity": isNaN(element.opacity) ? 1 : element.opacity,
                "strokeStyle": (element.border.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(element, element.border.color),
                "fillStyle": grd
            };
            if (this.model.drawPointers)
                this._onDrawPointers(angle, element.value);
            if (element.type == "needle") {
                this._drawNeedlePointer(this.location, this.style, element);
                this._setPointerCap(element);
            }
            else {
                if (element.markerType == "roundedrectangle")
                    this.style.radius = 5;
                this._drawMarkerType(element.markerType, this.location, this.style);
            }
            if (this.contextEl.getImageData)
                this.pointerImage = this.contextEl.getImageData(0, 0, this.model.width, this.model.height);
            this.value(element.value);
        },

        _drawMarkerType: function (type, location, style) {
            switch (type) {
                case "rectangle":
                    this._drawRectangle(location,style,this);
                    break;
                case "triangle":
                    this._drawTriangle(location,style,this);
                    break;
                case "ellipse":
                    this._drawEllipse(location,style,this);
                    break;
                case "diamond":
                    this._drawDiamond(location,style,this);
                    break;
                case "pentagon":
                    this._drawPentagon(location,style,this);
                    break;
                case "circle":
                    this._drawCircle(location,style,this);
                    break;
                case "slider":
                    this._drawSlider(location,style,this);
                    break;
                case "pointer":
                    this._drawPointer(location,style,this);
                    break;
                case "wedge":
                    this._drawWedge(location,style,this);
                    break;
                case "trapezoid":
                    this._drawTrapezoid(location,style,this);
                    break;
                case "roundedrectangle":
                    this._drawRoundedRectangle(location,style,this);
                    break;
            }
        },

		/**
         * To Draw Needle Pointer
		 * @private
         */	
        _drawNeedlePointer: function (location, style, element) {
            this._contextOpenPath(style, this);
            this.contextEl.translate(location.startX, location.startY);
            this.contextEl.rotate(Math.PI * ((style.angle) / 180));
            this.contextEl.moveTo(0, -style.width / 2);
            if (this.pointerEl[this.pointerIndex].needleType == "triangle") {
                this.contextEl.lineTo(style.height, 0);
            }
            else if (this.pointerEl[this.pointerIndex].needleType == "rectangle") {
                this.contextEl.lineTo(style.height, -style.width / 2);
                this.contextEl.lineTo(style.height, style.width / 2);
            }
            else if (this.pointerEl[this.pointerIndex].needleType == "trapezoid") {
                this.contextEl.lineTo(style.height, -style.width / 4);
                this.contextEl.lineTo(style.height, style.width / 4);
            }
            else if (this.pointerEl[this.pointerIndex].needleType == "arrow") {
                this.contextEl.lineTo(style.height - style.height / 4, -style.width / 6);
                this.contextEl.lineTo(style.height - style.height / 4, -style.width / 2);
                this.contextEl.lineTo(style.height, 0);
                this.contextEl.lineTo(style.height - style.height / 4, style.width / 2);
                this.contextEl.lineTo(style.height - style.height / 4, style.width / 6);
            }
            this.contextEl.lineTo(0, style.width / 2);
            if (style.showBackNeedle) {
                this.contextEl.lineTo(-(style.backNeedleLength + this.scaleEl[this.scaleIndex].pointerCap.radius / 2), style.width / 2);
                this.contextEl.lineTo(-(style.backNeedleLength + this.scaleEl[this.scaleIndex].pointerCap.radius / 2), -style.width / 2);
            }
            this.canvasEl.attr("aria-label", this.model.scales[this.scaleIndex].pointers[this.pointerIndex].value);
            this._contextClosePath(style, this);
        },
		/**
         * To set the pointer cap position
		 * @private
         */	
        _setPointerCap: function (element) {
            var grd;
            //var gradients = [{ "ColorStop": 0.19, "Color": "#F2DFDF" }, { "ColorStop": 0.71, "Color": "#FFFFFF" }, { "ColorStop": 0.77, "Color": "#836B33" }];
            grd = this.contextEl.createRadialGradient(this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, this._isHalfCircle() ? this._getHalfCircleYPosition() : this.canvasEl[0].height / 2, 0, this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, this._isHalfCircle() ? this._getHalfCircleYPosition() : this.canvasEl[0].height / 2, this.scaleEl[this.scaleIndex].pointerCap.radius);
            if (!ej.isNullOrUndefined(this.scaleEl[this.scaleIndex].pointerCap.interiorGradient))
                this._setGradientColor(this, grd, this.scaleEl[this.scaleIndex].pointerCap.interiorGradient.colorInfo);
            else
                grd = (this.scaleEl[this.scaleIndex].pointerCap.backgroundColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(this, this._getColor(element, this.scaleEl[this.scaleIndex].pointerCap.backgroundColor)); // this._getColor(this, this._getColor(element, this.scaleEl[this.scaleIndex].pointerCap.backgroundColor));
            this.location = { "centerX": this._isHalfCircle() ? this._getHalfCircleXPosition() : this.centerX, "centerY": this._isHalfCircle() ? this._getHalfCircleYPosition() : this.centerY, "startAngle": 0, "endAngle": 2 * Math.PI };
            this.style = { "isStroke": true, "isFill": true, "strokeStyle": (this.scaleEl[this.scaleIndex].pointerCap.borderColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(this, this._getColor(element, this.scaleEl[this.scaleIndex].pointerCap.borderColor)), "radius": this.scaleEl[this.scaleIndex].pointerCap.radius, "lineWidth": this.scaleEl[this.scaleIndex].pointerCap.borderWidth, "fillStyle": grd };
            if (this.model.drawPointerCap)
                this._onDrawPointerCap();
            this._drawCircleFrame(this.location, this.style);
        },
		/**
         * To Redraw the sclae
		 * @private
         */	
        _reDrawScale: function () {
            this.contextEl.putImageData(this.outerImage, 0, 0);
            this._drawScales();

        },
		/**
         * To Redraw the Pointers
		 * @private
         */	
        _reDrawPointer: function () {
            this.contextEl.putImageData(this._getPointerImage(), 0, 0);
            this._setPointers();
            this._setIndicators();
        },
		/**
         * To redraw the Custom Label
		 * @private
         */	
        _reDrawCustomLabel: function () {
            this.contextEl.putImageData(this._getCustomLabelImage(), 0, 0);
            this._setCustomLabel();
            this._setPointers();
            this._setIndicators();
        },
		/**
         * To Redraw the Ranges
		 * @private
         */	
        _reDrawRange: function () {
            this.contextEl.putImageData(this._getRangeImage(), 0, 0);
            this._setRanges();
            this._subGauge();
            this._setCustomLabel();
            this._setPointers();
            this._setIndicators();
        },
		/**
         * To Redraw the Label
		 * @private
         */	
        _reDrawLabel: function () {
            this.contextEl.putImageData(this._getLabelImage(), 0, 0);
            this._setLabels();
            this._setRanges();
            this._subGauge();
            this._setCustomLabel();
            this._setPointers();
            this._setIndicators();
        },
		/**
         * To Redraw the TickMark
		 * @private
         */	
        _reDrawTickMark: function () {
            this.contextEl.putImageData(this._getTickImage(), 0, 0);
            this._setTicks();
            this._setLabels();
            this._setRanges();
            this._subGauge();
            this._setCustomLabel();
            this._setPointers();
            this._setIndicators();
        },
		/**
         * To Redraw the SubGauge
		 * @private
         */	
        _reDrawSubGauge: function () {
            this.contextEl.putImageData(this._getSubGaugeImage(), 0, 0);
            this._subGauge();
            this._setCustomLabel();
            this._setPointers();
            this._setIndicators();
        },

        // ************************************* Client side Methods ***********************************
		/**
         * To check whether the device is andriod or not
		 * @private
         */	
        isAndroid: function () {
            return (/android/i.test(navigator.userAgent.toLowerCase()));
        },
        /**
          * Switching the redraw option for the gauge
          * @return jQuery
          * @param {string} argument.value redraw value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.redraw("scale");
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        redraw: function (value) {
            switch (value) {
                case "scale":
                    this._reDrawScale(); break;
                case "pointer":
                    this._reDrawPointer(); break;
                case "range":
                    this._reDrawRange(); break;
                case "label":
                    this._reDrawLabel(); break;
                case "tickMark":
                    this._reDrawTickMark();
                    break;
                case "subGauges":
                    this._reDrawSubGauge();
                    break;
                case "CustomLabel":
                    this._reDrawCustomLabel();
                    break;
            }
        },
		/**
         * To get Indicator Image
		 * @private
         */	
        _getIndicatorImage: function () {
            if (this.pointerImage)
                return this.pointerImage;
            else
                this._getPointerImage();
        },
		/**
         * To get Pointer Image
		 * @private
         */	
        _getPointerImage: function () {
            if (this.customLabelImage)
                return this.customLabelImage;
            else
                return this._getCustomLabelImage();
        },
		/**
         * To get sub gauge Image
		 * @private
         */	
        _getSubGaugeImage: function () {
            if (this.rangeImage)
                return this.rangeImage;
            else
                return this._getRangeImage();
        },
		/**
         * To get Custom Label Image
		 * @private
         */	
        _getCustomLabelImage: function () {
            if (this.subGaugeImage)
                return this.subGaugeImage;
            else
                return this._getSubGaugeImage();
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
        * To get IndicatorValue
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.indicatorIndex indicatorIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
          *   height: 30,width: 10,type: "circle",value: 0,position: { x: 185, y: 300 },
          *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243", borderColor: "#5DF243", text: "", textColor: "#870505" },
          *   { endValue: 200, startValue: 70, backgroundColor: "#145608", borderColor: "#145608", text: "", textColor: "#870505" }]}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getIndicatorValue(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getIndicatorValue: function (scaleIndex, indicatorIndex) {
            if (scaleIndex < this.model.scales.length && indicatorIndex < this.model.scales[scaleIndex].indicators.length)
                return this.scaleEl[scaleIndex].indicators[indicatorIndex].value;
        },
        /**
          * To set IndicatorValue 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.indicatorIndex indicatorIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({ scales: [{showIndicators:true,indicators: [{
          *   height: 30,width: 10,type: "circle",value: 0,position: { x: 185, y: 300 },
          *   stateRanges: [{ endValue: 70, startValue: 0, backgroundColor: "#5DF243", borderColor: "#5DF243", text: "", textColor: "#870505" },
          *   { endValue: 200, startValue: 70, backgroundColor: "#145608", borderColor: "#145608", text: "", textColor: "#870505" }]}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setIndicatorValue(0, 0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setIndicatorValue: function (scaleIndex, indicatorIndex, value) {
            if (scaleIndex < this.model.scales.length && indicatorIndex < this.model.scales[scaleIndex].indicators.length && value != null) {
                this.scaleEl[scaleIndex].indicators[indicatorIndex].value = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawPointer();
                else
                    this._initialize();
            }
        },
        /**
        * To get PointerValue
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.pointerIndex pointerIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getPointerValue(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getPointerValue: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length)
                return this.scaleEl[scaleIndex].pointers[pointerIndex].value;
        },
        /**
          * To set MarkerDistanceFromScale 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.pointerIndex pointerIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setMarkerDistanceFromScale(0, 0, 10);
          * &lt;/script&gt;
          * @memberof ejCircularGauge
          * @instance
        */
        setMarkerDistanceFromScale: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length && value != null) {
                this.scaleEl[scaleIndex].pointers[pointerIndex].distanceFromScale = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawPointer();
                else
                    this._initialize();
            }
        },
        /**
        * To get MarkerDistanceFromScale
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.pointerIndex pointerIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getMarkerDistanceFromScale(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getMarkerDistanceFromScale: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length)
                return this.scaleEl[scaleIndex].pointers[pointerIndex].distanceFromScale;
        },
        /**
          * To set PointerLength 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.pointerIndex pointerIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setPointerLength(0, 0, 90);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setPointerLength: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length && value != null) {
                this.scaleEl[scaleIndex].pointers[pointerIndex].length = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawPointer();
                else
                    this._initialize();
            }
        },
        /**
        * To get PointerLength
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.pointerIndex pointerIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getPointerLength(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getPointerLength: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length)
                return this.scaleEl[scaleIndex].pointers[pointerIndex].length;
        },
        /**
          * To set PointerWidth 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.pointerIndex pointerIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setPointerWidth(0, 0, 10);
          * &lt;/script&gt;
          * @memberof ejCircularGauge
          * @instance
        */
        setPointerWidth: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length && value != null) {
                this.scaleEl[scaleIndex].pointers[pointerIndex].width = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawPointer();
                else this._initialize();
            }
        },
        /**
        * To get PointerWidth
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.pointerIndex pointerIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getPointerWidth(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getPointerWidth: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length)
                return this.scaleEl[scaleIndex].pointers[pointerIndex].width;
        },

        /**
          * To set BackNeedleLength 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge 
          * @param {number} argument.pointerIndex pointerIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ showBackNeedle: true }] }] });
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setBackNeedleLength(0, 0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setBackNeedleLength: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length && value != null) {
                this.scaleEl[scaleIndex].pointers[pointerIndex].backNeedleLength = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawPointer();
                else this._initialize();
            }
        },
        /**
        * To get BackNeedleLength
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.pointerIndex pointerIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({ scales: [{ pointers: [{ showBackNeedle: true }] }] });
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getBackNeedleLength(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getBackNeedleLength: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length)
                return this.scaleEl[scaleIndex].pointers[pointerIndex].backNeedleLength;
        },
        /**
          * To set NeedleStyle 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.pointerIndex pointerIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setNeedleStyle(0, 0, "arrow");
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setNeedleStyle: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length && value != null) {
                this.scaleEl[scaleIndex].pointers[pointerIndex].needleType = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawPointer();
                else this._initialize();
            }
        },
        /**
        * To get NeedleStyle
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.pointerIndex pointerIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getNeedleStyle(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getNeedleStyle: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length)
                return this.scaleEl[scaleIndex].pointers[pointerIndex].needleType;
        },
        /**
          * To set PointerPlacement 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.pointerIndex pointerIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setPointerPlacement(0, 0,"near");
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setPointerPlacement: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length && value != null) {
                this.scaleEl[scaleIndex].pointers[pointerIndex].pointerPlacement = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawPointer();
                else this._initialize();
            }
        },
		/**
        * To get PointerPlacement
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.pointerIndex pointerIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getPointerPlacement(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getPointerPlacement: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length)
                return this.scaleEl[scaleIndex].pointers[pointerIndex].pointerPlacement;
        },
        /**
          * To set PointerNeedleType 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.pointerIndex pointerIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setPointerNeedleType(0, 0, "triangle");
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setPointerNeedleType: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length && value != null) {
                this.scaleEl[scaleIndex].pointers[pointerIndex].pointerNeedleType = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawCustomLabel();
                else this._initialize();
            }
        },
        /**
        * To get PointerNeedleType
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.pointerIndex pointerIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getPointerNeedleType(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getPointerNeedleType: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length)
                return this.scaleEl[scaleIndex].pointers[pointerIndex].pointerNeedleType;
        },
        /**
          * To set MarkerStyle 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.pointerIndex pointerIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setMarkerStyle(0, 0, "rectangle");
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setMarkerStyle: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length && value != null) {
                var Exist = false;
                if (value == "roundedrectangle" || !ej.isNullOrUndefined(ej.datavisualization.CircularGauge.MarkerType[value.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); })])) {
                    this.scaleEl[scaleIndex].pointers[pointerIndex].markerType = value;
                    if (this.contextEl.putImageData && !this.isAndroid())
                        this._reDrawCustomLabel();
                    else this._initialize();
                }
            }
        },
        /**
        * To get MarkerStyle
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.pointerIndex pointerIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getMarkerStyle(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getMarkerStyle: function (scaleIndex, pointerIndex) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length)
                return this.scaleEl[scaleIndex].pointers[pointerIndex].markerType;
        },
        /**
          * To set CustomLabelValue 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.customLabelIndex customLabelIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{customLabels:[{value:"MyLabel",position:{x:180,y:300},color:"#fc0606",font:{size: "20px", fontFamily: "Arial", fontStyle: "Bold" }}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setCustomLabelValue(0, 0, "CircularGauge");
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setCustomLabelValue: function (scaleIndex, customLabelIndex, value) {
            if (scaleIndex < this.model.scales.length && customLabelIndex < this.model.scales[scaleIndex].customLabels.length && value != null) {
                this.scaleEl[scaleIndex].customLabels[customLabelIndex].value = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawCustomLabel();
                else
                    this._initialize();
            }
        },
        /**
        * To get CustomLabelValue
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.customLabelIndex customLabelIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{customLabels:[{textAngle:30,value:"MyLabel",position:{x:250,y:300},color:"#fc0606",font:{size: "20px", fontFamily: "Arial", fontStyle: "Bold" }}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getCustomLabelValue(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getCustomLabelValue: function (scaleIndex, customLabelIndex) {
            if (scaleIndex < this.model.scales.length && customLabelIndex < this.model.scales[scaleIndex].customLabels.length)
                return this.scaleEl[scaleIndex].customLabels[customLabelIndex].value;
        },

        /**
          * To set SubGaugeLocation 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.GaugeIndex GaugeIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br> 
          * &lt;div id="subGauge1"&gt;
          * &lt;/div&gt; <br>
          * &lt;script&gt;
          * $("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]});
          * $("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 400,width: 200,position: { x: 200, y: 150 }}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setSubGaugeLocation(0, 0, {x:50,y:100});
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setSubGaugeLocation: function (scaleIndex, GaugeIndex, value) {
            if (scaleIndex < this.model.scales.length && GaugeIndex < this.model.scales[scaleIndex].subGauges.length && value != null) {
                this.scaleEl[scaleIndex].subGauges[GaugeIndex].position.x = value.x;
                this.scaleEl[scaleIndex].subGauges[GaugeIndex].position.y = value.y;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawSubGauge();
                else
                    this._initialize();
            }
        },
        /**
        * To get SubGaugeLocation
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.GaugeIndex GaugeIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;div id="subGauge1"&gt;
          * &lt;/div&gt; <br> 
          * &lt;script&gt;
          * $("#subGauge1").ejCircularGauge({backgroundColor: "#f5b43f",scales: [{radius: 150}]});
          * $("#CoreCircularGauge").ejCircularGauge({height: 500,width: 500,scales: [{radius: 250,subGauges: [{controlID: "subGauge1",height: 400,width: 200,position: { x: 200, y: 150 }}]}]});
          * circulargaugeObj.getSubGaugeLocation(0, 0);
          * &lt;/script&gt;
          * @memberof ejCircularGauge
          * @instance
        */
        getSubGaugeLocation: function (scaleIndex, GaugeIndex) {
            if (scaleIndex < this.model.scales.length && GaugeIndex < this.model.scales[scaleIndex].subGauges.length)
                return this.scaleEl[scaleIndex].subGauges[GaugeIndex].Location;
        },
        /**
          * To set CustomLabelAngle 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.customLabelIndex customLabelIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{customLabels:[{value:"MyLabel",position:{x:250,y:300},color:"#fc0606",font: { size: "20px", fontFamily: "Arial", fontStyle: "Bold" }}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setCustomLabelAngle(0, 0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setCustomLabelAngle: function (scaleIndex, customLabelIndex, value) {
            if (scaleIndex < this.model.scales.length && customLabelIndex < this.model.scales[scaleIndex].customLabels.length && value != null) {
                this.scaleEl[scaleIndex].customLabels[customLabelIndex].textAngle = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawCustomLabel();
                else
                    this._initialize();
            }
        },
        /**
        * To get CustomLabelAngle
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.customLabelIndex customLabelIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br> 
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{customLabels:[{textAngle:30,value:"MyLabel",position:{x:250,y:300},color:"#fc0606",font:{size: "20px", fontFamily: "Arial", fontStyle: "Bold" }}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getCustomLabelAngle(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getCustomLabelAngle: function (scaleIndex, customLabelIndex) {
            if (scaleIndex < this.model.scales.length && customLabelIndex < this.model.scales[scaleIndex].customLabels.length)
                return this.scaleEl[scaleIndex].customLabels[customLabelIndex].textAngle;
        },
        /**
          * To set RangeStartValue 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.rangeIndex rangeIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setRangeStartValue(0, 0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setRangeStartValue: function (scaleIndex, rangeIndex, value) {
            if (scaleIndex < this.model.scales.length && rangeIndex < this.model.scales[scaleIndex].ranges.length && value != null) {
                this.scaleEl[scaleIndex].ranges[rangeIndex].startValue = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawRange();
                else
                    this._initialize();
            }
        },
        /**
        * To get RangeStartValue
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.rangeIndex rangeIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getRangeStartValue(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getRangeStartValue: function (scaleIndex, rangeIndex) {
            if (scaleIndex < this.model.scales.length && rangeIndex < this.model.scales[scaleIndex].ranges.length)
                return this.scaleEl[scaleIndex].ranges[rangeIndex].startValue;
        },
        /**
          * To set RangeEndValue 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.rangeIndex rangeIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setRangeEndValue(0, 0, 70);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setRangeEndValue: function (scaleIndex, rangeIndex, value) {
            if (scaleIndex < this.model.scales.length && rangeIndex < this.model.scales[scaleIndex].ranges.length && value != null) {
                this.scaleEl[scaleIndex].ranges[rangeIndex].endValue = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawRange();
                else
                    this._initialize();
            }
        },
        /**
        * To get RangeEndValue
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.rangeIndex rangeIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getRangeEndValue(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getRangeEndValue: function (scaleIndex, rangeIndex) {
            if (scaleIndex < this.model.scales.length && rangeIndex < this.model.scales[scaleIndex].ranges.length)
                return this.scaleEl[scaleIndex].ranges[rangeIndex].endValue;
        },
        /**
          * To set RangeSize 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.rangeIndex rangeIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setRangeSize(0, 0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setRangeSize: function (scaleIndex, rangeIndex, value) {
            if (scaleIndex < this.model.scales.length && rangeIndex < this.model.scales[scaleIndex].ranges.length && value != null) {
                this.scaleEl[scaleIndex].ranges[rangeIndex].size = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawRange();
                else
                    this._initialize();
            }
        },
        /**
        * To get RangeSize
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.rangeIndex rangeIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getRangeSize(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getRangeSize: function (scaleIndex, rangeIndex) {
            if (scaleIndex < this.model.scales.length && rangeIndex < this.model.scales[scaleIndex].ranges.length)
                return this.scaleEl[scaleIndex].ranges[rangeIndex].size;
        },
        /**
          * To set RangeDistanceFromScale 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.rangeIndex rangeIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setRangeDistanceFromScale(0, 0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setRangeDistanceFromScale: function (scaleIndex, rangeIndex, value) {
            if (scaleIndex < this.model.scales.length && rangeIndex < this.model.scales[scaleIndex].ranges.length && value != null) {
                this.scaleEl[scaleIndex].ranges[rangeIndex].distanceFromScale = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawRange();
                else
                    this._initialize();
            }
        },
        /**
        * To get RangeDistanceFromScale
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.rangeIndex rangeIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getRangeDistanceFromScale(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getRangeDistanceFromScale: function (scaleIndex, rangeIndex) {
            if (scaleIndex < this.model.scales.length && rangeIndex < this.model.scales[scaleIndex].ranges.length)
                return this.scaleEl[scaleIndex].ranges[rangeIndex].distanceFromScale;
        },
        /**
          * To set RangePosition 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.rangeIndex rangeIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setRangePosition(0, 0, "far");
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setRangePosition: function (scaleIndex, rangeIndex, value) {
            if (scaleIndex < this.model.scales.length && rangeIndex < this.model.scales[scaleIndex].ranges.length && value != null) {
                this.scaleEl[scaleIndex].ranges[rangeIndex].placement = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawRange();
                else
                    this._initialize();
            }
        },
        /**
        * To get RangePosition
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.rangeIndex rangeIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getRangePosition(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getRangePosition: function (scaleIndex, rangeIndex) {
            if (scaleIndex < this.model.scales.length && rangeIndex < this.model.scales[scaleIndex].ranges.length)
                return this.scaleEl[scaleIndex].ranges[rangeIndex].placement;
        },
        /**
          * To set RangeBorderWidth 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.rangeIndex rangeIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setRangeBorderWidth(0, 0, 5);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setRangeBorderWidth: function (scaleIndex, rangeIndex, value) {
            if (scaleIndex < this.model.scales.length && rangeIndex < this.model.scales[scaleIndex].ranges.length && value != null) {
                this.scaleEl[scaleIndex].ranges[rangeIndex].border.width = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawRange();
                else
                    this._initialize();
            }
        },
        /**
        * To get RangeBorderWidth
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.rangeIndex rangeIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({scales: [{showRanges: true,ranges: [{distanceFromScale: -30,startValue: 0,endValue: 70}]}]});
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getRangeBorderWidth(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getRangeBorderWidth: function (scaleIndex, rangeIndex) {
            if (scaleIndex < this.model.scales.length && rangeIndex < this.model.scales[scaleIndex].ranges.length)
                return this.scaleEl[scaleIndex].ranges[rangeIndex].border.width;
        },
        /**
          * To set PointerValue 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.pointerIndex pointerIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setPointerValue(0, 0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setPointerValue: function (scaleIndex, pointerIndex, value) {
            if (scaleIndex < this.model.scales.length && pointerIndex < this.model.scales[scaleIndex].pointers.length && value != null) {
                this.scaleEl[scaleIndex].pointers[pointerIndex].value = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawPointer();
                else
                    this._initialize();
            }
        },
        /**
          * To set LabelAngle 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.labelIndex labelIndex value for the gauge
          * @param {number} argument.angle angle value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setLabelAngle(0, 0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setLabelAngle: function (scaleIndex, labelIndex, angle) {
            if (scaleIndex < this.model.scales.length && labelIndex < this.model.scales[scaleIndex].labels.length && angle != null) {
                this.scaleEl[scaleIndex].labels[labelIndex].angle = angle;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawLabel();
                else this._initialize();
            }
        },
        /**
        * To get LabelAngle
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.labelIndex labelIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getLabelAngle(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getLabelAngle: function (scaleIndex, labelIndex) {
            if (scaleIndex < this.model.scales.length && labelIndex < this.model.scales[scaleIndex].labels.length)
                return this.scaleEl[scaleIndex].labels[labelIndex].angle;
        },
        /**
          * To set LabelDistanceFromScale 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.labelIndex labelIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setLabelDistanceFromScale(0, 0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setLabelDistanceFromScale: function (scaleIndex, labelIndex, value) {
            if (scaleIndex < this.model.scales.length && labelIndex < this.model.scales[scaleIndex].labels.length && value != null) {
                this.scaleEl[scaleIndex].labels[labelIndex].distanceFromScale = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawLabel();
                else this._initialize();
            }
        },
        /**
        * To get LabelDistanceFromScale
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.labelIndex labelIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getLabelDistanceFromScale(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getLabelDistanceFromScale: function (scaleIndex, labelIndex) {
            if (scaleIndex < this.model.scales.length && labelIndex < this.model.scales[scaleIndex].labels.length)
                return this.scaleEl[scaleIndex].labels[labelIndex].distanceFromScale;
        },
        /**
          * To set LabelStyle 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.labelIndex labelIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setLabelStyle(0, 0, "major");
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setLabelStyle: function (scaleIndex, labelIndex, value) {
            if (scaleIndex < this.model.scales.length && labelIndex < this.model.scales[scaleIndex].labels.length && value != null) {
                this.scaleEl[scaleIndex].labels[labelIndex].type = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawLabel();
                else this._initialize();
            }
        },
        /**
        * To get LabelStyle
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.labelIndex labelIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getLabelStyle(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getLabelStyle: function (scaleIndex, labelIndex) {
            if (scaleIndex < this.model.scales.length && labelIndex < this.model.scales[scaleIndex].labels.length)
                return this.scaleEl[scaleIndex].labels[labelIndex].type;
        },
        /**
          * To set LabelPlacement 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.labelIndex labelIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setLabelPlacement(0, 0, "far");
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setLabelPlacement: function (scaleIndex, labelIndex, value) {
            if (scaleIndex < this.model.scales.length && labelIndex < this.model.scales[scaleIndex].labels.length && value != null) {
                this.scaleEl[scaleIndex].labels[labelIndex].placement = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawLabel();
                else this._initialize();
            }
        },
        /**
        * To get LabelPlacement
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.labelIndex labelIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getLabelPlacement(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getLabelPlacement: function (scaleIndex, labelIndex) {
            if (scaleIndex < this.model.scales.length && labelIndex < this.model.scales[scaleIndex].labels.length)
                return this.scaleEl[scaleIndex].labels[labelIndex].placement;
        },
        /**
          * To set TickAngle 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.tickIndex tickIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setTickAngle(0, 0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setTickAngle: function (scaleIndex, tickIndex, angle) {
            if (scaleIndex < this.model.scales.length && tickIndex < this.model.scales[scaleIndex].ticks.length && angle != null) {
                this.scaleEl[scaleIndex].ticks[tickIndex].angle = angle;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawTickMark();
                else
                    this._initialize();
            }
        },
        /**
        * To get TickAngle
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.tickIndex tickIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getTickAngle(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getTickAngle: function (scaleIndex, tickIndex) {
            if (scaleIndex < this.model.scales.length && tickIndex < this.model.scales[scaleIndex].ticks.length) {
                return this.scaleEl[scaleIndex].ticks[tickIndex].angle;
            }
        },
        /**
          * To set TickStyle 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.tickIndex tickIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setTickStyle(0, 0, "minor");
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setTickStyle: function (scaleIndex, tickIndex, value) {
            if (scaleIndex < this.model.scales.length && tickIndex < this.model.scales[scaleIndex].ticks.length && value != null) {
                this.scaleEl[scaleIndex].ticks[tickIndex].type = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawTickMark();
                else this._initialize();
            }
        },
        /**
        * To get TickStyle
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.tickIndex tickIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getTickStyle(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getTickStyle: function (scaleIndex, tickIndex) {
            if (scaleIndex < this.model.scales.length && tickIndex < this.model.scales[scaleIndex].ticks.length)
                return this.scaleEl[scaleIndex].ticks[tickIndex].type;
        },
        /**
          * To set TickPlacement 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.tickIndex tickIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt; 
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setTickPlacement(0, 0, "near");
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setTickPlacement: function (scaleIndex, tickIndex, value) {
            if (scaleIndex < this.model.scales.length && tickIndex < this.model.scales[scaleIndex].ticks.length && value != null) {
                this.scaleEl[scaleIndex].ticks[tickIndex].tickPlacement = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawTickMark();
                else this._initialize();
            }
        },
        /**
        * To get TickPlacement
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.tickIndex tickIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getTickPlacement(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getTickPlacement: function (scaleIndex, tickIndex) {
            if (scaleIndex < this.model.scales.length && tickIndex < this.model.scales[scaleIndex].ticks.length)
                return this.scaleEl[scaleIndex].ticks[tickIndex].tickPlacement;
        },
        /**
          * To set TickWidth 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.tickIndex tickIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setTickWidth(0, 0, 5);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setTickWidth: function (scaleIndex, tickIndex, value) {
            if (scaleIndex < this.model.scales.length && tickIndex < this.model.scales[scaleIndex].ticks.length && value != null) {
                this.scaleEl[scaleIndex].ticks[tickIndex].width = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawTickMark();
                else this._initialize();
            }
        },
        /**
        * To get TickWidth
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.tickIndex tickIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getTickWidth(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getTickWidth: function (scaleIndex, tickIndex) {
            if (scaleIndex < this.model.scales.length && tickIndex < this.model.scales[scaleIndex].ticks.length)
                return this.scaleEl[scaleIndex].ticks[tickIndex].width;
        },
        /**
          * To set TickHeight 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.tickIndex tickIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setTickHeight(0, 0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setTickHeight: function (scaleIndex, tickIndex, value) {
            if (scaleIndex < this.model.scales.length && tickIndex < this.model.scales[scaleIndex].ticks.length && value != null) {
                this.scaleEl[scaleIndex].ticks[tickIndex].height = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawTickMark();
                else this._initialize();
            }
        },
        /**
        * To get TickHeight
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.labelIndex labelIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getTickHeight(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getTickHeight: function (scaleIndex, tickIndex) {
            if (scaleIndex < this.model.scales.length && tickIndex < this.model.scales[scaleIndex].ticks.length)
                return this.scaleEl[scaleIndex].ticks[tickIndex].height;
        },
        /**
          * To set TickDistanceFromScale 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.tickIndex tickIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setTickDistanceFromScale(0, 0, 15);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setTickDistanceFromScale: function (scaleIndex, tickIndex, value) {
            if (scaleIndex < this.model.scales.length && tickIndex < this.model.scales[scaleIndex].ticks.length && value != null) {
                this.scaleEl[scaleIndex].ticks[tickIndex].distanceFromScale = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawTickMark();
                else this._initialize();
            }
        },
        /**
        * To get TickDistanceFromScale
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge 
          * @param {number} argument.tickIndex tickIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getTickDistanceFromScale(0, 0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getTickDistanceFromScale: function (scaleIndex, tickIndex) {
            if (scaleIndex < this.model.scales.length && tickIndex < this.model.scales[scaleIndex].ticks.length)
                return this.scaleEl[scaleIndex].ticks[tickIndex].distanceFromScale;
        },
        /**
          * To set StartAngle 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setStartAngle(0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setStartAngle: function (scaleIndex, angle) {
            if (scaleIndex < this.model.scales.length && angle != null) {
                this.scaleEl[scaleIndex].startAngle = angle;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawScale();
                else this._initialize();
            }
        },
        /**
        * To get StartAngle
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getStartAngle(0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getStartAngle: function (scaleIndex) {
            if (scaleIndex < this.model.scales.length) {
                return this.scaleEl[scaleIndex].startAngle;
            }
        },
        /**
          * To set SweepAngle 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setSweepAngle(0, 220);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setSweepAngle: function (scaleIndex, angle) {
            if (scaleIndex < this.model.scales.length && angle != null) {
                this.scaleEl[scaleIndex].sweepAngle = angle;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawScale();
                else this._initialize();
            }
        },
        /**
        * To get SweepAngle
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getSweepAngle(0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getSweepAngle: function (scaleIndex) {
            if (scaleIndex < this.model.scales.length) {
                return this.scaleEl[scaleIndex].sweepAngle;
            }
        },
        /**
          * To set MinimumValue 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setMinimumValue(0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setMinimumValue: function (scaleIndex, value) {
            if (scaleIndex < this.model.scales.length && value != null) {
                this.scaleEl[scaleIndex].minimum = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawScale();
                else this._initialize();
            }
        },
        /**
        * To get MinimumValue
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getMinimumValue(0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getMinimumValue: function (scaleIndex) {
            if (scaleIndex < this.model.scales.length)
                return this.scaleEl[scaleIndex].minimum;
        },
        /**
          * To set MaximumValue 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setMaximumValue(0, 130);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setMaximumValue: function (scaleIndex, value) {
            if (scaleIndex < this.model.scales.length && value != null) {
                this.scaleEl[scaleIndex].maximum = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawScale();
                else this._initialize();
            }
        },
        /**
        * To get MaximumValue
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getMaximumValue(0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getMaximumValue: function (scaleIndex) {
            if (scaleIndex < this.model.scales.length)
                return this.scaleEl[scaleIndex].maximum;
        },
        /**
          * To set ScaleBarSize 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setScaleBarSize(0, 160);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setScaleBarSize: function (scaleIndex, value) {
            if (scaleIndex < this.model.scales.length && value != null) {
                this.scaleEl[scaleIndex].size = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawScale();
                else this._initialize();
            }
        },
        /**
        * To get ScaleBarSize
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getScaleBarSize(0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getScaleBarSize: function (scaleIndex) {
            if (scaleIndex < this.model.scales.length)
                return this.scaleEl[scaleIndex].size;
        },
        /**
          * To set ScaleRadius 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setScaleRadius(0, 140);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setScaleRadius: function (scaleIndex, value) {
            if (scaleIndex < this.model.scales.length && value != null) {
                this.scaleEl[scaleIndex].radius = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawScale();
                else this._initialize();
            }
        },
        /**
        * To get ScaleRadius
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getScaleRadius(0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getScaleRadius: function (scaleIndex) {
            if (scaleIndex < this.model.scales.length)
                return this.scaleEl[scaleIndex].radius;
        },
        /**
          * To set MajorIntervalValue 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setMajorIntervalValue(0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setMajorIntervalValue: function (scaleIndex, value) {
            if (scaleIndex < this.model.scales.length && value != null) {
                this.scaleEl[scaleIndex].majorIntervalValue = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawScale();
                else this._initialize();
            }
        },
        /**
        * To get MajorIntervalValue
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getMajorIntervalValue(0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getMajorIntervalValue: function (scaleIndex) {
            if (scaleIndex < this.model.scales.length)
                return this.scaleEl[scaleIndex].majorIntervalValue;
        },
        /**
          * To set MinorIntervalValue 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setMinorIntervalValue(0, 2);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setMinorIntervalValue: function (scaleIndex, value) {
            if (scaleIndex < this.model.scales.length && value != null) {
                this.scaleEl[scaleIndex].minorIntervalValue = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawScale();
                else this._initialize();
            }
        },
        /**
        * To get MinorIntervalValue
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getMinorIntervalValue(0);
          * &lt;/script&gt;
          * @memberof ejCircularGauge
          * @instance
        */
        getMinorIntervalValue: function (scaleIndex) {
            if (scaleIndex < this.model.scales.length)
                return this.scaleEl[scaleIndex].minorIntervalValue;
        },
        /**
          * To set PointerCapRadius 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setPointerCapRadius(0, 10);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setPointerCapRadius: function (scaleIndex, value) {
            if (scaleIndex < this.model.scales.length && value != null) {
                this.scaleEl[scaleIndex].pointerCap.radius = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawScale();
                else this._initialize();
            }
        },
        /**
        * To get PointerCapRadius
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getPointerCapRadius(0);
          * &lt;/script&gt;
          * @memberof ejCircularGauge
          * @instance
        */
        getPointerCapRadius: function (scaleIndex) {
            if (scaleIndex < this.model.scales.length)
                return this.scaleEl[scaleIndex].pointerCap.radius;
        },
        /**
          * To set ScaleBorderWidth 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({ scales: [{showScaleBar: true, size: 6, border:{width: 1.5} }] });
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setScaleBorderWidth(0, 3);
          * &lt;/script&gt;
          * @memberof ejCircularGauge
          * @instance
        */
        setScaleBorderWidth: function (scaleIndex, value) {
            if (scaleIndex < this.model.scales.length && value != null) {
                this.scaleEl[scaleIndex].border.width = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawScale();
                else this._initialize();
            }
        },
        /**
        * To get ScaleBorderWidth
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge({ scales: [{showScaleBar: true, size: 6, border:{Width: 1.5} }] });
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getScaleBorderWidth(0);
          * &lt;/script&gt;
          * @memberof ejCircularGauge
          * @instance
        */
        getScaleBorderWidth: function (scaleIndex) {
            if (scaleIndex < this.model.scales.length)
                return this.scaleEl[scaleIndex].border.width;
        },
        /**
          * To set PointerCapBorderWidth 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setPointerCapBorderWidth(0, 5);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setPointerCapBorderWidth: function (scaleIndex, value) {
            if (scaleIndex < this.model.scales.length && value != null) {
                this.scaleEl[scaleIndex].capBorderWidth = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawScale();
                else this._initialize();
            }
        },
        /**
        * To get PointerCapBorderWidth
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getPointerCapBorderWidth(0);
          * &lt;/script&gt;
          * @memberof ejCircularGauge
          * @instance
        */
        getPointerCapBorderWidth: function (scaleIndex) {
            if (scaleIndex < this.model.scales.length)
                return this.scaleEl[scaleIndex].capBorderWidth;
        },
        /**
          * To set ScaleDirection 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.setScaleDirection(0, "clockwise");
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        setScaleDirection: function (scaleIndex, value) {
            if (scaleIndex < this.model.scales.length && value != null) {
                this.scaleEl[scaleIndex].direction = value;
                if (this.contextEl.putImageData && !this.isAndroid())
                    this._reDrawScale();
                else this._initialize();
            }
        },
        /**
        * To get ScaleDirection
          * @return number
          * @param {number} argument.scaleIndex scaleIndex value for the Gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.getScaleDirection(0);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        getScaleDirection: function (scaleIndex) {
            if (scaleIndex < this.model.scales.length)
                return this.scaleEl[scaleIndex].direction;
        },
        /**
          * To set includeFirstValue 
          * @return jQuery
          * @param {number} argument.scaleIndex scaleIndex value for the gauge
          * @param {number} argument.labelIndex labelIndex value for the gauge
          * @param {number} argument.value value for the gauge
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br>  
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.includeFirstValue(0, 0, false);
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        includeFirstValue: function (scaleIndex, labelIndex, value) {
            if (scaleIndex < this.model.scales.length && labelIndex < this.model.scales[scaleIndex].labels.length && value != null) {
                this.scaleEl[scaleIndex].labels[labelIndex].includeFirstValue = value;
                if (this.contextEl.putImageData)
                    this._reDrawLabel();
                else this.initialize();
            }
        },
		/**
         * To Redraw scale
		 * @private
         */
        _reDrawScale: function () {
            if (this.model.frame.backgroundImageUrl)
                this.initialize();
            else {
                this.contextEl.putImageData(this.outerImage, 0, 0);
                this._drawScales();

            }
        },
		/**
         * To Redraw Pointer
		 * @private
         */
        _reDrawPointer: function () {
            if (this.model.frame.backgroundImageUrl)
                this.initialize();
            else {
                this.contextEl.putImageData(this._getPointerImage(), 0, 0);
                this._setPointers();
                this._setIndicators();
            }
        },
		/**
         * To Redraw Custom Label
		 * @private
         */
        _reDrawCustomLabel: function () {
            if (this.model.frame.backgroundImageUrl)
                this.initialize();
            else {
                this.contextEl.putImageData(this._getCustomLabelImage(), 0, 0);
                this._setCustomLabel();
                this._setPointers();
                this._setIndicators();

            }
        },
		/**
         * To Redraw Range
		 * @private
         */
        _reDrawRange: function () {
            if (this.model.frame.backgroundImageUrl)
                this._initialize();
            else {
                this.contextEl.putImageData(this._getRangeImage(), 0, 0);
                this._setRanges();
                this._subGauge();
                this._setCustomLabel();
                this._setPointers();
                this._setIndicators();

            }
        },
		/**
         * To Redraw Label
		 * @private
         */
        _reDrawLabel: function () {
            if (this.model.frame.backgroundImageUrl)
                this._initialize();
            else {
                this.contextEl.putImageData(this._getLabelImage(), 0, 0);
                this._setLabels();
                this._setRanges();
                this._subGauge();
                this._setCustomLabel();
                this._setPointers();
                this._setIndicators();

            }
        },
		/**
         * To Redraw TickMark
		 * @private
         */
        _reDrawTickMark: function () {
            if (this.model.frame.backgroundImageUrl)
                this._initialize();
            else {
                this.contextEl.putImageData(this._getTickImage(), 0, 0);
                this._setTicks();
                this._setLabels();
                this._setRanges();
                this._subGauge();
                this._setCustomLabel();
                this._setPointers();
                this._setIndicators();

            }
        },
		/**
         * To Redraw SubGauge
		 * @private
         */
        _reDrawSubGauge: function () {
            if (this.model.frame.backgroundImageUrl)
                this._initialize();
            else {
                this.contextEl.putImageData(this._getSubGaugeImage(), 0, 0);
                this._subGauge();
                this._setCustomLabel();
                this._setPointers();
                this._setIndicators();

            }
        },
		/**
         * To refresh SubGauge
		 * @private
         */
        refreshSubGauge: function () {
            if (this.contextEl.putImageData)
                this._reDrawSubGauge();
            else
                this._initialize();
        },
		/**
         * To refresh the Entire gauge
		 * @private
         */
        refresh: function () {
            this._initialize();
        },
        /**
        * To export Image
          * @return jQuery
          * @param {string} argument.fileName fileName for the Image
          * @param {string} argument.fileType fileType for the Image
          * @example 
          * &lt;div id="CoreCircularGauge"&gt;&lt;/div&gt; <br> 
          * &lt;script&gt;
          * $("#CoreCircularGauge").ejCircularGauge();
          * var circulargaugeObj = $("#CoreCircularGauge").data("ejCircularGauge");
          * circulargaugeObj.exportImage("myImage","jpeg");
          * &lt;/script&gt;
          *@memberof ejCircularGauge
          * @instance
        */
        exportImage: function (fileName, fileType) {
            /// <summary>This function save the rendered canvas image</summary>
            /// <param name="fileName" type="String">fileName to which the image has been saved</param>
            /// <param name="fileType" type="String">fileType to which the image has been saved</param>
            var lnk = document.createElement('a'), e;
            lnk.download = fileName + "." + fileType;
            lnk.href = this.canvasEl[0].toDataURL("image/" + fileType).replace("image/" + fileType, "image/octet-stream");
            if (document.createEvent) {
                e = document.createEvent("MouseEvents");
                e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                lnk.dispatchEvent(e);
            }
            else if (lnk.fireEvent) {
                lnk.fireEvent("onclick");
            }
        },
		/**
         * To Resize the gauge while resizing the window
		 * @private
         */
        resizeCanvas: function () {
            if (proxy.element.width() != initialDivWidth || proxy.element.height() != initialDivHeight) {
                var canvasWidth = proxy.element.width() / initialDivWidth;
                var canvasHeight = proxy.element.height() / initialDivHeight;
                var ratio;
                if (canvasWidth != 1 && canvasHeight != 1)
                    ratio = canvasWidth;
                else
                    ratio = canvasHeight != 1 ? canvasHeight : canvasWidth;
                proxy.model.width *= ratio;
                for (var i = 0; proxy.model.scales[i] != null; i++) {
                    proxy.model.scales[i].radius *= ratio;
                    for (var j = 0; proxy.model.scales[i].pointers[j] != null; j++) {
                        proxy.model.scales[i].pointers[j].length *= ratio;
                        proxy.model.scales[i].pointers[j].pointerCap.radius *= ratio;
                        proxy.model.scales[i].pointers[j].width *= ratio;
                        proxy.model.scales[i].pointers[j].backNeedleLength *= ratio;
                    }
                }
                proxy.refresh();
                initialDivWidth = proxy.element.width();
                initialDivHeight = proxy.element.height();
            }
        },

        // ********************************* ClientSide Events ************************************
		/**
         * Section For handle the DrawTicks event
		 * @private
         */
        _onDrawTicks: function (tickAngle, pointerValue) {
            var tick = { index: this.tickIndex, element: this.tickEl[this.tickIndex], angle: parseInt(tickAngle) }
            var data = { object: this, scaleElement: this.model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, context: this.contextEl, pointerValue: pointerValue, style: this.style, position: this.location,tick:tick };
            this._trigger("drawTicks", data);
        },
		/**
         * Section For handle the DrawLabels event
		 * @private
         */
        _onDrawLabels: function (labelAngle, pointerValue) {
            var label = { index: this.labelIndex, element: this.labelEl[this.labelIndex], angle: parseInt(labelAngle) }
            var data = { object: this, scaleElement: this.model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, context: this.contextEl, pointerValue: pointerValue, style: this.style, position: this.location,label:label };
            this._trigger("drawLabels", data);
        },
		/**
         * Section For handle the DrawPointers event
		 * @private
         */
        _onDrawPointers: function (pointerAngle, pointerValue) {
            var pointer = { index: this.pointerIndex, element: this.pointerEl[this.pointerIndex], angle: parseInt(pointerAngle), pointerValue: pointerValue, }
            var data = { object: this, scaleElement: this.model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, context: this.contextEl, style: this.style, position: this.location, pointer: pointer };
            this._trigger("drawPointers", data);
        },
		/**
         * Section For handle the DrawRange event
		 * @private
         */
        _onDrawRange: function () {
            var data = { object: this, scaleElement: this.model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, rangeIndex: this.rangeIndex, rangeElement: this.rangeEl[this.rangeEl], context: this.contextEl, style: this.style, position: this.location };
            this._trigger("drawRange", data);
        },
		/**
         * Section For handle the DrawCustomLabel event
		 * @private
         */
        _onDrawCustomLabel: function () {
            var data = { object: this, scaleElement: this.model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, customLabelIndex: this.customLabelIndex, customLabelElement: this.customLabelEl[this.customLabelIndex], context: this.contextEl, style: this.style, position: this.location };
            this._trigger("drawCustomLabel", data);
        },
		/**
         * Section For handle the DrawIndicators event
		 * @private
         */
        _onDrawIndicators: function () {
            var data = { object: this, scaleElement: this.model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, indicatorIndex: this.indicatorIndex, indicatorEl: this.indicatorEl[this.indicatorIndex], context: this.contextEl, style: this.style, position: this.location };
            this._trigger("drawIndicators", data);
        },
		/**
         * Section For handle the DrawPointerCap event
		 * @private
         */
        _onDrawPointerCap: function () {
            var data = { object: this, scaleElement: this.model.scales, position: this.location, style: this.style, context: this.contextEl };
            this._trigger("drawPointerCap", data);
        },
		/**
         * Section For handle the RenderComplete event
		 * @private
         */
        _onRenderComplete: function () {
            var data = { object: this, scaleElement: this.model.scales, context: this.contextEl };
            this._trigger("renderComplete", data);
        },
		/**
         * Section For handle the MouseClick event
		 * @private
         */
        _onMouseClick: function (pointerAngle, pointerValue) {
            var pointer = { index: this.pointerIndex, element: this.pointerEl[this.pointerIndex], value: pointerValue, angle: parseInt(pointerAngle) }
            var data = { object: this, scaleElement: this.model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, context: this.contextEl, style: this.style, position: this.position };
            this._trigger("mouseClick", data);
        },
		/**
         * Section For handle the MouseClickMove event
		 * @private
         */
        _onMouseClickMove: function (pointerAngle, pointerValue) {
            var pointer = { index: this.pointerIndex, element: this.pointerEl[this.pointerIndex], value: pointerValue, angle: parseInt(pointerAngle) }
            var data = { object: this, scaleElement: this.model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, context: this.contextEl, style: this.style, position: this.location };
            this._trigger("mouseClickMove", data);
        },
		/**
         * Section For handle the MouseClickUp event
		 * @private
         */
        _onMouseClickUp: function (pointerAngle, pointerValue) {
            var pointer = { index: this.pointerIndex, element: this.pointerEl[this.pointerIndex], value: pointerValue, angle: parseInt(pointerAngle) }
            var data = { object: this, scaleElement: this.model.scales[this.scaleIndex], scaleIndex: this.scaleIndex, context: this.contextEl, style: this.style, position: this.location };
            this._trigger("mouseClickUp", data);
        },

        //************************* Common Functions **********************************
		/**
         * To set the theme
		 * @private
         */
        _setTheme: function () {
            selectedTheme = ej.datavisualization.CircularGauge.Themes[this.model.theme];
            this._setThemeColors(selectedTheme);
        },
		/**
         * To set the theme color
		 * @private
         */
        _setThemeColors: function (selectedTheme) {
            var result = [], jsonObj = ej.datavisualization.CircularGauge.Themes;
            for (var name in jsonObj) {
                result.push(name);
            }
            for (var th = 0; th < result.length; th++) {
                this.model.backgroundColor = ((!this.model.backgroundColor || this.model.backgroundColor == jsonObj[result[th]].backgroundColor) ? selectedTheme.backgroundColor : this.model.backgroundColor);
                for (var i = 0; i < this.model.scales.length; i++) {
                    this.model.scales[i].backgroundColor = (!this.model.scales[i].backgroundColor || this.model.scales[i].backgroundColor == jsonObj[result[th]].scales.backgroundColor) ? selectedTheme.scales.backgroundColor : this.model.scales[i].backgroundColor;
                    this.model.scales[i].border.color = (!this.model.scales[i].border.color || this.model.scales[i].border.color == jsonObj[result[th]].scales.border.color) ? selectedTheme.scales.border.color : this.model.scales[i].border.color;
                    for (var j = 0; j < this.model.scales[i].pointers.length; j++) {
                        this.model.scales[i].pointers[j].backgroundColor = (!this.model.scales[i].pointers[j].backgroundColor || this.model.scales[i].pointers[j].backgroundColor == jsonObj[result[th]].scales.pointers.backgroundColor) ? selectedTheme.scales.pointers.backgroundColor : this.model.scales[i].pointers[j].backgroundColor;
                        this.model.scales[i].pointers[j].border.color = (!this.model.scales[i].pointers[j].border.color || this.model.scales[i].pointers[j].border.color == jsonObj[result[th]].scales.pointers.border.color) ? selectedTheme.scales.pointers.border.color : this.model.scales[i].pointers[j].border.color;
                        this.model.scales[i].pointerCap.backgroundColor = (!this.model.scales[i].pointerCap.backgroundColor || this.model.scales[i].pointerCap.backgroundColor == jsonObj[result[th]].scales.pointerCap.backgroundColor) ? selectedTheme.scales.pointerCap.backgroundColor : this.model.scales[i].pointerCap.backgroundColor;
                        this.model.scales[i].pointerCap.borderColor = (!this.model.scales[i].pointerCap.borderColor || this.model.scales[i].pointerCap.borderColor == jsonObj[result[th]].scales.pointerCap.borderColor) ? selectedTheme.scales.pointerCap.borderColor : this.model.scales[i].pointerCap.borderColor;
                    }
                    for (var k = 0; k < this.model.scales[i].ticks.length; k++) {
                        this.model.scales[i].ticks[k].color = (!this.model.scales[i].ticks[k].color || this.model.scales[i].ticks[k].color == jsonObj[result[th]].scales.ticks.color) ? selectedTheme.scales.ticks.color : this.model.scales[i].ticks[k].color;
                    }
                    for (var l = 0; l < this.model.scales[i].labels.length; l++) {
                        this.model.scales[i].labels[l].color = (!this.model.scales[i].labels[l].color || this.model.scales[i].labels[l].color == jsonObj[result[th]].scales.labels.color) ? selectedTheme.scales.labels.color : this.model.scales[i].labels[l].color;
                    }
                }
            }
        },
		/**
         * To get the FontString
		 * @private
         */
        _getFontString: function (element, font) {
            return (font ? (font.fontStyle ? font.fontStyle : "") + " " + ((font.size == null) ? "11px" : font.size) + " " + font.fontFamily : "");
        },
		/**
         * To draw Triangle
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
         * To draw Pointer
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
         * To draw Wedge
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
         * To draw Slider
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
         * To draw Star
		 * @private
         */
        _drawStar: function (location, style, element) {
            this._contextOpenPath(style, element);
            if (element.model.Orientation == "Horizontal" && element.markerPlacement == "near") {
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
         * To draw Pentagon
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
         * To draw Diamond
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
         * To draw Circle
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
         * To draw Trapezoid
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
         * To draw Rectangle
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
         * To draw Rounded Rectangle
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
         * To draw Custom Image
		 * @private
         */
        _drawCustomImage: function (element, imageUrl) {
            var image = new Image();
            var self = this;
            $(image).load(function () {
                element.contextEl.drawImage(this, 0, 0, element.model.Width, element.model.Height);
                if (element.model.scales != null)
                    element._drawScales();
                if (element.model.items != null)
                    element._renderItems();
            }).attr('src', imageUrl);
        },
		/**
         * To draw Ellipse
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
		/**
         * To set Pointer Dimension
		 * @private
         */
        _setPointerDimension: function (style, element) {
            if (!ej.isNullOrUndefined(element.model.Orientation)) {
                if (element.model.Orientation == "Horizontal") {
                    var tempWidth = style.width;
                    var tempHeight = style.height;
                    style.height = tempWidth;
                    style.width = tempHeight;
                }
            }
            return style;
        },
		/**
         * To set Context Rotation
		 * @private
         */
        _setContextRotation: function (style, element) {
            element.contextEl.rotate(Math.PI * (style.angle / 180));
        },
		/**
         * To Manupulate the Context open path.
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
         * To Manupulate the Context Close path.
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
         * To block default actions.
		 * @private
         */
        _blockDefaultActions: function (e) {
            e.cancelBubble = true;
            e.returnValue = false;
            if (e.preventDefault) e.preventDefault();
            if (e.stopPropagation) e.stopPropagation();
        },
		/**
         * To check whether the given value is between the first and last value
		 * @private
         */
        _isBetween: function (first, last, number) {
            return (first < last ? number >= first && number <= last : number >= last && number <= first);
        },
		/**
         * To get the color
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
         * To set the GradientColor
		 * @private
         */
        _setGradientColor: function (element, gradients, options) {
            var self = element;
            if (options.Name || typeof (options) === "string") {
                gradients.addColorStop(0, this._getColor(element, options));
                gradients.addColorStop(1, this._getColor(element, options));
            }
            else
                $.each(options, function (index, colorElement) {
                    gradients.addColorStop(colorElement.colorStop != NaN ? colorElement.colorStop : 0, typeof (colorElement.color) === "string" ? colorElement.color : self._getColor(element, colorElement.color));
                });
        }
    });
    /**
	 * Enum for gauge Frame	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.CircularGauge.Frame = {
        /**  To set the CircularGauge Frame as fullcircle.*/
        FullCircle: "fullcircle",
        /**  To set the CircularGauge Frame as halfcircle.*/
        HalfCircle: "halfcircle"
    };
    /**
	 * Enum for gauge Directions	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.CircularGauge.Directions = {
        /**  To set the Directions clockwise. */
        Clockwise: "clockwise",
        /**  To set the Directions counterclockwise. */
        CounterClockwise: "counterclockwise"
    };
    /**
	 * Enum for gauge PointerPlacement	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.CircularGauge.PointerPlacement = {
        /**  To set the PointerPlacement near. */
        Near: "near",
        /**  To set the PointerPlacement far. */
        Far: "far",
        /**  To set the PointerPlacement center. */
        Center: "center"
    };
    /**
	 * Enum for gauge PointerType	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.CircularGauge.PointerType = {
        /**  To set the PointerType needle. */
        Needle: "needle",
        /**  To set the PointerType marker. */
        Marker: "marker"
    };
    /**
	 * Enum for gauge NeedleType	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.CircularGauge.NeedleType = {
        /**  To set the NeedleType triangle. */
        Triangle: "triangle",
        /**  To set the NeedleType rectangle. */
        Rectangle: "rectangle",
        /**  To set the NeedleType trapezoid. */
        Trapezoid: "trapezoid",
        /**  To set the NeedleType arrow. */
        Arrow: "arrow"
    };
    /**
	 * Enum for gauge MarkerType	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.CircularGauge.MarkerType = {
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
	 * Enum for gauge RangePlacement	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.CircularGauge.RangePlacement = {
        /**  To set the RangePlacement near. */
        Near: "near",
        /**  To set the RangePlacement far. */
        Far: "far",
        /**  To set the RangePlacement center. */
        Center: "center"
    };
    /**
	 * Enum for gauge TickType	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.CircularGauge.TickType = {
        /**  To set the TickType major. */
        Major: "major",
        /**  To set the TickType minor. */
        Minor: "minor"
    };
    /**
	 * Enum for gauge TickPlacement	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.CircularGauge.TickPlacement = {
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
    ej.datavisualization.CircularGauge.LabelPlacement = {
        /**  To set the LabelPlacement near. */
        Near: "near",
        /**  To set the LabelPlacement far. */
        Far: "far",
        /**  To set the LabelPlacement center. */
        Center: "center"
    };
    /**
	 * Enum for gauge LabelType	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.CircularGauge.LabelType = {
        /**  To set the LabelType major. */
        Major: "major",
        /**  To set the LabelType minor. */
        Minor: "minor"
    };
    /**
	 * Enum for gauge UnitTextPlacement	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.CircularGauge.UnitTextPlacement = {
        /**  To set the UnitTextPlacement back. */
        Back: "back",
        /**  To set the UnitTextPlacement front. */
        Front: "front"
    };
    /**
	 * Enum for gauge IndicatorType	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.CircularGauge.IndicatorType = {
        /**  To set the IndicatorType rectangle. */
        Rectangle: "rectangle",
        /**  To set the IndicatorType circle. */
        Circle: "circle",
        /**  To set the IndicatorType roundedrectangle. */
        RoundedRectangle: "roundedrectangle",
        /**  To set the IndicatorType Text. */
        Text: "text",
        /**  To set the IndicatorType Text. */
        Image:"image"
    };
	/**
	 * Enum for gauge Themes	 
	 * @enum {string}
	 * @global 
	 */
    ej.datavisualization.CircularGauge.Themes = {
	/**  To set the themes flatlight. */
        flatlight: {
            backgroundColor: "#FFFFFF",
            scales: {
                pointerCap: {
                    borderColor: "#424242",
                    backgroundColor: "#424242"
                },
                backgroundColor: "#777777",
                border: {
                    color: "#777777"
                },
                pointers: {
                    backgroundColor: "#424242",
                    border: {
                        color:"#424242"
                    },
                },
                ticks: {
                    color: "#777777"
                },
                labels: {
                    color: "#282828"
                }
            }
        },
	/**  To set the themes flatdark. */
        flatdark: {
            backgroundColor: "#1F1F1F",
            scales: {
                pointerCap: {
                    borderColor: "#686868",
                    backgroundColor: "#686868"
                },
                backgroundColor: "#7a7a7a",
                border: {
                    color:"#7a7a7a"
                },
                pointers: {
                    backgroundColor: "#686868",
                    border: {
                        color:"#686868"
                    },
                },
                ticks: {
                    color: "#7a7a7a"
                },
                labels: {
                    color: "#d3d3d3"
                }
            }
        }
    };

})(jQuery, Syncfusion);;
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
/**
* @fileOverview Plugin to style the Html Button elements
* @copyright Copyright Syncfusion Inc. 2001 - 2014. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
* @version 12.1 
* @author <a href="mailto:licensing@syncfusion.com">Syncfusion Inc</a>
*/


(function ($, ej, undefined) {
    // Example plugin creation code
    // ejSample is the plugin name 
    // "ej.Sample" is "namespace.className" will hold functions and properties
    /**
    * @namespace ej
    * @classdesc The Digital gauge  can be easily configured to the DOM element, such as div. you can create a digital gauge with a highly customizable look and feel.
    * @class ejDigitalGauge
    * @param {object} options - For seting the Digital gauge    
    * @requires jQuery.js
    * @requires jquery.easing.js
    * @requires ej.common.all.js
    * @requires excanvas.js
    * @example 
    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
    * &lt;script&gt;
    * $('#DigitalCore').ejDigitalGauge();         
    * &lt;/script&gt;
    * @remarks
    * excanvas.js need to add for IE8 
    */



    ej.widget({ "ejDigitalGauge": "ej.datavisualization.DigitalGauge" }, {
        // widget element will be automatically set in this
        element: null,
        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _rootCSS: "e-digitalgauge",
        // default model
        defaults: /** @lends ejDigitalGauge# */{
            /**		
            * Specifies the segmentData for the DigitalGauge.
            */

            segmentData: {
                "0": [0, 1, 2, 3, 4, 5, 14, 15], "1": [1, 2], "2": [0, 14, 1, 6, 8, 4, 3, 15], "3": [0, 1, 2, 3, 6, 8, 14, 15], "4": [1, 2, 5, 6, 8], "5": [0, 2, 3, 5, 6, 8, 14, 15], "6": [0, 2, 3, 4, 5, 6, 8, 14, 15],
                "7": [0, 1, 2, 14], "8": [0, 1, 2, 3, 4, 5, 6, 8, 14, 15], "9": [0, 1, 2, 3, 5, 6, 8, 14, 15], "A": [0, 1, 2, 4, 5, 6, 8, 14], "B": [0, 1, 2, 3, 7, 9, 8, 14, 15], "C": [0, 3, 4, 5, 14, 15],
                "D": [0, 1, 2, 3, 7, 9, 14, 15], "E": [0, 3, 4, 5, 6, 8, 14, 15], "F": [0, 4, 5, 6, 8, 14], "G": [0, 2, 3, 4, 5, 8, 14, 15], "H": [1, 2, 4, 5, 6, 8], "I": [0, 3, 7, 9, 14, 15],
                "J": [1, 2, 3, 4, 15], "K": [4, 5, 6, 10, 11], "L": [3, 4, 5, 15], "M": [1, 2, 4, 5, 10, 13], "N": [1, 2, 4, 5, 11, 13], "O": [0, 1, 2, 3, 4, 5, 14, 15], "P": [0, 1, 4, 5, 6, 8, 14],
                "Q": [0, 1, 2, 3, 4, 5, 11, 14, 15], "R": [0, 1, 4, 5, 6, 8, 11, 14], "S": [0, 2, 3, 5, 6, 8, 14, 15], "T": [0, 7, 9, 14], "U": [1, 2, 3, 4, 5, 15], "V": [4, 5, 10, 12], "W": [1, 2, 4, 5, 11, 12],
                "X": [10, 11, 12, 13], "Y": [1, 5, 6, 7, 8], "Z": [0, 3, 10, 12, 14, 15]
            },
            /**		
            * Specifies the matrixSegmentData for the DigitalGauge.
            */
            matrixSegmentData: {
                "1": [0, 3, 0, 4, 1, 1, 1, 2, 1, 3, 1, 4, 2, 3, 2, 4, 3, 3, 3, 4, 4, 3, 4, 4, 5, 3, 5, 4, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "2": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 1, 5, 1, 6, 2, 5, 2, 6, 3, 4, 3, 5, 4, 3, 4, 2, 5, 2, 5, 1, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "3": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 1, 5, 1, 6, 2, 5, 2, 6, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 5, 4, 6, 5, 5, 5, 6, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5],
                "4": [0, 3, 0, 4, 0, 5, 1, 2, 1, 3, 1, 4, 1, 5, 2, 1, 2, 2, 2, 4, 2, 5, 3, 0, 3, 1, 3, 4, 3, 5, 4, 0, 4, 1, 4, 2, 4, 3, 4, 4, 4, 5, 4, 6, 5, 4, 5, 5, 6, 4, 6, 5],
                "5": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 5, 4, 6, 5, 5, 5, 6, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "6": [0, 3, 0, 4, 0, 5, 0, 6, 1, 2, 1, 3, 2, 1, 2, 2, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 4, 3, 4, 6, 4, 7, 5, 2, 5, 3, 5, 6, 5, 7, 6, 3, 6, 4, 6, 5, 6, 6],
                "7": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 1, 6, 1, 7, 2, 5, 2, 6, 3, 4, 3, 5, 4, 3, 4, 4, 5, 2, 5, 3, 6, 1, 6, 2],
                "8": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "9": [0, 2, 0, 3, 0, 4, 0, 5, 1, 1, 1, 2, 1, 5, 1, 6, 2, 1, 2, 2, 2, 4, 2, 5, 2, 6, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 5, 4, 6, 5, 5, 5, 6, 6, 2, 6, 3, 6, 4, 6, 4, 6, 5],
                "0": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "a": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 6, 1, 7, 2, 6, 2, 7, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                "b": [0, 1, 0, 2, 1, 1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 4, 3, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "c": [1, 3, 1, 4, 1, 5, 1, 6, 2, 2, 2, 3, 3, 1, 3, 2, 4, 1, 4, 2, 5, 2, 5, 3, 6, 3, 6, 4, 6, 5, 6, 6],
                "d": [0, 6, 0, 7, 1, 6, 1, 7, 2, 6, 2, 7, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 3, 7, 4, 1, 4, 2, 4, 5, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                "e": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 5, 1, 5, 2, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                "f": [0, 4, 0, 5, 0, 6, 0, 7, 1, 3, 1, 4, 2, 3, 2, 4, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 3, 7, 4, 3, 4, 4, 5, 3, 5, 4, 6, 3, 6, 4],
                "g": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 3, 7, 4, 6, 4, 7, 5, 6, 5, 7, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "h": [0, 1, 0, 2, 1, 1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 4, 3, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 1, 6, 2, 6, 6, 6, 7],
                "i": [0, 3, 0, 4, 2, 1, 2, 2, 2, 3, 2, 4, 3, 3, 3, 4, 4, 3, 4, 4, 5, 3, 5, 4, 6, 3, 6, 4],
                "j": [1, 5, 1, 6, 2, 5, 2, 6, 3, 5, 3, 6, 4, 1, 4, 2, 4, 5, 4, 6, 5, 1, 5, 2, 5, 5, 5, 6, 6, 2, 6, 3, 6, 4, 6, 5],
                "k": [0, 1, 0, 2, 1, 1, 1, 2, 1, 4, 1, 5, 2, 1, 2, 2, 2, 3, 2, 4, 3, 1, 3, 2, 3, 3, 4, 1, 4, 2, 4, 3, 4, 4, 4, 5, 5, 1, 5, 2, 5, 5, 5, 6, 6, 1, 6, 2, 6, 6, 6, 7],
                "l": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 5, 1, 6, 2, 5, 2, 6, 3, 5, 3, 6, 4, 5, 4, 6, 5, 5, 5, 6, 6, 5, 6, 6],
                "m": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 0, 1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 2, 0, 2, 1, 2, 3, 2, 4, 2, 6, 2, 7, 3, 0, 3, 1, 3, 3, 3, 4, 3, 6, 3, 7, 4, 0, 4, 1, 4, 3, 4, 4, 4, 6, 4, 7, 5, 0, 5, 1, 5, 3, 5, 4, 5, 6, 5, 7, 6, 0, 6, 1, 6, 3, 6, 4, 6, 6, 6, 7],
                "n": [1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 2, 0, 2, 1, 2, 2, 2, 6, 2, 7, 3, 0, 3, 1, 3, 6, 3, 7, 4, 0, 4, 1, 4, 6, 4, 7, 5, 0, 5, 1, 5, 6, 5, 7, 6, 0, 6, 1, 6, 6, 6, 7],
                "o": [1, 2, 1, 3, 1, 4, 1, 5, 2, 1, 2, 2, 2, 5, 2, 6, 3, 1, 3, 2, 3, 5, 3, 6, 4, 1, 4, 2, 4, 5, 4, 6, 5, 1, 5, 2, 5, 5, 5, 6, 6, 2, 6, 3, 6, 4, 6, 5],
                "p": [1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 2, 1, 2, 2, 2, 3, 2, 6, 2, 7, 3, 1, 3, 2, 3, 6, 3, 7, 4, 1, 4, 2, 4, 3, 4, 4, 4, 5, 4, 6, 5, 1, 5, 2, 6, 1, 6, 2],
                "q": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 1, 1, 1, 2, 1, 5, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 5, 3, 6, 3, 7, 4, 2, 4, 3, 4, 4, 4, 5, 4, 6, 4, 7, 5, 6, 5, 7, 6, 6, 6, 7],
                "r": [0, 1, 0, 3, 0, 4, 0, 5, 1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 2, 1, 2, 2, 2, 6, 3, 1, 3, 2, 4, 1, 4, 2, 5, 1, 5, 2, 6, 1, 6, 2],
                "s": [1, 2, 1, 3, 1, 4, 1, 5, 2, 1, 2, 2, 3, 1, 3, 2, 4, 3, 4, 4, 5, 4, 5, 5, 6, 1, 6, 2, 6, 3, 6, 4],
                "t": [0, 3, 0, 4, 1, 3, 1, 4, 2, 1, 2, 2, 2, 3, 2, 4, 2, 5, 2, 6, 3, 3, 3, 4, 4, 3, 4, 4, 5, 3, 5, 4, 6, 4, 6, 5, 6, 6, 6, 7],
                "u": [1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 5, 5, 6, 5, 7, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                "v": [1, 1, 1, 2, 1, 6, 1, 7, 2, 2, 2, 3, 2, 5, 2, 6, 3, 2, 3, 3, 3, 5, 3, 6, 4, 3, 4, 4, 4, 5, 5, 4, 5, 5, 6, 4],
                "w": [0, 0, 0, 1, 0, 6, 0, 7, 1, 0, 1, 1, 1, 6, 1, 7, 2, 0, 2, 1, 2, 3, 2, 4, 2, 6, 2, 7, 3, 0, 3, 1, 3, 3, 3, 4, 3, 6, 3, 7, 4, 0, 4, 1, 4, 3, 4, 4, 4, 6, 4, 7, 5, 0, 5, 1, 5, 2, 5, 3, 5, 4, 5, 5, 5, 6, 5, 7, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "x": [1, 1, 1, 2, 1, 6, 1, 7, 2, 2, 2, 3, 2, 5, 2, 6, 3, 3, 3, 4, 3, 5, 4, 3, 4, 4, 4, 5, 5, 2, 5, 3, 5, 5, 5, 6, 6, 1, 6, 2, 6, 6, 6, 7],
                "y": [1, 1, 1, 2, 1, 5, 1, 6, 2, 1, 2, 2, 2, 5, 2, 6, 3, 2, 3, 3, 3, 4, 3, 5, 4, 3, 4, 4, 5, 2, 5, 3, 6, 1, 6, 2],
                "z": [1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 2, 6, 2, 7, 3, 5, 3, 6, 4, 4, 4, 5, 5, 3, 5, 4, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                "A": [0, 3, 0, 4, 1, 2, 1, 3, 1, 4, 1, 5, 2, 2, 2, 3, 2, 4, 2, 5, 3, 1, 3, 2, 3, 5, 3, 6, 4, 1, 4, 2, 4, 3, 4, 4, 4, 5, 4, 6, 5, 1, 5, 2, 5, 5, 5, 6, 6, 0, 6, 1, 6, 6, 6, 7],
                "B": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 1, 3, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 4, 3, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "C": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 2, 0, 2, 1, 3, 0, 3, 1, 4, 0, 4, 1, 5, 1, 5, 2, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "D": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "E": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 5, 1, 5, 2, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "F": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 5, 1, 5, 2, 6, 1, 6, 2],
                "G": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 2, 0, 2, 1, 3, 0, 3, 1, 3, 4, 3, 5, 3, 6, 4, 0, 4, 1, 4, 6, 5, 1, 5, 2, 5, 6, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "H": [0, 1, 0, 2, 0, 6, 0, 7, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 1, 6, 2, 6, 6, 6, 7],
                "I": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 4, 2, 4, 3, 4, 4, 4, 5, 4, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                "J": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 5, 1, 6, 2, 5, 2, 6, 3, 5, 3, 6, 4, 1, 4, 2, 4, 5, 4, 6, 5, 1, 5, 2, 5, 5, 5, 6, 6, 2, 6, 3, 6, 4, 6, 5],
                "K": [0, 1, 0, 2, 0, 5, 0, 6, 1, 1, 1, 2, 1, 4, 1, 5, 2, 1, 2, 2, 2, 3, 2, 4, 3, 1, 3, 2, 3, 3, 4, 1, 4, 2, 4, 3, 4, 4, 5, 1, 5, 2, 5, 4, 5, 5, 6, 1, 6, 2, 6, 5, 6, 6],
                "L": [0, 1, 0, 2, 1, 1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 4, 1, 4, 2, 5, 1, 5, 2, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "M": [0, 1, 0, 2, 0, 6, 0, 7, 1, 1, 1, 2, 1, 3, 1, 5, 1, 6, 1, 7, 2, 1, 2, 2, 2, 4, 2, 6, 2, 7, 3, 1, 3, 2, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 1, 6, 2, 6, 6, 6, 7],
                "N": [0, 1, 0, 2, 0, 6, 0, 7, 1, 1, 1, 2, 1, 3, 1, 6, 1, 7, 2, 1, 2, 2, 2, 4, 2, 6, 2, 7, 3, 1, 3, 2, 3, 5, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 1, 6, 2, 6, 6, 6, 7],
                "O": [0, 2, 0, 3, 0, 4, 0, 5, 1, 1, 1, 2, 1, 5, 1, 6, 2, 0, 2, 1, 2, 6, 2, 7, 3, 0, 3, 1, 3, 6, 3, 7, 4, 0, 4, 1, 4, 6, 4, 7, 5, 1, 5, 2, 5, 5, 5, 6, 6, 2, 6, 3, 6, 4, 6, 5],
                "P": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 1, 3, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 5, 1, 5, 2, 6, 1, 6, 2],
                "Q": [0, 2, 0, 3, 0, 4, 0, 5, 1, 1, 1, 2, 1, 5, 1, 6, 2, 0, 2, 1, 2, 6, 2, 7, 3, 0, 3, 1, 3, 6, 3, 7, 4, 0, 4, 1, 4, 4, 4, 6, 4, 7, 5, 1, 5, 2, 5, 5, 5, 6, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                "R": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 1, 3, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 4, 5, 5, 1, 5, 5, 6, 2, 6, 1, 6, 2, 6, 6],
                "S": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 2, 1, 2, 2, 3, 2, 3, 3, 3, 4, 3, 5, 4, 5, 4, 6, 5, 5, 5, 6, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "T": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 1, 4, 2, 4, 3, 4, 4, 4, 5, 4],
                "U": [0, 1, 0, 2, 0, 6, 0, 7, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "V": [0, 0, 0, 1, 0, 6, 0, 7, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 2, 3, 3, 3, 5, 3, 6, 4, 3, 4, 4, 4, 5, 4, 6, 5, 4, 5, 5, 6, 4],
                "W": [0, 1, 0, 2, 0, 6, 0, 7, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 6, 3, 7, 4, 1, 4, 2, 4, 4, 4, 6, 4, 7, 5, 1, 5, 2, 5, 3, 5, 5, 5, 6, 5, 7, 6, 1, 6, 2, 6, 6, 6, 7],
                "X": [0, 0, 0, 1, 0, 6, 0, 7, 1, 1, 1, 2, 1, 5, 1, 6, 2, 1, 2, 2, 2, 5, 2, 6, 3, 2, 3, 3, 3, 4, 3, 5, 4, 2, 4, 3, 4, 4, 4, 5, 5, 1, 5, 2, 5, 5, 5, 6, 6, 0, 6, 1, 6, 6, 6, 7],
                "Y": [0, 0, 0, 1, 0, 6, 0, 7, 1, 0, 1, 1, 1, 6, 1, 7, 2, 1, 2, 2, 2, 5, 2, 6, 3, 2, 3, 3, 3, 4, 3, 5, 4, 3, 4, 4, 5, 3, 5, 4, 6, 3, 6, 4],
                "Z": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 1, 6, 1, 7, 2, 5, 2, 6, 3, 4, 3, 5, 4, 2, 4, 3, 5, 1, 5, 2, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                ",": [5, 3, 5, 4, 5, 5, 6, 4, 6, 5, 7, 3, 7, 4],
                ":": [1, 3, 1, 4, 1, 5, 2, 3, 2, 4, 2, 5, 4, 3, 4, 4, 4, 5, 5, 3, 5, 4, 5, 5],
                "%": [0, 6, 0, 7, 1, 1, 1, 2, 1, 5, 1, 6, 2, 1, 2, 2, 2, 4, 2, 5, 3, 3, 3, 4, 4, 2, 4, 3, 5, 1, 5, 2, 5, 4, 5, 5, 6, 0, 6, 1, 6, 4, 6, 5],
                "!": [0, 3, 0, 4, 0, 5, 1, 3, 1, 4, 1, 5, 2, 3, 2, 4, 2, 5, 3, 3, 3, 4, 3, 5, 4, 3, 4, 4, 4, 5, 5, 3, 5, 4, 5, 5, 7, 4],
                "(": [0, 2, 0, 3, 1, 1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 4, 1, 4, 2, 5, 1, 5, 2, 6, 1, 6, 2, 7, 2, 7, 3],
                ")": [0, 5, 0, 6, 1, 6, 1, 7, 2, 6, 2, 7, 3, 6, 3, 7, 4, 6, 4, 7, 5, 6, 5, 7, 6, 6, 6, 7, 7, 5, 7, 6],
                ".": [5, 3, 5, 4, 5, 5, 6, 3, 6, 4, 6, 5, 7, 3, 7, 4, 7, 5]
            },
            /**		
            * Specifies the frame of the Digital gauge.
            * @default
            * @alias ejDigitalGauge#frame
            * @type {object}
            * @example  
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({ frame:{backgroundImageUrl: null, innerWidth:6, outerWidth:10}});
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
			* @instance
            */
            frame: {
                /**		
                * Specifies the url of an image to be displayed as background of the Digital gauge.
                * @default null
                * @alias ejDigitalGauge#frame->backgroundImageUrl
                * @type {string}
                * @example  
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({frame:{ backgroundImageUrl: "styles\images\Car.png" }});
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
			    * @instance
                */
                backgroundImageUrl: null,
                /**		
                * Specifies the inner width for the frame, when the background image has been set for the Digital gauge..
                * @default 6
                * @alias ejDigitalGauge#frame->innerWidth
                * @type {number}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({frame:{ innerWidth: 30 }});
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
			    * @instance
                */
                innerWidth: 6,
                /**		
                * Specifies the outer width of the frame, when the background image has been set for the Digital gauge.
                * @default 10
                * @alias ejDigitalGauge#frame->outerWidth
                * @type {number}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({frame: { outerWidth: 30 } });
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
			    * @instance
                */
                outerWidth: 10,
            },
            /**		
            * Specifies the height of the DigitalGauge.
            * @default 150
            * @alias ejDigitalGauge#height
            * @type {number}
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({ height: 60 }); 
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
			* @instance
            */
            height: 150,
            /**		
            * Specifies the width for the Digital gauge.
            * @default 400
            * @alias ejDigitalGauge#width
            * @type {number}
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({ width: 300 }); 
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
			* @instance
            */
            width: 400,
            /**		
            * Specifies the resize option of the DigitalGauge.
            * @default false
            * @alias ejDigitalGauge#enableResize
            * @type {boolean}
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({ enableResize: true }); 
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            enableResize: false,
            /**		
            * Specifies the themes for the Digital gauge. See {@link Themes} 
            * @default flatlight
            * @alias ejDigitalGauge#themes
            * @type {string}
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({ themes: "flatlight" });
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            themes: "flatlight",
            /**		
            * Specifies the items for the DigitalGauge.
            * @default null
            * @alias ejDigitalGauge#items
            * @type {object}
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({width: 500});
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            items: null,
            /**     
            * Triggers when the gauge is initialized.
            * @event
            * @name ejDigitalGauge#init 	
            * @param {Object} args.object  returns the object of the gauge.
            * @param {boolean} args.cancel  returns the cancel option value
            * @param {Object} args.items   returns the all the options of the items.
            * @param {Object} args.context returns the context element
            * @param {Object} args.model   returns the gauge model
            * @param {String} args.type    returns the name of the event
            * @param {}
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({
            *    init: function (args) {}
            * });      
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            init: null,
            /**     
            * Triggers when the gauge is start to load.
            * @event
            * @name ejDigitalGauge#load 	
            * @param {Object} args.object  returns the object of the gauge.
            * @param {boolean} args.cancel  returns the cancel option value
            * @param {Object} args.items   returns the all the options of the items.
            * @param {Object} args.context returns the context element
            * @param {Object} args.model   returns the gauge model
            * @param {String} args.type    returns the name of the event
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({
            *    load: function (args) {}
            * });      
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            load: null,
            /**     
            * Triggers when the gauge render is completed.
            * @event
            * @name ejDigitalGauge#renderComplete 	
            * @param {Object} args.object  returns the object of the gauge.
            * @param {boolean} args.cancel  returns the cancel option value
            * @param {Object} args.items   returns the all the options of the items.
            * @param {Object} args.context returns the context element
            * @param {Object} args.model   returns the gauge model
            * @param {String} args.type    returns the name of the event
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({
            *    renderComplete: function (args) {}
            * });       
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            renderComplete: null,
            /**     
            * Triggers when the gauge item rendering.
            * @event
            * @name ejDigitalGauge#itemRendering 	
            * @param {Object} args.object  returns the object of the gauge.
            * @param {boolean} args.cancel  returns the cancel option value
            * @param {Object} args.items   returns the all the options of the items.
            * @param {Object} args.context returns the context element
            * @param {Object} args.model   returns the gauge model
            * @param {String} args.type    returns the name of the event
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({
            *    itemRendering: function (args) {}
            * });      
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            itemRendering: null,
            /**		
            * Specifies the value to the DigitalGauge.
            * @default text      
            * @alias ejDigitalGauge#value
            * @type {string}
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({items: [{ value: "Welcome" }] });
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            value: "text"
        },

        /**
        * Specify the data types for default properties 
        * @private
        */
        dataTypes: {
            segmentData: "data",
            matrixSegmentData: "data",
            items: "array"
        },

        /**
        * To configure set values of the Digital Gauge		
        * @private
        */
        _setValues: function () {
            this.gaugeEl = this.element;
            this.segmentCount = null;
            this.contextEl = null;
            this.style = null;
            this._value = null;
            this.location = null;
            this.canvasEl = null;
            this.segement16X = null;
            this.segment16Y = null;
            this.segmentHeight = null;
            this.segmentAngle = null;
            this.startX = 5;
            this.startY = 5;
            this.gradient = null;
            this.itemIndex = null;
            this.characterSpace = null;
            this.outerImage = null;
            this.radius = null;
            this.frameOuterLocation = null;
            this.frameInnerLocation = null;
            this.glassFrameLocation = null;
            this.glassFrameStyle = null;
            this.frameOuterStyle = null;
            this.character = null;
            this.frameInnerStyle = null;
            this._itemInitialize();
        },
        observables: ["value"],
        value: ej.util.valueFunction("value"),


        /**
        * To destroy the digital gauge 
        * @alias destroy
        * @return jQuery
        * @example 
        * &lt;div id="DigitalGauge1"&gt;Digital Gauge&lt;/div&gt; <br> 
        * &lt;script&gt;
        * $("#DigitalGauge1").ejDigitalGauge();
        * var gphObj = $("#DigitalGauge1").data("ejDigitalGauge");
        * gphObj.destroy();
        * &lt;/script&gt;
        *@memberof ejDigitalGauge
        * @instance
        */
        _destroy: function () {
            this.element.empty().removeClass("e-widget");
        },
        /**
        * To configure the properties at runtime using SetModel		
        * @private
        */
        _setModel: function (options) {
            var option;
            for (option in options) {
                switch (option) {
                    case "height":
                        this.model.height = options[option];
                        break;
                    case "width":
                        this.model.width = options[option];
                        break;
                    case "items":
                        this.model.items = options[option];
                        this._itemInitialize();
                        break;
                    case "frame":
                        $.extend(this.model.frame, options[prop]);
                    case "themes": this.model.themes = options[option]; break;
                    case "value":
                        for (var i = 0; this.model.items[i] != null; i++)
                            this.model.items[i].value = this.value();
                }
            }
            this.refresh();
        },
        /**
        * To initialize the Digital Gauge		
        * @private
        */
        _init: function () {
            this._setValues();
            this._trigger("load");
            this._setTheme();
            this._initialize();
            this._onWindowResize();
        },
        /**
        * To window resize for the Digital Gauge		
        * @private
        */
        _onWindowResize: function () {
            if (this.model.enableResize) {
                proxy = this;
                if (!this.isDevice())
                    this._on($(window), "resize", proxy.resizeCanvas);
                else
                    this._on($(window), "orientationchange", proxy.resizeCanvas);
            }
        },
        /**
        * To check the Device of the Digital Gauge rendered	
        * @private
        */
        isDevice: function () {
            return (/mobile|tablet|android|kindle/i.test(navigator.userAgent.toLowerCase()));
        },
        /**
        * To set theme for the Digital Gauge		
        * @private
        */
        _setTheme: function () {
            selectedThem = ej.datavisualization.DigitalGauge.Themes[this.model.themes];
            this._setThemeColors(selectedThem);
        },
        /**
        * To apply theme colors to the selected theme for the Digital Gauge		
        * @private
        */
        _setThemeColors: function (selectedThem) {
            var result = [], jsonObj = ej.datavisualization.DigitalGauge.Themes;
            for (var name in jsonObj) {
                result.push(name);
            }
            for (var th = 0; th < result.length; th++) {
                for (var i = 0; i < this.model.items.length; i++) {
                    this.model.items[i].segmentSettings.color = (ej.isNullOrUndefined(this.model.items[i].segmentSettings.color) || this.model.items[i].segmentSettings.color == jsonObj[result[th]].items.segmentSettings.color) ? selectedThem.items.segmentSettings.color : this.model.items[i].segmentSettings.color;
                    this.model.items[i].shadowColor = (!this.model.items[i].shadowColor || this.model.items[i].shadowColor == jsonObj[result[th]].items.shadowColor) ? selectedThem.items.shadowColor : this.model.items[i].shadowColor;
                    this.model.items[i].textColor = (!this.model.items[i].textColor || this.model.items[i].textColor == jsonObj[result[th]].items.textColor) ? selectedThem.items.textColor : this.model.items[i].textColor;
                }
            }
        },
        /**
        * To initialize the Digital Gauge		
        * @private
        */
        _initialize: function () {
            if (this.model.init)
                this._clientSideOnInit();
            this._initObject(this);
            if (this.model.load)
                this._clientSideOnLoad();
            if (this.model.frame.backgroundImageUrl != null)
                this._drawCustomImage(this, this.model.frame.backgroundImageUrl);
            else
                this._renderItems();
            if (this.model.renderComplete)
                this._clientSideOnRenderComplete();
        },
        /**
        * To initialize the items of Digital Gauge		
        * @private
        */
        _itemInitialize: function () {
            var proxy = this;
            if (this.model.items != null) {
                $.each(this.model.items, function (index, element) {
                    var obj = proxy._sendDefaultItem();
                    $.extend(true, obj, element);
                    $.extend(true, element, obj);
                });
            }
            else {
                this.model.items = [this._sendDefaultItem()];
            }
        },
        /**
        * To set the default items values for the Digital Gauge		
        * @private
        */
        _sendDefaultItem: function () {
            var defaultItems;
            return defaultItems = {
                /**		
                * Specifies the CharacterCount value for the DigitalGauge.
                * @name ejDigitalGauge#items->characterSettings
                * @default Object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                * @type {Object}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{ characterSettings: {count: 4} }] });
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                characterSettings: {
                    /**		
                    * Specifies the CharacterCount value for the DigitalGauge.
                    * @name ejDigitalGauge#items->characterSettings->count
                    * @default 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ characterSettings: {count: 4} }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    count: 4,
                     /**		
                    * Specifies the CharacterCount value for the DigitalGauge.
                    * @name ejDigitalGauge#items->characterSettings->opacity
                    * @default 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ characterSettings: {opacity: 1} }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    opacity: 1,
                    /**		
                   * Specifies the value for spacing between the characters
                   * @name ejDigitalGauge#items->characterSettings->spacing
                   * @default 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                   * @type {number}
                   * @example 
                   * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                   * &lt;script&gt;
                   * $("#DigitalCore").ejDigitalGauge({items: [{ characterSettings: {spacing: 3} }] });
                   * &lt;/script&gt; 
                   * @memberof ejDigitalGauge
                   * @instance
                   */
                    spacing: 2,
                    /**		
                    * Specifies the character type for the text to be displayed.  See {@link CharacterType}
                    * @name ejDigitalGauge#items->characterSettings->type
                    * @default ej.datavisualization.DigitalGauge.CharacterType.EightCrossEightDotMatrix                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {enum}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{characterSettings:{ type: "eightcrosseightdotmatrix" }}] });
                    * &lt;/script&gt; 
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    type:ej.datavisualization.DigitalGauge.CharacterType.EightCrossEightDotMatrix,
                },
                /**		
                * Enable/Disable the custom font to be applied to the text in the gauge. <br>
                * @name ejDigitalGauge#items->enableCustomFont
                * @default false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                * @type {boolean}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{ enableCustomFont: true }] });
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                enableCustomFont: false,
                /**		
                * Set the length for the text segments. <br>
                * @name ejDigitalGauge#items->segmentSettings
                * @default Object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                * @type {Object}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{ segmentSettings: {length: 2} }] });
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                segmentSettings: {
                    /**		
                    * Set the length for the text segments. <br>
                    * @name ejDigitalGauge#items->segmentSettings->color
                    * @default null                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {string}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ segmentSettings: {color: "#FF1F2F"} }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    color: null,
                    /**		
                    * Set the length for the text segments. <br>
                    * @name ejDigitalGauge#items->segmentSettings->gradient
                    * @default null                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {Object}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ segmentSettings: {gradient: { colorInfo: [{ colorStop: 0, color: "Green" }, { colorStop: 1, color: "Yellow" }] } } }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    gradient:null,
                     /**		
                    * Set the length for the text segments. <br>
                    * @name ejDigitalGauge#items->segmentSettings->length
                    * @default 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ segmentSettings: {length: 2} }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    length: 2,
                    /**		
                    * Set the length for the text segments. <br>
                    * @name ejDigitalGauge#items->segmentSettings->opacity
                    * @default 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ segmentSettings: {opacity: 2} }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    opacity: 0,
                    /**		
                    * Set the length for the text segments. <br>
                    * @name ejDigitalGauge#items->segmentSettings->spacing
                    * @default 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ segmentSettings: {spacing: 1} }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    spacing: 1,
                    /**		
                    * Set the length for the text segments. <br>
                    * @name ejDigitalGauge#items->segmentSettings->width
                    * @default 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ segmentSettings: {width: 1} }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    width: 1,
                },
                /**		
                * Set the value for enabling/disabling the blurring effect for the shadows of the text <br>
                * @name ejDigitalGauge#items->shadowBlur
                * @default 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                * @type (number)
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{ shadowBlur:  1 }] });
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                shadowBlur: 0,
                /**		
                * Set the x offset value for the shadow of the text, indicating the location where it needs to be displayed. <br>
                * @name ejDigitalGauge#items->shadowOffsetX
                * @default 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                * @type (number)
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{ shadowOffsetX:  2 }] });
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                shadowOffsetX: 1,
                /**		
                * Set the y offset value for the shadow of the text, indicating the location where it needs to be displayed. <br>
                * @name ejDigitalGauge#items->shadowOffsetY
                * @default 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                * @type (number)
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{ shadowOffsetY:  2 }] });
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                shadowOffsetY: 1,
                /**		
                * Set the alignment of the text that is displayed within the gauge.See {@link TextAlign}       
                * @name ejDigitalGauge#items->textAlign		
                * @default "left"
                * @type {string}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{ textAlign:  "right" }] });
                * &lt;/script&gt; 
                * @memberof ejDigitalGauge
                * @instance
                */
                textAlign: "left",
                /**		
                * Set the specific font for the text, when the enableCustomFont is set to true <br>
                * @name ejDigitalGauge#items->font
                * @default Object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                * @type {Object}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{enableCustomFont: true ,font: { size: "12px",fontFamily: "Segou",fontStyle: "bold"}}]});
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                font: /** @lends ejDigitalGauge# */{
                    /**		
                    * Set the font size value <br>
                    * @name ejDigitalGauge#items->font->size
                    * @default 11px                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {string}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{enableCustomFont: true,font: { size: "18px"}}]});
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    size: "11px",
                    /**		
                    * Set the font family value <br>
                    * @name ejDigitalGauge#items->font->fontFamily
                    * @default Arial                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {string}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{enableCustomFont: true ,font: { fontFamily: "Segou"}}]});
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    fontFamily: "Arial",
                    /**		
                    * Set the font style for the font. See {@link FontStyle}<br>
                    * @name ejDigitalGauge#items->font->fontStyle
                    * @default italic                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {enum}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{enableCustomFont: true ,font: { fontStyle: "bold" }}]});
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    fontStyle: "italic"
                },
                /**		
                * Set the location for the text, where it needs to be placed within the gauge. <br>
                * @name ejDigitalGauge#items->position
                * @default Object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                * @type {object}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{position: { x: 10, y: 20 } }]});
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                position: {
                    /**		
                    * Set the horizontal location for the text, where it needs to be placed within the gauge. <br>
                    * @name ejDigitalGauge#items->position->x
                    * @default 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{position : { x: 10,y:0} }]});
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    x: 0,
                    /**		
                    * Set the vertical location for the text, where it needs to be placed within the gauge. <br>
                    * @name ejDigitalGauge#items->position->y
                    * @default 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{position: { x:0,y: 20 } }]});
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    y: 0
                },
                /**		
                * Specifies the color of the text shadow.
                * @name ejDigitalGauge#items->shadowColor
                * @default null
                * @type {string}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({ items: [{shadowColor: "#FF1F2F" }]});
                * &lt;/script&gt; 
                * @memberof ejDigitalGauge
                * @instance
                */
                shadowColor: null,
                /**		
                * Specifies the color of the text.
                * @name ejDigitalGauge#items->textColor
                * @default null
                * @type {string}
                * @example  
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({ items: [{textColor: "#FF1F2F" }]});
                * &lt;/script&gt;  
                * @memberof ejDigitalGauge
                * @instance
                */
                textColor: null,
                /**		
                * Specifies the text value.
                * @name ejDigitalGauge#items->value
                * @default null
                * @type {string}
                * @example  
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({ items: [{value: "Welcome" }]});
                * &lt;/script&gt;  
                * @memberof ejDigitalGauge
                * @instance
                */
                value: null
            };
        },
        /**
        * To init the object for the Digital Gauge		
        * @private
        */
        _initObject: function (element) {
            this.element.addClass("e-widget");
            element.gaugeEl = this.element;
            for (var i = 0; this.model.items[i] != null; i++) {
                if (this.model.items[i].value == null)
                    this.model.items[i].value = this.value();
            }
            if (element.canvasEl)
                element.canvasEl.remove();
            else
                element.canvasEl = $("<canvas></canvas>");
            element.gaugeEl.append(element.canvasEl);
            element.canvasEl.attr("role", "presentation");
            initialDivWidth = element.gaugeEl.width();
            initialDivHeight = element.gaugeEl.height();
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
        * To draw the custom image for the Digital Gauge		
        * @private
        */
        _drawCustomImage: function (element, imageUrl) {
            var image = new Image();
            var self = this;
            $(image).load(function () {
                element.contextEl.drawImage(this, 0, 0, element.model.width, element.model.height);
                if (element.model.Scales != null)
                    element._drawScales();
                if (element.model.items != null)
                    element._renderItems();
            }).attr('src', imageUrl);
        },
        /**
        * To set the SegmentCount value to the Digital Gauge		
        * @private
        */
        _setSegmentCount: function (element) {
            switch (element) {
                case "sevensegment": this._SegmentCount = 7; break;
                case "fourteensegment": this._SegmentCount = 14; break;
                case "sixteensegment": this._SegmentCount = 16; break;
                case "eightcrosseightdotmatrix": this._SegmentCount = [8, 8]; break;
                case "eightcrosseightsquarematrix": this._SegmentCount = [8, 8]; break;
                default:
                    this._SegmentCount = 7;
            }

        },
        /**
        * To set the InnerPosition of the Digital Gauge		
        * @private
        */
        _setInnerPosition: function () {
            this.contextEl.save();
            this.contextEl.translate(this.model.frame.outerWidth + this.model.frame.innerWidth, this.model.frame.outerWidth + this.model.frame.innerWidth);
            this.bounds = {
                height: this.canvasEl[0].height - 2 * (this.model.frame.outerWidth + this.model.frame.innerWidth),
                width: this.canvasEl[0].width - 2 * (this.model.frame.outerWidth + this.model.frame.innerWidth)
            };
        },
        /**
        * To set the width to the Digital Gauge		
        * @private
        */
        _setWidth: function () {
            var characterCount = [];
            if (this.model.items != null) {
                var self = this;
                $.each(this.model.items, function (index, element) {
                    characterCount.push(element.characterSettings.count);
                });
            }
        },

        /**
        * Render the items for Digital Gauge		
        * @private
        */
        _renderItems: function () {
            if (this.model.items != null) {
                this._setInnerPosition();
                var self = this;
                $.each(this.model.items, function (index, element) {
                    self._setSegmentCount(element.characterSettings.type);
                    self.itemIndex = index;
                    self.canvasEl.attr("aria-label", element.value);
                    self._setShadow(index, element);
                    if (element.enableCustomFont)
                        self._setCustomFont(index, element);
                    else if (element.characterSettings.type.indexOf("matrix") != -1)
                        self._drawMatrixSegments(index, element);
                    else
                        self._drawSegments(index, element);
                });
            }
        },

        /**
        * To set the GradientColor to Digital Gauge		
        * @private
        */
        _setGradientColor: function (element, gradient, options) {
            var self = element;
            if (options.Name || typeof (options) === "string") {
                gradient.addColorStop(0, this._getColor(element, options));
                gradient.addColorStop(1, this._getColor(element, options));
            }
            else
                $.each(options, function (index, colorElement) {
                    gradient.addColorStop(colorElement.colorStop != NaN ? colorElement.colorStop : 0, typeof (colorElement.color) === "string" ? colorElement.color : this._getColor(element, colorElement.color));
                });
        },

        /**
        * To get the color of the Digital Gauge		
        * @private
        */
        _getColor: function (element, option) {
            if (typeof (option) === "string") {
                return option;
            }
            else {
                return ("rgba(" + option.R + ", " + option.G + "," + option.B + ", " + option.A / 255 + ")");
            }
        },

        /**
        * To draw the matrix segments to the Digital Gauge		
        * @private
        */
        _drawMatrixSegments: function (index, element) {
            var segmentXCollection = [], segmentCollection = [];
            if (element.value) {
                this._value = element.value.toString().split('');
                if (element.characterSettings.count < this._value.length)
                    element.characterSettings.count = this._value.length;
            }
            else
                this._value = "";
            this.radius = (element.characterSettings.type.indexOf("dot") != -1) ? (element.segmentSettings.length + element.segmentSettings.width) / 2 : element.segmentSettings.width / 2;
            var controlStartX = this.startX = (this.bounds.width - element.characterSettings.count * (this._SegmentCount[0] * (2 * this.radius) + element.characterSettings.spacing + this._SegmentCount[0] * element.segmentSettings.spacing)) * (element.position.x / 100);
            var controlStartY = this.startY = (this.bounds.height - (this._SegmentCount[1] * ((element.characterSettings.type.indexOf("dot") != -1) ? 2 * this.radius : element.segmentSettings.length) + this._SegmentCount[1] * element.segmentSettings.spacing)) * (element.position.y / 100);
            for (var character = 0; character < element.characterSettings.count; character++) {
                if (this._value) {
                    this.character = element.textAlign == "right" ? this._value[this._value.length - element.characterSettings.count + character] : this._value[character];
                    segmentCollection = this.model.matrixSegmentData[this.character];
                }
                if (character != 0) {
                    controlStartX = this.startX = this.startX + element.characterSettings.spacing + element.segmentSettings.spacing + (2 * this.radius);
                    this.startY = controlStartY;
                }
                for (var dotY = 0; dotY < this._SegmentCount[1]; dotY++) {
                    if (dotY != 0) {
                        this.startY = ((element.characterSettings.type.indexOf("dot") != -1) ? (2 * this.radius) : element.segmentSettings.length) + this.startY + element.segmentSettings.spacing;
                        this.startX = controlStartX;
                    }
                    if (segmentCollection) {
                        $.each(segmentCollection, function (index) {
                            if (index % 2 == 0) {
                                if (segmentCollection[index] > dotY)
                                    return false;
                                if (segmentCollection[index] == dotY)
                                    segmentXCollection.push(parseInt(segmentCollection[index + 1]));
                            }
                        });
                    }
                    for (var dotX = 0; dotX < this._SegmentCount[0]; dotX++) {
                        if (dotX != 0)
                            this.startX = this.startX + 2 * this.radius + element.segmentSettings.spacing;
                        if (element.characterSettings.type.indexOf("dot") != -1)
                            this.gradient = this.contextEl.createRadialGradient(0, 0, 0, 0, 0, this.radius);
                        else
                            this.gradient = this.contextEl.createLinearGradient(0, 0, element.segmentSettings.width, 0);
                        if (element.segmentSettings.gradient)
                            this._setGradientColor(this, this.gradient, element.segmentSettings.gradient.colorInfo);
                        this.location = { "startX": this.startX, "startY": this.startY };
                        this.style = {
                            "opacity": (segmentXCollection && ($.inArray(dotX, segmentXCollection)) != -1) ? element.characterSettings.opacity : element.segmentSettings.opacity,
                            "height": element.segmentSettings.length,
                            "width": element.segmentSettings.width,
                            "fillStyle": ((element.segmentSettings.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(this, element.segmentSettings.color)),
                            "skewX": element.SkewAngleX,
                            "skewY": element.SkewAngleX
                        };
                        if (this.model.itemRendering)
                            this._clientSideOnItemRendering(true, dotX, dotY);
                        if (element.characterSettings.type.indexOf("dot") != -1)
                            this._drawDot(this.location, this.style);
                        else
                            this._drawSquare(this.location, this.style);
                    }
                    segmentXCollection = [];
                }
            }
        },

        /**
        * Draw the segments of Digital Gauge		
        * @private
        */
        _drawSegments: function (index, element) {
            var segmentCollection = [], characterSpace, self = this;
            if (element.value) {
                this._value = element.value.toUpperCase().toString().split('');
                if (element.characterSettings.count < this._value.length)
                    element.characterSettings.count = this._value.length;
            }
            this.characterSpace = element.characterSettings.type == "sevensegment" ? 2 * element.segmentSettings.width : 4 * element.segmentSettings.width;
            this._renderSegmentCalculation(element);
            this.gradient = this.contextEl.createLinearGradient(0, 0, 0, element.segmentSettings.width);
            if (element.segmentSettings.color)
                this._setGradientColor(this, this.gradient, element.segmentSettings.color);
            else if (element.segmentSettings.gradient)
                this._setGradientColor(this, this.gradient, element.segmentSettings.gradient.colorInfo);
            //else
            //    this._setGradientColor(this, this.gradient, this.model.segmentColor);
            for (var character = 0; character < element.characterSettings.count; character++) {
                if (element.value)
                    segmentCollection = this.model.segmentData[element.textAlign == "right" ? this._value[this._value.length - element.characterSettings.count + character] : this._value[character]];
                for (var segment = 0; segment < this._SegmentCount; segment++) {
                    if (character != 0)
                        this.segment16X[segment] = this.segment16X[segment] + element.segmentSettings.length + this.characterSpace + element.characterSettings.spacing;
                    if (this._value)
                        this.character = element.textAlign == "right" ? this._value[this._value.length - element.characterSettings.count + character] : this._value[character]
                    this.location = { "startX": this.segment16X[segment], "startY": this.segment16Y[segment] };
                    this.style = {
                        "angle": this.angle[segment],
                        "fillStyle": this.gradient,
                        "isStroke": false,
                        "isFill": true,
                        "characterHeight": element.characterSettings.type == "sevensegment" ? element.segmentSettings.length : this.segmentHeight[segment],
                        "segmentWidth": element.segmentSettings.width,
                        "opacity": (segmentCollection && ($.inArray(segment, segmentCollection) != -1)) ? element.characterSettings.opacity : element.segmentSettings.opacity
                    };
                    if (this.model.itemRendering)
                        this._clientSideOnItemRendering(false, segment);
                    this._drawSegmentLayers(this.location, this.style);
                }
                this.value(element.value);
                segmentCollection = [];
            }
        },

        /**
        * To set the CustomFont style to Digital Gauge		
        * @private
        */
        _setCustomFont: function (index, element) {
            this.startX = (this.bounds.width - this._measureText(element.value, 0, this._getFontString(this, element.font)).width) * (element.position.x / 100);
            this.startY = (this.bounds.height - this._measureText(element.value, 0, this._getFontString(this, element.font)).height) * (element.position.y / 100);
            this.location = { "startX": this.startX, "startY": this.startY };
            this.style = { "font": this._getFontString(this, element.font), "text": element.value, "textColor": element.textColor ? ((element.textColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(this, element.textColor)) : ((element.segmentSettings.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(this, element.segmentSettings.color)) };
            if (this.model.itemRendering)
                this._clientSideOnItemRendering(false, segment);
            this._drawText(this.location, this.style);
        },

        /**
        * To get the Font String value of Digital Gauge		
        * @private
        */
        _getFontString: function (element, font) {
            return ((font.size == null) ? "11px" : font.size) + " " + font.fontFamily + " " + (font.fontStyle ? font.fontStyle : "");
        },

        /**
        * Rendering the SegmentCalculation of Digital Gauge		
        * @private
        */
        _renderSegmentCalculation: function (element) {
            var length = element.segmentSettings.length, width = element.segmentSettings.width;
            this.startX = (this.bounds.width - element.characterSettings.count * (length + this.characterSpace + element.characterSettings.spacing)) * (element.position.x / 100);
            this.startY = (this.bounds.height - 2 * length - width) * (element.position.y / 100);
            var tempLength = element.characterSettings.type == "sevensegment" ? length : length / 2;
            this.segment16X = [
                  this.startX + width / 2,
                  this.startX + length + 4 * width,
                  this.startX + length + 4 * width,
                  this.startX + width / 2,
                  this.startX,
                  this.startX,
                  this.startX + width / 2,
                  this.startX + tempLength + 2 * width,
                  this.startX + 2.5 * width + tempLength,
                  this.startX + tempLength + 2 * width,
                  this.startX + length + 2.5 * width,
                  this.startX + tempLength + 2.5 * width,
                  this.startX + tempLength + 1.5 * width,
                  this.startX + 1.5 * width,
                  this.startX + 5 * width / 2 + tempLength,
                  this.startX + 2.5 * width + tempLength
            ];
            this.segment16Y = [
                  this.startY,
                  this.startY,
                  this.startY + length + width,
                  this.startY + 2 * length + 2 * width,
                  this.startY + length + width,
                  this.startY,
                  this.startY + length + width,
                  this.startY + length + width,
                  this.startY + length + width,
                  this.startY,
                  this.startY + width,
                  this.startY + length + width,
                  this.startY + length + width,
                  this.startY + width,
                  this.startY,
                  this.startY + 2 * length + 2 * width
            ];
            this.segmentHeight = [
                  length / 2,
                  length,
                  length,
                  length / 2,
                  length,
                  length,
                  length / 2,
                  length,
                  length / 2,
                  length,
                  length,
                  length,
                  length,
                  length,
                  length / 2,
                  length / 2
            ];
            this.angle = [-90, 0, 0, -90, 0, 0, -90, 0, -90, 0, 27, -27, 27, -27, -90, -90];
            if (element.characterSettings.type == "sevensegment")
                this.segment16X[2] = this.segment16X[1] = this.startX + length + 2 * width;
            if (element.characterSettings.type == "fourteensegment")
                this.segmentHeight[3] = this.segmentHeight[0] = length + 2 * width;
        },

        /**
        * Drawing the Segment Layers of the Digital Gauge		
        * @private
        */
        _drawSegmentLayers: function (location, style) {
            this._contextOpenPath(style, this);
            this.contextEl.translate(location.startX, location.startY);
            this.contextEl.rotate(Math.PI * (style.angle / 180));
            this.contextEl.moveTo(0, 0);
            this.contextEl.lineTo(-style.segmentWidth, style.segmentWidth);
            this.contextEl.lineTo(-style.segmentWidth, style.characterHeight);
            this.contextEl.lineTo(0, style.characterHeight + style.segmentWidth);
            this.contextEl.lineTo(style.segmentWidth, style.characterHeight);
            this.contextEl.lineTo(style.segmentWidth, style.segmentWidth);
            this._contextClosePath(style, this);
        },

        /**
        * Drawing the Dot of the Digital Gauge		
        * @private
        */
        _drawDot: function (location, style) {
            this.contextEl.beginPath();
            this.contextEl.save();
            this.contextEl.translate(location.startX, location.startY);
            this.contextEl.fillStyle = style.fillStyle;
            this.contextEl.globalAlpha = style.opacity;
            this.contextEl.arc(0, 0, this.radius, 0, 2 * Math.PI, true);
            this.contextEl.fill();
            this.contextEl.closePath();
            this.contextEl.restore();
        },

        /**
        * To set the Shadow of the Digital Gauge		
        * @private
        */
        _setShadow: function (index, element) {
            this.contextEl.save();
            this.contextEl.shadowColor = ((element.shadowColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(this, element.shadowColor));
            this.contextEl.shadowOffsetY = element.shadowOffsetY;
            this.contextEl.shadowOffsetY = element.shadowOffsetX;
            this.contextEl.shadowBlur = element.shadowBlur;
        },

        /**
        * Drawing the Square to Digital Gauge		
        * @private
        */
        _drawSquare: function (location, style) {
            this.contextEl.beginPath();
            this.contextEl.save();
            this.contextEl.translate(location.startX, location.startY);
            // this.contextEl.setTransform(1, style.skewY, style.skewX, 1, location.startX, location.startY);
            this.contextEl.fillStyle = style.fillStyle;
            this.contextEl.globalAlpha = style.opacity;
            this.contextEl.rect(0, 0, style.width, style.height);
            this.contextEl.fill();
            this.contextEl.closePath();
            this.contextEl.restore();
        },

        /**
        * Drawing the Text value of Digital Gauge		
        * @private
        */

        _drawText: function (location, style) {
            this.contextEl.beginPath();
            this.contextEl.save();
            this.contextEl.font = style.font;
            this.contextEl.textBaseline = "hanging";
            this.contextEl.fillStyle = ((style.textColor == "transparent") ? "rgba(0,0,0,0)" : style.textColor);
            this.contextEl.fillText(style.text, location.startX, location.startY);
            this.contextEl.closePath();
            this.contextEl.restore();
        },

        /**
        * ClientSideMethod SetValue
        * Sets the value of an item to be displayed in the gauge.
        * @alias setValue 
        * @param {int} itemIndex  Index value of the digital gauge item
        * @param {string} value  Text value to be displayed in the gaugeS
        * @example 
        * &lt;div id="DigitalGauge1"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * $("#DigitalGauge1").ejDigitalGauge();
        * var DigitalGaugeObj = $("#DigitalGauge1").data("ejDigitalGauge");
        * DigitalGaugeObj.setValue(0,"Welcome");
        * &lt;/script&gt;
        * @memberof ejDigitalGauge
        * @instance
        */

        setValue: function (itemIndex, value) {
            if (itemIndex < this.model.items.length && value != null) {
                this.model.items[itemIndex].value = value;
                this._initialize();
            }
        },

        /**
        * ClientSideMethod getValue
        * Gets the value of an item that is displayed on the gauge
        * @alias getValue       
        * @param {int}  itemIndex Index value of an item that displayed on the gauge      
        * @example 
        * &lt;div id="DigitalGauge1"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * $("#DigitalGauge1").ejDigitalGauge();
        * var DigitalGaugeObj = $("#DigitalGauge1").data("ejDigitalGauge");
        * DigitalGaugeObj.getValue(0);	
        * &lt;/script&gt;
        * @memberof ejDigitalGauge
        * @instance
        */
        getValue: function (itemIndex) {
            return this.model.items[itemIndex].value;
        },

        /**
        * ClientSideMethod Set Position
        * Sets the location of an item to be displayed in the gauge
        * @alias setPosition       
        * @param {int} itemIndex  Index value of the digital gauge item
        * @param {object} value  Location value of the digital gauge
        * @example 
        * &lt;div id="DigitalGauge1"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * $("#DigitalGauge1").ejDigitalGauge();
        * var DigitalGaugeObj = $("#DigitalGauge1").data("ejDigitalGauge");
        * DigitalGaugeObj.setPosition(0,{ x:50, y:40 });	
        * &lt;/script&gt;
        * @memberof ejDigitalGauge
        * @instance
        */

        setPosition: function (itemIndex, value) {
            if (itemIndex < this.model.items.length && value != null) {
                this.model.items[itemIndex].position.x = value.x;
                this.model.items[itemIndex].position.y = value.y;
                this._initialize();
            }
        },


        /**
        * Gets the location of an item that is displayed on the gauge.
        * @alias getPosition       
        * @param {int}  itemIndex Position value of an item that is displayed on the gauge.     
        * @example 
        * &lt;div id="DigitalGauge1"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * $("#DigitalGauge1").ejDigitalGauge();
        * var DigitalGaugeObj = $("#DigitalGauge1").data("ejDigitalGauge");
        * DigitalGaugeObj.getPosition(0);	
        * &lt;/script&gt;
        * @memberof ejDigitalGauge
        * @instance
        */

        getPosition: function (itemIndex) {
            if (itemIndex < this.model.items.length)
                return { "x": this.model.items[itemIndex].position.x, "y": this.model.items[itemIndex].position.y };
        },

        /**
        * Refresh the digital gauge widget
        * @alias refresh
        * @example 
        * &lt;div id="DigitalGauge1"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * $("#DigitalGauge1").ejDigitalGauge();
        * var GaugeObj = $("#DigitalGauge1").data("ejDigitalGauge");
        * GaugeObj.refresh();
        * &lt;/script&gt;     
        * @memberof ejDigitalGauge     
        * @instance      
        */
        refresh: function () {
            this._setTheme();
            this._initialize();
        },

        /**
        * To export Digital Gauge as Image
        * @alias exportImage
        * @param {string} fileName fileName for the Image
        * @param {string} fileType fileType for the Image
        * @example 
        * &lt;div id="DigitalGauge"&gt;DigitalGauge1&lt;/div&gt; <br> 
        * &lt;script&gt;
        * $("#DigitalGauge").ejDigitalGauge();
        * var DigitalGaugeObj = $("#DigitalGauge").data("ejDigitalGauge");
        * DigitalGaugeObj.exportImage("myImage","jpeg");
        * &lt;/script&gt;
        * @memberof ejDigitalGauge     
        * @instance
        */
        exportImage: function (fileName, fileType) {
            /// <summary>This function save the rendered canvas image</summary>
            /// <param name="fileName" type="String">fileName to which the image has been saved</param>
            /// <param name="fileType" type="String">fileType to which the image has been saved</param>
            var lnk = document.createElement('a'), e;
            lnk.download = fileName + "." + fileType;
            lnk.href = this.canvasEl[0].toDataURL("image/" + fileType).replace("image/" + fileType, "image/octet-stream");
            if (document.createEvent) {
                e = document.createEvent("MouseEvents");
                e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                lnk.dispatchEvent(e);
            }
            else if (lnk.fireEvent) {
                lnk.fireEvent("onclick");
            }
        },

        /**
        * ClientSideMethod ResizeCanvas		
        * @private
        */
        resizeCanvas: function () {
            if (proxy.element.width() != initialDivWidth || proxy.element.height() != initialDivHeight) {
                var canvasHeight = proxy.element.height() / initialDivHeight;
                var canvasWidth = proxy.element.width() / initialDivWidth;
                proxy.model.width *= canvasWidth;
                proxy.model.height *= canvasHeight;
                for (var i = 0; proxy.model.items[i] != null; i++) {
                    proxy.model.items[i].segmentSettings.width *= canvasWidth;
                    proxy.model.items[i].segmentSettings.spacing *= canvasWidth;
                }
                proxy.refresh();
                initialDivWidth = proxy.element.width();
                initialDivHeight = proxy.element.height();
            }
        },

        //ClientSide events
        /**
        * ClientSide events _clientSideOnLoad		
        * @private
        */
        _clientSideOnLoad: function () {
            var data = { object: this, items: this.model.items, context: this.contextEl };
            this._trigger("load", data);
        },

        /**
        * ClientSide events _clientSideOnItemRendering		
        * @private
        */
        _clientSideOnItemRendering: function (isMatrix, row, column) {
            var data;
            if (isMatrix)
                data = { object: this, items: this.model.items, character: this.character, context: this.contextEl, position: this.location, style: this.style, row: row, column: column };
            else
                data = { object: this, model: this.model, id: this.model.ClientId, items: this.model.items, character: this.character, context: this.contextEl, position: this.location, style: this.style, segment: row };
            this._trigger("itemRendering", data);
        },

        /**
        * ClientSide events _clientSideOnInit		
        * @private
        */
        _clientSideOnInit: function () {
            var data = { object: this, items: this.model.items, context: this.contextEl };
            this._trigger("init", data);
        },

        /**
        * ClientSide events _clientSideOnRenderComplete		
        * @private
        */
        _clientSideOnRenderComplete: function () {
            var data = { object: this, items: this.model.items, context: this.contextEl };
            this._trigger("renderComplete", data);
        },


        /*--------common js ----------*/
        /**
        * ClientSide events _contextOpenPath		
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
        * ClientSide events _contextClosePath		
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
        * ClientSide events _measureText		
        * @private
        */
        _measureText: function (text, maxwidth, font) {
            var textObj = document.createElement('DIV');
            textObj.innerHTML = text;
            if (font != null)
                textObj.style.font = font;
            textObj.style.backgroundColor = 'white';
            textObj.style.position = 'absolute';
            textObj.style.top = -100;
            textObj.style.left = 0;
            if (maxwidth)
                textObj.style.maxwidth = maxwidth + "px";
            document.body.appendChild(textObj);
            var bounds = { width: textObj.offsetWidth, height: textObj.offsetHeight };
            $(textObj).remove();
            return bounds;
        }

    });

    /**
    * Enum for gauge CharacterType	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.DigitalGauge.CharacterType = {
        /**  To set the CharacterType sevensegment. */
        SevenSegment: "sevensegment",
        /**  To set the CharacterType fourteensegment. */
        FourteenSegment: "fourteensegment",
        /**  To set the CharacterType sixteensegment. */
        SixteenSegment: "sixteensegment",
        /**  To set the CharacterType eightcrosseightdotmatrix. */
        EightCrossEightDotMatrix: "eightcrosseightdotmatrix",
        /**  To set the CharacterType eightcrosseightsquarematrix. */
        EightCrossEightSquareMatrix: "eightcrosseightsquarematrix"
    };
    /**
    * Enum for gauge TextAlign	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.DigitalGauge.TextAlign = {
        /**  To set the TextAlign Left. */
        Left: "left",
        /**  To set the TextAlign right. */
        Right: "right"
    };

    /**
    * Enum for gauge FontStyle	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.DigitalGauge.FontStyle = {
        /**  To set the FontStyle normal. */
        Normal: "normal",
        /**  To set the FontStyle bold. */
        Bold: "bold",
        /**  To set the FontStyle italic. */
        Italic: "italic",
        /**  To set the FontStyle underline. */
        Underline: "underline",
        /**  To set the FontStyle strikeout. */
        Strikeout: "strikeout"
    };

    /**
    * Enum for gauge Themes	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.DigitalGauge.Themes = {
        /**  To set the themes flatlight. */
        flatlight: {
            items: {
                segmentSettings: {
                    color: "#232323",
                },
                shadowColor: "#232323",
                textColor: "#232323"
            }
        },
        /**  To set the themes flatdark. */
        flatdark: {
            items: {
                segmentSettings: {
                    color: "#b1b0b0",
                },
                shadowColor: "#b1b0b0",
                textColor: "#b1b0b0"
            }
        }
    };

})(jQuery, Syncfusion);;;