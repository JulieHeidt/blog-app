var express = require( 'express' ),
	app = express(),
	mongoose = require( 'mongoose' ),
	bodyParser = require( 'body-parser' ),
	apiRouter = require ('./app/config/routes' ),
	DB = 'mongodb://locolhost:27017/blog-app'; //connects our local db on port 27017
	port = 3000;

//bodyParser config:
app.use(bodyParser.urlencoded( { extended: true } ) );
app.use(bodyParser.json() );

//connect our DB
mongoose.connect( DB );

//routes config: //namespace for api
app.use( '/api', apiRouter )

app.listen(port);
console.log( 'magic is happening on port ' + port );