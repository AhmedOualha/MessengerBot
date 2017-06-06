//var http = require('http');

// http.createServer(function (request, response) {
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//    response.end('Hello World\n');
// }).listen(8081);

//console.log('Server running at http://127.0.0.1:8081/');

function doThat(number){

    console.log('-> ', number);

    dbAccess(function() {
        console.log('<- ', number);
    });

}

function dbAccess(callback){
    setTimeout(callback, 0);
}

for(var i = 0; i < 10000; i++){
    doThat(i);
}