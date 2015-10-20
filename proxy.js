var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({
  defaultLayout:'main';
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 1337);

app.get('/', function(req, res) {
  res.send("Hello World!");
});

app.listen(app.get('port'), function() {
  console.log('Thought Collection Proxy started on port 1337');});
