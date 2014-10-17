/// <reference path="jquery.d.ts"/>
declare module EJ.Core {
    class WidgetBase {
        destroy(): void;
        element: JQuery;
        setModel(options: Object, forceSet?: boolean)
        option(prop?: Object, value?: Object, forceSet?: boolean): any;
        persistState(): void;
        restoreState(silent: boolean): void;
    }

    class Widget extends WidgetBase {
        constructor(pluginName: string, className: string, proto: any);
        static fn: Widget;
        static extend(widget: Widget): any;
        register(pluginName: string, className: string, prototype: any): void;
        destroyAll(elements: Element): void;      
        model: any;     
    }


    interface BaseEvent {
        cancel: boolean;
        type: string;       
    }
}



declare module ej {
  //#region common
    class DataManager {
        constructor(dataSource: any, query: ej.Query, adaptor?: Function); 
        setDefaultQuery(query: ej.Query): void;
        executeQuery(query?: ej.Query, done?: Function, fail?: Function, always?: Function): JQueryPromise<any>;
        executeLocal(query?: ej.Query): ej.DataManager;
        saveChanges(changes?: Changes, key?: string, tableName?: string): JQueryDeferred<any>;
        insert(data: Object, tableName: string): JQueryPromise<any>;
        remove(keyField: string, value: any, tableName: string): Object;
        update(keyField: string, value: any, tableName: string): Object;
    }    

    class Query {
        constructor();
        static fn: Query;
        static extend(prototype: Object): Query;
        key(field: string): ej.Query;
        using(dataManager: ej.DataManager): ej.Query;
        execute(dataManager: ej.DataManager, done: string, fail: string, always: string): JQueryPromise<any>;
        executeLocal(dataManager: ej.DataManager): ej.DataManager;
        clone(): ej.Query;
        from(tableName: string): string;
        addParams(key: string, value: string): Array<string>;
        expand(tables: Array<string>): Array<string>;
        where(fieldName: string, operator: string, value: string, ignoreCase?: boolean): ej.Query;
        search(searchKey: string, fieldNames?: Array<string>, operator?: string, ignoreCase?: boolean): ej.Query;
        sortBy(fieldName: string, comparer?: string, isFromGroup?: boolean): ej.Query;
        sortByDesc(fieldName: string): ej.Query;
        group(fieldName: string): ej.Query;
        page(pageIndex: number, pageSize: number): ej.Query;
        take(nos: number): ej.Query;
        skip(nos: number): ej.Query;
        select(fieldNames: string): ej.Query;
        hierarchy(query: ej.Query, selectorFn: Function): ej.Query;
        foreignKey(key: string): ej.Query;
        requiresCount(): ej.Query;
    }

    class Adaptor {
        constructor(ds: any);
        pvt: Object;
        type: ej.Adaptor;
        options: AdaptorOptions;
        extend(overrides: Array<any>): ej.Adaptor;
        processQuery(dm: ej.DataManager, query: ej.Query);
        processResponse(data: Object, ds: any, query: ej.Query, xhr: JQueryXHR): Object;
        convertToQueryString(req: any, query: ej.Query, dm: ej.DataManager): JQueryParam;
    }

    interface AdaptorOptions {
        from?: string;
        requestType?: string;
        sortBy?: string;
        select?: string;
        skip?: string;
        group?: string;
        take?: string;
        search?: string;
        count?: string;
        where?: string;
    }

