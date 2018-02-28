var express = require('express');
var cookieParser = require('cookie-parser');
// post请求会用到
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
app.get('/user/123456', function (req, res) {
    setTimeout(function() {
        res.send({"status":"success", "firstName": 11, "lastName": 22})
    }, 3000);
    
});
app.get('/user/12345', function (req, res) {
    setTimeout(function() {
        res.send({"status":"success", "firstName": 11, "lastName": 22})
    }, 3000);
    
});
app.post('/user/12345', function (req, res) {
    setTimeout(function() {
        res.send({"status":"success", "firstName": 11, "lastName": 22})
    }, 3000);
    
});

