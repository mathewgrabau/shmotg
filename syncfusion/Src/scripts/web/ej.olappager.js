/*!
*  filename: ej.olappager.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html OLAP Pager elements
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
    * @class ejOlapPager
    * @requires jquery-1.10.2.min.js
    * @requires jquery.easing.1.3.min.js
    * @requires ej.core.js
    * @requires ej.data.js
    * @requires ej.touch.js
    * @requires ej.waitingpopup.js
    * @requires ej.olappager.js
    * @requires ej.olapgrid
    * @classdesc Custom Design for Html OLAP Pager control.
    * @example 
    * &lt;div id="OlapPager"&gt;&lt;/div&gt; <br> 
    * &lt;script&gt;
    * // Create OLAP Pager
    * $("#OlapPager").ejOlapPager(...); 	
    * &lt;/script&gt;
    */
    ej.widget("ejOlapPager", "ej.olap.OlapPager", {

        //Root Css Class
        _rootCSS: "e-olappager",

        // Widget element will be automatically set in this
        element: null,

        // User-defined model will be automatically set in this
        model: null,

        /**
        * Returns the model of OLAP Pager widget.
        *
        * @private
        */
        _getModel: function () {
            return this.model;
        },

        /**
        * Sets the model of OLAP Pager widget.
        *
        * @private
        */
        _setModel: function (value) {
            this.model = value;
        },

        defaults: {
            /**		
            * Contains the id of the target element for which paging is enabled.
            * @default ""
            * @type {string}
            * @example 
            * //To set targetControlID API value during initialization  
            * 	$("#OlapPager").ejOlapPager({  targetControlID: "OlapGrid"});					* 
            * @example 
            * //Get or set the targetControlID API, after initialization:<br>
            *	//Gets the targetControlID value  
            *	$("#OlapPager").ejOlapPager("option", "targetControlID");<br>			
            *	//Sets the targetControlID value 
            *	$("#OlapPager").ejOlapPager("option", "targetControlID",  "OlapGrid1" ); 
            * @memberof ejOlapPager
            * @instance
            */
            targetControlID: "",
            /**		
            * Contains the current page number in categorical axis.
            * @default 1
            * @type {number}
            * @example 
            * //To set categoricalCurrentPage API value during initialization  
            * 	$("#OlapPager").ejOlapPager({  categoricalCurrentPage: 1});					* 
            * @example 
            * //Get or set the categoricalCurrentPage API, after initialization:<br>
            *	//Gets the categoricalCurrentPage value  
            *	$("#OlapPager").ejOlapPager("option", "categoricalCurrentPage");<br>			
            *	//Sets the categoricalCurrentPage value 
            *	$("#OlapPager").ejOlapPager("option", "categoricalCurrentPage", 2 ); 
            * @memberof ejOlapPager
            * @instance
            */
            categoricalCurrentPage: 1,
            /**		
            * Contains the current page number in series axis.
            * @default 1
            * @type {number}
            * @example 
            * //To set seriesCurrentPage API value during initialization  
            * 	$("#OlapPager").ejOlapPager({  seriesCurrentPage: 1});					* 
            * @example 
            * //Get or set the seriesCurrentPage API, after initialization:<br>
            *	//Gets the seriesCurrentPage value  
            *	$("#OlapPager").ejOlapPager("option", "seriesCurrentPage");<br>			
            *	//Sets the seriesCurrentPage value 
            *	$("#OlapPager").ejOlapPager("option", "seriesCurrentPage", 2 ); 
            * @memberof ejOlapPager
            * @instance
            */
            seriesCurrentPage: 1,
            /**		
            * Contains the total page count in series axis.
            * @default 1
            * @type {number}
            * @example 
            * //To set seriesPageCount API value during initialization  
            * 	$("#OlapPager").ejOlapPager({  seriesPageCount: 1});					* 
            * @example 
            * //Get or set the seriesPageCount API, after initialization:<br>
            *	//Gets the seriesPageCount value  
            *	$("#OlapPager").ejOlapPager("option", "seriesPageCount");<br>			
            *	//Sets the seriesPageCount value 
            *	$("#OlapPager").ejOlapPager("option", "seriesPageCount", 2 ); 
            * @memberof ejOlapPager
            * @instance
            */
            seriesPageCount: 0,
            /**		
            * Contains the total page count in categorical axis.
            * @default 1
            * @type {number}
            * @example 
            * //To set categPageCount API value during initialization  
            * 	$("#OlapPager").ejOlapPager({  categPageCount: 1});					* 
            * @example 
            * //Get or set the categPageCount API, after initialization:<br>
            *	//Gets the categPageCount value  
            *	$("#OlapPager").ejOlapPager("option", "categPageCount");<br>			
            *	//Sets the categPageCount value 
            *	$("#OlapPager").ejOlapPager("option", "categPageCount", 2 ); 
            * @memberof ejOlapPager
            * @instance
            */
            categoricalPageCount: 0,
            /**		
            * Sets the localized language for the control.
            * @default 1
            * @type {string}
            * @example 
            * //To set localization API value during initialization  
            * 	$("#OlapPager").ejOlapPager({  locale: "en-US"});					* 
            * @example 
            * //Get or set the localization API, after initialization:<br>
            *	//Gets the localization value  
            *	$("#OlapPager").ejOlapPager("option", "locale");<br>			
            *	//Sets the localization value 
            *	$("#OlapPager").ejOlapPager("option", "locale", "fr-FR" ); 
            * @memberof ejOlapPager
            * @instance
            */
            locale: "en-US",
            /**		
            * Sets the pager mode for the Olap pager.
            * @default ej.olap.OlapPager.Mode.Both
            * @type {enum}
            * @example 
            * //To set pagerMode API value during initialization  
            * 	$("#OlapPager").ejOlapPager({  mode: ej.olap.OlapPager.Mode.Series});					* 
            * @example 
            * //Get or set the pagerMode API, after initialization:<br>
            *	//Gets the pagerMode value  
            *	$("#OlapPager").ejOlapPager("option", "mode");<br>			
            *	//Sets the pagerMode value 
            *	$("#OlapPager").ejOlapPager("option", "mode", ej.olap.OlapPager.Mode.Categorical ); 
            * @memberof ejOlapPager
            * @instance
            */
            mode: "both"
        },

        /**
        * Initializes the variables and loads the widget. 
        *
        * @private
        */
        _init: function () {
            if ($("#" + this.model.targetControlID).hasClass('e-olapgrid')) {
                this.targetControlName = "OlapGrid";
                this.targetControl = $("#" + this.model.targetControlID).data("ejOlapGrid");
                this.targetControl._pagerObj = this;
            }
            this._createPager();
            this.unwireEvents();
            this.wireEvents();
        },

        /**
        * Destroys the widget while it's no longer required. 
        *
        * @private
        */
        _destroy: function () {
            this.element.empty().removeClass("e-olappager");
        },

        /**
        * 	This function is invoked to wire the events for UI interaction.
        * @return jQuery
        * @example 
        * &lt;div id="OlapPager"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Wiring events to OLAP Pager control.
        * $('#OlapPager').ejOlapPager({
        *       url: "Pager.svc",
        *   });
        * var pagerObj = $("#OlapPager").data("ejOlapPager");
        * pagerObj.wireEvents();
        * // Wiring events with OLAP Pager.
        * &lt;/script&gt;
        * @memberof ejOlapPager
        * @instance
        */
        wireEvents: function () {
            this._on(this.element, "keydown", ".pagerTextBox", this._pagerTextBoxClick);
            this._on(this.element, "click", ".moveNext", this._moveNextPage);
            this._on(this.element, "click", ".moveLast", this._moveLastPage);
            this._on(this.element, "click", ".moveFirst", this._moveFirstPage);
            this._on(this.element, "blur", ".pagerTextBox", this._restorePageNo);
            this._on(this.element, "click", ".movePrevious", this._movePreviousPage);
        },

        /**
        * 	This function is invoked to unwire the events registered for UI interaction.
        * @return jQuery
        * @example 
        * &lt;div id="OlapPager"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Unwiring events from OLAP Pager control.
        * $('#OlapPager').ejOlapPager({
        *       url: "Pager.svc",
        *   });
        * var pagerObj = $("#OlapPager").data("ejOlapPager");
        * pagerObj.unwireEvents();
        * // Unwiring events from OLAP Pager.
        * &lt;/script&gt;
        * @memberof ejOlapPager
        * @instance
        */
        unwireEvents: function () {
            this._off(this.element, "click", ".moveNext", this._moveNextPage);
            this._off(this.element, "blur", ".pagerTextBox", this._restorePageNo);
            this._off(this.element, "click", ".moveLast", this._moveLastPage);
            this._off(this.element, "click", ".moveFirst", this._moveFirstPage);
            this._off(this.element, "click", ".movePrevious", this._movePreviousPage);
            this._off(this.element, "keydown", ".pagerTextBox", this._pagerTextBoxClick);
        },

        /**
        * This function is used to extract the appropriate localized text.
        *
        * @private  
        */
        _getLocalizedLabels: function (property) {
            return ej.olap.OlapPager.locale[this.model.locale][property] === undefined ? ej.olap.OlapPager.locale["en-US"][property] : ej.olap.OlapPager.locale[this.model.locale][property];
        },

        /**
        * This function creates the OlapPager element.
        *
        * @private
        */
        _createPager: function () {
            $(this.element).addClass("olapPager").attr("targetControlID", this.model.targetControlID);
            var pagerContent = "";
            if (this.model.mode != "series") {
                var categoricalPager = ej.buildTag("td.categPagerTd", "");
                if (this.model.mode == "both") $(categoricalPager[0]).css("border-right", "1px solid #808080");
                $(categoricalPager).html(ej.buildTag("div.pagerDiv", ej.buildTag("span.moveFirst e-icon")[0].outerHTML + ej.buildTag("span.movePrevious e-icon")[0].outerHTML + ej.buildTag("span.pagerLabel", this._getLocalizedLabels("CategoricalPage"))[0].outerHTML + ej.buildTag("input#" + this._id + "_CategCurrentPage.pagerTextBox")[0].outerHTML + ej.buildTag("span.categPageCount")[0].outerHTML + ej.buildTag("span.moveNext e-icon")[0].outerHTML + ej.buildTag("span.moveLast e-icon")[0].outerHTML));
                pagerContent = categoricalPager[0].outerHTML;
            }
            if (this.model.mode != "categorical") {
                var seriesPager = ej.buildTag("td.seriesPagerTd", "");
                $(seriesPager).html(ej.buildTag("div.pagerDiv", ej.buildTag("span.moveFirst e-icon")[0].outerHTML + ej.buildTag("span.movePrevious e-icon")[0].outerHTML + ej.buildTag("span.pagerLabel", this._getLocalizedLabels("SeriesPage"))[0].outerHTML + ej.buildTag("input#" + this._id + "_SeriesCurrentPage.pagerTextBox")[0].outerHTML + ej.buildTag("span.seriesPageCount")[0].outerHTML + ej.buildTag("span.moveNext e-icon")[0].outerHTML + ej.buildTag("span.moveLast e-icon")[0].outerHTML));
                pagerContent += seriesPager[0].outerHTML;
            }
            var pagerTable = ej.buildTag("table", ej.buildTag("tbody", ej.buildTag("tr", pagerContent)))[0];
            $(this.element).html(pagerTable);
        },

        /**
        * 	This function initializes the page counts and page numbers of the OlapPager.
        * @return jQuery
        * @example 
        * &lt;div id="OlapPager"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * // Initializing page count and numbers.
        * $('#OlapPager').ejOlapPager({
        *       url: "Pager.svc",
        *   });
        * var pagerObj = $("#OlapPager").data("ejOlapPager");
        * pagerObj.initPagerProperties(10, {CategorialPageSize: 1, SeriesPageSize: 1, CategorialCurrentPage: 3, SeriesCurrentPage: 4});
        * // Initializing page count and numbers.
        * &lt;/script&gt;
        * @memberof ejOlapPager
        * @instance
        */
        initPagerProperties: function (headerCounts, pageSettings) {
            this.model.categoricalPageCount = Math.ceil(headerCounts.Column / pageSettings.CategorialPageSize);
            this.model.seriesPageCount = Math.ceil(headerCounts.Row / pageSettings.SeriesPageSize);
            this.model.categoricalCurrentPage = pageSettings.CategorialCurrentPage;
            this.model.seriesCurrentPage = pageSettings.SeriesCurrentPage;
            if (this.model.mode != "series") {
                $(this.element.find(".categPageCount")[0]).html("/ " + this.model.categoricalPageCount);
                $("#" + this._id + "_CategCurrentPage")[0].value = pageSettings.CategorialCurrentPage;
                this._setNavigators(this.model.categoricalCurrentPage, this.model.categoricalPageCount, this.element.find(".categPagerTd")[0]);
            }
            if (this.model.mode != "categorical") {
                $(this.element.find(".seriesPageCount")[0]).html("/ " + this.model.seriesPageCount);
                $("#" + this._id + "_SeriesCurrentPage")[0].value = pageSettings.SeriesCurrentPage;
                this._setNavigators(this.model.seriesCurrentPage, this.model.seriesPageCount, this.element.find(".seriesPagerTd")[0]);
            }
        },

        /**
        * This function is used to move the target control to next page.
        *
        * @private  
        */
        _moveNextPage: function (e) {
            if (!$(e.target).hasClass("disabled")) {
                var pagerInput = $($(e.target).parents('td')[0]).find(".pagerTextBox")[0];
                $($($(e.target).parents('td')[0]).find(".movePrevious")[0]).removeClass("disabled");
                $($($(e.target).parents('td')[0]).find(".moveFirst")[0]).removeClass("disabled");
                pagerInput.value = parseInt(pagerInput.value) + 1;
                if (pagerInput.id.indexOf("Categ") != -1) {
                    this.model.categoricalCurrentPage = pagerInput.value;
                    if (this.targetControlName == "OlapGrid") this.targetControl.refreshPagedOlapGrid("categorical", pagerInput.value);
                    if (pagerInput.value == this.model.categoricalPageCount) {
                        $(e.target).addClass("disabled");
                        $($($(e.target).parents('td')[0]).find(".moveLast")[0]).addClass("disabled");
                    }
                }
                else if (pagerInput.id.indexOf("Series") != -1) {
                    this.model.seriesCurrentPage = pagerInput.value;
                    if (this.targetControlName == "OlapGrid") this.targetControl.refreshPagedOlapGrid("series", pagerInput.value);
                    if (pagerInput.value == this.model.seriesPageCount) {
                        $(e.target).addClass("disabled");
                        $($($(e.target).parents('td')[0]).find(".moveLast")[0]).addClass("disabled");
                    }
                }
            }
        },

        /**
        * This function is used to move the target control to previous page.
        *
        * @private  
        */
        _movePreviousPage: function (e) {
            if (!$(e.target).hasClass("disabled")) {
                var pagerInput = $($(e.target).parents('td')[0]).find(".pagerTextBox")[0];
                $($($(e.target).parents('td')[0]).find(".moveNext")[0]).removeClass("disabled");
                $($($(e.target).parents('td')[0]).find(".moveLast")[0]).removeClass("disabled");
                pagerInput.value = parseInt(pagerInput.value) - 1;
                if (pagerInput.id.indexOf("Categ") != -1) {
                    this.model.categoricalCurrentPage = pagerInput.value;
                    if (this.targetControlName == "OlapGrid") this.targetControl.refreshPagedOlapGrid("categorical", pagerInput.value);
                    if (pagerInput.value == "1") {
                        $(e.target).addClass("disabled");
                        $($($(e.target).parents('td')[0]).find(".moveFirst")[0]).addClass("disabled");
                    }
                }
                else if (pagerInput.id.indexOf("Series") != -1) {
                    this.model.seriesCurrentPage = pagerInput.value;
                    if (this.targetControlName == "OlapGrid") this.targetControl.refreshPagedOlapGrid("series", pagerInput.value);
                    if (pagerInput.value == "1") {
                        $(e.target).addClass("disabled");
                        $($($(e.target).parents('td')[0]).find(".moveFirst")[0]).addClass("disabled");
                    }
                }
            }
        },

        /**
        * This function is used to move the target control to last page.
        *
        * @private  
        */
        _moveLastPage: function (e) {
            if (!$(e.target).hasClass("disabled")) {
                var pagerInput = $($(e.target).parents('td')[0]).find(".pagerTextBox")[0];
                $($($(e.target).parents('td')[0]).find(".movePrevious")[0]).removeClass("disabled");
                $($($(e.target).parents('td')[0]).find(".moveFirst")[0]).removeClass("disabled");
                $(e.target).addClass("disabled");
                $($($(e.target).parents('td')[0]).find(".moveNext")[0]).addClass("disabled");
                if (pagerInput.id.indexOf("Categ") != -1) {
                    this.model.categoricalCurrentPage = pagerInput.value = this.model.categoricalPageCount;
                    if (this.targetControlName == "OlapGrid") this.targetControl.refreshPagedOlapGrid("categorical", pagerInput.value);
                }
                else if (pagerInput.id.indexOf("Series") != -1) {
                    this.model.seriesCurrentPage = pagerInput.value = this.model.seriesPageCount;
                    if (this.targetControlName == "OlapGrid") this.targetControl.refreshPagedOlapGrid("series", pagerInput.value);
                }
            }
        },

        /**
        * This function is used to move the target control to first page.
        *
        * @private  
        */
        _moveFirstPage: function (e) {
            if (!$(e.target).hasClass("disabled")) {
                var pagerInput = $($(e.target).parents('td')[0]).find(".pagerTextBox")[0];
                $($($(e.target).parents('td')[0]).find(".moveNext")[0]).removeClass("disabled");
                $($($(e.target).parents('td')[0]).find(".moveLast")[0]).removeClass("disabled");
                $(e.target).addClass("disabled");
                $($($(e.target).parents('td')[0]).find(".movePrevious")[0]).addClass("disabled");
                if (pagerInput.id.indexOf("Categ") != -1) {
                    this.model.categoricalCurrentPage = pagerInput.value = 1;
                    if (this.targetControlName == "OlapGrid") this.targetControl.refreshPagedOlapGrid("categorical", pagerInput.value);
                }
                else if (pagerInput.id.indexOf("Series") != -1) {
                    this.model.seriesCurrentPage = pagerInput.value = 1;
                    if (this.targetControlName == "OlapGrid") this.targetControl.refreshPagedOlapGrid("series", pagerInput.value);
                }
            }
        },

        /**
        * This function is used to move the target control to entered page.
        *
        * @private  
        */
        _pagerTextBoxClick: function (e) {
            if (e.which == 13) {
                e.preventDefault();
                var pagerTd = $(e.target).parents('td')[0];
                var pageCount = pagerTd.className.indexOf('categ') != -1 ? this.model.categoricalPageCount : this.model.seriesPageCount;
                if (parseInt(e.target.value) > pageCount || parseInt(e.target.value) < 1 || e.target.value == "") {
                    this._restorePageNo(e);
                    alert("Enter valid page number");
                }
                else {
                    if (pagerTd.className.indexOf('categ') != -1 && this.model.categoricalCurrentPage != parseInt(e.target.value)) {
                        this.model.categoricalCurrentPage = e.target.value;
                        if (this.targetControlName == "OlapGrid") this.targetControl.refreshPagedOlapGrid(pagerTd.className, e.target.value);
                    }
                    else if (pagerTd.className.indexOf('series') != -1 && this.model.seriesCurrentPage != parseInt(e.target.value)) {
                        this.model.seriesCurrentPage = e.target.value;
                        if (this.targetControlName == "OlapGrid") this.targetControl.refreshPagedOlapGrid(pagerTd.className, e.target.value);
                    }
                    this._setNavigators(e.target.value, pageCount, pagerTd);
                    e.target.blur();
                }
            }
            else {
                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 || (e.keyCode == 65 && e.ctrlKey === true) || (e.keyCode >= 35 && e.keyCode <= 39)) return;
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) e.preventDefault();
            }
        },

        /**
        * This function is used to restore the current page numbers in Olap Pager.
        *
        * @private  
        */
        _restorePageNo: function (e) { e.target.value = e.target.id.indexOf("Categ") != -1 ? this.model.categoricalCurrentPage : this.model.seriesCurrentPage; },

        /**
        * This function is used to enable/disable the navigators according to the current page on initial loading.
        *
        * @private  
        */
        _setNavigators: function (value, pageCount, pagerTd) {
            if (value == pageCount) {
                $($(pagerTd).find(".moveNext")[0]).addClass("disabled");
                $($(pagerTd).find(".moveLast")[0]).addClass("disabled");
            }
            if (value == "1") {
                $($(pagerTd).find(".movePrevious")[0]).addClass("disabled");
                $($(pagerTd).find(".moveFirst")[0]).addClass("disabled");
            }
            if (value > 1) {
                $($(pagerTd).find(".movePrevious")[0]).removeClass("disabled");
                $($(pagerTd).find(".moveFirst")[0]).removeClass("disabled");
            }
            if (value < pageCount) {
                $($(pagerTd).find(".moveNext")[0]).removeClass("disabled");
                $($(pagerTd).find(".moveLast")[0]).removeClass("disabled");
            }
        }
    })

    //OLAP Pager Localization
    ej.olap.OlapPager.locale = {};
    //Default english localized values
    ej.olap.OlapPager.locale["en-US"] = {
        SeriesPage: "Series Page",
        CategoricalPage: "Categorical Page"
    };

    /**
    * Enum for PagerModes. Allows the user to select a pager mode to enable the pager for both or any one of the axes. 
    *
    * @enum {String}
    * @global
    */
    ej.olap.OlapPager.Mode = {
        Both: "both",
        Categorical: "categorical",
        Series: "series"
    };

})(jQuery, Syncfusion); ;

        ;