/*
 * Globalize Culture en-PH
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "en-PH", "default", {
	name: "en-PH",
	englishName: "English (Philippines)",
	nativeName: "English (Philippines)",
	numberFormat: {
		currency: {
			symbol: "Php"
		}
	},
	calendars: {
		standard: {
			patterns: {
				D: "dddd, MMMM dd, yyyy",
				f: "dddd, MMMM dd, yyyy h:mm tt",
				F: "dddd, MMMM dd, yyyy h:mm:ss tt",
				Y: "MMMM, yyyy"
			}
		}
	}
});

}( this ));
