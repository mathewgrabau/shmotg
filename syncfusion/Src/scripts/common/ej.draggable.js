/*!
*  filename: ej.draggable.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to drag the html elements
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
	* @class ejDraggable
	* @requires jQuery
	* @requires ej.core
	* @classdesc Custom Design for dragging HTML elements.
	* @example 
	* &lt;div  id="dragable" &gt;&lt;/ div &gt; <br> 
	* &lt;script&gt;
	* // Create Dragable
    * $('#dragable').ejDraggable(); 	
	* &lt;/script&gt;
	*/
    ej.widget("ejDraggable", "ej.Draggable", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span", "a"],

        // default model
        defaults: {
            /**		
			* Used to group sets of draggable and droppable items, in addition to droppable's accept option. A draggable with the same scope value as a droppable will be accepted by the droppable.
			* @default 'default'
			* @type {string}
			* @example 
			* //To set scope API value during initialization  
			* 	$("#dragable").ejDraggable({ scope: 'default' });				* 
			* @example 
			* //Get or set the scope API, after initialization:<br>
			*	//Gets the scope value  
			*	$("#dragable").ejDraggable('option', 'scope');<br>			
			* @memberof ejDraggable
			* @instance
			*/
            scope: 'default', /*Used to group sets of draggable and droppable items, in addition to droppable's accept option. A draggable with the same scope value as a droppable will be accepted by the droppable.*/
            /**		
			* If specified, restricts drag start click to the specified element(s).
			* @default null
			* @type {string}
			* @example 
			* //To set handle API value during initialization  
			* 	$("#dragable").ejDraggable({ handle: null });				* 
			* @example 
			* //Get or set the handle API, after initialization:<br>
			*	//Gets the handle value  
			*	$("#dragable").ejDraggable('option', 'handle');<br>			
			* @memberof ejDraggable
			* @instance
			*/
            handle: null,  /*If specified, restricts drag start click to the specified element(s).*/
            /**		
			* If Drag area is specified.
			* @default false
			* @type {boolean}
			* @example 
			* //To set dragArea API value during initialization  
			* 	$("#dragable").ejDraggable({ dragArea: true });				* 
			* @example 
			* //Get or set the dragArea API, after initialization:<br>
			*	//Gets the dragArea value  
			*	$("#dragable").ejDraggable('option', 'dragArea');<br>			
			* @memberof ejDraggable
			* @instance
			*/
            dragArea: false,
            /**		
            * If clone is specified.
            * @default false
            * @type {boolean}
            * @example 
            * //To set clone API value during initialization  
            * 	$("#dragable").ejDraggable({ clone: true });				* 
            * @example 
            * //Get or set the clone API, after initialization:<br>
            *	//Gets the clone value  
            *	$("#dragable").ejDraggable('option', 'clone');<br>			
            * @memberof ejDraggable
            * @instance
            */
            clone: false,
            /**		
            * Distance in pixels after mousedown the mouse must move before dragging should start. This option can be used to prevent unwanted drags when clicking on an element.
            * @default 1
            * @type {number}
            * @example 
            * //To set distance API value during initialization  
            * 	$("#dragable").ejDraggable({ distance: 1 });				* 
            * @example 
            * //Get or set the distance API, after initialization:<br>
            *	//Gets the distance value  
            *	$("#dragable").ejDraggable('option', 'distance');<br>			
            * @memberof ejDraggable
            * @instance
            */
            distance: 1, /* Distance in pixels after mousedown the mouse must move before dragging should start. This option can be used to prevent unwanted drags when clicking on an element. */
            /**		
            *Sets the offset of the dragging helper relative to the mouse cursor.
            * @default { top: -1, left: -2 }
            * @type {object}
            * @example 
            * //To set cursorAt API value during initialization  
            * 	$("#dragable").ejDraggable({ cursorAt:  { top: 1, left: -2 } });				* 
            * @example 
            * //Get or set the cursorAt API, after initialization:<br>
            *	//Gets the cursorAt value  
            *	$("#dragable").ejDraggable('option', 'cursorAt');<br>			
            * @memberof ejDraggable
            * @instance
            */
            cursorAt: { top: -1, left: -2 }, /* Sets the offset of the dragging helper relative to the mouse cursor.  */
            /**     
			* Supply a callback function to handle the drag start event as an init option.
			* @event
			* @name ejDraggable#dragStart 	
			* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			* @param {object}  argument.model returns the autocomplete model
			* @param {string}  argument.type returns the name of the event
			* @example 
			* //dragStart event for Draggable
            * $("#dragable").ejDraggable({ 
            *   	dragStart: function(args) {}
            * });      
			* @memberof ejDraggable
			* @instance
			*/
            dragStart: null, /* Supply a callback function to handle the drag start event as an init option. */
            /**     
			* This event is triggered when the mouse is moved during the dragging.
			* @event
			* @name ejDraggable#drag 	
			* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			* @param {object}  argument.model returns the autocomplete model
			* @param {string}  argument.type returns the name of the event
			* @example 
			* //drag event for Draggable
            * $("#dragable").ejDraggable({ 
            *   	drag: function(args) {}
            * });      
			* @memberof ejDraggable
			* @instance
			*/
            drag: null, /* This event is triggered when the mouse is moved during the dragging. */
            /**     
            * This event is triggered when the mouse is moved during the dragging.
            * @event
            * @name ejDraggable#dragStop 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the autocomplete model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * //dragStop event for Draggable
            * $("#dragable").ejDraggable({ 
            *   	dragStop: function(args) {}
            * });      
            * @memberof ejDraggable
            * @instance
            */
            dragStop: null, /* This event is triggered when dragging stops. */
            /**     
            * This event is triggered when dragging events are destroyed.
            * @event
            * @name ejDraggable#destroy 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the autocomplete model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * //destroy event for Draggable
            * $("#dragable").ejDraggable({ 
            *   	destroy: function(args) {}
            * });      
            * @memberof ejDraggable
            * @instance
            */
            destroy: null, /* This event is triggered when dragging events are destroyed. */
            /**     
            * This event is triggered when dragged.
            * @event
            * @name ejDraggable#helper 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the autocomplete model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * //helper event for Draggable
            * $("#dragable").ejDraggable({ 
            *   	helper: function () {
                return $('<div class="e-drag-helper" />').html("draggable").appendTo(document.body);}
            * });      
            * @memberof ejDraggable
            * @instance
            */
            helper: function () {
                return $('<div class="e-drag-helper" />').html("draggable").appendTo(document.body);
            }
        },

        // constructor function
        _init: function () {
            this.handler = function () { },
			this.resizables = {},
			helpers = {};
            this._wireEvents();
        },

        _setModel: function (options) {

        },
        /**
        * destroy in the dragable.
        * @return jQuery
        * @example 
        * &lt; div  id="dragable" &gt; &lt;/div &gt; <br> 
        * &lt;script&gt;
        * // Create dragableObj
        * var dragableObj  = $("#dragable").data("ejDraggable");
        * dragableObj.destroy(); 
        * &lt;/script&gt;
        *@memberof ejDraggable
        * @instance
        */
        // all events bound using this._on will be unbind automatically
        _destroy: function () {
            $(document)
                .unbind(ej.eventType.mouseUp, this._destroyHandler)
                .unbind(ej.eventType.mouseUp, this._dragStopHandler)
                .unbind(ej.eventType.mouseMove, this._dragStartHandler)
                .unbind(ej.eventType.mouseMove, this._dragHandler)
                .unbind('selectstart', false);

            // this._raise(e, this.destroy);

            ej.widgetBase.droppables[this.scope] = null;
            //helpers[this.handle] = null;
        },

        _initialize: function (e) {
            var ori = e;
            e.preventDefault();
            e = this._getCoordinate(e);
            this.target = $(ori.currentTarget);
            this._initPosition = { x: e.pageX, y: e.pageY };
            
            $(document).bind(ej.eventType.mouseMove, this._dragStartHandler).bind(ej.eventType.mouseUp, this._destroyHandler);
            if (!this.model.clone) {
                var _offset = this.element.offset();
                this._relXposition = e.pageX - _offset.left;
                this._relYposition = e.pageY - _offset.top;
            }
            $(document.documentElement).trigger(ej.eventType.mouseDown, ori); // The next statement will prevent 'mousedown', so manually trigger it.
           //return false;
        },
        _setDragArea: function () {
            var _dragElement = $(this.model.dragArea)[0]; if (!_dragElement) return;
            var over = ($(_dragElement).css("overflow") != 'hidden');

            this.dragArea = [
                (parseInt($(_dragElement).css("borderLeftWidth"), 10) || 0) + (parseInt($(_dragElement).css("paddingLeft"), 10) || 0),
                (parseInt($(_dragElement).css("borderTopWidth"), 10) || 0) + (parseInt($(_dragElement).css("paddingTop"), 10) || 0),
                (over ? Math.max(_dragElement.scrollWidth, _dragElement.offsetWidth) : _dragElement.offsetWidth) - (parseInt($(_dragElement).css("borderLeftWidth"), 10) || 0) - (parseInt($(_dragElement).css("paddingRight"), 10) || 0) - this.helper.outerWidth() - this.margins.left - this.margins.right,
                (over ? Math.max(_dragElement.scrollHeight, _dragElement.offsetHeight) : _dragElement.offsetHeight) - (parseInt($(_dragElement).css("borderTopWidth"), 10) || 0) - (parseInt($(_dragElement).css("paddingBottom"), 10) || 0) - this.helper.outerHeight() - this.margins.top - this.margins.bottom
            ];
            this.relativeArea = $(this.model.dragArea);
        },
        _dragStart: function (e) {
            var ori = e;
            e = this._getCoordinate(e);
            
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            };
            this.offset = this.element.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            this.position = this._getMousePosition(ori);
            var x = this._initPosition.x - e.pageX, y = this._initPosition.y - e.pageY;
            var distance = Math.sqrt((x * x) + (y * y));

            if (distance >= this.model.distance) {
                var dragTargetElmnt = this.model.handle = this.helper = this.model.helper({ sender: ori, element: this.target });
                if (this.model.dragArea)
                    this._setDragArea();

                //if (!this.model.clone)
                //    this.position.left = this.position.left - (ori.target.offsetWidth / 2);
                //this.position.top = this.position.top - (ori.target.offsetHeight - ori.offsetY);

                if (this.model.dragStart) {
                    var currTarget = null;
                    if (ori.type == 'touchmove') {
                        var coor = ori.originalEvent.changedTouches[0];
                        currTarget = document.elementFromPoint(coor.pageX, coor.pageY);
                    }
                    else currTarget = ori.originalEvent.target || ori.target;
                    if (this._trigger("dragStart", { event: ori, element: this.element, target: currTarget })) {
                        this._destroy();
                        return false;
                    }
                }

                $(document).unbind(ej.eventType.mouseMove, this._dragStartHandler).unbind(ej.eventType.mouseUp, this._destroyHandler)
                    .bind(ej.eventType.mouseMove, this._dragHandler).bind(ej.eventType.mouseUp, this._dragStopHandler).bind("selectstart", false);
                ej.widgetBase.droppables[this.model.scope] = {
                    draggable: this.element,
                    helper: dragTargetElmnt.css({ position: 'absolute', left: this.position.left, top: this.position.top }),
                    destroy: this._destroyHandler
                }
            }
        },

        _drag: function (e) {
            this.position = this._getMousePosition(e);
            if (this.position.top < 0)
                this.position.top = 0;
            if ($(document).height() < this.position.top)
                this.position.top = $(document).height();
            if ($(document).width() < this.position.left)
                this.position.left = $(document).width();
            var helperElement = ej.widgetBase.droppables[this.model.scope].helper;
            if (this.model.drag) {
                var currTarget = null;
                if (e.type == 'touchmove') {
                    var coor = e.originalEvent.changedTouches[0];
                    currTarget = document.elementFromPoint(coor.pageX, coor.pageY);
                }
                else currTarget = e.originalEvent.target || e.target;
                this._trigger("drag", { event: e, element: this.target, target: currTarget });// Raise the dragging event
            }
            ej.widgetBase.droppables[this.model.scope].helper.css({ left: this.position.left, top: this.position.top });
        },

        _dragStop: function (e) {
            if (e.type == 'mouseup' || e.type == 'touchend') 
                this._destroy(e);
            if (this.model.dragStop) {
                var currTarget = null;
                if (e.type == 'touchend') {
                    var coor = e.originalEvent.changedTouches[0];
                    currTarget = document.elementFromPoint(coor.pageX, coor.pageY);
                }
                else currTarget = e.originalEvent.target || e.target;
                this._trigger("dragStop", { event: e, element: this.target, target: currTarget });// Raise the dragstop event
            }
        },

        _wireEvents: function () {
            this._on(this.element, ej.eventType.mouseDown, this._initialize);
            this._dragStartHandler = $.proxy(this._dragStart, this);
            this._destroyHandler = $.proxy(this._destroy, this);
            this._dragStopHandler = $.proxy(this._dragStop, this);
            this._dragHandler = $.proxy(this._drag, this);
        },
        _getMousePosition: function (event) {
            event = this._getCoordinate(event);
            var pageX = this.model.clone ? event.pageX : event.pageX - this._relXposition;
            var pageY = this.model.clone ? event.pageY : event.pageY - this._relYposition;
            if (this.dragArea) {
                if (this.relativeArea) {
                    var co = this.relativeArea.offset();
                    _area = [this.dragArea[0] + co.left, this.dragArea[1] + co.top, this.dragArea[2] + co.left, this.dragArea[3] + co.top];
                }
                else {
                    _area = this.dragArea;
                }
                if (event.pageX - this.margins.left < _area[0]) pageX = _area[0] + this.margins.left;
                if (event.pageY - this.margins.top < _area[1]) pageY = _area[1] + this.margins.top;
                if (event.pageX - this.margins.left > _area[2]) pageX = _area[2] + this.margins.left;
                if (event.pageY - this.margins.top > _area[3]) pageY = _area[3] + this.margins.top;
            }
            return { left: pageX - this.margins.left - this.model.cursorAt.left, top: pageY - this.margins.top - this.model.cursorAt.top };
        },
        _getCoordinate: function (evt) {
            var coor = evt;
            if (evt.type == "touchmove" || evt.type == "touchstart" || evt.type == "touchend")
                coor = evt.originalEvent.changedTouches[0];
            return coor;
        }
    });

})(jQuery, Syncfusion);

