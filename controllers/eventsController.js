exports.homePage = (req, res) => {
	// console.log(req.body)
	// req.query
	res.render('index', {title: 'Home'});
	// res.json(req.query);
}

