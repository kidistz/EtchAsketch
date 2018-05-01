const grid = document.querySelector('#grid');
const resetButton = document.querySelector('#reset')
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

const gridCells = document.querySelectorAll('.grid-cell');

// grid-cells change color on mouse hover
function colorise(x) {
	x.classList.add('black');
}

// clearing and geting input
resetButton.addEventListener('click', () => {
  input = prompt("new size?", 12);
  grid.innerHTML = "";
  createGrid();
});

createGrid();