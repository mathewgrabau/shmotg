// TODO: CURRENT PROBLEM:
// err:  { [Error: ER_NO_SUCH_TABLE: Table 'spb_shm_2013mm08.spbrtdata_0a' doesn't exist] code: 'ER_NO_SUCH_TABLE', index: 0 }sending db query

var debug = false;

// {{{ SETUP
var fs = require('fs');
var mysql = require('mysql');
d3 = require("d3");
require("../binnedData.js");

// Implement the logging using winston.js here.
winston = require("winston");
require("winston-loggly");

console = require("better-console");


winston.log("Running the database.js");

red = '\033[31m';
yellow = '\033[33m';
magenta = '\033[35m';
blue = '\033[36m';
reset = '\033[0m';

dt = function (num) {
  var newdate = new Date();
  newdate.setTime(num);
  return newdate;
}
// SETUP }}}

//{{{ PROTOTYPE
// Override Date.prototype.toJSON
// because JSON.stringify() uses it to change
// the format of our dates when they're converted
// back to strings
// NOTE: this is not actually required anymore
// because we're sending milliseconds instead of
// date strings, but it's nice to have around. :)
Date.prototype.toJSON = function (key) {
  //console.log("key: ");
  //console.log(key, this);
  return this + "";
};
// PROTOTYPE }}}

// {{{ CONNECTION
// CONNECTION }}}

// {{{ PRIVATE FUNCTIONS
function combineAndSortArraysOfDateValObjects (arr1, arr2) {
    // Add the objects from arr2 (array) to arr1 (array)
    //   only if the object from arr2 has a ms value
    //   which no object in arr1 has.
    // ie. arr1 gets precedence

    // concat them
    var result = combineWithoutDuplicates(arr1, arr2);

    // sort the result TODO: may not be required, as combineWithoutDuplicates gives a sorted result
    result.sort(function (a, b) { return a.ms - b.ms; });

    return result;
}

function combineWithoutDuplicates(arr1, arr2) {
    // ASSUMPTION: arr1 and arr2 are both sorted
    //             arr1 and arr2 are in the format: [{ms: _}, {ms: _}]
    // TODO: arr1 gets precedence. Return an array which has no duplicates in the 'ms' field.

    var uniques = []; // The values found in arr2 which were not in arr1
    var arr1Length = arr1.length;
    var arr1Index = 0;

    for (var i = 0; i < arr2.length; i++) {
        // For each element of arr2, go through arr1,
        // element by element, and see how their ms compare

        while (1) {
            if (arr1Index >= arr1Length) {
                uniques.push(arr2[i]);
                break;
            } // we've run out of arr1

            if (arr1[arr1Index].ms > arr2[i].ms) {
                // If the next one is higher,
                // add this one to the list,
                // and move on to the next arr2 (don't increment)

                uniques.push(arr2[i]);

                //console.log("add them:", arr1[arr1Index].ms, arr2[i].ms);
                break;
            } else if (arr1[arr1Index].ms === arr2[i].ms) {
                // If the next one is the same,
                // move on to the next arr2 (don't increment)

                //console.log("dont add:", arr1[arr1Index].ms, arr2[i].ms);
                break;
            } else {
                // If the next one is lower than this one,
                // increment and compare to the new one from arr1

                //console.log("continue:", arr1[arr1Index].ms, arr2[i].ms);
                arr1Index++;
            }
        }
    }

    return arr1.concat(uniques);
}

