var express = require('express');
var router = express.Router();
var Legend = require('../models/legend').Legend;
var async = require("async");

/*GET users listing*/
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор для маршрутов начинающихся с legends')
})

/* Страница легенд */
router.get('/:nick', function(req, res, next) {
    async.parallel(
        [
            function(callback) {
                Legend.findOne({nick: req.params.nick}, callback)
            },
            function(callback) {
                Legend.find({}, {_id: 0, title: 1, nick: 1}, callback)
            }
        ],
        function(err, result) {
            if(err) return next(err)
            var legend = result[0]
            var legends = result[1] || []
            console.log(legends)
            if(!legend) return next(new Error("Нет такой легенды"))
            res.render('legend', {
                title: legend.title,
                picture: legend.avatar,
                desc: legend.desc,
                menu: legends
            })
        }
    )
})

module.exports = router;