    class UrlAdaptor extends ej.Adaptor {
        constructor();
        processQuery(dm: ej.DataManager, query: ej.Query, hierarchyFilters?: Object): {
            type: string; url: string; ejPvtData: Object; contentType?: string; data?: Object;
        }
        convertToQueryString(req: Object, query: ej.Query, dm: ej.DataManager)
        processResponse(data: Object, ds: any, query: ej.Query, xhr: JQueryXHR, request?: Object, changes?: Changes): Object;
        onGroup(e: any); void;
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): void;
        beforeSend(dm: ej.DataManager, request: any): void;
        insert(dm: ej.DataManager, data, tableName: string): { url: string; data: any };
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data?: any };
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data: any };
        getFiltersFrom(data: Object, query: ej.Query): ej.Predicate;
    }

    class ODataAdaptor extends ej.UrlAdaptor {
        constructor();
        options: UrlAdaptorOptions;
        onEachWhere(filter: any, requiresCast: boolean): any;
        onPredicate(pred: ej.Predicate, query: ej.Query, requiresCast: boolean): string;
        onComplexPredicate(pred: ej.Predicate, requiresCast: boolean): string;
        onWhere(filters: Array<string>): string;
        onEachSearch(e: Object): void;
        onSearch(e: Object): string;
        onEachSort(e: Object): string;
        onSortBy(e: Object): string;
        onGroup(e: Object): string;
        onSelect(e: Object): string;
        onCount(e: Object): string;
        beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        processResponse(data: Object, ds: Object, query: ej.Query, xhr, request: any, changes: Changes): {
            result: Object; count: number
        };
        convertToQueryString(req: Object, query: ej.Query, dm: ej.DataManager): string;
        insert(dm: ej.DataManager, data: Object, tableName: string): { url: string; data: Object; }
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; }
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; data: Object; accept: string; }
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): { url: string; type: string; data: Object; contentType: string; }
        generateDeleteRequest(arr: Array<any>, e: any): string;
        generateInsertRequest(arr: Array<any>, e: any): string;
        generateUpdateRequest(arr: Array<any>, e: any): string;
    }
    interface UrlAdaptorOptions {
        requestType?: string;
        accept?: string;
        multipartAccept?: string;
        sortBy?: string;
        select?: string;
        skip?: string;
        take?: string;
        count?: string;
        where?: string;
        expand?: string;
        batch?: string;
        changeSet?: string;
        batchPre?: string;
        contentId?: string;
        batchContent?: string;
        changeSetContent?: string;
        batchChangeSetContentType?: string;
    }

    class JsonAdaptor extends ej.Adaptor {
        constructor();
        processQuery(ds: Object, query: ej.Query): string;
        batchRequest(dm: ej.DataManager, changes: Changes, e): Changes;
        onWhere(ds: Object, e: any): any;
        onSearch(ds: Object, e: any): any
        onSortBy(ds: Object, e: any, query: ej.Query): Object;
        onGroup(ds: Object, e: any, query: ej.Query): Object;
        onPage(ds: Object, e: any, query: ej.Query): Object;
        onRange(ds: Object, e: any): Object;
        onTake(ds: Object, e: any): Object;
        onSkip(ds: Object, e: any): Object;
        onSelect(ds: Object, e: any): Object;
        insert(dm: ej.DataManager, data: any): Object;
        remove(dm: ej.DataManager, keyField: string, value, tableName: string): Object;
        update(dm: ej.DataManager, keyField: string, value, tableName: string): Object;
    }
    class TableModel {
        constructor(name: string, jsonArray: Array<any>, dataManager: ej.DataManager, modelComputed: any);
        on(eventName: string, handler: Function): void;
        off(eventName: string, handler: Function): void;
        setDataManager(dataManager: DataManager): void;
        saveChanges(): void;
        rejectChanges(): void;
        insert(json: any): void;
        update(value: any): void;
        remove(key: string): void;
        isDirty(): boolean;
        getChanges(): Changes;
        toArray(): Array<any>;
        setDirty(dirty, model): void;
        get(index: number): void;
        length(): number;
        bindTo(element: any): void;
    }
    class Model {
        constructor(json: any, table: string, name: string);
        formElements: Array<string>;
        computes(value: any): void;
        on(eventName: string, handler: Function): void;
        off(eventName: string, handler: Function): void;
        set(field: string, value: any); void;
        get(field: string): any;
        revert(suspendEvent: any): void;
        save(dm: ej.DataManager, key: string): void;
        markCommit(): void;
        markDelete(): void;
        changeState(state: boolean, args: any): void;
        properties(): any;
        bindTo(element: any): void;
        unbind(element: any): void;
    }
    interface Changes {
        changed?: Array<any>;
        added?: Array<any>;
        deleted?: Array<any>;
    }
    class Predicate {
        constructor(field: string, operator: string, value: any, ignoreCase: boolean);
        and(field, operator, value, ignoreCase): void;
        or(field, operator, value, ignoreCase): void;
        validate(record: Object): boolean;
        toJSON(): {
            isComplex: boolean;
            field: string;
            operator: string;
            value: any;
            ignoreCase: boolean;
            condition: string;
            predicates: any;
        };
    }
    interface dataUtil {
        swap? (array: Array<any>, x: number, y: number): void;
        mergeSort? (jsonArray: Array<any>, fieldName: string, comparer): Array<any>;
        max? (jsonArray: Array<any>, fieldName: string, comparer: string): Array<any>;
        min? (jsonArray: Array<any>, fieldName: string, comparer: string): Array<any>;
        distinct? (jsonArray: Array<any>, fieldName: string, requiresCompleteRecord): Array<any>;
        sum? (json, fieldName: string): number;
        avg? (json, fieldName: string): number;
        select? (jsonArray: Array<any>, fieldName: string, fields): Array<any>;
        group? (jsonArray: Array<any>, field: string, /* internal */ level: number): Array<any>;
        parseTable? (table: string, headerOption, headerRowIndex: number): Object;
    }
    interface headerOption {
        tHead?: string;
        row?: string

    }

    
  
    interface AjaxSettings {
        type?: string;
        cache: boolean;
        data?: any;
        dataType?: string;
        contentType?: any;
        async?: boolean;
    }

    //#endregion common   
    
    //#region button
    class Button extends EJ.Core.Widget {
        static fn: Button;             
        constructor(element: JQuery, options?: ButtonOptions);     
        constructor(element: Element, options?: ButtonOptions);     
        disable(): void;
        enable(): void;        
    }

    interface ButtonOptions {
        size?: string;
        type?: string;
        height?: number;
        width?: number;
        enabled?: boolean;
        text?: string;
        contentType?: string;
        imagePosition?: string;
        showRoundedCorner?: boolean;
        cssClass?: string;
        prefixIcon?: string;
        suffixIcon?: string;
        enableRTL?: boolean;
        repeatButton?: boolean;
        timeInterval?: string;
        create? (e: ButtonEvent): void;
        click? (e: ButtonClickEvent): void;
        destroy? (e: ButtonEvent): void;       
    }

    interface ButtonEvent extends EJ.Core.BaseEvent {
        model: ButtonOptions;       
    }

    interface ButtonClickEvent extends EJ.Core.BaseEvent, ButtonEvent {        
        status: boolean;
    }
    //#endregion button

    //#region Accordion
    class Accordion extends EJ.Core.Widget {
        static fn: Accordion;
        constructor(element: JQuery, options?: AccordionOptions);
        constructor(element: Element, options?: AccordionOptions);
        disable(): void;
        enable(): void; 
        show(): void;
        hide(): void; 
        getItemsCount(): number;  
        enableItems(itemIndexes: number): void;
        disableItems(itemIndexes: number): void;
    }

    interface AccordionOptions {
        collapsible?: boolean;
        ajaxSettings?: AjaxSettings;
        //ajaxSettings?:JQueryAjaxSettings;
        events?: string;
        customIcon?: AccordionIconSettings;
        heightAdjustMode?: string;
        selectedItemIndex?: number;
        cssClass?: string;
        enableRTL?: boolean;
        showRoundedCorner?: boolean;
        allowKeyboardNavigation?: boolean;
        enableMultipleOpen?: boolean;
        expandSpeed?: number;
        collapseSpeed?: number;
        selectedItems?: Array<number>;
        disabledItems?: Array<number>;
        enabledItems?: Array<number>;
        enablePersistence?: boolean;
        enabled?: boolean;
        active?(e: AccordionActiveEvent): void;
        beforeActive?(e: AccordionBeforeActiveEvent): void;
        ajaxLoad?(e: AccordionAjaxLoadEvent): void;
        ajaxBeforeLoad?(e: AccordionAjaxLoadEvent): void;       
        ajaxSuccess?(e: AccordionAjaxSuccessEvent): void;
        ajaxError?(e: AccordionAjaxFailureEvent): void;
        create? (e: AccordionEvent): void;
        destroy? (e: AccordionEvent): void;
    }
   
    

    interface AccordionIconSettings {
        header?: string;
        selectedHeader?: string;
    }
    interface AccordionEvent {
        model: AccordionOptions;
    }
    interface AccordionAjaxLoadEvent extends EJ.Core.BaseEvent,AccordionEvent,EJ.Core.BaseEvent {        
        url: string;
    }
    interface AccordionAjaxSuccessEvent extends EJ.Core.BaseEvent, AccordionEvent,AccordionAjaxLoadEvent {        
        data: any;
        content: JQuery;
    }
    interface AccordionAjaxFailureEvent extends EJ.Core.BaseEvent, AccordionEvent, AccordionAjaxLoadEvent {
        data: any;       
    }
   
    interface AccordionBeforeActiveEvent extends EJ.Core.BaseEvent, AccordionEvent {        
        activeIndex: number;
    }
    interface AccordionActiveEvent extends EJ.Core.BaseEvent, AccordionEvent, AccordionBeforeActiveEvent {        
        activeHeader: JQuery;        
    }
   
     //#endregion Accordion

    //#region AutoComplete
    class Autocomplete extends EJ.Core.Widget {
        static fn: Autocomplete;
        constructor(element: JQuery, options?: AutocompleteOptions);
        constructor(element: Element, options?: AutocompleteOptions);
        disable(): void;
        enable(): void;
        clearText(): void;
        getValue(): string;
        getSelectedItems(): JQuery;
        search(): void;
        hide(): void;
        selectValueByKey(); void;
        selectValueByText(): void;
    }

    interface AutocompleteOptions {
        dataSource?: any;
        query?: any;
		delaySuggestionTimeout?: number;
        fields?: AutocompleteFieldSettings;
        template?: string;
        allowGrouping?: boolean;
        enableDistinct?: boolean;
        allowSorting?: boolean;
        sortOrder?: string;
        multiSelectMode?: string;
        delimiterChar?: string;
        allowAddNew?: boolean;
        addNewText?: string;
        showRoundedCorner?: boolean;
        readOnly?: boolean;
        cssClass?: string;
        watermarkText?: string;
        value?: string;
        filterType?: string;
        caseSensitiveSearch?: boolean;
        showLoadingIcon?: boolean;
        listCount?: number;
        minCharacter?: number;
        showPopupButton?: boolean;
        highlightSearch?: boolean;
        enableAutoFill?: boolean;
        enableRTL?: boolean;
        enabled?: boolean;
        height?: any;
        width?: any;
        emptyResultText?: string;
        showEmptyResultText?: boolean;
        enablePersistence?: boolean;
        popupHeight?: any;
        popupWidth?: any;
        focusIn?(e: AutocompleteFocusInEvent): void;
        focusOut?(e: AutocompleteFocusOutEvent): void;
        change?(e: AutocompleteChangeEvent): void;
        select?(e: AutocompleteSelectEvent): void;
        create?(e: AutocompleteEvent): void;
        destroy?(e: AutocompleteEvent): void;
    }
    interface AutocompleteFieldSettings {
        text?: string;
        key?: string;
        category?: string;
        htmlAttributes?: string;
    }

    interface AutocompleteEvent extends EJ.Core.BaseEvent {
        model: AutocompleteOptions;
    }

    interface AutocompleteFocusInEvent extends EJ.Core.BaseEvent, AutocompleteEvent {
        value: string;
    }
    interface AutocompleteFocusOutEvent extends EJ.Core.BaseEvent, AutocompleteEvent {
        value: string;
    }
    interface AutocompleteChangeEvent extends EJ.Core.BaseEvent, AutocompleteEvent {
        value: string;
    }
    interface AutocompleteSelectEvent extends EJ.Core.BaseEvent, AutocompleteEvent {
        value: string;
        text: string;
        key: any;
    }
    //#endregion AutoComplete

    //#region CheckBox
    class CheckBox extends EJ.Core.Widget {
        static fn: CheckBox;
        constructor(element: JQuery, options?: CheckBoxOptions);
        constructor(element: Element, options?: CheckBoxOptions);
        disable(): void;
        enable(): void;
        isChecked(): boolean;
    }

    interface CheckBoxOptions {
        id?: string;
        name?: string;
        value?: string;
        checked?: boolean;
        enabled?: boolean;
        enableTriState?: boolean;
        indeterminateState?: boolean;
        showRoundedCorner?: boolean;
        enablePersistence?: boolean;
        cssClass?: string;
        text?: string;
        enableRTL?: boolean;
        idPrefix?: string;
        size?: string;
        checkboxState?: string;
        beforeChange? (e: CheckBoxEvent): void;
        change? (e: ButtonEvent): void;
        create? (e: CheckBoxEvent): void;
        destroy? (e: CheckBoxEvent): void;
    }
    interface CheckBoxEvent extends EJ.Core.BaseEvent {
        model: CheckBoxOptions;
    }

    interface CheckBoxBeforeChangeEvent extends EJ.Core.BaseEvent,CheckBoxEvent {
        isChecked: boolean;
        event: JQueryEventObject;
    }

    interface CheckBoxChangeEvent extends EJ.Core.BaseEvent, CheckBoxEvent {
        isChecked: boolean;
        event: JQueryEventObject;
    }
    //#endregion CheckBox

    //#region Datepicker
    class DatePicker extends EJ.Core.Widget {
        static fn: DatePicker;
        constructor(element: JQuery, options?: DatePickerOptions);
        constructor(element: Element, options?: DatePickerOptions);
        disable(): void;
        enable(): void;
        show(): void;
        hide(): void;
        getValue(): Date;
    }
    interface DatePickerOptions {
        dayHeaderFormat?: string;
        showPopupButton?: boolean;
        showFooter?: boolean;
        displayInline?: boolean;
        dateFormat?: string;
        watermarkText?: string;
        displayDefaultDate?: boolean;
        value?: any;
        minDate?: any;
        maxDate?: any;
        startLevel?: string;
        depthLevel?: string;
        cssClass?: string;
        startDay?: number;
        stepMonths?: number;
        locale?: string;
        showOtherMonths?: boolean;
        enableStrictMode?: boolean;
        enablePersistence?: boolean;
        enabled?: boolean;
        width?: string;
        height?: string;
        enableRTL?: boolean;
        showRoundedCorner?: boolean;
        headerFormat?: string;
        buttonText?: string;
        readOnly?: boolean;
        fields?: DatepickerFields;
        showTooltip?: boolean;
        highlightWeekend?: boolean;
        highlightSection?: string;
        open?(e: DatepickerOpenEvent): void;
        close?(e: DatepickerCloseEvent): void;
        select?(e: DatepickerSelectEvent): void;
        change?(e: DatepickerChangeEvent): void;
        focusIn?(e: DatepickerEvent): void;     
        focusOut?(e: DatepickerEvent): void;
        create?(e: DatepickerEvent): void;
        destroy?(e: DatepickerEvent): void;        
    }

    interface DatepickerFields {
        date?: string;
        tooltip?: string;
        icon?: string;
    }

    interface DatepickerEvent extends EJ.Core.BaseEvent{
        model: DatePickerOptions;
    }

    interface DatepickerOpenEvent extends EJ.Core.BaseEvent, DatepickerEvent {
        prevDate?: Date;
        value?: Date;
    }

    interface DatepickerCloseEvent extends EJ.Core.BaseEvent, DatepickerEvent {
        prevDate?: Date;
        value?: Date;
    }
    interface DatepickerChangeEvent extends EJ.Core.BaseEvent, DatepickerEvent {
        prevDate?: Date;
        value?: Date;
    }

    interface DatepickerSelectEvent extends EJ.Core.BaseEvent, DatepickerEvent {
        prevDate?: Date;
        value?: Date;
        isSpecialDay?: boolean;
    }


    //#endregion Datepicker

    //#region DateTimePicker
    class DateTimePicker extends EJ.Core.Widget {
        static fn: DateTimePicker;
        constructor(element: JQuery, options?: DateTimePickerOptions);
        constructor(element: Element, options?: DateTimePickerOptions);
        disable(): void;
        enable(): void;
        show(): void;
        hide(): void;
        getValue(): Date;
        setCurrentDateTime(): void;
    }

    interface DateTimePickerOptions {
        cssClass?: string;
        locale?: string;
        readOnly?: boolean;
        showRoundedCorner?: boolean;
        enableRTL?: boolean;
        enabled?: boolean;
        value?: any;
        minDateTime?: any;
        maxDateTime?: any;
        height?: any;
        width?: any;
        dateTimeFormat?: string;
        showPopupButton?: boolean;
        buttonText?: DateTimePickerButtonText;
        enablePersistence?: boolean;
        interval?: number;
        timeDisplayFormat?: string;
        timePopupWidth?: number;
        dayHeaderFormat?: string;
        startLevel?: string;
        depthLevel?: string;
        startDay?: number;
        stepMonths?: number;
        showOtherMonths?: boolean;
        headerFormat?: string;
        open? (e: DateTimePickerOpenEvent): void;
        close? (e: DateTimePickerCloseEvent): void;
        change? (e: DateTimePickerChangeEvent): void;
        create? (e: DateTimePickerEvent): void;
        destroy? (e: DateTimePickerEvent): void;

    }

    interface DateTimePickerButtonText {
        today?: string;
        now?: string;
        done?: string;
        timeTitle?: string;
    }

    interface DateTimePickerEvent extends EJ.Core.BaseEvent {
        model: DateTimePickerOptions;
    }

    interface DateTimePickerChangeEvent extends EJ.Core.BaseEvent, DateTimePickerEvent, DateTimePickerOpenEvent {      
        isValidState?: boolean;
    }
    interface DateTimePickerOpenEvent extends EJ.Core.BaseEvent, DateTimePickerEvent {
        prevDateTime: Date;
        value: string;        
    }
    interface DateTimePickerCloseEvent extends EJ.Core.BaseEvent, DateTimePickerEvent, DateTimePickerOpenEvent {        
    }

    //#endregion DateTimePicker

    //#region Dialog
    class Dialog extends EJ.Core.Widget {
        static fn: Dialog;
        constructor(element: JQuery, options?: DialogOptions);
        constructor(element: Element, options?: DialogOptions);        
        enable(): void;
        disabe(): void; 
        getValue(): string;  
        hidePopup(): void;    
        showPopup(): void;
        clearText(): void;
        unselectItemByIndex(index: string): void;
        setSelectedValue(id: string): void;
        unselectItemByValue(id: string): void;
        setSelectedText(id: string): void;
        unselectItemByText(id: string): void;
        getSelectedItem(): void;
        getSelectedValue(): void;
        checkAll(): void;
        unCheckAll(): void;
		isOpened(): boolean;
		open(): void;
		close(event: any): void;
    }

    interface DialogOptions {
        showOnInit?: boolean;
        closeOnEscape?: boolean;
        closeIconTooltip?: string;
        allowDraggable?: boolean;
        height?: any;
        minHeight?: number;
        minWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
        enableModal?: boolean;
        position?: DialogPositon;
        enableResize?: boolean;
        showHeader?: boolean;
        contentType?: string;
        contentUrl?: string;
        ajaxSettings?: AjaxSettings;
        title?: string;
        width?: any;
        zIndex?: number;
        cssClass?: string;
        enableRTL?: boolean;
        allowKeyboardNavigation?: boolean;
        showRoundedCorner?: boolean;
        actionButtons?: Array<string>;
        faviconCSS?: string;
        content?: string;
        enablePersistence?: boolean;
        enabled?: boolean;
        enableAutoResize?: boolean;
        beforeClose? (e: DialogBeforeCloseEvent):void ;
        close? (e: DialogCloseEvent): void;
        beforeOpen? (e: DialogEvent): void;
        open? (e: DialogEvent): void;
        drag? (e: DialogDragEvent): void;
        dragStart? (e: DialogDragStartEvent): void;
        dragStop? (e: DialogDragStopEvent): void;
        resize? (e: DialogResizeEvent): void;
        resizeStart? (e: DialogResizeStartEvent): void;
        resizeStop? (e: DialogResizeStopEvent): void;
        contentLoad? (e: DialogContentLoadEvent): void;
        ajaxSuccess? (e: DialogtAjaxSuccessEvent): void;
        ajaxError? (e: DialogAjaxErrorEvent): void;
        create? (e: DialogEvent): void;
        destroy? (e: DialogEvent): void;
    }

    interface DialogPositon {
        X?: number;
        Y?: number;
    }   

    interface DialogEvent extends EJ.Core.BaseEvent{
        model: DialogOptions;
    }

    interface DialogContentLoadEvent extends EJ.Core.BaseEvent, DialogEvent {
        contentType: string;
        url: string;
    }
    interface DialogtAjaxSuccessEvent extends EJ.Core.BaseEvent, DialogEvent {
        data: any;
        url: string;
    }
    interface DialogAjaxErrorEvent extends EJ.Core.BaseEvent, DialogEvent {
        data: any;
        url: string;
    }
    interface DialogDragEvent extends EJ.Core.BaseEvent, DialogEvent {
        event: Event;
    }

    interface DialogDragStartEvent extends EJ.Core.BaseEvent, DialogEvent {
        event: Event;
    }
    interface DialogDragStopEvent extends EJ.Core.BaseEvent, DialogEvent {
        event: Event;
    }
    interface DialogResizeStartEvent extends EJ.Core.BaseEvent, DialogEvent {
        event: Event;
    }
    interface DialogResizeStopEvent extends EJ.Core.BaseEvent, DialogEvent {
        event: Event;
    }
    interface DialogResizeEvent extends EJ.Core.BaseEvent, DialogEvent {
        event: Event;
    }
    interface DialogBeforeCloseEvent extends EJ.Core.BaseEvent, DialogEvent {
        event: Event;
    }
    interface DialogCloseEvent extends EJ.Core.BaseEvent, DialogEvent {
        event: Event;
    }
    //#endregion Dialog
    
    //#region DropDownList
    class DropDownList extends EJ.Core.Widget {
        static fn: DropDownList;
        constructor(element: JQuery, options?: DropDownListOptions);
        constructor(element: Element, options?: DropDownListOptions);
        open(): JQuery;
        close(): JQuery;
        isOpened(): boolean;
    }

    interface DropDownListOptions {
        cssClass?: string;
        value?: string;
        text?: string;
        itemValue?: string;
        listCount?: number;
        dataSource?: any;
        query?: any;
        fields?: DropDownListFields;
        watermarkText?: string;
        height?: any;
        width?: any;
        popupHeight?: any;
        popupWidth?: any;
        targetId?: string;
        template?: string;
        selectedItemByIndex?: number;
        selectedItems?: Array<number>;
        cascadeTo?: string;
        showRoundedCorner?: boolean;
        showPopupOnLoad?: boolean;
        enableRTL?: boolean;
        enabled?: boolean;
        caseSensitiveSearch?: boolean;
        showCheckbox?: boolean;
        checkAll?: boolean;
        uncheckAll?: boolean;
        enablePersistence?: boolean;
        enableIncrementalSearch?: boolean;
        readOnly?: boolean;
        allowMultiSelection?: boolean;
        create?(e: DropDownListEvent): void;
        popupHide?(e: DropDownListPopupHideEvent): void;
        popupShown?(e: DropDownListPopupShownEvent): void;
        beforePopupShown?(e: DropDownListBeforePopupShownEvent): void;
        change?(e: DropDownListChangeEvent): void;
        select?(e: DropDownListSelectEvent): void;
        checkChange?(e: DropDownListCheckChangeEvent): void;
        focusIn?(e: DropDownListEvent): void;      
        focusOut?(e: DropDownListEvent): void;      
        destroy?(e: DropDownListEvent): void;        
    }

    interface DropDownListFields {
        id?: string;
        text?: string;
        value?: string;
        imageUrl?: string;
        imageAttributes?: any;
        spriteCssClass?: string;
        htmlAttributes?: any;
        selected?: boolean;
        tableName?: string;
    }

    interface DropDownListEvent extends EJ.Core.BaseEvent {
        model: DropDownListFields;
    }
    interface DropDownListCheckChangeEvent extends EJ.Core.BaseEvent, DropDownListEvent{
        isChecked: boolean;
        data: DropDownListOptions;        
    }
    interface DropDownListChangeEvent extends EJ.Core.BaseEvent, DropDownListEvent {
        isChecked: boolean;
        data: DropDownListOptions;
    }
    interface DropDownListBeforePopupShownEvent extends EJ.Core.BaseEvent, DropDownListEvent {
        text: string;
        value: string;
    }
    interface DropDownListPopupShownEvent extends EJ.Core.BaseEvent, DropDownListEvent {
        text: string;
        value: string;
    }
    interface DropDownListPopupHideEvent extends EJ.Core.BaseEvent, DropDownListEvent {
        text: string;
        value: string;
    }
    interface DropDownListSelectEvent extends EJ.Core.BaseEvent, DropDownListEvent {
        text: string;
        selectedText: string;
        itemId: string;
        value: string;
        isChecked: boolean;
    }
    interface DropDownListChangeEvent extends EJ.Core.BaseEvent, DropDownListEvent, DropDownListSelectEvent {
       
    }

    //#endregion DropDownList
    
     //#region Editor
    class NumericTextbox extends EJ.Core.Widget {
        static fn: NumericTextbox;
        constructor(element: JQuery, options?: EditorOptions);
        constructor(element: Element, options?: EditorOptions);
        enable(): void;
        disable(): void;
        getValue(): number;
    }

    class PercentageTextbox extends EJ.Core.Widget {
        static fn: PercentageTextbox;
        constructor(element: JQuery, options?: EditorOptions);
        constructor(element: Element, options?: EditorOptions);
        enable(): void;
        disable(): void;
        getValue(): number;
    }

    class CurrencyTextbox extends EJ.Core.Widget {
        static fn: CurrencyTextbox;
        constructor(element: JQuery, options?: EditorOptions);
        constructor(element: Element, options?: EditorOptions);
        enable(): void;
        disable(): void;
        getValue(): number;
    }

    interface EditorOptions {
        width?: string;
        height?: string;
        value?: number;
        name?: string;
        minValue?: number;
        maxValue?: number;
        incrementStep?: number;
        decimalPlaces?: number;
        cssClass?: string;
        enablePersistence?: boolean;
        showSpinButton?: boolean;
        locale?: string;
        enableStrictMode?: boolean;
        showRoundedCorner?: boolean;
        readOnly?: boolean;
        enabled?: boolean;
        enableRTL?: boolean;
        watermarkText?: string;
        change? (e: EditorChangeEvent): void;
        focusIn? (e: EditorFocusInEvent): void;
        focusOut? (e: EditorFocusOutEvent): void;
        create? (e: EditorEvent): void;
        destroy? (e: EditorEvent): void;
    }

    interface EditorEvent extends EJ.Core.BaseEvent {
        model: EditorOptions;
    }

    interface EditorChangeEvent extends EJ.Core.BaseEvent, EditorEvent {
        value: number;
    }

    interface EditorFocusInEvent extends EJ.Core.BaseEvent, EditorEvent {
        value: number;
    }
    interface EditorFocusOutEvent extends EJ.Core.BaseEvent, EditorEvent {
        value: number;
    }
     //#endregion Editor

     //#region MaskEdit
    class MaskEdit extends EJ.Core.Widget {
        static fn: MaskEdit;
        constructor(element: JQuery, options?: MaskEditOptions);
        constructor(element: Element, options?: MaskEditOptions);
        enable(): void;
        disable(): void;
        get_StrippedValue(): string;
        get_UnstrippedValue(): string;
        clear(): void;
    }

    interface MaskEditOptions {
        maskFormat?: string;
        value?: string;
        watermarkText?: string;
        height?: string;
        width?: string;
        showError?: boolean;
        cssClass?: string;
        customCharacter?: string;
        inputMode?: string;
        readOnly?: boolean;
        textAlign?: string;
        hidePromptOnLeave?: boolean;
        showRoundedCorner?: boolean;
        enablePersistence?: boolean;
        enabled?: boolean;
        keydown?(e: MaskEditChangeEvent): void;
        keyup?(e: MaskEditChangeEvent): void;
        keyPress?(e: MaskEditChangeEvent): void;
        change?(e: MaskEditChangeEvent): void;
        mouseover?(e: MaskEditChangeEvent): void;
        mouseout?(e: MaskEditChangeEvent): void;
        focusIn?(e: MaskEditChangeEvent): void;
        focusOut?(e: MaskEditChangeEvent): void;
        create?(e: MaskEditEvent): void;
        destroy?(e: MaskEditEvent): void;
    }

    interface MaskEditEvent extends EJ.Core.BaseEvent{
        model: MaskEditOptions;
    }

    interface MaskEditChangeEvent extends EJ.Core.BaseEvent, MaskEditEvent {
        value: string;
        unmaskedValue: string;
    }
  
    //#endregion MaskEdit
    
    //#region Menu
    class Menu extends EJ.Core.Widget {
        static fn: Menu;
        constructor(element: JQuery, options?: MenuOptions);
        constructor(element: Element, options?: MenuOptions);
        enable(): void;
        disable(): void;
        disableItem(item:string): void;
        disableItemByID(id: string): void;
        enableItem(item: string): void;
        enableItemByID(id: string): void;
        show(X:number,Y:number,element :Element, event?:Event): void;
        hide(event?: Event): void;
		insert(item:string,target:any):void;
		insertBefore(item:string,target:any):void;
		insertAfter(item:string,target:any):void;
		remove(targetCollection:Array<any>):void;
    }

    interface MenuOptions {
        height?: any;
        width?: any;
        animationType?: string;
        orientation?: string;
        menuType?: string;
        contextMenuTarget?: string;
        cssClass?: string;
        openOnClick?: boolean;
        subMenuDirection?: boolean;
        enableCenterAlign?: boolean;
        showRooltLevelArrows?: boolean;
        showSubLevelArrows?: boolean;
        enableSeparator?: boolean;
        enabled?: boolean;
        fields?: MenuFields;
        enableRTL?: boolean;
        titleText?: string;
        beforeOpen? (e: MenuOpenEvent): void;
        open? (e: MenuOpenEvent): void;
        close? (e: MenuCloseEvent): void;
        mouseover? (e: MenuMouseEvent): void;
        mouseout? (e: MenuMouseEvent): void;
        click? (e: MenuClickEvent): void;
        keydown? (e: MenuKeyDownEvent): void;
        create? (e: MenuEvent): void;
        destroy? (e: MenuEvent): void;
    }

    interface MenuFields {
        dataSource?: any;
        query?: any;
        tableName?: string;
        id?: string;
        parentId?: string;
        text?: string;
        spriteCssClass?: string;
        linkAttribute?: string;
        imageAttribute?: string;
        htmlAttribute?: string;
        imageUrl?: string;
    }

    interface MenuEvent extends EJ.Core.BaseEvent {
        model: MenuOptions;
    }

    interface MenuOpenEvent extends EJ.Core.BaseEvent, MenuEvent {
        target: Element;
    }
    interface MenuCloseEvent extends EJ.Core.BaseEvent, MenuEvent {
        events: Event;
    }

    interface MenuMouseEvent extends EJ.Core.BaseEvent, MenuEvent {
        text: string;
        element: Element;
        event: Event;
        ID: string;
        selectedItem?: any;
    }
    interface MenuKeyDownEvent extends EJ.Core.BaseEvent, MenuEvent, MenuMouseEvent {
        
    }
    interface MenuClickEvent extends EJ.Core.BaseEvent, MenuEvent, MenuMouseEvent {
        events: MenuMouseEvent;
		text: string;
        element: Element;
        ID: string;
		selectedItem?: any;
    }

    //#endregion Menu

   //#region Pager
    class Pager extends EJ.Core.Widget {
        static fn: Pager;
        constructor(element: JQuery, options?: PagerOptions);
        constructor(element: Element, options?: PagerOptions);
        refreshPager(): void;
        goToPage(pageIndex : string): void;
       
    }
    interface PagerOptions {
        pageSize?: number;
        pageCount?: number;
        currentPage?: number;
        enableExternalMessage?: boolean;
        externalMessage?: string;
        enableQueryString?: boolean;
        locale?: boolean;
        masterObject?: any;
        enableRTL?: boolean;
        totalRecordsCount?: number;
        totalPages?: number;
        click?(e: PagerClickEvent): void;
        create?(e: PagerEvent): void;
        destroy?(e: PagerEvent): void;
    }

    interface PagerEvent extends EJ.Core.BaseEvent {
        model: PagerOptions;
        
    }
    interface PagerClickEvent extends EJ.Core.BaseEvent, PagerEvent{
        currentPage: number;
    }
   //#endregion Pager

    //#region ProgressBar
    class ProgressBar extends EJ.Core.Widget {
        static fn: ProgressBar;
        constructor(element: JQuery, options?: ProgressBarOptions);
        constructor(element: Element, options?: ProgressBarOptions);
        enable(): void;
        disable(): void;
        getValue(): number;
        getPercentage(): number;

    }
    interface ProgressBarOptions {
        text?: string;
        cssClass?: string;
        minValue?: number;
        maxValue?: number;
        value?: number;
        percentage?: number;
        height?: any;
        width?: any;
        enabled?: boolean;
        enableRTL?: boolean;
        enablePersistence?: boolean;
        start? (e: ProgressBarStartEvent): void;
        complete? (e: ProgressBarCompleteEvent): void;
        change? (e: ProgressBarChangeEvent): void;
        create? (e: ProgressBarEvent): void;
        destroy? (e: ProgressBarEvent): void;
    }

    interface ProgressBarEvent extends EJ.Core.BaseEvent {
        model: ProgressBarOptions;
    }
    interface ProgressBarChangeEvent extends EJ.Core.BaseEvent, ProgressBarEvent {
        value: number;
        percentage: number;
    }
    interface ProgressBarStartEvent extends EJ.Core.BaseEvent, ProgressBarEvent, ProgressBarChangeEvent {
        
    }
    interface ProgressBarCompleteEvent extends EJ.Core.BaseEvent, ProgressBarEvent, ProgressBarChangeEvent {

    }
   
    //#endregion ProgressBar

    //#region RadioButton
    class RadioButton extends EJ.Core.Widget {
        static fn: RadioButton;
        constructor(element: JQuery, options?: RadioButtonOptions);
        constructor(element: Element, options?: RadioButtonOptions);
        enable(): void;
        disable(): void;
    }
    interface RadioButtonOptions {
        id?: string;
        name?: string;
        value?: string;
        checked?: boolean;
        cssClass?: string;
        text?: string;
        enableRTL?: boolean;
        enablePersistence?: boolean;
        idPrefix?: string;
        size?: string;
        enabled?: boolean;
        beforeChange? (e: RadioButtonChangeEvent): void;
        change? (e: RadioButtonChangeEvent): void;
        create? (e: RadioButtonEvent): void;
        destroy? (e: RadioButtonEvent): void;
    }
    interface RadioButtonEvent extends EJ.Core.BaseEvent {
        model: RadioButtonOptions;
    }
    interface RadioButtonChangeEvent extends EJ.Core.BaseEvent, RadioButtonEvent {
        isChecked: boolean;
    }

    //#endregion RadioButton

    //#region Rating
    class Rating extends EJ.Core.Widget {
        static fn: Rating;
        constructor(element: JQuery, options?: RatingOptions);
        constructor(element: Element, options?: RatingOptions);
        show(): void;
        hide(): void;
        reset(): void;
        refresh(): void;
        getValue(): number;
        setValue(value: number): void;
    }

    interface RatingOptions {
        maxValue?: number;
        minValue?: number;
        value?: number;
        allowReset?: boolean;
        shapeWidth?: number;
        shapeHeight?: number;
        orientation?: string;
        incrementStep?: number;
        readOnly?: boolean;
        enabled?: boolean;
        showTooltip?: boolean;
        precision?: string;
        cssClass?: string;
        width?: string;
        height?: string;
        enablePersistence?: boolean;
        create?(e: RatingEvent): void;
        click?(e: RatingClickEvent): void;
        mouseover?(e: RatingMouseOverEvent): void;
        mouseout?(e: RatingMouseOutEvent): void;
        change?(e: RatingChangeEvent): void;
        destroy?(e: RatingEvent): void;
    }
    interface RatingEvent extends EJ.Core.BaseEvent {
        model: RatingOptions;
    }

    interface RatingClickEvent extends EJ.Core.BaseEvent, RatingEvent {
        e: Event;
        value: number;
        prevValue: number;
    }

    interface RatingMouseOverEvent extends EJ.Core.BaseEvent, RatingEvent {
        e: Event;
        value: number;
        index: number;
    }
    interface RatingMouseOutEvent extends EJ.Core.BaseEvent, RatingEvent {
        e: Event;
        value: number;      
    }
    interface RatingChangeEvent extends EJ.Core.BaseEvent, RatingEvent {    
        value: number;
        prevValue: number;
    }
    //#endregion Rating


    //#region Rotator
    class Rotator extends EJ.Core.Widget {
        static fn: Rotator;
        constructor(element: JQuery, options?: RotatorOptions);
        constructor(element: Element, options?: RotatorOptions);
        enable(): void;
        disable(): void;
        slideNext(): void;
        slidePrevious(): void;
        play(): void;
        pause(): void;
        getIndex(): number;
        gotoIndex(index: number): void;
    }

    interface RotatorOptions{
        cssClass?: string;
        dataSource?: any;
        query?: any;
        fields?: RotatorFields;
        enabled?: boolean;
        displayItemsCount?: any;
        navigateSteps?: any;
        animationSpeed?: number;
        startIndex?: any;
        showPlayButton?: boolean;
        enableAutoPlay?: boolean;
        showNavigateButton?: boolean;
        slideWidth?: any;
        slideHeight?: any;
        frameSpace?: any;
        enableResize?: boolean;
        orientation?: string;
        pagerPosition?: string;
        showThumbnail?: boolean;
        showPager?: boolean;
        stopOnHover?: boolean;
        thumbnailSourceID?: string;
        showCaption?: boolean;
        allowKeyboardNavigation?: boolean;
        enableRTL?: boolean;
        animationType?: string;
        create? (e: RotatorEvent): void;
        change? (e: RotatorChangeEvent): void;
        start? (e: RotatorStartEvent): void;
        stop? (e: RotatorStopEvent): void;
        thumbItemClick? (e: RotatorThumbItemClickEvent): void;
        pagerClick? (e: RotatorPagerClickEvent): void;
        destroy? (e: RotatorEvent): void;
    }

    interface RotatorFields {
        text?: string;
        url?: string;
    }

    interface RotatorEvent extends EJ.Core.BaseEvent {
        model: RotatorOptions;
    }

    interface RotatorClickEvent extends EJ.Core.BaseEvent, RotatorEvent {
        activeItemIndex: number;
        itemID?: string;
    }
    interface RotatorChangeEvent extends EJ.Core.BaseEvent, RotatorEvent {
        activeItemIndex: number;
        itemID?: string;
    }
    interface RotatorStartEvent extends EJ.Core.BaseEvent, RotatorEvent {
        activeItemIndex: number;
        itemID?: string;
    }
    interface RotatorStopEvent extends EJ.Core.BaseEvent, RotatorEvent {
        activeItemIndex: number;
        itemID?: string;
    }
    interface RotatorThumbItemClickEvent extends EJ.Core.BaseEvent, RotatorEvent {
        activeItemIndex: number;
        itemID?: string;
    }
    interface RotatorPagerClickEvent extends EJ.Core.BaseEvent, RotatorEvent {
        activeItemIndex: number;
        itemID?: string;
    }
    //#endregion Rotator


    //#region RTE
    class RTE extends EJ.Core.Widget {
        static fn: RTE;
        constructor(element: JQuery, options?: RTEOptions);
        constructor(element: Element, options?: RTEOptions);
        show(): void;
        hide(): void;
        getHtml(): HTMLElement;
        setHtml(): void;
        getText(): string;
        executeCommand(commandName : string, args: string): void;
        focus(): number;
        disableToolbarItem(id: string): void;
        enableToolbarItem(id: string): void;
        removeToolbarItem(id: string): void;
        getCommandStatus(value: string): void;
        getSelectedHtml(): void;
        insertRow(before: boolean, cell: HTMLTableCellElement): void;
        insertColumn(before: boolean, cell: HTMLTableCellElement): void;
        removeRow(cell: HTMLTableCellElement): void;
        removeColumn(cell: HTMLTableCellElement): void;
        removeTable(table: HTMLTableElement): void;
    }

    interface RTEOptions {
        allowEditing?: boolean;
        allowKeyboardNavigation?: boolean;
        cssClass?: string;
        height?: any;
        width?: any;
        enabled?: boolean;
        maxLength?: number;
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        showToolbar?: boolean;
        showFooter?: boolean;
        showHtmlSource?: boolean;
        showWordCount?: boolean;
        showHtmlTagInfo?: boolean;
        showClearAll?: boolean;
        iframeAttribute?: string;
        showClearFormat?: boolean;
        showFontOption?: boolean;
        showDimensions?: boolean;
        locale?: string;
        name?: string;
        tools?: RTETools;
        toolsList?: Array<string>;
        colorCode?: Array<string>;
        format?: Array<RTEFormat>;
        fontName?: Array<RTEFontName>;
        fontSize?: Array<RTEFontSize>;
        tableRows?: number;
        tableColumns?: number;
        colorPaletteRows?: number;
        colorPaletteColumns?: number;
        showCustomTable?: boolean;
        value?: string;
        undoStackLimit?: number;
        allowResizing?: boolean;
        enablePersistence?: boolean;
        enableRTL?: boolean;
        change? (e: RTEChangeEvent): void;
        execute? (e: RTEExecuteEvent): void;
        keydown? (e: RTEKeyDownEvent): void;
        keyup? (e: RTEKeyUPEvent): void;
        create? (e: RTEEvent): void;
        destroy? (e: RTEEvent): void;
        resize? (e: RTEResizeEvent): void;
        resizeStart? (e: RTEResizeEvent): void;
        resizeStop? (e: RTEResizeEvent): void;
    }

    interface RTETools {
        formatStyle: Array<string>;
        style: Array<string>;
        alignment: Array<string>;
        lists: Array<string>;
        indenting: Array<string>;
        doAction: Array<string>;
        links: Array<string>;
        images: Array<string>;
        tables: Array<string>;
    }
    interface RTEFormat {
        text?: string;
        value?: string;
        spriteCssClass?: string;
    }

    interface RTEFontName {
        text?: string;
        value?: string;
    }
    interface RTEFontSize {
        text?: string;
        value?: string;
    }

    interface RTEEvent extends EJ.Core.BaseEvent {
        model: RTEOptions;
    }

    interface RTEChangeEvent extends EJ.Core.BaseEvent,RTEEvent {
        text: string;
        htmlText: HTMLElement;
    }
    interface RTEExecuteEvent extends EJ.Core.BaseEvent, RTEEvent {
        commandName: string;      
    }
      interface RTEKeyDownEvent extends EJ.Core.BaseEvent, RTEEvent {
          keyCode: number;      
      }
    interface RTEKeyUPEvent extends EJ.Core.BaseEvent, RTEEvent {
        keyCode: number;
    }
    interface RTEResizeEvent extends EJ.Core.BaseEvent, RTEEvent {
        event: Event;
    }
    //#endregion RTE

    //#region Slider
    class Slider extends EJ.Core.Widget {
        static fn: Slider;
        constructor(element: JQuery, options?: SliderOptions);
        constructor(element: Element, options?: SliderOptions);
        enable(): void;
        disable(): void;
        getValue(): number;
    }
    interface SliderOptions {
        orientation?: string;
        enableAnimation?: boolean;
        animationSpeed?: number;
        showTooltip?: boolean;
        cssClass?: string;
        showRoundedCorner?: boolean;
        readOnly?: boolean;
        enableRTL?: boolean;
        minValue?: number;
        maxValue?: number;
        sliderType?: string;
        value?: number;
        values?: Array<number>;
        incrementStep?: number;
        height?: string;
        width?: string;
        enabled?: boolean;
        showScale?: boolean;
        largeStep?: number;
        smallStep?: number;
        showSmallTicks?: boolean;
        enablePersistence?: boolean;
        start?(e: SliderEvent): void;
        stop?(e: SliderEvent): void;
        slide?(e: SliderEvent): void;
        change?(e: SliderEvent): void;
        create?(e: SliderEvent): void;
        destroy?(e: SliderEvent): void;

    }

    interface SliderEvent extends EJ.Core.BaseEvent {
        model: SliderOptions;
    }

    interface SliderStartEvent extends EJ.Core.BaseEvent, SliderEvent {
        id: string;
        value: number;
        sliderIndex: number;
    }

    interface SliderStopEvent extends EJ.Core.BaseEvent, SliderEvent, SliderStartEvent {
       
    }
    interface SliderSlideEvent extends EJ.Core.BaseEvent, SliderEvent, SliderStartEvent {
       
    }
    interface SliderChangeEvent extends EJ.Core.BaseEvent, SliderEvent, SliderStartEvent {
       
    }

    //#endregion Slider


     //#region SplitButton
    class SplitButton extends EJ.Core.Widget {
        static fn: SplitButton;
        constructor(element: JQuery, options?: SplitButtonOptions);
        constructor(element: Element, options?: SplitButtonOptions);
        enable(): void;
        disable(): void;        
    }
    interface SplitButtonOptions {
        size?: string;
        width?: number;
        height?: number;
        enabled?: boolean;
        text?: string;
        contentType?: string;
        imagePosition?: string;
        targetId?: string;
        showRoundedCorner?: boolean;
        prefixIcon?: string;
        suffixIcon?: string;
        cssClass?: string;
        enableRTL?: boolean;
        create? (e: SplitButtonBaseEvent): void;
        click? (e: SplitButtonEvent): void;
        itemMouseOver? (e: SplitButtonEvent): void;
        itemMouseOut? (e: SplitButtonEvent): void;
        itemSelected? (e: SplitButtonEvent): void;
        destroy? (e: SplitButtonBaseEvent): void;
    }

    interface SplitButtonBaseEvent extends EJ.Core.BaseEvent {
        model: SplitButtonOptions;
    }


    interface SplitButtonEvent extends EJ.Core.BaseEvent, SplitButtonBaseEvent {
        status: boolean;
    }
     //#endregion SplitButton

    //#region  Splitter
    class Splitter extends EJ.Core.Widget {
        static fn: Splitter;
        constructor(element: JQuery, options?: SplitterOptions);
        constructor(element: Element, options?: SplitterOptions);       
        refresh(): void;
        collapse(index: number): void;
        expand(index: number): void;
        addItem(content: string, property: SplitterPane, index: number);
        removeItem(index: number);
    }
    interface SplitterOptions {
        cssClass?: string;
        orientation?: string;
        properties?: Array<SplitterPane>;
        height?: number;
        width?: number;
        enableAutoResize?: boolean;
        enableRTL?: boolean;
        animationSpeed?: number;
        beforeExpandCollapse? (e: SplitterEvent): void;
        expandCollapse? (e: SplitterEvent): void;
        resize? (e: SplitterEvent): void;
        create? (e: SplitterBaseEvent): void;
        destroy? (e: SplitterBaseEvent): void;

    }

    interface SplitterPane {
        paneSize?: string;
        minSize?: string;
        maxSize?: string;
        collapsible?: boolean;
        resizable?: boolean;
    }

    interface SplitterBaseEvent extends EJ.Core.BaseEvent {
        model: SplitterOptions;
    }

    interface SplitterEvent extends EJ.Core.BaseEvent, SplitterBaseEvent {
        collapsed: boolean;
        expanded: boolean;
        splitbarIndex: number;
    }
    //#endregion Splitter


    //#region Tab
    class Tab extends EJ.Core.Widget {
        static fn: Tab;
        constructor(element: JQuery, options?: TabOptions);
        constructor(element: Element, options?: TabOptions);
        enable(index:number): void;
        disable(index: number): void;  
        showItem(index: number): void;  
        hideItem(index: number): void;  
        getItemsCount(): number;  
        addItem(url: string, displayLabel: string, index: number, cssClass?: string): void;
        removeItem(index: number): boolean;
        show(): void;
        hide(): void;
    }

    interface TabOptions {
        collapsible?: boolean;
        ajaxSettings: AjaxSettings;
        disabledItemIndex?: Array<number>;
        enabledItemIndex?: Array<number>;
        events?: string;
        idPrefix?: string;
        heightAdjustMode?: string;
        selectedItemIndex?: number;
        cssClass?: string;
        showCloseButton?: boolean;
        showReloadIcon?: boolean;
        headerPosition?: string;
        width?: number;
        height?: string;
        enableRTL?: boolean;
        allowKeyboardNavigation?: boolean;
        showRoundedCorner?: boolean;
        enablePersistence?: boolean;
        enabled?: boolean;
        ajaxLoad? (e: TabAjaxLoadEvent): void;
        ajaxBeforeLoad? (e: TabAjaxBeforeLoadEvent): void;
        ajaxSuccess? (e: TabAjaxSuccessEvent): void;
        ajaxError? (e: TabAjaxErrorEvent): void;
        itemActive? (e: TabActiveEvent): void;
        beforeActive? (e: TabBeforeActiveEvent): void;
        itemAdd? (e: TabItemAddEvent): void;
        itemRemove? (e: TabItemRemoveEvent): void;
        beforeItemRemove? (e: TabBeforeItemRemoveEvent): void;     
        create? (e: TabBaseEvent): void;
        destroy? (e: TabBaseEvent): void;      
    }

    interface TabBaseEvent extends EJ.Core.BaseEvent {
        model: TabOptions;
    }
    interface TabActiveEvent extends EJ.Core.BaseEvent, TabBaseEvent {
        prevActiveHeader: JQuery;
        prevActiveIndex: number;
        activeHeader: JQuery;
        activeIndex: number;
    }

    interface TabBeforeActiveEvent extends EJ.Core.BaseEvent, TabBaseEvent, TabActiveEvent {
       
    }
    interface TabItemAddEvent extends EJ.Core.BaseEvent, TabBaseEvent {
        tabHeader: JQuery;
        tabContent: JQuery;
    }
    interface TabItemRemoveEvent extends EJ.Core.BaseEvent, TabBaseEvent {
        removedTab: JQuery;      
    }
     interface TabBeforeItemRemoveEvent extends EJ.Core.BaseEvent, TabBaseEvent {
        index: number;      
     }
    interface TabAjaxSuccessEvent extends EJ.Core.BaseEvent, TabBaseEvent {
        data: any;
        url: string;
        content: JQuery;
    }
    interface TabAjaxErrorEvent extends EJ.Core.BaseEvent, TabBaseEvent {
        data: any;
        url: string;        
    }
    interface TabAjaxBeforeLoadEvent extends EJ.Core.BaseEvent, TabBaseEvent, TabActiveEvent {        
        url: string;
    }
    interface TabAjaxLoadEvent extends EJ.Core.BaseEvent, TabBaseEvent, TabActiveEvent {
        url: string;
    }
    //#endregion Tab

    //#region TagCloud
    class TagCloud extends EJ.Core.Widget {
        static fn: TagCloud;
        constructor(element: JQuery, options?: TagCloudOptions);
        constructor(element: Element, options?: TagCloudOptions);      
        show(): void;
        hide(): void;
        insert(tag: TagCloudField): void;
        insertAt(tag: TagCloudField, position:number): void;
        remove(text: string): void;
        removeAt(position: number): void;
    }
    interface TagCloudOptions {
        cssClass?: string;
        dataSource?: any;
        query?: any;
        fields?: TagCloudField;
        showTitle?: boolean;
        titleText?: string;
        titleImage?: string;
        format?: string;
        enableRTL?: boolean;
        minFontSize?: string;
        maxFontSize?: string;
        mouseover?(e: TagCloudEvent): void;
        mouseout?(e: TagCloudEvent): void;
        click?(e: TagCloudEvent): void;
        create?(e: TagCloudBaseEvent): void;
        destroy?(e: TagCloudBaseEvent): void;

    }

    interface TagCloudField {
        text?: string;
        url?: string;
        frequency?: number;
    }

    interface TagCloudBaseEvent extends EJ.Core.BaseEvent {
        model: TagCloudOptions;
    }

    interface TagCloudEvent extends EJ.Core.BaseEvent, TagCloudBaseEvent {
        value: HTMLElement;
        url: string;
        eventType: any;
    }

    //#endregion TagCloud


    //#region TimePicker
    class TimePicker extends EJ.Core.Widget {
        static fn: TimePicker;
        constructor(element: JQuery, options?: TimePickerOptions);
        constructor(element: Element, options?: TimePickerOptions);
        enable(): void;
        disable(): void;
        getValue(): string;
        setCurrentTime(): void;
        remove(text: string): void;
        removeAt(position: number): void;
    }

    interface TimePickerOptions {
        cssClass?: string;
        timeFormat?: string;
        value?: string;
        locale?: string;
        readOnly?: boolean;
        showPopupButton?: boolean;
        interval?: number;
        hourInterval?: number;
        minutesInterval?: number;
        secondsInterval?: number;
        height?: number;
        width?: number;
        minTime?: string;
        maxTime?: string;
        showRoundedCorner?: boolean;
        enableRTL?: boolean;
        popupHeight?: string;
        popupWidth?: string;
        enabled?: boolean;
        enablePersistence?: boolean;
        focusIn? (e: TimePickerEvent): void;
        focusOut? (e: TimePickerEvent): void;
        change? (e: TimePickerEvent): void;
        select? (e: TimePickerEvent): void;
        create? (e: TimePickerBaseEvent): void;
        destroy? (e: TimePickerBaseEvent): void;
        beforeOpen? (e: TimePickerEvent): void;
        open? (e: TimePickerEvent): void;
        close? (e: TimePickerEvent): void;
    }

    interface TimePickerBaseEvent extends EJ.Core.BaseEvent {
        model: TimePickerOptions;
    }
    interface TimePickerEvent extends EJ.Core.BaseEvent, TimePickerBaseEvent {        
        value: string;
        prevTime: string;
    }
    
    //#endregion TimePicker

    //#region ToggleButton
    class ToggleButton extends EJ.Core.Widget {
        static fn: ToggleButton;
        constructor(element: JQuery, options?: ToggleButtonOptions);
        constructor(element: Element, options?: ToggleButtonOptions);
        enable(): void;
        disable(): void;     
    }
    interface ToggleButtonOptions {
        size?: string;
        type?: string;
        width?: number;
        height?: number;
        enabled?: boolean;
        toggleState?: boolean;
        defaultText?: string;
        preventToggle?: boolean;
        activeText?: string;
        contentType?: string;
        imagePosition?: string;
        showRoundedCorner?: boolean;
        enablePersistence?: boolean;
        cssClass?: string;
        defaultPrefixIcon?: string;
        defaultSuffixIcon?: string;
        activePrefixIcon?: string;
        activeSuffixIcon?: string;
        enableRTL?: boolean;
        create? (e: ToggleButtonBaseEvent): void;
        click? (e: ToggleButtonClickEvent): void;
        change? (e: ToggleButtonChangeEvent): void;
        destroy? (e: ToggleButtonBaseEvent): void;
    }

    interface ToggleButtonBaseEvent extends EJ.Core.BaseEvent {
        model: ToggleButtonOptions;
    }

    interface ToggleButtonClickEvent extends EJ.Core.BaseEvent, ToggleButtonBaseEvent {
        isChecked: boolean;
        status: boolean;
    }
    interface ToggleButtonChangeEvent extends EJ.Core.BaseEvent, ToggleButtonBaseEvent {
        isChecked: boolean;        
    }

    //#endregion ToggleButton

    //#region ToolBar
    class Toolbar extends EJ.Core.Widget {
        static fn: ToggleButton;
        constructor(element: JQuery, options?: ToolbarOptions);
        constructor(element: Element, options?: ToolbarOptions);
        enable(): void;
        disable(): void;
        show(): void;
        hide(): void;
        disableItem(element: Element): void;
        disableItemByID(id: string): void;
        enableItem(element: Element): void;
        enableItemByID(id: string): void;
        selectItem(element: Element): void;
        selectItemByID(id: string): void;
        deselectItem(element: Element): void;
        deselectItemByID(id: string): void;
        removeItem(element: Element): void;
        removeItemByID(id: string): void;
        
    }
    interface ToolbarOptions {
        height?: number;
        width?: number;
        enabled?: boolean;
        hide?: boolean;
        enableSeprator?: boolean;
        orientation?: string;
        enableRTL?: boolean;
        showRoundedCorner?: boolean;
        dataSource?: any;
        query?: any;
        fields?: ToolbarFields;
        group?: string;
        create? (e: ToolbarBaseEvent): void;
        click? (e: ToolbarEvent): void;
        itemHover? (e: ToolbarEvent): void;
        itemLeave? (e: ToolbarEvent): void;
        destroy? (e: ToolbarBaseEvent): void;
    }
    interface ToolbarFields {
        id?: string;
        tooltipText?: string;
        imageUrl?: string;
        text?: string;
        imageAttributes?: string;
        spriteCssClass?: string;
        htmlAttributes?: any;
        group?: any;
    }

    interface ToolbarBaseEvent extends EJ.Core.BaseEvent {
        model: ToolbarOptions;
    }
    interface ToolbarEvent extends EJ.Core.BaseEvent, ToolbarBaseEvent {
        currentTarget: JQuery;
        target: JQuery;
        status: boolean;
    }   
    //#endregion ToolBar


    //#region TreeView
    class TreeView extends EJ.Core.Widget {
        static fn: TreeView;
        constructor(element: JQuery, options?: TreeViewOptions);
        constructor(element: Element, options?: TreeViewOptions);
        enable(): void;
        disable(): void;
        refresh(): void;
        expandAll(): void;
        collapseAll(): void;
        checkAll(): void;
        unCheckAll(): void;
        getSelectedNode(): void;
        getText(node: Element): Element;
        selectNode(node: Element): void;
        unselectNode(node: Element): void;
        enableNode(node: Element): void;
        disableNode(node: Element): void;
        addNodes(collection: any, targetNode: Element): void;
        addNode(newNodeText: string, nodeUrl: string, targetNode: Element): void;
        removeNode(Element): void;
        getCheckedNodes(): JQuery;
        checkNode(node: Element):void;
        unCheckNode(node: Element): void;
        expandNode(node: Element): void;
        collapseNode(node: Element): void;
        showNode(node: Element): void;
        hideNode(node: Element): void;
        show(): void;
        hide(): void;
        isNodeChecked(node: Element): boolean;
        isExpanded(node: Element): boolean;
        hasChildNode(node: Element): boolean;
    }

    interface TreeViewOptions {
        showCheckbox?: boolean;
        allowDragAndDrop?: boolean;
        allowDropChild?: boolean;
        allowDropSibling?: boolean;
        allowDragAndDropAcrossControl?: boolean;
        allowEditing?: boolean;
        allowKeyboardNavigation?: boolean;
        items?: TreeViewItem;
        autoCheckParentNode?: boolean;
        loadOnDemand?: boolean;
        cssClass?: string;
        template?: string;
        enableRTL?: boolean;
        expandOn?: string;
        enablePersistence?: boolean;
        enabled?: boolean;
        expandedNodes?: Array<number>;
        width?: number;
        height?: number;
        nodeClick? (e: TreeViewClickEvent): void;
        beforeExpand? (e: TreeViewNodeBeforeExpandEvent): void;
        nodeExpand? (e: TreeViewNodeExpandEvent): void;
        beforeCollapse? (e: TreeViewBeforeCollapseEvent): void;
        nodeCollapse? (e: TreeViewNodeCollapseEvent): void;
        nodeSelect? (e: TreeViewNodeSelectEvent): void;
        nodeCheck? (e: TreeViewNodeCheckEvent): void;
        nodeUncheck? (e: TreeViewNodeUnCheckEvent): void;
        inlineEditValidation? (e: TreeViewInlineEditValidationEvent): void;
        beforeEdit? (e: TreeViewBeforeEditEvent): void;
        keyPress? (e: TreeViewKeyPressEvent): void;
        nodeDragStart? (e: TreeViewDragStartEvent): void;
        nodeDrag? (e: TreeViewNodeDragEvent): void;
        nodeDragStop? (e: TreeViewNodeDragStopEvent): void;
        nodeDropped? (e: TreeViewNodeDroppedEvent): void;
        create? (e: TreeViewBaseEvent): void;
        destroy? (e: TreeViewBaseEvent): void;
    }
    interface TreeViewItem {
        id?: string;
        text?: string;
        spriteCssClass?: string;
        expanded?: string;
        childItems?: string;
        selected?: string;
        linkAttribute?: string;
        value?: string;
        imageAttribute?: string;
        htmlAttribute?: any;
        imageUrl?: string;
    }
    interface TreeViewBaseEvent extends EJ.Core.BaseEvent {
        model: TreeViewOptions;
    }
    interface TreeViewBeforeEditEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {
        currentElement: Element;
    }
    interface TreeViewInlineEditValidationEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {
        nodeId: string;
        oldText: string;
        newText: string;
    }
    interface TreeViewKeyPressEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {
        keyCode: number;
        currentElement: Element;
        value: string;
        isExpanded: boolean;
        path: string;
        event: Event;
    }
    interface TreeViewNodeExpandEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {       
        currentElement: Element;
        value: string;
        isChildLoaded: boolean;        
    }
    interface TreeViewNodeCollapseEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {
        currentElement: Element;
        value: string;       
    }
    interface TreeViewNodeBeforeExpandEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {
        id: string;
        value: string;
        isChildLoaded?: boolean;
    }
    interface TreeViewBeforeCollapseEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {
        currentElement: Element;
        value: string;
    }
    interface TreeViewNodeSelectEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {
        currentElement: Element;
        value: string;
    }
    interface TreeViewNodeCheckEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {
        currentElement: Element;
        value: string;
        isChecked: boolean;
        event: Event;
    }
    interface TreeViewNodeUnCheckEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {
        currentElement: Element;
        value: string;
        isChecked: boolean;
        event: Event;
    }
    interface TreeViewDragStartEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {
        target: Element;       
        event: Event;
    }
    interface TreeViewNodeDragEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {
        target: Element;
        event: Event;
    }
    interface TreeViewNodeDragStopEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {
        target: Element;
        event: Event;
    }
    interface TreeViewNodeDroppedEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {
        target: Element;
        event: Event;
        dropedElement: Element;
    }
    interface TreeViewClickEvent extends EJ.Core.BaseEvent, TreeViewBaseEvent {
        currentElement: Element;
        event: Event;
    }
    //#endregion TreeView


    //#region Uploadbox
    class Uploadbox extends EJ.Core.Widget {
        static fn: Uploadbox;
        constructor(element: JQuery, options?: UploadboxOptions);
        constructor(element: Element, options?: UploadboxOptions);
        enable(): void;
        disable(): void;
    }
    interface UploadboxOptions {
        buttonText?: UploadboxButtonText;
        dialogText?: UploadboxDialogText;
        asyncUpload?: boolean;
        enabled?: boolean;
        multipleFilesSelection?: boolean;
        autoUpload?: boolean;
        showFileDetails?: boolean;
        extensionsAllow?: string;
        extensionsDeny?: string;
        saveUrl?: string;
        removeUrl?: string;
        cssClass?: string;
        enableRTL?: boolean;
        create? (e: UploadboxBaseEvent): void;
        fileSelect? (e: UploadboxBaseEvent): void;
        begin? (e: UploadboxBaseEvent): void;
        cancel? (e: UploadboxCancelEvent): void;
        complete? (e: UploadboxCompleteEvent): void;
        remove? (e: UploadboxRemoveEvent): void;
        error? (e: UploadboxErrorEvent): void;
        destroy? (e: UploadboxBaseEvent): void;
    }
	
	interface UploadboxButtonText {
        browse?: string;
        cancel?: string;
        upload?: string;        
    }
	
	interface UploadboxDialogText {
        title?: string;
        name?: string;
        size?: string;
		status?: string;
    }
	
    interface UploadboxBaseEvent extends EJ.Core.BaseEvent {
        model: UploadboxOptions;
    }
    interface UploadboxRemoveEvent extends EJ.Core.BaseEvent, UploadboxBaseEvent {
        fileStatus: boolean;
    }
    interface UploadboxCancelEvent extends EJ.Core.BaseEvent, UploadboxBaseEvent {
        fileStatus: boolean;
    }
    interface UploadboxErrorEvent extends EJ.Core.BaseEvent, UploadboxBaseEvent {
        action: string;
        files: any;
    }
    interface UploadboxCompleteEvent extends EJ.Core.BaseEvent, UploadboxBaseEvent {
        xhr: JQueryXHR;
        files: any;
        e: Event;
    }
    //#endregion Uploadbox

    //#region WaitingPopup
    class WaitingPopup extends EJ.Core.Widget {
        static fn: WaitingPopup;
        constructor(element: JQuery, options?: WaitingPopupOptions);
        constructor(element: Element, options?: WaitingPopupOptions);     
        show(): void;
        hide(): void;
        refresh(): void;
    }
    interface WaitingPopupOptions {
        showOnInit?: boolean;
        showImage?: boolean;
        cssClass?: string;
        text?: string;
        template?: string;
        create? (e: WaitingPopupOptions): void;
        destroy? (e: WaitingPopupOptions): void;
    }

    interface WaitingPopupEvent extends EJ.Core.BaseEvent {
        model: WaitingPopupOptions;
    }

    //#endregion WaitingPopup

     //#region Schedule
    class Schedule extends EJ.Core.Widget {
        static fn: Schedule;
        constructor(element: JQuery, options?: ScheduleOptions);
        constructor(element: Element, options?: ScheduleOptions);
        deleteAppointment(id:string): void;
        saveAppointment(appointment: Object): void;
        getAppointments(): Array<ScheduleAppointmentSettings>;        
    }
    interface ScheduleOptions {
        timezoneCollection?: Array<ScheduleTimeZone>
        views?: Array<string>;
        currentView?: string;
        timeMode?: string;
        timeZone?: string;
        startHour?: number;
        endHour?: number;
        highlightBusinessHours?: boolean;
        showQuickWindow?: boolean;
        businessStartHour?: boolean;
        businessEndHour?: boolean;
        width?: number;
        height?: number;
        currentDate?: Date;
        cssClass?: string;
        locale?: string;
        enableResize?: boolean;
        enableRTL?: boolean;
        enableAppointmentNavigation?: boolean;
        appointmentTemplateId?: string;
        allowDragDrop?: boolean;
        enableAppointmentResize?: boolean;
        showCurrentTimeIndicator?: boolean;
        reminderSettings?: ScheduleRemainderSetting;
        contextMenuSettings?: ScheduleContextMenuSettings
        group?: ScheduleGroup;
        resources?: Array<ScheduleResource>;
        allowKeyboardNavigation?: boolean;
        appointmentSettings?: ScheduleAppointmentSettings;
        cellClick? (e: ScheduleCellClickEvent): void;
        appointmentClick? (e: ScheduleAppointmentClickEvent): void;
        cellDoubleClick? (e: ScheduleCellDoubleClickEvent): void;
        appointmentWindowOpen? (e: ScheduleCellClickEvent): void;
        appointmentSaved? (e: ScheduleAppointmentSavedEvent): void;
        appointmentEdited? (e: ScheduleAppointmentEditedEvent): void;
        appointmentDeleted? (e: ScheduleAppointmentDeletedEvent): void;
        navigation? (e: ScheduleNavigationEvent): void;
        dragStart? (e: ScheduleDragStartEvent): void;
        dragOver? (e: ScheduleDragOverEvent): void;
        dragDrop? (e: ScheduleDragDropEvent): void;
        resizeStart? (e: ScheduleResizeStartEvent): void;
        resizing? (e: ScheduleResizingEvent): void;
        resizeStop? (e: ScheduleResizeStopEvent): void;
        menuItemClick? (e: ScheduleMenuItemEvent): void;
        beforeContextMenuOpen? (e: ScheduleBeforeContextMenuOpenEvent): void;
        reminder? (e: ScheduleReminderEvent): void;
        create? (e: ScheduleBaseEvent): void;
        destroy? (e: ScheduleBaseEvent): void;
    }

    interface ScheduleTimeZone {
        text?:string;
        value?: string;
    }
    interface ScheduleRemainderSetting {
        enable?: boolean;
        alertBefore?: number;
    }
    interface ScheduleContextMenuSettings {
        enable?: boolean;
        menuItems?: ScheduleMenuItems;
    }
    interface ScheduleMenuItems {
        appointment?: Array<ScheduleMenuItem>;
        cells?: Array<ScheduleMenuItem>;
    }
    interface ScheduleMenuItem {
        id?: string;
        text?: string;
        parentId?: string;
    }
    interface ScheduleGroup {
        resources?:Array<ScheduleResource>;
    }
    interface ScheduleResource {
        field?: string;
        title?: string;
        name?: string;
        allowMultiple?: boolean;
        resourceSettings?: SchedulResourceSettings;
    }
    interface SchedulResourceSettings {
        dataSource?: any;
    }
    interface ScheduleAppointmentSettings {
        dataSource?: any;
        query?: any;
        tableName?: any;
        id?: string;
        subject?: string;
        description?: string;
        startTime?: string;
        endTime?: string;
        recurrence?: string;
        recurrenceRule?: string;
        allDay?: string;
        resourceFields?: string;
    }
    interface ScheduleBaseEvent extends EJ.Core.BaseEvent {
        model: ScheduleOptions;
    }
    interface ScheduleCellClickEvent extends  ScheduleBaseEvent {
        startTime?: Date;
        endTime?: any;
        target?: Event;
    }
    interface ScheduleCellDoubleClickEvent extends ScheduleBaseEvent, ScheduleCellClickEvent {      
    }
    interface ScheduleAppointmentClickEvent extends ScheduleBaseEvent {
        appointment?: ScheduleAppointmentSettings;       
    }
    
    interface ScheduleReminderEvent extends ScheduleBaseEvent {
        reminderAppointment?: number;
    }
    interface ScheduleBeforeContextMenuOpenEvent extends ScheduleBaseEvent {  
        events: any;    
    }
    interface ScheduleMenuItemEvent extends ScheduleBaseEvent {
        events: any;
    }
    
    interface ScheduleNavigationEvent extends ScheduleBaseEvent {
        prevView: any;
        currentView: string;
        Date: Date;
        target: Event;        
    }
    interface ScheduleAppointmentDeletedEvent extends ScheduleBaseEvent {
        appointment: ScheduleAppointmentSettings;
    }

    interface ScheduleAppointmentEditedEvent extends ScheduleBaseEvent {
        appointment: ScheduleAppointmentSettings;
    }
    interface ScheduleAppointmentSavedEvent extends ScheduleBaseEvent {
        appointment: ScheduleAppointmentSettings;
    }
    interface ScheduleDragStartEvent extends ScheduleBaseEvent {
        target: any;
    }
    interface ScheduleDragOverEvent extends ScheduleBaseEvent {
        target: any;
    }
    interface ScheduleDragDropEvent extends ScheduleBaseEvent {
        appointment: any;
    }
    interface ScheduleResizeStartEvent extends ScheduleBaseEvent {
        element: JQuery;
    }

    interface ScheduleResizingEvent extends ScheduleBaseEvent {
        element: JQuery;
    }
    interface ScheduleResizeStopEvent extends ScheduleBaseEvent {
        appointment: ScheduleAppointmentSettings;
        target: Event;
    }
     //#endregion Schedule

    //#region Grid
    class Grid extends EJ.Core.Widget {
        static fn: Grid;
        constructor(element: JQuery, options?: GridOptions);
        constructor(element: Element, options?:GridOptions);
        addRecord(data: Array<any>): void;
        addRow(): void;
        batchCancel(): void;
        batchSave(): void;
        cancelEdit(): void;
        clearSelection(index?: number): void;
        clearSorting(): void;
        collapseAll(): void;
        collapseGroupDropArea(): void;
        columns(columndetails: any, action?: string): void;
        dataSource(datasource: any): void;
        deleteRecord(fieldName: string, data: any): void;
        deleteRow(tr: JQuery): void;
        editCell(index: number, fieldName: string): void;
        endEdit(): void;
        expandAll(): void;
        expandCollapse(target: JQuery): void;
        expandGroupDropArea(): void;
        filterColumn(fieldName: string, filterOperator: string, filterValue: string, predicate: string, matchcase: boolean): void;
        getBatchChanges(): void;
        getBrowserDetails(): string;
        getColumnByField(fieldName:string): GridColumn;
        getColumnByHeaderText(fieldName: string): GridColumn;
        getColumnByIndex(columnIndex: number): GridColumn;
        getColumnFieldNames(): any;
        getColumnIndexByField(fieldName: string): number;
        getContent(): Element;
        getContentTable(): Element;
        getCurrentEditCellData(): any;
        getCurrentIndex(): number;
        getCurrentViewData(): any;
        getFieldNameByHeaderText(headerText: string): string;
        getFilterBar(): Element;
        getFooterContent(): Element;
        getFooterTable(): Element;
        getHeaderContent(): Element;
        getHeaderTable(): Element;
        getHeaderTextByFieldName(field: string): string;
        getHiddenColumnNames(): Array<string>;
        getIndexByRow(tr: Element): number;
        getPager(): Element;
        getRowByIndex(from: number, to: number): Element;
        getRowHeight(): number;
        getRows(): Array<Element>;
        getScrollObject(): any;
        getSelectedRecords(): any;
        getVisibleColumnNames(): Array<string>;
        gotoPage(index: number): void;
        groupColumn(fieldName: string): void;
        hideColumns(headerText: string): void;
        refreshBatchEditChanges(): void;
        refreshContent(templateRefresh?: boolean); void;
        refreshTemplate(): void;
        refreshToolbar(): void;
        removeSortedColumns(fieldName: string): void;
        render(): void;
        reorderColumns(fromFieldName: string, toFieldName: string): void;
        resetModelCollections(): void;
        search(searchstring: string): void;
        selectRows(from: number, to: number): void;
        set_currentPageIndex(value: number): void;
        set_dropColumn(from: number, to: number): void;
        setValidationToField(fieldName: string, rules: any): void;
        showColumns(headerText: string): void;
        sortColumn(columnName: string, sortingdirection: string): void;
        startEdit(tr: JQuery): void;
        ungroupColumn(fieldName: string): void;
        updateRecord(fieldName: string, data: any): void;        
    }
    interface GridOptions {
        allowPaging?: boolean;
        allowSorting?: boolean;
        allowFiltering?: boolean;
        allowSelection?: boolean;
        allowGrouping?: boolean;
        showSummary?: boolean;
        allowResizing?: boolean;
        enableRowHover?: boolean;
        enablePersistence?: boolean;
        selectedRowIndex?: number;
        allowSearching?: boolean;
        enableHeaderHover?: boolean;
        allowReordering?: boolean;
        allowKeyboardNavigation?: boolean;
        selectionType?: string;
        dataSource?: any;
        cssClass?: string;
        allowScrolling?: boolean;
        locale?: string;
        enableAutoSaveOnSelectionChange?: boolean;
        allowMultiSorting?: boolean;
        editSettings?: GridEditSettings;
        pageSettings?: GridPageSettings;
        groupSettings?: GridGroupSettings;
        filterSettings?: GridFilterSettings;
        sortSettings?: GridSortSettings;
        toolbarSettings?: GridToolbarSettings;
        scrollSettings?: GridScrollSettings;
        summaryRows?: Array<SummaryRow>;
        enableRTL?: boolean;
        enableAltRow?: boolean;
        currentViewData?: any;
        detailsTemplate?: string;
        rowTemplate?: string;
        columns?: Array<GridColumn>;
        query?: any;
        isEdit?: boolean;
        detailsDataBound? (e: GridDetailsDataBoundEvent): void;
        rowDataBound? (e: GridRowDataBoundEvent): void;
        queryCellInfo? (e: GridQueryCellInfoEvent): void;
        create? (e: GridBaseEvent): void;
        actionBegin? (e: GridActionBeginEvent): void;
        actionComplete? (e: GridActionCompleteEvent): void;
        beginEdit? (e: GridBeginEdit): void;
        endEdit? (e: GridEndEditEvent): void;
        endAdd? (e: GridEndAddEvent): void;
        endDelete? (e: GridEndDeleteEvent): void;
        rowSelecting? (e: GridRowSelectingEvent): void;
        rowSelected? (e: GridRowSelectedEvent): void;
        columnDragStart? (e: GridDragStartEvent): void;
        columnDrag? (e: GridDragEvent): void;
        columnDrop? (e: GridDragStopEvent): void;
        recordClick? (e: GridRecordClickEvent): void;
        recordDoubleClick? (e: GridRecordDoubleClickEvent): void;
        rightClick? (e: GridRightClickEvent): void;
        detailsCollapse? (e: GridDetailsCollapseEditEvent): void;
        detailsExpand? (e: GridDetailsExpandEvent): void;
        toolbarClick? (e: GridToolBarClickEvent): void;
        destroy? (e: GridBaseEvent): void;
        beforeBatchDelete(e: GridBatchEvent): void; 
        beforeBatchAdd(e: GridBatchEvent): void;
        batchDelete(e: GridBatchEvent): void;
        batchAdd(e: GridBatchEvent): void;
        beforeBatchSave(e: GridBatchEvent): void;
    }
    //#region interfaces
    interface GridEditSettings {
        allowEditing?: boolean;
        allowAdding?: boolean;
        allowDeleting?: boolean;
        editMode?: string;
        dialogEditorTemplateID?: string;
        allowEditOnDblClick?: string;
        externalFormTemplateID?: string;
        inlineFormTemplateID?: string;
        formPosition?: string;
    }
    interface GridPageSettings {
        pageSize?: number;
        pageCount?: number;
        currentPage?: number;
        totalRecordsCount?: number;
        enableQueryString?: boolean;
    }

    interface GridGroupSettings {
        showToggleButton?: boolean;
        enableDropAreaAnimation?: boolean;
        showGroupedColumn?: boolean;
        showUngroupButton?: boolean;
        enableDropAreaAutoSizing?: boolean;
        groupedColumns?: Array<string>;        
    }
    interface GridFilterSettings {
        filterType?: string;
        filterBarMode?: string;
        showFilterBarStatus?: boolean;
        statusBarWidth?: number;
        showPredicate?: boolean;
        filteredColumns?: Array<string>;

    }

    interface GridSortSettings {
        sortedColumns?: Array<SortedColumn>;
    }
    interface SortedColumn {
        field?: string;
        direction?: string;
    }
    interface GridToolbarSettings {
        showToolbar?: boolean;
        toolbarItems?: Array<string>;
        customToolbarItems?: Array<any>;
    }
    interface GridScrollSettings {
        width?: number;
        height?: number;
        allowVirtualScrolling?: boolean;
        frozenRows?: number;
        frozenColumns?: number;
    }

    interface SummaryRow {
        title?: string;
        summaryColumns?: Array<SummaryColumn>;
    }
    interface SummaryColumn {
        summaryType?: string;
        displayColumn?: string;
        dataMember?: string;
        customSummaryValue?: string;
        prefix?: string;
        suffix?: string;
        format?: string;
    }

    interface GridColumn {
        field?: string;
        headerText?: string;
        allowGrouping?: boolean;
        allowFiltering?: boolean;
        allowSorting?: boolean;
        allowEditing?: boolean;
        isUnbound?: boolean;
        template?: boolean;
        templateID?: string;
        editType?: string;
        editParams?: GridEditParams;
        textAlign?: string;
        isPrimaryKey?: boolean;
        isIdentity?: boolean;
        visible?: boolean;
        cssClass?: string;
        defaultValue?: string;
        headerTemplateID?: string;
        width?: number;
        foreignKeyField?: string;
        foreignKeyValue?: string;
        dataSource?: any;
        validationRules?: any;
        format?: string;
        customAttributes?: any;
        commands?: Array<GridCommand>;
    }
    interface GridEditParams {
        decimalCount?: number;
    }
    interface GridCommand {
        type?: string;
        buttonOptions?: GridButtonOptions;
    }

    interface GridButtonOptions {
        text?: string;
    }
    
    //#endregion interfaces
    interface GridBaseEvent extends EJ.Core.BaseEvent {
        model: GridOptions;
    }
    interface GridActionBeginEvent extends GridBaseEvent {
        currentPage?: number;
        endIndex?: number;
        requestType?: number;
        startIndex?: number;
        columnName?: number;
        columnSortDirection?: number;
        currentTr?: HTMLTableRowElement;
        originalEventType?: string;
        primaryKey?: string;
        primaryKeyValue?: string;
        rowIndex?: number;
        foreignKeyData?: any;
        data?: any;
        tr?: HTMLTableRowElement;
        currentFilteringColumn?: any;
        filterCollection?: any;
    }
    interface GridActionCompleteEvent extends GridBaseEvent {
        requestType?: string;
        currentPage?: number;
        endIndex?: number;
        originalEventType?: string;
        startIndex?: number;
        target?: Element;
        columnName?: string;
        columnSortDirection?: string;
        currentTr?: HTMLTableRowElement;
        primaryKey?: string;
        primaryKeyValue?: string;
        rowIndex?: number;
        data?: any;
        foreignKeyData?: any;
        tr?: HTMLTableRowElement;
        currentFilteringColumn?: any;
        filterCollection?: any;
    }
    interface GridBeginEdit extends GridBaseEvent {
        currentTr: HTMLTableRowElement;
        primaryKey: string;
        primaryKeyValue: string;
        rowIndex: number;
    }
    interface GridDetailsCollapseEditEvent extends GridBaseEvent {
        detailRow: HTMLTableRowElement;
        masterData: any;
        foreignKeyData: any;
        masterRow: HTMLTableRowElement;
    }

    interface GridDetailsDataBoundEvent extends GridBaseEvent {
        templateDetail?: HTMLTableRowElement;
    }
    interface GridDetailsExpandEvent extends GridBaseEvent {
        detailRow?: HTMLTableRowElement;
        masterData?: any;
        foreignKeyData?: any;
        masterRow?: HTMLTableRowElement;
    }

    interface GridDragEvent extends GridBaseEvent {
        draggableType?: any;
        target?: Element;
    }
    interface GridDragStartEvent extends GridBaseEvent {
        draggableType?: any;
        target?: Element;
    }
    interface GridDragStopEvent extends GridBaseEvent {
        draggableType?: any;
        target?: Element;
    }
    interface GridEndAddEvent extends GridBaseEvent {        
    }
    interface GridEndDeleteEvent extends GridBaseEvent {
    }
    interface GridEndEditEvent extends GridBaseEvent {
    }
    interface GridQueryCellInfoEvent extends GridBaseEvent {
        Element?: Element;
        data?: any;
        foreignKeyData?: any;
    }
    interface GridRecordClickEvent extends GridBaseEvent {
        currentData?: any;
        currentRowIndex?: number;
        currrentRow?: HTMLTableRowElement;
    }
    interface GridRecordDoubleClickEvent extends GridBaseEvent {
        currentData?: any;
        currentRowIndex?: number;
        currrentRow?: HTMLTableRowElement;
    }
    interface GridRightClickEvent extends GridBaseEvent {
        currentData?: any;
        currentRowIndex?: number;
        currrentRow?: HTMLTableRowElement;
    }
    interface GridRowSelectedEvent extends GridBaseEvent {
        currentData?: any;
        foreignKeyData?: any;
        currentRowIndex?: number;
        currrentRow?: HTMLTableRowElement;
    }
    interface GridRowSelectingEvent extends GridBaseEvent {
    }
    interface GridToolBarClickEvent extends GridBaseEvent {
        currentTarget?: any;
        status?: boolean;
        target?: any;
    }
    interface GridRowDataBoundEvent extends GridBaseEvent {
        data?: any;
        foreignKeyData?: any;
        Element?: HTMLTableRowElement;       
    }
    interface GridBatchEvent extends GridBaseEvent {
        batchChanges: any;
    }
    //#endregion Grid
    class Gantt extends EJ.Core.Widget {
        static fn: Gantt;
        constructor(element: JQuery, options?: GanttOptions);
        defaults: GanttOptions;
    }

    interface GanttOptions {
        allowSorting?: boolean;
        allowColumnResize?: boolean;
        allowSelection?: boolean;
        dataSource?: any;
        query?: string;
        taskIdMapping?: string;
        parentTaskIdMapping?: string;
        taskNameMapping?: string;
        startDateMapping?: string;
        endDateMapping?: string;
        baselineStartDateMapping?: string;
        baselineEndDateMapping?: string;
        childMapping?: string;
        durationMapping?: string;
        mileStoneMapping?: string;
        progressMapping?: string;
        predecessorMapping?: string;
        resourceInfoMapping?: string;
        resources?: Array<any>;
        holidays?: Array<any>;
        highlightWeekends?: boolean;
        scheduleStartDate?: string;
        scheduleEndDate?: string;
        enableProgressBarResizing?: boolean;
        rowHeight?: number;
        includeWeekend?: boolean;
        toolbarSettings?: { showToolbar?: boolean; toolbarItems?: Array<any> };
        stripLines?: Array<any>;
        scheduleHeaderSettings?: { weekHeaderFormat?: string; dayHeaderFormat?: string; weekendBackground?: string };
        taskbarBackground?: string;
        progressbarBackground?: string;
        connectorLineBackground?: string;
        parentTaskbarBackground?: string;
        parentProgressbarBackground?: string;
        connectorlineWidth?: number;
        showTaskNames?: boolean;
        showGridCellTooltip?: boolean;
        showGridExpandCellTooltip?: boolean;
        showProgressStatus?: boolean;
        showResourceNames?: boolean;
        enableTaskbarDragTooltip?: boolean;
        enableTaskbarTooltip?: boolean;
        editSettings?: { allowEditing?: boolean; allowAdding?: boolean; allowDeleting?: boolean; editMode?: string };
        ganttRecords?: Array<any>;
        parentRecords?: Array<any>;
        allowKeyboardNavigation?: boolean;
        cssClass?: string;
        locale?: string;
        allowMultiSorting?: boolean;
        sortSettings?: { sortedColumns?: Array<any> };
        enableAltRow?: boolean;
        enableVirtualization?: boolean;
        progressbarHeight?: number;
        taskbarTooltipTemplate?: string;
        progressbarTooltipTemplate?: string;
        taskbarTooltipTemplateId?: string;
		dateFormat?:string;
        resourceIdMapping?: string;
        resourceNameMapping?: string;
        progressbarTooltipTemplateId?: string;
        taskbarEditingTooltipTemplateId?: string;
        taskbarEditingTooltipTemplate?: string;
        selectedRowIndex?: number;
        allowGanttChartEditing?: boolean;
        sizeSettings?: { height?: string; width?: string };
        selectedItem?: any;
        weekendBackground?: string;
        baselineColor?: string;
        renderBaseline?: boolean;
        enableContextMenu?: boolean;
        treeColumnIndex?: number;
		editDialogFields:Array<any>;
        rowSelecting? (e: GanttEvent): void;
        rowSelected? (e: GanttEvent): void;
        queryCellInfo? (e: GanttEvent): void;
        queryTaskbarInfo? (e: GanttEvent): void;
        beginEdit? (e: GanttEvent): void;
        endEdit? (e: GanttEvent): void;
        rowDataBound? (e: GanttEvent): void;
        expanding? (e: GanttEvent): void;
        expanded? (e: GanttEvent): void;
        collapsing? (e: GanttEvent): void;
        collapsed? (e: GanttEvent): void;
        actionBegin? (e: GanttEvent): void;
        actionComplete? (e: GanttEvent): void;
        taskbarEditing? (e: GanttEvent): void;
        taskbarEdited? (e: GanttEvent): void;
        load? (e: GanttEvent): void;
        contextMenuOpen? (e: GanttEvent): void;
    }

    interface GanttEvent {
        cancel: boolean;
        type: string;
        model: GanttOptions;
    }

    class TreeGrid extends EJ.Core.Widget {
        static fn: TreeGrid;
        constructor(element: JQuery, options?: TreeGridOptions);
        defaults: TreeGridOptions;
        getHeaderTable(): void;
        setGridHeaderTable(): void;
        getHeaderContent(): void;
        setGridHeaderContent(): void;
        getContentTable(): Object;
        getContent(): Object;
        setGridContentTable(): void;
        getGridRows(): Object;
        setGridRows(): void;
        getCurrentViewData(): Array<any>;
        getFlatRecords(): Array<any>;
        setHeight(): void;
        getUpdatedRecords(): Array<any>;
        getUpdatedIds(): Array<any>;
        getRecordsCount(): number;
        setRecordsCount(): void;
        getExpandCollapseRecordsCount(): number;
    }

    interface TreeGridOptions {
        enableAltRow?: boolean;
        allowColumnResize?: boolean;
        enableVirtualization?: boolean;
        allowSorting?: boolean;
        allowMultiSorting?: boolean;
        sortSettings?: { sortedColumns?: Array<any> };
        allowSelection?: boolean;
        selectionType?: string;
        selectedRowIndex?: number;
        selectedItem?: any;
        allowKeyboardNavigation?: boolean;
        cssClass?: string;
        locale?: string;
        editSettings?: { allowEditing?: boolean; allowAdding?: boolean; allowDeleting?: boolean; editMode?: string };
        isEdit?: boolean;
        dataSource?: any;
        currentViewData?: Array<any>;
        flatRecords?: Array<any>;
        parentRecords?: Array<any>;
        records?: Array<any>;
        columns?: Array<any>;
        commonWidth?: number;
        idMaping?:string;
        parentIdMapping?:string;
        query?: JQuery;
        dateFormat?: string;
        rowHeight?: number;
        emptyRecordText?: any;
        treeColumnIndex?: number;
		childMapping?:any;
        showGridCellTooltip?: boolean;
        showGridExpandCellTooltip?: boolean;
        rowDataBound? (e: TreeGridEvent): void;
        queryCellInfo? (e: TreeGridEvent): void;
    }

    interface TreeGridEvent {
        cancel: boolean;
        type: string;
        model: TreeGridOptions;
    }
        
}