// NOTE: The sensor type is either strap or girder.
// Depending on the sensor type, using an either G/S (or ESGgirder
// or ESGstrap)
makeQuery = function(a, b, letter, sensorNumber, sensorType) {
  // @param   a   The milliseconds requested for the query
  // @param   b   The milliseconds corresponding to the end time.
  // RETURNS: Object containing the following fields:
  // column - the name of the column to inspect.
  
    var dtr = dt(a); // date to request
    var dtr2 = dt(b); // second date to request

    // TODO: implement sensorType

    // query = 'SELECT ESGgirder18, SampleIndex, Miliseconds, Time FROM SPBRTData_0A LIMIT 1000';
    // The table names are formatted as follows:
    // 
    // NOTE: In some of the tables the following things:
    // Gxx is a girder (make it with the sensorNumber parameter


    var section = letter;

    var tableName;

    if (section === null) {
      console.log("DETERMING THE SECTION AUTOMATICALLY");
      section = determineSection(a, sensorNumber);

      // The more recent ones are combined tables in the sections.
      // What table should we pull from
      tableName = determineTableName(a, sensorNumber);
    } else {
      // Older ones follow a known pattern.
      tableName = "SPBRTData_" + letter;
    }


    var columnName = determineColumnName(a, sensorNumber);

    console.log("Selecting column " + columnName + " from table " + tableName);

    // NOTE: This column is not quite accurate, as the Time (and/or Date clause) must 
    // be formatted porperly.

    // The date/time inputs are not formed to input properly.
    // When dealing with 2014 data, etc there are two fields to deal with:
    // There is the requirement to update the values of the interfacing 


    var whereClause = generateWhereClause(a, b);

    console.log("whereClause = " + whereClause);
    
    if (whereClause === null) {
      console.log("whereClause null, dynamic clause not available");
    } else {
      console.log("Using a dynamically formed WHERE clause!");
    }
    
    var query = "";


    // TODO there is probably some much different formatting needed here.
    // This only works when Time is a character (I would think)
    
    if (whereClause != null) {
      // TODO we need to do some adapting for the Date/Time to be able to turn these into a 
      // date and time again.
      query = "SELECT " + columnName + ', SampleIndex, Time, Date FROM ' + tableName + ' ' + whereClause;
    } else {
      var queryHead = 'SELECT ' + columnName + ', SampleIndex, Time FROM ' + tableName + ' WHERE Time BETWEEN';
      var query1 = ' "' + dtr.getFullYear() +
                 '-' + pad(dtr.getMonth() + 1) +
                 '-' + pad(dtr.getDate()) +
                 ' ' + pad(dtr.getHours()) +
                 ':' + pad(dtr.getMinutes()) +
                 ':' + pad(dtr.getSeconds()) + '"';
      var queryMid = ' AND ';
      var query2 = '"' + dtr2.getFullYear() +
                 '-' + pad(dtr2.getMonth() + 1) +
                 '-' + pad(dtr2.getDate()) +
                 ' ' + pad(dtr2.getHours()) +
                 ':' + pad(dtr2.getMinutes()) +
                 ':' + pad(dtr2.getSeconds() + 1) + '"';
      var queryTail = '';
      
      query = queryHead + query1 + queryMid + query2 + queryTail;
    }

    // table is actually the database name (not the table name)
    // The table name is expressed above
    var table = "SPB_SHM_" + dtr.getFullYear() + "MM" + pad(dtr.getMonth() + 1);
        
    return {
        query: query,
        table: table,
        column: columnName,
        sensorNumber: sensorNumber,
        sensorType: sensorType,
    };
}




var determineSection = function(sensorNumber) {
  // RETURNS: the section identifier for the section.
  // An empty string is returned if there are no matches
  // for the girder number

  // These are girder numbers, not taking into 
  // account the straps or the dummies.
  var AA_NUMBER_START = 25;
  var AA_NUMBER_END = 48;
  var CC_NUMBER_START = 9;
  var CC_NUMBER_END = 24;
  var DD_NUMBER_START = 1;
  var DD_NUMBER_END = 8;
  if (sensorNumber >= AA_NUMBER_START && sensorNumber <= AA_NUMBER_END) {
    return "AA";
  } 

  if (sensorNumber >= CC_NUMBER_START && sensorNumber && CC_NUMBER_END) {
    return "CC";
  }

  if (sensorNumber >= DD_NUMBER_START && sensorNumber && DD_NUMBER_END) {
    return "DD";
  }

  // Default return an empty string.
  return "";

};


var determineColumnName = function(ms, sensorNumber) {
  // Map the column name according to the date that is attempting
  // RETURNS: the formatted string according to the sensorNumber
  // and that matches the database for the Date corresponding 
  // to ms parameter.
  
  var d = new Date(ms);   // Determine the date of the event now.
  var year = d.getFullYear();

  if (year >= 2014) {
    // Depending on the month depends on the rule for formatting
    return "G" + sensorNumber;
  } else if (year == 2013) {
    // October (month 10) was the last month that things were like this.
    // The Date.getMonth() function returns 0-11 for the month number though.
    if (d.getMonth() <= 9) {
      return "ESGgirder" + sensorNumber;
    } else {
      return "G" + sensorNumber;
    }
  } else {
    // Fall back to a default here (at least there is something to select then)
    return "ESGgirder" + sensorNumber;
  }
};


