const gridSquare = document.querySelector(".grid-square");
const lineInit = 16;

function calcWidthPrecent (line) {
    widthPrecentage = 100 / line;
    return `${widthPrecentage}%`;
}

function createNewDiv (line) {
    let grid = line ** 2;
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < grid; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square-div");
        newDiv.style.flexBasis = calcWidthPrecent(line);
        fragment.appendChild(newDiv);
    }

    gridSquare.appendChild(fragment);

    // add event listner to all Square-div
    let items = document.querySelectorAll(".square-div");
    items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        // item.classList.add("hover")
        item.style.backgroundColor = randomColor()
    })
})

}

createNewDiv(lineInit);

// button for removing all exiting div and create new one

function removeAll (items) {
    for (let item of items) {
        item.remove()
    }
}

const gridBtn = document.querySelector("#grid-button")

gridBtn.addEventListener("click",  () => {
    let newLine = prompt("Inser number beetween 1-100")
    console.log(newLine)
    console.log(typeof(newLine))
    if (newLine > 100 || newLine < 0 || !Number(newLine)) {
        return alert("Please input valid number")
    }

    let numLine = Number(newLine)
    let items = document.querySelectorAll(".square-div")
    removeAll(items);
    createNewDiv(newLine)
    
})

// create random rgb color
function randomColor () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    
    let RGB = `rgb(${r}, ${g}, ${b})`
    return RGB
}