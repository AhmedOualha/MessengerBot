var https = require('https');

https.get('/', function(res) {
   console.log('statusCode: ', res.statusCode);

   res.on('data', function(d) {
      process.stdout.write(d);
   });
});