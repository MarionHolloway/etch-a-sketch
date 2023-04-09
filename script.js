function changeColour(box) {
    box.setAttribute('style', 'background-color: black;');
}


function setHoverEffect() {
    const boxes = document.getElementsByClassName('pixel');

    for (const box of boxes) {
        box.addEventListener('mouseenter', function() {changeColour(box)});
    }
}


function createGrid(container, cells) {
    const pixel = document.createElement('div');
    pixel.style.backgroundColor = "grey";
    pixel.classList.add('pixel');

    const row = document.createElement('div');
    row.classList.add('row');

    for (let i = 0; i < cells; i++) {
        row.appendChild(pixel.cloneNode(true));
        
    }

    for (let j = 0; j < cells; j++) {
        container.appendChild(row.cloneNode(true));
    }
    setHoverEffect();
}


function setGridSize() {
    while (container.firstChild) {
        container.firstChild.remove()
    }

    let response = prompt("What size grid do you want?", 16);
    let cells = parseInt(response);


    if (cells != null || cells != NaN) {
        if (cells <= 100 && cells > 0) {
            createGrid(container, cells)
        }
        else {
            cells = prompt("The size must be between 1 and 100. What size grid do you want?", 16);
        }
    }
    else {
        cells = prompt("Please type a number. What size grid do you want?", 16);
    }
}

const startingCells = 64;
const container = document.querySelector('#container');
createGrid(container, startingCells);
const btn = document.querySelector('#btn');
btn.addEventListener('click',setGridSize);