//  OpenShift sample Node application
var express = require('express'),
    fs      = require('fs'),
    app     = express();
    
var port = 8080,
    ip   = '0.0.0.0';

app.listen(port, ip);

console.log('Server running on http://%s:%s', ip, port);
