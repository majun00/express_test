var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	if(req.session.islogin){
		console.log('---usesession:'+req.session.islogin);
		res.locals.islogin=req.session.islogin;
	}
	res.render('usesession', {
		title: 'usesession'
	})
})

router.post('/',function(req,res){
	req.session.islogin='success';
	res.locals.islogin=req.session.islogin;
	res.render('usesession', {
		title: 'usesession1'
	})
})

module.exports=router;