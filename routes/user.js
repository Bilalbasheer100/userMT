var express = require('express');
var router = express.Router();
var userHelpers = require('../helpers/user-helpers');

/* GET home page. */
router.get('/', function(req, res, next) {
  userHelpers.getAllUser().then((users)=>{
    res.render('user/user',{users});
  })

  
});

module.exports = router;
