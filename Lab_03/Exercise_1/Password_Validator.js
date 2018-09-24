function Validate(){
	p1=document.getElementById("pass1").value
	p2=document.getElementById("pass2").value
	
	if(p1.length<8 || p2.length<8){
		alert("the passwords are not at least 8 characters long")
	}
	else if(p1 != p2){
		alert("the passwords entered don't match")
	}
	else{
		alert("The passwords entered match")
	}
}