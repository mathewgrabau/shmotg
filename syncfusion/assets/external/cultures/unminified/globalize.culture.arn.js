/*
 * Globalize Culture arn
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

Globalize.addCultureInfo( "arn", "default", {
	name: "arn",
	englishName: "Mapudungun",
	nativeName: "Mapudungun",
	language: "arn",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "NeuN",
		negativeInfinity: "-Infinito",
		positiveInfinity: "Infinito",
		percent: {
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-$ n","$ n"],
			",": ".",
			".": ","
		}
	},
	calendars: {
		standard: {
			"/": "-",
			days: {
				names: ["Kiñe Ante","Epu Ante","Kila Ante","Meli Ante","Kechu Ante","Cayu Ante","Regle Ante"],
				namesAbbr: ["Kiñe","Epu","Kila","Meli","Kechu","Cayu","Regle"],
				namesShort: ["kñ","ep","kl","me","ke","ca","re"]
			},
			months: {
				names: ["Kiñe Tripantu","Epu","Kila","Meli","Kechu","Cayu","Regle","Purha","Aiya","Marhi","Marhi Kiñe","Marhi Epu",""],
				namesAbbr: ["Kiñe Tripantu","Epu","Kila","Meli","Kechu","Cayu","Regle","Purha","Aiya","Marhi","Marhi Kiñe","Marhi Epu",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"d.C.","start":null,"offset":0}],
			patterns: {
				d: "dd-MM-yyyy",
				D: "dddd, dd' de 'MMMM' de 'yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd, dd' de 'MMMM' de 'yyyy H:mm",
				F: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
				M: "d' de 'MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});

}( this ));
