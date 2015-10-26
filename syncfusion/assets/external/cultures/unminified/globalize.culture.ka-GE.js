/*
 * Globalize Culture ka-GE
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

Globalize.addCultureInfo( "ka-GE", "default", {
	name: "ka-GE",
	englishName: "Georgian (Georgia)",
	nativeName: "ქართული (საქართველო)",
	language: "ka",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "არ არის რიცხვი",
		negativeInfinity: "-უსასრულობა",
		positiveInfinity: "უსასრულობა",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "ლ."
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"],
				namesAbbr: ["ორშ.","სამშ.","ოთხშ.","ხუთშ.","პარ.","შაბ.","კვ."],
				namesShort: ["ორ","სმ","ოთ","ხთ","პრ","შბ","კვ"]
			},
			months: {
				names: ["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი",""],
				namesAbbr: ["იან","თებ","მარ","აპრ","მაის","ივნ","ივლ","აგვ","სექ","ოქტ","ნოემ","დეკ",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"ჩვენი წელთაღრიცხვით","start":null,"offset":0}],
			patterns: {
				d: "dd.MM.yyyy",
				D: "dddd, d MMMM, yyyy 'წელი'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd, d MMMM, yyyy 'წელი' H:mm",
				F: "dddd, d MMMM, yyyy 'წელი' H:mm:ss",
				M: "d MMMM"
			}
		}
	}
});

}( this ));
