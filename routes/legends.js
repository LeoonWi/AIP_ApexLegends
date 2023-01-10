var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
//var Legend = require('../models/legend').Legend;
//var checkAuth = require('../middleware/checkAuth.js')
//var async = require("async");

/*GET legends listing*/
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор для маршрутов начинающихся с legends')
})

/* Страница легенд */
router.get('/:nick', function(req, res, next) {
    db.query(`SELECT * FROM legends WHERE legends.nick = '${req.params.nick}'`, (err, legends) => {
        if(err) {
            console.log(err);
            if(err) return next(err)
        } else {
            if(legends.length == 0) return next(new Error("Нет такой легенды"))
            var legend = legends[0];
            res.render('legend', {
                title: legend.title,
                picture: legend.avatar,
                desc: legend.desc
            })
        }
    })
});

module.exports = router;

// router.get('/:nick', checkAuth, function(req, res, next) {
//     Legend.findOne({nick: req.params.nick}, function(err, legend) {
//         if(err) return next(err)
//         if(!legend) return next(new Error("Нет такой легенды"))
//         res.render('legend', {
//             title: legend.title,
//             picture: legend.avatar,
//             desc: legend.desc
//         })
//     })
// })
