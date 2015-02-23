//
//

// {{{ SETUP

var ENABLE_LOGGLY = false;

var fs = require('fs');
require("../binnedData.js");
require("./database.js");
require("./couchAccess.js");
_ = require("underscore");
var winston = require("winston");

// Selectively require the information regarding loggly.
if (ENABLE_LOGGLY){
    require('winston-loggly');
    require("./loggly-conf.js");

    // Check to see if the configuration object is defined.
    if (typeof loggly_configuration === 'undefined') {
        throw "Loggly configuration not defined";
    }

    winston.add(winston.transports.Loggly, loggly_configuration);
}

red = '\033[31m';
yellow = '\033[33m';
magenta = '\033[35m';
blue = '\033[36m';
reset = '\033[0m';

function dt (num) {
    var newdate = new Date();
    newdate.setTime(num);
    return newdate;
}
// SETUP }}}

// {{{ GLOBAL VARIABLES
var READ_FROM_COUCHDB = true;
var READ_FROM_MYSQL = true;
// NOTE: modified from the original (bound Apache to the local).
var LISTEN_PORT = 8888;

// GLOBAL VARIABLES}}}

// {{{ LISTEN FOR CLIENTS
var io = require('socket.io').listen(LISTEN_PORT); //(app) for html
// The io.configure is now replaced by the DEBUG environment variable.
// apparently the log-level option is completly gone now
//io.configure(function () { io.set('log level', 2); });
// LISTEN FOR CLIENTS }}}

winston.info("Binning server listening on port " + LISTEN_PORT);





// {{{ HELPER FUNCTIONS
function dateStringToMilliseconds (dateStr) {
    return d3.time.format("%a %b %d %Y %H:%M:%S")
    .parse(dateStr.substring(0, 24))
    .getTime();
}

function pad(integ) {
    var i = "" + integ;
    if (i.length === 1) { i = "0" + i; } // pad with a zero if necessary
    return i;
}
// HELPER FUNCTIONS }}}

var send_to_user = JSON.stringify({});