declare module ej.olap {

    class OlapChart extends EJ.Core.Widget {
        static fn: OlapChart;
        element: JQuery;
        constructor(element: Element, options?: OlapChartOptions);
        model: Object;
        validTags: Array<string>;
        defaults: OlapChartOptions;
        dataTypes: OlapChartDataTypes;
        observables: Array<string>;
        titleText(): void;
        seriesType(): void;
        locale(): void;
        getOlapReport(): string;
        setOlapReport(): void;
        getJsonRecords(): string;
        setJsonRecords(): void;
        renderControlSuccess(): void;
        renderChartFromJSON(): void;
        doAjaxPost(): void;
    }

    interface OlapChartOptions {
        url?: string;
        cssClass?: string;
        currentReport?: string;
        customObject?: Object;
        serviceMethodSettings?: OlapChartServiceMethods;
        progressMode?: string;
        locale?: string;
        drillSuccess? (e: OlapChartEvent): void;
        beforeServiceInvoke? (e: OlapChartEvent): void;
        afterServiceInvoke? (e: OlapChartEvent): void;
        renderComplete? (e: OlapChartEvent): void;
        renderFailure? (e: OlapChartEvent): void;
        renderSuccess? (e: OlapChartEvent): void;
    }

    interface OlapChartServiceMethods {
        initialize?: string;
        drillDown?: string;
    }

