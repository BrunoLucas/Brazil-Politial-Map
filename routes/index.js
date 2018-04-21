var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/geral', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/pv', function(req, res, next) {
  res.render('pv', { title: 'Express' });
});

module.exports = router;
