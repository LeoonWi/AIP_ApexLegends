var express = require('express');
var router = express.Router();

/* Домашняя страница */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Apex Legends",
    picture: "images/apex-legends-team.png"
  });
});

/* Страница Рэйф */
router.get('/wraith', function(req, res, next) {
  res.render('legend', {
    title: "Рэйф",
    picture: "images/wraith.png",
    desc: "Боец-вихрь, способный проводить смертоносные атаки, а также манипулировать пространством-временем, создавая разломы в ткани реальности."
  })
})

/* Страница Октейна */
router.get('/octane', function(req, res, next) {
  res.render('legend', {
    title: "Октейн",
    picture: "images/octane.png",
    desc: "Скоростной сорвиголова, чьи умения включают в себя регенерацию здоровья, ускорение и установку катапульты. Неоновые трубки и цилиндр, прикрепленный к бедру Октейна, а также металлические ноги указывают на то, что Октейн — киборг."
  })
})

/* Страница Крипто */
router.get('/crypto', function(req, res, next) {
  res.render('legend', {
    title: "Крипто",
    picture: "images/crypto.png",
    desc: "Эксперт по разведке. Этот гениальный хакер и мастер шифрования использует свои воздушные дроны для слежки за противниками на арене Apex, оставаясь в тени."
  })
})

module.exports = router;
