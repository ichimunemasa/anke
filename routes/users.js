var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('anke',{title:'ANKE'})
});


router.get('/input',function(req,res,next){
  res.render('thanks',{title:'THANK YOU'})
});




module.exports = router;
