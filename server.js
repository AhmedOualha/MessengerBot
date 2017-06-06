//  OpenShift sample Node application
var express = require('express'),
    fs = require('fs'),
    app     = express();
    
var port = 8080;

app.listen(port, function () {
    console.log('Server running on http://%s:%s', ip, port);
});

app.get('/', function(request, response) {
    fs.createReadStream('./views/server.html').pipe(response);
});

app.get('/main', function(request, response) {
    fs.createReadStream('./views/index.html').pipe(response);
});


console.log('Server running on http://%s:%s', ip, port);
