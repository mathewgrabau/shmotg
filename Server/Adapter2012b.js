/**
 * Created by Mathew Grabau on 23/02/2015.
 */

var DatabaseAdapter = require("./DatabaseAdapter");

var Adapter2012b = function(spec) {
    var that = DatabaseAdapter();

    that.getTables = function() {
        return ['SPBRTData_1A', 'SPBRTData_1B', 'SPBRTData_1C', 'SPBRTData_1D', 'SPBRTData_1E', 'SPBRTData_1F'];
    };

    return that;
};


module.exports = Adapter2012b;