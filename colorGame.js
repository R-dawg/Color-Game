var colors = genRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){ 
	// generate all new colors
	colors = genRandomColors(6);
	// pick new random coolor
	pickedColor = pickColor();
	// change colorDisplay to match new pickedColor
	colorDisplay.textContent = pickedColor;
	// change square colors
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}

	resetButton.textContent = "New Color";
	header.style.background = "#232323";
});

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		console.log(clickedColor + " " + pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors();
			header.style.background = pickedColor;
			resetButton.textContent = "Play Again";
		}else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

// change all squares to the selected color
function changeColors() {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = pickedColor;
	}

}

// pick a random color from the available choices
function pickColor() {
	var randomColor = Math.floor(Math.random() * colors.length);
	return colors[randomColor];
}

// generate new list of colors
function genRandomColors(num){
	var colorArray = [];
	for(var i=0; i<num; i++){
		colorArray.push(randomColor())
	}
	return colorArray;
}

// generate random rgb color value
function randomColor() {
	// gen red value
	var r = Math.floor(Math.random() * 256);
	// get green value
	var g = Math.floor(Math.random() * 256);
	// gen blue value
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}