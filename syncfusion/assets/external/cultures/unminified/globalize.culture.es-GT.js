/*
 * Globalize Culture es-GT
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

Globalize.addCultureInfo( "es-GT", "default", {
	name: "es-GT",
	englishName: "Spanish (Guatemala)",
	nativeName: "Español (Guatemala)",
	language: "es",
	numberFormat: {
		"NaN": "NeuN",
		negativeInfinity: "-Infinito",
		positiveInfinity: "Infinito",
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["-$n","$n"],
			symbol: "Q"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
				namesAbbr: ["dom.","lun.","mar.","mié.","jue.","vie.","sáb."],
				namesShort: ["do.","lu.","ma.","mi.","ju.","vi.","sá."]
			},
			months: {
				names: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
				namesAbbr: ["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sep.","oct.","nov.","dic.",""]
			},
			AM: ["a. m.","a. m.","A. M."],
			PM: ["p. m.","p. m.","P. M."],
			eras: [{"name":"d.C.","start":null,"offset":0}],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, dd' de 'MMMM' de 'yyyy",
				f: "dddd, dd' de 'MMMM' de 'yyyy h:mm tt",
				F: "dddd, dd' de 'MMMM' de 'yyyy h:mm:ss tt",
				M: "d' de 'MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});

}( this ));
