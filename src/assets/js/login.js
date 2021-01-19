function validation2(){
  var user1= document.getElementById('user').value;
  var password1 =document.getElementById('password').value;
  if(user1 == "" )
  {
    document.getElementById('message').innerHTML="**please enter user id**";
    return false;
  }
  if(password1.length < 6 || password1 == ""){
    document.getElementById('message').innerHTML="**Please enter the atleast 6 digit or character password**";
    return false;
  }
  else
  {
    return true;
  }
}
