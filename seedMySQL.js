var mysql = require('mysql2');

var drop = 'truncate table `legends`;'
var seedQuery = 'insert into `legends` (`title`, `nick`, `avatar`, `desc`) values ("Рэйф", "wraith", "/images/wraith.png", "Боец-вихрь, способный проводить смертоносные атаки, а также манипулировать пространством-временем, создавая разломы в ткани реальности."), ("Октейн", "octane", "/images/octane.png", "Скоростной сорвиголова, чьи умения включают в себя регенерацию здоровья, ускорение и установку катапульты. Неоновые трубки и цилиндр, прикрепленный к бедру Октейна, а также металлические ноги указывают на то, что Октейн — киборг."), ("Крипто", "crypto", "/images/crypto.png", "Эксперт по разведке. Этот гениальный хакер и мастер шифрования использует свои воздушные дроны для слежки за противниками на арене Apex, оставаясь в тени.");'

var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '2003',
    database: 'apexlegends'
});

connection.connect()

console.log("Running SQL seed...")

// Drop content
connection.query(drop, err => {
    if(err) {
        throw err
    }
    // Seed content
    connection.query(seedQuery, err => {
    if(err) {
        throw err
    }    
    console.log("SQL seed completed!")
    connection.end()
    })
})