    interface OlapChartDataTypes {
        marker?: Object;
        crossHair?: Object;
        size?: Object;
        serviceMethodSettings?: Object;
        zooming?: Object;
        customObject?: Object
    }

    interface OlapChartEvent {
        cancel: boolean;
        type: string;
        model: OlapChartOptions;
    }

    class OlapGrid extends EJ.Core.Widget {
        static fn: OlapGrid;
        element: JQuery;
        constructor(element: Element, options?: OlapGridOptions);
        model: Object;
        validTags: Array<string>;
        defaults: OlapGridOptions;
        dataTypes: OlapGridDataTypes;
        observables: Array<string>;
        layout(): void;
        enableCellContext(): void;
        enableValueCellHyperlink(): void;
        enableRowHeaderHyperlink(): void;
        enableColumnHeaderHyperlink(): void;
        enableSummaryCellHyperlink(): void;
        locale(): void;
        getOlapReport(): string;
        setOlapReport(): void;
        getJSONRecords(): string;
        setJSONRecords(): void;
        exportToExcel(): void;
        doAjaxPost(): void;
        doPostBack(): void;
        refreshPagedOlapGrid(): void;
        renderControlFromJSON(): void;
    }

    interface OlapGridOptions {
        url?: string;
        cssClass?: string;
        currentReport?: string;
        layout?: string;
        enableVirtualScrolling?: boolean;
        enableCellContext?: boolean;
        enableRTL?: boolean;
        hyperlinkSettings?: HyperLinkSettings
        progressMode?: string;
        serviceMethodSettings?: OlapGridServiceMethods;
        customObject?: Object;
        locale?: string;
        valueCellHyperlinkClick?: string;
        rowHeaderHyperlinkClick?: string;
        columnHeaderHyperlinkClick?: string;
        summaryCellHyperlinkClick?: string;
        beforeServiceInvoke?: string;
        afterServiceInvoke?: string;
        drillSuccess?: string;
        cellContext?: string;
        load?: string;
        renderComplete?: string;
        renderFailure?: string;
        renderSuccess?: string;
    }

    interface HyperLinkSettings {
        enableValueCellHyperlink?: boolean;
        enableRowHeaderHyperlink?: boolean;
        enableColumnHeaderHyperlink?: boolean;
        enableSummaryCellHyperlink?: boolean;
    }

    interface OlapGridServiceMethods {
        initialize?: string;
        drillDown?: string;
        exportOptions?: string;
        paging?: string;
    }

    interface OlapGridDataTypes {
        serviceMethodSettings?: Object;
        customObject?: Object;
    }

    class OlapClient extends EJ.Core.Widget {
        static fn: OlapClient;
        element: JQuery;
        constructor(element: Element, options?: OlapClientOptions);
        model: Object;
        validTags: Array<string>;
        defaults: OlapClientOptions;
        dataTypes: OlapClientDataTypes;
        observables: Array<string>;
        title(): void;
        gridLayout(): void;
        displayMode(): void;
        defaultView(): void;
        controlPlacement(): void;
        enableTogglePanel(): void;
        locale(): void;
        chartDrillSuccess(): void;
        gridDrillSuccess(): void;
        nodeDropped(): void;
        setSplitBtnTargetPos(): void;
        cubeChanged(): void;
        measureGroupChanged(): void;
        reportChanged(): void;
        onDropped(): void;
        getAxisPosition(): Object;
        onTabClick(): void;
        doAjaxPost(): void;
    }

    interface OlapClientOptions {
        url?: string;
        cssClass?: string;
        title?: string;
        gridLayout?: string;
        chartType?: string;
        displaySettings?: OlapClientDisplayOptions;
        serviceMethodSettings?: OlapClientServiceMethods;
        customObject?: Object;
        enableMeasureGroups?: boolean;
        progressMode?: string;
        locale?: string;
        renderSuccess?: string;
        renderFailure?: string;
        renderComplete?: string;
        load?: string;
        chartLoad?: string;
        beforeServiceInvoke?: string;
        afterServiceInvoke?: string;
    }

    interface OlapClientDisplayOptions {
        mode?: string;
        defaultView?: string;
        controlPlacement?: string;
        enableTogglePanel?: boolean;
        enableFullScreen?: boolean;
    }

    interface OlapClientServiceMethods {
        initialize?: string;
        removeSplitButton?: string;
        filterElement?: string;
        nodeDropped?: string;
        fetchMemberTreeNodes?: string;
        cubeChanged?: string;
        measureGroupChanged?: string;
        toolbarServices?: string;
        memberExpand?: string;
        saveReport?: string;
        fetchReportList?: string;
        loadReport?: string;
        updateReport?: string;
    }

    interface OlapClientDataTypes {
        displaySettings?: Object;
        serviceMethodSettings?: Object;
        customObject?: Object;
    }

    class OlapGauge extends EJ.Core.Widget {
        static fn: OlapGauge;
        element: JQuery;
        constructor(element: Element, options?: OlapGaugeOptions);
        model: Object;
        validTags: Array<string>;
        defaults: OlapGaugeOptions;
        dataTypes: OlapGaugeDataTypes;
        observables: Array<string>;
        rowsCount(): void;
        columnsCount(): void;
        showHeaderLabel(): void;
        locale(): void;
        radius(): void;
        frameType(): void;
        getOlapReport(): string;
        setOlapReport(): void;
        getJSONRecords(): string;
        setJSONRecords(): void;
        doAjaxPost(): void;
        progressStatus(): void;
        removeImg(): void;
        renderControlFromJSON(): void;
        refresh(): void;
    }

    interface OlapGaugeOptions {
        url?: string;
        cssClass?: string;
        rowsCount?: number;
        columnsCount?: number;
        enableTooltip?: boolean;
        showHeaderLabel?: boolean;
        scales?: Object;
        customObject?: Object;
        progressMode?: string;
        locale?: string;
        serviceMethodSettings?: OlapGaugeServiceMethods;
        renderSuccess?: Object;
        renderComplete?: Object;
        renderFailure?: Object;
        beforeServiceInvoke?: Object;
        afterServiceInvoke?: Object;
        load?: Object;
    }

    interface OlapGaugeServiceMethods {
        initialize?: string;
    }

    interface OlapGaugeDataTypes {
        serviceMethodSettings?: Object;
        customObject?: Object;
        scales?: Object;
        progressMode?: Object;
    }

    class OlapPager extends EJ.Core.Widget {
        static fn: OlapPager;
        element: JQuery;
        constructor(element: Element, options?: OlapPagerOptions);
        model: Object;
        validTags: Array<string>;
        defaults: OlapPagerOptions;
        wireEvents(): void;
        unwireEvents(): void;
        initPagerProperties(): void;
    }

    interface OlapPagerOptions {
        targetControlID?: string;
        categoricalCurrentPage?: number;
        seriesCurrentPage?: number;
        seriesPageCount?: number;
        categoricalPageCount?: number;
        locale?: string;
        mode?: string;
    }

}


/*Mobile Core - Start*/
declare module ej.mobile.core {    
    class MobUtil extends EJ.Core.Widget {
        static fn: MobUtil;
        element: JQuery;
        getMaxZindex(): number;
        transitionEndEvent(): string;
        preventDefaultException(el: Object, exceptions: Object): boolean;
        startEvent(): string;
        endEvent(): string;
        moveEvent(): string;
        cancelEvent(): string;
        tapEvent(): string;
        tapHoldEvent(): string;
        isMobile(): boolean;
        isIOSWebView(): boolean;
        isAndroidWebView(): boolean;
        isLowerAndroid(): boolean;
        getAndroidVersion(): boolean;
        isWebView(): boolean;
        isWindowsWebView(): boolean;
        isTablet(): boolean;
        isDevice(): boolean;
        isTouchDevice(): boolean;
        isAndroid(): boolean;
        isIOS7(): boolean;
        isIOS(): boolean;
        setTheme(): boolean;
        isWindows(): boolean;
        isFlat(): boolean;
        hasTheme(element: Object): boolean;
        setTheme(element: Object): void;
        hasRenderMode(element: Object): boolean;
        setRenderMode(element: Object): void;
        getRenderMode(element: Object): string;
        isPortrait(): boolean;
        getCurrentPage(): Object;
        getDimension(element: Object, method: string): number;
        browser(): string;
        getAttrVal(ele: Object, val: string, option?: any): any;
        getBooleanVal(ele: Object, val: string, option?: any): boolean;
        round(value: number, div: number, up: number): number;
        logBase(val: number, base: number): number;
        correctRect(x1: number, y1: number, x2: number, y2: number): number;
        measureText(text: string, maxwidth?: number, font?: string): Object;
        getTime(): number;
        getFontString(fontObj?: Object): string;
        getFontStyle(style: number): string;
        hexFromRGB(color: Object): string;
        sendAjaxRequest(ajaxOptions: Object): void;
        blockDefaultActions(e: Object): void;
        setCaretToPos(input: Object, pos1: number, pos2: number): void;
    }
    interface MobUtilOptions {
        cssUA?: string;
        transform?: string;
        transition?: string;
        transitionProperty?: string;
        transformStyle?: string;
        transitionDuration?: string;
        transformOrigin?: string;
        transitionTimingFunction?: string;
        transitionDelay?: string;
        browserDetect?: Object;
    }
}
/*Mobile Core - End*/

/*Mobile Appview - Start*/
declare module App {
    var addMetaTags: boolean;
    var allowPopState: boolean;
    var allowPushState: boolean;
    var activePage: Object;
    var hashMonitering: boolean;
    var pageTransition: string;
    var renderEJMControlByDef: boolean;
    function createPage(element: JQuery): void;
    function getLoaction(): string;
    function initPage(): void;
    function loadView(url: string): void;
    function transferPage(fromPage: Object, toPage: string, options?: any, isFromAjax?: boolean): void;
    function userAgent(): void;
    
    var pageHistory: {
        activeHistory(): string;
        add(url: string, options?: PageOption): void;
        clearForward(): void;
        find(url: string): number;
        lasHistory(): string;
        nextHistory(): string;
        prevHistory(): string;
        makeUrlAbsolute(hashString: string): void;
    }
    //Pageoption type for appview page
    interface PageOption {
        title?: string;
        href?: string;
        hash?: string;
    }
    var route: {
        convertToRelativeUrl(): void;
        hasProtocol(url: string): boolean;
        setPageRenderMode(element: JQuery): void;
        splitUrl(url: string): any;
    }
}
/*Mobile Appview - End*/

/*Mobile Controls - Start*/
declare module ej.mobile {
    //Global Interface
    interface windowsOption {
        renderDefault?: boolean;
    }

    /*Accordion - Start*/
    class Accordion extends EJ.Core.Widget {
        static fn: Accordion;
        constructor(element: JQuery, options?: AccordionOptions);
        model: Object;
        validTags: Array<string>;
        defaults: AccordionOptions;
        collapseAll(): void;
        disableItems(Array): void;
        enableItems(Array): void;
        expandAll(): void;
        hide(): void;
        show(): void;
        getItemsCount(): number;
    }
    //ejmAccordion Option
    interface AccordionOptions {
        theme?: string;
        renderMode?: string;
        allowCache?: boolean;
        allowMultipleOpen?: boolean;
        collapsible?: boolean;
        enabled?: boolean;
        heightAdjustMode?: string;
        windows?: windowsOption;
        enablePersistence?: boolean;
        selectedItems?: Array<number>;
        disabledItems?: Array<number>;
        showHeaderIcon?: boolean;
        spinnerText?: string;
        active? (e: AccordionActiveEventArgs): void;
        ajaxBeforeLoad? (e: AccordionAjaxBeforeLoadEventArgs): void;
        ajaxError? (e: AccordionAjaxErrorEventArgs): void;
        ajaxLoad? (e: AccordionAjaxLoadEventArgs): void;
        ajaxSuccess? (e: AccordionAjaxSuccessEventArgs): void;
        beforeActive? (e: AccordionBeforeActiveEventArgs): void;
    }
    //ejmejmAccordionEvent Arugument
    interface AccordionEventArgs {
        cancel?: boolean;
        type?: string;
        model?: AccordionOptions;
    }
    interface AccordionActiveEventArgs extends AccordionEventArgs{
        items?: string;
        lastSelectedItemIndices?: number;        
        selectedItemIndices?: number;
    }
    interface AccordionAjaxBeforeLoadEventArgs extends AccordionEventArgs{
        url?: string;
    }
    interface AccordionAjaxErrorEventArgs extends AccordionEventArgs{
        title?: string;
        data?: Object;
        url?: string;
    }
    interface AccordionAjaxLoadEventArgs extends AccordionEventArgs{
    }
    interface AccordionAjaxSuccessEventArgs extends AccordionEventArgs{
        content?: Object;
        data?: Object;
        url?: string;
    }
    interface AccordionBeforeActiveEventArgs extends AccordionEventArgs{
        activeItemIndex?: number;
    }
    /*Accordion - End*/

    /*Autocomplete - Start*/
    class Autocomplete extends EJ.Core.Widget {
        static fn: Autocomplete;
        element: JQuery;
        constructor(element: JQuery, options?: AutocompleteOptions);
        model: Object;
        defaults: AutocompleteOptions;
        disable(): void;
        enable(): void;
    }
    interface AutocompleteOptions {
        allowScrolling?: boolean;
        filterType?: string;
		delaySuggestionTimeout?: number;
        caseSensitiveSearch?: boolean;
        enableAutoFill?: boolean;
        delimiterChar?: string;
        enableMultiSelect?: boolean;
        enableCheckbox?: boolean;
        dataSource?: any;
        filterMode?: string;
        itemsCount?: number;
        field?: string;
        imageField?: string;
        renderMode?: string;
        theme?: string;
        mapper?: string;
        watermarkText?: string;
        imageClass?: string;
        allowSorting?: boolean;
        sortingOrder?: string;
        value?: string;
        noResultText?: string;
        showEmptyResultText?: boolean;
        minCharacter?: number;
        enableDistinct?: boolean;
        persist?: boolean;
        enabled?: boolean;
        mode?: string;
        windows?: windowsOption;
        touchEnd? (e: AutocompleteTouchEndEventArgs): void;
        keyPress? (e: AutocompleteKeyPressEventArgs): void;
        select? (e: AutocompleteSelectEventArgs): void;
        change? (e: AutocompleteChangeEventArgs): void;
        focusIn? (e: AutocompleteFocusInEventArgs): void;
        focusOut? (e: AutocompleteFocusOutEventArgs): void;
    }
    interface AutocompleteEventArgs {
        cancel: boolean;
        model: string;
        type: string;
    }
    interface AutocompleteTouchEndEventArgs extends AutocompleteEventArgs{
        currentText: string;
        isChecked: boolean;
        checkedItemsText: Object;
        value: string;
    }
    interface AutocompleteKeyPressEventArgs extends AutocompleteEventArgs{
        value: string;
    }
    interface AutocompleteSelectEventArgs extends AutocompleteEventArgs{
        currentText: string;
        isChecked: boolean;
        checkedItemsText: Object;
        text: string;
    }
    interface AutocompleteChangeEventArgs extends AutocompleteEventArgs{
        currentText: string;
        isChecked: boolean;
        checkedItemsText: Object;
        value: string;
    }
    interface AutocompleteFocusInEventArgs extends AutocompleteEventArgs{
        value: string;
    }
    interface AutocompleteFocusOutEventArgs extends AutocompleteEventArgs{
        value: string;
    }   
    /*Autocomplete - End*/

    /*Button - Start*/
    class Button extends EJ.Core.Widget {
        static fn: Button;
        element: JQuery;
        constructor(element: JQuery, options?: ButtonOptions);
        model: Object;
        validTags: Array<string>;
        defaults: ButtonOptions;
        disable(): void;
        enable(): void;
    }
    class Actionlink extends EJ.Core.Widget {
        static fn: Actionlink;
        element: JQuery;
        constructor(element: Element, options?: ButtonOptions);
        model: Object;
        validTags: Array<string>;
        defaults: ButtonOptions;
        disable(): void;
        enable(): void;
    }
    interface ButtonOptions {
        touchStart? (e: ButtonEventArgs): void;
        touchEnd? (e: ButtonEventArgs): void;
        enabled?: boolean;
        renderMode?: string;
        text?: string;
        theme?: string;
        imageClass?: string;
        imagePosition?: string;
        contentType?: string;
        ios7?: ios7ButtonOptions;
        android?: androidButtonOption;
        windows?: windowsButtonOptions;
        flat?: flatButtonOption;
    }
    interface ButtonEventArgs {
        element: Object;
        text: string;
    }
    interface ios7ButtonOptions {
        style?: string;
        color?: string;
    }
    interface androidButtonOption {
        style?: string;
    }
    interface windowsButtonOptions extends windowsOption {
        style?: string;
    }
    interface flatButtonOption {
        style?: string;
    }
   
    /*Button - End*/

    /*DatePicker*/
    //Class DatePicker
    class DatePicker extends EJ.Core.Widget {
        static fn: DatePicker;
        element: JQuery;
        constructor(element: JQuery, options?: DatePickerOptions);
        model: Object;
        defaults: DatePicker;
        destroy(): void;
        disable(): void;
        enable(): void;
        hide(): void;
        show(): void;
    }

