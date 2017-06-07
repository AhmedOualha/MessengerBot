'use strict';

var express = require('express'),
    fs = require('fs'),
    app     = express();

require('greenlock-express').create({

  server: 'staging'

, email: 'ahmedoualha@ymail.com'

, agreeTos: true

, approveDomains: [ 'testandlearn.net' ]

, app: require('express')().use('/', function (req, res) {
    res.end('Hello, World!');
  })

}).listen(80, 443);

app.get('/', function(request, response) {
    fs.createReadStream('./views/server.html').pipe(response);
});