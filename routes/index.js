var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/foo', (req, res) => {
  res.render('foo', { title: 'Foo Bar'});
});

module.exports = router;
