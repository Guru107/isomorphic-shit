var express = require('express'),
	exphbs = require('express-handlebars'),
	routes = require('./routes');

var app = express();

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.get('/',routes.index);
app.use(express.static('./public/'));
app.listen(9000);
console.log("App started at port:9000")