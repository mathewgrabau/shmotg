/*!
*  filename: ej.rotator.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/*!
*  filename: ej.rotator.js
*  version : 12.1
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Rotator control.
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
   * @class ejRotator
   * @requires jQuery
   * @requires jquery.easing.1.3.min.js
   * @requires ej.core.js
   * @requires ej.data.js
   * @requires ej.rotator.js
   * @classdesc The Rotator control displays a set of slides. Each slide may contain images or images with content, or content with user-defined transition between them.
   * @example
   * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   * &lt;/ul&gt;
   * &lt;script&gt;
   * //Initialize the Rotator control in the script as follows.
   * $(function (){
   * // document ready
   * // simple Rotator creation
   * $("#sliderContent").ejRotator();
   * });
   * &lt;/script&gt;
   */
    ej.widget("ejRotator", "ej.Rotator", {
        element: null,
        model: null,
        _setFirst: false,

        defaults: {
            /**		
			* Specify the CSS class to Rotator to achieve custom theme.
			* @default ""
			* @type {string}
			* @example 
			 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
			* // Set the CSS class during initialization. 			
			* 	$("#sliderContent").ejRotator({  cssClass : "gradient-lime" });			
			* &lt;/script&gt;
			 * @memberof ejRotator
			* @instance
			*/
            cssClass: "",
            /**		
			* Specify the list of data which contains a set of data fields. Each data value is used to render an item for the Rotator. 
			* @default null
			* @type {object}
			* @example 
			* &lt;ul id="sliderContent"&gt;
            *&lt;/ul&gt;
            * &lt;script&gt;
			* // Set the dataSource during initialization. 			
			* 	$("#sliderContent").ejRotator({ dataSource:window.items });			
			* &lt;/script&gt;
			* @memberof ejRotator
			* @instance
			*/
            dataSource: null,
            /**		
			* Retrieves data from remote data. This property is applicable only when a remote data source is used.
			* @default null
			* @type {string}
			* @memberof ejRotator
			* @instance
			*/
            query: null,
            /**		
			* Defines mapping fields for the data items of the Rotator.
			* @default null
			* @type {object}
			* @example 
			* &lt;ul id="sliderContent"&gt;
            *&lt;/ul&gt;
            * &lt;script&gt;
			* // Set the fields during initialization. 			
			* 	$("#sliderContent").ejRotator({ dataSource:window.items, fields: {text:"text",url:"url"}});
			* &lt;/script&gt;
			* @memberof ejRotator
			* @instance
			*/
            fields: /** @lends ejRotator# */{
                /**		
                 * Specifies a caption for the image.
				 * @alias ejRotator#fields->text
				 * @type String
                 */
                text: "text",
                /**		
                 * Specifies the URL for an image.
				 * @alias ejRotator#fields->url
				 * @type String
                 */
                url: "url"
            },
            /**		
           * Enables or disables the Rotator control.
           * @default true
           * @type {boolean} 
           * @example 
            * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
           * // Set the enabled during initialization. 			
           * 	$("#sliderContent").ejRotator({  enabled : true});		 
           * &lt;/script&gt;
           * @memberof ejRotator
           * @instance
           */
            enabled: true,
            /**		
           * Specifies the number of Rotator Items to be displayed.
           * @default "1"
           * @type {string | number}
           * @example 
            * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
           * // Set the displayItemsCount  during initialization. 			
           * 	$("#sliderContent").ejRotator({ displayItemsCount  : "1"});			
          * &lt;/script&gt;
            * @memberof ejRotator
           * @instance
           */
            displayItemsCount: "1",
            /**		
			* Specifies the number of Rotator Items to navigate on a single click (next/previous/play buttons). The navigateSteps property value must be less than or equal to the displayItemsCount  property value.
			* @default "1"
			* @type {string | number}
			* @example 
			 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
			* // Set the navigateSteps during initialization. 			
			* 	$("#sliderContent").ejRotator({ navigateSteps : "1"});		 
			* &lt;/script&gt;
			 * @memberof ejRotator
			* @instance
			*/
            navigateSteps: "1",
            /**		
			* Sets the animationSpeed of slide transition.
			* @default 600
			* @type {string | number}
			* @example 
			 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
			* // Set the animationSpeed during initialization. 			
			* 	$("#sliderContent").ejRotator({ animationSpeed : 600});			
			* &lt;/script&gt;
			 * @memberof ejRotator
			* @instance
			*/
            animationSpeed: 600,
            /**		
			* Sets the index of the slide that must be displayed first.
			* @default "1"
			* @type {string | number}
			* @example 
			 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
			* // Set the startIndex during initialization. 			
			* 	$("#sliderContent").ejRotator({ startIndex : "1"});			
			* &lt;/script&gt;
			 * @memberof ejRotator
			* @instance
			*/
            startIndex: "0",
            /**		
			* Enable play / pause button on rotator.
			* @default false
			* @type {boolean}
			* @example 
			 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
			* // Set the showPlayButton during initialization. 			
			* 	$("#sliderContent").ejRotator({ showPlayButton:true});			
			* &lt;/script&gt;
			 * @memberof ejRotator
			* @instance
			*/
            showPlayButton: false,
            /**		
			* Rotates the Rotator Items continuously without user interference.
			* @default false
			* @type {boolean}
			* @example 
			 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
			* // Set the enableAutoPlay during initialization. 			
			* 	$("#sliderContent").ejRotator({ enableAutoPlay:true});		 
			* &lt;/script&gt;
			 * @memberof ejRotator
			* @instance
			*/
            enableAutoPlay: false,
            /**		
			* Turns on or off the slide buttons (next and previous) in the Rotator Items. Slide buttons are used to navigate the Rotator Items.
			* @default false
			* @type {boolean}
			* @example 
			 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
			* // Set the showNavigateButton during initialization. 			
			* 	$("#sliderContent").ejRotator({ showNavigateButton : false});			
			* &lt;/script&gt;
			 * @memberof ejRotator
			* @instance
			*/
            showNavigateButton: true,
            /**		
			* Sets the width of a Rotator Item.
			* @default ""
			* @type {string | number}
			* @example 
			 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
			* // Set the slideWidth during initialization. 			
			* 	$("#sliderContent").ejRotator({ slideWidth : "600px"});			
			* &lt;/script&gt;
			 * @memberof ejRotator
			* @instance
			*/
            slideWidth: "",
            /**		
			* Sets the height of a Rotator Item.
			* @default ""
			* @type {string | number}
			* @example 
			 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
			* // Set the slideHeight during initialization. 			
			* 	$("#sliderContent").ejRotator({ slideHeight : "600px"});			
			* &lt;/script&gt;
			* @memberof ejRotator
			* @instance
			*/
            slideHeight: "",
            /**		
			* Sets the space between the Rotator Items.
			* @default ""
			* @type {string | number}
			* @example 
			 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
			* // Set the frameSpace during initialization. 			
			* 	$("#sliderContent").ejRotator({ slideWidth:"600px",slideHeight:"400px",displayItemsCount:2, frameSpace:"10px"});			
			* &lt;/script&gt;
			 * @memberof ejRotator
			* @instance
			*/
            frameSpace: "",
            /**		
			* Resizes the Rotator when the browser is resized. 
			* @default false
			* @type {boolean}
			* @example 
			 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
			* // Set the enableResize during initialization. 			
			* 	$("#sliderContent").ejRotator({ enableResize : false});			
			* &lt;/script&gt;
			 * @memberof ejRotator
			* @instance
			*/
            enableResize: false,
            /**		
          * Specifies the orientation for the Rotator control, that is, whether it must be rendered horizontally or vertically. See {@link Orientation}
          * @default ej.Orientation.Horizontal
          * @type {enum}
          * @example 
           * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
          * // Set the orientation during initialization. 			
          * 	$("#sliderContent").ejRotator({ orientation : ej.Orientation.Horizontal });			
          * &lt;/script&gt;
           * @memberof ejRotator
          * @instance
          */
            orientation: "horizontal",
            /**		
          * Specifies the position of the showPager in the Rotator Item. See {@link PagerPosition}
          * @default "outside"
          * @type {string | enum}
          * @example 
           * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
          * // Set the pagerPosition during initialization. 			
          * 	$("#sliderContent").ejRotator({ pagerPosition :"outside" });			
          * &lt;/script&gt;
           * @memberof ejRotator
          * @instance
          */
            pagerPosition: "outside",
            /**		
			* Turns on or off thumbnail support in the Rotator control. Thumbnail is used to navigate between slides. Thumbnail supports only single slide transition
			* You must specify the source for thumbnail elements through the thumbnailSourceID property.
			* @default false
			* @type {boolean}
			* @example 
			 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
   * <!-- Thumbnail Source -->
   * &lt;ul id="thumbElement"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
			* // Set the showThumbnail during initialization. 			
			* 	$("#sliderContent").ejRotator({ showThumbnail:true, thumbnailSourceID :"thumbElement"});			
			* &lt;/script&gt;
			 * @memberof ejRotator
			* @instance
			*/
            showThumbnail: false,
            /**		
          * Turns on or off the pager support in the Rotator control. The Pager is used to navigate the Rotator Items.
          * @default true
          * @type {boolean}
          * @example 
           * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
          * // Set the pager during initialization. 			
          * 	$("#sliderContent").ejRotator({ showPager : false});			
          * &lt;/script&gt;
           * @memberof ejRotator
          * @instance
          */
            showPager: true,
            /**		
       * Pause the auto play while hover on the rotator content.
       * @default false
       * @type {boolean}
       * @example 
       * &lt;ul id="sliderContent"&gt;
       * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
       * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
       * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
       * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
       * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
       * &lt;/ul&gt;
       * &lt;script&gt;
       * // Set the stopOnHover during initialization. 			
       * 	$("#sliderContent").ejRotator({ enableAutoPlay:true, stopOnHover:true});			
       * &lt;/script&gt;
       * @memberof ejRotator
       * @instance
       */
            stopOnHover: false,
            /**		
			* Specifies the source for thumbnail elements.
			* @default null
			* @type {object}
			* @example 
             * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;

			*&lt;ul id="thumbElement"&gt;
			*&lt;li&gt;&lt;img src="../images/rotator/nature.jpg"/&gt;&lt;/li&gt;
			*&lt;li&gt;&lt;img src="../images/rotator/bird.jpg" /&gt;&lt;/li&gt;
			*&lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
			*&lt;li&gt;&lt;img src="../images/rotator/seaview.jpg"/&gt;&lt;/li&gt;
			*&lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
			*&lt;/ul&gt;
			* &lt;script&gt;
			* // Set the thumbnailSourceID during initialization. 			
			* 	$("#sliderContent").ejRotator({ showThumbnail:true, thumbnailSourceID :"thumbElement"});			 
			* &lt;/script&gt;
			 * @memberof ejRotator
			* @instance
			*/
            thumbnailSourceID: null,
            /**		
          * If the Rotator Item is an image, you can specify a caption for the Rotator Item. The caption text for each Rotator Item must be set by using the title attribute of the respective <image> tag.
          * The caption cannot be displayed if multiple Rotator Items are present.
          * @default false
          * @type {boolean}
          * @example 
          * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" title="Nature" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg" title="Bird" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg" title="Sculpture" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" title="Seaview"  /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg" title="Snowfall" /&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
          * // Set the caption during initialization. 			
          * 	$("#sliderContent").ejRotator({showCaption:true});			
          * &lt;/script&gt;
           * @memberof ejRotator
          * @instance
          */
            showCaption: false,
            /**		
          * Turns on keyboard interaction with the Rotator items. You must set this property to true to access the following keyboard shortcuts:
          * @default true
          * @type {boolean}
          * @example 
           * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
          * // Set the allowKeyboardNavigation during initialization. 			
          * 	$("#sliderContent").ejRotator({ allowKeyboardNavigation : false});		
          * &lt;/script&gt;
           * @memberof ejRotator
          * @instance
          */
            allowKeyboardNavigation: true,
            /**		
          * Specifies right to left transition of slides. 
          * @default false
          * @type {boolean}
          * @example 
           * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
          * // Set the enableRTL during initialization. 			
          * 	$("#sliderContent").ejRotator({ enableRTL : false});			
          * &lt;/script&gt;
           * @memberof ejRotator
          * @instance
          */
            enableRTL: true,
            /**		
      * Specifies the animationType type for the Rotator Item. animationType options include slide, fastSlide, slowSlide, and other custom easing animationTypes.
      * @default "slide"
      * @type {string}
      * @example 
       * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
      * // Set the animationType during initialization. 			
      * 	$("#sliderContent").ejRotator({ animationType : "slide" });			
      * &lt;/script&gt;
       * @memberof ejRotator
      * @instance
      */
            animationType: "slide",
            //Events............
            /**     
            * This event is fired when the Rotator control is initialized.
            * @event
            * @name ejRotator#create 	
            * @param {Object} argument Event parameters from button     
            * @param {boolean}  argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the rotator model
            * @param {string}  argument.type returns the name of the event
            * @example 
             * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
            * $("#sliderContent").ejRotator({
            *    create: function (args) {}
            * });   
            * &lt;/script&gt;   
            * @memberof ejRotator
            * @instance
            */
            create: null,
            /**     
            * This event is fired when the Rotator slides are changed.
            * @event
            * @name ejRotator#change 	
            * @param {Object} argument Event parameters from button     
            * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the rotator model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.itemId the current rotator id.
            * @param {number}  argument.activeItemIndex returns the current slide index.
            * @example 
             * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
            * $("#sliderContent").ejRotator({
            *    change: function (args) {}
            * }); 
            * &lt;/script&gt;     
            * @memberof ejRotator
            * @instance
            */
            change: null,
            /**     
            * This event is fired when enableAutoPlay is started.
            * @event
            * @name ejRotator#start 	
            * @param {Object} argument Event parameters from button     
            * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the rotator model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.itemId the current rotator id.
            * @param {number}  argument.activeItemIndex returns the current slide index.
            * @example 
            * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
           
            * $("#sliderContent").ejRotator({
            *    start: function (args) {}
            * });
            * &lt;/script&gt;      
            * @memberof ejRotator
            * @instance
            */
            start: null,
            /**     
            * This event is fired when autoplay is stopped or paused.
            * @event
            * @name ejRotator#stop 	
            * @param {Object} argument Event parameters from button     
            * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
            * @param {object}  argument.model returns the rotator model
            * @param {string}  argument.type returns the name of the event
            * @param {string}  argument.itemId the current rotator id.
            * @param {number}  argument.activeItemIndex returns the current slide index.
            * @example 
             * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
            * $("#sliderContent").ejRotator({
            *    stop: function (args) {}
            * });    
            * &lt;/script&gt;  
            * @memberof ejRotator
            * @instance
            */
            stop: null,
            /**     
			 * This event is fired when a thumbnail pager is clicked.
			 * @event
			 * @name ejRotator#thumbItemClick 	
			 * @param {Object} argument Event parameters from button     
			 * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the rotator model
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument.itemId the current rotator id.
			 * @param {number}  argument.activeItemIndex returns the current slide index.
			 * @example 
			  * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
   * &lt;ul id="thumbElement"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
             * $("#sliderContent").ejRotator({
             *    showThumbnail:true,
             *    thumbnailSourceID:"thumbElement",
             *    thumbItemClick: function (args) {}
             * });   
             * &lt;/script&gt;   
			 * @memberof ejRotator
			 * @instance
			 */
            thumbItemClick: null,
            /**     
			 * This event is fired when a pager is clicked.
			 * @event
			 * @name ejRotator#pagerClick 	
			 * @param {Object} argument Event parameters from button     
			 * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
			 * @param {object}  argument.model returns the rotator model
			 * @param {string}  argument.type returns the name of the event
			 * @param {string}  argument.itemId the current rotator id.
			 * @param {number}  argument.activeItemIndex returns the current slide index.
			 * @example 
			  * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
             * $("#sliderContent").ejRotator({
             *    pagerClick: function (args) {}
             * }); 
             * &lt;/script&gt;    
			 * @memberof ejRotator
			 * @instance
			 */
            pagerClick: null,
            /**     
           * This event is fired when the Rotator control is destroyed.
           * @event
           * @name ejRotator#destroy 	
           * @param {Object} argument Event parameters from button     
           * @param {boolean} argument.cancel if the event should be canceled; otherwise, false.
           * @param {object}  argument.model returns the rotator model
           * @param {string}  argument.type returns the name of the event
           * @example 
            * &lt;ul id="sliderContent"&gt;
  * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
  * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
  * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
  * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
  * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
  *&lt;/ul&gt;
   * &lt;script&gt;
           * $("#sliderContent").ejRotator({
           *    destroy: function (args) {}
           * });   
           * &lt;/script&gt;   
           * @memberof ejRotator
           * @instance
           */
            destroy: null

        },
        //Data Types
        dataTypes: {
            cssClass: "string",
            dataSource: "data",
            query: "data",
            fields: "data",
            enabled: "boolean",
            displayItemsCount: "",
            navigateSteps: "",
            animationSpeed: "",
            transitionDelay: "",
            startIndex: "",
            showPlayButton: "boolean",
            enableAutoPlay: "boolean",
            slideWidth: "",
            slideHeight: "",
            frameSpace: "",
            enableResize: "boolean",
            orientation: "enum",
            pagerPosition: "enum",
            showThumbnail: "boolean",
            thumbnailSourceID: "",
            showPager: "boolean",
            showCaption: "boolean",
            enableRTL: "boolean",
            allowKeyboardNavigation: "boolean",
            animationType: "string",
        },

        /**
       * Create the Rotator widget.
       * @private
       */
        _init: function () {
            this._initialize();
            if (this.model.dataSource == null)
                this._setValues();
            this._render();
            this._wireEvent();
            if (this.model.enableAutoPlay) this.play();
        },
        /**
        * To initialize the Rotator.		
        * @private
        */
        _initialize: function () {
            this.element.attr("tabindex", 0);
            this._liCount = null;
            this.transitionDelay = null;
            this._animating = false;
            this._interval = null;
            this._thumbCount = null;
            this._liSize = null;
            this._containerSize = null;
            this.containerCss = this.model.orientation == ej.Orientation.Horizontal ? "outerWidth" : "outerHeight";
            this.displayCss = this.model.orientation == ej.Orientation.Horizontal ? "left" : "top";
            $.extend(jQuery.easing, {
                slowSlide: function (x, t, b, c, d) {
                    var ts = (t /= d) * t;
                    return b + c * (ts * ts);
                },
                fastSlide: function (x, t, b, c, d) {
                    var ts = (t /= d) * t;
                    var tc = ts * t;
                    return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
                },
                slide: function (x, t, b, c, d) {
                    var ts = (t /= d) * t;
                    var tc = ts * t;
                    return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
                }

            })
        },
        /**
       * To configure the property values.
       * @private
       */
        _setValues: function (val) {
            this._setLicount();
            this._setSpeed(this.model.animationSpeed);
            this._setVisibleItemCount(this.model.displayItemsCount);
            this._setItemMove(this.model.navigateSteps);
            this._setFrameSpace(this.model.frameSpace);
            this._setSlideWidth(this.model.slideWidth);
            this._setSlideHeight(this.model.slideHeight);
            this._changeProperty();
            this._setInitial();
        },
        _refresh: function () {
            this._setValues();
            this._setDimension();
            this._changeSkin();
        },
        _reRenderControl: function () {
            this._setLicount();
            this._setSpeed(this.model.animationSpeed);
            this._setVisibleItemCount(this.model.displayItemsCount);
            this._setItemMove(this.model.navigateSteps);
            this._setFrameSpace(this.model.frameSpace);
            this._setSlideWidth(this.model.slideWidth);
            this._setSlideHeight(this.model.slideHeight);
            this._changeProperty();
            this._cloneItem();
            this._createCaption();
            this._changeSkin();
        },
        _refreshControl: function () {
            if (this.model.showPager) {
                this._bulletWrapper.remove();
                this._createBulletControl();
            }
            else if (this.element.parents('.e-in-wrap').siblings().hasClass("e-pager-wrap"))
                this._bulletWrapper.remove();

            if (this.model.showCaption) {
                if (this.element.siblings().hasClass("e-caption"))
                    this._caption.remove();
                this._createCaption();
            } else if (this.element.siblings().hasClass("e-caption"))
                this._caption.remove();

            if (this.model.showThumbnail) {
                if (this.element.parents('.e-in-wrap').siblings().hasClass("e-thumb")) {
                    this._thumb.remove();
                    this._thumbControl.remove();
                }
                this._createThumb();
            }
            else if (this.element.parents('.e-in-wrap').siblings().hasClass("e-thumb")) {
                this._thumb.remove();
                this._thumbControl.remove();
            }
            this._changeSkin();
        },
        /**
        * Section for check whether collection of items is local or remote data.	
        * @private
        */
        _checkDataBinding: function () {
            var source = this.model.dataSource;
            if (source != null) {
                this.element.addClass("onloading");
                if (ej.DataManager && source instanceof ej.DataManager)
                    this._initDataSource(source);
                else
                    this._renderItems(source);
            }
            this._setValues();
        },
        /**
        * Section for render items with Remote Data.	
        * @private
        */
        _initDataSource: function (source) {
            var proxy = this, queryPromise;
            queryPromise = source.executeQuery(this._getQuery());
            queryPromise.done(function (e) {
                proxy._renderItems(e.result);
            }).fail(function (e) {
                proxy.element.removeClass("onloading");
            });
        },
        _getQuery: function () {
            var column;
            if (ej.isNullOrUndefined(this.model.query)) {
                column = [], queryManager = ej.Query(), mapper = this.model.fields, col;
                for (col in mapper) {
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
        /**
        * Section for rendering Rotator items.
        * @private
        */
        _renderItems: function (list) {
            this._generateTagItems(list);
            this.element.removeClass("onloading");
        },
        /**
        * Section for render Rotator items with DataSource.
        * @private
        */
        _generateTagItems: function (list) {
            var i, mapField = this._getMapper();
            for (i = 0; i < list.length; i++) {
                this.element.append(this._generateLi(list[i], mapField));
            }
        },
        /**
        * Section for mapping fields.
        * @private
        */
        _getMapper: function () {
            var mapper = this.model.fields, mapFld = { _text: null, _url: null };
            mapFld._text = (mapper && mapper.text) ? mapper["text"] : "text";
            mapFld._url = (mapper && mapper.url) ? mapper["url"] : "url";
            mapFld._attr = (mapper && mapper.htmlAttr) ? mapper["htmlAttr"] : "htmlAttr";
            return mapFld;
        },
        /**
         * Section for Render rotator items.
		 * @private
         */
        _generateLi: function (list, map) {
            var li = ej.buildTag("li"), imgTag;
            imgTag = $('<img  src="' + list[map._url] + '"title="' + list[map._text] + '"/>');
            this._setAttributes((list[map._attr]), imgTag);
            li.append(imgTag);
            return li;
        },
        /**
        * Section for set attributes to Rotator items.
        * @private
        */
        _setAttributes: function (data, element) {
            if (data) {
                for (var key in data)
                    element.attr(key, data[key]);
            }
        },
        _createWrapper: function () {
            this._wrapper = ej.buildTag("div.e-inner e-" + this.model.orientation).insertBefore(this.element);
            if (this.model.dataSource != null)
                this._checkDataBinding();
            this._wrapper.append(this.element);
            this._innerWrapper = ej.buildTag("div.e-in-wrap").insertBefore(this._wrapper);
            this._innerWrapper.append(this._wrapper);
            this._outerWrapper = ej.buildTag("div.e-rotator-wrap e-widget " + this.model.cssClass).insertBefore(this._innerWrapper);
            this._outerWrapper.append(this._innerWrapper);
            if (!this.model.enabled) this._outerWrapper.addClass("e-disable").attr({ "aria-disabled": true });
        },
        _refreshTagItems: function (key, value) {
            this.model[key] = value;
            this.element.children('li').remove();
            this._checkDataBinding();
            this._cloneItem();
            this._refreshControl();
        },
        /**
         * Render Section for slide Button control.		
		 * @private
         */
        _createButtonControl: function () {
            this._buttonWrapper = ej.buildTag("div.e-nav").insertAfter(this._wrapper);
            if (this.model.showNavigateButton) {
                this._prevButton = ej.buildTag("span.e-nav-btn e-icon e-previous").attr({ 'role': 'button' }).appendTo(this._buttonWrapper);
                this._nextButton = ej.buildTag("span.e-nav-btn e-icon e-next").attr({ 'role': 'button' }).appendTo(this._buttonWrapper);
            }
            this._buttonWrapper.appendTo(this._wrapper);
            this._createAutoPlay();
            if (this.model.enabled && this.model.showNavigateButton) this._wireBtnEvents();
        },
        /**
         * Render Section for Play / Pause Button control.		
		 * @private
         */
        _createAutoPlay: function () {
            var icon;
            if (!this.model.showPlayButton) return false;
            icon = this._interval != null ? 'pause' : 'play';
            this._autoButton = ej.buildTag("span.e-nav-btn e-icon " + icon, "", {}, { role: "button" }).appendTo(this._buttonWrapper);
            if (this.model.enabled) this._wireAutoPlayEvents();
        },
        /**
         * Render Section for pager control.		
		 * @private
         */
        _createBulletControl: function () {
            var end, liElement;
            this._bulletWrapper = ej.buildTag("div.e-pager-wrap", "", {}, { role: "group", "aria-label": "showPager", tabindex: "0" }).insertAfter(this._innerWrapper);
            this._bullet = ej.buildTag("ul.e-bullet e-default");
            end = (this._liCount - (this.model.displayItemsCount * 2)) / this.model.navigateSteps;
            if ((this._liCount - (this.model.displayItemsCount * 2)) % this.model.navigateSteps != 0)
                end++;
            for (i = 1; i <= end ; i++)
                ej.buildTag("li.e-icon", "", {}, { tabindex: "-1", "aria-selected": "false" }).appendTo(this._bullet);
            this._bullet.appendTo(this._bulletWrapper);
            this._setActiveBullet();
            this._setPagerposition(this.model.pagerPosition);
            if (this.model.enabled) this._wireBulletEvents();
        },
        /**
         * Section for Rendering caption.		
		 * @private
         */
        _createCaption: function () {
            var index;
            if (!this.model.showCaption) return false;
            this._caption = ej.buildTag("div.e-caption").append($('<span>')).insertAfter(this._buttonWrapper);
            index = Math.round((-Math.round(this.element.position()[this.displayCss])) / this._liSize); index--;
            this._setCaptionText(index);
        },
        /**
         * Section for Rendering thumbnail item.		
		 * @private
         */
        _createThumb: function () {
            var liElements, i;
            if (this.model.thumbnailSourceID != null) {
                this._thumb = this.model.showPager ? ej.buildTag("div.e-thumb", "", {}, { tabindex: "0", role: "group" }).insertAfter(this._bulletWrapper) : ej.buildTag("div.e-thumb", "", {}, { tabindex: "0", role: "group" }).insertAfter(this._innerWrapper);
                this._thumbItems = ej.buildTag("ul.e-thumb-items e-ul");
                for (i = 0; i < $('#' + this.model.thumbnailSourceID).children('li').length ; i++) {
                    liElements = $('#' + this.model.thumbnailSourceID).children('li').eq(i).clone();
                    liElements.addClass("e-thumb-ele").attr('tabindex', -1).removeAttr("style").appendTo(this._thumbItems);
                }
                this._thumbItems.appendTo(this._thumb);
                $('#' + this.model.thumbnailSourceID).css("display", "none");
                this._setThumbProperty();
                this._setActiveThumb();

            }
        },
        /**
         * Section for Rendering thumbnail control.		
		 * @private
         */
        _createThumbControl: function () {
            this._thumbControl = ej.buildTag("div.e-thumb-nav").insertAfter(this._thumb);
            this._previous = ej.buildTag("span.e-thumb-btn e-icon e-previous e-disable", "", {}, { "aria-disabled": true }).appendTo(this._thumbControl);
            this._next = ej.buildTag("span.e-thumb-btn e-icon e-next e-enable", "", {}, { "aria-disabled": false }).appendTo(this._thumbControl);
            this._thumbControl.appendTo(this._outerWrapper);
            if (this.model.enabled) this._wireThumbEvents();
        },
        /**
        * To configure the custom theme for Rotator using cssClass property.		
        * @private
        */
        _setSkin: function (skin) {
            this._outerWrapper.removeClass(this.model.cssClass).addClass(skin);
        },
        /**
         * Section for clone Rotator items.		
		 * @private
         */
        _cloneItem: function () {
            var i = 0, CloneElements = ej.buildTag("ul");
            for (i = 0; i < this.model.displayItemsCount ; i++)
                this.element.children('li').eq(i).clone().addClass("clone").appendTo(this.element);
            for (i = (this._liCount - this.model.displayItemsCount) ; i < this._liCount; i++)
                this.element.children('li').eq(i).clone().addClass("clone").prependTo(CloneElements);
            for (i = 0; i < CloneElements.children('li').length; i++)
                CloneElements.children('li').eq(i).clone().prependTo(this.element);
            this._setDimension();
        },
        /**
         * Section for undo the clone Rotator items.		
		 * @private
         */
        _undoClone: function () {
            for (i = 0; i < this._liCount; i++) {
                if (this.element.children('li').eq(i).hasClass("clone")) {
                    this.element.children('li').eq(i).remove();
                    this._setLicount();
                    i--;
                }
            }
        },
        /**
        * To configure the properties at runtime using SetModel		
        * @private
        */
        _setModel: function (options) {
            if (!this.model.enabled && ej.isNullOrUndefined(options["enabled"])) return false;
            var option, valueChange = false, controlChange = false;
            for (option in options) {
                switch (option) {
                    case "fields":
                    case "query":
                    case "dataSource":
                        this._refreshTagItems(option, options[option]);
                        break;
                    case "enabled":
                        this._changeState(options[option]);
                        break;
                    case "slideWidth":
                        this._setSlideWidth(options[option]);
                        valueChange = true;
                        controlChange = true;
                        break;
                    case "slideHeight":
                        this._setSlideHeight(options[option]);
                        valueChange = true;
                        controlChange = true;
                        break;
                    case "displayItemsCount":
                        this._undoClone();
                        this._setVisibleItemCount(options[option]);
                        this._cloneItem();
                        valueChange = true;
                        controlChange = true;
                        break;
                    case "navigateSteps":
                        options[option] = this._validateItemMove(options[option]);//this._setItemMove(options[option]);
                        this.model.navigateSteps = options[option];
                        valueChange = true;
                        controlChange = true;
                        break;
                    case "pagerPosition":
                        this._setPagerposition(options[option]);
                        break;
                    case "showPager":
                        this.model.showPager = options[option];
                        controlChange = true;
                        break;
                    case "showThumbnail":
                        this.model.showThumbnail = options[option];
                        valueChange = true;
                        controlChange = true;
                        break;
                    case "thumbnailSourceID":
                        this.model.thumbnailSourceID = options[option];
                        valueChange = true;
                        controlChange = true;
                        break;
                    case "showCaption":
                        this.model.showCaption = options[option];
                        valueChange = true;
                        controlChange = true;
                        break;
                    case "enableResize":
                        this.model.enableResize = options[option];
                        this._wireResizeEvents();
                        break;
                    case "orientation":
                        this.model.orientation = options[option];
                        this._setOrientation(options[option]);
                        break;
                    case "animationSpeed":
                        this._setSpeed(options[option]);
                        break;
                    case "frameSpace":
                        this._setFrameSpace(options[option]);
                        valueChange = true;
                        controlChange = true;
                        break;
                    case "showPlayButton":
                        this.model.showPlayButton = options[option];
                        this._setAutoplay(options[option]);
                        this._changeSkin();
                        break;
                    case "startIndex":
                        this.model.startIndex = options[option];
                        valueChange = true;
                        controlChange = true;
                        break;
                    case "allowKeyboardNavigation":
                        this.model.allowKeyboardNavigation = options[option];
                        this._wireKeyboardEvents();
                        break;
                    case "showNavigateButton":
                        this.model.showNavigateButton = options[option];
                        this._setSlideButton(options[option]);
                        this._changeSkin();
                        break;
                    case "animationType":
                        this.model.animationType = options[option];
                        this._setSpeed(this.model.animationSpeed);
                        break;
                    case "cssClass": this._setSkin(options[option]); break;
                    case "enableRTL":
                        this.model.enableRTL = options[option];
                        break;
                }
            }

            if (valueChange) this._refresh();
            if (controlChange) this._refreshControl();
        },
        /**
         * Section for set values to Rotator items.		
		 * @private
         */
        _setDimension: function () {
            this._setLicount();
            this._setUlInitial();
            this._setWidth();
            this._setHeight();
            this._setContainerPercent();
            this._changeProperty();
        },
        /**
        * Render Section For Rotator		
        * @private
        */
        _render: function () {
            this._createWrapper();
            this._cloneItem();
            this._createButtonControl();
            this._createCaption();
            if (this.model.showPager) this._createBulletControl();
            if (this.model.showThumbnail) this._createThumb();
            this._outerWrapper.find(this.element).addClass("e-ul");
            this._changeSkin();
        },
        /**
        * To configure the Rotator container width		
        * @private
        */
        _setWidth: function () {
            this._containerWidth = this.model.orientation == "horizontal" ?
            ((parseInt(this.model.slideWidth) * this.model.displayItemsCount) + (parseInt(this.model.frameSpace) * (parseInt(this.model.displayItemsCount) - 1))) : this.model.slideWidth;
            this.element.parent().css('width', this._containerWidth);
            this.element.parents('.e-in-wrap').css('width', this._containerWidth);
            this.element.parents('.e-rotator-wrap').css('width', this._containerWidth);
            this._changeProperty();
        },
        _setHeight: function () {
            this._containerHeight = this.model.orientation == "vertical" ?
            ((parseInt(this.model.slideHeight) * this.model.displayItemsCount) + (parseInt(this.model.frameSpace) * (parseInt(this.model.displayItemsCount) - 1))) : this.model.slideHeight;
            this.element.parent().css('height', this._containerHeight);
            this._changeProperty();
        },
        /**
        * To configure the rotator base element width and height 		
        * @private
        */
        _setUlInitial: function () {
            if (this.model.orientation == ej.Orientation.Horizontal) {
                this.element.css({
                    "width": this._liCount * this._liWidth,
                    "height": this._liHeight
                });
            }
            else {
                this.element.css({
                    "height": this._liCount * this._liHeight,
                    "width": this._liWidth
                });
            }
        },

        _setInitial: function () {
            this.element.css(this.displayCss, -(this._liSize * this.model.displayItemsCount) - (this.model.startIndex * this.model.navigateSteps * this._liSize));
        },
        _setBegin: function () {
            this.element.css(this.displayCss, -(this._liSize * this.model.displayItemsCount));
        },
        /**
         * To configure the rotator item width		
		 * @private
         */
        _setSlideWidth: function (val) {
            if (isNaN(parseInt(val)))
                this.model.slideWidth = this._getMaxSize("width");
            else {
                val = val.toString();
                this.model.slideWidth = this._checkValue(val, "width");
            }
            this.element.children('li').css("width", this.model.slideWidth);
            this._liWidth = this.element.children('li').outerWidth(true);
        },
        /**
         * To configure the rotator item height		
		 * @private
         */
        _setSlideHeight: function (val) {
            if (isNaN(parseInt(val)))
                this.model.slideHeight = this._getMaxSize("height");
            else {
                val = val.toString();
                this.model.slideHeight = this._checkValue(val, "height");
            }
            this.element.children('li').css("height", this.model.slideHeight);
            this._liHeight = this.element.children('li').outerHeight(true);
        },
        /**
         * To configure the showPager position.		
		 * @private
         */
        _setPagerposition: function (val) {
            if (this.model.showPager) {
                this._bullet.removeClass('e-default e-thumb-pos e-topleft e-topright e-bottomleft e-bottomright e-topCenter e-outside');
                this._bullet.addClass("e-" + val);
                if ((val == "bottomleft" || val == "bottomright") && this.model.showThumbnail && this.model.thumbnailSourceID != null)
                    this._bullet.addClass('e-thumb-pos');
            }
        },
        /**
         * To configure the caption text.		
		 * @private
         */
        _setCaptionText: function (index) {
            if (this.model.showCaption)
                this._caption.children().html(this.element.children('li').eq(++index).children('img').attr("title"));
        },
        /**
         * To configure the autoplay mode.		
		 * @private
         */
        _setAutoplay: function (val) {
            if (val)
                this._createAutoPlay();
            else if (this._autoButton != null) {
                this._setPause();
                this._autoButton.remove();
            }
        },
        /**
         * To configure the slide button.		
		 * @private
         */
        _setSlideButton: function (val) {
            if (val)
                this._createButtonControl()
            else {
                this._prevButton.remove();
                this._nextButton.remove();
            }
        },
        /**
         * To configure the orientation.		
		 * @private
         */
        _setOrientation: function (val) {
            this._wrapper.removeClass("e-" + this.model.orientation).addClass("e-" + val);
            this._setFrameSpace(this.model.frameSpace);
            this._refresh();
            if (this.model.orientation == ej.Orientation.Horizontal)
                this.element.css({ "left": -(Math.round(-(this.element.position().top) / this._liHeight) * this._liSize), "top": 0 });
            else
                this.element.css({ "top": -(Math.round(-(this.element.position().left) / this._liWidth) * this._liSize), "left": 0 });
        },
        /**
         * Section for set Active pager.		
		 * @private
         */
        _setActiveBullet: function () {
            var index = Math.round(-Math.round(this.element.position()[this.displayCss]) / (this._liSize * this.model.displayItemsCount));
            if (this.model.navigateSteps < this.model.displayItemsCount)
                index = -(Math.round(this.element.position()[this.displayCss]) + (this._liSize * this.model.displayItemsCount)) / (this._liSize * this.model.navigateSteps);
            index = this.model.navigateSteps == this.model.displayItemsCount ? index - 1 : index;
            this._bullet.children().eq(index).addClass('e-active').attr({ 'tabindex': 0, 'aria-selected': "true" });
        },
        /**
         * Section for set Active thumbnail item.		
		 * @private
         */
        _setActiveThumb: function () {
            var index = Math.round(-Math.round(this.element.position()[this.displayCss]) / this._liSize);
            index--;
            this._thumbItems.children().eq(index).addClass('e-active').attr({ 'tabindex': 0, 'aria-selected': "true" });
            this._transferThumb(index);
        },
        _checkValue: function (val, orient) {
            if ((val.indexOf("%")) > 0) {
                if (Math.round(parseInt(val)) == "100") {
                    this.model.displayItemsCount = 1;
                    this._setVisibleItemCount(this.model.displayItemsCount);
                }
                val = this._convertPercentageToPixel($(this.element[0]).parent()[orient](), parseInt(val));
            }
            return (val);
        },
        /**
         * Section for converting Percentage To Pixel.		
		 * @private
         */
        _convertPercentageToPixel: function (parent, child) {
            return Math.round((child * parent) / 100);  //round       
        },
        /**
         * Section for converting Pixel To Percentage.	
		 * @private
         */
        _convertPixelToPercentage: function (parent, child) {
            return Math.round((child / parent) * 100); //round
        },
        _changeProperty: function () {
            this.containerCss = this.model.orientation == ej.Orientation.Horizontal ? "outerWidth" : "outerHeight";
            this.displayCss = this.model.orientation == ej.Orientation.Horizontal ? "left" : "top";
            if (this.model.orientation == ej.Orientation.Horizontal) {
                this._liSize = this._liWidth;
                this._containerSize = this._containerWidth;
            }
            else {
                this._liSize = this._liHeight;
                this._containerSize = this._containerHeight;
            }
        },
        /**
         * To configure FrameSpace.	
		 * @private
         */
        _setFrameSpace: function (val) {
            if (isNaN(parseInt(val))) {
                this.model.frameSpace = "0px";
            } else {
                this.model.frameSpace = val;
                this.model.orientation == ej.Orientation.Horizontal ? this.element.children('li').css({ "margin-right": val, "margin-bottom": 0 }) : this.element.children('li').css({ "margin-bottom": val, "margin-right": 0 });
            }
        },
        /**
         * Section for finding rotator items count.	
		 * @private
         */
        _setLicount: function () {
            this._liCount = this.element.children('li').length;
        },
        /**
         * Section for finding Visible Rotator Item Count.	
		 * @private
         */
        _setVisibleItemCount: function (val) {
            this.model.displayItemsCount = val;
            this.model.navigateSteps = (this.model.navigateSteps <= this.model.displayItemsCount) ? this.model.navigateSteps : this.model.displayItemsCount;
            this._checkAndSet();
        },
        _checkAndSet: function () {
            if ((this.model.displayItemsCount > 1) || (this.model.navigateSteps > 1)) {
                if (this.model.showThumbnail) this.model.showThumbnail = false;
                if (this.model.showCaption) this.model.showCaption = false;
            }
        },
        /**
         * Section for changing the border based on visible item count.	
		 * @private
         */
        _changeSkin: function () {
            var value;
            if ((this.model.displayItemsCount > 1) || (this.model.navigateSteps > 1)) {
                this._innerWrapper.addClass("e-multiple");
                this._wrapper.removeClass("e-single");
            } else {
                this._innerWrapper.removeClass('e-multiple');
                this._wrapper.addClass("e-single");
            }
            if (this.model.showPlayButton)
                this._autoButton.css({
                    "left": (((this._innerWrapper.outerWidth(true) / 2) - (this._autoButton.width() / 2)) / this._innerWrapper.outerWidth(true)) * (100) + "%",
                    "top": (((this._innerWrapper.outerHeight(true) / 2) - (this._autoButton.height() / 2)) / this._innerWrapper.outerHeight(true)) * (100) + "%"
                });

            if (this.model.showNavigateButton) {
                value = (((this._innerWrapper.outerHeight(true) / 2) - (this._prevButton.height() / 2)) / this._innerWrapper.outerHeight(true)) * (100) + "%";
                this._prevButton.css("top", value);
                this._nextButton.css("top", value);
            }
            if ((this.model.showThumbnail) && (this.model.thumbnailSourceID != null) && (this._previous != null) && (this._next != null)) {
                value = this._outerWrapper.outerHeight(true) + (this._thumbItems.children('li').outerHeight(true) / 2) - (this._thumbItems.children('li').outerHeight(true)) - (this._previous.height() / 2);
                value = (value / this._outerWrapper.outerHeight(true)) * 100 + "%";
                this._previous.css("top", value);
                this._next.css("top", value);
            }
        },
        /**
         * To configure Number of items Move.	
		 * @private
         */
        _setItemMove: function (val) {
            this.model.navigateSteps = this._validateItemMove(val);
            this._checkAndSet();
        },
        _validateItemMove: function (val) {
            return ((val <= this.model.displayItemsCount) ? val : this.model.displayItemsCount);
        },
        /**
         * To configure Play Action.	
		 * @private
         */
        _setPlay: function () {
            if ((this.model.showPlayButton) && (this._autoButton.hasClass("play")))
                this._autoButton.removeClass("play").addClass("pause");
            this._animate = true;
            this._raiseEvent("start");
        },
        /**
         * To configure Pause Action.	
		 * @private
         */
        _setPause: function () {
            if (this._interval != null) {
                if ((this.model.showPlayButton) && (this._autoButton.hasClass("pause")))
                    this._autoButton.removeClass("pause").addClass("play");
                clearInterval(this._interval);
                this._animate = this.model.stopOnHover ? true : false;
                this._interval = null;
                this._raiseEvent("stop");
            }
        },
        _setContainerPercent: function () {
            this._containerPercent = this._convertPixelToPercentage(this.element.parents('.e-rotator-wrap').parent().width(), this.element.parent().width());
        },
        /**
         * To configure animationType speed.	
		 * @private
         */
        _setSpeed: function (val) {
            var delay = 500;
            this.transitionDelay = this.model.animationType != "slideshow" ? (val + delay) : ((val * 2) + delay);
        },
        /**
         * Section for set thumbnail element properties	
		 * @private
         */
        _setThumbProperty: function () {
            var thumbwidth, itemWidth, margin;
            itemWidth = this._thumbItems.children('li').outerWidth(true);
            thumbwidth = (this.element.parent().outerWidth(true)) - (((this.element.parent().outerWidth(true)) * 12) / 100);
            this._thumb.css('width', thumbwidth);
            this._thumbCount = Math.floor(this._thumb.innerWidth() / itemWidth);
            margin = Math.round((this.element.parent().outerWidth(true) * 6) / 100) + Math.floor((thumbwidth - (this._thumbCount * itemWidth)) / 2);
            this._thumb.css({ 'margin-left': margin, 'margin-right': margin, 'width': this._thumbCount * itemWidth });
            this._thumbItems.css({ 'width': (this._thumbItems.children('li').length) * itemWidth, 'height': this._thumbItems.children('li').outerHeight(true) });
            this._checkState();
        },
        _checkState: function () {
            if (this._thumbCount < (this._liCount - (this.model.displayItemsCount * 2))) {
                if (!this.element.parents('.e-in-wrap').siblings().hasClass("e-thumb-nav"))
                    this._createThumbControl();
            }
            else if (this.element.parents('.e-in-wrap').siblings().hasClass("e-thumb-nav"))
                this._thumbControl.remove();
        },
        /**
         * Section for removing active Rotator item.	
		 * @private
         */
        _removeActiveItem: function () {
            if (this.model.showPager)
                this._bullet.children().removeClass('e-active').attr({ 'tabindex': -1, 'aria-selected': "false" });
            if (this.model.showThumbnail)
                this._thumbItems.children().removeClass('e-active').attr({ 'tabindex': -1, 'aria-selected': "false" });
        },
        /**
         * Section for set active Rotator item.	
		 * @private
         */
        _setActiveItem: function (index) {
            if (this.model.showPager)
                this._bullet.children().eq(index).addClass('e-active').attr({ 'tabindex': 0, 'aria-selected': "true" });
            if (this.model.showThumbnail) {
                this._thumbItems.children().eq(index).addClass('e-active').attr({ 'tabindex': 0, 'aria-selected': "true" });
                this._transferThumb(index);
                for (i = 0; i < this._thumbItems.children('li').length; i++)
                    if (this._thumbItems.children('li').eq(i).hasClass('e-thumbhover'))
                        this._thumbItems.children('li').eq(i).removeClass('e-thumbhover');
            }
        },
        /**
         * Section for transfering thumbnail item to particular index.	
		 * @private
         */
        _transferThumb: function (index) {
            var move, right;
            if (this.model.showThumbnail) {
                move = (index * this._thumbItems.children('li').outerWidth(true)) - (-this._thumbItems.position().left);
                right = -(this._thumbItems.position().left) + this._thumb.width();
                if ((this._thumbItems.width() - right) > move)
                    this._thumbMove(move);
                else
                    this._thumbMove((this._thumbItems.width() - right));
            }
        },

        _changeThumbControl: function (index) {
            var licount;
            if ((this.model.showThumbnail) && (this.model.thumbnailSourceID != null)) {
                licount = $('#' + this.model.thumbnailSourceID).children('li').length;
                if ((index * this._thumbItems.children('li').outerWidth(true)) > 0) {
                    if (this._previous != null && this._previous.hasClass("e-disable"))
                        this._previous.removeClass("e-disable").addClass("e-enable").attr({ "aria-disabled": false });
                }
                else if (this._previous != null && this._previous.hasClass("e-enable"))
                    this._previous.removeClass("e-enable").addClass("e-disable").attr({ "aria-disabled": true });

                if ((index * this._thumbItems.children('li').outerWidth(true)) < ((licount - this._thumbCount) * (this._thumbItems.children('li').outerWidth(true)))) {
                    if (this._next != null && this._next.hasClass("e-disable"))
                        this._next.removeClass("e-disable").addClass("e-enable").attr({ "aria-disabled": false });
                }
                else if (this._next != null && this._next.hasClass("e-enable"))
                    this._next.removeClass("e-enable").addClass("e-disable").attr({ "aria-disabled": true });
            }
        },
        /**
        * Section for find maximum item size.	
        * @private
        */
        _getMaxSize: function (display) {
            var max = 0, current = 0, i = 0, proxy = this;
            for (i = 0; i < this._liCount; i++) {
                current = this.element.children('li').eq(i)[display]();
                max = current > max ? current : max;
            }
            return max;
        },
        _calculateValue: function () {
            return (this._convertPercentageToPixel((this._containerWidth - ((this.model.displayItemsCount - 1) * parseInt(this.model.frameSpace))), (100 / this.model.displayItemsCount)));
        },
        /**
         * Section for enable / disable the rotator control.	
		 * @private
         */
        _changeState: function (val) {
            val ? this.enable() : this.disable();
        },
        /**
         * Section for find active item.	
		 * @private
         */
        _findActive: function () {
            var index, i;
            if (this.model.showPager) {
                for (i = 0; i < this._bullet.children('li').length; i++) {
                    if (this._bullet.children('li').eq(i).hasClass('e-active'))
                        return i;
                }
            }
            else if (this.model.showThumbnail) {
                for (i = 0; i < this._thumbItems.children('li').length; i++) {
                    if (this._thumbItems.children('li').eq(i).hasClass('e-active'))
                        return i;
                }
            }
            else if (!(this.model.showPager) && !(this.model.showThumbnail))
                index = Math.round(-Math.round(this.element.position()[this.displayCss]) / this._liSize);
            index--;
            return index;
        },
        /**
        * Wiring the events to rotator control		
        * @private
        */
        _wireEvent: function () {
            if (!this.model.enabled) return false;
            this._wrapper.bind("mouseenter", $.proxy(this._showControl, this));
            this._wrapper.bind("mouseleave", $.proxy(this._hideControl, this));
            this._wireKeyboardEvents();
            this._wireResizeEvents();
            this._on(this._wrapper, "swiperight swipeleft swipedown swipeup", { control: true }, this._touchOperations);
            if (this.model.thumbnailSourceID) this._on(this._thumb, "swiperight swipeleft", { control: false }, this._touchOperations);
        },
        /**
        * Wiring the Keyboard events to rotator control		
        * @private
        */
        _wireKeyboardEvents: function () {
            if (this.model.allowKeyboardNavigation) {
                this._outerWrapper.bind("focusin", $.proxy(this._onFocusIn, this));
                this._outerWrapper.bind("focusout", $.proxy(this._onFocusOut, this));
            }
            else {
                this._outerWrapper.unbind("focusin", $.proxy(this._onFocusIn, this));
                this._outerWrapper.unbind("focusout", $.proxy(this._onFocusOut, this));
            }
        },
        /**
         * Wiring the events to slide button control		
		 * @private
         */
        _wireBtnEvents: function () {
            if (this.model.showNavigateButton) {
                this._prevButton.bind("click", $.proxy(this._prevAction, this));
                this._nextButton.bind("click", $.proxy(this._nextAction, this));
            }
            else {
                this._prevButton.unbind("click", $.proxy(this._prevAction, this));
                this._nextButton.unbind("click", $.proxy(this._nextAction, this));
            }
        },
        /**
         * Wiring the events to Play / pause button control		
		 * @private
         */
        _wireAutoPlayEvents: function () {
            if (this.model.showPlayButton)
                this._on(this._autoButton, "click", this._autoPlay);
            else
                this._off(this._autoButton, "click", this._autoPlay);
        },
        /**
         * Wiring the  Resize events to Rotator control		
		 * @private
         */
        _wireResizeEvents: function () {
            if (this.model.enableResize)
                $(window).bind("resize", $.proxy(this._resizeEvent, this));
            else
                $(window).unbind("resize", $.proxy(this._resizeEvent, this));
        },
        /**
         * Wiring the events to thumbnail items.		
		 * @private
         */
        _wireThumbEvents: function () {
            if (this.model.showThumbnail) {
                this._on(this._thumbItems.children(), "click", this._thumbClick);
                this._on(this._next, "click", this._thumbNext);
                this._on(this._previous, "click", this._thumbPrev);
            }
            else {
                this._off(this._thumbItems.children(), "click", this._thumbClick);
                this._off(this._next, "click", this._thumbNext);
                this._off(this._previous, "click", this._thumbPrev);
            }
        },
        /**
         * Wiring the events to showPager.		
		 * @private
         */
        _wireBulletEvents: function () {
            if (this.model.showPager)
                this._on(this._bullet.children(), "click", this._bulletClick);
            else
                this._off(this._bullet.children(), "click", this._bulletClick);
        },
        /**
        * Section for move to next thumbnail item.		
        * @private
        */
        _thumbNext: function () {
            var proxy = this, rightValue;
            if (!this.model.enabled) return false;
            if (this._previous.hasClass("e-disable"))
                this._previous.removeClass("e-disable").addClass("e-enable").attr({ "aria-disabled": false });
            rightValue = (-Math.round(this._thumbItems.position().left)) + this._thumb.width();
            if (this._thumbItems.width() - rightValue >= this._thumbItems.children('li').outerWidth(true))
                this._thumbMove(this._thumbItems.children('li').outerWidth(true));
            if ((this._thumbItems.width() - rightValue) <= this._thumbItems.children('li').outerWidth(true))
                this._next.removeClass("e-enable").addClass("e-disable").attr({ "aria-disabled": true });
        },
        /**
         * Section for move thumbnail item.		
		 * @private
         */
        _thumbMove: function (move) {
            var proxy = this;
            proxy._thumbItems.animate({
                "left": "-=" + move + "px",
            }, 600, function () { proxy._thumbItems.stop(true, true); });
        },
        /**
         * Section for move to previous thumbnail item.		
		 * @private
         */
        _thumbPrev: function () {
            var proxy = this, leftValue, itemWidth;
            if (!this.model.enabled) return false;
            if (this._next.hasClass("e-disable"))
                this._next.removeClass("e-disable").addClass("e-enable").attr({ "aria-disabled": false });
            leftValue = Math.round(this._thumbItems.position().left);
            itemWidth = this._thumbItems.children('li').outerWidth(true);
            if ((-leftValue) >= itemWidth) this._thumbMove(-itemWidth);
            if ((-leftValue) <= itemWidth) this._previous.removeClass("e-enable").addClass("e-disable").attr({ "aria-disabled": true });
        },
        _findLength: function () {
            var proxy = this, len;
            if (this.model.showThumbnail) len = proxy._thumbItems.children('li').length - 1;
            if (this.model.showPager) len = proxy._bullet.children('li').length - 1;
            if (!(this.model.showPager) && !(this.model.showThumbnail))
                len = ((this.element[this.containerCss]()) / this._liSize) - ((this.model.displayItemsCount) * 2);
            return len;
        },
        /**
         * Section for change Active State.		
		 * @private
         */
        _changeActiveState: function (action) {
            var proxy = this, index, len;
            index = proxy._findActive();
            len = proxy._findLength();
            proxy._removeActiveItem();
            if (action == "prev") {
                if ((index > 0) && (this.model.animationType != "slideshow")) {
                    proxy._setActiveItem((index - 1));
                    if (this.model.animationType != "slideshow") this._setCaptionText((index - 1));
                }
                else {
                    proxy._setActiveItem(len);
                    if (this.model.animationType != "slideshow") this._setCaptionText((len));
                }
            }
            else if (index < len) {
                proxy._setActiveItem((index + 1));
                if (this.model.animationType != "slideshow") this._setCaptionText((index + 1));
            }
            else {
                proxy._setActiveItem(0);
                if (this.model.animationType != "slideshow") this._setCaptionText(0);
            }
        },
        /**
        * Section for move slide.		
        * @private
        */
        _moveSlide: function (move, action) {
            var proxy = this, animationType, animationSpeed, index, len, properties = {};
            animationType = this.model.animationType != "slideshow" ? this.model.animationType : "slideshow";
            animationSpeed = this.model.animationType != "slideshow" ? proxy.model.animationSpeed : 0;
            index = proxy._findActive();
            len = proxy._findLength();
            properties[this.displayCss] = proxy.element.position()[proxy.displayCss];
            properties[this.displayCss] -= move;
            index = action == "next" ? (index < len ? index + 1 : 0) : action == "prev" ? (index > 0 ? index - 1 : len) : 0;
            if (this.model.animationType == "slideshow") { proxy.element.fadeOut(proxy.model.animationSpeed / 2); if (proxy.model.showCaption) proxy._caption.fadeOut(proxy.model.animationSpeed / 2); }
            proxy.element.animate(properties, animationSpeed, animationType, function () { if (action == "end") proxy._setBegin(); proxy._animating = false; proxy._setCaptionText(index); });
            if (this.model.animationType == "slideshow") { proxy.element.fadeIn(proxy.model.animationSpeed / 2); if (proxy.model.showCaption) proxy._caption.fadeIn(proxy.model.animationSpeed / 2); }
        },
        /**
        * Section for move to next slide.		
        * @private
        */
        _moveNext: function () {
            var proxy = this, ltValue, endValue, rbValue, move;
            proxy._animating = true;
            ltValue = Math.round(proxy.element.position()[proxy.displayCss]);
            endValue = (proxy.model.displayItemsCount * proxy._liSize) - (proxy._liCount * proxy._liSize);
            rbValue = Math.round(proxy.element.position()[proxy.displayCss]) + proxy.element[proxy.containerCss]();//here width() only
            proxy._calculateItemMove();
            if ((ltValue > endValue) && (rbValue - proxy._containerSize > (proxy._move + parseInt(proxy.model.frameSpace)))) {
                return { move: proxy._move, action: "next" }
            }
            else {
                if (rbValue - proxy._containerSize <= (proxy._move + parseInt(proxy.model.frameSpace))) {
                    move = rbValue - proxy._containerSize - parseInt(proxy.model.frameSpace);
                    return { move: move, action: "end" }
                }
            }
        },
        /**
         * Section for move to previous slide.		
		 * @private
         */
        _movePrev: function () {
            var proxy = this, ltValue, rbValue, endValue, setValue;
            ltValue = Math.round(proxy.element.position()[proxy.displayCss]);
            rbValue = proxy.element.position()[proxy.displayCss]; +proxy.element[proxy.containerCss]();//here using width() only
            endValue = proxy.element[proxy.containerCss]();//here using width() only
            proxy._calculateItemMove();
            if ((rbValue < endValue) && (-ltValue > (proxy.model.displayItemsCount * proxy._liSize))) {
                return { move: -proxy._move, action: "prev" }
            }
            else {
                setValue = ((proxy.model.displayItemsCount * proxy._liSize) * 2) + ltValue - (proxy._liCount * proxy._liSize);
                proxy._move = ((proxy._liCount - (proxy.model.displayItemsCount * 2)) % proxy.model.navigateSteps) * proxy._liSize;
                if (proxy._move == 0) proxy._calculateItemMove();
                if (proxy.model.orientation == ej.Orientation.Horizontal)
                    proxy.element.css("left", setValue);
                else
                    proxy.element.css("top", setValue);
                return { move: -proxy._move, action: "prev" }
            }
        },
        /**
         * Section for enable auto play mode.		
		 * @private
         */
        _autoPlay: function (e) {
            if (!this.model.enabled) return false;
            var proxy = this, value, move;
            if (this._interval == null) {
                this._setPlay();
                move = function () {
                    proxy._animating = true;
                    value = proxy.model.enableRTL ? proxy._moveNext() : proxy._movePrev();
                    proxy._moveSlide(value.move, value.action);
                    proxy._changeActiveState(value.action);
                    proxy._changeThumbControl(proxy._findActive());
                    proxy._raiseEvent("change");
                }
                function SetInterval(move, animationSpeed) {
                    move();
                    return (setInterval(move, animationSpeed))
                }
                if (!this._animating)
                    this._interval = SetInterval(move, this.transitionDelay);
            }
            else
                this._setPause();
        },
        /**
        * Section For handle the click event on thumbnail Next button 
        * @private
        */
        _nextAction: function () {
            if (!this.model.enabled) return false;
            var proxy = this, interval, next, value;
            next = function () {
                value = proxy._moveNext();
                proxy._moveSlide(value.move, value.action);
                clearInterval(interval);
                proxy._changeActiveState("next");
                proxy._changeThumbControl(proxy._findActive());
                proxy._raiseEvent("change");
            }
            if (this._interval != null)
                this._setPause();

            if (!this._animating) {
                this._animating = true;
                interval = setInterval(next, "");
            }
        },
        /**
       * Section For handle the click event on thumbnail Previous button 
       * @private
       */
        _prevAction: function () {
            if (!this.model.enabled) return false;
            var proxy = this, interval, previous, value;
            previous = function () {
                value = proxy._movePrev();
                proxy._moveSlide(value.move, value.action);
                clearInterval(interval);
                proxy._changeActiveState("prev");
                proxy._changeThumbControl(proxy._findActive());
                proxy._raiseEvent("change");
            }
            if (this._interval != null)
                this._setPause();

            if (!this._animating) {
                this._animating = true;
                interval = setInterval(previous, "")
            }
        },
        /**
       * Section For handle the touch event 
       * @private
       */
        _touchOperations: function (e) {
            var isThumb = !e.data.control, direction, orient = this.model.orientation;
            if (isThumb)
                direction = e.type == "swipeleft" ? "left" : "right";
            else {
                if ((orient == "horizontal" && e.type == "swipeleft") ||
                    (orient == "vertical" && e.type == "swipeup"))
                    direction = "left";
                else if ((orient == "horizontal" && e.type == "swiperight") ||
                    (orient == "vertical" && e.type == "swipedown"))
                    direction = "right";
            }
            if (direction == "left")
                isThumb ? this._thumbNext() : this.slideNext();
            else if (direction == "right")
                isThumb ? this._thumbPrev() : this.slidePrevious();
        },
        /**
        * Section For handle the resize event 
        * @private
        */
        _resizeEvent: function () {
            var index, parent;
            if (!this.model.enabled) return false;
            index = Math.round(-Math.round(this.element.position().left) / this._liSize);
            parent = Math.round(this.element.parents('.e-rotator-wrap').parent().width());
            this._containerWidth = this._convertPercentageToPixel(parent, this._containerPercent);
            this._setSlideWidth(this._calculateValue().toString());
            this._setWidth();
            this.element.css("left", -(index * this._liSize));
            this._setUlInitial();
            if ((this.model.showThumbnail) && (this.model.thumbnailSourceID != null))
                this._setThumbProperty();
        },
        /**
        * Section For Calculate item move value 
        * @private
        */
        _calculateItemMove: function () {
            if (!isNaN(this.model.navigateSteps))
                this._move = this._liSize * this.model.navigateSteps;
            else {
                this.model.navigateSteps = 1;
                this._move = this._liSize * this.model.navigateSteps;
            }
        },
        /**
         * Section For handle click event on thumbnail item
		 * @private
         */
        _thumbClick: function (event) {
            var index;
            var btnStatus = this._autoButton != null ? (this._autoButton.hasClass("play") ? false : true) : (this.model.enableAutoPlay ? true : false);
            if (!this.model.enabled) return false;

            if (this._interval != null)
                this._setPause();

            this._removeActiveItem();
            index = ((event.target.className == 'e-thumb-ele e-thumbhover') || (event.target.className == 'e-thumb-ele')) ? this._thumbItems.children('li').index($(event.target)) :
            this._thumbItems.children('li').index($(event.target).parents('.e-thumb-ele'));
            this._changeThumbControl(index);
            this._raiseEvent("thumbItemClick");
            this._setActiveItem(index);
            this._moveSlideContent(this.element.position()[this.displayCss], -((this.model.displayItemsCount * this._liSize) + (index * this.model.navigateSteps * this._liSize)), index, btnStatus);
        },
        /**
         * Section For handle click event on pager item
		 * @private
         */
        _bulletClick: function (event) {
            var index;
            var btnStatus = this._autoButton != null ? (this._autoButton.hasClass("play") ? false : true) : (this.model.enableAutoPlay ? true : false);
            if (!this.model.enabled) return false;
            if (this._interval != null)
                this._setPause();
            this._removeActiveItem();
            index = this._bullet.children('').index(event.target);
            this._changeThumbControl(index);
            this._setActiveItem(index);
            this._moveSlideContent(this.element.position()[this.displayCss], -((this.model.displayItemsCount * this._liSize) + (index * this.model.navigateSteps * this._liSize)), index, btnStatus);
            this._raiseEvent("pagerClick");

        },
        /**
         * Section For handle slide transition
		 * @private
         */
        _moveSlideContent: function (Current, Target, index, btnStatus) {
            var proxy = this, animationSpeed, animationType, properties = {};
            animationType = this.model.animationType != "slideshow" ? this.model.animationType : "slideshow";
            animationSpeed = this.model.animationType != "slideshow" ? proxy.model.animationSpeed : 0;
            properties[this.displayCss] = proxy.element.position()[proxy.displayCss];
            properties[this.displayCss] += (Target - Current);
            if (this.model.animationType == "slideshow") { proxy.element.fadeOut(proxy.model.animationSpeed / 2); if (proxy.model.showCaption) proxy._caption.fadeOut(proxy.model.animationSpeed / 2); }
            proxy.element.animate(properties, animationSpeed, animationType, function () {
                proxy._setCaptionText(index); if (btnStatus) {
                    setTimeout(function () {
                        proxy.play();
                    }, proxy.model.animationSpeed);
                }
            });
            if (this.model.animationType == "slideshow") { proxy.element.fadeIn(proxy.model.animationSpeed / 2); if (proxy.model.showCaption) proxy._caption.fadeIn(proxy.model.animationSpeed / 2); }
            proxy._raiseEvent("change");

        },
        /**
       * destroy the Rotator widget.
       * all events bound using this._on will be unbind automatically and bring the control to pre-init state.
       * @private
       */
        _destroy: function () {
            this._interval != null ? this.pause() : "";
            this._undoClone();
            this.element.removeAttr("style").insertAfter(this._outerWrapper);
            this.element.children().removeAttr("style");
            this._outerWrapper.remove();
        },
        /**
          * Section For handle events
          * @private
          */
        _raiseEvent: function (event) {

            return this._trigger(event, {
                activeItemIndex: this._findActive(),
                itemID: this.element.attr('id'),
            });

        },
        /**
        * Section For show the slide button controls with animationType.
        * @private
        */
        _showControl: function (event) {
            if (!this.model.enabled) return false;
            if (this.model.showNavigateButton) {
                this._prevButton.stop(true, true).fadeIn('slow');
                this._nextButton.stop(true, true).fadeIn('slow');
            }
            if (this.model.showPlayButton)
                this._autoButton.stop(true, true).fadeIn('slow');
            if ((this.model.showCaption) && (this._caption != null))
                this._caption.stop(true, true).fadeIn('slow');
            if (this.model.stopOnHover && this._animate)
                this.pause();
            event.stopPropagation();
        },
        /**
        * Section For hide the slide button controls with animationType.
        * @private
        */
        _hideControl: function (event) {
            if (!this.model.enabled) return false;
            if (this.model.showNavigateButton) {
                this._prevButton.stop(true, true).fadeOut('slow');
                this._nextButton.stop(true, true).fadeOut('slow');
            }
            if (this.model.showPlayButton)
                this._autoButton.stop(true, true).fadeOut('slow');
            if ((this.model.showCaption) && (this._caption != null))
                this._caption.stop(true, true).fadeOut('slow');
            if (this.model.stopOnHover && this._animate)
                this.play();
            event.stopPropagation();
        },
        /**
        * Section For Handle focusin Event.
        * @private
        */
        _onFocusIn: function () {
            if (!this.model.enabled) return false;
            this._outerWrapper.addClass("e-Focused");
            $(this._outerWrapper).bind("keydown", $.proxy(this._focuseHandle, this));
        },
        /**
         * Section For Handle focusout in Event.
		 * @private
         */
        _onFocusOut: function () {
            this._outerWrapper.removeClass("e-Focused");
            $(this._outerWrapper).unbind("keydown", $.proxy(this._focuseHandle, this));
        },
        /**
         * Section For Handle keyboard navigation.
		 * @private
         */
        _focuseHandle: function (e) {
            if (!this.model.enabled) return false;
            if (this._outerWrapper.hasClass("e-Focused")) {
                e.keyCode = ((e.altKey) && ((e.keyCode == 37) || (e.keyCode == 40))) ? 1000 : e.keyCode;
                e.keyCode = ((e.altKey) && ((e.keyCode == 38) || (e.keyCode == 39))) ? 1001 : e.keyCode;
                switch (e.keyCode) {
                    case 37:        // Left Key
                    case 40:        // Down Key
                        e.preventDefault();
                        this._prevAction();
                        break;
                    case 38:        // Up Key
                    case 39:         // Right Key     
                        e.preventDefault();
                        this._nextAction();
                        break;
                    case 32:         // Space Key
                        e.preventDefault();
                        this._autoPlay();
                        break;
                    case 1000:
                        e.preventDefault();
                        this._thumbPrev();
                        this._thumbHover("prev");
                        break;
                    case 1001:
                        e.preventDefault();
                        this._thumbNext();
                        this._thumbHover("next");
                        break;
                    case 13:
                        e.preventDefault();
                        for (i = 0; i < this._thumbItems.children('li').length; i++)
                            if (this._thumbItems.children('li').eq(i).hasClass('e-thumbhover'))
                                this.gotoIndex(i);

                }
            }
        },
        /**
         * Section For Handle mouseover event on thumbnail item.
		 * @private
         */
        _thumbHover: function (action) {
            var proxy = this, index = null, len;
            for (i = 0; i < this._thumbItems.children('li').length; i++) {
                if (this._thumbItems.children('li').eq(i).hasClass('e-thumbhover')) {
                    index = i;
                    this._thumbItems.children('li').eq(i).removeClass('e-thumbhover');
                    break;
                }
            }
            if (index == null)
                index = this._findActive();
            len = proxy._findLength();
            if (action == "prev") {
                if (index > 0)
                    this._thumbItems.children().eq(--index).addClass('e-thumbhover');
                else
                    this._thumbItems.children().eq(0).addClass('e-thumbhover');
            }
            else if (index < len)
                this._thumbItems.children().eq(++index).addClass('e-thumbhover');
            else
                this._thumbItems.children().eq(len).addClass('e-thumbhover');
        },
        //Public Methods...
        /**
       * Enables the Rotator control.
       * @alias enable
       * @return jQuery
       * @example 
        * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
       * //initialize the Rotator object
       * $("#sliderContent").ejRotator();
       *	var slideObj = $("#sliderContent").data("ejRotator");
       *	//To Enables the Rotator control.
       *	slideObj.enable();
       * &lt;/script&gt;
       * @example 
        * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
       * $("#sliderContent").ejRotator();
       * $("#sliderContent").ejRotator("enable");
       * &lt;/script&gt;
       * @memberof ejRotator
       * @instance
       */
        enable: function () {
            if (!this.model.enabled) {
                this.model.enabled = true;
                this._outerWrapper.removeClass("e-disable").attr({ "aria-disabled": false });
            }
        },
        /**
       * Disables the Rotator control.
       * @alias disable
       * @return jQuery
       * @example 
        * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
       * //initialize the Rotator object
       	* $("#sliderContent").ejRotator();
       *	var slideObj = $("#sliderContent").data("ejRotator");
       *	//To Disables the Rotator control.
       *	slideObj.disable();
      * &lt;/script&gt;
      * @example 
        * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
       	* $("#sliderContent").ejRotator();
       * //To Disables the Rotator control.
       *  $("#sliderContent").ejRotator("disable");
      * &lt;/script&gt;
       * @memberof ejRotator
       * @instance
       */
        disable: function () {
            if (this.model.enabled) {
                this.model.enabled = false;
                this._outerWrapper.addClass("e-disable").attr({ "aria-disabled": true });
                if (this._interval != null)
                    this._setPause();
            }
        },
        /**
        * This method is used to move to the next slide from the current slide. If the current slide is the last slide, then the first slide will be treated as the next slide.
		* @alias slideNext
		* @return jQuery
		* @example 
		 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
		* //initialize the Rotator object
		* $("#sliderContent").ejRotator();
		*	var slideObj = $("#sliderContent").data("ejRotator");
		*	//Moves to the next slide.
		*	slideObj.slideNext();
		 * &lt;/script&gt;
          * @example 
        * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
       	* $("#sliderContent").ejRotator();
       * //Moves to the next slide.
       *  $("#sliderContent").ejRotator("slideNext");
      * &lt;/script&gt;
		* @memberof ejRotator
		* @instance
        */
        slideNext: function () {
            if (this.model.enabled)
                this._nextAction();
        },
        /**
        * This method is used to move to the previous slide from the current slide. If the current slide is the first slide, then the last slide will be treated as the previous slide.
		* @alias slidePrevious
		* @return jQuery
		* @example 
		 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
		* //initialize the Rotator object
			* $("#sliderContent").ejRotator();
		*	var slideObj = $("#sliderContent").data("ejRotator");
		*	//Moves to the previous slide.
		*	slideObj.slidePrevious();
		* &lt;/script&gt;
            * @example 
        * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
       	* $("#sliderContent").ejRotator();
       * //Moves to the previous slide.
       *  $("#sliderContent").ejRotator("slidePrevious");
      * &lt;/script&gt;
		* @memberof ejRotator
		* @instance
        */
        slidePrevious: function () {
            if (this.model.enabled)
                this._prevAction();
        },
        /**
        * This method is used to move slides continuously (or start autoplay) in the specified autoplay direction.
		* @alias play
		* @return jQuery
		* @example 
		 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
		* //initialize the Rotator object
		* $("#sliderContent").ejRotator();
		*	var slideObj = $("#sliderContent").data("ejRotator");
		*	//To Starts auto play.
		*	slideObj.play();
		  * &lt;/script&gt;
        * @example 
        * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
       	* $("#sliderContent").ejRotator();
       *	//To Starts auto play.
       *  $("#sliderContent").ejRotator("play");
      * &lt;/script&gt;
		* @memberof ejRotator
		* @instance
        */
        play: function () {
            if (this._interval == null)
                this._autoPlay();
        },
        /**
        * This method is used to pause autoplay.
		* @alias pause
		* @return jQuery
		* @example 
		 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
		* //initialize the Rotator object
		* $("#sliderContent").ejRotator();
		*	var slideObj = $("#sliderContent").data("ejRotator");
		*	//To Pauses auto play.
		*	slideObj.pause();	
        * &lt;/script&gt;
         * @example 
        * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
       	* $("#sliderContent").ejRotator();
       *	//To Pause auto play.
       *  $("#sliderContent").ejRotator("pause");
       * &lt;/script&gt;
		* @memberof ejRotator
		* @instance
        */
        pause: function () {
            if (this._interval != null)
                this._setPause();
        },
        /**
        * This method is used to get the current slide index.
		* @alias getIndex
		* @return number
		* @example 
		 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
		* //initialize the Rotator object
		* $("#sliderContent").ejRotator();
		*	var slideObj = $("#sliderContent").data("ejRotator");
		*	// Gets the index value of the current slide.
		*	slideObj.getIndex();
		* &lt;/script&gt;
        * @example 
        * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
       	* $("#sliderContent").ejRotator();
       *	// Gets the index value of the current slide.
       *  $("#sliderContent").ejRotator("getIndex");
       * &lt;/script&gt;
		* @memberof ejRotator
		* @instance
        */
        getIndex: function () {
            var index, count, display = "", i;
            if (this.model.displayItemsCount > 1) {
                index = Math.round(-Math.round(this.element.position()[this.displayCss]) / this._liSize); index--;
                count = this._liCount - (this.model.displayItemsCount * 2);
                index = index - (this.model.displayItemsCount - 1);
                for (i = 0; i < this.model.displayItemsCount ; i++) {
                    if (index < count) {
                        display += "  " + index.toString(); +" ";
                        index++;
                    }
                    else {
                        index = 0; i--;
                    }
                }
                return display;
            }
            else
                return this._findActive();
        },
        /**
        * This method is used to move a slide to the specified index.
		* @alias getIndex
		* @return jQuery
		* @param {number} index  index of an slide
		* @example 
		 * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
		* //initialize the Rotator object
		 * $("#sliderContent").ejRotator();
		*	var slideObj = $("#sliderContent").data("ejRotator");
		*	// Moves the slide to the specified index.
		*	slideObj.gotoIndex(3);
		*  &lt;/script&gt;
        *  @example 
        * &lt;ul id="sliderContent"&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/nature.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/bird.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/sculpture.jpg"/&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/seaview.jpg" /&gt;&lt;/li&gt;
   * &lt;li&gt;&lt;img src="../images/rotator/snowfall.jpg"/&gt;&lt;/li&gt;
   *&lt;/ul&gt;
    * &lt;script&gt;
       	* $("#sliderContent").ejRotator();
       *	// Moves the slide to the specified index.
       *  $("#sliderContent").ejRotator("gotoIndex",3);
       * &lt;/script&gt;
		* @memberof ejRotator
		* @instance
        */
        gotoIndex: function (index) {
            var btnStatus = this._autoButton != null ? (this._autoButton.hasClass("play") ? false : true) : (this.model.enableAutoPlay ? true : false);
            if (this._interval != null)
                this._setPause();
            this._removeActiveItem();
            if (this.model.showThumbnail) this._changeThumbControl(index);
            this._setActiveItem(index);
            this._moveSlideContent(this.element.position()[this.displayCss], -((this.model.displayItemsCount * this._liSize) + (index * this.model.navigateSteps * this._liSize)), index, btnStatus);
        },
    })
    /**
    * Enum for pager position	 
    * @enum {string}
    * @global 
    */
    ej.Rotator.PagerPosition = {
        /**  Pager is positioned at the top-left corner of an Item. */
        TopLeft: "topleft",
        /**  Pager is positioned at the top-left corner of an Item. */
        TopRight: "topright",
        /**  Pager is positioned at the top-right corner of an Item. */
        BottomLeft: "bottomleft",
        /**  Pager is positioned at the bottom-left corner of an Item. */
        BottomRight: "bottomright",
        /**  Pager is positioned at the bottom-right corner of an Item. */
        TopCenter: "topCenter",
        /**  Pager is positioned outside an Item. */
        Outside: "outside"
    };

})(jQuery, Syncfusion);;