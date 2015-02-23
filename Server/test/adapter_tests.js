/**
 * Created by Mathew Grabau on 18/02/2015.
 */

var assert = require('assert');

//var DatabaseAdapter = require("../shmDatabaseAdapter");

var DatabaseAdapter = require("../DatabaseAdapter");

describe('DatabaseAdapter', function() {
    console.log("Inside the first call");

    it('should throw not implemented for determineTable', function() {
        var sut = new DatabaseAdapter();

        assert.throws(sut.getTables,
            /Not implemented/);
    });

    it('should return the formatted database name for getDatabaseName', function() {
        var underTest = new DatabaseAdapter();

        var testDate = new Date(2012, 0, 1,0,0,0,0);

        var databaseName = underTest.getDatabaseName(testDate);

        assert.equal('SPB_SHM_2012MM01', databaseName);
    })

});