var determineTableName = function (ms, sensorNumber) {
  // Parses the date and determines the correct database and 
  // the connection infromation.
  // RETURNS: table name for years 2014-
  var d = new Date(ms);
  //if (d.get^


  // The section is common in many of the values
  var section = determineSection(sensorNumber);


  // For years starting in 11/2013 (which is 10 in JavaScript month index),
  // The table name is SPBData_Raw_AA, etc
  // For the years starting from 2012 to 2013, the years are 
  // SPBRTData_Raw_AA, etc
  

  var year = d.getFullYear();

  if (year >= 2014) {
    return "SPBData_Raw_" + section;
  } else if (year == 2013) {
    if (d.getMonth() <= 9) {
      return "SPBRTData_Raw_" + section;
    } else {
      return "SPBData_Raw_" + section;
    }
  } else if (year == 2012) {
    // NOTE: this is actually a whole collection of tables that we need to implement properly.
    return "SPBRTData_Raw_" + section;
  } 
};

var generateWhereClause = function (msStart, msEnd) {
  // Parameter validation
  if (msStart > msEnd) {
    var temp = msEnd;
    msEnd = msStart;
    msStart = temp;
  }

  var start = new Date(msStart);
  var end = new Date(msEnd);

  // NOTE: this does not allow them to overlap (would need to join two different dates)

  var clause = null;

  if (start.getFullYear() == 2012) {
    // This is just the formatted results
  } else if (start.getFullYear() == 2013) {
      
  } else if (start.getFullYear() == 2014) {
    // Date is the integer
    // Time is a float (number of milliseconds I think) 


    var numeralDateStart;
    var numeralDateEnd;


    var INT_DATE_YEAR_SHIFT = 10000;
    var INT_DATE_MONTH_SHIFT = 100;
    console.log(start);
    console.log(end);
    numeralDateStart = start.getFullYear() * INT_DATE_YEAR_SHIFT + (start.getMonth() + 1) * INT_DATE_MONTH_SHIFT + start.getDate();
    numeralDateEnd = end.getFullYear() * INT_DATE_YEAR_SHIFT + (end.getMonth() + 1) * INT_DATE_MONTH_SHIFT + end.getDate();

    // TODO review the use of the BETWEEN clause with the Time (it might be having wrong consequences, and it
    // may be better to just treat the date/time arguments as one).
    clause = "WHERE (Date BETWEEN " + numeralDateStart + " AND " + numeralDateEnd + ") AND (Time BETWEEN ";

    // TODO this needs the Time clause next. The time clause I think is just the number of seconds that have passed.


    // To convert the seconds:
    // Hours * 3600 + Minutes * 60 + Seconds + milliseconds / 1000


    // NOTE: The floating conversion is okay (the database is expecting that anyways)
    var numeralTimeStart = start.getHours() * 3600 + start.getMinutes() * 60 + start.getSeconds() + start.getMilliseconds() / 1000.0;
    var numeralTimeEnd = end.getHours() * 3600 + end.getMinutes() * 60 + end.getSeconds() + end.getMilliseconds() / 1000.0;

    clause += numeralTimeStart + " AND " + numeralTimeEnd + ");";
  }

  return clause;
};

// PRIVATE FUNCTION }}}

// {{{ PUBLIC METHODS
dateStringToMilliseconds = function (dateStr) {
  var theDate = d3.time.format("%a %b %d %Y %H:%M:%S")
    .parse(dateStr.substring(0, 24));
  if(theDate === null) {
    theDate = d3.time.format("%Y-%m-%d %H:%M:%S")
      .parse(dateStr.substring(0, 19));
  }
  // NOTE: this function should not be called unless we know there is a DATETIME type is
  // applicable for the column - does not apply in all cases.
  return theDate.getTime();
}

// Translate the function inputs/outputs here.
// NOTE: what about the data that was actually on the 100 samplesPerSecond!?
samplesToMilliseconds = function (sampleIndex) {
  var samplesPerSecond = 200;
  var msPerSample = 1000/samplesPerSecond;
  var mils = sampleIndex * msPerSample;
  return mils;
}

dateAndSampleIndexStringToMilliseconds = function (dateStr, sampleIndex) {
  return dateStringToMilliseconds(dateStr) + samplesToMilliseconds(sampleIndex);
}


