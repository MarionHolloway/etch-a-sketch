function createGrid(container) {
    const pixel = document.createElement('div');
    pixel.style.backgroundColor = "blue";
    pixel.classList.add('pixel');

    const row = document.createElement('div');
    row.style.backgroundColor = "green";
    row.classList.add('row');

    for (let size = 0; size < 16; size++) {
        row.appendChild(pixel.cloneNode(true));
        
    }

    for (let rows = 0; rows < 16; rows++) {
        container.appendChild(row.cloneNode(true));
    }
}

function changeColour(box) {
    box.setAttribute('style', 'background-color: yellow;');
}

const container = document.querySelector('#container');
createGrid(container);





const boxes = document.getElementsByClassName('pixel');

for (const box of boxes) {
  box.addEventListener('mouseenter', function() {changeColour(box)});
}