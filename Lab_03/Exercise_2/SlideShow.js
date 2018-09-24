var curImg=0;
const Width=200;
const Height=200;
function Back(){
	curImg=(curImg-1)%5;
	setNextImg();
}
function Next(){
	curImg=(curImg+1)%5;
	setNextImg()
}
function setNextImg(){
	switch(curImg){
		case 0:
			document.getElementById("curImg").src="img1.png";
			document.getElementById("curImg").width=Width;
			document.getElementById("curImg").height=Height;
			break;
		case 1:
			document.getElementById("curImg").src="img2.png";
			document.getElementById("curImg").width=Width;
			document.getElementById("curImg").height=Height;
			break;
		case 2:
			document.getElementById("curImg").src="img3.png";
			document.getElementById("curImg").width=Width;
			document.getElementById("curImg").height=Height;
			break;
		case 3:
			document.getElementById("curImg").src="img4.png";
			document.getElementById("curImg").width=Width;
			document.getElementById("curImg").height=Height;
			break;
		case 4:
			document.getElementById("curImg").src="img5.png";
			document.getElementById("curImg").width=Width;
			document.getElementById("curImg").height=Height;
			break;
	}
}