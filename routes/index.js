var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log("Index is called");
    res.render('index', { title: 'Express' });
});

router.get('/join', function(req, res) {
	//console.log('Join is called');
  	// Get our form values. These rely on the "name" attributes
  	var nickroom=req.query.nickroom;
  	var password=req.query.password;
  	var nickname=nickroom.split('@')[0];
	var roomname=nickroom.split('@')[1];
  	// console.log(nickname+' '+roomname+' '+password);
    // rewriting session variables
    req.session.nick=nickname;
    req.session.room=roomname;
    req.session.pass=password;
  	res.redirect('/room/'+roomname);
});

router.get('/room/:roomname',function(req,res){
	//console.log('Hey bro');
	//console.log('Coockie: ',req.cookies);
    //console.log('Session ',req.session);
  if(req.session.nick && req.session.pass && req.session.room){
    //if a person has his nickname set, let him reach that
    res.render('room', { title: 'Room' });
  }
  else{
    //make sure he/she is asked a username
    res.redirect('/');
  }
});

module.exports = router;
