var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var Legend = mongoose.model('Legend', {name: String})
var Wraith = new Legend({name: 'Рэйф'})
Wraith.save(function(err)
{
    if(err) {
        console.log(err)
    }
    else {
        console.log('APEXLEGENDS')
    }
})