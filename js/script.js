const container = document.querySelector(".container");
const squareDiv = document.querySelector(".square-div")
let line = 16

let itemWidth = `${100 / line}%`
let grid = line ** 2;
let fragment = document.createDocumentFragment()

for (let i = 0; i < grid; i++) {
    const newDiv = document.createElement("div")
    newDiv.classList.add("item")
    newDiv.style.width = itemWidth

    fragment.appendChild(newDiv)
}

squareDiv.appendChild(fragment)

let items = document.querySelectorAll(".item")

for (let item of items) {
    item.addEventListener("mouseenter", () => {
        item.style.backgroundColor = "yellow"
    })
}