
var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();

// serve static content for the app from the "public" directorycoo
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs ({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
});