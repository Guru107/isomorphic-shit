var JSX = require('node-jsx').install(),
	React = require('react'),
	Item = require('./Item'),
	ItemFactory = React.createFactory(Item);
module.exports = {
	index:function(req,res){
		var  markup = React.renderToString(
				ItemFactory({name:"Isomerphic"})
			);
		res.render('home',{
			markup:markup
		});
	}
}