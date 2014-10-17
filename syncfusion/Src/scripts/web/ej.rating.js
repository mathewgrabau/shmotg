/*!
*  filename: ej.rating.js
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
* @class ejRating
* @requires jQuery
* @requires jquery.easing.1.3.js
* @requires ej.core.js
* @requires ej.rating.js
* @classdesc Custom Design for Html Rating control.
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* // Create Rating
* $('#rating').ejRating(); 
* &lt;/script&gt;
*/
    ej.widget("ejRating", "ej.Rating", {
        _rootCSS: "e-rating",
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["input"],
        _setFirst: false,

        // default model
        defaults: {
            /**		
* Allow to render the maximum number of Rating shape(star).
* @default 5
* @type {number}
* @example
 *&lt;/br&gt;
*&lt;/br&gt;
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set maxValue API value during initialization  
* 	$("#rating").ejRating({maxValue: 10 });
* &lt;/script&gt;
 * @memberof ejRating
* @instance
*/
            maxValue: 5,
            /**
* Allow to render the minimum number of Rating shape(star).
* @default 0
* @type {number}
* @example 
 *&lt;/br&gt;
*&lt;/br&gt;
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set minValue API value during initialization  
* 	$("#rating").ejRating({minValue: 3 });
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            minValue: 0,
            /**
* To specify the number of stars to be selected while rendering.
* @default 1
* @type {number}
* @example 
 *&lt;/br&gt;
*&lt;/br&gt;
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set value API value during initialization  
* 	$("#rating").ejRating({value: 3 });
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            value: 1,
            /**		
* Enables the rating control with reset button.It can be used to reset the rating control value.
* @default true
* @type {boolean}
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set allowReset API value during initialization  
* 	$("#rating").ejRating({allowReset: true});
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            allowReset: true,
            /**		
* To specify the width of each shape in Rating control.
* @default 23
* @type {number}
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set shapeWidth API value during initialization  
* 	$("#rating").ejRating({shapeWidth: 25 });
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            shapeWidth: 23,
            /**
* To specify the height of each shape in Rating control.
* @default 23
* @type {number}
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set shapeHeight API value during initialization  
* 	$("#rating").ejRating({shapeHeight: 25 });
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            shapeHeight: 23,
            /**
* Specifies the orientation of Rating control.    See {@link Orientation}
* @default ej.Rating.Orientation.Horizontal
* @type {enum}
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set orientation API value during initialization  
* 	$("#rating").ejRating({orientation: ej.Rating.Orientation.Horizontal });
* &lt;/script&gt; 
* @memberof ejRating
* @instance
*/
            orientation: "horizontal",
            /**		
* Specifies the value to be increased while navigating between shapes(stars) in Rating control.
* @default 1
* @type {number}
* @example
 *&lt;/br&gt;
*&lt;/br&gt;
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set incrementStep API value during initialization  
* 	$("#rating").ejRating({incrementStep: 2 });
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            incrementStep: 1,
            /**		
* Interaction with Rating control can be prevented by enabling this API.
* @default false
* @type {boolean}
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set readOnly API value during initialization  
* 	$("#rating").ejRating({readOnly: true});
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            readOnly: false,
            /**
* When this property is set to false, it disables the rating control.
* @default true
* @type {boolean}
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set enabled API value during initialization  
* 	$("#rating").ejRating({enabled: true });
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            enabled: true,
            /**
* Enables the tooltip option.Currently selected value value will be displayed in tooltip.
* @default true
* @type {boolean}
* @example 
*&lt;/br&gt;
*&lt;/br&gt;
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set showTooltip API value during initialization  
* 	$("#rating").ejRating({showTooltip: true});
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            showTooltip: true,
            /**		
* Helps to provide more precise ratings.Rating control supports three precision modes - full, half, and exact. See {@link Precision}
* @default "full"
* @type {enum}
* @example
 *&lt;/br&gt;
*&lt;/br&gt;
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set precision API value during initialization  
* 	$("#rating").ejRating({precision: ej.Rating.Precision.Half});
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            precision: "full",
            /**
* Specify the CSS class to rating to achieve custom theme.
* @default ""
* @type {string}
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* // Set the cssClass during initialization.
* 	$("#rating").ejRating({  cssClass : "gradient-lime" });
* &lt;/script&gt;
 * @memberof ejRating
* @instance
*/
            cssClass: "",
            /**
* Specifies the width of the Rating control wrapper.
* @default null
* @type {string}
* @example
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set width API value during initialization  
* 	$("#rating").ejRating({width: "200" });
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            width: null,
            /**
* Specifies the height of the Rating control wrapper.
* @default null
* @type {string}
* @example
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set height API value during initialization  
* 	$("#rating").ejRating({height: "50" });
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            height: null,
            /**
* Save current model value to browser cookies for state maintanence. While refresh the page Rating control values are retained.  
* @default false
* @type {boolean}
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* //To set persist API value during initialization  
* 	$("#rating").ejRating({enablePersistence: true });
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            enablePersistence: false,
            /**     
 * Fires when Rating control is created.
 * @event
 * @name ejRating#create
 * @param {Object} argument Event parameters from rating     
 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
 * @param {object}  argument.model returns the rating model
 * @param {string}  argument.type returns the name of the event.
 * @example 
 * &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
 * //create event for rating
 * $("#rating").ejRating({
 *    create: function (args) {}
 * });
 * &lt;/script&gt;
 * @memberof ejRating
 * @instance
 */
            create:null,
            /**     
			 * Fires when Rating control is clicked successfully.
			 * @event
			 * @name ejRating#click 
             * @param {Object} argument Event parameters from rating  
			 * @param {string} argument.value returns the current value.     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the rating model
			 * @param {string}  argument.type returns the name of the event
			 * @param {object}  argument.event returns the mouse click event args values.
			 * @example 
             * &lt;input id="rating"&gt;&lt;/input&gt; <br> 
             * &lt;script&gt;
			 * //click event for button
             * $("#rating").ejRating({
             *    click: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejRating
			 * @instance
			 */
            click: null,
            /**     
 * Fires when mouse hovered over the Rating control
 * @event
 * @name ejRating#mouseover 
 * @param {Object} argument Event parameters from rating  
 * @param {string} argument.value returns the current value.     
 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
 * @param {object}  argument.model returns the rating model
 * @param {string}  argument.type returns the name of the event
 * @param {object}  argument.event returns the mouse click event args values.
 * @param {object}  argument.index returns the current index value.
 * @example 
 * &lt;input id="rating"&gt;&lt;/input&gt; <br> 
 * &lt;script&gt;
 * //mouseover event for button
 * $("#rating").ejRating({
 *    mouseover: function (args) {}
 * });
* &lt;/script&gt;
 * @memberof ejRating
 * @instance
 */
            mouseover: null,
            /**     
* Fires when mouse hover is removed from Rating control
* @event
* @name ejRating#mouseout 
* @param {Object} argument Event parameters from rating  
* @param {string} argument.value returns the current value.     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the rating model
* @param {string}  argument.type returns the name of the event
* @param {object}  argument.event returns the mouse click event args values.
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
 * &lt;script&gt;
* //mouseover event for button
* $("#rating").ejRating({
*    mouseout: function (args) {}
* });
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            mouseout: null,
            /**     
* Fires when Rating value changes.
* @event
* @name ejRating#change 
* @param {Object} argument Event parameters from rating  
* @param {string} argument.value returns the current value.     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the rating model
* @param {string}  argument.type returns the name of the event
* @param {object}  argument.event returns the mouse click event args values.
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
 * &lt;script&gt;
* //mouseover event for button
* $("#rating").ejRating({
*    change: function (args) {}
* });
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
            change: null,
            /**     
 * Fires when Rating control is destroyed successfully.
 * @event
 * @name ejRating#destroy 
 * @param {Object} argument Event parameters from rating      
 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
 * @param {object}  argument.model returns the rating model
 * @param {string}  argument.type returns the name of the event
 * @example 
  * &lt;input id="rating"&gt;&lt;/input&gt; <br> 
 * &lt;script&gt;
 * //destroy event for rating
 * $("#rating").ejRating({
 *    destroy: function (args) {}
 * });
* &lt;/script&gt;
 * @memberof ejRating
 * @instance
 */
            destroy:null
        },
        /**
* Specify the data types for default properties 
* @private
*/
        dataTypes: {
            maxValue: "number",
            minValue: "number",
            allowReset: "boolean",
            shapeWidth: "number",
            shapeHeight: "number",
            orientation: "enum",
            incrementStep: "number",
            readOnly: "boolean",
            precision: "enum",
            enabled: "boolean"
        },

        observables: ["value"],
        value: ej.util.valueFunction("value"),
        /**
* To configure the properties at runtime using SetModel		
* @private
*/
        _setModel: function (options) {
            if (!this.model.enabled && ej.isNullOrUndefined(options["enabled"])) return false;
            for (var key in options) {
                switch (key) {
                    case "allowReset": {
                        if (options[key]) {
                            this._showResetButton();
                        }
                        else {
                            this._hideResetButton();
                        }
                        break;
                    }
                    case "value": {
                        this.setValue(ej.util.getVal(options[key]));
                        break;
                    }
                    case "enabled": this._enabledAction(options[key]); break;
                    case "cssClass": this._changeSkin(options[key]); break;
                    case "height": this._mainDiv.height(options[key]); break;
                    case "width": this._mainDiv.width(options[key]); break;
                    case "readOnly": {
                        this._unWireEvents();
                        break;
                    }
                    case "orientation":
                        {
                            this.model.orientation = options[key];
                            this.refresh();
                            break;
                        }
                    case "maxValue":
                        {
                            this.model.maxValue = options[key];
                            this.refresh();
                            break;
                        }
                    case "minValue":
                        {
                            this.model.minValue = options[key];
                            this.refresh();
                            break;
                        }
                    case "incrementStep":
                        {
                            this.model.incrementStep = options[key];
                            this.refresh();
                            break;
                        }
                    case "shapeWidth":
                        {
                            this.model.shapeWidth = options[key];
                            this.refresh();
                            break;
                        }
                    case "shapeHeight":
                        {
                            this.model.shapeHeight = options[key];
                            this.refresh();
                            break;
                        }
                }
            }
        },
        /**
* destroy the Rating widget
* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
* @alias destroy
* @return jQuery
* @example 
* &lt;rating id="rating"&gt;Rating&lt;/rating&gt; <br> 
* &lt;script&gt;
* $("#rating").ejRating();
* // Create Rating
* var ratingObj = $("#rating").data("ejRating");
* ratingObj.destroy(); // destroy the button
* &lt;/script&gt;
* @example 
* &lt;rating id="rating"&gt;Rating&lt;/rating&gt; <br> 
* &lt;script&gt;
* $("#rating").ejRating();
* // destroy the rating
* $("#rating").ejRating("destroy");
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/

        _destroy: function () {
            this.element.show();
            this._unWireEvents();
            this._mainDiv.remove();
        },

        // constructor function
        /**
 * Create the butto widget
 * @private
 */
        _init: function () {
            this._initialize();
        },
        /**
* To initialize the button		
* @private
*/
        _initialize: function () {
            this.element.hide();
            this._mainDiv = ej.buildTag("div.e-rating e-widget " + this.model.cssClass, "", {}, { tabindex: "0", role: "group", "aria-label": "Rating" });
            if (!ej.isNullOrUndefined(this.model.width))
                this._mainDiv.width(this.model.width);
            if (!ej.isNullOrUndefined(this.model.height))
                this._mainDiv.height(this.model.height);
            this._mainDiv.insertBefore(this.element);
            if (this.model.orientation == ej.Orientation.Horizontal) {
                this._mainDiv.addClass("e-horizontal");
            }
            else
                this._mainDiv.addClass("e-vertical");

            if (this.model.allowReset && !this.model.readOnly) {
                this._createReset();
            }
            this._validation();
            this._renderShape();
            this._shapes = this._mainDiv.find("div.e-shape");
            this._wireEvents();
            this._CurrentIndex = 0;
            this._initCurrentValue();
            this._enabledAction(this.model.enabled);
        },
        /**
        * To change the skin at runtime		
        * @private
        */
        _changeSkin: function (skin) {
            if (this.model.cssClass != skin) {
                this._mainDiv.removeClass(this.model.cssClass).addClass(skin);
            }
        },
        /**
* To enable or disable the Rating widget	
* @private
*/
        _enabledAction: function (flag) {
            if (flag) {
                this._mainDiv.removeClass("e-disable");
            }
            else {
                this._mainDiv.addClass("e-disable");
            }
        },
        /**
* To validate the user provided incrementStep value	
* @private
*/
        _validation: function () {
            if (this.model.incrementStep < 1) {
                this.model.incrementStep = 1;
            }
            else if (this.model.incrementStep > this.model.maxValue) {
                this.model.incrementStep = this.model.maxValue;
            }
        },
        /**
* Creates reset buttton option in the Rating widget
* @private
*/
        _createReset: function () {
            if (this._mainDiv.find("div.e-reset").length <= 0)
                ej.buildTag("div.e-reset", "", { width: this.model.shapeWidth + "px", height: this.model.shapeHeight, title: "Reset" }, { role: "button", "aria-label": "reset", "aria-hidden": false }).appendTo(this._mainDiv);
            else
                this._mainDiv.find("div.e-reset").show();
        },
        /**
* To create desired shape to be displayed in the rating control
* @private
*/
        _renderShape: function () {
            var _shapeCount = Math.round(this.model.maxValue / this.model.incrementStep);
            var _startCount = Math.round(this.model.minValue / this.model.incrementStep);
            var containerWith, containerHeight;
            if (this.model.orientation == ej.Rating.Orientation.Horizontal) {
                containerWith = (_shapeCount + 1) * this.model.shapeWidth;
                containerHeight = this.model.shapeHeight;
            } else if (this.model.orientation == ej.Rating.Orientation.Vertical) {
                containerWith = this.model.shapeWidth;
                containerHeight = this.model.shapeHeight * _shapeCount;
            }
            if (_shapeCount > 0) {
                var _ulTag = ej.buildTag("ul.e-ul", "", { width: containerWith + "px", height: containerHeight }, {});
                for (var i = _startCount ; i < _shapeCount; i++) {
                    var _liTag = ej.buildTag("li.e-shape-list", "", { width: this.model.shapeWidth + "px", height: this.model.shapeHeight }, { tabindex: -1, "aria-describedby": this.element.prop("id") + "_tooltip" });
                    ej.buildTag("div.e-shape inactive", "", { width: this.model.shapeWidth + "px", height: this.model.shapeHeight }).appendTo(_liTag);
                    _liTag.appendTo(_ulTag);
                }
                _ulTag.appendTo(this._mainDiv);
            }
        },
        /**
* To load the current value when the Rating control is rendered
* @private
*/
        _initCurrentValue: function () {
            if (ej.isNullOrUndefined(this.value()) || this.value() == ""|| this.value() == 0)
                this._CurrentIndex = 0;
            else if (this.value() > this.model.minValue) {
                var count = (this.value() / this.model.incrementStep) - (this.model.minValue / this.model.incrementStep);
                this._CurrentIndex = count;
                this._valueRefresh(this._CurrentIndex);
                for (var i = 0; i < count; i++) {
                    if (this._shapes[i]) {
                        $(this._shapes[i]).removeClass('inactive').removeClass('active').addClass('selected');
                    }
                    else {
                        this._CurrentIndex = i;
                        break;
                    }
                }
            }
            this.value(this._CurrentIndex);
        },
        /**
* To refresh the rating on every mouse out with previously selected values
* @private
*/
        _valueRefresh: function (index) {
			index = Math.ceil(index);
            var value = (this.value() / this.model.incrementStep).toFixed(1);
            if (this.model.orientation == ej.Rating.Orientation.Horizontal) {
				var len;
				if(this.model.precision=="exact")
					len = (value % 1).toFixed(1);
				else if(this.model.precision=="half")
					len = (value%1>0.5) ? 1 : 0.5;
				else
					len = 1;
				value = ((value % 1).toFixed(1) != 0 ? len : (value / this._CurrentIndex)) * this.model.shapeWidth;
				for (var i = 0; i < index; i++) {
					$(this._shapes[i]).css({ width: this.model.shapeWidth + "px" });
				}
				if (this._shapes != null)
					$(this._shapes[index - 1]).css({ width: value + "px" });
            }
            else {
                value = ((value % 1).toFixed(1) != 0 ? (value % 1).toFixed(1) : (value / this._CurrentIndex)) * this.model.shapeHeight;
                for (var i = 0; i < index; i++) {
                    $(this._shapes[i]).css({ height: this.model.shapeHeight + "px" });
                }
                if (this._shapes != null) $(this._shapes[index - 1]).css({ height: value + "px" });
            }
        },

        /**
* To refresh the rating control values.
* @private
*/
        _reset: function () {
            var prevValue;
            if (!this.model.enabled) return false;
            $(this._shapes).removeClass('active').removeClass('selected').addClass('inactive');
            prevValue = this.value();
            this.value(0);
            this._CurrentIndex = 0;
            //Update Hidden field
            this.element.value = this._CurrValue;

            ////Fire Value Change event
            this._valueChanged(prevValue);
        },
        /**
* To fill exact precision on mouse move
* @private
*/
        _fillExactPrecision: function (element, position) {
            var index = this._shapes.index(element) + (this.model.minValue / this.model.incrementStep) + 1;
            var option = this.model;
            if (option.orientation == ej.Rating.Orientation.Horizontal) {
                for (var i = 0; i < this._shapes.length; i++) {
                    if (i < index)
                        $(this._shapes[i]).css({ width: option.shapeWidth + "px" });
                    else
                        $(this._shapes[i]).css({ width: "0px" });
                }
                //Set width and title
                $(element).css({ width: position + "px" });
                this.toolTipValue = ((index - 1) * option.incrementStep + (position / option.shapeWidth) * option.incrementStep).toFixed(1);
            }
            else {
                for (var i = 0; i < index; i++) {
                    $(this._shapes[i]).css({ height: option.shapeHeight + "px" });
                }
                for (var i = index; i < this._shapes.length; i++) {
                    $(this._shapes[i]).css({ height: "0px" });
                }
                //Set width and title
                $(element).css({ height: position + "px" });
                this.toolTipValue = ((index - 1) * option.incrementStep + (position / option.shapeHeight) * option.incrementStep).toFixed(1);
            }
        },

        /**
* To fill half precision on mouse move
* @private
*/
        _fillHalfPrecision: function (element, position) {
            var index = this._shapes.index(element) + (this.model.minValue / this.model.incrementStep) + 1;
            var options = this.model;
            if (options.orientation == ej.Rating.Orientation.Horizontal) {
                for (var i = 0; i < this._shapes.length; i++) {
                    if (i < index)
                        $(this._shapes[i]).css({ width: options.shapeWidth + "px" });
                    else
                        $(this._shapes[i]).css({ width: "0px" });
                }
                if ((position + 1) % 2 == 0) {
                    position = options.shapeWidth / 2;
                    $(element).css({ width: position + "px" });
                    this.toolTipValue = ((index - 1) * options.incrementStep + (position / options.shapeWidth) * options.incrementStep).toFixed(1);
                }
                else {
                    position = options.shapeWidth;
                    $(element).css({ width: position + "px" });
                    this.toolTipValue = ((index - 1) * options.incrementStep + (position / options.shapeWidth) * options.incrementStep).toFixed(1);
                }
            }
            else {
                for (var i = 0; i < this._shapes.length; i++) {
                    if (i < index)
                        $(this._shapes[i]).css({ height: this._starHeight + "px" });
                    else
                        $(this._shapes[i]).css({ height: "0px" });
                }
                //Set width and title
                if (position <= options.shapeHeight / 2) {
                    position = options.shapeHeight / 2;
                    $(element).css({ height: position + "px" });
                    this.toolTipValue = ((index - 1) * options.incrementStep + (position / options.shapeHeight) * options.incrementStep).toFixed(1);
                }
                else {
                    position = options.shapeHeight;
                    $(element).css({ height: position + "px" });
                    this.toolTipValue = ((index - 1) * options.incrementStep + (position / options.shapeHeight) * options.incrementStep).toFixed(1);
                }
            }
        },
        /**
         * Section For handle clcik action in rating control.
		 * @private
         */
        _ClickHandler: function (e) {
            var prevValue;
            //Check if stars and rate it
            if (this.model.enabled) {
                var element;
                if (e.target.tagName == "LI")
                    element = e.target.firstChild;
                else if (e.target.parentNode.tagName == "LI")

                    element = e.target;
                if (element) {
                    var index = this._shapes.index(element) + 1;
                    for (var i = 0; i < index; i++) {
                        if (this._shapes[i]) {
                            $(this._shapes[i]).removeClass('inactive').removeClass('active').addClass('selected');
                        }
                    }
                    this._CurrentIndex = index;
                    index = index + (this.model.minValue / this.model.incrementStep);
                    var _IncrementStep = this.model.incrementStep;
                    var _CurrValue;
                    if (this.model.orientation == ej.Rating.Orientation.Horizontal)
                        _CurrValue = ((index - 1) * _IncrementStep + (element.clientWidth / this.model.shapeWidth) * _IncrementStep).toFixed(1);
                    else
                        _CurrValue = ((index - 1) * _IncrementStep + (element.clientHeight / this.model.shapeHeight) * _IncrementStep).toFixed(1);

                    prevValue = this.value();
                    //Update Hidden field        
                    this.element.value = _CurrValue;
                    this.value(_CurrValue);

                    //Fire Click event
                    //Client side Click event event handler
                   
                    this._trigger("click", { event: e, value: this.value(), prevValue: prevValue });
                    ////Fire Value Change event
                    this._valueChanged(prevValue);
                }

                //Check if reset button and reset
                if ($(e.target).hasClass('e-reset')) {
                    this._reset();
                }
            }
        },
        /**
 * Section For handle mouse over action in rating control.
 * @private
 */
        _MouseOverHandler: function (e) {
            if (this.model.enabled) {
                var element, target = e.target;
                if (e.type == 'touchmove') {
                    var coor = e.originalEvent.changedTouches[0];
                    target = document.elementFromPoint(coor.pageX, coor.pageY);
                }
                if (target.tagName == "LI")
                    element = target.firstChild;
                else if (target.parentNode.tagName == "LI")
                    element = target;
                else
                    return false;

                var index = this._shapes.index(element) + 1;
                for (var i = 0; i <= this._shapes.length; i++) {
                    if (this._shapes[i]) {
                        if (i < index)
                            $(this._shapes[i]).removeClass('inactive').removeClass('selected').addClass('active');
                        else
                            $(this._shapes[i]).removeClass('active').removeClass('selected').addClass('inactive');
                    }
                }
                //Client side onMouseOut event handler
               
                    this._trigger("mouseover", { event: e, index: index, value: this.value() });
            }
        },
        /**
 * Section For handle mouse out action in rating control.
 * @private
 */
        _MouseOutHandler: function (e) {
            if (!this.model.readOnly && this.model.enabled) {
                var index = this._CurrentIndex;
                if (index != 0) {
                    for (var i = 0; i < this._shapes.length; i++) {
                        if (this._shapes[i]) {
                            if (i < index)
                                $(this._shapes[i]).removeClass('active').removeClass('inactive').addClass('selected');
                            else
                                $(this._shapes[i]).removeClass('active').addClass('inactive');
                        }
                    }
                } else
                    $(this._shapes).removeClass('active').addClass('inactive');
                //On mouse out, keep selected the stars w.r.t current Value
                if (this.model.precision !== ej.Rating.Precision.Full)
                    this._valueRefresh(index);
                //Client side onMouseOut event handler
                
                    this._trigger("mouseout", { event: e, value: this.value() });
            }
            this._hideTooltip(1000);
        },
        /**
 * Section For handle mouse move action in rating control.
 * @private
 */
        _MouseMoveHandler: function (e) {
            if (!this.model.readOnly && this.model.enabled) {
                var element, position, target = e.target;
                if (e.type == 'touchmove') {
                    var coor = e.originalEvent.changedTouches[0];
                    target = document.elementFromPoint(coor.pageX, coor.pageY);
                }
                if (target.tagName == "LI")
                    element = target.firstChild;
                else if (target.parentNode.tagName == "LI")
                    element = target;
                else
                    return false;
                if (this.model.orientation == ej.Rating.Orientation.Horizontal)
                    if (ej.isNullOrUndefined(e.offsetX))
                        position = e.pageX - $(target).offset().left;
                    else
                        position = e.offsetX + 1;
                else {
                    if (ej.isNullOrUndefined(e.offsetY))
                        position = e.pageY - $(target).offset().top;
                    else
                        position = e.offsetY + 1;
                }
                this.toolTipValue = (this.model.minValue + (this._shapes.index(element) + 1)) * this.model.incrementStep;
                if (this.model.precision == ej.Rating.Precision.Exact)
                    this._fillExactPrecision(element, position);
                else if (this.model.precision == ej.Rating.Precision.Half)
                    this._fillHalfPrecision(element, Math.round(position));
            } else {
                this.toolTipValue = (this.value() == null || this.value() == "" ? 0 : this.value()) + ' / ' + this.model.maxValue;
            }
            $(e.target).attr("aria-label", this.toolTipValue);
            this._showhideTooltip(e.target);
        },
        /**
* To enable tooltip option
* @private
*/
        _showTooltip: function (element) {
            if (this.model.showTooltip) {
                $('.e-tooltip').remove();
                this.tooltip = ej.buildTag("div#" + this.element.prop("id") + "_tooltip.e-tooltip " + this.model.cssClass + " e-corner-all", "", {}, { role: "tooltip" });
                $("body").append(this.tooltip);
                this._isTooltip = true;
                this._setTooltipPosition(element);
            }
        },
        /**
* To hide the tooltip.
* @private
*/
        _hideTooltip: function (animationSpeed) {
            if (this.model.showTooltip) {
                $(this.tooltip).fadeOut(animationSpeed, function () {
                    $('.e-tooltip').remove();
                });
                this._isTooltip = false;
            }
        },
        /**
* Validates tooltip option is enabled or not
* @private
*/
        _showhideTooltip: function (element) {
            if (this.model.showTooltip) {
                this._showTooltip(element);
            }
        },
        /**
* To set the tooltip position
* @private
*/
        _setTooltipPosition: function (element) {
            if (this.model.showTooltip) {
                this._updateTooltipValue();
                var top, left, remainLeft, remainTop, handle, gap = 5; // gap -> distance between tooltip and slider
                handle = $(element);

                if (this.model.orientation == "vertical") {
                    remainTop = (this.tooltip.outerHeight() - handle.outerHeight()) / 2;
                    remainLeft = handle.outerWidth() + gap;
                    top = handle.offset().top - remainTop;
                    left = handle.offset().left + remainLeft;
                }
                else {
                    remainLeft = (this.tooltip.outerWidth() - handle.outerWidth()) / 2;
                    remainTop = this.tooltip.outerHeight() + gap;
                    top = handle.offset().top - remainTop;
                    left = handle.offset().left - remainLeft;
                }
                this.tooltip.css({ "top": top, "left": left });
            }
        },
        /**
* To update the tooltip value based on current value.
* @private
*/
        _updateTooltipValue: function () {
            //var val = this._getCurrentHandleValue();
            //if (this.model.range != "true")
            this.tooltip[0].innerHTML = this.toolTipValue;
            //else
            //    this.tooltip[0].innerHTML = val[0] + " - " + val[1];
        },

        //-------------------- Event Wire-up -------------------------//
        /**
* Wiring the events to Rating control		
* @private
*/
        _wireEvents: function () {
            //tabs Click evnts
            if (!this.model.readOnly) {
                this._on(this._mainDiv, "mousedown", this._ClickHandler);
                this._on(this._mainDiv.find("li"), "mouseenter touchmove", this._MouseOverHandler);
            }
            this._on(this._mainDiv.find("li"), "mouseleave touchend", this._MouseOutHandler);
            //if (this.model.precision !== ej.Rating.Precision.Full) {
            this._on(this._mainDiv.find("li"), ej.eventType.mouseMove, this._MouseMoveHandler);
            //}
        },
        //-------------------- Event UnWire-up -------------------------//
        /**
* To UnWire the binded events from Rating control		
* @private
*/
        _unWireEvents: function () {
            this._mainDiv.find("li").unbind("mouseenter touchmove");
            this._mainDiv.find("li").unbind("mouseleave touchend");
            this._mainDiv.unbind("mousedown");
            if (this.model.precision !== ej.Rating.Precision.Full) {
                this._mainDiv.find("li").unbind(ej.eventType.mouseMove);
            }
        },
        /**
* Section to specify value changed		
* @private
*/
        _valueChanged: function (previous) {
            //Client side onMouseOut event handler
           
            this._trigger("change", { value: this.value(), prevValue: previous });
        },

        // ------------------Client side methods-------------------------//
        /**
* To reset the rating value
* @return jQuery
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* $("#rating").ejRating();
* // Reset Rating
* var ratingObj = $("#rating").data("ejRating");
* ratingObj.reset(); // reset the rating values
* &lt;/script&gt;
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* $("#rating").ejRating();
* // reset the rating values
* $("#rating").ejRating("reset");
* &lt;/script&gt;
* @memberof ejRating
* @instance
 */
        reset: function () {
            /// <summary>To Reset the Rating control</summary>
            this._reset();
        },
        /**
* To show the rating control
* @return jQuery
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* $("#rating").ejRating();
* // Show Rating
* var ratingObj = $("#rating").data("ejRating");
* ratingObj.show(); // shows the rating control
* &lt;/script&gt;
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* $("#rating").ejRating();
* // show the rating control
* $("#rating").ejRating("show");
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
        show: function () {
            /// <summary>To Show the Rating control</summary>
            if (!this.model.enabled) return false;
            this._mainDiv.css("visibility", "visible");
        },
        /**
* To hide the rating control
* @return jQuery
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* $("#rating").ejRating();
* // Hide Rating
* var ratingObj = $("#rating").data("ejRating");
* ratingObj.hide(); // hides the rating control
* &lt;/script&gt;
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* $("#rating").ejRating();
* // hide the rating control
* $("#rating").ejRating("hide");
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
        hide: function () {
            /// <summary>To Hide the Rating control</summary>
            if (!this.model.enabled) return false;
            this._mainDiv.css("visibility", "hidden");
        },
  
        _showResetButton: function () {
            /// <summary>To Show the Reset Button</summary>
            if (!this.model.enabled) return false;
            this._createReset();
        },
      
        _hideResetButton: function () {
            /// <summary>To Hide the Reset Button</summary>
            if (!this.model.enabled) return false;
            this._mainDiv.find("div.e-reset").hide()
        },
        /**
* To get the current value of rating control
* @return Current Rating value
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* $("#rating").ejRating();
* // Get current value of rating
* var ratingObj = $("#rating").data("ejRating");
* ratingObj.getValue(); // get the current value of rting
* &lt;/script&gt;
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* $("#rating").ejRating();
* // To get the current value of rating
* $("#rating").ejRating("getValue");
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
        getValue: function () {
            /// <summary>To get current value of Rating control</summary>
            return this.value() == null || this.value() == "" ? "" : this.value();
        },
        /**
* To set the current value of rating control
* @return jQuery
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* $("#rating").ejRating();
* // Set current value of rating
* var ratingObj = $("#rating").data("ejRating");
* ratingObj.setValue(); // set the current value of rating
* &lt;/script&gt;
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* $("#rating").ejRating();
* // To set the current value of rating
* $("#rating").ejRating("setValue");
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
        setValue: function (value) {
            /// <summary>To set current value of Rating control</summary>
            if (!this.model.enabled) return false;
            if (value != null) {
                this.value(value);
                $(this._shapes).removeClass('selected').addClass('inactive');
                this._initCurrentValue();
            }
        },
        /**
* user can refresh the rating control to identify changes
* @return jQuery
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* $("#rating").ejRating();
* // Refresh the rating control
* var ratingObj = $("#rating").data("ejRating");
* ratingObj.refresh(); // refreshes the rating control
* &lt;/script&gt;
* @example 
* &lt;input id="rating"&gt;&lt;/input&gt; <br> 
* &lt;script&gt;
* $("#rating").ejRating();
* // To refresh the rating values
* $("#rating").ejRating("refresh");
* &lt;/script&gt;
* @memberof ejRating
* @instance
*/
        refresh: function () {
            this._destroy();
            this._unWireEvents();
            this._initialize();
        }
    });
    /**
 * Enum for various rating precisions	 
 * @enum {string}
 * @global 
 */
    ej.Rating.Precision = {
        /**  Allows user select full shape of Rating. */
        Full: "full",
        /**  Allows user select half shape of Rating. */
        Half: "half",
        /**  Allows user select exact shape of Rating. */
        Exact: "exact"
    }
    /**
* Enum for various rating orientations	 
* @enum {string}
* @global 
*/
    ej.Rating.Orientation = {
        /**  Renders Rating control in horizontal direction. */
        Horizontal: "horizontal",
        /**  Renders Rating control in vertical direction. */
        Vertical: "vertical"
    }
})(jQuery, Syncfusion);;