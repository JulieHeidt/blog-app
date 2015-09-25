var express = require( 'express' ),
	apiRouter = express.Router(),
	articlesController = require( '../controllers/articles' ),
	Article = require( '../models/article' );

apiRouter.route('/articles')
    .post(articlesController.create)
    
    //creates new instance of article using request body
    // var article = new Article( req.body )

    //save the article, callback-->handle errors

module.exports = apiRouter;