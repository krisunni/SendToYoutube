var express = require('express');
var app = express(),
    http = require('http'),
    url = require('url'),
    server = http.createServer(app);

app.use(express.compress());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.favicon(__dirname + '/public/images/icon-youtube.ico'));

app.use(express.urlencoded());
server.listen(5000);
app.use(express.static(__dirname + '/public'));
app.configure('development', function() {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});
app.post('/SendProxy', function(req, res) {
    var options = {
        host: req.headers.hostname,
        port: 8080,
        path: '/jsonrpc',
        method: 'POST'
    };
    /*host is send as hostname in the header*/
    console.log('host:' + (req.headers.hostname));
    /* Test youtube Payload*/
    var YoutubePayload = '{"jsonrpc": "2.0", "method": "Player.Open", "params": { "item": { "file": "plugin://plugin.video.youtube/?action=play_video&videoid=nC1yLD7R0ZU" }  }, "id": "libPlayerOpen"}'

    var ProxyRequest = http.request(options, function(res) {
        console.log('BODY:' + JSON.stringify(req.body));
        console.log('SERVER:' + JSON.stringify(req.headers.hostname));

        res.setEncoding('utf8');
        res.on(req.body, function(chunk) {
            console.log('BODY: ' + chunk);
        });
    });
    ProxyRequest.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });
    ProxyRequest.write(JSON.stringify(req.body));
    ProxyRequest.end();
    res.send('<p> Command:' + ':Recieved</p>');
});



app.get('/PingCheck', function(req, res) {
    var options = {
        host: req.headers.hostname,
        port: 8080,
        method: 'get'
    };
    /*host is send as hostname in the header*/
    console.log('host:' + (req.headers.hostname));
    /* Test youtube Payload*/

    var ProxyRequest = http.request(options, function(res) {
        console.log('BODY:' + JSON.stringify(req.body));
        console.log('SERVER:' + JSON.stringify(req.headers.hostname));

        res.setEncoding('utf8');
        res.on(req.body, function(chunk) {
            console.log('BODY: ' + chunk);
        });
    });
    ProxyRequest.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });
    res.send('<p> Command:' +':Recieved</p>');
});

