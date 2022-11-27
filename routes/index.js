var express = require('express');
var router = express.Router();

/* Домашняя страница */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Apex Legends",
    picture: "images/apex-legends-team.png"
  });
});

module.exports = router;
