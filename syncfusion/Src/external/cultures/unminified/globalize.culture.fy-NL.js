/*
 * Globalize Culture fy-NL
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

Globalize.addCultureInfo( "fy-NL", "default", {
	name: "fy-NL",
	englishName: "Frisian (Netherlands)",
	nativeName: "Frysk (Nederlân)",
	language: "fy",
	numberFormat: {
		",": ".",
		".": ",",
		percent: {
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["$ -n","$ n"],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["snein","moandei","tiisdei","woansdei","tongersdei","freed","sneon"],
				namesAbbr: ["sni","moa","tii","woa","ton","fre","sno"],
				namesShort: ["si","mo","ti","wo","to","fr","so"]
			},
			months: {
				names: ["jannewaris","febrewaris","maart","april","maaie","juny","july","augustus","septimber","oktober","novimber","desimber",""],
				namesAbbr: ["jan","feb","mrt","apr","maa","jun","jul","aug","sep","okt","nov","des",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "d-M-yyyy",
				D: "dddd d MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd d MMMM yyyy H:mm",
				F: "dddd d MMMM yyyy H:mm:ss",
				M: "d MMMM"
			}
		}
	}
});

}( this ));
