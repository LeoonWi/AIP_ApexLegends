//var Legend = require("../models/legend").Legend
var db = require('../mySQLConnect.js');

module.exports = function(req, res, next) {
    res.locals.nav = []

    db.query(`SELECT * FROM legends`, (err, legends) => {
        if(err) throw err
        res.locals.nav = legends
        next()
    })
}