var express = require('express');
var bodyParser = require('body-parser');
var data = require('./data.json');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/data', function(req,res){

  res.send(data);
});

app.listen(8080, function(){
  console.log('listening on localhost:8080');
});