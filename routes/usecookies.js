var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	if(req.cookies.islogin){
		console.log('---usecookies:'+req.cookies.islogin);
		req.session.islogin=req.cookies.islogin;
	}
	if(req.session.islogin){
		console.log('---usecookies:'+req.session.islogin);
		res.locals.islogin=req.session.islogin;
	}
	res.render('usecookies', {
		title: 'usecookies'
	})
})

router.post('/',function(req,res){
	req.session.islogin='sucdcess';
	res.locals.islogin=req.session.islogin;
	res.cookie('islogin','success',{maxAge:60000});
	res.render('usecookies', {
		title: 'usecookies'
	})
})

module.exports=router;