
var express = require('express');
var router = express.Router();
var crypto = require('crypto');


router.get('/',function(req,res){
	res.render('usecrypto', {
		title: 'usecrypto'
	})
})
router.post('/',function(req,res){
	var userName =req.body.txtUserName,
	userPwd=req.body.txtUserPwd;
	var md5=crypto.createHash('md5');
	var en_upwd=md5.update(userPwd).digest('hex');
	console.log('加密后的密码:'+en_upwd);
	res.render('usecrypto', {
		title: 'usecrypto1'
	})
})

module.exports=router;