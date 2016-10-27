var colors = genRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		console.log(clickedColor + " " + pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors();
			header.style.background = pickedColor;
		}else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors() {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = pickedColor;
	}

}

function pickColor() {
	var randomColor = Math.floor(Math.random() * colors.length);
	return colors[randomColor];
}

function genRandomColor(num){
	var colorArray = [];
	for(var i=0; i<num; i++){
		colorArray.push(randomColor())
	}
	return colorArray;
}

function randomColor() {
	// gen red value
	var r = Math.floor(Math.random() * 256);
	// get green value
	var g = Math.floor(Math.random() * 256);
	// gen blue value
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}