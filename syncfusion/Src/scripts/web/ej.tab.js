/*!
*  filename: ej.tab.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

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