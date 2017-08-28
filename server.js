// User Story: I can get the IP address, language and operating system for my browser.
var express = require('express');
var cors = require('cors');
var app = express();
var port = process.env.PORT || 8080;


// need to enable CORS to test from localhost
app.use(cors());
// this block will return IP address, language, and operating system for the browser 

app.get('/', function(req, res) {
    res.send({'see': 'go to /app/whoami to see your IP, language, and OS'});
});

app.get('/app/whoami', function(req, res) {
    var language = req.headers['accept-language'].split(',');
    var osStart = req.headers['user-agent'].indexOf('(') + 1;
    var osEnd = req.headers['user-agent'].indexOf(')');
    var os = req.headers['user-agent'].slice(osStart,osEnd);

    console.log(os);
    
    res.send({ 'IP': req.ip, 'language' : language[0], 'os': os });
});

app.listen(port);