    //ejmDatePicker Options
    interface DatePickerOptions {
        renderMode?: string;
        theme?: string;
        culture?: string;
        dateFormat?: string;
        defaultDate?: string;
        enabled?: boolean;
        ios7?: ios7Option;
        windows?: windowsOption;
        maxDate?: string;
        minDate?: string;
        load? (e: DatePickerEventArgs): void;
        select? (e: DatePickerEventArgs): void;
        focusIn? (e: DatePickerEventArgs): void;
        focusOut? (e: DatePickerEventArgs): void;
        open? (e: DatePickerEventArgs): void;
        close? (e: DatePickerEventArgs): void;
        change? (e: DatePickerEventArgs): void;
    }
    //ejmDatePickerEvent Arugument
    interface DatePickerEventArgs {
        cancel?: boolean;
        type?: string;
        model?: DatePickerOptions;
        value?: string;
    }

    interface ios7Option {
        renderDefault: boolean;
    }

    /*DatePicker - END*/

    /*Editor-Start*/
    class Numeric extends EJ.Core.Widget {
        static fn: Numeric;
        element: JQuery;
        constructor(element: JQuery, options?: EditorOptions);
        model: Object;
        ValidTags: Array<string>;
        defaults: EditorOptions;
        disable(): void;
        enable(): void;
        getValue(): void;
        setValue(number): void;
    }

    interface EditorOptions {
        allowStrictMode?: boolean;
        enabled?: boolean;
        showBorder?: boolean;
        enableSpinButton?: boolean;
        incrementStep?: number;
        maxValue?: number;
        minValue?: number;
        name?: string;
        persist?: boolean;
        readOnly?: boolean;
        renderMode?: string;
        setDecimals?: number;
        theme?: string;
        value?: number;
        watermarkText?: string;
        change? (e: EditorEventArgs): void;
        windows?: windowsOption;
    }

    interface EditorEventArgs {
        cancel: boolean;
        type: string;
        model: EditorOptions;
        value: number;
        element: Object;
    }
    /*Editor-End*/

    /* Grid Start*/

    class Grid extends EJ.Core.Widget {
        static fn: Grid;
        element: JQuery;
        constructor(element: JQuery, options?: GridOptions);
        model: Object;
        validTags: Array<string>;
        defaults: GridOptions;
        disable(): void;
        enable(): void;
        destroy(): void;
        getColumnByField(string): void;
        getColumnByHeaderText(string): void;
        getColumnByIndex(number): void;
        getColumnFieldNames(): void;
        getColumnIndexByField(string): void;
        getColumnMemberByIndex(number): void;
        hideColumns(string): void;
        refreshContent(string): void;
        showColumns(string): void;
    }
    interface GridOptions {
        cssClass?: string;
        allowPaging?: boolean;
        allowSorting?: boolean;
        allowFiltering?: boolean;
        allowScrolling?: boolean;
        allowSelection?: boolean;
        dataSource: any;
        caption?: string;
        persist?: boolean;
        selectedRow?: number;
        showCaption?: boolean;
        allowColumnSelector?: boolean;
        transition?: string;
        columns?: Array<Object>;
        rowSelecting? (e: GridEventArgs): void;
        rowSelected? (e: GridEventArgs): void;
        actionBegin? (e: GridEventArgs): void;
        actionComplete? (e: GridEventArgs): void;
        actionSuccess? (e: GridEventArgs): void;
        actionFailure? (e: GridEventArgs): void;
        queryCellInfo? (e: GridEventArgs): void;
        rowDataBound? (e: GridEventArgs): void;
        modelChange? (e: GridEventArgs): void;
        load? (e: GridEventArgs): void;
        pageSettings?: PageSettings;
        scrollSettings?: ScrollSettings;
        sortSettings?: SortSettings;
        filterSettings?: FilterSettings;
    }

    interface PageSettings {
        pageSize?: number;
        currentPage?: number;
        display?: string;
        type?: string;
        totalRecordsCount?: number;
    }
    interface ScrollSettings {
        enableColumnScrolling?: boolean;
        height?: string;
        width?: string;
        enableRowScrolling?: boolean;
        enableNativeScrolling?: boolean;
    }
    interface SortSettings {
        allowMultiSorting?: boolean;
        sortedColumns?: Array<any>;
    }
    interface FilterSettings {
        isCaseSensitive?: boolean;
        filterBarMode?: string;
        interval?: number;
        filteredColumns?: Array<any>;
    }

    //ejmGridEvent Arugument
    interface GridEventArgs {
        cancel: boolean;
        type: string;
        model: GridOptions;
    }

   
    /* Grid End */

    /*Header*/
    class Header extends EJ.Core.Widget {
        static fn: Header;
        element: JQuery;
        constructor(element: JQuery, options?: HeaderOptions);
        model: Object;
        defaults: HeaderOptions;
        getTitle(): string;
    }

    interface HeaderOptions {
        hideForUnSupportedDevice?: boolean;
        leftButtonNavigationUrl?: string;
        rightButtonNavigationUrl?: string;
        title?: string;
        showTitle?: boolean;
        position?: string;
        leftButtonCaption?: string;
        rightButtonCaption?: string;
        leftButtonStyle?: string;
        rightButtonStyle?: string;
        renderMode?: string;
        theme?: string;
        showLeftButton?: boolean;
        showRightButton?: boolean;
        windows?: HeaderWindowsOptions;
        android?: HeaderAndroidOptions;
        leftButtonTap? (e: HeaderLeftButtonTapEventArgs): void;
        rightButtonTap? (e: HeaderRightButtonTapEventArgs): void;
    }
    interface HeaderWindowsOptions extends windowsOption {
        enableCustomText?: boolean;
        renderDefault?: boolean;
    }
    interface HeaderAndroidOptions {
        backButtonImageClass?: string;
    }
    interface HeaderLeftButtonTapEventArgs {
        text: string;
        cancel: boolean;
        model: Object;
        type: string;
        status: boolean;
    }
    interface HeaderRightButtonTapEventArgs {
        text: string;
        cancel: boolean;
        model: Object;
        type: string;
        status: boolean;
    }
    /*Header*/


    /* ListBox - Start*/
    interface ajaxSettingsOptions {
        type?: string;
        cache?: boolean;
        async?: boolean;
        dataType?: string;
        contentType?: string;
        url?: string;
        data?: Array<any>;
    }
    //Class ejmListbox
    class Listbox extends EJ.Core.Widget {
        static fn: Listbox;
        element: JQuery;
        constructor(element: JQuery, options?: ListboxOptions);
        model: Object;
        defaults: ListboxOptions;
        addItem(object, number): void;
        checkAllItem(): void;
        checkItem(number): void;
        deActive(number): void;
        disableItem(number): void;
        enableItem(number): void;
        getActiveItem(): void;
        getActiveItemText(): void;
        getCheckedItems(): void;
        getCheckedItemsText(): void;
        getItemsCount(): void;
        getItemText(number): void;
        hasChild(number): boolean;
        hide(): void;
        hideItem(number): void;
        isChecked(number): boolean;
        loadAjaxContent(): void;
        removeCheckMark(number): void;
        removeItem(number): void;
        selectItem(number): void;
        setActive(number): void;
        show(): void;
        showItem(number): void;
        unCheckAllItem(): void;
        unCheckItem(number): void;
    }
    //ejmListbox IOS7Option
    interface Ios7Option {
        inline?: boolean;
    }
    //ejmListbox IOS7Option
    interface windowsListboxOption extends windowsOption {
        preventSkew?: boolean;
    }

    //ejmListbox Option
    interface ListboxOptions {
        theme?: string;
        renderMode?: string;
        ios7?: Ios7Option;
        windows?: windowsListboxOption;
        adjustFixedPosition?: boolean;
        ajaxSettings?: ajaxSettingsOptions;
        allowCache?: boolean;
        allowScrolling?: boolean;
        checkDOMChanges?: boolean;
        dataBinding?: boolean;
        dataSource?: any;
        enableAjax?: boolean;
        enableCheckMark?: boolean;
        enableFiltering?: boolean;
        showHeader?: boolean;
        showHeaderBackButton?: boolean;
        enableNativeScrolling?: boolean;
        showScrollbars?: boolean;
        fieldSettings?: Object;
        enableGroupList?: boolean;
        headerBackButtonText?: string;
        hideHeaderForUnSupportedDevice?: boolean;
        headerTitle?: string;
        height?: number;
        persistSelection?: boolean;
        preventSelection?: boolean;
        query?: string;
        renderTemplate?: boolean;
        selectedItemIndex?: number;
        autoAdjustHeight?: boolean;
        autoAdjustScrollHeight?: boolean;
        templateId?: any;
        transition?: string;
        width?: number;
        ajaxBeforeSend? (e: ListboxEventArgs): void;
        ajaxLoadComplete? (e: ListboxEventArgs): void;
        ajaxLoadError? (e: ListboxEventArgs): void;
        ajaxLoadSuccess? (e: ListboxEventArgs): void;
        headerBackButtonTap? (e: ListboxEventArgs): void;
        load? (e: ListboxEventArgs): void;
        loadComplete? (e: ListboxEventArgs): void;
        touchEnd? (e: ListboxEventArgs): void;
        touchStart? (e: ListboxEventArgs): void;

    }
    //ejmListboxEvent Arugument
    interface ListboxEventArgs {
        cancel: boolean;
        type: string;
        model: ListboxOptions;
        ajaxData: Object;
        data: Object;
        errorData: Object;
        successData: Object;
        text: string;
        element: Object;
        id: string;
        hasChild: boolean;
        currentItem: string;
        currentText: string;
        currentItemIndex: number;
        isChecked: boolean;
        checkedItems: number;
        checkedItemsText: string;
    }
    /* ListBox - End*/


    /*Menu*/
    //Class ejmMenu
    class Menu extends EJ.Core.Widget {
        static fn: Menu;
        element: JQuery;
        constructor(element: JQuery, options?: MenuOptions);
        model: Object;
        defaults: MenuOptions;
        addItem(element, number): void;
        disable(): void;
        disableItem(number): void;
        disableOverFlow(): void;
        disableOverFlowItem(number): void;
        disableShowOn(): void;
        enable(): void;
        enableItem(number): void;
        enableOverFlow(): void;
        enableOverFlowItem(number): void;
        enableShowOn(): void;
        hide(): void;
        removeItem(number): void;
        show(): void;
    }
    //ejmMenu Option
    interface MenuOptions {
        theme?: string;
        renderMode?: string;
        allowScrolling?: boolean;
        showScrollbars?: boolean;
        height?: number;
        renderTemplate?: boolean;
        showOn?: string;
        targetId: string;
        templateId?: string;
        width?: number;
        android?: AndroidOptions;
        ios7?: Ios7Options;
        windows?: windowsOption;
        cancelButtonTouchEnd? (e: MenuCancelButtonTouchEndEventArgs): void;
        hide? (e: MenuShowHideEventArgs): void;
        load? (e: MenuLoadEventArgs): void;
        loadComplete? (e: MenuLoadCompleteEventArgs): void;
        show? (e: MenuShowHideEventArgs): void;
        touchStart? (e: MenuTouchEventArgs): void;
        touchEnd? (e: MenuTouchEventArgs): void;
    }
    //ejmMenu IOS7 Option
    interface Ios7Options {
        cancelButtonColor?: string;
        cancelButtonText?: string;
        type?: string;
        title?: string;
        enableTitle?: boolean;
        showCancelButton?: boolean;

    }

    //ejmMenu Android Option
    interface AndroidOptions {
        menuType?: string;

    }
    //ejmMenu Event Arugument
    interface MenuTouchEventArgs {
        cancel: boolean;
        type: string;
        element: Object;
        text: string;
    }
    interface MenuCancelButtonTouchEndEventArgs {
        cancel: boolean;
        type: string;
        element: Object;
        text: string;
    }
    interface MenuLoadEventArgs {
        cancel: boolean;
        type: string;
    }
    interface MenuLoadCompleteEventArgs {
        cancel: boolean;
        type: string;
        element: Object;
        id: string;
    }
    interface MenuShowHideEventArgs {
        cancel: boolean;
        type: string;
    }
    
    /*Menu*/

    /*ProgressBar start*/
    //Class ejmProgress
    class Progress extends EJ.Core.Widget {
        static fn: Progress;
        element: JQuery;
        constructor(element: JQuery, options?: ProgressOptions);
        model: Object;
        defaults: ProgressOptions;
        getValue(): void;
        getPercentage(): void;
    }

    //ejmProgressbar Option
    interface ProgressOptions {
        theme?: string;
        renderMode?: string;
        enableCustomText?: boolean;
        enabled?: boolean;
        height?: number;
        incrementStep?: number;
        maxValue?: number;
        minValue?: number;
        orientation?: string;
        percentage?: number;
        enablePersistence?: boolean;
        text?: string;
        value?: number;
        width?: number;
        change? (e: ProgressEventArgs): void;
        complete? (e: ProgressEventArgs): void;
        start? (e: ProgressEventArgs): void;
    }
    //ejmProgressbarEvent Arugument
    interface ProgressEventArgs {
        cancel: boolean;
        type: string;
        model: ProgressOptions;
        value: number;
    }

    /*ProgressBar - END*/

    /*Radio Button*/
    //Class ejmRadioButton
    class RadioButton extends EJ.Core.Widget {
        static fn: RadioButton;
        element: JQuery;
        constructor(element: JQuery, options?: RadioButtonOptions);
        model: Object;
        defaults: RadioButtonOptions;
        destroy(): void;
        enable(): void;
        disable(): void;
    }

    //ejmRadioButton Options
    interface RadioButtonOptions {
        renderMode?: string;
        theme?: string;
        checked?: boolean;
        text?: string;
        enabled?: boolean;
        touchStart? (e: RadioButtonEventArgs): void;
        touchEnd? (e: RadioButtonEventArgs): void;
        change? (e: RadioButtonEventArgs): void;
    }
    //ejmRadioButtonEvent Arugument
    interface RadioButtonEventArgs {
        model: RadioButtonOptions;
        value: boolean;
        isChecked: boolean;
        type: string;
    }
    /*RadioButton - END*/


    /*Rating*/
    class Rating extends EJ.Core.Widget {
        static fn: Rating;
        element: JQuery;
        constructor(element?: JQuery, options?: RatingOptions);
        model: Object;
        defaults: RatingOptions;
        show(): void;
        hide(): void;
        getValue(): void
        reset(): void;
        setValue(number): void;
    }

    interface RatingOptions {
        maxValue?: number;
        minValue?: number;
        value?: number;
        incrementStep?: number;
        precision?: string;
        enabled?: boolean;
        theme?: string;
        renderMode?: string;
        shape?: string;
        shapeWidth?: number;
        shapeHeight?: number;
        spaceBetweenShapes?: number;
        orientation?: string;
        readOnly?: boolean;
        enablePersistence?: boolean;
        tap? (e: RatingEventArgs): void;
        change? (e: RatingEventArgs): void;
        touchMove? (e: RatingEventArgs): void;
    }
    interface RatingEventArgs {
        cancel: boolean;
        type: string;
        model: RatingOptions;
        value: number;
    }
    
    /*Rating*/

    /*Rotator-Start ejmRotator*/
    class Rotator extends EJ.Core.Widget {
        static fn: Rotator;
        element: JQuery;
        constructor(element: JQuery, options?: RotatorOptions);
        model: Object;
        validTags: Array<string>;
        defaults: RotatorOptions;
        renderDatasource(any): void;


    }
    interface RotatorOptions {
        swipeLeft? (e: RotatorEventArgs): void;
        swipeRight? (e: RotatorEventArgs): void;
        targetId?: string;
        renderMode?: string;
        targetHeight?: number;
        targetWidth?: number;
        theme?: string;
        currentItemIndex?: number;
        showPager?: boolean;
        showHeader?: boolean;
        headerTitle?: string;
        dataBinding?: boolean;
        dataSource?: any;
        pagerPosition?: string;
    }
    interface RotatorEventArgs {
        cancel: boolean;
        model: Object;
        type: string;
        targetElement: string;
        value: number;

    }
   
    /*Rotator-End*/



    /*Slider*/
    //Class ejmSlider
    class Slider extends EJ.Core.Widget {
        static fn: Slider;
        element: JQuery;
        constructor(element: JQuery, options?: SliderOptions);
        model: Object;
        defaults: SliderOptions;
        getValue(): void;

    }
    //ejmSlider Option
    interface SliderOptions {
        theme?: string;
        renderMode?: string;
        minValue?: number;
        maxValue?: number;
        value?: number;
        values?: number[];
        orientation?: string;
        enableRange?: boolean;
        readOnly?: boolean;
        incrementStep?: number;
        persist?: number;
        enabled?: boolean;
        enableAnimation?: boolean;
        animationSpeed?: number;
        ios7?: Ios7Option;
        windows?: windowsOption;
        touchStart? (e: SliderStartEndChangeEventArgs): void;
        touchEnd? (e: SliderStartEndChangeEventArgs): void;
        load? (e: SliderLoadEventArgs): void;
        change? (e: SliderStartEndChangeEventArgs): void;
        slide? (e: SliderSlideEventArgs): void;
    }

    //ejmSlider IOS7 Option
    interface Ios7Option {
        thumbStyle?: string;
    }
    //ejmSlider Slide Event Arugument
    interface SliderSlideEventArgs {
        value: number;
        values: number[];
        type: string;
        cancel: boolean;
    }
    //ejmSlider Load Event Arugument
    interface SliderLoadEventArgs {
        value: number;
        values: number[];
        cancel: boolean;
    }
    //ejmSlider Touch Start, End and Change Event Arugument
    interface SliderStartEndChangeEventArgs {
        value: number;
        type: string;
        cancel: boolean;
    }
    
    /*Slider*/

    /* Tab */
    class Tab extends EJ.Core.Widget {
        static fn: Tab;
        constructor(element: JQuery, options?: TabOptions);
        defaults: TabOptions;
        showBadge(index: number): void;
        hideBadge(index: number): void;
        updateBadgeValue(index: number, value: number): void;
        selectItem(index?: number): void;
        enable(index?: number): void;
        disable(index?: number): void;
        enableContent(index?: number): void;
        disableContent(index?: number): void;
        add(tab: Object, index: number): void;
        addOverflowItem(tab: Object, index: number): void;
        remove(index: number): void;
        removeOverflowItem(index: number): void;
        getItemsCount(): number;
        getOverflowItemCount(): number;
    }

    interface TabOptions {
        renderMode?: string;
        theme?: string;
        allowScrolling?: boolean;
        enableAjax?: boolean;
        badge?: badgeTabOptions;
        ios7?: ios7TabOptions;
        allowCache?: boolean;
        selectedItemIndex?: number;
        enabled?: boolean;
        overflowBadge?: overflowBadgeTabOptions;
        android?: androidTabOptions;
        windows?: windowsTabOptions;
        flat?: flatTabOptions;
        load? (e: TabLoadEventArgs): void;
        loadComplete? (e: TabLoadCompleteEventArgs): void;
        touchStart? (e: TabTouchEventArgs): void;
        touchEnd? (e: TabTouchEventArgs): void;
        ajaxLoadSuccess? (e: TabAjaxLoadSuccessEventArgs): void;
        ajaxLoadError? (e: TabAjaxLoadErrorEventArgs): void;
        ajaxLoadComplete? (e: TabLoadEventArgs): void;
        ajaxSettings?: ajaxSettingsTabOptions;
    }
    interface TabLoadEventArgs {
        cancel: boolean;
        type: string;
        model: TabOptions;
    }
    interface TabLoadCompleteEventArgs {
        cancel: boolean;
        type: string;
        model: TabOptions;
        element: Object;
        id: string;
    }
    interface TabTouchEventArgs {
        cancel: boolean;
        type: string;
        model: TabOptions;
    }

    interface TabAjaxLoadSuccessEventArgs {
        cancel: boolean;
        type: string;
        model: TabOptions;
        element: Object;
        currentContent: string;
    }

    interface TabAjaxLoadErrorEventArgs {
        cancel: boolean;
        type: string;
        model: TabOptions;
        status: boolean;
        error: string;
    }
    interface badgeTabOptions {
        enabled?: boolean;
        value?: number;
        maxValue?: number;
    }
    interface ios7TabOptions {        
        imageClass?: string;
    }
    interface overflowBadgeTabOptions {
        enabled?: boolean;
        value?: number;
        maxValue?: number;
    }
    interface androidTabOptions {
        showImage?: boolean;
        imageClass?: string;
        postion?: string;
    }
    interface windowsTabOptions extends windowsOption {
        enableCustomText?: boolean;
        position?: string;
    }
    interface flatTabOptions {
        position?: string;
    }
    interface ajaxSettingsTabOptions {
        type?: string;
        cache?: boolean;
        async?: boolean;
        dataType?: string;
        contentType?: string;
        url?: string;
        data?: Array<any>;
    }

    /* Tab */

    /*Tile - Start*/
    class Tile extends EJ.Core.Widget {
        static fn: Tile;
        element: JQuery;
        constructor(element: JQuery, options?: TileOptions);
        model: Object;
        ValidTags: Array<string>;
        defaults: TileOptions;
        destroy(): void;
        setShowText(boolean): void;
        setBadgeEnable(boolean): void;
        setBadgeValue(number): void;
        setShowIcon(boolean): void;
        setEnableLiveTile(boolean): void;
        setImagePosition(string): void;
        setRenderMode(string): void;
        setText(string): void;
        setTextAlignment(string): void;
        setTileSize(string): void;
    }

    interface TileOptions {
        showText?: boolean;
        badge?: tileBadgeOptions;
        showIcon?: boolean;
        enableLiveTile?: boolean;
        imageClass?: string;
        imagePosition?: string;
        imageUrl?: string;
        liveTileType?: string;
        renderMode?: string;
        templateId?: string;
        text?: string;
        textAlignment?: string;
        tileSize?: string;
        type?: string;
        updateinterval?: number;
        touchEnd? (e: tileTouchEndEventArgs): void;
        touchStart? (e: tileTouchStartEventArgs): void;
    }

    interface tileBadgeOptions {
        enabled?: boolean;
        maxValue?: number;
        value?: number;
    }

    interface tileTouchEndEventArgs {
        cancel: boolean;
        model: TileOptions;
        type: string;
        text: string;
    }

    interface tileTouchStartEventArgs {
        cancel: boolean;
        model: TileOptions;
        type: string;
        text: string;
    }
    
    /*Tile - End*/

    /* TimePicker */
    class TimePicker extends EJ.Core.Widget {
        static fn: TimePicker;
        constructor(element: JQuery, options?: TimePickerOptions);
        model: Object;
        defaults: TimePickerOptions;
        show(): void;
        hide(): void;
        enable(): void;
        disable(): void;
        getValue(): void;
        setCurrentTime(): void;
    }
    interface TimePickerOptions {
        renderMode?: string;
        theme?: string;
        hourFormat?: string;
        value?: string;
        timeFormat?: string;
        enabled?: boolean;
        ios7?: ios7TimepickerOptions;
        windows?: windowsOption;
        select? (e: timepickerSelectEventArgs): void;
        load? (e: timepickerLoadEventArgs): void;
        focusIn? (e: timepickerLoadEventArgs): void;
        focusOut? (e: timepickerLoadEventArgs): void;
        open? (e: timepickerLoadEventArgs): void;
        close? (e: timepickerLoadEventArgs): void;
        change? (e: timepickerLoadEventArgs): void;
    }
    interface timepickerLoadEventArgs {
        cancel: boolean;
        type: string;
        model: TimePickerOptions;
        target: Object;
        value: string;

    }
    interface timepickerSelectEventArgs {
        cancel: boolean;
        type: string;
        model: TimePickerOptions;
        target: Object;
        value: string;
    }
    interface ios7TimepickerOptions {
        renderDefault?: boolean;

    }


    /* ToggleButton */
    //Class ejmToggleButton
    class ToggleButton extends EJ.Core.Widget {
        static fn: ToggleButton;
        constructor(element: JQuery, options?: ToggleButtonOptions);
        model: Object;
        validTags: Array<string>;
        defaults: ToggleButtonOptions;
        enable(): void;
        disable(): void;
    }

    //ejmToggleButton Option
    interface ToggleButtonOptions {
        theme?: string;
        renderMode?: string;
        animate?: boolean;
        toggleState?: boolean;
        windows?: windowsOption;
        persist?: boolean;
        enabled?: boolean;
        change? (e: ToggleButtonEventArgs): void;
        touchStart? (e: ToggleButtonEventArgs): void;
        touchEnd? (e: ToggleButtonEventArgs): void;
    }

    //ToggleButtonEvent Arugument
    interface ToggleButtonEventArgs {
        cancel?: boolean;
        type?: string;
        model?: ToggleButtonOptions;
        element?: Object;
        state?: boolean;
    }
    /* ToggleButton*/

    /* ToolBar*/
    //Class ejmToolbar
    class Toolbar extends EJ.Core.Widget {
        static fn: Toolbar;
        constructor(element: JQuery, options?: ToolbarOptions);
        model: Object;
        validTags: Array<string>;
        defaults: ToolbarOptions;        
        removeItem(number): void;
        addItem(string): void;
        showEllipsis(): void;
        disableItem(string): void;
        enableItem(string): void;
        hideItem(string): void;
        hideEllipsis(number): void;
        showItem(string): void;  
        hideMenu(): void;
        showMenu(): void;
    }

    //ejmToolbar Android Options
    interface ToolbarAndroidOptions {
        title?: string;
        titleIconUrl?: string;
        showBackNavigator?: boolean;
        showTitleIcon?: boolean;
        enableSplitView?: boolean;
        showEllipsis?: boolean;
    }
    //ejmToolbar Option
    interface ToolbarOptions {
        theme?: string;
        renderMode?: string;
        itemCollection?: Array<any>;
        enabled?: boolean;
        hide?: boolean;
        toolbarPosition?: string;
        android?: ToolbarAndroidOptions;
        windows?: windowsOption;
        templateId?: any;
        iconUrl?: any;
        touchStart? (e: ToolbarEventArgs): void;
        touchEnd? (e: ToolbarEventArgs): void;
                
    }
    //ejmToolbarEvent Arugument
    interface ToolbarEventArgs {
        cancel: boolean;
        type: string;
        model: ToolbarOptions;

    }
    
    /* ToolBar*/

    /*Group button*/
    class GroupButton extends EJ.Core.Widget {
        static fn: GroupButton;
        element: JQuery;
        constructor(element?: JQuery, options?: GroupButtonOptions);
        model: Object;
        defaults: GroupButtonOptions;
        //add public functions
    }
    interface GroupButtonOptions {
        selectedItemIndex?: number;
        renderMode?: string;
        theme?: string;
        windows?: windowsOption;
        touchStart? (e: GroupButtonEventArgs): void;
        touchEnd? (e: GroupButtonEventArgs): void;
    }
    interface GroupButtonEventArgs {
        cancel: boolean;
        type: string;
        model: GroupButtonOptions;
    }
    /*Group button*/

    /* SplitPane */
    class SplitPane extends EJ.Core.Widget {
        static fn: SplitPane;
        element: JQuery;
        constructor(element: JQuery, options?: SplitPaneOptions);
        model: Object;
        defaults: SplitPaneOptions;
        loadContent(toPage: string, options?: any): void;
        transferPage(toPage, options, existing): void;
    }
    interface SplitPaneOptions {
        renderMode?: string;
        theme?: string;
        leftHeaderTitle?: string;
        rightHeaderTitle?: string;
        allowLeftPaneScrolling?: boolean;
        allowRightPaneScrolling?: boolean;
        checkDOMChanges?: boolean;
        enableNativeScrolling?: boolean;
        leftHeaderTemplateId?: string;
        rightHeaderTemplateId?: string;
        leftPaneWidth?: number;
        android?: SplitPaneAndroidOptions;
        windows?: windowsSplitPaneOptions;
        ios7?: SplitPaneIOS7Options;
    }
    interface SplitPaneAndroidOptions {
        showToolbar?: boolean;
        toolbarTitle?: string;
        toolbarTheme?: string;
        showToolbarIcon?: boolean;
        showBackNavigator?: boolean;
        showToolbarEllipsis?: boolean;
    }
    interface windowsSplitPaneOptions {
        showLeftHeader?: boolean;
        showRightHeader?: boolean;
        headerLeftButtonStyle?: string;
        headerRightButtonStyle?: string;
    }
    interface SplitPaneIOS7Options {
        showLeftPaneHeader?: boolean;
        showRightPaneHeader?: boolean;
        headerLeftButtonCaption?: string;
        headerLeftButtonStyle?: string;
        showHeaderLeftButton?: boolean;
        //headerLeftButtonTap? (e: FooterButtonEvent): void;
        headerRightButtonCaption?: string;
        headerRightButtonStyle?: string;
        showHeaderRightButton?: boolean;
        //headerRightButtonTap? (e: FooterButtonEvent): void;
    }

