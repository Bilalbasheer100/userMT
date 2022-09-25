var express = require('express');
const { response } = require('../app');
var router = express.Router();
var adminHelpers = require('../helpers/admin-helpers');
const { route } = require('./user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  adminHelpers.getAllUser().then((users)=>{
    res.render('admin/view-user',{users})
  })
});
//add user
router.post('/add-user',(req,res)=>{
adminHelpers.addUser(req.body).then(()=>{
  res.render('admin/admin')
})
});
router.get('/delete-user/:id',(req,res)=>{
  let userId=req.params.id
  console.log(userId);
  adminHelpers.deleteUser(userId).then((response)=>{
    res.redirect('admin/view-user')
  })
});
router.get('/edit-user/:id',(req,res)=>{
  let userId=req.params.id
  adminHelpers.getUserDetails(userId).then((users)=>{
    res.render('admin/edit-user',{users})
  })
});
router.post('/edit-user?"id',(req,res)=>{
  let userId=req.params.id
  let user=req.body

  adminHelpers.updateUser(userId,user)

})



module.exports = router;
