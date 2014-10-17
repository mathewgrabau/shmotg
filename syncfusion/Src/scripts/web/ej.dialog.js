/*!
*  filename: ej.dialog.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Dialog control
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
       * @class ejDialog
       * @param {object} options - settings for Dialog.
       * @requires jQuery
       * @requires jquery.easing.1.3.js
       * @requires ej.core.js
       * @requires ej.dialog.js
       * @requires ej.scroller.js
       * @requires ej.draggable.js
       * @classdesc Custom Design for Html Dialog control.
       *@example
       * &lt;div id="dialog" title="WPF"&gt;
       *Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
       * &lt;/div&gt;
       * &lt;script&gt;
       * // Create Dialog control
       *  $("#dialog").ejDialog({position: { X: 300, Y: 10 }}); 	
       * &lt;/script&gt;
       */
    ej.widget("ejDialog", "ej.Dialog", {
        _rootCSS: "e-dialog",
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _setFirst: false,

        // default model
        defaults: {
            /// <summary>This Contains default property of Sycnfusion Dialog </summary>
            
			/**
			* Enables the Dialog window to open automatically.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* // Enables the Dialog window to open automatically during initialization  
			* 	 $("#dialog").ejDialog({  position: { X: 500, Y: 26 },showOnInit:true});				
			* &lt;/script&gt;
			 * @memberof ejDialog
			* @instance
			*/	
           
			showOnInit: true,
			/**		
			* Allows the Dialog window to be closed by pressing the Esc key.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* // Enable closeOnEscape during initialization  
			* 	 $("#dialog").ejDialog({position: { X: 300, Y: 10 }, closeOnEscape: false});				 
			* &lt;/script&gt;
			 * @memberof ejDialog
			* @instance
			*/	
            closeOnEscape: true,
			/**		
			* Customizes the close button tooltip text.
			* @default close
			* @type {String}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //To set closeText API value during initialization  
			* 	$("#dialog").ejDialog({position: { X: 300, Y: 10 },closeIconTooltip: "hide" });				
			* &lt;/script&gt;
			 * @memberof ejDialog
			* @instance
			*/	
           closeIconTooltip: "close",
			enableAnimation: true,
				/**		
			* To enable the dialog window to dragged within the page.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Enable draggable during initialization  
			* 	$("#dialog").ejDialog({position: { X: 300, Y: 10 }, allowDraggable: false});					
			* &lt;/script&gt;
			 * @memberof ejDialog
			* @instance
			*/
            allowDraggable: true,
					/**		
			* Set the height for the dialog control.
			* @default auto
			* @type {String | integer}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Set Height during initialization  
			* 	$("#dialog").ejDialog({position: { X: 300, Y: 10 }, height: 400 });				
			* &lt;/script&gt;
			 * @memberof ejDialog
			* @instance
			*/
            height: "auto",
			/**		
			* Set the minimum height for the dialog control.
			* @default 150
			* @type {Integer}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Set minimum Height during initialization  
			* 	$("#dialog").ejDialog({position: { X: 300, Y: 10 }, minHeight: 400 });				
			* &lt;/script&gt;
			 * @memberof ejDialog
			* @instance
			*/
            minHeight: 0,
			/**		
			* Set the minimum width for the dialog control.
			* @default 150
			* @type {Integer}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Set minimum Width during initialization  
			* 	 $("#dialog").ejDialog({position: { X: 300, Y: 10 }, minWidth: 400 });			
			* &lt;/script&gt;
			 * @memberof ejDialog
			* @instance
			*/
            minWidth: 0,
			/**		
			* Set the maximum height for the dialog control.
			* @default null
			* @type {Integer}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Set maximum height during initialization  
			* 	  $("#dialog").ejDialog({position: { X: 300, Y: 10 }, maxHeight: 600 });		
			* &lt;/script&gt;
			 * @memberof ejDialog
			* @instance
			*/
            maxHeight: null,
			/**		
			* Set the maximum width for the dialog control.
			* @default 150
			* @type {Integer}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Set maximum width during initialization  
			* 	   $("#dialog").ejDialog({ position: { X: 300, Y: 10 },maxWidth: 600 });
			* &lt;/script&gt;
			 * @memberof ejDialog
			* @instance
			*/
            maxWidth: null,
			/**		
			* Allows the dialog window to be used as a modal form.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Enable modal during initialization  
			* 	    $("#dialog").ejDialog({position: { X: 300, Y: 10 }, enableModal: true});
			* &lt;/script&gt;
			 * @memberof ejDialog
			* @instance
			*/
            enableModal: false,
			/**		
			* Displays the dialog window at the given X and Y position.
			* X: Dialog set the left position value.
			* Y: Dialog set the top position value.
			* @default Null
			* @type {JSONobject}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Enable position during initialization  
			* 	    $("#dialog").ejDialog({position: { X: 300, Y: 10 }});
			* &lt;/script&gt;
			 * @memberof ejDialog
			* @instance
			*/
            position: { X: "", Y: ""},
			/**		
			* Allows the dialog to be resized above the minimum height and minimum width values.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Allows the dialog to be resized during initialization  
			* 	    $("#dialog").ejDialog({ position: { X: 300, Y: 10 },enableResize: false});
			* &lt;/script&gt;
			 * @memberof ejDialog
			* @instance
			*/
            enableResize: true,
			/**		
			* Shows or hides the dialog header element.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* // Enable showHeader on initialization.  
			* 	   $("#dialog").ejDialog({ position: { X: 300, Y: 10 },showHeader: false});
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            showHeader: true,
			/**		
			* To load the dialog content at run time, such as ajax, images, and iframe.
			* @default null
			* @type {String}
			* @example
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt; 
	*  $("#dialog").ejDialog({position: { X: 300, Y: 10 }}); 
			* //Enable content on initialization.  
			* 	   $("#dialog").ejDialog({ position: { X: 300, Y: 10 },contentType: "ajax" });
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            contentType: null, //'ajax', 'iframe','image'
			/**		
			* Loads AJAX, image, and iframe content from a given location (URL).
			* @default null
			* @type {String}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;	
	* &lt;/div&gt;
	* &lt;script&gt;
			* //loadUrl on initialization.  
			* 	   $("#dialog").ejDialog({ position: { X: 300, Y: 10 },contentType: "ajax",contentUrl: "http://js.syncfusion.com/demos/web/dialog/ajaxcontent.html" });
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            contentUrl: null,
			
            ajaxSettings: { type: 'GET', cache: false, url: "", data: {}, dataType: "html", contentType: "html", async: true },
 /**		
			*Provides title text for the Dialog control.
			* @default ""
			* @type {String}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Title on initialization.  
			* 	    $("#dialog").ejDialog({position: { X: 300, Y: 10 }, title: "Custom title" });
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            title: "",
			/**		
			*Sets the width of the Dialog control.
			* @default ""
			* @type {String}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Width on initialization.  
			* 	 $("#dialog").ejDialog({ position: { X: 300, Y: 10 },width: 500 });
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            width: 400,
			/**		
			*Sets the z-index value of the control for the Dialog control.
			* @default 1000
			* @type {Integer}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //zIndex on initialization.  
			* 	 $("#dialog").ejDialog({position: { X: 300, Y: 10 }, zIndex: 500 });
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            zIndex: 1000,
			/**		
			*Set the root class for the Dialog control theme.
			* @default ""
			* @type {String}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //cssClass on initialization.  
			* 	$("#dialog").ejDialog({position: { X: 300, Y: 10 }, cssClass: "gradient-lime" });
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            cssClass: "",
			/**		
			*Displays dialog content from right to left when enabled
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Enable rtl on initialization.  
			* 	 $("#dialog").ejDialog({position: { X: 300, Y: 10 }, enableRTL: true});
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            enableRTL: false,
			/**		
			*Enables users to navigate right, left, up, and down in the control with keyboard action
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Enable  allowKeyboardNavigation on initialization.  
			* 	 $("#dialog").ejDialog({ position: { X: 300, Y: 10 },allowKeyboardNavigation: true});
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            allowKeyboardNavigation: true,
			/**		
			*Gives dialog window rounded corners.
			* @default false
			* @type {Boolean}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Enable roundedCorner on initialization.  
			* 	 $("#dialog").ejDialog({position: { X: 300, Y: 10 }, showRoundedCorner: true});
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            showRoundedCorner : false,
			/**		
			*Gives dialog window rounded corners.
			* @default [“close”]
			* @type {StringArray}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //iconAction on initialization.  
			* 	 $("#dialog").ejDialog({ position: { X: 300, Y: 10 },actionButtons: ["close","collapsible","pin"]});
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            actionButtons: ["close"], // ["close","collapsible","maximize","minimize","custom","pin"]
 /**		
			*Custom icons for custom actions can be provided by using a CSS class.
			* @default null
			* @type {String}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
	*  $("#dialog").ejDialog({position: { X: 300, Y: 10 }}); 
			* //customIconCss on initialization.  
			* 	 ("#dialog").ejDialog({ position: { X: 300, Y: 10 }, faviconCSS  : "custom-icon" });
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            faviconCSS  : null,
			   /**		
			*Places the dialog in the given container.
			* @default null
			* @type {String}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
	*  $("#dialog").ejDialog({position: { X: 300, Y: 10 }}); 
			* // Enable contentContainer on initialization.  
			* 	$("#dialog").ejDialog({ position: { X: 300, Y: 10 },content: "#samplearea" });
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            content: null,
			/**		
			*Saves the current model value to browser cookies for maintaining state.
			* @default False
			* @type {Boolean}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Enable persist on initialization.  
			* $("#dialog").ejDialog({position: { X: 300, Y: 10 }, enablePersistence: true});
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            enablePersistence: false,
			/**		
			*Enables or disables the Dialog control.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Set enabled on initialization.  
			*  $("#dialog").ejDialog({position: { X: 300, Y: 10 }, enabled: true });
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            enabled: true,
			/**		
			*Enables  the window resizing.
			* @default true
			* @type {Boolean}
			* @example 
			* &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			* //Enable windowResizing on initialization.  
			*  $("#dialog").ejDialog({position: { X: 300, Y: 10 }, enableAutoResize: true });
			* &lt;/script&gt;
			* @memberof ejDialog
			* @instance
			*/
            enableAutoResize: false,
            //Events
			 /**     
			 * Fires before dialog control is closed.
			 * @event
			 * @name ejDialog#beforeClose		
			 * @param {Object} argument.event returns the close icon click event args    
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * //beforeClose event for dialog
             *  $("#dialog").ejDialog({
             *	position: { X: 300, Y: 10 },
			 *  beforeClose: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            beforeClose: null,
			/**     
			 * Fires  after dialog control is closed.
			 * @event
			 * @name ejDialog#Close		
			 * @param {Object} argument.event returns the close icon click event args    
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * //beforeClose event for dialog
             *  $("#dialog").ejDialog({
             *	position: { X: 300, Y: 10 },
			 *  Close: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            close: null,
			/**     
			 * Fires  before dialog control is opened.
			 * @event
			 * @name ejDialog# beforeOpen		
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * // beforeOpen event for dialog
             *  $("#dialog").ejDialog({
             *	position: { X: 300, Y: 10 },
			 *   beforeOpen: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            beforeOpen: null,
				/**     
			 * Fires  after dialog control is opened.
			 * @event
			 * @name ejDialog#open		
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * //  open event for dialog
             *  $("#dialog").ejDialog({
             *	position: { X: 300, Y: 10 },
			 *    open: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            open: null,
			 /**     
			 * Fires  when dialog control is dragged.
			 * @event
			 * @name ejDialog#drag		
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event
			 * @param {Object} argument.event  returns the mouse move event args
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * //   drag event for dialog
             *  $("#dialog").ejDialog({
             *	position: { X: 300, Y: 10 },
			 *     drag: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            drag: null,
			/**     
			 * Fires when the dialog is starting to be dragged
			 * @event
			 * @name ejDialog#dragStart		
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event
			 * @param {Object} argument.event  returns the mouse down event args
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * //    dragStart event for dialog
             *  $("#dialog").ejDialog({
             *	position: { X: 300, Y: 10 },
			 *      dragStart: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            dragStart: null,
				/**     
			 * Fires after the dialog dragging stops
			 * @event
			 * @name ejDialog#dragStop		
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event
			 * @param {Object} argument.event  returns the mouse down event args
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * //     dragStop event for dialog
             *  $("#dialog").ejDialog({
             *	position: { X: 300, Y: 10 },
			 *       dragStop: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            dragStop: null,
	         /**    
			 * Fires on dialog resize action
			 * @event
			 * @name ejDialog#resize		
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event
			 * @param {Object} argument.event  returns the mouse move event args
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * //      resize event for dialog
             *  $("#dialog").ejDialog({
             *	position: { X: 300, Y: 10 },
			 *        resize: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            resize: null,
			 /**    
			 * Fires on dialog resize start action
			 * @event
			 * @name ejDialog#resizeStart		
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event
			 * @param {Object} argument.event  returns the mouse down event args
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * //       resizeStart event for dialog
             *  $("#dialog").ejDialog({
             *	position: { X: 300, Y: 10 },
			 *         resizeStart: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            resizeStart: null,
			 /**    
			 * Fires on dialog resize stop action
			 * @event
			 * @name ejDialog#resizeStop		
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event
			 * @param {Object} argument.event  returns the mouse leave event args
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * //        resizeStop event for dialog
             *  $("#dialog").ejDialog({
             *	position: { X: 300, Y: 10 },
			 *          resizeStop: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            resizeStop: null,
				 /**    
			 * Fires on AJAX content, iframe, or image load actions
			 * @event
			 * @name ejDialog#contentLoad		
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument.url  returns the content location
			 * @param {Object} argument.contentType  returns the content type
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * //         load event for dialog
             *  $("#dialog").ejDialog({
             *	position: { X: 300, Y: 10 },
			 *           contentLoad: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            contentLoad: null,
			/**    
			 * Fires when AJAX content is loaded successfully
			 * @event
			 * @name ejDialog#ajaxSuccess		
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument.url  returns the content location
			 * @param {string} argument.data  returns the content text
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * //          ajaxSuccess event for dialog
             *  $("#dialog").ejDialog({
             *	position: { X: 300, Y: 10 },
			 *            ajaxSuccess: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            ajaxSuccess: null,
			/**    
			 * Fires after an AJAX content loading error
			 * @event
			 * @name ejDialog#ajaxError		
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument.url  returns the content location
			 * @param {string} argument.data  returns the content text
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * //           ajaxError event for dialog
             *  $("#dialog").ejDialog({
             *	position: { X: 300, Y: 10 },
			 *             ajaxError: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            ajaxError: null,
            /**    
			 * Fires after Create dialog successfully
			 * @event
			 * @name ejDialog#create		
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event			 
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * //           Create event for dialog
             *  $("#dialog").ejDialog({
             *	position: { X: 300, Y: 10 },
			 *             create: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            create: null,
            /**    
			 * Fires after Destroy event successfully
			 * @event
			 * @name ejDialog#destroy		
			 * @param {boolean}  argument.cancel returns the cancel option value
			 * @param {object}  argument.model returns the dialog model
			 * @param {string}  argument.type returns the name of the event			
			 * @example 
			 * &lt;div id="dialog" title="WPF"&gt;
	*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	* &lt;/div&gt;
	* &lt;script&gt;
			 * //           destroy event for dialog
             *  $("#dialog").ejDialog({
            
			 *             destroy: function (args) {}
             * });
             * &lt;/script&gt;
			 * @memberof ejDialog
			 * @instance
			 */	
            destroy: null

        },

        dataTypes: {
            showOnInit: "boolean",
            closeOnEscape: "boolean",
			enableAnimation: "boolean",
            closeIconTooltip: "string",
            allowDraggable: "boolean",
            enableModal: "boolean",
            enableResize: "boolean",
            enableAutoResize: "boolean",
            showHeader: "boolean",
            title: "string",
            zIndex: "number",
            cssClass: "string",
            contentUrl: "string",
            contentType: "string",
            ajaxSettings: "data",
            actionButtons: "array"
        },
		/**
         * To configure the properties at runtime using SetModel		
		 * @private
         */	 
        _setModel: function (options) {
            if (!this.model.enabled && ej.isNullOrUndefined(options["enabled"])) return false;
            for (var key in options) {
                switch (key) {
                    case "closeIconTooltip": this._ejDialog.find("div.e-dialog-icon").attr("title", options[key]); break;
                    case "title": this._ejDialog.find("span.e-title").html(options[key]); break;
                    case "width": this.model.width = options[key]; this._setSize(); this._setContainerSize(); this._resetScroller(); break;
                    case "height": this.model.height = options[key]; this._setSize(); this._setContainerSize(); this._resetScroller(); break;
                    case "position": this.model.position = options[key]; this._dialogPosition(); break;
                    case "cssClass": this._changeSkin(options[key]); break;
                    case "showRoundedCorner ": this._roundedCorner(options[key]); break;
                    case "contentType": { this._appendContent(options[key]); break; }
                    case "enabled": { this.model.enabled = options[key]; this._enabledAction(options[key]); break; }
                    case "contentUrl": { this.model.contentUrl = options[key]; this._appendContent(this.model.contentType); break; }
                    case "content": { this._ejDialog.appendTo($(options[key])); break; }
                    case "minHeight": { this._ejDialog.css("minHeight", options[key]); break; }
                    case "minWidth": { this._ejDialog.css("minWidth", options[key]); break; }
					case "maxHeight": { this._ejDialog.css("maxHeight", options[key]); break; }
                    case "maxWidth": { this._ejDialog.css("maxWidth", options[key]); break; }
                    case "zIndex": { this._ejDialog.css('z-index', options[key]); break; }
                    case "faviconCSS  ": { this._dialogCustom.find("span").removeClass().addClass(options[key]); break; }
                    case "enableAutoResize": {
                        this.model.enableAutoResize = options[key];
                        this._ejDialog.addClass("e-dialog-resize");
                        this._wireResizing();
                        break;
                    }
					case "enableAnimation":{
							this.model.enableAnimation=options[key];
                        break;
                    }
					
                    case "allowDraggable": {
                        this.model.allowDraggable = options[key];
                        if (options[key])
                            this._enableDrag();
                        else {
                            this._dialogTitlebar.removeClass("e-draggable");
                        }
                        break;
                    }
                    case "enableResize": {
                        this.model.enableResize = options[key];
                        if (options[key])
                            this._enableResize();
                        else {
                            this._ejDialog.removeClass("e-resizable");
                            this._ejDialog.find(".e-resize-handle").remove();
                        }
                        break;
                    }
                    case "showHeader": {
                        this.model.showHeader = options[key];
                        if (options[key]) {
                            this._renderTitleBar();
                            this._iconsRender(this.model.actionButtons);
                            this._enableDrag();
                        }
                        else
                            this._ejDialog.find(".e-titlebar").remove();
                        break;
                    }
                    case "enableRTL":
                        {
                            if (options[key])
                                this._ejDialog.addClass("e-rtl");
                            else
                                this._ejDialog.removeClass("e-rtl");
                            break;
                        }
                    case "actionButtons":
                        {
                            if (!ej.isNullOrUndefined(this._dialogTitlebar)) {
                                this._removeAllIcons();
                                this._iconsRender(options[key]);
                            }
                        }
                    case "enableModal": this._enableModal(options[key]); break;
                }
            }
        },

         // all events bound using this._on will be unbind automatically
		/**
        * destroy the dialog widget
		* all events bound using this._on will be unbind automatically and bring the control to pre-init state.
		* @alias destroy
		* @return jQuery
		* @example 
		* &lt;div id="dialog" title="WPF"&gt;
		*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
		* &lt;/div&gt;
		* &lt;script&gt;
		 *  $("#dialog").ejDialog(); 
		* // Create Dialog control
		*  var dialogObj = $("#dialog").data("ejDialog");	//Initialize the Dialog object.
		*  dialogObj.destroy(); //Calls the destroy method of Dialog to destroy
		* &lt;/script&gt;
		* @example 
		* &lt;div id="dialog" title="WPF"&gt;
		*Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
		* &lt;/div&gt;
		* &lt;script&gt;
		*  //call destroy method
		*  $("#dialog").ejDialog("destroy"); 
		* &lt;/script&gt;
		* @memberof ejDialog
		* @instance
         */
        _destroy: function () {
            if (this._overLay) this._overLay.remove();
            this._cloneElement.appendTo(this._ejDialog.parent());
            this._ejDialog.remove();
            this._cloneElement.removeClass("e-dialog");
            this.element = this._cloneElement;
            this._isOpen = false;
        },

        keyConfigs: [37, 38, 39, 40], //keyConfigs for up,down,left and right keys

        // constructor function
		/**
         * Create the dialog widget
		 * @private
         */	
        _init: function () {
            this._widthPercent = null;
            this._heightPercent = null;
            this._renderControl();
            this._wireEvents();
        },
		/**
         * Render Section For Dialog	
		 * @private
         */	
        // render dialog control
        _renderControl: function () {
            //Clone element     
            this._cloneElement = this.element.clone();
            this.element.attr("tabindex", 0).attr("role", "dialog").attr("aria-labelledby", this.element.prop("id") + "_title");
            this._ejDialog = ej.buildTag("div.e-dialog e-widget e-box " + this.model.cssClass + " e-dialog-wrap e-shadow#" + this.element.prop("id") + "_wrapper", "", { display: "none", zIndex: this.model.zIndex }, { tabidex: 0 });
            this.model.enableAutoResize ? this._ejDialog.addClass("e-dialog-resize") : "";
            this.wrapper = this._ejDialog;
            if (!ej.isNullOrUndefined(this.model.content))
                this._ejDialog.appendTo($(this.model.content));
            else
                this._ejDialog.appendTo(document.body);
            if (this.model.enableRTL)
                this._ejDialog.addClass("e-rtl");
            //Render the Title Bar
            if (this.model.showHeader)
                this._renderTitleBar();
            //Icons Rendering
            if (this.model.showHeader)
                this._iconsRender(this.model.actionButtons);
            //Append Content
            this._appendContent(this.model.contentType);
            this._enabledAction(this.model.enabled);
            this._enableDrag();
            this._setSize();
            this._sizeInPercent();
            if (this.model.showOnInit && this.model.contentType != "ajax")
                this.open();
            this._setContainerSize();
            this._renderScroller();
            this._roundedCorner(this.model.showRoundedCorner );
            this.scroller = this.contentDiv.data("ejScroller");
         },
		 /**
         * To set Container Size for the Dialog control		
		 * @private
         */	
        _setContainerSize: function () {
            if (this.model.height != "auto") {
                this.contentDiv.height(this._ejDialog.height() - $(this._ejDialog.find("div.e-titlebar")).outerHeight());
                this.element.outerHeight(this._ejDialog.height() - $(this._ejDialog.find("div.e-titlebar")).outerHeight());
            }
        },
		 /**
         * To enable drag for the Dialog control		
		 * @private
         */	
        //Enable Drag
        _enableDrag: function () {
            if (this.model.allowDraggable && this.model.showHeader) {
                this._dialogTitlebar.addClass("e-draggable");
                this._dragDialog();
            }
        },
		/**
         * To add resize icon for the Dialog control		
		 * @private
         */	
        //Add resize icon
        _enableResize: function () {
            if (this.model.enableResize && this.model.enabled) {
                this._ejDialog.addClass("e-resizable");
                var resizeDiv = ej.buildTag("div.e-icon e-resize-handle");
                resizeDiv.appendTo(this._ejDialog);
                this._resizeDialog();
            }
        },
		/**
         * To change skin for the Dialog control		
		 * @private
         */	
        //Skin Change at run time
        _changeSkin: function (skin) {
            if (this.model.cssClass != skin) {
                this._ejDialog.removeClass(this.model.cssClass).addClass(skin);
            }
        },
        _enableModal: function (value) {
            if (value) this._isOpen && this._createOverlay();
            else if (this._overLay) this._overLay.remove();
        },
		/**
         * To enabledAction  for the Dialog control		
		 * @private
         */	
        _enabledAction: function (flag) {
            if (flag) {
                this._ejDialog.removeClass("e-disable");
                this._enableResize();
            }
            else {
                this._ejDialog.addClass("e-disable");
                this._ejDialog.removeClass("e-resizable");
                this._ejDialog.find(".e-resize-handle").remove();
            }
        },
		/**
         * To render title bar  for the Dialog control		
		 * @private
         */
        _renderTitleBar: function () {
            this._elementTitle = this.element.attr("title");
            if (typeof this._elementTitle !== "string") {
                this._elementTitle = "";
            }
            this.model.title = this.model.title || this._elementTitle;
            this._dialogTitlebar = ej.buildTag("div#" + this.element.prop("id") + "_title.e-titlebar e-header").prependTo(this._ejDialog);
            if (this.model.title) {
                //Add Title 
                ej.buildTag("span.e-title", this.model.title).prependTo(this._dialogTitlebar);
            }
        },
		/**
         * To render icons  for the Dialog control		
		 * @private
         */
        _iconsRender: function (iconArray) {
            for (var icon = 0; icon < iconArray.length; icon++) {
                switch (iconArray[icon]) {
                    case "close": {
                        this._closeIcon();
                        break;
                    }
                    case "collapsible": {
                        this._collapsibleIcon();
                        break;
                    }
                    case "maximize": {
                        this._maximizeIcon();
                        break;
                    }
                    case "minimize": {
                        this._minimizeIcon();
                        break;
                    }
                    case "pin": {
                        this._pinIcon();
                        break;
                    }
                    case "custom": {
                        this._customIcon();
                        break;
                    }
                }
            }
        },
		/**
         * To remove all the icons for the Dialog control		
		 * @private
         */
        _removeAllIcons: function () {
            this._dialogTitlebar.find("div.e-dialog-icon").remove();
        },
		/**
         * To append content  for the Dialog control		
		 * @private
         */
        _appendContent: function (contentType) {
            this.contentDiv = ej.isNullOrUndefined(this.contentDiv) ? ej.buildTag("div.e-dialog-scroller") : this.contentDiv;
            this.element.removeAttr("title").addClass("e-widget-content");
            if (!ej.isNullOrUndefined(this.model.contentUrl) && !ej.isNullOrUndefined(contentType)) {
                if (contentType == "ajax") {
                    this.model.ajaxSettings.url = this.model.contentUrl;
                    this._sendAjaxOptions(this.element, this.model.ajaxSettings.url);
                }
                else if (contentType == "iframe") {
                    var iframe = ej.buildTag("iframe.e-iframe", "", { width: "100%" }, { scrolling: "no", frameborder: 0, src: this.model.contentUrl });
                    this.element.append(iframe).show().appendTo(this.contentDiv);
                    this._trigger("contentLoad", { contentType: contentType, url: this.model.contentUrl });
                }
                else if (contentType == "image") {
                    var img = ej.buildTag("img.e-images", "", "", { src: this.model.contentUrl });
                    this.element.append(img).show().appendTo(this.contentDiv);
                    this._trigger("contentLoad", { contentType: contentType, url: this.model.contentUrl });
                }
            }
            else {
                this.element.show()
                .appendTo(this.contentDiv);
            }
            this.contentDiv.appendTo(this._ejDialog);
        },
		/**
         * To set showRoundedCorner   for the Dialog control		
		 * @private
         */
        _roundedCorner: function (value) {
            if (value) {
                this._ejDialog.addClass('e-corner-all');
                this._dialogTitlebar.addClass('e-corner-top');
                this._dialogClose.addClass('e-corner-all');
            }
            else if (this._ejDialog.hasClass('e-corner-all')) {
                this._ejDialog.removeClass('e-corner-all');
                this._dialogTitlebar.removeClass('e-corner-top');
                this._dialogClose.removeClass('e-corner-all');
            }
        },
		/**
         * To reRender scroller for the Dialog control		
		 * @private
         */
        _reRenderScroller: function () {
            if( this.scroller!=undefined)
            this.scroller.refresh();
        },
		/**
         * To Render scroller  for the Dialog control		
		 * @private
         */
        _renderScroller: function () {
            var scrollerWidth = this.model.width;
            if ((this.model.maxHeight !== null && this.model.maxHeight < this.element.outerHeight()) || !(this.model.height === "auto" || this.model.height === "100%")) {
                if (!(this.model.width === "auto" || this.model.width === "100%"))
                    scrollerWidth = this.element.outerWidth();
				var scrHeight = (this.model.maxHeight !== null) ? this.model.maxHeight - $("#"+this.element.prop("id") + "_title").outerHeight() : this.element.outerHeight();
                this.contentDiv.ejScroller({ width: scrollerWidth, height: scrHeight, enableRTL: this.model.enableRTL });
                this.scroller = this.contentDiv.data("ejScroller");
                this.contentDiv.width("100%");
            }
        },
        //Gets the maximum z-index in the document
         _dialogMaxZindex: function () {
             var parents = this.element.parents(), bodyEle;
            bodyEle = $('body').children(), index = bodyEle.index(this.popup);
            bodyEle.splice(index, 1);
            $(bodyEle).each(function (i, ele) { parents.push(ele); });

            var maxZ = Math.max.apply(maxZ, $.map(parents, function (e, n) {
                if ($(e).css('position') != 'static') return parseInt($(e).css('z-index')) || 1;
            }));
            if (!maxZ || maxZ < 10000) maxZ = 10000;
            else maxZ += 1;
            return maxZ;
        },
        //Set the Zindex for dialog
		/**
         * To set the maximum z-index  for the Dialog control		
		 * @private
         */
        _setZindex: function () {
            var zindex = this._dialogMaxZindex();
            if (this.model.zIndex <= zindex) {
                this._ejDialog.css({ zIndex: zindex + 1 });
            }
        },
        //Create the modal overlay div
		/**
         * To Create the modal overlay div for the Dialog control		
		 * @private
         */
        _createOverlay: function () {
            var zindex = this._ejDialog.css('zIndex');//this._dialogMaxZindex() < this.model.zIndex ? this.model.zIndex : this._dialogMaxZindex();
            this._overLay = ej.buildTag("div#" + this.element.attr("id") + "_overLay.e-overlay", "", { zIndex: zindex - 1 });
            this._overLay.appendTo(document.body);
        },

        //handling the ajax request
		/**
         * To handle ajax request for the Dialog control		
		 * @private
         */
        _sendAjaxOptions: function (content, link) {
            //load waiting popup
            content.addClass("e-load");
            var proxy = this;
            var curTitle = this.model.title;
            var hrefLink = link;
            var ajaxOptions = {

                "success": function (data) {
                    try {
                        proxy._ajaxSuccessHandler(data, content, link, curTitle);
                    } catch (e) {

                    }
                }, "error": function (e) {
                    try {
                        proxy._ajaxErrorHandler(e.statusText, content, link, curTitle);
                    } catch (e) {

                    }
                }
            };
            $.extend(true, ajaxOptions, this.model.ajaxSettings);
            this._sendAjaxRequest(ajaxOptions);
        },
		/**
         * To send ajax request for the Dialog control		
		 * @private
         */
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
         * Section For handle the ajaxSuccess event
		 * @private
         */	
        _ajaxSuccessHandler: function (data, content, link, curTitle) {
            content.removeClass("e-load");
            content.html(data).addClass("e-dialog-loaded").appendTo(this._ejDialog);
            content.appendTo(this.contentDiv);
            this._dialogPosition();
            this.open();
            this._trigger("ajaxSuccess", { data: data, url: link });
        },
		/**
         * Section For handle the ajaxSuccess event
		 * @private
         */	
        _ajaxErrorHandler: function (data, content, link, curTitle) {
            content.addClass("e-dialog-loaded");
            content.appendTo(this.contentDiv);
            this._dialogPosition();
            this.open();
            this._trigger("ajaxError", { data: data, url: link });
        },
		/**
         * To set close icon for the dialog control
		 * @private
         */	
        _closeIcon: function () {
            this._dialogClose = ej.util.buildTag("div.e-dialog-icon");
            var span = ej.util.buildTag("span.e-icon e-close", "", {}, { role: "presentation" });
            span.appendTo(this._dialogClose);
            this._dialogClose.appendTo(this._dialogTitlebar).attr("title", this.model.closeIconTooltip);
            this._on(this._dialogClose, "touchstart click", this._closeClick);
        },
		/**
         * To set collapsible icon for the dialog control.
		 * @private
         */	
        _collapsibleIcon: function () {
            this._dialogCollapsible = ej.util.buildTag("div.e-dialog-icon")
            var span = ej.util.buildTag("span.e-icon e-collapse-arrow", "", {}, { role: "presentation" });
            span.appendTo(this._dialogCollapsible);
            this._dialogCollapsible.appendTo(this._dialogTitlebar);
            this._on(this._dialogCollapsible, "mousedown", this._collapsibleClick);
        },
		/**
         * To set maximize icon for the dialog control.
		 * @private
         */	
        _maximizeIcon: function () {
            this._dialogMaximize = ej.util.buildTag("div.e-dialog-icon")
            var span = ej.util.buildTag("span.e-icon e-maximize", "", {}, { role: "presentation" });
            span.appendTo(this._dialogMaximize);
            this._dialogMaximize.appendTo(this._dialogTitlebar);
            this._on(this._dialogMaximize, "mousedown", this._maximizeClick);
        },
		/**
         * To set minimize icon for the dialog control.
		 * @private
         */	
        _minimizeIcon: function () {
            this._dialogMinimize = ej.util.buildTag("div.e-dialog-icon")
            var span = ej.util.buildTag("span.e-icon e-minimize", "", {}, { role: "presentation" });
            span.appendTo(this._dialogMinimize);
            this._dialogMinimize.appendTo(this._dialogTitlebar);
            this._on(this._dialogMinimize, "mousedown", this._minimizeClick);
        },
		/**
         * To set pin icon for the dialog control.
		 * @private
         */	
        _pinIcon: function () {
            this._dialogPin = ej.util.buildTag("div.e-dialog-icon")
            var span = ej.util.buildTag("span.e-icon e-unpin", "", {}, { role: "presentation" });
            span.appendTo(this._dialogPin);
            this._dialogPin.appendTo(this._dialogTitlebar);
            this._on(this._dialogPin, "mousedown", this._pinClick);
        },
		/**
         * To set custom icon for the dialog control.
		 * @private
         */	
        _customIcon: function () {
            this._dialogCustom = ej.util.buildTag("div.e-dialog-icon")
            var span = ej.util.buildTag("span.e-dialog-custom", "", {}, { role: "presentation" });
            span.appendTo(this._dialogCustom);
            this._dialogCustom.appendTo(this._dialogTitlebar);
            if (!ej.isNullOrUndefined(this.model.faviconCSS  ))
                span.addClass(this.model.faviconCSS  );
        },
		/**
         * To set size for the dialog control.
		 * @private
         */	
        _setSize: function () {
            var mdl = this.model;
            this._ejDialog.css({ width: mdl.width, minWidth: mdl.minWidth, maxWidth: mdl.maxWidth });
            this._ejDialog.css({ height: mdl.height, minHeight: mdl.minHeight, maxHeight: mdl.maxHeight });
        },
		/**
         * To reset Scroller for the dialog control.
		 * @private
         */	
        _resetScroller: function () {
            var scrHeight = parseInt(this.model.height) - $(this._ejDialog.find("div.e-titlebar")).outerHeight();
            this.contentDiv.ejScroller({ "width": this.model.width, "height": scrHeight });
            this.element.width("auto");
            this.scroller = this.contentDiv.data("ejScroller");
            this.scroller.refresh();
        },
		/**
         * To drag dialog control.
		 * @private
         */	
        _dragDialog: function () {
            var proxy = this;
            this._dialogTitlebar.ejDraggable({
                handle: ".e-titlebar",
                cursorAt: { top: 0, left: 0 },
                dragStart: function (event) {
                    proxy._clickHandler();
                    if (proxy.dialogPin || !proxy.model.allowDraggable || !proxy.model.enabled)
                        event.cancel = true;
                    if (proxy._trigger("dragStart", { event: event })) {
                        event.cancel = true;
                        return false;
                    }
                },
                drag: function (event) {
                    proxy._trigger("drag", { event: event });
                },
                dragStop: function (event) {
                    proxy._ejDialog.focus();
                    proxy._trigger("dragStop", { event: event });
                },
                helper: function (event) {
                    return $(proxy._ejDialog).addClass("dragClone");
                }
            });
        },
		/**
         * To resize dialog control.
		 * @private
         */	
        _resizeDialog: function () {
            var proxy = this, started = false;
            this._ejDialog.find("div.e-resize-handle").ejResizable(
                {
                    minHeight: parseInt(proxy.model.minHeight),
                    minWidth: parseInt(proxy.model.minWidth),
                    maxHeight: parseInt(proxy.model.maxHeight),
                    maxWidth: parseInt(proxy.model.maxWidth),
                    handle: "e-widget-content",
                    resizeStart: function (event) {
                        !started && proxy._trigger("resizeStart", { event: event });
                        started = true;
                    },
                    resize: function (event) {
                        var reElement = $(event.element).parents("div.e-dialog-wrap");
                        proxy.model.height = $(reElement).height();
                        proxy.model.width = $(reElement).width();
                        proxy._setSize();
                        proxy._resetScroller();
                        proxy._trigger("resize", { event: event });
                    },
                    resizeStop: function (event) {
                        proxy._ejDialog.focus();
                        proxy._sizeInPercent();
                        started && proxy._trigger("resizeStop", { event: event });
                        started = false;
                    },
                    helper: function (event) {
                        var reElement = $(event.element).parents("div.e-dialog-wrap");
                        proxy.model.height = $(reElement).height();
                        proxy.model.width = $(reElement).width();
                        proxy._setSize();
                        proxy._resetScroller();
                        return $(proxy._ejDialog);
                    }
                });
        },
		/**
         * To set position for the dialog control.
		 * @private
         */	
        _dialogPosition: function () {
            if (this._ejDialog.parents("form").length > 0 && ej.isNullOrUndefined(this.model.content)) {
                this._ejDialog.appendTo(this._ejDialog.parents("form"));
            }
            if (this.model.position.X != "" || this.model.position.Y != "") {
                this._ejDialog.css("position", "absolute");
                this._ejDialog.css("left", this.model.position.X + "px");
                this._ejDialog.css("top", this.model.position.Y + "px");
            }
            else {
                var x, y;
                if (!ej.isNullOrUndefined(this.model.content)) {
                    var location = $(this.model.content).position();
                    x = ($(this.model.content).outerWidth() > this._ejDialog.width()) ? (($(this.model.content).outerWidth() - this._ejDialog.width()) / 2) + Math.ceil(location.left) : Math.ceil(location.left);
                    y = ($(this.model.content).outerHeight() > this._ejDialog.height()) ? (($(this.model.content).outerHeight() - this._ejDialog.height()) / 2) + Math.ceil(location.top) : Math.ceil(location.top);
                }
                else {
                    x = ($(window).outerWidth() > this._ejDialog.width()) ? ($(window).outerWidth() - this._ejDialog.outerWidth()) / 2 : 0;
                    y = ($(window).outerHeight() > this._ejDialog.height()) ? ($(window).outerHeight() - this._ejDialog.outerHeight()) / 2 : 0;
                }
                this._ejDialog.css({ top: y, left: x });
                this._ejDialog.css("position", "absolute");
            }         
        },
		/**
         * Section handles when close icon is clicked
		 * @private
         */	
        _closeClick: function (event) {
            event.stopPropagation();
            this.close(event);
        },
			/**
         * Section handles when collapsible icon is clicked
		 * @private
         */	
        _collapsibleClick: function (e) {
            if ($(e.target).hasClass("e-collapse-arrow")) {
                this._dialogCollapsible.find("span.e-collapse-arrow").removeClass("e-collapse-arrow").addClass("e-expand-arrow");
                this._ejDialog.find("div.e-resize-handle").hide();
                this._ejDialog.find(".e-widget-content").parent().slideUp("fast");
                this._ejDialog.removeClass("e-shadow");
                this._ejDialog.css("minHeight", "0");
                this._ejDialog.height("auto");
            }
            else if ($(e.target).hasClass("e-expand-arrow")) {
                this._dialogCollapsible.find("span.e-expand-arrow").removeClass("e-expand-arrow").addClass("e-collapse-arrow");
                this._ejDialog.addClass("e-shadow");
                this._ejDialog.find(".e-widget-content").parent().slideDown("fast");
                this._ejDialog.find("div.e-resize-handle").show();
                this._ejDialog.height(this.model.height);
            }
        },
		/**
         * Section handles when maximize icon is clicked
		 * @private
         */	
        _maximizeClick: function (e) {
            var _target = $(e.target);
            if (_target.hasClass("e-maximize")) {
                this._ejDialog.css("top", "0px").css("left", "0px").css("position", "fixed");
                this._ejDialog.css({ width: "100%", height: "100%" });
                this.element.css({ width: "100%", height: "100%" });
                this.contentDiv.css({ width: "100%", height: "100%" });
                _target.removeClass("e-maximize").addClass("e-restore");
                this._maximize = true;
                this.dialogPin = true;
            }
            else if (_target.hasClass("e-restore")) {
                this.element.height("");
                this.element.width("");
                this._restoreDialog();
                _target.removeClass("e-restore").addClass("e-maximize");
            }
        },
		/**
         * Section handles when minimize icon is clicked
		 * @private
         */	
        _minimizeClick: function (e) {
            var _target = $(e.target);
            if (_target.hasClass("e-minimize")) {
                if (this._maximize)
                    this._setSize();
                var top = ($(window).height() - this._ejDialog.height()) + this.element.height() + 14;
                this._ejDialog.css("top", "").css("bottom", "0").css("left", "0").css("position", "fixed");
                this._ejDialog.css("minHeight", "0");
                this._ejDialog.css("height", (this._ejDialog.height() - this.contentDiv.height()));
                this.contentDiv.hide();
                _target.parent().hide();
                this._dialogTitlebar.find(".e-maximize").removeClass("e-maximize").addClass("e-restore");
                           
            }
        },
		/**
         * Section handles when pinicon is clicked
		 * @private
         */	
        _pinClick: function (e) {
            var _target = $(e.target);
            if (_target.hasClass("e-unpin")) {
                this.dialogPin = true;
                _target.removeClass("e-unpin").addClass("e-pin");
            }
            else if (_target.hasClass("e-pin")) {
                this.dialogPin = false;
                _target.removeClass("e-pin").addClass("e-unpin");
            }
        },
		/**
         * to restore dialog control
		 * @private
         */	
        _restoreDialog: function () {
            this.dialogPin = false;
            this.contentDiv.show();
            this._ejDialog.css("position", "absolute").css("bottom", "");
            this._setSize();
            this._dialogPosition();
            this._reRenderScroller();
            this._dialogTitlebar.find(".e-minimize").parent().show();
        },
		/**
         * Section handles  click event
		 * @private
         */	
        _clickHandler: function (e) {
            var zindex = this._dialogMaxZindex();
            if (parseInt(this._ejDialog.css("zIndex")) < zindex) {
                this._ejDialog.css({ zIndex: zindex + 1 });
            }
        },
		/**
         * Section handles keydown event
		 * @private
         */	
        _docKeyDown: function (e) {
            if (this.model.enabled) {
                if (e.keyCode) code = e.keyCode; // ie and mozilla/gecko
                else if (e.which) code = e.which; // ns4 and opera
                else code = e.charCode;
                if (this.model.closeOnEscape && code === 27) {
                    this.close(e);
                    e.preventDefault();
                }
            }
        },
		/**
         * Section handles keydown event
		 * @private
         */	
        _keyDown: function (e) {
            if (e.keyCode) code = e.keyCode; // ie and mozilla/gecko
            else if (e.which) code = e.which; // ns4 and opera
            else code = e.charCode;
            if (this.model.allowKeyboardNavigation && this.model.enabled && $(e.target).hasClass("e-dialog")) {
                if ($.inArray(code, this.keyConfigs) > -1 && this.model.allowDraggable && !this.dialogPin) {
                    this._keyPressed(code, e.ctrlKey);
                    e.preventDefault();
                }
            }
        },
		/**
         * Section handles keypress event for the dialog control
		 * @private
         */	
        _keyPressed: function (code, ctrlKey) {
            switch (code) {
                case 40:    //Down arrow
                    ctrlKey ? this._resetWidthHeight(this.model.width, this._ejDialog.height() + 3) : this._ejDialog.css("top", this._ejDialog.position().top + 3 + "px");
                    break;
                case 39:    //Right arrow
                    ctrlKey ? this._resetWidthHeight(this._ejDialog.width() + 3, this._ejDialog.height()) : this._ejDialog.css("left", this._ejDialog.position().left + 3 + "px");
                    break;
                case 38:    //Up arrow
                    ctrlKey ? this._resetWidthHeight(this._ejDialog.width() - 3, this._ejDialog.height()) : this._ejDialog.css("top", this._ejDialog.position().top - 3 + "px");
                    break;
                case 37:    //Left arrow
                    ctrlKey ? this._ejDialog.width(this._ejDialog.width() - 3) : this._ejDialog.css("left", this._ejDialog.position().left - 3 + "px");
                    break;
            }
        },
		/**
         * to set for the dialog control in percent
		 * @private
         */	
        _sizeInPercent: function () {
            if (!this._enableWindowResize()) return false;
            var parentObj = this._getParentObj();
            this._widthPercent = this._convertPixelToPercentage(parentObj.outerWidth(), this._ejDialog.outerWidth());
            this._heightPercent = this._convertPixelToPercentage(parentObj.outerHeight(), this._ejDialog.outerHeight());
            if (this._widthPercent > 100) {
                this._widthPercent = 100;
                this._ejDialog.outerWidth(parentObj.outerWidth());
                this.model.width = this._ejDialog.width();
            }
            if (this._heightPercent > 100) {
                this._heightPercent = 100;
                this._ejDialog.outerHeight(parentObj.outerHeight());
                this.model.height = this._ejDialog.height();
            }
        },
		/**
         * to get the parent of the dialog control
		 * @private
         */	
        _getParentObj: function () {
            if (!ej.isNullOrUndefined(this.model.content))
                return $(this.model.content);
            else
                return (this._ejDialog.parent()[0].nodeName == "BODY" ? $(window) : "");
        },
		/**
         * to convert the percentage value to pixels
		 * @private
         */	
        _convertPercentageToPixel: function (parent, child) {
            return Math.round((child * parent) / 100);  //round       
        },
		/**
         * to convert the pixel value to percentage
		 * @private
         */		
        _convertPixelToPercentage: function (parent, child) {
            return Math.round((child / parent) * 100); //round
        },
        //_setPosition: function () {
        //    if ((this.model.allowWindowResizing) || ((isNaN(this.model.width)&&(this.model.width.indexOf("%") > 0))||(isNaN(this.model.height)&&(this.model.height.indexOf("%") > 0)))) this._dialogPosition();
        //},
		/**
         * section handles when window is resized
		 * @private
         */
        _reSizeHandler: function () {
            var parentObj;
            this._dialogPosition();
            parentObj = this._getParentObj();
            this._ejDialog.outerWidth(this._convertPercentageToPixel(parentObj.outerWidth(), this._widthPercent));
            this._ejDialog.outerHeight(this._convertPercentageToPixel(parentObj.outerHeight(), this._heightPercent));
            this.contentDiv.width(this._ejDialog.width());
            this.element.outerWidth( this.contentDiv.width());
			this.contentDiv.height(this._ejDialog.height() - $(this._ejDialog.find("div.e-titlebar")).outerHeight());
			this.element.outerHeight(this._ejDialog.height() - $(this._ejDialog.find("div.e-titlebar")).outerHeight());
			this.scroller = this.contentDiv.ejScroller({ width: this._ejDialog.width(), height: this.element.outerHeight(), rtl: this.model.rtl });
            this.scroller = this.contentDiv.data("ejScroller");
            this.scroller.refresh();
            this._dialogPosition();
        },
		/**
         * to enable window resize
		 * @private
         */
        _enableWindowResize:function()
        {
            if (this.model.enableAutoResize || ((isNaN(this.model.width) && (this.model.width.indexOf("%") > 0)) && (isNaN(this.model.height) && (this.model.height.indexOf("%") > 0)&&(this.model.height!="auto"))))
                return true;
            else 
                return false;
        },
        _wireResizing: function () {         
            this._enableWindowResize() ? $(window).bind('resize', $.proxy(this._reSizeHandler, this)) : $(window).unbind('resize', $.proxy(this._reSizeHandler, this))
        },
        
        //-------------------- Event Wire-up -------------------------//
		/**
         * Wiring the events to dialog control		
		 * @private
         */	
        _wireEvents: function () {
            //tabs Click evnts
            this._on($(document), "keydown", this._docKeyDown);
            this._on(this._ejDialog, "keydown", this._keyDown);
            this._wireResizing();
        },

        // ------------------Client side methods-------------------------//
		/**
         * To open the dialog 
		 * @return jQuery
		 * @example 
		 * &lt;div id="dialog" title="WPF"&gt;
	     * Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	     * &lt;/div&gt;
	     * &lt;script&gt;
	* // Create Dialog control
    *  $("#dialog").ejDialog({position: { X: 300, Y: 10 }}); 
         * //initialize the dialog object
         *	var dialogObj = $("#dialog").data("ejDialog");
         *	//To open the dialog 
         *	dialogObj.open();
         * &lt;/script&gt;
         * @example 
         &lt;div id="dialog" title="WPF"&gt;
	     * Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	     * &lt;/div&gt;
	     * &lt;script&gt;
	* // Create Dialog control
   *  $("#dialog").ejDialog({position: { X: 300, Y: 10 }}); 
         * //To open the dialog 
         * $("#dialog").ejDialog("open");
         * &lt;/script&gt;
		 * @memberof ejDialog
		 * @instance
        */  
        open: function () {
            if (!this.model.enabled) return false;
            if (this._isOpen) {
                return true;
            }
            if (true == this._trigger("beforeOpen")) {
                return false;
            }
            this.element.css("display", "block");
            this._setZindex();
            this._dialogPosition();
            var proxy = this;
            this._ejDialog.fadeIn(this.model.enableAnimation?400:0, "easeOutQuad", function () {
                // Animation complete
                proxy._trigger("open");
            });
            if (this.model.enableModal == true)
                this._createOverlay();
            this._ejDialog.eq(0).focus();
            this._isOpen = true;
            return this;
        },
		/**
         * To close the dialog
		 * @return jQuery
		 * @example 
		 * &lt;div id="dialog" title="WPF"&gt;
	     * Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	     * &lt;/div&gt;
	     * &lt;script&gt; 
	     *  $("#dialog").ejDialog({position: { X: 300, Y: 10 }});
         * //initialize the dialog object
         *	var dialogObj = $("#dialog").data("ejDialog");
         *	//To close the dialog 
         *	dialogObj.close();
          * &lt;/script&gt; 
         * @example 
         * &lt;div id="dialog" title="WPF"&gt;
	     * Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	     * &lt;/div&gt;
	     * &lt;script&gt; 
	    *  $("#dialog").ejDialog({position: { X: 300, Y: 10 }}); 
         * //To close the dialog 
         * $("#dialog").ejDialog("close");
         * &lt;/script&gt; 
		 * @memberof ejDialog
		 * @instance
        */   
        close: function (event) {
            if (!this._isOpen || !this.model.enabled) {
                return true;
            }
            if (true == this._trigger("beforeClose", { event: event })) {
                return false;
            }
            this._isOpen = false;
            this.element.css("display", "none");
            var proxy = this;
            this._ejDialog.fadeOut(this.model.enableAnimation?300:0, "easeOutQuad", function () {
                // Animation complete
                proxy._trigger("close", { event: event });
            });
            if (this.model.enableModal) {
                if (this._overLay) this._overLay.remove();
            }
            return this;
        },
		/**
         * To get dialog control is opened or not
		 * @return boolean
		 * @example 
		 * &lt;div id="dialog" title="WPF"&gt;
	     * Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	     * &lt;/div&gt;
	      * &lt;script&gt;
	      *  $("#dialog").ejDialog({position: { X: 300, Y: 10 }}); 
         * //initialize the dialog object
         *	var dialogObj = $("#dialog").data("ejDialog");
         * //To get the dialog status
         *	dialogObj.isOpened();
          * &lt;/script&gt;
         * @example 
         * &lt;div id="dialog" title="WPF"&gt;
	     * Developed by Microsoft, the Windows Presentation Foundation (or WPF) is a computer-software graphical subsystem for rendering user interfaces in Windows-based applications. WPF, previously known as "Avalon", was initially released as part of .NET Framework 3.0. Rather than relying on the older GDI subsystem, WPF uses DirectX. WPF attempts to provide a consistent programming model for building applications and separates the user interface from business logic. It resembles similar XML-oriented object models, such as those implemented in XUL and SVG.
	     * &lt;/div&gt;
          * &lt;script&gt;
          *  $("#dialog").ejDialog({position: { X: 300, Y: 10 }}); 
         * //To get the dialog status
         * $("#dialog").ejDialog("isOpened");
          * &lt;/script&gt;
		 * @memberof ejDialog
		 * @instance
        */   
        isOpened: function () {
            return this._isOpen;
        }
    });

})(jQuery, Syncfusion);;