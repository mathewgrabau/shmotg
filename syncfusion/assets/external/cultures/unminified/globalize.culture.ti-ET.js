/*
 * Globalize Culture ti-ET
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

Globalize.addCultureInfo( "ti-ET", "default", {
	name: "ti-ET",
	englishName: "Tigrinya (Ethiopia)",
	nativeName: "ትግርኛ (ኢትዮጵያ)",
	language: "ti",
	numberFormat: {
		pattern: ["(n)"],
		"NaN": "NAN",
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["-n$","n$"],
			symbol: "ETB"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["ሰንበት","ሰኑይ","ሰሉስ","ሮቡዕ","ሓሙስ","ዓርቢ","ቀዳም"],
				namesAbbr: ["ሰንበት","ሰኑይ","ሰሉስ","ሮቡዕ","ሓሙስ","ዓርቢ","ቀዳም"],
				namesShort: ["ሰን","ሰኑ","ሰሉ","ሮቡ","ሓሙ","ዓር","ቀዳ"]
			},
			months: {
				names: ["ጥሪ","ለካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ",""],
				namesAbbr: ["ጥሪ","ለካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ",""]
			},
			AM: ["ንጉሆ","ንጉሆ","ንጉሆ"],
			PM: ["ድሕሪ ቐትሪ","ድሕሪ ቐትሪ","ድሕሪ ቐትሪ"],
			eras: [{"name":"ዓመተ ምሕረት","start":null,"offset":0}],
			patterns: {
				d: "d/M/yyyy",
				D: "dddd '፣' MMMM d 'መዓልቲ' yyyy",
				f: "dddd '፣' MMMM d 'መዓልቲ' yyyy h:mm tt",
				F: "dddd '፣' MMMM d 'መዓልቲ' yyyy h:mm:ss tt"
			}
		}
	}
});

}( this ));
