/*!
*  filename: ej.grid.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

(function ($, ej, undefined) {
    ej.gridFeatures = ej.gridFeatures || {};
    ej.gridFeatures.common = {
        /**
		 * It is used to refresh the grid contents. The template refreshment is based on the argument passed along with this method.
         * @alias ejGrid#refreshContent
		 * @return jQuery
		 * @param {boolean} [templateRefresh] When templateRefresh is set true, template and grid contents both are refreshed in grid else only grid content is refreshed
		 * @example 
		 * &lt;div id="Grid"&gt;&lt;/div&gt; 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
		 * gridObj.refreshContent(); // Refreshes the grid contents only
		 * gridObj.refreshContent(true); // Refreshes the template and grid contents
		 * &lt;/script&gt;
		 * @example 
		 * &lt;div id="Grid"&gt;&lt;/div&gt; 
		 * &lt;script&gt;
		 * // Refreshes the grid contents only
		 * $("#Grid").ejGrid("refreshContent");        
		 * // Refreshes the template and grid contents
		 * $("#Grid").ejGrid("refreshContent", true);        
		 * &lt;/script&gt;
         */
        refreshContent: function ( refreshTemplate) {
             refreshTemplate && this.refreshTemplate();
            var args = {};
            args.requestType = ej.Grid.Actions.Refresh;
            this._processBindings(args);
        },

        /**
		 * Resolves row height issue when unbound column is used with FrozenColumn
         * @alias ejGrid#rowHeightRefresh
		 * @return jQuery
		 * @example 
		 * &lt;div id="Grid"&gt;&lt;/div&gt; 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
		 * gridObj.rowHeightRefresh(); // Resolves row height issue
		 * &lt;/script&gt;
		 * @example 
		 * &lt;div id="Grid"&gt;&lt;/div&gt; 
		 * &lt;script&gt;         
		 * // Resolves row height issue
		 * $("#Grid").ejGrid("rowHeightRefresh");   
		 * &lt;/script&gt;
         */
        rowHeightRefresh: function () {
            if (this.model.scrollSettings.frozenColumns > 0 && this._isUnboundColumn) {
                var maxHeight = 0;
                var frozenContentHeight = this._gridContent.find(".e-frozencontentdiv tr:eq(1) .e-rowcell:eq(0)").outerHeight();
                var movableContentHeight = this._gridContent.find(".e-movablecontentdiv tr:eq(1) .e-rowcell:eq(0)").outerHeight();
                if (frozenContentHeight != movableContentHeight) {
                    if (this._gridContent.find("style").length > 0)
                        this._gridContent.find("style").remove()
                    var arr = [frozenContentHeight, movableContentHeight];
                    maxHeight = Math.round(ej.max(arr));
                    if ((this.model.editSettings.allowEditing || this.model.editSettings.allowAdding) && this.model.editSettings.editMode == "normal")
                        $("<style type='text/css'>.e-rowcell { height: " + maxHeight + "px;  }.e-grid .e-editedrow .e-rowcell{ padding:0.7em;}  </style>").prependTo(this._gridContent);
                    else
                        $("<style type='text/css'>.e-rowcell{ height: " + maxHeight + "px} </style>").prependTo(this._gridContent);
                }
            }
        },

        /**
		 * To refresh the grid data source.
         * @alias ejGrid#dataSource
		 * @return jQuery
         * @param {array} datasource Pass new data source to the grid
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Refreshes the grid data source
		 * gridObj.dataSource(data); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Refreshes the grid data source
		 * $("#Grid").ejGrid("dataSource", data);        
		 * &lt;/script&gt;
         */
        dataSource: function (dataSource) {
            this._dataSource(dataSource);
            this._refreshDataSource(dataSource);
        },
        _refreshDataSource: function (dataSource) {
            if (dataSource instanceof ej.DataManager)
                this._dataManager = dataSource;
            else
                this._dataManager = ej.DataManager(dataSource);
            this.refreshContent(true);
            if (!ej.isNullOrUndefined(this. getPager())) {
                this.getPager().ejPager("model.currentPage", 1);
                this._refreshGridPager();
            }
        },
        /**
		 * It is used to hide columns based on the header text in grid control.
         * @alias ejGrid#hideColumns
		 * @return jQuery
		 * @param {array/string} headerText you can pass either array of header text of various columns or a header text of a column to hide 
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
		 * gridObj.hideColumns("Order ID"); // Hides column based on the given header text of the column
		 * gridObj.hideColumns(["Order ID", "Customer ID"]); // Hide columns based on the array of header text of the columns given
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Hide column based on the given header text of the column
		 * $("#Grid").ejGrid("hideColumns", "Order ID"); 
		 * // Hide columns based on the array of header text of the columns given
		 * $("#Grid").ejGrid("hideColumns", ["Order ID", "Customer ID"]); 			
		 * &lt;/script&gt;
         */
        hideColumns: function (c) {
            var i, count = 0, args = {}, index;
            if ($.isArray(c)) {
                for (i = 0; i < c.length; i++) {
                    index = $.inArray(c[i], this._visibleColumns);
                    if (index != -1) {
                        this._hiddenColumns.push(c[i]);
                        this._visibleColumns.splice(index, 1);
                    }
                }
            } else {
                index = $.inArray(c, this._visibleColumns);
                if (index != -1) {
                    this._hiddenColumns.push(c);
                    this._visibleColumns.splice(index, 1);
                }
            }
            for (i = 0; i < this.model.columns.length; i++) {
                if ($.inArray(this.model.columns[i].headerText, this._hiddenColumns) != -1) {
                    this.model.columns[i].visible = false;
                    count++;
                }
                if (this._hiddenColumns.length == count)
                    break;
            }
            this.refreshTemplate();
            args.requestType = "refresh";
            this.sendDataRenderingRequest(args);
            this._hideHeaderColumn(this._hiddenColumns);
            this.model.allowScrolling && this.getScrollObject().refresh();
        },
        /**
         * It is used to show columns based on the header text in grid control.
         * @alias ejGrid#showColumns
         * @return jQuery
         * @param {array/string} headerText you can pass either array of header text of various columns or a header text of a column to show 
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * gridObj.showColumns("Order ID"); // Shows column based on the given header text of the column
         * gridObj.showColumns(["Order ID", "Customer ID"]); // Shows columns based on the array of header text of the columns given
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Shows column based on the given header text of the column
         * $("#Grid").ejGrid("showColumns", "Order ID"); 
         * // Shows columns based on the array of header text of the columns given
         * $("#Grid").ejGrid("showColumns", ["Order ID", "Customer ID"]); 			
         * &lt;/script&gt;
         */
        showColumns: function (c) {
            var i, count = 0, args = {}, index, column;
            if ($.isArray(c)) {
                for (i = 0; i < c.length; i++) {
                    index = $.inArray(c[i], this._hiddenColumns);
                    if (index != -1) {
                        this._hiddenColumns.splice(index, 1);
                        this._visibleColumns.push(c[i]);
                    }
                }
            } else {
                index = $.inArray(c, this._hiddenColumns);
                if (index != -1) {
                    this._hiddenColumns.splice(index, 1);
                    this._visibleColumns.push(c);
                }
            }
            for (i = 0; i < this.model.columns.length; i++) {
                if ($.inArray(this.model.columns[i].headerText, this._visibleColumns) != -1) {
                    this.model.columns[i].visible = true;
                    count++;
                }
                if (this._visibleColumns.length == count)
                    break;
            }
            this.refreshTemplate();
            args.requestType = "refresh";
            this.sendDataRenderingRequest(args);
            this._showHeaderColumn(this._visibleColumns);
        },
        /**
		 * To refresh the template of the grid control
         * @alias ejGrid#refreshTemplate
		 * @return jQuery
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Refreshes the template of the grid control
		 * gridObj.refreshTemplate(); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Refreshes the template of the grid control.
		 * $("#Grid").ejGrid("refreshTemplate");        
		 * &lt;/script&gt;
         */
         refreshTemplate: function () {
            this.addInitTemplate();
            if (this.model.editSettings.allowEditing || this.model.editSettings.allowAdding) {
                if (this.model.editSettings.editMode == "normal")
                    this.addEditingTemplate();
                else if (this.model.editSettings.editMode == "dialog" || this.model.editSettings.editMode == "externalform" ||
                    this.model.editSettings.editMode == "inlineform")
                    this.addDialogEditingTemplate();
                else if (this.model.editSettings.editMode == "dialogtemplate" || this.model.editSettings.editMode == "externalformtemplate" ||
                    this.model.editSettings.editMode == "inlineformtemplate")
                    this.addExternalDialogEditingTemplate();
            }
            if (this.model.allowGrouping) this.addGroupingTemplate();
        },
        set_dropColumn: function (from, to) {
            if (this.model.allowReordering && from != to) {
                this.model.columns.splice(to, 0, this.model.columns.splice(from, 1)[0]);
                var columns = this.model.columns;
                var $headerCell = this.getHeaderTable().find(".e-headercelldiv");
                var $attributeCollection = { "attributes": [] };
                var $tmp = {};
                var fromIndex = from < to ? from : to;
                var toIndex = from < to ? to : from;
                var item = 0;
                for (var i = fromIndex; i <= toIndex; i++) {
                    var cellAttributes = $headerCell[i].attributes;
                    for (var j = 0; j < cellAttributes.length; j++) {
                        $tmp[cellAttributes[j].name] = cellAttributes[j].value;
                    }
                    $attributeCollection.attributes.push($tmp);
                    $tmp = $attributeCollection.attributes[item];
                    for (var attr in $tmp) {
                        $headerCell[i].removeAttribute(attr);
                    }
                    $tmp = {};
                    item++;
                }
                var spliceFrom = from < to ? $attributeCollection.attributes.length - 1 : 0;
                var spliceTo = from < to ? 0 : $attributeCollection.attributes.length - 1;
                $attributeCollection.attributes.splice(spliceFrom, 0, $attributeCollection.attributes.splice(spliceTo, 1)[0]);
                //Add attributes
                var j = 0;
                for (var i = fromIndex; i <= toIndex; i++) {

                    var $attrColl = $attributeCollection.attributes[j];
                    for (var attr in $attrColl) {
                        $headerCell[i].setAttribute(attr, $attrColl[attr]);
                    }
                    j++;
                }
				this._columnsWidthCollection.splice(to,0,this._columnsWidthCollection.splice(from,1)[0]);
                this._fieldColumnNames = this._headerColumnNames = [];
                for (var count = 0; count < columns.length; count++) {
                    this._fieldColumnNames[columns[count].headerText] = columns[count].field;
                    this._headerColumnNames[columns[count].field] = columns[count].headerText;
                    $($headerCell[count]).text(columns[count].headerText);
                }
                var args = {};
                args.requestType = ej.Grid.Actions.Reorder;
                this.addInitTemplate();
                this.sendDataRenderingRequest(args);
            }
        },
        /**
		 * It is used to get the grid pager of grid control.
         * @alias ejGrid#getPager
		 * @return gridPager
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Gets grid pager of grid control
		 * gridObj.getPager(); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Gets grid pager of grid control
		 * $("#Grid").ejGrid("getPager");        
		 * &lt;/script&gt;
         */
         getPager: function () {
            return this._gridPager;
        },
        /**
		 * It is used to get the footer table of grid control.
         * @alias ejGrid#getFooterTable
		 * @return gridFooterTable
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Gets grid footer table of grid control
		 * gridObj.getFooterTable(); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Gets grid footer table of grid control
		 * $("#Grid").ejGrid("getFooterTable");        
		 * &lt;/script&gt;
         */
        getFooterTable: function () {
            return this._gridFooterTable;
        },

        setGridFooterTable: function (value) {
            this._gridFooterTable = value;
        },
        /**
		 * It is used to get the footer content of grid control.
         * @alias ejGrid#getFooterContent
		 * @return gridFooterContent
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Gets grid footer content of grid control
		 * gridObj.getFooterContent(); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Gets grid footer content of grid control
		 * $("#Grid").ejGrid("getFooterContent");        
		 * &lt;/script&gt;
         */
        getFooterContent: function () {
            return this._gridFooterContent;
        },

        setGridFooterContent: function (value) {
            this._gridFooterContent = value;
        },
        /**
		 * It is used to get the scroll object of grid control.
         * @alias ejGrid#getScrollObject
		 * @return scrollObject
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Gets scroll object of grid control
		 * gridObj.getScrollObject(); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Gets scroll object of grid control
		 * $("#Grid").ejGrid("getScrollObject");        
		 * &lt;/script&gt;
         */
        getScrollObject: function () {
            if (this._scrollObject == null || ej.isNullOrUndefined(this._scrollObject.model))
                this._scrollObject = this.getContent().ejScroller("instance");
            return this._scrollObject;
        },
        setGridPager: function (value) {
            this._gridPager = value;
        },
        /**
         * It is used to get the grid row height.
         * @alias ejGrid#getRowHeight
         * @return rowHeight
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Gets the row height of the grid
         * gridObj.getRowHeight();  
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Gets the row height of the grid
         * $("#Grid").ejGrid("getRowHeight");   
         * &lt;/script&gt;
         */
        getRowHeight: function () {
            var rowHeight = -1;
            var trColl = this.getContentTable().find('tr:not(.e-virtualrow)');
            if (trColl.length > 1) {
                if (trColl[0].getBoundingClientRect() && this.getContentTable().find("tr")[0].getBoundingClientRect().height) {
                    rowHeight = trColl[0].getBoundingClientRect().height;
                } else
                    rowHeight = trColl[0].offsetHeight;
            }
            return rowHeight == -1 ? 38 : rowHeight;
        },
        /**
		 * It is used to get the current page index in grid.
         * @alias ejGrid#getCurrentIndex
		 * @return Current PageIndex
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Gets the current page index in grid
		 * gridObj.getCurrentIndex();  
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Gets the current page index in grid
		 * $("#Grid").ejGrid("getCurrentIndex");   
		 * &lt;/script&gt;
         */
        getCurrentIndex: function () {
            return ((this._currentPage() - 1) * (this.model.pageSettings.pageSize));
        },
        /**
		 * It is used to get the column details based on the given column index in grid control.
         * @alias ejGrid#getColumnByIndex
		 * @return Column Object
		 * @param {number} columnIndex Pass the index of the column to get the corresponding column object
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Gets the column details based on the given column index
		 * gridObj.getColumnByIndex(1); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Gets the column details based on the given column index
		 * $("#Grid").ejGrid("getColumnByIndex", 1);        
		 * &lt;/script&gt;
         */
        getColumnByIndex: function (index) {
            if (index < this.model.columns.length)
                return this.model.columns[index];
            return null;
        },
        set_currentPageIndex: function (val) {
            var pageSetting = this.model.pageSettings;
            var recordCount = this.model.filterSettings.filteredColumns.length == 0 ? this._searchCount == null ? this._gridRecordsCount : this._searchCount : this._filteredRecordsCount;
            if (pageSetting.totalPages == null)
                pageSetting.totalPages = Math.ceil(recordCount / pageSetting.pageSize);
            if (val > pageSetting.totalPages || val < 1 || val == this._currentPage())
                return false;
            if (ej.isNullOrUndefined(this._prevPageNo))
                this._prevPageNo = this._currentPage();
            this._currentPage(val);
            if (this._currentPage() != this._prevPageNo) {
                var args = {};
                args.requestType = "paging";
                this._isVirtualRecordsLoaded = false;
                this.gotoPage(this._currentPage(), args);
                var model = this._refreshVirtualPagerInfo();
                this._showPagerInformation(model);
                return true;
            }
            else
                return false;
        },
        /**
		 * It is used expand or collapse the row based on the row state in grid control.
         * @alias ejGrid#expandCollapse
		 * @return jQuery
		 * @param {object} $target Pass the target object to expand/collapse the row based on its row state
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Expands or collapses the row based on the row state
		 * gridObj.expandCollapse($("tr td.recordplusexpand > div").first());  
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Expands or collapses the row based on the row state
		 * $("#Grid").ejGrid("expandCollapse", $("tr td.recordplusexpand > div").first());        
		 * &lt;/script&gt;
         */
        expandCollapse: function ($target) {
            if ($target.prop("tagName") == "DIV" && ($target.parent().hasClass("e-recordplusexpand") || $target.parent().hasClass("e-recordpluscollapse") || $target.parent().hasClass("e-detailrowcollapse") || $target.parent().hasClass("e-detailrowexpand")))
                $target = $target.parent();
            if ($target.hasClass("e-recordplusexpand") && this.model.groupSettings.groupedColumns.length) {
                var cellIndex = $target.index();
                var $rows = $target.closest('tr').next();
                $rows.hide();
                $target.removeClass("e-recordplusexpand").addClass("e-recordpluscollapse").find("div").removeClass("e-gdiagonalnext").addClass("e-gnextforward");
            } else if ($target.hasClass("e-recordpluscollapse") && this.model.groupSettings.groupedColumns.length) {
                var cellIndex = $target.index();
                var $rows = $target.closest('tr').next();
                var toExpandRows = [];
                var $row = $rows;
                if ($($row[0].cells[cellIndex]).hasClass("e-indentcell")) {
                    if ($row.children(".e-indentcell").length == ($target.parent().children('.e-indentcell').length) + 1) {
                        $row.show();
                        var $expand = $row.children(".e-recordplusexpand");
                        if ($expand != null && $expand.length > 0) {
                            toExpandRows.push($expand);
                        }
                    }
                }
                $target.removeClass("e-recordpluscollapse").addClass("e-recordplusexpand").find("div").removeClass("e-gnextforward").addClass("e-gdiagonalnext");
                for (var i = 0; i < toExpandRows.length; i++) {
                    toExpandRows[i].removeClass("e-recordplusexpand").addClass("e-recordpluscollapse").find("div").removeClass("e-gdiagonalnext").addClass("e-gnextforward");
                    this.expandCollapse(toExpandRows[i]);
                }
            } else if ($target.hasClass("e-detailrowexpand")) {
                var cellIndex = $target.index(), proxy = this;
                var rowIndexValue;
                if (this.model.groupSettings.groupedColumns.length > 0)
                    rowIndexValue = this.getIndexByRow($target.closest('tr')) - $target.closest('tr').parents('tr').prevAll('tr').find('td.e-summaryrow').parent().length;
                else
                    rowIndexValue = this.getIndexByRow($target.closest('tr')) - $target.closest('tr').prevAll("tr.e-detailrow").length;
                var $rows = $target.closest('tr').next();
                $rows.hide(0, function () {
                    var args = { masterRow: $target.closest('tr'), detailsRow: $rows, masterData: proxy._currentJsonData[rowIndexValue] };
                    var foreignKeyData = proxy._getForeignKeyData(args.masterData);
                    if (!ej.isNullOrUndefined(foreignKeyData))
                        args.foreignKeyData = foreignKeyData;
                    proxy._trigger("detailsCollapse", args);

                });
                $target.removeClass("e-detailrowexpand").addClass("e-detailrowcollapse").find("div").addClass("e-gnextforward").removeClass("e-gdiagonalnext");
            } else if ($target.hasClass("e-detailrowcollapse")) {
                var cellIndex = $target.index(), proxy = this;
                var rowIndexValue;
                if (this.model.groupSettings.groupedColumns.length > 0)
                    rowIndexValue = this.getIndexByRow($target.closest('tr')) - $target.closest('tr').parents('tr').prevAll('tr').find('td.e-summaryrow').parent().length;
                else
                    rowIndexValue = this.getIndexByRow($target.closest('tr')) - $target.closest('tr').prevAll("tr.e-detailrow").length;
                var detailrow = $target.closest('tr').next();
                if (detailrow.hasClass("e-detailrow"))
                    $rows = detailrow;
                else {
                    var detailtr = ej.buildTag("tr.e-detailrow", "", { 'display': 'none' }, {});
                    var indenttd = ej.buildTag("td.e-detailindentcell");
                    var detailstd = ej.buildTag("td.e-detailcell", "", {}, { colspan: this.model.columns.length });
                    $(detailtr).append(indenttd);
                    var rowData = this._currentJsonData[rowIndexValue];
                    $(detailtr).append(detailstd.append($(this.model.detailsTemplate).render(rowData)));

                    $($target.closest('tr')).after(detailtr);
                    this._trigger("detailsDataBound", { detailsElement: detailtr, data: rowData }); //    $(tbody).append(trchild);
                    $rows = detailtr;
                }
                var toExpandRows = [];
                var $row = $rows;
                if ($($row[0].cells[cellIndex]).hasClass("e-detailindentcell")) {
                    $row.show(0, function () {
                        var args = { masterRow: $target.closest('tr'), detailsRow: $rows, masterData: proxy._currentJsonData[rowIndexValue] };
                        var foreignKeyData = proxy._getForeignKeyData(args.masterData);
                        if (!ej.isNullOrUndefined(foreignKeyData))
                            args.foreignKeyData = foreignKeyData;
                        proxy._trigger("detailsExpand", args);
                    });
                    var $expand = $row.children(".e-detailrowexpand");
                    if ($expand != null && $expand.length > 0) {
                        toExpandRows.push($expand);
                    }
                }
                $target.removeClass("e-detailrowcollapse").addClass("e-detailrowexpand").find("div").addClass("e-gdiagonalnext").removeClass("e-gnextforward");
                for (var i = 0; i < toExpandRows.length; i++) {
                    toExpandRows[i].removeClass("e-detailrowexpand").addClass("e-detailrowcollapse").find("div").removeClass("e-gdiagonalnext").addClass("e-gnextforward");
                    this.expandCollapse(toExpandRows[i]);
                }
            }
        },
        _refreshGridPager: function () {
            if (this. getPager() != null) {
                var pagerModel = this.getPager().ejPager("model"), model = {};
                model.currentPage = this._currentPage();
                if (this._filteredRecordsCount == 0 && this.model.currentViewData.length == 0 && (ej.isNullOrUndefined(this._prevPageNo) || this._prevPageNo)) {
                    model.currentPage = 0;
                    this._prevPageNo = pagerModel.currentPage;
                    this.model.pageSettings.currentPage = 0;
                } else if (pagerModel.currentPage == 0 && (ej.isNullOrUndefined(this._prevPageNo) || this._prevPageNo))
                    model.currentPage = this._prevPageNo;
                model.totalRecordsCount = this.model.filterSettings.filteredColumns.length == 0 ? this._searchCount == null ? this._gridRecordsCount : this._searchCount : this._filteredRecordsCount;
                if (ej.util.isNullOrUndefined(model.currentPage))
                    model.currentPage = this._currentPage();
                this.getPager().ejPager("option", model).ejPager("refreshPager");
            }
        },
        _showHeaderColumn: function (showColumns, field) {
            var $head = this.getHeaderTable().find("thead");
            var $headerCell = $head.find(".e-headercell");
            var $filterBarCell = $head.find(".e-filterbar").find(".e-filterbarcell");
            var $col = this.getHeaderTable().find("colgroup").find("col"), column;
            for (var i = 0; i < showColumns.length; i++) {
                if (field)
                    column = this.getColumnByField(showColumns[i]);
                else
                    column = this.getColumnByHeaderText(showColumns[i]);
                var index = $.inArray(column, this.model.columns);
                var thIndex = $headerCell.eq(index).removeClass("e-hide").index();
                $filterBarCell.eq(thIndex).removeClass("e-hide");
                $col.eq(index).css("display", "");
            }
        },
        _hideHeaderColumn: function (hiddenColumns, field) {
            var $head = this.getHeaderTable().find("thead");
            var $headerCell = $head.find(".e-headercell");
            var $filterBarCell = $head.find(".e-filterbar").find(".e-filterbarcell");
            var $col = this.getHeaderTable().find("colgroup").find("col"), column;
            for (var i = 0; i < hiddenColumns.length; i++) {
                if (field)
                    column = this.getColumnByField(hiddenColumns[i]);
                else
                    column = this.getColumnByHeaderText(hiddenColumns[i]);
                var index = $.inArray(column, this.model.columns);
                var thIndex = $headerCell.eq(index).addClass("e-hide").index();
                $filterBarCell.eq(thIndex).addClass("e-hide");
                if ($col.length > this.model.columns.length)
                    $col = $col.slice($col.length - this.model.columns.length);
                $col.eq(index).css("display", "none");
            }
        },
        _checkSkipAction: function (args) {
            switch (args.requestType) {
                case ej.Grid.Actions.Save:
                case ej.Grid.Actions.Delete:
                    return true;
            }
            return false;
        },
        _unboundTemplateRendering: function (unboundTemplateId) {
            return $("#" + unboundTemplateId).html();
        },
        _processBindings: function (args) {
            this.model.query = this.model.enablePersistence ? new ej.Query() : this.commonQuery.clone();
            if (!this._checkSkipAction(args) && this._trigger("actionBegin", args))
                return true;
            if (this.model.editSettings.editMode == "batch" && args.requestType != "batchsave" && args.requestType != "cancel" && !this._confirmedValue && this._bulkChangesAcquired()) {
                this._confirmDialog.find(".e-content").html(this._getLocalizedLabels("BatchSaveLostChanges"));
                this._confirmDialog.ejDialog("open");
                this._requestArgs = args;
                return false;
            }
            this._ensureDataSource(args);
            if (this.model.enableRTL) {
                !this.element.hasClass("e-rtl") && this.element.addClass("e-rtl");
            } else {
                this.element.hasClass("e-rtl") && this.element.removeClass("e-rtl")
            }
            if (args.requestType == ej.Grid.Actions.Delete && this.model.groupSettings.groupedColumns.length == 0)
                args.tr.remove();
            if (this._dataSource() instanceof ej.DataManager && args.requestType != ej.Grid.Actions.BeginEdit && args.requestType != ej.Grid.Actions.Cancel && args.requestType != ej.Grid.Actions.Add) {
                var queryPromise = this._dataSource().executeQuery(this.model.query);
                var waitingPopup = this.element.ejWaitingPopup("instance");
                this.element.ejWaitingPopup("show");
                queryPromise.done(ej.proxy(function (e) {
                    this.element.ejWaitingPopup("hide");
                    this.model.currentViewData = e.result;
                    this._processData(e, args);
                }, this));
                queryPromise.fail(ej.proxy(function (e) {
                    this.element.ejWaitingPopup("hide");
                    e = [];
                    this.model.currentViewData = [];
                    this._processData(e, args);
                }, this));
            } else
                this.sendDataRenderingRequest(args);
        },
        _createUnboundElement: function (column) {
            var divElement = document.createElement("div");
            divElement.id = this._id + column.headerText.replace(/\s+/g, "") + "_UnboundTemplate";
            var $div = ej.buildTag("div.e-unboundcelldiv"), commands = column["commands"];
            for (var unbounType = 0; unbounType < commands.length; unbounType++) {
                var $button = ej.buildTag("input.e-" + commands[unbounType].type + "button", "", {}, { type: "button" });
                $button.val(commands[unbounType].type);
                $div.append($button);
            }
            $("body").append($(divElement).html($div).hide());
            return divElement;
        },
        _refreshUnboundTemplate: function ($target) {
            if (this._isUnboundColumn) {
                var index = 0;
                for (var column = 0; column < this.model.columns.length; column++) {
                    if (this.model.columns[column]["isUnbound"]) {
                        var $unboundDivs = $target.find(".e-unboundcell.e-" + this.model.columns[column]["headerText"].replace(/\s+/g, "")).find(".e-unboundcelldiv");
                        var commands = $.extend(true,[],this.model.columns[column].commands);
                        for (var j = 0; j < commands.length; j++) {
                            var width = ej.isNullOrUndefined(commands[j].buttonOptions.width) ? "52" : commands[j].buttonOptions.width;
                            var height = ej.isNullOrUndefined(commands[j].buttonOptions.height) ? "30" : commands[j].buttonOptions.height;
                            commands[j].buttonOptions.width = ej.isNullOrUndefined(commands[j].buttonOptions.width) ? "52" : commands[j].buttonOptions.width;
                            commands[j].buttonOptions.height = ej.isNullOrUndefined(commands[j].buttonOptions.height) ? "28" : commands[j].buttonOptions.height;
                            commands[j].buttonOptions.cssClass = this.model.cssClass;
                            commands[j].buttonOptions.enableRTL = this.model.enableRTL;
                            var $buttons = $unboundDivs.find(".e-" + commands[j].type + "button");
                            if ($target.closest(".e-editcell").length) {
                                if (commands[j].type == "save" || commands[j].type == "cancel")
                                    $buttons.show();
                                else {
                                    $buttons.hasClass("e-deletebutton") && $buttons.hide();
                                    $buttons.hasClass("e-editbutton") && $buttons.hide();
                                }
                            } else {
                                if (commands[j].type == "save" || commands[j].type == "cancel")
                                    $buttons.hide();
                                else {
                                    $buttons.hasClass("e-deletebutton") && $buttons.show();
                                    $buttons.hasClass("e-editbutton") && $buttons.show();
                                }
                            }
                            if ($($buttons[0]).data("ejButton"))
                                $buttons.filter(".e-button").ejButton("destroy");
                            $buttons.ejButton(commands[j].buttonOptions);
                        }
                    } else
                        continue;
                }
            }
        },
        _gridTemplate: function (templateId) {
            return $("#" + templateId).render(this.data);
        },
        _createTemplateElement: function (column) {
            var scriptElement = document.createElement("script");
            scriptElement.id = (this._id + column.headerText + $.inArray(column, this.model.columns) + "_Template").split(" ").join("");
            scriptElement.type = "text/x-jsrender";
            scriptElement.text = $(column["templateID"]).html();
            $("body").append(scriptElement);
            $(column["templateID"]).hide();
            return scriptElement;
        },
        _renderGridPager: function () {
            var $div = $(document.createElement('div'));
            var pagerModel = {};
            this.model.pageSettings.click = this._gPagerClickHandler;
            this.model.pageSettings.totalRecordsCount = this._gridRecordsCount;
            this.model.pageSettings.enableRTL = this.model.enableRTL;
            this.model.pageSettings.locale = this.model.locale;
            this.model.pageSettings.enableQueryString = this.model.pageSettings.enableQueryString;
            if (this.model.allowFiltering && this.model.filterSettings.filterType == "filterbar")
                pagerModel.enableExternalMessage = true;
            $.extend(pagerModel, this.model.pageSettings);
            pagerModel.currentPage = this._currentPage();
            pagerModel.masterObject = this;
            this.setGridPager($div);
            $div.ejPager(pagerModel);
            $div.ejPager("refreshPager");
            pagerModel = $div.ejPager("model");
            this.model.pageSettings.totalPages = pagerModel.totalPages;
            if (this._currentPage() !== pagerModel.currentPage)
                this._currentPage(pagerModel.currentPage);
            return $div;
        },
        /**
		 * It is used to send a paging request at specified page in grid control.
         * @alias ejGrid#gotoPage
		 * @return jQuery
		 * @param {number} pageIndex Pass the page index to perform paging at specified page index
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Sends a paging request to the grid with specified page index
		 * gridObj.gotoPage(3);
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Sends a paging request to the grid with specified page index
		 * $("#Grid").ejGrid("gotoPage", 3);        
		 * &lt;/script&gt;
         */
        gotoPage: function (pageIndex) {
            if (!this.model.allowPaging && (!this.model.allowScrolling && !this.model.scrollSettings.allowVirtualScrolling))
                return;
            var args = {}, returnValue;
            args.previousPage = this._currentPage();
            this._currentPage(pageIndex);
            args.endIndex = ((this._currentPage() * this.model.pageSettings.pageSize) > this._gridRecordsCount) ? (this._gridRecordsCount) : (this._currentPage() * this.model.pageSettings.pageSize);
            args.startIndex = (this._currentPage() * this.model.pageSettings.pageSize) - this.model.pageSettings.pageSize;
            args.currentPage = pageIndex;
            if (this.model.allowPaging) {
                //this.model.pageSettings.currentPage = pageIndex;
                //this. getPager().ejPager("refreshPager");
                args.requestType = ej.Grid.Actions.Paging;
            }
            if (this.model.scrollSettings.allowVirtualScrolling && this.model.allowScrolling) {
                args.requestType = ej.Grid.Actions.VirtualScroll;
            }
            returnValue = this._processBindings(args);
            if (returnValue)
                this._currentPage(args.previousPage);
            this._primaryKeyValues = [];
        },
        _gPagerClickHandler: function (sender) {
            if (this._prevPageNo == sender.currentPage)
                return;
            this.model.masterObject.gotoPage(sender.currentPage);
            return false;
        },
        _processData: function (e, args) {
            if (e.count == 0 && this.model.currentViewData.length)
                this._gridRecordsCount = e.result.length;
            else
                this._gridRecordsCount = e.count;
            if (this.getPager() != null)
                this.model.pageSettings.totalRecordsCount = this._gridRecordsCount;
            if ((args.requestType == ej.Grid.Actions.Filtering || ej.Grid.Actions.Save || (this.model.filterSettings.filteredColumns.length > 0 && args.requestType == ej.Grid.Actions.Refresh)))
                this._filteredRecordsCount = e.count;
            this.sendDataRenderingRequest(args);
        },
        _renderGridFooter: function () {
            if (this.model.summaryRows.length > 0) {
                var _$gridFooter = ej.buildTag("div.e-gridfooter");
                var $table = ej.buildTag("table.e-gridsummary", "", {}, { cellspacing: "0.25px" });
                this.setGridFooterContent(_$gridFooter);
                if (this.model.scrollSettings.frozenColumns > 0) {
                    var $frozenFooterDiv = ej.buildTag("div.e-frozenfooterdiv"), $movableFooter = ej.buildTag("div.e-movablefooter")
                        , $tableClone = $table.clone(), $movableFooterDiv = ej.buildTag("div.e-movablefooterdiv");
                    $movableFooter.append($movableFooterDiv);
                    $table.append(this.getHeaderTable().first().find('colgroup').clone());
                    $tableClone.append(this.getHeaderTable().last().find('colgroup').clone());
                    $frozenFooterDiv.append($table);
                    $movableFooterDiv.append($tableClone);
                    this.setGridFooterTable($table.add($tableClone));
                    this._createSummaryRows(this.getFooterTable());
                    _$gridFooter.append($frozenFooterDiv.add($movableFooter));
                    _$gridFooter.find(".e-frozenfooterdiv").outerWidth(this.getHeaderContent().find(".e-frozenheaderdiv").width())
                          .end().find(".e-movablefooterdiv").outerWidth(this.getContent().find(".e-movablecontentdiv").width());
                }
                else {
                    $table.append(this.getHeaderTable().find('colgroup').clone());
                    this.setGridFooterTable($table);
                    this._createSummaryRows(this.getFooterTable());
                    _$gridFooter.append($table);
                }
                return _$gridFooter;
            } else
                throw "summary row collection is missing";
        },
        _createSummaryRows: function (table, summaryData) {
            var col = table.find("col");
            if (table.find("tbody").length > 0)
                table.find("tbody").remove();
            var $tBody = ej.buildTag('tbody'), proxy = this, $tBodyClone = $tBody.clone();
            var summaryCol = this.model.summaryRows;
            if (!ej.isNullOrUndefined(summaryData) && this._isCaptionSummary)
                summaryCol = this._captionSummary();
            $.each(summaryCol, function (indx, row) {
                if (row.showTotalSummary === false && ej.isNullOrUndefined(summaryData)) return true;
                var $tr = ej.buildTag('tr');
                for (var i = 0; i < proxy.model.groupSettings.groupedColumns.length; i++) {
                    $tr.prepend(ej.buildTag('td').addClass("e-indentcell"));
                }
                if (proxy.model.detailsTemplate != null) {
                    if (proxy.model.groupSettings.groupedColumns.length != 0)
                        $tr.children("td.e-indentcell").last().after("<td class='e-summaryrow'></td>");
                    else
                        $tr.prepend("<td class='e-summaryrow'></td>");
                }
                var $cells = proxy.getHeaderTable().find('td').clone().addClass("e-summaryrow");
                $cells.first().html(row.title);
                proxy._hideSummaryColumn($cells, col);
                if (proxy.model.scrollSettings.frozenColumns > 0) {
                    var $trClone = $tr.clone();
                    $tBody.append($tr.append($cells.slice(0, proxy.model.scrollSettings.frozenColumns)));
                    $tBodyClone.append($trClone.append($cells.slice(proxy.model.scrollSettings.frozenColumns)));
                }
                else
                    $tBody.append($tr.append($cells));
                $.each(row.summaryColumns, function (cindx, col) {
                    var value = proxy._getSummaryValues(col, summaryData), prefix = col.prefix ? col.prefix : "";
                    var index = proxy.getColumnIndexByField(col.displayColumn), suffix = col.suffix ? col.suffix : "";
                    $($cells[index]).html(prefix + (col.format ? proxy.formatting(col.format, value) : value) + suffix).css("text-align", proxy.model.columns[index].textAlign);
                });
            });
            if (this.model.scrollSettings.frozenColumns > 0) {
                table.first().append($tBody);
                table.last().append($tBodyClone);
            }
            else
                table.append($tBody);
        },
        _getSummaryValues: function (summaryCol, summaryData) {
            var $value, jsonData;
            if (!ej.isNullOrUndefined(summaryData))
                jsonData = summaryData;
            else if (this.model.filterSettings.filteredColumns.length > 0)
                jsonData = this._filteredRecords;
            else
                jsonData = this._dataSource();
            var dbMgr = jsonData instanceof ej.DataManager ? jsonData : ej.DataManager(jsonData);
            switch (summaryCol.summaryType) {
                case ej.Grid.SummaryType.Maximum:
                    var obj = ej.max(jsonData, summaryCol.dataMember);
                    $value = obj[summaryCol.dataMember];
                    break;
                case ej.Grid.SummaryType.Minimum:
                    var obj = ej.min(jsonData, summaryCol.dataMember);
                    $value = obj[summaryCol.dataMember];
                    break;
                case ej.Grid.SummaryType.Average:
                    $value = ej.avg(jsonData, summaryCol.dataMember);
                    break;
                case ej.Grid.SummaryType.Sum:
                    $value = ej.sum(jsonData, summaryCol.dataMember);
                    break;
                case ej.Grid.SummaryType.Count:
                    $value = jsonData.length;
                    break;
                case ej.Grid.SummaryType.TrueCount:
                    var predicate = ej.Predicate(summaryCol.dataMember, "equal", true);
                    $value = dbMgr.executeLocal(ej.Query().where(predicate)).length;
                    break;
                case ej.Grid.SummaryType.FalseCount:
                    var predicate = ej.Predicate(summaryCol.dataMember, "equal", false);
                    $value = dbMgr.executeLocal(ej.Query().where(predicate)).length;
                    break;
                case ej.Grid.SummaryType.Custom:
                    $value = summaryCol.customSummaryValue;
                    break;
            }
            return $value;
        },
        _hideCaptionSummaryColumn: function () {
            var headerColumn = this.getHeaderTable().find('.e-headercelldiv[ej-mappingname]').first();
            var captionTd = this.getContentTable().find('.e-groupcaption').clone();
            var groupCaptionParent = this.getContentTable().find('.e-groupcaption').parent();
            var colLength = this.model.columns.length - 1;
            if (this._isCaptionSummary) {
                this.getContentTable().find('.e-summaryrow').remove();
                this.getFooterTable().find("tbody td").slice(-colLength).removeClass("e-groupcaptionsummary").addClass("e-summaryrow");
				if(this.getFooterTable() != null){
                     this.getContentTable().find('.e-recordplusexpand').parent().children('.e-indentcell').remove();
				}
                if (!this.model.groupSettings.showGroupedColumn) {
                    if (!headerColumn.is(':visible')) {
                        this.getContentTable().find('.e-groupcaption').addClass("e-hide");
                        for (i = 0; i < captionTd.length; i++) {
                            groupCaptionParent.eq(i).children().not('.e-hide,.e-recordplusexpand').filter('td.e-groupcaptionsummary:first').replaceWith(captionTd.eq(i));
                        }
                    }
                }
            }
            this.getContentTable().find('.e-recordtable').find('.e-indentcell').remove();
        },
        _hideSummaryColumn: function (td, col) {
            if (col.length > this.model.columns.length)
                col = col.slice(col.length - this.model.columns.length);
            if (!this.model.groupSettings.showGroupedColumn && this.model.showSummary) {
                for (i = 0; i < this.model.columns.length; i++) {
                    for (j = 0; j < this.model.groupSettings.groupedColumns.length || j < this._hiddenColumns.length; j++) {
                        var headerColumn = this.getHeaderTable().find('.e-headercelldiv[ej-mappingname]');
                        if (!headerColumn.eq(i).is(':visible')) {
                            col.eq(i).css("display", "none");
                            $(td[i]).addClass("e-hide");
                            break;
                        }
                        else {
                            if (col.eq(i).css("display") == "none")
                                col.eq(i).css("display", "");
                        }
                    }
                }
            }
            else {
                for (i = 0; i < this.model.columns.length; i++) {
                    if (!this.model.columns[i]["visible"]) {
                        col.eq(i).css("display", "none");
                        $(td[i]).addClass("e-hide");
                    }
                    else {
                        if (col.eq(i).css("display") == "none")
                            col.eq(i).css("display", "");
                    }
                }
            }
        },
        _getRowHeights: function () {
            var trs = this.getRows();
            if (trs !== null) {
                this._rowHeightCollection = [];
                if ((this.model.scrollSettings.frozenColumns > 0 && trs[0] !== undefined) || (typeof trs[0].item !== "undefined" && typeof trs[0].length == "number"))
                    trs = trs[0];
                for (var i = 0 ; i < trs.length ; i++) {
                    this._rowHeightCollection[i] = trs[i].offsetTop;
                }
            }
            return this._rowHeightCollection;
        },
        _initScrolling: function () {
            if ((this.model.scrollSettings.frozenColumns > 0 || this.model.scrollSettings.frozenRows > 0) && (this.model.allowGrouping || this.model.rowTemplate != null || this.model.detailsTemplate != null || this.model.scrollSettings.allowVirtualScrolling || this.model.editSettings.editMode == "batch")) {
                this._renderAlertDialog();
                this._alertDialog.find(".e-content").text(this._getLocalizedLabels("FrozenNotSupportedException"));
                this._alertDialog.ejDialog("open");
                return;
            }
            if (this.model.scrollSettings.allowVirtualScrolling && this.model.allowScrolling) {
                this.model.pageSettings.pageSize = this.model.pageSettings.pageSize == 12 ? Math.round(this.model.scrollSettings.height / 38) + 1 : this.model.pageSettings.pageSize;
                this.model.pageSettings.totalPages = Math.ceil(this._gridRecordsCount / this.model.pageSettings.pageSize);
            }
            if (this.model.width || this.model.height) {
                this.model.allowScrolling = true;
                if (this.model.width) this.model.scrollSettings.width = this.model.width;
                if (this.model.height) this.model.scrollSettings.height = this.model.height;
            }
        },
        _checkScrollActions: function (requestType) {
            if (requestType == ej.Grid.Actions.Grouping || requestType == ej.Grid.Actions.Ungrouping || requestType == ej.Grid.Actions.Add || requestType == ej.Grid.Actions.Cancel
                || requestType == ej.Grid.Actions.Save || requestType == ej.Grid.Actions.Delete || requestType == ej.Grid.Actions.Filtering || requestType == ej.Grid.Actions.Paging || requestType == ej.Grid.Actions.Refresh)
                return true;
            return false;
        },
        _refreshScroller: function (args) {
            var gridContent = this.getContent().first(), direction;
            if (ej.isNullOrUndefined(gridContent.data("ejScroller")))
                return;
            if (this.model.scrollSettings.frozenColumns > 0) {
                direction = this.model.enableRTL ? "margin-right" : "margin-left";
                gridContent.find(".e-movablecontent").css(direction, gridContent.find(".e-frozencontentdiv").width() + "px");
                this.getHeaderContent().find(".e-movableheader").removeAttr("style").css(direction, this.getHeaderContent().find(".e-frozenheaderdiv").width() + "px");
                this.refreshScrollerEvent();
                gridContent.find(".e-movablecontent").scrollLeft(this.getHeaderContent().find(".e-movableheader").scrollLeft());
            }
            if (this.model.scrollSettings.frozenRows > 0) {
                this._initFrozenRows();
                var temp = this.getScrollObject().model.scrollTop;
                if (args.requestType == ej.Grid.Actions.Add)
                    this.getScrollObject().scrollY(0, true);
                if (!ej.isNullOrUndefined(this.getScrollObject()._v))
                    this.getScrollObject()._v.skipChange = true;
            }
            if (args.requestType == "beginedit") {
                var temp = this.getScrollObject().model.scrollTop;
                this.getScrollObject().scrollY(0, true);
            }
            gridContent.ejScroller("refresh");
            gridContent.ejScroller("model.enableRTL", this.model.enableRTL);
            if (gridContent.ejScroller("isVScroll"))
                this.element.find(".e-gridheader").addClass("e-scrollcss");
            else
                this.element.find(".e-gridheader").removeClass("e-scrollcss");
            this._getRowHeights();
            if (temp && args.requestType != ej.Grid.Actions.Add) {
                this._currentTopFrozenRow = 0;
                this.getScrollObject().scrollY(temp, true);
            }
        },
        _renderScroller: function () {
            if (!this.model.scrollSettings)
                this.model.scrollSettings = {};

            if (this.model.scrollSettings.width || this.model.width)
                this.element.width(this.model.scrollSettings.width || this.model.width);

            var $content = this.getContent().attr("tabindex", "0"), staticWidth, direction, gridRows = this.getRows();
            
            if (this.model.scrollSettings.frozenColumns > 0) {
                staticWidth = this.getContent().find(".e-frozencontentdiv").width();
                if (staticWidth > this.model.scrollSettings.width) {
                    this.getContent().remove();
                    this.getHeaderTable().eq(1).remove();
                    this._alertDialog.find(".e-content").text(this._getLocalizedLabels("FrozenColumnsViewAlert"));
                    this._alertDialog.ejDialog("open");
                    return;
                }
                direction = this.model.enableRTL ? "margin-right" : "margin-left";
                this.getContent().find(".e-movablecontent").css(direction, staticWidth + "px");
                this.getHeaderContent().find(".e-movableheader").css(direction, staticWidth + "px");
                this.model.scrollSettings["targetPane"] = ".e-movablecontent";
            }
            this._initFrozenRows();
            $content.ejScroller(this.model.scrollSettings);
            if ($content.ejScroller("isVScroll")) {
                this.element.find(".e-gridheader").addClass("e-scrollcss");
            } else
                this.element.find(".e-gridheader").removeClass("e-scrollcss");
            if (this.getBrowserDetails().browser != "msie" && this.model.scrollSettings.frozenColumns == 0) {
                $content.find("div table").first().width(this.getHeaderTable().width());
                this.getHeaderTable().width(this.getHeaderTable().width());
            }
            this.refreshScrollerEvent();
            var proxy = this;
            if (proxy.model.scrollSettings.allowVirtualScrolling) {
                var model = this._refreshVirtualPagerInfo();
                this._showPagerInformation(model);
                $content.ejScroller({
                    scroll: function (e) {
                        (e.source == "button" || e.source == "key" || e.source == "wheel") && proxy._virtualScroll(e);
                    },
                    thumbEnd: function (e) {
                        if (!$(e.originalEvent.target).hasClass("e-rowcell"))
                            proxy._virtualScroll(e);
                    }
                });
            }
        },
        _initFrozenRows: function () {
            var gridRows = this.getRows();
            if (!this.model.currentViewData || this.model.currentViewData.length == 0)
                return;
            if (this.model.scrollSettings.frozenRows > 0 && gridRows != null) {
                this.model.scrollSettings["scroll"] = $.proxy(this._scroll, this);
                this.getContent().find(".e-frozeny").removeClass("e-frozeny")
                    .end().find(".e-frozenrow").removeClass("e-frozenrow");
                if (!ej.isNullOrUndefined(gridRows[0][this.model.scrollSettings.frozenRows - 1]) && !ej.isNullOrUndefined(gridRows[1][this.model.scrollSettings.frozenRows - 1]) && this.model.scrollSettings.frozenColumns > 0)
                    $(gridRows[0][this.model.scrollSettings.frozenRows - 1].cells).add(gridRows[1][this.model.scrollSettings.frozenRows - 1].cells).addClass("e-frozeny").parent().addClass("e-frozenrow");
                else
                    $(gridRows[this.model.scrollSettings.frozenRows - 1].cells).addClass("e-frozeny").parent().addClass("e-frozenrow");
                this.model.scrollSettings.height = this._rowHeightCollection[Math.floor(this.model.scrollSettings.height / this._rowHeightCollection[1])] + 18;
            }
            else
                delete this.model.scrollSettings["scroll"];
        },
        refreshScrollerEvent: function () {
            var proxy = this;
            this.getContent().find(".e-content,.e-movablecontent").scroll(ej.proxy(function (e) {
                if (this.model.scrollSettings.targetPane)
                    this.getHeaderContent().find(".e-movableheader").scrollLeft($(e.currentTarget).scrollLeft());
                else
                    this.getHeaderContent().find("div").first().scrollLeft($(e.currentTarget).scrollLeft());
                if (this.model.scrollSettings.frozenRows > 0 && this.model.editSettings.editMode.indexOf("inlineform") != -1 && this.model.isEdit) {
                    var scrollTop = e.target.scrollTop;
                    this.getContent().find(".e-content").scrollTop(0);
                    this.getScrollObject().scrollY(this.getScrollObject().model.scrollTop + scrollTop, true);
                }
            }, this));
            this.element.find(".e-gridheader").find(".e-headercontent,.e-movableheader").scroll(ej.proxy(function (e) {
                var $currentTarget = $(e.currentTarget);
                if (this.model.scrollSettings.targetPane) {
                    this.getContent().find(".e-movablecontent").scrollLeft($currentTarget.scrollLeft());
                    this.model.showSummary && this.getFooterContent().find(".e-movablefooter").scrollLeft($currentTarget.scrollLeft());;
                }
                else {
                    this.model.showSummary && this.getFooterContent().scrollLeft($currentTarget.scrollLeft());
                    this.getContent().find(".e-content").first().scrollLeft($currentTarget.scrollLeft());
                }
            }, this));
        },
        _renderByFrozenDesign: function () {
            var $div = $(document.createElement('div')), col = this._getMetaColGroup().find("col"), colgroups = {};
            colgroups["colgroup1"] = $div.append(ej.buildTag("colgroup").append(col.splice(0, this.model.scrollSettings.frozenColumns))).html();
            colgroups["colgroup2"] = $div.html(ej.buildTag("colgroup").append(col)).html();
            this.getContent().find("div").first().get(0).innerHTML = $.render[this._id + "_FrozenTemplate"]({ datas: this.model.currentViewData }, colgroups);
            this.setGridContentTable(this.getContent().find(".e-table").attr("role", "grid"));
        },
        addFrozenTemplate: function () {
            var template = "<div class='e-frozencontentdiv'>"
            + "<table cellspacing='0.25px' class='e-table'>{{:~colgroup1}}<tbody>"
            + "{{for datas tmpl='" + this._id + "_JSONFrozenTemplate'/}}"
            + "</tbody></table></div>"
            + "<div class='e-movablecontent'><div class='e-movablecontentdiv'><table cellspacing='0.25px' class='e-table'>{{:~colgroup2}}<tbody>"
            + "{{for datas tmpl='" + this._id + "_JSONTemplate'/}}"
            + "</tbody></table></div></div>", templates = {};
            templates[this._id + "_FrozenTemplate"] = template;
            $.templates(templates);
        },
        _getTopRow: function (offsetTop) {
            var currentTopRow = this.model.scrollSettings.frozenRows, i = 0;
            if (offsetTop > 10) {
                for (var i = 0; i < this._rowHeightCollection.length; i++) {
                    if (this._rowHeightCollection[i] > offsetTop) {
                        currentTopRow = this.model.scrollSettings.frozenRows + i - 1;
                        break;
                    }
                }
            }
            return { imaginaryIndex: currentTopRow, actualIndex: i };
        },
        _showHideRow: function (from, to, action, scrollPosition) {
            var rows = this.getRows();
            if (this.model.scrollSettings.frozenColumns > 0)
                $(rows[0]).slice(from, to).add($(rows[1]).slice(from, to).toArray())[action]();
            else
                $(rows).slice(from, to)[action]();
            this._currentTopFrozenRow = action == "show" ? from : to;
            this.getScrollObject()._changevHandlerPosition(scrollPosition);
        },
        _scroll: function (args) {
            if (args.scrollData != null && args.scrollData.dimension != "width") {
                args.cancel = true;
                var rows = this.getRows(), indexes = this._getTopRow(args.scrollTop), currentTopRow = indexes.imaginaryIndex, frozenRows;
                if (currentTopRow > this._currentTopFrozenRow)
                    this._showHideRow(this.model.scrollSettings.frozenRows, currentTopRow, "hide", this._rowHeightCollection[indexes.actualIndex]);
                else if (currentTopRow < this._currentTopFrozenRow)
                    this._showHideRow(currentTopRow, this._currentTopFrozenRow + 1, "show", this._rowHeightCollection[indexes.actualIndex]);
                args.model.scrollTop = args.scrollTop;
            }
            else {
                if (this.getScrollObject()._v != null)
                    this.getScrollObject()._v.skipChange = true;
            }
        },
        _renderAlertDialog: function () {
            var $contentDiv = ej.buildTag('div.e-content', this._getLocalizedLabels("frozenColumnsMessage"))
                , $buttons = ej.buildTag('span.e-buttons', "<input type='button' id=" + this._id + 'ConfirmDialogOK' + " value='" + this._getLocalizedLabels("OkButton") + "'/>");
            this._alertDialog = ej.buildTag('div#' + this._id + 'AlertDialog');
            this._alertDialog.append($contentDiv).append($buttons);
            this.element.append(this._alertDialog);
            $buttons.find("input").ejButton({
                cssClass: this.model.cssClass,
                showRoundedCorner: true,
                size: "mini",
                click: $.proxy(function (args) {
                    this._alertDialog.ejDialog("close");
                }, this)
            });
            this._renderFDialog(this._id + 'AlertDialog');
            this._alertDialog.ejDialog({ width: "auto", enableModal: true });
        },
        _renderFDialog: function (id) {
            $("#" + id).ejDialog({ showOnInit: false, "enableRTL": this.model.enableRTL, "cssClass": this.model.cssClass, "showHeader": false, width: 260, enableResize: false, allowKeyboardNavigation: false, content: "#" + this._id });
        },
        _virtualScroll: function (e) {
            if (e != null) {
                var flag = 0;
                var recordCount = this.model.filterSettings.filteredColumns.length == 0 ? this._searchCount == null ? this._gridRecordsCount : this._searchCount : this._filteredRecordsCount;
                var pageInfo = this.model.pageSettings;
                var tbody = this.getContentTable()[0].tBodies[0];
                var virtualRows = $(tbody).find('tr.e-virtualrow');
                pageInfo.totalPages = Math.ceil(recordCount / pageInfo.pageSize);
                if (e.scrollTop !== undefined)
                    e.model.scrollTop = e.scrollTop;
                var currentPageNo = this._calculateCurrenPage(virtualRows, this.getContentTable(), e.model);
                if (currentPageNo > pageInfo.totalPages)
                    currentPageNo = pageInfo.totalPages;
                if (pageInfo.currentPage != currentPageNo && $.inArray((currentPageNo - 1) * pageInfo.pageSize, this.virtualLoadedPages) == -1) {
                    this._isVirtualRecordsLoaded = false;
                }
                if (!this._isVirtualRecordsLoaded) {
                    if ($.inArray((currentPageNo - 1) * pageInfo.pageSize, this.virtualLoadedPages) == -1) {
                        if (currentPageNo == pageInfo.totalPages && $.inArray((currentPageNo - 2) * pageInfo.pageSize, this.virtualLoadedPages) == -1) {
                            flag++;
                            this.set_currentPageIndex(currentPageNo - 1);
                        }
                        if (flag == 1) this._lastRow = true;
                        this.set_currentPageIndex(currentPageNo);
                    }
                    pageInfo.currentPage = currentPageNo;
                }
                else
                    pageInfo.currentPage = currentPageNo;
                var model = this._refreshVirtualPagerInfo();
                this._showPagerInformation(model);
            }
        },

        _createPagerStatusBar: function () {
            var $statusBar = this.element.find(".e-pagerstatusbar");
            if ($statusBar.length)
                $statusBar.remove();
            var $pagermsgDiv = ej.buildTag('div.e-pagermsgdiv');
            this.$pagerStatusBarDiv = ej.buildTag('div.e-pagerstatusbar').append($pagermsgDiv);
            this.$pagerStatusBarDiv.appendTo(this.element);
            this.$pagerStatusBarDiv.css("display", "none");
        },
        _refreshVirtualContent: function (currentPage) {
            var rowHeight = this.getRowHeight();
            var recordsCount = this.model.filterSettings.filteredColumns.length == 0 ? this._searchCount == null ? this._gridRecordsCount : this._searchCount : this._filteredRecordsCount;
            if (currentPage != null) {
                this._currentPage(currentPage);
                var model = this._refreshVirtualPagerInfo();
                this._showPagerInformation(model);
            }
            var currentIndex = this.getCurrentIndex();
            var tbody = this.getContentTable()[0].tBodies[0];
            if (this.getCurrentIndex() > 0) {
                var virtualTRTop = document.createElement("tr");
                $(virtualTRTop).addClass("e-virtualrow").css("height", rowHeight * currentIndex).prependTo(tbody);
            } if (currentIndex + this.model.pageSettings.pageSize <= recordsCount) {
                var virtualTRBottom = document.createElement("tr");
                $(virtualTRBottom).addClass("e-virtualrow").css("height", rowHeight * (recordsCount - (currentIndex + this.model.pageSettings.pageSize))).appendTo($(tbody));
            }
            this.virtualLoadedPages = new Array();
            this.virtualLoadedPages.push(currentIndex >= 0 ? currentIndex : 0);
            var focusTR = $(tbody).find('tr:not(.e-virtualrow)').attr('name', currentIndex >= 0 ? currentIndex : 0)[0];
            if (focusTR && focusTR.previousSibling && ($(focusTR.previousSibling).hasClass("e-virtualrow") || focusTR.previousSibling.offsetTop > (currentIndex * this.getContent().height()))) {
                this.getContent().children("div").first().scrollTop(this.getContent().find(".content").scrollTop() - (this.getContent().find(".content").scrollTop() - focusTR.offsetTop));
                this._isVirtualRecordsLoaded = true;
            }
        },

        _calculateCurrenPage: function (virtualRows, target, args) {
            var pageSize = this.model.pageSettings.pageSize;
            var currentPage;
            if (args.scrollTop >= this._scrollValue)
                currentPage = Math.ceil((args.scrollTop + this.model.scrollSettings.height) / this.getRowHeight() / pageSize);
            else
                currentPage = Math.floor((args.scrollTop + this.model.scrollSettings.height) / this.getRowHeight() / pageSize);

            this._scrollValue = args.scrollTop;
            for (var index = 0; index < virtualRows.length; index++) {
                var val = virtualRows[index];
                if (val.offsetTop + val.offsetHeight >= args.scrollTop) {
                    var prevVirtualPage = this._calculatePrevPage(virtualRows, target, args);
                    this._prevPageNo = prevVirtualPage;
                    if ((currentPage != this.model.pageSettings.totalPages) && currentPage != prevVirtualPage + 1 && $(val).next().is("tr[name=" + (currentPage - 1) * pageSize + "]"))
                        currentPage -= 1;
                    if (currentPage == 0)
                        currentPage = 1;
                    return currentPage > this.model.pageSettings.totalPages ? this.model.pageSettings.totalPages : currentPage;
                }
            }
            return currentPage;
        },
        _calculatePrevPage: function (virtualRows, target, args) {
            for (var i = 0; i < virtualRows.length; i++) {
                var val = virtualRows[i];
                if (val.offsetTop + val.offsetHeight >= args.scrollTop) {
                    var trElement = $(val).prevAll('tr[name]')[0];
                    if (trElement != null) {
                        return Math.ceil(parseInt($(trElement).attr('name'), 10) / this.model.pageSettings.pageSize) + 1;
                    }
                }
            }
            return -1;
        },
        _refreshVirtualPagerInfo: function () {
            var model = {};
            model.pageSize = this.model.pageSettings.pageSize;
            model.currentPage = this._currentPage();
            model.totalRecordsCount = this.model.filterSettings.filteredColumns.length == 0 ? this._searchCount == null ? this._gridRecordsCount : this._searchCount : this._filteredRecordsCount;
            model.totalPages = Math.ceil(model.totalRecordsCount / model.pageSize);

            return model;
        },
        _showPagerInformation: function (model) {
            var from = (model.currentPage - 1) * model.pageSize;
            $(this.$pagerStatusBarDiv).find("div:first").html(String.format(this._getLocalizedLabels("PagerInfo"), model.currentPage, model.totalPages, model.totalRecordsCount), from, from + model.pageSize);
            $(this.$pagerStatusBarDiv).css('display', 'block');
        },
        _replacingContent: function () {
            var temp = document.createElement('div');
            var currentIndex = this.getCurrentIndex();
            var contentTable = this.getContentTable()[0];
            var colGroup = $(contentTable).find("colgroup").first();
            var rowHeight = this.getRowHeight();
            colGroup.replaceWith(this._getMetaColGroup());
            this.model.detailsTemplate != null && colGroup.prepend(this._getIndentCol());
            var tbody = contentTable.tBodies[0];
            var cloneEle = $(tbody).clone();
            var elementTbody = $("<tbody></tbody>").append($.render[this._id + "_JSONTemplate"](this.model.currentViewData));
            var proxy = this;
            this.virtualLoadedPages.push(currentIndex >= 0 ? currentIndex : 0);
            var orderedVirtualPages = ej.dataUtil.mergeSort(ej.distinct(this.virtualLoadedPages));
            var tempTbody = $("<tbody></tbody>");
            $(elementTbody).children('tr').attr('name', currentIndex);
            var minValue = ej.dataUtil.min(orderedVirtualPages);
            var maxValue = ej.dataUtil.max(orderedVirtualPages);
            $(cloneEle).find('tr.e-virtualrow').remove();
            $(cloneEle).append($(elementTbody).children('tr'));
            $.each(orderedVirtualPages, function (index, val) {
                $(tempTbody).append($(cloneEle).find('tr[name=' + val + ']'));
                if (val != 0) {
                    var prevValue = val == minValue ? minValue : orderedVirtualPages[index - 1];
                    var virtualTRMiddle = document.createElement("tr");
                    var middleRows = val - prevValue - proxy.model.pageSettings.pageSize;
                    if (middleRows > 0)
                        $(virtualTRMiddle).addClass("e-virtualrow").css("height", rowHeight * middleRows).insertBefore($(tempTbody).children('tr[name=' + val + ']:first'));
                }
                if (val == maxValue) {
                    var virtualTRBottom = document.createElement("tr");
                    var bottomRows = proxy._gridRecordsCount - maxValue - proxy.model.pageSettings.pageSize;
                    if (bottomRows > 0)
                        $(virtualTRBottom).addClass("e-virtualrow").css("height", rowHeight * bottomRows).appendTo(tempTbody);
                }
            });
            if (minValue > 0) {
                var virtualTRTop = document.createElement("tr");
                $(virtualTRTop).addClass("e-virtualrow").css("height", rowHeight * minValue).prependTo(tempTbody);
            }
            var focusTR = $(tbody).html($(tempTbody).html()).find("tr[name=" + currentIndex + "]")[0];
            if ((focusTR && focusTR.previousSibling && ($(focusTR.previousSibling).hasClass("e-virtualrow") || focusTR.previousSibling.offsetTop > (currentIndex * this.getContent().height()))
            && (this._gridRecordsCount - currentIndex > this.model.pageSettings.pageSize || focusTR.offsetParent.offsetHeight - focusTR.offsetTop < this.getContent().height())) || this._lastRow) {
                if (this._lastRow) this._lastRow = false;
                this._isVirtualRecordsLoaded = true;
                this.getContent().children("div").first().scrollTop(this.getContent().find(".content").scrollTop() - (this.getContent().find(".content").scrollTop() - focusTR.offsetTop));
            }
            $(temp).append($("<table></table>").append(tempTbody));
            $(contentTable).get(0).replaceChild(this.model.rowTemplate != null ? temp.firstChild.lastChild : temp.firstChild.firstChild, $(contentTable).get(0).lastChild);
            this._currentJsonData = this.model.currentViewData;
            this._gridRows = $(contentTable).get(0).rows;
            var lastVirtualRow = $(contentTable).find(".e-virtualrow").last();
            lastVirtualRow.css("height", (lastVirtualRow.height() - ($(contentTable).height() - (this._gridRecordsCount * rowHeight))));
            this._eventBindings();
        },
        _refreshPagerTotalRecordsCount: function () {
            if (this.model.filterSettings.filteredColumns.length)
                this.getPager().ejPager({ totalRecordsCount: this._searchCount == null ? this._filteredRecordsCount : this._searchCount, currentPage: this._currentPage() });
            else
                this.getPager().ejPager({ totalRecordsCount: this._searchCount == null ? this._gridRecordsCount : this._searchCount, currentPage: this._currentPage() });
        },
        _maxZindex: function () {
            var maxZ = 1;
            maxZ = Math.max.apply(null, $.map($('body *'), function (e, n) {
                if ($(e).css('position') == 'absolute')
                    return parseInt($(e).css('z-index')) || 1;
            }));
            if (maxZ == undefined || maxZ == null)
                maxZ = 1;
            return maxZ;
        },
        _keyPressed: function (action, target, e) {
            var $target = $(target);
            if (!this.model.allowKeyboardNavigation || (target.tagName == 'INPUT' && e.code != 40 && e.code != 38 && e.code != 13 && e.code != 27 && e.code != 9) || String.fromCharCode(e.code).toLowerCase() == this.element[0].accessKey.toLowerCase())
                return true;
            if ((this.model.editSettings.editMode == "dialog" || this.model.editSettings.editMode == "dialogtemplate") && $(target).closest("#" + this._id + "EditForm").length)
                return true;
            else if ($(target).parent().siblings("#" + this._id + "EditForm").length)
                return true;
            if (e.code == 13 && $target.parent().hasClass("e-unboundcelldiv"))
                return true;
            if (e.code == 13 && target.tagName == 'INPUT' && $target.parent().is("#" + this._id + "_search"))
                action = "searchRequest";
            if (this.getPager() != null)
                var pager = this.getPager().ejPager("model"), pageIndex = pager.currentPage;
            var returnValue = false, curEl, $target = $(target);

            switch (action) {
                case "insertRecord":
                    if (ej.gridFeatures.edit)
                        this._toolbarOperation(this._id + "_add");
                    break;
                case "searchRequest":
                    this.search($target.val());
                    break;
                case "saveRequest":
                    if (ej.gridFeatures.edit) {
                        if (this.model.editSettings.editMode == "batch")
                            this._moveCurrentCell("down");
                        else
                            this._toolbarOperation(this._id + "_update");
                    }
                    break;
                case "cancelRequest":
                    if (ej.gridFeatures.edit)
                        this._toolbarOperation(this._id + "_cancel");
                    break;
                case "deleteRecord":
                    if (ej.gridFeatures.edit)
                        this._toolbarOperation(this._id + "_delete");
                    break;
                case "editRecord":
                    if (ej.gridFeatures.edit)
                        this._toolbarOperation(this._id + "_edit");
                    break;
                case "totalGroupCollapse":
                    if (ej.gridFeatures.group)
                        this.collapseAll();
                    break;
                case "totalGroupExpand":
                    if (ej.gridFeatures.group)
                        this.expandAll();
                    break;
                case "selectedGroupExpand":
                    if (ej.gridFeatures.group) {
                        this._$currentTr = $(this.getRows()).eq(this._selectedRow());
                        curEl = this._$currentTr.parents("tr").first().prev().find(".e-recordpluscollapse");
                        this.expandCollapse(curEl);
                    }
                    break;
                case "selectedGroupCollapse":
                    if (ej.gridFeatures.group) {
                        this._$currentTr = $(this.getRows()).eq(this._selectedRow());
                        curEl = this._$currentTr.parents("tr").first().prev().find(".e-recordplusexpand");
                        this.expandCollapse(curEl);
                    }
                    break;
                case "firstRowSelection":
                    if (ej.gridFeatures.selection)
                        this.selectRows(0);
                    break;
                case "lastRowSelection":
                    if (ej.gridFeatures.selection)
                        this.selectRows($(this.getRows()).length - 1);
                    break;
                case "upArrow":
                    if (ej.gridFeatures.selection) {
                        if ((target["type"] == "text" || target["type"] == "checkbox") && this.model.isEdit && this.model.editSettings.editMode != "batch")
                            return true;
                        if (this._selectedRow() != 0) {
                            this.selectRows(this._selectedRow() - 1);
                            if (this.model.editSettings.editMode == "batch")
                                this._moveCurrentCell("up");
                        }
                    }
                    break;
                case "downArrow":
                    if (ej.gridFeatures.selection) {
                        if ((target["type"] == "text" || target["type"] == "checkbox") && this.model.isEdit && this.model.editSettings.editMode != "batch")
                            return true;
                        var lastRow = $(this.getRows()).length - 1;
                        if (this.model.scrollSettings.frozenColumns > 0 && !ej.isNullOrUndefined(this.getRows()[0]))
                            lastRow = this.getRows()[0].length - 1;
                        if (this._selectedRow() != lastRow) {
                            this.selectRows(this._selectedRow() + 1);
                            if (this.model.editSettings.editMode == "batch")
                                this._moveCurrentCell("down");
                        }
                    }
                    break;
                case "nextPage":
                    if (this.getPager() != null)
                        pageIndex = pageIndex + 1;
                    break;
                case "previousPage":
                    if (this.getPager() != null)
                        pageIndex = pageIndex - 1;
                    break;
                case "lastPage":
                    if (this.getPager() != null)
                        pageIndex = pager.totalPages;
                    break;
                case "firstPage":
                    if (this.getPager() != null)
                        pageIndex = 1;
                    break;
                case "nextPager":
                    if (this.getPager() != null)
                        pageIndex = Math.ceil(pager.currentPage / pager.pageCount) * pager.pageCount + 1;
                    break;
                case "previousPager":
                    if (this.getPager() != null)
                        pageIndex = (Math.floor(pager.currentPage / pager.pageCount) - 1) * pager.pageCount + 1;
                    break;
                case "moveCellLeft":
                    if (this.model.editSettings.editMode == "batch")
                        returnValue = this._moveCurrentCell("left");
                    else
                        returnValue = true;
                    break;
                case "moveCellRight":
                    if (this.model.editSettings.editMode == "batch" && $target)
                        returnValue = this._moveCurrentCell("right");
                    else
                        returnValue = true;
                    break;
                default:
                    returnValue = true;
            }
            if (this. getPager() != null && pager.currentPage !== pageIndex)
                this.getPager().ejPager("goToPage", pageIndex);
            return returnValue;
        },
        _findColumnsWidth: function () {
            var j = this.getHeaderTable().find(".e-headercell:visible");
            if (this.model.groupSettings.groupedColumns.length)
                j = j.slice(this.model.groupSettings.groupedColumns.length);
            for (var i = 0; i < this.model.columns.length; i++)
                this._columnsWidthCollection[i] = j.eq(i).outerWidth();
        },
        _calculateWidth: function () {
            var j = this.getHeaderTable().find("colgroup").find("col"), width = 0;
            for (var i = 0; i < j.length; i++)
                width += j.eq(i).width();
            return width;

        },
        _initIndicators: function () {
            var indicatorId = this._id + "_ColumnDropIndicator";
            if ($("#" + indicatorId).length)
                $("#" + indicatorId).remove();
            this._Indicator = document.createElement("DIV");
            $(this._Indicator).attr('id', indicatorId).addClass("e-columndropindicator").addClass("e-dropAcceptor").appendTo(document.body);
            $(this._Indicator).css({ "display": "none" });

        },
        /**
         * It is used to re-order the column in grid control.
         * @alias ejGrid#reorderColumns
         * @return jQuery
         * @param {string} fromFieldName Pass the from field name of the column needs to be changed
         * @param {string} toFieldName Pass the to field name of the column needs to be changed
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Reorders the column based on the given index
         * gridObj.reorderColumns("OrderID", "CustomerID"); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Reorders the column based on the given index
         * $("#Grid").ejGrid("reorderColumns", "OrderID", "CustomerID");
         * &lt;/script&gt;
         */
        reorderColumns: function (fromfname, tofname) {
            var fromindex = this.model.columns.indexOf(this.getColumnByField(fromfname));
            var toindex = this.model.columns.indexOf(this.getColumnByField(tofname));
            this.set_dropColumn(fromindex, toindex);
        },
        /**
		 * It is used to add or remove columns in grid column collections
         * @alias ejGrid#columns
		 * @return jQuery
		 * @param {array/string} columndetails Pass array of columns or string of field name to add/remove the column in grid 
		 * @param {string} [action] Pass add/remove action to be performed. By default "add" action will perform
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // remove grid column
		 * gridObj.columns("OrderID", "remove");
         * // Add new column into grid or modified already existing column in the grid.
		 * gridObj.columns("CustomerID", "add"); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // remove grid column
		 * $("#Grid").ejGrid("columns","OrderID", "remove");   
		 * // Add new column into grid or modified already existing column in the grid.			
		 * $("#Grid").ejGrid("columns","CustomerID", "add");    			
		 * &lt;/script&gt;
         */
        columns: function (details, action) {
            if (ej.isNullOrUndefined(details)) return;
            var isString = false;
            if (typeof details === "string") {
                details = [details];
                isString = true;
            }
            else if (details instanceof Array && details.length && typeof details[0] === "string")
                isString = true;
            for (i = 0; i < details.length; i++) {
                var index = $.inArray(this.getColumnByField(isString ? details[i] : details[i]["field"]), this.model.columns);
                if (action == "add" || ej.isNullOrUndefined(action)) {
                    if (index == -1)
                        this.model.columns.push(isString ? { field: details[i] } : details[i]);
                    else
                        this.model.columns[index] = isString ? { field: details[i] } : details[i];
                }
                else {
                    if (index != -1)
                        this.model.columns.splice(index, 1);
                }
            }
            var $header = this.element.find(".e-gridheader");
            $header.find("div").first().empty().append(this._renderGridHeader().find("table"));
            this._headerCellgDragDrop();
            this.refreshContent(true);
        },
        _enableRowHover: function () {
            if (this.model.enableRowHover)
                this._on(this.element, "mouseenter mouseleave", ".e-gridcontent tr td", this._rowHover);
            else
                this._off(this.element, "mouseenter mouseleave", ".e-gridcontent tr td");
        },
        _rowHover: function (e) {
            if (!this.model.enableRowHover)
                return;
            var $target = $(e.target);
            var $gridRows = $(this.getRows());
            if (($target.hasClass("e-rowcell") && $target.closest("#" + this._id + "EditForm").length) || !$target.hasClass("e-rowcell"))
                return;
            if (e.type == "mouseenter" && !this._dragActive) {
                if (this.model.scrollSettings.frozenColumns > 0 && !ej.isNullOrUndefined($gridRows[0]) && !ej.isNullOrUndefined($gridRows[1]))
                    $gridRows = $($gridRows[0]).add($gridRows[1]);
                $gridRows.removeClass("e-hover");
                var index = this.getIndexByRow($target.parent());
                index != -1 && this.getRowByIndex(index).addClass("e-hover");
            } else {
                if (this.model.scrollSettings.frozenColumns > 0 && !ej.isNullOrUndefined($gridRows[0]) && !ej.isNullOrUndefined($gridRows[1]))
                    $gridRows = $($gridRows[0]).add($gridRows[1]);
                $gridRows.removeClass("e-hover");
            }
            return false;
        },
        _rightClickHandler: function (e) {
            e.preventDefault();
            if (e.which == 3) {
                var args = {};
                $target = $(e.target);
                $gridRow = $(this.getRows());
                if (this.getContentTable().has($target).length) {
                    var index = $gridRow.index($target.parent());
                    if (index == -1)
                        return;
                    args = { rowIndex: index, row: this.getRowByIndex(index), data: this.model.currentViewData[index], cellIndex: $target.index(), cellValue: $target.html(), cell: $target };
                }
                else if (this.getHeaderTable().has($target).length) {
                    var index = 0
                    $th = this.getHeaderTable().find('th').not('.e-detailheadercell,.e-grouptopleftcell,.e-filterbarcell');
                    if ($target.is('.e-headercelldiv'))
                        index = $th.index($target.closest('.e-headercell'));
                    else
                        index = $th.index($target);
                    if (index == -1)
                        return;
                    args = { headerIndex: index, headerText: this.getColumnFieldNames()[index], headerCell: $th.eq(index), column: this.getColumnByIndex(index) }
                }
                else if ($target.is('.e-pager') || (this. getPager() != null && this.getPager().has($target).length)) {
                    args = { pager: this.model.pageSettings }
                }
                this._trigger("rightClick", args);
            }
        },
        _touchGrid: function (e) {
            var curPage = this._currentPage();
            var lastPage = this._gridRecordsCount / this.model.pageSettings.pageSize;
            var totPage = lastPage == 0 ? lastPage : (parseInt(lastPage, 10) + 1);
            switch (e.type) {
                case "swipeleft":
                    if (this.model.allowPaging && curPage != totPage && !this.model.isEdit)
                        this.element.ejGrid("gotoPage", curPage + 1);
                    break;
                case "swiperight":
                    if (this.model.allowPaging && curPage > 1 && !this.model.isEdit)
                        this.element.ejGrid("gotoPage", curPage - 1);
                    break;
            }
        },
        _recorddblClickHandler: function () {
            var args = {};
            args = { rowIndex: this._selectedRow(), row: this.getRowByIndex(this._selectedRow()), data: this.model.currentViewData[this._selectedRow()] };
            this._trigger("recordDoubleClick", args);
        },
        _recordClick: function (e) {
            var args = {};
            $target = $(e.target);
            if (!$target.is('.e-rowcell') && !$target.closest("td").is(".e-rowcell"))
                return;
            var index = this.getIndexByRow($target.closest('tr'));
            args = { rowIndex: index, row: this.getRowByIndex(index), data: this.model.currentViewData[index] };
            this._trigger("recordClick", args);
        },
        _headerMouseDown: function (e) {
            if (this.model.allowResizing)
                this._resizer._mouseDown(e);
            if (($(e.target).hasClass("e-headercelldiv") && !$(e.target).parent().hasClass("e-grouptopleftcell")) || $(e.target).hasClass("e-headercell")) {
                var $headercell = $(e.target).hasClass("e-headercelldiv") ? $(e.target).parent() : $(e.target);
                this.model.enableHeaderHover && $headercell.removeClass("e-hover e-headercell-hover").addClass("e-headercellactive e-active");
            }
        },
        _headerHover: function (e) {
            var $target = $(e.target);
            if (e.type == "mouseover" || e.type == "mousemove" || e.type == "touchmove" || e.type == "MSPointerMove") {
                if (this.model.allowResizing || this.model.allowResizeToFit)
                    this._resizer._mouseHover(e);

                if (this.model.enableHeaderHover && !this._dragActive && (($target.hasClass("e-headercelldiv") && !$target.parent().hasClass("e-grouptopleftcell")) || $target.hasClass("e-headercell"))) {
                    if ($target.hasClass("e-headercelldiv"))
                        $target = $target.parent();
                    this.getHeaderTable().find(".e-columnheader").find(".e-headercell-hover").removeClass("e-headercell-hover").removeClass("e-hover");
                    $target.addClass("e-headercell-hover e-hover");
                }

            } else
                this.model.enableHeaderHover && this.getHeaderTable().find(".e-columnheader").find(".e-headercell-hover").removeClass("e-headercell-hover").removeClass("e-hover");
        },
        _colgroupRefresh: function () {
            var gridheaderCol = $(this.getHeaderTable()).find('colgroup')[0];
            var gridcontentCol = $(this.getContentTable()).find('colgroup')[0];
            var headerColClone = $(gridheaderCol).clone();
            var contentColClone = $(gridcontentCol).clone();
            $(gridcontentCol).remove();
            $(gridheaderCol).remove();
            $(headerColClone).prependTo(this.getHeaderTable());
            $(contentColClone).prependTo(this.getContentTable());
        },

        _columnResizeToFit: function (e) {
            if (this.model.allowResizeToFit && this.getHeaderTable().find(".e-columnheader").css('cursor') == 'col-resize') {
                if ($(e.target).is(".e-headercelldiv"))
                    e.target = e.target.parentNode;
                var $target = $(e.target);
                if ($target.hasClass("e-headercell")) {
                    var targetCell = e.target;
                    var hCellIndex = targetCell.cellIndex;
                    var cellIndex = hCellIndex;
                    this._resizer._orgX = e.pageX;
                    this._resizer._getResizableCell();
                    if (hCellIndex != this._resizer._currentCell) {
                        hCellIndex = cellIndex = this._resizer._currentCell;
                        targetCell = e.target.previousSibling;
                    }
                    var $cellDiv = $(targetCell).children('.e-headercelldiv');
                    if (this.model.groupSettings.groupedColumns.length) {
                        cellIndex = hCellIndex - this.model.groupSettings.groupedColumns.length;
                    }
                    var finalWidth = 0, headerWidth = 0, contentWidth = 0;
                    contentWidth = this._getContentWidth(cellIndex);
                    headerWidth = this._getHeaderContentWidth($cellDiv);
                    finalWidth = headerWidth > contentWidth ? headerWidth : contentWidth;
                    finalWidth = finalWidth + (finalWidth * 0.2);
                    var oldWidth = this.getHeaderTable().find('col').eq(hCellIndex).width();
                    var args = { columnIndex: cellIndex, column: this.model.columns[cellIndex], target: $target, oldWidth: oldWidth };
                    this._trigger("resizeStart", args);
                    this.getHeaderTable().find('col').eq(hCellIndex).width(finalWidth);
                    if (this.model.groupSettings.groupedColumns.length) {
                        var $colGroups = this.getContentTable().find('.e-recordtable').find('colgroup');
                        $.each($colGroups, function (indx, colgroup) {
                            $(colgroup).find('col').eq(cellIndex).width(finalWidth);
                        });
                    }
                    else
                        this.getContentTable().find('col').eq(cellIndex).width(finalWidth);
                    var newWidth = this.getHeaderTable().find('col').eq(hCellIndex).width();
                    this._colgroupRefresh();
                    args = { columnIndex: cellIndex, column: this.model.columns[cellIndex], target: $target, oldWidth: oldWidth, newWidth: newWidth, extra: Math.abs(newWidth - oldWidth) };
                    this._trigger("resizeEnd", args);
                    this._columnsWidthCollection[cellIndex] = finalWidth;
                    this.model.columns[cellIndex]["width"] = finalWidth;
                    args = { columnIndex: cellIndex, column: this.model.columns[cellIndex], target: $target, oldWidth: oldWidth, newWidth: newWidth };
                    this._trigger("resized", args);
                }
            }
        },
        _getContentWidth: function (cellindx) {
            var contentWidth = 0;
            var $span = ej.buildTag('span', {}, {}), proxy = this, tdWidth;
            $.each(proxy._gridRows, function (indx, row) {
                var td = $(row).find('td.e-rowcell').eq(cellindx);
                var content = $(td).html();
                $span.html(content);
                $(td).html($span);
                tdWidth = td.find('span:first').width();
                if (tdWidth > contentWidth)
                    contentWidth = tdWidth;
                $(td).html(content);
            });
            proxy._refreshUnboundTemplate(this.getContentTable());
            return contentWidth;
        },
        _getHeaderContentWidth: function ($cellDiv) {
            var headerWidth = 0, $span = ej.buildTag('span', {}, {});
            var content = $cellDiv.html();
            $span.html(content);
            $cellDiv.html($span);
            headerWidth = $cellDiv.find('span:first').width();
            $cellDiv.html(content);
            return headerWidth;
        },
        _mouseUp: function (e) {
            if (this.model.allowResizing)
                this._resizer._mouseUp(e);
        },

        _mouseMove: function (e) {
            if (this.model.allowResizing)
                this._resizer._mouseMove(e);
        },
        _setModel: function (options) {
            for (var prop in options) {
                switch (prop) {
                    case "pageSettings":
                        var pageModel = this.getPager().ejPager("model");
                        if (ej.isNullOrUndefined(options[prop]["currentPage"]) || pageModel.currentPage != this._currentPage()) {
                            for (var pageProp in options[prop]) {
                                if (pageProp != "currentPage" && options[prop][pageProp] === pageModel[pageProp])
                                    delete options[prop][pageProp];
                            }
                            if ($.isEmptyObject(options[prop]))
                                break;
                            $.extend(this.model.pageSettings, options[prop]);
                            options[prop]["currentPage"] = this._currentPage();
                            this.getPager().ejPager("option", options[prop]);
                            this.refreshContent();
                        }
                        break;
                    case "allowPaging":
                        this.model.allowPaging = options[prop];
                        if (options[prop] && this.element.children(".e-pager").length == 0) {
                            this.element.append(this._renderGridPager());
                            this.refreshContent();
                            this.getPager().ejPager("refreshPager");
                        } else {
                            this.getPager().remove();
                            this.setGridPager(null);
                            this.refreshContent();
                            if (this.model.filterSettings.filterType == "filterbar" && this.model.allowFiltering)
                                this._createPagerStatusBar();
                        }
                        break;
                    case "allowGrouping":
                        if (options[prop] && this.element.children(".e-groupdroparea").length == 0) {
                            this.model.allowGrouping = options[prop];
                            this.addGroupingTemplate();
                            this.element.prepend(this._renderGroupDropArea());
                            this._enableGroupingEvents();
                            this._headerCellgDragDrop();
                        } else
                            this.element.children(".e-groupdroparea").remove();
                        break;
                    case "groupSettings":
                        $.extend(this.model.groupSettings, options[prop]);
                        this.refreshTemplate();
                        if (this.model.groupSettings.showToggleButton) {
                            var $table = this._renderGridHeader().find("table");
                            this.element.children(".e-gridheader").find("table").replaceWith($table);
                            this.setGridHeaderTable($table);
                            this.setWidthToColumns();
                        }
                        if (!this.model.groupSettings.enableDropAreaAnimation)
                            this.expandGroupDropArea();
                        else
                            this.collapseGroupDropArea();
                        break;
                    case "cssClass":
                        this.element.removeClass(this.model.cssClass).addClass(options[prop]);
                        break;
                    case "allowFiltering":
                    case "filterSettings":
                        if (prop == "filterSettings")
                            $.extend(this.model.filterSettings, options[prop]);
                        else
                            this.model.allowFiltering = options[prop];
                        if (!this.model.allowFiltering) {
                            if (this.model.filterSettings.filterType == ej.Grid.FilterType.FilterBar)
                                this.getHeaderTable().find(".e-filterbar").remove();
                            else if (this.model.filterSettings.filterType == ej.Grid.FilterType.Menu)
                                this.getHeaderTable().find(".e-columnheader").find(".e-filtericon").remove()
                                    .end().find(".e-headercellfilter").removeClass("e-headercellfilter");
                            this.model.filterSettings.filteredColumns = [];
                            this.refreshContent();
                        } else {
                            if (this.model.filterSettings.filterType == ej.Grid.FilterType.FilterBar) {
                                this.getHeaderTable().find(".e-filterbar").remove();
                                this.getHeaderTable().find(".e-columnheader").find(".e-filtericon").remove()
                                    .end().find(".e-headercellfilter").removeClass("e-headercellfilter");
                                this._renderFiltering();
                                if (this.model.filterSettings.showFilterBarStatus && !this.model.allowPaging)
                                    this._createPagerStatusBar();
                                else if (this.model.filterSettings.showFilterBarStatus && this.model.allowPaging)
                                    this.getPager().ejPager({ enableExternalMessage: true });
                                var $filterbar = this.getHeaderTable().find(".e-filterbar");
                                for (var i = 0; i < this.model.groupSettings.groupedColumns.length; i++)
                                    $filterbar.prepend(this._getEmptyFilterBarCell());
                            } else if (this.model.filterSettings.filterType == ej.Grid.FilterType.Menu) {
                                this.getHeaderTable().find(".e-columnheader").find(".e-filtericon").remove()
                                    .end().find(".e-headercellfilter").removeClass("e-headercellfilter");
                                this.getHeaderTable().find(".e-filterbar").remove();
                                this.getHeaderTable().find(".e-columnheader").find(".e-headercell").addClass("e-headercellfilter").append(ej.buildTag('div.e-filtericon e-icon e-filterset'));
                                this._renderFilterDialogs();
                            }
                            this._enableFilterEvents();
                        }
                        break;
                    case "enableRowHover":
                        this.model.enableRowHover = options[prop];
                        this._enableRowHover();
                        break;
                    case "allowScrolling":
                    case "scrollSettings":
                        var $content = this.getContent();
                        if (!ej.util.isNullOrUndefined(options["scrollSettings"]))
                            $.extend(this.model.scrollSettings, options["scrollSettings"]);
                        if (options["scrollSettings"]["frozenColumns"] !== undefined || options["scrollSettings"]["frozenRows"] !== undefined) {
                            var model = this.model;
                            model.query = this.commonQuery.clone();
                            this.element.ejGrid("destroy").ejGrid(model);
                        }
                        else {
                            if (!ej.util.isNullOrUndefined(options["allowScrolling"]))
                                this.model.allowScrolling = options["allowScrolling"];
                            !ej.util.isNullOrUndefined($content.data("ejScroller")) && $content.ejScroller("destroy");
                            if (this.model.allowScrolling) {
                                this.getHeaderTable().parent().addClass("e-headercontent");
                                this._renderScroller();
                            } else {
                                this.element.children(".e-gridheader").removeClass("e-scrollcss");
                                this.element.get(0).style.width.length == 0 && this.element.css("width", "auto");
                            }
                        }
                        break;
                    case "locale":
                        this.model.locale = options[prop];
                        var model = this.model;
                        model.query = this.commonQuery.clone();
                        this.element.ejGrid("destroy").ejGrid(model);
                        break;
                    case "dataSource":
                        this.resetModelCollections();
                        this._refreshDataSource(this._dataSource());
                        break;
					case "selectedRowIndex":
                        if (this._selectedRow() != -1 && $.inArray(this._selectedRow(), this._selectedRowsIndexes) == -1)
                            this.selectRows(this._selectedRow());
                        else if (this._selectedRow() == -1) {
                            this.clearSelection();
                            this._selectedRowsIndexes = [];
                        }
                        break;                                                                     
                    case "editType":
                        if (this._selectedRow() != -1 && $.inArray(this._selectedRow(), this._selectedRowsIndexes) == -1)
                            this.selectRows(this._selectedRow());
                        break;
                    case "editSettings":
                        $.extend(this.model.editSettings, options[prop]);
                        this._processEditing();
                        this.refreshBatchEditMode();
                        this._tdsOffsetWidth = [];
                        $("#" + this._id + "_dialogEdit_wrapper,#" + this._id + "_dialogEdit").remove();
                        $("#" + this._id + "_externalEdit").remove();
                        if (this.model.editSettings.allowEditing || this.model.editSettings.allowAdding) {
                            if (this.model.editSettings.editMode == "dialog" || this.model.editSettings.editMode == "dialogtemplate")
                                this.element.append(this._renderDialog());
                            else if (this.model.editSettings.editMode == "externalform" || this.model.editSettings.editMode == "externalformtemplate")
                                this.element.append(this._renderExternalForm());
                        }
                        this._enableEditingEvents();
                        break;
                    case "showSummary":
                    case "summaryRows":
                        if (prop == "showSummary" && !options[prop])
                            this.element.children(".e-gridfooter").remove();
                        else {
                            var $content = this.element.find(".e-gridcontent").first();
                            this._renderGridFooter().insertAfter($content);
                        }
                        break;
                    case "enableAltRow":
                        this.model.enableAltRow = options[prop];
                        this.addInitTemplate();
                        this.refreshContent();
                        break;
                    case "toolbarSettings":
                        $.extend(this.model.toolbarSettings, options[prop]);
                        this.element.children(".e-gridtoolbar").remove();
                        if (this.model.toolbarSettings.showToolbar)
                            this._renderToolBar().insertBefore(this.element.find(".e-gridheader").first());
                        break;
                    case "sortSettings":
                        $.extend(this.model.sortSettings, options[prop]);
                        this.refreshContent();
                        break;
                    case "enableRTL":
                        this.model.enableRTL = options[prop];
                        this.refreshContent();
                        break;
                    case "allowSelection":
                        if (options[prop])
                            this._off(this.element, "click")._on(this.element, "click", this._clickHandler);
                        break;
                    case "query":
                        this.commonQuery = $.extend(true, {}, options[prop]);
                        break;
                }
            }

        },
        /**
         * It is used to reset the model collections like pageSettings, groupSettings, filterSettings, sortSettings and summaryRows.
         * @alias ejGrid#resetModelCollections
         * @return jQuery		 
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Reset model collections
         * gridObj.resetModelCollections(); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Reset model collections
         * $("#Grid").ejGrid("resetModelCollections");
         * &lt;/script&gt;
         */
        resetModelCollections: function () {
            this.model.groupSettings.groupedColumns = [];
            this.model.filterSettings.filteredColumns = [];
            this.model.sortSettings.sortedColumns = [];
            this.model.pageSettings.currentPage = this.defaults.pageSettings.currentPage;
            this.model.summaryRows = [];
        }
    };
})(jQuery, Syncfusion);;
(function ($, ej, undefined) {
    ej.gridFeatures = ej.gridFeatures || {};
    ej.gridFeatures.edit = {
        _processEditing: function () {
            var query = this._columnToSelect();
            this.model.query._fromTable != "" && query.from(this.model.query._fromTable);
            if (this._dataSource() instanceof ej.DataManager && query.queries.length) {
                var queryPromise = this._dataSource().executeQuery(query);
                queryPromise.done(ej.proxy(function (e) {
                    this._dropDownManager = ej.DataManager(e.result);
                    if (this.model.editSettings.editMode == "normal") this.addEditingTemplate();
                    else if (this.model.editSettings.editMode == "batch") this.addBatchEditTemplate();
                    else if (this.model.editSettings.editMode == "dialog" ||
                        this.model.editSettings.editMode == "externalform" ||
                        this.model.editSettings.editMode == "inlineform")
                        this.addDialogEditingTemplate();
                    else this.addExternalDialogEditingTemplate();
                }, this));
            } else {
                if (this.model.editSettings.editMode == "normal") this.addEditingTemplate();
                else if (this.model.editSettings.editMode == "batch") this.addBatchEditTemplate();
                else if (this.model.editSettings.editMode == "dialog" ||
                    this.model.editSettings.editMode == "externalform" ||
                    this.model.editSettings.editMode == "inlineform")
                    this.addDialogEditingTemplate();
                else this.addExternalDialogEditingTemplate();
            }
        },
        addEditingTemplate: function () {
            if (this.model.columns.length == 0)
                return;
            var $tbody = ej.buildTag('tbody');
            var $tr = ej.buildTag('tr');
            var $td = ej.buildTag('td', "", {}, { colSpan: this.model.scrollSettings.frozenColumns > 0 ? this.model.scrollSettings.frozenColumns : this.model.columns.length });
            var $form = ej.buildTag('form', "", {}, { id: this._id + "EditForm", "class": "gridform" });
            var $table = ej.buildTag('table.e-table', "", {}, { cellspacing: 0.25 });
            var $innerTbody = ej.buildTag('tbody');
            var $innerTr = ej.buildTag('tr');
            $tbody.append($tr);
            $tr.append($td);
            $td.append($form);
            var $colGroup = $(document.createElement('colgroup'));
            $form.append($table);
            $table.append($colGroup);
            $innerTbody.append($innerTr).appendTo($table);
            if (this.model.scrollSettings.frozenColumns > 0) {
                var $tbodyClone = $tbody.clone();
                $tbodyClone.find("td").first().prop("colSpan", this.model.columns.length - this.model.scrollSettings.frozenColumns);
            }
            for (var columnCount = 0; columnCount < this.model.columns.length; columnCount++) {
                var $innerTd = ej.buildTag('td.e-rowcell');
                $innerTr.append($innerTd.get(0));
                if (ej.isNullOrUndefined(this.model.columns[columnCount]["isUnbound"]) && ej.isNullOrUndefined(this.model.columns[columnCount]["template"])) {
                    this._initCellEditType(columnCount, $innerTd);
                } else if (this.model.columns[columnCount]["template"]) {
                    var helpers = {};
                    helpers["_" + this._id + "ColumnTemplating"] = this._gridTemplate;
                    $.views.helpers(helpers);
                    $("#" + this._id + this.model.columns[columnCount].headerText + columnCount + "_Template").remove();
                    var scriptElement = this._createTemplateElement(this.model.columns[columnCount]);
                    $innerTd.addClass("e-templatecell").html("{{:~_" + this._id + "ColumnTemplating('" + scriptElement.id + "')}}");
                } else if (this.model.columns[columnCount]["isUnbound"]) {
                    var helpers = {};
                    helpers["_" + this._id + "UnboundTemplate"] = this._unboundTemplateRendering;
                    $.views.helpers(helpers);
                    $("#" + this._id + this.model.columns[columnCount].headerText + "_UnboundTemplate").remove();
                    divElement = this._createUnboundElement(this.model.columns[columnCount]);
                    $innerTd.addClass("e-unboundcell").addClass("e-" + this.model.columns[columnCount]["headerText"].replace(/\s+/g, "")).html("{{:~_" + this._id + "UnboundTemplate('" + divElement.id + "')}}");
                    this.model.scrollSettings.frozenColumns > 0 && $innerTd.addClass("e-frozenunbound");
                    this._isUnboundColumn = true;
                }
                if (this.model.columns[columnCount]["textAlign"] != undefined)
                    $innerTd.css("text-align", this.model.columns[columnCount]["textAlign"]);
                this.model.columns[columnCount]["allowEditing"] == false && $innerTd.find(".e-field").attr("disabled", true).addClass("e-disable");
                if (this.model.columns[columnCount]["isPrimaryKey"] === true) {
                    $innerTd.find(".e-field").attr("disabled", true).addClass("e-disable");
                    this._primaryKeys.push($.trim(this.model.columns[columnCount].field));
                    this._primaryKeys = $.unique(this._primaryKeys);
                }
                if (this.model.columns[columnCount]["isIdentity"] === true)
                    $innerTd.find(".e-field").addClass("e-identity");
                var $col = $(document.createElement('col'));
                if (this.model.columns[columnCount]["visible"] === false) {
                    $col.css("display", "none");
                    $innerTd.addClass("e-hide");
                }
                !this.model.groupSettings.showGroupedColumn && $innerTd.addClass("{{for ~groupedColumns}}" +
                    " {{if #data == '" + this.model.columns[columnCount]["field"] + "'}}e-hide{{/if}}" +
                    "{{/for}}") && $col.css("display", "none");
                $colGroup.append($col);
                if (columnCount == this.model.scrollSettings.frozenColumns - 1) {
                    $innerTr = $tbodyClone.find("tr").last();
                    $colGroup = $tbodyClone.find("colgroup");
                    $.templates(this._id + "_JSONFrozenEditingTemplate", $tbody.html());
                    $tbody = $tbodyClone;
                }
            }
            $.templates(this._id + "_JSONEditingTemplate", $tbody.html());
        },

        addDialogEditingTemplate: function () {
            if (this.model.columns.length == 0)
                return;
            var $tbody = ej.buildTag('div');
            var $form = ej.buildTag('form.gridform', "", {}, { id: this._id + "EditForm" });
            var $table = ej.buildTag('table', "", {}, { cellspacing: "14px" });
            var $innerTr, $labelTd, $valueTd, trElement, tdElement;
            for (var columnCount = 0; columnCount < this.model.columns.length; columnCount++) {
                if (this.model.editSettings.editMode == "dialog") {
                    trElement = 'tr';
                    tdElement = 'td';
                }
                else trElement = tdElement = 'div';
                $innerTr = ej.buildTag(trElement);
                $labelTd = ej.buildTag(tdElement, "", { "text-align": "right" });
                $valueTd = ej.buildTag(tdElement, "", { "text-align": "left" }).addClass("e-rowcell");

                $innerTr.append($labelTd.get(0)).append($valueTd.get(0));
                if (this.model.columns[columnCount].headerText == undefined)
                    this.model.columns[columnCount].headerText = this.model.columns[columnCount].field;
                $labelTd.append("<label for='" + this.model.columns[columnCount].field + "'>" + this.model.columns[columnCount].headerText + "</label>");
                if (ej.isNullOrUndefined(this.model.columns[columnCount]["isUnbound"]) && ej.isNullOrUndefined(this.model.columns[columnCount]["template"]))
                     this._initCellEditType(columnCount, $valueTd);
                 else if (this.model.columns[columnCount]["template"]) {
                     var helpers = {};
                     helpers["_" + this._id + "ColumnTemplating"] = this._gridTemplate;
                     $.views.helpers(helpers);
                     $("#" + this._id + this.model.columns[columnCount].headerText + columnCount + "_Template").remove();
                     var scriptElement = this._createTemplateElement(this.model.columns[columnCount]);
                     $valueTd.addClass("e-templatecell").html("{{:~_" + this._id + "ColumnTemplating('" + scriptElement.id + "')}}");
                 } else if (this.model.columns[columnCount]["isUnbound"]) {
                     var helpers = {};
                     helpers["_" + this._id + "UnboundTemplate"] = this._unboundTemplateRendering;
                     $.views.helpers(helpers);
                     $("#" + this._id + this.model.columns[columnCount].headerText + "_UnboundTemplate").remove();
                     divElement = this._createUnboundElement(this.model.columns[columnCount]);
                     $valueTd.addClass("e-unboundcell").addClass("e-" + this.model.columns[columnCount]["headerText"].replace(/\s+/g, "")).html("{{:~_" + this._id + "UnboundTemplate('" + divElement.id + "')}}");
                     this.model.scrollSettings.frozenColumns > 0 && $innerTd.addClass("e-frozenunbound");
                     this._isUnboundColumn = true;
                 }
				this.model.columns[columnCount]["allowEditing"] == false && $valueTd.find(".e-field").attr("disabled", true).addClass("e-disable");
                if (this.model.columns[columnCount]["isPrimaryKey"] === true)
                    $valueTd.find(".e-field").attr("disabled", true).addClass("e-disable");
                if (this.model.columns[columnCount]["visible"] === false)
                    $innerTr.addClass("e-hide");
                if (this.model.editSettings.editMode == "dialog") {
                    $form.append($table);
                    $table.append($innerTr);
                } else
                    $form.append($innerTr);
                $form.appendTo($tbody);
                if (this.model.columns[columnCount]["isPrimaryKey"] === true) {
                    $valueTd.find(".e-field").attr("disabled", true).addClass("e-disable");
                    this._primaryKeys.push($.trim(this.model.columns[columnCount].field));
                    this._primaryKeys = $.unique(this._primaryKeys);
                }
            }
            if (this.model.editSettings.editMode == "dialog") $form.append($table);
            $tbody = this.renderDiaglogButton($form, $tbody);
            $.templates(this._id + "_JSONDialogEditingTemplate", $tbody.html());
        },
        _editEventTrigger: function (args) {
            if (args.requestType == "save" || args.requestType == "delete") {
                var params = {
                    data: args.data,
                    action: args.action !== undefined ? args.action : args.requestType,
                };
                if (!ej.isNullOrUndefined(args.foreignKeyData))
                    params.foreignKeyData = args.foreignKeyData;
                this._trigger("end" + params.action.charAt(0).toUpperCase() + params.action.slice(1), params);
            }
        },
        _compiledDropDownTemplate: function (valueField, textField, colType, format) {
            var helpers = { _gridFormatting: this.formatting };
            $.views.helpers(helpers);
            var $select = ej.buildTag('select');
            var $option = ej.buildTag("option", ej.isNullOrUndefined(textField) ? "{{:text}}" : colType == "date" && format != null ? "{{:~_gridFormatting('" + format + "'," + textField + ")}}" : "{{:" + textField + "}}", {}, { value: ej.isNullOrUndefined(valueField) ? "{{:value}}" : "{{:" + valueField + "}}" });
            $select.append($option);
            return $.templates($select.html());
        },
        _initCellEditType: function (columnCount, element) {
            if (this.model.columns[columnCount]["foreignKeyValue"])
                this.model.columns[columnCount]["editType"] = "dropdownedit";
            if (ej.isNullOrUndefined(this.model.columns[columnCount]["editType"]))
                this.model.columns[columnCount]["editType"] = "stringedit";
            switch (this.model.columns[columnCount]["editType"]) {
                case "stringedit":
                    element.html(ej.buildTag('input.e-field e-ejinputtext', "", {}, { value: "{{:" + this.model.columns[columnCount].field + "}}", id: this._id + this.model.columns[columnCount].field, name: this.model.columns[columnCount].field }));
                    break;
                case "booleanedit":
                    element.html('{{if ' + this.model.columns[columnCount].field + '}} <input class="e-field e-checkbox" type ="checkbox" id=' + this._id + this.model.columns[columnCount].field + ' name=' + this.model.columns[columnCount].field + ' checked="checked"></input>{{else}} <input class="e-field e-checkbox" type ="checkbox" id=' + this._id + this.model.columns[columnCount].field + ' name=' + this.model.columns[columnCount].field + ' > {{/if}}');
                    if (this.model.editSettings.editMode == "normal")
                        element.addClass("e-boolcell");
                    break;
                case "numericedit":
                    var $numericText = ej.buildTag('input.e-numerictextbox e-field', "", {}, { type: "text", value: "{{:" + this.model.columns[columnCount].field + "}}", id: this._id + this.model.columns[columnCount].field, name: this.model.columns[columnCount].field });
                    element.append($numericText);
                    break;
                case "datepicker":
                case "datetimepicker":
                    var $datePicker = ej.buildTag('input.e-' + this.model.columns[columnCount]["editType"] + ' e-field', "", {}, { type: "text", value: "{{:" + this.model.columns[columnCount].field + "}}", id: this._id + this.model.columns[columnCount].field, name: this.model.columns[columnCount].field });
                    element.append($datePicker);
                    break;
                case "dropdownedit":
                    var currColumn = this.model.columns[columnCount];
                    if (ej.isNullOrUndefined(currColumn.dataSource)) {
                        var arrayOfDatas;
                        var query = new ej.Query().select(currColumn.field);
                        if (ej.isNullOrUndefined(this._dropDownManager))
                            arrayOfDatas = this._dataManager.executeLocal(query);
                        else
                            arrayOfDatas = this._dropDownManager.executeLocal(query);
                        var selectedItems = [];
                        var uniqueData = uniqueData = ej.dataUtil.mergeSort(ej.distinct(arrayOfDatas));
                        for (var index = 0; index < uniqueData.length; index++)
                            selectedItems.push({ text: uniqueData[index], value: uniqueData[index] });
                    }
                    else
                        selectedItems = currColumn.dataSource;
                    var dropDownTemplate;
                    var fieldName = ej.isNullOrUndefined(currColumn.foreignKeyField) ? currColumn.field : currColumn.foreignKeyField;
                    if (currColumn.foreignKeyValue)
                        dropDownTemplate = this._compiledDropDownTemplate(fieldName, currColumn.foreignKeyValue, currColumn.type, currColumn.format);
                    else
                        dropDownTemplate = this._compiledDropDownTemplate();
                    element.get(0).innerHTML = ["<select>", dropDownTemplate.render(selectedItems), "</select>"].join("");
                    element.find("select").prop({ id: this._id + currColumn.field, name: currColumn.field }).addClass("e-field e-dropdownlist");
                    break;
            }
        },
        addBatchEditTemplate: function () {
            if (this.model.columns.length == 0)
                return;
            var $outerDiv = ej.buildTag('div', "", { display: "none" }, { id: this._id + "_BulkEditTemplate" }), i, columnCount, $innerDiv;
            for (i = 0, columnCount = this.model.columns.length; i < columnCount; i++) {
                if (!this.model.columns[i]["template"] || !this.model.columns[i]["isUnbound"]) {
                    $innerDiv = ej.buildTag('div', "", {}, { id: this.model.columns[i].field + "_BulkEdit" });
                    this._initCellEditType(i, $innerDiv);
                    $outerDiv.append($innerDiv);
                }
                if (this.model.columns[i]["isPrimaryKey"] === true) {
                    this._primaryKeys.push($.trim(this.model.columns[i].field));
                    this._primaryKeys = $.unique(this._primaryKeys);
                }
                if (this.model.columns[i]["isIdentity"] === true)
                    $innerDiv.find(".e-field").addClass("e-identity");
            }
            if ($outerDiv.children().length)
                this._bulkEditTemplate = $outerDiv;

        },
        addExternalDialogEditingTemplate: function () {
            if (this.model.columns.length == 0)
                return;
            for (var columnCount = 0; columnCount < this.model.columns.length; columnCount++) {
                if (this.model.columns[columnCount]["isPrimaryKey"] === true) {
                    this._primaryKeys.push($.trim(this.model.columns[columnCount].field));
                    this._primaryKeys = $.unique(this._primaryKeys);
                }
            }
            var $tbody = ej.buildTag('div', "", { 'display': 'none' });
            var $form = ej.buildTag('form.gridform', "", {}, { id: this._id + "EditForm" });
            var cloneElement;
            if (this.model.editSettings.editMode == "dialogtemplate" && this.model.editSettings.dialogEditorTemplateID != null)
                cloneElement = this.model.editSettings.dialogEditorTemplateID;
            else if (this.model.editSettings.editMode == "externalformtemplate" && this.model.editSettings.externalFormTemplateID != null)
                cloneElement = this.model.editSettings.externalFormTemplateID;
            else
                cloneElement = this.model.editSettings.inlineFormTemplateID;

            $form.html($(cloneElement).html());
            $tbody = this.renderDiaglogButton($form, $tbody);
            $.templates(this._id + "_JSONdialogTemplateMode", $tbody.html());
        },
        _editdblClickHandler: function (e) {
            var $target = $(e.target);
            if ($target.hasClass("e-rowcell")) {
                if (!this.model.isEdit) {
                    this._$currentTr = (this.model.scrollSettings.frozenColumns > 0 || this.model.scrollSettings.frozenRows > 0)
                        ? this.getRowByIndex($target.closest('tr').index())
                        : $target.closest('tr');
                    this.startEdit(this._$currentTr);
                }
            }
            return false;
        },
        _columnToSelect: function () {
            var column = [];
            for (var i = 0; i < this.model.columns.length; i++) {
                if (this.model.columns[i]["editType"] === ej.Grid.EditingType.Dropdown && ej.isNullOrUndefined(this.model.columns[i]["dataSource"]))
                    column.push(this.model.columns[i].field);
            }
            if (column.length)
                return ej.Query().select(column);
            return ej.Query();
        },
        _renderExternalForm: function () {
            var $externalform = ej.buildTag("div", "", { display: "none" }, { id: this._id + "_externalEdit", 'class': "e-form-container" });
            var $eformHeader = ej.buildTag("div", "", "", { id: this._id + "_eFormHeader", 'class': "e-form-titlebar" });
            var $eformTitle = ej.buildTag("span", "", "", { 'class': "e-form-title" });
            var $eformToggleBtn = ej.buildTag("div", "", "", { id: this._id + "_eFormToggleBtn", 'class': "e-form-togglebtn" });
            var $eformToggleIcon = ej.buildTag("span", "", "", { 'class': "e-form-toggle-icon e-icon" });
            $eformToggleBtn.append($eformToggleIcon);
            $eformHeader.append($eformTitle).append($eformToggleBtn);

            var $eformContent = ej.buildTag("div", "", "", { id: this._id + "_eFormContent", 'class': "e-form-content" });
            var $eform = ej.buildTag("div", "", "", { id: this._id + "_externalForm", 'class': "e-externalform" });
            var $contentOuterDiv = ej.buildTag("div", "", "", { 'class': "e-externalformedit" });
            $eform.append($contentOuterDiv);
            $eformContent.append($eform);
            return $externalform.append($eformHeader).append($eformContent);;
        },
        _buttonClick: function (e) {
            if (e.type == "close") {
                if (!this.model.isEdit)
                    return;
                this.model.isEdit = false;
                this.refreshToolbar();
                return;
            }
            if (e.keyCode !== undefined && e.keyCode != 13 || this.model == null)
                return true;
            if (this.model.editSettings.editMode == "dialog" || this.model.editSettings.editMode == "dialogtemplate") {
                if (e.target.id == "EditDialog_" + this._id + "_Save") {
                    if (this.element.ejGrid("endEdit").length !== undefined)
                        $("#" + this._id + "_dialogEdit").ejDialog("close");
                } else if (e.target.id == "EditDialog_" + this._id + "_Cancel") {
                    this.element.ejGrid("cancelEdit");
                    $("#" + this._id + "_dialogEdit").ejDialog("close");
                }
            }
            else if (this.model.editSettings.editMode == "externalform" || this.model.editSettings.editMode == "externalformtemplate") {
                if ($(e.target).hasClass("e-form-toggle-icon")) {
                    this.element.ejGrid("cancelEdit");
                    $("#" + this._id + "_externalEdit").css("display", "none");
                }
                else {
                    if (e.target.id == "EditExternalForm_" + this._id + "_Save") {
                        if (this.element.ejGrid("endEdit").length !== undefined)
                            $("#" + this._id + "_externalEdit").css("display", "none");
                    } else if (e.target.id == "EditExternalForm_" + this._id + "_Cancel") {
                        this.element.ejGrid("cancelEdit");
                        $("#" + this._id + "_externalEdit").css("display", "none");
                    }
                }
            }
            else if (this.model.editSettings.editMode == "inlineform" || this.model.editSettings.editMode == "inlineformtemplate") {
                if (e.target.id == "InlineEditForm_" + this._id + "_Save")
                    this.element.ejGrid("endEdit");
                else if (e.target.id == "InlineEditForm_" + this._id + "_Cancel")
                    this.element.ejGrid("cancelEdit");
            }
            else
                this.element.ejGrid("cancelEdit");
        },
        _enableEditingEvents: function () {
            if (this.model.editSettings.allowEditing || this.model.editSettings.allowAdding) {
                if (this.model.editSettings.allowEditing && this.model.editSettings.editMode != "batch" && this.model.editSettings.allowEditOnDblClick)
                    this._on(this.element, "dblclick", ".e-gridcontent", this._editdblClickHandler);
                else
                    this._off(this.element, "dblclick", ".e-gridcontent");
                this._off($("#" + this._id + "_dialogEdit"), "click keypress", "#EditDialog_" + this._id + "_Save ,#EditDialog_" + this._id + "_Cancel");
                if (this.model.editSettings.editMode == "dialog" || this.model.editSettings.editMode == "dialogtemplate") {
                    this._on($("#" + this._id + "_dialogEdit"), "click keypress", "#EditDialog_" + this._id + "_Save ,#EditDialog_" + this._id + "_Cancel", this._buttonClick);
                }
                else if (this.model.editSettings.editMode == "externalform" || this.model.editSettings.editMode == "externalformtemplate") {
                    this._on($("#" + this._id + "_externalEdit"), "click keypress", "#EditExternalForm_" + this._id + "_Save ,#EditExternalForm_" + this._id + "_Cancel", this._buttonClick);
                    $(this.element).on("click", ".e-form-toggle-icon", $.proxy(this._buttonClick, this));
                }
                else if (this.model.editSettings.editMode == "batch")
                    this._on($(document), "mousedown", this._saveCellHandler);

                else if (this.model.editSettings.editMode == "inlineform" || this.model.editSettings.editMode == "inlineformtemplate")
                    $(this.element).on("click keypress", "#InlineEditForm_" + this._id + "_Save ,#InlineEditForm_" + this._id + "_Cancel", $.proxy(this._buttonClick, this));

            } else {
                this._off($("#" + this._id + "_dialogEdit"), "click", "#EditDialog_" + this._id + "_Save ,#EditDialog_" + this._id + "_Cancel");
                $(this.element).off("click", ".e-icon");
                this._off($("#" + this._id + "_externalEdit"), "click", "#EditExternalForm_" + this._id + "_Save ,#EditExternalForm_" + this._id + "_Cancel");
                $(this.element).off("click", ".e-form-toggle-icon");
                $(this.element).off("click", "#InlineEditForm_" + this._id + "_Save ,#InlineEditForm_" + this._id + "_Cancel");
            }
        },

        _deleteRow: function ($tr) {
            if (!this.model.editSettings.allowDeleting)
                return;
            if (this.model.editSettings.editMode == "batch")
                this._bulkDelete(this.getIndexByRow($tr));
            else {
                if (this._primaryKeys.length == 0 && !this.model.editSettings.allowEditing && !this.model.editSettings.allowAdding) {
                    for (i = 0; i < this.model.columns.length; i++) {
                        if (this.model.columns[i]["isPrimaryKey"] === true) {
                            this._primaryKeys.push($.trim(this.model.columns[i].field));
                            this._primaryKeys = $.unique(this._primaryKeys);
                        }
                    }
                }
                if (this._selectedRow() == -1 && ej.isNullOrUndefined($tr)) {
                    alert(this._getLocalizedLabels("DeleteOperationAlert"));
                    return;
                }
                if (ej.isNullOrUndefined($tr))
                    $tr = this.getRowByIndex(this._selectedRow());
                this._primaryKeyValues = [];
                for (var index = 0; index < this._primaryKeys.length; index++) {
                    var column = this.getColumnByField(this._primaryKeys[index]);
                    var index = $.inArray(column, this.model.columns);
                    this._primaryKeyValues.push($tr.find(".e-rowcell").eq(index).html());
                }
                var deleteManager = ej.DataManager(this._currentJsonData);
                var query = new ej.Query();
                for (var i = 0; i < this._primaryKeys.length; i++)
                    query = query.where(this._primaryKeys[i], ej.FilterOperators.equal, this._primaryKeyValues[i]);
                currentData = deleteManager.executeLocal(query);
                var args = {};
                args.tr = $tr;
                args.data = currentData[0];
                var foreignKeyData = this._getForeignKeyData(args.data);
                if (!ej.isNullOrUndefined(foreignKeyData))
                    args.foreignKeyData = foreignKeyData;
                args.requestType = ej.Grid.Actions.Delete;
                if (this._trigger("actionBegin", args))
                    return true;
                this._cDeleteData = currentData;
                var promise;
                if (this._dataSource() instanceof ej.DataManager) {
                    promise = this._dataManager.remove(this._primaryKeys[0], currentData[0][this._primaryKeys[0]]);
                    var proxy = this;
                    if ($.isFunction(promise.promise)) {
                        promise.done(function(e) {
                            proxy._processBindings(args);
                            proxy._primaryKeyValues = [];
                            proxy._cDeleteData = null;
                        });
                        promise.fail(function(e) {

                        });
                    } else
                        this._processBindings(args);
                } else
                    this._processBindings(args);
                if (promise == undefined || !$.isFunction(promise.promise)) {
                    this._primaryKeyValues = [];
                    this._cDeleteData = null;
                }
            }
        },
        /**
		 * It is used to send an edit record request in grid control.
         * @alias ejGrid#startEdit
		 * @return jQuery
		 * @param {object} $tr Pass the tr- selected row element to be edited in grid
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Sends an edit record request to the grid
		 * gridObj.startEdit($(".gridcontent tr").first()); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Sends an edit record request to the grid
		 * $("#Grid").ejGrid("startEdit", $(".gridcontent tr").first());        
		 * &lt;/script&gt;
         */
        startEdit: function ($tr) {
            if (!this.model.editSettings.allowEditing)
                return;
            if (this._selectedRow() == -1 && ej.isNullOrUndefined($tr)) {
                alert(this._getLocalizedLabels("EditOperationAlert"));
                return;
            }
            if (ej.isNullOrUndefined($tr)) {
                this._currentTrIndex = this._selectedRow();
                this._$currentTr = this.getRowByIndex(this._currentTrIndex);
            } else {
                this._currentTrIndex = $tr.index();
                this._$currentTr = $tr;
            }
            for (var index = 0; index < this._primaryKeys.length; index++) {
                var column = this.getColumnByField(this._primaryKeys[index]);
                var indx = $.inArray(column, this.model.columns);
                this._primaryKeyValues.push(this._$currentTr.find(".e-rowcell").eq(indx).html());
            }
            var args = { row: this._$currentTr, rowIndex: this._currentTrIndex, primaryKey: this._primaryKeys, primaryKeyValue: this._primaryKeyValues };
            var cancel = this._trigger("beginEdit", args);
            if (cancel) {
                this._primaryKeyValues = [];
                return;
            }
            args.requestType = ej.Grid.Actions.BeginEdit;
            this._processBindings(args);

        },
         _startAdd: function() {
            if (!this.model.editSettings.allowAdding)
                return;
            if (this.model.editSettings.editMode == "batch")
                this._bulkAddRow();
            else {
                var cloneData = {};
                for (var i = 0; i < this.model.columns.length; i++)
                    cloneData[this.model.columns[i].field] = !ej.isNullOrUndefined(this.model.columns[i].defaultValue) ? this.model.columns[i].defaultValue : "";
                var args = {};
                args.data = cloneData;
                var foreignKeyData = this._getForeignKeyData(args.data);
                if (!ej.isNullOrUndefined(foreignKeyData))
                    args.foreignKeyData = foreignKeyData;
                args.requestType = "add";
                this.clearSelection();
                var returnValue = this._processBindings(args);
                if (!returnValue)
                    this._selectedRow(0);
                var groupedColumns = this.model.groupSettings.groupedColumns.length;
                if (groupedColumns > 1) {
                    var $editCol = this.getContentTable().find(".e-addedrow").find("table").find("colgroup").children();
                    $($editCol.slice(0, groupedColumns - 1)).css('width', this.getHeaderTable().find('colgroup').children()[0].style.width);
                }
            }
        },
        /**
		 * It is used to send a save request in grid control.
         * @alias ejGrid#endEdit
		 * @return jQuery
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Sends a save request to the grid
		 * gridObj.endEdit(); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Sends a save request to the grid
		 * $("#Grid").ejGrid("endEdit");        
		 * &lt;/script&gt;
         */
        endEdit: function () {
            if (this.model.isEdit) {
                var formElement, $formElement;
                if (!this.editFormValidate())
                    return true;
                var obj = {};
                var subElements = [];
                var editedRowWrap;
                if (this.model.editSettings.editMode == "batch")
                    this.saveCell();
                else {
                    formElement = this.model.scrollSettings.frozenColumns > 0 ? this.element.find(".gridform") : document.getElementById(this._id + "EditForm");
                    $formElement = $(formElement);
                    if (this.model.editSettings.editMode == "normal" || this.model.editSettings.editMode == "inlineform" || this.model.editSettings.editMode == "inlineformtemplate")
                        editedRowWrap = $formElement.closest('tr');
                    else
                        editedRowWrap = $formElement.closest('div');
                    formElement = this.model.scrollSettings.frozenColumns > 0 ? formElement[0] : formElement;
                    for (var index = 0; index < formElement.length; index++) {
                        if (editedRowWrap.hasClass("e-addedrow") && $(formElement[index]).hasClass("e-identity"))
                            continue;
                        var columnName = formElement[index].name, $element = $(formElement[index]);
                        if (columnName != undefined) {
                            if (columnName == "") {
                                if (formElement[index].id.indexOf("Save") != -1 || formElement[index].id.indexOf("Cancel")!= -1)
                                    columnName = "";
                                else
                                    columnName = formElement[index].id.replace(this._id, "");
                            }
                            if (columnName != "" && obj[columnName] == null) {
                                var column = this.getColumnByField(columnName), value = formElement[index].value;
                                if ($(formElement[index]).hasClass("e-datepicker")) {
                                    value = $element.ejDatePicker("model.value");
                                    subElements.push({ element: $element, pluginName: "ejDatePicker" });
                                }
                                else if ($(formElement[index]).hasClass("e-datetimepicker")) {
                                    value = $element.ejDateTimePicker("model.value");
                                    subElements.push({ element :$element, pluginName:"ejDateTimePicker"});
                                }
                                else if ($element.is(".e-numerictextbox"))
                                    value = $element.ejNumericTextbox("getValue");
                                else if ($element.data("ejDropDownList")) {
                                    value = $element.ejDropDownList("getSelectedValue");
                                    subElements.push({ element: $element, pluginName: "ejDropDownList" });
                                }
                                if (column == null)
                                    value = !isNaN(parseFloat(value)) && isFinite(value) ? parseFloat(value) : value;
                                else if (column.type == "number" && value.length)
                                    value = parseFloat(value);
                                var originalvalue;
                            if (formElement[index].type != "checkbox")
                                originalvalue = value;
                            else
                                originalvalue = $(formElement[index]).is(':checked');
                            if (columnName.indexOf(".") != -1)
                                ej.createObject(columnName, originalvalue, obj);
                            else
                                obj[columnName] = originalvalue;
                            }
                        }
                        if (index == formElement.length - 1 && $formElement.length > 1 && $formElement.index(formElement) == 0) {
                            formElement = $formElement[1];
                            index = -1;
                        }

                    }
                    var args = { data: obj };
                    var foreignKeyData = this._getForeignKeyData(args.data);
                    if (!ej.isNullOrUndefined(foreignKeyData))
                        args.foreignKeyData = foreignKeyData;
                    args.requestType = ej.Grid.Actions.Save;
                    args.selectedRow = this._selectedRow();
                    var currentData;
                    if (this._trigger("actionBegin", args))
                        return true;
                    for (var ele = 0; ele < subElements.length; ele++) {
                        var element = subElements[ele].element;
                        element.data(subElements[ele].pluginName)["destroy"]();
                    }
                    if (editedRowWrap.hasClass("e-editedrow")) {
                        this._cModifiedData = obj;
                        args.action = "edit";
                    } else if (editedRowWrap.hasClass("e-addedrow")) {
                        this._cAddedRecord = obj;
                        args.action = "add";
                    }
                    this._updateAction(args);
                }
            }
        },
        _updateAction: function (args) {
            var promise;
            if (this._dataSource() instanceof ej.DataManager) {
                if (!ej.isNullOrUndefined(this._cModifiedData))
                    promise = this._dataManager.update(this._primaryKeys[0], args.data);
                else
                    promise = this._dataManager.insert(args.data);
                var proxy = this;
                if ($.isFunction(promise.promise)) {
                    promise.done(function (e) {
                        proxy._processBindings(args);
                        proxy._cModifiedData = null;
                        proxy._cAddedRecord = null;
                        proxy._primaryKeyValues = [];
                    });
                    promise.fail(function (e) {
                    });
                } else
                    proxy._processBindings(args);
            } else
                this._processBindings(args);
            if (promise == undefined || !$.isFunction(promise.promise)) {
                this._cModifiedData = null;
                this._cAddedRecord = null;
                this._primaryKeyValues = [];
            }
        },
        /**
		 * It is used to send a cancel request in grid control.
         * @alias ejGrid#cancelEdit
		 * @return jQuery
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Sends a cancel request to the grid
		 * gridObj.cancelEdit(); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Sends a cancel request to the grid
		 * $("#Grid").ejGrid("cancelEdit");        
		 * &lt;/script&gt;
         */
        cancelEdit: function () {
            var args = {};
            $("#" + this._id + "EditForm").find(".e-datepicker").ejDatePicker("destroy");
            args.requestType = ej.Grid.Actions.Cancel;
            this._processBindings(args);
            this._primaryKeyValues = [];
            this._currentData = null;
        },
        /**
         * It is used to refresh the toolbar items in grid control.
         * @alias ejGrid#refreshToolbar
         * @return jQuery
         * @example 
         * &lt;div id="Grid"&gt;&lt;/div&gt; 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Refreshes the toolbar items state
         * gridObj.refreshToolbar(); 
         * &lt;/script&gt;
         * @example 
         * &lt;div id="Grid"&gt;&lt;/div&gt; 
         * &lt;script&gt;
         * // Refreshes the toolbar items state
         * $("#Grid").ejGrid("refreshToolbar");        
         * &lt;/script&gt;
         */
        refreshToolbar: function () {
            var $toolbar = $("#" + this._id + "_toolbarItems");
            var lis = $toolbar.find("li");
            $toolbar.ejToolbar("enableItem", lis);
            for (var i = 0; i < lis.length; i++) {
                switch (lis[i].id) {
                    case this._id + "_add":
                    case this._id + "_edit":
                    case this._id + "_delete":
                        if (this.model.isEdit) {
                            $(lis[i]).hasClass("e-hover") && $(lis[i]).removeClass("e-hover");
                            this._disabledToolItems.push(lis[i]);
                        }
                        break;
                    case this._id + "_update":
                    case this._id + "_cancel":
                        if (!this.model.isEdit) {
                            $(lis[i]).hasClass("e-hover") && $(lis[i]).removeClass("e-hover");
                            this._disabledToolItems.push(lis[i]);
                        }
                        break;
                }
            }

            $toolbar.ejToolbar("disableItem", this._disabledToolItems);
            $toolbar.ejToolbar("model.enableRTL", this.model.enableRTL);
            this._disabledToolItems = $();

        },
        _getHiddenCount: function (elements) {
            var count = 0;
            for (var i = 0; i < elements.length; i++) {
                if (elements.eq(i).hasClass("e-hide"))
                    count++;
            }
            return count;
        },
        _edit: function (args) {
            var editingManager = ej.DataManager(this._currentJsonData);
            var queryManager = new ej.Query();
            if (this.model.allowFiltering)
                this._previousFilterCount = this._filteredRecordsCount;
            for (var index = 0; index < this._primaryKeys.length; index++)
                queryManager = queryManager.where(this._primaryKeys[index], ej.FilterOperators.equal, this._primaryKeyValues[index]);
            this._currentData = editingManager.executeLocal(queryManager);
            var temp = document.createElement('div');
            var $temp = $(temp), $tempSecondTR;
            if (this.model.editSettings.editMode == "normal") {
                temp.innerHTML = ['<table>', $.render[this._id + "_JSONEditingTemplate"](this._currentData, { groupedColumns: this.model.groupSettings.groupedColumns }), '</table>'].join("");
                var $tr = $temp.find("tr").first(), detailCount = 0, $tempFirstTR, firstHidden = this.model.columns.length
                , $currentTrFr = args.row.first();
                if (this.model.scrollSettings.frozenColumns > 0) {
                    $temp.prepend(['<table>', $.render[this._id + "_JSONFrozenEditingTemplate"](this._currentData, { groupedColumns: this.model.groupSettings.groupedColumns }), '</table>'].join(""));
                    $tr.splice(0, 0, $temp.find("table").first().find("tr").first().get(0));
                    $currentTrLa = args.row.last();
                    $tempLastTR = $tr.last();
                }
                $tempFirstTR = $temp.find("tr").first();
                $temp.find('td').not(".e-rowcell").addClass("e-editcell e-normaledit");
                var $select = $temp.find("select.e-field");
                for (var i = 0; i < $select.length; i++)
                    $select.eq(i).val(this._currentData[0][$select[i].name]);
                if (this.model.groupSettings.groupedColumns.length >= 2) {
                    var $indentCell = args.row.find("td.e-indentcell");
                    $temp.find("tr").first().prepend($indentCell);
                }
                if (this.model.detailsTemplate != null) {
                    detailCount++;
                    $temp.find(".e-editcell").find("tr").prepend(args.row.find("[class*='detailrow']"));
                }
                if (this.model.scrollSettings.frozenColumns > 0) {
                    $temp.find(".e-editcell").get(1).colSpan = this.model.columns.length - this.model.scrollSettings.frozenColumns - args.row.last().find(".e-hide").length + detailCount;
                    firstHidden = this.model.scrollSettings.frozenColumns;
                    $currentTrLa.hasClass("e-alt_row") && $tempLastTR.addClass("e-alt_row")
                }
                $temp.find(".e-editcell").get(0).colSpan = firstHidden - $currentTrFr.find(".e-hide").length + detailCount;
                $currentTrFr.hasClass("e-alt_row") && $tempFirstTR.addClass("e-alt_row");
                $currentTrFr.empty().replaceWith($tempFirstTR.addClass("e-editedrow"));
                if (this.model.scrollSettings.frozenColumns > 0)
                    $currentTrLa.empty().replaceWith($tempLastTR.addClass("e-editedrow"));
                this._refreshUnboundTemplate($tr.find(".gridform"));
                this._gridRows = this.getContentTable().first().find(".e-rowcell").closest("tr").toArray();
                if (this.model.scrollSettings.frozenColumns > 0)
                    this.getScrollObject().scrollY(this.getScrollObject().model.scrollTop, true);
                if (this.model.scrollSettings.frozenColumns > 0) 
                    this._gridRows = [this._gridRows, this.getContentTable().last().find(".e-rowcell").closest("tr").toArray()];
            }
            else if (this.model.editSettings.editMode == "inlineform" || this.model.editSettings.editMode == "inlineformtemplate") {
                var hideCount = !this.model.groupSettings.showGroupedColumn ? this.model.groupSettings.groupedColumns.length : 0;
                var detailCount = 0;
                temp.innerHTML = this.model.editSettings.editMode == "inlineform" ? $.render[this._id + "_JSONDialogEditingTemplate"](this._currentData) : $.render[this._id + "_JSONdialogTemplateMode"](this._currentData);
                var $select = $temp.find("select.e-field");
                for (var i = 0; i < $select.length; i++)
                    $select.eq(i).val(this._currentData[0][$select[i].name]);
                var tr = ej.buildTag('tr');
                var td = ej.buildTag('td');
                tr.addClass("e-editedrow");
                td.addClass("e-inlineformedit");
                if (this.model.scrollSettings.frozenColumns > 0)
                    td.prop("colspan", this.model.columns.length - this.model.scrollSettings.frozenColumns - this._hiddenColumns.length - hideCount + detailCount);
                else
                    td.prop("colspan", this.model.columns.length - this._hiddenColumns.length - hideCount + detailCount);
                td.html($(temp).children());
                tr.append(td);
                if (this.model.scrollSettings.frozenColumns > 0) {
                    var $trClone = tr.clone();
                    $trClone.find("td").empty().prop("colspan", this.model.scrollSettings.frozenColumns);
                    args.row.eq(1).after(tr).end().eq(0).after($trClone);
                    this._gridRows = [this._gridRows, this.getContentTable().last().find("tr").toArray()];
                }
                else
                    args.row.after(tr);
                this._gridRows = this.getContentTable().first().find(".e-rowcell,.e-inlineformedit").closest("tr").toArray();
                if (this.model.scrollSettings.frozenColumns > 0)
                    this._gridRows = [this._gridRows, this.getContentTable().last().find("tr").toArray()];
                $("#" + this._id + "_inlineFormTitle").text(this._getLocalizedLabels("EditFormTitle") + this._currentData[0][this._primaryKeys[0]]);
            }
            else {
                $temp.addClass("e-editedrow");
                temp.innerHTML = this.model.editSettings.editMode == "dialog" || this.model.editSettings.editMode == "externalform" ? $.render[this._id + "_JSONDialogEditingTemplate"](this._currentData) : $.render[this._id + "_JSONdialogTemplateMode"](this._currentData);
                var $select = $temp.find("select.e-field");
                for (var i = 0; i < $select.length; i++)
                    $select.eq(i).val(this._currentData[0][$select[i].name]);
                if (this.model.editSettings.editMode == "dialog" || this.model.editSettings.editMode == "dialogtemplate") {
                    $("#" + this._id + "_dialogEdit").html($(temp));
                    var model = {};
                    model.cssClass = this.model.cssClass;
                    model.enableRTL = this.model.enableRTL;
                    model.width = "auto";
                    model.enableResize = false;
                    model.close = $.proxy(this._buttonClick, this);
                    model.content = "#" + this._id;
                    model.enableModal = true;
                    model.allowKeyboardNavigation = false;
                    model.title = this._getLocalizedLabels("EditFormTitle") + this._currentData[0][this._primaryKeys[0]];
                    $("#" + this._id + "_dialogEdit").ejDialog(model);
                    $("#" + this._id + "_dialogEdit").ejDialog("open");
                }
                else {
                    $("#" + this._id + "_externalEdit").css("display", "block").css('z-index', this._maxZindex() + 1);
                    $(".e-externalformedit").html($(temp));
                    $("#" + this._id + "_eFormHeader").find(".e-form-title").text(this._getLocalizedLabels("EditFormTitle") + this._currentData[0][this._primaryKeys[0]]);
                    this._externalFormPosition();
                }
            }
        },
        _add: function (args) {
            var temp = document.createElement('div');
            if ((!(this._dataSource() instanceof ej.DataManager) || this._dataManager.dataSource.url == undefined) && this.model.groupSettings.groupedColumns.length == 0 && this.model.scrollSettings.frozenColumns == 0 && this.model.scrollSettings.frozenRows == 0)
                !(this._dataSource() instanceof ej.DataManager) ? this._dataSource().splice(0, 1) : this._dataSource().dataSource.json.splice(0, 1);
            this._previousFilterCount = this._filteredRecordsCount;
            if (this.model.editSettings.editMode == "normal") {
                var $tempFirstTR, $temp = $(temp), frozenColSpan = this.model.columns.length;
                temp.innerHTML = ['<table>', $.render[this._id + "_JSONEditingTemplate"](args.data, { groupedColumns: this.model.groupSettings.groupedColumns }), '</table>'].join("");
                var $select = $(temp).find('select.e-field');
                for (var i = 0; i < $select.length; i++)
                    $select.eq(i).val(args.data[$select[i].name]);
                if (this.model.scrollSettings.frozenColumns > 0) {
                    $tempLastTR = $temp.find("table").first().find("tr").first();
                    $temp.prepend(['<table>', $.render[this._id + "_JSONFrozenEditingTemplate"](args.data, { groupedColumns: this.model.groupSettings.groupedColumns }), '</table>'].join(""));
                }
                $tempFirstTR = $temp.find("tr").first();
                var td = $(temp).find(".e-editcell").get(0);
                if (this.model.pageSettings.pageSize <= this.model.currentViewData.length && this.model.groupSettings.groupedColumns.length == 0)
                    this.getContentTable().get(0).lastChild.removeChild(this.getContentTable().get(0).lastChild.lastChild);
                if (this.model.detailsTemplate != null && $(this.getContentTable().get(0).lastChild.lastChild).children('.e-detailrowexpand').length)
                    this.getContentTable().get(0).lastChild.removeChild(this.getContentTable().get(0).lastChild.lastChild);
                if (this.model.currentViewData.length == 0 || this.getContentTable().find('td.e-rowcell').length == 0)
                    this.getContentTable().find('tr').first().replaceWith($(temp).find("tr").first().addClass("e-addedrow e-normaledit"));
                else {
                    this.getContentTable().first().find('tbody').first().prepend($tempFirstTR.addClass("e-addedrow e-normaledit"));
                    if (this.model.scrollSettings.frozenColumns > 0)
                        this.getContentTable().last().find('tbody').first().prepend($tempLastTR.addClass("e-addedrow e-normaledit"));
                }
                var $editTr = this.getContentTable().find("tr.e-addedrow");
                if (this.model.detailsTemplate != null)
                    $editTr.find('tr').first().prepend(ej.buildTag('td.e-detailrowcollapse'));
                var hideCount = !this.model.groupSettings.showGroupedColumn ? this.model.groupSettings.groupedColumns.length : 0;
                if (this.model.groupSettings.groupedColumns.length) {
                    for (var i = 0; i < this.model.groupSettings.groupedColumns.length; i++) {
                        if (i == 0)
                            $editTr.prepend(ej.buildTag("td.e-indentcell"));
                        else {
                            $editTr.find("tr").prepend(ej.buildTag("td.e-indentcell"));
                        }
                    }
                    if (this.model.groupSettings.groupedColumns.length >= 2)
                        $editTr.find("td.e-editcell").prop("colspan", (this.model.columns.length + (this.model.groupSettings.groupedColumns.length - 1) - this._hiddenColumns.length - hideCount));
                    else
                        $editTr.find("td.e-editcell").prop("colspan", (this.model.columns.length - this._hiddenColumns.length - hideCount));
                } else if (this.model.detailsTemplate != null)
                    $editTr.find(".e-editcell").prop("colspan", (this.model.columns.length - this._hiddenColumns.length - hideCount + 1));
                else {
                    if (this.model.scrollSettings.frozenColumns > 0) {
                        $editTr.find(".e-editcell").last().prop("colspan", (this.model.columns.length - this.model.scrollSettings.frozenColumns - $tempLastTR.find(".e-hide").length - hideCount));
                        frozenColSpan = this.model.scrollSettings.frozenColumns;
                    }
                    $editTr.find(".e-editcell").first().prop("colspan", (frozenColSpan - $tempFirstTR.find(".e-hide").length - hideCount));

                }
                this._refreshUnboundTemplate($editTr.find(".gridform"));
                this._gridRows = this.getContentTable().first().find(".e-rowcell").closest("tr").toArray();
                if (this.model.scrollSettings.frozenColumns > 0)
                    this._gridRows = [this._gridRows, this.getContentTable().last().find(".e-rowcell").closest("tr").toArray()];
            }
            else if (this.model.editSettings.editMode == "inlineform" || this.model.editSettings.editMode == "inlineformtemplate") {
                temp.innerHTML = this.model.editSettings.editMode == "inlineform" ? $.render[this._id + "_JSONDialogEditingTemplate"](args.data) : $.render[this._id + "_JSONdialogTemplateMode"](args.data);
                var $select = $(temp).find('select.e-field');
                for (var i = 0; i < $select.length; i++)
                    $select.eq(i).val(args.data[$select[i].name]);
                var hideCount = !this.model.groupSettings.showGroupedColumn ? this.model.groupSettings.groupedColumns.length : 0;
                var detailCount = 0;
                var tr = ej.buildTag('tr');
                var td = ej.buildTag('td');
                tr.addClass("e-addedrow");
                td.addClass("e-inlineformedit e-editcell");
                td.html($(temp).children());
                tr.append(td);
                var hideCount = !this.model.groupSettings.showGroupedColumn ? this.model.groupSettings.groupedColumns.length : 0;
                if (this.model.groupSettings.groupedColumns.length) {
                    for (var i = 0; i < this.model.groupSettings.groupedColumns.length; i++) {
                        tr.prepend(ej.buildTag("td.e-indentcell"));
                    }
                } else
                    tr.find("td.e-editcell").prop("colspan", (this.model.columns.length - this._hiddenColumns.length - hideCount));
                if (this.model.scrollSettings.frozenColumns > 0) {
                    var $trClone = tr.clone(), $divs = td.find(".gridform").children();
                    $trClone.find("td").empty().prop("colSpan", this.model.scrollSettings.frozenColumns - this._getHiddenCount($divs.slice(0, this.model.scrollSettings.frozenColumns)));
                    td.prop("colSpan", this.model.columns.length - this.model.scrollSettings.frozenColumns - this._getHiddenCount($divs.slice(this.model.scrollSettings.frozenColumns)));
                    this.getContentTable().first().find('tbody').first().prepend($trClone);
                    this.getContentTable().last().find('tbody').first().prepend(tr);
                }
                else {
                    td.prop("colspan", this.model.columns.length - this._hiddenColumns.length - hideCount + detailCount);
                    if (this.model.currentViewData.length == 0 || this.getContentTable().find('td.e-rowcell').length == 0)
                        this.getContentTable().find('tr').first().replaceWith($(tr));
                    else
                        this.getContentTable().find('tbody').first().prepend(tr);
                }
                if (this.model.pageSettings.pageSize <= this.model.currentViewData.length && this.model.groupSettings.groupedColumns.length == 0)
                    this.getContentTable().get(0).lastChild.removeChild(this.getContentTable().get(0).lastChild.lastChild);
                if (this.model.detailsTemplate != null && $(this.getContentTable().get(0).lastChild.lastChild).children('.e-detailrowexpand').length)
                    this.getContentTable().get(0).lastChild.removeChild(this.getContentTable().get(0).lastChild.lastChild);
                $("#" + this._id + "_inlineFormTitle").text(this._getLocalizedLabels("AddFormTitle"));
                this._refreshUnboundTemplate($("#" + this._id + "EditForm"));
                this._gridRows = this.getContentTable().first().find(".e-rowcell,.e-inlineformedit").closest("tr").toArray();
                if (this.model.scrollSettings.frozenColumns > 0)
                    this._gridRows = [this._gridRows, this.getContentTable().last().find(".e-rowcell").closest("tr").toArray()];
            }
            else {
                $(temp).addClass("e-addedrow");
                temp.innerHTML = this.model.editSettings.editMode == "dialog" || this.model.editSettings.editMode == "externalform" ? $.render[this._id + "_JSONDialogEditingTemplate"](args.data) : $.render[this._id + "_JSONdialogTemplateMode"](args.data);
                var $select = $(temp).find('select.e-field');
                for (var i = 0; i < $select.length; i++)
                    $select.eq(i).val(args.data[$select[i].name]);
                if (this.model.editSettings.editMode == "dialog" || this.model.editSettings.editMode == "dialogtemplate") {
                    $("#" + this._id + "_dialogEdit").html($(temp));
                    var model = {};
                    model.cssClass = this.model.cssClass;
                    model.width = "auto";
                    model.enableResize = false;
                    model.content = "#" + this._id;
                    model.enableModal = true;
                    model.close = $.proxy(this._buttonClick, this);
                    model.enableRTL = this.model.enableRTL;
                    model.allowKeyboardNavigation = false;
                    model.title = this._getLocalizedLabels("AddFormTitle");
                    $("#" + this._id + "_dialogEdit").ejDialog(model);
                    $("#" + this._id + "_dialogEdit").ejDialog("open");
                }
                else {
                    $("#" + this._id + "_externalEdit").css("display", "block").css('z-index', this._maxZindex() + 1);
                    $(".e-externalformedit").html($(temp));
                    $("#" + this._id + "_eFormHeader").find(".e-form-title").text(this._getLocalizedLabels("AddFormTitle"));
                    this._externalFormPosition();
                }
            }
            if (this.model.allowPaging) {
                if (this.model.filterSettings.filteredColumns.length)
                    this.getPager().ejPager({ totalRecordsCount: this._searchCount == null ? this._filteredRecordsCount : this._searchCount, currentPage: this._currentPage() });
                else
                    this.getPager().ejPager({ totalRecordsCount: this._searchCount == null ? this._gridRecordsCount : this._searchCount, currentPage: this._currentPage() });
                this._refreshGridPager();
            }
        },
        editFormValidate: function () {
            if ($.isFunction($.validator)) {
                if (this.model.scrollSettings.frozenColumns > 0) {
                    var forms = this.element.find(".gridform");
                    return forms.length > 1 ? forms.eq(0).validate().form() && forms.eq(1).validate().form() : forms.validate().form();
                }
                return $("#" + this._id + "EditForm").validate().form();
            }
            return true;
        },
        _refreshAltRow: function () {
            var $gridRows = this.getContentTable().get(0).rows;
            for (var r = 0; r < $gridRows.length; r++) {
                var $row = $($gridRows[r]);
                $row.hasClass("e-alt_row") && $row.removeClass("e-alt_row");
                if ($row.index() % 2 != 0)
                    $row.addClass("e-alt_row");
            }
        },
        _editCompleteAction: function (args) {
            var $form = this.element.find(".gridform");
            this.model.isEdit = true;
            this.setWidthToColumns();
            if (ej.Grid.Actions.Add == args.requestType) {
                $form.find(".e-field:disabled").not(".e-identity").removeAttr("disabled").removeClass("e-disable");
                for (var i = 0; i < this.model.groupSettings.groupedColumns.length - 1; i++)
                    $form.find("colgroup").prepend(this._getIndentCol());
            }
            if (this._tdsOffsetWidth.length == 0 || this.model.groupSettings.groupedColumns.length)
                this._setoffsetWidth();
            this.model.editSettings.editMode != "dialogtemplate" && this._refreshEditForm();
            if (this.model.scrollSettings.frozenColumns > 0 && (this.model.editSettings.editMode == "inlineform" || this.model.editSettings.editMode == "inlineformtemplate")) {
                if (args.requestType == "beginedit")
                    args.row.eq(0).next().find("td").height(args.row.eq(1).next().find("td").height());
                else
                    this.getContentTable().first().find("tr").first().find("td").height(this.getContentTable().last().find("tr").first().find("td").height());
            }
            if (this.model.scrollSettings.frozenRows > 0 && args.requestType == "beginedit")
                this._initFrozenRows();
            if ($.isFunction($.validator))
                this.setValidation();
        },
        _refreshEditForm: function () {
            var form = this.model.scrollSettings.frozenColumns > 0 ? this.element.find(".gridform") : document.getElementById(this._id + "EditForm");
            var elementFocused = false;
            var $formElement = $(form).find("input,select"), percent = 86;
            if (this._isUnboundColumn)
                $formElement = $formElement.filter(function () { return !$(this).closest("td").hasClass("e-unboundcell") })
            for (var i = 0; i < $formElement.length; i++) {
                var $element = $formElement.eq(i);
                var inputWidth;
                if (this.model.editSettings.editMode == "externalform" || this.model.editSettings.editMode == "externalformtemplate" || this.model.editSettings.editMode == "inlineform" || this.model.editSettings.editMode == "inlineformtemplate") {
                    $element.parent().css("width", ej.dataUtil.max(this._tdsOffsetWidth) + "px");
                }
                if (this.model.editSettings.editMode == "batch")
                    percent = 95;
                else if (this.model.editSettings.editMode == "normal")
                    percent = 96;
                inputWidth = this._tdsOffsetWidth[i] * (percent / 100);
                if ($element.hasClass("e-numerictextbox")) {
                    var width = inputWidth;
                    var params = {};
                    var value = $element.val();
                    params.width = width;
                    params.enableRTL = this.model.enableRTL;
                    params.showSpinButton = true;
                    params.cssClass = this.model.cssClass;
                    if (value.length)
                        params.value = parseFloat(value);
		    		if ($element.hasClass("e-disable"))
                        params.enabled = false;
                    var customParams = this.getColumnByField($element.prop("name"));
                    if (!ej.isNullOrUndefined(customParams["editParams"]))
                        $.extend(params, customParams["editParams"]);
                    $element.ejNumericTextbox(params);
                    $element.prop("name", $element.prop("name").replace(this._id, ""));
                } else if ($element.hasClass("e-datepicker")) {
                    var width = inputWidth;
                    var params = {};
                    params.width = width;
                    params.enableRTL = this.model.enableRTL;
                    params.cssClass = this.model.cssClass;
                    params.displayDefaultDate = true;
                    if ($element.val().length)
                        params.value = new Date($element.val());
		    		if ($element.hasClass("e-disable"))
                        params.enabled = false;
                    var column = this.getColumnByField($element.prop("name"));
                    if (column["format"] !== undefined && column.format.length > 0) {
                        var toformat = new RegExp("\\{0(:([^\\}]+))?\\}", "gm");
                        var formatVal = toformat.exec(column.format);
                        params.dateFormat = formatVal[2];
                    }
                    if (!ej.isNullOrUndefined(column["editParams"]))
                        $.extend(params, column["editParams"]);
                    $element.ejDatePicker(params);
                }
                else if ($element.hasClass("e-datetimepicker")) {
                    var width = inputWidth;
                    var params = {
                        width: width,
                        enableRTL: this.model.enableRTL,
                        cssClass: this.model.cssClass
                    };
                    if ($element.val().length)
                        params.value = new Date($element.val());
		    		if ($element.hasClass("e-disable"))
                        params.enabled = false;
                    var column = this.getColumnByField($element.prop("name"));
                    if (column["format"] !== undefined && column.format.length > 0) {
                        var toformat = new RegExp("\\{0(:([^\\}]+))?\\}", "gm");
                        var formatVal = toformat.exec(column.format);
                        params.dateTimeFormat = formatVal[2];
                    }
                    if (!ej.isNullOrUndefined(column["editParams"]))
                        $.extend(params, column["editParams"]);
                    $element.ejDateTimePicker(params);
                }
                else if ($element.hasClass("e-dropdownlist")) {
                    $element.ejDropDownList({
                        width: inputWidth + "px",
                        enableRTL: this.model.enableRTL
                    });
                    $element.ejDropDownList("setSelectedValue", $element.val());
		    		if ($element.hasClass("e-disable"))
                        $element.ejDropDownList("disable");
                }
                    //else if ($element.hasClass("checkbox"))
                    //{
                    //    var value = $element.prop("checked");
                    //    $element.ejCheckBox({
                    //        id: $element[0].id,
                    //        checked: value
                    //    });
                    //}
                else {
                    switch ($element.prop('tagName')) {
                        case "INPUT":
                            if ($element.attr("type") != "checkbox") {
                                $element.css("text-align", $element.attr("name") != null && this.getColumnByField($element.attr("name")) != null ?
                                this.getColumnByField($element.attr("name")).textAlign : "center");
                                if (this.model.editSettings.editMode == "batch")
                                    $element.width('100%').height(28);
                                else if (this.model.editSettings.editMode == "normal")
                                    $element.css('width', '100%').css("height", "30px");
                                else
                                    $element.outerWidth(inputWidth).height(28);

                            }
                            else
                                $element.width(inputWidth > 0 ? ($element.width() > inputWidth ? inputWidth : $element.width()) : 1);
                            break;
                        case "SELECT":
                            $element.width(inputWidth).height(28);
                            break;
                    }
                }
                if (!$element.is(":disabled") && !elementFocused && (!$element.is(":hidden") || typeof $element.data("ejDropDownList") == "object")) {
                    this._focusElements($element.closest('td'));
                    elementFocused = true;
                }
            }

        },
        _focusElements: function ($currentCell) {
            if ($currentCell.length) {
                var $childElem = $currentCell.children();
                if ($childElem[0].tagName.toLowerCase() == "select" || $childElem[0].tagName.toLowerCase() == "input") {
                    $childElem.focus().select();
                    $childElem[0].focus();
                }
                else if ($childElem.find(".e-field.e-dropdownlist").length)
                    $childElem.find(".e-ddl").focus();
                else
                    $childElem.find('input,select').first().select().focus();
            }
        },
        _renderToolBar: function () {
            var $div = ej.buildTag('div.e-gridtoolbar', "", {}, { id: this._id + "_toolbarItems" });
            var $ul = ej.buildTag("ul");
            (!ej.isNullOrUndefined(this.model.toolbarSettings.toolbarItems) && this.model.toolbarSettings.toolbarItems.length) && this._renderLi($ul);
            $div.append($ul);
            var $customUl = ej.buildTag("ul");
            $div.append($customUl);
            (!ej.isNullOrUndefined(this.model.toolbarSettings.customToolbarItems) && this.model.toolbarSettings.customToolbarItems.length) && this._renderCustomLi($customUl);
            var model = {};
            model.click = this._toolBarClick;
            model.cssClass = this.model.cssClass;
            model.enableRTL = this.model.enableRTL;
            model.enableSeprator = false;
            $div.ejToolbar(model);
            $div.ejToolbar("disableItem", this._disabledToolItems);
            this._disabledToolItems = $();
            return $div;
        },
        _renderCustomLi: function ($ul) {
            for (var i = 0; i < this.model.toolbarSettings.customToolbarItems.length; i++) {
                var $li = ej.buildTag("li", "", {}, { title: this.model.toolbarSettings.customToolbarItems[i] });
                switch (typeof this.model.toolbarSettings.customToolbarItems[i]) {
                    case "string":
                        var $item = ej.buildTag("a.e-toolbaricons e-icon", "", {}).addClass(this.model.toolbarSettings.customToolbarItems[i]);
                        break;
                    case "object":
                        $li.attr("title", this.model.toolbarSettings.customToolbarItems[i]["templateID"].replace("#", ""));
                        var $item = $(this.model.toolbarSettings.customToolbarItems[i]["templateID"]).hide().html();
                        break;
                }
                $li.html($item);
                $ul.append($li);
            }
        },
        _renderLi: function ($ul) {
            for (var i = 0; i < this.model.toolbarSettings.toolbarItems.length; i++) {
                var $li = ej.buildTag("li", "", {}, { id: this._id + "_" + this.model.toolbarSettings.toolbarItems[i], title: this._getLocalizedLabels(this.model.toolbarSettings.toolbarItems[i].slice(0, 1).toUpperCase() + this.model.toolbarSettings.toolbarItems[i].slice(1)), "tabindex": "0" });
                this._renderLiContent($li, this.model.toolbarSettings.toolbarItems[i]);
                $ul.append($li);
            }
        },
        _renderLiContent: function ($li, item) {
            var $a, $input;
            switch (item) {
                case "add":
                    $a = ej.buildTag("a.e-addnewitem e-toolbaricons e-icon e-addnew", "", {});
                    break;
                case "edit":
                    $a = ej.buildTag("a.e-edititem e-toolbaricons e-icon e-edit", "", {});
                    break;
                case "delete":
                    $a = ej.buildTag("a.e-deleteitem e-toolbaricons e-icon e-delete", "", {});
                    break;
                case "update":
                    $a = ej.buildTag("a.e-saveitem e-toolbaricons e-disabletool e-icon e-save", "", {});
                    this._disabledToolItems.push($li.get(0));
                    break;
                case "cancel":
                    $a = ej.buildTag("a.e-cancel e-toolbaricons e-disabletool e-icon e-gcancel", "", {});
                    this._disabledToolItems.push($li.get(0));
                    break;
                case "search":
                    $input = ej.buildTag("input.e-ejinputtext", "", {}, { type: "text" });
                    $a = ej.buildTag("a.e-searchitem e-toolbaricons e-disabletool e-icon e-searchfind", "", {});
                    $li.append($input);
                    this.model.allowSearching = true;
                    break;
            }
            $li.append($a);

        },
        _toolBarClick: function (Sender) {
            var $gridEle = $(this.itemsContainer).closest(".e-grid"), gridInstance = $gridEle.ejGrid("instance"), gridId = $gridEle.attr('id');
            if (Sender.event == undefined && Sender.target.tagName == "INPUT" && Sender.currentTarget.id == gridId + "_search")
                return;
            $.isFunction($.fn.ejDatePicker) && $("#" + gridId + "EditForm").find(".e-datepicker").ejDatePicker("hide");
            if ($gridEle.ejGrid("instance")._trigger("toolbarClick", Sender))
                return;
            switch (Sender.currentTarget.id) {
                case gridId + "_add":
                    gridInstance._toolbarOperation(gridId + "_add");
                    break;
                case gridId + "_edit":
                    gridInstance._toolbarOperation(gridId + "_edit");
                    break;
                case gridId + "_delete":
                    gridInstance._toolbarOperation(gridId + "_delete");
                    break;
                case gridId + "_update":
                    gridInstance._toolbarOperation(gridId + "_update");
                    break;
                case gridId + "_cancel":
                    if (gridInstance.model.editSettings.editMode == "batch")
                        gridInstance.cancelEdit();
                    else
                        gridInstance._toolbarOperation(gridId + "_cancel");
                    break;
                case gridId + "_search":
                    gridInstance._toolbarOperation(gridId + "_search", $(Sender.currentTarget).find("input").val());
                    break;
            }
            return false;
        },

        _toolbarOperation: function (operation, searchEle) {
            var $gridEle = this.element, gridObject = $gridEle.ejGrid("instance"), batchEnable = gridObject.model.editSettings.editMode == "batch", gridId = $gridEle.attr('id'), fieldName;
            switch (operation) {
                case gridId + "_add":
                    if (batchEnable)
                        gridObject._bulkAddRow();
                    else
                        gridObject._startAdd();
                    break;
                case gridId + "_edit":
                    if (batchEnable) {
					    if (gridObject._bulkEditCellDetails.columnIndex == -1) {
                            alert(this._getLocalizedLabels("EditOperationAlert"));
                            return;
                        }
                        fieldName = gridObject.model.columns[gridObject._bulkEditCellDetails.columnIndex].field;
                        fieldName && gridObject.editCell(gridObject._bulkEditCellDetails.rowIndex, fieldName);
                    }
                    else
                        gridObject.startEdit();
                    break;
                case gridId + "_delete":
                    if (batchEnable)
                        gridObject._bulkDelete();
                    else
                        gridObject._deleteRow();
                    break;
                case gridId + "_update":
                    if (batchEnable)
                        this._confirmDialog.find(".e-content").html(this._getLocalizedLabels("BatchSaveConfirm")).end().ejDialog("open");
                    else
                        gridObject.endEdit();
                    break;
                case gridId + "_cancel":
                    if (batchEnable) {
                        if ($("#" + gridId + "ConfirmDialog").ejDialog("isOpened") === true)
                            this._triggerConfirm();
                        else
                            gridObject.cancelEditCell();
                    }
                    else
                        gridObject.cancelEdit();
                    break;
                case gridId + "_search":
                    $gridEle.ejGrid("search", searchEle);
                    break;
            }
            return false;
        },
        renderDiaglogButton: function (form, tbody) {
            var btnId;
            if (this.model.editSettings.editMode == "externalform" || this.model.editSettings.editMode == "externalformtemplate")
                btnId = "EditExternalForm_";
            else if (this.model.editSettings.editMode == "inlineform" || this.model.editSettings.editMode == "inlineformtemplate") {
                btnId = "InlineEditForm_";
                var inlineTitleBar = ej.buildTag("div", "", "", { id: this._id + "_inlineFormTitle", 'class': "e-inlineform-titlebar" });
                inlineTitleBar.appendTo(tbody);
            }
            else
                btnId = "EditDialog_";
            var savebtn = ej.buildTag('input', "", { 'margin-left': '30px' }, { type: "button", id: btnId + this._id + "_Save" });
            savebtn.ejButton({ cssClass: this.model.cssClass, enableRTL: this.model.enableRTL, text: this._getLocalizedLabels("SaveButton"), width: "100" });
            var cancelbtn = ej.buildTag('input', "", { 'margin-left': '19px', 'margin-right': '13px' }, { type: "button", id: btnId + this._id + "_Cancel" });
            cancelbtn.ejButton({ cssClass: this.model.cssClass, enableRTL: this.model.enableRTL, text: this._getLocalizedLabels("CancelButton"), width: "100" });
            var btnDiv = (this.model.editSettings.editMode != "dialog" && this.model.editSettings.editMode != "dialogtemplate") ? ej.buildTag('div', "", "", { 'class': "e-editform-btn" }) : ej.buildTag('div');
            btnDiv.append(savebtn);
            btnDiv.append(cancelbtn);
            form.appendTo(tbody);
            if (this.model.editSettings.editMode != "dialog" && this.model.editSettings.editMode != "dialogtemplate")
                btnDiv.appendTo(tbody);
            else
                form.append(btnDiv);
            return tbody;
        },
        _externalFormPosition: function () {
            var pos = $(this.element).offset();
            var width = $(this.element).width();
            var height = $(this.element).height();
            var DivElement = $("#" + this._id + "_externalEdit");
            switch (this.model.editSettings.formPosition) {
                case "topright":
                    $(DivElement).find('.e-form-toggle-icon').removeClass('e-bottomleft').addClass('e-topright');
                    $(DivElement).css({ "left": (pos.left + width + 1) + "px", "top": pos.top + "px" });
                    $("#" + this._id + "_eFormContent").height((height - $("#" + this._id + "_eFormHeader")[0].offsetHeight - 1));
                    break;
                case "bottomleft":
                    $(DivElement).find('.e-form-toggle-icon').removeClass('e-topright').addClass('e-bottomleft');
                    $(DivElement).css({ "left": (pos.left) + "px", "top": (pos.top + height + 1) + "px" });
                    $("#" + this._id + "_eFormContent").width(width);
                    break;
            }
        },
        _setoffsetWidth: function () {
            var tds, $form = this.model.scrollSettings.frozenColumns > 0 ? this.element.find(".gridform") : $("#" + this._id + "EditForm");
            if (this._gridRecordsCount == 0 && this.model.editSettings.editMode != "batch")
                return;
            if (this.model.editSettings.editMode == "batch")
                tds = $form.closest("td");
            else if (this.model.editSettings.editMode == "inlineform" || this.model.editSettings.editMode == "inlineformtemplate" || this.model.editSettings.editMode == "externalform" || this.model.editSettings.editMode == "externalformtemplate")
                tds = $form.find(".e-rowcell").not(".e-unboundcell,.e-templatecell");
            else
                tds = $form.find("tr").find(".e-rowcell").not(".e-unboundcell,.e-templatecell");
            for (var i = 0; i < tds.length; i++)
                this._tdsOffsetWidth[i] = tds.get(i).offsetWidth;
        },
        _bulkChangesAcquired: function () {
            if (this._batchChanges.added.length > 0 || this._batchChanges.changed.length || this._batchChanges.deleted.length)
                return true;
            return false;
        },
        _renderDialog: function () {
            var $dialog = ej.buildTag("div.e-dialog e-dialog-content e-shadow e-widget-content", "", { display: "none" }, { id: this._id + "_dialogEdit" });
            return $dialog;
        },
        /**
         * It is used to get the data of currently edited cell value in "batch" edit mode
         * @alias ejGrid#getCurrentEditCellData
         * @return jQuery
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Get data of currently edited cell value
         * gridObj.getCurrentEditCellData(); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Get data of currently edited cell value
         * $("#Grid").ejGrid("getCurrentEditCellData");        
         * &lt;/script&gt;
         */
        getCurrentEditCellData: function () {
            if (this.model.isEdit && $("#" + this._id + "EditForm").length) {
                var $element = $("#" + this._id + this._bulkEditCellDetails.fieldName), cellValue;
                switch (this._bulkEditCellDetails.cellEditType) {
                    case ej.Grid.EditingType.String:
                        cellValue = $element.val();
                        break;
                    case ej.Grid.EditingType.Numeric:
                        cellValue = $element.ejNumericTextbox("getValue");
                        $element.ejNumericTextbox("getValue");
                        break;
                    case ej.Grid.EditingType.Dropdown:
                        cellValue = this._bulkEditCellDetails.isForeignKey ? { "value": $element.ejDropDownList("getSelectedValue"), "text": $element.ejDropDownList("getSelectedItem") } : $element.ejDropDownList("getSelectedValue");
                        break;
                    case ej.Grid.EditingType.Boolean:
                        cellValue = $element.is(':checked');
                        break;
                    case ej.Grid.EditingType.DatePicker:
                        cellValue = $element.ejDatePicker("model.value");
                        break;
                    case ej.Grid.EditingType.DateTimePicker:
                        cellValue = $element.ejDateTimePicker("model.value");
                        break;
                }
                if (typeof cellValue == "string" && cellValue.length && this.model.columns[this._bulkEditCellDetails.columnIndex].type == "number")
                    cellValue = parseFloat(cellValue);
                return cellValue;
            }
            return null;
        },
        cancelEditCell: function () {
            if (this.model.isEdit) {
                var tr = this.getRows()[this._bulkEditCellDetails.rowIndex], cellData = {}, cell;
                cellData[this._bulkEditCellDetails.fieldName] = this._bulkEditCellDetails.cellValue;
                if ($(tr).hasClass("e-insertedrow"))
                    cell = tr.cells[this._bulkEditCellDetails.columnIndex + this.model.groupSettings.groupedColumns.length];
                else
                    cell = tr.cells[this._bulkEditCellDetails.columnIndex];
                $(cell).removeClass("e-editedbatchcell").empty().html($($.templates.Grid_JSONTemplate.render(cellData))[0].cells[this._bulkEditCellDetails.columnIndex].innerHTML);
                this.model.isEdit = false;
                this.element.focus();
            }
        },
        saveCell: function (preventSaveEvent) {
            if (this.model.isEdit) {
                if (!this.editFormValidate())
                    return true;
                var $form = $("#" + this._id + "EditForm"), $targetTR = $form.closest("tr"), $targetTD = $form.closest("td"), $toolBar, formattedValue
                , args = {}, column = this.model.columns[this._bulkEditCellDetails.columnIndex], $element = $("#" + this._id + this._bulkEditCellDetails.fieldName);
                args = {
                    columnName: column.field,
                    value: this.getCurrentEditCellData(),
                    rowData: this._bulkEditCellDetails.rowData,
                    previousValue: this._bulkEditCellDetails.cellValue,
                    columnObject: column,
                    cell: $targetTD,
                    isForeignKey: this._bulkEditCellDetails.isForeignKey
                };
                if (!preventSaveEvent && this._trigger("cellSave", args)) {
                    this._focusElements(args.cell);
                    this._bulkEditCellDetails.cancelSave = true;
                    return;
                }
                if (this._bulkEditCellDetails.cellEditType == "datetimepicker" || this._bulkEditCellDetails.cellEditType == "dropdownedit" || this._bulkEditCellDetails.cellEditType == "datepicker")
                    $element[$element.data("ejWidgets")[0]]("destroy");
                if (!ej.isNullOrUndefined(column.format)) {
                    formattedValue = this.formatting(column.format, args.isForeignKey ?
                                              (!isNaN(parseFloat(args.value.text)) && isFinite(args.value.text)
                                              ? parseFloat(args.value.text)
                                              : args.value.text) : args.value);
                    args.cell.empty().html(formattedValue);
                }
                else {
                    if (args.columnObject.type == "boolean") {
                        var cellData = {};
                        cellData[args.columnObject.field] = args.value;
                        args.cell.empty().html($($.templates[this._id +"_JSONTemplate"].render(cellData))[0].cells[this._bulkEditCellDetails.columnIndex].innerHTML);
                    }
                    else
                        args.cell.empty().html(args.isForeignKey ? args.value.text : args.value);
                }
                var isValueModified = ((this._bulkEditCellDetails.cellEditType == "datepicker" || this._bulkEditCellDetails.cellEditType == "datetimepicker") && args.value instanceof Date && args.previousValue instanceof Date) ? (args.value.getTime() !== args.previousValue.getTime()) : (args.value !== args.previousValue);
                this.model.isEdit = false;
                if (isValueModified) {
                    this._enableSaveCancel();
                    args.cell.addClass("e-updatedtd e-icon e-gupdatenotify");
                    if (typeof args.rowData[this._bulkEditCellDetails["fieldName"]] == "string" && args.rowData[this._bulkEditCellDetails["fieldName"]].length)
                        args.rowData[this._bulkEditCellDetails["fieldName"]] = args.isForeignKey ? args.value.value.toString() : args.value.toString();
                    else
                        args.rowData[this._bulkEditCellDetails["fieldName"]] = args.isForeignKey ? (!isNaN(parseInt(args.value.value)) ? parseInt(args.value.value) : args.value.value) : args.value;
                    if ($.inArray(args.rowData, this._batchChanges.changed) == -1 && $.inArray(args.rowData, this._batchChanges.added) == -1)
                        this._batchChanges.changed.push(args.rowData);
                }
                $targetTR.removeClass("e-editedrow");
                args.cell.removeClass("e-editedbatchcell");
            }
        },
        _enableSaveCancel: function () {
            if (this.model.toolbarSettings.showToolbar) {
                $toolBar = this.element.find("#" + this._id + "_toolbarItems");
                $toolBar.ejToolbar("enableItemByID", this._id + "_update");
                $toolBar.ejToolbar("enableItemByID", this._id + "_cancel");
            }
        },

        setCellValue: function (index, fieldName, cellValue) {
            var data = this.getDataByIndex(index), tr = this.getRows()[index], dataIndex
                , columnIndex = this.getColumnIndexByField(fieldName);
            data[fieldName] = cellValue;
            if ($(tr).hasClass("e-insertedrow"))
                tr.cells[columnIndex + this.model.groupSettings.groupedColumns.length].innerHTML = cellValue;
            else {
                $.inArray(data, this._batchChanges.changed) == -1 && this._batchChanges.changed.push(data);
                tr.cells[columnIndex].innerHTML = cellValue;
            }
            this._enableSaveCancel();
        },
        setDefaultData: function (defaultData) {
            if (ej.isNullOrUndefined(defaultData)) {
                var fieldNames = this.getColumnFieldNames();
                defaultData = $.extend(true, {}, this._bulkEditCellDetails._data[0]);
                for (var field in defaultData) {
                    var index = $.inArray(field, fieldNames);
                    index == -1 && delete defaultData[field];
                    if (defaultData.hasOwnProperty(field)) {
                        if (!ej.isNullOrUndefined(this.model.columns[index]["defaultValue"])) {
                            defaultData[field] = this.model.columns[index]["defaultValue"];
                        }
                        else {
                            switch (typeof defaultData[field]) {
                                case "number":
                                    defaultData[field] = 0;
                                    break;
                                case "string":
                                    defaultData[field] = "";
                                    break;
                                case "boolean":
                                    defaultData[field] = false;
                                    break;
                                case "object":
                                    if ($.isArray(defaultData[field]))
                                        defaultData[field] = new Array();
                                    else
                                        defaultData[field] = "";
                            }
                        }
                    }
                }
            }
            this._bulkEditCellDetails.defaultData = defaultData;
        },
        _bulkDelete: function (index) {
            if (ej.isNullOrUndefined(index))
                index = this._selectedRow();
		    if (index == -1) {
                alert(this._getLocalizedLabels("DeleteOperationAlert"));
                return;
            }
            var tr = this.getRows()[index], $tr = $(tr), data = this.getDataByIndex(index), args = {};
            args = {
                primaryKey: this._primaryKeys,
                rowIndex: index,
                rowData: data,
                row: $tr
            };
            if (this._trigger("beforeBatchDelete", args))
                return;
            if ($tr.hasClass("e-insertedrow")) {
                $tr.remove();
                index = $.inArray(tr, this._bulkEditCellDetails.insertedTrCollection);
                if (index != -1) {
                    this._bulkEditCellDetails.insertedTrCollection.splice(index, 1);
                    this._batchChanges.added.splice(index, 1);
                }
            }
            else {
                $tr.hide();
                this._batchChanges.deleted.push(data);
            }
            this._enableSaveCancel();
            this._selectedRow(-1);
            args = {};
            this._trigger("batchDelete", args);
        },
        _bulkAddRow: function (defaultData) {
            var args = {}, $tr, editCellIndex, rows = this.getRows();
            if (!ej.isNullOrUndefined(defaultData))
                this._bulkEditCellDetails.defaultData = defaultData;
            ej.isNullOrUndefined(this._bulkEditCellDetails.defaultData) && this.setDefaultData();
            args = {
                defaultData: $.extend(true, {}, this._bulkEditCellDetails.defaultData),
                primaryKey: this._primaryKeys,
            };
            if (this._trigger("beforeBatchAdd", args))
                return;
            $tr = $($.render[this._id + "_JSONTemplate"](args.defaultData)).addClass("e-insertedrow");
            rows != null && $(rows[0]).hasClass("e-alt_row") && $tr.removeClass("e-alt_row");
			if (this._gridRecordsCount === 0)
                this.getContentTable().find("tbody .emptyrecord").first().remove();
            this.getContentTable().find("tbody").first().prepend($tr);
            this._gridRows = this.getContentTable().find("td.e-rowcell").closest("tr").toArray();
            for (var i = 0; i < this.model.groupSettings.groupedColumns.length; i++)
                $tr.prepend(ej.buildTag("td.e-indentcell"));
            this._bulkEditCellDetails.insertedTrCollection.push($tr.get(0));
            this._batchChanges.added.push(args.defaultData);
            this._enableSaveCancel();
            editCellIndex = this._findNextEditableCell(0);
            this.selectRows(0);
            this.editCell(0, this.model.columns[editCellIndex].field);
            $tr.find(".e-rowcell").addClass("e-updatedtd e-icon e-gupdatenotify");
            args = { defaultData: args.defaultData };
            $.extend(args, {
                columnObject: this.model.columns[editCellIndex],
                columnIndex: editCellIndex,
                row: $tr,
                primaryKey: this._primaryKeys,
                cell: $($tr[0].cells[editCellIndex])
            });
            this._trigger("batchAdd", args);
        },
        getDataByIndex: function (rowIndex) {
            var $tr = $(this.getRows()[rowIndex]), insertedRowIndex, currentRowData, index;
            if ($tr.hasClass("e-insertedrow")) {
                insertedRowIndex = $.inArray($tr[0], this._bulkEditCellDetails.insertedTrCollection);
                return this._batchChanges.added[insertedRowIndex];
            }
            else
                return this._bulkEditCellDetails._data[rowIndex - this._bulkEditCellDetails.insertedTrCollection.length];

        },
        /**
         * It is used to refresh and reset the changes made in "batch" edit mode
         * @alias ejGrid#refreshBatchEditChanges
         * @return jQuery
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * gridObj.refreshBatchEditChanges(); 
         * // It is used to refresh and reset the changes made in batch edit mode
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // It is used to refresh and reset the changes made in batch edit mode
         * $("#Grid").ejGrid("refreshBatchEditChanges");
         * &lt;/script&gt;
         */
        refreshBatchEditChanges: function () {
            this._bulkEditCellDetails = {
                cellValue: null,
                rowIndex: -1,
                _data: null,
                columnIndex: -1,
                fieldName: null,
                cellEditType: "",
                cancelSave: false,
                defaultData: null,
                insertedTrCollection: [],
                rowData: null,
                isForeignKey: false
            };
            this._batchChanges = {
                added: [],
                deleted: [],
                changed: []
            };
        },
        refreshBatchEditMode: function () {
            if (this.model.editSettings.editMode == "batch") {
                this.refreshBatchEditChanges();
                this._bulkEditCellDetails._data = $.extend(true, [], this.getCurrentViewData());
            }
        },
        /**
         * It is used to cancel the modified changes in grid control when edit mode is "Batch".
         * @alias ejGrid#batchCancel
         * @return jQuery
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * gridObj.batchCancel();
         * // Cancel added, edited, and deleted changes made in grid
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Cancel added, edited, and deleted changes made in grid
         * $("#Grid").ejGrid("batchCancel");
         * &lt;/script&gt;
         */
        batchCancel: function () {
            this.cancelEdit();
        },
        /**
		 * It is used to save the modified changes to data source in grid control when edit mode is "Batch".
         * @alias ejGrid#batchSave
		 * @return jQuery
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Save added, edited, and deleted changes to source of data
		 * gridObj.batchSave(); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Save added, edited, and deleted changes to source of data
		 * $("#Grid").ejGrid("batchSave");
		 * &lt;/script&gt;
         */
        batchSave: function () {
            var args = {}, deferedObject, gridObject = this;
            this.saveCell();
            args["batchChanges"] = this.getBatchChanges();
            if (this._trigger("beforeBatchSave", args))
                return;
            args = {};
            args.requestType = "batchsave";
            var deferedObject = this._dataManager.saveChanges(this.getBatchChanges(), this._primaryKeys[0], this.model.query._fromTable);
            if (this._dataManager instanceof ej.DataManager && !this._dataManager.dataSource.offline) {
                deferedObject.done(function (e) {
                    gridObject._processBindings(args);
                });
            }
            else
                this._processBindings(args);

        },
        /**
         * It is used to get the batch changes of edit, delete and add operations of grid control.
         * @alias ejGrid#getBatchChanges
         * @return jQuery
         * @example
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Gets the edit, delete, and add changes of a grid
         * gridObj.getBatchChanges(); 
         * &lt;/script&gt;
         * @example
         * &lt;script&gt;
         * // Gets the edit, delete, and add changes of a grid
         * $("#Grid").ejGrid("getBatchChanges");        
         * &lt;/script&gt;
         */
        getBatchChanges: function () {
            return this._batchChanges;
        },
        /**
         * It is used to edit a particular cell based on the row index and field name provided in "batch" edit mode.
         * @alias ejGrid#editCell
         * @return jQuery
         * @param { number } index Pass row index to edit particular cell
         * @param { string } fieldName Pass the field name of the column to perform batch edit 
         * @example
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Edit particular cell based on row index and column field name
         * gridObj.editCell(2, "OrderID"); 
         * &lt;/script&gt;
         * @example
         * &lt;script&gt;
         * // Edit particular cell based on row index and column field name
         * $("#Grid").ejGrid("editCell", 2, "OrderID");
         * &lt;/script&gt;
         */
        editCell: function (index, fieldName) {
            var $form = $("#" + this._id + "EditForm");
            this.model.isEdit && this.saveCell();
            if ($.isFunction($.validator) && $form.length && $form.validate().errorList.length)
                return;
            var $targetTR = $(this.getRows()[index]), columnIndex = this.getColumnIndexByField(fieldName), $targetTd = $targetTR.find(".e-rowcell").eq(columnIndex), column = this.model.columns[columnIndex], rowData = this.getDataByIndex(index);
            var args = {
                validationRules: ej.isNullOrUndefined(column.validationRules) ? {} : $.extend(true, {}, column.validationRules),
                columnName: column.field,
                value: rowData[fieldName],
                rowData: rowData,
                primaryKey: this._primaryKeys,
                columnObject: column,
                cell: $targetTd,
                isForeignKey: !ej.isNullOrUndefined(column.foreignKeyValue) && this.model.editSettings.editMode == "batch" ? true : false,
            }, isEditable = true;
            if (this._trigger("cellEdit", args))
                return;
            if ($.inArray(fieldName, this._primaryKeys) != -1 || args.columnObject.allowEditing === false || args.columnObject.template || args.columnObject.isUnbound) {
                $.extend(this._bulkEditCellDetails, {
                    cellValue: args.value,
                    rowIndex: index,
                    fieldName: fieldName,
                    rowData: args.rowData,
                    columnIndex: columnIndex,
                    isForeignKey: ej.isNullOrUndefined(args.columnObject.foreignKeyValue) ? false : true
                });
                isEditable = false;
            }
            if ($targetTR.hasClass("e-insertedrow") && (!args.columnObject.template && !args.columnObject.isUnbound))
                isEditable = true;
            if (isEditable) {
                $.extend(this._bulkEditCellDetails, {
                    rowIndex: index,
                    cellValue: args.value,
                    columnIndex: columnIndex,
                    fieldName: fieldName,
                    cellEditType: args.columnObject.editType,
                    rowData: rowData,
                    isForeignKey: ej.isNullOrUndefined(args.columnObject.foreignKeyValue) ? false : true
                });
                this._renderBulkEditObject(args, $targetTd);
                $targetTR.addClass("e-editedrow");
                args.cell.addClass("e-editedbatchcell");
            }
        },
        _findNextEditableCell: function (columnIndex) {
            var endIndex = this.model.columns.length;
            for (var i = columnIndex; i < endIndex; i++) {
                if (!this.model.columns[i].template && !this.model.columns[i].isUnbound)
                    return i;
            }
            return -1;
        },
        _findNextCell: function (columnIndex, direction) {
            var splittedColumn, visibleColumns = [], predicate, rows = this.getRows();
            predicate = ej.Predicate("visible", "equal", true).and("template", "notequal", true);
            if (!$(rows[this._bulkEditCellDetails.rowIndex]).hasClass("e-insertedrow"))
                predicate = predicate.and("allowEditing", "notequal", false);
            splittedColumn = direction == "right" ? this.model.columns.slice(columnIndex) : this.model.columns.slice(0, columnIndex + 1).reverse();
            visibleColumns = ej.DataManager(splittedColumn).executeLocal(ej.Query().where(predicate));
            if (visibleColumns.length == 0 && (!(direction == "left" && this._bulkEditCellDetails.rowIndex == 0) && !(direction == "right" && this._bulkEditCellDetails.rowIndex + 1 == this.getRows().length))) {
                splittedColumn = direction == "right" ? this.model.columns.slice(0, columnIndex) : this.model.columns.slice(columnIndex).reverse();
                visibleColumns = ej.DataManager(splittedColumn).executeLocal(ej.Query().where(predicate));
                this._bulkEditCellDetails.rowIndex = visibleColumns.length && direction == "right" ? this._bulkEditCellDetails.rowIndex + 1 : this._bulkEditCellDetails.rowIndex - 1;
            }
            return visibleColumns.length ? $.inArray(visibleColumns[0], this.model.columns) : -1;
        },
        _moveCurrentCell: function (direction) {
            var editCellIndex, rowIndex = this._bulkEditCellDetails.rowIndex, currentRow, $form = $("#" + this._id + "EditForm");
            if (this._bulkEditCellDetails.rowIndex == -1 && this._bulkEditCellDetails.columnIndex == -1)
                return true;
            switch (direction) {
                case "right":
                    if ((this._bulkEditCellDetails.rowIndex == this.getRows().length - 1 && this._bulkEditCellDetails.columnIndex == this.model.columns.length - 1) || (!this.element.is(document.activeElement) && $form.length == 0))
                        return true;
                    if (this._bulkEditCellDetails.columnIndex == this.model.columns.length - 1) {
                        editCellIndex = 0;
                        this._bulkEditCellDetails.rowIndex = this._bulkEditCellDetails.rowIndex + 1;
                    }
                    else
                        editCellIndex = this._bulkEditCellDetails.columnIndex + 1;
                    if (this.model.columns[editCellIndex].template === true || this.model.columns[editCellIndex].visible === false || this.model.columns[editCellIndex].allowEditing === false)
                        editCellIndex = this._findNextCell(editCellIndex, direction);
                    this._bulkEditCellDetails.rowIndex != rowIndex && this.selectRows(this._bulkEditCellDetails.rowIndex);
                    editCellIndex != -1 && this.editCell(this._bulkEditCellDetails.rowIndex, this.model.columns[editCellIndex].field);
                    break;
                case "left":
                    if ((this._bulkEditCellDetails.rowIndex == 0 && this._bulkEditCellDetails.columnIndex == 0) || (!this.element.is(document.activeElement) && $form.length == 0))
                        return true;
                    if (this._bulkEditCellDetails.columnIndex == 0) {
                        editCellIndex = this.model.columns.length - 1;
                        this._bulkEditCellDetails.rowIndex = this._bulkEditCellDetails.rowIndex - 1;
                        this.selectRows(this._bulkEditCellDetails.rowIndex);
                    }
                    else
                        editCellIndex = this._bulkEditCellDetails.columnIndex - 1;
                    if (this.model.columns[editCellIndex].template === true || this.model.columns[editCellIndex].visible === false || this.model.columns[editCellIndex].allowEditing === false)
                        editCellIndex = this._findNextCell(editCellIndex, direction);
                    this._bulkEditCellDetails.rowIndex != rowIndex && this.selectRows(this._bulkEditCellDetails.rowIndex);
                    editCellIndex != -1 && this.editCell(this._bulkEditCellDetails.rowIndex, this.model.columns[editCellIndex].field);
                    break;
                case "up":
                    if (this._bulkEditCellDetails.rowIndex == 0)
                        return;
                    editCellIndex = this._bulkEditCellDetails.columnIndex;
                    this.selectRows(this._bulkEditCellDetails.rowIndex - 1);
                    this.editCell(this._bulkEditCellDetails.rowIndex - 1, this.model.columns[this._bulkEditCellDetails.columnIndex].field);
                    break;
                case "down":
                    if (this._bulkEditCellDetails.rowIndex == this.getRows().length - 1)
                        return;
                    editCellIndex = this._bulkEditCellDetails.columnIndex;
                    this.selectRows(this._bulkEditCellDetails.rowIndex + 1);
                    this.editCell(this._bulkEditCellDetails.rowIndex + 1, this.model.columns[this._bulkEditCellDetails.columnIndex].field);
                    break;

            }
            addedRow = !$(this.getRows()[this._bulkEditCellDetails.rowIndex]).hasClass("e-insertedrow");
            if (editCellIndex != -1 && (this.model.columns[editCellIndex].isUnbound || (this.model.columns[editCellIndex].isPrimaryKey && addedRow) || this.model.columns[editCellIndex].template))
                this.element.focus();
            return false;
        },
        _renderBulkEditObject: function (cellEditArgs, $td) {
            var $form = ej.buildTag("form", "", {}, { id: this._id + "EditForm" }), $bulkEditTemplate = this._bulkEditTemplate, mappingName = this._id + cellEditArgs.columnObject.field, $element, htmlString, cellData = {};
            cellData[cellEditArgs.columnObject.field] = cellEditArgs.value;
            $td.empty();
            htmlString = $bulkEditTemplate.find("#" + cellEditArgs.columnObject.field + "_BulkEdit").html();
            $element = $($.templates(htmlString).render(cellData));
            if ($element.get(0).tagName == "SELECT") {
                $element.val(cellData[cellEditArgs.columnObject.field]);
                $element.val() == null && $element.val($element.find("option").first().val());
            }
            $form.append($element);
            $td.append($form);
            this._setoffsetWidth();
            this._refreshEditForm();
            if ($.isFunction($.validator) && !$.isEmptyObject(cellEditArgs.validationRules)) {
                this._initValidator();
                this.setValidationToField(cellEditArgs.columnObject.field, cellEditArgs.validationRules);
            }
            this.model.isEdit = true;
        },
        _triggerConfirm: function (args) {
            if (args !== undefined && document.activeElement.value == this._getLocalizedLabels("OkButton")) {
                if (this._confirmDialog.find(".e-content").text() == this._getLocalizedLabels("BatchSaveConfirm"))
                    this.batchSave();
                else {
                    this._confirmedValue = true;
                    this._processBindings(this._requestArgs);
                }
            }
            else {
                if (this._confirmDialog.find(".e-content").text() != this._getLocalizedLabels("BatchSaveConfirm")) {
                    switch (this._requestArgs.requestType) {
                        case "grouping":
                            this.model.groupSettings.groupedColumns.pop();
                            break;
                        case "ungrouping":
                            this.model.groupSettings.groupedColumns.push(this._requestArgs.columnName);
                            break;
                        case "sorting":
                            this._cSortedDirection = this._cSortedColumn = null;
                            break
                        case "filtering":
                            this.model.filterSettings.filteredColumns.reverse().splice(0, this._requestArgs.currentFilterObject);
                            this.model.filterSettings.filteredColumns.reverse();
                            break;
                        case "paging":
                            this._currentPage(this._requestArgs.previousPage);
                            this.getPager().ejPager("model.currentPage", this._requestArgs.previousPage);
                            break

                    }
                }
                this._confirmedValue = false;
            }
            this._requestArgs = null;
            this._confirmDialog.ejDialog("close");
        },
        _saveCellHandler: function (e) {
            var $target = $(e.target);
            e.stopPropagation();
            if ($target.closest(".e-popup").length == 0 && $target.closest(".e-rowcell").find("#" + this._id + "EditForm").length == 0)
                this.saveCell();
        },
        _initValidator: function () {
            var gridObject = this, elements = this.model.scrollSettings.frozenColumns > 0 ? this.element.find(".gridform") : $("#" + this._id + "EditForm");
            for (var i = 0; i < elements.length ; i++) {
                elements.eq(i).validate({
                    errorClass: 'e-field-validation-error',
                    errorElement: 'div',
                    wrapper: "div",
                    errorPlacement: function (error, element) {
                        var $td = element.closest("td"), $container = $(error).addClass("e-error")
                        , $tail = ej.buildTag("div.e-errortail e-toparrow"), $container;
                        $td.find(".e-error").remove();
                        if (element.parent().hasClass("e-in-wrap"))
                            $container.insertAfter(element.closest(".e-widget"));
                        else
                            $container.insertAfter(element);
                        $container.prepend($tail)
                        gridObject.model.editSettings.editMode != "dialog" && $container.offset({ left: element.offset().left, top: element.offset().top + element.height() });     
                        $container.fadeIn("slow");
                    },

                });
            }
        },
        setValidation: function () {
            this._initValidator();
            for (var i = 0; i < this.model.columns.length; i++) {
                if (!ej.isNullOrUndefined(this.model.columns[i]["validationRules"])) {
                    this.setValidationToField(this.model.columns[i].field, this.model.columns[i].validationRules);
                }
            }
        },
        /**
		 * It is used to set validation to a field during editing.
         * @alias ejGrid#setValidationToField
		 * @return jQuery
		 * @param {string} fieldName Specify the field name of the column to set validation rules
		 * @param {object} rules Specify the validation rules for the field
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
		 * // It is used to set validation to a field during editing
		 * gridObj.setValidationToField("OrderID", { required: true }); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // It is used to set validation to a field during editing
		 * $("#Grid").ejGrid("setValidationToField", "OrderID", { required: true });
		 * &lt;/script&gt;
         */
        setValidationToField: function (name, rules) {
            var ele = $("#" + this._id + name).length > 0 ? $("#" + this._id + name) : $("#" + name);
            ele.rules("add", rules);
            var validator = $("#" + this._id + "EditForm").validate();
            if (!ej.isNullOrUndefined(rules["required"])) {
                validator.settings.messages[name] = {};
                validator.settings.messages[name]["required"] = this.getColumnByField(name).headerText + " is required";
            }
        },
        _renderConfirmDialog: function () {
            var $contentDiv = ej.buildTag('div.e-content', this._getLocalizedLabels("BatchSaveConfirm"))
            , $buttons = ej.buildTag('span.e-buttons', "<input type='button' id=" + this._id + 'ConfirmDialogOK' + " value='" + this._getLocalizedLabels("OkButton") + "' /> "
                + "<input type='button' id=" + this._id + 'ConfirmDialogCancel' + " value='" + this._getLocalizedLabels("CancelButton") + "' />");

            this._confirmDialog = ej.buildTag('div#' + this._id + 'ConfirmDialog');
            this._confirmDialog.append($contentDiv).append($buttons);
            this.element.append(this._confirmDialog);
            $buttons.find("input").ejButton({
                cssClass: this.model.cssClass,
                showRoundedCorner: true,
                size: "mini",
                click: $.proxy(this._triggerConfirm, this)
            });
            this._renderFDialog(this._id + 'ConfirmDialog');
            this._confirmDialog.ejDialog({ width: "auto", enableModal: true });
        },
        _unboundClickHandler: function (e) {
            var $target = $(e.target);
            if ($target.hasClass("e-unboundcelldiv"))
                return;
            if ($target.hasClass("e-cancelbutton"))
                this.model.isEdit = false;
            this.model.allowSelection && this.selectRows(this.getIndexByRow($target.closest("tr")));
            $.isFunction($.fn.ejDatePicker) && $("#" + this._id + "EditForm").find(".e-datepicker").ejDatePicker("hide");
            if ($target.hasClass("e-editbutton")) {
                var index = this.getIndexByRow($target.closest("tr"));
                if (this.model.isEdit)
                    this.cancelEdit();
                var $tr = this.getRowByIndex(index);
                this.startEdit($tr);
            } else if ($target.hasClass("e-deletebutton")) {
                var index = this.getIndexByRow($target.closest("tr"));
                var $tr = this.getRowByIndex(index);
                this._deleteRow($tr);
            }
            else if ($target.hasClass("e-savebutton"))
                this.endEdit();
            else if ($target.hasClass("e-cancelbutton"))
                this.cancelEdit();
        },
          /**
         * It is used to send an add new request in grid control.
         * @alias ejGrid# addRecord
         * @return jQuery
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Sends an add new record request to the grid
         * gridObj.addRecord(); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // add new record to the grid
         * $("#Editing").ejGrid("addRecord",{OrderID:12333})       
         * &lt;/script&gt;
         */
        addRecord: function (data,serverChange) {
            if (data) {
                if (!serverChange) {
                    this._dataManager.insert(data);
                    this.getContentTable().prepend($.render[this._id + "_JSONTemplate"](data));
                    if (this.model.allowPaging && this.getPager() != null) {
                        var model = this.getPager().ejPager("model");
                        model.totalRecordsCount++;
                        this.getRowByIndex(model.pageSize - 1).remove();
                        this.getPager().ejPager("refreshPager");
                    }
                } else {
                    var args = { data: data };
                    args.action = "add";
                    args.selectedRow = this._selectedRow();
                    this._cAddedRecord = data;
                    args.requestType = ej.Grid.Actions.Save;
                    this._updateAction(args);
                }
            } else
                this._startAdd();
        },
        /**
         * It is used to update a edited record in grid control even allowEditing is set as false.
         * @alias ejGrid#updateRecord
         * @return jQuery
         * @param {string} fieldName Pass the primary key field Name of the column
         * @param {array} data Pass the edited json data of record need to be update.
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Sends a update record request to the grid
         * gridObj.updateRecord("OrderID", { OrderID: 10249, EmployeeID: 3 }); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Sends a update record request to the grid
         * $("#Grid").ejGrid("updateRecord", "OrderID", { OrderID: 10249, EmployeeID: 3 });        
         * &lt;/script&gt;
         */
        updateRecord: function (keyField, data, action) {
            this._updateDeleteRecord(keyField, data, "update");
        },
        _updateDeleteRecord: function (keyField, data, action) {
            var dataMgr = ej.DataManager(this._currentJsonData), dataFilter, index, $row, $newrow;
            dataFilter = dataMgr.executeLocal(ej.Query().where(keyField, ej.FilterOperators.equal, data[keyField]));
            if (dataFilter.length) {
                index = $.inArray(dataFilter[0], this._currentJsonData);
                if (index != -1) {
                    $row = this.getRowByIndex(index);
                    if (action == "update") {
                        $newrow = $($.render[this._id + "_JSONTemplate"](data));
                        $row.replaceWith($newrow);
                        !$row.hasClass("e-alt_row") && $newrow.removeClass("e-alt_row");
                    }
                    else {
                        this._deleteRow($row);
                    }
                }
            }
            this._dataManager[action](keyField, data);
        },
        /**
         * It is used to delete a record in grid control even allowDeleting is set as false.
         * @alias ejGrid#deleteRecord
         * @return jQuery
         * @param {string} fieldName Pass the primary key field Name of the column
         * @param {array} data Pass the json data of record need to be delete.
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Sends a delete record request to the grid
         * gridObj.deleteRecord("OrderID", { OrderID: 10249, EmployeeID: 3 }); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Sends a delete record request to the grid
         * $("#Grid").ejGrid("deleteRecord", "OrderID", { OrderID: 10249, EmployeeID: 3 });        
         * &lt;/script&gt;
         */
        deleteRecord: function (keyField, data) {
            this._updateDeleteRecord(keyField, data, "remove");
        },
    };
})(jQuery, Syncfusion);;
(function ($, ej, undefined) {
    ej.gridFeatures = ej.gridFeatures || {};
    ej.gridFeatures.sort = {
        _addSortElementToColumn: function (field, direction) {
            var column = this.getColumnByField(field), imageDirection;
            var index = $.inArray(column, this.model.columns);
            var $headerCellDiv = this.getHeaderTable().find("thead").find(".e-headercell").not(".e-detailheadercell").eq(index).find(".e-headercelldiv");
            $headerCellDiv.find(".e-ascending,.e-descending").remove();
            imageDirection = direction == "ascending" ? "e-rarrowup-2x" : "e-rarrowdown-2x";
            $headerCellDiv.append(this._createSortElement().addClass("e-" + direction + " " + imageDirection));
            $headerCellDiv.parent().attr("aria-sort", direction);

        },
        _removeSortElementFromColumn: function (field) {
            var column = this.getColumnByField(field);
            var index = $.inArray(column, this.model.columns);
            var $headerCellDiv = this.getHeaderTable().find("thead").find(".e-headercell").not(".e-detailheadercell").eq(index).find(".e-headercelldiv");
            $headerCellDiv.find(".e-ascending,.e-descending").remove();
            $headerCellDiv.parent().removeAttr("aria-sort");
        },
        _sortCompleteAction: function (args) {
            var imageDirection;
            this.getHeaderTable().find(".e-columnheader").find(".e-headercelldiv")
                    .find(".e-ascending,.e-descending").remove();
            this.getHeaderTable().find("[aria-sort]").removeAttr("aria-sort");
            for (var i = 0; i < this.model.sortSettings.sortedColumns.length; i++)
                this._addSortElementToColumn(this.model.sortSettings.sortedColumns[i].field, this.model.sortSettings.sortedColumns[i].direction);
            if (this.model.groupSettings.groupedColumns.length && this._$curSElementTarget != null) {
                var $element = this._checkEinGroupDrop($.trim(this._$curSElementTarget.text()));
                if (!ej.isNullOrUndefined($element)) {
                    imageDirection = args.columnSortDirection == "ascending" ? "e-rarrowup-2x" : "e-rarrowdown-2x";
                    $element.find(".e-ascending,.e-descending").removeClass().addClass("e-icon e-" + args.columnSortDirection + " " + imageDirection);
                }
            }
            this.multiSortRequest = false;
        },
        /**
         * It is used to remove a column or collection of columns from a sorted column collections in grid control.
         * @alias ejGrid#removeSortedColumns
         * @return jQuery
         * @param {array/string} fieldName Pass array of field names of the columns to remove a collection of sorted columns or pass a string of field name to remove a column from sorted column collections
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Removes a column from sorted column collections
         * gridObj.removeSortedColumns("OrderID"); 
         * // Removes specified collection of columns from sorted column collections
         * gridObj.removeSortedColumns(["CustomerID", "ShipCity"]); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Removes a column from sorted column collections
         * $("#Grid").ejGrid("removeSortedColumns", "OrderID");        
         * // Removes specified collection of columns from sorted column collections
         * $("#Grid").ejGrid("removeSortedColumns", ["CustomerID", "ShipCity"]);        
         * &lt;/script&gt;
         */
        removeSortedColumns: function (fieldName) {
            if ($.isArray(fieldName)) {
                for (var i = 0; i < fieldName.length; i++) {
                    this._removeSortedColumnFromCollection(fieldName[i]);
                }
            }
            else
                this._removeSortedColumnFromCollection(fieldName);
            this.multiSortRequest = true;
            this.sortColumn(null, null);
        },
        _removeSortedColumnFromCollection: function (fieldName) {
            for (var i = 0; i < this.model.sortSettings.sortedColumns.length; i++) {
                if (this.model.sortSettings.sortedColumns[i].field == fieldName) {
                    this.model.sortSettings.sortedColumns.splice(i, 1);
                    break;
                }
            }
        },
        /**
		 * It is used to clear the sorting from columns in the grid
         * @alias ejGrid#clearSorting
		 * @return jQuery
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Clears the sorting from columns in the grid
		 * gridObj.clearSorting(); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Clears the sorting from columns in the grid
		 * $("#Grid").ejGrid("clearSorting");        
		 * &lt;/script&gt;
         */
        clearSorting: function () {
            var proxy = this;
            this.model.sortSettings.sortedColumns = $.grep(this.model.sortSettings.sortedColumns, function (value, index) {
                if ($.inArray(value.field, proxy.model.groupSettings.groupedColumns) != -1)
                    return true;
                return false;
            });
            this._$prevSElementTarget = null;
            this._$curSElementTarget = null;
            this.refreshContent();
        },
        /**
         * It is used to send a sorting request in grid control.
         * @alias ejGrid#sortColumn
         * @return jQuery
         * @param {string} columnName Pass the field name of the column as columnName for which sorting have to be performed
         * @param {string} [sortingDirection] Pass the sort direction ascending/descending by which the column have to be sort. By default it is sorting in an ascending order
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * gridObj.sortColumn("OrderID", "ascending"); // Sends a sorting request to the grid with specified columnName and sortDirection
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Sends a sorting request to the grid with specified columnName and sortDirection
         * $("#Grid").ejGrid("sortColumn", "OrderID", "ascending");        
         * &lt;/script&gt;
         */
        sortColumn: function (columnName, columnSortDirection) {
            if (!this.model.allowSorting || $.inArray(columnName, this._disabledSortableColumns) != -1 || (columnName != null && columnName.length == 0))
                return;
            var args = {};
            if (!this.multiSortRequest) {
                var proxy = this;
                this.model.sortSettings.sortedColumns = $.grep(this.model.sortSettings.sortedColumns, function (value, index) {
                    if ($.inArray(value.field, proxy.model.groupSettings.groupedColumns) != -1)
                        return true;
                    return false;
                });
            }
            args.requestType = ej.Grid.Actions.Sorting;
            this._cSortedColumn = args.columnName = columnName;
            this._cSortedDirection = args.columnSortDirection = columnSortDirection === undefined ? ej.sortOrder.Ascending : columnSortDirection;
            if (this._cSortedColumn !== null) {
                this._removeSortedColumnFromCollection(columnName);
                this.model.sortSettings.sortedColumns.push({ field: this._cSortedColumn, direction: this._cSortedDirection });
            }
            var returnValue = this._processBindings(args);
            if (returnValue)
                this._cSortedDirection = this._cSortedColumn = null;
            this._primaryKeyValues = [];
        },
        _createSortElement: function () {
            return ej.buildTag('span.e-icon', "&nbsp;");
        },
        _renderMultiTouchDialog: function () {
            this._customPop = ej.buildTag("div.e-gridpopup", "", { display: "none" });
            var $content = ej.buildTag("div.e-content"), $downTail = ej.buildTag("div.e-downtail e-tail");
            if (this.model.allowMultiSorting) {
                var $selElement = ej.buildTag("span.e-sortdirect e-icon");
                $content.append($selElement);
            }
            if (this.model.selectionType == "multiple") {
                var $selElement = ej.buildTag("span.e-rowselect e-icon");
                $content.append($selElement);
            }
            this._customPop.append($content);
            this._customPop.append($downTail);
            this.element.append(this._customPop);
        },

    };
})(jQuery, Syncfusion);;
(function ($, ej, undefined) {
    ej.gridFeatures = ej.gridFeatures || {};
    ej.gridFeatures.filter = {
        /**
		 * It is used to get the filter bar of grid control.
         * @alias ejGrid#getFilterBar
		 * @return gridFilterBar
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Gets filter bar of grid control
		 * gridObj.getFilterBar(); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Gets filter bar of grid control
		 * $("#Grid").ejGrid("getFilterBar");        
		 * &lt;/script&gt;
         */
        getFilterBar: function () {
            return this._gridFilterBar;
        },

        setGridFilterBar: function (value) {
            this._gridFilterBar = value;
        },
        /**
		 * It is used to send a filtering request to grid control.
         * @alias ejGrid#filterColumn
		 * @return jQuery
		 * @param {string} fieldName Pass the field name of the column 
		 * @param {string} filterOperator string/integer/dateTime operator
		 * @param {string/number} filterValue Pass the value to be filtered in a column
		 * @param {string} predicate Pass the predicate as and/or
		 * @param {boolean} [matchcase] Pass the match case valueas true/false
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Sends a filtering request to the grid
		 * gridObj.filterColumn("OrderID","equal","10248","and", true);
		 * &lt;/script&gt;
         * @example
		 * &lt;script&gt;
		 * // Sends a filtering request to the grid
		 * $("#Grid").ejGrid("filterColumn","OrderID","equal","10248","and", true);
		 * &lt;/script&gt;
         */
        filterColumn: function (fieldName, filterOperator, filterValue, predicate, matchcase, actualFilterValue) {
            if (!this.model.allowFiltering)
                return;
            var args = {};
            args.requestType = ej.Grid.Actions.Filtering;
            args.currentFilterObject = [];
            if (!$.isArray(filterOperator))
                filterOperator = $.makeArray(filterOperator);
            if (!$.isArray(filterValue))
                filterValue = $.makeArray(filterValue);
            var firstLoop = false;
            var filterCol = this._filterCollection;
            if (ej.util.isNullOrUndefined(this._currentFilterColumn))
                this._currentFilterColumn = this.getColumnByField(fieldName);
            for (var index = 0; index < filterOperator.length; index++) {
                var filterObject = {
                    field: fieldName,
                    operator: filterOperator[index],
                    value: filterValue[index],
                    matchcase: matchcase,
                    predicate: predicate,
                    actualFilterValue: actualFilterValue
                };
                if (this.model.filterSettings.filterType == "filterbar")
                    this._$colType = this._currentFilterColumn.type;
                if (this.model.filterSettings.filteredColumns.length == 0 && filterObject.value !== "") {
                    if (this._$colType == "date" && (filterOperator == "equal" || filterOperator == "notequal") && typeof (filterObject.value) !== "string")
                        this._setDateFilters(filterObject);
                    else
                        this.model.filterSettings.filteredColumns.push(filterObject);
                } else {
                    var proxy = this;
                    if (!firstLoop) {
                        var dataManger = ej.DataManager(this.model.filterSettings.filteredColumns);
                        var query = new ej.Query().where("field", ej.FilterOperators.equal, filterObject.field);
                        var object = dataManger.executeLocal(query);
                        for (var i = 0; i < object.length; i++) {
                            var objectIndex = $.inArray(object[i], this.model.filterSettings.filteredColumns)
                            if (objectIndex != -1)
                                this.model.filterSettings.filteredColumns.splice(objectIndex, 1);
                        }
                    }
                    if (filterObject.value !== "") {
                        if (this._$colType == "date" && (filterOperator == "equal" || filterOperator == "notequal") && typeof (filterObject.value) !== "string")
                            this._setDateFilters(filterObject);
                        else
                            this.model.filterSettings.filteredColumns.push(filterObject);
                    }
                }
                firstLoop = true;
                args.currentFilterObject.push(filterObject);
            }
            args.filterCollection = this.model.filterSettings.filteredColumns;
            args.currentFilteringColumn = fieldName;
            var returnValue = this._processBindings(args);
            if (returnValue) {
                this.model.filterSettings.filteredColumns.reverse().splice(0, filterOperator.length);
                this.model.filterSettings.filteredColumns.reverse();
            }

        },
        /**
         * It is used to send a search request to grid with specified string passed in it.
         * @alias ejGrid#search
         * @return jQuery
         * @param {string} searchString Pass the string to search in Grid records
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Sends a search request to the grid
         * gridObj.search("France"); 
         * &lt;/script&gt;
         * @example
         * &lt;script&gt;
         * // Sends a search request to the grid
         * $("#Grid").ejGrid("search", "France");        
         * &lt;/script&gt;
         */
        search: function (searchString) {
            var args = {};
            args.requestType = ej.Grid.Actions.Search;
            args.keyValue = searchString;
            this._searchString = searchString;
            this._processBindings(args);
            this._primaryKeyValues = [];
        },
        _filterBarHandler: function (e) {
            var keycode = e.keyCode;
            if ((this.model.filterSettings["filterBarMode"] == "immediate" || keycode == 13) && keycode != 9) {
                var $target = $(e.target);
                this.filterStatusMsg = "";
                var fieldName = $target.prop("id").replace("_filterBarcell", "");
                var column = this.getColumnByField(fieldName);
                if (column == null)
                    return;
                this._currentFilterColumn = column;
                if (this._currentFilterColumn != this._oldFilterColumn)
                    this.filterValueOldLength = 0;
                this._currentFilterbarValue = $target.val();
                this.filterValueCurrentLength = this._currentFilterbarValue.length;
                if (((this.filterValueCurrentLength == 0 && this.filterValueOldLength == 0) || this._currentFilterbarValue == this.OldfilterValue) && this._currentFilterColumn == this._oldFilterColumn) {
                    this._showFilterMsg();
                    return;
                }
                this._skipFilterProcess = this._checkForSkipInput();
                if (!this._skipFilterProcess) {
                    this._processFilter();
                } else {
                    if (this._currentFilterColumn.type == "string") {
                        this.filterStatusMsg = "Invalid Filter Data";
                        this._showFilterMsg();
                    } else {
                        this._skipFilterProcess = false;
                        this._showFilterMsg();
                        return;
                    }
                }
            }
        },
        _renderFiltering: function () {
            var $headerTable = this.getHeaderTable();
            var $tr = ej.buildTag('tr.e-filterbar'), $trClone;
            if (this.model.detailsTemplate) $tr.append(ej.buildTag('th.e-filterbarcell e-mastercell'));
            for (var column = 0; column < this.model.columns.length; column++) {
                var $input = ej.buildTag('input.e-ejinputtext e-filtertext', "", {}, { title: this.model.columns[column]["field"] + "'s filterbar cell", type: "text", id: this.model.columns[column]["field"] + "_filterBarcell" });
                var $th = ej.buildTag('th.e-filterbarcell'), $div = ej.buildTag('div.e-filterdiv'), $span = ej.buildTag('span.e-cancel e-icon e-hide');
                if (this.model.columns[column]["allowFiltering"] === false) {
                    $input.attr("disabled", true).addClass("e-disable");
                    this._disabledFilterableColumns.push(this.model.columns[column]["headerText"]);
                }
                this.model.columns[column]["visible"] === false && $th.addClass("e-hide");
                $div.append($input).append($span);
                $tr.append($th.append($div));
                if (column == this.model.scrollSettings.frozenColumns - 1) {
                    $trClone = $tr.clone();
                    $headerTable.find("thead").first().append($trClone);
                    $tr.empty();
                }
            }
            $headerTable.find("thead").last().append($tr);
            this.setGridFilterBar($tr);
        },
        _closeFilterDlg: function () {
            $("#" + this._id + "_" + this._$colType + "Dlg").ejDialog("close");
            this._$fDlgIsOpen = false;
        },
        _filterBarClose: function (e) {
            var $target = $(e.target);
            if (e.type == "click" && $target.hasClass("e-cancel")) {
                var $targetText = $target.prev();
                $targetText.focus().val("");
                $targetText.trigger("keyup");
                e.stopPropagation();
            }
            if (e.type == "focusin" && $target.hasClass("e-filtertext")) {
                $target = $(e.target).next();
                this.getFilterBar().find(".e-cancel").addClass("e-hide");
                $target.removeClass("e-hide");
            }
        },
        _processFilter: function () {
            if (!this._alreadyFilterProcessed) {
                this._alreadyFilterProcessed = true;
                this._startTimer();
            } else {
                this._stopTimer();
                this._startTimer();
            }
        },
        _startTimer: function () {
            var proxy = this;
            this._timer = window.setTimeout(
                function () {
                    proxy._onTimerTick();
                },
                1500);
        },
        _stopTimer: function () {
            this._oldFilterColumn = this._currentFilterColumn;
            this.filterValueOldLength = this.filterValueCurrentLength;
            if (this._timer != null)
                window.clearTimeout(this._timer);
        },

        _onTimerTick: function () {
            this.OldfilterValue = this._currentFilterbarValue;
            this._findPredicate();
            var result = null;
            var matchcase = this._currentFilterColumn.type == "string" ? false : true;
            if (this._currentFilterColumn.foreignKeyValue && this._currentFilterColumn.dataSource && this._currentFilterbarValue != "")
                result = this._fltrForeignKeyValue(this._operator, this._currentFilterbarValue, matchcase,
                         this._currentFilterColumn.dataSource, this._currentFilterColumn.foreignKeyField,
                         this._currentFilterColumn.foreignKeyValue, this._currentFilterColumn.type);
            if (!this._skipFilterProcess) {
                if (ej.isNullOrUndefined(result))
                    this.filterColumn(this._currentFilterColumn.field, this._operator, this._currentFilterbarValue, this._predicate, matchcase);
                else
                    this.filterColumn(this._currentFilterColumn.field, result.operator, result.value, result.value.length > 1 ? "or" : this._predicate, matchcase, result.filterValue);
            }
            else
                this.filterStatusMsg = "Invalid Filter Data";
            this._showFilterMsg();
            this._stopTimer();
        },

        _findPredicate: function () {
            var _value = this._currentFilterbarValue.replace(/ && /i, " and ").replace(" || ", " or ");
            var _predicateFinder = _value.split(' ');
            this._predicate = "and";
            if (_predicateFinder.length != 0) {
                if ($.isFunction(ej.Predicate[_predicateFinder[1]])) {
                    this._skipFilterProcess = false;
                    this._predicate = _predicateFinder[1];
                    var valuesArray = _value.split(" " + _predicateFinder[1] + " ");
                    var tempOperator = [];
                    var filterValues = [];
                    for (var i = 0; i < valuesArray.length; i++) {
                        this._validateFilterValue(valuesArray[i]);
                        tempOperator.push(this._operator);
                        if (this._currentFilterColumn.type == "number")
                            filterValues.push(this._currentFilterbarValue);
                        else if (this._currentFilterColumn.type == "string")
                            filterValues.push(valuesArray[i]);
                    }
                    this._currentFilterbarValue = filterValues;
                    this._operator = tempOperator;
                } else
                    this._validateFilterValue($.trim(this._currentFilterbarValue));
            } else
                this._validateFilterValue($.trim(this._currentFilterbarValue));
        },

        _validateFilterValue: function (_value) {
            switch (this._currentFilterColumn.type) {
                case "number":
                    this._operator = ej.FilterOperators.equal;
                    var stringSkipInput = new Array(">", "<", "=", "!");
                    for (var i = 0; i < _value.length; i++) {
                        if (jQuery.inArray(_value[i], stringSkipInput) != -1) {
                            break;
                        }
                    }
                    if (i != _value.length) {
                        this._getOperator(_value.substring(i));
                        if (i != 0)
                            this._currentFilterbarValue = _value.substring(0, i);
                    }
                    if (this._currentFilterbarValue != "" && _value.length >= 1)
                        this._currentFilterbarValue = parseFloat(this._currentFilterbarValue);
                    else
                        this._currentFilterbarValue = _value.length > 1 ? parseFloat(_value) : _value;
                    break;
                case "date":
                    this._operator = ej.FilterOperators.equal;
                    this._getOperator(_value);
                    var _format;
                    if (this._currentFilterColumn.format == "")
                        _format = Globalize.culture().calendar.patterns.d; //System Date format
                    else
                        _format = this._currentFilterColumn.format.split(':')[1].replace('}', "");
                    if (this._currentFilterbarValue != "")
                        this._currentFilterbarValue = Globalize.parseDate(this._currentFilterbarValue, _format);
                    break;
                case "string":
                    this._operator = ej.FilterOperators.startsWith;
                    break;
                case "boolean":
                    if (this._currentFilterbarValue.toLowerCase() == "true" || this._currentFilterbarValue == "1")
                        this._currentFilterbarValue = true;
                    else if (this._currentFilterbarValue.toLowerCase() == "false" || this._currentFilterbarValue == "0")
                        this._currentFilterbarValue = false;
                    this._operator = ej.FilterOperators.equal;
                    break;
                default:
                    this._operator = ej.FilterOperators.equal;
            }
        },
        _getOperator: function (_value) {
            if (_value.charAt(0) == "=") {
                this._operator = ej.FilterOperators.equal;
                this._currentFilterbarValue = _value.substring(1);
            }
            if (ej.data.operatorSymbols[_value.charAt(0)] !== undefined || ej.data.operatorSymbols[_value.slice(0, 2)] !== undefined) {
                this._operator = ej.data.operatorSymbols[_value.charAt(0)];
                this._currentFilterbarValue = _value.substring(1);
                if (this._operator === undefined) {
                    this._operator = ej.data.operatorSymbols[_value.slice(0, 2)];
                    this._currentFilterbarValue = _value.substring(2);
                }
            }
            if (this._operator == ej.FilterOperators.lessThan || this._operator == ej.FilterOperators.greaterThan) {
                if (this._currentFilterbarValue.charAt(0) == "=") {
                    this._operator = this._operator + "orequal";
                    this._currentFilterbarValue = this._currentFilterbarValue.substring(1);
                }
            }

        },

        _checkForSkipInput: function () {
            var isSkip = false;
            var skipInput = new Array("=", " ", "!");
            var context = this;
            if (this._currentFilterColumn.type == "number") {
                if (ej.data.operatorSymbols[this._currentFilterbarValue] !== undefined || $.inArray(this._currentFilterbarValue, skipInput) != -1)
                    isSkip = true;
            }
            if (this._currentFilterColumn.type == "string") {
                var stringSkipInput = new Array(">", "<", "=", "!");
                for (var i = 0; i < this._currentFilterbarValue.length; i++) {
                    if ($.inArray(this._currentFilterbarValue[i], stringSkipInput) != -1)
                        isSkip = true;
                }
            }
            return isSkip;
        },
        _showFilterMsg: function () {
            var index = $.inArray(this._currentFilterColumn, this.filterColumnCollection);
            if (this._currentFilterbarValue !== "" && index == -1)
                this.filterColumnCollection.push(this._currentFilterColumn);
            if (this._currentFilterbarValue == "" && index != -1) {
                this.filterColumnCollection.splice(index, 1);
            }
            if ((!this._skipFilterProcess || this.filterColumnCollection.length > 0) && this.filterStatusMsg != "Invalid Filter Data") {
                for (var index = 0; index < this.filterColumnCollection.length; index++) {
                    if (index > 0)
                        this.filterStatusMsg += " && ";
                    this.filterStatusMsg += this.filterColumnCollection[index].headerText + ": " + $("#" + this.filterColumnCollection[index].field + "_filterBarcell").val();
                }
            }

            if (this.model.allowPaging)
                this.getPager().ejPager("model.externalMessage", this.filterStatusMsg);
            else {
                this.$pagerStatusBarDiv.find("div").html(this.filterStatusMsg);
                if (this.filterStatusMsg.length)
                    this.$pagerStatusBarDiv.css("display", "block");
                else
                    this.$pagerStatusBarDiv.hide();
            }
            if (this.filterStatusMsg == "Invalid Filter Data") {
                index = $.inArray(this._currentFilterColumn, this.filterColumnCollection);
                this.filterColumnCollection.splice(index, 1);
            }
            this.filterStatusMsg = "";
        },
        _renderFilterDialogs: function () {
            var $strDlg, $numDlg, $boolDlg, $dateDlg;

            $.each(this.model.columns, ej.proxy(function (indx, col) {
                if (col.type == "string" && !$strDlg) {
                    $strDlg = true;
                    this._renderStringDialog();
                } else if (col.type == "number" && !$numDlg) {
                    $numDlg = true;
                    this._renderNumDialog();
                } else if (col.type == "date" && !$dateDlg) {
                    $dateDlg = true;
                    this._renderDateDialog();
                } else if (col.type == "boolean" && !$boolDlg) {
                    $boolDlg = true;
                    this._renderBoolDialog();
                }
            }, this));
        },
        _renderStringDialog: function () {
            var $id = this._id + "_stringDlg";
            var $content = ej.buildTag("div#" + $id + ".e-dlgcontainer");
            $content.appendTo("body");
            this._renderFDialog($id);
            this._renderDlgContent($content, "string");

        },
        _renderBoolDialog: function () {
            var $id = this._id + "_booleanDlg";
            var $content = ej.buildTag("div#" + $id + ".e-dlgcontainer");
            $content.appendTo("body");
            this._renderFDialog($id);
            if (!this.model.filterSettings.showPredicate)
                $("#" + $id).ejDialog({ minHeight: 90 });
            else
                $("#" + $id).ejDialog({ minHeight: 136 });
            this._renderDlgContent($content, "boolean");
        },
        _renderNumDialog: function () {
            var $id = this._id + "_numberDlg";
            var $content = ej.buildTag("div#" + $id + ".e-dlgcontainer");
            $content.appendTo("body");
            this._renderFDialog($id);
            this._renderDlgContent($content, "number");

        },
        _renderDateDialog: function () {
            var $id = this._id + "_dateDlg";
            var $content = ej.buildTag("div#" + $id + ".e-dlgcontainer");
            $content.appendTo("body");
            this._renderFDialog($id);
            this._renderDlgContent($content, "date");

        },
        _renderFDialog: function (id) {
            $("#" + id).ejDialog({ showOnInit: false, "enableRTL": this.model.enableRTL, "cssClass": this.model.cssClass, "showHeader": false, width: 260, enableResize: false, allowKeyboardNavigation: false, content: "#" + this._id });
        },
        _renderDlgContent: function (content, type) {
            content.addClass("e-grid");
            var $predicate = ej.buildTag("div.e-predicate"), $operator = ej.buildTag("div.e-operator"), $value = ej.buildTag("div.e-value");
            var $strOp = this._getLocalizedLabels("StringMenuOptions");
            var $numOp = this._getLocalizedLabels("NumberMenuOptions");
            var $drdown = ej.buildTag("input#" + this._id + type + "_ddinput", {}, {}, { "type": "text" });
            var $drdownDiv = ej.buildTag("div#" + this._id + type + "_dropdown");
            var $drdownUl = ej.buildTag("ul");
            var $radio = ej.buildTag("input", {}, {}, { "type": "radio", "name": this._id + "_predicate" + type, "value": "or" });
            var $andRadio = ej.buildTag("input", {}, {}, { "type": "radio", "name": this._id + "_predicate" + type, "value": "and", "checked": "checked" });
            var $cbox;
            $predicate.append($andRadio)
                .append(ej.buildTag("span.e-caption").html(this._getLocalizedLabels("PredicateAnd")))
                .append($radio)
                .append(ej.buildTag("span.e-caption").html(this._getLocalizedLabels("PredicateOr")));
            !this.model.filterSettings.showPredicate && $predicate.hide();
            if (type == "string") {
                $cbox = ej.buildTag("input", {}, {}, { "type": "checkbox" });
                $predicate.append($cbox)
                    .append(ej.buildTag("span.e-caption").html(this._getLocalizedLabels("MatchCase")));
                $.each($strOp, function (indx, operator) {
                    $drdownUl.append(ej.buildTag("li", {}, {}, { "value": operator.value }).html(operator.text));
                });
            }
            if (type == "number" || type == "date") {
                $.each($numOp, function (indx, operator) {
                    $drdownUl.append(ej.buildTag("li", {}, {}, { "value": operator.value }).html(operator.text));
                });
            }
            if (type != "boolean") {
                $drdownDiv.append($drdownUl);
                $operator.append($drdown);
                $operator.append($drdownDiv);
            }
            var $tBox = ej.buildTag("input", {}, {}, { "type": "text" });
            var $tchkBox = ej.buildTag("input", {}, {}, { "type": "checkbox" });
            var $filter = ej.buildTag("input.e-filter", {}, {}, { "type": "button", "value": this._getLocalizedLabels("Filter") });
            var $clear = ej.buildTag("input.e-clear", {}, {}, { "type": "button", "value": this._getLocalizedLabels("Clear") });
            $value.append(ej.buildTag("span.e-caption").html(this._getLocalizedLabels("Filter") + " : "));
            content.append($predicate);
            if (type == "boolean")
                $value.append($tchkBox);
            else {
                $value.append(ej.buildTag("br")).append($tBox);
                content.append($operator);
            }
            content.append($value);
            content.append(ej.buildTag("div.e-dlgBtns").append($filter)
                .append($clear));
            $drdown.ejDropDownList({ "cssClass": this.model.cssClass, "enableRTL": this.model.enableRTL, "targetID": this._id + type + "_dropdown", width: "230px", height: "26px", selectedItemIndex: 0 });
            $radio.ejRadioButton({ "cssClass": this.model.cssClass, "enableRTL": this.model.enableRTL });
            $andRadio.ejRadioButton({ "cssClass": this.model.cssClass, "enableRTL": this.model.enableRTL, checked: true });
            if ($cbox)
                $cbox.ejCheckBox({ "cssClass": this.model.cssClass, "enableRTL": this.model.enableRTL });
            content.css("display", "none");
            this._createButton("filter", $filter);
            this._createButton("clear", $clear);
            if (type == "number")
                $tBox.ejNumericTextbox({ "cssClass": this.model.cssClass, "enableRTL": this.model.enableRTL, "value": 0, showSpinButton: false, height: "26px", decimalPlaces: 2 });
            else if (type == "date")
                $tBox.ejDatePicker({ "cssClass": this.model.cssClass, "enableRTL": this.model.enableRTL, width: 230 });
            else if (type == "boolean")
                $tchkBox.ejCheckBox({ "cssClass": this.model.cssClass, "enableRTL": this.model.enableRTL });
            else if (type == "string") {
                $tBox.attr("id", this._id + "_acString");
                $tBox.ejAutocomplete({ "cssClass": this.model.cssClass, "enableRTL": this.model.enableRTL, "dataSource": this._dataSource(), width: 230, height: 26, enableDistinct: true });
            }
        },
        _createButton: function (name, element) {
            var $func = name == "filter" ? ej.proxy(this._fltrBtnHandler, this) : ej.proxy(this._fltrClrHandler, this);
            element.ejButton({ "cssClass": this.model.cssClass, "enableRTL": this.model.enableRTL, "click": $func });
        },
        _getIdField: function () {
            var $key;
            $.each(this.model.columns, function (indx, col) {
                if (col.key) {
                    $key = col.field;
                    return false;
                }
            });
            return $key;
        },
        _filterCompleteAction: function () {
            if (this.model.allowPaging)
                this._refreshGridPager();
            if (this.model.filterSettings.filterType == "menu") {
                this._closeFilterDlg();
                var column = this.getColumnByField(this._$curFieldName);
                var index = $.inArray(column, this.model.columns), proxy = this, _addicon = false;
                $.each(this.model.filterSettings.filteredColumns, function (indx, col) {
                    if (col.field == proxy._$curFieldName) {
                        _addicon = true;
                        return false;
                    }
                });
                var $fIcon = this.getHeaderTable().find("thead").find(".e-headercell").eq(index).find(".e-filtericon");
                if (_addicon)
                    $fIcon.addClass("e-filteredicon e-filternone");
                else
                    $fIcon.removeClass("e-filteredicon e-filternone");
            }
        },
        _setFilterFieldValues: function (id) {
            var $fVal = "", proxy = this;
            if (this._$curFieldName != this._$prevFieldName) {
                $.each(this.model.filterSettings.filteredColumns, function (indx, col) {
                    if (col.field == proxy._$curFieldName) {
                        $fVal = col.actualFilterValue != null ? col.actualFilterValue : col.value;
                        return false;
                    }
                });
                if (this._$colType == "boolean") {
                    if ($fVal && $fVal != "")
                        $(id).find(".e-value input").attr("checked", true);
                    else
                        $(id).find(".e-value input").attr("checked", false);
                } else
                    $(id).find(".e-value input").val($fVal);
            }
        },
        _fltrBtnHandler: function (e) {
            var $par = $("#" + this._id + "_" + this._$colType + "Dlg");
            var $input = $par.find(".e-value input"), $operator, result;
            var value = $input.val(), matchcase = undefined, filterValue;
            if (this._$colType == "number") {
                $input = $input.filter(".e-numerictextbox");
                value = parseFloat($input.ejNumericTextbox("getValue"));
                matchcase = true;
            }
            if (this._$colType == "string")
                matchcase = $par.find(".e-predicate input[type='checkbox']").is(":checked");
            if (this._$colType == "date") {
                value = Globalize.parseDate(value, this._$colFormat);
                matchcase = true;
            }
            if (this._$colType == "boolean") {
                value = $input.ejCheckBox("model.checked") != null ? $input.ejCheckBox("model.checked") : false;
                $operator = "equal";
            } else
                $operator = $("#" + this._id + this._$colType + "_ddinput").ejDropDownList("getSelectedValue").toLowerCase();
            if (this._$colForeignKeyValue && this._$colDropdownData)
                result = this._fltrForeignKeyValue($operator, value, matchcase, this._$colDropdownData, this._$colForeignKeyField, this._$colForeignKeyValue);
            if (ej.isNullOrUndefined(result))
                this.filterColumn(this._$curFieldName, $operator, value, $par.find(".e-predicate input[type='radio']:checked").attr("value"), matchcase);
            else {
                if ($par.find(".e-predicate input[type='radio']:checked").css("display") == "none" && result.value.length > 1)
                    this.filterColumn(this._$curFieldName, result.operator, result.value, "or", matchcase, result.filterValue);
                else
                    this.filterColumn(this._$curFieldName, result.operator, result.value, $par.find(".e-predicate input[type='radio']:checked").attr("value"), matchcase, result.filterValue);
            }
        },
        _fltrClrHandler: function (e) {
            var id = "#" + this._id + "_" + this._$colType + "Dlg";
            if (this._$colType == "boolean")
                $(id).find(".e-value input").ejCheckBox("model.checked", false);
            else
                if (this._$colType == "number")
                    $(id).find('.e-numerictextbox').ejNumericTextbox("model.value","");
                else
                    $(id).find(".e-value input").val("");
            this.filterColumn(this._$curFieldName, "", "", "or");
        },

        _fltrForeignKeyValue: function (operator, value, matchcase, dataSource, fieldName, mapFieldName, colType) {
            if (ej.isNullOrUndefined(matchcase))
                matchcase = true;
            var operatorCol = [], query, filterValue;
            var data = ej.DataManager(dataSource);
            if (colType == "date") {
                var $prevDate = new Date(value.setDate(value.getDate() - 1));
                var $nextDate = new Date(value.setDate(value.getDate() + 2));
                if (operator == "equal" || operator == "notequal") {
                    if (operator == "equal")
                        query = new ej.Query().where(ej.Predicate(mapFieldName, ">", $prevDate, !matchcase)
                            .and(mapFieldName, "<", $nextDate, !matchcase)).select(fieldName);
                    else
                        query = new ej.Query().where(ej.Predicate(mapFieldName, "<=", $prevDate, !matchcase)
                           .or(mapFieldName, ">=", $nextDate, !matchcase)).select(fieldName);
                }
                else
                    query = new ej.Query().where(mapFieldName, operator, value, !matchcase).select(fieldName);
            }
            else
                query = new ej.Query().where(mapFieldName, operator, value, !matchcase).select(fieldName);
            filterValue = value;
            value = data.executeLocal(query);
            operatorCol.push("equal");
            for (i = 1; i < value.length ; i++) {
                operatorCol.push("equal");
            }
            return { operator: operatorCol, value: value, filterValue: filterValue };
        },
        _setDateFilters: function (filterObject) {
            var $prevDate = new Date(filterObject.value.setDate(filterObject.value.getDate() - 1));
            var $nextDate = new Date(filterObject.value.setDate(filterObject.value.getDate() + 2));
            var $prevObj = $.extend({}, filterObject);
            var $nextObj = $.extend({}, filterObject);
            $prevObj.value = $prevDate;
            $nextObj.value = $nextDate;
            if (filterObject.operator == "equal") {
                $prevObj.operator = ">";
                $prevObj.predicate = "and";
                $nextObj.operator = "<";
                $nextObj.predicate = "and";
            } else {
                $prevObj.operator = "<=";
                $prevObj.predicate = "or";
                $nextObj.operator = ">=";
                $nextObj.predicate = "or";
            }
            this.model.filterSettings.filteredColumns.push($prevObj);
            this.model.filterSettings.filteredColumns.push($nextObj);
        },
    };
})(jQuery, Syncfusion);;
(function ($, ej, undefined) {
    ej.gridFeatures = ej.gridFeatures || {};
    ej.gridFeatures.group = {
        _renderGroupDropArea: function () {
            if (!this.model.groupSettings.enableDropAreaAutoSizing)
                this.model.groupSettings.enableDropAreaAnimation = this.model.groupSettings.enableDropAreaAutoSizing;
            var dragLabel = this.model.groupSettings.enableDropAreaAnimation ? "" : this._getLocalizedLabels("GroupDropArea");
            var $div = ej.buildTag("div.e-groupdroparea", dragLabel);
            this.model.groupSettings.enableDropAreaAutoSizing && $div.append(ej.buildTag("div.e-animatebutton e-icon").addClass(this.model.groupSettings.enableDropAreaAnimation ? "e-animatebuttondown e-gdownarrow" : "e-animatebuttonup e-guparrow"));
            return $div;
        },
        _getColGroup: function (gridObjectId) {
            var gridObject = this.getRsc("helpers", gridObjectId);
            if (gridObject.model.groupSettings.groupedColumns.length == 1)
                var level = this.data.items.level === undefined ? 0 : this.data.items.level - 1;
            else
                var level = this.data.items.level === undefined ? gridObject.model.groupSettings.groupedColumns.length : this.data.items.level - 1;
            var $div = $(document.createElement("div"));
            var $colGroup;
            if (gridObject._isCaptionSummary)
                $colGroup = gridObject._getCaptionColGroup(level);
            else {
                $colGroup = gridObject._getMetaColGroup();
                if (level != gridObject.model.groupSettings.groupedColumns.length && gridObject.model.groupSettings.groupedColumns.length > 1)
                    $colGroup.prepend(gridObject._getIndentCol());
            }
            $div.html($colGroup);
            return $div.html();
        },
        _colSpanAdjust: function (gridObjectId, type, captionDetails) {
            var gridObject, groupData;
            if (ej.isNullOrUndefined(gridObjectId)) {
                gridObject = this;
                groupData = captionDetails;
            }
            else {
                gridObject = this.getRsc("helpers", gridObjectId);
                groupData = this;
            }
            if (gridObject.model.groupSettings.groupedColumns.length == 1) {
                var level = groupData.data.items.level === undefined ? 1 : groupData.data.items.level - 1;
                if (type == "groupcaption")
                    gridObject._currentJsonData = gridObject._currentJsonData.concat(groupData.data.items);
            } else {
                var level = groupData.data.items.level === undefined ? gridObject.model.groupSettings.groupedColumns.length : groupData.data.items.level - 1;
                if (type == "groupcaption" && groupData.data.items.level === undefined)
                    gridObject._currentJsonData = gridObject._currentJsonData.concat(groupData.data.items);
            }
            var hideGroupColumnCount = !gridObject.model.groupSettings.showGroupedColumn ? gridObject.model.groupSettings.groupedColumns.length : 0;
            var colspan = gridObject.model.columns.length + gridObject.model.groupSettings.groupedColumns.length - level - gridObject._hiddenColumns.length - hideGroupColumnCount;
            colspan = gridObject.model.detailsTemplate != null ? colspan + 1 : colspan;

            if (gridObject._isCaptionSummary && type == "groupcaption") {
                var index = [];
                var row = gridObject._captionSummary();
                $.each(row[0].summaryColumns, function (cindx, col) {
                    index.push(gridObject.getColumnIndexByField(col.displayColumn));
                });
                if (index.length > 0)
                    colspan = ej.min(index);
                if (!gridObject.model.groupSettings.showGroupedColumn) {
                    colspan = groupData.data.items.childLevels != null ? (groupData.data.items.childLevels + 2) : 1;
                }
                else {
                    colspan = gridObject.model.detailsTemplate != null ? colspan + 1 : colspan;
                    colspan = groupData.data.items.childLevels != null ? colspan + (groupData.data.items.childLevels + 1) : colspan;
                }
            }
            return colspan;
        },
        _captionFormat: function (gridObjectId) {
            var gridObject = this.getRsc("helpers", gridObjectId);
            var keyValue;
            var column = gridObject.getColumnByField(this.data.field);
            if (column.foreignKeyValue && column.dataSource)
                keyValue = gridObject._foreignKeyBinding(column, this.data.key);
            else
                keyValue = this.data.key;
            var formatted = column.format ? gridObject.formatting(column.format, keyValue) : keyValue;
            return column.headerText + ": " + formatted + " - " + this.data.count + " " + gridObject._getLocalizedLabels("GroupCaptionFormat");
        },
        _getCaptionColGroup: function (level) {
            var cloneColGroup = this.getHeaderTable().find("colgroup").clone();
            var colColl = cloneColGroup.find("col");
            var indentCol = colColl.length - this.model.columns.length;
            if (this.model.detailsTemplate != null)
                indentCol = indentCol - 1;
            cloneColGroup.find("col:lt(" + indentCol + ")").remove();
            if (level > 0 && level != this.model.groupSettings.groupedColumns.length) {
                if (this.model.groupSettings.groupedColumns.length > 2 && level != this.model.groupSettings.groupedColumns.length - 1) {
                    for (var i = 0; i < this.model.groupSettings.groupedColumns.length - level; i++) {
                        cloneColGroup.prepend(this._getIndentCol());
                    }
                }
                else
                    cloneColGroup.prepend(this._getIndentCol());
            }
            return cloneColGroup;
        },
        _groupSummaryRow: function (item, gridObjectId) {
            var gridObject = this.getRsc("helpers", gridObjectId);
            if (gridObject.model.showSummary) {
                if (!ej.isNullOrUndefined(item.level) && !gridObject._isCaptionSummary) return;
                if (gridObject.getFooterTable() == null)
                    gridObject._renderGridFooter();
                gridObject._createSummaryRows(gridObject.getFooterTable(), item.records == null ? item : item.records);
                if (gridObject._isCaptionSummary) {
                    var index = [];
                    var row = gridObject._captionSummary();
                    $.each(row[0].summaryColumns, function (cindx, col) {
                        index.push(gridObject.getColumnIndexByField(col.displayColumn));
                    });
                    if (index.length > 0)
                        colIndex = ej.min(index);
                    var colLength = gridObject.model.columns.length;
                    if (!gridObject.model.groupSettings.showGroupedColumn) {
                        gridObject.getFooterTable().find("tbody td").slice(-(colLength - 1)).removeClass("e-summaryrow").addClass("e-groupcaptionsummary");
                    }
                    else {
                        gridObject.getFooterTable().find("tbody td").slice(-(colLength - colIndex)).removeClass("e-summaryrow").addClass("e-groupcaptionsummary");
                    }
                }
                if (!gridObject.model.groupSettings.showGroupedColumn) {
                  var groupedcolumns = gridObject.model.groupSettings.groupedColumns;
                  var count=0;
                  var gridfooterrow = gridObject.getFooterTable().children('tbody').find('tr');
                  for (var j = 0; j < gridObject.model.summaryRows.length; j++) {
                  for (var k = 0; k < gridObject.model.summaryRows[j].summaryColumns.length; k++) {
                  for (var i = 0; i < groupedcolumns.length; i++) {
                      if (groupedcolumns[i] == gridObject.model.summaryRows[j].summaryColumns[k].displayColumn){
                      count++;
                      if (gridObject.model.summaryRows[j].summaryColumns.length == count)
                      { 
                          $(gridfooterrow[j]).addClass("e-hide")
                      }}}}
                  count=0;
                   }}
                return gridObject.getFooterTable().find("tbody").html();
            }
        },
        addGroupingTemplate: function () {
            var tbody = document.createElement('tbody');
            var expandTd = "<td class='e-recordplusexpand'><div class='e-icon e-gdiagonalnext'></div></td>";
            var proxy = this;
            var helpers = {};
            helpers["_" + proxy._id + "ColSpanAdjust"] = this._colSpanAdjust;
            helpers["_" + proxy._id + "Colgroup"] = this._getColGroup;
            helpers["_" + proxy._id + "CaptionFormat"] = this._captionFormat;
            helpers["_" + proxy._id + "GroupSummaryRow"] = this._groupSummaryRow;
            helpers[proxy._id + "Object"] = this;
            $.views.helpers(helpers);
            var cpationTd = expandTd + "<td class='e-groupcaption' colspan='{{:~_" + proxy._id + "ColSpanAdjust('" + proxy._id + "Object" + "','groupcaption') }}'>{{:~_" + proxy._id + "CaptionFormat('" + proxy._id + "Object')}}</td";
            if (this._isCaptionSummary && this.model.showSummary)
                cpationTd = cpationTd + "{{:~_" + proxy._id + "GroupSummaryRow(items,'" + proxy._id + "Object')}}";
            var captionTr = "<tr>" + cpationTd + "</tr>";
            var $tbody = ej.buildTag("tbody");
            $tbody.html("{{if items.GROUPGUID}}" +
                "{{for items tmpl='" + proxy._id + "_GroupingTemplate'/}}" +
                "{{else}}" +
                "{{for items tmpl='" + proxy._id + "_JSONTemplate'/}}" +
                "{{/if}}");
            var indentTd = "<td class='e-indentcell'></td>";
            var table = "<table class='e-table {{if items.GROUPGUID}}{{else}}e-recordtable{{/if}}' cellspacing='0.25px' >" +
                "{{:~_" + proxy._id + "Colgroup('" + proxy._id + "Object')}}" +
                $tbody.html() + (this._isCaptionSummary ? "</table>" : "{{:~_" + proxy._id + "GroupSummaryRow(items,'" + proxy._id + "Object')}}" +
            "</table>");
            var tableTd = "<td class='e-tabletd' colspan='{{:~_" + proxy._id + "ColSpanAdjust('" + proxy._id + "Object" + "','table')}}'>" + table + "</td>";
            var tr = "<tr>" + indentTd + tableTd + "</tr>";
            $.templates(proxy._id + "_GroupingTemplate", captionTr + tr);
        },
        _getGroupTopLeftCell: function () {
            var $th = ej.buildTag("th.e-grouptopleftcell");
            $th.append(ej.buildTag("div.e-headercelldiv", "&nbsp;"));
            return $th;
        },
        _getEmptyFilterBarCell: function () {
            return ej.buildTag("th.e-filterbarcell");
        },
        _groupingAction: function () {
            var $groupTopCell = this.getHeaderTable().find("thead").find(".e-columnheader").find(".e-grouptopleftcell"), $col = this.getHeaderTable().find("colgroup").find("col");
            var groupColumn = $groupTopCell.length;
            if (groupColumn) {
                this.getHeaderTable().find("colgroup").replaceWith(this._getMetaColGroup());
                this.model.detailsTemplate != null && this.getHeaderTable().find("colgroup").prepend(this._getIndentCol());
                $groupTopCell.remove();
                this.getHeaderTable().find("thead").find(".e-filterbar").find(".e-filterbarcell:lt(" + groupColumn + ")").remove();
            }
            !this.model.allowResizeToFit && this.setWidthToColumns();
            for (var i = 0; i < this.model.groupSettings.groupedColumns.length; i++) {
                this.getHeaderTable().find("colgroup").prepend(this._getIndentCol());
                this.getHeaderTable().find("thead").find(".e-columnheader").prepend(this._getGroupTopLeftCell());
                this.getHeaderTable().find("thead").find(".e-filterbar").prepend(this._getEmptyFilterBarCell());

            }
            this.getHeaderTable().find("thead").find("th.e-grouptopleftcell").last().addClass("e-lastgrouptopleftcell");
        },
        /**
		 * It is used to send a column grouping request in grid control.
         * @alias ejGrid#groupColumn
		 * @return jQuery
		 * @param {string} fieldName Pass the field Name of the column to be grouped in grid control
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Sends a group column request to the grid
		 * gridObj.groupColumn("OrderID"); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Sends a group column request to the grid
		 * $("#Grid").ejGrid("groupColumn", "OrderID");        
		 * &lt;/script&gt;
         */
        groupColumn: function (columnName) {
            if (!this.model.allowGrouping || $.inArray(columnName, this._disabledGroupableColumns) != -1)
                return;
            if (ej.isNullOrUndefined(this.getColumnByField(columnName)) || $.inArray(columnName, this.model.groupSettings.groupedColumns) != -1)
                return;
            this.model.groupSettings.groupedColumns.push(columnName);
            for (var i = 0; i < this.model.sortSettings.sortedColumns.length; i++) {
                if (this.model.sortSettings.sortedColumns[i].field == columnName) {
                    break;
                }
            }
            this.model.sortSettings.sortedColumns.length == i && this.model.sortSettings.sortedColumns.push({ field: columnName, direction: ej.sortOrder.Ascending });
            var args = {};
            args.columnName = columnName;
            args.requestType = ej.Grid.Actions.Grouping;
            var returnValue = this._processBindings(args);
            if (returnValue)
                this.model.groupSettings.groupedColumns.pop();
            this._primaryKeyValues = [];
        },
        /**
         * It is used to un-group a column from grouped columns collection in grid control.
         * @alias ejGrid#ungroupColumn
         * @return jQuery
         * @param {string} fieldName Pass the field Name of the column to be ungrouped from grouped column collection
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Sends an ungroup column request to the grid
         * gridObj.ungroupColumn("OrderID"); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Sends an ungroup column request to the grid
         * $("#Grid").ejGrid("ungroupColumn", "OrderID");        
         * &lt;/script&gt;
         */
        ungroupColumn: function (columnName) {
            if (!this.model.allowGrouping)
                return;
            if ($.inArray(columnName, this.model.groupSettings.groupedColumns) != -1)
                this.model.groupSettings.groupedColumns.splice($.inArray(columnName, this.model.groupSettings.groupedColumns), 1);
            else
                return null;
            var args = {};
            for (var i = 0; i < this.model.sortSettings.sortedColumns.length; i++) {
                if (this.model.sortSettings.sortedColumns[i].field == columnName) {
                    this.model.sortSettings.sortedColumns.splice(i, 1);
                    break;
                }
            }
            args.columnName = columnName;
            args.requestType = ej.Grid.Actions.Ungrouping;
            var returnValue = this._processBindings(args);
            if (returnValue)
                this.model.groupSettings.groupedColumns.push(columnName);
            this._primaryKeyValues = [];
        },
        /**
         * It is used to collapse the group drop area in grid control.
         * @alias ejGrid#collapseGroupDropArea
         * @return jQuery
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Collapse the group drop area of the grid
         * gridObj.collapseGroupDropArea(); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Collapse the group drop area of the grid
         * $("#Grid").ejGrid("collapseGroupDropArea");        
         * &lt;/script&gt;
         */
        collapseGroupDropArea: function () {
            var $groupDropArea = this.element.find(".e-groupdroparea").first(), proxy = this;
            this.model.groupSettings.groupedColumns.length == 0 && this.model.groupSettings.enableDropAreaAnimation && $groupDropArea.animate({ height: "10px" }, 200, function () {
                if (proxy.model.groupSettings.groupedColumns.length == 0) {
                    $(this).html("").append(ej.buildTag("div.e-animatebutton e-animatebuttondown e-icon e-gdownarrow"));
                    $(this).dequeue().css("height", "auto");
                }
            });
        },
        /**
         * It is used to expand the group drop area in grid control.
         * @alias ejGrid#expandGroupDropArea
         * @return jQuery
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Expands the group drop area of the grid
         * gridObj.expandGroupDropArea(); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Expands the group drop area of the grid
         * $("#Grid").ejGrid("expandGroupDropArea");        
         * &lt;/script&gt;
         */
        expandGroupDropArea: function () {
            var $groupDropArea = this.element.find(".e-groupdroparea").first(), proxy = this;
            this.model.groupSettings.groupedColumns.length == 0 && proxy.model.groupSettings.enableDropAreaAnimation && $groupDropArea.animate({ height: "30px" }, 150, function () {
                proxy.model.groupSettings.groupedColumns.length == 0 && $groupDropArea.html(proxy._getLocalizedLabels("GroupDropArea")).append(ej.buildTag("div.e-animatebutton e-animatebuttonup e-icon e-guparrow"));
                $groupDropArea.dequeue().css("height", "30px");
            });
        },
        _enableGroupingEvents: function () {
            if (this.model.allowGrouping) {
                this._on(this.element, "click", ".e-groupdroparea,.e-groupheadercell", this._groupHeaderCellClick);
                //to avoid ungrouping issue.
                this._on(this.element, "mousedown", ".e-groupheadercell", function (e) {
                    return false;
                });
            }

        },
        _recalculateIndentWidth: function () {
            var proxy = this;
            var browserDetails = this.getBrowserDetails();
            var indentWidth = this.getHeaderTable().find(".e-lastgrouptopleftcell").width(), newWidth, perPixel = indentWidth / 30, $col;
            if (perPixel > 1)
                newWidth = (30 / perPixel);
            this.getHeaderTable().find("colgroup").find("col").slice(0, this.model.groupSettings.groupedColumns.length).css("width", newWidth + "px");
            indentWidth = this.getHeaderTable().find(".e-lastgrouptopleftcell").width();
            if (indentWidth > 30 || (this._isCaptionSummary && indentWidth >= 30)) {
                if (this._isCaptionSummary) {
                    var colgroup = this.getContentTable().find("table").filter(":not(.e-recordtable)").children("colgroup");
                    $.each(colgroup, function (index, item) {
                        var indentCol = $(item).find("col").length - proxy.model.columns.length;
                        if (proxy.model.detailsTemplate != null)
                        {
                            if (indentCol > 0)
                            indentCol = indentCol - 1;
                        }
                        $(item).find("col").slice(0, indentCol).css("width", newWidth + "px");
                    });
                }
                else
                    this.getContentTable().find("table").filter(":not(.e-recordtable)").children("colgroup").find("col:first-child").css("width", indentWidth + "px");
                $col = this.getContentTable().find("colgroup").first().find("col").slice(0, this.model.groupSettings.groupedColumns.length);
                if (browserDetails.browser != "msie")
                    $col.css("width", newWidth + "px");
                else
                    $col.first().css("width", ((indentWidth / this.element.width()) * 100) + "%");
            } else
                browserDetails.browser != "msie" && this.getContentTable().find("colgroup").first().find("col").slice(0, this.model.groupSettings.groupedColumns.length).css("width", newWidth + "px");

        },
        /**
		 * It is used to get the column field name from the given header text in grid control.
         * @alias ejGrid#getFieldNameByHeaderText
		 * @return fieldName
		 * @param {string} headerText Pass header text of the column to get its corresponding field name
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Gets the column field name from the given headerText
		 * gridObj.getFieldNameByHeaderText("Order ID"); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Gets the column field name from the given headerText
		 * $("#Grid").ejGrid("getFieldNameByHeaderText", "Order ID");
		 * &lt;/script&gt;
         */
        getFieldNameByHeaderText: function (headerText) {
            if (ej.isNullOrUndefined(this._fieldColumnNames[headerText]))
                return null;
            return this._fieldColumnNames[headerText];
        },
        /**
         * It is used to get the column header text from the given field name in grid control.
         * @alias ejGrid#getHeaderTextByFieldName
         * @return headerText
         * @param {string} field Pass field name of the column to get its corresponding header text
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * gridObj.getHeaderTextByFieldName("OrderID"); // Gets the column header text from the given field name
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Gets the column header text from the given field name
         * $("#Grid").ejGrid("getHeaderTextByFieldName", "OrderID");
         * &lt;/script&gt;
         */
        getHeaderTextByFieldName: function (field) {
            if (ej.isNullOrUndefined(this._headerColumnNames[field]))
                return null;
            return this._headerColumnNames[field];
        },
        /**
         * It is used to expand all the group caption rows in grid control.
         * @alias ejGrid#expandAll
         * @return jQuery
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Expand all the group caption rows
         * gridObj.expandAll(); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Expand all the group caption rows
         * $("#Grid").ejGrid("expandAll");        
         * &lt;/script&gt;
         */
        expandAll: function () {
            var recordPlus = this.element.find(".e-recordpluscollapse");
            for (var i = 0; i < recordPlus.length; i++)
                this.expandCollapse($(recordPlus[i]));
        },
        /**
		 * It is used to collapse all the group caption rows in grid control.
         * @alias ejGrid#collapseAll
		 * @return jQuery
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Collapse all the group caption rows
		 * gridObj.collapseAll(); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Collapse all the group caption rows
		 * $("#Grid").ejGrid("collapseAll");        
		 * &lt;/script&gt;
         */
        collapseAll: function () {
            var recordPlus = this.element.find(".e-recordplusexpand");
            for (var i = 0; i < recordPlus.length; i++)
                this.expandCollapse($(recordPlus[i]));
        },
        _group: function (args) {
            if (this.model.groupSettings.groupedColumns.length && this.model.currentViewData) {
                this._currentJsonData = [];
                var $tbody = this.getContentTable().children('tbody');
                $tbody.empty();
                var temp = document.createElement('div');
                if (!this.model.groupSettings.showGroupedColumn) {
                    this._hideHeaderColumn(this.model.groupSettings.groupedColumns, true);
                    this.getContentTable().children("colgroup").replaceWith(this.getHeaderTable().find('colgroup').clone());
                }
                if (args.requestType == "reorder")
                    this._isReorder = true;
                else
                    this._isReorder = false;
                var $col = this.getContentTable().children("colgroup").find('col');
                var length = $col.length - this.model.columns.length;
                if (this.model.detailsTemplate != null)
                    length--;
                if ($col.length > this.model.columns.length)
                    this.getContentTable().children("colgroup").find('col:lt(' + length + ')').remove();
                this.getContentTable().find("colgroup").first().replaceWith(this._getMetaColGroup());
                var dlen;
                if (this.model.detailsTemplate != null) {
                    dlen = this.model.groupSettings.groupedColumns.length + 1;
                }
                else
                    dlen = this.model.groupSettings.groupedColumns.length;
                for (var i = 0; i < dlen; i++)
                    this.getContentTable().children("colgroup").prepend(this._getIndentCol());
                temp.innerHTML = ['<table>', $.render[this._id + "_GroupingTemplate"](this.model.currentViewData, { groupedColumns: this.model.groupSettings.groupedColumns }), '</table>'].join("");
                this.getContentTable().get(0).replaceChild(temp.firstChild.firstChild, this.getContentTable().get(0).lastChild);
                this._hideCaptionSummaryColumn();
                this._groupingAction();
                this._recalculateIndentWidth();
                this._gridRows = this.getContentTable().find(".e-recordtable").find("tbody").find("tr").toArray();
                this._eventBindings();
            }
        },
        _ungroup: function () {
            var $header = this.element.children(".e-gridheader");
            var $filterInput = $header.find(".e-filterbar").find("th").find("input");
            $header.find("div").first().empty().append(this._renderGridHeader().find("table"));
            this.setGridHeaderContent($header);
            if (this.model.allowFiltering && this.model.filterSettings.filterType == "filterbar") {
                this._renderFiltering();
                var filterThNew = this.element.children(".e-gridheader").find(".e-filterbar").find("th").find("input");
                for (var i = 0; i < $filterInput.length; i++)
                    filterThNew.eq(i).val($filterInput.eq(i).val());
            }
            if (!this.model.groupSettings.showGroupedColumn)
                this._hideHeaderColumn(this.model.groupSettings.groupedColumns, true);
            this.element.find(".e-gridcontent").children("div").first().empty().append(this._renderGridContent().find("table").first());
            this.setGridContent(this.element.find(".e-gridcontent"));
            if (this.model.groupSettings.groupedColumns.length != 0)
                this._gridRows = this.getContentTable().find(".e-recordtable").find("tbody").find("tr").toArray();
            else
                this._gridRows = this.getContentTable().get(0).rows;
            this._eventBindings();
        },
        _groupHeaderCellClick: function (e) {
            var $target = $(e.target);
            if ($target.hasClass("e-ungroupbutton")) {
                var columnName = $.trim($target.parent().text());
                var field = this.getFieldNameByHeaderText(columnName);
                this.ungroupColumn(field);
            } else if ($target.hasClass("e-togglegroupbutton")) {
                var columnName = $.trim($target.parent().text()), field;
                field = this.getFieldNameByHeaderText(columnName);
                $target.hasClass("e-toggleungroup") && this.ungroupColumn(field);
            } else if ($target.hasClass("e-animatebutton")) {
                if (!this.model.groupSettings.enableDropAreaAnimation) {
                    this.model.groupSettings.enableDropAreaAnimation = true;
                    this.collapseGroupDropArea();
                } else {
                    this.expandGroupDropArea();
                    this.model.groupSettings.enableDropAreaAnimation = false;
                }
            }

            return false;
        },
        _captionSummary: function () {
            var summary = null;
            for (k = 0; k < this.model.summaryRows.length; k++) {
                if (this.model.summaryRows[k].showCaptionSummary == true) {
                    summary = $(this.model.summaryRows[k]);
                    break;
                }
            }
            return summary;
        },
        _dropAreaHover: function (e) {
            var $target = $(e.target), proxy = this;
            if (e.type == "mouseenter") {
                if (this._dragActive) {
                    if ($target.hasClass("e-groupdroparea"))
                        $target.addClass("e-hover");
                } else
                    $target.removeClass("e-hover");
                $target.hasClass("e-groupheadercell") && this.model.groupSettings.showUngroupButton && $target.find(".e-ungroupbutton").show(150);
            } else if (e.type == "mouseleave") {
                if ($target.hasClass("e-groupdroparea")) {
                    $target.find(".e-ungroupbutton").hide(150);
                    $target.removeClass("e-hover");
                }
                $target.hasClass("e-groupheadercell") && this.model.groupSettings.showUngroupButton && $target.find(".e-ungroupbutton").hide(150);
            }
            return false;
        },
        _groupingCompleteAction: function (args) {
            var $groupDrop = this.element.children(".e-groupdroparea");
            if (this.model.groupSettings.groupedColumns.length && $groupDrop.find(".e-grid-icon").length == 0)
                $groupDrop.empty();
            if (this._initialRender) {
                for (var i = 0; i < this.model.groupSettings.groupedColumns.length; i++)
                    this._addColumnToGroupDrop(this.model.groupSettings.groupedColumns[i]);
                this._refreshGridPager();
            } else
                this._addColumnToGroupDrop(args.columnName);
            this.getHeaderTable().find(".e-columnheader").find(".e-headercelldiv").find(".e-ascending,.e-descending").remove();
            for (var i = 0; i < this.model.sortSettings.sortedColumns.length; i++)
                this._addSortElementToColumn(this.model.sortSettings.sortedColumns[i].field, this.model.sortSettings.sortedColumns[i].direction);
            if (!this._initialRender && ej.gridFeatures.dragAndDrop)
                this._groupHeaderCelldrag();
            this.model.allowScrolling && this.getContentTable().parent().scrollLeft(this.getHeaderTable().parent().scrollLeft() - 1);
            this.element.children(".e-cloneproperties").remove();
        },
        _ungroupingCompleteAction: function (args) {
            var $groupDrop = this.element.children(".e-groupdroparea");
            this._removeColumnFromDrop(args.columnName);
            this.getHeaderTable().find(".e-columnheader").find(".e-headercelldiv").find(".e-ascending,.e-descending").remove();
            for (var i = 0; i < this.model.sortSettings.sortedColumns.length; i++)
                this._addSortElementToColumn(this.model.sortSettings.sortedColumns[i].field, this.model.sortSettings.sortedColumns[i].direction);
            if (this.model.groupSettings.groupedColumns.length == 0) {
                $groupDrop.html(this.model.groupSettings.enableDropAreaAnimation ? "" : this._getLocalizedLabels("GroupDropArea"));
                this.model.groupSettings.enableDropAreaAutoSizing && $groupDrop.append(ej.buildTag("div.e-animatebutton e-icon").addClass(this.model.groupSettings.enableDropAreaAnimation ? "e-animatebuttondown e-gdownarrow" : "e-animatebuttonup e-guparrow"));
                $groupDrop.css("height", "auto");
            }
            if (ej.gridFeatures.dragAndDrop)
                this._headerCellgDragDrop();
            this.model.allowScrolling && this.getContentTable().parent().scrollLeft(this.getHeaderTable().parent().scrollLeft() + 10);
            this.element.children(".e-cloneproperties").remove();
        },
        _getToggleButton: function () {
            return ej.buildTag("span.e-togglegroupbutton e-icon e-groupbutton", "&nbsp;");
        },
        _checkEinHeader: function (field) {
            var $headerCell = this.element.children(".e-gridheader").find("thead").find(".e-columnheader").find(".e-headercell");
            for (var i = 0; i < $headerCell.length; i++) {
                if ($.trim($headerCell.eq(i).text()) == field)
                    return $headerCell.eq(i);
            }
            return null;

        },

        _checkEinGroupDrop: function (field) {
            var $groupHeaderCell = this.element.children(".e-groupdroparea").find(".e-grid-icon");
            for (var i = 0; i < $groupHeaderCell.length; i++) {
                if ($.trim($groupHeaderCell.eq(i).text()) == field)
                    return $groupHeaderCell.eq(i);
            }
            return null;
        },

        _addColumnToGroupDrop: function (field) {
            var $groupedColumn = ej.buildTag("div.e-grid-icon e-groupheadercell"), $groupDropArea = this.element.find(".e-groupdroparea").first();
            var $childDiv = ej.buildTag("div"), imageDirection = "e-rarrowup-2x";
            var column = this.getColumnByField(field)
            $groupedColumn.append($childDiv.html(column.headerText));
            var $headerCell = this._checkEinHeader(column.headerText);
            if (this.model.groupSettings.showToggleButton) {
                $childDiv.append(this._getToggleButton().addClass("e-toggleungroup"));
                $headerCell.find(".e-headercelldiv").find(".e-togglegroupbutton").remove().end().append(this._getToggleButton().addClass("e-toggleungroup"));
            }
            var direction = "ascending";
            if ($headerCell.find(".e-ascending,.e-descending").length) {
                direction = $headerCell.find(".e-ascending,.e-descending").hasClass("e-ascending") ? "ascending" : "descending";
                imageDirection = direction == "ascending" ? "e-rarrowup-2x" : "e-rarrowdown-2x";
            }
            $childDiv.append(this._createSortElement().addClass("e-" + direction + " " + imageDirection));
            this.model.groupSettings.showUngroupButton && $childDiv.append(ej.buildTag("span.e-ungroupbutton e-icon e-cancel", " ", {}, { title: "Click here to ungroup" }));
            $groupDropArea.append($groupedColumn).css("height", "auto");
            var left = $groupedColumn.offset().left, $cloned = $groupedColumn.clone().css("position", "absolute"), proxy = this;
            $groupedColumn.css("visibility", "hidden")
            $groupDropArea.append($cloned).dequeue();
            $cloned.css({ "left": left + 150 }).animate({ left: left }, 150, function (e) {
                $groupedColumn.css("visibility", "visible");
                $cloned.remove();
            });
        },
        _removeColumnFromDrop: function (field) {
            var headerText = this.getHeaderTextByFieldName(field), proxy = this, $groupDropArea = this.element.children(".e-groupdroparea");
            var $groupHeaderCell = $groupDropArea.css("height", "30px").find(".e-grid-icon");
            for (var i = 0; i < $groupHeaderCell.length; i++) {
                if ($.trim($groupHeaderCell.eq(i).text()) == headerText) {
                    if (this.model.groupSettings.groupedColumns.length == 0) {
                        this.collapseGroupDropArea();
                    } else
                        $groupHeaderCell.eq(i).remove();
                }
            }
        }
    };
})(jQuery, Syncfusion);;
(function ($, ej, undefined) {
    ej.gridFeatures = ej.gridFeatures || {};
    ej.gridFeatures.dragAndDrop = {
        _headerCellgDragDrop: function () {
            var proxy = this;
            this.dragHeaderElement();
            var $droppableElements = this.element.children("div.e-groupdroparea");
            $droppableElements.ejDroppable({
                accept: $droppableElements,
                drop: function (event, ui) {
                    if (ej.isNullOrUndefined(ui.helper) || !ui.helper.is(":visible"))
                        return;
                    var column = proxy.getColumnByHeaderText($.trim(ui.helper.text()));
                    ui.helper.remove();
                    if ($.inArray(column["headerText"], proxy._disabledGroupableColumns) != -1)
                        return;
                    if (!ej.isNullOrUndefined(column.field))
                        proxy.groupColumn(column.field);
                }
            });
        },
        _headerCellreorderDragDrop: function () {
            var proxy = this;
            this.dragHeaderElement();
            var $droppableElements = this.element.find(".e-headercelldiv");
            $droppableElements.ejDroppable({
                accept: $droppableElements,
                drop: function (event, ui) {
                    if (ej.isNullOrUndefined(ui.helper) || !ui.helper.is(":visible"))
                        return;
                    var column = proxy.getColumnByHeaderText($.trim(ui.helper.text()));
                    ui.helper.remove();
                    if ($.inArray(column["headerText"], proxy._disabledGroupableColumns) != -1)
                        return;
                    if (!ej.isNullOrUndefined(column.field)) {
                        var toColumn = proxy.getColumnByHeaderText($.trim($(event.dropTarget).text()));
                        proxy.reorderColumns(column.field, toColumn.field);

                    }
                }
            });
        },

        dragHeaderElement: function () {
            var proxy = this;
            var $dragableElements = this.element.children("div.e-gridheader").find("th.e-headercell").not(".e-headertemplate");
            var $visualElement = ej.buildTag('div.e-cloneproperties e-grid', "", { 'height': '20px', 'z-index': 2 }),column;
            //header element columnDrag
            $dragableElements.ejDraggable({
                cursorAt: { top: -35, left: -2 },
                helper: function (event, ui) {
                    if (proxy.element.find(".e-dragclone").length > 0) proxy.element.find(".e-dragclone").remove();
                    var $th;
                    if ($(event.sender.target).hasClass("e-headercell"))
                        $th = $(event.sender.target);
                    else
                        $th = $(event.sender.target).closest("th");
                    column = proxy.getColumnByField($th.find(".e-headercelldiv").attr("ej-mappingname"));
                    return $visualElement.html($th.text()).clone().width($th.outerWidth() + 2).height($th.height() + 2).css({ "font-size": parseInt(($th.height() + 3) / 2) }).addClass("e-dragclone").appendTo(proxy.element);
                },
                dragStart: function (args) {
                    var target = args.target;
                    var data = { target: target, draggableType: "headercell", column: column };
                    if (proxy._resizer != null && proxy._resizer._expand) {
                        $(".e-dragclone").remove();
                        return false;
                    }
                    proxy._dragActive = true;
                    var $target = proxy.element.find(".e-groupdroparea");
                    if (proxy.model.allowGrouping)
                        proxy.expandGroupDropArea();
                    if (proxy._trigger("columnDragStart", data))
                        return false;
                },
                drag: function (args) {
                    var $target = $(args.target);
                    var data = { target: $target, draggableType: "headercell", column: column };
                    if (proxy._trigger("columnDrag", data))
                        return false;

                    if ($target.hasClass('e-headercelldiv') && proxy.model.allowReordering) {
                        document.body.style.cursor = '';
                        $target.addClass("e-allowDrop");
                        proxy.getHeaderTable().find(".e-reorderindicate").removeClass("e-reorderindicate");
                        $target.parent().addClass("e-reorderindicate");
                    }
                    if ($target.hasClass('e-groupdroparea') || $target.closest('.e-groupdroparea').length) {
                        document.body.style.cursor = '';
                        $target.addClass("e-allowDrop");
                    } else
                        document.body.style.cursor = 'not-allowed';
                },
                dragStop: function (args) {
                    if (!args.element.dropped) {
                        var $target = $(args.target);
                        var data = { target: $target, draggableType: "headercell", column: column };
                        proxy._trigger("columnDrop", data);
                        proxy.element.find(".e-groupdroparea").removeClass("e-hover");
                        proxy.getHeaderTable().find(".e-columnheader").find(".e-headercellactive").removeClass("e-headercellactive").removeClass("e-active");
                        $(".e-dragclone").remove();
                        proxy._dragActive = false;
                        proxy.getHeaderTable().find(".e-reorderindicate").removeClass("e-reorderindicate");
                        if (proxy.model.allowGrouping)
                            proxy.collapseGroupDropArea();
                        document.body.style.cursor = '';
                        $(proxy._Indicator).css('display', 'none');
                    }
                }
            });
        },
        _groupHeaderCelldrag: function () {
            //grouped header cell drag.
            var $visualElement = ej.buildTag('div.e-cloneproperties e-grid', "", { 'height': '20px', 'z-index': 2 });
            var proxy = this;
            var $groupedHeaderCells = this.element.children(".e-groupdroparea").find(".e-groupheadercell");
            $groupedHeaderCells.ejDraggable({
                cursorAt: { top: -35, left: -2 },
                helper: function (event, ui) {
                    var $div = $(event.sender.target).closest(".e-grid-icon");
                    return $visualElement.html($(event.sender.target).closest(".e-groupheadercell").text()).clone().width($div.width() + 2).height($div.height() + 2).addClass("e-dragclone").appendTo(proxy.element);
                },
                dragStart: function (args) {
                    var target = args.target;
					args.model.cursorAt = { top: -35, left: -2 };
                    var data = { target: target, draggableType: "groupheadercell" };
                    if (proxy._trigger("columnDragStart", data))
                        return false;
                },
                drag: function (args) {
                    $(".Sibling").remove();
                    var $target = $(args.target);
                    var data = { target: $target, draggableType: "groupheadercell" };
                    if (proxy._trigger("columnDrag", data))
                        return false;
                    if ($target.closest('div.e-gridcontent').length) {
                        document.body.style.cursor = '';
                        $target.addClass("e-allowDrop");
                    } else
                        document.body.style.cursor = 'not-allowed';
                },
                dragStop: function (args) {
                    if (!args.element.dropped) {
                        var $target = $(args.target);
                        var data = { target: $target, draggableType: "groupheadercell" };
                        proxy._trigger("columnDrop", data);
                        $(".e-dragclone").remove();
                        document.body.style.cursor = '';
                    }
                }
            });

            //grid content drop
            var $contentDroppableElements = this.element.children(".e-gridcontent");
            $contentDroppableElements.ejDroppable({
                accept: proxy.element.children("div.e-groupdroparea").find(".e-groupheadercell"),
                drop: function (event, ui) {
                    if (ej.isNullOrUndefined(ui.helper) || !ui.helper.is(":visible") || !ui.draggable.hasClass("e-groupheadercell"))
                        return;
                    var field = proxy.getFieldNameByHeaderText($.trim(ui.helper.text()));
                    ui.helper.remove();
                    if (!ej.isNullOrUndefined(field))
                        proxy.ungroupColumn(field);


                }
            });
        },
    };
})(jQuery, Syncfusion);;
(function ($, ej, undefined) {
    ej.gridFeatures = ej.gridFeatures || {};
    ej.gridFeatures.selection = {
        /**
         * It is used to select rows in grid control.
         * @alias ejGrid#selectRows
         * @return jQuery
         * @param { number } fromIndex It is used to set the starting index of row for selecting rows.
         * @param { number } toIndex It is used to set the ending index of row for selecting rows.
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Selects rows based on the given index
         * gridObj.selectRows(1, 4); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Selects rows based on the given index
         * $("#Grid").ejGrid("selectRows", 1, 4);
         * &lt;/script&gt;
         */
        selectRows: function (rowIndex, toIndex) {
            if (!this.model.allowSelection)
                return false;
            var $gridRows = $(this.getRows());
            var args = {};
            if (this._selectedRow() != -1)
                args = { rowIndex: this._selectedRow(), row: $gridRows.eq(this._selectedRow()), data: this.model.currentViewData[this._selectedRow()] };

            if (this._trigger("rowSelecting", args))
                return;
            if ((this.model.editSettings.allowEditing || this.model.editSettings.allowAdding) && this.model.isEdit && this.model.enableAutoSaveOnSelectionChange) {
                if (this.model.editSettings.editMode == "externalform" || this.model.editSettings.editMode == "externalformtemplate")
                    $("#" + this._id + "_externalEdit").css("display", "none");
                if (this.endEdit())
                    return;
                var $gridRows = $(this.getRows());
            }
            if (ej.isNullOrUndefined(toIndex) || ej.isNullOrUndefined(rowIndex)) {
                rowIndex = ej.isNullOrUndefined(rowIndex) ? toIndex : rowIndex;
                switch (this.model.selectionType) {
                    case ej.Grid.SelectionType.Multiple:
                        if (this.multiSelectCtrlRequest) {
                            var selectedRowIndex = $.inArray(rowIndex, this._selectedRowsIndexes);
                            selectedRowIndex != -1 && this.clearSelection(rowIndex) && this._selectedRowsIndexes.splice(selectedRowIndex, 0);
                            if (selectedRowIndex == -1) {
                                this._selectedRowsIndexes.push(rowIndex);
                                this.getRowByIndex(rowIndex).attr("aria-selected", "true").find('.e-rowcell, .e-detailrowcollapse, .e-detailrowexpand').addClass("e-selectionbackground e-active");
                            }
                            break;
                        }
                    case ej.Grid.SelectionType.Single:
                        this.clearSelection();
                        this._selectedRowsIndexes = [];
                        this._selectedRowsIndexes.push(rowIndex);
                        this.getRowByIndex(rowIndex).attr("aria-selected", "true").find('.e-rowcell, .e-detailrowcollapse, .e-detailrowexpand').addClass("e-selectionbackground e-active");
                        break;
                }
            } else {
                if (this.model.selectionType == ej.Grid.SelectionType.Multiple) {
                    this.clearSelection();
                    this._selectedRowsIndexes = [];
                    rows = rowIndex - toIndex < 0 ? this.getRowByIndex(rowIndex, toIndex + 1) : this.getRowByIndex(toIndex, rowIndex + 1);
                    for (var i = 0; i < rows.length; i++)
                        this._selectedRowsIndexes.push(rows[i].rowIndex);
                    $(rows).attr("aria-selected", "true").find('.e-rowcell, .e-detailrowcollapse, .e-detailrowexpand').addClass("e-selectionbackground e-active");
                }
            }
            this._previousIndex = this._selectedRowsIndexes.length ? rowIndex : undefined;
            if (this._selectedRow() !== rowIndex)
                this._selectedRow(rowIndex);
            var args = { rowIndex: this._selectedRow(), row: this.getRowByIndex(this._selectedRow()), data: this.model.currentViewData[this._selectedRow()] };
            this._trigger("rowSelected", args);
            this.multiSelectCtrlRequest = false;
        },
        /**
		 * It is used to clear all the row selection or at specific row selection based on the index provided.
         * @alias ejGrid#clearSelection
		 * @return jQuery
		 * @param {number} [index] If index of the row is specified then it will remove the selection from the particular row else it will clears all of the row selection
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
		 * gridObj.clearSelection(2);  // Removes the selection based on the row index
		 * gridObj.clearSelection();  // clears all of the row selection
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Removes the selection based on the row index
		 * $("#Grid").ejGrid("clearSelection", 2);   
		 * // clears all of the row selection
		 * $("#Grid").ejGrid("clearSelection");        
		 * &lt;/script&gt;
         */
        clearSelection: function (index) {
            if (this._selectedRow() >= -1) {
                var $gridRows = $(this.getRows()), index;
                if (!ej.isNullOrUndefined(index)) {
                    this.getRowByIndex(index).removeAttr("aria-selected").find(".e-selectionbackground").removeClass("e-selectionbackground").removeClass("e-active");
                    index = $.inArray(index, this._selectedRowsIndexes);
                    if (index != -1)
                        this._selectedRowsIndexes.splice(index, 1);
                } else {
                    if (this.model.scrollSettings.frozenColumns > 0)
                        $gridRows = $($gridRows[0]).add($gridRows[1]);
                    $gridRows.removeAttr("aria-selected").find(".e-rowcell, .e-detailrowcollapse, .e-detailrowexpand").removeClass("e-selectionbackground").removeClass("e-active");
                }
                if (!this._selectedRowsIndexes.length)
                    this._selectedRow(-1);
            }
            return true;
        },
        /**
         * It is used to get the selected records in grid control.
         * @alias ejGrid#getSelectedRecords
         * @return selectedRecords
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Gets the selected row list
         * gridObj.getSelectedRecords();
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Gets the selected row list
         * $("#Grid").ejGrid("getSelectedRecords");        
         * &lt;/script&gt;
         */
        getSelectedRecords: function () {
            var records = [];
            for (var i = 0; i < this._selectedRowsIndexes.length; i++) {
                if (this._selectedRowsIndexes[i] != -1)
                    records.push(this._currentJsonData[this._selectedRowsIndexes[i]]);
            }
            return records;
        },
        _setCurrentRow: function (requestType) {
            if (requestType == ej.Grid.Actions.Refresh || requestType == ej.Grid.Actions.Filtering || requestType == ej.Grid.Actions.Sorting || requestType == ej.Grid.Actions.Delete || requestType == ej.Grid.Actions.Save || requestType == ej.Grid.Actions.Cancel || requestType == ej.Grid.Actions.Paging) {
                this._selectedRow(-1);
                this._selectedRowsIndexes = [];
            }
        },
        _renderMultiTouchDialog: function () {
            this._customPop = ej.buildTag("div.e-gridpopup", "", { display: "none" });
            var $content = ej.buildTag("div.e-content"), $downTail = ej.buildTag("div.e-downtail e-tail");
            if (this.model.allowMultiSorting) {
                var $selElement = ej.buildTag("span.e-sortdirect e-icon");
                $content.append($selElement);
            }
            if (this.model.selectionType == ej.Grid.SelectionType.Multiple) {
                var $selElement = ej.buildTag("span.e-rowselect e-icon");
                $content.append($selElement);
            }
            this._customPop.append($content);
            this._customPop.append($downTail);
            this.element.append(this._customPop);
        },
    };
})(jQuery, Syncfusion);;
(function ($, ej, undefined) {
	ej.gridFeatures = ej.gridFeatures || {};
   /**   
    * @classdesc The grid can be easily configured to the DOM element, such as div. you can create a grid with a highly customizable look and feel.
    * @class ejGrid
    * @param {object} options - settings for grid
    * @requires jQuery
    * @requires jquery.easing.min.js
    * @requires jquery.globalize.min.js    
    * @requires jsrender.min.js
    * @requires ej.core.js
    * @requires ej.data.js
    * @requires ej.grid.js
    * @requires ej.pager.js
    * @requires ej.scroller.js
    * @requires ej.waitingpopup.js
    * @requires ej.radiobutton.js
    * @requires ej.dropdownlist.js
    * @requires ej.dialog.js
    * @requires ej.button.js
    * @requires ej.autocomplete.js
    * @requires ej.checkbox.js
    * @requires ej.datepicker.js
    * @requires ej.datetimepicker.js
    * @requires ej.editor.js
    * @requires ej.toolbar.js
    * @example
    * &lt;div id="Grid"&gt;&lt;/div&gt; 
    * &lt;script&gt;
    * // Create Grid
    * $('#Grid').ejGrid({
    *     dataSource: window.gridData
    * });         
    * &lt;/script&gt;
    */
    ej.widget("ejGrid", "ej.Grid", /** @lends ejGrid# */ {
        //Root Css Class
        _rootCSS: "e-grid",
        // widget element will be automatically set in this
        element: null,
        validTags: ["div"],
        // user defined model will be automatically set in this
        model: null,
        keyConfigs: /** @lends ejGrid# */{
            focus: "e",
            insertRecord: "45", //Insert
            deleteRecord: "46", // delete
            editRecord: "113", //F2
            saveRequest: "13", // enter
            cancelRequest: "27", //Esc
            nextPage: "34", // PgDn
            previousPage: "33", // PgUp
            lastPage: "ctrl+alt+34", //"CtrlAltPgDn",
            firstPage: "ctrl+alt+33", //"CtrlPlusAltPlusPgUp",
            nextPager: "alt+34", //"AltPlusPgDown",
            previousPager: "alt+33", //"AltPlusPgUp",
            firstCellSelection: "36", //"Home",
            lastCellSelection: "35", //"End",
            firstRowSelection: "ctrl+36", //"CtrlPlusHome",
            lastRowSelection: "ctrl+35", //"CtrlPlusEnd",
            upArrow: "38", //Up arrow
            downArrow: "40", //Down arrow
            moveCellRight: "9", //tab
            moveCellLeft: "shift+9", //shifttab
            selectedGroupExpand: "alt+40", //"AltPlusDownArrow",
            totalGroupExpand: "ctrl+40", //"CtrlPlusDownArrow",
            selectedGroupCollapse: "alt+38", //"AltPlusUpArrow",
            totalGroupCollapse: "ctrl+38" //"CtrlPlusUpArrow",
        },
        _ignoreOnPersist: [
            "query", "isEdit", "toolbarClick", "queryCellInfo", "currentViewData", "enableAltRow", "enableRTL",
            "rowDataBound", "rowTemplate", "detailsDataBound", "detailsTemplate", "summaryRows", "toolbarSettings",
            "editSettings", "allowMultiSorting", "enableAutoSaveOnSelectionChange", "locale", "allowScrolling",
            "cssClass", "dataSource", "groupSettings.enableDropAreaAnimation", "enableRowHover", "showSummary",
            "enableHeaderHover", "allowKeyboardNavigation", "scrollSettings.frozenRows", "scrollSettings.frozenColumns"
        ],

        observables: ["dataSource", "selectedRowIndex", "pageSettings.currentPage"],
        _dataSource: ej.util.valueFunction("dataSource"),
        _selectedRow: ej.util.valueFunction("selectedRowIndex"),
        _currentPage: ej.util.valueFunction("pageSettings.currentPage"),
        // default model
        defaults: /** @lends ejGrid# */ {

            /**		
             * Enable or disable the Grid pager.                             
             * @default false
             * @type {boolean}
             * @example            
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *     dataSource:window.gridData,
             *     allowPaging:true                      
             * });
             * &lt;/script&gt;                 
             */
            allowPaging: false,
            /**		
             * Enable or disable the sorting behavior for the Grid and we can able to sort the Grid columns in Ascending or Decending Order.
             * @default false
             * @type {boolean}
             * @example  
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    dataSource:window.gridData,
             *    allowSorting:true                       
             * });
             * &lt;/script&gt; 
             */
            allowSorting: false,
            /**		
             * Enables or disable the filtering behavior for the Grid. It helps to filter the specific value in Grid columns
             * @default false
             * @type {boolean}
             * @example  
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    dataSource:window.gridData,
             *    allowFiltering:true                       
             * });
             * &lt;/script&gt;
             */

            allowFiltering: false,
            /**		
             * Enable or disable selection behavior for the Grid. It helps to select particular columns in Grid.
             * @default true
             * @type {boolean}
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    dataSource:window.gridData,
             *    allowSelection:true                      
             * });
             * &lt;/script&gt; 
             */
            allowSelection: true,
            /**		
             * This will enable or disable grouping behavior for the Grid.
             * @default false
             * @type {boolean}
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    dataSource:window.gridData,
             *    allowGrouping:true                      
             * });
             * &lt;/script&gt; 
             */
            allowGrouping: false,
            /**		
             * Enable or disable the summary behavior of the grid. It is used to summarize the particular column data
             * @remarks
             * showSummary must be set as true.
             * summaryRows and summaryColumns must be given. See {@link ejGrid#summaryRows}
             * @default false
             * @type {boolean}
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *     dataSource:window.gridData,
             *     columns: [{ field: "OrderID"}, { field: "Freight" }, { field: "ShipCity" }],
             *     showSummary:true,
             *     summaryRows:[{ title: "sum", summaryColumns: [{summaryType:ej.Grid.SummaryType.Count,displayColumn:"Freight",dataMember:"Freight"}]}]       
             * });
             * &lt;/script&gt;  
             */
            showSummary: false,
            /**		
             * Enable or disable the resizing column behavior of the grid. We can able to reset the Grid size.
             * @remarks
             * When allowResizing is enabled then we must specify the following properties
             * 1. allowScrolling must be set as true
             * 2. Provide the scrollSettings after enable the allowScrolling. See{@link ejGrid#scrollSettings}            
             * @default false
             * @type {boolean}
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *     dataSource:window.gridData,
             *     allowResizing:true,
             *     allowScrolling:true,
             *     scrollSettings:{width:300,height:300}
             * });
             * &lt;/script&gt; 
             */
            allowResizing: false,
            /**		
             * Enable or disable the row hovering effect of the grid.
             * @default true
             * @type {boolean}
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    dataSource:window.gridData,
             *    enableRowHover:true
             * });
             * &lt;/script&gt; 
             */
            enableRowHover: true,
            /**		
             * Apply state maintenance to the grid
             * @default false
             * @type {boolean}
             * @example  
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *     dataSource:window.gridData,
             *     allowGrouping: true,
             *     enablePresistence:true
             * });
             * &lt;/script&gt; 
             */
            enablePersistence: false,
            /**		
             * To apply row selection based on your row index value.
             * @remarks
             * allowSelection must be set as true.
             * @default -1
             * @type {number}
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *     dataSource:window.gridData,
             *     selectedRowIndex:1
             * });
             * &lt;/script&gt; 
             */
            selectedRowIndex: -1,
            /**		
             * Enable or disable searching behavior for the grid.
             * @remarks
             * While enabling allowSearching then we must enable toolbar in the grid and add search option in the toolbaritem. See {@link ejGrid#toolbarSettings}
             * @default false
             * @type {boolean}
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *     dataSource:window.gridData,
             *     allowSearching: true,
             *     toolbarSettings:{showToolbar:true,toolbarItems:[ej.Grid.ToolBarItems.Search]}
             * });
             * &lt;/script&gt; 
             */
            allowSearching: false,
            /**		
             * Apply hover selection effect to the header cell of a grid.
             * @default false
             * @type {boolean}
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    dataSource:window.gridData,
             *    enableHeaderHover:true
             * });
             * &lt;/script&gt; 
             */
            enableHeaderHover: false,
            /**		
             * Enable the column reorder by setting the property as true.
             * @default false
             * @type {boolean}
             * @example  			
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    dataSource:window.gridData,
             *    allowReordering:true
             * });
             * &lt;/script&gt; 
             */
            allowReordering: false,
            /**		
             * To Disable the keyboardNavigation property as false.
             * @default true
             * @type {boolean}
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *     dataSource:window.gridData,
             *     allowKeyboardNavigation:false
             * });
             * &lt;/script&gt; 
             */
            allowKeyboardNavigation: true,
            /**		
             * The row selection behavior of grid. Accepting types are "single" and "multiple".
             * @remarks
             * allowSelection must be set as true while using selectionType.
             * @default ej.Grid.SelectionType.Single
             * @type {enum}
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    dataSource:window.gridData,
             *    selectionType:"multiple"
             * });
             * &lt;/script&gt; 
             */
            selectionType: "single",
            /**		
			 * Render grid records by the specified dataSource.
			 * @default null
			 * @type {object}
			 * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
			 * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    dataSource:window.gridData
             * });
             * &lt;/script&gt; 
			 */
            dataSource: null,
            /**		
			 * Specify the CSS class to grid to achieve custom theme.
			 * @default ""
			 * @type {string}
			 * @example 
			 * &lt;div id="Grid"&gt;&lt;/div&gt;
             * &lt;style type="text/css"&gt;
             *    .gradient-green {
             *        font-family: cursive;
             *    }
             *    .gradient-green .e-alt_row {
             *        background: none repeat scroll 0 0 #71A409;
             *    }
             * &lt;/style&gt;
			 * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    dataSource:window.gridData,
             *    cssClass: "gradient-green"
             * });
             * &lt;/script&gt; 
			 */
            cssClass: "",
            /**		
             * Enable or disable scrolling in the grid.
             * @remarks
             * Provide the scrollSettings after enable the allowScrolling. See{@link ejGrid#scrollSettings}            
             * @default false
             * @type {boolean}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   allowScrolling:true,
             *   scrollSettings:{width:300,height:100}
             * });
             * &lt;/script&gt; 
             */
            allowScrolling: false,
            /**		
             * Defines the locale for grid.
             * @default "en-US"
             * @type {string}
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * ej.Pager.locale["es-ES"] = {
             *    pagerInfo: "{0} de {1} páginas ({2} artículos)"
             * };
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   allowPaging:true,
             *   locale : "es-ES" 
             * });
             * &lt;/script&gt;             
             */
            locale: "en-US",
            /**		
             * Enables or disables the save action in the grid by row selection.
             * @remarks
             * When enableAutoSaveOnSelectionChange property value as false, then we must include edit option in toolbar and also set allowEditing as true.
             * @default true
             * @type {boolean}
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *     dataSource:window.gridData,
             *     editSettings: { allowEditing: true },
             *     toolbarSettings: { showToolbar: true, toolbarItems: ["cancel", "save"]},
             *     columns: [{ field: "OrderID", isPrimaryKey: true }, { field: "CustomerID" }, { field: "ShipCity" }],
             *     enableAutoSaveOnSelectionChange: false
             * });
             * &lt;/script&gt; 
             */
            enableAutoSaveOnSelectionChange: true,
            /**		
             * Enables or disables the multi sorting behavior of grid.
             * @remarks
             * allowSorting must be set as true while enabling allowMultiSorting. 
             * @default false
             * @type {boolean}
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   allowSorting:true,
             *   allowMultiSorting:true
             * });
             * &lt;/script&gt; 
             */
            allowMultiSorting: false,
            /**		
             * This property is used to customize the editing behavior of the grid. 
             * @type {Object}
             */
            editSettings: /** @lends ejGrid# */ {
                /**		
                 * Enables or disables editing behavior in the grid.
                 * @remarks
                 * When allowEditing is enabled then we must set columns property "isPrimaryKey" as true for primary column.
                 * We can edit the record in the grid by the following ways.
                 *   1. Enable toolbar in the grid and add editing option in the toolbaritem and click the "edit" icon which is in the toolbar. See {@link ejGrid#toolbarSettings}
                 *   2. Press function key F2.
                 *   3. Double click on the record.
                 * @alias ejGrid#editSettings->allowEditing
                 * @default false
                 * @type {boolean}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource: window.gridData,
                 *     columns: [{ field: "OrderID", isPrimaryKey: true }, { field: "CustomerID" }, { field: "ShipCity" }],
                 *     editSettings: { allowEditing: true },
                 *     toolbarSettings: { showToolbar: true, toolbarItems: ["edit"] }
                 * });
                 * &lt;/script&gt;              
                 */
                allowEditing: false,
                /**		
                 * Enables or disables adding a new record behavior in the grid.
                 * @remarks
                 * When allowAdding is enabled then we must set columns property "isPrimaryKey" as true for primary column.
                 * We can add a new record in the grid by the following ways.
                 *   1. Enable toolbar in the grid and include add record option in the toolbaritem and click the "add" icon which is in the toolbar. See {@link ejGrid#toolbarSettings}
                 *   2. Press Insert key.                 
                 * @alias ejGrid#editSettings->allowAdding
                 * @default false
                 * @type {boolean}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource: window.gridData,
                 *     columns: [{ field: "OrderID", isPrimaryKey: true }, { field: "CustomerID" }, { field: "ShipCity" }],
                 *     editSettings: { allowAdding: true },
                 *     toolbarSettings: { showToolbar: true, toolbarItems: ["add"] }                             
                 * });
                 * &lt;/script&gt;                 
                 */
                allowAdding: false,
                /**		
                 * Enables or disables the deleting record behavior of the grid.
                 * @remarks
                 * When allowDeleting is enabled then we must set columns property "isPrimaryKey" as true for primary column.
                 * We can delete a record in the grid by the following ways.
                 *   1. Enable toolbar in the grid and include delete option in the toolbaritem and click the "delete" icon which is in the toolbar. See {@link ejGrid#toolbarSettings}
                 *   2. Press Delete key. 
                 * @alias ejGrid#editSettings->allowDeleting
                 * @default false
                 * @type {boolean}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 *&lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource: window.gridData,
                 *     columns: [{ field: "OrderID", isPrimaryKey: true }, { field: "CustomerID" }, { field: "ShipCity" }],
                 *     editSettings: { allowDeleting: true },
                 *     toolbarSettings: { showToolbar: true, toolbarItems: ["delete"] }      
                 * });
                 * &lt;/script&gt;                  
                 */
                allowDeleting: false,
                /**		
                 * This is used to define the mode of editing or adding of grid. See {@link editMode}
                 * @remarks
                 * When allowAdding/allowEditing is enabled then we must set columns property "isPrimaryKey" as true for primary column.
                 * We must enable allowEditing or allowAdding property
                 * If allowAdding is enable then we must enable toolBar in the grid and include the "add" option as the toolBarItem. See {@link ejGrid#toolbarSettings}
                 * @alias ejGrid#editSettings->editMode
                 * @default ej.Grid.EditMode.Normal
                 * @type {enum}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt;
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource: window.gridData,
                 *     columns: [{ field: "OrderID", isPrimaryKey: true }, { field: "CustomerID" }, { field: "ShipCity" }],
                 *     editSettings: { allowEditing: true, editMode: ej.Grid.EditMode.Dialog },
                 *     toolbarSettings: { showToolbar: true, toolbarItems: ["edit"] }                             
                 * });
                 * &lt;/script&gt;                          
                 */
                editMode: "normal",
                /**		
                 * An element’s id which can be used for dialog edit template rendering.
                 * @remarks
                 * When dialogEditorTemplateID is used then we must set columns property "isPrimaryKey" as true for primary column.
                 * We must enable allowEditing or allowAdding property
                 * If allowAdding is enable then we must enable toolBar in the grid and include the "add" option as the toolBarItem. See {@link ejGrid#toolbarSettings}
                 * While using dialogEditorTemplateID then editMode must be "ej.Grid.EditMode.DialogTemplate". See {@link editMode}
                 * Provide the template in the script tag and select type as "text/template" and assign the script id as the "dialogEditorTemplateID"
                 * @alias ejGrid#editSettings->dialogEditorTemplateID
                 * @default null
                 * @type {string}
                 * @example               
                 * &lt;div id="Grid"&gt;&lt;/div&gt;
                 * &lt;script id="template" type="text/template"&gt;
                 *    &lt;table&gt;
                 *        &lt;tr&gt;
                 *            &lt;td&gt;OrderID&lt;/td&gt;
                 *            &lt;td&gt;
                 *                &lt;input id="OrderID" name="OrderID" value="{{: OrderID}}" disabled="disabled" /&gt;&lt;/td&gt;
                 *        &lt;/tr&gt;
                 *        &lt;tr&gt;
                 *            &lt;td&gt;CustomerID&lt;/td&gt;
                 *            &lt;td&gt;
                 *                &lt;input id="CustomerID" name="CustomerID" value="{{: CustomerID}}" /&gt;&lt;/td&gt;
                 *        &lt;/tr&gt;
                 *        &lt;tr&gt;
                 *            &lt;td&gt;EmployeeID&lt;/td&gt;
                 *            &lt;td&gt;
                 *                &lt;input id="EmployeeID" name="EmployeeID" value="{{: EmployeeID}}" /&gt;&lt;/td&gt;
                 *        &lt;/tr&gt;
                 *    &lt;/table&gt;
                 * &lt;/script&gt;
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource: window.gridData,
                 *     columns: [{ field: "OrderID", isPrimaryKey: true }, { field: "CustomerID" }, { field: "ShipCity" }],
                 *     editSettings: { allowEditing: true, editMode: ej.Grid.EditMode.DialogTemplate, dialogEditorTemplateID: "#template" },
                 *     toolbarSettings: { showToolbar: true, toolbarItems: ["edit"] }                             
                 * });
                 * &lt;/script&gt;                
                 */
                dialogEditorTemplateID: null,
                /**		
                 * Enable or disable the editing operation while double click on the record.
                 * @remarks
                 * When allowEditOnDblClick is set as false then we must enable toolbar in the grid and also include "edit" option in toolbaritem. Because if false is set then, record is not edited while double click on the row.
                 * We must enable allowEditing property
                 * When allowEditOnDblClick is used then we must set columns property "isPrimaryKey" as true for primary column.
                 * @alias ejGrid#editSettings->allowEditOnDblClick
                 * @default true
                 * @type {boolean}
                 * @example
                 * Defining editEvent with edit option:
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt; 
                 * $("#Grid").ejGrid({
                 *     dataSource: window.gridData,
                 *     columns: [{ field: "OrderID", isPrimaryKey: true }, { field: "CustomerID" }, { field: "ShipCity" }],
                 *     editSettings: { allowEditing: true, allowEditOnDblClick: false },
                 *     toolbarSettings: { showToolbar: true, toolbarItems: ["edit"] }      
                 * });
                 * &lt;/script&gt; 
                 */
                allowEditOnDblClick: true,
                /**		
                 * An element’s id which can be used for external edit template rendering.
                 * @remarks
                 * We must enable allowEditing or allowAdding property
                 * If allowAdding is enable then we must enable toolBar in the grid and include the "add" option as the toolBarItem. See {@link ejGrid#toolbarSettings}
                 * When externalFormTemplateID is used then we must set columns property "isPrimaryKey" as true for primary column.
                 * While using externalFormTemplateID then editMode must be "ej.Grid.EditMode.ExternalFormTemplate". See {@link editMode}
                 * Provide the template in the script tag and select type as "text/template" and assign the script id as the "externalFormTemplateID"
                 * @alias ejGrid#editSettings->externalFormTemplateID
                 * @default null
                 * @type {string}
                 * @example               
                 * &lt;div id="Grid"&gt;&lt;/div&gt;
                 * &lt;script id="template" type="text/template"&gt;
                 *    &lt;table&gt;
                 *        &lt;tr&gt;
                 *            &lt;td&gt;OrderID&lt;/td&gt;
                 *            &lt;td&gt;
                 *                &lt;input id="OrderID" name="OrderID" value="{{: OrderID}}" disabled="disabled" /&gt;&lt;/td&gt;
                 *        &lt;/tr&gt;
                 *        &lt;tr&gt;
                 *            &lt;td&gt;CustomerID&lt;/td&gt;
                 *            &lt;td&gt;
                 *                &lt;input id="CustomerID" name="CustomerID" value="{{: CustomerID}}" /&gt;&lt;/td&gt;
                 *        &lt;/tr&gt;
                 *        &lt;tr&gt;
                 *            &lt;td&gt;EmployeeID&lt;/td&gt;
                 *            &lt;td&gt;
                 *                &lt;input id="EmployeeID" name="EmployeeID" value="{{: EmployeeID}}" /&gt;&lt;/td&gt;
                 *        &lt;/tr&gt;
                 *    &lt;/table&gt;
                 * &lt;/script&gt;
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource: window.gridData,
                 *     columns: [{ field: "OrderID", isPrimaryKey: true }, { field: "CustomerID" }, { field: "ShipCity" }],
                 *     editSettings: { allowEditing: true, editMode: ej.Grid.EditMode.ExternalFormTemplate, externalFormTemplateID: "#template" },
                 *     toolbarSettings: { showToolbar: true, toolbarItems: ["edit"] }                             
                 * });
                 * &lt;/script&gt;                
                 */
                externalFormTemplateID: null,
                /**		
                 * An element’s id which can be used for inline edit template rendering.
                 * @remarks
                 * We must enable allowEditing or allowAdding property
                 * If allowAdding is enable then we must enable toolBar in the grid and include the "add" option as the toolBarItem. See {@link ejGrid#toolbarSettings}
                 * When inlineFormTemplateID is used then we must set columns property "isPrimaryKey" as true for primary column.
                 * While using inlineFormTemplateID then editMode must be "ej.Grid.EditMode.InlineFormTemplate". See {@link editMode}
                 * Provide the template in the script tag and select type as "text/template" and assign the script id as the "inlineFormTemplateID"
                 * @alias ejGrid#editSettings->inlineFormTemplateID
                 * @default null
                 * @type {string}
                 * @example               
                 * &lt;div id="Grid"&gt;&lt;/div&gt;
                 * &lt;script id="template" type="text/template"&gt;
                 *    &lt;table&gt;
                 *        &lt;tr&gt;
                 *            &lt;td&gt;OrderID&lt;/td&gt;
                 *            &lt;td&gt;
                 *                &lt;input id="OrderID" name="OrderID" value="{{: OrderID}}" disabled="disabled" /&gt;&lt;/td&gt;
                 *        &lt;/tr&gt;
                 *        &lt;tr&gt;
                 *            &lt;td&gt;CustomerID&lt;/td&gt;
                 *            &lt;td&gt;
                 *                &lt;input id="CustomerID" name="CustomerID" value="{{: CustomerID}}" /&gt;&lt;/td&gt;
                 *        &lt;/tr&gt;
                 *        &lt;tr&gt;
                 *            &lt;td&gt;EmployeeID&lt;/td&gt;
                 *            &lt;td&gt;
                 *                &lt;input id="EmployeeID" name="EmployeeID" value="{{: EmployeeID}}" /&gt;&lt;/td&gt;
                 *        &lt;/tr&gt;
                 *    &lt;/table&gt;
                 * &lt;/script&gt;
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource: window.gridData,
                 *     columns: [{ field: "OrderID", isPrimaryKey: true }, { field: "CustomerID" }, { field: "ShipCity" }],
                 *     editSettings: { allowEditing: true, editMode: ej.Grid.EditMode.InlineTemplateForm, inlineFormTemplateID: "#template" },
                 *     toolbarSettings: { showToolbar: true, toolbarItems: ["edit"] }                             
                 * });
                 * &lt;/script&gt;                
                 */
                inlineFormTemplateID: null,
                /**		
                 * This is used to position the external edit form either in the top-right corner or bottom-left corner of the Grid.    See {@link formPosition}
                 * @remarks
                 * We must enable allowEditing or allowAdding property.
                 * If allowAdding is enable then we must enable toolBar in the grid and include the "add" option as the toolBarItem. See {@link ejGrid#toolbarSettings}
                 * When formPosition is used then editMode must be "ej.Grid.EditMode.ExternalFormTemplate" or "ej.Grid.editMode.ExternalForm".
                 * We must set columns property "isPrimaryKey" as true for primary column.
                 * @alias ejGrid#editSettings->formPosition
                 * @default ej.Grid.FormPosition.BottomLeft
                 * @type {enum}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt;
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource: window.gridData,
                 *     columns: [{ field: "OrderID", isPrimaryKey: true }, { field: "CustomerID" }, { field: "ShipCity" }],
                 *     editSettings: { allowAdding: true, allowEditing: true, editMode: ej.Grid.EditMode.ExternalForm, formPosition: ej.Grid.FormPosition.BottomLeft },
                 *     toolbarSettings: { showToolbar: true, toolbarItems: ["edit"] }                             
                 * });
                 * &lt;/script&gt;    
                 */
                formPosition: "bottomleft"
            },
            /**		
             * This property is used to modify pager default configuration.            
             * @type Object
             */
            pageSettings: /** @lends ejGrid# */ {
                /**		
                 * This is used to define the number of records displayed per page.
                 * @remarks
                 * When pageSize is defined in pageSettings then "allowPaging" must be set as true.
                 * @alias ejGrid#pageSettings->pageSize
                 * @default 12
                 * @type {number}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource: window.gridData,
                 *     allowPaging: true,   
                 *     pageSettings: { pageSize: 2 }
                 * });
                 * &lt;/script&gt;
                 */
                pageSize: 12,
                /**		
                 * This is used to define the number of pages displayed in the view.
                 * @remarks
                 * When pageCount is defined in pageSettings then "allowPaging" must be set as true.
                 * @alias ejGrid#pageSettings->pageCount
                 * @default 8
                 * @type {number}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource: window.gridData,
                 *     allowPaging: true,    
                 *     pageSettings: { pageCount: 1 }
                 * });
                 * &lt;/script&gt;
                 */
                pageCount: 8,
                /**		
                 * This is used to define which page to display currently.
                 * @remarks
                 * When currentPage is defined in pageSettings then "allowPaging" must be set as true.
                 * The currentPage must be less than or equal to total number of pages.
                 * @alias ejGrid#pageSettings->currentPage
                 * @default 1
                 * @type {number}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource:  window.gridData,
                 *     allowPaging: true,   
                 *     pageSettings: { currentPage: 1 }
                 * });
                 * &lt;/script&gt;
                 */
                currentPage: 1,
                /**		
                 * This is internal property. The totalPages value is calculated based on pagesize and totalrecords of grid.
                 * @remarks
                 * There is no need to set value for this property.
                 * @alias ejGrid#pageSettings->totalPages
                 * @default null
                 * @type {number}  
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt;
                 * &lt;div id="print"&gt;&lt;/div&gt;
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource:  window.gridData,
                 *     allowPaging: true    
                 * });
                 * var value = $("#Grid").ejGrid("option", "pageSettings.totalPages");
                 * $("#print").text("TotalPages: " + value);
                 * &lt;/script&gt;
                 */
                totalPages: null,
                /**		
                 * This is internal property. The totalPages value is calculated based on dataSource.
                 * @remarks
                 * There is no need to set value for this property.
                 * @alias ejGrid#pageSettings->totalRecordsCount
                 * @default null
                 * @type {number}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt;
                 * &lt;div id="print"&gt;&lt;/div&gt;
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource:  window.gridData,
                 *     allowPaging: true
                 * });
                 * var value = $("#Grid").ejGrid("option", "pageSettings.totalRecordsCount");
                 * $("#print").text("TotalRecordsCount: " + value);
                 * &lt;/script&gt;
                 */
                totalRecordsCount: null,
                /**		
                 * Enables or disables the query string value passed along with the url while navigating to other page.
                 * @remarks
                 * When currentPage is defined in pageSettings then "allowPaging" must be set as true.
                 * @alias ejGrid#pageSettings->enableQueryString
                 * @default false
                 * @type {boolean}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource:  window.gridData,
                 *     allowPaging: true,   
                 *     pageSettings: {enableQueryString: true }
                 * });
                 * &lt;/script&gt;
                 */
                enableQueryString: false
            },
            /**		
             * This property is used to customize the grouping behavior of the grid. 
             * @type {Object}             
             */
            groupSettings: /** @lends ejGrid# */ {
                /**		
                 * Enable the toggle grouping option in the grid by setting the property as true. 
                 * @remarks 
                 * When showToggleButton is enabled then "allowGrouping" must be set as true.
                 * @alias ejGrid#groupSettings->showToggleButton
                 * @default false
                 * @type {boolean}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource:window.gridData,
                 *     allowGrouping:true,
                 *     groupSettings:{showToggleButton:true}
                 * });
                 * &lt;/script&gt;   
                 */
                showToggleButton: false,
                 /**		
                  * Apply animation effects to the group drop area collapse and expand.
                  * @remarks
                  * allowGrouping must be set as true.
                  * @alias ejGrid#groupSettings->enableDropAreaAnimation
                  * @default true
                  * @type {boolean}
                  * @example
                  * &lt;div id="Grid"&gt;&lt;/div&gt; 
                  * &lt;script&gt;
                  * $("#Grid").ejGrid({
                  *    dataSource:window.gridData,
                  *    allowGrouping: true,
                  *    enableDropAreaAnimation:true                        
                  * });
                  * &lt;/script&gt;            
                  */
                enableDropAreaAnimation: true,
                 /**		
                  * Enable or Disable the grouped column show option in the grid by show/hide the grouped column in the grid.
                  * @remarks
                  * When showGroupedColumn is enabled then "allowGrouping" must be set as true.
                  * @alias ejGrid#groupSettings->showGroupedColumn
                  * @default false
                  * @type {boolean}
                  * @example
                  * &lt;div id="Grid"&gt;&lt;/div&gt; 
                  * &lt;script&gt;
                  * $("#Grid").ejGrid({
                  *     dataSource:window.gridData,
                  *     allowGrouping:true,
                  *     groupSettings:{showGroupedColumn:false}
                  * });
                  * &lt;/script&gt; 
                  */
                showGroupedColumn: true,
                 /**		
                  * Enable or disable the show ungroup button in the grouped column.
                  * @remarks
                  * When showUngroupButton is enabled then "allowGrouping" and showToggleButton must be set as true.
                  * @alias ejGrid#groupSettings->showUngroupButton
                  * @default false
                  * @type {boolean}
                  * @example
                  * &lt;div id="Grid"&gt;&lt;/div&gt; 
                  * &lt;script&gt;
                  * $("#Grid").ejGrid({
                  *     dataSource:window.gridData,
                  *     allowGrouping:true,
                  *     groupSettings:{showToggleButton: true, showUngroupButton:true}
                  * });
                  * &lt;/script&gt; 
                  */
                showUngroupButton: true,
                /**		
                 * Enable or Disable the animation button option in the grid.
                 * @remarks
                 * When enableDropAreaAutoSizing is enabled then "allowGrouping" must be set as true.
                 * @alias ejGrid#groupSettings->enableDropAreaAutoSizing
                 * @default false
                 * @type {boolean}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource:window.gridData,
                 *     allowGrouping:true,
                 *     groupSettings:{enableDropAreaAutoSizing: true}
                 * });
                 * &lt;/script&gt; 
                 */
                enableDropAreaAutoSizing: true,
                /**		
                 * Add grouped columns programmatically at initial load.
                 * @remarks
                 * When groupedColumns is specified then "allowGrouping" must be set as true.
                 * @alias ejGrid#groupSettings->groupedColumns
                 * @default []
                 * @type {object}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource:window.gridData,
                 *     allowGrouping:true,
                 *     groupSettings:{groupedColumns:["OrderID"]}
                 * });
                 * &lt;/script&gt; 
                 */
                groupedColumns: []
            },
            /**		
             * This property is used to customize the filtering behavior of the grid.
             * @type {Object}             
             */
            filterSettings: /** @lends ejGrid# */ {
                /**		
                 * Enable the filter menu option in the grid by setting the property as menu. Accepted filterTypes are "filterbar" and "menu". See {@link filterType}
                 * @remarks
                 * When filterType is specified then "allowFiltering" must be set as true.
                 * @alias ejGrid#filterSettings->filterType
                 * @default ej.Grid.FilterType.FilterBar
                 * @type {enum}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *    dataSource:window.gridData,
                 *    allowFiltering: true, 
                 *    filterSettings: {  filterType: "menu" }                     
                 * });
                 * &lt;/script&gt;
                 */
                filterType: "filterbar",
                /**		
                 * Set the filter bar mode option in the grid. Accepted filterBarModes are "immediate" and "onenter". See {@link filterBarMode}
                 * @remarks
                 * When filterBarMode is specified then "allowFiltering" must be set as true and filterType must be "filterbar".
                 * @alias ejGrid#filterSettings->filterBarMode
                 * @default ej.Grid.FilterBarMode.Immediate
                 * @type {enum} 
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *    dataSource:window.gridData,
                 *    allowFiltering: true, 
                 *    filterSettings:{ filterBarMode: ej.Grid.FilterBarMode.OnEnter }                
                 * });
                 * &lt;/script&gt;
                 */
                filterBarMode: "immediate",
                /**		
                 * Disable the filter bar message in the grid by setting the property as false.
                 * @remarks
                 * When filterBarMode is specified then "allowFiltering" must be set as true and filterType must be "filterbar".
                 * @alias ejGrid#filterSettings->showFilterBarMessage
                 * @default true
                 * @type {boolean}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *    dataSource:window.gridData,
                 *    allowFiltering: true, 
                 *    filterSettings: {  showFilterBarStatus: true }                        
                 * });
                 * &lt;/script&gt;
                 */
                showFilterBarStatus: true,
                statusBarWidth: 450,
                /**		
                 * Enable the show predicate in the filtering menu by setting the property as true.  
                 * @remarks
                 * When showPredicate is specified then "allowFiltering" must be set as true and filterType must be "menu".
                 * @alias ejGrid#filterSettings->showPredicate
                 * @default false
                 * @type {boolean}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *    dataSource:window.gridData,
                 *     allowFiltering: true, 
                 *     filterSettings: { showPredicate:true, filterType:"menu"}                       
                 * });
                 * &lt;/script&gt;
                 */
                showPredicate: false,
                /**		
                 * Get filtered columns details programmatically after filtering.   
                 * @remarks
                 * When filteredColumns is specified then "allowFiltering" must be set as true and filterType must be "menu".
                 * @alias ejGrid#filterSettings->filteredColumns
                 * @default []
                 * @type {object}                 
                 */
                filteredColumns: []
            },
            /**		
             * This property is used to define initial sorting for particular columns in the grid.
             * @type {Object}           
             */
            sortSettings: /** @lends ejGrid# */ {
                /**		
                 * Set or Get sorted Columns details programmatically after sorting.
                 * @remarks
                 * allowSorting must be set as true.
                 * @alias ejGrid#sortSettings->sortedColumns
                 * @default []
                 * @type {object}
                 * @example                 
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;div id="print"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *    dataSource:window.gridData,
                 *    columns:[{field: "OrderID"},{field: "EmployeeID"}],
                 *    allowSorting: true,
                 *    sortSettings: {sortedColumns: [{field:"EmployeeID", direction:"ascending"}] }                  
                 * });
                 * var sortColumn = $("#Grid").ejGrid("option", "sortSettings.sortedColumns");
                 * $("#print").text(sortColumn);
                 * &lt;/script&gt;
                 */

                /**
                 * Define the field name of the column to be sort.
                 * @remarks
                 * allowSorting must be set as true.
                 * @name ejGrid#sortSettings->sortedColumns->field 	          
                 * @default -
                 * @type {string}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt;          
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *   dataSource:window.gridData,
                 *   columns:[{field: "OrderID"},{field: "EmployeeID"}],
                 *   sortSettings: {sortedColumns: [{field:"EmployeeID"}] }             
                 * });
                 * &lt;/script&gt;  
                 */

                /**
                 * Define the direction to sort the column.
                 * @remarks
                 * allowSorting must be set as true.
                 * @name ejGrid#sortSettings->sortedColumns->direction 	          
                 * @default -
                 * @type {string}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt;          
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *   dataSource:window.gridData,
                 *   columns:[{field: "OrderID"},{field: "EmployeeID"}],
                 *   sortSettings: {sortedColumns: [{field:"EmployeeID", direction:"descending"}] }                    
                 * });
                 * &lt;/script&gt;  
                 */
                sortedColumns: []
            },
            /**		
             * This property is used to enable the toolbar and add toolbar items.
             * @type {Object}             
             */
            toolbarSettings: /** @lends ejGrid# */ {
                /**		
                 * Enable toolbar for editing action by setting the property as true.
                 * @remarks
                 * We must provide the toolbarItems. See{@link toolbarItems}
                 * If editing options added in toolbar as a toolbar item then we must enable allowEditing, allowDeleting and allowAdding.
                 * @alias ejGrid#toolbarSettings->showToolbar
                 * @default false
                 * @type {boolean}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *    dataSource: window.gridData,
                 *    columns:[{field: "OrderID", isPrimaryKey: true},{field: "EmployeeID"}],
                 *    editSettings: { allowEditing: true },
                 *    toolbarSettings: { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Edit] }
                 * });
                 * &lt;/script&gt; 
                 */
                showToolbar: false,
                /**		
                 * Enable the toolbar with default editing actions. Acceptable toolbarItems are "add", "edit", "delete", "update", "cancel" and "search".   See {@link toolbarItems}
                 * @remarks
                 * We must enable showToolbar property
                 * @alias ejGrid#toolbarSettings->toolbarItems
                 * @default []
                 * @type {enum}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *    dataSource:window.gridData,
                 *    columns:[{field: "OrderID", isPrimaryKey: true},{field: "EmployeeID"}],
                 *    editSettings: { allowDeleting: true, allowEditing: true, allowAdding: true },
                 *    toolbarSettings: { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Add, ej.Grid.ToolBarItems.Edit, ej.Grid.ToolBarItems.Delete, ej.Grid.ToolBarItems.Update, ej.Grid.ToolBarItems.Cancel] }
                 * });
                 * &lt;/script&gt;
                 */
                toolbarItems: [],
                /**		
                 * Enable custom toolbar for the grid.
                 * @remarks
                 * We must enable showToolbar property
                 * @alias ejGrid#toolbarSettings->customToolbarItems
                 * @default []
                 * @type {object}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;style type="text/css" class="cssStyles"&gt;
                 *   .Expand:before
                 *   {
                 *     content:"\e627";
                 *   }
                 * &lt;/style&gt;
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *   dataSource:window.gridData, 
                 *   toolbarSettings:{showToolbar:true,customToolbarItems:["Expand"]}
                 * });
                 * &lt;/script&gt;
                 */
                customToolbarItems: []
            },
            /**		
             * Scrolling is used to adjust the width and height of the scrollbar.
             * @type {Object}
             */
            scrollSettings: /** @lends ejGrid# */
            {
                /**		
                 * Specify the width for the control and the grid automatically displays horizontal scroll bars if needed.   
                 * @remarks
                 * We must enable allowScrolling property
                 * @alias ejGrid#scrollSettings->width
                 * @default 250
                 * @type {number}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *    dataSource:window.gridData,
                 *    allowScrolling: true,
                 *    scrollSettings:{ width:300 }
                 * });
                 * &lt;/script&gt; 
                 */
                width: 250,
                /**		
                 * Specify the height for the control, and the grid automatically displays vertical scroll bars if needed. 
                 * @remarks
                 * We must enable allowScrolling property
                 * @alias ejGrid#scrollSettings->height
                 * @default 0
                 * @type {number}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *    dataSource:window.gridData,
                 *    allowScrolling: true,
                 *    scrollSettings:{ height:100 }
                 * });
                 * &lt;/script&gt; 
                 */
                height: 0,
                /**		
                 * Enable or disable the virtual scrolling behavior of grid.
                 * @remarks
                 * 1.We must enable allowScrolling property
                 * 2.Sets the height and width size
                 * @alias ejGrid#scrollSettings->allowVirtualScrolling
                 * @default false
                 * @type {boolean}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *    dataSource:window.gridData,
                 *    allowScrolling: true,
                 *    scrollSettings:{width:300,height:100,allowVirtualScrolling:true}
                 * });
                 * &lt;/script&gt; 
                 */
                allowVirtualScrolling: false,
                /**		
                 * You can use this property to freeze particular rows in grid at the time of scrolling
                 * @remarks
                 * We must enable allowScrolling property
                 * @alias ejGrid#scrollSettings->frozenRows
                 * @default 0
                 * @type {number}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource:window.gridData,
                 *     allowScrolling: true,               
                 *     scrollSettings:{width:300,height:200,frozenRows:2 }
                 * });
                 * &lt;/script&gt; 
                 */
                frozenRows: 0,
                /**		
                 * You can use this property to freeze particular columns in grid at the time of scrolling.
                 * @remarks
                 * We must enable allowScrolling property
                 * @alias ejGrid#scrollSettings->frozenColumns
                 * @default 0
                 * @type {number}
                 * @example
                 * &lt;div id="Grid"&gt;&lt;/div&gt; 
                 * &lt;script&gt;
                 * $("#Grid").ejGrid({
                 *     dataSource:window.gridData,
                 *     allowScrolling: true,               
                 *     scrollSettings:{width:500,height:100,frozenColumns:2 }
                 * });  
                 * &lt;/script&gt; 
                 */
                frozenColumns: 0
            },
            /**		
             * The summaryRows property is used to define summary processing of a particular column.
             * @remarks
             * We must enable showSummary property
             * @default []
             * @name ejGrid#summaryRows
             * @type {array}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *      dataSource:window.gridData,
             *      showSummary: true,
             *      columns:[{field: "OrderID"},{field: "Freight"}],
             *      summaryRows: [{
             *         title: "Sum",
             *         summaryColumns: [{
             *            summaryType: ej.Grid.SummaryType.Sum,
             *            displayColumn: "Freight",
             *            dataMember: "Freight"
             *         }]
             *      }]                                    
             * });
             * &lt;/script&gt; 
             */

            /**
             * This is used to set the title for the summary rows.
             * @remarks
             * showSummary must be true and summaryRows must be given while using title.
             * @name ejGrid#summaryRows->title 	          
             * @default ""
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *      dataSource:window.gridData,  
             *      showSummary: true,
             *      columns:[{field: "OrderID"},{field: "Freight"}],
             *      summaryRows: [{
             *         title: "Sum",
             *         summaryColumns: [{
             *            summaryType: ej.Grid.SummaryType.Sum,
             *            displayColumn: "Freight",
             *            dataMember: "Freight"
             *         }]
             *      }]                                    
             * });
             * &lt;/script&gt;
             */

            /**
             * If it is enable then while grouping the column, corresponding summary row value is displayed along with the group caption.
             * @remarks
             * showSummary and allowGrouping must be true. summaryRows must be given while using showCaptionSummary.
             * @name ejGrid#summaryRows->showCaptionSummary 	          
             * @default false
             * @type {boolean}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *      dataSource:window.gridData,  
             *      columns:[{field: "OrderID"},{field: "Freight"}],
             *      allowGrouping: true,
             *      showSummary: true,
             *      summaryRows: [{
             *         title: "Sum",
             *         summaryColumns: [{
             *            summaryType: ej.Grid.SummaryType.Sum,
             *            displayColumn: "Freight",
             *            dataMember: "Freight"
             *         }],
             *         showCaptionSummary: true
             *      }]                                    
             * });
             * &lt;/script&gt;           
             */

            /**
             * Enable or disable the display of total summary from the grid.
             * @remarks
             * showSummary and allowGrouping must be true. summaryRows must be given while using showTotalSummary.
             * @name ejGrid#summaryRows->showTotalSummary 	          
             * @default true
             * @type {boolean}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *      dataSource:window.gridData, 
             *      columns:[{field: "OrderID"},{field: "Freight"}],
             *      showSummary: true,
             *      summaryRows: [{
             *         title: "Sum",
             *         summaryColumns: [{
             *            summaryType: ej.Grid.SummaryType.Sum,
             *            displayColumn: "Freight",
             *            dataMember: "Freight"
             *         }],
             *         showTotalSummary: true
             *      }]                                    
             * });
             * &lt;/script&gt; 
             */

            /**
             * Used to add summary columns into the summary rows. 
             * @remarks            
             * showSummary must be true and summaryRows must be given while using summaryColumns.
             * @name ejGrid#summaryRows->summaryColumns 	          
             * @default []
             * @type {object}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *      dataSource:window.gridData, 
             *      columns:[{field: "OrderID"},{field: "Freight"}],
             *      showSummary: true,
             *      summaryRows: [{
             *         title: "Sum",
             *         summaryColumns: [{
             *            summaryType: ej.Grid.SummaryType.Sum,
             *            displayColumn: "Freight",
             *            dataMember: "Freight"
             *         }]
             *      }]                                    
             * });
             * &lt;/script&gt; 
             */

            /**
             * Specify the summary type for the summary column. Acceptable summaryTypes are "average", "minimum", "maximum", "count", "sum", "truecount", "falsecount" and "custom".
             * @remarks            
             * showSummary must be true and summaryRows must be given while using summaryColumns and their properties.
             * @name ejGrid#summaryRows->summaryColumns->summaryType     
             * @default []
             * @type {object}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *      dataSource:window.gridData, 
             *      columns:[{field: "OrderID"},{field: "Freight"}],
             *      showSummary: true,
             *      summaryRows: [{
             *         title: "Sum",
             *         summaryColumns: [{
             *            summaryType: ej.Grid.SummaryType.Sum,
             *            displayColumn: "Freight",
             *            dataMember: "Freight"
             *         }]
             *      }]                                    
             * });
             * &lt;/script&gt; 
             */

            /**
             * Specify the field name to display the summary column. 
             * @remarks            
             * showSummary must be true and summaryRows must be given while using summaryColumns and their properties.
             * @name ejGrid#summaryRows->summaryColumns->displayColumn 	          
             * @default null
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *      dataSource:window.gridData,
             *      columns:[{field: "OrderID"},{field: "Freight"}],
             *      showSummary: true,
             *      summaryRows: [{
             *         title: "Sum",
             *         summaryColumns: [{
             *            summaryType: ej.Grid.SummaryType.Sum,
             *            displayColumn: "Freight",
             *            dataMember: "Freight"
             *         }]
             *      }]                                    
             * });
             * &lt;/script&gt; 
             */

            /**
             * Specify the field name to get the corresponding column values from the data source and display the value in the summary column. 
             * @remarks            
             * showSummary must be true and summaryRows must be given while using summaryColumns and their properties.
             * @name ejGrid#summaryRows->summaryColumns->dataMember 	          
             * @default null
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *      dataSource:window.gridData,
             *      columns:[{field: "OrderID"},{field: "Freight"}],
             *      showSummary: true,
             *      summaryRows: [{
             *         title: "Sum",
             *         summaryColumns: [{
             *            summaryType: ej.Grid.SummaryType.Sum,
             *            displayColumn: "Freight",
             *            dataMember: "Freight"
             *         }]
             *      }]                                    
             * });
             * &lt;/script&gt; 
             */

            /**
             * The specified format is applied to the summary value before it is displayed.  
             * @remarks            
             * showSummary must be true and summaryRows must be given while using summaryColumns and their properties.
             * @name ejGrid#summaryRows->summaryColumns->format 	          
             * @default null
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *      dataSource:window.gridData,
             *      columns:[{field: "OrderID"},{field: "Freight"}],
             *      showSummary: true,
             *      summaryRows: [{
             *         title: "Sum",
             *         summaryColumns: [{
             *            summaryType: ej.Grid.SummaryType.Sum,
             *            displayColumn: "Freight",
             *            dataMember: "Freight",
             *            format: "{0:C2}"
             *         }]
             *      }]                                    
             * });
             * &lt;/script&gt; 
             */

            /**
             * The specified suffix text is added after the summary value. 
             * @remarks            
             * showSummary must be true and summaryRows must be given while using summaryColumns and their properties.
             * @name ejGrid#summaryRows->summaryColumns->suffix 	          
             * @default null
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *      dataSource:window.gridData,
             *      columns:[{field: "OrderID"},{field: "Freight"}],
             *      showSummary: true,
             *      summaryRows: [{
             *         title: "Sum",
             *         summaryColumns: [{
             *            summaryType: ej.Grid.SummaryType.Sum,
             *            displayColumn: "Freight",
             *            dataMember: "Freight",
             *            suffix: "/-"
             *         }]
             *      }]                                    
             * });
             * &lt;/script&gt; 
             */

            /**
             * The specified prefix text is added before the summary value.
             * @remarks            
             * showSummary must be true and summaryRows must be given while using summaryColumns and their properties.
             * @name ejGrid#summaryRows->summaryColumns->prefix 	          
             * @default null
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *      dataSource:window.gridData,
             *      showSummary: true,
             *      summaryRows: [{
             *         title: "Sum",
             *         summaryColumns: [{
             *            summaryType: ej.Grid.SummaryType.Sum,
             *            displayColumn: "Freight",
             *            dataMember: "Freight",
             *            prefix : "Currency:"
             *         }]
             *      }]                                    
             * });
             * &lt;/script&gt; 
             */

            /**
             * The specified custom summary value is displayed in the summary column as a value. The showSummary property must be set as true and the summaryType property must be set as Custom. 
             * @remarks            
             * showSummary must be true and summaryRows must be given while using summaryColumns and their properties.
             * The summaryType property must be set as Custom.
             * @name ejGrid#summaryRows->summaryColumns->customSummaryValue 	          
             * @default null
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *      dataSource:window.gridData,
             *      columns:[{field: "OrderID"},{field: "Freight"}],
             *      showSummary: true,
             *      summaryRows: [{
             *         title: "Sum",
             *         summaryColumns: [{
             *            summaryType: ej.Grid.SummaryType.Custom,
             *            displayColumn: "Freight",
             *            dataMember: "Freight",
             *            customSummaryValue : "Currency"
             *         }]
             *      }]                                    
             * });    
             * &lt;/script&gt; 
             */
            summaryRows: [],
            /**		
             * Align content in the grid control from right to left by setting the property as true.
             * @default false
             * @type {boolean}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   enableRTL:true,
             * });
             * &lt;/script&gt; 
             */
            enableRTL: false,
            /**		
             * Enables or disables enableAltRow behavior in the grid.
             * @default true
             * @type {boolean}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   enableAltRow:true,
             * });
             * &lt;/script&gt; 
             */
            enableAltRow: true,
            currentViewData: null,
            /**		
             * Render the detail row for the corresponding expanded master row. 
             * @default null
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script id="templateData" type="text/x-jsrender"&gt;
             * &lt;table&gt;
             * &lt;tr&gt;
             * &lt;td&gt;
             * &lt;img src="styles/images/Employees/{{:EmployeeID}}.png" alt="{{:EmployeeID}}"/&gt;
             * &lt;/td&gt;
             * &lt;/tr&gt;
             * &lt;/table&gt;
             * &lt;/script&gt;
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   detailsTemplate:"#templateData",
             *   detailsDataBound: "detailGridData",
             * });             
             * &lt;/script&gt;             
             */
            detailsTemplate: null,
            /**		
             * Render the template rows in the grid. The template row must be a table row. That table row must have the JavaScript render binding format ({{:columnName}}) then the grid data source binds the data to the corresponding table row of the template.
             * @default null
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script id="templateData" type="text/x-jsrender"&gt;
             * &lt;tr&gt;
             * &lt;td&gt;
             * &lt;img src="styles/images/Employees/{{:EmployeeID}}.png" alt="{{:EmployeeID}}"/&gt;
             * &lt;/td&gt;
             * &lt;td&gt;
             * {{:EmployeeID}}
             * &lt;/td&gt;
             * &lt;/tr&gt;
             * &lt;/script&gt;
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *  dataSource:window.gridData,
             *   rowTemplate:"#templateData",
             *   columns:[{headerText:"Employeephoto"},{field:"EmployeeID",headerText:"EmployeeID"}],
             * });
             * &lt;/script&gt;
             */
            rowTemplate: null,
            /**		
             * Triggered detail template row is initialized.
             * @remarks
             * Template must be bind to detailsTemplate property while using this event
             * @event
			 * @name ejGrid#detailsDataBound 	
			 * @param {Object} argument Event parameters from grid              
			 * @param {boolean}  argument.cancel Returns the cancel option value.
			 * @param {object}  argument.detailsElement Returns details row element.
             * @param {object}  argument.data Returns the details row data.
			 * @param {object}  argument.model Returns the grid model.
			 * @param {string}  argument.type Returns the name of the event.
			 * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt;
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    detailsDataBound: function (args){}
             * });
             * &lt;/script&gt;
             */
            detailsDataBound: null,
            /**    
             * Triggered every time a request is made to access row information, element and data.
             * @event
             * @name ejGrid#rowDataBound 	
             * @param {Object} argument Event parameters from grid              
             * @param {object}  argument.row Returns grid row.
             * @param {boolean}  argument.cancel Returns the cancel option value.
             * @param {object}  argument.data Returns current row record object (JSON).
             * @param {object} argument.foreignKeyData Returns the foreign key record object (JSON).
             * @param {object}  argument.model Returns the grid model.
             * @param {string}  argument.type Returns the name of the event.
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt;
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    rowDataBound: function (args){}
             * });
             * &lt;/script&gt;
             */
            rowDataBound: null,
            /**    
             * Triggered every time a request is made to access particular cell information, element and data.
             * @event
             * @name ejGrid#queryCellInfo 	
             * @param {Object} argument Event parameters from grid              
             * @param {object}  argument.cell Returns grid cell.
             * @param {boolean}  argument.cancel Returns the cancel option value.
             * @param {object}  argument.data Returns current row record object (JSON).
             * @param {string}  argument.text Returns the text value in the cell.
             * @param {object} argument.column Returns the column object.
             * @param {object} argument.foreignKeyData Returns the foreign key record object (JSON).
             * @param {object}  argument.model Returns the grid model.
             * @param {string}  argument.type Returns the name of the event.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    queryCellInfo: function (args){}
             * });
             * &lt;/script&gt;
             */
            queryCellInfo: null,
            /**    
             * Triggered when the grid is rendered completely.
             * @event
             * @name ejGrid#create 	
             * @param {Object} argument Event parameters from grid             
             * @param {boolean}  argument.cancel Returns the cancel option value.
             * @param {object}  argument.model Returns the grid model.
             * @param {string}  argument.type Returns the name of the event.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt;
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    create: function (args){}
             * });
             * &lt;/script&gt;
             */
            create: null,
            /**    
             * Triggered for every grid action before its starts.
             * @event
             * @name ejGrid#actionBegin              
             * @param {Object} argument Event parameters when grid is initialized:          
             * @param {boolean}  argument.cancel Returns the cancel option value.
             * @param {object}  argument.model Returns the grid model.
             * @param {string}  argument.type Returns the name of the event.
             
             * @param {Object} argument Event parameters when grid paging action starts:
             * @param {boolean}  argument.cancel Returns the cancel option value.
             * @param {number} argument.currentPage  Returns the current selected page number.
             * @param {number} argument.previousPage  Returns the previous selected page number.
             * @param {number} argument.endIndex Returns the end row index of that current page.
             * @param {object}  argument.model Returns the grid model.
             * @param {string}  argument.requestType Returns request type.
             * @param {number} argument.startIndex  Returns the start row index of that current page.
             * @param {string}  argument.type Returns the name of the event.
 
             * @param {Object} argument Event parameters when grid sorting action starts:
             * @param {boolean}  argument.cancel Returns the cancel option value.
             * @param {string}  argument.columnName Returns the current grouped column field name.
             * @param {object}  argument.model Returns the grid model.
             * @param {string}  argument.requestType Returns request type.
             * @param {string}  argument.type Returns the name of the event. 
             * @param {string}  argument.columnSortDirection  Returns the column sort direction.
 
             * @param {Object} argument Event parameters when grid grouping action starts:
             * @param {boolean}  argument.cancel Returns the cancel option value.
             * @param {string}  argument.columnName Returns the current grouped column field name.
             * @param {object}  argument.model Returns the grid model.
             * @param {string}  argument.requestType Returns request type.
             * @param {string}  argument.type Returns the name of the event.        
 
             * @param {Object} argument Event parameters when grid record editing action starts:
             * @param {boolean}  argument.cancel Returns the cancel option value.
             * @param {object}  argument.row  Returns current edited row.
             * @param {object}  argument.model Returns the grid model.
             * @param {string} argument.originalEventType Returns the current action event type.
             * @param {string} argument.primaryKey Returns primary key.
             * @param {string} argument.primaryKeyValue Returns primary key value.
             * @param {string}  argument.requestType Returns request type.
             * @param {number}  argument.rowIndex Returns the edited row index.
             * @param {string}  argument.type Returns the name of the event.
 
             * @param {Object} argument Event parameters when grid record save action starts:
             * @param {boolean}  argument.cancel Returns the cancel option value.
             * @param {object}  argument.data Returns the record object (JSON).
             * @param {object}  argument.foreignKeyData Returns the foreign key record object (JSON).
             * @param {object}  argument.model Returns the grid model.
             * @param {number}  argument.selectedRow Returns the selected row index.
             * @param {string}  argument.requestType Returns request type.
             * @param {string}  argument.type Returns the name of the event. 
 
             * @param {Object} argument Event parameters when grid record cancel action starts:
             * @param {boolean}  argument.cancel Returns the cancel option value.
             * @param {object}  argument.model Returns the grid model.
             * @param {string}  argument.requestType Returns request type.
             * @param {string}  argument.type Returns the name of the event. 
 
             * @param {Object} argument Event parameters when grid record delete action starts:
             * @param {boolean}  argument.cancel Returns the cancel option value.
             * @param {object}  argument.data Returns the record object (JSON).
             * @param {object}  argument.foreignKeyData Returns the foreign key record object (JSON).
             * @param {object}  argument.model Returns the grid model.
             * @param {string}  argument.requestType Returns request type.
             * @param {object}  argument.tr Returns selected row for delete.
             * @param {string}  argument.type Returns the name of the event.
 
             * @param {Object} argument Event parameters when add new record action starts:
             * @param {boolean}  argument.cancel Returns the cancel option value.
             * @param {object}  argument.data Returns the record object (JSON).
             * @param {object}  argument.model Returns the grid model.
             * @param {string}  argument.requestType Returns request type.
             * @param {string}  argument.type Returns the name of the event.
 
             * @param {Object} argument Event parameters when grid filtering action starts:
             * @param {boolean}  argument.cancel Returns the cancel option value.
             * @param {object}  argument.currentFilteringColumn Returns current filtering column field name.
             * @param {object}  argument.filterCollection Returns filter details.
             * @param {object}  argument.model Returns the grid model.
             * @param {string}  argument.requestType Returns request type.
             * @param {string}  argument.type Returns the name of the event.
 
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    actionBegin: function (args){}
             * });
             * &lt;/script&gt;
             */
            actionBegin: null,
            /**    
             * Triggered for every grid action success event.
             * @event
             * @name ejGrid#actionComplete 	
             * @param {Object} argument Arguments in actionComplete when grid is initialized.     
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.requestType Returns request type.
             * @param {string} argument.type Returns the name of the event.
             
             * @param {Object} argument Arguments in actionComplete after grid paging action is completed.
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {number} argument.currentPage Returns the current selected page number.
             * @param {number} argument.previousPage Returns the previous selected page number.
             * @param {number} argument.endIndex Returns the end row index of that current page.
             * @param {object} argument.model Returns the grid model.				
             * @param {string} argument.originalEventType Returns current action event type.
             * @param {string} argument.requestType Returns request type.
             * @param {number} argument.startIndex Returns the start row index of the current page.
             * @param {object} argument.target Returns grid element.
             * @param {string} argument.type Returns the name of the event.
             
             * @param {object} argument Arguments in actionComplete after grid sorting action is completed.				
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {string} argument.columnName Returns the current sorted column field name.
             * @param {string} argument.columnSortDirection Returns the column sort direction.
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.originalEventType Returns current action event type.
             * @param {string} argument.requestType Returns request type.
             * @param {object} argument.target Returns grid element.
             * @param {string} argument.type Returns the name of the event.
             
             * @param {object} argument Arguments in actionComplete after grid grouping action is completed.
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {string} argument.columnName Returns the current grouped column field name.
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.originalEventType Returns current action event type.
             * @param {string} argument.requestType Returns request type.
             * @param {object} argument.target Returns grid element.
             * @param {string} argument.type Returns the name of the event.
             
             * @param {object} argument Arguments in actionComplete after grid record editing action is completed.
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.row Returns current edited row.
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.originalEventType Returns current action event type.
             * @param {string} argument.primaryKey Returns primary key.
             * @param {string} argument.primaryKeyValue Returns primary key value.
             * @param {string} argument.requestType Returns request type.
             * @param {number} argument.rowIndex Returns the edited row index.
             * @param {object} argument.target Returns grid element.
             * @param {string} argument.type Returns the name of the event.
             
             * @param {object} argument Arguments in actionComplete after grid record save action is completed.
             * @param {object} argument.cancel Returns the cancel option value.
             * @param {object} argument.data Returns the record object (JSON).
             * @param {number} argument.selectedRow Returns the selectedRow index.
             * @param {object} argument.foreignKeyData Returns the foreign key record object (JSON).
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.originalEventType Returns current action event type.
             * @param {string} argument.requestType Returns request type.
             * @param {object} argument.target Returns grid element.
             * @param {string} argument.type Returns the name of the event.
             
             * @param {object} argument Arguments in actionComplete after grid record cancel action is completed.
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.originalEventType Returns current action event type.
             * @param {string} argument.requestType Returns request type.
             * @param {object} argument.target Returns grid element.
             * @param {string} argument.type Returns the name of the event.
             
             * @param {object} argument Arguments in actionComplete after grid record delete action is completed.
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.data Returns the record object (JSON).
             * @param {object} argument.foreignKeyData Returns the foreign key record object (JSON).
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.originalEventType Returns current action event type.
             * @param {string} argument.requestType Returns request type.
             * @param {object} argument.target Returns grid element.
             * @param {object} argument.tr Returns selected row for delete.
             * @param {string} argument.type Returns the name of the event.
             
             * @param {object} argument Arguments in actionComplete after add new record action is completed.
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.data Returns empty record object (JSON).
             * @param {object} argument.foreignKeyData Returns the foreign key record object (JSON).
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.originalEventType Returns current action event type.
             * @param {string} argument.requestType Returns request type.
             * @param {object} argument.target Returns grid element.
             * @param {string} argument.type Returns the name of the event.
             
             * @param {object} argument Arguments in actionComplete after grid filtering action is completed.
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {string} argument.currentFilteringColumn Returns current filtering column field name.
             * @param {object} argument.filterCollection Returns filter details.
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.originalEventType Returns current action event type.
             * @param {string} argument.requestType Returns request type.
             * @param {object} argument.target Returns grid element.
             * @param {string} argument.type Returns the name of the event.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    actionComplete: function (args) {}
             * }); 
             * &lt;/script&gt;
             */
            actionComplete: null,
            /**    
             * Triggered before the record is going to be edited.
             * @remarks
             * allowEditing and allowSelection must be set as true
             * @event
             * @name ejGrid#beginEdit 	
             * @param {Object} argument Arguments when beginEdit event is triggered.  
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.row Returns the current edited row.
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.primaryKey Returns primary key.
             * @param {string} argument.primaryKeyValue Returns primary key value.
             * @param {number} argument.rowIndex Returns the edited row index.
             * @param {string} argument.type Returns the name of the event.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    beginEdit: function (args) {}
             * });
             * &lt;/script&gt;
             */
            beginEdit: null,
		    /**    
             * Triggered after the record is edited.
             * @event
             * @name ejGrid#endEdit 	
             * @param {Object} argument Arguments when endEdit event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns modified data.             
             * @param {string} argument.type Returns the name of the event.
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    endEdit: function (args) {}
             * });
             * &lt;/script&gt;
             */
            endEdit: null,
	        /**    
             * Triggered after the record is added.
             * @event
             * @name ejGrid#endAdd 	
             * @param {Object} argument Arguments when endAdd event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns added data.
             * @param {string} argument.type Returns the name of the event.             
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    endAdd: function (args) {}
             * });
             * &lt;/script&gt;
             */
            endAdd: null,
		    /**    
             * Triggered after the record is deleted.
             * @event
             * @name ejGrid#endDelete 	
             * @param {Object} argument Arguments when endDelete event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns deleted data.
             * @param {string} argument.type Returns the name of the event.             
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    endDelete: function (args) {}
             * });
             * &lt;/script&gt;
             */
            endDelete: null,
			 /**    
             * Triggered before the batch add.
             * @event
             * @name ejGrid#beforeBatchAdd 	
             * @param {Object} argument Arguments when beforeBatchAdd event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns deleted data.
             * @param {string} argument.type Returns the name of the event.
             * @param {object} argument.defaultData Returns the default data object.
             * @param {string} argument.primaryKey Returns primaryKey.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    beforeBatchAdd: function (args) {}
             * });
             * &lt;/script&gt;
             */
            beforeBatchAdd: null,
            /**    
             * Triggered before the batch save.
             * @event
             * @name ejGrid#beforeBatchSave 	
             * @param {Object} argument Arguments when beforeBatchSave event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns deleted data.
             * @param {string} argument.type Returns the name of the event.
             * @param {object} argument.batchChanges Returns the changed record object.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    beforeBatchSave: function (args) {}
             * });
             * &lt;/script&gt;
             */
            beforeBatchSave: null,
            /**    
             * Triggered before the batch delete.
             * @event
             * @name ejGrid#beforeBatchDelete 	
             * @param {Object} argument Arguments when beforeBatchDelete event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns deleted data.
             * @param {string} argument.type Returns the name of the event.
             * @param {string} argument.primaryKey Returns primaryKey.
             * @param {number} argument.rowIndex Returns the row index.
             * @param {object} argument.rowData Returns the row data.
             * @param {object} argument.row Returns the row element.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    beforeBatchDelete: function (args) {}
             * });
             * &lt;/script&gt;
             */
            beforeBatchDelete: null,
            /**    
             * Triggered when record batch add.
             * @event
             * @name ejGrid#batchAdd 	
             * @param {Object} argument Arguments when batchAdd event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns deleted data.
             * @param {string} argument.type Returns the name of the event.
             * @param {object} argument.columnObject Returns the column object.
             * @param {number} argument.columnIndex Returns the column index.
             * @param {object} argument.row Returns the row element.
             * @param {object} argument.primaryKey Returns the primaryKey.            
             * @param {object} argument.cell Returns the cell object.   
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    batchAdd: function (args) {}
             * });
             * &lt;/script&gt;
             */
            batchAdd: null,
            /**    
             * Triggered when record batch delete.
             * @event
             * @name ejGrid#batchDelete 	
             * @param {Object} argument Arguments when batchDelete event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns deleted data.
             * @param {string} argument.type Returns the name of the event.              
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    batchDelete: function (args) {}
             * });
             * &lt;/script&gt;
             */
            batchDelete: null,
            /**    
             * Triggered when record cell save.
             * @event
             * @name ejGrid#cellSave 	
             * @param {Object} argument Arguments when cellSave event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns deleted data.
             * @param {string} argument.type Returns the name of the event.
             * @param {string} argument.columnName Returns the column name.
             * @param {string} argument.value Returns the cell value.
             * @param {object} argument.rowData Returns the row data object.
             * @param {string} argument.previousValue Returns the previous value of the cell.
             * @param {object} argument.columnObject Returns the column object.
             * @param {object} argument.cell Returns the cell object.
             * @param {boolean} argument.isForeignKey Returns isForeignKey option value.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    cellSave: function (args) {}
             * });
             * &lt;/script&gt;
             */
            cellSave: null,            
            /**    
             * Triggered when record cell edit.
             * @event
             * @name ejGrid#cellEdit 	
             * @param {Object} argument Arguments when cellEdit event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns deleted data.
             * @param {string} argument.type Returns the name of the event.
             * @param {object} argument.validationRules Returns the validation rules.
             * @param {string} argument.columnName Returns the column name.
             * @param {string} argument.value Returns the cell value.
             * @param {object} argument.rowData Returns the row data object.
             * @param {string} argument.previousValue Returns the previous value of the cell.
             * @param {object} argument.columnObject Returns the column object.
             * @param {object} argument.cell Returns the cell object.
             * @param {boolean} argument.isForeignKey Returns isForeignKey option value.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    cellEdit: function (args) {}
             * });
             * &lt;/script&gt;
             */
            cellEdit: null,
            /**    
             * Triggered when column resize start.
             * @event
             * @name ejGrid#resizeStart 	
             * @param {Object} argument Arguments when resizeStart event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns deleted data.
             * @param {string} argument.type Returns the name of the event.             
             * @param {number} argument.columnIndex Returns the column index.            
             * @param {object} argument.column Returns the column object.            
             * @param {object} argument.target Returns the grid object.
             * @param {number} argument.oldWidth Returns the old width value.            
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    resizeStart: function (args) {}
             * });
             * &lt;/script&gt;
             */
            resizeStart: null,
            /**    
             * Triggered when column resize end.
             * @event
             * @name ejGrid#resizeEnd 	
             * @param {Object} argument Arguments when resizeEnd event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns deleted data.
             * @param {string} argument.type Returns the name of the event.             
             * @param {number} argument.columnIndex Returns the column index.            
             * @param {object} argument.column Returns the column object.            
             * @param {object} argument.target Returns the grid object.
             * @param {number} argument.oldWidth Returns the old width value. 
             * @param {number} argument.newWidth Returns the new width value.
             * @param {number} argument.extra Returns the extra width value.            
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    resizeEnd: function (args) {}
             * });
             * &lt;/script&gt;
             */
            resizeEnd: null,
            /**    
             * Triggered after column resized.
             * @event
             * @name ejGrid#resized 	
             * @param {Object} argument Arguments when resized event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns deleted data.
             * @param {string} argument.type Returns the name of the event.             
             * @param {number} argument.columnIndex Returns the column index.            
             * @param {object} argument.column Returns the column object.            
             * @param {object} argument.target Returns the grid object.
             * @param {number} argument.oldWidth Returns the old width value. 
             * @param {number} argument.newWidth Returns the new width value.                      
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    resized: function (args) {}
             * });
             * &lt;/script&gt;
             */
            resized: null,
            /**    
             * Triggered initial load.
             * @event
             * @name ejGrid#load 	
             * @param {Object} argument Arguments when load event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns deleted data.
             * @param {string} argument.type Returns the name of the event.                                       
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    load: function (args) {}
             * });
             * &lt;/script&gt;
             */
            load: null,
            /**    
             * Triggered when grid going to destroy.
             * @event
             * @name ejGrid#destroy 	
             * @param {Object} argument Arguments when destroy event is triggered.  
             * @param {object} argument.model Returns the grid model.
		     * @param {object} argument.data Returns deleted data.
             * @param {string} argument.type Returns the name of the event.                                       
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    destroy: function (args) {}
             * });
             * &lt;/script&gt;
             */
            destroy: null,
            /**    
             * Triggered before the row is going to be selected.
             * @remarks
             * allowSelection must be set as true
             * @event
             * @name ejGrid#rowSelecting
             * @param {Object} argument Arguments when rowSelecting event is triggered.  
             * @param {number} argument.rowIndex Returns the selected row index value.
             * @param {object} argument.row Returns the selected row element.
             * @param {object} argument.data Returns current record object (JSON).
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.type Returns the name of the event.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    rowSelecting: function (args) {}
             * });
             * &lt;/script&gt;
             */
            rowSelecting: null,
            /**    
             * Triggered after the row is selected.
             * @remarks
             * allowSelection must be set as true
             * @event
             * @name ejGrid#rowSelected 	
             * @param {Object} argument Arguments when rowSelected event is triggered.  
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.data Returns current record object (JSON).
             * @param {object} argument.foreignKeyData Returns the foreign key record object (JSON).
             * @param {number} argument.rowIndex Returns the row index of the selected row.
             * @param {object} argument.row Returns the current selected row.
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.type Returns the name of the event.
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    rowSelected: function (args) {}
             * });
             * &lt;/script&gt;
             */
            rowSelected: null,
            /**    
			 * Triggered when column dragging begins.
			 * @event
             * @remarks
             * allowGrouping or allowReordering must be set as true
			 * @name ejGrid#columnDragStart 	
			 * @param {Object} argument Arguments when columnDragStart event is triggered.  
			 * @param {boolean} argument.cancel Returns the cancel option value.
			 * @param {object} argument.draggableType Returns draggable element type.
             * @param {object} argument.column Returns the draggable column object.
			 * @param {object} argument.model Returns the grid model.
			 * @param {object} argument.target Returns drag start element.
			 * @param {string} argument.type Returns the name of the event.
			 * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
			 * $("#Grid").ejGrid({
			 *     columnDragStart: function (args) {}
			 * });
             * &lt;/script&gt;
			 */
            columnDragStart: null,
            /**    
             * Triggered when the column is being dragged.
             * @remarks
             * allowGrouping or allowReordering must be set as true
             * @event
             * @name ejGrid#columnDrag 	
             * @param {Object} argument Arguments when columnDrag event is triggered.  
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.draggableType Returns draggable element type.
             * @param {object} argument.column Returns the draggable column object.
             * @param {object} argument.model Returns the grid model.
             * @param {object} argument.target Returns target elements based on mouse move position.
             * @param {string} argument.type Returns the name of the event.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    columnDrag: function (args) {}
             * });
             * &lt;/script&gt;
             */
            columnDrag: null,
            /**    
             * Triggered when the column is dropped.
             * @remarks
             * allowGrouping or allowReordering must be set as true
             * @event
             * @name ejGrid#columnDrop 	
             * @param {Object} argument Arguments when columnDrop event is triggered.  
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.draggableType Returns draggable element type.
             * @param {object} argument.column Returns the draggable column object.
             * @param {object} argument.model Returns the grid model.
             * @param {object} argument.target Returns dropped dragged element.
             * @param {string} argument.type Returns the name of the event.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt;
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *  columnDrop: function (args) {}
             * });
             * &lt;/script&gt;
             */
            columnDrop: null,
            /**    
             * Triggered when record is clicked.
             * @remarks
             * allowSelection must be set as true
             * @event
             * @name ejGrid#recordClick 	
             * @param {Object} argument Arguments when recordClick event is triggered.  
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.data Returns current record object (JSON).
             * @param {number} argument.rowIndex Returns the row index of the selected row.
             * @param {object} argument.row Returns the current selected row.
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.type Returns the name of the event.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    recordClick: function (args) {}
             * });
             * &lt;/script&gt;
             */
            recordClick: null,
            /**    
             * Triggered when record is double clicked.
             * @remarks
             * allowSelection must be set as true
             * @event
             * @name ejGrid#recordDoubleClick 	
             * @param {Object} argument Arguments when recordDoubleClick event is triggered.  
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.data Returns current record object (JSON).
             * @param {number} argument.rowIndex Returns the row index of the selected row.
             * @param {object} argument.row Returns the current selected row.
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.type Returns the name of the event.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    recordDoubleClick: function (args) {}
             * });
             * &lt;/script&gt;
             */
            recordDoubleClick: null,
            /**    
             * Triggered when right clicked on grid element.
             * @event
             * @name ejGrid#rightClick 	
             * @param {Object} argument Arguments when rightClick event is triggered.  
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.currentData Returns current record object (JSON).
             * @param {number} argument.rowIndex Returns the row index of the selected row.
             * @param {object} argument.row Returns the current selected row.
             * @param {object} argument.data Returns the selected row data object.
             * @param {number} argument.cellIndex Returns the cell index of the selected cell.
             * @param {string} argument.cellValue Returns the cell value.
             * @param {object} argument.cell Returns the cell object.
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.type Returns the name of the event.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    rightClick: function (args) {}
             * });
             * &lt;/script&gt;
             */
            rightClick: null,
            /**    
             * Triggered when detail template row is clicked to collapse.
             * @remarks
             * detailsTemplate and detailsDataBound must be specified.
             * @event
             * @name ejGrid#detailsCollapse 	
             * @param {Object} argument Arguments when detailsCollapse event is triggered.  
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.detailsRow Returns detail row element.
             * @param {object} argument.masterData Returns master row of detail row record object (JSON).
             * @param {object} argument.foreignKeyData Returns the foreign key record object (JSON).
             * @param {object} argument.masterRow Returns master row element.
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.type Returns the name of the event.
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    detailsCollapse: function (args) {}
             * });
             * &lt;/script&gt;
             */
            detailsCollapse: null,
            /**    
             * Triggered when detail template row is clicked to expand.
             * @remarks
             * detailsTemplate and detailsDataBound must be specified.
             * @event
             * @name ejGrid#detailsExpand 	
             * @param {Object} argument Arguments when detailsExpand event is triggered.  
             * @param {boolean} argument.cancel Returns the cancel option value.
             * @param {object} argument.detailsRow Returns detail row element.
             * @param {object} argument.masterData Returns master row of detail row record object (JSON).
             * @param {object} argument.foreignKeyData Returns the foreign key record object (JSON).
             * @param {object} argument.masterRow Returns master row element.
             * @param {object} argument.model Returns the grid model.
             * @param {string} argument.type Returns the name of the event.
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *    detailsExpand: function (args) {}
             * });
             * &lt;/script&gt;
             */
            detailsExpand: null,
            /**    
			 * Triggered when toolbar item is clicked in grid.
             * @remarks
             * showToolbar must be set as true and also add the toolbarItems.
			 * @event
			 * @name ejGrid#toolBarClick 	
			 * @param {Object} argument Arguments when toolBarClick event is triggered.  
			 * @param {boolean} argument.cancel Returns the cancel option value.
			 * @param {object} argument.currentTarget Returns the current item.
			 * @param {object} argument.model Returns the grid model.
			 * @param {boolean} argument.status Returns the status of toolbar item which denotes its enabled state
			 * @param {object} argument.target Returns the target item.
			 * @param {string} argument.type Returns the name of the event.
			 * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
			 * $("#Grid").ejGrid({
			 *    toolbarClick: function (args) {}
			 * });
             * &lt;/script&gt;
			 */
            toolbarClick: null,

            /**		
             * It is used to define the collection of columns to bind grid
             * @name ejGrid#columns 
             * @default []
             * @type {array}
             * @example 
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData
             * });
             * var value = $("#Grid").ejGrid("option", "columns");
             * &lt;/script&gt; 
             */

            /**
             * This is used to map the Column name with the field name of the dataSource.
             * @remarks
             * We must need to specify the field property of the column because the columns which are specified in the field property is only bound to the grid.
             * @name ejGrid#columns->field 	          
             * @default ""
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   columns:[{field:"OrderID"}]
             * });
             * &lt;/script&gt; 
             */

            /**
			 * The headerText property is used to declare the title of that particular column.
             * @remarks
             * It is optional if the headerText is not mentioned then it will consider the field name as headerText
             * @name ejGrid#columns->headerText 	          
             * @default ""
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   columns:[{field:"OrderID",headerText:"Order ID"},{field:"CustomerID",headerText:"Customer ID"}]
             * });
             * &lt;/script&gt; 
			 */

            /**
			 * Enables or disables grouping for a particular column.
             * @remarks
             * It is optional if we need to disable the grouping behaviour for particular column then set this property as false.
             * @name ejGrid#columns->allowGrouping 	          
             * @default true
             * @type {boolean}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   allowGrouping:true,
             *   columns:[{field:"OrderID"},{field:"CustomerID",allowGrouping:false},{field:"ShipCity"}]
             * });
             * &lt;/script&gt; 
			 */

            /**
             * Enables or disables filtering for a particular column.
             * @remarks
             * It is optional if we need to disable the filtering behaviour for particular column then set this property as false.
             * @name ejGrid#columns->allowFiltering 	          
             * @default true
             * @type {boolean}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   allowFiltering:true,
             *   columns:[{field:"OrderID"},{field:"CustomerID",allowFiltering:false},{field:"ShipCity"}]
             * });
             * &lt;/script&gt; 
             */

            /**
             * Enables or disables sorting for a particular column.
             * @remarks
             * It is optional if we need to disable the sorting behaviour for particular column then set this property as false.
             * @name ejGrid#columns->allowSorting 	          
             * @default true
             * @type {boolean}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   allowSorting:true,
             *   columns:[{field:"OrderID"},{field:"CustomerID",allowSorting:false},{field:"ShipCity"}] 
             * });
             * &lt;/script&gt; 
             */

            /**
             * Enables or disables editing for a particular column.
             * @remarks
             * It is optional if we need to disable the editing behaviour for particular column then set this property as false.
             * @name ejGrid#columns->allowEditing 	          
             * @default true
             * @type {boolean}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   editSettings:{allowEditing:true},
             *   columns:[{field:"OrderID"},{field:"CustomerID",allowEditing:false},{field:"ShipCity"}] 
             * });
             * &lt;/script&gt; 
             */

            /**
             * This enables or disables whether a particular column is unbound to grid columns.
             * @remarks
             * If we need to bind the column to the grid which is not in the datasource then we must enable isUnBound property.
             * There is no need to specify field property if the column is unBound.
             * @name ejGrid#columns->isUnbound 	          
             * @default false
             * @type {boolean}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   columns:[{field:"OrderID",isUnbound:false},{field:"CustomerID"},{field:"ShipCity",headerText:"ShipCity"}]
             * });
             * &lt;/script&gt; 
             */

            /**
             * Enables or disables the column template for a particular column.
             * @remarks
             * Need to bind the templateID, if the columnTemplate is set as true.
             * @name ejGrid#columns->template 	          
             * @default false
             * @type {boolean}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script id="columnTemplate" type="text/x-jsrender"&gt;
             * &lt;img src="styles/images/Employees/{{:EmployeeID}}.png" alt="{{:EmployeeID}}"/&gt;
             * &lt;/script&gt;
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *  dataSource:window.gridData,
             *  columns:[{headerText:"Employee",template:true,templateID:"#columnTemplate"},{field:"EmployeeID"}]
             * });
             * &lt;/script&gt;
             */

            /**
             * This defines the edit type of a particular column. See {@link editingType}
             * @remarks
             * allowEditing must be set as true.
             * It is optional.
             * @name ejGrid#columns->editType 	          
             * @default ej.Grid.EditingType.String
             * @type {enum}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   editSettings:{allowEditing:true},
             *   columns:[{field:"OrderID"},{field:"CustomerID"},{field:"Freight",editType:ej.Grid.EditingType.Numeric, editParams: { decimalCount: 2 }}]
             * });
             * &lt;/script&gt; 
             */

            /**
             * This defines the text alignment of a particular column cell value. See {@link textAlign}
             * @remarks
             * It is optional.
             * @name ejGrid#columns->textAlign 	          
             * @default ej.TextAlign.Left
             * @type {enum}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   columns:[{field:"OrderID",textAlign:ej.TextAlign.Center},{field:"CustomerID",textAlign:ej.TextAlign.Right},{field:"ShipCity"}]
             * });
             * &lt;/script&gt; 
             */

            /**
             * This declares a particular column as the primary key of the grid. 
             * @remarks
             * When editing is enable then we must set isPrimaryKey property as true for the primary key column.
             * @name ejGrid#columns->isPrimaryKey 	          
             * @default false
             * @type {boolean}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({             
             *   dataSource:window.gridData,
             *   editSettings:{allowEditing:true},
             *   columns:[{field:"OrderID",isPrimaryKey:true},{field:"CustomerID"},{field:"ShipCity"}]
             * });
             * &lt;/script&gt; 
             */

            /**
             * This defines that a particular column has an identity in the database.             
             * @name ejGrid#columns->isIdentity 	          
             * @default false
             * @type {boolean}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   columns:[{field:"OrderID"},{field:"CustomerID",isIdentity:true},{field:"ShipCity"}]
             * });
             * &lt;/script&gt; 
             */

            /**
             * Visible is used to hide or display a particular column during grid initialize.
             * @remarks
             * It is optional.
             * @name ejGrid#columns->visible 	          
             * @default true
             * @type {boolean}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   columns:[{field:"OrderID"},{field:"CustomerID",visible:false},{field:"ShipCity"}]
             * });
             * &lt;/script&gt; 
             */

            /**
			 * It is used to bind the external datasource to the particular column when columnEditType as "dropdownedit" and also it is used to bind the datasource to the foreign key column while editing the grid. 
             * //Where data is array of JSON objects of text and value for the drop-down and array of JSON objects for foreign key column.
             * @remarks
             * We must specify the dataSource property.
             * @name ejGrid#columns->dataSource 	          
             * @default null
             * @type {array}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt;  
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   columns:[{field:"OrderID"},{field:"CustomerID",visible:false},{field:"ShipCity"}]
             * });
             * &lt;/script&gt;
             */

            /**
             * This is used to provide custom css for an individual column.
             * @name ejGrid#columns->cssClass 	          
             * @default -
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;style class="temp"&gt;
             * .temp{
             * color:green;}
             * &lt;/style&gt;
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   columns:[{field:"OrderID"},{field:"CustomerID",cssClass:"temp"},{field:"ShipCity"}]
             * });
             * &lt;/script&gt; 
             */

            /**
             * This is used to provide the default value for a column. This can be used at the time of editing.
             * @remarks
             * It is optional.allowAdding must be true while using this property.
             * @name ejGrid#columns->defaultValue 	          
             * @default -
             * @type {string/number/boolean/date}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt;          
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   editSettings: {allowAdding: true},
             *   toolbarSettings: { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Add] },
             *   columns:[{field:"OrderID"},{field:"CustomerID"},{field:"ShipCity",defaultValue:"ABC"}]
             * });
             * &lt;/script&gt;
             */

            /**
			 * An element’s ID which will be used for header template rendering.
             * @remarks
             * It is optional.
             * @name ejGrid#columns->headerTemplateID 	          
             * @default null
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;div id="customerTemplate"&gt;
             * &lt;span class="e-userlogin e-icon headericon"&gt;&lt;/span&gt;
             *  CUS ID
             * &lt;/div&gt;
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   columns:[{field:"OrderID",headerTemplateID: "#customerTemplate"},{field:"CustomerID"},{field:"ShipCity"}]
             * });
             * &lt;/script&gt;
             */

            /**
			 * This is used to define the width for a particular column in the grid.
             * @remarks
             * It is optional.
             * @name ejGrid#columns->width 	          
             * @default -
             * @type {number}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt;          
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   columns:[{field:"OrderID",width:50},{field:"CustomerID",width:60},{field:"ShipCity",width:90}]
             * });
             * &lt;/script&gt;
             */

            /**
             * Used to set foreign key field name.
             * @remarks
             * It is optional. If the foreignKeyField name is not specified then it will take the field name from the "field" property.
             * We must specify the data source for column dataSource property
             * @name ejGrid#columns->foreignKeyField  	          
             * @default null
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt;          
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   columns:[{field:"OrderID"},{field:"EmployeeID",foreignKeyField:"EmployeeID",foreignKeyValue:"FirstName",headerText:"FirstName",dataSource:window.employeeData },{field:"ShipCity"}]
             * });
             * &lt;/script&gt;
             */

            /**
             * Based on the foreignKeyField the corresponding foreignKeyValue is displayed in the grid. 
             * @remarks
             * We must specify the data source for column dataSource property
             * @name ejGrid#columns->foreignKeyValue  	          
             * @default null
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt;  
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   columns:[{field:"OrderID"},{field:"EmployeeID",foreignKeyField:"EmployeeID",foreignKeyValue:"FirstName",dataSource:window.employeeData,headerText:"FirstName"},{field:"ShipCity"}]
             * });
             * &lt;/script&gt; 
             */

            /**
             * validationRules is used to define constraints for saving data to the database.
             * @remarks
             * allowEditing or allowAdding must be set as true. It is must to add the validations script. They are jquery.validate.min.js and jquery.validate.unobtrusive.min.js
             * @name ejGrid#columns->validationRules 	          
             * @type {object}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt;          
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   editSettings: {allowEditing: true, allowAdding: true},
             *   columns:[{field:"OrderID", validationRules: { required: true, number: true }},{field:"CustomerID"},{field:"ShipCity"}] 
             * });
             * &lt;/script&gt; 
             */

            /**
             * This is used to format the cell values of the grid.
             * @name ejGrid#columns->format 	          
             * @default -
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt;          
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   columns:[{field:"OrderID"},{field:"CustomerID"},{field:"Freight",format:"{0:C}"}]
             * });
             * &lt;/script&gt;  
             */

            /**
             * Based on this customAttribute, users can apply attribute values to the td element of a particular column.
             * @name ejGrid#columns->customAttributes 	          
             * @default -
             * @type {object}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt;          
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *   dataSource:window.gridData,
             *   columns:[{field:"OrderID"},{field:"CustomerID",customAttributes:{"style":"color:red"}},{field:"Freight"}]
             * });
             * &lt;/script&gt;  
             */

            /**
             * An element’s ID which will be used for column template rendering.
             * @remarks
             * If you want to use templateID for the column template, then columnTemplate must be set as true.
             * @name ejGrid#columns->templateID 	          
             * @default null
             * @type {string}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script id="columnTemplate" type="text/x-jsrender"&gt;
             * &lt;img src="styles/images/Employees/{{:EmployeeID}}.png" alt="{{:EmployeeID}}"/&gt;
             * &lt;/script&gt;
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *  dataSource:window.gridData,
             *  columns:[{headerText:"Employee",template:true,templateID:"#columnTemplate"},{field:"EmployeeID"}]
             * });
             * &lt;/script&gt;
             */

            /**
             * This property is used to define a command column in grid.
             * @remarks
             * isUnbound must be true while declaring commands button.
             * @name ejGrid#columns->commands 	          
             * @default []
             * @type {array}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *     dataSource:window.gridData,
             *     editSettings:{allowEditing:true,allowAdding:true,allowDeleting:true},
             *     columns:[
             *            { field: "OrderID", isPrimaryKey: true },  
             *            { field: "EmployeeID" },
             *            {
             *               headerText: "Manage Records",
             *               commands: [
             *                   { type: ej.Grid.UnboundType.Edit, buttonOptions: { text: "Edit" } },
             *                   { type: ej.Grid.UnboundType.Delete, buttonOptions: { text: "Delete" } },
             *                   { type: ej.Grid.UnboundType.Save, buttonOptions: { text: "Save" } },
             *                   { type: ej.Grid.UnboundType.Cancel, buttonOptions: { text: "Cancel" } }
             *                ],
             *               isUnbound: true,
             *               width: 130
             *            }
             *     ] 
             * });
             * &lt;/script&gt; 
             */

            /**
             * This is used to set the type of button. See {@link unboundType}
             * @remarks
             * isUnbound must be true while declaring commands button.
             * @name ejGrid#columns->commands->type	          
             * @default -
             * @type {enum}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *     dataSource:window.gridData,
             *     editSettings:{allowEditing:true,allowAdding:true,allowDeleting:true},
             *     columns:[
             *            { field: "OrderID", isPrimaryKey: true },  
             *            { field: "EmployeeID" },
             *            {
             *               headerText: "Manage Records",
             *               commands: [
             *                   { type: ej.Grid.UnboundType.Edit, buttonOptions: { text: "Edit" } },
             *                   { type: ej.Grid.UnboundType.Delete, buttonOptions: { text: "Delete" } },
             *                   { type: ej.Grid.UnboundType.Save, buttonOptions: { text: "Save" } },
             *                   { type: ej.Grid.UnboundType.Cancel, buttonOptions: { text: "Cancel" } }
             *                ],
             *               isUnbound: true, width: 130
             *            }
             *     ] 
             * });
             * &lt;/script&gt; 
             */

            /**
             * This is used to set all the button options which are available in ejButton.
             * @remarks
             * isUnBound must be true while declaring commands button.
             * @name ejGrid#columns->commands->buttonOptions
             * @default -
             * @type {object}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *     dataSource:window.gridData,
             *     editSettings:{allowEditing:true,allowAdding:true,allowDeleting:true},
             *     columns:[
             *            { field: "OrderID", isPrimaryKey: true },  
             *            { field: "EmployeeID" },
             *            {
             *               headerText: "Manage Records",
             *               commands: [
             *                   { type: ej.Grid.UnboundType.Edit, buttonOptions: { text: "Edit" } },
             *                   { type: ej.Grid.UnboundType.Delete, buttonOptions: { text: "Delete" } },
             *                   { type: ej.Grid.UnboundType.Save, buttonOptions: { text: "Save" } },
             *                   { type: ej.Grid.UnboundType.Cancel, buttonOptions: { text: "Cancel" } }
             *                ],
             *               isUnbound: true, width: 130
             *            }
             *     ] 
             * });
             * &lt;/script&gt; 
             */

            /**
             * This is used to customize ejNumericTextbox of an editable column. See {@link editingType}
             * @name ejGrid#columns->numericEditParams 	          
             * @default -
             * @type {object}
             * @example
             * &lt;div id="Grid"&gt;&lt;/div&gt; 
             * &lt;script&gt;
             * $("#Grid").ejGrid({
             *     dataSource:window.gridData,
             *     editSettings:{allowEditing:true,allowAdding:true,allowDeleting:true},
             *     columns:[{ field: "OrderID"}, { field: "Freight", editType: ej.Grid.EditingType.Numeric, editParams: { decimalCount: 2 }}]
             *   });
             * &lt;/script&gt;  
             */

            columns: [],
            query: null,
            isEdit: false
        },
        dataTypes: {
            dataSource: "data",
            query:"data",
            columns: "array",
            summaryRows: "array",
            toolbarSettings: {
                toolbarItems: "array",
                customToolbarItems: "array"
            },
            sortSettings: {
                sortedColumns: "array"
            },
            filterSettings: {
                filteredColumns: "array",
                filterType: "enum",
                filterBarMode: "enum",
            },
            groupSettings: {
                groupedColumns: "array"
            },
            editSettings: {
                editMode: "enum",
                formPosition: "enum"
            }
        },
        /**
         * It is used to get the content table of grid control.
         * @return gridContentTable
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Gets content table of grid control
         * gridObj.getContentTable();
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Gets content table of grid control
         * $("#Grid").ejGrid("getContentTable");        
         * &lt;/script&gt;
         */
        getContentTable: function () {
            return this._gridContentTable;
        },

        setGridContentTable: function (value) {
            this._gridContentTable = value;
        },
        /**
		 * It is used to get the content of grid control.
		 * @return gridContent
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Gets content of grid control
		 * gridObj.getContent(); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Gets content of grid control
		 * $("#Grid").ejGrid("getContent");        
		 * &lt;/script&gt;
         */
        getContent: function () {
            return this._gridContent;
        },

        setGridContent: function (value) {
            this._gridContent = value;
        },
        /**
          * It is used to get the header content of grid control.
          * @return gridHeaderContent
          * @example 
          * &lt;script&gt;
          * // Create grid object.
          * var gridObj = $("#Grid").data("ejGrid");
          * // Gets grid header content of grid control
          * gridObj.getHeaderContent(); 
          * &lt;/script&gt;
          * @example 
          * &lt;script&gt;
          * // Gets grid header content of grid control
          * $("#Grid").ejGrid("getHeaderContent");        
          * &lt;/script&gt;
          */
        getHeaderContent: function () {
            return this._gridHeaderContent;
        },

        setGridHeaderContent: function (value) {
            this._gridHeaderContent = value;
        },
        /**
		 * It is used to get the header table of grid control.
		 * @return gridHeaderTable
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
		 * gridObj.getHeaderTable(); 
         * // Gets header table of grid control
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Gets header table of grid control
		 * $("#Grid").ejGrid("getHeaderTable");        
		 * &lt;/script&gt;
         */
        getHeaderTable: function () {
            return this._gridHeaderTable;
        },

        setGridHeaderTable: function (value) {
            this._gridHeaderTable = value;
        },
        /**
         * It is used to get the grid rows of grid control.
         * @return gridRows
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Gets grid rows of grid control
         * gridObj.getRows(); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Gets grid rows of grid control
         * $("#Grid").ejGrid("getRows");        
         * &lt;/script&gt;
         */
        getRows: function () {
            return this._gridRows;
        },
        /**
		 * It is used to get the rows from the given from and to index in grid.
		 * @return gridRows
		 * @param {number} from Pass the from index from which the rows to be returned
		 * @param {number} to Pass the to index to which the rows to be returned
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Gets the rows from the specified row index 
		 * gridObj.getRowByIndex(3, 6);  
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Gets the rows from the specified row index
		 * $("#Grid").ejGrid("getRowByIndex", 3, 6);   
		 * &lt;/script&gt;
         */
        getRowByIndex: function (from, to) {
            try {
                var gridRows = this.getRows(), $gridRows = $(gridRows), $row = $();
                if (ej.isNullOrUndefined(to)) {
                    if (this.model.scrollSettings.frozenColumns > 0) {
                        $row.push(gridRows[0][from]);
                        $row.push(gridRows[1][from]);
                        return $row;
                    }
                    return $(gridRows[from]);
                } else {
                    if (this.model.scrollSettings.frozenColumns > 0) {
                        $row.push($gridRows.eq(0).slice(from, to));
                        $row.push($gridRows.eq(0).slice(from, to));
                        return $row;
                    }
                    return $($gridRows.slice(from, to));
                }
            } catch (e) {
                return $();
            }
        },
        /**
         * It is used to get the column index of the given field in grid control.
         * @return Column Index
         * @param {string} fieldName Pass the field name of the column to get the corresponding column index
         * @example 
         * &lt;div id="Grid"&gt;&lt;/div&gt; 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Gets the column index based on the given field name
         * gridObj.getColumnIndexByField("OrderID"); 
         * &lt;/script&gt;
         * @example 
         * &lt;div id="Grid"&gt;&lt;/div&gt; 
         * &lt;script&gt;
         * // Gets the column index based on the given field name
         * $("#Grid").ejGrid("getColumnIndexByField", "OrderID");        
         * &lt;/script&gt;
         */
        getColumnIndexByField: function (field) {
            for (var column = 0; column < this.model.columns.length; column++) {
                if (this.model.columns[column]["field"] == field)
                    break;
            }
            return column;
        },
        /**
		 * It is used to get the row index based on the given tr element in grid control.
		 * @return row index
		 * @param {object} $tr Pass the tr element in grid content to get its row index
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Gets the row index based on the given row
		 * gridObj.getIndexByRow($(".gridcontent tr").first()); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Gets the row index based on the given row
		 * $("#Grid").ejGrid("getIndexByRow", $(".gridcontent tr").first());        
		 * &lt;/script&gt;
         */
        getIndexByRow: function ($tr) {
            var gridRows = this.getRows(), $gridRows = $(gridRows), rowIndex;
            if (this.model.scrollSettings.frozenColumns > 0) {
                rowIndex = $(gridRows[0]).index($tr);
                if (rowIndex == -1)
                    rowIndex = $(gridRows[1]).index($tr);
                return rowIndex;
            } else
                return $gridRows.index($tr);
        },
        /**
         * It is used to get the names of all the visible column collections in grid control.
         * @return visibleColumns
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Gets the names of all the visible column collections
         * gridObj.getVisibleColumnNames(); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Gets the names of all the visible column collections
         * $("#Grid").ejGrid("getVisibleColumnNames");        
         * &lt;/script&gt;
         */
        getVisibleColumnNames: function (headerText) {
            return this._visibleColumns;
        },
        /**
        * It is used to get the names of all the hidden column collections in grid control.
        * @return hiddenColumns
        * @example 
        * &lt;script&gt;
        * // Create grid object.
        * var gridObj = $("#Grid").data("ejGrid");
        * // Gets names of all the hidden column collections
        * gridObj.getHiddenColumnNames(); 
        * &lt;/script&gt;
        * @example 
        * &lt;script&gt;
        * // Gets names of all the hidden column collections
        * $("#Grid").ejGrid("getHiddenColumnNames");        
        * &lt;/script&gt;
        */
        getHiddenColumnNames: function (headerText) {
            return this._hiddenColumns;
        },
        /**
         * It is used to get the column details  based on the given field name in grid control.
         * @return Column Object
         * @param {string} fieldName Pass the field name of the column to get the corresponding column object
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Gets the column details based on the given field name
         * gridObj.getColumnByField("OrderID");
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Gets the column details based on the given field name
         * $("#Grid").ejGrid("getColumnByField", "OrderID");        
         * &lt;/script&gt;
         */
        getColumnByField: function (field) {
            for (var column = 0; column < this.model.columns.length; column++) {
                if (this.model.columns[column]["field"] == field)
                    break;
            }
            return column == this.model.columns.length ? null : this.model.columns[column];
        },
        /**
         * It is used to get the column details based on the given header text in grid control.
         * @return Column Object
         * @param {string} headerText Pass the header text of the column to get the corresponding column object
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Gets the column details based on the given headerText
         * gridObj.getColumnByHeaderText("Order ID"); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Gets the column details based on the given headerText
         * $("#Grid").ejGrid("getColumnByHeaderText", "Order ID");        
         * &lt;/script&gt;
         */
        getColumnByHeaderText: function (headerText) {
            for (var column = 0; column < this.model.columns.length; column++) {
                if (this.model.columns[column]["headerText"] == headerText)
                    break;
            }
            return column == this.model.columns.length ? null : this.model.columns[column];
        },
        /**
         * It is used to get the current view data of grid control.
         * @return currentJsonData
         * @example 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Gets current view data of grid control
         * gridObj.getCurrentViewData(); 
         * &lt;/script&gt;
         * @example 
         * &lt;script&gt;
         * // Gets current view data of grid control
         * $("#Grid").ejGrid("getCurrentViewData");        
         * &lt;/script&gt;
         */
        getCurrentViewData: function () {
            return this._currentJsonData;
        },
        /**
		 * It is used to get the list of field names from column collection in grid control.
		 * @return columnFieldNames
		 * @example 
		 * &lt;script&gt;
		 * // Create grid object.
		 * var gridObj = $("#Grid").data("ejGrid");
         * // Gets the column field names based on the given index
		 * gridObj.getColumnFieldNames(); 
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // Gets the column field names based on the given index
		 * $("#Grid").ejGrid("getColumnFieldNames");        
		 * &lt;/script&gt;
         */
        getColumnFieldNames: function () {
            var columnNames = [];
            for (var column = 0; column < this.model.columns.length; column++) {
                if (this.model.columns[column]["field"])
                    columnNames.push(this.model.columns[column]["field"]);
            }
            return columnNames;
        },
        /**
         * It is used to get the browser details.
         * @return browserDetails
         * @example 
         * &lt;div id="Grid"&gt;&lt;/div&gt; 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // Gets the browser details of the application being run
         * gridObj.getBrowserDetails(); 
         * &lt;/script&gt;
         * @example 
         * &lt;div id="Grid"&gt;&lt;/div&gt; 
         * &lt;script&gt;
         * // Gets the browser details of the application being run
         * $("#Grid").ejGrid("getBrowserDetails");        
         * &lt;/script&gt;
         */
        getBrowserDetails: function () {
            var b = navigator.userAgent.match(/(firefox|chrome|opera|msie|safari)\s?\/?(\d+(.\d+)*)/i);
            if (!!navigator.userAgent.match(/Trident\/7\./))
                return { browser: "msie", version: $.uaMatch(navigator.userAgent).version };
            return { browser: b[1].toLowerCase(), version: b[2] };
        },
        _initPrivateProperties: function () {
            this._gridHeaderTable = null;
            this._gridWidth = this.element.width();
            this._id = this.element.attr("id");
            this._gridRows = null;
            this._gridContentTable = null;
            this._gridContent = null;
            this._gridHeaderContent = null;
            this._gridFooterContent = null;
            this._gridFooterTable = null;
            this._gridRecordsCount = this._dataSource() !== null ? (this.model.pageSettings.totalRecordsCount == null ? this._dataSource().length : this.model.pageSettings.totalRecordsCount) : 0;
            this._links = null;
            this._gridPager = null;
            this._cSortedColumn = null;
            this._cSortedDirection = null;
            this._$curSElementTarget = null;
            this._gridFilterBar = null;
            this._$curFieldName = null;
            this._$prevFieldName = null;
            this._$fDlgIsOpen = false;
            this._$colType = null;
            this._$colFormat = null;
            this._$prevColType = null;
            this._$prevSElementTarget = null;
            this._currentFilterColumn = null;
            this._filteredRecordsCount = null;
            this._filteredRecords = [];
            this.filterColumnCollection = [];
            this._previousFilterCount = null;
            this._primaryKeys = [];
            this._primaryKeyValues = [];
            this._modifiedRecords = [];
            this._addedRecords = [];
            this._tdsOffsetWidth = [];
            this._deletedRecords = [];
            this._disabledToolItems = $();
            this._validationRules = {};
            this._groupedColumns = [];
            this._currentJsonData = [];
            this._groupingColumnIndex = 0;
            this._dataManager = this._dataSource() instanceof ej.DataManager ? this._dataSource() : this._dataSource() != null ? ej.DataManager(this._dataSource()) : null;
            if (this._dataManager != null && this.model.allowScrolling && this.model.scrollSettings.allowVirtualScrolling && this.model.pageSettings.totalRecordsCount != null && this._dataManager.dataSource.json != null)
                this._dataManager.dataSource.json.splice(this.model.pageSettings.totalRecordsCount);
            this._disabledSortableColumns = [];
            this._disabledGroupableColumns = [];
            this._disabledFilterableColumns = [];
            this._hiddenColumns = [];
            this._visibleColumns = [];
            this._sortedColumns = [];
            this.multiSortRequest = false;
            this.multiSelectCtrlRequest = false;
            this._multiSelectShiftRequest = false;
            this._enableSelectMultiTouch = false;
            this._enableSortMultiTouch = false;
            this._initialRender = false;
            this._fieldColumnNames = {};
            this._headerColumnNames = {};
            this._selectedRowsIndexes = [];
            this._isReorder = false;
            this._searchString = "";
            this._searchCount = null;
            this._columnsWidthCollection = [];
            this._Indicator = null;
            this._resizer = null;
            this._bulkEditCellDetails = {
                cellValue: null,
                rowIndex: -1,
                columnIndex: -1,
                fieldName: null,
                _data: null,
                cellEditType: "",
                cancelSave: false,
                defaultData: null,
                insertedTrCollection: [],
                rowData: null
            };
            this._batchChanges = {
                added: [],
                deleted: [],
                changed: []
            };
            this._bulkEditTemplate = $();
            this._confirmDialog = null;
            this._confirmedValue = false;
            this._lastRow = false;
            this._isVirtualRecordsLoaded = false;
            this._scrollValue = 0;
            this._currentTopFrozenRow = this.model.scrollSettings.frozenRows;
            this._rowHeightCollection = [];
            this._scrollObject = null;
            this._customPop = null;
            this.commonQuery = $.extend(true, {}, this.model.query);
            if (ej.gridFeatures.group) {
                this._rowCol = this._captionSummary();
                this._isCaptionSummary = (this._rowCol != null && this._rowCol.length) > 0 ? true : false;
            }
        },
        _init: function () {
            this._trigger("load");
            if (ej.isNullOrUndefined(this.model.query) || !(this.model.query instanceof ej.Query))
                this.model.query = ej.Query();
            if (ej.gridFeatures.common)
                this._initScrolling();
            this._initPrivateProperties();
            if (ej.gridFeatures.edit) {
                if (this.model.editSettings.allowEditing || this.model.editSettings.allowAdding)
                    this._processEditing();
            }
            this._checkDataBinding();
        },
        _initColumns: function (object) {
            while (object.items != undefined)
                object = object.items[0];
            if (this.model.columns.length == 0 && object) {
                for (var field in object) {
                    if (object.hasOwnProperty(field) && (typeof (object[field]) != "object" || object[field] instanceof Date)) {
                        var value = object[field];
                        this.model.columns.push({
                            field: field,
                            type: value != null ? (value.getDay ? "date" : typeof (value)) : null
                        });
                    }
                }
                this.model.columns.length && this._renderAfterColumnInitialize();
            } else {
                for (var index = 0; index < this.model.columns.length; index++) {
                    if (ej.isNullOrUndefined(this.model.columns[index].type)) {
                        var $field;
                        if (this.model.columns[index].dataSource && this.model.columns[index].foreignKeyValue)
                            $field = this.model.columns[index].dataSource[0][this.model.columns[index].foreignKeyValue];
                        else
                            $field = !ej.isNullOrUndefined(this.model.columns[index].field) ? ej.getObject(this.model.columns[index].field, object) : null;
                        this.model.columns[index].type = $field != null ? ($field.getDay ? "date" : typeof ($field)) : null;
                    }
                }
            }
        },
        _checkDataBinding: function () {
            if (this.model.enablePersistence)
                this.model.query = new ej.Query();
            this._initialRenderings();
            this._initialRender = true;
            this.model.enableRTL && this.element.addClass("e-rtl");
            if (this.model.cssClass != null)
                this.element.addClass(this.model.cssClass);
            if (this.model.allowGrouping)
                this.element.append(this._renderGroupDropArea());
            if (this.model.toolbarSettings.showToolbar)
                this.element.append(this._renderToolBar());
            var columns = this.model.columns;
            if (columns && columns.length) {
                var expands = [];
                if (typeof columns[0] === "string")
                    for (var i = 0; i < columns.length; i++)
                        columns[i] = { field: columns[i] };
                for (var i = 0; i < columns.length; i++) {
                    if (!columns[i].field || columns[i].field.indexOf('.') === -1) continue;
                    this._getExpands(columns[i].field, expands);
                }
                this.model.query.expand(expands);
                this._renderAfterColumnInitialize();
            }
            if (this.model.allowPaging)
                this.element.append(this._renderGridPager());
            if ($.isFunction($.fn.ejWaitingPopup)) {
                this.element.ejWaitingPopup({ showOnInit: false });
                $("#" + this._id + "_WaitingPopup").addClass("e-gridwaitingpopup");
            }
            if (this._dataSource() instanceof ej.DataManager) {
                this.element.ejWaitingPopup("show");
                if (this._dataSource().ready != undefined) {
                    var proxy = this;
                    this._dataSource().ready.done(function (args) {
                        proxy._initDataSource();
                        proxy.model.dataSource = ej.DataManager(args.result);
                    });
                } else {
                    this.element.ejWaitingPopup("show");
                    this._initDataSource();
                }
            } else {
                this._ensureDataSource();
                this._trigger("actionBegin");
                this._initGridRender();
            }
        },
        _initDataSource: function () {
            this._ensureDataSource();
            this._trigger("actionBegin");
            var queryPromise = this._dataSource().executeQuery(this.model.query);
            if (this._dataManager.dataSource.table != null)
                this._dataManager.dataSource.table.css("display", "none");
            queryPromise.done(ej.proxy(function (e) {
                this.element.ejWaitingPopup("hide");
                this.model.currentViewData = e.result;
                if (this.model.pageSettings.totalRecordsCount != null && this.model.filterSettings.filteredColumns.length == 0)
                    this._gridRecordsCount = this.model.pageSettings.totalRecordsCount;
                else if (e.count == 0 && e.result.length)
                    this._gridRecordsCount = e.result.length;
                else
                    this._gridRecordsCount = e.count;
                if (this.getPager() != null)
                    this.model.pageSettings.totalRecordsCount = this._gridRecordsCount;
                this._initGridRender();
            }, this));
        },
        _initialRenderings: function () {
            if (this.model.groupSettings.groupedColumns.length) {
                var sortedColumns = new Array();
                for (var i = 0; i < this.model.sortSettings.sortedColumns.length; i++) {
                    if (ej.isNullOrUndefined(this.model.sortSettings.sortedColumns[i].direction))
                        this.model.sortSettings.sortedColumns[i].direction = ej.sortOrder.Ascending;
                    sortedColumns.push(this.model.sortSettings.sortedColumns[i].field);
                }
                for (var i = 0; i < this.model.groupSettings.groupedColumns.length; i++) {
                    if ($.inArray(this.model.groupSettings.groupedColumns[i], sortedColumns) == -1)
                        this.model.sortSettings.sortedColumns.push({ field: this.model.groupSettings.groupedColumns[i], direction: ej.sortOrder.Ascending });
                }
            }
        },
        _getExpands: function (field, arr) {
            var splits = field.split('.'), tmp = "";
            splits.splice(splits.length - 1, 1);
            for (var i = 0; i < splits.length; i++, tmp = "") {
                for (var j = 0; j < i; j++)
                    tmp += splits[j] + "/";
                tmp = tmp + splits[i];
                if (arr.indexOf(tmp) === -1)
                    arr.push(tmp);
            }
        },
        _renderAfterColumnInitialize: function () {
            this.element.append(this._renderGridHeader());
            if (this.model.allowFiltering && this.model.filterSettings.filterType == "filterbar")
                this._renderFiltering();
            if (this.model.allowPaging)
                this.element.append(this.element.find(".e-pager").first());
        },
        _ensureDataSource: function (args) {
            if (this._dataSource() == null && !(this._dataSource() instanceof ej.DataManager))
                return;
            this.model.query.requiresCount();
            var queryManagar = this.model.query;
            if (!(this._dataSource() instanceof ej.DataManager))
                this.model.currentViewData = this._dataSource();
            if ((!(this._dataSource() instanceof ej.DataManager) || this._dataManager.dataSource.url == undefined) && (this.model.editSettings.allowEditing || this.model.editSettings.allowAdding) && (!ej.isNullOrUndefined(this._cModifiedData) || !ej.isNullOrUndefined(this._cAddedRecord))) {
                if (ej.isNullOrUndefined(this._cAddedRecord)) {
                    for (var index = 0; index < this._primaryKeys.length; index++)
                        queryManagar = queryManagar.where(this._primaryKeys[index], ej.FilterOperators.equal, this._primaryKeyValues[index]);
                    var currentData = this._dataManager.executeLocal(queryManagar);
                    if (!(this._dataSource() instanceof ej.DataManager))
                        $.extend(this._dataSource()[$.inArray(currentData.result[0], this._dataSource())], this._cModifiedData);
                    else
                        $.extend(this._dataSource().dataSource.json[$.inArray(currentData.result[0], this._dataSource().dataSource.json)], this._cModifiedData);
                    this._cModifiedData = null;
                } else {
                    (this._dataSource() instanceof ej.DataManager) ? this._dataSource().dataSource.json.unshift(this._cAddedRecord) : this._dataSource().unshift(this._cAddedRecord);
                    this._cAddedRecord = null;
                }
                queryManagar.queries = [];
                this.model.isEdit = false;
            }

            if (this.model.editSettings.allowDeleting && !ej.isNullOrUndefined(this._cDeleteData) && (!(this._dataSource() instanceof ej.DataManager) || this._dataManager.dataSource.url == undefined)) {
                if (!(this._dataSource() instanceof ej.DataManager)) {
                    var index = $.inArray(this._cDeleteData[0], this._dataSource());
                    this._dataSource().splice(index, 1);
                }
                else {
                    var index = $.inArray(this._cDeleteData[0], this._dataSource().dataSource.json);
                    this._dataSource().dataSource.json.splice(index, 1);
                }
            }

            if (this.model.sortSettings.sortedColumns.length) {
                for (var i = this.model.sortSettings.sortedColumns.length - 1; i >= 0; i--)
                    queryManagar.sortBy(this.model.sortSettings.sortedColumns[i].field, this.model.sortSettings.sortedColumns[i].direction);

            }

            if (this.model.allowSearching && this._searchString.length) {
                queryManagar.search(this._searchString, this.getColumnFieldNames(), ej.FilterOperators.contains, true);
                if (args.requestType == "searching")
                    this._currentPage(1);
            }

            if (this.model.allowFiltering && this.model.filterSettings.filteredColumns.length) {
                var predicate;
                var firstFilterCondition = this.model.filterSettings.filteredColumns[0];
                predicate = ej.Predicate(firstFilterCondition.field, firstFilterCondition.operator, firstFilterCondition.value, !firstFilterCondition.matchcase);
                for (var i = 1; i < this.model.filterSettings.filteredColumns.length; i++) {
                    predicate = predicate[this.model.filterSettings.filteredColumns[i].predicate](this.model.filterSettings.filteredColumns[i].field, this.model.filterSettings.filteredColumns[i].operator, this.model.filterSettings.filteredColumns[i].value, !this.model.filterSettings.filteredColumns[i].matchcase);
                }
                queryManagar.where(predicate);
                if (!(this._dataSource() instanceof ej.DataManager)) {
                    this._filteredRecordsCount = this._dataManager.executeLocal(queryManagar).count;
                    var lastPage = (this._filteredRecordsCount % this.model.pageSettings.pageSize == 0) ? (this._filteredRecordsCount / this.model.pageSettings.pageSize) : (parseInt(this._filteredRecordsCount / this.model.pageSettings.pageSize, 10) + 1);
                    if (this._currentPage() > lastPage)
                        this._currentPage(lastPage);
                } else if (!ej.isNullOrUndefined(args) && args.requestType == ej.Grid.Actions.Filtering)
                    this._currentPage(1);
                if (this.model.showSummary && this.model.summaryRows.length > 0) {
                    var fQueryMgr = new ej.Query();
                    this._filteredRecords = this._dataManager.executeLocal(fQueryMgr.where(predicate));
                }
            }


            if (this.model.allowPaging || (this.model.scrollSettings.allowVirtualScrolling && this.model.allowScrolling)) {
                if (this._currentPage() == 0) {
                    if (this._prevPageNo == 0 || this._prevPageNo == null)
                        this._currentPage(1);
                    else
                        this._currentPage(this._prevPageNo);
                }
                queryManagar.page(this._currentPage(), this.model.pageSettings.pageSize);
            }

            if (this.model.allowGrouping) {
                for (var i = 0; i < this.model.groupSettings.groupedColumns.length; i++) {
                    queryManagar.group(this.model.groupSettings.groupedColumns[i]);
                }
            }
            if (args != undefined && args.requestType == "add" && (!(this._dataSource() instanceof ej.DataManager) || this._dataManager.dataSource.url == undefined) && this.model.groupSettings.groupedColumns.length == 0 && this.model.scrollSettings.frozenColumns == 0 && this.model.scrollSettings.frozenRows == 0)
                !(this._dataSource() instanceof ej.DataManager) ? this._dataSource().unshift(args.data) : this._dataSource().dataSource.json.unshift(args.data);
            if ((!(this._dataSource() instanceof ej.DataManager) || this._dataManager.dataSource.url == undefined)) {
                var result = this._dataManager.executeLocal(queryManagar);
                this.model.currentViewData = result.result;
                this._gridRecordsCount = result.count;
                this._searchCount = this._searchString.length ? result.count : null;
            }

        },
        _initGridRender: function () {
            this.addInitTemplate();
            if (this.model.scrollSettings.frozenColumns > 0)
                this.addFrozenTemplate();
            this.model.allowGrouping && this.addGroupingTemplate();
            this.render();
            if (this.model.allowGrouping && ej.gridFeatures.dragAndDrop)
                this._headerCellgDragDrop();
            if (this.model.allowReordering && ej.gridFeatures.dragAndDrop) {
                this._headerCellreorderDragDrop();
                this._initIndicators();
            }
            this._wireEvents();
            if (this.model.allowResizing || this.model.allowResizeToFit)
                this._resizer = new ej.Grid.gridResize(this);
            this._initialRender = false;
            if (this.model.width && !this.model.allowScrolling)
                this.element.width(this.model.width);
            if (this.model.editSettings.allowEditing || this.model.editSettings.allowAdding)
                this._processEditing();
            if (this.model.allowFiltering && this.model.filterSettings.filterType == "menu")
                this._renderFilterDialogs();
        },
        _getMetaColGroup: function () {
            var $colgroup = ej.buildTag("colgroup");
            for (var i = 0; i < this.model.columns.length; i++) {
                var $col = $(document.createElement("col"));
                this.model.columns[i]["visible"] === false && $col.css("display", "none");
                !ej.isNullOrUndefined(this.model.columns[i]["cssClass"]) && $col.addClass(this.model.columns[i]["cssClass"]);
                if (!this.model.groupSettings.showGroupedColumn && $.inArray(this.model.columns[i]["field"], this.model.groupSettings.groupedColumns) != -1)
                    $col.css("display", "none");
                $colgroup.append($col);
            }
            return $colgroup;
        },
        _alternateRow: function () {
            return this.getIndex() % 2 == 0 ? "" : "e-alt_row";
        },
        addInitTemplate: function () {
            var headerCellDiv = this.element.find(".e-headercelldiv"), templates = {};
            var tbody = document.createElement('tbody'), $tbody = $(tbody);
            if (this.model.rowTemplate == null) {
                var tr = document.createElement('tr'),
                    $tr = $(tr),
                    columns = this.model.columns,
                    i;
                if (this._gridRecordsCount)
                    this._initColumns(this.model.currentViewData[0] != undefined ? this.model.currentViewData[0] : this.model.currentViewData.value);
                var helpers = { _gridFormatting: this.formatting };
                $.views.helpers(helpers);

                var viewHelper = {};
                viewHelper["_foreignKey"] = this._foreignKeyBinding; // move to common methods
                $.views.helpers(viewHelper);

                if (this.model.detailsTemplate) {
                    var $tdDetailCell = ej.buildTag("td.e-detailrowcollapse", "<div class='e-icon e-gnextforward'></div>");
                    $tr.append($tdDetailCell);
                }
                for (i = 0; i < this.model.columns.length; i++) {
                    var $tdCell = ej.buildTag("td.e-rowcell");
                    columns[i]["visible"] == false && $tdCell.addClass("e-hide");
                    !this.model.groupSettings.showGroupedColumn && $tdCell.addClass("{{for ~groupedColumns}}" +
                        " {{if #data == '" + this.model.columns[i]["field"] + "'}}e-hide{{/if}}" +
                        "{{/for}}");
                    if (columns[i]["template"]) {
                        var viewHelper = {};
                        viewHelper["_" + this._id + "ColumnTemplating"] = this._gridTemplate;
                        $.views.helpers(viewHelper);
                        $("#" + this._id + columns[i].headerText + i + "_Template").remove();
                        var scriptElement = this._createTemplateElement(columns[i]);
                        this.model.columns[i]["allowGrouping"] = this.model.columns[i]["allowFiltering"] = this.model.columns[i]["allowSorting"] = false;
                        $tdCell.addClass("e-templatecell").html("{{:~_" + this._id + "ColumnTemplating('" + scriptElement.id + "')}}");
                    } else {
                        var splits = (columns[i].field || "").split("."), sLen = splits.length - 1, braces = "";
                        while (sLen) {
                            braces += "(";
                            sLen--;
                        }
                        switch (columns[i].type) {
                            case "boolean":
                                $tdCell.addClass("e-boolrowcell").html('{{if ' + columns[i].field + '}} <input type ="checkbox" disabled="disabled" checked="checked"></input>{{else}} <input type ="checkbox" disabled="disabled"  ></input> {{/if}}');
                                break;
                            default:
                                $tdCell.html("{{:" + braces + "#data['" + splits.join("'] || {})['") + "']}}");
                        }
                        if (columns[i]["format"] != undefined && (!columns[i]["foreignKeyValue"] && !columns[i]["dataSource"]))
                            $tdCell.html("{{:~_gridFormatting('" + columns[i]["format"] + "'," + columns[i]["field"] + ")}}");
                        if (columns[i]["foreignKeyValue"] && columns[i]["dataSource"]) {
                            var foreignKeyColumn = columns[i]["field"] != columns[i]["foreignKeyField"] ? columns[i]["field"] : columns[i]["foreignKeyField"];
                            $tdCell.html("{{:~_foreignKey('" + JSON.stringify(columns[i]) + "'," + foreignKeyColumn + ",'" + this._id + "Object" + "')}}");
                        }
                        if (columns[i]["isUnbound"]) {
                            var viewHelper = {};
                            viewHelper["_" + this._id + "UnboundTemplate"] = this._unboundTemplateRendering;
                            $.views.helpers(viewHelper);
                            this.model.columns[i]["allowGrouping"] = this.model.columns[i]["allowFiltering"] = this.model.columns[i]["allowSorting"] = false;
                            $("#" + this._id + columns[i].headerText + "_UnboundTemplate").remove();
                            divElement = this._createUnboundElement(columns[i]);
                            $tdCell.addClass("e-unboundcell").addClass("e-" + columns[i]["headerText"].replace(/\s+/g, "")).html("{{:~_" + this._id + "UnboundTemplate('" + divElement.id + "')}}");
                            this.model.scrollSettings.frozenColumns > 0 && $tdCell.addClass("e-frozenunbound");
                            this._isUnboundColumn = true;
                        }

                    }
                    if (columns[i]["textAlign"] != undefined) {
                        $tdCell.css("text-align", columns[i]["textAlign"]);
                        $(headerCellDiv[i]).css("text-align", columns[i]["textAlign"]);
                    }
                    if (!ej.isNullOrUndefined(columns[i]["cssClass"])) {
                        $tdCell.addClass(columns[i]["cssClass"]);
                    }
                    if (!ej.isNullOrUndefined(columns[i]["customAttributes"]))
                        $tdCell.attr(columns[i]["customAttributes"]);
                    $tdCell.attr("role", "gridcell");
                    $tr.append($tdCell);
                    if (this.model.enableAltRow) {
                        helpers["_" + this._id + "AlternateRow"] = this._alternateRow;
                        $.views.helpers(helpers);
                        $tr.addClass("{{:~_" + this._id + "AlternateRow()}}");
                    }
                    $tr.attr("role", "row");
                    if (this.model.scrollSettings.frozenColumns > 0 && this.model.scrollSettings.frozenColumns == i + 1) {
                        tbody.appendChild(tr);
                        templates[this._id + "_JSONFrozenTemplate"] = $tbody.html();
                        $tr.empty();
                        $tbody.empty();
                    }
                }
                tbody.appendChild(tr);
            }
            templates[this._id + "_JSONTemplate"] = this.model.rowTemplate != null ? $(this.model.rowTemplate).html() : $tbody.html();
            $.templates(templates);
        },
        /**
         * To render the grid  
         * @return jQuery
         * @example 
         * &lt;div id="Grid"&gt;&lt;/div&gt; 
         * &lt;script&gt;
         * // Create grid object.
         * var gridObj = $("#Grid").data("ejGrid");
         * // It renders the grid.
         * gridObj.render(); 
         * &lt;/script&gt;
         * @example 
         * &lt;div id="Grid"&gt;&lt;/div&dgt; 
         * &lt;script&gt;
         * // It renders the grid.
         * $("#Grid").ejGrid("render");        
         * &lt;/script&gt;
         */
        // Grid rendering parts
        render: function () {
            this._renderGridContent().insertAfter(this.element.children(".e-gridheader"));
            this.model.allowResizeToFit && this.setWidthToColumns();
            if (this.model.allowGrouping && ej.gridFeatures.dragAndDrop)
                this._groupHeaderCelldrag();
            this.model.showSummary = this.model.summaryRows.length > 0 || this.model.showSummary;
            if (this.model.showSummary) {
                this._renderGridFooter().insertAfter(this.getContent());
                this._hideCaptionSummaryColumn();
            }
            this._initialEndRendering();

        },
        _renderGridHeaderInternalDesign: function (columns) {
            var $table = ej.buildTag('table.e-table', "", {}, { cellspacing: "0.25px", role: "grid" });
            var $thead = ej.buildTag('thead');
            var $tbody = ej.buildTag('tbody.e-hide');
            var $columnHeader = ej.buildTag('tr.e-columnheader');
            var $colGroup = $(document.createElement('colgroup'));
            var $rowBody = $(document.createElement('tr'));
            if (this.model.detailsTemplate) {
                $columnHeader.append(ej.buildTag('th.e-headercell e-detailheadercell', '<div></div>'));
                $colGroup.append(this._getIndentCol());
            }
            for (var columnCount = 0; columnCount < columns.length; columnCount++) {
                var $headerCell = ej.buildTag('th.e-headercell e-default', "", {}, { role: "columnheader" });
                var bodyCell = document.createElement('td');
                var $headerCellDiv = ej.buildTag('div.e-headercelldiv', columns[columnCount]["headerText"] === undefined ? columns[columnCount]["headerText"] = columns[columnCount]["field"] : columns[columnCount]["headerText"], {}, { "ej-mappingname": columns[columnCount]["field"] });
                $headerCell.append($headerCellDiv);
                if (this.model.allowFiltering && this.model.filterSettings.filterType == "menu" &&
                (columns[columnCount]["allowFiltering"] == undefined ||
                    columns[columnCount]["allowFiltering"] === true))
                    $headerCell.append(ej.buildTag('div.e-filtericon e-icon e-filterset'));
                var col = document.createElement('col');
                $rowBody.append(bodyCell);
                $columnHeader.append($headerCell);
                $colGroup.append(col);
                if (columns[columnCount]["visible"] === false)
                    $headerCell.addClass("e-hide") && $(col).css("display", "none") && this._hiddenColumns.push(columns[columnCount].headerText);
                else {
                    this._visibleColumns.push(columns[columnCount].headerText);
                    columns[columnCount]["visible"] = true;
                }
				if (columns[columnCount]["textAlign"] != undefined)
                    $headerCellDiv.css("text-align", columns[columnCount]["textAlign"]);
                columns[columnCount]["allowSorting"] === false && this._disabledSortableColumns.push(columns[columnCount].field);
                columns[columnCount]["allowGrouping"] === false && this._disabledGroupableColumns.push(columns[columnCount].headerText);
                if (!ej.isNullOrUndefined(columns[columnCount]["cssClass"])) {
                    $headerCell.addClass(this.model.columns[columnCount]["cssClass"]);
                    $(col).addClass(this.model.columns[columnCount]["cssClass"]);
                }
                if (!ej.isNullOrUndefined(this.model.columns[columnCount]["headerTemplateID"])) {
                    $headerCellDiv.html($(this.model.columns[columnCount]["headerTemplateID"]).hide().html()).parent().addClass("e-headertemplate");
                    var index = $.inArray(this.model.columns[columnCount].headerText, this._disabledGroupableColumns);
                    index == -1 && this._disabledGroupableColumns.push(this.model.columns[columnCount].headerText);
                }
                if (this.model.groupSettings.showToggleButton && $.inArray(columns[columnCount].headerText, this._disabledGroupableColumns) == -1) {
                    if ($.inArray(columns[columnCount].field, this.model.groupSettings.groupedColumns) != -1)
                        $headerCellDiv.append(this._getToggleButton().addClass("e-toggleungroup"));
                    else
                        $headerCellDiv.append(this._getToggleButton().addClass("e-togglegroup"));
                }
                this._columnsWidthCollection.push(columns[columnCount]["width"]);
                if (columns[columnCount]["width"] == undefined && this.model.commonWidth !== undefined)
                    this._columnsWidthCollection[columnCount] = this.model.commonWidth;
                this._fieldColumnNames[columns[columnCount].headerText] = columns[columnCount].field;
                this._headerColumnNames[columns[columnCount].field] = columns[columnCount].headerText;
                this.model.allowFiltering && "menu" == this.model.filterSettings.filterType && $headerCell.addClass("e-headercellfilter");
            }
            $thead.append($columnHeader);
            $tbody.append($rowBody);
            $table.append($colGroup).append($thead).append($tbody);
            return $table;
        },
        _renderGridHeader: function () {
            var $div = ej.buildTag('div.e-gridheader'), temp, $frozenDiv, $movableDiv;
            var $innerDiv = ej.buildTag('div');
            if (this.model.allowScrolling)
                $innerDiv.addClass("e-headercontent");
            this.setGridHeaderContent($div);
            this._hiddenColumns = [];
            this._columnsWidthCollection = [];
            this._visibleColumns = [];
            this._disabledGroupableColumns = [];
            this._fieldColumnNames = {};
            this._headerColumnNames = {};
            if (this.model.scrollSettings.frozenColumns > 0) {
                $frozenDiv = ej.buildTag("div.e-frozenheaderdiv", this._renderGridHeaderInternalDesign(this.model.columns.slice(0, this.model.scrollSettings.frozenColumns)));
                $movableDiv = ej.buildTag("div.e-movableheader", ej.buildTag("div.e-movableheaderdiv", this._renderGridHeaderInternalDesign(this.model.columns.slice(this.model.scrollSettings.frozenColumns))));
                $innerDiv.append($frozenDiv).append($movableDiv);
            } else
                $innerDiv.append(this._renderGridHeaderInternalDesign(this.model.columns));
            $div.html($innerDiv);
            this.setGridHeaderTable(this.getHeaderContent().find(".e-table"));
            return $div;
        },
        _renderGridContent: function () {
            var $div = ej.buildTag('div.e-gridcontent');
            var $innderDiv = ej.buildTag('div');
            var $table = ej.buildTag('table.e-table', "", {}, { cellspacing: "0.25px" });
            var $tbody = $(document.createElement('tbody'));
            $table.append(this.getHeaderTable().find('colgroup').clone()).append($tbody);
            $innderDiv.html($table);
            $div.html($innderDiv);
            this.setGridContentTable($table);
            this.setGridContent($div);
            $table.attr("role", "grid");
            if (this._dataSource() == null) {
                var $emptyTd = ej.buildTag('td', this._getLocalizedLabels("EmptyRecord"), {}, { colSpan: this.model.columns.length });
                $tbody.append($(document.createElement("tr")).append($emptyTd));
                this.setWidthToColumns();
            } else {
                var args = {};
                if (this.model.groupSettings.groupedColumns.length) {
                    if (this._initialRender)
                        args.columnName = this.model.groupSettings.groupedColumns[this.model.groupSettings.groupedColumns.length - 1];
                    args.requestType = ej.Grid.Actions.Grouping;
                } else
                    args.requestType = ej.Grid.Actions.Refresh;
                this.sendDataRenderingRequest(args);
            }
            if (this._isCaptionSummary && args.requestType == "grouping" && this.model.groupSettings.groupedColumns.length > 1) {
                var colgroup = this.getContentTable().find(".e-table").not(".e-recordtable").children("colgroup");
                var $cols1 = $(this.getContentTable().find(".e-recordtable")[0]).children("colgroup").find("col");
                for (i = 0; i < colgroup.length; i++) {
                    var colCount = $(colgroup[i]).find("col").length;
                    $(colgroup[i]).find("col:gt(" + (colCount - $cols1.length - 1) + ")").remove();
                    $(colgroup[i]).append($cols1.clone());
                }
            }
            return $div;
        },
        sendDataRenderingRequest: function (args) {
        if (args.requestType == "add" ||( this.model.currentViewData!=null && this.model.currentViewData.length)){
                switch (args.requestType) {
                    case ej.Grid.Actions.Refresh:
                    case ej.Grid.Actions.Paging:
                    case ej.Grid.Actions.Sorting:
                    case ej.Grid.Actions.Filtering:
                    case ej.Grid.Actions.Save:
                    case ej.Grid.Actions.Cancel:
                    case ej.Grid.Actions.Delete:
                    case ej.Grid.Actions.Search:
                    case ej.Grid.Actions.Reorder:
                    case ej.Grid.Actions.BatchSave:
                        if (this.model.groupSettings.groupedColumns.length == 0) {
                            var temp = document.createElement('div'),temp1;
                            this.getContentTable().find("colgroup").first().replaceWith(this._getMetaColGroup());
                            this.model.detailsTemplate != null && this.getContentTable().find("colgroup").first().prepend(this._getIndentCol());
                            var currentPage = this._currentPage();
                            if (this.model.editSettings.editMode == "externalform" || this.model.editSettings.editMode == "externalformtemplate")
                                $("#" + this._id + "_externalEdit").css("display", "none");
                            if (this.model.scrollSettings.frozenColumns > 0)
                                temp.innerHTML = this._renderByFrozenDesign();
                            else {
                                temp.innerHTML = ['<table>', $.render[this._id + "_JSONTemplate"](this.model.currentViewData), '</table>'].join("");
								if(args.data) {
									temp1 = document.createElement('div');
									temp1.innerHTML = ['<table>', $.render[this._id + "_JSONTemplate"](args.data), '</table>'].join("");
								}
                                tableEle = this.getContentTable().get(0);
                                tbodyEle = tableEle.lastChild;
                                if ((args.requestType == "save" || args.requestType == "cancel") && this.model.editSettings.editMode != "batch") {
                                    rowIndex = !ej.isNullOrUndefined(args.selectedRow) ? args.selectedRow : this._selectedRow();
                                    if (this.model.detailsTemplate != null) {
                                        rowTr = $(tbodyEle.childNodes[rowIndex]);
                                        rowEle = $(tbodyEle.childNodes).not('.e-detailrow');
                                        for (var i = 0; i < rowEle.length; i++) {
                                            if (rowTr.is(rowEle[i]))
                                                rowIndex = i;
                                        }
                                    }

                                    if (this.model.editSettings.editMode == "normal" || this.model.editSettings.editMode == "inlineform" || this.model.editSettings.editMode == "inlineformtemplate") {                                      
                                        $oldChild = this.getContentTable().find('.e-addedrow').get(0);
                                        $editedTr = this.getContentTable().find('.e-editedrow');
                                        $newChild = ($editedTr.length || args.requestType == "cancel") ? temp.firstChild.firstChild.firstChild : temp1.firstChild.firstChild.lastChild;
                                        if ($editedTr.length) {
                                            $newChild = temp.firstChild.firstChild.childNodes[rowIndex];
                                            if (this.model.editSettings.editMode == "inlineform" || this.model.editSettings.editMode == "inlineformtemplate") {
                                                $oldChild = $editedTr.prev('tr').get(0);
                                                $editedTr.remove();
                                            } else
                                                $oldChild = $editedTr.get(0);
                                            if (args.requestType == "cancel") {
                                                $($oldChild).replaceWith($($newChild));
                                            } else if (!ej.isNullOrUndefined(this._filteredRecordsCount) && this._filteredRecordsCount < this._previousFilterCount) {
                                                if (this.model.detailsTemplate != null && $($oldChild).next('tr.e-detailrow').length)
                                                    tbodyEle.removeChild($($oldChild).next('tr.e-detailrow').get(0));
                                                $($oldChild).remove();
                                                if (this.model.pageSettings.pageSize <= this.model.currentViewData.length && this.model.groupSettings.groupedColumns.length == 0)
                                                    tbodyEle.appendChild(temp.firstChild.firstChild.lastChild);
                                            } else {
                                                tbodyEle.replaceChild($newChild, $oldChild);
                                            }
                                        } else {
                                            if (args.requestType == "cancel" || (args.requestType == "save" && !ej.isNullOrUndefined(this._filteredRecordsCount) && this._filteredRecordsCount == this._previousFilterCount)) {
                                                if (!ej.isNullOrUndefined($oldChild)) {
                                                    $($oldChild).remove();
                                                    if (this.model.pageSettings.pageSize <= this.model.currentViewData.length && this.model.groupSettings.groupedColumns.length == 0)
                                                        tableEle.lastChild.appendChild(temp.firstChild.firstChild.lastChild);
                                                }
                                                if (args.requestType == "cancel" && this._selectedRow() != -1)
                                                    this.clearSelection();

                                            } else if (this.model.currentViewData.length == 1) {
                                                $(tbodyEle).empty();
                                                tbodyEle.appendChild($newChild);
                                            } else 
                                                tbodyEle.replaceChild($newChild, $oldChild);                                            
                                        }
                                    } else if (this.model.editSettings.editMode == "dialog" || this.model.editSettings.editMode == "dialogtemplate" || this.model.editSettings.editMode == "externalform" || this.model.editSettings.editMode == "externalformtemplate") {
                                        $editedTr = this.element.find('.e-editedrow');
                                        if (args.requestType == "cancel" || (!$editedTr.length && !ej.isNullOrUndefined(this._filteredRecordsCount) && this._filteredRecordsCount == this._previousFilterCount)) {
                                            this.clearSelection();
                                            this.model.allowPaging && this._refreshGridPager();
                                            break;
                                        } else if ($editedTr.length) {
                                            $newChild = temp.firstChild.firstChild.childNodes[rowIndex];
                                            $oldChild = tbodyEle.childNodes[rowIndex];
                                            if (this.model.detailsTemplate != null)
                                                $oldChild = $(tbodyEle.childNodes).not('.e-detailrow').eq(rowIndex).get(0);
                                            if (!ej.isNullOrUndefined(this._filteredRecordsCount) && this._filteredRecordsCount < this._previousFilterCount) {
                                                if (this.model.detailsTemplate != null && $($oldChild).next('tr.e-detailrow').length)
                                                    tbodyEle.removeChild($($oldChild).next('tr.e-detailrow').get(0));
                                                $($oldChild).remove();
                                                if (this.model.pageSettings.pageSize <= this.model.currentViewData.length)
                                                    tbodyEle.appendChild(temp.firstChild.firstChild.lastChild);
                                            } else
                                                tbodyEle.replaceChild($newChild, $oldChild);
                                        } else if (this.model.currentViewData.length == 1 && this.getContentTable().find('td.e-rowcell').length == 0) {
                                            $newChild = temp.firstChild.firstChild.firstChild;
                                            $(tbodyEle).empty();
                                            tbodyEle.appendChild($newChild);
                                        } else {
                                            newChild = ($editedTr.length || args.requestType == "cancel") ? temp.firstChild.firstChild.firstChild : temp1.firstChild.firstChild.lastChild;
                                            this.getContentTable().find('tbody').first().prepend($(newChild));
                                            if (this.model.pageSettings.pageSize <= this.model.currentViewData.length)
                                                tbodyEle.removeChild(tbodyEle.lastChild);
                                            if (this.model.detailsTemplate != null && $(tableEle.lastChild.lastChild).children('.e-detailrowexpand').length)
                                                tbodyEle.removeChild(tbodyEle.lastChild);
                                        }
                                    }
                                    if (this.model.enableAltRow)
                                        this._refreshAltRow();
                                } else if (args.requestType == "delete") {
                                    $editedrow = this.element.find('.e-editedrow');
                                    $oldChild = this.getContentTable().find('.e-editedrow').get(0);
                                    $newChild = ($editedrow.length) ? temp.firstChild.firstChild.firstChild : temp1.firstChild.firstChild.lastChild;

                                    if ($editedrow.length != 0 && (this.model.editSettings.editMode == "normal" || this.model.editSettings.editMode == "externalform" || this.model.editSettings.editMode == "externalformtemplate")) {
                                        $($oldChild).replaceWith($($newChild));
                                    }
                                    else if (this.model.editSettings.editMode == "inlineform" || this.model.editSettings.editMode == "inlineformtemplate") {
                                        $oldChild = $editedrow.prev('tr').get(0);
                                        $editedrow.remove();
                                    }
                                    else
                                        $oldChild = $editedrow.get(0);
                                    if (this.model.pageSettings.pageSize <= this.model.currentViewData.length)
                                        tbodyEle.appendChild(temp.firstChild.firstChild.lastChild);
                                    if (this.model.detailsTemplate != null) {
                                        var visibleRow = this.getContentTable().find('.e-detailrow:visible');
                                        $.each(visibleRow, function (indx, item) {
                                            if (visibleRow.eq(indx).closest('tr').prev().children('.e-detailrowexpand').length == 0)
                                                visibleRow.eq(indx).remove();
                                        });
                                    }
                                    if (this.model.enableAltRow)
                                        this._refreshAltRow();
                                } else
                                    this.getContentTable().get(0).replaceChild(this.model.rowTemplate != null ? temp.firstChild.lastChild : temp.firstChild.firstChild, this.getContentTable().get(0).lastChild);

                            }
                            this._currentJsonData = this.model.currentViewData;
                            this._gridRows = this.getContentTable().get(0).rows;
                            if (this.model.scrollSettings.frozenColumns > 0)
                                this._gridRows = [this._gridRows, this.getContentTable().get(1).rows];
                            this._eventBindings();
                            var model = {};
                            if ((args.requestType == "sorting" || args.requestType == "filtering") && this.model.scrollSettings.allowVirtualScrolling) {
                                if (args.requestType == "filtering") {
                                    this.getContent().first().ejScroller("refresh").ejScroller("isVScroll") ? this.element.find(".gridheader").addClass("e-scrollcss") : this.element.find(".gridheader").removeClass("e-scrollcss");
                                    var model = this._refreshVirtualPagerInfo();
                                }
                                this._refreshVirtualContent(currentPage, model);
                                args.requestType == "filtering" && this.getContent().first().ejScroller("refresh");
                            }
                            if (this.model.allowPaging) {
                                if (this.model.filterSettings.filteredColumns.length)
                                    this.getPager().ejPager({ totalRecordsCount: this._searchCount == null ? this._filteredRecordsCount : this._searchCount, currentPage: this._currentPage() });
                                else
                                    this.getPager().ejPager({ totalRecordsCount: this._searchCount == null ? this._gridRecordsCount : this._searchCount, currentPage: this._currentPage() });
                                this._refreshGridPager();
                            }
                            break;
                        }
                    case ej.Grid.Actions.Grouping:
                        this._group(args);
                        break;
                    case ej.Grid.Actions.BeginEdit:
                        this._edit(args);
                        break;
                    case ej.Grid.Actions.Add:
                        this._add(args);
                        break;
                    case ej.Grid.Actions.Ungrouping:
                        this._ungroup(args);
                        break;
                    case ej.Grid.Actions.VirtualScroll:
                        !this._isVirtualRecordsLoaded && this._replacingContent();
                        break;
                }
            } else
                this.getContentTable().find('tbody').empty().first().append(this._getEmptyTbody());
            this._completeAction(args);
        },
        _completeAction: function (args) {
            this.model.isEdit = false;
            this._confirmedValue = false;
            if (ej.Grid.Actions.Grouping == args.requestType && ej.isNullOrUndefined(args.columnName))
                return;
            this.setWidthToColumns();
            if (ej.Grid.Actions.Paging == args.requestType || ej.Grid.Actions.BatchSave == args.requestType)
                this._refreshGridPager();
            else if ((ej.Grid.Actions.Sorting == args.requestType && this.model.allowSorting) || ej.Grid.Actions.Refresh == args.requestType) {
                if (ej.gridFeatures.sort)
                    this._sortCompleteAction(args);
                this.model.allowPaging && this._refreshGridPager();
                if (!this._initialRender && (this.model.scrollSettings.frozenRows > 0 || this.model.scrollSettings.frozenColumns > 0))
                    this._refreshScroller(args);
            } else if (ej.Grid.Actions.Delete == args.requestType || ej.Grid.Actions.Save == args.requestType || ej.Grid.Actions.Search == args.requestType) {
                this._editEventTrigger(args);
                if (this.model.allowPaging)
                    this._refreshPagerTotalRecordsCount();
            } else if (ej.Grid.Actions.Filtering == args.requestType)   
                this._filterCompleteAction();
            else if (ej.Grid.Actions.BeginEdit == args.requestType || ej.Grid.Actions.Add == args.requestType)
                this._editCompleteAction(args);
            else if (ej.Grid.Actions.Grouping == args.requestType || ej.Grid.Actions.Ungrouping == args.requestType)
                this["_" + args.requestType + "CompleteAction"](args);
            if (this.model.toolbarSettings.showToolbar)
                this.refreshToolbar();
            if (!this._initialRender && this.model.showSummary && this.model.summaryRows.length > 0) {
                this._createSummaryRows(this.getFooterTable());
                var hlen = this.getHeaderTable().find('col').length;
                var flen = this.getFooterTable().find('col').length;
                if (hlen > flen) {
                    var col = this.getHeaderTable().find('col').first().clone();
                    this.getFooterTable().find('colgroup').prepend(col);
                }
            }
            if (!this._initialRender && ej.gridFeatures.selection)
                this._setCurrentRow(args.requestType);
            this.model.editSettings.editMode == "batch" && this.refreshBatchEditMode();
            if (!this._initialRender && this.model.allowScrolling && (this._checkScrollActions(args.requestType) || (this.model.editSettings.editMode.indexOf("inline") != -1 && args.requestType == "beginedit")))
                this._refreshScroller(args);
            if (this._customPop != null && args.requestType != "sorting") {
                this._customPop.hide();
            }
            if (this.model.allowScrolling && (ej.Grid.Actions.Filtering == args.requestType || ej.Grid.Actions.Paging == args.requestType || ej.Grid.Actions.Sorting == args.requestType ||
                ej.Grid.Actions.Grouping == args.requestType || ej.Grid.Actions.Ungrouping == args.requestType)) {
                this.getContentTable().find("tr:last").find("td").addClass("e-lastrowcell");
            }
            this._trigger("actionComplete", args);
        },
        _getForeignKeyData: function (data) {
            var proxy = this;
            var column;
            for (i = 0; i < this.model.columns.length; i++) {
                if (this.model.columns[i].foreignKeyValue && this.model.columns[i].dataSource) {
                    var fieldName = ej.isNullOrUndefined(proxy.model.columns[i]["foreignKeyField"]) ? proxy.model.columns[i]["field"] : proxy.model.columns[i]["foreignKeyField"];
                    this.model.columns[i].dataSource.filter(function (col) {
                        var value = data[proxy.model.columns[i]["field"]];
                        var fValue = !isNaN(parseFloat(value)) && isFinite(value) ? parseFloat(value) : value;
                        if (col[fieldName] == fValue)
                            return column = col;
                    });
                }
            }
            return column;
        },
        _foreignKeyBinding: function (curColumn, cellValue, gridId) {
            if (typeof (curColumn) == "string")
                curColumn = JSON.parse(curColumn);
            var cellData;
            curColumn.dataSource.filter(function (col) {
                if (col[curColumn.foreignKeyField] == cellValue)
                    return cellData = curColumn.type == "date" ? new Date(col[curColumn.foreignKeyValue]) : col[curColumn.foreignKeyValue];
            });
            if (curColumn.format) {
                var gridObj = ej.isNullOrUndefined(gridId) ? this : this.getRsc("helpers", gridId);
                cellData = gridObj.formatting(curColumn.format, cellData);
            }
            return cellData;
        },
        _eventBindings: function () {
            var rowLength = this.model.frozenColumns > 0 ? this._gridRows[0].length : this._gridRows.length;
            if (ej.gridFeatures.common)
                this._refreshUnboundTemplate(this.getContentTable());
            if (this._gridRecordsCount != 0) {
                if (this.model.queryCellInfo != null || this.model.rowDataBound != null) {
                    for (var row = 0; row < rowLength; row++)
                        this._rowEventTrigger(this.getRowByIndex(row), this._currentJsonData[row]);
                }
            }
        },
        _rowEventTrigger: function (row, data) {
            var args = { row: row, data: data };
            this._trigger("rowDataBound", args);
            var tdCells = row.cells;
            var $tdRowcells = $(row).find(".e-rowcell");
            for (var cellIndex = 0; cellIndex < $tdRowcells.length; cellIndex++) {
                var args = { cell: $tdRowcells[cellIndex], data: data, text: $tdRowcells[cellIndex].innerHTML };
                var foreignKeyData = this._getForeignKeyData(args.Data);
                if ($($tdRowcells[cellIndex]).hasClass("e-rowcell"))
                    args.column = this.model.columns[cellIndex];
                if (!ej.isNullOrUndefined(foreignKeyData))
                    args.foreignKeyData = foreignKeyData;
                this._trigger("queryCellInfo", args);
            }

        },
        formatting: function (formatstring, str) {
            formatstring = formatstring.replace(/%280/g, "\"").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
            var s = formatstring;
            var frontHtmlidx, FrontHtml, RearHtml, lastidxval;
            frontHtmlidx = formatstring.split("{0:");
            lastidxval = formatstring.split("}");
            FrontHtml = frontHtmlidx[0];
            RearHtml = lastidxval[1];
            if (typeof (str) == "string" && $.isNumeric(str))
                str = Number(str);
            if (formatstring.indexOf("{0:") != -1) {
                var toformat = new RegExp("\\{0(:([^\\}]+))?\\}", "gm");
                var formatVal = toformat.exec(formatstring);
                if (formatVal != null && str != null) {
                    if (FrontHtml != null && RearHtml != null)
                        str = FrontHtml + Globalize.format(str, formatVal[2]) + RearHtml;
                    else
                        str = Globalize.format(str, formatVal[2]);
                } else if (str != null)
                    str = str;
                else
                    str = "";
                return str;
            } else if (this.data != null && this.data.Value == null) {
                $.each(this.data, function (dataIndex, dataValue) {
                    s = s.replace(new RegExp('\\{' + dataIndex + '\\}', 'gm'), dataValue);
                });
                return s;
            } else {
                return this.data.Value;
            }
        },
        
        setWidthToColumns: function () {
            var $cols1 = this.getContentTable().children("colgroup").find("col");
            var $cols2 = this.getHeaderTable().children("colgroup").find("col");
            var width = this.element.width(), frozenWidth = 0;
            if (this.model.groupSettings.groupedColumns.length && !this.model.allowScrolling && this.model.groupSettings.showGroupedColumn) {
                var browserDetails = this.getBrowserDetails();
                if (browserDetails.browser == "msie" && parseInt(browserDetails.version, 10) > 8)
                    $cols1.first().css("width", ((30 / width) * 100) + "%");
            }
            var colCount = this.model.columns.length;
            if ($cols1.length > colCount) $cols1.splice(0, ($cols1.length - colCount));
            if ($cols2.length > colCount) $cols2.splice(0, ($cols2.length - colCount));

            for (var i = 0; i < $cols2.length; i++) {
                if (this.model.allowResizeToFit && this.model.columns[i]["width"] === undefined) {
                    hCellIndex = this.model.groupSettings.groupedColumns.length ? (i + this.model.groupSettings.groupedColumns.length) : i;
                    var contentWidth = this._getContentWidth(i);
                    var headerWidth = this._getHeaderContentWidth(this.getHeaderTable().find('.e-headercelldiv').eq(hCellIndex));
                    var finalWidth = contentWidth > headerWidth ? contentWidth : headerWidth;
                    finalWidth = finalWidth + (finalWidth * 0.2);
                    this._columnsWidthCollection[i] = finalWidth;
                }
                if (!ej.isNullOrUndefined(this._columnsWidthCollection[i])) {
                    $cols1.eq(i).width(this._columnsWidthCollection[i]);
                    $cols2.eq(i).width(this._columnsWidthCollection[i]);
                } else if (this.model.allowScrolling) {
                    var colWidth = (width / this.model.columns.length).toFixed(2) + "px";
                    $cols1.eq(i).css("width", colWidth);
                    $cols2.eq(i).css("width", colWidth);
                    this._columnsWidthCollection[i] = parseFloat((width / this.model.columns.length).toFixed(2));
                }
            }
            if (this.model.isEdit) {
                var clonedCol = $cols1.clone(), $colGroup = this.model.scrollSettings.frozenColumns > 0 ? this.getContent().find(".gridform").find("colgroup") : $("#" + this._id + "EditForm").find("colgroup");
                this.model.scrollSettings.frozenColumns > 0 && $colGroup.first().empty().append(clonedCol.splice(0, this.model.scrollSettings.frozenColumns));
                $colGroup.last().empty().append(clonedCol);
                this.model.detailsTemplate != null && $colGroup.prepend(this._getIndentCol());
            }
            if (this.model.groupSettings.groupedColumns.length) {
                var $grouedColGroup = this.getContentTable().find(".e-recordtable").children("colgroup");
                for (var i = 0; i < $grouedColGroup.length; i++) {
                    var clonedCol = $cols1.clone();
                    if (this.model.detailsTemplate != null) clonedCol.splice(0, 0, this._getIndentCol()[0]);
                    $grouedColGroup.eq(i).empty().append(clonedCol);
                }
            }
            if (this.model.scrollSettings.frozenColumns > 0) {
                var totalWidth = 0, frozenWidth;
                for (var i = 0; i < this._columnsWidthCollection.length; i++) {
                    totalWidth += this._columnsWidthCollection[i];
                    if (this.model.scrollSettings.frozenColumns - 1 == i)
                        frozenWidth = Math.ceil(totalWidth);
                }
                this.getContent().find(".e-frozencontentdiv").outerWidth(frozenWidth)
                    .end().find(".e-movablecontentdiv").outerWidth(totalWidth - frozenWidth);
                this.getHeaderContent().find(".e-frozenheaderdiv").outerWidth(frozenWidth)
                    .end().find(".e-movableheaderdiv").outerWidth(totalWidth - frozenWidth);
            }
        },
        _initialEndRendering: function () {
            // use this method to add behaviour after grid render.
            if (this.model.editSettings.allowEditing || this.model.editSettings.allowAdding) {
                if (this.model.editSettings.editMode == "dialog" || this.model.editSettings.editMode == "dialogtemplate")
                    this.element.append(this._renderDialog());
                else if (this.model.editSettings.editMode == "externalform" || this.model.editSettings.editMode == "externalformtemplate")
                    this.element.append(this._renderExternalForm());
            }
            if (this._selectedRow() != -1)
                this.selectRows(this._selectedRow());
            this.model.editSettings.editMode == "batch" && this._renderConfirmDialog();
            this.model.scrollSettings.frozenColumns > 0 && this._renderAlertDialog();
            if (this.model.allowMultiSorting || this.model.selectionType == "mulitple")
                this._renderMultiTouchDialog();
            if (this.model.scrollSettings.frozenColumns > 0 && !this.model.allowScrolling) {
                this.getContent().remove();
                this.getHeaderTable().eq(1).remove();
                this._alertDialog.find(".e-content").text(this._getLocalizedLabels("FrozenColumnsScrollAlert"));
                this._alertDialog.ejDialog("open");
                return;
            }
            this.model.scrollSettings.allowVirtualScrolling && this._createPagerStatusBar();
            this._getRowHeights();
            this.model.allowScrolling && this._renderScroller();
            if (this.model.scrollSettings.allowVirtualScrolling) {
                this._refreshVirtualContent();
                this.getContent().first().ejScroller("refresh");
                if (this.getContent().ejScroller("isVScroll"))
                    this.element.find(".e-gridheader").addClass("e-scrollcss");
                else
                    this.element.find(".e-gridheader").removeClass("e-scrollcss");
            }
            if (this.model.allowFiltering && this.model.filterSettings.filterType == "filterbar" && !this.model.allowPaging && !this.model.scrollSettings.allowVirtualScrolling)
                this._createPagerStatusBar();
            if (ej.gridFeatures.common)
                this.rowHeightRefresh()
        },
        _getRowHeights: function () {
            var trs = this.getRows();
            if (trs !== null) {
                this._rowHeightCollection = [];
                if ((this.model.scrollSettings.frozenColumns > 0 && trs[0] !== undefined) || (typeof trs[0].item !== "undefined" && typeof trs[0].length == "number"))
                    trs = trs[0];
                for (var i = 0; i < trs.length; i++) {
                    this._rowHeightCollection[i] = trs[i].offsetTop;
                }
            }
            return this._rowHeightCollection;
        },
        _getEmptyTbody: function () {
            var $emptyTd = ej.buildTag('td.emptyrecord', this._getLocalizedLabels("EmptyRecord"), {}, { colSpan: this.model.columns.length });
            return $(document.createElement("tr")).append($emptyTd);
        },
        _getIndentCol: function () {
            return ej.buildTag("col", "", { width: "30px" });
        },
        _createSortElement: function () {
            return ej.buildTag('span.e-icon', "&nbsp;");
        },
        _addSortElementToColumn: function (field, direction) {
            var column = this.getColumnByField(field), imageDirection;
            var index = $.inArray(column, this.model.columns);
            var $headerCellDiv = this.getHeaderTable().find("thead").find(".e-headercell").not(".e-detailheadercell").eq(index).find(".e-headercelldiv");
            $headerCellDiv.find(".e-ascending,.e-descending").remove();
            imageDirection = direction == "ascending" ? "e-rarrowup-2x" : "e-rarrowdown-2x";
            $headerCellDiv.append(this._createSortElement().addClass("e-" + direction + " " + imageDirection));
            $headerCellDiv.parent().attr("aria-sort", direction);

        },
        _wireEvents: function () {
            this._on(this.element, $.isFunction($.fn.tap) ? "tap" : "click", this._clickHandler);
            this._on(this.element, $.isFunction($.fn.tap) ? "tap" : "click", ".e-gridheader", this._mouseClickHandler);
            if (ej.gridFeatures.common) {
                this._on(this.element, "dblclick", ".e-gridcontent", this._recorddblClickHandler);
                if (this.model.rightClick)
                    this._on(this.element, "contextmenu", this._rightClickHandler);
                this._on(this.element, "click", ".e-gridcontent", this._recordClick);
                this._enableRowHover();
                this._on(this.element, "swipeleft swiperight", ".e-gridcontent .e-table", $.proxy(this._touchGrid, this));
                this._on(this.element, "mousedown", ".e-gridheader", this._headerMouseDown);
                this._on(this.element, "mouseover mouseleave", ".e-gridheader", this._headerHover);
                this._on(this.element, ej.eventType.mouseMove, ".e-gridheader", this._headerHover);
                this.model.allowResizeToFit && this._on(this.element, "dblclick", ".e-gridheader", this._columnResizeToFit);
                if (this.model.allowResizing) {
                    this._on(this.element, ej.eventType.mouseMove, this._mouseMove);
                    this._on(this.element, "mouseup", this._mouseUp);
                }
				if (this.model.allowKeyboardNavigation) {
					this.element[0].tabIndex = 0;
					this.element[0].accessKey = "e";
					this._on(this.element, "keyup", this._keyDownHandler);
                }
            }
            if (ej.gridFeatures.edit) {
                this._enableEditingEvents();
                this._on(this.element, "click", ".e-gridcontent .e-unboundcelldiv", this._unboundClickHandler);
            }
            if (this.model.allowGrouping) {
                this._enableGroupingEvents();
                this._on(this.element, "mouseenter mouseleave", ".e-groupdroparea,.e-groupheadercell", this._dropAreaHover);
            }
            this._enableFilterEvents();
        },
        _enableFilterEvents: function () {
            if (this.model.allowMultiSorting || this.model.selectionType == "multiple" || this.model.allowFiltering)
                this._on($(document), "click", this._docClickHandler);
            if (this.model.allowFiltering) {
                var proxy = this, $target;
                this._off(this.element, "keyup", ".e-filterbar input")._on(this.element, "keyup", ".e-filterbar input", this._filterBarHandler);
                this._on(this.element, "focus click", ".e-filterbar", this._filterBarClose);
            }
        },
        _docClickHandler: function (e) {
            var details = this.getBrowserDetails();
            if (this._customPop != null && this.element.find(e.target).length == 0)
                this._customPop.hide();
            if (this.model.allowFiltering) {
                if (this.model.filterSettings.filterType == "menu") {
                    if (this._$colType && $(e.target).find(".e-grid.e-dlgcontainer").length > 1)
                        if (details.browser == "msie")
                            e.target.tagName != "BODY" && this._closeFilterDlg();
                        else
                            this._closeFilterDlg();
                } else if (!$(e.target).hasClass("e-filtertext"))
                    this.getFilterBar().find(".e-cancel").addClass("e-hide");
            }

        },
        _mouseClickHandler: function (e) {
            if (this.getHeaderTable().find('.e-columnheader').css('cursor') == "col-resize")
                return;
            if ($(e.target).is(".e-ascending, .e-descending"))
                e.target = e.target.parentNode;
            var $target = $(e.target);
            if (this._$fDlgIsOpen && this.model.allowFiltering && this.model.filterSettings.filterType == "menu") {
                $.fx.off = true;
                $("#" + this._id + "_" + this._$prevColType + "Dlg").ejDialog("close");
                $.fx.off = false;
            }
            this.getHeaderTable().find(".e-columnheader").find(".e-headercellactive").removeClass("e-headercellactive").removeClass("e-active");
            if ($target.hasClass("e-headercelldiv") || (!$target.hasClass("e-togglegroupbutton") && $target.closest(".e-headercelldiv").length)) {
                if (!this.model.allowSorting || ej.gridFeatures.sort === undefined)
                    return;
                $target = $target.hasClass("e-headercelldiv") ? $target : $target.closest(".e-headercelldiv");
                var columnName = $target.attr("ej-mappingname");
                var columnSortDirection = ej.sortOrder.Ascending;
                this._$prevSElementTarget = this._$curSElementTarget;
                this._$curSElementTarget = $target;
                if ($target.find('span').hasClass("e-ascending"))
                    var columnSortDirection = ej.sortOrder.Descending;
                else
                    var columnSortDirection = ej.sortOrder.Ascending;
                if (e["pointerType"] == "touch" && this._customPop != null && !this._customPop.is(":visible") && this._customPop.find(".e-sortdirect").hasClass("e-spanclicked"))
                    this._customPop.show();
                if (e["pointerType"] == "touch" && this._customPop != null && (this._customPop.find(".e-rowselect").is(":visible") || !this._customPop.find(".e-sortdirect").hasClass("e-spanclicked")) && this.model.allowMultiSorting) {
                    var $offset = $target.offset();
                    this._customPop.removeAttr("style");
                    this._customPop.offset({ left: $offset.left, top: $offset.top - this.getHeaderTable().find(".e-columnheader").height() }).find(".e-sortdirect").show().end()
                        .find(".e-rowselect").hide().end().show();
                }
                if (this.model.allowMultiSorting && (e.ctrlKey || this._enableSortMultiTouch))
                    this.multiSortRequest = true;
                if (e.shiftKey && $.inArray(columnName, this.model.groupSettings.groupedColumns) == -1) {
                    this._removeSortedColumnFromCollection(columnName);
                    this.multiSortRequest = true;
                    columnName = null;
                }
                this.sortColumn(columnName, columnSortDirection);
            } else if ($target.hasClass("e-togglegroupbutton") && this.model.allowGrouping) {
                var field = $target.parent().attr("ej-mappingname");
                $target.hasClass("e-togglegroup") && this.groupColumn(field);
                $target.hasClass("e-toggleungroup") && this.ungroupColumn(field);
            } else if ($target.hasClass("e-filtericon") || $target.hasClass("e-filteredicon")) {
                var columnName = $target.parent().find(".e-headercelldiv").attr("ej-mappingname");
                this._$prevFieldName = this._$curFieldName;
                if (this.model.allowFiltering) {
                    var proxy = this;
                    $.each(this.model.columns, function (indx, col) {
                        if (col.field == columnName) {
                            proxy._$colType = col.type;
                            proxy._$curFieldName = col.field;
                            proxy._$colFormat = col.format;
                            proxy._$colForeignKeyField = col.foreignKeyField ? col.foreignKeyField : col.field;
                            proxy._$colForeignKeyValue = col.foreignKeyValue;
                            proxy._$colDropdownData = col.dataSource;
                        }
                    });
                    var $id = "#" + this._id + "_" + this._$colType + "Dlg";
                    if (this._$colType == "string") {
                        if (this._$colForeignKeyValue && this._$colDropdownData)
                            $("#" + this._id + "_acString").ejAutocomplete({ fields: { text: proxy._$colForeignKeyValue, key: proxy._$colForeignKeyField }, dataSource: proxy._$colDropdownData });
                        else
                            $("#" + this._id + "_acString").ejAutocomplete({ fields: { text: proxy._$curFieldName, key: this._getIdField() }, dataSource: this._dataSource() });
                    } else if (this._$colType == "date") {
                        if (this._$colFormat != undefined) {
                            this._$colFormat = this._$colFormat.replace("{0:", "").replace("}", "");
                            $($id).find(".e-datewidget input").ejDatePicker({ dateFormat: this._$colFormat.replace("{0:", "").replace("}", "") });
                        }
                        else
                            $($id).find(".e-datewidget input").ejDatePicker({ dateFormat: "MM/dd/yyyy" });
                    }
                    this._setFilterFieldValues($id);
                    var docWidth = $(document).width(), dlgWidth = 250, xPos = e.clientX;
                    if (docWidth - e.clientX <= dlgWidth)
                        xPos = docWidth - dlgWidth;
                    $($id).ejDialog({ position: { X: xPos, Y: $target.parent().offset().top + 32 } })
                        .ejDialog("open");
                    if (this._$colType == "number")
                        $($id).find(".e-numerictextbox").ejNumericTextbox({ width: "230px" });
                    this._$prevColType = this._$colType;
                    this._$fDlgIsOpen = true;
                }
            }

            e.preventDefault();

        },
        _clickHandler: function (e) {
            var $target = $(e.target), fieldName, $form = $("#" + this._id + "EditForm"), index;
            if ($target.closest(".e-grid").attr("id") !== this._id) return;
            if ($target.closest("#" + this._id + "EditForm").length)
                return;
            if ($target.hasClass("e-rowcell") || $target.parent().hasClass("e-rowcell")) {
                if (this._bulkEditCellDetails.cancelSave) {
                    this._bulkEditCellDetails.cancelSave = false;
                    return;
                }
                if (this.model.editSettings.editMode == "batch" && ($.isFunction($.validator) && $form.length && $form.validate().errorList.length > 0))
                    return;
                this.model.editSettings.editMode == "batch" && this.element.focus();
                index = $target.closest("tr").hasClass("e-insertedrow") ? this.model.groupSettings.groupedColumns.length : 0;
                this._bulkEditCellDetails.columnIndex = $target.hasClass("e-rowcell") ? $target.index() : $target.parent().index() - index;
                this._bulkEditCellDetails.rowIndex = $(this.getRows()).index($target.closest('tr'));
                if (this.model.allowSelection && ej.gridFeatures.selection) {
                    if (this.model.selectionType == "multiple") {
                        if (e.ctrlKey || this._enableSelectMultiTouch) {
                            this.multiSelectCtrlRequest = true;

                        }
                        if (e.shiftKey) {
                            this._multiSelectShiftRequest = true;
                            this.selectRows(this._previousIndex, this.getIndexByRow($target.closest('tr')));
                        }
                        if (e["pointerType"] == "touch" && this._customPop != null && !this._customPop.is(":visible") && this._customPop.find(".e-rowselect").hasClass("e-spanclicked"))
                            this._customPop.show();
                        if (e["pointerType"] == "touch" && this._customPop != null && (this._customPop.find(".e-sortdirect").is(":visible") || !this._customPop.find(".e-rowselect").hasClass("e-spanclicked")) && this.model.selectionType == "multiple") {
                            this._customPop.removeAttr("style");
                            var offset = $target.offset();
                            this._customPop.offset({ top: 0, left: 0 }).offset({ left: offset.left, top: offset.top - this.getRowHeight() }).find(".e-sortdirect").hide().end()
                                .find(".e-rowselect").show().end().show();
                        }
                    }
                    !this._multiSelectShiftRequest && this.selectRows(this.getIndexByRow($target.closest('tr')));
                    this._multiSelectShiftRequest = false;
                }
                fieldName = this.model.columns[this._bulkEditCellDetails.columnIndex]["field"];
                if (fieldName)
                    this.model.editSettings.allowEditing && this.model.editSettings.editMode == ej.Grid.EditMode.Batch && this.editCell($.inArray($target.closest("tr").get(0), this.getRows()), fieldName);
            }
            if ($target.hasClass("e-rowselect") || $target.hasClass("e-sortdirect")) {
                if (!$target.hasClass("e-spanclicked")) {
                    $target.addClass("e-spanclicked");
                    if ($target.hasClass("e-rowselect"))
                        this._enableSelectMultiTouch = true;
                    if ($target.hasClass("e-sortdirect"))
                        this._enableSortMultiTouch = true;
                } else {
                    $target.removeClass("e-spanclicked");
                    if ($target.hasClass("e-rowselect"))
                        this._enableSelectMultiTouch = false;
                    if ($target.hasClass("e-sortdirect"))
                        this._enableSortMultiTouch = false;
                    this._customPop.hide();
                }
            }
            if (ej.gridFeatures.common)
                this.expandCollapse($target);
            if (this.model.allowFiltering && this.model.filterSettings.filterType == "menu" && !$target.is(".e-filtericon") && $target.closest(".e-dlgcontainer").length != 1)
                this._closeFilterDlg();
        },
        /**
         * destroy the grid widget
		 * all events bound using this._on will be unbind automatically and bring the control to pre-init state.
		 * @alias ejGrid#destroy
		 * @return jQuery
		 * @example 
		 * &lt;script&gt;
		 * var gridObj = $("#Grid").data("ejGrid");
		 * gridObj.destroy(); // destroy the Grid
		 * &lt;/script&gt;
		 * @example 
		 * &lt;script&gt;
		 * // destroy the Grid
		 * $("#Grid").ejGrid("destroy");        
		 * &lt;/script&gt;
         */
        _destroy: function () {
            /// <summary>This function is  used to destroy the Grid Object</summary>
            this.element.find(".e-gridheader").find(".e-headercontent,.e-movableheader")
                .add(this.getContent().find(".e-content,.e-movablecontent")).unbind('scroll');
            var editForm = $("#" + this._id + "EditForm");
            if (editForm.length) {
                var $formEle = editForm.find('.e-field'), $element;
                for (var i = 0; i < $formEle.length; i++) {
                    $element = $($formEle[i]);
                    if ($element.hasClass('e-datetimepicker'))
                        $element.ejDateTimePicker("destroy");
                    else if ($element.hasClass('e-datepicker'))
                        $element.ejDatePicker("destroy");
                    else if ($element.hasClass('e-dropdownlist'))
                        $element.ejDropDownList("destroy");
                }
                editForm.remove();
            }
            if (this._confirmDialog)
                this._confirmDialog.ejDialog("destroy");
            if (this.model.allowFiltering && this.model.filterSettings.filterType == "menu") {
                var proxy = this, $colType;
                $.each(this.model.columns, function (indx, col) {
                    $colType = col.type;
                    $("#" + proxy._id + $colType + "_ddinput_popup_wrapper").remove();
                    if ($colType == "string")
                        $("#" + proxy._id + "_stringDlg").find('.e-autocomplete').ejAutocomplete("destroy");
                    else if ($colType == "date")
                        $("#" + proxy._id + "_dateDlg").find('.e-datepicker').ejDatePicker("destroy");
                    else if ($colType == "number")
                        $("#" + proxy._id + "_numberDlg").find('.e-numerictextbox').ejNumericTextbox("destroy");
                });
            }
            this.element.empty().removeClass("e-grid " + this.model.cssClass);
            this.element.ejWaitingPopup("destroy");
        },
        _getLocalizedLabels: function (property) {
            return (ej.Grid.locale[this.model.locale] === undefined || ej.Grid.locale[this.model.locale][property] === undefined) ? ej.Grid.locale["en-US"][property] : ej.Grid.locale[this.model.locale][property];
        },
    });
    if (ej.gridFeatures.common)
        $.extend(ej.Grid.prototype, ej.gridFeatures.common);
    if (ej.gridFeatures.edit)
        $.extend(ej.Grid.prototype, ej.gridFeatures.edit);
    if (ej.gridFeatures.filter)
        $.extend(ej.Grid.prototype, ej.gridFeatures.filter);
    if (ej.gridFeatures.group)
        $.extend(ej.Grid.prototype, ej.gridFeatures.group);
    if (ej.gridFeatures.selection)
        $.extend(ej.Grid.prototype, ej.gridFeatures.selection);
    if (ej.gridFeatures.sort)
        $.extend(ej.Grid.prototype, ej.gridFeatures.sort);
    if (ej.gridFeatures.dragAndDrop)
        $.extend(ej.Grid.prototype, ej.gridFeatures.dragAndDrop);

    ej.Grid.locale = {};

    ej.Grid.locale["en-US"] = {
        EmptyRecord: "No records to display",
        GroupDropArea: "Drag a column header here to group its column",
        DeleteOperationAlert: "No records selected for delete operation",
        EditOperationAlert: "No records selected for edit operation",
        SaveButton: "Save",
        OkButton: "OK",
        CancelButton: "Cancel",
        EditFormTitle: "Details of ",
        AddFormTitle: "Add New Record",
        Notactionkeyalert: "This Key-Combination is not avaiable",
        Keyconfigalerttext: "This Key-Combination has already been assigned to ",
        GroupCaptionFormat: "items",
        BatchSaveConfirm: "Are you sure you want to save changes?",
        BatchSaveLostChanges: "Unsaved changes will be lost. Are you sure you want to continue?",
        PagerInfo: "{0} of {1} pages ({2} items)",
        FrozenColumnsViewAlert: "Frozen columns should be in grid view area",
        FrozenColumnsScrollAlert: "Enable allowScrolling while using frozen Columns",
        FrozenNotSupportedException: "Frozen Columns and Rows are not supported for Grouping, Row Template, Detail Template and Batch Editing",
        Add: "Add",
        Edit: "Edit",
        Delete: "Delete",
        Update: "Update",
        Cancel: "Cancel",
        StringMenuOptions: [{ text: "StartsWith", value: "StartsWith" }, { text: "EndsWith", value: "EndsWith" }, { text: "Contains", value: "Contains" }, { text: "Equal", value: "Equal" }, { text: "NotEqual", value: "NotEqual" }],
        NumberMenuOptions: [{ text: "LessThan", value: "LessThan" }, { text: "GreaterThan", value: "GreaterThan" }, { text: "LessThanOrEqual", value: "LessThanOrEqual" }, { text: "GreaterThanOrEqual", value: "GreaterThanOrEqual" }, { text: "Equal", value: "Equal" }, { text: "NotEqual", value: "NotEqual" }],
        PredicateAnd: "AND",
        PredicateOr: "OR",
        Filter: "Filter",
        MatchCase: "Match Case",
        Clear: "Clear"
    };
    ej.Grid.Actions = {
        /** Used to specify paging action in grid   */
        Paging: "paging",
        /** Used to specify sorting action in grid   */
        Sorting: "sorting",
        /** Used to specify filtering action in grid   */
        Filtering: "filtering",
        /** Used to specify begin edit action in grid   */
        BeginEdit: "beginedit",
        /** Used to specify saving action in grid   */
        Save: "save",
        /** Used to specify adding action in grid   */
        Add: "add",
        /** Used to specify deleting action in grid   */
        Delete: "delete",
        /** Used to specify cancelling action in grid   */
        Cancel: "cancel",
        /** Used to specify grouping action in grid   */
        Grouping: "grouping",
        /** Used to specify un-grouping action in grid   */
        Ungrouping: "ungrouping",
        /** Used to specify refresh action in grid   */
        Refresh: "refresh",
        /** Used to specify reordering action in grid   */
        Reorder: "reorder",
        /** Used to specify searching action in grid   */
        Search: "searching",
        /** Used to specify batch save action in grid   */
        BatchSave: "batchsave",
        /** Used to specify virtual scroll action in grid   */
        VirtualScroll: "virtualscroll"
    };
    /**
     * Enum for various grid summary type	 
     * @enum {string}
     * @global 
     */
    ej.Grid.SummaryType = {
        /**  Creates grid with summary type as Average */
        Average: "average",
        /**  Creates grid with summary type as Minimum */
        Minimum: "minimum",
        /**  Creates grid with summary type as Maximum */
        Maximum: "maximum",
        /**  Creates grid with summary type as Count */
        Count: "count",
        /**  Creates grid with summary type as Sum */
        Sum: "sum",
        /**  Creates grid with summary type as TrueCount */
        TrueCount: "truecount",
        /**  Creates grid with summary type as FalseCount */
        FalseCount: "falsecount",
        /**  Creates grid with summary type as Custom */
        Custom: "custom"
    };
    /**
	 * Enum for specifying edit mode in grid 
	 * @enum {string}
	 * @global 
	 */
    ej.Grid.EditMode = {
        /**  Creates grid with editMode as Normal */
        Normal: "normal",
        /**  Creates grid with editMode as Dialog */
        Dialog: "dialog",
        /**  Creates grid with editMode as DialogTemplate */
        DialogTemplate: "dialogtemplate",
        /**  Creates grid with editMode as Batch */
        Batch: "batch",
        /**  Creates grid with editMode as ExternalForm */
        ExternalForm: "externalform",
        /**  Creates grid with editMode as ExternalFormTemplate */
        ExternalFormTemplate: "externalformtemplate",
        /**  Creates grid with editMode as InlineForm */
        InlineForm: "inlineform",
        /**  Creates grid with editMode as InlineTemplateForm */
        InlineTemplateForm: "inlineformtemplate"
    };
    /**
	 * Enum for specifying form position in grid 
	 * @enum {string}
	 * @global 
	 */
    ej.Grid.FormPosition = {
        /**  Creates grid with formPosition as BottomLeft */
        BottomLeft: "bottomleft",
        /**  Creates grid with formPosition as TopRight */
        TopRight: "topright"
    };
    /**
	 * Enum for specifying various editing type in grid	 
	 * @enum {string}
	 * @global 
	 */
    ej.Grid.EditingType = {
        /**  Allows to set edit type as string edit type */
        String: "stringedit",
        /**  Allows to set edit type as boolean edit type */
        Boolean: "booleanedit",
        /**  Allows to set edit type as numeric edit type */
        Numeric: "numericedit",
        /**  Allows to set edit type as drop down edit type */
        Dropdown: "dropdownedit",
        /**  Allows to set edit type as date picker edit type */
        DatePicker: "datepicker",
        /**  Allows to set edit type as date time picker edit type */
        DateTimePicker: "datetimepicker",
    };
    /**
	 * Enum for specifying various unbound type in grid	 
	 * @enum {string}
	 * @global 
	 */
    ej.Grid.UnboundType = {
        /** Used to specify unbound type as Edit   */
        Edit: "edit",
        /** Used to specify unbound type as Save   */
        Save: "save",
        /** Used to specify unbound type as Delete   */
        Delete: "delete",
        /** Used to specify unbound type as Cancel   */
        Cancel: "cancel"
    };
    /**
	 * Enum for specifying various tool bar items in grid	 
	 * @enum {string}
	 * @global 
	 */
    ej.Grid.ToolBarItems = {
        /** Used to add toolbar item for adding records    */
        Add: "add",
        /** Used to add toolbar item for editing records    */
        Edit: "edit",
        /** Used to add toolbar item for deleting records    */
        Delete: "delete",
        /** Used to add toolbar item for updating records    */
        Update: "update",
        /** Used to add toolbar item for cancelling records    */
        Cancel: "cancel",
        /** Used to add toolbar item for searching records    */
        Search: "search"
    };
    /**
     * Enum for various grid filtering type	 
     * @enum {string}
     * @global 
     */
    ej.Grid.FilterType = {
        /**  Creates grid with filtering type as Menu */
        Menu: "menu",
        /**  Creates grid with filtering type as FilterBar */
        FilterBar: "filterbar"
    };

    /**
	 * Enum for specifying various filter bar mode in grid	 
	 * @enum {string}
	 * @global 
	 */
    ej.Grid.FilterBarMode = {
        /** Used to set filter bar mode as Immediate mode */
        Immediate: "immediate",
        /** Used to set filter bar mode as OnEnter mode */
        OnEnter: "onenter"
    };
    /**
     * Enum for various selection type in grid 
     * @enum {string}
     * @global 
     */
    ej.Grid.SelectionType = {
        /**  Support for Single selection only in grid */
        Single: "single",
        /**  Support for multiple selections in grid */
        Multiple: "multiple"
    };
})(jQuery, Syncfusion);;
(function ($, ej, undefined) {
    ej.Grid = ej.Grid || {};
     ej.Grid.gridResize = function (instance) {
        this.$headerTable = instance.getHeaderTable();
        this.gridInstance = instance;
        this._colMinWidth = 15;
        this._$visualElement = $();
        this._currentCell = -1;
        this._allowStart = false;
        this._oldWidth = null;
        this._orgX = null;
        this._orgY = null;
        this._extra = null;
        this._expand = false;
        this._target = null;
    }

    ej.Grid.gridResize.prototype = {
        _mouseHover: function (e) {
            if (this._$visualElement.is(":visible"))
                return;
            if ($(e.target).is(".e-headercelldiv"))
                e.target = e.target.parentNode;
            var $target = $(e.target);
            if ($target.hasClass("e-headercell")) {
                var _resizableCell = e.target;
                var location = _resizableCell.getBoundingClientRect(), _x = 0, _y = 0;
                if (e.type = "mousemove") {
                    _x = e.clientX;
                    _y = e.clientY;
                }
                else if (e.type = "touchmove") {
                    _x = evt.originalEvent.changedTouches[0].clientX;
                    _y = evt.originalEvent.changedTouches[0].clientY;
                }
                else if (e.type = "MSPointerMove") {
                    _x = e.originalEvent.clientX;
                    _y = e.originalEvent.clientY;
                }
                if (this.gridInstance.model.scrollSettings&&this.gridInstance.model.scrollSettings.frozenColumns)
                    var _nlx = this.gridInstance.getHeaderContent().width() + this.gridInstance.element.children(".e-gridheader").find(".e-columnheader").offset().left;
                else
                    var _nlx = this.gridInstance.getHeaderTable().width() + this.gridInstance.element.children(".e-gridheader").find(".e-columnheader").offset().left;
                if (((_x >= (location.left + document.documentElement.scrollLeft + _resizableCell.offsetWidth - 5)) || ((_x <= (location.left + 3)))) && (_x < _nlx) && (_x >= location.left) && (_y <= location.top + document.documentElement.scrollTop + e.target.offsetHeight)) {
                    $target.parent().css("cursor", "col-resize");
                    this._currentCell = this.gridInstance.getHeaderContent().find(".e-headercell").index(_resizableCell);
                    this._allowStart = true;
                }
                else {
                    $target.parent().css("cursor", "pointer");
                    this._allowStart = false;
                    this._currentCell = -1;
                }
            }
        },
        _start: function (_x, _y) {
            var _myrow = this.gridInstance.getHeaderTable().find(".e-columnheader");
            var _cells = _myrow.find(".e-headercell"), _mycel;
            if (this._currentCell != -1 && this._currentCell < _cells.length)
                _mycel = _cells[this._currentCell];
            if (typeof (_mycel) == 'undefined')
                return;
            var _j = _mycel.getBoundingClientRect();
            this._tableY = _j.top + parseInt(navigator.userAgent.indexOf("WebKit") != -1 ? document.body.scrollTop : document.documentElement.scrollTop);
            if (this._allowStart) {
                this._$visualElement = $(document.createElement('div'));
                _height = this.gridInstance.element.find(".e-gridcontent").first().height() + this.gridInstance.element.find(".e-gridheader").height();
                this._$visualElement.addClass("e-reSizeColbg").appendTo(this.gridInstance.element).css({ height: _height + 'px', cursor: 'col-resize' });
                this._$visualElement.css({ left: _x, top: this._tableY });
                this._oldWidth = _mycel.offsetWidth;
                this._orgX = _x;
                this._orgY = _y;
                this._extra = _x - this._orgX;
                this._expand = true;
            }
            else {
                this._currentCell = -1;
            }
        },
        _mouseMove: function (e) {
            if (this._expand) {
                var _x = 0, _y = 0;
                if (e.type = "mousemove") {
                    _x = e.clientX;
                    _y = e.clientY;
                }
                else if (e.type = "touchmove") {
                    _x = evt.originalEvent.changedTouches[0].clientX;
                    _y = evt.originalEvent.changedTouches[0].clientY;
                }
                else if (e.type = "MSPointerMove") {
                    _x = e.originalEvent.clientX;
                    _y = e.originalEvent.clientY;
                }
                if (navigator.userAgent.indexOf("WebKit") != -1) {
                    _x = e.pageX;
                    _y = e.pageY;
                }
                _x += document.documentElement.scrollLeft;
                e.preventDefault();
                this._moveVisual(_x);
            }
            else
                this._mouseHover(e);
        },
        _getCellIndex: function (e) {
            var $target = $(e._target);
            var targetCell = e._target;
            var hCellIndex = targetCell.cellIndex;
            var cellIndex = hCellIndex;
            if (e.gridInstance.model.groupSettings.groupedColumns.length) {
                cellIndex = hCellIndex - e.gridInstance.model.groupSettings.groupedColumns.length;
            }
            return cellIndex;
        },
        _reSize: function (_x, _y) {
            // Function used for Resizing the column
            var proxy = this;
            var resized = false, $content;
            if (this.gridInstance.model.scrollSettings&&this.gridInstance.model.scrollSettings.frozenColumns)
                this._initialTableWidth = this.gridInstance.getHeaderTable().first().parent().width() + this.gridInstance.getHeaderTable().last().parent().width();
            else
                this._initialTableWidth = this.gridInstance.getHeaderTable().parent().width();
            !this.gridInstance.model.enableRTL && this._getResizableCell();
            var _rowobj = this.gridInstance.getHeaderTable().find(".e-columnheader");
            if (this._currentCell != -1 && this._expand) {
                this._expand = false;
                var _childTH = _rowobj.find(".e-headercell").filter(":visible");
                var _outerCell = _childTH[this._currentCell];
                var _oldWidth = _outerCell.offsetWidth;
                var _extra = _x - this._orgX;
                //Check whether the column minimum width reached
                if (parseInt(_extra) + parseInt(_oldWidth) > this._colMinWidth) {
                    if (_extra != 0)
                        _rowobj.css("cursor", 'default');
                    this._resizeColumnUsingDiff(_oldWidth, _extra);
                    $content = this.gridInstance.element.find(".e-gridcontent").first();
                    this.gridInstance.model.allowScrolling && $content.ejScroller("refresh");
                    var browser = this.gridInstance.getBrowserDetails();
                    if (browser.browser == "msie" && this.gridInstance.model.allowScrolling) {
                        var oldWidth = this.gridInstance.getContentTable().width(), newwidth = this.gridInstance._calculateWidth();
                        if (this.gridInstance.model.scrollSettings&&this.gridInstance.model.scrollSettings.frozenColumns > 0) {
                            this.gridInstance.getHeaderTable().last().width(newwidth - this.gridInstance.getHeaderContent().find(".e-frozenheaderdiv").width());
                            this.gridInstance.getContentTable().last().width(newwidth - this.gridInstance.getContent().find(".e-frozencontentdiv").width());
                            this.gridInstance.model.showSummary && this.gridInstance.getFooterTable().last().width(newwidth - this.gridInstance.getFooterContent().find(".e-frozenfootertdiv").width());
                        }
                        else {
                            this.gridInstance.getHeaderTable().width(newwidth);
                            this.gridInstance.model.showSummary && this.gridInstance.getFooterTable().width(newwidth);
                        }
                        if (parseInt(browser.version, 10) > 8 && this.gridInstance.model.groupSettings && this.gridInstance.model.groupSettings.groupedColumns.length) {
                            if (newwidth > oldWidth) {
                                this.gridInstance.getContentTable().width(newwidth);
                                this.gridInstance.getContentTable().children("colgroup").find("col").first().css("width", (20 / $content.find("table").first().width()) * 100 + "%");
                            }
                            else {
                                this.gridInstance.getContentTable().css("width", "100%");
                                this.gridInstance._groupingAction();
                                this.gridInstance.getContentTable().children("colgroup").find("col").first().css("width", ((this.gridInstance.getHeaderTable().find("colgroup").find("col").first().width() / $content.find("table").first().width()) * 100).toFixed(2) + "%");
                            }
                        }
                        this.gridInstance.getHeaderTable().parent().scrollLeft($content.find(".e-content").scrollLeft() - 1);
                    }
					if (browser.browser == "msie" && !this.gridInstance.model.allowScrolling)
                        this.gridInstance._colgroupRefresh();
                    if (this.gridInstance.model.allowResizing && this.gridInstance.getHeaderTable().find(".e-columnheader").css('cursor') == 'default') {
                        var cellIndex = this._getCellIndex(this);
                        var newWidth = _oldWidth + _extra;
                        var args = { columnIndex: cellIndex, column: this.gridInstance.model.columns[cellIndex], oldWidth: _oldWidth, newWidth: newWidth };
                        this.gridInstance._trigger("resized", args);
                    }
                }

            }
            this._target = null;
            this._$visualElement.remove();
            this._expand = false;
            this._currentCell = -1;
            this._allowStart = false;

        },
        _getFrozenResizeWidth: function () {
            var $frozenColumnsCol = this.gridInstance.getHeaderTable().find('colgroup').find("col").slice(0, this.gridInstance.model.scrollSettings?this.gridInstance.model.scrollSettings.frozenColumn:0), width = 0;
            for (var i = 0; i < $frozenColumnsCol.length; i++) {
                if ($frozenColumnsCol.eq(i).css("display") != "none")
                    width += parseInt($frozenColumnsCol[i].style.width.replace("px", ""));
            }
            return width;
        },
        _diaplayFinder: function () {
            return $(this).css('display') != 'none';
        },
        _resizeColumnUsingDiff: function (_oldWidth, _extra) {
            var proxy = this;
            var _newWidth = parseInt(_extra) + parseInt(_oldWidth);
            if (_newWidth > 0 && _extra != 0) {
                if (_newWidth < this._colMinWidth)
                    _newWidth = this._colMinWidth;
                var _extra = _newWidth - _oldWidth;
                var $headerCols = this.gridInstance.getHeaderTable().find('colgroup').find("col"), $headerCol = $headerCols.filter(this._diaplayFinder).eq(this._currentCell)
                    , $ContentCol, $footerCol, $frozenCols = $headerCols.slice(0, this.gridInstance.model.scrollSettings ? this.gridInstance.model.scrollSettings.frozenColumns : 0);
                if (this.gridInstance.model.scrollSettings&&this.gridInstance.model.scrollSettings.frozenColumns) {
                    if (this._currentCell >= 0 && this._currentCell < this.gridInstance.model.scrollSettings.frozenColumns && this._getFrozenResizeWidth() + _extra > this.gridInstance.element.find(".e-headercontent").first().width())
                        return;
                    $ContentCol = this.gridInstance.getContentTable().find('colgroup').find("col").filter(this._diaplayFinder).eq(this._currentCell);
                }
                else
                    $ContentCol = this.gridInstance.getContentTable().find('colgroup').first().find("col").filter(this._diaplayFinder).eq(this._currentCell);
                if (this.gridInstance.model.showSummary) {
                    $footerCol = this.gridInstance.getFooterTable().find('colgroup').find("col").filter(this._diaplayFinder).eq(this._currentCell);
                    $footerCol.outerWidth(_newWidth);
                }
                $headerCol.outerWidth(_newWidth);
                if (this.gridInstance.model.isEdit) {
                    var $editCol = this.gridInstance.getContentTable().find(".e-editedrow,.e-addedrow").find("table").find("colgroup");
                    $($editCol[0].children[this._currentCell - this.gridInstance.model.groupSettings ? this.gridInstance.model.groupSettings.groupedColumns.length : 0]).width(_newWidth);
                }
                if (this.gridInstance.model.groupSettings && this.gridInstance.model.groupSettings.groupedColumns.length) {
                    var $tables = this.gridInstance.getContentTable().find(".e-recordtable");
                    var $colGroup = $tables.find("colgroup");
                    for (var i = 0 ; i < $colGroup.length; i++)
                        $($colGroup[i].children[this._currentCell - this.gridInstance.model.groupSettings.groupedColumns.length]).width(_newWidth);
                }
                $ContentCol.width(_newWidth);
                this.gridInstance._findColumnsWidth();
                if (this.gridInstance.model.scrollSettings&&this.gridInstance.model.scrollSettings.frozenColumns) {
                    var frozenColumns = this.gridInstance.getContentTable().find('colgroup').find("col").slice(0, this.gridInstance.model.scrollSettings.frozenColumns)
                        , width = 0, direction;
                    for (i = 0; i < frozenColumns.length; i++)
                        width += parseInt(frozenColumns[i].style.width.replace("px", ""));
                    this.gridInstance.getHeaderContent().find(".e-frozenheaderdiv").width(width);
                    direction = this.gridInstance.model.enableRTL ? "margin-right" : "margin-left";
                    this.gridInstance.getContent().find(".e-frozencontentdiv").width(width).next().css(direction, width + "px");
                    this.gridInstance.getHeaderContent().find(".e-frozenheaderdiv").width(width).next().css(direction, width + "px");
                    this.gridInstance.model.showSummary && this.gridInstance.getFooterContent().find(".e-frozenfooterdiv").width(width);
                }
                this.gridInstance.getHeaderTable().find(".e-columnheader").css("cursor", "default");
            }
        },
        _triggerResizeEvents: function (event,_x) {
            var _rowobj = this.gridInstance.getHeaderTable().find(".e-columnheader");
            var _childTH = _rowobj.find(".e-headercell").filter(":visible");
            var _outerCell = _childTH[this._currentCell];
            var _oldWidth = _outerCell.offsetWidth;            
            var cellIndex = this._getCellIndex(this);
            if (event == "resizeStart") {
                var args = { columnIndex: cellIndex, column: this.gridInstance.model.columns[cellIndex], target: $(_outerCell), oldWidth: _oldWidth };
                this.gridInstance._trigger("resizeStart", args);
            }
            else {
                var _extra = _x - this._orgX;
                var newWidth = _oldWidth + _extra;
                this.gridInstance._colgroupRefresh();
                var args = { columnIndex: cellIndex, column: this.gridInstance.model.columns[cellIndex], target: $(_outerCell), oldWidth: _oldWidth, newWidth: newWidth, extra: _extra };
                this.gridInstance._trigger("resizeEnd", args);
            }
        },
        _mouseUp: function (e) {
            if (this._expand) {
                var _x = e.clientX, _y = e.clientY;
                if (navigator.userAgent.indexOf("WebKit") != -1) {
                    _x = e.pageX;
                    _y = e.pageY;
                }
                if (this.gridInstance.model.allowResizing && this.gridInstance.getHeaderTable().find(".e-columnheader").css('cursor') == 'col-resize') {
                    this._triggerResizeEvents("resizeEnd",_x);
                }
                _x += document.documentElement.scrollLeft;
                this._reSize(_x, _y);
            }
        },
        _getResizableCell: function () {
            var row = this.gridInstance.getHeaderTable().find(".e-columnheader");
            var cell = row.find(".e-headercell").not(".e-hide");
            var scrollLeft = navigator.userAgent.indexOf("WebKit") != -1 ? document.body.scrollLeft : document.documentElement.scrollLeft;
            for (var i = 0; i < cell.length; i++) {
                point = cell[i].getBoundingClientRect();
                var xlimit = point.left + scrollLeft + 5;
                if (xlimit > this._orgX) {
                    this._currentCell = i - 1;
                    return;
                }
            }
        },
        _moveVisual: function (_x) {
            /// Used to move the visual element in mouse move
            var _bounds = this.gridInstance.getHeaderContent().find("div").first()[0].getBoundingClientRect();
            if ((_bounds.left + document.documentElement.scrollLeft + _bounds.width < _x) || (_x < _bounds.left + document.documentElement.scrollLeft))
                this._$visualElement.remove();
            else if (this._currentCell != -1)
                this._$visualElement.css({ left: _x, top: this._tableY });
        },
        _mouseDown: function (e) {
            if (this._allowStart && ($(e.target).closest("tr").css("cursor") == 'col-resize')) {
                var _x = e.clientX, _y = e.clientY;
                if (navigator.userAgent.indexOf("WebKit") != -1) {
                    _x = e.pageX;
                    _y = e.pageY;
                }
                if (this.gridInstance.model.allowResizing && this.gridInstance.getHeaderTable().find(".e-columnheader").css('cursor') == 'col-resize') {
                    if ($(e.target).is(".e-headercelldiv"))
                        e.target = e.target.parentNode;
                    this._target = e.target;
                    this._triggerResizeEvents("resizeStart",_x);
                }
                _x += document.documentElement.scrollLeft;
                if (e.button != 2)
                    this._start(_x, _y);
                e.preventDefault();
            }
            return false;
        }

    };
})(jQuery, Syncfusion);