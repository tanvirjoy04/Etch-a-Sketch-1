const gridSquare = document.querySelector(".grid-square")
const lineInit = 16

function calcWidthPrecent (line) {
    widthPrecentage = 100 / line
    return `${widthPrecentage}%`
}

function createNewDiv (line) {
    let grid = line ** 2
    let fragment = document.createDocumentFragment()
    for (let i = 0; i < grid; i++) {
        const newDiv = document.createElement("div")
        newDiv.classList.add("square-div")
        newDiv.style.flexBasis = calcWidthPrecent(line)
        fragment.appendChild(newDiv)
    }

    gridSquare.appendChild(fragment)
}

createNewDiv(lineInit)