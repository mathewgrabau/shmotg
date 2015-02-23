/**
 * Created by Mathew Grabau on 22/02/2015.
 *
 * Tests for first schema introduced in the 2012 calendar year.
 */


var assert = require('assert');

// The module that is being tested.

var Adapter2012a = require('../Adapter2012a');


describe('Adapter2012a', function() {
    describe('#getTables', function() {
       it('should return a list of the applicable tables to check', function() {
            var underTest = Adapter2012a();

            // then there is a requirement of the
            var tables = underTest.getTables();

           // The listing of tables.
           var expectedTables = ['SPBRTData_0A', 'SPBRTData_0B', 'SPBRTData_0C', 'SPBRTData_0D', 'SPBRTData_0E', 'SPBRTData_0F'];

            // Ensure the right listing of tables have been returned here.
            assert.equal(expectedTables[0], tables[0]);
            assert.equal(expectedTables[1], tables[1]);
            assert.equal(expectedTables[2], tables[2]);
           assert.equal(expectedTables[3], tables[3]);
           assert.equal(expectedTables[4], tables[4]);
           assert.equal(expectedTables[5], tables[5]);

       });
    });
})
