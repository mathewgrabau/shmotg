/*!
*  filename: ej.widgets.all.d.ts
*  version : 12.3
*  Copyright Syncfusion Inc. 2001 - 2014. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
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
class Captcha extends EJ.Core.Widget {
        static fn: Captcha;  
		element: JQuery;		
        constructor(element: JQuery, options?: CaptchaOptions);     
        constructor(element: Element, options?: CaptchaOptions);     
        playAudio():void;
		formSubmit():void;
		refresh():void;
    }
    interface CaptchaOptions {   

		targetInput?: string,
        targetButton?:string,
        height? :number,
        width? :number,
        characterSet? : string,
        maximumLength? :number,             
        minimumLength? :number,            
        enableCaseSensitivity? :boolean,
        enableAutoValidation? :boolean,            
        customErrorMessage?: string,            
        requestMapper?: string,
        enableAudio?:boolean,
        enableRefreshImage?:boolean,           
        enableRTL?:boolean,            
        mapper?:string,	
		refreshBegin? :(e:CaptchaEvent):void;
		refreshSuccess?:(e:CaptchaEvent):void;
		refreshFailure?:(e:CaptchaEvent):void;
		refreshComplete?:(e:CaptchaEvent):void;
    }
    interface CaptchaEvent  {
        model: CaptchaOptions;       
    }
	interface CaptchaRefreshBegin extends EJ.Core.BaseEvent,CaptchaEvent{
	data:any;	
	}
	interface CaptchaRefreshSuccess extends EJ.Core.BaseEvent,CaptchaEvent{
	data:any;
	content: JQuery;
	}
	interface CaptchaRefreshFailure extends EJ.Core.BaseEvent,CaptchaEvent{
	data:any;	
	}
	interface CaptchaRefreshComplete extends EJ.Core.BaseEvent,CaptchaEvent{
	data:any;	
	}
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
class ColorPicker extends EJ.Core.Widget {
    static fn: ColorPicker;
    constructor(element: JQuery, options?: ColorPickerOptions);
    constructor(element: Element, options?: ColorPickerOptions);
    disable(): void;
    enable(): void;
    show(): void;
    hide(): void;
    getValue(): string;
    setValue(): void;
    getColor(): JQuery;
    hexCodeToRGB(): JQuery;
    RGBToHEX(): string;
    HSVToRGB(): JQuery;
    RGBToHSV(): JQuery;        
}
interface ColorPickerOptions {
    buttonText?: ColorPickerButtonText;
    columns?: number;
    cssClass?: string;
    custom?: Array<string>;
    displayInine?: boolean;
    enableOpacity?: boolean;
    enabled?: boolean;
    modelType?: string;
    opacityValue?: number;
    palette?: string;
    presetType?: string;
    showPreview?: boolean;
    showRecentColors?: boolean;
    toolIcon?: string;
    value?: string;
    tooltipText?: ColorPickerTooltipText;
    change? (e: ColorPickerChangeEvent): void;
    close? (e: ColorPickerEvent): void;
    create? (e: ColorPickerEvent): void;
    destroy? (e: ColorPickerEvent): void;
    open? (e: ColorPickerEvent): void;
    select? (e: ColorPickerSelectEvent): void;
}
interface ColorPickerButtonText {
    apply?: string;
    cancel?: string;
}
interface ColorPickerTooltipText {
    addButton?: string;
    basic?: string;
    candyCrush?: string;
    citrus?: string;
    currentColor?: string;
    flatColors?: string;
    misty?: string;
    monoChrome?: string;
    moonLight?: string;
    pinkShades?: string;
    sandy?: string;
    seaWolf?: string;
    selectedColor?: string;
    switcher?: string;
    vintage?: string;
    webColors?: string;
}
interface ColorPickerEvent extends EJ.Core.BaseEvent {
    model: ColorPickerOptions;
}
interface ColorPickerChangeEvent extends EJ.Core.BaseEvent, ColorPickerEvent {
    value?: string;
}
interface ColorPickerSelectEvent extends EJ.Core.BaseEvent, ColorPickerEvent {
    value?: string;
}

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
 class PivotGrid extends EJ.Core.Widget {
        static fn: PivotGrid;
        element: JQuery;
        constructor(element: Element, options?: PivotGridOptions);
        model: Object;
        validTags: Array<string>;
        defaults: PivotGridOptions;
        dataTypes: PivotGridDataTypes;
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

    interface PivotGridOptions {
        url?: string;
        cssClass?: string;
        currentReport?: string;
	    analysisMode?: string;
        layout?: string;
        enablePivotFieldList?:boolean;
        enableVirtualScrolling?: boolean;
        enableCellContext?: boolean;
        enableRTL?: boolean;
        enableToolTip?:boolean;
        hyperlinkSettings?: HyperLinkSettings
        progressMode?: string;
        serviceMethodSettings?: PivotGridServiceMethods;
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

    interface PivotGridServiceMethods {
        initialize?: string;
        drillDown?: string;
        exportOptions?: string;
        paging?: string;
    }

    interface PivotGridDataTypes {
        serviceMethodSettings?: Object;
        customObject?: Object;
    }

 class PivotSchemaDesigner extends EJ.Core.Widget {
        static fn: PivotSchemaDesigner;
        element: JQuery;
        constructor(element: Element, options?: PivotSchemaDesignerOptions);
        model: Object;
        validTags: Array<string>;
        defaults: PivotSchemaDesignerOptions;
        dataTypes: PivotSchemaDesignerDataTypes;
        doAjaxPost(): void;
    }

    interface PivotSchemaDesignerOptions {
        url?: string;
        cssClass?: string;
        height?: string;
	width?: string;
	layout?: string;
	pivotControl?: Object;
	pivotTableFields?: Object;
        pivotCalculations?: Object;
        pivotColumns? : Object;
        pivotRows?: Object;
        serviceMethods?: PivotSchemaDesignerServiceMethods; 
    }
    interface PivotSchemaDesignerDataTypes {
        serviceMethods?: Object;
        customObject?: Object;
        pivotControl?: Object;
        pivotTableFieldList?: Array<string>;
        pivotCalculationList?: Array<string>;
        pivotColumnList?:Array<string>;
        pivotRowList?: Array<string>;
        filterList?: Array<string>;
    }

    interface PivotSchemaDesignerServiceMethods {
      
        fetchMembers?: string;
        nodeStateModified?: string;
        nodeDropped?: string;
        removeButton?: string;
        memberExpand?: string;
        filtering?: string;
}
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
        scheduleHeaderSettings?: { weekHeaderFormat?: string; dayHeaderFormat?: string; yearHeaderFormat?: string; monthHeaderFormat?: string; hourHeaderFormat?: string; scheduleHeaderType?: string; weekendBackground?: string };
        workingTimeScale?: string;
        roundOffDayworkingTime?: boolean;
        durationUnit?: string;
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
		editDialogFields?:Array<any>;
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

    class ReportViewer extends EJ.Core.Widget {
        static fn: ReportViewer;
        element: JQuery;
        constructor(element: Element, options?: ReportViewerOptions);
        model: Object;
        defaults: ReportViewerOptions;
        disable(): void;
        enable(): void;
        destroy(): void;
    }

    interface ReportViewerOptions {
        reportServiceUrl?: string;
        reportPath?: string;
        reportServerUrl?: string;
        dataSources?: Array<Object>;
        parameters?: Array<Object>;
		toolbarSettings?: ReportViewerToolbarOptions;
        exportSettings?: ReportViewerExportOptions;        
		locale?: string;
		printMode?: boolean;        
        processingMode?: ReportProcessingMode;
		zoomFactor?: string;
        reportLoaded? (e: ReportViewerEvent): void;
        renderingBegin? (e: ReportViewerEvent): void;
        renderingComplete? (e: ReportViewerEvent): void;
        reportError? (e: ReportViewerEvent): void;
        drillThrough? (e: ReportViewerEvent): void;
    }

    interface ReportViewerToolbarOptions {
        items?: ItemOptions;
        showToolbar?: boolean;
		templateId?: string;
		click? (e: ReportViewerToolbarEvent): void;
		showTooltip?: boolean;
    }
	
	interface ReportViewerExportOptions {
        exportOptions?: ExportOptions;	
		excelFormat?: ExcelFormatOptions;
		wordFormat?: WordFormatOptions;
    }

    enum ExportOptions {
        Excel,
        Html,
        Pdf,
        Word,
        All
    }
	
    enum ItemOptions {
        Export,
        Zoom,
        PageNavigation,
        Refresh,
        Print,
        DocumentMap,
        Parameters,
		PrintLayout,
        All
    }

    enum ReportProcessingMode {
        Remote,
        Local
    }
	
	enum ExcelFormatOptions{
        Excel97to2003,
        Excel2007,
        Excel2010,
        Excel2013        
	}
	
	enum WordFormatOptions{
	    Doc,
	    Dot,
	    Docx,
	    Word2007,
	    Word2010,
	    Word2013,
	    Word2007Dotx,
	    Word2010Dotx,
	    Word2013Dotx,
	    Word2007Docm,
	    Word2010Docm,
	    Word2013Docm,
	    Word2007Dotm,
	    Word2010Dotm,
	    Word2013Dotm,
	    Rtf,
	    Txt,
	    EPub,
	    Html,
	    Xml,
	    Automatic	
	}

    interface ReportViewerEvent extends EJ.Core.BaseEvent{
        model: ReportViewerOptions;
    }	
	
	interface ReportViewerToolbarEvent extends EJ.Core.BaseEvent{
        model: ReportViewerOptions;
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
        rowTemplateID?: string;
        altRowTemplateID?: string;
    }

    interface TreeGridEvent {
        cancel: boolean;
        type: string;
        model: TreeGridOptions;
    }
class NavigationDrawer extends EJ.Core.Widget {
    static fn: NavigationDrawer;
    element: JQuery;
    constructor(element: JQuery, options?: NavigationDrawerOptions);
    model: Object;
    defaults: NavigationDrawerOptions;
    open(): void;
    close(): void;
    toggle(): void;
}
//ejNavigationDrawer Option
interface NavigationDrawerOptions {
    allowScrolling?: boolean;
    direction?: string;
    showScrollbars?: boolean;
    targetId?: string;
    position?: string;
    enableListView?: boolean;
    listViewSettings?: {};
    type?: string;
    width?: string;
    swipe? (e: NavigationDrawerSwipeEventArgs): void;
    open? (e: NavigationDrawerOpenBeforeCloseEventArgs): void;
    beforeClose? (e: NavigationDrawerOpenBeforeCloseEventArgs): void;
}

//ejNavigationDrawer Swipe Event Arugument
interface NavigationDrawerSwipeEventArgs {
    type: string;
    cancel: boolean;
    element: Object;
    model: Object;
    targetElement: Object;
    direction: string;
}
//ejNavigationDrawer Open and BeforeClose Event Arugument
interface NavigationDrawerOpenBeforeCloseEventArgs {
    type: string;
    cancel: boolean;
    element: Object;
    model: Object;
}

class RadialMenu extends EJ.Core.Widget {
    static fn: RadialMenu;
    element: JQuery;
    constructor(element: JQuery, options?: RadialMenuOptions);
    model: Object;
    defaults: RadialMenuOptions;
    getTitle(): string;
}

interface RadialMenuOptions {
    width?: number;
    imageURL?: string;
    backImageURL?: string;
    click? (e: RadialMenuClickEventArgs): void;
}

interface RadialMenuClickEventArgs {
    index: number;
    childIndex: number;
    model: Object;
    type: string;
    element: Object;
    text: string;
}


    class Tile extends EJ.Core.Widget {
        static fn: Tile;
        element: JQuery;
        constructor(element: JQuery, options?: TileOptions);
        constructor(element: Element, options?: TileOptions);
        destroy(): void;
        updateTemplate(string, number): void;
    }

    interface TileOptions {
        badge?: tileBadgeOptions;
        captionTemplateId?: string;
		enablePersistence?: boolean;
        imageClass?: string;
        imagePosition?: string;
        imageTemplateId?: string;
        imageUrl?: string;
		liveTile?: liveTileOptions;
        showText?: boolean;
        text?: string;
        textAlignment?: string;
		theme?: string;
        tileSize?: string;
        mouseUp? (e: tileMouseUpEventArgs): void;
        mouseDown? (e: tileMouseDownEventArgs): void;
    }

    interface tileBadgeOptions {
        enabled?: boolean;
        value?: number;
        maxValue?: number;
        minValue?: number;
		text?: string;
    }

	interface liveTileOptions {
        enabled?: boolean;
        imageClass?: string;
		imageTemplateId?: string;
		imageUrl?: string[];
		type?: string;
		updateInterval?: number;
    }
	
    interface tileMouseUpEventArgs {
        cancel: boolean;
        model: TileOptions;
        type: string;
        text: string;
    }

    interface tileMouseDownEventArgs {
        cancel: boolean;
        model: TileOptions;
        type: string;
        text: string;
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
	    analysisMode?: string;
        layout?: string;
        enableVirtualScrolling?: boolean;
        enableCellContext?: boolean;
        enableRTL?: boolean;
        enableToolTip?:boolean;
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
declare module ej.mobile {
	
 //Global Interface
    interface windowsOption {
        renderDefault?: boolean;
    }

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
 class DatePicker extends EJ.Core.Widget {
        static fn: DatePicker;
        element: JQuery;
        constructor(element: JQuery, options?: DatePickerOptions);
        model: Object;
        defaults: DatePicker;
        destroy(): void;
        disable(): void;
        enable(): void