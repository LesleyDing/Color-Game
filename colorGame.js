var hard = 6;
var easy = 3;
var level = hard;
var squares = document.querySelectorAll(".square");

document.querySelector("#hard").classList.add("selected");

var pickedColor = setup();
choiceHandler();


// to get new colors
document.querySelector("#reset").addEventListener("click", function() {
	pickedColor = setup();
})

// to change the level
document.querySelector("#easy").addEventListener("click", function() {
	if (level != easy) {
		level = easy;
		document.querySelector("#easy").classList.add("selected");
		document.querySelector("#hard").classList.remove("selected");
		pickedColor = setup();
	}
})
document.querySelector("#hard").addEventListener("click", function() {
	if (level != hard) {
		level = hard;
		document.querySelector("#hard").classList.add("selected");
		document.querySelector("#easy").classList.remove("selected");
		pickedColor = setup();
	}
})

// setup a new game with new colors
function setup() {
	document.querySelector("#result").textContent = "";
	document.querySelector("h1").style.background = "steelblue";
	var colors = setColors(level);
	var pickedColor = pickColor(colors);
	document.querySelector("#prompt").textContent = pickedColor.toUpperCase();
	for(var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}

	return pickedColor;
}

function choiceHandler() {
	for(var i = 0; i < level; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.background;
			if (clickedColor === pickedColor) { // if click the correct square
				for(var j = 0; j < level; j++) {
					squares[j].style.background = pickedColor;
				}
				document.querySelector("h1").style.background = pickedColor;
				document.querySelector("#result").textContent = "CORRECT!";
				document.querySelector("#reset").textContent = "PLAY AGAIN?";
			} else { // if it's incorrect
				this.style.background = "#232323";
				document.querySelector("#result").textContent = "TRY AGAIN!"
			}
		})
	}
}

// get ramdom rgb value
function randomColor() {
	var r = Math.floor(Math.random() * 256); // red
	var g = Math.floor(Math.random() * 256); // green
	var b = Math.floor(Math.random() * 256); // blue
	var color = "rgb(" + r + ", " + g + ", " + b + ")";
	return color;
}

function setColors(size) {
	var colors = [];
	for (var i = 0; i < size; i++) {
		colors[i] = randomColor();
	}
	return colors
}

function pickColor(colorsArr) {
	var x = Math.floor(Math.random() * colorsArr.length);
	return colorsArr[x];
}