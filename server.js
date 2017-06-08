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

app.get('/.well-known/acme-challenge/lDqt9z1MkJqQr-lb5l3gd0IE1HrfEvC81on290LkC1Q', function(request, response) {
    fs.createReadStream('./.well-known/acme-challenge/lDqt9z1MkJqQr-lb5l3gd0IE1HrfEvC81on290LkC1Q').pipe(response);
});

app.get('/.well-known/acme-challenge/ZdRobrw-KRYnJrGH6VDVzFB9Lfb0FKgbbgZoQ1IdF2w', function(request, response) {
    fs.createReadStream('./.well-known/acme-challenge/ZdRobrw-KRYnJrGH6VDVzFB9Lfb0FKgbbgZoQ1IdF2w').pipe(response);
});
