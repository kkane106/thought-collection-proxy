var express = require('express');
var app = express();

app.set('port', process.env.PORT || 1337);

app.get('/', function(req, res) {
  res.send("Hello World!");
});

app.listen(app.get('port'), function() {
  console.log('Thought Collection Proxy started on port 1337');});