/**
* @fileOverview Plugin to drop the html elements
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
   * @class ejDroppable
   * @requires jQuery
   * @requires ej.core
   * @classdesc Custom Design for droping HTML elements.
   * @example 
   * &lt;div  id="dropable" &gt;&lt;/ div &gt; <br> 
   * &lt;script&gt;
   * // Create Dragable
   * $('#dropable').ejDroppable(); 	
   * &lt;/script&gt;
   */
    // Example plugin creation code
    // sfSample is the plugin name 
    // "ej.Sample" is "namespace.className" will hold functions and properties

    ej.widget("ejDroppable", "ej.Droppable", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span", "a"],

        // default model
        defaults: {
            /**		
			* Used to accept the droppable items.
			* @default null
			* @type {object}
			* @example 
			* //To set scope API value during initialization  
			* 	$("#droppable").ejDroppable({ accept: null });				* 
			* @example 
			* //Get or set the accept API, after initialization:<br>
			*	//Gets the accept value  
			*	$("#droppable").ejDroppable('option', 'accept');<br>			
			* @memberof ejDroppable
			* @instance
			*/
            accept: null,
            /**		
			* Used to group sets of droppable items, in addition to droppable's accept option. A draggable with the same scope value as a droppable will be accepted by the droppable.
			* @default 'default'
			* @type {string}
			* @example 
			* //To set scope API value during initialization  
			* 	$("#droppable").ejDroppable({ scope: 'default' });				* 
			* @example 
			* //Get or set the scope API, after initialization:<br>
			*	//Gets the scope value  
			*	$("#droppable").ejDroppable('option', 'scope');<br>			
			* @memberof ejDroppable
			* @instance
			*/
            scope: 'default',
            /**     
			* This event is triggered when the mouse up is moved during the dragging.
			* @event
			* @name ejDroppable#drop 	
			* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			* @param {object}  argument.model returns the autocomplete model
			* @param {string}  argument.type returns the name of the event
			* @example 
			* //drop event for Droppable
            * $("#droppable").ejDroppable({ 
            *   	drop: function(args) {}
            * });      
			* @memberof ejDroppable
			* @instance
			*/
            drop: null,
            /**     
            * This event is triggered when the mouse  is moved over.
            * @event
            * @name ejDroppable#over 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the autocomplete model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * //drop event for Droppable
            * $("#droppable").ejDroppable({ 
            *   	over: function(args) {}
            * });      
            * @memberof ejDroppable
            * @instance
            */
            over: null,
            /**     
            * This event is triggered when the mouse  is moved out.
            * @event
            * @name ejDroppable#out 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the autocomplete model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * //drop event for Droppable
            * $("#droppable").ejDroppable({ 
            *   	out: function(args) {}
            * });      
            * @memberof ejDroppable
            * @instance
            */
            out: null
        },

        // constructor function
        _init: function () {
            if (this.model.accept) {
                $(this.element).delegate(this.accept, 'mouseenter', $.proxy(this._over, this))
							.delegate(this.accept, 'mouseup', $.proxy(this._drop, this))
							.delegate(this.accept, 'mouseleave', $.proxy(this._out, this));
            }
            else {
                $(this.element).bind('mouseup', $.proxy(this._drop, this));
                $(this.element).bind("mouseenter", $.proxy(this._over, this));
                $(this.element).bind("mouseleave", $.proxy(this._out, this));
            }
            this._on($(document), 'touchend', this._drop);
        },

        _setModel: function (options) {

        },
        /**
        * destroy in the Droppable.
        * @return jQuery
        * @example 
        * &lt; div  id="droppable" &gt; &lt;/div &gt; <br> 
        * &lt;script&gt;
        * // Create droppabaleObj
        * var droppabaleObj  = $("#droppable").data("ejDroppable");
        * droppabaleObj.destroy(); 
        * &lt;/script&gt;
        *@memberof ejDroppable
        * @instance
        */
        // all events bound using this._on will be unbind automatically
        _destroy: function () {

        },

        _over: function (e) {
            this._trigger("mouseover", e);  
        },
        _out: function (e) {
            this._trigger("mouseout", e);  
        },
        _drop: function (e) {
            var drag = ej.widgetBase.droppables[this.model.scope];
            var isDragged = !ej.isNullOrUndefined(drag.helper) && drag.helper.is(":visible");
            var area = this._isDropArea(e);
            if (drag && !ej.isNullOrUndefined(this.model.drop) && isDragged && area.canDrop) {
                this.model.drop($.extend(e, { dropTarget: area.target }, true), drag);
            }
        },
        _isDropArea: function (e) {
            // check for touch devices only
            var area = { canDrop: true, target: $(e.target) };
            if (e.type == "touchend") {
                var coor = e.originalEvent.changedTouches[0], _target;
                _target = document.elementFromPoint(coor.pageX, coor.pageY);
                area.canDrop = false;
                var _parents = $(_target).parents();

                for (var i = 0; i < this.element.length; i++) {
                    if ($(_target).is($(this.element[i]))) area = { canDrop: true, target: $(_target) };
                    else for (var j = 0; j < _parents.length; j++) {
                        if ($(this.element[i]).is($(_parents[j]))) {
                            area = { canDrop: true, target: $(_target) };
                            break;
                        }
                    }
                    if (area.canDrop) break;
                }
            }
            return area;
        }
    });

})(jQuery, Syncfusion);

