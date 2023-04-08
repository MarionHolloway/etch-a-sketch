const container = document.querySelector('#container');

const content = document.createElement('div');
content.style.backgroundColor = "blue";
content.classList.add('pixel');

for (let size = 0; size < 16; size++) {
    container.appendChild(content.cloneNode(true));
}