//  OpenShift sample Node application
var express = require('express'),
    fs      = require('fs'),
    app     = express();
    
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

app.listen(port, ip);

console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
