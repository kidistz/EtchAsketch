const grid = document.querySelector('#grid');
const resetButton = document.querySelector('#reset');
const randomButton = document.querySelector('#random');
let randomColor = "";
let input = 16;

// creates Grid
function createGrid () {
	for (let i = 0; i < input; i++) {
		grid.innerHTML += '<div class="row"></div>';
	}
	const rows = document.querySelectorAll('.row');
	rows.forEach((row) => {
		for (let j = 0; j < input; j++) {
			row.innerHTML += '<div class="grid-cell" onmouseover="colorise(this)"></div>';
			console.log("Grid cell created");
		}
	});	
}

// grid-cells change color on mouse hover
function colorise(x) {
	if (randomColor != "") {
		x.classList.remove('black');
		x.style.background = randomColor;
	} else {
		x.classList.add('black');
	}
}

// randomize colors
randomButton.addEventListener('click', function randomRGBA() {
		let o = Math.round, r = Math.random, s = 255;
    randomColor = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
});

// clearing and getting input
resetButton.addEventListener('click', function getInput() {
  input = prompt("Please, input new size of board (1-64)", 14);
  grid.innerHTML = "";
  if (input <= 64) {
  	createGrid();
  } else {
  	getInput();
  } 
});

createGrid();