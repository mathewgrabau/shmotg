/*!
*  filename: ej.splitter.js
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
    // ejSplitter is the plugin name 
    // "ej.Splitter" is "namespace.className" will hold functions and properties
    /**
    * @namespace ej
	* @class ejSplitter
	* @param {object} options - settings for Slider.
	* @requires jQuery
    * @requires jquery.easing.1.3.js
	* @requires ej.core.js
	* @requires ej.splitter.js
	* @classdesc Custom Design for Html splitter control.<br>
	* @example
	* &lt;div id="innerSplitter"&gt;
	* 	&lt;div&gt;
	* 		&lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
	* 	&lt;/div&gt;
	* 	&lt;div&gt;
	* 		&lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
	* 	&lt;/div&gt;
	* &lt;/div&gt; 
	* &lt;script&gt;
	* // Create Splitter <br>
    * $('#innerSplitter').ejSplitter(); <br>
	* &lt;/script&gt;
	*/
    ej.widget("ejSplitter", "ej.Splitter", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _rootCSS: "e-splitter",
        _setFirst: false,

        // default model
        defaults: {
            /**
			* Specify the CSS class to splitter control to achieve custom theme.
			* @default null
			* @type {string}
			* @example
	* &lt;div id="innerSplitter"&gt;
	* 	&lt;div&gt;
	* 		&lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
	* 	&lt;/div&gt;
	* 	&lt;div&gt;
	* 		&lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
	* 	&lt;/div&gt;
	* &lt;/div&gt; 
	        * &lt;script&gt;
			* //To set cssClass API value during initialization
			* 	$("#innerSplitter").ejSplitter({ cssClass: "gradient-lime"});
            * &lt;/script&gt;
			* @memberof ejSplitter
			* @instance
			*/
            cssClass: "",
            /**
			* Specify the orientation for spliter control.See {@link orientation}
			* @default ej.orientation.Horizontal or “horizontal”
			* @type {Enum}
			* @example
	        * &lt;div id="innerSplitter"&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;/div&gt; 
	        * &lt;script&gt;
			* //To set orientation API value during initialization  
			* $("#innerSplitter").ejSplitter({ orientation: ej.Orientation.Horizontal });
            * &lt;/script&gt;
			* @memberof ejSplitter
			* @instance
			*/
            orientation: "horizontal",
			enableAnimation: true,
			/**		
			* Specify properties for each pane.
			* @default null
			* @type {array}
			* @example 
	        * &lt;div id="innerSplitter"&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;/div&gt; 
    	    * &lt;script&gt;
			* //To set properties API value during initialization  
			* 	$("#innerSplitter").ejSplitter({properties: [{ paneSize: "100px" }, { paneSize: "50px"}]});
            * &lt;/script&gt;
			* @memberof ejSplitter
			* @instance
			*/
            properties: [],
            /**		
			* Specify height for splitter control.
			* @default “100%”
			* @type {string}
			* @example 
	        * &lt;div id="innerSplitter"&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;/div&gt; 
    	    * &lt;script&gt;
			* //To set height API value during initialization
			* 	$("#innerSplitter").ejSplitter({height: "100%" });
            * &lt;/script&gt;
			* @memberof ejSplitter
			* @instance
			*/
            height: null,
            /**
			* Specify width for splitter control.
			* @default “100%”
			* @type {string}
			* @example 
	        * &lt;div id="innerSplitter"&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;/div&gt; 
    	    * &lt;script&gt;
			* //To set width API value during initialization  
			* 	$("#innerSplitter").ejSplitter({width: 600} );
    	    * &lt;/script&gt;
			* @memberof ejSplitter
			* @instance
			*/
            width: null,
            /**
			* Specify window resizing behaviour for splitter control.
			* @default true
			* @type {boolean}
			* @example
	        * &lt;div id="innerSplitter"&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;/div&gt; 
    	    * &lt;script&gt;
			* //To set windowResizing API value during initialization
			* 	$("#innerSplitter").ejSplitter({enableAutoResize: true});
    	    * &lt;/script&gt;
			* @memberof ejSplitter
			* @instance
			*/
            enableAutoResize: false,
            /**
			* Specify Right to Left Direction for splitter control.
			* @default false
			* @type {boolean}
			* @example
	        * &lt;div id="innerSplitter"&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;/div&gt; 
    	    * &lt;script&gt;
			* //To set enableRTL API value during initialization  
			* 	$("#innerSplitter").ejSplitter({enableRTL: true} );
    	    * &lt;/script&gt;
			* @memberof ejSplitter
			* @instance
			*/
            enableRTL: false,
            /**
			* Specify animation speed for the Splitter pane movement while collapsing and expanding.
			* @default 300
			* @type {number}
			* @example 
	        * &lt;div id="innerSplitter"&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;/div&gt; 
    	    * &lt;script&gt;
			* //To set animationSpeed API value during initialization
			* $("#innerSplitter").ejSplitter({animationSpeed: 150 });
    	    * &lt;/script&gt;
			* @memberof ejSplitter
			* @instance
			*/
            animationSpeed: 300,

            //Events
            /**
			 * Fires when before expand collapse in splitter control.
			 * @event
			 * @name ejSplitter#beforeExpandCollapse
			 * @param {Object} argument Event parameters from splitter control
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.
			 * @param {object}  argument.collapsed returns collapsed pane details.
			 * @param {object}  argument.expanded returns expanded pane details.
			 * @param {object}  argument.model returns the splitter model.
			 * @param {number}  argument.splitbarIndex returns the current split bar index.			
			 * @param {string}  argument.type returns the name of the event.
			 * @example 
	        * &lt;div id="innerSplitter"&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;/div&gt; 
    	    * &lt;script&gt;
			 * //beforeExpandCollapse event for splitter control
             * $("#innerSplitter").ejSplitter({
             *    beforeExpandCollapse: function (args) {}
             * });
    	    * &lt;/script&gt;
			 * @memberof ejSplitter
			 * @instance
			 */
            beforeExpandCollapse: null,
            /**
			 * Fires when expandCollapse in splitter control pane.
			 * @event
			 * @name ejSplitter#expandCollapse
			 * @param {Object} argument Event parameters from splitter control
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.
			 * @param {object}  argument.collapsed returns collapsed pane details.
			 * @param {object}  argument.expanded returns expanded pane details.
			 * @param {object}  argument.model returns the splitter model.
			 * @param {number}  argument.splitbarIndex returns the current split bar index.			 
			 * @param {string}  argument.type returns the name of the event.
			 * @example 
	        * &lt;div id="innerSplitter"&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;/div&gt; 
    	    * &lt;script&gt;
			 * //expandCollapse event for splitter control
             * $("#innerSplitter").ejSplitter({
             *    expandCollapse: function (args) {}
             * });
    	    * &lt;/script&gt;
			 * @memberof ejSplitter
			 * @instance
			 */
            expandCollapse: null,
            /**
			 * Fires when resize in splitter control pane.
			 * @event
			 * @name ejSplitter#resize
			 * @param {Object} argument Event parameters from splitter control 
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.
			 * @param {object}  argument.collapsed returns collapsed pane details.
			 * @param {object}  argument.expanded returns expanded pane details.
			 * @param {object}  argument.model returns the splitter model.
			 * @param {number}  argument.splitbarIndex returns the current split bar index.			
			 * @param {string}  argument.type returns the name of the event.
			 * @example
	        * &lt;div id="innerSplitter"&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;/div&gt; 
    	    * &lt;script&gt;
			 * //resize event for splitter control
             * $("#innerSplitter").ejSplitter({
             *    resize: function (args) {}
             * });
    	    * &lt;/script&gt;
			 * @memberof ejSplitter
			 * @instance
			 */
            resize: null,
            /**
			 * Fires when splitter control pane has been created. 
			 * @event
			 * @name ejSplitter#create
			 * @param {Object} argument Event parameters from splitter control 
			 * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.			
			 * @param {object}  argument.model returns the splitter model.			 
			 * @param {string}  argument.type returns the name of the event.
			 * @example
	        * &lt;div id="innerSplitter"&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;div&gt;
	        * &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
	        * &lt;/div&gt;
	        * &lt;/div&gt; 
    	    * &lt;script&gt;
			 * //create event for splitter control
             * $("#innerSplitter").ejSplitter({
             *    create: function (args) {}
             * });
    	    * &lt;/script&gt;
			 * @memberof ejSplitter
			 * @instance
			 */
            create: null,
            /**
            * Fires when splitter control pane has been destroyed. 
            * @event
            * @name ejSplitter#destroy
            * @param {Object} argument Event parameters from splitter control 
            * @param {boolean}  argument.cancel if the event should be cancelled; otherwise, false.			
            * @param {object}  argument.model returns the splitter model.			 
            * @param {string}  argument.type returns the name of the event.
            * @example
           * &lt;div id="innerSplitter"&gt;
           * &lt;div&gt;
           * &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
           * &lt;/div&gt;
           * &lt;div&gt;
           * &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
           * &lt;/div&gt;
           * &lt;/div&gt; 
           * &lt;script&gt;
            * //destroy event for splitter control
            * $("#innerSplitter").ejSplitter({
            *    destroy: function (args) {}
            * });
           * &lt;/script&gt;
            * @memberof ejSplitter
            * @instance
            */
            destroy: null
        },
        /**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            cssClass: "string",
            orientation: "enum",
            properties: "data",
            enableAutoResize: "boolean",
            enableRTL: "boolean",
            animationSpeed: "number",
			enableAnimation: "boolean",
        },
		/**
         * To initialize the maskedit textbox control.		
		 * @private
         */
        // constructor function
        _init: function () {
            this._initialize();
            this._render();
            this._wireEvents(this.model.enableAutoResize);
        },
        /**
         * To configure the properties at runtime using SetModel		
		 * @private
         */
        _setModel: function (options) {
            var option;
            for (option in options) {
                switch (option) {
                    case "cssClass ": this._changeSkin(options[option]); break;
                    case "enableAutoResize": this._windowResizing(options[option]); break;
                    case "enableRTL": this._rtl(options[option]); break;
                    case "orientation": this._setOrientation(options[option]); break;
					case "enableAnimation":{
							this.model.enableAnimation=options[key];
							break;
					}
                }
            }
        },
        /**
        * To refresh the splitter control pane resizing.
		* @return jQuery
		* @example 
		* &lt;div id="innerSplitter"&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;script&gt;
        * $("#innerSplitter").ejSplitter();
		* // Create splitter control
		* var splitterObj = $("#innerSplitter").data("ejSplitter");
		* splitterObj.refresh(); // refresh the splitter control pane resizing.
		* &lt;/script&gt;
		* @example 
		* &lt;div id="innerSplitter"&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;script&gt;
        * $("#innerSplitter").ejSplitter();
		* // refresh the splitter control
		* $("#innerSplitter").ejSplitter("refresh");
		* &lt;/script&gt;
		* @memberof ejSplitter
		* @instance
         */
        refresh: function () {
            this._setPanesSize();
            this._getPanesPercent();
        },
        /**
        * To collapse the splitter control pane.
		* @return jQuery
		* @example 
		* &lt;div id="innerSplitter"&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;script&gt;
        * $("#innerSplitter").ejSplitter();
		* // Create splitter control
		* var splitterObj = $("#innerSplitter").data("ejSplitter");
		* splitterObj.collapse(); // collpase the splitter control pane.
		* &lt;/script&gt;
		* @example 
		* &lt;div id="innerSplitter"&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;script&gt;
        * $("#innerSplitter").ejSplitter();
		* // collpase the splitter control
		* $("#innerSplitter").ejSplitter("collpase");
		* &lt;/script&gt;
		* @memberof ejSplitter
		* @instance
         */
        collapse: function (paneIndex) {
            this._clickArrow(paneIndex, true, true);
        },
        /**
        * To expand the splitter control pane.
		* @return jQuery
		* @example 
		* &lt;div id="innerSplitter"&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;script&gt;
        * $("#innerSplitter").ejSplitter();
		* // Create splitter control
		* var splitterObj = $("#innerSplitter").data("ejSplitter");
		* splitterObj.expand(); // expand the splitter control pane.
		* &lt;/script&gt;
		* @example 
		* &lt;div id="innerSplitter"&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;script&gt;
        * $("#innerSplitter").ejSplitter();
		* // expand the splitter control
		* $("#innerSplitter").ejSplitter("expand");
		* &lt;/script&gt;
		* @memberof ejSplitter
		* @instance
         */
        expand: function (paneIndex) {
            this._clickArrow(paneIndex, false, true);
        },
        /**
         * To configure the arrow symbol in splitter control pane..
		 * @private
         */
        _clickArrow: function (index, bool, canClick) {
            if (this._inMovement || index < 0 || index > this.panes.length) return false;
            var arrow, cls = bool ? "e-collapse" : "e-expand", splitbars = this.element.children(".e-splitbar:not(.e-shadowbar)");

            if (index == splitbars.length) arrow = this._clickArrow(index - 1, !bool, false);
            else arrow = $(splitbars[index]).children("." + cls);

            if (canClick) arrow.css("display") != "none" && arrow.mousedown();
            else return arrow;
        },

        /**
        * To add the new pane to splitter control.
		* @return jQuery
		* @param {string}  content  content of pane. 
		* @param {object}  property  pane properties.
		* @param {number}  index  index of pane.
		* @example 
		* &lt;div id="innerSplitter"&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;script&gt;
        * $("#innerSplitter").ejSplitter();
		* // Create splitter control
		* var splitterObj = $("#innerSplitter").data("ejSplitter");
		* splitterObj.addItem("New pane 0",{ paneSize:20, minSize:20, maxSize:100},0);
		* &lt;/script&gt;
		* @example 
		* &lt;div id="innerSplitter"&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;div&gt;
		* &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;/div&gt;
		* &lt;script&gt;
        * $("#innerSplitter").ejSplitter();
		* // expand the splitter control
		* $("#innerSplitter").ejSplitter("addItem","New pane 0",{ paneSize:20, minSize:20, maxSize:100},0);
		* &lt;/script&gt;
		* @memberof ejSplitter
		* @instance
         */
        addItem: function (content, property, index) {
            var paneCount = this.panes.length;
            index = this._getNumber(index);
            if (ej.isNullOrUndefined(index)) index = paneCount;
            if (index < 0 || index > paneCount) return "";

            var property = this._getPaneProperty(property), paneDiv, paneDivSize, requiredSize;
            property=this._checkMinMaxSize(property);
            paneDiv = ej.buildTag("div.e-pane e-" + this.model.orientation.substr(0, 1) + "-pane");
            this.element.append(paneDiv[this.containerCss](property.paneSize));
            paneDivSize = property.paneSize = paneDiv[this.containerCss]();
            paneDiv.remove();

            var start = index, end = paneCount, i, j, insert, before, direction = 2, getters = {}, taken = 0, canInsert = false;
            requiredSize = paneDivSize + this._bar;

            for (j = 0; j < direction; j++) {
                for (i = start; i < end; i++) {
                    var _paneSize = $(this.panes[i])[this.containerCss]();
                    var availableSpace = _paneSize - this.model.properties[i].minSize;

                    if (availableSpace >= requiredSize - taken) {
                        getters[i] = _paneSize - (requiredSize - taken);
                        canInsert = true;
                        break;
                    }
                    else if (availableSpace > 0) {
                        getters[i] = this.model.properties[i].minSize;
                        taken += availableSpace;
                    }
                }
                if (canInsert) break;
                else end = start, start = 0;
            }
            if (!canInsert) return "";

            for (var pos in getters)
                $(this.panes[pos])[this.containerCss](getters[pos]);

            if (index == paneCount) {
                insert = "insertBefore", before = 1;
                paneDiv.insertAfter($(this.panes[index - 1]));
            }
            else {
                insert = "insertAfter", before = 0;
                paneDiv.insertBefore($(this.panes[index]));
            }
            this.model.properties.splice(index, 0, property);
            this.panes.splice(index, 0, paneDiv);
            var splitBar = this._createSplitBar(index - before);
            splitBar[insert](paneDiv);
            paneDiv.append(content);
            this._updateModel();

            return paneDiv;
        },

        /**
       * To remove the new pane from the splitter control.
       * @return jQuery
       * @param {number}  index  index of pane. 
       * @example 
       * &lt;div id="innerSplitter"&gt;
       * &lt;div&gt;
       * &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
       * &lt;/div&gt;
       * &lt;div&gt;
       * &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
       * &lt;/div&gt;
       * &lt;/div&gt;
       * &lt;script&gt;
        * $("#innerSplitter").ejSplitter();
       * // Create splitter control
       * var splitterObj = $("#innerSplitter").data("ejSplitter");
       * splitterObj.removeItem(0); 
       * &lt;/script&gt;
		* @example 
       * &lt;div id="innerSplitter"&gt;
       * &lt;div&gt;
       * &lt;div class="cont"&gt;Pane 1 &lt;/div&gt;
       * &lt;/div&gt;
       * &lt;div&gt;
       * &lt;div class="cont"&gt;Pane 2 &lt;/div&gt;
       * &lt;/div&gt;
       * &lt;/div&gt;
       * &lt;script&gt;
        * $("#innerSplitter").ejSplitter();
       * // expand the splitter control
       * $("#innerSplitter").ejSplitter("removeItem",0);
       * &lt;/script&gt;
       * @memberof ejSplitter
       * @instance
        */
        removeItem: function (index) {
            var paneCount = this.panes.length - 1;
            index = this._getNumber(index);
            if (ej.isNullOrUndefined(index)) index = paneCount;
            if (index < 0 || index > paneCount) return null;

            var targetPane, nextPane, splitbars, removedSize;
            targetPane = $(this.panes[index]);
            removedSize = targetPane[this.containerCss]() + this._bar;
            targetPane.remove();

            splitbars = this.element.children(".e-splitbar:not(.e-shadowbar)");
            if (index == paneCount) {
                nextPane = $(this.panes[index - 1]);
                $(splitbars[index - 1]).remove();
            }
            else {
                nextPane = $(this.panes[index + 1]);
                $(splitbars[index]).remove();
            }
            nextPane[this.containerCss](nextPane[this.containerCss]() + removedSize);

            this._removeArrays(index);
            this._updateModel();
        },
        _checkMinMaxSize:function(property){
            if (property.paneSize < property.minSize)
                property.paneSize = property.minSize;
            if (property.paneSize > property.maxSize)
                property.paneSize = property.maxSize;
            return property;
        },
        /**
		 * To remove the specified pane from the splitter control pane list.
		 * @private
         */
        _removeArrays: function (index) {
            this.model.properties.splice(index, 1);
            this.panes.splice(index, 1);
            this.oldPaneSize.splice(index, 1);
            this.oldPanePercent.splice(index, 1);
            this._sizePercent.splice(index, 1);
        },
        /**
         * To return the value as a valid one.
		 * @private
         */
        _getNumber: function (value) {
            value = parseFloat(value);
            return isNaN(value) ? null : value;
        },
        /**
         * To update the pane size in percentage.
		 * @private
         */
        _updateModel: function () {
            for (var i = 0; i < this.panes.length; i++)
                this.model.properties[i].paneSize = $(this.panes[i])[this.containerCss]();
            this._getPanesPercent();
        },
        /**
         * To get the pane properties.
		 * @private
         */
        _getPaneProperty: function (property) {
            var _default = { paneSize: 10, minSize: 10, maxSize: null, collapsible: true, resizable: true };
            return $.extend(_default, property);
        },
        /**
         * To configure the custom theme for splitter control using cssClass  property		
		 * @private
         */
        _changeSkin: function (skin) {
            this.element.removeClass(this.model.cssClass).addClass(skin);
        },
        /**
         * To configure the custom theme for splitter control using cssClass  property		
		 * @private
         */
        _windowResizing: function (boolean) {
            if (boolean) this._wireEvents(boolean);
            else this._unWireEvents();
        },
        /**
         * To configure the splitter control orientation.		
		 * @private
         */
        _setOrientation: function (boolean) {
            this._unWireEvents();
            this._destroy();
            this.model.orientation = boolean;
            this._init();
        },
        /**
         * To destroy the splitter control.
		 * @private
         */
        // all events bound using this._on will be unbind automatically
        _destroy: function () {
            this.element.removeClass("e-widget " + this.model.cssClass + " e-" + this.model.orientation);
            this.element.children(".e-splitbar").remove();
            this.element.children(".e-pane").removeClass("e-pane e-" + this.model.orientation.substr(0, 1) + "-pane").height("").width("");
        },
        /**
         * To initialize the splitter control with it's property.
		 * @private
         */
        _initialize: function () {
            this.panes = [];
            this.oldPaneSize = [];
            this.oldPanePercent = [];
            this.shadowBar = null;
            this._inMovement = false;
            this.containerCss = this.model.orientation == "horizontal" ? "width" : "height";
            this.displayCss = this.model.orientation == "horizontal" ? "left" : "top";
            this._bar = 7;      // For the center splitbar size
        },
        /**
         * Render section for the splitter control.
		 * @private
         */
        _render: function () {
            this.element.addClass("e-widget " + this.model.cssClass + " e-" + this.model.orientation).attr("data-role", "splitter");
            var i, j, target = this.element[0];
            for (i = 0, j = 0; i < target.children.length; i++) {
                $(target.children[i]).addClass("e-pane");
                this.panes.push(target.children[i]);
            }
            this._setPanesProperty();
            this._insertSplitBar();
            this._setDimentions();
            this._setPanesSize();
            this._getPanesPercent();
            this._checkProperties();
			this.element.find(".e-pane").addClass("e-" + this.model.orientation.substr(0, 1) + "-pane");
        },
        /**
         * To set the splitter control pane with it's properties.
		 * @private
         */
        _setPanesProperty: function () {
            for (var p = 0; p < this.panes.length; p++) {
                if (this.model.properties[p] != undefined) {
                    this.model.properties[p].paneSize = this.model.properties[p].paneSize == undefined ? "0px" : this.model.properties[p].paneSize;
                    this.model.properties[p].minSize = isNaN(parseFloat(this.model.properties[p].minSize)) ? 10 : parseFloat(this.model.properties[p].minSize);
                    this.model.properties[p].maxSize = isNaN(parseFloat(this.model.properties[p].maxSize)) ? null : parseFloat(this.model.properties[p].maxSize);
                    this.model.properties[p].collapsible = this.model.properties[p].collapsible != false ? true : false;
                    this.model.properties[p].resizable = this.model.properties[p].resizable != false ? true : false;
                }
                else this.model.properties.push({ paneSize: "0px", minSize: 10, maxSize: null, collapsible: true, resizable: true });
            }
        },
        /**
         * To configure the split bar in splitter control.
		 * @private
         */
        _insertSplitBar: function () {
            if (this.panes.length > 1) {
                var i, splitBar;
                for (i = 0; i < this.panes.length - 1; i++) {
                    splitBar = this._createSplitBar(i);
                    splitBar.insertAfter(this.panes[i]);
                }
            }
        },
        /**
         * To create the split bar in splitter control.
		 * @private
         */
        _createSplitBar: function (i) {
            var orient = this.model.orientation.substr(0, 1), arrow1, arrow2, splitBar, accessible = false;

            splitBar = ej.buildTag("span.e-box e-splitbar e-" + orient + "-bar").attr("aria-expanded", true);

            if (this.model.properties[i].collapsible && this.model.properties[i + 1].collapsible) {
                arrow1 = ej.buildTag("span.e-icon e-collapse e-" + orient + "-arrow " + orient + "-backward");
                splitBar.append(arrow1);
                arrow2 = ej.buildTag("span.e-icon e-expand e-" + orient + "-arrow " + orient + "-forward");
                splitBar.append(arrow2);
                accessible = true;

                this._on(arrow1, "mousedown", this._collapseArrowClick);
                this._on(arrow2, "mousedown", this._expandArrowClick);
            }
            if (this.model.properties[i].resizable && this.model.properties[i + 1].resizable) {
                splitBar.addClass("e-resize");
                accessible = true;
                this._on(splitBar, ej.eventType.mouseDown, this._mouseDownOnDivider);
            }
            if (accessible) {
                splitBar.attr({ "role": "separator", "tabindex": "0" });
                this._on(splitBar, "focus focusout", this._focusOnDivider);
            }
            else splitBar.attr({ "role": "presentation" });
            return splitBar;
        },
        /**
         * To obtained the pane size in percentage.
		 * @private
         */
        _getPanesPercent: function () {
            this._sizePercent = [];
            var size = this.element[this.containerCss](), outerSize = size - ((this.panes.length - 1) * this._bar), i;

            for (i = 0; i < this.panes.length; i++) {
                if (!$(this.panes[i]).hasClass("collapsed"))
                    this.oldPaneSize[i] = $(this.panes[i])[this.containerCss]();
                this.oldPanePercent[i] = this._convertToPercent(outerSize, this.oldPaneSize[i]);
                this._sizePercent.push(this._convertToPercent(outerSize, $(this.panes[i])[this.containerCss]()));
            }
        },
        /**
         * To set the dimension for splitter control.
		 * @private
         */
        _setDimentions: function () {
            if (this.model.height)
                this.element.css("height", this.model.height);

            if (this.model.width)
                this.element.css("width", this.model.width);
        },
        /**
         * To check the splitter control properties.
		 * @private
         */
        _checkProperties: function () {
            if (this.model.enableRTL) this._rtl(this.model.enableRTL);

            this._prevSize = this.element[this.containerCss]();
        },
        /**
         * To enable or disable the Right to Left behaviour 		
		 * @private
         */
        _rtl: function (boolean) {
            if (boolean) this.element.addClass("e-rtl");
            else this.element.removeClass("e-rtl");
        },
        /**
         * To set the pane size for splitter control. 		
		 * @private
         */
        _setPanesSize: function () {
            var attr = this.containerCss,
            zeroPanes = 0,
            totalPaneSize = 0,
            totalSize = this.element[attr](),
            remainZero = false,
            bar = this._bar,
            zerothPanes = [],
            panLength, j, paneCount = this.panes.length;

            if (paneCount > 1) {
                for (j = 0; j < paneCount ; j++) {
                    $(this.panes[j]).css(attr, this.model.properties[j].paneSize);
                    bar = (j == paneCount - 1) ? 0 : bar;
                    panLength = Math.round($(this.panes[j])[attr]());

                    if (panLength <= 0) {
                        zeroPanes++;
                        zerothPanes.push(j);
                        totalPaneSize += bar;
                    }
                    else {
                        if (remainZero) {
                            $(this.panes[j]).css(attr, 0);
                            totalPaneSize += panLength + bar;
                            this.model.properties[j].paneSize = 0;
                        }
                        else {
                            totalPaneSize += panLength + bar;
                            if (totalPaneSize > totalSize) {
                                totalPaneSize -= panLength - bar;
                                var currPane = totalSize - totalPaneSize,
                                remainDivider = paneCount - j - 1;
                                currPane -= remainDivider * bar;
                                $(this.panes[j]).css(attr, currPane);
                                remainZero = true;
                                totalPaneSize += currPane + bar;
                            }
                            this.model.properties[j].paneSize = panLength;
                        }
                    }
                }
            }
            else if (paneCount == 1) {
                $(this.panes[0]).css(attr, "100%");
                totalPaneSize = totalSize;
            }

            if (paneCount > 1 && totalPaneSize != totalSize) {
                var remainingSize, lastPane = $(this.panes[paneCount - 1]);
                if (totalPaneSize > totalSize) {
                    remainingSize = totalPaneSize - totalSize;
                    lastPane.css(attr, remainingSize);
                }
                else if (totalPaneSize < totalSize) {
                    remainingSize = totalSize - totalPaneSize;
                    if (zeroPanes > 0) {
                        var z, avgWid = Math.round(remainingSize / zeroPanes);
                        for (z = 0; z < zeroPanes ; z++) {
                            $(this.panes[zerothPanes[z]]).css(attr, avgWid);
                            this.model.properties[zerothPanes[z]].paneSize = avgWid;
                        }
                    }
                    else {
                        lastPane.css(attr, Math.round(lastPane[attr]() + remainingSize));
                        this.model.properties[paneCount - 1].paneSize = lastPane[attr]();
                    }
                }
            }
            if (paneCount > 1) this._checkPaneSize();
        },
        /**
         * To return the value based on it's type.		
		 * @private
         */
        _getUnit: function (str) {
            if (str == "px") return "px";
            else if (str == "pt") return "pt";
            else if (str.substr(1) == "%") return "%";
            else return "px";
        },
        /**
         * To configure the splitter position based on it's type.
		 * @private
         */
        _getNormalValue: function (position) {
            var currentLOB, currentLOBPercent, totalValue, currentValue; //currentLOT = current left or bottom
            if (this.model.orientation == "vertical") {
                currentLOB = position.y - this.element.offset().top;
                currentLOBPercent = currentLOB / this.element.outerHeight();
                totalValue = this.element.height();
            }
            else {
                currentLOB = position.x - this.element.offset().left;
                currentLOBPercent = currentLOB / this.element.outerWidth();
                totalValue = this.element.width();
            }
            if (currentLOBPercent > 1) {
                currentLOBPercent = 1;
            }
            if (currentLOBPercent < 0) {
                currentLOBPercent = 0;
            }

            currentValue = currentLOBPercent * totalValue;

            return this._trimValue(currentValue);
        },
        /**
         * To obtained the value based on step value.
		 * @private
         */
        _trimValue: function (value) {
            var step, stepModValue, correctedValue;
            step = 1;
            stepModValue = (value) % step;
            correctedValue = value - stepModValue;
            if (Math.abs(stepModValue) * 2 >= step)
                correctedValue += (stepModValue > 0) ? step : (-step);
            return parseFloat(correctedValue.toFixed(5));
        },
        /**
         * To get the split bar index. 		
		 * @private
         */
        _getSplitbarIndex: function () {
            return this.element.children(".e-splitbar:not(.e-shadowbar)").index(this.currentSplitBar);
        },
        /**
         * To configure the pane resize in splitter control. 		
		 * @private
         */
        _paneResize: function () {
            if (this.shadowBar == null) return false;
            this.currentSplitBar = this.shadowBar.next();
            var newPosition, prevPane, nextPane, prevPaneIndex, nextPaneIndex, index = this._getSplitbarIndex();
            prevPane = this.shadowBar.prev(), nextPane = this.currentSplitBar.next();
            prevPaneIndex = index, nextPaneIndex = index + 1;

            newPosition = this.shadowBar.offset()[this.displayCss];
            newPosition = newPosition - this.currentSplitBar.offset()[this.displayCss];
            $(prevPane).css(this.containerCss, newPosition + $(prevPane)[this.containerCss]() + "px");
            $(nextPane).css(this.containerCss, $(nextPane)[this.containerCss]() - newPosition + "px");
            this.oldPaneSize[prevPaneIndex] = $(prevPane)[this.containerCss]();
            this.oldPaneSize[nextPaneIndex] = $(nextPane)[this.containerCss]();

            this.shadowBar.remove();
            this._checkPaneSize();

            var prevObj = { item: prevPane, index: prevPaneIndex, size: this.oldPaneSize[prevPaneIndex] };
            var nextObj = { item: nextPane, index: nextPaneIndex, size: this.oldPaneSize[nextPaneIndex] };

            this._updateModelValue(prevObj, nextObj);

            this._trigger("resize", {
                prevPane: prevObj,
                nextPane: nextObj,
                splitbarIndex: index
            });
        },
        /**
         * To check whether pane size in splitter control. 		
		 * @private
         */
        _checkPaneSize: function () {
            var total = 0, len, i, splitterLen, paneCount = this.panes.length;
            for (i = 0; i < paneCount; i++) {
                len = $(this.panes[i])[this.containerCss]();
                total += len + this._bar;
            }
            total -= this._bar;
			splitterLen = (typeof window.getComputedStyle == "function") ? parseFloat(window.getComputedStyle(this.element[0])[this.containerCss]) : this.element[this.containerCss]()-1;
            if (total != splitterLen) {
                var remain = splitterLen - total;
                var last = $(this.panes[paneCount - 1])[this.containerCss]();
				if(last == 0){
				for (i = paneCount-1; i >= 0; i--) {
					 if($(this.panes[i]).hasClass("expanded") && !$(this.panes[i]).hasClass("collapsed")){
					 	last = $(this.panes[i])[this.containerCss]();
						$(this.panes[i]).css(this.containerCss, Math.floor(last + remain));
						break;}
            	}}
				else
                	$(this.panes[paneCount - 1]).css(this.containerCss, Math.floor(last + remain));
            }
        },
        /**
         * To configure the maximum draggable range for pane in splitter control.
		 * @private
         */
        _maxminDraggableRange: function (shadowbarPos) {
            var prevPane, nextPane, prevPaneSize, nextPaneSize, splitbarPosition, prevPaneRange, nextPaneRange,
                prevPaneIndex, nextPaneIndex, PaneMax1, PaneMax2, PaneMin1, PaneMin2, index;
            prevPane = this.shadowBar.prev();
            this.currentSplitBar = this.shadowBar.next();
            nextPane = this.currentSplitBar.next();
            prevPaneSize = prevPane[this.containerCss]();
            nextPaneSize = nextPane[this.containerCss]();
            splitbarPosition = this.displayCss == "left" ? this.currentSplitBar[0].offsetLeft : this.currentSplitBar[0].offsetTop;
            prevPaneRange = splitbarPosition - prevPaneSize;
            nextPaneRange = nextPaneSize + splitbarPosition;

            index = this._getSplitbarIndex();
            prevPaneIndex = index;
            nextPaneIndex = index + 1;

            PaneMax1 = this.model.properties[prevPaneIndex].maxSize;
            PaneMax2 = this.model.properties[nextPaneIndex].maxSize;
            PaneMax1 = PaneMax1 != null ? parseInt(PaneMax1, 10) : null;
            PaneMax2 = PaneMax2 != null ? parseInt(PaneMax2, 10) : null;

            this.model.properties[prevPaneIndex].minSize = parseInt(this.model.properties[prevPaneIndex].minSize, 10);
            this.model.properties[nextPaneIndex].minSize = parseInt(this.model.properties[nextPaneIndex].minSize, 10);
            PaneMin1 = this.model.properties[prevPaneIndex].minSize;
            PaneMin2 = this.model.properties[nextPaneIndex].minSize;

            this.shadowBar.removeClass("e-end-indicaton");

            // checking expand limit

            if (shadowbarPos > nextPaneRange - PaneMin2) {
                this.resizedPosition = nextPaneRange - PaneMin2;
                this.shadowBar.addClass("e-end-indicaton");
            }
            else if (shadowbarPos < prevPaneRange + PaneMin1) {
                this.resizedPosition = prevPaneRange + PaneMin1;
                this.shadowBar.addClass("e-end-indicaton");
            }

            if (PaneMax1 != null) {
                if (shadowbarPos > prevPaneRange + PaneMax1) {
                    this.resizedPosition = prevPaneRange + PaneMax1;
                    this.shadowBar.addClass("e-end-indicaton");
                }
            }

            if (PaneMax2 != null) {
                if (shadowbarPos < nextPaneRange - PaneMax2) {
                    this.resizedPosition = nextPaneRange - PaneMax2;
                    this.shadowBar.addClass("e-end-indicaton");
                }
            }
        },
        /**
         * To configure the arrow click in collapse time 	.
		 * @private
         */
        _collapseArrowClick: function (event) {
            if (this.shadowBar != null) return;
            var $target = $(event.target);
            this._inMovement = true;
            this.currentSplitBar = $target.parent();
            var currBarNo, prevPane, nextPane, prevPaneIndex, nextPaneIndex, prevPaneSize, nextPaneSize, properties = {};
            var paneCount = this.panes.length;
            currBarNo = this._getSplitbarIndex();
            prevPane = this.currentSplitBar.prev();
            nextPane = this.currentSplitBar.next();
            prevPaneIndex = currBarNo;
            nextPaneIndex = currBarNo + 1;
            prevPaneSize = prevPane[this.containerCss]();
            nextPaneSize = nextPane[this.containerCss]();

            var proxy = this, collapsed, expanded;
            collapsed = { item: prevPane, index: prevPaneIndex, size: prevPaneSize };
            expanded = { item: nextPane, index: nextPaneIndex, size: nextPaneSize };

            if (this._raiseEvent("beforeExpandCollapse", collapsed, expanded, currBarNo))
                return false;

            if (!nextPane.hasClass("collapsed")) {
                this.oldPaneSize[prevPaneIndex] = prevPaneSize;

                prevPane.addClass("collapsed");
                nextPane.addClass("expanded");
                this.currentSplitBar.attr("aria-expanded", false);
                $target.parent().removeClass("e-resize");
                $target.css("display", "none");

                if (prevPaneIndex != 0) {
                    var preBar = prevPane.prev();
                    preBar.find(".e-expand").css("display", "none");
                    preBar.removeClass("e-resize");
                }

                properties[this.containerCss] = 0;
                prevPane.animate(properties,this.model.enableAnimation?this.model.animationSpeed:0);
                properties[this.containerCss] = prevPaneSize + nextPaneSize;
                nextPane.animate(properties,this.model.enableAnimation?this.model.animationSpeed:0, function () {
                    proxy._raiseEvent("expandCollapse", collapsed, expanded, currBarNo);
                });
            }
            else {
                if (prevPaneSize < this.oldPaneSize[nextPaneIndex]) {
                    $target.addClass("e-end-indicaton");
                    this._inMovement = false;
                    $(document).bind("mouseup", $.proxy(this._mouseUpOnArrow, this));
                    return false;
                }
                else {
                    prevPane.removeClass("expanded");
                    nextPane.removeClass("collapsed");
                    $target.parent().addClass("e-resize");
                    $target.siblings().css("display", "block");

                    if (nextPaneIndex != paneCount - 1) {
                        var nextBar = nextPane.next();
                        nextBar.find(".e-collapse").css("display", "block");
                        if (!nextBar.next().hasClass("collapsed")) {
                            nextBar.addClass("e-resize");
                            nextBar.attr("aria-expanded", true);
                        }
                    }

                    properties[this.containerCss] = this.oldPaneSize[nextPaneIndex];
                    nextPane.animate(properties, this.model.enableAnimation?this.model.animationSpeed:0);
                    properties[this.containerCss] = prevPaneSize - this.oldPaneSize[nextPaneIndex];
                    prevPane.animate(properties,this.model.enableAnimation?this.model.animationSpeed:0, function () {
                        proxy._raiseEvent("expandCollapse", collapsed, expanded, currBarNo);
                    });
                }
            }
        },
        /**
         * To configure the arrow click in expand time 	.
		 * @private
         */
        _expandArrowClick: function (event) {
            if (this.shadowBar != null) return;
            var $target = $(event.target);
            this._inMovement = true;
            this.currentSplitBar = $target.parent();
            var currBarNo, prevPane, nextPane, prevPaneIndex, nextPaneIndex, prevPaneSize, nextPaneSize, properties = {};
            var paneCount = this.panes.length;
            currBarNo = this._getSplitbarIndex();
            prevPane = this.currentSplitBar.prev();
            nextPane = this.currentSplitBar.next();
            prevPaneIndex = currBarNo;
            nextPaneIndex = currBarNo + 1;
            prevPaneSize = prevPane[this.containerCss]();
            nextPaneSize = nextPane[this.containerCss]();

            var proxy = this, collapsed, expanded;
            collapsed = { item: nextPane, index: nextPaneIndex, size: nextPaneSize };
            expanded = { item: prevPane, index: prevPaneIndex, size: prevPaneSize };

            if (this._raiseEvent("beforeExpandCollapse", collapsed, expanded, currBarNo))
                return false;

            if (!prevPane.hasClass("collapsed")) {
                this.oldPaneSize[nextPaneIndex] = nextPaneSize;

                prevPane.addClass("expanded");
                nextPane.addClass("collapsed");
                $target.parent().removeClass("e-resize");
                $target.css("display", "none");

                if (nextPaneIndex != paneCount - 1) {
                    var nextBar = nextPane.next();
                    nextBar.find(".e-collapse").css("display", "none");
                    nextBar.removeClass("e-resize");
                    nextBar.attr("aria-expanded", false);
                }
                
                properties[this.containerCss] = prevPaneSize + nextPaneSize;
                prevPane.animate(properties, this.model.enableAnimation?this.model.animationSpeed:0);
                properties[this.containerCss] = 0;
                nextPane.animate(properties, this.model.enableAnimation?this.model.animationSpeed:0, function () {
                    proxy._raiseEvent("expandCollapse", collapsed, expanded, currBarNo);
                });
            }
            else {
                if (nextPaneSize < this.oldPaneSize[prevPaneIndex]) {
                    $target.addClass("e-end-indicaton");
                    this._inMovement = false;
                    $(document).bind("mouseup", $.proxy(this._mouseUpOnArrow, this));
                    return false;
                }
                else {
                    prevPane.removeClass("collapsed");
                    nextPane.removeClass("expanded");
                    this.currentSplitBar.attr("aria-expanded", true);
                    $target.parent().addClass("e-resize");
                    $target.siblings().css("display", "block");

                    if (prevPaneIndex != 0) {
                        var preBar = prevPane.prev();
                        preBar.find(".e-expand").css("display", "block");
                        if (!preBar.prev().hasClass("collapsed")) preBar.addClass("e-resize");
                    }

                    properties[this.containerCss] = this.oldPaneSize[prevPaneIndex];
                    prevPane.animate(properties, this.model.enableAnimation?this.model.animationSpeed:0);
                    properties[this.containerCss] = nextPaneSize - this.oldPaneSize[prevPaneIndex];
                    nextPane.animate(properties, this.model.enableAnimation?this.model.animationSpeed:0, function () {
                        proxy._raiseEvent("expandCollapse", collapsed, expanded, currBarNo);
                    });
                }
            }
        },
        /**
         * To raise the event when it's triggered. 	.
		 * @private
         */
        _raiseEvent: function (evtName, collapsed, expanded, index) {
            if (evtName == "expandCollapse") {
                this._inMovement = false;
                this._updateModelValue(collapsed, expanded);
            }


            return this._trigger(evtName, {
                collapsed: collapsed,
                expanded: expanded,
                splitbarIndex: index
            });

        },
        /**
         * To update the model value for splitter control.
		 * @private
         */
        _updateModelValue: function (collapsed, expanded) {
            this.model.properties[collapsed.index].paneSize = collapsed.item[this.containerCss]();
            this.model.properties[expanded.index].paneSize = expanded.item[this.containerCss]();

            this._getPanesPercent();
        },
        /**
         * Section For handle the mouse up event over the arrow.
		 * @private
         */
        _mouseUpOnArrow: function (event) {
            this.element.find(".e-end-indicaton").removeClass("e-end-indicaton");
            $(document).unbind("mouseup", $.proxy(this._mouseUpOnArrow, this));
        },
        /**
         * Section For handle the key down event on splitter control pane divider.
		 * @private
         */
        _keydownOnDivider: function (e) {
            var key = e.keyCode;
            if (key == 37 || key == 38 || key == 39 || key == 40) {
                e.preventDefault();
                var oriTarget = $(e.data.target);
                if (e.ctrlKey) {
                    if (this.shadowBar == null) {
                        this.currentSplitBar = oriTarget;
                        var index = this._getSplitbarIndex();
                        if (this.model.orientation == "vertical") {
                            if (e.keyCode == 38) this.collapse(index);       // Up Key
                            else if (e.keyCode == 40) this.expand(index);    // Down Key
                        }
                        else {
                            if (e.keyCode == 37) this.collapse(index);       // Left Key
                            else if (e.keyCode == 39) this.expand(index);    // Right Key
                        }
                    }
                }
                else if (oriTarget.hasClass("e-resize")) {
                    var target = (this.shadowBar != null) ? this.shadowBar : oriTarget;
                    var offset = target.offset(), location = { pageX: offset.left, pageY: offset.top };
                    $.extend(true, e, location);
                    if ((this.model.orientation == "vertical" && (e.keyCode == 38 || e.keyCode == 40)) ||
                        (this.model.orientation == "horizontal" && (e.keyCode == 37 || e.keyCode == 39))) {
                        if (e.keyCode == 38) e.pageY -= 5;          // Up Key
                        else if (e.keyCode == 40) e.pageY += 5;     // Down Key
                        else if (e.keyCode == 37) e.pageX -= 5;     // Left Key
                        else if (e.keyCode == 39) e.pageX += 5;     // Right Key
                        this._mouseMoveOnDivider(e);
                    }
                }
            }
            else if (key == 13) {    // Enter Key
                e.preventDefault();
                this._mouseUpOnDivider();
            }
            else if (key == 27) {    // Esc Key
                e.preventDefault();
                if (this.shadowBar != null) this.shadowBar.remove();
                this.shadowBar = null;
                this._mouseUpOnDivider();
                this.element.children(".e-splitbar.e-hover").focusout();
            }
        },
        /**
         * Section For handle the focused in splitter control pane divider.
		 * @private
         */
        _focusOnDivider: function (e) {
            if (e.type == "focus") {
                if (!$(e.target).hasClass("e-hover")) {
                    $(e.target).addClass("e-hover");
                    $(document).bind("keydown", { target: e.target }, $.proxy(this._keydownOnDivider, this));
                }
            }
            else {
                this.element.children(".e-splitbar.e-hover").removeClass("e-hover");
                this._mouseUpOnDivider();
                $(document).unbind("keydown", $.proxy(this._keydownOnDivider, this));
            }
        },
        /**
         * Section For handle the mouse down over splitter control pane divider.
		 * @private
         */
        _mouseDownOnDivider: function (event) {
            event.preventDefault();
            var $target = $(event.target);
            if ($target.hasClass("e-splitbar") && $target.hasClass("e-resize")) {
                if (!$target.hasClass("e-hover")) $target.focus();
                $(document).bind(ej.eventType.mouseMove, { target: event.target }, $.proxy(this._mouseMoveOnDivider, this));
                $(document).bind(ej.eventType.mouseUp, $.proxy(this._mouseUpOnDivider, this));
                $(document).bind("mouseleave", $.proxy(this._mouseUpOnDivider, this));
            }
            else if ($target.hasClass("e-expand") || $target.hasClass("e-collapse")) {
                $target.parent().focus();
            }
        },
        /**
         * Section For handle the mouse move over splitter control pane divider.
		 * @private
         */
        _mouseMoveOnDivider: function (event) {
            event = event.type == "touchmove" ? event.originalEvent.changedTouches[0] : event;
            var position = { x: event.pageX, y: event.pageY };
            this.resizedPosition = this._getNormalValue(position);

            if (this.shadowBar == null) {
                var target = $(event.data.target);
                this.shadowBar = target.clone().addClass("e-shadowbar").removeClass("e-hover").insertBefore(target);
                this.shadowBar.children().remove();
            }
            this._maxminDraggableRange(this.resizedPosition);
            this.shadowBar.css(this.displayCss, this.resizedPosition);
        },
        /**
         * Section For handle the mouse up over splitter control pane divider.
		 * @private
         */
        _mouseUpOnDivider: function (event) {
            this._paneResize();

            $(document).unbind(ej.eventType.mouseMove, $.proxy(this._mouseMoveOnDivider, this));
            $(document).unbind(ej.eventType.mouseUp, $.proxy(this._mouseUpOnDivider, this));
            $(document).unbind("mouseleave", $.proxy(this._mouseUpOnDivider, this));
            // sets shadowBar null after removing shadowBar element
            this.shadowBar = null;
        },
        /**
         * Section For handle the window resized.
		 * @private
         */
        _windowResized: function (event) {
			var size = (typeof window.getComputedStyle == "function") ? parseFloat(window.getComputedStyle(this.element[0])[this.containerCss]) : this.element[this.containerCss]()-1;
            if (this._prevSize == size) return false;

            var paneCount = this.panes.length, outerSize = size - ((paneCount - 1) * this._bar), i, val;
            this._prevSize = size;

            for (i = 0; i < paneCount; i++) {
                val = this._convertToPixel(outerSize, this._sizePercent[i]);
                $(this.panes[i]).css(this.containerCss, val + "px");
            }
            for (i = 0; i < this.oldPaneSize.length; i++)
                this.oldPaneSize[i] = this._convertToPixel(outerSize, this.oldPanePercent[i]);

            this._checkPaneSize();
        },

        _convertToPercent: function (outer, pane) {
            return (pane * 100) / outer;
        },
        _convertToPixel: function (tot, percent) {
            return Math.floor((tot * percent) / 100);
        },

        //-------------------- Event Wire-up -------------------------//
        /**
         * Wiring the events to splitter control		
		 * @private
         */
        _wireEvents: function (boolean) {
            if (boolean) $(window).bind('resize', $.proxy(this._windowResized, this));
        },
        /**
         * unWiring the events from splitter control.		
		 * @private
         */
        _unWireEvents: function () {
            $(window).unbind('resize', $.proxy(this._windowResized, this));
        }
    });

})(jQuery, Syncfusion);;