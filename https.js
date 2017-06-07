'use strict';

require('greenlock-express').create({

  server: 'staging'

, email: 'ahmedoualha@ymail.com'

, agreeTos: true

, approveDomains: [ 'testandlearn.net' ]

, app: require('express')().use('/', function (req, res) {
    res.end('Hello, World!');
  })

}).listen(80, 443);
