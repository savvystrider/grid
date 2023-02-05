const gridContainer = document.getElementById("grid-container");
var div = document.createElement("div");
let gridChild = document.querySelectorAll(".grid-child");
const gridBtn = document.getElementById("grid-btn");
const clearBtn = document.getElementById("clear-btn");
const gridInput = document.getElementById("grid-input");

window.onload = createGrid();

clearBtn.addEventListener("click", function() {
    gridContainer.innerHTML = "";
    gridBtn.addEventListener("click");
})

gridBtn.addEventListener("click", function() {
    if (gridInput.value >= 1) {
      styleGrid();
      customGrid();
    }
});

function createGrid() {
  for (let i = 0; i < 256; i++) {
    div = document.createElement("div");
    div.classList.add("grid-child");
    div.addEventListener("mouseover", (event) => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * letters.length);
        color += letters[index];
    }
        event.target.style.backgroundColor = color;
    })
    if (gridContainer) {
       gridContainer.style = `
        display: grid;
        max-width: 80%;
        margin: 0 auto;
        grid-gap: 0;
        gap: 0;
        padding: 0;
        grid-template-columns: repeat(16, 1fr);
        grid-template-rows: repeat(16, 1fr);
    ` 
    }
    gridContainer.appendChild(div);
  }
}

function styleGrid() {
    gridContainer.style = `
    display: grid;
    max-width: 100%;
    margin: 0 auto;
    grid-gap: 0;
    padding: 0;
    grid-template-columns: repeat(${gridInput.value}, 1fr);
    grid-template-rows: repeat(${gridInput.value}, 1fr);
    grid-auto-columns: auto;
    grid-auto-rows: auto;
    `
}

function customGrid() {
  const newGrid = (gridInput.value * gridInput.value);
  for (let i = 0; i < newGrid; i++) {
    div = document.createElement("div");
    gridChild = div.classList.add("grid-child");
    div.addEventListener("mouseover", (event) => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * letters.length);
        color += letters[index];
    }
        event.target.style.backgroundColor = color;
    })
    gridContainer.appendChild(div);
  }
}