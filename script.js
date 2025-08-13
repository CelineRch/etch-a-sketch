const container = document.querySelector(".container");
let startingColor = "rgb(53, 53, 53)";
let hoverColor = startingColor;
let eraser = false;

container.addEventListener("mouseover", (event) => {
    const cell = event.target.closest(".cell");
    if (cell) {
        cell.style.backgroundColor = hoverColor;
    }

})

function updateGrid(size) {
    if (container.children.length === 0) {
        for (let i = 0; i < size * size; i++) {
            const newCell = document.createElement("div");
            newCell.classList.add("cell");
            newCell.style.width = 100/size + "%";
            container.appendChild(newCell);
        }
    } else {
        container.textContent = '';
        updateGrid(size);
    }
}

updateGrid(16);

var slider = document.querySelector(".slider");
var output = document.querySelector(".size");
output.textContent = slider.value + "x" + slider.value;

slider.oninput = function() {
  output.textContent = this.value + "x" + this.value;
  updateGrid(this.value);
}

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (event) => {
    const button = event.target.id;
    switch (button) {
        case "clear":
            clearGrid();
            break;
        case "eraser":
            toggleEraser();
            break;
        default:
            return;
    }
})

function clearGrid() {
    const cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white";
    }
}

function toggleEraser() {
    if (eraser) {
        changeColor(startingColor);
        eraser = false;
    } else {
        changeColor("white");
        eraser = true;
    }
}

function changeColor(color) {
    hoverColor = color;
}