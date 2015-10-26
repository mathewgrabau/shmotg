/*
 * Globalize Culture mr-IN
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

Globalize.addCultureInfo( "mr-IN", "default", {
	name: "mr-IN",
	englishName: "Marathi (India)",
	nativeName: "मराठी (भारत)",
	language: "mr",
	numberFormat: {
		groupSizes: [3,2],
		percent: {
			groupSizes: [3,2]
		},
		currency: {
			pattern: ["$ -n","$ n"],
			groupSizes: [3,2],
			".": "`",
			symbol: "₹"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["रविवार","सोमवार","मंगळवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],
				namesAbbr: ["रवि.","सोम.","मंगळ.","बुध.","गुरु.","शुक्र.","शनि."],
				namesShort: ["र","सो","मं","बु","गु","शु","श"]
			},
			months: {
				names: ["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोव्हेंबर","डिसेंबर",""],
				namesAbbr: ["जाने.","फेब्रु.","मार्च","एप्रि","मे","जून","जुलै","ऑग.","सप्टें.","ऑक्टो.","नोव्हें.","डिसें.",""]
			},
			AM: ["म.पू.","म.पू.","म.पू."],
			PM: ["म.नं.","म.नं.","म.नं."],
			patterns: {
				d: "dd-MM-yyyy",
				D: "dd MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dd MMMM yyyy HH:mm",
				F: "dd MMMM yyyy HH:mm:ss",
				M: "dd MMMM",
				Y: "MMMM, yyyy"
			}
		}
	}
});

}( this ));
