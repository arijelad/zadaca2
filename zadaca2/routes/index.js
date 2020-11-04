var express = require('express');
var router = express.Router();
var facts = require('fun-facts');

/* GET home page. */
router.get('/facts/:k', function (req,res,nexr) {
  let k = req.params.k;
  let all =[];
  for (let i =0;i<k;i++){
    let f = facts.get();
    all.push(f.fact);
  }
  console.info(all);

  res.render('lista', {title: 'Fun facts', facts: all});

});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/:ime/:prezime', function(req, res, next) {
  let imena = req.params.ime;
  let prezimena = req.params.prezime;

  res.render('firstRoute', { title: 'Zadaca 2,routa 1', ime: imena, prezime: prezimena });
});

router.get('/user/:ime', function(req, res, next) {
  let imena = {
    ime : req.params.ime,
    prezime: 'Dervisevic'
  };
  let fact = facts.get();

  res.render('secondRoute', { title: 'Zadaca 2,routa 2', ime: imena.ime, prezime: imena.prezime, facts: fact.fact });
});


router.get('/testiramo', function(req, res, next) {

  res.render('thirdRoute', { title: 'Zadaca 2,routa 3'});
});

router.post('/test', function(req, res, next) {
  let k = Math.floor(Math.random() * (5 - 1) + 1);
  let x = req.body.cat;
  console.info(x);
  res.redirect('/facts/' +k);

});



module.exports = router;
