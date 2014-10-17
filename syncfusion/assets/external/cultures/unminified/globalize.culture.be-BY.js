/*
 * Globalize Culture be-BY
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

Globalize.addCultureInfo( "be-BY", "default", {
	name: "be-BY",
	englishName: "Belarusian (Belarus)",
	nativeName: "Беларуская (Беларусь)",
	language: "be",
	numberFormat: {
		",": " ",
		".": ",",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "р."
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["нядзеля","панядзелак","аўторак","серада","чацвер","пятніца","субота"],
				namesAbbr: ["нд","пн","аўт","ср","чц","пт","сб"],
				namesShort: ["нд","пн","аў","ср","чц","пт","сб"]
			},
			months: {
				names: ["студзень","люты","сакавік","красавік","май","чэрвень","ліпень","жнівень","верасень","кастрычнік","лістапад","снежань",""],
				namesAbbr: ["студз","лют","сак","крас","май","чэрв","ліп","жн","вер","кастр","ліст","снеж",""]
			},
			monthsGenitive: {
				names: ["студзеня","лютага","сакавіка","красавіка","мая","чэрвеня","ліпеня","жніўня","верасня","кастрычніка","лістапада","снежня",""],
				namesAbbr: ["студз","лют","сак","крас","май","чэрв","ліп","жн","вер","кастр","ліст","снеж",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"н.э.","start":null,"offset":0}],
			patterns: {
				d: "dd.MM.yy",
				D: "d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d MMMM yyyy HH:mm",
				F: "d MMMM yyyy HH:mm:ss",
				M: "d MMMM"
			}
		}
	}
});

}( this ));
