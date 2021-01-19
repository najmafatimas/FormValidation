function validation1(){
			var name1 = document.getElementById('name').value;
			var number1 = document.getElementById('number').value;
			var email1 = document.getElementById('email').value;
			var password1 = document.getElementById('password').value;

			if(name1 == ""){
				document.getElementById('name2').innerHTML="**Please enter the name**"
				return false;
			}
			if((number1.length!=10) || number1 == ""){
				document.getElementById('number2').innerHTML="**Please enter the 10 digit phone number**"
				return false;
			}
			if(email1 == ""){
				document.getElementById('email2').innerHTML="**Please enter the email address**"
				return false;
			}
			if(password1 == "" || (password1.length<6)){
				document.getElementById('password2').innerHTML="**Please enter atleast 6 digit or character password**"
				return false;
			}
			else{
				 return true;
			}
		}
