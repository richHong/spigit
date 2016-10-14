var express = require('express');
var bodyParser = require('body-parser');
var data = require('./data.json');
var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/data', function(req,res){
  res.send(data);
});

app.listen(port, function(){
  console.log('listening on port' + port);
});