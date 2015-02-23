/**
 * Created by Mathew Grabau on 16/02/2015.
 *
 * Defines an interface for interpreting and
 */

// TODO start writing a testing suite for this code to ensure that it's returning the expected result sets
// might need to use SQLite backing for the testing suite to enusre that it's working correctly for each of
// the cases.


// The listing of schemas that are attempting
var SCHEMA_2012_1;
var SCHEMA_2012_2; // the schema that contains the 1A schema
var SCHEMA_2012_3;
var SCHEMA_2013_2;  // Note that there is not a 2013_1 because that was the same as 2012_3

/**
 * The base class constructor/function that all instances must use to formulate accordignly.
 * @constructor
 */
var DatabaseAdapter = function(spec) {

    var that = {};

    //my  = my || {};

    // Add shared variables and functions to my

    // Then that's the problem is that the inheritance pattern is not working properly.

    // Add the privileged methods to that.

    that.getTables = function () {
        throw "Not implemented - must override in the base class";
    };

    that.getDatabaseName = function(date) {
        var month = date.getMonth() + 1;

        // Ensure correct formatting.
        if (month < 10) {
            month = "0" + month;
        }

        return "SPB_SHM_" + date.getFullYear() + "MM" + (month);
    };

    return that;
};


var Adapter2012_1 = function(spec) {
    // Then there is the database formatting function
}


var Adapter2012_2 = function(spec) {

};

var Adapter2012_3 = function(spec) {

    // Create the root object from it.
    var that = DatabaseAdapter(spec);

};







var determineSchema = function(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;

    if (year >= 2013) {
        // transition of the format (column names) occurred during November 2013.
        if (year > 2013 || month >= 11) {
            return SCHEMA_2013_2;
        }

        return SCHEMA_2012_3;
    }

    // Then otherwise we need to do the month filtering.
    var month = date.getMonth() + 1;

    if (month >= 1 && month <= 4) {
        return SCHEMA_2012_1;
    }

    if (month >= 5 && month <= 8) {
    }
}


/**
 * Select a query formatting/adapter that corresponds to the schema in place at that time.
 * @param date
 */
function createQueryAdapter(date) {
    var applicableSchema = deteremineSchema(date);

}


/**
 * Generate the name of the database that contains data for the specified database.
 * @param date The date to gather the information for.
 */
var generateDatabaseName = function(date) {
    // TODO confirm that the month is ordinal from one.
    return "SPB_SHM_" + date.getFullYear() + "MM" + date.getMonth();
};

// Return the exposed methods
module.exports = DatabaseAdapter;