// Parsing Time, Date, SampleIndex column
millisecondsFromParts = function(row) {
  
  // These functions aid in the implementation by breaking some of this stuff up.
  
  var extractYear = function(dateColumn) { 
    var YEAR_SHIFT = 10000;
    return dateColumn / YEAR_SHIFT;
  };
  
  var extractMonth = function(dateColumn) {
    var MONTH_SHIFT = 100;
    var temp = dateColumn / MONTH_SHIFT;
    temp = temp % MONTH_SHIFT;
    return temp;
  };
  
  var extractDate = function(dateColumn) {
    return dateColumn % 100;
  };
  
 
  var year = extractYear(row.Date);
  var month = extractMonth(row.Date);
  var date = extractDate(row.Date);
  
  // Compute the number of milliseconds 
  // An example value is 21005.3 (21005 seconds + 300 milliseconds)
  //var milliseconds = Math.floor(row.Time)  + row.SampleIndex
  
  var milliseconds = row.SampleIndex * (1000 / 200);
  var seconds = Math.floor(row.Time);
  var hours = seconds / 3600;
  var minutes = (hours - Math.floor(hours)) * 60;

  var tempDate = new Date(year, month - 1, date, hours, minutes, seconds, milliseconds);

  return tempDate.getTime();
  
};



// TODO: consider changing the ms0/ms1 parameters - that would likely yield much better results
// for doing the selections.
getDataFromDataBaseInRange = function (ms0, ms1, sensorNumber, sensorType, callback) {

    console.log("getDataFromDataBaseInRange");
    console.log(arguments);

    // NOTE: These table assignments are wrong, we must make sure that the year appropriate one
    // is used. The year appropriate one is the following:
    // TODO: if ms0 and ms=1 span months, query one for each month
    //       (will only ever be two months, otherwise it would
    //       take forever)

    // TODO we should avoid doing the queries like this (expensive to keep hitting the database
    // again and again).
    // In the 2011/2012 data, which has segmented (1A, etc) then we can use that
    // otherwise, we can accelerate the process and attempt to make the following 
    // things more efficiently done.


    var queries = [];
    //var vals = ['1A','1B','1C','1D','1E','1F','0A','0B','0C','0D','0E','0F'];


    var startDate = new Date(ms0);
    if (startDate.getFullYear() == 2012) {

      console.log("Need to use mutliple tables for the querying.");
      // Then determine if we need to be querying which tables here
     
      if (startDate.getMonth() <= 3) {    // javascript's 0-indexed months
        console.log("0 based table names");
        var suffixes = ["0A", "0B", "0C", "0D", "0E", "0F"];
        for (var i = 0; i < suffixes.length; i++) {
          queries.push(makeQuery(ms0, ms1, suffixes[i], sensorNumber, sensorType));
        }
      } else if (startDate.getMonth() <= 6) {   // July was the last month for implementing that values
        var suffixes = ["1A", "1B", "1C", "1D", "1E", "1F"];
        for (var i = 0; i < suffixes.length; i++) {
          queries.push(makeQuery(ms0, ms1, suffixes[i], sensorNumber, sensorType));
        }
      }
    
    } else {
      // Modifying the function to just figure out the proper section on its own
      // Another helpful one would just be all of the data in the tables 
      // that are resulting from me attempting to be so awesome.
      queries.push(makeQuery(ms0, ms1, null, sensorNumber, sensorType));
    }
    

    console.log(queries);

    var result = [];

    // Get all queries in series,
    // then callback with the combination of them all

    //Heavy inspiration from: http://book.mixu.net/ch7.html
    function series(item, func, callback) {
        if(item) {
            func(item, function(dat) {
                result = combineAndSortArraysOfDateValObjects(result, dat);
                return series(queries.shift(), func, callback);
            });
        } else {
            return callback(result);
        }
    }

    series(queries.shift(), sendDatabaseQuery, callback);
}

