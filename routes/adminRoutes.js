const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('You are in Admin')
});

module.exports = router;