    /* SplitPane */
    /* Dialog */
    class Dialog extends EJ.Core.Widget {
        static fn: Dialog;
        element: JQuery;
        constructor(element: JQuery, options?: DialogOptions);
        model: Object;
        defaults: DialogOptions;
        open(): void;
        close(): void;
        isOpened(): void;
    }
    interface DialogOptions {
        enableAutoOpen?: boolean;
        title?: string;
        beforeClose? (e: DialogBeforeClose): void;
        open? (e: DialogOpen): void;
        close? (e: DialogClose): void;
        buttonTap? (e: DialogButtonTap): void;
        renderMode?: string;
        theme?: string;
        enableModal?: boolean;
        enableButtons?: boolean;
        allowScrolling?: boolean;
        enableNativeScrolling?: boolean;
        mode?: string;
        leftButtonCaption?: string;
        rightButtonCaption?: string;
        checkDOMChanges?: boolean;
        templateId?: string;
        targetHeight?: number;
        windows?: windowsOption;
    }
    interface DialogBeforeClose {
        cancel: boolean;
        type: string;
        model: DialogOptions;
    }
    interface DialogOpen {
        cancel: boolean;
        type: string;
        model: DialogOptions;
        element: Object;
        text: string;
    }
    interface DialogClose {
        cancel: boolean;
        type: string;
        model: DialogOptions;
        title: string;
        element: Object;
    }
    interface DialogButtonTap {
        cancel: boolean;
        type: string;
        model: DialogOptions;
        text: string;
    }
    /* Dialog */
    /* Textbox */
    class TextboxCommon extends EJ.Core.Widget {
        model: Object;
        disable(): void;
        enable(): void;
        getStrippedValue(string): string;
        getUnstrippedValue(string): string;
        getValue(string): string;
        getWatermarkText(string): string;
    }
    class TextBox extends TextboxCommon {
        static fn: TextBox;
        constructor(element: JQuery, options?: TextBoxOptions);
        defaults: TextBoxOptions;
    }
    /* Password */
    class Password extends TextboxCommon {
        static fn: Password;
        constructor(element: JQuery, options?: TextBoxOptions);
        defaults: TextBoxOptions;
    }
    /* MaskEdit */
    class MaskEdit extends TextboxCommon {
        static fn: MaskEdit;
        constructor(element: JQuery, options?: MaskEditOptions);
        defaults: MaskEditOptions;

    }
    /* TextArea */
    class TextArea extends TextboxCommon {
        static fn: TextArea;
        constructor(element: JQuery, options?: TextBoxOptions);
        defaults: TextBoxOptions;

    }
    interface TextBoxOptions {
        renderMode?: string;
        theme?: string;
        showBorder?: boolean;
        windows?: WindowsTextBoxOptions;
        indicateError?: boolean;
        value?: string;
        watermarkText?: string;
        change? (e: TextBoxEventArgs): void;
        enabled?: boolean;
        persist?: boolean;
        readOnly?: boolean;
    }
    interface MaskEditOptions extends TextBoxOptions {
        mask?: string;
    }
    interface WindowsTextBoxOptions extends windowsOption {
        showReset?: boolean;
    }
    interface TextBoxEventArgs {
        cancel: boolean;
        type: string;
        element: Object;
        value: string;
        isChecked: boolean;
    }
    /* Textbox */
    /*Footer*/
    class Footer extends EJ.Core.Widget {
        static fn: Footer;
        element: JQuery;
        constructor(element: JQuery, options?: FooterOptions);
        model: Object;
        defaults: FooterOptions;
        getTitle(): string;
    }

    interface FooterOptions {
        hideForUnSupportedDevice?: boolean;
        leftButtonNavigationUrl?: string;
        rightButtonNavigationUrl?: string;
        title?: string;
        showTitle?: boolean;
        position?: string;
        leftButtonCaption?: string;
        rightButtonCaption?: string;
        renderMode?: string;
        theme?: string;
        showLeftButton?: boolean;
        showRightButton?: boolean;
        templateId?: string;
        windows?: FooterWindowsOptions;
        leftButtonTap? (e: FooterLeftButtonTapEventArgs): void;
        rightButtonTap? (e: FooterRightButtonTapEventArgs): void;
    }
    interface FooterWindowsOptions extends windowsOption {
        renderDefault?: boolean;
    }
    interface FooterLeftButtonTapEventArgs {
        text: string;
        cancel: boolean;
        model: Object;
        type: string;
        status: boolean;
    }
    interface FooterRightButtonTapEventArgs {
        text: string;
        cancel: boolean;
        model: Object;
        type: string;
        status: boolean;
    }
    
    /*Footer*/

    /* Checkbox */
    class CheckBox extends EJ.Core.Widget {
        static fn: CheckBox;
        constructor(element: JQuery, options?: CheckBoxOptions);
        model: Object;
        defaults: CheckBoxOptions;
        isChecked(): boolean;
    }
    interface CheckBoxOptions {
        touchStart? (e: CheckBoxTouchStart): void;
        touchEnd? (e: CheckBoxTouchEnd): void;
        renderMode?: string;
        preventDefault?: boolean;
        theme?: string;
        enabled?: boolean;
        checked?: boolean;
        enableTriState?: boolean;
        state?: string;
        windows?: windowsOption;
        text?: string;
    }
    interface CheckBoxTouchStart {
        cancel: boolean;
        type: string;
        model: CheckBoxOptions;
        element: Object;
        value: string;
        isChecked: boolean;
    }
    interface CheckBoxTouchEnd {
        cancel: boolean;
        type: string;
        model: CheckBoxOptions;
        element: Object;
        value: string;
        isChecked: boolean;
    }
   
    /* Checkbox */
    /* Scrollpanel */
    class ScrollPanel extends EJ.Core.Widget {
        static fn: ScrollPanel;
        constructor(element: JQuery, target: any, options?: ScrollPanelOptions);
        model: Object;
        defaults: ScrollPanelOptions;
        refresh(): void;
    }
    interface ScrollPanelOptions {
        renderMode?: string;
        theme?: string;
        enableResize?: boolean;
        targetHeight?: number;
        targetWidth?: number;
        scrollHeight?: number;
        scrollWidth?: number;
        target: any;
        enableFade?: boolean;
        enableShrink?: boolean;
        setAutoHeight?: boolean;
        isRelative?: boolean;
        wheelSpeed?: number;
        enableInteraction?: boolean;
        enabled?: boolean;
        checkDOMChanges?: boolean;
        enableHrScroll?: boolean;
        enableVrScroll?: boolean;
        zoomMin?: number;
        zoomMax?: number;
        adjustFixedPosition?: boolean;
        startZoom?: number;
        startX?: number;
        startY?: number;
        disablePointer?: boolean;
        disableMouse?: boolean;
        disableTouch?: boolean;
        directionLockThreshold?: number;
        momentum?: boolean;
        enableBounce?: boolean;
        bounceTime?: number;
        preventDefault?: boolean;
        enableTransform?: boolean;
        enableTransition?: boolean;
        showScrollbars?: boolean;
        enableMouseWheel?: boolean;
        enableKeys?: boolean;
        enableZoom?: boolean;
        enableNativeScrolling?: boolean;
        invertWheel?: boolean;
        scrollStart? (e: scrollStart): void;
        scrollMove? (e: scrollMove): void;
        scrollEnd? (e: scrollEnd): void;
        beforeScrollStart? (e: beforeScrollStart): void;
        zoomStart? (e: zoomStart): void;
        zoomEnd? (e: zoomEnd): void;
    }
    interface scrollStart {
        cancel: boolean;
        type: string;
        model: ScrollPanelOptions;
        x: number;
        y: number;
    }
    interface scrollMove {
        cancel: boolean;
        type: string;
        model: ScrollPanelOptions;
        x: number;
        y: number;
    }
    interface scrollEnd {
        cancel: boolean;
        type: string;
        model: ScrollPanelOptions;
        x: number;
        y: number;
    }
    interface beforeScrollStart {
        cancel: boolean;
        type: string;
        model: ScrollPanelOptions;
        x: number;
        y: number;
    }
    interface zoomStart {
        cancel: boolean;
        type: string;
        model: ScrollPanelOptions;
        x: number;
        y: number;
    }
    interface zoomEnd {
        cancel: boolean;
        type: string;
        model: ScrollPanelOptions;
        x: number;
        y: number;
    }
    /* Scrollpanel */
   
}
declare module ej.datavisualization {

    //#region LinearGauge End
    class LinearGauge extends EJ.Core.Widget {
        static fn: LinearGauge;
        static extend(prototype: Object): LinearGauge;
        constructor(element: JQuery, options?: LinearGaugeOptions);

        destroy(): void;
        exportImage(fileName: number, fileType: number): void;
        getBarDistanceFromScale(scaleIndex: number, pointerIndex: number): void;
        getBarPointerValue(scaleIndex: number, pointerIndex: number): void;
        getBarWidth(scaleIndex: number, pointerIndex: number): void;
        getCustomLabelAngle(scaleIndex: number, customLabelIndex: number): void;
        getCustomLabelValue(scaleIndex: number, customLabelIndex: number): void;
        getIndicatorValue(scaleIndex: number, indicatorIndex: number): void;
        getLabelAngle(scaleIndex: number, labelIndex: number): void;
        getLabelPlacement(scaleIndex: number, labelIndex: number): void;
        getLabelStyle(scaleIndex: number, labelIndex: number): void;
        getLabelXDistanceFromScale(scaleIndex: number, labelIndex: number): void;
        getLabelYDistanceFromScale(scaleIndex: number, labelIndex: number): void;
        getMajorIntervalValue(scaleIndex: number): void;
        getMarkerStyle(scaleIndex: number, pointerIndex: number): void;
        getMaximumValue(scaleIndex: number): void;
        getMinimumValue(scaleIndex: number, pointerIndex: number): void;
        getMinorIntervalValue(scaleIndex: number): void;
        getPointerDistanceFromScale(scaleIndex: number, pointerIndex: number): void;
        getPointerHeight(scaleIndex: number, pointerIndex: number): void;
        getPointerPlacement(scaleIndex: number, pointerIndex: number): void;
        getPointerWidth(scaleIndex: number, pointerIndex: number): void;
        getRangeBorderWidth(scaleIndex: number, rangeIndex: number): void;
        getRangeDistanceFromScale(scaleIndex: number, rangeIndex: number): void;
        getRangeEndValue(scaleIndex: number, rangeIndex: number): void;
        getRangeEndWidth(scaleIndex: number, rangeIndex: number): void;
        getRangePosition(scaleIndex: number, rangeIndex: number): void;
        getRangeStartValue(scaleIndex: number, rangeIndex: number): void;
        getRangeStartWidth(scaleIndex: number, rangeIndex: number): void;
        getScaleBarLength(scaleIndex: number): void;
        getScaleBarSize(scaleIndex: number, pointerIndex: number): void;
        getScaleBorderWidth(scaleIndex: number): void;
        getScaleDirection(scaleIndex: number): void;
        getScaleLocation(scaleIndex: number): void;
        getScaleStyle(scaleIndex: number): void;
        getTickAngle(scaleIndex: number, TickIndex: number): void;
        getTickHeight(scaleIndex: number, TickIndex: number): void;
        getTickPlacement(scaleIndex: number, TickIndex: number): void;
        getTickStyle(scaleIndex: number, TickIndex: number): void;
        getTickWidth(scaleIndex: number, TickIndex: number): void;
        getTickXDistanceFromScale(scaleIndex: number, TickIndex: number): void;
        getTickYDistanceFromScale(scaleIndex: number, TickIndex: number): void;
        scales(): void;
        setBarDistanceFromScale(scaleIndex: number, pointerIndex: number, value: number): void;
        setBarPointerValue(scaleIndex: number, pointerIndex: number, value: number): void;
        setBarWidth(scaleIndex: number, pointerIndex: number, value: number): void;
        setCustomLabelAngle(scaleIndex: number, customLabelIndex: number, value: number): void;
        setCustomLabelValue(scaleIndex: number, customLabelIndex: number, value: number): void;
        setIndicatorValue(scaleIndex: number, indicatorIndex: number, value: number): void;
        setLabelAngle(scaleIndex: number, labelIndex: number, angle: number): void;
        setLabelPlacement(scaleIndex: number, labelIndex: number, value: number): void;
        setLabelStyle(scaleIndex: number, labelIndex: number, value: string): void;
        setLabelXDistanceFromScale(scaleIndex: number, labelIndex: number, value: number): void;
        setLabelYDistanceFromScale(scaleIndex: number, labelIndex: number, value: number): void;
        setMajorIntervalValue(scaleIndex: number, value: number): void;
        setMarkerStyle(scaleIndex: number, pointerIndex: number, value: string): void;
        setMaximumValue(scaleIndex: number, value: number): void;
        setMinimumValue(scaleIndex: number, value: number): void;
        setMinorIntervalValue(scaleIndex: number, value: number): void;
        setPointerDistanceFromScale(scaleIndex: number, pointerIndex: number, value: number): void;
        setPointerHeight(scaleIndex: number, pointerIndex: number, height: number): void;
        setPointerPlacement(scaleIndex: number, pointerIndex: number, value: number): void;
        setPointerValue(scaleIndex: number, pointerIndex: number, value: number): void;
        setPointerWidth(scaleIndex: number, pointerIndex: number, width: number): void;
        setRangeBorderWidth(scaleIndex: number, rangeIndex: number, value: number): void;
        setRangeDistanceFromScale(scaleIndex: number, rangeIndex: number, value: number): void;
        setRangeEndValue(scaleIndex: number, rangeIndex: number, value: number): void;
        setRangeEndWidth(scaleIndex: number, rangeIndex: number, value: number): void;
        setRangePosition(scaleIndex: number, rangeIndex: number, value: number): void;
        setRangeStartValue(scaleIndex: number, rangeIndex: number, value: number): void;
        setRangeStartWidth(scaleIndex: number, rangeIndex: number, value: number): void;
        setScaleBarLength(scaleIndex: number, value: number): void;
        setScaleBarSize(scaleIndex: number, value: number): void;
        setScaleBorderWidth(scaleIndex: number, value: number): void;
        setScaleDirection(scaleIndex: number, value: number): void;
        setScaleLocation(scaleIndex: number, value: Object): void;
        setScaleStyle(scaleIndex: number, value: number): void;
        setTickAngle(scaleIndex: number, TickIndex: number, angle: number): void;
        setTickHeight(scaleIndex: number, TickIndex: number, value: number): void;
        setTickPlacement(scaleIndex: number, TickIndex: number, value: number): void;
        setTickStyle(scaleIndex: number, TickIndex: number, value: string): void;
        setTickWidth(scaleIndex: number, TickIndex: number, value: number): void;
        setTickXDistanceFromScale(scaleIndex: number, TickIndex: number, value: number): void;
        setTickYDistanceFromScale(scaleIndex: number, TickIndex: number, value: number): void;
    }
    enum Direction {
        clockwise,
        counterClockwise
    }
    enum ScaleType {
        rectangle,
        roundedrectangle,
        thermometer
    }
    enum Theme {
        flatlight,
        flatdark
    }
    enum ScalesCustomLabelsFontStyle {
        bold,
        italic,
        regular,
        strikeout,
        underline
    }
    enum ScalesLabelsPlacement {
        near,
        far,
        center
    }
    enum ScalesLabelsType {
        major,
        minor
    }
    enum ScalesLabelsUnitTextPlacement {
        back,
        front
    }
    enum ScalesMarkerPointersPlacement {
        near,
        far,
        center
    }
    enum ScalesMarkerPointersType {
        rectangle,
        triangle,
        ellipse,
        diamond,
        pentagon,
        circle,
        star,
        slider,
        pointer,
        wedge,
        trapezoid,
        roundedrectangle
    }
    enum ScalesRangesPlacement {
        near,
        far,
        center
    }
    enum ScalesTicksPlacement {
        near,
        far,
        center
    }
    enum ScalesTicksType {
        majorinterval,
        minorinterval
    }
    //ejLinearGauge Frame Options
    interface LinearGaugeFrameOptions {
        backgroundImageUrl?: string;
        innerWidth?: number;
        outerWidth?: number;
    }
    interface LinearGaugeScaleOptions {
        backgroundColor?: string;
        barPointers?: LinearGaugeScaleBarPointersOptions;
        border?: LinearGaugeScaleBorderOptions;
        customLabels?: LinearGaugeScaleCustomLabelsOptions;
        direction?: string;
        indicators?: Array<LinearGaugeScalesIndicatorsOptions>;
        labels?: Array<LinearGaugeScalesLabelsOptions>;
        length?: number;
        majorIntervalValue?: number;
        markerPointers?: Array<LinearGaugeScalesMarkerpointersOptions>;
        maximum?: number;
        minimum?: number;
        minorIntervalValue?: number;
        opacity?: number;
        position?: LinearGaugeScalesPositionOptions;
        ranges?: Array<LinearGaugeScalesRangesOptions>;
        shadowOffset?: number;
        showBarPointers?: boolean;
        showCustomLabels?: boolean;
        showIndicators?: boolean;
        showLabels?: boolean;
        showMarkerPointers?: boolean;
        showRanges?: boolean;
        showTicks?: boolean;
        ticks?: Array<LinearGaugeScalesTicks>;
        type?: string;
        width?: number;
    }
    interface LinearGaugeScaleBarPointersOptions {
        backgroundColor?: string;
        border?: LinearGaugeScaleBarPointersBorderOptions;
        distanceFromScale?: number;
        gradients?: Object;
        opacity?: number;
        value?: number;
        width?: number;
    }
    interface LinearGaugeScaleBorderOptions {
        color?: string;
        width?: number;
    }
    interface LinearGaugeScaleCustomLabelsOptions {
        color?: string;
        font?: LinearGaugeCustomLabelFontOptions;
        opacity?: string;
        position?: LinearGaugeCustomLabelsPositionOptions;
        textAngle?: number;
        value?: string;
    }
    interface LinearGaugeCustomLabelFontOptions {
        fontFamily?: string;
        fontStyle?: string;
        size?: string;
    }
    interface LinearGaugeCustomLabelsPositionOptions {
        x?: number;
        y?: number;
    }

    interface LinearGaugeScaleBarPointersBorderOptions {
        color?: string;
        width?: number;
    }
    interface LinearGaugeScalesIndicatorsOptions {
        backgroundColor?: string;
        border?: LinearGaugeScalesIndicatorsBorderOptions;
        font?: LinearGaugeScalesIndicatorsFontOptions;
        height?: number;
        opacity?: number;
        position?: LinearGaugeScalesIndicatorsPositionOptions;
        stateRanges?: Array<LinearGaugeScalesIndicatorsStateRangesOptions>;
        textLocation?: LinearGaugeScalesIndicatorsTextLocationOptions;
        type?: number;
        value?: number;
        width?: number;
    }
    interface LinearGaugeScalesIndicatorsBorderOptions {
        color?: string;
        width?: number;
    }
    interface LinearGaugeScalesIndicatorsFontOptions {
        fontFamily?: string;
        fontStyle?: string
        size?: string;
    }
    interface LinearGaugeScalesIndicatorsPositionOptions {
        x?: number;
        y?: number;
    }
    interface LinearGaugeScalesIndicatorsStateRangesOptions {
        backgroundColor?: string;
        borderColor?: string;
        endValue?: number;
        startValue?: number;
        text?: string;
        textColor?: string;
    }
    interface LinearGaugeScalesIndicatorsTextLocationOptions {
        x?: number;
        y?: number;
    }
    interface LinearGaugeScalesLabelsOptions {
        angle?: number;
        distanceFromScale?: LinearGaugeScalesLabelsDistanceFromScaleOptions;
        font?: Object;
        includeFirstValue?: boolean;
        opacity?: number;
        placement?: string;
        textColor?: string;
        type?: string;
        unitText?: string;
        unitTextPlacement?: string;
    }
    interface LinearGaugeScalesLabelsDistanceFromScaleOptions {
        x?: number;
        y?: number;
    }
    interface LinearGaugeScalesLabelsFontOptions {
        fontFamily?: string;
        fontStyle?: string;
        size?: string;
    }
    interface LinearGaugeScalesMarkerpointersOptions {
        backgroundColor?: string;
        border?: LinearGaugeMarkerPointersBorderOption;
        distanceFromScale?: number;
        gradients?: Object;
        length?: number;
        opacity?: number;
        placement?: string;
        type?: string;
        value?: number;
        width?: number;
    }
    interface LinearGaugeMarkerPointersBorderOption {
        color?: string;
    }
    interface LinearGaugeScalesPositionOptions {
        x?: number;
        y?: number;
    }
    interface LinearGaugeScalesRangesOptions {
        backgroundColor?: string;
        border?: LinearGaugeScalesRangesBorderOptions;
        distanceFromScale?: number;
        endValue?: number;
        endWidth?: number;
        gradients?: Object;
        opacity?: number;
        placement?: string;
        startValue?: number;
        startWidth?: number;
    }
    interface LinearGaugeScalesRangesBorderOptions {
        color?: string;
        width?: number;
    }

    interface LinearGaugeScalesTicks {
        angle?: number;
        color?: string;
        distanceFromScale?: LinearGaugeScalesTicksDistanceFromScale;
        height?: number;
        opacity?: number;
        placement?: string;
        type?: string;
        width?: number;
    }
    interface LinearGaugeScalesTicksDistanceFromScale {
        x?: number;
        y?: number;
    }

