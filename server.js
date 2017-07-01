var http = require('http');
var https = require('https');
var express = require('express');
var compress = require('compression');
var fs = require('fs');

var path = require('path');
var app = express();

app.use(compress());
app.use(express.static(__dirname));

var httpServer = http.createServer(app);
var httpsServer = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app);


//All the requests to the server are entertained. Route handling is configured in RouteConfig
app.get('/', function(req, res) {

    res.setHeader("Cache-Control", "public, max-age=2592000");
    res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());

    res.sendFile(path.join(__dirname + '/index.html'));
});

var port = 3000
    /*httServer.listen(port, function() {
        console.log('server started....', port)
    });*/

httpsServer.listen(port, function() {
    console.log('server started....', port)
});
