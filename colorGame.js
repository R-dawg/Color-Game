
var numSquares = 6;
var colors = [];
var pickedColor;

//selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

// Initial game setup
function init(){
	// modeButton listeners
	setModeButtons();

	// squares listeners
	setSquares();

	reset();
}

function setModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			// manipulate backgrounds
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setSquares(){
	for(var i = 0; i < squares.length; i++){
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
}

// reset the game
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

resetButton.addEventListener("click", function(){ 
	reset();
});

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