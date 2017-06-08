//  OpenShift sample Node application
var express = require('express'),
    fs = require('fs'),
    app     = express();
    
var port = 8080     ;

app.listen(port, function () {
    console.log('Server running on https://0.0.0.0:%s', port);
});

app.get('/', function(request, response) {
    fs.createReadStream('./views/server.html').pipe(response);
});

app.get('/main', function(request, response) {
    fs.createReadStream('./views/index.html').pipe(response);
});

app.get('/.well-known/acme-challenge/VVpPX8fSHJiTJmiOzaMgxWxlESTeVm50MiKGTvVYhtg', function(request, response) {
    fs.createReadStream('./.well-known/acme-challenge/VVpPX8fSHJiTJmiOzaMgxWxlESTeVm50MiKGTvVYhtg').pipe(response);
});