/**
* @fileOverview Plugin to resize the Html elements
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
    * @class ejResizable
    * @requires jQuery
    * @requires ej.core
    * @classdesc Custom Design for resizing HTML elements.
    * @example 
    * &lt;div  id="resizing" &gt;&lt;/ div &gt; <br> 
    * &lt;script&gt;
    * // Create resizing
    * $('#resizing').ejResizable(); 	
    * &lt;/script&gt;
    */
    ej.widget("ejResizable", "ej.resizable", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span", "a"],

        // default model
        defaults: {
            /**		
           * Used to group sets of resizeable items.
           * @default 'default'
           * @type {string}
           * @example 
           * //To set scope API value during initialization  
           * 	$("#resizing").ejResizable({ scope: 'default' });				* 
           * @example 
           * //Get or set the scope API, after initialization:<br>
           *	//Gets the scope value  
           *	$("#resizing").ejResizable('option', 'scope');<br>			
           * @memberof ejResizable
           * @instance
           */
            scope: 'default',
            /**		
			* If specified, restricts resize start click to the specified element(s).
			* @default null
			* @type {string}
			* @example 
			* //To set handle API value during initialization  
			* 	$("#resizing").ejResizable({ handle: null });				* 
			* @example 
			* //Get or set the handle API, after initialization:<br>
			*	//Gets the handle value  
			*	$("#resizing").ejResizable('option', 'handle');<br>			
			* @memberof ejResizable
			* @instance
			*/
            handle: null,
            /**		
            * Distance in pixels after mousedown the mouse must move before resizing should start. This option can be used to prevent unwanted drags when clicking on an element.
            * @default 1
            * @type {number}
            * @example 
            * //To set distance API value during initialization  
            * 	$("#resizing").ejResizable({ distance: 1 });				* 
            * @example 
            * //Get or set the distance API, after initialization:<br>
            *	//Gets the distance value  
            *	$("#resizing").ejResizable('option', 'distance');<br>			
            * @memberof ejResizable
            * @instance
            */
            distance: 1,
            /**		
            *Sets the max height for resizing
            * @default null
            * @type {number}
            * @example 
            * //To set maxHeight API value during initialization  
            * 	$("#resizing").ejResizable({ maxHeight: null });				* 
            * @example 
            * //Get or set the maxHeight API, after initialization:<br>
            *	//Gets the maxHeight value  
            *	$("#resizing").ejResizable('option', 'maxHeight');<br>			
            * @memberof ejResizable
            * @instance
            */
            maxHeight: null,
            /**		
            *Sets the max width for resizing
            * @default null
            * @type {number}
            * @example 
            * //To set maxWidth API value during initialization  
            * 	$("#resizing").ejResizable({ maxWidth: null });				* 
            * @example 
            * //Get or set the maxWidth API, after initialization:<br>
            *	//Gets the maxWidth value  
            *	$("#resizing").ejResizable('option', 'maxWidth');<br>			
            * @memberof ejResizable
            * @instance
            */
            maxWidth: null,
            /**		
            *Sets the min Height for resizing
            * @default 10
            * @type {number}
            * @example 
            * //To set minHeight API value during initialization  
            * 	$("#resizing").ejResizable({ minHeight: null });				* 
            * @example 
            * //Get or set the minHeight API, after initialization:<br>
            *	//Gets the minHeight value  
            *	$("#resizing").ejResizable('option', 'minHeight');<br>			
            * @memberof ejResizable
            * @instance
            */
            minHeight: 10,
            /**		
            *Sets the min Width for resizing
            * @default 10
            * @type {number}
            * @example 
            * //To set minWidth API value during initialization  
            * 	$("#resizing").ejResizable({ minWidth: null });				* 
            * @example 
            * //Get or set the minWidth API, after initialization:<br>
            *	//Gets the minWidth value  
            *	$("#resizing").ejResizable('option', 'minWidth');<br>			
            * @memberof ejResizable
            * @instance
            */
            minWidth: 10,
            /**		
            *Sets the offset of the resizing helper relative to the mouse cursor.
            * @default { top: -1, left: -2 }
            * @type {object}
            * @example 
            * //To set cursorAt API value during initialization  
            * 	$("#resizing").ejResizable({ cursorAt:  { top: 1, left: -2 } });				* 
            * @example 
            * //Get or set the cursorAt API, after initialization:<br>
            *	//Gets the cursorAt value  
            *	$("#resizing").ejResizable('option', 'cursorAt');<br>			
            * @memberof ejResizable
            * @instance
            */
            cursorAt: { top: 1, left: 1 },
            /**     
            * This event is triggered when the resizing is start.
            * @event
            * @name ejResizable#resizeStart 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the autocomplete model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * //resizeStart event for Resizable
            * $("#resizing").ejResizable({ 
            *   	resizeStart: function(args) {}
            * });      
            * @memberof ejResizable
            * @instance
            */
            resizeStart: null,
            /**     
            * This event is triggered when the resizing in progress.
            * @event
            * @name ejResizable#resize 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the autocomplete model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * //resizeStart event for Resizable
            * $("#resizing").ejResizable({ 
            *   	resize: function(args) {}
            * });      
            * @memberof ejResizable
            * @instance
            */
            resize: null,
            /**     
            * This event is triggered when the resizing is stop.
            * @event
            * @name ejResizable#resizeStop 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the autocomplete model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * //resizeStop event for Resizable
            * $("#resizing").ejResizable({ 
            *   	resizeStop: function(args) {}
            * });      
            * @memberof ejResizable
            * @instance
            */
            resizeStop: null,
            /**     
           * This event is triggered when the widget destroys.
           * @event
           * @name ejResizable#resizeStop 	
           * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
           * @param {object}  argument.model returns the autocomplete model
           * @param {string}  argument.type returns the name of the event
           * @example 
           * //destroy event for Resizable
           * $("#resizing").ejResizable({ 
           *   	destroy: function(args) {}
           * });      
           * @memberof ejResizable
           * @instance
           */
            destroy: null,
            /**     
           * This event is triggered when resized.
           * @event
           * @name ejResizable#helper 	
           * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
           * @param {object}  argument.model returns the autocomplete model
           * @param {string}  argument.type returns the name of the event
           * @example 
           * //helper event for Resizable
           * $("#resizing").ejResizable({ 
           *   	helper: function () {
               return $('<div class="e-resize-helper" />').html("resizable").appendTo(document.body);}
           * });      
           * @memberof ejResizable
           * @instance
           */
            helper: function () {
                return $('<div class="e-resize-helper" />').html("resizable").appendTo(document.body);
            }
        },
        // constructor function
        _init: function () {
            this.target = this.element;
            if (this.handle != null) {
                $(this.target).delegate(this.handle, ej.eventType.mouseDown, $.proxy(this._mousedown, this))
                .delegate(this.handle, 'resizestart', this._blockDefaultActions);
            }
            else {
                //$(this.target).bind("mousedown", $.proxy(this._mousedown, this));
                $(this.target).bind("mouseover", $.proxy(this._mouseover, this));
                // .bind("resizestart", $.proxy(this, $.Handler(this._init, this)));
            }

            this._resizeStartHandler = $.proxy(this._resizeStart, this);
            this._destroyHandler = $.proxy(this._destroy, this);
            this._resizeStopHandler = $.proxy(this._resizeStop, this);
            this._resizeHandler = $.proxy(this._resize, this);
        },
        _mouseover: function (e) {
            if ($(e.target).hasClass("e-resizable")) {
                $(e.target).css({ cursor: "se-resize" });
                $(this.target).bind(ej.eventType.mouseDown, $.proxy(this._mousedown, this));
            }
            else {
                $(this.target).unbind(ej.eventType.mouseDown);
                $(this.target).css({ cursor: "" });
            }
        },
        _blockDefaultActions: function (e) {
            e.cancelBubble = true;
            e.returnValue = false;
            if (e.preventDefault) e.preventDefault();
            if (e.stopPropagation) e.stopPropagation();
        },
        _setModel: function (options) {

        },
        _mousedown: function (e) {
            var ori = e;
            e = this._getCoordinate(e);
            this.target = $(ori.currentTarget);
            this._initPosition = { x: e.pageX, y: e.pageY };

            $(document).bind(ej.eventType.mouseMove, this._resizeStartHandler).bind(ej.eventType.mouseUp, this._destroyHandler);

            $(document.documentElement).trigger(ej.eventType.mouseDown, ori); // The next statement will prevent 'mousedown', so manually trigger it.
            return false;
        },

        _resizeStart: function (e) {
            if ($(e.target).hasClass("e-resizable")) {
                e = this._getCoordinate(e);
                var x = this._initPosition.x - e.pageX, y = this._initPosition.y - e.pageY;
                var distance = Math.sqrt((x * x) + (y * y));
                if (distance >= this.model.distance) {
                    if (this.model.resizeStart != null)
                        this.model.resizeStart({ element: this.target });  // Raise the resize start event
                    var resizeTargetElmnt = this.model.helper({ element: this.target });
                    var pos = this.getElementPosition(resizeTargetElmnt);
                    $(document).unbind(ej.eventType.mouseMove, this._resizeStartHandler).unbind(ej.eventType.mouseUp, this._destroyHandler)
                        .bind(ej.eventType.mouseMove, this._resizeHandler).bind(ej.eventType.mouseUp, this._resizeStopHandler).bind("selectstart", false);
                    ej.widgetBase.resizables[this.scope] = {
                        resizable: this.target,
                        helper: resizeTargetElmnt.css({ width: (e.pageX - pos.left) + this.model.cursorAt.left, height: (e.pageY - pos.top) + this.model.cursorAt.top }),
                        destroy: this._destroyHandler
                    }
                }
            }
        },

        _resize: function (e) {
            e = this._getCoordinate(e);
            if (this.model.resize != null)
                this.model.resize({ element: this.target });  // Raise the drag start event
            var pos = this.getElementPosition(ej.widgetBase.resizables[this.scope].helper);
            var _width = (e.pageX - pos.left) + this.model.cursorAt.left;
            var _height = (e.pageY - pos.top) + this.model.cursorAt.top;
            if (_width < this.model.minWidth)
                _width = this.model.minWidth;
            if (_height < this.model.minHeight)
                _height = this.model.minHeight;
            if (this.model.maxHeight != null && _height > this.model.maxHeight)
                _height = this.model.maxHeight;
            if (this.model.maxWidth != null && _width > this.model.maxWidth)
                _width = this.model.maxWidth;
            ej.widgetBase.resizables[this.scope].helper.css({ width: _width, height: _height });
        },

        _resizeStop: function (e) {
            if (this.model.resizeStop != null)
                this.model.resizeStop({ element: this.target });  // Raise the resize stop event
            if (e.type == 'mouseup' || e.type == 'touchend')
                this._destroy(e);
        },
        /**
        * destroy in the Resizable.
        * @return jQuery
        * @example 
        * &lt; div  id="resizing" &gt; &lt;/div &gt; <br> 
        * &lt;script&gt;
        * // Create resizingObj
        * var resizingObj  = $("#resizing").data("ejResizable");
        * resizingObj.destroy(); 
        * &lt;/script&gt;
        *@memberof ejResizable
        * @instance
        */
        _destroy: function (e) {
            $(document)
                .unbind(ej.eventType.mouseUp, this._destroyHandler)
                .unbind(ej.eventType.mouseUp, this._resizeStopHandler)
                .unbind(ej.eventType.mouseMove, this._resizeStartHandler)
                .unbind(ej.eventType.mouseMove, this._resizeHandler)
                .unbind('selectstart', false);

            // this._raise(e, this.destroy);

            ej.widgetBase.resizables[this.scope] = null;
            //helpers[this.handle] = null;
        },

        getElementPosition: function (elemnt) {
            if (elemnt != null && elemnt.length > 0)
                return {
                    left: elemnt[0].offsetLeft,
                    top: elemnt[0].offsetTop
                };
            else
                return null;
        },
        _getCoordinate: function (evt) {
            var coor = evt;
            if (evt.type == "touchmove" || evt.type == "touchstart" || evt.type == "touchend")
                coor = evt.originalEvent.changedTouches[0];
            return coor;
        }
    });

})(jQuery, Syncfusion);;