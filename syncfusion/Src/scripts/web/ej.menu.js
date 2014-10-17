/*!
*  filename: ej.menu.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Menu control.
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
       * @class ejMenu
       * @requires jQuery
       * @requires jquery.easing.1.3.min.js
       * @requires ej.core.js
       * @requires ej.data.js
       * @requires ej.menu.js
       * @requires ej.checkbox.js
       * @classdesc Custom Design for Menu control.
       * @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
       * // Create Menu
       * $("#menu").ejMenu({height: 22}); 	
       * &lt;/script&gt;
       */

    ej.widget("ejMenu", "ej.Menu", {
	
        // widget element will be automatically set in this
        element: null,

        // user defined model will be automatically set in this
        model: null,
        validTags: ["ul"],
        _setFirst: false,
        _rootCss: "e-menu",

        // default model
        defaults: {
            /**		
                * Specifies the height of the root menu.
                * @default "auto"
                * @type {string | number}
                * @example 
                * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
                
               * //To set height API value during initialization  
                *   $("#menu").ejMenu({ height: 22 }); 
                * &lt;/script&gt; 
                 * @memberof ejMenu
                * @instance
                */
            height: "",
           /**		
			* Specifies the width of the main menu.
			* @default auto
			* @type {string | number}
			* @example 
			* &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;	
			* //To set width API value during initialization  
      *   //To set width API value 
      *   $("#menu").ejMenu({ width: "800px",height:"30px" });  
      * &lt;/script&gt;
			 * @memberof ejMenu
			* @instance
			*/
            width: "",
           /**		
			* To enable or disable the Animation while hover or click an menu items..See {@link AnimationType}
			* @default ej.animation.Default
			* @type {enum}
			* @example 
			* &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;	
		* //To set animationType API value during initialization  
      *   //To set animationType API value 
      *   $("#menu").ejMenu({ height:22,animationType: ej.AnimationType.Default }); 
      * &lt;/script&gt;
			 * @memberof ejMenu
			* @instance
			*/
            animationType: "default",
            /**		
			* Specifies the orientation of normal menu. Normal menu can rendered in horizontal or vertical direction by using this API. See {@link Direction}
			* @default ej.orientation.Horizontal
			* @type {string | enum}
			* @example 
			* &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;	
			* //To set orientation API value during initialization  
      *   //To set orientation API value 
      *   $("#menu").ejMenu({ height:22,orientation: ej.Orientation.Horizontal });
      * &lt;/script&gt;
			 * @memberof ejMenu
			* @instance
			*/
            orientation: ej.Orientation.Horizontal,
            /**		
			* Specifies the type of the menu. Essential JavaScript Menu consists of two type of menu, they are Normal Menu and Context Menu both Normal and Context Menu mode.See {@link MenuType}
			* @default ej.menuType.NormalMenu 
			* @type {string | enum}
			* @example 
			* &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;	
			* //To set menuType API value during initialization  
      *   //To set menuType API value 
      *   $("#menu").ejMenu({ height:22,menuType: "normalmenu" });
      * &lt;/script&gt; 
			 * @memberof ejMenu
			* @instance
			*/
            menuType: "normalmenu",
            /**		
			*Specifies the target id of context menu. On right clicking the specified contextTarget element, context menu gets shown.
			* @default null 
			* @type {string}
			* @example
			*	&lt;div id="target" class="textarea"&gt;
			*                            HTML is written in the form of HTML elements consisting of tags enclosed in angle
			*                            brackets (like
			*                            &lt;html&gt;
			*                            ),within the web page content. HTML tags most commonly come in pairs like and ,although
			*                            some tags, known as empty elements, are unpaired, for example
			*                            &lt;img&gt;. The purpose of a web browser is to read HTML documents and compose them into
			*                            visible or audible web pages. The browser does not display the HTML tags, but uses
			*                            the tags to interpret the content of the page.
			*                        &lt;/div&gt;
			*                        &lt;ul id="contextMenu"&gt;
			*                            &lt;li&gt;&lt;a&gt;Cut&lt;/a&gt;&lt;/li&gt; 
			*                            &lt;li&gt;&lt;a&gt;Copy&lt;/a&gt;&lt;/li&gt; 
			*                            &lt;li&gt;&lt;a&gt;Paste&lt;/a&gt;&lt;/li&gt; 
			*                       &lt;li class="separator"&gt;&lt;/li&gt; 
			*                            &lt;li&gt;&lt;a&gt;Comments&lt;/a&gt;&lt;/li&gt;
			*                            &lt;li&gt;&lt;a&gt;Links&lt;/a&gt;&lt;/li&gt;
			*                            &lt;li&gt;&lt;a&gt;Clear Formatting&lt;/a&gt;&lt;/li&gt;  
			*                        &lt;/ul&gt;           
			                
      * &lt;script&gt;
		
			* //To set contextMenuTarget API value during initialization  
			* 	//To set contextMenuTarget API value 
			* 	$("#contextMenu").ejMenu({menuType:ej.MenuType.ContextMenu, height:22,contextMenuTarget:"#target"});  
      * &lt;/script&gt;
			 * @memberof ejMenu
			* @instance
			*/
            contextMenuTarget: null,
            /**		
			* Specify the CSS class to Menu to achieve custom theme.
			* @default ""
			* @type {string}
			* @example 
        * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
	   * &lt;script&gt;
			* //To Set the CSS class during initialization. 			
			* 	$("#menu").ejMenu({ height:22, cssClass:'gradient-lime ' });		
			* &lt;/script&gt;
			 * @memberof ejMenu
			* @instance
			*/
            cssClass: "",
            /**		
			* Specifies the sub menu items to be show or open only on click.
			* @default false
			* @type {boolean}
			* @example 
        * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
			* //To set openOnClick API value during initialization  
			* 	//To set openOnClick API value 
			* 	$("#menu").ejMenu({ height:22,openOnClick: true });
			* &lt;/script&gt;
			 * @memberof ejMenu
			* @instance
			*/
            openOnClick: false,
            /**		
			* Specifies the sub menu popup direction.See {@link Direction}
			* @default ej.direction.Right
			* @type {string | enum}
			* @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
			* //To set subMenuDirection API value during initialization  
			* 	//To set subMenuDirection API value 
			* 	$("#menu").ejMenu({ height:22,subMenuDirection: ej.Direction.Right });
			* &lt;/script&gt;
			 * @memberof ejMenu
			* @instance
			*/
            subMenuDirection: "right",
			/**		
			* Specifies the root menu items to be aligned center in horizontal menu.
			* @default false
			* @type {boolean}
			* @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
			* //To set enableCenterAlign API value during initialization  
			* 	//To set enableCenterAlign API value 
			* 	$("#menu").ejMenu({ height:22,enableCenterAlign: true });
			* &lt;/script&gt;
			 * @memberof ejMenu
			* @instance
			*/
			enableCenterAlign: false,
            /**		
			* Specifies the main menu items arrows only to be shown if it contains child items.
			* @default true
			* @type {boolean}
			* @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
			* //To set showRooltLevelArrows API value during initialization  
			* 	//To set showRooltLevelArrows API value 
			* 	$("#menu").ejMenu({ height:22,showRooltLevelArrows: true });
			* &lt;/script&gt;
			 * @memberof ejMenu
			* @instance
			*/
            showRooltLevelArrows: true,
            /**		
			* Specifies the sub menu items arrows only to be shown if it contains child items.
			* @default true
			* @type {boolean}
			* @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
			* //To set showSubLevelArrows API value during initialization  
			* 	//To set showSubLevelArrows API value 
			* 	$("#menu").ejMenu({ height:22,showSubLevelArrows: true });
			* &lt;/script&gt;
			 * @memberof ejMenu
			* @instance
			*/
			
            showSubLevelArrows: true,
			enableAnimation: true,
             /**		
/**		
			* When this property sets to false, the menu list is displayed without any separators.
			* @default true
			* @type {boolean}
			* @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
			* //To set enableSeparator API value during initialization  
			* 	//To set enableSeparator API value 
			* 	$("#menu").ejMenu({ height:22,enableSeparator: true });
			* &lt;/script&gt;
			 * @memberof ejMenu
			* @instance
			*/
            enableSeparator: true,
           /**		
			* Enable / Disable the Menu control.
			* @default true
			* @type {boolean}
			* @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
			* //To set enabled API value during initialization  
			* 	//To set enabled API value 
			* 	$("#menu").ejMenu({ height:22,enabled: true });
			* &lt;/script&gt;
			 * @memberof ejMenu
			* @instance
			*/
            enabled: true,
             /**		
			* Fields used to bind the data source and it includes following field members to make databind easier.
			* @default null
			* @type {Object}
			* @example
      *&lt;ul id="menu"&gt;
       * &lt;script&gt; 
			* //To set fields API value during initialization  
			* 	//To set fields API value 
			* 	      $("#menu").ejMenu({ height:22,
            *                fields: { dataSource: window.menu, id: "id", parentId: "parentId", text: "text", spriteCssClass: "sprite" }
            *           });
             * &lt;/script&gt; 
			 * @memberof ejMenu
			* @instance
			*/
            fields: /** @lends ejMenu# */{
                /**		
                * It receives the child data for the inner level. 
                * @alias ejMenu#fields->child
				* @type Object
                */
                child: null,
                 /**		
                * datasource receives  Essential DataManager object and JSON object. 
                * @alias ejMenu#fields->dataSource
				* @type Object
                */
                dataSource: null,
                /**		
				* It receives query to retrieve data from the table (query is same as SQL).  
				* @alias ejMenu#fields->query
				* @type Object
				*/
                query: null,
                /**	
                * It receives table name to execute query on the corresponding table  
				* @alias ejMenu#fields->tableName
				* @type string
				*/
                tableName: null,
                /**	
                * Specifies the id to menu items list
               	* @alias ejMenu#fields->id
				* @type string
				*/
                id:"id",
                /**	
                * Specifies the parent id of the table.
              	* @alias ejMenu#fields->parentId
				* @type string
                */
                parentId:"parentId",
                /**	
               * Specifies the text of menu items list.
             	* @alias ejMenu#fields->text
				* @type string
				*/
                text:"text",
                /**	
                * Specifies the sprite CSS class to “li” item list
              	* @alias ejMenu#fields->spriteCssClass
				* @type string
				*/
                spriteCssClass:"spriteCssClass",
                /**	
                * Specifies the link attribute to “a” tag in item list.
             	* @alias ejMenu#fields->linkAttribute
				* @type string
				*/
                linkAttribute:"linkAttribute",
                /**	
                * Specifies the image attribute to “img” tag inside items list. 
             	* @alias ejMenu#fields->imageAttribute
				* @type string
				*/
                imageAttribute:"imageAttribute",
                /**	
                * Specifies the html attributes to “li” item list.
                * @alias ejMenu#fields->htmlAttribute
				* @type string
				*/
                htmlAttribute:"htmlAttribute",
                /**	
                * Specifies the image URL to “img” tag inside item list.
              	* @alias ejMenu#fields->imageUrl
				* @type string
				*/
                imageUrl:"imageUrl",
            },
            /**		
			* Specifies the menu items to be displayed in right to left direction.
			* @default false
			* @type {boolean}
			* @example 
         * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
			* //To set rtl API value during initialization  
			* 	//To set rtl API value 
			* 	$("#menu").ejMenu({ height:22,enableRTL: true });
		* &lt;/script&gt;
			 * @memberof ejMenu
			* @instance
			*/
            enableRTL: false,
            /**		
			* Specifies the title to responsive menu.
			* @default "Menu"
			* @type {string}
			* @example 
         * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
			* //To set titleText API value during initialization  
			* 	//To set titleText API value 
			* 	$("#menu").ejMenu({ height:22,titleText: "Menu" });
			 * &lt;/script&gt;
			 * @memberof ejMenu
			* @instance
			*/
            titleText: "Menu",
            /**     
            * Fires before context menu gets open.
            * @event
            * @name ejMenu#beforeContextOpen 	
            * @param {Object} argument Event parameters from context menu     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the menu model
            * @param {string}  argument.type returns the name of the event
            * @param {object}  argument.target returns the target element
            * @example 
               * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
            *  //before context menu open event for menu
            *  $("#menu").ejMenu({height:22,
            *  beforeOpen: function (args) {}
            *  });   
            * &lt;/script&gt;
            * @memberof ejMenu
            * @instance
            */
            beforeOpen: null,
            /**     
            * Fires when context menu on open.
            * @event
            * @name ejMenu#contextOpen 	
            * @param {Object} argument Event parameters from menu     
            * @param {object}  argument.model returns the menu model
            * @param {string}  argument.type returns the name of the event
            * @param {object}  argument.target returns the target element
            * @example 
               * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
            *  //context menu open event for menu
            *  $("#menu").ejMenu({height:22,
            *  open: function (args) {}
            *  });   
            * &lt;/script&gt;
            * @memberof ejMenu
            * @instance
            */
            open: null,
            /**     
			 * Fire when context menu on close.
			 * @event
			 * @name ejMenu#contextClose 	
			 * @param {Object} argument Event parameters from menu     
			 * @param {object}  argument.model returns the menu model
			 * @param {string}  argument.type returns the name of the event
			 * @param {object}  argument.target returns the target element
			 * @example 
          * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
			 *  //context menu close event for menu
			 *  $("#menu").ejMenu({height:22,
             *  close: function (args) {}
			 *  });   
       * &lt;/script&gt;
			 * @memberof ejMenu
			 * @instance
			 */
            close: null,
             /**     
			 * Fires when mouse over the Menu items.
			 * @event
			 * @name ejMenu#mouseover 	
			 * @param {Object}  argument Event parameters from menu     
			 * @param {object}  argument.model returns the menu model
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument.text returns clicked menu item text
             * @param {object}  argument.element returns clicked menu item element
			 * @param {object}  argument.event returns the event
			 * @example 
          * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
			 *   //mouse over event for menu
			 *  $("#menu").ejMenu({height:22,
             *  mouseover: function (args) {}
			 *  });   
       * &lt;/script&gt;
			 * @memberof ejMenu
			 * @instance
			 */
            mouseover: null,
            /**     
            * Fires when mouse out from menu items.
            * @event
            * @name ejMenu#mouseout 	
            * @param {Object}  argument Event parameters from menu     
            * @param {object}  argument.model returns the menu model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.text returns clicked menu item text
            * @param {object}  argument.element returns clicked menu item element
			* @param {object}  argument.event returns the event
            * @example
               * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;  
            *  //mouse out event for menu
            *  $("#menu").ejMenu({height:22,
            *  mouseout: function (args) {}
            *  });   
            * &lt;/script&gt;
            * @memberof ejMenu
            * @instance
            */
            mouseout: null,
            /**     
            * Fires when mouse click on menu items.
            * @event
            * @name ejMenu#click 	
            * @param {Object}  argument Event parameters from menu     
            * @param {object}  argument.model returns the menu model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.text returns clicked menu item text
            * @param {object}  argument.element returns clicked menu item element
			* @param {object}  argument.event returns the event
            * @param {number}  argument.selectedItem returns the selected item
            * @example 
               * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
            *  //click event for menu
            *  $("#menu").ejMenu({height:22,
            *  click: function (args){}
            *  });   
            * &lt;/script&gt;
            * @memberof ejMenu
            * @instance
            */
            click: null,
           /**     
            * Fires when key down on menu items.
            * @event
            * @name ejMenu#keydown 	
            * @param {Object}  argument Event parameters from menu     
            * @param {object}  argument.model returns the menu model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.menuText returns clicked menu item text
            * @param {object}  argument.element returns clicked menu item element
            * @param {object}  argument.event returns the event
            * @example 
               * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
            *  //keydown event for menu
            *  $("#menu").ejMenu({height:22,
            *  keydown: function (args){}
            *  });  
            * &lt;/script&gt; 
            * @memberof ejMenu
            * @instance
            */
            keydown: null,
			/**     
            * Fires to create menu items.
            * @event
            * @name ejMenu#create  
            * @param {Object}  argument Event parameters from menu     
            * @param {object}  argument.model returns the menu model
            * @param {string}  argument.type returns the name of the event           
            * @example 
               * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
            *  //Create event for menu
            *  $("#menu").ejMenu({height:22,
            *  create: function (args){}
            *  });   
            * &lt;/script&gt;
            * @memberof ejMenu
            * @instance
            */
            create: null,
			 /**     
            * Fires to destroy menu items.
            * @event
            * @name ejMenu#destroy 
            * @param {Object}  argument Event parameters from menu     
            * @param {object}  argument.model returns the menu model
            * @param {string}  argument.type returns the name of the event            
            * @example 
               * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt; 
            *  //Destroy event for menu
            *  $("#menu").ejMenu({height:22,
            *  destroy: function (args){}
            *  }); 
            * &lt;/script&gt;  
            * @memberof ejMenu
            * @instance
            */
            destroy: null
        },
        /**
        * Specify the data types for default properties 
        * @private
        */
        dataTypes: {
            animationType:"enum",
            cssClass: "string",
            titleText:"string",
            openOnClick: "boolean",
            enabled: "boolean",
            enableCenterAlign: "boolean",
            showArrow: "boolean",
            showRooltLevelArrows: "boolean",
            showSubLevelArrows: "boolean",
            enableSeparator: "boolean",
            enableRTL: "boolean",
            enableAnimation: "boolean",
            fields: {
                dataSource: "data",
                query: "data",
                child: "data"
            }
        },
        
        /**
        * To configure the properties at runtime using SetModel		
        * @private
        */
        _setModel: function (jsondata) {
            if (!(this.model.enabled) && ej.isNullOrUndefined(jsondata["enabled"])) return false;
            for (var key in jsondata) {
                switch (key) {
                    case "menuType":
                        this.model.menuType = jsondata[key];
                        this.element.removeClass("e-menu " + this.model.cssClass);
                        this._renderControl();
                        if (jsondata[key] == "contextmenu") this._contextMenuEvents();
                        break;
                    case "fields":
                        this.element.empty().insertBefore(this.wrapper);
                        this.wrapper.remove();
                        $.extend(this.model.fields, jsondata[key]);
                        this._intializeData();
                        break;
                    case "orientation": this._setOrientation(jsondata[key]); break;
                    case "showTopLevelArrow": this._addArrow(jsondata[key], this.model.showBottomLevelArrow); break;
                    case "showBottomLevelArrow": this._addArrow(this.model.showRooltLevelArrows, jsondata[key]); break;
                    case "enableSeparator": this._setSeparator(jsondata[key]); break;
                    case "height": this._setHeight(jsondata[key]); break;
                    case "width": this._setWidth(jsondata[key]); break;
                    case "cssClass": this._setSkin(jsondata[key]); break;
                    case "enableRTL": this._setRTL(jsondata[key]); break;
                    case "enableCenterAlign": this._centerAlign(jsondata[key]); break;
                    case "enabled": this.model.enabled = jsondata[key]; this._controlStatus(jsondata[key]); break;
                    case "animationType":
                        this._setAnimation(jsondata[key]);
                        break;
					case "enableAnimation":
						this.model.enableAnimation=options[key];
						break;
						
					
                }
            }
        },      
        // all events bound using this._on will be unbind automatically
        _destroy: function () {
            /// <summary>This function is  used to destroy the Menu Object</summary>
            this._cloneElement.insertBefore(this.element);
            this._cloneElement.removeClass('e-menu');
            this.element.remove();
        },
        /**
       * Create the Menu widget
       * @private
       */
        // constructor function
        _init: function () {
            /// <summary>This function is  used to Initialize the Menu Object</summary>
            this.element.css("visibility", "hidden");
            this._cloneElement = this.element.clone();
            this._setValues();
            this._intializeData();
            this.element.css("visibility", "visible");
        },

        //-------------------------Private Methods---------------------------------------------    
        /**
       * To configure the property values
       * @private
       */
        _setValues: function () {
            this._mouseOver = true;
            this._hoverOpen = true;
            this._hoverClose = true;
            this._isMenuOpen = false;
            this._hideSpeed = 100;
            this._showSpeed = 100;
            this._isSubMenuOpen = false;
            this._isContextMenuOpen = false;
            this._disabledMenuItems = new Array();
            this._delayMenuHover = 0;
            this._delaySubMenuHover = 0;
            this._delaySubMenuShow = 0;
            this._preventContextOpen = true;
            this._setAnimation(this.model.animationType);
        },
        _intializeData: function () {
            if (!ej.isNullOrUndefined(this.model.fields) && this.model.fields["dataSource"] != null) {
                this._generateTemplate(this.model.fields["dataSource"]);
                this._renderMenu();
            }
            else {
                this._renderMenu();
                this._wireEvents("_on");
            }
        },
        _renderMenu: function () {
            this._renderControl();
            this._addArrow(this.model.showRooltLevelArrows, this.model.showSubLevelArrows);
            this._intializeMenu();
        },
        /**
        * Render Section For Different Types Menu		
        * @private
        */
        _renderControl: function () {
            /// <summary>This function is  used to Render the Menu Object</summary>
            var label, checkBox, checkObj, list, spanlist, i;
            this.wrapper = ej.buildTag("div.e-menu-wrap");
            if ((this.model.menuType != ej.MenuType.ContextMenu) && (this.model.orientation != "vertical")) {
                this.resWrap = ej.buildTag('span.e-menu-res-wrap');
                this.inResWrap = ej.buildTag('span.e-in-wrap e-box e-menu-res-in-wrap');
                this.label = ej.buildTag('span.e-res-title', this.model.titleText);
                this.check = ej.buildTag('span.e-check-wrap e-icon');
                this.checkBox = ej.buildTag('input#responsive.e-res-icon', '', {}, { type: 'checkbox' });
                this.wrapper.append(this.resWrap)
                this.resWrap.append(this.inResWrap);
                this.inResWrap.append(this.label).append(this.check);
                this.check.append(this.checkBox);
            }
            if (this.model.menuType != ej.MenuType.ContextMenu) {
                this.wrapper.insertBefore(this.element);
                this.wrapper.append(this.element);
                if (this.checkBox != null) {
                    this.checkBox.ejCheckBox({ size: "medium", change: this._oncheck });

                }
            }
            this.element.addClass("e-menu e-widget").attr({ "role": "menu","tabindex": 0});
            if (this.model.enableRTL) this._setRTL(this.model.enableRTL);
            if (this.model.menuType == "normalmenu") {
                this.model.orientation == "horizontal" ? this.element.addClass(this.model.cssClass + " e-horizontal") : this.element.addClass(this.model.cssClass + " e-vertical");
            }
            //For ContextMenu Mode
            else this._contextMenu_Template();
            //Adding arrows to items with sub items
            this.element.find('li:has("> ul")').find('> a,> span').addClass('aschild');
            this.element.find('>li').addClass('e-list').attr({ "role": "menuitem"});
            list = this.element.find('.e-list a.aschild');
            spanlist = this.element.find('.e-list span.aschild');
            for (i = 0; i < list.length; i++) {
                $(list[i]).siblings().attr({ "aria-hidden": true });
                $(list[i]).parent().attr({ "aria-haspopup": true, "role": "menu"});
                $(list[i]).siblings('ul').children('li').addClass('e-list').attr("role", "menuitem");
            }
            for (i = 0; i < spanlist.length; i++) {
                $(spanlist[i]).siblings().attr({ "aria-hidden": true });
                $(spanlist[i]).parent().attr({ "aria-haspopup": true, "role": "menu"});
                $(spanlist[i]).siblings('ul').children('li').addClass('e-list').attr("role", "menuitem");
            }
            if (this.model.enableCenterAlign) this._centerAlign(this.model.enableCenterAlign);
            if (this.model.enableSeparator) this._setSeparator(true);
            this._controlStatus(this.model.enabled);
        },
        /**
        * Wiring the Events to Responsive Icon 	
        * @private
        */
        _oncheck: function (e) {
            var obj = this.element.parents('.e-menu-wrap').children('.e-menu');
            e.isChecked ? obj.removeClass('e-res-hide').addClass('e-res-show') : obj.removeClass('e-res-show').addClass('e-res-hide');
        },
        /**
        * Render Section For Menu through Remote Data and DataSource	
        * @private
        */
        _generateTemplate: function (data) {
            var proxy = this, queryPromise;
            if (data instanceof ej.DataManager) {
                queryPromise = data.executeQuery(this._columnToSelect(this.model.fields));
                queryPromise.done(function (e) {
					proxy._odataFlag = true;
                    proxy._generateItemTemplate(e.result);
                    proxy._wireEvents("_on");
                });
            } else {
				proxy._odataFlag = false;
                this._generateItemTemplate(proxy.model.fields['dataSource']);
                this._wireEvents("_on");
            }
        },
        /**
        * Render Section For Menu through DataSource		
        * @private
        */
        _generateItemTemplate: function (items) {
            for (var i = 0; i < items.length; i++) {
                if ((items[i][this.model.fields.parentId] == null) || (items[i][this.model.fields.parentId] == 0)) {
                    var subItem = this._menuTemplate(items[i], items, this.model.fields);
                    this.element.append(subItem);
                }
            }
        },
        /**
      * Render Section For Menu template		
      * @private
      */
        _menuTemplate: function (item, tableData, mapper) {
            var liTag, aTag, imgTag, spanTag;
            liTag = $(document.createElement('li'));
            liTag.attr("class", 'e-list');
            if (item[mapper.htmlAttribute]) this._setAttributes(item[mapper.htmlAttribute], liTag);

            if (item[mapper.id]) {
                aTag = $(document.createElement('a'));                
                if (item[mapper.imageUrl] && item[mapper.imageUrl] != "") {
                    imgTag = $(document.createElement('img'));
                    imgTag.attr('src', item[mapper.imageUrl]);
                    if (item[mapper.imageAttribute]) this._setAttributes(item[mapper.imageAttribute], imgTag);
                    aTag.append(imgTag);
                }
                else if (item[mapper.spriteCssClass] && item[mapper.spriteCssClass] != "") {
                    spanTag = $(document.createElement('span'));
                    spanTag.addClass(item[mapper.spriteCssClass]);
                    aTag.append(spanTag);
                }
                aTag.append(item[mapper.text]);
                if (item[mapper.linkAttribute])
                    aTag.attr('href', item[mapper.linkAttribute]);
                else aTag.attr('href', "#");
                liTag.append(aTag);
            }
            if (item[mapper.id]) {
                liTag.prop("id", item[mapper.id]);
            }
            if (!ej.isNullOrUndefined(mapper["child"])) {
                this._odataFlag = true;
                if (mapper["child"]["dataSource"] instanceof ej.DataManager) {
                    var proxy = this, queryManager = ej.Query();
                    queryManager = this._columnToSelect(mapper["child"]);
                    queryManager.where(mapper["child"]["parentId"], ej.FilterOperators.equal, item[mapper.id]);
                    var queryPromise = mapper["child"]["dataSource"].executeQuery(queryManager);
                    queryPromise.done(function (e) {
                        var childItems = e.result;
                        if (childItems && childItems.length > 0) {
                            var ul = $(document.createElement('ul'));
                            for (var i = 0; i < childItems.length; i++) {
                                var liItem = proxy._menuTemplate(childItems[i], mapper["child"]["dataSource"], mapper["child"]);
                                ul.append(liItem);
                            }
                            liTag.append(ul);
                            $(liTag).children('a').addClass('aschild');
                            if ($(liTag).parent().hasClass('e-menu') &&(proxy.model.showRooltLevelArrows))                           
                                    $(liTag).children('a.aschild').append($('<span>').addClass("e-icon e-arrows")).addClass("e-arrow-space");
                            else if(proxy.model.showSubLevelArrows) 
                               $(liTag).children('a.aschild').append($('<span>').addClass("e-icon e-arrows")).addClass("e-arrow-space");    
                        }
                    });   
                }
                else {
                    var childItems = ej.DataManager(mapper["child"]["dataSource"]).executeLocal(ej.Query().where(mapper["child"]["parentId"], ej.FilterOperators.equal, item[mapper.id]));
                    if (childItems && childItems.length > 0) {
                        var ul = $(document.createElement('ul'));
                        for (var i = 0; i < childItems.length; i++) {
                            var liItem = this._menuTemplate(childItems[i], mapper["child"]["dataSource"], mapper["child"]);
                            ul.append(liItem);
                        }
                        liTag.append(ul);
                    }
                }
            }
            else if (!this._odataFlag) {
                var childItems = ej.DataManager(mapper["dataSource"]).executeLocal(ej.Query().where(mapper["parentId"], ej.FilterOperators.equal, item[mapper.id]));
                if (childItems && childItems.length > 0) {
                    var ul = ej.buildTag('ul');
                    for (var i = 0; i < childItems.length; i++) {
                        var liItem = this._menuTemplate(childItems[i], mapper["dataSource"], mapper);
                        ul.append(liItem);
                    }
                    liTag.append(ul);
                }
            }
            return liTag;
        },
        /**
        * To configure the Attributes of Menu items
        * @private
        */
        _setAttributes: function (data, element) {
            for (var key in data) {
				if(key == "class")
					element.addClass(data[key]);
				else
                	element.attr(key, data[key]);
            }
        },
        /**
        * To configure the Top and Bottom Level Arrows	
        * @private
        */
        _addArrow: function (topArrows, bottomArrows) {
            if (topArrows)
                this.element.find('>li.e-list:has("> ul")').children('a,span').append($('<span>').addClass("e-icon e-arrows")).addClass("e-arrow-space");
            else {
                this.element.find('>li.e-list:has("> ul")').children('a,span').removeClass("e-arrow-space").children('span.e-icon').remove();
            }

            if (bottomArrows)
                this.element.find('>li.e-list > ul li.e-list:has(>ul)').children('a,span').append($('<span>').addClass("e-icon e-arrows")).addClass("e-arrow-space");
            else {
                this.element.find('>li.e-list > ul li.e-list:has(>ul)').children('a,span').removeClass("e-arrow-space").children('span.e-icon').remove();
            }

        },
        /**
         * To initialize the Menu		
		 * @private
         */
        _intializeMenu: function () {
            if (this.model.height != 0) this._setHeight(this.model.height);
            if (this.model.width != 0) this._setWidth(this.model.width);
            if (this.model.menuType == "contextmenu")
                this.model.openOnClick = false;
            if (this.model.openOnClick) {
                this._hoverOpen = false;
                this._hoverClose = false;
            }
        },
        /**
        * To configure the Orientation of Menu	
        * @private
		*/
        _setOrientation: function (val) {
            if (val == "horizontal") {
                this.element.removeClass("e-vertical e-horizontal").addClass("e-horizontal");
            } else {
                this.element.removeClass("e-horizontal e-vertical").addClass("e-vertical");
            }
        },
        /**
        * To configure the height		
        * @private
        */
        _setHeight: function (value) {
            this.element.height(value);
        },
        /**
        * To configure the width		
        * @private
        */
        _setWidth: function (value) {
            this.element.width(value);
        },
        /**
        * To enable or disable the Right to Left behaviour 			
        * @private
        */
        _setRTL: function (isRTL) {
            if (isRTL) {
                this.element.removeClass("e-rtl").addClass("e-rtl");
                this.model.subMenuDirection = "left";
            } else {
                this.element.removeClass("e-rtl");
                this.model.subMenuDirection = "right";
            }
        },
        /**
        * To enable or disable the AnimationType while Hover or Click an Menu items		
        * @private
        */
        _setAnimation: function (value) {
            value === "none" ? (this._showAnim = "none", this._hideAnim = "none") : (this._showAnim = "slideDown", this._hideAnim = "slideUp");
        },
        /**
        * To configure the control status	
        * @private
        */
        _controlStatus: function (value) {
            //disable status
            value != true ? this.disable() : this.enable();
        },
        /**
        * To configure enableCenterAlign of Menu items.		
        * @private
        */
        _centerAlign: function (enableCenterAlign) {
            if (this.model.orientation == "horizontal" && enableCenterAlign)
                this.element.css('text-align', 'center');
            else if (this.model.orientation == "horizontal") this.element.css('text-align', 'inherit');
        },
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
        /**
        * To Find maximum z-index in the document	
        * @private
        */
        //Gets the maximum z-index in the document
        _max_zindex: function () {
            var parents = this.element.parents(), bodyEle, maxZ;
            bodyEle = $('body').children(), index = bodyEle.index(this.popup);
            bodyEle.splice(index, 1);
            $(bodyEle).each(function (i, ele) { parents.push(ele); });

            if (this.model.menuType == "contextmenu") {
                maxZ = Math.max.apply(null, $.map($('body *'), function (e, n) {
                    if ($(e).css('position') != 'static')
                        return parseInt($(e).css('z-index')) || 1;
                }));
            }
            else {
                 maxZ = Math.max.apply(maxZ, $.map(parents, function (e, n) {
                    if ($(e).css('position') != 'static') return parseInt($(e).css('z-index')) || 1;
                }));
            }
            if (!maxZ || maxZ < 10000) maxZ = 10000;
            else maxZ += 1;
            return maxZ;

        },

        _recursiveFunction: function (items, menuText) {
            var context = this;
            var isFound = false;
            $.each(items, function (key, value) {
                if (value.Text == menuText) {
                    context.selectedItem = value;
                    isFound = true;
                    return false;
                }
                else if (value.ChildItems != null) {
                    context._recursiveFunction(value.ChildItems, menuText);
                }
                if (isFound)
                    return false;
            });
        },
        /**
        * Render section for Context Menu Template	
        * @private
        */
        _contextMenu_Template: function () {
            var oldWrapper = $(".e-menu-wrap #"+this.element.context.id).get(0);
            if (oldWrapper)
                $(oldWrapper.parentElement).remove();
            this.model.orientation = "vertical";
            this._hideAnimation(this.element, this._hideAnim);
            this.element.addClass(this.model.cssClass + " e-context");
            $("body").append(this.element);
            this.wrapper.insertBefore(this.element);
            this.wrapper.append(this.element);
        },
        /**
        * To close currently visible Menu items	
        * @private
        */
        _closeMenu: function () {
            this._hideAnimation(this.element.find('li.e-list:has("> ul")').find('> ul:visible'), this._hideAnim);
        },

        _onMenuIntent: function (element, obj, canOpen) {
            obj._delayMenuHover = window.setTimeout(function () {
                if (obj._mouseOver == true && canOpen) {
                    var showanim = obj._showAnim;
                    var hideanim = obj._hideAnim;
                    var showSpeed = obj._showSpeed;
                    var hideSpeed = obj._hideSpeed;
                    obj._show(element, showanim, hideanim);
                }
            }, this._showSpeed);
        },
        /**
         * To hide Menu items 
		 * @private
         */
        _onHide: function (element, obj, canHide) {
            obj._delaySubMenuHover = window.setTimeout(function () {
                if (obj._mouseOver == false && canHide) {
                    var id = obj._id;
                    var hideanim = obj._hideAnim;
                    var hideSpeed = obj._hideSpeed;
                    obj._closeAll();
                }

            }, obj._hideSpeed);
        },
        /**
        * To configure Sub Menu Position 
        * @private
        */
        _subMenuPos: function (element, direction) {
            var parentPos = $(this.wrapper).parent().offset();
            var pos = $(element).offset();
            var posLeft = pos.left - parentPos.left;
            var subMenu = $('ul:first', element);
            if (pos == null || pos == undefined)
                return false;
            var submenuWidth = subMenu.outerWidth();
            var left = document.documentElement.clientWidth + $(document).scrollLeft();
            if (this.model.menuType == "normalmenu") {
                if ($(element.parentNode).is(this.element)) {
                    if (this.model.orientation == "horizontal")
                        subMenu.css("top", $(element).outerHeight() + "px");
                    else if (direction == "left" && posLeft > submenuWidth)
                        subMenu.css("left", -(submenuWidth + 4) + "px");
                } else if (direction == "left" && posLeft > submenuWidth) {
                    subMenu.css("left", -(submenuWidth + 4) + "px");
                }
            }
            else {
                left -= (pos.left + (2 * submenuWidth) + 4);
                if (left < 0) {
                    var menuLeftPos = (submenuWidth == null) ? "-206.5px" : "-" + (submenuWidth + 5) + "px";
                    subMenu.css("left", menuLeftPos);
                }
                else {
                    if (subMenu.parent('li.e-list').parent('ul').width() && direction == "right") {
                        subMenu.css("left", (subMenu.parent('li.e-list').parent('ul').width() + 4) + "px");
                    }
                    else if (pos.left > submenuWidth)
                        subMenu.css("left", -(submenuWidth + 4) + "px");
                }
            }
        },

        /**
        * To configure the custom theme for Menu using cssClass property		
        * @private
        */
        _setSkin: function (skin) {
            if (this.model.menuType == "normalmenu") {
                if (this.model.orientation == "horizontal") {
                    this.element.removeClass(this.model.cssClass + " e-horizontal");
                    this.element.addClass(skin + " e-horizontal");
                } else {
                    this.element.removeClass(this.model.cssClass + " e-vertical");
                    this.element.addClass(skin + " e-vertical");
                }

            } else {
                this.element.removeClass(this.model.cssClass + " e-context");
                this.element.addClass(skin + " e-context");
            }
        },
        /**
        * To configure seperator for Menu items		
        * @private
        */
        _setSeparator: function (separator) {
            if (separator)
                this.element.addClass("e-separator");
            else this.element.removeClass("e-separator");
        },
        /**
         * Wiring the events to Context Menu 	
		 * @private
         */
        _contextMenuEvents: function (action) {
            this[action]($(this.model.contextMenuTarget), "mousedown taphold", this._ContextMenuHandler);
            this [action](this.element, "contextmenu", this._onDefaultPreventer);
            this[action]($(this.model.contextMenuTarget), "contextmenu", this._onDefaultPreventer);
            this [action]($(document), "click", this._onContextClose);
            this[action]($(document), "keydown", this._onKeyDownHandler);
        },
        /**
        * To show the Menu items		
        * @private
        */
        _show: function (element, showanim, hideanim) {
            var siblingElement;
            var sibling = $('> ul', element);
            sibling.attr({ "aria-hidden": false });
            this._hideAnimation($(element).siblings().find(' > ul:visible'), hideanim);
            if (!($.inArray(this._disabledMenuItems, element) > -1)) {
                if (sibling.css('display') != "none") {
                    siblingElement = this.model.openOnClick ? $(sibling) : sibling.children().find('> ul');
                    this._hideAnimation(siblingElement, hideanim);
                }
                else $('> ul', element).children().find('> ul').hide();
                this._subMenuPos(element, this.model.subMenuDirection);
                sibling.css({ "z-index": this._max_zindex() + 1 });
                if ($('> ul', element).css('display') != 'block') 
                    this._showAnimation(sibling, showanim);
            }
        },
        /**
        * To close all visible Menu items		
        * @private
        */
        _closeAll: function () {
            this._hideAnimation(this.element.find('li.e-list:has("> ul")').find('> ul:visible'), this._hideAnim);
            this._hideAnimation(this.element.find('> ul:visible'), this._hideAnim);
        },
        /**
        * To show the Menu items with animationType		
        * @private
        */
        _showAnimation: function (element, anim) {
            switch (anim) {
                case "slideDown":
                    element.slideDown(this.model.enableAnimation?200:0, "easeOutQuad"); break;
                case "none":
                    element.css("display","block"); break;
            }
        },
        /**
        * To hide the Menu items with animationType		
        * @private
        */
        _hideAnimation: function (element, anim) {
            switch (anim) {
                case "slideUp":
                    $(element).attr({ "aria-hidden": true });
                    element.slideUp(this.model.enableAnimation?100:0, "easeOutQuad"); break;
                case "none":
                    element.css("display","none"); break;
            }
        },

        _removeValue: function (text, disableList) {
            var $browInfo = ej.browserInfo(), elementText;
            $browInfo.version === "8.0" && $browInfo.name === "msie" ? elementText = text[0].outerText : elementText = text[0].textContent;
            var count = $(disableList).length, i = 0;
            while (i <= count)
            {
                if (disableList[i] === $.trim(elementText))
                    return i;
                    i++;
            }
        },
		/**
        * To create sub level Menu items when insert a menu item dynamically	
        * @private
        */
		_createSubLevelItem:function(target,element){
			var ulTag;
			ulTag = $(document.createElement('ul'));
			ulTag.append(element);
			target.append(ulTag);
			target.attr({'role':'menu','aria-haspopup':'true'});
			this.element.find('li:has("> ul")').find('> a,>span').addClass('aschild e-arrow-space');
			this._insertArrows(ulTag);		
		},	
		/**
        * To insert arrows to Menu items when insert a menu item dynamically	
        * @private
        */
		_insertArrows:function(ulTag){
		if (this.model.showRooltLevelArrows)
                ulTag.find('>a,>span').append($('<span>').addClass("e-icon e-arrows")).addClass("e-arrow-space");
            else 
                ulTag.find('>a,>span').removeClass("e-arrow-space").find('>span.e-icon').remove();
				
            if (this.model.showSubLevelArrows)
                ulTag.parent('li.e-list:has(>ul)').children('a,span').append($('<span>').addClass("e-icon e-arrows")).addClass("e-arrow-space");
            else 
                ulTag.parent('li.e-list:has(>ul)').children('a,span').removeClass("e-arrow-space").find('>span.e-icon').remove();
		},
		/**
        * To create a Menu items when insert a menu item dynamically	
        * @private
        */
		_createMenuItem:function(item){
            var liTag, aTag, imgTag, spanTag;
            liTag = $(document.createElement('li'));
            liTag.attr({"class":'e-list',"role":"menuitem"});
            if (item["htmlAttribute"]) this._setAttributes(item["htmlAttribute"], liTag);
            if (item["text"] && item["text"] != "") {
                aTag = $(document.createElement('a'));
                if (item["imageUrl"] && item["imageUrl"] != "") {
                    imgTag = $(document.createElement('img'));
                    imgTag.attr('src', item["imageUrl"]);
                    if (item["imageAttribute"]) this._setAttributes(item["imageAttribute"], imgTag);
                    aTag.append(imgTag);
                }
                else if (item["spriteCssClass"] && item["spriteCssClass"] != "") {
                    spanTag = $(document.createElement('span'));
                    spanTag.addClass(item["spriteCssClass"]);
                    aTag.append(spanTag);
                }
                aTag.append(item["text"]);
                if (item["linkAttribute"])
                    aTag.attr('href', item["linkAttribute"]);
                else aTag.attr('href', "#");
                liTag.append(aTag);
            }
            if (item["id"]) {
                liTag.prop("id", item["id"]);
            }
            return liTag;
		},
		/**
        * To find out each the item and their target element from item collection and tatrget element collection.	
        * @private
        */
		_insertNode:function(itemCollection,targetNode,operation){
			var item=0,targetList=0,target=0,targetCollection=[];
			typeof (targetNode) ==="string" ? targetCollection.push(this.element.find(targetNode)):typeof (targetNode) ==="undefined" ?targetCollection.push("default"):targetCollection.push(targetNode);
			for(targetList=0;targetList<targetCollection.length;targetList++){
				for(target=0;target<targetCollection[targetList].length;target++)
					for(item=0;item<itemCollection.length;item++)
						this._addItem(itemCollection[item],targetCollection[targetList][target],operation);
		   }
		},
		/**
        * To insert the menu items at their respective place.
        * @private
        */
		_addItem:function(item,target,operation){
				var element,targetElement;
				this._wireEvents("_off");
		        element = this._createMenuItem(item);
				target = target === "default" ? $("#"+item["parentId"]):$(target);
				switch(operation){
				case "insert":
					targetElement= target.children('ul');
					targetElement.length != 0 ? targetElement.append(element):this._createSubLevelItem(target,element);
					break;
				case "insertBefore":
					element.insertBefore(target);
					break;
				case "insertAfter":
					element.insertAfter(target);
					break;
					}
			this._wireEvents("_on");
		},
		/**
        * To remove the root level element while all child level elements are deleted	
        * @private
        */
		_removeItem:function(item){
		  if(item.siblings('li').length == 0 ){
					item.closest("ul").siblings('a.aschild').removeClass("aschild e-arrow-space").children('span.e-icon').remove();
					!item.closest("ul").hasClass("e-menu")?item.closest("ul").remove():item.remove();}
			else
					item.remove();
		},

        //-------------------------Public Methods---------------------------------------------//
		/**
       * Insert the menu item as child of target node.
       * @alias insert
       * @return jQuery
       * @param {ArrayObject}  item  Information about Menu item.
       * @param {string | Object}  target   Selector of target node or Object of target node.
      
       * @example 
         * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
       * //initialize the menu object
       *	var menuObj = $("#menu").data("ejMenu");
       *	//To insert menu item 
       *	menuObj.insert([{
	   *          id:"More",
	   *        text:"More"
	   *		}],"#Home");
      * &lt;/script&gt;
       * @example 
         * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
       * //To insert menu item 
       * $("#menu").ejMenu("insert",[{
	   *          id:"More",
	   *        text:"More"
	   *		}],"#Home");
      * &lt;/script&gt;
       * @memberof ejMenu
       * @instance
        */
		insert:function(item,target){
			this._insertNode(item,target,"insert");
		},	
              /**
       * Insert the menu item before the target node.
       * @alias insertBefore
       * @return jQuery
       * @param {ArrayObject}  item  Information about Menu item.
       * @param {string | Object}  target   Selector of target node or Object of target node.
      
       * @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
       * //initialize the menu object
       *	var menuObj = $("#menu").data("ejMenu");
       *	//To insert menu item 
       *	menuObj.insertBefore([{
	   *          id:"More",
	   *        text:"More"
	   *		}],"#Home");
      * &lt;/script&gt;
       * @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
       * //To insert menu item 
       * $("#menu").ejMenu("insertBefore",[{
	   *          id:"More",
	   *        text:"More"
	   *		}],"#Home");
      * &lt;/script&gt;
       * @memberof ejMenu
       * @instance
        */				
		insertBefore:function(item,target){
			this._insertNode(item,target,"insertBefore");
		},
		/**
       * Insert the menu item after the target node.
       * @alias insertAfter
       * @return jQuery
       * @param {ArrayObject}  item  Information about Menu item.
       * @param {string | Object}  target   Selector of target node or Object of target node.
      
       * @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
       * //initialize the menu object
       *	var menuObj = $("#menu").data("ejMenu");
       *	//To insert menu item 
       *	menuObj.insertAfter([{
	   *          id:"More",
	   *        text:"More"
	   *		}],"#Home");
     * &lt;/script&gt;
       * @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
       * //To insert menu item 
       * $("#menu").ejMenu("insertAfter",[{
	   *          id:"More",
	   *        text:"More"
	   *		}],"#Home");
     * &lt;/script&gt;
       * @memberof ejMenu
       * @instance
        */	
		insertAfter:function(item,target){
			this._insertNode(item,target,"insertAfter");
		},
		/**
       * Remove Menu item.
       * @alias remove
       * @return jQuery
       * @param {ArrayObject | ArrayString}  target   Selector of target node or Object of target node.
      
       * @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
       * //initialize the menu object
       * var menuObj = $("#menu").data("ejMenu");
       * //To remove menu item 
       * menuObj.remove(["#Home"]);
       * &lt;/script&gt;
       * @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
       * //To remove menu item 
       * $("#menu").ejMenu("remove",["#Home"]);
       * &lt;/script&gt;
       * @memberof ejMenu
       * @instance
        */
		remove:function(targetCollection){
		var target=0,innerTarget=0;   
			 for(target=0;target<targetCollection.length;target++){
				targetCollection[target] = typeof(targetCollection[target]) === "string" ? (this.element.find(targetCollection[target])):targetCollection[target];
					for(innerTarget=0;innerTarget<targetCollection[target].length;innerTarget++)
					(targetCollection[target][innerTarget].tagName === "LI" || targetCollection[target][innerTarget].tagName === "UL")? this._removeItem($(targetCollection[target][innerTarget])):targetCollection[target][innerTarget].remove();
			}
		},	
     /**
       * Shows the Context Menu .
       * @alias showContextMenu
       * @return jQuery
       * @param {number}  locationX  x co-ordinate position of context menu. 
       * @param {number}  locationY   y co-ordinate position of context menu. 
       * @param {object}  targetElement  target element 
       * @param {object}  event name of the event
       * @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
       * //initialize the menu object
       *	var menuObj = $("#menu").data("ejMenu");
       *	//To show context menu
       *	menuObj.ShowContextMenu();
       * &lt;/script&gt;
       * @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
       * //To show context menu
       * $("#menu").ejMenu("ShowContextMenu");
       * &lt;/script&gt;
       * @memberof ejMenu
       * @instance
        */
        //Displays the context menu
        _showContextMenu: function (locationX, locationY, targetElement, e) {
            this._closeMenu();
            this._eventArgs = e;
            if ((e != undefined) && e.stopPropagation) e.stopPropagation();
            if (this._trigger("beforeOpen", { target: targetElement })) return false;
            if (this._preventContextOpen) {
                this.element.css({ "left": locationX, "top": locationY });
                this.element.css({ "z-index": this._max_zindex() + 1 });
                this._showAnimation(this.element, this._showAnim);
                this._isContextMenuOpen = true;
               
                    this._trigger("open", { target: targetElement });
            }
            return false;
        },
      /**
       * Hides the Context Menu control.
       * @alias hideContextMenu
       * @return jQuery
       * @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
       * //initialize the menu object
       *	var menuObj = $("#menu").data("ejMenu");
       *	//To hide context menu
       *	menuObj.hideContextMenu();
       * &lt;/script&gt;
       * @example 
       * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
       * //To hide context menu
       * $("#menu").ejMenu("hideContextMenu");
       * &lt;/script&gt;
       * @memberof ejMenu
       * @instance
        */
        //Hides the context Menu
        _hideContextMenu: function (e) {
            this._closeMenu();
            this.element.find(".e-mhover").removeClass("e-mhover");
            this.element.find(".e-mfocused").removeClass("e-mfocused");
            this._hideAnimation(this.element, this._hideAnim);
            this._isContextMenuOpen = false;
           
            this._trigger("close", $.extend({ events: e }, e));
        },
        /**
       * Specifies the Menu Item to be disabled by using the Menu Item Text.
       * @alias disableItem 
       * @return jQuery
	   * @param {string} itemtext  Specifies the Menu Item Text to be disabled. 
       * @example 
        * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
       * //initialize the menu object
       *	var menuObj = $("#menu").data("ejMenu");
       *	//To disable Menu item using item text
       *	menuObj.disableItem("Home");
       * &lt;/script&gt;
       * @example 
        * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
       * //To disable Menu item using item text
       * $("#menu").ejMenu("disableItem","Home");
       * &lt;/script&gt;
       * @memberof ejMenu
       * @instance
        */
        //To Disable menu item 
        disableItem: function (itemToDisable) {
           var isMenuItem = $(this.element.find('li.e-list >a ,li.e-list >span')).filter(function () { return $.trim($(this).text()) === itemToDisable; });
            if (isMenuItem.length > 0 && !($.inArray(itemToDisable, this._disabledMenuItems) > -1)) {
                isMenuItem.parent().addClass("e-disable-item").attr({ "aria-disabled": true });
                this._disabledMenuItems.push($.trim(isMenuItem.text()));
            }
        },
         /**
        * Specifies the Menu Item to be disabled by using the Menu Item Id.
		* @alias disableItembyID
		* @return jQuery
		* @param {string|number} itemid  Specifies the Menu Item id to be disabled 
		* @example 
    * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
		* //initialize the menu object
		*	var menuObj = $("#menu").data("ejMenu");
		*	//To disable Menu item using item id
		*	menuObj.disableItemByID("More");
    * &lt;/script&gt;
		* @example 
    * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
		* //To disable Menu item using item id
		* $("#menu").ejMenu("disableItemByID","More");
    * &lt;/script&gt;
		* @memberof ejMenu
		* @instance
        */
        //To disable menu item by id
        disableItemByID: function (itemId) {
            if (itemId && itemId != "") {
                var itemToDisable = this.element.find("#" + itemId) ? this.element.find("#" + itemId)[0] : undefined;
                if (itemToDisable && !($.inArray(itemToDisable, this._disabledMenuItems) > -1)) {
                    $(itemToDisable).addClass("e-disable-item").attr({ "aria-disabled": true });
                    this._disabledMenuItems.push(itemToDisable);
                }
            }
        },

       
        /**
        *Specifies the Menu Item to be enabled by using the Menu Item Text.
		* @alias enableItem
		* @return jQuery
		* @param {string} itemtext  Specifies the Menu Item Text to be enabled.
		* @example 
     * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
		* //initialize the menu object
		*	var menuObj = $("#menu").data("ejMenu");
		*	//To enable Menu item using item text
		* menuObj.disableItem("Home");
        * menuObj.disableItem("Search Jobs");
		*	menuObj.enableItem("Search Jobs");
     * &lt;/script&gt;
		* @example 
     * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22}); 
		* //To enable Menu item using item text
        * $("#menu").ejMenu("disableItem","Home");
        * $("#menu").ejMenu("disableItem","Search Jobs");
		* $("#menu").ejMenu("enableItem","Search Jobs");
     * &lt;/script&gt
		* @memberof ejMenu
		* @instance
        */
        //To enable menu item 
        enableItem: function (itemToEnable) {
            var isMenuItem = $(this.element.find('li.e-list >a ,li.e-list >span')).filter(function () { return $.trim($(this).text()) === itemToEnable; });
            if (isMenuItem.length > 0 && ($.inArray(itemToEnable, this._disabledMenuItems) > -1)) {
                isMenuItem.parent().removeClass("e-disable-item").attr({ "aria-disabled": false });
                var index = this._removeValue(isMenuItem, this._disabledMenuItems);
                this._disabledMenuItems.splice(index, 1);
            }
        },
         /**
        *Specifies the Menu Item to be enabled by using the Menu Item Id.
		* @alias enableItembyID
		* @return jQuery
		* @param {string|number} itemid  Specifies the Menu Item id to be enabled. 
		* @example 
     * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
		* //initialize the menu object
		*	var menuObj = $("#menu").data("ejMenu");
		*	//To enable Menu item using item id
		* menuObj.disable();
		*	menuObj.enableItemByID("More");
     * &lt;/script&gt;
		* @example 
     * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
		* //To enable Menu item using item id
		*  $("#menu").ejMenu("disable");
		* $("#menu").ejMenu("enableItemByID","More");
     * &lt;/script&gt;
		* @memberof ejMenu
		* @instance
        */
        //To enable menu item by id
        enableItemByID: function (itemId) {
            if (itemId && itemId != "") {
                var itemToEnable = this.element.find("#" + itemId)[0];
                if (itemToEnable && ($.inArray(itemToEnable, this._disabledMenuItems) > -1)) {
                    $(itemToEnable).removeClass("e-disable-item").attr({ "aria-disabled": false });
                    this._disabledMenuItems.pop(itemToEnable);
                }
            }
        },
       /**
        * Disables the Menu control.
		* @alias disable
		* @return jQuery
		* @example 
     * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
		* //initialize the menu object
		*	var menuObj = $("#menu").data("ejMenu");
		*	//To disable Menu control
		*	menuObj.disable();
    * &lt;/script&gt;
		* @example 
     * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
		* //To disable Menu control
		* $("#menu").ejMenu("disable");
    * &lt;/script&gt;
		* @memberof ejMenu
		* @instance
        */
        //To disable menu
        disable: function () {
            this.model.enabled = false;
            var menuItemCollection = this.element.find('>li[class!=e-separator]');
            var proxy = this;
            $.each(menuItemCollection, function (key, value) {
                $(value).addClass("e-disable-item").attr({ "aria-disabled": true });
                proxy._disabledMenuItems.push(value);
            });
        },
        /**
        * Enables the Menu control.
		* @alias enable
		* @return jQuery
		* @example 
    * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22,}); 
		* //initialize the menu object
		*	var menuObj = $("#menu").data("ejMenu");
		*	//To enable Menu control
		*	menuObj.enable();
     * &lt;/script&gt;
		* @example 
    * &lt;ul id="menu"&gt;
                      * &lt;li id="Home"&gt;&lt;a&gt;Home&lt;/a&gt;&lt;/li&gt;
                      * &lt;li&gt;&lt;a&gt;Search Jobs&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Advanced Search&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Company&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Category&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Location&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Skills&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs by Designation&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                      * &lt;/li&gt;
                      * &lt;li id="Post Resume"&gt;&lt;a&gt;Post Resume&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Job Seeker"&gt;&lt;a&gt;JobSeeker Login&lt;/a&gt;&lt;/li&gt;
                      * &lt;li id="Fast Forward"&gt;&lt;a&gt;Fast Forward&lt;/a&gt;
                         * &lt;ul&gt;
                            * &lt;li&gt;&lt;a&gt;Resume writing&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Certification&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Resume Spotlight&lt;/a&gt;&lt;/li&gt;
                            * &lt;li&gt;&lt;a&gt;Jobs4u&lt;/a&gt;&lt;/li&gt;
                         * &lt;/ul&gt;
                       * &lt;/li&gt;
                       * &lt;li id="More"&gt;&lt;a&gt;More&lt;/a&gt;
                          * &lt;ul&gt;
                             * &lt;li&gt;&lt;a&gt;Mobile&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Pay check&lt;/a&gt;&lt;/li&gt;
                             * &lt;li&gt;&lt;a&gt;Blog&lt;/a&gt;&lt;/li&gt;
                          * &lt;/ul&gt;
                        * &lt;/li&gt;
                    * &lt;/ul&gt;
   
       * <br> 
       * &lt;script&gt;
        * $("#menu").ejMenu({height:22}); 
		* //To enable Menu control
		* $("#menu").ejMenu("enable");
     * &lt;/script&gt;
		* @memberof ejMenu
		* @instance
        */
        //To enable menu
        enable: function () {
            this.model.enabled = true;
            var menuItemCollection = this.element.find('li.e-disable-item');
            $.each(menuItemCollection, function (key, value) {
                $(value).removeClass("e-disable-item").attr({ "aria-disabled": false });
            });
            this._disabledMenuItems.pop(this._disabledMenuItems);
        },

        show: function (locationX, locationY, targetElement, e) {
            /// <summary>This will set hide function of toolbar </summary>
            if (!this.model.enabled) return false;
            if (this.model.menuType == "contextmenu") 
                this._showContextMenu(locationX, locationY, targetElement, e);
              else
                this.element.css("display","block");
        },

        hide: function (e) {
            /// <summary>This will set hide function of toolbar </summary>
            if (!this.model.enabled) return false;
            if (this.model.menuType == "contextmenu")
                this._hideContextMenu(e);
            else
            {
                this._closeMenu();
                this.element.css("display", "none");
            }
        },
        
        //--------- ---------------------------------------------------//
        /**
        * Wiring the events to menu control		
        * @private
        */
        /* Register all the events at initialize*/
        _wireEvents: function (action) {
            this [action](this.element.find("li.e-list"), "mouseout", this._mouseOutHandler);
            this [action](this.element.find("li.e-list"), "mouseover", this._mouseOverHandler);
            this [action](this.element.find("li.e-list"), "click", this._onClickHandler);    
            this [action](this.element, "keydown", this._onKeyDownHandler);
            this [action]($(document), "keydown", this._onDocumentKeyDown);
            this [action](this.element, "focus", this._OnFocusHandler);
            this [action](this.element, "blur", this._OnFocusOutHandler);
            if (this.model.menuType == "contextmenu" && $(this.model.contextMenuTarget)[0] != null) {
                this._contextMenuEvents(action);
            }
            else if (this.model.openOnClick) {
                this [action]($(document), "click", this._onDocumentClick);
            }

        },

        //--------------------------------Handlers--------------------------

        /**
         * Section to track the keydown event on Document		
		 * @private
         */
        _onDocumentKeyDown: function () {
            this._isFocused = true;
        },
        /**
         * Section to track the mouse over event		
		 * @private
         */
        // handles the Mouseover event
        _mouseOverHandler: function (event) {
            var element,itemId="";
            this.element.find(".e-mhover").removeClass("e-mhover e-mfocused");
			event.currentTarget= event.target.parentNode;
            if (this.model.menuType == "contextmenu")
                $(event.currentTarget).addClass("e-mhover e-mfocused");
            if ($(event.currentTarget).hasClass('e-disable-item'))
                event.preventDefault();
            else {
                if (event.stopPropagation)
                    event.stopPropagation();
                if (typeof (this._delaySubMenuHover) !== 'undefined') {
                    clearTimeout(this._delaySubMenuHover);
                }
                if (typeof (this._delaySubMenuHover) !== 'undefined') {
                    clearTimeout(this._delayMenuHover);
                }
                this._mouseOver = true;
                this._isMenuOpen = true;
                if ($(event.currentTarget.parentNode.parentNode).is(this.element)) {
                    this._isSubMenuOpen = false;
                }
                else {
                    this._isSubMenuOpen = true;
                }
                if (event.currentTarget.nodeName == "LI" && !$(event.currentTarget).hasClass('e-separator'))
                    element = event.currentTarget;
                else if (event.currentTarget.parentNode) {
                    if (event.currentTarget.parentNode.nodeName == "LI" && !$(event.currentTarget.parentNode).hasClass('e-separator'))
                        element = event.currentTarget.parentNode;
                    else
                        return false;
                }
                else {
                    event.preventDefault();
                    return false;
                }
                this._onMenuIntent(element, this, this._hoverOpen);
                if (!($.inArray(element, this._disabledMenuItems) > -1)) {
                    var menuText = $(element).children('a,span').text();
					itemId = !ej.isNullOrUndefined(element) ? $(element)[0].id:"";
                    var eventArgs = { "text": menuText, "element": element, "event": event ,"ID":itemId};

                    this._trigger("mouseover", $.extend({ events: eventArgs }, eventArgs));
                }
            }
        },
        /**
        * Section to track the mouse out event		
        * @private
        */
        // handles the Mouseout event
        _mouseOutHandler: function (event) {
            var element,itemId = "";
            if (this.model.menuType == "contextmenu")
                $(event.currentTarget).removeClass("e-mhover e-mfocused");
            if ($(event.currentTarget).hasClass('e-disable-item')) 
                event.preventDefault();
            else {
                if (event.stopPropagation)
                    event.stopPropagation();
                if (typeof (this._delaySubMenuHover) !== 'undefined') {
                    clearTimeout(this._delaySubMenuHover);
                }
                if (typeof (this._delaySubMenuHover) !== 'undefined') {
                    clearTimeout(this._delayMenuHover);
                }
                this._mouseOver = false;
                this._isMenuOpen = false;

                if (event.currentTarget.nodeName == "LI" && !$(event.currentTarget).hasClass('e-separator'))
                    element = event.currentTarget;
                else if (event.currentTarget.parentNode) {
                    if (event.currentTarget.parentNode.nodeName == "LI" && !$(event.currentTarget.parentNode).hasClass('e-separator'))
                        element = event.currentTarget.parentNode;
                    else
                        return false;
                }
                else {
                    event.preventDefault();
                    return false;
                }
                this._onHide(element, this, this._hoverClose);
                if (!($.inArray(element, this._disabledMenuItems) > -1)) {
                    var menuText = $(element).children('a,span').text();		
					itemId = !ej.isNullOrUndefined(element) ? $(element)[0].id:"";
                    var eventArgs = {  "text": menuText, "element": element, "event": event,"ID":itemId };
                   
                    this._trigger("mouseout", $.extend({ events: eventArgs }, eventArgs));
                }
            }
        },
        /**
         * Section For handle click action.
		 * @private
         */
        _onClickHandler: function (event) {
            event.stopPropagation();
            var element,itemId="";
            this._isFocused = false;
            var openOnClickStart = false;
            if (event.target.nodeName == "LI" && !$(event.target).hasClass('e-separator') && !$(event.target).hasClass('e-disable-item'))
                element = event.target;
            else if (event.target.parentNode && event.target.parentNode.nodeName == "LI" &&
                !$(event.target.parentNode).hasClass('e-separator') && !$(event.target.parentNode).hasClass('e-disable-item')) { //&& event.target.parentNode.parentNode.parentNode.nodeName == "LI") {
                element = event.target.parentNode;
            }
            else if ($(event.target).hasClass('e-arrows') && !$(event.target.parentNode.parentNode).hasClass('e-disable-item')) {
                element = event.target.parentNode.parentNode;
            }
            else if (event.target.nodeName == "SPAN" && !$(event.target).hasClass('e-arrows') && !$(event.target.parentNode.parentNode).hasClass('e-disable-item')) {
                element = event.target.parentNode.parentNode;
            }
            else {
                event.preventDefault();
                return false;
            }

            if (!this._hoverOpen && $(element).find(">a,>span").hasClass('aschild') ) {
                this._show(element, this._showAnim, this._hideAnim);
                this._hoverOpen = false;
                openOnClickStart = true;
            }
            if (!($.inArray(element, this._disabledMenuItems) > -1)) {
                //Check if Context Menu, then hide the context menu firing the events
                if (this.model.menuType == "contextmenu") {
                    if (this._isContextMenuOpen) {
                        this._hideAnimation(this.element, this._hideAnim);
                        this._isContextMenuOpen = false;
                        
                        this._trigger("close", $.extend({ events: event }, event));
                    }
                }
                if (!openOnClickStart) {
                    //                    if (window.navigator.appName == "Microsoft Internet Explorer")
                    //                        this._mouseOutHandler(event, true);
                    //                    else
                    if (this.element.find('li.e-list:has("> ul")').find('> a,> span').hasClass('aschild')) {
                        this._closeMenu();
                        if (this.model.openOnClick)
                            this._hoverOpen = false;
                    }
                }
                var menuText = $(element).children('a,span').text();
				
				itemId = !ej.isNullOrUndefined(element) ? $(element)[0].id:"";
                var eventArgs = { "text": menuText, "element": element, "event": event, "selectedItem": this.selectedItem,"ID":itemId };            
                this._trigger("click", $.extend({ events: eventArgs }, eventArgs));
                this.selectedItem = null;
            }
        },

        /**
       * Section to watch the key down action.		
       * @private
       */
        _onKeyDownHandler: function (e) {
            var element,itemId="", hoverElement = this.element.find(".e-mhover"), focusedElement = this.element.find(".e-mfocused");
	     // tab key
            if (e.keyCode == 9) {
                this._isFocused = false;
                this._OnFocusOutHandler();
            }
            else if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40)
                e.preventDefault();
            //key down
            if (e.keyCode == 40) {
                if (this.model.orientation != "horizontal" && this.element.find(".e-mhover").length > 0) {
                    focusedElement.removeClass("e-mfocused");
                    if (hoverElement.next().hasClass("e-separator"))
                        hoverElement.next().next().addClass("e-mfocused");
                    else if (hoverElement.is(':last-child')) {
                        hoverElement.siblings().first().addClass("e-mfocused");
                    }
                    else
                        hoverElement.next().addClass("e-mfocused");
                }
                else {
                    if (this.model.menuType == "contextmenu")
                        this.element.find("li").first().addClass("e-mfocused e-mhover");
                }
                if (this.model.orientation == "horizontal" && this.element.find(">li.e-mhover").children("ul").length > 0) {
                    this._show(hoverElement[0], this._showAnim, this._hideAnim);
                    hoverElement.removeClass("e-mhover").children("ul:first").find("li:first").addClass("e-mhover");
                }
                else {
                    if (hoverElement.is(':last-child')) {
                        hoverElement.removeClass("e-mhover").siblings().first().addClass("e-mhover");
                    }
                    else if (hoverElement.next().hasClass("e-separator"))
                        hoverElement.removeClass("e-mhover").next().next().addClass("e-mhover");
                    else {
                        hoverElement.removeClass("e-mhover").next().addClass("e-mhover");
                    }
                }
            }
            //key right
            if (e.keyCode == 39) {
                //for root level li
                if (this.model.orientation == "horizontal" && this.element.find(">li.e-list").hasClass("e-mhover")) {
				
                    if (hoverElement.is(":last-child")) {
					
                        hoverElement.removeClass("e-mhover e-mfocused");
                        if (this.element.find("li.e-list").first().hasClass("e-separator")) this.element.find("li.e-list").first().next().addClass("e-mhover e-mfocused");
                        else this.element.find("li.e-list").first().addClass("e-mhover e-mfocused");
                    }
                    else if (hoverElement.next().hasClass("e-separator")) {
					
                        hoverElement.removeClass("e-mhover e-mfocused").next().next().addClass("e-mhover e-mfocused");
                    }
                    else {
					
                        hoverElement.removeClass("e-mhover e-mfocused").next().addClass("e-mhover e-mfocused");
                    }
                }
                else if (this.element.find("li.e-mhover").children("ul").length > 0) {
                    this._show(hoverElement[0], this._showAnim, this._hideAnim);
                    hoverElement.removeClass("e-mhover").children("ul:first").find("li:first").addClass("e-mhover");
                }
                else if (hoverElement.children("ul").length <= 0) {
                    this.element.find(".e-mfocused >ul , .e-mfocused >ul li.e-list >ul").hide();
                    hoverElement.removeClass("e-mhover");
                    if (focusedElement.next().hasClass("e-separator")) {
                        focusedElement.removeClass("e-mfocused").next().next().addClass("e-mhover e-mfocused");

                    } else if (focusedElement.next().length <= 0) {
                        focusedElement.removeClass("e-mfocused").siblings().first().addClass("e-mhover e-mfocused");
                    } else focusedElement.removeClass("e-mfocused").next().addClass("e-mhover e-mfocused");
                }
            }
            //key up
            if (e.keyCode == 38) {
                if (this.model.orientation != "horizontal" && this.element.find(".e-mhover").length > 0) {
                    hoverElement.children("ul").hide();
                    focusedElement.removeClass("e-mfocused");
                    if (hoverElement.prev().hasClass("e-separator"))
                        hoverElement.prev().prev().addClass("e-mfocused");
                    else if (hoverElement.is(':first-child')) {
                        hoverElement.siblings().last().addClass("e-mfocused");
                    }
                    else
                        hoverElement.prev().addClass("e-mfocused");
                }
                else {
                    if (this.model.menuType == "contextmenu")
                    this.element.find("li").last().addClass("e-mfocused e-mhover");
                }
                if (hoverElement.is(':first-child')) {
                    hoverElement.removeClass("e-mhover e-mfocused").siblings().last().addClass("e-mhover");
                }
                else if (hoverElement.prev().hasClass("e-separator"))
                    hoverElement.removeClass("e-mhover").prev().prev().addClass("e-mhover");
                else
                    hoverElement.removeClass("e-mhover").prev().addClass("e-mhover");

            }
            //Key left
            if (e.keyCode == 37) {
                //for root level li
                if (this.model.orientation == "horizontal" && this.element.find(">li.e-list").hasClass("e-mhover")) {
                    if (hoverElement.is(":first-child")) {
                        hoverElement.removeClass("e-mhover e-mfocused");
                        if (this.element.find(">li.e-list").last().hasClass("e-separator"))
                            this.element.find(">li.e-list").last().prev().addClass("e-mhover e-mfocused");
                        else
                            this.element.find(">li.e-list").last().addClass("e-mhover e-mfocused");
                    }
                    else if (hoverElement.prev().hasClass("e-separator")) {
                        hoverElement.removeClass("e-mhover e-mfocused").prev().prev().addClass("e-mhover e-mfocused");
                    }
                    else {
                        hoverElement.removeClass("e-mhover e-mfocused").prev().addClass("e-mhover e-mfocused");
                    }
                }
                else if (this.element.find("li.e-mhover")) {
                    if (!hoverElement.parent().hasClass("e-context")) {
                    this._hideAnimation(hoverElement.parent(), this._hideAnim);
                    hoverElement.parent().closest("li.e-list").addClass("e-mhover");
                    hoverElement.removeClass("e-mhover");
                }
                }
                else {
                    this._hideAnimation(hoverElement, this._showAnim, this._hideAnim);
                    hoverElement.removeClass("e-mhover").parent().addClass("e-mhover");
                }
            }
            if (e.keyCode == 13) {
                if (this.model.menuType == "contextmenu") {
                    if (this._isContextMenuOpen && hoverElement.length > 0 && !focusedElement.hasClass("e-disable-item")) {
                        var menuText = $(hoverElement).children('a,span').text();
                        itemId = !ej.isNullOrUndefined(hoverElement) ? $(hoverElement)[0].id : "";
                        var eventArgs = { "menuId": this.element[0].id, "menuText": menuText, "selectedItem": focusedElement, "itemId": itemId };
                        if (this.model.click)
                            this._trigger("click", $.extend({ events: eventArgs }, eventArgs));
                        this.selectedItem = null;
                        this._hideContextMenu(e);
                    }
                } else {
                this.element.find(".e-mhover >a,.e-mhover >span ").focus();
                this.element.find("li.e-list").removeClass("e-mhover e-mfocused");
                this._closeAll();
            }
            }
            if (e.keyCode == 27) {
                if (this.model.menuType == "contextmenu")
                    this._hideContextMenu(e);
                else
                this._closeAll();
            }
            if (e.target.nodeName == "DIV" && $(e.target).children().is(this.element))
                element = $(e.target).children()[0];
            else if (e.target.nodeName == "LI" && !$(e.target).hasClass('e-separator'))
                element = e.target;
            else if (e.target.parentNode) {
                if (e.target.parentNode.nodeName == "LI" && !$(e.target.parentNode).hasClass('e-separator'))
                    element = e.target.parentNode;
            }
            else
                return false;
            if (!($.inArray(element, this._disabledMenuItems) > -1)) {
                var menuText = $(element).children('a,span').text();
				
			   itemId = !ej.isNullOrUndefined(element) ? $(element)[0].id:"";
                var eventArgs = { "text": menuText, "element": element, "event": e,"ID":itemId };
                
                this._trigger("keydown", $.extend({ events: eventArgs }, eventArgs));
            }

        },
        /**
         * Section For handle Focus action.
		 * @private
         */
        _OnFocusHandler: function (event) {
            if (this._isFocused) {
                this.element.find(">li:first").addClass("e-mhover e-mfocused");
            }
            else this._isFocused = false;
        },
        /**
         * Section For handle FocusOut action.
		 * @private
         */
        _OnFocusOutHandler: function () {
            if (!this._isFocused) {
                this.element.find("li.e-list").removeClass("e-mhover e-mfocused");
                this._closeAll();
            }
        },
        /**
        * Section For handle Click action on Document 
        * @private
        */
        _onDocumentClick: function (event) {
            if (!$(event.target).parents("ul.e-menu").is(this.element)) {
                this._hoverOpen = false;
                this._closeMenu();
            }
        },
        /**
        * Section For handle the context menu event 
        * @private
        */
        //handles the context menu event
        _ContextMenuHandler: function (e) {
            var isRightClick = false;
            if (e.type == "taphold")
                isRightClick = true;
            else if (e.button)
                isRightClick = (e.button == 2);
            else if (e.which)
                isRightClick = (e.which == 3); //for Opera
            var targetElement = e.target;
            if (isRightClick) {
                var evt = e;
                if (e.type == "taphold") {
                    if (e.options.type == "touchstart") evt = e.options.touches[0];
                    else evt = e.options;
                }
                var locationX = (evt.clientX + this.element.width() < $(window).width()) ? evt.pageX : evt.pageX - this.element.width();
                var locationY = (evt.clientY + this.element.height() < $(window).height()) ? evt.pageY : evt.pageY - this.element.height();
                var showSpeed = this._showSpeed;
                this._showContextMenu(locationX, locationY, targetElement, e);
            }
            else {
                if (this._isContextMenuOpen) {
                    var hideanim = this._hideAnim;
                    var hideSpeed = this._hideSpeed;
                    this._hideContextMenu(hideanim, hideSpeed, e);
                }
            }
        },
        /**
         * Section For handles preventing the default (browser's) context menu
		 * @private
         */
        //handles preventing the default (browser's) context menu
        _onDefaultPreventer: function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        },
        /**
         * Section For handles context close on document click
		 * @private
         */
        //handles context close on document click
        _onContextClose: function (e) {
            var proxy = this;
            if (this._isContextMenuOpen) {
                var isRightClick = false;
                if (e.button)
                    isRightClick = (e.button == 2);
                else if (e.which)
                    isRightClick = (e.which == 3); //for Opera

                if (!isRightClick) {
					var hideanim = this._hideAnim;
					var hideSpeed = this._hideSpeed;
					this._hideContextMenu(hideanim, hideSpeed, e);                    
                    var parentElements = $(e.target).parents();
                    $.each(parentElements, function (index, value) {
                        if (value.id == proxy._ContextTargetId) {
                            return;
                        }
                    });

                }
            }
        }

    });

    /**
	 * Enum for Menu type	 
	 * @enum {string}
	 * @global 
	 */
    ej.MenuType = {
        /**  support for list of items appears as normal menu in horizontal or vertical direction. */
        NormalMenu: "normalmenu",
        /**  support for list of items appears as menu when right clicked on target area, thereby preventing browser’s default right click.. */
        ContextMenu: "contextmenu"
    };
    /**
	 * Enum for Sub Menu Popup direction	 
	 * @enum {string}
	 * @global 
	 */
    ej.Direction = {
        /**  support for Render sub menu popup in left direction. */
        Left: "left",
        /**  support for Render sub menu popup in Right direction. */
        Right: "right"
    };
    /**
	 * Enum for animationType	 
	 * @enum {string}
	 * @global 
	 */
    ej.AnimationType = {
        /**  support for disable the AnimationType while hover or click an menu items. */
        None: "none",
        /**  support for enable the AnimationType while hover or click an menu items. */
        Default: "default"
    };

    //mentions the recursive type of child
    //ej.Menu.prototype.defaults.fields.child = ej.Menu.prototype.defaults.fields;
    //ej.Menu.prototype.dataTypes.fields.child = ej.Menu.prototype.dataTypes.fields;

})(jQuery, Syncfusion);;