    //ejLinearGauge Option
    interface LinearGaugeOptions {
        animationSpeed?: number;
        backgroundColor?: string;
        borderColor?: string;
        enableAnimation?: boolean;
        enableResize?: boolean;
        frame?: LinearGaugeFrameOptions;
        height?: number;
        labelColor?: string;
        maximum?: number;
        minimum?: number;
        orientation?: string;
        pointerGradient1?: string;
        pointerGradient2?: string;
        readOnly?: boolean;
        scale?: Array<LinearGaugeScaleOptions>;
        theme?: string;
        tickColor?: string;
        value?: number;
        width?: number;
        drawBarPointers? (e: LinearGaugeDrawBarPointersEventArgs): void;
        drawCustomLabel? (e: LinearGaugeDrawCustomLabelEventArgs): void;
        drawIndicators? (e: LinearGaugeDrawIndicatorsEventArgs): void;
        drawLabels? (e: LinearGaugeDrawLabelsEventArgs): void;
        drawMarkerPointers? (e: LinearGaugeDrawMarkerPointersEventArgs): void;
        drawRange? (e: LinearGaugeDrawRangeEventArgs): void;
        drawTicks? (e: LinearGaugeDrawTicksEventArgs): void;
        init? (e: LinearGaugeInitEventArgs): void;
        load? (e: LinearGaugeInitEventArgs): void;
        mouseClick? (e: LinearGaugeMouseClickEventArgs): void;
        mouseClickMove? (e: LineargaugeMouseClickMoveEventArgs): void;
        mouseClickUp? (e: LinearGaugeMouseClickEventArgs): void;
        renderComplete? (e: LinearGaugeRenderCompleteEventArgs): void;
    }
    //ejLinearGaugeEvent Arugument
    interface LinearGaugeDrawBarPointersEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        position: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        style: string;
        barElement: Object;
        barPointerIndex: number;
        PointerValue: number;
        type: string;
    }
    interface LinearGaugeDrawCustomLabelEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        position: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        style: string;
        customLabelElement: Object;
        customLabelrangeIndex: number;
        type: string;
    }
    interface LinearGaugeDrawIndicatorsEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        position: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        style: string;
        IndicatorElement: Object;
        IndicatorIndex: number;
        type: string;
    }
    interface LinearGaugeDrawLabelsEventArgs {

        object: Object;
        cancel: boolean;
        context: Object;
        position: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        style: string;
        label: LinearGaugeDrawLabelsInnerLabelEventArgs;
        type: string;
    }
    interface LinearGaugeDrawLabelsInnerLabelEventArgs {
        angle: number;
        element: Object;
        index: number;
        value: number;
    }
    interface LinearGaugeDrawMarkerPointersEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        position: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        style: string;
        markerElement: Object;
        markerPointerIndex: number;
        pointerValue: number;
        pointerAngle: number;
        type: string;
    }
    interface LinearGaugeDrawRangeEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        position: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        style: string;
        rangeElement: Object;
        rangeIndex: number;
        type: string;
    }
    interface LinearGaugeDrawTicksEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        position: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        style: string;
        tick: LinearGaugeDrawTicksTickEventArgs;
        type: string;
    }
    interface LinearGaugeDrawTicksTickEventArgs {
        angle: number;
        element: Object;
        index: number;
        value: number;
    }
    interface LinearGaugeInitEventArgs {
        object: Object;
        cancel: boolean;
        Model: Object;
        scaleElement: Object;
        context: Object;
        type: string;
    }
    interface LinearGaugeMouseClickEventArgs {
        object: Object;
        cancel: boolean;
        model: Object;
        type: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        context: Object;
        index: number;
        element: Object;
        value: number;
        style: string;
        position: Object;
    }
    interface LineargaugeMouseClickMoveEventArgs {
        object: Object;
        cancel: boolean;
        model: Object;
        type: Object;
        Model: Object;
        scaleElement: Object;
        scaleIndex: number;
        context: Object;
        markerpointer: LineargaugeMarkerpointerEventsArgs;
        style: string;
        position: Object;
    }
    interface LineargaugeMarkerpointerEventsArgs {
        index: number;
        element: Object;
        value: number;
    }
    interface LinearGaugeRenderCompleteEventArgs {
        object: Object;
        cancel: boolean;
        model: Object;
        scaleElement: Object;
        context: Object;
        type: string;
    }

    //#endregion LinearGauge End

    //#region CircularGauge
    class CircularGauge extends EJ.Core.Widget {
        static fn: CircularGauge;
        static extend(prototype: Object): CircularGauge;
        constructor(element: JQuery, options?: CircularGaugeOptions);
        defaults: CircularGaugeOptions;
        /* Medhods */
        getIndicatorValue(scaleIndex: number, indicatorIndex: number): void;
        setIndicatorValue(scaleIndex: number, indicatorIndex: number, value: number): void;
        getPointerValue(scaleIndex: number, pointerIndex: number): void;
        setMarkerDistanceFromScale(scaleIndex: number, pointerIndex: number, value: number): void;
        getMarkerDistanceFromScale(scaleIndex: number, pointerIndex: number): void;
        setPointerLength(scaleIndex: number, pointerIndex: number, value: number): void;
        getPointerLength(scaleIndex: number, pointerIndex: number): void;
        setPointerWidth(scaleIndex: number, pointerIndex: number, value: number): void;
        getPointerWidth(scaleIndex: number, pointerIndex: number): void;
        setBackNeedleLength(scaleIndex: number, pointerIndex: number, value: number): void;
        getBackNeedleLength(scaleIndex: number, pointerIndex: number): void;
        setNeedleStyle(scaleIndex: number, pointerIndex: number, value: number): void;
        getNeedleStyle(scaleIndex: number, pointerIndex: number): void;
        setPointerPlacement(scaleIndex: number, pointerIndex: number, value: number): void;
        getPointerPlacement(scaleIndex: number, pointerIndex: number): void;
        setPointerNeedleType(scaleIndex: number, pointerIndex: number, value: number): void;
        getPointerNeedleType(scaleIndex: number, pointerIndex: number): void;
        setMarkerStyle(scaleIndex: number, pointerIndex: number, value: number): void;
        getMarkerStyle(scaleIndex: number, pointerIndex: number): void;
        setCustomLabelValue(scaleIndex: number, customLabelIndex: number, value: number): void;
        getCustomLabelValue(scaleIndex: number, customLabelIndex: number): void;
        setSubGaugeLocation(scaleIndex: number, GaugeIndex: number, value: number): void;
        getSubGaugeLocation(scaleIndex: number, GaugeIndex: number): void;
        setCustomLabelAngle(scaleIndex: number, customLabelIndex: number, value: number): void;
        getCustomLabelAngle(scaleIndex: number, customLabelIndex: number): void;
        setRangeStartValue(scaleIndex: number, rangeIndex: number, value: number): void;
        getRangeStartValue(scaleIndex: number, rangeIndex: number): void;
        setRangeEndValue(scaleIndex: number, rangeIndex: number, value: number): void;
        getRangeEndValue(scaleIndex: number, rangeIndex: number): void;
        setRangeSize(scaleIndex: number, rangeIndex: number, value: number): void;
        getRangeSize(scaleIndex: number, rangeIndex: number): void;
        setRangeDistanceFromScale(scaleIndex: number, rangeIndex: number, value: number): void;
        getRangeDistanceFromScale(scaleIndex: number, rangeIndex: number): void;
        setRangePosition(scaleIndex: number, rangeIndex: number, value: number): void;
        getRangePosition(scaleIndex: number, rangeIndex: number): void;
        getRangeBorderWidth(scaleIndex: number, rangeIndex: number): void;
        setPointerValue(scaleIndex: number, pointerIndex: number, value: number): void;
        setLabelAngle(scaleIndex: number, labelIndex: number, value: number): void;
        getLabelAngle(scaleIndex: number, labelIndex: number): void;
        setLabelDistanceFromScale(scaleIndex: number, labelIndex: number, value: number): void;
        getLabelDistanceFromScale(scaleIndex: number, labelIndex: number): void;
        setLabelStyle(scaleIndex: number, labelIndex: number, value: number): void;
        getLabelStyle(scaleIndex: number, labelIndex: number): void;
        setLabelPlacement(scaleIndex: number, labelIndex: number, value: number): void;
        getLabelPlacement(scaleIndex: number, labelIndex: number): void;
        setTickAngle(scaleIndex: number, tickIndex: number, value: number): void;
        getTickAngle(scaleIndex: number, tickIndex: number): void;
        setTickStyle(scaleIndex: number, tickIndex: number, value: number): void;
        getTickStyle(scaleIndex: number, tickIndex: number): void;
        setTickPlacement(scaleIndex: number, tickIndex: number, value: number): void;
        getTickPlacement(scaleIndex: number, tickIndex: number): void;
        setTickWidth(scaleIndex: number, tickIndex: number, value: number): void;
        getTickWidth(scaleIndex: number, tickIndex: number): void;
        setTickHeight(scaleIndex: number, tickIndex: number, value: number): void;
        getTickHeight(scaleIndex: number, tickIndex: number): void;
        setTickDistanceFromScale(scaleIndex: number, tickIndex: number, value: number): void;
        getTickDistanceFromScale(scaleIndex: number, tickIndex: number): void;
        setStartAngle(scaleIndex: number, value: number): void;
        getStartAngle(scaleIndex: number): void;
        setSweepAngle(scaleIndex: number, value: number): void;
        getSweepAngle(scaleIndex: number): void;
        setMinimumValue(scaleIndex: number, value: number): void;
        getMinimumValue(scaleIndex: number): void;
        setMaximumValue(scaleIndex: number, value: number): void;
        getMaximumValue(scaleIndex: number): void;
        setScaleBarSize(scaleIndex: number, value: number): void;
        getScaleBarSize(scaleIndex: number): void;
        setScaleRadius(scaleIndex: number, value: number): void;
        getScaleRadius(scaleIndex: number): void;
        setMajorIntervalValue(scaleIndex: number, value: number): void;
        getMajorIntervalValue(scaleIndex: number): void;
        setMinorIntervalValue(scaleIndex: number, value: number): void;
        getMinorIntervalValue(scaleIndex: number): void;
        setPointerCapRadius(scaleIndex: number, value: number): void;
        getPointerCapRadius(scaleIndex: number): void;
        setScaleBorderWidth(scaleIndex: number, value: number): void;
        getScaleBorderWidth(scaleIndex: number): void;
        setPointerCapBorderWidth(scaleIndex: number, value: number): void;
        getPointerCapBorderWidth(scaleIndex: number): void;
        setScaleDirection(scaleIndex: number, value: number): void;
        getScaleDirection(scaleIndex: number): void;
        includeFirstValue(): void;
        refreshSubGauge(): void;
        refresh(): void;
        redraw(value: string);
        exportImage(filename: string, filetype: string): void;
        resizeCanvas(): void;
    }

    //CircularGauge Options
    interface CircularGaugeOptions {
        value?: number;
        minimum?: number;
        maximum?: number;
        radius?: number;
        width?: number;
        height?: number;
        frame?: CircularGaugeFrameOptions;
        backgroundColor?: string;
        interiorGradient?: any;
        readOnly?: boolean;
        enableAnimation?: boolean;
        animationSpeed?: number;
        theme?: string;
        isRadialGradient?: boolean;
        enableResize?: boolean;
        scales?: Array<ScaleOption>;
        //Events
        drawTicks(e: DrawTicksEventArgs): void;
        drawLabels(e: DrawLabelsEventArgs): void;
        drawPointers(e: DrawPointersEventArgs): void;
        drawRange(e: DrawRangeEventArgs): void;
        drawCustomLabel(e: DrawCustomLabelEventArgs): void;
        drawIndicators(e: DrawIndicatorsEventArgs): void;
        drawPointerCap(e: DrawPointerCapEventArgs): void;
        load(e: CircularGaugeLoadEventArgs): void;
        renderComplete(e: CircularGaugeLoadEventArgs): void;
        mouseClick(e: CircularGaugeMouseEventArgs): void;
        mouseClickMove(e: CircularGaugeMouseEventArgs): void;
        mouseClickUp(e: CircularGaugeMouseEventArgs): void;
    }

    //Frame type Enum
    enum frameType {
        fullcircle,
        halfcircle
    }
    //Direction Enum
    enum direction {
        clockwise,
        counterclockwise,
    }
    //IndicatorTypestring Enum
    enum indicatorTypestring {
        rectangle,
        circle,
        roundedrectangle,
        text,
        image,
    }
    //LabelPlacementstring Enum
    enum labelPlacementstring {
        near,
        far,
        center,
    }
    //LabelTypestring Enum
    enum labelTypestring {
        major,
        minor,
    }
    //markerType Enum
    enum markerType {
        rectangle,
        triangle,
        ellipse,
        diamond,
        pentagon,
        circle,
        slider,
        pointer,
        wedge,
        trapezoid,
        roundedrectangle,
    }
    //PointerPlacement  Enum
    enum pointerPlacement {
        near,
        far,
        center,
    }
    //pointerType Enum
    enum pointerType {
        needle,
        marker,
    }
    //tickType Enum
    enum tickType {
        major,
        minor,
    }
    //unitTextPlacement Enum
    enum unitTextPlacement {
        back,
        front,
    }
    //theme Enum
    enum theme {
        flatlight,
        flatdark,
    }
    //tickPlacement  Enum
    enum tickPlacement {
        near,
        far,
        center,
    }
    //rangePlacement  Enum
    enum rangePlacement {
        near,
        far,
        center,
    }

    //CircularGauge Scale Options
    interface ScaleOption {
        backgroundColor?: string;
        border?: CircularGaugeBorderOptions;
        direction?: string;
        indicators?: Array<CircularGaugeIndicatorsOptions>;
        labels?: Array<CircularGaugeLablesOptions>;
        majorIntervalValue?: number;
        maximum?: number;
        minimum?: number;
        minorIntervalValue?: number;
        opacity?: number;
        pointerCap?: CircularGaugePointerCapOptions;
        pointers?: Array<CircularGaugePointerOptions>;
        radius?: number;
        ranges?: Array<CircularGaugeRangeOptions>;
        shadowOffset?: number;
        showIndicators?: boolean;
        showLabels?: boolean;
        showPointers?: boolean;
        showRanges?: boolean;
        showScaleBar?: boolean;
        showTicks?: boolean;
        size?: number;
        startAngle?: number;
        subGauges?: Array<CircularGaugeSubGaugeOptions>;
        sweepAngle?: number;
        angle?: number;
        color?: string;
        distanceFromScale?: number;
        height?: number;
        placement?: string;
        type?: string;
        width?: number;
    }
    //CircularGauge Border Options
    interface CircularGaugeBorderOptions {
        color?: string;
        width?: number;
    }
    //CircularGauge indicators Options
    interface CircularGaugeIndicatorsOptions {
        height?: number;
        imageUrl?: string;
        position?: CircularGaugePositionOptions;
        stateRanges?: Array<CircularGaugeStateRangesOptions>;
        type?: string;
        value?: number;
        width?: number;
    }
    //CircularGauge lables Options
    interface CircularGaugeLablesOptions {
        angle?: number;
        autoAngle?: boolean;
        color?: string;
        distanceFromScale?: number;
        font?: CircularGaugeFontOptions;
        includeFirstValue?: boolean;
        opacity?: number;
        placement?: string;
        type?: string;
        unitText?: string;
        unitTextPosition?: string;
    }
    //CircularGauge pointerCap Options
    interface CircularGaugePointerCapOptions {
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
        interiorGradient?: Object;
        radius?: number;
    }
    //CircularGauge pointer Options
    interface CircularGaugePointerOptions {
        backgroundColor?: string;
        backNeedleLength?: number;
        border?: CircularGaugeBorderOptions;
        distanceFromScale?: number;
        gradients?: Object;
        length?: number;
        markerType?: string;
        needleType?: string;
        opacity?: number;
        placement?: string;
        showBackNeedle?: boolean;
        type?: string;
        value?: number;
        width?: number;
    }
    //CircularGauge range Options
    interface CircularGaugeRangeOptions {
        backgroundColor?: string;
        border?: CircularGaugeBorderOptions;
        distanceFromScale?: number;
        endValue?: number;
        endWidth?: number;
        gradients?: Object;
        opacity?: number;
        placement?: string;
        size?: number;
        startValue?: number;
        startWidth?: number;
    }
    //CircularGauge subGauge Options
    interface CircularGaugeSubGaugeOptions {
        height?: number;
        position?: CircularGaugePositionOptions
    width?: number;
    }
    //CircularGauge Position Options
    interface CircularGaugePositionOptions {
        x?: number;
        y?: number;
    }
    //CircularGauge font Options
    interface CircularGaugeFontOptions {
        fontFamily?: string;
        fontStyle?: string;
        size?: string;
    }
    //CircularGaugeFrameOptions
    interface CircularGaugeFrameOptions {
        frameType?: string;
        backgroundImageUrl?: string;
        halfCircleFrameStartAngle?: number;
        halfCircleFrameEndAngle?: number;
    }
    //CircularGaugeFrameOptions
    interface CircularGaugeStateRangesOptions {
        backgroundColor?: string;
        borderColor?: string;
        endValue?: number;
        font?: CircularGaugeFontOptions;
        startValue?: number;
        text?: string;
        textColor?: string;
    }

    //CircularGauge Mouse Arugument
    interface CircularGaugeMouseEventArgs {
        object: Object;
        cancel: boolean;
        model: Object;
        type: Object;
        scaleElement: Object;
        scaleIndex: number;
        context: Object;
        pointer: CircularGaugeMousePointerOption;
        style: string;
        position: Object;
    }
    //CircularGauge drawCustomLabel Arugument
    interface DrawCustomLabelEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        scaleIndex: number;
        position: Object;
        style: string;
        customLabelElement: Object;
        customLabelIndex: number;
    }
    //CircularGauge drawIndicators Arugument
    interface DrawIndicatorsEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        scaleIndex: number;
        position: Object;
        style: string;
        indicatorElement: Object;
        indicatorIndex: number;
    }
    //CircularGauge drawLabels Arugument
    interface DrawLabelsEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        scaleIndex: number;
        position: Object;
        style: string;
        label: Object;
        pointerValue: number;
    }
    //CircularGauge drawPointerCap Arugument
    interface DrawPointerCapEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        position: Object;
        style: string;
    }
    //CircularGauge drawPointers Arugument
    interface DrawPointersEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        scaleIndex: number;
        position: Object;
        style: string;
        pointer: CircularGaugeMousePointerOption;
    }
    //CircularGauge drawRange Arugument
    interface DrawRangeEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        scaleIndex: number;
        position: Object;
        style: string;
        rangeElement: Object;
        rangeIndex: number;
    }
    //CircularGauge drawTicks Arugument
    interface DrawTicksEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        scaleIndex: number;
        position: Object;
        style: string;
        tick: Object;
        pointerValue: number;
    }
    //CircularGauge load Arugument
    interface CircularGaugeLoadEventArgs {
        object: Object;
        cancel: boolean;
        context: Object;
        model: Object;
        type: Object;
        scaleElement: Object;
        style: string;
    }
    //CircularGauge Arguments Options
    interface CircularGaugeMousePointerOption {
        index: number;
        element: Object;
        value: number;
        angle: number;
    }
    //#endregion CircularGauge


    //#region DigitalGauge
    class DigitalGauge extends EJ.Core.Widget {
        static fn: DigitalGauge;
        element: JQuery;
        constructor(element: JQuery, options?: DigitalGaugeOptions);
        model: Object;
        defaults: DigitalGaugeOptions;
        setValue(itemIndex: number, value: string): void;
        getValue(itemIndex: number): void;
        setPosition(itemIndex: number, value: Object): void;
        getPosition(itemIndex: number): void;
        exportImage(fileName: string, fileType: string): void;
        refresh(): void;
        destroy(): void;
    }
    interface DigitalGaugeOptions {
        segmentData?: Object;
        matrixSegmentData?: Object;
        frame?: DigitalGaugeFrameOptions;
        height?: number;
        width?: number;
        enableResize?: boolean;
        theme?: string;
        items?: DigitalGaugeItemsOptions;
        value?: string;
        init? (e: DigitalGaugeEventArgs): void;
        load? (e: DigitalGaugeEventArgs): void;
        renderComplete? (e: DigitalGaugeEventArgs): void;
        itemRendering? (e: DigitalGaugeEventArgs): void;
    }
    interface DigitalGaugeFrameOptions {
        backgroundImageUrl?: string;
        innerWidth?: number;
        outerWidth?: number;
    }
    interface DigitalGaugeItemsOptions {
        characterSettings?: DigitalGaugeCharacterSettingsOptions;
        enableCustomFont?: boolean;
        segmentSettings?: DigitalGaugeSegmentSettingsOptions;
        shadowBlur?: number;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
        textAlign?: string;
        font?: DigitalGaugeFontOptions;
        position?: DigitalGaugePositionOptions;
        shadowColor?: string;
        textColor?: string;
        value?: string;
    }
    interface DigitalGaugeCharacterSettingsOptions {
        count?: number;
        opacity?: number;
        spacing?: number;
        type?: string;
    }
    interface DigitalGaugeSegmentSettingsOptions {
        color?: number;
        gradient?: number;
        length?: number;
        opacity?: number;
        spacing?: number;
        width?: number;
    }
    interface DigitalGaugeFontOptions {
        size?: string;
        fontFamily?: string;
        fontStyle?: string;
    }
    interface DigitalGaugePositionOptions {
        x?: number;
        y?: number;
    }
    interface DigitalGaugeEventArgs {
        object: Object;
        cancel: boolean;
        items: Object;
        context: Object;
        model: Object;
        type: string;
    }
    //Enum for DigitalGauge CharacterType
    enum CharacterType {
        SevenSegment,
        FourteenSegment,
        SixteenSegment,
        EightCrossEightDotMatrix,
        EightCrossEightSquareMatrix
    }
    //Enum for DigitalGauge FontStyle
    enum FontStyle {
        Normal,
        Bold,
        Italic,
        Underline,
        Strikeout
    }
    //Enum for DigitalGauge TextAlignment
    enum TextAlignment {
        Left,
        Right
    }
    //Enum for DigitalGauge Themes
    enum Themes {
        flatlight,
        flatdark
    }
    //#endregion DigitalGauge
    
    class Chart extends EJ.Core.Widget {
        static fn: Chart;
        constructor(element: JQuery, options?: ChartOptions);
        defaults: ChartOptions;
        redraw(): void;
        destroy(): void;
    }

    interface ChartOptions {
        border?: ChartBorder;
        background?: string;
        chartArea?: { border?: ChartBorder; background?: string };
        primaryXAxis?: Axis;
        primaryYAxis?: Axis;
        axes?: Array<Axis>;
        crosshair?: { marker?: Marker; visible?: boolean; type?: string };
        commonSeriesOptions?: Series;
        series?: Array<Series>;
        initSeriesRender?: boolean;
        theme?: string;
        canResize?: boolean;
        zooming?: { enable?: boolean; type?: string; enableMouseWheel?: boolean };
        legend?: { visible?: boolean; position?: string; alignmnet?: string; border?: Border; itemPadding?: number; shape?: string; location?: { x?: number; y?: Number }; itemStyle?: { height?: number; width?: number; border?: Border; rowCount?: number; columnCount?: number; fill?: string; font?: Font } }
        locale?: string;
        size?: { width?: string; height?: string };
        margin?: Margin;
        title?: { text?: string; font?: Font; textAlignment?: string };
        rowDefinitions?: Array<RowDefinition>;
        columnDefinition?: Array<ColumnDefinition>;
        load? (e: ChartEvent): void;
        axesLabelRendering? (e: ChartEvent): void;
        axesRangeCalculate? (e: ChartEvent): void;
        axesTitleRendering? (e: ChartEvent): void;
        chartAreaBoundsCalculate? (e: ChartEvent): void;
        legendItemRendering? (e: ChartEvent): void;
        legendBoundsCalculate? (e: ChartEvent): void;
        preRender? (e: ChartEvent): void;
        seriesRendering? (e: ChartEvent): void;
        symbolRendering? (e: ChartEvent): void;
        titleRendering? (e: ChartEvent): void;
        axesLabelsInitialize? (e: ChartEvent): void;
        pointRegionClick? (e: ChartEvent): void;
        pointRegionMouseMove? (e: ChartEvent): void;
        legendItemClick? (e: ChartEvent): void;
        legendItemMouseMove? (e: ChartEvent): void;
        displayTextRendering? (e: ChartEvent): void;
        toolTipInitialize? (e: ChartEvent): void;
        trackAxisToolTip? (e: ChartEvent): void;
        trackToolTip? (e: ChartEvent): void;
        destroy? (e: ChartEvent): void;
        create? (e: ChartEvent): void;
    }

    interface ChartBorder {
        color?: string;
        width?: number;
        opacity?: number;
    }

    interface Border {
        color?: string;
        width?: number;
    }

    interface Axis {
        majorGridLines?: { width?: number; dashArray?: string; visible?: boolean; opacity?: number };
        minorGridLines?: { width?: number; dashArray?: string; visible?: boolean };
        minorTickLines?: { width?: number; size?: number; visible?: boolean };
        majorTickLines?: { width?: number; size?: number; visible?: boolean };
        minorTicksPerInterval?: number;
        columnIndex?: number;
        columnSpan?: number;
        rowIndex?: number;
        rowSpan?: number;
        labelRotation?: number;
        valueType?: string;
        name?: string;
        labelFormat?: string;
        desiredIntervals?: number;
        intervalType?: string;
        roundingPlaces?: number;
        logBase?: number;
        plotOffset?: number;
        stripLine?: Array<StripLines>;
        title?: Title;
        rangePadding?: string;
        orientation?: string;
        maximumLabels?: number;
        opposedPosition?: boolean;
        axisLine?: { visible?: boolean; width?: number; dashArray?: string; offset?: number };
        labelIntersectAction?: string;
        edgeLabelPlacement?: string;
        font?: Font;
        visible?: boolean;
        crosshairLabel?: { visible?: boolean; font?: Font; rx?: number; ry?: number; fill?: string; border?: Border };
        zoomFactor?: number;
        zoomPosition?: number;

    }

    interface Series {
        points?: Array<Point>;
        marker?: Marker;
        tooltip?: { visible?: boolean; format?: string; template?: string; enableAnimation?: boolean; duration?: string; font?: Font; border?: Border; rx?: number; ry?: number; fill?: string };
        font?: Font;
        labelPosition?: string;
        type?: string;
        visibility?: boolean;
        name?: string;
        yAxisName?: string;
        xAxisName?: string;
        pyramidMode?: string;
        gapRatio?: number;
        doughnutSize?: number;
        pieCoefficient?: number;
        doughnutCoefficient?: number;
        explodeOffset?: number;
        startAngle?: number;
        explodeIndex?: number;
        enableAnimation?: boolean;
        explodeAll?: boolean;
        drawMode?: string;
        bullFillColor?: string;
        bearFillColor?: string;
        smartLabelEnabled?: boolean;
        explode?: boolean;
        border?: Border;
        dashArray?: string;
        lineJoin?: string;
        lineCap?: string;
        width?: number;
        opacity?: number;
        fill?: string;
        dataSource?: any;
        xName?: string;
        yName?: string;
        query?: string;
    }

    interface Point {
        x?: any;
        y?: number;
        high?: number;
        low?: number;
        open?: number;
        close?: number;
        size?: number;
        visible?: boolean;
        isEmpty?: boolean;
        interior?: string;
        text?: string;
        offset?: number;
        font?: Font;
        fill?: string;
        opacity?: number;
        border?: Border;
        width?: number;
        marker?: Marker
    }

    interface StripLines {
        visible?: boolean;
        startFromAxis?: boolean;
        text?: string;
        textAlignment?: string;
        font?: Font;
        start?: number;
        end?: number;
        color?: string;
        borderColor?: string;
        zIndex?: string;
        borderWidth?: number;
    }

    interface RowDefinition {
        rowHeight?: number;
        lineWidth?: number;
        lineColor?: string;
        unit?: string
    }

    interface ColumnDefinition {
        columnWidth?: number;
        unit?: string
    }

    interface Font {
        fontFamily?: string;
        fontStyle?: string;
        size?: string;
        color?: string;
        opacity?: number;
    }

    interface Title {
        text?: string;
        font?: Font;
    }

    interface Marker {
        visible?: boolean;
        size?: { width?: number; height?: number };
        opacity?: number;
        shape?: string;
        dataLabel?: DataLabel;
        border?: { width?: number; color?: string };
    }

    interface DataLabel {
        textPosition?: string;
        horizontalTextAlignment?: string;
        verticalTextAlignment?: string;
        visible?: boolean;
        offset?: number;
        template?: string;
        font?: Font;
        shape?: string;
        connectorLine?: { color?: string; width?: number; connectorType?: string };
        margin?: Margin;
        border?: Border;
        fill?: string;
        opacity?: number;
    }

    interface Margin {
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
    }

    interface ChartEvent {
        cancel: boolean;
        type: string;
        model: ChartOptions;
    }

    class RangeNavigator extends EJ.Core.Widget {
        static fn: RangeNavigator;
        constructor(element: JQuery, options?: RangeNavigatorOptions);
        defaults: RangeNavigatorOptions;
        renderNavigator(): void;
    }
    interface RangeNavigatorOptions {
        theme?: string;
        padding?: string;
        enableAutoResizing?: boolean;
        allowSnapping?: boolean;
        rangePadding?: string;
        sizeSettings?: { width?: string; height?: string };
        locale?: string;
        valueType?: string;
        valueAxisSettings?: { rangePadding?: string; visible?: boolean; axisLine: { visible?: boolean }; font: { size?: string }; majorTickLines: { width?: number; size?: number; visible?: boolean }; majorGridLines: { visible?: boolean } }
        enableRTL?: boolean;
        dataSource?: any;
        xName?: string;
        yName?: string;
        tooltipSettings?: { visible?: boolean; labelFormat?: string; tooltipDisplayMode?: string; backgroundColor?: string; font?: RangeFont };
        zoomPosition?: string;
        zoomFactor?: string;
        selectedRangeSettings?: { start?: string; end?: string };
        selectedData?: string;
        rangeSettings?: { start?: string; end?: string };
        series?: Array<Series>;
        enableDeferredUpdate?: boolean;
        seriesSettings?: { type?: string; animation?: boolean };
        labelSettings?: { higherLevel?: Labels; lowerLevel?: Labels; style?: { font?: RangeFont; horizontalAlignment?: string} };
        navigatorStyleSettings?: { selectedRegionColor?: string; unselectedRegionColor?: string; thumbColor?: string; thumbRadius?: number; thumbStroke?: string; background?: string; border?: { width?: number; stroke?: string; dashArray?: string }; opacity?: number; majorGridLineStyle?: { visible?: boolean; color?: string }; minorGridLineStyle?: { visible?: boolean; color?: string } };
        loaded? (e: RangeNavigatorEvent): void;
        load? (e: RangeNavigatorEvent): void;
        rangeChanged? (e: RangeNavigatorEvent): void;
    }

    interface Labels {
        intervalType?: string;
        style?: { font?: RangeFont; horizontalAlignment?: string };
        gridLineStyle?: { color?: string; width?: number; stroke?: string; dashArray?:string};
        border?: Border;
        fill?: string;
        position?: string;
        visible?: boolean;
        labelPosition?: string;
    }

    interface RangeFont {
        family?: string;
        style?: string;
        weight?: string;
        size?: string;
        color?: string;
        opacity?: number;
    }

    interface RangeNavigatorEvent {
        cancel: boolean;
        type: string;
        model: RangeNavigatorOptions;
    }

    class BulletGraph extends EJ.Core.Widget {
        static fn: BulletGraph;
        constructor(element: JQuery, options?: BulletGraphOptions);
        defaults: BulletGraphOptions;
        redraw(): void;
        destroy(): void;
        setFeatureMeasureBarValue(index, measureValue): void;
        setComparativeMeasureSymbol(index, measureValue): void;
    }

    interface BulletGraphOptions {
        value?: number;
        comparativeMeasureValue?: number;
        width?: number;
        height?: number;
        theme?: string;
        orientation?: string;
        flowDirection?: string;
        qualitativeRangeSize?: number;
        quantitativeScaleLength?: number;
        tooltipSettings?: { visible?: boolean; template?: string };
        quantitativeScaleSettings?: QuantitativeScale;
        fields?: { dataSource?: any; query?: string; tableName?: string; category?: string; featureMeasures?: string; comparativeMeasure?: string; };
        enableAnimation?: boolean;
        enableResizing?: boolean;
        applyRangeStrokeToTicks?: boolean;
        applyRangeStrokeToLabels?: boolean;
        qualitativeRanges?: Array<{ rangeEnd?: number; rangeStroke?: number; rangeOpacity?: number }>;
        captionSettings?: { textAngle?: number; location?: { x?: number; y?: number }; text?: string; font?: Font; subTitle?: { textAngle?: number; location?: { x?: number; y?: number }; text?: string; font?: Font } }
        drawTicks? (e: BulletGraphEvent): void;
        drawLabels? (e: BulletGraphEvent): void;
        drawCaption? (e: BulletGraphEvent): void;
        drawQualitativeRanges? (e: BulletGraphEvent): void;
        drawFeatureMeasureBar? (e: BulletGraphEvent): void;
        drawCategory? (e: BulletGraphEvent): void;
        drawComparativeMeasureSymbol? (e: BulletGraphEvent): void;
    }

    interface QuantitativeScale {
        location?: { x?: number; y?: number };
        minimum?: number;
        maximum?: number;
        interval?: number;
        minorTicksPerInterval?: number;
        majorTickSettings?: { size?: number; stroke?: number; width?: number };
        minorTickSettings?: { size?: number; stroke?: number; width?: number; };
        tickPosition?: string;
        labelSettings?: { stroke?: string; size?: number; offset?: number; font?: Font; position?:string};
        labelPosition?: string;
        featuredMeasureSettings?: { stroke?: number; width?: number };
        comparativeMeasureSettings?: { stroke?: number; width?: number };
        featureMeasures?: Array<{ value?: number; comparativeMeasureValue?: number; category?: string }>;
    }

    interface BulletGraphEvent {
        cancel: boolean;
        type: string;
        model: BulletGraphOptions;
    }

    class Barcode extends EJ.Core.Widget {
        static fn: Barcode;
        constructor(element: JQuery, options?: BarcodeOptions);
        defaults: BarcodeOptions;
    }

    interface BarcodeOptions {
        displayText?: boolean;
        text?: string;
        symbologyType?: SymbologyType;
        textColor?: string;
        lightBarColor?: string;
        darkBarColor?: string;
        narrowBarWidth?: number;
        wideBarWidth?: number;
        barHeight?: number;
        barcodeToTextGapHeight?: number;
        xDimension?: number;
        encodeStartStopSymbol?: boolean;
        enabled?: boolean;
        load? (e: BarcodeEvent): void;
    }

    interface BarcodeEvent {
        cancel: boolean;
        type: string;
        model: BarcodeOptions;
    }

    enum SymbologyType {
        code39,
        code39Extended,
        code11,
        codabar,
        code32,
        code93,
        code93Extended,
        code128A,
        code128B,
        code128C,
        dataMatrix,
        qrBarcode
    }
	
	 class Map extends EJ.Core.Widget {
        static fn: Map;
        constructor(element?: JQuery, options?: MapOptions);
        constructor(element?: Element, options?: MapOptions);
        model: Object;
        defaults: MapOptions;
        navigateTo(latitude:number, longitude:number, level:number): void;
        pan(direction:string): void;
        refresh(): void;
        refreshLayers(): void;
        refreshNavigationControl(navigation): void;
        zoom(level:number, isAnimate:boolean): void;
    }

    interface MapOptions {
        enablePan?: boolean;
        baseMapIndex?: number;
        enableAnimation?: boolean;
        layers?: Array<ShapeLayer>;
        zoomSettings?: ZoomSettings;
        background?: string;
        enableResize?: boolean;
        enableLayerChangeAnimation?: boolean;
        navigationControl?: NavigationControl;
        dataSource?: any;
        centerPosition?: ShapePoint;
        zoomedIn? (e:MapZoomEvent): void;
		zoomedOut? (e:MapZoomEvent): void;
		panned? (e:MapEvent): void;
		shapeSelected? (e:MapSelectEvent): void;
		onRenderComplete? (e:MapRenderCompleteEvent): void;
		mouseover? (e:MapShapeMouseEvent): void;
		mouseleave? (e:MapShapeMouseEvent): void;
		markerSelected? (e:MapSelectEvent): void;
    }

    interface ZoomSettings {
        minValue?: number;
        maxValue?: number;
        factor?: number;
        level?: number;
        enableZoomOnSelection?: boolean;
        enableZoom?: boolean;
    }

    interface BubbleSetting {
        minValue?: number;
        maxValue?: number;
        color?: string;
        colorValuePath?: string;
        valuePath?: string;
        tooltipTemplate?: string;
        colorMappings?: ColorMapping;
        showToolTip?: boolean
    }

    interface ColorMapping {
        color?: string;
    }

    interface RangeColorMapping extends ColorMapping {
        from?: number;
        to?: number;
        gradientColors?: Array<string>;
        legendLabel?: string;
    }

    interface EqualColorMapping extends ColorMapping {
        value?: any;
    }

    interface MapLabelSetting {
        showLabels?: boolean;
        enableSmartLabel?: boolean;
        labelPath?: string;
        smartLabelSize?: string;
        labelLength?: number;
    }

    interface MapLegendSetting {
        showLegend?: boolean;
        positionX?: number;
        positionY?: number;
        width?: number;
        height?: number;
        type?: string;
        title?: string;
        leftLabel?: string;
        rightLabel?: string;
        icon?: string;
        mode?: string;
        position?: string;
    }

    interface MapAnnotation {
        label?: string;
        labelFontSize?: number;
        labelForeground?: string;
        latitude?: number;
        longitude?: number;
    }

    enum DockPosition {
        None,
        TopLeft,
        TopCenter,
        TopRight,
        CenterLeft,
        Center,
        CenterRight,
        Bottomleft,
        BottomCenter,
        BottomRight
    }

    enum LegendIcons {
        Rectangle,
        Circle
    }

    enum LabelSize {
        Fixed,
        Default
    }

    enum mode {
        Default,
        Interactive
    }

    enum LayerType {
        Geometry,
        OSM,
        Bing
    }

    enum SelectionMode {
        Default,
        Multiple
    }

    enum Orientation {
        Vertical,
        horizontal
    }

    enum ColorPalette {
        Palette1,
        Palette2,
        Palette3,
        Palette4
    }

    interface NavigationControl {
        enableNavigation?: boolean;
        orientation?: string;
        dockPosition?: string;
        absolutePosition?: ShapePoint;
    }

    interface ShapeSetting {
        highlightColor?: string;
        highlightBorderWidth?: number;
        selectionColor?: string;
        fill?: string;
        strokeThickness?: number;
        selectionStrokeWidth?: number;
        stroke?: string;
        selectionStroke?: string;
        highlightStroke?: string;
        colorValuePath?: string;
        valuePath?: string;
        colorMappings?: ColorMapping
		autoFill?: boolean;
        enableGradient?: boolean;
        colorPalette?: string;
    }

    interface MapMarkers {
        mapMarker?: MapMarkers
    }

    interface ShapePoint {
        X?: number;
        Y?: number;
    }

    interface ShapeLayer {
        enableSelection?: boolean;
        selectionMode?: string;
        enableMouseHover?: boolean;
        showToolTip?: boolean;
        enableAnimation?: boolean;
        showMapItems?: boolean;
        shapeData?: any;
        dataSource?: any;
        markerTemplate?: string;
        tooltipTemplate?: string;
        mapItemsTemplate?: string;
        shapePropertyPath?: string;
        shapeDataPath?: string;
        markers?: Array<MapMarkers>;
        subLayers?: Array<ShapeLayer>;
        shapeSettings?: ShapeSetting;
        bubbleSettings?: BubbleSetting;
        labelSettings?: MapLabelSetting;
        urlTemplate?: string;
        contribution?: string;
        legendSettings?: MapLegendSetting;
        layerType?: string;
    }

    interface MapEvent extends EJ.Core.BaseEvent {
        model: MapOptions;
    }

    interface MapZoomEvent extends EJ.Core.BaseEvent, MapEvent {
        data: any;
    }
    interface MapSelectEvent extends EJ.Core.BaseEvent, MapEvent {
        data: any;
    }
    interface MapRenderCompleteEvent extends EJ.Core.BaseEvent, MapEvent {
        data: any;
    }
    interface MapShapeMouseEvent extends EJ.Core.BaseEvent, MapEvent {
        data: string;
    }

     class TreeMap extends EJ.Core.Widget {
        static fn: TreeMap;
        element: JQuery;
        constructor(element?: Element, options?: TreeMapOptions);
        constructor(element?: JQuery, options?: TreeMapOptions);
        model: Object;
        defaults: TreeMapOptions;
        refresh(): void;
    }

    interface TreeMapOptions {
        dataSource?: any;
        colorValuePath?: string;
        weightValuePath?: string;
        treeMapItems?: any;
        showLegend?: boolean;
        enableResize?: boolean;
        leafItemSettings?: LeafItemsSetting;
        itemsLayoutMode?: string;
        levels?: Array<TreeMapLevel>;
        treeMapLegend?: TreeMapLegend;
        highlightOnSelection?: boolean;
        showTooltip?: boolean;
        tooltipTemplate?: string;
        highlightBorderThickness?: number;
        highlightBorderBrush?: string;
        rangeColorMapping?: Array<TreeMapRangeColorMapping>;
        desaturationColorMapping?: TreeMapDesaturationColorMapping;
        paletteColorMapping?: TreeMapPaletteColorMapping;
        uniColorMapping?: TreeMapUniColorMapping;
        treeMapItemSelected? (e: TreeMapSelectEvent): void;
    }

    interface TreeMapItem {
    }

    interface LeafItemsSetting {
        GroupBorderThickness?: number;
        GroupPadding?: number;
        GroupBackground?: string;
        GroupBorderColor?: string;
        showLabels?: boolean;
        headerTemplate?: string;
        itemTemplate?: string;
        groupBackground?: string;
        groupBorderColor?: string;
        groupBorderThickness?: number;
        groupPadding?: number;
        treeMapItems?: Array<TreeMapItem>;
    }

    interface TreeMapRangeColorMapping extends TreeMapPaletteColorMapping {
        from?: number;
        to?: number;
        legendLabel?: string;
    }

    interface TreeMapDesaturationColorMapping extends TreeMapPaletteColorMapping {
        from?: number;
        to?: number;
        rangeMinimum?: number;
        rangeMaximum?: number;
    }

    interface TreeMapUniColorMapping extends TreeMapPaletteColorMapping {
        color?: string;
    }

    interface TreeMapPaletteColorMapping {
        colors?: Array<string>;
    }

    interface TreeMapLegend {
        template?: string;
        iconHeight?: number;
        iconWidth?: number;
    }

    interface TreeMapLevel {
        itemsLayoutMode?: string;
        groupPath?: string;
        groupGap?: number;
        headerHeight?: number;
        showLabels?: boolean;
        headerTemplate?: string;
        labelTemplate?: string;
        groupBackground?: string;
        groupBorderColor?: string;
        groupBorderThickness?: number;
        groupPadding?: number;
        treeMapItems?: Array<TreeMapItem>;
    }

    interface TreeMapEvent extends EJ.Core.BaseEvent {
        model: TreeMapOptions;
    }
    interface TreeMapSelectEvent extends EJ.Core.BaseEvent, TreeMapEvent {
        data: any;
    }
	 
    //SymbolPalette
    class SymbolPalette extends EJ.Core.Widget {
        static fn: SymbolPalette;
        element: JQuery;
        constructor(element: Element, options?: SymbolPaletteOptions);
        model: Object;
        validTags: Array<string>;
        defaults: SymbolPaletteOptions;
        disable(): void;
        enable(): void;
        destroy(): void;
    }

    interface SymbolPaletteOptions {
        width?: string;
        height?: string;
        paletteItemWidth?: number;
        paletteItemHeight?: number;
        previewWidth?: number;
        previewHeight?: number;
        previewX?: number;
        previewY?: number;
        diagramId?: string;
        headerHeight?: number;
        selectedPaletteIndex?: number;
        cssClass?: string;
        showPaletteItemText?: boolean;
        allowDrag?: boolean;
        palettes?: Array<Object>;
    }

    //Diagram
    class Diagram extends EJ.Core.Widget {
        static fn: Diagram;
        element: JQuery;
        constructor(element: Element, options?: DiagramOptions);
        model: Object;
        validTags: Array<string>;
        defaults: DiagramOptions;
        disable(): void;
        enable(): void;
        destroy(): void;
    }

    interface DiagramOptions {
        width?: string;
        height?: string;
        nodes?: Array<Object>;
        connectors?: Array<Object>;
        dataSource?: Array<Object>;
        connectorDefaults?: Object;
        nodeDefaults?: Object;
        nodeTemplate? (e: TemplateFunction): Object;
        snapSettings?: SnapSettingsOption;
        pageSettings?: PageSettingsOption;
        contextMenu?: ContextMenuOption;
        enableContextMenu?: boolean;
        enableAutoScroll?: boolean;
        showTooltip?: boolean;
        tooltipTemplateId?: string;
        autoScrollMargin?: number;
        layout?: LayoutOptions;
        userHandles?: Array<Object>;
        drawingTools?: Array<Object>;
        backgroundImage?: string;
        selectorConstraints?: SelectorConstraintsOption;
        zoomFactor?: number;
        nodeCollectionChange? (e: NodeCollectionChangeEvent): void;
        connectorCollectionChange? (e: ConnectorCollectionChangeEvent): void;
        selectionChange? (e: SelectionChangeEvent): void;
        mouseLeave? (e: MouseEvent): void;
        mouseEnter? (e: MouseEvent): void;
        mouseHover? (e: MouseEvent): void;
        click? (e: clickEvent): void;
        doubleClick? (e: DoubleclickEvent): void;
        drop? (e: DropEvent): void;
        drag? (e: DragEvent): void;
        textChange? (e: TextChangeEvent): void;
        sizeChange? (e: SizeChangeEvent): void;
        connectionChange? (e: ConnectionChangeEvent): void;
        rotationChange? (e: RotationChangeEvent): void;
    }

    interface TemplateFunction {
        option: Object;
    }

    interface MouseEvent {
        cancel?: boolean;
        element?: Object;
        type?: string;
    }

    interface ConnectionChangeEvent {
        cancel?: boolean;
        connection?: Object;
        element?: Object;
        endPoint?: string;
        port?: Object;
        type?: string;
    }

    interface RotationChangeEvent {
        cancel?: boolean;
        element?: Object;
        type?: string;
    }

    interface SizeChangeEvent {
        cancel?: boolean;
        element?: Object;
        offset?: SizeChangeOffsetOption;
        type?: string;
    }

    interface SizeChangeOffsetOption {
        height?: number;
        width?: number;
    }

    interface TextChangeEvent {
        cancel?: boolean;
        element?: Object;
        type?: string;
        value?: string;
    }


    interface DragEvent {
        cancel?: boolean;
        element?: Object;
        offset?: DragOffsetOption;
        type?: string;
    }

    interface DragOffsetOption {
        x?: number;
        y?: number;
    }

    interface DropEvent {
        cancel?: boolean;
        element?: Object;
        type?: string;
    }

    interface ConnectorCollectionChangeEvent {
        cancel?: boolean;
        changeType?: string;
        element?: Object;
        type?: string;
    }

    interface NodeCollectionChangeEvent {
        cancel?: boolean;
        changeType?: string;
        element?: Object;
        type?: string;
    }

    interface SelectionChangeEvent {
        cancel?: boolean;
        changeType?: string;
        element?: Array<Object>;
        type?: string;
    }

    interface beforeContextOpenEvent {
        cancel?: boolean;
        type?: string;
        diagram?: Object;
        contextmenu?: Object;
    }

    interface clickEvent {
        cancel?: boolean;
        type?: string;
        element?: Object;
    }

    interface DoubleclickEvent {
        cancel?: boolean;
        type?: string;
        element?: Object;
    }

    enum SelectorConstraintsOption {
        Rotator,
        Resizer,
        UserHandles
    }

    interface LayoutOptions {
        type?: string;
        orientation?: string;
        horizontalSpacing?: number;
        verticalSpacing?: number;
        marginX?: number;
        marginY?: number;
        fixedNode?: string;
    }

    interface ContextMenuOption {
        items?: Array<Object>;
        click? (e: ContextclickEvent): void;
        beforeOpen? (e: beforeContextOpenEvent): void;
        showCustomMenuItemsOnly?: boolean;
    }

    interface ContextclickEvent {
        cancel?: boolean;
        type?: string;
        Events?: Object;

    }

    interface PageSettingsOption {
        pageWidth?: number;
        pageHeight?: number;
        multiplePage?: boolean;
        pageBorderWidth?: number;
        pageBackgroundColor?: string;
        pageBorderColor?: string;
        pageMargin?: number;
        showPageBreak?: boolean;
        pageOrientation?: string;
    }

    interface SnapSettingsOption {
        horizontalGridLines?: HorizontalGridLinesOptions;
        verticalGridLines?: VerticalGridLinesOptions;
        snapConstraints?: SnapConstraintsOptions;
        enableSnapToObject?: boolean;
        snapAngle?: number;
        snapObjectDistance?: number;
    }

    interface HorizontalGridLinesOptions {
        linesInterval?: Array<string>;
        snapInterval?: Array<string>;
        lineDashArray?: string;
        lineColor?: string;
    }

    interface VerticalGridLinesOptions {
        linesInterval?: Array<string>;
        snapInterval?: Array<string>;
        lineDashArray?: string;
        lineColor?: string;
    }

    enum SnapConstraintsOptions {
        None,
        SnapToHorizontalLines,
        SnapToVerticalLines,
        SnapToLines, 
        ShowHorizontalLines,
        ShowVerticalLines,
        ShowLines,
        All
    }
    module Diagram {
        function Point(x?: number, y?: number): Object;
        function Size(width?: number, height?: number): Object;
        function Rectangle(x?: number, y?: number, width?: number, height?: number): Object;
        function Node(options?: Object): Object;
        function Connector(options?: Object): Object;
        function Group(options?: Object): Object;
        function Port(options?: Object): Object;
        function Label(options?: Object): Object;
        function Shape(options?: Object): Object;
        function Line(options?: Object): Object;
        function TextBlock(options?: Object): Object;
        function Decorator(options?: Object): Object;
        function Margin(options?: Object): Object;
        function Stop(options?: Object): Object;
        function LinearGradient(options?: Object): Object;
        function RadialGradient(options?: Object): Object;
        function Zoom(options?: Object): Object;
        function UserHandle(options?: Object): Object;
        function Palette(options?: Object): Object;

        var Util: {
            randomId();
        }

    var SelectorConstraints: {
            None;
            Rotator;
            Resizer;
            UserHandles;
            All;
        }

    var SnapConstraints: {
            None;
            SnapToHorizontalLines;
            SnapToVerticalLines;
            SnapToLines;
            ShowHorizontalLines;
            ShowVerticalLines;
            ShowLines;
            All;
        }

    var NodeConstraints: {
            Drag;
            Rotate;
            Select;
            Delete;
            Resize;
            Connect;
            None;
        }

    var ConnectorConstraints: {
            Drag;
            Rotate;
            Select;
            Delete;
            DragSourceEnd;
            DragTargetEnd;
            DragSegmentThumb;
            None;
        }

    var PortConstraints: {
            Connect;
            None;
        }

}
}