io.sockets.on('connection', function (socket) {
    // {{{ CONNECT WITH CLIENT
    socket.emit('news', send_to_user);

    socket.on('ack', function (data) {
        winston.log("client: " + data);
    });
    // CONNECT WITH CLIENT }}}

    socket.on('req', function (sendReq) {
      // Put some logging information down there.
      winston.info("Received request from client: " + sendReq);

        //{{{ PARSE REQUEST
        var received = JSON.parse(sendReq);
        var req = received.req;
        var id = received.id;


        // TODO what is the id value used for??

        if (received.sensorType !== undefined && received.sensorType == "bwimEvents") {
          winston.info("Processing event retrieval for " + received.date);


          // Default is the start of the day (midnight)
          if (received.startTime === undefined) {
            received.startTime = 0;
          } else {
            received.startTime = parseInt(received.startTime);
          }

          // Default is the end of the day now.
          if (received.endTime === undefined) {
            received.endTime = 240000;
          } else {
            received.endTime = parseInt(recieved.endTime);
          }

          getBwimEvents(received.date, received.startTime, received.endTime, function (queryResult) {

            console.log("time to send to the client!");

            winston.log('returning results for request' + id);
            console.log("returning results for request" + id);


            var results = {
              id: id,
              events: queryResult
            };


            // TODO figure out why there is so much trouble here.
            // TODO perform some checking on the data to ensure that the transformation was done properly.
            socket.emit('req_data', JSON.stringify(results));
          });
          // We are done here for the information
          return;
        }

        if (received.sensorType !== undefined) {
          // Then gather all of the data from the AA section of the bridge and query fro it.

          received.sensorType = received.sensorType.toLowerCase();
          switch (received.sensorType) {

            case "aa":
              break;
            case "cc":
              break;

            case "eventdata":
              // This is a specific query that allows us to get the starting/ending date range in the more recent years, based on a specific range that // is offered up by the development inforamtion.


              // Log in the reception of the request (TODO make this a tracing event though)
              winston.log(received);

              // Then we need to do the chain of queries here.
              var sectionQueries = [];
              sectionQueries.push({section: "AA", start: received.StartTime_AA, end: received.EndTime_AA});
              sectionQueries.push({section: "CC", start: received.StartTime_CC, end: received.EndTime_CC});
              sectionQueries.push({section: "DD", start: received.StartTime_DD, end: received.EndTime_DD});


              // Then we need to start pursuing the queries, recovering the data in the range that is specified


              var result = {};

              function series(item, func, callback) {
                if (item) {
                  // Call the function on them.
                  // The fuction must be indicated into the range there.
                  func(item, function(section, data) {
                    // TODO figure out what processing there might also be requried.
                    result[section] = data;

                    console.log("section = " + section + ", data.length = " + data.length);
                    // Continue the chain of calling into the next function now.
                    return series(sectionQueries.shift(), func, callback);
                  })
                 } else {
                   // This calls the callback and completes the chain of queries that were outputted.
                   return callback(result);
                 }
              }

              // Iterate over the sections and process them accordingly.
              series(sectionQueries.shift(), getSectionDataFromDatabase, function(data) {
                winston.info("Returning query result to the client for request id " + id);
                result.id = id;
                socket.emit("section_data", JSON.stringify(result));
              });


              // No further processing to be done on this paricular request.
              return;
          }
        }

        // Then the start
        var range = [parseInt(req.ms_start), parseInt(req.ms_end)];
        //}}} PARSE REQUEST
        //


        // {{{ SEND TO CLIENT
        var sendToClient = function (dat, lvl) {
            // get result ready to send
            var send_req = {};
            console.log("== PREPARING DATA FOR CLIENT == lvl:", lvl);

            if (lvl == 0) {
                // send raw data
                // TODO: to further speed things up, make a getDateRange replacement
                //       which sends each bin container as it comes.
                //       doToEachContainerInRange
                //       When the (same!) client has another request, stop doing
                //       these sendings.
                //       The last sending should have the same id as the original
                //       one so the client knows to hide its loading icon.
                //       The others should have a sub name "10-1", "10-2" or similar
                send_req = dat; // dat in this case is not a binnedData object; just an array.
                console.log("# range for client: #");
                console.log(dt(range[0]));
                console.log(dt(range[1]));
                //console.log(send_req);
            } else {
                // send binned data
                send_req = dat.getAllInRange(lvl, range);
                console.log("# range for client: #");
                console.log(dt(range[0]));
                console.log(dt(range[1]));
                //console.log(send_req);
            }

            console.log("== SENDING TO CLIENT ==")

            // Send requested data to client
            var toBeSent = {
                id: id,
                sensorType: req.sensorType,
                sensorNumber: req.sensorNumber,
                bin_level: lvl,
                req: send_req
            };

            socket.emit('req_data', JSON.stringify(toBeSent));
            console.log("- sent to client");
        };
        // SEND TO CLIENT }}}

        // If we are using the BWIM event gathering interface, then we are definitely getting the values as returned by that.
        // Not sure if we might be able to integrate the weather into the information again (to ensure that its
        // not going to break the system accordingly.

        // See if we need to get data from the database (because the level is lower than we have pre-binned)
        if (READ_FROM_MYSQL && req.bin_level < 6) { // TODO: magic

          winston.info("** LOW LEVEL: GET FROM DATABASE ** lvl: " + req.bin_level);

            // {{{ GET AND SEND REQUEST
            console.log("** LOW LEVEL: GET FROM DATABASE ** lvl:", req.bin_level);
                                        //            just make it readable and throw it on through
            var tmpData = binnedData(); // TODO TODO: this doesn't need to be a full-blown object...

            getDataFromDataBaseInRange(range[0], range[1], req.sensorNumber, req.sensorType, function (queryResult) {

              //
                // Bin the new data
                console.log("- data received...");
                try {
                    tmpData.addRawData(queryResult, true); // don't waste time binning because we're going to send the raw data anyway.
                } catch (e) {
                    console.log(magenta+"=*= ERROR =*="+reset, e.message);
                    throw e;
                }
                console.log("- sending data to client.");

                sendToClient(queryResult, 0); // Send raw data to the client (testing)
            });
            // GET AND SEND REQUEST }}}
        } else if (req.bin_level >= 6 && READ_FROM_COUCHDB) {
            // {{{ GET FROM COUCHDB
            // we do not need to retrieve data from the database
            // but we do from the couchdb
            console.log("** GET FROM COUCH **");

            var argsList = [];
            var bdtemp = binnedData();

            var sendOut = function () {
                sendToClient(bdtemp, req.bin_level);
            }

            //Heavy inspiration from: http://book.mixu.net/ch7.html
            function seriesOfFiveParameters(item, func, finalFunc) {
                if(item) {
                    func(item[0], item[1], item[2], item[3], item[4], function() {
                        return seriesOfFiveParameters(argsList.shift(), func, finalFunc);
                    });
                } else {
                    console.log(finalFunc);
                    return finalFunc();
                }
            }

            // get which bins we need
            var binContainers = bdtemp.getSurroundingBinContainers(range[0], range[1], req.bin_level);

            // make a list which looks like this: [{sensorType, sensorNumber, "average", lvl, bin}, etc for q1, q3, ...]
            for (var i = 0; i < binContainers.length; i++) {
                var keyList = ["average", "q1", "q3", "mins", "maxes"];
                for (var j = 0; j < keyList.length; j++) {
                    argsList.push([req.sensorType, req.sensorNumber, keyList[j], req.bin_level, binContainers[i]]);
                }
            }


            // TODO: func() should make sendo, and add it to bdtemp.
            var func = function (st, sn, k, l, d, callback) {
                var clbk = function(d) {
                    var sendo     = {};

                    sendo.average        = {levels: []};
                    sendo.q1             = {levels: []};
                    sendo.q3             = {levels: []};
                    sendo.mins           = {levels: []};
                    sendo.maxes          = {levels: []};

                    sendo[k].levels[l] = d;
                    bdtemp.addBinnedData(sendo, l, true);
                    callback();
                }

                getFromCouch(st, sn, k, l, d, clbk);
            }

            // TODO: call seriesOfFiveParameters(item.shift(), func)
            seriesOfFiveParameters(argsList.shift(), func, sendOut);
            // GET FROM COUCHDB }}}
        } else {
            // send a dummy back because we have nothing to send
            sendToClient([], 0); // Send raw data to the client (testing)
        }
    });
});

console.log('Server is running on port ' + LISTEN_PORT);
/* vim: set foldmethod=marker: */
