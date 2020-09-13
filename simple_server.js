var http = require('http'); //Import Node.js module

var server = http.createServer(function (req, res) {   // creating server

    //handle incomming requests
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is Home Page.</p></body></html>');
        res.end();
    }

});

server.listen(5000); //listen for incoming requests

console.log('Node.js web server at port 5000 is running..')