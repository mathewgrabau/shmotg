// It is a good idea to run this on no more than 6 hours of data at a time; example:
// node scraper 2012 0 5 24 2012 0 6 6
// The scraper runs from the beginning of the start day
// until the end of the end day

// {{{ SETUP
require("../binnedData.js");
require("./database.js");
require("./couchAccess.js");
_ = require("underscore");
// New logging library implementation

console = require('better-console');

// }}} SETUP


red = '\033[31m';
yellow = '\033[33m';
magenta = '\033[35m';
blue = '\033[36m';
reset = '\033[0m';
// SETUP }}}

console.log("scraper.js loaded");

// {{{ GLOBAL VARIABLES
var MAX_NUMBER_OF_BIN_LEVELS = 46; // keep sync'd with ../binnedChart.js and scraper.js
var SENSOR_TYPE = "girder";

var STEP_SIZE = 600000; // 10000 is 2400 samples each time
                      // 60000 is 1 minute each time
                      // 100000 is 1:40 each time
                      // 600000 is ten minutes each time (works best for binning 1.0)

var binData = binnedData();
// GLOBAL VARIABLES}}}

// {{{ COMMAND LINE INPUT
if (process.argv[10] === undefined) {
    console.log("USAGE:");
    console.log("  start_year(YYYY) start_month(1-12) start_day(1-31) start_hour(0-23)");
    console.log("  end_year(YYYY) end_month(1-12) end_day(1-31) end_hour(0-23)");
    console.log("  sensorNumber");
    return
}

var start_year  = parseInt(process.argv[2]);
var start_month = parseInt(process.argv[3])-1;
var start_day   = parseInt(process.argv[4]);
var start_hour  = parseInt(process.argv[5]);

var end_year  = parseInt(process.argv[6]);
var end_month = parseInt(process.argv[7])-1;
var end_day   = parseInt(process.argv[8]);
var end_hour  = parseInt(process.argv[9]);
var sensorNumber  = parseInt(process.argv[10]);

// TODO setup some debugging input

// COMMAND LINE INPUT }}}

// {{{ WHERE TO WALK


// This variable is making the description required.
var lowestLevelToKeep = 6;

// The getTime() returns the number of milliseconds from the Unix epoch. 
var RANGE_BUFFER = 10000;
var rangeToWalk = [(new Date(start_year, start_month, start_day, start_hour)).getTime(),
    (new Date(end_year, end_month, end_day, end_hour)).getTime()];

rangeToWalk[0] -= RANGE_BUFFER; // buffer
rangeToWalk[1] += RANGE_BUFFER; // buffer

// This covers submitting two times that overlap
if (rangeToWalk[0] >= rangeToWalk[1]) {
		console.info("scraper - we already have that time span");
    return;
}

// WHERE TO WALK }}}

// {{{ ASYNC
//Heavy inspiration from: http://book.mixu.net/ch7.html
function sendQuerySync(item, callback) {
    getDataFromDataBaseInRange(item, item + STEP_SIZE, sensorNumber, "girder", function (queryResult) {
        // Bin the new data
				console.log("scraper - data received. binning data...");
        if(queryResult == null) {
						console.info("scraper - queryResult == null");
            callback();
            return;
        }
        try {
            console.log(queryResult);


            binData.addRawData(queryResult);

            // Delete the bottom few levels
            binData.removeAllLevelsBelow(lowestLevelToKeep);
        } catch (e) {
            console.log(magenta+"=*= scraper - ERROR =*="+reset, e.message);
            throw e;
        }
        console.log("scraper -  ...done binning");
        callback();
    });
}

//Heavy inspiration from: http://book.mixu.net/ch7.html
function series(item, func) {
    if(item) {
        func(item, function() {
            return series(walk_steps.shift(), func);
        });
    } else {
        //console.log("saving now");
        return saveIt(final);
    }
}

// Final task (same in all the examples)
function final() {
		console.info('scraper - Done');
    //process.exit(0);

}
// ASYNC }}}

// {{{ RUN
var walk_steps = [];
for(var i = rangeToWalk[0]; i < rangeToWalk[1]; i = i + STEP_SIZE) {
    walk_steps.push(i);
}

console.log(walk_steps);

// Run the series
series(walk_steps.shift(), sendQuerySync);
// RUN }}}

// {{{ SAVE
var listOfThingsToDo = [];

function saveIt(callback) { // TODO: implement callback (perhaps not worth it)
    console.info("scraper - saving to database...")
    var dummykey = "average";
    for (var l = lowestLevelToKeep; l < MAX_NUMBER_OF_BIN_LEVELS; l++) { // for each level
        for (var c in binData.bd()[dummykey].levels[l]) { // for each bin container
            for (var ke in binData.getKeys()) { // for each key
                var k = binData.getKeys()[ke];

                if (!binData.bd()[k]) { continue; }

                var dat = binData.bd()[k].levels[l][c];
                var strt = binData.getBinContainerForMSAtLevel(dat[0].ms, l);

                listOfThingsToDo.push([SENSOR_TYPE, sensorNumber, k, l, strt, dat]);
            }
        }
    }

    function doIt(item, callback) {
        var id = makeIDString(item[0], item[1], item[2], item[3], item[4]);
        console.info("saving:", id, "to couchDB");
        saveWithMergeToCouch(item[0], item[1], item[2], item[3], item[4], item[5], callback);
    }

    seriesSave(listOfThingsToDo.shift(), doIt);
}

function seriesSave(item, func) {
    if(item) {
        func(item, function() {
            return seriesSave(listOfThingsToDo.shift(), func);
        });
    } else {
        console.log("scraper - DONE!");
        process.exit(0);
    }
}
// SAVE }}}

/* vim: set foldmethod=marker: */
