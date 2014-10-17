/*!
*  filename: ej.scroller.js
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

(function ($, ej, window, undefined) {
    'use strict';
    /**
* @namespace ej
* @class ejScroller
* @requires jQuery
* @requires ej.core.js
* @requires ej.scroller.js
* @requires ej.draggable.js
* @classdesc Custom Design for Html Scroller control.
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
		*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
         *&lt;b&gt;A controller*&lt;/b&gt;  can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
         It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt;     
*&lt;/div&gt; <br> 
* &lt;script&gt;
* // Create Scroller
* $('#scrollcontent').ejScroller(); 	
* &lt;/script&gt;
*/
    ej.widget("ejScroller", "ej.Scroller", {
        defaults: {
            /**		
* Specifies the height of Scroll panel and scrollbars.
* @default 250
* @type {number}
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set height API value during initialization  
* 	$("#scrollcontent").ejScroller({height: 200 });	
* &lt;/script&gt;
 * @memberof ejScroller
* @instance
*/
            height: 250,
            /**		
* Specifies the width of Scroll panel and scrollbars.
* @default 0
* @type {number}
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set width API value during initialization
* 	$("#scrollcontent").ejScroller({width: 500 });	
* &lt;/script&gt;
* @memberof ejScroller
* @instance
*/
            width: 0,
            /**		
* While press on the arrow key the scrollbar position added to the given pixel value.
* @default 57
* @type {number}
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set scrollOneStepBy API value during initialization
* 	$("#scrollcontent").ejScroller({scrollOneStepBy: 40 });	
* &lt;/script&gt;
* @memberof ejScroller
* @instance
*/
            scrollOneStepBy: 57,
            /**		
* Specifies the button height for vertical scrollbar; for horizontal scrollbar specifies the width of the button in the scrollbar.
* @default 18
* @type {number}
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set Button Size of Scroller during initialization
* 	$("#scrollcontent").ejScroller({buttonSize: 20 });	
* &lt;/script&gt;
* @memberof ejScroller
* @instance
*/
            buttonSize: 18,
            /**		
* The Scroller content and scrollbars move left with given value. 
* @default 0
* @type {number}
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set Scroll left API during initialization
* 	$("#scrollcontent").ejScroller({scrollLeft: 40 });	
* &lt;/script&gt;
* @memberof ejScroller
* @instance
*/
            scrollLeft: 0,
            /**		
* The Scroller content and scrollbars move to top position with specified value. 
* @default 0
* @type {number}
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set Scroll top API during initialization
* 	$("#scrollcontent").ejScroller({scrollTop: 40 });	
* &lt;/script&gt;
* @memberof ejScroller
* @instance
*/
            scrollTop: 0,
            /**		
* Indicates the target area to which scroller have to appear. 
* @default null
* @type {string}
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set Scroller for the specified target panel during initialization
* 	$("#scrollcontent").ejScroller({targetPane: "contentarea" });	
* &lt;/script&gt;
* @memberof ejScroller
* @instance
*/
            targetPane:null,
            /**		
* Set the Scrollbar height and width for this API; if vertical scrollbar,apply the width else apply the height.
* @default 18
* @type {number}
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* //Enable scrollerSize on initialization 
* 	//To set scroller Size API value 
* 	$("#scrollcontent").ejScroller({scrollerSize: 20 });	
* &lt;/script&gt;
* @memberof ejScroller
* @instance
*/
            scrollerSize: 18,
            /**		
* Save current model value to browser cookies for state maintanence. While refresh the page Rating control values are retained.  
* @default false
* @type {boolean}
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* //Enable enablePersistence API on initialization
* 	$("#scrollcontent").ejScroller({enablePersistence: true });
* &lt;/script&gt;	
* @memberof ejScroller
* @instance
*/
            enablePersistence: false,
            /**		
* Indicates the Right to Left direction to scroller  
* @default undefined
* @type {boolean}
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* //Enable enableRTL API on initialization
* 	$("#scrollcontent").ejScroller({enableRTL: true });	
* &lt;/script&gt;	
* @memberof ejScroller
* @instance
*/
            enableRTL: undefined,
            /**		
* Enables or Disbale the touch Scroll  
* @default true
* @type {boolean}
* @example 

* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* //Disable Touch Scroll API on initialization
* 	$("#scrollcontent").ejScroller({enableTouchScroll: false });	
* &lt;/script&gt;	
* @memberof ejScroller
* @instance
*/
            enableTouchScroll: true,
/**     
* Fires when Scroller control is created.
* @event
* @name ejScroller#create	
* @param {Object} argument Event parameters from scroller     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the scroller model
* @param {string}  argument.type returns the name of the event.
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* //create event for scroller
* $("#scrollcontent").ejScroller({
*    create: function (args) {}
* });   
* &lt;/script&gt;	  
* @memberof ejScroller
* @instance
*/
            create: null,
            /**     
* Fires when Scroller control is destroyed.
* @event
* @name ejScroller#destroy	
* @param {Object} argument Event parameters from scroller     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the scroller model
* @param {string}  argument.type returns the name of the event.
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* //destroy event for scroller
* $("#scrollcontent").ejScroller({
*    destroy: function (args) {}
* });  
* &lt;/script&gt;	    
* @memberof ejScroller
* @instance
*/
            destroy: null
        },
        validTags: ["div"],
        type: "transclude",
        /**
* Specify the data types for default properties 
* @private
*/
        dataTypes: {
            buttonSize: "number",
            scrollOneStepBy: "number"
        },
        observables: ["scrollTop", "scrollLeft"],
        scrollTop: ej.util.valueFunction("scrollTop"),
        scrollLeft: ej.util.valueFunction("scrollLeft"),
        /**
* Specifies the keys used for keyboard navigation. 
* @private
*/
        keyConfigs: {
            up: "38",
            down: "40",
            left: "37",
            right: "39",
            pageUp: "33",
            pageDown: "34",
            pageLeft: "ctrl+37",
            pageRight: "ctrl+39"
        },
        /**
* Specify the content area for which the scrollerbar is specified.
* @private
*/
        content: function () {
            if (!this._content || !this._content.length || !this._content[0].offsetParent)
                this._content = this.element.children("div").first().addClass("e-content");

            return this._content;
        },
        _setFirst: true,
        /**
* Create the scroller widget
* @private
*/
        _init: function () {
            this.element.addClass("e-widget");
            this.content();
            this._ensureScrollers();
            if (this.model.enableRTL === undefined) {
                this.model.enableRTL = this.element.css("direction") === "rtl";
            }
            if (this.model.enableRTL) {
                this.element.addClass("e-rtl");
            }
            if (this.scrollLeft())
                this.content().scrollLeft(this.scrollLeft());
            if (this.scrollTop())
                this.content().scrollTop(this.scrollTop());

            this._on(this.content(), "scroll", this._scroll);
            this.model.targetPane != null && this._on(this.content().find(this.model.targetPane), "scroll", this._scroll);
        },
        /**
* Ensures the scrollbar height and width.
* @private
*/
        _ensureScrollers: function () {
            var jqVersion = $.fn.jquery, height, width;
            if (this.model.height) {
                this.element.height(this.model.height);
            }
            if (this.model.width) {
                this.element.width(this.model.width);
            }

            this._off(this.content(), "mousedown touchstart");

            if (this.isVScroll()) {
                if (!this._v) {
                    var d1 = this._createScroller("Height", "Y", "Top", "e-v", this.isHScroll());

                    if (this.model.enableTouchScroll)
                        this._on(this.content(), "mousedown touchstart", { d: d1 }, this._mouseDownOnContent);
                }
            } else {
                this._v = null;
                this.element.find(".e-vscroll").remove();
            }
            if (this.isHScroll()) {
                if (!this._h) {
                    var d2 = this._createScroller("Width", "X", "Left", "e-h", this.isVScroll());

                    if (this.model.enableTouchScroll)
                        this._on(this.content(), "mousedown touchstart", { d: d2 }, this._mouseDownOnContent);
                }
            } else {
                this.element.find(".e-hscroll").remove();
                this._h = null;
            }

            if (!this._v && !this._h)
                this.content().css({ width: "auto", height: "auto" });

            if (this.element.find(".e-hscroll").length > 0)
                !this.element.hasClass("e-hscrollbar") && this.element.addClass("e-hscrollbar");
            else {
                if (this.element.hasClass("e-hscrollbar")) {
                    this.element.removeClass("e-hscrollbar");
                    if (this._v) {
                        this.content().outerHeight(this.content().outerHeight() - 1);
                    }
                }
            }

            if (this.isHScroll() || this.isVScroll()) {
                this.content().addClass("e-content");
                jqVersion === "1.7.1" || jqVersion === "1.7.2" ? (height = "height", width = "width") : (height = "outerHeight", width = "outerWidth");
                this.content()[height](this.element.height() - (this.isHScroll() ? this.model.scrollerSize : 0));
                this.content()[width](this.element.width() - (this.isVScroll() ? this.model.scrollerSize : 0));
            } else
                this.content().removeClass("e-content");
        },
        /**
* Returns horizontal scrollbar is shown or not.		
* @return Boolean value
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;

* // To check horizontal scrollbar is rendered or not
* var scrollerObj  = $("#scrollcontent").data("ejScroller");
* scrollerObj.isHScroll(); // Returns horizontal scrollbar is shown or not.
* &lt;/script&gt;
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* // To check horizontal scrollbar is rendered or not
* $("#scrollcontent").ejScroller("isHScroll");	
* &lt;/script&gt;
* @memberof ejScroller
* @instance
*/
        isHScroll: function () {
            if (this.model.width > 0) {
                var $paneObject = this.content().find(this.model.targetPane);
                if (this.model.targetPane != null && $paneObject.length)
                    return ($paneObject[0].scrollWidth + $paneObject.siblings().width()) > this.model.width;
                else
                    return this.content()[0].scrollWidth > this.model.width;
            }
            return false;
        },
        /**
* Returns vertical scrollbar is shown or not.		
* @return Boolean value
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* $('#scrollcontent').ejScroller(); 	
* // To check vertical scrollbar is rendered or not
* var scrollerObj  = $("#scrollcontent").data("ejScroller");
* scrollerObj.isVScroll(); // Returns vertical scrollbar is shown or not.
* &lt;/script&gt;
* @example 
* &lt;div id="scrollcontent" style="width:900px;"&gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* $('#scrollcontent').ejScroller(); 	
* // To check vertical scrollbar is rendered or not
* $("#scrollcontent").ejScrollbar("isVScroll");	
* &lt;/script&gt;
* @memberof ejScroller
* @instance
*/
        isVScroll: function () {
            return this.model.height > 0 && this.content()[0].scrollHeight > this.model.height;
        },
        /**
* To configure the properties at runtime using SetModel		
* @private
*/
        _setModel: function (option) {
            for (var prop in option) {
                if (prop === "enableRTL") {
                    if (option[prop])
                        this.element.addClass("e-rtl");
                    else
                        this.element.removeClass("e-rtl");
                } else if (prop === "scrollLeft") {
                    this.content().scrollLeft(this.scrollLeft());
                } else if (prop === "scrollTop") {
                    this.content().scrollTop(this.scrollTop());
                } else if (prop === "touchScroll") {
                    if (!this.model.enableTouchScroll)
                        this._off(this.content(), "mousedown touchstart");
                    else {
                        if(this._v)
                            this._on(this.content(), "mousedown touchstart", { d: this._v }, this._mouseDownOnContent);
                        if(this._h)
                            this._on(this.content(), "mousedown touchstart", { d: this._h }, this._mouseDownOnContent);
                    }
                } else {
                    this.scrollTop(0);
                    this.scrollLeft(0);
                    this.refresh();
                    break;
                }
            }
        },
        /**
* Creates the scroller in on demand time
* @private
*/
        _createScroller: function (dimension, xy, position, css, isOtherScroll) {
            var temp = css == "e-v" ? "v" : "h", height;
            var d = this["_" + temp] = {};
            var jqVersion = $.fn.jquery;
            d.dimension = dimension;
            d.xy = xy;
            d.position = position;
            d.css = css;
            d.isOtherScroll = isOtherScroll;
            d.uDimension = dimension;

            var dim = dimension === "Width" ? "Height" : "Width";
            jqVersion === "1.7.1" || jqVersion === "1.7.2" ? height = dim.toLowerCase() : height = "outer" + dim;
            this.content()[height](this.element[dim.toLowerCase()]() - (this.isVScroll() ? this.model.scrollerSize : 0));
            this._calculateLayout(d);
            this._createLayout(d);
            var buttons = this[d.main].find(".e-button");

            this._off(buttons, "mousedown")
                ._on(buttons, "mousedown", { d: d, step: 1 }, this._spaceMouseDown);
            this._off(css === "e-v" ? this.element : this[d.scroll], "mousewheel DOMMouseScroll")
                ._on(css === "e-v" ? this.element : this[d.scroll], "mousewheel DOMMouseScroll", { d: d }, this._mouseWheel);
            this._off(this[d.scroll], "mousedown")
                ._on(this[d.scroll], "mousedown", { d: d }, this._spaceMouseDown);
            this._off(this[d.handler], "mousedown touchstart")
                ._on(this[d.handler], "mousedown touchstart", { d: d }, this._mouseDown);
            
            return d;
        },
        /**
* Creates the layout for the scrollbars to be rendered.	
* @private
*/
        _createLayout: function (d) {
            var divString = "<div class='" + d.css + "{0}' style='" + d.dimension + ":{1}px'>{2}</div>";
            var jqVersion = $.fn.jquery;
            var lit = {}, height;
            lit[d.dimension] = d.modelDim;

                var el = ej.buildTag(
                    "div." + d.css + "scroll",
                        String.format(divString, "up e-icon e-button", d.buttonSize) +
                        String.format(divString, "handlespace", d.handleSpace,
                            String.format(divString, "handle", d.handle)) +
                        String.format(divString, "down e-icon e-button", d.buttonSize),
                    lit
                );

            if (d.css == "e-v" && $(this.element.find(".e-content")).length > 0) $(this.element.find(".e-content")).after(el);
            else this.element.append(el);
			if(!this.isVScroll())this.element['height'](this.content()['height']()+this.model.scrollerSize);
            jqVersion === "1.7.1" || jqVersion === "1.7.2" ? height = d.uDimension.toLowerCase() : height = "outer" + d.uDimension; 
            this[d.handler] = this.element.find("." + d.handler)[height](d.handle);
            this[d.scroll] = this[d.handler].parent();
            this[d.main] = this[d.scroll].parent();
            this[d.main].find(".e-button")["outer" + d.uDimension](d.buttonSize);
        },
        /**
* Calculates the scrollbar layout based on the values specified for scrollbr to appear
* @private
*/
        _calculateLayout: function (d) {
            d.enableRTL = this.model.enableRTL === undefined ? this.element.css("direction") === "rtl" : this.model.enableRTL;
            d.enableRTL = d.css === "e-h" ? d.enableRTL : false;

            d.scrollDim = "scroll" + d.dimension;
            d.lPosition = d.position.toLowerCase();
            d.clientXy = "page" + d.xy;
            d.scrollVal = "scroll" + d.position;
            d.scrollOneStepBy = this.model.scrollOneStepBy;
            d.modelDim = this.model[(d.dimension = d.dimension.toLowerCase())] - (d.isOtherScroll ? this.model.scrollerSize : 0);
            d.handler = d.css + "handle";
            d.buttonSize = this.model.buttonSize;
            d.main = d.css + "scroll";
            d.scroll = d.css + "ScrollSpace";
            d.handleSpace = d.modelDim - 2 * d.buttonSize;

            var $pane = this.content().find(this.model.targetPane);
            if (this.model.targetPane != null && $pane.length && d.dimension != "height")
                d.sScrollDim = $pane[0][d.scrollDim] + $pane.parent().width() - $pane.width();
            else
                d.sScrollDim = this.content()[0][d.scrollDim];
            d.scrollable = d.sScrollDim - d.modelDim;
            d.handle = Math.floor(d.modelDim / d.sScrollDim * d.handleSpace);
            if (d.handle < 20) d.handle = 20;
            d.onePx = d.scrollable / (d.handleSpace - d.handle);
            d.fromScroller = false;
            d.up = true;
            d.vInterval = undefined;
            d.scrollable *= d.enableRTL ? -1 : 1;
        },
        /**
* Updates scrollbar layout based on ondemand values
* @private
*/
        _updateLayout: function (d) {
            this.element.find("." + d.css + "scroll").css(d.dimension, d.modelDim + "px")
                .find(".e-button").css(d.dimension, this.model.buttonSize).end()
                .find("." + d.css + "handlespace").css(d.dimension, d.handleSpace + "px")
                .find("." + d.css + "handle").css(d.dimension, d.handle + "px");
        },
        /**
* User refreshes the Scroller control at any time.		
* @return jQuery
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* $('#scrollcontent').ejScroller(); 	
* // To refresh the Scroller control at any time.
* var scrollerObj  = $("#scrollcontent").data("ejScroller");
* scrollerObj.refresh(); // refreshes the Scroller control at any time
* &lt;/script&gt;
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* $('#scrollcontent').ejScroller(); 	
* // Refresh the scroller control
* $("#scrollcontent").ejScroller("refresh");	
* &lt;/script&gt;
* @memberof ejScroller
* @instance
*/
        refresh: function () {
            this._ensureScrollers();

            if (this.scrollLeft())
                this.content().scrollLeft(this.scrollLeft());
            if ((this.scrollTop() && this._v == null) || (this._v != null && !this._v.skipChange))
                this.content().scrollTop(this.scrollTop());

            if (this._v) {
                this._v.dimension = "Height";
                this._v.isOtherScroll = this.isVScroll() && this.isHScroll() ? true: false;
                this.isVScroll() && !this._calculateLayout(this._v) && this._updateLayout(this._v);
            }
            if (this._h) {
                this._h.dimension = "Width";
                this._h.isOtherScroll = this.isVScroll() && this.isHScroll() ? true : false;
                this.isHScroll() && !this._calculateLayout(this._h) && this._updateLayout(this._h);
            }
            this.model.targetPane != null && this._on(this.content().find(this.model.targetPane), "scroll", this._scroll);
        },
        /**
* Section for handling scrollbar based on keypressed
* @private
*/
        _keyPressed: function (action, target) {
            if (["input", "select", "textarea"].indexOf(target.tagName.toLowerCase()) !== -1)
                return true;

            var d, iChar;

            if (["up", "down", "pageUp", "pageDown"].indexOf(action) !== -1) {
                d = this._v;
                iChar = "o";
            } else if (["left", "right", "pageLeft", "pageRight"].indexOf(action) !== -1) {
                d = this._h;
                iChar = "i";
            } else return true;
            if (!d) return true;

            return !this._changeTop(d, (action.indexOf(iChar) < 0 ? -1 : 1) * (action[0] !== "p" ? 1 : 3) * d.scrollOneStepBy, "key");
        },
        /**
* Scroller moves to given pixel in Y (top) position.		
* @return jQuery
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* $('#scrollcontent').ejScroller(); 	
* // Moves scroller to given pixel in Y (top) position.
* var scrollerObj  = $("#scrollcontent").data("ejScroller");
* scrollerObj.scrollY("scrollY", 25, true); // call scrollY method.
* &lt;/script&gt;
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
*&lt;/div&gt; <br> 
* &lt;script&gt;
* $('#scrollcontent').ejScroller(); 	
* //Moves scroller to given pixel in Y (top) position.
* $("#scrollcontent").ejScroller("scrollY", 25, true);	
* &lt;/script&gt;
* @memberof ejScroller
* @instance
*/
        scrollY: function (pixel, noAnimation, source) {
            if (noAnimation) {
                if (this._trigger("scroll", { source: source || "custom", scrollData: this._v, scrollTop: pixel }))
                    return;
                this.scrollTop(pixel);
                this.content().scrollTop(pixel);
                return;
            }
            this.content().stop().animate({
                scrollTop: pixel
            }, 100, 'linear');
        },
        /**
* Scroller moves to given pixel in X (left) position.		
* @return jQuery
* @example 
* &lt;div id="scrollcontent" style="width:900px;" &gt;
*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
		*&lt;/div&gt; <br> 
		* &lt;script&gt;
		* $('#scrollcontent').ejScroller(); 	
		* // Moves scroller to given pixel in X (left) position.
		* var scrollerObj  = $("#scrollcontent").data("ejScroller");
		* scrollerObj.scrollX("scrollX", 25, true); // call scrollX method.
		* &lt;/script&gt;
		* @example 
		* &lt;div id="scrollcontent" style="width:900px;" &gt;
		*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;
         *&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
		*&lt;/div&gt; <br> 
		* &lt;script&gt;
		* $('#scrollcontent').ejScroller(); 	
		* //Moves scroller to given pixel in X (left) position.
		* $("#scrollcontent").ejScroller("scrollX", 25, true);	
		* &lt;/script&gt;
		* @memberof ejScroller
		* @instance
		*/
        scrollX: function (pixel, noAnimation, source) {
            if (noAnimation) {
                if (this._trigger("scroll", { source: source || "custom", scrollData: this._h, scrollLeft: pixel }))
                    return;
                this.scrollLeft(pixel);
                if (this.model.targetPane != null)
                    this.content().find(this.model.targetPane).scrollLeft(pixel);
                else
                    this.content().scrollLeft(pixel);
                return;
            }
            this.content().stop().animate({
                scrollLeft: pixel
            }, 100, 'linear');
        },
        /**
* Updates top value based on scroller movement
* @private
*/
        _changeTop: function (d, step, source) {
            var start = this.model.targetPane != null && d.dimension != "height" ? this.content().find(this.model.targetPane)[d.scrollVal]() : this.content()[d.scrollVal](), t;

            if (d.dimension == "height" && start == 0)
                start = this.scrollTop() != 0 ? this.scrollTop() : 0;
            t = start + step;
            if (!d.enableRTL ? t > d.scrollable : t < d.scrollable) t = d.scrollable;
            if (!d.enableRTL ? t < 0 : t > 0) t = 0;

            if (t !== start) {
                this["scroll" + d.xy](t, true, source);
            }

            return t !== start;
        },
        /**
* To handle scroll based on movement via mouse wheel
* @private
*/
        _mouseWheel: function (e) {
            if (!e.data) return;

            var delta = 0, data = e.data.d, ori = e;
            e = e.originalEvent;
            if (e.wheelDelta) {
                delta = -e.wheelDelta / 120;
                if (window.opera) {
                    if (parseFloat(window.opera.version, 10) < 10)
                        delta = -delta;
                }
            } else if (e.detail) delta = e.detail / 3;

            if (!delta) return;

            if (this._changeTop(data, delta * data.scrollOneStepBy, "wheel")) {
                e.preventDefault ? e.preventDefault() : ori.preventDefault();
                if (data.css === "e-h") {
                    ori.stopImmediatePropagation();
                    ori.stopPropagation();
                }
            }
        },
        /**
* To handle mouse up movement
* @private
*/
        _mouseUp: function (e) {
            if (!e.data) return;

            var d = e.data.d;
            e.type === "mouseup" && this[d.handler].removeClass("e-active");
            if (e.type === "mouseup" || e.type === "touchend" || (!e.toElement && !e.relatedTarget)) {
                this._off($(document), "mousemove touchmove");
                $(document).off("mouseout mouseup touchend", ej.proxy(this._mouseUp, this));
                d.fromScroller = false;
                this[d.scroll].off("mousemove");
                this[d.handler].off("mousemove").css("transition", "");

                if (e.data.source === "thumb" && !ej.isNullOrUndefined(this.model)) {
                    $.when(this.content()).done(ej.proxy(function () {
                        this._trigger("thumbEnd", { originalEvent: e, scrollData: d });
                    }, this));
                }
            }
            d.up = true;
        },
        /**
* To handle mouse down movement on content
* @private
*/
        _mouseDownOnContent: function (down) {
            var d = down.data.d;
			if(this._trigger("thumbStart", { originalEvent: down, scrollData: d }))
				return;
            
            if( down.which ==3 && down.button == 2 ) return;
            d.fromScroller = true;
            this[d.handler].css("transition", "none");

            var prevY = null, skip = 1, min = 5, direction;

            this._on($(document), "mousemove touchmove", (function (move) {
                move.preventDefault();
                var pageXY = move.type == "mousemove" ? move[d.clientXy] : move.originalEvent.changedTouches[0][d.clientXy];

                if (prevY && pageXY !== prevY) {
                    var diff = pageXY - prevY, sTop = this.model[d.scrollVal] - (diff * d.onePx / min);
                    
                    if (skip == 1 && Math.abs(diff) > min) {
                        direction = d.position;
                        skip = 0;
                    }
                    if (skip == 0) prevY = pageXY;

                    if (sTop >= 0 && sTop <= d.scrollable && direction === d.position) {
                        this["scroll" + d.xy](sTop, true, "thumb");
                        this[d.handler].css(d.position.toLowerCase(), sTop / d.onePx + "px");
                        this.content().css("cursor", "pointer");
                        this._trigger("thumbMove", { originalEvent: move, scrollData: d });
                    }
                }
                if (prevY == null) prevY = pageXY;
            }));

            $(document).one("mouseup touchend", { d: d, source: "thumb" }, ej.proxy(this._mouseUp, this));
            $(document).mouseout({ d: d, source: "thumb" }, ej.proxy(this._mouseUp, this));
        },
        /**
* To handle mouse down movement
* @private
*/
        _mouseDown: function (down) {
            //if (down.which !== 1) return;
            var d = down.data.d;

            d.fromScroller = true;
            this[d.handler].css("transition", "none");

            var prevY, top = parseInt(this[d.handler].css(d.lPosition)) || 0;

            this._on($(document), "mousemove touchmove", (function (move) {
                move.preventDefault();
                var skip = 1;
                var pageXY = move.type == "mousemove" ? move[d.clientXy] : move.originalEvent.changedTouches[0][d.clientXy];
                if (prevY && pageXY !== prevY) {
                    top += (pageXY - prevY);

                    if (d.enableRTL ? top > 0 : top < 0) skip = top = 0;

                    if ((top * (d.enableRTL ? -1 : 1)) + d.handle >= d.handleSpace)
                        skip = top = (d.handleSpace - d.handle) * (d.enableRTL ? -1 : 1);

                    this["scroll" + d.xy](Math.ceil(top * d.onePx), true, "thumb");
                    this[d.handler].css(d.position.toLowerCase(), top + "px");
                    this.content().css("cursor", "pointer");
                    this._trigger("thumbMove", { originalEvent: move, scrollData: d });
                }

                if (skip === 1)
                    prevY = pageXY;
            }));

            this._trigger("thumbStart", { originalEvent: down, scrollData: d });

            $(document).one("mouseup touchend", { d: d, source: "thumb" }, ej.proxy(this._mouseUp, this));
            $(document).mouseout({ d: d, source: "thumb" }, ej.proxy(this._mouseUp, this));
        },
        /**
* To handle mouse down based on the interval 
* @private
*/
        _spaceMouseDown: function (e) {
            if (!e.data) return;

            var d = e.data.d;
            
            if (e.which !== 1 || e.target === this[d.handler][0]) return;

            var step = (e.data.step || 3) * d.scrollOneStepBy, hTop = e.data.top || this[d.handler].offset()[d.lPosition];

            e[d.clientXy] = e[d.clientXy] || 0;

            if (e[d.clientXy] < hTop) step *= -1;

            this._changeTop(d, step, step === 3 ? "track" : "button");

            if (e.data.step !== 1) {
                this[d.scroll].mousemove(function () {
                    d.up = true;
                });
            }

            d.up = false;
            d.vInterval = setInterval(ej.proxy(function () {

                if (step < 0 ? hTop + (step / d.onePx) < e[d.clientXy] : hTop + d.handle + (step / d.onePx) > e[d.clientXy])
                    d.up = true;

                if (d.up) {
                    clearInterval(d.vInterval);
                    return;
                }

                this._changeTop(d, step, step === 3 ? "track" : "button");

                hTop = e.data.top || this[d.handler].offset()[d.lPosition];
            }, this), 150);

            $(document).one("mouseup", { d: d }, ej.proxy(this._mouseUp, this));
            $(document).mouseout({ d: d }, ej.proxy(this._mouseUp, this));
        },
        /**
* To handle scroll movement
* @private
*/
        _scroll: function (e) {
            var dS = [this._v, this._h];

            for (var i = 0; i < 2; i++) {
                var d = dS[i];
                if (!d || d.skipChange) continue;

                if (this.model.targetPane != null && i == 1)
                    d.sTop = this.content().find(this.model.targetPane)[0][d.scrollVal];
                else
                    d.sTop = e.target[d.scrollVal];
                this[d.scrollVal](d.sTop);
                if (d.fromScroller) return;
                this[d.handler].css(d.lPosition, (d.sTop / d.onePx) + "px");
            }
        },
        /**
* Changes the vertical handler position	
* @private
*/
        _changevHandlerPosition: function (top) {
            top = this._v != null && top >= this._v.scrollable ? this._v.scrollable : top;
            if (this._v != null && top >= 0 && top <= this._v.scrollable)
                this[this._v.handler].css(this._v.lPosition, (top / this._v.onePx) + "px");
        },
        /**
* Changes the horizontal handler position	
* @private
*/
        _changehHandlerPosition: function (left) {
            left = this._h != null && left >= this._h.scrollable ? this._h.scrollable : left;
            if (this._h != null && left >= 0 && left <= this._h.scrollable)
                this[this._h.handler].css(this._h.lPosition, (left / this._h.onePx) + "px");
        },
        /**
		* destroy the Scroller control
		* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
		* @alias destroy
		* @return jQuery
		* @example 
		* &lt;div id="scrollcontent" style="width:900px;" &gt;
		*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;&lt;li&gt;
        *&lt;b&gt;A controller&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
		*&lt;/ul&gt; 
		*&lt;/div&gt; <br> 
		* &lt;script&gt;
		* $('#scrollcontent').ejScroller(); 	
		* // Destroy Scroller
		* var scrollerObj  = $("#scrollcontent").data("ejScroller");
		* scrollerObj.destroy(); // destroy the scroller
		* &lt;/script&gt;
		* @example 
		* &lt;div id="scrollcontent" style="width:900px;" &gt;
		*&lt;p&gt;Model–view–controller (MVC) is a software architecture pattern which separates the
        * representation of information from the user's interaction with it.
        * The model consists of application data, business rules, logic, and functions. A view can be any
        * output representation of data, such as a chart or a diagram. Multiple views of the same data 
        * are possible, such as a bar chart for management and a tabular view for accountants. 
        *The controller mediates input, converting it to commands for the model or view.The central 
        *ideas behind MVC are code reusability and n addition to dividing the application into three 
        *kinds of components, the MVC design defines the interactions between them.</p>
        *&lt;ul&gt;*&lt;li&gt;
        *&lt;b&gt;A controller*&lt;/b&gt;can send commands to its associated view to change the view's presentation of the model (e.g., by scrolling through a document). 
        *It can also send commands to the model to update the model's state (e.g., editing a document).
        *&lt;/li&gt;
        *&lt;/ul&gt; 
		*&lt;/div&gt; <br> 
		* &lt;script&gt;
		* $('#scrollcontent').ejScroller(); 	
		* // destroy the scroller
		* $("#scrollcontent").ejScroller("destroy");	
		* &lt;/script&gt;
		* @memberof ejScroller
		* @instance
		*/
        _destroy: function () {
            this.element.css({ "width": "", "height": "" }).find(".e-vscroll,.e-hscroll").remove();
            this.content().removeClass("e-content").css({ "width": "", "height": "" });
        }
    });
})(jQuery, Syncfusion, window);;