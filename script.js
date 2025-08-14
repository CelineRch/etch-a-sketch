let startingColor;
let hoverColor;
let eraser;
let rainbow;
const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => {
    init();
});

function init() {
    container.addEventListener("mouseover", (event) => {
        const cell = event.target.closest(".cell");
        if (cell) {
            hoverColor = rainbow ? randomizeColor() : startingColor;
            hoverColor = eraser ? "white" : hoverColor;
            cell.style.backgroundColor = hoverColor;
        }
    })
    eraser = false;
    startingColor = "rgb(53, 53, 53)";
    hoverColor = startingColor;
    updateGrid(16);
    generateSlider();
    addButtonsListeners();
}

function randomizeColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")"; 
}

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

function generateSlider() {
    var slider = document.querySelector(".slider");
    var output = document.querySelector(".size");
    output.textContent = slider.value + "x" + slider.value;

    slider.oninput = function() {
        output.textContent = this.value + "x" + this.value;
        updateGrid(this.value);
    }
}

function addButtonsListeners() {
    const buttons = document.querySelector(".buttons");
    buttons.addEventListener("click", (event) => {
        const button = event.target.closest("button");
        if (!button) return;
        switch (button.id) {
            case "clear":
                clearGrid();
                break;
            case "eraser":
                button.classList.toggle("button-clicked");
                eraser = !eraser;
                break;
            case "rainbow":
                button.classList.toggle("button-clicked");
                rainbow = !rainbow;
                break;
            default:
                return;
        }
    })
}

function clearGrid() {
    const cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "white";
    }
}