var express = require('express');
var app = express();
var resume = require('./lib/resume.json');

var handlebars = require('express-handlebars').create({ defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 1337);

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/resume.json', function(req, res) {
  res.send(resume);
});

app.listen(app.get('port'), function() {
  console.log('Thought Collection Proxy started on port 1337');});
