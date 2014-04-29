var express = require('express');
var app = express(),
    http = require('http'),
    url = require('url'),
    Xbmc = require('xbmc'),
    server = http.createServer(app);

app.use(express.compress());
app.use(express.json());
app.use(express.urlencoded());
/*app.use(express.favicon());
 */
app.use(express.urlencoded());
server.listen(5000);
app.use(express.static(__dirname + '/public'));
app.configure('development', function() {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});




/*
    var url_parts = url.parse(req.url, true);
    var request = url_parts.query;
    var xbmcApi = new Xbmc.XbmcApi;
    xbmcApi.setConnection(connection);

    res.send('<p> Command:' + request.command + ':Recieved</p>');

    var id = process.argv[2] || 'QH2-TGUlwu4';

    xbmcApi.player.openYoutube(id);
*/


app.post('/SendProxy', function(req, res) {
    var options = {
        host: 'beta.ku',
        port: 8080,
        path: '/jsonrpc',
        method: 'POST'
    };
    var YoutubePayload = '{"jsonrpc": "2.0", "method": "Player.Open", "params": { "item": { "file": "plugin://plugin.video.youtube/?action=play_video&videoid=nC1yLD7R0ZU" }  }, "id": "libPlayerOpen"}'

    var reqw = http.request(options, function(res) {
        console.log('BODY:' + JSON.stringify(req.body));
        console.log('SERVER:' + JSON.stringify(req.headers.server));


        res.setEncoding('utf8');
        res.on(req.body, function(chunk) {
            console.log('BODY: ' + chunk);
        });
    });

    reqw.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    // write data to request body
    /*        reqw.write(YoutubePayload);
     */
    reqw.write(JSON.stringify(req.body));
    reqw.end();
    res.send('<p> Command:' + ':Recieved</p>');
});
