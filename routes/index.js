var express = require('express');
var router = express.Router();
var Legend = require("../models/legend").Legend

/* Домашняя страница */
router.get('/', function(req, res, next) {
    Legend.find({}, {_id: 0, title: 1, nick: 1}, function(err, menu) {
        req.session.greeting = "Hi!!!"
        res.render('index', {
            title: "Apex Legends",
            picture: "images/apex-legends-team.png",
            counter: req.session.counter
        });
    })
});

/* logreg */
router.get('/logreg', function(req, res, next) {
    res.render('logreg', {title: 'Вход'});
});

module.exports = router;
