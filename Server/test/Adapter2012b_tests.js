/**
 * Tests that are performed on the adapter that is used for the database from 2012 onwards.
 *
 * Created by Mathew Grabau on 23/02/2015.
 */


var assert = require("assert");

var Adapter2012b = require("../Adapter2012b");

describe("Adapter2012b", function() {
    describe("#getTable", function() {
        it("should return the list of tables with 1x in the schema", function() {
            var underTest = Adapter2012b();

            // then there is a requirement of the
            var tables = underTest.getTables();

            // The listing of tables.
            var expectedTables = ['SPBRTData_1A', 'SPBRTData_1B', 'SPBRTData_1C', 'SPBRTData_1D', 'SPBRTData_1E', 'SPBRTData_1F'];

            // Ensure the right listing of tables have been returned here.
            assert.equal(expectedTables[0], tables[0]);
            assert.equal(expectedTables[1], tables[1]);
            assert.equal(expectedTables[2], tables[2]);
            assert.equal(expectedTables[3], tables[3]);
            assert.equal(expectedTables[4], tables[4]);
            assert.equal(expectedTables[5], tables[5]);

        });
    })
});

