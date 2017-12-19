var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	var 
  userName = req.query.txtUserName,
  userPwd = req.query.txtUserPwd,
  userName2 = req.param('txtUserName'),
  userPwd2 = req.param('txtUserPwd');

  console.log('req.query用户名:'+userName);
  console.log('req.query密码:'+userPwd);
  console.log('req.param用户名:'+userName2);
  console.log('req.param密码:'+userPwd2);

	res.render('subform', {
		title: 'subform'
	})
})

module.exports=router;