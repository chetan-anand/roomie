function validate()
{
	//var roomName=req.query.nickname.split('@')[1];
	var nickroom=document.forms["form"]["nickroom"].value;
	var password=document.forms["form"]["password"].value;
	var nickname=nickroom.split('@')[0];
	var roomname=nickroom.split('@')[1];
	var flag=true;
	console.log(nickname+' '+roomname+' '+password);
	if (nickname==null || nickname=="" || roomname==null || roomname=="")
	{
		form.nickroom.style.borderColor='red';
		form.nickroom.focus();
		flag=false;
	}
	else
	{
		form.nickroom.style.borderColor='green';
	}
	
	if (password==null || password.length<4)
	{
		form.password.style.borderColor='red';
		form.password.focus();
		flag=false;
	}
	else
	{
		form.password.style.borderColor='green';
	}

  	return flag;

}