// TODO These need to be moved to a credentails file
// or another config file (it will just make it easier).
sendDatabaseQuery = function(query, doWithResult) {
  if(debug) console.log("sending db query");
  var mysqlconnection = mysql.createConnection({
    host     : 'shm1.ee.umanitoba.ca',
    user     : 'umgrabam',
    password : fs.readFileSync(__dirname + '/ps').toString().trim(),
    database : query.table,
  });

  mysqlconnection.query(query.query, function (err, rows, fields) {
    if (err) { if(debug){console.log("err: ", err);} doWithResult([]); return; }
    console.log(red+query.query, blue+rows.length+reset);
    
    // If there's no rows returned, then make a logging event out of it 
    if (rows.length === 0) {
      winston.warn("QUERY " + query + " returned 0 rows");
    } else {
      winston.info("QUERY " + query + " returned " + rows.length + " rows");
    }

    //console.log("ROWS: ", rows);
    var send_object = rows.map(function (d) {
        //console.log("asdf: " + query.sensorNumber);
        console.log("rows.map");
        console.log(d);
        
        var ms = 0;
        
        if (d.Date !== undefined && d.Time !== undefined) {
          console.log("Need to process the date/float combo for the dates.");
          ms = millisecondsFromParts(d);
          
        } else {
          console.log("Process the standard ms conversion (the older one)");
          ms = dateAndSampleIndexStringToMilliseconds(d.Time + "", d.SampleIndex);
        }
        
        // TODO this won't actually work right at all
        return { val: d[query.column],
                 ms: ms
               };
    });

    doWithResult(send_object); // send_object is always raw data
    //mysqlconnection.end();
  });

  mysqlconnection.end();
}

pad = function(integ) {
  var i = "" + integ;
  if (i.length === 1) { i = "0" + i; } // pad with a zero if necessary
  return i;
}

/**
 *  A function to extract the BWIM evert data from the applicable table.
 */
getBwimEvents = function(date, startTime, endTime, callback) {

  // The format for the date argument (matches the database)
  // is 20140901 (
  // The columns relevant are StartTime_DD, EndTime_DD
  // StartTime_CC, EndTime_CC,
  // StartTime_AA, EndTime_AA
  // Those are formatted with a time argument, so that's important.
  var year = Math.floor(date / 10000);
  // Take off the last two, then mod it to get the moth
  var month = Math.floor(date / 100) % 100;


  // So something in the column like 801000517212
  // Is (from 2014 - not encoded in the data)
  // 0801 (month/date)
  // Leaving 000517212
  // Which is 00:05:17.212 (HH:MM:SS.fff)
  // Therefore, if the time argument is specified for second accuracy right now, 
 
  // That should about do it.

  console.log(year);

  console.log(month);
  console.log(pad(month));
  
  var databaseName = "SPB_SHM_" + year + "MM" + pad(month);

  var day = date % 100;

  var monthShift = 100000000000;
  var dayShift =   1000000000;

  var timeShift = 1000; // shift past the milliseconds

  // Shift each of them up by 1000 to account for the milliseconds argument.
  var startTimeArgument = (startTime * timeShift) + month * monthShift + day * dayShift;
  var endTimeArgument = (endTime * timeShift) + month * monthShift + day * dayShift;

  // Just debugging outputs, remove this.
  console.log("startTimeArgument = " + startTimeArgument);
  console.log("endTimeArgument = " + endTimeArgument);

  var mysqlconnection = mysql.createConnection({
    host : 'shm1.ee.umanitoba.ca',
    user: 'umgrabam',
    password: fs.readFileSync(__dirname + '/ps').toString().trim(),
      database: databaseName
  });

//  mysqlconnection.query("SELECT * FROM SPBData_Truck WHERE Date = " + date + " AND Time >= " + startTime + " AND Time <= " + endTime, function(err, rows, fields) {
  mysqlconnection.query("SELECT * FROM SPBData_Truck_BWIM WHERE (StartTime_DD >= " + startTimeArgument + " AND EndTime_DD <= " + endTimeArgument + ")"
      + " OR (StartTime_CC >= " + startTimeArgument + " AND EndTime_CC <= " + endTimeArgument + ")"
      + " OR (StartTime_AA >= " + startTimeArgument + " AND EndTime_AA <= " + endTimeArgument + ")", function (err, rows, fields) {

    if (err) {
      winston.error("Query error " + err);
      callback([]);
      return;
    }

    if (rows.length == 0) {
      winston.warn("QUERY returned 0 rows");
    } else {
      winston.info("QUERY returned " + rows.length + " rows");
    }

    var send_object = rows.map(function(d) {
      console.log("rows.map");
      console.log(d);

      // Then start determining the event times/dates correspondingly.
      return d;
      
    });

    // The completion routine can be called now to send the data back to the client
    callback(send_object);
  });



};

// PUBLIC METHODS }}}
/* vim: set foldmethod=marker: */
