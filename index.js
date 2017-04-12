var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();


// Routing
app.use(express.static(__dirname ));

app.set('port', (process.env.PORT || 5000));
// views is directory for all template files
app.set('views', __dirname);
app.set('view engine', 'ejs');

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.get('/', function(req, res){
  console.log("making get request");
  res.render('index.ejs');
});

app.get('/facebook', function(req, res){
  debugger;

  res.JSON({a:"apple"});
});

app.use('/api', router);

router.get('/facebook', function(req,res){
  console.log(req.query);
  console.log("banana");
  getFacebookPage(req.query.pageName);
  res.json({ message: 'hooray! welcome to our api!' });
});


var request = require('request');
var cheerio = require('cheerio');

var seed = process.argv[2];

var history = {};
