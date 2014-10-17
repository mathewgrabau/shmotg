/*!
*  filename: ej.tools.js
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
/**
* @fileOverview Plugin to style the Progressbar elements
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
   * @class ejProgressBar
   * @requires jQuery
    * @requires jquery.easing.1.3.js
    * @requires ej.core.js
	* @requires ej.progressbar.js
	* @classdesc Custom Design for Progressbar control.
   * @example
   *&lt;div id="progress"&gt;&lt;/div&gt;
   *&lt;script&gt;
   *$("#progress").ejProgressBar({value: 50});
   *&lt;/script&gt;

   */
    // ejProgressbar is the plugin name 
    // "ej.Progressbar" is "namespace.className" will hold functions and properties

    ej.widget("ejProgressBar", "ej.ProgressBar", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _setFirst: false,
        _rootCSS: "e-progressbar",

        // default model
        defaults: {
            /// <summary>This Contains default property of Sycnfusion Tab control </summary>
            /**		
			* Sets the custom text for the ProgressBar. The text placed in the middle of the ProgressBar and it can be customizable using the class 'e-progress-text'. 
			* @default null
			* @type {String}
			* @example 
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt; 
			* //To set the text API value during initialization  
			* $("#progress").ejProgressBar({ text: 'loading...',value: 50 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            text: "",
            /**
			* Sets the root class for ProgressBar theme. This cssClass API helps to use custom skinning option for ProgressBar control. By defining the root class using this API, we need to include this root class in CSS.
			* @default null
			* @type {String}
			* @example 
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the cssClass value specified
			* $("#progress").ejProgressBar({ cssClass: 'gradient-lime ',value: 50  });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            cssClass: "",
            /**
			* Sets the minimum value of the ProgressBar.
			* @default 0
			* @type {Number}
			* @example
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the min value specified
			* $("#progress").ejProgressBar({ minValue: 50,value: 50});
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            minValue: 0,
            /**
			* Sets the maximum value of the ProgressBar.
			* @default 100
			* @type {Number}
			* @example 
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the max value specified
			* $("#progress").ejProgressBar({ maxValue: 200 ,value: 200 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            maxValue: 100,
            /**
			* Sets the ProgressBar value. The value should be in between min and max values.
			* @default 0
			* @type {Number}
			* @example
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the progress value specified
			* $("#progress").ejProgressBar({ value: 70 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            value: 0,
            /**
			* Sets the ProgressBar value in percentage. The value should be in between 0 to 100.
			* @default 0
			* @type {Number}
			* @example
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the progress value specified in percent
			* $("#progress").ejProgressBar({ percentage : 35 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            percentage: 0,
            /**
			* Defines the height of the ProgressBar.
			* @default null
			* @type {Number/String}
			* @example 
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the height value specified
			* $("#progress").ejProgressBar({ height: 20,value: 50 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            height: null,
            /**
			* Defines the width of the ProgressBar.
			* @default null
			* @type {Number/String}
			* @example 
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the width value specified
			* $("#progress").ejProgressBar({ width: 200,value: 50});
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            width: null,
            /**
			* When this property sets to false, it disables the ProgressBar control
			* @default true
			* @type {boolean}
			* @example
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the ProgressBar with the enabled value specified
			* $("#progress").ejProgressBar({ enabled: true,value: 50 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            enabled: true,
            /**
			* Sets the ProgressBar direction as right to left alignment.
			* @default false
			* @type {boolean}
			* @example
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the Progress bar with the rtl value specified
			* $("#progress").ejProgressBar({ enableRTL: true,value: 50 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            enableRTL: false,
            /**
			* Save current model value to browser cookies for state maintains. While refresh the progressBar control page retains the model value apply from browser cookies
			* @default false
			* @type {boolean}
			* @example 
			* &lt;div id="progress"&gt;&lt;/div&gt;
			* &lt;script&gt;
			* //Initialize the Progress bar with the persist value specified
			* $("#progress").ejProgressBar({ enablePersistence: true,value: 50 });
			* &lt;/script&gt;
			* @memberof ejProgressBar
			* @instance
			*/
            enablePersistence: false,
            /**
			 * Event triggers when the process starts (from 0%)
			 * @event
			 * @name ejProgressBar#start
			 * @param {Object} argument Event parameters from progressbar   
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the ProgressBar model
			 * @param {object}  argument.percentage returns the current progress percentage
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument returns the current progress value
			 * @example
			 * &lt;div id="progress"&gt;&lt;/div&gt;
			 * &lt;script&gt;
			 * //initial start event
			 *$("#progress").ejProgressBar({
			 * value: 50,
			 *	start: function(args) {}
			 *});
             * &lt;/script&gt;
			 * @memberof ejProgressBar
			 * @instance
			 */
            start: null,
            /**     
			 * Event triggers when the process completes (at 100%)
			 * @event
			 * @name ejProgressBar#complete
			 * @param {Object} argument Event parameters from progressbar   
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the ProgressBar model
			 * @param {object}  argument.percentage returns the current progress percentage
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument returns the current progress value
			 * @example
			 * &lt;div id="progress"&gt;&lt;/div&gt;
			 * &lt;script&gt;
			 * //initial complete event
			 *$("#progress").ejProgressBar({
			 *	value: 50,
			 *	complete: function(args) {}
			 *});
             * &lt;/script&gt;
			 * @memberof ejProgressBar
			 * @instance
			 */
            complete: null,
            /**
			 * Event triggers when the progress value changed
			 * @event
			 * @name ejProgressBar#change
			 * @param {Object} argument Event parameters from progressbar   
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the ProgressBar model
			 * @param {object}  argument.percentage returns the current progress percentage
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument returns the current progress value
			 * @example
			 * &lt;div id="progress"&gt;&lt;/div&gt;
			 * &lt;script&gt;
			 * //initial complete event
			 *$("#progress").ejProgressBar({
			 *	value: 50,
			 *	change: function(args) {}
			 *});
             * &lt;/script&gt;
			 * @memberof ejProgressBar
			 * @instance
			 */
            change: null,
            /**     
            * Event triggers when the progressbar are created
            * @event
            * @name ejProgressBar#create 	
            * @param {Object} argument Event parameters from progressbar     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the progressbar model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;div id="progress"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * //create event for progressbar
             *$("#progress").ejProgressBar({
			 *	value: 50,
			 *	create: function(args) {}
			 *});
             * &lt;/script&gt;
			 * @memberof ejProgressBar
			 * @instance
			 */
            create: null,
            /**     
           * Event triggers when the progressbar are destroyed
           * @event
           * @name ejProgressBar#destroy 	
           * @param {Object} argument Event parameters from progressbar     
           * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
           * @param {object}  argument.model returns the progressbar model
           * @param {string}  argument.type returns the name of the event
           * @example 
           * &lt;div id="progress"&gt;&lt;/div&gt; <br> 
           * &lt;script&gt;
           * //destroy event for progressbar
           *$("#progress").ejProgressBar({
			 *	value: 50,
			 *	destroy: function(args) {}
			 *});
             * &lt;/script&gt;
			 * @memberof ejProgressBar
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
            minValue: "number",
            maxValue: "number",
            enabled: "boolean",
            enableRTL: "boolean"
        },
        /**
        * Sets the Progress bar value. The value should be range between min and max values.
        * @private
        */

        _setValue: function (value) {
            /// <summary>Sets the Progress bar value. The value should be range between min and max values.</summary>
            if (value == null) value = this.model.minValue;
            else if (typeof value === "string") value = parseFloat(value);

            if (this._isNumber(value)) this.model.value = value;
            else if (!this._isNumber(this.model.value)) this.model.value = this.model.minValue;

            this.model.value = this._validateRange(this.model.value, this.model.minValue, this.model.maxValue);
            this._setProgressValue();
        },
        /**
         * Sets the Progress bar value in percentage. The value should be range between 0 to 100.
		 * @private
         */
        _setPercent: function (percent) {
            /// <summary>Sets the Progress bar value in percentage. The value should be range between 0 to 100.</summary>
            this.initial = this.model.percentage;
            if (percent == null) percent = 0;
            else if (typeof percent === "string") percent = parseFloat(percent);

            if (this._isNumber(percent)) this.model.percentage = percent;
            else if (!this._isNumber(this.model.percentage)) this.model.percentage = 0;

            this.model.percentage = this._validateRange(this.model.percentage, 0, 100);
            this.model.value = this._percentToValue(this.model.percentage);
            this._increaseProgressWidth();
        },
        /**
         * Configure to check whether the minvalue and max value are valid
		 * @private
         */
        _validateMinMax: function () {
            if (isNaN(this.model.minValue)) this.model.minValue = 0;
            if (isNaN(this.model.maxValue)) this.model.maxValue = 100;
        },
        /**
         * Sets the Progress bar text
		 * @private
         */
        _setText: function (text) {
            /// <summary>Sets the Progress bar value in percentage. The value should be range between 0 to 100.</summary>
            if (text) {
                if (this.text) this.text.html(text);
                else {
                    this.text = ej.buildTag("div.e-progress-txt", text);
                    this.element.append(this.text);
                    this._setTop();
                }
            }
            else if (this.text) {
                this.text.remove();
                this.text = null;
            }
        },
        /**
         * To configure the custom theme for progressbar using cssClass property		
		 * @private
         */
        _changeSkin: function (skin) {
            if (this.model.cssClass != skin) {
                this.element.removeClass(this.model.cssClass).addClass(skin);
            }
        },
        /**
		* Enables the progressbar control
		* @alias enable
		* @return jQuery
		*@example
		*&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        		* // Create Progressbar instance
		* var proObj = $("#progress").data("ejProgressBar");
		* proObj.enable(); // enables the Progressbar control
		* &lt;/script&gt;
        @example
        		*&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        // To enables the Progressbar control
		*$("#progress").ejProgressBar("enable");
		*&lt;/script&gt;
		* @memberof ejProgressBar
		* @instance
         */

        enable: function () {
            /// <summary>Enables the Progress bar control.</summary>
            if (!this.model.enabled) {
                this.element.removeClass("e-disable");
                this.model.enabled = true;
            }
        },
        /**
		* Disables the progressbar control
		* @alias disable
		* @return jQuery
		*@example
		*&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        * // Create Progressbar instance
		* var proObj = $("#progress").data("ejProgressBar");
		* proObj.disable(); //disables the Progressbar control
		* &lt;/script&gt;
        @example
        		*&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        //To disables the Progressbar control
		*$("#progress").ejProgressBar("disable");
		*&lt;/script&gt;
		* @memberof ejProgressBar
		* @instance
         */
        disable: function () {
            /// <summary>Disables the Progress bar control.</summary>
            if (this.model.enabled) {
                this.element.addClass("e-disable");
                this.model.enabled = false;
            }
        },
        /**
		* Returns the current progress value
		* @alias getValue
		* @return jQuery
		*@example
		*&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        * // Create Progressbar instance
		* var proObj = $("#progress").data("ejProgressBar");
		* proObj.getValue(); // get the value of Progressbar control
		* &lt;/script&gt;
        @example
        *&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        // To get the value of Progressbar control 
		*$("#progress").ejProgressBar("getValue");
		*&lt;/script&gt;
		* @memberof ejProgressBar
		* @instance
         */
        getValue: function () {
            /// <summary>Returns the Progress bar value.</summary>
            return this.model.value;
        },
        /**
		* Returns the current progress value in percent.
		* @alias getPercent
		* @return jQuery
		*@example
		*&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        * // Create Progressbar instance
		* var proObj = $("#progress").data("ejProgressBar");
		* proObj.getPercentage(); // get the percent of Progressbar control
		* &lt;/script&gt;
        @example
        *&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        // To get the percent of Progressbar control
		*$("#progress").ejProgressBar("getPercentage");
		*&lt;/script&gt;
		* @memberof ejProgressBar
		* @instance
         */
        getPercentage: function () {
            /// <summary>Returns the Progress bar value in percentage.</summary>
            return this.model.percentage;
        },
        /**
         * Create the Progressbar widget
		 * @private
         */
        // constructor function
        _init: function () {
            this._initialize();
            this._render();
        },
        /**
         * To configure the properties at runtime using SetModel		
		 * @private
         */
        _setModel: function (options) {
            /// <summary>Sets the model values to the Progress bar object</summary>
            if (!this.model.enabled && ej.isNullOrUndefined(options["enabled"])) return false;
            var option;
            for (option in options) {
                switch (option) {
                    case "value":
                        this._setValue(options[option]);
                        options[option] = this.model.value; break;
                    case "percentage":
                        this._setPercent(options[option]);
                        options[option] = this.model.percentage; break;
                    case "minValue":
                        if (!isNaN(options[option])) this._minValidation(options[option]);
                        options[option] = this.model.minValue;
                    case "maxValue":
                        if (!isNaN(options[option])) this._maxValidation(options[option]);
                        options[option] = this.model.maxValue;
                    case "text": this._setText(options[option]); break;
                    case "height": this._setHeight(options[option]); if (this.text) this._setTop(); break;
                    case "width": this._setWidth(options[option]); break;
                    case "enabled": this._disabled(!options[option]); break;
                    case "cssClass": this._changeSkin(options[option]); break;
                    case "enableRTL": this._rtl(options[option]); break;
                }
            }
        },
        /**
		* Destroy the progressbar widget
		* @alias destroy
		* @return jQuery
		*@example
		*&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        * // Create Progressbar instance
		* var proObj = $("#progress").data("ejProgressBar");
		* proObj.destroy(); //destroy the Progressbar control
		* &lt;/script&gt;
        @example
        *&lt;div id="progress"&gt;&lt;/div&gt;
		*&lt;script&gt;
        * $("#progress").ejProgressBar({value: 50});
        // To destroy the Progressbar control
		*$("#progress").ejProgressBar("destroy");
		*&lt;/script&gt;
		* @memberof ejProgressBar
		* @instance
         */
        _destroy: function () {
            /// <summary>This function is  used to destroy the Progress bar Object</summary>
            this.element.empty();
            this.element.removeClass("e-widget " + this.model.cssClass);
        },
        /**
         * Initialization Section For Progress bar control		
		 * @private
         */

        _initialize: function () {
            this.text = null;
            this.header = null;
            this._preVal = null;
        },
        /**
         * Render Section For Progress bar control		
		 * @private
         */
        // renders the Progress bar control
        _render: function () {
            this.element.addClass("e-widget " + this.model.cssClass).attr("role", "ProgressBar");
            this._setDimention();

            this.header = ej.buildTag("div.e-progress");
            this.element.append(this.header);
            this._setText(this.model.text);

            this._setInitialValue();
            this._checkProperties();
        },
        /**
         * Configure dimensions For Progress bar control		
		 * @private
         */
        _setDimention: function () {
            this._setHeight(this.model.height);
            this._setWidth(this.model.width);
        },
        /**
         * Configure to set height For Progress bar control		
		 * @private
         */
        _setHeight: function (height) {
            if (height) this.element.height(height);
        },
        /**
         * Configure to set width For Progress bar control		
		 * @private
         */
        _setWidth: function (width) {
            if (width) this.element.width(width);
        },
        /**
         * Configure to set the value or percentage For Progress bar control initially		
		 * @private
         */
        // initially sets the value or percentage to Progress bar
        _setInitialValue: function () {
            this._validateMinMax();
            if (this.model.percentage) this._setPercent(this.model.percentage);
            else this._setValue(this.model.value);
        },
        /**
         * Configure to disable the progressbar control		
		 * @private
         */
        _disabled: function (boolean) {
            if (boolean) this.disable();
            else this.enable();
        },
        /**
         * Configure to check the properties the progressbar control		
		 * @private
         */
        _checkProperties: function () {
            if (this.model.enableRTL) this._rtl(this.model.enableRTL);
            this._minValidation(this.model.minValue);
            this._maxValidation(this.model.maxValue);
            if (!this.model.enabled) this._disabled(true);
        },
        /**
         * Configure enableRTL for the progressbar control		
		 * @private
         */
        _rtl: function (boolean) {
            if (boolean) this.element.addClass("e-rtl");
            else this.element.removeClass("e-rtl");
        },
        /**
         * Configure to valiate minvalue value of the progressbar control		
		 * @private
         */
        _minValidation: function (minvalue) {
            if (this.model.maxValue && this.model.maxValue < minvalue) this.model.maxValue = minvalue;
            if (this.model.value < minvalue)
                this.model.value = minvalue;
            this.model.minValue = minvalue;
            this._setProgressValue();
        },
        /**
         * Configure to valiate max value of the progressbar control		
		 * @private
         */
        _maxValidation: function (maxValue) {
            if (this.model.minValue && this.model.minValue > maxValue) this.model.minValue = maxValue;
            if (this.model.value > maxValue)
                this.model.value = maxValue;
            this.model.maxValue = maxValue;
            this._setProgressValue();
        },
        /**
         * Configure position of the progressbar control inner text		
		 * @private
         */

        // for the center alignment of the inner text
        _setTop: function () {
            var top = (this.element.height() - this.text.height()) / 2;
            this.text.css("top", Math.floor(top));
        },
        /**
         * Configure to change value of the progressbar control		
		 * @private
         */
        // for change the progress bar value
        _increaseProgressWidth: function () {
            this.header.css("width", this.model.percentage + "%");

            if (this.initial == 0 && this.model.percentage != this.initial)
                this._raiseEvent("start");

            if (this._preVal != this.model.value) {
                this._preVal = this.model.value;
                $(this.header).attr("aria-label", this.model.percentage);
                this._raiseEvent("change");

                if (this.model.percentage == 100)
                    this._raiseEvent("complete");
            }
        },
        /**
         * Configure to raise events of the progressbar control		
		 * @private
         */
        _raiseEvent: function (event) {
            this._trigger(event, { value: this.model.value, percentage: this.model.percentage });
        },
        /**
         * Configure to set value of the progressbar control		
		 * @private
         */
        _setProgressValue: function () {
            this.initial = this.model.percentage;
            this.model.percentage = this._valueToPercent(this.model.value);
            this._increaseProgressWidth();
        },
        /**
         * Configure to validate type of value in the progressbar control		
		 * @private
         */

        _isNumber: function (number) {
            return typeof number === "number" && !isNaN(number);
        },
        /**
         * Configure to validate value of the progressbar control between minvalue and maxValue		
		 * @private
         */
        // check whether the value in the minvalue, maxValue range
        _validateRange: function (value, minvalue, maxValue) {
            if (value < minvalue) return minvalue;
            else if (value > maxValue) return maxValue;
            return value;
        },
        /**
         * Configure to convert the value to percentage in the progressbar control		
		 * @private
         */
        // converts the value into percentage
        _valueToPercent: function (value) {
            if (this.model.maxValue <= this.model.minValue) return 100;
            value = this._validateRange(value, this.model.minValue, this.model.maxValue);
            value = (100 * (value - this.model.minValue)) / (this.model.maxValue - this.model.minValue);
            return value;
        },
        /**
         * Configure to convert the percentage to value in the progressbar control		
		 * @private
         */
        // converts the percentage into value
        _percentToValue: function (percent) {
            if (this.model.maxValue <= this.model.minValue) { return this.model.minValue; }

            if (percent >= 0 && percent <= 100) {
                var diff = this.model.maxValue - this.model.minValue;
                var val = diff * percent / 100;
                percent = val + this.model.minValue;
            }
            else if (percent < 0) percent = this.model.minValue;
            else if (percent > 100) percent = this.model.maxValue;
            return percent;
        }
    });

})(jQuery, Syncfusion);;
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
/**
* @fileOverview Plugin to style the tab control.
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
	* @class ejTab
	* @requires jQuery
	* @requires jquery.easing.1.3.min.js
	* @requires ej.core.js
	* @requires ej.tab.js

	* @classdesc Custom Design for Tab control.
	*@example
	 
	*&lt;div id="tab"&gt;                  
	*&lt;ul&gt;                      
	*&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
	*&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
	*&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
	*&lt;/ul&gt;                  
	*&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
	*It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
	*&lt;/div&gt;                  
	*&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
	*&lt;/div&gt;                  
	*&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
	*&lt;/div&gt;              
	*&lt;/div&gt;
	* &lt;script type="text/javascript"&gt;         
	*$(function () {             
	* // document ready            
	* // Initialize Tab control creation             
	* $("#tab").ejTab({width:"300px"});         
	*}); &lt;/script&gt; 	
	*/
    ej.widget("ejTab", "ej.Tab", {
        _rootCSS: "e-tab",
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _setFirst: false,

        // default model
        defaults: {
            /// <summary>This Contains default property of Sycnfusion Tab control </summary>
            /**		
           * Allow to collapsing the active item, while click on the active header.
           * @default false
           * @type {boolean}
           * @example 
           *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
           * // Set the collapsible during initialization. 			
           * 	$("#tab").ejTab({width:"300px",collapsible: true }); 
           * &lt;/script&gt;  
            * @memberof ejTab
           * @instance
           */
            collapsible: false,
			enableAnimation: true,
            ajaxSettings: { type: 'GET', cache: false, data: {}, dataType: "html", contentType: "html", async: true },
            /**		
           * Disables the given tab headers and content panels.
           * @default []
           * @type {IntegerArray}
           * @example 
           *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;   
  * &lt;script type="text/javascript"&gt;         
           * // Set the disabledItemIndex during initialization. 			
           * 	$("#tab").ejTab({width:"300px",disabledItemIndex: [1,2] }); 
           * &lt;/script&gt;  
            * @memberof ejTab
           * @instance
           */
            disabledItemIndex: [],
            /**   
           * Enables the given tab headers and content panels.
           * @default []
           * @type {IntegerArray}
           * @example 
           *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;   
  * &lt;script type="text/javascript"&gt;         
           * // Set the enabledItemIndex during initialization. 
           * 	$("#tab").ejTab({width:"300px",disabledItemIndex: [0,1,2] });
           *  $("#tab").ejTab({width:"300px",enabledItemIndex: [0,1] }); 
           * &lt;/script&gt;  
            * @memberof ejTab
           * @instance
           */
            enabledItemIndex: [],
            /**		
           * The event API to bind the action for active the tab items.
           * @default "click"
           * @type {string}
           * @example 
           *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;     
  * &lt;script type="text/javascript"&gt;         
           * // Set the events during initialization. 			
           * 	$("#tab").ejTab({width:"300px",events: "click" }); 
          * &lt;/script&gt;  
            * @memberof ejTab
           * @instance
           */
            events: "click",
            /**		
           * The idPrefix property appends the give string on runtime added tab item id’s.
           * @default "ej-tab-"
           * @type {string}
           * @example 
           *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
           * // Set the idPrefix during initialization. 			
           * 	$("#tab").ejTab({width:"300px",idPrefix: "ej-tab-" }); 
           * &lt;/script&gt;  
            * @memberof ejTab
           * @instance
           */
            idPrefix: "ej-tab-",
            /**		
           * Adjust the content panel height for given option (content, auto and fill), by default panels height adjust based on the content.See {@link HeightAdjustMode}
           * @default "content"
           * @type {string | enum}
           * @example 
           *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt; 
  * &lt;script type="text/javascript"&gt;         
           * // Set the heightAdjustMode  during initialization. 			
           * 	$("#tab").ejTab({width:"300px",heightAdjustMode : ej.Tab.HeightAdjustMode.Content }); 
           * &lt;/script&gt;  
            * @memberof ejTab
           * @instance
           */
            heightAdjustMode: "content",
            /**		
			* Tab header to active for given index value. 
			* @default 0
			* @type {number}
			* @example 
      *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
			* // Set the selectedItemIndex  during initialization. 			
			* 	$("#tab").ejTab({width:"300px",selectedItemIndex : 1 }); 
			* &lt;/script&gt;  
			 * @memberof ejTab
			* @instance
			*/
            selectedItemIndex: 0,
            /**		
           * Set the root class for Tab theme. This cssClass API helps to use custom skinning option for Tab control. 
           * @default ""
           * @type {string}
           * @example 
           *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
           * // Set the CSS class during initialization. 			
           * 	$("#tab").ejTab({width:"300px",cssClass: "gradient-lime" }); 
          * &lt;/script&gt;  
            * @memberof ejTab
           * @instance
           */
            cssClass: "",
            /**		
           * Display the close button for each tab items. While click on the close icon particular tab item removed. 
           * @default false
           * @type {boolean}
           * @example 
           *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;   
  * &lt;script type="text/javascript"&gt;         
           * // Set the showCloseButton during initialization. 			
           * 	$("#tab").ejTab({width:"500px",showCloseButton: true }); 
          * &lt;/script&gt;  
            * @memberof ejTab
           * @instance
           */
            showCloseButton: false,
            /**		
           * Display the Reload button for each tab items. 
           * @default false
           * @type {boolean}
           * @example 
           *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
           * // Set the showReloadIcon during initialization. 			
           * 	$("#tab").ejTab({width:"500px",showReloadIcon: true }); 
          * &lt;/script&gt;  
            * @memberof ejTab
           * @instance
           */
            showReloadIcon: false,
            /**		
        * Tab header display top,bottom,left or right .See {@link Position} 
        * @default "top"
        * @type {string | enum}
        * @example 
        *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
        * // Set the headerPosition during initialization. 			
        * 	$("#tab").ejTab({width:"500px",headerPosition: "left" }); 
        * &lt;/script&gt;  
         * @memberof ejTab
        * @instance
        */
            headerPosition: "top",
            /**		
        * Set the width for outer panel element, if not it’s take parent width. 
        * @default null
        * @type { string | number}
        * @example 
        *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
        * // Set the width during initialization. 			
        * 	$("#tab").ejTab({width: "600px" }); 
       * &lt;/script&gt;  
         * @memberof ejTab
        * @instance
        */
            width: null,
            /**		
        * Height set the outer panel element. Default this property value is null, so height take content height.
        * @default null
        * @type {string | number}
        * @example 
        *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
        * // Set the height during initialization. 			
        * 	$("#tab").ejTab({width:"300px",height: "320px" }); 
       * &lt;/script&gt;  
         * @memberof ejTab
        * @instance
        */
            height: null,
            /**		
           * Display Right to Left direction for headers and panels text.
           * @default false
           * @type {boolean}
           * @example 
           *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
           * // Set the rtl during initialization. 			
           * 	$("#tab").ejTab({width:"300px",enableRTL: true }); 
          * &lt;/script&gt;  
            * @memberof ejTab
           * @instance
           */
            enableRTL: false,
            /**		
           * Tab items interaction with keyboard keys, like headers active navigation.
           * @default true
           * @type {boolean}
           * @example 
           *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
           * // Set the allowKeyboardNavigation during initialization. 			
           * 	$("#tab").ejTab({width:"300px",allowKeyboardNavigation: false }); 
           * &lt;/script&gt;  
            * @memberof ejTab
           * @instance
           */
            allowKeyboardNavigation: true,
            /**		
           * Tab panels and headers to display the rounded corner style.
           * @default false
           * @type {boolean}
           * @example 
           *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
           * // Set the roundedCorner during initialization. 			
           * 	$("#tab").ejTab({width:"300px",showRoundedCorner: false }); 
           * &lt;/script&gt;  
            * @memberof ejTab
           * @instance
           */
            showRoundedCorner: false,
            /**		
           * Save current model value to browser cookies for state maintains. While refresh the Tab control page the model value apply from browser cookies.  
           * @default false
           * @type {boolean}
           * @example 
           *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt; 
  * &lt;script type="text/javascript"&gt;         
           * // Set the enablePersistence during initialization. 			
           * 	$("#tab").ejTab({width:"300px",enablePersistence: false }); 
           * &lt;/script&gt;  
            * @memberof ejTab
           * @instance
           */
            enablePersistence: false,
            /**		
           * When this property is set to false, it disables the tab control.
           * @default true
           * @type {boolean}
           * @example 
           *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
           * // Set the enabled during initialization. 			
           * 	$("#tab").ejTab({width:"300px",enabled: false }); 
          * &lt;/script&gt;  
            * @memberof ejTab
           * @instance
           */
            enabled: true,
            //Events
            /**     
			 * Triggered after ajax content load action.
			 * @event
			 * @name ejTab#ajaxLoad 	
			 * @param {Object} argument Event parameters from button     
			 * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
			 * @param {string}  argument.url returns the name of the url
			 * @param {object}  argument.model returns the tab model.
			 * @param {string}  argument.type returns the name of the event.
			 * @param {object}  argument.prevActiveHeader returns previous active tab header.
			 * @param {number}  argument.prevActiveIndex returns previous active index.
			 * @param {object}  argument.activeHeader returns current active tab header .
			 * @param {number}  argument.activeIndex returns current active index.
			 * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
             * $("#tab").ejTab({
              * width:"300px",
             *    ajaxLoad: function (args) {}
             * });      
             * &lt;/script&gt;  
			 * @memberof ejTab
			 * @instance
			 */
            ajaxLoad: null,
            /**     
			 * Triggered before ajax content load action.
			 * @event
			 * @name ejTab#ajaxBeforeLoad 	
			 * @param {Object} argument Event parameters from button     
			 * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the tab model.
			 * @param {string}  argument.type returns the name of the event.
		     * @param {object}  argument.prevActiveHeader returns previous active tab header.
			 * @param {number}  argument.prevActiveIndex returns previous active index.
			 * @param {object}  argument.activeHeader returns current active tab header .
			 * @param {number}  argument.activeIndex returns current active index.
			 * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
             * $("#tab").ejTab({
              * width:"300px",
             *    ajaxBeforeLoad: function (args) {}
             * });      
             * &lt;/script&gt;  
			 * @memberof ejTab
			 * @instance
			 */
            ajaxBeforeLoad: null,
            /**     
			 * Triggered after a tab item activated.
			 * @event
			 * @name ejTab#ajaxSuccess 	
			 * @param {Object} argument Event parameters from button     
			 * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the tab model.
			 * @param {string}  argument.type returns the name of the event.
			 * @param {object}  argument.prevActiveHeader returns previous active tab header.
			 * @param {number}  argument.prevActiveIndex returns previous active index.
			 * @param {object}  argument.activeHeader returns current active tab header .
			 * @param {number}  argument.activeIndex returns current active index.
			 * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
             * $("#tab").ejTab({
              * width: "300px",
             *    ajaxSuccess: function (args) {}
             * });      
             * &lt;/script&gt;  
			 * @memberof ejTab
			 * @instance
			 */
            ajaxSuccess: null,
            /**     
    * Triggered after a tab item activated.
    * @event
    * @name ejTab#ajaxError  
    * @param {Object} argument Event parameters from button     
    * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
    * @param {object}  argument.model returns the tab model.
    * @param {string}  argument.type returns the name of the event.
    * @param {object}  argument.prevActiveHeader returns previous active tab header.
     * @param {number}  argument.prevActiveIndex returns previous active index.
     * @param {object}  argument.activeHeader returns current active tab header .
     * @param {number}  argument.activeIndex returns current active index.
    * @example 
    *&lt;div id="tab"&gt;                  
*&lt;ul&gt;                      
*&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
*&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
*&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
*&lt;/ul&gt;                  
*&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
*It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
*&lt;/div&gt;                  
*&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
*&lt;/div&gt;                  
*&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
*&lt;/div&gt;              
*&lt;/div&gt;
* &lt;script type="text/javascript"&gt;         
          * $("#tab").ejTab({
           * width: "300px",
          *    ajaxError: function (args) {}
          * });      
          * &lt;/script&gt;  
    * @memberof ejTab
    * @instance
    */
            ajaxError: null,
            /**     
    * Triggered after a tab item activated.
    * @event
    * @name ejTab#active   
    * @param {Object} argument Event parameters from button     
    * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
    * @param {object}  argument.model returns the tab model.
    * @param {string}  argument.type returns the name of the event.
    * @param {object}  argument.prevActiveHeader returns previous active tab header.
     * @param {number}  argument.prevActiveIndex returns previous active index.
     * @param {object}  argument.activeHeader returns current active tab header .
     * @param {number}  argument.activeIndex returns current active index.
    * @example 
    *&lt;div id="tab"&gt;                  
*&lt;ul&gt;                      
*&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
*&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
*&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
*&lt;/ul&gt;                  
*&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
*It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
*&lt;/div&gt;                  
*&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
*&lt;/div&gt;                  
*&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
*&lt;/div&gt;              
*&lt;/div&gt;
* &lt;script type="text/javascript"&gt;         
          * $("#tab").ejTab({
           * width: "300px",
          *    itemActive: function (args) {}
          * });      
          * &lt;/script&gt;  
    * @memberof ejTab
    * @instance
    */
            itemActive: null,
            /**     
			 * Triggered before a tab item activated.
			 * @event
			 * @name ejTab#beforeActive 	
			 * @param {Object} argument Event parameters from button     
			 * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the tab model.
			 * @param {string}  argument.type returns the name of the event.
			 * @param {object}  argument.prevActiveHeader returns previous active tab header.
			 * @param {number}  argument.prevActiveIndex returns previous active index.
			 * @param {object}  argument.activeHeader returns current active tab header .
			 * @param {number}  argument.activeIndex returns current active index.
			 * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
             * $("#tab").ejTab({
              * width: "300px",
             *    beforeActive: function (args) {}
             * });      
             * &lt;/script&gt;  
			 * @memberof ejTab
			 * @instance
			 */
            beforeActive: null,
            /**     
			 * Triggered after new tab item add
			 * @event
			 * @name ejTab#itemAdd 	
			 * @param {Object} argument Event parameters from button     
			 * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the tab model.
			 * @param {string}  argument.type returns the name of the event.
			 * @param {object}  argument.tabHeader returns new added tab header.
			 * @param {object}  argument.tabContent returns new added tab content panel.
			 * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
             * $("#tab").ejTab({
              * width: "300px",
             *    itemAdd: function (args) {}
             * });      
             * &lt;/script&gt;  
			 * @memberof ejTab
			 * @instance
			 */
            itemAdd: null,
            /**     
			 * Triggered after tab item removed.
			 * @event
			 * @name ejTab#itemRemove 	
			 * @param {Object} argument Event parameters from button     
			 * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the tab model.
			 * @param {string}  argument.type returns the name of the event.
			 * @param {object}  argument.removedTab returns removed tab header.
			 * @param {object}  argument.removedPanel returns removed tab content panel.
			 * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
             * $("#tab").ejTab({
              * width: "300px",
             *    itemRemove: function (args) {}
             * });      
             * &lt;/script&gt;  
			 * @memberof ejTab
			 * @instance
			 */
            itemRemove: null,
            /**     
			 * Triggered before a tab item remove.
			 * @event
			 * @name ejTab#beforeItemRemove 	
			 * @param {Object} argument Event parameters from button.     
			 * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the tab model.
			 * @param {string}  argument.type returns the name of the event.
			 * @param {number}  argument.index returns current tab item index			
			 * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
             * $("#tab").ejTab({
              * width: "300px",
             *    beforeItemRemove: function (args) {}
             * });      
             * &lt;/script&gt;  
			 * @memberof ejTab
			 * @instance
			 */
            beforeItemRemove: null,
            /**     
    * Triggered before a tab item Create.
    * @event
    * @name ejTab#create   
    * @param {Object} argument Event parameters from button.     
    * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
    * @param {object}  argument.model returns the tab model.
    * @param {string}  argument.type returns the name of the event.
    * @param {number}  argument.deleteIndex returns current tab item index     
    * @example 
    *&lt;div id="tab"&gt;                  
*&lt;ul&gt;                      
*&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
*&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
*&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
*&lt;/ul&gt;                  
*&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
*It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
*&lt;/div&gt;                  
*&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
*&lt;/div&gt;                  
*&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
*&lt;/div&gt;              
*&lt;/div&gt;
* &lt;script type="text/javascript"&gt;         
          * $("#tab").ejTab({
           * width: "300px",
          *    create: function (args) {}
          * });      
          * &lt;/script&gt;  
    * @memberof ejTab
    * @instance
    */
            create: null,
            /**     
   * Triggered before a tab item destroy.
   * @event
   * @name ejTab#destroy   
   * @param {Object} argument Event parameters from button.     
   * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
   * @param {object}  argument.model returns the tab model.
   * @param {string}  argument.type returns the name of the event.
   * @param {number}  argument.deleteIndex returns current tab item index     
   * @example 
   *&lt;div id="tab"&gt;                  
*&lt;ul&gt;                      
*&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
*&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
*&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
*&lt;/ul&gt;                  
*&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
*It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
*&lt;/div&gt;                  
*&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
*&lt;/div&gt;                  
*&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
*&lt;/div&gt;              
*&lt;/div&gt;
* &lt;script type="text/javascript"&gt;         
         * $("#tab").ejTab({
          * width: "300px",
         *    destroy: function (args) {}
         * });      
         * &lt;/script&gt;  
   * @memberof ejTab
   * @instance
   */
            destroy: null

        },
        dataTypes: {
            cssClass: "string",
            collapsible: "boolean",
            events: "string",
            heightAdjustMode: "enum",
            selectedItemIndex: "number",
            enabled: "boolean",
            ajaxSettings: "data",
            disabledItemIndex: "data",
            enabledItemIndex: "data",
			enableAnimation: "boolean",
        },
        /**
        * destroy the tab widget
		* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
		* @private
        */
        // all events bound using this._on will be unbind automatically
        _destroy: function () {
            /// <summary>This function is  used to destroy the Tab Object</summary>
            this._unWireEvents();
            this._removeBaseClass();
        },
        /**
        * To configure the properties at runtime using SetModel		
        * @private
        */
        _setModel: function (options) {
            /// <summary>This function is used to set the Tab model</summary>
            if (!this.model.enabled && ej.isNullOrUndefined(options["enabled"])) return false;
            for (var key in options) {
                switch (key) {
                    case "events": {
                        this._off(this.anchors, this.model.events);
                        this._on(this.anchors, options[key], this._tabItemClick);
                        break;
                    }
                    case "disabledItemIndex": this._disableItems(options[key]); break;
                    case "enabledItemIndex": this._enableItems(options[key]); break;
                    case "enabled": this._enabledAction(options[key]); break;
                    case "selectedItemIndex": this.showItem(options[key]); break;
                    case "heightAdjustMode": this._setTabsHeightStyle(options[key]); break;
                    case "cssClass": this._changeSkin(options[key]); break;
                    case "showRoundedCorner": this._roundedCorner(options[key]); break;
                    case "height": this.element.height(options[key]); break;
                    case "width": this.element.width(options[key]); break;
                    case "allowKeyboardNavigation": {
                        if (options[key])
                            this._on(this.element, 'keydown', this._keyPress);
                        else
                            this._off(this.element, "keydown");
                        break;
                    }
                    case "headerPosition":
                        {
                            this.model.headerPosition = options[key];
                            if (this.model.headerPosition == ej.Tab.Position.Top) {
                                this._removeVerticalClass();
                                this.itemsContainer.remove();
                                this.itemsContainer.insertBefore(this.element.find(">div").first());
                                this.element.find("div.e-active-content").removeClass("e-activebottom");
                            }
                            else if (this.model.headerPosition == ej.Tab.Position.Bottom) {
                                this._removeVerticalClass();
                                this.element.find("div.e-active-content").removeClass("e-activetop");
                            }
                            else if (this.model.headerPosition == ej.Tab.Position.Left || this.model.headerPosition == ej.Tab.Position.Right) {
                                this._removeHeaderClass();
                            }
                            this._refresh();
                            break;
                        }
                    case "showCloseButton":
                        {
                            if (options[key]) {
                                this._addDeleteIcon();
                                this._on(this.element.find("div.e-delete"), "click", this._tabDeleteClick);
                            } else
                                this.element.find("div.e-delete").remove();
                            break;
                        }
					case "enableAnimation":
						{
							this.model.enableAnimation=options[key];
							break;
						}
                    case "showReloadIcon":
                        {
                            if (options[key]) {
                                this._addReloadIcon();
                            } else
                                this.element.find("div.e-reload").remove();
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
                }
            }
        },
        /**
        * Create the tab widget
        * @private
        */
        // constructor function
        _init: function () {
			this._addItemIndex=null;
            this.tabId = 0;
            this._initialize();
        },
        /**
        * To configure the custom theme for tab using cssClass property		
        * @private
        */
        //Skin Change at run time
        _changeSkin: function (skin) {
            if (this.model.cssClass != skin) {
                this.element.removeClass(this.model.cssClass).addClass(skin);
            }
        },

        /**
         * To initialize the tab		
		 * @private
         */
        // Render the tab control
        _initialize: function () {
		    this.element.attr("tabindex", 0).attr("role", "tablist");
			this._itemsRefreshing();
            $(this.anchors).addClass("e-link");
            this._preTabIndex = -1;
            if (!ej.isNullOrUndefined(this.model.width))
                this.element.width(this.model.width);
            if (!ej.isNullOrUndefined(this.model.height))
                this.element.height(this.model.height);
            this._setTabPosition(this.model.headerPosition);
            if (this.model.showCloseButton)
                this._addDeleteIcon();
            if (this.model.showReloadIcon)
            this._addReloadIcon();		
			if(this.model.showRoundedCorner)
            this._roundedCorner(this.model.showRoundedCorner);		
            this._enabledAction(this.model.enabled); 
			this._wireEvents(this.model.events);			
			this.contentPanels = [];
			this._reinitialize();			
			this._addBaseClass();
            if (!(this.model.headerPosition == "left" || this.model.headerPosition == "right"))
            this._setTabsHeightStyle(this.model.heightAdjustMode );
            this._disableTabs();
            this._roundedCorner(this.model.showRoundedCorner);
            // Added for rendering the Windows tab...
			this.showItem(this.model.selectedItemIndex);
			this._enabledAction(this.model.enabled);
        },
        /**
        * section for enable / disable the action
        * @private
        */
		_reinitialize:function()
		{
				var hid,href,hrefbase;
				for (var i = (this._addItemIndex!=null)?this._addItemIndex:0; i < this.anchors.length; i++) {
				hid = this.anchors[i];
                href = $(hid).attr("href");
                hrefBase = href.split("#")[0];
                if (hrefBase && (hrefBase === location.toString().split("#")[0])) {
                    href = a.hash;
                    hid.href = href;
                }
                if (href && href !== "#") {
                    this._addContentTag(href, i);
                }
				else {
                    this.model.disabledItemIndex.push(i);
                }
				if(this._addItemIndex!=null){this._wireEvents(this.model.events);break;}
            }
			
			if(this.items.length==1)
			{
			this.showItem(this.model.selectedItemIndex);
			}
			
		},
		_itemsRefreshing: function()
		{
		 this.itemsContainer = this.element.find("ol,ul").eq(0);
         this.items = this.itemsContainer.find(" > li:has(a[href])");
         this.anchors = this.items.find('a[href]');
		},
        _enabledAction: function (flag) {
            if (flag) {
                this.element.removeClass("e-disable");
            }
            else {
                this.element.addClass("e-disable");
            }
        },
        /**
        * To configure Tab position
        * @private
        */
        //Set the Tab position
        _setTabPosition: function (position) {
            if (position == ej.Tab.Position.Bottom) {
                this.itemsContainer.remove();
                this.element.append(this.itemsContainer);
                this.items.removeClass("e-bottom-line");
                this.items.addClass("e-top-line");
            }
            else if (position == ej.Tab.Position.Top) {
                this.items.removeClass("e-top-line");
                this.items.addClass("e-bottom-line");
            }
            else if (position == ej.Tab.Position.Left || position == ej.Tab.Position.Right) {
                if (this.items.length > 0) {
                    if (this.model.height)
                        this.itemsContainer.css("height", this.model.height);
                    else
                        this.itemsContainer.css("height", "100vh");
                    this.element.addClass("e-vertical");
                }
            }
        },
        /**
         * Section for Add delete icon for each tab
		 * @private
         */
        //Add delete icon for each tab
        _addDeleteIcon: function () {
            if (this.element.find("div.e-delete").length <= 0 && this.items.length > 0) {
                var deleteIcon = ej.buildTag('div.e-icon e-delete', "", {}, { role: "presentation" }).css("visibility", "hidden");
                if (this.model.headerPosition == "left" || this.model.headerPosition == "right") {
                    var delIconPosition = this.items.find("a");
                    deleteIcon.insertBefore(delIconPosition);
                }
                else
                    this.items.append(deleteIcon);
            }
        },
        /**
         * Section for Add reload icon for each tab
		 * @private
         */
        //Add reload icon for each tab
        _addReloadIcon: function () {
            if (this.element.find("div.e-reload").length <= 0 && this.items.length > 0) {
                var reloadIcon = ej.buildTag('div.e-icon e-reload', "", {}, { role: "presentation" }).css("visibility", "hidden");
                if (this.model.headerPosition == "left" || this.model.headerPosition == "right") {
                    var iconPosition = this.items.find("a");
                    reloadIcon.insertBefore(iconPosition);
                }
                else
                    this.items.append(reloadIcon);
            }
        },
        /**
         * Section for Add base class for headers and content panels
		 * @private
         */
        //Add base class for headers and content panels
        _addBaseClass: function () {
            this.element.addClass("e-widget " + this.model.cssClass);
            if (this.model.enableRTL)
                this.element.addClass("e-rtl");
            if (this.model.headerPosition == "left") {
                this.items.length > 0 && this.itemsContainer.addClass("e-left");
            }
            else if (this.model.headerPosition == "right") {
                this.items.length > 0 && this.itemsContainer.addClass("e-right");
            }
            else
                this.items.length > 0 && this.itemsContainer.addClass("e-header");
            this.items.addClass("e-select e-item").attr("role", "tab").attr("tabindex", -1).attr("aria-expanded", true).attr("aria-selected", false);
            $(this.contentPanels).addClass("e-content  e-content-item").attr("role", "tabpanel").attr("aria-hidden", true);
        },
        /**
         * Section for remove class for headers 
		 * @private
         */
        _removeHeaderClass: function () {
            this.itemsContainer.remove();
            this.itemsContainer.insertBefore(this.element.find(">div").first());
            this.items.removeClass("e-bottom-line e-top-line");
            $(this.contentPanels).removeClass("e-content-bottom e-corner-bottom e-activetop e-activebottom");
            this.itemsContainer.removeClass("e-header e-left e-right");
        },
        /**
         * Section for remove vertical class from Tab
		 * @private
         */
        _removeVerticalClass: function () {
            this.element.removeClass("e-vertical");
            this.itemsContainer.removeClass("e-left e-right").removeAttr("style");
        },
        /**
         * Section for remove base class for headers and content panels
		 * @private
         */
        //Remove base class for headers and content panels
        _removeBaseClass: function () {
            this.element.removeClass("e-tab e-widget");
            if ((this.model.headerPosition == "left" || this.model.headerPosition == "right"))
                this._removeVerticalClass();
            this.itemsContainer.removeClass("e-header e-clearall e-select");
            this.anchors.removeClass("e-link");
            this.items.removeClass("e-select e-item e-active e-bottom-line e-top-line");
            $(this.contentPanels).removeClass("e-content  e-content-item");
            $(this.contentPanels).removeClass("e-content  e-content-item e-content-bottom e-corner-bottom e-activetop e-activebottom e-active-content");
            $(this.contentPanels).css("display", "");
        },
        /**
         * Section for Create content tag for ajax load and new tab add function
		 * @private
         */
        // Create content tag for ajax load and new tab add function
        _addContentTag: function (href, index) {
            var id = this._getTabId(href);
            var panel = this.element.find("#" + id);
            if (!panel.length) {
                panel = ej.buildTag("div.e-content  e-content-item e-content-bottom #" + id)
                    .insertAfter(this.contentPanels[index - 1] || this.itemsContainer);
            }
            this.contentPanels = $(this.contentPanels).add(panel);
        },
        /**
         * Section for enable/disable showRoundedCorner behaviour
		 * @private
         */
        _roundedCorner: function (value) {
            if (value) {
                this.element.addClass('e-corner-all');
                this.items.addClass('e-corner-top');
                $(this.contentPanels).addClass('e-corner-bottom');
            }
            else if (this.element.hasClass('e-corner-all')) {
                this.element.removeClass('e-corner-all');
                this.items.removeClass('e-corner-top');
                $(this.contentPanels).removeClass('e-corner-bottom');
            }
        },
        /**
         * To configure tab content panels height
		 * @private
         */
        // Set the tab content panels height
        _setTabsHeightStyle: function (heightFormat) {
            $(this.contentPanels).height("");
            if (ej.Tab.HeightAdjustMode.Fill == heightFormat) {
                var maxHeight = this._getDimension($(this.element).parent(), "height");
                $(this.element).parent().css({ "overflow": "auto" });
                for (var i = 0; i < this.items.length; i++) {
                    maxHeight -= this._getDimension($(this.items[i]), "outerHeight");
                }
                var maxPadding = 0;
                for (var i = 0; i < this.contentPanels.length; i++) {
                    maxPadding = Math.max(maxPadding, this._getDimension($(this.contentPanels[i]), "innerHeight") - this._getDimension($(this.contentPanels[i]), "height"));
                }
                $(this.contentPanels).height(maxHeight - maxPadding).css({ "overflow": "auto" });
            }
            else if (ej.Tab.HeightAdjustMode.Auto == heightFormat) {
                maxHeight = 0;
                for (var i = 0; i < this.contentPanels.length; i++) {
                    maxHeight = Math.max(maxHeight, this._getDimension($(this.contentPanels[i]), "outerHeight"));
                }
                $(this.contentPanels).height(maxHeight);
                this.maxAutoHeight = maxHeight;
            }
        },
        _getDimension: function (element, method) {
            var value;
            var $hidden = $(element).parents().andSelf().filter(':hidden');
            var prop = { visibility: 'hidden', display: 'block' };
            var hiddenCollection = [];
            $hidden.each(function () {
                var hidden = {}, name;
                for (name in prop) {
                    hidden[name] = this.style[name];
                    this.style[name] = prop[name];
                }
                hiddenCollection.push(hidden);
            });
            value = /(outer)/g.test(method) ?
            $(element)[method](true) :
           $(element)[method]();

            $hidden.each(function (i) {
                var hidden = hiddenCollection[i], name;
                for (name in prop) {
                    this.style[name] = hidden[name];
                }
            });
            return value;
        },
        // Tab to active given index value
        showItem: function (index) {
            if ($.inArray(index, this.model.disabledItemIndex) < 0) {
                var proxy = this;
                this._preTabIndex = this.model.selectedItemIndex;
                this.model.selectedItemIndex = index;
                if (this.model.selectedItemIndex >= this.contentPanels.length) {
                    this.model.selectedItemIndex = 0;
                }
                $(this.items[this.model.selectedItemIndex]).attr("aria-expanded", true).attr("aria-selected", true).attr("tabindex", 0);
                if (this.model.selectedItemIndex != null && this.model.selectedItemIndex < this.contentPanels.length) {
                    this._ajaxLoad();
                    this.hideItem(this._preTabIndex);
                    if (index >= 0)
                        if (this._onBeforeActive(index))
                            return false;
                    $(this.contentPanels[this.model.selectedItemIndex]).fadeIn(this.model.enableAnimation?200:0, "easeOutQuad", function () {
                        if (proxy._onActive())
                            return true;
                    });
                    if (!(this.model.headerPosition == "left" || this.model.headerPosition == "right"))
                        var activeClass = this.model.headerPosition == ej.Tab.Position.Top ? "e-activetop" : "e-activebottom";
                    else
                        $(this.contentPanels[this.model.selectedItemIndex]).addClass("e-active-content ");
                    $(this.items[this.model.selectedItemIndex]).addClass("e-active").removeClass("e-select");
                    $(this.contentPanels[this.model.selectedItemIndex]).addClass("e-active-content " + activeClass).removeAttr("aria-hidden", false);
                    //$(this.items[this._preTabIndex]).attr("aria-expanded", false).attr("tabindex", -1);
                }
            }
        },
        // Tab to hide given index value
        hideItem: function (index) {
            $(this.contentPanels[index]).fadeOut(0);
            if (!(this.model.headerPosition == "left" || this.model.headerPosition == "right"))
                var activeClass = this.model.headerPosition == ej.Tab.Position.Top ? "e-activetop" : "e-activebottom";
            $(this.items[index]).removeClass("e-active").addClass("e-select");
            $(this.contentPanels[index]).removeClass("e-active-content " + activeClass).attr("aria-hidden", true);
        },
        /**
         * To configure Ajax load
		 * @private
         */
        //Ajax load function
        _ajaxLoad: function () {
            var content = $(this.contentPanels[this.model.selectedItemIndex]);
            var link = this.anchors[this.model.selectedItemIndex];
            var href = $(link).attr("href");
            if (content.is(':empty') && href.indexOf("#") !== 0)
                this._sendAjaxOptions(content, link);
        },
        /**
         * Section for get tab id 
		 * @private
         */
        //get tab id for new added tabs
        _getTabId: function (href) {
            return !href.indexOf("#") ? href.replace("#", "") : this.model.idPrefix + this._getNextTabId();
        },
        /**
         * Section for get Next tab id 
		 * @private
         */
        _getNextTabId: function () {
            return ++this.tabId;
        },
        /**
         * Section for Disable tab 
		 * @private
         */
        // Disable tabs in given index
        _disableTabs: function () {
            for (var i = 0, li; (li = this.items[i]) ; i++) {
                if ($.inArray(i, this.model.disabledItemIndex) > -1) {
                    $(li).find("a").unbind(this.model.events);
                    this._off($(li).find("div.e-delete"), "click");
                    $(this.contentPanels[i]).addClass("e-disable");
                }
                $(li)[$.inArray(i, this.model.disabledItemIndex) != -1 &&
                    !$(li).hasClass("e-tab-selected") ? "addClass" : "removeClass"]("e-disable");
            }
        },
        /**
         * Section for handle click event
		 * @private
         */
        // Tabs event handler
        _tabItemClick: function (args) {
            if (this.model.enabled) {
                args.preventDefault(); // Prevent the ancher tag url action
                var index;
                if (this.model.selectedItemIndex == $(this.items).index($(args.currentTarget)) && this.model.collapsible) {
                    index = -1;
                }
                else {
                    index = $(this.items).index($(args.currentTarget));
                }
                if (index != this.model.selectedItemIndex)
                    this.showItem(index);
            }
        },
        /**
         * Section for handle click event on tab delete icon
		 * @private
         */
        _tabDeleteClick: function (args) {
            if (this.model.enabled) {
                var currentTab = $(args.target);
                if (currentTab.hasClass("e-delete"))
                    var index = $(this.items).index($(args.target).parent());
                if (index == this.model.selectedItemIndex && this.items.length > index)
                    this.model.selectedItemIndex++;
                this.removeItem(index);
            }
        },
        /**
        * Section for handle click event
        * @private
        */
        _tabReloadClick: function (args) {
            if (this.model.enabled) {
                var currentTab = $(args.target);
                if (currentTab.hasClass("e-reload")) {
                    var link = this.anchors[this.model.selectedItemIndex];
                    var href = $(link).attr("href");
                    var content = $(this.contentPanels[this.model.selectedItemIndex]);
                    if (href.indexOf("#") !== 0)
                        this._sendAjaxOptions(content, link);
                    else
                        this.showItem(this.model.selectedItemIndex);
                }
            }
        },
        /**
        * Section for handle ajax request
        * @private
        */
        //handling the ajax request
        _sendAjaxOptions: function (content, link) {
            //load waiting popup
            if (this._onBeforeLoad(link))
                return true;
            content.addClass("e-load");
            var proxy = this;
            var curTabTitle = $(link).html();
            var hrefLink = link.href.replace("#", "");
            var ajaxOptions = {
                type: this.model.ajaxSettings.type, cache: this.model.ajaxSettings.cache, url: hrefLink, data: this.model.ajaxSettings.data,
                dataType: this.model.ajaxSettings.dataType, contentType: this.model.ajaxSettings.contentType, async: this.model.ajaxSettings.async,
                "success": function (data) {
                    try {
                        proxy._ajaxSuccessHandler(data, content, link, curTabTitle);
                    } catch (e) {

                    }
                }, "error": function () {
                    try {
                        proxy._ajaxErrorHandler(link, proxy.model.selectedItemIndex, curTabTitle);
                    } catch (e) {

                    }
                }
            };
            //$.extend(true, {}, proto.prototype.defaults, options);
            //this.model.ajaxOptions = $.extend(true, _ajaxOptions, this.model.ajaxOptions);
            this._sendAjaxRequest(ajaxOptions);
        },
        // Ajax Request function
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
        * Section for handle ajax success
        * @private
        */
        //Ajax sucess function
        _ajaxSuccessHandler: function (data, content, link, curTabTitle) {
            if (curTabTitle != null)
                $(link).html(curTabTitle);
            content.removeClass("e-load");
            content.html(data).addClass("e-tab-loaded"); //to indicate the content is already loaded
            var eventData = { data: data, url: link, content: content };
            this._trigger("ajaxSuccess", eventData);
            if (this._onLoad(link))
                return true;
        },
        /**
        * Section for handle ajax error
        * @private
        */
        // ajax error function
        _ajaxErrorHandler: function (data, link, index, title) {
            this._trigger("ajaxError", { data: data, url: link });
            this._onLoad(link);
        },
        /**
         * Section for create content panel
		 * @private
         */
        _createContentPanel: function (id) {
            return $('<div></div>')
				.attr("id", id)
				.addClass("e-content  e-content-item e-content-bottom");
        },
        /**
         * Section for Refresh conrol.
		 * @private
         */
        // Refresh conrol
        _refresh: function () {
            this._unWireEvents();
            this._initialize();
        },
        /**
         * Section to watch keypress action.		
		 * @private
         */
        _keyPress: function (e) {
            if (this.model.enabled) {
                var index, currentEle, targetEle = $(e.target);
                if (e.keyCode) code = e.keyCode; // ie and mozilla/gecko
                else if (e.which) code = e.which; // ns4 and opera
                else code = e.charCode;
                if (targetEle.hasClass("e-link") || targetEle.hasClass("e-item")) {
                    switch (code) {
                        //Right arrow
                        case 39:
                        case 38:
                            {
                                e.preventDefault();
                                this.showItem(this.model.selectedItemIndex + 1);
                                break;
                            }
                            //Left arrow
                        case 37:
                        case 40:
                            {
                                e.preventDefault();
                                if (this.model.selectedItemIndex != 0)
                                    this.showItem(this.model.selectedItemIndex - 1);
                                else if (this.model.selectedItemIndex == 0)
                                    this.showItem(this.getItemsCount() - 1);
                                break;
                            }
                            //End key
                        case 35:
                            {
                                e.preventDefault();
                                this.showItem(this.getItemsCount() - 1);
                                break;
                            }
                            //Home key
                        case 36:
                            {
                                e.preventDefault();
                                this.showItem(0);
                                break;
                            }
                    }
                }
                else if (e.ctrlKey && !targetEle.hasClass("e-tab")) {
                    switch (code) {
                        case 38:
                            e.preventDefault();
                            index = $(this.contentPanels).index(targetEle.parent(".e-content"));
                            currentEle = $(this.items[index]);
                            break;
                        case 33:
                            e.preventDefault();
                            currentEle = $(this.items[0]);
                            this.showItem(0);
                            break;
                        case 34:
                            e.preventDefault();
                            currentEle = $(this._headers[this.getItemsCount() - 1]);
                            this.showItem(this.getItemsCount() - 1);
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
         * Section to watch hover action on tab.		
		 * @private
         */
        _hoverHandler: function (args) {
            args.preventDefault();
            if (this.model.enabled) {
                var index = $(this.items).index($(args.target).parent());
                if (index == -1)
                    index = $(this.items).index($(args.target));
                args.type === "mouseout" ? $(this.element.find("div.e-delete")[index]).css("visibility", "hidden") : $(this.element.find("div.e-delete")[index]).css("visibility", "visible");
                args.type === "mouseout" ? $(this.element.find("div.e-reload")[index]).css("visibility", "hidden") : $(this.element.find("div.e-reload")[index]).css("visibility", "visible");
            }
        },
        //-------------------- Event Wire-up -------------------------//
        /**
        * Wiring the events to tab control		
        * @private
        */
        _wireEvents: function (event) {
            //tabs Click evnts
            this._on(this.items, event, this._tabItemClick);
            this._on(this.itemsContainer, "mouseover", this._hoverHandler);
            this._on(this.itemsContainer, "mouseout", this._hoverHandler);
            this._on(this.element.find("div.e-delete"), "click", this._tabDeleteClick);
            this._on(this.itemsContainer, "focusin", this._focusIn);
            this._on(this.itemsContainer, "focusout", this._focusOut);
            this._on(this.element.find("div.e-reload"), "click", this._tabReloadClick);
        },
        //-------------------- Event UnWire-up -------------------------//
        /**
        * UnWiring the events from tab control		
        * @private
        */
        _unWireEvents: function () {
            this._off(this.anchors, this.model.events);
            this._off(this.element.find("div.e-delete"), "click");
            this._off(this.itemsContainer, "mouseover", this._hoverHandler);
            this._off(this.itemsContainer, "mouseout", this._hoverHandler);
            this._off(this.itemsContainer, "focusin", this._focusIn);
            this._off(this.itemsContainer, "focusout", this._focusOut);
            this._off(this.element.find("div.e-reload"), "click");
        },
        //--------------------- Client side Methods ----------------------//


        _disableItems: function (indexes) {
            /// <summary>This function disable the given item of the tab control</summary>
            /// <param name="index" type="int"></param>
            if (!this.model.enabled) return false;
            if (indexes != null) {
                for (var i = 0; i < indexes.length; i++) {
                    if ($.inArray(indexes[i], this.model.disabledItemIndex) == -1)
                        this.model.disabledItemIndex.push(indexes[i]);
                }
                this.model.disabledItemIndex.sort();
                this._disableTabs();
            }
        },

        _enableItems: function (indexes) {
            /// <summary>This function enable the given item of the tab control</summary>
            /// <param name="index" type="int"></param>
            if (!this.model.enabled) return false;
            for (var i = 0; i < indexes.length; i++) {
                var index = indexes[i];
                !ej.isNullOrUndefined(this.contentPanels[index]) && $(this.contentPanels[index]).removeClass("e-disable");
                if ($.inArray(index, this.model.disabledItemIndex) == -1) {
                    return false;
                }
                this.model.disabledItemIndex = $.grep(this.model.disabledItemIndex, function (n, i) {
                    return n != index;
                });
            }
            this._refresh();
            this._disableTabs();
        },
        //Deprecate this methods with enableItems()
        /**
       * Given index header and content panel disabled.
       * @alias disable
       * @return jQuery
	   * @param {number} index  index of tab item.
       * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;

  * &lt;script type="text/javascript"&gt;  
 
  * $("#tab").ejTab({width:"300px"});      
       * //initialize the tab object
       * var tabObj = $("#tab").data("ejTab");
       *	// disable the item from the Tab based on the index
       *	tabObj.disable();
       * &lt;/script&gt;  
       * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;  
  * $("#tab").ejTab({width:"300px"});       
       * $("#tab").ejTab("disable");
       * &lt;/script&gt;  
       * @memberof ejTab
       * @instance
       */
        disable: function () {
            var indexes = [];
            for (var index = 0; index < this.getItemsCount() ; index++) {

                indexes.push(index);
            }
            this._disableItems(indexes);
            this.model.enabledItemIndex = [];
            this._unWireEvents();
        },
        /**
       * Given index header and content panel enabled.
       * @alias enable
       * @return jQuery
	   * @param {number} index  index of tab item.
       * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;   
  * $("#tab").ejTab({width:"300px"});      
       * //initialize the tab object
       *	var tabObj = $("#tab").data("ejTab");
       *	// enable the item from the Tab based on the index
       *	tabObj.enable();
       * &lt;/script&gt;  
       * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;     
  * $("#tab").ejTab({width:"300px"});    
       * $("#tab").ejTab("enable");
       * &lt;/script&gt;  
       * @memberof ejTab
       * @instance
       */
        enable: function () {
            var indexes = [];
            for (var index = 0; index < this.getItemsCount() ; index++) {
                if ($.inArray(index, this.model.enabledItemIndex) < 0) {
                    this.model.enabledItemIndex.push(index);
                    indexes.push(index);
                }
                this._enableItems(index);
            }
            this.model.disabledItemIndex = [];

        },
        /**
       * This function get the number of tab rendered
       * @alias getItemsCount
       * @return number
       * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;    
  * $("#tab").ejTab({width:"300px"});     
       * //initialize the tab object
       *	var tabObj = $("#tab").data("ejTab");
       *	// get the number of tab rendered
       *	tabObj.getItemsCount();
       * &lt;/script&gt;  
       * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;    
  * $("#tab").ejTab({width:"300px"});     
       * $("#tab").ejTab("getItemsCount");
       * &lt;/script&gt;  
       * @memberof ejTab
       * @instance
       */
        getItemsCount: function () {
            /// <summary>This function get the number of tab rendered</summary>
            if (this.items) {
                return this.items.length;
            }
        },
        /**
        * Add new tab items with given name, url and given index position, if index null it’s add last item.
		* @alias addItem
		* @return jQuery
		* @param {string} url  URL name / tab id.
		* @param {string} displayLabel  Tab Display name.
		* @param {number} index  Index position to placed , this is optional.
		* @example 
    *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;
                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;  
  *&lt;div id="new"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;             
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;         
		* //initialize the tab object
    * $("#tab").ejTab({width:"400px"});
		*	var tabObj = $("#tab").data("ejTab");
		*	// Add new tab items with given list
		*	tabObj.addItem("#new","New Item",3);
    * &lt;/script&gt;  
		* @example 
    *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt; 
  *&lt;div id="new"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;  
  * $("#tab").ejTab({width:"400px"});       
        * $("#tab").ejTab("addItem","#new","New Item",3); 
        * &lt;/script&gt;  
		* @memberof ejTab
		* @instance
        */
        addItem: function (url, displayLabel, index, cssClass) {
            /// <summary>This function new tab item in dynamicaly</summary>
            /// <param name="url" type="String">URL name / tab id</param>
            /// <param name="displayLabel" type="String"> Tab Display name</param>
            /// <param name="index" type="int">Index position to placed , this is optional</param>
			(index>=0&&index<this.items.length)?this._addItemIndex=index:this._addItemIndex=this.items.length;
			for(var disable_index=0;disable_index<this.model.disabledItemIndex.length;disable_index++)
			{
			if(this.model.disabledItemIndex[disable_index]>=index)
			this.model.disabledItemIndex[disable_index]++;
			}
            if (this.model.headerPosition == "left") {
                this.items.length >= 0 && this.itemsContainer.addClass("e-left");
            }
            else if (this.model.headerPosition == "right") {
                this.items.length >= 0 && this.itemsContainer.addClass("e-right");
            }
            else
                this.items.length == 0 && this.itemsContainer.addClass("e-header");
            var liTag = ej.buildTag("li.e-select e-item");
            if (!ej.isNullOrUndefined(cssClass)) {
                var span = ej.buildTag('span').addClass(cssClass);
                liTag.append(span);
            }
            var aTag = ej.buildTag("a", displayLabel, {}, { href: url });
            aTag.appendTo(liTag);
            if (this.model.showCloseButton) {
                var deleteIcon = ej.buildTag('div.e-icon e-delete ');
                liTag.append(deleteIcon);
                this._on(deleteIcon, "click", this._tabDeleteClick);
            }
            if (index === undefined) {
                index = this.anchors.length;
            }
            var insertIndex = index >= this.items.length;
            if (insertIndex) {
                liTag.appendTo(this.itemsContainer);
            } else {
                liTag.insertBefore(this.items[index]);
            }
            if (this.model.selectedItemIndex == index) {
                this.hideItem[index];
                this.model.selectedItemIndex += 1;
            } else {
                this.hideItem[index];
                if (index < this.model.selectedItemIndex)
                    this.model.selectedItemIndex += 1;
            }
		    this._itemsRefreshing();
            this._reinitialize();
            var data = {
                tabHeader: this.anchors[index],
                tabContent: this.contentPanels[index]
            };
			this._addItemIndex=null;
            this._onAdd(data);
        },
        /**
       * Remove the given index tab item.
       * @alias removeItem
       * @return jQuery
	   * @param {number} index  index of tab item.
       * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;    
  * $("#tab").ejTab({width:"300px"});     
       * //initialize the tab object
       *	var tabObj = $("#tab").data("ejTab");
       *	// Remove the given index tab item.
       *	tabObj.removeItem(1);
       * &lt;/script&gt;  
       * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt; 
  * $("#tab").ejTab({width:"300px"});        
       * $("#tab").ejTab("removeItem",1); 
       * &lt;/script&gt;  
       * @memberof ejTab
       * @instance
       */
        removeItem: function (index) {
            /// <summary>This function Remove the given index</summary>
            /// <param name="index" type="int"></param>
            if (!this.model.enabled) return false;
            if (index != null && index > -1 && index < this.items.length) {
                if (this._onBrforeRemove({ index: index }) === true)
                    return false;
                var removedTab = $(this.items[index]).remove();
				for(var disable_index=0;disable_index<this.model.disabledItemIndex.length;disable_index++)
				{
				if(this.model.disabledItemIndex[disable_index]>index)
				this.model.disabledItemIndex[disable_index]--;
				else if(this.model.disabledItemIndex[disable_index]==index)
				{
				this.model.disabledItemIndex.splice(disable_index,1);
				}
				}
				if (removedTab.hasClass("e-active")) {
                   this.model.selectedItemIndex = (index == 0)?index+1:(index-1);
                     this.showItem(this.model.selectedItemIndex);  				
                }
				this.element.find(">div.e-content")[index].remove();
				this.contentPanels.splice(index,1);		
				this.model.selectedItemIndex=index<this.model.selectedItemIndex?this.model.selectedItemIndex-1:this.model.selectedItemIndex;
				
                if (index < 0 || index >= this.anchors.length) {
                    this.model.selectedItemIndex = 0;
                }
                if ((this.model.headerPosition == "left" || this.model.headerPosition == "right") && this.items.length == 1)
                    this._removeVerticalClass();
                else
                    this.items.length == 1 && this.itemsContainer.removeClass("e-header");
		        this._unWireEvents();
		        this._itemsRefreshing();
				this._wireEvents();
				this._disableTabs();
	            var data = {
                    removedTab: removedTab
                };
                this._onRemove(data);
            }
        },
        /**
       * This function is to show the tab control.
       * @alias show
       * @return jQuery
       * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt; 
  * $("#tab").ejTab({width:"300px"});        
       * //initialize the tab object
       *	var tabObj = $("#tab").data("ejTab");
       *	// To show the tab control.
       *	tabObj.show();
       * &lt;/script&gt;  
       * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;    
  * $("#tab").ejTab({width:"300px"});     
       * $("#tab").ejTab("show"); 
       * &lt;/script&gt;  
       * @memberof ejTab
       * @instance
       */
        show: function () {
            /// <summary>To Show the Tab control</summary>
            if (!this.model.enabled) return false;
            this.element.css("visibility", "visible");
        },
        /**
       * This function hides the tab control.
       * @alias hide
       * @return jQuery
       * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;   
  * $("#tab").ejTab({width:"300px"});      
       * //initialize the tab object
       *	var tabObj = $("#tab").data("ejTab");
       *	// To hide the tab control..
       *	tabObj.hide();
       * &lt;/script&gt;  
       * @example 
       *&lt;div id="tab"&gt;                  
  *&lt;ul&gt;                      
  *&lt;li&gt;&lt;a href="#javaScript"&gt;JavaScript&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#cSharp"&gt;C Sharp (C#)&lt;/a&gt;&lt;/li&gt;                      
  *&lt;li&gt;&lt;a href="#vb"&gt;VB.Net&lt;/a&gt;&lt;/li&gt;                  
  *&lt;/ul&gt;                  
  *&lt;div id="javaScript"&gt; JavaScript (JS) is an interpreted computer programming language. 
  *It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.                  
  *&lt;/div&gt;                  
  *&lt;div id="cSharp"&gt; C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.                  
  *&lt;/div&gt;                  
  *&lt;div id="vb"&gt; The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.                  
  *&lt;/div&gt;              
  *&lt;/div&gt;
  * &lt;script type="text/javascript"&gt;   
  * $("#tab").ejTab({width:"300px"});      
       * $("#tab").ejTab("hide"); 
       * &lt;/script&gt;  
       * @memberof ejTab
       * @instance
       */
        hide: function () {
            /// <summary>To Hide the Tab control</summary>
            if (!this.model.enabled) return false;
            this.element.css("visibility", "hidden");
        },
        //--------------------- End - Client side Methods ----------------------//

        //--------------------- Client side events ----------------------//
        /**
         * Section For handling before load event
		 * @private
         */
        _onBeforeLoad: function (link) {
            var data;
            if (this.model.selectedItemIndex == -1 && this.model.collapsible) {
                data = {
                    prevActiveHeader: this.items[this._preTabIndex],
                    prevActiveIndex: this._preTabIndex,
                    activeHeader: null,
                    activeIndex: null,
                    url: link
                };
            }
            else
                data = {
                    prevActiveHeader: this.items[this._preTabIndex],
                    prevActiveIndex: this._preTabIndex,
                    activeHeader: this.items[this.model.selectedItemIndex],
                    activeIndex: this.model.selectedItemIndex,
                    url: link
                };
            return this._trigger("ajaxBeforeLoad", data);
        },
        /**
        * Section For handle the focusin event
        * @private
        */
        _focusIn: function () {
            if (!this.model.readOnly && this.model.allowKeyboardNavigation)
                $(this.element).bind("keydown", $.proxy(this._keyPress, this));
        },
        /**
         * Section For handle the focus out event
		 * @private
         */
        _focusOut: function (e) {
            $(this.element).unbind("keydown", $.proxy(this._keyPress, this));
        },
        /**
         * Section For handle the load event
		 * @private
         */
        _onLoad: function (link) {
            var data;
            if (this.model.selectedItemIndex == -1 && this.model.collapsible) {
                data = {
                    prevActiveHeader: this.items[this._preTabIndex],
                    prevActiveIndex: this._preTabIndex,
                    activeHeader: null,
                    activeIndex: null,
                    url: link
                };
            }
            else
                data = {
                    prevActiveHeader: this.items[this._preTabIndex],
                    prevActiveIndex: this._preTabIndex,
                    activeHeader: this.items[this.model.selectedItemIndex],
                    activeIndex: this.model.selectedItemIndex,
                    url: link
                };
            return this._trigger("ajaxLoad", data);
        },
        /**
        * Section For handle the Active event
        * @private
        */
        _onActive: function () {
            var data;
            if (this.model.selectedItemIndex == -1 && this.model.collapsible) {
                data = {
                    prevActiveHeader: this.items[this._preTabIndex],
                    prevActiveIndex: this._preTabIndex,
                    activeHeader: null,
                    activeIndex: null
                };
            }
            else
                data = {
                    prevActiveHeader: this.items[this._preTabIndex],
                    prevActiveIndex: this._preTabIndex,
                    activeHeader: this.items[this.model.selectedItemIndex],
                    activeIndex: this.model.selectedItemIndex
                };
            return this._trigger("itemActive", data);
        },
        /**
        * Section For handle the Before itemActive event.
        * @private
        */
        _onBeforeActive: function (index) {
            if (this.model.beforeActive != null) {
                var data;
                if (this.model.selectedItemIndex == -1 && this.model.collapsible) {
                    data = {
                        prevActiveHeader: this.items[this._preTabIndex],
                        prevActiveIndex: this._preTabIndex,
                        activeHeader: null,
                        activeIndex: null
                    };
                }
                else
                    data = {
                        prevActiveHeader: this.items[this._preTabIndex],
                        prevActiveIndex: this._preTabIndex,
                        activeHeader: this.items[index],
                        activeIndex: index
                    };
                return this._trigger("beforeActive", data);
            }
        },
        /**
        * Section For trigger add event.
        * @private
        */
        _onAdd: function (data) {
            return this._trigger("itemAdd", data);
        },
        /**
         * Section For trigger remove event.
		 * @private
         */
        _onRemove: function (data) {
            return this._trigger("itemRemove", data);
        },
        /**
         * Section For trigger before remove event.
		 * @private
         */
        _onBrforeRemove: function (data) {
            return this._trigger("beforeItemRemove", data);
        }
    });
    /**
 * Enum for tab height Style.	 
 * @enum {string}
 * @global 
 */
    ej.Tab.HeightAdjustMode = {
        /**  Panel height adjusts based on the content */
        Content: "content",
        /**  All panel height will be set the tallest panel height. */
        Auto: "auto",
        /**  Content panel take based on the parent height. */
        Fill: "fill"
    };
    /**
 * Enum for Tab Position	 
 * @enum {string}
 * @global 
 */
    ej.Tab.Position = {
        /**  Tab headers display to top position. */
        Top: "top",
        /**  Tab headers display to bottom position. */
        Bottom: "bottom",
        /**  Tab headers display to left position. */
        Left: "left",
        /** Tab headers display to right position. */
        Right: "right"
    };

})(jQuery, Syncfusion);;
/*!
*  filename: ej.tagcloud.js
*  version : 12.1
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the tagCloud control.
* @copyright Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
* @version 12.1 
* @author <a href="mailto:licensing@syncfusion.com">Syncfusion Inc</a>
*/
(function ($, ej, undefined) {
    // ejTagcloud is the plugin name 
    // "ej.Tagcloud" is "namespace.className" will hold functions and properties
    /**
    * @namespace ej
	* @class ejTagCloud
	* @requires jQuery
	* @requires ej.core.js
    * @requires ej.data.js
    * @requires ej.tagcloud.js
	* @classdesc The TagCloud allows the user to display a list of links or tags with a structured cloud format where the importance of the tags can differentiate with varied font sizes, colors, and styles.
	* @example 
	* &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
    * &lt;script&gt; 
	*$(function () {
	*	// document ready
	*	// initialize the array of data for tagcloud input	
	* // simple tagcloud creation
	*	$("#tagcloud").ejTagCloud({ 
	*             dataSource:  window.websiteCollection,
	*             titleText: "Tech Sites"
	*       });
	*});
    * &lt;/script&gt;
    */
    ej.widget("ejTagCloud", "ej.TagCloud", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _rootCSS: "e-tagcloud",
        _setFirst: false,

        // default model
        defaults: {
            /**		
			* Specify the CSS class to button to achieve custom theme.
			* @default ""
			* @type {string}
			* @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
			* // Set the CSS class during initialization. 			
			* 	$("#tagcloud").ejTagCloud({dataSource: window.websiteCollection,cssClass  : "gradient-lime",titleText: "Tech Sites" });			 			
            * &lt;/script&gt;
			 * @memberof ejTagCloud
			* @instance
			*/
            cssClass : "",
            /**		
			* The dataSource contains the list of data to display in a cloud format. Each data contains a link url, frequency to categorize the font size and a display text.
			* @default null
			* @type {object}
			* @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
			* //Initialize the TagCloud with the dataSource value specified		           
            * $("#tagcloud").ejTagCloud({ dataSource: window.websiteCollection,titleText: "Tech Sites" });	
            * &lt;/script&gt;
			 * @memberof ejTagCloud
			* @instance
			*/
            dataSource: null,
            /**		
			* Define the query to retrieve the data from online server. The query is used only when the online dataSource is used.
			* @default null
			* @type {object}
			* @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
			* //Initialize the TagCloud with the query value specified		
            * var dataManger = ej.DataManager({
		    *       url:"http://mvc.syncfusion.com/Services/Northwnd.svc/"
			*});
			* var query = ej.Query().from("Orders").take(10);    
        * $("#tagcloud").ejTagCloud({
        *        titleText: "Employee List",
        *       dataSource: dataManger,
        *      query: query,
        *     fields: { text: "CustomerID" , frequency: "EmployeeID" }
        * });
    * &lt;/script&gt;
			 * @memberof ejTagCloud
			* @instance
			*/
            query: null,
            /**		
			* Defines the mapping fields for the data items of the TagCloud.
			* @default null 
			* @type {Object}
			* @param {Object} options Defines the mapping fields for the data items of the TagCloud.
			* @param {String} options.text - This component's name, sets {@link Component#text}
            * @param {String} options.url - Whether this component is vislble, sets {@link Component#url}
			* @example 
      * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
			  * $(function () {
     * // Initialize the TagCloud with the fields value specified    
            
     * $("#tagcloud").ejTagCloud({
       * dataSource:window.websiteCollection,
       titleText: "Tech Sites",
      * fields: { text: "text" , url:"url",frequency: "frequency"}  
     * });
      * });

     * &lt;/script&gt;
			* @memberof ejTagCloud
			* @instance
			*/
            fields: /** @lends ejTagCloud# */ { 
				/**		
                 * Defines the tag value or display text.
				 * @alias ejTagCloud#fields->text
				 * @type String
                 */
			text: "text", 
				/**		
                 * Defines the url link to navigate while click the tag.
				 * @alias ejTagCloud#fields->url
				 * @type String
                 */
			url: "url", 
				/**		
                 * Defines the frequency number to categorize the font size.
				 * @alias ejTagCloud#fields->frequency
				 * @type Number
                 */
			frequency: "frequency" 
			},
            /**		
           * Shows or hides the TagCloud title. When this set to false, it hides the TagCloud header.
           * @default true
           * @type {boolean}
           * @example 
           * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
           * &lt;script&gt;
           * // Set the showTitle during initialization. 			
           * 	$("#tagcloud").ejTagCloud({     dataSource: window.websiteCollection, showTitle : false  });			 
          
          * &lt;/script&gt;
            * @memberof ejTagCloud
           * @instance
           */
            showTitle: true,
            /**		
			* Sets the title text for the TagCloud. To show the title text, the showTitle property should be enabled.
			* @default "Title"
			* @type {string}
			* @example 
      * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
    * &lt;script&gt;
			* // Set the titleText during initialization. 			
			* 	$("#tagcloud").ejTagCloud({  dataSource:  window.websiteCollection,titleText : "Cloud Data"  });			 
		 
        * &lt;/script&gt;
			 * @memberof ejTagCloud
			* @instance
			*/
            titleText: "Title",
            /**		
			* Sets the title image for the TagCloud. To show the title image, the showTitle property should be enabled.
			* @default null
			* @type {string}
			* @example 
      * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
			* // Set the titleImage during initialization. 			
			* 	$("#tagcloud").ejTagCloud({  dataSource: window.websiteCollection,titleImage: '../images/bird.png' ,titleText: "Tech Sites"  });			 
			 
      * &lt;/script&gt;
			 * @memberof ejTagCloud
			* @instance
			*/
            titleImage: null,
            /**		
			* Defines the format for the TagCloud to display the tag items.See {@link Format} 
			* @default ej.Format.Cloud
			* @type {String | Enum}
			* @example 
      * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
			* // Set the format during initialization. 			
			* 	$("#tagcloud").ejTagCloud({ dataSource:  window.websiteCollection,format: ej.Format.Cloud,titleText: "Tech Sites" });			
			
    * &lt;/script&gt;
			 * @memberof ejTagCloud
			* @instance
			*/
            format: "cloud",
            /**		
           * Sets the TagCloud and tag items direction as right to left alignment.
           * @default false
           * @type {boolean}
           * @example 
           * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
          * &lt;script&gt;
           * // Set the enableRTL during initialization. 			
           * 	$("#tagcloud").ejTagCloud({ dataSource:  window.websiteCollection,enableRTL : false,titleText: "Tech Sites"  });			 
          
          * &lt;/script&gt;
            * @memberof ejTagCloud
           * @instance
           */
            enableRTL: false,
            /**		
           * Sets the minimum font size value for the tag items. The font size for the tag items will be generated in between the minimum and maximum font size values.
           * @default "10px"
           * @type {String | Number}
           * @example 
           * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
          * &lt;script&gt;
           * // Set the minFontSize during initialization. 			
           * 	$("#tagcloud").ejTagCloud({dataSource:  window.websiteCollection, minFontSize : "10px" ,titleText: "Tech Sites" });			 
          
            * &lt;/script&gt;
            * @memberof ejTagCloud
           * @instance
           */
            minFontSize: "10px",
            /**		
           * Sets the maximum font size value for the tag items. The font size for the tag items will be generated in between the minimum and maximum font size values.
           * @default "40px"
           * @type {String | Number}
           * @example 
           * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
           * // Set the maxFontSize during initialization. 			
           * 	$("#tagcloud").ejTagCloud({ dataSource:  window.websiteCollection,maxFontSize : "10px" ,titleText: "Tech Sites" });			 
           
            * &lt;/script&gt;
            * @memberof ejTagCloud
           * @instance
           */
            maxFontSize: "40px",

            //Events
            /**     
            * Event triggers when the cursor hovers on a tag item
            * @event
            * @name ejTagCloud#mouseover 	
            * @param {Object} argument Event parameters from button     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the tagcloud model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.text return current tag name
            * @param {string}  argument.url return current url link
            * @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
          * &lt;script&gt;
            * //mouse over event for tagCloud
            * $("#tagcloud").ejTagCloud({
                 *  dataSource: window.websiteCollection,
                 *titleText: "Tech Sites",
            *    mouseover: function (args) {}
            * });   

           * &lt;/script&gt;   
            * @memberof ejTagCloud
            * @instance
            */
            mouseover: null,
            /**     
            * Event triggers when the cursor leaves out from a tag item
            * @event
            * @name ejTagCloud#mouseout 	
            * @param {Object} argument Event parameters from button     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the tagcloud model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.text return current tag name
            * @param {string}  argument.url return current url link
            * @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
          * &lt;script&gt;
            * //mouseout event for tagCloud
            * $("#tagcloud").ejTagCloud({
                *  dataSource: window.websiteCollection,
                *  titleText: "Tech Sites",
            *    mouseout: function (args) {}
            * });           
            * &lt;/script&gt;     
            * @memberof ejTagCloud
            * @instance
            */
            mouseout: null,
            /**     
            * Event triggers when the TagCloud items are clicked
            * @event
            * @name ejTagCloud#click 	
            * @param {Object} argument Event parameters from button     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the tagcloud model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.text return current tag name
            * @param {string}  argument.url return current url link
            * @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * //click event for tagCloud
            * $("#tagcloud").ejTagCloud({
                *  dataSource: window.websiteCollection,
                *  titleText: "Tech Sites",
            *    click: function (args) {}
            * });        
            * &lt;/script&gt;    
            * @memberof ejTagCloud
            * @instance
            */
            click: null,
            /**     
            * Event triggers when the TagCloud are created
            * @event
            * @name ejTagCloud#create 	
            * @param {Object} argument Event parameters from button     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the tagcloud model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * //create event for tagCloud
            * $("#tagcloud").ejTagCloud({
                *  dataSource: window.websiteCollection,
                *  titleText: "Tech Sites",
            *    create: function (args) {}
            * });        
            * &lt;/script&gt;    
            * @memberof ejTagCloud
            * @instance
            */
            create: null,
            /**     
            * Event triggers when the TagCloud are destroyed
            * @event
            * @name ejTagCloud#destroy 	
            * @param {Object} argument Event parameters from button     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the tagcloud model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * //destroy event for tagCloud
            * $("#tagcloud").ejTagCloud({
                *  dataSource: window.websiteCollection,
                *  titleText: "Tech Sites",
            *    destroy: function (args) {}
            * });        
            * &lt;/script&gt;    
            * @memberof ejTagCloud
            * @instance
            */
            destroy: null
        },
        /**
      * Specify the data types for default properties 
      * @private
      */
        dataTypes: {
            cssClass : "string",
            showTitle: "boolean",
            titleText: "string",
            titleImage: "string",
            format: "enum",
            enableRTL: "boolean",
            dataSource: "data",
            query: "data",
            fields: "data"
        },

        // constructor function
        /**
       * Create the TagCloud widget
       * @private
       */
        _init: function () {
            this._initialize();
            this._render();
        },
        /**
        * To configure the properties at runtime using SetModel		
        * @private
        */
        _setModel: function (options) {
            var option;
            for (option in options) {
                switch (option) {
                    case "fields":
                    case "query":
                    case "dataSource":
                    case "minFontSize":
                    case "maxFontSize":
                        this._refreshTagItems(option, options[option]); break;
                    case "showTitle": this._showTitle(options[option]); break;
                    case "titleText": this._title(options[option]); break;
                    case "titleImage": this._titleImage(options[option]); break;
                    case "cssClass ": this._changeSkin(options[option]); break;
                    case "format": this._format(options[option]); break;
                    case "enableRTL": this._rtl(options[option]); break;
                }
            }
        },

        _refreshTagItems: function (key, value) {
            this.model[key] = value;
            this.ul.empty();
            this._checkDataBinding();
        },
        /**
         * Section For enable or disable the title
		 * @private
         */
        _showTitle: function (boolean) {
            if (boolean) this._generateTitle();
            else {
                this.titleText.remove();
                this.titleText = null;
            }
        },
        /**
        * To configure TagCloud Title		
        * @private
        */
        _title: function (text) {
            if (this.titleText) {
                if (text) {
                    if (this.text) this.text.html(text);
                    else this._generateTextTag(text);
                }
                else if (this.text) {
                    this.text.remove();
                    this.text = null;
                }
            }
        },
        /**
         * Section For Sets the title image for the TagCloud
		 * @private
         */
        _titleImage: function (imagePath) {
            if (this.titleText) {
                if (imagePath) {
                    if (this.image) this.image.attr("src", imagePath);
                    else this._generateImageTag(imagePath);
                }
                else if (this.image) {
                    this.image.remove();
                    this.image = null;
                }
            }
        },
        /**
        * To configure the custom theme for TagCloud using cssClass  property		
        * @private
        */
        _changeSkin: function (skin) {
            if (this.model.cssClass  != skin) {
                this.element.removeClass(this.model.cssClass ).addClass(skin);
            }
        },
        /**
        * Inserts a new item into the TagCloud
		* @alias insert
		* @return jQuery
		* @example 
	
    * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
   *   var tagObj="";
  * var tag = { text: "google", url: "http://www.google.com", frequency: 12 };
      * $(function () {
  * // document ready
  * // initialize the array of data for tagcloud input
  * $("#tagcloud").ejTagCloud({ 
  *             dataSource: window.websiteCollection,
  *             titleText: "Tech Sites"
  * });
 * //initialize the tagCloud object
 * tagObj = $("#tagcloud").data("ejTagCloud");
* //To Inserts a new item into the TagCloud
 * tagObj.insert(tag);
  *       });     
  * &lt;/script&gt;
       
		* @example 
		
     * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
    * &lt;script&gt;
    * var tag = { text: "google", url: "http://www.google.com", frequency: 12 };
    *$(function () {
  * // document ready
  * // initialize the array of data for tagcloud input  
  * $("#tagcloud").ejTagCloud({ 
  *             dataSource: window.websiteCollection,titleText: "Tech Sites"
  * });  
         * $("#tagcloud").ejTagCloud("insert", tag);        
   * });
        * &lt;/script&gt;
		* @memberof ejTagCloud
		* @instance
        */
        insert: function (tag) {
            if ($.trim(tag.text)) {
                this.ul.append(this._generateLi(tag, this._getMapper()));
            }
        },
        /**
        * Inserts a new item into the TagCloud at a particular position. 
		* @alias insertAt
		* @return jQuery
		* @example 
  * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
      * var tag = { text: "google", url: "http://www.google.com", frequency: 12 };
      * var tagObj="";
      *$(function () {
  * // document ready 
  * $("#tagcloud").ejTagCloud({
  * dataSource:window.websiteCollection,
  * titleText: "Tech Sites"
    * });
   *  tagObj = $("#tagcloud").data("ejTagCloud");
   tagObj.insertAt(tag,2);

    * });
      * &lt;/script&gt;
		* @example 
    * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
* var tag = { text: "google", url: "http://www.google.com", frequency: 12 };
      *$(function () {
  * // document ready 
      * $("#tagcloud").ejTagCloud({
      * dataSource:window.websiteCollection,
      * titleText: "Tech Sites"
      * }); 
        * $("#tagcloud").ejTagCloud("insertAt", tag, 2);
        * });
        
      * &lt;/script&gt;
		* @memberof ejTagCloud
		* @instance
        */
        insertAt: function (tag, position) {
            if ($.trim(tag.text)) {
                $(this.ul.children()[position - 1]).before(this._generateLi(tag, this._getMapper()));
            }
        },
        /**
        * Removes the item from the TagCloud based on the name. It removes all the tags which have the corresponding name 
		* @alias remove
		* @return jQuery
		 * @param {string} name  name of the tag.
		* @example 
    
    * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
   *   var tagObj="";
  * var tag = { text: "google", url: "http://www.google.com", frequency: 12 };
      * $(function () {
  * // document ready
  * // initialize the array of data for tagcloud input
  
  
  * $("#tagcloud").ejTagCloud({ 
  *             dataSource: window.websiteCollection,
  *             titleText: "Tech Sites"
  * });
 * //initialize the tagCloud object
 * tagObj = $("#tagcloud").data("ejTagCloud");
* //To Inserts a new item into the TagCloud
 * tagObj.remove(tag);
  *       });     
  * &lt;/script&gt;
		* @example 
     * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
    * &lt;script&gt;
    * var tag = { text: "google", url: "http://www.google.com", frequency: 12 };
    *$(function () {
  * // document ready
  * // initialize the array of data for tagcloud input

  
  * $("#tagcloud").ejTagCloud({ 
  *             dataSource: window.websiteCollection,
  *             titleText: "Tech Sites"
  * });
  
         * $("#tagcloud").ejTagCloud("remove", tag);
        
   * });
        * &lt;/script&gt;

		* @memberof ejTagCloud
		* @instance
        */
        remove: function (txt) {
            var li = this.ul.children(), liTag, i;
            for (i = 0; i < li.length; i++) {
                liTag = $(li[i]);
                if (liTag.children()[0].innerHTML == txt)
                    liTag.remove();
            }
        },
        /**
        * Removes the item from the TagCloud based on the position. It removes the tags from the the corresponding position only. 
		* @alias removeAt
		* @return jQuery
		* @param {number} position  position of tag item.
		* @example 
        * &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
      * var tagObj = "";
      * var tag = { text: "google", url: "http://www.google.com", frequency: 12 };
      *$(function () {       
  * // document ready   
           * $("#tagcloud").ejTagCloud({
        * dataSource:window.websiteCollection,
        * titleText: "Tech Sites"
          * });
   
    * //initialize the tagCloud object
    * var tagObj = $("#tagcloud").data("ejTagCloud");
    * // Removes the item from the TagCloud based on the position.
  
* tagObj.removeAt(2);
    * });
  
    * &lt;/script&gt;
		* @example 
     &lt;div id="tagcloud"&gt;&lt;/div&gt; <br> 
      * &lt;script&gt;
      *$(function () {
      * // document ready
      
        * $("#tagcloud").ejTagCloud({
        * dataSource:window.websiteCollection,
        * titleText: "Tech Sites"
        * });
         * $("#tagcloud").ejTagCloud("removeAt", 4);
        * });
      * &lt;/script&gt;
		* @memberof ejTagCloud
		* @instance
        */
        removeAt: function (position) {
            var li = this.ul.children();
            $(li[position - 1]).remove();
        },
        /**
        * To configure the TagCloud format		
        * @private
        */
        _format: function (format) {
            if (format == "cloud") {
                this.ul.removeClass("e-list");
                this.ul.addClass("e-cloud");
            }
            else if (format == "list") {
                this.ul.removeClass("e-cloud");
                this.ul.addClass("e-list");
            }
        },
        /**
        * destroy the tagCloud widget
		* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
		* @private
        */
        _destroy: function () {
            this.element.removeClass("e-widget " + this.model.cssClass );
            this.element.empty();
        },
        /**
        * To initialize the TagCloud		
        * @private
        */
        _initialize: function () {
            this.minFreq = 0;
            this.maxFreq = 30;
            this.ul = null;
            this.titleText = null;
            this.image = null;
            this.text = null;
        },
        /**
        * Render Section For Tagcloud		
        * @private
        */
        _render: function () {
            this.element.addClass("e-widget " + this.model.cssClass );
            if (this.model.showTitle) this._generateTitle();
            this._renderWrapper();
            this._checkDataBinding();
            this._checkProperties();
        },
        /**
        * To configure the tagCloud title Text
        * @private
        */
        _generateTitle: function () {
            this.titleText = ej.buildTag("div.e-header e-title");
            if (this.model.titleImage)
                this._generateImageTag(this.model.titleImage);
            if (this.model.titleText)
                this._generateTextTag(this.model.titleText);
            if (this.ul) this.titleText.insertBefore(this.ul);
            else this.element.append(this.titleText);
        },
        /**
         * To configure the tagCloud title image
		 * @private
         */
        _generateImageTag: function (titleImage) {	
			if(!this.image)
				this.image = $('<img class="e-title-img" src="' + titleImage + '" />');
			if(this.text && !this.model.titleImage) this.image.insertBefore(this.text);			
			else this.titleText.append(this.image);
        },		
        /**
        * Section for generate Title Text 
        * @private
        */
        _generateTextTag: function (titleText) { 
			if(!this.text) this.text = ej.buildTag("span", titleText);					
			this.titleText.append(this.text);
        },		
        /**
         * Render Section For TagCloud		
		 * @private
         */
        _renderWrapper: function () {
            var format;
            format = (this.model.format == "list") ? "list" : "cloud";
            this.ul = ej.buildTag("ul.e-ul e-box e-" + format);
            this.element.append(this.ul);
        },
        /**
        * Section for rendering tagCloud items
        * @private
        */
        _renderItems: function (list) {
            this._generateTagItems(list);
            this.ul.removeClass("e-load");
        },

        _checkProperties: function () {
            if (this.model.enableRTL) this._rtl(this.model.enableRTL);
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
        * Section for check whether collection of items is local or remote data	
        * @private
        */
        _checkDataBinding: function () {
            var source = this.model.dataSource;
            if (source != null) {
                this.ul.addClass("e-load");
                if (ej.DataManager && source instanceof ej.DataManager)
                    this._initDataSource(source);
                else
                    this._renderItems(source);
            }
        },
        /**
       * Section for render items with Remote Data	
       * @private
       */
        _initDataSource: function (source) {
            var proxy = this;
            var queryPromise = source.executeQuery(this._getQuery());
            queryPromise.done(function (e) {
                proxy._renderItems(e.result);
            }).fail(function (e) {
                proxy.ul.removeClass("e-load");
            });
        },
        /**
        * Section for set attributes to tagCloud items
        * @private
        */
        _setAttributes: function (data, element) {
            if (data) {
                for (var key in data)
                    element.attr(key, data[key]);
            }
        },

        _getQuery: function () {
            if (ej.isNullOrUndefined(this.model.query)) {
                var column = [], queryManager = ej.Query(), mapper = this.model.fields;
                for (var col in mapper) {
                    if (col !== "tableName")
                        column.push(mapper[col]);
                }
                if (column.length > 0)
                    queryManager.select(column);
                if (!this.model.dataSource.dataSource.url.match(mapper.tableName + "$"))
                    !ej.isNullOrUndefined(mapper.tableName) && queryManager.from(mapper.tableName);
            }
            else queryManager = this.model.query;
            return queryManager;
        },

        _generateTagItems: function (list) {
            var i, mapField = this._getMapper();
            this.minFreq = Math.min.apply(Math, list.map(function (o) { return o[mapField._freq]; }))
            this.maxFreq = Math.max.apply(Math, list.map(function (o) { return o[mapField._freq]; }))

            for (i = 0; i < list.length; i++) {
                this.ul.append(this._generateLi(list[i], mapField));
            }
        },
        /**
        * Section for mapping fields
        * @private
        */
        _getMapper: function () {
            var mapper = this.model.fields, mapFld = { _text: null, _freq: null, _url: null };
            mapFld._text = (mapper && mapper.text) ? mapper["text"] : "text";
            mapFld._freq = (mapper && mapper.frequency) ? mapper["frequency"] : "frequency";
            mapFld._url = (mapper && mapper.url) ? mapper["url"] : "url";
            mapFld._attr = (mapper && mapper.htmlAttr) ? mapper["htmlAttr"] : "htmlAttr";
            return mapFld;
        },
        /**
        * Section for render tagCloud items
        * @private
        */
        _generateLi: function (list, map) {
            var li = ej.buildTag("li.e-tagitems"), aTag;
            aTag = ej.buildTag("a.e-txt", list[map._text] || list[map._url],
                    { "font-size": this._calculateFontSize(list[map._freq]) },
                    { "href": list[map._url] || "#", "target": "blank", role: "link"  });
            li.append(aTag);
            this._setAttributes((list[map._attr]), li);
            this._on(aTag, "mouseenter", this._mouseEnter);
            this._on(aTag, "mouseleave", this._mouseLeave);
            this._on(aTag, "click", this._mouseClick);
            return li;
        },

        /**
        * Section For track mouseEnter event
        * @private
        */
        _mouseEnter: function (e) {
            $(e.target).addClass("hover");
            this._raiseEvent(e, "mouseover");
        },
        /**
        * Section For track mouseLeave event
        * @private
        */
        _mouseLeave: function (e) {
            $(e.target).removeClass("hover");
            this._raiseEvent(e, "mouseout");
        },
        /**
        * Section For handle the click event
        * @private
        */
        _mouseClick: function (e) {
            $(e.target).removeClass("hover");
            this._raiseEvent(e, "click");
        },

        _raiseEvent: function (e, _type) {
                this._trigger(_type, { value: $(e.target).html(), url: $(e.target).attr('href'), eventType: _type });
        },
        /**
        * Section for calculate Font Size
        * @private
        */
        _calculateFontSize: function (frequency) {
            if (frequency) {
                var C = 2, k, fontRange, fontSize,
                minSize = parseInt(this.model.minFontSize, 10), maxSize = parseInt(this.model.maxFontSize, 10);
                k = (frequency - this.minFreq) / (this.maxFreq - this.minFreq);
                fontRange = maxSize - minSize;
                fontSize = minSize + (C * Math.floor(k * (fontRange / C)));
                return fontSize;
            }
            else return this.model.minFontSize;
        }
    });
    /**
	 * Enum for various format	 
	 * @enum {string}
	 * @global 
	 */
    ej.Format = {
        /**  Render the tagCloud items in cloud format */
        Cloud: "cloud",
        /**  Render the tagCloud items in list format */
        List: "list"
    };
})(jQuery, Syncfusion);;
/**
* @fileOverview Plugin to style the Html div elements
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
    * @class ejTreeView
    * @param {object} options - settings for TreeView.
    * @requires jQuery
    * @requires jquery.easing.1.3.js
    * @requires ej.core.js
    * @requires ej.treeview.js
    * @requires ej.data.js
    * @requires ej.checkbox.js
    * @requires ej.waitingpopup.js
    * @requires ej.draggable.js
    * @classdesc Custom Design for Html div control.
    * @example 
    * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
    * // Create TreeView
    * $('#treeView').ejTreeView(); 	
    * &lt;/script&gt;
    */
    ej.widget("ejTreeView", "ej.TreeView", {
        _rootCSS: "e-treeview",
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["ul", "div"],
        _setFirst: false,

        // default model
        defaults: {
             /**		
			* This API to enable the checkbox for all nodes. 
			* @default false
			* @type {boolean}
			* @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;        
					
		* //To Initialize the TreeView with the showCheckbox value specified.
            * $("#treeView").ejTreeView({ showCheckbox: true });
          *  &lt;/script&gt;
			* @memberof ejTreeView
			* @instance
			*/
            showCheckbox: false,
			enableAnimation: true,
            /**		
			* To enable the drag and drop nodes. 
			* @default false
			* @type {boolean}
			* @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
				
			* //To Initialize the TreeView with the allowDragAndDrop value specified.
            * $("#treeView").ejTreeView({ allowDragAndDrop: true });
            *  &lt;/script&gt;
			* @memberof ejTreeView
			* @instance
			*/
            allowDragAndDrop: false,
            /**		
			* Allow to drop the child node for dragging node. 
			* @default false
			* @type {boolean}
			* @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
			
			* // Initialize the TreeView with the allowDropChild value specified.
            * $("#treeView").ejTreeView({ allowDropChild: true });
            *  &lt;/script&gt;
			* @memberof ejTreeview
			* @instance
			*/
            allowDropChild: true,
                /**		
			* Allow to drop the root node for dragging node. 
			* @default false
			* @type {boolean}
			* @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
			* // Initialize the TreeView with the dropSibling value specified.
            * $("#treeView").ejTreeView({ allowDropSibling: true });
            *  &lt;/script&gt;
			* @memberof ejTreeView
			* @instance
			*/
            allowDropSibling: true,
 /**		
			* Allow to drag the node out of the controls, like one TreeView to another.
			* @default false
			* @type {boolean}
			* @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
					
			* // Initialize the TreeView with the dragAndDropAcrossControl value specified.
            * $("#treeView").ejTreeView({ dragAndDropAcrossControl: true });
            *  &lt;/script&gt;
			* @memberof ejTreeView
			* @instance
			*/
            allowDragAndDropAcrossControl: true,
             /**		
			* Allow to user can edit the node text.
			* @default false
			* @type {boolean}
			* @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
					
			* // Initialize the TreeView with the allowEditing value specified.
            * $("#treeView").ejTreeView({ allowEditing: true });
            *  &lt;/script&gt;
			* @memberof ejTreeView
			* @instance
			*/
            allowEditing: false,
            /**		
			* Enable the keyboard interaction with TreeView nodes.
			* @default false
			* @type {boolean}
			* @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
					
			* // Initialize the TreeView with the allowKeyboardNavigation value specified.
            * $("#treeView").ejTreeView({ allowKeyboardNavigation: true });
            *  &lt;/script&gt;
			* @memberof ejTreeView
			* @instance
			*/
            allowKeyboardNavigation: true,
                /**		
             * Items API have id, text, spriteCssClass,expanded, childItems ,selected ,linkAttribute ,value, imageAttribute, htmlAttribute,imageUrl. 
             * @default null
             * @type {object}
             * @example 
             * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            	
              * //To set items API value during initialization  
             *  $("#treeView").ejTreeView({items: { id: "Home",text: "Home"}});
             *  &lt;/script&gt;
             * @memberof ejTreeView
             * @instance
             */
            items: null, //id, text, spriteCssClass,expanded, childItems ,selected ,linkAttribute ,value, imageAttribute, htmlAttribute,imageUrl
            /**		
             * Fields API have dataSource, query, tableName and mapper fields. In dataSource, we can pass the JSON data object or Essential Datamanager objects.  query; it have ej.Query() object. tableName; It have data get form given table name. mapper fields;  columns of a table can be mapped to the TreeView properties, namely id, parentId, text, spriteCssClass,expanded, childItems, hasChild, selected, linkAttribute , imageAttribute, htmlAttribute, imageUrl, isChecked.
             * @default null
             * @type {object}
             * @example 
             *&lt;div id="treeView"&gt;&lt;/div&gt;
             *&lt;script&gt;

            * //To set fields API value during initialization  
             *   $("#treeView").ejTreeView(
            *{
             *  fields: { id: "id", parentId: "pid", text: "name", hasChild: "hasChild", dataSource: window.treeView, expanded: "expanded" }
            *}
            *);
             *  &lt;/script&gt;
             * @memberof ejTreeView
             * @instance
             */
            fields: /** @lends ejTreeView# */{
				/**		
                 * datasource receives  Essential DataManager object and JSON object. 
				 * @alias ejTreeView#fields->dataSource
				 * @type Object
                 */
                dataSource: null,
				/**		
                 * It receives query to retrieve data from the table (query is same as SQL). 
				 * @alias ejTreeView#fields->query
				 * @type Object
				 * @example:  ej.Query().from("Categories").select("CategoryID,CategoryName").take(3);
                 */
                query: null,
				/**		
                 * It receives table name to execute query on the corresponding table.
				 * @alias ejTreeView#fields->tableName
				 * @type String
                 */
                tableName: null,
				/**		
                 * If a parent have child node to pass the same mapper for child.
				 * @alias ejTreeView#fields->child
				 * @type String
                 */
                child: null,
				/**		
                 * Specifies the id to TreeView node items list.
				 * @alias ejTreeView#fields->id
				 * @type String
                 */
                id: "id",
				/**		
                 * Specifies the parent id of the table.
				 * @alias ejTreeView#fields->parentId
				 * @type String
                 */
                parentId: "parentId",
				/**		
                 * Specifies the text of TreeView node items list.
				 * @alias ejTreeView#fields->text
				 * @type String
                 */
                text: "text",
				/**		
                 * Specifies the sprite CSS class to “li” item list.
				 * @alias ejTreeView#fields->spriteCssClass
				 * @type String
                 */
                spriteCssClass: "spriteCssClass",
				/**		
                 *  if it’s true the corresponding node will expand
				 * @alias ejTreeView#fields->expanded
				 * @type Boolean
                 */
                expanded: "expanded",
				/**		
                 * A parent node have child, we must set this value as true.
				 * @alias ejTreeView#fields->hasChild
				 * @type Boolean
                 */
                hasChild: "hasChild",
				/**		
                 * a TreeView control has only one node selected at time.Used to select the node at initial
				 * @alias ejTreeView#fields->selected
				 * @type Boolean
                 */
                selected: "selected",
				/**		
                 * Specifies the link attribute to “a” tag in item list.
				 * @alias ejTreeView#fields->linkAttribute
				 * @type String
                 */
                linkAttribute: "linkAttribute",
				/**		
                 * Specifies the value of the treeview node items.
				 * @alias ejTreeView#fields->value
				 * @type String
                 */
                value: "value",
				/**		
                 * Specifies the image attribute to “img” tag inside items list 
				 * @alias ejTreeView#fields->imageAttribute
				 * @type String
                 */
                imageAttribute: "imageAttribute",
				/**		
                 * Specifies the html attributes to “li” item list.
				 * @alias ejTreeView#fields->htmlAttribute
				 * @type Object
                 */
                htmlAttribute: "htmlAttribute",
				/**		
                 * Specifies the html attributes to “li” item list.
				 * @alias ejTreeView#fields->imageUrl
				 * @type String
                 */
                imageUrl: "imageUrl",
				/**		
                 * if its true Checkbox node will be checked when rendered with checkbox.
				 * @alias ejTreeView#fields->isChecked
				 * @type Boolean
                 */
                isChecked: "isChecked"
            }, //null, //id, parentId, text, spriteCssClass,expanded, childItems, hasChild, selected, linkAttribute ,value, imageAttribute, htmlAttribute, imageUrl, isChecked, tableName
            /**		
			* Allow to check the parent node automatically if this property is enabled.
			* @default false
			* @type {boolean}
			* @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
					
			* // Initialize the TreeView with the autoCheckParentNode value specified.
            * $("#treeView").ejTreeView({ autoCheckParentNode: false, showCheckbox:true });
            *  &lt;/script&gt;
			* @memberof ejTreeView
			* @instance
			*/
            autoCheckParentNode: false,
            /**		
			* Child node loaded on demand, while expand the parent node at the time the entire child loaded.
			* @default false
			* @type {boolean}
			* @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
			
		* // Initialize the TreeView with the loadOnDemand value specified.
            * $("#treeView").ejTreeView({ loadOnDemand: true });
            *  &lt;/script&gt;
			* @memberof ejTreeView
			* @instance
			*/
            loadOnDemand: false,
                        /**		
            * Sets the root class for TreeView theme. This cssClass API helps to use custom skinning option for TreeView control. By defining the root class using this API, we need to include this root class in CSS.
            * @default "gradient-lime"
            * @type {string}
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *          &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //Initialize the TreeView with the cssClass value specified
            *   $("#treeView").ejTreeView({ cssClass: 'gradient-lime'});
            *  &lt;/script&gt;
            * @memberof ejTreeView
            * @instance
            */ 
            cssClass: "",
             /**  
            * We can customize the node our own style.
            * @default null
            * @type {string}
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;&lt;a class="uk-style"&gt;UK&lt;/a&gt;
    *            &lt;ul&gt;
 *    &lt;li&gt;
    *                &lt;div class="cont-list"&gt;
    *                    &lt;img src="styles/images/treeview/template-image-1.png"/&gt;
    *                        &lt;div class="cont-del"&gt;&lt;/div&gt;
    *                        &lt;div class="cont-details"&gt;&lt;/div&gt;
    *                        &lt;b&gt;Steven John&lt;/b&gt;&lt;br/&gt;
    *                        &lt;span&gt;London&lt;/span&gt;&lt;br/&gt;
    *                        &lt;span&gt;555-5665-2323&lt;/span&gt;
    *                    &lt;/div&gt;
 *  &lt;div class="treeFooter"&gt;&lt;/div&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;&lt;a class=""usa-style""&gt;USA&lt;/a&gt;
   *            &lt;ul&gt;
 *    &lt;li&gt;
    *                &lt;div class="cont-list"&gt;
    *                    &lt;img src="styles/images/treeview/template-image-2.png"/&gt;
    *                        &lt;div class="cont-del"&gt;&lt;/div&gt;
    *                        &lt;div class="cont-details"&gt;&lt;/div&gt;
    *                        &lt;b&gt;Andrew&lt;/b&gt;&lt;br/&gt;
    *                        &lt;span&gt;Capital way&lt;/span&gt;&lt;br/&gt;
    *                        &lt;span&gt;934-8374-2455&lt;/span&gt;
    *                    &lt;/div&gt;
 *  &lt;div class="treeFooter"&gt;&lt;/div&gt;
    *                &lt;/li&gt;
 *                &lt;li&gt;
    *                &lt;div class="cont-list"&gt;
    *                    &lt;img src="styles/images/treeview/template-image-3.png"/&gt;
    *                        &lt;div class="cont-del"&gt;&lt;/div&gt;
    *                        &lt;div class="cont-details"&gt;&lt;/div&gt;
    *                        &lt;b&gt;Angelica&lt;/b&gt;&lt;br/&gt;
    *                        &lt;span&gt;Dayton&lt;/span&gt;&lt;br/&gt;
    *                        &lt;span&gt;988-4243-0806&lt;/span&gt;
    *                    &lt;/div&gt;
 *  &lt;div class="treeFooter"&gt;&lt;/div&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
           * //Initialize the TreeView with the template value specified
            *   $("#treeView").ejTreeView({ template: "templatelocaldata"});
            *  &lt;/script&gt;
            * @memberof ejTreeView
            * @instance
            */
            template: null,
                       /**		
			* Display Right to Left direction for node text.
			* @default false
			* @type {boolean}
			* @example 
			* &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
			* // Initialize the TreeView with the rtl value specified.
            * $("#treeView").ejTreeView({ enableRTL: true });
            *  &lt;/script&gt;
			* @memberof ejTreeView
			* @instance
			*/
            enableRTL: false,
              /**		
            * Node expanded on specified events
            * @default "gradient-lime"
            * @type {string}
            * @example 
           * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;	
            * //Initialize the TreeView with the expandOn value specified
            *   $("#treeView").ejTreeView({ expandOn: 'dblclick'});
            *  &lt;/script&gt;
            * @memberof ejTreeView
            * @instance
            */
            expandOn: "dblclick",
            /**		
			* Save current model value to browser cookies for state maintains. While refresh the TreeView control page the model value apply from browser cookies and HTML5 local storage.  
			* @default false
			* @type {boolean}
			* @example 
			  * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
			* // Initialize the TreeView with the persist value specified.
            * $("#treeView").ejTreeView({ enablePersistence: true });
            *  &lt;/script&gt;
			* @memberof ejTreeView
			* @instance
			*/
            enablePersistence: false,
 /**		
            * Allow to check the parent node automatically if this property is enabled.
            * @default false
            * @type {boolean}
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;	
            * // Initialize the TreeView with the enabled value specified.
            * $("#treeView").ejTreeView({ enabled: true,showCheckbox:true });
            *  &lt;/script&gt;
            * @memberof ejTreeView
            * @instance
            */
            enabled: true,
             /**		
            * Expanded nodes index collection given to integer array
            * @default []
            * @type {array}
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;		
            * // Initialize the TreeView with the expandedNodes value specified.
            * $("#treeView").ejTreeView({ expandedNodes: [0,7]  });
            *  &lt;/script&gt;
            * @memberof ejTreeView
            * @instance
            */
            expandedNodes: [],
            /**		
            * Checked nodes index collection given to integer array
            * @default []
            * @type {array}
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;		
            * // Initialize the TreeView with the checkedNodes value specified.
            * $("#treeView").ejTreeView({ showCheckbox: true, checkedNodes: [1, 2] });
            *  &lt;/script&gt;
            * @memberof ejTreeView
            * @instance
            */
            checkedNodes: [],
            /**		
            * Defines the width of the TreeView.
            * @default Null
            * @type {string | number}
            * @example 
           * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
           * //Initialize the TreeView height property with the  value specified
            *   $("#treeView").ejTreeView({ width: 300 });
            *  &lt;/script&gt;
            * @memberof ejTreeView
            * @instance
            */
            width: null,
           /**		
            * Defines the height of the TreeView.
            * @default Null
            * @type {string | number}
            * @example 
           * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;			
            * //Initialize the TreeView height property with the  value specified
            *   $("#treeView").ejTreeView({ height: 50 });
            *  &lt;/script&gt;
            * @memberof ejTreeView
            * @instance
            */
            height: null,
           /**     
            * Fires when nodeClick successfully.
            * @event
            * @name ejTreeView#nodeClick 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {object}  argument.event returns the event object
			* @param {object}  argument.currentElement returns the current element of the node clicked
			* @param {object}  argument.target returns the current element target
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create click event for ejTreeView
            * $("#treeView").ejTreeView({ 
            *   	nodeClick: function(args) {}
            * });    
            *  &lt;/script&gt;  
            * @memberof ejTreeView
            * @instance
            */
            nodeClick: null,
            /**     
            * Fires when beforeExpand successfully.
            * @event
            * @name ejTreeView#beforeExpand 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {string}  argument.value returns the value of the node
			* @param {boolean}  argument.isChildLoaded if the child node is ready to expanded state; otherwise, false.
			* @param {object}  argument.currentElement returns the current element of the node clicked
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create beforeExpand event for ejTreeView
            * $("#treeView").ejTreeView({ 
            *   	beforeExpand: function(args) {}
            * });     
            *  &lt;/script&gt; 
            * @memberof ejTreeView
            * @instance
            */
            beforeExpand: null,
           /**     
            * Fires when nodeExpand successfully.
            * @event
            * @name ejTreeView#nodeExpand 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {string}  argument.value returns the value of the node
			* @param {boolean}  argument.isChildLoaded if the child node is ready to expanded state; otherwise, false.
			* @param {object}  argument.currentElement returns the current element of the node clicked
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create expand event for ejTreeView
            * $("#treeView").ejTreeView({ 
            *   	nodeExpand: function(args) {}
            * });      
            *  &lt;/script&gt;
            * @memberof ejTreeView
            * @instance
            */
            nodeExpand: null,
 /**     
            * Fires when beforeCollapse successfully.
            * @event
            * @name ejTreeView#beforeCollapse 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {string}  argument.value returns the value of the node			
			* @param {object}  argument.currentElement returns the current element of the node clicked
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create beforeCollapse event for ejTreeView
            * $("#treeView").ejTreeView({ 
            *   	beforeCollapse: function(args) {}
            * }); 
            *  &lt;/script&gt;     
            * @memberof ejTreeView
            * @instance
            */
            beforeCollapse: null,
           /**     
            * Fires when nodeCollapse successfully.
            * @event
            * @name ejTreeView#nodeCollapse 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {string}  argument.value returns the value of the node			
			* @param {object}  argument.currentElement returns the current element of the node clicked
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create nodeCollapse event for ejTreeView
            * $("#treeView").ejTreeView({ 
            *   	nodeCollapse: function(args) {}
            * }); 
            *  &lt;/script&gt;     
            * @memberof ejTreeView
            * @instance
            */
            nodeCollapse: null,
             /**     
            * Fires when nodeSelect successfully.
            * @event
            * @name ejTreeView#nodeSelect 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {string}  argument.value returns the value of the node			
			* @param {object}  argument.currentElement returns the current element of the node clicked
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create select event for ejTreeView
            * $("#treeView").ejTreeView({ 
            *   	nodeSelect: function(args) {}
            * });   
            *  &lt;/script&gt;   
            * @memberof ejTreeView
            * @instance
            */
            nodeSelect: null,
             /**     
            * Fires when nodeCheck successfully.
            * @event
            * @name ejTreeView#nodeCheck 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {object}  argument.event returns the event object
			* @param {string}  argument.value returns the value of the node			
			* @param {object}  argument.currentElement returns the current element of the node clicked
			* @param {boolean}  argument.isChecked it returns true when the node checkbox is checked; otherwise, false.
            * @example
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt; 
            * //To create select event for ejTreeView
            * $("#treeView").ejTreeView({ 
                showCheckbox:true,
            *   	nodeCheck: function(args) {}
            * }); 
            *  &lt;/script&gt;     
            * @memberof ejTreeView
            * @instance
            */
            nodeCheck: null,
           /**     
            * Fires when nodeUncheck successfully.
            * @event
            * @name ejTreeView#nodeUncheck 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {object}  argument.event returns the event object
			* @param {string}  argument.value returns the value of the node			
			* @param {object}  argument.currentElement returns the current element of the node clicked
			* @param {boolean}  argument.isChecked it returns true when the node checkbox is checked; otherwise, false.
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create nodeUncheck event for ejTreeView
            * $("#treeView").ejTreeView({ 
                showCheckbox:true,
            *   	nodeUncheck: function(args) {}
            * });   
            *  &lt;/script&gt;   
            * @memberof ejTreeView
            * @instance
            */
            nodeUncheck: null,
            /**     
            * Fires when inlineEditValidation successfully.
            * @event
            * @name ejTreeView#inlineEditValidation 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {string}  argument.newText returns the new entered text for the node
            * @param {object}  argument.nodeId returns the current node element id
            * @param {string}  argument.oldText returns the old node text
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create inlineEditValidation event for ejTreeView
            * $("#treeView").ejTreeView({ 
            *   	inlineEditValidation: function(args) {}
            * });  
            *  &lt;/script&gt;    
            * @memberof ejTreeView
            * @instance
            */
            inlineEditValidation: null,
          /**     
            * Fires when beforeEdit successfully.
            * @event
            * @name ejTreeView#beforeEdit 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {object}  argument.currentElement returns the current element of the node clicked
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create beforeEdit event for ejTreeView
            * $("#treeView").ejTreeView({ 
            *   	beforeEdit: function(args) {}
            * }); 
            *  &lt;/script&gt;     
            * @memberof ejTreeView
            * @instance
            */
            beforeEdit: null,
           /**     
            * Fires when keyPress successfully.
            * @event
            * @name ejTreeView#keyPress 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {object}  argument.event returns the event object
			* @param {object}  argument.currentElement returns the current element of the node clicked
			* @param {string}  argument.value returns the value of the node
			* @param {string}  argument.path returns node path from root element
			* @param {number}  argument.keyCode returns the keypressed keycode value
			* @param {boolean}  argument.isExpanded it returns when the current node is in expanded state; otherwise, false.
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create keyPress event for ejTreeView
            * $("#treeView").ejTreeView({ 
            *   	keyPress: function(args) {}
            * });     
            *  &lt;/script&gt; 
            * @memberof ejTreeView
            * @instance
            */
            keyPress: null,
              /**     
            * Fires when nodeDragStart successfully.
            * @event
            * @name ejTreeView#nodeDragStart 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {object}  argument.target returns the current element target
			* @param {object}  argument.event returns the event object
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //nodeDragStart event for ejTreeView
            * $("#treeView").ejTreeView({ 
            *   	nodeDragStart: function(args) {}
            * });  
            *  &lt;/script&gt;    
            * @memberof ejTreeView
            * @instance
            */
            nodeDragStart: null,
             /**     
            * Fires when nodeDrag successfully.
            * @event
            * @name ejTreeView#nodeDrag 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {object}  argument.target returns the current element target
			* @param {object}  argument.event returns the event object
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create nodeDrag event for ejTreeView
            * $("#treeView").ejTreeView({ 
            *   	nodeDrag: function(args) {}
            * });      
            *  &lt;/script&gt;
            * @memberof ejTreeView
            * @instance
            */
            nodeDrag: null,
                        /**     
            * Fires when nodeDragStop successfully.
            * @event
            * @name ejTreeView#nodeDragStop 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {object}  argument.target returns the current element target
			* @param {object}  argument.event returns the event object
			* @param {string}  argument.position returns the element new dragged place from its original place.
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create nodeDragStop event for ejTreeView
            * $("#treeView").ejTreeView({ 
            *   	nodeDragStop: function(args) {}
            * });  
            *  &lt;/script&gt;    
            * @memberof ejTreeView
            * @instance
            */
            nodeDragStop: null,
           /**     
            * Fires when nodeDropped successfully.
            * @event
            * @name ejTreeView#nodeDropped 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
			* @param {object}  argument.target returns the current element target
			* @param {object}  argument.event returns the event object
			* @param {object}  argument.dropedElement returns the event object
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create nodeDropped event for ejTreeView
            * $("#treeView").ejTreeView({ 
            *   	nodeDropped: function(args) {}
            * });  
            *  &lt;/script&gt;    
            * @memberof ejTreeView
            * @instance
            */
            nodeDropped: null,
                   /**     
            * Fires when created successfully.
            * @event
            * @name ejTreeView#created  
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create node for ejTreeView
            * $("#treeView").ejTreeView({ 
            *       create: function(args) {}
            * });
            *  &lt;/script&gt;      
            * @memberof ejTreeView
            * @instance
            */
            create: null,
            /**     
            * Fires when destroyed successfully.
            * @event
            * @name ejTreeView#destroyed  
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the TreeView model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;ul id="treeView"&gt;
    *        &lt;li&gt;Artwork
    *            &lt;ul&gt;
    *                &lt;li&gt;Abstract
    *                    &lt;ul&gt;
    *                        &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
    *                        &lt;li&gt;Creative Acrylic&lt;/li&gt;
    *                        &lt;li&gt;Modern Painting&lt;/li&gt;
    *                        &lt;li&gt;Canvas Art&lt;/li&gt;
    *                        &lt;li&gt;Black white&lt;/li&gt;
    *                    &lt;/ul&gt;
    *                &lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Books
    *            &lt;ul&gt;
    *                &lt;li&gt;Entertaining&lt;/li&gt;
    *                &lt;li&gt;Design&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *        &lt;li&gt;Music
    *            &lt;ul&gt;
    *                &lt;li&gt;Mass&lt;/li&gt;
    *                &lt;li&gt;Folk&lt;/li&gt;
    *            &lt;/ul&gt;
    *        &lt;/li&gt;
    *    &lt;/ul&gt;
    * <br> 
    * &lt;script&gt;
            * //To create destroy event for ejTreeView
            * $("#treeView").ejTreeView({ 
            *       destroy: function(args) {}
            * }); 
            *  &lt;/script&gt;     
            * @memberof ejTreeView
            * @instance
            */
            destroy: null
            
        },
        /**
        * Specify the data types for default properties 
        * @private
        */
        dataTypes: {
            showCheckbox: "boolean",
			enableAnimation: "boolean",
            allowDragAndDrop: "boolean",
            allowDropChild: "boolean",
            allowDragAndDropAcrossControl: "boolean",
            allowEditing: "boolean",
            allowKeyboardNavigation: "boolean",
            autoCheckParentNode: "boolean",
            loadOnDemand: "boolean",
            enableRTL: "boolean",
            expandOn: "string",
            enablePersistence: "boolean",
            items: "data",
            fields: {
                dataSource: "data",
                query: "data",
                child: "data"
            },
            expandedNodes: "array",
            checkedNodes: "array"
        },
        /**
         * To configure the properties at runtime using SetModel		
		 * @private
         */
        _setModel: function (options) {
            /// <summary>This function is used to set the Treeview model</summary>
            if (!this.model.enabled && ej.isNullOrUndefined(options["enabled"])) return false;
            for (var key in options) {
                switch (key) {
                    case "cssClass": this._changeSkin(options[key]); break;
                    case "fields":
                        this._unWireEvents();
                        var f = this.element.hasClass("e-js") ? false : true, element = f ? this.element.children("ul") : this.element;
                        element.empty();
                        $.extend(this.model.fields, options[key]);
                        this._checkDataBinding();
                        if (f) {
                            var tempUl = this.element.children(".e-treeview-ul");
                            element.append(tempUl.children());
                            tempUl.remove();
                        }
                        break;
                    case "allowDragAndDropAcrossControl":
                        {
                            this.model.allowDragAndDropAcrossControl = options[key];
                            this._enableDargDrop();
                            break;
                        }
                    case "enabled": this._enabledAction(options[key]); break;
                    case "showCheckbox": {
                        if (options[key]) {
                            this.model.showCheckbox = options[key];
                            this._showCheckBox();
                        } else {
                            this.element.find('span.e-chkbox-wrap').next().remove();
                            this.element.find('span.e-chkbox-wrap').remove();
                        }
                        break;
                    }
					case "enableAnimation":{
							this.model.enableAnimation=options[key];
							break;
					}
                    case "expandedNodes": {
                        this._collapseAll();
                        this.model.expandedNodes = [];
                        for (var i = 0; i < options[key].length; i++) {
                            this._expandNode(this._liList[options[key][i]]);
                        }
                        break;
                    }
                    case "checkedNodes": {
                        if (this.model.showCheckbox) {
                            this._unCheckAll();
                            this.model.checkedNodes = [];
                            for (var j = 0; j < options[key].length; j++) {
                                var node = this._liList[options[key][j]];
                                this._nodeCheckedAction($(node).find("span.e-chkbox-wrap").first());
                            }
                        }
                        break;
                    }
                    case "expandOn": {
                        this._on(this.element, options[key], this._expandEventHandler);
                        break;
                    }
                    case "allowEditing": {
                        if (options[key]){
                            this._enableAllowEdit();
							this._allowEditable();
							}
                        else {
                            this._disableAllowEdit();
							this._preventEditable();
                        }
                        break;
                    }
                    case "allowKeyboardNavigation": {
                        if (options[key])
                            this._on(this.element,'keydown', this._KeyPress);
                        else
                            this._off(this.element,'keydown', this._KeyPress);
                        break;
                    }
                    case "allowDragAndDrop":
                        {
                            if (options[key])
                                this._enableDargDrop();
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
                    case "height":
                        {
                            this.element.height(options[key]);
                            break;
                        }
                    case "width":
                        {
                            this.element.width(options[key]);
                            break;
                        }
                }
            }
        },

        // all events bound using this._on will be unbind automatically
        _destroy: function () {
            this.element.html("");
            this.element.parent().append(this._cloneElement);
            this.element.remove();
            this.element = this._cloneElement;
            this.element.removeClass("e-treeview e-widget");
        },

        // constructor function
        _init: function () {
          
            this._id = this.element.prop("id");
            if (this.model.items != null) {
                var main = this._renderTemplate(this.model.items);
                this.element.append(main);
            }
            if (!ej.isNullOrUndefined(this.model.fields) && this.model.fields["dataSource"] != null) {
                this._checkDataBinding();
            } else
                this.initialize();
	
        },

        initialize: function () {
            this._cloneElement = $(this.element).clone();
            this._cutCopyNodeText = null;
            this.beforeEditText = null;
            if (this.element.is("ul")) {
                this._createWrapper();
            }
            else {
                this.element.addClass("e-treeview-wrap e-widget");
                if (this.model.width != null) {
                    this.element.width(this.model.width);
                }
                if (this.model.height != null) {
                    this.element.height(this.model.height);
                }
                if (this.model.enableRTL)
                    this.element.addClass("e-rtl");
            }
            this.element.attr("role", "tree").attr("aria-activedescendant", this._id + "_active");
            this._ulList = $("ul", this.element);
            this._liList = $("li", this.element).attr("tabindex", -1);
            this._addBaseClass();
            this._controlRender();
            this._addDragableClass();
            this._finalize();
            this._enabledAction(this.model.enabled);
        },

        _createWrapper: function () {
            var mainWidget = ej.buildTag("div.e-treeview-wrap e-widget " + this.model.cssClass, "", "", { tabindex: 0 });
            !ej.isNullOrUndefined(this.element.attr("accesskey")) && mainWidget.attr("accesskey", this.element.attr("accesskey"));
            if (this.model.width != null) {
                mainWidget.width(this.model.width);
            }
            if (this.model.height != null) {
                mainWidget.height(this.model.height);
            }
            if (this.model.enableRTL)
                mainWidget.addClass("e-rtl");
            mainWidget.insertAfter(this.element);
            mainWidget.append(this.element.addClass("e-ul"));
            this.element = mainWidget;
        },
        //Skin Change at run time
        _changeSkin: function (skin) {
            if (this.model.cssClass != skin) {
                this.element.removeClass(this.model.cssClass).addClass(skin);
            }
        },
        //Enable avtion chnaged.
        _enabledAction: function (flag) {
            if (flag) {
                this.element.removeClass("e-disable");
                this._wireEvents();
            }
            else{
                this.element.addClass("e-disable");
                this._unWireEvents();
            }
        },

        // data source checking
        _checkDataBinding: function () {
            if (this.model.fields["dataSource"] instanceof ej.DataManager) {
                this._initDataSource();
            } else {
                this._ensureDataSource(this.model.fields["dataSource"]);
                this.initialize();
            }
        },

        _initDataSource: function () {
            this.element.ejWaitingPopup();
            var waitingPopup = this.element.ejWaitingPopup("instance");
            this.element.ejWaitingPopup("refresh");
            this.element.ejWaitingPopup("show");
            var query = this._columnToSelect(this.model.fields);
            var proxy = this;
            var queryPromise = this.model.fields["dataSource"].executeQuery(query);
            queryPromise.done(function (e) {
                proxy.element.ejWaitingPopup("hide");
                proxy.retriveData = e.result;
                proxy._ensureDataSource(e.result);
                proxy.initialize();
            });
        },

        //query check and create select based on the mapperField.

        _columnToSelect: function (mapper) {
            var column = [], queryManager = ej.Query();
            if (ej.isNullOrUndefined(mapper.query)) {
                for (var col in mapper) {
                    if (col !== "tableName" && col !== "child" && col !== "dataSource")
                        column.push(mapper[col]);
                }
                if (column.length > 0)
                    queryManager.select(column);
                if (!this.model.fields["dataSource"].dataSource.url.match(mapper.tableName + "$"))
                    !ej.isNullOrUndefined(mapper.tableName) && queryManager.from(mapper.tableName);
            }
            else
                queryManager = mapper.query;
            return queryManager;
        },

        // data source checking
        _ensureDataSource: function (dataSource) {
            this.currentSelectedData = dataSource;
            this.element.append(this._renderTemplate(dataSource));
        },

        //Render Treeview from template.

        _renderTemplate: function (item) {
            var ulTag = ej.buildTag("ul"), subItem = "";
            this._odataFlag = false;
            this._hasSelected = [];
            for (i = 0; i < item.length; i++) {
                if (item[i][this.model.fields.selected])
                    this._hasSelected = item[i][this.model.fields.id];
            }
            for (var i = 0; i < item.length; i++) {
                if (this.model.fields["dataSource"] != null) {
                    if (ej.isNullOrUndefined(item[i][this.model.fields.parentId]) || item[i][this.model.fields.parentId] == 0)
                        subItem = this._tempalteSub(item[i], item, this.model.fields);
                } else
                    subItem = this._tempalteSub(item[i], item, this.model.fields);
                ulTag.append(subItem);
            }
            return ulTag;
        },
        _tempalteSub: function (item, dataSource, mapper) {
            var liTag, spanTag, imgTag, aTag, childItems, ulTag, loadFlag = false;//, mapper = this.model.mapperField;
            if (this.model.fields["dataSource"] != null)
                if (this.model.loadOnDemand && item[mapper.hasChild]) {
                    childItems = ej.DataManager(this.currentSelectedData).executeLocal(ej.Query().where(mapper.parentId, ej.FilterOperators.equal, item[mapper.id]));
                    ulTag = $("<ul></ul>");
                    loadFlag = true;
                } else if (!ej.isNullOrUndefined(mapper.parentId))
                    childItems = ej.DataManager(this.currentSelectedData).executeLocal(ej.Query().where(mapper.parentId, ej.FilterOperators.equal, item[mapper.id]));
                else
                    childItems = item[mapper.childItems];
            if (ej.isNullOrUndefined(this.model.template)) {
                liTag = $('<li></li>');
                if (item[mapper.id])
                    liTag.prop("id", item[mapper.id]);
                if (item[mapper.htmlAttribute]) this._setAttributes(item[mapper.htmlAttribute], liTag);
                if (item[mapper.imageUrl]) {
                    imgTag = ej.buildTag('img.e-align');
                    imgTag.attr('src', item[mapper.imageUrl]);
                    if (item[mapper.imageAttribute]) this._setAttributes(item[mapper.imageAttribute], imgTag);
                    liTag.append(imgTag);
                }
                else if (item[mapper.spriteCssClass]) {
                    spanTag = ej.buildTag('span.' + item[mapper.spriteCssClass]);
                    liTag.append(spanTag);
                }
                if (item[mapper.text] != "") {
                    aTag = ej.buildTag('a', item[mapper.text], "", { href: "#" });
                    if (item[mapper.linkAttribute])
                        aTag.attr('href', item[mapper.linkAttribute]);
                    liTag.append(aTag);
                }
            }
            else {
                var divEle = $("<div></div>");
                divEle.append($("#" + this.model.template).render(item));
                liTag = divEle.find("li");
            }
            this._hasExpanded = false;
            if (item[mapper.expanded]) {
                liTag.addClass("expanded");
                this._hasExpanded = true;
            }
            item[mapper.isChecked] && liTag.addClass("ischecked");
            if (item[mapper.id] == this._hasSelected)
                aTag.addClass("e-text CanSelect e-active");
            if (loadFlag)
                liTag.append(ulTag);

            if (!ej.isNullOrUndefined(mapper["child"]) && !this.model.loadOnDemand) {
                this._odataFlag = true;
                if (mapper["child"]["dataSource"] instanceof ej.DataManager) {
                    var proxy = this, queryManager = ej.Query();
                    queryManager = this._columnToSelect(mapper["child"]);
                    queryManager.where(mapper["child"]["parentId"], ej.FilterOperators.equal, item[mapper.id]);
                    var queryPromise = mapper["child"]["dataSource"].executeQuery(queryManager);
                    queryPromise.done(function (e) {
                        childItems = e.result;
                        if (childItems && childItems.length > 0) {
                            proxy._createSubNodesWhenLoadOnDemand(childItems, liTag, mapper["child"]);
                            $(liTag).find(" >div >div").first().addClass("e-icon e-plus");
                        }
                    });
                }
                else {
                    var childItems = ej.DataManager(mapper["child"]["dataSource"]).executeLocal(ej.Query().where(mapper["child"]["parentId"], ej.FilterOperators.equal, item[mapper.id]));
                    if (childItems && childItems.length > 0) {
                        var ul = $(document.createElement('ul'));
                        for (var i = 0; i < childItems.length; i++) {
                            var liItem = this._tempalteSub(childItems[i], mapper["child"]["dataSource"], mapper["child"]);
                            ul.append(liItem);
                        }
                        liTag.append(ul);
                    }
                }
            }
            else if (this.model.loadOnDemand) {
                if (childItems && childItems.length > 0 && this._hasExpanded) {
                        for (var i = 0; i < childItems.length; i++) {
                            var liItem = this._tempalteSub(childItems[i], dataSource, mapper);
                            ulTag.append(liItem);
                        }
                        this._hasExpanded = false;
                        liTag.append(ulTag);
                }
            }
            else if (!this._odataFlag) {
                if (childItems && childItems.length > 0) {
                    var ul = ej.buildTag('ul');
                    for (var i = 0; i < childItems.length; i++) {
                        var liItem = this._tempalteSub(childItems[i], dataSource, mapper);
                        ul.append(liItem);
                    }
                    liTag.append(ul);
                }
            }
            return liTag;
        },
        _setAttributes: function (data, element) {
            for (var key in data) {
                element.attr(key, data[key]);
            }
        },
        _addDragableClass: function () {
            if (this.model.allowDragAndDrop) {
                this._anchors = this._liList.map(function () {
                    return $("a", this)[0];
                });
                this._anchors.addClass("e-draggable e-droppable");
            }
        },
        _addBaseClass: function () {
            this._ulList.addClass("e-treeview-ul").attr("role", "group");
            this._liList.addClass("e-item").attr("role", "treeitem");
            this.element.find("ul").first().removeClass("e-treeview-ul");
        },
        //Applies the autoformat
        _controlRender: function () {
            if (this.element != null) {
                var element = this.element.find("> ul");
                var licoll = element.find('li');
                var nodecount = -1;
                for (var i = 0; i < licoll.length; i++) {
                    var listEl = $(licoll[i]);
                    var textElement;
                    var customElement;
                    var nodeText;
                    //Check for sub-tree view items.Take back up and remove them
                    var subItems = listEl.children('ul')[0];
                    if (this.model.showCheckbox == true && $(subItems).length != 0) {
                        var parentli = element.find('>li');
                        parentli.each(function (liindex) {
                            if (($(subItems).parents('li.e-item').first())[0] == $(parentli[liindex])[0])
                                nodecount = nodecount + 1;
                        });
                        this._checkboxrecursive(element, subItems, nodecount);
                    }
                    if (subItems)
                        $(listEl.children('ul')[0]).remove();

                    //Check for text elements(a) and add class if any
                    var linkElement = listEl.children('a')[0];
                    if (linkElement) {
                        nodeText = $(linkElement).text();
                        textElement = $(linkElement).clone();
                        $(linkElement).remove();
                        $(textElement).addClass('e-text');
                        $(textElement).addClass('CanSelect');
                        customElement = listEl.clone();
                        listEl.html('');
                    }
                        //Otherwise build text elements(a)
                    else {
                        nodeText = this._getText(listEl);
                        customElement = listEl.clone();
                        listEl.html('');
                        textElement = ej.buildTag("a.e-text CanSelect", nodeText, "", { href: "#", alt: ""});
                    }

                    //Span to show the images for Themes
                    var span = ej.buildTag('span');
                    if (subItems) {
                        $(span).addClass('collapseimg');
                    }
                    else {
                        $(span).addClass('child');
                    }

                    // Element to show expand, collapse image
                    var exCollpasediv = ej.buildTag('div', "", {}, { role: "presentation" });

                    //Outter div element 
                    var outerdiv = ej.buildTag('div', "", {}, { role: "presentation" });
                    $(outerdiv).append(exCollpasediv).append(span).append(customElement.children()).append(textElement);
                    listEl.prepend(outerdiv);
                    //Check for sub-tree view items and append them
                    if (subItems)
                        listEl.append(subItems);

                    //Check if ID is null for the node, then set the NodeText as ID
                    if (listEl.prop('name') == undefined) {
                        listEl.prop('name', nodeText);
                    }
                }
                if (this.model.showCheckbox) {
                    this._addCheckBox(element);
                    this.element.find(".nodecheckbox").ejCheckBox({ cssClass: this.model.cssClass, change: this._checkedChange });
                }
            }

            var liCollection = element.find('li');
            liCollection.find('>ul').hide();
            var acollection = liCollection.find('a');
            acollection.focus(function () {
                $(this).blur();
            });
            //Adding the Background position Class for all first and last Parent Nodes   
            liCollection.filter('li:last-child').addClass('last');
            $(liCollection[0]).addClass('first');

            if ($(liCollection[0]).hasClass('first') && $(liCollection[0]).hasClass('last'))
                $(liCollection[0]).removeClass('first');

            $(liCollection.filter(':has(ul)')).each(function () {
                $(this).attr("aria-expanded", false).attr("aria-selected", false)
                var liHasul = $($(this).children()).filter('ul');
                if ($(liHasul).is(':hidden')) {
                    $($(this).children().find('div')[0]).removeClass('e-icon e-minus').addClass('e-icon e-plus');
                }
                else {
                    $(this.childNodes[1]).removeClass('e-icon e-plus').addClass('e-icon e-minus');
                }
            });
        },

        _getText: function (element) {
            return $(element)
                      .clone()    //clone the element
                      .children() //select all the children
                      .remove()   //remove all the children
                      .end()  //again go back to selected element
                      .text();    //get the text of element
        },

        _finalize: function () {
            //Onfocus flag.
            this._isFocus = true;
			this._isRender = false;
            //Expand the specific nodes.
			if (this.model.loadOnDemand || !(this.model.expandedNodes instanceof Array && this.model.expandedNodes.length > 0)) {
			    var expandList = this.element.find(".expanded");
			    for (var i = 0; i < expandList.length; i++) {
			        this._expandNode(expandList[i]);
			    }
			}
            //is Checked checkbox element.
			if (this.model.loadOnDemand || !(this.model.checkedNodes instanceof Array && this.model.checkedNodes.length > 0)) {
			    this.model.showCheckbox && this._isCheckedAction();
			}
			this._isRender = true;

			if (!this.model.loadOnDemand) {
			    //Expanded Nodes
			    for (var i = 0; i < this.model.expandedNodes.length; i++) {
			        this._expandNode(this._liList[this.model.expandedNodes[i]]);
			    }
			    //Checked Nodes
			    if (this.model.showCheckbox) {
			        for (var j = 0; j < this.model.checkedNodes.length; j++) {
			            var node = this._liList[this.model.checkedNodes[j]];
			            this._nodeCheckedAction($(node).find("span.e-chkbox-wrap").first());
			        }
			    }
			}

            //Allow Editing on allowEditing = true
            this.model.allowEditing && this._enableAllowEdit();

            $(this._liList[0]).find("a.e-text").attr("id", this._id + "_active");

            this.element.attr("tabindex", 0);
        },

        _isCheckedAction: function () {
            var checkedList = this.element.find(".ischecked");
            for (var chk = 0; chk < checkedList.length; chk++) {
                this._nodeCheckedAction($(checkedList[chk]).find("span.e-chkbox-wrap").first()); //e-checkbox
            }
            this.element.find(".ischecked").removeClass("ischecked");
        },
        //Add Check box
        _addCheckBox: function (element) {
            var parentli = element.find('>li');
            for (var i = 0; i < parentli.length; i++) {
                var checkbox = ej.buildTag("input.nodecheckbox", "", {}, { type: "checkbox", name: "TreeView_Checkbox" + i , value: "False" });

                //Create a hidden Checkbox
                var checkboxhdn = ej.buildTag("input", "", {}, { type: "hidden", name: "TreeView_Checkbox" + 1, value: i });

                $(parentli[i]).children('div').children('span').first().after($(checkboxhdn));
                $(parentli[i]).children('div').children('span').first().after($(checkbox));
            }
        },

        _checkboxrecursive: function (element, subItems, nodecount) {
            var proxy = this, nodeindex;
            var ulcollection = $(subItems).find('>li');

            if ($($($(subItems).parents('li.e-item')[0]).find('>input[type= hidden]')[0]).length == 0)
                nodeindex = nodecount;
            else
                nodeindex = $($(subItems).parents('li.e-item')[0]).find('>input[type=hidden]')[0].value;

            ulcollection.each(function (ulindex) {
                var nodecountvalue = nodecount;
                var nodeindexvalue = nodeindex + "." + ulindex;
                proxy._checkboxrecursive(nodeindex, this, nodecountvalue);
                var checkbox = ej.buildTag("input.nodecheckbox", "", {}, { type: "checkbox", name: "TreeView_Checkbox" + nodeindexvalue, value: "False" });
                //Create a hidden Checkbox
                var checkboxhdn = ej.buildTag("input", "", {}, { type: "hidden", name: "TreeView_Checkbox" + nodeindexvalue, value: nodeindexvalue });
                var liEle = $(ulcollection[ulindex]);
                if (liEle.find("a.e-text ").length > 0) {
                    checkbox.insertBefore(liEle.find("a.e-text ")[0]);
                    checkboxhdn.insertBefore(liEle.find("a.e-text ")[0]);
                } else {
                    liEle.prepend(checkbox).prepend(checkboxhdn);
                }
            });
        },

        _checkedChange: function (args) {
            var treeview = $(this.element).closest(".e-treeview").data("ejTreeView");
            if (args.isChecked)
                treeview._nodeCheckedAction(this.element,args)
            else
                treeview._nodeUnCheckedAction(this.element,args)
        },

        //nodeClick event handler
        _ClickEventHandler: function (event) {
            var proxy = this;
            var element = event.target;
            if (!this._isclicked) {
                this._isclicked = true;
                this._onClick({ event: event,currentElement:element });
                if (element.tagName.toUpperCase() == 'DIV') {
                    if ($(element).hasClass('e-plus') || $(element).hasClass('e-minus')) {
                        var expandUl = null;
                        if (element.tagName.toUpperCase() == 'SPAN') {
                            expandUl = $(element.parentNode).parent().children().filter('ul');
                            element = $(element.parentNode).children().filter('div')[0];
                        }
                        else {
                            expandUl = $(element.parentNode).parent().children().filter('ul');
                        }
                        this.isExpanded = $(expandUl).children().filter('li').length > 0 ? true : false;
                        if (!this.isExpanded && this.model.loadOnDemand) {
                            $(element).addClass("e-load");
                            var nodeid = $($(element).parents('li.e-item')[0]).attr('id');
                            var nodeText = $($($($(element).parents('li.e-item')[0]).children('div')[0]).children('a[class*=e-text]')[0]).text();
                            var args = { id: nodeid, value: nodeText, isChildLoaded: this.isExpanded};
							this._onBeforeExpand(args);
                            this._loadOnDemand(args, element);							
                        }
                        else
                            this._expandCollapseAction(element);
                        //this._nodeSelectionAction($(element).parents('li.e-item').first().find('a[class*=e-text]').first());
                    }
                }
                if (element.tagName.toUpperCase() == 'A') {
                    $(element).hasClass('CanSelect') && !$(element).hasClass('e-active') && this._nodeSelectionAction(element);
                }
            }


            setTimeout(function () { proxy._isclicked = false; }, 300);
            if (element.tagName.toUpperCase() == 'A') {
                ($(element).attr("href") == "#") && event.preventDefault();
				this.element.focus();
            }

        },

        _loadOnDemand: function (args, element) {
            var childItems, proxy = this;;
            if (this.model.fields["dataSource"] instanceof ej.DataManager) {
                var query = ej.Query().where(this.model.fields.parentId, ej.FilterOperators.equal, args.id);
                var queryPromise = this.model.fields["dataSource"].executeQuery(query);
                queryPromise.done(function (e) {
                    childItems = e.result;
                    if (childItems.length > 0) {
                        proxy._createSubNodesWhenLoadOnDemand(childItems, element, proxy.model.fields);
                        proxy._expandCollapseAction(element);
                    }
                });
            } else {
                childItems = ej.DataManager(this.currentSelectedData).executeLocal(ej.Query().where(this.model.fields.parentId, ej.FilterOperators.equal, args.id));
                (childItems.length > 0) && setTimeout(function () { proxy._createSubNodesWhenLoadOnDemand(childItems, element, proxy.model.fields); proxy._expandCollapseAction(element); }, 400);
            }
        },

        _getPath: function (element) {
            var path = $(element).prop('name');
            var ulelement = $(element).parents('li')[0];
            while (ulelement != null && ulelement.parentNode.id != this._id) {
                path = $(ulelement).prop('name') + '/' + path;
                ulelement = $(ulelement).parents('li')[0];
            }
            path = this._id + "/" + path;
            return path;
        },

        //Action on Node Selection
        _nodeSelectionAction: function (element) {
            if ($(element) == null) return;
            //var isExpanded = this._isExpanded(element);
            if ($($(element).parents('li')).hasClass('e-node-disable')) return;
            // remove previous selection
            $($(this.element).find('.e-active')).removeClass('e-active');
            $(this.element).find("#" + this._id + "_active").removeAttr("id");
            $(this.element).find('[aria-selected=true]').attr("aria-selected", false);
            $(element).addClass('e-active');
            var currentElement = $($(element).parents('li.e-item')[0]);
            currentElement.attr("aria-selected", true).find("a.e-text").attr("id", this._id + "_active");
            var nodeText = $(element).text();
            var data = { currentElement: currentElement, value: nodeText };
            this._onNodeSelect(data);

        },
        //Action on Node Selection
        _nodeUnSelectionAction: function (element) {
            if (element[0] == null) return;
            $(element).removeClass('e-active');
        },

        //Action on Node Selection
        _nodeEnableAction: function (element) {
            if (element[0] == null) return;
            element = $(element);
            this.model.showCheckbox && $($(element.parents('li.e-item')[0]).find('input')[0]).prop('disabled', false);
            $(element.parents('li.e-item')[0]).removeClass('e-node-disable');
            $(element.parents('li.e-item')[0]).find('a').removeClass('e-node-disable');
            $(element.parents('li.e-item')[0])[0].disabled = false;
        },

        //Action on Node Selection
        _nodeDisableAction: function (element) {
            if (element[0] == null) return;
            // collapse the parent node
            element = $(element);
            this._collpaseNode(element.parents('li.e-item')[0]);
            this.model.showCheckbox && $($(element.parents('li.e-item')[0]).find('input')[0]).prop('disabled', true);
            $(element.parents('li.e-item')[0]).addClass('e-node-disable');
            $(element.parents('li.e-item')[0]).find('a').addClass('e-node-disable');
            if ($(element.parents('li.e-item')[0]).find('a').hasClass('e-active'))
                $(element.parents('li.e-item')[0]).find('a').removeClass('e-active');
            $(element.parents('li.e-item')[0])[0].disabled = true;
        },
        //Expands or collapse the selected node
        _expandCollapseAction: function (element) {
            var expandUl;
            var proxy = this;
            if ($(element.parentNode).parent().hasClass('e-node-disable')) return;
            if (!ej.isNullOrUndefined(element.tagName) && element.tagName.toUpperCase() == 'SPAN') {
                expandUl = $(element.parentNode).parent().children().filter('ul');
                element = $(element.parentNode).children().filter('div')[0];
            }
            else {
                expandUl = $(element.parentNode).parent().children().filter('ul');
            }
            var elmt;
            if (element.tagName == "DIV")
                elmt = $(element.parentNode.parentNode)[0];
            else
                elmt = element;
            var liElement = $($(element).parents('li.e-item')[0]);
            if (!this._isExpanded(elmt)) {
                liElement.attr("aria-expanded", true).attr("tabindex", 0);
                var nodeText = $($($($(element).parents('li.e-item')[0]).children('div')[0]).children('a[class*=e-text]')[0]).text();
                var data = { currentElement: liElement, value: nodeText, isChildLoaded: this.isExpanded};
				this.model.loadOnDemand ? (this.isExpanded ? (this._onBeforeExpand(data) ? true : false) : false) : (this._onBeforeExpand(data) ? true : false);				
                $(expandUl).animate({ height: 'toggle' }, this.model.enableAnimation ? 350 :0, 'linear', function () {
                    proxy._onNodeExpand(data);
                    proxy._addExpandedNodes(proxy._liList.index(liElement));
                });
                $(element).removeClass('e-icon e-plus').addClass('e-icon e-minus');
                $(element.parentNode.parentNode).addClass('e-collapse');
                $($(element.parentNode).children()[1]).removeClass('collapseimg').addClass('expandimg');
            }
            else {
                liElement.attr("aria-expanded", false).attr("tabindex", -1);
                var nodeText = $($($($(element).parents('li.e-item')[0]).children('div')[0]).children('a[class*=e-text]')[0]).text();
                var data = { currentElement: $($(element).parents('li.e-item')[0]), value: nodeText };
                if (this._onBeforeCollapse(data) === true)
                    return false;
                $(expandUl).animate({ height: 'toggle' },this.model.enableAnimation ? 200:0, 'linear', function () {
                    proxy._onNodeCollapse(data);
                    proxy._removeExpandedNodes(proxy._liList.index(data.currentElement));
                });
                $(element).removeClass('e-icon e-minus').addClass('e-icon e-plus');
                if (element.parentNode != null) {
                    $(element.parentNode.parentNode).removeClass('e-collapse');
                    $($(element.parentNode).children()[1]).addClass('collapseimg').removeClass('expandimg');
                }
            }
        },

        _isExpanded: function (element) {
            if (element.tagName == 'A')
                element = $(element.parentNode.parentNode)[0];
            var isExpanded = this._isNodeExpanded(element);
            if ($($(element).children().filter("ul")) != null)
                if ($($(element).children().filter("ul").find('li')) != null)
                    isExpanded = $($(element).children().filter("ul").find('li')).is(':not(:hidden)');
                else
                    isExpanded = false;
            return isExpanded;
        },
        _isChecked: function (element) {
            var isChecked;
            if ($(element).val() === "True")
                isChecked = true;
            else
                isChecked = false;
            return isChecked;
        },

        _nodeCheckedAction: function (element,args) {
            //var checkboxClass = element.className;
           
            var proxy = this;
            var chkEle = $($(element).find('input.nodecheckbox[type=checkbox]')[0]);
            chkEle.addClass("checked").prop('value', 'True');
            //chkEle.ejCheckBox({ "indeterminateState": false, "indeterminate": false, "check": true });
            chkEle.ejCheckBox({ enableTriState: false});
            chkEle.ejCheckBox({ checked: true});
            this._onChecked(chkEle,args);
            $($(element).parents('li.e-item')[0]).children('ul').find('input.nodecheckbox[type=checkbox]').prop('checked', true).addClass("checked").prop('value', 'True');
            var chkCollection = $($(element).parents('li.e-item')[0]).children('ul').find('input.nodecheckbox[type=checkbox]');
            chkCollection.each(function (index) {
                $(this).ejCheckBox({ "checked": true });
                // Client side checked events
                proxy._onChecked(this,args);
            });
            var autoCheckParentNode = this.model.autoCheckParentNode;
            var parentlicollection = $($(element).parents('li.e-item')[0]).parents('li.e-item');
            parentlicollection.each(function (index) {
                var childulcollection = $(parentlicollection[index]).children('ul').find('li.e-item');
                var count = $(parentlicollection[index]).children('ul').find('li.e-item').find('input.nodecheckbox[value="True"]').length;
                var chkEle = $($(parentlicollection[index]).find('input.nodecheckbox[type=checkbox]')[0]);
                if (count == childulcollection.length || autoCheckParentNode) {
                    chkEle.addClass("checked").prop('value', 'True');
                    //$(chkEle).ejCheckBox({ "indeterminateState": false });
                    //$(chkEle).ejCheckBox({ "indeterminate": false, "check": true, });
                    chkEle.ejCheckBox({ enableTriState: false });
                    chkEle.ejCheckBox({checked: true });
                    proxy._onChecked(chkEle,args);
                } else {
                    //chkEle.ejCheckBox({ "indeterminate": true });
                    //chkEle.ejCheckBox({ "indeterminateState": true });
                    chkEle.ejCheckBox({ enableTriState: true});
                    chkEle.ejCheckBox({ checkState:"indeterminate" });
                    chkEle.val("False");
                }
            });
            var checkedcoll = this.element.find('input.nodecheckbox[value="True"]');
            for (var i = 0; i < checkedcoll.length; i++) {
                var chkEle = $(checkedcoll[i]).parents('.e-chkbox-wrap');
                var value = $(chkEle.next()[0])[0].value;
                var nodeid = $($(checkedcoll[i]).parents('li.e-item')[0]).attr('id');
                var text = $(checkedcoll[i]).parents("li.e-item").first().find(".e-text").first().text();

                var checkboxhdnvalue = ej.buildTag("input", "", {}, { type: "hidden", name: "TreeView_Checkbox" + value + ".Value", value: nodeid });
                //Create a hidden Checkbox
                var checkboxhdntext = ej.buildTag("input", "", {}, { type: "hidden", name: "TreeView_Checkbox" + value + ".Text", value: text });
                try {
                    $(checkedcoll[i]).append($(checkboxhdnvalue));
                    $(checkedcoll[i]).append($(checkboxhdntext));
                }
                catch (err) {
                }
            }
        },
        _nodeUnCheckedAction: function (element,args) {
            var proxy = this;
            element = $(element);
            var chkEle = $($(element).find('input.nodecheckbox[type=checkbox]')[0]);
            chkEle.removeClass('checked').prop('value', 'False').children().remove();
            //chkEle.ejCheckBox({ "indeterminate": false, "check": false });
            chkEle.ejCheckBox({ enableTriState: false });
            chkEle.ejCheckBox({ checked: false });
            this._onUnChecked(chkEle,args);
            var unCheckedList = $(element.parents('li.e-item')[0]).children('ul').find('input.nodecheckbox[type=checkbox]');
            unCheckedList.removeClass("checked").prop('value', 'False').children().remove();
            unCheckedList.each(function (index) {
                $(this).ejCheckBox({ "checked": false });
                proxy._onUnChecked(this,args);
            });
            var autoCheckParentNode = this.model.autoCheckParentNode;
            var parentlicollection = $(element.parents('li.e-item')[0]).parents('li.e-item');
            for (var index = 0; index < parentlicollection.length; index++) {
                var count = $(parentlicollection[index]).find('input.nodecheckbox[value="True"]').length;
                var chkEle = $($(parentlicollection[index]).find('input.nodecheckbox[type=checkbox]')[0]);
                if (count <= 0) {
                    //chkEle.ejCheckBox({ "indeterminateState": false });
                    //chkEle.ejCheckBox({ "indeterminate": false, "check": false });
                    chkEle.ejCheckBox({ enableTriState: false });
                    chkEle.ejCheckBox({ checked: false });
                    //Client side unchecked event
                    this._onUnChecked(chkEle,args);
                }
                if (count > 1 && autoCheckParentNode) {
                    chkEle.addClass("checked").prop('value', 'True');
                    chkEle.ejCheckBox({ "checked": true });
                }
                else if (count == 1 && autoCheckParentNode) {
                    chkEle.addClass("checked").prop('value', 'False');
                    chkEle.ejCheckBox({ "checked": false });
                }
                else if (count > 0) {
                    chkEle.removeClass('checked').prop('value', 'False').children().remove();
                    //chkEle.ejCheckBox({ "indeterminate": true });
                    //chkEle.ejCheckBox({ "indeterminateState": true });
                    chkEle.ejCheckBox({ enableTriState: true });
                    chkEle.ejCheckBox({checkState: "indeterminate"});
                }
            }
        },

        //Enables Edit
        _enableAllowEdit: function () {
            var element = this.element;
            var liCollection = $(element).find('li');
            liCollection.each(function () {
                $(this).addClass('AllowEdit');
            });
        },

        //Disables Edit
        _disableAllowEdit: function () {
            var liCollection = this.element.find('li');
            liCollection.each(function () {
                $(this).removeClass('AllowEdit');
            });
        },

        _expandNode: function (value) {
            if (value != null) {
                //if ($(element).find('ul').length > 0) {
                if (this.model.loadOnDemand)
                    this._expandCollapseAction($($(value).children('div')).children()[0]);
                else {
                if ($($($(value).children('div')).children()[0]).hasClass('e-plus')) {
                    var isExpanded = $(value).children('ul').find('li').length > 0 ? true : false;
                    if (isExpanded) {
                        this._expandCollapseAction($($(value).children('div')).children()[0]);
                    }
                }
            }
            }
            return true;
        },

        //Collapses the selected node
        _collpaseNode: function (value) {
            var element = value;
            if (element != null) {
                if ($(element).find('ul').length > 0) {
                    if ($($($(element).children('div')).children()[0]).hasClass('e-minus')) {
                        this._expandCollapseAction($($(element).children('div')).children()[0]);
                    }
                }
            }
        },

        //Expands all the nodes
        _expandAll: function () {
            var proxy = this;
            var element = this.element;
            var liCollection = $(element).find("li:not([class*='e-node-disable'])");
            var collapsedNodes = liCollection.find('>ul:hidden').parents('li.e-item');
            if (liCollection.find('>ul:hidden').find("li").length > 0)
                liCollection.find('>ul:hidden').animate({ height: 'toggle' },this.model.enableAnimation ? 350 :0);
            $(collapsedNodes).each(function () {
                if (!$(this).hasClass("e-node-disable")) {
                    var liElement = $($(this).parents('li.e-item')[0]);
                    var nodeText = $($(this).find(">div >a")[0]).text();
                    var data = { currentElement: liElement, value: nodeText };
                    if (proxy._onBeforeExpand(data) === true)
                        return false;
                    if ($(this).find('li').length > 0) {
                        $(this).addClass('expand');
                        $($($(this).children('div')[0]).children()[1]).removeClass('collapseimg').addClass('expandimg');
                        $($($(this).children('div')[0]).children()[0]).removeClass('e-icon e-plus').addClass('e-icon e-minus');
                    }
                    proxy._onNodeExpand(data);
                }
            });
        },

        //Collapse all the nodes
        _collapseAll: function () {
            var liCollection = this.element.find('li');
            this._collapseNodes(liCollection);
        },
        //Check all the nodes of the checkbox
        _checkAll: function () {
            if (this.model.showCheckbox) {
                var element = this.element;
                var liCollection = $(element).find("li");
                for (var i = 0; i < liCollection.length; i++) {
                    var checkboxelement = $(liCollection[i]).children().find('input.nodecheckbox')[0];
                    if ($(checkboxelement)[0].disabled)
                        $(checkboxelement).ejCheckBox("setModel", { checked: false });
                    else {
                        $(checkboxelement).ejCheckBox("setModel", { checked: true });
                        $(checkboxelement).attr("value", "True");
                        this._onChecked(checkboxelement);
                    }
                }
            }
            else
                alert("Please Enable the ShowCheckbox property");
        },
        _unCheckAll: function () {
            if (this.model.showCheckbox) {
                var element = this.element;
                var liCollection = $(element).find("li");
                for (var i = 0; i < liCollection.length; i++) {
                    var chkEle = $(liCollection[i]).find('input.nodecheckbox')[0];
                    $(chkEle).ejCheckBox("setModel", { checked: false });
                    $(chkEle).attr("value", "False");
                    this._onUnChecked(chkEle);
                }
            }
            else
                alert("Please Enable the ShowCheckbox property");
        },

        _collapseNodes: function (liCollection) {
            var proxy = this;
            var _expandedNodes = liCollection.find('>ul:not(:hidden)').parents('li.e-item');
            liCollection.find('>ul:not(:hidden)').animate({ height: 'toggle' },this.model.enableAnimation ? 350 :0);
            $(_expandedNodes).each(function () {
                var nodeText = $($(this).find(">div >a")[0]).text();
                var data = { currentElement: this, value: nodeText };
                if (proxy._onBeforeCollapse(data) == true)
                    return false;
                //var isExpanded = false;
                if ($(this).find('li').length > 0) {
                    $(this).removeClass('e-collapse');
                    $($($(this).children('div')[0]).children()[1]).removeClass('expandimg').addClass('collapseimg');
                    $($($(this).children('div')[0]).children()[0]).removeClass('e-icon e-minus').addClass('e-icon e-plus');
                }
                proxy._onNodeCollapse(data);
            });
        },
        _showCheckBox: function () {
            var element = this.element.find("> ul");
            var licoll = element.find('li');
            for (var i = 0; i < licoll.length; i++) {
                var nodecount = -1;
                var listEl = licoll[i];
                //Check for sub-tree view items.Take back up and remove them
                var subItems = $(listEl).children('ul')[0];
                if (this.model.showCheckbox == true && $(subItems).length != 0) {
                    var parentli = element.find('>li');
                    parentli.each(function (liindex) {
                        if ($($(subItems).parents('li.e-item')[0])[0].id == $(parentli[liindex])[0].id)
                            nodecount = nodecount + 1;
                    });
                    this._checkboxrecursive(element, subItems, nodecount);
                }
            }
            this._addCheckBox(element);
            element.find(".nodecheckbox").ejCheckBox({ cssClass: this.model.cssClass, change: this._checkedChange });
        },

        //Drag and Drop Events handlers

        //dragEventHandler
        _drag: function () {
            var proxy = this;
            var pre = false;
            var _clonedElement = null;
            var dragContainment = null;
            this._treeView = this.element.parent();
            if (!this.model.allowDragAndDropAcrossControl)
                dragContainment = this.element.parent();
            //else
            //    dragContainment = this.element.parent();
            $(this._treeView).find("ul li div a").not(".e-js").ejDraggable({
                dragArea: dragContainment,
                clone: true,
                dragStart: function (args) {
                    var data = { target: args.target,event:args.event };
                    if (proxy._onDragStarts(data)) {
                        args.cancel = true;
                        _clonedElement && _clonedElement.remove();
                        return false;
                    }
                },
                drag: function (args) {
				pre=false;
                    $(".e-sibling").remove();
                    var target = args.target;
                    var data = { target: target,event:args.event };
                    if (proxy._onDrag(data))
                        return false;
                    if ($(target).hasClass('e-droppable') || $(target).parent().hasClass('e-droppable')) {
                        document.body.style.cursor = '';
                        $(target).addClass("allowDrop");
                    }
                    else {
                        document.body.style.cursor = 'not-allowed';
                        $(target).removeClass('showline-hover');
                        $(target).removeClass('noline-hover');
                    }
                    if (target.nodeName != 'A') {
                        if (target.nodeName == 'UL' && $(target).children()[0] != null)
                        {    target = $(target).children()[0]; pre=true;}
                        if (target.nodeName != 'LI')
                            target = $(target).closest('li.e-droppable')[0] || $(target).parent();
								
                        if (target.nodeName == 'LI' && $(target).hasClass("e-droppable") && proxy.model.allowDropSibling) {
                            
							var div = ej.buildTag('div.e-sibling');
							var targetY = $(".e-treeview").has(target).offset().top + $(target).children().find('a')[0].offsetTop || -1;					
                            if(!pre)
							{
							pre=(args.event.pageY > targetY )? false : true;      
							}                 
                            pre ? $(target).prepend(div) : $(target).append(div); 							
                        }
						
                    }
                    else
                        $(".e-sibling").remove();
                },
                dragStop: function (args) {
                    if (!args.element.dropped) {
                        _clonedElement && _clonedElement.remove();
                        document.body.style.cursor = '';
                    }
                    var target = args.target;
                    if (target.className == "e-sibling") {
                        target = $(target).parent("li")[0];
                    }
                    var targetObj = proxy;
                    var position = pre ? "Before" : "After";
                    position = target.nodeName == 'A' ? "Over" : position;
                    var data = { target: target, position: position,event:args.event };
                    if (proxy._onDragStop(data))
                        return false;
                    $(args.element).removeClass("e-active");
                    if (target.nodeName == 'A' && proxy.model.allowDropChild && $(target).hasClass('e-droppable') || (target.nodeName == 'UL' && $(target).children().length == 0)) {
                        position = "Over";
                        if (($(args.element).parent().parent().has($(target)).length == 0) && ($(target).parent().parent().has($(args.element)).length == 0 || proxy._isDescendant($(target).parents("li:last").find('>ul>li'), $(args.element).parents("li:first")[0]))) {
                            proxy._dropAsChildNode(target, args.element, args.event);
                            targetObj._applyFirstLastChildClass();
                        }
                    }
                    else {
                        if (target.nodeName == 'UL')
                            target = $(target).children()[0];
                        if (target.nodeName != 'LI')
                            target = $(target).parent('.e-droppable')[0] || $(target).parent();
                        if (target.nodeName == 'LI' && proxy.model.allowDropSibling && $(target).hasClass('e-droppable')) {
                            $(".e-sibling").remove();
                            if ($(args.element).parent().parent().has($(target)).length < 1) {
                                proxy._dropAsSublingNode(target, args.element, pre, args.event);
                                targetObj._applyFirstLastChildClass();
                            }
                        }
                    }
                    $(".e-sibling").remove();
                    $(".allowDrop").removeClass("allowDrop");
                    if (!proxy.model.allowDropChild) {
                        _clonedElement && _clonedElement.remove();
                    }
                    var data = { target: target, event: args.event, dropedElement: args.element };
                    if (proxy._onDropped(data))
                        return false;
                    document.body.style.cursor = '';
                },
                helper: function (event, ui) {
                    _clonedElement = $(event.sender.target).clone().addClass("dragClone");
                    return _clonedElement.appendTo($("body"));
                }
            });
        },
        _isDescendant: function (src, target) {
            var match = true;
            $(src).each(function (i, item) {
                if (item == target) {
                    match = false;
                    return false;
                }
                else
                    match = true;
            });
            return match;
        },
        //allowDropChildEventHandler
        _childDrop: function () {
            $(this._treeView).find("ul li div a").ejDroppable({
                accept: $(this._treeView).find("ul li div a"),
                drop: function (event, ui) {
                    $(ui.helper).hide();
                }
            });
        },
        //allowDropSiblingEventHandler
        _siblingDrop: function () {
            $(this._treeView).find("ul li").ejDroppable({
                drop: function (event, ui) {
                    $(ui.helper).hide();
                }
            });
        },

        //DropAsSubling
        _dropAsSublingNode: function (target, element, pre, event) {
            var li = event.ctrlKey ? $(element).parent().parent().clone() : $(element).parent().parent();
            var parentNode = $(element).parents('li.e-item')[1];
            pre ? $(li).insertBefore(target) : $(li).insertAfter(target);
            this._modifiCss(parentNode);
            this._applyFirstLastChildClass();
        },
        //DropAsChild
        _dropAsChildNode: function (target, element, event) {
            var li = event.ctrlKey ? $(element).parent().parent().clone() : $(element).parent().parent();
            var parentNode = $(element).parents('li.e-item')[1];
            if (target.nodeName == 'UL')
                $(target).append(li);
            else
                this._appendNode(target, li);
            this._modifiCss(parentNode);
            this._applyFirstLastChildClass();
            this._expandNode($(target).parent().parent()[0]);
        },
        _appendNode: function (selectedNode, outerLi) {
            if (this._showline && selectedNode.length != 0) {
                if ($($($(selectedNode).parents('li.e-item')[0]).find('li')).hasClass('last'))
                    $($($(selectedNode).parents('li.e-item')[0]).find('li')).removeClass('last');
                $(outerLi).addClass('last');
            }
            if (selectedNode.length != 0) {
                if ($($(selectedNode).parents('li.e-item')[0]).find('ul')[0] == null) {
                    var outerUl = ej.buildTag('ul.e-treeview-ul');
                    $(outerUl).append($(outerLi));
                    if (!$($($(selectedNode).parents('li.e-item')[0]).find('div')[1]).hasClass('e-minus')) {
                        $($($(selectedNode).parents('li.e-item')[0]).find('div')[1]).addClass('e-icon e-minus');
                    }
                    $($(selectedNode).parents('li.e-item')[0]).append($(outerUl));
                }
                else
                    $($($(selectedNode).parents('li.e-item')[0]).find('ul')[0]).append($(outerLi));
            }
        },

        _checkBox: function (target, li) {
            if (!$(li).hasClass("nodecheckbox") && $(li).find(".nodecheckbox").length > 0) {
                $(li).find(".e-chkbox-wrap").next().remove();
                $(li).find(".e-chkbox-wrap").remove();
            }
            if ($(target).find(".e-checkbox").length > 0) {
                var element = $(".e-treeview").has(target).find('ul')[0];
                $(element).find(".e-checkbox").next().remove();
                $(element).find(".e-checkbox").remove();
                var context = this;
                var nodecount = -1;
                var licoll = $(element).find('li');
                licoll.each(function (index) {
                    var subItems = $(this).children('ul')[0];
                    if ($(subItems).length != 0) {
                        var parentli = $(element).find('>li');
                        parentli.each(function (liindex) {
                            if ($($(subItems).parents('li.e-item')[0])[0].id == $(parentli[liindex])[0].id)
                                nodecount = nodecount + 1;
                        });
                        context._childcheckbox(element, subItems, nodecount);
                    }
                });
                this._addCheckBox($(element));
                this.element.find(".nodecheckbox").ejCheckBox({ cssClass: this.model.cssClass, change: this._checkedChange });
                $(target).closest(".e-treeview").find(".nodecheckbox").ejCheckBox({ cssClass: this.model.cssClass, change: this._checkedChange });
            }
        },
        _childcheckbox: function (element, subItems, nodecount) {
            var proxy = this, nodeindex;
            var ulcollection = $(subItems).find('>li');

            if ($($($($(subItems).parents('li.e-item')[0]).children()[0]).find('>input[type= hidden]')[0]).length == 0)
                nodeindex = nodecount;
            else
                nodeindex = $($($(subItems).parents('li.e-item')[0]).children()[0]).find('>input[type= hidden]')[0].value;

            ulcollection.each(function (ulindex) {
                var nodecountvalue = nodecount;
                var nodeindexvalue = nodeindex + "." + ulindex;
                proxy._childcheckbox(nodeindex, this, nodecountvalue);

                var checkbox = ej.buildTag("input.nodecheckbox", "", {}, { type: "checkbox", name: "TreeView_Checkbox" + nodeindexvalue, value: "False" });

                //Create a hidden Checkbox
                var checkboxhdn = ej.buildTag("input", "", {}, { type: "hidden", name: "TreeView_Checkbox.Index", value: nodeindexvalue });

                $(ulcollection[ulindex]).children('div').children('span').after($(checkboxhdn));
                $(ulcollection[ulindex]).children('div').children('span').after($(checkbox));
            });
        },
        _modifiCss: function (parentNode) {
            if ($(parentNode).find('li').length == 0) {
                $(parentNode).find('ul').remove();
                $(parentNode).removeClass('e-collapse');
                $(parentNode).find('div.e-icon').removeClass('e-icon e-minus');
            }
            else {
                if (!$($(parentNode).find('li')[$(parentNode).find('li').length - 1]).hasClass('last'))
                    $($(parentNode).find('li')[$(parentNode).find('li').length - 1]).addClass('last');
            }
        },

        _applyFirstLastChildClass: function () {
            var element = this.element;
            var liCollection = element.find('li');
            liCollection.removeClass('first');
            liCollection.removeClass('last');
            liCollection.filter('li:last-child').addClass('last');
            $(liCollection[0]).addClass('first');
            if ($(liCollection[0]).hasClass('first') && $(liCollection[0]).hasClass('last'))
                $(liCollection[0]).removeClass('first');
        },

        _expandEventHandler: function (event) {
            var target = $(event.target);
            if (target.hasClass("e-icon")) return;
            if (!(event.type === "dblclick" && this.model.allowEditing)) {
                event.preventDefault();
                var selectedNode = $(target.siblings('div'));
                var liElement = target.parent().parent();

                if (selectedNode.hasClass('e-minus'))
                    this._collpaseNode(liElement);
                else {
                    if (this.model.loadOnDemand && selectedNode.find(".e-item").length == 0) {
                        this._isclicked = false;
                        this._ClickEventHandler({ target: selectedNode[0] });
                    }
                    else this._expandNode(liElement);
                }
            }
        },

        //Double Click Handler
        _inlineEdit: function (event) {
            event.preventDefault();
            if (event.target.tagName == 'A' && !$(event.target).hasClass("e-node-disable")) {
                if ($($(event.target).parents('li.e-item')[0]).hasClass('AllowEdit')) {
                    if ($(event.target).hasClass('e-text')) {
                        $(event.target).removeClass('e-active');
                        this._inlineEditAction(event.target);
                    }
                }
            }
            return false;
        },

        //Node Editing 
        _inlineEditAction: function (element) {
			
            var editTextBox = $('#Edit_Input')[0];
            if (editTextBox == null) {
                this._createEditTextBox(element);
				
            }
            else {
                editTextBox = $('#Edit_Input')[0];
                $(editTextBox.parentNode).html(editTextBox.value);
                $(editTextBox).remove();
                this._createEditTextBox(element);
				 
            }
         
            //this.set_Selected(true);
			
        },

        //Creates Edit texbox
        _createEditTextBox: function (values) {
            var argsData = { currentElement:values };
            if (this._trigger("beforeEdit", argsData))
                return false;
            var editTextBox = $('#Edit_Input')[0];
            if (editTextBox == null) {
                var textBox = ej.buildTag('Input.Input_Text#Edit_Input', "", "", { type: 'text', value: $.trim(values.innerHTML).replace(/\n\s+/g, " "), name: 'inplace_value' });
                $(textBox).width($(values).outerWidth() + 5);
                $(textBox).height($(values).outerHeight() - 2);
                this.beforeEditText = $(values).text();
                $(values).html('');
                $(values).before(textBox);
                var size = 0;
                editTextBox = $('#Edit_Input')[0];
                if (editTextBox.value.length == '')
                    size = 3;
                else
                    size = $(values).outerWidth() + 20;

                this._mousePositionAtEnd(editTextBox);
                this._currentEditableNode = values;
                var txtbox = $(editTextBox);
                //Keypress event handler for the edit textbox
                this._on(txtbox, 'keypress', this._editTextBoxKeyPress);
                //Keydown event handler for edit textbox
                this._on(txtbox, 'keydown', this, this._pressEscKey);

                // Focus out event handler for the edit textbox
                this._on(txtbox, 'blur', this._focusout);
            }
            return editTextBox;
        },

        _editTextBoxKeyPress: function (event) {
            event.target.size = event.target.value.length + 1;
        },

        _mousePositionAtEnd: function (ctl) {
            if (ctl.focus)
                ctl.focus();
            if (ctl.select)
                ctl.select();
            return true;
        },

        //Focus out event handler for Edit textbox
        _focusout: function (e) {

            var editTextBox = $('#Edit_Input')[0];
            var currentText = editTextBox.value;
            var id = $($(editTextBox).parents('li.e-item')[0]).attr('id');
            var requestArgs = {
                nodeId: id,
                oldText: this.beforeEditText,
                newText: currentText,     
            };

            if (this._trigger("inlineEditValidation", requestArgs) == true) {
                this._cancelAction(editTextBox);
            }
            else
                this._saveAction(editTextBox);
        },


        //Keydown event handler for edit textbox
        _pressEscKey: function (event) {
            event.cancelBubble = true;
            event.returnValue = false;
            var editTextBox = $('#Edit_Input')[0];

            if (editTextBox != null) {
                if (event.keyCode == 13) {
                    this._focusout();
                }

                if (event.keyCode == 27)
                    this._cancelAction(editTextBox);
            }
        },
        _onFocusHandler: function (event) {
            if (this.model.allowKeyboardNavigation && this._isFocus) {
			if (this.element.find(".e-active").length == 0){
                this.element.find(".e-active").removeClass("e-active");
                nextElement = this.element.find('li').first().find('a').first();
                $(nextElement).addClass('e-active');
				}
               event.preventDefault();
                this._isFocus = false;
            }
        },

        //Key down event handler
        _KeyPress: function (e) {
            var code, node;
            var proxy = this;
            this._isFocus = true;
            var element = this.element.find("> ul");
            if (e.keyCode) code = e.keyCode; // ie and mozilla/gecko
            else if (e.which) code = e.which; // ns4 and opera
            else code = e.charCode;
            if (code == 113) {
                e.preventDefault();
                this._isFocus = false;
                var currentlySelectedItem = element.find(".e-active")[0];
                if (currentlySelectedItem != null) {
                    if ($($(currentlySelectedItem).parents('li.e-item')[0]).hasClass('AllowEdit')) {
                        $(currentlySelectedItem).removeClass('e-active');
                        this._createEditTextBox(currentlySelectedItem);
                    }
                }
            }
            if (proxy.model.allowKeyboardNavigation && (proxy.element.find('#Edit_Input').length < 1)) {
                var nextElement, selectedItem;
                selectedItem = $($(element).find('.e-active').parents('li.e-item')[0]);
                var liVisible = $(element).find('li').not(':hidden');
                // Down arrow key(next node Move)
                if (code == 40 && !e.ctrlKey && !e.altKey && !e.shiftKey) {
                    if (selectedItem.length > 0) {
                        e.preventDefault();
                        for (var i = 0; i < liVisible.length; i++) {
                            if ($($(liVisible[i]).find('a')[0]).hasClass('e-active')) {
                                if (i == liVisible.length - 1)
                                    this._nodeSelectionAction($(selectedItem.find('a')[0]).addClass('e-active'));
                                else {
                                    $($(liVisible[i]).find('a')[0]).removeClass('e-active');
                                    this._nodeSelectionAction($($(liVisible[i + 1]).find('a')[0]));
                                    break;
                                }
                            }
                        }
                        proxy._KeyPressEventHandler(nextElement, proxy, code,e);
                    }
                }
                    // Up arrow key(next node Move)
                else if (code == 38 && !e.ctrlKey && !e.altKey && !e.shiftKey) {
                    if (selectedItem.length > 0) {
                        e.preventDefault();
                        for (var i = 0; i < liVisible.length; i++) {
                            if ($($(liVisible[i]).find('a')[0]).hasClass('e-active')) {
                                if (i == 0)
                                    this._nodeSelectionAction($(selectedItem.find('a')[0]).addClass('e-active'));
                                else {
                                    $($(liVisible[i]).find('a')[0]).removeClass('e-active');
                                    this._nodeSelectionAction($($(liVisible[i - 1]).find('a')[0]).addClass('e-active'));
                                    break;
                                }
                            }
                        }
                        proxy._KeyPressEventHandler(nextElement, proxy, code,e);
                    }
                }

                    //Right arrow key(Expand)
                else if (code == 39 && !e.ctrlKey && !e.altKey && !e.shiftKey) {
                    var arrowIcon = $(selectedItem).children('div').find('div');
                    if (arrowIcon.hasClass('e-plus')) {
                        e.preventDefault();
                        if (this.model.loadOnDemand && selectedItem.find(".e-item").length == 0) {
                            this._ClickEventHandler({ target: arrowIcon[0] });
                        }
                        else this._expandNode(selectedItem);
                    }
                    else {
                        if ($(selectedItem).find("div.e-icon e-plus,div.e-icon e-minus").first().length > 0)
                            this.selectNode($(selectedItem).children("ul").find("li").first()[0]);
                        else {
                            var child = $(selectedItem).parent().find("li");
                            var index = child.index(selectedItem);
                            !ej.isNullOrUndefined(child[index + 1]) && $(selectedItem).children("ul").length > 0 && this.selectNode(child[index + 1]);
                        }
                    }
                    nextElement = $(selectedItem.find('a')[0]);
                    proxy._KeyPressEventHandler(nextElement, proxy, code,e);
                }

                    //Left arrow key(Collapse)
                else if (code == 37 && !e.ctrlKey && !e.altKey && !e.shiftKey) {
                    var arrowIcon = $(selectedItem).children('div').find('div');
                    if (arrowIcon.hasClass('e-minus')) {
                        e.preventDefault();
                        this._collpaseNode(selectedItem);
                    }
                    else if ($(selectedItem).parents().first().parents("li").first().length > 0) {
                        $(selectedItem).find("a.e-active").first().removeClass('e-active');
                        $(selectedItem).parents().first().parents("li").first().find('a').first().addClass("e-active");

                    }
                    nextElement = $(selectedItem.find('a')[0]);
                    proxy._KeyPressEventHandler(nextElement, proxy, code,e);
                }

                    //Enter Key(Expand and Collapse)
                else if (code == 13) {
                    if (selectedItem.length > 0) {
                        var arrowIcon = $(selectedItem).children('div').find('div');
                        if (arrowIcon.hasClass('e-minus'))
                            this._collpaseNode(selectedItem);
                        else {
                            if (this.model.loadOnDemand && selectedItem.find(".e-item").length == 0) {
                                this._ClickEventHandler({ target: arrowIcon[0] });
                            }
                            else this._expandNode(selectedItem);
                        }
                        nextElement = $(selectedItem.find('a')[0]);
                        proxy._KeyPressEventHandler(nextElement, proxy, code,e);
                    }
                }
                    //Space Key(toCheck and Uncheck node)
                else if (code == 32) {
                    if (selectedItem.length > 0 && this.model.showCheckbox) {
                        e.preventDefault();
                        var chkBoxEle = selectedItem.find('input.nodecheckbox[type=checkbox]').first();
                        if (chkBoxEle[0].checked)
                            this._nodeUnCheckedAction(chkBoxEle.parent().parent());
                        else
                            this._nodeCheckedAction(chkBoxEle.parent().parent());
                    }
                }
                    //Del key to delete the e-active node
                else if (code == 46) {
                    if (selectedItem.length > 0) {
                        e.preventDefault();
                        this._removeNode(selectedItem.find("a.e-text").first());
                    }
                }
                else if (e && e.ctrlKey == true) {
                    //Cut the node
                    if (code == 88) {
                        var cutNodeLi;
                        if ($(selectedItem).hasClass('first')) {
                            cutNodeLi = $(selectedItem).removeClass('first').addClass('last');
                            $(selectedItem).next().addClass('first');
                        }
                        else if (!$(selectedItem).hasClass('last'))
                            cutNodeLi = $(selectedItem).addClass('last');
                        else {
                            cutNodeLi = $(selectedItem);
                            $(selectedItem).prev().addClass('last');
                        }
                        this._cutCopyNodeText = cutNodeLi;
                        proxy._removeNode();
                        this.element.focus();
                    }

                        //Copy the node
                    else if (code == 67) {
                        var copyNodeLi = $(selectedItem).clone();
                        this._cutCopyNodeText = copyNodeLi;
                    }
                        // Paste the node
                    else if (code == 86 && this._cutCopyNodeText != null) {
                        $(selectedItem).length === 0 && (selectedItem = this.element);
                        var addChildNode;
                        var childNode = $(this._cutCopyNodeText).clone();
                        if ($(childNode.find('a')[0]).hasClass('e-active'))
                            $(childNode.find('a')[0]).removeClass('e-active');
                        if ($(childNode).hasClass('first'))
                            addChildNode = $(childNode).removeClass('first').addClass('last');
                        else if (!$(childNode).hasClass('last'))
                            addChildNode = $(childNode).addClass('last');
                        else
                            addChildNode = $(childNode);

                        if (this.model.showCheckbox) {
                            var checkbox = ej.buildTag("input.nodecheckbox", "", {}, { type: "checkbox", name: "TreeView_Checkbox" });
                            checkbox.insertAfter(childNode.find(".e-chkbox-wrap"));
                            childNode.find(".e-chkbox-wrap").remove();
                            childNode.find(".nodecheckbox").ejCheckBox({ cssClass: this.model.cssClass, change: this._checkedChange });
                        }
                        // wire mouse over event 
                        this._on(childNode.find(".e-text"), "mouseenter", this._mouseEnterEvent);
                        this._on(childNode.find(".e-text"), "mouseleave", this._mouseLeaveEvent);

                        if ($(selectedItem).children('div').children('span').hasClass('child'))
                            $(selectedItem).children('div').children('span').removeClass('child').addClass('expandimg');
                        if ($(selectedItem).children('ul').length != 0) {
                            $(selectedItem).children('ul').find('>li').last().removeClass('last');
                            $(selectedItem).find('>ul').append($(addChildNode));
                        }
                        else {
                            var wrapUl = ej.buildTag('ul.e-treeview-ul');
                            node = $(wrapUl).append($(addChildNode));
                            $(selectedItem).append($(node));
                            $(selectedItem).children('div').find('>div').first().addClass('e-icon e-minus');
                        }
                        var liCollection = $(selectedItem).parents('li.e-item');
                        liCollection.each(function (index) {
                            var licoll = $(liCollection[index]).children('ul').find('>li');
                            if (licoll.length == 1) {
                                $(licoll).addClass('last');
                            }
                        });
                        this._expandNode(selectedItem);
                    }
                }
                    //Home Key(Select the first node)
                else if (code == 36 && !e.ctrlKey && !e.altKey && !e.shiftKey) {

                    $($(selectedItem).find('a')[0]).removeClass('e-active');
                    nextElement = $($(element).find('>li')[0]).find('a')[0];
                    $(nextElement).addClass('e-active');
                    proxy._KeyPressEventHandler(nextElement, proxy, code,e);
                    e.preventDefault();
                }

                    //End Key(Select the last node)
                else if (code == 35 && !e.ctrlKey && !e.altKey && !e.shiftKey) {

                    $($(selectedItem).find('a')[0]).removeClass('e-active');
                    node = $(element).find('>li').last();
                    if ($(node).find('div').hasClass('e-minus')) {
                        nextElement = $($(node).find('li').last().find('a')[0]);
                        $(nextElement).addClass('e-active');
                    }
                    else {
                        nextElement = $(node.find('a')[0]);
                        $(nextElement).addClass('e-active');
                    }
                    proxy._KeyPressEventHandler(nextElement, proxy, code,e);
                    e.preventDefault();
                }

            }
        },
        //Remove the node
        _removeNode: function (node) {
            var selectedNode = ej.isNullOrUndefined(node) ? this.element.find('.e-active') : node;
            if (selectedNode != null) {
                var parentNode = $($(selectedNode).parents('li.e-item')[1]);
                var currentNode = $($(selectedNode).parents('li.e-item')[0]);
                var liVisible = $(parentNode).find('li').not(':hidden');
                if(liVisible.length > 0){
                    if(currentNode.next().length>0)
                        $(currentNode.next().find("a")[0]).addClass('e-active');
                    else
                        (currentNode.prev().length > 0) ? $(currentNode.prev().find("a")[0]).addClass('e-active') : $(parentNode.find("a")[0]).addClass('e-active');
                }
                else
                    (currentNode.next().length > 0) ? $(currentNode.next().find("a")[0]).addClass('e-active') : $(currentNode.prev().find("a")[0]).addClass('e-active');
                currentNode.remove();
                this._modifiCss(parentNode);
            }
        },
        _KeyPressEventHandler: function (nextElement, proxy, code,event) {
            var isExpanded;
            var element = $($(nextElement).parents('li.e-item')[0]);
            var path = proxy._getPath($(nextElement).parents('li.e-item')[0]);
            var nodeText = $(nextElement).text();
            if ($($(nextElement).parents('li.e-item')[0]).children('div').find('div').hasClass('e-minus'))
                isExpanded = true;
            else
                isExpanded = false;
            var argsData = { keyCode: code, currentElement: element, value: nodeText, isExpanded: isExpanded, path: path, event:event };
            this._trigger("keyPress", argsData);
        },

        //Document click event handler
        _documentClick: function (event) {
            if (event.target.id != 'Edit_Input')
                var editTextBox = $('#Edit_Input')[0];
            if (editTextBox != null) {
                $(editTextBox).next().html(editTextBox.value).removeAttr('style');
                $(editTextBox).remove();
                //this.element.focus();
            }
        },
        //Save Changes on the edited node
        _saveAction: function (values) {
            $(values).next().html(values.value).removeAttr('style');
            $(values).remove();
        },

        //Cancels the changes 
        _cancelAction: function (values) {
            $(values).next().html(this.beforeEditText).removeClass('e-node-hover').addClass('e-active').removeAttr('style');
            this._hideEditTextBox();
        },

        //Hides the edit textbox
        _hideEditTextBox: function () {
            var editTextBox = $('#Edit_Input')[0];
            if (editTextBox != null) {
                $(editTextBox).remove();
            }
        },

        _mouseEnterEvent: function (event) {
            if ($(event.target).hasClass("e-text") && !$(event.target).hasClass("e-node-disable"))
                $(event.target).addClass("e-node-hover");
        },
        _mouseLeaveEvent: function (event) {
            if ($(event.target).hasClass("e-node-hover"))
                $(event.target).removeClass("e-node-hover");
        },

        _createSubNodesWhenLoadOnDemand: function (jsonData, element, mapper) {
            ej.isNullOrUndefined(mapper) && (mapper = this.model.fields);
            var customElement, imgSpan;
            var context = this;
            var idField = mapper.id;
            var textField = mapper.text;
            var parentIdField = mapper.parentId;
            var childField = mapper.childItems;
            var hasChildField = mapper.hasChild;
            var imgField = mapper.imageUrl;
            var imgAttribute = mapper.imageAttribute;
            var checkedField = mapper.isChecked;
            var spriteCssClass = mapper.spriteCssClass;
            var outerMainUl = ej.buildTag("ul.e-treeview-ul", "", { display: "none" });
            var proxy = this;
            $.each(jsonData, function (i, val) {
                var textElement = ej.buildTag("a.e-text CanSelect", val[textField], "", { href: "#" });
                context._on($(textElement), "mouseenter", context._mouseEnterEvent);
                context._on($(textElement), "mouseleave", context._mouseLeaveEvent);

                // Element to show expand, collapse image
                var exCollpasediv = ej.buildTag('div');
                //Span to show the images for Themes
                var span = ej.buildTag('span');
                if (val[childField] || val[hasChildField]) {
                    $(span).addClass('collapseimg');
                    $(exCollpasediv).addClass("e-icon e-plus");
                }
                else {
                    $(span).addClass('child');
                }

                //To add image
                if (val[imgField] != null) {
                    var imgTag = ej.buildTag('img.e-align');
                    val[imgField].substr(0, 1) == "~" ? imgTag.attr('src', val[imgField].substr(1, val[imgField].length)) : imgTag.attr('src', val[imgField]);
                    if (val[imgAttribute] != null)
                        proxy._setAttributes(val[imgAttribute], imgTag);
                }

                if (context.model.showCheckbox) {
                    //Create a checkbox
                    var index = $($(element).parents('li.e-item')[0]).find('div').find('>input[type=hidden]')[0].value;

                    var checkbox = ej.buildTag("input.nodecheckbox", "", {}, { type: "checkbox", name: "TreeView_Checkbox" + index + '_' + i + ".Checked" });

                    //Create a hidden Checkbox
                    var checkboxhdn = ej.buildTag("input", "", {}, { type: "hidden", name: "TreeView_Checkbox.Index", value: index + '_' + i });

                    if (val[checkedField] != null && val[checkedField])
                        $(checkbox).prop("checked", true);
                    $(checkbox).prop("value", val[checkedField] != null ? "False" : val[checkedField]);
                }
                //Outter div element 
                var outerdiv = ej.buildTag('div');
                $(outerdiv).append(exCollpasediv);
                if (context.model.showCheckbox) {
                    $(outerdiv).append(checkbox);
                    $(outerdiv).append(checkboxhdn);
                }
                $(outerdiv).append(span);
                if (val[spriteCssClass] != null) {
                    var imgSpan = ej.buildTag('spane.' + val[spriteCssClass]);
                    $(outerdiv).append(imgSpan);
                }
                $(outerdiv).append(imgTag);
                $(outerdiv).append(customElement);
                $(outerdiv).append(textElement);


                //Check for sub-tree view items and append them
                var outerli = ej.buildTag('li.e-item', "", "", { id: val[idField] });
                if (context.model.allowEditing)
                    outerli.addClass('AllowEdit');
                if (context.model.showCheckbox && val[checkedField] != null && val[checkedField])
                    outerli.addClass("ischecked");
                if (jsonData.length == (i + 1))
                    outerli.addClass('last');
                outerli.append($(outerdiv));

                var liHasul = $(outerli);
                if (val["ChildCount"] > 0) {
                    $($(liHasul).children().find('div')[0]).removeClass('e-icon e-minus').addClass('e-icon e-plus');
                }
                $(outerMainUl).append($(outerli));
            });
            this.element.find(" li#" + jsonData[0][parentIdField] + " ul ").remove();
            this.element.find(" li#" + jsonData[0][parentIdField] + "").append($(outerMainUl));
            var parentLi=this.element.find(" li#" + jsonData[0][parentIdField]);
            if($(parentLi.find(".nodecheckbox[type=checkbox]")).prop('checked'))
				this._nodeCheckedAction($(parentLi).find("span.e-chkbox-wrap").first());
            //var licoll = $(outerMainUl).find('li');
            this.model.showCheckbox && $(outerMainUl).find(".nodecheckbox").ejCheckBox({ cssClass: this.model.cssClass, change: this._checkedChange });
            $(element).removeClass("e-load");
            this._isCheckedAction();
            //this._expandCollapseAction(element);
            //this.waitingPopup.HidePopUp();
        },

        _createTreeElement: function (nodeText, selectedNode, nodeUrl) {
            var value;
            if (this.model.showCheckbox) {
                if (!ej.isNullOrUndefined(selectedNode)) {
                    if ($(selectedNode.parents('li.e-item')[0]).children('ul').length == 0)
                        value = $($(selectedNode.parents('li.e-item')[0]).find('div')[0]).find('>input[type=hidden]')[0].value + '.' + 0;
                    else {
                        var prevlivalue = $($(selectedNode.parents('li.e-item')[0]).children('ul').find('li').last().find('div').find('>input[type=hidden]')[0]).val();
                        var splitvalue = prevlivalue.split('.');
                        var indexvalue = parseInt(splitvalue[splitvalue.length - 1]) + 1;
                        var previndexvalue = prevlivalue.substring(0, (prevlivalue.length) - 1);
                        value = previndexvalue + indexvalue;
                    }
                }
                else {
                    var list = this.element.find(">li");
                    value = list.length + 1;
                }

                var checkbox = ej.buildTag("input.nodecheckbox", "", {}, { type: "checkbox", name: "TreeView_Checkbox" + value + ".Checked", value: "False" });

                //Create a hidden Checkbox
                var checkboxhdn = ej.buildTag("input", "", {}, { type: "hidden", name: "TreeView_Checkbox.Index", value: value });

            }
            var textElement = ej.buildTag('a.e-text CanSelect', nodeText, "", { href: "#" , id: (this._id + "_active") });            
            if (!ej.isNullOrUndefined(nodeUrl))
                textElement.attr("href", nodeUrl);
            var textNode = $(textElement);
            this._on(textNode, "mouseenter", this._mouseEnterEvent);
            this._on(textNode, "mouseleave", this._mouseLeaveEvent);
            //Span to show the images for Themes
            var span = ej.buildTag('span.child');

            // Element to show expand, collapse image
            var exCollpasediv = ej.buildTag('div', "", {}, { role: "presentation" });
            //Outter div element 
            var outerdiv = ej.buildTag('div', "", {}, { role: "presentation" });
            $(outerdiv).append(exCollpasediv);
            $(outerdiv).append(span);
            if (this.model.showCheckbox) {
                $(outerdiv).append(checkbox);
                $(outerdiv).append(checkboxhdn);
            }
            $(outerdiv).append(textElement);

            //Check for sub-tree view items and append them
            var outerli = ej.buildTag('li.e-item#' + nodeText, "", { role: "treeitem", tabindex: -1 });           
            if (this.model.allowEditing)
                outerli.addClass('AllowEdit');
            outerli.append($(outerdiv));

            return $(outerli);
        },
        _addExpandedNodes: function (index) {
            var _nodes = this.model.expandedNodes;
            this._removeNullInArray(_nodes);
            if ($.inArray(index, _nodes) == -1) {
                this.model.expandedNodes.push(index);
            }
        },

        _removeExpandedNodes: function (index) {
            var _nodes = this.model.expandedNodes;
            if ($.inArray(index, _nodes) > -1) {
                this.model.expandedNodes.splice($.inArray(index, _nodes), 1);
                _nodes.length == 0 && (_nodes.push(-1));
            }
        },

        //-------------------- Event Wire-up -------------------------//
        _wireEvents: function () {
            this._on(this.element, "click", this._ClickEventHandler);
            this._on(this.element.find(".e-text"), "mouseenter", this._mouseEnterEvent);
            this._on(this.element.find(".e-text"), "mouseleave", this._mouseLeaveEvent);
			if(this.model.allowEditing) this._allowEditable();
            this._on(this.element, this.model.expandOn, this._expandEventHandler);
            if(this.model.allowKeyboardNavigation) this._on(this.element,"keydown", this._KeyPress);
            this._on(this.element, "focus", this._onFocusHandler);
            this._enableDargDrop();
        },

        //-------------------- Event UnWire-up -------------------------//
        _unWireEvents: function () {
            this._off(this.element, "click");
            this._off(this.element.find(".e-text"), "mouseenter");
            this._off(this.element.find(".e-text"), "mouseleave");
            this._preventEditable();
            this._off(this.element, this.model.expandOn);
            if(this.model.allowKeyboardNavigation)  this._off(this.element, 'keydown');
            this._on(this.element, "focus");
        },

        //Darg and Drop Events

        _enableDargDrop: function () {
            if (this.model.allowDragAndDrop) {
                this._drag();
                if (this.model.allowDropChild)
                    this._childDrop();
                if (this.model.allowDropSibling)
                    this._siblingDrop();
            }
        },
		
		//Allow Editable option  on nodes
		
		_allowEditable: function()
		{			
                this._on($(document), 'click', this._documentClick);
                this._on(this.element.parent(), 'dblclick', this._inlineEdit);            
		},
		
		// Prevent Editable option on nodes
		
		_preventEditable: function()
		{
			this._off($(document), 'click');
            this._off(this.element.parent(), 'dblclick');
		},
        //--------------------- Client side Methods ----------------------//
        /**
        * To refresh the TreeView  
        * @alias refresh
		* @return jQuery		
        * @example 
        *   &lt;ul id="treeView"&gt;
        *    &lt;li&gt;Artwork
        *        &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *                &lt;ul&gt;
        *                    &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                    &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                    &lt;li&gt;Modern Painting&lt;/li&gt;
        *                    &lt;li&gt;Canvas Art&lt;/li&gt;
        *                    &lt;li&gt;Black white&lt;/li&gt;
        *                &lt;/ul&gt;
        *           &lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        *    &lt;li&gt;Books
        *        &lt;ul&gt;
        *            &lt;li&gt;Entertaining&lt;/li&gt;
        *            &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *    &lt;/li&gt;
        *    &lt;li&gt;Music
        *        &lt;ul&gt;
        *            &lt;li&gt;Mass&lt;/li&gt;
        *            &lt;li&gt;Folk&lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        *&lt;/ul&gt; <br> 
        * &lt;script&gt;
        * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.refresh(); // refresh the TreeView
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("refresh");        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        refresh: function () {
            this._unWireEvents();
            this._init();
        },
          /**
        * To expand all the TreeView nodes.
		* @alias expandAll
		* @return jQuery
        * @example 
        *   &lt;ul id="treeView"&gt;
        *    &lt;li&gt;Artwork
        *        &lt;ul&gt;
        *            &lt;li&gt;Abstract
        *                &lt;ul&gt;
        *                    &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                    &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                    &lt;li&gt;Modern Painting&lt;/li&gt;
        *                    &lt;li&gt;Canvas Art&lt;/li&gt;
        *                    &lt;li&gt;Black white&lt;/li&gt;
        *                &lt;/ul&gt;
        *            &lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        *    &lt;li&gt;Books
        *        &lt;ul&gt;
        *            &lt;li&gt;Entertaining&lt;/li&gt;
        *            &lt;li&gt;Design&lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        *    &lt;li&gt;Music
        *        &lt;ul&gt;
        *            &lt;li&gt;Mass&lt;/li&gt;
        *            &lt;li&gt;Folk&lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
        * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.expandAll(); // expandAll the TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("expandAll");        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        expandAll: function () {
            this.model.enabled && this._expandAll();
        },
        /**
        * To collapse all the TreeView nodes.
		* @alias collapseAll
		* @return jQuery
        * @example 
        *   &lt;ul id="treeView"&gt;
        *    &lt;li&gt;Artwork
        *        &lt;ul&gt;
        *            &lt;li&gt;Abstract
        *                &lt;ul&gt;
        *                    &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                    &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                    &lt;li&gt;Modern Painting&lt;/li&gt;
        *                    &lt;li&gt;Canvas Art&lt;/li&gt;
        *                    &lt;li&gt;Black white&lt;/li&gt;
        *                &lt;/ul&gt;
        *            &lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        *    &lt;li&gt;Books
        *        &lt;ul&gt;
        *            &lt;li&gt;Entertaining&lt;/li&gt;
        *            &lt;li&gt;Design&lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        *    &lt;li&gt;Music
        *        &lt;ul&gt;
        *            &lt;li&gt;Mass&lt;/li&gt;
        *            &lt;li&gt;Folk&lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
        * $("#treeView").ejTreeView();

        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.collapseAll(); // collapseAll the TreeView nodes
        * &lt;/script&gt;
        * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("collapseAll");        
        * &lt;/script&gt;
        * @memberof ejTreeView
        * @instance
        */
        collapseAll: function () {
            this.model.enabled && this._collapseAll();
        },
        /**
        * To check all the TreeView nodes.
	    * @alias checkAll
		* @return jQuery
        * @example 
        *   &lt;ul id="treeView"&gt;
        *    &lt;li&gt;Artwork
        *        &lt;ul&gt;
        *            &lt;li&gt;Abstract
        *                &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                    &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                    &lt;li&gt;Modern Painting&lt;/li&gt;
        *                    &lt;li&gt;Canvas Art&lt;/li&gt;
        *                    &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *            &lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        *    &lt;li&gt;Books
        *        &lt;ul&gt;
        *            &lt;li&gt;Entertaining&lt;/li&gt;
        *            &lt;li&gt;Design&lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        *    &lt;li&gt;Music
        *        &lt;ul&gt;
        *            &lt;li&gt;Mass&lt;/li&gt;
        *            &lt;li&gt;Folk&lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView({showCheckbox:true});
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.checkAll(); // checkAll the TreeView nodes
        * &lt;/script&gt;
        * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView({showCheckbox:true});
        * // Create TreeView
        * $("#treeView").ejTreeView("checkAll");        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        checkAll: function () {
            if (this.model.showCheckbox && this.model.enabled) {
                this._checkAll();
            }
        },
        /**
        * To uncheck all the TreeView nodes.
		* @alias unCheckAll
		* @return jQuery
        * @example 
        *   &lt;ul id="treeView"&gt;
        *    &lt;li&gt;Artwork
        *        &lt;ul&gt;
        *            &lt;li&gt;Abstract
        *                &lt;ul&gt;
        *                    &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                    &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                    &lt;li&gt;Modern Painting&lt;/li&gt;
        *                    &lt;li&gt;Canvas Art&lt;/li&gt;
        *                    &lt;li&gt;Black white&lt;/li&gt;
        *                &lt;/ul&gt;
        *            &lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        *    &lt;li&gt;Books
        *        &lt;ul&gt;
        *            &lt;li&gt;Entertaining&lt;/li&gt;
        *            &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *    &lt;/li&gt;
        *    &lt;li&gt;Music
        *        &lt;ul&gt;
        *            &lt;li&gt;Mass&lt;/li&gt;
        *            &lt;li&gt;Folk&lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView({showCheckbox:true});
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.unCheckAll(); // uncheckAll the TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView({showCheckbox:true});
        * // Create TreeView
        * $("#treeView").ejTreeView("unCheckAll");        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        unCheckAll: function () {
            if (this.model.showCheckbox && this.model.enabled) {
                this._unCheckAll();
            }
        },
           /**
        * To get the selected nodes in the TreeView.
		* @alias getSelectedNode
		* @return jQuery
        * @example 
        *   &lt;ul id="treeView"&gt;
        *    &lt;li&gt;Artwork
        *        &lt;ul&gt;
        *            &lt;li&gt;Abstract
        *                &lt;ul&gt;
        *                    &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                    &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                    &lt;li&gt;Modern Painting&lt;/li&gt;
        *                    &lt;li&gt;Canvas Art&lt;/li&gt;
        *                    &lt;li&gt;Black white&lt;/li&gt;
        *                &lt;/ul&gt;
        *            &lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        *    &lt;li&gt;Books
        *        &lt;ul&gt;
        *            &lt;li&gt;Entertaining&lt;/li&gt;
        *            &lt;li&gt;Design&lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        *    &lt;li&gt;Music
        *        &lt;ul&gt;
        *            &lt;li&gt;Mass&lt;/li&gt;
        *            &lt;li&gt;Folk&lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.getSelectedNode(); // getSelectedNode in  TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("getSelectedNode");        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        //Get Selected node
        getSelectedNode: function () {
            var selectedNodeElement = this.element.find('.e-active');
            var selectedNode = $($(selectedNodeElement).parents('li.e-item')[0]);
            return selectedNode;
        },
       /**
        * To get the text of the nodes in the TreeView.
		* @alias getText
		* @return string
		* @param {object} node  object of treeview node.
        * @example 
        *   &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *        &lt;ul&gt;
        *            &lt;li&gt;Abstract
        *                &lt;ul&gt;
        *                    &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                    &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                    &lt;li&gt;Modern Painting&lt;/li&gt;
        *                    &lt;li&gt;Canvas Art&lt;/li&gt;
        *                    &lt;li&gt;Black white&lt;/li&gt;
        *                &lt;/ul&gt;
        *            &lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        *    &lt;li id="book"&gt;Books
        *        &lt;ul&gt;
        *            &lt;li&gt;Entertaining&lt;/li&gt;
        *            &lt;li&gt;Design&lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        *    &lt;li&gt;Music
        *        &lt;ul&gt;
        *            &lt;li&gt;Mass&lt;/li&gt;
        *            &lt;li&gt;Folk&lt;/li&gt;
        *        &lt;/ul&gt;
        *    &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
        * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.getText($("#book")); // getText in  TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("getText",$("#book"));        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        getText: function (node) {
            if (ej.isNullOrUndefined(node)) return false;
            var nodeText = $($(node).find('a')[0]).text();
            return nodeText;
        },
               /**
        * To select  the node in the TreeView.
        * @alias selectNode
		* @return jQuery
		* @param {object} node  object of treeview node.
        * @example 
        *   &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
        * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.selectNode($("#book")); // selectNode in  TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("selectNode",$("#book"));        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        //Select the node
        selectNode: function (node) {
            var element;
            if (!ej.isNullOrUndefined(node) && this.model.enabled) {
                if ($(node).hasClass("e-text")) {
                    element = $(node);
                }
                else
                    element = $($(node).find(">div >a")[0]);
                this._nodeSelectionAction(element);
            }
        },
        /**
        * To unselect  the node in the TreeView.
	    * @alias unSelectNode
		* @return jQuery
		* @param {object} node  object of treeview node.
        * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *        &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
        * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.unselectNode($("#book")); // unSelectNode in  TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("unselectNode",$("#book"));        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        //unselected node
        unselectNode: function (node) {
            var element;
            if (!ej.isNullOrUndefined(node) && this.model.enabled) {
                if ($(node).hasClass("e-text")) {
                    element = $(node);
                }
                else
                    element = $($(node).find(">div >a")[0]);
                this._nodeUnSelectionAction(element);
            }
        },
        /**
        * To enable the node in the TreeView.
		* @alias enableNode
		* @return jQuery
		* @param {object} node  object of treeview node.
        * @example 
        *   &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *          &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="music"&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
        * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.disableNode($("#music"));
        * treeObj.disableNode($("#book"));
        * treeObj.enableNode($("#book")); // enableNode in  TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="music"&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView  
        * $("#treeView").ejTreeView("disableNode",$("#music")); 
        * $("#treeView").ejTreeView("disableNode",$("#book")); 
        * $("#treeView").ejTreeView("enableNode",$("#book"));        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        //Enable the node
        enableNode: function (node) {
            var element;
            if (!ej.isNullOrUndefined(node) && this.model.enabled) {
                if ($(node).hasClass("e-text")) {
                    element = $(node);
                }
                else
                    element = $($(node).find("a.e-text")[0]);
                this._nodeEnableAction(element);
                $(node).parent().find(".nodecheckbox").ejCheckBox("enable");
            }
        },
         /**
        * To disable the node in the TreeView.
		* @alias disableNode
		* @return jQuery
		* @param {object} node  object of treeview node.
        * @example 
        *   &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; 
        * &lt;script&gt;
        * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.disableNode($("#book")); // disableNode in  TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("disableNode",$("#book"));        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        //Disable node
        disableNode: function (node) {
            var element;
            if (!ej.isNullOrUndefined(node) && this.model.enabled) {
                if ($(node).hasClass("e-text")) {
                    element = $(node);
                }
                else
                    element = $($(node).find(">div >a")[0]);
                this._nodeDisableAction(element);
                $(node).find(".nodecheckbox").ejCheckBox("disable");
            }
        },
        
        addNodes: function (collection, targetNode) {
            if (collection && collection.length > 0) {
                var mapper = this.model.fields;

                for (var i = 0; i < collection.length; i++) {
                    var node = collection[i], text = node[mapper.text];

                    if (text) {
                        var id = node[mapper.id], pid = node[mapper.parentId],
                        url = node[mapper.linkAttribute] ? node[mapper.linkAttribute] : "#",
                        parent = (targetNode && targetNode.length != 0) ? targetNode : null;

                        if (ej.isNullOrUndefined(parent)) {
                            var tar = pid ? this.element.find("#" + pid) : null;
                            parent = (tar && tar.length != 0) ? tar.children("div").find("a") : null;
                        }
                        if (ej.isNullOrUndefined(parent)) continue;

                        var nodeElement = this._createTreeElement(text, null, url);
                        id ? nodeElement.attr("id", id) : nodeElement.removeAttr("id");
                        this._appendNode(parent, nodeElement);
                        nodeElement.find(".nodecheckbox").ejCheckBox({ cssClass: this.model.cssClass, change: this._checkedChange });
                        if (this.model.allowDragAndDrop) nodeElement.find("a").addClass("e-draggable e-droppable");
                    }
                }
            }
        },
         /**
        * To add Node in the TreeView.
		* @alias addNode
		* @return jQuery
		* @param {string} newNodeText  new Treeview Node Text
		* @param {string} nodeUrl  new Treeview node Url.
		* @param {Object} target  object of Tree view node.
        * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.addNode("NodeNew", "Folk"); // addNode in  TreeView nodes
        * &lt;/script&gt;
        * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("addNode","NodeNew", "Folk");        
        * &lt;/script&gt;
        * @memberof ejTreeView
        * @instance
        */
        //Add the node
        addNode: function (newNodeText, nodeUrl, targetNode) {
            if (this.model.enabled) {
                var outerLi = null;
                var innerUl = null;
                var element = this.element;
                var childCount = element.children().length;
                var selectedNode = ej.isNullOrUndefined(targetNode) ? element.find('.e-active') : targetNode;
                if (selectedNode.length == 0) {
                    if (childCount == 0 || element.children().children().length == 0)
                        innerUl = ej.buildTag('ul');
                    else
                        innerUl = element.children()[childCount - 1];
                    outerLi = this._createTreeElement(newNodeText, null, nodeUrl);
                    $(innerUl).append(outerLi);
                    this._appendNode(selectedNode, innerUl);
                    $(outerLi).find(".nodecheckbox").ejCheckBox({ cssClass: this.model.cssClass, change: this._checkedChange });
                }
                else {
                    this._expandNode($($(selectedNode).parents('li.e-item')[0]));
                    outerLi = this._createTreeElement(newNodeText, selectedNode, nodeUrl);
                    this._appendNode(selectedNode, outerLi);
                    this.model.showCheckbox && $(outerLi).find(".nodecheckbox").ejCheckBox({ cssClass: this.model.cssClass, change: this._checkedChange });
                }
                this._applyFirstLastChildClass();
                this._enableDargDrop();
                this._modifiCss();
            }
        },
          /**
        * To remove Node in the TreeView.
		* @alias removeNode
		* @return jQuery
		* @param {Object} element  object of Tree view node.
        * @example 
        *   &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                  &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *          &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.removeNode($("#book")); // removeNode in  TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("removeNode",$("#book"));        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        //Remove the node
        removeNode: function (node) {
            if (this.model.enabled) {
                if (!ej.isNullOrUndefined(node)) {
                    if ($(node).hasClass("e-text")) {
                        element = $(node);
                    }
                    else
                        element = $($(node).find(">div >a")[0]);
                }
                this._removeNode(element);
            }
        },
    /**
        * To getCheckedNodes in the TreeView.
	    * @alias getCheckedNodes
        * @return Object
        * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView({showCheckbox:true});
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
		*treeObj.checkNode($("#book"));
        * treeObj.getCheckedNodes(); // getAllCheckedNodes in  TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView({showCheckbox:true});
        * // Create TreeView
        * $("#treeView").ejTreeView("checkNode",$("#book"));
        * $("#treeView").ejTreeView("getCheckedNodes");        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        //Get all the checked  nodes
        getCheckedNodes: function () {
            var nodeCollection = this.element.find('input.nodecheckbox[value="True"]').closest('li');
            return nodeCollection;
        },
 /**
        * To Check particular node checkbox in TreeView.
		* @alias checkNode
		* @return jQuery
		* @param {Object} element  object of Tree view node.
        * @example 
        *   &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView({showCheckbox:true});
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.checkNode($("#book")); // checkNode in  TreeView nodes
        * &lt;/script&gt;
        * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView({showCheckbox:true});
        * // Create TreeView
        * $("#treeView").ejTreeView("checkNode",$("#book"));        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        //Check particular node checkbox
        checkNode: function (node) {
            if (!ej.isNullOrUndefined(node) && this.model.enabled) {
                this._nodeCheckedAction($(node).find("span.e-chkbox-wrap").first());
            }
        },
       /**
        * To Uncheck particular node checkbox in TreeView.
    	* @alias unCheckNode
		* @return jQuery
		* @param {Object} element  object of Tree view node.
        * @example 
        *   &lt;ul id="treeView"&gt;
        *  &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                  &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *      &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView({showCheckbox:true});
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
		* treeObj.checkAll();
        * treeObj.unCheckNode($("#book")); // uncheckNode in  TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("checkAll");
        * $("#treeView").ejTreeView("unCheckNode",$("#book"));        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        //UnCheck particular node textbox
        unCheckNode: function (node) {
            if (!ej.isNullOrUndefined(node) && this.model.enabled) {
                this._nodeUnCheckedAction($(node).find("span.e-chkbox-wrap").first());
            }
        },
         /**
        * To expandNode particular node  in TreeView.
		* @alias expandNode
		* @return jQuery
		* @param {Object} element  object of Tree view node.
        * @example 
        *   &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
        * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.collapseAll();
        * treeObj.expandNode($("#book")); // expandNode in  TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("collapseAll");
        * $("#treeView").ejTreeView("expandNode",$("#book"));        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        expandNode: function (node) {
            if (!ej.isNullOrUndefined(node) && this.model.enabled) {
                this._expandNode(node);
            }
        },
         /**
        * To collapseNode particular node  in TreeView.
		* @alias collapseNode
		* @return jQuery
		* @param {Object} element  object of Tree view node.
        * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li id="art"&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
		* treeObj.expandAll();
        * treeObj.collapseNode($("#art")); // collapseNode in  TreeView nodes
        * &lt;/script&gt;
         * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li id="art"&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("expandAll");
        * $("#treeView").ejTreeView("collapseNode",$("#art"));        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        //Collapses the selected node
        collapseNode: function (node) {
            if (!ej.isNullOrUndefined(node) && this.model.enabled) {
                this._collpaseNode(node);
            }
        },
      /**
        * To showNode particular node  in TreeView.
		* @alias showNode
		* @return jQuery
		* @param {Object} element  object of Tree view node.
        * @example 
        * &lt;ul id="treeView"&gt;
        *  &lt;li&gt;Artwork
        *      &lt;ul&gt;
        *          &lt;li&gt;Abstract
        *              &lt;ul&gt;
        *                  &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                  &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                  &lt;li&gt;Modern Painting&lt;/li&gt;
        *                  &lt;li&gt;Canvas Art&lt;/li&gt;
        *                  &lt;li&gt;Black white&lt;/li&gt;
        *              &lt;/ul&gt;
        *          &lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        *  &lt;li id="book"&gt;Books
        *      &lt;ul&gt;
        *          &lt;li&gt;Entertaining&lt;/li&gt;
        *          &lt;li&gt;Design&lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        *  &lt;li&gt;Music
        *      &lt;ul&gt;
        *          &lt;li&gt;Mass&lt;/li&gt;
        *          &lt;li&gt;Folk&lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.showNode($("#book")); // showNode in  TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("showNode",$("#book"));        
        * &lt;/script&gt;
        * @memberof ejTreeView
        * @instance
        */
        showNode: function (node) {
            if (!ej.isNullOrUndefined(node) && this.model.enabled) {
                node.css("visibility", "");
            }
        },
        /**
        * To hideNode particular node  in TreeView.
		* @alias hideNode
		* @return jQuery
		* @param {Object} element  object of Tree view node.
        * @example 
        *   &lt;ul id="treeView"&gt;
        *  &lt;li&gt;Artwork
        *      &lt;ul&gt;
        *          &lt;li&gt;Abstract
        *              &lt;ul&gt;
        *                  &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                  &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                  &lt;li&gt;Modern Painting&lt;/li&gt;
        *                  &lt;li&gt;Canvas Art&lt;/li&gt;
        *                  &lt;li&gt;Black white&lt;/li&gt;
        *              &lt;/ul&gt;
        *          &lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        *  &lt;li id="book"&gt;Books
        *      &lt;ul&gt;
        *          &lt;li&gt;Entertaining&lt;/li&gt;
        *          &lt;li&gt;Design&lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        *  &lt;li&gt;Music
        *      &lt;ul&gt;
        *          &lt;li&gt;Mass&lt;/li&gt;
        *          &lt;li&gt;Folk&lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        *&lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.hideNode($("#book")); // hideNode in  TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("hideNode",$("#book"));        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        hideNode: function (node) { 
            if (!ej.isNullOrUndefined(node) && this.model.enabled) {
                node.css("visibility", "hidden");
            }
        },
               /**
        * To show nodes  in TreeView.
	    * @alias show
		* @return jQuery
        * @example 
        *  &lt;ul id="treeView"&gt;
        *  &lt;li&gt;Artwork
        *      &lt;ul&gt;
        *          &lt;li&gt;Abstract
        *              &lt;ul&gt;
        *                  &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                  &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                  &lt;li&gt;Modern Painting&lt;/li&gt;
        *                  &lt;li&gt;Canvas Art&lt;/li&gt;
        *                  &lt;li&gt;Black white&lt;/li&gt;
        *              &lt;/ul&gt;
        *          &lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        *  &lt;li&gt;Books
        *      &lt;ul&gt;
        *          &lt;li&gt;Entertaining&lt;/li&gt;
        *          &lt;li&gt;Design&lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        *  &lt;li&gt;Music
        *      &lt;ul&gt;
        *          &lt;li&gt;Mass&lt;/li&gt;
        *          &lt;li&gt;Folk&lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.show(); // show the TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("show");        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        show: function () {
            /// <summary>To Show the TreeView control</summary>
            this.element.css("visibility", "");
        },
         /**
        * To show nodes  in TreeView.
		* @alias hide
		* @return jQuery
        * @example 
        *  &lt;ul id="treeView"&gt;
        *  &lt;li&gt;Artwork
        *      &lt;ul&gt;
        *          &lt;li&gt;Abstract
        *              &lt;ul&gt;
        *                  &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                  &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                  &lt;li&gt;Modern Painting&lt;/li&gt;
        *                  &lt;li&gt;Canvas Art&lt;/li&gt;
        *                  &lt;li&gt;Black white&lt;/li&gt;
        *              &lt;/ul&gt;
        *          &lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        *  &lt;li&gt;Books
        *      &lt;ul&gt;
        *          &lt;li&gt;Entertaining&lt;/li&gt;
        *          &lt;li&gt;Design&lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        *  &lt;li&gt;Music
        *      &lt;ul&gt;
        *          &lt;li&gt;Mass&lt;/li&gt;
        *          &lt;li&gt;Folk&lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.hide(); // hide the TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("hide");        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        hide: function () {
            /// <summary>To Hide the TreeView control</summary>
            this.element.css("visibility", "hidden");
        },
        /**
        * To retrive the checked status of the given TreeView node.
		* @alias isNodeChecked
		* @return jQuery
		* @param {Object} element  object of Tree view node.
        * @example 
        * &lt;ul id="treeView"&gt;
        *  &lt;li&gt;Artwork
        *      &lt;ul&gt;
        *          &lt;li&gt;Abstract
        *              &lt;ul&gt;
        *                  &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                  &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                  &lt;li&gt;Modern Painting&lt;/li&gt;
        *                  &lt;li&gt;Canvas Art&lt;/li&gt;
        *                  &lt;li&gt;Black white&lt;/li&gt;
        *              &lt;/ul&gt;
        *          &lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        *  &lt;li id="book"&gt;Books
        *      &lt;ul&gt;
        *          &lt;li&gt;Entertaining&lt;/li&gt;
        *          &lt;li&gt;Design&lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        *  &lt;li&gt;Music
        *      &lt;ul&gt;
        *          &lt;li&gt;Mass&lt;/li&gt;
        *          &lt;li&gt;Folk&lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView({showCheckbox:true});
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.isNodeChecked($("#book")); // isNodeChecked the TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView({showCheckbox:true});
        * // Create TreeView
        * $("#treeView").ejTreeView("isNodeChecked",$("#book"));        
        * &lt;/script&gt;
        * @memberof ejTreeView
        * @instance
        */
        isNodeChecked: function (element) {
            return this._isChecked($(element).find('input.nodecheckbox')[0]);
        },
        /**
        * To retrive the expand status of the given TreeView node.
		* @alias isExpanded
		* @return jQuery
		* @param {Object} element  object of Tree view node.
        * @example 
        *   &lt;ul id="treeView"&gt;
        *  &lt;li&gt;Artwork
        *      &lt;ul&gt;
        *          &lt;li&gt;Abstract
        *              &lt;ul&gt;
        *                  &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                  &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                  &lt;li&gt;Modern Painting&lt;/li&gt;
        *                  &lt;li&gt;Canvas Art&lt;/li&gt;
        *                 &lt;li&gt;Black white&lt;/li&gt;
        *              &lt;/ul&gt;
        *          &lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        *  &lt;li id="book"&gt;Books
        *      &lt;ul&gt;
        *          &lt;li&gt;Entertaining&lt;/li&gt;
        *          &lt;li&gt;Design&lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        *  &lt;li&gt;Music
        *      &lt;ul&gt;
        *          &lt;li&gt;Mass&lt;/li&gt;
        *          &lt;li&gt;Folk&lt;/li&gt;
        *      &lt;/ul&gt;
        *  &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.isExpanded($("#book")); // isExpanded the TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("isExpanded",$("#book"));        
        * &lt;/script&gt;
        * @memberof ejTreeView
        * @instance
        */
        isExpanded: function (element) {
            return this._isExpanded(element);
        },
       
        _isNodeExpanded: function (element) {
            if (!ej.isNullOrUndefined(element)) {
                var expandUl = $(element).children().filter('ul');
                var isExpanded = $(expandUl).is(':not(:hidden)');
                return isExpanded;
               
            }
        },
       /**
        * To retrive the  status of the collection of childs for the given TreeView node.
		* @alias hasChildNode
		* @return jQuery
		* @param {Object} element  object of element
		* @example 
        * &lt;ul id="treeView"&gt;
         * &lt;li&gt;Artwork
         *     &lt;ul&gt;
         *         &lt;li&gt;Abstract
         *             &lt;ul&gt;
         *                 &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
         *                &lt;li&gt;Creative Acrylic&lt;/li&gt;
         *                 &lt;li&gt;Modern Painting&lt;/li&gt;
         *              &lt;li&gt;Canvas Art&lt;/li&gt;
         *              &lt;li&gt;Black white&lt;/li&gt;
         *           &lt;/ul&gt;
         *        &lt;/li&gt;
         *    &lt;/ul&gt;
         * &lt;/li&gt;
         * &lt;li id="book"&gt;Books
         *    &lt;ul&gt;
         *         &lt;li&gt;Entertaining&lt;/li&gt;
         *        &lt;li&gt;Design&lt;/li&gt;
         *     &lt;/ul&gt;
         * &lt;/li&gt;
         * &lt;li&gt;Music
         *     &lt;ul&gt;
         *         &lt;li&gt;Mass&lt;/li&gt;
         *         &lt;li&gt;Folk&lt;/li&gt;
        *      &lt;/ul&gt;
        * &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
         * // Create TreeView
        * var treeObj = $("#treeView").data("ejTreeView");
        * treeObj.hasChildNode($("#book")); // hasChildNode the TreeView nodes
        * &lt;/script&gt;
          * @example 
        *  &lt;ul id="treeView"&gt;
        *   &lt;li&gt;Artwork
        *       &lt;ul&gt;
        *           &lt;li&gt;Abstract
        *               &lt;ul&gt;
        *                   &lt;li&gt;2 Acrylic Mediums&lt;/li&gt;
        *                   &lt;li&gt;Creative Acrylic&lt;/li&gt;
        *                   &lt;li&gt;Modern Painting&lt;/li&gt;
        *                   &lt;li&gt;Canvas Art&lt;/li&gt;
        *                   &lt;li&gt;Black white&lt;/li&gt;
        *               &lt;/ul&gt;
        *           &lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li id="book"&gt;Books
        *       &lt;ul&gt;
        *           &lt;li&gt;Entertaining&lt;/li&gt;
        *           &lt;li&gt;Design&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        *   &lt;li&gt;Music
        *       &lt;ul&gt;
        *           &lt;li&gt;Mass&lt;/li&gt;
        *           &lt;li&gt;Folk&lt;/li&gt;
        *       &lt;/ul&gt;
        *   &lt;/li&gt;
        * &lt;/ul&gt; <br> 
        * &lt;script&gt;
         * $("#treeView").ejTreeView();
        * // Create TreeView
        * $("#treeView").ejTreeView("hasChildNode",$("#book"));        
        * &lt;/script&gt;
        *@memberof ejTreeView
        * @instance
        */
        hasChildNode: function (element) {
            var child = false;
            if (!ej.isNullOrUndefined(element)) {
                child = $(element).children().length < 2 ? false : true;
            }
            return child;
        },
        //--------------------- Client side events ----------------------//

       	_onNodeExpand: function (data) {
                this._trigger("nodeExpand", data);            
        },
        _onNodeCollapse: function (data) {
                this._trigger("nodeCollapse", data);            
        },
        _onBeforeExpand: function (data) {
                return this._trigger("beforeExpand", data);            
        },
        _onBeforeCollapse: function (data) {
                return this._trigger("beforeCollapse", data);            
        },
        _onNodeSelect: function (data) {
                this._trigger("nodeSelect", data);            
        },
        _onChecked: function (element,args) {
            var liElement = $(element).parents("li").first();
            var nodeText = liElement.find(".e-text").first().text();
            var isChecked = this._isChecked(element);
            var evt = !ej.isNullOrUndefined(args) ? !ej.isNullOrUndefined(args.event) ? args.event : "" : "";
            this._addCheckNodes(this._liList.index(liElement));
            var data = { currentElement: liElement, value: nodeText, isChecked: isChecked, event: evt };
            if (this._isRender) this._trigger("nodeCheck", data);
        },
        _onUnChecked: function (element,args) {
            var liElement = $(element).parents("li").first();
			var nodeText = liElement.find(".e-text").first().text();
			var isUnChecked = this._isChecked(element);
			var evt = !ej.isNullOrUndefined(args) ? !ej.isNullOrUndefined(args.event) ? args.event : "" : "";
			this._removeCheckNodes(this._liList.index(liElement));
			var parent = liElement.parents("li").first();
			if (!liElement.parent().parent().is(this.element) && parent.length != 0) this._removeCheckNodes(this._liList.index(parent));
			var data = { currentElement: liElement, value: nodeText, isChecked: isUnChecked, event: evt };
			this._trigger("nodeUncheck", data);
        },
        _addCheckNodes: function (item) {
            var checkedArray = this.model.checkedNodes;
            this._removeNullInArray(checkedArray);
            !checkedArray instanceof Array && (checkedArray = []);
            if (checkedArray.indexOf(item) == -1) checkedArray.push(item);
        },
        _removeCheckNodes: function (item) {
            var checkedArray = this.model.checkedNodes;
            !checkedArray instanceof Array && (checkedArray = []);
            var i = checkedArray.indexOf(item);
            if (i != -1) {
                checkedArray.splice(i, 1);
                checkedArray.length == 0 && (checkedArray.push(-1));
            }
        },
        _removeNullInArray: function (array) {
            var i = array.indexOf(-1);
            if (i != -1) array.splice(i, 1);
        },
        _onDragStarts: function (data) {
                return this._trigger("nodeDragStart", data);            
        },
        _onDrag: function (data) {
                return this._trigger("nodeDrag", data);            
        },
        _onDragStop: function (data) {
                return this._trigger("nodeDragStop", data);            
        },
        _onDropped: function (data) {
                return this._trigger("nodeDropped", data);            
        },
        _onClick: function (data) {
            this._trigger("nodeClick", data);
        }
    });

    //mentions the recursive type of child
    //ej.TreeView.prototype.defaults.fields.child = ej.TreeView.prototype.defaults.fields;
    //ej.TreeView.prototype.dataTypes.fields.child = ej.TreeView.prototype.dataTypes.fields;

})(jQuery, Syncfusion);;
/*!
*  filename: ej.uploadbox.js
*  version : 12.1
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
/*global _comma_separated_list_of_variables_*/

(function ($, ej, undefined) {
    /**
* @namespace ej
* @class ejUploadbox
* @requires jQuery
* @requires jquery.easing.1.3.min.js
* @requires ej.core.js
* @requires ej.uploadbox.js
* @requires ej.dialog.js
* @requires ej.scroller.js
* @requires ej.draggable.js

* @classdesc Custom Design for Html Uploadbox control.
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* // Create Uploadbox
* $('#uploadbox1').ejUploadbox(); 	
* &lt;/script&gt;
*/
    // Example plugin creation code
    // ejSample is the plugin name 
    // "ej.Sample" is "namespace.className" will hold functions and properties

    ej.widget("ejUploadbox", "ej.Uploadbox", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _setFirst: false,
        //Root Css Class
        _rootCSS: "e-uploadbox",

        // default model
        defaults: {
            /// <summary>This Contains default property of upload button </summary>
            /**		
* Specifies the text content for Uploadbox browse button while initialization.
* @default "Browse"
* @type {string}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set  browseButtonText API value 
* 	$("#uploadbox1").ejUploadbox({ buttonText:{ browse:"Choose File", upload:"Upload the File", cancel:"Cancel the Upload"}});	
* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            buttonText: {
                /**		
                * Sets the text for the Browse button.
                * @alias ejUploadbox#buttonText->browse
                * @type String
                * @example 
                * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * //To set buttonText API during initialization  
                * 	$("#uploadbox1").ejUploadbox({ buttonText: { browse: "Choose File" }});
                * &lt;/script&gt;
                * @memberof ejUploadbox#buttonText
                * @instance
                */
                browse: "Browse",
                /**		
                * Sets the text for the Upload button inside the dialog popup.
                * @alias ejUploadbox#buttonText->upload
                * @type String
                * @example 
                * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * //To set buttonText API during initialization  
                * 	$("#uploadbox1").ejUploadbox({ buttonText: { upload: "Upload the File" }});
                * &lt;/script&gt;
                * @memberof ejUploadbox#buttonText
                * @instance
                */
                upload: "Upload",
                /**		
                * Sets the text for the Cancel button inside the dialog popup.
                * @alias ejUploadbox#buttonText->cancel
                * @type String
                * @example 
                * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * //To set buttonText API during initialization  
                * 	$("#uploadbox1").ejUploadbox({ buttonText: { cancel: "Cancel the Upload" }});
                * &lt;/script&gt;
                * @memberof ejUploadbox#buttonText
                * @instance
                */
                cancel: "Cancel",
            },
            /**
            * Sets the text for the inside the dialog popup.
            * @default UploadBox
            * @type {string}
            * @example 
            * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * //To set  dialogText API value during initialization
            * 	$("#uploadbox1").ejUploadbox({ dialogText:{title:"Upload File List",name:"File Name",size:"File Size",status:"File Status" }});
            * &lt;/script&gt;
            * @memberof ejUploadbox
            * @instance
            */
            dialogText: {
                /**		
                * Sets the title text dialog popup.
                * @alias ejUploadbox#dialogText->cancel
                * @type String
                * @example 
                * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * //To set buttonText API during initialization  
                * 	$("#uploadbox1").ejUploadbox({ dialogText: { title: "Upload Box" }});
                * &lt;/script&gt;
                * @memberof ejUploadbox#dialogText
                * @instance
                */
                title: "Upload Box",
                /**		
                * Sets the Name text for the dialog popup.
                * @alias ejUploadbox#dialogText->cancel
                * @type String
                * @example 
                * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * //To set buttonText API during initialization  
                * 	$("#uploadbox1").ejUploadbox({ dialogText: { name: "Name" }});
                * &lt;/script&gt;
                * @memberof ejUploadbox#dialogText
                * @instance
                */
                name: "Name",
                /**		
                * Sets the Size text for dialog popup.
                * @alias ejUploadbox#dialogText->cancel
                * @type String
                * @example 
                * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * //To set buttonText API during initialization  
                * 	$("#uploadbox1").ejUploadbox({ dialogText: { size: "Size" }});
                * &lt;/script&gt;
                * @memberof ejUploadbox#dialogText
                * @instance
                */
                size: "Size",
                /**		
                * Sets the Status text for dialog popup.
                * @alias ejUploadbox#dialogText->cancel
                * @type String
                * @example 
                * &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * //To set buttonText API during initialization  
                * 	$("#uploadbox1").ejUploadbox({ dialogText: { status: "Status" }});
                * &lt;/script&gt;
                * @memberof ejUploadbox#dialogText
                * @instance
                */
                status: "Status"
            },
            /**		
* Sets the culture in uploadbox. 
* @default en-US
* @type {string}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set  asyncUpload API value during initialization
* 	$("#uploadbox1").ejUploadbox({ locale: vi-VN });	
* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            locale: "en-US",
            /**		
* Uploadbox supports both synchronous and asynchronous upload. This can be achieved by this property asyncUpload.
* @default true
* @type {boolean}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set  asyncUpload API value during initialization
* 	$("#uploadbox1").ejUploadbox({ asyncUpload: false });	
 
* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            asyncUpload: true,
            /**		
* Enables or disables Uploadbox based on boolean value.
* @default true
* @type {boolean}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set enabled API value during initialization
* 	$("#uploadbox1").ejUploadbox({ enabled: false });	

* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            enabled: true,
				/**		
				* Enables to select multiple files
				* @default false
				* @type {boolean}
				* @example 
				* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
				* &lt;script&gt;
				* //To set multipleFilesSelection API value during initialization
				* 	$("#uploadbox1").ejUploadbox({ multipleFilesSelection: false });
				* &lt;/script&gt;	
				* @memberof ejUploadbox
				* @instance
				*/
            	
            multipleFilesSelection: false,
            /**		
* Uploadbox supports auto uploading of files after the file selection is done.The auto upload is performed if autoUpload is set to true.   
* @default false
* @type {boolean}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set autoUpload API value during initialization
* 	$("#uploadbox1").ejUploadbox({ autoUpload: true });	

* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            autoUpload: false,
            /**		
* Specifies to display the file details of files while selected for uploading can be done when showFileDetails set to true.  
* @default true
* @type {boolean}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set showFileDetails API value during initialization
* 	$("#uploadbox1").ejUploadbox({ showFileDetails: false });	

* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            showFileDetails: true,
				/**		
				* Specifies the file extension to allow for uploading the file while initialization. This could be mentioned in string format.  
				* @default ""
				* @type {string}
				* @example 
				* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
				* &lt;script&gt;
				* //To set extensionsAllow API value during initialization
				* 	$("#uploadbox1").ejUploadbox({ extensionsAllow: ".zip"  });	
				* &lt;/script&gt;	
				* @memberof ejUploadbox
				* @instance
				*/

            extensionsAllow: "",
                /**		
				* Specifies the file extension to deny for uploading the file while initialization. This could be mentioned in string format.  
				* @default ""
				* @type {string}
				* @example 
				* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
				* &lt;script&gt;
				* //To set extensionsDeny API value during initialization
				* 	$("#uploadbox1").ejUploadbox({ extensionsDeny: ".zip"  });	
				* &lt;/script&gt;	
				* @memberof ejUploadbox
				* @instance
				*/
            extensionsDeny: "",
            /**		
* Specifies the save action which has to be performed after the file is pushed for uploading. Here we have to mention the server address which has to perform this action.  
* @default ""
* @type {string}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set saveUrl API value during initialization
* 	$("#uploadbox1").ejUploadbox({ saveUrl: "http://js.syncfusion.com/demos/beta/saveFiles.ashx"});	

* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            saveUrl: "",
            /**		
* Specifies the remove action which has to be performed after the file uploading is completed. Here we have to mention the server address which has to perform this action.  
* @default ""
* @type {string}
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //To set removeUrl API value during initialization
* 	$("#uploadbox1").ejUploadbox({ removeUrl: "http://js.syncfusion.com/demos/beta/removeFiles.ashx"});	

* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
            removeUrl: "",
				/**		
				* Set the root class for Uploadbox control theme. This cssClass  API helps to use custom skinning option for Uploadbox control.   
				* @default ""
				* @type {string}
				* @example 
				* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
				* &lt;script&gt;
				* //To set cssClass  API value during initialization
				* 	$("#uploadbox1").ejUploadbox({ cssClass : "gradient-lime"});	
				* &lt;/script&gt;	
				* @memberof ejUploadbox
				* @instance
				*/

            cssClass : "",
                /**		
				* Specifies the Right to Left direction property for Uploadbox control.   
				* @default false
				* @type {boolean}
				* @example 
				* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
				* &lt;script&gt;
				* //To set enableRTL API value during initialization
				* 	$("#uploadbox1").ejUploadbox({ enableRTL: true});	
				* &lt;/script&gt;	
				* @memberof ejUploadbox
				* @instance
				*/
            enableRTL: false,
            /**     
* Fires when Uploadbox control is created.
* @event
* @name ejUploadbox#create	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //create event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    create: function (args) {}
* });   
 
* &lt;/script&gt;   
* @memberof ejUploadbox
* @instance
*/
            create: null,
            /**     
* Fires when the file is selected for upload successfully.
* @event
* @name ejUploadbox#fileSelect	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @example
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt; 
* //fileSelect event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    fileSelect: function (args) {}
* });  
 
* &lt;/script&gt;    
* @memberof ejUploadbox
* @instance
*/
            fileSelect: null,
            /**     
* Fires when the upload progress begins.
* @event
* @name ejUploadbox#begin	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //begin event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    begin: function (args) {}
* });   
 
* &lt;/script&gt;   
* @memberof ejUploadbox
* @instance
*/
            begin: null,
            /**     
* Fires when the upload progress is cancelled.
* @event
* @name ejUploadbox#cancel	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //cancel event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    cancel: function (args) {}
* });

* &lt;/script&gt;     
* @memberof ejUploadbox
* @instance
*/
            cancel: null,
            /**     
* Fires when the file upload progress is completed.
* @event
* @name ejUploadbox#complete	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @param {object}  argument.files returns file entries and its details
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //complete event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    complete: function (args) {}
* });   

* &lt;/script&gt;   
* @memberof ejUploadbox
* @instance
*/
            complete: null,
            /**     
* Fires when the uploaded file is removed successfully.
* @event
* @name ejUploadbox#remove	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @param {object}  argument.status returns the file details of the file object
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //remove event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    remove: function (args) {}
* });  
 
* &lt;/script&gt;    
* @memberof ejUploadbox
* @instance
*/
            remove: null,
            /**     
* Fires when the Upload process ends in Error.
* @event
* @name ejUploadbox#error	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @param {string}  argument.action returns the action name
* @param {object}  argument.files returns the file details of the file uploaded
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //error event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    error: function (args) {}
* });  

* &lt;/script&gt;    
* @memberof ejUploadbox
* @instance
*/
            error: null,
            /**     
* Fires when Uploadbox control is destroyed.
* @event
* @name ejUploadbox#destroy	
* @param {Object} argument Event parameters from Uploadbox     
* @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
* @param {object}  argument.model returns the Uploadbox model
* @param {string}  argument.type returns the name of the event.
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* //destroy event for Uploadbox
* $("#uploadbox1").ejUploadbox({
*    destroy: function (args) {}
* });  

* &lt;/script&gt;    
* @memberof ejUploadbox
* @instance
*/
            destroy: null
        },
        /**
* Specify the data types for default properties 
* @private
*/
        //Data Types
        dataTypes: {
            buttonText: "data",
            dialogText: "data",
            disbled: "boolean",
            multipleFilesSelection: "boolean",
            autoUpload: "boolean",
            showFileDetails: "boolean",
            extensionsAllow: "string",
            extensionsDeny: "string",
            saveUrl: "string",
            removeUrl: "string",
            cssClass : "string",
            enableRTL: "boolean"
        },
        // sample public function
        //Disables the upload box
        /**
* To disable the Uploadbox control  
* @return jQuery
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* // Disable Uploadbox
* $("#uploadbox1").ejUploadbox();
* var uploadObj = $("#uploadbox1").data("ejUploadbox");
* uploadObj.disable(); // disable the Uploadbox
* &lt;/script&gt;
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* // disable the Uploadbox
* $("#uploadbox1").ejUploadbox();
* $("#uploadbox1").ejUploadbox("disable");	
* &lt;/script&gt;
*@memberof ejUploadbox
* @instance
*/
        disable: function () {
            /// <summary>This will disable the upload button </summary>
            this.element.addClass("e-disable");
            this.model.enabled = false;
        },
        /**
* To enable the Uploadbox control  
* @return jQuery
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* // enable Uploadbox
* $("#uploadbox1").ejUploadbox();
* var uploadObj = $("#uploadbox1").data("ejUploadbox");
* uploadObj.enable(); // enable the Uploadbox
* &lt;/script&gt;
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* // enable the Uploadbox
* $("#uploadbox1").ejUploadbox();
* $("#uploadbox1").ejUploadbox("enable");	
* &lt;/script&gt;
*@memberof ejUploadbox
* @instance
*/
        enable: function () {
            /// <summary>This will enable upload button </summary>
            if (this.element.hasClass("e-disable")) {
                this.element.removeClass("e-disable");
                this.model.enabled = true;
            }
        },
        // constructor function
        /**
* Create the Uploadbox widget
* @private
*/
        _init: function () {
            /// <summary>This will initialize upload button </summary>
            this.s = ej.browserInfo();
            this._initialize();
            this._wireEvents();
            /*Sync Uploads*/
            if (!this.model.asyncUpload) {
                this._initObjectsSyncUpload();
            }
            //disable status
            this._controlStatus(this.model.enabled);
            this._buttonText(this.model.buttonText);
        },
        /**
* To configure the properties at runtime using SetModel		
* @private
*/
        _setModel: function (options) {
            if (!(this.model.enabled) && ej.isNullOrUndefined(options["enabled"])) return false;
            var option;
            for (option in options) {
                switch (option) {
                    case "buttonText":
                        this._buttonText(options[option]);
                        break;
                    case "dialogText":
                        this._dialogText(options[option]);
                        break;
                    case "cssClass ":
                        this._setSkin(options[option]);
                        break;
                    case "enableRTL":
                        this._setRTL(options[option]);
                        break;
                    case "enabled":
                        this._controlStatus(options[option]);
                        break;
                    case "locale":
                        this.model.locale = options[option];
                        this._buttonText(ej.Uploadbox.Locale[this.model.locale].buttonText);
                        this._dialogText(ej.Uploadbox.Locale[this.model.locale].dialogText);
                        break;
                }
            }
        },
        /**
* To ensure the status of the control;either enabled or disabled	
* @private
*/
        _controlStatus: function (value) {
            //disable status
            value != true ? this.disable() : this.enable();
        },
        /**
* To set rtl property if enabled	
* @private
*/
        _setRTL: function (val) {
            if (val) {
                this.element.addClass("e-rtl");
                if (this.s.name == "msie") {
                    this.inputupload.css('right', '-153px');
                }
            } else {
                this.element.removeClass("e-rtl");
                if (this.s.name == "msie") {
                    this.inputupload.css('right', '0px');
                }
            }
            if (this.updialog) this.updialog.ejDialog({ enableRTL: val });
        },
        _getLocalizedLabels: function (property) {
            var textType;
            if (property == "browse" || property == "upload" || property == "cancel")
                textType = "buttonText";
            else
                textType = "dialogText";
            return (ej.Uploadbox.Locale[this.model.locale] === undefined || ej.Uploadbox.Locale[this.model.locale][property] === undefined) ?
            ej.Uploadbox.Locale[this.model.locale][textType][property] :
            ej.Uploadbox.Locale[this.model.locale][property];

        },
        /**
* To set the Display Text to Buttons.
* @private
*/
        _buttonText: function (data) {
            $.extend(this.model.buttonText, data);
            this.buttondiv.val(this.model.buttonText.browse);
            this.element.find(".e-file-upload .e-uploadbtn").html(this.model.buttonText.upload);
            this.element.find(".e-file-upload .e-uploadclosebtn").html(this.model.buttonText.cancel);
        },
        /**
* To set the Text to Dialog popup.
* @private
*/
        _dialogText: function (data) {
            $.extend(this.model.dialogText, data);
            if (!(this.diaObj == undefined))
                this.diaObj.option('title', this.model.dialogText.title);
            $('.e-head-content .e-head-name').html(this.model.dialogText.name);
            $('.e-head-content .e-head-size').html(this.model.dialogText.size);
            $('.e-head-content .e-head-status').html(this.model.dialogText.status);
        },
        // all events bound using this._on will be unbind automatically
        /**
* destroy the Upload control
* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
* @alias destroy
* @return jQuery
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* // Destroy Upload
* $("#uploadbox1").ejUploadbox();
* var uploadObj = $("#uploadbox1").data("ejUploadbox");
* uploadObj.destroy(); // destroy the Upload control
* &lt;/script&gt;
* @example 
* &lt;div id="uploadbox1"&gt;&lt;/div&gt; <br> 
* &lt;script&gt;
* // destroy the Upload control
* $("#uploadbox1").ejUploadbox();
* $("#uploadbox1").ejUploadbox("destroy");	
* &lt;/script&gt;
* @memberof ejUploadbox
* @instance
*/
        _destroy: function () {
            /// <summary>This will destroy the  upload button </summary>
            if (this.element.hasClass("e-uploadbox")) {
                this.element.removeClass("e-uploadbox e-widget");
                this.element.empty();
            }
        },
        /**
* To set custom skin theme if cssClass  property is enabled.
* @private
*/
        _setSkin: function (skin) {
            this.element.removeClass(this.model.cssClass );
            this.element.addClass(skin);
        },
        /**
* To initialize the Uploadbox control	
* @private
*/
        //initialize the control
        _initialize: function () {
            /// <summary>This will initialize upload button </summary>
            /*Upload Control*/
            this.control = this.element[0];
            this.element.addClass("e-widget " + this.model.cssClass );
            this.innerdiv = ej.buildTag('div.e-selectpart e-select');
            this.element.append(this.innerdiv);
            this.buttondiv = ej.buildTag('input.e-inputbtn e-btn#' + this.control.id + '_SelectButton', '', {}, { type: 'button', value: this._getLocalizedLabels("browse") });
            this.inputupload = ej.buildTag('input.e-uploadinput', "", {}, { type: 'file', name: this.control.id });
            if (this.model.multipleFilesSelection) {
                this.inputupload.attr('multiple', 'multiple');
            }
            this.innerdiv.append(this.buttondiv);
            this.innerdiv.append(this.inputupload);
            this._Selector = this.buttondiv[0];
            this._setRTL(this.model.enableRTL);
            this.Uploadframes = []; //For IFrame
            this.UploadForms = [];
            this.UploadType = this._isXhrSupported() ? "Xhr" : "IFrame";
           
            
        },
        //Wiring Events
        /**
* Wiring the events to Uploadbox control		
* @private
*/
        _wireEvents: function () {
            /// <summary>This will wire events of  upload button </summary>
            this._on(this.element, "click", this._disableclickselect);
            this._bindInputChangeEvent();
        },
        // disable click of select button.
        /**
* To prevent click action on disable state		
* @private
*/
        _disableclickselect: function (e) {
            if (this.element.hasClass("e-disable")) {
                e.preventDefault();
            }
        },
        //Bind input change function
        /**
* This will bind input change event of upload button 	
* @private
*/
        _bindInputChangeEvent: function () {
            //file selection changed event
            this._on(this.inputupload, "change", this._inputValueChange);
        },
        //Internal Events 
        /**
* This will bind input value change event of upload button 	
* @private
*/
        _inputValueChange: function (e) {
            var input, files;
            input = $(e.target);
            this.element.find(".e-uploadbtn").removeAttr('disabled').removeClass('e-disable');
            files = this._getInputFileInfo(input);
            this._trigger("fileSelect");
            if (this._isAllowed(files)) {
                if (!this.model.asyncUpload) {
                    this._onSelectSyncUpload(e); //Sync Upload
                } else {
                    if (this.UploadType == "Xhr") {
                        this._onXhrSelect(e); //removed uploadcore // For XHR Upload
                    } else {
                        this._onSelectIFrame(e); //For Iframe
                    }
                }
            }
        },
        // When Auto upload is false
        /**
* This will fire on upload button	
* @private
*/
        __uploadButtonClick: function (e) {
            //removed uploadcore
            if (this.UploadType == "Xhr") {
                this._xhrOnUploadButtonClick(e); // Xhr Upload
            } else {
                this._onUploadButtonClickIFrame(e); //Iframe Upload
            }
            $(e.target).attr('disabled','disabled').addClass('e-disable');
        },
        /**
* This will fire the upload button
* @private
*/
        _actionClick: function (e) {
            var targetAction, fileItem, file;
            targetAction = $(e.target);
            fileItem = targetAction.closest(".e-upload-file");
            file = $(fileItem).data("file");
            if (targetAction.hasClass("e-file-delete")) {
                //Trigger on Remove hanlder
                this._trigger("remove", { fileStatus: file });
                //removed uploadcore
                if (this.UploadType == "Xhr") {
                    this._xhrOnRemove(e, fileItem); //XHr Remove
                } else {
                    this._onRemoveIFrame(e, fileItem); //IFrame File Upload
                }
            } else if (targetAction.hasClass("e-file-cancel")) {
                //Trigger on Cancel hanlder
                this._trigger("cancel", { fileStatus: file }); //removed uploadcore
                if (!this.model.asyncUpload) {
                    this._onCancelSyncUpload(e, fileItem); //sync
                } else {
                    if (this.UploadType == "Xhr") {
                        this._xhrOnCancel(e, fileItem); //Xhr Cancel Item
                    } else {
                        this._onCancelIFrame(e, fileItem); //IFrame Cancel Item
                    }
                }
            } else if (targetAction.hasClass("e-file-retry")) {//removed uploadcore
                if (this.UploadType == "Xhr") {
                    this._xhrOnRetry(e, fileItem); //xhr remove
                } else {
                    this._onRetryIFrame(e, fileItem); //IFrame Remove
                }
            }

        },
        /**
* This Remove file entry upload button 
* @private
*/
        _removeFileEntry: function (file) {
            file.remove();
        },
        // Internal Methods
        /**
* This will fire is on file upload button 
* @private
*/
        _isFileUpload: function (fileEntry) {
            var actiondiv = $(fileEntry).find("div.e-icon");
            return actiondiv.is(".e-file-cancel");
        },
        /*Supporting Browsers */
        /**
* Validates upload type is xhr or not
* @private
*/
        _isXhrSupported: function () {
            return (((this.s.name == "msie" && parseInt(this.s.version) < 9) || ((this.s.name == "safari" && this.s.name == "chrome") && this.s.version == "536")) ? false : (typeof (FormData) != "undefined") && (typeof (File) != "undefined"));
        },
        /*Getting File Details*/
        /**
* To get the file details of the uploaded file
* @private
*/
        _getFileName: function (input) {
            /// <summary>This will get file name in upload button </summary>
            return $.map(this._getAllFileInfo(input), function (file) {
                return file.name;
            }).join(", ");
        },
        /**
* To get the file size of the uploaded file
* @private
*/
        _getFileSize: function (input) {
            /// <summary>This will get file size in upload button </summary>
            var tempProxy = this;
            return $.map(this._getAllFileInfo(input), function (file) {
                return tempProxy._formatSize(file.size);
            }).join(", ");
        },
        /**
* Pushes the uploaded file in uplaod dialog box
* @private
*/
        _pushFile: function (files, datapart) {
            /// <summary>This will push file in upload button </summary>
            var fileListDetails, addedFile, actionlist, i, action, diaObj, addedheading;
            addedheading = $("<div class='e-head-content'><div class='e-file-head e-head-name'>" + this._getLocalizedLabels("name") + "</div><div class='e-file-head e-head-size'>" + this._getLocalizedLabels("size") + "</div><div class='e-file-head e-head-status'>" + this._getLocalizedLabels("status") + "</div></div>");
            filedialog = this.updialog;
            if (filedialog && filedialog.length != 0) {
                if (this.model.showFileDetails) {
                    this.diaObj.open();
                }
            }
            else {
                this.updialog = ej.buildTag('div.uploaddialog#' + this.element[0].id + '_dialog', "", {}, { 'title': this._getLocalizedLabels("title") });
                this.element.append(this.updialog);
            }
            fileListDetails = this.element.find(".e-ul"); /// <reference path="IframeUpload.js" />
            if (fileListDetails.length == 0) {
                addedheading.appendTo(this.updialog);
                fileListDetails = ej.buildTag('ul.e-ul').appendTo(this.updialog);
                fileListActions = ej.buildTag('div.e-file-upload').appendTo(this.updialog);
                dialogActions = ej.buildTag('button.e-uploadclosebtn e-btn e-select', this._getLocalizedLabels("cancel"), {}, { type: 'button' }).appendTo(fileListActions);
                this._on(dialogActions, "click", this._dialogclose);
            }
            var xpos = (this.element.offset().left + this.element.width()) / 3, ypos = this.element.offset().top;
            this.updialog.ejDialog({ showOnInit: false, width: 510, cssClass: this.model.cssClass, close: $.proxy(this._uploadFileListDelete, this), position: { X: xpos, Y: ypos }, enableRTL: this.model.enableRTL, content: "#" + this.element[0].id, enableResize: false });
            this.diaObj = this.updialog.data('ejDialog');
            if (!this.model.multipleFilesSelection) {
                this.element.find(".e-ul>.e-upload-file").remove();
            }
            for (i = 0; i < files.length; i++) {//localization can be given for not started
                /*things to be redefined*/
                addedFile = $("<li class='e-upload-file'><div class='e-file-list'>" +
                    "<div class='e-file-progress e-file-view'><div class='e-file-name e-file-view'><span class='e-file-name-txt'>"
                    + files[i].name + "</span></div></div><div class='e-file-size e-file-view'><span class='e-file-name-txt'>"
                    + files[i].size + "</span></div>" +
                    "<div class='e-file-percentage e-file-view'><div class='e-file-progress-bar'><div class='e-file-progress-status'></div></div></div><div class='e-action-perform'><div class='e-icon e-file-view'></div></div></div></li>").appendTo(fileListDetails).data(datapart);

                if (this._getFileSize(files[i]).toString().toLowerCase() == "nankb" || files[i].size == null) {
                    addedFile.find(".e-file-size").remove();
                }
                action = "cancel";
                addedFile.find(".e-icon").remove().addClass(action.toString());
                if (action == "cancel") {
                    actionlist = ej.buildTag('div.e-icon e-file-cancel', '', {}, { title: 'cancel' });
                } else if (action == "remove") {
                    actionlist = ej.buildTag('div.e-icon e-file-delete', '', {}, { title: 'remove' });
                } else if (action == "retry") {
                    actionlist = ej.buildTag('div.e-icon e-file-retry', '', {}, { title: 'retry' });
                }
                //appending list
                addedFile.find(".e-action-perform").append(actionlist);
                //FileList Click
                this._on(actionlist, "click", this._actionClick);
            }
            if (this.model.showFileDetails) {
                this.diaObj.open();
            }
            this._buttonText(this.model.buttonText);
            this._dialogText(this.model.dialogText);
            return addedFile;
        },
        /**
* This will push file details in upload button
* @private
*/
        _pushFileDetails: function (files) {
            var fileListDetails, addedFile, actionlist, i, action, me, diaObj, addedheading;
            addedheading = $("<div class='e-head-content'><div class='e-file-head e-head-name'>" + this._getLocalizedLabels("name") + "</div><div class='e-file-head e-head-size'>" + this._getLocalizedLabels("size") + "</div><div class='e-file-head e-head-status'>" + this._getLocalizedLabels("status") + "</div></div>");
            me = this;
            filedialog = this.updialog;
            if (filedialog && filedialog.length != 0) {
                if (this.model.showFileDetails) {
                    me.diaObj.open();
                }
            } else {
                this.updialog = ej.buildTag('div.uploaddialog#' + this.element[0].id + '_dialog', "", {}, { 'title': this._getLocalizedLabels("title") });
                this.element.append(this.updialog);
            }
            var fileListDetails, addedFile;
            fileListDetails = this.element.find(".e-ul");
            if (fileListDetails.length == 0) {
                addedheading.appendTo(this.updialog);
                fileListDetails = ej.buildTag('ul.e-ul').appendTo(this.updialog);
                fileListActions = ej.buildTag('div.e-file-upload').appendTo(this.updialog);
                dialogActions = ej.buildTag('button.e-uploadclosebtn e-btn e-select', this._getLocalizedLabels("cancel"), {}, { type: 'button' }).appendTo(fileListActions);
                this._on(dialogActions, "click", this._dialogclose);
            }
            var xpos = (this.element.offset().left + this.element.width()) / 3, ypos = this.element.offset().top + this.element.height();
            if (!this.model.multipleFilesSelection) {
                this.element.find(".e-ul>.e-upload-file").remove();
            }
            addedFile = $("<li class='e-upload-file'><div class='e-file-list'><div class='e-file-progress e-file-view'><div class='e-file-name e-file-view'><span class='e-file-name-txt'>" + files.name + "</span></div></div><div class='e-file-size e-file-view'><span class='e-file-name-txt'>" + this._formatSize(0) + "\\" + this._formatSize(files.size) + "</span></div><div class='e-file-percentage e-file-view'><div class='e-file-progress-bar'><div class='e-file-progress-status'></div></div></div><div class='e-action-perform'><div class='e-icon e-file-view'></div></div></div></li>").appendTo(fileListDetails).data("file", files);
            this.updialog.ejDialog({ showOnInit: false, width: 520, height: "auto", cssClass: this.model.cssClass, close: $.proxy(this._uploadFileListDelete, this), position: { X: xpos, Y: ypos }, enableRTL: this.model.enableRTL, content: "#" + this.element[0].id, enableResize: false })
            //create object for ejDialog 
            me.diaObj = this.updialog.data("ejDialog");
            if (this.model.showFileDetails) {
                me.diaObj.open();
            }
            this._buttonText(this.model.buttonText);
            this._dialogText(this.model.dialogText);
            return addedFile;
        },
        /**
* Specifies uploading/ progress state of the file uploaded
* @private
*/
        _setProgress: function (filelist, percentage, e) {
            var progressbar, progress, filesize, loaded, total;
            progressbar = $(filelist).find(".e-file-progress-status");
            progressbar.width(percentage + "%");
           
            filesize = $(filelist).find(".e-file-size .e-file-name-txt");
            loaded = this._formatSize(e.loaded);
            total = this._formatSize(e.total);
            filesize.html(loaded + "\\" + total);
        },
        /**
* Specifies the current action of the file uploaded
* @private
*/
        _setAction: function (element, action) {
            //localization can be provided for the strings cancel,remove and retry.
            var actionlist;
            element.find(".e-icon").remove().addClass(action.toString());
            if (action == "cancel") {
                actionlist = ej.buildTag('div.e-icon e-file-cancel', '', {}, { title: 'cancel' });
            } else if (action == "remove") {
                actionlist = ej.buildTag('div.e-icon e-file-delete', '', {}, { title: 'remove' });
            } else if (action == "retry") {
                actionlist = ej.buildTag('div.e-icon e-file-retry', '', {}, { title: 'retry' });
            }
            //appending list
            element.find(".e-action-perform").append(actionlist);
            //FileList Click
            this._on(actionlist, "click", this._actionClick);
        },
        /**
* Sets status of the file uploaded
* @private
*/
        _setStatus: function (element, status) {
            var progress, upstatus = ej.buildTag('div');
            if (status == "success") {
                element.find(".file-status").addClass("e-file-status-success").html("Completed");
                element.find(".e-file-percentage").html("").attr("title", "Completed");
                upstatus.addClass("e-icon e-file-percentage-success");
                element.find(".e-file-percentage").append(upstatus);
            }
            if (status == "failed") {
                element.find(".file-status").addClass("e-file-status-failed").html("Failed");
                element.find(".e-file-percentage").html("").attr("title", "Failed");
                upstatus.addClass("e-icon e-file-percentage-failed");
                element.find(".e-file-percentage").append(upstatus);
            }
            if (status == "progress") {
                element.find(".file-status").addClass("file-status-inprogress").html("in progress");
            }
            if (status == "uploading") {
                element.find(".file-status").addClass("file-status-inprogress").html("uploading");
                progress = element.find(".e-file-percentage");
                progress.html("");
            }
        },
        /**
* Sets input field for multiple file upload
* @private
*/
        _createInputandBind: function () {
            // creating input field. 
            var tempInput = ej.buildTag('input', '', {}, { type: 'file' });
            tempInput.attr("name", this.control.id).attr("autocomplete", "off").attr("class", "e-uploadinput");
            if (this.model.multipleFilesSelection) {
                tempInput.attr("multiple", "multiple");
            }
            tempInput.appendTo(this.element.find(".e-selectpart"));
            this.inputupload = tempInput;
            this._bindInputChangeEvent();
        },
        /**
* This will show upload button
* @private
*/
        _showUploadButton: function () {
            var uploadbutton = this.element.find(".e-uploadbtn");
            if (uploadbutton.length == 0) {
                uploadbutton = ej.buildTag('button.e-uploadbtn e-btn e-select', this._getLocalizedLabels("upload"), {}, { type: "button" });
                this.element.find(".e-file-upload").append(uploadbutton);
                //File_upload_button Click
                this._on(uploadbutton, "click", this.__uploadButtonClick);
            }
			this._buttonText(this.model.buttonText);
        },
        /**
* This will reset the uplaod button
* @private
*/
        _resetFileInput: function ($element) {
            var clone = $element.clone(false, false);
            this._on(clone, "change", this._inputValueChange);
            $element.replaceWith(clone);
        },
        /**
* Ensures the file format
* @private
*/
        _isAllowed: function (files) {
            var inputfield, denied, uploadControl, args, allowExtension, denyExtension;
            inputfield = this.element.find(".e-uploadinput");
            denied = false;
            uploadControl = this;
            if (this.model.extensionsAllow != "") {
                allowExtension = this.model.extensionsAllow.split(",");
                $(files).each(function () {
                    if ($.inArray(this.extension, allowExtension) == -1) {
                        // Raise Event
                        args = { action: "ExtensionsAllow", files: files };
                        uploadControl._trigger('error', args);
                        denied = true;
                        return false;
                    }
                }
                    );
            }
            if (this.model.extensionsDeny != "") {
                denyExtension = this.model.extensionsDeny.split(",");
                $(files).each(function () {
                    if ($.inArray(this.extension, denyExtension) != -1) {
                        // Raise Event
                        args = { action: "ExtensionsDeny", files: files };
                        uploadControl._trigger('error', args);
                        denied = true;
                        return false;
                    }
                });
            }
            if (denied) {
                this._resetFileInput(inputfield);
            }
            return !denied;
        },
        /**
* This will sets the file remove status.
* @private
*/
        _fileListRemove: function () {
            fileList = this.element.find(".e-upload-file .e-file-delete");
            if (fileList.length == 0) {
                this.element.find(".e-uploadbtn").attr('disabled', 'disabled').addClass('e-disable');
                this.updialog.ejDialog('close');
            }
        },
        /**
* This will sets the uplaod disabled
* @private
*/
        _uploadHide: function () {
            fileList = this.element.find(".e-upload-file .e-file-cancel");
            if (fileList.length == 0) {
                this.element.find(".e-ul").empty();
                this.element.find(".e-uploadbtn").attr('disabled', 'disabled').addClass('e-disable');
                this.updialog.ejDialog('close');
            }
        },
        /**
* Section of handling dialog close action
* @private
*/
        _dialogclose: function () {
            var inputfield;
            this.updialog.find(".e-ul").empty();
            inputfield = this.element.find(".e-uploadinput");
            this._resetFileInput(inputfield);
            this.updialog.ejDialog('close');
        },
        /**
* Deletes the file list from the dialog box.
* @private
*/
        _uploadFileListDelete: function () {
            var inputfield;
            this.updialog.find(".e-ul").empty();
            inputfield = this.element.find(".e-uploadinput");
            this._resetFileInput(inputfield);
        },
        /* XHR Upload  */
        /**/
        /**
* Section for handling XHR upload
* @private
*/
        _onXhrSelect: function (e) {
            var inputField, files, xhrUpload, addedFile;
            inputField = $(e.target);
            files = this._getInputFileInfo(inputField);
            this._xhrBeforeUpload(files, inputField);
            xhrUpload = this;
            $.each(files, function (i, fileItem) {
                addedFile = $(fileItem).data("filelist");
                xhrUpload._setAction(addedFile, "cancel"); // XhrUpload._Uploader._setAction(addedFile, "cancel");
                if (xhrUpload.model.autoUpload) {
                    xhrUpload._xhrPerformUpload(fileItem);
                } else {
                    xhrUpload._showUploadButton();
                }
            });
        },
        /**
* Action performed before XHR upload
* @private
*/
        _xhrBeforeUpload: function (files, inputField) {
            var fileEntry, xhrUpload, formdata, addedFile;
            fileEntry = files;
            xhrUpload = this;
            $.each(fileEntry, function (i, fileItem) {
                formdata = xhrUpload._createFormObjectXhr(fileItem);
                $(fileItem).data("formobject", formdata);
                addedFile = xhrUpload._pushFileDetails(fileItem);
                $(fileItem).data("filelist", addedFile);
            });

            return fileEntry;
        },
        /**
* Action performed during XHR upload
* @private
*/
        _xhrPerformUpload: function (fileItem) {
            var isPrevented, url, xhrUpload, formdata, xhr;
            this._trigger('begin');
            url = this.model.saveUrl; //
            xhrUpload = this;
            formdata = $(fileItem).data("formobject");
            xhr = new XMLHttpRequest();
            $(fileItem).data("xhr", xhr);
            xhr.addEventListener("load", function (e) {
                xhrUpload._onRequestSuccess(xhrUpload, e, fileItem);
            }, false);
            xhr.addEventListener("error", function (e) {
                xhrUpload._onRequestError(xhrUpload, e, fileItem);
            }, false);
            xhr.upload.addEventListener("progress", function (e) {
                xhrUpload._onRequestProgress(xhrUpload, e, fileItem);
            }, false);
            xhr.open("POST", url);
            xhr.send(formdata);
        },
        /**
* secifies Action performed during XHR upload button click
* @private
*/
        _xhrOnUploadButtonClick: function (e) {
            var xhrUpload, fileEntry, started;
            xhrUpload = this;
            $(".e-ul li.e-upload-file", xhrUpload.control).each(function () {
                fileEntry = $(this);
                started = xhrUpload._isFileUpload(fileEntry);
                if (started) {
                    xhrUpload._xhrPerformUpload($(fileEntry).data("file"));
                }
            });
        },
        /**
* secifies Action performed during XHR uploaded file remove
* @private
*/
        _xhrOnRemove: function (e, fileItem) {
            var filename = $(fileItem).find(".e-file-name").text().toString().split(","), proxy = this;
            $.ajax({
                url: this.model.removeUrl,
                type: "POST",
                data: "fileNames=" + filename,
                success: function () {
                    $(fileItem).remove();
                    proxy._fileListRemove();
                }
            });
        },
        /**
* secifies cancel action performed during XHR uploaded
* @private
*/
        _xhrOnCancel: function (e, fileItem) {
            var file, xhr;
            file = $(fileItem).data("file");
            xhr = $(file).data("xhr");
            if (xhr) {
                $(file).data("xhr").abort();
            }
            $(file).data("xhr", null);
            $(fileItem).data("file", null);
            $(fileItem).remove();
            this._uploadHide();
        },
        /**
* secifies retry action performed during XHR uploaded
* @private
*/
        _xhrOnRetry: function (e, fileItem) {
            var file = $(fileItem).data("file");
            this._xhrPerformUpload(file);
        },
        /**
* section for handling request success for uploading
* @private
*/
        _onRequestSuccess: function (xhrUpload, e, fileEntry) {
            var xhr = $(fileEntry).data("xhr");
            if (xhr.status >= 200 && xhr.status <= 299) {
                xhrUpload._onXhrUploadSuccess(xhrUpload, e, fileEntry);
            }
            else {
                xhrUpload._onRequestError(xhrUpload, e, fileEntry);
            }
        },
        /**
* section for handling when upload is successful
* @private
*/
        _onXhrUploadSuccess: function (xhrUpload, e, fileEntry) {
            var addedFile, xhr, progressbar, size, fSize, filesize, args;
            addedFile = $(fileEntry).data("filelist");
            xhr = $(fileEntry).data("xhr");
            if (xhrUpload.model.removeUrl) {
                xhrUpload._setAction(addedFile, "remove");
                xhrUpload._setStatus(addedFile, "success");
            } else {
                addedFile.find(".e-icon").remove();
                xhrUpload._setStatus(addedFile, "success");
            }
            if ($(fileEntry).length > 0) {
                progressbar = $(addedFile).find(".e-file-progress-status");
                progressbar.width("100%");
                size = $(fileEntry)[0].size;
                fSize = this._formatSize(size);
                filesize = $(addedFile).find(".e-file-size .e-file-name-txt");
                filesize.html(fSize + "\\" + fSize);
            }
            args = { files: fileEntry, xhr: xhr, e: e };
            xhrUpload._trigger('complete', args);
        },
        /**
* section for handling when upload is failed
* @private
*/
        _onRequestError: function (xhrUpload, e, fileEntry) {
            var addedFile, xhr, args;
            addedFile = $(fileEntry).data("filelist");
            xhr = $(fileEntry).data("xhr");
            xhrUpload._setAction(addedFile, "retry");
            xhrUpload._setStatus(addedFile, "failed");
            args = { action: "Error", files: fileEntry, xhr: xhr, e: e };
            xhrUpload._trigger('error', args);
        },
        /**
* section for handling when upload is in progress
* @private
*/
        _onRequestProgress: function (xhrUpload, e, fileEntry) {
            var percentage, addedFile;
            percentage = Math.round(e.loaded * 100 / e.total);
            addedFile = $(fileEntry).data("filelist");
            xhrUpload._setProgress(addedFile, percentage, e);
            xhrUpload._setStatus(addedFile, "progress");
        },
        /**
* section for handling xhr form object
* @private
*/
        _createFormObjectXhr: function (file) {
            var formData = new FormData();
            formData.append(this.control.id, file.rawFile);
            return formData;
        },
        /**/
        //Utility functions
        /**/
        /**
* This will input File Info upload button 
* @private
*/
        _getInputFileInfo: function ($input) {
            var input = $input[0];
            if (input.files) {
                return this._getAllFileInfo(input.files);
            } else {
                return [{
                    name: this._GetName(input.value),
                    extension: this._getFileExtensionType(input.value),
                    size: this._getFileSizeinIE(input.value)
                }];
            }
        },
        /**
* This will get File Size IE upload button
* @private
*/
        _getFileSizeinIE: function (fileName) {
            var actievXObj, fileSize;
            actievXObj = null;
            fileSize = null;
            try {
                actievXObj = new ActiveXObject("Scripting.FileSystemObject");
            } catch (e) {
                fileSize = null;
            }
            if (actievXObj) {
                fileSize = actievXObj.getFile(fileName).size;
            }
            return fileSize;
        },
        /**
* This will get FileExtensionType of upload file
* @private
*/
        _getFileExtensionType: function (fileName) {
            return fileName.match ? (fileName.match(/\.([^\.]+)$/)[0] || "") : "";
        },
        /**
* This will return information about all files uploaded
* @private
*/
        _getAllFileInfo: function (rawFiles) {
            var tempProxy = this;
            return $.map(rawFiles, function (file) {
                return tempProxy._getFileInfo(file || rawFiles);
            });
        },
        /**
* This will return full names of files
* @private
*/
        _GetName: function (fullname) {
            var nameIndex = fullname.lastIndexOf("\\");
            return (nameIndex != -1) ? fullname.substr(nameIndex + 1) : fullname;
        },
        /**
* This will return file details in firefox older versions
* @private
*/
        _getFileInfo: function (rawFile) {
            // Older Firefox versions (before 3.6) use fileName and fileSize
            var fileName = rawFile.name || rawFile.fileName || rawFile;
            return {
                name: fileName,
                extension: this._getFileExtensionType(fileName),
                size: rawFile.size || rawFile.fileSize,
                rawFile: rawFile
            };
        },
        /**
* This will return file size type
* @private
*/
        _formatSize: function (bytes) {
            var i = -1;
            do {
                bytes = bytes / 1024;
                i++;
            } while (bytes > 99);
            return Math.max(bytes, 0.1).toFixed(1) + ['KB', 'MB', 'GB', 'TB', 'PB', 'EB'][i];
        },
        /**/
        //Start
        // IFrame Uploads
        /**
* Section for handling IFrame uploads
* @private
*/
        _onSelectIFrame: function (e) {
            var input, files, addedFile, uploadframe;
            input = $(e.target);
            files = this._getInputFileInfo(input);
            addedFile = this._beforeUploadIFrame(files);
            uploadframe = addedFile.data("iframe");
            if (this.model.autoUpload) {
                this._performUploadIFrame(addedFile);
            } else {
                this._showUploadButton();
            }
            this._off(this.inputupload, "change");
            this._bindInputChangeEvent();
        },
        /**
* Section for handling files removed from IFrame
* @private
*/
        _onRemoveIFrame: function (e, fileItem) {
            var iframe, fileNames, proxy, fileDetails;
            iframe = fileItem.data("iframe");
            fileDetails = $(fileItem).data("file");
            fileNames = fileDetails[0].name;
            proxy = this;
            if (iframe) {
                this._removeFileEntry(fileItem);
                if (this.model.removeUrl) {
                    $.ajax({
                        url: this.model.removeUrl,
                        type: "POST",
                        data: "fileNames=" + fileNames,
                        success: function () {
                            proxy._fileListRemove();
                        }
                    });
                }
            } else {
                this._removeFileEntry(fileItem);
            }
        },
        /**
* Section for handling cancel action performed during file upload
* @private
*/
        _onCancelIFrame: function (e, fileItem) {
            var iframe;
            //trigger  cancel
            this._trigger('cancel', { Status: fileItem });
            iframe = fileItem.data("iframe");
            if (iframe) {
                this._removeFileEntry(fileItem);
                if (typeof (iframe.stop) != "undefined") {
                    iframe.stop();
                } else if (iframe.document) {
                    iframe.document.execCommand("Stop");
                    iframe.contentWindow.location.href = iframe.contentWindow.location.href;
                }
                this._processServerResponse(iframe, "");
            }
            this._uploadHide();
        },
        /**
* Section for handling retry action performed during file upload
* @private
*/
        _onRetryIFrame: function (e, fileItem) {
            this._performUploadIFrame(fileItem);
        },
        /**
* Section for handling actions performed during before IFrame upload
* @private
*/
        _beforeUploadIFrame: function (files) {
            var uploadframe, uploadform, addedfile;
            //creating iframe and adding it to the upload div block.
            uploadframe = this._createFrame(this.control.id + "_Iframe" + this.Uploadframes.length);
            this.Uploadframes.push(uploadframe);
            uploadform = this._createForm(this.model.saveUrl, uploadframe[0].id);
            this.element.find("input.e-uploadinput").removeClass("e-uploadinput").css("display", "none").appendTo(uploadform);
            this._createInputandBind();
            addedfile = this._pushFile(files, { "iframe": uploadframe, "form": uploadform, "file": files });
            uploadframe.data({ "filelist": addedfile });
            this._setAction(addedfile, "cancel");
            return addedfile;
        },
        /**
* Section for handling actions performed during IFrame upload
* @private
*/
        _performUploadIFrame: function (addedFile) {
            var isPrevented, files, uploadframe, uploadform;
            this._trigger('begin');
            files = addedFile.data("file");
            this._setStatus(addedFile, "uploading");
            uploadframe = addedFile.data("iframe");
            uploadform = addedFile.data("form");
            uploadframe.appendTo(document.body);
            uploadform.appendTo(document.body);
            //error here calls the upload even if the url is wrong
            this._on(uploadframe, "load", this._removeFramesIFrame);
            uploadform.submit();
        },
        /**
* Section for handling actions performed during IFrame upload button click
* @private
*/
        _onUploadButtonClickIFrame: function (e) {
            var iframeUpload, fileEntry, started;
            iframeUpload = this;
            $(".e-ul li.e-upload-file", iframeUpload.control).each(function () {
                fileEntry = $(this);
                started = iframeUpload._isFileUpload(fileEntry);
                if (started) {
                    iframeUpload._performUploadIFrame(fileEntry);
                }
            });
        },
        /**
* Section for handling actions when IFrame files removed before upload
* @private
*/
        _removeFramesIFrame: function (e) {
            var uploadframe, response, filelist, fileEntry, args;
            uploadframe = $(e.target);
            filelist = uploadframe.data("filelist");
            try {
                response = uploadframe.contents().text();
            } catch (e) {
                response = "Error trying to get server response: " + e;
            }
            if (response == "") {
                this._processServerResponse(uploadframe, response);
                this._setIframeProgress(filelist, 100, e);
                this._setStatus(filelist, "progress");
                this._successIframeUpload(filelist);
            }
            else { this._failureIframeUpload(filelist); }
        },
        //prog bar
        /**
* Specifies the progress state during IFrame upload
* @private
*/
        _setIframeProgress: function (filelist, percentage, e) {
            var progressbar, progress, filesize, loaded, total;
            progressbar = $(filelist).find(".e-file-progress-status");
            progressbar.width(percentage + "%");
        },
        /**
* Section for handling actions when IFrame upload is successfull
* @private
*/
        _successIframeUpload: function (filelist) {
            fileEntry = filelist.data("file");
            //trigger complete functionality
            if (this.model.removeUrl) {
                this._setAction(filelist, "remove");
                this._setStatus(filelist, "success");
            } else {
                filelist.find(".file-action").remove();
                this._setStatus(filelist, "success");
            }
            args = { files: fileEntry };
            this._trigger('complete', args);
        },
        /**
* Section for handling actions when IFrame upload fails
* @private
*/
        _failureIframeUpload: function (filelist) {
            fileEntry = filelist.data("file");
            //trigger Error functionality
            if (this.model.saveUrl) {
                this._setAction(filelist, "retry");
                this._setStatus(filelist, "failed");
            } else {
                filelist.find(".file-action").remove();
                this._setStatus(filelist, "failed");
            }
            args = { files: fileEntry };
            this._trigger('error', args);
        },
        /**
* Section for handling response from server
* @private
*/
        _processServerResponse: function (uploadframe) {
            var uploadform;
            uploadform = $(document.body).find("form[target='" + $(uploadframe).attr("id") + "']");
            setTimeout(function () {
                uploadform.remove();
                uploadframe.remove();
            }, 0);
        },
        /**
* Returns div block created
* @private
*/
        _createDivBlock: function (className) {
            return ej.buildTag('div.' + className);
        },
        /**
* Returns form tag as object
* @private
*/
        _createForm: function (action, target) {
            return ej.buildTag('form', '', {}, { enctype: 'multipart/form-data', method: 'POST', action: action, target: target });
        },
        /**
* Section for creating IFrame for handling IFrame uploads
* @private
*/
        _createFrame: function (id) {
            return ej.buildTag('iframe#' + id, '', { display: 'none' }, { name: id });
        },
        /**
* Returns file type input tag whwn id is specified 
* @private
*/
        _createInput: function (id) {
            return ej.buildTag('input', '', {}, { type: 'file', name: id });
        },
        //end
        /*Sync Start*/
        /**
* Section for synchronous upload
* @private
*/
        _initObjectsSyncUpload: function () {

            this.element.closest("form")
                    .attr("enctype", "multipart/form-data")
                    .attr("encoding", "multipart/form-data");
            this._wireEventsSyncUpload();
        },
        /**
* Binds events for handling sync upload 
* @private
*/
        _wireEventsSyncUpload: function () {
            var closestform = this.element.closest("form")[0];
            //form submit event. 
            this._on($(closestform), "submit", this._formSubmitSyncUpload);
            // form reset event.
            this._on($(closestform), "reset", this._formResetSyncUpload);
        },
        /**
* handles actions performed while sync upload 
* @private
*/
        _onSelectSyncUpload: function (e) {
            var input, files, selection, addedfile;
            input = $(e.target);
            files = this._getInputFileInfo(input);
            selection = $(".e-selectpart", this.control);
            this.element.find("input.e-uploadinput").removeClass("e-uploadinput").css("display", "none").appendTo(selection);
            this._createInputandBind();
            addedfile = this._pushFile(files, { "file": files, "Input": input });
        },
        /**
* Binds events for handling sync upload canceled
* @private
*/
        _onCancelSyncUpload: function (e, fileItem) {
            var inputfield = fileItem.data("Input");
            fileItem.data("file", null);
            fileItem.data("Input", null);
            fileItem.remove();
            inputfield.remove();
            this._uploadHide();
        },
        /**
* Performs upload during form submit
* @private
*/
        _formSubmitSyncUpload: function (e) {
            var input, uploader;
            input = $(".e-uploadinput", this.control);
            input.attr("name", "");
            uploader = this.control;
            setTimeout(function () {
                input.attr("name", uploader.id);
            }, 0);
        },
        /**
* Section for handling actions when form is reset.
* @private
*/
        _formResetSyncUpload: function (e) {
            $(".e-selectpart", this.control).children('input[type="file"]').each(function () {
                if (this.className == " ") {
                    $(this).remove();
                }
            });
            $(".e-ul", this.control).remove();
        }
        /*Sync End*/
    });
    ej.Uploadbox.Locale = {};

    ej.Uploadbox.Locale["en-US"] = {
        buttonText: {
            upload: "Upload",
            browse: "Browse",
            cancel: "Cancel"
        },
        dialogText: {
            title: "Upload Box",
            name: "Name",
            size: "Size",
            status: "Status"
        }
    };
})(jQuery, Syncfusion);;
/**
* @fileOverview Plugin to style the Html TextArea
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
	* @class ejRTE
    * @param {object} options - settings for RTE.
	* @requires jQuery
	* @requires jquery.easing.1.3.js
    * @requires jquery.js
    * @requires jquery.globalize.js
    * @requires jquery.globalize.culture.en-US.js
    * @requires ej.core.js
    * @requires ej.data.js
    * @requires ej.rte.js
    * @requires ej.button.js
    * @requires ej.togglebutton.js
    * @requires ej.splitbutton.js
    * @requires ej.checkbox.js
    * @requires ej.radiobutton.js
    * @requires ej.dropdownlist.js
    * @requires ej.dialog.js
    * @requires ej.toolbar.js
    * @requires ej.editor.js
    * @requires ej.menu.js
    * @requires ej.scroller.js
    * @requires ej.draggable.js
	* @classdesc Custom Design for Html TextArea control.
	* @example 
	* &lt;textarea   id="rteSample"&gt; 	
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;     
	* &lt;script&gt;
	* // Create RTE
    * $("#rteSample").ejRTE();
	* &lt;/script&gt;
	*/
    // "ej.RTE" is "namespace.className" will hold functions and properties
    var xhr = null;
    ej.widget("ejRTE", "ej.RTE", {
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        _rootCSS: "e-rte",
        validTags: ["textarea"],
        _setFirst: false,

        // default model
        defaults: {
            /**		
			* Enables/Disables the editing of the content.
			* @default 	True
			* @type {boolean}
			* @example 
           * &lt;textarea   id="rteSample"&gt;  
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
			* // Initialize the RTE with the allowEditing value specified.
            * $("#rteSample").ejRTE({ allowEditing: false });
            * &lt;/script&gt;
			* @memberof ejRTE
			* @instance
			*/
            allowEditing: true,
            /**		
			* RTE control comments can access through keyboard shortcut keys.
			* @default 	True
			* @type {boolean}
			* @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
			* // Initialize the RTE with the allowKeyboardNavigation value specified.
            * $("#rteSample").ejRTE({allowKeyboardNavigation: false });
			* &lt;/script&gt;
			* @memberof ejRTE
			* @instance
			*/
            allowKeyboardNavigation: true,
            /**		
            * Sets the root class for RTE theme. This cssClass API helps to use custom skinning option for RTE control. By defining the root class using this API, we need to include this root class in CSS.
            * @default "gradient-lime"
            * @type {string}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * //Initialize the RTE with the cssClass value specified
            * 	$("#rteSample").ejRTE({ cssClass: 'gradient-lime'});
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            cssClass: "",
            /**		
            * Defines the height of the RTE textbox.
            * @default Null
            * @type {string | number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * //Initialize the RTE height property with the  value specified
            * 	$("#rteSample").ejRTE({ height: 250 });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            height: "370",
            /**		
            * Defines the width of the RTE textbox.
            * @default Null
            * @type {string |number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * //Initialize the RTE width property with the  value specified
            * 	$("#rteSample").ejRTE({ width: 500 });
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            width: "786",
            /**		
			* 	Enable | Disable the RTE control accessible or interaction..
			* @default 	True
			* @type {boolean}
			* @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
			* // Initialize the RTE with the enabled value specified.
            * $("#rteSample").ejRTE({enabled: false });
			* &lt;/script&gt;
			* @memberof ejRTE
			* @instance
			*/
            enabled: true,
            /**		
			* Set the max Length  for RTE text. 
			* @default 	400
			* @type {number}
			* @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
			* // Initialize the RTE with the maxLength value specified.
            * $("#rteSample").ejRTE({ maxLength: 900});
			* &lt;/script&gt;
			* @memberof ejRTE
			* @instance
			*/
            maxLength: 7000,
            /**		
			* Set the minimum width for RTE outer wrapper element. 
			* @default 	400
			* @type {number}
			* @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
			* // Initialize the RTE with the minWidth value specified.
            * $("#rteSample").ejRTE({ minWidth: 900});
			
			* &lt;/script&gt;
			* @memberof ejRTE
			* @instance
			*/
            minWidth: 400,
            /**		
           * Set the maximum width for RTE outer wrapper element. 
           * @default 	400
           * @type {number}
           * @example 
           * &lt;textarea   id="rteSample"&gt;  
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
           * // Initialize the RTE with the maxWidth value specified.
           * $("#rteSample").ejRTE({ maxWidth: 900});
          * &lt;/script&gt;
           * @memberof ejRTE
           * @instance
           */
            maxWidth: null,
            /**		
            * Set the minimum height for RTE outer wrapper element. 
            * @default 	280
            * @type {number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the maxWidth value specified.
            * $("#rteSample").ejRTE({ minHeight: 900});
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            minHeight: 280,
            /**		
            * Set the maximum height for RTE outer wrapper element. 
            * @default 	280
            * @type  {string | number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the maxHeight value specified.
            * $("#rteSample").ejRTE({ maxHeight: 900});
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            maxHeight: null,
            /**		
             * Shows toolbar in RTE. 
             * @default 	True
             * @type {boolean}
             * @example 
             * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
             * // Initialize the RTE with the showToolbar value specified.
             * $("#rteSample").ejRTE({showToolbar: false });
             * &lt;/script&gt;
             * @memberof ejRTE
             * @instance
             */
            showToolbar: true,
            /**		
            * Shows footer in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showFooter value specified.
            * $("#rteSample").ejRTE({showFooter: true });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showFooter: false,
            /**		
            * Shows HtmlSource in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showHtmlSource value specified.
            * $("#rteSample").ejRTE({showHtmlSource: false });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showHtmlSource: true,
            /**		
            * Shows WordCount in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showWordCount value specified.
            * $("#rteSample").ejRTE({showWordCount: false });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showWordCount: true,
            /**		
            * Shows HtmlTagInfo in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showHtmlTagInfo value specified.
            * $("#rteSample").ejRTE({showHtmlTagInfo: false });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showHtmlTagInfo: true,
            /**		
            * Shows ClearAll in RTE. 
            * @DIefault 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showClearAll value specified.
            * $("#rteSample").ejRTE({showClearAll: false });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showClearAll: true,
            /**		
            * Sets the iframe attribute in RTE. 
            * @default 	null
            * @type {object}
            * @example 
    * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the iframeAttribute value specified.
            * $("#rteSample").ejRTE({iframeAttribute: "color:#000" });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            iframeAttribute: "color:#5C5C5C",
            /**		
            * Sets the iframe attribute in RTE. 
            * @default 	null
            * @type {object}
            * @example 
    * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the iframeAttribute value specified.
            * $("#rteSample").ejRTE({showClearFormat:true });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showClearFormat: true,
            /**		
            * Shows FontOption in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showFontOption value specified.
            * $("#rteSample").ejRTE({showFontOption: false });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showFontOption: true,
            /**		
            * Shows Dimensions in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showDimensions value specified.
            * $("#rteSample").ejRTE({showDimensions: false });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showDimensions: false,
            /**		
            * Sets the culture in RTE. 
            * @default 	"en-US"
            * @type {string}
            * @example 
         * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the culture value specified.
            * $("#rteSample").ejRTE({locale: "en-US" });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            locale: "en-US",
            /**		
            * Sets the name in RTE. 
            * @default 	""
            * @type {string}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the name value specified.
            * $("#rteSample").ejRTE({name: "ecommentblog" });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            name: "",
            /**		
            * Sets the tools in RTE. 
            * @default 	null
            * @type {object}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
             *   //font: ["fontName", "fontSize", "fontColor", "backgroundColor"],
              *  formatStyle: ["format"],
               * style: ["bold", "italic", "underline", "strikethrough"],
                *alignment: ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
                *lists: ["unorderedList", "orderedList"],
                *indenting: ["outdent", "indent"],
                * doAction: ["undo", "redo"],
                * links: ["createLink"],
                * images: ["image", "video"],
                * tables: ["createTable", "addRowAbove", "addRowBelow", "addColumnLeft", "addColumnRight", "deleteRow", "deleteColumn", "deleteTable"]
            
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            tools: /** @lends ejRTE# */{
                //font: ["fontName", "fontSize", "fontColor", "backgroundColor"],
                /**		
                * Include Format styles in RTE toolbar.
                * @alias ejRTE#tools->formatStyle
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
              *  formatStyle: ["format"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                formatStyle: ["format"],
                /**		
                * Include font styles in RTE toolbar.
                * @alias ejRTE#tools->style
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
               * style: ["bold", "italic", "underline", "strikethrough"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                style: ["bold", "italic", "underline", "strikethrough"],
                /**		
                * Include font alignment options in RTE toolbar.
                * @alias ejRTE#tools->alignment
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
                *alignment: ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                alignment: ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
                /**		
                * Include list type options in RTE toolbar.
                * @alias ejRTE#tools->lists
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
                *lists: ["unorderedList", "orderedList"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                lists: ["unorderedList", "orderedList"],
                /**		
                * Include text indenting options in RTE toolbar.
                * @alias ejRTE#tools->indenting
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
                *indenting: ["outdent", "indent"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                indenting: ["outdent", "indent"],
                //copyPaste: ["cut", "copy", "paste"],
                /**		
                * Include action options in RTE toolbar.
                * @alias ejRTE#tools->doAction
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
                * doAction: ["undo", "redo"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                doAction: ["undo", "redo"],
                //clear: ["clearFormat", "clearAll"],
                /**		
                * Include links options in RTE toolbar.
                * @alias ejRTE#tools->links
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
             
                * links: ["createLink"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                links: ["createLink"],
                /**		
                * Include image  and video options in RTE toolbar.
                * @alias ejRTE#tools->images
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
             
                * images: ["image", "video"]
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                images: ["image", "video"],
                /**		
                * Include tables options in RTE toolbar.
                * @alias ejRTE#tools->tables
                * @type Object
                  * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the tools value specified.
            * $("#rteSample").ejRTE({  tools: {
             
                * tables: ["createTable", "addRowAbove", "addRowBelow", "addColumnLeft", "addColumnRight", "deleteRow", "deleteColumn", "deleteTable"]
            
            * }});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
                */
                tables: ["createTable", "addRowAbove", "addRowBelow", "addColumnLeft", "addColumnRight", "deleteRow", "deleteColumn", "deleteTable"]
                //editTable:[""],
                //scripts: ["superscript", "subscript"],
                //casing: ["upperCase", "lowerCase"],
                //paragraph: ["paragraph"],
                //custom: null
            },
            /**		
            * Sets the toolsList in RTE. 
            * @default 	null
            * @type {object}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the toolsList value specified.
            * $("#rteSample").ejRTE({ toolsList: ["formatStyle", "font", "style", "scripts", "alignment", "lists", "indenting", "copyPaste", "doAction", "clear", "links", "images", "tables", "casing", "customTool"]});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            toolsList: ["formatStyle", "font", "style", "scripts", "alignment", "lists", "indenting", "copyPaste", "doAction", "clear", "links", "images", "tables", "casing", "customTool"],
            /**		
            * Sets the colorCode in RTE. 
            * @default 	null
            * @type {object}
            * @example 
           * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the colorCode value specified.
            * $("#rteSample").ejRTE({ colorCode: [
			            "000000", "FFFFFF", "C4C4C4", "ADADAD", "595959", "262626", "4f81bd", "dbe5f1", "b8cce4", "95b3d7", "366092", "244061", "c0504d", "f2dcdb", "e5b9b7", "d99694", "953734",
			            "632423", "9bbb59", "ebf1dd", "d7e3bc", "c3d69b", "76923c", "4f6128", "8064a2", "e5e0ec", "ccc1d9", "b2a2c7", "5f497a", "3f3151", "f79646", "fdeada", "fbd5b5", "fac08f",
			            "e36c09", "974806"
            ]});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            colorCode: [
			            "000000", "FFFFFF", "C4C4C4", "ADADAD", "595959", "262626", "4f81bd", "dbe5f1", "b8cce4", "95b3d7", "366092", "244061", "c0504d", "f2dcdb", "e5b9b7", "d99694", "953734",
			            "632423", "9bbb59", "ebf1dd", "d7e3bc", "c3d69b", "76923c", "4f6128", "8064a2", "e5e0ec", "ccc1d9", "b2a2c7", "5f497a", "3f3151", "f79646", "fdeada", "fbd5b5", "fac08f",
			            "e36c09", "974806"
            ],
            /**		
            * Sets the format in RTE. 
            * @default 	""
            * @type {string}
            * @example 
           * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the format value specified.
            * $("#rteSample").ejRTE({format: [
                { text: "Paragraph", value: "<p>", spriteCssClass: "e-paragraph" },
                { text: "Quotation", value: "<blockquote>", spriteCssClass: "e-quotation" },
                { text: "Heading 1", value: "<h1>", spriteCssClass: "e-h1" },
                { text: "Heading 2", value: "<h2>", spriteCssClass: "e-h2" },
                { text: "Heading 3", value: "<h3>", spriteCssClass: "e-h3" },
                { text: "Heading 4", value: "<h4>", spriteCssClass: "e-h4" },
                { text: "Heading 5", value: "<h5>", spriteCssClass: "e-h5" },
                { text: "Heading 6", value: "<h6>", spriteCssClass: "e-h6" }
            * ]});
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            format: [
                { text: "Paragraph", value: "<p>", spriteCssClass: "e-paragraph" },
                { text: "Quotation", value: "<blockquote>", spriteCssClass: "e-quotation" },
                { text: "Heading 1", value: "<h1>", spriteCssClass: "e-h1" },
                { text: "Heading 2", value: "<h2>", spriteCssClass: "e-h2" },
                { text: "Heading 3", value: "<h3>", spriteCssClass: "e-h3" },
                { text: "Heading 4", value: "<h4>", spriteCssClass: "e-h4" },
                { text: "Heading 5", value: "<h5>", spriteCssClass: "e-h5" },
                { text: "Heading 6", value: "<h6>", spriteCssClass: "e-h6" }
            ],
            /**		
            * Sets the fontName in RTE. 
            * @default 	null
            * @type {object}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the fontName value specified.
            * $("#rteSample").ejRTE({format: [
                { text: "Paragraph", value: "<p>", spriteCssClass: "e-paragraph" },
                { text: "Quotation", value: "<blockquote>", spriteCssClass: "e-quotation" },
                { text: "Heading 1", value: "<h1>", spriteCssClass: "e-h1" },
                { text: "Heading 2", value: "<h2>", spriteCssClass: "e-h2" },
                { text: "Heading 3", value: "<h3>", spriteCssClass: "e-h3" },
                { text: "Heading 4", value: "<h4>", spriteCssClass: "e-h4" },
                { text: "Heading 5", value: "<h5>", spriteCssClass: "e-h5" },
                { text: "Heading 6", value: "<h6>", spriteCssClass: "e-h6" }
           * ]});
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            fontName: [
                       {
                           text: "Segoe UI",
                           value: "Segoe UI"
                       },
                       {
                           text: "Arial",
                           value: "Arial,Helvetica,sans-serif"
                       },
                       {
                           text: "Courier New",
                           value: "'Courier New',Courier,monospace"
                       },
                       {
                           text: "Georgia",
                           value: "Georgia,serif"
                       },
                       {
                           text: "Impact",
                           value: "Impact,Charcoal,sans-serif"
                       },
                       {
                           text: "Lucida Console",
                           value: "'Lucida Console',Monaco,monospace"
                       },
                       {
                           text: "Tahoma",
                           value: "Tahoma,Geneva,sans-serif"
                       },
                       {
                           text: "Times New Roman",
                           value: "'Times New Roman',Times,serif"
                       },
                       {
                           text: "Trebuchet MS",
                           value: "'Trebuchet MS',Helvetica,sans-serif"
                       },
                       {
                           text: "Verdana",
                           value: "Verdana,Geneva,sans-serif"
                       }
            ],
            /**		
            * Sets the fontSize in RTE. 
            * @default 	null
            * @type {object}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the fontSize value specified.
            * $("#rteSample").ejRTE({ fontSize: [
                {
                    text: "1",
                    value: "1"
                },
                {
                    text: "2 (10pt)",
                    value: "2"
                },
                {
                    text: "3 (12pt)",
                    value: "3"
                },
                {
                    text: "4 (14pt)",
                    value: "4"
                },
                {
                    text: "5 (18pt)",
                    value: "5"
                },
                {
                    text: "6 (24pt)",
                    value: "6"
                },
                {
                    text: "7 (36pt)",
                    value: "7"
                }
            * ]});
            * &lt;/script&gt;	
            * @memberof ejRTE
            * @instance
            */
            fontSize: [
                {
                    text: "1",
                    value: "1"
                },
                {
                    text: "2 (10pt)",
                    value: "2"
                },
                {
                    text: "3 (12pt)",
                    value: "3"
                },
                {
                    text: "4 (14pt)",
                    value: "4"
                },
                {
                    text: "5 (18pt)",
                    value: "5"
                },
                {
                    text: "6 (24pt)",
                    value: "6"
                },
                {
                    text: "7 (36pt)",
                    value: "7"
                }
            ],
            /**		
            * Given number for rows render the insert table pop. 
            * @default 	""
            * @type {number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the 'tableRows' value specified.
            * $("#rteSample").ejRTE({tableRows: 70 });
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            tableRows: 7,
            /**		
            * Given number for columns render the insert table pop. 
            * @default 	""
            * @type {number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the 'tableColumns' value specified.
            * $("#rteSample").ejRTE({tableColumns: 70 });
           * &lt;/script&gt; 
            * @memberof ejRTE
            * @instance
            */
            tableColumns: 9,
            /**		
            * Given number for rows render the color palete pop up.
            * @default 	""
            * @type {number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the 'colorPaletteRows' value specified.
            * $("#rteSample").ejRTE({colorPaletteRows: 70 });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            colorPaletteRows: 6,
            /**		
            * Given number for columns render the color palete pop up. 
            * @default 	""
            * @type {number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the 'colorPaletteColumns' value specified.
            * $("#rteSample").ejRTE({colorPaletteColumns: 70 });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            colorPaletteColumns: 6,
            /**		
            * Shows CustomTable in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the showCustomTable value specified.
            * $("#rteSample").ejRTE({showCustomTable: false });
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            showCustomTable: true,
            /**		
            * Given string value to display in the editable area. 
            * @default 	""
            * @type {string}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the 'value' value specified.
            * $("#rteSample").ejRTE({value: "The Rich Text Editor (RTE) control is an easy to render in client side. Customer easy to edit the contents, insert table, images and get the HTML content for the displayed content." });
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            value: null,
            /**		
            * Undo operation provide the number of step limit. 
            * @default 	""
            * @type {number}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the 'vaundoStackLimitlue' value specified.
            * $("#rteSample").ejRTE({undoStackLimit: 70 });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            undoStackLimit: 50,
            /**		
            * Shows enableResize in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the enableResize value specified.
            * $("#rteSample").ejRTE({enableResize: false });
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            enableResize: true,
            /**		
            *  enablePersistence the values in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the enablePersistence value specified.
            * $("#rteSample").ejRTE({enablePersistence: false });
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            enablePersistence: false,
            /**		
            * shows enableRTL in RTE. 
            * @default 	True
            * @type {boolean}
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
            * // Initialize the RTE with the enableRTL value specified.
            * $("#rteSample").ejRTE({enableRTL: true });
           * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            enableRTL: false,
            //events
            /**     
            * Fires when change successfully.
            * @event
            * @name ejRTE#change 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the RTE model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
    * $("#rteSample").ejRTE();
            * //change event for RTE
            * $("#rteSample").ejRTE({ 
            *   	change: function(args) {}
            * });      
            * &lt;/script&gt;
            * @memberof ejRTE
            * @instance
            */
            change: null,
            /**     
            * Fires when execute successfully.
            * @event
            * @name ejRTE#execute 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the RTE model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
    * $("#rteSample").ejRTE();
            * //execute event for RTE
            * $("#rteSample").ejRTE({ 
            *   	execute: function(args) {}
            * });   
            * &lt;/script&gt;   
            * @memberof ejRTE
            * @instance
            */
            execute: null,
            /**     
            * Fires when keydown successfully.
            * @event
            * @name ejRTE#keydown 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the RTE model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
    * $("#rteSample").ejRTE();
            * //keydown event for RTE
            * $("#rteSample").ejRTE({ 
            *   	keydown: function(args) {}
            * });  
            * &lt;/script&gt;    
            * @memberof ejRTE
            * @instance
            */
            keydown: null,
            /**     
            * Fires when keyup successfully.
            * @event
            * @name ejRTE#keyup 	
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the RTE model
            * @param {string}  argument.type returns the name of the event
            * @example 
            * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
    * $("#rteSample").ejRTE();
            * //keyup event for RTE
            * $("#rteSample").ejRTE({ 
            *   	keyup: function(args) {}
            * });  
            * &lt;/script&gt;    
            * @memberof ejRTE
            * @instance
            */
            keyup: null,
            create: null,
            destroy: null
        },
        /**
         * Specify the data types for default properties 
		 * @private
         */
        dataTypes: {
            iframeAttribute:"string",
            cssClass: "string",
            name:"string",
            enabled: "boolean",
            enablePersistence: "boolean",
            toolsList: "array",
            colorCode: "array",
            format: "data",
            fontName: "data",
            fontSize: "data",
            tools: {
                formatStyle: "array",
                font: "array",
                style: "array",
                scripts: "array",
                alignment: "array",
                lists: "array",
                indenting: "array",
                copyPaste: "array",
                doAction: "array",
                clear: "array",
                links: "array",
                images: "array",
                tables: "array",
                casing: "array",
                customTool: "array"
            }
        },

        observables: ["value"],
        value:ej.util.valueFunction("value"),
        /**
        * To configure the properties at runtime using SetModel		
        * @private
        */
        _setModel: function (options) {
            if (!this.model.enabled && ej.isNullOrUndefined(options["enabled"])) return false;
            var option;
            for (option in options) {
                switch (option) {
                    case "allowEditing": this._enableEdit(options[option]); break;
                    case "showToolbar": {
                        options[option] ? ej.isNullOrUndefined(this._rteToolbar) ? this._renderToolBar() : this._rteToolbar.show() : this._rteToolbar.hide();
                        this._setIframeHeight();
                        break;
                    }
                    case "showFooter": {
                        this.model.showFooter = options[option];
                        options[option] ? ej.isNullOrUndefined(this._rteFooter) ? this._renderFooter() : this._rteFooter.show() : this._rteFooter.hide();
                        this._setIframeHeight();
                        break;
                    }
                    case "enabled": this._disabled(!options[option]); break;
                    case "height": this._rteWapper.height(options[option]); this._setIframeHeight(); break;
                    case "width": this._rteWapper.width(options[option]); break;
                    case "cssClass": this._changeSkin(options[option]); break;
                    case "showHtmlSource": this._footerElement("div.e-rte-source", options[option]); break;
                    case "showHtmlTagInfo": this._footerElement("div.e-rte-htmltaginfo", options[option]); break;
                    case "showWordCount": this._footerElement("div.e-rte-wordcount", options[option]); break;
                    case "showClearAll": this._footerElement("div.clearAll", options[option]); break;
                    case "showClearFormat": this._footerElement("div.clearFormat", options[option]); break;
                    case "enableResize": this._footerElement("div.e-rte-resize", options[option]); break;
                    case "fontName": this._fontStyleDDL.ejDropDownList({ dataSource: options[option] }); break;
                    case "fontSize": this._fontSizeDDL.ejDropDownList({ dataSource: options[option] }); break;
                    case "format": this._formatDDL.ejDropDownList({ dataSource: options[option] }); break;
                    case "value": this._getDocument().body.innerHTML = ej.util.getVal(options[option]); break;
                    case "showDimensions":
                        if (options[option]) {
                            this._rteWapper.find("#" + this._rteId + "_imgdimensions").show();
                            this._rteWapper.find("#" + this._rteId + "_videodimensions").show();
                        }
                        else {
                            this._rteWapper.find("#" + this._rteId + "_imgdimensions").hide();
                            this._rteWapper.find("#" + this._rteId + "_videodimensions").hide();
                        }
                        break;
                    case "locale":
                        this.model.locale = options[option];
                        var model = this.model;
                        this.element.ejRTE("destroy").ejRTE(model);
                        break;
                    case "tableRows": {
                        this.model.tableRows = options[option];
                        var tblDiv = this._createTable.find("div.e-rte-table").html("");
                        this._drawTable(tblDiv);
                        break;
                    }
					case "iframeAttribute":{
						this._updateIframeSkin(options[option]);
						break;
					}
                    case "tableColumns": {
                        this.model.tableColumns = options[option];
                        var tblDiv = this._createTable.find("div.e-rte-table").html("");
                        this._drawTable(tblDiv);
                        break;
                    }
                    case "showCustomTable": {
                        var custLink = this._createTable.find("div.customtable-group");
                        options[option] ? ej.isNullOrUndefined(this._customTableDialog) ? this._createCustomTable() : custLink.show() : custLink.hide();
                        break;
                    }
                    case "colorPaletteRows": {
                        this.model.colorPaletteRows = options[option];
                        this._updateColorPalette();
                        break;
                    }
                    case "colorPaletteColumns": {
                        this.model.colorPaletteColumns = options[option];
                        this._updateColorPalette();
                        break;
                    }
                    case "colorCode": {
                        this.model.colorCode = options[option];
                        this._updateColorPalette();
                        break;
                    }
                    case "enableRTL": this._enableRTL(options[option]); break;
                }
            }
        },

        // constructor function
        _init: function () {
            if (!ej.isNullOrUndefined(this.element) && this.element[0].type == "textarea") {
                this._initialize();
                this._render();
                this.model.allowEditing && this._wireEvents();
                this._updateIframeSkin(this.model.iframeAttribute);
            }
        },

        _destroy: function () {
            this.element.insertBefore(this._rteWapper);
            !ej.isNullOrUndefined(this._formatDDL) && this._formatDDL.ejDropDownList("destroy");
            !ej.isNullOrUndefined(this._fontStyleDDL) && this._fontStyleDDL.ejDropDownList("destroy");
            !ej.isNullOrUndefined(this._fontSizeDDL) && this._fontSizeDDL.ejDropDownList("destroy");
            !ej.isNullOrUndefined(this._fontColorSplit) && this._fontColorSplit.ejSplitButton("destroy");
            !ej.isNullOrUndefined(this._bgColorSplit) &&  this._bgColorSplit.ejSplitButton("destroy");
            if (!ej.isNullOrUndefined(this._customTableDialog)) {
                !ej.isNullOrUndefined(this._customTableDialog.find("#" + this._rteId + "_ddlAlignment")) && this._customTableDialog.find("#" + this._rteId + "_ddlAlignment").ejDropDownList("destroy");
                !ej.isNullOrUndefined(this._customTableDialog.find("#" + this._rteId + "_txtBorder")) && this._customTableDialog.find("#" + this._rteId + "_txtBorder").ejDropDownList("destroy");
            }
            this._rteWapper.remove();
            this.element.show();
            this._createTable = null;
        },

        _initialize: function () {
            this._toolsList = this.model.toolsList;
            this._rteId = this.element[0].id;
            this._backupArray = new Array();
            this._undoRedoPosition = 0;
            this._fontColor = "";
            this._bgColor = "";
            this._imgWidth = 0;
            this._imgHeight = 0;
            this._videoWidth = 0;
            this._videoHeight = 0;
            this._keypressFlag = true;
            this._styleItems = ej.isNullOrUndefined(this.model.tools["style"]) ? [] : this.model.tools["style"];
            this._alignItems = ej.isNullOrUndefined(this.model.tools["alignment"]) ? [] : this.model.tools["alignment"];
            this._listItems = ej.isNullOrUndefined(this.model.tools["lists"]) ? [] : this.model.tools["lists"];
            this._scriptsItems = ej.isNullOrUndefined(this.model.tools["scripts"]) ? [] : this.model.tools["scripts"];
        },

        _render: function () {
            this._renderWrapper();
            this._checkNameAttr();
            if (this.model.showToolbar) {
                this._renderToolBar();
            }
            this._renderEditArea();
            this.model.showFooter && this._renderFooter();
            this._setIframeHeight();
            this._renderAlertDialog();
            this._focus();
        },
        _checkNameAttr: function () {
            if (!this.model.name)
                this.element.attr({ "name": this.element[0].id });
            else
                this.element.attr({ "name": this.model.name });
        },
        _enableEdit: function (args) {
            if (args) {
                this._wireEvents();
                this.model.showToolbar && this._toolBarItems.ejToolbar("option", "click", this._toolBarClick);
                this._rteIframe.contents().find("body").attr("contenteditable", true);
                //this._getDocument().designMode = "On"
            }
            else {
                this._unwireEvents();
                this.model.showToolbar && this._toolBarItems.ejToolbar("option", "click", null);
                this._rteIframe.contents().find("body").attr("contenteditable", false);
                //this._getDocument().designMode = "off"
            }
        },
        _changeSkin: function (value) {
            this._rteWapper.removeClass(this.model.cssClass).addClass(value);
            this._subControlsSetModel("cssClass", value);
        },
		
        _updateIframeSkin: function (value) {
            var target = this._rteIframe.contents().find("body");
		    this.model.enableRTL===true ? (target.attr("style", value),this._enableRTL(this.model.enableRTL)) : target.attr("style", value);
        },

        // RTE wrapper creating.
        _renderWrapper: function () {
            this._rteWapper = ej.buildTag("div.e-rte e-rte-wrapper " + this.model.cssClass + "#" + this._rteId + "_wrapper", "", {}, { role: "presentation" }).insertBefore(this.element);
            this._rteWapper.height(this.model.height).width(this.model.width);
            this._rteWapper.append(this.element.hide());
        },
        //Toolbar creating
        _renderToolBar: function () {
            this._rteToolbar = ej.buildTag("div.e-rte-toolbar #" + this._rteId + "_tools").insertAfter(this.element);
            this._crateToolbarTemplate();
            var model = {};
            model.click = this.model.allowEditing ? this._toolBarClick : null;
            model.cssClass = this.model.cssClass;
            model.enableRTL = this.model.enableRTL;
            this._toolBarItems.ejToolbar(model);

            //Init the toolbar items
            this._initToolBarItems();

        },

        _crateToolbarTemplate: function () {
            this._toolBarItems = ej.buildTag("div#" + this._rteId + "_toolbar").appendTo(this._rteToolbar).height(30);
            for (var items in this._toolsList) {
                items = this._toolsList[items];
                if (!ej.isNullOrUndefined(this.model.tools[items])) {
                    if (items == "customTool")
                        !ej.isNullOrUndefined(this.model.tools[items]) && this._customTools(this.model.tools[items]);
                    else
                        this.model.tools[items].length > 0 && this._createToolsItems(this.model.tools[items], items);
                }
            }
        },

        _createToolsItems: function (items, itemName) {
            if (itemName == "font" && !this.model.showFontOption)
                return false;
            var ulTag = ej.buildTag("ul#" + (this._rteId + itemName)), liTag;
            (itemName == "font") && ulTag.addClass("e-rte-fontgroup");
            (itemName == "formatStyle") && ulTag.addClass("e-rte-format");
            for (var i = 0; i < items.length; i++) {
                liTag = $("<li id='" + (this._rteId + items[i].replace(/ /g, '')) + "' title='" + this._getLocalizedLabels(items[i].replace(/ /g, '')) + "' ><div class='e-rte-toolbar-icon " + items[i] + "'></div></li>");
                liTag.appendTo(ulTag);
            }
            ulTag.appendTo(this._toolBarItems);
        },

        _customTools: function (toolbarItems) {
            for (var item in toolbarItems) {
            var ulTag = ej.buildTag("ul"), liTag;
			    liTag = $("<li id='" + toolbarItems[item].name + "' title='" + toolbarItems[item].tooltip + "' ><div class='" + (ej.isNullOrUndefined(toolbarItems[item].css) ? "" : toolbarItems[item].css) + "'>"+toolbarItems[item].name+"</div></li>");
                var fn = toolbarItems[item].action;
                if (typeof fn === "string") {
                    fn = ej.util.getObject(fn, window);
                }
                !ej.isNullOrUndefined(toolbarItems[item].action) && this._on(liTag, "click", fn);
                $(toolbarItems[item].template).appendTo(liTag.find("div"));
            liTag.appendTo(ulTag);
            ulTag.appendTo(this._toolBarItems);
            }
        },

        _initToolBarItems: function () {
            this._toolBarObj = this._toolBarItems.ejToolbar("instance");
            this._rteToolbar.find("#" + this._rteId + "format").length > 0 && this._renderFormat();
            this._rteToolbar.find("#" + this._rteId + "createLink").length > 0 && this._renderLinkDialog();
            this._rteToolbar.find("#" + this._rteId + "video").length > 0 && this._renderVideoDialog();
            this._rteToolbar.find("#" + this._rteId + "image").length > 0 && this._renderImageDialog();
            this._rteToolbar.find("#" + this._rteId + "createTable").length > 0 && this._renderTableDialog();
            this._rteToolbar.find("#" + this._rteId + "fontName").length > 0 && this._renderFontStyle();
            this._rteToolbar.find("#" + this._rteId + "fontSize").length > 0 && this._renderFontSize();
            this._rteToolbar.find("#" + this._rteId + "fontColor").length > 0 && this._renderFontColor();
            this._rteToolbar.find("#" + this._rteId + "backgroundColor").length > 0 && this._renderBGColor();
            !this.model.showClearAll && this._rteToolbar.find("#" + this._rteId + "clearAll").hide();
            !this.model.showClearAll && this._rteToolbar.find("#" + this._rteId + "clearAll").hide();
            this._toolBarObj.disableItemByID(this._rteId + "undo");
            this._toolBarObj.disableItemByID(this._rteId + "redo");
            this._toolBarObj.selectItemByID(this._rteId + "justifyLeft");
            //Hide the editable table icons
            this._toolBarItems.find("#" + this._rteId + "addColumnLeft, #" + this._rteId + "addColumnRight, #" + this._rteId + "addRowAbove, #"
             + this._rteId + "addRowBelow, #" + this._rteId + "deleteRow, #" + this._rteId + "deleteColumn, #" + this._rteId + "deleteTable").hide();
        },
        //Editable Area
        _renderEditArea: function () {
            var _rteEditer = ej.buildTag("div.editarea #" + this._rteId + "_editer").appendTo(this._rteWapper);
            this._rteIframe = ej.buildTag("iframe.content-iframe #" + this._rteId + "_Iframe").appendTo(_rteEditer);
            this._setIFrames();
        },

        //Sets the editor and source editors
        _setIFrames: function () {
            //var RTE = $find(this._rteId);
            this.value(this.value() == null ? $.trim(this.element[0].value) : this.value());
            this._iframeId = this._rteId + "_Iframe";
            var _htmlText = ("<!DOCTYPE html><html><head><meta charset='utf-8' /><style>html,body{padding:0;margin:-1px 5px 0;height:100%;min-height:100%; padding-top: 1px;font-size: 13px;font-family:Segoe UI;word-wrap: break-word;-webkit-nbsp-mode: space;-webkit-line-break: after-white-space;}"
                + "h1{font-size:2em;margin:.67em 0}h2{font-size:1.5em}h3{font-size:1.16em}h4{font-size:1em}h5{font-size:.83em}h6{font-size:.7em}"
                + "p{margin:0 0 1em;padding:0 .2em} ul,ol{padding-left:2.5em} a{color:#00a} blockquote{margin-right: 0}"
                + ".e-rte-table{border-spacing:0;margin: 0.2em 0 0.5em;border: 1px solid;}.e-rte-table caption{border: 1px solid;border-bottom:none}"
                + ".e-rte-table,.e-rte-table td{outline:0;border-collapse: collapse; min-height:1px;vertical-align: top;text-indent: 5px;} .e-rte-table p{margin:0;padding:0;}"
                + "</style></head><body autocorrect='off' contenteditable=" + (this.model.allowEditing ? 'true' : 'false') + ">" + $.trim(this.value()) + "</body></html>");
            this._rteIframe.css({ "width": "100%" });
            //this.model.allowEditing && (this._getDocument().designMode = "On");
            this._setContent(_htmlText);
            if (!ej.isNullOrUndefined(this.model.undoStackLimit) || this.model.undoStackLimit !== "" || this.model.undoStackLimit > 0)
                this._backupArray[0] = this.getHtml();
        },

        //Set the Iframe height 
        _setIframeHeight: function () {
            var _height = (!ej.isNullOrUndefined(this._rteToolbar) && this._rteToolbar.is(':visible') ? this._rteToolbar.outerHeight() : 6) + (!ej.isNullOrUndefined(this._rteFooter) && this._rteFooter.is(':visible') ? this._rteFooter.outerHeight() : 0);
            this._rteIframe.height(_height == 0 ? this.model.height : (this._rteWapper.outerHeight() - _height) - 1);
        },

        // Footer Div render 
        _renderFooter: function () {
            var options = this.model;
            this._rteFooter = ej.buildTag("div.e-rte-footer #" + this._rteId + "_footer").appendTo(this._rteWapper);
            var _leftPan = ej.buildTag("div.e-rte-footer-left");
            var _htmlSource = ej.buildTag("div.e-rte-icons e-rte-footeritems e-rte-footericon e-rte-source", "", {}, { title: this._getLocalizedLabels("viewHtml") }).appendTo(_leftPan);
            this._htmlInfo = ej.buildTag("div.e-rte-htmltaginfo e-rte-footeritems").appendTo(_leftPan);
            _leftPan.appendTo(this._rteFooter);
            var _rightPan = ej.buildTag("div.e-rte-footer-right");
            this._wordCount = ej.buildTag("div.e-rte-wordcount e-rte-footeritems").appendTo(_rightPan);
            var _clearFormat = ej.buildTag("div.e-rte-icons clearFormat e-rte-footericon e-rte-footeritems", "", {}, { title: this._getLocalizedLabels("clearFormat") }).appendTo(_rightPan);
            var _clearAll = ej.buildTag("div.e-rte-icons clearAll e-rte-footericon e-rte-footeritems", "", {}, { title: this._getLocalizedLabels("clearAll") }).appendTo(_rightPan);
            var _resize = ej.buildTag("div.e-icons e-rte-resize e-rte-footeritems").appendTo(_rightPan);
            _rightPan.appendTo(this._rteFooter);
            this._on(_htmlSource, "click", this._sourceCodeManager);
            this._on(_clearFormat, "click", this._onClearFormat);
            this._on(_clearAll, "click", this._clearAllManager);
            !this.model.showHtmlSource && _htmlSource.hide().removeClass("e-rte-footeritems");
            !this.model.showHtmlTagInfo && this._htmlInfo.hide().removeClass("e-rte-footeritems");
            !this.model.showWordCount && this._wordCount.hide().removeClass("e-rte-footeritems");
            !this.model.showClearAll && _clearAll.hide().removeClass("e-rte-footeritems");
            !this.model.showClearFormat && _clearFormat.hide().removeClass("e-rte-footeritems");
            if (options.enableResize)
                this._enableResize();
            else
                _resize.hide().removeClass("e-rte-footeritems");
            this._updateCharCount();
        },
        //Enable Footer element
        _footerElement: function (selector, visible) {
            var ele = this._rteFooter.find(selector);
            visible ? ele.show().addClass("e-rte-footeritems") : ele.hide().addClass("e-rte-footeritems");
        },
        //Update Color Palettes
        _updateColorPalette: function () {
            var _fontColor = $("ul#" + this._rteId + "_colorTable");
            var _bgColor = $("ul#" + this._rteId + "_colorBGTable");
            _fontColor.find("div.e-rte-table").remove();
            _fontColor.find("li").append(this._colorTable());
            //Bg Color table Update
            _bgColor.find("div.e-rte-table").remove();
            _bgColor.find("li").append(this._colorTable());
        },

        //Enable RTE
        _enableRTL: function (value) {
            if (value) {
                //this._rteWapper.addClass("e-rtl");
                this._rteIframe.contents().find("body").css("direction", "rtl");
            }
            else {
                this._rteIframe.contents().find("body").css("direction", "");
            }
            this._subControlsSetModel("enableRTL", value);
        },

        _subControlsSetModel: function (prop, value) {
            !ej.isNullOrUndefined(this._toolBarItems) && this._toolBarItems.ejToolbar({ prop: value });
            !ej.isNullOrUndefined(this._linkDialog) && this._linkDialog.ejDialog({ prop: value });
            !ej.isNullOrUndefined(this._imgDialog) && this._imgDialog.ejDialog({ prop: value });
            !ej.isNullOrUndefined(this._videoDialog) && this._videoDialog.ejDialog({ prop: value });
            !ej.isNullOrUndefined(this._createTable) && this._createTable.ejDialog({ prop: value });
            !ej.isNullOrUndefined(this._sourceDialog) && this._sourceDialog.ejDialog({ prop: value });
            if (!ej.isNullOrUndefined(this._customTableDialog)) {
                !ej.isNullOrUndefined(this._customTableDialog) && this._customTableDialog.ejDialog({ prop: value });
                this._customTableDialog.find(".numerictextbox").ejNumericTextbox({ prop: value });
                this._customTableDialog.find("#ddlAlignment").ejDropDownList({ prop: value });
                !ej.isNullOrUndefined(this._customTableDialog) && this._customTableDialog.find(".e-rte-btn").ejButton({ prop: value });
            }
            !ej.isNullOrUndefined(this._videoDialog) && this._videoDialog.find(".e-rte-btn").ejButton({ prop: value });
            !ej.isNullOrUndefined(this._imgDialog) && this._imgDialog.find(".e-rte-btn").ejButton({ prop: value });
            !ej.isNullOrUndefined(this._linkDialog) && this._linkDialog.find(".e-rte-btn").ejButton({ prop: value });
            !ej.isNullOrUndefined(this._fontStyleDDL) && this._fontStyleDDL.ejDropDownList({ prop: value });
            !ej.isNullOrUndefined(this._fontSizeDDL) && this._fontSizeDDL.ejDropDownList({ prop: value });
            !ej.isNullOrUndefined(this._formatDDL) && this._formatDDL.ejDropDownList({ prop: value });
            !ej.isNullOrUndefined(this._fontColorSplit) && this._fontColorSplit.ejSplitButton({ prop: value });
            !ej.isNullOrUndefined(this._bgColorSplit) && this._bgColorSplit.ejSplitButton({ prop: value });
        },
        _createHtmlSource: function () {
            if (ej.isNullOrUndefined(this._htmlSource)) {
                this._htmlSource = ej.buildTag("div.e-rte-icons e-rte-footeritems e-rte-source").appendTo(this._rteFooter);
                this._on(this._htmlSource, "click", this._sourceCodeManager);
                this._renderSourceDialog()
            }
            else
                this._htmlSource.show();
        },
        _createHtmlTagsInfo: function () {
            //var _htmlInfo = this._rteFooter.find("div.e-rte-htmltaginfo");
            if (ej.isNullOrUndefined(this._htmlInfo)) {
                this._htmlInfo = ej.buildTag("div.e-rte-htmltaginfo e-rte-footeritems").appendTo(this._rteFooter);
            }
            else
                this._htmlInfo.show();
        },
        _createWordCount: function () {
            if (ej.isNullOrUndefined(this._wordCount)) {
                this._wordCount = ej.buildTag("div.e-rte-wordcount e-rte-footeritems").appendTo(this._rteFooter);
            }
            else
                this._wordCount.show();
        },
        //Add resize icon
        _enableResize: function () {
            if (this.model.enableResize && this.model.enabled) {
                this._rteWapper.addClass("e-resizable");
                this._resizeRTE();
            }
        },
        // Resizeable 
        _resizeRTE: function () {
            var proxy = this;
            this._rteWapper.find("div.e-rte-resize").ejResizable(
                {
                    minHeight: parseInt(proxy.model.minHeight),
                    minWidth: parseInt(proxy.model.minWidth),
                    maxHeight: parseInt(proxy.model.maxHeight),
                    maxWidth: parseInt(proxy.model.maxWidth),
                    resizeStart: function (event) {
                        proxy._trigger("resizeStart", { event: event });
                    },
                    resize: function (event) {
                        var reElement = $(event.element).parents("div.e-rte-wrapper");
                        proxy._rteWapper.height($(reElement).height());
                        proxy._rteWapper.width($(reElement).width());
                        proxy._setIframeHeight();
                        proxy._trigger("resize", { event: event });
                    },
                    resizeStop: function (event) {
                        proxy._trigger("resizeStop", { event: event });
                    },
                    helper: function (event) {
                        var reElement = $(event.element).parents("div.e-rte-wrapper");
                        proxy._rteWapper.height($(reElement).height());
                        proxy._rteWapper.width($(reElement).width());
                        proxy._setIframeHeight();
                        return $(proxy._rteWapper);
                    }
                });
        },

        _getDialogModel: function () {
            return dialogModel = {
                enableResize: false,
                showOnInit: false,
                enableModal: true,
                cssClass: this.model.cssClass,
                content: "#" + this._rteId + "_wrapper",
                enableRTL: this.model.enableRTL
            };
        },

        //Render Link Dialog
        _renderLinkDialog: function () {
            var createLink = this._linkDialog = ej.buildTag("div#" + this._rteId + "_link");//.appendTo(this._rteWapper);
            var content = $("<div class='e-rte-label'><label for=" + this._rteId + "_link_url>" + this._getLocalizedLabels("linkWebUrl") + "</label></div><div class='e-rte-field'><input type='text' class='e-inputtext' id='" + this._rteId + "_link_url'/></div><div class='e-rte-label'>" +
                           "<label for="+ this._rteId + "_link_text>" + this._getLocalizedLabels("linkText") + "</label></div><div class='e-rte-field'><input type='text' class='e-inputtext' id='" + this._rteId + "_link_text'></div><div class='e-rte-label'>" +
                           "<label for=" + this._rteId + "_link_title>" + this._getLocalizedLabels("linkToolTip") + " </label></div><div class='e-rte-field'><input type='text' class='e-inputtext' id='" + this._rteId + "_link_title'></div><div class='e-rte-label'></div>" +
                           "<div class='e-rte-field'><input type='checkbox' id='" + this._rteId + "_link_target'><label for='" + this._rteId + "_link_target' style='padding: 5px;'>" + this._getLocalizedLabels("linkOpenInNewWindow") + "</label></div>" +
                           "<div class='e-rte-button e-fieldseparate'><button class='e-rte-btn' id='link_insert'>" + this._getLocalizedLabels("dialogInsert") + "</button><button class='e-rte-btn' id='link_cancel'>" + this._getLocalizedLabels("dialogCancel") + "</button></div>");
            content.appendTo(createLink);
            createLink.appendTo(this._rteWapper);
            var model = this._getDialogModel();
            model.title = this._getLocalizedLabels("createLink");
            createLink.ejDialog(model);
            this._chkTarget = createLink.find("#" + this._rteId + "_link_target");
            this._chkTarget.ejCheckBox({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            createLink.find(".e-rte-btn").ejButton({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._on(createLink.find(".e-rte-btn"), "click", this._linkBtnClick)
            this._on(this._linkDialog.find("#" + this._rteId + "_link_url"), "keypress", this._urlValidation);
        },

        //Render Link Dialog
        _renderImageDialog: function () {
            this._imgDialog = ej.buildTag("div#" + this._rteId + "_Image");
            var content = $("<div class='e-rte-label'><label for=" + this._rteId + "_img_url>" + this._getLocalizedLabels("imageWebUrl") + " </label></div><div class='e-rte-field'><input type='text' class='e-inputtext' id='" + this._rteId + "_img_url'></div><div class='e-rte-label'>" +
                 "<label for=" + this._rteId + "_img_text>" + this._getLocalizedLabels("imageAltText") + " </label></div><div class='e-rte-field'><input type='text' class='e-inputtext' id='" + this._rteId + "_img_text'></div>" +
                 "<div id='" + this._rteId + "_imgdimensions'><div class='e-rte-label'><label>" + this._getLocalizedLabels("dimensions") + " </label></div><div class='e-rte-field'><input type='text' title='" + this._getLocalizedLabels("dimensions") + "' class='e-inputtext e-dimensions' maxlength='3' id='" + this._rteId + "_imgX'><label style='padding: 5px;'>X</label><input type='text' title='" + this._getLocalizedLabels("dimensions") + "' style='margin-right: 5px;' class='e-inputtext e-dimensions' maxlength='3' id='" + this._rteId + "_imgY'></div>" +
                 "<input type='checkbox' id='" + this._rteId + "_img_consrn'><label for='" + this._rteId + "_img_consrn'  style='padding: 5px;'>" + this._getLocalizedLabels("constrainProportions") + "</label></div>" +
                 "<div class='e-rte-button e-fieldseparate'><button class='e-rte-btn' id='img_insert'>" + this._getLocalizedLabels("dialogInsert") + "</button><button class='e-rte-btn' id='img_cancel'>" + this._getLocalizedLabels("dialogCancel") + "</button></div>");
            content.appendTo(this._imgDialog);
            this._imgDialog.appendTo(this._rteWapper);
            !this.model.showDimensions && this._rteWapper.find("#" + this._rteId + "_imgdimensions").hide();
            var model = this._getDialogModel();
            model.width = "470px";
            model.title = this._getLocalizedLabels("image");
            this._imgDialog.ejDialog(model);
            this._chkImgDimensions = this._imgDialog.find("#" + this._rteId + "_img_consrn");
            this._chkImgDimensions.ejCheckBox({ check: true, enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._imgDialog.find(".e-rte-btn").ejButton({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._on(this._imgDialog.find(".e-rte-btn"), "click", this._imageBtnClick)
            this._on(this._imgDialog.find("#" + this._rteId + "_img_url"), "keypress", this._urlValidation);
            this._on(this._imgDialog.find("input.e-dimensions"), "change", this._recalcImgSize);
        },

        //Render the Table selection rows and columans popup
        _renderVideoDialog: function () {
            this._videoDialog = ej.buildTag("div#" + this._rteId + "_video");
            var content = $("<div><label>" + this._getLocalizedLabels("embedVideo") + "</label></div><textarea class='e-rte-video e-inputtext'  aria-label=" + this._getLocalizedLabels("embedVideo") + "></textarea>" +
               "<div id='" + this._rteId + "_videodimensions' style='margin-top:7px'><div class='e-rte-label'><label>" + this._getLocalizedLabels("dimensions") + " </label></div><div><input type='text' title='" + this._getLocalizedLabels("dimensions") + "' class='e-inputtext e-dimensions' maxlength='3' id='" + this._rteId + "_videoX'><label style='padding: 5px;'>X</label><input type='text' title='" + this._getLocalizedLabels("dimensions") + "' style='margin-right: 5px;' class='e-inputtext e-dimensions' maxlength='3' id='" + this._rteId + "_videoY'>" +
               "<input type='checkbox' id='" + this._rteId + "_video_consrn'><label for='" + this._rteId + "_video_consrn'  style='padding: 5px;'>" + this._getLocalizedLabels("constrainProportions") + "</label></div></div>" +
                "<div class='e-rte-button e-fieldseparate'><button id='video_insert' class='e-rte-btn'>" + this._getLocalizedLabels("dialogInsert") + "</button><button id='video_cancel' class='e-rte-btn'>" + this._getLocalizedLabels("dialogCancel") + "</button></div>");
            content.appendTo(this._videoDialog);
            this._videoDialog.appendTo(this._rteWapper);
            !this.model.showDimensions && this._rteWapper.find("#" + this._rteId + "_videodimensions").hide();
            var model = this._getDialogModel();
            model.width = "460px";
            model.title = this._getLocalizedLabels("video");
            this._videoDialog.ejDialog(model);
            this._chkvideoDimensions = this._videoDialog.find("#" + this._rteId + "_video_consrn");
            this._chkvideoDimensions.ejCheckBox({ checked: true, enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._videoDialog.find(".e-rte-btn").ejButton({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._on(this._videoDialog.find(".e-rte-btn"), "click", this._insertVideo);
            this._on(this._videoDialog.find("input.e-dimensions"), "change", this._recalcVideoSize);
        },

        //Render the Table selection rows and columans popup
        _renderTableDialog: function () {
            this._createTable = ej.buildTag("div.e-rte-table-picker#" + this._rteId + "_table");
            var tableCell, rowDiv, colDiv, tableDiv;
            this._tblheaderDiv = ej.buildTag("div.e-rte-tableheader");
            this._tblheaderDiv.html(this._getLocalizedLabels("createTable"));
            this._tblheaderDiv.appendTo(this._createTable);
            var tableDiv = ej.buildTag("div.e-rte-table");
            this._drawTable(tableDiv);
            tableDiv.appendTo(this._createTable);
            if (this.model.showCustomTable) {
                this._createCustomTable();
            }

            this._createTable.appendTo(this._rteWapper);
            var model = this._getDialogModel();
            model.modal = false;
            model.showHeader = false;
            model.width = "auto";
            this._createTable.ejDialog(model);
        },

        _createCustomTable: function () {
            var customTable = $("<div class='customtable-group'><span class='e-rte-toolbar-icon customtable-image'></span><a class='customtable-link' href='#' role='button' title='" + this._getLocalizedLabels("customTable") + "'>" + this._getLocalizedLabels("customTable") + "</a></div>");
            this._on(customTable, "click", this._openCustomTable);
            customTable.appendTo(this._createTable);
            //Create custom table Dialog.
            this._customTableDialog = ej.buildTag("div#" + this._rteId + "_customTable");
            var content = $("<div class='e-fieldgroup'><div class='e-rte-tablefields'><label for=" + this._rteId + "_txtColumns>" + this._getLocalizedLabels("tableColumns") + "</label></div><div class='e-rte-tablefields'><input type='text' class='numerictextbox' id='" + this._rteId + "_txtColumns'></div><div class='e-rte-tablefields'>" +
                 "<label for=" + this._rteId + "_txtRows>" + this._getLocalizedLabels("tableRows") + "</label></div><div class='e-rte-tablefields'><input type='text' class='numerictextbox' id='" + this._rteId + "_txtRows'></div><div class='e-rte-tablefields'>" +
                 "<label for=" + this._rteId + "_txtWidth>" + this._getLocalizedLabels("tableWidth") + "</label></div><div class='e-rte-tablefields'><input type='text' class='e-inputtext' id='" + this._rteId + "_txtWidth'></div>" +
                 "<div class='e-rte-tablefields'><label for=" + this._rteId + "_txtHeight>" + this._getLocalizedLabels("tableHeight") + "</label></div><div class='e-rte-tablefields'><input type='text' class='e-inputtext' id='" + this._rteId + "_txtHeight'></div></div>" +
                 "<div class='e-fieldseparate'><div class='e-rte-tablefields'><label for=" + this._rteId + "_txtSpacing>" + this._getLocalizedLabels("tableCellSpacing") + "</label></div><div class='e-rte-tablefields'><input type='text' class='e-inputtext' id='" + this._rteId + "_txtSpacing'></div>" +
                 "<div class='e-rte-tablefields'><label for=" + this._rteId + "_txtPadding>" + this._getLocalizedLabels("tableCellPadding") + "</label></div><div class='e-rte-tablefields'><input type='text' class='e-inputtext' id='" + this._rteId + "_txtPadding'></div>" +
                 "<div class='e-rte-tablefields'><label for=" + this._rteId + "_txtBorder>" + this._getLocalizedLabels("tableBorder") + "</label></div><div class='e-rte-tablefields'><select id='" + this._rteId + "_txtBorder'><option value='solid'>Solid</option><option value='dotted'>Dotted</option><option value='dashed'>Dashed</option><option value='double'>Double</option></select></div>" +
                 "<div class='e-rte-tablefields'><label for=" + this._rteId + "_chkCaption>" + this._getLocalizedLabels("tableCaption") + "</label></div><div class='e-rte-tablefields'><input type='checkbox' id='" + this._rteId + "_chkCaption'></div>" +
                 "<div class='e-rte-tablefields'><label for=" + this._rteId + "_ddlAlignment>" + this._getLocalizedLabels("tableAlignment") + "</label></div><div class='e-rte-tablefields'><select id='" + this._rteId + "_ddlAlignment'><option value='left'>Left</option><option value='right'>Right</option><option value='center'>Center</option></select></div></div>" +
                 "<div class='e-rte-button e-fieldseparate'><button class='e-rte-btn' id='insert'>" + this._getLocalizedLabels("dialogInsert") + "</button><button class='e-rte-btn' id='cancel'>" + this._getLocalizedLabels("dialogCancel") + "</button></div>");
            content.appendTo(this._customTableDialog);
            var model = this._getDialogModel();
            model.width = "480px";
            model.title = this._getLocalizedLabels("customTable");
            this._customTableDialog.ejDialog(model);
            this._customTableDialog.find(".e-rte-btn").ejButton({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._customTableDialog.find(".numerictextbox").ejNumericTextbox({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass, width: "100%", minValue: 1, value: 3 });
            this._customTableDialog.find("#" + this._rteId + "_txtColumns").ejNumericTextbox({ maxValue: 63 });
            this._customTableDialog.find("#" + this._rteId + "_ddlAlignment").ejDropDownList({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass, width: "100%", enabled:false });
            this._customTableDialog.find("#" + this._rteId + "_txtBorder").ejDropDownList({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass, width: "100%", enabled: true });
            this._chkTblCaption = this._customTableDialog.find("#" + this._rteId + "_chkCaption");
            this._chkTblCaption.ejCheckBox({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._on(this._customTableDialog.find(".e-rte-btn"), "click", this._insertCustomTable);
        },

        _drawTable: function (tableDiv) {
            for (var row = 0; row < this.model.tableRows ; row++) {
                rowDiv = ej.buildTag("div.e-rtetablerow");
                for (var col = 0; col < this.model.tableColumns; col++) {
                    tableCell = ej.buildTag("div.e-rte-tablecell e-default");
                    tableCell.appendTo(rowDiv);
                }
                rowDiv.appendTo(tableDiv);
            }
        },

        //Render Source code Dialog.
        _renderSourceDialog: function () {
            this._sourceDialog = ej.buildTag("div#" + this._rteId + "_Source");
            var content = $("<textarea class='e-rte-srctextarea e-inputtext'></textarea><div class='e-rte-button e-fieldseparate'><button id='src_update' class='e-rte-btn'>" + this._getLocalizedLabels("dialogUpdate") + "</button><button id='src_cancel' class='e-rte-btn'>" + this._getLocalizedLabels("dialogCancel") + "</button></div>");
            content.appendTo(this._sourceDialog);
            var model = this._getDialogModel();
            model.title = this._getLocalizedLabels("viewHtml");
            model.width = "auto";
            model.content = null,
            this._sourceDialog.ejDialog(model);
            this._sourceDialog.find(".e-rte-btn").ejButton({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._on(this._sourceDialog.find(".e-rte-btn"), "click", this._srcBtnClick)
        },

        //Render Alert Dialog
        _renderAlertDialog: function () {
            this._alertWindow = ej.buildTag("div");
            var content = $("<p class='e-alerttext'></p><div class='e-rte-button e-fieldseparate'><button class='e-rte-btn e-alert-ok'>" + this._getLocalizedLabels("dialogOk") + "</button><button class='e-rte-btn e-alert-cancel'>" + this._getLocalizedLabels("dialogCancel") + "</button></div>");
            content.appendTo(this._alertWindow);
            var model = this._getDialogModel();
            model.showHeader = false;
            model.width = "auto";
            this._alertWindow.ejDialog(model);
            this._alertWindow.find(".e-rte-btn").ejButton({ enableRTL: this.model.enableRTL, cssClass: this.model.cssClass });
            this._on(this._alertWindow.find(".e-rte-btn"), "click", this._alertBtnClick)
            this._alertWindow.find(".e-alert-cancel").hide();
        },

        _alertBtnClick: function (e) {
            if ($.trim(this._alertWindow.find(".e-alerttext").html()) == this._getLocalizedLabels("deleteAlert") && $(e.target).hasClass("e-alert-ok")) {
                this._getDocument().body.innerHTML = "";
                this._toolBarObj.selectItemByID(this._rteId + "justifyLeft");
                this._setBackupData();
                this._updateCharCount();
                this._onChange();
            }
            this._alertWindow.ejDialog("close");
            this._alertWindow.find(".e-alert-cancel").hide();
        },

        _openAlert: function (alertText) {
            this._alertWindow.find(".e-alerttext").html(alertText);
            this._alertWindow.ejDialog("open");
        },

        //Render Format 
        _renderFormat: function () {
            this._formatDDL = ej.buildTag("input#" + this._rteId + "_format", "", "", { type: "text", title: this._getLocalizedLabels("format") });
            var model = {};
            model.dataSource = this.model.format;
            model.height = "25px";
            model.width = "105px";
            model.enableRTL = this.model.enableRTL;
            model.popupWidth = "175px";
            model.popupHeight = "auto";
            model.selectedItemIndex = 0;
            model.popupHide = this._formatChange;
            model.fields = { text: "text", value: "value", spriteCssClass: "spriteCssClass" };
            this._formatDDL.appendTo(this._rteToolbar.find("#" + this._rteId + "format").html(""));
            this._formatDDL.ejDropDownList(model);
            this._formatPopupStyle();
        },
        //Apply the css class for LI elemet
        _formatPopupStyle: function () {
            var _liList = $("#" + this._rteId + "_format_popup").find("li");
            for (var i = 0; i < _liList.length; i++) {
                $(_liList[i]).addClass(this.model.format[i].spriteCssClass);
            }
        },

        // Render Font style Dropdown list
        _renderFontStyle: function () {
            this._fontStyleDDL = ej.buildTag("input#" + this._rteId + "_fontName", "", "", { type: "text", title: this._getLocalizedLabels("fontName") });
            var model = {};
            model.dataSource = this.model.fontName;
            model.height = "25px";
            model.enableRTL = this.model.enableRTL;
            model.selectedItemIndex = 0;
            model.popupHide = this._fontStyleChange;
            model.fields = { text: "text", value: "value" };
            this._fontStyleDDL.appendTo(this._rteToolbar.find("#" + this._rteId + "fontName").html(""));
            this._fontStyleDDL.ejDropDownList(model);
        },

        // Render Font style Dropdown list
        _renderFontSize: function () {
            this._fontSizeDDL = ej.buildTag("input#" + this._rteId + "_fontSize", "", "", { type: "text", title: this._getLocalizedLabels("fontSize") });
            var model = {};
            model.dataSource = this.model.fontSize;
            model.height = "25px";
            model.width = "100px";
            model.enableRTL = this.model.enableRTL
            model.selectedItemIndex = 1;
            model.popupHide = this._fontSizeChange;
            model.fields = { text: "text", value: "value" };
            this._fontSizeDDL.appendTo(this._rteToolbar.find("#" + this._rteId + "fontSize").html(""));
            this._fontSizeDDL.ejDropDownList(model);
        },

        //Render Split button for font color
        _renderFontColor: function () {
            this._fontColorSplit = ej.buildTag("button#" + this._rteId + "_fontColor", "", {},{ type:"button"});
            var _liTemplte = $("<ul id='" + this._rteId + "_colorTable' class='e-rte-colorpalette'><li></li></ul>");
            _liTemplte.find("li").append(this._colorTable());
            var model = {};
            model.height = "25px";
            model.width = "50px";
            model.contentType = "textandimage";
            model.targetID = this._rteId + "_colorTable";
            model.enableRTL = this.model.enableRTL;
            model.prefixIcon = "e-fontcolor-icon";
            this._fontColorSplit.appendTo(this._rteToolbar.find("#" + this._rteId + "fontColor").html(""));
            _liTemplte.appendTo(this._rteToolbar.find("#" + this._rteId + "fontColor"));
            this._fontColorSplit.ejSplitButton(model);
            this._splitMenu = _liTemplte.ejMenu("instance");
            this._on(_liTemplte.find("div.e-rte-palettetable"), "click", this._colorPaletteClick);
            this._on(this._fontColorSplit, "click", this._fontColorClick);
            this._fontColorSplit.find("span.e-fontcolor-icon").removeClass("e-icon");
            this._fontColorSplit.find("span.e-btntxt").css("background-color", "black");
        },

        //Render Split button for font color
        _renderBGColor: function () {
            this._bgColorSplit = ej.buildTag("button#" + this._rteId + "_backgroundColor", "", {},{type:"button"});
            var _liTemplte = $("<ul id='" + this._rteId + "_colorBGTable' class='e-rte-colorpalette'><li></li></ul>");
            _liTemplte.find("li").append(this._colorTable());
            var model = {};
            model.height = "25px";
            model.width = "50px";
            model.contentType = "textandimage";
            model.targetID = this._rteId + "_colorBGTable";
            model.enableRTL = this.model.enableRTL;
            model.prefixIcon = "e-bgcolor-icon";
            this._bgColorSplit.appendTo(this._rteToolbar.find("#" + this._rteId + "backgroundColor").html(""));
            _liTemplte.appendTo(this._rteToolbar.find("#" + this._rteId + "backgroundColor"));
            this._bgColorSplit.ejSplitButton(model);
            this._bgSplitMenu = _liTemplte.ejMenu("instance");
            this._on(_liTemplte.find("div.e-rte-palettetable"), "click", this._bgColorPaletteClick);
            this._on(this._bgColorSplit, "click", this._bgColorClick);
            this._bgColorSplit.find("span.e-bgcolor-icon").removeClass("e-icon");
            this._bgColorSplit.find("span.e-btntxt").css("background-color", "white");
        },

        _colorTable: function () {
            var tableDiv = ej.buildTag("div.e-rte-table");
            var color = 0, hexCode, rowDiv;
            for (var row = 0; row < this.model.colorPaletteRows ; row++) {
                rowDiv = ej.buildTag("div.e-rtetablerow");
                for (var col = 0; col < this.model.colorPaletteColumns ; col++) {
                    if (color < this.model.colorCode.length) {
                        hexCode = "#" + this.model.colorCode[color];
                        tableCell = ej.buildTag("div.e-rte-palettetable", "", { "background-color": hexCode }, { title: hexCode, "color-code": hexCode });
                        tableCell.appendTo(rowDiv);
                        color++;
                    }
                }
                rowDiv.appendTo(tableDiv);
            }
            return tableDiv;
        },

        _recalcVideoSize: function (e) {
            var txtWidth, txtheight, newWidth, newHeight;
            txtWidth = this._videoDialog.find("#" + this._rteId + "_videoX");
            txtheight = this._videoDialog.find("#" + this._rteId + "_videoY");

            newWidth = txtWidth.val();
            newHeight = txtheight.val();

            if (this._chkvideoDimensions.ejCheckBox("isChecked") && this._videoWidth && this._videoHeight && newWidth && newHeight) {
                if (e.target.id == txtWidth[0].id) {
                    newHeight = Math.round((newWidth / this._videoWidth) * newHeight);
                    txtheight.val(newHeight);
                } else {
                    newWidth = Math.round((newHeight / this._videoHeight) * newWidth);
                    txtWidth.val(newWidth);
                }
            }
            this._videoWidth = newWidth;
            this._videoHeight = newHeight;
        },


        _recalcImgSize: function (e) {
            var txtWidth, txtheight, newWidth, newHeight;
            txtWidth = this._imgDialog.find("#" + this._rteId + "_imgX");
            txtheight = this._imgDialog.find("#" + this._rteId + "_imgY");

            newWidth = txtWidth.val();
            newHeight = txtheight.val();

            if (this._chkImgDimensions.ejCheckBox("isChecked") && this._imgWidth && this._imgHeight && newWidth && newHeight) {
                if (e.target.id == txtWidth[0].id) {
                    newHeight = Math.round((newWidth / this._imgWidth) * newHeight);
                    txtheight.val(newHeight);
                } else {
                    newWidth = Math.round((newHeight / this._imgHeight) * newWidth);
                    txtWidth.val(newWidth);
                }
            }
            this._imgWidth = newWidth;
            this._imgHeight = newHeight;
        },

        _urlValidation: function (e) {
            var _target = $(e.target);
            _target.hasClass("e-error") && _target.removeClass("e-error");
        },

        _linkBtnClick: function (sender) {
            if (sender.target.id === "link_cancel") {
                this._clearLinkFields();
                this._linkDialog.ejDialog("close");
            }
            else if (sender.target.id === "link_insert") {
                this._restoreSelection(this._selectionRange);
                if (this._txtURL.val() != "")
                    this._onInsertLink();
                else {
                    this._onUnlink();
                    this._linkDialog.ejDialog("close");
                }
                this._onChange();
                this._setBackupData();
            }
        },

        _imageBtnClick: function (sender) {
            if (sender.target.id === "img_cancel") {
                this._imgDialog.ejDialog("close");
            }
            else if (sender.target.id === "img_insert") {
                this._onInsertImage();
                this._onChange();
                this._setBackupData();
            }
        },

        //Source Dialog button click event
        _srcBtnClick: function (sender) {
            if (sender.target.id === "src_update") {
                var _editHTML = $.trim(this._sourceDialog.find("textarea.e-rte-srctextarea")[0].value);
                this._getDocument().body.innerHTML = _editHTML;
                this._onChange();
                this._updateCharCount();
            }
            this._sourceDialog.find("textarea.e-rte-srctextarea")[0].value = "";
            this._sourceDialog.ejDialog("close");
        },

        _insertCustomTable: function (sender) {
            if (sender.target.id === "insert") {
                var cols = this._customTableDialog.find("#" + this._rteId + "_txtColumns").ejNumericTextbox("getValue");
                var row = this._customTableDialog.find("#" + this._rteId + "_txtRows").ejNumericTextbox("getValue");
                var height = this._customTableDialog.find("#" + this._rteId + "_txtHeight").val();
                var width = this._customTableDialog.find("#" + this._rteId + "_txtWidth").val();
                var align = this._customTableDialog.find("#" + this._rteId + "_ddlAlignment").ejDropDownList("getSelectedValue");
                var spacing = this._customTableDialog.find("#" + this._rteId + "_txtSpacing").val();
                var padding = this._customTableDialog.find("#" + this._rteId + "_txtPadding").val();
                var border = this._customTableDialog.find("#" + this._rteId + "_txtBorder").ejDropDownList("getSelectedValue");
                var caption = this._chkTblCaption.ejCheckBox("isChecked");
                if (!ej.isNullOrUndefined(this._tableInsertAt) && !ej.isNullOrUndefined(this._tableInsertAt.startContainer))
                    this._restoreSelection(this._tableInsertAt);
                var tableEle = this._tableGenerator(row, cols, false, width, height, spacing, padding, align, border, caption);
                this.executeCommand('inserthtml', tableEle);
                var _tableEle = $(this._getDocument()).find("table.e-rte-table");
                _tableEle.attr("contentEditable", false);
                _tableEle.find("td").attr("contentEditable", true);
                var drpDwnObj = this._customTableDialog.find("#" + this._rteId + "_ddlAlignment").data("ejDropDownList");
                if(drpDwnObj.option('value') == "Center" )
                    _tableEle.attr('style',"margin: 0 auto");
                //this._getWindow().document.execCommand('inserthtml', false, tableEle);
                this._onChange();
                drpDwnObj.option({ value: "", enabled: false });
            }
            this._customTableDialog.ejDialog("close");
            this._clearTableFields();
        },

        _clearTableFields: function () {
            this._customTableDialog.find("#" + this._rteId + "_txtColumns").ejNumericTextbox("option", "value", 3);
            this._customTableDialog.find("#" + this._rteId + "_txtRows").ejNumericTextbox("option", "value", 3);
            this._customTableDialog.find("#" + this._rteId + "_txtHeight").val("");
            this._customTableDialog.find("#" + this._rteId + "_txtWidth").val("");
            this._customTableDialog.find("#" + this._rteId + "_ddlAlignment").ejDropDownList("clearText");
            this._customTableDialog.find("#" + this._rteId + "_txtSpacing").val("");
            this._customTableDialog.find("#" + this._rteId + "_txtPadding").val("");
            var border = this._customTableDialog.find("#" + this._rteId + "_txtBorder").ejDropDownList("clearText");
            var caption = this._chkTblCaption.ejCheckBox({ check: false });
        },

        _clearLinkFields: function () {
            this._txtURL = this._linkDialog.find("#" + this._rteId + "_link_url");
            this._txtURL.removeClass("e-error");
            this._txtURL.val("http://");
            this._txtLinkText = this._linkDialog.find("#" + this._rteId + "_link_text");
            this._txtLinkText.val("");
            this._txtLinkTitle = this._linkDialog.find("#" + this._rteId + "_link_title");
            this._txtLinkTitle.val("");
            this._chkTarget.ejCheckBox({ check: false });
            this._txtURL.focus();
        },
        _clearImgFields: function () {
            this._imgDialog.find("#" + this._rteId + "_img_url").val("http://").removeClass("e-error");
            this._imgDialog.find("#" + this._rteId + "_img_text").val("");
            this._chkImgDimensions.ejCheckBox({ checked: true });
        },

        _videoManager: function () {
            var selectNode = this._getSelectedNode();
            this._editVideo = null;
            if (selectNode && selectNode.tagName.toLowerCase() === "iframe") {
                this._editVideo = selectNode;
                this._videoWidth = parseInt(selectNode.width);
                this._videoHeight = parseInt(selectNode.height);
                this._videoDialog.find("textarea.e-rte-video").val(selectNode.outerHTML);
                this._videoDialog.find("#" + this._rteId + "_videoX").val(this._videoWidth);
                this._videoDialog.find("#" + this._rteId + "_videoY").val(this._videoHeight);
            }
            this._videoDialog.ejDialog("open");
            this._videoDialog.find("textarea.e-rte-video").focus();
        },

        _sourceCodeManager: function () {
            ej.isNullOrUndefined(this._sourceDialog) && this._renderSourceDialog();
            this._sourceDialog.find("textarea.e-rte-srctextarea")[0].value = this.getHtml();
            this._sourceDialog.ejDialog("open");
            this._sourceDialog.find("textarea.e-rte-srctextarea").focus();
        },

        _hyperLinkManager: function () {
            this._linkDialog.ejDialog("open");
            this._clearLinkFields();
            this._txtLinkText.val(this._getSelText());
            this._selectedHTML = this._getSelText();
            this._hyperLinkSelection = this._getDocument().selection;
            var _linkSibling = this._getSelectedNode();
            if (_linkSibling && (/^(A)$/).test(_linkSibling.nodeName)) {
                this._txtURL.val(_linkSibling.href);
                this._txtLinkTitle.val(_linkSibling.title);
            }
            if (this._hyperLinkSelection != null)
                this._hyperLinkSelRange = this._hyperLinkSelection.createRange();
        },

        // table inser 
        _tableManager: function () {
            var tableLi = this._rteToolbar.find("#" + this._rteId + "createTable");
            this._createTable.ejDialog("option", "position", {
                X: tableLi.position().left,
                Y: tableLi.position().top + tableLi.height() + 7
            });
            this._createTable.ejDialog("open");
        },

        _imageManager: function () {
            this._clearImgFields();
            var selectNode = this._getSelectedNode();
            if (selectNode && selectNode.tagName.toLowerCase() === "img") {
                this._imgWidth = parseInt(selectNode.width);
                this._imgHeight = parseInt(selectNode.height);
                this._imgDialog.find("#" + this._rteId + "_img_url").val(selectNode.src);
                this._imgDialog.find("#" + this._rteId + "_img_text").val(selectNode.alt);
                this._imgDialog.find("#" + this._rteId + "_imgX").val(this._imgWidth);
                this._imgDialog.find("#" + this._rteId + "_imgY").val(this._imgHeight);
            }
            this._imgDialog.ejDialog("open");
            this._imgDialog.find("#" + this._rteId + "_img_url").focus();
        },

        _toolBarClick: function (sender) {
            var $rteEle = $(this.itemsContainer).closest("div.e-rte").find("textarea.e-rte"), rteInstcne = $rteEle.ejRTE("instance"), rteId = $rteEle.attr('id');
            var _itemId = sender.currentTarget.id.replace(rteId, "");
            if ((sender.currentTarget.id == rteId + "copy" || sender.currentTarget.id == rteId + "cut" || sender.currentTarget.id == rteId + "paste") && !rteInstcne._isIE())
                rteInstcne._openAlert(rteInstcne._getLocalizedLabels("copyPastAlert"));
            else
                rteInstcne._selectCommand(sender.currentTarget.id);
            //For Style Tools
            if (rteInstcne._styleItems.indexOf(_itemId) >= 0 || rteInstcne._scriptsItems.indexOf(_itemId) >= 0) {
                if (!$(sender.currentTarget).hasClass("e-active"))
                    this.selectItemByID(sender.currentTarget.id);
                else
                    this.deselectItemByID(sender.currentTarget.id);
            }

                //For Align Tools
            else if (rteInstcne._alignItems.indexOf(_itemId) >= 0) {
                this.selectItemByID(sender.currentTarget.id);
                var index = rteInstcne._alignItems.indexOf(_itemId)
                for (var i = 0; i < rteInstcne._alignItems.length; i++) {
                    if (i != index)
                        this.deselectItemByID(rteId + rteInstcne._alignItems[i]);
                }
            }
                //For Bullets & Numbering tools
            else if (rteInstcne._listItems.indexOf(_itemId) >= 0) {
                if (!$(sender.currentTarget).hasClass("e-active"))
                    this.selectItemByID(sender.currentTarget.id);
                else
                    this.deselectItemByID(sender.currentTarget.id);

                var index = rteInstcne._listItems.indexOf(_itemId);
                if (index == 0)
                    this.deselectItemByID(rteId + rteInstcne._listItems[1]);
                else
                    this.deselectItemByID(rteId + rteInstcne._listItems[0]);
            }
        },

        _toggleEditTable: function () {
            var selTag = this._getSelectedNode();
            var _editTableItems = this._toolBarItems.find("#" + this._rteId + "addColumnLeft, #" + this._rteId + "addColumnRight, #" + this._rteId + "addRowAbove, #"
             + this._rteId + "addRowBelow, #" + this._rteId + "deleteRow, #" + this._rteId + "deleteColumn, #" + this._rteId + "deleteTable");
            selTag && selTag.tagName && (selTag.tagName.toLowerCase() == "td" || selTag.tagName.toLowerCase() == "table" || selTag.tagName.toLowerCase() == "tr") ?
            _editTableItems.show() : _editTableItems.hide();
            this._setIframeHeight();
        },

        //Format changes
        _formatChange: function (args) {
            var $rteEle = $(this.element).closest("div.e-rte").find("textarea.e-rte"), rteInstcne = $rteEle.ejRTE("instance"), rteId = $rteEle.attr('id');
            this.getSelectedValue() !== "" && rteInstcne._onFormatBlock(this.getSelectedValue());
            rteInstcne._focus();
            rteInstcne._onChange();
        },

        // Font style chnage event
        _fontStyleChange: function (args) {
            var $rteEle = $(this.element).closest("div.e-rte").find("textarea.e-rte"), rteInstcne = $rteEle.ejRTE("instance"), rteId = $rteEle.attr('id');
            this.getSelectedValue() !== "" && rteInstcne._onFontName(this.getSelectedValue());
            rteInstcne._onChange();
        },

        // Font style chnage event
        _fontSizeChange: function (args) {
            var $rteEle = $(this.element).closest("div.e-rte").find("textarea.e-rte"), rteInstcne = $rteEle.ejRTE("instance"), rteId = $rteEle.attr('id');
            this.getSelectedValue() !== "" && rteInstcne._onFontSize(this.getSelectedValue());
            rteInstcne._onChange();
        },

        //Color select 
        _colorPaletteClick: function (e) {
            var value;
            if ((value = e.target.getAttribute('color-code'))) {
                this._focus();
                this._onFontColor(value);
                this._splitMenu.hide(e);
                this._bgSplitMenu.hide(e);
                this._fontColor = value;
                this._fontColorSplit.find("span.e-btntxt").css("background-color", value);
            }
        },

        //Color select 
        _bgColorPaletteClick: function (e) {
            var value;
            if ((value = e.target.getAttribute('color-code'))) {
                this._focus();
                this._onBGColor(value);
                this._splitMenu.hide(e);
                this._bgSplitMenu.hide(e);
                this._bgColor = value;
                this._bgColorSplit.find("span.e-btntxt").css("background-color", value);
            }
        },

        _fontColorClick: function (e) {
            this._onFontColor(this._fontColor);
            this._splitMenu.hide(e);
        },

        _bgColorClick: function (e) {
            this._onBGColor(this._bgColor);
            this._bgSplitMenu.hide(e);
        },

        _selectCommand: function (selectedId) {
            var rteId = this._rteId;
            if (!(selectedId == rteId + "format" || selectedId == rteId + "fontName" || selectedId == rteId + "fontSize" || selectedId == rteId + "fontColor" || selectedId == rteId + "backgroundColor")) {
                this._focus();
            }
            switch (selectedId) {
                case rteId + "bold":
                    this._onBold();
                    break;
                case rteId + "italic":
                    this._onItalics();
                    break;
                case rteId + "underline":
                    this._onUnderLine();
                    break;
                case rteId + "strikethrough":
                    this._onStrikeThrough();
                    break;
                case rteId + "justifyLeft":
                    this._onJustifyLeft();
                    break;
                case rteId + "justifyRight":
                    this._onJustifyRight();
                    break;
                case rteId + "justifyCenter":
                    this._onJustifyCenter();
                    break;
                case rteId + "justifyFull":
                    this._onJustifyFull();
                    break;
                case rteId + "cut":
                    this._onCut();
                    break;
                case rteId + "copy":
                    this._onCopy();
                    break;
                case rteId + "paste":
                    this._onPaste();
                    break;
                case rteId + "clearFormat":
                    this._onClearFormat();
                    break;
                case rteId + "clearAll":
                    this._clearAllManager();
                    break;
                case rteId + "orderedList":
                    this._onOrderList();
                    break;
                case rteId + "unorderedList":
                    this._onUnorderList();
                    break;
                case rteId + "undo":
                    this._undo();
                    break;
                case rteId + "redo":
                    this._redo();
                    break;
                case rteId + "indent":
                    this._onIndent();
                    this._indentdepth++;
                    break;
                case rteId + "outdent":
                    this._onOutdent();
                    if (this._indentdepth > 0)
                        this._indentdepth--;
                    break;
                case rteId + "createLink":
                    this._hyperLinkManager();
                    break;
                case rteId + "image":
                    this._imageManager();
                    break;
                case rteId + "createTable":
                    this._tableManager();
                    break;
                case rteId + "addRowAbove":
                    this.insertRow(true);
                    break;
                case rteId + "addRowBelow":
                    this.insertRow(false);
                    break;
                case rteId + "addColumnLeft":
                    this.insertColumn(true);
                    break;
                case rteId + "addColumnRight":
                    this.insertColumn(false);
                    break;
                case rteId + "deleteRow":
                    this.removeRow();
                    break;
                case rteId + "deleteColumn":
                    this.removeColumn();
                    break;
                case rteId + "deleteTable":
                    this.removeTable();
                    break;
                case rteId + "superscript":
                    this._onSuperScript();
                    break;
                case rteId + "subscript":
                    this._onSubScript();
                    break;
                case rteId + "upperCase":
                    this._onUpperCase();
                    break;
                case rteId + "lowerCase":
                    this._onLowerCase();
                    break;
                case rteId + "video":
                    this._videoManager();
                    break;
                default:
                    this._onChange();
                    break;
            }
            if (selectedId != rteId + "createLink" && selectedId != rteId + "image" && selectedId != rteId + "video" && selectedId != rteId + "createTable") {
                this._onChange();
            }
            if ((selectedId != rteId + "undo") && (selectedId != rteId + "redo"))
                this._setBackupData();
            var selectEle = this._getSelectedNode();
            this._updateTagInfo(selectEle);
        },
        _focus: function () {
            this._getWindow().focus();
            //this._selectRange();
            this._restoreSelection(this._selectionRange);
        },
        _getWindow: function () {
            var iframe = document.getElementById(this._iframeId);
            return iframe.contentWindow;
        },
        _getDocument: function () {
            var iframe = document.getElementById(this._iframeId);
            var iframeObject = iframe.contentWindow.document;
            return iframeObject;
        },
        // Iframe command function
        _onBold: function () {
            var args;
            this.executeCommand('bold', args);
        },

        _onItalics: function () {
            var args;
            this.executeCommand('italic', args);
        },
        _onStrikeThrough: function () {
            var args;
            this.executeCommand('strikethrough', args);
        },

        _onUnderLine: function () {
            var args;
            this.executeCommand('underline', args);
        },

        _onJustifyLeft: function () {
            var args;
            this.executeCommand('JustifyLeft', args);
        },

        _onJustifyRight: function () {
            var args;
            this.executeCommand('JustifyRight', args);
        },

        _onJustifyCenter: function () {
            var args;
            this.executeCommand('JustifyCenter', args);
        },

        _onJustifyFull: function () {
            this._alignFlag = true;
            this.executeCommand('justifyfull');
        },

        _onCut: function () {
            var args;
            this.executeCommand('cut', args);
        },
        _onCopy: function () {
            var args;
            this.executeCommand('copy', args);
        },
        _onPaste: function () {
            var args;
            this.executeCommand('paste', args);

        },
        _onOrderList: function () {
            var args;
            this.executeCommand('insertorderedlist', args);
        },
        _onUnorderList: function () {
            var args;
            this.executeCommand('insertunorderedlist', args);
        },
        _onUndo: function () {
            var args;
            this.executeCommand('undo', null);
        },
        _onDelete: function () {
            var args;
            this.executeCommand('delete', null);
        },

        _onRedo: function () {
            var args;
            this.executeCommand('redo', null);
        },

        _onClearFormat: function () {
            var args;
            this.executeCommand('removeformat', args);
            //this.executeCommand('foreColor', 'black');
            this._setBackupData();
            this._onChange();
            this._updateIframeSkin(this.model.iframeAttribute);
        },

        _onFormatBlock: function (formatBlock) {
            this._focus();
            this.executeCommand('formatBlock', formatBlock);
        },

        _onFontName: function (fontsname) {
            this.executeCommand("fontName", fontsname);
        },

        _onFontSize: function (Size) {
            this.executeCommand('fontSize', Size);
        },

        _onFontColor: function (color) {
            this.executeCommand('foreColor', color);
            this._onChange();
            this._updateIframeSkin(this.model.iframeAttribute);
        },

        _onBGColor: function (color) {
            this.executeCommand('backColor', color);
            this._onChange();
        },

        _onIndent: function () {
            this._getWindow().document.body.style.wordWrap = "break-word";
            var node = this._getWindow().document.getSelection().focusNode;
            if (node && (/^(OL|UL|LI)$/).test(node.nodeName))
                this._listIndent(node);
            else if (node && (/^(#text)$/).test(node.nodeName) && (/^(OL|UL|LI)$/).test($(node).parent()[0].nodeName)) {
                this._listIndent($(node).parents("li")[0], node);
            }
            else
                this.executeCommand('indent', false);
            node && $(node).focus();
            this._updateIframeSkin(this.model.iframeAttribute);
        },

        _onOutdent: function () {
            var node = this._getWindow().document.getSelection().focusNode;
            if (node && (/^(OL|UL|LI)$/).test(node.nodeName))
                this._listOutdent(node);
            else if (node && (/^(#text)$/).test(node.nodeName) && (/^(OL|UL|LI)$/).test($(node).parent()[0].nodeName)) {
                this._listOutdent($(node).parents("li")[0], node);
            }
            else
                this.executeCommand('outdent', false);
        },

        _onSelectAll: function () {
            this.executeCommand('selectall');
        },
        _onHyperLink: function (val) {
            this.executeCommand('createlink', val);
        },

        _onInsertLink: function () {
            var oEl;
            var sHtml;
            if (!this._isUrl($.trim(this._txtURL.val()))) {
                this._txtURL.addClass("e-error");
                return false;
            }
            oEl = ej.buildTag("a", "", {}, { href: this._txtURL.val(), title: this._txtLinkTitle.val() });
            if (this._chkTarget.ejCheckBox("isChecked"))
                oEl.target = "_blank";
            else
                oEl.target = "_self";

            //}
            var oSelection;
            var oSelRange;
            this._focus();
            if (this._isIE()) {
                if (this._selectedHTML.length == 0) {
                    this._selectedHTML = this._txtLinkText.val();
                }
                oEl[0].innerHTML = this._selectedHTML;
                sHtml = oEl[0].outerHTML;
            }
            else {
                oEl.html(this._txtLinkText.val());
                sHtml = $('<div>').append($(oEl).clone()).html();
            }
            if (sHtml) {
                if (this._isIE()) {
                    this._pasteHtml(sHtml);
                }
                else {
                    this._getDocument().execCommand('inserthtml', false, sHtml);
                }
                this._focus();
            }
            this._linkDialog.ejDialog("close");
        },

        _onInsertImage: function () {
            var url = this._imgDialog.find("#" + this._rteId + "_img_url");
            var altText = this._imgDialog.find("#" + this._rteId + "_img_text");
            var imgX = this._imgDialog.find("#" + this._rteId + "_imgX").val();
            var imgY = this._imgDialog.find("#" + this._rteId + "_imgY").val();
            var proxy = this;
            this._restoreSelection(this._selectionRange);
            //Url Validation
            var _img = $("<img>", {
                src: url.val(),
                error: function () { url.addClass("e-error"); },
                load: function () {
                    var imgEle = ej.buildTag("img", "", {}, { alt: altText.val(), src: url.val() });
                    if (proxy.model.showDimensions) {
                        (imgX != "") && imgEle.width(imgX);
                        (imgY != "") && imgEle.height(imgY);
                    }
                    proxy.executeCommand('inserthtml', imgEle[0].outerHTML);
                    proxy._imgDialog.ejDialog("close");
                }
            });

        },
        //Insert vedio
        _insertVideo: function (sender) {
            var videoLink = $.trim(this._videoDialog.find("textarea.e-rte-video")[0].value);
            var videoX = this._videoDialog.find("#" + this._rteId + "_videoX").val();
            var videoY = this._videoDialog.find("#" + this._rteId + "_videoY").val();
            this._restoreSelection(this._selectionRange);
            var ele = $(videoLink);
            if (sender.target.id === "video_insert" && videoLink !== "") {
                var _index, _link = ele[0].src;
                if (!ej.isNullOrUndefined(_link) && _link.indexOf("http:") == -1) {
                    _index = videoLink.indexOf("src=") + 5;
                    videoLink = videoLink.substr(0, _index) + "http:" + videoLink.substr(_index);
                }
                var _index, ele = $(videoLink)[0];
                if (this.model.showDimensions) {
                    (videoX != "") && (ele.width = videoX);
                    (videoX != "") && (ele.height = videoY);
                }
                this._editVideo && $(this._editVideo).remove();
                this.executeCommand('inserthtml', ele.outerHTML);
                //this._getWindow().document.execCommand('inserthtml', false, ele.outerHTML);
                this._onChange();
                this._setBackupData();
                this._videoDialog.ejDialog("close");
            }
            else if (sender.target.id === "video_cancel")
                this._videoDialog.ejDialog("close");
            else
                this._openAlert(this._getLocalizedLabels("videoError"));
            this._videoDialog.find("textarea.e-rte-video")[0].value = "";
            this._videoDialog.find("#" + this._rteId + "_videoX").val("");
            this._videoDialog.find("#" + this._rteId + "_videoY").val("");
            this._chkvideoDimensions.ejCheckBox({ check: true });
        },

        //Clears all the contents
        _clearAllManager: function () {
            this._alertWindow.find(".e-alert-cancel").show();
            this._openAlert(this._getLocalizedLabels("deleteAlert"));
        },

        _onUnlink: function () {
            var args;
            this.executeCommand('unlink', args);
        },
        _onSuperScript: function () {
            var args;
            this.executeCommand('SuperScript', args);
        },
        _onSubScript: function () {
            var args;
            this.executeCommand('SubScript', args);
        },
        _onInsertTable: function (rows, cols, designTime) {
            var tableEle = this._tableGenerator(rows, cols, designTime);
            this.executeCommand('inserthtml', tableEle);
        },

        _onUpperCase: function () {
            if (this._isIE()) {
                if (this._getWindow().document.selection.type.toLowerCase() == "control") {
                    return;
                }

                var p = this._getWindow().document.selection.createRange();
                this._getDocument().selection.createRange().pasteHTML(this._seleText.toUpperCase());
            }
            else {
                var selection = this._getWindow().getSelection();
                var range = selection.getRangeAt(0);
                var node = range.commonAncestorContainer;
                var children = range.commonAncestorContainer.children;
                if (children != null) {
                    var contents = range.extractContents();
                    var result = this._changeCase(contents, "Upper");
                    var resultCopy = $(result).clone();
                    var tempDiv = document.createElement('div');
                    $(tempDiv).append($(resultCopy));
                    if (tempDiv.innerHTML != null && tempDiv.innerHTML != "")
                        this._getWindow().document.execCommand('inserthtml', false, tempDiv.innerHTML);
                }
                else {
                    var replaceString = node.nodeValue.substring(range.startOffset, range.endOffset).toUpperCase();
                    var startString = node.nodeValue.substr(0, range.startOffset);
                    var endString = node.nodeValue.substring(range.endOffset);
                    node.nodeValue = startString + replaceString + endString;
                }
            }

        },

        _changeCase: function (parentNode, toChangeCase) {
            var s = parentNode.childNodes;
            if (s.length > 0) {
                for (var t = 0; t < s.length; t++) {
                    if (s[t].nodeType == 3) {
                        s[t].nodeValue = toChangeCase == "Upper" ? s[t].nodeValue.toUpperCase() : s[t].nodeValue.toLowerCase();
                    }
                    else {
                        if (s[t].nodeType == 1 && s[t].tagName.toUpperCase() != "FONT") {
                            this._changeCase(s[t], toChangeCase);
                        }
                    }
                }
            }
            return s;
        },

		
        	_onLowerCase: function () {
            var selection = this._getWindow().getSelection();
            var range = selection.getRangeAt(0);
            var node = range.commonAncestorContainer;
            var children = range.commonAncestorContainer.children;
            if (children != null) {
                var contents = range.extractContents();
                var result = this._changeCase(contents, "Lower");
                var resultCopy = $(result).clone();
                var tempDiv = document.createElement('div');
                $(tempDiv).append($(resultCopy));
                if (tempDiv.innerHTML != null && tempDiv.innerHTML != "")
                    this._getWindow().document.execCommand('inserthtml', false, tempDiv.innerHTML);
            }
            else {
                var replaceString = node.nodeValue.substring(range.startOffset, range.endOffset).toLowerCase();
                var startString = node.nodeValue.substr(0, range.startOffset);
                var endString = node.nodeValue.substring(range.endOffset);
                node.nodeValue = startString + replaceString + endString;
            }
        },

        _listIndent: function (node, selection) {
            var sibling, newList;
            sibling = node.previousSibling;

            if (sibling && this._isListNode(sibling)) {
                sibling.appendChild(node);
                return true;
            }
            if (sibling && sibling.nodeName == 'LI' && this._isListNode(sibling.lastChild)) {
                sibling.lastChild.appendChild(node);
                this._combineLists(node.lastChild, sibling.lastChild, node);
                return true;
            }

            sibling = node.nextSibling;

            if (sibling && this._isListNode(sibling)) {
                sibling.insertBefore(node, sibling.firstChild);
                return true;
            }

            if (sibling && sibling.nodeName == 'LI' && this._isListNode(node.lastChild)) {
                return false;
            }

            sibling = node.previousSibling;
            if (sibling && sibling.nodeName == 'LI') {
                newList = ej.buildTag(node.parentNode.nodeName)[0];
                sibling.appendChild(newList);
                newList.appendChild(node);
                this._combineLists(node.lastChild, newList, node);
                return true;
            }
            return true;
        },

        _combineLists: function (from, to, li) {
            var node;

            if (this._isListNode(from)) {
                while ((node = li.lastChild.firstChild)) {
                    to.appendChild(node);
                }

                $(from).remove();
            }
        },
        _isListNode: function (node) {
            return node && (/^(OL|UL)$/).test(node.nodeName);
        },
        _isFirstChild: function (node) {
            return node.parentNode.firstChild == node;
        },

        _isLastChild: function (node) {
            return node.parentNode.lastChild == node;
        },
        _removeEmptyList: function (node) {
            if (node && $(node).children().length === 0)
                $(node).remove();
        },
        _listOutdent: function (node) {
            var ul = $(node.parentNode), ulParent = ul[0].parentNode, newBlock;
            node = $(node);
            if (this._isFirstChild(node[0]) && this._isLastChild(node[0])) {
                if (ulParent.nodeName == "LI") {
                    node.insertAfter(ulParent);
                    this._removeEmptyList(ulParent);
                    ul.remove();
                } else if (this._isListNode(ulParent)) {
                    ul.remove();
                } else {
                    this.executeCommand('outdent', false);
                    ////ulParent.insertBefore(createNewTextBlock(node[0]), ul[0]);
                    //ul.remove();
                }

                return true;
            } else if (this._isFirstChild(node[0])) {
                if (ulParent.nodeName == "LI") {
                    node.insertAfter(ulParent);
                    node[0].appendChild(ul[0]);
                    this._removeEmptyList(ulParent);
                } else if (this._isListNode(ulParent)) {
                    ulParent.insertBefore(node[0], ul[0]);
                } else {
                    this.executeCommand('outdent', false);
                    //ulParent.insertBefore(createNewTextBlock(node[0]), ul[0]);
                    //node.remove();
                }

                return true;
            } else if (this._isLastChild(node[0])) {
                if (ulParent.nodeName == "LI") {
                    node.insertAfter(ulParent);
                } else if (this._isListNode(ulParent)) {
                    node.insertAfter(ul[0]);
                } else {
                    this.executeCommand('outdent', false);
                    //node.insertAfter(createNewTextBlock(node[0]), ul[0]);
                    //node.remove();
                }

                return true;
            } else {
                this.executeCommand('outdent', false);
            }

            return false;
        },

        _updateIndent: function (node) {
            this._toolBarObj.enableItemByID(this._rteId + "indent");
            if (node && (/^(LI)$/).test(node.nodeName)) {
                if ($(node).parents(node.parentNode.nodeName).last().find("li").index(node) === 0)
                    this._toolBarObj.disableItemByID(this._rteId + "indent");
            }
        },

        //Get char Count
        _updateCharCount: function () {
            if (this.model.showFooter && this.model.showWordCount) {
                var iframeHtml = this._getText();
                this._wordCount.html(this._getLocalizedLabels("characters") + " : " + $.trim(iframeHtml).length);
            }
        },

        //Update tag info 
        _updateTagInfo: function (element) {
            var text = "", pTag, curNode = element.tagName.toLowerCase();
            if (this.model.showFooter && this.model.showHtmlTagInfo && curNode != "body") {
                var parentNodes = $(element).parents();
                for (var i = parentNodes.length - 1; i >= 0; i--) {
                    pTag = parentNodes[i].tagName.toLowerCase();
                    if (pTag != "body" && pTag != "html")
                        text += " » " + pTag;
                }
                text += " » " + curNode;
                this._htmlInfo.html(text);
            }
        },

        //Update Model value 
        _updateValue: function () {
            this.value(this._getDocument().body.innerHTML);
			this.element.val(this._getDocument().body.innerHTML);
        },

        //Clear Formats
        _setClearFormat: function () {
            var selItemslength = this._rteToolbar.find(".e-active").length;
        },


        //Updates the status of the toolbar items
        _updateToolbarStatus: function () {
            if (this.model.showToolbar) {
                //Style Tools
                for (var i = 0; i < this._styleItems.length; i++) {
                    if (this._getCommandStatus(this._styleItems[i].toLowerCase()))
                        this._toolBarObj.selectItemByID(this._rteId + this._styleItems[i]);
                    else
                        this._toolBarObj.deselectItemByID(this._rteId + this._styleItems[i]);
                }

                //Align Tools
                for (var i = 0; i < this._alignItems.length; i++) {
                    if (this._getCommandStatus(this._alignItems[i].toLowerCase()))
                        this._toolBarObj.selectItemByID(this._rteId + this._alignItems[i]);
                    else
                        this._toolBarObj.deselectItemByID(this._rteId + this._alignItems[i]);
                }

                //Formatting Tools
                for (var i = 0; i < this._scriptsItems.length; i++) {
                    if (this._getCommandStatus(this._scriptsItems[i].toLowerCase()))
                        this._toolBarObj.selectItemByID(this._rteId + this._scriptsItems[i]);
                    else
                        this._toolBarObj.deselectItemByID(this._rteId + this._scriptsItems[i]);
                }


                //List Tools
                if (this._getCommandStatus('InsertOrderedList'))
                    this._toolBarObj.selectItemByID(this._rteId + "orderedList");
                else
                    this._toolBarObj.deselectItemByID(this._rteId + "orderedList");

                if (this._getCommandStatus('InsertUnorderedList'))
                    this._toolBarObj.selectItemByID(this._rteId + "unorderedList");
                else
                    this._toolBarObj.deselectItemByID(this._rteId + "unorderedList");
            }

        },

        _updateFormat: function () {
            if (this._formatDDL && this.model.showToolbar && !ej.isNullOrUndefined(this.model.tools["formatStyle"])) {
                var formatName = $.trim(this._getCommandValue('formatblock').replace("'", "").replace("'", ""));
                if (ej.isNullOrUndefined(formatName) || formatName == "")
                    this._formatDDL.ejDropDownList({ "value": this._getLocalizedLabels("format") });
                else
                    this._formatDDL.ejDropDownList("setSelectedValue", formatName);
            }
        },
        // Update font options
        _updateFontOptionStatus: function () {
            if (this.model.showFontOption && this.model.showToolbar && !ej.isNullOrUndefined(this.model.tools["font"])) {
                var fontName = $.trim(this._getCommandValue('fontname').replace("'", "").replace("'", ""));
                ej.isNullOrUndefined(fontName) || fontName == "" && (fontName = "Segoe UI");
                this._fontStyleDDL.ejDropDownList("setSelectedValue", fontName);
                // Font Size DDL
                var fontSize = this._getCommandValue('fontsize');
                ej.isNullOrUndefined(fontSize) || fontSize == "" && (fontSize = 2);
                this._fontSizeDDL.ejDropDownList("setSelectedValue", fontSize);
            }
        },

        _getSelText: function () {
            var selectedtext = '';
            var selection;
            var textnode;
            if (!this._isIE()) {
                if (window.getSelection) {
                    selection = this._getWindow().getSelection();
                    var range = document.createRange();
                    range = selection.getRangeAt(0);
                    textnode = document.createTextNode(range.toString());
                    selectedtext = textnode.nodeValue;
                }
                else if (document.getSelection) {
                    selectedtext = this._getWindow().document.getSelection();
                }
            }
            else
                selectedtext = this._seleText;
            return selectedtext;
        },

        _isIE: function () {
            var _ie = false, browserInfo = ej.browserInfo();
            if (browserInfo.name == 'msie') {
                _ie = true;
            }
            return _ie;
        },
        //Vaidate the input URL string
        _isUrl: function (url) {
            var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            return regexp.test(url);
        },
        _pasteHtml: function (html) {
            var sel, range;
            this._focus();
            if (window.getSelection) {
                // IE9 and non-IE
                sel = this._getWindow().getSelection();
                if (sel.getRangeAt && sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    range.deleteContents();
                    // some browsers (IE9, for one)
                    var el = document.createElement("div");
                    el.innerHTML = html;
                    var frag = this._getDocument().createDocumentFragment(), node, lastNode;
                    while ((node = el.firstChild)) {
                        lastNode = frag.appendChild(node);
                    }
                    range.insertNode(frag);

                    // Preserve the selection
                    if (lastNode) {
                        range = range.cloneRange();
                        range.setStartAfter(lastNode);
                        range.collapse(true);
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }
                }
            } else if (this._getDocument().selection && this._getDocument().selection.type != "Control") {
                // IE < 9
                this._getDocument().selection.createRange().pasteHTML(html);
            }
        },
        //get locale text
        _getLocalizedLabels: function (property) {
            return ej.RTE.Locale[this.model.locale][property] === undefined ? ej.RTE.Locale["en-US"][property] : ej.RTE.Locale[this.model.locale][property];
        },

        //get Selection Node
        _getSelectedNode: function () {
            var element, rng = this._getRange();
            var startContainer = rng.startContainer, endContainer = rng.endContainer;
            var startOffset = rng.startOffset, endOffset = rng.endOffset;
            if (!rng) {
                return this._getDocument().selection;
            }

            if (rng.setStart) {
                element = rng.commonAncestorContainer;
                //Image tage and link selction
                if (!rng.collapsed) {
                    if (startContainer == endContainer) {
                        if (endOffset - startOffset < 2) {
                            if (startContainer.hasChildNodes()) {
                                element = startContainer.childNodes[startOffset];
                            }
                        }
                    }
                    if (startContainer.nodeType === 3 && endContainer.nodeType === 3) {
                        if (startContainer.length === startOffset) {
                            startContainer = this._skipEmptyNode(startContainer.nextSibling, true);
                        } else {
                            startContainer = startContainer.parentNode;
                        }

                        if (endOffset === 0) {
                            endContainer = this._skipEmptyNode(endContainer.previousSibling, false);
                        } else {
                            endContainer = endContainer.parentNode;
                        }

                        if (startContainer && startContainer === endContainer) {
                            return startContainer;
                        }
                    }
                }

                if (element && element.nodeType == 3) {
                    return element.parentNode;
                }
                return element;
            }
            element = rng.item ? rng.item(0) : rng.parentElement();
            return element;
        },

        _skipEmptyNode: function (node, forwards) {
            var orig = node;

            while (node && node.nodeType === 3 && node.length === 0) {
                node = forwards ? node.nextSibling : node.previousSibling;
            }

            return node || orig;
        },

        _getSelection: function () {

            var selCurrent;
            if (this._isIE()) {
                selCurrent = this._getDocument().selection.createRange();
                selCurrent.type = this._getDocument().selection.type;
            }
            else {
                selCurrent = window.getSelection();
                if (selCurrent.rangeCount) {
                    sText = selCurrent.getRangeAt(0);
                }
                selCurrent.type = this._getWindow().getSelection().type;
            }
            return selCurrent;
        },

        _saveSelection: function () {
            var win = this._getWindow();
            var doc = win.document;
            var sel = win.getSelection ? win.getSelection() : doc.selection;
            var range;

            if (sel) {
                if (sel.createRange) {
                    range = sel.createRange();
                } else if (sel.getRangeAt(0)) {
                    range = sel.getRangeAt(0);
                } else if (sel.anchorNode && sel.focusNode && doc.createRange) {
                    // Older WebKit browsers
                    range = doc.createRange();
                    range.setStart(sel.anchorNode, sel.anchorOffset);
                    range.setEnd(sel.focusNode, sel.focusOffset);

                    // Handle the case when the selection was selected backwards (from the end to the start in the
                    // document)
                    if (range.collapsed !== sel.isCollapsed) {
                        range.setStart(sel.focusNode, sel.focusOffset);
                        range.setEnd(sel.anchorNode, sel.anchorOffset);
                    }
                }
            }
            return range;
        },

        _restoreSelection: function (range) {
            var win = this._getWindow();
            var doc = win.document;
            var sel = win.getSelection ? win.getSelection() : doc.selection;

            if (sel && range) {
                if (range.select) {
                    range.select();
                } else if (sel.removeAllRanges && sel.addRange) {
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        },

        _getRange: function () {
            if (this._isIE())
                return ej.isNullOrUndefined(this._selectionRange) ? this._saveSelection() : this._selectionRange;
            else if(this._getWindow().getSelection().rangeCount>0)
                return this._getWindow().getSelection().getRangeAt(0);
            else
            {
                var iframe=document.getElementsByTagName("iframe")[0];
                var win = iframe.contentWindow;
                var range = win.document.createRange();
                range.setStart(win.document.body, 0);
                range.setEnd(win.document.body, 0);
                win.document.body.focus();
                return range;
            }
        },
        //Sets Back up data
        _setBackupData: function () {
            var htmlTxt = this.getHtml();
            var bkuplen = this._backupArray.length;
            if (bkuplen == this.model.undoStackLimit + 1)
                this._backupArray.splice(0, 1);
            if (htmlTxt != this._backupArray[bkuplen - 1] && this.model.undoStackLimit > 0)
                this._backupArray.push(htmlTxt);
            this._undoRedoPosition = this._backupArray.length - 1;
            if (this.model.showToolbar && this._rteToolbar.find("#" + this._rteId + "undo") && this._backupArray.length > 1)
                this._toolBarObj.enableItemByID(this._rteId + "undo");
        },
        _getSelectedHtmlString: function () {
            var selection = "";
            var range;
            var node = "";
            if (document.selection) {
                node = this._getWindow().document.selection.createRange().htmlText;
                return node;
            }
            else
                return this._seleText;

            return node.innerHTML;
        },

        _getText: function () {
            var _body = this._getDocument().body;
            if (_body != null) {
                if (!this._isIE())
                    return _body.textContent;
                else
                    return _body.innerText;
            }
        },
        _validateMaxLength: function (e) {
            if (this.model.maxLength != null) {    // MaxLength function - Restricts the user for entering text in RTE
                var len = this.model.maxLength;
                var usertext = this._getText();
                if (len <= usertext.length) {
                    if (!(e.keyCode < 47 || e.ctrlKey && e.keyCode == 65 || e.ctrlKey && e.keyCode == 67 || e.ctrlKey && e.keyCode == 86 || e.ctrlKey && e.keyCode == 88)) {
                        this._keypressFlag = false;
                        this._cancelEvent(e);
                    }
                }
            }
        },
        _cancelEvent: function (e) {
            e.returnValue = false;
            e.stopPropagation();
            e.preventDefault();
            return false;
        },

        _alignToolUpdate: function (name) {
            for (var i = 0; i < this._alignItems.length; i++) {
                if (this._alignItems[i] === name)
                    this._toolBarObj.selectItemByID(this._rteId + "underline");
                else
                    this._toolBarObj.deselectItemByID(this._rteId + "underline");
            }
        },

        //Gets the status of the formats of the current text
        _getCommandStatus: function (commandName) {
            var state = this._getDocument().queryCommandState(commandName);
            return state;
        },

        //Gets the value of the font-size and font-name of the current text
        _getCommandValue: function (commandName) {
            var value = this._getDocument().queryCommandValue(commandName);
            return value;
        },

        //Undo 
        _undo: function () {
            if (this._undoRedoPosition > 0) {
                this.setHtml(this._backupArray[this._undoRedoPosition - 1]);
                this._undoRedoPosition--;
                this._updateToolbarStatus();
                this._updateFontOptionStatus();
                this._updateFormat();
                this._updateCharCount();
                this._toolBarObj.enableItemByID(this._rteId + "redo");
            }
            if (this._undoRedoPosition == 0) {
                this._toolBarObj.disableItemByID(this._rteId + "undo");
                this._toolBarObj.enableItemByID(this._rteId + "redo");
            }
            this._focus();
        },

        //Redo 
        _redo: function () {
            if (this._undoRedoPosition != this._backupArray.length) {
                if (this._backupArray[this._undoRedoPosition + 1] != null) {
                    var redoString = this._backupArray[this._undoRedoPosition + 1];
                    this.setHtml(redoString);
                    this._undoRedoPosition++;
                }
                else {
                    var redoString = this._backupArray[this._backupArray.length - 2];
                    this.setHtml(redoString);
                    this._undoRedoPosition = this._backupArray.length - 2;
                }
                this._updateToolbarStatus();
                this._updateFontOptionStatus();
                this._updateFormat();
                this._updateCharCount();
                if (!ej.isNullOrUndefined(this._toolBarObj)) {
                    if (this._backupArray.length - 1 > 0)
                        this._toolBarObj.enableItemByID(this._rteId + "undo");
                    if (this._undoRedoPosition == this._backupArray.length - 1)
                        this._toolBarObj.disableItemByID(this._rteId + "redo");
                }
            }
            this._focus();
        },

        //set content
        _setContent: function (htmltxt) {
            var editdoc = this._getDocument();
            editdoc.open();
            editdoc.write(htmltxt);
            editdoc.close();
            editdoc.EditMode = true;
        },

        //table start to create 
        _tableCellStart: function (e) {
            this._tableInsertAt = this._saveSelection();
        },

        //Select the table Cell on mouse over
        _tableCellSelect: function (e) {
            var cellEle, target = $(e.target);
            var row = target.parent().index();
            var col = target.index();
            this._createTable.find("div.e-rte-tablecell").each(function (index) {
                cellEle = $(this);
                if (cellEle.index() <= col && cellEle.parent().index() <= row) {
                    cellEle.addClass("e-active");
                }
                else {
                    cellEle.removeClass("e-active");
                }
            });
            this._tblheaderDiv.html((col + 1) + "x" + (row + 1) + " Table");
            $(this._getDocument()).find("table.e-rte-tableremove").remove();
            if (!ej.isNullOrUndefined(this._tableInsertAt) && !ej.isNullOrUndefined(this._tableInsertAt.startContainer)) {
                this._restoreSelection(this._tableInsertAt);
                this._onInsertTable((row + 1), (col + 1), true);
            }
        },
        _tableCellLeave: function (e) {
            this._createTable.find("div.e-rte-tablecell").removeClass("e-active");
            $(this._getDocument()).find("table.e-rte-tableremove").remove();
            this._tblheaderDiv.html(this._getLocalizedLabels("createTable"));
        },
        _tableCellDown: function (e) {
            var target = $(e.target);
            var row = target.parent().index() + 1;
            var col = target.index() + 1;
            this._focus();
            $(this._getDocument()).find("table.e-rte-tableremove").remove();
            if (!ej.isNullOrUndefined(this._tableInsertAt) && !ej.isNullOrUndefined(this._tableInsertAt.startContainer)) {
                this._restoreSelection(this._tableInsertAt);
                this._onInsertTable(row, col, false);
            }
            var _tableEle = $(this._getDocument()).find("table.e-rte-table");
            _tableEle.attr("contentEditable", false);
            _tableEle.find("td").attr("contentEditable", true);
            this._createTable.ejDialog("close");
            this._setBackupData();
            this._onChange();
        },

        _tableGenerator: function (rows, cols, designTime, width, height, spacing, padding, align, border, caption) {
            var tblClass = "e-rte-table", colTemplate = "<td><br _moz_dirty=''/></td>";
            if (designTime)
                tblClass += " e-rte-tableremove";
            width = ej.isNullOrUndefined(width) || width == "" ? "width='100%'" : "width=" + width + "'";
            height = ej.isNullOrUndefined(height) || height == "" ? "" : "height='" + height + "'";
            spacing = ej.isNullOrUndefined(spacing) || spacing == "" ? "" : "cellspacing='" + spacing + "'";
            padding = ej.isNullOrUndefined(padding) || padding == "" ? "" : "cellpadding='" + padding + "'";
            switch (border) {

                case "dotted": borderstyle = "dotted";
                    break;
                case "double":
                    border = "style='border:3px double black'";
                    borderstyle = "double";
                    return "<table class='" + tblClass + "' " + width + " " + height + " " + border + " " + spacing + " " + padding + " " + align + ">" + (caption ? "<caption></caption>" : "") + Array(rows + 1).join("<tr>" + Array(cols + 1).join("<td style='border:3px " + borderstyle + " black'><br _moz_dirty=''/></td>") + "</tr>") + "</table>";
                    break;
                case "dashed": borderstyle = "dashed";
                    break;
                case "solid": borderstyle = "solid";
                    break;
                default: borderstyle = "solid";
                    break;
            }
            if (borderstyle != "double")
                border = "style='border:1px '" + borderstyle + "' black'";
            return "<table class='" + tblClass + "' " + width + " " + height + " " + border + " " + spacing + " " + padding + " " + align + ">" + (caption ? "<caption></caption>" : "") + Array(rows + 1).join("<tr>" + Array(cols + 1).join("<td style='border:1px " + borderstyle + " black'><br _moz_dirty=''/></td>") + "</tr>") + "</table>";

           
            align = ej.isNullOrUndefined(align) ? "" : " align='" + align + "'";
            return "<table class='" + tblClass + "' " + width + " " + height + " " + border + " " + spacing + " " + padding + " " + align + ">" + (caption ? "<caption></caption>" : "") + Array(rows + 1).join("<tr>" + Array(cols + 1).join(colTemplate) + "</tr>") + "</table>";
        },
        //custom table link click event 
        _openCustomTable: function (e) {
            this._customTableDialog.ejDialog("open");
        },
        _documentClick: function (e) {
            if ((!ej.isNullOrUndefined(this._createTable)) && ($(e.target).parents("#" + this._rteId + "tables").length <= 0))
                this._createTable.ejDialog("isOpened") && this._createTable.ejDialog("close");
        },
        // iframe events 
        _iframeFocus: function (e) {
            !ej.isNullOrUndefined(this._createTable) && this._createTable.ejDialog("isOpened") && this._createTable.ejDialog("close");
            !ej.isNullOrUndefined(this._fontSizeDDL) && this._fontSizeDDL.ejDropDownList("hidePopup");
            !ej.isNullOrUndefined(this._fontStyleDDL) && this._fontStyleDDL.ejDropDownList("hidePopup");
            !ej.isNullOrUndefined(this._formatDDL) && this._formatDDL.ejDropDownList("hidePopup");
            !ej.isNullOrUndefined(this._createTable) && this._createTable.ejDialog("close");
            !ej.isNullOrUndefined(this._splitMenu) && this._splitMenu.hide(e);
            !ej.isNullOrUndefined(this._bgSplitMenu) && this._bgSplitMenu.hide(e);
        },
        _iframeKeyDown: function (e) {
            var _toolEle;
            if (this.model.showToolbar && this.model.allowKeyboardNavigation) {
                if (e && e.ctrlKey == true) {
                    /// Ctrl-b is pressed
                    if (e.keyCode == 66) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "bold");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onBold();
                            if (!_toolEle.hasClass("e-active"))
                                this._toolBarObj.selectItemByID(this._rteId + "bold");
                            else
                                this._toolBarObj.deselectItemByID(this._rteId + "bold");
                        }
                        return false;
                    }
                        /// Ctrl-i is pressed
                    else if (e.keyCode == 73) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "italic");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onItalics();
                            if (!_toolEle.hasClass("e-active"))
                                this._toolBarObj.selectItemByID(this._rteId + "italic");
                            else
                                this._toolBarObj.deselectItemByID(this._rteId + "italic");
                        }
                        return false;
                    }
                        /// Ctrl-u is pressed.
                    else if (e.keyCode == 85) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "underline");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onUnderLine();
                            if (!_toolEle.hasClass("e-active"))
                                this._toolBarObj.selectItemByID(this._rteId + "underline");
                            else
                                this._toolBarObj.deselectItemByID(this._rteId + "underline");
                        }
                        return false;
                    }
                        //justify Left Crtl-l
                    else if (e.keyCode == 76 && !e.altKey) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "justifyLeft");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onJustifyLeft();
                            this._alignToolUpdate("justifyLeft");
                        }
                        return false;
                    }
                        //justify right Crtl-r
                    else if (e.keyCode == 82) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "justifyRight");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onJustifyRight();
                            this._alignToolUpdate("justifyRight");
                        }
                        return false;
                    }
                        //justify center Crtl-e
                    else if (e.keyCode == 69 && !e.altKey) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "justifyCenter");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onJustifyCenter();
                            this._alignToolUpdate("justifyCenter");
                        }
                        return false;
                    }
                        //justify center Crtl-J
                    else if (e.keyCode == 74 && !e.altKey) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "justifyFull");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onJustifyFull();
                            this._alignToolUpdate("justifyFull");
                        }
                        return false;
                    }
                        //Undo
                    else if (e.keyCode == 90 && !e.altKey) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "undo");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onUndo();
                        }
                        return false;
                    }
                        //REDO
                    else if (e.keyCode == 89) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "rddo");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._onRedo();
                        }
                        return false;
                    }
                        //COPY
                    else if (e.keyCode == 67) {
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "copy");
                        if (_toolEle.hasClass("e-disable")) {
                            this._keypressFlag = false;
                            e.preventDefault();
                        }
                    }
                        //CUT
                    else if (e.keyCode == 88) {
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "cut");
                        if (_toolEle.hasClass("e-disable")) {
                            this._keypressFlag = false;
                            e.preventDefault();
                        }

                    }
                        //PASTE
                    else if (e.keyCode == 86) {
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "paste");
                        if (_toolEle.hasClass("e-disable")) {
                            this._keypressFlag = false;
                            e.preventDefault();
                        }
                    }
                        //INDENT
                    else if (e.keyCode == 77) {

                        if (e.shiftKey == true) {
                            e.preventDefault();
                            _toolEle = this._toolBarItems.find("#" + this._rteId + "outdent");
                            if (!_toolEle.hasClass("e-disable")) {
                                this._onOutdent();
                                if (this._indentdepth > 0)
                                    this._indentdepth--;
                            }
                            return false;
                        }
                        else {
                            e.preventDefault();
                            _toolEle = this._toolBarItems.find("#" + this._rteId + "indent");
                            if (!_toolEle.hasClass("e-disable")) {
                                this._onIndent();
                                this._indentdepth++;
                            }
                            return false;
                        }
                    }
                        //Hyperlink
                    else if (e.keyCode == 75) {
                        e.preventDefault();
                        _toolEle = this._toolBarItems.find("#" + this._rteId + "createLink");
                        if (!_toolEle.hasClass("e-disable")) {
                            this._hyperLinkManager();
                        }
                        return false;

                    }
                }

                    // Delete and Delete All
                else if (e.keyCode == 127) {
                    if ((this.getHtml() == this.getSelHtmlString()) || (this._currentIFrame.get_Text() == this._currentIFrame.getSelText())) {
                        var isClearAll = this.ClearAllManager();
                        if (!isClearAll) {
                            e.preventDefault();
                            return isClearAll;
                        }
                    }
                }
            }
            if (this.model.maxLength != null) {
                this._validateMaxLength(e);
            }
            this._trigger("keydown", { keyCode: e.keyCode });
            // if (e.keyCode != 16 || e.keyCode != 17 || e.keyCode != 18)
                // this._onChange();
        },
        //Key press event
        _iframeKeypress: function (e) {
            if (!this._keypressFlag) {
                e.preventDefault();
                this._keypressFlag = true;
                return false;
            }
        },
        _iframeKeyUp: function (e) {
            this._toggleEditTable();
            this._setBackupData();
            this._updateToolbarStatus();
            this._updateFontOptionStatus();
            this._updateFormat();
            this._updateCharCount();
            var selectEle = this._getSelectedNode();
            this._updateTagInfo(selectEle);
			this._onChange();
            this._trigger("keyup", { keyCode: e.keyCode });
        },
        _iframeMouseUp: function (e) {
            this._toggleEditTable();
            this._updateToolbarStatus();
            this._updateFontOptionStatus();
            this._updateFormat();
        },
        _iframeMouseDown: function (e) {
            this._updateTagInfo(e.target);
            this._updateIndent(e.target);
        },
        _iframeFocusOut: function (e) {
            this._onChange();
            this._selectionRange = this._saveSelection();
            this._seleText = ej.isNullOrUndefined(this._getWindow().document.selection) ? this._selectionRange .toString(): this._getWindow().document.selection.createRange().text;
        },
        _widthFocusOut:function(e)
        {
            var val = this._customTableDialog.find("#" + this._rteId + "_txtWidth").val();
            if( val && !isNaN(val) || (val.slice(-2) =='px') || (val.slice(-2) =='em') || (val.slice(-2) =='pt') || (val.slice(-1)=='%') )
               this._customTableDialog.find("#" + this._rteId + "_ddlAlignment").ejDropDownList({ enabled:true });
            else
               this._customTableDialog.find("#" + this._rteId + "_ddlAlignment").ejDropDownList({ enabled:false });
        },
        //-------------------- Event Wire-up -------------------------//
        _wireEvents: function () {
            var _iframe = $(this._getDocument());
            if (!ej.isNullOrUndefined(this._createTable)) {
                this._on(this._createTable, "mouseenter", "div.e-rte-tablecell", this._tableCellStart);
                this._on(this._createTable, "mousemove", "div.e-rte-tablecell", this._tableCellSelect);
                this._on(this._createTable, "mouseleave", "div.e-rte-table", this._tableCellLeave);
                this._on(this._createTable, "mousedown", "div.e-rte-tablecell", this._tableCellDown);
                this._on($(document), "click", this._documentClick);
            }
            this._on(_iframe, "focus", this._iframeFocus);
            this._on(_iframe, "keydown", this._iframeKeyDown);
            this._on(_iframe, "keypress", this._iframeKeypress);
            this._on(_iframe, "keyup", this._iframeKeyUp);
            this._on(_iframe, "mouseup", this._iframeMouseUp);
            this._on(_iframe, "mousedown", this._iframeMouseDown);
            this._on(_iframe, "focusout", this._iframeFocusOut);
            if(!ej.isNullOrUndefined(this._customTableDialog))
            this._on(this._customTableDialog.find("#" + this._rteId + "_txtWidth"), "focusout", this._widthFocusOut);

        },

        _unwireEvents: function () {
            var _iframe = $(this._getDocument());
            if (!ej.isNullOrUndefined(this._createTable)) {
                this._off(this._createTable.find("div.e-rte-tablecell"), "mousemove");
                this._off(this._createTable.find("div.e-rte-table"), "mouseleave");
                this._off(this._createTable.find("div.e-rte-tablecell"), "mousedown");
                this._off($(document), "click");
            }
            this._off(_iframe, "focus");
            this._off(_iframe, "keydown");
            this._off(_iframe, "keyup");
            this._off(_iframe, "mouseup");
            this._off(_iframe, "mousedown");
            this._off(_iframe, "blur");
            if (!ej.isNullOrUndefined(this._customTableDialog))
            this._off(this._customTableDialog.find("#" + this._rteId + "_txtWidth"), "focusout");
        },

        /*----------------------- Event handler------------------------------------------*/
        _onChange: function () {
		_prevhtml = $.trim(this.value()).replace(/<\/(p|li|ul|ol|h[1-6]|table|tr|td|th)>/gi, "</$1>\n").replace(/<(ul|ol)([^>]*)><li/gi, "<$1$2>\n<li").replace(/<br \/>/gi, "<br />\n").replace(/\n$/, "").replace(/&nbsp;/g, ' ');
		if( _prevhtml!== this.getHtml()){
            this._updateValue();
            var args = { text: this._getText(), htmlText: this.getHtml() };
            this._trigger("change", args);
			}
        },

        /*----------------------- Public Methods-----------------------------------------*/

        //Disables toolbar item
        /**
        * disable the RTE toolbar item.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.disableToolbarItem("rteSamplecreateTable"); // disable toolbar item
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("disableToolbarItem","rteSamplecreateTable");// disable toolbar item        
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        disableToolbarItem: function (id) {
            !ej.isNullOrUndefined(id) && this._toolBarObj.disableItemByID(id);
        },
        /**
        * enable  the RTE toolbar item.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	            
        *      &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
         * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.enableToolbarItem("rteSamplecreateTable"); // enable toolbar item
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("enableToolbarItem","rteSamplecreateTable");// enable toolbar item        
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //To enable toolbar item
        enableToolbarItem: function (id) {
            !ej.isNullOrUndefined(id) && this._toolBarObj.enableItemByID(id);
        },
        /**
        * removes  the RTE toolbar item.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	          
        *        &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
      * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.removeToolbarItem("rteSamplecreateTable"); // remove toolbar item
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("removeToolbarItem","rteSamplecreateTable");// remove toolbar item        
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //Removes toolbar item
        removeToolbarItem: function (id) {
            !ej.isNullOrUndefined(id) && this._toolBarObj.removeItemByID(id);
        },
        /**
        * Displays the RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	             
        *     &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
         * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.show(); // shows rte
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("show");// shows rte       
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //Displays the control
        show: function () {
            this._rteWapper.show();
        },
        /**
        * Hides the RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	                 
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
       * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.hide(); // hides rte
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("hide");// hides rte       
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //Hides the control
        hide: function () {
            this._rteWapper.hide();
        },
        /**
        * gets the HTML string from the RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	                
        *  &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.getHtml(); // gets the html string from rte
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("getHtml");// getHtml from rte        
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        getHtml: function () {
            var _html = this._getDocument().body.innerHTML;
            _html = $.trim(_html).replace(/<\/(p|li|ul|ol|h[1-6]|table|tr|td|th)>/gi, "</$1>\n").replace(/<(ul|ol)([^>]*)><li/gi, "<$1$2>\n<li").replace(/<br \/>/gi, "<br />\n").replace(/\n$/, "").replace(/&nbsp;/g, ' ');
            return _html;
        },
        /**
        * sets the HTML string from the RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	              
        *   &lt;/textarea &gt;
        * &lt;script&gt;
         * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.setHtml("The Rich Text Editor (RTE) control is an easy to render in client side."); // sets the html string to rte
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("setHtml","The Rich Text Editor (RTE) control is an easy to render in client side.");// sets the html string to rte    
	       
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //Set the 
        setHtml: function (value) {
            this._getDocument().body.innerHTML = value;
        },
        /**
        * gets the content as string from the RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	               
        *   &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
       * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.getText(); // gets the content as string from rte
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("getText");// getText from rte        
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //Get plan text
        getText: function () {
            return this._getText();
        },
        /**
        * gets the content as string from the RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	             
        *     &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.executeCommand("bold", true); // gets the content as string from rte
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //Execute Command
        executeCommand: function (cmdName, args) {
            if (this._trigger("execute", { commandName: cmdName }))
                return false;
            var anchor = "";
            if (cmdName == "underline") {
                if (window.getSelection) {
                    anchor = $(this._getWindow().getSelection().anchorNode).parents("a");
                    if (anchor.length > 0) {
                        $(anchor).css("text-decoration", ($(anchor).css("text-decoration") == "none") ? "underline" : "none");
                        return;
                    }
                }
            }
            else if (cmdName.toLowerCase() == "inserthtml") {
                if (this._isIE()) {
                    this._pasteHtml(args);
                }
                else
                    this._getDocument().execCommand(cmdName, false, args);
                return;
            }
            //this._focus();
            this._getDocument().execCommand(cmdName, false, args);
            this._setBackupData();
        },
        /**
        * focus the RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt; 	               
        *   &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
         * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.focus(); // gets the content as string from rte
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("focus");// enable toolbar item        
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //focus the editable area.
        focus: function () {
            this._focus();
        },
        /**
        * gets the command status of the given RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt;                   
        *  &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
         * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.getCommandStatus(arguments); // gets the content as string from rte
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //get the command status
        getCommandStatus: function (value) {
            if (ej.isNullOrUndefined(value) || value != "")
                return this._getCommandStatus(value);
        },
        /**
        * gets the command status of the given RTE control.
        * @example 
        * &lt;textarea   id="rteSample"&gt;     
    * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
        &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
        client side. Customer easy to edit the contents and get the HTML content for
        the displayed content. A rich text editor control provides users with a toolbar
        that helps them to apply rich text formats to the text entered in the text
        area. &lt;/p&gt;&lt;/textarea &gt;     
    * &lt;script&gt;
    * $("#rteSample").ejRTE();
        * // Create RTE
        * var rteeObj  = $("#rteSample").data("ejRTE");
        * rteeObj.getSelectedHtml(); // gets the content as string from rte
        * &lt;/script&gt;
		* @example 
        * &lt;textarea   id="rteSample"&gt; 	   
        * &lt;p&gt;&lt;b&gt;Description:&lt;/b&gt;&lt;/p&gt;
	    * &lt;p&gt;The Rich Text Editor (RTE) control is an easy to render in
	    client side. Customer easy to edit the contents and get the HTML content for
	    the displayed content. A rich text editor control provides users with a toolbar
	    that helps them to apply rich text formats to the text entered in the text
	    area. &lt;/p&gt;&lt;/textarea &gt;
        * &lt;script&gt;
        * $("#rteSample").ejRTE();
        * // Create RTE
        * $("#rteSample").ejRTE("getSelectedHtml");// getSelectedHtml from rte        
        * &lt;/script&gt;
        *@memberof ejRTE
        * @instance
        */
        //currently selected text html
        getSelectedHtml: function () {
            return this._getSelectedHtmlString();
        },
        
        //Tables methods
        //insert table Rows
        insertRow: function (before, cell) {
            //$("#rte1_Iframe").contents().find("#test").parents("tr").find("td").length
            var seletedCell = ej.isNullOrUndefined(cell) ? this._getSelectedNode() : cell;
            var colTemplate = "<td contentEditable='true'><br _moz_dirty=''/></td>", curRow = $(seletedCell).closest("tr");
            var cols = curRow.find("td").length;
            var newRow = $("<tr>" + Array(cols + 1).join(colTemplate) + "</tr>");
            before ? newRow.insertBefore(curRow) : newRow.insertAfter(curRow);
            curRow.find("td:first").focus();
        },
        
        //Insert table Columns
        insertColumn: function (before, cell) {
            var seletedCell = ej.isNullOrUndefined(cell) ? this._getSelectedNode() : cell;
            var colTemplate = "<td contentEditable='true'><br _moz_dirty=''/></td>", curRow = $(seletedCell).closest("tr"), curCell;
            var allRows = curRow.closest("table").find("tr");
            var colIndex = curRow.find("td").index(seletedCell);
            for (var i = 0; i < allRows.length; i++) {
                curCell = $(allRows[i]).find("td")[colIndex];
                before ? $(colTemplate).insertBefore(curCell) : $(colTemplate).insertAfter(curCell);
            }
        },
       
        //Remove table Row
        removeRow: function (cell) {
            var seletedCell = ej.isNullOrUndefined(cell) ? this._getSelectedNode() : cell;
            curRow = $(seletedCell).closest("tr").remove();
        },
      
        //Remove table Column
        removeColumn: function (cell) {
            var seletedCell = ej.isNullOrUndefined(cell) ? this._getSelectedNode() : cell;
            var curRow = $(seletedCell).closest("tr");
            var allRows = curRow.closest("table").find("tr");
            var colIndex = curRow.find("td").index(seletedCell);
            for (var i = 0; i < allRows.length; i++) {
                $($(allRows[i]).find("td")[colIndex]).remove();
            }
        },
        
        //Remove table 
        removeTable: function (table) {
            var seletedTable = ej.isNullOrUndefined(table) ? $(this._getSelectedNode()).closest("table") : table;
            $(seletedTable).remove();
        }
    });

    ej.RTE.Locale = {};

    ej.RTE.Locale["en-US"] = {
        bold: "Bold",
        italic: "Italic",
        underline: "Underline",
        strikethrough: "Strikethrough",
        superscript: "Superscript",
        subscript: "Subscript",
        justifyCenter: "Align text center",
        justifyLeft: "Align text left",
        justifyRight: "Align text right",
        justifyFull: "Justify",
        unorderedList: "Insert unordered list",
        orderedList: "Insert ordered list",
        indent: "Indent",
        outdent: "Outdent",
        cut: "Cut",
        copy: "Copy",
        paste: "Paste",
        paragraph: "Paragraph",
        undo: "Undo",
        redo: "Redo",
        upperCase: "Upper Case",
        lowerCase: "Lower Case",
        clearAll: "Clear All",
        clearFormat: "Clear Format",
        createLink: "Insert/Edit hyperlink",
        image: "Insert image",
        video: "Insert video",
        embedVideo: "Paste your embed code below",
        viewHtml: "View HTML",
        fontName: "Select font family",
        fontSize: "Select font size",
        fontColor: "Select color",
        format: "Format",
        backgroundColor: "Background color",
        style: "Styles",
        deleteAlert: "Are you sure you want to clear all the contents?",
        copyPastAlert: "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.",
        videoError: "The text area can not be empty",
        imageWebUrl: "Web Address",
        imageAltText: "Image description",
        dimensions: "Dimensions",
        constrainProportions: "Constrain Proportions",
        linkWebUrl: "Web Address",
        linkText: "Text",
        linkToolTip: "ToolTip",
        linkOpenInNewWindow: "Open link in new window",
        tableColumns: "No.of Columns",
        tableRows: "No.of Rows",
        tableWidth: "Table width",
        tableHeight: "Table height",
        tableCellSpacing: "Cell spacing",
        tableCellPadding: "Cell padding",
        tableBorder: "Border",
        tableCaption: "Caption",
        tableAlignment: "Alignment",
        dialogUpdate: "Update",
        dialogInsert: "Insert",
        dialogCancel: "Cancel",
        dialogOk: "Ok",
        createTable: "Create table",
        addColumnLeft: "Add column on the left",
        addColumnRight: "Add column on the right",
        addRowAbove: "Add row above",
        addRowBelow: "Add row below",
        deleteRow: "Delete the row",
        deleteColumn: "Delete the column",
        deleteTable: "Delete the table",
        customTable: "Create custom table...",
        characters: "Characters"
    };

})(jQuery, Syncfusion);;