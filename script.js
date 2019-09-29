const gridContainer = document.createElement("div");

let body = document.querySelector("body");
body.appendChild(gridContainer);

gridContainer.setAttribute("class", "grid-container");

createGrid(16);

function createGrid(dimensions){
    gridContainer.style.gridTemplateColumns = `repeat(${dimensions}, "1fr")`;
    gridContainer.style.gridTemplateRows = `repeat(${dimensions}, "1fr")`;
    
    //Creates dimensions-squared divs
    for(let row = 0; row < dimensions*dimensions; row++){
        for(let col = 0; col < dimensions; col++){
            let div = document.createElement("div");
            div.style.gridColumnStart = col;
            div.style.gridColumnEnd = col + 1;
            div.style.gridRowStart = row;
            div.style.gridRowEnd = row + 1;
            div.setAttribute("class", "grid-element");
            gridContainer.appendChild(div);
            div.addEventListener("mouseenter", highlight);
            div.addEventListener("mouseleave", unhighlight);
        } 
    }
}

function highlight(e){
    let element = e.target;
    element.classList.add("hover");
}

function unhighlight(e){
    let element = e.target;
    element.classList.remove("hover");
}