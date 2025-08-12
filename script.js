const container = document.querySelector(".container");

const cells = document.querySelector(".cell");
container.addEventListener("mouseover", (event) => {
    const cell = event.target.closest(".cell");
    if (cell) {
        cell.classList.add("hover-effect");
    }

})

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const newCell = document.createElement("div");
        newCell.classList.add("cell");
        newCell.style.width = 100/size + "%";
        container.appendChild(newCell);
    }
}

createGrid(16);