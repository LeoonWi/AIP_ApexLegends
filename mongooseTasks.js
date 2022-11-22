var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({name: String})

schema.methods.phrase = function() {
    console.log(this.get("name") + " поздоровалась.")
}

var Legend = mongoose.model('Legend', schema)
var Wraith = new Legend({name: 'Рэйф'})
Wraith.save(function(err)
{
    Wraith.phrase()
})