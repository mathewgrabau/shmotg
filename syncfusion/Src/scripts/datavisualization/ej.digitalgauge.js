/*!
*  filename: ej.digitalgauge.js
*  version : 12.2.0.42
*  Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

/**
* @fileOverview Plugin to style the Html Button elements
* @copyright Copyright Syncfusion Inc. 2001 - 2014. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
* @version 12.1 
* @author <a href="mailto:licensing@syncfusion.com">Syncfusion Inc</a>
*/


(function ($, ej, undefined) {
    // Example plugin creation code
    // ejSample is the plugin name 
    // "ej.Sample" is "namespace.className" will hold functions and properties
    /**
    * @namespace ej
    * @classdesc The Digital gauge  can be easily configured to the DOM element, such as div. you can create a digital gauge with a highly customizable look and feel.
    * @class ejDigitalGauge
    * @param {object} options - For seting the Digital gauge    
    * @requires jQuery.js
    * @requires jquery.easing.js
    * @requires ej.common.all.js
    * @requires excanvas.js
    * @example 
    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
    * &lt;script&gt;
    * $('#DigitalCore').ejDigitalGauge();         
    * &lt;/script&gt;
    * @remarks
    * excanvas.js need to add for IE8 
    */



    ej.widget({ "ejDigitalGauge": "ej.datavisualization.DigitalGauge" }, {
        // widget element will be automatically set in this
        element: null,
        // user defined model will be automatically set in this
        model: null,
        validTags: ["div", "span"],
        _rootCSS: "e-digitalgauge",
        // default model
        defaults: /** @lends ejDigitalGauge# */{
            /**		
            * Specifies the segmentData for the DigitalGauge.
            */

            segmentData: {
                "0": [0, 1, 2, 3, 4, 5, 14, 15], "1": [1, 2], "2": [0, 14, 1, 6, 8, 4, 3, 15], "3": [0, 1, 2, 3, 6, 8, 14, 15], "4": [1, 2, 5, 6, 8], "5": [0, 2, 3, 5, 6, 8, 14, 15], "6": [0, 2, 3, 4, 5, 6, 8, 14, 15],
                "7": [0, 1, 2, 14], "8": [0, 1, 2, 3, 4, 5, 6, 8, 14, 15], "9": [0, 1, 2, 3, 5, 6, 8, 14, 15], "A": [0, 1, 2, 4, 5, 6, 8, 14], "B": [0, 1, 2, 3, 7, 9, 8, 14, 15], "C": [0, 3, 4, 5, 14, 15],
                "D": [0, 1, 2, 3, 7, 9, 14, 15], "E": [0, 3, 4, 5, 6, 8, 14, 15], "F": [0, 4, 5, 6, 8, 14], "G": [0, 2, 3, 4, 5, 8, 14, 15], "H": [1, 2, 4, 5, 6, 8], "I": [0, 3, 7, 9, 14, 15],
                "J": [1, 2, 3, 4, 15], "K": [4, 5, 6, 10, 11], "L": [3, 4, 5, 15], "M": [1, 2, 4, 5, 10, 13], "N": [1, 2, 4, 5, 11, 13], "O": [0, 1, 2, 3, 4, 5, 14, 15], "P": [0, 1, 4, 5, 6, 8, 14],
                "Q": [0, 1, 2, 3, 4, 5, 11, 14, 15], "R": [0, 1, 4, 5, 6, 8, 11, 14], "S": [0, 2, 3, 5, 6, 8, 14, 15], "T": [0, 7, 9, 14], "U": [1, 2, 3, 4, 5, 15], "V": [4, 5, 10, 12], "W": [1, 2, 4, 5, 11, 12],
                "X": [10, 11, 12, 13], "Y": [1, 5, 6, 7, 8], "Z": [0, 3, 10, 12, 14, 15]
            },
            /**		
            * Specifies the matrixSegmentData for the DigitalGauge.
            */
            matrixSegmentData: {
                "1": [0, 3, 0, 4, 1, 1, 1, 2, 1, 3, 1, 4, 2, 3, 2, 4, 3, 3, 3, 4, 4, 3, 4, 4, 5, 3, 5, 4, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "2": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 1, 5, 1, 6, 2, 5, 2, 6, 3, 4, 3, 5, 4, 3, 4, 2, 5, 2, 5, 1, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "3": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 1, 5, 1, 6, 2, 5, 2, 6, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 5, 4, 6, 5, 5, 5, 6, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5],
                "4": [0, 3, 0, 4, 0, 5, 1, 2, 1, 3, 1, 4, 1, 5, 2, 1, 2, 2, 2, 4, 2, 5, 3, 0, 3, 1, 3, 4, 3, 5, 4, 0, 4, 1, 4, 2, 4, 3, 4, 4, 4, 5, 4, 6, 5, 4, 5, 5, 6, 4, 6, 5],
                "5": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 5, 4, 6, 5, 5, 5, 6, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "6": [0, 3, 0, 4, 0, 5, 0, 6, 1, 2, 1, 3, 2, 1, 2, 2, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 4, 3, 4, 6, 4, 7, 5, 2, 5, 3, 5, 6, 5, 7, 6, 3, 6, 4, 6, 5, 6, 6],
                "7": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 1, 6, 1, 7, 2, 5, 2, 6, 3, 4, 3, 5, 4, 3, 4, 4, 5, 2, 5, 3, 6, 1, 6, 2],
                "8": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "9": [0, 2, 0, 3, 0, 4, 0, 5, 1, 1, 1, 2, 1, 5, 1, 6, 2, 1, 2, 2, 2, 4, 2, 5, 2, 6, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 5, 4, 6, 5, 5, 5, 6, 6, 2, 6, 3, 6, 4, 6, 4, 6, 5],
                "0": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "a": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 6, 1, 7, 2, 6, 2, 7, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                "b": [0, 1, 0, 2, 1, 1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 4, 3, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "c": [1, 3, 1, 4, 1, 5, 1, 6, 2, 2, 2, 3, 3, 1, 3, 2, 4, 1, 4, 2, 5, 2, 5, 3, 6, 3, 6, 4, 6, 5, 6, 6],
                "d": [0, 6, 0, 7, 1, 6, 1, 7, 2, 6, 2, 7, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 3, 7, 4, 1, 4, 2, 4, 5, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                "e": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 5, 1, 5, 2, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                "f": [0, 4, 0, 5, 0, 6, 0, 7, 1, 3, 1, 4, 2, 3, 2, 4, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 3, 7, 4, 3, 4, 4, 5, 3, 5, 4, 6, 3, 6, 4],
                "g": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 3, 7, 4, 6, 4, 7, 5, 6, 5, 7, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "h": [0, 1, 0, 2, 1, 1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 4, 3, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 1, 6, 2, 6, 6, 6, 7],
                "i": [0, 3, 0, 4, 2, 1, 2, 2, 2, 3, 2, 4, 3, 3, 3, 4, 4, 3, 4, 4, 5, 3, 5, 4, 6, 3, 6, 4],
                "j": [1, 5, 1, 6, 2, 5, 2, 6, 3, 5, 3, 6, 4, 1, 4, 2, 4, 5, 4, 6, 5, 1, 5, 2, 5, 5, 5, 6, 6, 2, 6, 3, 6, 4, 6, 5],
                "k": [0, 1, 0, 2, 1, 1, 1, 2, 1, 4, 1, 5, 2, 1, 2, 2, 2, 3, 2, 4, 3, 1, 3, 2, 3, 3, 4, 1, 4, 2, 4, 3, 4, 4, 4, 5, 5, 1, 5, 2, 5, 5, 5, 6, 6, 1, 6, 2, 6, 6, 6, 7],
                "l": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 5, 1, 6, 2, 5, 2, 6, 3, 5, 3, 6, 4, 5, 4, 6, 5, 5, 5, 6, 6, 5, 6, 6],
                "m": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 0, 1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 2, 0, 2, 1, 2, 3, 2, 4, 2, 6, 2, 7, 3, 0, 3, 1, 3, 3, 3, 4, 3, 6, 3, 7, 4, 0, 4, 1, 4, 3, 4, 4, 4, 6, 4, 7, 5, 0, 5, 1, 5, 3, 5, 4, 5, 6, 5, 7, 6, 0, 6, 1, 6, 3, 6, 4, 6, 6, 6, 7],
                "n": [1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 2, 0, 2, 1, 2, 2, 2, 6, 2, 7, 3, 0, 3, 1, 3, 6, 3, 7, 4, 0, 4, 1, 4, 6, 4, 7, 5, 0, 5, 1, 5, 6, 5, 7, 6, 0, 6, 1, 6, 6, 6, 7],
                "o": [1, 2, 1, 3, 1, 4, 1, 5, 2, 1, 2, 2, 2, 5, 2, 6, 3, 1, 3, 2, 3, 5, 3, 6, 4, 1, 4, 2, 4, 5, 4, 6, 5, 1, 5, 2, 5, 5, 5, 6, 6, 2, 6, 3, 6, 4, 6, 5],
                "p": [1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 2, 1, 2, 2, 2, 3, 2, 6, 2, 7, 3, 1, 3, 2, 3, 6, 3, 7, 4, 1, 4, 2, 4, 3, 4, 4, 4, 5, 4, 6, 5, 1, 5, 2, 6, 1, 6, 2],
                "q": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 1, 1, 1, 2, 1, 5, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 5, 3, 6, 3, 7, 4, 2, 4, 3, 4, 4, 4, 5, 4, 6, 4, 7, 5, 6, 5, 7, 6, 6, 6, 7],
                "r": [0, 1, 0, 3, 0, 4, 0, 5, 1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 2, 1, 2, 2, 2, 6, 3, 1, 3, 2, 4, 1, 4, 2, 5, 1, 5, 2, 6, 1, 6, 2],
                "s": [1, 2, 1, 3, 1, 4, 1, 5, 2, 1, 2, 2, 3, 1, 3, 2, 4, 3, 4, 4, 5, 4, 5, 5, 6, 1, 6, 2, 6, 3, 6, 4],
                "t": [0, 3, 0, 4, 1, 3, 1, 4, 2, 1, 2, 2, 2, 3, 2, 4, 2, 5, 2, 6, 3, 3, 3, 4, 4, 3, 4, 4, 5, 3, 5, 4, 6, 4, 6, 5, 6, 6, 6, 7],
                "u": [1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 5, 5, 6, 5, 7, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                "v": [1, 1, 1, 2, 1, 6, 1, 7, 2, 2, 2, 3, 2, 5, 2, 6, 3, 2, 3, 3, 3, 5, 3, 6, 4, 3, 4, 4, 4, 5, 5, 4, 5, 5, 6, 4],
                "w": [0, 0, 0, 1, 0, 6, 0, 7, 1, 0, 1, 1, 1, 6, 1, 7, 2, 0, 2, 1, 2, 3, 2, 4, 2, 6, 2, 7, 3, 0, 3, 1, 3, 3, 3, 4, 3, 6, 3, 7, 4, 0, 4, 1, 4, 3, 4, 4, 4, 6, 4, 7, 5, 0, 5, 1, 5, 2, 5, 3, 5, 4, 5, 5, 5, 6, 5, 7, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "x": [1, 1, 1, 2, 1, 6, 1, 7, 2, 2, 2, 3, 2, 5, 2, 6, 3, 3, 3, 4, 3, 5, 4, 3, 4, 4, 4, 5, 5, 2, 5, 3, 5, 5, 5, 6, 6, 1, 6, 2, 6, 6, 6, 7],
                "y": [1, 1, 1, 2, 1, 5, 1, 6, 2, 1, 2, 2, 2, 5, 2, 6, 3, 2, 3, 3, 3, 4, 3, 5, 4, 3, 4, 4, 5, 2, 5, 3, 6, 1, 6, 2],
                "z": [1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 2, 6, 2, 7, 3, 5, 3, 6, 4, 4, 4, 5, 5, 3, 5, 4, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                "A": [0, 3, 0, 4, 1, 2, 1, 3, 1, 4, 1, 5, 2, 2, 2, 3, 2, 4, 2, 5, 3, 1, 3, 2, 3, 5, 3, 6, 4, 1, 4, 2, 4, 3, 4, 4, 4, 5, 4, 6, 5, 1, 5, 2, 5, 5, 5, 6, 6, 0, 6, 1, 6, 6, 6, 7],
                "B": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 1, 3, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 4, 3, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "C": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 2, 0, 2, 1, 3, 0, 3, 1, 4, 0, 4, 1, 5, 1, 5, 2, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "D": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "E": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 5, 1, 5, 2, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "F": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 5, 1, 5, 2, 6, 1, 6, 2],
                "G": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 2, 0, 2, 1, 3, 0, 3, 1, 3, 4, 3, 5, 3, 6, 4, 0, 4, 1, 4, 6, 5, 1, 5, 2, 5, 6, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "H": [0, 1, 0, 2, 0, 6, 0, 7, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 1, 6, 2, 6, 6, 6, 7],
                "I": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 4, 2, 4, 3, 4, 4, 4, 5, 4, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                "J": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 5, 1, 6, 2, 5, 2, 6, 3, 5, 3, 6, 4, 1, 4, 2, 4, 5, 4, 6, 5, 1, 5, 2, 5, 5, 5, 6, 6, 2, 6, 3, 6, 4, 6, 5],
                "K": [0, 1, 0, 2, 0, 5, 0, 6, 1, 1, 1, 2, 1, 4, 1, 5, 2, 1, 2, 2, 2, 3, 2, 4, 3, 1, 3, 2, 3, 3, 4, 1, 4, 2, 4, 3, 4, 4, 5, 1, 5, 2, 5, 4, 5, 5, 6, 1, 6, 2, 6, 5, 6, 6],
                "L": [0, 1, 0, 2, 1, 1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 4, 1, 4, 2, 5, 1, 5, 2, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "M": [0, 1, 0, 2, 0, 6, 0, 7, 1, 1, 1, 2, 1, 3, 1, 5, 1, 6, 1, 7, 2, 1, 2, 2, 2, 4, 2, 6, 2, 7, 3, 1, 3, 2, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 1, 6, 2, 6, 6, 6, 7],
                "N": [0, 1, 0, 2, 0, 6, 0, 7, 1, 1, 1, 2, 1, 3, 1, 6, 1, 7, 2, 1, 2, 2, 2, 4, 2, 6, 2, 7, 3, 1, 3, 2, 3, 5, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 1, 6, 2, 6, 6, 6, 7],
                "O": [0, 2, 0, 3, 0, 4, 0, 5, 1, 1, 1, 2, 1, 5, 1, 6, 2, 0, 2, 1, 2, 6, 2, 7, 3, 0, 3, 1, 3, 6, 3, 7, 4, 0, 4, 1, 4, 6, 4, 7, 5, 1, 5, 2, 5, 5, 5, 6, 6, 2, 6, 3, 6, 4, 6, 5],
                "P": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 1, 3, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 5, 1, 5, 2, 6, 1, 6, 2],
                "Q": [0, 2, 0, 3, 0, 4, 0, 5, 1, 1, 1, 2, 1, 5, 1, 6, 2, 0, 2, 1, 2, 6, 2, 7, 3, 0, 3, 1, 3, 6, 3, 7, 4, 0, 4, 1, 4, 4, 4, 6, 4, 7, 5, 1, 5, 2, 5, 5, 5, 6, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                "R": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 1, 3, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 3, 3, 4, 3, 5, 3, 6, 4, 1, 4, 2, 4, 5, 5, 1, 5, 5, 6, 2, 6, 1, 6, 2, 6, 6],
                "S": [0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 1, 1, 1, 2, 2, 1, 2, 2, 3, 2, 3, 3, 3, 4, 3, 5, 4, 5, 4, 6, 5, 5, 5, 6, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "T": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 1, 4, 2, 4, 3, 4, 4, 4, 5, 4],
                "U": [0, 1, 0, 2, 0, 6, 0, 7, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 6, 3, 7, 4, 1, 4, 2, 4, 6, 4, 7, 5, 1, 5, 2, 5, 6, 5, 7, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6],
                "V": [0, 0, 0, 1, 0, 6, 0, 7, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 2, 3, 3, 3, 5, 3, 6, 4, 3, 4, 4, 4, 5, 4, 6, 5, 4, 5, 5, 6, 4],
                "W": [0, 1, 0, 2, 0, 6, 0, 7, 1, 1, 1, 2, 1, 6, 1, 7, 2, 1, 2, 2, 2, 6, 2, 7, 3, 1, 3, 2, 3, 6, 3, 7, 4, 1, 4, 2, 4, 4, 4, 6, 4, 7, 5, 1, 5, 2, 5, 3, 5, 5, 5, 6, 5, 7, 6, 1, 6, 2, 6, 6, 6, 7],
                "X": [0, 0, 0, 1, 0, 6, 0, 7, 1, 1, 1, 2, 1, 5, 1, 6, 2, 1, 2, 2, 2, 5, 2, 6, 3, 2, 3, 3, 3, 4, 3, 5, 4, 2, 4, 3, 4, 4, 4, 5, 5, 1, 5, 2, 5, 5, 5, 6, 6, 0, 6, 1, 6, 6, 6, 7],
                "Y": [0, 0, 0, 1, 0, 6, 0, 7, 1, 0, 1, 1, 1, 6, 1, 7, 2, 1, 2, 2, 2, 5, 2, 6, 3, 2, 3, 3, 3, 4, 3, 5, 4, 3, 4, 4, 5, 3, 5, 4, 6, 3, 6, 4],
                "Z": [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 1, 6, 1, 7, 2, 5, 2, 6, 3, 4, 3, 5, 4, 2, 4, 3, 5, 1, 5, 2, 6, 1, 6, 2, 6, 3, 6, 4, 6, 5, 6, 6, 6, 7],
                ",": [5, 3, 5, 4, 5, 5, 6, 4, 6, 5, 7, 3, 7, 4],
                ":": [1, 3, 1, 4, 1, 5, 2, 3, 2, 4, 2, 5, 4, 3, 4, 4, 4, 5, 5, 3, 5, 4, 5, 5],
                "%": [0, 6, 0, 7, 1, 1, 1, 2, 1, 5, 1, 6, 2, 1, 2, 2, 2, 4, 2, 5, 3, 3, 3, 4, 4, 2, 4, 3, 5, 1, 5, 2, 5, 4, 5, 5, 6, 0, 6, 1, 6, 4, 6, 5],
                "!": [0, 3, 0, 4, 0, 5, 1, 3, 1, 4, 1, 5, 2, 3, 2, 4, 2, 5, 3, 3, 3, 4, 3, 5, 4, 3, 4, 4, 4, 5, 5, 3, 5, 4, 5, 5, 7, 4],
                "(": [0, 2, 0, 3, 1, 1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 4, 1, 4, 2, 5, 1, 5, 2, 6, 1, 6, 2, 7, 2, 7, 3],
                ")": [0, 5, 0, 6, 1, 6, 1, 7, 2, 6, 2, 7, 3, 6, 3, 7, 4, 6, 4, 7, 5, 6, 5, 7, 6, 6, 6, 7, 7, 5, 7, 6],
                ".": [5, 3, 5, 4, 5, 5, 6, 3, 6, 4, 6, 5, 7, 3, 7, 4, 7, 5]
            },
            /**		
            * Specifies the frame of the Digital gauge.
            * @default
            * @alias ejDigitalGauge#frame
            * @type {object}
            * @example  
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({ frame:{backgroundImageUrl: null, innerWidth:6, outerWidth:10}});
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
			* @instance
            */
            frame: {
                /**		
                * Specifies the url of an image to be displayed as background of the Digital gauge.
                * @default null
                * @alias ejDigitalGauge#frame->backgroundImageUrl
                * @type {string}
                * @example  
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({frame:{ backgroundImageUrl: "styles\images\Car.png" }});
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
			    * @instance
                */
                backgroundImageUrl: null,
                /**		
                * Specifies the inner width for the frame, when the background image has been set for the Digital gauge..
                * @default 6
                * @alias ejDigitalGauge#frame->innerWidth
                * @type {number}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({frame:{ innerWidth: 30 }});
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
			    * @instance
                */
                innerWidth: 6,
                /**		
                * Specifies the outer width of the frame, when the background image has been set for the Digital gauge.
                * @default 10
                * @alias ejDigitalGauge#frame->outerWidth
                * @type {number}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({frame: { outerWidth: 30 } });
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
			    * @instance
                */
                outerWidth: 10,
            },
            /**		
            * Specifies the height of the DigitalGauge.
            * @default 150
            * @alias ejDigitalGauge#height
            * @type {number}
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({ height: 60 }); 
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
			* @instance
            */
            height: 150,
            /**		
            * Specifies the width for the Digital gauge.
            * @default 400
            * @alias ejDigitalGauge#width
            * @type {number}
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({ width: 300 }); 
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
			* @instance
            */
            width: 400,
            /**		
            * Specifies the resize option of the DigitalGauge.
            * @default false
            * @alias ejDigitalGauge#enableResize
            * @type {boolean}
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({ enableResize: true }); 
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            enableResize: false,
            /**		
            * Specifies the themes for the Digital gauge. See {@link Themes} 
            * @default flatlight
            * @alias ejDigitalGauge#themes
            * @type {string}
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({ themes: "flatlight" });
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            themes: "flatlight",
            /**		
            * Specifies the items for the DigitalGauge.
            * @default null
            * @alias ejDigitalGauge#items
            * @type {object}
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({width: 500});
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            items: null,
            /**     
            * Triggers when the gauge is initialized.
            * @event
            * @name ejDigitalGauge#init 	
            * @param {Object} args.object  returns the object of the gauge.
            * @param {boolean} args.cancel  returns the cancel option value
            * @param {Object} args.items   returns the all the options of the items.
            * @param {Object} args.context returns the context element
            * @param {Object} args.model   returns the gauge model
            * @param {String} args.type    returns the name of the event
            * @param {}
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({
            *    init: function (args) {}
            * });      
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            init: null,
            /**     
            * Triggers when the gauge is start to load.
            * @event
            * @name ejDigitalGauge#load 	
            * @param {Object} args.object  returns the object of the gauge.
            * @param {boolean} args.cancel  returns the cancel option value
            * @param {Object} args.items   returns the all the options of the items.
            * @param {Object} args.context returns the context element
            * @param {Object} args.model   returns the gauge model
            * @param {String} args.type    returns the name of the event
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({
            *    load: function (args) {}
            * });      
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            load: null,
            /**     
            * Triggers when the gauge render is completed.
            * @event
            * @name ejDigitalGauge#renderComplete 	
            * @param {Object} args.object  returns the object of the gauge.
            * @param {boolean} args.cancel  returns the cancel option value
            * @param {Object} args.items   returns the all the options of the items.
            * @param {Object} args.context returns the context element
            * @param {Object} args.model   returns the gauge model
            * @param {String} args.type    returns the name of the event
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({
            *    renderComplete: function (args) {}
            * });       
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            renderComplete: null,
            /**     
            * Triggers when the gauge item rendering.
            * @event
            * @name ejDigitalGauge#itemRendering 	
            * @param {Object} args.object  returns the object of the gauge.
            * @param {boolean} args.cancel  returns the cancel option value
            * @param {Object} args.items   returns the all the options of the items.
            * @param {Object} args.context returns the context element
            * @param {Object} args.model   returns the gauge model
            * @param {String} args.type    returns the name of the event
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({
            *    itemRendering: function (args) {}
            * });      
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            itemRendering: null,
            /**		
            * Specifies the value to the DigitalGauge.
            * @default text      
            * @alias ejDigitalGauge#value
            * @type {string}
            * @example 
            * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
            * &lt;script&gt;
            * $("#DigitalCore").ejDigitalGauge({items: [{ value: "Welcome" }] });
            * &lt;/script&gt;
            * @memberof ejDigitalGauge
            * @instance
            */
            value: "text"
        },

        /**
        * Specify the data types for default properties 
        * @private
        */
        dataTypes: {
            segmentData: "data",
            matrixSegmentData: "data",
            items: "array"
        },

        /**
        * To configure set values of the Digital Gauge		
        * @private
        */
        _setValues: function () {
            this.gaugeEl = this.element;
            this.segmentCount = null;
            this.contextEl = null;
            this.style = null;
            this._value = null;
            this.location = null;
            this.canvasEl = null;
            this.segement16X = null;
            this.segment16Y = null;
            this.segmentHeight = null;
            this.segmentAngle = null;
            this.startX = 5;
            this.startY = 5;
            this.gradient = null;
            this.itemIndex = null;
            this.characterSpace = null;
            this.outerImage = null;
            this.radius = null;
            this.frameOuterLocation = null;
            this.frameInnerLocation = null;
            this.glassFrameLocation = null;
            this.glassFrameStyle = null;
            this.frameOuterStyle = null;
            this.character = null;
            this.frameInnerStyle = null;
            this._itemInitialize();
        },
        observables: ["value"],
        value: ej.util.valueFunction("value"),


        /**
        * To destroy the digital gauge 
        * @alias destroy
        * @return jQuery
        * @example 
        * &lt;div id="DigitalGauge1"&gt;Digital Gauge&lt;/div&gt; <br> 
        * &lt;script&gt;
        * $("#DigitalGauge1").ejDigitalGauge();
        * var gphObj = $("#DigitalGauge1").data("ejDigitalGauge");
        * gphObj.destroy();
        * &lt;/script&gt;
        *@memberof ejDigitalGauge
        * @instance
        */
        _destroy: function () {
            this.element.empty().removeClass("e-widget");
        },
        /**
        * To configure the properties at runtime using SetModel		
        * @private
        */
        _setModel: function (options) {
            var option;
            for (option in options) {
                switch (option) {
                    case "height":
                        this.model.height = options[option];
                        break;
                    case "width":
                        this.model.width = options[option];
                        break;
                    case "items":
                        this.model.items = options[option];
                        this._itemInitialize();
                        break;
                    case "frame":
                        $.extend(this.model.frame, options[prop]);
                    case "themes": this.model.themes = options[option]; break;
                    case "value":
                        for (var i = 0; this.model.items[i] != null; i++)
                            this.model.items[i].value = this.value();
                }
            }
            this.refresh();
        },
        /**
        * To initialize the Digital Gauge		
        * @private
        */
        _init: function () {
            this._setValues();
            this._trigger("load");
            this._setTheme();
            this._initialize();
            this._onWindowResize();
        },
        /**
        * To window resize for the Digital Gauge		
        * @private
        */
        _onWindowResize: function () {
            if (this.model.enableResize) {
                proxy = this;
                if (!this.isDevice())
                    this._on($(window), "resize", proxy.resizeCanvas);
                else
                    this._on($(window), "orientationchange", proxy.resizeCanvas);
            }
        },
        /**
        * To check the Device of the Digital Gauge rendered	
        * @private
        */
        isDevice: function () {
            return (/mobile|tablet|android|kindle/i.test(navigator.userAgent.toLowerCase()));
        },
        /**
        * To set theme for the Digital Gauge		
        * @private
        */
        _setTheme: function () {
            selectedThem = ej.datavisualization.DigitalGauge.Themes[this.model.themes];
            this._setThemeColors(selectedThem);
        },
        /**
        * To apply theme colors to the selected theme for the Digital Gauge		
        * @private
        */
        _setThemeColors: function (selectedThem) {
            var result = [], jsonObj = ej.datavisualization.DigitalGauge.Themes;
            for (var name in jsonObj) {
                result.push(name);
            }
            for (var th = 0; th < result.length; th++) {
                for (var i = 0; i < this.model.items.length; i++) {
                    this.model.items[i].segmentSettings.color = (ej.isNullOrUndefined(this.model.items[i].segmentSettings.color) || this.model.items[i].segmentSettings.color == jsonObj[result[th]].items.segmentSettings.color) ? selectedThem.items.segmentSettings.color : this.model.items[i].segmentSettings.color;
                    this.model.items[i].shadowColor = (!this.model.items[i].shadowColor || this.model.items[i].shadowColor == jsonObj[result[th]].items.shadowColor) ? selectedThem.items.shadowColor : this.model.items[i].shadowColor;
                    this.model.items[i].textColor = (!this.model.items[i].textColor || this.model.items[i].textColor == jsonObj[result[th]].items.textColor) ? selectedThem.items.textColor : this.model.items[i].textColor;
                }
            }
        },
        /**
        * To initialize the Digital Gauge		
        * @private
        */
        _initialize: function () {
            if (this.model.init)
                this._clientSideOnInit();
            this._initObject(this);
            if (this.model.load)
                this._clientSideOnLoad();
            if (this.model.frame.backgroundImageUrl != null)
                this._drawCustomImage(this, this.model.frame.backgroundImageUrl);
            else
                this._renderItems();
            if (this.model.renderComplete)
                this._clientSideOnRenderComplete();
        },
        /**
        * To initialize the items of Digital Gauge		
        * @private
        */
        _itemInitialize: function () {
            var proxy = this;
            if (this.model.items != null) {
                $.each(this.model.items, function (index, element) {
                    var obj = proxy._sendDefaultItem();
                    $.extend(true, obj, element);
                    $.extend(true, element, obj);
                });
            }
            else {
                this.model.items = [this._sendDefaultItem()];
            }
        },
        /**
        * To set the default items values for the Digital Gauge		
        * @private
        */
        _sendDefaultItem: function () {
            var defaultItems;
            return defaultItems = {
                /**		
                * Specifies the CharacterCount value for the DigitalGauge.
                * @name ejDigitalGauge#items->characterSettings
                * @default Object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                * @type {Object}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{ characterSettings: {count: 4} }] });
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                characterSettings: {
                    /**		
                    * Specifies the CharacterCount value for the DigitalGauge.
                    * @name ejDigitalGauge#items->characterSettings->count
                    * @default 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ characterSettings: {count: 4} }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    count: 4,
                     /**		
                    * Specifies the CharacterCount value for the DigitalGauge.
                    * @name ejDigitalGauge#items->characterSettings->opacity
                    * @default 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ characterSettings: {opacity: 1} }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    opacity: 1,
                    /**		
                   * Specifies the value for spacing between the characters
                   * @name ejDigitalGauge#items->characterSettings->spacing
                   * @default 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                   * @type {number}
                   * @example 
                   * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                   * &lt;script&gt;
                   * $("#DigitalCore").ejDigitalGauge({items: [{ characterSettings: {spacing: 3} }] });
                   * &lt;/script&gt; 
                   * @memberof ejDigitalGauge
                   * @instance
                   */
                    spacing: 2,
                    /**		
                    * Specifies the character type for the text to be displayed.  See {@link CharacterType}
                    * @name ejDigitalGauge#items->characterSettings->type
                    * @default ej.datavisualization.DigitalGauge.CharacterType.EightCrossEightDotMatrix                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {enum}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{characterSettings:{ type: "eightcrosseightdotmatrix" }}] });
                    * &lt;/script&gt; 
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    type:ej.datavisualization.DigitalGauge.CharacterType.EightCrossEightDotMatrix,
                },
                /**		
                * Enable/Disable the custom font to be applied to the text in the gauge. <br>
                * @name ejDigitalGauge#items->enableCustomFont
                * @default false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                * @type {boolean}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{ enableCustomFont: true }] });
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                enableCustomFont: false,
                /**		
                * Set the length for the text segments. <br>
                * @name ejDigitalGauge#items->segmentSettings
                * @default Object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                * @type {Object}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{ segmentSettings: {length: 2} }] });
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                segmentSettings: {
                    /**		
                    * Set the length for the text segments. <br>
                    * @name ejDigitalGauge#items->segmentSettings->color
                    * @default null                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {string}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ segmentSettings: {color: "#FF1F2F"} }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    color: null,
                    /**		
                    * Set the length for the text segments. <br>
                    * @name ejDigitalGauge#items->segmentSettings->gradient
                    * @default null                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {Object}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ segmentSettings: {gradient: { colorInfo: [{ colorStop: 0, color: "Green" }, { colorStop: 1, color: "Yellow" }] } } }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    gradient:null,
                     /**		
                    * Set the length for the text segments. <br>
                    * @name ejDigitalGauge#items->segmentSettings->length
                    * @default 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ segmentSettings: {length: 2} }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    length: 2,
                    /**		
                    * Set the length for the text segments. <br>
                    * @name ejDigitalGauge#items->segmentSettings->opacity
                    * @default 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ segmentSettings: {opacity: 2} }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    opacity: 0,
                    /**		
                    * Set the length for the text segments. <br>
                    * @name ejDigitalGauge#items->segmentSettings->spacing
                    * @default 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ segmentSettings: {spacing: 1} }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    spacing: 1,
                    /**		
                    * Set the length for the text segments. <br>
                    * @name ejDigitalGauge#items->segmentSettings->width
                    * @default 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{ segmentSettings: {width: 1} }] });
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    width: 1,
                },
                /**		
                * Set the value for enabling/disabling the blurring effect for the shadows of the text <br>
                * @name ejDigitalGauge#items->shadowBlur
                * @default 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                * @type (number)
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{ shadowBlur:  1 }] });
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                shadowBlur: 0,
                /**		
                * Set the x offset value for the shadow of the text, indicating the location where it needs to be displayed. <br>
                * @name ejDigitalGauge#items->shadowOffsetX
                * @default 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                * @type (number)
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{ shadowOffsetX:  2 }] });
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                shadowOffsetX: 1,
                /**		
                * Set the y offset value for the shadow of the text, indicating the location where it needs to be displayed. <br>
                * @name ejDigitalGauge#items->shadowOffsetY
                * @default 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                * @type (number)
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{ shadowOffsetY:  2 }] });
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                shadowOffsetY: 1,
                /**		
                * Set the alignment of the text that is displayed within the gauge.See {@link TextAlign}       
                * @name ejDigitalGauge#items->textAlign		
                * @default "left"
                * @type {string}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{ textAlign:  "right" }] });
                * &lt;/script&gt; 
                * @memberof ejDigitalGauge
                * @instance
                */
                textAlign: "left",
                /**		
                * Set the specific font for the text, when the enableCustomFont is set to true <br>
                * @name ejDigitalGauge#items->font
                * @default Object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                * @type {Object}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{enableCustomFont: true ,font: { size: "12px",fontFamily: "Segou",fontStyle: "bold"}}]});
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                font: /** @lends ejDigitalGauge# */{
                    /**		
                    * Set the font size value <br>
                    * @name ejDigitalGauge#items->font->size
                    * @default 11px                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {string}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{enableCustomFont: true,font: { size: "18px"}}]});
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    size: "11px",
                    /**		
                    * Set the font family value <br>
                    * @name ejDigitalGauge#items->font->fontFamily
                    * @default Arial                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {string}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{enableCustomFont: true ,font: { fontFamily: "Segou"}}]});
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    fontFamily: "Arial",
                    /**		
                    * Set the font style for the font. See {@link FontStyle}<br>
                    * @name ejDigitalGauge#items->font->fontStyle
                    * @default italic                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    * @type {enum}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{enableCustomFont: true ,font: { fontStyle: "bold" }}]});
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    fontStyle: "italic"
                },
                /**		
                * Set the location for the text, where it needs to be placed within the gauge. <br>
                * @name ejDigitalGauge#items->position
                * @default Object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                * @type {object}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({items: [{position: { x: 10, y: 20 } }]});
                * &lt;/script&gt;
                * @memberof ejDigitalGauge
                * @instance
                */
                position: {
                    /**		
                    * Set the horizontal location for the text, where it needs to be placed within the gauge. <br>
                    * @name ejDigitalGauge#items->position->x
                    * @default 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{position : { x: 10,y:0} }]});
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    x: 0,
                    /**		
                    * Set the vertical location for the text, where it needs to be placed within the gauge. <br>
                    * @name ejDigitalGauge#items->position->y
                    * @default 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    * @type {number}
                    * @example 
                    * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                    * &lt;script&gt;
                    * $("#DigitalCore").ejDigitalGauge({items: [{position: { x:0,y: 20 } }]});
                    * &lt;/script&gt;
                    * @memberof ejDigitalGauge
                    * @instance
                    */
                    y: 0
                },
                /**		
                * Specifies the color of the text shadow.
                * @name ejDigitalGauge#items->shadowColor
                * @default null
                * @type {string}
                * @example 
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({ items: [{shadowColor: "#FF1F2F" }]});
                * &lt;/script&gt; 
                * @memberof ejDigitalGauge
                * @instance
                */
                shadowColor: null,
                /**		
                * Specifies the color of the text.
                * @name ejDigitalGauge#items->textColor
                * @default null
                * @type {string}
                * @example  
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({ items: [{textColor: "#FF1F2F" }]});
                * &lt;/script&gt;  
                * @memberof ejDigitalGauge
                * @instance
                */
                textColor: null,
                /**		
                * Specifies the text value.
                * @name ejDigitalGauge#items->value
                * @default null
                * @type {string}
                * @example  
                * &lt;div id="DigitalCore"&gt;&lt;/div&gt; <br> 
                * &lt;script&gt;
                * $("#DigitalCore").ejDigitalGauge({ items: [{value: "Welcome" }]});
                * &lt;/script&gt;  
                * @memberof ejDigitalGauge
                * @instance
                */
                value: null
            };
        },
        /**
        * To init the object for the Digital Gauge		
        * @private
        */
        _initObject: function (element) {
            this.element.addClass("e-widget");
            element.gaugeEl = this.element;
            for (var i = 0; this.model.items[i] != null; i++) {
                if (this.model.items[i].value == null)
                    this.model.items[i].value = this.value();
            }
            if (element.canvasEl)
                element.canvasEl.remove();
            else
                element.canvasEl = $("<canvas></canvas>");
            element.gaugeEl.append(element.canvasEl);
            element.canvasEl.attr("role", "presentation");
            initialDivWidth = element.gaugeEl.width();
            initialDivHeight = element.gaugeEl.height();
            element.canvasEl[0].setAttribute("width", element.model.width);
            element.canvasEl[0].setAttribute("height", element.model.height);
            element.centerX = element.canvasEl[0].width / 2;
            element.centerY = element.canvasEl[0].height / 2;
            var elem = element.canvasEl[0];
            if (typeof window.G_vmlCanvasManager != "undefined") {
                elem = window.G_vmlCanvasManager.initElement(elem);
            }
            if (!elem || !elem.getContext) {
                return;
            }
            element.contextEl = element.canvasEl[0].getContext("2d");
        },
        /**
        * To draw the custom image for the Digital Gauge		
        * @private
        */
        _drawCustomImage: function (element, imageUrl) {
            var image = new Image();
            var self = this;
            $(image).load(function () {
                element.contextEl.drawImage(this, 0, 0, element.model.width, element.model.height);
                if (element.model.Scales != null)
                    element._drawScales();
                if (element.model.items != null)
                    element._renderItems();
            }).attr('src', imageUrl);
        },
        /**
        * To set the SegmentCount value to the Digital Gauge		
        * @private
        */
        _setSegmentCount: function (element) {
            switch (element) {
                case "sevensegment": this._SegmentCount = 7; break;
                case "fourteensegment": this._SegmentCount = 14; break;
                case "sixteensegment": this._SegmentCount = 16; break;
                case "eightcrosseightdotmatrix": this._SegmentCount = [8, 8]; break;
                case "eightcrosseightsquarematrix": this._SegmentCount = [8, 8]; break;
                default:
                    this._SegmentCount = 7;
            }

        },
        /**
        * To set the InnerPosition of the Digital Gauge		
        * @private
        */
        _setInnerPosition: function () {
            this.contextEl.save();
            this.contextEl.translate(this.model.frame.outerWidth + this.model.frame.innerWidth, this.model.frame.outerWidth + this.model.frame.innerWidth);
            this.bounds = {
                height: this.canvasEl[0].height - 2 * (this.model.frame.outerWidth + this.model.frame.innerWidth),
                width: this.canvasEl[0].width - 2 * (this.model.frame.outerWidth + this.model.frame.innerWidth)
            };
        },
        /**
        * To set the width to the Digital Gauge		
        * @private
        */
        _setWidth: function () {
            var characterCount = [];
            if (this.model.items != null) {
                var self = this;
                $.each(this.model.items, function (index, element) {
                    characterCount.push(element.characterSettings.count);
                });
            }
        },

        /**
        * Render the items for Digital Gauge		
        * @private
        */
        _renderItems: function () {
            if (this.model.items != null) {
                this._setInnerPosition();
                var self = this;
                $.each(this.model.items, function (index, element) {
                    self._setSegmentCount(element.characterSettings.type);
                    self.itemIndex = index;
                    self.canvasEl.attr("aria-label", element.value);
                    self._setShadow(index, element);
                    if (element.enableCustomFont)
                        self._setCustomFont(index, element);
                    else if (element.characterSettings.type.indexOf("matrix") != -1)
                        self._drawMatrixSegments(index, element);
                    else
                        self._drawSegments(index, element);
                });
            }
        },

        /**
        * To set the GradientColor to Digital Gauge		
        * @private
        */
        _setGradientColor: function (element, gradient, options) {
            var self = element;
            if (options.Name || typeof (options) === "string") {
                gradient.addColorStop(0, this._getColor(element, options));
                gradient.addColorStop(1, this._getColor(element, options));
            }
            else
                $.each(options, function (index, colorElement) {
                    gradient.addColorStop(colorElement.colorStop != NaN ? colorElement.colorStop : 0, typeof (colorElement.color) === "string" ? colorElement.color : this._getColor(element, colorElement.color));
                });
        },

        /**
        * To get the color of the Digital Gauge		
        * @private
        */
        _getColor: function (element, option) {
            if (typeof (option) === "string") {
                return option;
            }
            else {
                return ("rgba(" + option.R + ", " + option.G + "," + option.B + ", " + option.A / 255 + ")");
            }
        },

        /**
        * To draw the matrix segments to the Digital Gauge		
        * @private
        */
        _drawMatrixSegments: function (index, element) {
            var segmentXCollection = [], segmentCollection = [];
            if (element.value) {
                this._value = element.value.toString().split('');
                if (element.characterSettings.count < this._value.length)
                    element.characterSettings.count = this._value.length;
            }
            else
                this._value = "";
            this.radius = (element.characterSettings.type.indexOf("dot") != -1) ? (element.segmentSettings.length + element.segmentSettings.width) / 2 : element.segmentSettings.width / 2;
            var controlStartX = this.startX = (this.bounds.width - element.characterSettings.count * (this._SegmentCount[0] * (2 * this.radius) + element.characterSettings.spacing + this._SegmentCount[0] * element.segmentSettings.spacing)) * (element.position.x / 100);
            var controlStartY = this.startY = (this.bounds.height - (this._SegmentCount[1] * ((element.characterSettings.type.indexOf("dot") != -1) ? 2 * this.radius : element.segmentSettings.length) + this._SegmentCount[1] * element.segmentSettings.spacing)) * (element.position.y / 100);
            for (var character = 0; character < element.characterSettings.count; character++) {
                if (this._value) {
                    this.character = element.textAlign == "right" ? this._value[this._value.length - element.characterSettings.count + character] : this._value[character];
                    segmentCollection = this.model.matrixSegmentData[this.character];
                }
                if (character != 0) {
                    controlStartX = this.startX = this.startX + element.characterSettings.spacing + element.segmentSettings.spacing + (2 * this.radius);
                    this.startY = controlStartY;
                }
                for (var dotY = 0; dotY < this._SegmentCount[1]; dotY++) {
                    if (dotY != 0) {
                        this.startY = ((element.characterSettings.type.indexOf("dot") != -1) ? (2 * this.radius) : element.segmentSettings.length) + this.startY + element.segmentSettings.spacing;
                        this.startX = controlStartX;
                    }
                    if (segmentCollection) {
                        $.each(segmentCollection, function (index) {
                            if (index % 2 == 0) {
                                if (segmentCollection[index] > dotY)
                                    return false;
                                if (segmentCollection[index] == dotY)
                                    segmentXCollection.push(parseInt(segmentCollection[index + 1]));
                            }
                        });
                    }
                    for (var dotX = 0; dotX < this._SegmentCount[0]; dotX++) {
                        if (dotX != 0)
                            this.startX = this.startX + 2 * this.radius + element.segmentSettings.spacing;
                        if (element.characterSettings.type.indexOf("dot") != -1)
                            this.gradient = this.contextEl.createRadialGradient(0, 0, 0, 0, 0, this.radius);
                        else
                            this.gradient = this.contextEl.createLinearGradient(0, 0, element.segmentSettings.width, 0);
                        if (element.segmentSettings.gradient)
                            this._setGradientColor(this, this.gradient, element.segmentSettings.gradient.colorInfo);
                        this.location = { "startX": this.startX, "startY": this.startY };
                        this.style = {
                            "opacity": (segmentXCollection && ($.inArray(dotX, segmentXCollection)) != -1) ? element.characterSettings.opacity : element.segmentSettings.opacity,
                            "height": element.segmentSettings.length,
                            "width": element.segmentSettings.width,
                            "fillStyle": ((element.segmentSettings.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(this, element.segmentSettings.color)),
                            "skewX": element.SkewAngleX,
                            "skewY": element.SkewAngleX
                        };
                        if (this.model.itemRendering)
                            this._clientSideOnItemRendering(true, dotX, dotY);
                        if (element.characterSettings.type.indexOf("dot") != -1)
                            this._drawDot(this.location, this.style);
                        else
                            this._drawSquare(this.location, this.style);
                    }
                    segmentXCollection = [];
                }
            }
        },

        /**
        * Draw the segments of Digital Gauge		
        * @private
        */
        _drawSegments: function (index, element) {
            var segmentCollection = [], characterSpace, self = this;
            if (element.value) {
                this._value = element.value.toUpperCase().toString().split('');
                if (element.characterSettings.count < this._value.length)
                    element.characterSettings.count = this._value.length;
            }
            this.characterSpace = element.characterSettings.type == "sevensegment" ? 2 * element.segmentSettings.width : 4 * element.segmentSettings.width;
            this._renderSegmentCalculation(element);
            this.gradient = this.contextEl.createLinearGradient(0, 0, 0, element.segmentSettings.width);
            if (element.segmentSettings.color)
                this._setGradientColor(this, this.gradient, element.segmentSettings.color);
            else if (element.segmentSettings.gradient)
                this._setGradientColor(this, this.gradient, element.segmentSettings.gradient.colorInfo);
            //else
            //    this._setGradientColor(this, this.gradient, this.model.segmentColor);
            for (var character = 0; character < element.characterSettings.count; character++) {
                if (element.value)
                    segmentCollection = this.model.segmentData[element.textAlign == "right" ? this._value[this._value.length - element.characterSettings.count + character] : this._value[character]];
                for (var segment = 0; segment < this._SegmentCount; segment++) {
                    if (character != 0)
                        this.segment16X[segment] = this.segment16X[segment] + element.segmentSettings.length + this.characterSpace + element.characterSettings.spacing;
                    if (this._value)
                        this.character = element.textAlign == "right" ? this._value[this._value.length - element.characterSettings.count + character] : this._value[character]
                    this.location = { "startX": this.segment16X[segment], "startY": this.segment16Y[segment] };
                    this.style = {
                        "angle": this.angle[segment],
                        "fillStyle": this.gradient,
                        "isStroke": false,
                        "isFill": true,
                        "characterHeight": element.characterSettings.type == "sevensegment" ? element.segmentSettings.length : this.segmentHeight[segment],
                        "segmentWidth": element.segmentSettings.width,
                        "opacity": (segmentCollection && ($.inArray(segment, segmentCollection) != -1)) ? element.characterSettings.opacity : element.segmentSettings.opacity
                    };
                    if (this.model.itemRendering)
                        this._clientSideOnItemRendering(false, segment);
                    this._drawSegmentLayers(this.location, this.style);
                }
                this.value(element.value);
                segmentCollection = [];
            }
        },

        /**
        * To set the CustomFont style to Digital Gauge		
        * @private
        */
        _setCustomFont: function (index, element) {
            this.startX = (this.bounds.width - this._measureText(element.value, 0, this._getFontString(this, element.font)).width) * (element.position.x / 100);
            this.startY = (this.bounds.height - this._measureText(element.value, 0, this._getFontString(this, element.font)).height) * (element.position.y / 100);
            this.location = { "startX": this.startX, "startY": this.startY };
            this.style = { "font": this._getFontString(this, element.font), "text": element.value, "textColor": element.textColor ? ((element.textColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(this, element.textColor)) : ((element.segmentSettings.color == "transparent") ? "rgba(0,0,0,0)" : this._getColor(this, element.segmentSettings.color)) };
            if (this.model.itemRendering)
                this._clientSideOnItemRendering(false, segment);
            this._drawText(this.location, this.style);
        },

        /**
        * To get the Font String value of Digital Gauge		
        * @private
        */
        _getFontString: function (element, font) {
            return ((font.size == null) ? "11px" : font.size) + " " + font.fontFamily + " " + (font.fontStyle ? font.fontStyle : "");
        },

        /**
        * Rendering the SegmentCalculation of Digital Gauge		
        * @private
        */
        _renderSegmentCalculation: function (element) {
            var length = element.segmentSettings.length, width = element.segmentSettings.width;
            this.startX = (this.bounds.width - element.characterSettings.count * (length + this.characterSpace + element.characterSettings.spacing)) * (element.position.x / 100);
            this.startY = (this.bounds.height - 2 * length - width) * (element.position.y / 100);
            var tempLength = element.characterSettings.type == "sevensegment" ? length : length / 2;
            this.segment16X = [
                  this.startX + width / 2,
                  this.startX + length + 4 * width,
                  this.startX + length + 4 * width,
                  this.startX + width / 2,
                  this.startX,
                  this.startX,
                  this.startX + width / 2,
                  this.startX + tempLength + 2 * width,
                  this.startX + 2.5 * width + tempLength,
                  this.startX + tempLength + 2 * width,
                  this.startX + length + 2.5 * width,
                  this.startX + tempLength + 2.5 * width,
                  this.startX + tempLength + 1.5 * width,
                  this.startX + 1.5 * width,
                  this.startX + 5 * width / 2 + tempLength,
                  this.startX + 2.5 * width + tempLength
            ];
            this.segment16Y = [
                  this.startY,
                  this.startY,
                  this.startY + length + width,
                  this.startY + 2 * length + 2 * width,
                  this.startY + length + width,
                  this.startY,
                  this.startY + length + width,
                  this.startY + length + width,
                  this.startY + length + width,
                  this.startY,
                  this.startY + width,
                  this.startY + length + width,
                  this.startY + length + width,
                  this.startY + width,
                  this.startY,
                  this.startY + 2 * length + 2 * width
            ];
            this.segmentHeight = [
                  length / 2,
                  length,
                  length,
                  length / 2,
                  length,
                  length,
                  length / 2,
                  length,
                  length / 2,
                  length,
                  length,
                  length,
                  length,
                  length,
                  length / 2,
                  length / 2
            ];
            this.angle = [-90, 0, 0, -90, 0, 0, -90, 0, -90, 0, 27, -27, 27, -27, -90, -90];
            if (element.characterSettings.type == "sevensegment")
                this.segment16X[2] = this.segment16X[1] = this.startX + length + 2 * width;
            if (element.characterSettings.type == "fourteensegment")
                this.segmentHeight[3] = this.segmentHeight[0] = length + 2 * width;
        },

        /**
        * Drawing the Segment Layers of the Digital Gauge		
        * @private
        */
        _drawSegmentLayers: function (location, style) {
            this._contextOpenPath(style, this);
            this.contextEl.translate(location.startX, location.startY);
            this.contextEl.rotate(Math.PI * (style.angle / 180));
            this.contextEl.moveTo(0, 0);
            this.contextEl.lineTo(-style.segmentWidth, style.segmentWidth);
            this.contextEl.lineTo(-style.segmentWidth, style.characterHeight);
            this.contextEl.lineTo(0, style.characterHeight + style.segmentWidth);
            this.contextEl.lineTo(style.segmentWidth, style.characterHeight);
            this.contextEl.lineTo(style.segmentWidth, style.segmentWidth);
            this._contextClosePath(style, this);
        },

        /**
        * Drawing the Dot of the Digital Gauge		
        * @private
        */
        _drawDot: function (location, style) {
            this.contextEl.beginPath();
            this.contextEl.save();
            this.contextEl.translate(location.startX, location.startY);
            this.contextEl.fillStyle = style.fillStyle;
            this.contextEl.globalAlpha = style.opacity;
            this.contextEl.arc(0, 0, this.radius, 0, 2 * Math.PI, true);
            this.contextEl.fill();
            this.contextEl.closePath();
            this.contextEl.restore();
        },

        /**
        * To set the Shadow of the Digital Gauge		
        * @private
        */
        _setShadow: function (index, element) {
            this.contextEl.save();
            this.contextEl.shadowColor = ((element.shadowColor == "transparent") ? "rgba(0,0,0,0)" : this._getColor(this, element.shadowColor));
            this.contextEl.shadowOffsetY = element.shadowOffsetY;
            this.contextEl.shadowOffsetY = element.shadowOffsetX;
            this.contextEl.shadowBlur = element.shadowBlur;
        },

        /**
        * Drawing the Square to Digital Gauge		
        * @private
        */
        _drawSquare: function (location, style) {
            this.contextEl.beginPath();
            this.contextEl.save();
            this.contextEl.translate(location.startX, location.startY);
            // this.contextEl.setTransform(1, style.skewY, style.skewX, 1, location.startX, location.startY);
            this.contextEl.fillStyle = style.fillStyle;
            this.contextEl.globalAlpha = style.opacity;
            this.contextEl.rect(0, 0, style.width, style.height);
            this.contextEl.fill();
            this.contextEl.closePath();
            this.contextEl.restore();
        },

        /**
        * Drawing the Text value of Digital Gauge		
        * @private
        */

        _drawText: function (location, style) {
            this.contextEl.beginPath();
            this.contextEl.save();
            this.contextEl.font = style.font;
            this.contextEl.textBaseline = "hanging";
            this.contextEl.fillStyle = ((style.textColor == "transparent") ? "rgba(0,0,0,0)" : style.textColor);
            this.contextEl.fillText(style.text, location.startX, location.startY);
            this.contextEl.closePath();
            this.contextEl.restore();
        },

        /**
        * ClientSideMethod SetValue
        * Sets the value of an item to be displayed in the gauge.
        * @alias setValue 
        * @param {int} itemIndex  Index value of the digital gauge item
        * @param {string} value  Text value to be displayed in the gaugeS
        * @example 
        * &lt;div id="DigitalGauge1"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * $("#DigitalGauge1").ejDigitalGauge();
        * var DigitalGaugeObj = $("#DigitalGauge1").data("ejDigitalGauge");
        * DigitalGaugeObj.setValue(0,"Welcome");
        * &lt;/script&gt;
        * @memberof ejDigitalGauge
        * @instance
        */

        setValue: function (itemIndex, value) {
            if (itemIndex < this.model.items.length && value != null) {
                this.model.items[itemIndex].value = value;
                this._initialize();
            }
        },

        /**
        * ClientSideMethod getValue
        * Gets the value of an item that is displayed on the gauge
        * @alias getValue       
        * @param {int}  itemIndex Index value of an item that displayed on the gauge      
        * @example 
        * &lt;div id="DigitalGauge1"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * $("#DigitalGauge1").ejDigitalGauge();
        * var DigitalGaugeObj = $("#DigitalGauge1").data("ejDigitalGauge");
        * DigitalGaugeObj.getValue(0);	
        * &lt;/script&gt;
        * @memberof ejDigitalGauge
        * @instance
        */
        getValue: function (itemIndex) {
            return this.model.items[itemIndex].value;
        },

        /**
        * ClientSideMethod Set Position
        * Sets the location of an item to be displayed in the gauge
        * @alias setPosition       
        * @param {int} itemIndex  Index value of the digital gauge item
        * @param {object} value  Location value of the digital gauge
        * @example 
        * &lt;div id="DigitalGauge1"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * $("#DigitalGauge1").ejDigitalGauge();
        * var DigitalGaugeObj = $("#DigitalGauge1").data("ejDigitalGauge");
        * DigitalGaugeObj.setPosition(0,{ x:50, y:40 });	
        * &lt;/script&gt;
        * @memberof ejDigitalGauge
        * @instance
        */

        setPosition: function (itemIndex, value) {
            if (itemIndex < this.model.items.length && value != null) {
                this.model.items[itemIndex].position.x = value.x;
                this.model.items[itemIndex].position.y = value.y;
                this._initialize();
            }
        },


        /**
        * Gets the location of an item that is displayed on the gauge.
        * @alias getPosition       
        * @param {int}  itemIndex Position value of an item that is displayed on the gauge.     
        * @example 
        * &lt;div id="DigitalGauge1"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * $("#DigitalGauge1").ejDigitalGauge();
        * var DigitalGaugeObj = $("#DigitalGauge1").data("ejDigitalGauge");
        * DigitalGaugeObj.getPosition(0);	
        * &lt;/script&gt;
        * @memberof ejDigitalGauge
        * @instance
        */

        getPosition: function (itemIndex) {
            if (itemIndex < this.model.items.length)
                return { "x": this.model.items[itemIndex].position.x, "y": this.model.items[itemIndex].position.y };
        },

        /**
        * Refresh the digital gauge widget
        * @alias refresh
        * @example 
        * &lt;div id="DigitalGauge1"&gt;&lt;/div&gt; <br> 
        * &lt;script&gt;
        * $("#DigitalGauge1").ejDigitalGauge();
        * var GaugeObj = $("#DigitalGauge1").data("ejDigitalGauge");
        * GaugeObj.refresh();
        * &lt;/script&gt;     
        * @memberof ejDigitalGauge     
        * @instance      
        */
        refresh: function () {
            this._setTheme();
            this._initialize();
        },

        /**
        * To export Digital Gauge as Image
        * @alias exportImage
        * @param {string} fileName fileName for the Image
        * @param {string} fileType fileType for the Image
        * @example 
        * &lt;div id="DigitalGauge"&gt;DigitalGauge1&lt;/div&gt; <br> 
        * &lt;script&gt;
        * $("#DigitalGauge").ejDigitalGauge();
        * var DigitalGaugeObj = $("#DigitalGauge").data("ejDigitalGauge");
        * DigitalGaugeObj.exportImage("myImage","jpeg");
        * &lt;/script&gt;
        * @memberof ejDigitalGauge     
        * @instance
        */
        exportImage: function (fileName, fileType) {
            /// <summary>This function save the rendered canvas image</summary>
            /// <param name="fileName" type="String">fileName to which the image has been saved</param>
            /// <param name="fileType" type="String">fileType to which the image has been saved</param>
            var lnk = document.createElement('a'), e;
            lnk.download = fileName + "." + fileType;
            lnk.href = this.canvasEl[0].toDataURL("image/" + fileType).replace("image/" + fileType, "image/octet-stream");
            if (document.createEvent) {
                e = document.createEvent("MouseEvents");
                e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                lnk.dispatchEvent(e);
            }
            else if (lnk.fireEvent) {
                lnk.fireEvent("onclick");
            }
        },

        /**
        * ClientSideMethod ResizeCanvas		
        * @private
        */
        resizeCanvas: function () {
            if (proxy.element.width() != initialDivWidth || proxy.element.height() != initialDivHeight) {
                var canvasHeight = proxy.element.height() / initialDivHeight;
                var canvasWidth = proxy.element.width() / initialDivWidth;
                proxy.model.width *= canvasWidth;
                proxy.model.height *= canvasHeight;
                for (var i = 0; proxy.model.items[i] != null; i++) {
                    proxy.model.items[i].segmentSettings.width *= canvasWidth;
                    proxy.model.items[i].segmentSettings.spacing *= canvasWidth;
                }
                proxy.refresh();
                initialDivWidth = proxy.element.width();
                initialDivHeight = proxy.element.height();
            }
        },

        //ClientSide events
        /**
        * ClientSide events _clientSideOnLoad		
        * @private
        */
        _clientSideOnLoad: function () {
            var data = { object: this, items: this.model.items, context: this.contextEl };
            this._trigger("load", data);
        },

        /**
        * ClientSide events _clientSideOnItemRendering		
        * @private
        */
        _clientSideOnItemRendering: function (isMatrix, row, column) {
            var data;
            if (isMatrix)
                data = { object: this, items: this.model.items, character: this.character, context: this.contextEl, position: this.location, style: this.style, row: row, column: column };
            else
                data = { object: this, model: this.model, id: this.model.ClientId, items: this.model.items, character: this.character, context: this.contextEl, position: this.location, style: this.style, segment: row };
            this._trigger("itemRendering", data);
        },

        /**
        * ClientSide events _clientSideOnInit		
        * @private
        */
        _clientSideOnInit: function () {
            var data = { object: this, items: this.model.items, context: this.contextEl };
            this._trigger("init", data);
        },

        /**
        * ClientSide events _clientSideOnRenderComplete		
        * @private
        */
        _clientSideOnRenderComplete: function () {
            var data = { object: this, items: this.model.items, context: this.contextEl };
            this._trigger("renderComplete", data);
        },


        /*--------common js ----------*/
        /**
        * ClientSide events _contextOpenPath		
        * @private
        */
        _contextOpenPath: function (style, element) {
            element.contextEl.save();
            element.contextEl.beginPath();
            if (style.strokeStyle)
                element.contextEl.strokeStyle = style.strokeStyle;
            if (style.opacity != undefined)
                element.contextEl.globalAlpha = style.opacity;
            if (style.lineWidth)
                element.contextEl.lineWidth = style.lineWidth;
            if (style.fillStyle)
                element.contextEl.fillStyle = style.fillStyle;
        },

        /**
        * ClientSide events _contextClosePath		
        * @private
        */
        _contextClosePath: function (style, element) {
            element.contextEl.closePath();
            if (style.isFill)
                element.contextEl.fill();
            if (style.isStroke)
                element.contextEl.stroke();
            element.contextEl.restore();
        },

        /**
        * ClientSide events _measureText		
        * @private
        */
        _measureText: function (text, maxwidth, font) {
            var textObj = document.createElement('DIV');
            textObj.innerHTML = text;
            if (font != null)
                textObj.style.font = font;
            textObj.style.backgroundColor = 'white';
            textObj.style.position = 'absolute';
            textObj.style.top = -100;
            textObj.style.left = 0;
            if (maxwidth)
                textObj.style.maxwidth = maxwidth + "px";
            document.body.appendChild(textObj);
            var bounds = { width: textObj.offsetWidth, height: textObj.offsetHeight };
            $(textObj).remove();
            return bounds;
        }

    });

    /**
    * Enum for gauge CharacterType	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.DigitalGauge.CharacterType = {
        /**  To set the CharacterType sevensegment. */
        SevenSegment: "sevensegment",
        /**  To set the CharacterType fourteensegment. */
        FourteenSegment: "fourteensegment",
        /**  To set the CharacterType sixteensegment. */
        SixteenSegment: "sixteensegment",
        /**  To set the CharacterType eightcrosseightdotmatrix. */
        EightCrossEightDotMatrix: "eightcrosseightdotmatrix",
        /**  To set the CharacterType eightcrosseightsquarematrix. */
        EightCrossEightSquareMatrix: "eightcrosseightsquarematrix"
    };
    /**
    * Enum for gauge TextAlign	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.DigitalGauge.TextAlign = {
        /**  To set the TextAlign Left. */
        Left: "left",
        /**  To set the TextAlign right. */
        Right: "right"
    };

    /**
    * Enum for gauge FontStyle	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.DigitalGauge.FontStyle = {
        /**  To set the FontStyle normal. */
        Normal: "normal",
        /**  To set the FontStyle bold. */
        Bold: "bold",
        /**  To set the FontStyle italic. */
        Italic: "italic",
        /**  To set the FontStyle underline. */
        Underline: "underline",
        /**  To set the FontStyle strikeout. */
        Strikeout: "strikeout"
    };

    /**
    * Enum for gauge Themes	 
    * @enum {string}
    * @global 
    */
    ej.datavisualization.DigitalGauge.Themes = {
        /**  To set the themes flatlight. */
        flatlight: {
            items: {
                segmentSettings: {
                    color: "#232323",
                },
                shadowColor: "#232323",
                textColor: "#232323"
            }
        },
        /**  To set the themes flatdark. */
        flatdark: {
            items: {
                segmentSettings: {
                    color: "#b1b0b0",
                },
                shadowColor: "#b1b0b0",
                textColor: "#b1b0b0"
            }
        }
    };

})(jQuery, Syncfusion);;;