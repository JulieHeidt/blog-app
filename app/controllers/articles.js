//controllers
var Article = require('../models/article');

function create(req, res) {
	//instantiate a new article using our awesome Schema:
	var article = new Article(req.body);
	console.log(req.body);

	//save the Article
	article.save(function(err) {
		if (err) {
			console.log('not able to create article b/c ' +err);
		} else {
		res.json({message: 'Article sucessfully created'});
	}
	})
}

module.exports = {
	create: create
	//index: index
};