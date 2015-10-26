/*
 * Globalize Culture tn
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

Globalize.addCultureInfo( "tn", "default", {
	name: "tn",
	englishName: "Setswana",
	nativeName: "Setswana",
	language: "tn",
	numberFormat: {
		percent: {
			pattern: ["-%n","%n"]
		},
		currency: {
			pattern: ["$-n","$ n"],
			symbol: "R"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["Sontaga","Mosupologo","Labobedi","Laboraro","Labone","Labotlhano","Matlhatso"],
				namesAbbr: ["Sont.","Mos.","Lab.","Labr.","Labn.","Labt.","Matlh."],
				namesShort: ["So","Ms","Lb","Lr","Ln","Lt","Ma"]
			},
			months: {
				names: ["Ferikgong","Tlhakole","Mopitlwe","Moranang","Motsheganong","Seetebosigo","Phukwi","Phatwe","Lwetse","Diphalane","Ngwanatsele","Sedimothole",""],
				namesAbbr: ["Fer.","Tlh.","Mop.","Mor.","Motsh.","Seet.","Phk.","Pht.","Lwetse.","Diph.","Ngwn.","Sed.",""]
			},
			AM: ["Mo Mosong","mo mosong","MO MOSONG"],
			PM: ["Mo Maitseboeng","mo maitseboeng","MO MAITSEBOENG"],
			patterns: {
				d: "dd/MM/yy",
				D: "dd MMMM yyyy",
				t: "hh:mm tt",
				T: "hh:mm:ss tt",
				f: "dd MMMM yyyy hh:mm tt",
				F: "dd MMMM yyyy hh:mm:ss tt",
				M: "d MMMM"
			}
		}
	}
});

}( this ));
