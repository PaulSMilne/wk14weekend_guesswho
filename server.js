var express = require('express');
var app = express();
var path = require('path')
var fs = require('fs');
var ZOOMBINIS_DATA = path.join(__dirname + '/data/zoombinis.json');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/zoombinis', function (req, res) {
  fs.readFile(ZOOMBINIS_DATA, function(err, data){
    if(err){
      console.error(err)
      return
    }
    res.json(JSON.parse(data))
  });
});

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

console.log('Listening at http://%s:%s', host, port);
});
