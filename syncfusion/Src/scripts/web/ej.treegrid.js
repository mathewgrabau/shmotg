/*!
*  filename: ej.treegrid.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
 * @fileOverview Plugin to style the Html TreeGrid elements
 * @copyright Copyright Syncfusion Inc. 2001 - 2014. All rights reserved.
 *  Use of this code is subject to the terms of our license.
 *  A copy of the current license can be obtained at any time by e-mailing
 *  licensing@syncfusion.com. Any infringement will be prosecuted under
 *  applicable laws. 
 * @version 12.1 
 * @author <a href="mailto:licensing@syncfusion.com">Syncfusion Inc</a>
 */

(function ($, ej, undefined) {

    ej.widget("ejTreeGrid", "ej.TreeGrid", {
        _rootCSS: "e-treegrid",

        element: null,

        // widget element will be automatically set in this
        element: null,

        validTags: ["div"],

        // user defined model will be automatically set in this
        model: null,

        keyConfigs: {
            focus: "e",
            insertRecord: "45", //Insert
            deleteRecord: "46", // delete
            editRecord: "113", //F2
            saveRequest: "13", // enter
            cancelRequest: "27", //Esc         
            firstRowSelection: "ctrl+36", //"CtrlPlusHome",
            lastRowSelection: "ctrl+35", //"CtrlPlusEnd",
            upArrow: "38", //Up arrow
            downArrow: "40", //Down arrow
            moveCellRight: "9", //tab
            moveCellLeft: "shift+9", //shifttab
            selectedRowExpand: "alt+40", //"AltPlusDownArrow",
            totalRowExpand: "ctrl+40", //"CtrlPlusDownArrow",
            selectedRowCollapse: "alt+38", //"AltPlusUpArrow",
            totalRowCollapse: "ctrl+38" //"CtrlPlusUpArrow"
        },

        /*default model*/
        defaults: {
            //enable the altRow
            enableAltRow: true,

            //enable the columnresize
            allowColumnResize: false,

            //enable the virtualization
            enableVirtualization: false,

            /* sorting API's */
            //enable the sorting
            allowSorting: false,
            //enable the multicolumn sorting
            allowMultiSorting: false,
            //define sortcolumns while loading
            sortSettings: {
                sortedColumns: []
            },

            /* selection API's */
            //enable the selection
            allowSelection: true,
            //enable the single/multiple row selection
            selectionType: "single",
            //slection based on the rowIndex
            selectedRowIndex: -1,
            //selected ganttRecord object
            selectedItem: null,
            //enable the keynavigation to select rows
            allowKeyboardNavigation: true,

            //apply multiple themes to treegrid
            cssClass: "",

            //culture setting to apply localization
            locale: "en-US",

            /* editing API's */
            editSettings: {
                allowEditing: false,
                allowAdding: false,
                allowDeleting: false,
                editMode: "normal"
            },

            isEdit: false,

            /* event function */
            rowDataBound: null,
            queryCellInfo: null,

            /* ganttRecords object */
            dataSource: null,
            currentViewData: [],
            flatRecords: [],
            parentRecords: [],
            records: [],

            columns: [],
            commonWidth: 150,

            /* datamanager API's */
            query: ej.Query(),

            dateFormat: "MM/dd/yyyy",

            //rowHeight of the treegrid
            rowHeight: 30,

            emptyRecordText: "Empty Records To Display",

            treeColumnIndex: 0,
            childMapping: "",

            //APIs for self reference datasource
            idMapping: "",
            parentIdMapping: "",
            
            showGridCellTooltip: false,
            showGridExpandCellTooltip :false,
        },

        dataTypes: {
            columns: "array",
            sortSettings: {
                sortedColumns: "array"
            },
            dataSource: "data",
            currentViewData: "array",
            flatRecords: "array",
            parentRecords: "array",
            records: "array"

        },

                
        //GET THE GRID HEADER TABLE FOR COLUMNRESIZE
        getHeaderTable: function () {
            return this._$gridHeaderTable;
        },

        //SET THE GRID HEADER TABLE
        setGridHeaderTable: function (value) {
            this._$gridHeaderTable = value;
        },

        //GET THE GRIDHEADERCONTENT
        getHeaderContent: function () {
            return this._$gridHeaderContent;
        },

        //SET THE GRIDHEADERCONTENT
        setGridHeaderContent: function (value) {
            this._$gridHeaderContent = value;
        },

        //GET THE GRID CONTENT TABLE
        getContentTable: function () {
            return this._$gridContentTable;
        },

        getContent: function () {
            return this._$gridContent;
        },
        
        //SET THE GRID CONTENT TABLE
        setGridContentTable: function (value) {
            this._$gridContentTable = value;
        },

        //GET TREEGRID ROWS
        getRows: function () {
            return this._$gridRows;
        },

        //SET TREEGRID ROWS
        setGridRows: function (value) {
            this._$gridRows = value;
        },

        //GET CURRENTVIEWPORT DATA
        getCurrentViewData: function () {
            return this.model.currentViewData;
        },

        //GET FLAT RECORDS
        getFlatRecords: function () {
            return this.model.records;
        },

        //SET THE HEIGHT BASED ON THE RECORD COUNT
        setHeight: function (value) {
            this._totalHeight = value;
        },

        //GET THE UPDATEDRECORDS[SORTED,FILTERED,EXPANDCOLLAPSED]
        getUpdatedRecords: function () {
            return this._updatedRecords;
        },

        //GET THE UPDATED DATASOURCE
        getDataSource: function () {
            return this.model.dataSource;
        },

        //get the ids collection after perform the addition/delete operation
        //GET THE IDS COLLECTION AFTER PERFORM THE ADDITION/DELETE OPERATION
        getUpdatedIds: function () {
            return this.model.ids;
        },

        //GET THE RECORDS COUNT
        getRecordsCount: function () {
            return this._recordsCount;
        },

        //SET THE RECORDS COUNT
        setRecordsCount: function (value) {
            this._recordsCount = value;
        },

        //GET THE EXPANDCOLLAPSE RECORDS COUNT
        getExpandCollapseRecordsCount: function () {
            return this._expandCollapseRecordCount;
        },

        /*CONSTRUCTOR FUNCTION*/
        _init: function () {

            var proxy = this;

            proxy._initPrivateProperties();
            
            if (proxy.model.isdesignMode) {

                proxy.element.css({ "height": "250px" });
                if (proxy.model.columns.length === 0) {
                    proxy.model.columns = [
                        { "field": "Column1", "HeaderText": "Column1" },
                        { "field": "Column2", "HeaderText": "Column2" },
                        { "field": "Column3", "HeaderText": "Column3" }
                    ];

                }
                if (proxy.model.childMapping.length == 0) {
                    proxy.model.childMapping = "Children";
                }
            }

            proxy._processEditing();
            proxy._checkDataBinding();

            proxy._createTooltipTemplate();
        },
       
        
        //#region RUNTIME UPDATE METHOD FOR TREEGRID
        //METHOD FOR UPDATE THE TREEGRID IN RUN TIME
        _setModel: function (options) {

            var proxy = this,
                model = proxy.model;

            for (var prop in options) {

                switch (prop) {

                    case "enableAltRow":
                        model.enableAltRow = options[prop];
                        proxy._addInitTemplate();
                        proxy.refreshContent();
                        break;

                    case "enableVirtualization":
                        model.enableVirtualization = options[prop];
                        proxy.refreshContent();
                        break;

                    case "allowColumnResize":
                        model.allowColumnResize = options[prop];
                        proxy._enableColumnResizeEvents();
                        break;

                    case "allowSorting":
                        model.allowSorting = options[prop];
                        break;

                    case "sortSettings":
                        $.extend(model.sortSettings, options[prop]);
                        proxy.refreshContent();
                        break;

                    case "allowSelection":
                        proxy.clearSelection();
                        model.allowSelection = options[prop];
                        break;

                    case "selectionType":
                        proxy.clearSelection();
                        model.selectionType = options[prop];
                        break;

                    case "selectedRowIndex":
                        if (model.selectedRowIndex != -1 && $.inArray(model.selectedRowIndex, proxy._selctedRowsIndexes == -1))
                            proxy.selectRows(model.selectedRowIndex);
                        break;

                    case "editSettings":
                        $.extend(model.editSettings, options[prop]);
                        proxy._processEditing();
                        proxy._enableEditingEvents();
                        break;

                    case "allowKeyboardNavigation":
                        model.allowKeyboardNavigation = options[prop];
                        break;

                    case "dataSource":
                        proxy.resetModelCollections();
                        proxy.element.ejTreeGrid("destroy").ejTreeGrid(model);
                        break;

                    case "columns":
                        $.extend(model.columns, options[prop]);
                        proxy._addInitTemplate();
                        proxy.refreshContent();
                        break;
                    
                    case "rowHeight":
                        model.rowHeight = options[prop];
                        proxy._addInitTemplate();
                        proxy.refreshContent();
                        break;

                    case "treeColumnIndex":
                        model.treeColumnIndex = options[prop];
                        proxy._addInitTemplate();
                        proxy.refreshContent();
                        break;

                }

            }

        },
                

        //REFRESH THE TREEGRIDCONTENT
        refreshContent: function () {

            var proxy = this,
                args = {};     
            args.requestType = ej.TreeGrid.Actions.Refresh;
            proxy.processBindings(args);
        },


        //RESET THE COLLECTIONS WHILE CHANGING THE DATASOURCE
        resetModelCollections: function () {

            var proxy = this,
            model = proxy.model;

            model.sortSettings.sortedColumns = [];
            model.currentViewData = [];
            model.flatRecords = [];
            model.parentRecords = [];
            model.records = [];

        },
        

        //#endregion

        //DECLARE THE PRIVATE VARIABLES
        _initPrivateProperties: function () {

            var proxy = this;

            proxy._id = proxy.element.attr("id"),
            proxy._columnsWidthCollection = [],
            proxy._cSortedColumn = null,
            proxy._cSortedDirection = null,
            proxy._dataManager = null,
            proxy._disabledSortableColumns = [],
            proxy._filteredRecords = [],
            proxy._fieldColumnNames = [],
            proxy._multiSortRequest = null,
            proxy._$gridContainer = null,
            proxy._$gridContent = null,
            proxy._$gridContentTable = null,
            proxy._$gridHeaderTable = null,
            proxy._$gridHeaderContainer = null;
            proxy._gridHeight = proxy.element.height(),
            proxy._recordsCount = null,
            proxy._$gridRows = null,
            proxy._gridRows = null,
            proxy._gridWidth = proxy.element.width(),
            proxy._headerColumnNames = [],
            proxy._hiddenColumns = [],
            proxy._multiSelectCtrlRequest = false,
            proxy._multiSelectShiftRequest = false,
            proxy._offset = 0,
            proxy._previousIndex = -1,
            proxy._prevRBottom = 0,
            proxy._prevRTop = 0,
            proxy._prevScrollTop = 0,
            proxy._prevScrollLeft = 0,
            proxy._prevVBottom = 0,
            proxy._resizer = null,
            proxy._scrollTop = 0,
            proxy._searchString = "",
            proxy._selectedRowsIndexes = [],
            proxy._sortedRecords = [],
            proxy._storedIndex = -1,
            proxy._$tableContent = null,
            proxy._tempsortedrecords = [],
            proxy._totalHeight = 0,
            proxy._viewPortHeight = 0,
            proxy._recordIndexCount=0,
            proxy._visibleColumns = [],
            proxy._visibleRange = null,
            proxy._vScrollDir = 1,
            proxy._vScrollDist = 0,
            proxy._cellEditTemplate = $(),
            proxy._cellEditingDetails = {
                cellValue: null,
                rowIndex: -1,
                columnIndex: -1,
                fieldName: null,
                _data: null,
                cellEditType: "",
                cancelSave: false,
                defaultData: null,
                insertedTrCollection: [],
                data: null
            },
            proxy._tdsOffsetWidth = [],
            proxy._isEnterKeyPressed = false,
            proxy._updatedRecords = [],
            proxy._scrollBarHeight = 0,
            proxy._expandCollapseRecordCount = 0,
            proxy._removedCount = 0,
            proxy._$gridHeaderContent = null,
            proxy._expandedRecordsCount = 0,
            proxy._totalCollapseRecordCount = 0,
            proxy._collapsedRecordCount = 0,
            proxy.secondaryDatasource = [],
            proxy._dropDownTemplate = proxy._compiledDropDownTemplate(),
            proxy._dataManager = proxy.model.dataSource instanceof ej.DataManager ? proxy.model.dataSource :
                proxy.model.dataSource != null ? ej.DataManager(proxy.model.dataSource) : null;
            
        },


        //DATASOURCE CHECKING
        _checkDataBinding: function () {

            var proxy = this,
                model = proxy.model;

            proxy.element.addClass('e-treegrid-core');

            //CHECK DATASOURCE IS NULL OR NOT
            proxy._initDatasource();
           

            proxy._renderAfterColumnInitialize();
            proxy._viewPortHeight = proxy._getViewPortHeight(); 
            proxy._ensureDataSource();
            proxy._initGridRender();
            proxy._$gridContent = $("#" + proxy._id + "e-gridcontent");
            proxy._scrollBarHeight = proxy._$gridContent[0].offsetHeight - proxy._$gridContent[0].clientHeight;
            proxy._$gridContainer = $("#" + proxy._id + "e-gridcontainer");
            proxy._$tableContent = $("#" + proxy._id + "e-table");            
            proxy._wireEvents();            
            
            proxy.setWidthToColumns();
            
            proxy._renderScroller();
            
            if (model.isFromGantt) {
                proxy._addEmptyColumntoGrid();
            }
           
        },

        _initDatasource: function () {
            var proxy = this,
                model = proxy.model;

           
            if (model.dataSource && model.dataSource.length > 0) {
                if (model.idMapping && model.parentIdMapping) {
                    if ((model.idMapping.length > 0) && (model.parentIdMapping.length > 0)) {

                        //cloning the datasource
                        var dataArray = model.dataSource.slice(0);
                        proxy._reconstructDatasource(dataArray);
                        proxy._createRecords(proxy.secondaryDatasource);
                    }
                }
                else if (model.flatRecords.length === 0 && model.dataSource !== null) {
                    proxy._createRecords(model.dataSource);
                }
            }
             
        },


        _reconstructDatasource: function (datasource) {
            var proxy = this, model = proxy.model,
                childItems, data, tempRecord = [];

            for (var i = 0; i < datasource.length; i++) {
                var data = {};
                data = ej.DataManager(datasource).executeLocal(ej.Query().where(model.parentIdMapping,
                    ej.FilterOperators.equal,
                    datasource[i][model.idMapping]));


                if ((ej.isNullOrUndefined(datasource[i][model.parentIdMapping]) || datasource[i][model.parentIdMapping] == 0)
                    && data.length > 0) {
                    datasource[i][model.childMapping] = data;
                    proxy.secondaryDatasource.push(datasource[i]);
                }
                else if (ej.isNullOrUndefined(datasource[i][model.parentIdMapping]) && !(data && data.length > 0)) {
                    proxy.secondaryDatasource.push(datasource[i]);
                }

                else if (data && data.length > 0 && !(ej.isNullOrUndefined(data[0][model.parentIdMapping]))){
                    proxy._appendChildDataItems(proxy.secondaryDatasource, data);
                }

                if (data && data.length > 0) {

                    proxy._datasourceChildItems = proxy._reconstructDatasource(data);
                    if (ej.isNullOrUndefined(datasource[i][model.childMapping])) {
                        datasource[i][model.childMapping] = proxy._datasourceChildItems;
                        proxy._getParentIndex(datasource);
                    }
                    proxy._datasourceChildItems = [];

                }

                else if (!(ej.isNullOrUndefined(datasource[i][model.parentIdMapping]))) {
                    tempRecord.push(datasource[i]);
                }
            }

            if (tempRecord && tempRecord.length > 0) {
                return tempRecord;
            }
        },

        _appendChildDataItems: function (parentDatasource,data) {
            var proxy = this,
                model = proxy.model;
            
            for (var count = 0; count < parentDatasource.length; count++) {
                
                if (parentDatasource[count][model.idMapping] === data[0][model.parentIdMapping]) {
                    parentDatasource[count][model.childMapping] = data;
                }
                else if (!(ej.isNullOrUndefined(parentDatasource[count][model.childMapping])) &&
                    parentDatasource[count][model.childMapping].length > 0) {
                    proxy._appendChildDataItems(parentDatasource[count], data);
                }
            }

            if ((ej.isNullOrUndefined(parentDatasource.length)) && parentDatasource) {
                if (parentDatasource[model.idMapping] === data[0][model.parentIdMapping]) {
                    parentDatasource[model.childMapping] = data;
                }
                else if (!(ej.isNullOrUndefined(parentDatasource[model.childMapping])) &&
                    parentDatasource[model.childMapping].length > 0) {
                    proxy._appendChildDataItems(parentDatasource[model.childMapping], data);
                }
            }

        },
        
        _getParentIndex: function (datasource) {
            var proxy = this, model = proxy.model,
                dataArr = proxy.secondaryDatasource, parentIndex = 0;

            if (datasource.length > 0) {
                parentIndex = datasource[0][model.parentIdMapping];
            }
            for (var i = 0; i < dataArr.length; i++) {
                if (dataArr[i][model.idMapping] == parentIndex && ej.isNullOrUndefined(dataArr[i][model.childMapping])) {
                    dataArr[i][model.childMapping] = (datasource);
                    return true;
                }
                else {
                    var childItems = dataArr[i][model.childMapping];
                    if (childItems) {
                        for (var i = 0; i < childItems.length; i++) {
                            if (childItems[i][model.idMapping] == parentIndex && ej.isNullOrUndefined(childItems[i][model.childMapping])) {
                                childItems[i][model.childMapping] = (datasource);
                                return true;
                            }
                        }
                    }
                }
            }

        },
        //PROCESSBINDING
        processBindings: function (args) {

            var proxy = this,
                model = proxy.model;

            model.query = new ej.Query();

            if (proxy._trigger("actionBegin", args)) {
                return true;
            }

            proxy._ensureDataSource(args);

        },

        _ensureDataSource: function (args) {

            var proxy = this,
                model = proxy.model,
                sortcolumns = model.sortSettings.sortedColumns,
                isupdatedHeight = false,
                index,
                childIndex;

            //if (model.dataSource == null) {
            //    return;
            //}

            model.query.requiresCount();
            proxy._queryManagar = model.query;

            if ((model.editSettings.allowEditing || model.editSettings.allowAdding) &&
                args && args.requestType == ej.TreeGrid.Actions.Save &&
                (!ej.isNullOrUndefined(args._cModifiedData) || !ej.isNullOrUndefined(args._cAddedRecord))) {

                if (ej.isNullOrUndefined(args._cAddedRecord)) {
                    $.extend(model.flatRecords[$.inArray(model.selectedItem, model.flatRecords)],
                        args._cModifiedData);
                } else {

                    var parentItem;

                    if (model.selectedRowIndex === -1) {

                        args._cAddedRecord.hasChildRecords = false;
                        model.flatRecords.unshift(args._cAddedRecord);
                        model.records.unshift(args._cAddedRecord);
                        model.dataSource.unshift(args._cAddedRecord.item);

                        if (model.isFromGantt) {
                            model.ids.unshift(args._cAddedRecord.taskId);
                        }
                        args.recordIndex = 0;

                    } else {

                        args._cAddedRecord.level = model.selectedItem.level;
                        index = model.selectedItem ? model.flatRecords.indexOf(model.selectedItem) : 0;

                        if (args._cAddedRecord.level === 0) {
                            index = index > 0 ? index - 1 : index;
                        }

                        if (args.actionRequestType != ej.TreeGrid.Actions.ContextMenuAdd) {
                            args.recordIndex = index > 0 ? index - 1 : 0;
                        }

                        model.flatRecords.splice(index, 0, args._cAddedRecord);

                        var rowIndex = model.records.indexOf(model.selectedItem);
                        model.records.splice(rowIndex, 0, args._cAddedRecord);

                        if (model.isFromGantt) {
                            model.ids.splice(rowIndex, 0, args._cAddedRecord.taskId.toString());
                        }

                        if (args._cAddedRecord.level > 0) {

                            parentItem = model.selectedItem.parentItem;

                            if (parentItem) {

                                childIndex = parentItem.childRecords ?
                                    parentItem.childRecords.indexOf(model.selectedItem) : -1;

                                if (childIndex !== -1) {
                                    childIndex = childIndex === 0 ? 0 : childIndex - 1;
                                }

                                parentItem.childRecords.splice(childIndex, 0, args._cAddedRecord);

                            }
                        }

                        proxy.setRecordsCount(model.flatRecords.length);
                        proxy.setHeight(model.flatRecords.length * model.rowHeight);
                        proxy.updateHeight();
                        isupdatedHeight = true;

                    }
                    proxy._queryManagar.queries = [];
                    model.isEdit = false;
                    proxy._updatedGanttRecords = model.flatRecords;

                }
            }

            if (args && args.requestType === ej.TreeGrid.Actions.ExpandCollapse) {

                isupdatedHeight = true;
                proxy.clearSelection(proxy.model.selectedRowIndex);
                proxy._filteredRecords = [];
                proxy._expandCollapseRecordCount = 0;
                proxy.updateExpandCollapseRecords(args.data, args.expanded, args.recordIndex);
                proxy.setRecordsCount(model.flatRecords.length);
                proxy.setHeight(model.flatRecords.length * model.rowHeight);
                proxy._updatedRecords = model.flatRecords;

                if (model.allowSearching && proxy._searchString.length) {
                    proxy._updateFilteredRecords(proxy._tempfilteredrecords);
                    proxy.setRecordsCount(proxy._filteredRecords.length);
                    proxy.setHeight(proxy._filteredRecords * model.rowHeight);
                    proxy._updatedRecords = proxy._filteredRecords;
                }

                if (model.allowSorting && model.sortSettings.sortedColumns.length) {
                    proxy._updateExpandCollapseForSortedRecords(args.data, args.expanded);
                    proxy.setHeight(proxy._sortedRecords * model.rowHeight);
                    proxy._updatedRecords = proxy._sortedRecords;
                }

                proxy.updateHeight();

                if (model.enableAltRow) {
                    proxy._updateAltRow();
                }

            }

            if (model.editSettings.allowDeleting && args && args.requestType === ej.TreeGrid.Actions.Delete) {

                var deletedRow = args.data,
                    recordIndex,
                    rowindex;
                proxy._removedCount = 0;
                var childRecordsCount = proxy._getFilteredChildRecordsCount(deletedRow);
                childRecordsCount += 1;
                proxy._removedCount = 0;

                if (deletedRow.parentItem) {

                    var childRecords = deletedRow.parentItem.childRecords;
                    childIndex = childRecords.indexOf(deletedRow);

                    deletedRow.parentItem.childRecords.splice(childIndex, 1);
                    deletedRow.parentItem.item[proxy.model.childMapping].splice(childIndex, 1);
                }
                //Delete from paren collection if item is parent
                var parentIndex=model.parentRecords.indexOf(deletedRow);
                if (parentIndex!== -1)
                {
                    model.parentRecords.splice(parentIndex, 1);
                }
                recordIndex = proxy.model.flatRecords.indexOf(deletedRow);
                proxy.model.flatRecords.splice(recordIndex, childRecordsCount);
                proxy.setRecordsCount(model.flatRecords.length);
                proxy.setHeight(model.flatRecords.length * model.rowHeight);
                isupdatedHeight = true;
                index = model.records.indexOf(deletedRow);
                var deletedRecordCount = proxy.getChildCount(deletedRow, 0);
                model.records.splice(index, deletedRecordCount+1);
                proxy._updatedRecords = model.flatRecords;

                rowindex = model.dataSource.indexOf(deletedRow.item);
                if(rowindex!==-1)
                    proxy.model.dataSource.splice(rowindex, 1);

                model.selectedItem = null;
                model.selectedRowIndex = -1;

            }

            if (model.allowSearching && proxy._searchString.length) {

                proxy._queryManagar.search(proxy._searchString, proxy.getColumnFieldNames(),
                    ej.FilterOperators.contains, true);

                proxy._filteredRecords = model.records.filter(function (record) {
                    return record.hasChildRecords === false;
                });

                var dataManager = new ej.DataManager(proxy._filteredRecords);
                proxy._tempfilteredrecords = dataManager.executeLocal(proxy._queryManagar).result;
                proxy._updateFilteredRecords(proxy._tempfilteredrecords);
                proxy.setRecordsCount(proxy._filteredRecords.length);
                proxy._updatedRecords = proxy._filteredRecords;

                if (model.allowSorting && model.sortSettings.sortedColumns.length > 0) {
                    proxy._sortingRecords();
                }

                proxy.setHeight(proxy._updatedRecords.length * model.rowHeight);
                proxy.updateHeight();
                isupdatedHeight = true;

                if (model.enableAltRow) {

                    proxy._updateAltRow();
                }

            } else if (model.allowSorting && sortcolumns.length > 0) {

                isupdatedHeight = proxy._sortingRecords();
            }

            if (!isupdatedHeight) {

                proxy.setRecordsCount(model.flatRecords.length);
                proxy.setHeight(model.flatRecords.length * model.rowHeight);
                proxy._updatedRecords = model.flatRecords;
                proxy.updateHeight();

            }

            if (!args) {
                args = {};
                args.requestType = ej.TreeGrid.Actions.Refresh;
            }

            proxy._updateCurrentViewData();

            if ((!model.isFromGantt && args.requestType === "save") || args.requestType === "sorting" || args.requestType === "searching" || args.requestType === "delete") {
                proxy.renderRecords(args);
                //proxy.onScrollHelper($(".e-content").scrollTop());
            }

        },

        //CHECK EDITING OPTIONS 
        _processEditing:function(){

            var proxy = this,
                model = proxy.model;

            if (model.editSettings.allowEditing) {
                if (model.editSettings.editMode === "cellEditing") {
                    proxy._addCellEditTemplate();
                }
            }

        },

        //#region TREEGRIDHEADER RENDERIGN

        //TREEGRID HEADER RENDER INITIALIZATION
        _renderAfterColumnInitialize:function(){
            var proxy = this;
            proxy.element.append(proxy._renderGridHeader());
        },


        //METHOD FOR RENDERING TREEGRID HEADER
        _renderGridHeader: function () {

            var proxy = this,
                model = proxy.model,
                doc = document,
                $innerDiv = ej.buildTag('div.e-gridheadercontainer', "", { "overflow": "hidden" }, {}),
                $table = ej.buildTag('table.e-table', "", {}, { "cellspacing": "0px", "border-spacing": "0px" }),
                $thead = ej.buildTag('thead'),
                $tbody = ej.buildTag('tbody.e-hide'),
                $columnHeader = ej.buildTag('tr.e-columnheader'),
                $colGroup = $(doc.createElement('colgroup')),
                $rowBody = $(doc.createElement('tr')),
                columnCount = 0,
                columns = model.columns,
                length = columns.length,
                $headerCell,
                bodyCell,
                $headerCellDiv,
                col,
                $div = model.isFromGantt ? ej.buildTag('div.e-gridheader#' + proxy._id + "e-gridheader", "", {}, "") :
                    ej.buildTag('div.e-gridheader#' + proxy._id + "e-gridheader", "",
                {
                    "border-top-style": "solid",
                    "border-left-style": "solid",
                    "border-right-style": "solid",
                    "border-top-width": "thin",
                    "border-left-width": "thin",
                    "border-right-width": "thin"
                }, "");
            

            proxy.setGridHeaderContent($div);
            proxy._$gridHeaderContainer = $innerDiv;
            proxy._hiddenColumns = [];

            //CHECK SORTING ENABLED OR NOT
            if (model.allowSorting) {
                $columnHeader.css({ 'cursor': 'pointer' });
            }

            for (columnCount; columnCount < length; columnCount++) {

                $headerCell = ej.buildTag('th.e-headercell', "", { "height": "45px" }, {});
                bodyCell = doc.createElement('td');

                $headerCellDiv = ej.buildTag(
                    'div.e-headercelldiv',
                    columns[columnCount]["headerText"] == undefined ?
                    columns[columnCount]["headerText"] = columns[columnCount]["field"] :
                    columns[columnCount]["headerText"], {}, {'unselectable':"on"}
                );

                $headerCell.append($headerCellDiv);

                col = doc.createElement('col');

                $rowBody.append(bodyCell);
                $columnHeader.append($headerCell);
                $colGroup.append(col);


                //CHECK VISIBLE PROPERTY OF THE COLUMN
                if (columns[columnCount]["visible"] === false) {
                    $headerCell.addClass("e-hide") && $(col).css("display", "none") &&
                    proxy._hiddenColumns.push(columns[columnCount].headerText);

                } else {
                    proxy._visibleColumns.push(columns[columnCount].headerText);
                    columns[columnCount]["visible"] = true;
                }

                if (columns[columnCount]["allowSorting"] === false) {
                    proxy._disabledSortableColumns.push(columns[columnCount].headerText);
                    $headerCell.css({ 'cursor': 'normal' });
                }

                if (!ej.isNullOrUndefined(columns[columnCount]["headerTemplateID"])) {
                    $headerCellDiv.html($(columns[columnCount]["headerTemplateID"]).hide().html()).parent().addClass("headertemplate");
                }

                if (columns[columnCount]["width"] == undefined && model.commonWidth !== undefined) {
                    proxy._columnsWidthCollection[columnCount] = model.commonWidth;
                } else {
                    proxy._columnsWidthCollection.push(columns[columnCount]["width"]);
                }

                proxy._fieldColumnNames[columns[columnCount].headerText] = columns[columnCount].field;
                proxy._headerColumnNames[columns[columnCount].field] = columns[columnCount].headerText;

            }
            $thead.append($columnHeader);
            $tbody.append($rowBody);
            $table.append($colGroup).append($thead).append($tbody);

            $innerDiv.html($table);
            $div.html($innerDiv);

            proxy.setGridHeaderTable($table);

            return $div;
        },

        //#endregion

        //#region TREEGRIDCONTENT RENDERING
        //TREEGRID CONTENT RENDER INITIALIZATION
        _initGridRender: function () {

            var proxy = this;
            proxy._addInitTemplate();
            proxy._renderGrid();

            //CHECK COLUMN RESIZE IS ENABLED OR NOT AND INITIALIZE THE RESIZER
            if (proxy.model.allowColumnResize) {
                proxy._resizer = new ej.Grid.gridResize(proxy);
            }

        },


        //ADD GRIDCONTENT TO THE TREEGRID
        _renderGrid: function () {
            
            var proxy = this;
            proxy._renderGridContent().insertAfter(proxy.element.children(".e-gridheader"));
            proxy._initialEndRendering();

        },


        //RENDER THE GRIDCONTENT
        _renderGridContent:function(){
            
            var proxy = this,
                doc = document,
                model = proxy.model,
                $tbody = $(doc.createElement('tbody')),
                $div = ej.buildTag("div.e-gridcontent#" + proxy._id + "e-gridcontent", "",
                {                    
                    "height": proxy._viewPortHeight
                },
                {"unselectable":"on"}),
                $innderDiv = ej.buildTag('div.e-gridcontainer#' + proxy._id + "e-gridcontainer", "", {}, {});

            //CHECK VIRTUALIZATION ENABLED OR NOT
            if (model.enableVirtualization) {
                $innderDiv.css({ 'height': proxy._totalHeight });
            }

            var $table = ej.buildTag('table.e-table#' + proxy._id + "e-table", "",
                {top: "0px" }, { 'cellspacing': '0px' });

            $table.append(proxy.getHeaderTable().find('colgroup').clone()).append($tbody);
            $innderDiv.html($table);
            $div.html($innderDiv);
            proxy.setGridContentTable($table);

            //CHECK DATASOURCE IS DEFINED OR NOT
            if (model.dataSource === null) {
                var $emptyTd = ej.buildTag('td', model.emptyRecordText, {}, { colSpan: model.columns.length });
                $tbody.append($(doc.createElement("tr")).append($emptyTd));
                $innderDiv.css('height', model.rowHeight);
            } else
            {
                proxy.renderRecords();
            }

            if (!model.isFromGantt) {
                $div.css({
                    "border-bottom-style": "solid",
                    "border-bottom-width": "thin",
                    "border-left-style": "solid",
                    "border-left-width": "thin",
                    "border-right-style": "solid",
                    "border-right-width": "thin",
                    "-moz-box-sizing": "border-box",
                    "width": "auto",
                    "height":"auto"
                });
            }

            $table.css({ 'position': 'relative' });
            return $div;

        },


        //AFTER INITIALIZATION END RENDERING
        _initialEndRendering: function () {

            var proxy = this,
                index = proxy.model.selectedRowIndex;

            if (index != -1) {

                if (!proxy._rowSelectingEventTrigger()) {

                    proxy.selectRows(index);
                    proxy._rowSelectedEventTrigger(index);

                }
            }
        },

        //#endregion
        
        //#region TEMPLATE

        //ADD CELLEDITING TEMPLATE
        _addCellEditTemplate: function () {

            var proxy = this,
                model = proxy.model,
                columns = model.columns,
                columnCount = 0,
                $outerDiv = ej.buildTag('div', "", { display: 'none' }, { id: proxy._id + "_CellEditTemplate" }),
                $innerDiv,
                length =columns&& columns.length;

            for (columnCount = 0; columnCount < length; columnCount++) {

                $innerDiv = ej.buildTag('div', "", {}, { id: columns[columnCount].field + "_CellEdit" });
                ej.TreeGrid._initCellEditType(proxy, $innerDiv, proxy._id, columnCount);
                $outerDiv.append($innerDiv);

            }

            if ($outerDiv.children().length) {
                proxy._cellEditTemplate = $outerDiv;
            }

        },


        //ADD TEMPLATE FOR RENDERING GRIDCONTENT
        _addInitTemplate:function(){

            var proxy = this,
                model = proxy.model,
                columns = model.columns,
                columnCount = 0,
                length = columns.length,
                columnName,
                TD,
                helpers = {};

            //CHECK THE COLUMNS ARRAY CONTAIN THE COLUMN OBJECT
            if (columns.length === 0) {
                return false;
            }

            helpers["_" + proxy._id + "rowClassName"] = ej.TreeGrid._getrowClassName;
            helpers["_" + proxy._id + "expandStatus"] = $.proxy(proxy._getExpandStatusRecord, proxy);         
            helpers["_" + proxy._id + "cellValue"] = proxy._getCellValue;
            

            helpers["_" + proxy._id + "itemDetails"] = $.proxy(proxy._convertItemToString, proxy);
            $.views.helpers(helpers);

            var TR = "<tr class='e-treegridrows {{:~_" + proxy._id + "rowClassName()}} ";

            if (model.enableAltRow) {
                TR += "{{if isAltRow}}e-alt-row{{/if}} ";
            }

            TR += "{{if expanded}}e-treegridrowexpand {{else hasChildRecords}} " +
                    "e-treegridrowcollapse {{/if}} '" +
                    "style='display:{{:~_" + proxy._id + "expandStatus(#data)}}'" +
                    "role='row'>";

            for (columnCount = 0; columnCount < length; columnCount++) {

                columnName = columns[columnCount].field;

                //CHECK THE TEMPLATE COLUMN OR NOT
                if (columns[columnCount]["isTemplateColumn"]) {

                    var templateId = columns[columnCount]["templateID"],
                        TEMPLATE = columns[columnCount]["template"];

                    if (templateId) {

                        TD = "<td style='height:" + model.rowHeight + "px;'" +
                             "class='{{if isSelected}}e-rowcell e-selectionbackground e-intend {{else}}e-rowcell e-intend {{/if}}'" +
                             "role='gridcell'" +
                             "'tabindex='-1'" +
                             "aria-label={{:~_" + proxy._id + "itemDetails(#data)}}>" +
                              $("#" + templateId)[0].innerHTML +
                             "</td>";

                    } else if (TEMPLATE) {

                        TD = "<td style='height:" + model.rowHeight + "px;" +
                             "class='{{if isSelected}}e-rowcell e-selectionbackground e-intend {{else}}" +
                             "e-rowcell e-intend {{/if}}'" +
                             "role='gridcell'" +
                             "tabindex='-1'" +
                             "aria-label={{:~_" + proxy._id + "itemDetails(#data)}}>" +
                             TEMPLATE +
                             "</td>";
                    }

                    //EXPAND COLLAPSE COLUMN BASED ON THE TREECOLUMNINDEX
                } else if (columnCount === model.treeColumnIndex) {

                    TD = "<td style='height:" + model.rowHeight + "px;'" +
                         "class='{{if isSelected}}e-rowcell e-selectionbackground e-intend {{else}}e-rowcell e-intend {{/if}}'" +
                         "role='gridcell'" +
                         "tabindex='-1'" +
                         "aria-label={{:~_" + proxy._id + "itemDetails(#data)}}>" +
                         "<div  style='height:20px;' unselectable='on'>" +
                         "{{if hasChildRecords}}" +
                         "<div " +
                         "class='intend'" +
                         "style='height:1px; float:left; width:{{:level*20}}" + "px; display:inline-block;'>" +
                         "</div>" +
                         "{{else !hasChildRecords}}" +
                         "<div " +
                         "class='intend'" +
                         "style='height:1px; float:left; width:{{:(level+1)*20}}" + "px; display:inline-block;'>" +
                         "</div>" +
                         "{{/if}}" +
                         "<div " +
                         "class='{{if expanded}}e-treegridexpand e-icon{{else hasChildRecords}}" +
                         "e-treegridcollapse e-icon{{/if}}'" +
                         "style='float: left;display:inline-block; unselectable='on''>" +//unselectable on icon div
                         "</div>" +
                         "<div class='e-cell'" +
                         "style='display:inline-block;width:100%' unselectable='on'>" +//unselectable on
                         "{{:#data['" + columnName + "']}}" +
                         "</div>" +
                         "</div>" +
                         "</td>";
                    //CHECK RESOURCE COLUMN FROM GANTT OR NOT
                } else if (model.isFromGantt && columns[columnCount].mappingName === model.resourceInfoMapping) {
                    helpers = {};
                    helpers["_" + proxy._id + "resourceName"] = proxy._getResourceName;
                    $.views.helpers(helpers);

                    TD = "<td  style='height:" + model.rowHeight + "px;'" +
                         "class='{{if isSelected}}e-rowcell e-selectionbackground{{else}}e-rowcell {{/if}}'" +
                         "role='gridcell'" +
                         "tabindex='-1'" +
                         "aria-label={{:~_" + proxy._id + "itemDetails(#data)}}>" +
                         "{{:~_" + proxy._id + "resourceName('" + proxy._id + "Object','"
                         + model.resourceNameMapping + "','" + columnName + "')}}" +
                         "</td>";
                    //CHECK PREDECESSOR COLUMN FROM GANTT OR NOT
                } else if (model.isFromGantt && columns[columnCount].mappingName === model.predecessorMapping) {

                    helpers = {};
                    helpers["_" + proxy._id + "predecessor"] = proxy._getPredecessorsValue;
                    $.views.helpers(helpers);

                    TD = "<td  style='height:" + model.rowHeight + "px;'" +
                        "class='{{if isSelected}}e-rowcell e-selectionbackground{{else}}e-rowcell {{/if}}' " +
                        "role='gridcell'" +
                        "tabindex='-1'" +
                        "aria-label={{:~_" + proxy._id + "itemDetails(#data)}}>" +
                        "{{:~_" + proxy._id + "predecessor('" + proxy._id + "Object','"
                        + model.predecessorMapping + "','" + columnName + "')}}" +
                        "</td>";

                }
                else {
                    TD = "<td  style='height:" + model.rowHeight + "px;'" +
                        "class='{{if isSelected}}e-rowcell e-selectionbackground{{else}}e-rowcell{{/if}}'" +
                        "role='gridcell'" +
                        "tabindex='-1'" +
                        "aria-label={{:~_" + proxy._id + "itemDetails(#data)}} unselectable='on'>" +
                        "{{:~_" + proxy._id + "cellValue('" + columnName + "')}}" +
                        "</td>";//unselectable for 
                }

                TR += TD;
            }
                

                if (model.isFromGantt) {
                    TR += "<td class='e-extendcolumn'></td></tr>";
                }

                var templates = {};
                templates[proxy._id + "_Template"] = TR;
                $.templates(templates);

            

        },
        
        //#endregion TEMPLATE

        //#region TEMPLATE METHODS

        //CONVERT RECORD OBJECT TO STRING
        _convertItemToString: function (data) {

            var str = '',
                labelObject = {},
                columns = this.model.columns;

            for (var i = 0; i < columns.length; i++) {
                labelObject[columns[i].field] = data.item[columns[i].field];
            }

            for (var p in labelObject) {
                if (labelObject.hasOwnProperty(p)) {
                    str += p + '' + labelObject[p] + '\n';
                }
            }

            return str;
        },

        _getCellValue: function (columnName) {

            var cellValue = this.data[columnName];

            if (cellValue || cellValue===0) {
                return cellValue;
            } else {
                return this.data.item && this.data.item[columnName];
            }


        },

        //GET RESOURCE NAME FOR RESOURCE COLUMN IN THE GANTT CONTROL
        _getResourceName: function (gridObject, mappingName, columnName) {

            var proxy = this,
                data = proxy.data[columnName],
                count = 0,
                length = data && data.length,
                resourceName = [];

            if (data && data.length > 0) {
                for (count; count < length; count++) {
                    resourceName.push(data[count][mappingName]);
                }
            }
            return resourceName;
        },


        //GET PREDECESSOR VALUE FOR PREDECESSOR COLUMN IN THE GANTT CONTROL
        _getPredecessorsValue: function (gridObject, mappingName) {

            return this.data.item[mappingName];

        },


        //GET THE EXPAND COLLAPSE STATUS OF TABLE ROW
        _getExpandStatusRecord: function (data) {

            var proxy = this;

            if (proxy.getExpandStatus(data)) {

                return 'table-row';

            }

            return 'none';
        },

        //#endregion TEMPLATE METHODS

        //#region CONVERT HIERARCHICAL RECORDS TO FLAT RECORDS
        //CREATE FLATRECORDS FROM HIERARCHICAL DATASOURCE
        _createRecords: function (dataSource) {

            var proxy = this,
                model = proxy.model,
                flatRecords = model.flatRecords,
                length = dataSource.length,
                count = 0,
                parentRecord,
                parentRecords = model.parentRecords,
                rows = model.records;                

            for (count; count < length; count++) {

                parentRecord = proxy._createRecord(dataSource[count], 0, null);
                proxy._storedIndex++;

                //CHECK ALTROW ENABLED OR NOT
                //if (enableAltRow) {     //  DYNAMICALY CHANGE THE ALTROW 
                    parentRecord.isAltRow = proxy._storedIndex % 2 == 0 ? false : true;
                //}

                //CHECK SORTING ENABLED OR NOT
                //if (enableSorting) {//  DYNAMICALY CHANGE THE ALTROW 
                    parentRecords.push(parentRecord);
                //}

                parentRecord.index = proxy._storedIndex;
                rows[proxy._storedIndex] = parentRecord;
                flatRecords.push(parentRecord);
                parentRecord.childRecords && proxy._addNestedRecords(parentRecord.childRecords);

            }
        },


        //CREATE RECORD OBJECT
        _createRecord: function (data, level, parentItem, expanded) {

            var proxy = this,
                record,
                childDataSource = data[proxy.model.childMapping];

            //CLONE THE DATA OBJECT
            record = $.extend({}, data);

            record.parentItem = parentItem;
            record.item = data;
            record.childRecords = childDataSource && proxy._createChildRecords(childDataSource, level + 1, record);
            record.hasChildRecords = childDataSource ? true : false;
            record.expanded = expanded !== undefined ? expanded : childDataSource ? childDataSource.length > 0 : false;
            record.isSelected = false;
            record.level = level;

            return record;
        },


        //CREATE CHILD GANTT RECORDS
        _createChildRecords: function (childDataSource, level, parentItem) {

            var proxy = this,
                records = [],
                count = 0,
                length = childDataSource.length,
                record = null,
                childRecord;

            for (count = 0; count < length; count++) {

                record = childDataSource[count];

                if (record) {
                    childRecord = proxy._createRecord(record, level, parentItem);
                    records.push(childRecord);
                }
            }

            return records;

        },


        //ADD NESTED RECORDS TO FLATRECORDS
        _addNestedRecords: function (childDataSource) {

            var proxy = this,
                model = proxy.model,
                flatRecords = model.flatRecords,
                count = 0,
                length = childDataSource.length,
                rows = model.records,
                records = [],
                record;
                

            for (count = 0; count < length; count++) {

                record = childDataSource[count];
                proxy._storedIndex++;

                //CHECK ALTROW ENABLED OR NOT
                //if (enableAltRow) {//DYNAMICALLY CHANGE THE ALT ROW
                    record.isAltRow = proxy._storedIndex % 2 == 0 ? false : true;
                //}

                record.index = proxy._storedIndex;
                rows[proxy._storedIndex] = record;
                flatRecords.push(record);
                records = record.childRecords;

                if (records) {

                    var j = 0,
                        recordlength = records.length,
                        childRecord = null;

                    for (j = 0; j < recordlength; j++) {

                        childRecord = records[j];
                        proxy._storedIndex++;
                        childRecord.index=proxy._storedIndex;
                        //CHECK ALTROW ENABLED OR NOT
                        //if (enableAltRow) {  //DYNAMICALLY CHANGE THE ALT ROW
                            childRecord.isAltRow = proxy._storedIndex % 2 == 0 ? false : true;
                        //}

                        rows[proxy._storedIndex] = childRecord;
                        flatRecords.push(childRecord);
                        childRecord.childRecords && proxy._addNestedRecords(childRecord.childRecords);
                    }
                }
            }
        },

        //#endregion CONVERT HIERARCHICAL RECORDS TO FLAT RECORDS

        //#region METHOD FOR EVENTS

        //INITIALIZE THE EVENTS
        _wireEvents: function () {

            var proxy = this,
                model = proxy.model;

            proxy._$gridContent.bind("scroll", $.proxy(proxy._onScroll, proxy));
            proxy._on(proxy.element, "click", proxy._onClick);
            proxy._on(proxy.element, "click", "#" + proxy._id + "e-gridheader", proxy._onHeaderClick);
            proxy._on(proxy.element, "mousedown", "#" + proxy._id + "e-gridheader", proxy._headerMouseDown);

            if (proxy.model.showGridCellTooltip) {
                proxy._on(proxy.element, "mouseenter", ".e-rowcell", proxy._mouseHover);
                proxy._on(proxy.element, "mouseleave", ".e-rowcell", proxy._cellMouseLeave);
                //proxy._$gridContent.bind("mouseleave", $.proxy(proxy._cellMouseLeave, proxy));
            }
            proxy._enableColumnResizeEvents();

            //MOUSE WHEEL EVENT FOR GANTT CONTROL
            if (model.isFromGantt) {
                proxy._on(proxy.element, "mousewheel DOMMouseScroll", proxy._mouseWheel);
            }

            proxy._enableEditingEvents();
        },


        _mouseHover: function (e) {
            e.preventDefault();
            var $target = $(e.target), proxy = this,
                posx = 0,
                posy = 0,
                $ganttGridRows = proxy.getRows(),
                row = $target.closest('tr'),
                div = $target[0].parentNode,
                progressHandler,
                recordIndexr = $ganttGridRows.index(row),
                item = proxy.model.currentViewData[recordIndexr],
                tooltipElement, tooltiptable, tooltipbody;

            

            proxy._cellMouseLeave();

            if (!e) e = window.event;
            if (e.originalEvent.pageX || e.originalEvent.pageY) {
                posx = e.originalEvent.pageX;
                posy = e.originalEvent.pageY;
            }
            else if (e.originalEvent.clientX || e.originalEvent.clientY) {
                posx = e.originalEvent.clientX + document.body.scrollLeft
                    + document.documentElement.scrollLeft;
                posy = e.originalEvent.clientY + document.body.scrollTop
                    + document.documentElement.scrollTop;
            }

            if ((posx + 200) > proxy._windowWidth) {
                posx -= (posx + 200) - proxy._windowWidth;
            }

            if ((posy + 150) > proxy._windowHeight) {
                posy -= (posy + 150) - proxy._windowHeight;
            }

            if (item) {

                tooltipElement = {
                    ttiptaskname: item.taskName
                };


                tooltiptable = ej.buildTag("table.e-tooltiptable", "", { 'padding': '0' }, { 'cellspacing': '1' });
                if (proxy.model.showGridExpandCellTooltip == false) {
                    if ($target[0].firstChild && $target[0].firstChild.textContent) {
                        tooltipbody = ej.buildTag("tbody", $target[0].firstChild.textContent, {}, {});
                    }
                    else if ((div.childNodes.length > 0 && div.childNodes[1] && div.childNodes[1].textContent)) {
                        tooltipbody = ej.buildTag("tbody", div.childNodes[1].textContent, {}, {});

                    }
                }
                else if (proxy.model.showGridExpandCellTooltip == true) {
                    if (($target[0].firstChild && $target[0].firstChild.childNodes.length > 0)
                        && ($target[0].firstChild && $target[0].firstChild.textContent)) {
                        tooltipbody = ej.buildTag("tbody", $target[0].firstChild.textContent, {}, {});

                    }
                }

                tooltiptable.append(tooltipbody);
                if (tooltipbody) {
                    if (!(proxy.model.showGridExpandCellTooltip) && proxy.model.showGridCellTooltip == true && $target[0].firstChild
                        || (proxy.model.showGridExpandCellTooltip && proxy.model.showGridCellTooltip == true)) {

                        proxy._mouseOverTooltip = ej.buildTag("div.e-tooltipgantt#tooltipgantt" + proxy._id + "", tooltiptable,
                            {
                                "top": (posy + 10) + "px", "left": (posx + 15) + "px",
                                'position': 'absolute',
                                'z-index': '5',
                                'padding': '0',
                                'border-radius': '3px'
                            }, {});

                        $(document.body).append(proxy._mouseOverTooltip);
                    }
                }
            }
        },

        _cellMouseLeave: function () {

            var proxy = this;
            $("#tooltipgantt").remove();
            $(proxy._mouseOverTooltip).remove();
        },

        disableTooltip: function () {
            this._cellMouseLeave();
        },

        _createTooltipTemplate: function () {

            var proxy = this,
                td,
                columnHeaderTexts = proxy.model.columnHeaderTexts,
                helpers = {
                    _getTaskName: proxy._tooltipTaskName
                };

            $.views.helpers(helpers);
            var parentTr = "<tr class='e-tooltip_rowcell'>";

            td = "{{if ~_getTaskName()}}" +
                "<td class='e-tooltiptaskname' style='height:auto;width:auto;font-weight:normal;'>{{:ttiptaskname}}</td>{{/if}}";

            parentTr += td;
            parentTr += "</tr>";

            var templates = {};
            templates[proxy._id + "tooltipTemplate"] = parentTr;
            $.templates(templates);
        },

        _tooltipTaskName: function () {
            return this.data.ttiptaskname;
        },

        //SCROLL EVENT FOR VIRTUALIZATION
        _onScroll: function (args) {

            var proxy = this,
                hScrollDist;

            if (proxy.model.showGridCellTooltip) {
                proxy._cellMouseLeave();
            }

            if (args.scrollLeft != undefined) {
                proxy._scrollLeft = args.scrollLeft;
                hScrollDist = Math.abs(proxy._scrollLeft - proxy._prevScrollLeft);
            }

            

            if (hScrollDist) {

                //CHANGE SCROLL LEFT VALUE OF HEADER  BASED ON THE SCROLLING OF CONTENT DIV
                proxy._$gridHeaderContainer.scrollLeft(proxy._scrollLeft);
                proxy._prevScrollLeft = proxy._scrollLeft;
            }
            
            if (args.scrollTop!=undefined) {

                

                //CHECK VIRTUALIZATION IS ENABLED OR NOT
                if (proxy.model.enableVirtualization) {

                    proxy._scrollTop = args.scrollTop; //proxy._$gridContent.scrollTop();
                    proxy._vScrollDir = proxy._prevScrollTop <= proxy._scrollTop ? 1 : -1;
                    proxy._vScrollDist = Math.abs(proxy._scrollTop - proxy._prevScrollTop);
                    //console.log("VScrollDist:" + proxy._vScrollDist);
               
                    if (proxy._vScrollDist) {
                        proxy._updateCurrentViewData();
                        proxy._prevScrollTop = proxy._scrollTop;
                    }
                }
            }
        },


        //CLICK HANDLER FOR PERFORM ROWSELECTION AND EXPANDCOLLAPSE THE RECORD
        _onClick: function (e) {

            var proxy = this,
                model = proxy.model,
                $target = $(e.target);

            if (model.enableVirtualization) {
                proxy.element[0].focus();
            }

            if ($target.hasClass('e-treegridexpand') || $target.hasClass("e-treegridcollapse")) {

                var $tr = $target.closest('tr'),
                    $gridRows = proxy.getRows(),
                    rowIndex = $gridRows.index($tr),
                    record = model.currentViewData && model.currentViewData[rowIndex],
                    recordIndex = proxy._updatedRecords.indexOf(record),
                    args = {},
                    isExpandCollapseEnabeled;

                args.data = record;
                args.recordIndex = recordIndex;
                args.expanded = $tr.hasClass("e-treegridrowexpand") ? false : true;

                if (args.expanded) {

                    isExpandCollapseEnabeled = proxy._trigger("expanding", args);

                } else {

                    isExpandCollapseEnabeled = proxy._trigger("collapsing", args);
                    
                }

                if (!isExpandCollapseEnabeled&&!model.isFromGantt) {
                    ej.TreeGrid.sendExpandCollapseRequest(proxy,args);
                  
                }
                
            } else if ($target.hasClass("e-rowcell") || $target.parent().hasClass("e-rowcell")
                || ($target.closest("td").hasClass("e-rowcell")) && $target.hasClass("e-cell")) {

                if (!model.allowSelection) return;
                
                if (model.selectionType == ej.TreeGrid.SelectionType.Multiple) {

                    if (e.ctrlKey) proxy._multiSelectCtrlRequest = true;
                    
                    if (e.shiftKey) {

                        proxy._multiSelectShiftRequest = true;
                        proxy.selectRows(proxy._previousIndex, proxy.getRows().index($target.closest('tr')));
                        
                    }
                }
                
                if (!proxy._multiSelectShiftRequest) {

                    recordIndex = proxy.getRows().index($target.closest('tr'));

                    if (recordIndex != -1) {
                        
                        record = model.currentViewData[recordIndex];                      
                        var args = { rowElement: $tr, recordIndex: model.selectedRowIndex };

                        if (!proxy._trigger('rowSelecting', args)) {

                            model.selectedItem = record;
                            model.selectedRowIndex = proxy._updatedRecords.indexOf(record);
                            proxy.selectRows(model.selectedRowIndex);
                            args = {
                                rowElement: $tr,
                                data: proxy.model.selectedItem,
                                target: "ejTreeGrid",
                                recordIndex: model.selectedRowIndex
                            };
                            proxy._trigger("rowSelected", args);                            
                        }
                    }
                }
                
                proxy._multiSelectShiftRequest = false;
            }
        },


        //CLICK HANDLER FOR PERFORM THE SORTING ACTION
        _onHeaderClick: function (e) {

            var proxy = this,
                model = proxy.model;
            proxy._cellMouseLeave();

            if ($(e.target).is(".e-ascending, .e-descending")) e.target = e.target.parentNode;

            var $target = $(e.target),
                columnName,
                columnSortDirection;

            proxy.getHeaderTable().find(".e-columnheader").find(".e-headercellactive").removeClass("e-headercellactive");

            if ($target.hasClass("e-headercelldiv")) {

                if (!model.allowSorting) return false;

                columnName = $.trim($target.text());

                if ($target.find('span').hasClass("e-ascending")) {
                    columnSortDirection = ej.sortOrder.Descending;
                } else {
                    columnSortDirection = ej.sortOrder.Ascending;
                }

                if (model.allowMultiSorting && e.ctrlKey) {
                    proxy._multiSortRequest = true;
                }

                proxy.sortColumn(columnName, columnSortDirection);
            }

            return false;
        },


        //HEADER MOUSE DOWN EVENT FOR COLUMN RESIZING
        _headerMouseDown: function (e) {

            var proxy = this,
                model = proxy.model;
            proxy._cellMouseLeave();

            if (model.allowColumnResize) proxy._resizer._mouseDown(e);

            if (($(e.target).hasClass("headercelldiv") && $(e.target).hasClass("headercell"))) {

                var $headercell = $(e.target).hasClass("headercelldiv") ? $(e.target).parent() : $(e.target);
                model.headerEffects && $headercell.addClass("headercellactive");

            }
        },


        //EVENT FOR COLUMN RESIZE
        _enableColumnResizeEvents: function () {

            var proxy = this;

            if (proxy.model.allowColumnResize) {
                proxy._on(proxy.element, "mousemove", proxy._mouseMove);
                proxy._on(proxy.element, "mouseup", proxy._mouseUp);
            } else {
                proxy._off(proxy.element, "mousemove", proxy._mouseMove);
                proxy._off(proxy.element, "mouseup", proxy._mouseUp);
            }
        },


        _mouseMove: function (e) {

            var proxy = this;

            if (proxy.model.allowColumnResize) {
                proxy._resizer._mouseMove(e);
            }
        },


        _mouseUp: function (e) {

            var proxy = this;

            if (proxy.model.allowColumnResize) {

                if (proxy.model.isEdit && $(e.target).hasClass('e-headercelldiv')) {
                    proxy.saveCell(); 
                }                
                proxy._resizer._mouseUp(e);
                //proxy.getHeaderTable().css({ 'width': '100%' });
                //proxy.setWidthToColumns();
            }
        },




        //ENABLE THE EDITING EVENTS
        _enableEditingEvents: function () {

            var proxy = this,
                model = proxy.model;

            if (model.editSettings.allowEditing) {

                if (model.editSettings.editMode == "cellEditing") {
                    proxy._on(proxy.element, "mousedown", ".e-gridcontent", proxy._saveCellHandler);
                }

                proxy._on(this.element, "dblclick", ".e-gridcontent", proxy._editdblClickHandler);
            } else {

                if (model.editSettings.editMode == "cellEditing") {
                    proxy._off(proxy.element, "mousedown", ".e-gridcontent", proxy._saveCellHandler);
                }

                proxy._off(this.element, "dblclick", ".e-gridcontent", proxy._editdblClickHandler);
            }
        },


        //ENABLE THE MOUSEDOWNEVENT HANDLER FOR SAVE CELL
        _saveCellHandler: function (e) {

            var $target = $(e.target),
                proxy = this;
           e.stopPropagation();

            if ($target.closest(".e-popup").length == 0 &&
                $target.closest(".e-rowcell").find("#" + proxy._id + "EditForm").length == 0) {
                proxy.saveCell();
            }

        },

        //DOUBLE CLICK EVENT HANDLER FOR DIALOG EDITING
        _editdblClickHandler: function (e) {

            var proxy = this,
                model = proxy.model,
                $form = $("#" + proxy._id + "EditForm"),
                args = {};

            if (model.editSettings.editMode === "normal") {
                args.requestType = ej.TreeGrid.Actions.BeginEdit;
                proxy._trigger("actionBegin", args);
            }

            if (proxy._cellEditingDetails.cancelSave) {

                proxy._cellEditingDetails.cancelSave = false;
                return;

            }

            if ($form.length === 0) {

                model.editSettings.editMode == "cellEditing" && proxy.element.focus();
                proxy._cellEditingDetails.columnIndex = proxy.getCellIndex(e);
                proxy._cellEditingDetails.rowIndex = proxy.getRowIndex(e);
                fieldName = proxy._cellEditingDetails.columnIndex >= 0 && model.columns[proxy._cellEditingDetails.columnIndex].field;
                if (fieldName) {
                    model.editSettings.allowEditing &&
                        model.editSettings.editMode == ej.TreeGrid.EditMode.CellEditing &&
                        proxy.cellEdit(proxy._cellEditingDetails.rowIndex, fieldName);
                }
            }
        },


        //PERFORM SCROLLING IN TREEGRID
        _mouseWheel: function (e) {

            var proxy = this,
                delta = null,
                ori = e;

            e = e.originalEvent;

            try {
                e.preventDefault ? e.preventDefault() : ori.preventDefault();
            }
            catch (err) {
            }
			
			 if (proxy._$gridContent.height() > proxy._$gridContainer.height()) { 
                proxy._$gridContent.ejScroller("scrollY", 0, true);
                return;
            }

            if (e.wheelDelta) {
                delta = -e.wheelDelta / 120;
                if (window.opera) {
                    if (parseFloat(window.opera.version, 10) < 10)
                        delta = -delta;
                }
            } else if (e.detail) {
                delta = e.detail / 3;
            }
	
            if (!delta) return false;

            var scrollTop = proxy._$gridContent.ejScroller("option", "scrollTop"),

                change = scrollTop + (delta * 57);  

            var h = parseInt(proxy._updatedRecords.length * 30) - (proxy._viewPortHeight-18);

            //console.log("TreeGrid ScrollTop:" + scrollTop + "Height :" + h);
            
            if (change> h) {
                change = h;                
            }

            if (change < 0) {
                change = 0;
            }
            
                proxy._updateScrollTop(change);
           
            return true;

        },

        //KEY PRESSED EVENT FOR KEY BOARD INTERACTION IN TREEGRID CONTROL
        _keyPressed: function (action, target, e) {

            var proxy = this,
                $treegridEle = proxy.element,
                gridObject = $treegridEle.ejTreeGrid("instance"),
                model = gridObject.model;
            
            //CHECK THE ALLOWKEYBOARDNAVIGATION
            if (!model.allowKeyboardNavigation ||
                (target.tagName == 'INPUT' && e.code != 40 && e.code != 38 && e.code != 13 &&
                e.code != 27 && e.code != 9) || (e.code != 113 && target.tagName == 'TD')) {
                return true;
            }

            var returnValue = false,
                $target = $(target);

            switch (action) {

                //save the current edited cellValue on Enter key press
                case "saveRequest":
                    if (model.editSettings.editMode == "cellEditing") {
                        gridObject._moveCurrentCell("down");
                    }

                    break;

                    //cancel the cell editing in the current cell Esc key press
                case "cancelRequest":
                    if (model.editSettings.editMode == "cellEditing") {
                        gridObject.cancelEditCell();
                    }

                    break;

                    //edit the cell in treegrid by F2 key press
                case "editRecord":

                    if (model.editSettings.allowEditing && model.editSettings.editMode == "cellEditing") {

                        gridObject._cellEditingDetails.rowIndex = model.selectedRowIndex;
                        gridObject._cellEditingDetails.columnIndex = proxy.getCellIndex(e, target);

                        if (gridObject._cellEditingDetails.columnIndex !== -1) {
                            fieldName = gridObject.model.columns[gridObject._cellEditingDetails.columnIndex].field;
                            fieldName && gridObject.cellEdit(gridObject._cellEditingDetails.rowIndex, fieldName);
                        }

                    }

                    break;

                    //select the first row while press the Home key
                case "firstRowSelection":

                    if (!proxy._rowSelectingEventTrigger()) {

                        proxy.selectRows(0);

                        recordIndex = proxy._updatedRecords.indexOf(model.selectedItem);
                        rowTop = recordIndex !== -1 && recordIndex * model.rowHeight;
                        scrollTop = proxy._$gridContent.scrollTop();

                        if (scrollTop > rowTop) {

                            args = {
                                requestType: "scroll",
                                delta: rowTop
                            };

                            proxy._completeAction(args);
                            proxy._$gridContent.scrollTop(rowTop);

                            if (model.enableVirtualization) {
                                proxy.element[0].focus();
                            }
                        }

                        proxy._rowSelectedEventTrigger(0);
                    }

                    break;

                case "lastRowSelection":

                    if (!proxy._rowSelectedEventTrigger()) {

                        lastRowIndex = proxy._updatedRecords.length - 1;
                        proxy.selectRows(lastRowIndex);

                        recordIndex = model.selectedItem && proxy._updatedRecords.indexOf(model.selectedItem);
                        rowTop = lastRowIndex !== -1 && recordIndex * model.rowHeight;

                        if (rowTop + proxy.model.rowHeight >= proxy._viewPortHeight) {

                            scrollTop = rowTop + proxy.model.rowHeight - (proxy._viewPortHeight - proxy._scrollBarHeight);

                            args = {
                                requestType: "scroll",
                                delta: scrollTop
                            };

                            proxy._completeAction(args); //actionComplete event trigger for perform the scrolling gantt chartcontrol.

                            proxy._$gridContent.scrollTop(scrollTop);

                            if (model.enableVirtualization) {
                                proxy.element[0].focus();
                            }

                        }

                        proxy._rowSelectedEventTrigger(lastRowIndex);
                    }

                    break;

                    //set the edit mode to previous cell by press shift +tab key
                case "moveCellLeft":

                    if (model.editSettings.allowEditing && model.editSettings.editMode == "cellEditing") {
                        returnValue = proxy._moveCurrentCell("left");
                    }

                    break;

                    //set the edit mode to next cell by tab key
                case "moveCellRight":
                    if (model.editSettings.allowEditing && model.editSettings.editMode == "cellEditing" && $target) {
                        returnValue = proxy._moveCurrentCell("right");
                    }

                    break;

                    //select the next row by press down arrow key
                case "downArrow":
                    var lastRowIndex = proxy._updatedRecords.length - 1; //get the last row index of the treegrid control

                    if (proxy.model.selectedRowIndex != lastRowIndex) {

                        proxy.selectRows(proxy.model.selectedRowIndex + 1);

                        var recordIndex = model.selectedItem && proxy._updatedRecords.indexOf(model.selectedItem),
                            rowTop = lastRowIndex !== -1 && recordIndex * model.rowHeight;

                        //check if the selected row present in  out of view port of the grid tree
                        if (rowTop + proxy.model.rowHeight >= proxy._viewPortHeight) {
                            var scrollTop = rowTop + proxy.model.rowHeight - (proxy._viewPortHeight - proxy._scrollBarHeight);
                            if (proxy._$gridContent.height() < proxy._$gridContainer.height()) 
                                scrollTop += 18;
                                args = {
                                    requestType: "scroll",
                                    delta: scrollTop
                                };

                            //actionComplete event trigger for perform the scrolling gantt chartcontrol.
                            proxy._completeAction(args);

                            proxy._$gridContent.children('.e-content').scrollTop(scrollTop);

                            if (model.enableVirtualization) {
                                proxy.element[0].focus();
                            }

                        }

                        proxy._rowSelectedEventTrigger(proxy.model.selectedRowIndex);
                    }

                    break;

                    //select the previous row by press down arrow key
                case "upArrow":

                    if (proxy.model.selectedRowIndex !== 0) {
                        proxy.selectRows(proxy.model.selectedRowIndex - 1);
                    }

                    recordIndex = proxy._updatedRecords.indexOf(model.selectedItem);
                    rowTop = recordIndex !== -1 && recordIndex * model.rowHeight;

                    scrollTop = proxy._$gridContent.children('.e-content').scrollTop();

                    if (scrollTop > rowTop) {

                        args = {
                            requestType: "scroll",
                            delta: rowTop
                        };

                        proxy._completeAction(args);
                        proxy._$gridContent.scrollTop(rowTop);
                        if (model.enableVirtualization) {
                            proxy.element[0].focus();
                        }
                    }

                    proxy._rowSelectedEventTrigger(proxy.model.selectedRowIndex);

                    break;

                default:
                    returnValue = true;
            }

            return returnValue;
        },

        //ROWSELECTING EVENT METHOD
        _rowSelectingEventTrigger: function () {

            var proxy = this,
                model = proxy.model,
                args = {},
                selectedItem,
                $gridRows;

            if (model.currentViewData.length <= 0) {
                model.selectedRowIndex = -1;
            }
            if (model.selectedRowIndex !== -1 && model.currentViewData.length > 0) {

                $gridRows = proxy.getRows();
                selectedItem = model.currentViewData[model.selectedRowIndex];
                model.selectedItem = selectedItem;
                args = {
                    rowElement: $gridRows.eq(model.selectedRowIndex),
                    data: selectedItem,
                    recordIndex: model.selectedRowIndex
                };

            }
            return proxy._trigger('rowSelecting', args);
        },


        //ROWSELECTED EVENT METHOD
        _rowSelectedEventTrigger: function (index) {

            var proxy = this,model=proxy.model,
                args = {},
                $gridRows = proxy.getRows();

            if (model.currentViewData.length > 0) {
                args = {
                    rowElement: $gridRows.eq(index),
                    data: proxy.model.selectedItem,
                    target: "ejTreeGrid",
                    recordIndex: index
                };
                proxy._trigger("rowSelected", args);
            }

        },


        //QUERYCELLINFO,ROWDATABOUND EVENT BINDING FOR TREEGRID
        _eventBindings: function () {

            var proxy = this,
                model = proxy.model,
                count = 0,
                gridRows = proxy._gridRows,
                length = gridRows.length;

            
            if (model.queryCellInfo != null || model.rowDataBound != null) {

                for (count; count < length; count++) {

                    proxy._rowEventTrigger(gridRows[count], model.flatRecords[count]);

                }
            }
        },

        //ROWDATABOUND EVENT TRIGGER
        _rowEventTrigger: function (row, data) {

            var proxy = this;

            proxy._trigger("rowDataBound", {
                rowElement: row,
                data: data
            });

            var tdCells = row.cells,
                $tdRowcells = $(row).find(".e-rowcell"),
                cellIndex = 0,
                length = tdCells.length,
                column,
                columns = proxy.model.columns;

            for (cellIndex; cellIndex < length; cellIndex++) {

                if ($(tdCells[cellIndex]).hasClass("e-rowcell")) {

                    column = columns[$tdRowcells.index(tdCells[cellIndex])];

                }

                if (column) {

                    proxy._cellEventTrigger(tdCells[cellIndex], data, column);

                }
            }
        },


        //QUERYCELLINFO EVENT TRIGGER
        _cellEventTrigger: function (cell, data, column) {

            var args = {
                cellElement: cell,
                data: data,
                column: column,

            };

            args.cellValue = args.column && data[args.column.field];

            this._trigger("queryCellInfo", args);
        },


        //ACTION COMPLETE EVENT TRIGGER
        _completeAction: function (args) {

            var proxy = this,
                model = proxy.model,
                sortcolumns = model.sortSettings.sortedColumns;

            model.isEdit = false;

            if ((ej.TreeGrid.Actions.Sorting == args.requestType && model.allowSorting)
                || (ej.TreeGrid.Actions.Refresh == args.requestType)) {

                if (model.allowSorting) {

                    if (!proxy._multiSortRequest) {
                        proxy.getHeaderTable().find(".e-columnheader").
                            find(".e-headercelldiv").find(".e-ascending,.e-descending").remove();

                        proxy.getHeaderTable().find("[aria-sort]").removeAttr("aria-sort");
                    }

                    for (var i = 0; i < sortcolumns.length; i++) {
                        proxy._addSortElementToColumn(sortcolumns[i].field, sortcolumns[i].direction);
                    }

                }

                proxy._multiSortRequest = false;
            } else if (ej.TreeGrid.Actions.BeginEdit == args.requestType || ej.TreeGrid.Actions.Add == args.requestType) {

                var $form = $("#" + proxy._id + "EditForm");

                proxy.model.isEdit = true;
                proxy.setWidthToColumns();

                if (ej.TreeGrid.Actions.Add == args.requestType) {

                    $form.find(".e-field:disabled").not(".e-identity").removeAttr("disabled").removeClass("e-disable");

                }

            }

            proxy._trigger("actionComplete", args);
        },


        //#endregion

        //#region METHOD FOR DATA PROCESSING

        //RENDERING THE DATA
        sendDataRenderingRequest: function (args) {

            var proxy = this,
                temp;

            if (proxy.model.currentViewData.length) {

                switch (args.requestType) {

                    case ej.TreeGrid.Actions.Delete:
                    case ej.TreeGrid.Actions.Refresh:
                    case ej.TreeGrid.Actions.Save:
                    case ej.TreeGrid.Actions.Sorting:
                    case ej.TreeGrid.Actions.Searching:
                    case ej.TreeGrid.Actions.ExpandCollapse:
                        temp = document.createElement('div');
                        proxy.getContentTable().find("colgroup").first().replaceWith(proxy._getMetaColGroup());
                        var $tbody = proxy.getContentTable().children('tbody');
                        $tbody.empty();                        
                        temp.innerHTML = ['<table>', $.render[proxy._id + "_Template"](proxy.model.currentViewData),
                            '</table>'].join("");
                        proxy.getContentTable().get(0).replaceChild(temp.firstChild.firstChild,
                            proxy.getContentTable().get(0).lastChild);
                        proxy._gridRows = proxy.getContentTable().get(0).rows;
                        proxy.setGridRows($(proxy.getContentTable().get(0).rows));
                        proxy._eventBindings();
                        break;
                }

            } else {

                proxy.getContentTable().find('tbody').empty().append(proxy._getEmptyTbody());
                proxy._gridRows = null;
                proxy.setGridRows(null);

            }

            proxy._completeAction(args);            

        },


        //SORTING THE DATA BASED ON THE PARTICULAR FIELDS
        sortColumn: function (columnName, columnSortDirection) {

            var proxy = this,
                model = proxy.model,
                sortColumns = model.sortSettings.sortedColumns,
                args = {},
                count = 0,
                length = sortColumns.length;

            if (!model.allowSorting || $.inArray(columnName, proxy._disabledSortableColumns) != -1
                || columnName.length == 0) {
                return;
            }

            if (!proxy._multiSortRequest) {
                model.sortSettings.sortedColumns = [];
            }

            args.requestType = ej.TreeGrid.Actions.Sorting;
            args.columnName = columnName;

            proxy._cSortedColumn = proxy.getFieldNameByHeaderText(columnName);
            proxy._cSortedDirection = args.columnSortDirection = columnSortDirection === undefined ?
                ej.sortOrder.Ascending : columnSortDirection;

            for (count; count < length; count++) {
                
                if (sortColumns[count].field == proxy._cSortedColumn) {
                    sortColumns.splice(count, 1);
                    break;
                }

            }

            model.sortSettings.sortedColumns.push({
                field: proxy._cSortedColumn,
                direction: proxy._cSortedDirection
            });

            var returnValue = proxy.processBindings(args);

            if (returnValue) {

                proxy._cSortedDirection = proxy._cSortedColumn = null;

            }
        },


        //DELETE THE PARTICULAR RECORD 
        deleteRow: function ($tr) {

            var proxy = this,
                deletedRowIndex,
                deletedRow,
                args = {},
                eveArgs = {};


            if (ej.isNullOrUndefined($tr)) {
                $tr = proxy.getRowByIndex(proxy.model.selectedRowIndex);
            }

            deletedRowIndex = proxy.getRows().index($tr);
            deletedRow = proxy.model.currentViewData[deletedRowIndex];

            args.tr = $tr;
            args.data = deletedRow;
            args.requestType = ej.TreeGrid.Actions.Delete;   

            if (proxy._trigger("actionBegin", args)) {
                return true;
            }

            proxy.processBindings(args);
           // proxy._completeAction(args);

        },


        //SEARCH THE TASK FROM GANTT CONTROL
        search: function (searchString) {

            var proxy = this,
                args = {};

            args.requestType = ej.TreeGrid.Actions.Searching;
            args.keyValue = searchString;

            proxy._searchString = searchString;

            proxy.processBindings(args);
        },

        //SEND SAVE REQUEST
        endEdit: function () {

            var proxy = this;

            if (proxy.model.editSettings.editMode == "cellEditing")
                return proxy.saveCell();

            return true;

        },

        //#endregion

        //#region PUBLIC METHODS

        //CALCULATE THE VISIBLE RANGE OF RECORDS TO DISPLAYED IN CURRENT VIEWPORT
        getVisibleRange: function () {

            var proxy = this,
                top = proxy._scrollTop / proxy.model.rowHeight,
                coeff = top - Math.floor(top),
                topIndex, bottomIndex,
                model = proxy.model;

            //console.log("TreeGrid ScrollTop:" + proxy._scrollTop);

            proxy._offset = coeff * model.rowHeight;
            topIndex = Math.floor(top);
            bottomIndex = proxy._getRowPosition(proxy._scrollTop + proxy._viewPortHeight);
            topIndex = Math.max(0, topIndex);
            bottomIndex = Math.min(proxy.getRecordsCount(), bottomIndex);

            proxy._visibleRange = {
                top: topIndex,
                bottom: bottomIndex
            };

            return proxy._visibleRange;

        },


        //SET THE COLUMNWIDTH TO EACH COLUMN IN TREEGRID
        setWidthToColumns: function () {

            var proxy = this,
                model = proxy.model,
                $cols1 = proxy.getContentTable().children("colgroup").find("col"),
                $cols2 = proxy.getHeaderTable().children("colgroup").find("col"),
                width = proxy._gridWidth,
                colCount = model.columns.length;

            if ($cols1.length > colCount) $cols1.splice(0, ($cols1.length - colCount));
            if ($cols2.length > colCount) $cols2.splice(0, ($cols2.length - colCount));

            for (var i = 0; i < $cols2.length; i++) {

                if (!ej.isNullOrUndefined(proxy._columnsWidthCollection[i])) {

                    $cols1.eq(i).width(proxy._columnsWidthCollection[i]);
                    $cols2.eq(i).width(proxy._columnsWidthCollection[i]);

                } else {
                    var colWidth = (width / colCount).toFixed(2) + "px";
                    $cols1.eq(i).css("width", colWidth);
                    $cols2.eq(i).css("width", colWidth);
                    proxy._columnsWidthCollection[i] = (width / colCount).toFixed(2);
                }
            }
        },


        //ENTER EDIT MODE INTO THE TREEGRID CELL
        cellEdit: function (index, fieldName) {

            var proxy = this,
                $form,
                model = proxy.model;

            if (proxy.model.showGridCellTooltip) {
                proxy._cellMouseLeave();
            }

            proxy.model.isEdit && proxy.saveCell();

            $form = $("#" + proxy._id + "EditForm");

            if ($form.length > 0) return true;

            if (!proxy.model.selectedItem) return false;

            if (model.isFromGantt && ((fieldName === "status" ||
                fieldName === "startDate" ||
                fieldName === "endDate" ||
                fieldName === "duration" ||
                fieldName === "predecessor") &&
                proxy.model.selectedItem.hasChildRecords) ||
                (fieldName === "baselineStartDate" ||
                    fieldName === "baselineEndDate")) {

                return false;

            }

            if (proxy.getRows()[index]) {
                var $targetTr = $(proxy.getRows()[index]);
                columnIndex = proxy.getColumnIndexByField(fieldName),
                $targetTd = $targetTr.find(".e-rowcell").eq(columnIndex),
                column = proxy.model.columns[columnIndex],
                data = proxy.model.selectedItem,
                beginEditArgs = {},
                args = {
                    validationRules: ej.isNullOrUndefined(column.validationRules) ? {} : $.extend(true, {},
                        column.validationRules),
                    columnName: column.field,
                    value: data[fieldName] ? data[fieldName] : data.item && data.item[fieldName],
                    data: data,
                    columnObject: column,
                    cell: $targetTd
                },
                isEditable = true;

            if (model.isFromGantt && args.columnName === "predecessor") {

                var predecessor = args.data.item[proxy.model.predecessorMapping];
                args.value = predecessor ? predecessor : "";

            }

            beginEditArgs.data = data;
            beginEditArgs.columnIndex = columnIndex;
            beginEditArgs.rowElement = $targetTr;
            beginEditArgs.cellElement = $targetTd;

          

                proxy._cellEventTrigger($targetTr[0].cells[proxy._cellEditingDetails.columnIndex], data, args.columnObject);

                if (proxy._trigger("beginEdit", beginEditArgs)) return false;

                if ($.inArray(fieldName, proxy._primaryKeys) != -1 ||
                    args.columnObject.allowEditing === false) {

                    $.extend(proxy._cellEditingDetails, {
                        cellValue: args.value,
                        rowIndex: index,
                        fieldName: fieldName,
                        data: args.data,
                        columnIndex: columnIndex
                    });

                    isEditable = false;
                }

                if ($targetTr.hasClass("e-insertedrow") && (!args.columnObject.isTemplateColumn)) isEditable = true;

                if (isEditable) {

                    $.extend(proxy._cellEditingDetails, {
                        rowIndex: index,
                        cellValue: args.value,
                        columnIndex: columnIndex,
                        fieldName: fieldName,
                        cellEditType: args.columnObject.editType,
                        data: data
                    });
                }

                proxy._renderCellEditObject(args, $targetTd);
                $targetTr.addClass("e-editedrow");

                if (proxy._cellEditingDetails.columnIndex === 0) args.cell&&args.cell.addClass("e-editedfirstcell");
                else args.cell&&args.cell.addClass("e-editedcell");

                return true;
            }
        },


        //SAVE THE EDITED CELL
        saveCell: function () {

            var proxy = this,
                model = proxy.model;

            if ($("#" + proxy._id + "EditForm").length > 0) {

                if (!proxy.editFormValidate()) return true;

                if (proxy._cellEditingDetails.columnIndex >= 0) {

                    var $form = $("#" + proxy._id + "EditForm"),
                        $targetTr = $form.closest("tr"),
                        $targetTd = $form.closest("td"),
                        formattedValue, args = {},
                        column = model.columns[proxy._cellEditingDetails.columnIndex],
                        $element = $("#" + proxy._id + proxy._cellEditingDetails.fieldName),
                        cellElement;

                    args = {
                        columnName: column.field,
                        value: proxy.getCurrentEditCellData(),
                        data: proxy._cellEditingDetails.data,
                        previousValue: proxy._cellEditingDetails.cellValue,
                        columnObject: column,
                        cellElement: $targetTd,
                        rowElement: $targetTr,
                    };

                    if (proxy._cellEditingDetails.cellEditType == "datetimepicker" ||
                        proxy._cellEditingDetails.cellEditType == "dropdownedit" ||
                        proxy._cellEditingDetails.cellEditType == "datepicker") {

                        $element.data("ejWidgets") && $element[$element.data("ejWidgets")[0]]("destroy");                        

                    }

                    if (proxy._cellEditingDetails.cellEditType === "datepicker")
                        args.value = proxy.getFormatedDate(args.value);

                    if (!ej.isNullOrUndefined(column.format)) {

                        formattedValue = proxy.formatting(column.format, args.value);
                        args.cellElement.empty().html(formattedValue);

                    } else {

                        if (args.columnObject.type == "boolean") {

                            var cellData = {};
                            cellData[args.columnObject.field] = args.value;
                            args.cellElement.empty().html(
                                $($.templates.Grid_JSONTemplate.render(cellData))[0].cells[proxy._cellEditingDetails.columnIndex].innerHTML
                            );

                        } else args.cellElement.empty().html(args.value);
                    }

                    var isValueModified = ((proxy._cellEditingDetails.cellEditType == "datepicker" ||
                            proxy._cellEditingDetails.cellEditType == "datetimepicker") &&
                        args.value instanceof Date && args.previousValue instanceof Date) ?
                        (args.value.getTime() !== args.previousValue.getTime()) :
                        (args.value !== args.previousValue);

                    model.isEdit = false;

                    var fieldName = proxy._cellEditingDetails["fieldName"];

                    if (model.isFromGantt && fieldName === "predecessor") {

                        var ganttPredecessor = [],
                        prevPredecessors = [],
                        modifiedPredecessors = [],
                        count = 0,
                        length, predecessor;

                        args.previousValue = args.data.predecessor;
                        prevPredecessors = args.previousValue;

                        if (args.value.length > 0) {
                            modifiedPredecessors = args.data._calculatePredecessor(args.value);
                        }

                        length = modifiedPredecessors.length;

                        var index = 0,
                            prevPrdecessorlength = args.previousValue && args.previousValue.length;

                        for (index = 0; index < prevPrdecessorlength; index++) {

                            predecessor = prevPredecessors[index];

                            if (predecessor.from === args.data.taskId.toString()) {
                                ganttPredecessor.push(predecessor);
                            }

                        }

                        for (count = 0; count < length; count++) {

                            ganttPredecessor.push(modifiedPredecessors[count]);

                        }

                        args.data[proxy._cellEditingDetails["fieldName"]] = ganttPredecessor;
                        args.data.item[model.predecessorMapping] = args.value;

                    } else if (isValueModified) {
                        if (model.isFromGantt) {

                            switch (fieldName) {

                                case "taskId":
                                    args.data.item[model.taskIdMapping] = args.value;
                                    break;
                                case "taskName":
                                    args.data.item[model.taskNameMapping] = args.value;
                                    break;
                                case "startDate":
                                    args.data.item[model.startDateMapping] = args.value;
                                    break;
                                case "endDate":
                                    args.data.item[model.endDateMapping] = args.value;
                                    break;
                                case "resourceInfo":
                                    args.data.item[model.resourceInfoMapping] = proxy._getResourceId( args.value);                                    
                                    break;
                                case "duration":
                                    args.data.item[model.durationMapping] = args.value;
                                    break;
                                case "status":
                                    args.data.item[model.progressMapping] = args.value;
                                    break;
                                default:
                                    args.data.item[proxy._cellEditingDetails[fieldName]] = args.value;
                                    break;
                            }

                        } else {
                            args.data.item[proxy._cellEditingDetails.fieldName] = args.value;
                        }
                        
                        args.data[proxy._cellEditingDetails.fieldName] = args.value;
                        
                    }

                    if (model.isFromGantt && (args.columnName === "startDate" ||
                        args.columnName === "endDate" ||
                        args.columnName === "duration" ||
                        args.columnName === "predecessor" ||
                        args.columnName == "status")) {

                        args.isModified = true;

                    }

                    if (proxy._cellEditingDetails.columnIndex === 0) {

                        cellElement = $($.render[proxy._id + "_Template"](args.data))[0].cells[proxy._cellEditingDetails.columnIndex];
                        args.cellElement.removeClass("e-editedcell").replaceWith(cellElement);

                    } else {

                        cellElement = $($.render[proxy._id + "_Template"](args.data))[0].cells[proxy._cellEditingDetails.columnIndex];
                        args.cellElement.removeClass("e-editedcell").replaceWith(cellElement);

                    }
                    proxy._trigger("endEdit", args);
                    proxy._cellEventTrigger(args.rowElement[0].cells[proxy._cellEditingDetails.columnIndex], args.data, args.columnObject);
                    $targetTr.removeClass("e-editedrow");
                }
            }

            return false;
        },


        //VALIDATE THE MODIFIED CELLVALUE
        editFormValidate: function () {

            if ($.isFunction($.validator))
                return $("#" + this._id + "EditForm").validate({
                    onsubmit: false
                }).form();

            return true;
        },


        //GET THE CURRENT CELL DATA
        getCurrentEditCellData: function () {

            var proxy = this,
                model = proxy.model;

            if ($("#" + proxy._id + "EditForm").length) {

                var $element = $("#" + proxy._id + proxy._cellEditingDetails.fieldName),
                    cellValue;

                switch (proxy._cellEditingDetails.cellEditType) {

                    case ej.TreeGrid.EditingType.String:
                        cellValue = $element.val();
                        break;

                    case ej.TreeGrid.EditingType.Numeric:
                        cellValue = $element.ejNumericTextbox("getValue");
                        $element.ejNumericTextbox("getValue");
                        break;

                    case ej.TreeGrid.EditingType.Dropdown:
                        if (model.isFromGantt) {
                            cellValue = proxy._getSelectedItem($element.ejDropDownList("model.selectedItems"));
                        } else
                            cellValue = $element.ejDropDownList("model.value");
                        break;

                    case ej.TreeGrid.EditingType.Boolean:
                        cellValue = $element.is(':checked');
                        break;

                    case ej.TreeGrid.EditingType.DatePicker:
                        cellValue = $element.ejDatePicker("model.value");
                        break;

                    case ej.TreeGrid.EditingType.DateTimePicker:
                        cellValue = $element.ejDateTimePicker("model.value");
                        break;

                }
                if (typeof cellValue == "string" && cellValue.length &&
                    model.columns[proxy._cellEditingDetails.columnIndex].type == "number") {

                    cellValue = parseFloat(cellValue);

                }

                return cellValue;
            }

            return null;
        },


        _getResourceId:function(dataSource){

            var resourceIds = [],
                count = 0, length = dataSource.length;

            for (count = 0; count < length; count++) {
                resourceIds.push(dataSource[count][this.model.resourceIdMapping]);
            }
            return resourceIds;
        },

        _getSelectedItem: function (indexArray) {

            var proxy = this,
                count = 0,
                length = indexArray.length,
                dropDownData = proxy.model.columns[proxy._cellEditingDetails.columnIndex].dropdownData,
                selectedItems = [];

            if (dropDownData) {

                for (count = 0; count < length; count++) {

                    $.each(dropDownData, function (index, resourceInfo) {
                        if (indexArray[count] === index) {
                            selectedItems.push(resourceInfo);
                        }
                    });

                }
            }

            return selectedItems;
        },

        //GET THE FORMATED DATE 
        getFormatedDate: function (date) {
            return Globalize.format(date, this.model.dateFormat);
        },


        //GET THE FORMATTED TEXT
        formatting: function (formatstring, str) {

            formatstring = formatstring.replace(/%280/g, "\"").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

            var proxy = this,
                s = formatstring,
                frontHtmlidx, frontHtml, rearHtml, lastidxval;

            frontHtmlidx = formatstring.split("{0:");
            lastidxval = formatstring.split("}");
            frontHtml = frontHtmlidx[0];
            rearHtml = lastidxval[1];

            if (formatstring.indexOf("{0:") != -1) {

                var toformat = new RegExp("\\{0(:([^\\}]+))?\\}", "gm"),
                    formatVal = toformat.exec(formatstring);

                if (formatVal != null && str != null) {

                    if (frontHtml != null && rearHtml != null) str = frontHtml + Globalize.format(str, formatVal[2]) + rearHtml;
                    else str = Globalize.format(str, formatVal[2]);

                } else if (str != null) str = str;
                else str = "";

                return str;
            } else if (proxy.data != null && proxy.data.Value == null) {

                $.each(proxy.data, function (dataIndex, dataValue) {
                    s = s.replace(new RegExp('\\{' + dataIndex + '\\}', 'gm'), dataValue);
                });

                return s;

            } else return proxy.data.Value;

        },


        //GET THE COLUMNINDEX BY USIGN THE FIELD NAME
        getColumnIndexByField: function (field) {

            var proxy = this,
                columns = proxy.model.columns,
                length = columns.length,
                column = 0;

            for (column; column < length; column++) {
                if (columns[column]["field"] == field)
                    break;
            }

            return column;
        },

        //GET THE BROWSER DETAILS
        getBrowserDetails: function () {
            var b = navigator.userAgent.match(/(firefox|chrome|opera|msie|safari)\s?\/?(\d+(.\d+)*)/i);
            if (!!navigator.userAgent.match(/Trident\/7\./))
                return { browser: "msie", version: jQuery.uaMatch(navigator.userAgent).version };
            return { browser: b[1].toLowerCase(), version: b[2] };
        },


        setValidation: function () {

            var proxy = this,
                columns = proxy.model.columns,
                length = columns.length,
                count = 0;

            proxy._initValidator();

            for (count; count < length; count++) {

                if (!ej.isNullOrUndefined(columns[count]["validationRules"])) {

                    proxy.setValidationToField(columns[count].field, columns[count].validationRules);

                }
            }
        },

        //SET THE VALIDATION TO THE PARTICULAR FIELD
        setValidationToField: function (name, rules) {

            var proxy = this,
                ele = $("#" + proxy._id + name).length > 0 ? $("#" + proxy._id + name) : $("#" + name);
            ele.rules("add", rules);

            var validator = $("#" + proxy._id + "EditForm").validate({
                onsubmit: false

            });

            if (!ej.isNullOrUndefined(rules["required"])) {

                validator.settings.messages[name] = {};
                validator.settings.messages[name]["required"] = ej.TreeGrid.getColumnByField(proxy.model.columns, name).headerText + " is required";

            }
        },


        //GET THE FIELDNAME OF COLUMN BY USING THE HEADERTEXT
        getFieldNameByHeaderText: function (headerText) {

            var proxy = this;

            if (ej.isNullOrUndefined(proxy._fieldColumnNames[headerText])) return null;

            return proxy._fieldColumnNames[headerText];
        },


        //CLEAR THE SELECTION

        clearSelection: function (index) {

            var proxy = this,
                model = proxy.model;

            if (model.selectedRowIndex != -1) {

                var $gridRows = proxy.getRows(),
                    index;

                if (!ej.isNullOrUndefined(index)) {
                    proxy.getRowByIndex(index).removeAttr("aria-selected").find(".e-selectionbackground").removeClass("e-selectionbackground").removeClass("e-active");
                   var tempIndex = $.inArray(index, this._selectedRowsIndexes);
                    if (tempIndex != -1)
                        this._selectedRowsIndexes.splice(tempIndex, 1);
                    var record=model.flatRecords[index];
                    if (record){   // For delete all records
                        record.isSelected = false;
                    }
                    else {

                        if ($gridRows) {
                            $gridRows.removeAttr("aria-selected").find(".e-rowcell").removeClass("e-selectionbackground").removeClass("e-active");
                        }
                        var dataManager = new ej.DataManager(model.flatRecords);

                        var query = new ej.Query();
                        query.search(true, ['isSelected'], ej.FilterOperators.Equals, true);

                        var records = dataManager.executeLocal(query);
                        var length = records && records.length;

                        if (length > 0) {

                            var count = 0;

                            for (count = 0; count < length; count++) {
                                records[count].isSelected = false;
                            }

                        }

                    }
                    if (!proxy._selectedRowsIndexes.length) {
                        proxy.model.selectedRowIndex = -1;
                        proxy.model.selectedItem = null;//For single selection only
                    }
                }

            }
        },


        //UPDATE EXPAND COLLAPSE RECORDS
        updateExpandCollapseRecords: function (record, expand, index) {

            var proxy = this;

            record.expanded = expand;
            proxy._removedCount = 0;
            proxy._expandCollapseRecordCount = proxy.getChildRecordsCount(record);

            if (expand) {

                proxy._tempRecordIndex = proxy.model.records.indexOf(record);

                if (record.hasChildRecords) {
                    proxy._addNestedExpandCollapseRecords(record.childRecords, record.level, record, index);
                }

            } else {

                proxy.model.flatRecords.splice(index + 1, proxy._expandCollapseRecordCount);

            }
        },

        //COUNT THE CHILDRECORDS COUNT
        getChildRecordsCount: function (record) {

            var proxy = this,
                childRecords = record.childRecords,
                count = 0,
                length = childRecords ? childRecords.length : 0;

            for (count; count < length; count++) {

                if (proxy._filteredRecords.length > 0) {

                    var recordIndex = proxy._filteredRecords.indexOf(childRecords[count]);

                    if (recordIndex != -1) {

                        ++proxy._removedCount;

                        if (childRecords[count].hasChildRecords && childRecords[count].expanded) {
                            proxy.getChildRecordsCount(childRecords[count]);
                        }

                    }
                } else {

                    ++proxy._removedCount;

                    if (childRecords[count].hasChildRecords && childRecords[count].expanded) {
                        proxy.getChildRecordsCount(childRecords[count]);
                    }

                }
            }

            return proxy._removedCount;
        },


        //GET THE EXPAND STATUS OF RECORD
        getExpandStatus: function (record) {

            var parentRecord = record.parentItem;

            if (parentRecord != null) {

                if (parentRecord.expanded === false) {
                    return false;
                } else if (parentRecord.parentItem) {

                    if (parentRecord.parentItem.expanded === false) {
                        return false;
                    } else {
                        return this.getExpandStatus(parentRecord.parentItem);
                    }

                } else return true;
            } else return true;
        },


        //RETURN THE COLUMN FIELD NAMES
        getColumnFieldNames: function () {

            var columnNames = [],
                columns = this.model.columns,
                count = 0,
                length = columns.length;

            for (count; count < length; count++) {

                if (columns[count]["field"]) {
                    columnNames.push(columns[count]["field"]);
                }

            }

            return columnNames;
        },


        //RENDERED  RECORDS
        renderRecords: function (args) {

            var proxy = this;

            if (!args) {

                args = {};
                args.requestType = ej.TreeGrid.Actions.Refresh;

            }

            this.sendDataRenderingRequest(args);
        },       


        //SELECT THE ROW IN TREEGRID
        selectRows: function (rowIndex, toIndex) {

            var proxy = this,
                model = proxy.model;

            var $gridRows = proxy.getRows(),
            selectedItem;

            if (model.editSettings.allowEditing || model.editSettings.allowAdding) {
                if ($("#" + proxy._id + "EditForm").length > 0 && proxy.endEdit()) {
                    $gridRows = proxy.getRows();
                    return;
                }
            }

            if (ej.isNullOrUndefined(toIndex) || ej.isNullOrUndefined(rowIndex)) {

                rowIndex = ej.isNullOrUndefined(rowIndex) ? toIndex : rowIndex;        

                    switch (model.selectionType) {

                        case ej.TreeGrid.SelectionType.Multiple:

                            if (proxy._multiSelectCtrlRequest) {
                                var selectedRowIndex = $.inArray(rowIndex, proxy._selectedRowsIndexes);
                                selectedRowIndex != -1 && proxy.clearSelection(rowIndex) && proxy._selectedRowsIndexes.splice(selectedRowIndex, 0);

                                if (selectedRowIndex == -1) {
                                    proxy._selectedRowsIndexes.push(rowIndex);                                   
                                    proxy.getRowByIndex(rowIndex).attr("aria-selected", "true").find('.e-rowcell').addClass("e-selectionbackground e-active").attr("tabindex", "0");                                    
                                }
                                break;
                            }
                            

                        case ej.TreeGrid.SelectionType.Single:
                                proxy.clearSelection(proxy._previousIndex);
                            if (rowIndex <= proxy._updatedRecords.length - 1) {
                                proxy._selectedRowsIndexes = [];
                                proxy._selectedRowsIndexes.push(rowIndex);
                                proxy.getRowByIndex(rowIndex).attr("aria-selected", "true").find('.e-rowcell').addClass("e-selectionbackground e-active").attr("tabindex", 0);
                                proxy._updatedRecords[rowIndex].isSelected = true;  //Selection issue Changes
                                model.selectedItem = proxy._updatedRecords[rowIndex];
                                }
                            break;
                    }
              
            } else {

                if (model.selectionType == ej.TreeGrid.SelectionType.Multiple)
                {
                proxy.clearSelection();
                proxy._selectedRowsIndexes = [];
                var rows = rowIndex - toIndex < 0 ? $gridRows.slice(rowIndex, toIndex + 1) : $gridRows.slice(toIndex, rowIndex + 1),
                    count = 0,
                    length = rows.length;

                for (count; count < length; count++) {
                    proxy._selectedRowsIndexes.push(rows[count].rowIndex);
                    model.flatRecords[rows[count].rowIndex].isSelected = true;
                }
                    $(rows).attr("aria-selected", "true").find('.e-rowcell').addClass("e-selectionbackground e-active").attr("tabindex", "0");                                       
            }
            }
            proxy._previousIndex = proxy._selectedRowsIndexes.length ? rowIndex : undefined;

            if (model.selectedRowIndex != rowIndex)
            model.selectedRowIndex = rowIndex;

            proxy._multiSelectCtrlRequest = false;
            return false;
        },


        //GET THE CURRENTCELLINDEX
        getCellIndex: function (e, target) {

            var $target = $(e.target);

            if (target) $target = $(target);

            if ($target.prop("tagName") == "TD") {
                return $target.index();
            } else if ($target.prop('tagName') == "DIV" && $target.hasClass('e-cell')) {

                var $td = $target.closest('td');
                return $td.index();

            }

            return -1;
        },


        //GET THE CURRENT ROW INDEX
        getRowIndex: function (e) {

            var proxy = this,
                $target = $(e.target),
                $gridRows = proxy.getRows(),
                index = $gridRows.index($target.parent());

            if (index == -1) {

                var row = $target.closest('tr');
                index = $gridRows.index(row);

            }

            return index;
        },


        //GET THE ROW ELEMENT BY INDEX
        getRowByIndex: function (from, to) {
            try {
                var proxy = this;

                var $gridRows = proxy.getRows(),
                    gridRows=proxy._gridRows,
                    $row = $();

                if (proxy.model.enableVirtualization) {
                    var recordstart = proxy._updatedRecords[from];
                    from = proxy.model.currentViewData.indexOf(recordstart);            
                }

                if (ej.isNullOrUndefined(to)) {
                    if (proxy.model.enableVirtualization) {
                        var recordend = proxy._updatedRecords[to];
                        to = proxy.model.currentViewData.indexOf(recordend);
                    }
                    return $(gridRows[from]);
                } else {                    
                    return $($gridRows.slice(from, to));
                }
            } catch (e) {
                return $();
            }
        },

        //cancel the editMode of the cell
        cancelEditCell: function (e) {

            var proxy = this,
                tr = proxy._gridRows[proxy.model.selectedRowIndex],//proxy._cellEditingDetails.rowIndex
                cellData = {},
                cell;

            cellData[proxy._cellEditingDetails.fieldName] = proxy._cellEditingDetails.cellValue,
            data = proxy.model.selectedItem;

            if ($(tr).hasClass("e-insertedrow")) cell = tr.cells[proxy._cellEditingDetails.columnIndex];
            else cell = tr.cells[proxy._cellEditingDetails.columnIndex];

            $(cell).removeClass("e-editedcell").empty().html(
                $($.render[proxy._id + "_Template"](data))[0].cells[proxy._cellEditingDetails.columnIndex].innerHTML
            );

            proxy.element.focus();
            proxy._trigger("cancelEditCell");
        },

        //RERENDERED THE EDITED RECORD
        refreshRow: function (index) {
            var proxy = this,
                data = proxy.model.currentViewData[index];
            if (data) {
                $(proxy._gridRows[index]).replaceWith($($.render[proxy._id + "_Template"](data)));
            }

            proxy.setGridRows($(proxy.getContentTable().get(0).rows));
        },

        //removeRecord: function (args) {
        //    var proxy = this,
        //    deletedRow = args.data, childIndex;
        //    var childRecordsCount = proxy._getFilteredChildRecordsCount(deletedRow);
        //    childRecordsCount += 1;var count=0;
        //    for (var i = 0; i < childRecordsCount; i++) {
        //        proxy.getRows().eq(args.recordIndex).remove();
        //        proxy.setGridRows($(proxy.getContentTable().get(0).rows));
        //    }
        //},

        //RENDERE THE ADDED NEW RECORD
        renderRecord: function (args) {
            var proxy = this,
                addedGridRow = $.render[this._id + "_Template"](args._cAddedRecord),
                model = proxy.model, spliceIndex, spliceIndexRecords;

            if (proxy._gridRows != null && proxy._gridRows.length > 0) {
                var insertIndex = model.currentViewData.indexOf(model.selectedItem);
                if (args.position) {
                    if (args.position == "Above") {
                        proxy.getRows().eq(insertIndex).before(addedGridRow);
                       // spliceIndex = args.recordIndex;
                    }
                    else if (args.position == "Below") {
                        proxy.getRows().eq(insertIndex).after(addedGridRow);
                        //spliceIndex = args.recordIndex + 1;
                    }
                }
                else {
                    if (insertIndex === -1) {
                        args._cAddedRecord.index = 0;
                        proxy.getRows().eq(0).before(addedGridRow);
                        //spliceIndex = 0;
                    } else {
                        proxy.getRows().eq(insertIndex).after(addedGridRow);
                        //spliceIndex = args.recordIndex + 1;
                    }
                }

                if (model.isFromGantt) {
                    proxy.setGridRows($(proxy.getContentTable().get(0).rows));

                    args._cAddedRecord.hasChildRecords = false;
                    args._cAddedRecord.expanded = false;

                    //update child record in parent item
                    if (args._cAddedRecord.parentItem && model.selectedItem) {

                        if (args._cAddedRecord.parentItem.hasChildRecords && (args.position == "Below" || !args.position)) {

                            var tempIndex = model.flatRecords.indexOf(args._cAddedRecord.parentItem);
                            var childIndex = model.flatRecords[tempIndex].childRecords.indexOf(model.selectedItem);
                            if (childIndex === -1)
                            {
                                model.flatRecords[tempIndex].childRecords.splice(0, 0, args._cAddedRecord);
                                model.flatRecords[tempIndex].item[model.childMapping].splice(0, 0, args._cAddedRecord.item);
                            }
                            else {
                                model.flatRecords[tempIndex].childRecords.splice(childIndex+1, 0, args._cAddedRecord);
                                model.flatRecords[tempIndex].item[model.childMapping].splice(childIndex + 1, 0, args._cAddedRecord.item);
                            } 
                        }
                        else if (args._cAddedRecord.parentItem.hasChildRecords && args.position == "Above") {

                            var tempIndex = model.flatRecords.indexOf(args._cAddedRecord.parentItem);
                            var childIndex = model.flatRecords[tempIndex].childRecords.indexOf(model.selectedItem);

                            if (childIndex === -1) {
                                model.flatRecords[tempIndex].childRecords.push(args._cAddedRecord);
                                model.flatRecords[tempIndex].item[model.childMapping].push(args._cAddedRecord.item);
                            }
                            else {
                                model.flatRecords[tempIndex].childRecords.splice(childIndex, 0, args._cAddedRecord);
                                model.flatRecords[tempIndex].item[model.childMapping].splice(childIndex, 0, args._cAddedRecord.item);
                            }
                        }
                    }
                    else if (!args._cAddedRecord.parentItem && model.selectedItem)
                    {
                        model.parentRecords.splice(args._cAddedRecord.index, 0, args._cAddedRecord);
                        var idx = model.dataSource.indexOf(model.selectedItem.item);
                        if(args.position == "Above")
                        {
                            model.dataSource.splice(idx, 0, args._cAddedRecord.item);
                        }
                        else if (args.position == "Below" || !args.position)
                        {
                            model.dataSource.splice(idx+1, 0, args._cAddedRecord.item);
                        }
                    }
                    else if (!model.selectedItem && args._cAddedRecord)
                    {
                        model.dataSource.splice(0, 0, args._cAddedRecord.item);
                    }

                    //splice index for records and id
                    if (model.selectedItem)
                    {
                        var selectedIndex = model.records.indexOf(model.selectedItem);
                        var flatIndex = model.flatRecords.indexOf(model.selectedItem);
                        if (args.position == "Above") {
                            spliceIndexRecords = selectedIndex;
                            spliceIndex = flatIndex;
                        }
                        else
                        {
                            spliceIndexRecords = selectedIndex + 1;
                            spliceIndex = flatIndex+1;
                        }
                    }
                    else
                    {
                        spliceIndexRecords = 0;
                        spliceIndex = 0;
                    }
                    
                    if (proxy.getExpandStatus(args._cAddedRecord) && model.enableVirtualization){
                        if (spliceIndex === model.flatRecords.length) {
                            model.flatRecords.push(args._cAddedRecord);
                        }
                        else {
                            proxy._recordIndexCount = 0;
                            model.flatRecords.splice(spliceIndex, 0, args._cAddedRecord);
                        }
                    } else if (!model.enableVirtualization) {

                        if (spliceIndex === model.flatRecords.length) {
                            model.flatRecords.push(args._cAddedRecord);
                        }
                        else {
                            proxy._recordIndexCount = 0;
                            model.flatRecords.splice(spliceIndex, 0, args._cAddedRecord);
                        }
                    }
                    if (spliceIndexRecords === model.records.length)
                    {
                        model.records.push(args._cAddedRecord);
                        model.ids.push(args._cAddedRecord.taskId.toString());
                    }
                    else
                    {
                        model.records.splice(spliceIndexRecords, 0, args._cAddedRecord);
                        model.ids.splice(spliceIndexRecords, 0, args._cAddedRecord.taskId.toString());
                    }                    
                    proxy.setRecordsCount(model.flatRecords.length);
                    proxy.setHeight(model.flatRecords.length * model.rowHeight);
                    proxy._updatedRecords = model.flatRecords;
                    proxy._updateCurrentViewData();
                }
            }

            else if (proxy._gridRows == null || proxy._gridRows.length==0) {
                //model.ids = [];
                if (model.selectedRowIndex === -1) {

                    args._cAddedRecord.hasChildRecords = false;
                    args.recordIndex = 0;
                }

                model.flatRecords.push(args._cAddedRecord);
                if (model.dataSource == null) {
                    model.dataSource = [];
                }
                model.dataSource.push(args._cAddedRecord.item);
                model.records.push(args._cAddedRecord);
                model.ids.push(args._cAddedRecord.taskId.toString());
                proxy._updatedGanttRecords = model.flatRecords;

                proxy._updatedRecords = model.flatRecords;
                proxy.setRecordsCount(model.flatRecords.length);
                proxy.setHeight(model.flatRecords.length * model.rowHeight);

                proxy._updateCurrentViewData();

                proxy.getContentTable().find('tbody').empty().append(proxy._getEmptyTbody());
                var temp = document.createElement('div');
                proxy.getContentTable().find("colgroup").first().replaceWith(proxy._getMetaColGroup());
                var $tbody = proxy.getContentTable().children('tbody');
                $tbody.empty();
                temp.innerHTML = ['<table>', $.render[proxy._id + "_Template"](proxy.model.currentViewData),
                    '</table>'].join("");
                proxy.getContentTable().get(0).replaceChild(temp.firstChild.firstChild,
                    proxy.getContentTable().get(0).lastChild);

                proxy._gridRows = proxy.getContentTable().get(0).rows;
                proxy.setGridRows($(proxy.getContentTable().get(0).rows));
                proxy._eventBindings();

            }

        },

        ////Adding new item to datasource
        //_appendToDatasource: function (index, item, datasource) {
        //    //proxy = this,
        //    //model = proxy.model;

        //    //for (var i = 0; i < datasource.length; i++) {
        //    //    if (proxy._recordIndexCount == index) {
        //    //        datasource.splice(i, 0, item);
        //    //        proxy._recordIndexCount = 0;
        //    //        break;
        //    //    }
        //    //    else if (datasource[i][model.childMapping] &&
        //    //        datasource[i][model.childMapping].length > 0) {
        //    //        proxy._recordIndexCount++;
        //    //        proxy._appendToDatasource(index, item, datasource[i][model.childMapping])
        //    //    }
        //    //    proxy._recordIndexCount++;
        //    //}

        //  //  if()


        //},
        
        onScrollHelper: function (scrolltop) {
            var proxy = this;            
            proxy._$gridContent.ejScroller("scrollY", scrolltop, true);
            var isHorizontalScroll = proxy._$gridContent.ejScroller("isHScroll");
            if (!isHorizontalScroll)
                proxy._$gridContent.scrollTop(scrolltop);
        },

        isVScroll: function () {
            if (this._$gridContent.hasClass("e-scroller")) {
                return this._$gridContent.ejScroller("isVScroll");
            }
            else
            {
                return false;
            }
        },

        //REFRESH THE SCROLLER FOR TREEGRIDCONTENT
        refreshScroller:function(panSize){
            
            var proxy = this;                       
            proxy._$gridContent.removeClass("e-borderbox");
            //proxy._$gridContent.css({ 'width': panSize + "px" });
            var scrollTop = proxy._$gridContent.ejScroller("option", "scrollTop");
            proxy._$gridContent.ejScroller("option", { "persist": true });
            proxy._$gridContent.ejScroller("option", { "width": panSize });
            
            proxy._$gridContent.css("height", proxy._viewPortHeight);
            proxy._$gridContent.ejScroller("refresh");
            var isHorizontalScroll = proxy._$gridContent.ejScroller("isHScroll");

            if (proxy.model.isFromGantt)
                if (!isHorizontalScroll) {
                    proxy._$gridContent.addClass("e-borderbox");
                }
                else {
                    proxy._$gridContent.removeClass("e-borderbox");
                }
            proxy._$gridContent.ejScroller("option", { "scrollTop": scrollTop });

            if(!isHorizontalScroll)
            proxy._$gridContent.scrollTop(scrollTop);
            //else {
            //    proxy._$gridContent.scrollTop(0)
            //}
        },

        refreshHeight:function(){

            var proxy = this;
            proxy._$gridContent.ejScroller("refresh");            

        },

        //#endregion

        //#region PRIVATE METHODS

        //CALCULATE THE VIEWPORTHEIGHT
        _getViewPortHeight: function () {

            var proxy = this,
                height = 0;

            height = proxy.element.height() -
                proxy._$gridHeaderContent.height() -
                parseFloat(proxy._$gridHeaderContent.css("border-top-width")) -
                parseFloat(proxy._$gridHeaderContent.css("border-bottom-width"));

            return height;
        },

        _updateScrollCss: function () {
            var proxy = this;
            if (!proxy.model.isFromGantt) {
                var isVscroll = proxy.isVScroll();
                if (isVscroll) {
                    proxy._$gridHeaderContent.addClass("e-scrollcss");
                } else {
                    proxy._$gridHeaderContent.removeClass("e-scrollcss");
                }
            }
        },



        //UPDATE CURRENT VIEWPORT DATA FROM FLATRECORDS/UPDATED RECORDS
        _updateCurrentViewData: function () {

            var proxy = this,
                model = proxy.model,
                args = {},
                tMargin,
                isRangeModified = false;

            //CHECK VIRTUALIZATION IS ENABLED OR NOT 
            if (model.enableVirtualization) {

                proxy.getVisibleRange();
                model.currentViewData = proxy._updatedRecords.slice(proxy._visibleRange.top,
                    proxy._visibleRange.bottom);



                if (proxy._vScrollDist !== 0) {

                    tMargin = proxy._scrollTop - proxy._offset;

                    //console.log("Margin :" + tMargin);

                    if ((proxy._prevRTop - proxy._visibleRange.top !== 0) ||
                        (proxy._prevRBottom - proxy._visibleRange.bottom !== 0)) {

                        args.requestType = ej.TreeGrid.Actions.Refresh;
                        proxy.sendDataRenderingRequest(args);
                        isRangeModified = true;

                    }

                        proxy._$tableContent.css({
                            "top": tMargin
                        });

                    proxy._prevRTop = proxy._visibleRange.top;
                    proxy._prevRBottom = proxy._visibleRange.bottom;

                }

            } else {

                model.currentViewData = proxy._updatedRecords;

            }

            if (proxy._isEnterKeyPressed) {

                proxy._isEnterKeyPressed = false;
                if (model.allowSelection && model.editSettings.allowEditing) {

                    if (!isRangeModified) proxy._cellEditingDetails.rowIndex += 1;

                    if (!proxy._rowSelectingEventTrigger()) {

                        proxy.selectRows(proxy._cellEditingDetails.rowIndex);
                        proxy._rowSelectedEventTrigger(proxy._cellEditingDetails.rowIndex);

                    }

                    proxy.cellEdit(proxy._cellEditingDetails.rowIndex, proxy.model.columns[proxy._cellEditingDetails.columnIndex].field);

                }
            }
        },


        //GET THE TABLE ROW POSITION
        _getRowPosition: function (y) {
            return Math.ceil((y) / this.model.rowHeight);
        },


        //GET THE COLUMNGROUP FOR HEADER TABLE
        _getMetaColGroup: function () {

            var $colgroup = this.getHeaderTable().find('colgroup').clone();
            return $colgroup;

        },


        //CREATE EMPTY ROW WHILE DATASOURCE OBJECT AS NULL
        _getEmptyTbody: function () {

            var proxy = this,
                $emptyTd = ej.buildTag('td', proxy.model.emptyRecordText, {}, { colSpan: proxy.model.columns.length });
            return $(document.createElement("tr")).append($emptyTd);

        },


        //ADD SORTICON TO THE COLUMN HEADER
        _addSortElementToColumn: function (field, direction) {

            var proxy = this,
                column = ej.TreeGrid.getColumnByField(proxy.model.columns, field),
                index = $.inArray(column, proxy.model.columns),
                $headerCellDiv = proxy.getHeaderTable().find("thead").
                find(".e-headercell").eq(index).find(".e-headercelldiv");
            $headerCellDiv.find(".e-ascending,.e-descending").remove();
            $headerCellDiv.append(proxy._createSortElement().addClass("e-" + direction).addClass("e-icon"));
            $headerCellDiv.parent().attr("aria-sort", direction);
        },


        //CREATE SORT ELEMENT        
        _createSortElement: function () {
            return ej.buildTag('span', "&nbsp;");
        },


        //RENDERED EDITED CELL
        _renderCellEditObject: function (cellEditArgs, $td) {

            var proxy = this,
                $form = ej.buildTag("form.#" + proxy._id + "EditForm", "", {}, {}),
                $cellEditTemplate = proxy._cellEditTemplate,
                $element,
                htmlString,
                cellData = {};

            cellData[cellEditArgs.columnObject.field] = cellEditArgs.value,
            columnIndex = proxy.getColumnIndexByField(cellEditArgs.columnObject.field);

            if (columnIndex===proxy.model.treeColumnIndex) {
                $td.find('.e-cell').empty();
            } else $td.empty();

            htmlString = $cellEditTemplate.find("#" + cellEditArgs.columnObject.field + "_CellEdit").html();
            if (cellEditArgs.columnObject.field === "predecessor")
                $element = $($.templates(htmlString).render(cellEditArgs.data));
            else
                 $element = $($.templates(htmlString).render(cellData));

            if ($element.get(0).tagName == "SELECT") {

                $element.val(cellData[cellEditArgs.columnObject.field]);
                $element.val() == null && $element.val($element.find("option").first().val());

            }

            $form.append($element);

           if (columnIndex===proxy.model.treeColumnIndex) {
                $td.find('.e-cell').append($form);
            } else $td.append($form);

            proxy._setoffsetWidth();
            proxy._refreshEditForm();

            if ($.isFunction($.validator) && !$.isEmptyObject(cellEditArgs.validationRules)) {

                proxy._initValidator();
                proxy.setValidationToField(cellEditArgs.columnObject.field, cellEditArgs.validationRules);

            }
            proxy.model.isEdit = true;

        },


        //SET WIDTH FOR EDITING ELEMENTS
        _setoffsetWidth: function () {

            var proxy = this,
                tds, $form = $("#" + proxy._id + "EditForm"),
                i = 0,
                length, child;

            if (proxy.model.editSettings.editMode == "cellEditing") {
                tds = $form.closest("td");
            } else {
                tds = $form.find("tr").find(".e-rowcell");
            }

            length = tds.length;

            for (i; i < length; i++) {

                child = $(tds.children()[0]).children();

                if (child.length > 1) {
                    proxy._tdsOffsetWidth[i] = tds.get(i).offsetWidth - child[0].offsetWidth - child[1].offsetWidth;
                } else {
                    proxy._tdsOffsetWidth[i] = tds.get(i).offsetWidth;
                }
            }

        },


        //get Index of resourceInfo
        getIndexofresourceInfo: function (dataSource) {

            var proxy = this,
                data = proxy._cellEditingDetails.data,
                resourceInfo = data.resourceInfo,
                count = 0,
                length = resourceInfo && resourceInfo.length,
                resourceIndex = [];

            for (count; count < length; count++)
                resourceIndex.push(dataSource.indexOf(resourceInfo[count]));

            return resourceIndex;

        },

        //REFRESH THE EDITED FORM
        _refreshEditForm: function () {

            var proxy = this,
                form = document.getElementById(proxy._id + "EditForm"),
                elementFocused = false,
                $formElement = $(form).find("input,select"),
                percent = 86,
                i = 0,
                length = $formElement.length,
                $element, inputWidth,
                model = proxy.model,
                width,
                params = {},
                value,
                column,
                customParams,
                toformat,
                formatVal;

            for (i; i < length; i++) {

                $element = $formElement.eq(i);

                if (model.editSettings.editMode == "cellEditing") percent = 95;

                inputWidth = proxy._tdsOffsetWidth[i] * (percent / 100);

                if ($element.hasClass("e-numerictextbox")) {

                    width = inputWidth;
                    value = $element.val();
                    params.width = width;
                    params.height = "21px";
                    params.showSpinButton = true;
                    params.cssClass = model.cssClass;

                    if (value.length) params.value = parseFloat(value);

                    customParams = ej.TreeGrid.getColumnByField(model.columns, $element.prop("name"));

                    if (!ej.isNullOrUndefined(customParams["editParams"])) $.extend(params, customParams["editParams"]);

                    $element.ejNumericTextbox(params);
                    $element.prop("name", $element.prop("name").replace(proxy._id, ""));

                } else if ($element.hasClass("e-datepicker")) {

                    //inputWidth = proxy._tdsOffsetWidth[i] * (90 / 100);
                    width = inputWidth;
                    params.width = width;
                    params.height = "21px";
                    params.cssClass = model.cssClass;
                    params.displayDefaultDate = true;
                    params.dateFormat = model.dateFormat;

                    if ($element.val().length) params.value = new Date($element.val());

                    column = ej.TreeGrid.getColumnByField(model.columns, $element.prop("name"));

                    if (column["format"] !== undefined && column.format.length > 0) {

                        toformat = new RegExp("\\{0(:([^\\}]+))?\\}", "gm");
                        formatVal = toformat.exec(column.format);
                        params.dateFormat = formatVal[2];
                    }

                    if (!ej.isNullOrUndefined(column["editParams"])) $.extend(params, column["editParams"]);

                    $element.ejDatePicker(params);
                } else if ($element.hasClass("e-datetimepicker")) {

                    width = inputWidth;
                    params = {
                        width: width,
                        height: "21px",
                        cssClass: model.css,
                        showButton: false
                    };

                    if ($element.val().length) params.value = new Date($element.val());

                    column = ej.TreeGrid.getColumnByField(model.columns, $element.prop("name"));

                    if (column["format"] !== undefined && column.format.length > 0) {

                        toformat = new RegExp("\\{0(:([^\\}]+))?\\}", "gm");
                        formatVal = toformat.exec(column.format);
                        params.dateTimeFormat = formatVal[2];

                    }

                    if (!ej.isNullOrUndefined(column["editParams"])) $.extend(params, column["editParams"]);

                    $element.ejDateTimePicker(params);

                } else if ($element.hasClass("e-dropdownlist")) {
                    var dataSource = model.columns[proxy._cellEditingDetails.columnIndex].dropdownData;

                    if(model.isFromGantt){
                        $element.ejDropDownList({
                            width: inputWidth + "px",
                            height: 21,
                            showCheckbox: true,
                            dataSource: dataSource,
                            popupWidth:"auto",
                            fields: {
                                id: model.resourceIdMapping,
                                text: model.resourceNameMapping,
                                value: model.resourceNameMapping
                            },
                            selectedItems: proxy.getIndexofresourceInfo(dataSource)
                        });
                        
                    } else {
                        $element.css({ 'position': 'absolute', 'margin-top': '-13px' });
                        $element.ejDropDownList({
                            width: inputWidth + "px",
                            height: "21px",                            
                            dataSource: dataSource,
                        });                        
                    }
                    $element.ejDropDownList("setSelectedValue", $element.val());

                } else {

                    switch ($element.prop('tagName')) {
                        case "INPUT":

                            if ($element.attr("type") != "checkbox") {

                                $element.css("text-align", $element.attr("name") != null &&
                                    ej.TreeGrid.getColumnByField(model.columns, $element.attr("name")) != null ?
                                    ej.TreeGrid.getColumnByField(model.columns, $element.attr("name")).textAlign :
                                    "center");

                                $element.outerWidth(inputWidth).height(19);

                            } else $element.width(inputWidth > 0 ? ($element.width() > inputWidth ? inputWidth : $element.width()) : 1);

                            break;

                        case "SELECT":
                            $element.width(inputWidth).height(20);
                            break;
                    }
                }

                if (!$element.is(":disabled") && !elementFocused &&
                    (!$element.is(":hidden") || typeof $element.data("ejDropDownList") == "object")) {

                    if (!proxy._isEnterKeyPressed) {

                        proxy._focusElements($element.closest('td'));
                        elementFocused = true;

                    }
                }
            }
        },


        //INITIALIZE THE VALIDATOR
        _initValidator: function() {

            var proxy = this;

            $("#" + proxy._id + "EditForm").validate({
                onclick: false,
                onfocusout: false,
                errorClass: 'e-field-validation-error',
                errorElement: 'div',
                wrapper: "div",

                errorPlacement: function(error, element) {
                    var $td = element.closest("td"),
                        $container = $(error).addClass("e-error"),
                        $tail = ej.buildTag("div.e-errortail e-toparrow");

                    $td.find(".e-error").remove();
                    element.hasClass("e-numerictextbox") ? $container.insertAfter(element.closest(".e-numeric")) :
                                                          $container.insertAfter(element);
                    $container.prepend($tail);
                    proxy.model.editSettings.editMode != "normal" && $container.offset({
                        left: element.offset().left
                    });

                    $container.fadeIn("slow");
                }
            });
        },


        //SET FOCUS TO EDITED ELEMENT
        _focusElements: function ($currentCell) {
            var proxy = this;

            if ($currentCell.length) {

                $currentCell.focus();
                var $childElem = $currentCell.children();

                if ($childElem[0]) {

                    if ($childElem[0].tagName.toLowerCase() == "select" || 
                        $childElem[0].tagName.toLowerCase() == "input") {

                        $childElem.focus().select();
                        $childElem[0].focus();

                    } else if ($childElem.find(".e-field.e-dropdownlist").length) {

                        $childElem.find(".e-ddl").focus();

                    } else {

                        $childElem.find('input,select').select().focus();

                    }
                }
            }
			   proxy._$gridHeaderContainer.scrollLeft(proxy._$gridContent.children('.e-content').scrollLeft());
        },


        //UPDATE THE GRID CONTAINER HEIGHT
        updateHeight: function (height) {

            var proxy = this;

            if (proxy._$gridContainer && proxy._$gridContent) {
                if (height) {
                    proxy._$gridContainer.css({
                        "height": height + "px",
                        "width": "auto"
                    });
                    proxy._$gridContent.ejScroller("refresh");
                } else {
                    proxy._$gridContainer.css({
                        "height": proxy._totalHeight + "px"
                    });
                }                
                if (proxy._$gridContent.hasClass("e-scroller")) {
                    proxy._$gridContent.ejScroller("refresh");
                    proxy._updateScrollCss();
                }
            }
        },


        //ADD EXPANDED CHILDRECORDS TO FLAT RECORDS
        _addNestedExpandCollapseRecords: function (data, level, parentItem, index) {

            var proxy = this,
                model = proxy.model,
                records = model.flatRecords,
                rows = model.records,
                count = 0,
                length = data.length,
                parentRecord;


            for (count; count < length; count++) {
                
                index++;
                proxy._tempRecordIndex++;
                parentRecord = rows[proxy._tempRecordIndex];

                if ($.inArray(parentRecord, records) === -1) {
                    records.splice(index, 0, parentRecord);
                }

                if (parentRecord && parentRecord.isExpanded === false) {
                    parentRecord.isExpanded = true;
                }

                if (parentRecord.hasChildRecords) {

                    if (parentRecord.expanded) {

                        var len = parentRecord.childRecords.length,
                            k = 0,
                            childRecord;

                        for (k; k < len; k++) {

                            index++;
                            proxy._tempRecordIndex++;
                            childRecord = rows[proxy._tempRecordIndex];
                            records.splice(index, 0, childRecord);

                            if (childRecord.hasChildRecords) {

                                if (childRecord.expanded) {
                                    index = proxy._addNestedExpandCollapseRecords(childRecord.childRecords, level + 1, childRecord, index);
                                } else proxy._tempRecordIndex += proxy.getChildCount(childRecord, 0);//childRecord.childRecords.length;

                            }
                        }
                    } else {

                        proxy._tempRecordIndex += proxy.getChildCount(parentRecord,0);  //parentRecord.childRecords.length;// here inner task are not counted
                    }
                }
            }
            return index;
        },

        getChildCount:function(record,count)
        {
            var currentRecord, proxy = this;
            if (!record.hasChildRecords)
                return 0;
            for (var i = 0; i < record.childRecords.length;i++)
            {
                currentRecord= record.childRecords[i];
                count++;
                if(currentRecord.hasChildRecords)
                {
                    count=proxy.getChildCount(currentRecord, count);
                }
            }
            return count;
        },
        //UPDATE THE FILTERED RECORDS FOR ADDING PARENTRECORDS
        _updateFilteredRecords: function (data) {

            var proxy = this,
                count = 0,
                length = data.length,
                record;

            proxy._filteredRecords = [];
            proxy._filteredGanttRecords = [];

            for (count; count < length; count++) {

                record = data[count];

                if (record.parentItem != null) {

                    proxy._addParentRecord(record.parentItem);

                    if ($.inArray(record, proxy._filteredRecords) === -1) {
                        if (proxy.getExpandStatus(record)) proxy._filteredRecords.push(record);
                    }

                } else {

                    if ($.inArray(record, proxy._filteredRecords) === -1) {
                        if (proxy.getExpandStatus(record)) proxy._filteredRecords.push(record);
                    }
                }
            }
        },

                
        //ADD PARENTRECORD FOR FILTERED OTH LEVEL ITEMS
        _addParentRecord: function (record) {

            var proxy = this;

            if (record.parentItem) {
                proxy._addParentRecord(record.parentItem);

                if ($.inArray(record, proxy._filteredRecords) === -1) {

                    if (proxy.getExpandStatus(record)) {
                        proxy._filteredRecords.push(record);
                    }

                }
            } else {

                if ($.inArray(record, proxy._filteredRecords) === -1) {

                    if (proxy.getExpandStatus(record)) proxy._filteredRecords.push(record);

                }
            }
        },


        //UPDATEEXPANDCOLLAPSE FOR SORTED RECORDS
        _updateExpandCollapseForSortedRecords: function (Record, expanded) {

            var proxy = this,
                count = 0,
                length = proxy._sortedRecords.length,
                record,
                index = proxy._sortedRecords.indexOf(Record);

            if (expanded) {

                proxy._addNestedSortRecords(Record, index);

            } else {

                var removedCount = 0;

                for (count = index + 1; count < length; count++) {

                    record = proxy._sortedRecords[count];

                    if (record.level === Record.level) {
                        break;
                    } else if (!proxy.getExpandStatus(record)) {
                        removedCount++;
                    }

                }

                proxy._sortedRecords.splice(index + 1, removedCount);

            }
        },


        //ADD NESTEDSORTRECORDS
        _addNestedSortRecords: function (record, index) {

            var proxy = this,
                childRecords,
                sortColumns = proxy.model.sortSettings.sortedColumns,
                length;

            if (sortColumns.length) {

                length = sortColumns.length - 1;
                proxy._queryManagar.queries = [];

                for (var i = length; i >= 0; i--) {

                    proxy._queryManagar.sortBy(sortColumns[i].field, sortColumns[i].direction);

                }

            }
            if (record.hasChildRecords) {

                var dataManager = ej.DataManager(record.childRecords),
                    count,
                    childrecord;

                childRecords = dataManager.executeLocal(proxy._queryManagar).result;
                length = childRecords.length;

                for (count = 0; count < length; count++) {

                    childrecord = childRecords[count];

                    if (proxy._filteredRecords.length) {

                        if ($.inArray(childrecord, proxy._filteredRecords) !== -1) {
                            proxy._sortedRecords.splice(++index, 0, childrecord);
                        }

                    } else {
                        proxy._sortedRecords.splice(++index, 0, childrecord);
                    }

                    if (childrecord.hasChildRecords && childrecord.expanded) {
                        proxy._addNestedSortRecords(childrecord, index);
                    }
                }
            }
        },


        //UPDATE ALTROW
        _updateAltRow: function () {

            var proxy = this,
                count = 0,
                currentViewData = proxy._updatedRecords,
                length = currentViewData.length,
                record;

            for (count = 0; count < length; count++) {
                record = currentViewData[count];
                record.isAltRow = count % 2 == 0 ? true : false;
            }

        },


        
        //COUNT THE NUMBER OF CHILD RECORDS PRESENT IN THE GANTTRECORD
        _getFilteredChildRecordsCount: function (Record) {

            var proxy = this,
                model=proxy.model,
                length = Record&&Record.childRecords && Record.childRecords.length,
                i = 0,
                record;

            for (i = 0; i < length; i++) {

                record = Record.childRecords[i];
                if (model.enableVirtualization)
                {
                    if(proxy.getExpandStatus(record))
                    {
                        proxy._removedCount++;
                    }
                }
                else
                {
                    proxy._removedCount++;
                }
                   
                if (record.childRecords) {
                    proxy._getFilteredChildRecordsCount(record);
                }
            }

            return proxy._removedCount;
        },


        //SORTING THE RECORDS
        _sortingRecords: function () {

            var proxy = this,
                model = proxy.model,
                sortcolumns = model.sortSettings.sortedColumns;

            proxy._queryManagar.queries = [];

            if (sortcolumns.length) {

                var length = sortcolumns.length - 1;

                for (var i = length; i >= 0; i--) {
                    proxy._queryManagar.sortBy(sortcolumns[i].field, sortcolumns[i].direction);
                }

            }

            var dataManager = new ej.DataManager(model.parentRecords),
                records = dataManager.executeLocal(proxy._queryManagar).result;

            proxy._sortedRecords = [];
            proxy._storedIndex = -1;

            proxy._createSortedRecords(records);
            proxy._tempsortedrecords = proxy._sortedRecords;
            proxy._updateSortedRecords(proxy._tempsortedrecords);
            proxy.setRecordsCount(proxy._sortedRecords.length);
            proxy._updatedRecords = proxy._sortedRecords;

            return true;
        },


        //CREATE SORTED GANTT RECORDS
        _createSortedRecords: function (data) {

            var proxy = this,
                sortedRecords = proxy._sortedRecords,
                dataManager,
                enableAltRow = proxy.model.enableAltRow;

            $.each(data, function (index, record) {

                if (proxy._searchString.length > 0) {

                    if (proxy._filteredRecords.length > 0 && proxy._filteredRecords.indexOf(record) !== -1) {

                        proxy._storedIndex++;

                        if (enableAltRow) {

                            record.isAltRow = proxy._storedIndex % 2 == 0 ? false : true;

                        }

                        sortedRecords[proxy._storedIndex] = record;

                    }
                } else {

                    proxy._storedIndex++;

                    if (enableAltRow) {

                        record.isAltRow = proxy._storedIndex % 2 == 0 ? false : true;

                    }

                    sortedRecords[proxy._storedIndex] = record;

                }

                if (record.hasChildRecords && record.expanded) {

                    dataManager = ej.DataManager(record.childRecords);
                    var childRecords = dataManager.executeLocal(proxy._queryManagar).result;
                    proxy._createSortedRecords(childRecords);

                }
            });
        },

                
        //UPDAT THE SORTED RECORDS
        _updateSortedRecords: function (data) {

            var proxy = this,
                count = 0,
                length = data.length,
                record,model=this.model;

            for (count; count < length; count++) {

                record = data[count];

                if (proxy.getExpandStatus(record)||!model.enableVirualization) {

                    if (proxy._filteredRecords.length > 0) {

                        if ($.inArray(record, proxy._filteredRecords) !== -1 && $.inArray(record, proxy._sortedRecords) === -1) {
                            proxy._sortedRecords.push(record);
                        }

                    } else {

                        if ($.inArray(record, proxy._sortedRecords) === -1) {
                            proxy._sortedRecords.push(record);
                        }

                    }

                    if (record.hasChildRecords && record.childRecords.length > 0 && record.expanded) {

                        var dataManager = ej.DataManager(record.childRecords),
                            sortedChildRecords = dataManager.executeLocal(proxy._queryManagar).result;
                        proxy._updateSortedRecords(sortedChildRecords);

                    }
                }
            }
        },


        //REMOVE SORT ICON FORM COLUMN HEADER
        _removeSortElementFromColumn: function (field) {

            var proxy = this,
                column = ej.TreeGrid.getColumnByField(proxy.model.columns, field),
                index = $.inArray(column, proxy.model.columns),
                $headerCellDiv = proxy.getHeaderTable().find("thead").find(".e-headercell").eq(index).find(".e-headercelldiv");

            $headerCellDiv.find(".ascending,.descending").remove();
            $headerCellDiv.parent().removeAttr("aria-sort");
        },


        //ADD EMPTYCOLUMN TO THE TREEGRID
        _addEmptyColumntoGrid: function () {

            $('.e-gridheadercontainer table colgroup').append(ej.buildTag('col', "", {
                "width": "auto"
            },
            {}));

            $('.e-gridheadercontainer table thead tr').append(ej.buildTag('th.e-headercell'));
        },


        //UPDATE THE SCROLLTOP OF THE GRIDCONTAINER
        _updateScrollTop: function (y) {

            var args = {},
                proxy = this;

            args.requestType = "scroll";
            args.delta = y;

            var isHorizontalScroll = proxy._$gridContent.ejScroller("isHScroll");

            if (!isHorizontalScroll) {
                proxy._$gridContent.scrollTop(y);//grid container
            }
            else
            {
                proxy._$gridContent.scrollTop(0)
            }
            proxy._$gridContent.ejScroller("scrollY", y, true);
            proxy._completeAction(args);
            
        },


        //MOVE CURRENT CELL FOR KEYBOARD INTERACTION
        _moveCurrentCell: function (direction) {

            var proxy = this,
                rowIndex = proxy._cellEditingDetails.rowIndex,
                columnIndex = proxy._cellEditingDetails.columnIndex,
                model = proxy.model;

            if (rowIndex == -1 && columnIndex == -1) return true;

            if (proxy.model.isEdit) {

                proxy.saveCell();
                proxy.model.isEdit = false;

            }

            switch (direction) {
                

                case "right":

                    if (!proxy._rowSelectingEventTrigger()) {

                        if (!proxy.selectRows(proxy._cellEditingDetails.rowIndex)) {

                            if (rowIndex == proxy._gridRows.length - 1 && columnIndex == model.columns.length - 1) {
                                return true;
                            }

                            if (columnIndex == model.columns.length - 1) {

                                proxy._cellEditingDetails.columnIndex = 0;
                                proxy._cellEditingDetails.rowIndex = rowIndex + 1;

                            } else proxy._cellEditingDetails.columnIndex = columnIndex + 1;

                            
                            proxy.cellEdit(proxy._cellEditingDetails.rowIndex,
                                model.columns[proxy._cellEditingDetails.columnIndex].field);
                        }
                    }

                    break;

                case "left":

                    if ((rowIndex == 0 && columnIndex == 0)) return true;

                    if (columnIndex == 0) {

                        proxy._cellEditingDetails.columnIndex = model.columns.length - 1;
                        proxy._cellEditingDetails.rowIndex = rowIndex - 1;

                    } else {
                        proxy._cellEditingDetails.columnIndex = columnIndex - 1;
                    }

                    proxy.selectRows(proxy._cellEditingDetails.rowIndex);
                    proxy.cellEdit(proxy._cellEditingDetails.rowIndex, model.columns[proxy._cellEditingDetails.columnIndex].field);

                    break;

                case "up":

                    if (rowIndex == 0) return true;

                    proxy._cellEditingDetails.rowIndex = rowIndex - 1;
                    proxy.selectRows(proxy._cellEditingDetails.rowIndex);
                    proxy._rowSelectedEventTrigger(proxy._cellEditingDetails.rowIndex);
                    proxy.cellEdit(proxy._cellEditingDetails.rowIndex, model.columns[proxy._cellEditingDetails.columnIndex].field);

                    break;

                case "down":

                    if (rowIndex + 1 == proxy.getRows().length - 1) {

                        if (proxy.model.enableVirtualization) {

                            proxy._isEnterKeyPressed = true;
                            proxy._updateScrollTop(proxy._$gridContent.scrollTop() + model.rowHeight - proxy._offset);
                        }
                    }

                    if (!proxy._isEnterKeyPressed) {

                        if (proxy._updatedRecords.length > (rowIndex + 1))
                        if (!proxy.selectRows(rowIndex + 1)) {

                            proxy._rowSelectedEventTrigger(proxy._cellEditingDetails.rowIndex+1);
                            proxy._cellEditingDetails.rowIndex = rowIndex + 1;
                            proxy.cellEdit(proxy._cellEditingDetails.rowIndex, model.columns[proxy._cellEditingDetails.columnIndex].field);
                            args = {};
                            args.requestType = "scroll";
                            args.delta = proxy._$gridContent.children('.e-content').scrollTop();
                            proxy._trigger("actionComplete", args);
                            //$(".e-ganttviewerbodyContianer").children('.e-content').scrollTop((proxy._$gridContent.children('.e-content').scrollTop()));
                        }

                    }

                    break;
            }

            return false;

        },


        //FIND THE COLUMNWIDTH OF THE TREEGRID COLUMN
        _findColumnsWidth: function () {

            var proxy = this,
                length = proxy.model.columns.length,
                j = proxy.getHeaderTable().find("colgroup").find("col");
            
            for (var i = 0; i < length; i++)
                proxy._columnsWidthCollection[i] = j.eq(i).width();

        },

        //CALCULATE THE TOTAL WIDTH OF THE COLUMNS
        _calculateWidth: function () {

            var j = this.getHeaderTable().find("colgroup").find("col"),
                width = 0;

            for (var i = 0; i < j.length; i++)
                width += j.eq(i).width();

            return width;
        },


        //TEMPLATE FOR DROP DOWNLIST
        _compiledDropDownTemplate: function () {

            var $select = ej.buildTag('select'),
                $option = ej.buildTag("option", "{{:text}}", {},
                {
                    value: "{{:value}}"
                });

            $select.append($option);

            return $.templates($select.html());
        },


        _renderScroller: function () {

            var proxy = this,
            model = proxy.model;
            if (model.dataSource === null)
                return;
            var containerHeight = model.flatRecords.length * model.rowHeight;//flatrecords*rowheight//
            var contentHeight = proxy._viewPortHeight < 0 ? containerHeight : proxy._viewPortHeight-18;//viewportheight ||
            proxy._$gridContent.css({ "height": contentHeight + "px" });
            proxy._$gridContainer.css({ "height": containerHeight + "px" });

            if (!proxy._$gridContent.hasClass("e-scroller")) {
                $div = ej.buildTag('div', {}, { "width": "auto", "height": "auto" });
                $div.append(proxy._$gridContainer);
                proxy._$gridContent.append($div);
                var height = proxy._gridHeight ? contentHeight : "auto";
                var width = proxy.element.width()-2;//-2 is set for minus border width.

                proxy._$gridContent.ejScroller({
                    height:proxy.model.isFromGantt ? 0 :height,
                    width: width, 
                    scroll: $.proxy(proxy._onScroll, proxy)
                });
                proxy._$gridContent.ejScroller("refresh");

            }
            else {
                proxy._$gridContent.ejScroller("refresh");
          }

            proxy._updateScrollCss();
            var isHorizontalScroll = proxy._$gridContent.ejScroller("isHScroll");
            if (proxy.model.isFromGantt)
                if (!isHorizontalScroll) {
                    proxy._$gridContent.addClass("borderbox");
                }
                else {
                    proxy._$gridContent.removeClass("borderbox");
                }

        },
        

        
        //ALL EVENTS BOUND USING THIS._ON WILL BE UNBIND AUTOMATICALLY
        _destroy: function () {

            var proxy = this;
            proxy.element.empty().removeClass("e-treegrid-core e-treegrid " + proxy.model.cssClass);
            
        },

        //#endregion       

    });

    //ENUM FOR EACH ACTION IN TREEGRID
    ej.TreeGrid.Actions = {
        Sorting: "sorting",
        BeginEdit: "beginedit",
        Save: "save",
        Add: "add",
        Delete: "delete",
        Cancel: "cancel",
        Refresh: "refresh",
        Searching: "searching",
        ExpandCollapse: "expandcollapse",
        Selection: "selection",
        rowHover: "rowHover",
        Scroll: "scroll",
        ContextMenuAdd: "contextMenuAdd"
    };

    //ENUM FOR SELECTION MODE IN TREEGRID
    ej.TreeGrid.SelectionType = {
        Single: "single",
        Multiple: "multiple"
    };

    //ENUM FOR DIFFERENT EDIT MODE IN TREEGRID
    ej.TreeGrid.EditMode = {
        Normal: "normal",
        CellEditing: "cellEditing"
    };

    /* enum for five different columnEditType for treegrid */
    ej.TreeGrid.EditingType = {
        String: "stringedit",
        Boolean: "booleanedit",
        Numeric: "numericedit",
        Dropdown: "dropdownedit",
        DatePicker: "datepicker"        
    };

    
    ej.TreeGrid = ej.TreeGrid || {};


    //INITIALIZE THE CELLEDIT ELEMENT FOR DIFFERENT TYPES OF EDITORS
    ej.TreeGrid._initCellEditType = function (instance, $element, id, columnCount) {

        var proxy=instance,
            model=proxy.model,
            columns=model.columns,
            column=columns[columnCount];

        if (ej.isNullOrUndefined(columns[columnCount]["editType"])) {
            column["editType"] = "stringedit";
        }

        switch (column["editType"]) {
            
            case "stringedit":

                if(model.isFromGantt){
                    
                    var helpers={};
                    
                    helpers["_" + id + "cellValue"] = ej.TreeGrid._getCellValue;
                    
                    if(column.field==="predecessor"){
                        helpers["_" + id + "predecessorCell"] = ej.Gantt._getPredecessorsValue;
                    }
                    
                    $.views.helpers(helpers);


                    if(column.field==="predecessor"){ //get the predecessor value from item of GanttRecord
                     
                        var $input=ej.buildTag('input.e-field e-ejinputtext',
                                       "",{},
                                       {
                                           value:"{{:~_" + id + "predecessorCell('"+model.predecessorMapping+"')}}",
                                           id: id + column.field, 
                                           name: column.field
                                       }
                                       );
                    }else { /*get the cellValue if the column does not exist in the GanttRecord object and
                           present in the item of GanttRecord*/
                        $input= ej.buildTag('input.e-field e-ejinputtext', 
                                            "",
                                            {},
                                            {
                                                value: "{{:~_" + proxy._id + "cellValue('" + columns[columnCount].field + "')}}",
                                                id: proxy._id + model.columns[columnCount].field,
                                                name: model.columns[columnCount].field
                                            });
                       
                    }

                }else { /*Get the cellvalue of the normal gridcell*/
                    $input=ej.buildTag('input.e-field e-ejinputtext',
                                          "",
                                          {}, 
                                          {
                                              value: "{{:#data['" + column.field + "']}}", 
                                              id: id + column.field, 
                                              name: column.field
                                          });
                }    
                $element.html($input);
            
                break;

            case "booleanedit":
                
                $element.html('{{if ' + columns[columnCount].field + '}} ' +
                        '<input class="e-field e-checkbox" type ="checkbox" ' +
                        'id=' + proxy._id + columns[columnCount].field +
                        'name=' + columns[columnCount].field +
                        'checked="checked"></input>' +
                        '{{else}} ' +
                        '<input class="e-field e-checkbox"' +
                        ' type ="checkbox" ' +
                        'id=' + proxy._id + columns[columnCount].field +
                        'name=' + columns[columnCount].field + ' > ' +
                        '{{/if}}');

                break;
            
            case "numericedit":

                var $numericText = ej.buildTag('input.e-numerictextbox e-field', "", {}, {
                    type: "text",
                    value: "{{:#data['" + columns[columnCount].field + "']}}",
                    id: proxy._id + columns[columnCount].field,
                    name: columns[columnCount].field
                });
                $element.append($numericText);

                break;

            case "datepicker":
            case "datetimepicker":
                
                var $datePicker = ej.buildTag('input.e-' + columns[columnCount]["editType"] + ' e-field', "",
                                             {}, 
                                             {
                                                 type: "text",
                                                 value: "{{:#data['" + columns[columnCount].field + "']}}",
                                                 id: id + columns[columnCount].field,
                                                 name: columns[columnCount].field
                                             });
                $element.append($datePicker);

                break;

            case "dropdownedit":

                if(model.isFromGantt){
                    var $dropDownList = ej.buildTag('input.e-field e-dropdownlist' + ' e-field',
                        "", 
                        {}, 
                        {
                            type: "text",
                            value: "{{:#data['" + columns[columnCount].field + "']}}",
                            id: id + columns[columnCount].field,
                            name: columns[columnCount].field
                        });
                    $element.append($dropDownList);
                }else {
                    if (!ej.isNullOrUndefined(column.dropdownData)) {
                        var selectedItems = column.dropdownData;
                        var dropDownTemplate = proxy._compiledDropDownTemplate();
                        $element.get(0).innerHTML = ["<select>", dropDownTemplate.render(selectedItems), "</select>"].join("");
                        $element.find("select").prop({ id: proxy._id + column.field, name: column.field }).addClass("e-field e-dropdownlist");
                    }
                }

                break;
        }
    };
    
    ej.TreeGrid._getCellValue= function (columnName) {

        var cellValue = this.data[columnName];

        if (cellValue) {
            return cellValue;
        } else {
            return this.data.item && this.data.item[columnName];
        }


    };
    
    //GET ROW CLASS NAME FOR EXPAND COLLAPSE ACTION
    ej.TreeGrid._getrowClassName = function () {

        var rowClass = "gridrowIndex",
            proxy = this;

        if (proxy.data.parentItem) {// && proxy.data.parentItem.index

            rowClass += proxy.data.parentItem.index.toString();

        }

        rowClass += "level";
        rowClass += proxy.data.level.toString();

        return rowClass;
    };

    //GET COLUMN BY FIELD NAME
    ej.TreeGrid.getColumnByField = function (columns, field) {

        var column = 0;

        for (column; column < columns.length; column++) {

            if (columns[column]["field"] == field) break;

        }

        return column == columns.length ? null : columns[column];
    };

    //EXPAND COLLAPSE THE PARTICULAR RECORD OBJECT
    ej.TreeGrid.sendExpandCollapseRequest = function (element, args) {

        var proxy = element,
            model = proxy.model;

        args.requestType = ej.TreeGrid.Actions.ExpandCollapse;

        if (model.enableVirtualization) {

            if (proxy._isFromGantt) {
                proxy._$treegridHelper.ejTreeGrid("processBindings", args);
            } else {
                proxy.processBindings(args);
            }

            if (args.expanded) {

                proxy._trigger("expanded", args);

            } else {

                proxy._trigger("collapsed", args);

            }

            if (proxy._isFromGantt) {
                proxy._$treegridHelper.ejTreeGrid("sendDataRenderingRequest", args);
                proxy._updatedGanttRecords = proxy.getUpdatedRecords();
                proxy._currentViewData = proxy.getCurrentViewData();
                if (proxy.model.enableVirtualization) {
                    if (proxy.model.predecessorMapping) {
                        proxy._isValidationEnabled = false;
                        proxy._connectorlineIds = [];
                        proxy._connectorLinesCollection = [];
                        proxy._$ganttchartHelper.ejGanttChart("clearConnectorLines");
                        proxy._createConnectorLinesCollection();
                    }
                    proxy._$ganttchartHelper.ejGanttChart("refreshHelper", proxy._currentViewData, proxy._updatedGanttRecords);
                    proxy._$treegridHelper.ejTreeGrid("refreshHeight");                    
                }
                
            } else {
                proxy.sendDataRenderingRequest(args);
                proxy._$gridContent.ejScroller("refresh");
            }
            

        } else {

            var record = args.data,
                index,
                $row,
                height = 0,
                isModified = record.expanded !== args.expanded;

            if (proxy._isFromGantt) {
                index = proxy._currentViewData.indexOf(record)
            } else {
                index = proxy.model.currentViewData.indexOf(record);
            }

            $row = $(proxy.getRows()[index]);

            if (args.expanded) {//expand event 
                record.expanded = args.expanded;
                proxy._expandedRecordsCount = 0;
                ej.TreeGrid.expandRecord(proxy, record, args.expanded, args);

                if (isModified) {
                    proxy._totalCollapseRecordCount -= proxy._expandedRecordsCount;
                }

                $row.find(".e-treegridcollapse").removeClass('e-treegridcollapse').addClass('e-treegridexpand');
                $row.removeClass('e-treegridrowcollapse').addClass('e-treegridrowexpand');                

                if (model.enableAltRow) {
                    ej.TreeGrid.updateAltRow(proxy, record, index, 1);
                }
            } else {

                proxy._collapsedRecordCount = 0;
                ej.TreeGrid.collapseRecord(proxy, record, args.expanded);
                
                if (isModified)
                    proxy._totalCollapseRecordCount += proxy._collapsedRecordCount;

                record.expanded = args.expanded;
                $row.find(".e-treegridexpand").removeClass('e-treegridexpand').addClass('e-treegridcollapse');
                $row.removeClass('e-treegridrowexpand').addClass('e-treegridrowcollapse');               
                    
                if (model.enableAltRow)
                    ej.TreeGrid.updateAltRow(proxy, record, index, proxy._collapsedRecordCount + 1);
            }

            height = (proxy.getUpdatedRecords().length - proxy._totalCollapseRecordCount) * model.rowHeight;
            
            if (proxy._isFromGantt) {
                proxy._$treegridHelper.ejTreeGrid("updateHeight", height);
                proxy._$ganttchart.ejGanttChart("updateHeight", height);
               
            } else {
                proxy.updateHeight(height);
            }

            

            if (args.expanded)
                proxy._trigger("expanded", args);
            else
                proxy._trigger("collapsed", args);
        }

    };

    //EXPAND THE RECORD
    ej.TreeGrid.expandRecord = function (controlObject, Record, expanded, args) {
  
        var proxy = controlObject,
            rowClassName = ".gridrowIndex" + Record.index.toString() + "level" + (Record.level + 1).toString(),
            $rows = $(rowClassName),
            count = 0,
            length = $rows.length,
            row,
            index,
            record,
            model = proxy.model,
            $expandedRows = $(rowClassName),
            index,
            $gridRows = proxy.getRows(),
            $row = $($gridRows[index]);

        if (proxy._isFromGantt) {
            index = proxy._currentViewData.indexOf(Record);


        } else {
            index = model.currentViewData.indexOf(Record);
        }

        if (Record.hasChildRecords && Record.childRecords.length > 0) {
            $row.find(".e-treegridcollapse").removeClass('e-treegridcollapse').addClass('e-treegridexpand');
            $row.removeClass('e-treegridrowcollapse').addClass('e-treegridrowexpand');
        }

        proxy._expandedRecordsCount += proxy._isFromGantt ? $expandedRows.length / 2 : $expandedRows.length;

        if ($expandedRows.length === 0) {
            if (proxy.model.allowSearching && proxy._seacrhString && proxy._seacrhString.length > 0) {
                args && proxy._$treegridHelper.ejTreeGrid("sendExpandCollapseRequest", args);
            }
        }

        $expandedRows.css({ 'display': 'table-row' });

        if (proxy._isFromGantt) {
         
            length = length / 2;
        }

        for (count; count < length; count++) {
            row = $rows[count];
            index = $gridRows.index(row);
            if (index !== -1) {
                record = proxy._isFromGantt ? proxy._updatedGanttRecords[index] : proxy._updatedRecords[index];
                record.isExpanded = true;
                if (record.expanded)
                    ej.TreeGrid.expandRecord(proxy,record, expanded);
            }
        }

        if (proxy._isFromGantt)
        proxy.updateConnectorLines($expandedRows, expanded);
    },
    
    //COLLAPSE THE RECORD
    ej.TreeGrid.collapseRecord = function (controlObject, Record, expanded) {

        var proxy = controlObject,
            model = proxy.model,
            rowClassName = ".gridrowIndex" + Record.index.toString() + "level" + (Record.level + 1).toString(),
            $rows = $(rowClassName),
            count = 0,
            length = $rows.length,
            row,
            index,
            record,
            $collapsedRows = $(rowClassName),
        $gridRows = proxy.getRows();

        proxy._collapsedRecordCount += proxy._isFromGantt ? $collapsedRows.length / 2 : $collapsedRows.length;
        $collapsedRows.css({ 'display': 'none' });

        if (proxy._isFromGantt) {

            proxy.updateConnectorLines($collapsedRows, expanded);
            length = length / 2;

        }

        for (count; count < length; count++) {

            row = $rows[count];
            var nn = proxy.getRows();
            index = proxy.getRows().index(row);


            if (index !== -1) {
                record = proxy.getUpdatedRecords()[index];

                if (record.expanded)
                    ej.TreeGrid.collapseRecord(proxy,record, expanded);
            }
        }
    },

    //UPDATE THE ALT ROW FUNCTION
    ej.TreeGrid.updateAltRow = function (controlObject, Record, recordIndex, offset) {

        var proxy = controlObject,
            count = 0,
            model = proxy.model,
            currentViewData = proxy._isFromGantt ? proxy._currentViewData : model.currentViewData,
            length = currentViewData.length,
            isAltRow = Record.isAltRow,
            record,
            $gridRows = proxy.getRows();

        for (count = recordIndex + offset; count < length; count++) {

            if ($($gridRows[count]).css('display') === "none")
                continue;

            record = currentViewData[count];
            record.isAltRow = !isAltRow;
            isAltRow = record.isAltRow;

            if (isAltRow)
                $($gridRows[count]).addClass('e-alt-row');
            else
                $($gridRows[count]).removeClass('e-alt-row');

        }
    };     

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
    };

})(jQuery, Syncfusion);;;;
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