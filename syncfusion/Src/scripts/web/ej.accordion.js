/*!
*  filename: ej.accordion.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html Accordion elements
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
	* @class ejAccordion
	* @requires jQuery
    * @requires jquery.easing.1.3.min.js
	* @requires ej.core.js
	* @requires ej.accordion.js
	* @classdesc Custom Design for Accordion control.
	* @example 
	* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
	*        $(function () {
	*            // Initialize Accordion control creation.
	*            $("#accordion").ejAccordion();
	*        });
	*    &lt;/script&gt; 
	*/
	
    ej.widget("ejAccordion", "ej.Accordion", {
        _rootCSS: "e-acrdn",
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _setFirst: false,

        // default model
        defaults: {
            /// <summary>This Contains default property of Sycnfusion Accordion </summary>
			/**		
			* Specifies the collapsible state of accordion control.
			* @default false
			* @type {boolean}
			* @example 
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			* // Allow to collapsible on initialization. 
			* 	//To set collapsible API value 
			* 	 $("#accordion").ejAccordion({ collapsible: true});
			* &lt;/script&gt;
			 * @memberof ejAccordion
			* @instance
			*/
            collapsible: false,
			
            ajaxSettings: { type: 'GET', cache: false, data: {}, dataType: "html", contentType: "html", async: true },
			/**		
			*  The events API binds the action for activating the accordion header. Users can activate the header by using mouse actions such as mouse-over, mouse-up, mouse-down, and so on.
			* @default "click"
			* @type {String}
			* @example			 
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			* // Bind events API on initialization. 
			* $("#accordion").ejAccordion({ events: "mouseover" });
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            events: "click",
			/**		
			
			* The header icon can be customized using this API. It has two properties: header as the collapsing header CSS class name, and selectedHeader as the active header CSS class name. It accepts CSS class names with string as the type.		*
			*•header: This class name set to collapsing header. This accepts the string type value.
			*•selectedHeader: This class name set to expanded header. This accepts the string type value.
			* @default "{  header: "e-acrdn-collapsicon",  selectedHeader: "e-acrdn-expandicon"   }"
			* @type {JSONObject}
			* @example	
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;		 
			* //customIcon on initialization. 
			*   $("#accordion").ejAccordion({
			*		customIcon: {
			*			header: "header-close",
			*			selectedHeader: "header-expand"
			*		}
			*	});
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            customIcon: /** @lends ejAccordion# */{
			    /**		
                 * Set class name to collapsing header.
				 * @alias ejAccordion#header
				 * @type String
				 * @example	
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;		 
			* //header on initialization. 
			*   $("#accordion").ejAccordion({
			*			header: "collapsicon"
			*	});
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
                 */
                header: "e-collaps",
				 /**		
                 * Set class name to expanded header.
				 * @alias ejAccordion#selectedHeader
				 * @type String
				 * @example	
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;		 
			* //Selected header on initialization. 
			*   $("#accordion").ejAccordion({
			*		
			*			selectedHeader: "activeicon"
			*		
			*	});
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
                 */
                selectedHeader: "e-expand"
            },
			/**		
			*  Adjusts the content panel height based on the given option (content, auto, or fill). By default, the panel heights are adjusted based on the content. See {@link HeightAdjustMode }
			* @default "content"
			* @type {Enum/String}
			*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			* //heightAdjustMode  for content div on initialization. 
			* $("#accordion").ejAccordion({ heightAdjustMode : ej.Accordion.HeightAdjustMode.Auto }); //enum 
				* &lt;/script&gt;
				*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			* //Pass value on string type. 
			*$("#accordion").ejAccordion({ heightAdjustMode : "auto" }); 
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            heightAdjustMode : "content",
			enableAnimation: true,
			/**		
			* The given index header will activate (open). If collapsible is set to true, and a negative value is given, then all headers are collapsed. Otherwise, the first panel is activated.
			* @default 0
			* @type {Integer}
			*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			*  //Activate given header on initialization.
			*	$("#accordion").ejAccordion({ selectedItemIndex : 1 });
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            selectedItemIndex: 0,
			/**		
			* Sets the root class for the Accordion theme. This cssClass API enables the use of custom skinning options for the Accordion control. By defining the root class using this API, we need to include this root class in the CSS.
			* @default ""
			* @type {String}
			*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			*  //cssClass on initialization.
			*	$("#accordion").ejAccordion({cssClass: "gradient-lime" });
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            cssClass: "",
			/**		
			* Display headers and panel text from right-to-left.
			* @default false
			* @type {boolean}
			*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			*   // Enable enableRTL on initialization.
			*	$("#accordion").ejAccordion({ enableRTL: true});
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            enableRTL: false,
			/**		
			* Displays rounded corner borders on the Accordion control's panels and headers.
			* @default false
			* @type {boolean}
			*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			*   // Enable showRoundedCorner on initialization.
			*	$("#accordion").ejAccordion({ showRoundedCorner: true});
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            showRoundedCorner: false,
			/**		
			* Accordion headers can be expanded and collapsed on keyboard action. 
			* @default true
			* @type {boolean}
			*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			*   // Enable allowKeyboardNavigation on initialization.
			*	$("#accordion").ejAccordion({ allowKeyboardNavigation: true});
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            allowKeyboardNavigation: true,
			/**		
			* Multiple content panels to activate at a time. 
			* @default false
			* @type {boolean}
			*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			*   // Enable enableMultipleOpen on initialization.
			*	$("#accordion").ejAccordion({ enableMultipleOpen: true});
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            enableMultipleOpen: false,
            /**		
			* To set the Accordion headers Expand Speed. 
			* @default 300
			* @type {integer/string}
			*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			*   // Set expandSpeed on initialization.
			*	$("#accordion").ejAccordion({ expandSpeed: 500});
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            expandSpeed: 300,
            /**		
			* To set the Accordion headers Collapse Speed. 
			* @default 300
			* @type {integer/string}
			*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			*   // Set collapseSpeed on initialization.
			*	$("#accordion").ejAccordion({ collapseSpeed: 500});
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            collapseSpeed: 300,
			/**		
			* To activate multiple headers for the accordion, give the index value for array type for this API. The enableMultipleOpen property should be set as true. 
			* @default [0]
			* @type {Integerarray}
			*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			*   // selectedItems on initialization.
			*	$("#accordion").ejAccordion({ selectedItems: [0,1] });
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            selectedItems: [0],
			/**		
			* To deactivate multiple headers for the accordion, give the index value for array type for this API. The enableMultipleOpen property should be set as true. 
			* @default []
			* @type {Integerarray}
			*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			*   // disabledItems on initialization.
			*	$("#accordion").ejAccordion({ disabledItems: [0,1] });
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            disabledItems: [],
			/**		
			* To activate multiple headers for the accordion, give the index value for array type for this API. The enableMultipleOpen property should be set as true. 
			* @default []
			* @type {Integerarray}
			*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			*   // enabledItems on initialization.
			*	$("#accordion").ejAccordion({ enabledItems: [0,1] });
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            enabledItems:[],
			/**		
			* Save current model value to browser cookies for maintaining states. When refreshing the accordion control page, the model value is applied from browser cookies or HTML 5 local storage.
			* @default false
			* @type {Boolean}
			*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			*   // Enable enablePersistence on initialization.
			*	$("#accordion").ejAccordion({ enablePersistence: true});
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            enablePersistence: false,
			/**		
			* With the Enabled property, you can enable or disable the Accordion.
			* @default true
			* @type {Boolean}
			*@example
			* &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			*   // Enable accordion on initialization.
			*	$("#accordion").ejAccordion({ enabled: true});
			* &lt;/script&gt;
			* @memberof ejAccordion
			* @instance
			*/
            enabled: true,
            //Events
			 /**     
			 * Triggered after the AJAX content loads. Arguments have current model values.
			 * @event
			 * @name ejAccordion#ajaxLoad		
			 * @param {Object} argument Event parameters from accordion     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the accordion model
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument.url returns the name of the url
			 * @example 
			 * &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			 * //initial ajaxLoad event
			 *	$("#accordion").ejAccordion({ ajaxLoad: function (args) {}
			 * });
			 * &lt;/script&gt;
			 * @memberof ejAccordion
			 * @instance
			 */		
            ajaxLoad: null,
			/**     
			 * Triggered before the AJAX content is loaded in a content panel. Arguments have location of the content (URL) and current model value.
			 * @event
			 * @name ejAccordion#ajaxBeforeLoad		
			 * @param {Object} argument Event parameters from accordion     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the accordion model
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument.url returns current ajax content location
			 * @example 
			 * &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			 * //initial ajaxBeforeLoad event
			 *	$("#accordion").ejAccordion({ ajaxBeforeLoad: function (args) {}
			 * });
			 * &lt;/script&gt;
			 * @memberof ejAccordion
			 * @instance
			 */		
            ajaxBeforeLoad: null,
			/**     
			 * Triggered after a Accordion item is activated. Argument values are activeindex, activeHeader, activePanel, and current model value.
			 * @event
			 * @name ejAccordion#active		
			 * @param {Object} argument Event parameters from accordion     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the accordion model
			 * @param {string}  argument.type returns the name of the event
			 * @param {number} argument.activeIndex returns active index
             * @param {string} argument.activeHeader returns current active header             
			 * @example 
			 * &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			 * //initial active event
			 *	$("#accordion").ejAccordion({ active: function (args) {}
			 * });
			 * &lt;/script&gt;
			 * @memberof ejAccordion
			 * @instance
			 */		
            active: null,
			/**     
			 * Triggered before a tab item is active. Arguments have active index and model values.
			 * @event
			 * @name ejAccordion#beforeActive		
			 * @param {Object} argument Event parameters from accordion     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the accordion model
			 * @param {string}  argument.type returns the name of the event
			 * @param {number} argument.activeIndex returns active index
			 * @example 
			 * &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			 * //initial beforeActive event
			 *	$("#accordion").ejAccordion({ beforeActive: function (args) {}
			 * });
			 * &lt;/script&gt;
			 * @memberof ejAccordion
			 * @instance
			 */		
            beforeActive: null,
			/**     
			 * Triggered after AJAX success action. Arguments have URL, content, and current model values.
			 * @event
			 * @name ejAccordion#ajaxSuccess		
			 * @param {Object} argument Event parameters from accordion     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the accordion model
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument.url returns current ajax content location
			 * @param {string}  argument.data returns the succesfull data sent.
			 * @param {string}  argument.content returns the ajax content.
			 * @example 
			 * &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			 * //initial ajaxSuccess event
			 *	$("#accordion").ejAccordion({ ajaxSuccess: function (args) {}
			 * });
			 * &lt;/script&gt;
			 * @memberof ejAccordion
			 * @instance
			 */		
            ajaxSuccess: null,
			/**     
			 * Triggered after AJAX load failed action. Arguments have URL, error message, and current model value.
			 * @event
			 * @name ejAccordion#ajaxError		
			 * @param {Object} argument Event parameters from accordion     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the accordion model
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument.url returns current ajax content location
			 * @param {string}  argument.data returns the failed data sent.
			 * @example 
			 * &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			 * //initial ajaxError event
			 *	$("#accordion").ejAccordion({ ajaxError: function (args) {}
			 * });
			 * &lt;/script&gt;
			 * @memberof ejAccordion
			 * @instance
			 */		
            ajaxError: null,
            /**     
			 * Triggered after Accordion control creation.
			 * @event
			 * @name ejAccordion#create		
			 * @param {Object} argument Event parameters from accordion     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the accordion model
			 * @param {string}  argument.type returns the name of the event			
			 * @example 
			 * &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			 * //initial create event
			 *	$("#accordion").ejAccordion({ create: function (args) {}
			 * });
			 * &lt;/script&gt;
			 * @memberof ejAccordion
			 * @instance
			 */
            create: null,
            /**     
			 * Triggered after Accordion control destroy.
			 * @event
			 * @name ejAccordion#destroy		
			 * @param {Object} argument Event parameters from accordion     
			 * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the accordion model
			 * @param {string}  argument.type returns the name of the event			
			 * @example 
			 * &lt;div id="accordion"&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
	*        &lt;/div&gt;
	*        &lt;h3&gt;
	*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
	*        &lt;div&gt;
	*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
	*        &lt;/div&gt;
	*    &lt;/div&gt;
	*  &lt;script type="text/javascript"&gt;
			 * //initial destroy event
			 *	$("#accordion").ejAccordion({ destroy: function (args) {}
			 * });
			 * &lt;/script&gt;
			 * @memberof ejAccordion
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
            collapsible: "boolean",
            enabled: "boolean",
            events: "string",
            heightAdjustMode : "enum",
            ajaxSettings: "data",
            customIcon: "data",
            selectedItems: "data",
            disabledItems: "data",
			enableAnimation: "boolean",
        },
		
		 /**
         * To configure the properties at runtime using SetModel		
		 * @private
         */	 
        _setModel: function (options) {
            if (!this.model.enabled && ej.isNullOrUndefined(options["enabled"])) return false;
            for (var key in options) {
                switch (key) {
                    case "events": {
                        this._off(this._headers, this.model.events);
                        this._on(this._headers, options[key], this._headerEventHandler);
                        break;
                    }
                    case "disabledItems": this.disableItems(options[key]); break;
                    case "enabledItems": this.enableItems(options[key]); break;
                    case "enabled": this._enabledAction(options[key]); break;
                    case "selectedItemIndex": this._activeTab(options[key]); break;
                    case "heightAdjustMode ": this._setHeightStyle(options[key]); break;
                    case "cssClass": this._changeSkin(options[key]); break;
                    case "showRoundedCorner": this._roundedCorner(options[key]); break;
                    case "customIcon":
                        {
                            var icons = this.model.customIcon;
                            var newIcons = options[key];
                            this._headers.find("span." + icons.header).removeClass(icons.header).addClass(newIcons.header);
                            this._headers.find("span." + icons.selectedHeader).removeClass(icons.selectedHeader).addClass(newIcons.selectedHeader);
                            break;
                        }
                    case "allowKeyboardNavigation": {
                        if (options[key]) {
                            this._off(this.element, "keydown");
                            this._on(this.element, 'keydown', this._keyPress);
                        }
                        else
                            this._off(this.element, "keydown");
                        break;
                    }
                    case "enableRTL":
                        {
                            if (options[key])
                                this.element.addClass("e-rtl");
                            else
                                this.element.removeClass("e-rtl");
                            break;
                        }
					case "enableAnimation":{
							this.model.enableAnimation=options[key];
                            break;
                        }
                    case "selectedItems": this._selectedItemsAction(options[key]); break;
                    case "expandSpeed": {
                    	this.model.expandSpeed = parseInt(this.model.expandSpeed);
                    }
                    case "collapseSpeed": {
                    	this.model.collapseSpeed = parseInt(this.model.collapseSpeed);
                    }
                }
            }
        },

        // all events bound using this._on will be unbind automatically
		 /**
        * destroy the Accordion widget
		* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
		* @alias destroy
		* @return jQuery
		* @example
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		*&lt;script&gt;
		*            $("#accordion").ejAccordion();
		*var accObj = $("#accordion").data("ejAccordion");
		*accObj.destroy(); //Calls the destroy method of Accordion.
		*&lt;/script&gt;
		* @example 
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		*&lt;script&gt;
		* // destroy the Accordion
		* $("#Accordion").ejAccordion("destroy");	
		* &lt;/script&gt;
		* @memberof ejAccordion
		* @instance
        */	       
        _destroy: function () {
            /// <summary>This function is  used to destroy the Accordion Object</summary>
            this._removeBaseClass();
			this.element.children('.e-disable').removeClass("e-disable");
            this.element.removeClass("e-acrdn");
            this._headers.removeClass("e-active  e-state-disabled");
            this._contentPanels.removeClass("e-content-active e-disable");
            $(this._headers.find(".e-icon")).remove();
        },

        // constructor function
		/**
         * Create the Accordion widget
		 * @private
         */		 
        _init: function () {
            this._renderControl();
        },

        // render accordion control
		/**
         * Render Section For accordion control		
		 * @private
         */	  
        _renderControl: function () {
            /// <summary>This function is  used to Render the Accordion Object</summary>
            this._headers = this.element.find("> :even");
            this.element.attr("tabindex", 0).attr("role", "tablist");
            this._contentPanels = this._headers.next();
            //Index check negative values
            this._nagativeIndexCheck(this.model.selectedItemIndex);
            // Add the default class
            this._addBaseClass();
            this._setHeightStyle(this.model.heightAdjustMode );
            // Add header icons
            this._renderHeaderIcon();
            this._wireEvents();
            this._roundedCorner(this.model.showRoundedCorner);
            //Activate the header & content
            this._selectedItemsAction(this.model.selectedItems);
            this._enabledAction(this.model.enabled);
            this._setEnabledItems();
           
        },
        _setEnabledItems: function () {
            for (var index = 0; index < this.getItemsCount() ; index++) {
                if (($.inArray(index, this.model.disabledItems) < 0)&&($.inArray(index, this.model.enabledItems) < 0))
                    this.model.enabledItems.push(index);
            }
        },
        //Skin Change at run time
		/**
         * To configure the custom theme for accordion using cssClass property		
		 * @private
         */	 
        _changeSkin: function (skin) {
            if (this.model.cssClass != skin) {
                this.element.removeClass(this.model.cssClass).addClass(skin);
            }
        },
		/**
         * To configure the Selected ites for accordion using SelectedIndex property		
		 * @private
         */	 
        _selectedItemsAction: function (activeList) {
            if (this.model.enableMultipleOpen) {
                for (var seletedindex = 0; seletedindex < activeList.length; seletedindex++) {
                    this._activeTab(activeList[seletedindex], true);
                }
            }
            else
                if(!(this.collapseALL && this.model.collapsible))
                    this._activeTab(this.model.selectedItemIndex, true);
        },
		/**
         * To enable or disable the accordion state		
		 * @private
         */	 
        _enabledAction: function (flag) {
            if (flag) {
                this.element.removeClass("e-disable");
            }
            else {
                this.element.addClass("e-disable");
            }
        },
        //Add base class for headers and content panels
		/**
         * To configure the default classes for rendering Accordion control		
		 * @private
         */	 
        _addBaseClass: function () {
            this.element.addClass(this.model.cssClass + " e-widget");
            if (this.model.enableRTL)
                this.element.addClass("e-rtl");
            this._headers.addClass(" e-select").attr("role", "tab").attr("tabindex",0);
            this._contentPanels.addClass("e-content").attr("role", "tabpanel").attr("aria-hidden", true).hide(); // hide all the content panels while loding
            $(this._contentPanels[this.model.selectedItemIndex]).show();
        },
        //Remove base class for headers and content panels
		/**
         * To remove the default classes for rendering Accordion control		
		 * @private
         */	
        _removeBaseClass: function () {
            this._headers.removeClass(" e-select");
            this._contentPanels.removeClass("e-content").show(); // hide all the content panels while loding
        },
		/**
         * To enable or disable the rounded corner behaviour 		
		 * @private
         */	
        _roundedCorner: function (value) {
            if (value) {
                this._headers.addClass('e-corner-all');
                this.element.find('.e-active').removeClass('e-corner-all').addClass('e-corner-top');
                this.element.find('.e-acrdn-content-active').addClass('e-corner-bottom');
            }
            else if (this._headers.hasClass('e-corner-all')) {
                this._headers.removeClass('e-corner-all');
                this.element.find('.e-active').removeClass('e-corner-top');
                this.element.find('.e-acrdn-content-active').addClass('e-corner-bottom');
            }
        },
		/**
         * To check the negative index value 		
		 * @private
         */	
        _nagativeIndexCheck: function (index) {
            /// <summary>This function is  used to Check the nagative value of the index</summary>
            var panels;
            if (index < 0 && this.model.collapsible) {
                this.collapseALL = true;
                panels = this.getItemsCount();
                for (var pane = 0; pane < panels; pane++) {
                    this._hideTab(pane);
                }
            }
            else if (index < 0 || index >= this._headers.length)
                this.model.selectedItemIndex = 0;
        },
		/**
         * To activate the selected Item of the accordion control		
		 * @private
         */	
        _activeTab: function (index, raiseEvent) {
            /// <summary>This function is  used Activate the selected Item of the accordion control</summary>
            if ($.inArray(index, this.model.disabledItems) < 0) {
                var data = {
                    activeIndex: index
                };
                //triggering the onBeforeActive event
                if (true === (this._trigger("beforeActive", data))) {
                    return false;
                }
                if (!this.model.enableMultipleOpen)
                    this._hideTab(this.model.selectedItemIndex);
                this.model.selectedItemIndex = index;
                var icons = this.model.customIcon;
                this._headers.attr("tabindex",0).removeAttr("aria-expanded");
                this._activeHeader = this._headers.eq(index).addClass("e-active ").attr("aria-selected", true).attr("tabindex", 0).attr("aria-expanded", true);
                this._activeHeader.find(".e-icon")
                        .removeClass(icons.header)
                        .addClass(icons.selectedHeader);
                this._addSelectedItems(index);
                this._ajaxLoad();
                this._roundedCorner(this.model.showRoundedCorner);
                data = {
                    activeHeader: this._activeHeader,
                    activeIndex: this.model.selectedItemIndex
                };
                var proxy = this;
                this._activeContent = this._activeHeader.next().addClass("e-acrdn-content-active").removeAttr("aria-hidden", false).slideDown(this.model.enableAnimation?this.model.expandSpeed:0, "easeOutQuad", function () {
                    // Animation complete  //triggering the onActive event
                    if (!raiseEvent) proxy._trigger("active", data);
                }); //.animate({ height: "show" }, 'fast');
            }
        },
		/**
         * Configure to hide the previous active item of the accordion control		
		 * @private
         */	
        //This function is  used hide the prev active item of the accordion control
        _hideTab: function (index) {
            var icons = this.model.customIcon;
            if (index >= 0) {
                this._activeHeader = this._headers.eq(index).removeClass("e-active ").removeAttr("aria-selected").attr("tabindex",0).attr("aria-expanded", false);
                this._activeHeader.find(".e-icon")
                        .removeClass(icons.selectedHeader)
                        .addClass(icons.header);
                this._activeHeader.next().removeClass("e-acrdn-content-active").slideUp(this.model.enableAnimation?this.model.collapseSpeed:0, "easeOutQuad").attr("aria-hidden", true);//.animate({ height: "hide" }, 'fast');
                this._deleteSelectedItems(index);
            }
        },
		/**
         * Configure to create the Header icon for the accordion control		
		 * @private
         */	
        //Cretae Header Icon 
        _renderHeaderIcon: function () {
            if (this._headers.find(".e-icon").length <= 0) {
                var icons = this.model.customIcon;
                if (icons) {
                    var iconSpan = ej.buildTag("span.e-icon " + icons.header).prependTo(this._headers);
                    if (!(this.collapseALL && this.model.collapsible)) {
                        this._headers.eq(this.model.selectedItemIndex).find(".e-icon")
                        .removeClass(icons.header)
                        .addClass(icons.selectedHeader);
                }
            }
            }
        },
		/**
         * To Configure ajaxload for the accordion control		
		 * @private
         */	
        //Ajax Load function 
        _ajaxLoad: function () {
            var anchor = this._activeHeader.find("a[href]");
            if (anchor.length > 0) {
                var content = $(this._contentPanels[this.model.selectedItemIndex]);
                var href = $(anchor).attr("href");
                if (href && href !== "#")
                    this._sendAjaxOptions(content, anchor[0]);
            }
        },
		/**
         * To handle the ajax request for the accordion control		
		 * @private
         */	
        //handling the ajax request
        _sendAjaxOptions: function (content, link) {
            // TODO load waiting popup
            //triggering the onBeforeLoad event
            if (true === (this._trigger("ajaxBeforeLoad", { url: link })))
                return false;
            content.addClass("e-load");
            var proxy = this;
            var curTabTitle = $(link).html();
            var _hrefLink = link.href.replace("#", "");
            var _ajaxOptions = {
                type: this.model.ajaxSettings.type, cache: this.model.ajaxSettings.cache, url: _hrefLink, data: this.model.ajaxSettings.data,
                dataType: this.model.ajaxSettings.dataType, contentType: this.model.ajaxSettings.contentType, async: this.model.ajaxSettings.async,
                "success": function (data) {
                    try {
                        proxy._ajaxSuccessHandler(data, content, link, curTabTitle);
                    } catch (e) {

                    }
                }, "error": function () {
                    try {
                        proxy._ajaxErrorHandler(data, link, proxy.model.selectedItemIndex, curTabTitle);
                    } catch (e) {

                    }
                }
            };
            this._sendAjaxRequest(_ajaxOptions);
        },
		/**
         * Configure to map the Ajax request	
		 * @private
         */	
        //Ajax Request mapping
        _sendAjaxRequest: function (ajaxOptions) {
            $.ajax({
                type: ajaxOptions.type,
                cache: ajaxOptions.cache,
                url: ajaxOptions.url,
                dataType: ajaxOptions.dataType,
                data: ajaxOptions.data,
                contentType: ajaxOptions.contentType,
                async: ajaxOptions.async,
                success: ajaxOptions.success,
                error: ajaxOptions.error,
                beforeSend: ajaxOptions.beforeSend,
                complete: ajaxOptions.complete
            });
        },
		/**
         * Configure to handle the Ajax load success event	
		 * @private
         */	
        //Ajax load success event handler
        _ajaxSuccessHandler: function (data, content, link, curTabTitle) {
            if (curTabTitle != null)
                $(link).html(curTabTitle);
            content.removeClass("e-load");
            content.html(data).addClass("e-acrdn-loaded"); //to indicate the content is already loaded
            var eventData = { data: data, url: link, content: content };
            this._trigger("ajaxSuccess", eventData);
            //triggering the onLoad event
            this._trigger("ajaxLoad", { url: link });
        },
		/**
         * Configure to handle the Ajax load failed event	
		 * @private
         */	
        //Ajax load erroe event handler
        _ajaxErrorHandler: function (data, link, index, title) {
            this._trigger("ajaxError", { data: data, url: link });
            //triggering the onLoad event
            this._trigger("ajaxLoad", { url: link });
        },
		/**
         * Configure to set the content panels height based on the height style
		 * @private
         */	
        //Set the content panels height based on the height style
        _setHeightStyle: function (heightFormat) {
            var proxy = this, maxHeight;
            if (ej.Accordion.HeightAdjustMode.Fill == heightFormat) {
                maxHeight = this._getDimension($(this.element).parent(), "height");
                $(this.element).parent().css({ "overflow": "auto" });
                proxy._headers.each(function () {
                    maxHeight -= proxy._getDimension($(this), "outerHeight");
                });
                var maxPadding = 0;
                proxy._headers.next().each(function () {
                    maxPadding = Math.max(maxPadding, proxy._getDimension($(this), "innerHeight") - proxy._getDimension($(this), "height"));
                }).height(maxHeight - maxPadding).css({ "overflow": "auto" });

            } else if (ej.Accordion.HeightAdjustMode .Auto == heightFormat) {
                maxHeight = 0;
                proxy._headers.next().each(function () {
                    maxHeight = Math.max(maxHeight, proxy._getDimension($(this), "outerHeight"));
                }).height(maxHeight);
                this.maxAutoHeight = maxHeight;
            }
        },
		/**
         * Configure to set the dimensions for accordion control header and content panel
		 * @private
         */	
        _getDimension: function (element, method) {
            var value;
            var $hidden = $(element).parents().andSelf().filter(':hidden');
            var prop = { visibility: 'hidden', display: 'block' };
            var tmp = [];
            $hidden.each(function () {
                var temp = {}, name;
                for (name in prop) {
                    temp[name] = this.style[name];
                    this.style[name] = prop[name];
                }
                tmp.push(temp);
            });
            value = /(outer)/g.test(method) ?
            $(element)[method](true) :
           $(element)[method]();

            $hidden.each(function (i) {
                var temp = tmp[i], name;
                for (name in prop) {
                    this.style[name] = temp[name];
                }
            });

            return value;
        },
		/**
         * Configure to handle header click event
		 * @private
         */	
        // Header Click event handler
        _headerEventHandler: function (event) {
            if (this.model.enabled) {
                event.preventDefault();
                var clicked = $(event.currentTarget);
                var index = this._headers.index(clicked);
                if (this.model.enableMultipleOpen && this._headers.eq(index).hasClass("e-active")) {
                    this._hideTab(index);
                }
                else if (this.model.selectedItemIndex == index && this.model.collapsible) {
                    this._hideTab(this.model.selectedItemIndex);
                    this.model.selectedItemIndex = -1
                }
                else if (!this._headers.eq(index).hasClass("e-active")) {
                    this._activeTab(index);
                }
            }
        },
		/**
         * Configure to add selected items based on index
		 * @private
         */	
        _addSelectedItems: function (index) {
            if ($.inArray(index, this.model.selectedItems) < 0)
                this.model.selectedItems.push(index);
        },
		/**
         * Configure to delete selected items based on index
		 * @private
         */	
        _deleteSelectedItems: function (index) {
            if ($.inArray(index, this.model.selectedItems) > -1) {
                position = $.inArray(index, this.model.selectedItems);
                this.model.selectedItems.splice(position, 1);
            }
        },
		/**
         * Configure to delete disabled items based on index
		 * @private
         */	
        _deleteDisabledItems: function (index) {
            if ($.inArray(index, this.model.disabledItems) > -1) {
                position = $.inArray(index, this.model.disabledItems);
                this.model.disabledItems.splice(position, 1);
            }
        },
        _addEnabledItems: function (index) {
            if ($.inArray(index, this.model.enabledItems) < 0)
                this.model.enabledItems.push(index);
        },
        _deleteEnabledItems: function (index) {
            if ($.inArray(index, this.model.enabledItems) > -1) {
                position = $.inArray(index, this.model.enabledItems);
                this.model.enabledItems.splice(position, 1);
            }
        },
		/**
         * Configure for keyboard navigation 
		 * @private
         */	
        _keyPress: function (e) {
            if (this.model.enabled) {
                var index, currentEle, targetEle = $(e.target);
                if ((targetEle.hasClass("e-select"))||(targetEle.hasClass("e-acrdn"))) {
                    index = this.model.selectedItemIndex;//this._headers.index(targetEle.siblings(".e-active")[0])
                }
                //else if(targetEle.hasClass("e-select"))
                if (e.keyCode) code = e.keyCode; // ie and mozilla/gecko
                else if (e.which) code = e.which; // ns4 and opera
                else code = e.charCode;
               if ((targetEle.hasClass("e-select"))||(targetEle.hasClass("e-acrdn"))) {
                    switch (code) {
                        //down arrow
                        case 39:
                        case 40:
							e.preventDefault();								
                            index = index == (this.getItemsCount() - 1) ? 0 : index + 1;
							this._activeTab(index);
                            currentEle = $(this._headers[index]);
                            break;
                            //up arrow
                        case 38:
                        case 37:   
							e.preventDefault();	
                            index = index == 0 ? (this.getItemsCount() - 1) : index - 1;
							this._activeTab(index);
                            currentEle = $(this._headers[index]);
                            break;
                            //End key
                        case 35:                
							e.preventDefault();	
                            currentEle = $(this._headers[this.getItemsCount() - 1]);
							this._activeTab((this.getItemsCount() - 1));
                            break;
                            //Home key
                        case 36:    
							e.preventDefault();	
                            currentEle = $(this._headers[0]);
							this._activeTab(0);
                            break;
                        case 32:
                        case 13:
							e.preventDefault();	
                            $(this._headers[index]).hasClass("e-active") && (this.model.enableMultipleOpen || this.model.collapsible) ? this._hideTab(index) : this._activeTab(index);
                            break;
                    }
                }
                else if (e.ctrlKey && !targetEle.hasClass("e-acrdn")) {
                    switch (code) {
                        case 38:    
							e.preventDefault();	
                            index = this._contentPanels.index(targetEle.parent(".e-content"));
                            currentEle = $(this._headers[index]);
							this._activeTab(index);
                            break;
                        case 33:  
							e.preventDefault();	
                            currentEle = $(this._headers[0]);
							this._activeTab(0);
                            break;
                        case 34:   
							e.preventDefault();	
                            currentEle = $(this._headers[this.getItemsCount() - 1]);
							this._activeTab((this.getItemsCount() - 1));
                            break;
                    }
                }
                if (!ej.isNullOrUndefined(currentEle)) {
                    currentEle.addClass("e-focus");
                    currentEle.focus();
                }
            }
        },
		/**
         * Wiring the events to accordion control		
		 * @private
         */		
        //-------------------- Event Wire-up -------------------------//
        _wireEvents: function () {
            //tabs Click evnts
            this._on(this._headers, this.model.events, this._headerEventHandler);
            if (this.model.allowKeyboardNavigation) {
                this._on(this.element, 'keydown', this._keyPress);
            }
        },
		/**
         * Unwiring the events to accordion control		
		 * @private
         */	
        //-------------------- Event UnWire-up -------------------------//
        _unWireEvents: function () {
            this._off(this._headers, this.model.events);
            if (this.model.allowKeyboardNavigation) {
                this._off(this.element, 'keydown');
            }
        },
        /*---------------------Public methods---------------------*/
        //client side methods
		/**
        * enable the accordion widget
		* Enables given index header and content panel.
		* @alias enableItems
		* @return jQuery
		* @example
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		* &lt;script&gt;
*            $("#accordion").ejAccordion();
		* // Call enableItems method.
        *$("#accordion").ejAccordion("disableItems", 0); 
        *$("#accordion").ejAccordion("disableItems", 1); 
		* $("#accordion").ejAccordion("enableItems", 1);
		* &lt;/script&gt;
		* @example 
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		*&lt;script&gt;
		* // enableItems the Accordion
		* $("#accordion").ejAccordion();
		*var accObj = $("#accordion").data("ejAccordion");
        *accObj.disableItems(0);
        *accObj.disableItems(1);
		*accObj.enableItems(1); //Calls the enable method of Accordion.	
		* &lt;/script&gt;
		* @memberof ejAccordion
		* @instance
         */	       
        enableItems: function (itemIndexes) {
            /// <summary>This function enable the given item of the Accordion control</summary>
            /// <param name="itemIndexes" type="int"></param>
            if (!this.model.enabled) return false;
            if ($.isArray(itemIndexes)) {
                for (var i = 0; i < itemIndexes.length; i++) {
                    $(this._headers[itemIndexes[i]]).removeClass("e-disable");
                    $(this._contentPanels[itemIndexes[i]]).removeClass("e-disable");
                    this._on($(this._headers[itemIndexes[i]]), this.model.events, this._headerEventHandler);
                    this.model.enabledItems.push(itemIndexes[i]);
                    this._deleteDisabledItems(itemIndexes[i]);
                }
            }
            else {
                $(this._headers[itemIndexes]).removeClass("e-disable");
                $(this._contentPanels[itemIndexes]).removeClass("e-disable");
                this._on($(this._headers[itemIndexes]), this.model.events, this._headerEventHandler);
                this.model.enabledItems.push(itemIndexes[i]);
                this._deleteDisabledItems(itemIndexes);
            }
        },
		/**
        * enable the accordion widget
		* Enables given index header and content panel.
		* @alias disableItems
		* @return jQuery
		* @example
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		* &lt;script&gt;
*            $("#accordion").ejAccordion();
		* // Call disableItems method.
		* $("#accordion").ejAccordion("disableItems", 1);
		* &lt;/script&gt;
		* @example 
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		*&lt;script&gt;
		* // disableItems the Accordion
		* $("#accordion").ejAccordion();
		*var accObj = $("#accordion").data("ejAccordion");
		*accObj.disableItems(1); //Calls the disableItems method of Accordion.	
		* &lt;/script&gt;
		* @memberof ejAccordion
		* @instance
         */	     
        disableItems: function (itemIndexes) {
            /// <summary>This function disable the given item of the Accordion control</summary>
            /// <param name="itemIndexes" type="int"></param>
            if (!this.model.enabled) return false;
            if ($.isArray(itemIndexes)) {
                for (var i = 0; i < itemIndexes.length; i++) {
                    $(this._headers[itemIndexes[i]]).addClass("e-disable");
                    $(this._contentPanels[itemIndexes[i]]).addClass("e-disable");
                    $(this._headers[itemIndexes[i]]).unbind(this.model.events);
                    this.model.disabledItems.push(itemIndexes[i]);
                    this._deleteEnabledItems(itemIndexes[i]);
                }
            }
            else {
                $(this._headers[itemIndexes]).addClass("e-disable");
                $(this._contentPanels[itemIndexes]).addClass("e-disable");
                $(this._headers[itemIndexes]).unbind(this.model.events);
                this.model.disabledItems.push(itemIndexes);
                this._deleteEnabledItems(itemIndexes[i]);
            }
        },
	
		/**
        * disables the accordion widget
		* disables All the header and content panel.
		* @alias disable
		* @return jQuery
		* @example
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		* &lt;script&gt;
		* // Call disable method.
		*  $("#accordion").ejAccordion();
		* $("#accordion").ejAccordion("disable");
		* &lt;/script&gt;
		* @example 
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		*&lt;script&gt;
		* // disable the Accordion
		* $("#accordion").ejAccordion();
		*var accObj = $("#accordion").data("ejAccordion");
		*accObj.disable(); //Calls the disable method of Accordion.	
		* &lt;/script&gt;
		* @memberof ejAccordion
		* @instance
         */	       

        disable: function () {
            /// <summary>This function disable all item of the Accordion control</summary>
            for (var i = 0; i < this._headers.length; i++) {
                $(this._headers[i]).addClass("e-disable");
                $(this._contentPanels[i]).addClass("e-disable");
                this.model.disabledItems.push(i);
            }
            this.model.enabledItems = [];
            this._unWireEvents();
        },
		/**
        * enable the accordion widget
		* Enables all the headers and content panels.
		* @alias enable
		* @return jQuery
		* @example
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		* &lt;script&gt;
		*            $("#accordion").ejAccordion();
		* // Call enable method.
		* $("#accordion").ejAccordion("enable");
		* &lt;/script&gt;
		* @example 
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		*&lt;script&gt;
		* // destroy the Accordion
		* $("#accordion").ejAccordion();
		*var accObj = $("#accordion").data("ejAccordion");
		*accObj.enable(); //Calls the enable method of Accordion.	
		* &lt;/script&gt;
		* @memberof ejAccordion
		* @instance
         */	       
        enable: function () {
            /// <summary>This function enable all item of the Accordion control</summary>
            for (var i = 0; i < this._headers.length; i++) {
                $(this._headers[i]).removeClass("e-disable");
                $(this._contentPanels[i]).removeClass("e-disable");
            }
            this.model.disabledItems = [];
            this._setEnabledItems();
            this._unWireEvents();
            this._wireEvents();
        },
		
        _selected: function (index) {
            /// <summary>To Activated give index of the Accordion control</summary>
            /// <param name="index" type="int"></param>
            if (!this.model.enabled) return false;
            if (index != null && this.model.selectedItemIndex != index) {
                this._activeTab(index);
            }
        },
		/**
		* Shows the hidden Accordion control.
		* @alias show
		* @return jQuery
		* @example
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		* &lt;script&gt;
		*            $("#accordion").ejAccordion();
		* // Call show method.
		* $("#accordion").ejAccordion("show");
		* &lt;/script&gt;
		* @example 
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		*&lt;script&gt;
		* // show the Accordion
		* $("#accordion").ejAccordion();
		*var accObj = $("#accordion").data("ejAccordion");
		*accObj.show(); //Calls the show method of Accordion.	
		* &lt;/script&gt;
		* @memberof ejAccordion
		* @instance
         */	    
        show: function () {
            /// <summary>To Show the Accordion control</summary>
            if (!this.model.enabled) return false;
            this.element.css("visibility", "visible");
        },
		/**
		* Hides the visible Accordion control.
		* @alias hide
		* @return jQuery
		* @example
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		* &lt;script&gt;
		*            $("#accordion").ejAccordion();
		* // Call hide method.
		* $("#accordion").ejAccordion("hide");
		* &lt;/script&gt;
		* @example 
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		*&lt;script&gt;
		* // hide the Accordion
		* $("#accordion").ejAccordion();
		*var accObj = $("#accordion").data("ejAccordion");
		*accObj.hide(); //Calls the hide method of Accordion.	
		* &lt;/script&gt;
		* @memberof ejAccordion
		* @instance
         */	    
        hide: function () {
            /// <summary>To Hide the Accordion control</summary>
            if (!this.model.enabled) return false;
            this.element.css("visibility", "hidden");
        },
		
		/**
		* Returns the total number of panels in the control.
		* @alias getItemsCount
		* @return jQuery
		* @example
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		* Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		* &lt;script&gt;
		*            $("#accordion").ejAccordion();
		* // Call getItemsCount method.
		* $("#accordion").ejAccordion("getItemsCount");
		*&lt;/script&gt;
		* @example 
		
		*    &lt;div id="accordion"&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Orubase&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Orubase is the only mobile application development framework built especially for developing complex line-of-business mobile applications targeting iOS, Android, and Windows Phone platforms in the shortest possible timeframe.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;WinRT XAML&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Essential Studio for WinRT contains all the controls you need to build line-of-business tablet applications including grid, chart, map, tree map, SSRS report viewer, rich-text editor, PDF viewer, gauges, barcode, editors, and much more. It also includes a unique set of controls for reading and writing Excel, Word, and PDF documents in Windows store apps.
		*        &lt;/div&gt;
		*        &lt;h3&gt;
		*            &lt;a href="#"&gt;Metro Studio&lt;/a&gt;&lt;/h3&gt;
		*        &lt;div&gt;
		*Syncfusion Metro Studio is a collection of over 2500 Metro-style icon templates that can be easily customized to create thousands of unique Metro icons.
		*        &lt;/div&gt;
		*    &lt;/div&gt;
		*&lt;script&gt;
		* // getItemsCount the Accordion
		* $("#accordion").ejAccordion();
		*var accObj = $("#accordion").data("ejAccordion");
		*accObj.getItemsCount(); //Calls the getItemsCount method of Accordion.	
		* &lt;/script&gt;
		* @memberof ejAccordion
		* @instance
         */	    
        getItemsCount: function () {
            /// <summary>This function get the number of panel rendered</summary>
            if (this._headers) {
                return this._headers.length;
            }
        }
    });
	/**
	 * Enum for accordion Content height style	 
	 * @enum {string}
	 * @global 
	 */
    //Content height style enum
    ej.Accordion.HeightAdjustMode = {
		/**  Height fit to the content in the panel */
        Content: "content",
		/**  Height set to the largest content in the panel */
        Auto: "auto",
		/**  Height filled to the content of the panel */
        Fill: "fill"
    };
})(jQuery, Syncfusion);;