// named this file index.js b/c now when i require config, node will look for this file.

var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'YOUR_MONGO_URL';
        /*
        return 'mongodb://' + configValues.uname + '@ds1344.mlab.com:15489/nodetodosample';
        */
    }

}
