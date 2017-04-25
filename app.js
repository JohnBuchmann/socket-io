var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('App works!!!');
})

app.set('view engine', 'ejs');

app.listen(port);