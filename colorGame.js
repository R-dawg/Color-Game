
var numSquares = 6
var colors = genRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function(){
		// manipulate backgrounds
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		// calc number of squares
		// if(this.textContent === "Easy"){
		// 	numSquares = 3;
		// } else {
		// 	numSquares = 6;
		// }
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		// generate new colors
		// pick new color
		// display new colors
		reset();
	});
}

function reset(){
	// generate all new colors
	colors = genRandomColors(numSquares);
	// pick new random coolor
	pickedColor = pickColor();
	// change colorDisplay to match new pickedColor
	colorDisplay.textContent = pickedColor;
	// change square colors
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else{
			squares[i].style.display = "none";
		}
	}
	header.style.background = "steelblue";
	messageDisplay.textContent ="";
	resetButton.textContent = "New Color";
}

// easyBtn.addEventListener("click",function(){
// 	// toggle highlight
// 	this.classList.add("selected");
// 	hardBtn.classList.remove("selected");

// 	// set up new colors
// 	numSquares = 3;
// 	colors = genRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	// display only 3 colors
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.background = colors[i]; 
// 		} else {
// 			squares[i].style.display = "none";
// 		}	
// 	}

// });

// hardBtn.addEventListener("click",function(){
// 	// toggle highlight
// 	this.classList.add("selected");
// 	easyBtn.classList.remove("selected");

// 	// set up new colors
// 	numSquares = 6;
// 	colors = genRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	// display 6 colors
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = colors[i]; 
// 		squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function(){ 
	reset();
	// // generate all new colors
	// colors = genRandomColors(numSquares);
	// // pick new random coolor
	// pickedColor = pickColor();
	// // change colorDisplay to match new pickedColor
	// colorDisplay.textContent = pickedColor;
	// // change square colors
	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.background = colors[i];
	// }

	// this.textContent = "New Color";
	// header.style.background = "steelblue";
	// messageDisplay.textContent ="";
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