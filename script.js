const gridContainer = document.createElement("div");

let body = document.querySelector("body");
body.appendChild(gridContainer);

gridContainer.setAttribute("class", "grid-container");

document.querySelector("#reset").addEventListener("click", newGame);

createGrid(16);

function createGrid(dimensions){
    gridContainer.style.gridTemplateColumns = `repeat(${dimensions}, "1fr")`;
    gridContainer.style.gridTemplateRows = `repeat(${dimensions}, "1fr")`;
    
    //Creates dimensions-squared divs
    for(let row = 0; row < dimensions; row++){
        for(let col = 0; col < dimensions; col++){
            let div = document.createElement("div");
            div.style.gridColumnStart = col;
            div.style.gridColumnEnd = col + 1;
            div.style.gridRowStart = row;
            div.style.gridRowEnd = row + 1;
            div.setAttribute("class", "grid-element");
            gridContainer.appendChild(div);
            div.addEventListener("mouseenter", highlight);
        } 
    }
}

function highlight(e){
    let element = e.target;
    element.classList.add("hover");
}

function newGame(){
    createGrid(prompt("How many tiles would you like in the rows and columns?"));
    Array.from(document.querySelectorAll(".grid-element")).forEach(element => {
        element.classList.remove("hover");
    });
}

