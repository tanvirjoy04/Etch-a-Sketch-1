const squareDiv = document.querySelector(".square-div");
let grid = 16**2

for (let i = 0; i < grid; i++) {
    const newDiv = document.createElement("div")
    newDiv.classList.add("item");

    squareDiv.appendChild(newDiv)
}


