var express = require('express');
var router = express.Router();

/* Домашняя страница */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Apex Legends' });
});

/* Страница Рэйф */
router.get('/wraith', function(req, res, next) {
  res.send("<h1>Страница Рэйф</h1>")
})

/* Страница Октейна */
router.get('/octane', function(req, res, next) {
  res.send("<h1>Страница Октейна</h1>")
})

/* Страница Крипто */
router.get('/crypto', function(req, res, next) {
  res.send("<h1>Страница Крипто</h1>")
})

module.exports = router;
