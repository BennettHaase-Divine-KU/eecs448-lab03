function run(){
	Boarder_red=document.getElementById("Boarder_Red").value;
	Boarder_green=document.getElementById("Boarder_Green").value;
	Boarder_blue=document.getElementById("Boarder_Blue").value;
	Boarder_width=document.getElementById("Boarder_Width").value;

	Background_red=document.getElementById("Background_Red").value;
	Background_green=document.getElementById("Background_Green").value;
	Background_blue=document.getElementById("Background_Blue").value;

	Boarder_color=Boarder_red.concat(Boarder_green).concat(Boarder_blue);
	Background_color=Background_red.concat(Background_green).concat(Background_blue);

	var paragraph = document.getElementById('dummy_p');

	paragraph.style.borderColor=Boarder_color;
	paragraph.style.borderWidth=Boarder_width;

	paragraph.style.backgroundColor=Background_color;

}