interface JQuery {
   ejButton(): JQuery;
    ejButton(options?: ej.ButtonOptions): JQuery;

    ejAccordion(): JQuery;
    ejAccordion(options?: ej.AccordionOptions): JQuery;

    ejAutocomplete(): JQuery;
    ejAutocomplete(options?: ej.AutocompleteOptions): JQuery;

    ejDatePicker(): JQuery;
    ejDatePicker(options?: ej.DatePickerOptions): JQuery;

    ejDateTimePicker(): JQuery;
    ejDateTimePicker(options?: ej.DateTimePickerOptions): JQuery;

    ejDialog(): JQuery;
    ejDialog(options?: ej.DialogOptions): JQuery;


    ejDropDownList(): JQuery;
    ejDropDownList(options?: ej.DropDownListOptions): JQuery;


    ejNumericTextbox(): JQuery;
    ejNumericTextbox(options?: ej.EditorOptions): JQuery;

    ejCurrencyTextbox(): JQuery;
    ejCurrencyTextbox(options?: ej.EditorOptions): JQuery;

    ejPercentageTextbox(): JQuery;
    ejPercentageTextbox(options?: ej.EditorOptions): JQuery;

    ejMaskEdit(): JQuery;
    ejMaskEdit(options?: ej.MaskEditOptions): JQuery;

    ejMenu(): JQuery;
    ejMenu(options?: ej.MenuOptions): JQuery;

    ejPager(): JQuery;
    ejPager(options?: ej.PagerOptions): JQuery;


    ejProgressBar(): JQuery;
    ejProgressBar(options?: ej.ProgressBarOptions): JQuery;


    ejRadioButton(): JQuery;
    ejRadioButton(options?: ej.RadioButtonOptions): JQuery;

	 ejCheckBox(): JQuery;
    ejCheckBox(options?: ej.CheckBoxOptions): JQuery;
	
    ejRating(): JQuery;
    ejRating(options?: ej.RatingOptions): JQuery;

    ejRotator(): JQuery;
    ejRotator(options?: ej.RotatorOptions): JQuery;

    ejRTE(): JQuery;
    ejRTE(options?: ej.RTEOptions): JQuery;

    ejSlider(): JQuery;
    ejSlider(options?: ej.SliderOptions): JQuery;

    ejSplitButton(): JQuery;
    ejSplitButton(options?: ej.SplitButtonOptions): JQuery;


    ejSplitter(): JQuery;
    ejSplitter(options?: ej.SplitterOptions): JQuery;


    ejTab(): JQuery;
    ejTab(options?: ej.TabOptions): JQuery;

    ejTagCloud(): JQuery;
    ejTagCloud(options?: ej.TagCloudOptions): JQuery;

    ejTimePicker(): JQuery;
    ejTimePicker(options?: ej.TimePickerOptions): JQuery;

    ejToggleButton(): JQuery;
    ejToggleButton(options?: ej.ToggleButtonOptions): JQuery;

    ejToolbar(): JQuery;
    ejToolbar(options?: ej.ToolbarOptions): JQuery;

    ejTreeView(): JQuery;
    ejTreeView(options?: ej.TreeViewOptions): JQuery;


    ejUploadbox(): JQuery;
    ejUploadbox(options?: ej.UploadboxOptions): JQuery;


    ejWaitingPopup(): JQuery;
    ejWaitingPopup(options?: ej.WaitingPopupOptions): JQuery;

    ejSchedule(): JQuery;
    ejSchedule(options?: ej.ScheduleOptions): JQuery;

    ejGrid(): JQuery;
    ejGrid(options?: ej.GridOptions): JQuery;

    ejLinearGauge(): JQuery;
    ejLinearGauge(options?: ej.datavisualization.LinearGaugeOptions): JQuery;

    ejDigitalGauge(): JQuery;
    ejDigitalGauge(options?: ej.datavisualization.DigitalGaugeOptions): JQuery;

    ejCircularGauge(): JQuery;
    ejCircularGauge(options?: ej.datavisualization.CircularGaugeOptions): JQuery;

    ejChart(): JQuery;
    ejChart(options?: ej.datavisualization.ChartOptions): JQuery;

    ejRangeNavigator(): JQuery;
    ejRangeNavigator(options?: ej.datavisualization.RangeNavigatorOptions): JQuery;

    ejBulletGraph(): JQuery;
    ejBulletGraph(options?: ej.datavisualization.BulletGraphOptions): JQuery;

    ejGantt(): JQuery;
    ejGantt(options?: ej.GanttOptions): JQuery;

    ejTreeGrid(): JQuery;
    ejTreeGrid(options?: ej.TreeGridOptions): JQuery;

   

    ejMap(): JQuery;
    ejMap(options?: ej.datavisualization.MapOptions): JQuery;

    ejTreeMap(): JQuery;
    ejTreeMap(options?: ej.datavisualization.TreeMapOptions): JQuery;
 

    ejBarcode(): JQuery;
    ejBarcode(options?: ej.datavisualization.Barcode): JQuery;

    ejDiagram(): JQuery;
    ejDiagram(options?: ej.datavisualization.DiagramOptions): JQuery;

    ejSymbolPalette(): JQuery;
    ejSymbolPalette(options?: ej.datavisualization.SymbolPaletteOptions): JQuery;

    ejOlapChart(): JQuery;
    ejOlapChart(options?: ej.olap.OlapChartOptions): JQuery;

    ejOlapGrid(): JQuery;
    ejOlapGrid(options?: ej.olap.OlapGridOptions): JQuery;

    ejOlapClient(): JQuery;
    ejOlapClient(options?: ej.olap.OlapClientOptions): JQuery;

    ejOlapGauge(): JQuery;
    ejOlapGauge(options?: ej.olap.OlapGaugeOptions): JQuery;

    ejOlapPager(): JQuery;
    ejOlapPager(options?: ej.olap.OlapPagerOptions): JQuery;

    /*Accordion*/
    ejmAccordion(): JQuery;
    ejmAccordion(options?: ej.mobile.AccordionOptions): JQuery;
    /*Accordion*/

    /*AutoComplete*/
    ejmAutocomplete(): JQuery;
    ejmAutocomplete(options?: ej.mobile.AutocompleteOptions): JQuery;
    /*AutoComplete*/

    /*Button*/
    ejmButton(): JQuery;
    ejmButton(options?: ej.mobile.ButtonOptions): JQuery;

    ejmActionlink(): JQuery;
    ejmActionlink(options?: ej.mobile.ButtonOptions): JQuery;
    /*Button*/

    /* DatePicker */
    ejmDatePicker(): JQuery;
    ejmDatePicker(options?: ej.mobile.DatePickerOptions): JQuery;
    /* DatePicker */

    /*Editor*/
    ejmNumeric(): JQuery;
    ejmNumeric(options?: ej.mobile.EditorOptions): JQuery;
    /*Editor*/

    /* Grid Start */
    ejmGrid(): JQuery;
    ejmGrid(options?: ej.mobile.GridOptions): JQuery;
    /* Grid End */

    /*Header*/
    ejmHeader(): JQuery;
    ejmHeader(options?: ej.mobile.HeaderOptions): JQuery;
    /*Header*/

    /*ListBox*/
    ejmListbox(): JQuery;
    ejmListbox(options?: ej.mobile.ListboxOptions): JQuery;
    /*ListBox*/

    /*Menu*/
    ejmMenu(options?: ej.mobile.MenuOptions): JQuery;
    /*Menu*/

    /* ProgressBar */
    ejmProgress(): JQuery;
    ejmProgress(options?: ej.mobile.ProgressOptions): JQuery;
    /* ProgressBar */

    /*Radio Button*/
    ejmRadioButton(): JQuery;
    ejmRadioButton(options?: ej.mobile.RadioButtonOptions): JQuery;
    /*Radio Button*/

    /*Rating*/
    ejmRating(): JQuery;
    ejmRating(options?: ej.mobile.RatingOptions);
    /*Rating*/


    /*Rotator*/
    ejmRotator(): JQuery;
    ejmRotator(options?: ej.mobile.RotatorOptions): JQuery;
    /*Rotator*/

    /*Slider*/
    ejmSlider(): JQuery;
    ejmSlider(options?: ej.mobile.SliderOptions): JQuery;
    /*Slider*/

    /* Tab */
    ejmTab(): JQuery;
    ejmTab(options?: ej.mobile.TabOptions): JQuery;
    /* Tab */

    /*Tile*/
    ejmTile(): JQuery;
    ejmTile(options?: ej.mobile.TileOptions): JQuery;
    /*Tile*/

    /* TimePicker */
    ejmTimePicker(): JQuery;
    ejmTimePicker(options?: ej.mobile.TimePickerOptions): JQuery;
    /* TimePicker */

    /*ToggleButton*/
    ejmToggleButton(): JQuery;
    ejmToggleButton(options?: ej.mobile.ToggleButtonOptions): JQuery;
    /*ToggleButton*/

    /*Toolbar*/
    ejmToolbar(): JQuery;
    ejmToolbar(options?: ej.mobile.ToolbarOptions): JQuery;
    /*Toolbar*/

    /*GroupButton*/
    ejmGroupButton(): JQuery;
    ejmGroupButton(options?: ej.mobile.GroupButtonOptions): JQuery;
    /*GroupButton*/

    /* SplitPane */
    ejmSplitPane(): JQuery;
    ejmSplitPane(options?: ej.mobile.SplitPaneOptions): JQuery;
    /* SplitPane */

    /* Dialog */
    ejmDialog(): JQuery;
    ejmDialog(options?: ej.mobile.DialogOptions): JQuery;
    /* Dialog */

    /* TextBox */
    ejmTextBox(): JQuery;
    ejmTextBox(options?: ej.mobile.TextBoxOptions): JQuery;
    /* TextBox */

    /* Password */
    ejmPassword(): JQuery;
    ejmPassword(options?: ej.mobile.TextBoxOptions): JQuery;
    /* Password */

    /* MaskEdit */
    ejmMaskEdit(): JQuery;
    ejmMaskEdit(options?: ej.mobile.MaskEditOptions): JQuery;
    /* MaskEdit */

    /* TextArea */
    ejmTextArea(): JQuery;
    ejmTextArea(options?: ej.mobile.TextBoxOptions): JQuery;
    /* MaskEdit */

    /* Footer */
    ejmFooter(): JQuery;
    ejmFooter(options?: ej.mobile.FooterOptions): JQuery;
    /* Footer */

    /* CheckBox */
    ejmCheckBox(): JQuery;
    ejmCheckBox(options?: ej.mobile.CheckBoxOptions): JQuery;
    /* CheckBox */

    /* ScrollPanel */
    ejmScrollPanel(): JQuery;
    ejmScrollPanel(options: ej.mobile.ScrollPanelOptions): JQuery;
    /* ScrollPanel */
}


