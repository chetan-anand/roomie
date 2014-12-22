var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	
  res.render('index', { title: 'Express' });
  console.log('Index is called');
	console.log("Cookies: ", req.cookies);
});

router.get('/join', function(req, res) {
	console.log('Join is called');
  	
  	// Get our form values. These rely on the "name" attributes
  	var nickroom=req.query.nickroom;
  	var password=req.query.password;
  	var nickname=nickroom.split('@')[0];
	var roomname=nickroom.split('@')[1];

  	console.log(nickname+' '+roomname+' '+password);
  	console.log("Session: ", req.session);
  	/*req.cookies.nick=nickname;
  	req.cookies.room=roomname;
  	req.cookies.pass=password;
  	console.log("Cookies: ", req.cookies);*/
  	
    req.session.nick = nickName;
  	res.redirect('/room/'+roomname);
});

router.get('/room/:roomname',function(req,res){
	console.log('Hey bro');
	console.log(req.cookies);
  if(req.cookies.nick || req.cookies.pass){
    //if a person has his nickname set, let him reach that
    res.render('room', { title: 'Room' });
  }
  else{
    //make sure he/she is asked a username
    res.redirect('/');
  }
});

module.exports = router;
