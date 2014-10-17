/*!
*  filename: ej.circulargauge.js
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