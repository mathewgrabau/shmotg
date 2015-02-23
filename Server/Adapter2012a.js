/**
 * Created by Mathew Grabau on 22/02/2015.
 */

    // Include the baseclass instance
var DatabaseAdapter = require('./DatabaseAdapter.js');

// Then we construct the applicable module requirements.
var Adapter2012a = function(spec) {
    var that = DatabaseAdapter(spec);

    that.getTables = function() {
        return ['SPBRTData_0A', 'SPBRTData_0B', 'SPBRTData_0C', 'SPBRTData_0D', 'SPBRTData_0E', 'SPBRTData_0F'];
    };

    return that;
};

module.exports = Adapter2012a;
