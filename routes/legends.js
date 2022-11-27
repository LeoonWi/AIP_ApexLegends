var express = require('express');
const { Legend } = require('../models/legend');
var router = express.Router();

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