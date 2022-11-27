var express = require('express');
const { Legend } = require('../models/legend');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с legends');
});

/* Страница легенд */
router.get('/:nick', function(req, res, next) {
  Legend.findOne({nick:req.params.nick}, function(err, legend) {
    if (err) return next(err)
    if (!legend) return next(new Error ("Нет такой легенды"))
    res.render('legend', {
      title: legend.title,
      picture: legend.avatar,
      desc: legend.desc
    })
  })
});

module.exports = router;